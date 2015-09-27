const inRange = (val, min, max) => (val >= min && val <= max)

export const anglePropType = (props, propName, component) => {
  const prop = props[propName], min = 0, max = 360
  if (!inRange(prop, min, max) || (prop !== "vertical" && prop !== "horizontal")) {
    return new Error(`Invalid angle in propType: ${propName}.
                      The angle must be horizontal, vertical or within ${min} and ${max}`)
  }
}

export const rangePropType = (props, propName, component) => {
  const prop = props[propName], min = 0, max = 100
  if (isNaN(prop) || !inRange(prop, min, max)) {
    return new Error(`Invalid number in propType: ${propName}.
                      The number must be within ${min} and ${max}`)
  }
}
