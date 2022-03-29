import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from "../containers/Blog/imports";

import { articleObjects, IArticle } from "./model";

export const articleData = (article: string): IArticle => {
  const articles: articleObjects = {
    one: {
      imgUrl: blog01,
      date: "Jan 18, 2022",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officiis quo ab fuga?",
    },
    two: {
      imgUrl: blog02,
      date: "Feb 13, 1989",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur alias rerum voluptatibus odit quae?",
    },
    three: {
      imgUrl: blog03,
      date: "Mar 12, 2000",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus culpa eos ullam!",
    },
    four: {
      imgUrl: blog04,
      date: "Jun 18, 2019",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto placeat sequi itaque maxime perferendis veritatis.",
    },
    five: {
      imgUrl: blog05,
      date: "Oct 1, 2021",
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat debitis laborum magnam eius voluptates earum omnis.",
    },
  };
  return articles[article];
};
