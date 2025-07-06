import Link from 'next/link';
import styles from './ArticleCard.module.scss';

export default function ArticleCard({ article }: { article: { slug: string, title: string } }) {
  return (
    <div className={styles.articleCard}>
      <h2>{article.title}</h2>
      <Link href={`/articles/${article.slug}`} className={styles.butt}>Read More →</Link>
    </div>
  );
}
