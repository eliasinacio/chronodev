import React from 'react'
import '../styles/header.scss'

export function Header () {
  return (
    <header>
      <div id="home">          
        <a href="https://github.com/eliasinacio/react-pomofocus-clone/" target="_blank"  rel="noreferrer">
          <img src="https://img.icons8.com/pastel-glyph/48/ffffff/square-clock.png" alt="A simple square clock icon"/>
          <h3>ChronoDev</h3>
        </a>
      </div>

      <div id="github">
        <a href="https://github.com/eliasinacio/react-pomofocus-clone/" target="_blank"  rel="noreferrer">
          <img src="https://img.icons8.com/fluent-systems-filled/48/ffffff/github.png" alt="Github octocat icon"/>
          <p>GitHub</p>
        </a>
      </div>
    </header>
  )
}