import Link from "next/link"
import { MenuAlt1Icon as MenuIcon } from '@heroicons/react/solid'

import CustomLink from "./link"
import classes from '../../styles/link.module.scss'
import { links } from "./links"
import { navlinkClass } from "../../styles/classes"

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-neutral px-8 py-2 md:px-16 md:py-4 absolute inset-x-0 z-50 rounded-md shadow-md">
      <div className='navbar-start w-1/4'>
        <div className='prose-h3:leading-none prose-h3:m-0 prose-h3:text-white prose-h3:text-sm md:prose-h3:text-base'>
          <h3>ME</h3>
          <h3>XX</h3>
        </div>
      </div>
      <div className='navbar-end flex-1'>
        <label htmlFor="main-drawer" className="drawer-button btn-outline block md:hidden">
          <MenuIcon className="w-6 h-6 text-white rotate-180" />
        </label>
        <ul className="gap-4 hidden md:flex list-none">
          {links.map(link => (
            <li key={link.href.toString()}>
              <CustomLink {...link} />
            </li>)
          )}
          <li>
            <a
              href="https://themachine.buetme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={navlinkClass}
            >
              <span>
                The Machine
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar