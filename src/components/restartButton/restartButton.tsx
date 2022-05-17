import { RiRestartFill } from "react-icons/ri"
import styles from "./restartButton.module.scss"
import { useGame } from "../../hooks/useGame"
import { useEffect, useState } from "react"

interface RestartButtonProps {}

export const RestartButton: React.FC<RestartButtonProps> = () => {
  const { toggleGameStatus, gameStatus, generateRandomGame, isGameDone } = useGame()

  const [isVisible, setIsVisible] = useState<boolean>()

  const handleClick = () => {
    toggleGameStatus()
    generateRandomGame()
  }

  if (isGameDone)
    return <RiRestartFill className={styles.btnRestart} onClick={handleClick} />
  return <RiRestartFill className={styles.btnRestartHidden} onClick={handleClick} />
}
