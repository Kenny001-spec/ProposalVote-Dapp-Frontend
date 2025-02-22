import {
  AdapterBlueprint,
  ConstantsUtil as ConstantsUtil2,
  PresetsUtil,
  ProviderUtil,
  WcConstantsUtil,
  WcHelpersUtil,
  require_events
} from "./chunk-CKMTTUFJ.js";
import "./chunk-QQNE7WTD.js";
import "./chunk-75KXWIUS.js";
import {
  require_inherits_browser
} from "./chunk-ZH7V6PZP.js";
import {
  ConstantsUtil,
  isReownName,
  require_buffer
} from "./chunk-UFCBRU52.js";
import "./chunk-IAIWU4J6.js";
import "./chunk-DSWFES7F.js";
import "./chunk-ZQE76UJS.js";
import "./chunk-ZTBOFYUR.js";
import "./chunk-OJK6TXMW.js";
import {
  BrowserProvider,
  Contract,
  InfuraProvider,
  JsonRpcProvider,
  JsonRpcSigner,
  formatEther,
  formatUnits,
  hexlify,
  isHexString,
  parseUnits,
  toUtf8Bytes
} from "./chunk-4KVYDUTV.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/@coinbase/wallet-sdk/dist/assets/wallet-logo.js
var require_wallet_logo = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/assets/wallet-logo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.walletLogo = void 0;
    var walletLogo = (type, width) => {
      let height;
      switch (type) {
        case "standard":
          height = width;
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
        case "circle":
          height = width;
          return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
        case "text":
          height = (0.1 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogo":
          height = (0.25 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        case "textLight":
          height = (0.1 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
        case "textWithLogoLight":
          height = (0.25 * width).toFixed(2);
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
        default:
          height = width;
          return `data:image/svg+xml,%3Csvg width='${width}' height='${height}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
      }
    };
    exports.walletLogo = walletLogo;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i3 = 0, l3 = handlers.length, ee = new Array(l3); i3 < l3; i3++) {
        ee[i3] = handlers[i3].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a22, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i3;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a22), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a22, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a22, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a22, a3, a4, a5), true;
        }
        for (i3 = 1, args = new Array(len - 1); i3 < len; i3++) {
          args[i3 - 1] = arguments[i3];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j3;
        for (i3 = 0; i3 < length; i3++) {
          if (listeners[i3].once) this.removeListener(event, listeners[i3].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i3].fn.call(listeners[i3].context);
              break;
            case 2:
              listeners[i3].fn.call(listeners[i3].context, a1);
              break;
            case 3:
              listeners[i3].fn.call(listeners[i3].context, a1, a22);
              break;
            case 4:
              listeners[i3].fn.call(listeners[i3].context, a1, a22, a3);
              break;
            default:
              if (!args) for (j3 = 1, args = new Array(len - 1); j3 < len; j3++) {
                args[j3 - 1] = arguments[j3];
              }
              listeners[i3].fn.apply(listeners[i3].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i3 = 0, events = [], length = listeners.length; i3 < length; i3++) {
          if (listeners[i3].fn !== fn || once && !listeners[i3].once || context && listeners[i3].context !== context) {
            events.push(listeners[i3]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter;
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/constants.js
var require_constants = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorValues = exports.standardErrorCodes = void 0;
    exports.standardErrorCodes = {
      rpc: {
        invalidInput: -32e3,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
      },
      provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901,
        unsupportedChain: 4902
      }
    };
    exports.errorValues = {
      "-32700": {
        standard: "JSON RPC 2.0",
        message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
      },
      "-32600": {
        standard: "JSON RPC 2.0",
        message: "The JSON sent is not a valid Request object."
      },
      "-32601": {
        standard: "JSON RPC 2.0",
        message: "The method does not exist / is not available."
      },
      "-32602": {
        standard: "JSON RPC 2.0",
        message: "Invalid method parameter(s)."
      },
      "-32603": {
        standard: "JSON RPC 2.0",
        message: "Internal JSON-RPC error."
      },
      "-32000": {
        standard: "EIP-1474",
        message: "Invalid input."
      },
      "-32001": {
        standard: "EIP-1474",
        message: "Resource not found."
      },
      "-32002": {
        standard: "EIP-1474",
        message: "Resource unavailable."
      },
      "-32003": {
        standard: "EIP-1474",
        message: "Transaction rejected."
      },
      "-32004": {
        standard: "EIP-1474",
        message: "Method not supported."
      },
      "-32005": {
        standard: "EIP-1474",
        message: "Request limit exceeded."
      },
      "4001": {
        standard: "EIP-1193",
        message: "User rejected the request."
      },
      "4100": {
        standard: "EIP-1193",
        message: "The requested account and/or method has not been authorized by the user."
      },
      "4200": {
        standard: "EIP-1193",
        message: "The requested method is not supported by this Ethereum provider."
      },
      "4900": {
        standard: "EIP-1193",
        message: "The provider is disconnected from all chains."
      },
      "4901": {
        standard: "EIP-1193",
        message: "The provider is disconnected from the specified chain."
      },
      "4902": {
        standard: "EIP-3085",
        message: "Unrecognized chain ID."
      }
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/utils.js
var require_utils = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serialize = exports.getErrorCode = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
    var constants_1 = require_constants();
    var FALLBACK_MESSAGE = "Unspecified error message.";
    exports.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
    function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
      if (code && Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(constants_1.errorValues, codeString)) {
          return constants_1.errorValues[codeString].message;
        }
        if (isJsonRpcServerError(code)) {
          return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
      }
      return fallbackMessage;
    }
    exports.getMessageFromCode = getMessageFromCode;
    function isValidCode(code) {
      if (!Number.isInteger(code)) {
        return false;
      }
      const codeString = code.toString();
      if (constants_1.errorValues[codeString]) {
        return true;
      }
      if (isJsonRpcServerError(code)) {
        return true;
      }
      return false;
    }
    exports.isValidCode = isValidCode;
    function getErrorCode(error) {
      var _a;
      if (typeof error === "number") {
        return error;
      } else if (isErrorWithCode(error)) {
        return (_a = error.code) !== null && _a !== void 0 ? _a : error.errorCode;
      }
      return void 0;
    }
    exports.getErrorCode = getErrorCode;
    function isErrorWithCode(error) {
      return typeof error === "object" && error !== null && (typeof error.code === "number" || typeof error.errorCode === "number");
    }
    function serialize(error, { shouldIncludeStack = false } = {}) {
      const serialized = {};
      if (error && typeof error === "object" && !Array.isArray(error) && hasKey(error, "code") && isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === "string") {
          serialized.message = _error.message;
          if (hasKey(_error, "data")) {
            serialized.data = _error.data;
          }
        } else {
          serialized.message = getMessageFromCode(serialized.code);
          serialized.data = { originalError: assignOriginalError(error) };
        }
      } else {
        serialized.code = constants_1.standardErrorCodes.rpc.internal;
        serialized.message = hasStringProperty(error, "message") ? error.message : FALLBACK_MESSAGE;
        serialized.data = { originalError: assignOriginalError(error) };
      }
      if (shouldIncludeStack) {
        serialized.stack = hasStringProperty(error, "stack") ? error.stack : void 0;
      }
      return serialized;
    }
    exports.serialize = serialize;
    function isJsonRpcServerError(code) {
      return code >= -32099 && code <= -32e3;
    }
    function assignOriginalError(error) {
      if (error && typeof error === "object" && !Array.isArray(error)) {
        return Object.assign({}, error);
      }
      return error;
    }
    function hasKey(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    function hasStringProperty(obj, prop) {
      return typeof obj === "object" && obj !== null && prop in obj && typeof obj[prop] === "string";
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/errors.js
var require_errors = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.standardErrors = void 0;
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    exports.standardErrors = {
      rpc: {
        parse: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.parse, arg),
        invalidRequest: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidRequest, arg),
        invalidParams: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidParams, arg),
        methodNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotFound, arg),
        internal: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.internal, arg),
        server: (opts) => {
          if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
            throw new Error("Ethereum RPC Server errors must provide single object argument.");
          }
          const { code } = opts;
          if (!Number.isInteger(code) || code > -32005 || code < -32099) {
            throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
          }
          return getEthJsonRpcError(code, opts);
        },
        invalidInput: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.invalidInput, arg),
        resourceNotFound: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceNotFound, arg),
        resourceUnavailable: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.resourceUnavailable, arg),
        transactionRejected: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.transactionRejected, arg),
        methodNotSupported: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.methodNotSupported, arg),
        limitExceeded: (arg) => getEthJsonRpcError(constants_1.standardErrorCodes.rpc.limitExceeded, arg)
      },
      provider: {
        userRejectedRequest: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.userRejectedRequest, arg);
        },
        unauthorized: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.unauthorized, arg);
        },
        unsupportedMethod: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedMethod, arg);
        },
        disconnected: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.disconnected, arg);
        },
        chainDisconnected: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.chainDisconnected, arg);
        },
        unsupportedChain: (arg) => {
          return getEthProviderError(constants_1.standardErrorCodes.provider.unsupportedChain, arg);
        },
        custom: (opts) => {
          if (!opts || typeof opts !== "object" || Array.isArray(opts)) {
            throw new Error("Ethereum Provider custom errors must provide single object argument.");
          }
          const { code, message, data } = opts;
          if (!message || typeof message !== "string") {
            throw new Error('"message" must be a nonempty string');
          }
          return new EthereumProviderError(code, message, data);
        }
      }
    };
    function getEthJsonRpcError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new EthereumRpcError(code, message || (0, utils_1.getMessageFromCode)(code), data);
    }
    function getEthProviderError(code, arg) {
      const [message, data] = parseOpts(arg);
      return new EthereumProviderError(code, message || (0, utils_1.getMessageFromCode)(code), data);
    }
    function parseOpts(arg) {
      if (arg) {
        if (typeof arg === "string") {
          return [arg];
        } else if (typeof arg === "object" && !Array.isArray(arg)) {
          const { message, data } = arg;
          if (message && typeof message !== "string") {
            throw new Error("Must specify string message.");
          }
          return [message || void 0, data];
        }
      }
      return [];
    }
    var EthereumRpcError = class extends Error {
      constructor(code, message, data) {
        if (!Number.isInteger(code)) {
          throw new Error('"code" must be an integer.');
        }
        if (!message || typeof message !== "string") {
          throw new Error('"message" must be a nonempty string.');
        }
        super(message);
        this.code = code;
        if (data !== void 0) {
          this.data = data;
        }
      }
    };
    var EthereumProviderError = class extends EthereumRpcError {
      /**
       * Create an Ethereum Provider JSON-RPC error.
       * `code` must be an integer in the 1000 <= 4999 range.
       */
      constructor(code, message, data) {
        if (!isValidEthProviderCode(code)) {
          throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        }
        super(code, message, data);
      }
    };
    function isValidEthProviderCode(code) {
      return Number.isInteger(code) && code >= 1e3 && code <= 4999;
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/index.js
var require_error = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.standardErrors = exports.standardErrorCodes = void 0;
    var constants_1 = require_constants();
    Object.defineProperty(exports, "standardErrorCodes", { enumerable: true, get: function() {
      return constants_1.standardErrorCodes;
    } });
    var errors_1 = require_errors();
    Object.defineProperty(exports, "standardErrors", { enumerable: true, get: function() {
      return errors_1.standardErrors;
    } });
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/Web3Response.js
var require_Web3Response = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/Web3Response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isErrorResponse = void 0;
    function isErrorResponse(response) {
      return response.errorMessage !== void 0;
    }
    exports.isErrorResponse = isErrorResponse;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/version.js
var require_version = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LIB_VERSION = void 0;
    exports.LIB_VERSION = "4.0.3";
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/error/serialize.js
var require_serialize = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/error/serialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serializeError = void 0;
    var Web3Response_1 = require_Web3Response();
    var version_1 = require_version();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    function serializeError(error, requestOrMethod) {
      const serialized = (0, utils_1.serialize)(getErrorObject(error), {
        shouldIncludeStack: true
      });
      const docUrl = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
      docUrl.searchParams.set("version", version_1.LIB_VERSION);
      docUrl.searchParams.set("code", serialized.code.toString());
      const method = getMethod(serialized.data, requestOrMethod);
      if (method) {
        docUrl.searchParams.set("method", method);
      }
      docUrl.searchParams.set("message", serialized.message);
      return Object.assign(Object.assign({}, serialized), { docUrl: docUrl.href });
    }
    exports.serializeError = serializeError;
    function getErrorObject(error) {
      if (typeof error === "string") {
        return {
          message: error,
          code: constants_1.standardErrorCodes.rpc.internal
        };
      } else if ((0, Web3Response_1.isErrorResponse)(error)) {
        return Object.assign(Object.assign({}, error), { message: error.errorMessage, code: error.errorCode, data: { method: error.method } });
      }
      return error;
    }
    function getMethod(serializedData, request) {
      const methodInData = serializedData === null || serializedData === void 0 ? void 0 : serializedData.method;
      if (methodInData) {
        return methodInData;
      }
      if (request === void 0) {
        return void 0;
      } else if (typeof request === "string") {
        return request;
      } else if (!Array.isArray(request)) {
        return request.method;
      } else if (request.length > 0) {
        return request[0].method;
      }
      return void 0;
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/type/index.js
var require_type = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/type/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RegExpString = exports.IntNumber = exports.BigIntString = exports.AddressString = exports.HexString = exports.OpaqueType = void 0;
    function OpaqueType() {
      return (value) => value;
    }
    exports.OpaqueType = OpaqueType;
    exports.HexString = OpaqueType();
    exports.AddressString = OpaqueType();
    exports.BigIntString = OpaqueType();
    function IntNumber(num) {
      return Math.floor(num);
    }
    exports.IntNumber = IntNumber;
    exports.RegExpString = OpaqueType();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/type/util.js
var require_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/type/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.areAddressArraysEqual = exports.getFavicon = exports.range = exports.isBigNumber = exports.ensureParsedJSONObject = exports.ensureBigInt = exports.ensureRegExpString = exports.ensureIntNumber = exports.ensureBuffer = exports.ensureAddressString = exports.ensureEvenLengthHexString = exports.ensureHexString = exports.isHexString = exports.prepend0x = exports.strip0x = exports.has0xPrefix = exports.hexStringFromIntNumber = exports.intNumberFromHexString = exports.bigIntStringFromBigInt = exports.hexStringFromBuffer = exports.hexStringToUint8Array = exports.uint8ArrayToHex = exports.randomBytesHex = void 0;
    var error_1 = require_error();
    var _1 = require_type();
    var INT_STRING_REGEX = /^[0-9]*$/;
    var HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
    function randomBytesHex(length) {
      return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
    }
    exports.randomBytesHex = randomBytesHex;
    function uint8ArrayToHex(value) {
      return [...value].map((b3) => b3.toString(16).padStart(2, "0")).join("");
    }
    exports.uint8ArrayToHex = uint8ArrayToHex;
    function hexStringToUint8Array(hexString) {
      return new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
    }
    exports.hexStringToUint8Array = hexStringToUint8Array;
    function hexStringFromBuffer(buf, includePrefix = false) {
      const hex = buf.toString("hex");
      return (0, _1.HexString)(includePrefix ? `0x${hex}` : hex);
    }
    exports.hexStringFromBuffer = hexStringFromBuffer;
    function bigIntStringFromBigInt(bi) {
      return (0, _1.BigIntString)(bi.toString(10));
    }
    exports.bigIntStringFromBigInt = bigIntStringFromBigInt;
    function intNumberFromHexString(hex) {
      return (0, _1.IntNumber)(Number(BigInt(ensureEvenLengthHexString(hex, true))));
    }
    exports.intNumberFromHexString = intNumberFromHexString;
    function hexStringFromIntNumber(num) {
      return (0, _1.HexString)(`0x${BigInt(num).toString(16)}`);
    }
    exports.hexStringFromIntNumber = hexStringFromIntNumber;
    function has0xPrefix(str) {
      return str.startsWith("0x") || str.startsWith("0X");
    }
    exports.has0xPrefix = has0xPrefix;
    function strip0x(hex) {
      if (has0xPrefix(hex)) {
        return hex.slice(2);
      }
      return hex;
    }
    exports.strip0x = strip0x;
    function prepend0x(hex) {
      if (has0xPrefix(hex)) {
        return `0x${hex.slice(2)}`;
      }
      return `0x${hex}`;
    }
    exports.prepend0x = prepend0x;
    function isHexString2(hex) {
      if (typeof hex !== "string") {
        return false;
      }
      const s3 = strip0x(hex).toLowerCase();
      return HEXADECIMAL_STRING_REGEX.test(s3);
    }
    exports.isHexString = isHexString2;
    function ensureHexString(hex, includePrefix = false) {
      if (typeof hex === "string") {
        const s3 = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s3)) {
          return (0, _1.HexString)(includePrefix ? `0x${s3}` : s3);
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`"${String(hex)}" is not a hexadecimal string`);
    }
    exports.ensureHexString = ensureHexString;
    function ensureEvenLengthHexString(hex, includePrefix = false) {
      let h3 = ensureHexString(hex, false);
      if (h3.length % 2 === 1) {
        h3 = (0, _1.HexString)(`0${h3}`);
      }
      return includePrefix ? (0, _1.HexString)(`0x${h3}`) : h3;
    }
    exports.ensureEvenLengthHexString = ensureEvenLengthHexString;
    function ensureAddressString(str) {
      if (typeof str === "string") {
        const s3 = strip0x(str).toLowerCase();
        if (isHexString2(s3) && s3.length === 40) {
          return (0, _1.AddressString)(prepend0x(s3));
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(str)}`);
    }
    exports.ensureAddressString = ensureAddressString;
    function ensureBuffer(str) {
      if (Buffer.isBuffer(str)) {
        return str;
      }
      if (typeof str === "string") {
        if (isHexString2(str)) {
          const s3 = ensureEvenLengthHexString(str, false);
          return Buffer.from(s3, "hex");
        }
        return Buffer.from(str, "utf8");
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not binary data: ${String(str)}`);
    }
    exports.ensureBuffer = ensureBuffer;
    function ensureIntNumber(num) {
      if (typeof num === "number" && Number.isInteger(num)) {
        return (0, _1.IntNumber)(num);
      }
      if (typeof num === "string") {
        if (INT_STRING_REGEX.test(num)) {
          return (0, _1.IntNumber)(Number(num));
        }
        if (isHexString2(num)) {
          return (0, _1.IntNumber)(Number(BigInt(ensureEvenLengthHexString(num, true))));
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(num)}`);
    }
    exports.ensureIntNumber = ensureIntNumber;
    function ensureRegExpString(regExp) {
      if (regExp instanceof RegExp) {
        return (0, _1.RegExpString)(regExp.toString());
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(regExp)}`);
    }
    exports.ensureRegExpString = ensureRegExpString;
    function ensureBigInt(val) {
      if (val !== null && (typeof val === "bigint" || isBigNumber(val))) {
        return BigInt(val.toString(10));
      }
      if (typeof val === "number") {
        return BigInt(ensureIntNumber(val));
      }
      if (typeof val === "string") {
        if (INT_STRING_REGEX.test(val)) {
          return BigInt(val);
        }
        if (isHexString2(val)) {
          return BigInt(ensureEvenLengthHexString(val, true));
        }
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not an integer: ${String(val)}`);
    }
    exports.ensureBigInt = ensureBigInt;
    function ensureParsedJSONObject(val) {
      if (typeof val === "string") {
        return JSON.parse(val);
      }
      if (typeof val === "object") {
        return val;
      }
      throw error_1.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(val)}`);
    }
    exports.ensureParsedJSONObject = ensureParsedJSONObject;
    function isBigNumber(val) {
      if (val == null || typeof val.constructor !== "function") {
        return false;
      }
      const { constructor } = val;
      return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
    }
    exports.isBigNumber = isBigNumber;
    function range(start, stop) {
      return Array.from({ length: stop - start }, (_3, i3) => start + i3);
    }
    exports.range = range;
    function getFavicon() {
      const el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
      const { protocol, host } = document.location;
      const href = el ? el.getAttribute("href") : null;
      if (!href || href.startsWith("javascript:") || href.startsWith("vbscript:")) {
        return null;
      }
      if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) {
        return href;
      }
      if (href.startsWith("//")) {
        return protocol + href;
      }
      return `${protocol}//${host}${href}`;
    }
    exports.getFavicon = getFavicon;
    function areAddressArraysEqual(arr1, arr2) {
      return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }
    exports.areAddressArraysEqual = areAddressArraysEqual;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/util/cipher.js
var require_cipher = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/util/cipher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decryptContent = exports.encryptContent = exports.importKeyFromHexString = exports.exportKeyToHexString = exports.decrypt = exports.encrypt = exports.deriveSharedSecret = exports.generateKeyPair = void 0;
    var util_1 = require_util();
    async function generateKeyPair() {
      return crypto.subtle.generateKey({
        name: "ECDH",
        namedCurve: "P-256"
      }, true, ["deriveKey"]);
    }
    exports.generateKeyPair = generateKeyPair;
    async function deriveSharedSecret(ownPrivateKey, peerPublicKey) {
      return crypto.subtle.deriveKey({
        name: "ECDH",
        public: peerPublicKey
      }, ownPrivateKey, {
        name: "AES-GCM",
        length: 256
      }, false, ["encrypt", "decrypt"]);
    }
    exports.deriveSharedSecret = deriveSharedSecret;
    async function encrypt(sharedSecret, plainText) {
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const cipherText = await crypto.subtle.encrypt({
        name: "AES-GCM",
        iv
      }, sharedSecret, new TextEncoder().encode(plainText));
      return { iv, cipherText };
    }
    exports.encrypt = encrypt;
    async function decrypt(sharedSecret, { iv, cipherText }) {
      const plainText = await crypto.subtle.decrypt({
        name: "AES-GCM",
        iv
      }, sharedSecret, cipherText);
      return new TextDecoder().decode(plainText);
    }
    exports.decrypt = decrypt;
    function getFormat(keyType) {
      switch (keyType) {
        case "public":
          return "spki";
        case "private":
          return "pkcs8";
      }
    }
    async function exportKeyToHexString(type, key) {
      const format = getFormat(type);
      const exported = await crypto.subtle.exportKey(format, key);
      return (0, util_1.uint8ArrayToHex)(new Uint8Array(exported));
    }
    exports.exportKeyToHexString = exportKeyToHexString;
    async function importKeyFromHexString(type, hexString) {
      const format = getFormat(type);
      const arrayBuffer = (0, util_1.hexStringToUint8Array)(hexString).buffer;
      return await crypto.subtle.importKey(format, arrayBuffer, {
        name: "ECDH",
        namedCurve: "P-256"
      }, true, type === "private" ? ["deriveKey"] : []);
    }
    exports.importKeyFromHexString = importKeyFromHexString;
    async function encryptContent(content, sharedSecret) {
      const serialized = JSON.stringify(content, (_3, value) => {
        if (!(value instanceof Error))
          return value;
        const error = value;
        return Object.assign(Object.assign({}, error.code ? { code: error.code } : {}), { message: error.message });
      });
      return encrypt(sharedSecret, serialized);
    }
    exports.encryptContent = encryptContent;
    async function decryptContent(encryptedData, sharedSecret) {
      return JSON.parse(await decrypt(sharedSecret, encryptedData));
    }
    exports.decryptContent = decryptContent;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/util/ScopedLocalStorage.js
var require_ScopedLocalStorage = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/util/ScopedLocalStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopedLocalStorage = void 0;
    var ScopedLocalStorage = class _ScopedLocalStorage {
      constructor(scope, module2) {
        this.scope = scope;
        this.module = module2;
      }
      setItem(key, value) {
        localStorage.setItem(this.scopedKey(key), value);
      }
      getItem(key) {
        return localStorage.getItem(this.scopedKey(key));
      }
      removeItem(key) {
        localStorage.removeItem(this.scopedKey(key));
      }
      clear() {
        const prefix = this.scopedKey("");
        const keysToRemove = [];
        for (let i3 = 0; i3 < localStorage.length; i3++) {
          const key = localStorage.key(i3);
          if (typeof key === "string" && key.startsWith(prefix)) {
            keysToRemove.push(key);
          }
        }
        keysToRemove.forEach((key) => localStorage.removeItem(key));
      }
      scopedKey(key) {
        return `-${this.scope}${this.module ? `:${this.module}` : ""}:${key}`;
      }
      static clearAll() {
        new _ScopedLocalStorage("CBWSDK").clear();
        new _ScopedLocalStorage("walletlink").clear();
      }
    };
    exports.ScopedLocalStorage = ScopedLocalStorage;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWKeyManager.js
var require_SCWKeyManager = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWKeyManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCWKeyManager = void 0;
    var cipher_1 = require_cipher();
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var OWN_PRIVATE_KEY = {
      storageKey: "ownPrivateKey",
      keyType: "private"
    };
    var OWN_PUBLIC_KEY = {
      storageKey: "ownPublicKey",
      keyType: "public"
    };
    var PEER_PUBLIC_KEY = {
      storageKey: "peerPublicKey",
      keyType: "public"
    };
    var SCWKeyManager = class {
      constructor() {
        this.storage = new ScopedLocalStorage_1.ScopedLocalStorage("CBWSDK", "SCWKeyManager");
        this.ownPrivateKey = null;
        this.ownPublicKey = null;
        this.peerPublicKey = null;
        this.sharedSecret = null;
      }
      async getOwnPublicKey() {
        await this.loadKeysIfNeeded();
        return this.ownPublicKey;
      }
      // returns null if the shared secret is not yet derived
      async getSharedSecret() {
        await this.loadKeysIfNeeded();
        return this.sharedSecret;
      }
      async setPeerPublicKey(key) {
        this.sharedSecret = null;
        this.peerPublicKey = key;
        await this.storeKey(PEER_PUBLIC_KEY, key);
        await this.loadKeysIfNeeded();
      }
      async clear() {
        this.ownPrivateKey = null;
        this.ownPublicKey = null;
        this.peerPublicKey = null;
        this.sharedSecret = null;
        this.storage.removeItem(OWN_PUBLIC_KEY.storageKey);
        this.storage.removeItem(OWN_PRIVATE_KEY.storageKey);
        this.storage.removeItem(PEER_PUBLIC_KEY.storageKey);
      }
      async generateKeyPair() {
        const newKeyPair = await (0, cipher_1.generateKeyPair)();
        this.ownPrivateKey = newKeyPair.privateKey;
        this.ownPublicKey = newKeyPair.publicKey;
        await this.storeKey(OWN_PRIVATE_KEY, newKeyPair.privateKey);
        await this.storeKey(OWN_PUBLIC_KEY, newKeyPair.publicKey);
      }
      async loadKeysIfNeeded() {
        if (this.ownPrivateKey === null) {
          this.ownPrivateKey = await this.loadKey(OWN_PRIVATE_KEY);
        }
        if (this.ownPublicKey === null) {
          this.ownPublicKey = await this.loadKey(OWN_PUBLIC_KEY);
        }
        if (this.ownPrivateKey === null || this.ownPublicKey === null) {
          await this.generateKeyPair();
        }
        if (this.peerPublicKey === null) {
          this.peerPublicKey = await this.loadKey(PEER_PUBLIC_KEY);
        }
        if (this.sharedSecret === null) {
          if (this.ownPrivateKey === null || this.peerPublicKey === null)
            return;
          this.sharedSecret = await (0, cipher_1.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey);
        }
      }
      // storage methods
      async loadKey(item) {
        const key = this.storage.getItem(item.storageKey);
        if (!key)
          return null;
        return (0, cipher_1.importKeyFromHexString)(item.keyType, key);
      }
      async storeKey(item, key) {
        const hexString = await (0, cipher_1.exportKeyToHexString)(item.keyType, key);
        this.storage.setItem(item.storageKey, hexString);
      }
    };
    exports.SCWKeyManager = SCWKeyManager;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWStateManager.js
var require_SCWStateManager = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWStateManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCWStateManager = void 0;
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var ACCOUNTS_KEY = "accounts";
    var ACTIVE_CHAIN_STORAGE_KEY = "activeChain";
    var AVAILABLE_CHAINS_STORAGE_KEY = "availableChains";
    var WALLET_CAPABILITIES_STORAGE_KEY = "walletCapabilities";
    var SCWStateManager = class {
      get accounts() {
        return this._accounts;
      }
      get activeChain() {
        return this._activeChain;
      }
      get walletCapabilities() {
        return this._walletCapabilities;
      }
      constructor(params) {
        var _a, _b;
        this.storage = new ScopedLocalStorage_1.ScopedLocalStorage("CBWSDK", "SCWStateManager");
        this.updateListener = params.updateListener;
        this.availableChains = this.loadItemFromStorage(AVAILABLE_CHAINS_STORAGE_KEY);
        this._walletCapabilities = this.loadItemFromStorage(WALLET_CAPABILITIES_STORAGE_KEY);
        const accounts = this.loadItemFromStorage(ACCOUNTS_KEY);
        const chain = this.loadItemFromStorage(ACTIVE_CHAIN_STORAGE_KEY);
        if (accounts) {
          this.updateListener.onAccountsUpdate({
            accounts,
            source: "storage"
          });
        }
        if (chain) {
          this.updateListener.onChainUpdate({
            chain,
            source: "storage"
          });
        }
        this._accounts = accounts || [];
        this._activeChain = chain || { id: (_b = (_a = params.appChainIds) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : 1 };
      }
      updateAccounts(accounts) {
        this._accounts = accounts;
        this.storeItemToStorage(ACCOUNTS_KEY, accounts);
        this.updateListener.onAccountsUpdate({
          accounts,
          source: "wallet"
        });
      }
      switchChain(chainId) {
        var _a;
        const chain = (_a = this.availableChains) === null || _a === void 0 ? void 0 : _a.find((chain2) => chain2.id === chainId);
        if (!chain)
          return false;
        if (chain === this._activeChain)
          return true;
        this._activeChain = chain;
        this.storeItemToStorage(ACTIVE_CHAIN_STORAGE_KEY, chain);
        this.updateListener.onChainUpdate({
          chain,
          source: "wallet"
        });
        return true;
      }
      updateAvailableChains(rawChains) {
        if (!rawChains || Object.keys(rawChains).length === 0)
          return;
        const chains = Object.entries(rawChains).map(([id, rpcUrl]) => ({ id: Number(id), rpcUrl }));
        this.availableChains = chains;
        this.storeItemToStorage(AVAILABLE_CHAINS_STORAGE_KEY, chains);
        this.switchChain(this._activeChain.id);
      }
      updateWalletCapabilities(capabilities) {
        this._walletCapabilities = capabilities;
        this.storeItemToStorage(WALLET_CAPABILITIES_STORAGE_KEY, capabilities);
      }
      storeItemToStorage(key, item) {
        this.storage.setItem(key, JSON.stringify(item));
      }
      loadItemFromStorage(key) {
        const item = this.storage.getItem(key);
        return item ? JSON.parse(item) : void 0;
      }
      clear() {
        this.storage.clear();
      }
    };
    exports.SCWStateManager = SCWStateManager;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWSigner.js
var require_SCWSigner = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/scw/SCWSigner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SCWSigner = void 0;
    var SCWKeyManager_1 = require_SCWKeyManager();
    var SCWStateManager_1 = require_SCWStateManager();
    var error_1 = require_error();
    var util_1 = require_util();
    var cipher_1 = require_cipher();
    var SCWSigner = class {
      constructor(params) {
        this.metadata = params.metadata;
        this.communicator = params.communicator;
        this.keyManager = new SCWKeyManager_1.SCWKeyManager();
        this.stateManager = new SCWStateManager_1.SCWStateManager({
          appChainIds: this.metadata.appChainIds,
          updateListener: params.updateListener
        });
        this.handshake = this.handshake.bind(this);
        this.request = this.request.bind(this);
        this.createRequestMessage = this.createRequestMessage.bind(this);
        this.decryptResponseMessage = this.decryptResponseMessage.bind(this);
      }
      async handshake() {
        const handshakeMessage = await this.createRequestMessage({
          handshake: {
            method: "eth_requestAccounts",
            params: this.metadata
          }
        });
        const response = await this.communicator.postRequestAndWaitForResponse(handshakeMessage);
        if ("failure" in response.content)
          throw response.content.failure;
        const peerPublicKey = await (0, cipher_1.importKeyFromHexString)("public", response.sender);
        await this.keyManager.setPeerPublicKey(peerPublicKey);
        const decrypted = await this.decryptResponseMessage(response);
        this.updateInternalState({ method: "eth_requestAccounts" }, decrypted);
        const result = decrypted.result;
        if ("error" in result)
          throw result.error;
        return this.stateManager.accounts;
      }
      async request(request) {
        const localResult = this.tryLocalHandling(request);
        if (localResult !== void 0) {
          if (localResult instanceof Error)
            throw localResult;
          return localResult;
        }
        await this.communicator.waitForPopupLoaded();
        const response = await this.sendEncryptedRequest(request);
        const decrypted = await this.decryptResponseMessage(response);
        this.updateInternalState(request, decrypted);
        const result = decrypted.result;
        if ("error" in result)
          throw result.error;
        return result.value;
      }
      async disconnect() {
        this.stateManager.clear();
        await this.keyManager.clear();
      }
      tryLocalHandling(request) {
        var _a;
        switch (request.method) {
          case "wallet_switchEthereumChain": {
            const params = request.params;
            if (!params || !((_a = params[0]) === null || _a === void 0 ? void 0 : _a.chainId)) {
              throw error_1.standardErrors.rpc.invalidParams();
            }
            const chainId = (0, util_1.ensureIntNumber)(params[0].chainId);
            const switched = this.stateManager.switchChain(chainId);
            return switched ? null : void 0;
          }
          case "wallet_getCapabilities": {
            const walletCapabilities = this.stateManager.walletCapabilities;
            if (!walletCapabilities) {
              throw error_1.standardErrors.provider.unauthorized("No wallet capabilities found, please disconnect and reconnect");
            }
            return walletCapabilities;
          }
          default:
            return void 0;
        }
      }
      async sendEncryptedRequest(request) {
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
          throw error_1.standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
        }
        const encrypted = await (0, cipher_1.encryptContent)({
          action: request,
          chainId: this.stateManager.activeChain.id
        }, sharedSecret);
        const message = await this.createRequestMessage({ encrypted });
        return this.communicator.postRequestAndWaitForResponse(message);
      }
      async createRequestMessage(content) {
        const publicKey = await (0, cipher_1.exportKeyToHexString)("public", await this.keyManager.getOwnPublicKey());
        return {
          id: crypto.randomUUID(),
          sender: publicKey,
          content,
          timestamp: /* @__PURE__ */ new Date()
        };
      }
      async decryptResponseMessage(message) {
        const content = message.content;
        if ("failure" in content) {
          throw content.failure;
        }
        const sharedSecret = await this.keyManager.getSharedSecret();
        if (!sharedSecret) {
          throw error_1.standardErrors.provider.unauthorized("Invalid session");
        }
        return (0, cipher_1.decryptContent)(content.encrypted, sharedSecret);
      }
      updateInternalState(request, response) {
        var _a, _b;
        const availableChains = (_a = response.data) === null || _a === void 0 ? void 0 : _a.chains;
        if (availableChains) {
          this.stateManager.updateAvailableChains(availableChains);
        }
        const walletCapabilities = (_b = response.data) === null || _b === void 0 ? void 0 : _b.capabilities;
        if (walletCapabilities) {
          this.stateManager.updateWalletCapabilities(walletCapabilities);
        }
        const result = response.result;
        if ("error" in result)
          return;
        switch (request.method) {
          case "eth_requestAccounts": {
            const accounts = result.value;
            this.stateManager.updateAccounts(accounts);
            break;
          }
          case "wallet_switchEthereumChain": {
            if (result.value !== null)
              return;
            const params = request.params;
            const chainId = (0, util_1.ensureIntNumber)(params[0].chainId);
            this.stateManager.switchChain(chainId);
            break;
          }
          default:
            break;
        }
      }
    };
    exports.SCWSigner = SCWSigner;
  }
});

