var $c = Object.defineProperty;
var Hc = (e, t, r) => t in e ? $c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Tr = (e, t, r) => Hc(e, typeof t != "symbol" ? t + "" : t, r);
import * as W from "react";
import or, { forwardRef as qc, createElement as Co, useState as ee, useRef as Be, useEffect as ye, useLayoutEffect as si, useCallback as ft, useMemo as qe, useDebugValue as _n } from "react";
import * as oi from "react-dom";
import Wc from "react-dom";
var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Uc(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Ns = { exports: {} }, dr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function Qc() {
  if (Eo) return dr;
  Eo = 1;
  var e = or, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, i, a) {
    var u, m = {}, d = null, x = null;
    a !== void 0 && (d = "" + a), i.key !== void 0 && (d = "" + i.key), i.ref !== void 0 && (x = i.ref);
    for (u in i) n.call(i, u) && !c.hasOwnProperty(u) && (m[u] = i[u]);
    if (l && l.defaultProps) for (u in i = l.defaultProps, i) m[u] === void 0 && (m[u] = i[u]);
    return { $$typeof: t, type: l, key: d, ref: x, props: m, _owner: o.current };
  }
  return dr.Fragment = r, dr.jsx = f, dr.jsxs = f, dr;
}
var fr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function Kc() {
  return jo || (jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = or, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function w(F) {
      if (F === null || typeof F != "object")
        return null;
      var X = p && F[p] || F[g];
      return typeof X == "function" ? X : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(F) {
      {
        for (var X = arguments.length, oe = new Array(X > 1 ? X - 1 : 0), le = 1; le < X; le++)
          oe[le - 1] = arguments[le];
        y("error", F, oe);
      }
    }
    function y(F, X, oe) {
      {
        var le = C.ReactDebugCurrentFrame, Ne = le.getStackAddendum();
        Ne !== "" && (X += "%s", oe = oe.concat([Ne]));
        var De = oe.map(function(Ce) {
          return String(Ce);
        });
        De.unshift("Warning: " + X), Function.prototype.apply.call(console[F], console, De);
      }
    }
    var h = !1, v = !1, j = !1, A = !1, S = !1, _;
    _ = Symbol.for("react.module.reference");
    function E(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === n || F === c || S || F === o || F === a || F === u || A || F === x || h || v || j || typeof F == "object" && F !== null && (F.$$typeof === d || F.$$typeof === m || F.$$typeof === f || F.$$typeof === l || F.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === _ || F.getModuleId !== void 0));
    }
    function N(F, X, oe) {
      var le = F.displayName;
      if (le)
        return le;
      var Ne = X.displayName || X.name || "";
      return Ne !== "" ? oe + "(" + Ne + ")" : oe;
    }
    function D(F) {
      return F.displayName || "Context";
    }
    function k(F) {
      if (F == null)
        return null;
      if (typeof F.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof F == "function")
        return F.displayName || F.name || null;
      if (typeof F == "string")
        return F;
      switch (F) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case o:
          return "StrictMode";
        case a:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case l:
            var X = F;
            return D(X) + ".Consumer";
          case f:
            var oe = F;
            return D(oe._context) + ".Provider";
          case i:
            return N(F, F.render, "ForwardRef");
          case m:
            var le = F.displayName || null;
            return le !== null ? le : k(F.type) || "Memo";
          case d: {
            var Ne = F, De = Ne._payload, Ce = Ne._init;
            try {
              return k(Ce(De));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, R = 0, T, q, I, L, K, O, z;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function M() {
      {
        if (R === 0) {
          T = console.log, q = console.info, I = console.warn, L = console.error, K = console.group, O = console.groupCollapsed, z = console.groupEnd;
          var F = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: F,
            log: F,
            warn: F,
            error: F,
            group: F,
            groupCollapsed: F,
            groupEnd: F
          });
        }
        R++;
      }
    }
    function Z() {
      {
        if (R--, R === 0) {
          var F = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, F, {
              value: T
            }),
            info: B({}, F, {
              value: q
            }),
            warn: B({}, F, {
              value: I
            }),
            error: B({}, F, {
              value: L
            }),
            group: B({}, F, {
              value: K
            }),
            groupCollapsed: B({}, F, {
              value: O
            }),
            groupEnd: B({}, F, {
              value: z
            })
          });
        }
        R < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = C.ReactCurrentDispatcher, G;
    function se(F, X, oe) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (Ne) {
            var le = Ne.stack.trim().match(/\n( *(at )?)/);
            G = le && le[1] || "";
          }
        return `
` + G + F;
      }
    }
    var Ee = !1, de;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      de = new ue();
    }
    function pe(F, X) {
      if (!F || Ee)
        return "";
      {
        var oe = de.get(F);
        if (oe !== void 0)
          return oe;
      }
      var le;
      Ee = !0;
      var Ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var De;
      De = ne.current, ne.current = null, M();
      try {
        if (X) {
          var Ce = function() {
            throw Error();
          };
          if (Object.defineProperty(Ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ce, []);
            } catch (Ke) {
              le = Ke;
            }
            Reflect.construct(F, [], Ce);
          } else {
            try {
              Ce.call();
            } catch (Ke) {
              le = Ke;
            }
            F.call(Ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ke) {
            le = Ke;
          }
          F();
        }
      } catch (Ke) {
        if (Ke && le && typeof Ke.stack == "string") {
          for (var me = Ke.stack.split(`
`), He = le.stack.split(`
`), Oe = me.length - 1, Le = He.length - 1; Oe >= 1 && Le >= 0 && me[Oe] !== He[Le]; )
            Le--;
          for (; Oe >= 1 && Le >= 0; Oe--, Le--)
            if (me[Oe] !== He[Le]) {
              if (Oe !== 1 || Le !== 1)
                do
                  if (Oe--, Le--, Le < 0 || me[Oe] !== He[Le]) {
                    var Ze = `
` + me[Oe].replace(" at new ", " at ");
                    return F.displayName && Ze.includes("<anonymous>") && (Ze = Ze.replace("<anonymous>", F.displayName)), typeof F == "function" && de.set(F, Ze), Ze;
                  }
                while (Oe >= 1 && Le >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, ne.current = De, Z(), Error.prepareStackTrace = Ne;
      }
      var dt = F ? F.displayName || F.name : "", wt = dt ? se(dt) : "";
      return typeof F == "function" && de.set(F, wt), wt;
    }
    function he(F, X, oe) {
      return pe(F, !1);
    }
    function be(F) {
      var X = F.prototype;
      return !!(X && X.isReactComponent);
    }
    function Fe(F, X, oe) {
      if (F == null)
        return "";
      if (typeof F == "function")
        return pe(F, be(F));
      if (typeof F == "string")
        return se(F);
      switch (F) {
        case a:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case i:
            return he(F.render);
          case m:
            return Fe(F.type, X, oe);
          case d: {
            var le = F, Ne = le._payload, De = le._init;
            try {
              return Fe(De(Ne), X, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Ae = {}, Y = C.ReactDebugCurrentFrame;
    function P(F) {
      if (F) {
        var X = F._owner, oe = Fe(F.type, F._source, X ? X.type : null);
        Y.setExtraStackFrame(oe);
      } else
        Y.setExtraStackFrame(null);
    }
    function re(F, X, oe, le, Ne) {
      {
        var De = Function.call.bind(we);
        for (var Ce in F)
          if (De(F, Ce)) {
            var me = void 0;
            try {
              if (typeof F[Ce] != "function") {
                var He = Error((le || "React class") + ": " + oe + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof F[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              me = F[Ce](X, Ce, le, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              me = Oe;
            }
            me && !(me instanceof Error) && (P(Ne), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", oe, Ce, typeof me), P(null)), me instanceof Error && !(me.message in Ae) && (Ae[me.message] = !0, P(Ne), b("Failed %s type: %s", oe, me.message), P(null));
          }
      }
    }
    var ae = Array.isArray;
    function te(F) {
      return ae(F);
    }
    function Se(F) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, oe = X && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return oe;
      }
    }
    function ke(F) {
      try {
        return Te(F), !1;
      } catch {
        return !0;
      }
    }
    function Te(F) {
      return "" + F;
    }
    function $e(F) {
      if (ke(F))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(F)), Te(F);
    }
    var $ = C.ReactCurrentOwner, H = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, U, Q, ie;
    ie = {};
    function Pe(F) {
      if (we.call(F, "ref")) {
        var X = Object.getOwnPropertyDescriptor(F, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return F.ref !== void 0;
    }
    function xe(F) {
      if (we.call(F, "key")) {
        var X = Object.getOwnPropertyDescriptor(F, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return F.key !== void 0;
    }
    function vt(F, X) {
      if (typeof F.ref == "string" && $.current && X && $.current.stateNode !== X) {
        var oe = k($.current.type);
        ie[oe] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k($.current.type), F.ref), ie[oe] = !0);
      }
    }
    function Lt(F, X) {
      {
        var oe = function() {
          U || (U = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        oe.isReactWarning = !0, Object.defineProperty(F, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function Zt(F, X) {
      {
        var oe = function() {
          Q || (Q = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        oe.isReactWarning = !0, Object.defineProperty(F, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var Jt = function(F, X, oe, le, Ne, De, Ce) {
      var me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: F,
        key: X,
        ref: oe,
        props: Ce,
        // Record the component responsible for creating this element.
        _owner: De
      };
      return me._store = {}, Object.defineProperty(me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.freeze && (Object.freeze(me.props), Object.freeze(me)), me;
    };
    function It(F, X, oe, le, Ne) {
      {
        var De, Ce = {}, me = null, He = null;
        oe !== void 0 && ($e(oe), me = "" + oe), xe(X) && ($e(X.key), me = "" + X.key), Pe(X) && (He = X.ref, vt(X, Ne));
        for (De in X)
          we.call(X, De) && !H.hasOwnProperty(De) && (Ce[De] = X[De]);
        if (F && F.defaultProps) {
          var Oe = F.defaultProps;
          for (De in Oe)
            Ce[De] === void 0 && (Ce[De] = Oe[De]);
        }
        if (me || He) {
          var Le = typeof F == "function" ? F.displayName || F.name || "Unknown" : F;
          me && Lt(Ce, Le), He && Zt(Ce, Le);
        }
        return Jt(F, me, He, Ne, le, $.current, Ce);
      }
    }
    var _t = C.ReactCurrentOwner, kt = C.ReactDebugCurrentFrame;
    function nt(F) {
      if (F) {
        var X = F._owner, oe = Fe(F.type, F._source, X ? X.type : null);
        kt.setExtraStackFrame(oe);
      } else
        kt.setExtraStackFrame(null);
    }
    var J;
    J = !1;
    function fe(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function ge() {
      {
        if (_t.current) {
          var F = k(_t.current.type);
          if (F)
            return `

Check the render method of \`` + F + "`.";
        }
        return "";
      }
    }
    function Re(F) {
      return "";
    }
    var Ve = {};
    function Xe(F) {
      {
        var X = ge();
        if (!X) {
          var oe = typeof F == "string" ? F : F.displayName || F.name;
          oe && (X = `

Check the top-level render call using <` + oe + ">.");
        }
        return X;
      }
    }
    function Ue(F, X) {
      {
        if (!F._store || F._store.validated || F.key != null)
          return;
        F._store.validated = !0;
        var oe = Xe(X);
        if (Ve[oe])
          return;
        Ve[oe] = !0;
        var le = "";
        F && F._owner && F._owner !== _t.current && (le = " It was passed a child from " + k(F._owner.type) + "."), nt(F), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, le), nt(null);
      }
    }
    function Ge(F, X) {
      {
        if (typeof F != "object")
          return;
        if (te(F))
          for (var oe = 0; oe < F.length; oe++) {
            var le = F[oe];
            fe(le) && Ue(le, X);
          }
        else if (fe(F))
          F._store && (F._store.validated = !0);
        else if (F) {
          var Ne = w(F);
          if (typeof Ne == "function" && Ne !== F.entries)
            for (var De = Ne.call(F), Ce; !(Ce = De.next()).done; )
              fe(Ce.value) && Ue(Ce.value, X);
        }
      }
    }
    function st(F) {
      {
        var X = F.type;
        if (X == null || typeof X == "string")
          return;
        var oe;
        if (typeof X == "function")
          oe = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === m))
          oe = X.propTypes;
        else
          return;
        if (oe) {
          var le = k(X);
          re(oe, F.props, "prop", le, F);
        } else if (X.PropTypes !== void 0 && !J) {
          J = !0;
          var Ne = k(X);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ne || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ut(F) {
      {
        for (var X = Object.keys(F.props), oe = 0; oe < X.length; oe++) {
          var le = X[oe];
          if (le !== "children" && le !== "key") {
            nt(F), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), nt(null);
            break;
          }
        }
        F.ref !== null && (nt(F), b("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
      }
    }
    var Me = {};
    function Qe(F, X, oe, le, Ne, De) {
      {
        var Ce = E(F);
        if (!Ce) {
          var me = "";
          (F === void 0 || typeof F == "object" && F !== null && Object.keys(F).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = Re();
          He ? me += He : me += ge();
          var Oe;
          F === null ? Oe = "null" : te(F) ? Oe = "array" : F !== void 0 && F.$$typeof === t ? (Oe = "<" + (k(F.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof F, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, me);
        }
        var Le = It(F, X, oe, Ne, De);
        if (Le == null)
          return Le;
        if (Ce) {
          var Ze = X.children;
          if (Ze !== void 0)
            if (le)
              if (te(Ze)) {
                for (var dt = 0; dt < Ze.length; dt++)
                  Ge(Ze[dt], F);
                Object.freeze && Object.freeze(Ze);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(Ze, F);
        }
        if (we.call(X, "key")) {
          var wt = k(F), Ke = Object.keys(X).filter(function(zc) {
            return zc !== "key";
          }), Nn = Ke.length > 0 ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Me[wt + Nn]) {
            var Ic = Ke.length > 0 ? "{" + Ke.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nn, wt, Ic, wt), Me[wt + Nn] = !0;
          }
        }
        return F === n ? ut(Le) : st(Le), Le;
      }
    }
    function bt(F, X, oe) {
      return Qe(F, X, oe, !0);
    }
    function Dt(F, X, oe) {
      return Qe(F, X, oe, !1);
    }
    var St = Dt, er = bt;
    fr.Fragment = n, fr.jsx = St, fr.jsxs = er;
  }()), fr;
}
process.env.NODE_ENV === "production" ? Ns.exports = Qc() : Ns.exports = Kc();
var s = Ns.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ce = (e, t) => {
  const r = qc(
    ({
      color: n = "currentColor",
      size: o = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: f,
      className: l = "",
      children: i,
      ...a
    }, u) => Co(
      "svg",
      {
        ref: u,
        ...Gc,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: f ? Number(c) * 24 / Number(o) : c,
        className: ["lucide", `lucide-${Yc(e)}`, l].join(" "),
        ...a
      },
      [
        ...t.map(([m, d]) => Co(m, d)),
        ...Array.isArray(i) ? i : [i]
      ]
    )
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = ce("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = ce("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jc = ce("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = ce("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = ce("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = ce("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = ce("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = ce("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = ce("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = ce("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = ce("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = ce("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s0 = ce("CircleUser", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = ce("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = ce("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = ce("Expand", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = ce("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = ce("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a0 = ce("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = ce("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = ce("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = ce("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = ce("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = ce("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = ce("MailOpen", [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = ce("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = ce("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = ce("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = ce("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = ce("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = ce("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p0 = ce("PanelsTopLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = ce("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = ce("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = ce("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = ce("Plane", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = ce("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = ce("ReplyAll", [
  ["polyline", { points: "7 17 2 12 7 7", key: "t83bqg" }],
  ["polyline", { points: "12 17 7 12 12 7", key: "1g4ajm" }],
  ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = ce("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = ce("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v0 = ce("Save", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b0 = ce("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = ce("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = ce("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C0 = ce("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = ce("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = ce("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = ce("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = ce("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xi = ce("Ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = ce("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hi = ce("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E0 = ce("UserCog", [
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
  ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
  ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
  ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
  ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
  ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
  ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
  ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j0 = ce("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A0 = ce("Wand2", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pi = ce("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = ce("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), N0 = ({
  filters: e,
  onFiltersChange: t,
  onClearFilters: r
}) => {
  const [n, o] = ee(!1), c = Be(null);
  ye(() => {
    const a = (u) => {
      c.current && !c.current.contains(u.target) && o(!1);
    };
    return n && document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, [n]);
  const f = (a, u) => {
    t({ ...e, [a]: u });
  }, l = (a, u) => {
    t({
      ...e,
      dateRange: { ...e.dateRange, [a]: u }
    });
  }, i = () => e.readStatus !== "all" || e.starred || e.hasAttachment || e.sortBy !== "newest" || e.dateRange.from || e.dateRange.to || e.intent !== "all";
  return /* @__PURE__ */ s.jsxs("div", { className: "relative", ref: c, children: [
    " ",
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        onClick: () => o(!n),
        className: `
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors
          ${i() ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
        `,
        children: [
          /* @__PURE__ */ s.jsx(a0, { className: "w-4 h-4" }),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium", children: "Filters" }),
          i() && /* @__PURE__ */ s.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: "Active" }),
          /* @__PURE__ */ s.jsx(li, { className: `w-4 h-4 transition-transform ${n ? "rotate-180" : ""}` })
        ]
      }
    ),
    n && /* @__PURE__ */ s.jsxs("div", { className: "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ s.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ s.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Filter Emails" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          i() && /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: r,
              className: "text-xs text-gray-500 hover:text-gray-700",
              children: "Clear all"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => o(!1),
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ s.jsx(et, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ s.jsxs("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Read Status" }),
          /* @__PURE__ */ s.jsx("div", { className: "flex space-x-2", children: [
            { value: "all", label: "All", icon: Yr },
            { value: "unread", label: "Unread", icon: Yr },
            { value: "read", label: "Read", icon: u0 }
          ].map(({ value: a, label: u, icon: m }) => /* @__PURE__ */ s.jsxs(
            "button",
            {
              onClick: () => f("readStatus", a),
              className: `
                      flex items-center space-x-1 px-3 py-2 rounded-md text-xs transition-colors
                      ${e.readStatus === a ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
                    `,
              children: [
                /* @__PURE__ */ s.jsx(m, { className: "w-3 h-3" }),
                /* @__PURE__ */ s.jsx("span", { children: u })
              ]
            },
            a
          )) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Quick Filters" }),
          /* @__PURE__ */ s.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ s.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.starred,
                  onChange: (a) => f("starred", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ s.jsx(Zr, { className: "w-4 h-4 ml-2 mr-1 text-yellow-500" }),
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: "Starred only" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.hasAttachment,
                  onChange: (a) => f("hasAttachment", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ s.jsx(_s, { className: "w-4 h-4 ml-2 mr-1 text-gray-500" }),
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: "Has attachments" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort by" }),
          /* @__PURE__ */ s.jsxs(
            "select",
            {
              value: e.sortBy,
              onChange: (a) => f("sortBy", a.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ s.jsx("option", { value: "newest", children: "Newest first" }),
                /* @__PURE__ */ s.jsx("option", { value: "oldest", children: "Oldest first" }),
                /* @__PURE__ */ s.jsx("option", { value: "subject-az", children: "Subject (A-Z)" }),
                /* @__PURE__ */ s.jsx("option", { value: "subject-za", children: "Subject (Z-A)" }),
                /* @__PURE__ */ s.jsx("option", { value: "sender-az", children: "Sender (A-Z)" }),
                /* @__PURE__ */ s.jsx("option", { value: "sender-za", children: "Sender (Z-A)" }),
                /* @__PURE__ */ s.jsx("option", { value: "starred-first", children: "Starred first" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            /* @__PURE__ */ s.jsx(ai, { className: "w-4 h-4 inline mr-1" }),
            "Date Range"
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "From" }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.from,
                  onChange: (a) => l("from", a.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "To" }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.to,
                  onChange: (a) => l("to", a.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Type" }),
          /* @__PURE__ */ s.jsxs(
            "select",
            {
              value: e.intent,
              onChange: (a) => f("intent", a.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ s.jsx("option", { value: "all", children: "All types" }),
                /* @__PURE__ */ s.jsx("option", { value: "new", children: "New emails" }),
                /* @__PURE__ */ s.jsx("option", { value: "meetings", children: "Meeting invites" }),
                /* @__PURE__ */ s.jsx("option", { value: "notifications", children: "System notifications" }),
                /* @__PURE__ */ s.jsx("option", { value: "campaigns", children: "Marketing campaigns" }),
                /* @__PURE__ */ s.jsx("option", { value: "support", children: "Support requests" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, _0 = ({ isOpen: e, onClose: t }) => {
  const [r, n] = ee(!0), [o, c] = ee(!0), [f, l] = ee(!1), [i, a] = ee({ start: "22:00", end: "08:00" }), [u, m] = ee({
    newEmails: !0,
    replies: !0,
    mentions: !0,
    reminders: !1
  }), d = () => {
    console.log("Saving notification preferences:", {
      emailNotifications: r,
      desktopNotifications: o,
      soundEnabled: f,
      quietHours: i,
      notificationTypes: u
    }), t();
  };
  return e ? /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Notification Preferences" }),
      /* @__PURE__ */ s.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ s.jsx(et, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ s.jsx(Yr, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Email Notifications" }),
            /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: "Receive notifications via email" })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: r,
              onChange: (x) => n(x.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ s.jsx(t0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Desktop Notifications" }),
            /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: "Show browser notifications" })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: o,
              onChange: (x) => c(x.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ s.jsx(e0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Sound Notifications" }),
            /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: "Play sound for new emails" })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: f,
              onChange: (x) => l(x.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ s.jsx(Qs, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Quiet Hours" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-2 gap-4 ml-8", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "From" }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "time",
                value: i.start,
                onChange: (x) => a({ ...i, start: x.target.value }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "To" }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "time",
                value: i.end,
                onChange: (x) => a({ ...i, end: x.target.value }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Notification Types" }),
        /* @__PURE__ */ s.jsx("div", { className: "space-y-3 ml-4", children: Object.entries(u).map(([x, p]) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700 capitalize", children: x.replace(/([A-Z])/g, " $1").trim() }),
          /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: p,
                onChange: (g) => m({
                  ...u,
                  [x]: g.target.checked
                })
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, x)) })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: t,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: d,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, k0 = ({ isOpen: e, onClose: t }) => {
  const [r, n] = ee([
    {
      id: 1,
      name: "Default",
      content: `Best regards,
John Doe
Software Engineer
john.doe@company.com`,
      isDefault: !0
    },
    { id: 2, name: "Casual", content: `Thanks!
John`, isDefault: !1 }
  ]), [o, c] = ee(null), [f, l] = ee(""), [i, a] = ee(""), [u, m] = ee(!1), [d, x] = ee(!1), p = Be(null);
  ye(() => {
    const v = r.find((j) => j.isDefault);
    v && sessionStorage.setItem("defaultSignature", v.content);
  }, [r]);
  const g = (v) => {
    c(v.id), l(v.name), a(v.content), m(!1);
  }, w = () => {
    c(null), l(""), a(""), m(!0);
  };
  ye(() => {
    const v = (j) => {
      p.current && !p.current.contains(j.target) && t();
    };
    return e && document.addEventListener("mousedown", v), () => {
      document.removeEventListener("mousedown", v);
    };
  }, [e, t]);
  const C = () => {
    if (u) {
      const v = {
        id: Date.now(),
        name: f,
        content: i,
        isDefault: r.length === 0
      };
      n([...r, v]);
    } else o && n(
      r.map(
        (v) => v.id === o ? { ...v, name: f, content: i } : v
      )
    );
    c(null), m(!1), l(""), a("");
  }, b = (v) => {
    n(r.filter((j) => j.id !== v));
  }, y = (v) => {
    n(
      r.map((j) => ({ ...j, isDefault: j.id === v }))
    );
  }, h = () => {
    c(null), m(!1), l(""), a("");
  };
  return e ? /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: p,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
          /* @__PURE__ */ s.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Signatures" }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: t,
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ s.jsx(et, { className: "w-6 h-6" })
            }
          )
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "p-6", children: u || o ? /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Signature Name" }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                value: f,
                onChange: (v) => l(v.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                placeholder: "Enter signature name"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Signature Content" }),
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  onClick: () => x(!d),
                  className: "flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700",
                  children: [
                    d ? /* @__PURE__ */ s.jsx(m0, { className: "w-4 h-4" }) : /* @__PURE__ */ s.jsx(ui, { className: "w-4 h-4" }),
                    /* @__PURE__ */ s.jsx("span", { children: d ? "Edit" : "Preview" })
                  ]
                }
              )
            ] }),
            d ? /* @__PURE__ */ s.jsx("div", { className: "w-full min-h-32 p-3 border border-gray-300 rounded-md bg-gray-50", children: /* @__PURE__ */ s.jsx("div", { className: "whitespace-pre-wrap text-sm text-gray-900", children: i || "No content yet..." }) }) : /* @__PURE__ */ s.jsx(
              "textarea",
              {
                value: i,
                onChange: (v) => a(v.target.value),
                className: "w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
                placeholder: "Enter your signature content"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end space-x-3 pt-4", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: h,
                className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: C,
                disabled: !f.trim() || !i.trim(),
                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                children: "Save Signature"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Your Signatures" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: w,
                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                children: "Create New"
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "space-y-3", children: r.length === 0 ? /* @__PURE__ */ s.jsxs("div", { className: "text-center py-8 text-gray-500", children: [
            /* @__PURE__ */ s.jsx(hi, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
            /* @__PURE__ */ s.jsx("p", { children: "No signatures created yet" }),
            /* @__PURE__ */ s.jsx("p", { className: "text-sm", children: 'Click "Create New" to add your first signature' })
          ] }) : r.map((v) => /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "border border-gray-200 rounded-lg p-4",
              children: [
                /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ s.jsx("h4", { className: "font-medium text-gray-900", children: v.name }),
                    v.isDefault && /* @__PURE__ */ s.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full", children: "Default" })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "flex space-x-2", children: [
                    !v.isDefault && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: () => y(v.id),
                        className: "text-green-600 border border-green-600 hover:text-green-700 hover:border-green-700 text-sm rounded px-2 py-1",
                        children: "Set Default"
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: () => g(v),
                        className: "text-blue-600 border border-blue-600 hover:text-blue-700 hover:border-blue-700 text-sm rounded px-2 py-1",
                        children: "Edit"
                      }
                    ),
                    !v.isDefault && /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: () => b(v.id),
                        className: "text-red-600 border border-red-600 hover:text-red-700 hover:border-red-700 text-sm rounded px-2 py-1",
                        children: "Delete"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ s.jsx("div", { className: "bg-gray-50 rounded p-3 text-sm text-gray-700", children: /* @__PURE__ */ s.jsx("div", { className: "whitespace-pre-wrap", children: v.content }) })
              ]
            },
            v.id
          )) })
        ] }) })
      ]
    }
  ) }) : null;
}, D0 = ({ isOpen: e, onClose: t }) => {
  const [r, n] = ee({
    density: "comfortable",
    readingPane: "right",
    showImages: "ask",
    fontSize: "medium",
    theme: "light",
    showPreview: !0,
    showSender: !0,
    showSnippet: !0,
    markAsReadDelay: 2,
    conversationView: !0
  }), o = (l, i) => {
    n((a) => ({ ...a, [l]: i }));
  }, c = () => {
    console.log("Saving display settings:", r), t();
  }, f = () => {
    n({
      density: "comfortable",
      readingPane: "right",
      showImages: "ask",
      fontSize: "medium",
      theme: "light",
      showPreview: !0,
      showSender: !0,
      showSnippet: !0,
      markAsReadDelay: 2,
      conversationView: !0
    });
  };
  return e ? /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Display Options" }),
      /* @__PURE__ */ s.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ s.jsx(et, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(p0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Display Density" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ml-7 space-y-2", children: ["compact", "comfortable", "relaxed"].map((l) => /* @__PURE__ */ s.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "density",
              value: l,
              checked: r.density === l,
              onChange: (i) => o("density", i.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700 capitalize", children: l })
        ] }, l)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(x0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Reading Pane" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "right", label: "Right side" },
          { value: "bottom", label: "Bottom" },
          { value: "off", label: "No reading pane" }
        ].map((l) => /* @__PURE__ */ s.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "readingPane",
              value: l.value,
              checked: r.readingPane === l.value,
              onChange: (i) => o("readingPane", i.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: l.label })
        ] }, l.value)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(l0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Image Display" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "always", label: "Always show images" },
          { value: "ask", label: "Ask before showing images" },
          { value: "never", label: "Never show images" }
        ].map((l) => /* @__PURE__ */ s.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "showImages",
              value: l.value,
              checked: r.showImages === l.value,
              onChange: (i) => o("showImages", i.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: l.label })
        ] }, l.value)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(hi, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Font Size" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ml-7", children: /* @__PURE__ */ s.jsxs(
          "select",
          {
            value: r.fontSize,
            onChange: (l) => o("fontSize", l.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ s.jsx("option", { value: "small", children: "Small" }),
              /* @__PURE__ */ s.jsx("option", { value: "medium", children: "Medium" }),
              /* @__PURE__ */ s.jsx("option", { value: "large", children: "Large" }),
              /* @__PURE__ */ s.jsx("option", { value: "extra-large", children: "Extra Large" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(ui, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Theme" })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "auto", label: "Auto (system)" }
        ].map((l) => /* @__PURE__ */ s.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "radio",
              name: "theme",
              value: l.value,
              checked: r.theme === l.value,
              onChange: (i) => o("theme", i.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: l.label })
        ] }, l.value)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Display Options" }),
        /* @__PURE__ */ s.jsx("div", { className: "space-y-3 ml-4", children: [
          { key: "showPreview", label: "Show email preview pane" },
          { key: "showSender", label: "Show sender avatars" },
          { key: "showSnippet", label: "Show email snippets in list" },
          { key: "conversationView", label: "Group emails by conversation" }
        ].map((l) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: l.label }),
          /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: r[l.key],
                onChange: (i) => o(l.key, i.target.checked)
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, l.key)) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Mark as Read Delay" }),
        /* @__PURE__ */ s.jsxs("div", { className: "ml-4", children: [
          /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Seconds before marking email as read when opened" }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "10",
              step: "1",
              value: r.markAsReadDelay,
              onChange: (l) => o("markAsReadDelay", parseInt(l.target.value)),
              className: "w-full"
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
            /* @__PURE__ */ s.jsx("span", { children: "Immediately" }),
            /* @__PURE__ */ s.jsxs("span", { children: [
              r.markAsReadDelay,
              "s"
            ] }),
            /* @__PURE__ */ s.jsx("span", { children: "10s" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: f,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Reset to Defaults"
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: t,
            className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: c,
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
            children: "Save Changes"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, S0 = ({ isOpen: e, onClose: t }) => {
  const [r, n] = ee({
    language: "en",
    timezone: "America/New_York",
    autoSave: !0,
    confirmDelete: !0,
    undoSendDelay: 10,
    maxAttachmentSize: 25,
    autoArchive: !1,
    archiveAfterDays: 30,
    backupFrequency: "weekly",
    twoFactorAuth: !1,
    sessionTimeout: 60,
    showTips: !0
  }), o = (i, a) => {
    n((u) => ({ ...u, [i]: a }));
  }, c = () => {
    console.log("Saving general settings:", r), t();
  }, f = () => {
    console.log("Exporting user data..."), alert("Data export initiated. You will receive a download link via email.");
  }, l = () => {
    window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    ) && (console.log("Account deletion requested..."), alert("Account deletion request submitted. Please check your email for confirmation."));
  };
  return e ? /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "General Settings" }),
      /* @__PURE__ */ s.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ s.jsx(et, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(c0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Language & Region" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ml-7 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Language" }),
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                value: r.language,
                onChange: (i) => o("language", i.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: "en", children: "English" }),
                  /* @__PURE__ */ s.jsx("option", { value: "es", children: "Español" }),
                  /* @__PURE__ */ s.jsx("option", { value: "fr", children: "Français" }),
                  /* @__PURE__ */ s.jsx("option", { value: "de", children: "Deutsch" }),
                  /* @__PURE__ */ s.jsx("option", { value: "zh", children: "中文" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Timezone" }),
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                value: r.timezone,
                onChange: (i) => o("timezone", i.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: "America/New_York", children: "Eastern Time" }),
                  /* @__PURE__ */ s.jsx("option", { value: "America/Chicago", children: "Central Time" }),
                  /* @__PURE__ */ s.jsx("option", { value: "America/Denver", children: "Mountain Time" }),
                  /* @__PURE__ */ s.jsx("option", { value: "America/Los_Angeles", children: "Pacific Time" }),
                  /* @__PURE__ */ s.jsx("option", { value: "UTC", children: "UTC" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(Qs, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Email Behavior" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: "Auto-save drafts" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500", children: "Automatically save email drafts while composing" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.autoSave,
                  onChange: (i) => o("autoSave", i.target.checked)
                }
              ),
              /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: "Confirm before deleting" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500", children: "Show confirmation dialog when deleting emails" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.confirmDelete,
                  onChange: (i) => o("confirmDelete", i.target.checked)
                }
              ),
              /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsxs("label", { className: "block text-sm text-gray-700 mb-2", children: [
              "Undo send delay: ",
              r.undoSendDelay,
              " seconds"
            ] }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "30",
                step: "5",
                value: r.undoSendDelay,
                onChange: (i) => o("undoSendDelay", parseInt(i.target.value)),
                className: "w-full"
              }
            ),
            /* @__PURE__ */ s.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
              /* @__PURE__ */ s.jsx("span", { children: "No delay" }),
              /* @__PURE__ */ s.jsx("span", { children: "30s" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Maximum attachment size (MB)" }),
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                value: r.maxAttachmentSize,
                onChange: (i) => o("maxAttachmentSize", parseInt(i.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: 10, children: "10 MB" }),
                  /* @__PURE__ */ s.jsx("option", { value: 25, children: "25 MB" }),
                  /* @__PURE__ */ s.jsx("option", { value: 50, children: "50 MB" }),
                  /* @__PURE__ */ s.jsx("option", { value: 100, children: "100 MB" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(Zc, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Auto Archive" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: "Enable auto-archive" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500", children: "Automatically archive old emails" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.autoArchive,
                  onChange: (i) => o("autoArchive", i.target.checked)
                }
              ),
              /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          r.autoArchive && /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Archive emails after (days)" }),
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                value: r.archiveAfterDays,
                onChange: (i) => o("archiveAfterDays", parseInt(i.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: 7, children: "7 days" }),
                  /* @__PURE__ */ s.jsx("option", { value: 30, children: "30 days" }),
                  /* @__PURE__ */ s.jsx("option", { value: 90, children: "90 days" }),
                  /* @__PURE__ */ s.jsx("option", { value: 365, children: "1 year" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(C0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Security" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: "Two-factor authentication" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500", children: "Add an extra layer of security" })
            ] }),
            /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.twoFactorAuth,
                  onChange: (i) => o("twoFactorAuth", i.target.checked)
                }
              ),
              /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Session timeout (minutes)" }),
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                value: r.sessionTimeout,
                onChange: (i) => o("sessionTimeout", parseInt(i.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: 15, children: "15 minutes" }),
                  /* @__PURE__ */ s.jsx("option", { value: 30, children: "30 minutes" }),
                  /* @__PURE__ */ s.jsx("option", { value: 60, children: "1 hour" }),
                  /* @__PURE__ */ s.jsx("option", { value: 120, children: "2 hours" }),
                  /* @__PURE__ */ s.jsx("option", { value: 0, children: "Never" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(No, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ s.jsx("h3", { className: "font-medium text-gray-900", children: "Data Management" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "ml-7 space-y-3", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: f,
              className: "w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
              children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-gray-900", children: "Export your data" }),
                  /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500", children: "Download a copy of your emails and settings" })
                ] }),
                /* @__PURE__ */ s.jsx(No, { className: "w-4 h-4 text-gray-400" })
              ] })
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: l,
              className: "w-full text-left px-4 py-3 border border-red-300 rounded-md hover:bg-red-50 transition-colors",
              children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-red-900", children: "Delete account" }),
                  /* @__PURE__ */ s.jsx("p", { className: "text-xs text-red-500", children: "Permanently delete your account and all data" })
                ] }),
                /* @__PURE__ */ s.jsx(xn, { className: "w-4 h-4 text-red-400" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: "Show helpful tips" }),
          /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500", children: "Display tips and shortcuts in the interface" })
        ] }),
        /* @__PURE__ */ s.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: r.showTips,
              onChange: (i) => o("showTips", i.target.checked)
            }
          ),
          /* @__PURE__ */ s.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: t,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: c,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, B0 = ({
  onMenuToggle: e,
  onSearch: t,
  onFiltersChange: r,
  filters: n,
  onComposeClick: o
}) => {
  const [c, f] = ee(""), [l, i] = ee(!1), [a, u] = ee(!1), [m, d] = ee(!1), [x, p] = ee(!1), [g, w] = ee(!1), [C, b] = ee(!1), y = Be(null), h = Be(null);
  ye(() => {
    const S = (_) => {
      y.current && !y.current.contains(_.target) && i(!1), h.current && !h.current.contains(_.target) && u(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, []);
  const v = (S) => {
    f(S), t(S);
  }, j = () => {
    r({
      readStatus: "all",
      starred: !1,
      hasAttachment: !1,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all"
    });
  }, A = () => {
    p(!0), i(!1);
  };
  return /* @__PURE__ */ s.jsxs("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50", children: [
    /* @__PURE__ */ s.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ s.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ s.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Mail" }) }) }),
    /* @__PURE__ */ s.jsx("div", { className: "flex-1 max-w-2xl mx-8", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
            onClick: () => v(c),
            tabIndex: 0,
            children: /* @__PURE__ */ s.jsx(b0, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search mail",
            value: c,
            onChange: (S) => f(S.target.value),
            onKeyDown: (S) => {
              S.key === "Enter" && v(c);
            },
            className: "w-full pl-10 pr-10 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
          }
        ),
        c && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
            onClick: () => {
              f(""), v("");
            },
            tabIndex: 0,
            children: "×"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx(
        N0,
        {
          filters: n,
          onFiltersChange: r,
          onClearFilters: j
        }
      )
    ] }) }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "relative", ref: y, children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => i(!l),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
            children: /* @__PURE__ */ s.jsx(w0, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        l && /* @__PURE__ */ s.jsx("div", { className: "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: A,
            className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
            children: [
              /* @__PURE__ */ s.jsx(s0, { className: "w-4 h-4 text-gray-500" }),
              /* @__PURE__ */ s.jsx("span", { className: "text-gray-700", children: "Signature Setup" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          className: "group flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 bg-blue-600 text-white",
          onClick: o,
          children: [
            /* @__PURE__ */ s.jsx(Xr, { className: "w-5 h-5" }),
            /* @__PURE__ */ s.jsx("span", { className: "ml-2 whitespace-nowrap hidden md:inline", children: "Compose" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(
      _0,
      {
        isOpen: m,
        onClose: () => d(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(
      k0,
      {
        isOpen: x,
        onClose: () => p(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(
      D0,
      {
        isOpen: g,
        onClose: () => w(!1)
      }
    ),
    /* @__PURE__ */ s.jsx(
      S0,
      {
        isOpen: C,
        onClose: () => b(!1)
      }
    )
  ] });
}, F0 = () => /* @__PURE__ */ s.jsxs("div", { className: "w-full h-14 bg-white shadow-md flex items-center px-4 animate-pulse", children: [
  /* @__PURE__ */ s.jsx("div", { className: "w-32 h-6 bg-gray-300 rounded mr-4" }),
  " ",
  /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
    /* @__PURE__ */ s.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ s.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ s.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "w-10 h-10 bg-gray-300 rounded-full ml-auto" }),
  " "
] }), R0 = () => /* @__PURE__ */ s.jsx("div", { className: "w-full h-full space-y-6 p-6 animate-pulse overflow-y-auto", children: [1, 2, 3].map((e, t) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: "bg-white rounded-md shadow p-6 w-full",
    children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ s.jsx("div", { className: "w-12 h-12 bg-gray-300 rounded-full" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ s.jsx("div", { className: "w-1/3 h-4 bg-gray-300 rounded" }),
          /* @__PURE__ */ s.jsx("div", { className: "w-1/4 h-3 bg-gray-200 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "space-y-3 mt-2", children: [
        /* @__PURE__ */ s.jsx("div", { className: "h-4 w-5/6 bg-gray-200 rounded" }),
        /* @__PURE__ */ s.jsx("div", { className: "h-4 w-2/3 bg-gray-200 rounded" }),
        /* @__PURE__ */ s.jsx("div", { className: "h-4 w-full bg-gray-100 rounded" }),
        /* @__PURE__ */ s.jsx("div", { className: "h-4 w-3/4 bg-gray-100 rounded" }),
        /* @__PURE__ */ s.jsx("div", { className: "h-4 w-4/5 bg-gray-100 rounded" })
      ] })
    ]
  },
  t
)) }), O0 = ({
  selectedLabels: e,
  availableLabels: t,
  onLabelsChange: r,
  onCreateLabel: n,
  placeholder: o = "Add labels...",
  className: c = "",
  maxHeight: f = "max-h-48"
}) => {
  const [l, i] = ee(!1), [a, u] = ee(""), [m, d] = ee(!1), [x, p] = ee(""), [g, w] = ee("#3B82F6"), C = Be(null), b = Be(null);
  ye(() => {
    const _ = (E) => {
      C.current && !C.current.contains(E.target) && (i(!1), d(!1), u(""), p(""));
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []);
  const y = t.filter(
    (_) => _.name.toLowerCase().includes(a.toLowerCase()) && !e.includes(_.id)
  ), h = t.filter(
    (_) => e.includes(_.id)
  ), v = (_) => {
    e.includes(_) ? r(e.filter((E) => E !== _)) : r([...e, _]);
  }, j = (_) => {
    r(e.filter((E) => E !== _));
  }, A = () => {
    if (!x.trim() || !n) return;
    const _ = t.find(
      (E) => E.name.toLowerCase() === x.trim().toLowerCase()
    );
    _ ? v(_.id) : n({
      name: x.trim(),
      color: g,
      isSystem: !1
    }), p(""), d(!1), u("");
  }, S = (_) => {
    _.key === "Enter" ? (_.preventDefault(), m ? A() : a.trim() && n && (p(a.trim()), d(!0))) : _.key === "Escape" && (i(!1), d(!1), u(""));
  };
  return /* @__PURE__ */ s.jsxs("div", { ref: C, className: `relative ${c}`, children: [
    /* @__PURE__ */ s.jsx(
      "div",
      {
        onClick: () => {
          i(!0), setTimeout(() => {
            var _;
            return (_ = b.current) == null ? void 0 : _.focus();
          }, 0);
        },
        className: "min-h-[2.5rem] p-2 border border-gray-300 rounded-lg cursor-text focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all",
        children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          h.map((_) => /* @__PURE__ */ s.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-sm font-medium",
              style: {
                backgroundColor: `${_.color}20`,
                color: _.color,
                border: `1px solid ${_.color}40`
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: _.color }
                  }
                ),
                _.name,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    onClick: (E) => {
                      E.stopPropagation(), j(_.id);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ s.jsx(et, { className: "w-3 h-3" })
                  }
                )
              ]
            },
            _.id
          )),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              ref: b,
              type: "text",
              value: a,
              onChange: (_) => u(_.target.value),
              onKeyDown: S,
              onFocus: () => i(!0),
              placeholder: e.length === 0 ? o : "",
              className: "flex-1 min-w-[120px] border-none outline-none bg-transparent text-sm"
            }
          )
        ] })
      }
    ),
    l && /* @__PURE__ */ s.jsxs("div", { className: `absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${f} overflow-y-auto`, children: [
      m && n && /* @__PURE__ */ s.jsxs("div", { className: "p-3 border-b border-gray-100 bg-blue-50", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
          /* @__PURE__ */ s.jsx(Xr, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-blue-900", children: "Create new label" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              value: x,
              onChange: (_) => p(_.target.value),
              onKeyDown: S,
              placeholder: "Label name...",
              className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "color",
              value: g,
              onChange: (_) => w(_.target.value),
              className: "w-8 h-8 border border-gray-300 rounded cursor-pointer"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: A,
              disabled: !x.trim(),
              className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded text-sm transition-colors",
              children: /* @__PURE__ */ s.jsx(ci, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "py-1", children: y.length === 0 && !m ? /* @__PURE__ */ s.jsx("div", { className: "px-3 py-2 text-sm text-gray-500 text-center", children: a ? /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsxs("p", { children: [
          'No labels found for "',
          a,
          '"'
        ] }),
        n && /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => {
              p(a), d(!0);
            },
            className: "mt-1 text-blue-600 hover:text-blue-700 text-sm",
            children: [
              'Create "',
              a,
              '" label'
            ]
          }
        )
      ] }) : "No available labels" }) : y.map((_) => /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: () => v(_.id),
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2",
          children: [
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full",
                style: { backgroundColor: _.color }
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-900", children: _.name }),
            _.description && /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-500 truncate", children: [
              "- ",
              _.description
            ] })
          ]
        },
        _.id
      )) }),
      !m && n && a && y.length === 0 && /* @__PURE__ */ s.jsx("div", { className: "border-t border-gray-100", children: /* @__PURE__ */ s.jsxs(
        "button",
        {
          onClick: () => {
            p(a), d(!0);
          },
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 text-blue-600",
          children: [
            /* @__PURE__ */ s.jsx(Xr, { className: "w-4 h-4" }),
            /* @__PURE__ */ s.jsxs("span", { className: "text-sm", children: [
              'Create "',
              a,
              '" label'
            ] })
          ]
        }
      ) })
    ] })
  ] });
}, P0 = ({
  emailIds: e,
  currentLabels: t,
  availableLabels: r,
  onLabelsChange: n,
  onCreateLabel: o,
  className: c = ""
}) => {
  const [f, l] = ee(!1), [i, a] = ee(t), [u, m] = ee(!1), d = Be(null);
  ye(() => {
    a(t);
  }, [t]), ye(() => {
    const g = (w) => {
      d.current && !d.current.contains(w.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []);
  const x = async (g) => {
    m(!0), a(g);
    try {
      n(e, g), setTimeout(() => {
        m(!1), l(!1);
      }, 300);
    } catch (w) {
      m(!1), console.error("Error updating labels:", w);
    }
  }, p = r.filter(
    (g) => i.includes(g.id)
  );
  return /* @__PURE__ */ s.jsxs("div", { ref: d, className: `relative ${c}`, children: [
    /* @__PURE__ */ s.jsxs(
      "button",
      {
        onClick: () => l(!f),
        disabled: u,
        className: `flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors ${u ? "opacity-50 cursor-not-allowed" : ""}`,
        title: "Manage labels",
        children: [
          /* @__PURE__ */ s.jsx(Jr, { className: `w-4 h-4 ${u ? "animate-spin" : ""}` }),
          /* @__PURE__ */ s.jsx("span", { className: "text-sm", children: "Labels" }),
          i.length > 0 && /* @__PURE__ */ s.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: i.length }),
          u && /* @__PURE__ */ s.jsx("span", { className: "text-xs text-gray-500", children: "Updating..." })
        ]
      }
    ),
    f && /* @__PURE__ */ s.jsxs("div", { className: "absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "p-3 border-b border-gray-100", children: [
        /* @__PURE__ */ s.jsxs("h3", { className: "text-sm font-semibold text-gray-900 mb-2", children: [
          "Manage Labels ",
          e.length > 1 && `(${e.length} emails)`
        ] }),
        i.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500 mb-2", children: "Current labels:" }),
          /* @__PURE__ */ s.jsx("div", { className: "flex flex-wrap gap-1", children: p.map((g) => /* @__PURE__ */ s.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
              style: {
                backgroundColor: `${g.color}20`,
                color: g.color,
                border: `1px solid ${g.color}40`
              },
              children: [
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: g.color }
                  }
                ),
                g.name,
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    onClick: () => {
                      const w = i.filter((C) => C !== g.id);
                      x(w);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ s.jsx(et, { className: "w-2 h-2" })
                  }
                )
              ]
            },
            g.id
          )) })
        ] }),
        /* @__PURE__ */ s.jsx(
          O0,
          {
            selectedLabels: i,
            availableLabels: r,
            onLabelsChange: x,
            onCreateLabel: o,
            placeholder: "Add or create labels...",
            maxHeight: "max-h-32"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "p-3", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: () => l(!1),
          className: "w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm",
          children: "Done"
        }
      ) })
    ] })
  ] });
};
function Et(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function So(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function mi(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const c = So(o, t);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const c = n[o];
          typeof c == "function" ? c() : So(e[o], null);
        }
      };
  };
}
function Gt(...e) {
  return W.useCallback(mi(...e), e);
}
function gi(e, t = []) {
  let r = [];
  function n(c, f) {
    const l = W.createContext(f), i = r.length;
    r = [...r, f];
    const a = (m) => {
      var C;
      const { scope: d, children: x, ...p } = m, g = ((C = d == null ? void 0 : d[e]) == null ? void 0 : C[i]) || l, w = W.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ s.jsx(g.Provider, { value: w, children: x });
    };
    a.displayName = c + "Provider";
    function u(m, d) {
      var g;
      const x = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[i]) || l, p = W.useContext(x);
      if (p) return p;
      if (f !== void 0) return f;
      throw new Error(`\`${m}\` must be used within \`${c}\``);
    }
    return [a, u];
  }
  const o = () => {
    const c = r.map((f) => W.createContext(f));
    return function(l) {
      const i = (l == null ? void 0 : l[e]) || c;
      return W.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: i } }),
        [l, i]
      );
    };
  };
  return o.scopeName = e, [n, T0(o, ...t)];
}
function T0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(c) {
      const f = n.reduce((l, { useScope: i, scopeName: a }) => {
        const m = i(c)[`__scope${a}`];
        return { ...l, ...m };
      }, {});
      return W.useMemo(() => ({ [`__scope${t.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
// @__NO_SIDE_EFFECTS__
function M0(e) {
  const t = /* @__PURE__ */ L0(e), r = W.forwardRef((n, o) => {
    const { children: c, ...f } = n, l = W.Children.toArray(c), i = l.find(z0);
    if (i) {
      const a = i.props.children, u = l.map((m) => m === i ? W.Children.count(a) > 1 ? W.Children.only(null) : W.isValidElement(a) ? a.props.children : null : m);
      return /* @__PURE__ */ s.jsx(t, { ...f, ref: o, children: W.isValidElement(a) ? W.cloneElement(a, void 0, u) : null });
    }
    return /* @__PURE__ */ s.jsx(t, { ...f, ref: o, children: c });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function L0(e) {
  const t = W.forwardRef((r, n) => {
    const { children: o, ...c } = r;
    if (W.isValidElement(o)) {
      const f = H0(o), l = $0(c, o.props);
      return o.type !== W.Fragment && (l.ref = n ? mi(n, f) : f), W.cloneElement(o, l);
    }
    return W.Children.count(o) > 1 ? W.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var yi = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function I0(e) {
  const t = ({ children: r }) => /* @__PURE__ */ s.jsx(s.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = yi, t;
}
function z0(e) {
  return W.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === yi;
}
function $0(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], c = t[n];
    /^on[A-Z]/.test(n) ? o && c ? r[n] = (...l) => {
      const i = c(...l);
      return o(...l), i;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...c } : n === "className" && (r[n] = [o, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function H0(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var q0 = [
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
  "select",
  "span",
  "svg",
  "ul"
], Tt = q0.reduce((e, t) => {
  const r = /* @__PURE__ */ M0(`Primitive.${t}`), n = W.forwardRef((o, c) => {
    const { asChild: f, ...l } = o, i = f ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s.jsx(i, { ...l, ref: c });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function W0(e, t) {
  e && oi.flushSync(() => e.dispatchEvent(t));
}
function hn(e) {
  const t = W.useRef(e);
  return W.useEffect(() => {
    t.current = e;
  }), W.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function V0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = hn(e);
  W.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var U0 = "DismissableLayer", Ds = "dismissableLayer.update", Q0 = "dismissableLayer.pointerDownOutside", K0 = "dismissableLayer.focusOutside", Bo, vi = W.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), bi = W.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: c,
      onInteractOutside: f,
      onDismiss: l,
      ...i
    } = e, a = W.useContext(vi), [u, m] = W.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, x] = W.useState({}), p = Gt(t, (A) => m(A)), g = Array.from(a.layers), [w] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), C = g.indexOf(w), b = u ? g.indexOf(u) : -1, y = a.layersWithOutsidePointerEventsDisabled.size > 0, h = b >= C, v = X0((A) => {
      const S = A.target, _ = [...a.branches].some((E) => E.contains(S));
      !h || _ || (o == null || o(A), f == null || f(A), A.defaultPrevented || l == null || l());
    }, d), j = Z0((A) => {
      const S = A.target;
      [...a.branches].some((E) => E.contains(S)) || (c == null || c(A), f == null || f(A), A.defaultPrevented || l == null || l());
    }, d);
    return V0((A) => {
      b === a.layers.size - 1 && (n == null || n(A), !A.defaultPrevented && l && (A.preventDefault(), l()));
    }, d), W.useEffect(() => {
      if (u)
        return r && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Bo = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(u)), a.layers.add(u), Fo(), () => {
          r && a.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = Bo);
        };
    }, [u, d, r, a]), W.useEffect(() => () => {
      u && (a.layers.delete(u), a.layersWithOutsidePointerEventsDisabled.delete(u), Fo());
    }, [u, a]), W.useEffect(() => {
      const A = () => x({});
      return document.addEventListener(Ds, A), () => document.removeEventListener(Ds, A);
    }, []), /* @__PURE__ */ s.jsx(
      Tt.div,
      {
        ...i,
        ref: p,
        style: {
          pointerEvents: y ? h ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Et(e.onFocusCapture, j.onFocusCapture),
        onBlurCapture: Et(e.onBlurCapture, j.onBlurCapture),
        onPointerDownCapture: Et(
          e.onPointerDownCapture,
          v.onPointerDownCapture
        )
      }
    );
  }
);
bi.displayName = U0;
var G0 = "DismissableLayerBranch", Y0 = W.forwardRef((e, t) => {
  const r = W.useContext(vi), n = W.useRef(null), o = Gt(t, n);
  return W.useEffect(() => {
    const c = n.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ s.jsx(Tt.div, { ...e, ref: o });
});
Y0.displayName = G0;
function X0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = hn(e), n = W.useRef(!1), o = W.useRef(() => {
  });
  return W.useEffect(() => {
    const c = (l) => {
      if (l.target && !n.current) {
        let i = function() {
          wi(
            Q0,
            r,
            a,
            { discrete: !0 }
          );
        };
        const a = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = i, t.addEventListener("click", o.current, { once: !0 })) : i();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, f = window.setTimeout(() => {
      t.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(f), t.removeEventListener("pointerdown", c), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Z0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = hn(e), n = W.useRef(!1);
  return W.useEffect(() => {
    const o = (c) => {
      c.target && !n.current && wi(K0, r, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Fo() {
  const e = new CustomEvent(Ds);
  document.dispatchEvent(e);
}
function wi(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? W0(o, c) : o.dispatchEvent(c);
}
var Ft = globalThis != null && globalThis.document ? W.useLayoutEffect : () => {
}, J0 = W[" useId ".trim().toString()] || (() => {
}), el = 0;
function tl(e) {
  const [t, r] = W.useState(J0());
  return Ft(() => {
    r((n) => n ?? String(el++));
  }, [e]), t ? `radix-${t}` : "";
}
const rl = ["top", "right", "bottom", "left"], Rt = Math.min, Je = Math.max, en = Math.round, Mr = Math.floor, ht = (e) => ({
  x: e,
  y: e
}), nl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sl = {
  start: "end",
  end: "start"
};
function Ss(e, t, r) {
  return Je(e, Rt(t, r));
}
function jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function At(e) {
  return e.split("-")[0];
}
function lr(e) {
  return e.split("-")[1];
}
function Gs(e) {
  return e === "x" ? "y" : "x";
}
function Ys(e) {
  return e === "y" ? "height" : "width";
}
const ol = /* @__PURE__ */ new Set(["top", "bottom"]);
function xt(e) {
  return ol.has(At(e)) ? "y" : "x";
}
function Xs(e) {
  return Gs(xt(e));
}
function al(e, t, r) {
  r === void 0 && (r = !1);
  const n = lr(e), o = Xs(e), c = Ys(o);
  let f = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (f = tn(f)), [f, tn(f)];
}
function il(e) {
  const t = tn(e);
  return [Bs(e), t, Bs(t)];
}
function Bs(e) {
  return e.replace(/start|end/g, (t) => sl[t]);
}
const Ro = ["left", "right"], Oo = ["right", "left"], cl = ["top", "bottom"], ll = ["bottom", "top"];
function ul(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Oo : Ro : t ? Ro : Oo;
    case "left":
    case "right":
      return t ? cl : ll;
    default:
      return [];
  }
}
function dl(e, t, r, n) {
  const o = lr(e);
  let c = ul(At(e), r === "start", n);
  return o && (c = c.map((f) => f + "-" + o), t && (c = c.concat(c.map(Bs)))), c;
}
function tn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nl[t]);
}
function fl(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ci(e) {
  return typeof e != "number" ? fl(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function rn(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Po(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const c = xt(t), f = Xs(t), l = Ys(f), i = At(t), a = c === "y", u = n.x + n.width / 2 - o.width / 2, m = n.y + n.height / 2 - o.height / 2, d = n[l] / 2 - o[l] / 2;
  let x;
  switch (i) {
    case "top":
      x = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      x = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      x = {
        x: n.x + n.width,
        y: m
      };
      break;
    case "left":
      x = {
        x: n.x - o.width,
        y: m
      };
      break;
    default:
      x = {
        x: n.x,
        y: n.y
      };
  }
  switch (lr(t)) {
    case "start":
      x[f] -= d * (r && a ? -1 : 1);
      break;
    case "end":
      x[f] += d * (r && a ? -1 : 1);
      break;
  }
  return x;
}
const xl = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: c = [],
    platform: f
  } = r, l = c.filter(Boolean), i = await (f.isRTL == null ? void 0 : f.isRTL(t));
  let a = await f.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: m
  } = Po(a, n, i), d = n, x = {}, p = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: w,
      fn: C
    } = l[g], {
      x: b,
      y,
      data: h,
      reset: v
    } = await C({
      x: u,
      y: m,
      initialPlacement: n,
      placement: d,
      strategy: o,
      middlewareData: x,
      rects: a,
      platform: f,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, m = y ?? m, x = {
      ...x,
      [w]: {
        ...x[w],
        ...h
      }
    }, v && p <= 50 && (p++, typeof v == "object" && (v.placement && (d = v.placement), v.rects && (a = v.rects === !0 ? await f.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : v.rects), {
      x: u,
      y: m
    } = Po(a, d, i)), g = -1);
  }
  return {
    x: u,
    y: m,
    placement: d,
    strategy: o,
    middlewareData: x
  };
};
async function br(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: c,
    rects: f,
    elements: l,
    strategy: i
  } = e, {
    boundary: a = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: m = "floating",
    altBoundary: d = !1,
    padding: x = 0
  } = jt(t, e), p = Ci(x), w = l[d ? m === "floating" ? "reference" : "floating" : m], C = rn(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(w))) == null || r ? w : w.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: i
  })), b = m === "floating" ? {
    x: n,
    y: o,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, y = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(l.floating)), h = await (c.isElement == null ? void 0 : c.isElement(y)) ? await (c.getScale == null ? void 0 : c.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, v = rn(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: b,
    offsetParent: y,
    strategy: i
  }) : b);
  return {
    top: (C.top - v.top + p.top) / h.y,
    bottom: (v.bottom - C.bottom + p.bottom) / h.y,
    left: (C.left - v.left + p.left) / h.x,
    right: (v.right - C.right + p.right) / h.x
  };
}
const hl = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: c,
      platform: f,
      elements: l,
      middlewareData: i
    } = t, {
      element: a,
      padding: u = 0
    } = jt(e, t) || {};
    if (a == null)
      return {};
    const m = Ci(u), d = {
      x: r,
      y: n
    }, x = Xs(o), p = Ys(x), g = await f.getDimensions(a), w = x === "y", C = w ? "top" : "left", b = w ? "bottom" : "right", y = w ? "clientHeight" : "clientWidth", h = c.reference[p] + c.reference[x] - d[x] - c.floating[p], v = d[x] - c.reference[x], j = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(a));
    let A = j ? j[y] : 0;
    (!A || !await (f.isElement == null ? void 0 : f.isElement(j))) && (A = l.floating[y] || c.floating[p]);
    const S = h / 2 - v / 2, _ = A / 2 - g[p] / 2 - 1, E = Rt(m[C], _), N = Rt(m[b], _), D = E, k = A - g[p] - N, B = A / 2 - g[p] / 2 + S, R = Ss(D, B, k), T = !i.arrow && lr(o) != null && B !== R && c.reference[p] / 2 - (B < D ? E : N) - g[p] / 2 < 0, q = T ? B < D ? B - D : B - k : 0;
    return {
      [x]: d[x] + q,
      data: {
        [x]: R,
        centerOffset: B - R - q,
        ...T && {
          alignmentOffset: q
        }
      },
      reset: T
    };
  }
}), pl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: c,
        rects: f,
        initialPlacement: l,
        platform: i,
        elements: a
      } = t, {
        mainAxis: u = !0,
        crossAxis: m = !0,
        fallbackPlacements: d,
        fallbackStrategy: x = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...w
      } = jt(e, t);
      if ((r = c.arrow) != null && r.alignmentOffset)
        return {};
      const C = At(o), b = xt(l), y = At(l) === l, h = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), v = d || (y || !g ? [tn(l)] : il(l)), j = p !== "none";
      !d && j && v.push(...dl(l, g, p, h));
      const A = [l, ...v], S = await br(t, w), _ = [];
      let E = ((n = c.flip) == null ? void 0 : n.overflows) || [];
      if (u && _.push(S[C]), m) {
        const B = al(o, f, h);
        _.push(S[B[0]], S[B[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: _
      }], !_.every((B) => B <= 0)) {
        var N, D;
        const B = (((N = c.flip) == null ? void 0 : N.index) || 0) + 1, R = A[B];
        if (R && (!(m === "alignment" ? b !== xt(R) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((I) => I.overflows[0] > 0 && xt(I.placement) === b)))
          return {
            data: {
              index: B,
              overflows: E
            },
            reset: {
              placement: R
            }
          };
        let T = (D = E.filter((q) => q.overflows[0] <= 0).sort((q, I) => q.overflows[1] - I.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!T)
          switch (x) {
            case "bestFit": {
              var k;
              const q = (k = E.filter((I) => {
                if (j) {
                  const L = xt(I.placement);
                  return L === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((L) => L > 0).reduce((L, K) => L + K, 0)]).sort((I, L) => I[1] - L[1])[0]) == null ? void 0 : k[0];
              q && (T = q);
              break;
            }
            case "initialPlacement":
              T = l;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function To(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Mo(e) {
  return rl.some((t) => e[t] >= 0);
}
const ml = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = jt(e, t);
      switch (n) {
        case "referenceHidden": {
          const c = await br(t, {
            ...o,
            elementContext: "reference"
          }), f = To(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: f,
              referenceHidden: Mo(f)
            }
          };
        }
        case "escaped": {
          const c = await br(t, {
            ...o,
            altBoundary: !0
          }), f = To(c, r.floating);
          return {
            data: {
              escapedOffsets: f,
              escaped: Mo(f)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ei = /* @__PURE__ */ new Set(["left", "top"]);
async function gl(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, c = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), f = At(r), l = lr(r), i = xt(r) === "y", a = Ei.has(f) ? -1 : 1, u = c && i ? -1 : 1, m = jt(t, e);
  let {
    mainAxis: d,
    crossAxis: x,
    alignmentAxis: p
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return l && typeof p == "number" && (x = l === "end" ? p * -1 : p), i ? {
    x: x * u,
    y: d * a
  } : {
    x: d * a,
    y: x * u
  };
}
const yl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: c,
        placement: f,
        middlewareData: l
      } = t, i = await gl(t, e);
      return f === ((r = l.offset) == null ? void 0 : r.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
        x: o + i.x,
        y: c + i.y,
        data: {
          ...i,
          placement: f
        }
      };
    }
  };
}, vl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x: C,
              y: b
            } = w;
            return {
              x: C,
              y: b
            };
          }
        },
        ...i
      } = jt(e, t), a = {
        x: r,
        y: n
      }, u = await br(t, i), m = xt(At(o)), d = Gs(m);
      let x = a[d], p = a[m];
      if (c) {
        const w = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", b = x + u[w], y = x - u[C];
        x = Ss(b, x, y);
      }
      if (f) {
        const w = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", b = p + u[w], y = p - u[C];
        p = Ss(b, p, y);
      }
      const g = l.fn({
        ...t,
        [d]: x,
        [m]: p
      });
      return {
        ...g,
        data: {
          x: g.x - r,
          y: g.y - n,
          enabled: {
            [d]: c,
            [m]: f
          }
        }
      };
    }
  };
}, bl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: c,
        middlewareData: f
      } = t, {
        offset: l = 0,
        mainAxis: i = !0,
        crossAxis: a = !0
      } = jt(e, t), u = {
        x: r,
        y: n
      }, m = xt(o), d = Gs(m);
      let x = u[d], p = u[m];
      const g = jt(l, t), w = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (i) {
        const y = d === "y" ? "height" : "width", h = c.reference[d] - c.floating[y] + w.mainAxis, v = c.reference[d] + c.reference[y] - w.mainAxis;
        x < h ? x = h : x > v && (x = v);
      }
      if (a) {
        var C, b;
        const y = d === "y" ? "width" : "height", h = Ei.has(At(o)), v = c.reference[m] - c.floating[y] + (h && ((C = f.offset) == null ? void 0 : C[m]) || 0) + (h ? 0 : w.crossAxis), j = c.reference[m] + c.reference[y] + (h ? 0 : ((b = f.offset) == null ? void 0 : b[m]) || 0) - (h ? w.crossAxis : 0);
        p < v ? p = v : p > j && (p = j);
      }
      return {
        [d]: x,
        [m]: p
      };
    }
  };
}, wl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: c,
        platform: f,
        elements: l
      } = t, {
        apply: i = () => {
        },
        ...a
      } = jt(e, t), u = await br(t, a), m = At(o), d = lr(o), x = xt(o) === "y", {
        width: p,
        height: g
      } = c.floating;
      let w, C;
      m === "top" || m === "bottom" ? (w = m, C = d === (await (f.isRTL == null ? void 0 : f.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = m, w = d === "end" ? "top" : "bottom");
      const b = g - u.top - u.bottom, y = p - u.left - u.right, h = Rt(g - u[w], b), v = Rt(p - u[C], y), j = !t.middlewareData.shift;
      let A = h, S = v;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (S = y), (n = t.middlewareData.shift) != null && n.enabled.y && (A = b), j && !d) {
        const E = Je(u.left, 0), N = Je(u.right, 0), D = Je(u.top, 0), k = Je(u.bottom, 0);
        x ? S = p - 2 * (E !== 0 || N !== 0 ? E + N : Je(u.left, u.right)) : A = g - 2 * (D !== 0 || k !== 0 ? D + k : Je(u.top, u.bottom));
      }
      await i({
        ...t,
        availableWidth: S,
        availableHeight: A
      });
      const _ = await f.getDimensions(l.floating);
      return p !== _.width || g !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pn() {
  return typeof window < "u";
}
function ur(e) {
  return ji(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yt(e) {
  var t;
  return (t = (ji(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ji(e) {
  return pn() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function it(e) {
  return pn() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function pt(e) {
  return pn() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function Lo(e) {
  return !pn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
const Cl = /* @__PURE__ */ new Set(["inline", "contents"]);
function Dr(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !Cl.has(o);
}
const El = /* @__PURE__ */ new Set(["table", "td", "th"]);
function jl(e) {
  return El.has(ur(e));
}
const Al = [":popover-open", ":modal"];
function mn(e) {
  return Al.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Nl = ["transform", "translate", "scale", "rotate", "perspective"], _l = ["transform", "translate", "scale", "rotate", "perspective", "filter"], kl = ["paint", "layout", "strict", "content"];
function Zs(e) {
  const t = Js(), r = it(e) ? ct(e) : e;
  return Nl.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || _l.some((n) => (r.willChange || "").includes(n)) || kl.some((n) => (r.contain || "").includes(n));
}
function Dl(e) {
  let t = Ot(e);
  for (; pt(t) && !ar(t); ) {
    if (Zs(t))
      return t;
    if (mn(t))
      return null;
    t = Ot(t);
  }
  return null;
}
function Js() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Sl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ar(e) {
  return Sl.has(ur(e));
}
function ct(e) {
  return tt(e).getComputedStyle(e);
}
function gn(e) {
  return it(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ot(e) {
  if (ur(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Lo(e) && e.host || // Fallback.
    yt(e)
  );
  return Lo(t) ? t.host : t;
}
function Ai(e) {
  const t = Ot(e);
  return ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pt(t) && Dr(t) ? t : Ai(t);
}
function wr(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Ai(e), c = o === ((n = e.ownerDocument) == null ? void 0 : n.body), f = tt(o);
  if (c) {
    const l = Fs(f);
    return t.concat(f, f.visualViewport || [], Dr(o) ? o : [], l && r ? wr(l) : []);
  }
  return t.concat(o, wr(o, [], r));
}
function Fs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ni(e) {
  const t = ct(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = pt(e), c = o ? e.offsetWidth : r, f = o ? e.offsetHeight : n, l = en(r) !== c || en(n) !== f;
  return l && (r = c, n = f), {
    width: r,
    height: n,
    $: l
  };
}
function eo(e) {
  return it(e) ? e : e.contextElement;
}
function nr(e) {
  const t = eo(e);
  if (!pt(t))
    return ht(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: c
  } = Ni(t);
  let f = (c ? en(r.width) : r.width) / n, l = (c ? en(r.height) : r.height) / o;
  return (!f || !Number.isFinite(f)) && (f = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: f,
    y: l
  };
}
const Bl = /* @__PURE__ */ ht(0);
function _i(e) {
  const t = tt(e);
  return !Js() || !t.visualViewport ? Bl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fl(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== tt(e) ? !1 : t;
}
function Wt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), c = eo(e);
  let f = ht(1);
  t && (n ? it(n) && (f = nr(n)) : f = nr(e));
  const l = Fl(c, r, n) ? _i(c) : ht(0);
  let i = (o.left + l.x) / f.x, a = (o.top + l.y) / f.y, u = o.width / f.x, m = o.height / f.y;
  if (c) {
    const d = tt(c), x = n && it(n) ? tt(n) : n;
    let p = d, g = Fs(p);
    for (; g && n && x !== p; ) {
      const w = nr(g), C = g.getBoundingClientRect(), b = ct(g), y = C.left + (g.clientLeft + parseFloat(b.paddingLeft)) * w.x, h = C.top + (g.clientTop + parseFloat(b.paddingTop)) * w.y;
      i *= w.x, a *= w.y, u *= w.x, m *= w.y, i += y, a += h, p = tt(g), g = Fs(p);
    }
  }
  return rn({
    width: u,
    height: m,
    x: i,
    y: a
  });
}
function to(e, t) {
  const r = gn(e).scrollLeft;
  return t ? t.left + r : Wt(yt(e)).left + r;
}
function ki(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    to(e, n)
  )), c = n.top + t.scrollTop;
  return {
    x: o,
    y: c
  };
}
function Rl(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const c = o === "fixed", f = yt(n), l = t ? mn(t.floating) : !1;
  if (n === f || l && c)
    return r;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ht(1);
  const u = ht(0), m = pt(n);
  if ((m || !m && !c) && ((ur(n) !== "body" || Dr(f)) && (i = gn(n)), pt(n))) {
    const x = Wt(n);
    a = nr(n), u.x = x.x + n.clientLeft, u.y = x.y + n.clientTop;
  }
  const d = f && !m && !c ? ki(f, i, !0) : ht(0);
  return {
    width: r.width * a.x,
    height: r.height * a.y,
    x: r.x * a.x - i.scrollLeft * a.x + u.x + d.x,
    y: r.y * a.y - i.scrollTop * a.y + u.y + d.y
  };
}
function Ol(e) {
  return Array.from(e.getClientRects());
}
function Pl(e) {
  const t = yt(e), r = gn(e), n = e.ownerDocument.body, o = Je(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), c = Je(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let f = -r.scrollLeft + to(e);
  const l = -r.scrollTop;
  return ct(n).direction === "rtl" && (f += Je(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: c,
    x: f,
    y: l
  };
}
function Tl(e, t) {
  const r = tt(e), n = yt(e), o = r.visualViewport;
  let c = n.clientWidth, f = n.clientHeight, l = 0, i = 0;
  if (o) {
    c = o.width, f = o.height;
    const a = Js();
    (!a || a && t === "fixed") && (l = o.offsetLeft, i = o.offsetTop);
  }
  return {
    width: c,
    height: f,
    x: l,
    y: i
  };
}
const Ml = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ll(e, t) {
  const r = Wt(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, c = pt(e) ? nr(e) : ht(1), f = e.clientWidth * c.x, l = e.clientHeight * c.y, i = o * c.x, a = n * c.y;
  return {
    width: f,
    height: l,
    x: i,
    y: a
  };
}
function Io(e, t, r) {
  let n;
  if (t === "viewport")
    n = Tl(e, r);
  else if (t === "document")
    n = Pl(yt(e));
  else if (it(t))
    n = Ll(t, r);
  else {
    const o = _i(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return rn(n);
}
function Di(e, t) {
  const r = Ot(e);
  return r === t || !it(r) || ar(r) ? !1 : ct(r).position === "fixed" || Di(r, t);
}
function Il(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = wr(e, [], !1).filter((l) => it(l) && ur(l) !== "body"), o = null;
  const c = ct(e).position === "fixed";
  let f = c ? Ot(e) : e;
  for (; it(f) && !ar(f); ) {
    const l = ct(f), i = Zs(f);
    !i && l.position === "fixed" && (o = null), (c ? !i && !o : !i && l.position === "static" && !!o && Ml.has(o.position) || Dr(f) && !i && Di(e, f)) ? n = n.filter((u) => u !== f) : o = l, f = Ot(f);
  }
  return t.set(e, n), n;
}
function zl(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const f = [...r === "clippingAncestors" ? mn(t) ? [] : Il(t, this._c) : [].concat(r), n], l = f[0], i = f.reduce((a, u) => {
    const m = Io(t, u, o);
    return a.top = Je(m.top, a.top), a.right = Rt(m.right, a.right), a.bottom = Rt(m.bottom, a.bottom), a.left = Je(m.left, a.left), a;
  }, Io(t, l, o));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function $l(e) {
  const {
    width: t,
    height: r
  } = Ni(e);
  return {
    width: t,
    height: r
  };
}
function Hl(e, t, r) {
  const n = pt(t), o = yt(t), c = r === "fixed", f = Wt(e, !0, c, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = ht(0);
  function a() {
    i.x = to(o);
  }
  if (n || !n && !c)
    if ((ur(t) !== "body" || Dr(o)) && (l = gn(t)), n) {
      const x = Wt(t, !0, c, t);
      i.x = x.x + t.clientLeft, i.y = x.y + t.clientTop;
    } else o && a();
  c && !n && o && a();
  const u = o && !n && !c ? ki(o, l) : ht(0), m = f.left + l.scrollLeft - i.x - u.x, d = f.top + l.scrollTop - i.y - u.y;
  return {
    x: m,
    y: d,
    width: f.width,
    height: f.height
  };
}
function Dn(e) {
  return ct(e).position === "static";
}
function zo(e, t) {
  if (!pt(e) || ct(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return yt(e) === r && (r = r.ownerDocument.body), r;
}
function Si(e, t) {
  const r = tt(e);
  if (mn(e))
    return r;
  if (!pt(e)) {
    let o = Ot(e);
    for (; o && !ar(o); ) {
      if (it(o) && !Dn(o))
        return o;
      o = Ot(o);
    }
    return r;
  }
  let n = zo(e, t);
  for (; n && jl(n) && Dn(n); )
    n = zo(n, t);
  return n && ar(n) && Dn(n) && !Zs(n) ? r : n || Dl(e) || r;
}
const ql = async function(e) {
  const t = this.getOffsetParent || Si, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Hl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Wl(e) {
  return ct(e).direction === "rtl";
}
const Vl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rl,
  getDocumentElement: yt,
  getClippingRect: zl,
  getOffsetParent: Si,
  getElementRects: ql,
  getClientRects: Ol,
  getDimensions: $l,
  getScale: nr,
  isElement: it,
  isRTL: Wl
};
function Bi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ul(e, t) {
  let r = null, n;
  const o = yt(e);
  function c() {
    var l;
    clearTimeout(n), (l = r) == null || l.disconnect(), r = null;
  }
  function f(l, i) {
    l === void 0 && (l = !1), i === void 0 && (i = 1), c();
    const a = e.getBoundingClientRect(), {
      left: u,
      top: m,
      width: d,
      height: x
    } = a;
    if (l || t(), !d || !x)
      return;
    const p = Mr(m), g = Mr(o.clientWidth - (u + d)), w = Mr(o.clientHeight - (m + x)), C = Mr(u), y = {
      rootMargin: -p + "px " + -g + "px " + -w + "px " + -C + "px",
      threshold: Je(0, Rt(1, i)) || 1
    };
    let h = !0;
    function v(j) {
      const A = j[0].intersectionRatio;
      if (A !== i) {
        if (!h)
          return f();
        A ? f(!1, A) : n = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Bi(a, e.getBoundingClientRect()) && f(), h = !1;
    }
    try {
      r = new IntersectionObserver(v, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(v, y);
    }
    r.observe(e);
  }
  return f(!0), c;
}
function Ql(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: c = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = n, a = eo(e), u = o || c ? [...a ? wr(a) : [], ...wr(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", r, {
      passive: !0
    }), c && C.addEventListener("resize", r);
  });
  const m = a && l ? Ul(a, r) : null;
  let d = -1, x = null;
  f && (x = new ResizeObserver((C) => {
    let [b] = C;
    b && b.target === a && x && (x.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = x) == null || y.observe(t);
    })), r();
  }), a && !i && x.observe(a), x.observe(t));
  let p, g = i ? Wt(e) : null;
  i && w();
  function w() {
    const C = Wt(e);
    g && !Bi(g, C) && r(), g = C, p = requestAnimationFrame(w);
  }
  return r(), () => {
    var C;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", r), c && b.removeEventListener("resize", r);
    }), m == null || m(), (C = x) == null || C.disconnect(), x = null, i && cancelAnimationFrame(p);
  };
}
const Kl = yl, Gl = vl, Yl = pl, Xl = wl, Zl = ml, $o = hl, Jl = bl, eu = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Vl,
    ...r
  }, c = {
    ...o.platform,
    _c: n
  };
  return xl(e, t, {
    ...o,
    platform: c
  });
};
var tu = typeof document < "u", ru = function() {
}, Kr = tu ? si : ru;
function nn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!nn(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const c = o[n];
      if (!(c === "_owner" && e.$$typeof) && !nn(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Fi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ho(e, t) {
  const r = Fi(e);
  return Math.round(t * r) / r;
}
function Sn(e) {
  const t = W.useRef(e);
  return Kr(() => {
    t.current = e;
  }), t;
}
function nu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: c,
      floating: f
    } = {},
    transform: l = !0,
    whileElementsMounted: i,
    open: a
  } = e, [u, m] = W.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, x] = W.useState(n);
  nn(d, n) || x(n);
  const [p, g] = W.useState(null), [w, C] = W.useState(null), b = W.useCallback((I) => {
    I !== j.current && (j.current = I, g(I));
  }, []), y = W.useCallback((I) => {
    I !== A.current && (A.current = I, C(I));
  }, []), h = c || p, v = f || w, j = W.useRef(null), A = W.useRef(null), S = W.useRef(u), _ = i != null, E = Sn(i), N = Sn(o), D = Sn(a), k = W.useCallback(() => {
    if (!j.current || !A.current)
      return;
    const I = {
      placement: t,
      strategy: r,
      middleware: d
    };
    N.current && (I.platform = N.current), eu(j.current, A.current, I).then((L) => {
      const K = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: D.current !== !1
      };
      B.current && !nn(S.current, K) && (S.current = K, oi.flushSync(() => {
        m(K);
      }));
    });
  }, [d, t, r, N, D]);
  Kr(() => {
    a === !1 && S.current.isPositioned && (S.current.isPositioned = !1, m((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [a]);
  const B = W.useRef(!1);
  Kr(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Kr(() => {
    if (h && (j.current = h), v && (A.current = v), h && v) {
      if (E.current)
        return E.current(h, v, k);
      k();
    }
  }, [h, v, k, E, _]);
  const R = W.useMemo(() => ({
    reference: j,
    floating: A,
    setReference: b,
    setFloating: y
  }), [b, y]), T = W.useMemo(() => ({
    reference: h,
    floating: v
  }), [h, v]), q = W.useMemo(() => {
    const I = {
      position: r,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return I;
    const L = Ho(T.floating, u.x), K = Ho(T.floating, u.y);
    return l ? {
      ...I,
      transform: "translate(" + L + "px, " + K + "px)",
      ...Fi(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: L,
      top: K
    };
  }, [r, l, T.floating, u.x, u.y]);
  return W.useMemo(() => ({
    ...u,
    update: k,
    refs: R,
    elements: T,
    floatingStyles: q
  }), [u, k, R, T, q]);
}
const su = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? $o({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? $o({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, ou = (e, t) => ({
  ...Kl(e),
  options: [e, t]
}), au = (e, t) => ({
  ...Gl(e),
  options: [e, t]
}), iu = (e, t) => ({
  ...Jl(e),
  options: [e, t]
}), cu = (e, t) => ({
  ...Yl(e),
  options: [e, t]
}), lu = (e, t) => ({
  ...Xl(e),
  options: [e, t]
}), uu = (e, t) => ({
  ...Zl(e),
  options: [e, t]
}), du = (e, t) => ({
  ...su(e),
  options: [e, t]
});
var fu = "Arrow", Ri = W.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...c } = e;
  return /* @__PURE__ */ s.jsx(
    Tt.svg,
    {
      ...c,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ s.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ri.displayName = fu;
var xu = Ri;
function hu(e) {
  const [t, r] = W.useState(void 0);
  return Ft(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const c = o[0];
        let f, l;
        if ("borderBoxSize" in c) {
          const i = c.borderBoxSize, a = Array.isArray(i) ? i[0] : i;
          f = a.inlineSize, l = a.blockSize;
        } else
          f = e.offsetWidth, l = e.offsetHeight;
        r({ width: f, height: l });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var ro = "Popper", [Oi, Pi] = gi(ro), [pu, Ti] = Oi(ro), Mi = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = W.useState(null);
  return /* @__PURE__ */ s.jsx(pu, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
Mi.displayName = ro;
var Li = "PopperAnchor", Ii = W.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, c = Ti(Li, r), f = W.useRef(null), l = Gt(t, f);
    return W.useEffect(() => {
      c.onAnchorChange((n == null ? void 0 : n.current) || f.current);
    }), n ? null : /* @__PURE__ */ s.jsx(Tt.div, { ...o, ref: l });
  }
);
Ii.displayName = Li;
var no = "PopperContent", [mu, gu] = Oi(no), zi = W.forwardRef(
  (e, t) => {
    var G, se, Ee, de, ue, pe;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: c = "center",
      alignOffset: f = 0,
      arrowPadding: l = 0,
      avoidCollisions: i = !0,
      collisionBoundary: a = [],
      collisionPadding: u = 0,
      sticky: m = "partial",
      hideWhenDetached: d = !1,
      updatePositionStrategy: x = "optimized",
      onPlaced: p,
      ...g
    } = e, w = Ti(no, r), [C, b] = W.useState(null), y = Gt(t, (he) => b(he)), [h, v] = W.useState(null), j = hu(h), A = (j == null ? void 0 : j.width) ?? 0, S = (j == null ? void 0 : j.height) ?? 0, _ = n + (c !== "center" ? "-" + c : ""), E = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, N = Array.isArray(a) ? a : [a], D = N.length > 0, k = {
      padding: E,
      boundary: N.filter(vu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: B, floatingStyles: R, placement: T, isPositioned: q, middlewareData: I } = nu({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...he) => Ql(...he, {
        animationFrame: x === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        ou({ mainAxis: o + S, alignmentAxis: f }),
        i && au({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? iu() : void 0,
          ...k
        }),
        i && cu({ ...k }),
        lu({
          ...k,
          apply: ({ elements: he, rects: be, availableWidth: Fe, availableHeight: we }) => {
            const { width: Ae, height: Y } = be.reference, P = he.floating.style;
            P.setProperty("--radix-popper-available-width", `${Fe}px`), P.setProperty("--radix-popper-available-height", `${we}px`), P.setProperty("--radix-popper-anchor-width", `${Ae}px`), P.setProperty("--radix-popper-anchor-height", `${Y}px`);
          }
        }),
        h && du({ element: h, padding: l }),
        bu({ arrowWidth: A, arrowHeight: S }),
        d && uu({ strategy: "referenceHidden", ...k })
      ]
    }), [L, K] = qi(T), O = hn(p);
    Ft(() => {
      q && (O == null || O());
    }, [q, O]);
    const z = (G = I.arrow) == null ? void 0 : G.x, V = (se = I.arrow) == null ? void 0 : se.y, M = ((Ee = I.arrow) == null ? void 0 : Ee.centerOffset) !== 0, [Z, ne] = W.useState();
    return Ft(() => {
      C && ne(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...R,
          transform: q ? R.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            (de = I.transformOrigin) == null ? void 0 : de.x,
            (ue = I.transformOrigin) == null ? void 0 : ue.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((pe = I.hide) == null ? void 0 : pe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ s.jsx(
          mu,
          {
            scope: r,
            placedSide: L,
            onArrowChange: v,
            arrowX: z,
            arrowY: V,
            shouldHideArrow: M,
            children: /* @__PURE__ */ s.jsx(
              Tt.div,
              {
                "data-side": L,
                "data-align": K,
                ...g,
                ref: y,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: q ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
zi.displayName = no;
var $i = "PopperArrow", yu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Hi = W.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, c = gu($i, n), f = yu[c.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ s.jsx(
      "span",
      {
        ref: c.onArrowChange,
        style: {
          position: "absolute",
          left: c.arrowX,
          top: c.arrowY,
          [f]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[c.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[c.placedSide],
          visibility: c.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ s.jsx(
          xu,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Hi.displayName = $i;
function vu(e) {
  return e !== null;
}
var bu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, C, b;
    const { placement: r, rects: n, middlewareData: o } = t, f = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, l = f ? 0 : e.arrowWidth, i = f ? 0 : e.arrowHeight, [a, u] = qi(r), m = { start: "0%", center: "50%", end: "100%" }[u], d = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + l / 2, x = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + i / 2;
    let p = "", g = "";
    return a === "bottom" ? (p = f ? m : `${d}px`, g = `${-i}px`) : a === "top" ? (p = f ? m : `${d}px`, g = `${n.floating.height + i}px`) : a === "right" ? (p = `${-i}px`, g = f ? m : `${x}px`) : a === "left" && (p = `${n.floating.width + i}px`, g = f ? m : `${x}px`), { data: { x: p, y: g } };
  }
});
function qi(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var wu = Mi, Cu = Ii, Eu = zi, ju = Hi, Au = "Portal", Wi = W.forwardRef((e, t) => {
  var l;
  const { container: r, ...n } = e, [o, c] = W.useState(!1);
  Ft(() => c(!0), []);
  const f = r || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return f ? Wc.createPortal(/* @__PURE__ */ s.jsx(Tt.div, { ...n, ref: t }), f) : null;
});
Wi.displayName = Au;
function Nu(e, t) {
  return W.useReducer((r, n) => t[r][n] ?? r, e);
}
var so = (e) => {
  const { present: t, children: r } = e, n = _u(t), o = typeof r == "function" ? r({ present: n.isPresent }) : W.Children.only(r), c = Gt(n.ref, ku(o));
  return typeof r == "function" || n.isPresent ? W.cloneElement(o, { ref: c }) : null;
};
so.displayName = "Presence";
function _u(e) {
  const [t, r] = W.useState(), n = W.useRef(null), o = W.useRef(e), c = W.useRef("none"), f = e ? "mounted" : "unmounted", [l, i] = Nu(f, {
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
  return W.useEffect(() => {
    const a = Lr(n.current);
    c.current = l === "mounted" ? a : "none";
  }, [l]), Ft(() => {
    const a = n.current, u = o.current;
    if (u !== e) {
      const d = c.current, x = Lr(a);
      e ? i("MOUNT") : x === "none" || (a == null ? void 0 : a.display) === "none" ? i("UNMOUNT") : i(u && d !== x ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, i]), Ft(() => {
    if (t) {
      let a;
      const u = t.ownerDocument.defaultView ?? window, m = (x) => {
        const g = Lr(n.current).includes(x.animationName);
        if (x.target === t && g && (i("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", a = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, d = (x) => {
        x.target === t && (c.current = Lr(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        u.clearTimeout(a), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      i("ANIMATION_END");
  }, [t, i]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: W.useCallback((a) => {
      n.current = a ? getComputedStyle(a) : null, r(a);
    }, [])
  };
}
function Lr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ku(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Du = W[" useInsertionEffect ".trim().toString()] || Ft;
function Su({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, c, f] = Bu({
    defaultProp: t,
    onChange: r
  }), l = e !== void 0, i = l ? e : o;
  {
    const u = W.useRef(e !== void 0);
    W.useEffect(() => {
      const m = u.current;
      m !== l && console.warn(
        `${n} is changing from ${m ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, n]);
  }
  const a = W.useCallback(
    (u) => {
      var m;
      if (l) {
        const d = Fu(u) ? u(e) : u;
        d !== e && ((m = f.current) == null || m.call(f, d));
      } else
        c(u);
    },
    [l, e, c, f]
  );
  return [i, a];
}
function Bu({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = W.useState(e), o = W.useRef(r), c = W.useRef(t);
  return Du(() => {
    c.current = t;
  }, [t]), W.useEffect(() => {
    var f;
    o.current !== r && ((f = c.current) == null || f.call(c, r), o.current = r);
  }, [r, o]), [r, n, c];
}
function Fu(e) {
  return typeof e == "function";
}
var Ru = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Ou = "VisuallyHidden", Vi = W.forwardRef(
  (e, t) => /* @__PURE__ */ s.jsx(
    Tt.span,
    {
      ...e,
      ref: t,
      style: { ...Ru, ...e.style }
    }
  )
);
Vi.displayName = Ou;
var Pu = Vi, [yn, ch] = gi("Tooltip", [
  Pi
]), vn = Pi(), Ui = "TooltipProvider", Tu = 700, Rs = "tooltip.open", [Mu, oo] = yn(Ui), Qi = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Tu,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: c
  } = e, f = W.useRef(!0), l = W.useRef(!1), i = W.useRef(0);
  return W.useEffect(() => {
    const a = i.current;
    return () => window.clearTimeout(a);
  }, []), /* @__PURE__ */ s.jsx(
    Mu,
    {
      scope: t,
      isOpenDelayedRef: f,
      delayDuration: r,
      onOpen: W.useCallback(() => {
        window.clearTimeout(i.current), f.current = !1;
      }, []),
      onClose: W.useCallback(() => {
        window.clearTimeout(i.current), i.current = window.setTimeout(
          () => f.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: W.useCallback((a) => {
        l.current = a;
      }, []),
      disableHoverableContent: o,
      children: c
    }
  );
};
Qi.displayName = Ui;
var Cr = "Tooltip", [Lu, Sr] = yn(Cr), Ki = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: c,
    disableHoverableContent: f,
    delayDuration: l
  } = e, i = oo(Cr, e.__scopeTooltip), a = vn(t), [u, m] = W.useState(null), d = tl(), x = W.useRef(0), p = f ?? i.disableHoverableContent, g = l ?? i.delayDuration, w = W.useRef(!1), [C, b] = Su({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (A) => {
      A ? (i.onOpen(), document.dispatchEvent(new CustomEvent(Rs))) : i.onClose(), c == null || c(A);
    },
    caller: Cr
  }), y = W.useMemo(() => C ? w.current ? "delayed-open" : "instant-open" : "closed", [C]), h = W.useCallback(() => {
    window.clearTimeout(x.current), x.current = 0, w.current = !1, b(!0);
  }, [b]), v = W.useCallback(() => {
    window.clearTimeout(x.current), x.current = 0, b(!1);
  }, [b]), j = W.useCallback(() => {
    window.clearTimeout(x.current), x.current = window.setTimeout(() => {
      w.current = !0, b(!0), x.current = 0;
    }, g);
  }, [g, b]);
  return W.useEffect(() => () => {
    x.current && (window.clearTimeout(x.current), x.current = 0);
  }, []), /* @__PURE__ */ s.jsx(wu, { ...a, children: /* @__PURE__ */ s.jsx(
    Lu,
    {
      scope: t,
      contentId: d,
      open: C,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: m,
      onTriggerEnter: W.useCallback(() => {
        i.isOpenDelayedRef.current ? j() : h();
      }, [i.isOpenDelayedRef, j, h]),
      onTriggerLeave: W.useCallback(() => {
        p ? v() : (window.clearTimeout(x.current), x.current = 0);
      }, [v, p]),
      onOpen: h,
      onClose: v,
      disableHoverableContent: p,
      children: r
    }
  ) });
};
Ki.displayName = Cr;
var Os = "TooltipTrigger", Gi = W.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = Sr(Os, r), c = oo(Os, r), f = vn(r), l = W.useRef(null), i = Gt(t, l, o.onTriggerChange), a = W.useRef(!1), u = W.useRef(!1), m = W.useCallback(() => a.current = !1, []);
    return W.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ s.jsx(Cu, { asChild: !0, ...f, children: /* @__PURE__ */ s.jsx(
      Tt.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: i,
        onPointerMove: Et(e.onPointerMove, (d) => {
          d.pointerType !== "touch" && !u.current && !c.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: Et(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: Et(e.onPointerDown, () => {
          o.open && o.onClose(), a.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: Et(e.onFocus, () => {
          a.current || o.onOpen();
        }),
        onBlur: Et(e.onBlur, o.onClose),
        onClick: Et(e.onClick, o.onClose)
      }
    ) });
  }
);
Gi.displayName = Os;
var ao = "TooltipPortal", [Iu, zu] = yn(ao, {
  forceMount: void 0
}), Yi = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, c = Sr(ao, t);
  return /* @__PURE__ */ s.jsx(Iu, { scope: t, forceMount: r, children: /* @__PURE__ */ s.jsx(so, { present: r || c.open, children: /* @__PURE__ */ s.jsx(Wi, { asChild: !0, container: o, children: n }) }) });
};
Yi.displayName = ao;
var ir = "TooltipContent", Xi = W.forwardRef(
  (e, t) => {
    const r = zu(ir, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...c } = e, f = Sr(ir, e.__scopeTooltip);
    return /* @__PURE__ */ s.jsx(so, { present: n || f.open, children: f.disableHoverableContent ? /* @__PURE__ */ s.jsx(Zi, { side: o, ...c, ref: t }) : /* @__PURE__ */ s.jsx($u, { side: o, ...c, ref: t }) });
  }
), $u = W.forwardRef((e, t) => {
  const r = Sr(ir, e.__scopeTooltip), n = oo(ir, e.__scopeTooltip), o = W.useRef(null), c = Gt(t, o), [f, l] = W.useState(null), { trigger: i, onClose: a } = r, u = o.current, { onPointerInTransitChange: m } = n, d = W.useCallback(() => {
    l(null), m(!1);
  }, [m]), x = W.useCallback(
    (p, g) => {
      const w = p.currentTarget, C = { x: p.clientX, y: p.clientY }, b = Vu(C, w.getBoundingClientRect()), y = Uu(C, b), h = Qu(g.getBoundingClientRect()), v = Gu([...y, ...h]);
      l(v), m(!0);
    },
    [m]
  );
  return W.useEffect(() => () => d(), [d]), W.useEffect(() => {
    if (i && u) {
      const p = (w) => x(w, u), g = (w) => x(w, i);
      return i.addEventListener("pointerleave", p), u.addEventListener("pointerleave", g), () => {
        i.removeEventListener("pointerleave", p), u.removeEventListener("pointerleave", g);
      };
    }
  }, [i, u, x, d]), W.useEffect(() => {
    if (f) {
      const p = (g) => {
        const w = g.target, C = { x: g.clientX, y: g.clientY }, b = (i == null ? void 0 : i.contains(w)) || (u == null ? void 0 : u.contains(w)), y = !Ku(C, f);
        b ? d() : y && (d(), a());
      };
      return document.addEventListener("pointermove", p), () => document.removeEventListener("pointermove", p);
    }
  }, [i, u, f, a, d]), /* @__PURE__ */ s.jsx(Zi, { ...e, ref: c });
}), [Hu, qu] = yn(Cr, { isInside: !1 }), Wu = /* @__PURE__ */ I0("TooltipContent"), Zi = W.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: c,
      onPointerDownOutside: f,
      ...l
    } = e, i = Sr(ir, r), a = vn(r), { onClose: u } = i;
    return W.useEffect(() => (document.addEventListener(Rs, u), () => document.removeEventListener(Rs, u)), [u]), W.useEffect(() => {
      if (i.trigger) {
        const m = (d) => {
          const x = d.target;
          x != null && x.contains(i.trigger) && u();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [i.trigger, u]), /* @__PURE__ */ s.jsx(
      bi,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ s.jsxs(
          Eu,
          {
            "data-state": i.stateAttribute,
            ...a,
            ...l,
            ref: t,
            style: {
              ...l.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ s.jsx(Wu, { children: n }),
              /* @__PURE__ */ s.jsx(Hu, { scope: r, isInside: !0, children: /* @__PURE__ */ s.jsx(Pu, { id: i.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
Xi.displayName = ir;
var Ji = "TooltipArrow", ec = W.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = vn(r);
    return qu(
      Ji,
      r
    ).isInside ? null : /* @__PURE__ */ s.jsx(ju, { ...o, ...n, ref: t });
  }
);
ec.displayName = Ji;
function Vu(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), c = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, c)) {
    case c:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Uu(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function Qu(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function Ku(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let c = 0, f = t.length - 1; c < t.length; f = c++) {
    const l = t[c], i = t[f], a = l.x, u = l.y, m = i.x, d = i.y;
    u > n != d > n && r < (m - a) * (n - u) / (d - u) + a && (o = !o);
  }
  return o;
}
function Gu(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Yu(t);
}
function Yu(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const c = t[t.length - 1], f = t[t.length - 2];
      if ((c.x - f.x) * (o.y - f.y) >= (c.y - f.y) * (o.x - f.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const c = r[r.length - 1], f = r[r.length - 2];
      if ((c.x - f.x) * (o.y - f.y) >= (c.y - f.y) * (o.x - f.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var Xu = Qi, Zu = Ki, Ju = Gi, ed = Yi, td = Xi, rd = ec;
const tc = [
  {
    id: "work",
    name: "Work",
    color: "#3B82F6",
    // blue-500
    description: "Work-related emails",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "personal",
    name: "Personal",
    color: "#10B981",
    // green-500
    description: "Personal emails",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "important",
    name: "Important",
    color: "#EF4444",
    // red-500
    description: "Important emails that need attention",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "travel",
    name: "Travel",
    color: "#8B5CF6",
    // purple-500
    description: "Travel-related emails",
    createdAt: "2024-01-01T00:00:00Z",
    isSystem: !0
  },
  {
    id: "urgent",
    name: "Urgent",
    color: "#F59E0B",
    // amber-500
    description: "Urgent emails requiring immediate attention",
    createdAt: "2024-01-10T00:00:00Z",
    isSystem: !1
  },
  {
    id: "clients",
    name: "Clients",
    color: "#06B6D4",
    // cyan-500
    description: "Client communications",
    createdAt: "2024-01-12T00:00:00Z",
    isSystem: !1
  },
  {
    id: "newsletters",
    name: "Newsletters",
    color: "#84CC16",
    // lime-500
    description: "Newsletter subscriptions",
    createdAt: "2024-01-14T00:00:00Z",
    isSystem: !1
  },
  {
    id: "$Forwarded",
    name: "Forwarded",
    color: "#06B6D4",
    // cyan-500
    description: "Forwarded emails",
    createdAt: "2024-01-15T00:00:00Z",
    isSystem: !0
  },
  {
    id: "NonJunk",
    name: "Non-Junk",
    color: "#10B981",
    // green-500 (same as personal for safety tag)
    description: "Recognized as not junk",
    createdAt: "2024-01-16T00:00:00Z",
    isSystem: !0
  },
  {
    id: "\\Seen",
    name: "Seen",
    color: "#3B82F6",
    // blue-500
    description: "Email has been read",
    createdAt: "2024-01-17T00:00:00Z",
    isSystem: !0
  }
], Bn = [
  "#3B82F6",
  // blue-500
  "#10B981",
  // green-500
  "#EF4444",
  // red-500
  "#8B5CF6",
  // purple-500
  "#F59E0B",
  // amber-500
  "#06B6D4",
  // cyan-500
  "#84CC16",
  // lime-500
  "#EC4899",
  // pink-500
  "#6366F1",
  // indigo-500
  "#14B8A6",
  // teal-500
  "#F97316",
  // orange-500
  "#A855F7",
  // violet-500
  "#9CA3AF"
  // gray-400 — newly added for `Seen`
], nd = ({ emailLabels: e }) => {
  const t = Be(null), [r, n] = ee(e.length), o = tc.filter(
    (i) => e.includes(i.id)
  );
  ye(() => {
    const i = t.current;
    if (!i) return;
    const a = Array.from(i.children);
    let u = 0;
    const m = i.offsetWidth;
    let d = 0;
    for (const x of a)
      if (u += x.offsetWidth + 4, u <= m)
        d++;
      else
        break;
    n(d > 0 ? d : 1);
  }, [o]);
  const c = r < o.length, f = c ? o.slice(0, r - 1) : o, l = c ? o.slice(r - 1) : [];
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "flex items-center gap-1 mt-2 overflow-hidden",
      ref: t,
      style: { whiteSpace: "nowrap" },
      children: [
        f.map((i) => /* @__PURE__ */ s.jsxs(
          "span",
          {
            className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
            style: {
              backgroundColor: `${i.color}15`,
              color: i.color,
              border: `1px solid ${i.color}30`
            },
            children: [
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: "w-2 h-2 rounded-full mr-1",
                  style: { backgroundColor: i.color }
                }
              ),
              i.name
            ]
          },
          i.id
        )),
        c && l.length > 0 && /* @__PURE__ */ s.jsx(Xu, { children: /* @__PURE__ */ s.jsxs(Zu, { children: [
          /* @__PURE__ */ s.jsx(Ju, { asChild: !0, children: /* @__PURE__ */ s.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 cursor-pointer", children: [
            "+",
            l.length,
            " more"
          ] }) }),
          /* @__PURE__ */ s.jsx(ed, { children: /* @__PURE__ */ s.jsxs(
            td,
            {
              side: "top",
              className: "bg-white p-2 rounded shadow text-xs text-gray-700 z-50",
              children: [
                /* @__PURE__ */ s.jsx("ul", { children: l.map((i) => /* @__PURE__ */ s.jsxs("li", { className: "mb-1 flex items-center", children: [
                  /* @__PURE__ */ s.jsx(
                    "span",
                    {
                      className: "w-2 h-2 rounded-full mr-2 inline-block",
                      style: { backgroundColor: i.color }
                    }
                  ),
                  i.name
                ] }, i.id)) }),
                /* @__PURE__ */ s.jsx(rd, { className: "fill-white" })
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
};
function We(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var sd = typeof Symbol == "function" && Symbol.observable || "@@observable", qo = sd, Fn = () => Math.random().toString(36).substring(7).split("").join("."), od = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Fn()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Fn()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Fn()}`
}, qt = od;
function mt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ad(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (ld(e))
    return "date";
  if (cd(e))
    return "error";
  const r = id(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function id(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function cd(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ld(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Bt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = ad(e)), t;
}
function rc(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? We(2) : `Expected the root reducer to be a function. Instead, received: '${Bt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? We(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? We(1) : `Expected the enhancer to be a function. Instead, received: '${Bt(r)}'`);
    return r(rc)(e, t);
  }
  let n = e, o = t, c = /* @__PURE__ */ new Map(), f = c, l = 0, i = !1;
  function a() {
    f === c && (f = /* @__PURE__ */ new Map(), c.forEach((w, C) => {
      f.set(C, w);
    }));
  }
  function u() {
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? We(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function m(w) {
    if (typeof w != "function")
      throw new Error(process.env.NODE_ENV === "production" ? We(4) : `Expected the listener to be a function. Instead, received: '${Bt(w)}'`);
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? We(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let C = !0;
    a();
    const b = l++;
    return f.set(b, w), function() {
      if (C) {
        if (i)
          throw new Error(process.env.NODE_ENV === "production" ? We(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        C = !1, a(), f.delete(b), c = null;
      }
    };
  }
  function d(w) {
    if (!mt(w))
      throw new Error(process.env.NODE_ENV === "production" ? We(7) : `Actions must be plain objects. Instead, the actual type was: '${Bt(w)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof w.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? We(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof w.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? We(17) : `Action "type" property must be a string. Instead, the actual type was: '${Bt(w.type)}'. Value was: '${w.type}' (stringified)`);
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? We(9) : "Reducers may not dispatch actions.");
    try {
      i = !0, o = n(o, w);
    } finally {
      i = !1;
    }
    return (c = f).forEach((b) => {
      b();
    }), w;
  }
  function x(w) {
    if (typeof w != "function")
      throw new Error(process.env.NODE_ENV === "production" ? We(10) : `Expected the nextReducer to be a function. Instead, received: '${Bt(w)}`);
    n = w, d({
      type: qt.REPLACE
    });
  }
  function p() {
    const w = m;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(C) {
        if (typeof C != "object" || C === null)
          throw new Error(process.env.NODE_ENV === "production" ? We(11) : `Expected the observer to be an object. Instead, received: '${Bt(C)}'`);
        function b() {
          const h = C;
          h.next && h.next(u());
        }
        return b(), {
          unsubscribe: w(b)
        };
      },
      [qo]() {
        return this;
      }
    };
  }
  return d({
    type: qt.INIT
  }), {
    dispatch: d,
    subscribe: m,
    getState: u,
    replaceReducer: x,
    [qo]: p
  };
}
function Wo(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ud(e, t, r, n) {
  const o = Object.keys(t), c = r && r.type === qt.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!mt(e))
    return `The ${c} has unexpected type of "${Bt(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const f = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (f.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === qt.REPLACE) && f.length > 0)
    return `Unexpected ${f.length > 1 ? "keys" : "key"} "${f.join('", "')}" found in ${c}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function dd(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: qt.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? We(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: qt.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? We(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${qt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function nc(e) {
  const t = Object.keys(e), r = {};
  for (let f = 0; f < t.length; f++) {
    const l = t[f];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && Wo(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let c;
  try {
    dd(r);
  } catch (f) {
    c = f;
  }
  return function(l = {}, i) {
    if (c)
      throw c;
    if (process.env.NODE_ENV !== "production") {
      const m = ud(l, r, i, o);
      m && Wo(m);
    }
    let a = !1;
    const u = {};
    for (let m = 0; m < n.length; m++) {
      const d = n[m], x = r[d], p = l[d], g = x(p, i);
      if (typeof g > "u") {
        const w = i && i.type;
        throw new Error(process.env.NODE_ENV === "production" ? We(14) : `When called with an action of type ${w ? `"${String(w)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[d] = g, a = a || g !== p;
    }
    return a = a || n.length !== Object.keys(l).length, a ? u : l;
  };
}
function sn(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function fd(...e) {
  return (t) => (r, n) => {
    const o = t(r, n);
    let c = () => {
      throw new Error(process.env.NODE_ENV === "production" ? We(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const f = {
      getState: o.getState,
      dispatch: (i, ...a) => c(i, ...a)
    }, l = e.map((i) => i(f));
    return c = sn(...l)(o.dispatch), {
      ...o,
      dispatch: c
    };
  };
}
function io(e) {
  return mt(e) && "type" in e && typeof e.type == "string";
}
var co = Symbol.for("immer-nothing"), gr = Symbol.for("immer-draftable"), Ye = Symbol.for("immer-state"), sc = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Ie(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = sc[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Vt = Object.getPrototypeOf;
function gt(e) {
  return !!e && !!e[Ye];
}
function lt(e) {
  var t;
  return e ? oc(e) || Array.isArray(e) || !!e[gr] || !!((t = e.constructor) != null && t[gr]) || Br(e) || Fr(e) : !1;
}
var xd = Object.prototype.constructor.toString();
function oc(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Vt(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === xd;
}
function hd(e) {
  return gt(e) || Ie(15, e), e[Ye].base_;
}
function Er(e, t) {
  Ut(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Ut(e) {
  const t = e[Ye];
  return t ? t.type_ : Array.isArray(e) ? 1 : Br(e) ? 2 : Fr(e) ? 3 : 0;
}
function jr(e, t) {
  return Ut(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Rn(e, t) {
  return Ut(e) === 2 ? e.get(t) : e[t];
}
function ac(e, t, r) {
  const n = Ut(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function pd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Br(e) {
  return e instanceof Map;
}
function Fr(e) {
  return e instanceof Set;
}
function $t(e) {
  return e.copy_ || e.base_;
}
function Ps(e, t) {
  if (Br(e))
    return new Map(e);
  if (Fr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = oc(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Ye];
    let o = Reflect.ownKeys(n);
    for (let c = 0; c < o.length; c++) {
      const f = o[c], l = n[f];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (n[f] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[f]
      });
    }
    return Object.create(Vt(e), n);
  } else {
    const n = Vt(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function lo(e, t = !1) {
  return bn(e) || gt(e) || !lt(e) || (Ut(e) > 1 && (e.set = e.add = e.clear = e.delete = md), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => lo(n, !0))), e;
}
function md() {
  Ie(2);
}
function bn(e) {
  return Object.isFrozen(e);
}
var Ts = {};
function Qt(e) {
  const t = Ts[e];
  return t || Ie(0, e), t;
}
function gd(e, t) {
  Ts[e] || (Ts[e] = t);
}
var Ar;
function ic() {
  return Ar;
}
function yd(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Vo(e, t) {
  t && (Qt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ms(e) {
  Ls(e), e.drafts_.forEach(vd), e.drafts_ = null;
}
function Ls(e) {
  e === Ar && (Ar = e.parent_);
}
function Uo(e) {
  return Ar = yd(Ar, e);
}
function vd(e) {
  const t = e[Ye];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Qo(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Ye].modified_ && (Ms(t), Ie(4)), lt(e) && (e = on(t, e), t.parent_ || an(t, e)), t.patches_ && Qt("Patches").generateReplacementPatches_(
    r[Ye].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = on(t, r, []), Ms(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== co ? e : void 0;
}
function on(e, t, r) {
  if (bn(t))
    return t;
  const n = t[Ye];
  if (!n)
    return Er(
      t,
      (o, c) => Ko(e, n, t, o, c, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return an(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let c = o, f = !1;
    n.type_ === 3 && (c = new Set(o), o.clear(), f = !0), Er(
      c,
      (l, i) => Ko(e, n, o, l, i, r, f)
    ), an(e, o, !1), r && e.patches_ && Qt("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Ko(e, t, r, n, o, c, f) {
  if (process.env.NODE_ENV !== "production" && o === r && Ie(5), gt(o)) {
    const l = c && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !jr(t.assigned_, n) ? c.concat(n) : void 0, i = on(e, o, l);
    if (ac(r, n, i), gt(i))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else f && r.add(o);
  if (lt(o) && !bn(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    on(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && an(e, o);
  }
}
function an(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && lo(t, r);
}
function bd(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ic(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, c = uo;
  r && (o = [n], c = Nr);
  const { revoke: f, proxy: l } = Proxy.revocable(o, c);
  return n.draft_ = l, n.revoke_ = f, l;
}
var uo = {
  get(e, t) {
    if (t === Ye)
      return e;
    const r = $t(e);
    if (!jr(r, t))
      return wd(e, r, t);
    const n = r[t];
    return e.finalized_ || !lt(n) ? n : n === On(e.base_, t) ? (Pn(e), e.copy_[t] = zs(n, e)) : n;
  },
  has(e, t) {
    return t in $t(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys($t(e));
  },
  set(e, t, r) {
    const n = cc($t(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = On($t(e), t), c = o == null ? void 0 : o[Ye];
      if (c && c.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (pd(r, o) && (r !== void 0 || jr(e.base_, t)))
        return !0;
      Pn(e), Is(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return On(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Pn(e), Is(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = $t(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Ie(11);
  },
  getPrototypeOf(e) {
    return Vt(e.base_);
  },
  setPrototypeOf() {
    Ie(12);
  }
}, Nr = {};
Er(uo, (e, t) => {
  Nr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Nr.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Ie(13), Nr.set.call(this, e, t, void 0);
};
Nr.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Ie(14), uo.set.call(this, e[0], t, r, e[0]);
};
function On(e, t) {
  const r = e[Ye];
  return (r ? $t(r) : e)[t];
}
function wd(e, t, r) {
  var o;
  const n = cc(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function cc(e, t) {
  if (!(t in e))
    return;
  let r = Vt(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Vt(r);
  }
}
function Is(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Is(e.parent_));
}
function Pn(e) {
  e.copy_ || (e.copy_ = Ps(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Cd = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const c = r;
        r = t;
        const f = this;
        return function(i = c, ...a) {
          return f.produce(i, (u) => r.call(this, u, ...a));
        };
      }
      typeof r != "function" && Ie(6), n !== void 0 && typeof n != "function" && Ie(7);
      let o;
      if (lt(t)) {
        const c = Uo(this), f = zs(t, void 0);
        let l = !0;
        try {
          o = r(f), l = !1;
        } finally {
          l ? Ms(c) : Ls(c);
        }
        return Vo(c, n), Qo(o, c);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === co && (o = void 0), this.autoFreeze_ && lo(o, !0), n) {
          const c = [], f = [];
          Qt("Patches").generateReplacementPatches_(t, o, c, f), n(c, f);
        }
        return o;
      } else
        Ie(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (f, ...l) => this.produceWithPatches(f, (i) => t(i, ...l));
      let n, o;
      return [this.produce(t, r, (f, l) => {
        n = f, o = l;
      }), n, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    lt(e) || Ie(8), gt(e) && (e = Ed(e));
    const t = Uo(this), r = zs(e, void 0);
    return r[Ye].isManual_ = !0, Ls(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Ye];
    (!r || !r.isManual_) && Ie(9);
    const { scope_: n } = r;
    return Vo(n, t), Qo(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Qt("Patches").applyPatches_;
    return gt(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function zs(e, t) {
  const r = Br(e) ? Qt("MapSet").proxyMap_(e, t) : Fr(e) ? Qt("MapSet").proxySet_(e, t) : bd(e, t);
  return (t ? t.scope_ : ic()).drafts_.push(r), r;
}
function Ed(e) {
  return gt(e) || Ie(10, e), lc(e);
}
function lc(e) {
  if (!lt(e) || bn(e))
    return e;
  const t = e[Ye];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Ps(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Ps(e, !0);
  return Er(r, (n, o) => {
    ac(r, n, lc(o));
  }), t && (t.finalized_ = !1), r;
}
function jd() {
  process.env.NODE_ENV !== "production" && sc.push(
    'Sets cannot have "replace" patches.',
    function(d) {
      return "Unsupported patch operation: " + d;
    },
    function(d) {
      return "Cannot apply patch, path doesn't resolve: " + d;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", r = "add", n = "remove";
  function o(d, x, p, g) {
    switch (d.type_) {
      case 0:
      case 2:
        return f(
          d,
          x,
          p,
          g
        );
      case 1:
        return c(d, x, p, g);
      case 3:
        return l(
          d,
          x,
          p,
          g
        );
    }
  }
  function c(d, x, p, g) {
    let { base_: w, assigned_: C } = d, b = d.copy_;
    b.length < w.length && ([w, b] = [b, w], [p, g] = [g, p]);
    for (let y = 0; y < w.length; y++)
      if (C[y] && b[y] !== w[y]) {
        const h = x.concat([y]);
        p.push({
          op: t,
          path: h,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(b[y])
        }), g.push({
          op: t,
          path: h,
          value: m(w[y])
        });
      }
    for (let y = w.length; y < b.length; y++) {
      const h = x.concat([y]);
      p.push({
        op: r,
        path: h,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(b[y])
      });
    }
    for (let y = b.length - 1; w.length <= y; --y) {
      const h = x.concat([y]);
      g.push({
        op: n,
        path: h
      });
    }
  }
  function f(d, x, p, g) {
    const { base_: w, copy_: C } = d;
    Er(d.assigned_, (b, y) => {
      const h = Rn(w, b), v = Rn(C, b), j = y ? jr(w, b) ? t : r : n;
      if (h === v && j === t)
        return;
      const A = x.concat(b);
      p.push(j === n ? { op: j, path: A } : { op: j, path: A, value: v }), g.push(
        j === r ? { op: n, path: A } : j === n ? { op: r, path: A, value: m(h) } : { op: t, path: A, value: m(h) }
      );
    });
  }
  function l(d, x, p, g) {
    let { base_: w, copy_: C } = d, b = 0;
    w.forEach((y) => {
      if (!C.has(y)) {
        const h = x.concat([b]);
        p.push({
          op: n,
          path: h,
          value: y
        }), g.unshift({
          op: r,
          path: h,
          value: y
        });
      }
      b++;
    }), b = 0, C.forEach((y) => {
      if (!w.has(y)) {
        const h = x.concat([b]);
        p.push({
          op: r,
          path: h,
          value: y
        }), g.unshift({
          op: n,
          path: h,
          value: y
        });
      }
      b++;
    });
  }
  function i(d, x, p, g) {
    p.push({
      op: t,
      path: [],
      value: x === co ? void 0 : x
    }), g.push({
      op: t,
      path: [],
      value: d
    });
  }
  function a(d, x) {
    return x.forEach((p) => {
      const { path: g, op: w } = p;
      let C = d;
      for (let v = 0; v < g.length - 1; v++) {
        const j = Ut(C);
        let A = g[v];
        typeof A != "string" && typeof A != "number" && (A = "" + A), (j === 0 || j === 1) && (A === "__proto__" || A === "constructor") && Ie(19), typeof C == "function" && A === "prototype" && Ie(19), C = Rn(C, A), typeof C != "object" && Ie(18, g.join("/"));
      }
      const b = Ut(C), y = u(p.value), h = g[g.length - 1];
      switch (w) {
        case t:
          switch (b) {
            case 2:
              return C.set(h, y);
            case 3:
              Ie(16);
            default:
              return C[h] = y;
          }
        case r:
          switch (b) {
            case 1:
              return h === "-" ? C.push(y) : C.splice(h, 0, y);
            case 2:
              return C.set(h, y);
            case 3:
              return C.add(y);
            default:
              return C[h] = y;
          }
        case n:
          switch (b) {
            case 1:
              return C.splice(h, 1);
            case 2:
              return C.delete(h);
            case 3:
              return C.delete(p.value);
            default:
              return delete C[h];
          }
        default:
          Ie(17, w);
      }
    }), d;
  }
  function u(d) {
    if (!lt(d))
      return d;
    if (Array.isArray(d))
      return d.map(u);
    if (Br(d))
      return new Map(
        Array.from(d.entries()).map(([p, g]) => [p, u(g)])
      );
    if (Fr(d))
      return new Set(Array.from(d).map(u));
    const x = Object.create(Vt(d));
    for (const p in d)
      x[p] = u(d[p]);
    return jr(d, gr) && (x[gr] = d[gr]), x;
  }
  function m(d) {
    return gt(d) ? u(d) : d;
  }
  gd("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: i
  });
}
var rt = new Cd(), Rr = rt.produce, uc = rt.produceWithPatches.bind(
  rt
);
rt.setAutoFreeze.bind(rt);
rt.setUseStrictShallowCopy.bind(rt);
var Go = rt.applyPatches.bind(rt);
rt.createDraft.bind(rt);
rt.finishDraft.bind(rt);
var Ad = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const o = {};
      e(o) === o && (n = !0);
    } catch {
    }
    if (n) {
      let o;
      try {
        throw new Error();
      } catch (c) {
        ({ stack: o } = c);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, Nd = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: c, inputSelectorResultsCopy: f } = e, l = n(() => ({}), ...o);
  if (!(l.apply(null, c) === l.apply(null, f))) {
    let a;
    try {
      throw new Error();
    } catch (u) {
      ({ stack: a } = u);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: c,
        secondInputs: f,
        stack: a
      }
    );
  }
}, _d = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function kd(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Dd(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Sd(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Yo = (e) => Array.isArray(e) ? e : [e];
function Bd(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Sd(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Xo(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var Fd = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ..._d,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: Ad
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: Nd
    }
  };
}, Rd = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Od = typeof WeakRef < "u" ? WeakRef : Rd, Pd = 0, Zo = 1;
function Ir() {
  return {
    s: Pd,
    v: void 0,
    o: null,
    p: null
  };
}
function cn(e, t = {}) {
  let r = Ir();
  const { resultEqualityCheck: n } = t;
  let o, c = 0;
  function f() {
    var m;
    let l = r;
    const { length: i } = arguments;
    for (let d = 0, x = i; d < x; d++) {
      const p = arguments[d];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let g = l.o;
        g === null && (l.o = g = /* @__PURE__ */ new WeakMap());
        const w = g.get(p);
        w === void 0 ? (l = Ir(), g.set(p, l)) : l = w;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const w = g.get(p);
        w === void 0 ? (l = Ir(), g.set(p, l)) : l = w;
      }
    }
    const a = l;
    let u;
    if (l.s === Zo)
      u = l.v;
    else if (u = e.apply(null, arguments), c++, n) {
      const d = ((m = o == null ? void 0 : o.deref) == null ? void 0 : m.call(o)) ?? o;
      d != null && n(d, u) && (u = d, c !== 0 && c--), o = typeof u == "object" && u !== null || typeof u == "function" ? new Od(u) : u;
    }
    return a.s = Zo, a.v = u, u;
  }
  return f.clearCache = () => {
    r = Ir(), f.resetResultsCount();
  }, f.resultsCount = () => c, f.resetResultsCount = () => {
    c = 0;
  }, f;
}
function Td(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let c = 0, f = 0, l, i = {}, a = o.pop();
    typeof a == "object" && (i = a, a = o.pop()), kd(
      a,
      `createSelector expects an output function after the inputs, but received: [${typeof a}]`
    );
    const u = {
      ...r,
      ...i
    }, {
      memoize: m,
      memoizeOptions: d = [],
      argsMemoize: x = cn,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, w = Yo(d), C = Yo(p), b = Bd(o), y = m(function() {
      return c++, a.apply(
        null,
        arguments
      );
    }, ...w);
    let h = !0;
    const v = x(function() {
      f++;
      const A = Xo(
        b,
        arguments
      );
      if (l = y.apply(null, A), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: S, inputStabilityCheck: _ } = Fd(h, g);
        if (S.shouldRun && S.run(
          a,
          A,
          l
        ), _.shouldRun) {
          const E = Xo(
            b,
            arguments
          );
          _.run(
            { inputSelectorResults: A, inputSelectorResultsCopy: E },
            { memoize: m, memoizeOptions: w },
            arguments
          );
        }
        h && (h = !1);
      }
      return l;
    }, ...C);
    return Object.assign(v, {
      resultFunc: a,
      memoizedResultFunc: y,
      dependencies: b,
      dependencyRecomputations: () => f,
      resetDependencyRecomputations: () => {
        f = 0;
      },
      lastResult: () => l,
      recomputations: () => c,
      resetRecomputations: () => {
        c = 0;
      },
      memoize: m,
      argsMemoize: x
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var fo = /* @__PURE__ */ Td(cn), Md = Object.assign(
  (e, t = fo) => {
    Dd(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (c) => e[c]
    );
    return t(
      n,
      (...c) => c.reduce((f, l, i) => (f[r[i]] = l, f), {})
    );
  },
  { withTypes: () => Md }
);
function dc(e) {
  return ({ dispatch: r, getState: n }) => (o) => (c) => typeof c == "function" ? c(r, n, e) : o(c);
}
var Ld = dc(), Id = dc, zd = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? sn : sn.apply(null, arguments);
}, fc = (e) => e && typeof e.match == "function";
function at(e, t) {
  function r(...n) {
    if (t) {
      let o = t(...n);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? _e(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => io(n) && n.type === e, r;
}
function $d(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  fc(e);
}
function Hd(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function qd(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = $d
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(Hd(n.type)), r(n));
}
function xc(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const o = Date.now();
      try {
        return n();
      } finally {
        const c = Date.now();
        r += c - o;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var hc = class mr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, mr.prototype);
  }
  static get [Symbol.species]() {
    return mr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new mr(...t[0].concat(this)) : new mr(...t.concat(this));
  }
};
function Jo(e) {
  return lt(e) ? Rr(e, () => {
  }) : e;
}
function zr(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Wd(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Vd(e, t, r) {
  const n = pc(e, t, r);
  return {
    detectMutations() {
      return mc(e, t, n, r);
    }
  };
}
function pc(e, t = [], r, n = "", o = /* @__PURE__ */ new Set()) {
  const c = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), c.children = {};
    for (const f in r) {
      const l = n ? n + "." + f : f;
      t.length && t.indexOf(l) !== -1 || (c.children[f] = pc(e, t, r[f], l));
    }
  }
  return c;
}
function mc(e, t = [], r, n, o = !1, c = "") {
  const f = r ? r.value : void 0, l = f === n;
  if (o && !l && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: c
    };
  if (e(f) || e(n))
    return {
      wasMutated: !1
    };
  const i = {};
  for (let u in r.children)
    i[u] = !0;
  for (let u in n)
    i[u] = !0;
  const a = t.length > 0;
  for (let u in i) {
    const m = c ? c + "." + u : u;
    if (a && t.some((p) => p instanceof RegExp ? p.test(m) : m === p))
      continue;
    const d = mc(e, t, r.children[u], n[u], l, m);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function Ud(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(l, i, a, u) {
      return JSON.stringify(l, r(i, u), a);
    }, r = function(l, i) {
      let a = [], u = [];
      return i || (i = function(m, d) {
        return a[0] === d ? "[Circular ~]" : "[Circular ~." + u.slice(0, a.indexOf(d)).join(".") + "]";
      }), function(m, d) {
        if (a.length > 0) {
          var x = a.indexOf(this);
          ~x ? a.splice(x + 1) : a.push(this), ~x ? u.splice(x, 1 / 0, m) : u.push(m), ~a.indexOf(d) && (d = i.call(this, m, d));
        } else a.push(d);
        return l == null ? d : l.call(this, m, d);
      };
    }, {
      isImmutable: n = Wd,
      ignoredPaths: o,
      warnAfter: c = 32
    } = e;
    const f = Vd.bind(null, n, o);
    return ({
      getState: l
    }) => {
      let i = l(), a = f(i), u;
      return (m) => (d) => {
        const x = xc(c, "ImmutableStateInvariantMiddleware");
        x.measureTime(() => {
          if (i = l(), u = a.detectMutations(), a = f(i), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? _e(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = m(d);
        return x.measureTime(() => {
          if (i = l(), u = a.detectMutations(), a = f(i), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? _e(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), x.warnIfExceeded(), p;
      };
    };
  }
}
function gc(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || mt(e);
}
function $s(e, t = "", r = gc, n, o = [], c) {
  let f;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || c != null && c.has(e)) return !1;
  const l = n != null ? n(e) : Object.entries(e), i = o.length > 0;
  for (const [a, u] of l) {
    const m = t ? t + "." + a : a;
    if (!(i && o.some((x) => x instanceof RegExp ? x.test(m) : m === x))) {
      if (!r(u))
        return {
          keyPath: m,
          value: u
        };
      if (typeof u == "object" && (f = $s(u, m, r, n, o, c), f))
        return f;
    }
  }
  return c && yc(e) && c.add(e), !1;
}
function yc(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !yc(t))
      return !1;
  return !0;
}
function Qd(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = gc,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: c = [],
      warnAfter: f = 32,
      ignoreState: l = !1,
      ignoreActions: i = !1,
      disableCache: a = !1
    } = e, u = !a && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (d) => (x) => {
      if (!io(x))
        return d(x);
      const p = d(x), g = xc(f, "SerializableStateInvariantMiddleware");
      return !i && !(n.length && n.indexOf(x.type) !== -1) && g.measureTime(() => {
        const w = $s(x, "", t, r, o, u);
        if (w) {
          const {
            keyPath: C,
            value: b
          } = w;
          console.error(`A non-serializable value was detected in an action, in the path: \`${C}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, x, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (g.measureTime(() => {
        const w = m.getState(), C = $s(w, "", t, r, c, u);
        if (C) {
          const {
            keyPath: b,
            value: y
          } = C;
          console.error(`A non-serializable value was detected in the state, in the path: \`${b}\`. Value:`, y, `
Take a look at the reducer(s) handling this action type: ${x.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), p;
    };
  }
}
function $r(e) {
  return typeof e == "boolean";
}
var Kd = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: c = !0
  } = t ?? {};
  let f = new hc();
  if (r && ($r(r) ? f.push(Ld) : f.push(Id(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      $r(n) || (l = n), f.unshift(Ud(l));
    }
    if (o) {
      let l = {};
      $r(o) || (l = o), f.push(Qd(l));
    }
    if (c) {
      let l = {};
      $r(c) || (l = c), f.unshift(qd(l));
    }
  }
  return f;
}, wn = "RTK_autoBatch", xr = () => (e) => ({
  payload: e,
  meta: {
    [wn]: !0
  }
}), ea = (e) => (t) => {
  setTimeout(t, e);
}, Gd = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let o = !0, c = !1, f = !1;
  const l = /* @__PURE__ */ new Set(), i = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ea(10)
  ) : e.type === "callback" ? e.queueNotification : ea(e.timeout), a = () => {
    f = !1, c && (c = !1, l.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const m = () => o && u(), d = n.subscribe(m);
      return l.add(u), () => {
        d(), l.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var m;
      try {
        return o = !((m = u == null ? void 0 : u.meta) != null && m[wn]), c = !o, c && (f || (f = !0, i(a))), n.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Yd = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let o = new hc(e);
  return n && o.push(Gd(typeof n == "object" ? n : void 0)), o;
};
function Xd(e) {
  const t = Kd(), {
    reducer: r = void 0,
    middleware: n,
    devTools: o = !0,
    duplicateMiddlewareCheck: c = !0,
    preloadedState: f = void 0,
    enhancers: l = void 0
  } = e || {};
  let i;
  if (typeof r == "function")
    i = r;
  else if (mt(r))
    i = nc(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? _e(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? _e(2) : "`middleware` field must be a callback");
  let a;
  if (typeof n == "function") {
    if (a = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(a))
      throw new Error(process.env.NODE_ENV === "production" ? _e(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    a = t();
  if (process.env.NODE_ENV !== "production" && a.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? _e(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && c) {
    let g = /* @__PURE__ */ new Set();
    a.forEach((w) => {
      if (g.has(w))
        throw new Error(process.env.NODE_ENV === "production" ? _e(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      g.add(w);
    });
  }
  let u = sn;
  o && (u = zd({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const m = fd(...a), d = Yd(m);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? _e(5) : "`enhancers` field must be a callback");
  let x = typeof l == "function" ? l(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(x))
    throw new Error(process.env.NODE_ENV === "production" ? _e(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && x.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? _e(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && a.length && !x.includes(m) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = u(...x);
  return rc(i, f, p);
}
function vc(e) {
  const t = {}, r = [];
  let n;
  const o = {
    addCase(c, f) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? _e(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? _e(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof c == "string" ? c : c.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? _e(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? _e(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = f, o;
    },
    addMatcher(c, f) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? _e(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: c,
        reducer: f
      }), o;
    },
    addDefaultCase(c) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? _e(31) : "`builder.addDefaultCase` can only be called once");
      return n = c, o;
    }
  };
  return e(o), [t, r, n];
}
function Zd(e) {
  return typeof e == "function";
}
function Jd(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? _e(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, o] = vc(t), c;
  if (Zd(e))
    c = () => Jo(e());
  else {
    const l = Jo(e);
    c = () => l;
  }
  function f(l = c(), i) {
    let a = [r[i.type], ...n.filter(({
      matcher: u
    }) => u(i)).map(({
      reducer: u
    }) => u)];
    return a.filter((u) => !!u).length === 0 && (a = [o]), a.reduce((u, m) => {
      if (m)
        if (gt(u)) {
          const x = m(u, i);
          return x === void 0 ? u : x;
        } else {
          if (lt(u))
            return Rr(u, (d) => m(d, i));
          {
            const d = m(u, i);
            if (d === void 0) {
              if (u === null)
                return u;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return u;
    }, l);
  }
  return f.getInitialState = c, f;
}
var bc = (e, t) => fc(e) ? e.match(t) : e(t);
function Nt(...e) {
  return (t) => e.some((r) => bc(r, t));
}
function yr(...e) {
  return (t) => e.every((r) => bc(r, t));
}
function Cn(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string", n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function Or(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function xo(...e) {
  return e.length === 0 ? (t) => Cn(t, ["pending"]) : Or(e) ? Nt(...e.map((t) => t.pending)) : xo()(e[0]);
}
function cr(...e) {
  return e.length === 0 ? (t) => Cn(t, ["rejected"]) : Or(e) ? Nt(...e.map((t) => t.rejected)) : cr()(e[0]);
}
function En(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? yr(cr(...e), t) : Or(e) ? yr(cr(...e), t) : En()(e[0]);
}
function Pt(...e) {
  return e.length === 0 ? (t) => Cn(t, ["fulfilled"]) : Or(e) ? Nt(...e.map((t) => t.fulfilled)) : Pt()(e[0]);
}
function Hs(...e) {
  return e.length === 0 ? (t) => Cn(t, ["pending", "fulfilled", "rejected"]) : Or(e) ? Nt(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : Hs()(e[0]);
}
var ef = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ho = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += ef[Math.random() * 64 | 0];
  return t;
}, tf = ["name", "message", "stack", "code"], Tn = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Tr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, ta = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Tr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, rf = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of tf)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, ra = "External signal was aborted", na = /* @__PURE__ */ (() => {
  function e(t, r, n) {
    const o = at(t + "/fulfilled", (i, a, u, m) => ({
      payload: i,
      meta: {
        ...m || {},
        arg: u,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), c = at(t + "/pending", (i, a, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: a,
        requestId: i,
        requestStatus: "pending"
      }
    })), f = at(t + "/rejected", (i, a, u, m, d) => ({
      payload: m,
      error: (n && n.serializeError || rf)(i || "Rejected"),
      meta: {
        ...d || {},
        arg: u,
        requestId: a,
        rejectedWithValue: !!m,
        requestStatus: "rejected",
        aborted: (i == null ? void 0 : i.name) === "AbortError",
        condition: (i == null ? void 0 : i.name) === "ConditionError"
      }
    }));
    function l(i, {
      signal: a
    } = {}) {
      return (u, m, d) => {
        const x = n != null && n.idGenerator ? n.idGenerator(i) : ho(), p = new AbortController();
        let g, w;
        function C(y) {
          w = y, p.abort();
        }
        a && (a.aborted ? C(ra) : a.addEventListener("abort", () => C(ra), {
          once: !0
        }));
        const b = async function() {
          var v, j;
          let y;
          try {
            let A = (v = n == null ? void 0 : n.condition) == null ? void 0 : v.call(n, i, {
              getState: m,
              extra: d
            });
            if (sf(A) && (A = await A), A === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const S = new Promise((_, E) => {
              g = () => {
                E({
                  name: "AbortError",
                  message: w || "Aborted"
                });
              }, p.signal.addEventListener("abort", g);
            });
            u(c(x, i, (j = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : j.call(n, {
              requestId: x,
              arg: i
            }, {
              getState: m,
              extra: d
            }))), y = await Promise.race([S, Promise.resolve(r(i, {
              dispatch: u,
              getState: m,
              extra: d,
              requestId: x,
              signal: p.signal,
              abort: C,
              rejectWithValue: (_, E) => new Tn(_, E),
              fulfillWithValue: (_, E) => new ta(_, E)
            })).then((_) => {
              if (_ instanceof Tn)
                throw _;
              return _ instanceof ta ? o(_.payload, x, i, _.meta) : o(_, x, i);
            })]);
          } catch (A) {
            y = A instanceof Tn ? f(null, x, i, A.payload, A.meta) : f(A, x, i);
          } finally {
            g && p.signal.removeEventListener("abort", g);
          }
          return n && !n.dispatchConditionRejection && f.match(y) && y.meta.condition || u(y), y;
        }();
        return Object.assign(b, {
          abort: C,
          requestId: x,
          arg: i,
          unwrap() {
            return b.then(nf);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: c,
      rejected: f,
      fulfilled: o,
      settled: Nt(f, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function nf(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function sf(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var of = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function af(e, t) {
  return `${e}/${t}`;
}
function cf({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[of];
  return function(o) {
    const {
      name: c,
      reducerPath: f = c
    } = o;
    if (!c)
      throw new Error(process.env.NODE_ENV === "production" ? _e(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const l = (typeof o.reducers == "function" ? o.reducers(uf()) : o.reducers) || {}, i = Object.keys(l), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(h, v) {
        const j = typeof h == "string" ? h : h.type;
        if (!j)
          throw new Error(process.env.NODE_ENV === "production" ? _e(12) : "`context.addCase` cannot be called with an empty action type");
        if (j in a.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? _e(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + j);
        return a.sliceCaseReducersByType[j] = v, u;
      },
      addMatcher(h, v) {
        return a.sliceMatchers.push({
          matcher: h,
          reducer: v
        }), u;
      },
      exposeAction(h, v) {
        return a.actionCreators[h] = v, u;
      },
      exposeCaseReducer(h, v) {
        return a.sliceCaseReducersByName[h] = v, u;
      }
    };
    i.forEach((h) => {
      const v = l[h], j = {
        reducerName: h,
        type: af(c, h),
        createNotation: typeof o.reducers == "function"
      };
      ff(v) ? hf(j, v, u, t) : df(j, v, u);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? _e(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [h = {}, v = [], j = void 0] = typeof o.extraReducers == "function" ? vc(o.extraReducers) : [o.extraReducers], A = {
        ...h,
        ...a.sliceCaseReducersByType
      };
      return Jd(o.initialState, (S) => {
        for (let _ in A)
          S.addCase(_, A[_]);
        for (let _ of a.sliceMatchers)
          S.addMatcher(_.matcher, _.reducer);
        for (let _ of v)
          S.addMatcher(_.matcher, _.reducer);
        j && S.addDefaultCase(j);
      });
    }
    const d = (h) => h, x = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let g;
    function w(h, v) {
      return g || (g = m()), g(h, v);
    }
    function C() {
      return g || (g = m()), g.getInitialState();
    }
    function b(h, v = !1) {
      function j(S) {
        let _ = S[h];
        if (typeof _ > "u") {
          if (v)
            _ = zr(p, j, C);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? _e(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return _;
      }
      function A(S = d) {
        const _ = zr(x, v, () => /* @__PURE__ */ new WeakMap());
        return zr(_, S, () => {
          const E = {};
          for (const [N, D] of Object.entries(o.selectors ?? {}))
            E[N] = lf(D, S, () => zr(p, S, C), v);
          return E;
        });
      }
      return {
        reducerPath: h,
        getSelectors: A,
        get selectors() {
          return A(j);
        },
        selectSlice: j
      };
    }
    const y = {
      name: c,
      reducer: w,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: C,
      ...b(f),
      injectInto(h, {
        reducerPath: v,
        ...j
      } = {}) {
        const A = v ?? f;
        return h.inject({
          reducerPath: A,
          reducer: w
        }, j), {
          ...y,
          ...b(A, !0)
        };
      }
    };
    return y;
  };
}
function lf(e, t, r, n) {
  function o(c, ...f) {
    let l = t(c);
    if (typeof l > "u") {
      if (n)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? _e(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...f);
  }
  return o.unwrapped = e, o;
}
var Ht = /* @__PURE__ */ cf();
function uf() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function df({
  type: e,
  reducerName: t,
  createNotation: r
}, n, o) {
  let c, f;
  if ("reducer" in n) {
    if (r && !xf(n))
      throw new Error(process.env.NODE_ENV === "production" ? _e(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    c = n.reducer, f = n.prepare;
  } else
    c = n;
  o.addCase(e, c).exposeCaseReducer(t, c).exposeAction(t, f ? at(e, f) : at(e));
}
function ff(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function xf(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function hf({
  type: e,
  reducerName: t
}, r, n, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? _e(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: c,
    fulfilled: f,
    pending: l,
    rejected: i,
    settled: a,
    options: u
  } = r, m = o(e, c, u);
  n.exposeAction(t, m), f && n.addCase(m.fulfilled, f), l && n.addCase(m.pending, l), i && n.addCase(m.rejected, i), a && n.addMatcher(m.settled, a), n.exposeCaseReducer(t, {
    fulfilled: f || Hr,
    pending: l || Hr,
    rejected: i || Hr,
    settled: a || Hr
  });
}
function Hr() {
}
function _e(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var pf = class extends Error {
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(t) {
    super(t[0].message);
    /**
     * The schema issues.
     */
    Tr(this, "issues");
    this.name = "SchemaError", this.issues = t;
  }
}, wc = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(wc || {});
function sa(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var oa = mt;
function Cc(e, t) {
  if (e === t || !(oa(e) && oa(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let o = r.length === n.length;
  const c = Array.isArray(t) ? [] : {};
  for (const f of r)
    c[f] = Cc(e[f], t[f]), o && (o = e[f] === c[f]);
  return o ? e : c;
}
function sr(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var aa = (e) => [].concat(...e);
function mf(e) {
  return new RegExp("(^|:)//").test(e);
}
function gf() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function ln(e) {
  return e != null;
}
function yf() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var vf = (e) => e.replace(/\/$/, ""), bf = (e) => e.replace(/^\//, "");
function wf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (mf(t))
    return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = vf(e), t = bf(t), `${e}${r}${t}`;
}
function Cf(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var ia = (...e) => fetch(...e), Ef = (e) => e.status >= 200 && e.status <= 299, jf = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function ca(e) {
  if (!mt(e))
    return e;
  const t = {
    ...e
  };
  for (const [r, n] of Object.entries(t))
    n === void 0 && delete t[r];
  return t;
}
function Af({
  baseUrl: e,
  prepareHeaders: t = (m) => m,
  fetchFn: r = ia,
  paramsSerializer: n,
  isJsonContentType: o = jf,
  jsonContentType: c = "application/json",
  jsonReplacer: f,
  timeout: l,
  responseHandler: i,
  validateStatus: a,
  ...u
} = {}) {
  return typeof fetch > "u" && r === ia && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (d, x, p) => {
    const {
      getState: g,
      extra: w,
      endpoint: C,
      forced: b,
      type: y
    } = x;
    let h, {
      url: v,
      headers: j = new Headers(u.headers),
      params: A = void 0,
      responseHandler: S = i ?? "json",
      validateStatus: _ = a ?? Ef,
      timeout: E = l,
      ...N
    } = typeof d == "string" ? {
      url: d
    } : d, D, k = x.signal;
    E && (D = new AbortController(), x.signal.addEventListener("abort", D.abort), k = D.signal);
    let B = {
      ...u,
      signal: k,
      ...N
    };
    j = new Headers(ca(j)), B.headers = await t(j, {
      getState: g,
      arg: d,
      extra: w,
      endpoint: C,
      forced: b,
      type: y,
      extraOptions: p
    }) || j;
    const R = (M) => typeof M == "object" && (mt(M) || Array.isArray(M) || typeof M.toJSON == "function");
    if (!B.headers.has("content-type") && R(B.body) && B.headers.set("content-type", c), R(B.body) && o(B.headers) && (B.body = JSON.stringify(B.body, f)), A) {
      const M = ~v.indexOf("?") ? "&" : "?", Z = n ? n(A) : new URLSearchParams(ca(A));
      v += M + Z;
    }
    v = wf(e, v);
    const T = new Request(v, B);
    h = {
      request: new Request(v, B)
    };
    let I, L = !1, K = D && setTimeout(() => {
      L = !0, D.abort();
    }, E);
    try {
      I = await r(T);
    } catch (M) {
      return {
        error: {
          status: L ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(M)
        },
        meta: h
      };
    } finally {
      K && clearTimeout(K), D == null || D.signal.removeEventListener("abort", D.abort);
    }
    const O = I.clone();
    h.response = O;
    let z, V = "";
    try {
      let M;
      if (await Promise.all([
        m(I, S).then((Z) => z = Z, (Z) => M = Z),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        O.text().then((Z) => V = Z, () => {
        })
      ]), M) throw M;
    } catch (M) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: I.status,
          data: V,
          error: String(M)
        },
        meta: h
      };
    }
    return _(I, z) ? {
      data: z,
      meta: h
    } : {
      error: {
        status: I.status,
        data: z
      },
      meta: h
    };
  };
  async function m(d, x) {
    if (typeof x == "function")
      return x(d);
    if (x === "content-type" && (x = o(d.headers) ? "json" : "text"), x === "json") {
      const p = await d.text();
      return p.length ? JSON.parse(p) : null;
    }
    return d.text();
  }
}
var la = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, po = /* @__PURE__ */ at("__rtkq/focused"), Ec = /* @__PURE__ */ at("__rtkq/unfocused"), mo = /* @__PURE__ */ at("__rtkq/online"), jc = /* @__PURE__ */ at("__rtkq/offline");
function jn(e) {
  return e.type === "query";
}
function Nf(e) {
  return e.type === "mutation";
}
function Pr(e) {
  return e.type === "infinitequery";
}
function un(e) {
  return jn(e) || Pr(e);
}
function go(e, t, r, n, o, c) {
  return _f(e) ? e(t, r, n, o).filter(ln).map(qs).map(c) : Array.isArray(e) ? e.map(qs).map(c) : [];
}
function _f(e) {
  return typeof e == "function";
}
function qs(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function kf(e, t) {
  return e.catch(t);
}
var _r = Symbol("forceQueryFn"), Ws = (e) => typeof e[_r] == "function";
function Df({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: n,
  api: o,
  context: c
}) {
  const f = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: i,
    removeMutationResult: a,
    updateSubscriptionOptions: u
  } = o.internalActions;
  return {
    buildInitiateQuery: C,
    buildInitiateInfiniteQuery: b,
    buildInitiateMutation: y,
    getRunningQueryThunk: m,
    getRunningMutationThunk: d,
    getRunningQueriesThunk: x,
    getRunningMutationsThunk: p
  };
  function m(h, v) {
    return (j) => {
      var _;
      const A = c.endpointDefinitions[h], S = e({
        queryArgs: v,
        endpointDefinition: A,
        endpointName: h
      });
      return (_ = f.get(j)) == null ? void 0 : _[S];
    };
  }
  function d(h, v) {
    return (j) => {
      var A;
      return (A = l.get(j)) == null ? void 0 : A[v];
    };
  }
  function x() {
    return (h) => Object.values(f.get(h) || {}).filter(ln);
  }
  function p() {
    return (h) => Object.values(l.get(h) || {}).filter(ln);
  }
  function g(h) {
    if (process.env.NODE_ENV !== "production") {
      if (g.triggered) return;
      const v = h(o.internalActions.internal_getRTKQSubscriptions());
      if (g.triggered = !0, typeof v != "object" || typeof (v == null ? void 0 : v.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? _e(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function w(h, v) {
    const j = (A, {
      subscribe: S = !0,
      forceRefetch: _,
      subscriptionOptions: E,
      [_r]: N,
      ...D
    } = {}) => (k, B) => {
      var G;
      const R = e({
        queryArgs: A,
        endpointDefinition: v,
        endpointName: h
      });
      let T;
      const q = {
        ...D,
        type: "query",
        subscribe: S,
        forceRefetch: _,
        subscriptionOptions: E,
        endpointName: h,
        originalArgs: A,
        queryCacheKey: R,
        [_r]: N
      };
      if (jn(v))
        T = t(q);
      else {
        const {
          direction: se,
          initialPageParam: Ee
        } = D;
        T = r({
          ...q,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: se,
          initialPageParam: Ee
        });
      }
      const I = o.endpoints[h].select(A), L = k(T), K = I(B());
      g(k);
      const {
        requestId: O,
        abort: z
      } = L, V = K.requestId !== O, M = (G = f.get(k)) == null ? void 0 : G[R], Z = () => I(B()), ne = Object.assign(N ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        L.then(Z)
      ) : V && !M ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(K)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([M, L]).then(Z)
      ), {
        arg: A,
        requestId: O,
        subscriptionOptions: E,
        queryCacheKey: R,
        abort: z,
        async unwrap() {
          const se = await ne;
          if (se.isError)
            throw se.error;
          return se.data;
        },
        refetch: () => k(j(A, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          S && k(i({
            queryCacheKey: R,
            requestId: O
          }));
        },
        updateSubscriptionOptions(se) {
          ne.subscriptionOptions = se, k(u({
            endpointName: h,
            requestId: O,
            queryCacheKey: R,
            options: se
          }));
        }
      });
      if (!M && !V && !N) {
        const se = Cf(f, k, {});
        se[R] = ne, ne.then(() => {
          delete se[R], sr(se) || f.delete(k);
        });
      }
      return ne;
    };
    return j;
  }
  function C(h, v) {
    return w(h, v);
  }
  function b(h, v) {
    return w(h, v);
  }
  function y(h) {
    return (v, {
      track: j = !0,
      fixedCacheKey: A
    } = {}) => (S, _) => {
      const E = n({
        type: "mutation",
        endpointName: h,
        originalArgs: v,
        track: j,
        fixedCacheKey: A
      }), N = S(E);
      g(S);
      const {
        requestId: D,
        abort: k,
        unwrap: B
      } = N, R = kf(N.unwrap().then((L) => ({
        data: L
      })), (L) => ({
        error: L
      })), T = () => {
        S(a({
          requestId: D,
          fixedCacheKey: A
        }));
      }, q = Object.assign(R, {
        arg: N.arg,
        requestId: D,
        abort: k,
        unwrap: B,
        reset: T
      }), I = l.get(S) || {};
      return l.set(S, I), I[D] = q, q.then(() => {
        delete I[D], sr(I) || l.delete(S);
      }), A && (I[A] = q, q.then(() => {
        I[A] === q && (delete I[A], sr(I) || l.delete(S));
      })), q;
    };
  }
}
var Ac = class extends pf {
  constructor(e, t, r, n) {
    super(e), this.value = t, this.schemaName = r, this._bqMeta = n;
  }
};
async function zt(e, t, r, n) {
  const o = await e["~standard"].validate(t);
  if (o.issues)
    throw new Ac(o.issues, t, r, n);
  return o.value;
}
function Sf(e) {
  return e;
}
var hr = (e = {}) => ({
  ...e,
  [wn]: !0
});
function Bf({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: o,
  assertTagType: c,
  selectors: f,
  onSchemaFailure: l,
  catchSchemaFailure: i,
  skipSchemaValidation: a
}) {
  const u = (N, D, k, B) => (R, T) => {
    const q = r[N], I = n({
      queryArgs: D,
      endpointDefinition: q,
      endpointName: N
    });
    if (R(o.internalActions.queryResultPatched({
      queryCacheKey: I,
      patches: k
    })), !B)
      return;
    const L = o.endpoints[N].select(D)(
      // Work around TS 4.1 mismatch
      T()
    ), K = go(q.providesTags, L.data, void 0, D, {}, c);
    R(o.internalActions.updateProvidedBy([{
      queryCacheKey: I,
      providedTags: K
    }]));
  };
  function m(N, D, k = 0) {
    const B = [D, ...N];
    return k && B.length > k ? B.slice(0, -1) : B;
  }
  function d(N, D, k = 0) {
    const B = [...N, D];
    return k && B.length > k ? B.slice(1) : B;
  }
  const x = (N, D, k, B = !0) => (R, T) => {
    const I = o.endpoints[N].select(D)(
      // Work around TS 4.1 mismatch
      T()
    ), L = {
      patches: [],
      inversePatches: [],
      undo: () => R(o.util.patchQueryData(N, D, L.inversePatches, B))
    };
    if (I.status === "uninitialized")
      return L;
    let K;
    if ("data" in I)
      if (lt(I.data)) {
        const [O, z, V] = uc(I.data, k);
        L.patches.push(...z), L.inversePatches.push(...V), K = O;
      } else
        K = k(I.data), L.patches.push({
          op: "replace",
          path: [],
          value: K
        }), L.inversePatches.push({
          op: "replace",
          path: [],
          value: I.data
        });
    return L.patches.length === 0 || R(o.util.patchQueryData(N, D, L.patches, B)), L;
  }, p = (N, D, k) => (B) => B(o.endpoints[N].initiate(D, {
    subscribe: !1,
    forceRefetch: !0,
    [_r]: () => ({
      data: k
    })
  })), g = (N, D) => N.query && N[D] ? N[D] : Sf, w = async (N, {
    signal: D,
    abort: k,
    rejectWithValue: B,
    fulfillWithValue: R,
    dispatch: T,
    getState: q,
    extra: I
  }) => {
    var z, V;
    const L = r[N.endpointName], {
      metaSchema: K,
      skipSchemaValidation: O = a
    } = L;
    try {
      let M = g(L, "transformResponse");
      const Z = {
        signal: D,
        abort: k,
        dispatch: T,
        getState: q,
        extra: I,
        endpoint: N.endpointName,
        type: N.type,
        forced: N.type === "query" ? C(N, q()) : void 0,
        queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
      }, ne = N.type === "query" ? N[_r] : void 0;
      let G;
      const se = async (de, ue, pe, he) => {
        if (ue == null && de.pages.length)
          return Promise.resolve({
            data: de
          });
        const be = {
          queryArg: N.originalArgs,
          pageParam: ue
        }, Fe = await Ee(be), we = he ? m : d;
        return {
          data: {
            pages: we(de.pages, Fe.data, pe),
            pageParams: we(de.pageParams, ue, pe)
          },
          meta: Fe.meta
        };
      };
      async function Ee(de) {
        let ue;
        const {
          extraOptions: pe,
          argSchema: he,
          rawResponseSchema: be,
          responseSchema: Fe
        } = L;
        if (he && !O && (de = await zt(
          he,
          de,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ne ? ue = ne() : L.query ? ue = await t(L.query(de), Z, pe) : ue = await L.queryFn(de, Z, pe, (Y) => t(Y, Z, pe)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const Y = L.query ? "`baseQuery`" : "`queryFn`";
          let P;
          if (!ue)
            P = `${Y} did not return anything.`;
          else if (typeof ue != "object")
            P = `${Y} did not return an object.`;
          else if (ue.error && ue.data)
            P = `${Y} returned an object containing both \`error\` and \`result\`.`;
          else if (ue.error === void 0 && ue.data === void 0)
            P = `${Y} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const re of Object.keys(ue))
              if (re !== "error" && re !== "data" && re !== "meta") {
                P = `The object returned by ${Y} has the unknown property ${re}.`;
                break;
              }
          P && console.error(`Error encountered handling the endpoint ${N.endpointName}.
                  ${P}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, ue);
        }
        if (ue.error) throw new la(ue.error, ue.meta);
        let {
          data: we
        } = ue;
        be && !O && (we = await zt(be, ue.data, "rawResponseSchema", ue.meta));
        let Ae = await M(we, ue.meta, de);
        return Fe && !O && (Ae = await zt(Fe, Ae, "responseSchema", ue.meta)), {
          ...ue,
          data: Ae
        };
      }
      if (N.type === "query" && "infiniteQueryOptions" in L) {
        const {
          infiniteQueryOptions: de
        } = L, {
          maxPages: ue = 1 / 0
        } = de;
        let pe;
        const he = {
          pages: [],
          pageParams: []
        }, be = (z = f.selectQueryEntry(q(), N.queryCacheKey)) == null ? void 0 : z.data, we = /* arg.forceRefetch */ C(N, q()) && !N.direction || !be ? he : be;
        if ("direction" in N && N.direction && we.pages.length) {
          const Ae = N.direction === "backward", P = (Ae ? Nc : Vs)(de, we, N.originalArgs);
          pe = await se(we, P, ue, Ae);
        } else {
          const {
            initialPageParam: Ae = de.initialPageParam
          } = N, Y = (be == null ? void 0 : be.pageParams) ?? [], P = Y[0] ?? Ae, re = Y.length;
          pe = await se(we, P, ue), ne && (pe = {
            data: pe.data.pages[0]
          });
          for (let ae = 1; ae < re; ae++) {
            const te = Vs(de, pe.data, N.originalArgs);
            pe = await se(pe.data, te, ue);
          }
        }
        G = pe;
      } else
        G = await Ee(N.originalArgs);
      return K && !O && G.meta && (G.meta = await zt(K, G.meta, "metaSchema", G.meta)), R(G.data, hr({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: G.meta
      }));
    } catch (M) {
      let Z = M;
      if (Z instanceof la) {
        let ne = g(L, "transformErrorResponse");
        const {
          rawErrorResponseSchema: G,
          errorResponseSchema: se
        } = L;
        let {
          value: Ee,
          meta: de
        } = Z;
        try {
          G && !O && (Ee = await zt(G, Ee, "rawErrorResponseSchema", de)), K && !O && (de = await zt(K, de, "metaSchema", de));
          let ue = await ne(Ee, de, N.originalArgs);
          return se && !O && (ue = await zt(se, ue, "errorResponseSchema", de)), B(ue, hr({
            baseQueryMeta: de
          }));
        } catch (ue) {
          Z = ue;
        }
      }
      try {
        if (Z instanceof Ac) {
          const ne = {
            endpoint: N.endpointName,
            arg: N.originalArgs,
            type: N.type,
            queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
          };
          (V = L.onSchemaFailure) == null || V.call(L, Z, ne), l == null || l(Z, ne);
          const {
            catchSchemaFailure: G = i
          } = L;
          if (G)
            return B(G(Z, ne), hr({
              baseQueryMeta: Z._bqMeta
            }));
        }
      } catch (ne) {
        Z = ne;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${N.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, Z) : console.error(Z), Z;
    }
  };
  function C(N, D) {
    const k = f.selectQueryEntry(D, N.queryCacheKey), B = f.selectConfig(D).refetchOnMountOrArgChange, R = k == null ? void 0 : k.fulfilledTimeStamp, T = N.forceRefetch ?? (N.subscribe && B);
    return T ? T === !0 || (Number(/* @__PURE__ */ new Date()) - Number(R)) / 1e3 >= T : !1;
  }
  const b = () => na(`${e}/executeQuery`, w, {
    getPendingMeta({
      arg: D
    }) {
      const k = r[D.endpointName];
      return hr({
        startedTimeStamp: Date.now(),
        ...Pr(k) ? {
          direction: D.direction
        } : {}
      });
    },
    condition(D, {
      getState: k
    }) {
      var O;
      const B = k(), R = f.selectQueryEntry(B, D.queryCacheKey), T = R == null ? void 0 : R.fulfilledTimeStamp, q = D.originalArgs, I = R == null ? void 0 : R.originalArgs, L = r[D.endpointName], K = D.direction;
      return Ws(D) ? !0 : (R == null ? void 0 : R.status) === "pending" ? !1 : C(D, B) || jn(L) && ((O = L == null ? void 0 : L.forceRefetch) != null && O.call(L, {
        currentArg: q,
        previousArg: I,
        endpointState: R,
        state: B
      })) ? !0 : !(T && !K);
    },
    dispatchConditionRejection: !0
  }), y = b(), h = b(), v = na(`${e}/executeMutation`, w, {
    getPendingMeta() {
      return hr({
        startedTimeStamp: Date.now()
      });
    }
  }), j = (N) => "force" in N, A = (N) => "ifOlderThan" in N, S = (N, D, k) => (B, R) => {
    const T = j(k) && k.force, q = A(k) && k.ifOlderThan, I = (K = !0) => {
      const O = {
        forceRefetch: K,
        isPrefetch: !0
      };
      return o.endpoints[N].initiate(D, O);
    }, L = o.endpoints[N].select(D)(R());
    if (T)
      B(I());
    else if (q) {
      const K = L == null ? void 0 : L.fulfilledTimeStamp;
      if (!K) {
        B(I());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(K))) / 1e3 >= q && B(I());
    } else
      B(I(!1));
  };
  function _(N) {
    return (D) => {
      var k, B;
      return ((B = (k = D == null ? void 0 : D.meta) == null ? void 0 : k.arg) == null ? void 0 : B.endpointName) === N;
    };
  }
  function E(N, D) {
    return {
      matchPending: yr(xo(N), _(D)),
      matchFulfilled: yr(Pt(N), _(D)),
      matchRejected: yr(cr(N), _(D))
    };
  }
  return {
    queryThunk: y,
    mutationThunk: v,
    infiniteQueryThunk: h,
    prefetch: S,
    updateQueryData: x,
    upsertQueryData: p,
    patchQueryData: u,
    buildMatchThunkActions: E
  };
}
function Vs(e, {
  pages: t,
  pageParams: r
}, n) {
  const o = t.length - 1;
  return e.getNextPageParam(t[o], t, r[o], r, n);
}
function Nc(e, {
  pages: t,
  pageParams: r
}, n) {
  var o;
  return (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, t[0], t, r[0], r, n);
}
function _c(e, t, r, n) {
  return go(r[e.meta.arg.endpointName][t], Pt(e) ? e.payload : void 0, En(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function qr(e, t, r) {
  const n = e[t];
  n && r(n);
}
function kr(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function ua(e, t, r) {
  const n = e[kr(t)];
  n && r(n);
}
var Wr = {};
function Ff({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: n,
  context: {
    endpointDefinitions: o,
    apiUid: c,
    extractRehydrationInfo: f,
    hasRehydrationInfo: l
  },
  assertTagType: i,
  config: a
}) {
  const u = at(`${e}/resetApiState`);
  function m(_, E, N, D) {
    var k;
    _[k = E.queryCacheKey] ?? (_[k] = {
      status: "uninitialized",
      endpointName: E.endpointName
    }), qr(_, E.queryCacheKey, (B) => {
      B.status = "pending", B.requestId = N && B.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        B.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        D.requestId
      ), E.originalArgs !== void 0 && (B.originalArgs = E.originalArgs), B.startedTimeStamp = D.startedTimeStamp;
      const R = o[D.arg.endpointName];
      Pr(R) && "direction" in E && (B.direction = E.direction);
    });
  }
  function d(_, E, N, D) {
    qr(_, E.arg.queryCacheKey, (k) => {
      if (k.requestId !== E.requestId && !D) return;
      const {
        merge: B
      } = o[E.arg.endpointName];
      if (k.status = "fulfilled", B)
        if (k.data !== void 0) {
          const {
            fulfilledTimeStamp: R,
            arg: T,
            baseQueryMeta: q,
            requestId: I
          } = E;
          let L = Rr(k.data, (K) => B(K, N, {
            arg: T.originalArgs,
            baseQueryMeta: q,
            fulfilledTimeStamp: R,
            requestId: I
          }));
          k.data = L;
        } else
          k.data = N;
      else
        k.data = o[E.arg.endpointName].structuralSharing ?? !0 ? Cc(gt(k.data) ? hd(k.data) : k.data, N) : N;
      delete k.error, k.fulfilledTimeStamp = E.fulfilledTimeStamp;
    });
  }
  const x = Ht({
    name: `${e}/queries`,
    initialState: Wr,
    reducers: {
      removeQueryResult: {
        reducer(_, {
          payload: {
            queryCacheKey: E
          }
        }) {
          delete _[E];
        },
        prepare: xr()
      },
      cacheEntriesUpserted: {
        reducer(_, E) {
          for (const N of E.payload) {
            const {
              queryDescription: D,
              value: k
            } = N;
            m(_, D, !0, {
              arg: D,
              requestId: E.meta.requestId,
              startedTimeStamp: E.meta.timestamp
            }), d(
              _,
              {
                arg: D,
                requestId: E.meta.requestId,
                fulfilledTimeStamp: E.meta.timestamp,
                baseQueryMeta: {}
              },
              k,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (_) => ({
          payload: _.map((D) => {
            const {
              endpointName: k,
              arg: B,
              value: R
            } = D, T = o[k];
            return {
              queryDescription: {
                type: "query",
                endpointName: k,
                originalArgs: D.arg,
                queryCacheKey: n({
                  queryArgs: B,
                  endpointDefinition: T,
                  endpointName: k
                })
              },
              value: R
            };
          }),
          meta: {
            [wn]: !0,
            requestId: ho(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(_, {
          payload: {
            queryCacheKey: E,
            patches: N
          }
        }) {
          qr(_, E, (D) => {
            D.data = Go(D.data, N.concat());
          });
        },
        prepare: xr()
      }
    },
    extraReducers(_) {
      _.addCase(t.pending, (E, {
        meta: N,
        meta: {
          arg: D
        }
      }) => {
        const k = Ws(D);
        m(E, D, k, N);
      }).addCase(t.fulfilled, (E, {
        meta: N,
        payload: D
      }) => {
        const k = Ws(N.arg);
        d(E, N, D, k);
      }).addCase(t.rejected, (E, {
        meta: {
          condition: N,
          arg: D,
          requestId: k
        },
        error: B,
        payload: R
      }) => {
        qr(E, D.queryCacheKey, (T) => {
          if (!N) {
            if (T.requestId !== k) return;
            T.status = "rejected", T.error = R ?? B;
          }
        });
      }).addMatcher(l, (E, N) => {
        const {
          queries: D
        } = f(N);
        for (const [k, B] of Object.entries(D))
          // do not rehydrate entries that were currently in flight.
          ((B == null ? void 0 : B.status) === "fulfilled" || (B == null ? void 0 : B.status) === "rejected") && (E[k] = B);
      });
    }
  }), p = Ht({
    name: `${e}/mutations`,
    initialState: Wr,
    reducers: {
      removeMutationResult: {
        reducer(_, {
          payload: E
        }) {
          const N = kr(E);
          N in _ && delete _[N];
        },
        prepare: xr()
      }
    },
    extraReducers(_) {
      _.addCase(r.pending, (E, {
        meta: N,
        meta: {
          requestId: D,
          arg: k,
          startedTimeStamp: B
        }
      }) => {
        k.track && (E[kr(N)] = {
          requestId: D,
          status: "pending",
          endpointName: k.endpointName,
          startedTimeStamp: B
        });
      }).addCase(r.fulfilled, (E, {
        payload: N,
        meta: D
      }) => {
        D.arg.track && ua(E, D, (k) => {
          k.requestId === D.requestId && (k.status = "fulfilled", k.data = N, k.fulfilledTimeStamp = D.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (E, {
        payload: N,
        error: D,
        meta: k
      }) => {
        k.arg.track && ua(E, k, (B) => {
          B.requestId === k.requestId && (B.status = "rejected", B.error = N ?? D);
        });
      }).addMatcher(l, (E, N) => {
        const {
          mutations: D
        } = f(N);
        for (const [k, B] of Object.entries(D))
          // do not rehydrate entries that were currently in flight.
          ((B == null ? void 0 : B.status) === "fulfilled" || (B == null ? void 0 : B.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          k !== (B == null ? void 0 : B.requestId) && (E[k] = B);
      });
    }
  }), g = {
    tags: {},
    keys: {}
  }, w = Ht({
    name: `${e}/invalidation`,
    initialState: g,
    reducers: {
      updateProvidedBy: {
        reducer(_, E) {
          var N, D, k;
          for (const {
            queryCacheKey: B,
            providedTags: R
          } of E.payload) {
            C(_, B);
            for (const {
              type: T,
              id: q
            } of R) {
              const I = (D = (N = _.tags)[T] ?? (N[T] = {}))[k = q || "__internal_without_id"] ?? (D[k] = []);
              I.includes(B) || I.push(B);
            }
            _.keys[B] = R;
          }
        },
        prepare: xr()
      }
    },
    extraReducers(_) {
      _.addCase(x.actions.removeQueryResult, (E, {
        payload: {
          queryCacheKey: N
        }
      }) => {
        C(E, N);
      }).addMatcher(l, (E, N) => {
        var k, B, R;
        const {
          provided: D
        } = f(N);
        for (const [T, q] of Object.entries(D))
          for (const [I, L] of Object.entries(q)) {
            const K = (B = (k = E.tags)[T] ?? (k[T] = {}))[R = I || "__internal_without_id"] ?? (B[R] = []);
            for (const O of L)
              K.includes(O) || K.push(O);
          }
      }).addMatcher(Nt(Pt(t), En(t)), (E, N) => {
        b(E, [N]);
      }).addMatcher(x.actions.cacheEntriesUpserted.match, (E, N) => {
        const D = N.payload.map(({
          queryDescription: k,
          value: B
        }) => ({
          type: "UNKNOWN",
          payload: B,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: k
          }
        }));
        b(E, D);
      });
    }
  });
  function C(_, E) {
    var D;
    const N = _.keys[E] ?? [];
    for (const k of N) {
      const B = k.type, R = k.id ?? "__internal_without_id", T = (D = _.tags[B]) == null ? void 0 : D[R];
      T && (_.tags[B][R] = T.filter((q) => q !== E));
    }
    delete _.keys[E];
  }
  function b(_, E) {
    const N = E.map((D) => {
      const k = _c(D, "providesTags", o, i), {
        queryCacheKey: B
      } = D.meta.arg;
      return {
        queryCacheKey: B,
        providedTags: k
      };
    });
    w.caseReducers.updateProvidedBy(_, w.actions.updateProvidedBy(N));
  }
  const y = Ht({
    name: `${e}/subscriptions`,
    initialState: Wr,
    reducers: {
      updateSubscriptionOptions(_, E) {
      },
      unsubscribeQueryResult(_, E) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), h = Ht({
    name: `${e}/internalSubscriptions`,
    initialState: Wr,
    reducers: {
      subscriptionsUpdated: {
        reducer(_, E) {
          return Go(_, E.payload);
        },
        prepare: xr()
      }
    }
  }), v = Ht({
    name: `${e}/config`,
    initialState: {
      online: yf(),
      focused: gf(),
      middlewareRegistered: !1,
      ...a
    },
    reducers: {
      middlewareRegistered(_, {
        payload: E
      }) {
        _.middlewareRegistered = _.middlewareRegistered === "conflict" || c !== E ? "conflict" : !0;
      }
    },
    extraReducers: (_) => {
      _.addCase(mo, (E) => {
        E.online = !0;
      }).addCase(jc, (E) => {
        E.online = !1;
      }).addCase(po, (E) => {
        E.focused = !0;
      }).addCase(Ec, (E) => {
        E.focused = !1;
      }).addMatcher(l, (E) => ({
        ...E
      }));
    }
  }), j = nc({
    queries: x.reducer,
    mutations: p.reducer,
    provided: w.reducer,
    subscriptions: h.reducer,
    config: v.reducer
  }), A = (_, E) => j(u.match(E) ? void 0 : _, E), S = {
    ...v.actions,
    ...x.actions,
    ...y.actions,
    ...h.actions,
    ...p.actions,
    ...w.actions,
    resetApiState: u
  };
  return {
    reducer: A,
    actions: S
  };
}
var ot = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), kc = {
  status: "uninitialized"
  /* uninitialized */
}, da = /* @__PURE__ */ Rr(kc, () => {
}), fa = /* @__PURE__ */ Rr(kc, () => {
});
function Rf({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (y) => da, o = (y) => fa;
  return {
    buildQuerySelector: d,
    buildInfiniteQuerySelector: x,
    buildMutationSelector: p,
    selectInvalidatedBy: g,
    selectCachedArgsForQuery: w,
    selectApiState: f,
    selectQueries: l,
    selectMutations: a,
    selectQueryEntry: i,
    selectConfig: u
  };
  function c(y) {
    return {
      ...y,
      ...sa(y.status)
    };
  }
  function f(y) {
    const h = y[t];
    if (process.env.NODE_ENV !== "production" && !h) {
      if (f.triggered) return h;
      f.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return h;
  }
  function l(y) {
    var h;
    return (h = f(y)) == null ? void 0 : h.queries;
  }
  function i(y, h) {
    var v;
    return (v = l(y)) == null ? void 0 : v[h];
  }
  function a(y) {
    var h;
    return (h = f(y)) == null ? void 0 : h.mutations;
  }
  function u(y) {
    var h;
    return (h = f(y)) == null ? void 0 : h.config;
  }
  function m(y, h, v) {
    return (j) => {
      if (j === ot)
        return r(n, v);
      const A = e({
        queryArgs: j,
        endpointDefinition: h,
        endpointName: y
      });
      return r((_) => i(_, A) ?? da, v);
    };
  }
  function d(y, h) {
    return m(y, h, c);
  }
  function x(y, h) {
    const {
      infiniteQueryOptions: v
    } = h;
    function j(A) {
      const S = {
        ...A,
        ...sa(A.status)
      }, {
        isLoading: _,
        isError: E,
        direction: N
      } = S, D = N === "forward", k = N === "backward";
      return {
        ...S,
        hasNextPage: C(v, S.data, S.originalArgs),
        hasPreviousPage: b(v, S.data, S.originalArgs),
        isFetchingNextPage: _ && D,
        isFetchingPreviousPage: _ && k,
        isFetchNextPageError: E && D,
        isFetchPreviousPageError: E && k
      };
    }
    return m(y, h, j);
  }
  function p() {
    return (y) => {
      let h;
      return typeof y == "object" ? h = kr(y) ?? ot : h = y, r(h === ot ? o : (A) => {
        var S, _;
        return ((_ = (S = f(A)) == null ? void 0 : S.mutations) == null ? void 0 : _[h]) ?? fa;
      }, c);
    };
  }
  function g(y, h) {
    const v = y[t], j = /* @__PURE__ */ new Set();
    for (const A of h.filter(ln).map(qs)) {
      const S = v.provided.tags[A.type];
      if (!S)
        continue;
      let _ = (A.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        S[A.id]
      ) : (
        // no id: invalidate all queries that provide this type
        aa(Object.values(S))
      )) ?? [];
      for (const E of _)
        j.add(E);
    }
    return aa(Array.from(j.values()).map((A) => {
      const S = v.queries[A];
      return S ? [{
        queryCacheKey: A,
        endpointName: S.endpointName,
        originalArgs: S.originalArgs
      }] : [];
    }));
  }
  function w(y, h) {
    return Object.values(l(y)).filter(
      (v) => (v == null ? void 0 : v.endpointName) === h && v.status !== "uninitialized"
      /* uninitialized */
    ).map((v) => v.originalArgs);
  }
  function C(y, h, v) {
    return h ? Vs(y, h, v) != null : !1;
  }
  function b(y, h, v) {
    return !h || !y.getPreviousPageParam ? !1 : Nc(y, h, v) != null;
  }
}
var tr = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, dn = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = tr == null ? void 0 : tr.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (c, f) => (f = typeof f == "bigint" ? {
      $bigint: f.toString()
    } : f, f = mt(f) ? Object.keys(f).sort().reduce((l, i) => (l[i] = f[i], l), {}) : f, f));
    mt(t) && (tr == null || tr.set(t, o)), r = o;
  }
  return `${e}(${r})`;
};
function Of(...e) {
  return function(r) {
    const n = cn((a) => {
      var u;
      return (u = r.extractRehydrationInfo) == null ? void 0 : u.call(r, a, {
        reducerPath: r.reducerPath ?? "api"
      });
    }), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: n,
      serializeQueryArgs(a) {
        let u = dn;
        if ("serializeQueryArgs" in a.endpointDefinition) {
          const m = a.endpointDefinition.serializeQueryArgs;
          u = (d) => {
            const x = m(d);
            return typeof x == "string" ? x : dn({
              ...d,
              queryArgs: x
            });
          };
        } else r.serializeQueryArgs && (u = r.serializeQueryArgs);
        return u(a);
      },
      tagTypes: [...r.tagTypes || []]
    }, c = {
      endpointDefinitions: {},
      batch(a) {
        a();
      },
      apiUid: ho(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: cn((a) => n(a) != null)
    }, f = {
      injectEndpoints: i,
      enhanceEndpoints({
        addTagTypes: a,
        endpoints: u
      }) {
        if (a)
          for (const m of a)
            o.tagTypes.includes(m) || o.tagTypes.push(m);
        if (u)
          for (const [m, d] of Object.entries(u))
            typeof d == "function" ? d(c.endpointDefinitions[m]) : Object.assign(c.endpointDefinitions[m] || {}, d);
        return f;
      }
    }, l = e.map((a) => a.init(f, o, c));
    function i(a) {
      const u = a.endpoints({
        query: (m) => ({
          ...m,
          type: "query"
          /* query */
        }),
        mutation: (m) => ({
          ...m,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (m) => ({
          ...m,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [m, d] of Object.entries(u)) {
        if (a.overrideExisting !== !0 && m in c.endpointDefinitions) {
          if (a.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? _e(39) : `called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && Pr(d)) {
          const {
            infiniteQueryOptions: x
          } = d, {
            maxPages: p,
            getPreviousPageParam: g
          } = x;
          if (typeof p == "number") {
            if (p < 1)
              throw new Error(process.env.NODE_ENV === "production" ? _e(40) : `maxPages for endpoint '${m}' must be a number greater than 0`);
            if (typeof g != "function")
              throw new Error(process.env.NODE_ENV === "production" ? _e(41) : `getPreviousPageParam for endpoint '${m}' must be a function if maxPages is used`);
          }
        }
        c.endpointDefinitions[m] = d;
        for (const x of l)
          x.injectEndpoint(m, d);
      }
      return f;
    }
    return f.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function Ct(e, ...t) {
  return Object.assign(e, ...t);
}
var Pf = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let o = null, c = null;
  const {
    updateSubscriptionOptions: f,
    unsubscribeQueryResult: l
  } = e.internalActions, i = (x, p) => {
    var w, C, b;
    if (f.match(p)) {
      const {
        queryCacheKey: y,
        requestId: h,
        options: v
      } = p.payload;
      return (w = x == null ? void 0 : x[y]) != null && w[h] && (x[y][h] = v), !0;
    }
    if (l.match(p)) {
      const {
        queryCacheKey: y,
        requestId: h
      } = p.payload;
      return x[y] && delete x[y][h], !0;
    }
    if (e.internalActions.removeQueryResult.match(p))
      return delete x[p.payload.queryCacheKey], !0;
    if (t.pending.match(p)) {
      const {
        meta: {
          arg: y,
          requestId: h
        }
      } = p, v = x[C = y.queryCacheKey] ?? (x[C] = {});
      return v[`${h}_running`] = {}, y.subscribe && (v[h] = y.subscriptionOptions ?? v[h] ?? {}), !0;
    }
    let g = !1;
    if (t.fulfilled.match(p) || t.rejected.match(p)) {
      const y = x[p.meta.arg.queryCacheKey] || {}, h = `${p.meta.requestId}_running`;
      g || (g = !!y[h]), delete y[h];
    }
    if (t.rejected.match(p)) {
      const {
        meta: {
          condition: y,
          arg: h,
          requestId: v
        }
      } = p;
      if (y && h.subscribe) {
        const j = x[b = h.queryCacheKey] ?? (x[b] = {});
        j[v] = h.subscriptionOptions ?? j[v] ?? {}, g = !0;
      }
    }
    return g;
  }, a = () => r.currentSubscriptions, d = {
    getSubscriptions: a,
    getSubscriptionCount: (x) => {
      const g = a()[x] ?? {};
      return sr(g);
    },
    isRequestSubscribed: (x, p) => {
      var w;
      const g = a();
      return !!((w = g == null ? void 0 : g[x]) != null && w[p]);
    }
  };
  return (x, p) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(x))
      return o = r.currentSubscriptions = {}, c = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(x))
      return [!1, d];
    const g = i(r.currentSubscriptions, x);
    let w = !0;
    if (g) {
      c || (c = setTimeout(() => {
        const y = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, h] = uc(o, () => y);
        p.next(e.internalActions.subscriptionsUpdated(h)), o = y, c = null;
      }, 500));
      const C = typeof x.type == "string" && !!x.type.startsWith(n), b = t.rejected.match(x) && x.meta.condition && !!x.meta.arg.subscribe;
      w = !C && !b;
    }
    return [w, !1];
  };
};
function Tf(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Mf = 2147483647 / 1e3 - 1, Lf = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: n,
  internalState: o,
  selectors: {
    selectQueryEntry: c,
    selectConfig: f
  }
}) => {
  const {
    removeQueryResult: l,
    unsubscribeQueryResult: i,
    cacheEntriesUpserted: a
  } = t.internalActions, u = Nt(i.match, r.fulfilled, r.rejected, a.match);
  function m(w) {
    const C = o.currentSubscriptions[w];
    return !!C && !Tf(C);
  }
  const d = {}, x = (w, C, b) => {
    const y = C.getState(), h = f(y);
    if (u(w)) {
      let v;
      if (a.match(w))
        v = w.payload.map((j) => j.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: j
        } = i.match(w) ? w.payload : w.meta.arg;
        v = [j];
      }
      p(v, C, h);
    }
    if (t.util.resetApiState.match(w))
      for (const [v, j] of Object.entries(d))
        j && clearTimeout(j), delete d[v];
    if (n.hasRehydrationInfo(w)) {
      const {
        queries: v
      } = n.extractRehydrationInfo(w);
      p(Object.keys(v), C, h);
    }
  };
  function p(w, C, b) {
    const y = C.getState();
    for (const h of w) {
      const v = c(y, h);
      g(h, v == null ? void 0 : v.endpointName, C, b);
    }
  }
  function g(w, C, b, y) {
    const h = n.endpointDefinitions[C], v = (h == null ? void 0 : h.keepUnusedDataFor) ?? y.keepUnusedDataFor;
    if (v === 1 / 0)
      return;
    const j = Math.max(0, Math.min(v, Mf));
    if (!m(w)) {
      const A = d[w];
      A && clearTimeout(A), d[w] = setTimeout(() => {
        m(w) || b.dispatch(l({
          queryCacheKey: w
        })), delete d[w];
      }, j * 1e3);
    }
  }
  return x;
}, xa = new Error("Promise never resolved before cacheEntryRemoved."), If = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: o,
  internalState: c,
  selectors: {
    selectQueryEntry: f,
    selectApiState: l
  }
}) => {
  const i = Hs(n), a = Hs(o), u = Pt(n, o), m = {};
  function d(C, b, y) {
    const h = m[C];
    h != null && h.valueResolved && (h.valueResolved({
      data: b,
      meta: y
    }), delete h.valueResolved);
  }
  function x(C) {
    const b = m[C];
    b && (delete m[C], b.cacheEntryRemoved());
  }
  const p = (C, b, y) => {
    const h = g(C);
    function v(j, A, S, _) {
      const E = f(y, A), N = f(b.getState(), A);
      !E && N && w(j, _, A, b, S);
    }
    if (n.pending.match(C))
      v(C.meta.arg.endpointName, h, C.meta.requestId, C.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(C))
      for (const {
        queryDescription: j,
        value: A
      } of C.payload) {
        const {
          endpointName: S,
          originalArgs: _,
          queryCacheKey: E
        } = j;
        v(S, E, C.meta.requestId, _), d(E, A, {});
      }
    else if (o.pending.match(C))
      b.getState()[t].mutations[h] && w(C.meta.arg.endpointName, C.meta.arg.originalArgs, h, b, C.meta.requestId);
    else if (u(C))
      d(h, C.payload, C.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(C) || e.internalActions.removeMutationResult.match(C))
      x(h);
    else if (e.util.resetApiState.match(C))
      for (const j of Object.keys(m))
        x(j);
  };
  function g(C) {
    return i(C) ? C.meta.arg.queryCacheKey : a(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : e.internalActions.removeQueryResult.match(C) ? C.payload.queryCacheKey : e.internalActions.removeMutationResult.match(C) ? kr(C.payload) : "";
  }
  function w(C, b, y, h, v) {
    const j = r.endpointDefinitions[C], A = j == null ? void 0 : j.onCacheEntryAdded;
    if (!A) return;
    const S = {}, _ = new Promise((R) => {
      S.cacheEntryRemoved = R;
    }), E = Promise.race([new Promise((R) => {
      S.valueResolved = R;
    }), _.then(() => {
      throw xa;
    })]);
    E.catch(() => {
    }), m[y] = S;
    const N = e.endpoints[C].select(un(j) ? b : y), D = h.dispatch((R, T, q) => q), k = {
      ...h,
      getCacheEntry: () => N(h.getState()),
      requestId: v,
      extra: D,
      updateCachedData: un(j) ? (R) => h.dispatch(e.util.updateQueryData(C, b, R)) : void 0,
      cacheDataLoaded: E,
      cacheEntryRemoved: _
    }, B = A(b, k);
    Promise.resolve(B).catch((R) => {
      if (R !== xa)
        throw R;
    });
  }
  return p;
}, zf = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, o) => {
  var c, f;
  e.util.resetApiState.match(n) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(n) && n.payload === t && ((f = (c = o.getState()[r]) == null ? void 0 : c.config) == null ? void 0 : f.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, $f = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: o,
  api: c,
  assertTagType: f,
  refetchQuery: l,
  internalState: i
}) => {
  const {
    removeQueryResult: a
  } = c.internalActions, u = Nt(Pt(n), En(n)), m = Nt(Pt(n, o), cr(n, o));
  let d = [];
  const x = (w, C) => {
    u(w) ? g(_c(w, "invalidatesTags", r, f), C) : m(w) ? g([], C) : c.util.invalidateTags.match(w) && g(go(w.payload, void 0, void 0, void 0, void 0, f), C);
  };
  function p(w) {
    var y;
    const {
      queries: C,
      mutations: b
    } = w;
    for (const h of [C, b])
      for (const v in h)
        if (((y = h[v]) == null ? void 0 : y.status) === "pending") return !0;
    return !1;
  }
  function g(w, C) {
    const b = C.getState(), y = b[e];
    if (d.push(...w), y.config.invalidationBehavior === "delayed" && p(y))
      return;
    const h = d;
    if (d = [], h.length === 0) return;
    const v = c.util.selectInvalidatedBy(b, h);
    t.batch(() => {
      const j = Array.from(v.values());
      for (const {
        queryCacheKey: A
      } of j) {
        const S = y.queries[A], _ = i.currentSubscriptions[A] ?? {};
        S && (sr(_) === 0 ? C.dispatch(a({
          queryCacheKey: A
        })) : S.status !== "uninitialized" && C.dispatch(l(S)));
      }
    });
  }
  return x;
}, Hf = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const c = {}, f = (d, x) => {
    (r.internalActions.updateSubscriptionOptions.match(d) || r.internalActions.unsubscribeQueryResult.match(d)) && i(d.payload, x), (t.pending.match(d) || t.rejected.match(d) && d.meta.condition) && i(d.meta.arg, x), (t.fulfilled.match(d) || t.rejected.match(d) && !d.meta.condition) && l(d.meta.arg, x), r.util.resetApiState.match(d) && u();
  };
  function l({
    queryCacheKey: d
  }, x) {
    const p = x.getState()[e], g = p.queries[d], w = o.currentSubscriptions[d];
    if (!g || g.status === "uninitialized") return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: b
    } = m(w);
    if (!Number.isFinite(C)) return;
    const y = c[d];
    y != null && y.timeout && (clearTimeout(y.timeout), y.timeout = void 0);
    const h = Date.now() + C;
    c[d] = {
      nextPollTimestamp: h,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (p.config.focused || !b) && x.dispatch(n(g)), l({
          queryCacheKey: d
        }, x);
      }, C)
    };
  }
  function i({
    queryCacheKey: d
  }, x) {
    const g = x.getState()[e].queries[d], w = o.currentSubscriptions[d];
    if (!g || g.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: C
    } = m(w);
    if (!Number.isFinite(C)) {
      a(d);
      return;
    }
    const b = c[d], y = Date.now() + C;
    (!b || y < b.nextPollTimestamp) && l({
      queryCacheKey: d
    }, x);
  }
  function a(d) {
    const x = c[d];
    x != null && x.timeout && clearTimeout(x.timeout), delete c[d];
  }
  function u() {
    for (const d of Object.keys(c))
      a(d);
  }
  function m(d = {}) {
    let x = !1, p = Number.POSITIVE_INFINITY;
    for (let g in d)
      d[g].pollingInterval && (p = Math.min(d[g].pollingInterval, p), x = d[g].skipPollingIfUnfocused || x);
    return {
      lowestPollingInterval: p,
      skipPollingIfUnfocused: x
    };
  }
  return f;
}, qf = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const o = xo(r, n), c = cr(r, n), f = Pt(r, n), l = {};
  return (a, u) => {
    var m, d;
    if (o(a)) {
      const {
        requestId: x,
        arg: {
          endpointName: p,
          originalArgs: g
        }
      } = a.meta, w = t.endpointDefinitions[p], C = w == null ? void 0 : w.onQueryStarted;
      if (C) {
        const b = {}, y = new Promise((A, S) => {
          b.resolve = A, b.reject = S;
        });
        y.catch(() => {
        }), l[x] = b;
        const h = e.endpoints[p].select(un(w) ? g : x), v = u.dispatch((A, S, _) => _), j = {
          ...u,
          getCacheEntry: () => h(u.getState()),
          requestId: x,
          extra: v,
          updateCachedData: un(w) ? (A) => u.dispatch(e.util.updateQueryData(p, g, A)) : void 0,
          queryFulfilled: y
        };
        C(g, j);
      }
    } else if (f(a)) {
      const {
        requestId: x,
        baseQueryMeta: p
      } = a.meta;
      (m = l[x]) == null || m.resolve({
        data: a.payload,
        meta: p
      }), delete l[x];
    } else if (c(a)) {
      const {
        requestId: x,
        rejectedWithValue: p,
        baseQueryMeta: g
      } = a.meta;
      (d = l[x]) == null || d.reject({
        error: a.payload ?? a.error,
        isUnhandledError: !p,
        meta: g
      }), delete l[x];
    }
  };
}, Wf = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const {
    removeQueryResult: c
  } = r.internalActions, f = (i, a) => {
    po.match(i) && l(a, "refetchOnFocus"), mo.match(i) && l(a, "refetchOnReconnect");
  };
  function l(i, a) {
    const u = i.getState()[e], m = u.queries, d = o.currentSubscriptions;
    t.batch(() => {
      for (const x of Object.keys(d)) {
        const p = m[x], g = d[x];
        if (!g || !p) continue;
        (Object.values(g).some((C) => C[a] === !0) || Object.values(g).every((C) => C[a] === void 0) && u.config[a]) && (sr(g) === 0 ? i.dispatch(c({
          queryCacheKey: x
        })) : p.status !== "uninitialized" && i.dispatch(n(p)));
      }
    });
  }
  return f;
};
function Vf(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: o
  } = e, {
    apiUid: c
  } = o, f = {
    invalidateTags: at(`${t}/invalidateTags`)
  }, l = (m) => m.type.startsWith(`${t}/`), i = [zf, Lf, $f, Hf, If, qf];
  return {
    middleware: (m) => {
      let d = !1;
      const p = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: u,
        isThisApiSliceAction: l
      }, g = i.map((b) => b(p)), w = Pf(p), C = Wf(p);
      return (b) => (y) => {
        if (!io(y))
          return b(y);
        d || (d = !0, m.dispatch(n.internalActions.middlewareRegistered(c)));
        const h = {
          ...m,
          next: b
        }, v = m.getState(), [j, A] = w(y, h, v);
        let S;
        if (j ? S = b(y) : S = A, m.getState()[t] && (C(y, h, v), l(y) || o.hasRehydrationInfo(y)))
          for (const _ of g)
            _(y, h, v);
        return S;
      };
    },
    actions: f
  };
  function u(m) {
    return e.api.endpoints[m.endpointName].initiate(m.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var ha = /* @__PURE__ */ Symbol(), Uf = ({
  createSelector: e = fo
} = {}) => ({
  name: ha,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: o,
    serializeQueryArgs: c,
    keepUnusedDataFor: f,
    refetchOnMountOrArgChange: l,
    refetchOnFocus: i,
    refetchOnReconnect: a,
    invalidationBehavior: u,
    onSchemaFailure: m,
    catchSchemaFailure: d,
    skipSchemaValidation: x
  }, p) {
    jd();
    const g = (Z) => (typeof process < "u" && process.env.NODE_ENV === "development" && (n.includes(Z.type) || console.error(`Tag type '${Z.type}' was used, but not specified in \`tagTypes\`!`)), Z);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: mo,
        onOffline: jc,
        onFocus: po,
        onFocusLost: Ec
      },
      util: {}
    });
    const w = Rf({
      serializeQueryArgs: c,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: b,
      buildQuerySelector: y,
      buildInfiniteQuerySelector: h,
      buildMutationSelector: v
    } = w;
    Ct(t.util, {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: b
    });
    const {
      queryThunk: j,
      infiniteQueryThunk: A,
      mutationThunk: S,
      patchQueryData: _,
      updateQueryData: E,
      upsertQueryData: N,
      prefetch: D,
      buildMatchThunkActions: k
    } = Bf({
      baseQuery: r,
      reducerPath: o,
      context: p,
      api: t,
      serializeQueryArgs: c,
      assertTagType: g,
      selectors: w,
      onSchemaFailure: m,
      catchSchemaFailure: d,
      skipSchemaValidation: x
    }), {
      reducer: B,
      actions: R
    } = Ff({
      context: p,
      queryThunk: j,
      infiniteQueryThunk: A,
      mutationThunk: S,
      serializeQueryArgs: c,
      reducerPath: o,
      assertTagType: g,
      config: {
        refetchOnFocus: i,
        refetchOnReconnect: a,
        refetchOnMountOrArgChange: l,
        keepUnusedDataFor: f,
        reducerPath: o,
        invalidationBehavior: u
      }
    });
    Ct(t.util, {
      patchQueryData: _,
      updateQueryData: E,
      upsertQueryData: N,
      prefetch: D,
      resetApiState: R.resetApiState,
      upsertQueryEntries: R.cacheEntriesUpserted
    }), Ct(t.internalActions, R);
    const {
      middleware: T,
      actions: q
    } = Vf({
      reducerPath: o,
      context: p,
      queryThunk: j,
      mutationThunk: S,
      infiniteQueryThunk: A,
      api: t,
      assertTagType: g,
      selectors: w
    });
    Ct(t.util, q), Ct(t, {
      reducer: B,
      middleware: T
    });
    const {
      buildInitiateQuery: I,
      buildInitiateInfiniteQuery: L,
      buildInitiateMutation: K,
      getRunningMutationThunk: O,
      getRunningMutationsThunk: z,
      getRunningQueriesThunk: V,
      getRunningQueryThunk: M
    } = Df({
      queryThunk: j,
      mutationThunk: S,
      infiniteQueryThunk: A,
      api: t,
      serializeQueryArgs: c,
      context: p
    });
    return Ct(t.util, {
      getRunningMutationThunk: O,
      getRunningMutationsThunk: z,
      getRunningQueryThunk: M,
      getRunningQueriesThunk: V
    }), {
      name: ha,
      injectEndpoint(Z, ne) {
        var Ee;
        const se = (Ee = t.endpoints)[Z] ?? (Ee[Z] = {});
        jn(ne) && Ct(se, {
          name: Z,
          select: y(Z, ne),
          initiate: I(Z, ne)
        }, k(j, Z)), Nf(ne) && Ct(se, {
          name: Z,
          select: v(),
          initiate: K(Z)
        }, k(S, Z)), Pr(ne) && Ct(se, {
          name: Z,
          select: h(Z, ne),
          initiate: L(Z, ne)
        }, k(j, Z));
      }
    };
  }
}), Us = { exports: {} }, Mn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pa;
function Qf() {
  if (pa) return Mn;
  pa = 1;
  var e = or;
  function t(i, a) {
    return i === a && (i !== 0 || 1 / i === 1 / a) || i !== i && a !== a;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, o = e.useRef, c = e.useEffect, f = e.useMemo, l = e.useDebugValue;
  return Mn.useSyncExternalStoreWithSelector = function(i, a, u, m, d) {
    var x = o(null);
    if (x.current === null) {
      var p = { hasValue: !1, value: null };
      x.current = p;
    } else p = x.current;
    x = f(
      function() {
        function w(v) {
          if (!C) {
            if (C = !0, b = v, v = m(v), d !== void 0 && p.hasValue) {
              var j = p.value;
              if (d(j, v))
                return y = j;
            }
            return y = v;
          }
          if (j = y, r(b, v)) return j;
          var A = m(v);
          return d !== void 0 && d(j, A) ? (b = v, j) : (b = v, y = A);
        }
        var C = !1, b, y, h = u === void 0 ? null : u;
        return [
          function() {
            return w(a());
          },
          h === null ? void 0 : function() {
            return w(h());
          }
        ];
      },
      [a, u, m, d]
    );
    var g = n(i, x[0], x[1]);
    return c(
      function() {
        p.hasValue = !0, p.value = g;
      },
      [g]
    ), l(g), g;
  }, Mn;
}
var Ln = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ma;
function Kf() {
  return ma || (ma = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i, a) {
      return i === a && (i !== 0 || 1 / i === 1 / a) || i !== i && a !== a;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = or, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, o = t.useRef, c = t.useEffect, f = t.useMemo, l = t.useDebugValue;
    Ln.useSyncExternalStoreWithSelector = function(i, a, u, m, d) {
      var x = o(null);
      if (x.current === null) {
        var p = { hasValue: !1, value: null };
        x.current = p;
      } else p = x.current;
      x = f(
        function() {
          function w(v) {
            if (!C) {
              if (C = !0, b = v, v = m(v), d !== void 0 && p.hasValue) {
                var j = p.value;
                if (d(j, v))
                  return y = j;
              }
              return y = v;
            }
            if (j = y, r(b, v))
              return j;
            var A = m(v);
            return d !== void 0 && d(j, A) ? (b = v, j) : (b = v, y = A);
          }
          var C = !1, b, y, h = u === void 0 ? null : u;
          return [
            function() {
              return w(a());
            },
            h === null ? void 0 : function() {
              return w(h());
            }
          ];
        },
        [a, u, m, d]
      );
      var g = n(i, x[0], x[1]);
      return c(
        function() {
          p.hasValue = !0, p.value = g;
        },
        [g]
      ), l(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ln;
}
process.env.NODE_ENV === "production" ? Us.exports = Qf() : Us.exports = Kf();
var Gf = Us.exports;
function Yf(e) {
  e();
}
function ga(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vr(e, t) {
  if (ga(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !ga(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
var In = /* @__PURE__ */ Symbol.for("react-redux-context"), zn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Xf() {
  if (!W.createContext) return {};
  const e = zn[In] ?? (zn[In] = /* @__PURE__ */ new Map());
  let t = e.get(W.createContext);
  return t || (t = W.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(W.createContext, t)), t;
}
var Kt = /* @__PURE__ */ Xf();
function yo(e = Kt) {
  return function() {
    const r = W.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var Dc = /* @__PURE__ */ yo();
function Sc(e = Kt) {
  const t = e === Kt ? Dc : (
    // @ts-ignore
    yo(e)
  ), r = () => {
    const { store: n } = t();
    return n;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Bc = /* @__PURE__ */ Sc();
function Zf(e = Kt) {
  const t = e === Kt ? Bc : Sc(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var vo = /* @__PURE__ */ Zf(), Jf = (e, t) => e === t;
function ex(e = Kt) {
  const t = e === Kt ? Dc : yo(e), r = (n, o = {}) => {
    const { equalityFn: c = Jf } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error("You must pass a selector to useSelector");
      if (typeof n != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof c != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const f = t(), { store: l, subscription: i, getServerState: a } = f, u = W.useRef(!0), m = W.useCallback(
      {
        [n.name](x) {
          const p = n(x);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: g = {} } = typeof o == "function" ? {} : o, { identityFunctionCheck: w, stabilityCheck: C } = f, {
              identityFunctionCheck: b,
              stabilityCheck: y
            } = {
              stabilityCheck: C,
              identityFunctionCheck: w,
              ...g
            };
            if (y === "always" || y === "once" && u.current) {
              const h = n(x);
              if (!c(p, h)) {
                let v;
                try {
                  throw new Error();
                } catch (j) {
                  ({ stack: v } = j);
                }
                console.warn(
                  "Selector " + (n.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: x,
                    selected: p,
                    selected2: h,
                    stack: v
                  }
                );
              }
            }
            if ((b === "always" || b === "once" && u.current) && p === x) {
              let h;
              try {
                throw new Error();
              } catch (v) {
                ({ stack: h } = v);
              }
              console.warn(
                "Selector " + (n.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: h }
              );
            }
            u.current && (u.current = !1);
          }
          return p;
        }
      }[n.name],
      [n]
    ), d = Gf.useSyncExternalStoreWithSelector(
      i.addNestedSub,
      l.getState,
      a || l.getState,
      m,
      c
    );
    return W.useDebugValue(d), d;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Fc = /* @__PURE__ */ ex(), tx = Yf;
function Vr(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function rx(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
function nx(e) {
  return e.type === "query";
}
function sx(e) {
  return e.type === "mutation";
}
function Rc(e) {
  return e.type === "infinitequery";
}
function pr(e, ...t) {
  return Object.assign(e, ...t);
}
var $n = Symbol();
function Hn(e, t, r, n) {
  const o = qe(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: n
    }) : e
  }), [e, t, r, n]), c = Be(o);
  return ye(() => {
    c.current.serialized !== o.serialized && (c.current = o);
  }, [o]), c.current.serialized === o.serialized ? c.current.queryArgs : e;
}
function Ur(e) {
  const t = Be(e);
  return ye(() => {
    vr(t.current, e) || (t.current = e);
  }, [e]), vr(t.current, e) ? t.current : e;
}
var ox = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ax = /* @__PURE__ */ ox(), ix = () => typeof navigator < "u" && navigator.product === "ReactNative", cx = /* @__PURE__ */ ix(), lx = () => ax || cx ? si : ye, ux = /* @__PURE__ */ lx(), ya = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: wc.pending
} : e;
function qn(e, ...t) {
  const r = {};
  return t.forEach((n) => {
    r[n] = e[n];
  }), r;
}
var Wn = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function dx({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: n,
      useStore: o
    },
    unstable__sideEffectsInRender: c,
    createSelector: f
  },
  serializeQueryArgs: l,
  context: i
}) {
  const a = c ? (h) => h() : ye;
  return {
    buildQueryHooks: C,
    buildInfiniteQueryHooks: b,
    buildMutationHook: y,
    usePrefetch: d
  };
  function u(h, v, j) {
    if (v != null && v.endpointName && h.isUninitialized) {
      const {
        endpointName: D
      } = v, k = i.endpointDefinitions[D];
      j !== ot && l({
        queryArgs: v.originalArgs,
        endpointDefinition: k,
        endpointName: D
      }) === l({
        queryArgs: j,
        endpointDefinition: k,
        endpointName: D
      }) && (v = void 0);
    }
    let A = h.isSuccess ? h.data : v == null ? void 0 : v.data;
    A === void 0 && (A = h.data);
    const S = A !== void 0, _ = h.isLoading, E = (!v || v.isLoading || v.isUninitialized) && !S && _, N = h.isSuccess || S && (_ && !(v != null && v.isError) || h.isUninitialized);
    return {
      ...h,
      data: A,
      currentData: h.data,
      isFetching: _,
      isLoading: E,
      isSuccess: N
    };
  }
  function m(h, v, j) {
    if (v != null && v.endpointName && h.isUninitialized) {
      const {
        endpointName: D
      } = v, k = i.endpointDefinitions[D];
      j !== ot && l({
        queryArgs: v.originalArgs,
        endpointDefinition: k,
        endpointName: D
      }) === l({
        queryArgs: j,
        endpointDefinition: k,
        endpointName: D
      }) && (v = void 0);
    }
    let A = h.isSuccess ? h.data : v == null ? void 0 : v.data;
    A === void 0 && (A = h.data);
    const S = A !== void 0, _ = h.isLoading, E = (!v || v.isLoading || v.isUninitialized) && !S && _, N = h.isSuccess || _ && S;
    return {
      ...h,
      data: A,
      currentData: h.data,
      isFetching: _,
      isLoading: E,
      isSuccess: N
    };
  }
  function d(h, v) {
    const j = r(), A = Ur(v);
    return ft((S, _) => j(e.util.prefetch(h, S, {
      ...A,
      ..._
    })), [h, j, A]);
  }
  function x(h, v, {
    refetchOnReconnect: j,
    refetchOnFocus: A,
    refetchOnMountOrArgChange: S,
    skip: _ = !1,
    pollingInterval: E = 0,
    skipPollingIfUnfocused: N = !1,
    ...D
  } = {}) {
    const {
      initiate: k
    } = e.endpoints[h], B = r(), R = Be(void 0);
    if (!R.current) {
      const Z = B(e.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof Z != "object" || typeof (Z == null ? void 0 : Z.type) == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? _e(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      R.current = Z;
    }
    const T = Hn(
      _ ? ot : v,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      dn,
      i.endpointDefinitions[h],
      h
    ), q = Ur({
      refetchOnReconnect: j,
      refetchOnFocus: A,
      pollingInterval: E,
      skipPollingIfUnfocused: N
    }), I = D.initialPageParam, L = Ur(I), K = Be(void 0);
    let {
      queryCacheKey: O,
      requestId: z
    } = K.current || {}, V = !1;
    O && z && (V = R.current.isRequestSubscribed(O, z));
    const M = !V && K.current !== void 0;
    return a(() => {
      M && (K.current = void 0);
    }, [M]), a(() => {
      var G;
      const Z = K.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(M), T === ot) {
        Z == null || Z.unsubscribe(), K.current = void 0;
        return;
      }
      const ne = (G = K.current) == null ? void 0 : G.subscriptionOptions;
      if (!Z || Z.arg !== T) {
        Z == null || Z.unsubscribe();
        const se = B(k(T, {
          subscriptionOptions: q,
          forceRefetch: S,
          ...Rc(i.endpointDefinitions[h]) ? {
            initialPageParam: L
          } : {}
        }));
        K.current = se;
      } else q !== ne && Z.updateSubscriptionOptions(q);
    }, [B, k, S, T, q, M, L, h]), [K, B, k, q];
  }
  function p(h, v) {
    return (A, {
      skip: S = !1,
      selectFromResult: _
    } = {}) => {
      const {
        select: E
      } = e.endpoints[h], N = Hn(S ? ot : A, l, i.endpointDefinitions[h], h), D = Be(void 0), k = qe(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        f([
          // @ts-ignore
          E(N),
          (I, L) => L,
          (I) => N
        ], v, {
          memoizeOptions: {
            resultEqualityCheck: vr
          }
        })
      ), [E, N]), B = qe(() => _ ? f([k], _, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : k, [k, _]), R = n((I) => B(I, D.current), vr), T = o(), q = k(T.getState(), D.current);
      return ux(() => {
        D.current = q;
      }, [q]), R;
    };
  }
  function g(h) {
    ye(() => () => {
      var v, j;
      (j = (v = h.current) == null ? void 0 : v.unsubscribe) == null || j.call(v), h.current = void 0;
    }, [h]);
  }
  function w(h) {
    if (!h.current) throw new Error(process.env.NODE_ENV === "production" ? _e(38) : "Cannot refetch a query that has not been started yet.");
    return h.current.refetch();
  }
  function C(h) {
    const v = (S, _ = {}) => {
      const [E] = x(h, S, _);
      return g(E), qe(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => w(E)
      }), [E]);
    }, j = ({
      refetchOnReconnect: S,
      refetchOnFocus: _,
      pollingInterval: E = 0,
      skipPollingIfUnfocused: N = !1
    } = {}) => {
      const {
        initiate: D
      } = e.endpoints[h], k = r(), [B, R] = ee($n), T = Be(void 0), q = Ur({
        refetchOnReconnect: S,
        refetchOnFocus: _,
        pollingInterval: E,
        skipPollingIfUnfocused: N
      });
      a(() => {
        var z, V;
        const O = (z = T.current) == null ? void 0 : z.subscriptionOptions;
        q !== O && ((V = T.current) == null || V.updateSubscriptionOptions(q));
      }, [q]);
      const I = Be(q);
      a(() => {
        I.current = q;
      }, [q]);
      const L = ft(function(O, z = !1) {
        let V;
        return t(() => {
          var M;
          (M = T.current) == null || M.unsubscribe(), T.current = V = k(D(O, {
            subscriptionOptions: I.current,
            forceRefetch: !z
          })), R(O);
        }), V;
      }, [k, D]), K = ft(() => {
        var O, z;
        (O = T.current) != null && O.queryCacheKey && k(e.internalActions.removeQueryResult({
          queryCacheKey: (z = T.current) == null ? void 0 : z.queryCacheKey
        }));
      }, [k]);
      return ye(() => () => {
        var O;
        (O = T == null ? void 0 : T.current) == null || O.unsubscribe();
      }, []), ye(() => {
        B !== $n && !T.current && L(B, !0);
      }, [B, L]), qe(() => [L, B, {
        reset: K
      }], [L, B, K]);
    }, A = p(h, u);
    return {
      useQueryState: A,
      useQuerySubscription: v,
      useLazyQuerySubscription: j,
      useLazyQuery(S) {
        const [_, E, {
          reset: N
        }] = j(S), D = A(E, {
          ...S,
          skip: E === $n
        }), k = qe(() => ({
          lastArg: E
        }), [E]);
        return qe(() => [_, {
          ...D,
          reset: N
        }, k], [_, D, N, k]);
      },
      useQuery(S, _) {
        const E = v(S, _), N = A(S, {
          selectFromResult: S === ot || _ != null && _.skip ? void 0 : ya,
          ..._
        }), D = qn(N, ...Wn);
        return _n(D), qe(() => ({
          ...N,
          ...E
        }), [N, E]);
      }
    };
  }
  function b(h) {
    const v = (A, S = {}) => {
      const [_, E, N, D] = x(h, A, S), k = Be(D);
      a(() => {
        k.current = D;
      }, [D]);
      const B = ft(function(q, I) {
        let L;
        return t(() => {
          var K;
          (K = _.current) == null || K.unsubscribe(), _.current = L = E(N(q, {
            subscriptionOptions: k.current,
            direction: I
          }));
        }), L;
      }, [_, E, N]);
      g(_);
      const R = Hn(
        S.skip ? ot : A,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        dn,
        i.endpointDefinitions[h],
        h
      ), T = ft(() => w(_), [_]);
      return qe(() => ({
        trigger: B,
        /**
         * A method to manually refetch data for the query
         */
        refetch: T,
        fetchNextPage: () => B(R, "forward"),
        fetchPreviousPage: () => B(R, "backward")
      }), [T, B, R]);
    }, j = p(h, m);
    return {
      useInfiniteQueryState: j,
      useInfiniteQuerySubscription: v,
      useInfiniteQuery(A, S) {
        const {
          refetch: _,
          fetchNextPage: E,
          fetchPreviousPage: N
        } = v(A, S), D = j(A, {
          selectFromResult: A === ot || S != null && S.skip ? void 0 : ya,
          ...S
        }), k = qn(D, ...Wn, "hasNextPage", "hasPreviousPage");
        return _n(k), qe(() => ({
          ...D,
          fetchNextPage: E,
          fetchPreviousPage: N,
          refetch: _
        }), [D, E, N, _]);
      }
    };
  }
  function y(h) {
    return ({
      selectFromResult: v,
      fixedCacheKey: j
    } = {}) => {
      const {
        select: A,
        initiate: S
      } = e.endpoints[h], _ = r(), [E, N] = ee();
      ye(() => () => {
        E != null && E.arg.fixedCacheKey || E == null || E.reset();
      }, [E]);
      const D = ft(function(O) {
        const z = _(S(O, {
          fixedCacheKey: j
        }));
        return N(z), z;
      }, [_, S, j]), {
        requestId: k
      } = E || {}, B = qe(() => A({
        fixedCacheKey: j,
        requestId: E == null ? void 0 : E.requestId
      }), [j, E, A]), R = qe(() => v ? f([B], v) : B, [v, B]), T = n(R, vr), q = j == null ? E == null ? void 0 : E.arg.originalArgs : void 0, I = ft(() => {
        t(() => {
          E && N(void 0), j && _(e.internalActions.removeMutationResult({
            requestId: k,
            fixedCacheKey: j
          }));
        });
      }, [_, j, E, k]), L = qn(T, ...Wn, "endpointName");
      _n(L);
      const K = qe(() => ({
        ...T,
        originalArgs: q,
        reset: I
      }), [T, q, I]);
      return qe(() => [D, K], [D, K]);
    };
  }
}
var fx = /* @__PURE__ */ Symbol(), xx = ({
  batch: e = tx,
  hooks: t = {
    useDispatch: vo,
    useSelector: Fc,
    useStore: Bc
  },
  createSelector: r = fo,
  unstable__sideEffectsInRender: n = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const c = ["useDispatch", "useSelector", "useStore"];
    let f = !1;
    for (const l of c)
      if (rx(o) > 0 && (o[l] && (f || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), f = !0)), t[l] = o[l]), typeof t[l] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? _e(36) : `When using custom hooks for context, all ${c.length} hooks need to be provided: ${c.join(", ")}.
Hook ${l} was either not provided or not a function.`);
  }
  return {
    name: fx,
    init(c, {
      serializeQueryArgs: f
    }, l) {
      const i = c, {
        buildQueryHooks: a,
        buildInfiniteQueryHooks: u,
        buildMutationHook: m,
        usePrefetch: d
      } = dx({
        api: c,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: n,
          createSelector: r
        },
        serializeQueryArgs: f,
        context: l
      });
      return pr(i, {
        usePrefetch: d
      }), pr(l, {
        batch: e
      }), {
        injectEndpoint(x, p) {
          if (nx(p)) {
            const {
              useQuery: g,
              useLazyQuery: w,
              useLazyQuerySubscription: C,
              useQueryState: b,
              useQuerySubscription: y
            } = a(x);
            pr(i.endpoints[x], {
              useQuery: g,
              useLazyQuery: w,
              useLazyQuerySubscription: C,
              useQueryState: b,
              useQuerySubscription: y
            }), c[`use${Vr(x)}Query`] = g, c[`useLazy${Vr(x)}Query`] = w;
          }
          if (sx(p)) {
            const g = m(x);
            pr(i.endpoints[x], {
              useMutation: g
            }), c[`use${Vr(x)}Mutation`] = g;
          } else if (Rc(p)) {
            const {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: w,
              useInfiniteQueryState: C
            } = u(x);
            pr(i.endpoints[x], {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: w,
              useInfiniteQueryState: C
            }), c[`use${Vr(x)}InfiniteQuery`] = g;
          }
        }
      };
    }
  };
}, hx = /* @__PURE__ */ Of(Uf(), xx()), Oc = { exports: {} };
function px(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Vn = { exports: {} };
const mx = {}, gx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mx
}, Symbol.toStringTag, { value: "Module" })), yx = /* @__PURE__ */ Uc(gx);
var va;
function je() {
  return va || (va = 1, function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(ve, function() {
      var r = r || function(n, o) {
        var c;
        if (typeof window < "u" && window.crypto && (c = window.crypto), typeof self < "u" && self.crypto && (c = self.crypto), typeof globalThis < "u" && globalThis.crypto && (c = globalThis.crypto), !c && typeof window < "u" && window.msCrypto && (c = window.msCrypto), !c && typeof ve < "u" && ve.crypto && (c = ve.crypto), !c && typeof px == "function")
          try {
            c = yx;
          } catch {
          }
        var f = function() {
          if (c) {
            if (typeof c.getRandomValues == "function")
              try {
                return c.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof c.randomBytes == "function")
              try {
                return c.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, l = Object.create || /* @__PURE__ */ function() {
          function b() {
          }
          return function(y) {
            var h;
            return b.prototype = y, h = new b(), b.prototype = null, h;
          };
        }(), i = {}, a = i.lib = {}, u = a.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(b) {
              var y = l(this);
              return b && y.mixIn(b), (!y.hasOwnProperty("init") || this.init === y.init) && (y.init = function() {
                y.$super.init.apply(this, arguments);
              }), y.init.prototype = y, y.$super = this, y;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var b = this.extend();
              return b.init.apply(b, arguments), b;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(b) {
              for (var y in b)
                b.hasOwnProperty(y) && (this[y] = b[y]);
              b.hasOwnProperty("toString") && (this.toString = b.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), m = a.WordArray = u.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(b, y) {
            b = this.words = b || [], y != o ? this.sigBytes = y : this.sigBytes = b.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(b) {
            return (b || x).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(b) {
            var y = this.words, h = b.words, v = this.sigBytes, j = b.sigBytes;
            if (this.clamp(), v % 4)
              for (var A = 0; A < j; A++) {
                var S = h[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                y[v + A >>> 2] |= S << 24 - (v + A) % 4 * 8;
              }
            else
              for (var _ = 0; _ < j; _ += 4)
                y[v + _ >>> 2] = h[_ >>> 2];
            return this.sigBytes += j, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var b = this.words, y = this.sigBytes;
            b[y >>> 2] &= 4294967295 << 32 - y % 4 * 8, b.length = n.ceil(y / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var b = u.clone.call(this);
            return b.words = this.words.slice(0), b;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(b) {
            for (var y = [], h = 0; h < b; h += 4)
              y.push(f());
            return new m.init(y, b);
          }
        }), d = i.enc = {}, x = d.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(b) {
            for (var y = b.words, h = b.sigBytes, v = [], j = 0; j < h; j++) {
              var A = y[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              v.push((A >>> 4).toString(16)), v.push((A & 15).toString(16));
            }
            return v.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(b) {
            for (var y = b.length, h = [], v = 0; v < y; v += 2)
              h[v >>> 3] |= parseInt(b.substr(v, 2), 16) << 24 - v % 8 * 4;
            return new m.init(h, y / 2);
          }
        }, p = d.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(b) {
            for (var y = b.words, h = b.sigBytes, v = [], j = 0; j < h; j++) {
              var A = y[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              v.push(String.fromCharCode(A));
            }
            return v.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(b) {
            for (var y = b.length, h = [], v = 0; v < y; v++)
              h[v >>> 2] |= (b.charCodeAt(v) & 255) << 24 - v % 4 * 8;
            return new m.init(h, y);
          }
        }, g = d.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(b) {
            try {
              return decodeURIComponent(escape(p.stringify(b)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(b) {
            return p.parse(unescape(encodeURIComponent(b)));
          }
        }, w = a.BufferedBlockAlgorithm = u.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new m.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(b) {
            typeof b == "string" && (b = g.parse(b)), this._data.concat(b), this._nDataBytes += b.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(b) {
            var y, h = this._data, v = h.words, j = h.sigBytes, A = this.blockSize, S = A * 4, _ = j / S;
            b ? _ = n.ceil(_) : _ = n.max((_ | 0) - this._minBufferSize, 0);
            var E = _ * A, N = n.min(E * 4, j);
            if (E) {
              for (var D = 0; D < E; D += A)
                this._doProcessBlock(v, D);
              y = v.splice(0, E), h.sigBytes -= N;
            }
            return new m.init(y, N);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var b = u.clone.call(this);
            return b._data = this._data.clone(), b;
          },
          _minBufferSize: 0
        });
        a.Hasher = w.extend({
          /**
           * Configuration options.
           */
          cfg: u.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(b) {
            this.cfg = this.cfg.extend(b), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            w.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(b) {
            return this._append(b), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(b) {
            b && this._append(b);
            var y = this._doFinalize();
            return y;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(b) {
            return function(y, h) {
              return new b.init(h).finalize(y);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(b) {
            return function(y, h) {
              return new C.HMAC.init(b, h).finalize(y);
            };
          }
        });
        var C = i.algo = {};
        return i;
      }(Math);
      return r;
    });
  }(Vn)), Vn.exports;
}
var Un = { exports: {} }, ba;
function An() {
  return ba || (ba = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function(n) {
        var o = r, c = o.lib, f = c.Base, l = c.WordArray, i = o.x64 = {};
        i.Word = f.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(a, u) {
            this.high = a, this.low = u;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), i.WordArray = f.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(a, u) {
            a = this.words = a || [], u != n ? this.sigBytes = u : this.sigBytes = a.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var a = this.words, u = a.length, m = [], d = 0; d < u; d++) {
              var x = a[d];
              m.push(x.high), m.push(x.low);
            }
            return l.create(m, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var a = f.clone.call(this), u = a.words = this.words.slice(0), m = u.length, d = 0; d < m; d++)
              u[d] = u[d].clone();
            return a;
          }
        });
      }(), r;
    });
  }(Un)), Un.exports;
}
var Qn = { exports: {} }, wa;
function vx() {
  return wa || (wa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var n = r, o = n.lib, c = o.WordArray, f = c.init, l = c.init = function(i) {
            if (i instanceof ArrayBuffer && (i = new Uint8Array(i)), (i instanceof Int8Array || typeof Uint8ClampedArray < "u" && i instanceof Uint8ClampedArray || i instanceof Int16Array || i instanceof Uint16Array || i instanceof Int32Array || i instanceof Uint32Array || i instanceof Float32Array || i instanceof Float64Array) && (i = new Uint8Array(i.buffer, i.byteOffset, i.byteLength)), i instanceof Uint8Array) {
              for (var a = i.byteLength, u = [], m = 0; m < a; m++)
                u[m >>> 2] |= i[m] << 24 - m % 4 * 8;
              f.call(this, u, a);
            } else
              f.apply(this, arguments);
          };
          l.prototype = c;
        }
      }(), r.lib.WordArray;
    });
  }(Qn)), Qn.exports;
}
var Kn = { exports: {} }, Ca;
function bx() {
  return Ca || (Ca = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.WordArray, f = n.enc;
        f.Utf16 = f.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(i) {
            for (var a = i.words, u = i.sigBytes, m = [], d = 0; d < u; d += 2) {
              var x = a[d >>> 2] >>> 16 - d % 4 * 8 & 65535;
              m.push(String.fromCharCode(x));
            }
            return m.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(i) {
            for (var a = i.length, u = [], m = 0; m < a; m++)
              u[m >>> 1] |= i.charCodeAt(m) << 16 - m % 2 * 16;
            return c.create(u, a * 2);
          }
        }, f.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(i) {
            for (var a = i.words, u = i.sigBytes, m = [], d = 0; d < u; d += 2) {
              var x = l(a[d >>> 2] >>> 16 - d % 4 * 8 & 65535);
              m.push(String.fromCharCode(x));
            }
            return m.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(i) {
            for (var a = i.length, u = [], m = 0; m < a; m++)
              u[m >>> 1] |= l(i.charCodeAt(m) << 16 - m % 2 * 16);
            return c.create(u, a * 2);
          }
        };
        function l(i) {
          return i << 8 & 4278255360 | i >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(Kn)), Kn.exports;
}
var Gn = { exports: {} }, Ea;
function Yt() {
  return Ea || (Ea = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.WordArray, f = n.enc;
        f.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(i) {
            var a = i.words, u = i.sigBytes, m = this._map;
            i.clamp();
            for (var d = [], x = 0; x < u; x += 3)
              for (var p = a[x >>> 2] >>> 24 - x % 4 * 8 & 255, g = a[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255, w = a[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, C = p << 16 | g << 8 | w, b = 0; b < 4 && x + b * 0.75 < u; b++)
                d.push(m.charAt(C >>> 6 * (3 - b) & 63));
            var y = m.charAt(64);
            if (y)
              for (; d.length % 4; )
                d.push(y);
            return d.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(i) {
            var a = i.length, u = this._map, m = this._reverseMap;
            if (!m) {
              m = this._reverseMap = [];
              for (var d = 0; d < u.length; d++)
                m[u.charCodeAt(d)] = d;
            }
            var x = u.charAt(64);
            if (x) {
              var p = i.indexOf(x);
              p !== -1 && (a = p);
            }
            return l(i, a, m);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function l(i, a, u) {
          for (var m = [], d = 0, x = 0; x < a; x++)
            if (x % 4) {
              var p = u[i.charCodeAt(x - 1)] << x % 4 * 2, g = u[i.charCodeAt(x)] >>> 6 - x % 4 * 2, w = p | g;
              m[d >>> 2] |= w << 24 - d % 4 * 8, d++;
            }
          return c.create(m, d);
        }
      }(), r.enc.Base64;
    });
  }(Gn)), Gn.exports;
}
var Yn = { exports: {} }, ja;
function wx() {
  return ja || (ja = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.WordArray, f = n.enc;
        f.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(i, a) {
            a === void 0 && (a = !0);
            var u = i.words, m = i.sigBytes, d = a ? this._safe_map : this._map;
            i.clamp();
            for (var x = [], p = 0; p < m; p += 3)
              for (var g = u[p >>> 2] >>> 24 - p % 4 * 8 & 255, w = u[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, C = u[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, b = g << 16 | w << 8 | C, y = 0; y < 4 && p + y * 0.75 < m; y++)
                x.push(d.charAt(b >>> 6 * (3 - y) & 63));
            var h = d.charAt(64);
            if (h)
              for (; x.length % 4; )
                x.push(h);
            return x.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(i, a) {
            a === void 0 && (a = !0);
            var u = i.length, m = a ? this._safe_map : this._map, d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var x = 0; x < m.length; x++)
                d[m.charCodeAt(x)] = x;
            }
            var p = m.charAt(64);
            if (p) {
              var g = i.indexOf(p);
              g !== -1 && (u = g);
            }
            return l(i, u, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function l(i, a, u) {
          for (var m = [], d = 0, x = 0; x < a; x++)
            if (x % 4) {
              var p = u[i.charCodeAt(x - 1)] << x % 4 * 2, g = u[i.charCodeAt(x)] >>> 6 - x % 4 * 2, w = p | g;
              m[d >>> 2] |= w << 24 - d % 4 * 8, d++;
            }
          return c.create(m, d);
        }
      }(), r.enc.Base64url;
    });
  }(Yn)), Yn.exports;
}
var Xn = { exports: {} }, Aa;
function Xt() {
  return Aa || (Aa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function(n) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.algo, a = [];
        (function() {
          for (var g = 0; g < 64; g++)
            a[g] = n.abs(n.sin(g + 1)) * 4294967296 | 0;
        })();
        var u = i.MD5 = l.extend({
          _doReset: function() {
            this._hash = new f.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(g, w) {
            for (var C = 0; C < 16; C++) {
              var b = w + C, y = g[b];
              g[b] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360;
            }
            var h = this._hash.words, v = g[w + 0], j = g[w + 1], A = g[w + 2], S = g[w + 3], _ = g[w + 4], E = g[w + 5], N = g[w + 6], D = g[w + 7], k = g[w + 8], B = g[w + 9], R = g[w + 10], T = g[w + 11], q = g[w + 12], I = g[w + 13], L = g[w + 14], K = g[w + 15], O = h[0], z = h[1], V = h[2], M = h[3];
            O = m(O, z, V, M, v, 7, a[0]), M = m(M, O, z, V, j, 12, a[1]), V = m(V, M, O, z, A, 17, a[2]), z = m(z, V, M, O, S, 22, a[3]), O = m(O, z, V, M, _, 7, a[4]), M = m(M, O, z, V, E, 12, a[5]), V = m(V, M, O, z, N, 17, a[6]), z = m(z, V, M, O, D, 22, a[7]), O = m(O, z, V, M, k, 7, a[8]), M = m(M, O, z, V, B, 12, a[9]), V = m(V, M, O, z, R, 17, a[10]), z = m(z, V, M, O, T, 22, a[11]), O = m(O, z, V, M, q, 7, a[12]), M = m(M, O, z, V, I, 12, a[13]), V = m(V, M, O, z, L, 17, a[14]), z = m(z, V, M, O, K, 22, a[15]), O = d(O, z, V, M, j, 5, a[16]), M = d(M, O, z, V, N, 9, a[17]), V = d(V, M, O, z, T, 14, a[18]), z = d(z, V, M, O, v, 20, a[19]), O = d(O, z, V, M, E, 5, a[20]), M = d(M, O, z, V, R, 9, a[21]), V = d(V, M, O, z, K, 14, a[22]), z = d(z, V, M, O, _, 20, a[23]), O = d(O, z, V, M, B, 5, a[24]), M = d(M, O, z, V, L, 9, a[25]), V = d(V, M, O, z, S, 14, a[26]), z = d(z, V, M, O, k, 20, a[27]), O = d(O, z, V, M, I, 5, a[28]), M = d(M, O, z, V, A, 9, a[29]), V = d(V, M, O, z, D, 14, a[30]), z = d(z, V, M, O, q, 20, a[31]), O = x(O, z, V, M, E, 4, a[32]), M = x(M, O, z, V, k, 11, a[33]), V = x(V, M, O, z, T, 16, a[34]), z = x(z, V, M, O, L, 23, a[35]), O = x(O, z, V, M, j, 4, a[36]), M = x(M, O, z, V, _, 11, a[37]), V = x(V, M, O, z, D, 16, a[38]), z = x(z, V, M, O, R, 23, a[39]), O = x(O, z, V, M, I, 4, a[40]), M = x(M, O, z, V, v, 11, a[41]), V = x(V, M, O, z, S, 16, a[42]), z = x(z, V, M, O, N, 23, a[43]), O = x(O, z, V, M, B, 4, a[44]), M = x(M, O, z, V, q, 11, a[45]), V = x(V, M, O, z, K, 16, a[46]), z = x(z, V, M, O, A, 23, a[47]), O = p(O, z, V, M, v, 6, a[48]), M = p(M, O, z, V, D, 10, a[49]), V = p(V, M, O, z, L, 15, a[50]), z = p(z, V, M, O, E, 21, a[51]), O = p(O, z, V, M, q, 6, a[52]), M = p(M, O, z, V, S, 10, a[53]), V = p(V, M, O, z, R, 15, a[54]), z = p(z, V, M, O, j, 21, a[55]), O = p(O, z, V, M, k, 6, a[56]), M = p(M, O, z, V, K, 10, a[57]), V = p(V, M, O, z, N, 15, a[58]), z = p(z, V, M, O, I, 21, a[59]), O = p(O, z, V, M, _, 6, a[60]), M = p(M, O, z, V, T, 10, a[61]), V = p(V, M, O, z, A, 15, a[62]), z = p(z, V, M, O, B, 21, a[63]), h[0] = h[0] + O | 0, h[1] = h[1] + z | 0, h[2] = h[2] + V | 0, h[3] = h[3] + M | 0;
          },
          _doFinalize: function() {
            var g = this._data, w = g.words, C = this._nDataBytes * 8, b = g.sigBytes * 8;
            w[b >>> 5] |= 128 << 24 - b % 32;
            var y = n.floor(C / 4294967296), h = C;
            w[(b + 64 >>> 9 << 4) + 15] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, w[(b + 64 >>> 9 << 4) + 14] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, g.sigBytes = (w.length + 1) * 4, this._process();
            for (var v = this._hash, j = v.words, A = 0; A < 4; A++) {
              var S = j[A];
              j[A] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            return v;
          },
          clone: function() {
            var g = l.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        function m(g, w, C, b, y, h, v) {
          var j = g + (w & C | ~w & b) + y + v;
          return (j << h | j >>> 32 - h) + w;
        }
        function d(g, w, C, b, y, h, v) {
          var j = g + (w & b | C & ~b) + y + v;
          return (j << h | j >>> 32 - h) + w;
        }
        function x(g, w, C, b, y, h, v) {
          var j = g + (w ^ C ^ b) + y + v;
          return (j << h | j >>> 32 - h) + w;
        }
        function p(g, w, C, b, y, h, v) {
          var j = g + (C ^ (w | ~b)) + y + v;
          return (j << h | j >>> 32 - h) + w;
        }
        o.MD5 = l._createHelper(u), o.HmacMD5 = l._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(Xn)), Xn.exports;
}
var Zn = { exports: {} }, Na;
function Pc() {
  return Na || (Na = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.WordArray, f = o.Hasher, l = n.algo, i = [], a = l.SHA1 = f.extend({
          _doReset: function() {
            this._hash = new c.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(u, m) {
            for (var d = this._hash.words, x = d[0], p = d[1], g = d[2], w = d[3], C = d[4], b = 0; b < 80; b++) {
              if (b < 16)
                i[b] = u[m + b] | 0;
              else {
                var y = i[b - 3] ^ i[b - 8] ^ i[b - 14] ^ i[b - 16];
                i[b] = y << 1 | y >>> 31;
              }
              var h = (x << 5 | x >>> 27) + C + i[b];
              b < 20 ? h += (p & g | ~p & w) + 1518500249 : b < 40 ? h += (p ^ g ^ w) + 1859775393 : b < 60 ? h += (p & g | p & w | g & w) - 1894007588 : h += (p ^ g ^ w) - 899497514, C = w, w = g, g = p << 30 | p >>> 2, p = x, x = h;
            }
            d[0] = d[0] + x | 0, d[1] = d[1] + p | 0, d[2] = d[2] + g | 0, d[3] = d[3] + w | 0, d[4] = d[4] + C | 0;
          },
          _doFinalize: function() {
            var u = this._data, m = u.words, d = this._nDataBytes * 8, x = u.sigBytes * 8;
            return m[x >>> 5] |= 128 << 24 - x % 32, m[(x + 64 >>> 9 << 4) + 14] = Math.floor(d / 4294967296), m[(x + 64 >>> 9 << 4) + 15] = d, u.sigBytes = m.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = f.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        n.SHA1 = f._createHelper(a), n.HmacSHA1 = f._createHmacHelper(a);
      }(), r.SHA1;
    });
  }(Zn)), Zn.exports;
}
var Jn = { exports: {} }, _a;
function bo() {
  return _a || (_a = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      return function(n) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.algo, a = [], u = [];
        (function() {
          function x(C) {
            for (var b = n.sqrt(C), y = 2; y <= b; y++)
              if (!(C % y))
                return !1;
            return !0;
          }
          function p(C) {
            return (C - (C | 0)) * 4294967296 | 0;
          }
          for (var g = 2, w = 0; w < 64; )
            x(g) && (w < 8 && (a[w] = p(n.pow(g, 1 / 2))), u[w] = p(n.pow(g, 1 / 3)), w++), g++;
        })();
        var m = [], d = i.SHA256 = l.extend({
          _doReset: function() {
            this._hash = new f.init(a.slice(0));
          },
          _doProcessBlock: function(x, p) {
            for (var g = this._hash.words, w = g[0], C = g[1], b = g[2], y = g[3], h = g[4], v = g[5], j = g[6], A = g[7], S = 0; S < 64; S++) {
              if (S < 16)
                m[S] = x[p + S] | 0;
              else {
                var _ = m[S - 15], E = (_ << 25 | _ >>> 7) ^ (_ << 14 | _ >>> 18) ^ _ >>> 3, N = m[S - 2], D = (N << 15 | N >>> 17) ^ (N << 13 | N >>> 19) ^ N >>> 10;
                m[S] = E + m[S - 7] + D + m[S - 16];
              }
              var k = h & v ^ ~h & j, B = w & C ^ w & b ^ C & b, R = (w << 30 | w >>> 2) ^ (w << 19 | w >>> 13) ^ (w << 10 | w >>> 22), T = (h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25), q = A + T + k + u[S] + m[S], I = R + B;
              A = j, j = v, v = h, h = y + q | 0, y = b, b = C, C = w, w = q + I | 0;
            }
            g[0] = g[0] + w | 0, g[1] = g[1] + C | 0, g[2] = g[2] + b | 0, g[3] = g[3] + y | 0, g[4] = g[4] + h | 0, g[5] = g[5] + v | 0, g[6] = g[6] + j | 0, g[7] = g[7] + A | 0;
          },
          _doFinalize: function() {
            var x = this._data, p = x.words, g = this._nDataBytes * 8, w = x.sigBytes * 8;
            return p[w >>> 5] |= 128 << 24 - w % 32, p[(w + 64 >>> 9 << 4) + 14] = n.floor(g / 4294967296), p[(w + 64 >>> 9 << 4) + 15] = g, x.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var x = l.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        o.SHA256 = l._createHelper(d), o.HmacSHA256 = l._createHmacHelper(d);
      }(Math), r.SHA256;
    });
  }(Jn)), Jn.exports;
}
var es = { exports: {} }, ka;
function Cx() {
  return ka || (ka = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), bo());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.WordArray, f = n.algo, l = f.SHA256, i = f.SHA224 = l.extend({
          _doReset: function() {
            this._hash = new c.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var a = l._doFinalize.call(this);
            return a.sigBytes -= 4, a;
          }
        });
        n.SHA224 = l._createHelper(i), n.HmacSHA224 = l._createHmacHelper(i);
      }(), r.SHA224;
    });
  }(es)), es.exports;
}
var ts = { exports: {} }, Da;
function Tc() {
  return Da || (Da = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), An());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.Hasher, f = n.x64, l = f.Word, i = f.WordArray, a = n.algo;
        function u() {
          return l.create.apply(l, arguments);
        }
        var m = [
          u(1116352408, 3609767458),
          u(1899447441, 602891725),
          u(3049323471, 3964484399),
          u(3921009573, 2173295548),
          u(961987163, 4081628472),
          u(1508970993, 3053834265),
          u(2453635748, 2937671579),
          u(2870763221, 3664609560),
          u(3624381080, 2734883394),
          u(310598401, 1164996542),
          u(607225278, 1323610764),
          u(1426881987, 3590304994),
          u(1925078388, 4068182383),
          u(2162078206, 991336113),
          u(2614888103, 633803317),
          u(3248222580, 3479774868),
          u(3835390401, 2666613458),
          u(4022224774, 944711139),
          u(264347078, 2341262773),
          u(604807628, 2007800933),
          u(770255983, 1495990901),
          u(1249150122, 1856431235),
          u(1555081692, 3175218132),
          u(1996064986, 2198950837),
          u(2554220882, 3999719339),
          u(2821834349, 766784016),
          u(2952996808, 2566594879),
          u(3210313671, 3203337956),
          u(3336571891, 1034457026),
          u(3584528711, 2466948901),
          u(113926993, 3758326383),
          u(338241895, 168717936),
          u(666307205, 1188179964),
          u(773529912, 1546045734),
          u(1294757372, 1522805485),
          u(1396182291, 2643833823),
          u(1695183700, 2343527390),
          u(1986661051, 1014477480),
          u(2177026350, 1206759142),
          u(2456956037, 344077627),
          u(2730485921, 1290863460),
          u(2820302411, 3158454273),
          u(3259730800, 3505952657),
          u(3345764771, 106217008),
          u(3516065817, 3606008344),
          u(3600352804, 1432725776),
          u(4094571909, 1467031594),
          u(275423344, 851169720),
          u(430227734, 3100823752),
          u(506948616, 1363258195),
          u(659060556, 3750685593),
          u(883997877, 3785050280),
          u(958139571, 3318307427),
          u(1322822218, 3812723403),
          u(1537002063, 2003034995),
          u(1747873779, 3602036899),
          u(1955562222, 1575990012),
          u(2024104815, 1125592928),
          u(2227730452, 2716904306),
          u(2361852424, 442776044),
          u(2428436474, 593698344),
          u(2756734187, 3733110249),
          u(3204031479, 2999351573),
          u(3329325298, 3815920427),
          u(3391569614, 3928383900),
          u(3515267271, 566280711),
          u(3940187606, 3454069534),
          u(4118630271, 4000239992),
          u(116418474, 1914138554),
          u(174292421, 2731055270),
          u(289380356, 3203993006),
          u(460393269, 320620315),
          u(685471733, 587496836),
          u(852142971, 1086792851),
          u(1017036298, 365543100),
          u(1126000580, 2618297676),
          u(1288033470, 3409855158),
          u(1501505948, 4234509866),
          u(1607167915, 987167468),
          u(1816402316, 1246189591)
        ], d = [];
        (function() {
          for (var p = 0; p < 80; p++)
            d[p] = u();
        })();
        var x = a.SHA512 = c.extend({
          _doReset: function() {
            this._hash = new i.init([
              new l.init(1779033703, 4089235720),
              new l.init(3144134277, 2227873595),
              new l.init(1013904242, 4271175723),
              new l.init(2773480762, 1595750129),
              new l.init(1359893119, 2917565137),
              new l.init(2600822924, 725511199),
              new l.init(528734635, 4215389547),
              new l.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(p, g) {
            for (var w = this._hash.words, C = w[0], b = w[1], y = w[2], h = w[3], v = w[4], j = w[5], A = w[6], S = w[7], _ = C.high, E = C.low, N = b.high, D = b.low, k = y.high, B = y.low, R = h.high, T = h.low, q = v.high, I = v.low, L = j.high, K = j.low, O = A.high, z = A.low, V = S.high, M = S.low, Z = _, ne = E, G = N, se = D, Ee = k, de = B, ue = R, pe = T, he = q, be = I, Fe = L, we = K, Ae = O, Y = z, P = V, re = M, ae = 0; ae < 80; ae++) {
              var te, Se, ke = d[ae];
              if (ae < 16)
                Se = ke.high = p[g + ae * 2] | 0, te = ke.low = p[g + ae * 2 + 1] | 0;
              else {
                var Te = d[ae - 15], $e = Te.high, $ = Te.low, H = ($e >>> 1 | $ << 31) ^ ($e >>> 8 | $ << 24) ^ $e >>> 7, U = ($ >>> 1 | $e << 31) ^ ($ >>> 8 | $e << 24) ^ ($ >>> 7 | $e << 25), Q = d[ae - 2], ie = Q.high, Pe = Q.low, xe = (ie >>> 19 | Pe << 13) ^ (ie << 3 | Pe >>> 29) ^ ie >>> 6, vt = (Pe >>> 19 | ie << 13) ^ (Pe << 3 | ie >>> 29) ^ (Pe >>> 6 | ie << 26), Lt = d[ae - 7], Zt = Lt.high, Jt = Lt.low, It = d[ae - 16], _t = It.high, kt = It.low;
                te = U + Jt, Se = H + Zt + (te >>> 0 < U >>> 0 ? 1 : 0), te = te + vt, Se = Se + xe + (te >>> 0 < vt >>> 0 ? 1 : 0), te = te + kt, Se = Se + _t + (te >>> 0 < kt >>> 0 ? 1 : 0), ke.high = Se, ke.low = te;
              }
              var nt = he & Fe ^ ~he & Ae, J = be & we ^ ~be & Y, fe = Z & G ^ Z & Ee ^ G & Ee, ge = ne & se ^ ne & de ^ se & de, Re = (Z >>> 28 | ne << 4) ^ (Z << 30 | ne >>> 2) ^ (Z << 25 | ne >>> 7), Ve = (ne >>> 28 | Z << 4) ^ (ne << 30 | Z >>> 2) ^ (ne << 25 | Z >>> 7), Xe = (he >>> 14 | be << 18) ^ (he >>> 18 | be << 14) ^ (he << 23 | be >>> 9), Ue = (be >>> 14 | he << 18) ^ (be >>> 18 | he << 14) ^ (be << 23 | he >>> 9), Ge = m[ae], st = Ge.high, ut = Ge.low, Me = re + Ue, Qe = P + Xe + (Me >>> 0 < re >>> 0 ? 1 : 0), Me = Me + J, Qe = Qe + nt + (Me >>> 0 < J >>> 0 ? 1 : 0), Me = Me + ut, Qe = Qe + st + (Me >>> 0 < ut >>> 0 ? 1 : 0), Me = Me + te, Qe = Qe + Se + (Me >>> 0 < te >>> 0 ? 1 : 0), bt = Ve + ge, Dt = Re + fe + (bt >>> 0 < Ve >>> 0 ? 1 : 0);
              P = Ae, re = Y, Ae = Fe, Y = we, Fe = he, we = be, be = pe + Me | 0, he = ue + Qe + (be >>> 0 < pe >>> 0 ? 1 : 0) | 0, ue = Ee, pe = de, Ee = G, de = se, G = Z, se = ne, ne = Me + bt | 0, Z = Qe + Dt + (ne >>> 0 < Me >>> 0 ? 1 : 0) | 0;
            }
            E = C.low = E + ne, C.high = _ + Z + (E >>> 0 < ne >>> 0 ? 1 : 0), D = b.low = D + se, b.high = N + G + (D >>> 0 < se >>> 0 ? 1 : 0), B = y.low = B + de, y.high = k + Ee + (B >>> 0 < de >>> 0 ? 1 : 0), T = h.low = T + pe, h.high = R + ue + (T >>> 0 < pe >>> 0 ? 1 : 0), I = v.low = I + be, v.high = q + he + (I >>> 0 < be >>> 0 ? 1 : 0), K = j.low = K + we, j.high = L + Fe + (K >>> 0 < we >>> 0 ? 1 : 0), z = A.low = z + Y, A.high = O + Ae + (z >>> 0 < Y >>> 0 ? 1 : 0), M = S.low = M + re, S.high = V + P + (M >>> 0 < re >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, g = p.words, w = this._nDataBytes * 8, C = p.sigBytes * 8;
            g[C >>> 5] |= 128 << 24 - C % 32, g[(C + 128 >>> 10 << 5) + 30] = Math.floor(w / 4294967296), g[(C + 128 >>> 10 << 5) + 31] = w, p.sigBytes = g.length * 4, this._process();
            var b = this._hash.toX32();
            return b;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        n.SHA512 = c._createHelper(x), n.HmacSHA512 = c._createHmacHelper(x);
      }(), r.SHA512;
    });
  }(ts)), ts.exports;
}
var rs = { exports: {} }, Sa;
function Ex() {
  return Sa || (Sa = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), An(), Tc());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.x64, c = o.Word, f = o.WordArray, l = n.algo, i = l.SHA512, a = l.SHA384 = i.extend({
          _doReset: function() {
            this._hash = new f.init([
              new c.init(3418070365, 3238371032),
              new c.init(1654270250, 914150663),
              new c.init(2438529370, 812702999),
              new c.init(355462360, 4144912697),
              new c.init(1731405415, 4290775857),
              new c.init(2394180231, 1750603025),
              new c.init(3675008525, 1694076839),
              new c.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var u = i._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        n.SHA384 = i._createHelper(a), n.HmacSHA384 = i._createHmacHelper(a);
      }(), r.SHA384;
    });
  }(rs)), rs.exports;
}
var ns = { exports: {} }, Ba;
function jx() {
  return Ba || (Ba = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), An());
    })(ve, function(r) {
      return function(n) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.x64, a = i.Word, u = o.algo, m = [], d = [], x = [];
        (function() {
          for (var w = 1, C = 0, b = 0; b < 24; b++) {
            m[w + 5 * C] = (b + 1) * (b + 2) / 2 % 64;
            var y = C % 5, h = (2 * w + 3 * C) % 5;
            w = y, C = h;
          }
          for (var w = 0; w < 5; w++)
            for (var C = 0; C < 5; C++)
              d[w + 5 * C] = C + (2 * w + 3 * C) % 5 * 5;
          for (var v = 1, j = 0; j < 24; j++) {
            for (var A = 0, S = 0, _ = 0; _ < 7; _++) {
              if (v & 1) {
                var E = (1 << _) - 1;
                E < 32 ? S ^= 1 << E : A ^= 1 << E - 32;
              }
              v & 128 ? v = v << 1 ^ 113 : v <<= 1;
            }
            x[j] = a.create(A, S);
          }
        })();
        var p = [];
        (function() {
          for (var w = 0; w < 25; w++)
            p[w] = a.create();
        })();
        var g = u.SHA3 = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: l.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var w = this._state = [], C = 0; C < 25; C++)
              w[C] = new a.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(w, C) {
            for (var b = this._state, y = this.blockSize / 2, h = 0; h < y; h++) {
              var v = w[C + 2 * h], j = w[C + 2 * h + 1];
              v = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, j = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
              var A = b[h];
              A.high ^= j, A.low ^= v;
            }
            for (var S = 0; S < 24; S++) {
              for (var _ = 0; _ < 5; _++) {
                for (var E = 0, N = 0, D = 0; D < 5; D++) {
                  var A = b[_ + 5 * D];
                  E ^= A.high, N ^= A.low;
                }
                var k = p[_];
                k.high = E, k.low = N;
              }
              for (var _ = 0; _ < 5; _++)
                for (var B = p[(_ + 4) % 5], R = p[(_ + 1) % 5], T = R.high, q = R.low, E = B.high ^ (T << 1 | q >>> 31), N = B.low ^ (q << 1 | T >>> 31), D = 0; D < 5; D++) {
                  var A = b[_ + 5 * D];
                  A.high ^= E, A.low ^= N;
                }
              for (var I = 1; I < 25; I++) {
                var E, N, A = b[I], L = A.high, K = A.low, O = m[I];
                O < 32 ? (E = L << O | K >>> 32 - O, N = K << O | L >>> 32 - O) : (E = K << O - 32 | L >>> 64 - O, N = L << O - 32 | K >>> 64 - O);
                var z = p[d[I]];
                z.high = E, z.low = N;
              }
              var V = p[0], M = b[0];
              V.high = M.high, V.low = M.low;
              for (var _ = 0; _ < 5; _++)
                for (var D = 0; D < 5; D++) {
                  var I = _ + 5 * D, A = b[I], Z = p[I], ne = p[(_ + 1) % 5 + 5 * D], G = p[(_ + 2) % 5 + 5 * D];
                  A.high = Z.high ^ ~ne.high & G.high, A.low = Z.low ^ ~ne.low & G.low;
                }
              var A = b[0], se = x[S];
              A.high ^= se.high, A.low ^= se.low;
            }
          },
          _doFinalize: function() {
            var w = this._data, C = w.words;
            this._nDataBytes * 8;
            var b = w.sigBytes * 8, y = this.blockSize * 32;
            C[b >>> 5] |= 1 << 24 - b % 32, C[(n.ceil((b + 1) / y) * y >>> 5) - 1] |= 128, w.sigBytes = C.length * 4, this._process();
            for (var h = this._state, v = this.cfg.outputLength / 8, j = v / 8, A = [], S = 0; S < j; S++) {
              var _ = h[S], E = _.high, N = _.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, A.push(N), A.push(E);
            }
            return new f.init(A, v);
          },
          clone: function() {
            for (var w = l.clone.call(this), C = w._state = this._state.slice(0), b = 0; b < 25; b++)
              C[b] = C[b].clone();
            return w;
          }
        });
        o.SHA3 = l._createHelper(g), o.HmacSHA3 = l._createHmacHelper(g);
      }(Math), r.SHA3;
    });
  }(ns)), ns.exports;
}
var ss = { exports: {} }, Fa;
function Ax() {
  return Fa || (Fa = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(n) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.algo, a = f.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), u = f.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), m = f.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), d = f.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), x = f.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), p = f.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), g = i.RIPEMD160 = l.extend({
          _doReset: function() {
            this._hash = f.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(j, A) {
            for (var S = 0; S < 16; S++) {
              var _ = A + S, E = j[_];
              j[_] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var N = this._hash.words, D = x.words, k = p.words, B = a.words, R = u.words, T = m.words, q = d.words, I, L, K, O, z, V, M, Z, ne, G;
            V = I = N[0], M = L = N[1], Z = K = N[2], ne = O = N[3], G = z = N[4];
            for (var se, S = 0; S < 80; S += 1)
              se = I + j[A + B[S]] | 0, S < 16 ? se += w(L, K, O) + D[0] : S < 32 ? se += C(L, K, O) + D[1] : S < 48 ? se += b(L, K, O) + D[2] : S < 64 ? se += y(L, K, O) + D[3] : se += h(L, K, O) + D[4], se = se | 0, se = v(se, T[S]), se = se + z | 0, I = z, z = O, O = v(K, 10), K = L, L = se, se = V + j[A + R[S]] | 0, S < 16 ? se += h(M, Z, ne) + k[0] : S < 32 ? se += y(M, Z, ne) + k[1] : S < 48 ? se += b(M, Z, ne) + k[2] : S < 64 ? se += C(M, Z, ne) + k[3] : se += w(M, Z, ne) + k[4], se = se | 0, se = v(se, q[S]), se = se + G | 0, V = G, G = ne, ne = v(Z, 10), Z = M, M = se;
            se = N[1] + K + ne | 0, N[1] = N[2] + O + G | 0, N[2] = N[3] + z + V | 0, N[3] = N[4] + I + M | 0, N[4] = N[0] + L + Z | 0, N[0] = se;
          },
          _doFinalize: function() {
            var j = this._data, A = j.words, S = this._nDataBytes * 8, _ = j.sigBytes * 8;
            A[_ >>> 5] |= 128 << 24 - _ % 32, A[(_ + 64 >>> 9 << 4) + 14] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, j.sigBytes = (A.length + 1) * 4, this._process();
            for (var E = this._hash, N = E.words, D = 0; D < 5; D++) {
              var k = N[D];
              N[D] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var j = l.clone.call(this);
            return j._hash = this._hash.clone(), j;
          }
        });
        function w(j, A, S) {
          return j ^ A ^ S;
        }
        function C(j, A, S) {
          return j & A | ~j & S;
        }
        function b(j, A, S) {
          return (j | ~A) ^ S;
        }
        function y(j, A, S) {
          return j & S | A & ~S;
        }
        function h(j, A, S) {
          return j ^ (A | ~S);
        }
        function v(j, A) {
          return j << A | j >>> 32 - A;
        }
        o.RIPEMD160 = l._createHelper(g), o.HmacRIPEMD160 = l._createHmacHelper(g);
      }(), r.RIPEMD160;
    });
  }(ss)), ss.exports;
}
var os = { exports: {} }, Ra;
function wo() {
  return Ra || (Ra = 1, function(e, t) {
    (function(r, n) {
      e.exports = n(je());
    })(ve, function(r) {
      (function() {
        var n = r, o = n.lib, c = o.Base, f = n.enc, l = f.Utf8, i = n.algo;
        i.HMAC = c.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(a, u) {
            a = this._hasher = new a.init(), typeof u == "string" && (u = l.parse(u));
            var m = a.blockSize, d = m * 4;
            u.sigBytes > d && (u = a.finalize(u)), u.clamp();
            for (var x = this._oKey = u.clone(), p = this._iKey = u.clone(), g = x.words, w = p.words, C = 0; C < m; C++)
              g[C] ^= 1549556828, w[C] ^= 909522486;
            x.sigBytes = p.sigBytes = d, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var a = this._hasher;
            a.reset(), a.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(a) {
            return this._hasher.update(a), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(a) {
            var u = this._hasher, m = u.finalize(a);
            u.reset();
            var d = u.finalize(this._oKey.clone().concat(m));
            return d;
          }
        });
      })();
    });
  }(os)), os.exports;
}
var as = { exports: {} }, Oa;
function Nx() {
  return Oa || (Oa = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), bo(), wo());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.Base, f = o.WordArray, l = n.algo, i = l.SHA256, a = l.HMAC, u = l.PBKDF2 = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: c.extend({
            keySize: 128 / 32,
            hasher: i,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(m) {
            this.cfg = this.cfg.extend(m);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(m, d) {
            for (var x = this.cfg, p = a.create(x.hasher, m), g = f.create(), w = f.create([1]), C = g.words, b = w.words, y = x.keySize, h = x.iterations; C.length < y; ) {
              var v = p.update(d).finalize(w);
              p.reset();
              for (var j = v.words, A = j.length, S = v, _ = 1; _ < h; _++) {
                S = p.finalize(S), p.reset();
                for (var E = S.words, N = 0; N < A; N++)
                  j[N] ^= E[N];
              }
              g.concat(v), b[0]++;
            }
            return g.sigBytes = y * 4, g;
          }
        });
        n.PBKDF2 = function(m, d, x) {
          return u.create(x).compute(m, d);
        };
      }(), r.PBKDF2;
    });
  }(as)), as.exports;
}
var is = { exports: {} }, Pa;
function Mt() {
  return Pa || (Pa = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Pc(), wo());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.Base, f = o.WordArray, l = n.algo, i = l.MD5, a = l.EvpKDF = c.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: c.extend({
            keySize: 128 / 32,
            hasher: i,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(u) {
            this.cfg = this.cfg.extend(u);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(u, m) {
            for (var d, x = this.cfg, p = x.hasher.create(), g = f.create(), w = g.words, C = x.keySize, b = x.iterations; w.length < C; ) {
              d && p.update(d), d = p.update(u).finalize(m), p.reset();
              for (var y = 1; y < b; y++)
                d = p.finalize(d), p.reset();
              g.concat(d);
            }
            return g.sigBytes = C * 4, g;
          }
        });
        n.EvpKDF = function(u, m, d) {
          return a.create(d).compute(u, m);
        };
      }(), r.EvpKDF;
    });
  }(is)), is.exports;
}
var cs = { exports: {} }, Ta;
function ze() {
  return Ta || (Ta = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Mt());
    })(ve, function(r) {
      r.lib.Cipher || function(n) {
        var o = r, c = o.lib, f = c.Base, l = c.WordArray, i = c.BufferedBlockAlgorithm, a = o.enc;
        a.Utf8;
        var u = a.Base64, m = o.algo, d = m.EvpKDF, x = c.Cipher = i.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: f.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(E, N) {
            return this.create(this._ENC_XFORM_MODE, E, N);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(E, N) {
            return this.create(this._DEC_XFORM_MODE, E, N);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(E, N, D) {
            this.cfg = this.cfg.extend(D), this._xformMode = E, this._key = N, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            i.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(E) {
            return this._append(E), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(E) {
            E && this._append(E);
            var N = this._doFinalize();
            return N;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function E(N) {
              return typeof N == "string" ? _ : j;
            }
            return function(N) {
              return {
                encrypt: function(D, k, B) {
                  return E(k).encrypt(N, D, k, B);
                },
                decrypt: function(D, k, B) {
                  return E(k).decrypt(N, D, k, B);
                }
              };
            };
          }()
        });
        c.StreamCipher = x.extend({
          _doFinalize: function() {
            var E = this._process(!0);
            return E;
          },
          blockSize: 1
        });
        var p = o.mode = {}, g = c.BlockCipherMode = f.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(E, N) {
            return this.Encryptor.create(E, N);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(E, N) {
            return this.Decryptor.create(E, N);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(E, N) {
            this._cipher = E, this._iv = N;
          }
        }), w = p.CBC = function() {
          var E = g.extend();
          E.Encryptor = E.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(D, k) {
              var B = this._cipher, R = B.blockSize;
              N.call(this, D, k, R), B.encryptBlock(D, k), this._prevBlock = D.slice(k, k + R);
            }
          }), E.Decryptor = E.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(D, k) {
              var B = this._cipher, R = B.blockSize, T = D.slice(k, k + R);
              B.decryptBlock(D, k), N.call(this, D, k, R), this._prevBlock = T;
            }
          });
          function N(D, k, B) {
            var R, T = this._iv;
            T ? (R = T, this._iv = n) : R = this._prevBlock;
            for (var q = 0; q < B; q++)
              D[k + q] ^= R[q];
          }
          return E;
        }(), C = o.pad = {}, b = C.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(E, N) {
            for (var D = N * 4, k = D - E.sigBytes % D, B = k << 24 | k << 16 | k << 8 | k, R = [], T = 0; T < k; T += 4)
              R.push(B);
            var q = l.create(R, k);
            E.concat(q);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(E) {
            var N = E.words[E.sigBytes - 1 >>> 2] & 255;
            E.sigBytes -= N;
          }
        };
        c.BlockCipher = x.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: x.cfg.extend({
            mode: w,
            padding: b
          }),
          reset: function() {
            var E;
            x.reset.call(this);
            var N = this.cfg, D = N.iv, k = N.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = k.createEncryptor : (E = k.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, D && D.words) : (this._mode = E.call(k, this, D && D.words), this._mode.__creator = E);
          },
          _doProcessBlock: function(E, N) {
            this._mode.processBlock(E, N);
          },
          _doFinalize: function() {
            var E, N = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (N.pad(this._data, this.blockSize), E = this._process(!0)) : (E = this._process(!0), N.unpad(E)), E;
          },
          blockSize: 128 / 32
        });
        var y = c.CipherParams = f.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(E) {
            this.mixIn(E);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(E) {
            return (E || this.formatter).stringify(this);
          }
        }), h = o.format = {}, v = h.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(E) {
            var N, D = E.ciphertext, k = E.salt;
            return k ? N = l.create([1398893684, 1701076831]).concat(k).concat(D) : N = D, N.toString(u);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(E) {
            var N, D = u.parse(E), k = D.words;
            return k[0] == 1398893684 && k[1] == 1701076831 && (N = l.create(k.slice(2, 4)), k.splice(0, 4), D.sigBytes -= 16), y.create({ ciphertext: D, salt: N });
          }
        }, j = c.SerializableCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: f.extend({
            format: v
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(E, N, D, k) {
            k = this.cfg.extend(k);
            var B = E.createEncryptor(D, k), R = B.finalize(N), T = B.cfg;
            return y.create({
              ciphertext: R,
              key: D,
              iv: T.iv,
              algorithm: E,
              mode: T.mode,
              padding: T.padding,
              blockSize: E.blockSize,
              formatter: k.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(E, N, D, k) {
            k = this.cfg.extend(k), N = this._parse(N, k.format);
            var B = E.createDecryptor(D, k).finalize(N.ciphertext);
            return B;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(E, N) {
            return typeof E == "string" ? N.parse(E, this) : E;
          }
        }), A = o.kdf = {}, S = A.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(E, N, D, k, B) {
            if (k || (k = l.random(64 / 8)), B)
              var R = d.create({ keySize: N + D, hasher: B }).compute(E, k);
            else
              var R = d.create({ keySize: N + D }).compute(E, k);
            var T = l.create(R.words.slice(N), D * 4);
            return R.sigBytes = N * 4, y.create({ key: R, iv: T, salt: k });
          }
        }, _ = c.PasswordBasedCipher = j.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: j.cfg.extend({
            kdf: S
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(E, N, D, k) {
            k = this.cfg.extend(k);
            var B = k.kdf.execute(D, E.keySize, E.ivSize, k.salt, k.hasher);
            k.iv = B.iv;
            var R = j.encrypt.call(this, E, N, B.key, k);
            return R.mixIn(B), R;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(E, N, D, k) {
            k = this.cfg.extend(k), N = this._parse(N, k.format);
            var B = k.kdf.execute(D, E.keySize, E.ivSize, N.salt, k.hasher);
            k.iv = B.iv;
            var R = j.decrypt.call(this, E, N, B.key, k);
            return R;
          }
        });
      }();
    });
  }(cs)), cs.exports;
}
var ls = { exports: {} }, Ma;
function _x() {
  return Ma || (Ma = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.mode.CFB = function() {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function(c, f) {
            var l = this._cipher, i = l.blockSize;
            o.call(this, c, f, i, l), this._prevBlock = c.slice(f, f + i);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(c, f) {
            var l = this._cipher, i = l.blockSize, a = c.slice(f, f + i);
            o.call(this, c, f, i, l), this._prevBlock = a;
          }
        });
        function o(c, f, l, i) {
          var a, u = this._iv;
          u ? (a = u.slice(0), this._iv = void 0) : a = this._prevBlock, i.encryptBlock(a, 0);
          for (var m = 0; m < l; m++)
            c[f + m] ^= a[m];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(ls)), ls.exports;
}
var us = { exports: {} }, La;
function kx() {
  return La || (La = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.mode.CTR = function() {
        var n = r.lib.BlockCipherMode.extend(), o = n.Encryptor = n.extend({
          processBlock: function(c, f) {
            var l = this._cipher, i = l.blockSize, a = this._iv, u = this._counter;
            a && (u = this._counter = a.slice(0), this._iv = void 0);
            var m = u.slice(0);
            l.encryptBlock(m, 0), u[i - 1] = u[i - 1] + 1 | 0;
            for (var d = 0; d < i; d++)
              c[f + d] ^= m[d];
          }
        });
        return n.Decryptor = o, n;
      }(), r.mode.CTR;
    });
  }(us)), us.exports;
}
var ds = { exports: {} }, Ia;
function Dx() {
  return Ia || (Ia = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var n = r.lib.BlockCipherMode.extend();
        function o(l) {
          if ((l >> 24 & 255) === 255) {
            var i = l >> 16 & 255, a = l >> 8 & 255, u = l & 255;
            i === 255 ? (i = 0, a === 255 ? (a = 0, u === 255 ? u = 0 : ++u) : ++a) : ++i, l = 0, l += i << 16, l += a << 8, l += u;
          } else
            l += 1 << 24;
          return l;
        }
        function c(l) {
          return (l[0] = o(l[0])) === 0 && (l[1] = o(l[1])), l;
        }
        var f = n.Encryptor = n.extend({
          processBlock: function(l, i) {
            var a = this._cipher, u = a.blockSize, m = this._iv, d = this._counter;
            m && (d = this._counter = m.slice(0), this._iv = void 0), c(d);
            var x = d.slice(0);
            a.encryptBlock(x, 0);
            for (var p = 0; p < u; p++)
              l[i + p] ^= x[p];
          }
        });
        return n.Decryptor = f, n;
      }(), r.mode.CTRGladman;
    });
  }(ds)), ds.exports;
}
var fs = { exports: {} }, za;
function Sx() {
  return za || (za = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.mode.OFB = function() {
        var n = r.lib.BlockCipherMode.extend(), o = n.Encryptor = n.extend({
          processBlock: function(c, f) {
            var l = this._cipher, i = l.blockSize, a = this._iv, u = this._keystream;
            a && (u = this._keystream = a.slice(0), this._iv = void 0), l.encryptBlock(u, 0);
            for (var m = 0; m < i; m++)
              c[f + m] ^= u[m];
          }
        });
        return n.Decryptor = o, n;
      }(), r.mode.OFB;
    });
  }(fs)), fs.exports;
}
var xs = { exports: {} }, $a;
function Bx() {
  return $a || ($a = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.mode.ECB = function() {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function(o, c) {
            this._cipher.encryptBlock(o, c);
          }
        }), n.Decryptor = n.extend({
          processBlock: function(o, c) {
            this._cipher.decryptBlock(o, c);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(xs)), xs.exports;
}
var hs = { exports: {} }, Ha;
function Fx() {
  return Ha || (Ha = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(n, o) {
          var c = n.sigBytes, f = o * 4, l = f - c % f, i = c + l - 1;
          n.clamp(), n.words[i >>> 2] |= l << 24 - i % 4 * 8, n.sigBytes += l;
        },
        unpad: function(n) {
          var o = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= o;
        }
      }, r.pad.Ansix923;
    });
  }(hs)), hs.exports;
}
var ps = { exports: {} }, qa;
function Rx() {
  return qa || (qa = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.pad.Iso10126 = {
        pad: function(n, o) {
          var c = o * 4, f = c - n.sigBytes % c;
          n.concat(r.lib.WordArray.random(f - 1)).concat(r.lib.WordArray.create([f << 24], 1));
        },
        unpad: function(n) {
          var o = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= o;
        }
      }, r.pad.Iso10126;
    });
  }(ps)), ps.exports;
}
var ms = { exports: {} }, Wa;
function Ox() {
  return Wa || (Wa = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.pad.Iso97971 = {
        pad: function(n, o) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, o);
        },
        unpad: function(n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(ms)), ms.exports;
}
var gs = { exports: {} }, Va;
function Px() {
  return Va || (Va = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(n, o) {
          var c = o * 4;
          n.clamp(), n.sigBytes += c - (n.sigBytes % c || c);
        },
        unpad: function(n) {
          for (var o = n.words, c = n.sigBytes - 1, c = n.sigBytes - 1; c >= 0; c--)
            if (o[c >>> 2] >>> 24 - c % 4 * 8 & 255) {
              n.sigBytes = c + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(gs)), gs.exports;
}
var ys = { exports: {} }, Ua;
function Tx() {
  return Ua || (Ua = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(ys)), ys.exports;
}
var vs = { exports: {} }, Qa;
function Mx() {
  return Qa || (Qa = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), ze());
    })(ve, function(r) {
      return function(n) {
        var o = r, c = o.lib, f = c.CipherParams, l = o.enc, i = l.Hex, a = o.format;
        a.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(u) {
            return u.ciphertext.toString(i);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(u) {
            var m = i.parse(u);
            return f.create({ ciphertext: m });
          }
        };
      }(), r.format.Hex;
    });
  }(vs)), vs.exports;
}
var bs = { exports: {} }, Ka;
function Lx() {
  return Ka || (Ka = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Yt(), Xt(), Mt(), ze());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.BlockCipher, f = n.algo, l = [], i = [], a = [], u = [], m = [], d = [], x = [], p = [], g = [], w = [];
        (function() {
          for (var y = [], h = 0; h < 256; h++)
            h < 128 ? y[h] = h << 1 : y[h] = h << 1 ^ 283;
          for (var v = 0, j = 0, h = 0; h < 256; h++) {
            var A = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4;
            A = A >>> 8 ^ A & 255 ^ 99, l[v] = A, i[A] = v;
            var S = y[v], _ = y[S], E = y[_], N = y[A] * 257 ^ A * 16843008;
            a[v] = N << 24 | N >>> 8, u[v] = N << 16 | N >>> 16, m[v] = N << 8 | N >>> 24, d[v] = N;
            var N = E * 16843009 ^ _ * 65537 ^ S * 257 ^ v * 16843008;
            x[A] = N << 24 | N >>> 8, p[A] = N << 16 | N >>> 16, g[A] = N << 8 | N >>> 24, w[A] = N, v ? (v = S ^ y[y[y[E ^ S]]], j ^= y[y[j]]) : v = j = 1;
          }
        })();
        var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], b = f.AES = c.extend({
          _doReset: function() {
            var y;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var h = this._keyPriorReset = this._key, v = h.words, j = h.sigBytes / 4, A = this._nRounds = j + 6, S = (A + 1) * 4, _ = this._keySchedule = [], E = 0; E < S; E++)
                E < j ? _[E] = v[E] : (y = _[E - 1], E % j ? j > 6 && E % j == 4 && (y = l[y >>> 24] << 24 | l[y >>> 16 & 255] << 16 | l[y >>> 8 & 255] << 8 | l[y & 255]) : (y = y << 8 | y >>> 24, y = l[y >>> 24] << 24 | l[y >>> 16 & 255] << 16 | l[y >>> 8 & 255] << 8 | l[y & 255], y ^= C[E / j | 0] << 24), _[E] = _[E - j] ^ y);
              for (var N = this._invKeySchedule = [], D = 0; D < S; D++) {
                var E = S - D;
                if (D % 4)
                  var y = _[E];
                else
                  var y = _[E - 4];
                D < 4 || E <= 4 ? N[D] = y : N[D] = x[l[y >>> 24]] ^ p[l[y >>> 16 & 255]] ^ g[l[y >>> 8 & 255]] ^ w[l[y & 255]];
              }
            }
          },
          encryptBlock: function(y, h) {
            this._doCryptBlock(y, h, this._keySchedule, a, u, m, d, l);
          },
          decryptBlock: function(y, h) {
            var v = y[h + 1];
            y[h + 1] = y[h + 3], y[h + 3] = v, this._doCryptBlock(y, h, this._invKeySchedule, x, p, g, w, i);
            var v = y[h + 1];
            y[h + 1] = y[h + 3], y[h + 3] = v;
          },
          _doCryptBlock: function(y, h, v, j, A, S, _, E) {
            for (var N = this._nRounds, D = y[h] ^ v[0], k = y[h + 1] ^ v[1], B = y[h + 2] ^ v[2], R = y[h + 3] ^ v[3], T = 4, q = 1; q < N; q++) {
              var I = j[D >>> 24] ^ A[k >>> 16 & 255] ^ S[B >>> 8 & 255] ^ _[R & 255] ^ v[T++], L = j[k >>> 24] ^ A[B >>> 16 & 255] ^ S[R >>> 8 & 255] ^ _[D & 255] ^ v[T++], K = j[B >>> 24] ^ A[R >>> 16 & 255] ^ S[D >>> 8 & 255] ^ _[k & 255] ^ v[T++], O = j[R >>> 24] ^ A[D >>> 16 & 255] ^ S[k >>> 8 & 255] ^ _[B & 255] ^ v[T++];
              D = I, k = L, B = K, R = O;
            }
            var I = (E[D >>> 24] << 24 | E[k >>> 16 & 255] << 16 | E[B >>> 8 & 255] << 8 | E[R & 255]) ^ v[T++], L = (E[k >>> 24] << 24 | E[B >>> 16 & 255] << 16 | E[R >>> 8 & 255] << 8 | E[D & 255]) ^ v[T++], K = (E[B >>> 24] << 24 | E[R >>> 16 & 255] << 16 | E[D >>> 8 & 255] << 8 | E[k & 255]) ^ v[T++], O = (E[R >>> 24] << 24 | E[D >>> 16 & 255] << 16 | E[k >>> 8 & 255] << 8 | E[B & 255]) ^ v[T++];
            y[h] = I, y[h + 1] = L, y[h + 2] = K, y[h + 3] = O;
          },
          keySize: 256 / 32
        });
        n.AES = c._createHelper(b);
      }(), r.AES;
    });
  }(bs)), bs.exports;
}
var ws = { exports: {} }, Ga;
function Ix() {
  return Ga || (Ga = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Yt(), Xt(), Mt(), ze());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.WordArray, f = o.BlockCipher, l = n.algo, i = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], a = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], m = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], d = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], x = l.DES = f.extend({
          _doReset: function() {
            for (var C = this._key, b = C.words, y = [], h = 0; h < 56; h++) {
              var v = i[h] - 1;
              y[h] = b[v >>> 5] >>> 31 - v % 32 & 1;
            }
            for (var j = this._subKeys = [], A = 0; A < 16; A++) {
              for (var S = j[A] = [], _ = u[A], h = 0; h < 24; h++)
                S[h / 6 | 0] |= y[(a[h] - 1 + _) % 28] << 31 - h % 6, S[4 + (h / 6 | 0)] |= y[28 + (a[h + 24] - 1 + _) % 28] << 31 - h % 6;
              S[0] = S[0] << 1 | S[0] >>> 31;
              for (var h = 1; h < 7; h++)
                S[h] = S[h] >>> (h - 1) * 4 + 3;
              S[7] = S[7] << 5 | S[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], h = 0; h < 16; h++)
              E[h] = j[15 - h];
          },
          encryptBlock: function(C, b) {
            this._doCryptBlock(C, b, this._subKeys);
          },
          decryptBlock: function(C, b) {
            this._doCryptBlock(C, b, this._invSubKeys);
          },
          _doCryptBlock: function(C, b, y) {
            this._lBlock = C[b], this._rBlock = C[b + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), g.call(this, 2, 858993459), g.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var h = 0; h < 16; h++) {
              for (var v = y[h], j = this._lBlock, A = this._rBlock, S = 0, _ = 0; _ < 8; _++)
                S |= m[_][((A ^ v[_]) & d[_]) >>> 0];
              this._lBlock = A, this._rBlock = j ^ S;
            }
            var E = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = E, p.call(this, 1, 1431655765), g.call(this, 8, 16711935), g.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), C[b] = this._lBlock, C[b + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(C, b) {
          var y = (this._lBlock >>> C ^ this._rBlock) & b;
          this._rBlock ^= y, this._lBlock ^= y << C;
        }
        function g(C, b) {
          var y = (this._rBlock >>> C ^ this._lBlock) & b;
          this._lBlock ^= y, this._rBlock ^= y << C;
        }
        n.DES = f._createHelper(x);
        var w = l.TripleDES = f.extend({
          _doReset: function() {
            var C = this._key, b = C.words;
            if (b.length !== 2 && b.length !== 4 && b.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var y = b.slice(0, 2), h = b.length < 4 ? b.slice(0, 2) : b.slice(2, 4), v = b.length < 6 ? b.slice(0, 2) : b.slice(4, 6);
            this._des1 = x.createEncryptor(c.create(y)), this._des2 = x.createEncryptor(c.create(h)), this._des3 = x.createEncryptor(c.create(v));
          },
          encryptBlock: function(C, b) {
            this._des1.encryptBlock(C, b), this._des2.decryptBlock(C, b), this._des3.encryptBlock(C, b);
          },
          decryptBlock: function(C, b) {
            this._des3.decryptBlock(C, b), this._des2.encryptBlock(C, b), this._des1.decryptBlock(C, b);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        n.TripleDES = f._createHelper(w);
      }(), r.TripleDES;
    });
  }(ws)), ws.exports;
}
var Cs = { exports: {} }, Ya;
function zx() {
  return Ya || (Ya = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Yt(), Xt(), Mt(), ze());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.StreamCipher, f = n.algo, l = f.RC4 = c.extend({
          _doReset: function() {
            for (var u = this._key, m = u.words, d = u.sigBytes, x = this._S = [], p = 0; p < 256; p++)
              x[p] = p;
            for (var p = 0, g = 0; p < 256; p++) {
              var w = p % d, C = m[w >>> 2] >>> 24 - w % 4 * 8 & 255;
              g = (g + x[p] + C) % 256;
              var b = x[p];
              x[p] = x[g], x[g] = b;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, m) {
            u[m] ^= i.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function i() {
          for (var u = this._S, m = this._i, d = this._j, x = 0, p = 0; p < 4; p++) {
            m = (m + 1) % 256, d = (d + u[m]) % 256;
            var g = u[m];
            u[m] = u[d], u[d] = g, x |= u[(u[m] + u[d]) % 256] << 24 - p * 8;
          }
          return this._i = m, this._j = d, x;
        }
        n.RC4 = c._createHelper(l);
        var a = f.RC4Drop = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: l.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            l._doReset.call(this);
            for (var u = this.cfg.drop; u > 0; u--)
              i.call(this);
          }
        });
        n.RC4Drop = c._createHelper(a);
      }(), r.RC4;
    });
  }(Cs)), Cs.exports;
}
var Es = { exports: {} }, Xa;
function $x() {
  return Xa || (Xa = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Yt(), Xt(), Mt(), ze());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.StreamCipher, f = n.algo, l = [], i = [], a = [], u = f.Rabbit = c.extend({
          _doReset: function() {
            for (var d = this._key.words, x = this.cfg.iv, p = 0; p < 4; p++)
              d[p] = (d[p] << 8 | d[p] >>> 24) & 16711935 | (d[p] << 24 | d[p] >>> 8) & 4278255360;
            var g = this._X = [
              d[0],
              d[3] << 16 | d[2] >>> 16,
              d[1],
              d[0] << 16 | d[3] >>> 16,
              d[2],
              d[1] << 16 | d[0] >>> 16,
              d[3],
              d[2] << 16 | d[1] >>> 16
            ], w = this._C = [
              d[2] << 16 | d[2] >>> 16,
              d[0] & 4294901760 | d[1] & 65535,
              d[3] << 16 | d[3] >>> 16,
              d[1] & 4294901760 | d[2] & 65535,
              d[0] << 16 | d[0] >>> 16,
              d[2] & 4294901760 | d[3] & 65535,
              d[1] << 16 | d[1] >>> 16,
              d[3] & 4294901760 | d[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              m.call(this);
            for (var p = 0; p < 8; p++)
              w[p] ^= g[p + 4 & 7];
            if (x) {
              var C = x.words, b = C[0], y = C[1], h = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, v = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, j = h >>> 16 | v & 4294901760, A = v << 16 | h & 65535;
              w[0] ^= h, w[1] ^= j, w[2] ^= v, w[3] ^= A, w[4] ^= h, w[5] ^= j, w[6] ^= v, w[7] ^= A;
              for (var p = 0; p < 4; p++)
                m.call(this);
            }
          },
          _doProcessBlock: function(d, x) {
            var p = this._X;
            m.call(this), l[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, l[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, l[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, l[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var g = 0; g < 4; g++)
              l[g] = (l[g] << 8 | l[g] >>> 24) & 16711935 | (l[g] << 24 | l[g] >>> 8) & 4278255360, d[x + g] ^= l[g];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function m() {
          for (var d = this._X, x = this._C, p = 0; p < 8; p++)
            i[p] = x[p];
          x[0] = x[0] + 1295307597 + this._b | 0, x[1] = x[1] + 3545052371 + (x[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, x[2] = x[2] + 886263092 + (x[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, x[3] = x[3] + 1295307597 + (x[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, x[4] = x[4] + 3545052371 + (x[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, x[5] = x[5] + 886263092 + (x[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, x[6] = x[6] + 1295307597 + (x[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, x[7] = x[7] + 3545052371 + (x[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = x[7] >>> 0 < i[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var g = d[p] + x[p], w = g & 65535, C = g >>> 16, b = ((w * w >>> 17) + w * C >>> 15) + C * C, y = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = b ^ y;
          }
          d[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, d[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, d[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, d[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, d[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, d[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, d[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, d[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        n.Rabbit = c._createHelper(u);
      }(), r.Rabbit;
    });
  }(Es)), Es.exports;
}
var js = { exports: {} }, Za;
function Hx() {
  return Za || (Za = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Yt(), Xt(), Mt(), ze());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.StreamCipher, f = n.algo, l = [], i = [], a = [], u = f.RabbitLegacy = c.extend({
          _doReset: function() {
            var d = this._key.words, x = this.cfg.iv, p = this._X = [
              d[0],
              d[3] << 16 | d[2] >>> 16,
              d[1],
              d[0] << 16 | d[3] >>> 16,
              d[2],
              d[1] << 16 | d[0] >>> 16,
              d[3],
              d[2] << 16 | d[1] >>> 16
            ], g = this._C = [
              d[2] << 16 | d[2] >>> 16,
              d[0] & 4294901760 | d[1] & 65535,
              d[3] << 16 | d[3] >>> 16,
              d[1] & 4294901760 | d[2] & 65535,
              d[0] << 16 | d[0] >>> 16,
              d[2] & 4294901760 | d[3] & 65535,
              d[1] << 16 | d[1] >>> 16,
              d[3] & 4294901760 | d[0] & 65535
            ];
            this._b = 0;
            for (var w = 0; w < 4; w++)
              m.call(this);
            for (var w = 0; w < 8; w++)
              g[w] ^= p[w + 4 & 7];
            if (x) {
              var C = x.words, b = C[0], y = C[1], h = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, v = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, j = h >>> 16 | v & 4294901760, A = v << 16 | h & 65535;
              g[0] ^= h, g[1] ^= j, g[2] ^= v, g[3] ^= A, g[4] ^= h, g[5] ^= j, g[6] ^= v, g[7] ^= A;
              for (var w = 0; w < 4; w++)
                m.call(this);
            }
          },
          _doProcessBlock: function(d, x) {
            var p = this._X;
            m.call(this), l[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, l[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, l[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, l[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var g = 0; g < 4; g++)
              l[g] = (l[g] << 8 | l[g] >>> 24) & 16711935 | (l[g] << 24 | l[g] >>> 8) & 4278255360, d[x + g] ^= l[g];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function m() {
          for (var d = this._X, x = this._C, p = 0; p < 8; p++)
            i[p] = x[p];
          x[0] = x[0] + 1295307597 + this._b | 0, x[1] = x[1] + 3545052371 + (x[0] >>> 0 < i[0] >>> 0 ? 1 : 0) | 0, x[2] = x[2] + 886263092 + (x[1] >>> 0 < i[1] >>> 0 ? 1 : 0) | 0, x[3] = x[3] + 1295307597 + (x[2] >>> 0 < i[2] >>> 0 ? 1 : 0) | 0, x[4] = x[4] + 3545052371 + (x[3] >>> 0 < i[3] >>> 0 ? 1 : 0) | 0, x[5] = x[5] + 886263092 + (x[4] >>> 0 < i[4] >>> 0 ? 1 : 0) | 0, x[6] = x[6] + 1295307597 + (x[5] >>> 0 < i[5] >>> 0 ? 1 : 0) | 0, x[7] = x[7] + 3545052371 + (x[6] >>> 0 < i[6] >>> 0 ? 1 : 0) | 0, this._b = x[7] >>> 0 < i[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var g = d[p] + x[p], w = g & 65535, C = g >>> 16, b = ((w * w >>> 17) + w * C >>> 15) + C * C, y = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = b ^ y;
          }
          d[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, d[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, d[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, d[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, d[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, d[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, d[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, d[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        n.RabbitLegacy = c._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(js)), js.exports;
}
var As = { exports: {} }, Ja;
function qx() {
  return Ja || (Ja = 1, function(e, t) {
    (function(r, n, o) {
      e.exports = n(je(), Yt(), Xt(), Mt(), ze());
    })(ve, function(r) {
      return function() {
        var n = r, o = n.lib, c = o.BlockCipher, f = n.algo;
        const l = 16, i = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], a = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var u = {
          pbox: [],
          sbox: []
        };
        function m(w, C) {
          let b = C >> 24 & 255, y = C >> 16 & 255, h = C >> 8 & 255, v = C & 255, j = w.sbox[0][b] + w.sbox[1][y];
          return j = j ^ w.sbox[2][h], j = j + w.sbox[3][v], j;
        }
        function d(w, C, b) {
          let y = C, h = b, v;
          for (let j = 0; j < l; ++j)
            y = y ^ w.pbox[j], h = m(w, y) ^ h, v = y, y = h, h = v;
          return v = y, y = h, h = v, h = h ^ w.pbox[l], y = y ^ w.pbox[l + 1], { left: y, right: h };
        }
        function x(w, C, b) {
          let y = C, h = b, v;
          for (let j = l + 1; j > 1; --j)
            y = y ^ w.pbox[j], h = m(w, y) ^ h, v = y, y = h, h = v;
          return v = y, y = h, h = v, h = h ^ w.pbox[1], y = y ^ w.pbox[0], { left: y, right: h };
        }
        function p(w, C, b) {
          for (let A = 0; A < 4; A++) {
            w.sbox[A] = [];
            for (let S = 0; S < 256; S++)
              w.sbox[A][S] = a[A][S];
          }
          let y = 0;
          for (let A = 0; A < l + 2; A++)
            w.pbox[A] = i[A] ^ C[y], y++, y >= b && (y = 0);
          let h = 0, v = 0, j = 0;
          for (let A = 0; A < l + 2; A += 2)
            j = d(w, h, v), h = j.left, v = j.right, w.pbox[A] = h, w.pbox[A + 1] = v;
          for (let A = 0; A < 4; A++)
            for (let S = 0; S < 256; S += 2)
              j = d(w, h, v), h = j.left, v = j.right, w.sbox[A][S] = h, w.sbox[A][S + 1] = v;
          return !0;
        }
        var g = f.Blowfish = c.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var w = this._keyPriorReset = this._key, C = w.words, b = w.sigBytes / 4;
              p(u, C, b);
            }
          },
          encryptBlock: function(w, C) {
            var b = d(u, w[C], w[C + 1]);
            w[C] = b.left, w[C + 1] = b.right;
          },
          decryptBlock: function(w, C) {
            var b = x(u, w[C], w[C + 1]);
            w[C] = b.left, w[C + 1] = b.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        n.Blowfish = c._createHelper(g);
      }(), r.Blowfish;
    });
  }(As)), As.exports;
}
(function(e, t) {
  (function(r, n, o) {
    e.exports = n(je(), An(), vx(), bx(), Yt(), wx(), Xt(), Pc(), bo(), Cx(), Tc(), Ex(), jx(), Ax(), wo(), Nx(), Mt(), ze(), _x(), kx(), Dx(), Sx(), Bx(), Fx(), Rx(), Ox(), Px(), Tx(), Mx(), Lx(), Ix(), zx(), $x(), Hx(), qx());
  })(ve, function(r) {
    return r;
  });
})(Oc);
var Wx = Oc.exports;
const Qr = /* @__PURE__ */ Vc(Wx), Vx = (e) => {
  const t = "97cc+XE5NTUVhWOrdxrESw==";
  try {
    const r = Qr.AES.decrypt(
      e.replace(/^"(.*)"$/, "$1"),
      Qr.enc.Base64.parse(t),
      { mode: Qr.mode.ECB }
    ).toString(Qr.enc.Utf8);
    return JSON.parse(r);
  } catch {
    return null;
  }
}, fn = hx({
  reducerPath: "InboxService",
  baseQuery: Af({
    baseUrl: "https://notification.infinitisoftware.net/notificationapi/notification",
    // This allows you to access files in the public folder
    credentials: "include",
    prepareHeaders: (e) => {
      var n;
      const t = Vx(localStorage.getItem("user")), r = sessionStorage.getItem("iframe_token");
      if (r && r && e.set("Authorization", `Bearer ${r}`), t) {
        const o = (n = JSON.parse(t)) == null ? void 0 : n.token;
        o && e.set("X-XSRF-TOKEN", o);
      }
      return e;
    }
  }),
  endpoints: () => ({})
}), Ux = fn.enhanceEndpoints({
  addTagTypes: ["demo"]
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (e) => ({
    getMailListResponse: e.query({
      // query: () => `/mail-server/?project=${localStorage.getItem("project")}&page=1&page_size=100`, // dynamic project ID
      query: (t) => ({
        url: `/mail-server/?project=${localStorage.getItem("project")}`,
        method: "GET",
        params: t
      })
    }),
    getConvoResponse: e.query({
      query: () => "staticResponse/convoResponse.json"
    }),
    getConversationDetails: e.query({
      query: (t) => `/mail-server/${t.id}/?project=${localStorage.getItem("project")}`
    }),
    getAIReplyResponse: e.mutation({
      query: (t) => ({
        url: "/mail-server/ai-replay/",
        method: "POST",
        body: t
      }),
      invalidatesTags: ["mailer"]
    }),
    getSettings: e.query({
      query: (t) => ({
        url: `/setting/?ordering=-setting&nolimit=Y&project=${localStorage.getItem("project")}`,
        method: "GET"
      })
    }),
    sentMail: e.mutation({
      query: (t) => ({
        url: "/mail-sent/",
        method: "POST",
        body: t
      }),
      invalidatesTags: ["mailer"]
    })
  })
}), {
  useLazyGetMailListResponseQuery: Mc,
  useLazyGetConvoResponseQuery: lh,
  useLazyGetConversationDetailsQuery: Qx,
  useGetAIReplyResponseMutation: Kx,
  useLazyGetSettingsQuery: Gx,
  useSentMailMutation: Yx
} = Ux, Xx = ({
  emails: e,
  selectedEmailId: t,
  onEmailSelect: r,
  onStarToggle: n,
  onCheckToggle: o,
  checkedEmails: c,
  activeSection: f,
  customLabels: l,
  onEmailLabelsChange: i,
  onCreateLabel: a,
  onBulkMarkAsRead: u,
  onBulkDelete: m,
  onBulkRestore: d,
  onSelectAll: x,
  onUnselectAll: p,
  onUndo: g,
  setEmails: w,
  readStatus: C,
  searchFilter: b
}) => {
  const [y, h] = ee(""), [v, j] = ee(320), [A, S] = ee(!1), [_, E] = ee(!1), N = Be(null), D = Be(0), k = Be(320), [B, R] = Mc(), [T, q] = ee({
    page: 1,
    page_size: 20,
    search: void 0
  }), [I, L] = ee(0), K = Fc((Y) => Y.filters);
  console.log(K), vo();
  const [O, z] = ee(!1), [V, M] = ee("inbox");
  ye(() => {
    (K == null ? void 0 : K.search) === "" && (B(T), z(!1));
  }, [T, K]), ye(() => {
    K !== void 0 && Object.keys(K).length >= 1 && (K == null ? void 0 : K.search) !== "" && (w && O === !1 && w([]), B(K), z(!0));
  }, [K]), ye(() => {
    var Y, P, re, ae, te, Se;
    if (R.isSuccess && w) {
      const ke = (re = (P = (Y = R == null ? void 0 : R.data) == null ? void 0 : Y.response) == null ? void 0 : P.data) == null ? void 0 : re.results;
      console.log(ke, "Arunkumarr"), ke && Array.isArray(ke) && (L(
        ((Se = (te = (ae = R == null ? void 0 : R.data) == null ? void 0 : ae.response) == null ? void 0 : te.data) == null ? void 0 : Se.count) || 0
      ), w((Te) => {
        const $e = new Map(Te.map((H) => [H.mail_id, H]));
        return ke.map((H) => $e.has(H.mail_id) ? $e.get(H.mail_id) : {
          ...H,
          intentLabel: H.labels || "new"
        });
      }));
    }
  }, [R]);
  const Z = (Y, P) => {
    P.stopPropagation(), r(Y, !0);
  };
  ye(() => {
    var Y, P, re;
    h(
      ((P = (Y = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : Y.to) == null ? void 0 : P.length) > 0 ? (re = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : re.to[0] : void 0
    );
  }, [e]);
  const ne = (Y) => {
    const P = new Date(Y), ae = ((/* @__PURE__ */ new Date()).getTime() - P.getTime()) / (1e3 * 60 * 60);
    return ae < 24 ? P.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : ae < 168 ? P.toLocaleDateString("en-US", { weekday: "short" }) : P.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, G = (Y) => {
    const P = Y.toLowerCase();
    return P.includes("get") ? {
      text: "Get Info",
      icon: ai,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600"
    } : P.includes("approve") || P.includes("success") || P.includes("confirmed") ? {
      text: "Approved",
      icon: ii,
      color: "bg-green-100 text-green-800",
      iconColor: "text-green-600"
    } : P.includes("cancel") || P.includes("rejected") || P.includes("failed") ? {
      text: "Cancelled",
      icon: pi,
      color: "bg-red-100 text-red-800",
      iconColor: "text-red-600"
    } : P.includes("ticket") || P.includes("booking") || P.includes("reservation") ? {
      text: "Ticketing",
      icon: xi,
      color: "bg-yellow-100 text-yellow-800",
      iconColor: "text-yellow-600"
    } : P.includes("feedback") || P.includes("report") ? {
      text: "Feedback",
      icon: d0,
      color: "bg-orange-100 text-orange-800",
      iconColor: "text-orange-600"
    } : {
      text: "new",
      icon: Yr,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600"
    };
  }, se = (Y) => {
    switch (Y) {
      case "inbox":
        return "Inbox";
      case "sent":
        return "Sent";
      case "drafts":
        return "Drafts";
      case "starred":
        return "Starred";
      case "snoozed":
        return "Snoozed";
      case "label-work":
        return "Work";
      case "label-personal":
        return "Personal";
      case "label-important":
        return "Important";
      case "label-travel":
        return "Travel";
      default:
        if (Y.startsWith("custom-label-")) {
          const P = Y.replace("custom-label-", ""), re = l.find((ae) => ae.id === P);
          return (re == null ? void 0 : re.name) || "Unknown Label";
        }
        return "Inbox";
    }
  }, Ee = (Y) => {
    switch (Y) {
      case "inbox":
        return di;
      case "sent":
        return Ks;
      case "drafts":
        return Gr;
      case "starred":
        return Zr;
      case "snoozed":
        return Qs;
      default:
        return Jr;
    }
  }, de = (Y) => Y.labels ? Y.labels.map((P) => l.find((re) => re.id === P)).filter(Boolean) : [], ue = ({ section: Y }) => {
    const P = Ee(Y), re = se(Y);
    return /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center justify-center h-96 text-center p-8", children: [
      /* @__PURE__ */ s.jsx("div", { className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ s.jsx(P, { className: "w-10 h-10 text-gray-400" }) }),
      /* @__PURE__ */ s.jsxs("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: [
        "No emails in ",
        re
      ] }),
      /* @__PURE__ */ s.jsx("p", { className: "text-gray-500 max-w-sm", children: Y === "starred" ? "Star important conversations to find them quickly here." : Y === "snoozed" ? "Snoozed conversations will appear here when it's time to deal with them." : Y.startsWith("custom-label-") || Y.startsWith("label-") ? `Conversations with the "${re}" label will appear here.` : "No conversations available yet." })
    ] });
  }, pe = Array.from(c), he = pe.length > 0, be = ft(
    (Y) => {
      Y.preventDefault(), S(!0), D.current = Y.clientX, k.current = v, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    },
    [v]
  ), Fe = (Y) => {
    if (!Y) return "";
    const P = Y.match(/^(.*?)\s*<.*?>$/);
    return P ? P[1] : Y;
  }, we = ft(
    (Y) => {
      if (!A) return;
      Y.preventDefault();
      const P = Y.clientX - D.current, re = k.current + P, ae = Math.max(240, Math.min(re, 800));
      requestAnimationFrame(() => {
        j(ae);
      });
    },
    [A]
  ), Ae = ft(() => {
    S(!1), document.body.style.cursor = "", document.body.style.userSelect = "";
  }, []);
  return or.useEffect(() => (A && (document.addEventListener("mousemove", we, { passive: !1 }), document.addEventListener("mouseup", Ae)), () => {
    document.removeEventListener("mousemove", we), document.removeEventListener("mouseup", Ae), document.body.style.cursor = "", document.body.style.userSelect = "";
  }), [A, we, Ae]), e.length === 0 ? /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: N,
      style: {
        width: `${v}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: be,
            children: /* @__PURE__ */ s.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ s.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ s.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: se(f) }) }),
        /* @__PURE__ */ s.jsx(ue, { section: f })
      ]
    }
  ) : /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: N,
      style: {
        width: `${v}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: be,
            children: /* @__PURE__ */ s.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "p-4 border-b border-gray-200",
            style: { backgroundColor: "#eef7fe" },
            children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    onClick: () => {
                      c.size === e.length ? p() : x();
                    },
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    title: c.size === e.length ? "Unselect all" : "Select all",
                    children: c.size === e.length && e.length > 0 ? /* @__PURE__ */ s.jsx(Ao, { className: "w-4 h-4 text-blue-600" }) : c.size > 0 ? /* @__PURE__ */ s.jsx(kn, { className: "w-4 h-4 text-blue-600 fill-blue-100" }) : /* @__PURE__ */ s.jsx(kn, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { style: { height: "100%" }, children: [
                  /* @__PURE__ */ s.jsxs("h2", { className: "text-lg font-semibold text-gray-900", children: [
                    V === "sent" ? "Sent" : "Conversations",
                    ` (${e.filter((Y) => !Y.is_read).length}/${C === "all" ? I : e.length})`
                  ] }),
                  /* @__PURE__ */ s.jsx("p", { className: "text-sm mt-1 truncate", children: V === "inbox" && "support@atyourprice.net" })
                ] })
              ] }),
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                he && /* @__PURE__ */ s.jsx(
                  P0,
                  {
                    emailIds: pe,
                    currentLabels: [],
                    availableLabels: l,
                    onLabelsChange: (Y, P) => {
                      i(Y, P), setTimeout(() => {
                        p();
                      }, 100);
                    },
                    onCreateLabel: a
                  }
                ),
                /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: () => E(!_),
                      className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      title: "More actions",
                      children: /* @__PURE__ */ s.jsx(fi, { className: "w-4 h-4" })
                    }
                  ),
                  _ && /* @__PURE__ */ s.jsx("div", { className: "absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ s.jsxs("div", { className: "p-1", children: [
                    he ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          onClick: () => {
                            u(pe, !0), E(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Read"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          onClick: () => {
                            u(pe, !1), E(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Unread"
                        }
                      ),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          onClick: () => {
                            m(pe), E(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors",
                          children: "Delete"
                        }
                      )
                    ] }) : /* @__PURE__ */ s.jsx("div", { className: "px-3 py-2 text-sm text-gray-500", children: "Select emails to see actions" }),
                    g && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                      /* @__PURE__ */ s.jsx("div", { className: "border-t border-gray-100 my-1" }),
                      /* @__PURE__ */ s.jsx(
                        "button",
                        {
                          onClick: () => {
                            g(), E(!1);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Undo Last Action"
                        }
                      )
                    ] })
                  ] }) })
                ] })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: "divide-y divide-gray-100 overflow-y-auto max-h-[calc(100vh-8rem)] thin-scrollbar",
            onScroll: (Y) => {
              const P = Y.currentTarget;
              P.scrollHeight - P.scrollTop === P.clientHeight && (O || (q((re) => ({
                ...re,
                page: re.page + 1
              })), z(!1)));
            },
            children: e.map((Y) => {
              const P = t === Y.message_id, re = c.has(Y.message_id), ae = de(Y);
              return /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${P ? "bg-blue-50 border-r-2 border-blue-500" : ""}
                ${Y.is_read ? "" : "bg-blue-25"}
              `,
                  onClick: () => r(Y),
                  onDoubleClick: (te) => Z(Y, te),
                  title: "Double-click to open in full-page view",
                  style: {
                    ...P ? { borderRight: "1px solid blue" } : {}
                  },
                  children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-start space-x-3", children: [
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: (te) => {
                          te.stopPropagation(), o(Y.message_id);
                        },
                        className: "mt-1 text-gray-400 hover:text-gray-600 transition-colors",
                        children: re ? /* @__PURE__ */ s.jsx(Ao, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ s.jsx(kn, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: (te) => {
                          te.stopPropagation(), n(Y.message_id);
                        },
                        className: "mt-1 transition-colors",
                        children: /* @__PURE__ */ s.jsx(
                          Zr,
                          {
                            className: `w-4 h-4 ${Y.is_starred ? "text-yellow-500 fill-yellow-500" : "text-gray-400 hover:text-yellow-500"}`
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ s.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2 min-w-0", children: [
                          /* @__PURE__ */ s.jsx(
                            "p",
                            {
                              className: `
                        text-sm mt-1
                        ${Y.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                              children: Fe(Y.from_address)
                            }
                          ),
                          (Y == null ? void 0 : Y.intent) && /* @__PURE__ */ s.jsxs(
                            "div",
                            {
                              className: `
                          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                          ${G(Y.intent).color}
                        `,
                              children: [
                                or.createElement(
                                  G(Y.intent).icon,
                                  {
                                    className: `w-3 h-3 mr-1 ${G(Y.intent).iconColor}`
                                  }
                                ),
                                G(Y.intent).text
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ s.jsx("p", { className: "text-xs text-gray-500 ml-2 flex-shrink-0", children: ne(Y.created_at) })
                      ] }),
                      /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ s.jsx("div", { className: "flex items-center space-x-2 min-w-0", children: /* @__PURE__ */ s.jsx(
                        "p",
                        {
                          className: `
                        text-sm mt-1
                        ${Y.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                          children: Y.subject
                        }
                      ) }) }),
                      /* @__PURE__ */ s.jsx(
                        "p",
                        {
                          className: `
                    text-sm mt-1 truncate
                    ${Y.is_read ? "text-gray-400" : "text-gray-700 font-medium"}
                  `,
                          children: Y.snippet
                        }
                      ),
                      ae.length > 0 && /* @__PURE__ */ s.jsx(nd, { emailLabels: Y == null ? void 0 : Y.labels })
                    ] })
                  ] })
                },
                Y.message_id
              );
            })
          }
        )
      ]
    }
  );
}, ei = ({
  isOpen: e,
  onClose: t,
  triggerRef: r,
  entitiesInfo: n
}) => {
  console.log("Entities Info:", n);
  const o = Be(null), [c, f] = ee({ top: 0, left: 0 });
  if (ye(() => {
    if (e && r.current && o.current) {
      const i = r.current.getBoundingClientRect(), a = o.current.getBoundingClientRect(), u = i.bottom + 8, m = i.left, d = window.innerWidth - a.width - 16, x = Math.min(m, d);
      f({ top: u, left: x });
    }
  }, [e, r]), ye(() => {
    const i = (u) => {
      o.current && !o.current.contains(u.target) && r.current && !r.current.contains(u.target) && t();
    }, a = (u) => {
      u.key === "Escape" && t();
    };
    if (e)
      return document.addEventListener("mousedown", i), document.addEventListener("keydown", a), () => {
        document.removeEventListener("mousedown", i), document.removeEventListener("keydown", a);
      };
  }, [e, t, r]), !e) return null;
  const l = (i) => {
    switch (i.toLowerCase()) {
      case "ticket":
      case "pnr":
        return /* @__PURE__ */ s.jsx(xi, { className: "w-4 h-4 text-green-600" });
      case "travel":
      case "airline":
      case "train":
        return /* @__PURE__ */ s.jsx(y0, { className: "w-4 h-4 text-blue-600" });
      case "date":
        return /* @__PURE__ */ s.jsx(Gr, { className: "w-4 h-4 text-purple-600" });
      case "status":
        return /* @__PURE__ */ s.jsx(ii, { className: "w-4 h-4 text-green-600" });
      case "cancellation":
        return /* @__PURE__ */ s.jsx(pi, { className: "w-4 h-4 text-red-600" });
      default:
        return /* @__PURE__ */ s.jsx(Gr, { className: "w-4 h-4 text-gray-500" });
    }
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 z-40" }),
    /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: o,
        className: "fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80",
        style: {
          top: `${c.top}px`,
          left: `${c.left}px`
        },
        children: [
          /* @__PURE__ */ s.jsx("div", { className: "absolute -top-2 left-9 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45" }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Observation Overview" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: t,
                className: "text-gray-400 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ s.jsx(et, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("div", { className: "space-y-4", children: n && Object.entries(n).map(([i, a]) => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
              l(i),
              /* @__PURE__ */ s.jsxs("span", { className: "text-sm font-medium text-gray-700 capitalize", children: [
                i.replace(/_/g, " "),
                ":"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("span", { title: String(a), className: "text-sm text-gray-900 font-mono truncate max-w-[150px] text-right", children: String(a) })
          ] }, i)) })
        ]
      }
    )
  ] });
}, Zx = () => {
  const [e, t] = ee({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return ye(() => {
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, ti = ({
  email: e,
  onClose: t,
  onBack: r,
  isFullPage: n = !1,
  aiReplyState: o,
  onGenerateAiReply: c,
  onAiReplyStateChange: f,
  customLabels: l,
  onEmailLabelsChange: i,
  onCreateLabel: a,
  onDeleteEmail: u,
  onRestoreEmail: m,
  activeSection: d,
  onStarToggle: x
}) => {
  var Zt, Jt, It, _t, kt, nt;
  const { width: p } = Zx(), [g, w] = ee(""), [C, b] = ee(!1), [y, h] = ee(""), [v, j] = ee(!1), [A, S] = ee(void 0), [_, E] = ee(
    /* @__PURE__ */ new Set()
  ), [N, D] = ee(!1), [k, B] = ee(!1), [R, T] = ee(!1), [q, I] = ee([]), L = Be(null), K = Be(null), O = Be(null), z = Be(null), [V, M] = Qx(), [Z, ne] = Kx(), [G, se] = ee([]), Ee = Be(null), [de, ue] = ee(), [pe, he] = Gx(), [be, Fe] = Yx();
  ye(() => {
    h("");
  }, [e]), ye(() => {
    pe({});
  }, []), ye(() => {
    var J, fe, ge, Re;
    he != null && he.isSuccess && (console.log("Settings fetched successfully", (fe = (J = he == null ? void 0 : he.data) == null ? void 0 : J.response) == null ? void 0 : fe.data), ue((Re = (ge = he == null ? void 0 : he.data) == null ? void 0 : ge.response) == null ? void 0 : Re.data));
  }, [he]), ye(() => {
    o.showAiReply && L.current && setTimeout(() => {
      var J;
      (J = L.current) == null || J.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [o.showAiReply]), ye(() => {
    v && g === o.generatedReply && K.current && setTimeout(() => {
      var J;
      (J = K.current) == null || J.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [v, g, o.generatedReply]), ye(() => {
    const J = (fe) => {
      Ee.current && !Ee.current.contains(fe.target) && T(!1);
    };
    if (R)
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
  }, [R]), ye(() => {
    if (e != null && e.mail_id) {
      let J = e == null ? void 0 : e.mail_id;
      V({ id: J });
    }
  }, [e == null ? void 0 : e.mail_id]);
  const we = (J) => J.reduce((fe, ge) => ge.entities && typeof ge.entities == "object" ? { ...fe, ...ge.entities } : fe, {});
  if (ye(() => {
    var J, fe, ge;
    if (M != null && M.isSuccess) {
      const Re = (ge = (fe = (J = M == null ? void 0 : M.data) == null ? void 0 : J.response) == null ? void 0 : fe.data) == null ? void 0 : ge.conversation;
      Re && (se(Re), I(we(Re)));
    }
  }, [M]), !e)
    return /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ s.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ s.jsx("div", { className: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ s.jsx("span", { className: "text-4xl text-gray-400", children: "📧" }) }),
      /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Select an email" }),
      /* @__PURE__ */ s.jsx("p", { className: "text-gray-500", children: "Choose an email from the list to view the conversation" })
    ] }) });
  const Ae = (J) => new Date(J).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), Y = () => {
    var J, fe, ge, Re, Ve, Xe, Ue, Ge, st, ut, Me, Qe, bt, Dt, St, er, F, X, oe, le, Ne, De, Ce;
    if (g.trim()) {
      let me = "MANUAL";
      g === o.generatedReply && o.generatedReply ? me = "AI" : o.generatedReply && g.includes(o.generatedReply) && (me = "AI_EDITED"), console.log("Reply sent with type:", me);
      const He = (J = G[G.length - 1]) == null ? void 0 : J.from_address, Oe = de == null ? void 0 : de.find(
        (Ke) => Ke.from_email_id === He
      );
      Oe == null || Oe.setting_id, console.log(
        g,
        G[G.length - 1],
        {
          mail_id: (fe = G[G.length - 1]) == null ? void 0 : fe.mail_id,
          thread_id: (ge = G[G.length - 1]) == null ? void 0 : ge.thread_id,
          folder: (Re = G[G.length - 1]) == null ? void 0 : Re.folder,
          subject: (Ve = G[G.length - 1]) == null ? void 0 : Ve.subject,
          to: [(Xe = G[G.length - 1]) == null ? void 0 : Xe.from_address],
          cc: (Ue = G[G.length - 1]) == null ? void 0 : Ue.cc,
          bcc: (Ge = G[G.length - 1]) == null ? void 0 : Ge.bcc,
          body_plain: (st = G[G.length - 1]) == null ? void 0 : st.body_plain,
          body_html: (ut = G[G.length - 1]) == null ? void 0 : ut.body_html,
          reply_type: me,
          edited: !1,
          labels: ((Me = G[G.length - 1]) == null ? void 0 : Me.labels) || [],
          ai_response: {
            intent: ((Qe = G[G.length - 1]) == null ? void 0 : Qe.intent) || "reply",
            entities: ((bt = G[G.length - 1]) == null ? void 0 : bt.entities) || {},
            reply: g
          },
          setting_id: 4
        }
      );
      const dt = `<!DOCTYPE html>
<html
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowSVG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      sup,
      sub {
        line-height: 0;
        font-size: 75%;
      }

      @media (max-width: 620px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
    <!--[if mso
      ]><style>
        sup,
        sub {
          font-size: 100% !important;
        }
        sup {
          mso-text-raise: 10%;
        }
        sub {
          mso-text-raise: -10%;
        }
      </style>
    <![endif]-->
  </head>

  <body
    class="body"
    style="
      background-color: #ffffff;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  ><center>
    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #ffffff;
      ">
      <tbody>
        <tr>
          <td>
            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #1a4da1;
                        color: #000000;
                        width: 650px;
                        margin: 0 auto;
                      " width="650">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="25%" style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: middle;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            ">
                            <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              ">
                              <tbody><tr>
                                <td class="pad" style="
                                    padding-bottom: 15px;
                                    padding-top: 15px;
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 20px;
                                  ">
                                  <div class="alignment" align="center" style="line-height: 5px">
                                    <div style="max-width: 90px">
                                      <img src="https://www.atyourprice.net/wp-content/uploads/2024/07/a_y_p_1.gif" style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        " width="90" height="auto">
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                          <td class="column column-2" width="75%" style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: middle;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            ">
                            <table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              ">
                              <tbody><tr>
                                <td class="pad">
                                  <h1 style="
                                      margin: 0;
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Segoe UI', Arial, sans-serif;
                                      font-size: 24px;
                                      font-weight: 700;
                                      letter-spacing: 0.5px;
                                      line-height: 120%;
                                      text-align: center;
                                      mso-line-height-alt: 28px;
                                    ">
                                    AYP AI Agent – Smart Email Reply
                                  </h1>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #ffffff;
                        color: #000000;
                        width: 600px;
                        margin: 0 auto;
                      " width="600"><tbody><tr><td class="column column-1" width="100%" style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "><table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "><tbody><tr><td class="pad"><div style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: Arial, Helvetica, sans-serif;
                                      font-size: 18px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 140%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    "><p style="margin: 0; margin-bottom: 16px">$[[dynamic_content]]</p>
                                  </div>
                                </td>
                              </tr>
                            </tbody></table>
                            <table class="paragraph_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              ">
                              <tbody><tr>
                                <td class="pad">
                                  <div style="
                                      color: #101112;
                                      direction: ltr;
                                      font-family: Arial, Helvetica, sans-serif;
                                      font-size: 18px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 150%;
                                      text-align: left;
                                      mso-line-height-alt: 19.2px;
                                    ">
                                    <p style="margin: 0">
                                      Stay secure,<br>
                                      Team AtYourPrice
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #1a4da1;
                        color: #000000;
                        width: 650px;
                        margin: 0 auto;
                      " width="650">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            ">
                            <table class="heading_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              ">
                              <tbody><tr>
                                <td class="pad">
                                  <h1 style="
                                      margin: 0;
                                      color: #7747ff;
                                      direction: ltr;
                                      font-family: Arial, Helvetica, sans-serif;
                                      font-size: 12px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 140%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 13.2px;
                                    ">
                                    <span style="
                                        word-break: break-word;
                                        color: #ffffff;
                                      ">If you have any questions or need
                                      immediate assistance, please don't
                                      hesitate to contact us at&nbsp;<a href="mailto:support@atyourprice.net" style="
                                          text-decoration: underline;
                                          color: #7ff;
                                        ">support@atyourprice.net</a>
                                    </span>
                                    <span style="
                                        word-break: break-word;
                                        color: #ffffff;
                                      ">|<a href="https://operations.atyourprice.net" style="
                                          text-decoration: underline;
                                          color: #7ff;
                                        ">
                                        operations.atyourprice.net</a>.</span>
                                  </h1>
                                </td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </center>

</body></head>`.replace("$[[dynamic_content]]", g).replace("$<<signature>>", sessionStorage.getItem("defaultSignature") || ""), wt = {
        mail_id: (Dt = G[G.length - 1]) == null ? void 0 : Dt.mail_id,
        message_id: (St = G[G.length - 1]) == null ? void 0 : St.message_id,
        thread_id: (er = G[G.length - 1]) == null ? void 0 : er.thread_id,
        folder: (F = G[G.length - 1]) == null ? void 0 : F.folder,
        subject: (X = G[G.length - 1]) == null ? void 0 : X.subject,
        // to: [msgData[msgData.length - 1]?.from_address],
        to: ["madhivanan.e@infinitisoftware.net"],
        cc: (oe = G[G.length - 1]) == null ? void 0 : oe.cc,
        bcc: (le = G[G.length - 1]) == null ? void 0 : le.bcc,
        body_plain: g,
        body_html: dt,
        reply_type: me,
        edited: !1,
        labels: ((Ne = G[G.length - 1]) == null ? void 0 : Ne.labels) || [],
        ai_response: {
          intent: ((De = G[G.length - 1]) == null ? void 0 : De.intent) || "reply",
          entities: ((Ce = G[G.length - 1]) == null ? void 0 : Ce.entities) || {},
          reply: g + `
` + dt
        },
        setting_id: 30
      };
      be(wt), j(!1), w(g + `
` + dt), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, P = (J) => {
    var Re;
    const fe = xe[xe.length - 1];
    return fe.to.length + (((Re = fe.cc) == null ? void 0 : Re.length) || 0) > 1 || fe.cc && fe.cc.length > 0;
  }, re = async () => {
    var fe;
    let J = {
      document_id: (fe = G[G.length - 1]) == null ? void 0 : fe.mail_id,
      prompt: ""
    };
    try {
      const ge = await Z(J).unwrap(), Re = ge == null ? void 0 : ge.response.data.reply;
      console.log("AI Reply generated:", Re), w(Re), Re && h(Re);
    } catch (ge) {
      console.error("AI Reply fetch failed", ge);
    }
  }, ae = () => {
    D(!N);
  }, te = () => {
    j(!0), b(!0), f({ ...o, showAiReply: !1 });
  }, Se = () => {
    const J = xe[xe.length - 1], fe = /* @__PURE__ */ new Set([
      ...J.to,
      ...J.cc || []
    ]);
    `${Array.from(
      fe
    ).join(", ")}${o.generatedReply}`, j(!0), b(!0), f({ ...o, showAiReply: !1 });
  }, ke = () => {
    if (S("reply-all"), b(!0), e) {
      const J = xe[xe.length - 1], fe = /* @__PURE__ */ new Set([
        J.to,
        ...J.to,
        ...J.cc || []
      ]);
      `${Array.from(
        fe
      ).join(", ")}`, w(o.generatedReply), j(!0), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, Te = () => {
    if (G) {
      const J = xe[xe.length - 1];
      `${J.from_address}${Ae(J.create_to)}${J.subject}${J.to.join(", ")}`, J.cc && `${J.cc.join(", ")}`, `${J.body_plain}`, w(o.generatedReply), j(!0), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, $e = () => {
    if (!e) return;
    const J = xe[xe.length - 1], fe = J.body_plain, ge = `Meeting: ${e.subject}`, Re = `Original email from: ${J.from_address}

${fe}`, Ve = /(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})/, Xe = /(\d{1,2}:\d{2}\s*(AM|PM|am|pm))/, Ue = fe.match(Ve), Ge = fe.match(Xe);
    let st = /* @__PURE__ */ new Date();
    if (Ue && (st = new Date(Ue[0])), Ge) {
      const St = Ge[0], [er, F] = St.split(/\s+/), [X, oe] = er.split(":").map(Number);
      let le = X;
      (F == null ? void 0 : F.toLowerCase()) === "pm" && X !== 12 ? le += 12 : (F == null ? void 0 : F.toLowerCase()) === "am" && X === 12 && (le = 0), st.setHours(le, oe, 0, 0);
    }
    const ut = (St) => St.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z", Me = ut(st), Qe = new Date(st.getTime() + 60 * 60 * 1e3), bt = ut(Qe), Dt = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ge)}&dates=${Me}/${bt}&details=${encodeURIComponent(Re)}&location=${encodeURIComponent("To be determined")}`;
    window.open(Dt, "_blank"), T(!1);
  }, $ = () => {
    window.print(), T(!1);
  }, H = () => {
    e && (console.log("Reporting spam for email:", e.message_id), window.confirm(
      `Report "${e.subject}" as spam? This conversation will be moved to spam folder.`
    ) && (alert("Email reported as spam successfully"), t()), T(!1));
  }, U = () => {
    console.log("Block sender:", e == null ? void 0 : e.senderEmail), T(!1);
  }, Q = (J) => {
    E((fe) => {
      const ge = new Set(fe);
      return ge.has(J) ? ge.delete(J) : ge.add(J), ge;
    });
  }, ie = (J) => J.customLabels ? J.customLabels.map((fe) => l.find((ge) => ge.id === fe)).filter(Boolean) : [], Pe = ({
    replyType: J
  }) => {
    if (!J) return null;
    const fe = {
      manual: {
        icon: j0,
        label: "Replied Manually",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200"
      },
      ai: {
        icon: r0,
        label: "Replied by AI",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        borderColor: "border-purple-200"
      },
      "partial-ai": {
        icon: E0,
        label: "Partial AI Reply",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        borderColor: "border-orange-200"
      }
    }, {
      icon: ge,
      label: Re,
      bgColor: Ve,
      textColor: Xe,
      borderColor: Ue
    } = fe[J];
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: `inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${Ve} ${Xe} ${Ue}`,
        children: [
          /* @__PURE__ */ s.jsx(ge, { className: "w-3 h-3 mr-1" }),
          Re
        ]
      }
    );
  }, xe = [...G].sort(
    (J, fe) => new Date(J.created_at).getTime() - new Date(fe.created_at).getTime()
  ), vt = ie(G), Lt = () => /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ s.jsx(_o, { className: "w-4 h-4 animate-spin" }),
    /* @__PURE__ */ s.jsx("span", { children: "Generating..." })
  ] });
  return /* @__PURE__ */ s.jsx(s.Fragment, { children: M != null && M.isLoading || M != null && M.isFetching ? /* @__PURE__ */ s.jsx(R0, {}) : /* @__PURE__ */ s.jsxs("div", { ref: O, className: "flex-1 flex flex-col bg-white", children: [
    /* @__PURE__ */ s.jsx("div", { className: "border-b border-gray-200 p-6", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex-1 min-w-0 flex items-center space-x-3", children: [
        n && r && /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: r,
            className: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors",
            title: "Back to email list",
            children: /* @__PURE__ */ s.jsx(Jc, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ s.jsx(
            "h2",
            {
              className: "text-2xl font-semibold text-gray-900 truncate",
              style: { whiteSpace: "unset" },
              children: e.subject
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [
            /* @__PURE__ */ s.jsxs("p", { className: "text-sm text-gray-500", children: [
              G.length,
              " message",
              G.length !== 1 ? "s" : "",
              " • Conversation"
            ] }),
            vt.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              vt.slice(0, 3).map((J) => /* @__PURE__ */ s.jsxs(
                "span",
                {
                  className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                  style: {
                    backgroundColor: `${J.color}15`,
                    color: J.color,
                    border: `1px solid ${J.color}30`
                  },
                  children: [
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mr-1",
                        style: { backgroundColor: J.color }
                      }
                    ),
                    J.name
                  ]
                },
                J.id
              )),
              vt.length > 3 && /* @__PURE__ */ s.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600", children: [
                "+",
                vt.length - 3,
                " more"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2 ml-4", children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            ref: z,
            onClick: () => B(!k),
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ s.jsx(Gr, { className: "w-4 h-4 mr-1" }),
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-600 hover:text-gray-800", children: "Entities" })
            ]
          }
        ),
        d === "bin" && m ? /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => m(e.message_id),
            className: "p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors",
            title: "Restore conversation",
            children: /* @__PURE__ */ s.jsx(ks, { className: "w-4 h-4" })
          }
        ) : u && /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: () => u(e.message_id),
            className: "p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
            title: "Delete conversation",
            children: /* @__PURE__ */ s.jsx(xn, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { className: "relative", ref: Ee, children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => T(!R),
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ s.jsx(fi, { className: "w-5 h-5 text-gray-600" })
            }
          ),
          R && /* @__PURE__ */ s.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10", children: [
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: () => {
                  x && x(e.message_id), T(!1);
                },
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ s.jsx(
                    Zr,
                    {
                      className: `w-4 h-4 ${e.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { children: e.isStarred ? "Remove star" : "Add star" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: $e,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ s.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { children: "Add to calendar" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: $,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ s.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { children: "Print" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: "border-t border-gray-100 my-1" }),
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: H,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ s.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ s.jsx("span", { children: "Report spam" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: U,
                className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ s.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ s.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ s.jsxs("span", { children: [
                    "Block ",
                    e.sender
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ s.jsx("div", { style: { width: "98%", margin: "0 auto" }, children: xe.map((J, fe) => {
      var Xe;
      const ge = _.has(J.message_id) || fe === xe.length - 1 && !_.has(`collapsed-${J.message_id}`), Re = fe === xe.length - 1, Ve = J.from_address === e.from_address;
      return /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "last:border-b-0",
          style: { marginBottom: 10 },
          children: /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: `p-6 ${Ve ? "bg-blue-50" : "bg-gray-50"}`,
              style: {
                marginBottom: 10,
                // border: "2px solid #abb1ae",
                borderRadius: 5,
                boxShadow: "0 1px 3px #abb1ae"
              },
              children: [
                /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    className: "cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-lg",
                    onClick: () => {
                      Re ? E(
                        ge ? (Ue) => /* @__PURE__ */ new Set([
                          ...Ue,
                          `collapsed-${J.message_id}`
                        ]) : (Ue) => {
                          const Ge = new Set(Ue);
                          return Ge.delete(
                            `collapsed-${J.message_id}`
                          ), Ge;
                        }
                      ) : Q(J.message_id);
                    },
                    children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
                          /* @__PURE__ */ s.jsx(
                            "div",
                            {
                              className: `w-10 h-10 ${Ve ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-blue-500 to-purple-600"} rounded-full flex items-center justify-center flex-shrink-0`,
                              children: /* @__PURE__ */ s.jsx("span", { className: "text-white font-semibold text-sm", children: J.from_address.charAt(0).toUpperCase() })
                            }
                          ),
                          /* @__PURE__ */ s.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                              /* @__PURE__ */ s.jsx("p", { className: "font-semibold text-gray-900", children: J.from_address }),
                              /* @__PURE__ */ s.jsx(Pe, { replyType: J.replyType }),
                              Ve ? /* @__PURE__ */ s.jsx(Ks, { className: "w-5 h-5 text-blue-600 mt-0.5" }) : /* @__PURE__ */ s.jsx(di, { className: "w-5 h-5 text-green-600 mt-0.5" })
                            ] }),
                            /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500", children: Ae(J.created_at) })
                          ] })
                        ] }),
                        /* @__PURE__ */ s.jsx("button", { className: "text-gray-400 hover:text-gray-600 mt-1", children: ge ? /* @__PURE__ */ s.jsx(n0, { className: "w-6 h-6" }) : /* @__PURE__ */ s.jsx(li, { className: "w-6 h-6" }) })
                      ] }),
                      ge && (J.cc.length > 0 || J.bcc.length > 0) && /* @__PURE__ */ s.jsx("div", { className: "mb-4 bg-gray-50 rounded-lg p-4 space-y-2", children: /* @__PURE__ */ s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                        J.cc && J.cc.length > 0 && /* @__PURE__ */ s.jsxs("div", { children: [
                          /* @__PURE__ */ s.jsx("span", { className: "font-medium text-gray-700", children: "CC:" }),
                          /* @__PURE__ */ s.jsx("p", { className: "text-gray-600 mt-1", children: J.cc.join(", ") })
                        ] }),
                        J.bcc && J.bcc.length > 0 && /* @__PURE__ */ s.jsxs("div", { children: [
                          /* @__PURE__ */ s.jsx("span", { className: "font-medium text-gray-700", children: "BCC:" }),
                          /* @__PURE__ */ s.jsx("p", { className: "text-gray-600 mt-1", children: J.bcc.join(", ") })
                        ] })
                      ] }) })
                    ]
                  }
                ),
                ge && /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    className: "prose max-w-none mb-6",
                    style: {
                      background: "#f9fafb",
                      marginTop: 10,
                      borderRadius: 5,
                      padding: 10
                    },
                    children: /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        className: "text-gray-800 leading-relaxed whitespace-pre-wrap",
                        dangerouslySetInnerHTML: {
                          __html: J.body_html || J.body_plain
                        }
                      }
                    )
                  }
                ) }),
                !ge && /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-gray-500 truncate mb-3", children: [
                  (Xe = J == null ? void 0 : J.body_plain) == null ? void 0 : Xe.substring(0, 100),
                  "..."
                ] }) })
              ]
            }
          )
        },
        J.message_id
      );
    }) }) }),
    (y == null ? void 0 : y.length) === 0 && !v && /* @__PURE__ */ s.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ s.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2 w-full", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => {
              S("AI"), b(!0);
            },
            className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ s.jsx(Do, { className: "w-4 h-4" }),
              /* @__PURE__ */ s.jsx("span", { children: "Reply" })
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: ke,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ s.jsx(ko, { className: "w-4 h-4" }),
              /* @__PURE__ */ s.jsx("span", { children: "Reply All" })
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: Te,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ s.jsx(i0, { className: "w-4 h-4" }),
              /* @__PURE__ */ s.jsx("span", { children: "Forward" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: re,
          disabled: ne == null ? void 0 : ne.isLoading,
          className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
          children: ne != null && ne.isLoading ? /* @__PURE__ */ s.jsx(Lt, {}) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
            /* @__PURE__ */ s.jsx(rr, { className: "w-4 h-4" }),
            /* @__PURE__ */ s.jsx("span", { children: "Reply with AI" })
          ] })
        }
      ) })
    ] }) }) }),
    y.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ s.jsx(
      "div",
      {
        style: {
          width: p > 1580 ? "100%" : p < 1580 && p > 1280 ? "85%" : "65%"
        },
        children: /* @__PURE__ */ s.jsxs(
          "div",
          {
            ref: L,
            className: `bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300 transition-all ${N ? "fixed inset-4 z-50 bg-white shadow-2xl flex flex-col" : ""}`,
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ s.jsx(rr, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ s.jsxs("span", { className: "font-semibold text-gray-900", children: [
                    "AI Generated",
                    " ",
                    P() ? "Reply All" : "Reply"
                  ] })
                ] }),
                /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ s.jsx("h1", { className: "text-sm text-gray-500", children: "Intent : eticket" }),
                  /* @__PURE__ */ s.jsx(
                    ei,
                    {
                      isOpen: k,
                      onClose: () => B(!1),
                      triggerRef: z,
                      entitiesInfo: q
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: ae,
                      className: "text-purple-600 hover:text-purple-700 p-1",
                      title: N ? "Collapse" : "Expand",
                      children: N ? /* @__PURE__ */ s.jsx(f0, { className: "w-4 h-4" }) : /* @__PURE__ */ s.jsx(o0, { className: "w-4 h-4" })
                    }
                  ),
                  ne != null && ne.isLoading ? /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: re,
                      disabled: !0,
                      className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
                      children: /* @__PURE__ */ s.jsx(Lt, {})
                    }
                  ) : /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: re,
                      disabled: o.isGenerating,
                      className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                      title: "Regenerate",
                      children: o.isGenerating ? /* @__PURE__ */ s.jsx(_o, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ s.jsx(ks, { className: "w-4 h-4" })
                    }
                  ),
                  N && /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: () => D(!1),
                      className: "text-gray-500 hover:text-gray-700 p-1",
                      title: "Close",
                      children: "×"
                    }
                  )
                ] })
              ] }),
              !(ne != null && ne.isLoading) && /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `bg-white border border-gray-200 rounded p-3 mb-3 ${N ? "flex-1 overflow-y-auto" : ""}`,
                  style: N ? { minHeight: "350px" } : {},
                  children: /* @__PURE__ */ s.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: /* @__PURE__ */ s.jsx("div", { dangerouslySetInnerHTML: { __html: y } }) })
                }
              ),
              !(ne != null && ne.isLoading) && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2 flex-wrap", children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    onClick: te,
                    className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ s.jsx(Do, { className: "w-4 h-4" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Reply" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    onClick: Se,
                    className: "flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ s.jsx(ko, { className: "w-4 h-4" }),
                      /* @__PURE__ */ s.jsx("span", { children: "Reply All" })
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "button",
                  {
                    onClick: () => {
                      h("");
                    },
                    className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
                    children: "Dismiss"
                  }
                )
              ] })
            ]
          }
        )
      }
    ) }),
    v && C && /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: K,
        className: "border-t border-gray-200 p-6 bg-gray-50",
        children: /* @__PURE__ */ s.jsxs("div", { className: "mx-auto", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ s.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: g.includes("--- Reply All ---") ? "Reply to All Recipients" : g.includes("--- Forwarded Message ---") ? "Forward Message" : "Reply" }),
            /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border", children: [
              /* @__PURE__ */ s.jsxs("div", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("span", { className: "font-medium", children: "To:" }),
                  " ",
                  g.includes("--- Reply All ---") ? (() => {
                    const J = xe[xe.length - 1], fe = /* @__PURE__ */ new Set([
                      ...J.to
                    ]);
                    return Array.from(fe).join(", ");
                  })() : g.includes("--- Forwarded Message ---") ? "Enter recipient email(s)" : (Jt = (Zt = xe[xe.length - 1]) == null ? void 0 : Zt.to) == null ? void 0 : Jt.join(
                    ", "
                  ),
                  C
                ] }),
                A === "reply" && ((_t = (It = xe[xe.length - 1]) == null ? void 0 : It.cc) == null ? void 0 : _t.length) > 0 && /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("span", { className: "font-medium", children: "Cc:" }),
                  " ",
                  xe[xe.length - 1].cc.join(
                    ", "
                  )
                ] }),
                A === "reply-all" && ((nt = (kt = xe[xe.length - 1]) == null ? void 0 : kt.bcc) == null ? void 0 : nt.length) > 0 && /* @__PURE__ */ s.jsxs("div", { children: [
                  /* @__PURE__ */ s.jsx("span", { className: "font-medium", children: "Bcc:" }),
                  " ",
                  xe[xe.length - 1].bcc.join(
                    ", "
                  )
                ] })
              ] }),
              /* @__PURE__ */ s.jsxs("p", { children: [
                /* @__PURE__ */ s.jsx("span", { className: "font-medium", children: "Subject:" }),
                " ",
                g.includes("--- Forwarded Message ---") ? `Fwd: ${e.subject}` : `Re: ${e.subject}`
              ] })
            ] })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ s.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Message Content",
              /* @__PURE__ */ s.jsxs("span", { className: "text-gray-500 font-normal", children: [
                " ",
                "- Type your reply below"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx("div", { dangerouslySetInnerHTML: { __html: g } })
          ] }),
          g === o.generatedReply && o.generatedReply && /* @__PURE__ */ s.jsxs("div", { className: "mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded", children: [
            /* @__PURE__ */ s.jsx(rr, { className: "w-3 h-3" }),
            /* @__PURE__ */ s.jsx("span", { children: "Using AI-generated reply" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: () => j(!1),
                className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ s.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: Y,
                disabled: !g.trim(),
                className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
                children: g.includes("--- Reply All ---") ? "Send to All" : g.includes("--- Forwarded Message ---") ? "Forward" : "Send Reply"
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ s.jsx(
      ei,
      {
        isOpen: k,
        onClose: () => B(!1),
        triggerRef: z,
        entitiesInfo: q
      }
    )
  ] }) });
}, Jx = ({
  isOpen: e,
  onClose: t,
  onSend: r,
  onSaveDraft: n,
  initialData: o,
  isPanel: c = !1
}) => {
  const [f, l] = ee((o == null ? void 0 : o.to) || []), [i, a] = ee((o == null ? void 0 : o.cc) || []), [u, m] = ee((o == null ? void 0 : o.bcc) || []), [d, x] = ee((o == null ? void 0 : o.subject) || ""), [p, g] = ee((o == null ? void 0 : o.body) || ""), [w, C] = ee([]), [b, y] = ee(!1), [h, v] = ee(!1), [j, A] = ee({}), [S, _] = ee(!1), [E, N] = ee(!1), [D, k] = ee(""), [B, R] = ee(""), [T, q] = ee("");
  ye(() => {
    const P = (re) => {
      O.current && !O.current.contains(re.target) && t();
    };
    return e && document.addEventListener("mousedown", P), () => {
      document.removeEventListener("mousedown", P);
    };
  }, [e, t]);
  const [I, L] = ee({
    isGenerating: !1,
    showAIPanel: !1,
    generatedContent: "",
    selectedTone: "professional",
    hasGenerated: !1
  }), K = Be(null), O = Be(null);
  ye(() => {
    if (!e) return;
    const P = setInterval(() => {
      (f.length > 0 || d.trim() || p.trim()) && we(!0);
    }, 3e4);
    return () => clearInterval(P);
  }, [f, d, p, e]), ye(() => {
    const P = (re) => {
      re.key === "Escape" && e && Ae();
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [e]);
  const z = (P) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P.trim()), V = () => {
    const P = {};
    if (f.length === 0)
      P.to = "At least one recipient is required";
    else {
      const te = f.filter((Se) => !z(Se));
      te.length > 0 && (P.to = `Invalid email addresses: ${te.join(", ")}`);
    }
    const re = i.filter((te) => !z(te));
    re.length > 0 && (P.cc = `Invalid CC email addresses: ${re.join(
      ", "
    )}`);
    const ae = u.filter((te) => !z(te));
    return ae.length > 0 && (P.bcc = `Invalid BCC email addresses: ${ae.join(
      ", "
    )}`), A(P), Object.keys(P).length === 0;
  }, M = (P, re, ae, te) => {
    if (P.endsWith(",") || P.endsWith(";")) {
      const Se = P.slice(0, -1).trim();
      if (Se && z(Se)) {
        const ke = [.../* @__PURE__ */ new Set([...re, Se])];
        ae(ke), te("");
      } else
        te(P);
    } else
      te(P);
  }, Z = (P, re, ae) => {
    ae(re.filter((te) => te !== P));
  }, ne = (P) => {
    const re = Array.from(P.target.files || []), ae = 25 * 1024 * 1024, te = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain"
    ], ke = re.filter((Te) => Te.size > ae ? (alert(`File ${Te.name} is too large. Maximum size is 25MB.`), !1) : te.includes(Te.type) ? !0 : (alert(`File type ${Te.type} is not allowed.`), !1)).map((Te) => ({
      file: Te,
      id: Math.random().toString(36).substr(2, 9)
    }));
    C((Te) => [...Te, ...ke]);
  }, G = (P) => {
    C((re) => re.filter((ae) => ae.id !== P));
  }, se = (P) => {
    if (P === 0) return "0 Bytes";
    const re = 1024, ae = ["Bytes", "KB", "MB", "GB"], te = Math.floor(Math.log(P) / Math.log(re));
    return parseFloat((P / Math.pow(re, te)).toFixed(2)) + " " + ae[te];
  }, Ee = async (P, re = !1) => {
    if (!d.trim()) {
      alert("Please enter a subject first to generate AI content.");
      return;
    }
    L((te) => ({ ...te, isGenerating: !0 })), await new Promise((te) => setTimeout(te, 2e3));
    const ae = de(d, P, f);
    L((te) => ({
      ...te,
      isGenerating: !1,
      showAIPanel: !0,
      generatedContent: ae,
      hasGenerated: !0
    }));
  }, de = (P, re, ae) => {
    const te = P.toLowerCase(), Se = ae.length > 0 ? ae[0].split("@")[0].replace(/[._]/g, " ") : "there";
    let ke = "general";
    return te.includes("meeting") || te.includes("schedule") || te.includes("appointment") ? ke = "meeting" : te.includes("follow") || te.includes("update") ? ke = "followup" : te.includes("thank") || te.includes("appreciation") ? ke = "thanks" : te.includes("request") || te.includes("help") || te.includes("support") ? ke = "request" : te.includes("proposal") || te.includes("offer") ? ke = "proposal" : (te.includes("reminder") || te.includes("deadline")) && (ke = "reminder"), ue(ke, re, Se, P);
  }, ue = (P, re, ae, te) => {
    var ke;
    const Se = {
      meeting: {
        professional: `Dear ${ae},

I hope this email finds you well. I would like to schedule a meeting to discuss ${te.toLowerCase()}.

Please let me know your availability for the following time slots:
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration] and can be conducted [in-person/virtually].

Please confirm which option works best for you, or suggest alternative times if none of these are suitable.

Best regards`,
        friendly: `Hi ${ae}!

Hope you're doing well! I'd love to set up a meeting to chat about ${te.toLowerCase()}.

When would be a good time for you? I'm pretty flexible, so just let me know what works best. We can do it in person or over a video call - whatever's easier for you!

Looking forward to hearing from you!

Best`,
        concise: `Hi ${ae},

Let's schedule a meeting about ${te.toLowerCase()}.

Available times:
• [Option 1]
• [Option 2]
• [Option 3]

Please confirm your preference.

Thanks`,
        persuasive: `Dear ${ae},

I believe we have a valuable opportunity to discuss ${te.toLowerCase()} that could benefit both of us significantly.

This meeting would allow us to:
• Explore potential synergies
• Address key challenges
• Develop actionable solutions

I'm confident that dedicating time to this discussion will yield positive results. Please let me know your availability so we can move forward promptly.

Best regards`
      },
      followup: {
        professional: `Dear ${ae},

I hope this email finds you well. I wanted to follow up on our previous discussion regarding ${te.toLowerCase()}.

As discussed, I wanted to provide you with an update on the current status and next steps:

[Key points to address]
• [Point 1]
• [Point 2]
• [Point 3]

Please let me know if you have any questions or if there's anything else you'd like me to address.

Best regards`,
        friendly: `Hi ${ae}!

Hope you're having a great day! Just wanted to circle back on ${te.toLowerCase()}.

I've been thinking about our conversation and wanted to share a quick update. Things are moving along nicely, and I think you'll be pleased with the progress.

Let me know if you have any questions or if there's anything else I can help with!

Best`,
        concise: `Hi ${ae},

Quick follow-up on ${te.toLowerCase()}:

• [Update 1]
• [Update 2]
• [Next steps]

Let me know if you need anything else.

Thanks`,
        persuasive: `Dear ${ae},

Following up on ${te.toLowerCase()} - I believe we're at a critical juncture where swift action could maximize our success.

The momentum we've built presents an excellent opportunity to:
• Capitalize on current market conditions
• Leverage our competitive advantages
• Achieve our shared objectives

I recommend we proceed with the next phase immediately. Your prompt response would be greatly appreciated.

Best regards`
      },
      thanks: {
        professional: `Dear ${ae},

I wanted to take a moment to express my sincere gratitude regarding ${te.toLowerCase()}.

Your [support/assistance/collaboration] has been invaluable, and I truly appreciate the time and effort you've invested. The [outcome/result] exceeded my expectations, and I couldn't have achieved this without your contribution.

Thank you once again for your professionalism and dedication.

Best regards`,
        friendly: `Hi ${ae}!

I just had to reach out and say a huge thank you for ${te.toLowerCase()}!

You really went above and beyond, and it means so much to me. I'm incredibly grateful for all your help and support. You're absolutely amazing!

Thanks again for everything!

With appreciation`,
        concise: `Hi ${ae},

Thank you for ${te.toLowerCase()}.

Your help was invaluable and greatly appreciated.

Best regards`,
        persuasive: `Dear ${ae},

Your exceptional contribution to ${te.toLowerCase()} deserves special recognition.

The impact of your work has been transformative, demonstrating the value of our collaboration. I believe this success positions us perfectly for future opportunities together.

I would welcome the chance to discuss how we can build on this momentum.

With sincere appreciation`
      },
      request: {
        professional: `Dear ${ae},

I hope this email finds you well. I am writing to request your assistance with ${te.toLowerCase()}.

Specifically, I would appreciate your help with:
• [Specific request 1]
• [Specific request 2]
• [Timeline/deadline]

I understand you have a busy schedule, but your expertise in this area would be invaluable. Please let me know if this is something you would be able to assist with.

Thank you for considering my request.

Best regards`,
        friendly: `Hi ${ae}!

Hope you're doing well! I'm reaching out because I could really use your help with ${te.toLowerCase()}.

I know you're super busy, but you're honestly the best person I can think of for this. Would you be able to lend a hand? I'd really appreciate any assistance you can provide!

Let me know what you think!

Thanks so much`,
        concise: `Hi ${ae},

I need assistance with ${te.toLowerCase()}.

Requirements:
• [Item 1]
• [Item 2]
• [Deadline]

Can you help?

Thanks`,
        persuasive: `Dear ${ae},

I have an exciting opportunity that aligns perfectly with your expertise: ${te.toLowerCase()}.

This request represents a chance to:
• Showcase your exceptional skills
• Make a significant impact
• Contribute to a meaningful outcome

Your unique qualifications make you the ideal person for this. I'm confident that your involvement would ensure success.

Would you be interested in discussing this further?

Best regards`
      },
      general: {
        professional: `Dear ${ae},

I hope this email finds you well. I am writing to you regarding ${te.toLowerCase()}.

[Please provide specific details about your message here]

I would appreciate your thoughts on this matter and look forward to your response.

Best regards`,
        friendly: `Hi ${ae}!

Hope you're having a great day! I wanted to reach out about ${te.toLowerCase()}.

[Add your personal message here]

Let me know what you think!

Best`,
        concise: `Hi ${ae},

Regarding ${te.toLowerCase()}:

[Your message here]

Please let me know your thoughts.

Thanks`,
        persuasive: `Dear ${ae},

I'm reaching out about an important matter: ${te.toLowerCase()}.

This presents a valuable opportunity that I believe deserves your immediate attention. The potential benefits are significant, and I'm confident you'll find this compelling.

I would appreciate the opportunity to discuss this with you further.

Best regards`
      }
    };
    return ((ke = Se[P]) == null ? void 0 : ke[re]) || Se.general[re];
  }, pe = () => {
    g(I.generatedContent), L((P) => ({ ...P, showAIPanel: !1 }));
  }, he = () => {
    Ee(I.selectedTone, !0);
  }, be = (P) => {
    L((re) => ({ ...re, selectedTone: P }));
  }, Fe = async () => {
    if (V()) {
      _(!0);
      try {
        const P = {
          to: f,
          cc: i,
          bcc: u,
          subject: d,
          body: p,
          attachments: w.map((re) => re.file)
        };
        await r(P), Ae();
      } catch (P) {
        console.error("Failed to send email:", P);
      } finally {
        _(!1);
      }
    }
  }, we = async (P = !1) => {
    P || N(!0);
    try {
      const re = {
        to: f,
        cc: i,
        bcc: u,
        subject: d,
        body: p,
        attachments: w.map((ae) => ae.file)
      };
      await n(re), P || Ae();
    } catch (re) {
      console.error("Failed to save draft:", re);
    } finally {
      P || N(!1);
    }
  }, Ae = () => {
    if ((f.length > 0 || d.trim() || p.trim() || w.length > 0) && window.confirm(
      "You have unsaved changes. Would you like to save this as a draft before closing?"
    )) {
      we();
      return;
    }
    l([]), a([]), m([]), x(""), g(""), C([]), k(""), R(""), q(""), y(!1), v(!1), A({}), L({
      isGenerating: !1,
      showAIPanel: !1,
      generatedContent: "",
      selectedTone: "professional",
      hasGenerated: !1
    }), t();
  };
  if (!e) return null;
  const Y = () => /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ s.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: c ? "Compose" : "New Message" }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          onClick: Ae,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ s.jsx(et, { className: "w-5 h-5 text-gray-500" })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ s.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ s.jsx("div", { children: /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "To:" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            f.map((P, re) => /* @__PURE__ */ s.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md",
                children: [
                  P,
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: () => Z(P, f, l),
                      className: "ml-1 text-blue-600 hover:text-blue-800",
                      children: /* @__PURE__ */ s.jsx(et, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              re
            )),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                value: D,
                onChange: (P) => M(P.target.value, f, l, k),
                onKeyDown: (P) => {
                  P.key === "Enter" && (P.preventDefault(), D.trim() && z(D.trim()) && (l([...f, D.trim()]), k("")));
                },
                placeholder: f.length === 0 ? "Enter email addresses..." : "",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.to && /* @__PURE__ */ s.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.to })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => y(!b),
              className: `text-sm px-2 py-1 rounded transition-colors ${b ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Cc"
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => v(!h),
              className: `text-sm px-2 py-1 rounded transition-colors ${h ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Bcc"
            }
          )
        ] })
      ] }) }),
      b && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Cc:" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            i.map((P, re) => /* @__PURE__ */ s.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  P,
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: () => Z(P, i, a),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ s.jsx(et, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              re
            )),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                value: B,
                onChange: (P) => M(P.target.value, i, a, R),
                onKeyDown: (P) => {
                  P.key === "Enter" && (P.preventDefault(), B.trim() && z(B.trim()) && (a([...i, B.trim()]), R("")));
                },
                placeholder: "Enter CC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.cc && /* @__PURE__ */ s.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.cc })
        ] })
      ] }),
      h && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Bcc:" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            u.map((P, re) => /* @__PURE__ */ s.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  P,
                  /* @__PURE__ */ s.jsx(
                    "button",
                    {
                      onClick: () => Z(P, u, m),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ s.jsx(et, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              re
            )),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "text",
                value: T,
                onChange: (P) => M(P.target.value, u, m, q),
                onKeyDown: (P) => {
                  P.key === "Enter" && (P.preventDefault(), T.trim() && z(T.trim()) && (m([...u, T.trim()]), q("")));
                },
                placeholder: "Enter BCC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.bcc && /* @__PURE__ */ s.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.bcc })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Subject:" }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex-1 flex space-x-2", children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "text",
              value: d,
              onChange: (P) => x(P.target.value),
              placeholder: "Enter subject...",
              className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          d.trim() && /* @__PURE__ */ s.jsxs(
            "button",
            {
              onClick: () => Ee(I.selectedTone),
              disabled: I.isGenerating,
              className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ s.jsx(rr, { className: "w-4 h-4" }),
                /* @__PURE__ */ s.jsx("span", { children: I.isGenerating ? "Generating..." : "Generate with AI" })
              ]
            }
          )
        ] })
      ] }),
      I.showAIPanel && /* @__PURE__ */ s.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ s.jsx(rr, { className: "w-4 h-4 text-purple-600" }),
            /* @__PURE__ */ s.jsx("span", { className: "font-semibold text-gray-900", children: "AI Generated Content" })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                value: I.selectedTone,
                onChange: (P) => be(P.target.value),
                className: "text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: "professional", children: "Professional" }),
                  /* @__PURE__ */ s.jsx("option", { value: "friendly", children: "Friendly" }),
                  /* @__PURE__ */ s.jsx("option", { value: "concise", children: "Concise" }),
                  /* @__PURE__ */ s.jsx("option", { value: "persuasive", children: "Persuasive" })
                ]
              }
            ),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: he,
                disabled: I.isGenerating,
                className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                title: "Regenerate with selected tone",
                children: /* @__PURE__ */ s.jsx(ks, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "bg-white border border-gray-200 rounded p-3 mb-3 max-h-48 overflow-y-auto", children: /* @__PURE__ */ s.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: I.generatedContent }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ s.jsxs(
            "button",
            {
              onClick: pe,
              className: "flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ s.jsx(A0, { className: "w-4 h-4" }),
                /* @__PURE__ */ s.jsx("span", { children: "Use This Content" })
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: () => L((P) => ({ ...P, showAIPanel: !1 })),
              className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
              children: "Dismiss"
            }
          )
        ] })
      ] }),
      w.length > 0 && /* @__PURE__ */ s.jsxs("div", { className: "border border-gray-200 rounded-lg p-3", children: [
        /* @__PURE__ */ s.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments" }),
        /* @__PURE__ */ s.jsx("div", { className: "space-y-2", children: w.map((P) => /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-2 bg-gray-50 rounded-md",
            children: [
              /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ s.jsx(_s, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ s.jsx("span", { className: "text-sm text-gray-700", children: P.file.name }),
                /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-gray-500", children: [
                  "(",
                  se(P.file.size),
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: () => G(P.id),
                  className: "text-red-500 hover:text-red-700",
                  children: /* @__PURE__ */ s.jsx(xn, { className: "w-4 h-4" })
                }
              )
            ]
          },
          P.id
        )) })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ s.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Message:" }),
          p === I.generatedContent && I.generatedContent && /* @__PURE__ */ s.jsxs("div", { className: "text-sm text-purple-600 flex items-center space-x-1", children: [
            /* @__PURE__ */ s.jsx(rr, { className: "w-3 h-3" }),
            /* @__PURE__ */ s.jsx("span", { children: "Using AI-generated content" })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx(
          "textarea",
          {
            value: p,
            onChange: (P) => g(P.target.value),
            placeholder: "Compose your message...",
            rows: c ? 8 : 12,
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-gray-200", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => {
              var P;
              return (P = K.current) == null ? void 0 : P.click();
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ s.jsx(_s, { className: "w-4 h-4" }),
              /* @__PURE__ */ s.jsx("span", { className: "text-sm", children: "Attach" })
            ]
          }
        ),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: K,
            type: "file",
            multiple: !0,
            onChange: ne,
            className: "hidden",
            accept: ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
          }
        )
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: Ae,
            className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
            children: "Discard"
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: () => we(),
            disabled: E,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50",
            children: [
              /* @__PURE__ */ s.jsx(v0, { className: "w-4 h-4" }),
              /* @__PURE__ */ s.jsx("span", { children: E ? "Saving..." : "Save Draft" })
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            onClick: Fe,
            disabled: S || f.length === 0,
            className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ s.jsx(Ks, { className: "w-4 h-4" }),
              /* @__PURE__ */ s.jsx("span", { children: S ? "Sending..." : "Send" })
            ]
          }
        )
      ] })
    ] })
  ] });
  return c ? /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: O,
      className: "fixed right-2 w-[500px] h-full bg-white border-l border-gray-200 shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out",
      style: { transform: "translateX(0)", zIndex: 60, height: "81%" },
      children: /* @__PURE__ */ s.jsx(Y, {})
    }
  ) : /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: O,
      className: "bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col",
      children: /* @__PURE__ */ s.jsx(Y, {})
    }
  ) });
}, eh = ({
  isOpen: e,
  onClose: t,
  labels: r,
  onCreateLabel: n,
  onUpdateLabel: o,
  onDeleteLabel: c
}) => {
  const [f, l] = ee(""), [i, a] = ee(Bn[0]), [u, m] = ee(""), [d, x] = ee(null), [p, g] = ee(""), [w, C] = ee(""), [b, y] = ee(""), [h, v] = ee({}), j = Be(null);
  ye(() => {
    const B = (R) => {
      R.key === "Escape" && e && t();
    };
    return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [e, t]);
  const A = (B, R) => B.trim() ? B.trim().length < 2 ? (v((q) => ({ ...q, name: "Label name must be at least 2 characters" })), !1) : B.trim().length > 20 ? (v((q) => ({ ...q, name: "Label name must be less than 20 characters" })), !1) : r.find(
    (q) => q.name.toLowerCase() === B.trim().toLowerCase() && q.id !== R
  ) ? (v((q) => ({ ...q, name: "A label with this name already exists" })), !1) : (v((q) => ({ ...q, name: "" })), !0) : (v((q) => ({ ...q, name: "Label name is required" })), !1), S = () => {
    A(f) && (n({
      name: f.trim(),
      color: i,
      description: u.trim() || void 0,
      isSystem: !1
    }), l(""), a(Bn[0]), m(""), v({}));
  }, _ = (B) => {
    x(B.id), g(B.name), C(B.color), y(B.description || ""), v({});
  }, E = () => {
    d && A(p, d) && (o(d, {
      name: p.trim(),
      color: w,
      description: b.trim() || void 0
    }), x(null), g(""), C(""), y(""), v({}));
  }, N = () => {
    x(null), g(""), C(""), y(""), v({});
  }, D = (B) => {
    const R = r.find((q) => q.id === B);
    if (!R) return;
    const T = R.isSystem ? `Are you sure you want to delete the system label "${R.name}"? This action cannot be undone.` : `Are you sure you want to delete the label "${R.name}"? This will remove it from all emails.`;
    window.confirm(T) && c(B);
  }, k = ({ selectedColor: B, onColorChange: R, className: T = "" }) => /* @__PURE__ */ s.jsx("div", { className: `flex flex-wrap gap-2 ${T}`, children: Bn.map((q) => /* @__PURE__ */ s.jsx(
    "button",
    {
      onClick: () => R(q),
      className: `w-6 h-6 rounded-full border-2 transition-all ${B === q ? "border-gray-800 scale-110" : "border-gray-300 hover:border-gray-500"}`,
      style: { backgroundColor: q },
      title: `Select ${q}`
    },
    q
  )) });
  return e ? /* @__PURE__ */ s.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: j,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col",
      children: [
        /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ s.jsx(Jr, { className: "w-5 h-5 text-gray-600" }),
            /* @__PURE__ */ s.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Manage Labels" })
          ] }),
          /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: t,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ s.jsx(et, { className: "w-5 h-5 text-gray-500" })
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
          /* @__PURE__ */ s.jsx("div", { className: "mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200", children: /* @__PURE__ */ s.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Label Name *" }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "text",
                  value: f,
                  onChange: (B) => {
                    l(B.target.value), h.name && A(B.target.value);
                  },
                  onBlur: () => A(f),
                  placeholder: "Enter label name...",
                  className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${h.name ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`,
                  maxLength: 20
                }
              ),
              h.name && /* @__PURE__ */ s.jsxs("p", { className: "text-red-500 text-sm mt-1 flex items-center", children: [
                /* @__PURE__ */ s.jsx(Xc, { className: "w-3 h-3 mr-1" }),
                h.name
              ] })
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
                /* @__PURE__ */ s.jsx(h0, { className: "w-4 h-4 inline mr-1" }),
                "Color"
              ] }),
              /* @__PURE__ */ s.jsx(
                k,
                {
                  selectedColor: i,
                  onColorChange: a
                }
              )
            ] }),
            /* @__PURE__ */ s.jsxs("div", { children: [
              /* @__PURE__ */ s.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description (Optional)" }),
              /* @__PURE__ */ s.jsx(
                "input",
                {
                  type: "text",
                  value: u,
                  onChange: (B) => m(B.target.value),
                  placeholder: "Brief description of this label...",
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  maxLength: 100
                }
              )
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ s.jsxs(
              "button",
              {
                onClick: S,
                disabled: !f.trim(),
                className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-medium",
                children: [
                  /* @__PURE__ */ s.jsx(Xr, { className: "w-4 h-4" }),
                  /* @__PURE__ */ s.jsx("span", { children: "Create Label" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ s.jsxs("div", { children: [
            /* @__PURE__ */ s.jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: [
              "Your Labels (",
              r.length,
              ")"
            ] }),
            r.length === 0 ? /* @__PURE__ */ s.jsxs("div", { className: "text-center py-12 text-gray-500", children: [
              /* @__PURE__ */ s.jsx(Jr, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ s.jsx("h4", { className: "text-lg font-medium text-gray-900 mb-2", children: "No labels yet" }),
              /* @__PURE__ */ s.jsx("p", { className: "text-gray-500", children: "Create your first label above to get started organizing your emails" })
            ] }) : /* @__PURE__ */ s.jsx("div", { className: "space-y-3", children: r.map((B) => /* @__PURE__ */ s.jsx(
              "div",
              {
                className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                children: d === B.id ? /* @__PURE__ */ s.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ s.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ s.jsx(
                        "input",
                        {
                          type: "text",
                          value: p,
                          onChange: (R) => {
                            g(R.target.value), h.name && A(R.target.value, B.id);
                          },
                          onBlur: () => A(p, B.id),
                          className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${h.name ? "border-red-300" : "border-gray-300"}`,
                          maxLength: 20
                        }
                      ),
                      h.name && /* @__PURE__ */ s.jsx("p", { className: "text-red-500 text-xs mt-1", children: h.name })
                    ] }),
                    /* @__PURE__ */ s.jsx(
                      k,
                      {
                        selectedColor: w,
                        onColorChange: C,
                        className: "flex-shrink-0"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ s.jsx(
                    "input",
                    {
                      type: "text",
                      value: b,
                      onChange: (R) => y(R.target.value),
                      placeholder: "Description...",
                      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                      maxLength: 100
                    }
                  ),
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ s.jsxs(
                      "button",
                      {
                        onClick: E,
                        disabled: !p.trim() || !!h.name,
                        className: "flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg text-sm transition-colors",
                        children: [
                          /* @__PURE__ */ s.jsx(ci, { className: "w-4 h-4" }),
                          /* @__PURE__ */ s.jsx("span", { children: "Save" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: N,
                        className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors",
                        children: "Cancel"
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
                    /* @__PURE__ */ s.jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded-full flex-shrink-0",
                        style: { backgroundColor: B.color }
                      }
                    ),
                    /* @__PURE__ */ s.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ s.jsx("span", { className: "font-medium text-gray-900", children: B.name }),
                        B.isSystem && /* @__PURE__ */ s.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium", children: "System" })
                      ] }),
                      B.description && /* @__PURE__ */ s.jsx("p", { className: "text-sm text-gray-500 mt-1", children: B.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ s.jsxs("div", { className: "flex items-center space-x-1", children: [
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: () => _(B),
                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                        title: "Edit label",
                        children: /* @__PURE__ */ s.jsx(g0, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ s.jsx(
                      "button",
                      {
                        onClick: () => D(B.id),
                        className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        title: "Delete label",
                        children: /* @__PURE__ */ s.jsx(xn, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              },
              B.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-end p-6 border-t border-gray-200", children: /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: t,
            className: "px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium",
            children: "Done"
          }
        ) })
      ]
    }
  ) }) : null;
}, ri = {
  //   readStatus: "all",
  page: 1,
  page_size: 20,
  //   sortBy: "newest",
  //   dateRange: { from: "", to: "" },
  //   intent: "all",
  search: ""
}, Lc = Ht({
  name: "filters",
  initialState: ri,
  reducers: {
    setFilterSettings(e, t) {
      return { ...e, ...t.payload };
    },
    resetFilters() {
      return ri;
    }
  }
}), { setFilterSettings: ni, resetFilters: uh } = Lc.actions, th = Lc.reducer;
function rh() {
  const [e, t] = ee("inbox"), [r, n] = ee(null), [o, c] = ee(!1), [f, l] = Mc(), [i, a] = ee([]), [u, m] = ee([]), [d, x] = ee(tc), [p, g] = ee(/* @__PURE__ */ new Set()), [w, C] = ee(""), [b, y] = ee({
    readStatus: "all",
    starred: !1,
    hasAttachment: !1,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all"
  }), [h, v] = ee({
    search: void 0
  }), j = vo();
  ye(() => {
    localStorage.getItem("user") || (localStorage.setItem(
      "user",
      '"K6L7I5e3R/pyUXXfAkYb2QV5/WIYawnYYAclNRe35oYNm2KluQtzHo41AXUFB4yHoVJrg/qtj7MJdS/5ZZkfuTBCMXVuZtL8rjrpvePcWUfDJDKgL6PtG4gNp8+qPUwXELEHDiOA/AIn6RaTQNVd5kT2IFS9j0BsgqKMwyd/QFWbrJlwW40wFadaO+xHNur1JdzR66GDRbu+EBmcLijmxQ=="'
    ), localStorage.setItem("project", "4"));
  }, []);
  const [A, S] = ee({
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  });
  ye(() => {
    f({});
  }, []), ye(() => {
    f({});
    const $ = setInterval(() => {
      f({});
    }, 15e4);
    return () => clearInterval($);
  }, [f]), ye(() => {
    var $, H, U;
    if (l != null && l.isSuccess) {
      const Q = (U = (H = ($ = l == null ? void 0 : l.data) == null ? void 0 : $.response) == null ? void 0 : H.data) == null ? void 0 : U.results;
      if (Q && Array.isArray(Q)) {
        a(
          Q.map((xe) => ({
            ...xe,
            intentLabel: xe.labels || "new"
          }))
        );
        const ie = Q.filter((xe) => xe.is_deleted).map((xe) => xe.message_id), Pe = Q.filter((xe) => ie.includes(xe.message_id)).map((xe) => ({
          ...xe,
          intentLabel: xe.labels || "new"
        }));
        m(Pe);
      }
    }
  }, [l]);
  const [_, E] = ee(!1), [N, D] = ee(!1), [k, B] = ee(!1), [R, T] = ee(null), q = () => {
    const $ = {};
    return $.inbox = (i == null ? void 0 : i.filter(
      (H) => (!H.is_read || H.is_read) && !H.is_deleted
    ).length) || 0, $.starred = (i == null ? void 0 : i.filter((H) => H.is_starred).length) || 0, $.snoozed = 0, $.bin = u.filter((H) => H.is_deleted).length || 0, i == null || i.forEach((H) => {
      if (H.labels && H.labels.length > 0) {
        let U = [];
        switch (i == null || i.map((Q) => ({
          ...Q,
          emailsOnly: Q.to
        })), H.labels[0]) {
          case "work":
            U = i.filter(
              (Q) => {
                var ie;
                return ((ie = Q.customLabels) == null ? void 0 : ie.includes("work")) || Q.from_address.includes("company.com") || Q.from_address.includes("techcorp.com") || Q.from_address.includes("consulting.com") || Q.from_address.includes("design.studio");
              }
            );
            break;
          case "personal":
            U = i.filter(
              (Q) => {
                var ie;
                return ((ie = Q.customLabels) == null ? void 0 : ie.includes("personal")) || Q.subject.toLowerCase().includes("welcome") || Q.from_address.includes("startup.io");
              }
            );
            break;
          case "important":
            U = i.filter(
              (Q) => {
                var ie;
                return ((ie = Q.customLabels) == null ? void 0 : ie.includes("important")) || Q.subject.toLowerCase().includes("urgent") || Q.subject.toLowerCase().includes("important") || Q.is_starred;
              }
            );
            break;
          case "travel":
            U = i.filter(
              (Q) => {
                var ie;
                return (ie = Q.customLabels) == null ? void 0 : ie.includes("travel");
              }
            );
            break;
        }
        $[`label-${H.id}`] = U.filter(
          (Q) => !Q.is_read
        ).length;
      } else {
        const U = i.filter(
          (Q) => {
            var ie;
            return (ie = Q.customLabels) == null ? void 0 : ie.includes(H.id);
          }
        );
        $[`custom-label-${H.id}`] = U.filter(
          (Q) => !Q.is_read
        ).length;
      }
    }), $;
  };
  qe(() => q(), [i, d, u]);
  const I = ($) => {
    let H = [...$];
    return b.readStatus === "read" ? H = H.filter((U) => U.is_read === !0) : b.readStatus === "unread" ? H = H.filter((U) => U.is_read === !1) : b.readStatus === "all" && (H = $), b.starred && (H = H.filter((U) => U.is_starred)), b.hasAttachment && (H = H.filter(
      (U) => U.messages.some(
        (Q) => Q.content.toLowerCase().includes("attach") || Q.content.toLowerCase().includes("file") || Q.content.toLowerCase().includes("document")
      )
    )), (b.dateRange.from || b.dateRange.to) && (H = H.filter((U) => {
      const Q = new Date(U.created_at), ie = b.dateRange.from ? new Date(b.dateRange.from) : null, Pe = b.dateRange.to ? /* @__PURE__ */ new Date(b.dateRange.to + "T23:59:59") : null;
      return (!ie || Q >= ie) && (!Pe || Q <= Pe);
    })), b.intent !== "all" && (H = H.filter((U) => {
      if (U.labels)
        switch (b.intent) {
          case "meetings":
            return U.labels === "meeting";
          case "notifications":
            return U.labels === "system";
          case "campaigns":
            return U.labels === "announcement";
          case "support":
            return U.labels === "feedback";
          default:
            return !0;
        }
      const Q = U.labels || "new", ie = `${U.subject} ${U == null ? void 0 : U.snippet}`.toLowerCase();
      switch (b.intent) {
        case "meetings":
          return Q === "meeting" || ie.includes("meeting") || ie.includes("schedule") || ie.includes("appointment");
        case "notifications":
          return Q === "system" || ie.includes("notification") || ie.includes("system") || ie.includes("alert");
        case "campaigns":
          return Q === "announcement" || ie.includes("newsletter") || ie.includes("campaign") || ie.includes("marketing");
        case "support":
          return Q === "feedback" || ie.includes("support") || ie.includes("help") || ie.includes("issue");
        case "new":
          return Q === "new";
        default:
          return Q === "general";
      }
    })), H.sort((U, Q) => {
      switch (b.sortBy) {
        case "oldest":
          return new Date(U.created_at).getTime() - new Date(Q.created_at).getTime();
        case "newest":
          return new Date(Q.created_at).getTime() - new Date(U.created_at).getTime();
        case "subject-az":
          return U.subject.localeCompare(Q.subject);
        case "subject-za":
          return Q.subject.localeCompare(U.subject);
        case "sender-az":
          return U.sender.localeCompare(Q.from_address);
        case "sender-za":
          return Q.sender.localeCompare(U.from_address);
        case "starred-first":
          return U.is_starred && !Q.is_starred ? -1 : !U.is_starred && Q.is_starred ? 1 : new Date(Q.created_at).getTime() - new Date(U.created_at).getTime();
        default:
          return new Date(Q.created_at).getTime() - new Date(U.created_at).getTime();
      }
    }), console.log(H), H;
  }, L = qe(() => i == null ? void 0 : i.map(($) => ({
    ...$,
    messages: $.messages || [],
    conversationEmails: [$]
    // Each email is its own conversation
  })).sort(
    ($, H) => new Date(H.created_at).getTime() - new Date($.created_at).getTime()
  ), [i]), K = qe(() => {
    let $ = L;
    switch (e) {
      case "inbox":
        $ = L == null ? void 0 : L.filter((H) => !H.is_deleted);
        break;
      case "starred":
        $ = L == null ? void 0 : L.filter((H) => H.is_starred);
        break;
      case "snoozed":
        $ = [];
        break;
      case "bin":
        $ = (u == null ? void 0 : u.map((H) => ({
          ...H,
          messages: H.messages || [],
          conversationEmails: [H]
        }))) || [];
        break;
      case "label-work":
        $ = L.filter(
          (H) => {
            var U;
            return ((U = H.customLabels) == null ? void 0 : U.includes("work")) || H.subject.toLowerCase().includes("project") || H.subject.toLowerCase().includes("meeting") || H.subject.toLowerCase().includes("campaign") || H.from_address.includes("company.com") || H.from_address.includes("techcorp.com");
          }
        );
        break;
      case "label-personal":
        $ = L.filter(
          (H) => {
            var U;
            return ((U = H.customLabels) == null ? void 0 : U.includes("personal")) || H.subject.toLowerCase().includes("welcome") || H.from_address.includes("startup.io");
          }
        );
        break;
      case "label-important":
        $ = L.filter(
          (H) => {
            var U;
            return ((U = H.customLabels) == null ? void 0 : U.includes("important")) || H.subject.toLowerCase().includes("urgent") || H.subject.toLowerCase().includes("important") || H.is_starred;
          }
        );
        break;
      case "label-travel":
        $ = L == null ? void 0 : L.filter(
          (H) => {
            var U;
            return (U = H.customLabels) == null ? void 0 : U.includes("travel");
          }
        );
        break;
      default:
        if (e.startsWith("custom-label-")) {
          const H = e.replace("custom-label-", "");
          $ = L == null ? void 0 : L.filter(
            (U) => {
              var Q;
              return (Q = U.customLabels) == null ? void 0 : Q.includes(H);
            }
          );
        }
        break;
    }
    if (w.trim()) {
      const H = w.toLowerCase();
      $ = $ == null ? void 0 : $.filter(
        (U) => U.subject.toLowerCase().includes(H) || U.from_adress.toLowerCase().includes(H) || U.preview.toLowerCase().includes(H) || U.messages.some(
          (Q) => Q.content.toLowerCase().includes(H)
        ) || // Search in custom labels
        U.customLabels && U.customLabels.some((Q) => {
          const ie = d.find((Pe) => Pe.id === Q);
          return ie == null ? void 0 : ie.name.toLowerCase().includes(H);
        })
      );
    }
    return $ = I($ || []), $;
  }, [
    i,
    e,
    w,
    b,
    d,
    L,
    u
  ]), O = ($, H = !1) => {
    n($), D(H), a(
      (U) => U == null ? void 0 : U.map(
        (Q) => Q.message_id === $.message_id ? { ...Q, is_read: !0 } : Q
      )
    );
  }, z = () => {
    D(!1);
  }, V = ($) => {
    const H = i == null ? void 0 : i.find((Q) => Q.message_id === $);
    if (!H) return;
    const U = [
      { id: H.message_id, is_starred: H.is_starred }
    ];
    T({
      type: "star",
      emailIds: [$],
      previousState: U
    }), a(
      (Q) => Q == null ? void 0 : Q.map(
        (ie) => ie.message_id === $ ? { ...ie, is_starred: !ie.is_starred } : ie
      )
    ), e === "starred" && !H.is_starred && (r == null ? void 0 : r.id) === $ && n(null);
  }, M = ($) => {
    console.log("toggle", $), g((H) => {
      const U = new Set(H);
      return U.has($) ? U.delete($) : U.add($), U;
    });
  }, Z = () => {
    c(!o);
  }, ne = ($) => {
    console.log($), j(ni({ search: $ }));
  }, G = ($) => {
    y($), j(ni({ is_starred: $ == null ? void 0 : $.starred, is_read: $.readStatus, has_attachment: $ == null ? void 0 : $.hasAttachment }));
  }, se = () => {
    B(!0);
  }, Ee = () => {
    B(!1);
  }, de = async ($) => {
    console.log("Sending email:", $), await new Promise((H) => setTimeout(H, 1e3)), alert("Email sent successfully!"), B(!1);
  }, ue = async ($) => {
    console.log("Saving draft:", $), await new Promise((H) => setTimeout(H, 500)), ($.to.length > 0 || $.subject.trim() || $.body.trim()) && alert("Draft saved successfully!"), B(!1);
  }, pe = ($) => {
    const H = {
      ...$,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    x((U) => [...U, H]), console.log("Creating label:", H);
  }, he = ($, H) => {
    x(
      (U) => U.map(
        (Q) => Q.id === $ ? { ...Q, ...H } : Q
      )
    ), console.log("Updating label:", $, H);
  }, be = ($) => {
    a(
      (H) => H == null ? void 0 : H.map((U) => {
        var Q;
        return {
          ...U,
          customLabels: ((Q = U.customLabels) == null ? void 0 : Q.filter((ie) => ie !== $)) || []
        };
      })
    ), x((H) => H.filter((U) => U.id !== $)), e === `custom-label-${$}` && t("inbox"), console.log("Deleting label:", $);
  }, Fe = ($, H) => {
    a(
      (U) => U.map(
        (Q) => $.includes(Q.message_id) ? { ...Q, customLabels: H } : Q
      )
    ), g(/* @__PURE__ */ new Set()), console.log(`Updated labels for ${$.length} emails:`, H);
  }, we = ($, H) => {
    var Q;
    const U = (Q = i == null ? void 0 : i.filter((ie) => $.includes(ie.message_id))) == null ? void 0 : Q.map((ie) => ({ id: ie.message_id, is_read: ie.is_read }));
    T({
      type: "markAsRead",
      emailIds: $,
      previousState: U
    }), a(
      (ie) => ie == null ? void 0 : ie.map(
        (Pe) => $.includes(Pe.message_id) ? { ...Pe, is_read: H } : Pe
      )
    ), g(/* @__PURE__ */ new Set()), console.log(
      `Marked ${$.length} emails as ${H ? "read" : "unread"}`
    );
  }, Ae = ($) => {
    const H = i == null ? void 0 : i.filter(
      (Q) => $.includes(Q.message_id)
    );
    T({
      type: "delete",
      emailIds: $,
      previousState: H
    });
    const U = i.filter((Q) => $.includes(Q.message_id)).map((Q) => ({ ...Q, is_deleted: !0 }));
    m((Q) => [...Q, ...U]), a(
      (Q) => Q.map(
        (ie) => $.includes(ie.message_id) ? { ...ie, is_deleted: !0 } : ie
      )
    ), g(/* @__PURE__ */ new Set()), r && $.includes(r.message_id) && n(null), console.log(`Deleted ${$} emails`);
  }, Y = () => {
    const $ = K.map((H) => H.message_id);
    g(new Set($));
  }, P = () => {
    g(/* @__PURE__ */ new Set());
  }, re = ($) => {
    const H = i == null ? void 0 : i.find((U) => U.message_id === $);
    H && (m((U) => [...U, H]), a(
      (U) => U == null ? void 0 : U.map(
        (Q) => Q.message_id === $ ? { ...Q, is_deleted: !Q.is_deleted } : Q
      )
    ), r && r.message_id === $ && n(null), console.log(`Email moved to bin: ${H.subject}`));
  }, ae = ($) => {
    const H = u.find(
      (U) => U.message_id === $
    );
    H && (a((U) => [...U, H]), m(
      (U) => U.filter((Q) => Q.message_id !== $)
    ), r && r.message_id === $ && n(null), console.log(`Email restored from bin: ${H.subject}`));
  }, te = ($) => {
    const H = u.filter(
      (U) => $.includes(U.message_id)
    );
    a((U) => [...U, ...H]), m(
      (U) => U.filter((Q) => !$.includes(Q.message_id))
    ), g(/* @__PURE__ */ new Set()), r && $.includes(r.message_id) && n(null), console.log(`Restored ${$.length} emails from bin`);
  }, Se = () => {
    if (R) {
      switch (R.type) {
        case "markAsRead":
          a(
            ($) => $ == null ? void 0 : $.map((H) => {
              const U = R.previousState.find(
                (Q) => Q.id === H.message_id
              );
              return U ? { ...H, is_read: U.is_read } : H;
            })
          );
          break;
        case "delete":
          a(($) => [
            ...$,
            ...R.previousState
          ]);
          break;
        case "star":
          a(
            ($) => $ == null ? void 0 : $.map((H) => {
              const U = R.previousState.find(
                (Q) => Q.id === H.message_id
              );
              return U ? { ...H, is_starred: U.is_starred } : H;
            })
          );
          break;
      }
      T(null), console.log("Undid last action");
    }
  }, ke = ($) => A || {
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  }, Te = ($, H) => {
    S((U) => ({
      ...U,
      [$]: H
    }));
  }, $e = async ($, H = "professional", U = "reply") => {
    const Q = ke($.message_id);
    Te($.message_id, {
      ...Q,
      isGenerating: !0,
      showAiReply: !1,
      replyType: U
    }), await new Promise((xe) => setTimeout(xe, 2e3)), console.log($);
    let ie = "";
    const Pe = i[i.length - 1];
    U && (ie = Pe == null ? void 0 : Pe.ai_response), S((xe) => ({
      ...xe,
      isGenerating: !1,
      showAiReply: !0,
      generatedReply: ie,
      tone: H
    }));
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "h-screen flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ s.jsx(
      B0,
      {
        onMenuToggle: Z,
        onSearch: ne,
        onFiltersChange: G,
        filters: b,
        checkedEmails: p,
        onBulkMarkAsRead: we,
        onBulkDelete: Ae,
        onSelectAll: Y,
        onUnselectAll: P,
        onUndo: Se,
        hasSelection: p.size > 0,
        onComposeClick: se
      }
    ),
    /* @__PURE__ */ s.jsx("div", { className: "flex-1 flex overflow-hidden", children: (l == null ? void 0 : l.isSuccess) && /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "flex-1 flex min-w-0 transition-all duration-200",
        children: N ? /* @__PURE__ */ s.jsx(
          ti,
          {
            email: r,
            onClose: () => n(null),
            onBack: z,
            isFullPage: !0,
            aiReplyState: ke((r == null ? void 0 : r.message_id) || ""),
            onGenerateAiReply: $e,
            onAiReplyStateChange: ($) => (r == null ? void 0 : r.message_id) && Te(r.message_id, $),
            customLabels: d,
            onEmailLabelsChange: Fe,
            onCreateLabel: pe,
            onDeleteEmail: re,
            onRestoreEmail: ae,
            activeSection: e
          }
        ) : /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 h-full", children: [
          l != null && l.isLoading || l != null && l.isFetching ? /* @__PURE__ */ s.jsx(F0, {}) : /* @__PURE__ */ s.jsx(
            "div",
            {
              className: "flex-shrink-0",
              children: /* @__PURE__ */ s.jsx(
                Xx,
                {
                  emails: K,
                  selectedEmailId: (r == null ? void 0 : r.message_id) || null,
                  onEmailSelect: O,
                  onStarToggle: V,
                  onCheckToggle: M,
                  checkedEmails: p,
                  activeSection: e,
                  customLabels: d,
                  onEmailLabelsChange: Fe,
                  onCreateLabel: pe,
                  onBulkMarkAsRead: we,
                  onBulkDelete: Ae,
                  onBulkRestore: te,
                  onSelectAll: Y,
                  onUnselectAll: P,
                  setEmails: a,
                  readStatus: b == null ? void 0 : b.readStatus,
                  searchFilter: h
                }
              )
            }
          ),
          /* @__PURE__ */ s.jsx(
            ti,
            {
              email: r,
              onClose: () => n(null),
              isFullPage: !1,
              aiReplyState: ke((r == null ? void 0 : r.id) || ""),
              onGenerateAiReply: $e,
              onAiReplyStateChange: ($) => (r == null ? void 0 : r.message_id) && Te(r.message_id, $),
              customLabels: d,
              onEmailLabelsChange: Fe,
              onCreateLabel: pe,
              onDeleteEmail: re,
              onRestoreEmail: ae,
              activeSection: e,
              onStarToggle: V
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ s.jsx(
      eh,
      {
        isOpen: _,
        onClose: () => E(!1),
        labels: d,
        onCreateLabel: pe,
        onUpdateLabel: he,
        onDeleteLabel: be
      }
    ),
    k && /* @__PURE__ */ s.jsx(
      Jx,
      {
        isOpen: k,
        onClose: Ee,
        onSend: de,
        onSaveDraft: ue,
        isPanel: !0
      }
    )
  ] });
}
const nh = {
  [fn.reducerPath]: fn.reducer,
  filters: th
}, sh = (e) => e().concat(fn.middleware), dh = Xd({
  reducer: {
    ...nh
  },
  middleware: sh
}), fh = () => /* @__PURE__ */ s.jsx(rh, {});
export {
  fn as InboxService,
  fh as default,
  sh as inboxServiceMiddleware,
  nh as inboxServiceReducer,
  dh as store
};
