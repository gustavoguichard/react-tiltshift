const mask = alpha => `rgba(0,0,0,${alpha})`
export const getGradient = (obj) => (
  `-webkit-linear-gradient(${obj.angle}, ${mask(1)} 0, ` +
  `${mask(1)} ${obj.fall}%, ${mask(0)} ${obj.end}%)`
)

const toAngle = val => `${val}deg`
const getAngle = (dir, values) => {
  isNaN(dir) ? toAngle(values[dir]) : toAngle((dir % 360) + values.axis)
}

export const bottomAngle = dir => getAngle(dir, {
  horizontal: 90, vertical: 0, axis: 0
})

export const topAngle = dir => getAngle(dir, {
  horizontal: 270, vertical: 180, axis: 180
})
