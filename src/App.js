import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './custom.scss';

//--slider-height-percentage: 43%;
function App() {
  return (
    <>
      <img style={{ width: '100%' }} src="./static/imgs/intro.jpg" alt="" />
      {/* <img style={{ width: '100%' }} src="./static/imgs/info.jpg" alt="" /> */}
      <AwesomeSlider
        className="aws-btn"
        bullets={false}
      >
        <div data-src="./static/imgs/1.jpg" />
        <div data-src="./static/imgs/2.jpg" />
        <div data-src="./static/imgs/3.jpg" />
        <div data-src="./static/imgs/4.jpg" />
        <div data-src="./static/imgs/5.jpg" />
        <div data-src="./static/imgs/6.jpg" />
        <div data-src="./static/imgs/7.jpg" />
        <div data-src="./static/imgs/8.jpg" />
        <div data-src="./static/imgs/9.jpg" />
      </AwesomeSlider>
    </>
  );
}

export default App;