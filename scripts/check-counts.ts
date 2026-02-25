import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zypzznmmbiwuosllssgt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cHp6bm1tYml3dW9zbGxzc2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MjQ3NDcsImV4cCI6MjA4NTAwMDc0N30.lpo0ZoLstBn2kB2jyzprY9DBXGsC3P0NhlY-sKc_1Rk'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkCounts() {
    const { data, error } = await supabase
        .from('properties')
        .select('type, status')

    if (error) {
        console.error(error)
        process.exit(1)
    }

    const counts = data.reduce((acc: Record<string, number>, p) => {
        const key = `${p.type} (${p.status})`
        acc[key] = (acc[key] || 0) + 1
        return acc
    }, {})

    const types = Array.from(new Set(data.map(p => p.type)))
    console.log('Unique types in DB:', types)
    console.log('Database Statistics:')
    console.log(JSON.stringify(counts, null, 2))
}

checkCounts()
