import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryuichi Komeda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Ryuichi Komeda</h1>
        <p>I'm a web engineer living and working in Tokyo.</p>
        <ul className={styles.sns}>
          <li><a href="https://github.com/komeda">GitHub</a></li>
          <li><a href="https://twitter.com/rayfields">Twitter</a></li>
          <li><a href="https://www.instagram.com/rayfields">Instagram</a></li>
        </ul>
      </main>
    </div>
  )
}
