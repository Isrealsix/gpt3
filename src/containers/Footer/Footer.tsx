import gpt3Logo from "../../assets/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer section-padding">
      <div className="footer__heading">
        <h1 className="gradient-text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="footer__button">
        <p>Request Early Access</p>
      </div>
      <div className="footer__links">
        <div className="footer__links--logo">
          <img src={gpt3Logo} alt="gpt3logo" />
          <p>Lorem ipsum dolor sit amet, All Rights Reserved</p>
        </div>
        <div className="footer__links--box">
          <h4>Links</h4>
          <p>Webdesigns</p>
          <p>App development</p>
          <p>Extensions</p>
          <p>Internet of Things</p>
        </div>
        <div className="footer__links--box">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>contact</p>
        </div>
        <div className="footer__links--box">
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor sit amet</p>
          <p>444-95-04</p>
          <p>info@doings.do</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2022 Изи. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
