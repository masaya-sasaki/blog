import Link from 'next/link'
import styles from './Projectbox.module.css'

export default function ProjectBox({ id, date, title }){
    return (
      <Link href={`/projects/${id}`}>
        <li className={styles.box}>
            <div className={styles.projectbox}>
            {title}
            <br/>
            <span className={styles.date}>{date}</span>
            </div>
        </li>
      </Link>
    )
}