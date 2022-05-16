import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

    

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Solve the following <span>Lights Out!</span>
      </h1>
      <section className={styles.grid}>
        <button className={styles.light}></button>
        <button className={styles.light}></button>
        <button className={styles.light}></button>

        <button className={styles.light}></button>
        <button className={styles.light}></button>
        <button className={styles.light}></button>

        <button className={styles.light}></button>
        <button className={styles.light}></button>
        <button className={styles.light}></button>
      </section>
      <section>
        <button className={styles.btnRestart}>Restart</button>
      </section>
    </div>
  )
}

export default Home
