export const sumTime = (data): Record<string, number> => {
  let totalHours = 0
  let totalMinutes = 0

  data.forEach((item) => {
    const [hour, minutes] = item.total.split(':')
    totalHours += +hour
    totalMinutes += +minutes
  })

  const minutesToHours = Math.floor(totalMinutes / 60)
  const hours = totalHours + minutesToHours
  const minutes = totalMinutes % 60

  return { hours, minutes }
}
