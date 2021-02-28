import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

const pulse = keyframes`
  0% { transform: scale( .75 ) }
  40% { transform: scale( .75 ) }
  60% { transform: scale( 1 ) }
  80% { transform: scale( .75 ) }
  100% { transform: scale( .75 ) }
`

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    text-align: center;
    font-size: ${theme.font.sizes.base};
    line-height: ${theme.font.sizes.large};
    position: absolute;
    bottom: 0;
    width: 100%;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxsmall};
      margin-top: ${theme.spaces.large};
    `}

    a {
      color: ${theme.colors.primary};
      font-weight: 700;
      transition: ${theme.transition.ease3};
      :hover {
        color: ${theme.colors.secondary};
      }
    }
  `}
`

export const Love = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    top: 0.2rem;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.secondary};
    transform: scale(0.9);
    animation: ${pulse} 0.5s linear infinite alternate-reverse;
  `}
`
