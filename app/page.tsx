'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import FeaturedPropertiesClient from '@/components/FeaturedPropertiesClient'
import Testimonials from '@/components/Testimonials'
import { FaSearch, FaHome, FaHandshake, FaAward, FaUsers } from 'react-icons/fa'
import styles from './page.module.css'
import { motion } from 'framer-motion'

import { useState } from 'react'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

// Smart Section that hides itself if no properties are found
function PropertySection({ title, type, gradient, subtitle, background }: {
    title: string,
    type: 'buy' | 'rent' | 'manage',
    gradient: string,
    subtitle: string,
    background?: string
}) {
    const [count, setCount] = useState<number | null>(null);

    // If we've loaded and count is 0, don't render anything
    if (count === 0) return null;

    return (
        <section className="section" style={{ background }}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2><span className={styles.titleText}>{title.replace(gradient, '')}</span><span className="text-gradient">{gradient}</span></h2>
                    <p className="text-muted">{subtitle}</p>
                </div>
                <FeaturedPropertiesClient type={type} onLoad={(c) => setCount(c)} />
            </div>
        </section>
    );
}

export default function HomePage() {

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroOverlay} />
                    <div className="container">
                        <motion.div
                            className={styles.heroContent}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <motion.h1
                                className={styles.heroTitle}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Find Your Dream Property in <span className="text-gradient">Sharjah</span>
                            </motion.h1>
                            <motion.p
                                className={styles.heroSubtitle}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Discover premium apartments, villas, and commercial spaces with Abdalla Alowais Real Estate -
                                Your trusted partner in UAE property market
                            </motion.p>
                            <motion.div
                                className={styles.heroButtons}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <Link href="/properties" className="btn btn-primary">
                                    <FaSearch /> All Properties
                                </Link>
                                <Link href="/contact" className="btn btn-outline">
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className={styles.stats}>
                    <div className="container">
                        <motion.div
                            className={styles.statsGrid}
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <motion.div className={styles.statCard} variants={fadeInUp}>
                                <div className={styles.statIcon}>
                                    <FaHome />
                                </div>
                                <div className={styles.statNumber}>500+</div>
                                <div className={styles.statLabel}>Properties Listed</div>
                            </motion.div>
                            <motion.div className={styles.statCard} variants={fadeInUp}>
                                <div className={styles.statIcon}>
                                    <FaUsers />
                                </div>
                                <div className={styles.statNumber}>1000+</div>
                                <div className={styles.statLabel}>Happy Clients</div>
                            </motion.div>
                            <motion.div className={styles.statCard} variants={fadeInUp}>
                                <div className={styles.statIcon}>
                                    <FaHandshake />
                                </div>
                                <div className={styles.statNumber}>300+</div>
                                <div className={styles.statLabel}>Successful Deals</div>
                            </motion.div>
                            <motion.div className={styles.statCard} variants={fadeInUp}>
                                <div className={styles.statIcon}>
                                    <FaAward />
                                </div>
                                <div className={styles.statNumber}>15+</div>
                                <div className={styles.statLabel}>Years Experience</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Property Sections */}
                <PropertySection
                    title="Properties for Sale"
                    type="buy"
                    gradient="Sale"
                    subtitle="Discover premium villas, apartments, and floor plans for sale"
                />

                <PropertySection
                    title="Properties for Rent"
                    type="rent"
                    gradient="Rent"
                    subtitle="Find your next home or office space in prime locations"
                />

                <PropertySection
                    title="Property Management"
                    type="manage"
                    gradient="Management"
                    subtitle="Professional management services for your investments"
                    background="rgba(0, 71, 255, 0.03)"
                />

                {/* Recently Added Section (Fallback/All) */}
                <section className="section" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Recently <span className="text-gradient">Added</span></h2>
                            <p className="text-muted">
                                Browse our newest listings across all categories
                            </p>
                        </div>

                        <FeaturedPropertiesClient />
                        <div className={styles.viewAllButton}>
                            <Link href="/properties" className="btn btn-primary">
                                View All Properties
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <Testimonials />

                {/* Why Choose Us */}
                <section className={`section ${styles.whyChooseUs}`}>
                    <div className="container">
                        <motion.div
                            className={styles.sectionHeader}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>Why Choose Abdalla Alowais Real Estate?</h2>
                            <p className="text-muted">
                                We are committed to providing exceptional service and finding the perfect property for you
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-3"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <motion.div className={styles.featureCard} variants={fadeInUp}>
                                <div className={styles.featureIcon}>🏆</div>
                                <h3>Expert Guidance</h3>
                                <p>
                                    Our experienced team provides professional advice to help you make informed decisions
                                </p>
                            </motion.div>
                            <motion.div className={styles.featureCard} variants={fadeInUp}>
                                <div className={styles.featureIcon}>💎</div>
                                <h3>Premium Properties</h3>
                                <p>
                                    Access to exclusive listings of high-quality properties in prime Sharjah locations
                                </p>
                            </motion.div>
                            <motion.div className={styles.featureCard} variants={fadeInUp}>
                                <div className={styles.featureIcon}>⚡</div>
                                <h3>Fast Response</h3>
                                <p>
                                    Quick response times and efficient service to meet your property needs promptly
                                </p>
                            </motion.div>
                            <motion.div className={styles.featureCard} variants={fadeInUp}>
                                <div className={styles.featureIcon}>🤝</div>
                                <h3>Trusted Service</h3>
                                <p>
                                    Building long-term relationships based on trust, transparency, and integrity
                                </p>
                            </motion.div>
                            <motion.div className={styles.featureCard} variants={fadeInUp}>
                                <div className={styles.featureIcon}>📊</div>
                                <h3>Market Insights</h3>
                                <p>
                                    Stay informed with our deep knowledge of Sharjah's real estate market trends
                                </p>
                            </motion.div>
                            <motion.div className={styles.featureCard} variants={fadeInUp}>
                                <div className={styles.featureIcon}>💬</div>
                                <h3>24/7 Support</h3>
                                <p>
                                    Always available to answer your questions and assist with your property journey
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2>Ready to Find Your Dream Property?</h2>
                            <p>
                                Get in touch with us today and let our experts help you find the perfect home or investment
                            </p>
                            <div className={styles.ctaButtons}>
                                <Link href="/properties" className="btn btn-secondary">
                                    Browse Properties
                                </Link>
                                <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
