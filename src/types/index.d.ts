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