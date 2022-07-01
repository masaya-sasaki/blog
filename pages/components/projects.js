import ProjectBox from "./projectbox";
import styles from './Projects.module.css'

export default function Projects({allProjectsData}){
    return (
            <section id='projects' className={styles.container}>
                <h2 className={styles.title}>PROJECTS</h2>
            <p className={styles.introduction}>
                <div className={styles.landingbox}>
                <ol>
                    <li>Project title</li>
                    <li>Project description</li>
                    <li>Project skill set. e.g. React, styled components, Next.js</li>
                    <li>Socil links w Icons</li>
                </ol>
                <ul style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', paddingInlineStart: '0px' }} >
                {allProjectsData.map(({ id, date, title }) => (
                <ProjectBox 
                title={title}
                id={id}
                date={date}
                key={id}
                />
                ))}
                </ul>
                </div>
            </p>
            </section>
    )
}