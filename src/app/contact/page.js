import React from 'react';
import styles from '../../styles/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Get in Touch</span>
        </h1>
        <div className={styles.contactContainer}>
          {/* First Container: Contact Info */}
          <div className={styles.contactCard}>
            <h2>Contact Information</h2>
            <div className={styles.contactInfo}>
              <p>
                <img src="/image/phone_icon.svg" alt="WhatsApp" /> +91-9571356823
              </p>
              <p>
                <img src="/image/email-svgrepo-com.svg" alt="Email" /> b22me075@iitj.ac.in
              </p>
              <p>
                <img src="/image/email-svgrepo-com.svg" alt="Email" /> jyanigopalaram@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gopal}>        
    <a href="https://www.instagram.com/jyani__gopal/" className={styles.icon}>
      <img src="/image/instagram.png" alt="Instagram" />
    </a>
    <a href="https://github.com/gopaljyani2005" className={styles.icon}>
      <img src="/image/github-logo.png" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/gopala-ram-jyani-1734b4274/" className={styles.icon}>
      <img src="/image/linkedin.png" alt="LinkedIn" />
    </a>
      </div>
    </div>
  );
}
