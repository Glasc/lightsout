import { useState, useEffect } from "react"
import useStore from "../store/store"

export const useLight = (id: number) => {
  const toggleLight = useStore((state) => state.toggleLight)
  const lightsList = useStore((state) => state.lightsList)
  const toggleGameStatus = useStore((state) => state.toggleGameStatus)
  const gameStatus = useStore((state) => state.gameStatus)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    const lightStatus = lightsList[id - 1].status
    setIsActive(lightStatus)
    // after the user is done clicking the lights, the game is over
    const isGameDone = lightsList.every((light) => light.status)
    if (isGameDone) {
      toggleGameStatus("done")
    }
  }, [lightsList, id, toggleGameStatus])

  const handleClick = () => {
    if (gameStatus === "done") return
    const toggleLights = (ids: number[]) =>
      ids.map((currentId: number) => toggleLight(currentId))
      
    toggleLight(id)
    switch (id) {
      case 1:
        toggleLights([2, 4])
        break
      case 2:
        toggleLights([1, 3, 5])
        break
      case 3:
        toggleLights([2, 6])
        break
      case 4:
        toggleLights([1, 5, 7])
        break
      case 5:
        toggleLights([2, 4, 6, 8])
        break
      case 6:
        toggleLights([3, 5, 9])
        break
      case 7:
        toggleLights([4, 8])
        break
      case 8:
        toggleLights([5, 7, 9])
        break
      case 9:
        toggleLights([6, 8])
        break
    }
  }

  return { handleClick, isActive }
}
