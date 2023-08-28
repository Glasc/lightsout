import create from "zustand"
import { devtools, persist } from "zustand/middleware"

interface LightState {
  // increase: (by: number) => void
  lightsList: { id: number; status: boolean }[]
  toggleLight: (id: number) => void
  toggleGameStatus: (status: "pending" | "done") => void
  generateRandomGame: () => void
  gameStatus: "pending" | "done"
}

const useStore = create<LightState>()(
  devtools(
    persist((set) => ({
      // increase: (by) => set((state) => ({ bears: state.bears + by })),
      gameStatus: "pending",
      toggleGameStatus: (status) =>
        set(() => {
          return { gameStatus: status }
        }),
      lightsList: [
        { id: 1, status: false },
        { id: 2, status: false },
        { id: 3, status: false },
        { id: 4, status: false },
        { id: 5, status: false },
        { id: 6, status: false },
        { id: 7, status: false },
        { id: 8, status: false },
        { id: 9, status: false },
      ],
      toggleLight: (id) =>
        set((state) => ({
          lightsList: state.lightsList.map((currentLight) => {
            if (currentLight.id === id) {
              currentLight.status = !currentLight.status
            }
            return currentLight
          }),
        })),
      generateRandomGame: () =>
        set((state) => {
          const pattern = state.lightsList.map((currentLight) => {
            currentLight.status = Math.random() > 0.5
            return currentLight
          })

          if (pattern.every((light) => light.status)) {
            state.generateRandomGame()
          }

          return { lightsList: pattern }
        }),
    }))
  )
)

export default useStore
