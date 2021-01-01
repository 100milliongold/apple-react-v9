import React, { ReactElement } from 'react'
import { Footer } from './styles'

interface Props {}

function FooterSection({}: Props): ReactElement {
  return <Footer className="footer">2020, 1분코딩</Footer>
}

export default FooterSection
