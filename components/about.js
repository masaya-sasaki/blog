import styles from './About.module.css'

export default function About(){
    return (
        <section id='about' className={styles.container}>
            <h1 className={styles.title}>
                ABOUT
            </h1>
            <div className={styles.landingbox}>
                <p className={styles.introduction}>
                   Hi, there. My name is Masaya Sasaki. 
                   I am a React Developer/Frontend engineer who loves buliding
                   things for the web. 
                </p>
                <p className={styles.introduction}>
                   In this blog, I write about web3 development
                   and share my knowledge as I explore the question: 
                   <br/>
                   <br/>
                   How can people communicate and collaborate with each other “better”? What would that interface/media (for such subjectivity) look like? 
                </p>
            </div>
        </section>
    )
}