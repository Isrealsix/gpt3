import { Feature } from '../../components';
import './WhatGPT3.scss';

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin" id="whatgpt3">
      <div className="whatgpt3__features">
        <Feature />
      </div>
      <div className="whatgpt3__heading">
        <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="whatgpt3__container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3