import {
  AbiCoder,
  ErrorDescription,
  ErrorFragment,
  Interface,
  Result
} from "./chunk-4KVYDUTV.js";
import "./chunk-256EKJAK.js";

// node_modules/ethers-decode-error/dist/index.mjs
var o;
function i() {
  return i = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
    }
    return r;
  }, i.apply(this, arguments);
}
function u(r, e) {
  (null == e || e > r.length) && (e = r.length);
  for (var n = 0, t = new Array(e); n < e; n++) t[n] = r[n];
  return t;
}
!function(r) {
  r.EmptyError = "EmptyError", r.RevertError = "RevertError", r.PanicError = "PanicError", r.CustomError = "CustomError", r.UserRejectError = "UserRejectError", r.RpcError = "RpcError", r.UnknownError = "UnknownError";
}(o || (o = {}));
var c = "0x08c379a0";
var s = "0x4e487b71";
var l = function(r, e) {
  return r && "" !== r.trim() ? r : e;
};
var d = function(n) {
  var t = n.data, a = n.fragment, o2 = n.args, u2 = n.selector, c2 = n.name, s2 = { type: n.type, reason: l(n.reason, null), data: null != t ? t : null, fragment: null, args: null != o2 ? o2 : new Result(), selector: null != u2 ? u2 : null, name: null != c2 ? c2 : null, signature: null };
  return a && (s2 = i({}, s2, new ErrorDescription(a, a.selector, o2))), s2;
};
var f = function(r) {
  var e = r.data, n = r.name;
  return d({ type: o.UnknownError, reason: l(r.reason, "Unknown error"), data: e, name: n });
};
var v = function() {
  function r() {
  }
  var e = r.prototype;
  return e.predicate = function(r2) {
    return "0x" === r2;
  }, e.handle = function(r2) {
    return d({ type: o.EmptyError, data: { data: r2 }.data });
  }, r;
}();
var m = function() {
  function r() {
  }
  var e = r.prototype;
  return e.predicate = function(r2) {
    return null == r2 ? void 0 : r2.startsWith(c);
  }, e.handle = function(r2) {
    var e2, a = r2.slice(10), i2 = new AbiCoder();
    try {
      var u2 = ErrorFragment.from("Error(string)"), c2 = i2.decode(u2.inputs, "0x" + a);
      return d({ type: o.RevertError, reason: (e2 = { data: r2, fragment: u2, reason: c2[0], args: c2 }).reason, data: e2.data, fragment: e2.fragment, args: e2.args });
    } catch (e3) {
      return f({ reason: "Unknown error returned", data: r2 });
    }
  }, r;
}();
var p = function() {
  function r() {
  }
  var e = r.prototype;
  return e.predicate = function(r2) {
    return null == r2 ? void 0 : r2.startsWith(s);
  }, e.handle = function(r2) {
    var e2, a = r2.slice(10), i2 = new AbiCoder();
    try {
      var u2, c2 = ErrorFragment.from("Panic(uint256)"), s2 = i2.decode(c2.inputs, "0x" + a), l2 = null != (u2 = function(r3) {
        switch (r3) {
          case 0x0n:
            return "Generic compiler inserted panic";
          case 0x1n:
            return "Assertion error";
          case 0x11n:
            return "Arithmetic operation underflowed or overflowed outside of an unchecked block";
          case 0x12n:
            return "Division or modulo division by zero";
          case 0x21n:
            return "Tried to convert a value into an enum, but the value was too big or negative";
          case 0x22n:
            return "Incorrectly encoded storage byte array";
          case 0x31n:
            return ".pop() was called on an empty array";
          case 0x32n:
            return "Array accessed at an out-of-bounds or negative index";
          case 0x41n:
            return "Too much memory was allocated, or an array was created that is too large";
          case 0x51n:
            return "Called a zero-initialized variable of internal function type";
        }
      }(s2[0])) ? u2 : "Unknown panic code";
      return d({ type: o.PanicError, reason: (e2 = { data: r2, fragment: c2, reason: l2, args: s2 }).reason, data: e2.data, args: e2.args });
    } catch (e3) {
      return f({ reason: "Unknown panic error", data: r2 });
    }
  }, r;
}();
var g = function() {
  function r() {
  }
  var e = r.prototype;
  return e.predicate = function(r2) {
    return r2 && "0x" !== r2 && !(null != r2 && r2.startsWith(c)) && !(null != r2 && r2.startsWith(s));
  }, e.handle = function(r2, e2) {
    var n = e2.errorInterface, t = { data: r2 };
    if (n) {
      var a = n.parseError(r2);
      a && (t = i({}, t, { fragment: a.fragment, reason: a.name, args: a.args }));
    }
    return function(r3) {
      var e3 = r3.data, n2 = r3.reason, t2 = r3.fragment, a2 = r3.args, i2 = e3.slice(0, 10);
      return d({ type: o.CustomError, reason: l(n2, "No ABI for custom error " + i2), data: e3, fragment: t2, args: a2, selector: i2, name: i2 });
    }(t);
  }, r;
}();
var y = function() {
  function r() {
  }
  var e = r.prototype;
  return e.predicate = function(r2, e2) {
    var n;
    return !r2 && (null == e2 || null == (n = e2.message) ? void 0 : n.includes("rejected transaction"));
  }, e.handle = function(r2, e2) {
    var n, t, a, i2;
    return i2 = void 0 === (a = (t = { data: null, reason: null != (n = e2.error.message) ? n : "The transaction was rejected" }).data) ? null : a, d({ type: o.UserRejectError, reason: l(t.reason, "User has rejected the transaction"), data: i2 });
  }, r;
}();
var h = function() {
  function r() {
  }
  var e = r.prototype;
  return e.predicate = function(r2, e2) {
    var n;
    return !r2 && e2.message && !(null != e2 && null != (n = e2.message) && n.includes("rejected transaction")) && void 0 !== e2.code;
  }, e.handle = function(r2, e2) {
    var n, t, a, i2, u2, c2, s2, f2 = e2.error, v2 = null != (n = null != (t = null == (a = f2.info) || null == (i2 = a.error) ? void 0 : i2.message) ? t : f2.shortMessage) ? n : f2.message;
    return s2 = (u2 = { data: null, name: f2.code, reason: v2 }).name, d({ type: o.RpcError, reason: l(u2.reason, "Error from JSON RPC provider"), data: null, name: null != (c2 = null == s2 ? void 0 : s2.toString()) ? c2 : null });
  }, r;
}();
var E = function() {
  function r(r2, e2) {
    this.errorInterface = void 0, this.errorHandlers = [], this.errorInterface = e2, this.errorHandlers = r2.map(function(r3) {
      return { predicate: r3.predicate, handle: r3.handle };
    });
  }
  var e = r.prototype;
  return e.getContractOrTransactionError = function(r2) {
    try {
      var e2 = r2.receipt;
      return e2 ? Promise.resolve(this.getTransactionError(e2)).then(function(e3) {
        return e3 || r2;
      }) : Promise.resolve(r2);
    } catch (r3) {
      return Promise.reject(r3);
    }
  }, e.getTransactionError = function(r2) {
    try {
      if (!r2 || 0 !== r2.status) return Promise.resolve(void 0);
      var e2 = r2.provider;
      return Promise.resolve(e2.getTransaction(r2.hash)).then(function(r3) {
        return function(n, t) {
          try {
            var a = Promise.resolve(e2.call(i({}, r3, { maxFeePerGas: void 0, maxPriorityFeePerGas: void 0 }))).then(function() {
              return null;
            });
          } catch (r4) {
            return r4;
          }
          return a && a.then ? a.then(void 0, function(r4) {
            return r4;
          }) : a;
        }();
      });
    } catch (r3) {
      return Promise.reject(r3);
    }
  }, e.getDataFromError = function(r2) {
    var e2, n, t = null != (e2 = r2.data) ? e2 : null == (n = r2.error) ? void 0 : n.data;
    if (void 0 !== t) {
      var a = "string" == typeof t ? t : t.data;
      if ("object" == typeof a && a.data && (a = a.data), void 0 !== a && "string" == typeof a) return a;
    }
  }, e.decode = function(r2) {
    try {
      var e2, n = this;
      return r2 instanceof Error ? Promise.resolve(n.getContractOrTransactionError(r2)).then(function(r3) {
        for (var e3, t, a = n.getDataFromError(r3), o2 = function(r4, e4) {
          var n2 = "undefined" != typeof Symbol && r4[Symbol.iterator] || r4["@@iterator"];
          if (n2) return (n2 = n2.call(r4)).next.bind(n2);
          if (Array.isArray(r4) || (n2 = function(r5, e5) {
            if (r5) {
              if ("string" == typeof r5) return u(r5, e5);
              var n3 = Object.prototype.toString.call(r5).slice(8, -1);
              return "Object" === n3 && r5.constructor && (n3 = r5.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(r5) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? u(r5, e5) : void 0;
            }
          }(r4))) {
            n2 && (r4 = n2);
            var t2 = 0;
            return function() {
              return t2 >= r4.length ? { done: true } : { done: false, value: r4[t2++] };
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }(n.errorHandlers); !(t = o2()).done; ) {
          var i2 = t.value, c2 = i2.handle;
          if ((0, i2.predicate)(a, r3)) return c2(a, { errorInterface: n.errorInterface, error: r3 });
        }
        return f({ data: a, reason: null != (e3 = null == r3 ? void 0 : r3.message) ? e3 : "Unexpected error", name: null == r3 ? void 0 : r3.name });
      }) : Promise.resolve(f({ data: void 0, reason: null != (e2 = r2.message) ? e2 : "Invalid error" }));
    } catch (r3) {
      return Promise.reject(r3);
    }
  }, r.create = function(e2, n) {
    void 0 === n && (n = {});
    var o2, i2 = n.additionalErrorHandlers;
    if (e2) {
      var u2 = e2.flatMap(function(r2) {
        return r2 instanceof Interface ? r2.fragments.filter(function(r3) {
          return ErrorFragment.isFragment(r3);
        }) : r2.filter(function(r3) {
          return "error" === r3.type || ErrorFragment.isFragment(r3);
        });
      });
      o2 = new Interface(u2);
    }
    return new r([new v(), new m(), new p(), new g(), new y(), new h()].concat(null != i2 ? i2 : []), o2);
  }, r;
}();
export {
  E as ErrorDecoder,
  o as ErrorType
};
//# sourceMappingURL=ethers-decode-error.js.map
