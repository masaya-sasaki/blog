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
                {title}
                <br/>
                {image}
                {link}
                <span className={styles.skills}>{skills}</span>              
              </div>
              </Link>
              <div
              className={styles.links}
              >
              <a href={githublink}>
                <AiFillGithub/>
              </a>
              <a href={link}>
                <AiOutlineLink/>  
              </a>
              </div>
            </div>
        </li>
    )
}