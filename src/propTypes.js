const inRange = (val, range) => (val >= range[0] && val <= range[1])

export const anglePropType = (props, propName, component) => {
  const prop = props[propName],
        range = [0, 360]
  if (!inRange(prop, range) && (prop !== "vertical" && prop !== "horizontal")) {
    return new Error(`Invalid angle in propType: ${propName}.
                      The angle must be horizontal, vertical or within ${range[0]} and ${range[1]}`)
  }
}

export const rangePropType = (props, propName, component) => {
  const prop = props[propName],
        range = [0, 100]
  if (isNaN(prop) || !inRange(prop, range)) {
    return new Error(`Invalid number in propType: ${propName}.
                      The number must be within ${range[0]} and ${range[1]}`)
  }
}
