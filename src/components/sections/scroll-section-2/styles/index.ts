import styled, { css } from 'styled-components'

import { Section } from '../../styles'

export const ScrollSection2 = styled(Section)`
  ${({ theme: { device } }) => css`
    &#scroll-section-2 .b {
      top: 10%;
      left: 40%;
    }
    $#scroll-section-2 .c {
      top: 15%;
      left: 45%;
    }

    .main-message {
      font-size: 3.5rem;
    }

    // (min-width: 1024px)
    @media ${device.laptop} {
      .main-message {
        font-size: 6vw;
      }

      &#scroll-section-2 .b {
        top: 20%;
        left: 53%;
      }
      &#scroll-section-2 .c {
        top: 15%;
        left: 55%;
      }
    }
  `}
`

export default ScrollSection2
