'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoText}>Abdalla Alowais</span>
                        <span className={styles.logoSubtext}>Real Estate</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                        <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link href="/properties" onClick={toggleMenu}>Properties</Link></li>
                        <li><Link href="/properties?type=buy" onClick={toggleMenu}>Buy</Link></li>
                        <li><Link href="/properties?type=rent" onClick={toggleMenu}>Rent</Link></li>
                        <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
                        <li>
                            <Link href="/admin/login" className={styles.adminLink} onClick={toggleMenu}>
                                Admin
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.menuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </nav>
            </div>
        </header>
    )
}
