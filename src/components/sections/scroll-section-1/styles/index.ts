import styled, { css } from 'styled-components'

import { Section } from '../../styles'

export const ScrollSection1 = styled(Section)`
  ${({}) => css``}
`

export const Description = styled.p`
  ${({ theme: { device } }) => css`
    max-width: 1000px;
    padding: 0 1rem;
    margin: 0 auto;
    font-size: 1.2rem;
    color: #888;
    strong {
      float: left;
      margin-right: 0.2em;
      font-size: 3rem;
      color: rgb(29, 29, 31);
    }

    // (min-width: 1024px)
    @media ${device.laptop} {
      font-size: 2rem;
      strong {
        font-size: 6rem;
      }
    }
  `}
`
