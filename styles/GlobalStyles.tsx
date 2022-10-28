import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
  font-family: 'Noto Sans', sans-serif;
  
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: #3f3f3f;
  background-image: url('/backgroud.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} 

@media
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 2dppx)
  {
    body {
      background-image:
        url('/backgroud@2.png');
        background-size: 800px;
    }
  }
  
  @media
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 3dppx)
  {
    body {
      background-image:
        url('/backgroud3x.png');
        background-size: 350px;
    }
}

@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/../fonts/noto-sans-v27-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/noto-sans-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/noto-sans-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/noto-sans-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/noto-sans-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/noto-sans-v27-latin-regular.svg#NotoSans') format('svg'); /* Legacy iOS */
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

a {
  color: black;
    text-decoration: none;
}
`
export default GlobalStyles;