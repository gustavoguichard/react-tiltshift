import React from 'react'
import ReactDOM from 'react-dom'
import TiltShift from '../src/tiltshift'

const App = React.createClass({
  getInitialState() {
    return {
      aperture: 10,
      blur: 2.5,
      direction: 'vertical',
      position: 50,
      smoothness: 10,
      directionAngle: 0
    }
  },
  getDirection() {
    return this.state.direction === "angle" ? this.state.directionAngle : this.state.direction
  },
  handleChange() {
    const aperture = this.refs.apertureField.value
    const blur = this.refs.blurField.value
    const directionAngle = this.refs.directionField ?
                            this.refs.directionField.value : 0
    const position = this.refs.positionField.value
    const smoothness = this.refs.smoothnessField.value
    this.setState({ aperture, blur, directionAngle, position, smoothness })
  },
  handleDirectionSourceChange(event) {
    const direction = event.currentTarget.value
    this.setState({ direction })
  },
  render() {
    const { blur, aperture, direction, directionAngle, position, smoothness } = this.state,
          directionValue = this.getDirection()
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
          <select defaultValue={direction} onChange={this.handleDirectionSourceChange}>
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
})

ReactDOM.render(<App/>, document.getElementById('container'))
