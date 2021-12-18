(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-2da9a352.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-2da9a352.js ***!
  \**************************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setPageHidden; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");
/* harmony import */ var _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-90d954cd.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-90d954cd.js");




const iosTransitionAnimation = () => __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./chunk-8cdfc1ff.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-8cdfc1ff.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./chunk-f2d9e763.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-f2d9e763.js"));
function transition(opts) {
    return new Promise((resolve, reject) => {
        opts.queue.write(() => {
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
}
function beforeTransition(opts) {
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
}
async function runTransition(opts) {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts);
    return ani;
}
function afterTransition(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
}
async function getAnimationBuilder(opts) {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const builder = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return builder;
}
async function animation(animationBuilder, opts) {
    await waitForReady(opts, true);
    const trans = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./chunk-02fe90f4.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-02fe90f4.js")).then(mod => mod.create(animationBuilder, opts.baseEl, opts));
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (trans.hasCompleted) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: trans.hasCompleted,
        animation: trans
    };
}
async function noAnimation(opts) {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
}
async function waitForReady(opts, defaultDeep) {
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
}
async function notifyViewReady(viewIsReady, enteringEl) {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
}
function playTransition(trans, opts) {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => trans.onFinish(resolve));
    if (progressCallback) {
        trans.progressStart();
        progressCallback(trans);
    }
    else {
        trans.play();
    }
    return promise;
}
function fireWillEvents(enteringEl, leavingEl) {
    lifecycle(leavingEl, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(enteringEl, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
}
function fireDidEvents(enteringEl, leavingEl) {
    lifecycle(enteringEl, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    lifecycle(leavingEl, _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["d"]);
}
function lifecycle(el, eventName) {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
}
function shallowReady(el) {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
}
async function deepReady(el) {
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
}
function setPageHidden(el, hidden) {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
}
function setZIndex(enteringEl, leavingEl, direction) {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
}




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-2f96b3d2.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-2f96b3d2.js ***!
  \**************************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostContext; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


function hostContext(selector, el) {
    return el.closest(selector) !== null;
}
function createColorClasses(color) {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
}
function getClassList(classes) {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
}
function getClassMap(classes) {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
}
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
async function openURL(win, url, ev, direction) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = win.document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            await router.componentOnReady();
            return router.push(url, direction);
        }
    }
    return false;
}




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-6d7d2f8c.js ***!
  \**************************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return pointerCoord; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


function rIC(callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
}
function hasShadowDom(el) {
    return !!el.shadowRoot && !!el.attachShadow;
}
function findItemLabel(componentEl) {
    const itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
}
function renderHiddenInput(always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
}
function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
function assert(actual, reason) {
    if (!actual) {
        const message = 'ASSERT: ' + reason;
        console.error(message);
        debugger;
        throw new Error(message);
    }
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
function pointerCoord(ev) {
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
}
function isEndSide(win, side) {
    const isRTL = win.document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`);
    }
}
function debounceEvent(event, wait) {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
}
function debounce(func, wait = 0) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
}




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-80f33f24.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-80f33f24.js ***!
  \**************************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeDOMString; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
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
                const childElements = getElementChildren(element);
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        const documentFragmentChildren = getElementChildren(documentFragment);
        for (let childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
const sanitizeElement = (element) => {
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes[i];
        const attributeName = attribute.name;
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        const attributeValue = attribute.value;
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    const childElements = getElementChildren(element);
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
const getElementChildren = (element) => {
    return (element.children != null) ? element.children : element.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-81780b86.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-81780b86.js ***!
  \**************************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


function hapticSelection() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
}
function hapticSelectionStart() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
}
function hapticSelectionChanged() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
}
function hapticSelectionEnd() {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
}




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-90d954cd.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-90d954cd.js ***!
  \**************************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIFECYCLE_WILL_UNLOAD; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


const LIFECYCLE_WILL_ENTER = 'ionViewWillEnter';
const LIFECYCLE_DID_ENTER = 'ionViewDidEnter';
const LIFECYCLE_WILL_LEAVE = 'ionViewWillLeave';
const LIFECYCLE_DID_LEAVE = 'ionViewDidLeave';
const LIFECYCLE_WILL_UNLOAD = 'ionViewWillUnload';




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-99929188.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-99929188.js ***!
  \**************************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


async function attachComponent(delegate, container, component, cssClasses, componentProps) {
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
}
function detachComponent(delegate, element) {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
}




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-9a4a967d.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-9a4a967d.js ***!
  \**************************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return present; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getOverlay; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


let lastId = 0;
function createOverlay(element, opts) {
    const doc = element.ownerDocument;
    connectListeners(doc);
    Object.assign(element, opts);
    element.classList.add('overlay-hidden');
    const overlayIndex = lastId++;
    element.overlayIndex = overlayIndex;
    if (!element.hasAttribute('id')) {
        element.id = `ion-overlay-${overlayIndex}`;
    }
    getAppRoot(doc).appendChild(element);
    return element.componentOnReady();
}
function connectListeners(doc) {
    if (lastId === 0) {
        lastId = 1;
        doc.addEventListener('focusin', ev => {
            const lastOverlay = getOverlay(doc);
            if (lastOverlay && lastOverlay.backdropDismiss && !isDescendant(lastOverlay, ev.target)) {
                const firstInput = lastOverlay.querySelector('input,button');
                if (firstInput) {
                    firstInput.focus();
                }
            }
        });
        doc.addEventListener('ionBackButton', ev => {
            const lastOverlay = getOverlay(doc);
            if (lastOverlay && lastOverlay.backdropDismiss) {
                ev.detail.register(100, () => {
                    return lastOverlay.dismiss(undefined, BACKDROP);
                });
            }
        });
        doc.addEventListener('keyup', ev => {
            if (ev.key === 'Escape') {
                const lastOverlay = getOverlay(doc);
                if (lastOverlay && lastOverlay.backdropDismiss) {
                    lastOverlay.dismiss(undefined, BACKDROP);
                }
            }
        });
    }
}
function dismissOverlay(doc, data, role, overlayTag, id) {
    const overlay = getOverlay(doc, overlayTag, id);
    if (!overlay) {
        return Promise.reject('overlay does not exist');
    }
    return overlay.dismiss(data, role);
}
function getOverlays(doc, overlayTag) {
    const overlays = Array.from(getAppRoot(doc).children).filter(c => c.overlayIndex > 0);
    if (overlayTag === undefined) {
        return overlays;
    }
    overlayTag = overlayTag.toUpperCase();
    return overlays.filter(c => c.tagName === overlayTag);
}
function getOverlay(doc, overlayTag, id) {
    const overlays = getOverlays(doc, overlayTag);
    return (id === undefined)
        ? overlays[overlays.length - 1]
        : overlays.find(o => o.id === id);
}
async function present(overlay, name, iosEnterAnimation, mdEnterAnimation, opts) {
    if (overlay.presented) {
        return;
    }
    overlay.presented = true;
    overlay.willPresent.emit();
    const animationBuilder = (overlay.enterAnimation)
        ? overlay.enterAnimation
        : overlay.config.get(name, overlay.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
    const completed = await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    if (completed) {
        overlay.didPresent.emit();
    }
}
async function dismiss(overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) {
    if (!overlay.presented) {
        return false;
    }
    overlay.presented = false;
    try {
        overlay.willDismiss.emit({ data, role });
        const animationBuilder = (overlay.leaveAnimation)
            ? overlay.leaveAnimation
            : overlay.config.get(name, overlay.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        await overlayAnimation(overlay, animationBuilder, overlay.el, opts);
        overlay.didDismiss.emit({ data, role });
    }
    catch (err) {
        console.error(err);
    }
    overlay.el.remove();
    return true;
}
function getAppRoot(doc) {
    return doc.querySelector('ion-app') || doc.body;
}
async function overlayAnimation(overlay, animationBuilder, baseEl, opts) {
    if (overlay.animation) {
        overlay.animation.destroy();
        overlay.animation = undefined;
        return false;
    }
    baseEl.classList.remove('overlay-hidden');
    const aniRoot = baseEl.shadowRoot || overlay.el;
    const animation = overlay.animation = await __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./chunk-02fe90f4.js */ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-02fe90f4.js")).then(mod => mod.create(animationBuilder, aniRoot, opts));
    overlay.animation = animation;
    if (!overlay.animated || !overlay.config.getBoolean('animated', true)) {
        animation.duration(0);
    }
    if (overlay.keyboardClose) {
        animation.beforeAddWrite(() => {
            const activeElement = baseEl.ownerDocument.activeElement;
            if (activeElement && activeElement.matches('input, ion-input, ion-textarea')) {
                activeElement.blur();
            }
        });
    }
    await animation.playAsync();
    const hasCompleted = animation.hasCompleted;
    animation.destroy();
    overlay.animation = undefined;
    return hasCompleted;
}
function eventMethod(element, eventName) {
    let resolve;
    const promise = new Promise(r => resolve = r);
    onceEvent(element, eventName, (event) => {
        resolve(event.detail);
    });
    return promise;
}
function onceEvent(element, eventName, callback) {
    const handler = (ev) => {
        element.removeEventListener(eventName, handler);
        callback(ev);
    };
    element.addEventListener(eventName, handler);
}
function isCancel(role) {
    return role === 'cancel' || role === BACKDROP;
}
function isDescendant(parent, child) {
    while (child) {
        if (child === parent) {
            return true;
        }
        child = child.parentElement;
    }
    return false;
}
const BACKDROP = 'backdrop';




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es2017/build/chunk-f54563a4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es2017/build/chunk-f54563a4.js ***!
  \**************************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setupPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return testUserAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PLATFORMS_MAP; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es2017/ionic.core.js");


const getPlatforms = (win) => setupPlatforms(win);
const isPlatform = (win, platform) => getPlatforms(win).includes(platform);
const setupPlatforms = (win) => {
    win.Ionic = win.Ionic || {};
    let platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
    }
    return platforms;
};
const isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
const detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
const isIpad = (win) => testUserAgent(win, /iPad/i);
const isIphone = (win) => testUserAgent(win, /iPhone/i);
const isIOS = (win) => testUserAgent(win, /iPad|iPhone|iPod/i);
const isAndroid = (win) => testUserAgent(win, /android|sink/i);
const isAndroidTablet = (win) => {
    return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
};
const isTablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (isIpad(win) ||
        isAndroidTablet(win) ||
        ((smallest > 460 && smallest < 820) &&
            (largest > 780 && largest < 1400)));
};
const isMobile = (win) => matchMedia(win, '(any-pointer:coarse)');
const isDesktop = (win) => !isMobile(win);
const isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
const isCordova = (win) => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = (win) => {
    const capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
};
const isElectron = (win) => testUserAgent(win, /electron/);
const isPWA = (win) => win.matchMedia ? (win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone) : false;
const testUserAgent = (win, expr) => win.navigator && win.navigator.userAgent ? expr.test(win.navigator.userAgent) : false;
const matchMedia = (win, query) => win.matchMedia ? win.matchMedia(query).matches : false;
const PLATFORMS_MAP = {
    'ipad': isIpad,
    'iphone': isIphone,
    'ios': isIOS,
    'android': isAndroid,
    'phablet': isPhablet,
    'tablet': isTablet,
    'cordova': isCordova,
    'capacitor': isCapacitorNative,
    'electron': isElectron,
    'pwa': isPWA,
    'mobile': isMobile,
    'mobileweb': isMobileWeb,
    'desktop': isDesktop,
    'hybrid': isHybrid
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

module.exports = ".p-top-20 {\n  padding-top: 20px;\n}\n\n.div-chef {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding-top: 20px;\n  margin-bottom: 16px;\n}\n\n.div-chef .div-avatar .img-chef {\n  width: 98px;\n  height: 98px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 98px;\n}\n\n.div-chef .chef-name {\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  margin-top: 8px;\n}\n\n.div-chef .chef-office-avatar {\n  font-size: 14px;\n  color: #828282;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-split {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px 24px -16px;\n}\n\n.p-top-8 {\n  padding-top: 8px;\n}\n\n.m-bottom-16 {\n  margin-bottom: 16px;\n}\n\n.text-title {\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.13px;\n  font-weight: 600;\n}\n\n.sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.f-column {\n  flex-direction: column;\n}\n\n.text-desc {\n  font-size: 14px;\n  letter-spacing: -0.14px;\n  line-height: 21px;\n}\n\n.text-sub-desc {\n  font-size: 14px;\n  letter-spacing: -0.14px;\n  line-height: 21px;\n  color: #4f4f4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9vZGNoZWZpdGVtL2Zvb2RjaGVmaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RjaGVmaXRlbS9mb29kY2hlZml0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtLQUFBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDWjs7QURHUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0RaOztBREdRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDRFo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0RKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLHNCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9mb29kY2hlZml0ZW0vZm9vZGNoZWZpdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLXRvcC0yMHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5kaXYtY2hlZntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAgIC5kaXYtYXZhdGFye1xyXG4gICAgICAgIC5pbWctY2hlZntcclxuICAgICAgICAgICAgd2lkdGg6IDk4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOThweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgICAgIC5jaGVmLW5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVmLW9mZmljZS1hdmF0YXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICB9XHJcbn1cclxuLmRpdi1zcGxpdHtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1hcmdpbjogMTZweCAtMTZweCAyNHB4IC0xNnB4O1xyXG59XHJcbi5wLXRvcC04e1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4ubS1ib3R0b20tMTZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi50ZXh0LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnN1Yi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxufVxyXG4udGV4dC1yaWdodHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5mLWNvbHVtbntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnRleHQtZGVzY3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbn1cclxuLnRleHQtc3ViLWRlc2N7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgY29sb3I6ICM0ZjRmNGY7XHJcbn0iLCIucC10b3AtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmRpdi1jaGVmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5kaXYtY2hlZiAuZGl2LWF2YXRhciAuaW1nLWNoZWYge1xuICB3aWR0aDogOThweDtcbiAgaGVpZ2h0OiA5OHB4O1xuICBvYmplY3QtZml0OiBmaWxsO1xuICBib3JkZXItcmFkaXVzOiA5OHB4O1xufVxuLmRpdi1jaGVmIC5jaGVmLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmRpdi1jaGVmIC5jaGVmLW9mZmljZS1hdmF0YXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG59XG5cbi5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4IDI0cHggLTE2cHg7XG59XG5cbi5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLm0tYm90dG9tLTE2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mLWNvbHVtbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50ZXh0LWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cblxuLnRleHQtc3ViLWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59Il19 */"

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



/***/ }),

/***/ "./src/app/providers/CustomAnimations.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/CustomAnimations.ts ***!
  \***********************************************/
/*! exports provided: CustomAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAnimations", function() { return CustomAnimations; });
var CustomAnimations;
(function (CustomAnimations) {
    'use strict';
    function iosCustomEnterAnimation(AnimationC, baseEl, opts) {
        const baseAnimation = new AnimationC();
        const backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        const wrapperAnimation = new AnimationC();
        wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
        wrapperAnimation.beforeStyles({ 'opacity': 1 })
            .fromTo('translateY', '-50%', '0%');
        backdropAnimation.fromTo('opacity', 0.01, 0.4);
        return Promise.resolve(baseAnimation
            .addElement(baseEl)
            .easing('cubic-bezier(0.36,0.66,0.04,1)')
            .duration(400)
            .beforeAddClass('show-modal')
            .add(backdropAnimation)
            .add(wrapperAnimation));
    }
    CustomAnimations.iosCustomEnterAnimation = iosCustomEnterAnimation;
    function iosCustomLeaveAnimation(AnimationC, baseEl, opts) {
        const baseAnimation = new AnimationC();
        const backdropAnimation = new AnimationC();
        backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
        const wrapperAnimation = new AnimationC();
        const wrapperEl = baseEl.querySelector('.modal-wrapper');
        wrapperAnimation.addElement(wrapperEl);
        const wrapperElRect = wrapperEl.getBoundingClientRect();
        wrapperAnimation.beforeStyles({ 'opacity': 1 })
            .fromTo('translateY', '0%', '-50%');
        backdropAnimation.fromTo('opacity', 0.4, 0.0);
        return Promise.resolve(baseAnimation
            .addElement(baseEl)
            .easing('ease-out')
            .duration(250)
            .add(backdropAnimation)
            .add(wrapperAnimation));
    }
    CustomAnimations.iosCustomLeaveAnimation = iosCustomLeaveAnimation;
})(CustomAnimations || (CustomAnimations = {}));


/***/ })

}]);
//# sourceMappingURL=common.js.map