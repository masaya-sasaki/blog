import ProjectBox from "./projectbox";
import Link from "next/link";
import styles from './Projects.module.css'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Projects({allProjectsData}){
    return (
            <section id='projects' className={styles.container}>
                <h2 className={styles.title}>FEATURED PROJECTS</h2>
            <p className={styles.introduction}>
                <div className={styles.landingbox}>
                <ul style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', paddingInlineStart: '0px' }} >
                {allProjectsData.map(({ id, title, image, skills, link, githublink }) => (
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
                    See All Projects <AiOutlineArrowRight color="grey"/>
                    </span>
                </Link>
                </div>
            </p>            
            </section>
    )
}