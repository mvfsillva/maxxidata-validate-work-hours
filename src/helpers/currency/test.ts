import { currency } from '.'

test('Helper: [currency]', () => {
  const amount = 1000

  expect(currency({ amount })).toEqual('$10.00')
  expect(currency({ amount: 0 - amount })).toEqual('- $10.00')

  expect(currency({ amount, currency: 'BRL' })).toEqual('R$10.00')
  expect(currency({ amount, currency: 'EUR' })).toEqual('€10.00')
})
