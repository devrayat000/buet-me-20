import CustomLink from "./link"
import classes from '../../styles/link.module.scss'
import { links } from "./links"
import { drawerLink } from "../../styles/classes"


const Drawer: React.FC = () => {
    return (
        <aside className='h-full w-60 bg-white py-10 px-4'>
            <ul className="gap-4 flex flex-col items-stretch p-0">
                {links.map(link => (
                    <li key={link.href.toString()}>
                        <CustomLink {...link} mobile />
                    </li>)
                )}
                <li>
                    <a
                        href="https://themachine.buetme.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={drawerLink}
                    >
                        <span>
                            The Machine
                        </span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Drawer