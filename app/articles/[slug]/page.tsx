// app/articles/[slug]/page.tsx
import { articles } from '@/data/articles';
import styles from './ArticleDetail.module.scss';
import { notFound } from 'next/navigation';


type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export default async function Article({ params }: ArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{article.title}</h1>
      <pre className={styles.content}>{article.content}</pre>
    </div>
  );
}
