import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <div>
      <img id = "background" src = "myportfolio/src/Images/lowerfield.JPG"> 
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
    </div>
    </>
  )

}

export default App
