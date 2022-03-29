import { Article } from "../../components";
import { articleData } from "../../model/articleData";
import "./Blog.scss";


const Blog = () => {
  return (
    <div className="blog section-padding" id="blog">
      <div className="blog__heading">
        <h1 className="gradient-text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog__container">
        <div className="blog__container--groupA">
          <Article { ...articleData('one') } />
        </div>
        <div className="blog__container--groupB">
          <Article { ...articleData('two') } />
          <Article { ...articleData('three') } />
          <Article { ...articleData('four') } />
          <Article { ...articleData('five') } />
        </div>
      </div>
    </div>
  );
};

export default Blog;