// node_modules/readable-stream/lib/internal/streams/stream-browser.js
var require_stream_browser = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream-browser.js"(exports, module) {
    module.exports = require_events().EventEmitter;
  }
});

// browser-external:util
var require_util2 = __commonJS({
  "browser-external:util"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_3, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "util" has been externalized for browser compatibility. Cannot access "util.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = null != arguments[i3] ? arguments[i3] : {};
        i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i3 = 0; i3 < props.length; i3++) {
        var descriptor = props[i3];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var _require = require_buffer();
    var Buffer2 = _require.Buffer;
    var _require2 = require_util2();
    var inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    module.exports = function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [{
        key: "push",
        value: function push(v3) {
          var entry = {
            data: v3,
            next: null
          };
          if (this.length > 0) this.tail.next = entry;
          else this.head = entry;
          this.tail = entry;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(v3) {
          var entry = {
            data: v3,
            next: this.head
          };
          if (this.length === 0) this.tail = entry;
          this.head = entry;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0) return;
          var ret = this.head.data;
          if (this.length === 1) this.head = this.tail = null;
          else this.head = this.head.next;
          --this.length;
          return ret;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function join(s3) {
          if (this.length === 0) return "";
          var p3 = this.head;
          var ret = "" + p3.data;
          while (p3 = p3.next) ret += s3 + p3.data;
          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n2) {
          if (this.length === 0) return Buffer2.alloc(0);
          var ret = Buffer2.allocUnsafe(n2 >>> 0);
          var p3 = this.head;
          var i3 = 0;
          while (p3) {
            copyBuffer(p3.data, ret, i3);
            i3 += p3.data.length;
            p3 = p3.next;
          }
          return ret;
        }
        // Consumes a specified amount of bytes or characters from the buffered data.
      }, {
        key: "consume",
        value: function consume(n2, hasStrings) {
          var ret;
          if (n2 < this.head.data.length) {
            ret = this.head.data.slice(0, n2);
            this.head.data = this.head.data.slice(n2);
          } else if (n2 === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
          }
          return ret;
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        }
        // Consumes a specified amount of characters from the buffered data.
      }, {
        key: "_getString",
        value: function _getString(n2) {
          var p3 = this.head;
          var c3 = 1;
          var ret = p3.data;
          n2 -= ret.length;
          while (p3 = p3.next) {
            var str = p3.data;
            var nb = n2 > str.length ? str.length : n2;
            if (nb === str.length) ret += str;
            else ret += str.slice(0, n2);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === str.length) {
                ++c3;
                if (p3.next) this.head = p3.next;
                else this.head = this.tail = null;
              } else {
                this.head = p3;
                p3.data = str.slice(nb);
              }
              break;
            }
            ++c3;
          }
          this.length -= c3;
          return ret;
        }
        // Consumes a specified amount of bytes from the buffered data.
      }, {
        key: "_getBuffer",
        value: function _getBuffer(n2) {
          var ret = Buffer2.allocUnsafe(n2);
          var p3 = this.head;
          var c3 = 1;
          p3.data.copy(ret);
          n2 -= p3.data.length;
          while (p3 = p3.next) {
            var buf = p3.data;
            var nb = n2 > buf.length ? buf.length : n2;
            buf.copy(ret, ret.length - n2, 0, nb);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === buf.length) {
                ++c3;
                if (p3.next) this.head = p3.next;
                else this.head = this.tail = null;
              } else {
                this.head = p3;
                p3.data = buf.slice(nb);
              }
              break;
            }
            ++c3;
          }
          this.length -= c3;
          return ret;
        }
        // Make sure the linked list only shows the minimal necessary information.
      }, {
        key: custom,
        value: function value(_3, options) {
          return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
            // Only inspect one level.
            depth: 0,
            // It should not recurse.
            customInspect: false
          }));
        }
      }]);
      return BufferList;
    }();
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
    "use strict";
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose) return;
      if (self2._readableState && !self2._readableState.emitClose) return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
      else stream.emit("error", err);
    }
    module.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/errors-browser.js
var require_errors_browser = __commonJS({
  "node_modules/readable-stream/errors-browser.js"(exports, module) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      var NodeError = function(_Base) {
        _inheritsLoose(NodeError2, _Base);
        function NodeError2(arg1, arg2, arg3) {
          return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError2;
      }(Base);
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i3) {
          return String(i3);
        });
        if (len > 2) {
          return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        } else if (len === 2) {
          return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        } else {
          return "of ".concat(thing, " ").concat(expected[0]);
        }
      } else {
        return "of ".concat(thing, " ").concat(String(expected));
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      var determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      var msg;
      if (endsWith(name, " argument")) {
        msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      } else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
      }
      msg += ". Received type ".concat(typeof actual);
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module.exports.codes = codes;
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports, module) {
    "use strict";
    var ERR_INVALID_OPT_VALUE = require_errors_browser().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    module.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/util-deprecate/browser.js
var require_browser = __commonJS({
  "node_modules/util-deprecate/browser.js"(exports, module) {
    module.exports = deprecate;
    function deprecate(fn, msg) {
      if (config("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config("throwDeprecation")) {
            throw new Error(msg);
          } else if (config("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config(name) {
      try {
        if (!global.localStorage) return false;
      } catch (_3) {
        return false;
      }
      var val = global.localStorage[name];
      if (null == val) return false;
      return String(val).toLowerCase() === "true";
    }
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
    "use strict";
    module.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_browser()
    };
    var Stream = require_stream_browser();
    var Buffer2 = require_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits_browser()(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_3) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object)) return true;
          if (this !== Writable) return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf) encoding = "buffer";
      else if (!encoding) encoding = state.defaultEncoding;
      if (typeof cb !== "function") cb = nop;
      if (state.ending) writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string") encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret) state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev) stream._writev(chunk, state.onwrite);
      else stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        process.nextTick(cb, er);
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er) onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished) onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l3 = state.bufferedRequestCount;
        var buffer = new Array(l3);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null) state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending) endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          process.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
    "use strict";
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) keys2.push(key);
      return keys2;
    };
    module.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits_browser()(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v3 = 0; v3 < keys.length; v3++) {
        method = keys[v3];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v3;
    function Duplex(options) {
      if (!(this instanceof Duplex)) return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended) return;
      process.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    var buffer = require_buffer();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc) return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried) return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0) return "";
      var r4;
      var i3;
      if (this.lastNeed) {
        r4 = this.fillLast(buf);
        if (r4 === void 0) return "";
        i3 = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i3 = 0;
      }
      if (i3 < buf.length) return r4 ? r4 + this.text(buf, i3) : this.text(buf, i3);
      return r4 || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i3) {
      var j3 = buf.length - 1;
      if (j3 < i3) return 0;
      var nb = utf8CheckByte(buf[j3]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j3 < i3 || nb === -2) return 0;
      nb = utf8CheckByte(buf[j3]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j3 < i3 || nb === -2) return 0;
      nb = utf8CheckByte(buf[j3]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p3) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "�";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "�";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "�";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p3 = this.lastTotal - this.lastNeed;
      var r4 = utf8CheckExtraBytes(this, buf, p3);
      if (r4 !== void 0) return r4;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p3, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p3, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i3) {
      var total = utf8CheckIncomplete(this, buf, i3);
      if (!this.lastNeed) return buf.toString("utf8", i3);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i3, end);
    }
    function utf8End(buf) {
      var r4 = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r4 + "�";
      return r4;
    }
    function utf16Text(buf, i3) {
      if ((buf.length - i3) % 2 === 0) {
        var r4 = buf.toString("utf16le", i3);
        if (r4) {
          var c3 = r4.charCodeAt(r4.length - 1);
          if (c3 >= 55296 && c3 <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r4.slice(0, -1);
          }
        }
        return r4;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i3, buf.length - 1);
    }
    function utf16End(buf) {
      var r4 = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r4 + this.lastChar.toString("utf16le", 0, end);
      }
      return r4;
    }
    function base64Text(buf, i3) {
      var n2 = (buf.length - i3) % 3;
      if (n2 === 0) return buf.toString("base64", i3);
      this.lastNeed = 3 - n2;
      this.lastTotal = 3;
      if (n2 === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i3, buf.length - n2);
    }
    function base64End(buf) {
      var r4 = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r4 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r4;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module) {
    "use strict";
    var ERR_STREAM_PREMATURE_CLOSE = require_errors_browser().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function") return eos(stream, null, opts);
      if (!opts) opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable) onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false) stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    module.exports = eos;
  }
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module) {
    "use strict";
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    module.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/readable-stream/lib/internal/streams/from-browser.js
var require_from_browser = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from-browser.js"(exports, module) {
    module.exports = function() {
      throw new Error("Readable.from is not available in the browser");
    };
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
    "use strict";
    module.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require_events().EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream = require_stream_browser();
    var Buffer2 = require_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = require_util2();
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function debug2() {
      };
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors_browser().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    require_inherits_browser()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
      else emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable)) return new Readable(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
              else maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
      return er;
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p3 = this._readableState.buffer.head;
      var content = "";
      while (p3 !== null) {
        content += decoder.write(p3.data);
        p3 = p3.next;
      }
      this._readableState.buffer.clear();
      if (content !== "") this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n2) {
      if (n2 >= MAX_HWM) {
        n2 = MAX_HWM;
      } else {
        n2--;
        n2 |= n2 >>> 1;
        n2 |= n2 >>> 2;
        n2 |= n2 >>> 4;
        n2 |= n2 >>> 8;
        n2 |= n2 >>> 16;
        n2++;
      }
      return n2;
    }
    function howMuchToRead(n2, state) {
      if (n2 <= 0 || state.length === 0 && state.ended) return 0;
      if (state.objectMode) return 1;
      if (n2 !== n2) {
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
      }
      if (n2 > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n2);
      if (n2 <= state.length) return n2;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n2) {
      debug("read", n2);
      n2 = parseInt(n2, 10);
      var state = this._readableState;
      var nOrig = n2;
      if (n2 !== 0) state.emittedReadable = false;
      if (n2 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
      }
      n2 = howMuchToRead(n2, state);
      if (n2 === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n2 < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0) state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading) n2 = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n2 > 0) ret = fromList(n2, state);
      else ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n2 = 0;
      } else {
        state.length -= n2;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended) state.needReadable = true;
        if (nOrig !== n2 && state.ended) endReadable(this);
      }
      if (ret !== null) this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended) return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n2) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted) process.nextTick(endFn);
      else src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0) return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i3 = 0; i3 < len; i3++) dests[i3].emit("unpipe", this, {
          hasUnpiped: false
        });
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1) return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1) state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false) this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading) stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null) ;
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i3 in stream) {
        if (this[i3] === void 0 && typeof stream[i3] === "function") {
          this[i3] = /* @__PURE__ */ function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          }(i3);
        }
      }
      for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
        stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
      }
      this._read = function(n3) {
        debug("wrapped _read", n3);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.flowing;
      },
      set: function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get() {
        return this._readableState.length;
      }
    });
    function fromList(n2, state) {
      if (state.length === 0) return null;
      var ret;
      if (state.objectMode) ret = state.buffer.shift();
      else if (!n2 || n2 >= state.length) {
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n2, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from === void 0) {
          from = require_from_browser();
        }
        return from(Readable, iterable, opts);
      };
    }
    function indexOf(xs, x3) {
      for (var i3 = 0, l3 = xs.length; i3 < l3; i3++) {
        if (xs[i3] === x3) return i3;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
    "use strict";
    module.exports = Transform;
    var _require$codes = require_errors_browser().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits_browser()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform)) return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n2) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er) return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
    "use strict";
    module.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits_browser()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough)) return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module) {
    "use strict";
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = require_errors_browser().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err) throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0) eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call(fn) {
      fn();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length) return noop;
      if (typeof streams[streams.length - 1] !== "function") return noop;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0])) streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i3) {
        var reading = i3 < streams.length - 1;
        var writing = i3 > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error) error = err;
          if (err) destroys.forEach(call);
          if (reading) return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    module.exports = pipeline;
  }
});

// node_modules/readable-stream/readable-browser.js
var require_readable_browser = __commonJS({
  "node_modules/readable-stream/readable-browser.js"(exports, module) {
    exports = module.exports = require_stream_readable();
    exports.Stream = exports;
    exports.Readable = exports;
    exports.Writable = require_stream_writable();
    exports.Duplex = require_stream_duplex();
    exports.Transform = require_stream_transform();
    exports.PassThrough = require_stream_passthrough();
    exports.finished = require_end_of_stream();
    exports.pipeline = require_pipeline();
  }
});

// node_modules/keccak/lib/api/keccak.js
var require_keccak = __commonJS({
  "node_modules/keccak/lib/api/keccak.js"(exports, module) {
    var { Transform } = require_readable_browser();
    module.exports = (KeccakState) => class Keccak extends Transform {
      constructor(rate, capacity, delimitedSuffix, hashBitLength, options) {
        super(options);
        this._rate = rate;
        this._capacity = capacity;
        this._delimitedSuffix = delimitedSuffix;
        this._hashBitLength = hashBitLength;
        this._options = options;
        this._state = new KeccakState();
        this._state.initialize(rate, capacity);
        this._finalized = false;
      }
      _transform(chunk, encoding, callback) {
        let error = null;
        try {
          this.update(chunk, encoding);
        } catch (err) {
          error = err;
        }
        callback(error);
      }
      _flush(callback) {
        let error = null;
        try {
          this.push(this.digest());
        } catch (err) {
          error = err;
        }
        callback(error);
      }
      update(data, encoding) {
        if (!Buffer.isBuffer(data) && typeof data !== "string") throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Digest already called");
        if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);
        this._state.absorb(data);
        return this;
      }
      digest(encoding) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = true;
        if (this._delimitedSuffix) this._state.absorbLastFewBits(this._delimitedSuffix);
        let digest = this._state.squeeze(this._hashBitLength / 8);
        if (encoding !== void 0) digest = digest.toString(encoding);
        this._resetState();
        return digest;
      }
      // remove result from memory
      _resetState() {
        this._state.initialize(this._rate, this._capacity);
        return this;
      }
      // because sometimes we need hash right now and little later
      _clone() {
        const clone = new Keccak(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
        this._state.copy(clone._state);
        clone._finalized = this._finalized;
        return clone;
      }
    };
  }
});

// node_modules/keccak/lib/api/shake.js
var require_shake = __commonJS({
  "node_modules/keccak/lib/api/shake.js"(exports, module) {
    var { Transform } = require_readable_browser();
    module.exports = (KeccakState) => class Shake extends Transform {
      constructor(rate, capacity, delimitedSuffix, options) {
        super(options);
        this._rate = rate;
        this._capacity = capacity;
        this._delimitedSuffix = delimitedSuffix;
        this._options = options;
        this._state = new KeccakState();
        this._state.initialize(rate, capacity);
        this._finalized = false;
      }
      _transform(chunk, encoding, callback) {
        let error = null;
        try {
          this.update(chunk, encoding);
        } catch (err) {
          error = err;
        }
        callback(error);
      }
      _flush() {
      }
      _read(size) {
        this.push(this.squeeze(size));
      }
      update(data, encoding) {
        if (!Buffer.isBuffer(data) && typeof data !== "string") throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Squeeze already called");
        if (!Buffer.isBuffer(data)) data = Buffer.from(data, encoding);
        this._state.absorb(data);
        return this;
      }
      squeeze(dataByteLength, encoding) {
        if (!this._finalized) {
          this._finalized = true;
          this._state.absorbLastFewBits(this._delimitedSuffix);
        }
        let data = this._state.squeeze(dataByteLength);
        if (encoding !== void 0) data = data.toString(encoding);
        return data;
      }
      _resetState() {
        this._state.initialize(this._rate, this._capacity);
        return this;
      }
      _clone() {
        const clone = new Shake(this._rate, this._capacity, this._delimitedSuffix, this._options);
        this._state.copy(clone._state);
        clone._finalized = this._finalized;
        return clone;
      }
    };
  }
});

// node_modules/keccak/lib/api/index.js
var require_api = __commonJS({
  "node_modules/keccak/lib/api/index.js"(exports, module) {
    var createKeccak = require_keccak();
    var createShake = require_shake();
    module.exports = function(KeccakState) {
      const Keccak = createKeccak(KeccakState);
      const Shake = createShake(KeccakState);
      return function(algorithm, options) {
        const hash = typeof algorithm === "string" ? algorithm.toLowerCase() : algorithm;
        switch (hash) {
          case "keccak224":
            return new Keccak(1152, 448, null, 224, options);
          case "keccak256":
            return new Keccak(1088, 512, null, 256, options);
          case "keccak384":
            return new Keccak(832, 768, null, 384, options);
          case "keccak512":
            return new Keccak(576, 1024, null, 512, options);
          case "sha3-224":
            return new Keccak(1152, 448, 6, 224, options);
          case "sha3-256":
            return new Keccak(1088, 512, 6, 256, options);
          case "sha3-384":
            return new Keccak(832, 768, 6, 384, options);
          case "sha3-512":
            return new Keccak(576, 1024, 6, 512, options);
          case "shake128":
            return new Shake(1344, 256, 31, options);
          case "shake256":
            return new Shake(1088, 512, 31, options);
          default:
            throw new Error("Invald algorithm: " + algorithm);
        }
      };
    };
  }
});

