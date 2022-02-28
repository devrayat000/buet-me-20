import { action, Action } from "easy-peasy"

export interface DrawerStore {
    open: boolean
    toggle: Action<this, void>
    set: Action<this, boolean>
}

const drawerStore: DrawerStore = {
    open: false,
    toggle: action(state => {
        state.open = !state.open
    }),
    set: action((state, payload) => {
        state.open = payload
    })
}

export default drawerStore