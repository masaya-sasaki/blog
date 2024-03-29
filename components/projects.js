import ProjectBox from "./projectbox";
import Link from "next/link";
import styles from './Projects.module.css'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Projects({featuredProjectsData}){
    return (
            <section id='projects' className={styles.container}>
                <h2 className={styles.title}>FEATURED PROJECTS</h2>
            <p className={styles.introduction}>
                <div className={styles.landingbox}>
                <ul style={{display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', paddingInlineStart: '0px' }} >
                {featuredProjectsData.map(({ id, title, image, skills, link, githublink }) => (
                <ProjectBox 
                title={title}
                id={id}
                image={image}
                skills={skills}
                link={link}
                githublink={githublink}
                key={id}
                />
                ))}
                </ul>
                <Link href='/project'>
                    <span
                    className={styles.linkcontainer}
                    >
                    View Projects -{'>'}
                    </span>
                </Link>
                </div>
            </p>            
            </section>
    )
}