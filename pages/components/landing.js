import styles from './Landing.module.css'

export default function Landing(){
    return (
        <section className={styles.landing}>
            <h1 className={styles.glow}>
                <span
                className={styles.glow2}
                >-Masaya's </span>
                <span
                className={styles.glow2}
                >Web3 </span>
                <span
                className={styles.glow2}
                >Blog-
                </span>
            </h1>
            <div className={styles.landingbox}>
                <p className={styles.introduction}>
                    Welcome to my blog!
                    <br/>
                    exploring to
                    <br/>
                    build the
                    <br/>
                    3rd ver. of the web!
                </p>
            </div>

        </section>
    )
}