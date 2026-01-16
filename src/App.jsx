import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './NavBar.css'

import HomePage from "./pages/HomePage"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"
import Fun from "./pages/Fun"
import NavBar from "./NavBar"

import { HashRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <HashRouter>
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path = "/" element={<HomePage />} />
        <Route path = "/HomePage" element={<HomePage />} />
        <Route path = "/Projects" element={<Projects />} />
        <Route path = "/AboutMe" element={<AboutMe />} />
        <Route path = "/Fun" element={<Fun />} />
      </Routes>


      {/* <img id = "background" src = "myportfolio/src/Images/lowerfield.JPG"> 
      </img>

      <h1 id = "name">
        Danica Hernandez
      </h1>

      <h2 id = "purpose">
        Jade Materials
      </h2>

      <a id = "notes" href ="https://docs.google.com/document/d/1GyxXn7rIKhLFDwFsDJBNSjZKBlu4vjut2HOlf69BAx4/edit?tab=t.0">
        Notes
      </a>

      <a id = "notion" href = "https://azure-weeder-8fa.notion.site/JADE-2026-Web-Dev-0c6b99c0abf24676be1cb8e14b9e9ea2">
        Notion
      </a>

      <p id = "loc">
        The Ojai Valley
      </p>

      <button id = "me" type = "button">
        About Me
      </button>

      <button id = "work" type = "button">
        Projects
      </button>

      <a id = "Story" href = "https://arcg.is/19u4aC" target = "_blank"> 
      </a>

      <iframe id = "scroll" src="https://storymaps.arcgis.com/stories/fcd5ad5d7bcf47e297f0bc3d6f7b4a68" width="100%" height="200" allowfullscreen>
      </iframe> */}

    </div>
    </HashRouter>
    </>
  )

}

export default App
