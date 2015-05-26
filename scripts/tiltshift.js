import React from 'react'

const rangePropType = function(props, propName, component) {
  const prop = props[propName],
        min = 0,
        max = 100
  if (prop &&
      isNaN(prop) ||
      prop <= min ||
      prop >= max) {
    return new Error(`Invalid number in propType: ${propName}. The number must be within ${min} and ${max}`)
  }
}

const anglePropType = function(props, propName, component) {
  const prop = props[propName],
        min = 0,
        max = 360
  if ((isNaN(prop)) && (prop <= min || prop >= max) ||
      prop !== "vertical" &&
      prop !== "horizontal") {
    return new Error(`Invalid angle in propType: ${propName}. The angle must be horizontal, vertical or within ${min} and ${max}`)
  }
}

const styles = {
  wrap: {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative'
  },
  blurredLayer: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    backgroundSize: '100% 100%',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0
  }
}

const TiltShift = React.createClass({
  propTypes: {
    aperture: rangePropType,
    blur: rangePropType,
    direction: anglePropType,
    position: rangePropType,
    smoothness: rangePropType,
    src: React.PropTypes.string.isRequired
  },
  getDefaultProps() {
    return {
      aperture: 10,
      blur: 1.5,
      direction: 'vertical',
      position: 50,
      smoothness: 10
    }
  },
  render() {
    const { src, position, blur, aperture, smoothness, direction } = this.props
    let beforeEnd, beforeDirection, beforeFall, afterEnd,
        afterDirection, afterFall, angle, firstStyles,
        secondStyles = styles.blurredLayer
    secondStyles['backgroundImage'] = `url(${src})`
    secondStyles['WebkitFilter'] = `blur(${blur}px) contrast(105%) saturate(105%)`
    beforeEnd = (position - (aperture / 2)) / 100
    afterEnd = ((100 - position) - (aperture / 2)) / 100
    beforeFall = ((beforeEnd - (smoothness / 100)) * 100).toFixed(2)
    afterFall = ((afterEnd - (smoothness / 100)) * 100).toFixed(2)
    beforeEnd *= 100
    afterEnd *= 100
    if (direction === 'vertical') {
      beforeDirection = '270deg'
      afterDirection = '90deg'
    } else if (direction === 'horizontal') {
      beforeDirection = '180deg'
      afterDirection = '0deg'
    } else {
      angle = direction % 360
      beforeDirection = (angle + 180) + 'deg'
      afterDirection = angle + 'deg'
    }
    firstStyles = JSON.parse(JSON.stringify(secondStyles))
    firstStyles['WebkitMaskImage'] = `-webkit-linear-gradient(${beforeDirection}, rgba(0,0,0,1) 0, rgba(0,0,0,1) ${beforeFall}%, rgba(0,0,0,0) ${beforeEnd}%)`
    secondStyles['WebkitMaskImage'] = `-webkit-linear-gradient(${afterDirection}, rgba(0,0,0,1) 0, rgba(0,0,0,1) ${afterFall}%, rgba(0,0,0,0) ${afterEnd}%)`
    return (
      <div style={styles.wrap}>
        <img src={src} {...this.props} />
        <div style={firstStyles} />
        <div style={secondStyles} />
      </div>
    )
  }
})

module.exports = TiltShift