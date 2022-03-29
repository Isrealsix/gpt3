export interface IFeature {
  title: string;
  text: string;
};

export interface IArticle {
  imgUrl: string;
  date: string;
  title: string;
};

export type articleObjects = {
  [key: string]: IArticle
}