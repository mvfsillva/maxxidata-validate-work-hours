import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spaces.medium};
    font-size: ${theme.font.sizes.medium};
    height: 60vh;
  `}
`
