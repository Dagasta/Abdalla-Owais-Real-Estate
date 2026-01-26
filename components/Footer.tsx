'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    {/* Company Info */}
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerHeading}>Abdalla Alowais Real Estate</h3>
                        <p className={styles.footerText}>
                            Your trusted partner for premium properties in Sharjah, UAE.
                            We help you find your dream home or investment opportunity.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerHeading}>Quick Links</h3>
                        <ul className={styles.footerLinks}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/properties">All Properties</Link></li>
                            <li><Link href="/properties?type=buy">Buy</Link></li>
                            <li><Link href="/properties?type=rent">Rent</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerHeading}>Contact Us</h3>
                        <ul className={styles.contactInfo}>
                            <li>
                                <FaMapMarkerAlt />
                                <span>Sharjah, United Arab Emirates</span>
                            </li>
                            <li>
                                <FaPhone />
                                <a href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}>
                                    +971 XX XXX XXXX
                                </a>
                            </li>
                            <li>
                                <FaEnvelope />
                                <a href="mailto:info@abdallaowais.com">
                                    info@abdallaowais.com
                                </a>
                            </li>
                            <li>
                                <FaWhatsapp />
                                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {currentYear} Abdalla Alowais Real Estate. All rights reserved.</p>
                    <p className={styles.footerCredit}>
                        Built with excellence for the UAE real estate market
                    </p>
                </div>
            </div>
        </footer>
    )
}
