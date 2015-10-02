import React, { PropTypes, Component } from 'react'
import { anglePropType, rangePropType } from './propTypes'
import {
  bottomAngle, topAngle, getGradient, getFilter
} from './utils'
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
    const { aperture, position, smoothness, direction } = this.props
    const bAngle = bottomAngle(direction)
    const tAngle = topAngle(direction)
    const bGradient = getGradient(bAngle, position -100, aperture, smoothness)
    const tGradient = getGradient(tAngle, position, aperture, smoothness)

    const bStyles = {
      ...Styles.tiltMask,
      backgroundImage: `url(${this.props.src})`,
      WebkitFilter: getFilter(this.props.blur),
      WebkitMaskImage: bGradient,
    }
    const tStyles = { ...bStyles, WebkitMaskImage: tGradient }

    return (
      <div style={Styles.wrapper}>
        <img {...this.props} />
        <div style={tStyles} />
        <div style={bStyles} />
      </div>
    )
  }
}
