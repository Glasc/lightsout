import type { NextPage } from "next"
import styles from "../styles/Home.module.scss"
import { Heading } from "../components/heading/heading"
import { Grid } from "../components/grid/grid"
import ReactMarkdown from "react-markdown"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heading />
      <Grid />
    </div>
  )
}

export default Home
