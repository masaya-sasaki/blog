import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
        Designed and coded by Masaya Sasaki 
        <a href='https://github.com/masaya-sasaki' target='_blank' rel="noreferrer">
            <AiFillGithub size={30}/>
        </a>
        <a href='https://www.linkedin.com/in/masaya-sasaki/' target='_blank' rel="noreferrer">
            <AiFillLinkedin size={30}/>
        </a>
        </footer>
    )
}