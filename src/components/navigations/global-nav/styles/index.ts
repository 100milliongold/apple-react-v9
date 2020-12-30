import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({}) => css`
    height: 44px;
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
