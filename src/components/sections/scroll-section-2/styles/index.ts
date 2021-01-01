import styled, { css } from 'styled-components'

import { Section } from '../../styles'

export const ScrollSection2 = styled(Section)`
  ${({ theme: { device } }) => css`
    .main-message {
      font-size: 3.5rem;
    }

    // (min-width: 1024px)
    @media ${device.laptop} {
      .main-message {
        font-size: 6vw;
      }
    }
  `}
`

export default ScrollSection2
