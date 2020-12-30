import styled, { css } from 'styled-components'

import { Section } from '../../styles'

export const ScrollSection1 = styled(Section)`
  ${({}) => css``}
`

export const Description = styled.p`
  ${({}) => css`
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #888;
    strong {
      float: left;
      margin-right: 0.2em;
      font-size: 3rem;
      color: rgb(29, 29, 31);
    }
  `}
`
