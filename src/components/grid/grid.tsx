import useStore from "../../store/store"
import styles from "./grid.module.scss"
import { useLight } from "../../hooks/useLight"
import { useGame } from "../../hooks/useGame"
import { useEffect } from "react"
import { clearInterval } from "timers"

type LightProps = {
  id: number
}

function Light({ id }: LightProps) {
  const { handleClick, isActive } = useLight(id)
  const { isGameDone } = useGame()

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

  if (isGameDone)
    return <section className={styles.gridBorder}>{renderLights()}</section>
  return <section className={styles.grid}>{renderLights()}</section>
}
