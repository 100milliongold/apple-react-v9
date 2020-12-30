import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({}) => css`
    padding-top: 50vh;
  `}
`
export const MainMessage = styled.div`
  ${({}) => css`
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
  `}
`
