import { useStoreActions, useStoreState } from "../../store/hooks"
import Drawer from "./drawer"

const DrawerWrapper: React.FC = ({ children }) => {
    const open = useStoreState(store => store.drawer.open)
    const set = useStoreActions(store => store.drawer.set)

    return (
        <div className='drawer min-h-screen'>
            <input
                type="checkbox"
                id="main-drawer"
                className='drawer-toggle hidden'
                checked={open}
                title='Drawer toggler'
                onChange={e => set(e.target.checked)}
            />
            {children}
            <section className='drawer-side'>
                <label htmlFor="main-drawer" className="drawer-overlay" />
                <Drawer />
            </section>
        </div>
    )
}

export default DrawerWrapper