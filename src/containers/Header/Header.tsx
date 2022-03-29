import "./Header.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section-padding" id="home">
      <div className="header__content">
        <h1 className="gradient-text">
          Let 'Изи' Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laborum placeat veniam excepturi quia nam necessitatibus ut
          exercitationem quidem sint! Ducimus placeat quo, saepe dicta sit
          exercitationem molestiae repudiandae?
        </p>
        <div className="header__content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header__content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit inlast 24 hours</p>
        </div>
      </div>
      <div className="header__image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
