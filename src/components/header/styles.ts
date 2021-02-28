import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    text-align: center;
    box-sizing: border-box;
    display: flex;
    align-item: center;
    justify-content: center;

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    ${media.greaterThan('medium')`
      text-align: left;
      margin: auto;
    `}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.6rem auto 0;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5rem auto;
  `}
`
