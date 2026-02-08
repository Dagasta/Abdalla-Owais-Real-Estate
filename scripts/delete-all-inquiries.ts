import { supabaseAdmin } from './lib/supabase-server';

async function deleteAllInquiries() {
    console.log('Starting deletion of all inquiries...');

    // We can't use .delete() without a filter on some configurations, 
    // so we use .neq('id', '00000000-0000-0000-0000-000000000000') to match all UUIDs
    const { data, error, count } = await supabaseAdmin
        .from('inquiries')
        .delete({ count: 'exact' })
        .neq('id', '00000000-0000-0000-0000-000000000000');

    if (error) {
        console.error('Error deleting inquiries:', error);
        process.exit(1);
    }

    console.log(`Successfully deleted ${count} inquiries.`);
    process.exit(0);
}

deleteAllInquiries();
