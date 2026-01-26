import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Abdalla Alowais Real Estate | Premium Properties in Sharjah, UAE',
    description: 'Discover your dream property in Sharjah with Abdalla Alowais Real Estate. Browse luxury apartments, villas, and commercial spaces for sale and rent.',
    keywords: 'real estate Sharjah, properties UAE, apartments for sale Sharjah, villas for rent, Abdalla Alowais',
    authors: [{ name: 'Abdalla Alowais Real Estate' }],
    openGraph: {
        title: 'Abdalla Alowais Real Estate | Premium Properties in Sharjah',
        description: 'Your trusted real estate partner in Sharjah, UAE',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    )
}
