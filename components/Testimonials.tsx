import { FaStar } from 'react-icons/fa'
import styles from './Testimonials.module.css'

export default function Testimonials() {
    const companies = [
        { name: 'Emaar Properties', initial: 'E' },
        { name: 'Dubai Properties', initial: 'DP' },
        { name: 'Nakheel', initial: 'N' },
        { name: 'Aldar Properties', initial: 'A' },
        { name: 'Damac Properties', initial: 'D' },
        { name: 'Meraas', initial: 'M' },
    ]

    const testimonials = [
        {
            text: "Abdalla Alowais Real Estate helped us find the perfect office space in Sharjah. Their professionalism and market knowledge are exceptional.",
            author: "Mohammed Al-Rashid",
            position: "CEO, Tech Innovations LLC",
            company: "Tech Innovations",
            initial: "M"
        },
        {
            text: "Outstanding service! They managed our property portfolio efficiently and helped us achieve excellent returns on our investments.",
            author: "Fatima Al-Mansoori",
            position: "Investment Director",
            company: "Gulf Investments",
            initial: "F"
        },
        {
            text: "We've worked with many real estate agencies, but Abdalla Alowais stands out for their dedication and deep understanding of the Sharjah market.",
            author: "Ahmed Al-Zaabi",
            position: "Managing Partner",
            company: "Emirates Business Group",
            initial: "A"
        }
    ]

    return (
        <section className={styles.testimonialsSection}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>Trusted by Leading UAE Companies</h2>
                    <p>
                        We've had the privilege of working with some of the most prestigious companies in the UAE
                    </p>
                </div>

                {/* Companies Grid */}
                <div className={styles.companiesGrid}>
                    {companies.map((company, index) => (
                        <div key={index} className={styles.companyCard}>
                            <div className={styles.companyLogo}>
                                {company.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className={styles.sectionHeader} style={{ marginTop: '4rem' }}>
                    <h2>What Our Clients Say</h2>
                    <p>
                        Hear from businesses who have trusted us with their real estate needs
                    </p>
                </div>

                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <p className={styles.testimonialText}>
                                "{testimonial.text}"
                            </p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorAvatar}>
                                    {testimonial.initial}
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.position}</p>
                                    <p style={{ color: 'var(--primary)', fontWeight: 600 }}>
                                        {testimonial.company}
                                    </p>
                                    <div className={styles.rating}>
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                        <FaStar className={styles.star} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
