import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zypzznmmbiwuosllssgt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cHp6bm1tYml3dW9zbGxzc2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0MjQ3NDcsImV4cCI6MjA4NTAwMDc0N30.lpo0ZoLstBn2kB2jyzprY9DBXGsC3P0NhlY-sKc_1Rk'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function listAll() {
    const { data, error } = await supabase
        .from('properties')
        .select('id, title, type, status, created_at')
        .order('created_at', { ascending: false })

    if (error) {
        console.error(error)
        process.exit(1)
    }

    console.log(JSON.stringify(data, null, 2))
}

listAll()
