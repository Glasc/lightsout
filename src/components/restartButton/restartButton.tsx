import { RiRestartFill } from 'react-icons/ri'
import styles from './restartButton.module.scss'
import { useGame } from '../../hooks/useGame'

interface RestartButtonProps {}

export const RestartButton: React.FC<RestartButtonProps> = () => {
  const { toggleGameStatus, generateRandomGame, isGameDone } = useGame()

  const handleClick = () => {
    toggleGameStatus()
    generateRandomGame()
  }

  if (isGameDone)
    return <RiRestartFill className={styles.btnRestart} onClick={handleClick} />
  return (
    <RiRestartFill className={styles.btnRestartHidden} onClick={handleClick} />
  )
}
