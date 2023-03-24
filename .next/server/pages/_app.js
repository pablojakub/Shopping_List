"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/FullPageLoadingSpinner.styled.tsx

const spiningAnimation = external_styled_components_.keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
const LoadingSpinner = (external_styled_components_default()).div`
width: 50px;
height: 50px;
border: 10px solid #f3f3f3; /* Light grey */
border-top: 10px solid #383636; /* Black */
border-radius: 50%;
animation: ${spiningAnimation} 1.5s linear infinite;
position: absolute;
z-index: 2;
top: 0px;
left: 0px;
bottom: 0px;
right: 0px;
margin: auto;
`;
const SpinnerContainer = (external_styled_components_default()).div`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.4);
z-index: 1;
`;

;// CONCATENATED MODULE: ./components/Layout/FullPageLoadingSpinner.tsx



function FullPageLoadingSpinner() {
    return /*#__PURE__*/ jsx_runtime_.jsx(SpinnerContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingSpinner, {})
    });
}

;// CONCATENATED MODULE: ./styles/GlobalStyles.tsx

const GlobalStyles = external_styled_components_.createGlobalStyle`
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
  background-image: url('/backgroud@1.png');
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
`;
/* harmony default export */ const styles_GlobalStyles = (GlobalStyles);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/_app.tsx






const Loading = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setIsLoading  } = (0,external_react_.useState)(false);
    const spinner = /*#__PURE__*/ jsx_runtime_.jsx(FullPageLoadingSpinner, {});
    (0,external_react_.useEffect)(()=>{
        const handleStart = (url)=>{
            url !== router.asPath && setIsLoading(true);
        };
        const handleComplete = (url)=>{
            url === router.asPath && setIsLoading(false);
        };
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [
        router
    ]);
    return loading === true ? spinner : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SessionProvider, {
        session: pageProps.session,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Loading, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styles_GlobalStyles, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7628));
module.exports = __webpack_exports__;

})();