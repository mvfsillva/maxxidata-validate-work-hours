// Packages
import React from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import * as S from './styles'

const Main = () => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <h1>{t('welcome')}</h1>
    </S.Wrapper>
  )
}

export default Main
