import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Layout.module.css'
import Footer from './footer'

export default function Layout({children}){
    return (
<div className={styles.container}>
      <Head>
        <title>Web3 Dev Blog</title>
        <meta name="description" content="Web3 Dev Blog" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/3d.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Monoton&display=swap" rel="stylesheet"></link>
      </Head>

      <header className={styles.header}>
        <nav className={styles.navigation}>
        <Link href='/'>
        <div className={styles.logos}>
        <Image
        src='/3dlogo.svg'
        width='50px'
        height='50px'
        />
        </div>
        </Link>
          <ul className={styles.menu}>
            <li className={styles.menuitem1}>
              <Link href='/post'>
              About
              </Link>
            </li>
            <li className={styles.menuitem2}>
            <Link href='/project'>
              Projects
              </Link>
            </li>
            <li className={styles.menuitem1}>
              <Link href='/post'>
              Blog
              </Link>
            </li>
            <li className={styles.menuitem}>
              <div className={styles.buttonbox}>
                <button className={styles.button}>
                    Contact👋
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
          {children}
      </main>
      <Footer/>
    </div>
    )
}