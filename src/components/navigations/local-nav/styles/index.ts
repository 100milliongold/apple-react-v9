import styled, { css } from 'styled-components'

export const LocalNav = styled.nav`
  ${({}) => css`
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 52px;
    padding: 0 1rem;
    border-bottom: 1px solid #ddd;
    .local-nav-links {
      display: flex;
      align-items: center;
      max-width: 1000px;
      height: 100%;
      margin: 0 auto;

      a {
        font-size: 0.8rem;
        &.product-name {
          margin-right: auto;
          font-size: 1.4rem;
          font-weight: bold;
        }
        &:not(.product-name) {
          margin-left: 2em;
        }
      }
    }
  `}
`
