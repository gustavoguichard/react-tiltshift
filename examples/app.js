import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TiltShift from '../src/tiltshift'

const Maybe = (obj, value) => obj !== undefined ? obj[value] : false

class App extends Component {
  constructor() {
    super()
    this.state = {
      aperture: 10,
      blur: 2.5,
      direction: 'vertical',
      position: 50,
      smoothness: 10,
      directionAngle: 0,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleDirectionSource = this.handleDirectionSource.bind(this)
  }

  get validDirection() {
    const { direction, directionAngle } = this.state
    return direction === "angle" ? directionAngle : direction
  }

  handleChange() {
    this.setState({
      aperture: this.refs.apertureField.value,
      blur: this.refs.blurField.value,
      directionAngle: Maybe(this.refs.directionField, 'value') || 0,
      position: this.refs.positionField.value,
      smoothness: this.refs.smoothnessField.value,
    })
  }

  handleDirectionSource(event) {
    const direction = event.currentTarget.value
    this.setState({ direction })
  }

  render() {
    const { blur, aperture, direction, directionAngle, position, smoothness } = this.state
    const directionValue = this.validDirection
    return (
      <div>
        <pre>
          &lt;TiltShift src="sf.jpg" aperture={aperture} blur={blur} direction={directionValue} position={position} smoothness={smoothness} width="600" /&gt;
        </pre>
        <TiltShift src="sf.jpg" aperture={aperture} blur={blur} direction={directionValue} position={position} smoothness={smoothness} width="600" />
        <p>
          <label htmlFor="blur">Blur radius:</label>{" "}
          <input ref="blurField" id="blur" type="number" min="0" max="10" step=".5" defaultValue={blur} onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="aperture">Aperture:</label>{" "}
          <input ref="apertureField" id="aperture" type="number" min="0" max="100" defaultValue={aperture} onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="direction">Direction:</label>{" "}
          <select defaultValue={direction} onChange={this.handleDirectionSource}>
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
            <option value="angle">Angle</option>
          </select>
          {direction == "angle" && (
            <span>
              {" "}
              <input ref="directionField" id="direction" type="number" min="0" max="360" defaultValue={directionAngle} onChange={this.handleChange} />º
            </span>
          )}
        </p>
        <p>
          <label htmlFor="position">Position:</label>{" "}
          <input ref="positionField" id="position" type="number" min="0" max="100" defaultValue={position} onChange={this.handleChange} />
        </p>
        <p>
          <label htmlFor="smoothness">smoothness:</label>{" "}
          <input ref="smoothnessField" id="smoothness" type="number" min="0" max="100" defaultValue={smoothness} onChange={this.handleChange} />
        </p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'))
