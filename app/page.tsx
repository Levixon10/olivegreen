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
          <h1>BORN TO AN<br />OLIVE GREEN</h1>
          <p>A Blog by Ananya Singh</p>
          <p>
            Born to an Olive Green is a space for the stories that don’t always make noise — the quiet goodbyes, borrowed cities, unfinished maps, and moments that unfold between arrivals and departures. I’ve grown up chasing unfamiliar streets, carrying memories across borders, and learning that belonging isn’t pinned to a place. These are fragments of that life — stitched together in words.
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
