Array.prototype.includes = function(val) {
  return this.indexOf(val) >= 0
}
const inRange = (val, min, max) => (val >= min && val <= max)

export const anglePropType = (props, propName, component) => {
  const val = props[propName]
  const range = [0, 360]
  const dirs = ['horizontal', 'vertical']
  if (!inRange(val, ...range) && !dirs.includes(val)) {
    return new Error(`Invalid angle in propType: ${propName}.
                      The angle must be ${dirs.join(', ')} or within ${range.join(' and ')}`)
  }
}

export const rangePropType = (props, propName, component) => {
  const val = props[propName]
  const range = [0, 100]
  if (isNaN(val) || !inRange(val, ...range)) {
    return new Error(`Invalid number in propType: ${propName}.
                      The number must be within ${range.join(' and ')}`)
  }
}
