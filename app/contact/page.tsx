"use client";

import React from 'react';
import styles from './page.module.scss';
import Navbar from '@/components/navbar/page';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contactWrapper}>
        <div className={styles.contactBox}>
          <h1 className={styles.title}>Want to Connect?</h1>
          <p className={styles.description}>
            I’d love to hear from you! If you have questions, thoughts, or your own Army life experiences to share or suggestions
            for my next post, I’d love to hear from you. Whether you’re an Army kid with your own stories, someone curious about
            life behind the olive green, or just dropping by to say hi — feel free to reach out.
          </p>
          <p className={styles.emailLine}>
            <strong>ananyasingh300508@gmail.com</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
