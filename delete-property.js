/**
 * Script to delete a specific property from Supabase
 * Run this with: node delete-property.js
 */

require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase credentials in .env.local')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function deleteProperty() {
    try {
        console.log('🔍 Fetching all properties...')

        // First, get all properties to see what we have
        const { data: properties, error: fetchError } = await supabase
            .from('properties')
            .select('*')

        if (fetchError) {
            console.error('❌ Error fetching properties:', fetchError)
            return
        }

        console.log(`\n📋 Found ${properties.length} properties:`)
        properties.forEach((prop, index) => {
            console.log(`\n${index + 1}. ${prop.title}`)
            console.log(`   ID: ${prop.id}`)
            console.log(`   Location: ${prop.location}`)
            console.log(`   Price: AED ${prop.price}`)
        })

        if (properties.length === 0) {
            console.log('\n✅ No properties found. Database is already clean!')
            return
        }

        // Delete all properties
        console.log('\n🗑️  Deleting all properties...')
        const { error: deleteError } = await supabase
            .from('properties')
            .delete()
            .neq('id', '00000000-0000-0000-0000-000000000000') // Delete all (this condition is always true)

        if (deleteError) {
            console.error('❌ Error deleting properties:', deleteError)
            return
        }

        console.log('✅ Successfully deleted all properties!')

        // Verify deletion
        const { data: remainingProps } = await supabase
            .from('properties')
            .select('count')

        console.log(`\n✅ Verification: ${remainingProps?.[0]?.count || 0} properties remaining`)

    } catch (error) {
        console.error('❌ Unexpected error:', error)
    }
}

deleteProperty()
