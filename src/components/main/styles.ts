import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { lighten } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spaces.medium};
    border: 1px solid ${lighten(0.7, theme.colors.primary)};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spaces.small};
  `}
`

export const Field = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: ${theme.spaces.small};
    row-gap: ${theme.spaces.small};
    font-size: ${theme.spaces.xsmall};
    align-items: center;

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr 0.5fr;
    `}
  `}
`

export const Text = styled.span<{ bold?: boolean; margin?: string }>`
  ${({ theme, bold, margin }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.small};
    font-weight: ${bold && 500};
    margin: ${margin};

    &.text__medium {
      font-size: ${theme.font.sizes.xmedium};
    }
  `}
`

export const Dropzone = styled.div`
  display: flex;
  align-items: center;
  > div {
    min-width: 100%;
    max-height: 2rem;
    border-radius: 8px !important;
    width: auto;
    div {
      background: transparent !important;
      width: 100% !important;
    }
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  margin-top: 2rem;
`
