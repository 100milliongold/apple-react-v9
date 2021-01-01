import styled, { css } from 'styled-components'

import { Section } from '../../styles'

/**
 * scroll-section-0 아이디 항목
 */
export const ScrollSection0 = styled(Section)`
  ${({ theme: { device } }) => css`
    h1 {
      font-size: 4rem;
      text-align: center;
    }
    // (min-width: 1024px)
    @media ${device.laptop} {
      h1 {
        font-size: 9vw;
      }
    }
  `}
`
