// Allow importing CSS files in TypeScript
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
