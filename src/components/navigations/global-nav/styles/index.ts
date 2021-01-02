import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({}) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    padding: 0 1rem;
    .global-nav-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
      height: 100%;
      margin: 0 auto;
    }
  `}
`
