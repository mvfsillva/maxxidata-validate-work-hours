import { FC, ReactNode } from 'react'

import * as S from './styles'

type Props = {
  children: ReactNode
  primary?: boolean
  secondary?: boolean
  onClick: () => void
  type?: string
  disabled?: boolean
}

const Button: FC<Props> = ({
  children,
  primary,
  secondary,
  disabled = false,
  onClick
}) => (
  <S.Wrapper
    primary={primary}
    secondary={secondary}
    onClick={onClick}
    data-testid="button"
    type="button"
    disabled={disabled}
  >
    {children}
  </S.Wrapper>
)

export default Button