// node_modules/keccak/lib/keccak-state-unroll.js
var require_keccak_state_unroll = __commonJS({
  "node_modules/keccak/lib/keccak-state-unroll.js"(exports) {
    var P1600_ROUND_CONSTANTS = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
    exports.p1600 = function(s3) {
      for (let round = 0; round < 24; ++round) {
        const lo0 = s3[0] ^ s3[10] ^ s3[20] ^ s3[30] ^ s3[40];
        const hi0 = s3[1] ^ s3[11] ^ s3[21] ^ s3[31] ^ s3[41];
        const lo1 = s3[2] ^ s3[12] ^ s3[22] ^ s3[32] ^ s3[42];
        const hi1 = s3[3] ^ s3[13] ^ s3[23] ^ s3[33] ^ s3[43];
        const lo2 = s3[4] ^ s3[14] ^ s3[24] ^ s3[34] ^ s3[44];
        const hi2 = s3[5] ^ s3[15] ^ s3[25] ^ s3[35] ^ s3[45];
        const lo3 = s3[6] ^ s3[16] ^ s3[26] ^ s3[36] ^ s3[46];
        const hi3 = s3[7] ^ s3[17] ^ s3[27] ^ s3[37] ^ s3[47];
        const lo4 = s3[8] ^ s3[18] ^ s3[28] ^ s3[38] ^ s3[48];
        const hi4 = s3[9] ^ s3[19] ^ s3[29] ^ s3[39] ^ s3[49];
        let lo = lo4 ^ (lo1 << 1 | hi1 >>> 31);
        let hi = hi4 ^ (hi1 << 1 | lo1 >>> 31);
        const t1slo0 = s3[0] ^ lo;
        const t1shi0 = s3[1] ^ hi;
        const t1slo5 = s3[10] ^ lo;
        const t1shi5 = s3[11] ^ hi;
        const t1slo10 = s3[20] ^ lo;
        const t1shi10 = s3[21] ^ hi;
        const t1slo15 = s3[30] ^ lo;
        const t1shi15 = s3[31] ^ hi;
        const t1slo20 = s3[40] ^ lo;
        const t1shi20 = s3[41] ^ hi;
        lo = lo0 ^ (lo2 << 1 | hi2 >>> 31);
        hi = hi0 ^ (hi2 << 1 | lo2 >>> 31);
        const t1slo1 = s3[2] ^ lo;
        const t1shi1 = s3[3] ^ hi;
        const t1slo6 = s3[12] ^ lo;
        const t1shi6 = s3[13] ^ hi;
        const t1slo11 = s3[22] ^ lo;
        const t1shi11 = s3[23] ^ hi;
        const t1slo16 = s3[32] ^ lo;
        const t1shi16 = s3[33] ^ hi;
        const t1slo21 = s3[42] ^ lo;
        const t1shi21 = s3[43] ^ hi;
        lo = lo1 ^ (lo3 << 1 | hi3 >>> 31);
        hi = hi1 ^ (hi3 << 1 | lo3 >>> 31);
        const t1slo2 = s3[4] ^ lo;
        const t1shi2 = s3[5] ^ hi;
        const t1slo7 = s3[14] ^ lo;
        const t1shi7 = s3[15] ^ hi;
        const t1slo12 = s3[24] ^ lo;
        const t1shi12 = s3[25] ^ hi;
        const t1slo17 = s3[34] ^ lo;
        const t1shi17 = s3[35] ^ hi;
        const t1slo22 = s3[44] ^ lo;
        const t1shi22 = s3[45] ^ hi;
        lo = lo2 ^ (lo4 << 1 | hi4 >>> 31);
        hi = hi2 ^ (hi4 << 1 | lo4 >>> 31);
        const t1slo3 = s3[6] ^ lo;
        const t1shi3 = s3[7] ^ hi;
        const t1slo8 = s3[16] ^ lo;
        const t1shi8 = s3[17] ^ hi;
        const t1slo13 = s3[26] ^ lo;
        const t1shi13 = s3[27] ^ hi;
        const t1slo18 = s3[36] ^ lo;
        const t1shi18 = s3[37] ^ hi;
        const t1slo23 = s3[46] ^ lo;
        const t1shi23 = s3[47] ^ hi;
        lo = lo3 ^ (lo0 << 1 | hi0 >>> 31);
        hi = hi3 ^ (hi0 << 1 | lo0 >>> 31);
        const t1slo4 = s3[8] ^ lo;
        const t1shi4 = s3[9] ^ hi;
        const t1slo9 = s3[18] ^ lo;
        const t1shi9 = s3[19] ^ hi;
        const t1slo14 = s3[28] ^ lo;
        const t1shi14 = s3[29] ^ hi;
        const t1slo19 = s3[38] ^ lo;
        const t1shi19 = s3[39] ^ hi;
        const t1slo24 = s3[48] ^ lo;
        const t1shi24 = s3[49] ^ hi;
        const t2slo0 = t1slo0;
        const t2shi0 = t1shi0;
        const t2slo16 = t1shi5 << 4 | t1slo5 >>> 28;
        const t2shi16 = t1slo5 << 4 | t1shi5 >>> 28;
        const t2slo7 = t1slo10 << 3 | t1shi10 >>> 29;
        const t2shi7 = t1shi10 << 3 | t1slo10 >>> 29;
        const t2slo23 = t1shi15 << 9 | t1slo15 >>> 23;
        const t2shi23 = t1slo15 << 9 | t1shi15 >>> 23;
        const t2slo14 = t1slo20 << 18 | t1shi20 >>> 14;
        const t2shi14 = t1shi20 << 18 | t1slo20 >>> 14;
        const t2slo10 = t1slo1 << 1 | t1shi1 >>> 31;
        const t2shi10 = t1shi1 << 1 | t1slo1 >>> 31;
        const t2slo1 = t1shi6 << 12 | t1slo6 >>> 20;
        const t2shi1 = t1slo6 << 12 | t1shi6 >>> 20;
        const t2slo17 = t1slo11 << 10 | t1shi11 >>> 22;
        const t2shi17 = t1shi11 << 10 | t1slo11 >>> 22;
        const t2slo8 = t1shi16 << 13 | t1slo16 >>> 19;
        const t2shi8 = t1slo16 << 13 | t1shi16 >>> 19;
        const t2slo24 = t1slo21 << 2 | t1shi21 >>> 30;
        const t2shi24 = t1shi21 << 2 | t1slo21 >>> 30;
        const t2slo20 = t1shi2 << 30 | t1slo2 >>> 2;
        const t2shi20 = t1slo2 << 30 | t1shi2 >>> 2;
        const t2slo11 = t1slo7 << 6 | t1shi7 >>> 26;
        const t2shi11 = t1shi7 << 6 | t1slo7 >>> 26;
        const t2slo2 = t1shi12 << 11 | t1slo12 >>> 21;
        const t2shi2 = t1slo12 << 11 | t1shi12 >>> 21;
        const t2slo18 = t1slo17 << 15 | t1shi17 >>> 17;
        const t2shi18 = t1shi17 << 15 | t1slo17 >>> 17;
        const t2slo9 = t1shi22 << 29 | t1slo22 >>> 3;
        const t2shi9 = t1slo22 << 29 | t1shi22 >>> 3;
        const t2slo5 = t1slo3 << 28 | t1shi3 >>> 4;
        const t2shi5 = t1shi3 << 28 | t1slo3 >>> 4;
        const t2slo21 = t1shi8 << 23 | t1slo8 >>> 9;
        const t2shi21 = t1slo8 << 23 | t1shi8 >>> 9;
        const t2slo12 = t1slo13 << 25 | t1shi13 >>> 7;
        const t2shi12 = t1shi13 << 25 | t1slo13 >>> 7;
        const t2slo3 = t1slo18 << 21 | t1shi18 >>> 11;
        const t2shi3 = t1shi18 << 21 | t1slo18 >>> 11;
        const t2slo19 = t1shi23 << 24 | t1slo23 >>> 8;
        const t2shi19 = t1slo23 << 24 | t1shi23 >>> 8;
        const t2slo15 = t1slo4 << 27 | t1shi4 >>> 5;
        const t2shi15 = t1shi4 << 27 | t1slo4 >>> 5;
        const t2slo6 = t1slo9 << 20 | t1shi9 >>> 12;
        const t2shi6 = t1shi9 << 20 | t1slo9 >>> 12;
        const t2slo22 = t1shi14 << 7 | t1slo14 >>> 25;
        const t2shi22 = t1slo14 << 7 | t1shi14 >>> 25;
        const t2slo13 = t1slo19 << 8 | t1shi19 >>> 24;
        const t2shi13 = t1shi19 << 8 | t1slo19 >>> 24;
        const t2slo4 = t1slo24 << 14 | t1shi24 >>> 18;
        const t2shi4 = t1shi24 << 14 | t1slo24 >>> 18;
        s3[0] = t2slo0 ^ ~t2slo1 & t2slo2;
        s3[1] = t2shi0 ^ ~t2shi1 & t2shi2;
        s3[10] = t2slo5 ^ ~t2slo6 & t2slo7;
        s3[11] = t2shi5 ^ ~t2shi6 & t2shi7;
        s3[20] = t2slo10 ^ ~t2slo11 & t2slo12;
        s3[21] = t2shi10 ^ ~t2shi11 & t2shi12;
        s3[30] = t2slo15 ^ ~t2slo16 & t2slo17;
        s3[31] = t2shi15 ^ ~t2shi16 & t2shi17;
        s3[40] = t2slo20 ^ ~t2slo21 & t2slo22;
        s3[41] = t2shi20 ^ ~t2shi21 & t2shi22;
        s3[2] = t2slo1 ^ ~t2slo2 & t2slo3;
        s3[3] = t2shi1 ^ ~t2shi2 & t2shi3;
        s3[12] = t2slo6 ^ ~t2slo7 & t2slo8;
        s3[13] = t2shi6 ^ ~t2shi7 & t2shi8;
        s3[22] = t2slo11 ^ ~t2slo12 & t2slo13;
        s3[23] = t2shi11 ^ ~t2shi12 & t2shi13;
        s3[32] = t2slo16 ^ ~t2slo17 & t2slo18;
        s3[33] = t2shi16 ^ ~t2shi17 & t2shi18;
        s3[42] = t2slo21 ^ ~t2slo22 & t2slo23;
        s3[43] = t2shi21 ^ ~t2shi22 & t2shi23;
        s3[4] = t2slo2 ^ ~t2slo3 & t2slo4;
        s3[5] = t2shi2 ^ ~t2shi3 & t2shi4;
        s3[14] = t2slo7 ^ ~t2slo8 & t2slo9;
        s3[15] = t2shi7 ^ ~t2shi8 & t2shi9;
        s3[24] = t2slo12 ^ ~t2slo13 & t2slo14;
        s3[25] = t2shi12 ^ ~t2shi13 & t2shi14;
        s3[34] = t2slo17 ^ ~t2slo18 & t2slo19;
        s3[35] = t2shi17 ^ ~t2shi18 & t2shi19;
        s3[44] = t2slo22 ^ ~t2slo23 & t2slo24;
        s3[45] = t2shi22 ^ ~t2shi23 & t2shi24;
        s3[6] = t2slo3 ^ ~t2slo4 & t2slo0;
        s3[7] = t2shi3 ^ ~t2shi4 & t2shi0;
        s3[16] = t2slo8 ^ ~t2slo9 & t2slo5;
        s3[17] = t2shi8 ^ ~t2shi9 & t2shi5;
        s3[26] = t2slo13 ^ ~t2slo14 & t2slo10;
        s3[27] = t2shi13 ^ ~t2shi14 & t2shi10;
        s3[36] = t2slo18 ^ ~t2slo19 & t2slo15;
        s3[37] = t2shi18 ^ ~t2shi19 & t2shi15;
        s3[46] = t2slo23 ^ ~t2slo24 & t2slo20;
        s3[47] = t2shi23 ^ ~t2shi24 & t2shi20;
        s3[8] = t2slo4 ^ ~t2slo0 & t2slo1;
        s3[9] = t2shi4 ^ ~t2shi0 & t2shi1;
        s3[18] = t2slo9 ^ ~t2slo5 & t2slo6;
        s3[19] = t2shi9 ^ ~t2shi5 & t2shi6;
        s3[28] = t2slo14 ^ ~t2slo10 & t2slo11;
        s3[29] = t2shi14 ^ ~t2shi10 & t2shi11;
        s3[38] = t2slo19 ^ ~t2slo15 & t2slo16;
        s3[39] = t2shi19 ^ ~t2shi15 & t2shi16;
        s3[48] = t2slo24 ^ ~t2slo20 & t2slo21;
        s3[49] = t2shi24 ^ ~t2shi20 & t2shi21;
        s3[0] ^= P1600_ROUND_CONSTANTS[round * 2];
        s3[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1];
      }
    };
  }
});

// node_modules/keccak/lib/keccak.js
var require_keccak2 = __commonJS({
  "node_modules/keccak/lib/keccak.js"(exports, module) {
    var keccakState = require_keccak_state_unroll();
    function Keccak() {
      this.state = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];
      this.blockSize = null;
      this.count = 0;
      this.squeezing = false;
    }
    Keccak.prototype.initialize = function(rate, capacity) {
      for (let i3 = 0; i3 < 50; ++i3) this.state[i3] = 0;
      this.blockSize = rate / 8;
      this.count = 0;
      this.squeezing = false;
    };
    Keccak.prototype.absorb = function(data) {
      for (let i3 = 0; i3 < data.length; ++i3) {
        this.state[~~(this.count / 4)] ^= data[i3] << 8 * (this.count % 4);
        this.count += 1;
        if (this.count === this.blockSize) {
          keccakState.p1600(this.state);
          this.count = 0;
        }
      }
    };
    Keccak.prototype.absorbLastFewBits = function(bits) {
      this.state[~~(this.count / 4)] ^= bits << 8 * (this.count % 4);
      if ((bits & 128) !== 0 && this.count === this.blockSize - 1) keccakState.p1600(this.state);
      this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4);
      keccakState.p1600(this.state);
      this.count = 0;
      this.squeezing = true;
    };
    Keccak.prototype.squeeze = function(length) {
      if (!this.squeezing) this.absorbLastFewBits(1);
      const output = Buffer.alloc(length);
      for (let i3 = 0; i3 < length; ++i3) {
        output[i3] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255;
        this.count += 1;
        if (this.count === this.blockSize) {
          keccakState.p1600(this.state);
          this.count = 0;
        }
      }
      return output;
    };
    Keccak.prototype.copy = function(dest) {
      for (let i3 = 0; i3 < 50; ++i3) dest.state[i3] = this.state[i3];
      dest.blockSize = this.blockSize;
      dest.count = this.count;
      dest.squeezing = this.squeezing;
    };
    module.exports = Keccak;
  }
});

// node_modules/keccak/js.js
var require_js = __commonJS({
  "node_modules/keccak/js.js"(exports, module) {
    module.exports = require_api()(require_keccak2());
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.js
var require_util3 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/util.js"(exports, module) {
    var createKeccakHash = require_js();
    function zeros(bytes) {
      return Buffer.allocUnsafe(bytes).fill(0);
    }
    function bitLengthFromBigInt(num) {
      return num.toString(2).length;
    }
    function bufferBEFromBigInt(num, length) {
      let hex = num.toString(16);
      if (hex.length % 2 !== 0) hex = "0" + hex;
      const byteArray = hex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
      while (byteArray.length < length) {
        byteArray.unshift(0);
      }
      return Buffer.from(byteArray);
    }
    function twosFromBigInt(value, width) {
      const isNegative = value < 0n;
      let result;
      if (isNegative) {
        const mask = (1n << BigInt(width)) - 1n;
        result = (~value & mask) + 1n;
      } else {
        result = value;
      }
      result &= (1n << BigInt(width)) - 1n;
      return result;
    }
    function setLength(msg, length, right) {
      const buf = zeros(length);
      msg = toBuffer(msg);
      if (right) {
        if (msg.length < length) {
          msg.copy(buf);
          return buf;
        }
        return msg.slice(0, length);
      } else {
        if (msg.length < length) {
          msg.copy(buf, length - msg.length);
          return buf;
        }
        return msg.slice(-length);
      }
    }
    function setLengthRight(msg, length) {
      return setLength(msg, length, true);
    }
    function toBuffer(v3) {
      if (!Buffer.isBuffer(v3)) {
        if (Array.isArray(v3)) {
          v3 = Buffer.from(v3);
        } else if (typeof v3 === "string") {
          if (isHexString2(v3)) {
            v3 = Buffer.from(padToEven(stripHexPrefix(v3)), "hex");
          } else {
            v3 = Buffer.from(v3);
          }
        } else if (typeof v3 === "number") {
          v3 = intToBuffer(v3);
        } else if (v3 === null || v3 === void 0) {
          v3 = Buffer.allocUnsafe(0);
        } else if (typeof v3 === "bigint") {
          v3 = bufferBEFromBigInt(v3);
        } else if (v3.toArray) {
          v3 = Buffer.from(v3.toArray());
        } else {
          throw new Error("invalid type");
        }
      }
      return v3;
    }
    function bufferToHex(buf) {
      buf = toBuffer(buf);
      return "0x" + buf.toString("hex");
    }
    function keccak(a3, bits) {
      a3 = toBuffer(a3);
      if (!bits) bits = 256;
      return createKeccakHash("keccak" + bits).update(a3).digest();
    }
    function padToEven(str) {
      return str.length % 2 ? "0" + str : str;
    }
    function isHexString2(str) {
      return typeof str === "string" && str.match(/^0x[0-9A-Fa-f]*$/);
    }
    function stripHexPrefix(str) {
      if (typeof str === "string" && str.startsWith("0x")) {
        return str.slice(2);
      }
      return str;
    }
    module.exports = {
      zeros,
      setLength,
      setLengthRight,
      isHexString: isHexString2,
      stripHexPrefix,
      toBuffer,
      bufferToHex,
      keccak,
      bitLengthFromBigInt,
      bufferBEFromBigInt,
      twosFromBigInt
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.js
var require_abi = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/abi.js"(exports, module) {
    var util = require_util3();
    function elementaryName(name) {
      if (name.startsWith("int[")) {
        return "int256" + name.slice(3);
      } else if (name === "int") {
        return "int256";
      } else if (name.startsWith("uint[")) {
        return "uint256" + name.slice(4);
      } else if (name === "uint") {
        return "uint256";
      } else if (name.startsWith("fixed[")) {
        return "fixed128x128" + name.slice(5);
      } else if (name === "fixed") {
        return "fixed128x128";
      } else if (name.startsWith("ufixed[")) {
        return "ufixed128x128" + name.slice(6);
      } else if (name === "ufixed") {
        return "ufixed128x128";
      }
      return name;
    }
    function parseTypeN(type) {
      return parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
    }
    function parseTypeNxM(type) {
      var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
      return [parseInt(tmp[1], 10), parseInt(tmp[2], 10)];
    }
    function parseTypeArray(type) {
      var tmp = type.match(/(.*)\[(.*?)\]$/);
      if (tmp) {
        return tmp[2] === "" ? "dynamic" : parseInt(tmp[2], 10);
      }
      return null;
    }
    function parseNumber(arg) {
      var type = typeof arg;
      if (type === "string" || type === "number") {
        return BigInt(arg);
      } else if (type === "bigint") {
        return arg;
      } else {
        throw new Error("Argument is not a number");
      }
    }
    function encodeSingle(type, arg) {
      var size, num, ret, i3;
      if (type === "address") {
        return encodeSingle("uint160", parseNumber(arg));
      } else if (type === "bool") {
        return encodeSingle("uint8", arg ? 1 : 0);
      } else if (type === "string") {
        return encodeSingle("bytes", new Buffer(arg, "utf8"));
      } else if (isArray(type)) {
        if (typeof arg.length === "undefined") {
          throw new Error("Not an array?");
        }
        size = parseTypeArray(type);
        if (size !== "dynamic" && size !== 0 && arg.length > size) {
          throw new Error("Elements exceed array size: " + size);
        }
        ret = [];
        type = type.slice(0, type.lastIndexOf("["));
        if (typeof arg === "string") {
          arg = JSON.parse(arg);
        }
        for (i3 in arg) {
          ret.push(encodeSingle(type, arg[i3]));
        }
        if (size === "dynamic") {
          var length = encodeSingle("uint256", arg.length);
          ret.unshift(length);
        }
        return Buffer.concat(ret);
      } else if (type === "bytes") {
        arg = new Buffer(arg);
        ret = Buffer.concat([encodeSingle("uint256", arg.length), arg]);
        if (arg.length % 32 !== 0) {
          ret = Buffer.concat([ret, util.zeros(32 - arg.length % 32)]);
        }
        return ret;
      } else if (type.startsWith("bytes")) {
        size = parseTypeN(type);
        if (size < 1 || size > 32) {
          throw new Error("Invalid bytes<N> width: " + size);
        }
        return util.setLengthRight(arg, 32);
      } else if (type.startsWith("uint")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) {
          throw new Error("Invalid uint<N> width: " + size);
        }
        num = parseNumber(arg);
        const bitLength = util.bitLengthFromBigInt(num);
        if (bitLength > size) {
          throw new Error("Supplied uint exceeds width: " + size + " vs " + bitLength);
        }
        if (num < 0) {
          throw new Error("Supplied uint is negative");
        }
        return util.bufferBEFromBigInt(num, 32);
      } else if (type.startsWith("int")) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) {
          throw new Error("Invalid int<N> width: " + size);
        }
        num = parseNumber(arg);
        const bitLength = util.bitLengthFromBigInt(num);
        if (bitLength > size) {
          throw new Error("Supplied int exceeds width: " + size + " vs " + bitLength);
        }
        const twos = util.twosFromBigInt(num, 256);
        return util.bufferBEFromBigInt(twos, 32);
      } else if (type.startsWith("ufixed")) {
        size = parseTypeNxM(type);
        num = parseNumber(arg);
        if (num < 0) {
          throw new Error("Supplied ufixed is negative");
        }
        return encodeSingle("uint256", num * BigInt(2) ** BigInt(size[1]));
      } else if (type.startsWith("fixed")) {
        size = parseTypeNxM(type);
        return encodeSingle("int256", parseNumber(arg) * BigInt(2) ** BigInt(size[1]));
      }
      throw new Error("Unsupported or invalid type: " + type);
    }
    function isDynamic(type) {
      return type === "string" || type === "bytes" || parseTypeArray(type) === "dynamic";
    }
    function isArray(type) {
      return type.lastIndexOf("]") === type.length - 1;
    }
    function rawEncode(types, values) {
      var output = [];
      var data = [];
      var headLength = 32 * types.length;
      for (var i3 in types) {
        var type = elementaryName(types[i3]);
        var value = values[i3];
        var cur = encodeSingle(type, value);
        if (isDynamic(type)) {
          output.push(encodeSingle("uint256", headLength));
          data.push(cur);
          headLength += cur.length;
        } else {
          output.push(cur);
        }
      }
      return Buffer.concat(output.concat(data));
    }
    function solidityPack(types, values) {
      if (types.length !== values.length) {
        throw new Error("Number of types are not matching the values");
      }
      var size, num;
      var ret = [];
      for (var i3 = 0; i3 < types.length; i3++) {
        var type = elementaryName(types[i3]);
        var value = values[i3];
        if (type === "bytes") {
          ret.push(value);
        } else if (type === "string") {
          ret.push(new Buffer(value, "utf8"));
        } else if (type === "bool") {
          ret.push(new Buffer(value ? "01" : "00", "hex"));
        } else if (type === "address") {
          ret.push(util.setLength(value, 20));
        } else if (type.startsWith("bytes")) {
          size = parseTypeN(type);
          if (size < 1 || size > 32) {
            throw new Error("Invalid bytes<N> width: " + size);
          }
          ret.push(util.setLengthRight(value, size));
        } else if (type.startsWith("uint")) {
          size = parseTypeN(type);
          if (size % 8 || size < 8 || size > 256) {
            throw new Error("Invalid uint<N> width: " + size);
          }
          num = parseNumber(value);
          const bitLength = util.bitLengthFromBigInt(num);
          if (bitLength > size) {
            throw new Error("Supplied uint exceeds width: " + size + " vs " + bitLength);
          }
          ret.push(util.bufferBEFromBigInt(num, size / 8));
        } else if (type.startsWith("int")) {
          size = parseTypeN(type);
          if (size % 8 || size < 8 || size > 256) {
            throw new Error("Invalid int<N> width: " + size);
          }
          num = parseNumber(value);
          const bitLength = util.bitLengthFromBigInt(num);
          if (bitLength > size) {
            throw new Error("Supplied int exceeds width: " + size + " vs " + bitLength);
          }
          const twos = util.twosFromBigInt(num, size);
          ret.push(util.bufferBEFromBigInt(twos, size / 8));
        } else {
          throw new Error("Unsupported or invalid type: " + type);
        }
      }
      return Buffer.concat(ret);
    }
    function soliditySHA3(types, values) {
      return util.keccak(solidityPack(types, values));
    }
    module.exports = {
      rawEncode,
      solidityPack,
      soliditySHA3
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.js
var require_eth_eip712_util = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/vendor-js/eth-eip712-util/index.js"(exports, module) {
    var util = require_util3();
    var abi = require_abi();
    var TYPED_MESSAGE_SCHEMA = {
      type: "object",
      properties: {
        types: {
          type: "object",
          additionalProperties: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                type: { type: "string" }
              },
              required: ["name", "type"]
            }
          }
        },
        primaryType: { type: "string" },
        domain: { type: "object" },
        message: { type: "object" }
      },
      required: ["types", "primaryType", "domain", "message"]
    };
    var TypedDataUtils = {
      /**
       * Encodes an object by encoding and concatenating each of its members
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of an object
       */
      encodeData(primaryType, data, types, useV4 = true) {
        const encodedTypes = ["bytes32"];
        const encodedValues = [this.hashType(primaryType, types)];
        if (useV4) {
          const encodeField = (name, type, value) => {
            if (types[type] !== void 0) {
              return ["bytes32", value == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : util.keccak(this.encodeData(type, value, types, useV4))];
            }
            if (value === void 0)
              throw new Error(`missing value for field ${name} of type ${type}`);
            if (type === "bytes") {
              return ["bytes32", util.keccak(value)];
            }
            if (type === "string") {
              if (typeof value === "string") {
                value = Buffer.from(value, "utf8");
              }
              return ["bytes32", util.keccak(value)];
            }
            if (type.lastIndexOf("]") === type.length - 1) {
              const parsedType = type.slice(0, type.lastIndexOf("["));
              const typeValuePairs = value.map((item) => encodeField(name, parsedType, item));
              return ["bytes32", util.keccak(abi.rawEncode(
                typeValuePairs.map(([type2]) => type2),
                typeValuePairs.map(([, value2]) => value2)
              ))];
            }
            return [type, value];
          };
          for (const field of types[primaryType]) {
            const [type, value] = encodeField(field.name, field.type, data[field.name]);
            encodedTypes.push(type);
            encodedValues.push(value);
          }
        } else {
          for (const field of types[primaryType]) {
            let value = data[field.name];
            if (value !== void 0) {
              if (field.type === "bytes") {
                encodedTypes.push("bytes32");
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (field.type === "string") {
                encodedTypes.push("bytes32");
                if (typeof value === "string") {
                  value = Buffer.from(value, "utf8");
                }
                value = util.keccak(value);
                encodedValues.push(value);
              } else if (types[field.type] !== void 0) {
                encodedTypes.push("bytes32");
                value = util.keccak(this.encodeData(field.type, value, types, useV4));
                encodedValues.push(value);
              } else if (field.type.lastIndexOf("]") === field.type.length - 1) {
                throw new Error("Arrays currently unimplemented in encodeData");
              } else {
                encodedTypes.push(field.type);
                encodedValues.push(value);
              }
            }
          }
        }
        return abi.rawEncode(encodedTypes, encodedValues);
      },
      /**
       * Encodes the type of an object by encoding a comma delimited list of its members
       *
       * @param {string} primaryType - Root type to encode
       * @param {Object} types - Type definitions
       * @returns {string} - Encoded representation of the type of an object
       */
      encodeType(primaryType, types) {
        let result = "";
        let deps = this.findTypeDependencies(primaryType, types).filter((dep) => dep !== primaryType);
        deps = [primaryType].concat(deps.sort());
        for (const type of deps) {
          const children = types[type];
          if (!children) {
            throw new Error("No type definition specified: " + type);
          }
          result += type + "(" + types[type].map(({ name, type: type2 }) => type2 + " " + name).join(",") + ")";
        }
        return result;
      },
      /**
       * Finds all types within a type definition object
       *
       * @param {string} primaryType - Root type
       * @param {Object} types - Type definitions
       * @param {Array} results - current set of accumulated types
       * @returns {Array} - Set of all types found in the type definition
       */
      findTypeDependencies(primaryType, types, results = []) {
        primaryType = primaryType.match(/^\w*/)[0];
        if (results.includes(primaryType) || types[primaryType] === void 0) {
          return results;
        }
        results.push(primaryType);
        for (const field of types[primaryType]) {
          for (const dep of this.findTypeDependencies(field.type, types, results)) {
            !results.includes(dep) && results.push(dep);
          }
        }
        return results;
      },
      /**
       * Hashes an object
       *
       * @param {string} primaryType - Root type
       * @param {Object} data - Object to hash
       * @param {Object} types - Type definitions
       * @returns {Buffer} - Hash of an object
       */
      hashStruct(primaryType, data, types, useV4 = true) {
        return util.keccak(this.encodeData(primaryType, data, types, useV4));
      },
      /**
       * Hashes the type of an object
       *
       * @param {string} primaryType - Root type to hash
       * @param {Object} types - Type definitions
       * @returns {string} - Hash of an object
       */
      hashType(primaryType, types) {
        return util.keccak(this.encodeType(primaryType, types));
      },
      /**
       * Removes properties from a message object that are not defined per EIP-712
       *
       * @param {Object} data - typed message object
       * @returns {Object} - typed message object with only allowed fields
       */
      sanitizeData(data) {
        const sanitizedData = {};
        for (const key in TYPED_MESSAGE_SCHEMA.properties) {
          data[key] && (sanitizedData[key] = data[key]);
        }
        if (sanitizedData.types) {
          sanitizedData.types = Object.assign({ EIP712Domain: [] }, sanitizedData.types);
        }
        return sanitizedData;
      },
      /**
       * Returns the hash of a typed message as per EIP-712 for signing
       *
       * @param {Object} typedData - Types message data to sign
       * @returns {string} - sha3 hash for signing
       */
      hash(typedData, useV4 = true) {
        const sanitizedData = this.sanitizeData(typedData);
        const parts = [Buffer.from("1901", "hex")];
        parts.push(this.hashStruct("EIP712Domain", sanitizedData.domain, sanitizedData.types, useV4));
        if (sanitizedData.primaryType !== "EIP712Domain") {
          parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
        }
        return util.keccak(Buffer.concat(parts));
      }
    };
    module.exports = {
      TYPED_MESSAGE_SCHEMA,
      TypedDataUtils,
      hashForSignTypedDataLegacy: function(msgParams) {
        return typedSignatureHashLegacy(msgParams.data);
      },
      hashForSignTypedData_v3: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data, false);
      },
      hashForSignTypedData_v4: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data);
      }
    };
    function typedSignatureHashLegacy(typedData) {
      const error = new Error("Expect argument to be non-empty array");
      if (typeof typedData !== "object" || !typedData.length) throw error;
      const data = typedData.map(function(e3) {
        return e3.type === "bytes" ? util.toBuffer(e3.value) : e3.value;
      });
      const types = typedData.map(function(e3) {
        return e3.type;
      });
      const schema = typedData.map(function(e3) {
        if (!e3.name) throw error;
        return e3.type + " " + e3.name;
      });
      return abi.soliditySHA3(
        ["bytes32", "bytes32"],
        [
          abi.soliditySHA3(new Array(typedData.length).fill("string"), schema),
          abi.soliditySHA3(types, data)
        ]
      );
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/constants.js
var require_constants2 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.APP_VERSION_KEY = exports.LOCAL_STORAGE_ADDRESSES_KEY = exports.WALLET_USER_NAME_KEY = void 0;
    exports.WALLET_USER_NAME_KEY = "walletUsername";
    exports.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
    exports.APP_VERSION_KEY = "AppVersion";
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/RelayEventManager.js
var require_RelayEventManager = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/RelayEventManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RelayEventManager = void 0;
    var util_1 = require_util();
    var RelayEventManager = class {
      constructor() {
        this._nextRequestId = 0;
        this.callbacks = /* @__PURE__ */ new Map();
      }
      makeRequestId() {
        this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
        const id = this._nextRequestId;
        const idStr = (0, util_1.prepend0x)(id.toString(16));
        const callback = this.callbacks.get(idStr);
        if (callback) {
          this.callbacks.delete(idStr);
        }
        return id;
      }
    };
    exports.RelayEventManager = RelayEventManager;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkCipher.js
var require_WalletLinkCipher = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkCipher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkCipher = void 0;
    var util_1 = require_util();
    var WalletLinkCipher = class {
      // @param secret hex representation of 32-byte secret
      constructor(secret) {
        this.secret = secret;
      }
      /**
       *
       * @param plainText string to be encrypted
       * returns hex string representation of bytes in the order: initialization vector (iv),
       * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
       * encrypted plainText.
       */
      async encrypt(plainText) {
        const secret = this.secret;
        if (secret.length !== 64)
          throw Error(`secret must be 256 bits`);
        const ivBytes = crypto.getRandomValues(new Uint8Array(12));
        const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
        const enc = new TextEncoder();
        const encryptedResult = await window.crypto.subtle.encrypt({
          name: "AES-GCM",
          iv: ivBytes
        }, secretKey, enc.encode(plainText));
        const tagLength = 16;
        const authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
        const encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
        const authTagBytes = new Uint8Array(authTag);
        const encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
        const concatted = new Uint8Array([...ivBytes, ...authTagBytes, ...encryptedPlaintextBytes]);
        return (0, util_1.uint8ArrayToHex)(concatted);
      }
      /**
       *
       * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
       * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
       */
      async decrypt(cipherText) {
        const secret = this.secret;
        if (secret.length !== 64)
          throw Error(`secret must be 256 bits`);
        return new Promise((resolve, reject) => {
          void async function() {
            const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), { name: "aes-gcm" }, false, ["encrypt", "decrypt"]);
            const encrypted = (0, util_1.hexStringToUint8Array)(cipherText);
            const ivBytes = encrypted.slice(0, 12);
            const authTagBytes = encrypted.slice(12, 28);
            const encryptedPlaintextBytes = encrypted.slice(28);
            const concattedBytes = new Uint8Array([...encryptedPlaintextBytes, ...authTagBytes]);
            const algo = {
              name: "AES-GCM",
              iv: new Uint8Array(ivBytes)
            };
            try {
              const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
              const decoder = new TextDecoder();
              resolve(decoder.decode(decrypted));
            } catch (err) {
              reject(err);
            }
          }();
        });
      }
    };
    exports.WalletLinkCipher = WalletLinkCipher;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkHTTP.js
