import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import styles from './Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
        <footer className={styles.footernavigation}>
        Designed and coded by Masaya Sasaki 
        <AiFillGithub size={40}/>
        <AiFillLinkedin size={40}/>
        </footer>
      </div>
    )
}