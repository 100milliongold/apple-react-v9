import React, { ReactElement } from 'react'
import { LocalNav } from './styles'
interface Props {}

export function LocalNavs({}: Props): ReactElement {
  return (
    <LocalNav className="local-nav">
      <div className="local-nav-links">
        <a href="#" className="product-name">
          AirMug Pro
        </a>
        <a href="#">개요</a>
        <a href="#">제품사양</a>
        <a href="#">구입하기</a>
      </div>
    </LocalNav>
  )
}

export default LocalNavs
