import React, {useState} from "react";

import {Link, NavLink} from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false)
    return (
    <nav>
    <div className="menu" onClick={() => {
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""} >
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/add_transaction"}>Add transaction</NavLink>
      </li>
      <li>
        <NavLink to={"/transaction_list"}>Transaction list</NavLink>
      </li>
      <li>
        <NavLink to={"/reports"}>reports</NavLink>
      </li>
     
    </ul>


  </nav>
  )
}