var require_WalletLinkHTTP = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkHTTP.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkHTTP = void 0;
    var WalletLinkHTTP = class {
      constructor(linkAPIUrl, sessionId, sessionKey) {
        this.linkAPIUrl = linkAPIUrl;
        this.sessionId = sessionId;
        const credentials = `${sessionId}:${sessionKey}`;
        this.auth = `Basic ${btoa(credentials)}`;
      }
      // mark unseen events as seen
      async markUnseenEventsAsSeen(events) {
        return Promise.all(events.map((e3) => fetch(`${this.linkAPIUrl}/events/${e3.eventId}/seen`, {
          method: "POST",
          headers: {
            Authorization: this.auth
          }
        }))).catch((error) => console.error("Unabled to mark event as failed:", error));
      }
      async fetchUnseenEvents() {
        var _a;
        const response = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
          headers: {
            Authorization: this.auth
          }
        });
        if (response.ok) {
          const { events, error } = await response.json();
          if (error) {
            throw new Error(`Check unseen events failed: ${error}`);
          }
          const responseEvents = (_a = events === null || events === void 0 ? void 0 : events.filter((e3) => e3.event === "Web3Response").map((e3) => ({
            type: "Event",
            sessionId: this.sessionId,
            eventId: e3.id,
            event: e3.event,
            data: e3.data
          }))) !== null && _a !== void 0 ? _a : [];
          this.markUnseenEventsAsSeen(responseEvents);
          return responseEvents;
        }
        throw new Error(`Check unseen events failed: ${response.status}`);
      }
    };
    exports.WalletLinkHTTP = WalletLinkHTTP;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkWebSocket.js
var require_WalletLinkWebSocket = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkWebSocket.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkWebSocket = exports.ConnectionState = void 0;
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["DISCONNECTED"] = 0] = "DISCONNECTED";
      ConnectionState2[ConnectionState2["CONNECTING"] = 1] = "CONNECTING";
      ConnectionState2[ConnectionState2["CONNECTED"] = 2] = "CONNECTED";
    })(ConnectionState || (exports.ConnectionState = ConnectionState = {}));
    var WalletLinkWebSocket = class {
      setConnectionStateListener(listener) {
        this.connectionStateListener = listener;
      }
      setIncomingDataListener(listener) {
        this.incomingDataListener = listener;
      }
      /**
       * Constructor
       * @param url WebSocket server URL
       * @param [WebSocketClass] Custom WebSocket implementation
       */
      constructor(url, WebSocketClass = WebSocket) {
        this.WebSocketClass = WebSocketClass;
        this.webSocket = null;
        this.pendingData = [];
        this.url = url.replace(/^http/, "ws");
      }
      /**
       * Make a websocket connection
       * @returns a Promise that resolves when connected
       */
      async connect() {
        if (this.webSocket) {
          throw new Error("webSocket object is not null");
        }
        return new Promise((resolve, reject) => {
          var _a;
          let webSocket;
          try {
            this.webSocket = webSocket = new this.WebSocketClass(this.url);
          } catch (err) {
            reject(err);
            return;
          }
          (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.CONNECTING);
          webSocket.onclose = (evt) => {
            var _a2;
            this.clearWebSocket();
            reject(new Error(`websocket error ${evt.code}: ${evt.reason}`));
            (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.DISCONNECTED);
          };
          webSocket.onopen = (_3) => {
            var _a2;
            resolve();
            (_a2 = this.connectionStateListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, ConnectionState.CONNECTED);
            if (this.pendingData.length > 0) {
              const pending = [...this.pendingData];
              pending.forEach((data) => this.sendData(data));
              this.pendingData = [];
            }
          };
          webSocket.onmessage = (evt) => {
            var _a2, _b;
            if (evt.data === "h") {
              (_a2 = this.incomingDataListener) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
                type: "Heartbeat"
              });
            } else {
              try {
                const message = JSON.parse(evt.data);
                (_b = this.incomingDataListener) === null || _b === void 0 ? void 0 : _b.call(this, message);
              } catch (_c) {
              }
            }
          };
        });
      }
      /**
       * Disconnect from server
       */
      disconnect() {
        var _a;
        const { webSocket } = this;
        if (!webSocket) {
          return;
        }
        this.clearWebSocket();
        (_a = this.connectionStateListener) === null || _a === void 0 ? void 0 : _a.call(this, ConnectionState.DISCONNECTED);
        this.connectionStateListener = void 0;
        this.incomingDataListener = void 0;
        try {
          webSocket.close();
        } catch (_b) {
        }
      }
      /**
       * Send data to server
       * @param data text to send
       */
      sendData(data) {
        const { webSocket } = this;
        if (!webSocket) {
          this.pendingData.push(data);
          this.connect();
          return;
        }
        webSocket.send(data);
      }
      clearWebSocket() {
        const { webSocket } = this;
        if (!webSocket) {
          return;
        }
        this.webSocket = null;
        webSocket.onclose = null;
        webSocket.onerror = null;
        webSocket.onmessage = null;
        webSocket.onopen = null;
      }
    };
    exports.WalletLinkWebSocket = WalletLinkWebSocket;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkConnection.js
var require_WalletLinkConnection = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/connection/WalletLinkConnection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkConnection = void 0;
    var constants_1 = require_constants2();
    var WalletLinkCipher_1 = require_WalletLinkCipher();
    var WalletLinkHTTP_1 = require_WalletLinkHTTP();
    var WalletLinkWebSocket_1 = require_WalletLinkWebSocket();
    var type_1 = require_type();
    var HEARTBEAT_INTERVAL = 1e4;
    var REQUEST_TIMEOUT = 6e4;
    var WalletLinkConnection = class {
      /**
       * Constructor
       * @param session Session
       * @param linkAPIUrl Coinbase Wallet link server URL
       * @param listener WalletLinkConnectionUpdateListener
       * @param [WebSocketClass] Custom WebSocket implementation
       */
      constructor({ session, linkAPIUrl, listener, WebSocketClass = WebSocket }) {
        this.destroyed = false;
        this.lastHeartbeatResponse = 0;
        this.nextReqId = (0, type_1.IntNumber)(1);
        this._connected = false;
        this._linked = false;
        this.shouldFetchUnseenEventsOnConnect = false;
        this.requestResolutions = /* @__PURE__ */ new Map();
        this.handleSessionMetadataUpdated = (metadata) => {
          if (!metadata)
            return;
          const handlers = /* @__PURE__ */ new Map([
            ["__destroyed", this.handleDestroyed],
            ["EthereumAddress", this.handleAccountUpdated],
            ["WalletUsername", this.handleWalletUsernameUpdated],
            ["AppVersion", this.handleAppVersionUpdated],
            [
              "ChainId",
              (v3) => metadata.JsonRpcUrl && this.handleChainUpdated(v3, metadata.JsonRpcUrl)
            ]
          ]);
          handlers.forEach((handler, key) => {
            const value = metadata[key];
            if (value === void 0)
              return;
            handler(value);
          });
        };
        this.handleDestroyed = (__destroyed) => {
          var _a;
          if (__destroyed !== "1")
            return;
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.resetAndReload();
        };
        this.handleAccountUpdated = async (encryptedEthereumAddress) => {
          var _a;
          {
            const address = await this.cipher.decrypt(encryptedEthereumAddress);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.accountUpdated(address);
          }
        };
        this.handleMetadataUpdated = async (key, encryptedMetadataValue) => {
          var _a;
          {
            const decryptedValue = await this.cipher.decrypt(encryptedMetadataValue);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.metadataUpdated(key, decryptedValue);
          }
        };
        this.handleWalletUsernameUpdated = async (walletUsername) => {
          this.handleMetadataUpdated(constants_1.WALLET_USER_NAME_KEY, walletUsername);
        };
        this.handleAppVersionUpdated = async (appVersion) => {
          this.handleMetadataUpdated(constants_1.APP_VERSION_KEY, appVersion);
        };
        this.handleChainUpdated = async (encryptedChainId, encryptedJsonRpcUrl) => {
          var _a;
          {
            const chainId = await this.cipher.decrypt(encryptedChainId);
            const jsonRpcUrl = await this.cipher.decrypt(encryptedJsonRpcUrl);
            (_a = this.listener) === null || _a === void 0 ? void 0 : _a.chainUpdated(chainId, jsonRpcUrl);
          }
        };
        this.session = session;
        this.cipher = new WalletLinkCipher_1.WalletLinkCipher(session.secret);
        this.listener = listener;
        const ws = new WalletLinkWebSocket_1.WalletLinkWebSocket(`${linkAPIUrl}/rpc`, WebSocketClass);
        ws.setConnectionStateListener(async (state) => {
          let connected = false;
          switch (state) {
            case WalletLinkWebSocket_1.ConnectionState.DISCONNECTED:
              if (!this.destroyed) {
                const connect = async () => {
                  await new Promise((resolve) => setTimeout(resolve, 5e3));
                  if (!this.destroyed) {
                    ws.connect().catch(() => {
                      connect();
                    });
                  }
                };
                connect();
              }
              break;
            case WalletLinkWebSocket_1.ConnectionState.CONNECTED:
              try {
                await this.authenticate();
                this.sendIsLinked();
                this.sendGetSessionConfig();
                connected = true;
              } catch (_a) {
              }
              this.updateLastHeartbeat();
              setInterval(() => {
                this.heartbeat();
              }, HEARTBEAT_INTERVAL);
              if (this.shouldFetchUnseenEventsOnConnect) {
                this.fetchUnseenEventsAPI();
              }
              break;
            case WalletLinkWebSocket_1.ConnectionState.CONNECTING:
              break;
          }
          if (this.connected !== connected) {
            this.connected = connected;
          }
        });
        ws.setIncomingDataListener((m3) => {
          var _a;
          switch (m3.type) {
            case "Heartbeat":
              this.updateLastHeartbeat();
              return;
            case "IsLinkedOK":
            case "Linked": {
              const linked = m3.type === "IsLinkedOK" ? m3.linked : void 0;
              this.linked = linked || m3.onlineGuests > 0;
              break;
            }
            case "GetSessionConfigOK":
            case "SessionConfigUpdated": {
              this.handleSessionMetadataUpdated(m3.metadata);
              break;
            }
            case "Event": {
              this.handleIncomingEvent(m3);
              break;
            }
          }
          if (m3.id !== void 0) {
            (_a = this.requestResolutions.get(m3.id)) === null || _a === void 0 ? void 0 : _a(m3);
          }
        });
        this.ws = ws;
        this.http = new WalletLinkHTTP_1.WalletLinkHTTP(linkAPIUrl, session.id, session.key);
      }
      /**
       * Make a connection to the server
       */
      connect() {
        if (this.destroyed) {
          throw new Error("instance is destroyed");
        }
        this.ws.connect();
      }
      /**
       * Terminate connection, and mark as destroyed. To reconnect, create a new
       * instance of WalletSDKConnection
       */
      destroy() {
        this.destroyed = true;
        this.ws.disconnect();
        this.listener = void 0;
      }
      get isDestroyed() {
        return this.destroyed;
      }
      get connected() {
        return this._connected;
      }
      set connected(connected) {
        var _a;
        this._connected = connected;
        if (connected)
          (_a = this.onceConnected) === null || _a === void 0 ? void 0 : _a.call(this);
      }
      setOnceConnected(callback) {
        return new Promise((resolve) => {
          if (this.connected) {
            callback().then(resolve);
          } else {
            this.onceConnected = () => {
              callback().then(resolve);
              this.onceConnected = void 0;
            };
          }
        });
      }
      get linked() {
        return this._linked;
      }
      set linked(linked) {
        var _a, _b;
        this._linked = linked;
        if (linked)
          (_a = this.onceLinked) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.listener) === null || _b === void 0 ? void 0 : _b.linkedUpdated(linked);
      }
      setOnceLinked(callback) {
        return new Promise((resolve) => {
          if (this.linked) {
            callback().then(resolve);
          } else {
            this.onceLinked = () => {
              callback().then(resolve);
              this.onceLinked = void 0;
            };
          }
        });
      }
      async handleIncomingEvent(m3) {
        var _a;
        if (m3.type !== "Event" || m3.event !== "Web3Response") {
          return;
        }
        {
          const decryptedData = await this.cipher.decrypt(m3.data);
          const message = JSON.parse(decryptedData);
          if (message.type !== "WEB3_RESPONSE")
            return;
          (_a = this.listener) === null || _a === void 0 ? void 0 : _a.handleWeb3ResponseMessage(message);
        }
      }
      async checkUnseenEvents() {
        if (!this.connected) {
          this.shouldFetchUnseenEventsOnConnect = true;
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 250));
        try {
          await this.fetchUnseenEventsAPI();
        } catch (e3) {
          console.error("Unable to check for unseen events", e3);
        }
      }
      async fetchUnseenEventsAPI() {
        this.shouldFetchUnseenEventsOnConnect = false;
        const responseEvents = await this.http.fetchUnseenEvents();
        responseEvents.forEach((e3) => this.handleIncomingEvent(e3));
      }
      /**
       * Set session metadata in SessionConfig object
       * @param key
       * @param value
       * @returns a Promise that completes when successful
       */
      async setSessionMetadata(key, value) {
        const message = {
          type: "SetSessionConfig",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id,
          metadata: { [key]: value }
        };
        return this.setOnceConnected(async () => {
          const res = await this.makeRequest(message);
          if (res.type === "Fail") {
            throw new Error(res.error || "failed to set session metadata");
          }
        });
      }
      /**
       * Publish an event and emit event ID when successful
       * @param event event name
       * @param unencryptedData unencrypted event data
       * @param callWebhook whether the webhook should be invoked
       * @returns a Promise that emits event ID when successful
       */
      async publishEvent(event, unencryptedData, callWebhook = false) {
        const data = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, unencryptedData), { origin: location.origin, relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk" })));
        const message = {
          type: "PublishEvent",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id,
          event,
          data,
          callWebhook
        };
        return this.setOnceLinked(async () => {
          const res = await this.makeRequest(message);
          if (res.type === "Fail") {
            throw new Error(res.error || "failed to publish event");
          }
          return res.eventId;
        });
      }
      sendData(message) {
        this.ws.sendData(JSON.stringify(message));
      }
      updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now();
      }
      heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
          this.ws.disconnect();
          return;
        }
        try {
          this.ws.sendData("h");
        } catch (_a) {
        }
      }
      async makeRequest(message, timeout = REQUEST_TIMEOUT) {
        const reqId = message.id;
        this.sendData(message);
        let timeoutId;
        return Promise.race([
          new Promise((_3, reject) => {
            timeoutId = window.setTimeout(() => {
              reject(new Error(`request ${reqId} timed out`));
            }, timeout);
          }),
          new Promise((resolve) => {
            this.requestResolutions.set(reqId, (m3) => {
              clearTimeout(timeoutId);
              resolve(m3);
              this.requestResolutions.delete(reqId);
            });
          })
        ]);
      }
      async authenticate() {
        const m3 = {
          type: "HostSession",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id,
          sessionKey: this.session.key
        };
        const res = await this.makeRequest(m3);
        if (res.type === "Fail") {
          throw new Error(res.error || "failed to authenticate");
        }
      }
      sendIsLinked() {
        const m3 = {
          type: "IsLinked",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id
        };
        this.sendData(m3);
      }
      sendGetSessionConfig() {
        const m3 = {
          type: "GetSessionConfig",
          id: (0, type_1.IntNumber)(this.nextReqId++),
          sessionId: this.session.id
        };
        this.sendData(m3);
      }
    };
    exports.WalletLinkConnection = WalletLinkConnection;
  }
});

// node_modules/sha.js/hash.js
var require_hash = __commonJS({
  "node_modules/sha.js/hash.js"(exports, module) {
    var Buffer2 = require_safe_buffer().Buffer;
    function Hash(blockSize, finalSize) {
      this._block = Buffer2.alloc(blockSize);
      this._finalSize = finalSize;
      this._blockSize = blockSize;
      this._len = 0;
    }
    Hash.prototype.update = function(data, enc) {
      if (typeof data === "string") {
        enc = enc || "utf8";
        data = Buffer2.from(data, enc);
      }
      var block = this._block;
      var blockSize = this._blockSize;
      var length = data.length;
      var accum = this._len;
      for (var offset = 0; offset < length; ) {
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);
        for (var i3 = 0; i3 < remainder; i3++) {
          block[assigned + i3] = data[offset + i3];
        }
        accum += remainder;
        offset += remainder;
        if (accum % blockSize === 0) {
          this._update(block);
        }
      }
      this._len += length;
      return this;
    };
    Hash.prototype.digest = function(enc) {
      var rem = this._len % this._blockSize;
      this._block[rem] = 128;
      this._block.fill(0, rem + 1);
      if (rem >= this._finalSize) {
        this._update(this._block);
        this._block.fill(0);
      }
      var bits = this._len * 8;
      if (bits <= 4294967295) {
        this._block.writeUInt32BE(bits, this._blockSize - 4);
      } else {
        var lowBits = (bits & 4294967295) >>> 0;
        var highBits = (bits - lowBits) / 4294967296;
        this._block.writeUInt32BE(highBits, this._blockSize - 8);
        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
      }
      this._update(this._block);
      var hash = this._hash();
      return enc ? hash.toString(enc) : hash;
    };
    Hash.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    };
    module.exports = Hash;
  }
});

// node_modules/sha.js/sha.js
var require_sha = __commonJS({
  "node_modules/sha.js/sha.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha, Hash);
    Sha.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl5(num) {
      return num << 5 | num >>> 27;
    }
    function rotl30(num) {
      return num << 30 | num >>> 2;
    }
    function ft(s3, b3, c3, d3) {
      if (s3 === 0) return b3 & c3 | ~b3 & d3;
      if (s3 === 2) return b3 & c3 | b3 & d3 | c3 & d3;
      return b3 ^ c3 ^ d3;
    }
    Sha.prototype._update = function(M2) {
      var W2 = this._w;
      var a3 = this._a | 0;
      var b3 = this._b | 0;
      var c3 = this._c | 0;
      var d3 = this._d | 0;
      var e3 = this._e | 0;
      for (var i3 = 0; i3 < 16; ++i3) W2[i3] = M2.readInt32BE(i3 * 4);
      for (; i3 < 80; ++i3) W2[i3] = W2[i3 - 3] ^ W2[i3 - 8] ^ W2[i3 - 14] ^ W2[i3 - 16];
      for (var j3 = 0; j3 < 80; ++j3) {
        var s3 = ~~(j3 / 20);
        var t3 = rotl5(a3) + ft(s3, b3, c3, d3) + e3 + W2[j3] + K[s3] | 0;
        e3 = d3;
        d3 = c3;
        c3 = rotl30(b3);
        b3 = a3;
        a3 = t3;
      }
      this._a = a3 + this._a | 0;
      this._b = b3 + this._b | 0;
      this._c = c3 + this._c | 0;
      this._d = d3 + this._d | 0;
      this._e = e3 + this._e | 0;
    };
    Sha.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(20);
      H2.writeInt32BE(this._a | 0, 0);
      H2.writeInt32BE(this._b | 0, 4);
      H2.writeInt32BE(this._c | 0, 8);
      H2.writeInt32BE(this._d | 0, 12);
      H2.writeInt32BE(this._e | 0, 16);
      return H2;
    };
    module.exports = Sha;
  }
});

// node_modules/sha.js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/sha.js/sha1.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha1() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha1, Hash);
    Sha1.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl1(num) {
      return num << 1 | num >>> 31;
    }
    function rotl5(num) {
      return num << 5 | num >>> 27;
    }
    function rotl30(num) {
      return num << 30 | num >>> 2;
    }
    function ft(s3, b3, c3, d3) {
      if (s3 === 0) return b3 & c3 | ~b3 & d3;
      if (s3 === 2) return b3 & c3 | b3 & d3 | c3 & d3;
      return b3 ^ c3 ^ d3;
    }
    Sha1.prototype._update = function(M2) {
      var W2 = this._w;
      var a3 = this._a | 0;
      var b3 = this._b | 0;
      var c3 = this._c | 0;
      var d3 = this._d | 0;
      var e3 = this._e | 0;
      for (var i3 = 0; i3 < 16; ++i3) W2[i3] = M2.readInt32BE(i3 * 4);
      for (; i3 < 80; ++i3) W2[i3] = rotl1(W2[i3 - 3] ^ W2[i3 - 8] ^ W2[i3 - 14] ^ W2[i3 - 16]);
      for (var j3 = 0; j3 < 80; ++j3) {
        var s3 = ~~(j3 / 20);
        var t3 = rotl5(a3) + ft(s3, b3, c3, d3) + e3 + W2[j3] + K[s3] | 0;
        e3 = d3;
        d3 = c3;
        c3 = rotl30(b3);
        b3 = a3;
        a3 = t3;
      }
      this._a = a3 + this._a | 0;
      this._b = b3 + this._b | 0;
      this._c = c3 + this._c | 0;
      this._d = d3 + this._d | 0;
      this._e = e3 + this._e | 0;
    };
    Sha1.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(20);
      H2.writeInt32BE(this._a | 0, 0);
      H2.writeInt32BE(this._b | 0, 4);
      H2.writeInt32BE(this._c | 0, 8);
      H2.writeInt32BE(this._d | 0, 12);
      H2.writeInt32BE(this._e | 0, 16);
      return H2;
    };
    module.exports = Sha1;
  }
});

