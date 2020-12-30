import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${() => css`
    html {
      font-family: 'Noto Sans KR', sans-serif;
      font-style: 14px;
      body {
        overflow-x: hidden;
        color: rgb(29, 29, 31);
        letter-spacing: -0.05em;
        background: white;
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
