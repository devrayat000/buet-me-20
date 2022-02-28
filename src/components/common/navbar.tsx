import Link from "next/link"

import CustomLink from "./link"
import classes from '../../styles/link.module.scss'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-neutral px-16 py-4 absolute inset-x-0 z-50 rounded-md shadow-md">
      <div className='navbar-start w-1/4'>
        <div className='prose-h3:leading-none prose-h3:m-0 prose-h3:text-white'>
          <h3>ME</h3>
          <h3>XX</h3>
        </div>
      </div>
      <div className='navbar-end flex-1'>
        <ul className="flex gap-4">
          <li>
            <CustomLink href="/">
              Home
            </CustomLink>
          </li>
          {/* <li>
            <CustomLink href="/achievements">
              Achievements
            </CustomLink>
          </li> */}
          <li>
            <CustomLink href="/routine">
              Routine
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/todo">
              ToDo
            </CustomLink>
          </li>
          <li>
            <a
              href="https://buetme19.com/the-machine/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.navlink}
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