import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zypzznmmbiwuosllssgt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cHp6bm1tYml3dW9zbGxzc2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MjQ3NDcsImV4cCI6MjA4NTAwMDc0N30.lpo0ZoLstBn2kB2jyzprY9DBXGsC3P0NhlY-sKc_1Rk'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function checkData() {
    const { data, error } = await supabase
        .from('properties')
        .select('id, title, type, status')

    if (error) {
        process.exit(1)
    }

    data.forEach(p => {
        console.log(`PROPERTY|${p.id}|${p.title}|${p.type}|${p.status}`)
    })
}

checkData()
