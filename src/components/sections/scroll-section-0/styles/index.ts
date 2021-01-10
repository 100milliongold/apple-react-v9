import styled, { css } from 'styled-components'

import { Section } from '../../styles'

/**
 * scroll-section-0 아이디 항목
 */
export const ScrollSection0 = styled(Section)`
  ${({ theme: { device } }) => css`
    h1 {
      font-size: 4rem;
      top: -10vh;
      text-align: center;
      position: relative;
      z-index: 5;
    }
    // (min-width: 1024px)
    @media ${device.laptop} {
      h1 {
        font-size: 9vw;
      }
    }
  `}
`

export const StickyElemCanvas = styled.div`
  ${({ theme: { device } }) => css`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height 100%;

    canvas {
      top: 50%;
      left: 50%;
      position: absolute;
      z-index: 0;
    }
  `}
`
