import './index.d';

export type CardItem = {
  description: string;
  image?:      string;
  links:       CardItemLink[];
  name:        string;
  slug:        string;
  thumbnail?:  string;
};

export type CardItemLink = {
  href?: string;
  text?: string;
};