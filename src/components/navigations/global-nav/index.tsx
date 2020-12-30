import React, { ReactElement } from 'react'
import { Nav } from './styles'

interface Props {}

function GlobalNav({}: Props): ReactElement {
  return (
    <Nav className="global-nav">
      <div className="global-nav-links">
        <a href="#" className="global-nav-item">
          Rooms
        </a>
        <a href="#" className="global-nav-item">
          Ideas
        </a>
        <a href="#" className="global-nav-item">
          Stores
        </a>
        <a href="#" className="global-nav-item">
          Contact
        </a>
      </div>
    </Nav>
  )
}

export default GlobalNav
