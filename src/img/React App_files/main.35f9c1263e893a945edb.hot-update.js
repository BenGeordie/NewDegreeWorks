webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Options.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/Options.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:800);", ""]);

// module
exports.push([module.i, ":root {\n    --gold: #b5ab50;\n    --gold2: #847c37;\n}\n\n@font-face {\n    font-family: 'futura std';\n    src: url(" + escape(__webpack_require__(/*! ./../Static/Futura-Std-Light.ttf */ "./src/Static/Futura-Std-Light.ttf")) + ");\n}\n\n.Options {\n    background-color: white;\n    background-image: -webkit-linear-gradient(-9deg, #ffff 49%, var(--gold) 49%);\n    min-height: 100vh;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n            align-items: center;\n    overflow-x: hidden;\n\n}\n\n.atom {\n    fill: #b5ab50;\n    fill: var(--gold);\n    width: 100%\n}\n\n.piano {\n     fill: white;\n     width: 100%\n }\n\n.getstartedrow {\n    margin-bottom: 3vh;\n    -webkit-justify-content: left;\n            justify-content: left;\n    width: 60%;\n}\n\n.getstartedtext {\n    font-family: 'ButlerBold';\n    text-align: left;\n    color: #b5ab50;\n    color: var(--gold);\n    font-size: 4vw;\n    width: 50%;\n}\n\n.content {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    width: 60%;\n}\n\n.betaside {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    display: -webkit-flex;\n    display: flex;\n    width: 50%;\n    text-align: center;\n\n}\n.preorderside {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    display: -webkit-flex;\n    display: flex;\n    width: 50%;\n    text-align: center;\n}\n\n.purchase{\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    display: -webkit-flex;\n    display: flex;\n    width: 100vw;\n    text-align: center;\n\n}\n\n.logo {\n    width: 13vw;\n    margin-bottom: 1.7vh;\n}\n\n.caption {\n    font-family: 'ButlerBold';\n    color: #b5ab50;\n    color: var(--gold);\n    font-size: 2.5vw;\n    margin-bottom: 3vh;\n\n\n}\n\n.betainfo {\n    font-family: 'futura std';\n    color: black;\n    font-size: 1.5vw;\n    width: 80%;\n    margin-top: 5vh;\n\n    list-style: outside none none;\n    text-align: left;\n    line-height: 5vh;\n}\n\n.preorderinfo {\n    font-family: 'futura std';\n    color: white;\n    font-size: 1.5vw;\n    width: 80%;\n    margin-top: 5vh;\n\n    list-style: outside none none;\n    text-align: left;\n    line-height: 5vh;\n}\n\n.mockups {\n    display: -webkit-flex;\n    display: flex;\n    width: 45vw;\n    height: 18.375vw;\n\n}\n\n.wrap2 {\n    margin-top: 2vh;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: space-evenly;\n            justify-content: space-evenly;\n    width: 35vw;\n    margin-bottom: 20vh;\n}\n\n.buttonBetaOption {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    display: -webkit-flex;\n    display: flex;\n    background-color: #b5ab50;\n    background-color: var(--gold); /* Green */\n    border: 1px solid white;\n    color: white;\n    padding: 1vw 1vw;\n    width: 9vw;\n    text-align: center;\n    text-decoration: none;\n    opacity: 1;\n    transition: 0.3s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 2vw;\n    font-family: futura std;\n    font-size: 1.3vw;\n}\n\n.buttonPreorderOption {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    display: -webkit-flex;\n    display: flex;\n    background-color: white; /* Green */\n    border: 1px solid #b5ab50;\n    border: 1px solid var(--gold);\n    color: #b5ab50;\n    color: var(--gold);\n    padding: 1vw 1vw;\n    width: 9vw;\n    text-align: center;\n    text-decoration: none;\n    opacity: 1;\n    transition: 0.3s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 2vw;\n    font-family: futura std;\n    font-size: 1.3vw;\n}\n\n.buttonPreorderOption:hover {\n    border: 1px solid white;\n    background-color: #b5ab50;\n    background-color: var(--gold);\n    color: white;\n}\n.buttonBetaOption:hover {\n    border: 1px solid #b5ab50;\n    border: 1px solid var(--gold);\n    background-color: white;\n    color: #b5ab50;\n    color: var(--gold);\n}\n\n@media only screen and (max-width: 600px){\n    .Home {\n        background-color: #333333;\n        background-image: none;\n        min-height: 100vh;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        -webkit-justify-content: space-evenly;\n                justify-content: space-evenly;\n        overflow-x: hidden;\n\n        /*align-items: center;*/\n    }\n\n    .left {\n        -webkit-justify-content: center;\n                justify-content: center;\n\n        display: -webkit-flex;\n\n        display: flex;\n        width: 65vw;\n        text-align: center;\n        margin-left: 0vw;\n    }\n\n    .logo {\n        width: 40vw;\n    }\n\n    .caption {\n        font-family: 'ButlerBold';\n        color: #b5ab50;\n        color: var(--gold);\n        font-size: 5vw;\n\n\n    }\n\n    .info {\n        font-family: 'futura std';\n        color: white;\n        font-size: 3vw;\n\n    }\n\n    .right{\n        width: 5vw;\n        display: -webkit-flex;\n        display: flex;\n\n    }\n\n    .mockups {\n        display: -webkit-flex;\n        display: flex;\n        width: 60vw;\n        height: 24.500vw;\n        /*ratio: 2.4489*/\n    }\n\n    .buttonBeta {\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        display: -webkit-flex;\n        display: flex;\n        background-color: #b5ab50;\n        background-color: var(--gold); /* Green */\n        border: none;\n        color: white;\n        padding: 3vw 3vw;\n        width: 18vw;\n        text-align: center;\n        text-decoration: none;\n        opacity: 1;\n        transition: 0.3s;\n        text-decoration: none;\n        cursor: pointer;\n        font-size: 16px;\n        border-radius: 10vw;\n        font-family: futura std;\n        font-size: 2.5vw;\n        margin-right: 3vw;\n    }\n\n    .buttonInfo {\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        display: -webkit-flex;\n        display: flex;\n        background-color: grey; /* Green */\n        border: none;\n        color: white;\n        padding: 3vw 3vw;\n        width: 18vw;\n        text-align: center;\n        text-decoration: none;\n        opacity: 1;\n        transition: 0.3s;\n        text-decoration: none;\n        cursor: pointer;\n        font-size: 16px;\n        border-radius: 10vw;\n        font-family: futura std;\n        font-size: 2.5vw;\n        margin-left: 3vw;\n    }\n\n\n}\n.snip1214 {\n    font-family: 'Futura Std';\n    color: #000000;\n    text-align: center;\n    font-size: 16px;\n    width: 100%;\n    max-width: 1000px;\n    margin: 40px 10px;\n}\n.snip1214 .plan {\n    margin: 0;\n    width: 25%;\n    position: relative;\n    display: inline-block;\n    background-color: #ffffff;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.snip1214 * {\n    box-sizing: border-box;\n    /*border-radius: 50px;*/\n}\n.snip1214 header {\n    position: relative;\n}\n.snip1214 .plan-title {\n    position: relative;\n    top: 0;\n    font-weight: 800;\n    padding: 5px 15px;\n    margin: 0 auto;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    margin: 0;\n    display: inline-block;\n    background-color: #222f3d;\n    color: #ffffff;\n    text-transform: uppercase;\n}\n.snip1214 .plan-cost {\n    padding: 0px 10px 20px;\n}\n.snip1214 .plan-price {\n    font-family: 'Montserrat', Arial, sans-serif;\n    font-weight: 800;\n    font-size: 2.4em;\n    color: #34495e;\n}\n.snip1214 .plan-type {\n    opacity: 0.6;\n}\n.snip1214 .plan-features {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style: outside none none;\n    font-size: 0.8em;\n\n}\n.snip1214 .plan-features li {\n    border-top: 1px solid #d2d7e2;\n    padding: 10px 5%;\n}\n.snip1214 .plan-features li:nth-child(even) {\n    background: rgba(0, 0, 0, 0.08);\n}\n.snip1214 .plan-features i {\n    margin-right: 8px;\n    opacity: 0.4;\n}\n.snip1214 .plan-select {\n    border-top: 1px solid #d2d7e2;\n    padding: 10px 10px 0;\n}\n.snip1214 .plan-select a {\n    background-color: #222f3d;\n    color: #ffffff;\n    text-decoration: none;\n    padding: 0.5em 1em;\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%);\n    font-weight: 800;\n    text-transform: uppercase;\n    display: inline-block;\n}\n.snip1214 .plan-select a:hover {\n    background-color: #46627f;\n}\n.snip1214 .featured {\n    margin-top: -10px;\n    background-color: #b5ab50;\n    background-color: var(--gold);\n    color: #ffffff;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\n    z-index: 1;\n}\n.snip1214 .featured .plan-title,\n.snip1214 .featured .plan-price {\n    color: #ffffff;\n}\n.snip1214 .featured .plan-cost {\n    padding: 10px 10px 20px;\n}\n.snip1214 .featured .plan-features li {\n    border-top: 1px solid rgba(255, 255, 255, 0.4);\n}\n.snip1214 .featured .plan-select {\n    padding: 20px 10px 0;\n    border-top: 1px solid rgba(255, 255, 255, 0.4);\n\n}\n@media only screen and (max-width: 767px) {\n    .snip1214 .plan {\n        width: 50%;\n    }\n    .snip1214 .plan-title,\n    .snip1214 .plan-select a {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n    .snip1214 .plan-cost,\n    .snip1214 .featured .plan-cost {\n        padding: 20px 10px 20px;\n    }\n    .snip1214 .plan-select,\n    .snip1214 .featured .plan-select {\n        padding: 10px 10px 10px;\n    }\n    .snip1214 .featured {\n        margin-top: 0;\n    }\n}\n@media only screen and (max-width: 440px) {\n    .snip1214 .plan {\n        width: 100%;\n    }\n}\n.empty{\n    visibility: hidden;\n}", ""]);

