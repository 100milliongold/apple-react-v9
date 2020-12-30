import React, { ReactElement } from 'react'

import ScrollSection0 from './scroll-section-0'
import ScrollSection1 from './scroll-section-1'
import ScrollSection2 from './scroll-section-2'
import ScrollSection3 from './scroll-section-3'

interface Props {}

function Sections({}: Props): ReactElement {
  return (
    <>
      <ScrollSection0 />
      <ScrollSection1 />
      <ScrollSection2 />
      <ScrollSection3 />
    </>
  )
}

export default Sections
