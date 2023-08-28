import styles from "./heading.module.scss"
import { useGame } from "../../hooks/useGame"

export const Heading = () => {
  const { isGameDone } = useGame()

  if (isGameDone) {
    return (
      <h1 className={styles.heading}>
        Solved
      </h1>
    )
  }

  return (
    <h1 className={styles.heading}>
      Lights Out
    </h1>
  )
}