// node_modules/sha.js/sha256.js
var require_sha256 = __commonJS({
  "node_modules/sha.js/sha256.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ];
    var W = new Array(64);
    function Sha256() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha256, Hash);
    Sha256.prototype.init = function() {
      this._a = 1779033703;
      this._b = 3144134277;
      this._c = 1013904242;
      this._d = 2773480762;
      this._e = 1359893119;
      this._f = 2600822924;
      this._g = 528734635;
      this._h = 1541459225;
      return this;
    };
    function ch(x3, y3, z3) {
      return z3 ^ x3 & (y3 ^ z3);
    }
    function maj(x3, y3, z3) {
      return x3 & y3 | z3 & (x3 | y3);
    }
    function sigma0(x3) {
      return (x3 >>> 2 | x3 << 30) ^ (x3 >>> 13 | x3 << 19) ^ (x3 >>> 22 | x3 << 10);
    }
    function sigma1(x3) {
      return (x3 >>> 6 | x3 << 26) ^ (x3 >>> 11 | x3 << 21) ^ (x3 >>> 25 | x3 << 7);
    }
    function gamma0(x3) {
      return (x3 >>> 7 | x3 << 25) ^ (x3 >>> 18 | x3 << 14) ^ x3 >>> 3;
    }
    function gamma1(x3) {
      return (x3 >>> 17 | x3 << 15) ^ (x3 >>> 19 | x3 << 13) ^ x3 >>> 10;
    }
    Sha256.prototype._update = function(M2) {
      var W2 = this._w;
      var a3 = this._a | 0;
      var b3 = this._b | 0;
      var c3 = this._c | 0;
      var d3 = this._d | 0;
      var e3 = this._e | 0;
      var f3 = this._f | 0;
      var g3 = this._g | 0;
      var h3 = this._h | 0;
      for (var i3 = 0; i3 < 16; ++i3) W2[i3] = M2.readInt32BE(i3 * 4);
      for (; i3 < 64; ++i3) W2[i3] = gamma1(W2[i3 - 2]) + W2[i3 - 7] + gamma0(W2[i3 - 15]) + W2[i3 - 16] | 0;
      for (var j3 = 0; j3 < 64; ++j3) {
        var T1 = h3 + sigma1(e3) + ch(e3, f3, g3) + K[j3] + W2[j3] | 0;
        var T22 = sigma0(a3) + maj(a3, b3, c3) | 0;
        h3 = g3;
        g3 = f3;
        f3 = e3;
        e3 = d3 + T1 | 0;
        d3 = c3;
        c3 = b3;
        b3 = a3;
        a3 = T1 + T22 | 0;
      }
      this._a = a3 + this._a | 0;
      this._b = b3 + this._b | 0;
      this._c = c3 + this._c | 0;
      this._d = d3 + this._d | 0;
      this._e = e3 + this._e | 0;
      this._f = f3 + this._f | 0;
      this._g = g3 + this._g | 0;
      this._h = h3 + this._h | 0;
    };
    Sha256.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(32);
      H2.writeInt32BE(this._a, 0);
      H2.writeInt32BE(this._b, 4);
      H2.writeInt32BE(this._c, 8);
      H2.writeInt32BE(this._d, 12);
      H2.writeInt32BE(this._e, 16);
      H2.writeInt32BE(this._f, 20);
      H2.writeInt32BE(this._g, 24);
      H2.writeInt32BE(this._h, 28);
      return H2;
    };
    module.exports = Sha256;
  }
});

// node_modules/sha.js/sha224.js
var require_sha224 = __commonJS({
  "node_modules/sha.js/sha224.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Sha256 = require_sha256();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var W = new Array(64);
    function Sha224() {
      this.init();
      this._w = W;
      Hash.call(this, 64, 56);
    }
    inherits(Sha224, Sha256);
    Sha224.prototype.init = function() {
      this._a = 3238371032;
      this._b = 914150663;
      this._c = 812702999;
      this._d = 4144912697;
      this._e = 4290775857;
      this._f = 1750603025;
      this._g = 1694076839;
      this._h = 3204075428;
      return this;
    };
    Sha224.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(28);
      H2.writeInt32BE(this._a, 0);
      H2.writeInt32BE(this._b, 4);
      H2.writeInt32BE(this._c, 8);
      H2.writeInt32BE(this._d, 12);
      H2.writeInt32BE(this._e, 16);
      H2.writeInt32BE(this._f, 20);
      H2.writeInt32BE(this._g, 24);
      return H2;
    };
    module.exports = Sha224;
  }
});

// node_modules/sha.js/sha512.js
var require_sha512 = __commonJS({
  "node_modules/sha.js/sha512.js"(exports, module) {
    var inherits = require_inherits_browser();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K = [
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ];
    var W = new Array(160);
    function Sha512() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }
    inherits(Sha512, Hash);
    Sha512.prototype.init = function() {
      this._ah = 1779033703;
      this._bh = 3144134277;
      this._ch = 1013904242;
      this._dh = 2773480762;
      this._eh = 1359893119;
      this._fh = 2600822924;
      this._gh = 528734635;
      this._hh = 1541459225;
      this._al = 4089235720;
      this._bl = 2227873595;
      this._cl = 4271175723;
      this._dl = 1595750129;
      this._el = 2917565137;
      this._fl = 725511199;
      this._gl = 4215389547;
      this._hl = 327033209;
      return this;
    };
    function Ch(x3, y3, z3) {
      return z3 ^ x3 & (y3 ^ z3);
    }
    function maj(x3, y3, z3) {
      return x3 & y3 | z3 & (x3 | y3);
    }
    function sigma0(x3, xl) {
      return (x3 >>> 28 | xl << 4) ^ (xl >>> 2 | x3 << 30) ^ (xl >>> 7 | x3 << 25);
    }
    function sigma1(x3, xl) {
      return (x3 >>> 14 | xl << 18) ^ (x3 >>> 18 | xl << 14) ^ (xl >>> 9 | x3 << 23);
    }
    function Gamma0(x3, xl) {
      return (x3 >>> 1 | xl << 31) ^ (x3 >>> 8 | xl << 24) ^ x3 >>> 7;
    }
    function Gamma0l(x3, xl) {
      return (x3 >>> 1 | xl << 31) ^ (x3 >>> 8 | xl << 24) ^ (x3 >>> 7 | xl << 25);
    }
    function Gamma1(x3, xl) {
      return (x3 >>> 19 | xl << 13) ^ (xl >>> 29 | x3 << 3) ^ x3 >>> 6;
    }
    function Gamma1l(x3, xl) {
      return (x3 >>> 19 | xl << 13) ^ (xl >>> 29 | x3 << 3) ^ (x3 >>> 6 | xl << 26);
    }
    function getCarry(a3, b3) {
      return a3 >>> 0 < b3 >>> 0 ? 1 : 0;
    }
    Sha512.prototype._update = function(M2) {
      var W2 = this._w;
      var ah = this._ah | 0;
      var bh = this._bh | 0;
      var ch = this._ch | 0;
      var dh = this._dh | 0;
      var eh = this._eh | 0;
      var fh = this._fh | 0;
      var gh = this._gh | 0;
      var hh = this._hh | 0;
      var al = this._al | 0;
      var bl = this._bl | 0;
      var cl = this._cl | 0;
      var dl = this._dl | 0;
      var el = this._el | 0;
      var fl = this._fl | 0;
      var gl = this._gl | 0;
      var hl = this._hl | 0;
      for (var i3 = 0; i3 < 32; i3 += 2) {
        W2[i3] = M2.readInt32BE(i3 * 4);
        W2[i3 + 1] = M2.readInt32BE(i3 * 4 + 4);
      }
      for (; i3 < 160; i3 += 2) {
        var xh = W2[i3 - 15 * 2];
        var xl = W2[i3 - 15 * 2 + 1];
        var gamma0 = Gamma0(xh, xl);
        var gamma0l = Gamma0l(xl, xh);
        xh = W2[i3 - 2 * 2];
        xl = W2[i3 - 2 * 2 + 1];
        var gamma1 = Gamma1(xh, xl);
        var gamma1l = Gamma1l(xl, xh);
        var Wi7h = W2[i3 - 7 * 2];
        var Wi7l = W2[i3 - 7 * 2 + 1];
        var Wi16h = W2[i3 - 16 * 2];
        var Wi16l = W2[i3 - 16 * 2 + 1];
        var Wil = gamma0l + Wi7l | 0;
        var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
        Wil = Wil + gamma1l | 0;
        Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
        Wil = Wil + Wi16l | 0;
        Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
        W2[i3] = Wih;
        W2[i3 + 1] = Wil;
      }
      for (var j3 = 0; j3 < 160; j3 += 2) {
        Wih = W2[j3];
        Wil = W2[j3 + 1];
        var majh = maj(ah, bh, ch);
        var majl = maj(al, bl, cl);
        var sigma0h = sigma0(ah, al);
        var sigma0l = sigma0(al, ah);
        var sigma1h = sigma1(eh, el);
        var sigma1l = sigma1(el, eh);
        var Kih = K[j3];
        var Kil = K[j3 + 1];
        var chh = Ch(eh, fh, gh);
        var chl = Ch(el, fl, gl);
        var t1l = hl + sigma1l | 0;
        var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
        t1l = t1l + chl | 0;
        t1h = t1h + chh + getCarry(t1l, chl) | 0;
        t1l = t1l + Kil | 0;
        t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
        t1l = t1l + Wil | 0;
        t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
        var t2l = sigma0l + majl | 0;
        var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = dl + t1l | 0;
        eh = dh + t1h + getCarry(el, dl) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = t1l + t2l | 0;
        ah = t1h + t2h + getCarry(al, t1l) | 0;
      }
      this._al = this._al + al | 0;
      this._bl = this._bl + bl | 0;
      this._cl = this._cl + cl | 0;
      this._dl = this._dl + dl | 0;
      this._el = this._el + el | 0;
      this._fl = this._fl + fl | 0;
      this._gl = this._gl + gl | 0;
      this._hl = this._hl + hl | 0;
      this._ah = this._ah + ah + getCarry(this._al, al) | 0;
      this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
      this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
      this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
      this._eh = this._eh + eh + getCarry(this._el, el) | 0;
      this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
      this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
      this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
    };
    Sha512.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(64);
      function writeInt64BE(h3, l3, offset) {
        H2.writeInt32BE(h3, offset);
        H2.writeInt32BE(l3, offset + 4);
      }
      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      writeInt64BE(this._gh, this._gl, 48);
      writeInt64BE(this._hh, this._hl, 56);
      return H2;
    };
    module.exports = Sha512;
  }
});

// node_modules/sha.js/sha384.js
var require_sha384 = __commonJS({
  "node_modules/sha.js/sha384.js"(exports, module) {
    var inherits = require_inherits_browser();
    var SHA512 = require_sha512();
    var Hash = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var W = new Array(160);
    function Sha384() {
      this.init();
      this._w = W;
      Hash.call(this, 128, 112);
    }
    inherits(Sha384, SHA512);
    Sha384.prototype.init = function() {
      this._ah = 3418070365;
      this._bh = 1654270250;
      this._ch = 2438529370;
      this._dh = 355462360;
      this._eh = 1731405415;
      this._fh = 2394180231;
      this._gh = 3675008525;
      this._hh = 1203062813;
      this._al = 3238371032;
      this._bl = 914150663;
      this._cl = 812702999;
      this._dl = 4144912697;
      this._el = 4290775857;
      this._fl = 1750603025;
      this._gl = 1694076839;
      this._hl = 3204075428;
      return this;
    };
    Sha384.prototype._hash = function() {
      var H2 = Buffer2.allocUnsafe(48);
      function writeInt64BE(h3, l3, offset) {
        H2.writeInt32BE(h3, offset);
        H2.writeInt32BE(l3, offset + 4);
      }
      writeInt64BE(this._ah, this._al, 0);
      writeInt64BE(this._bh, this._bl, 8);
      writeInt64BE(this._ch, this._cl, 16);
      writeInt64BE(this._dh, this._dl, 24);
      writeInt64BE(this._eh, this._el, 32);
      writeInt64BE(this._fh, this._fl, 40);
      return H2;
    };
    module.exports = Sha384;
  }
});

// node_modules/sha.js/index.js
var require_sha2 = __commonJS({
  "node_modules/sha.js/index.js"(exports, module) {
    var exports = module.exports = function SHA(algorithm) {
      algorithm = algorithm.toLowerCase();
      var Algorithm = exports[algorithm];
      if (!Algorithm) throw new Error(algorithm + " is not supported (we accept pull requests)");
      return new Algorithm();
    };
    exports.sha = require_sha();
    exports.sha1 = require_sha1();
    exports.sha224 = require_sha224();
    exports.sha256 = require_sha256();
    exports.sha384 = require_sha384();
    exports.sha512 = require_sha512();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/WalletLinkSession.js
var require_WalletLinkSession = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/type/WalletLinkSession.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkSession = void 0;
    var sha_js_1 = require_sha2();
    var util_1 = require_util();
    var STORAGE_KEY_SESSION_ID = "session:id";
    var STORAGE_KEY_SESSION_SECRET = "session:secret";
    var STORAGE_KEY_SESSION_LINKED = "session:linked";
    var WalletLinkSession = class _WalletLinkSession {
      constructor(storage, id, secret, linked) {
        this._storage = storage;
        this._id = id || (0, util_1.randomBytesHex)(16);
        this._secret = secret || (0, util_1.randomBytesHex)(32);
        this._key = new sha_js_1.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex");
        this._linked = !!linked;
      }
      static load(storage) {
        const id = storage.getItem(STORAGE_KEY_SESSION_ID);
        const linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
        const secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
        if (id && secret) {
          return new _WalletLinkSession(storage, id, secret, linked === "1");
        }
        return null;
      }
      get id() {
        return this._id;
      }
      get secret() {
        return this._secret;
      }
      get key() {
        return this._key;
      }
      get linked() {
        return this._linked;
      }
      set linked(val) {
        this._linked = val;
        this.persistLinked();
      }
      save() {
        this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
        this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
        this.persistLinked();
        return this;
      }
      persistLinked() {
        this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
      }
    };
    exports.WalletLinkSession = WalletLinkSession;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/util.js
var require_util4 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isDarkMode = exports.isMobileWeb = exports.getLocation = exports.createQrUrl = void 0;
    function createQrUrl(sessionId, sessionSecret, serverUrl, isParentConnection, version, chainId) {
      const sessionIdKey = isParentConnection ? "parent-id" : "id";
      const query = new URLSearchParams({
        [sessionIdKey]: sessionId,
        secret: sessionSecret,
        server: serverUrl,
        v: version,
        chainId: chainId.toString()
      }).toString();
      const qrUrl = `${serverUrl}/#/link?${query}`;
      return qrUrl;
    }
    exports.createQrUrl = createQrUrl;
    function isInIFrame() {
      try {
        return window.frameElement !== null;
      } catch (e3) {
        return false;
      }
    }
    function getLocation() {
      try {
        if (isInIFrame() && window.top) {
          return window.top.location;
        }
        return window.location;
      } catch (e3) {
        return window.location;
      }
    }
    exports.getLocation = getLocation;
    function isMobileWeb() {
      var _a;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent);
    }
    exports.isMobileWeb = isMobileWeb;
    function isDarkMode() {
      var _a, _b;
      return (_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches) !== null && _b !== void 0 ? _b : false;
    }
    exports.isDarkMode = isDarkMode;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset-css.js
var require_cssReset_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset.js
var require_cssReset = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/cssReset/cssReset.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectCssReset = void 0;
    var cssReset_css_1 = __importDefault(require_cssReset_css());
    function injectCssReset() {
      const styleEl = document.createElement("style");
      styleEl.type = "text/css";
      styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
      document.documentElement.appendChild(styleEl);
    }
    exports.injectCssReset = injectCssReset;
  }
});

// node_modules/clsx/dist/clsx.m.js
var clsx_m_exports = {};
__export(clsx_m_exports, {
  clsx: () => clsx,
  default: () => clsx_m_default
});
function r(e3) {
  var t3, f3, n2 = "";
  if ("string" == typeof e3 || "number" == typeof e3) n2 += e3;
  else if ("object" == typeof e3) if (Array.isArray(e3)) for (t3 = 0; t3 < e3.length; t3++) e3[t3] && (f3 = r(e3[t3])) && (n2 && (n2 += " "), n2 += f3);
  else for (t3 in e3) e3[t3] && (n2 && (n2 += " "), n2 += t3);
  return n2;
}
function clsx() {
  for (var e3, t3, f3 = 0, n2 = ""; f3 < arguments.length; ) (e3 = arguments[f3++]) && (t3 = r(e3)) && (n2 && (n2 += " "), n2 += t3);
  return n2;
}
var clsx_m_default;
var init_clsx_m = __esm({
  "node_modules/clsx/dist/clsx.m.js"() {
    clsx_m_default = clsx;
  }
});

// node_modules/preact/dist/preact.module.js
var preact_module_exports = {};
__export(preact_module_exports, {
  Component: () => k,
  Fragment: () => b,
  cloneElement: () => E,
  createContext: () => G,
  createElement: () => _,
  createRef: () => m,
  h: () => _,
  hydrate: () => D,
  isValidElement: () => t,
  options: () => l,
  render: () => B,
  toChildArray: () => H
});
function d(n2, l3) {
  for (var u3 in l3) n2[u3] = l3[u3];
  return n2;
}
function w(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u3, t3) {
  var i3, o3, r4, f3 = {};
  for (r4 in u3) "key" == r4 ? i3 = u3[r4] : "ref" == r4 ? o3 = u3[r4] : f3[r4] = u3[r4];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (r4 in l3.defaultProps) void 0 === f3[r4] && (f3[r4] = l3.defaultProps[r4]);
  return g(l3, f3, i3, o3, null);
}
function g(n2, t3, i3, o3, r4) {
  var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
  return null == r4 && null != l.vnode && l.vnode(f3), f3;
}
function m() {
  return { current: null };
}
function b(n2) {
  return n2.children;
}
function k(n2, l3) {
  this.props = n2, this.context = l3;
}
function x(n2, l3) {
  if (null == l3) return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
      n2.__e = n2.__c.base = u3.__e;
      break;
    }
    return C(n2);
  }
}
function S(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !M.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r2)(M);
}
function M() {
  var n2, u3, t3, o3, r4, e3, c3, s3;
  for (i.sort(f); n2 = i.shift(); ) n2.__d && (u3 = i.length, o3 = void 0, e3 = (r4 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r4, t3.__n, t3.__P.namespaceURI, 32 & r4.__u ? [e3] : null, c3, null == e3 ? x(r4) : e3, !!(32 & r4.__u), s3), o3.__v = r4.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
  M.__r = 0;
}
function P(n2, l3, u3, t3, i3, o3, r4, f3, e3, c3, s3) {
  var a3, p3, y3, d3, w3, _3 = t3 && t3.__k || v, g3 = l3.length;
  for (u3.__d = e3, $(u3, l3, _3), e3 = u3.__d, a3 = 0; a3 < g3; a3++) null != (y3 = u3.__k[a3]) && (p3 = -1 === y3.__i ? h : _3[y3.__i] || h, y3.__i = a3, O(n2, y3, p3, i3, o3, r4, f3, e3, c3, s3), d3 = y3.__e, y3.ref && p3.ref != y3.ref && (p3.ref && N(p3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 65536 & y3.__u || p3.__k === y3.__k ? e3 = I(y3, e3, n2) : "function" == typeof y3.type && void 0 !== y3.__d ? e3 = y3.__d : d3 && (e3 = d3.nextSibling), y3.__d = void 0, y3.__u &= -196609);
  u3.__d = e3, u3.__e = w3;
}
function $(n2, l3, u3) {
  var t3, i3, o3, r4, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
  for (n2.__k = [], t3 = 0; t3 < e3; t3++) null != (i3 = l3[t3]) && "boolean" != typeof i3 && "function" != typeof i3 ? (r4 = t3 + a3, (i3 = n2.__k[t3] = "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? g(null, i3, null, null, null) : y(i3) ? g(b, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? g(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3).__ = n2, i3.__b = n2.__b + 1, o3 = null, -1 !== (f3 = i3.__i = L(i3, u3, r4, s3)) && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r4 && (f3 == r4 - 1 ? a3-- : f3 == r4 + 1 ? a3++ : (f3 > r4 ? a3-- : a3++, i3.__u |= 65536))) : i3 = n2.__k[t3] = null;
  if (s3) for (t3 = 0; t3 < c3; t3++) null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
}
function I(n2, l3, u3) {
  var t3, i3;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++) t3[i3] && (t3[i3].__ = n2, l3 = I(t3[i3], l3, u3));
    return l3;
  }
  n2.__e != l3 && (l3 && n2.type && !u3.contains(l3) && (l3 = x(n2)), u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 === l3.nodeType);
  return l3;
}
function H(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
    H(n3, l3);
  }) : l3.push(n2)), l3;
}
function L(n2, l3, u3, t3) {
  var i3 = n2.key, o3 = n2.type, r4 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
  if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u)) return u3;
  if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0)) for (; r4 >= 0 || f3 < l3.length; ) {
    if (r4 >= 0) {
      if ((e3 = l3[r4]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type) return r4;
      r4--;
    }
    if (f3 < l3.length) {
      if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type) return f3;
      f3++;
    }
  }
  return -1;
}
function T(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || p.test(l3) ? u3 : u3 + "px";
}
function A(n2, l3, u3, t3, i3) {
  var o3;
  n: if ("style" === l3) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u3 && l3 in u3 || T(n2.style, l3, "");
    if (u3) for (l3 in u3) t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
  }
  else if ("o" === l3[0] && "n" === l3[1]) o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
  }
}
function F(n2) {
  return function(u3) {
    if (this.l) {
      var t3 = this.l[u3.type + n2];
      if (null == u3.t) u3.t = e++;
      else if (u3.t < t3.u) return;
      return t3(l.event ? l.event(u3) : u3);
    }
  };
}
function O(n2, u3, t3, i3, o3, r4, f3, e3, c3, s3) {
  var a3, h3, v3, p3, w3, _3, g3, m3, x3, C3, S2, M2, $2, I2, H2, L2, T3 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), r4 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
  n: if ("function" == typeof T3) try {
    if (m3 = u3.props, x3 = "prototype" in T3 && T3.prototype.render, C3 = (a3 = T3.contextType) && i3[a3.__c], S2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t3.__c ? g3 = (h3 = u3.__c = t3.__c).__ = h3.__E : (x3 ? u3.__c = h3 = new T3(m3, S2) : (u3.__c = h3 = new k(m3, S2), h3.constructor = T3, h3.render = q), C3 && C3.sub(h3), h3.props = m3, h3.state || (h3.state = {}), h3.context = S2, h3.__n = i3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), x3 && null == h3.__s && (h3.__s = h3.state), x3 && null != T3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T3.getDerivedStateFromProps(m3, h3.__s))), p3 = h3.props, w3 = h3.state, h3.__v = u3, v3) x3 && null == T3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (x3 && null == T3.getDerivedStateFromProps && m3 !== p3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m3, S2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m3, h3.__s, S2) || u3.__v === t3.__v)) {
        for (u3.__v !== t3.__v && (h3.props = m3, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
          n3 && (n3.__ = u3);
        }), M2 = 0; M2 < h3._sb.length; M2++) h3.__h.push(h3._sb[M2]);
        h3._sb = [], h3.__h.length && f3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(m3, h3.__s, S2), x3 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(p3, w3, _3);
      });
    }
    if (h3.context = S2, h3.props = m3, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x3) {
      for (h3.state = h3.__s, h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), H2 = 0; H2 < h3._sb.length; H2++) h3.__h.push(h3._sb[H2]);
      h3._sb = [];
    } else do {
      h3.__d = false, $2 && $2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++I2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), x3 && !v3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(p3, w3)), P(n2, y(L2 = null != a3 && a3.type === b && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u3, t3, i3, o3, r4, f3, e3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && f3.push(h3), g3 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u3.__v = null, c3 || null != r4) {
      for (u3.__u |= c3 ? 160 : 128; e3 && 8 === e3.nodeType && e3.nextSibling; ) e3 = e3.nextSibling;
      r4[r4.indexOf(e3)] = null, u3.__e = e3;
    } else u3.__e = t3.__e, u3.__k = t3.__k;
    l.__e(n3, u3, t3);
  }
  else null == r4 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r4, f3, c3, s3);
  (a3 = l.diffed) && a3(u3);
}
function j(n2, u3, t3) {
  u3.__d = void 0;
  for (var i3 = 0; i3 < t3.length; i3++) N(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function z(u3, t3, i3, o3, r4, f3, e3, c3, s3) {
  var a3, v3, p3, d3, _3, g3, m3, b3 = i3.props, k3 = t3.props, C3 = t3.type;
  if ("svg" === C3 ? r4 = "http://www.w3.org/2000/svg" : "math" === C3 ? r4 = "http://www.w3.org/1998/Math/MathML" : r4 || (r4 = "http://www.w3.org/1999/xhtml"), null != f3) {
    for (a3 = 0; a3 < f3.length; a3++) if ((_3 = f3[a3]) && "setAttribute" in _3 == !!C3 && (C3 ? _3.localName === C3 : 3 === _3.nodeType)) {
      u3 = _3, f3[a3] = null;
      break;
    }
  }
  if (null == u3) {
    if (null === C3) return document.createTextNode(k3);
    u3 = document.createElementNS(r4, C3, k3.is && k3), c3 && (l.__m && l.__m(t3, f3), c3 = false), f3 = null;
  }
  if (null === C3) b3 === k3 || c3 && u3.data === k3 || (u3.data = k3);
  else {
    if (f3 = f3 && n.call(u3.childNodes), b3 = i3.props || h, !c3 && null != f3) for (b3 = {}, a3 = 0; a3 < u3.attributes.length; a3++) b3[(_3 = u3.attributes[a3]).name] = _3.value;
    for (a3 in b3) if (_3 = b3[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) p3 = _3;
    else if (!(a3 in k3)) {
      if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
      A(u3, a3, null, _3, r4);
    }
    for (a3 in k3) _3 = k3[a3], "children" == a3 ? d3 = _3 : "dangerouslySetInnerHTML" == a3 ? v3 = _3 : "value" == a3 ? g3 = _3 : "checked" == a3 ? m3 = _3 : c3 && "function" != typeof _3 || b3[a3] === _3 || A(u3, a3, _3, b3[a3], r4);
    if (v3) c3 || p3 && (v3.__html === p3.__html || v3.__html === u3.innerHTML) || (u3.innerHTML = v3.__html), t3.__k = [];
    else if (p3 && (u3.innerHTML = ""), P(u3, y(d3) ? d3 : [d3], t3, i3, o3, "foreignObject" === C3 ? "http://www.w3.org/1999/xhtml" : r4, f3, e3, f3 ? f3[0] : i3.__k && x(i3, 0), c3, s3), null != f3) for (a3 = f3.length; a3--; ) w(f3[a3]);
    c3 || (a3 = "value", "progress" === C3 && null == g3 ? u3.removeAttribute("value") : void 0 !== g3 && (g3 !== u3[a3] || "progress" === C3 && !g3 || "option" === C3 && g3 !== b3[a3]) && A(u3, a3, g3, b3[a3], r4), a3 = "checked", void 0 !== m3 && m3 !== u3[a3] && A(u3, a3, m3, b3[a3], r4));
  }
  return u3;
}
function N(n2, u3, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function V(n2, u3, t3) {
  var i3, o3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (o3 = 0; o3 < i3.length; o3++) i3[o3] && V(i3[o3], u3, t3 || "function" != typeof n2.type);
  t3 || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function B(u3, t3, i3) {
  var o3, r4, f3, e3;
  l.__ && l.__(u3, t3), r4 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i3 || t3).__k = _(b, null, [u3]), r4 || h, h, t3.namespaceURI, !o3 && i3 ? [i3] : r4 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r4 ? r4.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
}
function D(n2, l3) {
  B(n2, l3, D);
}
function E(l3, u3, t3) {
  var i3, o3, r4, f3, e3 = d({}, l3.props);
  for (r4 in l3.type && l3.type.defaultProps && (f3 = l3.type.defaultProps), u3) "key" == r4 ? i3 = u3[r4] : "ref" == r4 ? o3 = u3[r4] : e3[r4] = void 0 === u3[r4] && void 0 !== f3 ? f3[r4] : u3[r4];
  return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), g(l3.type, e3, i3 || l3.key, o3 || l3.ref, null);
}
function G(n2, l3) {
  var u3 = { __c: l3 = "__cC" + a++, __: n2, Consumer: function(n3, l4) {
    return n3.children(l4);
  }, Provider: function(n3) {
    var u4, t3;
    return this.getChildContext || (u4 = /* @__PURE__ */ new Set(), (t3 = {})[l3] = this, this.getChildContext = function() {
      return t3;
    }, this.componentWillUnmount = function() {
      u4 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.forEach(function(n5) {
        n5.__e = true, S(n5);
      });
    }, this.sub = function(n4) {
      u4.add(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4 && u4.delete(n4), l4 && l4.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
var n, l, u, t, i, o, r2, f, e, c, s, a, h, v, p, y;
var init_preact_module = __esm({
  "node_modules/preact/dist/preact.module.js"() {
    h = {};
    v = [];
    p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    y = Array.isArray;
    n = v.slice, l = { __e: function(n2, l3, u3, t3) {
      for (var i3, o3, r4; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
        if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r4 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r4 = i3.__d), r4) return i3.__E = i3;
      } catch (l4) {
        n2 = l4;
      }
      throw n2;
    } }, u = 0, t = function(n2) {
      return null != n2 && null == n2.constructor;
    }, k.prototype.setState = function(n2, l3) {
      var u3;
      u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), S(this));
    }, k.prototype.forceUpdate = function(n2) {
      this.__v && (this.__e = true, n2 && this.__h.push(n2), S(this));
    }, k.prototype.render = b, i = [], r2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
      return n2.__v.__b - l3.__v.__b;
    }, M.__r = 0, e = 0, c = F(false), s = F(true), a = 0;
  }
});

// node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_exports = {};
__export(hooks_module_exports, {
  useCallback: () => q2,
  useContext: () => x2,
  useDebugValue: () => P2,
  useEffect: () => y2,
  useErrorBoundary: () => b2,
  useId: () => g2,
  useImperativeHandle: () => F2,
  useLayoutEffect: () => _2,
  useMemo: () => T2,
  useReducer: () => p2,
  useRef: () => A2,
  useState: () => h2
});
function d2(n2, t3) {
  c2.__h && c2.__h(r3, n2, o2 || t3), o2 = 0;
  var u3 = r3.__H || (r3.__H = { __: [], __h: [] });
  return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
}
function h2(n2) {
  return o2 = 1, p2(D2, n2);
}
function p2(n2, u3, i3) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r4 = o3.t(t3, n3);
    t3 !== r4 && (o3.__N = [r4, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r3, !r3.u)) {
    var f3 = function(n3, t3, r4) {
      if (!o3.__c.__H) return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      })) return !c3 || c3.call(this, n3, t3, r4);
      var i4 = false;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r4));
    };
    r3.u = true;
    var c3 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
    r3.componentWillUpdate = function(n3, t3, r4) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r4), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r4);
    }, r3.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function y2(n2, u3) {
  var i3 = d2(t2++, 3);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r3.__H.__h.push(i3));
}
function _2(n2, u3) {
  var i3 = d2(t2++, 4);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.i = u3, r3.__h.push(i3));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function F2(n2, t3, r4) {
  o2 = 6, _2(function() {
    return "function" == typeof n2 ? (n2(t3()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t3(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r4 ? r4 : r4.concat(n2));
}
function T2(n2, r4) {
  var u3 = d2(t2++, 7);
  return C2(u3.__H, r4) && (u3.__ = n2(), u3.__H = r4, u3.__h = n2), u3.__;
}
function q2(n2, t3) {
  return o2 = 8, T2(function() {
    return n2;
  }, t3);
}
function x2(n2) {
  var u3 = r3.context[n2.__c], i3 = d2(t2++, 9);
  return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r3)), u3.props.value) : n2.__;
}
function P2(n2, t3) {
  c2.useDebugValue && c2.useDebugValue(t3 ? t3(n2) : n2);
}
function b2(n2) {
  var u3 = d2(t2++, 10), i3 = h2();
  return u3.__ = n2, r3.componentDidCatch || (r3.componentDidCatch = function(n3, t3) {
    u3.__ && u3.__(n3, t3), i3[1](n3);
  }), [i3[0], function() {
    i3[1](void 0);
  }];
}
function g2() {
  var n2 = d2(t2++, 11);
  if (!n2.__) {
    for (var u3 = r3.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
    var i3 = u3.__m || (u3.__m = [0, 0]);
    n2.__ = "P" + i3[0] + "-" + i3[1]++;
  }
  return n2.__;
}
function j2() {
  for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
  } catch (t3) {
    n2.__H.__h = [], c2.__e(t3, n2.__v);
  }
}
function w2(n2) {
  var t3, r4 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r4, 100);
  k2 && (t3 = requestAnimationFrame(r4));
}
function z2(n2) {
  var t3 = r3, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r3 = t3;
}
function B2(n2) {
  var t3 = r3;
  n2.__c = n2.__(), r3 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r4) {
    return t4 !== n2[r4];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}
