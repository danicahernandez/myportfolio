// ...existing code...
import React from "react"
import "./HomePage.css"
import background from "../Images/lowerfield.JPG"

export default function HomePage() {
  return (
    <main className="home-page">
      <img id = "background" src = {background}> 
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

    </main>
  )
}
// ...existing code...