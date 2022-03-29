import { Feature } from "../../components";
import { allFeatures } from "../../model/allFeatures";
import "./WhatGPT3.scss";

const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 section-margin" id="whatgpt3">
      <div className="whatgpt3__feature">
        <Feature {...allFeatures[0]} />
      </div>
      <div className="whatgpt3__heading">
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="whatgpt3__container">
        <Feature {...allFeatures[1]} />
        <Feature {...allFeatures[2]} />
        <Feature {...allFeatures[3]} />
      </div>
    </div>
  );
};

export default WhatGPT3;
