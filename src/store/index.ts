import { createStore } from "easy-peasy";
import drawerStore, { DrawerStore } from "./drawer";

export interface AppStore {
    drawer: DrawerStore
}

const store = createStore<AppStore>({
    drawer: drawerStore
})

export default store