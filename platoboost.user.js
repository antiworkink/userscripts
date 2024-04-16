
// ==UserScript==
// @name         Delta and Hydrogen bypass
// @homepageURL  https://discord.gg/keybypass
// @description  bypasses Delta and Hydrogen on Platoboost
// @author       d15c0rdh4ckr | https://discord.com/users/768868463459434517
// @version      9

// @run-at       document-start

// @match        https://gateway.platoboost.com/a/8?id=*
// @match        https://gateway.platoboost.com/a/2569?id=*
// @connect      raw.githubusercontent.com
// @connect      api-gateway.platoboost.com

// @grant        GM_xmlhttpRequest

// @supportURL   https://discord.gg/keybypass
// @icon         https://files.catbox.moe/gu2z11.jpg
// @namespace    d15c0rdh4ckr
// @license      do-not-distribute
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 224:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const { currentVersion } = __webpack_require__(219);

const oldDocHeadAppendChild = document.head.appendChild;
document.head.appendChild = function (element) {
    if (element.src && element.src.includes("workink")) {
        return;
    }
    return oldDocHeadAppendChild.call(document.head, element);
};

GM.xmlHttpRequest({
    method: "GET",
    url: `https://raw.githubusercontent.com/antiworkink/userscripts/main/version.json?update=${Date.now()}`,
    onload: function (response) {
        response = JSON.parse(response.responseText);
        if (currentVersion != response.platoboost) {
            alert('There is a new version of the script available. Please update to the latest version.');
            window.location.replace("https://github.com/antiworkink/userscripts/raw/main/platoboost.user.js");
        }
    },
});

/***/ }),

/***/ 94:
/***/ ((module) => {

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getCapthaSolution(type) {
    let res = "";
    while (!res) {
        showMessage("please solve the captcha");
        try {
            res = eval(type).getResponse();
        } catch (e) {}
        await sleep(250);
    }
    return res;
}

async function platoboostApi(path, method, body) {
    return new Promise(resolve => {
        GM.xmlHttpRequest({
            method: method,
            url: `https://api-gateway.platoboost.com${path}`,
            data: JSON.stringify(body),
            headers: {
                Accept: "application/json",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "en-US,en;q=0.9",
                "Content-Type": "application/json",
                Connection: "keep-alive",
                "Sec-Ch-Ua":
                    '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
                "Sec-Ch-Ua-Mobile": "?1",
                "Sec-Ch-Ua-Platform": '"Android"',
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-site",
                "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36",
                Version: "3.3.5",
            },
            onload: function (response) {
                response = JSON.parse(response.responseText);
                resolve(response);
            },
        });
    });
}

function bypassAdLink(link) {
    let adUrl = new URL(link);
    adUrl = adUrl.searchParams.get("r");
    let bypassedUrl = atob(adUrl);
    return bypassedUrl;
}

function showMessage(message) {
    if (!document.getElementsByTagName("h3")[1]) {
        return;
    }
    document.getElementsByTagName("h3")[1].innerHTML = message;
}

module.exports = {
    sleep,
    getCapthaSolution,
    platoboostApi,
    bypassAdLink,
    showMessage,
};


/***/ }),

/***/ 219:
/***/ ((module) => {

"use strict";
module.exports = {"currentVersion":9};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _QOL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _QOL_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_QOL_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_util_js__WEBPACK_IMPORTED_MODULE_1__);



const url = new URL(window.location.href);
const path = url.pathname;
const id = url.searchParams.get("id");

const keySystemId = path.split("/")[2];

const platoboostApiRoutes = {
    init: () => (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(`/v1/authenticators/${keySystemId}/${id}`, "GET"),
    checkpoint: token =>
        (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(`/v1/sessions/auth/${keySystemId}/${id}/${token}`, "PUT"),
    start: data =>
        (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(`/v1/sessions/auth/${keySystemId}/${id}`, "POST", data),
    challenge: data =>
        (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.platoboostApi)(
            `/v1/challenge/release/${keySystemId}/${id}`,
            "POST",
            data
        ),
};

let numCheckpoints;
if (path === "/a/2569") {
    numCheckpoints = 3;
} else if (path === "/a/8") {
    numCheckpoints = 1;
}

(async function () {
    let initData = await platoboostApiRoutes.init();
    if (initData.key) {
        setInterval(() => {
            (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.showMessage)(
                'Bypassed by <a href="https://discord.gg/keybypass">discord.gg/keybypass</a>'
            );
        }, 1000);
        return;
    }

    let response = await platoboostApiRoutes.start({
        captcha: await (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.getCapthaSolution)("turnstile"),
        type: "Turnstile",
    });

    if (response?.message == "please complete a security check.") {
        turnstile.remove();
        await platoboostApiRoutes.challenge({
            captcha: await (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.getCapthaSolution)("hcaptcha"),
            type: "hCaptcha",
        });
        window.location.reload();
        return;
    }
    
    document.getElementsByTagName("button")[0].remove();

    let bypassedUrl, token;

    for (let i = 1; i <= numCheckpoints; i++) {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.showMessage)(`Bypassed ${i} of ${numCheckpoints} checkpoints`);
        await (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.sleep)(5000);
        bypassedUrl = (0,_util_js__WEBPACK_IMPORTED_MODULE_1__.bypassAdLink)(response.redirect);
        token = new URL(bypassedUrl).searchParams.get("tk");
        response = await platoboostApiRoutes.checkpoint(token);
    }
    window.location.replace(response.redirect);
})();

})();

/******/ })()
;