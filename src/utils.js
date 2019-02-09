export function getRandomHslColorScheme(
  colorCount, 
  is_dark_mode_on,
  saturation = 80,
  start_hue = Math.floor(Math.random() * 360),
  shift = Math.floor(150 / colorCount),
  hue_wobble = 0,
) {
  if (start_hue === 'random') start_hue = Math.floor(Math.random() * 360)
  let values = []
  for (let i = 0; i < colorCount; i++) {
    let wobble = Math.round(Math.random()) ? hue_wobble : -hue_wobble
    let color = start_hue + shift * i + wobble
    if (color > 360) color = color - 360
    values.push(
      `hsl( ${color}, ${saturation}%, ${is_dark_mode_on ? '70%' : '50%'})`,
    )
  }
  return values
}
