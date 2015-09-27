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
      direction: 'horizontal',
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
        <div className="thumbnail text-center">
          <TiltShift src="sf.jpg" aperture={aperture} blur={blur} direction={directionValue} position={position} smoothness={smoothness} width="600" />
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="row">
              <div className="col-xs-4">
                <div className="form-group">
                  <label className="control-label" htmlFor="blur">Blur radius:</label>
                  <input className="form-control" ref="blurField" id="blur" type="number" min="0" max="10" step=".5" defaultValue={blur} onChange={this.handleChange} />
                </div>
              </div>
              <div className="col-xs-4">
                <div className="form-group">
                  <label className="control-label" htmlFor="aperture">Aperture:</label>
                  <input className="form-control" ref="apertureField" id="aperture" type="number" min="0" max="100" defaultValue={aperture} onChange={this.handleChange} />
                </div>
              </div>
              <div className="col-xs-4">
                <div className="form-group">
                  <label className="control-label" htmlFor="position">Position:</label>
                  <input className="form-control" ref="positionField" id="position" type="number" min="0" max="100" defaultValue={position} onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <div className="form-group">
                  <label className="control-label" htmlFor="smoothness">smoothness:</label>
                  <input className="form-control" ref="smoothnessField" id="smoothness" type="number" min="0" max="100" defaultValue={smoothness} onChange={this.handleChange} />
                </div>
              </div>
              <div className="col-xs-4">
                <div className="form-group">
                  <label className="control-label" htmlFor="direction">direction:</label>
                  <select className="form-control" defaultValue={direction} onChange={this.handleDirectionSource}>
                    <option value="horizontal">Horizontal</option>
                    <option value="vertical">Vertical</option>
                    <option value="angle">Angle</option>
                  </select>
                </div>
              </div>
              {direction == "angle" && (
                <div className="col-xs-4">
                  <div className="form-group">
                    <label className="control-label" htmlFor="direction">angle:</label>
                    <div className="input-group">
                      <input className="form-control" ref="directionField" id="direction" type="number" min="0" max="360" defaultValue={directionAngle} onChange={this.handleChange} />
                      <span className="input-group-addon">º</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <pre>
              &lt;TiltShift src="sf.jpg" aperture={aperture} blur={blur} direction={directionValue}
              <br/>           position={position} smoothness={smoothness} width="600" /&gt;
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-main'))
