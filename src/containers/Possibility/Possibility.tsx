import possibilityImage from "../../assets/possibility.png";
import "./Possibility.scss";

const Possibility = () => {
  return (
    <div className="possibility section-padding" id="possibility">
      <div className="possibility__image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility__content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem qui aspernatur, deleniti recusandae commodi, officiis,
          reprehenderit veniam ducimus hic est temporibus neque autem cupiditate
          incidunt non suscipit asperiores minus?
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
