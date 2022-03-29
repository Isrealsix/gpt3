import './Article.scss';

type Props = {
  imgUrl: string;
}

const Article:React.FC<Props> = ({ imgUrl }) => {
  return (
    <div className="article">
      <div className="article__image">
        <img src={imgUrl} alt="blog" />
      </div>
    </div>
  )
}

export default Article;