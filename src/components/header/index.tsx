// Packages
import React from 'react'
import { useTranslation } from 'react-i18next'

// Components
import Select from 'components/select'

// Styles
import * as S from './styles'

const Header = () => {
  const { i18n, t } = useTranslation()

  const LANGUAGE_OPTIONS = [
    { label: t('english'), value: 'en-US' },
    { label: t('portuguese'), value: 'pt-BR' },
    { label: t('spanish'), value: 'es' }
  ]

  const selectedOption = LANGUAGE_OPTIONS.find(
    ({ value }) => value === i18n.language
  ) || { label: 'English', value: 'en-US' }

  return (
    <S.Wrapper>
      <S.ContentSelect>
        <Select
          name="lang"
          options={[
            { label: 'English', value: 'en-US' },
            { label: 'Portuguese', value: 'pt-BR' },
            { label: 'Spanish', value: 'es' }
          ]}
          value={selectedOption}
          onChange={({
            target: {
              value: { value: lang }
            }
          }) => i18n.changeLanguage(lang)}
        />
      </S.ContentSelect>
    </S.Wrapper>
  )
}

export default Header
