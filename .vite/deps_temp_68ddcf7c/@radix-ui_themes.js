import {
  require_react_dom
} from "./chunk-PPA3WXSL.js";
import {
  require_react
} from "./chunk-OJK6TXMW.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-256EKJAK.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React61 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React61.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x6) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x6) {
                var match = x6.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x6) {
                  control = x6;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x6) {
                  control = x6;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x6) {
                control = x6;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s23 = sampleLines.length - 1;
              var c5 = controlLines.length - 1;
              while (s23 >= 1 && c5 >= 0 && sampleLines[s23] !== controlLines[c5]) {
                c5--;
              }
              for (; s23 >= 1 && c5 >= 0; s23--, c5--) {
                if (sampleLines[s23] !== controlLines[c5]) {
                  if (s23 !== 1 || c5 !== 1) {
                    do {
                      s23--;
                      c5--;
                      if (c5 < 0 || sampleLines[s23] !== controlLines[c5]) {
                        var _frame = "\n" + sampleLines[s23].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s23 >= 1 && c5 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x6) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a41) {
          return isArrayImpl(a41);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e43) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement4(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i22 = 0; i22 < node.length; i22++) {
                var child = node[i22];
                if (isValidElement4(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement4(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement4(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i22 = 0; i22 < keys.length; i22++) {
              var key = keys[i22];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i22 = 0; i22 < children.length; i22++) {
                      validateChildKeys(children[i22], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k4) {
                  return k4 !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx40 = jsxWithValidationDynamic;
        var jsxs13 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx40;
        exports.jsxs = jsxs13;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i22 = 0; i22 < arguments.length; i22++) {
          var arg = arguments[i22];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/@radix-ui/react-accessible-icon/dist/index.mjs
var React5 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React4 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var Slot = React2.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = React2.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
        return React2.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
  }
  return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = React2.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (React2.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return React2.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
    });
  }
  return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
};
function isSlottable(child) {
  return React2.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node2 = React3.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime2.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var NAME = "VisuallyHidden";
var VisuallyHidden = React4.forwardRef(
  (props, forwardedRef) => {
    return (0, import_jsx_runtime3.jsx)(
      Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;

// node_modules/@radix-ui/react-accessible-icon/dist/index.mjs
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var NAME2 = "AccessibleIcon";
var AccessibleIcon = ({ children, label }) => {
  const child = React5.Children.only(children);
  return (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    React5.cloneElement(child, {
      // accessibility
      "aria-hidden": "true",
      focusable: "false"
      // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
    }),
    (0, import_jsx_runtime4.jsx)(Root, { children: label })
  ] });
};
AccessibleIcon.displayName = NAME2;

// node_modules/@radix-ui/themes/dist/esm/components/alert-dialog.js
var alert_dialog_exports = {};
__export(alert_dialog_exports, {
  Action: () => D,
  Cancel: () => A2,
  Content: () => p3,
  Description: () => m4,
  Root: () => n4,
  Title: () => g2,
  Trigger: () => s4
});
var e13 = __toESM(require_react(), 1);
var import_classnames5 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var React28 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-context/dist/index.mjs
var React6 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function createContext2(rootComponentName, defaultContext) {
  const Context = React6.createContext(defaultContext);
  const Provider2 = (props) => {
    const { children, ...context } = props;
    const value = React6.useMemo(() => context, Object.values(context));
    return (0, import_jsx_runtime5.jsx)(Context.Provider, { value, children });
  };
  Provider2.displayName = rootComponentName + "Provider";
  function useContext22(consumerName) {
    const context = React6.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider2, useContext22];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React6.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider2 = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const value = React6.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime5.jsx)(Context.Provider, { value, children });
    };
    Provider2.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const context = React6.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React6.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React6.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React6.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var React27 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var React8 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React7 = __toESM(require_react(), 1);
var useLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? React7.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-id/dist/index.mjs
var useReactId = React8["useId".toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React8.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React10 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React9 = __toESM(require_react(), 1);
function useCallbackRef(callback) {
  const callbackRef = React9.useRef(callback);
  React9.useEffect(() => {
    callbackRef.current = callback;
  });
  return React9.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);
  const setValue = React10.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = React10.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = React10.useRef(value);
  const handleChange = useCallbackRef(onChange);
  React10.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React12 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React11 = __toESM(require_react(), 1);
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React11.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React12.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React12.forwardRef(
  (props, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props;
    const context = React12.useContext(DismissableLayerContext);
    const [node, setNode] = React12.useState(null);
    const ownerDocument = (node == null ? void 0 : node.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const [, force] = React12.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React12.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React12.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React12.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return (0, import_jsx_runtime6.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React12.forwardRef((props, forwardedRef) => {
  const context = React12.useContext(DismissableLayerContext);
  const ref = React12.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React12.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return (0, import_jsx_runtime6.jsx)(Primitive.div, { ...props, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React12.useRef(false);
  const handleClickRef = React12.useRef(() => {
  });
  React12.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React12.useRef(false);
  React12.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = React13.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props;
  const [container, setContainer] = React13.useState(null);
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
  const lastFocusedElementRef = React13.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContainer(node));
  const focusScope = React13.useRef({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  React13.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) {
          lastFocusedElementRef.current = target;
        } else {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleFocusOut2 = function(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) {
          focus(lastFocusedElementRef.current, { select: true });
        }
      }, handleMutations2 = function(mutations) {
        const focusedElement = document.activeElement;
        if (focusedElement !== document.body) return;
        for (const mutation of mutations) {
          if (mutation.removedNodes.length > 0) focus(container);
        }
      };
      var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
      document.addEventListener("focusin", handleFocusIn2);
      document.addEventListener("focusout", handleFocusOut2);
      const mutationObserver = new MutationObserver(handleMutations2);
      if (container) mutationObserver.observe(container, { childList: true, subtree: true });
      return () => {
        document.removeEventListener("focusin", handleFocusIn2);
        document.removeEventListener("focusout", handleFocusOut2);
        mutationObserver.disconnect();
      };
    }
  }, [trapped, container, focusScope.paused]);
  React13.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = document.activeElement;
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
          if (document.activeElement === previouslyFocusedElement) {
            focus(container);
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
        setTimeout(() => {
          const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          container.dispatchEvent(unmountEvent);
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true });
          }
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
          focusScopesStack.remove(focusScope);
        }, 0);
      };
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
  const handleKeyDown = React13.useCallback(
    (event) => {
      if (!loop && !trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = document.activeElement;
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget;
        const [first, last] = getTabbableEdges(container2);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault();
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault();
            if (loop) focus(first, { select: true });
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault();
            if (loop) focus(last, { select: true });
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  );
  return (0, import_jsx_runtime7.jsx)(Primitive.div, { tabIndex: -1, ...scopeProps, ref: composedRefs, onKeyDown: handleKeyDown });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement;
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (document.activeElement !== previouslyFocusedElement) return;
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container);
  const first = findVisible(candidates, container);
  const last = findVisible(candidates.reverse(), container);
  return [first, last];
}
function getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element;
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true;
  while (node) {
    if (upTo !== void 0 && node === upTo) return false;
    if (getComputedStyle(node).display === "none") return true;
    node = node.parentElement;
  }
  return false;
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
      element.select();
  }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
  let stack = [];
  return {
    add(focusScope) {
      const activeFocusScope = stack[0];
      if (focusScope !== activeFocusScope) {
        activeFocusScope == null ? void 0 : activeFocusScope.pause();
      }
      stack = arrayRemove(stack, focusScope);
      stack.unshift(focusScope);
    },
    remove(focusScope) {
      var _a;
      stack = arrayRemove(stack, focusScope);
      (_a = stack[0]) == null ? void 0 : _a.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index2 = updatedArray.indexOf(item);
  if (index2 !== -1) {
    updatedArray.splice(index2, 1);
  }
  return updatedArray;
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A");
}

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React14 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var PORTAL_NAME = "Portal";
var Portal = React14.forwardRef((props, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = React14.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? import_react_dom.default.createPortal((0, import_jsx_runtime8.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React22 = __toESM(require_react(), 1);
var React15 = __toESM(require_react(), 1);
function useStateMachine(initialState, machine) {
  return React15.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React22.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React22.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React22.useState();
  const stylesRef = React22.useRef({});
  const prevPresentRef = React22.useRef(present);
  const prevAnimationNameRef = React22.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React22.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React22.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return (styles == null ? void 0 : styles.animationName) || "none";
}
function getElementRef2(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React16 = __toESM(require_react(), 1);
var count2 = 0;
function useFocusGuards() {
  React16.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count2++;
    return () => {
      if (count2 === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach((node) => node.remove());
      }
      count2--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}

// node_modules/react-remove-scroll/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign3(t34) {
    for (var s23, i22 = 1, n23 = arguments.length; i22 < n23; i22++) {
      s23 = arguments[i22];
      for (var p38 in s23) if (Object.prototype.hasOwnProperty.call(s23, p38)) t34[p38] = s23[p38];
    }
    return t34;
  };
  return __assign.apply(this, arguments);
};
function __rest(s23, e43) {
  var t34 = {};
  for (var p38 in s23) if (Object.prototype.hasOwnProperty.call(s23, p38) && e43.indexOf(p38) < 0)
    t34[p38] = s23[p38];
  if (s23 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i22 = 0, p38 = Object.getOwnPropertySymbols(s23); i22 < p38.length; i22++) {
      if (e43.indexOf(p38[i22]) < 0 && Object.prototype.propertyIsEnumerable.call(s23, p38[i22]))
        t34[p38[i22]] = s23[p38[i22]];
    }
  return t34;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i22 = 0, l12 = from.length, ar; i22 < l12; i22++) {
    if (ar || !(i22 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i22);
      ar[i22] = from[i22];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var React26 = __toESM(require_react());

// node_modules/react-remove-scroll/dist/es2015/UI.js
var React21 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = __toESM(require_react());
function useCallbackRef2(initialValue, callback) {
  var ref = (0, import_react.useState)(function() {
    return {
      // value
      value: initialValue,
      // last callback
      callback,
      // "memoized" public interface
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React17 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React17.useLayoutEffect : React17.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef2(defaultValue || null, function(newValue) {
    return refs.forEach(function(ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function() {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function(ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function(ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-sidecar/node_modules/tslib/tslib.es6.mjs
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t34) {
    for (var s23, i22 = 1, n23 = arguments.length; i22 < n23; i22++) {
      s23 = arguments[i22];
      for (var p38 in s23) if (Object.prototype.hasOwnProperty.call(s23, p38)) t34[p38] = s23[p38];
    }
    return t34;
  };
  return __assign2.apply(this, arguments);
};
function __rest2(s23, e43) {
  var t34 = {};
  for (var p38 in s23) if (Object.prototype.hasOwnProperty.call(s23, p38) && e43.indexOf(p38) < 0)
    t34[p38] = s23[p38];
  if (s23 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i22 = 0, p38 = Object.getOwnPropertySymbols(s23); i22 < p38.length; i22++) {
      if (e43.indexOf(p38[i22]) < 0 && Object.prototype.propertyIsEnumerable.call(s23, p38[i22]))
        t34[p38[i22]] = s23[p38[i22]];
    }
  return t34;
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var React18 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react2 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a41) {
  return a41;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function() {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function(data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function() {
        buffer = buffer.filter(function(x6) {
          return x6 !== item;
        });
      };
    },
    assignSyncMedium: function(cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function(x6) {
          return cb(x6);
        },
        filter: function() {
          return buffer;
        }
      };
    },
    assignMedium: function(cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function() {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function() {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function(x6) {
          pendingQueue.push(x6);
          cycle();
        },
        filter: function(filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = __assign2({ async: true, ssr: false }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var React19 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/use-sidecar/dist/es2015/exports.js
var React20 = __toESM(require_react());
var SideCar = function(_a) {
  var sideCar = _a.sideCar, rest = __rest2(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React20.createElement(Target, __assign2({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}

// node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

// node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {
  return;
};
var RemoveScroll = React21.forwardRef(function(props, parentRef) {
  var ref = React21.useRef(null);
  var _a = React21.useState({
    onScrollCapture: nothing,
    onWheelCapture: nothing,
    onTouchMoveCapture: nothing
  }), callbacks = _a[0], setCallbacks = _a[1];
  var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
  var SideCar2 = sideCar;
  var containerRef = useMergeRefs([ref, parentRef]);
  var containerProps = __assign(__assign({}, rest), callbacks);
  return React21.createElement(
    React21.Fragment,
    null,
    enabled && React21.createElement(SideCar2, { sideCar: effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode }),
    forwardProps ? React21.cloneElement(React21.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : React21.createElement(Container, __assign({}, containerProps, { className, ref: containerRef }), children)
  );
});
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React25 = __toESM(require_react());

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React24 = __toESM(require_react());

// node_modules/react-style-singleton/dist/es2015/hook.js
var React23 = __toESM(require_react());

// node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
  if (currentNonce) {
    return currentNonce;
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__;
  }
  return void 0;
};

// node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document)
    return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = getNonce();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function() {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function(style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function() {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = function() {
  var sheet = stylesheetSingleton();
  return function(styles, isDynamic) {
    React23.useEffect(function() {
      sheet.add(styles);
      return function() {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function() {
  var useStyle = styleHookSingleton();
  var Sheet = function(_a) {
    var styles = _a.styles, dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function(x6) {
  return parseInt(x6 || "", 10) || 0;
};
var getOffset = function(gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function(gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
  var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
    allowRelative && "position: relative ".concat(important, ";"),
    gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
    gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
  ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
  React24.useEffect(function() {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function() {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function(_a) {
  var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React24.useMemo(function() {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React24.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

// node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
        return true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var options;
var nonPassive = passiveSupported ? { passive: false } : false;

// node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
  return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
  if (!(node instanceof Element)) {
    return false;
  }
  var styles = window.getComputedStyle(node);
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
  );
};
var elementCouldBeVScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
  return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
  var ownerDocument = node.ownerDocument;
  var current = node;
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host;
    }
    var isScrollable = elementCouldBeScrolled(axis, current);
    if (isScrollable) {
      var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
      if (scrollHeight > clientHeight) {
        return true;
      }
    }
    current = current.parentNode;
  } while (current && current !== ownerDocument.body);
  return false;
};
var getVScrollVariables = function(_a) {
  var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
  return [
    scrollTop,
    scrollHeight,
    clientHeight
  ];
};
var getHScrollVariables = function(_a) {
  var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
  return [
    scrollLeft,
    scrollWidth,
    clientWidth
  ];
};
var elementCouldBeScrolled = function(axis, node) {
  return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
  var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
  var delta = directionFactor * sourceDelta;
  var target = event.target;
  var targetInLock = endTarget.contains(target);
  var shouldCancelScroll = false;
  var isDeltaPositive = delta > 0;
  var availableScroll = 0;
  var availableScrollTop = 0;
  do {
    var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
    var elementScroll = scroll_1 - capacity - directionFactor * position;
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll;
        availableScrollTop += position;
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host;
    } else {
      target = target.parentNode;
    }
  } while (
    // portaled content
    !targetInLock && target !== document.body || // self content
    targetInLock && (endTarget.contains(target) || endTarget === target)
  );
  if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
    shouldCancelScroll = true;
  } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
    shouldCancelScroll = true;
  }
  return shouldCancelScroll;
};

// node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
  return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
  return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
  return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x6, y7) {
  return x6[0] === y7[0] && x6[1] === y7[1];
};
var generateStyle = function(id) {
  return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React25.useRef([]);
  var touchStartRef = React25.useRef([0, 0]);
  var activeAxis = React25.useRef();
  var id = React25.useState(idCounter++)[0];
  var Style2 = React25.useState(styleSingleton)[0];
  var lastProps = React25.useRef(props);
  React25.useEffect(function() {
    lastProps.current = props;
  }, [props]);
  React25.useEffect(function() {
    if (props.inert) {
      document.body.classList.add("block-interactivity-".concat(id));
      var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
      allow_1.forEach(function(el) {
        return el.classList.add("allow-interactivity-".concat(id));
      });
      return function() {
        document.body.classList.remove("block-interactivity-".concat(id));
        allow_1.forEach(function(el) {
          return el.classList.remove("allow-interactivity-".concat(id));
        });
      };
    }
    return;
  }, [props.inert, props.lockRef.current, props.shards]);
  var shouldCancelEvent = React25.useCallback(function(event, parent) {
    if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) {
      return !lastProps.current.allowPinchZoom;
    }
    var touch = getTouchXY(event);
    var touchStart = touchStartRef.current;
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
    var currentAxis;
    var target = event.target;
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
    if ("touches" in event && moveDirection === "h" && target.type === "range") {
      return false;
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    if (!canBeScrolledInMainDirection) {
      return true;
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection;
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v";
      canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
    }
    if (!canBeScrolledInMainDirection) {
      return false;
    }
    if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
      activeAxis.current = currentAxis;
    }
    if (!currentAxis) {
      return true;
    }
    var cancelingAxis = activeAxis.current || currentAxis;
    return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
  }, []);
  var shouldPrevent = React25.useCallback(function(_event) {
    var event = _event;
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style2) {
      return;
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
    var sourceEvent = shouldPreventQueue.current.filter(function(e43) {
      return e43.name === event.type && (e43.target === event.target || event.target === e43.shadowParent) && deltaCompare(e43.delta, delta);
    })[0];
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault();
      }
      return;
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
        return node.contains(event.target);
      });
      var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    }
  }, []);
  var shouldCancel = React25.useCallback(function(name, delta, target, should) {
    var event = { name, delta, target, should, shadowParent: getOutermostShadowParent(target) };
    shouldPreventQueue.current.push(event);
    setTimeout(function() {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e43) {
        return e43 !== event;
      });
    }, 1);
  }, []);
  var scrollTouchStart = React25.useCallback(function(event) {
    touchStartRef.current = getTouchXY(event);
    activeAxis.current = void 0;
  }, []);
  var scrollWheel = React25.useCallback(function(event) {
    shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  var scrollTouchMove = React25.useCallback(function(event) {
    shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
  }, []);
  React25.useEffect(function() {
    lockStack.push(Style2);
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    });
    document.addEventListener("wheel", shouldPrevent, nonPassive);
    document.addEventListener("touchmove", shouldPrevent, nonPassive);
    document.addEventListener("touchstart", scrollTouchStart, nonPassive);
    return function() {
      lockStack = lockStack.filter(function(inst) {
        return inst !== Style2;
      });
      document.removeEventListener("wheel", shouldPrevent, nonPassive);
      document.removeEventListener("touchmove", shouldPrevent, nonPassive);
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
    };
  }, []);
  var removeScrollBar = props.removeScrollBar, inert = props.inert;
  return React25.createElement(
    React25.Fragment,
    null,
    inert ? React25.createElement(Style2, { styles: generateStyle(id) }) : null,
    removeScrollBar ? React25.createElement(RemoveScrollBar, { gapMode: props.gapMode }) : null
  );
}
function getOutermostShadowParent(node) {
  var shadowParent = null;
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host;
      node = node.host;
    }
    node = node.parentNode;
  }
  return shadowParent;
}

// node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

// node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React26.forwardRef(function(props, ref) {
  return React26.createElement(RemoveScroll, __assign({}, props, { ref, sideCar: sidecar_default }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

// node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
  if (typeof document === "undefined") {
    return null;
  }
  var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
  return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
  return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
  return targets.map(function(target) {
    if (parent.contains(target)) {
      return target;
    }
    var correctedTarget = unwrapHost(target);
    if (correctedTarget && parent.contains(correctedTarget)) {
      return correctedTarget;
    }
    console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
    return null;
  }).filter(function(x6) {
    return Boolean(x6);
  });
};
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
  var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  var markerCounter = markerMap[markerName];
  var hiddenNodes = [];
  var elementsToKeep = /* @__PURE__ */ new Set();
  var elementsToStop = new Set(targets);
  var keep = function(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    keep(el.parentNode);
  };
  targets.forEach(keep);
  var deep = function(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, function(node) {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        try {
          var attr = node.getAttribute(controlAttribute);
          var alreadyHidden = attr !== null && attr !== "false";
          var counterValue = (counterMap.get(node) || 0) + 1;
          var markerValue = (markerCounter.get(node) || 0) + 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          hiddenNodes.push(node);
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true);
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true");
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true");
          }
        } catch (e43) {
          console.error("aria-hidden: cannot operate on ", node, e43);
        }
      }
    });
  };
  deep(parentNode);
  elementsToKeep.clear();
  lockCount++;
  return function() {
    hiddenNodes.forEach(function(node) {
      var counterValue = counterMap.get(node) - 1;
      var markerValue = markerCounter.get(node) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute);
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      markerMap = {};
    }
  };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
  if (markerName === void 0) {
    markerName = "data-aria-hidden";
  }
  var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
  var activeParentNode = parentNode || getDefaultParent(originalTarget);
  if (!activeParentNode) {
    return function() {
      return null;
    };
  }
  targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
  return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props) => {
  const {
    __scopeDialog,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const triggerRef = React27.useRef(null);
  const contentRef = React27.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_jsx_runtime9.jsx)(
    DialogProvider,
    {
      scope: __scopeDialog,
      triggerRef,
      contentRef,
      contentId: useId(),
      titleId: useId(),
      descriptionId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React27.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children
    }
  );
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return (0, import_jsx_runtime9.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME2, {
  forceMount: void 0
});
var DialogPortal = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = useDialogContext(PORTAL_NAME2, __scopeDialog);
  return (0, import_jsx_runtime9.jsx)(PortalProvider, { scope: __scopeDialog, forceMount, children: React27.Children.map(children, (child) => (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime9.jsx)(Portal, { asChild: true, container, children: child }) })) });
};
DialogPortal.displayName = PORTAL_NAME2;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = React27.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime9.jsx)(DialogOverlayImpl, { ...overlayProps, ref: forwardedRef }) }) : null;
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      (0, import_jsx_runtime9.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, shards: [context.contentRef], children: (0, import_jsx_runtime9.jsx)(
        Primitive.div,
        {
          "data-state": getState(context.open),
          ...overlayProps,
          ref: forwardedRef,
          style: { pointerEvents: "auto", ...overlayProps.style }
        }
      ) })
    );
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContent = React27.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return (0, import_jsx_runtime9.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? (0, import_jsx_runtime9.jsx)(DialogContentModal, { ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime9.jsx)(DialogContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React27.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = React27.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    React27.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return (0, import_jsx_runtime9.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault()
        )
      }
    );
  }
);
var DialogContentNonModal = React27.forwardRef(
  (props, forwardedRef) => {
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = React27.useRef(false);
    const hasPointerDownOutsideRef = React27.useRef(false);
    return (0, import_jsx_runtime9.jsx)(
      DialogContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var DialogContentImpl = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = React27.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
      (0, import_jsx_runtime9.jsx)(
        FocusScope,
        {
          asChild: true,
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: (0, import_jsx_runtime9.jsx)(
            DismissableLayer,
            {
              role: "dialog",
              id: context.contentId,
              "aria-describedby": context.descriptionId,
              "aria-labelledby": context.titleId,
              "data-state": getState(context.open),
              ...contentProps,
              ref: composedRefs,
              onDismiss: () => context.onOpenChange(false)
            }
          )
        }
      ),
      (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
        (0, import_jsx_runtime9.jsx)(TitleWarning, { titleId: context.titleId }),
        (0, import_jsx_runtime9.jsx)(DescriptionWarning, { contentRef, descriptionId: context.descriptionId })
      ] })
    ] });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitle = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return (0, import_jsx_runtime9.jsx)(Primitive.h2, { id: context.titleId, ...titleProps, ref: forwardedRef });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return (0, import_jsx_runtime9.jsx)(Primitive.p, { id: context.descriptionId, ...descriptionProps, ref: forwardedRef });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React27.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return (0, import_jsx_runtime9.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = ({ titleId }) => {
  const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
  const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
  React27.useEffect(() => {
    if (titleId) {
      const hasTitle = document.getElementById(titleId);
      if (!hasTitle) console.error(MESSAGE);
    }
  }, [MESSAGE, titleId]);
  return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId }) => {
  const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
  const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
  React27.useEffect(() => {
    var _a;
    const describedById = (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby");
    if (descriptionId && describedById) {
      const hasDescription = document.getElementById(descriptionId);
      if (!hasDescription) console.warn(MESSAGE);
    }
  }, [MESSAGE, contentRef, descriptionId]);
  return null;
};
var Root2 = Dialog;
var Trigger = DialogTrigger;
var Portal2 = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;

// node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext, createAlertDialogScope] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return (0, import_jsx_runtime10.jsx)(Root2, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog.displayName = ROOT_NAME;
var TRIGGER_NAME2 = "AlertDialogTrigger";
var AlertDialogTrigger = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime10.jsx)(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger.displayName = TRIGGER_NAME2;
var PORTAL_NAME3 = "AlertDialogPortal";
var AlertDialogPortal = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return (0, import_jsx_runtime10.jsx)(Portal2, { ...dialogScope, ...portalProps });
};
AlertDialogPortal.displayName = PORTAL_NAME3;
var OVERLAY_NAME2 = "AlertDialogOverlay";
var AlertDialogOverlay = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime10.jsx)(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay.displayName = OVERLAY_NAME2;
var CONTENT_NAME2 = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME2);
var AlertDialogContent = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = React28.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = React28.useRef(null);
    return (0, import_jsx_runtime10.jsx)(
      WarningProvider,
      {
        contentName: CONTENT_NAME2,
        titleName: TITLE_NAME2,
        docsSlug: "alert-dialog",
        children: (0, import_jsx_runtime10.jsx)(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: (0, import_jsx_runtime10.jsxs)(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              (0, import_jsx_runtime10.jsx)(Slottable, { children }),
              (0, import_jsx_runtime10.jsx)(DescriptionWarning2, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent.displayName = CONTENT_NAME2;
var TITLE_NAME2 = "AlertDialogTitle";
var AlertDialogTitle = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime10.jsx)(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle.displayName = TITLE_NAME2;
var DESCRIPTION_NAME2 = "AlertDialogDescription";
var AlertDialogDescription = React28.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return (0, import_jsx_runtime10.jsx)(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription.displayName = DESCRIPTION_NAME2;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return (0, import_jsx_runtime10.jsx)(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel = React28.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return (0, import_jsx_runtime10.jsx)(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel.displayName = CANCEL_NAME;
var DescriptionWarning2 = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME2}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME2}\` by passing a \`${DESCRIPTION_NAME2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME2}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  React28.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root22 = AlertDialog;
var Trigger2 = AlertDialogTrigger;
var Portal22 = AlertDialogPortal;
var Overlay2 = AlertDialogOverlay;
var Content2 = AlertDialogContent;
var Action = AlertDialogAction;
var Cancel = AlertDialogCancel;
var Title2 = AlertDialogTitle;
var Description2 = AlertDialogDescription;

// node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js
var o = { asChild: { type: "boolean" } };

// node_modules/@radix-ui/themes/dist/esm/props/width.props.js
var t = { width: { type: "string", className: "rt-r-w", customProperties: ["--width"], responsive: true }, minWidth: { type: "string", className: "rt-r-min-w", customProperties: ["--min-width"], responsive: true }, maxWidth: { type: "string", className: "rt-r-max-w", customProperties: ["--max-width"], responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/height.props.js
var e = { height: { type: "string", className: "rt-r-h", customProperties: ["--height"], responsive: true }, minHeight: { type: "string", className: "rt-r-min-h", customProperties: ["--min-height"], responsive: true }, maxHeight: { type: "string", className: "rt-r-max-h", customProperties: ["--max-height"], responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/dialog.props.js
var r = ["1", "2", "3", "4"];
var s = { ...o, align: { type: "enum", className: "rt-r-align", values: ["start", "center"], default: "center" }, size: { type: "enum", className: "rt-r-size", values: r, default: "3", responsive: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "600px" }, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/heading.js
var o5 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/props/color.prop.js
var o2 = ["gray", "gold", "bronze", "brown", "yellow", "amber", "orange", "tomato", "red", "ruby", "crimson", "pink", "plum", "purple", "violet", "iris", "indigo", "blue", "cyan", "teal", "jade", "green", "grass", "lime", "mint", "sky"];
var e2 = ["auto", "gray", "mauve", "slate", "sage", "olive", "sand"];
var r2 = { color: { type: "enum", values: o2, default: void 0 } };
var s2 = { color: { type: "enum", values: o2, default: "" } };

// node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js
var o3 = { highContrast: { type: "boolean", className: "rt-high-contrast", default: void 0 } };

// node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js
var e3 = ["normal", "start", "end", "both"];
var r3 = { trim: { type: "enum", className: "rt-r-lt", values: e3, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js
var e4 = ["left", "center", "right"];
var t2 = { align: { type: "enum", className: "rt-r-ta", values: e4, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js
var e5 = ["wrap", "nowrap", "pretty", "balance"];
var r4 = { wrap: { type: "enum", className: "rt-r-tw", values: e5, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js
var e6 = { truncate: { type: "boolean", className: "rt-truncate" } };

// node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js
var e7 = ["light", "regular", "medium", "bold"];
var t3 = { weight: { type: "enum", className: "rt-r-weight", values: e7, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/heading.props.js
var m = ["h1", "h2", "h3", "h4", "h5", "h6"];
var a = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var n = { as: { type: "enum", values: m, default: "h1" }, ...o, size: { type: "enum", className: "rt-r-size", values: a, default: "6", responsive: true }, ...t3, ...t2, ...r3, ...e6, ...r4, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js
var import_classnames = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/props/prop-def.js
var e8 = ["initial", "xs", "sm", "md", "lg", "xl"];

// node_modules/@radix-ui/themes/dist/esm/helpers/has-own-property.js
function e9(n23, r44) {
  return Object.prototype.hasOwnProperty.call(n23, r44);
}

// node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js
function i(e43) {
  return typeof e43 == "object" && Object.keys(e43).some((s23) => e8.includes(s23));
}

// node_modules/@radix-ui/themes/dist/esm/helpers/get-responsive-styles.js
function R({ className: r44, customProperties: n23, ...t34 }) {
  const p38 = g({ allowArbitraryValues: true, className: r44, ...t34 }), e43 = m2({ customProperties: n23, ...t34 });
  return [p38, e43];
}
function g({ allowArbitraryValues: r44, value: n23, className: t34, propValues: p38, parseValue: e43 = (s23) => s23 }) {
  const s23 = [];
  if (n23) {
    if (typeof n23 == "string" && p38.includes(n23)) return l(t34, n23, e43);
    if (i(n23)) {
      const i22 = n23;
      for (const o60 in i22) {
        if (!e9(i22, o60) || !e8.includes(o60)) continue;
        const u10 = i22[o60];
        if (u10 !== void 0) {
          if (p38.includes(u10)) {
            const f19 = l(t34, u10, e43), v9 = o60 === "initial" ? f19 : `${o60}:${f19}`;
            s23.push(v9);
          } else if (r44) {
            const f19 = o60 === "initial" ? t34 : `${o60}:${t34}`;
            s23.push(f19);
          }
        }
      }
      return s23.join(" ");
    }
    if (r44) return t34;
  }
}
function l(r44, n23, t34) {
  const p38 = r44 ? "-" : "", e43 = t34(n23), s23 = e43 == null ? void 0 : e43.startsWith("-"), i22 = s23 ? "-" : "", o60 = s23 ? e43 == null ? void 0 : e43.substring(1) : e43;
  return `${i22}${r44}${p38}${o60}`;
}
function m2({ customProperties: r44, value: n23, propValues: t34, parseValue: p38 = (e43) => e43 }) {
  let e43 = {};
  if (!(!n23 || typeof n23 == "string" && t34.includes(n23))) {
    if (typeof n23 == "string" && (e43 = Object.fromEntries(r44.map((s23) => [s23, n23]))), i(n23)) {
      const s23 = n23;
      for (const i22 in s23) {
        if (!e9(s23, i22) || !e8.includes(i22)) continue;
        const o60 = s23[i22];
        if (!t34.includes(o60)) for (const u10 of r44) e43 = { [i22 === "initial" ? u10 : `${u10}-${i22}`]: o60, ...e43 };
      }
    }
    for (const s23 in e43) {
      const i22 = e43[s23];
      i22 !== void 0 && (e43[s23] = p38(i22));
    }
    return e43;
  }
}

// node_modules/@radix-ui/themes/dist/esm/helpers/merge-styles.js
function l2(...t34) {
  let e43 = {};
  for (const n23 of t34) n23 && (e43 = { ...e43, ...n23 });
  return Object.keys(e43).length ? e43 : void 0;
}

// node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js
function N(...r44) {
  return Object.assign({}, ...r44);
}
function v(r44, ...m18) {
  let t34, l12;
  const a41 = { ...r44 }, f19 = N(...m18);
  for (const n23 in f19) {
    let s23 = a41[n23];
    const e43 = f19[n23];
    if (e43.default !== void 0 && s23 === void 0 && (s23 = e43.default), e43.type === "enum" && ![e43.default, ...e43.values].includes(s23) && !i(s23) && (s23 = e43.default), a41[n23] = s23, "className" in e43 && e43.className) {
      delete a41[n23];
      const u10 = "responsive" in e43;
      if (!s23 || i(s23) && !u10) continue;
      if (i(s23) && (e43.default !== void 0 && s23.initial === void 0 && (s23.initial = e43.default), e43.type === "enum" && ([e43.default, ...e43.values].includes(s23.initial) || (s23.initial = e43.default))), e43.type === "enum") {
        const i22 = g({ allowArbitraryValues: false, value: s23, className: e43.className, propValues: e43.values, parseValue: e43.parseValue });
        t34 = (0, import_classnames.default)(t34, i22);
        continue;
      }
      if (e43.type === "string" || e43.type === "enum | string") {
        const i22 = e43.type === "string" ? [] : e43.values, [d10, y7] = R({ className: e43.className, customProperties: e43.customProperties, propValues: i22, parseValue: e43.parseValue, value: s23 });
        l12 = l2(l12, y7), t34 = (0, import_classnames.default)(t34, d10);
        continue;
      }
      if (e43.type === "boolean" && s23) {
        t34 = (0, import_classnames.default)(t34, e43.className);
        continue;
      }
    }
  }
  return a41.className = (0, import_classnames.default)(t34, r44.className), a41.style = l2(l12, r44.style), a41;
}

// node_modules/@radix-ui/themes/dist/esm/props/margin.props.js
var e10 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
var r5 = { m: { type: "enum | string", values: e10, responsive: true, className: "rt-r-m", customProperties: ["--m"] }, mx: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mx", customProperties: ["--ml", "--mr"] }, my: { type: "enum | string", values: e10, responsive: true, className: "rt-r-my", customProperties: ["--mt", "--mb"] }, mt: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mt", customProperties: ["--mt"] }, mr: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mr", customProperties: ["--mr"] }, mb: { type: "enum | string", values: e10, responsive: true, className: "rt-r-mb", customProperties: ["--mb"] }, ml: { type: "enum | string", values: e10, responsive: true, className: "rt-r-ml", customProperties: ["--ml"] } };

// node_modules/@radix-ui/themes/dist/esm/components/heading.js
var r6 = o5.forwardRef((p38, t34) => {
  const { children: e43, className: s23, asChild: a41, as: n23 = "h1", color: i22, ...m18 } = v(p38, n, r5);
  return o5.createElement(Slot, { "data-accent-color": i22, ...m18, ref: t34, className: (0, import_classnames2.default)("rt-Heading", s23) }, a41 ? e43 : o5.createElement(n23, null, e43));
});
r6.displayName = "Heading";

// node_modules/@radix-ui/themes/dist/esm/components/text.js
var o6 = __toESM(require_react(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/text.props.js
var m3 = ["span", "div", "label", "p"];
var a2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var n2 = { as: { type: "enum", values: m3, default: "span" }, ...o, size: { type: "enum", className: "rt-r-size", values: a2, responsive: true }, ...t3, ...t2, ...r3, ...e6, ...r4, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/text.js
var p = o6.forwardRef((t34, r44) => {
  const { children: e43, className: s23, asChild: m18, as: a41 = "span", color: n23, ...P7 } = v(t34, n2, r5);
  return o6.createElement(Slot, { "data-accent-color": n23, ...P7, ref: r44, className: (0, import_classnames3.default)("rt-Text", s23) }, m18 ? e43 : o6.createElement(a41, null, e43));
});
p.displayName = "Text";

// node_modules/@radix-ui/themes/dist/esm/components/theme.js
var e12 = __toESM(require_react(), 1);
var import_classnames4 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var React34 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-popper/dist/index.mjs
var React33 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v9) => ({
  x: v9,
  y: v9
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x6,
    y: y7,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y7,
    left: x6,
    right: x6 + width,
    bottom: y7 + height,
    x: x6,
    y: y7
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x6,
    y: y7
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i22 = 0; i22 < validMiddleware.length; i22++) {
    const {
      name,
      fn
    } = validMiddleware[i22];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x6,
      y: y7,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x6 = nextX != null ? nextX : x6;
    y7 = nextY != null ? nextY : y7;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x6,
          y: y7
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i22 = -1;
    }
  }
  return {
    x: x6,
    y: y7,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x6,
    y: y7,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x6,
    y: y7,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x6,
      y: y7,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x6,
      y: y7
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d10) => d10.overflows[0] <= 0).sort((a41, b6) => a41.overflows[1] - b6.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d10) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d10.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d10) => [d10.placement, d10.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a41, b6) => a41[1] - b6[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x6,
        y: y7,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x6 + diffCoords.x,
        y: y7 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x6,
        y: y7,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x7,
              y: y8
            } = _ref;
            return {
              x: x7,
              y: y8
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x6,
        y: y7
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x6,
          y: limitedCoords.y - y7,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x: x6,
        y: y7,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x: x6,
        y: y7
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode2(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode2(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode2(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e43) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x6 = ($ ? round(rect.width) : rect.width) / width;
  let y7 = ($ ? round(rect.height) : rect.height) / height;
  if (!x6 || !Number.isFinite(x6)) {
    x6 = 1;
  }
  if (!y7 || !Number.isFinite(y7)) {
    y7 = 1;
  }
  return {
    x: x6,
    y: y7
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x6 = (clientRect.left + visualOffsets.x) / scale.x;
  let y7 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x6 *= iframeScale.x;
      y7 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x6 += left;
      y7 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x6,
    y: y7
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x6 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y7 = htmlRect.top + scroll.scrollTop;
  return {
    x: x6,
    y: y7
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x6 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y7 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x6 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x6,
    y: y7
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x6 = 0;
  let y7 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x6 = visualViewport.offsetLeft;
      y7 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x6,
    y: y7
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x6 = left * scale.x;
  const y7 = top * scale.y;
  return {
    width,
    height,
    x: x6,
    y: y7
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x6 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y7 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x6,
    y: y7,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e43) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React29 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react4.useLayoutEffect : import_react4.useEffect;
function deepEqual(a41, b6) {
  if (a41 === b6) {
    return true;
  }
  if (typeof a41 !== typeof b6) {
    return false;
  }
  if (typeof a41 === "function" && a41.toString() === b6.toString()) {
    return true;
  }
  let length;
  let i22;
  let keys;
  if (a41 && b6 && typeof a41 === "object") {
    if (Array.isArray(a41)) {
      length = a41.length;
      if (length !== b6.length) return false;
      for (i22 = length; i22-- !== 0; ) {
        if (!deepEqual(a41[i22], b6[i22])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a41);
    length = keys.length;
    if (length !== Object.keys(b6).length) {
      return false;
    }
    for (i22 = length; i22-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b6, keys[i22])) {
        return false;
      }
    }
    for (i22 = length; i22-- !== 0; ) {
      const key = keys[i22];
      if (key === "_owner" && a41.$$typeof) {
        continue;
      }
      if (!deepEqual(a41[key], b6[key])) {
        return false;
      }
    }
    return true;
  }
  return a41 !== a41 && b6 !== b6;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React29.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React29.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React29.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React29.useState(null);
  const [_floating, _setFloating] = React29.useState(null);
  const setReference = React29.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React29.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React29.useRef(null);
  const floatingRef = React29.useRef(null);
  const dataRef = React29.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React29.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React29.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React29.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React29.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React29.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x6 = roundByDPR(elements.floating, data.x);
    const y7 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x6 + "px, " + y7 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x6,
      top: y7
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React29.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var React30 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var NAME3 = "Arrow";
var Arrow = React30.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return (0, import_jsx_runtime11.jsx)(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : (0, import_jsx_runtime11.jsx)("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME3;
var Root3 = Arrow;

// node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-context/dist/index.mjs
var React31 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function createContextScope2(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React31.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = React31.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime12.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = React31.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React31.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React31.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes2(createScope, ...createContextScopeDeps)];
}
function composeContextScopes2(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React31.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var React32 = __toESM(require_react(), 1);
function useSize(element) {
  const [size4, setSize] = React32.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope2(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props) => {
  const { __scopePopper, children } = props;
  const [anchor, setAnchor] = React33.useState(null);
  return (0, import_jsx_runtime13.jsx)(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React33.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React33.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React33.useEffect(() => {
      context.onAnchorChange((virtualRef == null ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : (0, import_jsx_runtime13.jsx)(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME3 = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME3);
var PopperContent = React33.forwardRef(
  (props, forwardedRef) => {
    var _a, _b, _c, _d, _e, _f;
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props;
    const context = usePopperContext(CONTENT_NAME3, __scopePopper);
    const [content, setContent] = React33.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow4, setArrow] = React33.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = (arrowSize == null ? void 0 : arrowSize.width) ?? 0;
    const arrowHeight = (arrowSize == null ? void 0 : arrowSize.height) ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift3() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced == null ? void 0 : handlePlaced();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = (_a = middlewareData.arrow) == null ? void 0 : _a.x;
    const arrowY = (_b = middlewareData.arrow) == null ? void 0 : _b.y;
    const cannotCenterArrow = ((_c = middlewareData.arrow) == null ? void 0 : _c.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = React33.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return (0, import_jsx_runtime13.jsx)(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            (_d = middlewareData.transformOrigin) == null ? void 0 : _d.x,
            (_e = middlewareData.transformOrigin) == null ? void 0 : _e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_f = middlewareData.hide) == null ? void 0 : _f.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props.dir,
        children: (0, import_jsx_runtime13.jsx)(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: (0, import_jsx_runtime13.jsx)(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME3;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React33.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_jsx_runtime13.jsx)(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: (0, import_jsx_runtime13.jsx)(
          Root3,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _a, _b, _c;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_a = middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) + arrowWidth / 2;
    const arrowYCenter = (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) + arrowHeight / 2;
    let x6 = "";
    let y7 = "";
    if (placedSide === "bottom") {
      x6 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y7 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x6 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y7 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x6 = `${-arrowHeight}px`;
      y7 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x6 = `${rects.floating.width + arrowHeight}px`;
      y7 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x: x6, y: y7 } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root23 = Popper;
var Anchor = PopperAnchor;
var Content3 = PopperContent;
var Arrow2 = PopperArrow;

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const [isOpenDelayed, setIsOpenDelayed] = React34.useState(true);
  const isPointerInTransitRef = React34.useRef(false);
  const skipDelayTimerRef = React34.useRef(0);
  React34.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return (0, import_jsx_runtime14.jsx)(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayed,
      delayDuration,
      onOpen: React34.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        setIsOpenDelayed(false);
      }, []),
      onClose: React34.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: React34.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = React34.useState(null);
  const contentId = useId();
  const openTimerRef = React34.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React34.useRef(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange == null ? void 0 : onOpenChange(open2);
    }
  });
  const stateAttribute = React34.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React34.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React34.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React34.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React34.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  return (0, import_jsx_runtime14.jsx)(Root23, { ...popperScope, children: (0, import_jsx_runtime14.jsx)(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: React34.useCallback(() => {
        if (providerContext.isOpenDelayed) handleDelayedOpen();
        else handleOpen();
      }, [providerContext.isOpenDelayed, handleDelayedOpen, handleOpen]),
      onTriggerLeave: React34.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME3 = "TooltipTrigger";
var TooltipTrigger = React34.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME3, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME3, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = React34.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = React34.useRef(false);
    const hasPointerMoveOpenedRef = React34.useRef(false);
    const handlePointerUp = React34.useCallback(() => isPointerDownRef.current = false, []);
    React34.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return (0, import_jsx_runtime14.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime14.jsx)(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }
);
TooltipTrigger.displayName = TRIGGER_NAME3;
var PORTAL_NAME4 = "TooltipPortal";
var [PortalProvider2, usePortalContext2] = createTooltipContext(PORTAL_NAME4, {
  forceMount: void 0
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME4, __scopeTooltip);
  return (0, import_jsx_runtime14.jsx)(PortalProvider2, { scope: __scopeTooltip, forceMount, children: (0, import_jsx_runtime14.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime14.jsx)(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME4;
var CONTENT_NAME4 = "TooltipContent";
var TooltipContent = React34.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext2(CONTENT_NAME4, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME4, props.__scopeTooltip);
    return (0, import_jsx_runtime14.jsx)(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? (0, import_jsx_runtime14.jsx)(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime14.jsx)(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }
);
var TooltipContentHoverable = React34.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME4, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME4, props.__scopeTooltip);
  const ref = React34.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React34.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React34.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React34.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  React34.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React34.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React34.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = (trigger == null ? void 0 : trigger.contains(target)) || (content == null ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return (0, import_jsx_runtime14.jsx)(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var TooltipContentImpl = React34.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME4, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    React34.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    React34.useEffect(() => {
      if (context.trigger) {
        const handleScroll2 = (event) => {
          const target = event.target;
          if (target == null ? void 0 : target.contains(context.trigger)) onClose();
        };
        window.addEventListener("scroll", handleScroll2, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll2, { capture: true });
      }
    }, [context.trigger, onClose]);
    return (0, import_jsx_runtime14.jsx)(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: (0, import_jsx_runtime14.jsxs)(
          Content3,
          {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              (0, import_jsx_runtime14.jsx)(Slottable, { children }),
              (0, import_jsx_runtime14.jsx)(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: (0, import_jsx_runtime14.jsx)(Root, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          }
        )
      }
    );
  }
);
TooltipContent.displayName = CONTENT_NAME4;
var ARROW_NAME2 = "TooltipArrow";
var TooltipArrow = React34.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME2,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : (0, import_jsx_runtime14.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
TooltipArrow.displayName = ARROW_NAME2;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x: x6, y: y7 } = point;
  let inside = false;
  for (let i22 = 0, j2 = polygon.length - 1; i22 < polygon.length; j2 = i22++) {
    const xi = polygon[i22].x;
    const yi = polygon[i22].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y7 !== yj > y7 && x6 < (xj - xi) * (y7 - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a41, b6) => {
    if (a41.x < b6.x) return -1;
    else if (a41.x > b6.x) return 1;
    else if (a41.y < b6.y) return -1;
    else if (a41.y > b6.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i22 = 0; i22 < points.length; i22++) {
    const p38 = points[i22];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r44 = upperHull[upperHull.length - 2];
      if ((q.x - r44.x) * (p38.y - r44.y) >= (q.y - r44.y) * (p38.x - r44.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p38);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i22 = points.length - 1; i22 >= 0; i22--) {
    const p38 = points[i22];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r44 = lowerHull[lowerHull.length - 2];
      if ((q.x - r44.x) * (p38.y - r44.y) >= (q.y - r44.y) * (p38.x - r44.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p38);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider;
var Root32 = Tooltip;
var Trigger3 = TooltipTrigger;
var Portal3 = TooltipPortal;
var Content22 = TooltipContent;
var Arrow22 = TooltipArrow;

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React35 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var DirectionContext = React35.createContext(void 0);
var DirectionProvider = (props) => {
  const { dir, children } = props;
  return (0, import_jsx_runtime15.jsx)(DirectionContext.Provider, { value: dir, children });
};
function useDirection(localDir) {
  const globalDir = React35.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}

// node_modules/@radix-ui/themes/dist/esm/helpers/get-matching-gray-color.js
function a3(e43) {
  switch (e43) {
    case "tomato":
    case "red":
    case "ruby":
    case "crimson":
    case "pink":
    case "plum":
    case "purple":
    case "violet":
      return "mauve";
    case "iris":
    case "indigo":
    case "blue":
    case "sky":
    case "cyan":
      return "slate";
    case "teal":
    case "jade":
    case "mint":
    case "green":
      return "sage";
    case "grass":
    case "lime":
      return "olive";
    case "yellow":
    case "amber":
    case "orange":
    case "brown":
    case "gold":
    case "bronze":
      return "sand";
    case "gray":
      return "gray";
  }
}

// node_modules/@radix-ui/themes/dist/esm/props/radius.prop.js
var e11 = ["none", "small", "medium", "large", "full"];
var r7 = { radius: { type: "enum", values: e11, default: void 0 } };

// node_modules/@radix-ui/themes/dist/esm/components/theme.props.js
var p2 = ["inherit", "light", "dark"];
var t4 = ["solid", "translucent"];
var n3 = ["90%", "95%", "100%", "105%", "110%"];
var s3 = { ...o, hasBackground: { type: "boolean", default: true }, appearance: { type: "enum", values: p2, default: "inherit" }, accentColor: { type: "enum", values: o2, default: "indigo" }, grayColor: { type: "enum", values: e2, default: "auto" }, panelBackground: { type: "enum", values: t4, default: "translucent" }, radius: { type: "enum", values: e11, default: "medium" }, scaling: { type: "enum", values: n3, default: "100%" } };

// node_modules/@radix-ui/themes/dist/esm/components/theme.js
var d2 = () => {
};
var T = e12.createContext(void 0);
function H() {
  const a41 = e12.useContext(T);
  if (a41 === void 0) throw new Error("`useThemeContext` must be used within a `Theme`");
  return a41;
}
var I = e12.forwardRef((a41, s23) => e12.useContext(T) === void 0 ? e12.createElement(Provider, { delayDuration: 200 }, e12.createElement(DirectionProvider, { dir: "ltr" }, e12.createElement(R2, { ...a41, ref: s23 }))) : e12.createElement(A, { ...a41, ref: s23 }));
I.displayName = "Theme";
var R2 = e12.forwardRef((a41, s23) => {
  const { appearance: r44 = s3.appearance.default, accentColor: c5 = s3.accentColor.default, grayColor: l12 = s3.grayColor.default, panelBackground: p38 = s3.panelBackground.default, radius: n23 = s3.radius.default, scaling: t34 = s3.scaling.default, hasBackground: m18 = s3.hasBackground.default, ...u10 } = a41, [h4, i22] = e12.useState(r44);
  e12.useEffect(() => i22(r44), [r44]);
  const [y7, g7] = e12.useState(c5);
  e12.useEffect(() => g7(c5), [c5]);
  const [v9, C9] = e12.useState(l12);
  e12.useEffect(() => C9(l12), [l12]);
  const [k4, f19] = e12.useState(p38);
  e12.useEffect(() => f19(p38), [p38]);
  const [B4, x6] = e12.useState(n23);
  e12.useEffect(() => x6(n23), [n23]);
  const [P7, b6] = e12.useState(t34);
  return e12.useEffect(() => b6(t34), [t34]), e12.createElement(A, { ...u10, ref: s23, isRoot: true, hasBackground: m18, appearance: h4, accentColor: y7, grayColor: v9, panelBackground: k4, radius: B4, scaling: P7, onAppearanceChange: i22, onAccentColorChange: g7, onGrayColorChange: C9, onPanelBackgroundChange: f19, onRadiusChange: x6, onScalingChange: b6 });
});
R2.displayName = "ThemeRoot";
var A = e12.forwardRef((a41, s23) => {
  const r44 = e12.useContext(T), { asChild: c5, isRoot: l12, hasBackground: p38, appearance: n23 = (r44 == null ? void 0 : r44.appearance) ?? s3.appearance.default, accentColor: t34 = (r44 == null ? void 0 : r44.accentColor) ?? s3.accentColor.default, grayColor: m18 = (r44 == null ? void 0 : r44.resolvedGrayColor) ?? s3.grayColor.default, panelBackground: u10 = (r44 == null ? void 0 : r44.panelBackground) ?? s3.panelBackground.default, radius: h4 = (r44 == null ? void 0 : r44.radius) ?? s3.radius.default, scaling: i22 = (r44 == null ? void 0 : r44.scaling) ?? s3.scaling.default, onAppearanceChange: y7 = d2, onAccentColorChange: g7 = d2, onGrayColorChange: v9 = d2, onPanelBackgroundChange: C9 = d2, onRadiusChange: k4 = d2, onScalingChange: f19 = d2, ...B4 } = a41, x6 = c5 ? Slot : "div", P7 = m18 === "auto" ? a3(t34) : m18, b6 = a41.appearance === "light" || a41.appearance === "dark", S6 = p38 === void 0 ? l12 || b6 : p38;
  return e12.createElement(T.Provider, { value: e12.useMemo(() => ({ appearance: n23, accentColor: t34, grayColor: m18, resolvedGrayColor: P7, panelBackground: u10, radius: h4, scaling: i22, onAppearanceChange: y7, onAccentColorChange: g7, onGrayColorChange: v9, onPanelBackgroundChange: C9, onRadiusChange: k4, onScalingChange: f19 }), [n23, t34, m18, P7, u10, h4, i22, y7, g7, v9, C9, k4, f19]) }, e12.createElement(x6, { "data-is-root-theme": l12 ? "true" : "false", "data-accent-color": t34, "data-gray-color": P7, "data-has-background": S6 ? "true" : "false", "data-panel-background": u10, "data-radius": h4, "data-scaling": i22, ref: s23, ...B4, className: (0, import_classnames4.default)("radix-themes", { light: n23 === "light", dark: n23 === "dark" }, B4.className) }));
});
A.displayName = "ThemeImpl";

// node_modules/@radix-ui/themes/dist/esm/helpers/require-react-element.js
var o7 = __toESM(require_react(), 1);
var a4 = (t34) => {
  if (!o7.isValidElement(t34)) throw Error(`Expected a single React Element child, but got: ${o7.Children.toArray(t34).map((e43) => typeof e43 == "object" && "type" in e43 && typeof e43.type == "string" ? e43.type : typeof e43).join(", ")}`);
  return t34;
};

// node_modules/@radix-ui/themes/dist/esm/components/alert-dialog.js
var n4 = (t34) => e13.createElement(Root22, { ...t34 });
n4.displayName = "AlertDialog.Root";
var s4 = e13.forwardRef(({ children: t34, ...o60 }, i22) => e13.createElement(Trigger2, { ...o60, ref: i22, asChild: true }, a4(t34)));
s4.displayName = "AlertDialog.Trigger";
var p3 = e13.forwardRef(({ align: t34, ...o60 }, i22) => {
  const { align: P7, ...c5 } = s, { className: f19 } = v({ align: t34 }, { align: P7 }), { className: C9, forceMount: d10, container: y7, ...v9 } = v(o60, c5);
  return e13.createElement(Portal22, { container: y7, forceMount: d10 }, e13.createElement(I, { asChild: true }, e13.createElement(Overlay2, { className: "rt-BaseDialogOverlay rt-AlertDialogOverlay" }, e13.createElement("div", { className: "rt-BaseDialogScroll rt-AlertDialogScroll" }, e13.createElement("div", { className: `rt-BaseDialogScrollPadding rt-AlertDialogScrollPadding ${f19}` }, e13.createElement(Content2, { ...v9, ref: i22, className: (0, import_classnames5.default)("rt-BaseDialogContent", "rt-AlertDialogContent", C9) }))))));
});
p3.displayName = "AlertDialog.Content";
var g2 = e13.forwardRef((t34, o60) => e13.createElement(Title2, { asChild: true }, e13.createElement(r6, { size: "5", mb: "3", trim: "start", ...t34, asChild: false, ref: o60 })));
g2.displayName = "AlertDialog.Title";
var m4 = e13.forwardRef((t34, o60) => e13.createElement(Description2, { asChild: true }, e13.createElement(p, { as: "p", size: "3", ...t34, asChild: false, ref: o60 })));
m4.displayName = "AlertDialog.Description";
var D = e13.forwardRef(({ children: t34, ...o60 }, i22) => e13.createElement(Action, { ...o60, ref: i22, asChild: true }, a4(t34)));
D.displayName = "AlertDialog.Action";
var A2 = e13.forwardRef(({ children: t34, ...o60 }, i22) => e13.createElement(Cancel, { ...o60, ref: i22, asChild: true }, a4(t34)));
A2.displayName = "AlertDialog.Cancel";

// node_modules/@radix-ui/react-aspect-ratio/dist/index.mjs
var React36 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var NAME4 = "AspectRatio";
var AspectRatio = React36.forwardRef(
  (props, forwardedRef) => {
    const { ratio = 1 / 1, style, ...aspectRatioProps } = props;
    return (0, import_jsx_runtime16.jsx)(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / ratio}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: (0, import_jsx_runtime16.jsx)(
          Primitive.div,
          {
            ...aspectRatioProps,
            ref: forwardedRef,
            style: {
              ...style,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
AspectRatio.displayName = NAME4;

// node_modules/@radix-ui/themes/dist/esm/components/avatar.js
var r8 = __toESM(require_react(), 1);
var import_classnames6 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var React37 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = React37.useState("idle");
    return (0, import_jsx_runtime17.jsx)(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: (0, import_jsx_runtime17.jsx)(Primitive.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }
);
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, src, onLoadingStatusChange = () => {
    }, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps.referrerPolicy);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? (0, import_jsx_runtime17.jsx)(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = React37.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = React37.useState(delayMs === void 0);
    React37.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? (0, import_jsx_runtime17.jsx)(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }
);
AvatarFallback.displayName = FALLBACK_NAME;
function useImageLoadingStatus(src, referrerPolicy) {
  const [loadingStatus, setLoadingStatus] = React37.useState("idle");
  useLayoutEffect2(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted) return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    return () => {
      isMounted = false;
    };
  }, [src, referrerPolicy]);
  return loadingStatus;
}
var Root4 = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;

// node_modules/@radix-ui/themes/dist/esm/components/avatar.props.js
var s5 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var a5 = ["solid", "soft"];
var p4 = { ...o, size: { type: "enum", className: "rt-r-size", values: s5, default: "3", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a5, default: "soft" }, ...s2, ...o3, ...r7, fallback: { type: "ReactNode", required: true } };

// node_modules/@radix-ui/themes/dist/esm/helpers/get-subtree.js
var a6 = __toESM(require_react(), 1);
function d3(i22, e43) {
  const { asChild: r44, children: c5 } = i22;
  if (!r44) return typeof e43 == "function" ? e43(c5) : e43;
  const t34 = a6.Children.only(c5);
  return a6.cloneElement(t34, { children: typeof e43 == "function" ? e43(t34.props.children) : e43 });
}

// node_modules/@radix-ui/themes/dist/esm/components/avatar.js
var i2 = r8.forwardRef((t34, e43) => {
  const { asChild: o60, children: a41, className: s23, style: p38, color: v9, radius: f19, ...d10 } = v(t34, p4, r5);
  return r8.createElement(Root4, { "data-accent-color": v9, "data-radius": f19, className: (0, import_classnames6.default)("rt-reset", "rt-AvatarRoot", s23), style: p38, asChild: o60 }, d3({ asChild: o60, children: a41 }, r8.createElement(n5, { ref: e43, ...d10 })));
});
i2.displayName = "Avatar";
var n5 = r8.forwardRef(({ fallback: t34, ...e43 }, o60) => {
  const [a41, s23] = r8.useState("idle");
  return r8.createElement(r8.Fragment, null, a41 === "idle" || a41 === "loading" ? r8.createElement("span", { className: "rt-AvatarFallback" }) : null, a41 === "error" ? r8.createElement(Fallback, { className: (0, import_classnames6.default)("rt-AvatarFallback", { "rt-one-letter": typeof t34 == "string" && t34.length === 1, "rt-two-letters": typeof t34 == "string" && t34.length === 2 }), delayMs: 0 }, t34) : null, r8.createElement(Image, { ref: o60, className: "rt-AvatarImage", ...e43, onLoadingStatusChange: (p38) => {
    var _a;
    (_a = e43.onLoadingStatusChange) == null ? void 0 : _a.call(e43, p38), s23(p38);
  } }));
});
n5.displayName = "AvatarImpl";

// node_modules/@radix-ui/themes/dist/esm/components/badge.js
var o8 = __toESM(require_react(), 1);
var import_classnames7 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/badge.props.js
var t5 = ["1", "2", "3"];
var a7 = ["solid", "soft", "surface", "outline"];
var p5 = { ...o, size: { type: "enum", className: "rt-r-size", values: t5, default: "1", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a7, default: "soft" }, ...s2, ...o3, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/badge.js
var e14 = o8.forwardRef((r44, p38) => {
  const { asChild: s23, className: t34, color: a41, radius: m18, ...n23 } = v(r44, p5, r5);
  return o8.createElement(s23 ? Slot : "span", { "data-accent-color": a41, "data-radius": m18, ...n23, ref: p38, className: (0, import_classnames7.default)("rt-reset", "rt-Badge", t34) });
});
e14.displayName = "Badge";

// node_modules/@radix-ui/themes/dist/esm/components/blockquote.js
var o9 = __toESM(require_react(), 1);
var import_classnames8 = __toESM(require_classnames(), 1);
var e15 = o9.forwardRef((t34, p38) => {
  const { asChild: r44, children: s23, className: m18, ...l12 } = t34, c5 = r44 ? Slot : "blockquote";
  return o9.createElement(p, { asChild: true, ...l12, ref: p38, className: (0, import_classnames8.default)("rt-Blockquote", m18) }, o9.createElement(c5, null, s23));
});
e15.displayName = "Blockquote";

// node_modules/@radix-ui/themes/dist/esm/components/box.js
var o11 = __toESM(require_react(), 1);
var import_classnames9 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/box.props.js
var s6 = ["div", "span"];
var p6 = ["none", "inline", "inline-block", "block"];
var o10 = { as: { type: "enum", values: s6, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: p6, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/padding.props.js
var e16 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var p7 = { p: { type: "enum | string", className: "rt-r-p", customProperties: ["--p"], values: e16, responsive: true }, px: { type: "enum | string", className: "rt-r-px", customProperties: ["--pl", "--pr"], values: e16, responsive: true }, py: { type: "enum | string", className: "rt-r-py", customProperties: ["--pt", "--pb"], values: e16, responsive: true }, pt: { type: "enum | string", className: "rt-r-pt", customProperties: ["--pt"], values: e16, responsive: true }, pr: { type: "enum | string", className: "rt-r-pr", customProperties: ["--pr"], values: e16, responsive: true }, pb: { type: "enum | string", className: "rt-r-pb", customProperties: ["--pb"], values: e16, responsive: true }, pl: { type: "enum | string", className: "rt-r-pl", customProperties: ["--pl"], values: e16, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/props/layout.props.js
var r9 = ["visible", "hidden", "clip", "scroll", "auto"];
var i3 = ["static", "relative", "absolute", "fixed", "sticky"];
var e17 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
var p8 = ["0", "1"];
var n7 = ["0", "1"];
var u = { ...p7, ...t, ...e, position: { type: "enum", className: "rt-r-position", values: i3, responsive: true }, inset: { type: "enum | string", className: "rt-r-inset", customProperties: ["--inset"], values: e17, responsive: true }, top: { type: "enum | string", className: "rt-r-top", customProperties: ["--top"], values: e17, responsive: true }, right: { type: "enum | string", className: "rt-r-right", customProperties: ["--right"], values: e17, responsive: true }, bottom: { type: "enum | string", className: "rt-r-bottom", customProperties: ["--bottom"], values: e17, responsive: true }, left: { type: "enum | string", className: "rt-r-left", customProperties: ["--left"], values: e17, responsive: true }, overflow: { type: "enum", className: "rt-r-overflow", values: r9, responsive: true }, overflowX: { type: "enum", className: "rt-r-ox", values: r9, responsive: true }, overflowY: { type: "enum", className: "rt-r-oy", values: r9, responsive: true }, flexBasis: { type: "string", className: "rt-r-fb", customProperties: ["--flex-basis"], responsive: true }, flexShrink: { type: "enum | string", className: "rt-r-fs", customProperties: ["--flex-shrink"], values: p8, responsive: true }, flexGrow: { type: "enum | string", className: "rt-r-fg", customProperties: ["--flex-grow"], values: n7, responsive: true }, gridArea: { type: "string", className: "rt-r-ga", customProperties: ["--grid-area"], responsive: true }, gridColumn: { type: "string", className: "rt-r-gc", customProperties: ["--grid-column"], responsive: true }, gridColumnStart: { type: "string", className: "rt-r-gcs", customProperties: ["--grid-column-start"], responsive: true }, gridColumnEnd: { type: "string", className: "rt-r-gce", customProperties: ["--grid-column-end"], responsive: true }, gridRow: { type: "string", className: "rt-r-gr", customProperties: ["--grid-row"], responsive: true }, gridRowStart: { type: "string", className: "rt-r-grs", customProperties: ["--grid-row-start"], responsive: true }, gridRowEnd: { type: "string", className: "rt-r-gre", customProperties: ["--grid-row-end"], responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/box.js
var p9 = o11.forwardRef((r44, s23) => {
  const { className: t34, asChild: e43, as: m18 = "div", ...a41 } = v(r44, o10, u, r5);
  return o11.createElement(e43 ? Slot : m18, { ...a41, ref: s23, className: (0, import_classnames9.default)("rt-Box", t34) });
});
p9.displayName = "Box";

// node_modules/@radix-ui/themes/dist/esm/components/button.js
var t8 = __toESM(require_react(), 1);
var import_classnames13 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/base-button.js
var o14 = __toESM(require_react(), 1);
var import_classnames12 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/base-button.props.js
var t6 = ["1", "2", "3", "4"];
var a8 = ["classic", "solid", "soft", "surface", "outline", "ghost"];
var i4 = { ...o, size: { type: "enum", className: "rt-r-size", values: t6, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a8, default: "solid" }, ...s2, ...o3, ...r7, loading: { type: "boolean", className: "rt-loading", default: false } };

// node_modules/@radix-ui/themes/dist/esm/components/flex.js
var o13 = __toESM(require_react(), 1);
var import_classnames10 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/props/gap.props.js
var e18 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var p10 = { gap: { type: "enum | string", className: "rt-r-gap", customProperties: ["--gap"], values: e18, responsive: true }, gapX: { type: "enum | string", className: "rt-r-cg", customProperties: ["--column-gap"], values: e18, responsive: true }, gapY: { type: "enum | string", className: "rt-r-rg", customProperties: ["--row-gap"], values: e18, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/flex.props.js
var t7 = ["div", "span"];
var p11 = ["none", "inline-flex", "flex"];
var a9 = ["row", "column", "row-reverse", "column-reverse"];
var o12 = ["start", "center", "end", "baseline", "stretch"];
var n9 = ["start", "center", "end", "between"];
var l4 = ["nowrap", "wrap", "wrap-reverse"];
var u2 = { as: { type: "enum", values: t7, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: p11, responsive: true }, direction: { type: "enum", className: "rt-r-fd", values: a9, responsive: true }, align: { type: "enum", className: "rt-r-ai", values: o12, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: n9, parseValue: f, responsive: true }, wrap: { type: "enum", className: "rt-r-fw", values: l4, responsive: true }, ...p10 };
function f(e43) {
  return e43 === "between" ? "space-between" : e43;
}

// node_modules/@radix-ui/themes/dist/esm/components/flex.js
var p12 = o13.forwardRef((r44, e43) => {
  const { className: s23, asChild: t34, as: m18 = "div", ...l12 } = v(r44, u2, u, r5);
  return o13.createElement(t34 ? Slot : m18, { ...l12, ref: e43, className: (0, import_classnames10.default)("rt-Flex", s23) });
});
p12.displayName = "Flex";

// node_modules/@radix-ui/themes/dist/esm/components/spinner.js
var n10 = __toESM(require_react(), 1);
var import_classnames11 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/spinner.props.js
var e19 = ["1", "2", "3"];
var s7 = { size: { type: "enum", className: "rt-r-size", values: e19, default: "2", responsive: true }, loading: { type: "boolean", default: true } };

// node_modules/@radix-ui/themes/dist/esm/components/spinner.js
var s8 = n10.forwardRef((i22, o60) => {
  const { className: a41, children: e43, loading: t34, ...m18 } = v(i22, s7, r5);
  if (!t34) return e43;
  const r44 = n10.createElement("span", { ...m18, ref: o60, className: (0, import_classnames11.default)("rt-Spinner", a41) }, n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }), n10.createElement("span", { className: "rt-SpinnerLeaf" }));
  return e43 === void 0 ? r44 : n10.createElement(p12, { asChild: true, position: "relative", align: "center", justify: "center" }, n10.createElement("span", null, n10.createElement("span", { "aria-hidden": true, style: { display: "contents", visibility: "hidden" }, inert: void 0 }, e43), n10.createElement(p12, { asChild: true, align: "center", justify: "center", position: "absolute", inset: "0" }, n10.createElement("span", null, r44))));
});
s8.displayName = "Spinner";

// node_modules/@radix-ui/themes/dist/esm/helpers/map-prop-values.js
function s9(e43, t34) {
  if (e43 !== void 0) return typeof e43 == "string" ? t34(e43) : Object.fromEntries(Object.entries(e43).map(([o60, n23]) => [o60, t34(n23)]));
}
function p13(e43) {
  return e43 === "3" ? "3" : "2";
}
function r10(e43) {
  switch (e43) {
    case "1":
      return "1";
    case "2":
    case "3":
      return "2";
    case "4":
      return "3";
  }
}

// node_modules/@radix-ui/themes/dist/esm/components/base-button.js
var n11 = o14.forwardRef((t34, p38) => {
  const { size: i22 = i4.size.default } = t34, { className: a41, children: e43, asChild: m18, color: d10, radius: l12, disabled: s23 = t34.loading, ...u10 } = v(t34, i4, r5);
  return o14.createElement(m18 ? Slot : "button", { "data-disabled": s23 || void 0, "data-accent-color": d10, "data-radius": l12, ...u10, ref: p38, className: (0, import_classnames12.default)("rt-reset", "rt-BaseButton", a41), disabled: s23 }, t34.loading ? o14.createElement(o14.Fragment, null, o14.createElement("span", { style: { display: "contents", visibility: "hidden" }, "aria-hidden": true }, e43), o14.createElement(VisuallyHidden, null, e43), o14.createElement(p12, { asChild: true, align: "center", justify: "center", position: "absolute", inset: "0" }, o14.createElement("span", null, o14.createElement(s8, { size: s9(i22, r10) })))) : e43);
});
n11.displayName = "BaseButton";

// node_modules/@radix-ui/themes/dist/esm/components/button.js
var o15 = t8.forwardRef(({ className: e43, ...n23 }, r44) => t8.createElement(n11, { ...n23, ref: r44, className: (0, import_classnames13.default)("rt-Button", e43) }));
o15.displayName = "Button";

// node_modules/@radix-ui/themes/dist/esm/components/callout.js
var callout_exports = {};
__export(callout_exports, {
  Icon: () => m5,
  Root: () => n12,
  Text: () => C
});
var o16 = __toESM(require_react(), 1);
var import_classnames14 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/callout.props.js
var t9 = ["1", "2", "3"];
var r11 = ["soft", "surface", "outline"];
var a11 = { ...o, size: { type: "enum", className: "rt-r-size", values: t9, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r11, default: "soft" }, ...s2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/callout.js
var a12 = o16.createContext({});
var n12 = o16.forwardRef((t34, l12) => {
  const { size: e43 = a11.size.default } = t34, { asChild: r44, children: u10, className: i22, color: c5, ...f19 } = v(t34, a11, r5);
  return o16.createElement(r44 ? Slot : "div", { "data-accent-color": c5, ...f19, className: (0, import_classnames14.default)("rt-CalloutRoot", i22), ref: l12 }, o16.createElement(a12.Provider, { value: o16.useMemo(() => ({ size: e43 }), [e43]) }, u10));
});
n12.displayName = "Callout.Root";
var m5 = o16.forwardRef(({ className: t34, ...l12 }, e43) => o16.createElement("div", { ...l12, className: (0, import_classnames14.default)("rt-CalloutIcon", t34), ref: e43 }));
m5.displayName = "Callout.Icon";
var C = o16.forwardRef(({ className: t34, ...l12 }, e43) => {
  const { size: r44 } = o16.useContext(a12);
  return o16.createElement(p, { as: "p", size: s9(r44, p13), ...l12, asChild: false, ref: e43, className: (0, import_classnames14.default)("rt-CalloutText", t34) });
});
C.displayName = "Callout.Text";

// node_modules/@radix-ui/themes/dist/esm/components/card.js
var r13 = __toESM(require_react(), 1);
var import_classnames15 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/card.props.js
var e20 = ["1", "2", "3", "4", "5"];
var r12 = ["surface", "classic", "ghost"];
var a13 = { ...o, size: { type: "enum", className: "rt-r-size", values: e20, default: "1", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r12, default: "surface" } };

// node_modules/@radix-ui/themes/dist/esm/components/card.js
var o17 = r13.forwardRef((p38, e43) => {
  const { asChild: t34, className: s23, ...m18 } = v(p38, a13, r5);
  return r13.createElement(t34 ? Slot : "div", { ref: e43, ...m18, className: (0, import_classnames15.default)("rt-reset", "rt-BaseCard", "rt-Card", s23) });
});
o17.displayName = "Card";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-cards.js
var checkbox_cards_exports = {};
__export(checkbox_cards_exports, {
  Item: () => k2,
  Root: () => b
});
var o22 = __toESM(require_react(), 1);
var import_classnames17 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.primitive.js
var o18 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var React39 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var React38 = __toESM(require_react(), 1);
function usePrevious(value) {
  const ref = React38.useRef({ value, previous: value });
  return React38.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

// node_modules/@radix-ui/react-checkbox/dist/index.mjs
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME);
var [CheckboxProvider, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
var Checkbox = React39.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    const [button, setButton] = React39.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React39.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    });
    const initialCheckedStateRef = React39.useRef(checked);
    React39.useEffect(() => {
      const form2 = button == null ? void 0 : button.form;
      if (form2) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form2.addEventListener("reset", reset);
        return () => form2.removeEventListener("reset", reset);
      }
    }, [button, setChecked]);
    return (0, import_jsx_runtime18.jsxs)(CheckboxProvider, { scope: __scopeCheckbox, state: checked, disabled, children: [
      (0, import_jsx_runtime18.jsx)(
        Primitive.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
          "aria-required": required,
          "data-state": getState2(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...checkboxProps,
          ref: composedRefs,
          onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
            if (event.key === "Enter") event.preventDefault();
          }),
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && (0, import_jsx_runtime18.jsx)(
        BubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" },
          defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked
        }
      )
    ] });
  }
);
Checkbox.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = React39.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return (0, import_jsx_runtime18.jsx)(Presence, { present: forceMount || isIndeterminate(context.state) || context.state === true, children: (0, import_jsx_runtime18.jsx)(
      Primitive.span,
      {
        "data-state": getState2(context.state),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef,
        style: { pointerEvents: "none", ...props.style }
      }
    ) });
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BubbleInput = (props) => {
  const { control, checked, bubbles = true, defaultChecked, ...inputProps } = props;
  const ref = React39.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React39.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      input.indeterminate = isIndeterminate(checked);
      setChecked.call(input, isIndeterminate(checked) ? false : checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  const defaultCheckedRef = React39.useRef(isIndeterminate(checked) ? false : checked);
  return (0, import_jsx_runtime18.jsx)(
    "input",
    {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: defaultChecked ?? defaultCheckedRef.current,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState2(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
var Root5 = Checkbox;
var Indicator = CheckboxIndicator;

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var React43 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collection/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-context/dist/index.mjs
var React40 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
function createContextScope3(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React40.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = React40.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime19.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = React40.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React40.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React40.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes3(createScope, ...createContextScopeDeps)];
}
function composeContextScopes3(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React40.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-collection/dist/index.mjs
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
function createCollection(name) {
  const PROVIDER_NAME2 = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope6] = createContextScope3(PROVIDER_NAME2);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME2,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = import_react5.default.useRef(null);
    const itemMap = import_react5.default.useRef(/* @__PURE__ */ new Map()).current;
    return (0, import_jsx_runtime20.jsx)(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME2;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlot = import_react5.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return (0, import_jsx_runtime20.jsx)(Slot, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlot = import_react5.default.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = import_react5.default.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      import_react5.default.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return (0, import_jsx_runtime20.jsx)(Slot, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection6(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = import_react5.default.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a41, b6) => orderedNodes.indexOf(a41.ref.current) - orderedNodes.indexOf(b6.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection6,
    createCollectionScope6
  ];
}

// node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-context/dist/index.mjs
var React42 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
function createContextScope4(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React42.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = React42.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime21.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = React42.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React42.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React42.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes4(createScope, ...createContextScopeDeps)];
}
function composeContextScopes4(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React42.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS2 = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope4(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = React43.forwardRef(
  (props, forwardedRef) => {
    return (0, import_jsx_runtime22.jsx)(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: (0, import_jsx_runtime22.jsx)(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: (0, import_jsx_runtime22.jsx)(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = React43.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = React43.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId = null, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId,
    onChange: onCurrentTabStopIdChange
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = React43.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = React43.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = React43.useState(0);
  React43.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return (0, import_jsx_runtime22.jsx)(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: React43.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: React43.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: React43.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: React43.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: (0, import_jsx_runtime22.jsx)(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS2);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst2(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = React43.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    React43.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return (0, import_jsx_runtime22.jsx)(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: (0, import_jsx_runtime22.jsx)(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst2(candidateNodes));
              }
            })
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst2(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root6 = RovingFocusGroup;
var Item = RovingFocusGroupItem;

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.primitive.js
var k = "CheckboxGroup";
var [O, w] = createContextScope(k, [createRovingFocusGroupScope, createCheckboxScope]);
var y = createRovingFocusGroupScope();
var S = createCheckboxScope();
var [T3, B] = O(k);
var x2 = o18.forwardRef((r44, i22) => {
  const { __scopeCheckboxGroup: e43, name: p38, defaultValue: c5, value: t34, required: n23 = false, disabled: s23 = false, orientation: d10, dir: m18, loop: C9 = true, onValueChange: u10, ...h4 } = r44, F = y(e43), v9 = useDirection(m18), [_ = [], a41] = useControllableState({ prop: t34, defaultProp: c5, onChange: u10 }), V = o18.useCallback((l12) => a41((b6 = []) => [...b6, l12]), [a41]), q = o18.useCallback((l12) => a41((b6 = []) => b6.filter((N8) => N8 !== l12)), [a41]);
  return o18.createElement(T3, { scope: e43, name: p38, required: n23, disabled: s23, value: _, onItemCheck: V, onItemUncheck: q }, o18.createElement(Root6, { asChild: true, ...F, orientation: d10, dir: v9, loop: C9 }, o18.createElement(Primitive.div, { role: "group", "data-disabled": s23 ? "" : void 0, dir: v9, ...h4, ref: i22 })));
});
x2.displayName = k;
var E2 = "CheckboxGroupItem";
var f4 = o18.forwardRef((r44, i22) => {
  var _a;
  const { __scopeCheckboxGroup: e43, disabled: p38, ...c5 } = r44, t34 = B(E2, e43), n23 = t34.disabled || p38, s23 = y(e43), d10 = S(e43), m18 = o18.useRef(null), C9 = useComposedRefs(i22, m18), u10 = (_a = t34.value) == null ? void 0 : _a.includes(c5.value);
  return o18.createElement(Item, { asChild: true, ...s23, focusable: !n23, active: u10 }, o18.createElement(Root5, { name: t34.name, disabled: n23, required: t34.required, checked: u10, ...d10, ...c5, ref: C9, onCheckedChange: (h4) => {
    h4 ? t34.onItemCheck(r44.value) : t34.onItemUncheck(r44.value);
  } }));
});
f4.displayName = E2;
var H2 = "CheckboxGroupIndicator";
var P = o18.forwardRef((r44, i22) => {
  const { __scopeCheckboxGroup: e43, ...p38 } = r44, c5 = S(e43);
  return o18.createElement(Indicator, { ...c5, ...p38, ref: i22 });
});
P.displayName = H2;
var K = x2;
var X = f4;
var j = P;

// node_modules/@radix-ui/themes/dist/esm/components/grid.props.js
var a15 = ["div", "span"];
var n13 = ["none", "inline-grid", "grid"];
var p15 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var u3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var i5 = ["row", "column", "dense", "row-dense", "column-dense"];
var l5 = ["start", "center", "end", "baseline", "stretch"];
var f5 = ["start", "center", "end", "between"];
var s11 = { as: { type: "enum", values: a15, default: "div" }, ...o, display: { type: "enum", className: "rt-r-display", values: n13, responsive: true }, areas: { type: "string", className: "rt-r-gta", customProperties: ["--grid-template-areas"], responsive: true }, columns: { type: "enum | string", className: "rt-r-gtc", customProperties: ["--grid-template-columns"], values: p15, parseValue: r14, responsive: true }, rows: { type: "enum | string", className: "rt-r-gtr", customProperties: ["--grid-template-rows"], values: u3, parseValue: r14, responsive: true }, flow: { type: "enum", className: "rt-r-gaf", values: i5, responsive: true }, align: { type: "enum", className: "rt-r-ai", values: l5, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: f5, parseValue: m6, responsive: true }, ...p10 };
function r14(e43) {
  return s11.columns.values.includes(e43) ? e43 : (e43 == null ? void 0 : e43.match(/^\d+$/)) ? `repeat(${e43}, minmax(0, 1fr))` : e43;
}
function m6(e43) {
  return e43 === "between" ? "space-between" : e43;
}

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-cards.props.js
var a16 = ["1", "2", "3"];
var t10 = ["surface", "classic"];
var p16 = { ...o, size: { type: "enum", className: "rt-r-size", values: a16, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t10, default: "surface" }, ...r2, ...o3, columns: { ...s11.columns, default: "repeat(auto-fit, minmax(200px, 1fr))" }, gap: { ...s11.gap, default: "4" } };

// node_modules/@radix-ui/themes/dist/esm/components/base-checkbox.props.js
var r15 = ["1", "2", "3"];
var o19 = ["classic", "surface", "soft"];
var t11 = { size: { type: "enum", className: "rt-r-size", values: r15, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: o19, default: "surface" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/grid.js
var r16 = __toESM(require_react(), 1);
var import_classnames16 = __toESM(require_classnames(), 1);
var o20 = r16.forwardRef((p38, s23) => {
  const { className: t34, asChild: e43, as: i22 = "div", ...m18 } = v(p38, s11, u, r5);
  return r16.createElement(e43 ? Slot : i22, { ...m18, ref: s23, className: (0, import_classnames16.default)("rt-Grid", t34) });
});
o20.displayName = "Grid";

// node_modules/@radix-ui/themes/dist/esm/components/icons.js
var import_react6 = __toESM(require_react(), 1);
var r17 = import_react6.default.forwardRef((e43, n23) => import_react6.default.createElement("svg", { width: "9", height: "9", viewBox: "0 0 9 9", fill: "currentcolor", xmlns: "http://www.w3.org/2000/svg", ...e43, ref: n23 }, import_react6.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z" })));
r17.displayName = "ThickDividerHorizontalIcon";
var t12 = import_react6.default.forwardRef((e43, n23) => import_react6.default.createElement("svg", { width: "9", height: "9", viewBox: "0 0 9 9", fill: "currentcolor", xmlns: "http://www.w3.org/2000/svg", ...e43, ref: n23 }, import_react6.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z" })));
t12.displayName = "ThickCheckIcon";
var i6 = import_react6.default.forwardRef((e43, n23) => import_react6.default.createElement("svg", { width: "9", height: "9", viewBox: "0 0 9 9", fill: "currentcolor", xmlns: "http://www.w3.org/2000/svg", ...e43, ref: n23 }, import_react6.default.createElement("path", { d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z" })));
i6.displayName = "ChevronDownIcon";
var l6 = import_react6.default.forwardRef((e43, n23) => import_react6.default.createElement("svg", { width: "9", height: "9", viewBox: "0 0 9 9", fill: "currentcolor", xmlns: "http://www.w3.org/2000/svg", ...e43, ref: n23 }, import_react6.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z" })));
l6.displayName = "ThickChevronRightIcon";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-cards.js
var x3 = "CheckboxCards";
var [G] = createContextScope(x3, [w]);
var d5 = w();
var [v2, N2] = G(x3);
var b = o22.forwardRef((e43, s23) => {
  const { __scopeCheckboxCards: r44, className: c5, color: p38, ...a41 } = v(e43, p16, r5), t34 = d5(r44);
  return o22.createElement(v2, { scope: r44, size: e43.size, highContrast: e43.highContrast }, o22.createElement(o20, { asChild: true }, o22.createElement(K, { ...t34, "data-accent-color": p38, ...a41, ref: s23, className: (0, import_classnames17.default)("rt-CheckboxCardsRoot", c5) })));
});
b.displayName = "CheckboxCards.Root";
var k2 = o22.forwardRef(({ __scopeCheckboxCards: e43, children: s23, className: r44, style: c5, ...p38 }, a41) => {
  const t34 = N2("CheckboxCardsItem", e43), i22 = d5(e43), { className: P7 } = v({ size: t34 == null ? void 0 : t34.size, variant: "surface", highContrast: t34 == null ? void 0 : t34.highContrast }, t11);
  return o22.createElement("label", { className: (0, import_classnames17.default)("rt-BaseCard", "rt-CheckboxCardsItem", r44), style: c5 }, s23, o22.createElement(X, { ...i22, ...p38, ref: a41, className: (0, import_classnames17.default)("rt-reset", "rt-BaseCheckboxRoot", "rt-CheckboxCardCheckbox", P7) }, o22.createElement(j, { ...i22, asChild: true, className: "rt-BaseCheckboxIndicator" }, o22.createElement(t12, null))));
});
k2.displayName = "CheckboxCards.Item";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.js
var checkbox_group_exports = {};
__export(checkbox_group_exports, {
  Item: () => l7,
  Root: () => f6
});
var o23 = __toESM(require_react(), 1);
var import_classnames18 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.props.js
var e21 = { ...o, ...t11 };

// node_modules/@radix-ui/themes/dist/esm/components/checkbox-group.js
var b2 = "CheckboxGroup";
var [N3] = createContextScope(b2, [w]);
var G2 = w();
var [E3, P2] = N3(b2);
var f6 = o23.forwardRef(({ color: s23 = e21.color.default, highContrast: e43 = e21.highContrast.default, size: r44 = e21.size.default, variant: t34 = e21.variant.default, ...p38 }, m18) => {
  const { __scopeCheckboxGroup: c5, className: h4, ...I5 } = v(p38, r5), d10 = G2(c5);
  return o23.createElement(E3, { scope: c5, color: s23, size: r44, highContrast: e43, variant: t34 }, o23.createElement(K, { ...d10, ...I5, ref: m18, className: (0, import_classnames18.default)("rt-CheckboxGroupRoot", h4) }));
});
f6.displayName = "CheckboxGroup.Root";
var l7 = o23.forwardRef((s23, e43) => {
  const { __scopeCheckboxGroup: r44, children: t34, className: p38, style: m18, ...c5 } = s23, { size: h4 } = P2("CheckboxGroupItem", r44);
  return t34 ? o23.createElement(p, { as: "label", size: h4, className: (0, import_classnames18.default)("rt-CheckboxGroupItem", p38), style: m18 }, o23.createElement(u4, { __scopeCheckboxGroup: r44, ...c5, ref: e43 }), t34 && o23.createElement("span", { className: "rt-CheckboxGroupItemInner" }, t34)) : o23.createElement(u4, { __scopeCheckboxGroup: r44, ...c5, ref: e43, className: p38, style: m18 });
});
l7.displayName = "CheckboxGroup.Item";
var u4 = o23.forwardRef(({ __scopeCheckboxGroup: s23, ...e43 }, r44) => {
  const t34 = P2("CheckboxGroupItemCheckbox", s23), p38 = G2(s23), { color: m18, className: c5 } = v({ ...e43, ...t34 }, e21, r5);
  return o23.createElement(X, { ...p38, "data-accent-color": m18, ...e43, ref: r44, className: (0, import_classnames18.default)("rt-reset", "rt-BaseCheckboxRoot", "rt-CheckboxGroupItemCheckbox", c5) }, o23.createElement(j, { ...p38, asChild: true, className: "rt-BaseCheckboxIndicator" }, o23.createElement(t12, null)));
});
u4.displayName = "CheckboxGroup.ItemCheckbox";

// node_modules/@radix-ui/themes/dist/esm/components/checkbox.js
var e22 = __toESM(require_react(), 1);
var import_classnames19 = __toESM(require_classnames(), 1);
var c = e22.forwardRef((p38, i22) => {
  const { className: s23, color: h4, checked: a41, defaultChecked: o60, onCheckedChange: m18, ...n23 } = v(p38, t11, r5), [r44, k4] = useControllableState({ prop: a41, defaultProp: o60, onChange: m18 });
  return e22.createElement(Root5, { "data-accent-color": h4, ...n23, defaultChecked: o60, checked: r44, onCheckedChange: k4, asChild: false, ref: i22, className: (0, import_classnames19.default)("rt-reset", "rt-BaseCheckboxRoot", "rt-CheckboxRoot", s23) }, e22.createElement(Indicator, { asChild: true, className: "rt-BaseCheckboxIndicator rt-CheckboxIndicator" }, e22.createElement(r44 === "indeterminate" ? r17 : t12, null)));
});
c.displayName = "Checkbox";

// node_modules/@radix-ui/themes/dist/esm/components/code.js
var r18 = __toESM(require_react(), 1);
var import_classnames20 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/code.props.js
var a18 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var i7 = ["solid", "soft", "outline", "ghost"];
var f7 = { ...o, size: { type: "enum", className: "rt-r-size", values: a18, responsive: true }, variant: { type: "enum", className: "rt-variant", values: i7, default: "soft" }, ...t3, ...s2, ...o3, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/code.js
var p17 = r18.forwardRef((o60, t34) => {
  const { asChild: s23, className: m18, color: e43, ...d10 } = v(o60, f7, r5), n23 = o60.variant === "ghost" ? e43 || void 0 : e43;
  return r18.createElement(s23 ? Slot : "code", { "data-accent-color": n23, ...d10, ref: t34, className: (0, import_classnames20.default)("rt-reset", "rt-Code", m18) });
});
p17.displayName = "Code";

// node_modules/@radix-ui/themes/dist/esm/components/container.js
var o24 = __toESM(require_react(), 1);
var import_classnames21 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/container.props.js
var r19 = ["1", "2", "3", "4"];
var t13 = ["none", "initial"];
var p18 = ["left", "center", "right"];
var n14 = { ...o, size: { type: "enum", className: "rt-r-size", values: r19, default: "4", responsive: true }, display: { type: "enum", className: "rt-r-display", values: t13, parseValue: a20, responsive: true }, align: { type: "enum", className: "rt-r-ai", values: p18, parseValue: i8, responsive: true } };
function a20(e43) {
  return e43 === "initial" ? "flex" : e43;
}
function i8(e43) {
  return e43 === "left" ? "start" : e43 === "right" ? "end" : e43;
}

// node_modules/@radix-ui/themes/dist/esm/components/container.js
var p19 = o24.forwardRef(({ width: n23, minWidth: s23, maxWidth: m18, height: i22, minHeight: a41, maxHeight: f19, ...P7 }, l12) => {
  const { asChild: r44, children: C9, className: c5, ...y7 } = v(P7, n14, u, r5), { className: d10, style: h4 } = v({ width: n23, minWidth: s23, maxWidth: m18, height: i22, minHeight: a41, maxHeight: f19 }, t, e);
  return o24.createElement(r44 ? Slot : "div", { ...y7, ref: l12, className: (0, import_classnames21.default)("rt-Container", c5) }, d3({ asChild: r44, children: C9 }, (u10) => o24.createElement("div", { className: (0, import_classnames21.default)("rt-ContainerInner", d10), style: h4 }, u10)));
});
p19.displayName = "Container";

// node_modules/@radix-ui/themes/dist/esm/components/context-menu.js
var context_menu_exports = {};
__export(context_menu_exports, {
  CheckboxItem: () => G3,
  Content: () => y2,
  Group: () => N4,
  Item: () => R3,
  Label: () => S3,
  RadioGroup: () => T4,
  RadioItem: () => E4,
  Root: () => h,
  Separator: () => W,
  Sub: () => w2,
  SubContent: () => k3,
  SubTrigger: () => B2,
  Trigger: () => g3
});
var e24 = __toESM(require_react(), 1);
var import_classnames24 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-context-menu/dist/index.mjs
var React45 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-menu/dist/index.mjs
var React44 = __toESM(require_react(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var SELECTION_KEYS = ["Enter", " "];
var FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
var LAST_KEYS = ["ArrowUp", "PageDown", "End"];
var FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
var SUB_OPEN_KEYS = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"]
};
var SUB_CLOSE_KEYS = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
var MENU_NAME = "Menu";
var [Collection2, useCollection2, createCollectionScope2] = createCollection(MENU_NAME);
var [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
  createCollectionScope2,
  createPopperScope,
  createRovingFocusGroupScope
]);
var usePopperScope2 = createPopperScope();
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props) => {
  const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
  const popperScope = usePopperScope2(__scopeMenu);
  const [content, setContent] = React44.useState(null);
  const isUsingKeyboardRef = React44.useRef(false);
  const handleOpenChange = useCallbackRef(onOpenChange);
  const direction = useDirection(dir);
  React44.useEffect(() => {
    const handleKeyDown = () => {
      isUsingKeyboardRef.current = true;
      document.addEventListener("pointerdown", handlePointer, { capture: true, once: true });
      document.addEventListener("pointermove", handlePointer, { capture: true, once: true });
    };
    const handlePointer = () => isUsingKeyboardRef.current = false;
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => {
      document.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("pointerdown", handlePointer, { capture: true });
      document.removeEventListener("pointermove", handlePointer, { capture: true });
    };
  }, []);
  return (0, import_jsx_runtime23.jsx)(Root23, { ...popperScope, children: (0, import_jsx_runtime23.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: (0, import_jsx_runtime23.jsx)(
        MenuRootProvider,
        {
          scope: __scopeMenu,
          onClose: React44.useCallback(() => handleOpenChange(false), [handleOpenChange]),
          isUsingKeyboardRef,
          dir: direction,
          modal,
          children
        }
      )
    }
  ) });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME2 = "MenuAnchor";
var MenuAnchor = React44.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope2(__scopeMenu);
    return (0, import_jsx_runtime23.jsx)(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
MenuAnchor.displayName = ANCHOR_NAME2;
var PORTAL_NAME5 = "MenuPortal";
var [PortalProvider3, usePortalContext3] = createMenuContext(PORTAL_NAME5, {
  forceMount: void 0
});
var MenuPortal = (props) => {
  const { __scopeMenu, forceMount, children, container } = props;
  const context = useMenuContext(PORTAL_NAME5, __scopeMenu);
  return (0, import_jsx_runtime23.jsx)(PortalProvider3, { scope: __scopeMenu, forceMount, children: (0, import_jsx_runtime23.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime23.jsx)(Portal, { asChild: true, container, children }) }) });
};
MenuPortal.displayName = PORTAL_NAME5;
var CONTENT_NAME5 = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME5);
var MenuContent = React44.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext3(CONTENT_NAME5, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME5, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME5, props.__scopeMenu);
    return (0, import_jsx_runtime23.jsx)(Collection2.Provider, { scope: props.__scopeMenu, children: (0, import_jsx_runtime23.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime23.jsx)(Collection2.Slot, { scope: props.__scopeMenu, children: rootContext.modal ? (0, import_jsx_runtime23.jsx)(MenuRootContentModal, { ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime23.jsx)(MenuRootContentNonModal, { ...contentProps, ref: forwardedRef }) }) }) });
  }
);
var MenuRootContentModal = React44.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(CONTENT_NAME5, props.__scopeMenu);
    const ref = React44.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React44.useEffect(() => {
      const content = ref.current;
      if (content) return hideOthers(content);
    }, []);
    return (0, import_jsx_runtime23.jsx)(
      MenuContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        ),
        onDismiss: () => context.onOpenChange(false)
      }
    );
  }
);
var MenuRootContentNonModal = React44.forwardRef((props, forwardedRef) => {
  const context = useMenuContext(CONTENT_NAME5, props.__scopeMenu);
  return (0, import_jsx_runtime23.jsx)(
    MenuContentImpl,
    {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      disableOutsideScroll: false,
      onDismiss: () => context.onOpenChange(false)
    }
  );
});
var MenuContentImpl = React44.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeMenu,
      loop = false,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEntryFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      disableOutsideScroll,
      ...contentProps
    } = props;
    const context = useMenuContext(CONTENT_NAME5, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME5, __scopeMenu);
    const popperScope = usePopperScope2(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection2(__scopeMenu);
    const [currentItemId, setCurrentItemId] = React44.useState(null);
    const contentRef = React44.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef, context.onContentChange);
    const timerRef = React44.useRef(0);
    const searchRef = React44.useRef("");
    const pointerGraceTimerRef = React44.useRef(0);
    const pointerGraceIntentRef = React44.useRef(null);
    const pointerDirRef = React44.useRef("right");
    const lastPointerXRef = React44.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? Combination_default : React44.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? { as: Slot, allowPinchZoom: true } : void 0;
    const handleTypeaheadSearch = (key) => {
      var _a, _b;
      const search = searchRef.current + key;
      const items = getItems().filter((item) => !item.disabled);
      const currentItem = document.activeElement;
      const currentMatch = (_a = items.find((item) => item.ref.current === currentItem)) == null ? void 0 : _a.textValue;
      const values = items.map((item) => item.textValue);
      const nextMatch = getNextMatch(values, search, currentMatch);
      const newItem = (_b = items.find((item) => item.textValue === nextMatch)) == null ? void 0 : _b.ref.current;
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
      if (newItem) {
        setTimeout(() => newItem.focus());
      }
    };
    React44.useEffect(() => {
      return () => window.clearTimeout(timerRef.current);
    }, []);
    useFocusGuards();
    const isPointerMovingToSubmenu = React44.useCallback((event) => {
      var _a, _b;
      const isMovingTowards = pointerDirRef.current === ((_a = pointerGraceIntentRef.current) == null ? void 0 : _a.side);
      return isMovingTowards && isPointerInGraceArea(event, (_b = pointerGraceIntentRef.current) == null ? void 0 : _b.area);
    }, []);
    return (0, import_jsx_runtime23.jsx)(
      MenuContentProvider,
      {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: React44.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        onItemLeave: React44.useCallback(
          (event) => {
            var _a;
            if (isPointerMovingToSubmenu(event)) return;
            (_a = contentRef.current) == null ? void 0 : _a.focus();
            setCurrentItemId(null);
          },
          [isPointerMovingToSubmenu]
        ),
        onTriggerLeave: React44.useCallback(
          (event) => {
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
          },
          [isPointerMovingToSubmenu]
        ),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: React44.useCallback((intent) => {
          pointerGraceIntentRef.current = intent;
        }, []),
        children: (0, import_jsx_runtime23.jsx)(ScrollLockWrapper, { ...scrollLockWrapperProps, children: (0, import_jsx_runtime23.jsx)(
          FocusScope,
          {
            asChild: true,
            trapped: trapFocus,
            onMountAutoFocus: composeEventHandlers(onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = contentRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onUnmountAutoFocus: onCloseAutoFocus,
            children: (0, import_jsx_runtime23.jsx)(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                onDismiss,
                children: (0, import_jsx_runtime23.jsx)(
                  Root6,
                  {
                    asChild: true,
                    ...rovingFocusGroupScope,
                    dir: rootContext.dir,
                    orientation: "vertical",
                    loop,
                    currentTabStopId: currentItemId,
                    onCurrentTabStopIdChange: setCurrentItemId,
                    onEntryFocus: composeEventHandlers(onEntryFocus, (event) => {
                      if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                    }),
                    preventScrollOnEntryFocus: true,
                    children: (0, import_jsx_runtime23.jsx)(
                      Content3,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": getOpenState(context.open),
                        "data-radix-menu-content": "",
                        dir: rootContext.dir,
                        ...popperScope,
                        ...contentProps,
                        ref: composedRefs,
                        style: { outline: "none", ...contentProps.style },
                        onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                          const target = event.target;
                          const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                          const isCharacterKey = event.key.length === 1;
                          if (isKeyDownInside) {
                            if (event.key === "Tab") event.preventDefault();
                            if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                          }
                          const content = contentRef.current;
                          if (event.target !== content) return;
                          if (!FIRST_LAST_KEYS.includes(event.key)) return;
                          event.preventDefault();
                          const items = getItems().filter((item) => !item.disabled);
                          const candidateNodes = items.map((item) => item.ref.current);
                          if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                          focusFirst3(candidateNodes);
                        }),
                        onBlur: composeEventHandlers(props.onBlur, (event) => {
                          if (!event.currentTarget.contains(event.target)) {
                            window.clearTimeout(timerRef.current);
                            searchRef.current = "";
                          }
                        }),
                        onPointerMove: composeEventHandlers(
                          props.onPointerMove,
                          whenMouse((event) => {
                            const target = event.target;
                            const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                            if (event.currentTarget.contains(target) && pointerXHasChanged) {
                              const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                              pointerDirRef.current = newDir;
                              lastPointerXRef.current = event.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
MenuContent.displayName = CONTENT_NAME5;
var GROUP_NAME2 = "MenuGroup";
var MenuGroup = React44.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...groupProps } = props;
    return (0, import_jsx_runtime23.jsx)(Primitive.div, { role: "group", ...groupProps, ref: forwardedRef });
  }
);
MenuGroup.displayName = GROUP_NAME2;
var LABEL_NAME = "MenuLabel";
var MenuLabel = React44.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...labelProps } = props;
    return (0, import_jsx_runtime23.jsx)(Primitive.div, { ...labelProps, ref: forwardedRef });
  }
);
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME2 = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = React44.forwardRef(
  (props, forwardedRef) => {
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = React44.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME2, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME2, props.__scopeMenu);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isPointerDownRef = React44.useRef(false);
    const handleSelect = () => {
      const menuItem = ref.current;
      if (!disabled && menuItem) {
        const itemSelectEvent = new CustomEvent(ITEM_SELECT, { bubbles: true, cancelable: true });
        menuItem.addEventListener(ITEM_SELECT, (event) => onSelect == null ? void 0 : onSelect(event), { once: true });
        dispatchDiscreteCustomEvent(menuItem, itemSelectEvent);
        if (itemSelectEvent.defaultPrevented) {
          isPointerDownRef.current = false;
        } else {
          rootContext.onClose();
        }
      }
    };
    return (0, import_jsx_runtime23.jsx)(
      MenuItemImpl,
      {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: composeEventHandlers(props.onClick, handleSelect),
        onPointerDown: (event) => {
          var _a;
          (_a = props.onPointerDown) == null ? void 0 : _a.call(props, event);
          isPointerDownRef.current = true;
        },
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          var _a;
          if (!isPointerDownRef.current) (_a = event.currentTarget) == null ? void 0 : _a.click();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (disabled || isTypingAhead && event.key === " ") return;
          if (SELECTION_KEYS.includes(event.key)) {
            event.currentTarget.click();
            event.preventDefault();
          }
        })
      }
    );
  }
);
MenuItem.displayName = ITEM_NAME2;
var MenuItemImpl = React44.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME2, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = React44.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [isFocused, setIsFocused] = React44.useState(false);
    const [textContent, setTextContent] = React44.useState("");
    React44.useEffect(() => {
      const menuItem = ref.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? "").trim());
      }
    }, [itemProps.children]);
    return (0, import_jsx_runtime23.jsx)(
      Collection2.ItemSlot,
      {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: (0, import_jsx_runtime23.jsx)(Item, { asChild: true, ...rovingFocusGroupScope, focusable: !disabled, children: (0, import_jsx_runtime23.jsx)(
          Primitive.div,
          {
            role: "menuitem",
            "data-highlighted": isFocused ? "" : void 0,
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            ...itemProps,
            ref: composedRefs,
            onPointerMove: composeEventHandlers(
              props.onPointerMove,
              whenMouse((event) => {
                if (disabled) {
                  contentContext.onItemLeave(event);
                } else {
                  contentContext.onItemEnter(event);
                  if (!event.defaultPrevented) {
                    const item = event.currentTarget;
                    item.focus({ preventScroll: true });
                  }
                }
              })
            ),
            onPointerLeave: composeEventHandlers(
              props.onPointerLeave,
              whenMouse((event) => contentContext.onItemLeave(event))
            ),
            onFocus: composeEventHandlers(props.onFocus, () => setIsFocused(true)),
            onBlur: composeEventHandlers(props.onBlur, () => setIsFocused(false))
          }
        ) })
      }
    );
  }
);
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = React44.forwardRef(
  (props, forwardedRef) => {
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return (0, import_jsx_runtime23.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: (0, import_jsx_runtime23.jsx)(
      MenuItem,
      {
        role: "menuitemcheckbox",
        "aria-checked": isIndeterminate2(checked) ? "mixed" : checked,
        ...checkboxItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          checkboxItemProps.onSelect,
          () => onCheckedChange == null ? void 0 : onCheckedChange(isIndeterminate2(checked) ? true : !checked),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(
  RADIO_GROUP_NAME,
  { value: void 0, onValueChange: () => {
  } }
);
var MenuRadioGroup = React44.forwardRef(
  (props, forwardedRef) => {
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = useCallbackRef(onValueChange);
    return (0, import_jsx_runtime23.jsx)(RadioGroupProvider, { scope: props.__scopeMenu, value, onValueChange: handleValueChange, children: (0, import_jsx_runtime23.jsx)(MenuGroup, { ...groupProps, ref: forwardedRef }) });
  }
);
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = React44.forwardRef(
  (props, forwardedRef) => {
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return (0, import_jsx_runtime23.jsx)(ItemIndicatorProvider, { scope: props.__scopeMenu, checked, children: (0, import_jsx_runtime23.jsx)(
      MenuItem,
      {
        role: "menuitemradio",
        "aria-checked": checked,
        ...radioItemProps,
        ref: forwardedRef,
        "data-state": getCheckedState(checked),
        onSelect: composeEventHandlers(
          radioItemProps.onSelect,
          () => {
            var _a;
            return (_a = context.onValueChange) == null ? void 0 : _a.call(context, value);
          },
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(
  ITEM_INDICATOR_NAME,
  { checked: false }
);
var MenuItemIndicator = React44.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return (0, import_jsx_runtime23.jsx)(
      Presence,
      {
        present: forceMount || isIndeterminate2(indicatorContext.checked) || indicatorContext.checked === true,
        children: (0, import_jsx_runtime23.jsx)(
          Primitive.span,
          {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
          }
        )
      }
    );
  }
);
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = React44.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...separatorProps } = props;
    return (0, import_jsx_runtime23.jsx)(
      Primitive.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
      }
    );
  }
);
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME3 = "MenuArrow";
var MenuArrow = React44.forwardRef(
  (props, forwardedRef) => {
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope2(__scopeMenu);
    return (0, import_jsx_runtime23.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
MenuArrow.displayName = ARROW_NAME3;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props) => {
  const { __scopeMenu, children, open = false, onOpenChange } = props;
  const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
  const popperScope = usePopperScope2(__scopeMenu);
  const [trigger, setTrigger] = React44.useState(null);
  const [content, setContent] = React44.useState(null);
  const handleOpenChange = useCallbackRef(onOpenChange);
  React44.useEffect(() => {
    if (parentMenuContext.open === false) handleOpenChange(false);
    return () => handleOpenChange(false);
  }, [parentMenuContext.open, handleOpenChange]);
  return (0, import_jsx_runtime23.jsx)(Root23, { ...popperScope, children: (0, import_jsx_runtime23.jsx)(
    MenuProvider,
    {
      scope: __scopeMenu,
      open,
      onOpenChange: handleOpenChange,
      content,
      onContentChange: setContent,
      children: (0, import_jsx_runtime23.jsx)(
        MenuSubProvider,
        {
          scope: __scopeMenu,
          contentId: useId(),
          triggerId: useId(),
          trigger,
          onTriggerChange: setTrigger,
          children
        }
      )
    }
  ) });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = React44.forwardRef(
  (props, forwardedRef) => {
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = React44.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = { __scopeMenu: props.__scopeMenu };
    const clearOpenTimer = React44.useCallback(() => {
      if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }, []);
    React44.useEffect(() => clearOpenTimer, [clearOpenTimer]);
    React44.useEffect(() => {
      const pointerGraceTimer = pointerGraceTimerRef.current;
      return () => {
        window.clearTimeout(pointerGraceTimer);
        onPointerGraceIntentChange(null);
      };
    }, [pointerGraceTimerRef, onPointerGraceIntentChange]);
    return (0, import_jsx_runtime23.jsx)(MenuAnchor, { asChild: true, ...scope, children: (0, import_jsx_runtime23.jsx)(
      MenuItemImpl,
      {
        id: subContext.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": subContext.contentId,
        "data-state": getOpenState(context.open),
        ...props,
        ref: composeRefs(forwardedRef, subContext.onTriggerChange),
        onClick: (event) => {
          var _a;
          (_a = props.onClick) == null ? void 0 : _a.call(props, event);
          if (props.disabled || event.defaultPrevented) return;
          event.currentTarget.focus();
          if (!context.open) context.onOpenChange(true);
        },
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse((event) => {
            contentContext.onItemEnter(event);
            if (event.defaultPrevented) return;
            if (!props.disabled && !context.open && !openTimerRef.current) {
              contentContext.onPointerGraceIntentChange(null);
              openTimerRef.current = window.setTimeout(() => {
                context.onOpenChange(true);
                clearOpenTimer();
              }, 100);
            }
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse((event) => {
            var _a, _b;
            clearOpenTimer();
            const contentRect = (_a = context.content) == null ? void 0 : _a.getBoundingClientRect();
            if (contentRect) {
              const side = (_b = context.content) == null ? void 0 : _b.dataset.side;
              const rightSide = side === "right";
              const bleed = rightSide ? -5 : 5;
              const contentNearEdge = contentRect[rightSide ? "left" : "right"];
              const contentFarEdge = contentRect[rightSide ? "right" : "left"];
              contentContext.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: event.clientX + bleed, y: event.clientY },
                  { x: contentNearEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.top },
                  { x: contentFarEdge, y: contentRect.bottom },
                  { x: contentNearEdge, y: contentRect.bottom }
                ],
                side
              });
              window.clearTimeout(pointerGraceTimerRef.current);
              pointerGraceTimerRef.current = window.setTimeout(
                () => contentContext.onPointerGraceIntentChange(null),
                300
              );
            } else {
              contentContext.onTriggerLeave(event);
              if (event.defaultPrevented) return;
              contentContext.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          var _a;
          const isTypingAhead = contentContext.searchRef.current !== "";
          if (props.disabled || isTypingAhead && event.key === " ") return;
          if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
            context.onOpenChange(true);
            (_a = context.content) == null ? void 0 : _a.focus();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = React44.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext3(CONTENT_NAME5, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME5, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME5, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = React44.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    return (0, import_jsx_runtime23.jsx)(Collection2.Provider, { scope: props.__scopeMenu, children: (0, import_jsx_runtime23.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime23.jsx)(Collection2.Slot, { scope: props.__scopeMenu, children: (0, import_jsx_runtime23.jsx)(
      MenuContentImpl,
      {
        id: subContext.contentId,
        "aria-labelledby": subContext.triggerId,
        ...subContentProps,
        ref: composedRefs,
        align: "start",
        side: rootContext.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        trapFocus: false,
        onOpenAutoFocus: (event) => {
          var _a;
          if (rootContext.isUsingKeyboardRef.current) (_a = ref.current) == null ? void 0 : _a.focus();
          event.preventDefault();
        },
        onCloseAutoFocus: (event) => event.preventDefault(),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
          if (event.target !== subContext.trigger) context.onOpenChange(false);
        }),
        onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
          rootContext.onClose();
          event.preventDefault();
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          var _a;
          const isKeyDownInside = event.currentTarget.contains(event.target);
          const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
          if (isKeyDownInside && isCloseKey) {
            context.onOpenChange(false);
            (_a = subContext.trigger) == null ? void 0 : _a.focus();
            event.preventDefault();
          }
        })
      }
    ) }) }) });
  }
);
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
  return open ? "open" : "closed";
}
function isIndeterminate2(checked) {
  return checked === "indeterminate";
}
function getCheckedState(checked) {
  return isIndeterminate2(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst3(candidates) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus();
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray2(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray2(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v9) => v9 !== currentMatch);
  const nextMatch = wrappedValues.find(
    (value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon2(point, polygon) {
  const { x: x6, y: y7 } = point;
  let inside = false;
  for (let i22 = 0, j2 = polygon.length - 1; i22 < polygon.length; j2 = i22++) {
    const xi = polygon[i22].x;
    const yi = polygon[i22].y;
    const xj = polygon[j2].x;
    const yj = polygon[j2].y;
    const intersect = yi > y7 !== yj > y7 && x6 < (xj - xi) * (y7 - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function isPointerInGraceArea(event, area) {
  if (!area) return false;
  const cursorPos = { x: event.clientX, y: event.clientY };
  return isPointInPolygon2(cursorPos, area);
}
function whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root33 = Menu;
var Anchor2 = MenuAnchor;
var Portal4 = MenuPortal;
var Content23 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow23 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;

// node_modules/@radix-ui/react-context-menu/dist/index.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var CONTEXT_MENU_NAME = "ContextMenu";
var [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [
  createMenuScope
]);
var useMenuScope = createMenuScope();
var [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME);
var ContextMenu = (props) => {
  const { __scopeContextMenu, children, onOpenChange, dir, modal = true } = props;
  const [open, setOpen] = React45.useState(false);
  const menuScope = useMenuScope(__scopeContextMenu);
  const handleOpenChangeProp = useCallbackRef(onOpenChange);
  const handleOpenChange = React45.useCallback(
    (open2) => {
      setOpen(open2);
      handleOpenChangeProp(open2);
    },
    [handleOpenChangeProp]
  );
  return (0, import_jsx_runtime24.jsx)(
    ContextMenuProvider,
    {
      scope: __scopeContextMenu,
      open,
      onOpenChange: handleOpenChange,
      modal,
      children: (0, import_jsx_runtime24.jsx)(
        Root33,
        {
          ...menuScope,
          dir,
          open,
          onOpenChange: handleOpenChange,
          modal,
          children
        }
      )
    }
  );
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME4 = "ContextMenuTrigger";
var ContextMenuTrigger = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, disabled = false, ...triggerProps } = props;
    const context = useContextMenuContext(TRIGGER_NAME4, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const pointRef = React45.useRef({ x: 0, y: 0 });
    const virtualRef = React45.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...pointRef.current })
    });
    const longPressTimerRef = React45.useRef(0);
    const clearLongPress = React45.useCallback(
      () => window.clearTimeout(longPressTimerRef.current),
      []
    );
    const handleOpen = (event) => {
      pointRef.current = { x: event.clientX, y: event.clientY };
      context.onOpenChange(true);
    };
    React45.useEffect(() => clearLongPress, [clearLongPress]);
    React45.useEffect(() => void (disabled && clearLongPress()), [disabled, clearLongPress]);
    return (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
      (0, import_jsx_runtime24.jsx)(Anchor2, { ...menuScope, virtualRef }),
      (0, import_jsx_runtime24.jsx)(
        Primitive.span,
        {
          "data-state": context.open ? "open" : "closed",
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          style: { WebkitTouchCallout: "none", ...props.style },
          onContextMenu: disabled ? props.onContextMenu : composeEventHandlers(props.onContextMenu, (event) => {
            clearLongPress();
            handleOpen(event);
            event.preventDefault();
          }),
          onPointerDown: disabled ? props.onPointerDown : composeEventHandlers(
            props.onPointerDown,
            whenTouchOrPen((event) => {
              clearLongPress();
              longPressTimerRef.current = window.setTimeout(() => handleOpen(event), 700);
            })
          ),
          onPointerMove: disabled ? props.onPointerMove : composeEventHandlers(props.onPointerMove, whenTouchOrPen(clearLongPress)),
          onPointerCancel: disabled ? props.onPointerCancel : composeEventHandlers(props.onPointerCancel, whenTouchOrPen(clearLongPress)),
          onPointerUp: disabled ? props.onPointerUp : composeEventHandlers(props.onPointerUp, whenTouchOrPen(clearLongPress))
        }
      )
    ] });
  }
);
ContextMenuTrigger.displayName = TRIGGER_NAME4;
var PORTAL_NAME6 = "ContextMenuPortal";
var ContextMenuPortal = (props) => {
  const { __scopeContextMenu, ...portalProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(Portal4, { ...menuScope, ...portalProps });
};
ContextMenuPortal.displayName = PORTAL_NAME6;
var CONTENT_NAME6 = "ContextMenuContent";
var ContextMenuContent = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...contentProps } = props;
    const context = useContextMenuContext(CONTENT_NAME6, __scopeContextMenu);
    const menuScope = useMenuScope(__scopeContextMenu);
    const hasInteractedOutsideRef = React45.useRef(false);
    return (0, import_jsx_runtime24.jsx)(
      Content23,
      {
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (event) => {
          var _a;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented && hasInteractedOutsideRef.current) {
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented && !context.modal) hasInteractedOutsideRef.current = true;
        },
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
ContextMenuContent.displayName = CONTENT_NAME6;
var GROUP_NAME3 = "ContextMenuGroup";
var ContextMenuGroup = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime24.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
ContextMenuGroup.displayName = GROUP_NAME3;
var LABEL_NAME2 = "ContextMenuLabel";
var ContextMenuLabel = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime24.jsx)(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
ContextMenuLabel.displayName = LABEL_NAME2;
var ITEM_NAME3 = "ContextMenuItem";
var ContextMenuItem = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime24.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
ContextMenuItem.displayName = ITEM_NAME3;
var CHECKBOX_ITEM_NAME2 = "ContextMenuCheckboxItem";
var ContextMenuCheckboxItem = React45.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME2;
var RADIO_GROUP_NAME2 = "ContextMenuRadioGroup";
var ContextMenuRadioGroup = React45.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME2;
var RADIO_ITEM_NAME2 = "ContextMenuRadioItem";
var ContextMenuRadioItem = React45.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME2;
var INDICATOR_NAME2 = "ContextMenuItemIndicator";
var ContextMenuItemIndicator = React45.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME2;
var SEPARATOR_NAME2 = "ContextMenuSeparator";
var ContextMenuSeparator = React45.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...separatorProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
ContextMenuSeparator.displayName = SEPARATOR_NAME2;
var ARROW_NAME4 = "ContextMenuArrow";
var ContextMenuArrow = React45.forwardRef(
  (props, forwardedRef) => {
    const { __scopeContextMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeContextMenu);
    return (0, import_jsx_runtime24.jsx)(Arrow23, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
ContextMenuArrow.displayName = ARROW_NAME4;
var SUB_NAME2 = "ContextMenuSub";
var ContextMenuSub = (props) => {
  const { __scopeContextMenu, children, onOpenChange, open: openProp, defaultOpen } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_jsx_runtime24.jsx)(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
ContextMenuSub.displayName = SUB_NAME2;
var SUB_TRIGGER_NAME2 = "ContextMenuSubTrigger";
var ContextMenuSubTrigger = React45.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...triggerItemProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(SubTrigger, { ...menuScope, ...triggerItemProps, ref: forwardedRef });
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME2;
var SUB_CONTENT_NAME2 = "ContextMenuSubContent";
var ContextMenuSubContent = React45.forwardRef((props, forwardedRef) => {
  const { __scopeContextMenu, ...subContentProps } = props;
  const menuScope = useMenuScope(__scopeContextMenu);
  return (0, import_jsx_runtime24.jsx)(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME2;
function whenTouchOrPen(handler) {
  return (event) => event.pointerType !== "mouse" ? handler(event) : void 0;
}
var Root24 = ContextMenu;
var Trigger4 = ContextMenuTrigger;
var Portal23 = ContextMenuPortal;
var Content24 = ContextMenuContent;
var Group2 = ContextMenuGroup;
var Label2 = ContextMenuLabel;
var Item22 = ContextMenuItem;
var CheckboxItem2 = ContextMenuCheckboxItem;
var RadioGroup2 = ContextMenuRadioGroup;
var RadioItem2 = ContextMenuRadioItem;
var ItemIndicator2 = ContextMenuItemIndicator;
var Separator2 = ContextMenuSeparator;
var Sub2 = ContextMenuSub;
var SubTrigger2 = ContextMenuSubTrigger;
var SubContent2 = ContextMenuSubContent;

// node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js
var r22 = __toESM(require_react(), 1);
var import_classnames23 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var React210 = __toESM(require_react(), 1);

// node_modules/@radix-ui/number/dist/index.mjs
function clamp2(value, [min2, max2]) {
  return Math.min(max2, Math.max(min2, value));
}

// node_modules/@radix-ui/react-scroll-area/dist/index.mjs
var React46 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
function useStateMachine2(initialState, machine) {
  return React46.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = React210.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = React210.useState(null);
    const [viewport, setViewport] = React210.useState(null);
    const [content, setContent] = React210.useState(null);
    const [scrollbarX, setScrollbarX] = React210.useState(null);
    const [scrollbarY, setScrollbarY] = React210.useState(null);
    const [cornerWidth, setCornerWidth] = React210.useState(0);
    const [cornerHeight, setCornerHeight] = React210.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = React210.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = React210.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
    const direction = useDirection(dir);
    return (0, import_jsx_runtime25.jsx)(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: (0, import_jsx_runtime25.jsx)(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
              ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }
);
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = React210.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = React210.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return (0, import_jsx_runtime25.jsxs)(import_jsx_runtime25.Fragment, { children: [
      (0, import_jsx_runtime25.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      (0, import_jsx_runtime25.jsx)(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: (0, import_jsx_runtime25.jsx)("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }
);
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = React210.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    React210.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? (0, import_jsx_runtime25.jsx)(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? (0, import_jsx_runtime25.jsx)(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? (0, import_jsx_runtime25.jsx)(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? (0, import_jsx_runtime25.jsx)(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React210.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = React210.useState(false);
  React210.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return (0, import_jsx_runtime25.jsx)(Presence, { present: forceMount || visible, children: (0, import_jsx_runtime25.jsx)(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarScroll = React210.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine2("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  React210.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  React210.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll2 = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return (0, import_jsx_runtime25.jsx)(Presence, { present: forceMount || state !== "hidden", children: (0, import_jsx_runtime25.jsx)(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
});
var ScrollAreaScrollbarAuto = React210.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = React210.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return (0, import_jsx_runtime25.jsx)(Presence, { present: forceMount || visible, children: (0, import_jsx_runtime25.jsx)(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarVisible = React210.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = React210.useRef(null);
  const pointerOffsetRef = React210.useRef(0);
  const [sizes, setSizes] = React210.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return (0, import_jsx_runtime25.jsx)(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset4}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return (0, import_jsx_runtime25.jsx)(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset4 = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset4}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});
var ScrollAreaScrollbarX = React210.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React210.useState();
  const ref = React210.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  React210.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return (0, import_jsx_runtime25.jsx)(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
});
var ScrollAreaScrollbarY = React210.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = React210.useState();
  const ref = React210.useRef(null);
  const composeRefs2 = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  React210.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return (0, import_jsx_runtime25.jsx)(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs2,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = React210.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = React210.useState(null);
  const composeRefs2 = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
  const rectRef = React210.useRef(null);
  const prevWebkitUserSelectRef = React210.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x6 = event.clientX - rectRef.current.left;
      const y7 = event.clientY - rectRef.current.top;
      onDragScroll({ x: x6, y: y7 });
    }
  }
  React210.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  React210.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return (0, import_jsx_runtime25.jsx)(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef(onThumbChange),
      onThumbPointerUp: useCallbackRef(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef(onThumbPointerDown),
      children: (0, import_jsx_runtime25.jsx)(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs2,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport) context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = React210.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return (0, import_jsx_runtime25.jsx)(Presence, { present: forceMount || scrollbarContext.hasThumb, children: (0, import_jsx_runtime25.jsx)(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }
);
var ScrollAreaThumbImpl = React210.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = React210.useRef();
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    React210.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll2 = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll2);
        return () => viewport.removeEventListener("scroll", handleScroll2);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return (0, import_jsx_runtime25.jsx)(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x6 = event.clientX - thumbRect.left;
          const y7 = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x: x6, y: y7 });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }
);
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = React210.forwardRef(
  (props, forwardedRef) => {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? (0, import_jsx_runtime25.jsx)(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }
);
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React210.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = React210.useState(0);
  const [height, setHeight] = React210.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(context.scrollbarX, () => {
    var _a;
    const height2 = ((_a = context.scrollbarX) == null ? void 0 : _a.offsetHeight) || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    var _a;
    const width2 = ((_a = context.scrollbarY) == null ? void 0 : _a.offsetWidth) || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? (0, import_jsx_runtime25.jsx)(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset4 = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset4;
  const minPointerPos = sizes.scrollbar.paddingStart + offset4;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp2(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = React210.useRef(0);
  React210.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return React210.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var Root7 = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;

// node_modules/@radix-ui/themes/dist/esm/components/scroll-area.props.js
var r20 = ["1", "2", "3"];
var o25 = ["vertical", "horizontal", "both"];
var t14 = { ...o, size: { type: "enum", className: "rt-r-size", values: r20, default: "1", responsive: true }, ...r7, scrollbars: { type: "enum", values: o25, default: "both" } };

// node_modules/@radix-ui/themes/dist/esm/helpers/extract-margin-props.js
function a21(r44) {
  const { m: t34, mx: m18, my: o60, mt: p38, mr: n23, mb: s23, ml: e43, ...i22 } = r44;
  return { m: t34, mx: m18, my: o60, mt: p38, mr: n23, mb: s23, ml: e43, rest: i22 };
}

// node_modules/@radix-ui/themes/dist/esm/helpers/get-margin-styles.js
var import_classnames22 = __toESM(require_classnames(), 1);
var r21 = r5.m.values;
function S2(s23) {
  const [e43, t34] = R({ className: "rt-r-m", customProperties: ["--margin"], propValues: r21, value: s23.m }), [a41, o60] = R({ className: "rt-r-mx", customProperties: ["--margin-left", "--margin-right"], propValues: r21, value: s23.mx }), [l12, i22] = R({ className: "rt-r-my", customProperties: ["--margin-top", "--margin-bottom"], propValues: r21, value: s23.my }), [p38, u10] = R({ className: "rt-r-mt", customProperties: ["--margin-top"], propValues: r21, value: s23.mt }), [n23, c5] = R({ className: "rt-r-mr", customProperties: ["--margin-right"], propValues: r21, value: s23.mr }), [g7, P7] = R({ className: "rt-r-mb", customProperties: ["--margin-bottom"], propValues: r21, value: s23.mb }), [N8, C9] = R({ className: "rt-r-ml", customProperties: ["--margin-left"], propValues: r21, value: s23.ml });
  return [(0, import_classnames22.default)(e43, a41, l12, p38, n23, g7, N8), l2(t34, o60, i22, u10, c5, P7, C9)];
}

// node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js
var c2 = r22.forwardRef((n23, S6) => {
  const { rest: f19, ...P7 } = a21(n23), [u10, A3] = S2(P7), { asChild: a41, children: d10, className: y7, style: v9, type: t34, scrollHideDelay: N8 = t34 !== "scroll" ? 0 : void 0, dir: V, size: i22 = t14.size.default, radius: p38 = t14.radius.default, scrollbars: l12 = t14.scrollbars.default, ...b6 } = f19;
  return r22.createElement(Root7, { type: t34, scrollHideDelay: N8, className: (0, import_classnames23.default)("rt-ScrollAreaRoot", u10, y7), style: l2(A3, v9), asChild: a41 }, d3({ asChild: a41, children: d10 }, (g7) => r22.createElement(r22.Fragment, null, r22.createElement(Viewport, { ...b6, ref: S6, className: "rt-ScrollAreaViewport" }, g7), r22.createElement("div", { className: "rt-ScrollAreaViewportFocusRing" }), l12 !== "vertical" ? r22.createElement(Scrollbar, { "data-radius": p38, orientation: "horizontal", className: (0, import_classnames23.default)("rt-ScrollAreaScrollbar", g({ className: "rt-r-size", value: i22, propValues: t14.size.values })) }, r22.createElement(Thumb, { className: "rt-ScrollAreaThumb" })) : null, l12 !== "horizontal" ? r22.createElement(Scrollbar, { "data-radius": p38, orientation: "vertical", className: (0, import_classnames23.default)("rt-ScrollAreaScrollbar", g({ className: "rt-r-size", value: i22, propValues: t14.size.values })) }, r22.createElement(Thumb, { className: "rt-ScrollAreaThumb" })) : null, l12 === "both" ? r22.createElement(Corner, { className: "rt-ScrollAreaCorner" }) : null)));
});
c2.displayName = "ScrollArea";

// node_modules/@radix-ui/themes/dist/esm/components/base-menu.props.js
var o26 = ["1", "2"];
var r23 = ["solid", "soft"];
var n15 = { size: { type: "enum", className: "rt-r-size", values: o26, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: r23, default: "solid" }, ...r2, ...o3 };
var a22 = { ...o, ...r2, shortcut: { type: "string" } };
var i9 = { ...r2, shortcut: { type: "string" } };
var p20 = { ...r2 };

// node_modules/@radix-ui/themes/dist/esm/components/context-menu.js
var h = (t34) => e24.createElement(Root24, { ...t34 });
h.displayName = "ContextMenu.Root";
var g3 = e24.forwardRef(({ children: t34, ...n23 }, o60) => e24.createElement(Trigger4, { ...n23, ref: o60, asChild: true }, a4(t34)));
g3.displayName = "ContextMenu.Trigger";
var v3 = e24.createContext({});
var y2 = e24.forwardRef((t34, n23) => {
  const o60 = H(), { size: s23 = n15.size.default, variant: u10 = n15.variant.default, highContrast: i22 = n15.highContrast.default } = t34, { className: C9, children: m18, color: x6, container: M, forceMount: l12, ...L2 } = v(t34, n15), c5 = x6 || o60.accentColor;
  return e24.createElement(Portal23, { container: M, forceMount: l12 }, e24.createElement(I, { asChild: true }, e24.createElement(Content24, { "data-accent-color": c5, alignOffset: -Number(s23) * 4, collisionPadding: 10, ...L2, asChild: false, ref: n23, className: (0, import_classnames24.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-ContextMenuContent", C9) }, e24.createElement(c2, { type: "auto" }, e24.createElement("div", { className: (0, import_classnames24.default)("rt-BaseMenuViewport", "rt-ContextMenuViewport") }, e24.createElement(v3.Provider, { value: e24.useMemo(() => ({ size: s23, variant: u10, color: c5, highContrast: i22 }), [s23, u10, c5, i22]) }, m18))))));
});
y2.displayName = "ContextMenu.Content";
var S3 = e24.forwardRef(({ className: t34, ...n23 }, o60) => e24.createElement(Label2, { ...n23, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuLabel", "rt-ContextMenuLabel", t34) }));
S3.displayName = "ContextMenu.Label";
var R3 = e24.forwardRef((t34, n23) => {
  const { className: o60, children: s23, color: u10 = a22.color.default, shortcut: i22, ...C9 } = t34;
  return e24.createElement(Item22, { "data-accent-color": u10, ...C9, ref: n23, className: (0, import_classnames24.default)("rt-reset", "rt-BaseMenuItem", "rt-ContextMenuItem", o60) }, e24.createElement(Slottable, null, s23), i22 && e24.createElement("div", { className: "rt-BaseMenuShortcut rt-ContextMenuShortcut" }, i22));
});
R3.displayName = "ContextMenu.Item";
var N4 = e24.forwardRef(({ className: t34, ...n23 }, o60) => e24.createElement(Group2, { ...n23, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuGroup", "rt-ContextMenuGroup", t34) }));
N4.displayName = "ContextMenu.Group";
var T4 = e24.forwardRef(({ className: t34, ...n23 }, o60) => e24.createElement(RadioGroup2, { ...n23, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuRadioGroup", "rt-ContextMenuRadioGroup", t34) }));
T4.displayName = "ContextMenu.RadioGroup";
var E4 = e24.forwardRef((t34, n23) => {
  const { children: o60, className: s23, color: u10 = p20.color.default, ...i22 } = t34;
  return e24.createElement(RadioItem2, { ...i22, asChild: false, ref: n23, "data-accent-color": u10, className: (0, import_classnames24.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-ContextMenuItem", "rt-ContextMenuRadioItem", s23) }, e24.createElement(Slottable, null, o60), e24.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator" }, e24.createElement(t12, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })));
});
E4.displayName = "ContextMenu.RadioItem";
var G3 = e24.forwardRef((t34, n23) => {
  const { children: o60, className: s23, shortcut: u10, color: i22 = i9.color.default, ...C9 } = t34;
  return e24.createElement(CheckboxItem2, { ...C9, asChild: false, ref: n23, "data-accent-color": i22, className: (0, import_classnames24.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-ContextMenuItem", "rt-ContextMenuCheckboxItem", s23) }, e24.createElement(Slottable, null, o60), e24.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-ContextMenuItemIndicator" }, e24.createElement(t12, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), u10 && e24.createElement("div", { className: "rt-BaseMenuShortcut rt-ContextMenuShortcut" }, u10));
});
G3.displayName = "ContextMenu.CheckboxItem";
var w2 = (t34) => e24.createElement(Sub2, { ...t34 });
w2.displayName = "ContextMenu.Sub";
var B2 = e24.forwardRef((t34, n23) => {
  const { className: o60, children: s23, ...u10 } = t34;
  return e24.createElement(SubTrigger2, { ...u10, asChild: false, ref: n23, className: (0, import_classnames24.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-ContextMenuItem", "rt-ContextMenuSubTrigger", o60) }, s23, e24.createElement("div", { className: "rt-BaseMenuShortcut rt-ContextMenuShortcut" }, e24.createElement(l6, { className: "rt-BaseMenuSubTriggerIcon rt-ContextMenuSubTriggerIcon" })));
});
B2.displayName = "ContextMenu.SubTrigger";
var k3 = e24.forwardRef((t34, n23) => {
  const { size: o60, variant: s23, color: u10, highContrast: i22 } = e24.useContext(v3), { className: C9, children: m18, container: x6, forceMount: M, ...l12 } = v({ size: o60, variant: s23, color: u10, highContrast: i22, ...t34 }, n15);
  return e24.createElement(Portal23, { container: x6, forceMount: M }, e24.createElement(I, { asChild: true }, e24.createElement(SubContent2, { "data-accent-color": u10, alignOffset: -Number(o60) * 4, sideOffset: 1, collisionPadding: 10, ...l12, asChild: false, ref: n23, className: (0, import_classnames24.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-ContextMenuContent", "rt-ContextMenuSubContent", C9) }, e24.createElement(c2, { type: "auto" }, e24.createElement("div", { className: (0, import_classnames24.default)("rt-BaseMenuViewport", "rt-ContextMenuViewport") }, m18)))));
});
k3.displayName = "ContextMenu.SubContent";
var W = e24.forwardRef(({ className: t34, ...n23 }, o60) => e24.createElement(Separator2, { ...n23, asChild: false, ref: o60, className: (0, import_classnames24.default)("rt-BaseMenuSeparator", "rt-ContextMenuSeparator", t34) }));
W.displayName = "ContextMenu.Separator";

// node_modules/@radix-ui/themes/dist/esm/components/data-list.js
var data_list_exports = {};
__export(data_list_exports, {
  Item: () => m8,
  Label: () => L,
  Root: () => i11,
  Value: () => l8
});
var import_classnames25 = __toESM(require_classnames(), 1);
var t15 = __toESM(require_react(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/data-list.props.js
var s13 = ["start", "center", "end", "baseline", "stretch"];
var i10 = ["horizontal", "vertical"];
var a24 = ["1", "2", "3"];
var n16 = { orientation: { type: "enum", className: "rt-r-orientation", values: i10, default: "horizontal", responsive: true }, size: { type: "enum", className: "rt-r-size", values: a24, default: "2", responsive: true }, trim: { ...r3.trim, className: "rt-r-trim" } };
var p21 = { align: { type: "enum", className: "rt-r-ai", values: s13, responsive: true } };
var m7 = { ...t, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/data-list.js
var i11 = t15.forwardRef((a41, e43) => {
  const { className: s23, ...o60 } = v(a41, n16, r5);
  return t15.createElement(p, { asChild: true }, t15.createElement("dl", { ...o60, ref: e43, className: (0, import_classnames25.default)("rt-DataListRoot", s23) }));
});
i11.displayName = "DataList.Root";
var m8 = t15.forwardRef((a41, e43) => {
  const { className: s23, ...o60 } = v(a41, p21);
  return t15.createElement("div", { ...o60, ref: e43, className: (0, import_classnames25.default)("rt-DataListItem", s23) });
});
m8.displayName = "DataList.Item";
var L = t15.forwardRef((a41, e43) => {
  const { className: s23, color: o60, ...n23 } = v(a41, m7);
  return t15.createElement("dt", { ...n23, "data-accent-color": o60, ref: e43, className: (0, import_classnames25.default)("rt-DataListLabel", s23) });
});
L.displayName = "DataList.Label";
var l8 = t15.forwardRef(({ children: a41, className: e43, ...s23 }, o60) => t15.createElement("dd", { ...s23, ref: o60, className: (0, import_classnames25.default)(e43, "rt-DataListValue") }, a41));
l8.displayName = "DataList.Value";

// node_modules/@radix-ui/themes/dist/esm/components/dialog.js
var dialog_exports = {};
__export(dialog_exports, {
  Close: () => D2,
  Content: () => p22,
  Description: () => m9,
  Root: () => s14,
  Title: () => g4,
  Trigger: () => n17
});
var o27 = __toESM(require_react(), 1);
var import_classnames26 = __toESM(require_classnames(), 1);
var s14 = (e43) => o27.createElement(Root2, { ...e43, modal: true });
s14.displayName = "Dialog.Root";
var n17 = o27.forwardRef(({ children: e43, ...i22 }, r44) => o27.createElement(Trigger, { ...i22, ref: r44, asChild: true }, a4(e43)));
n17.displayName = "Dialog.Trigger";
var p22 = o27.forwardRef(({ align: e43, ...i22 }, r44) => {
  const { align: P7, ...f19 } = s, { className: C9 } = v({ align: e43 }, { align: P7 }), { className: d10, forceMount: c5, container: y7, ...T7 } = v(i22, f19);
  return o27.createElement(Portal2, { container: y7, forceMount: c5 }, o27.createElement(I, { asChild: true }, o27.createElement(Overlay, { className: "rt-BaseDialogOverlay rt-DialogOverlay" }, o27.createElement("div", { className: "rt-BaseDialogScroll rt-DialogScroll" }, o27.createElement("div", { className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${C9}` }, o27.createElement(Content, { ...T7, ref: r44, className: (0, import_classnames26.default)("rt-BaseDialogContent", "rt-DialogContent", d10) }))))));
});
p22.displayName = "Dialog.Content";
var g4 = o27.forwardRef((e43, i22) => o27.createElement(Title, { asChild: true }, o27.createElement(r6, { size: "5", mb: "3", trim: "start", ...e43, asChild: false, ref: i22 })));
g4.displayName = "Dialog.Title";
var m9 = o27.forwardRef((e43, i22) => o27.createElement(Description, { asChild: true }, o27.createElement(p, { as: "p", size: "3", ...e43, asChild: false, ref: i22 })));
m9.displayName = "Dialog.Description";
var D2 = o27.forwardRef(({ children: e43, ...i22 }, r44) => o27.createElement(Close, { ...i22, ref: r44, asChild: true }, a4(e43)));
D2.displayName = "Dialog.Close";

// node_modules/@radix-ui/themes/dist/esm/components/dropdown-menu.js
var dropdown_menu_exports = {};
__export(dropdown_menu_exports, {
  CheckboxItem: () => T5,
  Content: () => g5,
  Group: () => R4,
  Item: () => v5,
  Label: () => y3,
  RadioGroup: () => S4,
  RadioItem: () => x4,
  Root: () => I2,
  Separator: () => B3,
  Sub: () => N5,
  SubContent: () => G4,
  SubTrigger: () => E5,
  Trigger: () => h2,
  TriggerIcon: () => i6
});
var o28 = __toESM(require_react(), 1);
var import_classnames27 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs
var React47 = __toESM(require_react(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(
  DROPDOWN_MENU_NAME,
  [createMenuScope]
);
var useMenuScope2 = createMenuScope();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props) => {
  const {
    __scopeDropdownMenu,
    children,
    dir,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = true
  } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  const triggerRef = React47.useRef(null);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_jsx_runtime26.jsx)(
    DropdownMenuProvider,
    {
      scope: __scopeDropdownMenu,
      triggerId: useId(),
      triggerRef,
      contentId: useId(),
      open,
      onOpenChange: setOpen,
      onOpenToggle: React47.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      modal,
      children: (0, import_jsx_runtime26.jsx)(Root33, { ...menuScope, open, onOpenChange: setOpen, dir, modal, children })
    }
  );
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME5 = "DropdownMenuTrigger";
var DropdownMenuTrigger = React47.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME5, __scopeDropdownMenu);
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return (0, import_jsx_runtime26.jsx)(Anchor2, { asChild: true, ...menuScope, children: (0, import_jsx_runtime26.jsx)(
      Primitive.button,
      {
        type: "button",
        id: context.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": context.open,
        "aria-controls": context.open ? context.contentId : void 0,
        "data-state": context.open ? "open" : "closed",
        "data-disabled": disabled ? "" : void 0,
        disabled,
        ...triggerProps,
        ref: composeRefs(forwardedRef, context.triggerRef),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context.onOpenToggle();
            if (!context.open) event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (disabled) return;
          if (["Enter", " "].includes(event.key)) context.onOpenToggle();
          if (event.key === "ArrowDown") context.onOpenChange(true);
          if (["Enter", " ", "ArrowDown"].includes(event.key)) event.preventDefault();
        })
      }
    ) });
  }
);
DropdownMenuTrigger.displayName = TRIGGER_NAME5;
var PORTAL_NAME7 = "DropdownMenuPortal";
var DropdownMenuPortal = (props) => {
  const { __scopeDropdownMenu, ...portalProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(Portal4, { ...menuScope, ...portalProps });
};
DropdownMenuPortal.displayName = PORTAL_NAME7;
var CONTENT_NAME7 = "DropdownMenuContent";
var DropdownMenuContent = React47.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME7, __scopeDropdownMenu);
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    const hasInteractedOutsideRef = React47.useRef(false);
    return (0, import_jsx_runtime26.jsx)(
      Content23,
      {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          if (!hasInteractedOutsideRef.current) (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          hasInteractedOutsideRef.current = false;
          event.preventDefault();
        }),
        onInteractOutside: composeEventHandlers(props.onInteractOutside, (event) => {
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
          ...props.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      }
    );
  }
);
DropdownMenuContent.displayName = CONTENT_NAME7;
var GROUP_NAME4 = "DropdownMenuGroup";
var DropdownMenuGroup = React47.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return (0, import_jsx_runtime26.jsx)(Group, { ...menuScope, ...groupProps, ref: forwardedRef });
  }
);
DropdownMenuGroup.displayName = GROUP_NAME4;
var LABEL_NAME3 = "DropdownMenuLabel";
var DropdownMenuLabel = React47.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return (0, import_jsx_runtime26.jsx)(Label, { ...menuScope, ...labelProps, ref: forwardedRef });
  }
);
DropdownMenuLabel.displayName = LABEL_NAME3;
var ITEM_NAME4 = "DropdownMenuItem";
var DropdownMenuItem = React47.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return (0, import_jsx_runtime26.jsx)(Item2, { ...menuScope, ...itemProps, ref: forwardedRef });
  }
);
DropdownMenuItem.displayName = ITEM_NAME4;
var CHECKBOX_ITEM_NAME3 = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...checkboxItemProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(CheckboxItem, { ...menuScope, ...checkboxItemProps, ref: forwardedRef });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME3;
var RADIO_GROUP_NAME3 = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioGroupProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(RadioGroup, { ...menuScope, ...radioGroupProps, ref: forwardedRef });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME3;
var RADIO_ITEM_NAME3 = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...radioItemProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(RadioItem, { ...menuScope, ...radioItemProps, ref: forwardedRef });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME3;
var INDICATOR_NAME3 = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(ItemIndicator, { ...menuScope, ...itemIndicatorProps, ref: forwardedRef });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME3;
var SEPARATOR_NAME3 = "DropdownMenuSeparator";
var DropdownMenuSeparator = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...separatorProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(Separator, { ...menuScope, ...separatorProps, ref: forwardedRef });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME3;
var ARROW_NAME5 = "DropdownMenuArrow";
var DropdownMenuArrow = React47.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope2(__scopeDropdownMenu);
    return (0, import_jsx_runtime26.jsx)(Arrow23, { ...menuScope, ...arrowProps, ref: forwardedRef });
  }
);
DropdownMenuArrow.displayName = ARROW_NAME5;
var DropdownMenuSub = (props) => {
  const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_jsx_runtime26.jsx)(Sub, { ...menuScope, open, onOpenChange: setOpen, children });
};
var SUB_TRIGGER_NAME3 = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subTriggerProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(SubTrigger, { ...menuScope, ...subTriggerProps, ref: forwardedRef });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME3;
var SUB_CONTENT_NAME3 = "DropdownMenuSubContent";
var DropdownMenuSubContent = React47.forwardRef((props, forwardedRef) => {
  const { __scopeDropdownMenu, ...subContentProps } = props;
  const menuScope = useMenuScope2(__scopeDropdownMenu);
  return (0, import_jsx_runtime26.jsx)(
    SubContent,
    {
      ...menuScope,
      ...subContentProps,
      ref: forwardedRef,
      style: {
        ...props.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME3;
var Root25 = DropdownMenu;
var Trigger5 = DropdownMenuTrigger;
var Portal24 = DropdownMenuPortal;
var Content25 = DropdownMenuContent;
var Group22 = DropdownMenuGroup;
var Label22 = DropdownMenuLabel;
var Item23 = DropdownMenuItem;
var CheckboxItem22 = DropdownMenuCheckboxItem;
var RadioGroup22 = DropdownMenuRadioGroup;
var RadioItem22 = DropdownMenuRadioItem;
var ItemIndicator22 = DropdownMenuItemIndicator;
var Separator22 = DropdownMenuSeparator;
var Sub22 = DropdownMenuSub;
var SubTrigger22 = DropdownMenuSubTrigger;
var SubContent22 = DropdownMenuSubContent;

// node_modules/@radix-ui/themes/dist/esm/components/dropdown-menu.js
var I2 = (e43) => o28.createElement(Root25, { ...e43 });
I2.displayName = "DropdownMenu.Root";
var h2 = o28.forwardRef(({ children: e43, ...n23 }, r44) => o28.createElement(Trigger5, { ...n23, ref: r44, asChild: true }, a4(e43)));
h2.displayName = "DropdownMenu.Trigger";
var b3 = o28.createContext({});
var g5 = o28.forwardRef((e43, n23) => {
  const r44 = H(), { size: s23 = n15.size.default, variant: p38 = n15.variant.default, highContrast: a41 = n15.highContrast.default } = e43, { className: i22, children: m18, color: M, container: w3, forceMount: D3, ...k4 } = v(e43, n15), l12 = M || r44.accentColor;
  return o28.createElement(Portal24, { container: w3, forceMount: D3 }, o28.createElement(I, { asChild: true }, o28.createElement(Content25, { "data-accent-color": l12, align: "start", sideOffset: 4, collisionPadding: 10, ...k4, asChild: false, ref: n23, className: (0, import_classnames27.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-DropdownMenuContent", i22) }, o28.createElement(c2, { type: "auto" }, o28.createElement("div", { className: (0, import_classnames27.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, o28.createElement(b3.Provider, { value: o28.useMemo(() => ({ size: s23, variant: p38, color: l12, highContrast: a41 }), [s23, p38, l12, a41]) }, m18))))));
});
g5.displayName = "DropdownMenu.Content";
var y3 = o28.forwardRef(({ className: e43, ...n23 }, r44) => o28.createElement(Label22, { ...n23, asChild: false, ref: r44, className: (0, import_classnames27.default)("rt-BaseMenuLabel", "rt-DropdownMenuLabel", e43) }));
y3.displayName = "DropdownMenu.Label";
var v5 = o28.forwardRef((e43, n23) => {
  const { className: r44, children: s23, color: p38 = a22.color.default, shortcut: a41, ...i22 } = e43;
  return o28.createElement(Item23, { "data-accent-color": p38, ...i22, ref: n23, className: (0, import_classnames27.default)("rt-reset", "rt-BaseMenuItem", "rt-DropdownMenuItem", r44) }, o28.createElement(Slottable, null, s23), a41 && o28.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, a41));
});
v5.displayName = "DropdownMenu.Item";
var R4 = o28.forwardRef(({ className: e43, ...n23 }, r44) => o28.createElement(Group22, { ...n23, asChild: false, ref: r44, className: (0, import_classnames27.default)("rt-BaseMenuGroup", "rt-DropdownMenuGroup", e43) }));
R4.displayName = "DropdownMenu.Group";
var S4 = o28.forwardRef(({ className: e43, ...n23 }, r44) => o28.createElement(RadioGroup22, { ...n23, asChild: false, ref: r44, className: (0, import_classnames27.default)("rt-BaseMenuRadioGroup", "rt-DropdownMenuRadioGroup", e43) }));
S4.displayName = "DropdownMenu.RadioGroup";
var x4 = o28.forwardRef((e43, n23) => {
  const { children: r44, className: s23, color: p38 = p20.color.default, ...a41 } = e43;
  return o28.createElement(RadioItem22, { ...a41, asChild: false, ref: n23, "data-accent-color": p38, className: (0, import_classnames27.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-DropdownMenuItem", "rt-DropdownMenuRadioItem", s23) }, r44, o28.createElement(ItemIndicator22, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, o28.createElement(t12, { className: "rt-BaseMenuItemIndicatorIcon rt-DropdownMenuItemIndicatorIcon" })));
});
x4.displayName = "DropdownMenu.RadioItem";
var T5 = o28.forwardRef((e43, n23) => {
  const { children: r44, className: s23, shortcut: p38, color: a41 = i9.color.default, ...i22 } = e43;
  return o28.createElement(CheckboxItem22, { ...i22, asChild: false, ref: n23, "data-accent-color": a41, className: (0, import_classnames27.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-DropdownMenuItem", "rt-DropdownMenuCheckboxItem", s23) }, r44, o28.createElement(ItemIndicator22, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, o28.createElement(t12, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), p38 && o28.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, p38));
});
T5.displayName = "DropdownMenu.CheckboxItem";
var N5 = (e43) => o28.createElement(Sub22, { ...e43 });
N5.displayName = "DropdownMenu.Sub";
var E5 = o28.forwardRef((e43, n23) => {
  const { className: r44, children: s23, ...p38 } = e43;
  return o28.createElement(SubTrigger22, { ...p38, asChild: false, ref: n23, className: (0, import_classnames27.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-DropdownMenuItem", "rt-DropdownMenuSubTrigger", r44) }, s23, o28.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, o28.createElement(l6, { className: "rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon" })));
});
E5.displayName = "DropdownMenu.SubTrigger";
var G4 = o28.forwardRef((e43, n23) => {
  const { size: r44, variant: s23, color: p38, highContrast: a41 } = o28.useContext(b3), { className: i22, children: m18, container: M, forceMount: w3, ...D3 } = v({ size: r44, variant: s23, color: p38, highContrast: a41, ...e43 }, n15);
  return o28.createElement(Portal24, { container: M, forceMount: w3 }, o28.createElement(I, { asChild: true }, o28.createElement(SubContent22, { "data-accent-color": p38, alignOffset: -Number(r44) * 4, sideOffset: 1, collisionPadding: 10, ...D3, asChild: false, ref: n23, className: (0, import_classnames27.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-DropdownMenuContent", "rt-DropdownMenuSubContent", i22) }, o28.createElement(c2, { type: "auto" }, o28.createElement("div", { className: (0, import_classnames27.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, m18)))));
});
G4.displayName = "DropdownMenu.SubContent";
var B3 = o28.forwardRef(({ className: e43, ...n23 }, r44) => o28.createElement(Separator22, { ...n23, asChild: false, ref: r44, className: (0, import_classnames27.default)("rt-BaseMenuSeparator", "rt-DropdownMenuSeparator", e43) }));
B3.displayName = "DropdownMenu.Separator";

// node_modules/@radix-ui/themes/dist/esm/components/em.js
var e25 = __toESM(require_react(), 1);
var import_classnames28 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/em.props.js
var t16 = { ...o, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/em.js
var o29 = e25.forwardRef((p38, m18) => {
  const { asChild: r44, className: t34, ...s23 } = v(p38, t16);
  return e25.createElement(r44 ? Slot : "em", { ...s23, ref: m18, className: (0, import_classnames28.default)("rt-Em", t34) });
});
o29.displayName = "Em";

// node_modules/@radix-ui/themes/dist/esm/components/hover-card.js
var hover_card_exports = {};
__export(hover_card_exports, {
  Content: () => C5,
  Root: () => p24,
  Trigger: () => s15
});
var r26 = __toESM(require_react(), 1);
var import_classnames29 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-hover-card/dist/index.mjs
var React48 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var originalBodyUserSelect;
var HOVERCARD_NAME = "HoverCard";
var [createHoverCardContext, createHoverCardScope] = createContextScope(HOVERCARD_NAME, [
  createPopperScope
]);
var usePopperScope3 = createPopperScope();
var [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME);
var HoverCard = (props) => {
  const {
    __scopeHoverCard,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    openDelay = 700,
    closeDelay = 300
  } = props;
  const popperScope = usePopperScope3(__scopeHoverCard);
  const openTimerRef = React48.useRef(0);
  const closeTimerRef = React48.useRef(0);
  const hasSelectionRef = React48.useRef(false);
  const isPointerDownOnContentRef = React48.useRef(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const handleOpen = React48.useCallback(() => {
    clearTimeout(closeTimerRef.current);
    openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
  }, [openDelay, setOpen]);
  const handleClose = React48.useCallback(() => {
    clearTimeout(openTimerRef.current);
    if (!hasSelectionRef.current && !isPointerDownOnContentRef.current) {
      closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
    }
  }, [closeDelay, setOpen]);
  const handleDismiss = React48.useCallback(() => setOpen(false), [setOpen]);
  React48.useEffect(() => {
    return () => {
      clearTimeout(openTimerRef.current);
      clearTimeout(closeTimerRef.current);
    };
  }, []);
  return (0, import_jsx_runtime27.jsx)(
    HoverCardProvider,
    {
      scope: __scopeHoverCard,
      open,
      onOpenChange: setOpen,
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      children: (0, import_jsx_runtime27.jsx)(Root23, { ...popperScope, children })
    }
  );
};
HoverCard.displayName = HOVERCARD_NAME;
var TRIGGER_NAME6 = "HoverCardTrigger";
var HoverCardTrigger = React48.forwardRef(
  (props, forwardedRef) => {
    const { __scopeHoverCard, ...triggerProps } = props;
    const context = useHoverCardContext(TRIGGER_NAME6, __scopeHoverCard);
    const popperScope = usePopperScope3(__scopeHoverCard);
    return (0, import_jsx_runtime27.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime27.jsx)(
      Primitive.a,
      {
        "data-state": context.open ? "open" : "closed",
        ...triggerProps,
        ref: forwardedRef,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
        onFocus: composeEventHandlers(props.onFocus, context.onOpen),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onTouchStart: composeEventHandlers(props.onTouchStart, (event) => event.preventDefault())
      }
    ) });
  }
);
HoverCardTrigger.displayName = TRIGGER_NAME6;
var PORTAL_NAME8 = "HoverCardPortal";
var [PortalProvider4, usePortalContext4] = createHoverCardContext(PORTAL_NAME8, {
  forceMount: void 0
});
var HoverCardPortal = (props) => {
  const { __scopeHoverCard, forceMount, children, container } = props;
  const context = useHoverCardContext(PORTAL_NAME8, __scopeHoverCard);
  return (0, import_jsx_runtime27.jsx)(PortalProvider4, { scope: __scopeHoverCard, forceMount, children: (0, import_jsx_runtime27.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime27.jsx)(Portal, { asChild: true, container, children }) }) });
};
HoverCardPortal.displayName = PORTAL_NAME8;
var CONTENT_NAME8 = "HoverCardContent";
var HoverCardContent = React48.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext4(CONTENT_NAME8, props.__scopeHoverCard);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useHoverCardContext(CONTENT_NAME8, props.__scopeHoverCard);
    return (0, import_jsx_runtime27.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime27.jsx)(
      HoverCardContentImpl,
      {
        "data-state": context.open ? "open" : "closed",
        ...contentProps,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, excludeTouch(context.onOpen)),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, excludeTouch(context.onClose)),
        ref: forwardedRef
      }
    ) });
  }
);
HoverCardContent.displayName = CONTENT_NAME8;
var HoverCardContentImpl = React48.forwardRef((props, forwardedRef) => {
  const {
    __scopeHoverCard,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    ...contentProps
  } = props;
  const context = useHoverCardContext(CONTENT_NAME8, __scopeHoverCard);
  const popperScope = usePopperScope3(__scopeHoverCard);
  const ref = React48.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [containSelection, setContainSelection] = React48.useState(false);
  React48.useEffect(() => {
    if (containSelection) {
      const body = document.body;
      originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
      body.style.userSelect = "none";
      body.style.webkitUserSelect = "none";
      return () => {
        body.style.userSelect = originalBodyUserSelect;
        body.style.webkitUserSelect = originalBodyUserSelect;
      };
    }
  }, [containSelection]);
  React48.useEffect(() => {
    if (ref.current) {
      const handlePointerUp = () => {
        setContainSelection(false);
        context.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          var _a;
          const hasSelection = ((_a = document.getSelection()) == null ? void 0 : _a.toString()) !== "";
          if (hasSelection) context.hasSelectionRef.current = true;
        });
      };
      document.addEventListener("pointerup", handlePointerUp);
      return () => {
        document.removeEventListener("pointerup", handlePointerUp);
        context.hasSelectionRef.current = false;
        context.isPointerDownOnContentRef.current = false;
      };
    }
  }, [context.isPointerDownOnContentRef, context.hasSelectionRef]);
  React48.useEffect(() => {
    if (ref.current) {
      const tabbables = getTabbableNodes(ref.current);
      tabbables.forEach((tabbable) => tabbable.setAttribute("tabindex", "-1"));
    }
  });
  return (0, import_jsx_runtime27.jsx)(
    DismissableLayer,
    {
      asChild: true,
      disableOutsidePointerEvents: false,
      onInteractOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside: composeEventHandlers(onFocusOutside, (event) => {
        event.preventDefault();
      }),
      onDismiss: context.onDismiss,
      children: (0, import_jsx_runtime27.jsx)(
        Content3,
        {
          ...popperScope,
          ...contentProps,
          onPointerDown: composeEventHandlers(contentProps.onPointerDown, (event) => {
            if (event.currentTarget.contains(event.target)) {
              setContainSelection(true);
            }
            context.hasSelectionRef.current = false;
            context.isPointerDownOnContentRef.current = true;
          }),
          ref: composedRefs,
          style: {
            ...contentProps.style,
            userSelect: containSelection ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: containSelection ? "text" : void 0,
            // re-namespace exposed content custom properties
            ...{
              "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
              "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
              "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
            }
          }
        }
      )
    }
  );
});
var ARROW_NAME6 = "HoverCardArrow";
var HoverCardArrow = React48.forwardRef(
  (props, forwardedRef) => {
    const { __scopeHoverCard, ...arrowProps } = props;
    const popperScope = usePopperScope3(__scopeHoverCard);
    return (0, import_jsx_runtime27.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
HoverCardArrow.displayName = ARROW_NAME6;
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
function getTabbableNodes(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
var Root26 = HoverCard;
var Trigger6 = HoverCardTrigger;
var Portal5 = HoverCardPortal;
var Content26 = HoverCardContent;

// node_modules/@radix-ui/themes/dist/esm/components/hover-card.props.js
var r25 = ["1", "2", "3"];
var p23 = { ...o, size: { type: "enum", className: "rt-r-size", values: r25, default: "2", responsive: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "480px" }, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/hover-card.js
var p24 = (e43) => r26.createElement(Root26, { closeDelay: 150, openDelay: 200, ...e43 });
p24.displayName = "HoverCard.Root";
var s15 = r26.forwardRef(({ children: e43, className: t34, ...n23 }, a41) => r26.createElement(Trigger6, { ref: a41, className: (0, import_classnames29.default)("rt-HoverCardTrigger", t34), ...n23, asChild: true }, a4(e43)));
s15.displayName = "HoverCard.Trigger";
var C5 = r26.forwardRef((e43, t34) => {
  const { className: n23, forceMount: a41, container: m18, ...d10 } = v(e43, p23);
  return r26.createElement(Portal5, { container: m18, forceMount: a41 }, r26.createElement(I, { asChild: true }, r26.createElement(Content26, { align: "start", sideOffset: 8, collisionPadding: 10, ...d10, ref: t34, className: (0, import_classnames29.default)("rt-PopperContent", "rt-HoverCardContent", n23) })));
});
C5.displayName = "HoverCard.Content";

// node_modules/@radix-ui/themes/dist/esm/components/icon-button.js
var t17 = __toESM(require_react(), 1);
var import_classnames30 = __toESM(require_classnames(), 1);
var o30 = t17.forwardRef(({ className: e43, ...n23 }, r44) => t17.createElement(n11, { ...n23, ref: r44, className: (0, import_classnames30.default)("rt-IconButton", e43) }));
o30.displayName = "IconButton";

// node_modules/@radix-ui/themes/dist/esm/components/inset.js
var e27 = __toESM(require_react(), 1);
var import_classnames31 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/inset.props.js
var a25 = ["all", "x", "y", "top", "bottom", "left", "right"];
var t18 = ["border-box", "padding-box"];
var e26 = ["current", "0"];
var u5 = { ...o, side: { type: "enum", className: "rt-r-side", values: a25, default: "all", responsive: true }, clip: { type: "enum", className: "rt-r-clip", values: t18, default: "border-box", responsive: true }, p: { type: "enum", className: "rt-r-p", values: e26, parseValue: p25, responsive: true }, px: { type: "enum", className: "rt-r-px", values: e26, parseValue: p25, responsive: true }, py: { type: "enum", className: "rt-r-py", values: e26, parseValue: p25, responsive: true }, pt: { type: "enum", className: "rt-r-pt", values: e26, parseValue: p25, responsive: true }, pr: { type: "enum", className: "rt-r-pr", values: e26, parseValue: p25, responsive: true }, pb: { type: "enum", className: "rt-r-pb", values: e26, parseValue: p25, responsive: true }, pl: { type: "enum", className: "rt-r-pl", values: e26, parseValue: p25, responsive: true } };
function p25(s23) {
  return s23 === "current" ? "inset" : s23;
}

// node_modules/@radix-ui/themes/dist/esm/components/inset.js
var o31 = e27.forwardRef((r44, p38) => {
  const { asChild: t34, className: s23, ...m18 } = v(r44, u5, r5);
  return e27.createElement(t34 ? Slot : "div", { ...m18, ref: p38, className: (0, import_classnames31.default)("rt-Inset", s23) });
});
o31.displayName = "Inset";

// node_modules/@radix-ui/themes/dist/esm/components/kbd.js
var o33 = __toESM(require_react(), 1);
var import_classnames32 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/kbd.props.js
var e28 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var o32 = { ...o, size: { type: "enum", className: "rt-r-size", values: e28, responsive: true } };

// node_modules/@radix-ui/themes/dist/esm/components/kbd.js
var r27 = o33.forwardRef((p38, e43) => {
  const { asChild: t34, className: s23, ...m18 } = v(p38, o32, r5);
  return o33.createElement(t34 ? Slot : "kbd", { ...m18, ref: e43, className: (0, import_classnames32.default)("rt-reset", "rt-Kbd", s23) });
});
r27.displayName = "Kbd";

// node_modules/@radix-ui/themes/dist/esm/components/link.js
var o34 = __toESM(require_react(), 1);
var import_classnames33 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/link.props.js
var n19 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var f10 = ["auto", "always", "hover", "none"];
var m10 = { ...o, size: { type: "enum", className: "rt-r-size", values: n19, responsive: true }, ...t3, ...r3, ...e6, ...r4, underline: { type: "enum", className: "rt-underline", values: f10, default: "auto" }, ...s2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/link.js
var e29 = o34.forwardRef((p38, t34) => {
  const { children: r44, className: s23, color: n23, asChild: i22, ...m18 } = v(p38, m10);
  return o34.createElement(p, { ...m18, "data-accent-color": n23, ref: t34, asChild: true, className: (0, import_classnames33.default)("rt-reset", "rt-Link", s23) }, i22 ? r44 : o34.createElement("a", null, r44));
});
e29.displayName = "Link";

// node_modules/@radix-ui/themes/dist/esm/components/popover.js
var popover_exports = {};
__export(popover_exports, {
  Anchor: () => m11,
  Close: () => v6,
  Content: () => i13,
  Root: () => P3,
  Trigger: () => s17
});
var o35 = __toESM(require_react(), 1);
var import_classnames34 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-popover/dist/index.mjs
var React49 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [
  createPopperScope
]);
var usePopperScope4 = createPopperScope();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props;
  const popperScope = usePopperScope4(__scopePopover);
  const triggerRef = React49.useRef(null);
  const [hasCustomAnchor, setHasCustomAnchor] = React49.useState(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return (0, import_jsx_runtime28.jsx)(Root23, { ...popperScope, children: (0, import_jsx_runtime28.jsx)(
    PopoverProvider,
    {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React49.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
      hasCustomAnchor,
      onCustomAnchorAdd: React49.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React49.useCallback(() => setHasCustomAnchor(false), []),
      modal,
      children
    }
  ) });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME3 = "PopoverAnchor";
var PopoverAnchor = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME3, __scopePopover);
    const popperScope = usePopperScope4(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    React49.useEffect(() => {
      onCustomAnchorAdd();
      return () => onCustomAnchorRemove();
    }, [onCustomAnchorAdd, onCustomAnchorRemove]);
    return (0, import_jsx_runtime28.jsx)(Anchor, { ...popperScope, ...anchorProps, ref: forwardedRef });
  }
);
PopoverAnchor.displayName = ANCHOR_NAME3;
var TRIGGER_NAME7 = "PopoverTrigger";
var PopoverTrigger = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME7, __scopePopover);
    const popperScope = usePopperScope4(__scopePopover);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    const trigger = (0, import_jsx_runtime28.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState3(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
    return context.hasCustomAnchor ? trigger : (0, import_jsx_runtime28.jsx)(Anchor, { asChild: true, ...popperScope, children: trigger });
  }
);
PopoverTrigger.displayName = TRIGGER_NAME7;
var PORTAL_NAME9 = "PopoverPortal";
var [PortalProvider5, usePortalContext5] = createPopoverContext(PORTAL_NAME9, {
  forceMount: void 0
});
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props;
  const context = usePopoverContext(PORTAL_NAME9, __scopePopover);
  return (0, import_jsx_runtime28.jsx)(PortalProvider5, { scope: __scopePopover, forceMount, children: (0, import_jsx_runtime28.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime28.jsx)(Portal, { asChild: true, container, children }) }) });
};
PopoverPortal.displayName = PORTAL_NAME9;
var CONTENT_NAME9 = "PopoverContent";
var PopoverContent = React49.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext5(CONTENT_NAME9, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME9, props.__scopePopover);
    return (0, import_jsx_runtime28.jsx)(Presence, { present: forceMount || context.open, children: context.modal ? (0, import_jsx_runtime28.jsx)(PopoverContentModal, { ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime28.jsx)(PopoverContentNonModal, { ...contentProps, ref: forwardedRef }) });
  }
);
PopoverContent.displayName = CONTENT_NAME9;
var PopoverContentModal = React49.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME9, props.__scopePopover);
    const contentRef = React49.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const isRightClickOutsideRef = React49.useRef(false);
    React49.useEffect(() => {
      const content = contentRef.current;
      if (content) return hideOthers(content);
    }, []);
    return (0, import_jsx_runtime28.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, children: (0, import_jsx_runtime28.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
          var _a;
          event.preventDefault();
          if (!isRightClickOutsideRef.current) (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
        }),
        onPointerDownOutside: composeEventHandlers(
          props.onPointerDownOutside,
          (event) => {
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            isRightClickOutsideRef.current = isRightClick;
          },
          { checkForDefaultPrevented: false }
        ),
        onFocusOutside: composeEventHandlers(
          props.onFocusOutside,
          (event) => event.preventDefault(),
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
var PopoverContentNonModal = React49.forwardRef(
  (props, forwardedRef) => {
    const context = usePopoverContext(CONTENT_NAME9, props.__scopePopover);
    const hasInteractedOutsideRef = React49.useRef(false);
    const hasPointerDownOutsideRef = React49.useRef(false);
    return (0, import_jsx_runtime28.jsx)(
      PopoverContentImpl,
      {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event) => {
          var _a, _b;
          (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.current) (_b = context.triggerRef.current) == null ? void 0 : _b.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.current = false;
          hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event) => {
          var _a, _b;
          (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.current = true;
            if (event.detail.originalEvent.type === "pointerdown") {
              hasPointerDownOutsideRef.current = true;
            }
          }
          const target = event.target;
          const targetIsTrigger = (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
            event.preventDefault();
          }
        }
      }
    );
  }
);
var PopoverContentImpl = React49.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopePopover,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      ...contentProps
    } = props;
    const context = usePopoverContext(CONTENT_NAME9, __scopePopover);
    const popperScope = usePopperScope4(__scopePopover);
    useFocusGuards();
    return (0, import_jsx_runtime28.jsx)(
      FocusScope,
      {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: (0, import_jsx_runtime28.jsx)(
          DismissableLayer,
          {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: () => context.onOpenChange(false),
            children: (0, import_jsx_runtime28.jsx)(
              Content3,
              {
                "data-state": getState3(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                  ...contentProps.style,
                  // re-namespace exposed content custom properties
                  ...{
                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                  }
                }
              }
            )
          }
        )
      }
    );
  }
);
var CLOSE_NAME2 = "PopoverClose";
var PopoverClose = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME2, __scopePopover);
    return (0, import_jsx_runtime28.jsx)(
      Primitive.button,
      {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
      }
    );
  }
);
PopoverClose.displayName = CLOSE_NAME2;
var ARROW_NAME7 = "PopoverArrow";
var PopoverArrow = React49.forwardRef(
  (props, forwardedRef) => {
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope4(__scopePopover);
    return (0, import_jsx_runtime28.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
PopoverArrow.displayName = ARROW_NAME7;
function getState3(open) {
  return open ? "open" : "closed";
}
var Root27 = Popover;
var Anchor22 = PopoverAnchor;
var Trigger7 = PopoverTrigger;
var Portal6 = PopoverPortal;
var Content27 = PopoverContent;
var Close2 = PopoverClose;

// node_modules/@radix-ui/themes/dist/esm/components/popover.props.js
var p26 = ["1", "2", "3", "4"];
var r28 = { ...o, size: { type: "enum", className: "rt-r-size", values: p26, default: "2", responsive: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "480px" }, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/popover.js
var P3 = (e43) => o35.createElement(Root27, { ...e43 });
P3.displayName = "Popover.Root";
var s17 = o35.forwardRef(({ children: e43, ...r44 }, t34) => o35.createElement(Trigger7, { ...r44, ref: t34, asChild: true }, a4(e43)));
s17.displayName = "Popover.Trigger";
var i13 = o35.forwardRef((e43, r44) => {
  const { className: t34, forceMount: a41, container: f19, ...l12 } = v(e43, r28);
  return o35.createElement(Portal6, { container: f19, forceMount: a41 }, o35.createElement(I, { asChild: true }, o35.createElement(Content27, { align: "start", sideOffset: 8, collisionPadding: 10, ...l12, ref: r44, className: (0, import_classnames34.default)("rt-PopperContent", "rt-PopoverContent", t34) })));
});
i13.displayName = "Popover.Content";
var v6 = o35.forwardRef(({ children: e43, ...r44 }, t34) => o35.createElement(Close2, { ...r44, ref: t34, asChild: true }, a4(e43)));
v6.displayName = "Popover.Close";
var m11 = o35.forwardRef(({ children: e43, ...r44 }, t34) => o35.createElement(Anchor22, { ...r44, ref: t34 }));
m11.displayName = "Popover.Anchor";

// node_modules/@radix-ui/themes/dist/esm/components/progress.js
var o37 = __toESM(require_react(), 1);
var import_classnames35 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-progress/dist/index.mjs
var React51 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-progress/node_modules/@radix-ui/react-context/dist/index.mjs
var React50 = __toESM(require_react(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
function createContextScope5(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React50.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = React50.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime29.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = React50.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React50.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React50.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes5(createScope, ...createContextScopeDeps)];
}
function composeContextScopes5(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React50.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-progress/dist/index.mjs
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = createContextScope5(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress = React51.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max2 = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max2)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max2) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max2) : void 0;
    return (0, import_jsx_runtime30.jsx)(ProgressProvider, { scope: __scopeProgress, value, max: max2, children: (0, import_jsx_runtime30.jsx)(
      Primitive.div,
      {
        "aria-valuemax": max2,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max2),
        "data-value": value ?? void 0,
        "data-max": max2,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress.displayName = PROGRESS_NAME;
var INDICATOR_NAME4 = "ProgressIndicator";
var ProgressIndicator = React51.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME4, __scopeProgress);
    return (0, import_jsx_runtime30.jsx)(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME4;
function defaultGetValueLabel(value, max2) {
  return `${Math.round(value / max2 * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max2) {
  return isNumber(max2) && !isNaN(max2) && max2 > 0;
}
function isValidValueNumber(value, max2) {
  return isNumber(value) && !isNaN(value) && value <= max2 && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root8 = Progress;
var Indicator2 = ProgressIndicator;

// node_modules/@radix-ui/themes/dist/esm/components/progress.props.js
var o36 = ["1", "2", "3"];
var t19 = ["classic", "surface", "soft"];
var a27 = { size: { type: "enum", className: "rt-r-size", values: o36, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t19, default: "surface" }, ...r2, ...o3, ...r7, duration: { type: "string" } };

// node_modules/@radix-ui/themes/dist/esm/components/progress.js
var s18 = o37.forwardRef((p38, t34) => {
  const { className: m18, style: i22, color: a41, radius: n23, duration: P7, ...r44 } = v(p38, a27, r5);
  return o37.createElement(Root8, { "data-accent-color": a41, "data-radius": n23, ref: t34, className: (0, import_classnames35.default)("rt-ProgressRoot", m18), style: l2({ "--progress-duration": "value" in r44 ? void 0 : P7, "--progress-value": "value" in r44 ? r44.value : void 0, "--progress-max": "max" in r44 ? r44.max : void 0 }, i22), ...r44, asChild: false }, o37.createElement(Indicator2, { className: "rt-ProgressIndicator" }));
});
s18.displayName = "Progress";

// node_modules/@radix-ui/themes/dist/esm/components/quote.js
var o38 = __toESM(require_react(), 1);
var import_classnames36 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/quote.props.js
var p27 = { ...o, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/quote.js
var e30 = o38.forwardRef((t34, p38) => {
  const { asChild: r44, className: s23, ...m18 } = v(t34, p27);
  return o38.createElement(r44 ? Slot : "q", { ...m18, ref: p38, className: (0, import_classnames36.default)("rt-Quote", s23) });
});
e30.displayName = "Quote";

// node_modules/@radix-ui/themes/dist/esm/components/radio-cards.js
var radio_cards_exports = {};
__export(radio_cards_exports, {
  Item: () => i14,
  Root: () => p29
});
var o39 = __toESM(require_react(), 1);
var import_classnames37 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var React211 = __toESM(require_react(), 1);
var React52 = __toESM(require_react(), 1);
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = createContextScope(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = React52.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadio,
      name,
      checked = false,
      required,
      disabled,
      value = "on",
      onCheck,
      form,
      ...radioProps
    } = props;
    const [button, setButton] = React52.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React52.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return (0, import_jsx_runtime31.jsxs)(RadioProvider, { scope: __scopeRadio, checked, disabled, children: [
      (0, import_jsx_runtime31.jsx)(
        Primitive.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": checked,
          "data-state": getState4(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...radioProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            if (!checked) onCheck == null ? void 0 : onCheck();
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && (0, import_jsx_runtime31.jsx)(
        BubbleInput2,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME5 = "RadioIndicator";
var RadioIndicator = React52.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME5, __scopeRadio);
    return (0, import_jsx_runtime31.jsx)(Presence, { present: forceMount || context.checked, children: (0, import_jsx_runtime31.jsx)(
      Primitive.span,
      {
        "data-state": getState4(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...indicatorProps,
        ref: forwardedRef
      }
    ) });
  }
);
RadioIndicator.displayName = INDICATOR_NAME5;
var BubbleInput2 = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = React52.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React52.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return (0, import_jsx_runtime31.jsx)(
    "input",
    {
      type: "radio",
      "aria-hidden": true,
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function getState4(checked) {
  return checked ? "checked" : "unchecked";
}
var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var RADIO_GROUP_NAME4 = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = createContextScope(RADIO_GROUP_NAME4, [
  createRovingFocusGroupScope,
  createRadioScope
]);
var useRovingFocusGroupScope2 = createRovingFocusGroupScope();
var useRadioScope = createRadioScope();
var [RadioGroupProvider2, useRadioGroupContext2] = createRadioGroupContext(RADIO_GROUP_NAME4);
var RadioGroup3 = React211.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRadioGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir,
      loop = true,
      onValueChange,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeRadioGroup);
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange
    });
    return (0, import_jsx_runtime32.jsx)(
      RadioGroupProvider2,
      {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: (0, import_jsx_runtime32.jsx)(
          Root6,
          {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: (0, import_jsx_runtime32.jsx)(
              Primitive.div,
              {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
              }
            )
          }
        )
      }
    );
  }
);
RadioGroup3.displayName = RADIO_GROUP_NAME4;
var ITEM_NAME5 = "RadioGroupItem";
var RadioGroupItem = React211.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext2(ITEM_NAME5, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope2(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = React211.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = React211.useRef(false);
    React211.useEffect(() => {
      const handleKeyDown = (event) => {
        if (ARROW_KEYS.includes(event.key)) {
          isArrowKeyPressedRef.current = true;
        }
      };
      const handleKeyUp = () => isArrowKeyPressedRef.current = false;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return (0, import_jsx_runtime32.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: (0, import_jsx_runtime32.jsx)(
          Radio,
          {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: () => context.onValueChange(itemProps.value),
            onKeyDown: composeEventHandlers((event) => {
              if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: composeEventHandlers(itemProps.onFocus, () => {
              var _a;
              if (isArrowKeyPressedRef.current) (_a = ref.current) == null ? void 0 : _a.click();
            })
          }
        )
      }
    );
  }
);
RadioGroupItem.displayName = ITEM_NAME5;
var INDICATOR_NAME22 = "RadioGroupIndicator";
var RadioGroupIndicator = React211.forwardRef(
  (props, forwardedRef) => {
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return (0, import_jsx_runtime32.jsx)(RadioIndicator, { ...radioScope, ...indicatorProps, ref: forwardedRef });
  }
);
RadioGroupIndicator.displayName = INDICATOR_NAME22;
var Root28 = RadioGroup3;
var Item24 = RadioGroupItem;

// node_modules/@radix-ui/themes/dist/esm/components/radio-cards.props.js
var a28 = ["1", "2", "3"];
var t20 = ["surface", "classic"];
var p28 = { ...o, size: { type: "enum", className: "rt-r-size", values: a28, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t20, default: "surface" }, ...r2, ...o3, columns: { ...s11.columns, default: "repeat(auto-fit, minmax(160px, 1fr))" }, gap: { ...s11.gap, default: "4" } };

// node_modules/@radix-ui/themes/dist/esm/components/radio-cards.js
var p29 = o39.forwardRef((r44, t34) => {
  const { className: e43, color: d10, ...m18 } = v(r44, p28, r5);
  return o39.createElement(o20, { asChild: true }, o39.createElement(Root28, { "data-accent-color": d10, ...m18, ref: t34, className: (0, import_classnames37.default)("rt-RadioCardsRoot", e43) }));
});
p29.displayName = "RadioCards.Root";
var i14 = o39.forwardRef(({ className: r44, ...t34 }, e43) => o39.createElement(Item24, { ...t34, asChild: false, ref: e43, className: (0, import_classnames37.default)("rt-reset", "rt-BaseCard", "rt-RadioCardsItem", r44) }));
i14.displayName = "RadioCards.Item";

// node_modules/@radix-ui/themes/dist/esm/components/radio-group.js
var radio_group_exports = {};
__export(radio_group_exports, {
  Item: () => x5,
  Root: () => y4
});
var o41 = __toESM(require_react(), 1);
var import_classnames38 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/radio-group.props.js
var o40 = ["1", "2", "3"];
var t21 = ["classic", "surface", "soft"];
var a30 = { ...o, size: { type: "enum", className: "rt-r-size", values: o40, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t21, default: "surface" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/radio-group.js
var P4 = "RadioGroup";
var [S5] = createContextScope(P4, [createRadioGroupScope]);
var l9 = createRadioGroupScope();
var [E6, I3] = S5(P4);
var y4 = o41.forwardRef(({ color: a41 = a30.color.default, highContrast: e43 = a30.highContrast.default, size: r44 = a30.size.default, variant: t34 = a30.variant.default, ...i22 }, s23) => {
  const { __scopeRadioGroup: p38, className: R6, ...C9 } = v(i22, r5), h4 = l9(p38);
  return o41.createElement(E6, { scope: p38, color: a41, highContrast: e43, size: r44, variant: t34 }, o41.createElement(Root28, { ...h4, ...C9, ref: s23, className: (0, import_classnames38.default)("rt-RadioGroupRoot", R6) }));
});
y4.displayName = "RadioGroup.Root";
var x5 = o41.forwardRef((a41, e43) => {
  const { __scopeRadioGroup: r44, children: t34, className: i22, style: s23, ...p38 } = a41, { size: R6 } = I3("RadioGroupItem", r44);
  return t34 ? o41.createElement(p, { as: "label", size: R6, className: (0, import_classnames38.default)("rt-RadioGroupItem", i22), style: s23 }, o41.createElement(u6, { __scopeRadioGroup: r44, ...p38, ref: e43 }), t34 && o41.createElement("span", { className: "rt-RadioGroupItemInner" }, t34)) : o41.createElement(u6, { __scopeRadioGroup: r44, ...p38, ref: e43, className: i22, style: s23 });
});
x5.displayName = "RadioGroup.Item";
var u6 = o41.forwardRef(({ __scopeRadioGroup: a41, ...e43 }, r44) => {
  const t34 = I3("RadioGroupItemRadio", a41), i22 = l9(a41), { color: s23, className: p38 } = v({ ...e43, ...t34 }, a30, r5);
  return o41.createElement(Item24, { ...i22, "data-accent-color": s23, ...e43, asChild: false, ref: r44, className: (0, import_classnames38.default)("rt-reset", "rt-BaseRadioRoot", p38) });
});
u6.displayName = "RadioGroup.ItemRadio";

// node_modules/@radix-ui/themes/dist/esm/components/radio.js
var o43 = __toESM(require_react(), 1);
var import_classnames39 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/base-radio.props.js
var r29 = ["1", "2", "3"];
var o42 = ["classic", "surface", "soft"];
var t22 = { size: { type: "enum", className: "rt-r-size", values: r29, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: o42, default: "surface" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/radio.js
var e31 = o43.forwardRef((r44, t34) => {
  const p38 = o43.useRef(null), { className: a41, color: s23, onChange: i22, onValueChange: n23, ...m18 } = v(r44, t22, r5);
  return o43.createElement("input", { type: "radio", "data-accent-color": s23, ...m18, onChange: composeEventHandlers(i22, (d10) => n23 == null ? void 0 : n23(d10.currentTarget.value)), ref: composeRefs(p38, t34), className: (0, import_classnames39.default)("rt-reset", "rt-BaseRadioRoot", "rt-RadioRoot", a41) });
});
e31.displayName = "Radio";

// node_modules/@radix-ui/themes/dist/esm/components/reset.js
var e32 = __toESM(require_react(), 1);
var import_classnames40 = __toESM(require_classnames(), 1);
var o44 = e32.forwardRef(({ className: t34, children: r44, ...s23 }, p38) => e32.createElement(Slot, { ...s23, ref: p38, className: (0, import_classnames40.default)("rt-reset", t34) }, a4(r44)));
o44.displayName = "Reset";

// node_modules/@radix-ui/themes/dist/esm/components/segmented-control.js
var segmented_control_exports = {};
__export(segmented_control_exports, {
  Item: () => l10,
  Root: () => p30
});
var e33 = __toESM(require_react(), 1);
var import_classnames41 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-toggle-group/node_modules/@radix-ui/react-context/dist/index.mjs
var React53 = __toESM(require_react(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
function createContextScope6(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React53.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider2(props) {
      const { scope, children, ...context } = props;
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = React53.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime33.jsx)(Context.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = React53.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider2.displayName = rootComponentName + "Provider";
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React53.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React53.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes6(createScope, ...createContextScopeDeps)];
}
function composeContextScopes6(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React53.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-toggle/dist/index.mjs
var React54 = __toESM(require_react(), 1);
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var NAME5 = "Toggle";
var Toggle = React54.forwardRef((props, forwardedRef) => {
  const { pressed: pressedProp, defaultPressed = false, onPressedChange, ...buttonProps } = props;
  const [pressed = false, setPressed] = useControllableState({
    prop: pressedProp,
    onChange: onPressedChange,
    defaultProp: defaultPressed
  });
  return (0, import_jsx_runtime34.jsx)(
    Primitive.button,
    {
      type: "button",
      "aria-pressed": pressed,
      "data-state": pressed ? "on" : "off",
      "data-disabled": props.disabled ? "" : void 0,
      ...buttonProps,
      ref: forwardedRef,
      onClick: composeEventHandlers(props.onClick, () => {
        if (!props.disabled) {
          setPressed(!pressed);
        }
      })
    }
  );
});
Toggle.displayName = NAME5;

// node_modules/@radix-ui/react-toggle-group/dist/index.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var TOGGLE_GROUP_NAME = "ToggleGroup";
var [createToggleGroupContext, createToggleGroupScope] = createContextScope6(TOGGLE_GROUP_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope3 = createRovingFocusGroupScope();
var ToggleGroup = import_react7.default.forwardRef((props, forwardedRef) => {
  const { type, ...toggleGroupProps } = props;
  if (type === "single") {
    const singleProps = toggleGroupProps;
    return (0, import_jsx_runtime35.jsx)(ToggleGroupImplSingle, { ...singleProps, ref: forwardedRef });
  }
  if (type === "multiple") {
    const multipleProps = toggleGroupProps;
    return (0, import_jsx_runtime35.jsx)(ToggleGroupImplMultiple, { ...multipleProps, ref: forwardedRef });
  }
  throw new Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImplSingle = import_react7.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupSingleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return (0, import_jsx_runtime35.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "single",
      value: value ? [value] : [],
      onItemActivate: setValue,
      onItemDeactivate: import_react7.default.useCallback(() => setValue(""), [setValue]),
      children: (0, import_jsx_runtime35.jsx)(ToggleGroupImpl, { ...toggleGroupSingleProps, ref: forwardedRef })
    }
  );
});
var ToggleGroupImplMultiple = import_react7.default.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...toggleGroupMultipleProps
  } = props;
  const [value = [], setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const handleButtonActivate = import_react7.default.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleButtonDeactivate = import_react7.default.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return (0, import_jsx_runtime35.jsx)(
    ToggleGroupValueProvider,
    {
      scope: props.__scopeToggleGroup,
      type: "multiple",
      value,
      onItemActivate: handleButtonActivate,
      onItemDeactivate: handleButtonDeactivate,
      children: (0, import_jsx_runtime35.jsx)(ToggleGroupImpl, { ...toggleGroupMultipleProps, ref: forwardedRef })
    }
  );
});
ToggleGroup.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME);
var ToggleGroupImpl = import_react7.default.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeToggleGroup,
      disabled = false,
      rovingFocus = true,
      orientation,
      dir,
      loop = true,
      ...toggleGroupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope3(__scopeToggleGroup);
    const direction = useDirection(dir);
    const commonProps = { role: "group", dir: direction, ...toggleGroupProps };
    return (0, import_jsx_runtime35.jsx)(ToggleGroupContext, { scope: __scopeToggleGroup, rovingFocus, disabled, children: rovingFocus ? (0, import_jsx_runtime35.jsx)(
      Root6,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation,
        dir: direction,
        loop,
        children: (0, import_jsx_runtime35.jsx)(Primitive.div, { ...commonProps, ref: forwardedRef })
      }
    ) : (0, import_jsx_runtime35.jsx)(Primitive.div, { ...commonProps, ref: forwardedRef }) });
  }
);
var ITEM_NAME6 = "ToggleGroupItem";
var ToggleGroupItem = import_react7.default.forwardRef(
  (props, forwardedRef) => {
    const valueContext = useToggleGroupValueContext(ITEM_NAME6, props.__scopeToggleGroup);
    const context = useToggleGroupContext(ITEM_NAME6, props.__scopeToggleGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope3(props.__scopeToggleGroup);
    const pressed = valueContext.value.includes(props.value);
    const disabled = context.disabled || props.disabled;
    const commonProps = { ...props, pressed, disabled };
    const ref = import_react7.default.useRef(null);
    return context.rovingFocus ? (0, import_jsx_runtime35.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: pressed,
        ref,
        children: (0, import_jsx_runtime35.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef })
      }
    ) : (0, import_jsx_runtime35.jsx)(ToggleGroupItemImpl, { ...commonProps, ref: forwardedRef });
  }
);
ToggleGroupItem.displayName = ITEM_NAME6;
var ToggleGroupItemImpl = import_react7.default.forwardRef(
  (props, forwardedRef) => {
    const { __scopeToggleGroup, value, ...itemProps } = props;
    const valueContext = useToggleGroupValueContext(ITEM_NAME6, __scopeToggleGroup);
    const singleProps = { role: "radio", "aria-checked": props.pressed, "aria-pressed": void 0 };
    const typeProps = valueContext.type === "single" ? singleProps : void 0;
    return (0, import_jsx_runtime35.jsx)(
      Toggle,
      {
        ...typeProps,
        ...itemProps,
        ref: forwardedRef,
        onPressedChange: (pressed) => {
          if (pressed) {
            valueContext.onItemActivate(value);
          } else {
            valueContext.onItemDeactivate(value);
          }
        }
      }
    );
  }
);
var Root29 = ToggleGroup;
var Item25 = ToggleGroupItem;

// node_modules/@radix-ui/themes/dist/esm/components/segmented-control.props.js
var s19 = ["1", "2", "3"];
var a31 = ["surface", "classic"];
var o45 = { disabled: { type: "boolean", className: "disabled", default: false }, size: { type: "enum", className: "rt-r-size", values: s19, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a31, default: "surface" }, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/segmented-control.js
var p30 = e33.forwardRef((o60, t34) => {
  const { className: r44, children: n23, radius: d10, value: i22, defaultValue: g7, onValueChange: f19, ...P7 } = v(o60, o45, r5), [C9, u10] = useControllableState({ prop: i22, onChange: f19, defaultProp: g7 });
  return e33.createElement(Root29, { "data-disabled": o60.disabled || void 0, "data-radius": d10, ref: t34, className: (0, import_classnames41.default)("rt-SegmentedControlRoot", r44), onValueChange: (s23) => {
    s23 && u10(s23);
  }, ...P7, type: "single", value: C9, asChild: false, disabled: !!o60.disabled }, n23, e33.createElement("div", { className: "rt-SegmentedControlIndicator" }));
});
p30.displayName = "SegmentedControl.Root";
var l10 = e33.forwardRef(({ children: o60, className: t34, ...r44 }, n23) => e33.createElement(Item25, { ref: n23, className: (0, import_classnames41.default)("rt-reset", "rt-SegmentedControlItem", t34), ...r44, disabled: false, asChild: false }, e33.createElement("span", { className: "rt-SegmentedControlItemSeparator" }), e33.createElement("span", { className: "rt-SegmentedControlItemLabel" }, e33.createElement("span", { className: "rt-SegmentedControlItemLabelActive" }, o60), e33.createElement("span", { className: "rt-SegmentedControlItemLabelInactive" }, o60))));
l10.displayName = "SegmentedControl.Item";

// node_modules/@radix-ui/themes/dist/esm/components/section.js
var o47 = __toESM(require_react(), 1);
var import_classnames42 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/section.props.js
var p31 = ["1", "2", "3", "4"];
var o46 = ["none", "initial"];
var t23 = { ...o, size: { type: "enum", className: "rt-r-size", values: p31, default: "3", responsive: true }, display: { type: "enum", className: "rt-r-display", values: o46, parseValue: r30, responsive: true } };
function r30(e43) {
  return e43 === "initial" ? "block" : e43;
}

// node_modules/@radix-ui/themes/dist/esm/components/section.js
var r31 = o47.forwardRef((t34, p38) => {
  const { asChild: e43, className: s23, ...m18 } = v(t34, t23, u, r5);
  return o47.createElement(e43 ? Slot : "section", { ...m18, ref: p38, className: (0, import_classnames42.default)("rt-Section", s23) });
});
r31.displayName = "Section";

// node_modules/@radix-ui/themes/dist/esm/components/select.js
var select_exports = {};
__export(select_exports, {
  Content: () => g6,
  Group: () => v7,
  Item: () => y5,
  Label: () => h3,
  Root: () => C7,
  Separator: () => I4,
  Trigger: () => u7
});
var e34 = __toESM(require_react(), 1);
var import_classnames43 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-select/dist/index.mjs
var React56 = __toESM(require_react(), 1);
var ReactDOM4 = __toESM(require_react_dom(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS2 = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection3, useCollection3, createCollectionScope3] = createCollection(SELECT_NAME);
var [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [
  createCollectionScope3,
  createPopperScope
]);
var usePopperScope5 = createPopperScope();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = (props) => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope5(__scopeSelect);
  const [trigger, setTrigger] = React56.useState(null);
  const [valueNode, setValueNode] = React56.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = React56.useState(false);
  const direction = useDirection(dir);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const triggerPointerDownPosRef = React56.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = React56.useState(/* @__PURE__ */ new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map((option) => option.props.value).join(";");
  return (0, import_jsx_runtime36.jsx)(Root23, { ...popperScope, children: (0, import_jsx_runtime36.jsxs)(
    SelectProvider,
    {
      required,
      scope: __scopeSelect,
      trigger,
      onTriggerChange: setTrigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      contentId: useId(),
      value,
      onValueChange: setValue,
      open,
      onOpenChange: setOpen,
      dir: direction,
      triggerPointerDownPosRef,
      disabled,
      children: [
        (0, import_jsx_runtime36.jsx)(Collection3.Provider, { scope: __scopeSelect, children: (0, import_jsx_runtime36.jsx)(
          SelectNativeOptionsProvider,
          {
            scope: props.__scopeSelect,
            onNativeOptionAdd: React56.useCallback((option) => {
              setNativeOptionsSet((prev) => new Set(prev).add(option));
            }, []),
            onNativeOptionRemove: React56.useCallback((option) => {
              setNativeOptionsSet((prev) => {
                const optionsSet = new Set(prev);
                optionsSet.delete(option);
                return optionsSet;
              });
            }, []),
            children
          }
        ) }),
        isFormControl ? (0, import_jsx_runtime36.jsxs)(
          BubbleSelect,
          {
            "aria-hidden": true,
            required,
            tabIndex: -1,
            name,
            autoComplete,
            value,
            onChange: (event) => setValue(event.target.value),
            disabled,
            form,
            children: [
              value === void 0 ? (0, import_jsx_runtime36.jsx)("option", { value: "" }) : null,
              Array.from(nativeOptionsSet)
            ]
          },
          nativeSelectKey
        ) : null
      ]
    }
  ) });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME8 = "SelectTrigger";
var SelectTrigger = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, disabled = false, ...triggerProps } = props;
    const popperScope = usePopperScope5(__scopeSelect);
    const context = useSelectContext(TRIGGER_NAME8, __scopeSelect);
    const isDisabled = context.disabled || disabled;
    const composedRefs = useComposedRefs(forwardedRef, context.onTriggerChange);
    const getItems = useCollection3(__scopeSelect);
    const pointerTypeRef = React56.useRef("touch");
    const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.value === context.value);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem !== void 0) {
        context.onValueChange(nextItem.value);
      }
    });
    const handleOpen = (pointerEvent) => {
      if (!isDisabled) {
        context.onOpenChange(true);
        resetTypeahead();
      }
      if (pointerEvent) {
        context.triggerPointerDownPosRef.current = {
          x: Math.round(pointerEvent.pageX),
          y: Math.round(pointerEvent.pageY)
        };
      }
    };
    return (0, import_jsx_runtime36.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime36.jsx)(
      Primitive.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": context.contentId,
        "aria-expanded": context.open,
        "aria-required": context.required,
        "aria-autocomplete": "none",
        dir: context.dir,
        "data-state": context.open ? "open" : "closed",
        disabled: isDisabled,
        "data-disabled": isDisabled ? "" : void 0,
        "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
        ...triggerProps,
        ref: composedRefs,
        onClick: composeEventHandlers(triggerProps.onClick, (event) => {
          event.currentTarget.focus();
          if (pointerTypeRef.current !== "mouse") {
            handleOpen(event);
          }
        }),
        onPointerDown: composeEventHandlers(triggerProps.onPointerDown, (event) => {
          pointerTypeRef.current = event.pointerType;
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
          }
          if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
            handleOpen(event);
            event.preventDefault();
          }
        }),
        onKeyDown: composeEventHandlers(triggerProps.onKeyDown, (event) => {
          const isTypingAhead = searchRef.current !== "";
          const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
          if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
          if (isTypingAhead && event.key === " ") return;
          if (OPEN_KEYS.includes(event.key)) {
            handleOpen();
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
SelectTrigger.displayName = TRIGGER_NAME8;
var VALUE_NAME = "SelectValue";
var SelectValue = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, children, placeholder = "", ...valueProps } = props;
    const context = useSelectContext(VALUE_NAME, __scopeSelect);
    const { onValueNodeHasChildrenChange } = context;
    const hasChildren = children !== void 0;
    const composedRefs = useComposedRefs(forwardedRef, context.onValueNodeChange);
    useLayoutEffect2(() => {
      onValueNodeHasChildrenChange(hasChildren);
    }, [onValueNodeHasChildrenChange, hasChildren]);
    return (0, import_jsx_runtime36.jsx)(
      Primitive.span,
      {
        ...valueProps,
        ref: composedRefs,
        style: { pointerEvents: "none" },
        children: shouldShowPlaceholder(context.value) ? (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children: placeholder }) : children
      }
    );
  }
);
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, children, ...iconProps } = props;
    return (0, import_jsx_runtime36.jsx)(Primitive.span, { "aria-hidden": true, ...iconProps, ref: forwardedRef, children: children || "▼" });
  }
);
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME10 = "SelectPortal";
var SelectPortal = (props) => {
  return (0, import_jsx_runtime36.jsx)(Portal, { asChild: true, ...props });
};
SelectPortal.displayName = PORTAL_NAME10;
var CONTENT_NAME10 = "SelectContent";
var SelectContent = React56.forwardRef(
  (props, forwardedRef) => {
    const context = useSelectContext(CONTENT_NAME10, props.__scopeSelect);
    const [fragment, setFragment] = React56.useState();
    useLayoutEffect2(() => {
      setFragment(new DocumentFragment());
    }, []);
    if (!context.open) {
      const frag = fragment;
      return frag ? ReactDOM4.createPortal(
        (0, import_jsx_runtime36.jsx)(SelectContentProvider, { scope: props.__scopeSelect, children: (0, import_jsx_runtime36.jsx)(Collection3.Slot, { scope: props.__scopeSelect, children: (0, import_jsx_runtime36.jsx)("div", { children: props.children }) }) }),
        frag
      ) : null;
    }
    return (0, import_jsx_runtime36.jsx)(SelectContentImpl, { ...props, ref: forwardedRef });
  }
);
SelectContent.displayName = CONTENT_NAME10;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME10);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var SelectContentImpl = React56.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      position = "item-aligned",
      onCloseAutoFocus,
      onEscapeKeyDown,
      onPointerDownOutside,
      //
      // PopperContent props
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions,
      //
      ...contentProps
    } = props;
    const context = useSelectContext(CONTENT_NAME10, __scopeSelect);
    const [content, setContent] = React56.useState(null);
    const [viewport, setViewport] = React56.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [selectedItem, setSelectedItem] = React56.useState(null);
    const [selectedItemText, setSelectedItemText] = React56.useState(
      null
    );
    const getItems = useCollection3(__scopeSelect);
    const [isPositioned, setIsPositioned] = React56.useState(false);
    const firstValidItemFoundRef = React56.useRef(false);
    React56.useEffect(() => {
      if (content) return hideOthers(content);
    }, [content]);
    useFocusGuards();
    const focusFirst5 = React56.useCallback(
      (candidates) => {
        const [firstItem, ...restItems] = getItems().map((item) => item.ref.current);
        const [lastItem] = restItems.slice(-1);
        const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
        for (const candidate of candidates) {
          if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
          candidate == null ? void 0 : candidate.scrollIntoView({ block: "nearest" });
          if (candidate === firstItem && viewport) viewport.scrollTop = 0;
          if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
          candidate == null ? void 0 : candidate.focus();
          if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
        }
      },
      [getItems, viewport]
    );
    const focusSelectedItem = React56.useCallback(
      () => focusFirst5([selectedItem, content]),
      [focusFirst5, selectedItem, content]
    );
    React56.useEffect(() => {
      if (isPositioned) {
        focusSelectedItem();
      }
    }, [isPositioned, focusSelectedItem]);
    const { onOpenChange, triggerPointerDownPosRef } = context;
    React56.useEffect(() => {
      if (content) {
        let pointerMoveDelta = { x: 0, y: 0 };
        const handlePointerMove = (event) => {
          var _a, _b;
          pointerMoveDelta = {
            x: Math.abs(Math.round(event.pageX) - (((_a = triggerPointerDownPosRef.current) == null ? void 0 : _a.x) ?? 0)),
            y: Math.abs(Math.round(event.pageY) - (((_b = triggerPointerDownPosRef.current) == null ? void 0 : _b.y) ?? 0))
          };
        };
        const handlePointerUp = (event) => {
          if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
            event.preventDefault();
          } else {
            if (!content.contains(event.target)) {
              onOpenChange(false);
            }
          }
          document.removeEventListener("pointermove", handlePointerMove);
          triggerPointerDownPosRef.current = null;
        };
        if (triggerPointerDownPosRef.current !== null) {
          document.addEventListener("pointermove", handlePointerMove);
          document.addEventListener("pointerup", handlePointerUp, { capture: true, once: true });
        }
        return () => {
          document.removeEventListener("pointermove", handlePointerMove);
          document.removeEventListener("pointerup", handlePointerUp, { capture: true });
        };
      }
    }, [content, onOpenChange, triggerPointerDownPosRef]);
    React56.useEffect(() => {
      const close = () => onOpenChange(false);
      window.addEventListener("blur", close);
      window.addEventListener("resize", close);
      return () => {
        window.removeEventListener("blur", close);
        window.removeEventListener("resize", close);
      };
    }, [onOpenChange]);
    const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch((search) => {
      const enabledItems = getItems().filter((item) => !item.disabled);
      const currentItem = enabledItems.find((item) => item.ref.current === document.activeElement);
      const nextItem = findNextItem(enabledItems, search, currentItem);
      if (nextItem) {
        setTimeout(() => nextItem.ref.current.focus());
      }
    });
    const itemRefCallback = React56.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItem(node);
          if (isFirstValidItem) firstValidItemFoundRef.current = true;
        }
      },
      [context.value]
    );
    const handleItemLeave = React56.useCallback(() => content == null ? void 0 : content.focus(), [content]);
    const itemTextRefCallback = React56.useCallback(
      (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
        const isSelectedItem = context.value !== void 0 && context.value === value;
        if (isSelectedItem || isFirstValidItem) {
          setSelectedItemText(node);
        }
      },
      [context.value]
    );
    const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
    const popperContentProps = SelectPosition === SelectPopperPosition ? {
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      avoidCollisions
    } : {};
    return (0, import_jsx_runtime36.jsx)(
      SelectContentProvider,
      {
        scope: __scopeSelect,
        content,
        viewport,
        onViewportChange: setViewport,
        itemRefCallback,
        selectedItem,
        onItemLeave: handleItemLeave,
        itemTextRefCallback,
        focusSelectedItem,
        selectedItemText,
        position,
        isPositioned,
        searchRef,
        children: (0, import_jsx_runtime36.jsx)(Combination_default, { as: Slot, allowPinchZoom: true, children: (0, import_jsx_runtime36.jsx)(
          FocusScope,
          {
            asChild: true,
            trapped: context.open,
            onMountAutoFocus: (event) => {
              event.preventDefault();
            },
            onUnmountAutoFocus: composeEventHandlers(onCloseAutoFocus, (event) => {
              var _a;
              (_a = context.trigger) == null ? void 0 : _a.focus({ preventScroll: true });
              event.preventDefault();
            }),
            children: (0, import_jsx_runtime36.jsx)(
              DismissableLayer,
              {
                asChild: true,
                disableOutsidePointerEvents: true,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside: (event) => event.preventDefault(),
                onDismiss: () => context.onOpenChange(false),
                children: (0, import_jsx_runtime36.jsx)(
                  SelectPosition,
                  {
                    role: "listbox",
                    id: context.contentId,
                    "data-state": context.open ? "open" : "closed",
                    dir: context.dir,
                    onContextMenu: (event) => event.preventDefault(),
                    ...contentProps,
                    ...popperContentProps,
                    onPlaced: () => setIsPositioned(true),
                    ref: composedRefs,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...contentProps.style
                    },
                    onKeyDown: composeEventHandlers(contentProps.onKeyDown, (event) => {
                      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                      if (event.key === "Tab") event.preventDefault();
                      if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
                      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                        const items = getItems().filter((item) => !item.disabled);
                        let candidateNodes = items.map((item) => item.ref.current);
                        if (["ArrowUp", "End"].includes(event.key)) {
                          candidateNodes = candidateNodes.slice().reverse();
                        }
                        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                          const currentElement = event.target;
                          const currentIndex = candidateNodes.indexOf(currentElement);
                          candidateNodes = candidateNodes.slice(currentIndex + 1);
                        }
                        setTimeout(() => focusFirst5(candidateNodes));
                        event.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = React56.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onPlaced, ...popperProps } = props;
  const context = useSelectContext(CONTENT_NAME10, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME10, __scopeSelect);
  const [contentWrapper, setContentWrapper] = React56.useState(null);
  const [content, setContent] = React56.useState(null);
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
  const getItems = useCollection3(__scopeSelect);
  const shouldExpandOnScrollRef = React56.useRef(false);
  const shouldRepositionRef = React56.useRef(true);
  const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
  const position = React56.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = clamp2(left, [
          CONTENT_MARGIN,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(CONTENT_MARGIN, rightEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = clamp2(right, [
          CONTENT_MARGIN,
          Math.max(CONTENT_MARGIN, leftEdge - contentWidth)
        ]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(
          triggerMiddleToBottomEdge,
          selectedItemHalfHeight + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth
        );
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(
          topEdgeToTriggerMiddle,
          contentBorderTopWidth + viewport.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight
        );
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced == null ? void 0 : onPlaced();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [
    getItems,
    context.trigger,
    context.valueNode,
    contentWrapper,
    content,
    viewport,
    selectedItem,
    selectedItemText,
    context.dir,
    onPlaced
  ]);
  useLayoutEffect2(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = React56.useState();
  useLayoutEffect2(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = React56.useCallback(
    (node) => {
      if (node && shouldRepositionRef.current === true) {
        position();
        focusSelectedItem == null ? void 0 : focusSelectedItem();
        shouldRepositionRef.current = false;
      }
    },
    [position, focusSelectedItem]
  );
  return (0, import_jsx_runtime36.jsx)(
    SelectViewportProvider,
    {
      scope: __scopeSelect,
      contentWrapper,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange,
      children: (0, import_jsx_runtime36.jsx)(
        "div",
        {
          ref: setContentWrapper,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: contentZIndex
          },
          children: (0, import_jsx_runtime36.jsx)(
            Primitive.div,
            {
              ...popperProps,
              ref: composedRefs,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...popperProps.style
              }
            }
          )
        }
      )
    }
  );
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = React56.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope5(__scopeSelect);
  return (0, import_jsx_runtime36.jsx)(
    Content3,
    {
      ...popperScope,
      ...popperProps,
      ref: forwardedRef,
      align,
      collisionPadding,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...popperProps.style,
        // re-namespace exposed content custom properties
        ...{
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    }
  );
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME10, {});
var VIEWPORT_NAME2 = "SelectViewport";
var SelectViewport = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, nonce, ...viewportProps } = props;
    const contentContext = useSelectContentContext(VIEWPORT_NAME2, __scopeSelect);
    const viewportContext = useSelectViewportContext(VIEWPORT_NAME2, __scopeSelect);
    const composedRefs = useComposedRefs(forwardedRef, contentContext.onViewportChange);
    const prevScrollTopRef = React56.useRef(0);
    return (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
      (0, import_jsx_runtime36.jsx)(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      (0, import_jsx_runtime36.jsx)(Collection3.Slot, { scope: __scopeSelect, children: (0, import_jsx_runtime36.jsx)(
        Primitive.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...viewportProps,
          ref: composedRefs,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...viewportProps.style
          },
          onScroll: composeEventHandlers(viewportProps.onScroll, (event) => {
            const viewport = event.currentTarget;
            const { contentWrapper, shouldExpandOnScrollRef } = viewportContext;
            if ((shouldExpandOnScrollRef == null ? void 0 : shouldExpandOnScrollRef.current) && contentWrapper) {
              const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
              if (scrolledBy > 0) {
                const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
                const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
                const cssHeight = parseFloat(contentWrapper.style.height);
                const prevHeight = Math.max(cssMinHeight, cssHeight);
                if (prevHeight < availableHeight) {
                  const nextHeight = prevHeight + scrolledBy;
                  const clampedNextHeight = Math.min(availableHeight, nextHeight);
                  const heightDiff = nextHeight - clampedNextHeight;
                  contentWrapper.style.height = clampedNextHeight + "px";
                  if (contentWrapper.style.bottom === "0px") {
                    viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                    contentWrapper.style.justifyContent = "flex-end";
                  }
                }
              }
            }
            prevScrollTopRef.current = viewport.scrollTop;
          })
        }
      ) })
    ] });
  }
);
SelectViewport.displayName = VIEWPORT_NAME2;
var GROUP_NAME5 = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME5);
var SelectGroup = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...groupProps } = props;
    const groupId = useId();
    return (0, import_jsx_runtime36.jsx)(SelectGroupContextProvider, { scope: __scopeSelect, id: groupId, children: (0, import_jsx_runtime36.jsx)(Primitive.div, { role: "group", "aria-labelledby": groupId, ...groupProps, ref: forwardedRef }) });
  }
);
SelectGroup.displayName = GROUP_NAME5;
var LABEL_NAME4 = "SelectLabel";
var SelectLabel = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...labelProps } = props;
    const groupContext = useSelectGroupContext(LABEL_NAME4, __scopeSelect);
    return (0, import_jsx_runtime36.jsx)(Primitive.div, { id: groupContext.id, ...labelProps, ref: forwardedRef });
  }
);
SelectLabel.displayName = LABEL_NAME4;
var ITEM_NAME7 = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME7);
var SelectItem = React56.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSelect,
      value,
      disabled = false,
      textValue: textValueProp,
      ...itemProps
    } = props;
    const context = useSelectContext(ITEM_NAME7, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_NAME7, __scopeSelect);
    const isSelected = context.value === value;
    const [textValue, setTextValue] = React56.useState(textValueProp ?? "");
    const [isFocused, setIsFocused] = React56.useState(false);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => {
        var _a;
        return (_a = contentContext.itemRefCallback) == null ? void 0 : _a.call(contentContext, node, value, disabled);
      }
    );
    const textId = useId();
    const pointerTypeRef = React56.useRef("touch");
    const handleSelect = () => {
      if (!disabled) {
        context.onValueChange(value);
        context.onOpenChange(false);
      }
    };
    if (value === "") {
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    }
    return (0, import_jsx_runtime36.jsx)(
      SelectItemContextProvider,
      {
        scope: __scopeSelect,
        value,
        disabled,
        textId,
        isSelected,
        onItemTextChange: React56.useCallback((node) => {
          setTextValue((prevTextValue) => prevTextValue || ((node == null ? void 0 : node.textContent) ?? "").trim());
        }, []),
        children: (0, import_jsx_runtime36.jsx)(
          Collection3.ItemSlot,
          {
            scope: __scopeSelect,
            value,
            disabled,
            textValue,
            children: (0, import_jsx_runtime36.jsx)(
              Primitive.div,
              {
                role: "option",
                "aria-labelledby": textId,
                "data-highlighted": isFocused ? "" : void 0,
                "aria-selected": isSelected && isFocused,
                "data-state": isSelected ? "checked" : "unchecked",
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                tabIndex: disabled ? void 0 : -1,
                ...itemProps,
                ref: composedRefs,
                onFocus: composeEventHandlers(itemProps.onFocus, () => setIsFocused(true)),
                onBlur: composeEventHandlers(itemProps.onBlur, () => setIsFocused(false)),
                onClick: composeEventHandlers(itemProps.onClick, () => {
                  if (pointerTypeRef.current !== "mouse") handleSelect();
                }),
                onPointerUp: composeEventHandlers(itemProps.onPointerUp, () => {
                  if (pointerTypeRef.current === "mouse") handleSelect();
                }),
                onPointerDown: composeEventHandlers(itemProps.onPointerDown, (event) => {
                  pointerTypeRef.current = event.pointerType;
                }),
                onPointerMove: composeEventHandlers(itemProps.onPointerMove, (event) => {
                  var _a;
                  pointerTypeRef.current = event.pointerType;
                  if (disabled) {
                    (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
                  } else if (pointerTypeRef.current === "mouse") {
                    event.currentTarget.focus({ preventScroll: true });
                  }
                }),
                onPointerLeave: composeEventHandlers(itemProps.onPointerLeave, (event) => {
                  var _a;
                  if (event.currentTarget === document.activeElement) {
                    (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
                  }
                }),
                onKeyDown: composeEventHandlers(itemProps.onKeyDown, (event) => {
                  var _a;
                  const isTypingAhead = ((_a = contentContext.searchRef) == null ? void 0 : _a.current) !== "";
                  if (isTypingAhead && event.key === " ") return;
                  if (SELECTION_KEYS2.includes(event.key)) handleSelect();
                  if (event.key === " ") event.preventDefault();
                })
              }
            )
          }
        )
      }
    );
  }
);
SelectItem.displayName = ITEM_NAME7;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, className, style, ...itemTextProps } = props;
    const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
    const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
    const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
    const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
    const [itemTextNode, setItemTextNode] = React56.useState(null);
    const composedRefs = useComposedRefs(
      forwardedRef,
      (node) => setItemTextNode(node),
      itemContext.onItemTextChange,
      (node) => {
        var _a;
        return (_a = contentContext.itemTextRefCallback) == null ? void 0 : _a.call(contentContext, node, itemContext.value, itemContext.disabled);
      }
    );
    const textContent = itemTextNode == null ? void 0 : itemTextNode.textContent;
    const nativeOption = React56.useMemo(
      () => (0, import_jsx_runtime36.jsx)("option", { value: itemContext.value, disabled: itemContext.disabled, children: textContent }, itemContext.value),
      [itemContext.disabled, itemContext.value, textContent]
    );
    const { onNativeOptionAdd, onNativeOptionRemove } = nativeOptionsContext;
    useLayoutEffect2(() => {
      onNativeOptionAdd(nativeOption);
      return () => onNativeOptionRemove(nativeOption);
    }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
    return (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
      (0, import_jsx_runtime36.jsx)(Primitive.span, { id: itemContext.textId, ...itemTextProps, ref: composedRefs }),
      itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? ReactDOM4.createPortal(itemTextProps.children, context.valueNode) : null
    ] });
  }
);
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME2 = "SelectItemIndicator";
var SelectItemIndicator = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...itemIndicatorProps } = props;
    const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME2, __scopeSelect);
    return itemContext.isSelected ? (0, import_jsx_runtime36.jsx)(Primitive.span, { "aria-hidden": true, ...itemIndicatorProps, ref: forwardedRef }) : null;
  }
);
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME2;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React56.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = React56.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll22 = function() {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      var handleScroll2 = handleScroll22;
      const viewport = contentContext.viewport;
      handleScroll22();
      viewport.addEventListener("scroll", handleScroll22);
      return () => viewport.removeEventListener("scroll", handleScroll22);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? (0, import_jsx_runtime36.jsx)(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React56.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = React56.useState(false);
  const composedRefs = useComposedRefs(forwardedRef, viewportContext.onScrollButtonChange);
  useLayoutEffect2(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll22 = function() {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      var handleScroll2 = handleScroll22;
      const viewport = contentContext.viewport;
      handleScroll22();
      viewport.addEventListener("scroll", handleScroll22);
      return () => viewport.removeEventListener("scroll", handleScroll22);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? (0, import_jsx_runtime36.jsx)(
    SelectScrollButtonImpl,
    {
      ...props,
      ref: composedRefs,
      onAutoScroll: () => {
        const { viewport, selectedItem } = contentContext;
        if (viewport && selectedItem) {
          viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
        }
      }
    }
  ) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React56.forwardRef((props, forwardedRef) => {
  const { __scopeSelect, onAutoScroll, ...scrollIndicatorProps } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = React56.useRef(null);
  const getItems = useCollection3(__scopeSelect);
  const clearAutoScrollTimer = React56.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  React56.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  useLayoutEffect2(() => {
    var _a;
    const activeItem = getItems().find((item) => item.ref.current === document.activeElement);
    (_a = activeItem == null ? void 0 : activeItem.ref.current) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }, [getItems]);
  return (0, import_jsx_runtime36.jsx)(
    Primitive.div,
    {
      "aria-hidden": true,
      ...scrollIndicatorProps,
      ref: forwardedRef,
      style: { flexShrink: 0, ...scrollIndicatorProps.style },
      onPointerDown: composeEventHandlers(scrollIndicatorProps.onPointerDown, () => {
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerMove: composeEventHandlers(scrollIndicatorProps.onPointerMove, () => {
        var _a;
        (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
        if (autoScrollTimerRef.current === null) {
          autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
        }
      }),
      onPointerLeave: composeEventHandlers(scrollIndicatorProps.onPointerLeave, () => {
        clearAutoScrollTimer();
      })
    }
  );
});
var SEPARATOR_NAME4 = "SelectSeparator";
var SelectSeparator = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...separatorProps } = props;
    return (0, import_jsx_runtime36.jsx)(Primitive.div, { "aria-hidden": true, ...separatorProps, ref: forwardedRef });
  }
);
SelectSeparator.displayName = SEPARATOR_NAME4;
var ARROW_NAME8 = "SelectArrow";
var SelectArrow = React56.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSelect, ...arrowProps } = props;
    const popperScope = usePopperScope5(__scopeSelect);
    const context = useSelectContext(ARROW_NAME8, __scopeSelect);
    const contentContext = useSelectContentContext(ARROW_NAME8, __scopeSelect);
    return context.open && contentContext.position === "popper" ? (0, import_jsx_runtime36.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef }) : null;
  }
);
SelectArrow.displayName = ARROW_NAME8;
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
var BubbleSelect = React56.forwardRef(
  (props, forwardedRef) => {
    const { value, ...selectProps } = props;
    const ref = React56.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const prevValue = usePrevious(value);
    React56.useEffect(() => {
      const select = ref.current;
      const selectProto = window.HTMLSelectElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        selectProto,
        "value"
      );
      const setValue = descriptor.set;
      if (prevValue !== value && setValue) {
        const event = new Event("change", { bubbles: true });
        setValue.call(select, value);
        select.dispatchEvent(event);
      }
    }, [prevValue, value]);
    return (0, import_jsx_runtime36.jsx)(VisuallyHidden, { asChild: true, children: (0, import_jsx_runtime36.jsx)("select", { ...selectProps, ref: composedRefs, defaultValue: value }) });
  }
);
BubbleSelect.displayName = "BubbleSelect";
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = useCallbackRef(onSearchChange);
  const searchRef = React56.useRef("");
  const timerRef = React56.useRef(0);
  const handleTypeaheadSearch = React56.useCallback(
    (key) => {
      const search = searchRef.current + key;
      handleSearchChange(search);
      (function updateSearch(value) {
        searchRef.current = value;
        window.clearTimeout(timerRef.current);
        if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
      })(search);
    },
    [handleSearchChange]
  );
  const resetTypeahead = React56.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  React56.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray3(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter((v9) => v9 !== currentItem);
  const nextItem = wrappedItems.find(
    (item) => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase())
  );
  return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray3(array, startIndex) {
  return array.map((_, index2) => array[(startIndex + index2) % array.length]);
}
var Root210 = Select;
var Trigger8 = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal7 = SelectPortal;
var Content28 = SelectContent;
var Viewport2 = SelectViewport;
var Group3 = SelectGroup;
var Label3 = SelectLabel;
var Item3 = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator3 = SelectItemIndicator;
var Separator3 = SelectSeparator;

// node_modules/@radix-ui/themes/dist/esm/components/select.props.js
var r32 = ["1", "2", "3"];
var o48 = { size: { type: "enum", className: "rt-r-size", values: r32, default: "2", responsive: true } };
var a33 = ["classic", "surface", "soft", "ghost"];
var i16 = { variant: { type: "enum", className: "rt-variant", values: a33, default: "surface" }, ...r2, ...r7, placeholder: { type: "string" } };
var n20 = ["solid", "soft"];
var p32 = { variant: { type: "enum", className: "rt-variant", values: n20, default: "solid" }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/select.js
var f14 = e34.createContext({});
var C7 = (o60) => {
  const { children: r44, size: t34 = o48.size.default, ...s23 } = o60;
  return e34.createElement(Root210, { ...s23 }, e34.createElement(f14.Provider, { value: e34.useMemo(() => ({ size: t34 }), [t34]) }, r44));
};
C7.displayName = "Select.Root";
var u7 = e34.forwardRef((o60, r44) => {
  const t34 = e34.useContext(f14), { children: s23, className: p38, color: n23, radius: m18, placeholder: c5, ...S6 } = v({ size: t34 == null ? void 0 : t34.size, ...o60 }, { size: o48.size }, i16, r5);
  return e34.createElement(Trigger8, { asChild: true }, e34.createElement("button", { "data-accent-color": n23, "data-radius": m18, ...S6, ref: r44, className: (0, import_classnames43.default)("rt-reset", "rt-SelectTrigger", p38) }, e34.createElement("span", { className: "rt-SelectTriggerInner" }, e34.createElement(Value, { placeholder: c5 }, s23)), e34.createElement(Icon, { asChild: true }, e34.createElement(i6, { className: "rt-SelectIcon" }))));
});
u7.displayName = "Select.Trigger";
var g6 = e34.forwardRef((o60, r44) => {
  const t34 = e34.useContext(f14), { className: s23, children: p38, color: n23, container: m18, ...c5 } = v({ size: t34 == null ? void 0 : t34.size, ...o60 }, { size: o48.size }, p32), S6 = H(), T7 = n23 || S6.accentColor;
  return e34.createElement(Portal7, { container: m18 }, e34.createElement(I, { asChild: true }, e34.createElement(Content28, { "data-accent-color": T7, sideOffset: 4, ...c5, asChild: false, ref: r44, className: (0, import_classnames43.default)({ "rt-PopperContent": c5.position === "popper" }, "rt-SelectContent", s23) }, e34.createElement(Root7, { type: "auto", className: "rt-ScrollAreaRoot" }, e34.createElement(Viewport2, { asChild: true, className: "rt-SelectViewport" }, e34.createElement(Viewport, { className: "rt-ScrollAreaViewport", style: { overflowY: void 0 } }, p38)), e34.createElement(Scrollbar, { className: "rt-ScrollAreaScrollbar rt-r-size-1", orientation: "vertical" }, e34.createElement(Thumb, { className: "rt-ScrollAreaThumb" }))))));
});
g6.displayName = "Select.Content";
var y5 = e34.forwardRef((o60, r44) => {
  const { className: t34, children: s23, ...p38 } = o60;
  return e34.createElement(Item3, { ...p38, asChild: false, ref: r44, className: (0, import_classnames43.default)("rt-SelectItem", t34) }, e34.createElement(ItemIndicator3, { className: "rt-SelectItemIndicator" }, e34.createElement(t12, { className: "rt-SelectItemIndicatorIcon" })), e34.createElement(ItemText, null, s23));
});
y5.displayName = "Select.Item";
var v7 = e34.forwardRef(({ className: o60, ...r44 }, t34) => e34.createElement(Group3, { ...r44, asChild: false, ref: t34, className: (0, import_classnames43.default)("rt-SelectGroup", o60) }));
v7.displayName = "Select.Group";
var h3 = e34.forwardRef(({ className: o60, ...r44 }, t34) => e34.createElement(Label3, { ...r44, asChild: false, ref: t34, className: (0, import_classnames43.default)("rt-SelectLabel", o60) }));
h3.displayName = "Select.Label";
var I4 = e34.forwardRef(({ className: o60, ...r44 }, t34) => e34.createElement(Separator3, { ...r44, asChild: false, ref: t34, className: (0, import_classnames43.default)("rt-SelectSeparator", o60) }));
I4.displayName = "Select.Separator";

// node_modules/@radix-ui/themes/dist/esm/components/separator.js
var r34 = __toESM(require_react(), 1);
var import_classnames44 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/separator.props.js
var e35 = ["horizontal", "vertical"];
var r33 = ["1", "2", "3", "4"];
var t24 = { orientation: { type: "enum", className: "rt-r-orientation", values: e35, default: "horizontal", responsive: true }, size: { type: "enum", className: "rt-r-size", values: r33, default: "1", responsive: true }, color: { ...r2.color, default: "gray" }, decorative: { type: "boolean", default: true } };

// node_modules/@radix-ui/themes/dist/esm/components/separator.js
var o49 = r34.forwardRef((p38, e43) => {
  const { className: t34, color: a41, decorative: s23, ...m18 } = v(p38, t24, r5);
  return r34.createElement("span", { "data-accent-color": a41, role: s23 ? void 0 : "separator", ...m18, ref: e43, className: (0, import_classnames44.default)("rt-Separator", t34) });
});
o49.displayName = "Separator";

// node_modules/@radix-ui/themes/dist/esm/components/skeleton.js
var o51 = __toESM(require_react(), 1);
var import_classnames45 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/helpers/inert.js
var o50 = __toESM(require_react(), 1);
var r35 = parseFloat(o50.version) >= 19 || "";

// node_modules/@radix-ui/themes/dist/esm/components/skeleton.props.js
var p33 = { loading: { type: "boolean", default: true }, ...t, ...e };

// node_modules/@radix-ui/themes/dist/esm/components/skeleton.js
var r36 = o51.forwardRef((t34, p38) => {
  const { children: e43, className: n23, loading: s23, ...m18 } = v(t34, p33, r5);
  if (!s23) return e43;
  const i22 = o51.isValidElement(e43) ? Slot : "span";
  return o51.createElement(i22, { ref: p38, "aria-hidden": true, className: (0, import_classnames45.default)("rt-Skeleton", n23), "data-inline-skeleton": o51.isValidElement(e43) ? void 0 : true, tabIndex: -1, inert: r35, ...m18 }, e43);
});
r36.displayName = "Skeleton";

// node_modules/@radix-ui/themes/dist/esm/components/slider.js
var e36 = __toESM(require_react(), 1);
var import_classnames46 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-slider/dist/index.mjs
var React57 = __toESM(require_react(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var BACK_KEYS = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
};
var SLIDER_NAME = "Slider";
var [Collection4, useCollection4, createCollectionScope4] = createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [
  createCollectionScope4
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider = React57.forwardRef(
  (props, forwardedRef) => {
    const {
      name,
      min: min2 = 0,
      max: max2 = 100,
      step = 1,
      orientation = "horizontal",
      disabled = false,
      minStepsBetweenThumbs = 0,
      defaultValue = [min2],
      value,
      onValueChange = () => {
      },
      onValueCommit = () => {
      },
      inverted = false,
      form,
      ...sliderProps
    } = props;
    const thumbRefs = React57.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = React57.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = useControllableState({
      prop: value,
      defaultProp: defaultValue,
      onChange: (value2) => {
        var _a;
        const thumbs = [...thumbRefs.current];
        (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
        onValueChange(value2);
      }
    });
    const valuesBeforeSlideStartRef = React57.useRef(values);
    function handleSlideStart(value2) {
      const closestIndex = getClosestValueIndex(values, value2);
      updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
      updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
      const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
      const nextValue = values[valueIndexToChangeRef.current];
      const hasChanged = nextValue !== prevValue;
      if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = { commit: false }) {
      const decimalCount = getDecimalCount(step);
      const snapToStep = roundValue(Math.round((value2 - min2) / step) * step + min2, decimalCount);
      const nextValue = clamp2(snapToStep, [min2, max2]);
      setValues((prevValues = []) => {
        const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
        if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
          valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
          const hasChanged = String(nextValues) !== String(prevValues);
          if (hasChanged && commit) onValueCommit(nextValues);
          return hasChanged ? nextValues : prevValues;
        } else {
          return prevValues;
        }
      });
    }
    return (0, import_jsx_runtime37.jsx)(
      SliderProvider,
      {
        scope: props.__scopeSlider,
        name,
        disabled,
        min: min2,
        max: max2,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: (0, import_jsx_runtime37.jsx)(Collection4.Provider, { scope: props.__scopeSlider, children: (0, import_jsx_runtime37.jsx)(Collection4.Slot, { scope: props.__scopeSlider, children: (0, import_jsx_runtime37.jsx)(
          SliderOrientation,
          {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: forwardedRef,
            onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
              if (!disabled) valuesBeforeSlideStartRef.current = values;
            }),
            min: min2,
            max: max2,
            inverted,
            onSlideStart: disabled ? void 0 : handleSlideStart,
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onSlideEnd: disabled ? void 0 : handleSlideEnd,
            onHomeKeyDown: () => !disabled && updateValues(min2, 0, { commit: true }),
            onEndKeyDown: () => !disabled && updateValues(max2, values.length - 1, { commit: true }),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS2.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex, { commit: true });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Slider.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
});
var SliderHorizontal = React57.forwardRef(
  (props, forwardedRef) => {
    const {
      min: min2,
      max: max2,
      dir,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const [slider, setSlider] = React57.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setSlider(node));
    const rectRef = React57.useRef();
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || slider.getBoundingClientRect();
      const input = [0, rect.width];
      const output = isSlidingFromLeft ? [min2, max2] : [max2, min2];
      const value = linearScale2(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.left);
    }
    return (0, import_jsx_runtime37.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: (0, import_jsx_runtime37.jsx)(
          SliderImpl,
          {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientX);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderVertical = React57.forwardRef(
  (props, forwardedRef) => {
    const {
      min: min2,
      max: max2,
      inverted,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const sliderRef = React57.useRef(null);
    const ref = useComposedRefs(forwardedRef, sliderRef);
    const rectRef = React57.useRef();
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
      const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
      const input = [0, rect.height];
      const output = isSlidingFromBottom ? [max2, min2] : [min2, max2];
      const value = linearScale2(input, output);
      rectRef.current = rect;
      return value(pointerPosition - rect.top);
    }
    return (0, import_jsx_runtime37.jsx)(
      SliderOrientationProvider,
      {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: (0, import_jsx_runtime37.jsx)(
          SliderImpl,
          {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
              ...sliderProps.style,
              ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideStart == null ? void 0 : onSlideStart(value);
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.clientY);
              onSlideMove == null ? void 0 : onSlideMove(value);
            },
            onSlideEnd: () => {
              rectRef.current = void 0;
              onSlideEnd == null ? void 0 : onSlideEnd();
            },
            onStepKeyDown: (event) => {
              const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
              const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          }
        )
      }
    );
  }
);
var SliderImpl = React57.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSlider,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return (0, import_jsx_runtime37.jsx)(
      Primitive.span,
      {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          if (event.key === "Home") {
            onHomeKeyDown(event);
            event.preventDefault();
          } else if (event.key === "End") {
            onEndKeyDown(event);
            event.preventDefault();
          } else if (PAGE_KEYS.concat(ARROW_KEYS2).includes(event.key)) {
            onStepKeyDown(event);
            event.preventDefault();
          }
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
          const target = event.target;
          target.setPointerCapture(event.pointerId);
          event.preventDefault();
          if (context.thumbs.has(target)) {
            target.focus();
          } else {
            onSlideStart(event);
          }
        }),
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
          const target = event.target;
          if (target.hasPointerCapture(event.pointerId)) {
            target.releasePointerCapture(event.pointerId);
            onSlideEnd(event);
          }
        })
      }
    );
  }
);
var TRACK_NAME = "SliderTrack";
var SliderTrack = React57.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return (0, import_jsx_runtime37.jsx)(
      Primitive.span,
      {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
      }
    );
  }
);
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = React57.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = React57.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map(
      (value) => convertValueToPercentage(value, context.min, context.max)
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return (0, import_jsx_runtime37.jsx)(
      Primitive.span,
      {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
          ...props.style,
          [orientation.startEdge]: offsetStart + "%",
          [orientation.endEdge]: offsetEnd + "%"
        }
      }
    );
  }
);
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME2 = "SliderThumb";
var SliderThumb = React57.forwardRef(
  (props, forwardedRef) => {
    const getItems = useCollection4(props.__scopeSlider);
    const [thumb, setThumb] = React57.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const index2 = React57.useMemo(
      () => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1,
      [getItems, thumb]
    );
    return (0, import_jsx_runtime37.jsx)(SliderThumbImpl, { ...props, ref: composedRefs, index: index2 });
  }
);
var SliderThumbImpl = React57.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSlider, index: index2, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME2, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME2, __scopeSlider);
    const [thumb, setThumb] = React57.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size4 = useSize(thumb);
    const value = context.values[index2];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index2, context.values.length);
    const orientationSize = size4 == null ? void 0 : size4[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    React57.useEffect(() => {
      if (thumb) {
        context.thumbs.add(thumb);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs]);
    return (0, import_jsx_runtime37.jsxs)(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
          (0, import_jsx_runtime37.jsx)(Collection4.ItemSlot, { scope: props.__scopeSlider, children: (0, import_jsx_runtime37.jsx)(
            Primitive.span,
            {
              role: "slider",
              "aria-label": props["aria-label"] || label,
              "aria-valuemin": context.min,
              "aria-valuenow": value,
              "aria-valuemax": context.max,
              "aria-orientation": context.orientation,
              "data-orientation": context.orientation,
              "data-disabled": context.disabled ? "" : void 0,
              tabIndex: context.disabled ? void 0 : 0,
              ...thumbProps,
              ref: composedRefs,
              style: value === void 0 ? { display: "none" } : props.style,
              onFocus: composeEventHandlers(props.onFocus, () => {
                context.valueIndexToChangeRef.current = index2;
              })
            }
          ) }),
          isFormControl && (0, import_jsx_runtime37.jsx)(
            BubbleInput3,
            {
              name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
              form: context.form,
              value
            },
            index2
          )
        ]
      }
    );
  }
);
SliderThumb.displayName = THUMB_NAME2;
var BubbleInput3 = (props) => {
  const { value, ...inputProps } = props;
  const ref = React57.useRef(null);
  const prevValue = usePrevious(value);
  React57.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("input", { bubbles: true });
      setValue.call(input, value);
      input.dispatchEvent(event);
    }
  }, [prevValue, value]);
  return (0, import_jsx_runtime37.jsx)("input", { style: { display: "none" }, ...inputProps, ref, defaultValue: value });
};
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
  const nextValues = [...prevValues];
  nextValues[atIndex] = nextValue;
  return nextValues.sort((a41, b6) => a41 - b6);
}
function convertValueToPercentage(value, min2, max2) {
  const maxSteps = max2 - min2;
  const percentPerStep = 100 / maxSteps;
  const percentage = percentPerStep * (value - min2);
  return clamp2(percentage, [0, 100]);
}
function getLabel(index2, totalValues) {
  if (totalValues > 2) {
    return `Value ${index2 + 1} of ${totalValues}`;
  } else if (totalValues === 2) {
    return ["Minimum", "Maximum"][index2];
  } else {
    return void 0;
  }
}
function getClosestValueIndex(values, nextValue) {
  if (values.length === 1) return 0;
  const distances = values.map((value) => Math.abs(value - nextValue));
  const closestDistance = Math.min(...distances);
  return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
  const halfWidth = width / 2;
  const halfPercent = 50;
  const offset4 = linearScale2([0, halfPercent], [0, halfWidth]);
  return (halfWidth - offset4(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
  return values.slice(0, -1).map((value, index2) => values[index2 + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
  if (minStepsBetweenValues > 0) {
    const stepsBetweenValues = getStepsBetweenValues(values);
    const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
    return actualMinStepsBetweenValues >= minStepsBetweenValues;
  }
  return true;
}
function linearScale2(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function getDecimalCount(value) {
  return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
  const rounder = Math.pow(10, decimalCount);
  return Math.round(value * rounder) / rounder;
}
var Root9 = Slider;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb2 = SliderThumb;

// node_modules/@radix-ui/themes/dist/esm/components/slider.props.js
var o52 = ["1", "2", "3"];
var t25 = ["classic", "surface", "soft"];
var a35 = { size: { type: "enum", className: "rt-r-size", values: o52, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t25, default: "surface" }, ...r2, ...o3, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/slider.js
var s20 = e36.forwardRef((i22, a41) => {
  const { className: d10, color: l12, radius: m18, tabIndex: t34, ...r44 } = v(i22, a35, r5);
  return e36.createElement(Root9, { "data-accent-color": l12, "data-radius": m18, ref: a41, ...r44, asChild: false, className: (0, import_classnames46.default)("rt-SliderRoot", d10) }, e36.createElement(Track, { className: "rt-SliderTrack" }, e36.createElement(Range, { className: (0, import_classnames46.default)("rt-SliderRange", { "rt-high-contrast": i22.highContrast }), "data-inverted": r44.inverted ? "" : void 0 })), (r44.value ?? r44.defaultValue ?? []).map((S6, n23) => e36.createElement(Thumb2, { key: n23, className: "rt-SliderThumb", ...t34 !== void 0 ? { tabIndex: t34 } : void 0 })));
});
s20.displayName = "Slider";

// node_modules/@radix-ui/themes/dist/esm/components/strong.js
var o53 = __toESM(require_react(), 1);
var import_classnames47 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/strong.props.js
var p35 = { ...o, ...e6, ...r4 };

// node_modules/@radix-ui/themes/dist/esm/components/strong.js
var r37 = o53.forwardRef((t34, e43) => {
  const { asChild: p38, className: s23, ...n23 } = v(t34, p35);
  return o53.createElement(p38 ? Slot : "strong", { ...n23, ref: e43, className: (0, import_classnames47.default)("rt-Strong", s23) });
});
r37.displayName = "Strong";

// node_modules/@radix-ui/themes/dist/esm/components/switch.js
var t27 = __toESM(require_react(), 1);
var import_classnames48 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-switch/dist/index.mjs
var React58 = __toESM(require_react(), 1);
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = React58.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = React58.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = React58.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked,
      onChange: onCheckedChange
    });
    return (0, import_jsx_runtime38.jsxs)(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      (0, import_jsx_runtime38.jsx)(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState5(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && (0, import_jsx_runtime38.jsx)(
        BubbleInput4,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch.displayName = SWITCH_NAME;
var THUMB_NAME3 = "SwitchThumb";
var SwitchThumb = React58.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME3, __scopeSwitch);
    return (0, import_jsx_runtime38.jsx)(
      Primitive.span,
      {
        "data-state": getState5(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME3;
var BubbleInput4 = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = React58.useRef(null);
  const prevChecked = usePrevious(checked);
  const controlSize = useSize(control);
  React58.useEffect(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", { bubbles });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [prevChecked, checked, bubbles]);
  return (0, import_jsx_runtime38.jsx)(
    "input",
    {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: checked,
      ...inputProps,
      tabIndex: -1,
      ref,
      style: {
        ...props.style,
        ...controlSize,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function getState5(checked) {
  return checked ? "checked" : "unchecked";
}
var Root10 = Switch;
var Thumb3 = SwitchThumb;

// node_modules/@radix-ui/themes/dist/esm/components/switch.props.js
var o54 = ["1", "2", "3"];
var t26 = ["classic", "surface", "soft"];
var a36 = { size: { type: "enum", className: "rt-r-size", values: o54, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t26, default: "surface" }, ...r2, ...o3, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/switch.js
var i18 = t27.forwardRef((o60, p38) => {
  const { className: s23, color: m18, radius: c5, ...a41 } = v(o60, a36, r5);
  return t27.createElement(Root10, { "data-accent-color": m18, "data-radius": c5, ...a41, asChild: false, ref: p38, className: (0, import_classnames48.default)("rt-reset", "rt-SwitchRoot", s23) }, t27.createElement(Thumb3, { className: (0, import_classnames48.default)("rt-SwitchThumb", { "rt-high-contrast": o60.highContrast }) }));
});
i18.displayName = "Switch";

// node_modules/@radix-ui/themes/dist/esm/components/tab-nav.js
var tab_nav_exports = {};
__export(tab_nav_exports, {
  Link: () => v8,
  Root: () => N6
});
var o56 = __toESM(require_react(), 1);
var import_classnames49 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var React59 = __toESM(require_react(), 1);
var import_react_dom3 = __toESM(require_react_dom(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var NAVIGATION_MENU_NAME = "NavigationMenu";
var [Collection5, useCollection5, createCollectionScope5] = createCollection(NAVIGATION_MENU_NAME);
var [FocusGroupCollection, useFocusGroupCollection, createFocusGroupCollectionScope] = createCollection(NAVIGATION_MENU_NAME);
var [createNavigationMenuContext, createNavigationMenuScope] = createContextScope(
  NAVIGATION_MENU_NAME,
  [createCollectionScope5, createFocusGroupCollectionScope]
);
var [NavigationMenuProviderImpl, useNavigationMenuContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var [ViewportContentProvider, useViewportContentContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var NavigationMenu = React59.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeNavigationMenu,
      value: valueProp,
      onValueChange,
      defaultValue,
      delayDuration = 200,
      skipDelayDuration = 300,
      orientation = "horizontal",
      dir,
      ...NavigationMenuProps
    } = props;
    const [navigationMenu, setNavigationMenu] = React59.useState(null);
    const composedRef = useComposedRefs(forwardedRef, (node) => setNavigationMenu(node));
    const direction = useDirection(dir);
    const openTimerRef = React59.useRef(0);
    const closeTimerRef = React59.useRef(0);
    const skipDelayTimerRef = React59.useRef(0);
    const [isOpenDelayed, setIsOpenDelayed] = React59.useState(true);
    const [value = "", setValue] = useControllableState({
      prop: valueProp,
      onChange: (value2) => {
        const isOpen = value2 !== "";
        const hasSkipDelayDuration = skipDelayDuration > 0;
        if (isOpen) {
          window.clearTimeout(skipDelayTimerRef.current);
          if (hasSkipDelayDuration) setIsOpenDelayed(false);
        } else {
          window.clearTimeout(skipDelayTimerRef.current);
          skipDelayTimerRef.current = window.setTimeout(
            () => setIsOpenDelayed(true),
            skipDelayDuration
          );
        }
        onValueChange == null ? void 0 : onValueChange(value2);
      },
      defaultProp: defaultValue
    });
    const startCloseTimer = React59.useCallback(() => {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = window.setTimeout(() => setValue(""), 150);
    }, [setValue]);
    const handleOpen = React59.useCallback(
      (itemValue) => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      },
      [setValue]
    );
    const handleDelayedOpen = React59.useCallback(
      (itemValue) => {
        const isOpenItem = value === itemValue;
        if (isOpenItem) {
          window.clearTimeout(closeTimerRef.current);
        } else {
          openTimerRef.current = window.setTimeout(() => {
            window.clearTimeout(closeTimerRef.current);
            setValue(itemValue);
          }, delayDuration);
        }
      },
      [value, setValue, delayDuration]
    );
    React59.useEffect(() => {
      return () => {
        window.clearTimeout(openTimerRef.current);
        window.clearTimeout(closeTimerRef.current);
        window.clearTimeout(skipDelayTimerRef.current);
      };
    }, []);
    return (0, import_jsx_runtime39.jsx)(
      NavigationMenuProvider,
      {
        scope: __scopeNavigationMenu,
        isRootMenu: true,
        value,
        dir: direction,
        orientation,
        rootNavigationMenu: navigationMenu,
        onTriggerEnter: (itemValue) => {
          window.clearTimeout(openTimerRef.current);
          if (isOpenDelayed) handleDelayedOpen(itemValue);
          else handleOpen(itemValue);
        },
        onTriggerLeave: () => {
          window.clearTimeout(openTimerRef.current);
          startCloseTimer();
        },
        onContentEnter: () => window.clearTimeout(closeTimerRef.current),
        onContentLeave: startCloseTimer,
        onItemSelect: (itemValue) => {
          setValue((prevValue) => prevValue === itemValue ? "" : itemValue);
        },
        onItemDismiss: () => setValue(""),
        children: (0, import_jsx_runtime39.jsx)(
          Primitive.nav,
          {
            "aria-label": "Main",
            "data-orientation": orientation,
            dir: direction,
            ...NavigationMenuProps,
            ref: composedRef
          }
        )
      }
    );
  }
);
NavigationMenu.displayName = NAVIGATION_MENU_NAME;
var SUB_NAME3 = "NavigationMenuSub";
var NavigationMenuSub = React59.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeNavigationMenu,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      ...subProps
    } = props;
    const context = useNavigationMenuContext(SUB_NAME3, __scopeNavigationMenu);
    const [value = "", setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return (0, import_jsx_runtime39.jsx)(
      NavigationMenuProvider,
      {
        scope: __scopeNavigationMenu,
        isRootMenu: false,
        value,
        dir: context.dir,
        orientation,
        rootNavigationMenu: context.rootNavigationMenu,
        onTriggerEnter: (itemValue) => setValue(itemValue),
        onItemSelect: (itemValue) => setValue(itemValue),
        onItemDismiss: () => setValue(""),
        children: (0, import_jsx_runtime39.jsx)(Primitive.div, { "data-orientation": orientation, ...subProps, ref: forwardedRef })
      }
    );
  }
);
NavigationMenuSub.displayName = SUB_NAME3;
var NavigationMenuProvider = (props) => {
  const {
    scope,
    isRootMenu,
    rootNavigationMenu,
    dir,
    orientation,
    children,
    value,
    onItemSelect,
    onItemDismiss,
    onTriggerEnter,
    onTriggerLeave,
    onContentEnter,
    onContentLeave
  } = props;
  const [viewport, setViewport] = React59.useState(null);
  const [viewportContent, setViewportContent] = React59.useState(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = React59.useState(null);
  return (0, import_jsx_runtime39.jsx)(
    NavigationMenuProviderImpl,
    {
      scope,
      isRootMenu,
      rootNavigationMenu,
      value,
      previousValue: usePrevious(value),
      baseId: useId(),
      dir,
      orientation,
      viewport,
      onViewportChange: setViewport,
      indicatorTrack,
      onIndicatorTrackChange: setIndicatorTrack,
      onTriggerEnter: useCallbackRef(onTriggerEnter),
      onTriggerLeave: useCallbackRef(onTriggerLeave),
      onContentEnter: useCallbackRef(onContentEnter),
      onContentLeave: useCallbackRef(onContentLeave),
      onItemSelect: useCallbackRef(onItemSelect),
      onItemDismiss: useCallbackRef(onItemDismiss),
      onViewportContentChange: React59.useCallback((contentValue, contentData) => {
        setViewportContent((prevContent) => {
          prevContent.set(contentValue, contentData);
          return new Map(prevContent);
        });
      }, []),
      onViewportContentRemove: React59.useCallback((contentValue) => {
        setViewportContent((prevContent) => {
          if (!prevContent.has(contentValue)) return prevContent;
          prevContent.delete(contentValue);
          return new Map(prevContent);
        });
      }, []),
      children: (0, import_jsx_runtime39.jsx)(Collection5.Provider, { scope, children: (0, import_jsx_runtime39.jsx)(ViewportContentProvider, { scope, items: viewportContent, children }) })
    }
  );
};
var LIST_NAME = "NavigationMenuList";
var NavigationMenuList = React59.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, ...listProps } = props;
    const context = useNavigationMenuContext(LIST_NAME, __scopeNavigationMenu);
    const list = (0, import_jsx_runtime39.jsx)(Primitive.ul, { "data-orientation": context.orientation, ...listProps, ref: forwardedRef });
    return (0, import_jsx_runtime39.jsx)(Primitive.div, { style: { position: "relative" }, ref: context.onIndicatorTrackChange, children: (0, import_jsx_runtime39.jsx)(Collection5.Slot, { scope: __scopeNavigationMenu, children: context.isRootMenu ? (0, import_jsx_runtime39.jsx)(FocusGroup, { asChild: true, children: list }) : list }) });
  }
);
NavigationMenuList.displayName = LIST_NAME;
var ITEM_NAME8 = "NavigationMenuItem";
var [NavigationMenuItemContextProvider, useNavigationMenuItemContext] = createNavigationMenuContext(ITEM_NAME8);
var NavigationMenuItem = React59.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
    const autoValue = useId();
    const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
    const contentRef = React59.useRef(null);
    const triggerRef = React59.useRef(null);
    const focusProxyRef = React59.useRef(null);
    const restoreContentTabOrderRef = React59.useRef(() => {
    });
    const wasEscapeCloseRef = React59.useRef(false);
    const handleContentEntry = React59.useCallback((side = "start") => {
      if (contentRef.current) {
        restoreContentTabOrderRef.current();
        const candidates = getTabbableCandidates2(contentRef.current);
        if (candidates.length) focusFirst4(side === "start" ? candidates : candidates.reverse());
      }
    }, []);
    const handleContentExit = React59.useCallback(() => {
      if (contentRef.current) {
        const candidates = getTabbableCandidates2(contentRef.current);
        if (candidates.length) restoreContentTabOrderRef.current = removeFromTabOrder(candidates);
      }
    }, []);
    return (0, import_jsx_runtime39.jsx)(
      NavigationMenuItemContextProvider,
      {
        scope: __scopeNavigationMenu,
        value,
        triggerRef,
        contentRef,
        focusProxyRef,
        wasEscapeCloseRef,
        onEntryKeyDown: handleContentEntry,
        onFocusProxyEnter: handleContentEntry,
        onRootContentClose: handleContentExit,
        onContentFocusOutside: handleContentExit,
        children: (0, import_jsx_runtime39.jsx)(Primitive.li, { ...itemProps, ref: forwardedRef })
      }
    );
  }
);
NavigationMenuItem.displayName = ITEM_NAME8;
var TRIGGER_NAME9 = "NavigationMenuTrigger";
var NavigationMenuTrigger = React59.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = useNavigationMenuContext(TRIGGER_NAME9, props.__scopeNavigationMenu);
  const itemContext = useNavigationMenuItemContext(TRIGGER_NAME9, props.__scopeNavigationMenu);
  const ref = React59.useRef(null);
  const composedRefs = useComposedRefs(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = makeTriggerId(context.baseId, itemContext.value);
  const contentId = makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = React59.useRef(false);
  const wasClickCloseRef = React59.useRef(false);
  const open = itemContext.value === context.value;
  return (0, import_jsx_runtime39.jsxs)(import_jsx_runtime39.Fragment, { children: [
    (0, import_jsx_runtime39.jsx)(Collection5.ItemSlot, { scope: __scopeNavigationMenu, value: itemContext.value, children: (0, import_jsx_runtime39.jsx)(FocusGroupItem, { asChild: true, children: (0, import_jsx_runtime39.jsx)(
      Primitive.button,
      {
        id: triggerId,
        disabled,
        "data-disabled": disabled ? "" : void 0,
        "data-state": getOpenState2(open),
        "aria-expanded": open,
        "aria-controls": contentId,
        ...triggerProps,
        ref: composedRefs,
        onPointerEnter: composeEventHandlers(props.onPointerEnter, () => {
          wasClickCloseRef.current = false;
          itemContext.wasEscapeCloseRef.current = false;
        }),
        onPointerMove: composeEventHandlers(
          props.onPointerMove,
          whenMouse2(() => {
            if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
              return;
            context.onTriggerEnter(itemContext.value);
            hasPointerMoveOpenedRef.current = true;
          })
        ),
        onPointerLeave: composeEventHandlers(
          props.onPointerLeave,
          whenMouse2(() => {
            if (disabled) return;
            context.onTriggerLeave();
            hasPointerMoveOpenedRef.current = false;
          })
        ),
        onClick: composeEventHandlers(props.onClick, () => {
          context.onItemSelect(itemContext.value);
          wasClickCloseRef.current = open;
        }),
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
          const entryKey = { horizontal: "ArrowDown", vertical: verticalEntryKey }[context.orientation];
          if (open && event.key === entryKey) {
            itemContext.onEntryKeyDown();
            event.preventDefault();
          }
        })
      }
    ) }) }),
    open && (0, import_jsx_runtime39.jsxs)(import_jsx_runtime39.Fragment, { children: [
      (0, import_jsx_runtime39.jsx)(
        Root,
        {
          "aria-hidden": true,
          tabIndex: 0,
          ref: itemContext.focusProxyRef,
          onFocus: (event) => {
            const content = itemContext.contentRef.current;
            const prevFocusedElement = event.relatedTarget;
            const wasTriggerFocused = prevFocusedElement === ref.current;
            const wasFocusFromContent = content == null ? void 0 : content.contains(prevFocusedElement);
            if (wasTriggerFocused || !wasFocusFromContent) {
              itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
            }
          }
        }
      ),
      context.viewport && (0, import_jsx_runtime39.jsx)("span", { "aria-owns": contentId })
    ] })
  ] });
});
NavigationMenuTrigger.displayName = TRIGGER_NAME9;
var LINK_NAME = "NavigationMenuLink";
var LINK_SELECT = "navigationMenu.linkSelect";
var NavigationMenuLink = React59.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
    return (0, import_jsx_runtime39.jsx)(FocusGroupItem, { asChild: true, children: (0, import_jsx_runtime39.jsx)(
      Primitive.a,
      {
        "data-active": active ? "" : void 0,
        "aria-current": active ? "page" : void 0,
        ...linkProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(
          props.onClick,
          (event) => {
            const target = event.target;
            const linkSelectEvent = new CustomEvent(LINK_SELECT, {
              bubbles: true,
              cancelable: true
            });
            target.addEventListener(LINK_SELECT, (event2) => onSelect == null ? void 0 : onSelect(event2), { once: true });
            dispatchDiscreteCustomEvent(target, linkSelectEvent);
            if (!linkSelectEvent.defaultPrevented && !event.metaKey) {
              const rootContentDismissEvent = new CustomEvent(ROOT_CONTENT_DISMISS, {
                bubbles: true,
                cancelable: true
              });
              dispatchDiscreteCustomEvent(target, rootContentDismissEvent);
            }
          },
          { checkForDefaultPrevented: false }
        )
      }
    ) });
  }
);
NavigationMenuLink.displayName = LINK_NAME;
var INDICATOR_NAME6 = "NavigationMenuIndicator";
var NavigationMenuIndicator = React59.forwardRef((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = useNavigationMenuContext(INDICATOR_NAME6, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? import_react_dom3.default.createPortal(
    (0, import_jsx_runtime39.jsx)(Presence, { present: forceMount || isVisible, children: (0, import_jsx_runtime39.jsx)(NavigationMenuIndicatorImpl, { ...indicatorProps, ref: forwardedRef }) }),
    context.indicatorTrack
  ) : null;
});
NavigationMenuIndicator.displayName = INDICATOR_NAME6;
var NavigationMenuIndicatorImpl = React59.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = useNavigationMenuContext(INDICATOR_NAME6, __scopeNavigationMenu);
  const getItems = useCollection5(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = React59.useState(
    null
  );
  const [position, setPosition] = React59.useState(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  React59.useEffect(() => {
    var _a;
    const items = getItems();
    const triggerNode = (_a = items.find((item) => item.value === context.value)) == null ? void 0 : _a.ref.current;
    if (triggerNode) setActiveTrigger(triggerNode);
  }, [getItems, context.value]);
  const handlePositionChange = () => {
    if (activeTrigger) {
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
    }
  };
  useResizeObserver2(activeTrigger, handlePositionChange);
  useResizeObserver2(context.indicatorTrack, handlePositionChange);
  return position ? (0, import_jsx_runtime39.jsx)(
    Primitive.div,
    {
      "aria-hidden": true,
      "data-state": isVisible ? "visible" : "hidden",
      "data-orientation": context.orientation,
      ...indicatorProps,
      ref: forwardedRef,
      style: {
        position: "absolute",
        ...isHorizontal ? {
          left: 0,
          width: position.size + "px",
          transform: `translateX(${position.offset}px)`
        } : {
          top: 0,
          height: position.size + "px",
          transform: `translateY(${position.offset}px)`
        },
        ...indicatorProps.style
      }
    }
  ) : null;
});
var CONTENT_NAME11 = "NavigationMenuContent";
var NavigationMenuContent = React59.forwardRef((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = useNavigationMenuContext(CONTENT_NAME11, props.__scopeNavigationMenu);
  const itemContext = useNavigationMenuItemContext(CONTENT_NAME11, props.__scopeNavigationMenu);
  const composedRefs = useComposedRefs(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? (0, import_jsx_runtime39.jsx)(Presence, { present: forceMount || open, children: (0, import_jsx_runtime39.jsx)(
    NavigationMenuContentImpl,
    {
      "data-state": getOpenState2(open),
      ...commonProps,
      ref: composedRefs,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
      onPointerLeave: composeEventHandlers(
        props.onPointerLeave,
        whenMouse2(context.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !open && context.isRootMenu ? "none" : void 0,
        ...commonProps.style
      }
    }
  ) }) : (0, import_jsx_runtime39.jsx)(ViewportContentMounter, { forceMount, ...commonProps, ref: composedRefs });
});
NavigationMenuContent.displayName = CONTENT_NAME11;
var ViewportContentMounter = React59.forwardRef((props, forwardedRef) => {
  const context = useNavigationMenuContext(CONTENT_NAME11, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  useLayoutEffect2(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [props, forwardedRef, onViewportContentChange]);
  useLayoutEffect2(() => {
    return () => onViewportContentRemove(props.value);
  }, [props.value, onViewportContentRemove]);
  return null;
});
var ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var NavigationMenuContentImpl = React59.forwardRef((props, forwardedRef) => {
  const {
    __scopeNavigationMenu,
    value,
    triggerRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onRootContentClose,
    onContentFocusOutside,
    ...contentProps
  } = props;
  const context = useNavigationMenuContext(CONTENT_NAME11, __scopeNavigationMenu);
  const ref = React59.useRef(null);
  const composedRefs = useComposedRefs(ref, forwardedRef);
  const triggerId = makeTriggerId(context.baseId, value);
  const contentId = makeContentId(context.baseId, value);
  const getItems = useCollection5(__scopeNavigationMenu);
  const prevMotionAttributeRef = React59.useRef(null);
  const { onItemDismiss } = context;
  React59.useEffect(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _a;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement)) (_a = triggerRef.current) == null ? void 0 : _a.focus();
      };
      content.addEventListener(ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener(ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [context.isRootMenu, props.value, triggerRef, onItemDismiss, onRootContentClose]);
  const motionAttribute = React59.useMemo(() => {
    const items = getItems();
    const values = items.map((item) => item.value);
    if (context.dir === "rtl") values.reverse();
    const index2 = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected) return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index2 !== prevIndex) {
        if (isSelected && prevIndex !== -1) return index2 > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index2 !== -1) return index2 > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [context.previousValue, context.value, context.dir, getItems, value]);
  return (0, import_jsx_runtime39.jsx)(FocusGroup, { asChild: true, children: (0, import_jsx_runtime39.jsx)(
    DismissableLayer,
    {
      id: contentId,
      "aria-labelledby": triggerId,
      "data-motion": motionAttribute,
      "data-orientation": context.orientation,
      ...contentProps,
      ref: composedRefs,
      disableOutsidePointerEvents: false,
      onDismiss: () => {
        var _a;
        const rootContentDismissEvent = new Event(ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        (_a = ref.current) == null ? void 0 : _a.dispatchEvent(rootContentDismissEvent);
      },
      onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => {
        var _a;
        onContentFocusOutside();
        const target = event.target;
        if ((_a = context.rootNavigationMenu) == null ? void 0 : _a.contains(target)) event.preventDefault();
      }),
      onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
        var _a;
        const target = event.target;
        const isTrigger = getItems().some((item) => {
          var _a2;
          return (_a2 = item.ref.current) == null ? void 0 : _a2.contains(target);
        });
        const isRootViewport = context.isRootMenu && ((_a = context.viewport) == null ? void 0 : _a.contains(target));
        if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
      }),
      onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
        var _a;
        const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
        const isTabKey = event.key === "Tab" && !isMetaKey;
        if (isTabKey) {
          const candidates = getTabbableCandidates2(event.currentTarget);
          const focusedElement = document.activeElement;
          const index2 = candidates.findIndex((candidate) => candidate === focusedElement);
          const isMovingBackwards = event.shiftKey;
          const nextCandidates = isMovingBackwards ? candidates.slice(0, index2).reverse() : candidates.slice(index2 + 1, candidates.length);
          if (focusFirst4(nextCandidates)) {
            event.preventDefault();
          } else {
            (_a = focusProxyRef.current) == null ? void 0 : _a.focus();
          }
        }
      }),
      onEscapeKeyDown: composeEventHandlers(props.onEscapeKeyDown, (event) => {
        wasEscapeCloseRef.current = true;
      })
    }
  ) });
});
var VIEWPORT_NAME3 = "NavigationMenuViewport";
var NavigationMenuViewport = React59.forwardRef((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = useNavigationMenuContext(VIEWPORT_NAME3, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return (0, import_jsx_runtime39.jsx)(Presence, { present: forceMount || open, children: (0, import_jsx_runtime39.jsx)(NavigationMenuViewportImpl, { ...viewportProps, ref: forwardedRef }) });
});
NavigationMenuViewport.displayName = VIEWPORT_NAME3;
var NavigationMenuViewportImpl = React59.forwardRef((props, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props;
  const context = useNavigationMenuContext(VIEWPORT_NAME3, __scopeNavigationMenu);
  const composedRefs = useComposedRefs(forwardedRef, context.onViewportChange);
  const viewportContentContext = useViewportContentContext(
    CONTENT_NAME11,
    props.__scopeNavigationMenu
  );
  const [size4, setSize] = React59.useState(null);
  const [content, setContent] = React59.useState(null);
  const viewportWidth = size4 ? (size4 == null ? void 0 : size4.width) + "px" : void 0;
  const viewportHeight = size4 ? (size4 == null ? void 0 : size4.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content) setSize({ width: content.offsetWidth, height: content.offsetHeight });
  };
  useResizeObserver2(content, handleSizeChange);
  return (0, import_jsx_runtime39.jsx)(
    Primitive.div,
    {
      "data-state": getOpenState2(open),
      "data-orientation": context.orientation,
      ...viewportImplProps,
      ref: composedRefs,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !open && context.isRootMenu ? "none" : void 0,
        ["--radix-navigation-menu-viewport-width"]: viewportWidth,
        ["--radix-navigation-menu-viewport-height"]: viewportHeight,
        ...viewportImplProps.style
      },
      onPointerEnter: composeEventHandlers(props.onPointerEnter, context.onContentEnter),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, whenMouse2(context.onContentLeave)),
      children: Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props2 }]) => {
        const isActive = activeContentValue === value;
        return (0, import_jsx_runtime39.jsx)(Presence, { present: forceMount || isActive, children: (0, import_jsx_runtime39.jsx)(
          NavigationMenuContentImpl,
          {
            ...props2,
            ref: composeRefs(ref, (node) => {
              if (isActive && node) setContent(node);
            })
          }
        ) }, value);
      })
    }
  );
});
var FOCUS_GROUP_NAME = "FocusGroup";
var FocusGroup = React59.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, ...groupProps } = props;
    const context = useNavigationMenuContext(FOCUS_GROUP_NAME, __scopeNavigationMenu);
    return (0, import_jsx_runtime39.jsx)(FocusGroupCollection.Provider, { scope: __scopeNavigationMenu, children: (0, import_jsx_runtime39.jsx)(FocusGroupCollection.Slot, { scope: __scopeNavigationMenu, children: (0, import_jsx_runtime39.jsx)(Primitive.div, { dir: context.dir, ...groupProps, ref: forwardedRef }) }) });
  }
);
var ARROW_KEYS3 = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
var FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var FocusGroupItem = React59.forwardRef(
  (props, forwardedRef) => {
    const { __scopeNavigationMenu, ...groupProps } = props;
    const getItems = useFocusGroupCollection(__scopeNavigationMenu);
    const context = useNavigationMenuContext(FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
    return (0, import_jsx_runtime39.jsx)(FocusGroupCollection.ItemSlot, { scope: __scopeNavigationMenu, children: (0, import_jsx_runtime39.jsx)(
      Primitive.button,
      {
        ...groupProps,
        ref: forwardedRef,
        onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
          const isFocusNavigationKey = ["Home", "End", ...ARROW_KEYS3].includes(event.key);
          if (isFocusNavigationKey) {
            let candidateNodes = getItems().map((item) => item.ref.current);
            const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
            const prevKeys = [prevItemKey, "ArrowUp", "End"];
            if (prevKeys.includes(event.key)) candidateNodes.reverse();
            if (ARROW_KEYS3.includes(event.key)) {
              const currentIndex = candidateNodes.indexOf(event.currentTarget);
              candidateNodes = candidateNodes.slice(currentIndex + 1);
            }
            setTimeout(() => focusFirst4(candidateNodes));
            event.preventDefault();
          }
        })
      }
    ) });
  }
);
function getTabbableCandidates2(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}
function focusFirst4(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement) return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function useResizeObserver2(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
function getOpenState2(open) {
  return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function whenMouse2(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root211 = NavigationMenu;
var List = NavigationMenuList;
var Item4 = NavigationMenuItem;
var Link = NavigationMenuLink;

// node_modules/@radix-ui/themes/dist/esm/components/base-tab-list.props.js
var r39 = ["1", "2"];
var t28 = ["nowrap", "wrap", "wrap-reverse"];
var o55 = ["start", "center", "end"];
var p36 = { size: { type: "enum", className: "rt-r-size", values: r39, default: "2", responsive: true }, wrap: { type: "enum", className: "rt-r-fw", values: t28, responsive: true }, justify: { type: "enum", className: "rt-r-jc", values: o55, responsive: true }, ...r2, ...o3 };

// node_modules/@radix-ui/themes/dist/esm/components/tab-nav.props.js
var e37 = { ...o, active: { type: "boolean", default: false } };

// node_modules/@radix-ui/themes/dist/esm/components/tab-nav.js
var N6 = o56.forwardRef((t34, r44) => {
  const { children: a41, className: s23, color: n23, ...p38 } = v(t34, p36, r5);
  return o56.createElement(Root211, { className: "rt-TabNavRoot", "data-accent-color": n23, ...p38, asChild: false, ref: r44 }, o56.createElement(List, { className: (0, import_classnames49.default)("rt-reset", "rt-BaseTabList", "rt-TabNavList", s23) }, a41));
});
N6.displayName = "TabNav.Root";
var v8 = o56.forwardRef((t34, r44) => {
  const { asChild: a41, children: s23, className: n23, ...p38 } = t34;
  return o56.createElement(Item4, { className: "rt-TabNavItem" }, o56.createElement(Link, { ...p38, ref: r44, className: (0, import_classnames49.default)("rt-reset", "rt-BaseTabListTrigger", "rt-TabNavLink", n23), onSelect: void 0, asChild: a41 }, d3({ asChild: a41, children: s23 }, (i22) => o56.createElement(o56.Fragment, null, o56.createElement("span", { className: "rt-BaseTabListTriggerInner rt-TabNavLinkInner" }, i22), o56.createElement("span", { className: "rt-BaseTabListTriggerInnerHidden rt-TabNavLinkInnerHidden" }, i22)))));
});
v8.displayName = "TabNav.Link";

// node_modules/@radix-ui/themes/dist/esm/components/table.js
var table_exports = {};
__export(table_exports, {
  Body: () => b4,
  Cell: () => T6,
  ColumnHeaderCell: () => f16,
  Header: () => d8,
  Root: () => m16,
  Row: () => P5,
  RowHeaderCell: () => R5
});
var e38 = __toESM(require_react(), 1);
var import_classnames50 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/table.props.js
var r40 = ["1", "2", "3"];
var a37 = ["surface", "ghost"];
var o57 = ["auto", "fixed"];
var n22 = { size: { type: "enum", className: "rt-r-size", values: r40, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: a37, default: "ghost" }, layout: { type: "enum", className: "rt-r-tl", values: o57, responsive: true } };
var i19 = ["start", "center", "end", "baseline"];
var u8 = { align: { type: "enum", className: "rt-r-va", values: i19, parseValue: l11, responsive: true } };
function l11(e43) {
  return { baseline: "baseline", start: "top", center: "middle", end: "bottom" }[e43];
}
var p37 = ["start", "center", "end"];
var f15 = { justify: { type: "enum", className: "rt-r-ta", values: p37, parseValue: c3, responsive: true }, ...t, ...p7 };
function c3(e43) {
  return { start: "left", center: "center", end: "right" }[e43];
}

// node_modules/@radix-ui/themes/dist/esm/components/table.js
var m16 = e38.forwardRef((o60, l12) => {
  const { layout: a41, ...r44 } = n22, { className: C9, children: c5, layout: y7, ...i22 } = v(o60, r44, r5), w3 = g({ value: y7, className: n22.layout.className, propValues: n22.layout.values });
  return e38.createElement("div", { ref: l12, className: (0, import_classnames50.default)("rt-TableRoot", C9), ...i22 }, e38.createElement(c2, null, e38.createElement("table", { className: (0, import_classnames50.default)("rt-TableRootTable", w3) }, c5)));
});
m16.displayName = "Table.Root";
var d8 = e38.forwardRef(({ className: o60, ...l12 }, a41) => e38.createElement("thead", { ...l12, ref: a41, className: (0, import_classnames50.default)("rt-TableHeader", o60) }));
d8.displayName = "Table.Header";
var b4 = e38.forwardRef(({ className: o60, ...l12 }, a41) => e38.createElement("tbody", { ...l12, ref: a41, className: (0, import_classnames50.default)("rt-TableBody", o60) }));
b4.displayName = "Table.Body";
var P5 = e38.forwardRef((o60, l12) => {
  const { className: a41, ...r44 } = v(o60, u8);
  return e38.createElement("tr", { ...r44, ref: l12, className: (0, import_classnames50.default)("rt-TableRow", a41) });
});
P5.displayName = "Table.Row";
var T6 = e38.forwardRef((o60, l12) => {
  const { className: a41, ...r44 } = v(o60, f15);
  return e38.createElement("td", { className: (0, import_classnames50.default)("rt-TableCell", a41), ref: l12, ...r44 });
});
T6.displayName = "Table.Cell";
var f16 = e38.forwardRef((o60, l12) => {
  const { className: a41, ...r44 } = v(o60, f15);
  return e38.createElement("th", { className: (0, import_classnames50.default)("rt-TableCell", "rt-TableColumnHeaderCell", a41), scope: "col", ref: l12, ...r44 });
});
f16.displayName = "Table.ColumnHeaderCell";
var R5 = e38.forwardRef((o60, l12) => {
  const { className: a41, ...r44 } = v(o60, f15);
  return e38.createElement("th", { className: (0, import_classnames50.default)("rt-TableCell", "rt-TableRowHeaderCell", a41), scope: "row", ref: l12, ...r44 });
});
R5.displayName = "Table.RowHeaderCell";

// node_modules/@radix-ui/themes/dist/esm/components/tabs.js
var tabs_exports = {};
__export(tabs_exports, {
  Content: () => f17,
  List: () => b5,
  Root: () => m17,
  Trigger: () => P6
});
var s22 = __toESM(require_react(), 1);
var import_classnames51 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var React60 = __toESM(require_react(), 1);
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope4 = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = React60.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue
    });
    return (0, import_jsx_runtime40.jsx)(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: (0, import_jsx_runtime40.jsx)(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = React60.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope4(__scopeTabs);
    return (0, import_jsx_runtime40.jsx)(
      Root6,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: (0, import_jsx_runtime40.jsx)(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME10 = "TabsTrigger";
var TabsTrigger = React60.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME10, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope4(__scopeTabs);
    const triggerId = makeTriggerId2(context.baseId, value);
    const contentId = makeContentId2(context.baseId, value);
    const isSelected = value === context.value;
    return (0, import_jsx_runtime40.jsx)(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: (0, import_jsx_runtime40.jsx)(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger.displayName = TRIGGER_NAME10;
var CONTENT_NAME12 = "TabsContent";
var TabsContent = React60.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME12, __scopeTabs);
    const triggerId = makeTriggerId2(context.baseId, value);
    const contentId = makeContentId2(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = React60.useRef(isSelected);
    React60.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return (0, import_jsx_runtime40.jsx)(Presence, { present: forceMount || isSelected, children: ({ present }) => (0, import_jsx_runtime40.jsx)(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent.displayName = CONTENT_NAME12;
function makeTriggerId2(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId2(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root212 = Tabs;
var List2 = TabsList;
var Trigger9 = TabsTrigger;
var Content4 = TabsContent;

// node_modules/@radix-ui/themes/dist/esm/components/tabs.props.js
var s21 = { ...o };
var t30 = { ...o };

// node_modules/@radix-ui/themes/dist/esm/components/tabs.js
var m17 = s22.forwardRef((t34, o60) => {
  const { className: r44, ...e43 } = v(t34, r5);
  return s22.createElement(Root212, { ...e43, ref: o60, className: (0, import_classnames51.default)("rt-TabsRoot", r44) });
});
m17.displayName = "Tabs.Root";
var b5 = s22.forwardRef((t34, o60) => {
  const { className: r44, color: e43, ...n23 } = v(t34, p36, r5);
  return s22.createElement(List2, { "data-accent-color": e43, ...n23, asChild: false, ref: o60, className: (0, import_classnames51.default)("rt-BaseTabList", "rt-TabsList", r44) });
});
b5.displayName = "Tabs.List";
var P6 = s22.forwardRef((t34, o60) => {
  const { className: r44, children: e43, ...n23 } = t34;
  return s22.createElement(Trigger9, { ...n23, asChild: false, ref: o60, className: (0, import_classnames51.default)("rt-reset", "rt-BaseTabListTrigger", "rt-TabsTrigger", r44) }, s22.createElement("span", { className: "rt-BaseTabListTriggerInner rt-TabsTriggerInner" }, e43), s22.createElement("span", { className: "rt-BaseTabListTriggerInnerHidden rt-TabsTriggerInnerHidden" }, e43));
});
P6.displayName = "Tabs.Trigger";
var f17 = s22.forwardRef((t34, o60) => {
  const { className: r44, ...e43 } = v(t34, r5);
  return s22.createElement(Content4, { ...e43, ref: o60, className: (0, import_classnames51.default)("rt-TabsContent", r44) });
});
f17.displayName = "Tabs.Content";

// node_modules/@radix-ui/themes/dist/esm/components/text-area.js
var e39 = __toESM(require_react(), 1);
var import_classnames52 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/text-area.props.js
var r41 = ["1", "2", "3"];
var t31 = ["classic", "surface", "soft"];
var o58 = ["none", "vertical", "horizontal", "both"];
var a39 = { size: { type: "enum", className: "rt-r-size", values: r41, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t31, default: "surface" }, resize: { type: "enum", className: "rt-r-resize", values: o58, responsive: true }, ...r2, ...r7 };

// node_modules/@radix-ui/themes/dist/esm/components/text-area.js
var r42 = e39.forwardRef((t34, o60) => {
  const { className: p38, color: a41, radius: s23, style: m18, ...n23 } = v(t34, a39, r5);
  return e39.createElement("div", { "data-accent-color": a41, "data-radius": s23, className: (0, import_classnames52.default)("rt-TextAreaRoot", p38), style: m18 }, e39.createElement("textarea", { className: "rt-reset rt-TextAreaInput", ref: o60, ...n23 }));
});
r42.displayName = "TextArea";

// node_modules/@radix-ui/themes/dist/esm/components/text-field.js
var text_field_exports = {};
__export(text_field_exports, {
  Root: () => u9,
  Slot: () => c4
});
var t33 = __toESM(require_react(), 1);
var import_classnames53 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/text-field.props.js
var r43 = ["1", "2", "3"];
var t32 = ["classic", "surface", "soft"];
var f18 = { size: { type: "enum", className: "rt-r-size", values: r43, default: "2", responsive: true }, variant: { type: "enum", className: "rt-variant", values: t32, default: "surface" }, ...r2, ...r7 };
var a40 = ["left", "right"];
var i21 = { side: { type: "enum", values: a40 }, ...r2, gap: u2.gap, px: p7.px, pl: p7.pl, pr: p7.pr };

// node_modules/@radix-ui/themes/dist/esm/components/text-field.js
var u9 = t33.forwardRef((r44, s23) => {
  const e43 = t33.useRef(null), { children: l12, className: i22, color: p38, radius: f19, style: x6, ...P7 } = v(r44, f18, r5);
  return t33.createElement("div", { "data-accent-color": p38, "data-radius": f19, style: x6, className: (0, import_classnames53.default)("rt-TextFieldRoot", i22), onPointerDown: (T7) => {
    const n23 = T7.target;
    if (n23.closest("input, button, a")) return;
    const o60 = e43.current;
    if (!o60) return;
    const a41 = n23.closest(`
            .rt-TextFieldSlot[data-side='right'],
            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])
          `) ? o60.value.length : 0;
    requestAnimationFrame(() => {
      try {
        o60.setSelectionRange(a41, a41);
      } catch {
      }
      o60.focus();
    });
  } }, t33.createElement("input", { spellCheck: "false", ...P7, ref: composeRefs(e43, s23), className: "rt-reset rt-TextFieldInput" }), l12);
});
u9.displayName = "TextField.Root";
var c4 = t33.forwardRef((r44, s23) => {
  const { className: e43, color: l12, side: i22, ...p38 } = v(r44, i21);
  return t33.createElement("div", { "data-accent-color": l12, "data-side": i22, ...p38, ref: s23, className: (0, import_classnames53.default)("rt-TextFieldSlot", e43) });
});
c4.displayName = "TextField.Slot";

// node_modules/@radix-ui/themes/dist/esm/components/theme-panel.js
var e40 = __toESM(require_react(), 1);
var N7 = e40.forwardRef(({ defaultOpen: n23 = true, ...a41 }, l12) => {
  const [c5, h4] = e40.useState(n23);
  return e40.createElement(z, { ...a41, ref: l12, open: c5, onOpenChange: h4 });
});
N7.displayName = "ThemePanel";
var z = e40.forwardRef((n23, a41) => {
  const { open: l12, onOpenChange: c5, onAppearanceChange: h4, ...v9 } = n23, G5 = H(), { appearance: d10, onAppearanceChange: B4, accentColor: g7, onAccentColorChange: $, grayColor: f19, onGrayColorChange: F, panelBackground: T7, onPanelBackgroundChange: O2, radius: w3, onRadiusChange: D3, scaling: x6, onScalingChange: j2 } = G5, E7 = h4 !== void 0, K2 = useCallbackRef(h4), k4 = e40.useCallback((t34) => {
    const o60 = a92();
    if (d10 !== "inherit") {
      B4(t34);
      return;
    }
    E7 ? K2(t34) : (H3(t34), l92(t34)), o60();
  }, [d10, B4, E7, K2]), P7 = a3(g7), S6 = f19 === "auto" ? P7 : f19, [W2, M] = e40.useState("idle");
  async function U() {
    const t34 = { appearance: d10 === s3.appearance.default ? void 0 : d10, accentColor: g7 === s3.accentColor.default ? void 0 : g7, grayColor: f19 === s3.grayColor.default ? void 0 : f19, panelBackground: T7 === s3.panelBackground.default ? void 0 : T7, radius: w3 === s3.radius.default ? void 0 : w3, scaling: x6 === s3.scaling.default ? void 0 : x6 }, o60 = Object.keys(t34).filter((i22) => t34[i22] !== void 0).map((i22) => `${i22}="${t34[i22]}"`).join(" "), m18 = o60 ? `<Theme ${o60}>` : "<Theme>";
    M("copying"), await navigator.clipboard.writeText(m18), M("copied"), setTimeout(() => M("idle"), 2e3);
  }
  const [Z, H3] = e40.useState(d10 === "inherit" ? null : d10), b6 = `
      [contenteditable],
      [role="combobox"],
      [role="listbox"],
      [role="menu"],
      input:not([type="radio"], [type="checkbox"]),
      select,
      textarea
    `;
  return e40.useEffect(() => {
    function t34(o60) {
      var _a, _b;
      const m18 = o60.altKey || o60.ctrlKey || o60.shiftKey || o60.metaKey, i22 = (_a = document.activeElement) == null ? void 0 : _a.closest(b6);
      ((_b = o60.key) == null ? void 0 : _b.toUpperCase()) === "T" && !m18 && !i22 && c5(!l12);
    }
    return document.addEventListener("keydown", t34), () => document.removeEventListener("keydown", t34);
  }, [c5, l12, b6]), e40.useEffect(() => {
    function t34(o60) {
      var _a, _b;
      const m18 = o60.altKey || o60.ctrlKey || o60.shiftKey || o60.metaKey, i22 = (_a = document.activeElement) == null ? void 0 : _a.closest(b6);
      ((_b = o60.key) == null ? void 0 : _b.toUpperCase()) === "D" && !m18 && !i22 && k4(Z === "light" ? "dark" : "light");
    }
    return document.addEventListener("keydown", t34), () => document.removeEventListener("keydown", t34);
  }, [k4, Z, b6]), e40.useEffect(() => {
    const t34 = document.documentElement, o60 = document.body;
    function m18() {
      const y7 = t34.classList.contains("dark") || t34.classList.contains("dark-theme") || o60.classList.contains("dark") || o60.classList.contains("dark-theme");
      H3(d10 === "inherit" ? y7 ? "dark" : "light" : d10);
    }
    const i22 = new MutationObserver(function(y7) {
      y7.forEach(function(X2) {
        X2.attributeName === "class" && m18();
      });
    });
    return m18(), d10 === "inherit" && (i22.observe(t34, { attributes: true }), i22.observe(o60, { attributes: true })), () => i22.disconnect();
  }, [d10]), e40.createElement(I, { asChild: true, radius: "medium", scaling: "100%" }, e40.createElement(p12, { direction: "column", position: "fixed", top: "0", right: "0", mr: "4", mt: "4", inert: l12 ? void 0 : r35, ...v9, ref: a41, style: { zIndex: 9999, overflow: "hidden", maxHeight: "calc(100vh - var(--space-4) - var(--space-4))", borderRadius: "var(--radius-4)", backgroundColor: "var(--color-panel-solid)", transformOrigin: "top center", transitionProperty: "transform, box-shadow", transitionDuration: "200ms", transitionTimingFunction: l12 ? "ease-out" : "ease-in", transform: l12 ? "none" : "translateX(105%)", boxShadow: l12 ? "var(--shadow-5)" : "var(--shadow-2)", ...n23.style } }, e40.createElement(c2, null, e40.createElement(p9, { flexGrow: "1", p: "5", position: "relative" }, e40.createElement(p9, { position: "absolute", top: "0", right: "0", m: "2" }, e40.createElement(e41, { content: "Press T to show/hide the Theme Panel", side: "bottom", sideOffset: 6 }, e40.createElement(r27, { asChild: true, size: "3", tabIndex: 0, className: "rt-ThemePanelShortcut" }, e40.createElement("button", { onClick: () => c5(!l12) }, "T")))), e40.createElement(r6, { size: "5", trim: "both", as: "h3", mb: "5" }, "Theme"), e40.createElement(p, { id: "accent-color-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Accent color"), e40.createElement(o20, { columns: "10", gap: "2", mt: "3", role: "group", "aria-labelledby": "accent-color-title" }, s3.accentColor.values.map((t34) => e40.createElement("label", { key: t34, className: "rt-ThemePanelSwatch", style: { backgroundColor: `var(--${t34}-9)` } }, e40.createElement(e41, { content: `${C8(t34)}${g7 === "gray" && S6 !== "gray" ? ` (${C8(S6)})` : ""}` }, e40.createElement("input", { className: "rt-ThemePanelSwatchInput", type: "radio", name: "accentColor", value: t34, checked: g7 === t34, onChange: (o60) => $(o60.target.value) }))))), e40.createElement(p12, { asChild: true, align: "center", justify: "between" }, e40.createElement(p, { as: "p", id: "gray-color-title", size: "2", weight: "medium", mt: "5" }, "Gray color")), e40.createElement(o20, { columns: "10", gap: "2", mt: "3", role: "group", "aria-labelledby": "gray-color-title" }, s3.grayColor.values.map((t34) => e40.createElement(p12, { key: t34, asChild: true, align: "center", justify: "center" }, e40.createElement("label", { className: "rt-ThemePanelSwatch", style: { backgroundColor: t34 === "auto" ? `var(--${P7}-9)` : t34 === "gray" ? "var(--gray-9)" : `var(--${t34}-9)`, filter: t34 === "gray" ? "saturate(0)" : void 0 } }, e40.createElement(e41, { content: `${C8(t34)}${t34 === "auto" ? ` (${C8(P7)})` : ""}` }, e40.createElement("input", { className: "rt-ThemePanelSwatchInput", type: "radio", name: "grayColor", value: t34, checked: f19 === t34, onChange: (o60) => F(o60.target.value) })))))), e40.createElement(p, { id: "appearance-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Appearance"), e40.createElement(o20, { columns: "2", gap: "2", mt: "3", role: "group", "aria-labelledby": "appearance-title" }, ["light", "dark"].map((t34) => e40.createElement("label", { key: t34, className: "rt-ThemePanelRadioCard" }, e40.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "appearance", value: t34, checked: Z === t34, onChange: (o60) => k4(o60.target.value) }), e40.createElement(p12, { align: "center", justify: "center", height: "32px", gap: "2" }, t34 === "light" ? e40.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -1px" } }, e40.createElement("path", { d: "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })) : e40.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -1px" } }, e40.createElement("path", { d: "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })), e40.createElement(p, { size: "1", weight: "medium" }, C8(t34)))))), e40.createElement(p, { id: "radius-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Radius"), e40.createElement(o20, { columns: "5", gap: "2", mt: "3", role: "group", "aria-labelledby": "radius-title" }, s3.radius.values.map((t34) => e40.createElement(p12, { key: t34, direction: "column", align: "center" }, e40.createElement("label", { className: "rt-ThemePanelRadioCard" }, e40.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "radius", id: `theme-panel-radius-${t34}`, value: t34, checked: w3 === t34, onChange: (o60) => D3(o60.target.value) }), e40.createElement(I, { asChild: true, radius: t34 }, e40.createElement(p9, { m: "3", width: "32px", height: "32px", style: { borderTopLeftRadius: t34 === "full" ? "80%" : "var(--radius-5)", backgroundImage: "linear-gradient(to bottom right, var(--accent-3), var(--accent-4))", borderTop: "2px solid var(--accent-a8)", borderLeft: "2px solid var(--accent-a8)" } }))), e40.createElement(p9, { asChild: true, pt: "2" }, e40.createElement(p, { asChild: true, size: "1", color: "gray" }, e40.createElement("label", { htmlFor: `theme-panel-radius-${t34}` }, C8(t34))))))), e40.createElement(p, { id: "scaling-title", as: "p", size: "2", weight: "medium", mt: "5" }, "Scaling"), e40.createElement(o20, { columns: "5", gap: "2", mt: "3", role: "group", "aria-labelledby": "scaling-title" }, s3.scaling.values.map((t34) => e40.createElement("label", { key: t34, className: "rt-ThemePanelRadioCard" }, e40.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "scaling", value: t34, checked: x6 === t34, onChange: (o60) => j2(o60.target.value) }), e40.createElement(p12, { align: "center", justify: "center", height: "32px" }, e40.createElement(I, { asChild: true, scaling: t34 }, e40.createElement(p12, { align: "center", justify: "center" }, e40.createElement(p, { size: "1", weight: "medium" }, C8(t34)))))))), e40.createElement(p12, { mt: "5", align: "center", gap: "2" }, e40.createElement(p, { id: "panel-background-title", as: "p", size: "2", weight: "medium" }, "Panel background"), e40.createElement(popover_exports.Root, null, e40.createElement(popover_exports.Trigger, null, e40.createElement(o30, { size: "1", variant: "ghost", color: "gray" }, e40.createElement(AccessibleIcon, { label: "Learn more about panel background options" }, e40.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, e40.createElement("path", { d: "M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z", fillRule: "evenodd", clipRule: "evenodd" }))))), e40.createElement(popover_exports.Content, { size: "1", style: { maxWidth: 220 }, side: "top", align: "center" }, e40.createElement(p, { as: "p", size: "2" }, "Whether Card and Table panels are translucent, showing some of the background behind them.")))), e40.createElement(o20, { columns: "2", gap: "2", mt: "3", role: "group", "aria-labelledby": "panel-background-title" }, s3.panelBackground.values.map((t34) => e40.createElement("label", { key: t34, className: "rt-ThemePanelRadioCard" }, e40.createElement("input", { className: "rt-ThemePanelRadioCardInput", type: "radio", name: "panelBackground", value: t34, checked: T7 === t34, onChange: (o60) => O2(o60.target.value) }), e40.createElement(p12, { align: "center", justify: "center", height: "32px", gap: "2" }, t34 === "solid" ? e40.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -2px" } }, e40.createElement("path", { d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })) : e40.createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { margin: "0 -2px" } }, e40.createElement("path", { opacity: ".05", d: "M6.78296 13.376C8.73904 9.95284 8.73904 5.04719 6.78296 1.62405L7.21708 1.37598C9.261 4.95283 9.261 10.0472 7.21708 13.624L6.78296 13.376Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".1", d: "M7.28204 13.4775C9.23929 9.99523 9.23929 5.00475 7.28204 1.52248L7.71791 1.2775C9.76067 4.9119 9.76067 10.0881 7.71791 13.7225L7.28204 13.4775Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".15", d: "M7.82098 13.5064C9.72502 9.99523 9.72636 5.01411 7.82492 1.50084L8.26465 1.26285C10.2465 4.92466 10.2451 10.085 8.26052 13.7448L7.82098 13.5064Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".2", d: "M8.41284 13.429C10.1952 9.92842 10.1957 5.07537 8.41435 1.57402L8.85999 1.34729C10.7139 4.99113 10.7133 10.0128 8.85841 13.6559L8.41284 13.429Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".25", d: "M9.02441 13.2956C10.6567 9.8379 10.6586 5.17715 9.03005 1.71656L9.48245 1.50366C11.1745 5.09919 11.1726 9.91629 9.47657 13.5091L9.02441 13.2956Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".3", d: "M9.66809 13.0655C11.1097 9.69572 11.1107 5.3121 9.67088 1.94095L10.1307 1.74457C11.6241 5.24121 11.6231 9.76683 10.1278 13.2622L9.66809 13.0655Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".35", d: "M10.331 12.7456C11.5551 9.52073 11.5564 5.49103 10.3347 2.26444L10.8024 2.0874C12.0672 5.42815 12.0659 9.58394 10.7985 12.9231L10.331 12.7456Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".4", d: "M11.0155 12.2986C11.9938 9.29744 11.9948 5.71296 11.0184 2.71067L11.4939 2.55603C12.503 5.6589 12.502 9.35178 11.4909 12.4535L11.0155 12.2986Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".45", d: "M11.7214 11.668C12.4254 9.01303 12.4262 5.99691 11.7237 3.34116L12.2071 3.21329C12.9318 5.95292 12.931 9.05728 12.2047 11.7961L11.7214 11.668Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { opacity: ".5", d: "M12.4432 10.752C12.8524 8.63762 12.8523 6.36089 12.4429 4.2466L12.9338 4.15155C13.3553 6.32861 13.3554 8.66985 12.9341 10.847L12.4432 10.752Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" }), e40.createElement("path", { d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704Z", fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd" })), e40.createElement(p, { size: "1", weight: "medium" }, C8(t34)))))), e40.createElement(o15, { mt: "5", style: { width: "100%" }, onClick: U }, W2 === "copied" ? "Copied" : "Copy Theme")))));
});
z.displayName = "ThemePanelImpl";
function a92() {
  const n23 = document.createElement("style");
  return n23.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(n23), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(n23);
    }, 1);
  };
}
function C8(n23) {
  return n23.charAt(0).toUpperCase() + n23.slice(1);
}
function l92(n23) {
  const a41 = document.documentElement, l12 = a41.classList.contains("light-theme"), c5 = a41.classList.contains("dark-theme"), h4 = a41.classList.contains("light"), v9 = a41.classList.contains("dark");
  (l12 || c5) && (a41.classList.remove("light-theme", "dark-theme"), a41.style.colorScheme = n23, a41.classList.add(`${n23}-theme`)), (h4 || v9) && (a41.classList.remove("light", "dark"), a41.style.colorScheme = n23, a41.classList.add(n23)), !l12 && !c5 && !h4 && !v9 && (a41.style.colorScheme = n23, a41.classList.add(n23));
}

// node_modules/@radix-ui/themes/dist/esm/components/tooltip.js
var o59 = __toESM(require_react(), 1);
var import_classnames54 = __toESM(require_classnames(), 1);

// node_modules/@radix-ui/themes/dist/esm/components/tooltip.props.js
var e42 = { content: { type: "ReactNode", required: true }, width: t.width, minWidth: t.minWidth, maxWidth: { ...t.maxWidth, default: "360px" } };

// node_modules/@radix-ui/themes/dist/esm/components/tooltip.js
var e41 = o59.forwardRef((i22, p38) => {
  const { children: r44, className: n23, open: s23, defaultOpen: l12, onOpenChange: m18, delayDuration: a41, disableHoverableContent: f19, content: P7, container: T7, forceMount: c5, ...d10 } = v(i22, e42), C9 = { open: s23, defaultOpen: l12, onOpenChange: m18, delayDuration: a41, disableHoverableContent: f19 };
  return o59.createElement(Root32, { ...C9 }, o59.createElement(Trigger3, { asChild: true }, r44), o59.createElement(Portal3, { container: T7, forceMount: c5 }, o59.createElement(I, { asChild: true }, o59.createElement(Content22, { sideOffset: 4, collisionPadding: 10, ...d10, asChild: false, ref: p38, className: (0, import_classnames54.default)("rt-TooltipContent", n23) }, o59.createElement(p, { as: "p", className: "rt-TooltipText", size: "1" }, P7), o59.createElement(Arrow22, { className: "rt-TooltipArrow" })))));
});
e41.displayName = "Tooltip";
export {
  AccessibleIcon,
  alert_dialog_exports as AlertDialog,
  AspectRatio,
  i2 as Avatar,
  e14 as Badge,
  e15 as Blockquote,
  p9 as Box,
  o15 as Button,
  callout_exports as Callout,
  o17 as Card,
  c as Checkbox,
  checkbox_cards_exports as CheckboxCards,
  checkbox_group_exports as CheckboxGroup,
  i6 as ChevronDownIcon,
  p17 as Code,
  p19 as Container,
  context_menu_exports as ContextMenu,
  data_list_exports as DataList,
  dialog_exports as Dialog,
  dropdown_menu_exports as DropdownMenu,
  o29 as Em,
  p12 as Flex,
  o20 as Grid,
  r6 as Heading,
  hover_card_exports as HoverCard,
  o30 as IconButton,
  o31 as Inset,
  r27 as Kbd,
  e29 as Link,
  popover_exports as Popover,
  Portal,
  s18 as Progress,
  e30 as Quote,
  e31 as Radio,
  radio_cards_exports as RadioCards,
  radio_group_exports as RadioGroup,
  o44 as Reset,
  c2 as ScrollArea,
  r31 as Section,
  segmented_control_exports as SegmentedControl,
  select_exports as Select,
  o49 as Separator,
  r36 as Skeleton,
  s20 as Slider,
  Slot,
  Slottable,
  s8 as Spinner,
  r37 as Strong,
  i18 as Switch,
  tab_nav_exports as TabNav,
  table_exports as Table,
  tabs_exports as Tabs,
  p as Text,
  r42 as TextArea,
  text_field_exports as TextField,
  I as Theme,
  T as ThemeContext,
  N7 as ThemePanel,
  t12 as ThickCheckIcon,
  l6 as ThickChevronRightIcon,
  r17 as ThickDividerHorizontalIcon,
  e41 as Tooltip,
  VisuallyHidden,
  H as useThemeContext
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=@radix-ui_themes.js.map
