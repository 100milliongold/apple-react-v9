import React, { ReactElement } from 'react'
import GlobalNav from './global-nav'
import LocalNav from './local-nav'

interface Props {}

function Navigations({}: Props): ReactElement {
  return (
    <>
      <GlobalNav />
      <LocalNav />
    </>
  )
}

export default Navigations
