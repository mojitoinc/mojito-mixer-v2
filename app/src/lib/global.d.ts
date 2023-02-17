declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
declare module '*.svg' {
  const content: string;
  export default content;
}