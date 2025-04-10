import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">ECOMMERCE</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Cart(5)</a></li>
      <li>
        <details>
          <summary>Rahmath</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Themes</a></li>
            <li><a>Profile</a></li>
            <li><a>Log out</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Header