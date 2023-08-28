import useStore from "../../store/store"
import styles from "./grid.module.scss"
import { useLight } from "../../hooks/useLight"
import { useGame } from "../../hooks/useGame"
import { useEffect } from "react"
import { RestartButton } from "../restartButton/restartButton"

type LightProps = {
  id: number
}

function Light({ id }: LightProps) {
  const { handleClick, isActive } = useLight(id)
  return (
    <button
      className={isActive ? styles.lightActive : styles.lightDisabled}
      onClick={handleClick}
    ></button>
  )
}

export const Grid = () => {
  const lightsList = useStore((state) => state.lightsList)
  const { isGameDone } = useGame()
  const generateRandomGame = useStore((state) => state.generateRandomGame)

  useEffect(() => {
    generateRandomGame()
  }, [generateRandomGame])

  const renderLights = () =>
    lightsList.map((light) => {
      return <Light key={light.id} id={light.id} />
    })

  // TODO: needs to toggle a class, not an entire component.
  if (isGameDone)
    return (
      <section className={styles.gridBorder}>
        {renderLights()}
        <div className={styles.restartOverlay}>
          <RestartButton />
        </div>
      </section>
    )
  return <section className={styles.grid}>{renderLights()}</section>
}
