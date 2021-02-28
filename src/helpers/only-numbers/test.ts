import { onlyNumbers } from '.'

test('Helper: [onlyNumbers]', () => {
  const amount = 'R$10.00'
  const stringAndNumbers = 'lorem 20 impsum 10'

  expect(onlyNumbers(amount)).toEqual('1000')
  expect(onlyNumbers(stringAndNumbers)).toEqual('2010')
})
