declare module '*.css' {
  interface ClassName {
    [className: string]: string;
  }

  const className: ClassName;

  export default className;
}

type StaticAsset<T = string> = T;

declare module '*.jpg' {
  const content: StaticAsset;
  export default content;
}

declare module '*.png' {
  const content: StaticAsset;
  export default content;
}
declare module '*.svg' {
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*.svg?url' {
  const content: string;
  export default content;
}

type Hyperlink = {
  href?: string;
  text?: string;
};

declare module '@/data.json' {
  type Contact = Required<Hyperlink>;

  type Menu = {
    route: string;
    title: string;
  };

  type Software = {
    description: string;
    image?:      string;
    links:       Hyperlink[];
    name:        string;
    slug:        string;
    thumbnail?:   string;
  };

  type Video = string;

  type Work = {
    description: string;
    links:       Hyperlink[];
    name:        string;
    slug:        string;
    thumbnail:   string;
  };

  const content: {
    contact:  Contact[];
    menu:     Menu[];
    software: Software[];
    video:    Video[];
    work:     Work[];
  };

  export default content;
}