export const getGradient = (angle, pos, apt, smtns) => {
  const mask = alpha => `rgba(0,0,0,${alpha})`
  const end = pos - (apt / 2)
  return (
    `-webkit-linear-gradient(${angle}, ${mask(1)} 0, ` +
    `${mask(1)} ${(end - smtns).toFixed(2)}%, ${mask(0)} ${end}%)`
  )
}

const toAngle = val => `${val}deg`
const getAngle = (dir, values) => (
  isNaN(dir) ? toAngle(values[dir]) : toAngle((dir % 360) + values.axis)
)

export const bottomAngle = dir => getAngle(dir, {
  horizontal: 90, vertical: 0, axis: 0
})

export const topAngle = dir => getAngle(dir, {
  horizontal: 270, vertical: 180, axis: 180
})
