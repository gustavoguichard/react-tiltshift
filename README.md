react-tiltshift
=====================

React component to create images tiltshift.

### Usage

```
import TiltShift from './tiltshift'

<TiltShift src="../images/sf.jpg" position="38" width="600" />
```

You just need to pass the `src` prop. You can pass any attribute you'd normally pass to a `img` html tag. You can pass the following props to configure the effect:

* position (0-100): defines the point of focus. 66 would be two thirds of the way in.
* blur (0-?): the blur radius in pixels. Something between 1 or 2 usually gives the best results.
* focus (0-100): the amount of area that is in focus. 10 would mean one tenth of the image is sharp.
* smoothness (0-100): the amount of area between complete focus and complete blur. The lower the value, the “sharper” the fade.
* direction (“horizontal”, “vertical”, or 0-360): the direction of the effect with zero at right.

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Inspiration & Base

* [jQuery tiltShift.js](http://www.noeltock.com/tilt-shift-css3-jquery-plugin/)
