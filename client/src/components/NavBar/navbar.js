import React from 'react'
import "./navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core"

function NavBar() {
  return (
    <div className='navbar'>
      <div>
        Home
      </div>
      <div>
        Settings
      </div>
      <div>
        Volunteer
      </div>
      <div>
        Log in
      </div>

    </div>
  )
}

export default NavBar