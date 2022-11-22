(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() */ 88).then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() */ 89).then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    let trans;
    try {
        const mod = await __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "./node_modules/@ionic/core/dist/esm/index-69c37885.js"));
        trans = await mod.create(animationBuilder, opts.baseEl, opts);
    }
    catch (err) {
        trans = animationBuilder(opts.baseEl, opts);
    }
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
};




/***/ }),

/***/ "./src/app/foodchefitem/foodchefitem.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/foodchefitem/foodchefitem.module.ts ***!
  \*****************************************************/
/*! exports provided: FoodChefItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodChefItemPageModule", function() { return FoodChefItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodchefitem_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodchefitem.page */ "./src/app/foodchefitem/foodchefitem.page.ts");






let FoodChefItemPageModule = class FoodChefItemPageModule {
};
FoodChefItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_foodchefitem_page__WEBPACK_IMPORTED_MODULE_5__["FoodChefItemPage"]],
        exports: [_foodchefitem_page__WEBPACK_IMPORTED_MODULE_5__["FoodChefItemPage"]]
    })
], FoodChefItemPageModule);



/***/ }),

/***/ "./src/app/foodchefitem/foodchefitem.page.html":
/*!*****************************************************!*\
  !*** ./src/app/foodchefitem/foodchefitem.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex f-column\" *ngIf=\"item\">\r\n    <div class=\"sub-title\" *ngIf=\"(item && item.categoryTypeId != -2) else itemcollection\">Thực đơn được thiết kế bởi</div>\r\n    <ng-template #itemcollection>\r\n        <div class=\"sub-title\">Món đỉnh tuần này</div>\r\n    </ng-template>\r\n    <div class=\"div-chef\">\r\n        <div class=\"div-avatar\">\r\n            <img class=\"img-chef\" [src]=\"item.avatar\" *ngIf=\"item.avatar else noavatar\">\r\n            <ng-template #noavatar><img class=\"img-chef no-img-background\" src=\"https://beta-olivia.ivivu.com/upload/avatar/avatar-default-white.png\"></ng-template>\r\n        </div>\r\n        <div class=\"chef-name\" *ngIf=\"(item && item.categoryTypeId != -2) else namecollection\">{{item.name}}</div>\r\n        <ng-template #namecollection>\r\n            <div class=\"chef-name\" [innerHTML]=\"item.name\"></div>\r\n        </ng-template>\r\n        <div class=\"chef-office-avatar\" *ngIf=\"item.forestaurant\">{{item.forestaurant.name}}</div>\r\n    </div>\r\n    <div class=\"text-desc\" *ngIf=\"item\">{{item.notes}}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/foodchefitem/foodchefitem.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/foodchefitem/foodchefitem.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-top-20 {\n  padding-top: 20px;\n}\n\n.div-chef {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding-top: 20px;\n  margin-bottom: 16px;\n}\n\n.div-chef .div-avatar .img-chef {\n  width: 98px;\n  height: 98px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 98px;\n}\n\n.div-chef .chef-name {\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  margin-top: 8px;\n}\n\n.div-chef .chef-office-avatar {\n  font-size: 14px;\n  color: #828282;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-split {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px 24px -16px;\n}\n\n.p-top-8 {\n  padding-top: 8px;\n}\n\n.m-bottom-16 {\n  margin-bottom: 16px;\n}\n\n.text-title {\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.13px;\n  font-weight: 600;\n}\n\n.sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.f-column {\n  flex-direction: column;\n}\n\n.text-desc {\n  font-size: 14px;\n  letter-spacing: -0.14px;\n  line-height: 21px;\n}\n\n.text-sub-desc {\n  font-size: 14px;\n  letter-spacing: -0.14px;\n  line-height: 21px;\n  color: #4f4f4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kY2hlZml0ZW0vZm9vZGNoZWZpdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZGNoZWZpdGVtL2Zvb2RjaGVmaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NaOztBREdRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDRFo7O0FER1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNEWjs7QURJQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDREo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksc0JBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RjaGVmaXRlbS9mb29kY2hlZml0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtdG9wLTIwe1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmRpdi1jaGVme1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gICAgLmRpdi1hdmF0YXJ7XHJcbiAgICAgICAgLmltZy1jaGVme1xyXG4gICAgICAgICAgICB3aWR0aDogOThweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5OHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAgICAgLmNoZWYtbmFtZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWYtb2ZmaWNlLWF2YXRhcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgIH1cclxufVxyXG4uZGl2LXNwbGl0e1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWFyZ2luOiAxNnB4IC0xNnB4IDI0cHggLTE2cHg7XHJcbn1cclxuLnAtdG9wLTh7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5tLWJvdHRvbS0xNntcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLnRleHQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc3ViLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmYtY29sdW1ue1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4udGV4dC1kZXNje1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG4udGV4dC1zdWItZGVzY3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxufSIsIi5wLXRvcC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uZGl2LWNoZWYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmRpdi1jaGVmIC5kaXYtYXZhdGFyIC5pbWctY2hlZiB7XG4gIHdpZHRoOiA5OHB4O1xuICBoZWlnaHQ6IDk4cHg7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIGJvcmRlci1yYWRpdXM6IDk4cHg7XG59XG4uZGl2LWNoZWYgLmNoZWYtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZGl2LWNoZWYgLmNoZWYtb2ZmaWNlLWF2YXRhciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggLTE2cHggMjRweCAtMTZweDtcbn1cblxuLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ubS1ib3R0b20tMTYge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmYtY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRleHQtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4udGV4dC1zdWItZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBjb2xvcjogIzRmNGY0Zjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foodchefitem/foodchefitem.page.ts":
/*!***************************************************!*\
  !*** ./src/app/foodchefitem/foodchefitem.page.ts ***!
  \***************************************************/
/*! exports provided: FoodChefItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodChefItemPage", function() { return FoodChefItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");





let FoodChefItemPage = class FoodChefItemPage {
    constructor(navCtrl, gf, foodService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.foodService = foodService;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FoodChefItemPage.prototype, "item", void 0);
FoodChefItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foodchefitem',
        template: __webpack_require__(/*! ./foodchefitem.page.html */ "./src/app/foodchefitem/foodchefitem.page.html"),
        styles: [__webpack_require__(/*! ./foodchefitem.page.scss */ "./src/app/foodchefitem/foodchefitem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_4__["foodService"]])
], FoodChefItemPage);



/***/ })

}]);
//# sourceMappingURL=common.js.map