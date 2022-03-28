import './Feature.scss';
import { IFeature } from '../../model/model';

const Feature: React.FC<IFeature> = ({ title, text }) => {
  return (
    <div className="whatgpt3__feature-container">
      <div className="whatgpt3__feature-container--title">
        <div />
        <h1>{title}</h1>
        <div className="whatgpt3__feature-container--text">
          {text}
        </div>
      </div>
    </div>
  )
}

export default Feature