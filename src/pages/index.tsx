import type { NextPage } from "next"
import styles from "../styles/Home.module.scss"
import { useGame } from "../hooks/useGame"
import { RestartButton } from "../components/restartButton/restartButton"
import { Heading } from "../components/heading/heading"
import { Grid } from "../components/grid/grid"

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Heading />
      <Grid />
      <RestartButton />
    </div>
  )
}

export default Home
