import Link from 'next/link'
import styles from './Postbox.module.css'

export default function PostBox({ id, date, title }){
    return (
      <Link href={`/posts/${id}`}>
        <li className={styles.box}>
            {title}
            <br/>
            <span className={styles.date}>{date}</span>
        </li>
      </Link>
    )
}