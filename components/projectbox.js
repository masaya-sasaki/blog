import Link from 'next/link'
import styles from './Projectbox.module.css'
import { AiFillGithub, AiOutlineLink} from 'react-icons/ai';

export default function ProjectBox({ id, title, image, skills, link, githublink }){
    return (
        <li className={styles.box}>
            <div className={styles.projectbox}>
              <Link href={`/projects/${id}`}>
              <div
              className={styles.projectcontent}
              >
                <div>{title}</div>
                <div className={styles.skills}>{skills}</div>              
              </div>
              </Link> 
              <iframe src={link} className={styles.iframebox}></iframe>
              <div
              className={styles.links}
              >
              <a href={githublink} target='_blank' rel="noreferrer">
                <AiFillGithub className={styles.changeColor}/>
              </a>
              <a href={link} target='_blank' rel="noreferrer">
                <AiOutlineLink className={styles.changeColor}/>  
              </a>
              </div>
            </div>
        </li>
    )
}