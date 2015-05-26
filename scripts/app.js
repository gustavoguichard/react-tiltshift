import React from 'react'
import TiltShift from './tiltshift'

const App = React.createClass({
  render() {
    return <TiltShift src="../images/sf.jpg" position="38" width="600" />
  }
})

module.exports = App