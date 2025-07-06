'use client';

import React from 'react';
import Navbar from '@/components/navbar/page';
import styles from './page.module.scss';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.right}>
          <img src="/army.jpg" alt="Army Officer" />
        </div>
        <div className={styles.left}>
          <h1>BORN TO THE<br />OLIVE GREEN</h1>
          <p>A Blog by Ananya Singh</p>
          <p>
            Born to an Olive Green is a space for quiet stories — the goodbyes, borrowed cities, and life between arrivals and departures. I’ve grown up changing cities, chasing new streets, and learning that belonging isn’t tied to one place. These are fragments of that journey — stitched in words.
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        Made with ♥ by <Link href="https://github.com/Levixon10" target="_blank">Levixon</Link>
      </div>
    </>
  );
};

export default page;
