import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <h1 className="site-title">Danica Hernandez</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/AboutMe">About Me</Link></li>
        <li><Link to="/Fun">Fun</Link></li>
      </ul>
    </nav>
  )
}