var t2, r3, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, k2;
var init_hooks_module = __esm({
  "node_modules/preact/hooks/dist/hooks.module.js"() {
    init_preact_module();
    o2 = 0;
    f2 = [];
    c2 = l;
    e2 = c2.__b;
    a2 = c2.__r;
    v2 = c2.diffed;
    l2 = c2.__c;
    m2 = c2.unmount;
    s2 = c2.__;
    c2.__b = function(n2) {
      r3 = null, e2 && e2(n2);
    }, c2.__ = function(n2, t3) {
      n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
    }, c2.__r = function(n2) {
      a2 && a2(n2), t2 = 0;
      var i3 = (r3 = n2.__c).__H;
      i3 && (u2 === r3 ? (i3.__h = [], r3.__h = [], i3.__.forEach(function(n3) {
        n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
      })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r3;
    }, c2.diffed = function(n2) {
      v2 && v2(n2);
      var t3 = n2.__c;
      t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
        n3.i && (n3.__H = n3.i), n3.i = void 0;
      })), u2 = r3 = null;
    }, c2.__c = function(n2, t3) {
      t3.some(function(n3) {
        try {
          n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
            return !n4.__ || B2(n4);
          });
        } catch (r4) {
          t3.some(function(n4) {
            n4.__h && (n4.__h = []);
          }), t3 = [], c2.__e(r4, n3.__v);
        }
      }), l2 && l2(n2, t3);
    }, c2.unmount = function(n2) {
      m2 && m2(n2);
      var t3, r4 = n2.__c;
      r4 && r4.__H && (r4.__H.__.forEach(function(n3) {
        try {
          z2(n3);
        } catch (n4) {
          t3 = n4;
        }
      }), r4.__H = void 0, t3 && c2.__e(t3, r4.__v));
    };
    k2 = "function" == typeof requestAnimationFrame;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar-css.js
var require_Snackbar_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar.js
var require_Snackbar = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/Snackbar/Snackbar.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SnackbarInstance = exports.SnackbarContainer = exports.Snackbar = void 0;
    var clsx_1 = __importDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var hooks_1 = (init_hooks_module(), __toCommonJS(hooks_module_exports));
    var util_1 = require_util4();
    var Snackbar_css_1 = __importDefault(require_Snackbar_css());
    var cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
    var gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
    var Snackbar = class {
      constructor() {
        this.items = /* @__PURE__ */ new Map();
        this.nextItemKey = 0;
        this.root = null;
        this.darkMode = (0, util_1.isDarkMode)();
      }
      attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-cbwsdk-snackbar-root";
        el.appendChild(this.root);
        this.render();
      }
      presentItem(itemProps) {
        const key = this.nextItemKey++;
        this.items.set(key, itemProps);
        this.render();
        return () => {
          this.items.delete(key);
          this.render();
        };
      }
      clear() {
        this.items.clear();
        this.render();
      }
      render() {
        if (!this.root) {
          return;
        }
        (0, preact_1.render)((0, preact_1.h)(
          "div",
          null,
          (0, preact_1.h)(exports.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([key, itemProps]) => (0, preact_1.h)(exports.SnackbarInstance, Object.assign({}, itemProps, { key }))))
        ), this.root);
      }
    };
    exports.Snackbar = Snackbar;
    var SnackbarContainer = (props) => (0, preact_1.h)(
      "div",
      { class: (0, clsx_1.default)("-cbwsdk-snackbar-container") },
      (0, preact_1.h)("style", null, Snackbar_css_1.default),
      (0, preact_1.h)("div", { class: "-cbwsdk-snackbar" }, props.children)
    );
    exports.SnackbarContainer = SnackbarContainer;
    var SnackbarInstance = ({ autoExpand, message, menuItems }) => {
      const [hidden, setHidden] = (0, hooks_1.useState)(true);
      const [expanded, setExpanded] = (0, hooks_1.useState)(autoExpand !== null && autoExpand !== void 0 ? autoExpand : false);
      (0, hooks_1.useEffect)(() => {
        const timers = [
          window.setTimeout(() => {
            setHidden(false);
          }, 1),
          window.setTimeout(() => {
            setExpanded(true);
          }, 1e4)
        ];
        return () => {
          timers.forEach(window.clearTimeout);
        };
      });
      const toggleExpanded = () => {
        setExpanded(!expanded);
      };
      return (0, preact_1.h)(
        "div",
        { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance", hidden && "-cbwsdk-snackbar-instance-hidden", expanded && "-cbwsdk-snackbar-instance-expanded") },
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-header", onClick: toggleExpanded },
          (0, preact_1.h)("img", { src: cblogo, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
          " ",
          (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, message),
          (0, preact_1.h)(
            "div",
            { class: "-gear-container" },
            !expanded && (0, preact_1.h)(
              "svg",
              { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
              (0, preact_1.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
            ),
            (0, preact_1.h)("img", { src: gearIcon, class: "-gear-icon", title: "Expand" })
          )
        ),
        menuItems && menuItems.length > 0 && (0, preact_1.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, menuItems.map((action, i3) => (0, preact_1.h)(
          "div",
          { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item", action.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: action.onClick, key: i3 },
          (0, preact_1.h)(
            "svg",
            { width: action.svgWidth, height: action.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, preact_1.h)("path", { "fill-rule": action.defaultFillRule, "clip-rule": action.defaultClipRule, d: action.path, fill: "#AAAAAA" })
          ),
          (0, preact_1.h)("span", { class: (0, clsx_1.default)("-cbwsdk-snackbar-instance-menu-item-info", action.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, action.info)
        )))
      );
    };
    exports.SnackbarInstance = SnackbarInstance;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WalletLinkRelayUI.js
var require_WalletLinkRelayUI = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WalletLinkRelayUI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkRelayUI = void 0;
    var cssReset_1 = require_cssReset();
    var Snackbar_1 = require_Snackbar();
    var WalletLinkRelayUI = class {
      constructor() {
        this.attached = false;
        this.snackbar = new Snackbar_1.Snackbar();
      }
      attach() {
        if (this.attached) {
          throw new Error("Coinbase Wallet SDK UI is already attached");
        }
        const el = document.documentElement;
        const container = document.createElement("div");
        container.className = "-cbwsdk-css-reset";
        el.appendChild(container);
        this.snackbar.attach(container);
        this.attached = true;
        (0, cssReset_1.injectCssReset)();
      }
      showConnecting(options) {
        let snackbarProps;
        if (options.isUnlinkedErrorState) {
          snackbarProps = {
            autoExpand: true,
            message: "Connection lost",
            menuItems: [
              {
                isRed: false,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: options.onResetConnection
              }
            ]
          };
        } else {
          snackbarProps = {
            message: "Confirm on phone",
            menuItems: [
              {
                isRed: true,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: options.onCancel
              },
              {
                isRed: false,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: options.onResetConnection
              }
            ]
          };
        }
        return this.snackbar.presentItem(snackbarProps);
      }
    };
    exports.WalletLinkRelayUI = WalletLinkRelayUI;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog-css.js
var require_RedirectDialog_css = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog-css.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = /* @__PURE__ */ (() => `.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}`)();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog.js
var require_RedirectDialog = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/components/RedirectDialog/RedirectDialog.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RedirectDialog = void 0;
    var clsx_1 = __importDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var preact_1 = (init_preact_module(), __toCommonJS(preact_module_exports));
    var cssReset_1 = require_cssReset();
    var Snackbar_1 = require_Snackbar();
    var util_1 = require_util4();
    var RedirectDialog_css_1 = __importDefault(require_RedirectDialog_css());
    var RedirectDialog = class {
      constructor() {
        this.root = null;
        this.darkMode = (0, util_1.isDarkMode)();
      }
      attach() {
        const el = document.documentElement;
        this.root = document.createElement("div");
        this.root.className = "-cbwsdk-css-reset";
        el.appendChild(this.root);
        (0, cssReset_1.injectCssReset)();
      }
      present(props) {
        this.render(props);
      }
      clear() {
        this.render(null);
      }
      render(props) {
        if (!this.root)
          return;
        (0, preact_1.render)(null, this.root);
        if (!props)
          return;
        (0, preact_1.render)((0, preact_1.h)(RedirectDialogContent, Object.assign({}, props, { onDismiss: () => {
          this.clear();
        }, darkMode: this.darkMode })), this.root);
      }
    };
    exports.RedirectDialog = RedirectDialog;
    var RedirectDialogContent = ({ title, buttonText, darkMode, onButtonClick, onDismiss }) => {
      const theme = darkMode ? "dark" : "light";
      return (0, preact_1.h)(
        Snackbar_1.SnackbarContainer,
        { darkMode },
        (0, preact_1.h)(
          "div",
          { class: "-cbwsdk-redirect-dialog" },
          (0, preact_1.h)("style", null, RedirectDialog_css_1.default),
          (0, preact_1.h)("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: onDismiss }),
          (0, preact_1.h)(
            "div",
            { class: (0, clsx_1.default)("-cbwsdk-redirect-dialog-box", theme) },
            (0, preact_1.h)("p", null, title),
            (0, preact_1.h)("button", { onClick: onButtonClick }, buttonText)
          )
        )
      );
    };
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/constants.js
var require_constants3 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CBW_MOBILE_DEEPLINK_URL = exports.WALLETLINK_URL = exports.CB_KEYS_URL = void 0;
    exports.CB_KEYS_URL = "https://keys.coinbase.com/connect";
    exports.WALLETLINK_URL = "https://www.walletlink.org";
    exports.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink";
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WLMobileRelayUI.js
var require_WLMobileRelayUI = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/ui/WLMobileRelayUI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WLMobileRelayUI = void 0;
    var RedirectDialog_1 = require_RedirectDialog();
    var util_1 = require_util4();
    var constants_1 = require_constants3();
    var WLMobileRelayUI = class {
      constructor() {
        this.attached = false;
        this.redirectDialog = new RedirectDialog_1.RedirectDialog();
      }
      attach() {
        if (this.attached) {
          throw new Error("Coinbase Wallet SDK UI is already attached");
        }
        this.redirectDialog.attach();
        this.attached = true;
      }
      redirectToCoinbaseWallet(walletLinkUrl) {
        const url = new URL(constants_1.CBW_MOBILE_DEEPLINK_URL);
        url.searchParams.append("redirect_url", (0, util_1.getLocation)().href);
        if (walletLinkUrl) {
          url.searchParams.append("wl_url", walletLinkUrl);
        }
        const anchorTag = document.createElement("a");
        anchorTag.target = "cbw-opener";
        anchorTag.href = url.href;
        anchorTag.rel = "noreferrer noopener";
        anchorTag.click();
      }
      openCoinbaseWalletDeeplink(walletLinkUrl) {
        this.redirectDialog.present({
          title: "Redirecting to Coinbase Wallet...",
          buttonText: "Open",
          onButtonClick: () => {
            this.redirectToCoinbaseWallet(walletLinkUrl);
          }
        });
        setTimeout(() => {
          this.redirectToCoinbaseWallet(walletLinkUrl);
        }, 99);
      }
      showConnecting(_options) {
        return () => {
          this.redirectDialog.clear();
        };
      }
    };
    exports.WLMobileRelayUI = WLMobileRelayUI;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/WalletLinkRelay.js
var require_WalletLinkRelay = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/relay/WalletLinkRelay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkRelay = void 0;
    var WalletLinkConnection_1 = require_WalletLinkConnection();
    var constants_1 = require_constants2();
    var RelayEventManager_1 = require_RelayEventManager();
    var WalletLinkSession_1 = require_WalletLinkSession();
    var Web3Response_1 = require_Web3Response();
    var util_1 = require_util4();
    var WalletLinkRelayUI_1 = require_WalletLinkRelayUI();
    var WLMobileRelayUI_1 = require_WLMobileRelayUI();
    var error_1 = require_error();
    var util_2 = require_util();
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var WalletLinkRelay = class _WalletLinkRelay {
      constructor(options) {
        this.accountsCallback = null;
        this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" };
        this.chainCallback = null;
        this.dappDefaultChain = 1;
        this.isMobileWeb = (0, util_1.isMobileWeb)();
        this.appName = "";
        this.appLogoUrl = null;
        this.linkedUpdated = (linked) => {
          this.isLinked = linked;
          const cachedAddresses = this.storage.getItem(constants_1.LOCAL_STORAGE_ADDRESSES_KEY);
          if (linked) {
            this._session.linked = linked;
          }
          this.isUnlinkedErrorState = false;
          if (cachedAddresses) {
            const addresses = cachedAddresses.split(" ");
            const wasConnectedViaStandalone = this.storage.getItem("IsStandaloneSigning") === "true";
            if (addresses[0] !== "" && !linked && this._session.linked && !wasConnectedViaStandalone) {
              this.isUnlinkedErrorState = true;
            }
          }
        };
        this.metadataUpdated = (key, value) => {
          this.storage.setItem(key, value);
        };
        this.chainUpdated = (chainId, jsonRpcUrl) => {
          if (this.chainCallbackParams.chainId === chainId && this.chainCallbackParams.jsonRpcUrl === jsonRpcUrl) {
            return;
          }
          this.chainCallbackParams = {
            chainId,
            jsonRpcUrl
          };
          if (this.chainCallback) {
            this.chainCallback(chainId, jsonRpcUrl);
          }
        };
        this.accountUpdated = (selectedAddress) => {
          if (this.accountsCallback) {
            this.accountsCallback([selectedAddress]);
          }
          if (_WalletLinkRelay.accountRequestCallbackIds.size > 0) {
            Array.from(_WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id) => {
              const message = {
                type: "WEB3_RESPONSE",
                id,
                response: {
                  method: "requestEthereumAccounts",
                  result: [selectedAddress]
                }
              };
              this.invokeCallback(Object.assign(Object.assign({}, message), { id }));
            });
            _WalletLinkRelay.accountRequestCallbackIds.clear();
          }
        };
        this.resetAndReload = this.resetAndReload.bind(this);
        this.linkAPIUrl = options.linkAPIUrl;
        this.storage = options.storage;
        const { session, ui, connection } = this.subscribe();
        this._session = session;
        this.connection = connection;
        this.relayEventManager = new RelayEventManager_1.RelayEventManager();
        this.ui = ui;
      }
      subscribe() {
        const session = WalletLinkSession_1.WalletLinkSession.load(this.storage) || new WalletLinkSession_1.WalletLinkSession(this.storage).save();
        const { linkAPIUrl } = this;
        const connection = new WalletLinkConnection_1.WalletLinkConnection({
          session,
          linkAPIUrl,
          listener: this
        });
        const ui = this.isMobileWeb ? new WLMobileRelayUI_1.WLMobileRelayUI() : new WalletLinkRelayUI_1.WalletLinkRelayUI();
        connection.connect();
        return { session, ui, connection };
      }
      attachUI() {
        this.ui.attach();
      }
      resetAndReload() {
        Promise.race([
          this.connection.setSessionMetadata("__destroyed", "1"),
          new Promise((resolve) => setTimeout(() => resolve(null), 1e3))
        ]).then(() => {
          this.connection.destroy();
          const storedSession = WalletLinkSession_1.WalletLinkSession.load(this.storage);
          if ((storedSession === null || storedSession === void 0 ? void 0 : storedSession.id) === this._session.id) {
            ScopedLocalStorage_1.ScopedLocalStorage.clearAll();
          }
          document.location.reload();
        }).catch((_3) => {
        });
      }
      setAppInfo(appName, appLogoUrl) {
        this.appName = appName;
        this.appLogoUrl = appLogoUrl;
      }
      getStorageItem(key) {
        return this.storage.getItem(key);
      }
      setStorageItem(key, value) {
        this.storage.setItem(key, value);
      }
      signEthereumMessage(message, address, addPrefix, typedDataJson) {
        return this.sendRequest({
          method: "signEthereumMessage",
          params: {
            message: (0, util_2.hexStringFromBuffer)(message, true),
            address,
            addPrefix,
            typedDataJson: typedDataJson || null
          }
        });
      }
      ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        return this.sendRequest({
          method: "ethereumAddressFromSignedMessage",
          params: {
            message: (0, util_2.hexStringFromBuffer)(message, true),
            signature: (0, util_2.hexStringFromBuffer)(signature, true),
            addPrefix
          }
        });
      }
      signEthereumTransaction(params) {
        return this.sendRequest({
          method: "signEthereumTransaction",
          params: {
            fromAddress: params.fromAddress,
            toAddress: params.toAddress,
            weiValue: (0, util_2.bigIntStringFromBigInt)(params.weiValue),
            data: (0, util_2.hexStringFromBuffer)(params.data, true),
            nonce: params.nonce,
            gasPriceInWei: params.gasPriceInWei ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
            maxFeePerGas: params.gasPriceInWei ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
            maxPriorityFeePerGas: params.gasPriceInWei ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
            gasLimit: params.gasLimit ? (0, util_2.bigIntStringFromBigInt)(params.gasLimit) : null,
            chainId: params.chainId,
            shouldSubmit: false
          }
        });
      }
      signAndSubmitEthereumTransaction(params) {
        return this.sendRequest({
          method: "signEthereumTransaction",
          params: {
            fromAddress: params.fromAddress,
            toAddress: params.toAddress,
            weiValue: (0, util_2.bigIntStringFromBigInt)(params.weiValue),
            data: (0, util_2.hexStringFromBuffer)(params.data, true),
            nonce: params.nonce,
            gasPriceInWei: params.gasPriceInWei ? (0, util_2.bigIntStringFromBigInt)(params.gasPriceInWei) : null,
            maxFeePerGas: params.maxFeePerGas ? (0, util_2.bigIntStringFromBigInt)(params.maxFeePerGas) : null,
            maxPriorityFeePerGas: params.maxPriorityFeePerGas ? (0, util_2.bigIntStringFromBigInt)(params.maxPriorityFeePerGas) : null,
            gasLimit: params.gasLimit ? (0, util_2.bigIntStringFromBigInt)(params.gasLimit) : null,
            chainId: params.chainId,
            shouldSubmit: true
          }
        });
      }
      submitEthereumTransaction(signedTransaction, chainId) {
        return this.sendRequest({
          method: "submitEthereumTransaction",
          params: {
            signedTransaction: (0, util_2.hexStringFromBuffer)(signedTransaction, true),
            chainId
          }
        });
      }
      scanQRCode(regExp) {
        return this.sendRequest({
          method: "scanQRCode",
          params: {
            regExp
          }
        });
      }
      getWalletLinkSession() {
        return this._session;
      }
      genericRequest(data, action) {
        return this.sendRequest({
          method: "generic",
          params: {
            action,
            data
          }
        });
      }
      sendGenericMessage(request) {
        return this.sendRequest(request);
      }
      sendRequest(request) {
        let hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        return new Promise((resolve, reject) => {
          {
            hideSnackbarItem = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: cancel,
              onResetConnection: this.resetAndReload
              // eslint-disable-line @typescript-eslint/unbound-method
            });
          }
          this.relayEventManager.callbacks.set(id, (response) => {
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          this.publishWeb3RequestEvent(id, request);
        });
      }
      setAccountsCallback(accountsCallback) {
        this.accountsCallback = accountsCallback;
      }
      setChainCallback(chainCallback) {
        this.chainCallback = chainCallback;
      }
      setDappDefaultChainCallback(chainId) {
        this.dappDefaultChain = chainId;
      }
      publishWeb3RequestEvent(id, request) {
        const message = { type: "WEB3_REQUEST", id, request };
        this.publishEvent("Web3Request", message, true).then((_3) => {
        }).catch((err) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: message.id,
            response: {
              method: request.method,
              errorMessage: err.message
            }
          });
        });
        if (this.isMobileWeb) {
          this.openCoinbaseWalletDeeplink(request.method);
        }
      }
      // copied from MobileRelay
      openCoinbaseWalletDeeplink(method) {
        if (!(this.ui instanceof WLMobileRelayUI_1.WLMobileRelayUI))
          return;
        switch (method) {
          case "requestEthereumAccounts":
          case "switchEthereumChain":
            return;
          default:
            window.addEventListener("blur", () => {
              window.addEventListener("focus", () => {
                this.connection.checkUnseenEvents();
              }, { once: true });
            }, { once: true });
            this.ui.openCoinbaseWalletDeeplink();
            break;
        }
      }
      publishWeb3RequestCanceledEvent(id) {
        const message = {
          type: "WEB3_REQUEST_CANCELED",
          id
        };
        this.publishEvent("Web3RequestCanceled", message, false).then();
      }
      publishEvent(event, message, callWebhook) {
        return this.connection.publishEvent(event, message, callWebhook);
      }
      handleWeb3ResponseMessage(message) {
        const { response } = message;
        if (response.method === "requestEthereumAccounts") {
          _WalletLinkRelay.accountRequestCallbackIds.forEach((id) => this.invokeCallback(Object.assign(Object.assign({}, message), { id })));
          _WalletLinkRelay.accountRequestCallbackIds.clear();
          return;
        }
        this.invokeCallback(message);
      }
      handleErrorResponse(id, method, error) {
        var _a;
        const errorMessage = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "Unspecified error message.";
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id,
          response: {
            method,
            errorMessage
          }
        });
      }
      invokeCallback(message) {
        const callback = this.relayEventManager.callbacks.get(message.id);
        if (callback) {
          callback(message.response);
          this.relayEventManager.callbacks.delete(message.id);
        }
      }
      requestEthereumAccounts() {
        const request = {
          method: "requestEthereumAccounts",
          params: {
            appName: this.appName,
            appLogoUrl: this.appLogoUrl || null
          }
        };
        const hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        return new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          _WalletLinkRelay.accountRequestCallbackIds.add(id);
          this.publishWeb3RequestEvent(id, request);
        });
      }
      watchAsset(type, address, symbol, decimals, image, chainId) {
        const request = {
          method: "watchAsset",
          params: {
            type,
            options: {
              address,
              symbol,
              decimals,
              image
            },
            chainId
          }
        };
        let hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        {
          hideSnackbarItem = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: cancel,
            onResetConnection: this.resetAndReload
            // eslint-disable-line @typescript-eslint/unbound-method
          });
        }
        return new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          this.publishWeb3RequestEvent(id, request);
        });
      }
      addEthereumChain(chainId, rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency) {
        const request = {
          method: "addEthereumChain",
          params: {
            chainId,
            rpcUrls,
            blockExplorerUrls,
            chainName,
            iconUrls,
            nativeCurrency
          }
        };
        let hideSnackbarItem = null;
        const id = (0, util_2.randomBytesHex)(8);
        const cancel = (error) => {
          this.publishWeb3RequestCanceledEvent(id);
          this.handleErrorResponse(id, request.method, error);
          hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
        };
        {
          hideSnackbarItem = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: cancel,
            onResetConnection: this.resetAndReload
            // eslint-disable-line @typescript-eslint/unbound-method
          });
        }
        return new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            hideSnackbarItem === null || hideSnackbarItem === void 0 ? void 0 : hideSnackbarItem();
            if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          this.publishWeb3RequestEvent(id, request);
        });
      }
      switchEthereumChain(chainId, address) {
        const request = {
          method: "switchEthereumChain",
          params: Object.assign({ chainId }, { address })
        };
        const id = (0, util_2.randomBytesHex)(8);
        return new Promise((resolve, reject) => {
          this.relayEventManager.callbacks.set(id, (response) => {
            if ((0, Web3Response_1.isErrorResponse)(response) && response.errorCode) {
              return reject(error_1.standardErrors.provider.custom({
                code: response.errorCode,
                message: `Unrecognized chain ID. Try adding the chain using addEthereumChain first.`
              }));
            } else if ((0, Web3Response_1.isErrorResponse)(response)) {
              return reject(new Error(response.errorMessage));
            }
            resolve(response);
          });
          this.publishWeb3RequestEvent(id, request);
        });
      }
    };
    exports.WalletLinkRelay = WalletLinkRelay;
    WalletLinkRelay.accountRequestCallbackIds = /* @__PURE__ */ new Set();
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/WalletLinkSigner.js
var require_WalletLinkSigner = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/walletlink/WalletLinkSigner.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WalletLinkSigner = void 0;
    var eth_eip712_util_1 = __importDefault(require_eth_eip712_util());
    var constants_1 = require_constants2();
    var RelayEventManager_1 = require_RelayEventManager();
    var Web3Response_1 = require_Web3Response();
    var WalletLinkRelay_1 = require_WalletLinkRelay();
    var constants_2 = require_constants3();
    var error_1 = require_error();
    var util_1 = require_util();
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
    var DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
    var WalletLinkSigner = class {
      constructor(options) {
        var _a, _b;
        this._relay = null;
        this._addresses = [];
        this.hasMadeFirstChainChangedEmission = false;
        const { appName, appLogoUrl } = options.metadata;
        this._appName = appName;
        this._appLogoUrl = appLogoUrl;
        this._storage = new ScopedLocalStorage_1.ScopedLocalStorage("walletlink", constants_2.WALLETLINK_URL);
        this.updateListener = options.updateListener;
        this._relayEventManager = new RelayEventManager_1.RelayEventManager();
        this._jsonRpcUrlFromOpts = "";
        const cachedAddresses = this._storage.getItem(constants_1.LOCAL_STORAGE_ADDRESSES_KEY);
        if (cachedAddresses) {
          const addresses = cachedAddresses.split(" ");
          if (addresses[0] !== "") {
            this._addresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
            (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onAccountsUpdate({
              accounts: this._addresses,
              source: "storage"
            });
          }
        }
        const cachedChainId = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
        if (cachedChainId) {
          (_b = this.updateListener) === null || _b === void 0 ? void 0 : _b.onChainUpdate({
            chain: {
              id: this.getChainId(),
              rpcUrl: this.jsonRpcUrl
            },
            source: "storage"
          });
          this.hasMadeFirstChainChangedEmission = true;
        }
        this.initializeRelay();
      }
      getSession() {
        const relay = this.initializeRelay();
        const { id, secret } = relay.getWalletLinkSession();
        return { id, secret };
      }
      async handshake() {
        const ethAddresses = await this.request({ method: "eth_requestAccounts" });
        return ethAddresses;
      }
      get selectedAddress() {
        return this._addresses[0] || void 0;
      }
      get jsonRpcUrl() {
        var _a;
        return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts;
      }
      set jsonRpcUrl(value) {
        this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
      }
      updateProviderInfo(jsonRpcUrl, chainId) {
        var _a;
        this.jsonRpcUrl = jsonRpcUrl;
        const originalChainId = this.getChainId();
        this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
        const chainChanged = (0, util_1.ensureIntNumber)(chainId) !== originalChainId;
        if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
          (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onChainUpdate({
            chain: { id: chainId, rpcUrl: jsonRpcUrl },
            source: "wallet"
          });
          this.hasMadeFirstChainChangedEmission = true;
        }
      }
      async watchAsset(type, address, symbol, decimals, image, chainId) {
        const relay = this.initializeRelay();
        const result = await relay.watchAsset(type, address, symbol, decimals, image, chainId === null || chainId === void 0 ? void 0 : chainId.toString());
        if ((0, Web3Response_1.isErrorResponse)(result))
          return false;
        return !!result.result;
      }
      async addEthereumChain(chainId, rpcUrls, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
        var _a, _b;
        if ((0, util_1.ensureIntNumber)(chainId) === this.getChainId()) {
          return false;
        }
        const relay = this.initializeRelay();
        if (!this._isAuthorized()) {
          await relay.requestEthereumAccounts();
        }
        const res = await relay.addEthereumChain(chainId.toString(), rpcUrls, iconUrls, blockExplorerUrls, chainName, nativeCurrency);
        if ((0, Web3Response_1.isErrorResponse)(res))
          return false;
        if (((_a = res.result) === null || _a === void 0 ? void 0 : _a.isApproved) === true) {
          this.updateProviderInfo(rpcUrls[0], chainId);
        }
        return ((_b = res.result) === null || _b === void 0 ? void 0 : _b.isApproved) === true;
      }
      async switchEthereumChain(chainId) {
        const relay = this.initializeRelay();
        const res = await relay.switchEthereumChain(chainId.toString(10), this.selectedAddress || void 0);
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          if (!res.errorCode)
            return;
          if (res.errorCode === error_1.standardErrorCodes.provider.unsupportedChain) {
            throw error_1.standardErrors.provider.unsupportedChain();
          } else {
            throw error_1.standardErrors.provider.custom({
              message: res.errorMessage,
              code: res.errorCode
            });
          }
        }
        const switchResponse = res.result;
        if (switchResponse.isApproved && switchResponse.rpcUrl.length > 0) {
          this.updateProviderInfo(switchResponse.rpcUrl, chainId);
        }
      }
      async disconnect() {
        if (this._relay) {
          this._relay.resetAndReload();
        }
        this._storage.clear();
      }
      async request(args) {
        try {
          return this._request(args).catch((error) => {
            throw error;
          });
        } catch (error) {
          return Promise.reject(error);
        }
      }
      async _request(args) {
        if (!args || typeof args !== "object" || Array.isArray(args)) {
          throw error_1.standardErrors.rpc.invalidRequest({
            message: "Expected a single, non-array, object argument.",
            data: args
          });
        }
        const { method, params } = args;
        if (typeof method !== "string" || method.length === 0) {
          throw error_1.standardErrors.rpc.invalidRequest({
            message: "'args.method' must be a non-empty string.",
            data: args
          });
        }
        if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
          throw error_1.standardErrors.rpc.invalidRequest({
            message: "'args.params' must be an object or array if provided.",
            data: args
          });
        }
        const newParams = params === void 0 ? [] : params;
        const id = this._relayEventManager.makeRequestId();
        const result = await this._sendRequestAsync({
          method,
          params: newParams,
          jsonrpc: "2.0",
          id
        });
        return result.result;
      }
      _setAddresses(addresses, _3) {
        var _a;
        if (!Array.isArray(addresses)) {
          throw new Error("addresses is not an array");
        }
        const newAddresses = addresses.map((address) => (0, util_1.ensureAddressString)(address));
        if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) {
          return;
        }
        this._addresses = newAddresses;
        (_a = this.updateListener) === null || _a === void 0 ? void 0 : _a.onAccountsUpdate({
          accounts: newAddresses,
          source: "wallet"
        });
        this._storage.setItem(constants_1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
      }
      _sendRequestAsync(request) {
        return new Promise((resolve, reject) => {
          try {
            const syncResult = this._handleSynchronousMethods(request);
            if (syncResult !== void 0) {
              return resolve({
                jsonrpc: "2.0",
                id: request.id,
                result: syncResult
              });
            }
          } catch (err) {
            return reject(err);
          }
          this._handleAsynchronousMethods(request).then((res) => res && resolve(Object.assign(Object.assign({}, res), { id: request.id }))).catch((err) => reject(err));
        });
      }
      _handleSynchronousMethods(request) {
        const { method } = request;
        switch (method) {
          case "eth_accounts":
            return this._eth_accounts();
          case "eth_coinbase":
            return this._eth_coinbase();
          case "net_version":
            return this._net_version();
          case "eth_chainId":
            return this._eth_chainId();
          default:
            return void 0;
        }
      }
      async _handleAsynchronousMethods(request) {
        const { method } = request;
        const params = request.params || [];
        switch (method) {
          case "eth_requestAccounts":
            return this._eth_requestAccounts();
          case "eth_sign":
            return this._eth_sign(params);
          case "eth_ecRecover":
            return this._eth_ecRecover(params);
          case "personal_sign":
            return this._personal_sign(params);
          case "personal_ecRecover":
            return this._personal_ecRecover(params);
          case "eth_signTransaction":
            return this._eth_signTransaction(params);
          case "eth_sendRawTransaction":
            return this._eth_sendRawTransaction(params);
          case "eth_sendTransaction":
            return this._eth_sendTransaction(params);
          case "eth_signTypedData_v1":
            return this._eth_signTypedData_v1(params);
          case "eth_signTypedData_v2":
            return this._throwUnsupportedMethodError();
          case "eth_signTypedData_v3":
            return this._eth_signTypedData_v3(params);
          case "eth_signTypedData_v4":
          case "eth_signTypedData":
            return this._eth_signTypedData_v4(params);
          case "wallet_addEthereumChain":
            return this._wallet_addEthereumChain(params);
          case "wallet_switchEthereumChain":
            return this._wallet_switchEthereumChain(params);
          case "wallet_watchAsset":
            return this._wallet_watchAsset(params);
          default:
            return this._throwUnsupportedMethodError();
        }
      }
      _isKnownAddress(addressString) {
        try {
          const addressStr = (0, util_1.ensureAddressString)(addressString);
          const lowercaseAddresses = this._addresses.map((address) => (0, util_1.ensureAddressString)(address));
          return lowercaseAddresses.includes(addressStr);
        } catch (_a) {
        }
        return false;
      }
      _ensureKnownAddress(addressString) {
        if (!this._isKnownAddress(addressString)) {
          throw new Error("Unknown Ethereum address");
        }
      }
      _prepareTransactionParams(tx) {
        const fromAddress = tx.from ? (0, util_1.ensureAddressString)(tx.from) : this.selectedAddress;
        if (!fromAddress) {
          throw new Error("Ethereum address is unavailable");
        }
        this._ensureKnownAddress(fromAddress);
        const toAddress = tx.to ? (0, util_1.ensureAddressString)(tx.to) : null;
        const weiValue = tx.value != null ? (0, util_1.ensureBigInt)(tx.value) : BigInt(0);
        const data = tx.data ? (0, util_1.ensureBuffer)(tx.data) : Buffer.alloc(0);
        const nonce = tx.nonce != null ? (0, util_1.ensureIntNumber)(tx.nonce) : null;
        const gasPriceInWei = tx.gasPrice != null ? (0, util_1.ensureBigInt)(tx.gasPrice) : null;
        const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1.ensureBigInt)(tx.maxFeePerGas) : null;
        const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? (0, util_1.ensureBigInt)(tx.maxPriorityFeePerGas) : null;
        const gasLimit = tx.gas != null ? (0, util_1.ensureBigInt)(tx.gas) : null;
        const chainId = tx.chainId ? (0, util_1.ensureIntNumber)(tx.chainId) : this.getChainId();
        return {
          fromAddress,
          toAddress,
          weiValue,
          data,
          nonce,
          gasPriceInWei,
          maxFeePerGas,
          maxPriorityFeePerGas,
          gasLimit,
          chainId
        };
      }
      _isAuthorized() {
        return this._addresses.length > 0;
      }
      _requireAuthorization() {
        if (!this._isAuthorized()) {
          throw error_1.standardErrors.provider.unauthorized({});
        }
      }
      _throwUnsupportedMethodError() {
        throw error_1.standardErrors.provider.unsupportedMethod({});
      }
      async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
        this._ensureKnownAddress(address);
        try {
          const relay = this.initializeRelay();
          const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson);
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
          return { jsonrpc: "2.0", id: 0, result: res.result };
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied message signature");
          }
          throw err;
        }
      }
      async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        const relay = this.initializeRelay();
        const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix);
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
        return { jsonrpc: "2.0", id: 0, result: res.result };
      }
      _eth_accounts() {
        return [...this._addresses];
      }
      _eth_coinbase() {
        return this.selectedAddress || null;
      }
      _net_version() {
        return this.getChainId().toString(10);
      }
      _eth_chainId() {
        return (0, util_1.hexStringFromIntNumber)(this.getChainId());
      }
      getChainId() {
        const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY);
        if (!chainIdStr) {
          return (0, util_1.ensureIntNumber)(1);
        }
        const chainId = parseInt(chainIdStr, 10);
        return (0, util_1.ensureIntNumber)(chainId);
      }
      async _eth_requestAccounts() {
        if (this._isAuthorized()) {
          return Promise.resolve({
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
          });
        }
        let res;
        try {
          const relay = this.initializeRelay();
          res = await relay.requestEthereumAccounts();
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied account authorization");
          }
          throw err;
        }
        if (!res.result) {
          throw new Error("accounts received is empty");
        }
        this._setAddresses(res.result);
        return { jsonrpc: "2.0", id: 0, result: this._addresses };
      }
      _eth_sign(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const message = (0, util_1.ensureBuffer)(params[1]);
        return this._signEthereumMessage(message, address, false);
      }
      _eth_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, false);
      }
      _personal_sign(params) {
        this._requireAuthorization();
        const message = (0, util_1.ensureBuffer)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        return this._signEthereumMessage(message, address, true);
      }
      _personal_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, true);
      }
      async _eth_signTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
          const relay = this.initializeRelay();
          const res = await relay.signEthereumTransaction(tx);
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
          return { jsonrpc: "2.0", id: 0, result: res.result };
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
          }
          throw err;
        }
      }
      async _eth_sendRawTransaction(params) {
        const signedTransaction = (0, util_1.ensureBuffer)(params[0]);
        const relay = this.initializeRelay();
        const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId());
        if ((0, Web3Response_1.isErrorResponse)(res)) {
          throw new Error(res.errorMessage);
        }
        return { jsonrpc: "2.0", id: 0, result: res.result };
      }
      async _eth_sendTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
          const relay = this.initializeRelay();
          const res = await relay.signAndSubmitEthereumTransaction(tx);
          if ((0, Web3Response_1.isErrorResponse)(res)) {
            throw new Error(res.errorMessage);
          }
          return { jsonrpc: "2.0", id: 0, result: res.result };
        } catch (err) {
          if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) {
            throw error_1.standardErrors.provider.userRejectedRequest("User denied transaction signature");
          }
          throw err;
        }
      }
      async _eth_signTypedData_v1(params) {
        this._requireAuthorization();
        const typedData = (0, util_1.ensureParsedJSONObject)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
      }
      async _eth_signTypedData_v3(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v3({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
      }
      async _eth_signTypedData_v4(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v4({ data: typedData });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
      }
      async _wallet_addEthereumChain(params) {
        var _a, _b, _c, _d;
        const request = params[0];
        if (((_a = request.rpcUrls) === null || _a === void 0 ? void 0 : _a.length) === 0) {
          return {
            jsonrpc: "2.0",
            id: 0,
            error: { code: 2, message: `please pass in at least 1 rpcUrl` }
          };
        }
        if (!request.chainName || request.chainName.trim() === "") {
          throw error_1.standardErrors.rpc.invalidParams("chainName is a required field");
        }
        if (!request.nativeCurrency) {
          throw error_1.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
        }
        const chainIdNumber = parseInt(request.chainId, 16);
        const success = await this.addEthereumChain(chainIdNumber, (_b = request.rpcUrls) !== null && _b !== void 0 ? _b : [], (_c = request.blockExplorerUrls) !== null && _c !== void 0 ? _c : [], request.chainName, (_d = request.iconUrls) !== null && _d !== void 0 ? _d : [], request.nativeCurrency);
        if (success) {
          return { jsonrpc: "2.0", id: 0, result: null };
        }
        return {
          jsonrpc: "2.0",
          id: 0,
          error: { code: 2, message: `unable to add ethereum chain` }
        };
      }
      async _wallet_switchEthereumChain(params) {
        const request = params[0];
        await this.switchEthereumChain(parseInt(request.chainId, 16));
        return { jsonrpc: "2.0", id: 0, result: null };
      }
      async _wallet_watchAsset(params) {
        const request = Array.isArray(params) ? params[0] : params;
        if (!request.type) {
          throw error_1.standardErrors.rpc.invalidParams("Type is required");
        }
        if ((request === null || request === void 0 ? void 0 : request.type) !== "ERC20") {
          throw error_1.standardErrors.rpc.invalidParams(`Asset of type '${request.type}' is not supported`);
        }
        if (!(request === null || request === void 0 ? void 0 : request.options)) {
          throw error_1.standardErrors.rpc.invalidParams("Options are required");
        }
        if (!(request === null || request === void 0 ? void 0 : request.options.address)) {
          throw error_1.standardErrors.rpc.invalidParams("Address is required");
        }
        const chainId = this.getChainId();
        const { address, symbol, image, decimals } = request.options;
        const res = await this.watchAsset(request.type, address, symbol, decimals, image, chainId);
        return { jsonrpc: "2.0", id: 0, result: res };
      }
      initializeRelay() {
        if (!this._relay) {
          const relay = new WalletLinkRelay_1.WalletLinkRelay({
            linkAPIUrl: constants_2.WALLETLINK_URL,
            storage: this._storage
          });
          relay.setAppInfo(this._appName, this._appLogoUrl);
          relay.attachUI();
          relay.setAccountsCallback((accounts, isDisconnect) => this._setAddresses(accounts, isDisconnect));
          relay.setChainCallback((chainId, jsonRpcUrl) => {
            this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10));
          });
          this._relay = relay;
        }
        return this._relay;
      }
    };
    exports.WalletLinkSigner = WalletLinkSigner;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/util/provider.js
