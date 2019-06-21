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
exports.push([module.i, ":root {\n    --gold: #b5ab50;\n    --gold2: #847c37;\n}\n\n@font-face {\n    font-family: 'futura std';\n    src: url(" + escape(__webpack_require__(/*! ./../Static/Futura-Std-Light.ttf */ "./src/Static/Futura-Std-Light.ttf")) + ");\n}\n\n.Options {\n    background-color: white;\n    background-image: -webkit-linear-gradient(-9deg, #ffff 49%, var(--gold) 49%);\n    min-height: 100vh;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n            align-items: center;\n    overflow-x: hidden;\n\n}\n\n.atom {\n    fill: #b5ab50;\n    fill: var(--gold);\n    width: 80%\n}\n\n.piano {\n     fill: white;\n     width: 80%\n }\n\n.getstartedrow {\n    margin-bottom: 3vh;\n    -webkit-justify-content: left;\n            justify-content: left;\n    width: 60%;\n}\n\n.getstartedtext {\n    font-family: 'ButlerBold';\n    text-align: left;\n    color: #b5ab50;\n    color: var(--gold);\n    font-size: 4vw;\n    width: 50%;\n}\n\n.content {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    width: 60%;\n}\n\n.betaside {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    display: -webkit-flex;\n    display: flex;\n    width: 50%;\n    text-align: center;\n\n}\n.preorderside {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    display: -webkit-flex;\n    display: flex;\n    width: 50%;\n    text-align: center;\n}\n\n.purchase{\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-align-items: center;\n            align-items: center;\n    display: -webkit-flex;\n    display: flex;\n    width: 100vw;\n    text-align: center;\n\n}\n\n.logo {\n    width: 13vw;\n    margin-bottom: 1.7vh;\n}\n\n.caption {\n    font-family: 'ButlerBold';\n    color: #b5ab50;\n    color: var(--gold);\n    font-size: 2.5vw;\n    margin-bottom: 3vh;\n\n\n}\n\n.betainfo {\n    font-family: 'futura std';\n    color: black;\n    font-size: 1.5vw;\n    width: 80%;\n    margin-top: 5vh;\n\n    list-style: outside none none;\n    text-align: left;\n    line-height: 5vh;\n}\n\n.preorderinfo {\n    font-family: 'futura std';\n    color: white;\n    font-size: 1.5vw;\n    width: 80%;\n    margin-top: 5vh;\n\n    list-style: outside none none;\n    text-align: left;\n    line-height: 5vh;\n}\n\n.mockups {\n    display: -webkit-flex;\n    display: flex;\n    width: 45vw;\n    height: 18.375vw;\n\n}\n\n.wrap2 {\n    margin-top: 2vh;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: space-evenly;\n            justify-content: space-evenly;\n    width: 35vw;\n    margin-bottom: 20vh;\n}\n\n.buttonBetaOption {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    display: -webkit-flex;\n    display: flex;\n    background-color: #b5ab50;\n    background-color: var(--gold); /* Green */\n    border: 1px solid white;\n    color: white;\n    padding: 1vw 1vw;\n    width: 9vw;\n    text-align: center;\n    text-decoration: none;\n    opacity: 1;\n    transition: 0.3s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 2vw;\n    font-family: futura std;\n    font-size: 1.3vw;\n}\n\n.buttonPreorderOption {\n    -webkit-flex-direction: column;\n            flex-direction: column;\n    display: -webkit-flex;\n    display: flex;\n    background-color: white; /* Green */\n    border: 1px solid #b5ab50;\n    border: 1px solid var(--gold);\n    color: #b5ab50;\n    color: var(--gold);\n    padding: 1vw 1vw;\n    width: 9vw;\n    text-align: center;\n    text-decoration: none;\n    opacity: 1;\n    transition: 0.3s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 2vw;\n    font-family: futura std;\n    font-size: 1.3vw;\n}\n\n.buttonPreorderOption:hover {\n    border: 1px solid white;\n    background-color: #b5ab50;\n    background-color: var(--gold);\n    color: white;\n}\n.buttonBetaOption:hover {\n    border: 1px solid #b5ab50;\n    border: 1px solid var(--gold);\n    background-color: white;\n    color: #b5ab50;\n    color: var(--gold);\n}\n\n@media only screen and (max-width: 600px){\n    .Home {\n        background-color: #333333;\n        background-image: none;\n        min-height: 100vh;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        -webkit-justify-content: space-evenly;\n                justify-content: space-evenly;\n        overflow-x: hidden;\n\n        /*align-items: center;*/\n    }\n\n    .left {\n        -webkit-justify-content: center;\n                justify-content: center;\n\n        display: -webkit-flex;\n\n        display: flex;\n        width: 65vw;\n        text-align: center;\n        margin-left: 0vw;\n    }\n\n    .logo {\n        width: 40vw;\n    }\n\n    .caption {\n        font-family: 'ButlerBold';\n        color: #b5ab50;\n        color: var(--gold);\n        font-size: 5vw;\n\n\n    }\n\n    .info {\n        font-family: 'futura std';\n        color: white;\n        font-size: 3vw;\n\n    }\n\n    .right{\n        width: 5vw;\n        display: -webkit-flex;\n        display: flex;\n\n    }\n\n    .mockups {\n        display: -webkit-flex;\n        display: flex;\n        width: 60vw;\n        height: 24.500vw;\n        /*ratio: 2.4489*/\n    }\n\n    .buttonBeta {\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        display: -webkit-flex;\n        display: flex;\n        background-color: #b5ab50;\n        background-color: var(--gold); /* Green */\n        border: none;\n        color: white;\n        padding: 3vw 3vw;\n        width: 18vw;\n        text-align: center;\n        text-decoration: none;\n        opacity: 1;\n        transition: 0.3s;\n        text-decoration: none;\n        cursor: pointer;\n        font-size: 16px;\n        border-radius: 10vw;\n        font-family: futura std;\n        font-size: 2.5vw;\n        margin-right: 3vw;\n    }\n\n    .buttonInfo {\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        display: -webkit-flex;\n        display: flex;\n        background-color: grey; /* Green */\n        border: none;\n        color: white;\n        padding: 3vw 3vw;\n        width: 18vw;\n        text-align: center;\n        text-decoration: none;\n        opacity: 1;\n        transition: 0.3s;\n        text-decoration: none;\n        cursor: pointer;\n        font-size: 16px;\n        border-radius: 10vw;\n        font-family: futura std;\n        font-size: 2.5vw;\n        margin-left: 3vw;\n    }\n\n\n}\n.snip1214 {\n    font-family: 'Futura Std';\n    color: #000000;\n    text-align: center;\n    font-size: 16px;\n    width: 100%;\n    max-width: 1000px;\n    margin: 40px 10px;\n}\n.snip1214 .plan {\n    margin: 0;\n    width: 25%;\n    position: relative;\n    display: inline-block;\n    background-color: #ffffff;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.snip1214 * {\n    box-sizing: border-box;\n    /*border-radius: 50px;*/\n}\n.snip1214 header {\n    position: relative;\n}\n.snip1214 .plan-title {\n    position: relative;\n    top: 0;\n    font-weight: 800;\n    padding: 5px 15px;\n    margin: 0 auto;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    margin: 0;\n    display: inline-block;\n    background-color: #222f3d;\n    color: #ffffff;\n    text-transform: uppercase;\n}\n.snip1214 .plan-cost {\n    padding: 0px 10px 20px;\n}\n.snip1214 .plan-price {\n    font-family: 'Montserrat', Arial, sans-serif;\n    font-weight: 800;\n    font-size: 2.4em;\n    color: #34495e;\n}\n.snip1214 .plan-type {\n    opacity: 0.6;\n}\n.snip1214 .plan-features {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style: outside none none;\n    font-size: 0.8em;\n\n}\n.snip1214 .plan-features li {\n    border-top: 1px solid #d2d7e2;\n    padding: 10px 5%;\n}\n.snip1214 .plan-features li:nth-child(even) {\n    background: rgba(0, 0, 0, 0.08);\n}\n.snip1214 .plan-features i {\n    margin-right: 8px;\n    opacity: 0.4;\n}\n.snip1214 .plan-select {\n    border-top: 1px solid #d2d7e2;\n    padding: 10px 10px 0;\n}\n.snip1214 .plan-select a {\n    background-color: #222f3d;\n    color: #ffffff;\n    text-decoration: none;\n    padding: 0.5em 1em;\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%);\n    font-weight: 800;\n    text-transform: uppercase;\n    display: inline-block;\n}\n.snip1214 .plan-select a:hover {\n    background-color: #46627f;\n}\n.snip1214 .featured {\n    margin-top: -10px;\n    background-color: #b5ab50;\n    background-color: var(--gold);\n    color: #ffffff;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\n    z-index: 1;\n}\n.snip1214 .featured .plan-title,\n.snip1214 .featured .plan-price {\n    color: #ffffff;\n}\n.snip1214 .featured .plan-cost {\n    padding: 10px 10px 20px;\n}\n.snip1214 .featured .plan-features li {\n    border-top: 1px solid rgba(255, 255, 255, 0.4);\n}\n.snip1214 .featured .plan-select {\n    padding: 20px 10px 0;\n    border-top: 1px solid rgba(255, 255, 255, 0.4);\n\n}\n@media only screen and (max-width: 767px) {\n    .snip1214 .plan {\n        width: 50%;\n    }\n    .snip1214 .plan-title,\n    .snip1214 .plan-select a {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n    .snip1214 .plan-cost,\n    .snip1214 .featured .plan-cost {\n        padding: 20px 10px 20px;\n    }\n    .snip1214 .plan-select,\n    .snip1214 .featured .plan-select {\n        padding: 10px 10px 10px;\n    }\n    .snip1214 .featured {\n        margin-top: 0;\n    }\n}\n@media only screen and (max-width: 440px) {\n    .snip1214 .plan {\n        width: 100%;\n    }\n}\n.empty{\n    visibility: hidden;\n}", ""]);

// exports


/***/ })

})
//# sourceMappingURL=main.c77734bc0e17fd82fcc1.hot-update.js.map