// exports


/***/ }),

/***/ "./src/Pages/Options.js":
/*!******************************!*\
  !*** ./src/Pages/Options.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Options_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Options.css */ "./src/css/Options.css");
/* harmony import */ var _css_Options_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Options_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_piano_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/piano.svg */ "./src/img/piano.svg");
/* harmony import */ var _img_piano_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_piano_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_mockups_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/mockups.png */ "./src/img/mockups.png");
/* harmony import */ var _img_mockups_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_mockups_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll-into-view */ "./node_modules/react-scroll-into-view/dist/index.js");
/* harmony import */ var react_scroll_into_view__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/benitogeordie/WebstormProjects/grid/src/Pages/Options.js";





var isMobile = window.innerWidth <= 600;

var Options =
/*#__PURE__*/
function (_Component) {
  Object(_Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Options, _Component);

  function Options() {
    Object(_Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Options);

    return Object(_Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Options).apply(this, arguments));
  }

  Object(_Users_benitogeordie_WebstormProjects_grid_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Options, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Options",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "getstartedrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "getstartedtext",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Get Started with A440"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "betaside",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "atom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
        height: "100%",
        viewBox: "0 0 511 512",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "m261.164062 214.625c-22.921874-7.761719-47.964843 4.433594-55.824218 27.179688-3.808594 11.019531-3.078125 22.855468 2.054687 33.328124 5.171875 10.554688 14.183594 18.453126 25.367188 22.242188 4.683593 1.585938 9.453125 2.335938 14.148437 2.335938 18.285156 0 35.421875-11.417969 41.675782-29.519532 3.808593-11.015625 3.078124-22.851562-2.054688-33.328125-5.175781-10.550781-14.183594-18.449219-25.367188-22.238281zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("path", {
        d: "m494.625 68.546875c-5.171875-10.554687-14.183594-18.449219-25.367188-22.238281-18.789062-6.363282-39 .695312-50.007812 15.976562-.28125-.011718-.5625-.03125-.847656-.027344-23.863282.550782-54.839844 9.613282-90.445313 26.367188-.96875-2.816406-1.960937-5.59375-2.980469-8.308594-19.441406-51.792968-47.148437-80.316406-78.015624-80.316406-30.867188 0-58.570313 28.523438-78.015626 80.316406-1.019531 2.71875-2.011718 5.496094-2.980468 8.3125-3.664063-1.722656-7.300782-3.375-10.898438-4.953125-71.546875-31.304687-104.855468-22.480469-120.195312-9.5625-6.964844 5.859375-15.265625 16.796875-15.265625 35.609375 0 36.164063 31.65625 89.699219 84.578125 146.335938-46.832032 50.253906-77.367188 98.433594-83.4375 133.621094-8.058594 5.132812-14.5 12.878906-17.839844 22.539062-3.808594 11.019531-3.078125 22.855469 2.058594 33.328125 5.171875 10.554687 14.179687 18.453125 25.363281 22.238281 4.683594 1.585938 9.453125 2.339844 14.148437 2.339844 15.113282 0 29.433594-7.804688 37.484376-20.730469 22.890624-1.855469 51.527343-10.738281 84.007812-26.019531.964844 2.816406 1.957031 5.59375 2.976562 8.3125 19.445313 51.789062 47.148438 80.3125 78.015626 80.3125 30.867187 0 58.574218-28.523438 78.015624-80.316406 1.019532-2.71875 2.011719-5.496094 2.980469-8.3125 3.664063 1.722656 7.300781 3.375 10.898438 4.953125 36.074219 15.785156 62.429687 21.367187 81.660156 21.367187 18.90625 0 30.929687-5.398437 38.539063-11.800781 6.960937-5.863281 15.261718-16.800781 15.261718-35.613281 0-36.15625-31.644531-89.6875-84.5625-146.320313 13.949219-14.957031 26.574219-29.855469 37.605469-44.417969 17.183594-22.695312 37.90625-54.558593 44.679687-83.566406 11.183594-4.660156 20.40625-13.84375 24.640626-26.09375 3.808593-11.019531 3.078124-22.859375-2.054688-33.332031zm-185.429688 311.4375c-11.761718-6.566406-23.738281-13.792969-35.820312-21.609375 15.292969-11.164062 30.515625-23.066406 45.472656-35.59375-2.226562 20.167969-5.464844 39.382812-9.652344 57.203125zm13.238282-123.984375c0 8.199219-.160156 16.324219-.46875 24.363281-6.71875 6.042969-13.613282 12.058594-20.691406 18.015625-17.851563 15.027344-36.152344 29.125-54.378907 42.019532-18.179687-12.90625-36.394531-26.992188-54.246093-42.019532-7.078126-5.960937-13.976563-11.96875-20.6875-18-.308594-8.042968-.46875-16.175781-.46875-24.378906 0-8.199219.160156-16.324219.46875-24.363281 6.71875-6.042969 13.613281-12.058594 20.691406-18.015625 17.859375-15.03125 36.15625-29.132813 54.375-42.023438 18.179687 12.90625 36.394531 26.996094 54.246094 42.023438 7.082031 5.960937 13.980468 11.96875 20.691406 18 .308594 8.042968.46875 16.175781.46875 24.378906zm-147.355469 66.789062c14.933594 12.503907 30.121094 24.394532 45.355469 35.519532-12.109375 7.824218-24.070313 15.042968-35.730469 21.574218-4.171875-17.789062-7.402344-36.96875-9.625-57.09375zm9.648437-190.773437c11.761719 6.566406 23.742188 13.792969 35.824219 21.609375-15.292969 11.160156-30.515625 23.066406-45.472656 35.59375 2.226563-20.167969 5.464844-39.382812 9.648437-57.203125zm134.121094 57.195313c-14.9375-12.507813-30.128906-24.398438-45.363281-35.523438 12.113281-7.832031 24.074219-15.050781 35.734375-21.582031 4.171875 17.789062 7.402344 36.972656 9.628906 57.105469zm-121.816406-98.351563c14.308594-38.109375 32.972656-60.859375 49.929688-60.859375 16.960937 0 35.625 22.75 49.929687 60.859375 1.398437 3.726563 2.742187 7.566406 4.03125 11.5-17.707031 9.609375-35.792969 20.609375-53.945313 32.769531-18.230468-12.21875-36.339843-23.21875-53.96875-32.785156 1.289063-3.929688 2.628907-7.765625 4.023438-11.484375zm-147.425781 18.863281c0-7.886718 2.617187-11.003906 4.585937-12.660156 3.78125-3.183594 10.367188-4.828125 19.007813-4.828125 3.175781 0 6.628906.222656 10.324219.671875 16.136718 1.964844 36.71875 8.277344 59.519531 18.253906 4.707031 2.058594 9.476562 4.257813 14.304687 6.585938-7.644531 30.15625-12.664062 64.183594-14.75 100.074218-5.988281 5.558594-11.800781 11.117188-17.433594 16.675782-14.382812-15.488282-27.226562-30.863282-38.226562-45.820313-23.722656-32.257812-37.332031-61.035156-37.332031-78.953125zm38.214843 308.785156c-.71875-3.84375-1.953124-7.617187-3.71875-11.230468-5.175781-10.550782-14.183593-18.453125-25.371093-22.238282-1.851563-.628906-3.714844-1.109374-5.585938-1.480468 4.519531-13.871094 14.574219-34.730469 36.523438-63.902344 10.363281-13.773438 22.285156-27.894531 35.476562-42.105469 5.632813 5.542969 11.457031 11.101563 17.453125 16.65625 2.089844 35.867188 7.105469 69.871094 14.742188 100.007813-26.324219 12.769531-50.203125 21.246094-69.519532 24.292968zm209.070313 2.632813c-14.304687 38.109375-32.96875 60.859375-49.929687 60.859375-16.957032 0-35.621094-22.75-49.929688-60.859375-1.398438-3.726563-2.738281-7.566406-4.03125-11.5 17.707031-9.613281 35.796875-20.609375 53.949219-32.769531 18.226562 12.21875 36.335937 23.21875 53.964843 32.785156-1.285156 3.929688-2.625 7.765625-4.023437 11.484375zm147.425781-18.863281c0 7.886718-2.613281 11.003906-4.582031 12.660156-5.175781 4.355469-15.589844 5.832031-29.335937 4.15625-16.132813-1.964844-36.714844-8.277344-59.519532-18.253906-4.703125-2.058594-9.476562-4.257813-14.304687-6.585938 7.644531-30.152344 12.664062-64.175781 14.753906-100.066406 5.972656-5.539062 11.789063-11.101562 17.441406-16.675781 14.378907 15.484375 27.21875 30.855469 38.214844 45.808593 23.726563 32.261719 37.332031 61.039063 37.332031 78.957032zm-40.875-208.851563c-10.167968 13.425781-21.8125 27.183594-34.664062 41.019531-5.632813-5.542968-11.453125-11.097656-17.453125-16.652343-2.085938-35.875-7.101563-69.882813-14.742188-100.023438 28.757813-13.949219 54.589844-22.765625 74.753907-24.984375.570312 4.8125 1.953124 9.546875 4.152343 14.03125 5.140625 10.480469 14.0625 18.335938 25.136719 22.15625-5.902344 17.773438-18.699219 40.042969-37.183594 64.453125zm0 0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "betainfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "ion-checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, " "), "Be the first to gain access to our revolutionary platform."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "ion-checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, " "), "Get notifications about our development process."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "ion-checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, " "), "Receive early access to new features.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wrap2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        style: {
          display: "table-cell",
          textDecoration: "none"
        },
        href: "https://danny235320.typeform.com/to/iJ2NhH",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "buttonBetaOption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Join Our Beta")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "preorderside",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_piano_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "piano",
        className: "piano",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "preorderinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "ion-checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, " "), "Be the first to gain access to our revolutionary platform."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "ion-checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, " "), "Get notifications about our development process."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "ion-checkmark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, " "), "Receive early access to new features.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "wrap2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        style: {
          display: "table-cell",
          textDecoration: "none"
        },
        href: "https://danny235320.typeform.com/to/iJ2NhH",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "buttonPreorderOption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Preorder now!"))))));
    }
  }]);

  return Options;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ })

})
//# sourceMappingURL=main.35f9c1263e893a945edb.hot-update.js.map