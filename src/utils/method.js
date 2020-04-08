export const IsIE = () => {
  return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
}
