"use client";

import React from 'react';
import styles from './page.module.scss';
import Navbar from '@/components/navbar/page';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <Image
            src="/ananya_pic.jpg"
            alt="My picture"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
        </motion.div>

        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <h1 className={styles.heading}>About the writer</h1>
          <p className={styles.subtext}>
            Hey!!<br /><br />
            My name is Ananya Singh. I’ve spent my life somewhere between cities, classrooms, and cantonments — always arriving, always leaving, always carrying fragments of places most people only know from maps or headlines.<br />

            My father is an Army officer. That fact has shaped much of my story, but it isn’t the whole of it. I’ve changed schools, stood on more stages than I can count, lived in homes that came with expiry dates, and learnt early that belonging isn’t always tied to geography.<br />

            In all that movement, writing became constant. It was how I held onto what stayed unsaid — the quiet after ceremonies, the silences during separations, the moments of pride that often came wrapped in distance. Over time, those words turned into essays, reflections, and small windows into the life behind the uniform — not the dramatized version people like to imagine, but the ordinary, fragmented, beautiful reality of it.<br />

            This space is where I write about those in-between moments — about growing up across state lines, about celebration and absence, about identity when home is temporary. Some pieces are personal. Some are observations. All of them come from the spaces between noise and stillness, between borders both seen and unseen.<br />

            If you’ve ever lived in the in-betweens — this space is for you.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutPage;