var require_provider = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/util/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkErrorForInvalidRequestArgs = exports.getCoinbaseInjectedProvider = exports.getCoinbaseInjectedSigner = exports.fetchRPCRequest = void 0;
    var version_1 = require_version();
    var error_1 = require_error();
    async function fetchRPCRequest(request, chain) {
      if (!chain.rpcUrl)
        throw error_1.standardErrors.rpc.internal("No RPC URL set for chain");
      const requestBody = Object.assign(Object.assign({}, request), { jsonrpc: "2.0", id: crypto.randomUUID() });
      const res = await window.fetch(chain.rpcUrl, {
        method: "POST",
        body: JSON.stringify(requestBody),
        mode: "cors",
        headers: { "Content-Type": "application/json", "X-Cbw-Sdk-Version": version_1.LIB_VERSION }
      });
      const response = await res.json();
      return response.result;
    }
    exports.fetchRPCRequest = fetchRPCRequest;
    function getCoinbaseInjectedSigner() {
      const window2 = globalThis;
      return window2.coinbaseWalletSigner;
    }
    exports.getCoinbaseInjectedSigner = getCoinbaseInjectedSigner;
    function getCoinbaseInjectedProvider({ metadata, preference }) {
      var _a, _b, _c;
      const window2 = globalThis;
      if (preference.options !== "smartWalletOnly") {
        const signer = getCoinbaseInjectedSigner();
        if (signer)
          return void 0;
        const extension = window2.coinbaseWalletExtension;
        if (extension) {
          const { appName, appLogoUrl, appChainIds } = metadata;
          (_a = extension.setAppInfo) === null || _a === void 0 ? void 0 : _a.call(extension, appName, appLogoUrl, appChainIds);
          return extension;
        }
      }
      const ethereum = (_b = window2.ethereum) !== null && _b !== void 0 ? _b : (_c = window2.top) === null || _c === void 0 ? void 0 : _c.ethereum;
      if (ethereum === null || ethereum === void 0 ? void 0 : ethereum.isCoinbaseBrowser) {
        return ethereum;
      }
      return void 0;
    }
    exports.getCoinbaseInjectedProvider = getCoinbaseInjectedProvider;
    function checkErrorForInvalidRequestArgs(args) {
      if (!args || typeof args !== "object" || Array.isArray(args)) {
        return error_1.standardErrors.rpc.invalidParams({
          message: "Expected a single, non-array, object argument.",
          data: args
        });
      }
      const { method, params } = args;
      if (typeof method !== "string" || method.length === 0) {
        return error_1.standardErrors.rpc.invalidParams({
          message: "'args.method' must be a non-empty string.",
          data: args
        });
      }
      if (params !== void 0 && !Array.isArray(params) && (typeof params !== "object" || params === null)) {
        return error_1.standardErrors.rpc.invalidParams({
          message: "'args.params' must be an object or array if provided.",
          data: args
        });
      }
      return void 0;
    }
    exports.checkErrorForInvalidRequestArgs = checkErrorForInvalidRequestArgs;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/sign/util.js
var require_util5 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/sign/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSigner = exports.fetchSignerType = exports.storeSignerType = exports.loadSignerType = void 0;
    var SCWSigner_1 = require_SCWSigner();
    var WalletLinkSigner_1 = require_WalletLinkSigner();
    var error_1 = require_error();
    var provider_1 = require_provider();
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var SIGNER_TYPE_KEY = "SignerType";
    var storage = new ScopedLocalStorage_1.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
    function loadSignerType() {
      return storage.getItem(SIGNER_TYPE_KEY);
    }
    exports.loadSignerType = loadSignerType;
    function storeSignerType(signerType) {
      storage.setItem(SIGNER_TYPE_KEY, signerType);
    }
    exports.storeSignerType = storeSignerType;
    async function fetchSignerType(params) {
      const { communicator, metadata } = params;
      listenForWalletLinkSessionRequest(communicator, metadata).catch(() => {
      });
      const request = {
        id: crypto.randomUUID(),
        event: "selectSignerType",
        data: params.preference
      };
      const { data } = await communicator.postRequestAndWaitForResponse(request);
      return data;
    }
    exports.fetchSignerType = fetchSignerType;
    function createSigner(params) {
      const { signerType, metadata, communicator, updateListener } = params;
      switch (signerType) {
        case "scw":
          return new SCWSigner_1.SCWSigner({
            metadata,
            updateListener,
            communicator
          });
        case "walletlink":
          return new WalletLinkSigner_1.WalletLinkSigner({
            metadata,
            updateListener
          });
        case "extension": {
          const injectedSigner = (0, provider_1.getCoinbaseInjectedSigner)();
          if (!injectedSigner) {
            throw error_1.standardErrors.rpc.internal("injected signer not found");
          }
          return injectedSigner;
        }
      }
    }
    exports.createSigner = createSigner;
    async function listenForWalletLinkSessionRequest(communicator, metadata) {
      await communicator.onMessage(({ event }) => event === "WalletLinkSessionRequest");
      const walletlink = new WalletLinkSigner_1.WalletLinkSigner({
        metadata
      });
      communicator.postMessage({
        event: "WalletLinkUpdate",
        data: { session: walletlink.getSession() }
      });
      await walletlink.handshake();
      communicator.postMessage({
        event: "WalletLinkUpdate",
        data: { connected: true }
      });
    }
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/communicator/util.js
var require_util6 = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/communicator/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.closePopup = exports.openPopup = void 0;
    var error_1 = require_error();
    var POPUP_WIDTH = 420;
    var POPUP_HEIGHT = 540;
    function openPopup(url) {
      const left = (window.innerWidth - POPUP_WIDTH) / 2 + window.screenX;
      const top = (window.innerHeight - POPUP_HEIGHT) / 2 + window.screenY;
      const popup = window.open(url, "Smart Wallet", `width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`);
      popup === null || popup === void 0 ? void 0 : popup.focus();
      if (!popup) {
        throw error_1.standardErrors.rpc.internal("Pop up window failed to open");
      }
      return popup;
    }
    exports.openPopup = openPopup;
    function closePopup(popup) {
      if (popup && !popup.closed) {
        popup.close();
      }
    }
    exports.closePopup = closePopup;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/communicator/Communicator.js
var require_Communicator = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/communicator/Communicator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Communicator = void 0;
    var version_1 = require_version();
    var util_1 = require_util6();
    var constants_1 = require_constants3();
    var error_1 = require_error();
    var Communicator = class {
      constructor(url = constants_1.CB_KEYS_URL) {
        this.popup = null;
        this.listeners = /* @__PURE__ */ new Map();
        this.postMessage = async (message) => {
          const popup = await this.waitForPopupLoaded();
          popup.postMessage(message, this.url.origin);
        };
        this.postRequestAndWaitForResponse = async (request) => {
          const responsePromise = this.onMessage(({ requestId }) => requestId === request.id);
          this.postMessage(request);
          return await responsePromise;
        };
        this.onMessage = async (predicate) => {
          return new Promise((resolve, reject) => {
            const listener = (event) => {
              if (event.origin !== this.url.origin)
                return;
              const message = event.data;
              if (predicate(message)) {
                resolve(message);
                window.removeEventListener("message", listener);
                this.listeners.delete(listener);
              }
            };
            window.addEventListener("message", listener);
            this.listeners.set(listener, { reject });
          });
        };
        this.disconnect = () => {
          (0, util_1.closePopup)(this.popup);
          this.popup = null;
          this.listeners.forEach(({ reject }, listener) => {
            reject(error_1.standardErrors.provider.userRejectedRequest("Request rejected"));
            window.removeEventListener("message", listener);
          });
          this.listeners.clear();
        };
        this.waitForPopupLoaded = async () => {
          if (this.popup && !this.popup.closed)
            return this.popup;
          this.popup = (0, util_1.openPopup)(this.url);
          this.onMessage(({ event }) => event === "PopupUnload").then(this.disconnect).catch(() => {
          });
          return this.onMessage(({ event }) => event === "PopupLoaded").then((message) => {
            this.postMessage({
              requestId: message.id,
              data: { version: version_1.LIB_VERSION }
            });
          }).then(() => {
            if (!this.popup)
              throw error_1.standardErrors.rpc.internal();
            return this.popup;
          });
        };
        this.url = new URL(url);
      }
    };
    exports.Communicator = Communicator;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/core/provider/method.js
var require_method = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/core/provider/method.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.determineMethodCategory = void 0;
    var mapping = {
      handshake: ["eth_requestAccounts"],
      sign: [
        "eth_ecRecover",
        "personal_sign",
        "personal_ecRecover",
        "eth_signTransaction",
        "eth_sendTransaction",
        "eth_signTypedData_v1",
        "eth_signTypedData_v3",
        "eth_signTypedData_v4",
        "eth_signTypedData",
        "wallet_addEthereumChain",
        "wallet_switchEthereumChain",
        "wallet_watchAsset",
        "wallet_getCapabilities",
        "wallet_sendCalls",
        "wallet_showCallsStatus"
      ],
      state: [
        // internal state
        "eth_chainId",
        "eth_accounts",
        "eth_coinbase",
        "net_version"
      ],
      deprecated: ["eth_sign", "eth_signTypedData_v2"],
      unsupported: ["eth_subscribe", "eth_unsubscribe"],
      fetch: []
    };
    function determineMethodCategory(method) {
      for (const c3 in mapping) {
        const category = c3;
        if (mapping[category].includes(method)) {
          return category;
        }
      }
      return void 0;
    }
    exports.determineMethodCategory = determineMethodCategory;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletProvider.js
