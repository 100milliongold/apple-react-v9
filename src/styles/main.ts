import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${() => css`
    html {
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 14px;
      body {
        overflow-x: hidden;
        color: rgb(29, 29, 31);
        letter-spacing: -0.05em;
        background: white;

        &#show-scene-0 #scroll-section-0 .sticky-elem,
        &#show-scene-1 #scroll-section-1 .sticky-elem,
        &#show-scene-2 #scroll-section-2 .sticky-elem,
        &#show-scene-3 #scroll-section-3 .sticky-elem {
          display: block;
        }
      }
      p {
        line-height: 1.6;
      }
      a {
        color: rgb(29, 29, 31);
        text-decoration: none;
      }
    }
  `}
`
