import styles from "./heading.module.scss"
import { useGame } from "../../hooks/useGame"

export const Heading = () => {
  const { isGameDone } = useGame()

  if (isGameDone) {
    return (
      <h1 className={styles.heading}>
        <span className={styles.accent}>Solved!</span>
      </h1>
    )
  }

  return (
    <h1 className={styles.heading}>
      <span className={styles.accent}>Lights Out</span>
    </h1>
  )
}
