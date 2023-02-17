declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}