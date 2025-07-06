'use client';
import { useState } from 'react';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';
import styles from './page.module.scss';
import Navbar from '@/components/navbar/page';

export default function ArticlesPage() {
  const [query, setQuery] = useState('');
  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <main className={styles.container}>
      <h1 className={styles.heading}>My Articles</h1>
      <div className={styles.searchWrapper}>
        <SearchBar value={query} onChange={setQuery} />
      </div>
      <div className={styles.list}>
        {filtered.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
    </>
    
  );
}
