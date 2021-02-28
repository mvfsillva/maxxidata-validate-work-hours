import { sumTime } from '.'

test('Helper: [sumTime]', () => {
  const data = [
    { total: '10:56' },
    { total: '08:25' },
    { total: '02:05' },
    { total: '03:00' }
  ]

  expect(sumTime(data)).toEqual({ hours: 24, minutes: 26 })
})
