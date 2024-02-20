import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(persist(set => ({
    currentName: '',
    currentEmail:'',
    currentRoll:'',
    setCurrentName: (currentName) => set({ currentName }),
    setCurrentEmail: (currentEmail) => set({ currentEmail }),
    setCurrentRoll: (currentRoll) => set({ currentRoll })
        // setOrganization: (currentOrganization) => set({ currentOrganization }),
    // setBranch: (currentBranch) => set({ currentBranch }),
    // setSemester: (currentSemester) => set({ currentSemester }),
})))
