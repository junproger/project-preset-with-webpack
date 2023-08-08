// declare module '*.module.css';

declare module '*.module.css' {
  const styles: { [index: string]: string };
  export default styles;
}

// declare module '*.module.scss';

declare module '*.module.scss' {
  const styles: { [index: string]: string };
  export default styles;
}
