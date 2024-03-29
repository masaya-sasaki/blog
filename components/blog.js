import PostBox from "./postbox";
import styles from './Blog.module.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function Blog({featuredPostsData}){
    return (
            <section id='posts' className={styles.container}>
                <h2 className={styles.title}>FEATURED POSTS</h2>
                <div className={styles.landingbox}>
                <ul 
                style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 10px 0 10px'}} >
                {featuredPostsData.map(({ id, date, title, summary }) => (
                <PostBox 
                title={title}
                id={id}
                date={date}
                key={id}
                summary={summary}
                />
                ))}
                </ul>
                <Link href='/post/'>
                    <span
                    className={styles.linkcontainer}
                    >
                    View Posts -{'>'}
                    </span>
                </Link>
                </div>
                
            </section>
    )
}