var require_CoinbaseWalletProvider = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletProvider.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s3, e3) {
      var t3 = {};
      for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
        t3[p3] = s3[p3];
      if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
          if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
            t3[p3[i3]] = s3[p3[i3]];
        }
      return t3;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletProvider = void 0;
    var eventemitter3_1 = __importDefault(require_eventemitter3());
    var error_1 = require_error();
    var serialize_1 = require_serialize();
    var type_1 = require_type();
    var util_1 = require_util();
    var util_2 = require_util5();
    var provider_1 = require_provider();
    var Communicator_1 = require_Communicator();
    var method_1 = require_method();
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var CoinbaseWalletProvider = class extends eventemitter3_1.default {
      constructor(_a) {
        var _b, _c;
        var { metadata } = _a, _d = _a.preference, { keysUrl } = _d, preference = __rest(_d, ["keysUrl"]);
        super();
        this.accounts = [];
        this.handlers = {
          // eth_requestAccounts
          handshake: async (_3) => {
            try {
              if (this.connected) {
                this.emit("connect", { chainId: (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id)) });
                return this.accounts;
              }
              const signerType2 = await this.requestSignerSelection();
              const signer = this.initSigner(signerType2);
              const accounts = await signer.handshake();
              this.signer = signer;
              (0, util_2.storeSignerType)(signerType2);
              this.emit("connect", { chainId: (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id)) });
              return accounts;
            } catch (error) {
              this.handleUnauthorizedError(error);
              throw error;
            }
          },
          sign: async (request) => {
            if (!this.connected || !this.signer) {
              throw error_1.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
            }
            try {
              return await this.signer.request(request);
            } catch (error) {
              this.handleUnauthorizedError(error);
              throw error;
            }
          },
          fetch: (request) => (0, provider_1.fetchRPCRequest)(request, this.chain),
          state: (request) => {
            const getConnectedAccounts = () => {
              if (this.connected)
                return this.accounts;
              throw error_1.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
            };
            switch (request.method) {
              case "eth_chainId":
                return (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(this.chain.id));
              case "net_version":
                return this.chain.id;
              case "eth_accounts":
                return getConnectedAccounts();
              case "eth_coinbase":
                return getConnectedAccounts()[0];
              default:
                return this.handlers.unsupported(request);
            }
          },
          deprecated: ({ method }) => {
            throw error_1.standardErrors.rpc.methodNotSupported(`Method ${method} is deprecated.`);
          },
          unsupported: ({ method }) => {
            throw error_1.standardErrors.rpc.methodNotSupported(`Method ${method} is not supported.`);
          }
        };
        this.isCoinbaseWallet = true;
        this.updateListener = {
          onAccountsUpdate: ({ accounts, source }) => {
            if ((0, util_1.areAddressArraysEqual)(this.accounts, accounts))
              return;
            this.accounts = accounts;
            if (source === "storage")
              return;
            this.emit("accountsChanged", this.accounts);
          },
          onChainUpdate: ({ chain, source }) => {
            if (chain.id === this.chain.id && chain.rpcUrl === this.chain.rpcUrl)
              return;
            this.chain = chain;
            if (source === "storage")
              return;
            this.emit("chainChanged", (0, util_1.hexStringFromIntNumber)((0, type_1.IntNumber)(chain.id)));
          }
        };
        this.metadata = metadata;
        this.preference = preference;
        this.communicator = new Communicator_1.Communicator(keysUrl);
        this.chain = {
          id: (_c = (_b = metadata.appChainIds) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : 1
        };
        const signerType = (0, util_2.loadSignerType)();
        this.signer = signerType ? this.initSigner(signerType) : null;
      }
      get connected() {
        return this.accounts.length > 0;
      }
      async request(args) {
        var _a;
        try {
          const invalidArgsError = (0, provider_1.checkErrorForInvalidRequestArgs)(args);
          if (invalidArgsError)
            throw invalidArgsError;
          const category = (_a = (0, method_1.determineMethodCategory)(args.method)) !== null && _a !== void 0 ? _a : "fetch";
          return this.handlers[category](args);
        } catch (error) {
          return Promise.reject((0, serialize_1.serializeError)(error, args.method));
        }
      }
      handleUnauthorizedError(error) {
        const e3 = error;
        if (e3.code === error_1.standardErrorCodes.provider.unauthorized)
          this.disconnect();
      }
      /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
      async enable() {
        console.warn(`.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.`);
        return await this.request({
          method: "eth_requestAccounts"
        });
      }
      async disconnect() {
        this.accounts = [];
        this.chain = { id: 1 };
        ScopedLocalStorage_1.ScopedLocalStorage.clearAll();
        this.emit("disconnect", error_1.standardErrors.provider.disconnected("User initiated disconnection"));
      }
      requestSignerSelection() {
        return (0, util_2.fetchSignerType)({
          communicator: this.communicator,
          preference: this.preference,
          metadata: this.metadata
        });
      }
      initSigner(signerType) {
        return (0, util_2.createSigner)({
          signerType,
          metadata: this.metadata,
          communicator: this.communicator,
          updateListener: this.updateListener
        });
      }
    };
    exports.CoinbaseWalletProvider = CoinbaseWalletProvider;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletSDK.js
var require_CoinbaseWalletSDK = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/CoinbaseWalletSDK.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletSDK = void 0;
    var wallet_logo_1 = require_wallet_logo();
    var CoinbaseWalletProvider_1 = require_CoinbaseWalletProvider();
    var ScopedLocalStorage_1 = require_ScopedLocalStorage();
    var version_1 = require_version();
    var util_1 = require_util();
    var provider_1 = require_provider();
    var CoinbaseWalletSDK2 = class {
      constructor(metadata) {
        this.metadata = {
          appName: metadata.appName || "Dapp",
          appLogoUrl: metadata.appLogoUrl || (0, util_1.getFavicon)(),
          appChainIds: metadata.appChainIds || []
        };
        this.storeLatestVersion();
      }
      makeWeb3Provider(preference = { options: "all" }) {
        var _a;
        const params = { metadata: this.metadata, preference };
        return (_a = (0, provider_1.getCoinbaseInjectedProvider)(params)) !== null && _a !== void 0 ? _a : new CoinbaseWalletProvider_1.CoinbaseWalletProvider(params);
      }
      /**
       * Official Coinbase Wallet logo for developers to use on their frontend
       * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
       * @param width Width of the logo (Optional)
       * @returns SVG Data URI
       */
      getCoinbaseWalletLogo(type, width = 240) {
        return (0, wallet_logo_1.walletLogo)(type, width);
      }
      storeLatestVersion() {
        const versionStorage = new ScopedLocalStorage_1.ScopedLocalStorage("CBWSDK");
        versionStorage.setItem("VERSION", version_1.LIB_VERSION);
      }
    };
    exports.CoinbaseWalletSDK = CoinbaseWalletSDK2;
  }
});

// node_modules/@coinbase/wallet-sdk/dist/index.js
var require_dist = __commonJS({
  "node_modules/@coinbase/wallet-sdk/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoinbaseWalletSDK = void 0;
    var CoinbaseWalletSDK_1 = require_CoinbaseWalletSDK();
    exports.default = CoinbaseWalletSDK_1.CoinbaseWalletSDK;
    var CoinbaseWalletSDK_2 = require_CoinbaseWalletSDK();
    Object.defineProperty(exports, "CoinbaseWalletSDK", { enumerable: true, get: function() {
      return CoinbaseWalletSDK_2.CoinbaseWalletSDK;
    } });
  }
});

// node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersConstantsUtil.js
var EthersConstantsUtil = {
  ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
  ERROR_CODE_DEFAULT: 5e3
};

// node_modules/@reown/appkit-utils/dist/esm/src/ethers/EthersHelpersUtil.js
var EthersHelpersUtil = {
  hexStringToNumber(value) {
    const string = value.startsWith("0x") ? value.slice(2) : value;
    const number = parseInt(string, 16);
    return number;
  },
  numberToHexString(value) {
    return `0x${value.toString(16)}`;
  },
  async getUserInfo(provider) {
    const [addresses, chainId] = await Promise.all([
      EthersHelpersUtil.getAddresses(provider),
      EthersHelpersUtil.getChainId(provider)
    ]);
    return { chainId, addresses };
  },
  async getChainId(provider) {
    const chainId = await provider.request({ method: "eth_chainId" });
    return Number(chainId);
  },
  async getAddress(provider) {
    const [address] = await provider.request({ method: "eth_accounts" });
    return address;
  },
  async getAddresses(provider) {
    const addresses = await provider.request({ method: "eth_accounts" });
    return addresses;
  },
  async addEthereumChain(provider, caipNetwork) {
    await provider.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: EthersHelpersUtil.numberToHexString(caipNetwork.id),
          rpcUrls: caipNetwork.rpcUrls.default.http,
          chainName: caipNetwork.name,
          nativeCurrency: caipNetwork.nativeCurrency,
          blockExplorerUrls: caipNetwork.blockExplorers,
          iconUrls: [PresetsUtil.NetworkImageIds[caipNetwork.id]]
        }
      ]
    });
  }
};

// node_modules/@reown/appkit-adapter-ethers/dist/esm/src/client.js
var import_wallet_sdk = __toESM(require_dist(), 1);

// node_modules/@reown/appkit-adapter-ethers/dist/esm/src/utils/EthersMethods.js
var EthersMethods = {
  signMessage: async (message, provider, address) => {
    if (!provider) {
      throw new Error("signMessage - provider is undefined");
    }
    const hexMessage = isHexString(message) ? message : hexlify(toUtf8Bytes(message));
    const signature = await provider.request({
      method: "personal_sign",
      params: [hexMessage, address]
    });
    return signature;
  },
  estimateGas: async (data, provider, address, networkId) => {
    if (!provider) {
      throw new Error("estimateGas - provider is undefined");
    }
    if (!address) {
      throw new Error("estimateGas - address is undefined");
    }
    if (data.chainNamespace && data.chainNamespace !== "eip155") {
      throw new Error("estimateGas - chainNamespace is not eip155");
    }
    const txParams = {
      from: data.address,
      to: data.to,
      data: data.data,
      type: 0
    };
    const browserProvider = new BrowserProvider(provider, networkId);
    const signer = new JsonRpcSigner(browserProvider, address);
    return await signer.estimateGas(txParams);
  },
  sendTransaction: async (data, provider, address, networkId) => {
    if (!provider) {
      throw new Error("sendTransaction - provider is undefined");
    }
    if (!address) {
      throw new Error("sendTransaction - address is undefined");
    }
    if (data.chainNamespace && data.chainNamespace !== "eip155") {
      throw new Error("sendTransaction - chainNamespace is not eip155");
    }
    const txParams = {
      to: data.to,
      value: data.value,
      gasLimit: data.gas,
      gasPrice: data.gasPrice,
      data: data.data,
      type: 0
    };
    const browserProvider = new BrowserProvider(provider, networkId);
    const signer = new JsonRpcSigner(browserProvider, address);
    const txResponse = await signer.sendTransaction(txParams);
    const txReceipt = await txResponse.wait();
    return (txReceipt == null ? void 0 : txReceipt.hash) || null;
  },
  writeContract: async (data, provider, address, chainId) => {
    if (!provider) {
      throw new Error("writeContract - provider is undefined");
    }
    if (!address) {
      throw new Error("writeContract - address is undefined");
    }
    const browserProvider = new BrowserProvider(provider, chainId);
    const signer = new JsonRpcSigner(browserProvider, address);
    const contract = new Contract(data.tokenAddress, data.abi, signer);
    if (!contract || !data.method) {
      throw new Error("Contract method is undefined");
    }
    const method = contract[data.method];
    if (method) {
      return await method(data.receiverAddress, data.tokenAmount);
    }
    throw new Error("Contract method is undefined");
  },
  getEnsAddress: async (value, caipNetwork) => {
    try {
      const chainId = Number(caipNetwork.id);
      let ensName = null;
      let wcName = false;
      if (isReownName(value)) {
        wcName = await WcHelpersUtil.resolveReownName(value) || false;
      }
      if (chainId === 1) {
        const ensProvider = new InfuraProvider("mainnet");
        ensName = await ensProvider.resolveName(value);
      }
      return ensName || wcName || false;
    } catch {
      return false;
    }
  },
  getEnsAvatar: async (value, chainId) => {
    if (chainId === 1) {
      const ensProvider = new InfuraProvider("mainnet");
      const avatar = await ensProvider.getAvatar(value);
      return avatar || false;
    }
    return false;
  },
  parseWalletCapabilities: (str) => {
    try {
      return JSON.parse(str);
    } catch (error) {
      throw new Error("Error parsing wallet capabilities");
    }
  },
  parseUnits,
  formatUnits
};

// node_modules/@reown/appkit-adapter-ethers/dist/esm/src/client.js
var EthersAdapter = class extends AdapterBlueprint {
  constructor() {
    super({});
    this.adapterType = "ethers";
    this.providerHandlers = null;
    this.namespace = ConstantsUtil.CHAIN.EVM;
  }
  createEthersConfig(options) {
    if (!options.metadata) {
      return void 0;
    }
    let injectedProvider = void 0;
    let coinbaseProvider = void 0;
    function getInjectedProvider() {
      if (injectedProvider) {
        return injectedProvider;
      }
      if (typeof window === "undefined") {
        return void 0;
      }
      if (!window.ethereum) {
        return void 0;
      }
      injectedProvider = window.ethereum;
      return injectedProvider;
    }
    function getCoinbaseProvider() {
      var _a, _b, _c;
      if (coinbaseProvider) {
        return coinbaseProvider;
      }
      if (typeof window === "undefined") {
        return void 0;
      }
      const coinbaseWallet = new import_wallet_sdk.CoinbaseWalletSDK({
        appName: (_a = options == null ? void 0 : options.metadata) == null ? void 0 : _a.name,
        appLogoUrl: (_b = options == null ? void 0 : options.metadata) == null ? void 0 : _b.icons[0],
        appChainIds: ((_c = options.networks) == null ? void 0 : _c.map((caipNetwork) => caipNetwork.id)) || [1, 84532]
      });
      coinbaseProvider = coinbaseWallet.makeWeb3Provider({
        options: options.coinbasePreference ?? "all"
      });
      return coinbaseProvider;
    }
    const providers = { metadata: options.metadata };
    if (options.enableInjected !== false) {
      providers.injected = getInjectedProvider();
    }
    if (options.enableCoinbase !== false) {
      providers.coinbase = getCoinbaseProvider();
    }
    providers.EIP6963 = options.enableEIP6963 !== false;
    return providers;
  }
  async signMessage(params) {
    const { message, address, provider } = params;
    if (!provider) {
      throw new Error("Provider is undefined");
    }
    try {
      const signature = await EthersMethods.signMessage(message, provider, address);
      return { signature };
    } catch (error) {
      throw new Error("EthersAdapter:signMessage - Sign message failed");
    }
  }
  async sendTransaction(params) {
    var _a;
    if (!params.provider) {
      throw new Error("Provider is undefined");
    }
    const tx = await EthersMethods.sendTransaction({
      value: params.value,
      to: params.to,
      data: params.data,
      gas: params.gas,
      gasPrice: params.gasPrice,
      address: params.address
    }, params.provider, params.address, Number((_a = params.caipNetwork) == null ? void 0 : _a.id));
    return { hash: tx };
  }
  async writeContract(params) {
    var _a;
    if (!params.provider) {
      throw new Error("Provider is undefined");
    }
    const result = await EthersMethods.writeContract({
      abi: params.abi,
      method: params.method,
      fromAddress: params.caipAddress,
      receiverAddress: params.receiverAddress,
      tokenAmount: params.tokenAmount,
      tokenAddress: params.tokenAddress
    }, params.provider, params.caipAddress, Number((_a = params.caipNetwork) == null ? void 0 : _a.id));
    return { hash: result };
  }
  async estimateGas(params) {
    const { provider, caipNetwork, address } = params;
    if (!provider) {
      throw new Error("Provider is undefined");
    }
    try {
      const result = await EthersMethods.estimateGas({
        data: params.data,
        to: params.to,
        address
      }, provider, address, Number(caipNetwork == null ? void 0 : caipNetwork.id));
      return { gas: result };
    } catch (error) {
      throw new Error("EthersAdapter:estimateGas - Estimate gas failed");
    }
  }
  async getEnsAddress(params) {
    const { name, caipNetwork } = params;
    if (caipNetwork) {
      const result = await EthersMethods.getEnsAddress(name, caipNetwork);
      return { address: result };
    }
    return { address: "" };
  }
  parseUnits(params) {
    return EthersMethods.parseUnits(params.value, params.decimals);
  }
  formatUnits(params) {
    return EthersMethods.formatUnits(params.value, params.decimals);
  }
  async syncConnection(params) {
    const { id, chainId } = params;
    const connector = this.connectors.find((c3) => c3.id === id);
    const selectedProvider = connector == null ? void 0 : connector.provider;
    if (!selectedProvider) {
      throw new Error("Provider not found");
    }
    const accounts = await selectedProvider.request({
      method: "eth_requestAccounts"
    });
    this.listenProviderEvents(selectedProvider);
    if (!accounts[0]) {
      throw new Error("No accounts found");
    }
    if (!(connector == null ? void 0 : connector.type)) {
      throw new Error("Connector type not found");
    }
    return {
      address: accounts[0],
      chainId: Number(chainId),
      provider: selectedProvider,
      type: connector.type,
      id
    };
  }
  syncConnectors(options) {
    var _a;
    this.ethersConfig = this.createEthersConfig(options);
    if ((_a = this.ethersConfig) == null ? void 0 : _a.EIP6963) {
      this.listenInjectedConnector(true);
    }
    const connectors = Object.keys(this.ethersConfig || {}).filter((key) => key !== "metadata" && key !== "EIP6963");
    connectors.forEach((connector) => {
      var _a2, _b;
      const key = connector === "coinbase" ? "coinbaseWalletSDK" : connector;
      if (this.namespace) {
        this.addConnector({
          id: connector,
          explorerId: PresetsUtil.ConnectorExplorerIds[key],
          imageUrl: (_a2 = options == null ? void 0 : options.connectorImages) == null ? void 0 : _a2[key],
          name: PresetsUtil.ConnectorNamesMap[key],
          imageId: PresetsUtil.ConnectorImageIds[key],
          type: PresetsUtil.ConnectorTypesMap[key] ?? "EXTERNAL",
          info: { rdns: key },
          chain: this.namespace,
          chains: [],
          provider: (_b = this.ethersConfig) == null ? void 0 : _b[connector]
        });
      }
    });
  }
  async connectWalletConnect(onUri) {
    const connector = this.connectors.find((c3) => c3.type === "WALLET_CONNECT");
    const provider = connector == null ? void 0 : connector.provider;
    if (!this.caipNetworks || !provider) {
      throw new Error("UniversalAdapter:connectWalletConnect - caipNetworks or provider is undefined");
    }
    provider.on("display_uri", (uri) => {
      onUri(uri);
    });
    const namespaces = WcHelpersUtil.createNamespaces(this.caipNetworks);
    await provider.connect({ optionalNamespaces: namespaces });
  }
  eip6963EventHandler(event) {
    var _a, _b, _c;
    if (event.detail) {
      const { info, provider } = event.detail;
      const existingConnector = (_a = this.connectors) == null ? void 0 : _a.find((c3) => c3.name === (info == null ? void 0 : info.name));
      const coinbaseConnector = (_b = this.connectors) == null ? void 0 : _b.find((c3) => c3.id === ConstantsUtil2.COINBASE_SDK_CONNECTOR_ID);
      const isCoinbaseDuplicated = coinbaseConnector && ((_c = event.detail.info) == null ? void 0 : _c.rdns) === ConstantsUtil2.CONNECTOR_RDNS_MAP[ConstantsUtil2.COINBASE_SDK_CONNECTOR_ID];
      if (!existingConnector && !isCoinbaseDuplicated) {
        const type = PresetsUtil.ConnectorTypesMap[ConstantsUtil2.EIP6963_CONNECTOR_ID];
        if (type && this.namespace) {
          this.addConnector({
            id: (info == null ? void 0 : info.rdns) || "",
            type,
            imageUrl: info == null ? void 0 : info.icon,
            name: info == null ? void 0 : info.name,
            provider,
            info,
            chain: this.namespace,
            chains: []
          });
        }
      }
    }
  }
  listenInjectedConnector(enableEIP6963) {
    if (typeof window !== "undefined" && enableEIP6963) {
      const handler = this.eip6963EventHandler.bind(this);
      window.addEventListener(ConstantsUtil2.EIP6963_ANNOUNCE_EVENT, handler);
      window.dispatchEvent(new Event(ConstantsUtil2.EIP6963_REQUEST_EVENT));
    }
  }
  async connect({ id, type, chainId }) {
    const connector = this.connectors.find((c3) => c3.id === id);
    const selectedProvider = connector == null ? void 0 : connector.provider;
    if (!selectedProvider) {
      throw new Error("Provider not found");
    }
    let accounts = [];
    if (type === "AUTH") {
      const { address } = await selectedProvider.connect({
        chainId
      });
      accounts = [address];
    } else {
      accounts = await selectedProvider.request({
        method: "eth_requestAccounts"
      });
      this.listenProviderEvents(selectedProvider);
    }
    return {
      address: accounts[0],
      chainId: Number(chainId),
      provider: selectedProvider,
      type,
      id
    };
  }
  async reconnect(params) {
    const { id, chainId } = params;
    const connector = this.connectors.find((c3) => c3.id === id);
    if (connector && connector.type === "AUTH" && chainId) {
      await connector.provider.connect({ chainId });
    }
  }
  async disconnect(params) {
    if (!params.provider || !params.providerType) {
      throw new Error("Provider or providerType not provided");
    }
    switch (params.providerType) {
      case "WALLET_CONNECT":
        if (params.provider.session) {
          ;
          params.provider.disconnect();
        }
        break;
      case "AUTH":
        await params.provider.disconnect();
        break;
      case "ANNOUNCED":
      case "EXTERNAL":
        await this.revokeProviderPermissions(params.provider);
        break;
      default:
        throw new Error("Unsupported provider type");
    }
  }
  async getBalance(params) {
    var _a;
    const caipNetwork = (_a = this.caipNetworks) == null ? void 0 : _a.find((c3) => c3.id === params.chainId);
    if (caipNetwork) {
      const jsonRpcProvider = new JsonRpcProvider(caipNetwork.rpcUrls.default.http[0], {
        chainId: caipNetwork.id,
        name: caipNetwork.name
      });
      const balance = await jsonRpcProvider.getBalance(params.address);
      const formattedBalance = formatEther(balance);
      return { balance: formattedBalance, symbol: caipNetwork.nativeCurrency.symbol };
    }
    return { balance: "", symbol: "" };
  }
  async getProfile(params) {
    if (params.chainId === 1) {
      const ensProvider = new InfuraProvider("mainnet");
      const name = await ensProvider.lookupAddress(params.address);
      const avatar = await ensProvider.getAvatar(params.address);
      return { profileName: name || void 0, profileImage: avatar || void 0 };
    }
    return { profileName: void 0, profileImage: void 0 };
  }
  listenProviderEvents(provider) {
    const disconnectHandler = () => {
      this.removeProviderListeners(provider);
      this.emit("disconnect");
    };
    const accountsChangedHandler = (accounts) => {
      if (accounts.length > 0) {
        this.emit("accountChanged", {
          address: accounts[0]
        });
      }
    };
    const chainChangedHandler = (chainId) => {
      const chainIdNumber = typeof chainId === "string" ? EthersHelpersUtil.hexStringToNumber(chainId) : Number(chainId);
      this.emit("switchNetwork", { chainId: chainIdNumber });
    };
    provider.on("disconnect", disconnectHandler);
    provider.on("accountsChanged", accountsChangedHandler);
    provider.on("chainChanged", chainChangedHandler);
    this.providerHandlers = {
      disconnect: disconnectHandler,
      accountsChanged: accountsChangedHandler,
      chainChanged: chainChangedHandler
    };
  }
  removeProviderListeners(provider) {
    if (this.providerHandlers) {
      provider.removeListener("disconnect", this.providerHandlers.disconnect);
      provider.removeListener("accountsChanged", this.providerHandlers.accountsChanged);
      provider.removeListener("chainChanged", this.providerHandlers.chainChanged);
      this.providerHandlers = null;
    }
  }
  async switchNetwork(params) {
    var _a, _b;
    const { caipNetwork, provider, providerType } = params;
    if (providerType === "WALLET_CONNECT") {
      ;
      provider.setDefaultChain(String(`eip155:${String(caipNetwork.id)}`));
    } else if (providerType === "AUTH") {
      const authProvider = provider;
      await authProvider.switchNetwork(caipNetwork.id);
      await authProvider.connect({
        chainId: caipNetwork.id
      });
    } else {
      try {
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: EthersHelpersUtil.numberToHexString(caipNetwork.id) }]
        });
      } catch (switchError) {
        if (switchError.code === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || switchError.code === WcConstantsUtil.ERROR_CODE_DEFAULT || ((_b = (_a = switchError == null ? void 0 : switchError.data) == null ? void 0 : _a.originalError) == null ? void 0 : _b.code) === WcConstantsUtil.ERROR_CODE_UNRECOGNIZED_CHAIN_ID) {
          await EthersHelpersUtil.addEthereumChain(provider, caipNetwork);
        } else if (providerType === "ANNOUNCED" || providerType === "EXTERNAL" || providerType === "INJECTED") {
          throw new Error("Chain is not supported");
        }
      }
    }
  }
  getWalletConnectProvider() {
    var _a;
    return (_a = this.connectors.find((c3) => c3.type === "WALLET_CONNECT")) == null ? void 0 : _a.provider;
  }
  async revokeProviderPermissions(provider) {
    try {
      const permissions = await provider.request({
        method: "wallet_getPermissions"
      });
      const ethAccountsPermission = permissions.find((permission) => permission.parentCapability === "eth_accounts");
      if (ethAccountsPermission) {
        await provider.request({
          method: "wallet_revokePermissions",
          params: [{ eth_accounts: {} }]
        });
      }
    } catch (error) {
      console.info("Could not revoke permissions from wallet. Disconnecting...", error);
    }
  }
  async getCapabilities(params) {
    var _a, _b;
    const provider = ProviderUtil.getProvider(ConstantsUtil.CHAIN.EVM);
    if (!provider) {
      throw new Error("Provider is undefined");
    }
    const walletCapabilitiesString = (_b = (_a = provider.session) == null ? void 0 : _a.sessionProperties) == null ? void 0 : _b["capabilities"];
    if (walletCapabilitiesString) {
      const walletCapabilities = EthersMethods.parseWalletCapabilities(walletCapabilitiesString);
      const accountCapabilities = walletCapabilities[params];
      if (accountCapabilities) {
        return accountCapabilities;
      }
    }
    return await provider.request({ method: "wallet_getCapabilities", params: [params] });
  }
  async grantPermissions(params) {
    const provider = ProviderUtil.getProvider(ConstantsUtil.CHAIN.EVM);
    if (!provider) {
      throw new Error("Provider is undefined");
    }
    return await provider.request({ method: "wallet_grantPermissions", params });
  }
  async revokePermissions(params) {
    const provider = ProviderUtil.getProvider(ConstantsUtil.CHAIN.EVM);
    if (!provider) {
      throw new Error("Provider is undefined");
    }
    return await provider.request({ method: "wallet_revokePermissions", params: [params] });
  }
};
export {
  EthersAdapter,
  EthersConstantsUtil,
  EthersHelpersUtil
};
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=@reown_appkit-adapter-ethers.js.map
