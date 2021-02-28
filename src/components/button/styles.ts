import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

type Props = {
  rounded?: boolean
  circle?: boolean
  primary?: boolean
  secondary?: boolean
  disabled?: boolean
}

const modifiers = {
  primary: (theme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
      background: ${lighten(0.2, theme.colors.primary)};
    }
  `,
  secondary: (theme) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.muted};
    &:hover {
      background: ${darken(0.2, theme.colors.secondary)};
    }
  `,
  disabled: (theme) => css`
    background-color: ${darken(0.2, theme.colors.muted)};
    cursor: not-allowed;
  `
}

export const Wrapper = styled.button<Props>`
  ${({ theme, primary, secondary, disabled }) => css`
    background-color: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    padding: 1rem ${theme.spaces.small};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    transition: ${theme.transition.ease};

    &:hover {
      background: ${!disabled && lighten(0.2, theme.colors.primary)};
    }

    ${primary && modifiers.primary(theme)};
    ${secondary && modifiers.secondary(theme)};
    ${disabled && modifiers.disabled(theme)};
  `}
`
