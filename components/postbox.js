import Link from 'next/link'
import styles from './Postbox.module.css'

export default function PostBox({ id, date, title, summary }){
    return (
      <Link href={`/posts/${id}`}>
        <li className={styles.box}>
            <h3
            className={styles.title}
            >
              {title}
            </h3>
            <p
            className={styles.summary}
            >
              {summary}
            </p>
            <span className={styles.date}>{date}</span>
        </li>
      </Link>
    )
}