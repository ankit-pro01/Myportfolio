import create from 'zustand'



export const useStore = create((set) => ({
    x: 0,
    y: 0,
    z : 0,
    api: {
      setStick: (x, y, z) => set({ x, y, z})
    }
  }))
  
  
export const stickSelector = ({ x, y , z}) => ({ x, y , z})
export const apiSelector = ({ api }) => api
  
export const useActionStore = create((set) => ({
    action : "Idle",
    apiaction : {
      setAction : (action) => set({action})
    }
  }))
  
export const actionSelector = ({action}) => ({action})
export const actionApi = ({apiaction}) => apiaction
  