import { articles } from '@/data/articles';
import styles from './ArticleDetail.module.scss';

export default function Article({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return <div className={styles.wrapper}>Article not found</div>;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{article.title}</h1>
      <pre className={styles.content}>{article.content}</pre>
    </div>
  );
}
