import React, { PropTypes, Component } from 'react'
import { anglePropType, rangePropType } from './propTypes'
import { bottomAngle, topAngle, getGradient } from './utils'
import Styles from './styles'

export default class TiltShift extends Component {

  static propTypes = {
    aperture: rangePropType,
    blur: rangePropType,
    direction: anglePropType,
    position: rangePropType,
    smoothness: rangePropType,
    src: PropTypes.string.isRequired,
  }

  static defaultProps = {
    aperture: 10,
    blur: 1.5,
    direction: 'horizontal',
    position: 50,
    smoothness: 10,
  }

  render() {
    const { src, aperture, position, blur, smoothness, direction } = this.props
    const bAngle = bottomAngle(direction)
    const tAngle = topAngle(direction)
    const botGradient = getGradient(bAngle, 100 - position, aperture, smoothness)
    const topGradient = getGradient(tAngle, position, aperture, smoothness)

    const bottomStyl = {
      ...Styles.blurredLayer,
      backgroundImage: `url(${src})`,
      WebkitFilter: `blur(${blur}px) contrast(105%) saturate(105%)`,
      WebkitMaskImage: botGradient,
    }
    const topSty = { ...bottomStyl, WebkitMaskImage: topGradient }

    return (
      <div style={Styles.wrap}>
        <img src={src} {...this.props} />
        <div style={topSty} />
        <div style={bottomStyl} />
      </div>
    )
  }
}
