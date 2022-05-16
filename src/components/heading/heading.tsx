import styles from "./heading.module.scss"
import { useGame } from "../../hooks/useGame"

export const Heading = () => {
  const { isGameDone } = useGame()

  if (isGameDone) {
    return (
      <h1 className={styles.heading}>
        You solved the <span>Lights Out!</span>
      </h1>
    )
  }

  return (
    <h1 className={styles.heading}>
      Solve the following <span>Lights Out!</span>
    </h1>
  )
}
