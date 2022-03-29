import './Article.scss';

type Props = {
  imgUrl: string;
  date: string;
  title: string;
}

const Article:React.FC<Props> = ({ imgUrl, date, title }) => {
  return (
    <div className="article">
      <div className="article__image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="article__content">
        <p>{date}</p>
        <h3>{title}</h3>  
      </div>
      <p>Read Full Article</p>
    </div>
  )
}

export default Article;