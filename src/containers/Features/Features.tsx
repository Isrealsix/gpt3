import "./Features.scss";
import { allFeatures } from "../../model/allFeatures";
import { Feature } from "../../components";

const Features = () => {
  return (
    <div className="features section-padding">
      <div className="features__heading">
        <h1 className="gradient-text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="whatgpt3__container">
        <Feature {...allFeatures[4]} />
        <Feature {...allFeatures[5]} />
        <Feature {...allFeatures[6]} />
        <Feature {...allFeatures[7]} />
      </div>
    </div>
  );
};

export default Features;