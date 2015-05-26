react-tiltshift
=====================

React component to create images tiltshift.

### Usage

```
import TiltShift from './tiltshift'

<TiltShift src="../images/sf.jpg" position="38" width="600" />
```

You just need to pass the `src` prop. You can pass any attribute you'd normally pass to a `img` html tag. You can pass the following props to configure the effect:

* aperture (0-100): the amount of area that is in focus. 10 would mean one tenth of the image is sharp.
* blur (0-10): the blur radius in pixels. Something between 1 or 2 usually gives the best results.
* direction (“horizontal”, “vertical”, or 0-360): the direction of the effect with zero at right.
* position (0-100): defines the point of focus. 50 would be the image middle.
* smoothness (0-100): the amount of area between complete focus and complete blur. The higher the value, the “smoother" the blur.

##### Demo

*Before:*

![screen-shot-2015-05-26-at-8 39 40-am](https://cloud.githubusercontent.com/assets/566971/7811816/9757830c-0383-11e5-88c7-6b19a967393e.jpg)

*After:*

![screen-shot-2015-05-26-at-8 39 12-am](https://cloud.githubusercontent.com/assets/566971/7811815/9733d4de-0383-11e5-977b-4862412b3d67.jpg)

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Inspiration & Base

* [jQuery tiltShift.js](http://www.noeltock.com/tilt-shift-css3-jquery-plugin/)
