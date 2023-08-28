import styles from "./styles/Home.module.scss"
import { Grid } from "./components/grid/grid"
import { Heading } from "./components/heading/heading"

const App = () => {
  return (
    <div className={styles.container}>
      <div>
        <Heading />
        <Grid />
      </div>
    </div>
  )
}

export default App
