import PostBox from "./postbox";
import styles from './Blog.module.css'

export default function Blog({allPostsData}){
    return (
            <section id='blog' className={styles.container}>
                <h2 className={styles.title}>POSTS</h2>
                <ul 
                className={styles.landingbox}
                style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 10px 0 10px'}} >
                {allPostsData.map(({ id, date, title }) => (
                <PostBox 
                title={title}
                id={id}
                date={date}
                key={id}
                />
                ))}
                </ul>
            </section>
    )
}


