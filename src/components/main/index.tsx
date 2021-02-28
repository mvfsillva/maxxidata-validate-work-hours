import { useState } from 'react'
import { CSVReader } from 'react-papaparse'
import { toast } from 'react-toastify'
import { withTheme } from 'styled-components'

import Button from 'components/button'
import Input from 'components/input'
import { Container } from 'layout'
import { currency, sumTime, onlyNumbers } from 'helpers'

import * as S from './styles'

const Main = ({ theme }) => {
  const [result, setResult] = useState([])
  const [amount, setAmount] = useState<number | string>()
  const [totalTime, setTotalTime] = useState<string | number>()
  const [hourValue, setHourValue] = useState<string>()

  const handleOnDrop = (data) => {
    const [{ data: headers }] = data
    const result = []

    for (let i = 0; i < data.length; i++) {
      const { data: currentLine } = data[i]
      const obj = {}

      for (let j = 0; j < headers.length; j++) {
        if (currentLine[j]) {
          obj[headers[j].toLowerCase().replace(/\s/g, '_')] = currentLine[j]
        }
      }

      if (Object.keys(obj).length) {
        result.push(obj)
      }
    }

    const [, ...parsedResult] = result
    setResult(parsedResult)
  }

  const handleOnError = () => {
    return toast.error('Problem when trying to upload the file', {
      style: {
        fontSize: theme.font.sizes.xxsmall
      }
    })
  }

  const handleOnRemoveFile = () => {
    return toast.warn('File removed', {
      style: {
        fontSize: theme.font.sizes.xxsmall
      }
    })
  }

  const normalizeData = (
    data: Array<{ inicial: string; final: string; horas: string }>
  ) => {
    const filteredData = data.map(({ inicial, final, horas }) => {
      return { start: inicial, end: final, total: horas }
    })

    return filteredData
  }

  const handleCheckHours = () => {
    const hh = normalizeData(result)
    const time = sumTime(hh)
    const amountMinutes = (time.minutes / 60) * (+onlyNumbers(hourValue) / 100)
    const amountHour = time.hours * (+onlyNumbers(hourValue) / 100)
    const amount = (amountHour + amountMinutes) * 100
    const totalWorkTime =
      time.minutes > 0 ? `${time.hours}:${time.minutes}` : time.hours

    setTotalTime(totalWorkTime)
    setAmount(currency({ amount, currency: 'BRL' }))
  }

  return (
    <Container>
      <S.Wrapper>
        <S.Field>
          <Input
            name="hourAmount"
            placeholder="fill your hour value: R$ 250,00"
            onChange={({ target: { value } }) => {
              if (value) {
                const val = +onlyNumbers(value)
                value = currency({ amount: val, currency: 'BRL' })
                setHourValue(value)
              }
            }}
          />
          <S.Dropzone>
            <CSVReader
              onDrop={handleOnDrop}
              onError={handleOnError}
              addRemoveButton
              onRemoveFile={handleOnRemoveFile}
            >
              <span>Drop CSV file here to upload.</span>
            </CSVReader>
          </S.Dropzone>
          <Button primary onClick={handleCheckHours}>
            Check
          </Button>
        </S.Field>
      </S.Wrapper>
      <S.Section>
        <span>Hour value: {hourValue}</span>
        <span>Total hours worked: {totalTime}</span>
        <span>Amount: {amount}</span>
      </S.Section>
    </Container>
  )
}

export default withTheme(Main)
