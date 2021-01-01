import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({}) => css`
    padding-top: 50vh;
  `}
`
/**
 * main-message 클래스 항목
 */
export const MainMessage = styled.div`
  ${({ theme: { device } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    height: 3em;
    font-size: 2.5rem;
    p {
      font-weight: bold;
      text-align: center;
      line-height: 1.2;
    }

    small {
      display: block;
      margin-bottom: 0.5em;
      font-size: 1.2rem;
    }

    &.sticky-elem {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: none;
    }

    // (min-width: 1024px)
    @media ${device.laptop} {
      font-size: 4vw;

      small {
        font-size: 1.5vw;
      }
    }
  `}
`
/**
 * desc-message 클래스 항목
 */
export const DescMessage = styled.div`
  ${({ theme: { device } }) => css`
    width: 50%;
    font-weight: bold;

    &.sticky-elem {
      position: fixed;
      top: 0;
      left: 0;
      display: none;
    }

    @media ${device.laptop} {
      width: 20%;
    }
  `}
`
/**
 * pin 클래스 항목
 */
export const Pin = styled.div`
  ${({}) => css`
    width: 1px;
    height 100px;
    background: rgb(29, 29, 31);
  `}
`

/**
 * mid-message 클래스 항목
 */
export const MidMessage = styled.p`
  ${({ theme: { device } }) => css`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 2rem;
    color: #888;

    strong {
      color: rgb(29, 29, 31);
    }
    @media ${device.laptop} {
      font-size: 4vw;
    }
  `}
`

/**
 * canvas-caption
 */
export const CanvasCaption = styled.p`
  ${({ theme: { device } }) => css`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
    font-size: 1.2rem;
    color: #888;

    @media ${device.laptop} {
      font-size: 2rem;
    }
  `}
`
