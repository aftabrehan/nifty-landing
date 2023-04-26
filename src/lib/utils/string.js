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

export const getRandomPhrase = () => {
  const phrases = [
    'crimson sky bloomed like a rose in the evening.',
    'melody of the wind whispered secrets in my ear.',
    "ocean's gentle embrace lulled me to sleep.",
    'stars danced in the night sky like fireflies.',
    'forest was a tapestry of colors in the autumn.',
    'mountains were a majestic sight in the distance.',
    'sound of the waterfall was like a soothing symphony.',
    'scent of lavender filled the air like a sweet embrace.',
    'rustling leaves sang a soft lullaby in the breeze.',
    'sun painted the sky with hues of orange and pink.',
    'river flowed like a winding ribbon through the valley.',
    'moonlit night was a canvas for the stars to shine.',
    'fields were a blanket of golden wheat in the summer.',
    'snow-covered landscape was a magical wonderland.',
    'rainbow arched over the horizon like a bridge to another world.',
    'fire crackled and popped like a chorus of tiny voices.',
    'waves crashed against the shore with a thunderous roar.',
    'clouds drifted lazily across the sky like cotton candy.',
    'city was alive with the hum of traffic and the chatter of people.',
    'desert stretched out before me like an endless sea of sand.',
    'smell of freshly brewed coffee wafted through the air like a warm hug.',
    'sun set behind the mountains in a blaze of orange and red.',
    'snowflakes fell gently from the sky like delicate lace.',
    'full moon illuminated the night like a beacon of light.',
    'autumn leaves rustled beneath my feet like a symphony of sound.',
    'city lights sparkled like diamonds in the night sky.',
    'waves gently lapped at the shore like a mother soothing her child.',
    'cherry blossoms bloomed like delicate pink clouds in the spring.',
    'sound of the rain tapping against the window was a soothing melody.',
    'mountains were a fortress guarding the valley below.',
    'wind whispered secrets through the trees like a mischievous spirit.',
    'snow-capped peaks were a majestic sight to behold.',
    'smell of freshly baked bread filled the air like a warm hug.',
    'leaves on the trees rustled like a chorus of whispers.',
    'sunflowers stood tall and proud like soldiers on parade.',
    'waves crashed against the rocks with a deafening roar.',
    'clouds parted to reveal a bright blue sky.',
    'sound of laughter echoed through the halls like a joyful melody.',
    'stars shone like diamonds in the velvet sky.',
    'smell of freshly cut grass filled the air like a refreshing breeze.',
    'rain pattered against the roof like a gentle lullaby.',
    'waves rolled in and out like the ebb and flow of life.',
    'moon hung low in the sky like a glowing orb.',
    'leaves on the trees shimmered in the sunlight like a thousand jewels.',
    'city skyline was a beautiful sight to behold.',
    'scent of freshly picked flowers filled the air like a sweet perfume.',
    'sun beat down on my skin like a warm embrace.',
    'snow was powdery and light like a feather.',
    'raindrops sparkled like diamonds in the sunlight.',
    'birds sang a sweet melody in the morning light.',
    'trees swayed in the wind like dancers on a stage.',
  ]

  return phrases[getRandomNumber(0, 48)]
}
