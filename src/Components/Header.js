import React from 'react'
import './Header.scss'

class Header extends React.Component {
  render () {
    return (
      <header>
        <div id="home">
          <a href="localhost:3000">
            <img src="https://img.icons8.com/pastel-glyph/48/ffffff/square-clock.png" alt="A simple square clock icon"/>
            <h2>ChronoDev</h2>
          </a>
        </div>

        <div id="github">
          <a href="https://github.com/eliasinacio/react-pomofocus-clone/" target="_blank"  rel="noreferrer">
            <img src="https://img.icons8.com/fluent-systems-filled/48/ffffff/github.png" alt="Github octocat icon"/>
            <h4>GitHub</h4>
          </a>
        </div>
      </header>
    )
  }
}

export default Header;