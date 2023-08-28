import useStore from "../store/store"
import { useEffect, useState } from "react"

export const useGame = () => {
  const toggleGameStatus = useStore((state) => state.toggleGameStatus)
  const gameStatus = useStore((state) => state.gameStatus)
  const generateRandomGame = useStore((state) => state.generateRandomGame)
  const [isGameDone, setIsGameDone] = useState<boolean>()
  console.log(gameStatus)
  useEffect(() => {
    if (gameStatus === "pending") setIsGameDone(false)
    else setIsGameDone(true)
  }, [gameStatus])

  return { toggleGameStatus, gameStatus, generateRandomGame, isGameDone }
}
