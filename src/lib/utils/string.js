export const char =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const charLng = char.length

export const generateRandomString = (length = 6) => {
  let result = ''
  for (let i = 0; i < length; i++)
    result += char.charAt(Math.floor(Math.random() * charLng))

  return result
}

export const getRandomNumber = (min = 0, max = 14) =>
  Math.floor(Math.random() * max) + min

export const getRandomTime = () => {
  // Get a random future date between now and 1 day later
  const futureDate = new Date(Date.now() + Math.floor(Math.random() * 86400000))

  // Format the time string as "HH:mm"
  const options = { hour: 'numeric', minute: 'numeric', hour12: false }
  return futureDate.toLocaleTimeString('en-US', options)
}
