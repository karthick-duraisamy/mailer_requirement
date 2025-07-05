var L0 = Object.defineProperty;
var I0 = (e, t, r) => t in e ? L0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Fr = (e, t, r) => I0(e, typeof t != "symbol" ? t + "" : t, r);
import * as V from "react";
import Vt, { forwardRef as z0, createElement as vo, useState as Z, useRef as ke, useEffect as Ae, useLayoutEffect as Ja, useCallback as nt, useMemo as Le, useDebugValue as An } from "react";
import * as ei from "react-dom";
import $0 from "react-dom";
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function H0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function q0(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function s() {
      return this instanceof s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(s) {
    var o = Object.getOwnPropertyDescriptor(e, s);
    Object.defineProperty(r, s, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[s];
      }
    });
  }), r;
}
var As = { exports: {} }, tr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function W0() {
  if (bo) return tr;
  bo = 1;
  var e = Vt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, i, a) {
    var u, m = {}, d = null, x = null;
    a !== void 0 && (d = "" + a), i.key !== void 0 && (d = "" + i.key), i.ref !== void 0 && (x = i.ref);
    for (u in i) s.call(i, u) && !c.hasOwnProperty(u) && (m[u] = i[u]);
    if (l && l.defaultProps) for (u in i = l.defaultProps, i) m[u] === void 0 && (m[u] = i[u]);
    return { $$typeof: t, type: l, key: d, ref: x, props: m, _owner: o.current };
  }
  return tr.Fragment = r, tr.jsx = f, tr.jsxs = f, tr;
}
var rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wo;
function V0() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Vt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function v(F) {
      if (F === null || typeof F != "object")
        return null;
      var X = p && F[p] || F[g];
      return typeof X == "function" ? X : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(F) {
      {
        for (var X = arguments.length, te = new Array(X > 1 ? X - 1 : 0), ue = 1; ue < X; ue++)
          te[ue - 1] = arguments[ue];
        y("error", F, te);
      }
    }
    function y(F, X, te) {
      {
        var ue = C.ReactDebugCurrentFrame, je = ue.getStackAddendum();
        je !== "" && (X += "%s", te = te.concat([je]));
        var De = te.map(function(ye) {
          return String(ye);
        });
        De.unshift("Warning: " + X), Function.prototype.apply.call(console[F], console, De);
      }
    }
    var h = !1, w = !1, A = !1, j = !1, S = !1, D;
    D = Symbol.for("react.module.reference");
    function E(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === s || F === c || S || F === o || F === a || F === u || j || F === x || h || w || A || typeof F == "object" && F !== null && (F.$$typeof === d || F.$$typeof === m || F.$$typeof === f || F.$$typeof === l || F.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === D || F.getModuleId !== void 0));
    }
    function N(F, X, te) {
      var ue = F.displayName;
      if (ue)
        return ue;
      var je = X.displayName || X.name || "";
      return je !== "" ? te + "(" + je + ")" : te;
    }
    function k(F) {
      return F.displayName || "Context";
    }
    function _(F) {
      if (F == null)
        return null;
      if (typeof F.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof F == "function")
        return F.displayName || F.name || null;
      if (typeof F == "string")
        return F;
      switch (F) {
        case s:
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
            return k(X) + ".Consumer";
          case f:
            var te = F;
            return k(te._context) + ".Provider";
          case i:
            return N(F, F.render, "ForwardRef");
          case m:
            var ue = F.displayName || null;
            return ue !== null ? ue : _(F.type) || "Memo";
          case d: {
            var je = F, De = je._payload, ye = je._init;
            try {
              return _(ye(De));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, O = 0, z, H, I, L, Y, T, $;
    function R() {
    }
    R.__reactDisabledLog = !0;
    function P() {
      {
        if (O === 0) {
          z = console.log, H = console.info, I = console.warn, L = console.error, Y = console.group, T = console.groupCollapsed, $ = console.groupEnd;
          var F = {
            configurable: !0,
            enumerable: !0,
            value: R,
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
        O++;
      }
    }
    function G() {
      {
        if (O--, O === 0) {
          var F = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, F, {
              value: z
            }),
            info: B({}, F, {
              value: H
            }),
            warn: B({}, F, {
              value: I
            }),
            error: B({}, F, {
              value: L
            }),
            group: B({}, F, {
              value: Y
            }),
            groupCollapsed: B({}, F, {
              value: T
            }),
            groupEnd: B({}, F, {
              value: $
            })
          });
        }
        O < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = C.ReactCurrentDispatcher, ie;
    function J(F, X, te) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (je) {
            var ue = je.stack.trim().match(/\n( *(at )?)/);
            ie = ue && ue[1] || "";
          }
        return `
` + ie + F;
      }
    }
    var we = !1, de;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      de = new ce();
    }
    function ve(F, X) {
      if (!F || we)
        return "";
      {
        var te = de.get(F);
        if (te !== void 0)
          return te;
      }
      var ue;
      we = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var De;
      De = ee.current, ee.current = null, P();
      try {
        if (X) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (He) {
              ue = He;
            }
            Reflect.construct(F, [], ye);
          } else {
            try {
              ye.call();
            } catch (He) {
              ue = He;
            }
            F.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (He) {
            ue = He;
          }
          F();
        }
      } catch (He) {
        if (He && ue && typeof He.stack == "string") {
          for (var xe = He.stack.split(`
`), $e = ue.stack.split(`
`), Fe = xe.length - 1, Pe = $e.length - 1; Fe >= 1 && Pe >= 0 && xe[Fe] !== $e[Pe]; )
            Pe--;
          for (; Fe >= 1 && Pe >= 0; Fe--, Pe--)
            if (xe[Fe] !== $e[Pe]) {
              if (Fe !== 1 || Pe !== 1)
                do
                  if (Fe--, Pe--, Pe < 0 || xe[Fe] !== $e[Pe]) {
                    var Ge = `
` + xe[Fe].replace(" at new ", " at ");
                    return F.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", F.displayName)), typeof F == "function" && de.set(F, Ge), Ge;
                  }
                while (Fe >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        we = !1, ee.current = De, G(), Error.prepareStackTrace = je;
      }
      var zt = F ? F.displayName || F.name : "", At = zt ? J(zt) : "";
      return typeof F == "function" && de.set(F, At), At;
    }
    function he(F, X, te) {
      return ve(F, !1);
    }
    function pe(F) {
      var X = F.prototype;
      return !!(X && X.isReactComponent);
    }
    function _e(F, X, te) {
      if (F == null)
        return "";
      if (typeof F == "function")
        return ve(F, pe(F));
      if (typeof F == "string")
        return J(F);
      switch (F) {
        case a:
          return J("Suspense");
        case u:
          return J("SuspenseList");
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case i:
            return he(F.render);
          case m:
            return _e(F.type, X, te);
          case d: {
            var ue = F, je = ue._payload, De = ue._init;
            try {
              return _e(De(je), X, te);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ne = {}, Ce = C.ReactDebugCurrentFrame;
    function W(F) {
      if (F) {
        var X = F._owner, te = _e(F.type, F._source, X ? X.type : null);
        Ce.setExtraStackFrame(te);
      } else
        Ce.setExtraStackFrame(null);
    }
    function se(F, X, te, ue, je) {
      {
        var De = Function.call.bind(ge);
        for (var ye in F)
          if (De(F, ye)) {
            var xe = void 0;
            try {
              if (typeof F[ye] != "function") {
                var $e = Error((ue || "React class") + ": " + te + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof F[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              xe = F[ye](X, ye, ue, te, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              xe = Fe;
            }
            xe && !(xe instanceof Error) && (W(je), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", te, ye, typeof xe), W(null)), xe instanceof Error && !(xe.message in Ne) && (Ne[xe.message] = !0, W(je), b("Failed %s type: %s", te, xe.message), W(null));
          }
      }
    }
    var ne = Array.isArray;
    function M(F) {
      return ne(F);
    }
    function ae(F) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, te = X && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return te;
      }
    }
    function le(F) {
      try {
        return Ee(F), !1;
      } catch {
        return !0;
      }
    }
    function Ee(F) {
      return "" + F;
    }
    function Re(F) {
      if (le(F))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ae(F)), Ee(F);
    }
    var Be = C.ReactCurrentOwner, U = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, q, Q, K;
    K = {};
    function re(F) {
      if (ge.call(F, "ref")) {
        var X = Object.getOwnPropertyDescriptor(F, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return F.ref !== void 0;
    }
    function Oe(F) {
      if (ge.call(F, "key")) {
        var X = Object.getOwnPropertyDescriptor(F, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return F.key !== void 0;
    }
    function Se(F, X) {
      if (typeof F.ref == "string" && Be.current && X && Be.current.stateNode !== X) {
        var te = _(Be.current.type);
        K[te] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(Be.current.type), F.ref), K[te] = !0);
      }
    }
    function Lt(F, X) {
      {
        var te = function() {
          q || (q = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        te.isReactWarning = !0, Object.defineProperty(F, "key", {
          get: te,
          configurable: !0
        });
      }
    }
    function Et(F, X) {
      {
        var te = function() {
          Q || (Q = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        te.isReactWarning = !0, Object.defineProperty(F, "ref", {
          get: te,
          configurable: !0
        });
      }
    }
    var Xt = function(F, X, te, ue, je, De, ye) {
      var xe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: F,
        key: X,
        ref: te,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: De
      };
      return xe._store = {}, Object.defineProperty(xe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(xe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
    };
    function Ye(F, X, te, ue, je) {
      {
        var De, ye = {}, xe = null, $e = null;
        te !== void 0 && (Re(te), xe = "" + te), Oe(X) && (Re(X.key), xe = "" + X.key), re(X) && ($e = X.ref, Se(X, je));
        for (De in X)
          ge.call(X, De) && !U.hasOwnProperty(De) && (ye[De] = X[De]);
        if (F && F.defaultProps) {
          var Fe = F.defaultProps;
          for (De in Fe)
            ye[De] === void 0 && (ye[De] = Fe[De]);
        }
        if (xe || $e) {
          var Pe = typeof F == "function" ? F.displayName || F.name || "Unknown" : F;
          xe && Lt(ye, Pe), $e && Et(ye, Pe);
        }
        return Xt(F, xe, $e, je, ue, Be.current, ye);
      }
    }
    var ut = C.ReactCurrentOwner, jt = C.ReactDebugCurrentFrame;
    function Ke(F) {
      if (F) {
        var X = F._owner, te = _e(F.type, F._source, X ? X.type : null);
        jt.setExtraStackFrame(te);
      } else
        jt.setExtraStackFrame(null);
    }
    var It;
    It = !1;
    function Zt(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function kr() {
      {
        if (ut.current) {
          var F = _(ut.current.type);
          if (F)
            return `

Check the render method of \`` + F + "`.";
        }
        return "";
      }
    }
    function bn(F) {
      return "";
    }
    var Jt = {};
    function wn(F) {
      {
        var X = kr();
        if (!X) {
          var te = typeof F == "string" ? F : F.displayName || F.name;
          te && (X = `

Check the top-level render call using <` + te + ">.");
        }
        return X;
      }
    }
    function _r(F, X) {
      {
        if (!F._store || F._store.validated || F.key != null)
          return;
        F._store.validated = !0;
        var te = wn(X);
        if (Jt[te])
          return;
        Jt[te] = !0;
        var ue = "";
        F && F._owner && F._owner !== ut.current && (ue = " It was passed a child from " + _(F._owner.type) + "."), Ke(F), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', te, ue), Ke(null);
      }
    }
    function er(F, X) {
      {
        if (typeof F != "object")
          return;
        if (M(F))
          for (var te = 0; te < F.length; te++) {
            var ue = F[te];
            Zt(ue) && _r(ue, X);
          }
        else if (Zt(F))
          F._store && (F._store.validated = !0);
        else if (F) {
          var je = v(F);
          if (typeof je == "function" && je !== F.entries)
            for (var De = je.call(F), ye; !(ye = De.next()).done; )
              Zt(ye.value) && _r(ye.value, X);
        }
      }
    }
    function Cn(F) {
      {
        var X = F.type;
        if (X == null || typeof X == "string")
          return;
        var te;
        if (typeof X == "function")
          te = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === m))
          te = X.propTypes;
        else
          return;
        if (te) {
          var ue = _(X);
          se(te, F.props, "prop", ue, F);
        } else if (X.PropTypes !== void 0 && !It) {
          It = !0;
          var je = _(X);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(F) {
      {
        for (var X = Object.keys(F.props), te = 0; te < X.length; te++) {
          var ue = X[te];
          if (ue !== "children" && ue !== "key") {
            Ke(F), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Ke(null);
            break;
          }
        }
        F.ref !== null && (Ke(F), b("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
      }
    }
    var ze = {};
    function Xe(F, X, te, ue, je, De) {
      {
        var ye = E(F);
        if (!ye) {
          var xe = "";
          (F === void 0 || typeof F == "object" && F !== null && Object.keys(F).length === 0) && (xe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = bn();
          $e ? xe += $e : xe += kr();
          var Fe;
          F === null ? Fe = "null" : M(F) ? Fe = "array" : F !== void 0 && F.$$typeof === t ? (Fe = "<" + (_(F.type) || "Unknown") + " />", xe = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof F, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, xe);
        }
        var Pe = Ye(F, X, te, je, De);
        if (Pe == null)
          return Pe;
        if (ye) {
          var Ge = X.children;
          if (Ge !== void 0)
            if (ue)
              if (M(Ge)) {
                for (var zt = 0; zt < Ge.length; zt++)
                  er(Ge[zt], F);
                Object.freeze && Object.freeze(Ge);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              er(Ge, F);
        }
        if (ge.call(X, "key")) {
          var At = _(F), He = Object.keys(X).filter(function(M0) {
            return M0 !== "key";
          }), jn = He.length > 0 ? "{key: someKey, " + He.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[At + jn]) {
            var T0 = He.length > 0 ? "{" + He.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, jn, At, T0, At), ze[At + jn] = !0;
          }
        }
        return F === s ? Sr(Pe) : Cn(Pe), Pe;
      }
    }
    function Br(F, X, te) {
      return Xe(F, X, te, !0);
    }
    function En(F, X, te) {
      return Xe(F, X, te, !1);
    }
    var O0 = En, P0 = Br;
    rr.Fragment = s, rr.jsx = O0, rr.jsxs = P0;
  }()), rr;
}
process.env.NODE_ENV === "production" ? As.exports = W0() : As.exports = V0();
var n = As.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var U0 = {
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
const Q0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), oe = (e, t) => {
  const r = z0(
    ({
      color: s = "currentColor",
      size: o = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: f,
      className: l = "",
      children: i,
      ...a
    }, u) => vo(
      "svg",
      {
        ref: u,
        ...U0,
        width: o,
        height: o,
        stroke: s,
        strokeWidth: f ? Number(c) * 24 / Number(o) : c,
        className: ["lucide", `lucide-${Q0(e)}`, l].join(" "),
        ...a
      },
      [
        ...t.map(([m, d]) => vo(m, d)),
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
const K0 = oe("AlertCircle", [
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
const G0 = oe("Archive", [
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
const Y0 = oe("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = oe("BellOff", [
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
const ti = oe("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = oe("Bot", [
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
const ri = oe("Calendar", [
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
const ni = oe("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = oe("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = oe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = oe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = oe("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = oe("CircleUser", [
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
const an = oe("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = oe("Download", [
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
const ec = oe("Expand", [
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
const ai = oe("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = oe("FileText", [
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
const tc = oe("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = oe("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = oe("Globe", [
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
const sc = oe("Image", [
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
const ii = oe("Inbox", [
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
const Ao = oe("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = oe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = oe("MailOpen", [
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
const Vr = oe("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = oe("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = oe("Minimize", [
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
const lc = oe("Monitor", [
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
const ci = oe("MoreHorizontal", [
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
const uc = oe("Palette", [
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
const dc = oe("PanelsTopLeft", [
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
const Ns = oe("Paperclip", [
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
const fc = oe("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = oe("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = oe("Plane", [
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
const Ur = oe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = oe("ReplyAll", [
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
const Do = oe("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = oe("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = oe("Save", [
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
const mc = oe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = oe("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = oe("Settings", [
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
const gc = oe("Shield", [
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
const kt = oe("Sparkles", [
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
const Dn = oe("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = oe("Star", [
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
const Qr = oe("Tag", [
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
const ui = oe("Ticket", [
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
const br = oe("Trash2", [
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
const di = oe("Type", [
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
const yc = oe("UserCog", [
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
const fi = oe("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = oe("Wand2", [
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
const xi = oe("XCircle", [
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
const Ve = oe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), bc = ({
  filters: e,
  onFiltersChange: t,
  onClearFilters: r
}) => {
  const [s, o] = Z(!1), c = (i, a) => {
    t({
      ...e,
      [i]: a
    });
  }, f = (i, a) => {
    t({
      ...e,
      dateRange: {
        ...e.dateRange,
        [i]: a
      }
    });
  }, l = () => e.readStatus !== "all" || e.starred || e.hasAttachment || e.sortBy !== "newest" || e.dateRange.from || e.dateRange.to || e.intent !== "all";
  return /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        onClick: () => o(!s),
        className: `
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors
          ${l() ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
        `,
        children: [
          /* @__PURE__ */ n.jsx(tc, { className: "w-4 h-4" }),
          /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium", children: "Filters" }),
          l() && /* @__PURE__ */ n.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: "Active" }),
          /* @__PURE__ */ n.jsx(oi, { className: `w-4 h-4 transition-transform ${s ? "rotate-180" : ""}` })
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsxs("div", { className: "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ n.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Filter Emails" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          l() && /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: r,
              className: "text-xs text-gray-500 hover:text-gray-700",
              children: "Clear all"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => o(!1),
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ n.jsx(Ve, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Read Status" }),
          /* @__PURE__ */ n.jsx("div", { className: "flex space-x-2", children: [
            { value: "all", label: "All", icon: Vr },
            { value: "unread", label: "Unread", icon: Vr },
            { value: "read", label: "Read", icon: ac }
          ].map(({ value: i, label: a, icon: u }) => /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: () => c("readStatus", i),
              className: `
                      flex items-center space-x-1 px-3 py-2 rounded-md text-xs transition-colors
                      ${e.readStatus === i ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
                    `,
              children: [
                /* @__PURE__ */ n.jsx(u, { className: "w-3 h-3" }),
                /* @__PURE__ */ n.jsx("span", { children: a })
              ]
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Quick Filters" }),
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ n.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.starred,
                  onChange: (i) => c("starred", i.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ n.jsx(ur, { className: "w-4 h-4 ml-2 mr-1 text-yellow-500" }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Starred only" })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.hasAttachment,
                  onChange: (i) => c("hasAttachment", i.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ n.jsx(Ns, { className: "w-4 h-4 ml-2 mr-1 text-gray-500" }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Has attachments" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort by" }),
          /* @__PURE__ */ n.jsxs(
            "select",
            {
              value: e.sortBy,
              onChange: (i) => c("sortBy", i.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ n.jsx("option", { value: "newest", children: "Newest first" }),
                /* @__PURE__ */ n.jsx("option", { value: "oldest", children: "Oldest first" }),
                /* @__PURE__ */ n.jsx("option", { value: "subject-az", children: "Subject (A-Z)" }),
                /* @__PURE__ */ n.jsx("option", { value: "subject-za", children: "Subject (Z-A)" }),
                /* @__PURE__ */ n.jsx("option", { value: "sender-az", children: "Sender (A-Z)" }),
                /* @__PURE__ */ n.jsx("option", { value: "sender-za", children: "Sender (Z-A)" }),
                /* @__PURE__ */ n.jsx("option", { value: "starred-first", children: "Starred first" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            /* @__PURE__ */ n.jsx(ri, { className: "w-4 h-4 inline mr-1" }),
            "Date Range"
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "From" }),
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.from,
                  onChange: (i) => f("from", i.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "To" }),
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.to,
                  onChange: (i) => f("to", i.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Type" }),
          /* @__PURE__ */ n.jsxs(
            "select",
            {
              value: e.intent,
              onChange: (i) => c("intent", i.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ n.jsx("option", { value: "all", children: "All types" }),
                /* @__PURE__ */ n.jsx("option", { value: "new", children: "New emails" }),
                /* @__PURE__ */ n.jsx("option", { value: "meetings", children: "Meeting invites" }),
                /* @__PURE__ */ n.jsx("option", { value: "notifications", children: "System notifications" }),
                /* @__PURE__ */ n.jsx("option", { value: "campaigns", children: "Marketing campaigns" }),
                /* @__PURE__ */ n.jsx("option", { value: "support", children: "Support requests" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, wc = ({ isOpen: e, onClose: t }) => {
  const [r, s] = Z(!0), [o, c] = Z(!0), [f, l] = Z(!1), [i, a] = Z({ start: "22:00", end: "08:00" }), [u, m] = Z({
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
  return e ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Notification Preferences" }),
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Ve, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ n.jsx(Vr, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Email Notifications" }),
            /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: "Receive notifications via email" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: r,
              onChange: (x) => s(x.target.checked)
            }
          ),
          /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ n.jsx(ti, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Desktop Notifications" }),
            /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: "Show browser notifications" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: o,
              onChange: (x) => c(x.target.checked)
            }
          ),
          /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ n.jsx(X0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Sound Notifications" }),
            /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: "Play sound for new emails" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: f,
              onChange: (x) => l(x.target.checked)
            }
          ),
          /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ n.jsx(an, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Quiet Hours" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "grid grid-cols-2 gap-4 ml-8", children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "From" }),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "time",
                value: i.start,
                onChange: (x) => a({ ...i, start: x.target.value }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "To" }),
            /* @__PURE__ */ n.jsx(
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
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Notification Types" }),
        /* @__PURE__ */ n.jsx("div", { className: "space-y-3 ml-4", children: Object.entries(u).map(([x, p]) => /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700 capitalize", children: x.replace(/([A-Z])/g, " $1").trim() }),
          /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ n.jsx(
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
            /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, x)) })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: t,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: d,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, Cc = ({ isOpen: e, onClose: t }) => {
  const [r, s] = Z([
    { id: 1, name: "Default", content: `Best regards,
John Doe
Software Engineer
john.doe@company.com`, isDefault: !0 },
    { id: 2, name: "Casual", content: `Thanks!
John`, isDefault: !1 }
  ]), [o, c] = Z(null), [f, l] = Z(""), [i, a] = Z(""), [u, m] = Z(!1), [d, x] = Z(!1), p = (h) => {
    c(h.id), l(h.name), a(h.content), m(!1);
  }, g = () => {
    c(null), l(""), a(""), m(!0);
  }, v = () => {
    if (u) {
      const h = {
        id: Date.now(),
        name: f,
        content: i,
        isDefault: r.length === 0
      };
      s([...r, h]);
    } else o && s(r.map(
      (h) => h.id === o ? { ...h, name: f, content: i } : h
    ));
    c(null), m(!1), l(""), a("");
  }, C = (h) => {
    s(r.filter((w) => w.id !== h));
  }, b = (h) => {
    s(r.map((w) => ({ ...w, isDefault: w.id === h })));
  }, y = () => {
    c(null), m(!1), l(""), a("");
  };
  return e ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Signatures" }),
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Ve, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "p-6", children: u || o ? /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Signature Name" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: f,
            onChange: (h) => l(h.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Enter signature name"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Signature Content" }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: () => x(!d),
              className: "flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700",
              children: [
                d ? /* @__PURE__ */ n.jsx(fc, { className: "w-4 h-4" }) : /* @__PURE__ */ n.jsx(ai, { className: "w-4 h-4" }),
                /* @__PURE__ */ n.jsx("span", { children: d ? "Edit" : "Preview" })
              ]
            }
          )
        ] }),
        d ? /* @__PURE__ */ n.jsx("div", { className: "w-full min-h-32 p-3 border border-gray-300 rounded-md bg-gray-50", children: /* @__PURE__ */ n.jsx("div", { className: "whitespace-pre-wrap text-sm text-gray-900", children: i || "No content yet..." }) }) : /* @__PURE__ */ n.jsx(
          "textarea",
          {
            value: i,
            onChange: (h) => a(h.target.value),
            className: "w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
            placeholder: "Enter your signature content"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end space-x-3 pt-4", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: y,
            className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: v,
            disabled: !f.trim() || !i.trim(),
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
            children: "Save Signature"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Your Signatures" }),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: g,
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
            children: "Create New"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "space-y-3", children: r.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: "text-center py-8 text-gray-500", children: [
        /* @__PURE__ */ n.jsx(di, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
        /* @__PURE__ */ n.jsx("p", { children: "No signatures created yet" }),
        /* @__PURE__ */ n.jsx("p", { className: "text-sm", children: 'Click "Create New" to add your first signature' })
      ] }) : r.map((h) => /* @__PURE__ */ n.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsx("h4", { className: "font-medium text-gray-900", children: h.name }),
            h.isDefault && /* @__PURE__ */ n.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full", children: "Default" })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: () => p(h),
                className: "text-blue-600 hover:text-blue-700 text-sm",
                children: "Edit"
              }
            ),
            !h.isDefault && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: () => b(h.id),
                  className: "text-green-600 hover:text-green-700 text-sm",
                  children: "Set Default"
                }
              ),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: () => C(h.id),
                  className: "text-red-600 hover:text-red-700 text-sm",
                  children: "Delete"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "bg-gray-50 rounded p-3 text-sm text-gray-700", children: /* @__PURE__ */ n.jsx("div", { className: "whitespace-pre-wrap", children: h.content }) })
      ] }, h.id)) })
    ] }) })
  ] }) }) : null;
}, Ec = ({ isOpen: e, onClose: t }) => {
  const [r, s] = Z({
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
    s((a) => ({ ...a, [l]: i }));
  }, c = () => {
    console.log("Saving display settings:", r), t();
  }, f = () => {
    s({
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
  return e ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Display Options" }),
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Ve, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(dc, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Display Density" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "ml-7 space-y-2", children: ["compact", "comfortable", "relaxed"].map((l) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700 capitalize", children: l })
        ] }, l)) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(lc, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Reading Pane" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "right", label: "Right side" },
          { value: "bottom", label: "Bottom" },
          { value: "off", label: "No reading pane" }
        ].map((l) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: l.label })
        ] }, l.value)) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(sc, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Image Display" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "always", label: "Always show images" },
          { value: "ask", label: "Ask before showing images" },
          { value: "never", label: "Never show images" }
        ].map((l) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: l.label })
        ] }, l.value)) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(di, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Font Size" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "ml-7", children: /* @__PURE__ */ n.jsxs(
          "select",
          {
            value: r.fontSize,
            onChange: (l) => o("fontSize", l.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ n.jsx("option", { value: "small", children: "Small" }),
              /* @__PURE__ */ n.jsx("option", { value: "medium", children: "Medium" }),
              /* @__PURE__ */ n.jsx("option", { value: "large", children: "Large" }),
              /* @__PURE__ */ n.jsx("option", { value: "extra-large", children: "Extra Large" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(ai, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Theme" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "auto", label: "Auto (system)" }
        ].map((l) => /* @__PURE__ */ n.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: l.label })
        ] }, l.value)) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Display Options" }),
        /* @__PURE__ */ n.jsx("div", { className: "space-y-3 ml-4", children: [
          { key: "showPreview", label: "Show email preview pane" },
          { key: "showSender", label: "Show sender avatars" },
          { key: "showSnippet", label: "Show email snippets in list" },
          { key: "conversationView", label: "Group emails by conversation" }
        ].map((l) => /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: l.label }),
          /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: r[l.key],
                onChange: (i) => o(l.key, i.target.checked)
              }
            ),
            /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, l.key)) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Mark as Read Delay" }),
        /* @__PURE__ */ n.jsxs("div", { className: "ml-4", children: [
          /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Seconds before marking email as read when opened" }),
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
            /* @__PURE__ */ n.jsx("span", { children: "Immediately" }),
            /* @__PURE__ */ n.jsxs("span", { children: [
              r.markAsReadDelay,
              "s"
            ] }),
            /* @__PURE__ */ n.jsx("span", { children: "10s" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: f,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Reset to Defaults"
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: t,
            className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ n.jsx(
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
}, jc = ({ isOpen: e, onClose: t }) => {
  const [r, s] = Z({
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
    s((u) => ({ ...u, [i]: a }));
  }, c = () => {
    console.log("Saving general settings:", r), t();
  }, f = () => {
    console.log("Exporting user data..."), alert("Data export initiated. You will receive a download link via email.");
  }, l = () => {
    window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    ) && (console.log("Account deletion requested..."), alert("Account deletion request submitted. Please check your email for confirmation."));
  };
  return e ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "General Settings" }),
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Ve, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(nc, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Language & Region" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "ml-7 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Language" }),
            /* @__PURE__ */ n.jsxs(
              "select",
              {
                value: r.language,
                onChange: (i) => o("language", i.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ n.jsx("option", { value: "en", children: "English" }),
                  /* @__PURE__ */ n.jsx("option", { value: "es", children: "Español" }),
                  /* @__PURE__ */ n.jsx("option", { value: "fr", children: "Français" }),
                  /* @__PURE__ */ n.jsx("option", { value: "de", children: "Deutsch" }),
                  /* @__PURE__ */ n.jsx("option", { value: "zh", children: "中文" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Timezone" }),
            /* @__PURE__ */ n.jsxs(
              "select",
              {
                value: r.timezone,
                onChange: (i) => o("timezone", i.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ n.jsx("option", { value: "America/New_York", children: "Eastern Time" }),
                  /* @__PURE__ */ n.jsx("option", { value: "America/Chicago", children: "Central Time" }),
                  /* @__PURE__ */ n.jsx("option", { value: "America/Denver", children: "Mountain Time" }),
                  /* @__PURE__ */ n.jsx("option", { value: "America/Los_Angeles", children: "Pacific Time" }),
                  /* @__PURE__ */ n.jsx("option", { value: "UTC", children: "UTC" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(an, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Email Behavior" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Auto-save drafts" }),
              /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500", children: "Automatically save email drafts while composing" })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.autoSave,
                  onChange: (i) => o("autoSave", i.target.checked)
                }
              ),
              /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Confirm before deleting" }),
              /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500", children: "Show confirmation dialog when deleting emails" })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.confirmDelete,
                  onChange: (i) => o("confirmDelete", i.target.checked)
                }
              ),
              /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsxs("label", { className: "block text-sm text-gray-700 mb-2", children: [
              "Undo send delay: ",
              r.undoSendDelay,
              " seconds"
            ] }),
            /* @__PURE__ */ n.jsx(
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
            /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
              /* @__PURE__ */ n.jsx("span", { children: "No delay" }),
              /* @__PURE__ */ n.jsx("span", { children: "30s" })
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Maximum attachment size (MB)" }),
            /* @__PURE__ */ n.jsxs(
              "select",
              {
                value: r.maxAttachmentSize,
                onChange: (i) => o("maxAttachmentSize", parseInt(i.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ n.jsx("option", { value: 10, children: "10 MB" }),
                  /* @__PURE__ */ n.jsx("option", { value: 25, children: "25 MB" }),
                  /* @__PURE__ */ n.jsx("option", { value: 50, children: "50 MB" }),
                  /* @__PURE__ */ n.jsx("option", { value: 100, children: "100 MB" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(G0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Auto Archive" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Enable auto-archive" }),
              /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500", children: "Automatically archive old emails" })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.autoArchive,
                  onChange: (i) => o("autoArchive", i.target.checked)
                }
              ),
              /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          r.autoArchive && /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Archive emails after (days)" }),
            /* @__PURE__ */ n.jsxs(
              "select",
              {
                value: r.archiveAfterDays,
                onChange: (i) => o("archiveAfterDays", parseInt(i.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ n.jsx("option", { value: 7, children: "7 days" }),
                  /* @__PURE__ */ n.jsx("option", { value: 30, children: "30 days" }),
                  /* @__PURE__ */ n.jsx("option", { value: 90, children: "90 days" }),
                  /* @__PURE__ */ n.jsx("option", { value: 365, children: "1 year" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(gc, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Security" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Two-factor authentication" }),
              /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500", children: "Add an extra layer of security" })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: r.twoFactorAuth,
                  onChange: (i) => o("twoFactorAuth", i.target.checked)
                }
              ),
              /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Session timeout (minutes)" }),
            /* @__PURE__ */ n.jsxs(
              "select",
              {
                value: r.sessionTimeout,
                onChange: (i) => o("sessionTimeout", parseInt(i.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ n.jsx("option", { value: 15, children: "15 minutes" }),
                  /* @__PURE__ */ n.jsx("option", { value: 30, children: "30 minutes" }),
                  /* @__PURE__ */ n.jsx("option", { value: 60, children: "1 hour" }),
                  /* @__PURE__ */ n.jsx("option", { value: 120, children: "2 hours" }),
                  /* @__PURE__ */ n.jsx("option", { value: 0, children: "Never" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(jo, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ n.jsx("h3", { className: "font-medium text-gray-900", children: "Data Management" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "ml-7 space-y-3", children: [
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: f,
              className: "w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
              children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ n.jsxs("div", { children: [
                  /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-900", children: "Export your data" }),
                  /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500", children: "Download a copy of your emails and settings" })
                ] }),
                /* @__PURE__ */ n.jsx(jo, { className: "w-4 h-4 text-gray-400" })
              ] })
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: l,
              className: "w-full text-left px-4 py-3 border border-red-300 rounded-md hover:bg-red-50 transition-colors",
              children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ n.jsxs("div", { children: [
                  /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-red-900", children: "Delete account" }),
                  /* @__PURE__ */ n.jsx("p", { className: "text-xs text-red-500", children: "Permanently delete your account and all data" })
                ] }),
                /* @__PURE__ */ n.jsx(br, { className: "w-4 h-4 text-red-400" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Show helpful tips" }),
          /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500", children: "Display tips and shortcuts in the interface" })
        ] }),
        /* @__PURE__ */ n.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: r.showTips,
              onChange: (i) => o("showTips", i.target.checked)
            }
          ),
          /* @__PURE__ */ n.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: t,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: c,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, Ac = ({ onMenuToggle: e, onSearch: t, onFiltersChange: r, filters: s }) => {
  const [o, c] = Z(""), [f, l] = Z(!1), [i, a] = Z(!1), [u, m] = Z(!1), [d, x] = Z(!1), [p, g] = Z(!1), [v, C] = Z(!1), b = ke(null), y = ke(null);
  Ae(() => {
    const N = (k) => {
      b.current && !b.current.contains(k.target) && l(!1), y.current && !y.current.contains(k.target) && a(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, []);
  const h = (N) => {
    const k = N.target.value;
    c(k), t(k);
  }, w = () => {
    console.log("Logging out..."), a(!1);
  }, A = () => {
    r({
      readStatus: "all",
      starred: !1,
      hasAttachment: !1,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all"
    });
  }, j = () => {
    m(!0), l(!1);
  }, S = () => {
    x(!0), l(!1);
  }, D = () => {
    g(!0), l(!1);
  }, E = () => {
    C(!0), l(!1);
  };
  return /* @__PURE__ */ n.jsxs("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50", children: [
    /* @__PURE__ */ n.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ n.jsx("span", { className: "text-white font-bold text-sm", children: "M" }) }),
      /* @__PURE__ */ n.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Mail" })
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 max-w-2xl mx-8", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ n.jsx(mc, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search mail",
            value: o,
            onChange: h,
            className: "w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        bc,
        {
          filters: s,
          onFiltersChange: r,
          onClearFilters: A
        }
      )
    ] }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: b, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: () => l(!f),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
            children: /* @__PURE__ */ n.jsx(Nn, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        f && /* @__PURE__ */ n.jsxs("div", { className: "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: [
          /* @__PURE__ */ n.jsx("div", { className: "px-4 py-2 border-b border-gray-100", children: /* @__PURE__ */ n.jsx("h3", { className: "font-semibold text-gray-900", children: "Settings" }) }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: j,
              className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
              children: [
                /* @__PURE__ */ n.jsx(ti, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-gray-700", children: "Notification Preferences" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: S,
              className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
              children: [
                /* @__PURE__ */ n.jsx(Eo, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-gray-700", children: "Signature Setup" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: D,
              className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
              children: [
                /* @__PURE__ */ n.jsx(Nn, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-gray-700", children: "Email Display Options" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: E,
              className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
              children: [
                /* @__PURE__ */ n.jsx(Nn, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-gray-700", children: "General Settings" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: y, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: () => a(!i),
            className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors",
            children: /* @__PURE__ */ n.jsx(fi, { className: "w-5 h-5 text-blue-600" })
          }
        ),
        i && /* @__PURE__ */ n.jsxs("div", { className: "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "px-4 py-3 border-b border-gray-100", children: [
            /* @__PURE__ */ n.jsx("p", { className: "font-semibold text-gray-900", children: "John Doe" }),
            /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: "john.doe@company.com" })
          ] }),
          /* @__PURE__ */ n.jsxs("button", { className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3", children: [
            /* @__PURE__ */ n.jsx(Eo, { className: "w-4 h-4 text-gray-500" }),
            /* @__PURE__ */ n.jsx("span", { className: "text-gray-700", children: "View Profile" })
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: w,
              className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3 text-red-600",
              children: [
                /* @__PURE__ */ n.jsx(oc, { className: "w-4 h-4" }),
                /* @__PURE__ */ n.jsx("span", { children: "Logout" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      wc,
      {
        isOpen: u,
        onClose: () => m(!1)
      }
    ),
    /* @__PURE__ */ n.jsx(
      Cc,
      {
        isOpen: d,
        onClose: () => x(!1)
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ec,
      {
        isOpen: p,
        onClose: () => g(!1)
      }
    ),
    /* @__PURE__ */ n.jsx(
      jc,
      {
        isOpen: v,
        onClose: () => C(!1)
      }
    )
  ] });
}, Nc = ({
  activeItem: e,
  onItemSelect: t,
  isOpen: r,
  onComposeClick: s,
  customLabels: o,
  onManageLabels: c,
  emailCounts: f,
  onClose: l,
  onWidthChange: i
}) => {
  Z(!0);
  const a = (p) => {
    t(p), window.innerWidth < 768 && l && l();
  };
  Ae(() => {
    const p = (g) => {
      g.key === "Escape" && r && l && l();
    };
    if (r)
      return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [r, l]);
  const u = [
    { id: "inbox", label: "All Conversations", icon: ii, count: f.inbox },
    { id: "starred", label: "Starred", icon: ur, count: f.starred },
    { id: "snoozed", label: "Snoozed", icon: an, count: f.snoozed },
    { id: "bin", label: "Bin", icon: br, count: f.bin }
  ];
  o.filter((p) => p.isSystem), o.filter((p) => !p.isSystem);
  const m = ke(null), [d, x] = Z(64);
  return Ae(() => {
    if (!m.current) return;
    const p = new window.ResizeObserver((g) => {
      for (let v of g)
        x(v.contentRect.width), i && i(v.contentRect.width);
    });
    return p.observe(m.current), () => p.disconnect();
  }, [i]), /* @__PURE__ */ n.jsx(
    "nav",
    {
      ref: m,
      role: "navigation",
      className: `
        group
        fixed top-0 left-0 h-full z-40
        bg-white border-r border-gray-200
        transition-all duration-200
        w-16 hover:w-64
        overflow-x-hidden
        shadow-lg
      `,
      style: { minWidth: 0 },
      children: /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col h-full pt-16", children: [
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            className: "flex items-center space-x-2 px-4 py-2 my-4 rounded-lg hover:bg-gray-100 transition-colors",
            onClick: s,
            style: { width: "90%", margin: "15px auto", background: "#2563eb", color: "#fff" },
            children: [
              /* @__PURE__ */ n.jsx(Ur, { className: "w-5 h-5" }),
              /* @__PURE__ */ n.jsx("span", { className: "ml-3 whitespace-nowrap hidden group-hover:inline opacity-100 transition-opacity duration-200", children: "Compose" })
            ]
          }
        ),
        u.map((p) => /* @__PURE__ */ n.jsxs(
          "button",
          {
            className: `
              sidebar-btn flex items-center w-full py-2 my-1 rounded-lg
              hover:bg-gray-100 transition-all duration-200
              ${e === p.id ? "bg-blue-50" : ""}
              justify-center group-hover:justify-start
              px-0 group-hover:px-4
            `,
            style: { margin: "5px auto", width: "90%" },
            onClick: () => a(p.id),
            children: [
              /* @__PURE__ */ n.jsx(
                p.icon,
                {
                  className: `w-5 h-5 transition-colors duration-200
                ${e === p.id ? "text-blue-600" : "text-gray-700 group-hover:text-blue-600"}
              `
                }
              ),
              /* @__PURE__ */ n.jsx("span", { className: "ml-3 whitespace-nowrap hidden group-hover:inline opacity-100 transition-opacity duration-200", children: p.label })
            ]
          },
          p.id
        )),
        !1
      ] })
    }
  );
}, Dc = ({
  selectedLabels: e,
  availableLabels: t,
  onLabelsChange: r,
  onCreateLabel: s,
  placeholder: o = "Add labels...",
  className: c = "",
  maxHeight: f = "max-h-48"
}) => {
  const [l, i] = Z(!1), [a, u] = Z(""), [m, d] = Z(!1), [x, p] = Z(""), [g, v] = Z("#3B82F6"), C = ke(null), b = ke(null);
  Ae(() => {
    const D = (E) => {
      C.current && !C.current.contains(E.target) && (i(!1), d(!1), u(""), p(""));
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, []);
  const y = t.filter(
    (D) => D.name.toLowerCase().includes(a.toLowerCase()) && !e.includes(D.id)
  ), h = t.filter(
    (D) => e.includes(D.id)
  ), w = (D) => {
    e.includes(D) ? r(e.filter((E) => E !== D)) : r([...e, D]);
  }, A = (D) => {
    r(e.filter((E) => E !== D));
  }, j = () => {
    if (!x.trim() || !s) return;
    const D = t.find(
      (E) => E.name.toLowerCase() === x.trim().toLowerCase()
    );
    D ? w(D.id) : s({
      name: x.trim(),
      color: g,
      isSystem: !1
    }), p(""), d(!1), u("");
  }, S = (D) => {
    D.key === "Enter" ? (D.preventDefault(), m ? j() : a.trim() && s && (p(a.trim()), d(!0))) : D.key === "Escape" && (i(!1), d(!1), u(""));
  };
  return /* @__PURE__ */ n.jsxs("div", { ref: C, className: `relative ${c}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        onClick: () => {
          i(!0), setTimeout(() => {
            var D;
            return (D = b.current) == null ? void 0 : D.focus();
          }, 0);
        },
        className: "min-h-[2.5rem] p-2 border border-gray-300 rounded-lg cursor-text focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all",
        children: /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          h.map((D) => /* @__PURE__ */ n.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-sm font-medium",
              style: {
                backgroundColor: `${D.color}20`,
                color: D.color,
                border: `1px solid ${D.color}40`
              },
              children: [
                /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: D.color }
                  }
                ),
                D.name,
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    onClick: (E) => {
                      E.stopPropagation(), A(D.id);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ n.jsx(Ve, { className: "w-3 h-3" })
                  }
                )
              ]
            },
            D.id
          )),
          /* @__PURE__ */ n.jsx(
            "input",
            {
              ref: b,
              type: "text",
              value: a,
              onChange: (D) => u(D.target.value),
              onKeyDown: S,
              onFocus: () => i(!0),
              placeholder: e.length === 0 ? o : "",
              className: "flex-1 min-w-[120px] border-none outline-none bg-transparent text-sm"
            }
          )
        ] })
      }
    ),
    l && /* @__PURE__ */ n.jsxs("div", { className: `absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${f} overflow-y-auto`, children: [
      m && s && /* @__PURE__ */ n.jsxs("div", { className: "p-3 border-b border-gray-100 bg-blue-50", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
          /* @__PURE__ */ n.jsx(Ur, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-blue-900", children: "Create new label" })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              type: "text",
              value: x,
              onChange: (D) => p(D.target.value),
              onKeyDown: S,
              placeholder: "Label name...",
              className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ n.jsx(
            "input",
            {
              type: "color",
              value: g,
              onChange: (D) => v(D.target.value),
              className: "w-8 h-8 border border-gray-300 rounded cursor-pointer"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: j,
              disabled: !x.trim(),
              className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded text-sm transition-colors",
              children: /* @__PURE__ */ n.jsx(si, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "py-1", children: y.length === 0 && !m ? /* @__PURE__ */ n.jsx("div", { className: "px-3 py-2 text-sm text-gray-500 text-center", children: a ? /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsxs("p", { children: [
          'No labels found for "',
          a,
          '"'
        ] }),
        s && /* @__PURE__ */ n.jsxs(
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
      ] }) : "No available labels" }) : y.map((D) => /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: () => w(D.id),
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2",
          children: [
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full",
                style: { backgroundColor: D.color }
              }
            ),
            /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900", children: D.name }),
            D.description && /* @__PURE__ */ n.jsxs("span", { className: "text-xs text-gray-500 truncate", children: [
              "- ",
              D.description
            ] })
          ]
        },
        D.id
      )) }),
      !m && s && a && y.length === 0 && /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-100", children: /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: () => {
            p(a), d(!0);
          },
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 text-blue-600",
          children: [
            /* @__PURE__ */ n.jsx(Ur, { className: "w-4 h-4" }),
            /* @__PURE__ */ n.jsxs("span", { className: "text-sm", children: [
              'Create "',
              a,
              '" label'
            ] })
          ]
        }
      ) })
    ] })
  ] });
}, kc = ({
  emailIds: e,
  currentLabels: t,
  availableLabels: r,
  onLabelsChange: s,
  onCreateLabel: o,
  className: c = ""
}) => {
  const [f, l] = Z(!1), [i, a] = Z(t), [u, m] = Z(!1), d = ke(null);
  Ae(() => {
    a(t);
  }, [t]), Ae(() => {
    const g = (v) => {
      d.current && !d.current.contains(v.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []);
  const x = async (g) => {
    m(!0), a(g);
    try {
      s(e, g), setTimeout(() => {
        m(!1), l(!1);
      }, 300);
    } catch (v) {
      m(!1), console.error("Error updating labels:", v);
    }
  }, p = r.filter(
    (g) => i.includes(g.id)
  );
  return /* @__PURE__ */ n.jsxs("div", { ref: d, className: `relative ${c}`, children: [
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        onClick: () => l(!f),
        disabled: u,
        className: `flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors ${u ? "opacity-50 cursor-not-allowed" : ""}`,
        title: "Manage labels",
        children: [
          /* @__PURE__ */ n.jsx(Qr, { className: `w-4 h-4 ${u ? "animate-spin" : ""}` }),
          /* @__PURE__ */ n.jsx("span", { className: "text-sm", children: "Labels" }),
          i.length > 0 && /* @__PURE__ */ n.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: i.length }),
          u && /* @__PURE__ */ n.jsx("span", { className: "text-xs text-gray-500", children: "Updating..." })
        ]
      }
    ),
    f && /* @__PURE__ */ n.jsxs("div", { className: "absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "p-3 border-b border-gray-100", children: [
        /* @__PURE__ */ n.jsxs("h3", { className: "text-sm font-semibold text-gray-900 mb-2", children: [
          "Manage Labels ",
          e.length > 1 && `(${e.length} emails)`
        ] }),
        i.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500 mb-2", children: "Current labels:" }),
          /* @__PURE__ */ n.jsx("div", { className: "flex flex-wrap gap-1", children: p.map((g) => /* @__PURE__ */ n.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
              style: {
                backgroundColor: `${g.color}20`,
                color: g.color,
                border: `1px solid ${g.color}40`
              },
              children: [
                /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: g.color }
                  }
                ),
                g.name,
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    onClick: () => {
                      const v = i.filter((C) => C !== g.id);
                      x(v);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ n.jsx(Ve, { className: "w-2 h-2" })
                  }
                )
              ]
            },
            g.id
          )) })
        ] }),
        /* @__PURE__ */ n.jsx(
          Dc,
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
      /* @__PURE__ */ n.jsx("div", { className: "p-3", children: /* @__PURE__ */ n.jsx(
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
function ft(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function ko(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function hi(...e) {
  return (t) => {
    let r = !1;
    const s = e.map((o) => {
      const c = ko(o, t);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let o = 0; o < s.length; o++) {
          const c = s[o];
          typeof c == "function" ? c() : ko(e[o], null);
        }
      };
  };
}
function Pt(...e) {
  return V.useCallback(hi(...e), e);
}
function pi(e, t = []) {
  let r = [];
  function s(c, f) {
    const l = V.createContext(f), i = r.length;
    r = [...r, f];
    const a = (m) => {
      var C;
      const { scope: d, children: x, ...p } = m, g = ((C = d == null ? void 0 : d[e]) == null ? void 0 : C[i]) || l, v = V.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ n.jsx(g.Provider, { value: v, children: x });
    };
    a.displayName = c + "Provider";
    function u(m, d) {
      var g;
      const x = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[i]) || l, p = V.useContext(x);
      if (p) return p;
      if (f !== void 0) return f;
      throw new Error(`\`${m}\` must be used within \`${c}\``);
    }
    return [a, u];
  }
  const o = () => {
    const c = r.map((f) => V.createContext(f));
    return function(l) {
      const i = (l == null ? void 0 : l[e]) || c;
      return V.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: i } }),
        [l, i]
      );
    };
  };
  return o.scopeName = e, [s, _c(o, ...t)];
}
function _c(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const s = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(c) {
      const f = s.reduce((l, { useScope: i, scopeName: a }) => {
        const m = i(c)[`__scope${a}`];
        return { ...l, ...m };
      }, {});
      return V.useMemo(() => ({ [`__scope${t.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
// @__NO_SIDE_EFFECTS__
function Sc(e) {
  const t = /* @__PURE__ */ Bc(e), r = V.forwardRef((s, o) => {
    const { children: c, ...f } = s, l = V.Children.toArray(c), i = l.find(Rc);
    if (i) {
      const a = i.props.children, u = l.map((m) => m === i ? V.Children.count(a) > 1 ? V.Children.only(null) : V.isValidElement(a) ? a.props.children : null : m);
      return /* @__PURE__ */ n.jsx(t, { ...f, ref: o, children: V.isValidElement(a) ? V.cloneElement(a, void 0, u) : null });
    }
    return /* @__PURE__ */ n.jsx(t, { ...f, ref: o, children: c });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Bc(e) {
  const t = V.forwardRef((r, s) => {
    const { children: o, ...c } = r;
    if (V.isValidElement(o)) {
      const f = Pc(o), l = Oc(c, o.props);
      return o.type !== V.Fragment && (l.ref = s ? hi(s, f) : f), V.cloneElement(o, l);
    }
    return V.Children.count(o) > 1 ? V.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var mi = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Fc(e) {
  const t = ({ children: r }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = mi, t;
}
function Rc(e) {
  return V.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mi;
}
function Oc(e, t) {
  const r = { ...t };
  for (const s in t) {
    const o = e[s], c = t[s];
    /^on[A-Z]/.test(s) ? o && c ? r[s] = (...l) => {
      const i = c(...l);
      return o(...l), i;
    } : o && (r[s] = o) : s === "style" ? r[s] = { ...o, ...c } : s === "className" && (r[s] = [o, c].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Pc(e) {
  var s, o;
  let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Tc = [
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
], wt = Tc.reduce((e, t) => {
  const r = /* @__PURE__ */ Sc(`Primitive.${t}`), s = V.forwardRef((o, c) => {
    const { asChild: f, ...l } = o, i = f ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n.jsx(i, { ...l, ref: c });
  });
  return s.displayName = `Primitive.${t}`, { ...e, [t]: s };
}, {});
function Mc(e, t) {
  e && ei.flushSync(() => e.dispatchEvent(t));
}
function cn(e) {
  const t = V.useRef(e);
  return V.useEffect(() => {
    t.current = e;
  }), V.useMemo(() => (...r) => {
    var s;
    return (s = t.current) == null ? void 0 : s.call(t, ...r);
  }, []);
}
function Lc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(e);
  V.useEffect(() => {
    const s = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", s, { capture: !0 }), () => t.removeEventListener("keydown", s, { capture: !0 });
  }, [r, t]);
}
var Ic = "DismissableLayer", ks = "dismissableLayer.update", zc = "dismissableLayer.pointerDownOutside", $c = "dismissableLayer.focusOutside", _o, gi = V.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yi = V.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: o,
      onFocusOutside: c,
      onInteractOutside: f,
      onDismiss: l,
      ...i
    } = e, a = V.useContext(gi), [u, m] = V.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, x] = V.useState({}), p = Pt(t, (j) => m(j)), g = Array.from(a.layers), [v] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), C = g.indexOf(v), b = u ? g.indexOf(u) : -1, y = a.layersWithOutsidePointerEventsDisabled.size > 0, h = b >= C, w = Wc((j) => {
      const S = j.target, D = [...a.branches].some((E) => E.contains(S));
      !h || D || (o == null || o(j), f == null || f(j), j.defaultPrevented || l == null || l());
    }, d), A = Vc((j) => {
      const S = j.target;
      [...a.branches].some((E) => E.contains(S)) || (c == null || c(j), f == null || f(j), j.defaultPrevented || l == null || l());
    }, d);
    return Lc((j) => {
      b === a.layers.size - 1 && (s == null || s(j), !j.defaultPrevented && l && (j.preventDefault(), l()));
    }, d), V.useEffect(() => {
      if (u)
        return r && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (_o = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(u)), a.layers.add(u), So(), () => {
          r && a.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = _o);
        };
    }, [u, d, r, a]), V.useEffect(() => () => {
      u && (a.layers.delete(u), a.layersWithOutsidePointerEventsDisabled.delete(u), So());
    }, [u, a]), V.useEffect(() => {
      const j = () => x({});
      return document.addEventListener(ks, j), () => document.removeEventListener(ks, j);
    }, []), /* @__PURE__ */ n.jsx(
      wt.div,
      {
        ...i,
        ref: p,
        style: {
          pointerEvents: y ? h ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ft(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: ft(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: ft(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
yi.displayName = Ic;
var Hc = "DismissableLayerBranch", qc = V.forwardRef((e, t) => {
  const r = V.useContext(gi), s = V.useRef(null), o = Pt(t, s);
  return V.useEffect(() => {
    const c = s.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ n.jsx(wt.div, { ...e, ref: o });
});
qc.displayName = Hc;
function Wc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(e), s = V.useRef(!1), o = V.useRef(() => {
  });
  return V.useEffect(() => {
    const c = (l) => {
      if (l.target && !s.current) {
        let i = function() {
          vi(
            zc,
            r,
            a,
            { discrete: !0 }
          );
        };
        const a = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = i, t.addEventListener("click", o.current, { once: !0 })) : i();
      } else
        t.removeEventListener("click", o.current);
      s.current = !1;
    }, f = window.setTimeout(() => {
      t.addEventListener("pointerdown", c);
    }, 0);
    return () => {
      window.clearTimeout(f), t.removeEventListener("pointerdown", c), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => s.current = !0
  };
}
function Vc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = cn(e), s = V.useRef(!1);
  return V.useEffect(() => {
    const o = (c) => {
      c.target && !s.current && vi($c, r, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function So() {
  const e = new CustomEvent(ks);
  document.dispatchEvent(e);
}
function vi(e, t, r, { discrete: s }) {
  const o = r.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), s ? Mc(o, c) : o.dispatchEvent(c);
}
var gt = globalThis != null && globalThis.document ? V.useLayoutEffect : () => {
}, Uc = V[" useId ".trim().toString()] || (() => {
}), Qc = 0;
function Kc(e) {
  const [t, r] = V.useState(Uc());
  return gt(() => {
    r((s) => s ?? String(Qc++));
  }, [e]), t ? `radix-${t}` : "";
}
const Gc = ["top", "right", "bottom", "left"], yt = Math.min, We = Math.max, Kr = Math.round, Rr = Math.floor, ot = (e) => ({
  x: e,
  y: e
}), Yc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Xc = {
  start: "end",
  end: "start"
};
function _s(e, t, r) {
  return We(e, yt(t, r));
}
function xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ht(e) {
  return e.split("-")[0];
}
function Gt(e) {
  return e.split("-")[1];
}
function Qs(e) {
  return e === "x" ? "y" : "x";
}
function Ks(e) {
  return e === "y" ? "height" : "width";
}
const Zc = /* @__PURE__ */ new Set(["top", "bottom"]);
function st(e) {
  return Zc.has(ht(e)) ? "y" : "x";
}
function Gs(e) {
  return Qs(st(e));
}
function Jc(e, t, r) {
  r === void 0 && (r = !1);
  const s = Gt(e), o = Gs(e), c = Ks(o);
  let f = o === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (f = Gr(f)), [f, Gr(f)];
}
function el(e) {
  const t = Gr(e);
  return [Ss(e), t, Ss(t)];
}
function Ss(e) {
  return e.replace(/start|end/g, (t) => Xc[t]);
}
const Bo = ["left", "right"], Fo = ["right", "left"], tl = ["top", "bottom"], rl = ["bottom", "top"];
function nl(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Fo : Bo : t ? Bo : Fo;
    case "left":
    case "right":
      return t ? tl : rl;
    default:
      return [];
  }
}
function sl(e, t, r, s) {
  const o = Gt(e);
  let c = nl(ht(e), r === "start", s);
  return o && (c = c.map((f) => f + "-" + o), t && (c = c.concat(c.map(Ss)))), c;
}
function Gr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yc[t]);
}
function ol(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bi(e) {
  return typeof e != "number" ? ol(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Yr(e) {
  const {
    x: t,
    y: r,
    width: s,
    height: o
  } = e;
  return {
    width: s,
    height: o,
    top: r,
    left: t,
    right: t + s,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Ro(e, t, r) {
  let {
    reference: s,
    floating: o
  } = e;
  const c = st(t), f = Gs(t), l = Ks(f), i = ht(t), a = c === "y", u = s.x + s.width / 2 - o.width / 2, m = s.y + s.height / 2 - o.height / 2, d = s[l] / 2 - o[l] / 2;
  let x;
  switch (i) {
    case "top":
      x = {
        x: u,
        y: s.y - o.height
      };
      break;
    case "bottom":
      x = {
        x: u,
        y: s.y + s.height
      };
      break;
    case "right":
      x = {
        x: s.x + s.width,
        y: m
      };
      break;
    case "left":
      x = {
        x: s.x - o.width,
        y: m
      };
      break;
    default:
      x = {
        x: s.x,
        y: s.y
      };
  }
  switch (Gt(t)) {
    case "start":
      x[f] -= d * (r && a ? -1 : 1);
      break;
    case "end":
      x[f] += d * (r && a ? -1 : 1);
      break;
  }
  return x;
}
const al = async (e, t, r) => {
  const {
    placement: s = "bottom",
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
  } = Ro(a, s, i), d = s, x = {}, p = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: v,
      fn: C
    } = l[g], {
      x: b,
      y,
      data: h,
      reset: w
    } = await C({
      x: u,
      y: m,
      initialPlacement: s,
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
      [v]: {
        ...x[v],
        ...h
      }
    }, w && p <= 50 && (p++, typeof w == "object" && (w.placement && (d = w.placement), w.rects && (a = w.rects === !0 ? await f.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: u,
      y: m
    } = Ro(a, d, i)), g = -1);
  }
  return {
    x: u,
    y: m,
    placement: d,
    strategy: o,
    middlewareData: x
  };
};
async function dr(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: s,
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
  } = xt(t, e), p = bi(x), v = l[d ? m === "floating" ? "reference" : "floating" : m], C = Yr(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(v))) == null || r ? v : v.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: i
  })), b = m === "floating" ? {
    x: s,
    y: o,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, y = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(l.floating)), h = await (c.isElement == null ? void 0 : c.isElement(y)) ? await (c.getScale == null ? void 0 : c.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Yr(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: b,
    offsetParent: y,
    strategy: i
  }) : b);
  return {
    top: (C.top - w.top + p.top) / h.y,
    bottom: (w.bottom - C.bottom + p.bottom) / h.y,
    left: (C.left - w.left + p.left) / h.x,
    right: (w.right - C.right + p.right) / h.x
  };
}
const il = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: s,
      placement: o,
      rects: c,
      platform: f,
      elements: l,
      middlewareData: i
    } = t, {
      element: a,
      padding: u = 0
    } = xt(e, t) || {};
    if (a == null)
      return {};
    const m = bi(u), d = {
      x: r,
      y: s
    }, x = Gs(o), p = Ks(x), g = await f.getDimensions(a), v = x === "y", C = v ? "top" : "left", b = v ? "bottom" : "right", y = v ? "clientHeight" : "clientWidth", h = c.reference[p] + c.reference[x] - d[x] - c.floating[p], w = d[x] - c.reference[x], A = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(a));
    let j = A ? A[y] : 0;
    (!j || !await (f.isElement == null ? void 0 : f.isElement(A))) && (j = l.floating[y] || c.floating[p]);
    const S = h / 2 - w / 2, D = j / 2 - g[p] / 2 - 1, E = yt(m[C], D), N = yt(m[b], D), k = E, _ = j - g[p] - N, B = j / 2 - g[p] / 2 + S, O = _s(k, B, _), z = !i.arrow && Gt(o) != null && B !== O && c.reference[p] / 2 - (B < k ? E : N) - g[p] / 2 < 0, H = z ? B < k ? B - k : B - _ : 0;
    return {
      [x]: d[x] + H,
      data: {
        [x]: O,
        centerOffset: B - O - H,
        ...z && {
          alignmentOffset: H
        }
      },
      reset: z
    };
  }
}), cl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, s;
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
        ...v
      } = xt(e, t);
      if ((r = c.arrow) != null && r.alignmentOffset)
        return {};
      const C = ht(o), b = st(l), y = ht(l) === l, h = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), w = d || (y || !g ? [Gr(l)] : el(l)), A = p !== "none";
      !d && A && w.push(...sl(l, g, p, h));
      const j = [l, ...w], S = await dr(t, v), D = [];
      let E = ((s = c.flip) == null ? void 0 : s.overflows) || [];
      if (u && D.push(S[C]), m) {
        const B = Jc(o, f, h);
        D.push(S[B[0]], S[B[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: D
      }], !D.every((B) => B <= 0)) {
        var N, k;
        const B = (((N = c.flip) == null ? void 0 : N.index) || 0) + 1, O = j[B];
        if (O && (!(m === "alignment" ? b !== st(O) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((I) => I.overflows[0] > 0 && st(I.placement) === b)))
          return {
            data: {
              index: B,
              overflows: E
            },
            reset: {
              placement: O
            }
          };
        let z = (k = E.filter((H) => H.overflows[0] <= 0).sort((H, I) => H.overflows[1] - I.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!z)
          switch (x) {
            case "bestFit": {
              var _;
              const H = (_ = E.filter((I) => {
                if (A) {
                  const L = st(I.placement);
                  return L === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((L) => L > 0).reduce((L, Y) => L + Y, 0)]).sort((I, L) => I[1] - L[1])[0]) == null ? void 0 : _[0];
              H && (z = H);
              break;
            }
            case "initialPlacement":
              z = l;
              break;
          }
        if (o !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
function Oo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Po(e) {
  return Gc.some((t) => e[t] >= 0);
}
const ll = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: s = "referenceHidden",
        ...o
      } = xt(e, t);
      switch (s) {
        case "referenceHidden": {
          const c = await dr(t, {
            ...o,
            elementContext: "reference"
          }), f = Oo(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: f,
              referenceHidden: Po(f)
            }
          };
        }
        case "escaped": {
          const c = await dr(t, {
            ...o,
            altBoundary: !0
          }), f = Oo(c, r.floating);
          return {
            data: {
              escapedOffsets: f,
              escaped: Po(f)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, wi = /* @__PURE__ */ new Set(["left", "top"]);
async function ul(e, t) {
  const {
    placement: r,
    platform: s,
    elements: o
  } = e, c = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), f = ht(r), l = Gt(r), i = st(r) === "y", a = wi.has(f) ? -1 : 1, u = c && i ? -1 : 1, m = xt(t, e);
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
const dl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, s;
      const {
        x: o,
        y: c,
        placement: f,
        middlewareData: l
      } = t, i = await ul(t, e);
      return f === ((r = l.offset) == null ? void 0 : r.placement) && (s = l.arrow) != null && s.alignmentOffset ? {} : {
        x: o + i.x,
        y: c + i.y,
        data: {
          ...i,
          placement: f
        }
      };
    }
  };
}, fl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: s,
        placement: o
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !1,
        limiter: l = {
          fn: (v) => {
            let {
              x: C,
              y: b
            } = v;
            return {
              x: C,
              y: b
            };
          }
        },
        ...i
      } = xt(e, t), a = {
        x: r,
        y: s
      }, u = await dr(t, i), m = st(ht(o)), d = Qs(m);
      let x = a[d], p = a[m];
      if (c) {
        const v = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", b = x + u[v], y = x - u[C];
        x = _s(b, x, y);
      }
      if (f) {
        const v = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", b = p + u[v], y = p - u[C];
        p = _s(b, p, y);
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
          y: g.y - s,
          enabled: {
            [d]: c,
            [m]: f
          }
        }
      };
    }
  };
}, xl = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: s,
        placement: o,
        rects: c,
        middlewareData: f
      } = t, {
        offset: l = 0,
        mainAxis: i = !0,
        crossAxis: a = !0
      } = xt(e, t), u = {
        x: r,
        y: s
      }, m = st(o), d = Qs(m);
      let x = u[d], p = u[m];
      const g = xt(l, t), v = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (i) {
        const y = d === "y" ? "height" : "width", h = c.reference[d] - c.floating[y] + v.mainAxis, w = c.reference[d] + c.reference[y] - v.mainAxis;
        x < h ? x = h : x > w && (x = w);
      }
      if (a) {
        var C, b;
        const y = d === "y" ? "width" : "height", h = wi.has(ht(o)), w = c.reference[m] - c.floating[y] + (h && ((C = f.offset) == null ? void 0 : C[m]) || 0) + (h ? 0 : v.crossAxis), A = c.reference[m] + c.reference[y] + (h ? 0 : ((b = f.offset) == null ? void 0 : b[m]) || 0) - (h ? v.crossAxis : 0);
        p < w ? p = w : p > A && (p = A);
      }
      return {
        [d]: x,
        [m]: p
      };
    }
  };
}, hl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, s;
      const {
        placement: o,
        rects: c,
        platform: f,
        elements: l
      } = t, {
        apply: i = () => {
        },
        ...a
      } = xt(e, t), u = await dr(t, a), m = ht(o), d = Gt(o), x = st(o) === "y", {
        width: p,
        height: g
      } = c.floating;
      let v, C;
      m === "top" || m === "bottom" ? (v = m, C = d === (await (f.isRTL == null ? void 0 : f.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = m, v = d === "end" ? "top" : "bottom");
      const b = g - u.top - u.bottom, y = p - u.left - u.right, h = yt(g - u[v], b), w = yt(p - u[C], y), A = !t.middlewareData.shift;
      let j = h, S = w;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (S = y), (s = t.middlewareData.shift) != null && s.enabled.y && (j = b), A && !d) {
        const E = We(u.left, 0), N = We(u.right, 0), k = We(u.top, 0), _ = We(u.bottom, 0);
        x ? S = p - 2 * (E !== 0 || N !== 0 ? E + N : We(u.left, u.right)) : j = g - 2 * (k !== 0 || _ !== 0 ? k + _ : We(u.top, u.bottom));
      }
      await i({
        ...t,
        availableWidth: S,
        availableHeight: j
      });
      const D = await f.getDimensions(l.floating);
      return p !== D.width || g !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ln() {
  return typeof window < "u";
}
function Yt(e) {
  return Ci(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ue(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function lt(e) {
  var t;
  return (t = (Ci(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ci(e) {
  return ln() ? e instanceof Node || e instanceof Ue(e).Node : !1;
}
function et(e) {
  return ln() ? e instanceof Element || e instanceof Ue(e).Element : !1;
}
function at(e) {
  return ln() ? e instanceof HTMLElement || e instanceof Ue(e).HTMLElement : !1;
}
function To(e) {
  return !ln() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ue(e).ShadowRoot;
}
const pl = /* @__PURE__ */ new Set(["inline", "contents"]);
function wr(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: s,
    display: o
  } = tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + r) && !pl.has(o);
}
const ml = /* @__PURE__ */ new Set(["table", "td", "th"]);
function gl(e) {
  return ml.has(Yt(e));
}
const yl = [":popover-open", ":modal"];
function un(e) {
  return yl.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const vl = ["transform", "translate", "scale", "rotate", "perspective"], bl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wl = ["paint", "layout", "strict", "content"];
function Ys(e) {
  const t = Xs(), r = et(e) ? tt(e) : e;
  return vl.some((s) => r[s] ? r[s] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || bl.some((s) => (r.willChange || "").includes(s)) || wl.some((s) => (r.contain || "").includes(s));
}
function Cl(e) {
  let t = vt(e);
  for (; at(t) && !Ut(t); ) {
    if (Ys(t))
      return t;
    if (un(t))
      return null;
    t = vt(t);
  }
  return null;
}
function Xs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const El = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Ut(e) {
  return El.has(Yt(e));
}
function tt(e) {
  return Ue(e).getComputedStyle(e);
}
function dn(e) {
  return et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function vt(e) {
  if (Yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    To(e) && e.host || // Fallback.
    lt(e)
  );
  return To(t) ? t.host : t;
}
function Ei(e) {
  const t = vt(e);
  return Ut(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : at(t) && wr(t) ? t : Ei(t);
}
function fr(e, t, r) {
  var s;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Ei(e), c = o === ((s = e.ownerDocument) == null ? void 0 : s.body), f = Ue(o);
  if (c) {
    const l = Bs(f);
    return t.concat(f, f.visualViewport || [], wr(o) ? o : [], l && r ? fr(l) : []);
  }
  return t.concat(o, fr(o, [], r));
}
function Bs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ji(e) {
  const t = tt(e);
  let r = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const o = at(e), c = o ? e.offsetWidth : r, f = o ? e.offsetHeight : s, l = Kr(r) !== c || Kr(s) !== f;
  return l && (r = c, s = f), {
    width: r,
    height: s,
    $: l
  };
}
function Zs(e) {
  return et(e) ? e : e.contextElement;
}
function qt(e) {
  const t = Zs(e);
  if (!at(t))
    return ot(1);
  const r = t.getBoundingClientRect(), {
    width: s,
    height: o,
    $: c
  } = ji(t);
  let f = (c ? Kr(r.width) : r.width) / s, l = (c ? Kr(r.height) : r.height) / o;
  return (!f || !Number.isFinite(f)) && (f = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: f,
    y: l
  };
}
const jl = /* @__PURE__ */ ot(0);
function Ai(e) {
  const t = Ue(e);
  return !Xs() || !t.visualViewport ? jl : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Al(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ue(e) ? !1 : t;
}
function St(e, t, r, s) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), c = Zs(e);
  let f = ot(1);
  t && (s ? et(s) && (f = qt(s)) : f = qt(e));
  const l = Al(c, r, s) ? Ai(c) : ot(0);
  let i = (o.left + l.x) / f.x, a = (o.top + l.y) / f.y, u = o.width / f.x, m = o.height / f.y;
  if (c) {
    const d = Ue(c), x = s && et(s) ? Ue(s) : s;
    let p = d, g = Bs(p);
    for (; g && s && x !== p; ) {
      const v = qt(g), C = g.getBoundingClientRect(), b = tt(g), y = C.left + (g.clientLeft + parseFloat(b.paddingLeft)) * v.x, h = C.top + (g.clientTop + parseFloat(b.paddingTop)) * v.y;
      i *= v.x, a *= v.y, u *= v.x, m *= v.y, i += y, a += h, p = Ue(g), g = Bs(p);
    }
  }
  return Yr({
    width: u,
    height: m,
    x: i,
    y: a
  });
}
function Js(e, t) {
  const r = dn(e).scrollLeft;
  return t ? t.left + r : St(lt(e)).left + r;
}
function Ni(e, t, r) {
  r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), o = s.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Js(e, s)
  )), c = s.top + t.scrollTop;
  return {
    x: o,
    y: c
  };
}
function Nl(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: s,
    strategy: o
  } = e;
  const c = o === "fixed", f = lt(s), l = t ? un(t.floating) : !1;
  if (s === f || l && c)
    return r;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ot(1);
  const u = ot(0), m = at(s);
  if ((m || !m && !c) && ((Yt(s) !== "body" || wr(f)) && (i = dn(s)), at(s))) {
    const x = St(s);
    a = qt(s), u.x = x.x + s.clientLeft, u.y = x.y + s.clientTop;
  }
  const d = f && !m && !c ? Ni(f, i, !0) : ot(0);
  return {
    width: r.width * a.x,
    height: r.height * a.y,
    x: r.x * a.x - i.scrollLeft * a.x + u.x + d.x,
    y: r.y * a.y - i.scrollTop * a.y + u.y + d.y
  };
}
function Dl(e) {
  return Array.from(e.getClientRects());
}
function kl(e) {
  const t = lt(e), r = dn(e), s = e.ownerDocument.body, o = We(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), c = We(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let f = -r.scrollLeft + Js(e);
  const l = -r.scrollTop;
  return tt(s).direction === "rtl" && (f += We(t.clientWidth, s.clientWidth) - o), {
    width: o,
    height: c,
    x: f,
    y: l
  };
}
function _l(e, t) {
  const r = Ue(e), s = lt(e), o = r.visualViewport;
  let c = s.clientWidth, f = s.clientHeight, l = 0, i = 0;
  if (o) {
    c = o.width, f = o.height;
    const a = Xs();
    (!a || a && t === "fixed") && (l = o.offsetLeft, i = o.offsetTop);
  }
  return {
    width: c,
    height: f,
    x: l,
    y: i
  };
}
const Sl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Bl(e, t) {
  const r = St(e, !0, t === "fixed"), s = r.top + e.clientTop, o = r.left + e.clientLeft, c = at(e) ? qt(e) : ot(1), f = e.clientWidth * c.x, l = e.clientHeight * c.y, i = o * c.x, a = s * c.y;
  return {
    width: f,
    height: l,
    x: i,
    y: a
  };
}
function Mo(e, t, r) {
  let s;
  if (t === "viewport")
    s = _l(e, r);
  else if (t === "document")
    s = kl(lt(e));
  else if (et(t))
    s = Bl(t, r);
  else {
    const o = Ai(e);
    s = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Yr(s);
}
function Di(e, t) {
  const r = vt(e);
  return r === t || !et(r) || Ut(r) ? !1 : tt(r).position === "fixed" || Di(r, t);
}
function Fl(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let s = fr(e, [], !1).filter((l) => et(l) && Yt(l) !== "body"), o = null;
  const c = tt(e).position === "fixed";
  let f = c ? vt(e) : e;
  for (; et(f) && !Ut(f); ) {
    const l = tt(f), i = Ys(f);
    !i && l.position === "fixed" && (o = null), (c ? !i && !o : !i && l.position === "static" && !!o && Sl.has(o.position) || wr(f) && !i && Di(e, f)) ? s = s.filter((u) => u !== f) : o = l, f = vt(f);
  }
  return t.set(e, s), s;
}
function Rl(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: s,
    strategy: o
  } = e;
  const f = [...r === "clippingAncestors" ? un(t) ? [] : Fl(t, this._c) : [].concat(r), s], l = f[0], i = f.reduce((a, u) => {
    const m = Mo(t, u, o);
    return a.top = We(m.top, a.top), a.right = yt(m.right, a.right), a.bottom = yt(m.bottom, a.bottom), a.left = We(m.left, a.left), a;
  }, Mo(t, l, o));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function Ol(e) {
  const {
    width: t,
    height: r
  } = ji(e);
  return {
    width: t,
    height: r
  };
}
function Pl(e, t, r) {
  const s = at(t), o = lt(t), c = r === "fixed", f = St(e, !0, c, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = ot(0);
  function a() {
    i.x = Js(o);
  }
  if (s || !s && !c)
    if ((Yt(t) !== "body" || wr(o)) && (l = dn(t)), s) {
      const x = St(t, !0, c, t);
      i.x = x.x + t.clientLeft, i.y = x.y + t.clientTop;
    } else o && a();
  c && !s && o && a();
  const u = o && !s && !c ? Ni(o, l) : ot(0), m = f.left + l.scrollLeft - i.x - u.x, d = f.top + l.scrollTop - i.y - u.y;
  return {
    x: m,
    y: d,
    width: f.width,
    height: f.height
  };
}
function kn(e) {
  return tt(e).position === "static";
}
function Lo(e, t) {
  if (!at(e) || tt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return lt(e) === r && (r = r.ownerDocument.body), r;
}
function ki(e, t) {
  const r = Ue(e);
  if (un(e))
    return r;
  if (!at(e)) {
    let o = vt(e);
    for (; o && !Ut(o); ) {
      if (et(o) && !kn(o))
        return o;
      o = vt(o);
    }
    return r;
  }
  let s = Lo(e, t);
  for (; s && gl(s) && kn(s); )
    s = Lo(s, t);
  return s && Ut(s) && kn(s) && !Ys(s) ? r : s || Cl(e) || r;
}
const Tl = async function(e) {
  const t = this.getOffsetParent || ki, r = this.getDimensions, s = await r(e.floating);
  return {
    reference: Pl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function Ml(e) {
  return tt(e).direction === "rtl";
}
const Ll = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Nl,
  getDocumentElement: lt,
  getClippingRect: Rl,
  getOffsetParent: ki,
  getElementRects: Tl,
  getClientRects: Dl,
  getDimensions: Ol,
  getScale: qt,
  isElement: et,
  isRTL: Ml
};
function _i(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Il(e, t) {
  let r = null, s;
  const o = lt(e);
  function c() {
    var l;
    clearTimeout(s), (l = r) == null || l.disconnect(), r = null;
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
    const p = Rr(m), g = Rr(o.clientWidth - (u + d)), v = Rr(o.clientHeight - (m + x)), C = Rr(u), y = {
      rootMargin: -p + "px " + -g + "px " + -v + "px " + -C + "px",
      threshold: We(0, yt(1, i)) || 1
    };
    let h = !0;
    function w(A) {
      const j = A[0].intersectionRatio;
      if (j !== i) {
        if (!h)
          return f();
        j ? f(!1, j) : s = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !_i(a, e.getBoundingClientRect()) && f(), h = !1;
    }
    try {
      r = new IntersectionObserver(w, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(w, y);
    }
    r.observe(e);
  }
  return f(!0), c;
}
function zl(e, t, r, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: c = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = s, a = Zs(e), u = o || c ? [...a ? fr(a) : [], ...fr(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", r, {
      passive: !0
    }), c && C.addEventListener("resize", r);
  });
  const m = a && l ? Il(a, r) : null;
  let d = -1, x = null;
  f && (x = new ResizeObserver((C) => {
    let [b] = C;
    b && b.target === a && x && (x.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = x) == null || y.observe(t);
    })), r();
  }), a && !i && x.observe(a), x.observe(t));
  let p, g = i ? St(e) : null;
  i && v();
  function v() {
    const C = St(e);
    g && !_i(g, C) && r(), g = C, p = requestAnimationFrame(v);
  }
  return r(), () => {
    var C;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", r), c && b.removeEventListener("resize", r);
    }), m == null || m(), (C = x) == null || C.disconnect(), x = null, i && cancelAnimationFrame(p);
  };
}
const $l = dl, Hl = fl, ql = cl, Wl = hl, Vl = ll, Io = il, Ul = xl, Ql = (e, t, r) => {
  const s = /* @__PURE__ */ new Map(), o = {
    platform: Ll,
    ...r
  }, c = {
    ...o.platform,
    _c: s
  };
  return al(e, t, {
    ...o,
    platform: c
  });
};
var Kl = typeof document < "u", Gl = function() {
}, Wr = Kl ? Ja : Gl;
function Xr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, s, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (s = r; s-- !== 0; )
        if (!Xr(e[s], t[s]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (s = r; s-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[s]))
        return !1;
    for (s = r; s-- !== 0; ) {
      const c = o[s];
      if (!(c === "_owner" && e.$$typeof) && !Xr(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Si(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zo(e, t) {
  const r = Si(e);
  return Math.round(t * r) / r;
}
function _n(e) {
  const t = V.useRef(e);
  return Wr(() => {
    t.current = e;
  }), t;
}
function Yl(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: o,
    elements: {
      reference: c,
      floating: f
    } = {},
    transform: l = !0,
    whileElementsMounted: i,
    open: a
  } = e, [u, m] = V.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, x] = V.useState(s);
  Xr(d, s) || x(s);
  const [p, g] = V.useState(null), [v, C] = V.useState(null), b = V.useCallback((I) => {
    I !== A.current && (A.current = I, g(I));
  }, []), y = V.useCallback((I) => {
    I !== j.current && (j.current = I, C(I));
  }, []), h = c || p, w = f || v, A = V.useRef(null), j = V.useRef(null), S = V.useRef(u), D = i != null, E = _n(i), N = _n(o), k = _n(a), _ = V.useCallback(() => {
    if (!A.current || !j.current)
      return;
    const I = {
      placement: t,
      strategy: r,
      middleware: d
    };
    N.current && (I.platform = N.current), Ql(A.current, j.current, I).then((L) => {
      const Y = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      B.current && !Xr(S.current, Y) && (S.current = Y, ei.flushSync(() => {
        m(Y);
      }));
    });
  }, [d, t, r, N, k]);
  Wr(() => {
    a === !1 && S.current.isPositioned && (S.current.isPositioned = !1, m((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [a]);
  const B = V.useRef(!1);
  Wr(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Wr(() => {
    if (h && (A.current = h), w && (j.current = w), h && w) {
      if (E.current)
        return E.current(h, w, _);
      _();
    }
  }, [h, w, _, E, D]);
  const O = V.useMemo(() => ({
    reference: A,
    floating: j,
    setReference: b,
    setFloating: y
  }), [b, y]), z = V.useMemo(() => ({
    reference: h,
    floating: w
  }), [h, w]), H = V.useMemo(() => {
    const I = {
      position: r,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return I;
    const L = zo(z.floating, u.x), Y = zo(z.floating, u.y);
    return l ? {
      ...I,
      transform: "translate(" + L + "px, " + Y + "px)",
      ...Si(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: L,
      top: Y
    };
  }, [r, l, z.floating, u.x, u.y]);
  return V.useMemo(() => ({
    ...u,
    update: _,
    refs: O,
    elements: z,
    floatingStyles: H
  }), [u, _, O, z, H]);
}
const Xl = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: s,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return s && t(s) ? s.current != null ? Io({
        element: s.current,
        padding: o
      }).fn(r) : {} : s ? Io({
        element: s,
        padding: o
      }).fn(r) : {};
    }
  };
}, Zl = (e, t) => ({
  ...$l(e),
  options: [e, t]
}), Jl = (e, t) => ({
  ...Hl(e),
  options: [e, t]
}), eu = (e, t) => ({
  ...Ul(e),
  options: [e, t]
}), tu = (e, t) => ({
  ...ql(e),
  options: [e, t]
}), ru = (e, t) => ({
  ...Wl(e),
  options: [e, t]
}), nu = (e, t) => ({
  ...Vl(e),
  options: [e, t]
}), su = (e, t) => ({
  ...Xl(e),
  options: [e, t]
});
var ou = "Arrow", Bi = V.forwardRef((e, t) => {
  const { children: r, width: s = 10, height: o = 5, ...c } = e;
  return /* @__PURE__ */ n.jsx(
    wt.svg,
    {
      ...c,
      ref: t,
      width: s,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ n.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Bi.displayName = ou;
var au = Bi;
function iu(e) {
  const [t, r] = V.useState(void 0);
  return gt(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const s = new ResizeObserver((o) => {
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
      return s.observe(e, { box: "border-box" }), () => s.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var eo = "Popper", [Fi, Ri] = pi(eo), [cu, Oi] = Fi(eo), Pi = (e) => {
  const { __scopePopper: t, children: r } = e, [s, o] = V.useState(null);
  return /* @__PURE__ */ n.jsx(cu, { scope: t, anchor: s, onAnchorChange: o, children: r });
};
Pi.displayName = eo;
var Ti = "PopperAnchor", Mi = V.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: s, ...o } = e, c = Oi(Ti, r), f = V.useRef(null), l = Pt(t, f);
    return V.useEffect(() => {
      c.onAnchorChange((s == null ? void 0 : s.current) || f.current);
    }), s ? null : /* @__PURE__ */ n.jsx(wt.div, { ...o, ref: l });
  }
);
Mi.displayName = Ti;
var to = "PopperContent", [lu, uu] = Fi(to), Li = V.forwardRef(
  (e, t) => {
    var ie, J, we, de, ce, ve;
    const {
      __scopePopper: r,
      side: s = "bottom",
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
    } = e, v = Oi(to, r), [C, b] = V.useState(null), y = Pt(t, (he) => b(he)), [h, w] = V.useState(null), A = iu(h), j = (A == null ? void 0 : A.width) ?? 0, S = (A == null ? void 0 : A.height) ?? 0, D = s + (c !== "center" ? "-" + c : ""), E = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, N = Array.isArray(a) ? a : [a], k = N.length > 0, _ = {
      padding: E,
      boundary: N.filter(fu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: B, floatingStyles: O, placement: z, isPositioned: H, middlewareData: I } = Yl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...he) => zl(...he, {
        animationFrame: x === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Zl({ mainAxis: o + S, alignmentAxis: f }),
        i && Jl({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? eu() : void 0,
          ..._
        }),
        i && tu({ ..._ }),
        ru({
          ..._,
          apply: ({ elements: he, rects: pe, availableWidth: _e, availableHeight: ge }) => {
            const { width: Ne, height: Ce } = pe.reference, W = he.floating.style;
            W.setProperty("--radix-popper-available-width", `${_e}px`), W.setProperty("--radix-popper-available-height", `${ge}px`), W.setProperty("--radix-popper-anchor-width", `${Ne}px`), W.setProperty("--radix-popper-anchor-height", `${Ce}px`);
          }
        }),
        h && su({ element: h, padding: l }),
        xu({ arrowWidth: j, arrowHeight: S }),
        d && nu({ strategy: "referenceHidden", ..._ })
      ]
    }), [L, Y] = $i(z), T = cn(p);
    gt(() => {
      H && (T == null || T());
    }, [H, T]);
    const $ = (ie = I.arrow) == null ? void 0 : ie.x, R = (J = I.arrow) == null ? void 0 : J.y, P = ((we = I.arrow) == null ? void 0 : we.centerOffset) !== 0, [G, ee] = V.useState();
    return gt(() => {
      C && ee(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...O,
          transform: H ? O.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            (de = I.transformOrigin) == null ? void 0 : de.x,
            (ce = I.transformOrigin) == null ? void 0 : ce.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ve = I.hide) == null ? void 0 : ve.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ n.jsx(
          lu,
          {
            scope: r,
            placedSide: L,
            onArrowChange: w,
            arrowX: $,
            arrowY: R,
            shouldHideArrow: P,
            children: /* @__PURE__ */ n.jsx(
              wt.div,
              {
                "data-side": L,
                "data-align": Y,
                ...g,
                ref: y,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: H ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Li.displayName = to;
var Ii = "PopperArrow", du = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, zi = V.forwardRef(function(t, r) {
  const { __scopePopper: s, ...o } = t, c = uu(Ii, s), f = du[c.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ n.jsx(
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
        children: /* @__PURE__ */ n.jsx(
          au,
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
zi.displayName = Ii;
function fu(e) {
  return e !== null;
}
var xu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, C, b;
    const { placement: r, rects: s, middlewareData: o } = t, f = ((v = o.arrow) == null ? void 0 : v.centerOffset) !== 0, l = f ? 0 : e.arrowWidth, i = f ? 0 : e.arrowHeight, [a, u] = $i(r), m = { start: "0%", center: "50%", end: "100%" }[u], d = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + l / 2, x = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + i / 2;
    let p = "", g = "";
    return a === "bottom" ? (p = f ? m : `${d}px`, g = `${-i}px`) : a === "top" ? (p = f ? m : `${d}px`, g = `${s.floating.height + i}px`) : a === "right" ? (p = `${-i}px`, g = f ? m : `${x}px`) : a === "left" && (p = `${s.floating.width + i}px`, g = f ? m : `${x}px`), { data: { x: p, y: g } };
  }
});
function $i(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var hu = Pi, pu = Mi, mu = Li, gu = zi, yu = "Portal", Hi = V.forwardRef((e, t) => {
  var l;
  const { container: r, ...s } = e, [o, c] = V.useState(!1);
  gt(() => c(!0), []);
  const f = r || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return f ? $0.createPortal(/* @__PURE__ */ n.jsx(wt.div, { ...s, ref: t }), f) : null;
});
Hi.displayName = yu;
function vu(e, t) {
  return V.useReducer((r, s) => t[r][s] ?? r, e);
}
var ro = (e) => {
  const { present: t, children: r } = e, s = bu(t), o = typeof r == "function" ? r({ present: s.isPresent }) : V.Children.only(r), c = Pt(s.ref, wu(o));
  return typeof r == "function" || s.isPresent ? V.cloneElement(o, { ref: c }) : null;
};
ro.displayName = "Presence";
function bu(e) {
  const [t, r] = V.useState(), s = V.useRef(null), o = V.useRef(e), c = V.useRef("none"), f = e ? "mounted" : "unmounted", [l, i] = vu(f, {
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
  return V.useEffect(() => {
    const a = Or(s.current);
    c.current = l === "mounted" ? a : "none";
  }, [l]), gt(() => {
    const a = s.current, u = o.current;
    if (u !== e) {
      const d = c.current, x = Or(a);
      e ? i("MOUNT") : x === "none" || (a == null ? void 0 : a.display) === "none" ? i("UNMOUNT") : i(u && d !== x ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, i]), gt(() => {
    if (t) {
      let a;
      const u = t.ownerDocument.defaultView ?? window, m = (x) => {
        const g = Or(s.current).includes(x.animationName);
        if (x.target === t && g && (i("ANIMATION_END"), !o.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", a = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, d = (x) => {
        x.target === t && (c.current = Or(s.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        u.clearTimeout(a), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      i("ANIMATION_END");
  }, [t, i]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: V.useCallback((a) => {
      s.current = a ? getComputedStyle(a) : null, r(a);
    }, [])
  };
}
function Or(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function wu(e) {
  var s, o;
  let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Cu = V[" useInsertionEffect ".trim().toString()] || gt;
function Eu({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: s
}) {
  const [o, c, f] = ju({
    defaultProp: t,
    onChange: r
  }), l = e !== void 0, i = l ? e : o;
  {
    const u = V.useRef(e !== void 0);
    V.useEffect(() => {
      const m = u.current;
      m !== l && console.warn(
        `${s} is changing from ${m ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, s]);
  }
  const a = V.useCallback(
    (u) => {
      var m;
      if (l) {
        const d = Au(u) ? u(e) : u;
        d !== e && ((m = f.current) == null || m.call(f, d));
      } else
        c(u);
    },
    [l, e, c, f]
  );
  return [i, a];
}
function ju({
  defaultProp: e,
  onChange: t
}) {
  const [r, s] = V.useState(e), o = V.useRef(r), c = V.useRef(t);
  return Cu(() => {
    c.current = t;
  }, [t]), V.useEffect(() => {
    var f;
    o.current !== r && ((f = c.current) == null || f.call(c, r), o.current = r);
  }, [r, o]), [r, s, c];
}
function Au(e) {
  return typeof e == "function";
}
var Nu = Object.freeze({
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
}), Du = "VisuallyHidden", qi = V.forwardRef(
  (e, t) => /* @__PURE__ */ n.jsx(
    wt.span,
    {
      ...e,
      ref: t,
      style: { ...Nu, ...e.style }
    }
  )
);
qi.displayName = Du;
var ku = qi, [fn, th] = pi("Tooltip", [
  Ri
]), xn = Ri(), Wi = "TooltipProvider", _u = 700, Fs = "tooltip.open", [Su, no] = fn(Wi), Vi = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = _u,
    skipDelayDuration: s = 300,
    disableHoverableContent: o = !1,
    children: c
  } = e, f = V.useRef(!0), l = V.useRef(!1), i = V.useRef(0);
  return V.useEffect(() => {
    const a = i.current;
    return () => window.clearTimeout(a);
  }, []), /* @__PURE__ */ n.jsx(
    Su,
    {
      scope: t,
      isOpenDelayedRef: f,
      delayDuration: r,
      onOpen: V.useCallback(() => {
        window.clearTimeout(i.current), f.current = !1;
      }, []),
      onClose: V.useCallback(() => {
        window.clearTimeout(i.current), i.current = window.setTimeout(
          () => f.current = !0,
          s
        );
      }, [s]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: V.useCallback((a) => {
        l.current = a;
      }, []),
      disableHoverableContent: o,
      children: c
    }
  );
};
Vi.displayName = Wi;
var xr = "Tooltip", [Bu, Cr] = fn(xr), Ui = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: s,
    defaultOpen: o,
    onOpenChange: c,
    disableHoverableContent: f,
    delayDuration: l
  } = e, i = no(xr, e.__scopeTooltip), a = xn(t), [u, m] = V.useState(null), d = Kc(), x = V.useRef(0), p = f ?? i.disableHoverableContent, g = l ?? i.delayDuration, v = V.useRef(!1), [C, b] = Eu({
    prop: s,
    defaultProp: o ?? !1,
    onChange: (j) => {
      j ? (i.onOpen(), document.dispatchEvent(new CustomEvent(Fs))) : i.onClose(), c == null || c(j);
    },
    caller: xr
  }), y = V.useMemo(() => C ? v.current ? "delayed-open" : "instant-open" : "closed", [C]), h = V.useCallback(() => {
    window.clearTimeout(x.current), x.current = 0, v.current = !1, b(!0);
  }, [b]), w = V.useCallback(() => {
    window.clearTimeout(x.current), x.current = 0, b(!1);
  }, [b]), A = V.useCallback(() => {
    window.clearTimeout(x.current), x.current = window.setTimeout(() => {
      v.current = !0, b(!0), x.current = 0;
    }, g);
  }, [g, b]);
  return V.useEffect(() => () => {
    x.current && (window.clearTimeout(x.current), x.current = 0);
  }, []), /* @__PURE__ */ n.jsx(hu, { ...a, children: /* @__PURE__ */ n.jsx(
    Bu,
    {
      scope: t,
      contentId: d,
      open: C,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: m,
      onTriggerEnter: V.useCallback(() => {
        i.isOpenDelayedRef.current ? A() : h();
      }, [i.isOpenDelayedRef, A, h]),
      onTriggerLeave: V.useCallback(() => {
        p ? w() : (window.clearTimeout(x.current), x.current = 0);
      }, [w, p]),
      onOpen: h,
      onClose: w,
      disableHoverableContent: p,
      children: r
    }
  ) });
};
Ui.displayName = xr;
var Rs = "TooltipTrigger", Qi = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...s } = e, o = Cr(Rs, r), c = no(Rs, r), f = xn(r), l = V.useRef(null), i = Pt(t, l, o.onTriggerChange), a = V.useRef(!1), u = V.useRef(!1), m = V.useCallback(() => a.current = !1, []);
    return V.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ n.jsx(pu, { asChild: !0, ...f, children: /* @__PURE__ */ n.jsx(
      wt.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...s,
        ref: i,
        onPointerMove: ft(e.onPointerMove, (d) => {
          d.pointerType !== "touch" && !u.current && !c.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: ft(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: ft(e.onPointerDown, () => {
          o.open && o.onClose(), a.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: ft(e.onFocus, () => {
          a.current || o.onOpen();
        }),
        onBlur: ft(e.onBlur, o.onClose),
        onClick: ft(e.onClick, o.onClose)
      }
    ) });
  }
);
Qi.displayName = Rs;
var so = "TooltipPortal", [Fu, Ru] = fn(so, {
  forceMount: void 0
}), Ki = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: s, container: o } = e, c = Cr(so, t);
  return /* @__PURE__ */ n.jsx(Fu, { scope: t, forceMount: r, children: /* @__PURE__ */ n.jsx(ro, { present: r || c.open, children: /* @__PURE__ */ n.jsx(Hi, { asChild: !0, container: o, children: s }) }) });
};
Ki.displayName = so;
var Qt = "TooltipContent", Gi = V.forwardRef(
  (e, t) => {
    const r = Ru(Qt, e.__scopeTooltip), { forceMount: s = r.forceMount, side: o = "top", ...c } = e, f = Cr(Qt, e.__scopeTooltip);
    return /* @__PURE__ */ n.jsx(ro, { present: s || f.open, children: f.disableHoverableContent ? /* @__PURE__ */ n.jsx(Yi, { side: o, ...c, ref: t }) : /* @__PURE__ */ n.jsx(Ou, { side: o, ...c, ref: t }) });
  }
), Ou = V.forwardRef((e, t) => {
  const r = Cr(Qt, e.__scopeTooltip), s = no(Qt, e.__scopeTooltip), o = V.useRef(null), c = Pt(t, o), [f, l] = V.useState(null), { trigger: i, onClose: a } = r, u = o.current, { onPointerInTransitChange: m } = s, d = V.useCallback(() => {
    l(null), m(!1);
  }, [m]), x = V.useCallback(
    (p, g) => {
      const v = p.currentTarget, C = { x: p.clientX, y: p.clientY }, b = Lu(C, v.getBoundingClientRect()), y = Iu(C, b), h = zu(g.getBoundingClientRect()), w = Hu([...y, ...h]);
      l(w), m(!0);
    },
    [m]
  );
  return V.useEffect(() => () => d(), [d]), V.useEffect(() => {
    if (i && u) {
      const p = (v) => x(v, u), g = (v) => x(v, i);
      return i.addEventListener("pointerleave", p), u.addEventListener("pointerleave", g), () => {
        i.removeEventListener("pointerleave", p), u.removeEventListener("pointerleave", g);
      };
    }
  }, [i, u, x, d]), V.useEffect(() => {
    if (f) {
      const p = (g) => {
        const v = g.target, C = { x: g.clientX, y: g.clientY }, b = (i == null ? void 0 : i.contains(v)) || (u == null ? void 0 : u.contains(v)), y = !$u(C, f);
        b ? d() : y && (d(), a());
      };
      return document.addEventListener("pointermove", p), () => document.removeEventListener("pointermove", p);
    }
  }, [i, u, f, a, d]), /* @__PURE__ */ n.jsx(Yi, { ...e, ref: c });
}), [Pu, Tu] = fn(xr, { isInside: !1 }), Mu = /* @__PURE__ */ Fc("TooltipContent"), Yi = V.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: s,
      "aria-label": o,
      onEscapeKeyDown: c,
      onPointerDownOutside: f,
      ...l
    } = e, i = Cr(Qt, r), a = xn(r), { onClose: u } = i;
    return V.useEffect(() => (document.addEventListener(Fs, u), () => document.removeEventListener(Fs, u)), [u]), V.useEffect(() => {
      if (i.trigger) {
        const m = (d) => {
          const x = d.target;
          x != null && x.contains(i.trigger) && u();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [i.trigger, u]), /* @__PURE__ */ n.jsx(
      yi,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ n.jsxs(
          mu,
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
              /* @__PURE__ */ n.jsx(Mu, { children: s }),
              /* @__PURE__ */ n.jsx(Pu, { scope: r, isInside: !0, children: /* @__PURE__ */ n.jsx(ku, { id: i.contentId, role: "tooltip", children: o || s }) })
            ]
          }
        )
      }
    );
  }
);
Gi.displayName = Qt;
var Xi = "TooltipArrow", Zi = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...s } = e, o = xn(r);
    return Tu(
      Xi,
      r
    ).isInside ? null : /* @__PURE__ */ n.jsx(gu, { ...o, ...s, ref: t });
  }
);
Zi.displayName = Xi;
function Lu(e, t) {
  const r = Math.abs(t.top - e.y), s = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), c = Math.abs(t.left - e.x);
  switch (Math.min(r, s, o, c)) {
    case c:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case s:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Iu(e, t, r = 5) {
  const s = [];
  switch (t) {
    case "top":
      s.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      s.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      s.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      s.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return s;
}
function zu(e) {
  const { top: t, right: r, bottom: s, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: s },
    { x: o, y: s }
  ];
}
function $u(e, t) {
  const { x: r, y: s } = e;
  let o = !1;
  for (let c = 0, f = t.length - 1; c < t.length; f = c++) {
    const l = t[c], i = t[f], a = l.x, u = l.y, m = i.x, d = i.y;
    u > s != d > s && r < (m - a) * (s - u) / (d - u) + a && (o = !o);
  }
  return o;
}
function Hu(e) {
  const t = e.slice();
  return t.sort((r, s) => r.x < s.x ? -1 : r.x > s.x ? 1 : r.y < s.y ? -1 : r.y > s.y ? 1 : 0), qu(t);
}
function qu(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    for (; t.length >= 2; ) {
      const c = t[t.length - 1], f = t[t.length - 2];
      if ((c.x - f.x) * (o.y - f.y) >= (c.y - f.y) * (o.x - f.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let s = e.length - 1; s >= 0; s--) {
    const o = e[s];
    for (; r.length >= 2; ) {
      const c = r[r.length - 1], f = r[r.length - 2];
      if ((c.x - f.x) * (o.y - f.y) >= (c.y - f.y) * (o.x - f.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var Wu = Vi, Vu = Ui, Uu = Qi, Qu = Ki, Ku = Gi, Gu = Zi;
const Ji = [
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
], Sn = [
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
], Yu = ({ emailLabels: e }) => {
  const t = ke(null), [r, s] = Z(e.length), o = Ji.filter(
    (i) => e.includes(i.id)
  );
  Ae(() => {
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
    s(d > 0 ? d : 1);
  }, [o]);
  const c = r < o.length, f = c ? o.slice(0, r - 1) : o, l = c ? o.slice(r - 1) : [];
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "flex items-center gap-1 mt-2 overflow-hidden",
      ref: t,
      style: { whiteSpace: "nowrap" },
      children: [
        f.map((i) => /* @__PURE__ */ n.jsxs(
          "span",
          {
            className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
            style: {
              backgroundColor: `${i.color}15`,
              color: i.color,
              border: `1px solid ${i.color}30`
            },
            children: [
              /* @__PURE__ */ n.jsx(
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
        c && l.length > 0 && /* @__PURE__ */ n.jsx(Wu, { children: /* @__PURE__ */ n.jsxs(Vu, { children: [
          /* @__PURE__ */ n.jsx(Uu, { asChild: !0, children: /* @__PURE__ */ n.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 cursor-pointer", children: [
            "+",
            l.length,
            " more"
          ] }) }),
          /* @__PURE__ */ n.jsx(Qu, { children: /* @__PURE__ */ n.jsxs(
            Ku,
            {
              side: "top",
              className: "bg-white p-2 rounded shadow text-xs text-gray-700 z-50",
              children: [
                /* @__PURE__ */ n.jsx("ul", { children: l.map((i) => /* @__PURE__ */ n.jsxs("li", { className: "mb-1 flex items-center", children: [
                  /* @__PURE__ */ n.jsx(
                    "span",
                    {
                      className: "w-2 h-2 rounded-full mr-2 inline-block",
                      style: { backgroundColor: i.color }
                    }
                  ),
                  i.name
                ] }, i.id)) }),
                /* @__PURE__ */ n.jsx(Gu, { className: "fill-white" })
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
}, Xu = ({
  emails: e,
  selectedEmailId: t,
  onEmailSelect: r,
  onStarToggle: s,
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
  onUndo: g
}) => {
  var T, $;
  Z(((T = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : T.to) > 0 ? ($ = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : $.to[0] : void 0);
  const [v, C] = Z(320), [b, y] = Z(!1), [h, w] = Z(!1), A = ke(null), j = ke(0), S = ke(320), D = (R, P) => {
    P.stopPropagation(), r(R, !0);
  }, E = (R) => {
    const P = new Date(R), ee = ((/* @__PURE__ */ new Date()).getTime() - P.getTime()) / (1e3 * 60 * 60);
    return ee < 24 ? P.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : ee < 168 ? P.toLocaleDateString("en-US", { weekday: "short" }) : P.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, N = (R) => {
    const P = R.toLowerCase();
    return P.includes("get") ? {
      text: "Get Info",
      icon: ri,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600"
    } : P.includes("approve") || P.includes("success") || P.includes("confirmed") ? {
      text: "Approved",
      icon: ni,
      color: "bg-green-100 text-green-800",
      iconColor: "text-green-600"
    } : P.includes("cancel") || P.includes("rejected") || P.includes("failed") ? {
      text: "Cancelled",
      icon: xi,
      color: "bg-red-100 text-red-800",
      iconColor: "text-red-600"
    } : P.includes("ticket") || P.includes("booking") || P.includes("reservation") ? {
      text: "Ticketing",
      icon: ui,
      color: "bg-yellow-100 text-yellow-800",
      iconColor: "text-yellow-600"
    } : P.includes("feedback") || P.includes("report") ? {
      text: "Feedback",
      icon: ic,
      color: "bg-orange-100 text-orange-800",
      iconColor: "text-orange-600"
    } : {
      text: "new",
      icon: Vr,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600"
    };
  }, k = (R) => {
    switch (R) {
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
        if (R.startsWith("custom-label-")) {
          const P = R.replace("custom-label-", ""), G = l.find((ee) => ee.id === P);
          return (G == null ? void 0 : G.name) || "Unknown Label";
        }
        return "Inbox";
    }
  }, _ = (R) => {
    switch (R) {
      case "inbox":
        return ii;
      case "sent":
        return li;
      case "drafts":
        return Us;
      case "starred":
        return ur;
      case "snoozed":
        return an;
      default:
        return Qr;
    }
  }, B = (R) => R.labels ? R.labels.map((P) => l.find((G) => G.id === P)).filter(Boolean) : [], O = ({ section: R }) => {
    const P = _(R), G = k(R);
    return /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col items-center justify-center h-96 text-center p-8", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ n.jsx(P, { className: "w-10 h-10 text-gray-400" }) }),
      /* @__PURE__ */ n.jsxs("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: [
        "No emails in ",
        G
      ] }),
      /* @__PURE__ */ n.jsx("p", { className: "text-gray-500 max-w-sm", children: R === "starred" ? "Star important conversations to find them quickly here." : R === "snoozed" ? "Snoozed conversations will appear here when it's time to deal with them." : R.startsWith("custom-label-") || R.startsWith("label-") ? `Conversations with the "${G}" label will appear here.` : "No conversations available yet." })
    ] });
  }, z = Array.from(c), H = z.length > 0, I = nt(
    (R) => {
      R.preventDefault(), y(!0), j.current = R.clientX, S.current = v, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    },
    [v]
  ), L = nt(
    (R) => {
      if (!b) return;
      R.preventDefault();
      const P = R.clientX - j.current, G = S.current + P, ee = Math.max(240, Math.min(G, 800));
      requestAnimationFrame(() => {
        C(ee);
      });
    },
    [b]
  ), Y = nt(() => {
    y(!1), document.body.style.cursor = "", document.body.style.userSelect = "";
  }, []);
  return Vt.useEffect(() => (b && (document.addEventListener("mousemove", L, { passive: !1 }), document.addEventListener("mouseup", Y)), () => {
    document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", Y), document.body.style.cursor = "", document.body.style.userSelect = "";
  }), [b, L, Y]), e.length === 0 ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: A,
      style: { width: `${v}px`, minWidth: "240px", maxWidth: "800px", height: "100%" },
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: I,
            children: /* @__PURE__ */ n.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ n.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: k(f) }) }),
        /* @__PURE__ */ n.jsx(O, { section: f })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: A,
      style: { width: `${v}px`, minWidth: "240px", maxWidth: "800px", height: "100%" },
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: I,
            children: /* @__PURE__ */ n.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: () => {
                  c.size === e.length ? p() : x();
                },
                className: "text-gray-400 hover:text-gray-600 transition-colors",
                title: c.size === e.length ? "Unselect all" : "Select all",
                children: c.size === e.length && e.length > 0 ? /* @__PURE__ */ n.jsx(Co, { className: "w-4 h-4 text-blue-600" }) : c.size > 0 ? /* @__PURE__ */ n.jsx(Dn, { className: "w-4 h-4 text-blue-600 fill-blue-100" }) : /* @__PURE__ */ n.jsx(Dn, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ n.jsx("div", { style: { height: "100%" }, children: /* @__PURE__ */ n.jsxs("h2", { className: "text-lg font-semibold text-gray-900", children: [
              k(f),
              ` (${e.filter((R) => !R.is_read).length}/${e.length})`
            ] }) })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            H && /* @__PURE__ */ n.jsx(
              kc,
              {
                emailIds: z,
                currentLabels: [],
                availableLabels: l,
                onLabelsChange: (R, P) => {
                  i(R, P), setTimeout(() => {
                    p();
                  }, 100);
                },
                onCreateLabel: a
              }
            ),
            /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: () => w(!h),
                  className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                  title: "More actions",
                  children: /* @__PURE__ */ n.jsx(ci, { className: "w-4 h-4" })
                }
              ),
              h && /* @__PURE__ */ n.jsx("div", { className: "absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "p-1", children: [
                H ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => {
                        u(z, !0), w(!1), setTimeout(() => p(), 100);
                      },
                      className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                      children: "Mark as Read"
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => {
                        u(z, !1), w(!1), setTimeout(() => p(), 100);
                      },
                      className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                      children: "Mark as Unread"
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => {
                        m(z), w(!1), setTimeout(() => p(), 100);
                      },
                      className: "w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors",
                      children: "Delete"
                    }
                  )
                ] }) : /* @__PURE__ */ n.jsx("div", { className: "px-3 py-2 text-sm text-gray-500", children: "Select emails to see actions" }),
                g && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                  /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-100 my-1" }),
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => {
                        g(), w(!1);
                      },
                      className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                      children: "Undo Last Action"
                    }
                  )
                ] })
              ] }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsx("div", { className: "divide-y divide-gray-100 overflow-y-auto max-h-[calc(100vh-8rem)] thin-scrollbar", children: e.map((R) => {
          const P = t === R.message_id, G = c.has(R.message_id), ee = B(R);
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: `
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${P ? "bg-blue-50 border-r-2 border-blue-500" : ""}
                ${R.is_read ? "" : "bg-blue-25"}
              `,
              onClick: () => r(R),
              onDoubleClick: (ie) => D(R, ie),
              title: "Double-click to open in full-page view",
              style: {
                ...P ? { borderRight: "1px solid blue" } : {}
              },
              children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    onClick: (ie) => {
                      ie.stopPropagation(), o(R.message_id);
                    },
                    className: "mt-1 text-gray-400 hover:text-gray-600 transition-colors",
                    children: G ? /* @__PURE__ */ n.jsx(Co, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ n.jsx(Dn, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    onClick: (ie) => {
                      ie.stopPropagation(), s(R.message_id);
                    },
                    className: "mt-1 transition-colors",
                    children: /* @__PURE__ */ n.jsx(
                      ur,
                      {
                        className: `w-4 h-4 ${R.is_starred ? "text-yellow-500 fill-yellow-500" : "text-gray-400 hover:text-yellow-500"}`
                      }
                    )
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2 min-w-0", children: [
                      /* @__PURE__ */ n.jsx(
                        "p",
                        {
                          className: `
                        text-sm mt-1
                        ${R.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                          children: R.subject
                        }
                      ),
                      (R == null ? void 0 : R.intent) && /* @__PURE__ */ n.jsxs(
                        "div",
                        {
                          className: `
                          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                          ${N(R.intent).color}
                        `,
                          children: [
                            Vt.createElement(
                              N(R.intent).icon,
                              {
                                className: `w-3 h-3 mr-1 ${N(R.intent).iconColor}`
                              }
                            ),
                            N(R.intent).text
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500 ml-2 flex-shrink-0", children: E(R.created_at) })
                  ] }),
                  /* @__PURE__ */ n.jsx(
                    "p",
                    {
                      className: `
                    text-sm mt-1 truncate
                    ${R.is_read ? "text-gray-400" : "text-gray-700 font-medium"}
                  `,
                      children: R.snippet
                    }
                  ),
                  ee.length > 0 && /* @__PURE__ */ n.jsx(Yu, { emailLabels: R == null ? void 0 : R.labels })
                ] })
              ] })
            },
            R.message_id
          );
        }) })
      ]
    }
  );
}, Zu = ({
  isOpen: e,
  onClose: t,
  triggerRef: r
}) => {
  const s = ke(null), [o, c] = Z({ top: 0, left: 0 });
  return Ae(() => {
    if (e && r.current && s.current) {
      const f = r.current.getBoundingClientRect(), l = s.current.getBoundingClientRect(), i = f.bottom + 8, a = f.left, u = window.innerWidth - l.width - 16, m = Math.min(a, u);
      c({ top: i, left: m });
    }
  }, [e, r]), Ae(() => {
    const f = (i) => {
      s.current && !s.current.contains(i.target) && r.current && !r.current.contains(i.target) && t();
    }, l = (i) => {
      i.key === "Escape" && t();
    };
    if (e)
      return document.addEventListener("mousedown", f), document.addEventListener("keydown", l), () => {
        document.removeEventListener("mousedown", f), document.removeEventListener("keydown", l);
      };
  }, [e, t, r]), e ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 z-40" }),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: s,
        className: "fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80",
        style: {
          top: `${o.top}px`,
          left: `${o.left}px`
        },
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "absolute -top-2 left-9 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45" }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Observation Overview" }),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: t,
                className: "text-gray-400 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ n.jsx(Ve, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(hc, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Airline:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900", children: "Delta Airlines" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(ui, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Ticket Type:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900", children: "Round Trip" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(Us, { className: "w-4 h-4 text-purple-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "PNR:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900 font-mono", children: "ABC123XYZ" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(xi, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Cancellation:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900", children: "Allowed" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(ni, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Status:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-green-800 bg-green-100 px-2 py-1 rounded-full", children: "Confirmed" })
            ] })
          ] })
        ]
      }
    )
  ] }) : null;
};
function Ie(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Ju = typeof Symbol == "function" && Symbol.observable || "@@observable", $o = Ju, Bn = () => Math.random().toString(36).substring(7).split("").join("."), ed = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Bn()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Bn()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bn()}`
}, _t = ed;
function it(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function td(e) {
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
  if (sd(e))
    return "date";
  if (nd(e))
    return "error";
  const r = rd(e);
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
function rd(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function nd(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function sd(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function mt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = td(e)), t;
}
function e0(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ie(2) : `Expected the root reducer to be a function. Instead, received: '${mt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ie(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(1) : `Expected the enhancer to be a function. Instead, received: '${mt(r)}'`);
    return r(e0)(e, t);
  }
  let s = e, o = t, c = /* @__PURE__ */ new Map(), f = c, l = 0, i = !1;
  function a() {
    f === c && (f = /* @__PURE__ */ new Map(), c.forEach((v, C) => {
      f.set(C, v);
    }));
  }
  function u() {
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? Ie(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function m(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(4) : `Expected the listener to be a function. Instead, received: '${mt(v)}'`);
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? Ie(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let C = !0;
    a();
    const b = l++;
    return f.set(b, v), function() {
      if (C) {
        if (i)
          throw new Error(process.env.NODE_ENV === "production" ? Ie(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        C = !1, a(), f.delete(b), c = null;
      }
    };
  }
  function d(v) {
    if (!it(v))
      throw new Error(process.env.NODE_ENV === "production" ? Ie(7) : `Actions must be plain objects. Instead, the actual type was: '${mt(v)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof v.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof v.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(17) : `Action "type" property must be a string. Instead, the actual type was: '${mt(v.type)}'. Value was: '${v.type}' (stringified)`);
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? Ie(9) : "Reducers may not dispatch actions.");
    try {
      i = !0, o = s(o, v);
    } finally {
      i = !1;
    }
    return (c = f).forEach((b) => {
      b();
    }), v;
  }
  function x(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(10) : `Expected the nextReducer to be a function. Instead, received: '${mt(v)}`);
    s = v, d({
      type: _t.REPLACE
    });
  }
  function p() {
    const v = m;
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
          throw new Error(process.env.NODE_ENV === "production" ? Ie(11) : `Expected the observer to be an object. Instead, received: '${mt(C)}'`);
        function b() {
          const h = C;
          h.next && h.next(u());
        }
        return b(), {
          unsubscribe: v(b)
        };
      },
      [$o]() {
        return this;
      }
    };
  }
  return d({
    type: _t.INIT
  }), {
    dispatch: d,
    subscribe: m,
    getState: u,
    replaceReducer: x,
    [$o]: p
  };
}
function Ho(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function od(e, t, r, s) {
  const o = Object.keys(t), c = r && r.type === _t.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!it(e))
    return `The ${c} has unexpected type of "${mt(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const f = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !s[l]);
  if (f.forEach((l) => {
    s[l] = !0;
  }), !(r && r.type === _t.REPLACE) && f.length > 0)
    return `Unexpected ${f.length > 1 ? "keys" : "key"} "${f.join('", "')}" found in ${c}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function ad(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: _t.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: _t.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Ie(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${_t.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function t0(e) {
  const t = Object.keys(e), r = {};
  for (let f = 0; f < t.length; f++) {
    const l = t[f];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && Ho(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const s = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let c;
  try {
    ad(r);
  } catch (f) {
    c = f;
  }
  return function(l = {}, i) {
    if (c)
      throw c;
    if (process.env.NODE_ENV !== "production") {
      const m = od(l, r, i, o);
      m && Ho(m);
    }
    let a = !1;
    const u = {};
    for (let m = 0; m < s.length; m++) {
      const d = s[m], x = r[d], p = l[d], g = x(p, i);
      if (typeof g > "u") {
        const v = i && i.type;
        throw new Error(process.env.NODE_ENV === "production" ? Ie(14) : `When called with an action of type ${v ? `"${String(v)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[d] = g, a = a || g !== p;
    }
    return a = a || s.length !== Object.keys(l).length, a ? u : l;
  };
}
function Zr(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...s) => t(r(...s)));
}
function id(...e) {
  return (t) => (r, s) => {
    const o = t(r, s);
    let c = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Ie(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const f = {
      getState: o.getState,
      dispatch: (i, ...a) => c(i, ...a)
    }, l = e.map((i) => i(f));
    return c = Zr(...l)(o.dispatch), {
      ...o,
      dispatch: c
    };
  };
}
function oo(e) {
  return it(e) && "type" in e && typeof e.type == "string";
}
var ao = Symbol.for("immer-nothing"), ir = Symbol.for("immer-draftable"), qe = Symbol.for("immer-state"), r0 = process.env.NODE_ENV !== "production" ? [
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
function Te(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = r0[e], s = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${s}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Bt = Object.getPrototypeOf;
function ct(e) {
  return !!e && !!e[qe];
}
function rt(e) {
  var t;
  return e ? n0(e) || Array.isArray(e) || !!e[ir] || !!((t = e.constructor) != null && t[ir]) || Er(e) || jr(e) : !1;
}
var cd = Object.prototype.constructor.toString();
function n0(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Bt(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === cd;
}
function ld(e) {
  return ct(e) || Te(15, e), e[qe].base_;
}
function hr(e, t) {
  Ft(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, s) => t(s, r, e));
}
function Ft(e) {
  const t = e[qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : Er(e) ? 2 : jr(e) ? 3 : 0;
}
function pr(e, t) {
  return Ft(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Fn(e, t) {
  return Ft(e) === 2 ? e.get(t) : e[t];
}
function s0(e, t, r) {
  const s = Ft(e);
  s === 2 ? e.set(t, r) : s === 3 ? e.add(r) : e[t] = r;
}
function ud(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Er(e) {
  return e instanceof Map;
}
function jr(e) {
  return e instanceof Set;
}
function Dt(e) {
  return e.copy_ || e.base_;
}
function Os(e, t) {
  if (Er(e))
    return new Map(e);
  if (jr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = n0(e);
  if (t === !0 || t === "class_only" && !r) {
    const s = Object.getOwnPropertyDescriptors(e);
    delete s[qe];
    let o = Reflect.ownKeys(s);
    for (let c = 0; c < o.length; c++) {
      const f = o[c], l = s[f];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (s[f] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[f]
      });
    }
    return Object.create(Bt(e), s);
  } else {
    const s = Bt(e);
    if (s !== null && r)
      return { ...e };
    const o = Object.create(s);
    return Object.assign(o, e);
  }
}
function io(e, t = !1) {
  return hn(e) || ct(e) || !rt(e) || (Ft(e) > 1 && (e.set = e.add = e.clear = e.delete = dd), Object.freeze(e), t && Object.entries(e).forEach(([r, s]) => io(s, !0))), e;
}
function dd() {
  Te(2);
}
function hn(e) {
  return Object.isFrozen(e);
}
var Ps = {};
function Rt(e) {
  const t = Ps[e];
  return t || Te(0, e), t;
}
function fd(e, t) {
  Ps[e] || (Ps[e] = t);
}
var mr;
function o0() {
  return mr;
}
function xd(e, t) {
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
function qo(e, t) {
  t && (Rt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ts(e) {
  Ms(e), e.drafts_.forEach(hd), e.drafts_ = null;
}
function Ms(e) {
  e === mr && (mr = e.parent_);
}
function Wo(e) {
  return mr = xd(mr, e);
}
function hd(e) {
  const t = e[qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Vo(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[qe].modified_ && (Ts(t), Te(4)), rt(e) && (e = Jr(t, e), t.parent_ || en(t, e)), t.patches_ && Rt("Patches").generateReplacementPatches_(
    r[qe].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Jr(t, r, []), Ts(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ao ? e : void 0;
}
function Jr(e, t, r) {
  if (hn(t))
    return t;
  const s = t[qe];
  if (!s)
    return hr(
      t,
      (o, c) => Uo(e, s, t, o, c, r)
    ), t;
  if (s.scope_ !== e)
    return t;
  if (!s.modified_)
    return en(e, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const o = s.copy_;
    let c = o, f = !1;
    s.type_ === 3 && (c = new Set(o), o.clear(), f = !0), hr(
      c,
      (l, i) => Uo(e, s, o, l, i, r, f)
    ), en(e, o, !1), r && e.patches_ && Rt("Patches").generatePatches_(
      s,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return s.copy_;
}
function Uo(e, t, r, s, o, c, f) {
  if (process.env.NODE_ENV !== "production" && o === r && Te(5), ct(o)) {
    const l = c && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !pr(t.assigned_, s) ? c.concat(s) : void 0, i = Jr(e, o, l);
    if (s0(r, s, i), ct(i))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else f && r.add(o);
  if (rt(o) && !hn(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Jr(e, o), (!t || !t.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(r, s) && en(e, o);
  }
}
function en(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && io(t, r);
}
function pd(e, t) {
  const r = Array.isArray(e), s = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : o0(),
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
  let o = s, c = co;
  r && (o = [s], c = gr);
  const { revoke: f, proxy: l } = Proxy.revocable(o, c);
  return s.draft_ = l, s.revoke_ = f, l;
}
var co = {
  get(e, t) {
    if (t === qe)
      return e;
    const r = Dt(e);
    if (!pr(r, t))
      return md(e, r, t);
    const s = r[t];
    return e.finalized_ || !rt(s) ? s : s === Rn(e.base_, t) ? (On(e), e.copy_[t] = Is(s, e)) : s;
  },
  has(e, t) {
    return t in Dt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Dt(e));
  },
  set(e, t, r) {
    const s = a0(Dt(e), t);
    if (s != null && s.set)
      return s.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Rn(Dt(e), t), c = o == null ? void 0 : o[qe];
      if (c && c.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (ud(r, o) && (r !== void 0 || pr(e.base_, t)))
        return !0;
      On(e), Ls(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Rn(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, On(e), Ls(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Dt(e), s = Reflect.getOwnPropertyDescriptor(r, t);
    return s && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: s.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Te(11);
  },
  getPrototypeOf(e) {
    return Bt(e.base_);
  },
  setPrototypeOf() {
    Te(12);
  }
}, gr = {};
hr(co, (e, t) => {
  gr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
gr.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Te(13), gr.set.call(this, e, t, void 0);
};
gr.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Te(14), co.set.call(this, e[0], t, r, e[0]);
};
function Rn(e, t) {
  const r = e[qe];
  return (r ? Dt(r) : e)[t];
}
function md(e, t, r) {
  var o;
  const s = a0(t, r);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = s.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function a0(e, t) {
  if (!(t in e))
    return;
  let r = Bt(e);
  for (; r; ) {
    const s = Object.getOwnPropertyDescriptor(r, t);
    if (s)
      return s;
    r = Bt(r);
  }
}
function Ls(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ls(e.parent_));
}
function On(e) {
  e.copy_ || (e.copy_ = Os(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var gd = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, s) => {
      if (typeof t == "function" && typeof r != "function") {
        const c = r;
        r = t;
        const f = this;
        return function(i = c, ...a) {
          return f.produce(i, (u) => r.call(this, u, ...a));
        };
      }
      typeof r != "function" && Te(6), s !== void 0 && typeof s != "function" && Te(7);
      let o;
      if (rt(t)) {
        const c = Wo(this), f = Is(t, void 0);
        let l = !0;
        try {
          o = r(f), l = !1;
        } finally {
          l ? Ts(c) : Ms(c);
        }
        return qo(c, s), Vo(o, c);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === ao && (o = void 0), this.autoFreeze_ && io(o, !0), s) {
          const c = [], f = [];
          Rt("Patches").generateReplacementPatches_(t, o, c, f), s(c, f);
        }
        return o;
      } else
        Te(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (f, ...l) => this.produceWithPatches(f, (i) => t(i, ...l));
      let s, o;
      return [this.produce(t, r, (f, l) => {
        s = f, o = l;
      }), s, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    rt(e) || Te(8), ct(e) && (e = yd(e));
    const t = Wo(this), r = Is(e, void 0);
    return r[qe].isManual_ = !0, Ms(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[qe];
    (!r || !r.isManual_) && Te(9);
    const { scope_: s } = r;
    return qo(s, t), Vo(void 0, s);
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
    const s = Rt("Patches").applyPatches_;
    return ct(e) ? s(e, t) : this.produce(
      e,
      (o) => s(o, t)
    );
  }
};
function Is(e, t) {
  const r = Er(e) ? Rt("MapSet").proxyMap_(e, t) : jr(e) ? Rt("MapSet").proxySet_(e, t) : pd(e, t);
  return (t ? t.scope_ : o0()).drafts_.push(r), r;
}
function yd(e) {
  return ct(e) || Te(10, e), i0(e);
}
function i0(e) {
  if (!rt(e) || hn(e))
    return e;
  const t = e[qe];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Os(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Os(e, !0);
  return hr(r, (s, o) => {
    s0(r, s, i0(o));
  }), t && (t.finalized_ = !1), r;
}
function vd() {
  process.env.NODE_ENV !== "production" && r0.push(
    'Sets cannot have "replace" patches.',
    function(d) {
      return "Unsupported patch operation: " + d;
    },
    function(d) {
      return "Cannot apply patch, path doesn't resolve: " + d;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", r = "add", s = "remove";
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
    let { base_: v, assigned_: C } = d, b = d.copy_;
    b.length < v.length && ([v, b] = [b, v], [p, g] = [g, p]);
    for (let y = 0; y < v.length; y++)
      if (C[y] && b[y] !== v[y]) {
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
          value: m(v[y])
        });
      }
    for (let y = v.length; y < b.length; y++) {
      const h = x.concat([y]);
      p.push({
        op: r,
        path: h,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(b[y])
      });
    }
    for (let y = b.length - 1; v.length <= y; --y) {
      const h = x.concat([y]);
      g.push({
        op: s,
        path: h
      });
    }
  }
  function f(d, x, p, g) {
    const { base_: v, copy_: C } = d;
    hr(d.assigned_, (b, y) => {
      const h = Fn(v, b), w = Fn(C, b), A = y ? pr(v, b) ? t : r : s;
      if (h === w && A === t)
        return;
      const j = x.concat(b);
      p.push(A === s ? { op: A, path: j } : { op: A, path: j, value: w }), g.push(
        A === r ? { op: s, path: j } : A === s ? { op: r, path: j, value: m(h) } : { op: t, path: j, value: m(h) }
      );
    });
  }
  function l(d, x, p, g) {
    let { base_: v, copy_: C } = d, b = 0;
    v.forEach((y) => {
      if (!C.has(y)) {
        const h = x.concat([b]);
        p.push({
          op: s,
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
      if (!v.has(y)) {
        const h = x.concat([b]);
        p.push({
          op: r,
          path: h,
          value: y
        }), g.unshift({
          op: s,
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
      value: x === ao ? void 0 : x
    }), g.push({
      op: t,
      path: [],
      value: d
    });
  }
  function a(d, x) {
    return x.forEach((p) => {
      const { path: g, op: v } = p;
      let C = d;
      for (let w = 0; w < g.length - 1; w++) {
        const A = Ft(C);
        let j = g[w];
        typeof j != "string" && typeof j != "number" && (j = "" + j), (A === 0 || A === 1) && (j === "__proto__" || j === "constructor") && Te(19), typeof C == "function" && j === "prototype" && Te(19), C = Fn(C, j), typeof C != "object" && Te(18, g.join("/"));
      }
      const b = Ft(C), y = u(p.value), h = g[g.length - 1];
      switch (v) {
        case t:
          switch (b) {
            case 2:
              return C.set(h, y);
            case 3:
              Te(16);
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
        case s:
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
          Te(17, v);
      }
    }), d;
  }
  function u(d) {
    if (!rt(d))
      return d;
    if (Array.isArray(d))
      return d.map(u);
    if (Er(d))
      return new Map(
        Array.from(d.entries()).map(([p, g]) => [p, u(g)])
      );
    if (jr(d))
      return new Set(Array.from(d).map(u));
    const x = Object.create(Bt(d));
    for (const p in d)
      x[p] = u(d[p]);
    return pr(d, ir) && (x[ir] = d[ir]), x;
  }
  function m(d) {
    return ct(d) ? u(d) : d;
  }
  fd("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: i
  });
}
var Qe = new gd(), Ar = Qe.produce, c0 = Qe.produceWithPatches.bind(
  Qe
);
Qe.setAutoFreeze.bind(Qe);
Qe.setUseStrictShallowCopy.bind(Qe);
var Qo = Qe.applyPatches.bind(Qe);
Qe.createDraft.bind(Qe);
Qe.finishDraft.bind(Qe);
var bd = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let s = !1;
    try {
      const o = {};
      e(o) === o && (s = !0);
    } catch {
    }
    if (s) {
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
}, wd = (e, t, r) => {
  const { memoize: s, memoizeOptions: o } = t, { inputSelectorResults: c, inputSelectorResultsCopy: f } = e, l = s(() => ({}), ...o);
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
}, Cd = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Ed(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function jd(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Ad(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (s) => typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Ko = (e) => Array.isArray(e) ? e : [e];
function Nd(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Ad(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Go(e, t) {
  const r = [], { length: s } = e;
  for (let o = 0; o < s; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var Dd = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: s } = {
    ...Cd,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: bd
    },
    inputStabilityCheck: {
      shouldRun: s === "always" || s === "once" && e,
      run: wd
    }
  };
}, kd = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, _d = typeof WeakRef < "u" ? WeakRef : kd, Sd = 0, Yo = 1;
function Pr() {
  return {
    s: Sd,
    v: void 0,
    o: null,
    p: null
  };
}
function tn(e, t = {}) {
  let r = Pr();
  const { resultEqualityCheck: s } = t;
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
        const v = g.get(p);
        v === void 0 ? (l = Pr(), g.set(p, l)) : l = v;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const v = g.get(p);
        v === void 0 ? (l = Pr(), g.set(p, l)) : l = v;
      }
    }
    const a = l;
    let u;
    if (l.s === Yo)
      u = l.v;
    else if (u = e.apply(null, arguments), c++, s) {
      const d = ((m = o == null ? void 0 : o.deref) == null ? void 0 : m.call(o)) ?? o;
      d != null && s(d, u) && (u = d, c !== 0 && c--), o = typeof u == "object" && u !== null || typeof u == "function" ? new _d(u) : u;
    }
    return a.s = Yo, a.v = u, u;
  }
  return f.clearCache = () => {
    r = Pr(), f.resetResultsCount();
  }, f.resultsCount = () => c, f.resetResultsCount = () => {
    c = 0;
  }, f;
}
function Bd(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, s = (...o) => {
    let c = 0, f = 0, l, i = {}, a = o.pop();
    typeof a == "object" && (i = a, a = o.pop()), Ed(
      a,
      `createSelector expects an output function after the inputs, but received: [${typeof a}]`
    );
    const u = {
      ...r,
      ...i
    }, {
      memoize: m,
      memoizeOptions: d = [],
      argsMemoize: x = tn,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, v = Ko(d), C = Ko(p), b = Nd(o), y = m(function() {
      return c++, a.apply(
        null,
        arguments
      );
    }, ...v);
    let h = !0;
    const w = x(function() {
      f++;
      const j = Go(
        b,
        arguments
      );
      if (l = y.apply(null, j), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: S, inputStabilityCheck: D } = Dd(h, g);
        if (S.shouldRun && S.run(
          a,
          j,
          l
        ), D.shouldRun) {
          const E = Go(
            b,
            arguments
          );
          D.run(
            { inputSelectorResults: j, inputSelectorResultsCopy: E },
            { memoize: m, memoizeOptions: v },
            arguments
          );
        }
        h && (h = !1);
      }
      return l;
    }, ...C);
    return Object.assign(w, {
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
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var lo = /* @__PURE__ */ Bd(tn), Fd = Object.assign(
  (e, t = lo) => {
    jd(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), s = r.map(
      (c) => e[c]
    );
    return t(
      s,
      (...c) => c.reduce((f, l, i) => (f[r[i]] = l, f), {})
    );
  },
  { withTypes: () => Fd }
);
function l0(e) {
  return ({ dispatch: r, getState: s }) => (o) => (c) => typeof c == "function" ? c(r, s, e) : o(c);
}
var Rd = l0(), Od = l0, Pd = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Zr : Zr.apply(null, arguments);
}, u0 = (e) => e && typeof e.match == "function";
function Je(e, t) {
  function r(...s) {
    if (t) {
      let o = t(...s);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? be(0) : "prepareAction did not return an object");
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
      payload: s[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (s) => oo(s) && s.type === e, r;
}
function Td(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  u0(e);
}
function Md(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Ld(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (s) => r(s);
  const {
    isActionCreator: t = Td
  } = e;
  return () => (r) => (s) => (t(s) && console.warn(Md(s.type)), r(s));
}
function d0(e, t) {
  let r = 0;
  return {
    measureTime(s) {
      const o = Date.now();
      try {
        return s();
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
var f0 = class ar extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ar.prototype);
  }
  static get [Symbol.species]() {
    return ar;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ar(...t[0].concat(this)) : new ar(...t.concat(this));
  }
};
function Xo(e) {
  return rt(e) ? Ar(e, () => {
  }) : e;
}
function Tr(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Id(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function zd(e, t, r) {
  const s = x0(e, t, r);
  return {
    detectMutations() {
      return h0(e, t, s, r);
    }
  };
}
function x0(e, t = [], r, s = "", o = /* @__PURE__ */ new Set()) {
  const c = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), c.children = {};
    for (const f in r) {
      const l = s ? s + "." + f : f;
      t.length && t.indexOf(l) !== -1 || (c.children[f] = x0(e, t, r[f], l));
    }
  }
  return c;
}
function h0(e, t = [], r, s, o = !1, c = "") {
  const f = r ? r.value : void 0, l = f === s;
  if (o && !l && !Number.isNaN(s))
    return {
      wasMutated: !0,
      path: c
    };
  if (e(f) || e(s))
    return {
      wasMutated: !1
    };
  const i = {};
  for (let u in r.children)
    i[u] = !0;
  for (let u in s)
    i[u] = !0;
  const a = t.length > 0;
  for (let u in i) {
    const m = c ? c + "." + u : u;
    if (a && t.some((p) => p instanceof RegExp ? p.test(m) : m === p))
      continue;
    const d = h0(e, t, r.children[u], s[u], l, m);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function $d(e = {}) {
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
      isImmutable: s = Id,
      ignoredPaths: o,
      warnAfter: c = 32
    } = e;
    const f = zd.bind(null, s, o);
    return ({
      getState: l
    }) => {
      let i = l(), a = f(i), u;
      return (m) => (d) => {
        const x = d0(c, "ImmutableStateInvariantMiddleware");
        x.measureTime(() => {
          if (i = l(), u = a.detectMutations(), a = f(i), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? be(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = m(d);
        return x.measureTime(() => {
          if (i = l(), u = a.detectMutations(), a = f(i), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? be(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), x.warnIfExceeded(), p;
      };
    };
  }
}
function p0(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || it(e);
}
function zs(e, t = "", r = p0, s, o = [], c) {
  let f;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || c != null && c.has(e)) return !1;
  const l = s != null ? s(e) : Object.entries(e), i = o.length > 0;
  for (const [a, u] of l) {
    const m = t ? t + "." + a : a;
    if (!(i && o.some((x) => x instanceof RegExp ? x.test(m) : m === x))) {
      if (!r(u))
        return {
          keyPath: m,
          value: u
        };
      if (typeof u == "object" && (f = zs(u, m, r, s, o, c), f))
        return f;
    }
  }
  return c && m0(e) && c.add(e), !1;
}
function m0(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !m0(t))
      return !1;
  return !0;
}
function Hd(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = p0,
      getEntries: r,
      ignoredActions: s = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: c = [],
      warnAfter: f = 32,
      ignoreState: l = !1,
      ignoreActions: i = !1,
      disableCache: a = !1
    } = e, u = !a && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (m) => (d) => (x) => {
      if (!oo(x))
        return d(x);
      const p = d(x), g = d0(f, "SerializableStateInvariantMiddleware");
      return !i && !(s.length && s.indexOf(x.type) !== -1) && g.measureTime(() => {
        const v = zs(x, "", t, r, o, u);
        if (v) {
          const {
            keyPath: C,
            value: b
          } = v;
          console.error(`A non-serializable value was detected in an action, in the path: \`${C}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, x, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (g.measureTime(() => {
        const v = m.getState(), C = zs(v, "", t, r, c, u);
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
function Mr(e) {
  return typeof e == "boolean";
}
var qd = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: s = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: c = !0
  } = t ?? {};
  let f = new f0();
  if (r && (Mr(r) ? f.push(Rd) : f.push(Od(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (s) {
      let l = {};
      Mr(s) || (l = s), f.unshift($d(l));
    }
    if (o) {
      let l = {};
      Mr(o) || (l = o), f.push(Hd(l));
    }
    if (c) {
      let l = {};
      Mr(c) || (l = c), f.unshift(Ld(l));
    }
  }
  return f;
}, pn = "RTK_autoBatch", nr = () => (e) => ({
  payload: e,
  meta: {
    [pn]: !0
  }
}), Zo = (e) => (t) => {
  setTimeout(t, e);
}, Wd = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const s = t(...r);
  let o = !0, c = !1, f = !1;
  const l = /* @__PURE__ */ new Set(), i = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Zo(10)
  ) : e.type === "callback" ? e.queueNotification : Zo(e.timeout), a = () => {
    f = !1, c && (c = !1, l.forEach((u) => u()));
  };
  return Object.assign({}, s, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const m = () => o && u(), d = s.subscribe(m);
      return l.add(u), () => {
        d(), l.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var m;
      try {
        return o = !((m = u == null ? void 0 : u.meta) != null && m[pn]), c = !o, c && (f || (f = !0, i(a))), s.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Vd = (e) => function(r) {
  const {
    autoBatch: s = !0
  } = r ?? {};
  let o = new f0(e);
  return s && o.push(Wd(typeof s == "object" ? s : void 0)), o;
};
function Ud(e) {
  const t = qd(), {
    reducer: r = void 0,
    middleware: s,
    devTools: o = !0,
    duplicateMiddlewareCheck: c = !0,
    preloadedState: f = void 0,
    enhancers: l = void 0
  } = e || {};
  let i;
  if (typeof r == "function")
    i = r;
  else if (it(r))
    i = t0(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? be(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? be(2) : "`middleware` field must be a callback");
  let a;
  if (typeof s == "function") {
    if (a = s(t), process.env.NODE_ENV !== "production" && !Array.isArray(a))
      throw new Error(process.env.NODE_ENV === "production" ? be(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    a = t();
  if (process.env.NODE_ENV !== "production" && a.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? be(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && c) {
    let g = /* @__PURE__ */ new Set();
    a.forEach((v) => {
      if (g.has(v))
        throw new Error(process.env.NODE_ENV === "production" ? be(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      g.add(v);
    });
  }
  let u = Zr;
  o && (u = Pd({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const m = id(...a), d = Vd(m);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? be(5) : "`enhancers` field must be a callback");
  let x = typeof l == "function" ? l(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(x))
    throw new Error(process.env.NODE_ENV === "production" ? be(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && x.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? be(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && a.length && !x.includes(m) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = u(...x);
  return e0(i, f, p);
}
function g0(e) {
  const t = {}, r = [];
  let s;
  const o = {
    addCase(c, f) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? be(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? be(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof c == "string" ? c : c.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? be(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? be(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = f, o;
    },
    addMatcher(c, f) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? be(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: c,
        reducer: f
      }), o;
    },
    addDefaultCase(c) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? be(31) : "`builder.addDefaultCase` can only be called once");
      return s = c, o;
    }
  };
  return e(o), [t, r, s];
}
function Qd(e) {
  return typeof e == "function";
}
function Kd(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? be(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, s, o] = g0(t), c;
  if (Qd(e))
    c = () => Xo(e());
  else {
    const l = Xo(e);
    c = () => l;
  }
  function f(l = c(), i) {
    let a = [r[i.type], ...s.filter(({
      matcher: u
    }) => u(i)).map(({
      reducer: u
    }) => u)];
    return a.filter((u) => !!u).length === 0 && (a = [o]), a.reduce((u, m) => {
      if (m)
        if (ct(u)) {
          const x = m(u, i);
          return x === void 0 ? u : x;
        } else {
          if (rt(u))
            return Ar(u, (d) => m(d, i));
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
var y0 = (e, t) => u0(e) ? e.match(t) : e(t);
function pt(...e) {
  return (t) => e.some((r) => y0(r, t));
}
function cr(...e) {
  return (t) => e.every((r) => y0(r, t));
}
function mn(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string", s = t.indexOf(e.meta.requestStatus) > -1;
  return r && s;
}
function Nr(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function uo(...e) {
  return e.length === 0 ? (t) => mn(t, ["pending"]) : Nr(e) ? pt(...e.map((t) => t.pending)) : uo()(e[0]);
}
function Kt(...e) {
  return e.length === 0 ? (t) => mn(t, ["rejected"]) : Nr(e) ? pt(...e.map((t) => t.rejected)) : Kt()(e[0]);
}
function gn(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? cr(Kt(...e), t) : Nr(e) ? cr(Kt(...e), t) : gn()(e[0]);
}
function bt(...e) {
  return e.length === 0 ? (t) => mn(t, ["fulfilled"]) : Nr(e) ? pt(...e.map((t) => t.fulfilled)) : bt()(e[0]);
}
function $s(...e) {
  return e.length === 0 ? (t) => mn(t, ["pending", "fulfilled", "rejected"]) : Nr(e) ? pt(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : $s()(e[0]);
}
var Gd = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", fo = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Gd[Math.random() * 64 | 0];
  return t;
}, Yd = ["name", "message", "stack", "code"], Pn = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Fr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Jo = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Fr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Xd = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of Yd)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, ea = "External signal was aborted", ta = /* @__PURE__ */ (() => {
  function e(t, r, s) {
    const o = Je(t + "/fulfilled", (i, a, u, m) => ({
      payload: i,
      meta: {
        ...m || {},
        arg: u,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), c = Je(t + "/pending", (i, a, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: a,
        requestId: i,
        requestStatus: "pending"
      }
    })), f = Je(t + "/rejected", (i, a, u, m, d) => ({
      payload: m,
      error: (s && s.serializeError || Xd)(i || "Rejected"),
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
        const x = s != null && s.idGenerator ? s.idGenerator(i) : fo(), p = new AbortController();
        let g, v;
        function C(y) {
          v = y, p.abort();
        }
        a && (a.aborted ? C(ea) : a.addEventListener("abort", () => C(ea), {
          once: !0
        }));
        const b = async function() {
          var w, A;
          let y;
          try {
            let j = (w = s == null ? void 0 : s.condition) == null ? void 0 : w.call(s, i, {
              getState: m,
              extra: d
            });
            if (Jd(j) && (j = await j), j === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const S = new Promise((D, E) => {
              g = () => {
                E({
                  name: "AbortError",
                  message: v || "Aborted"
                });
              }, p.signal.addEventListener("abort", g);
            });
            u(c(x, i, (A = s == null ? void 0 : s.getPendingMeta) == null ? void 0 : A.call(s, {
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
              rejectWithValue: (D, E) => new Pn(D, E),
              fulfillWithValue: (D, E) => new Jo(D, E)
            })).then((D) => {
              if (D instanceof Pn)
                throw D;
              return D instanceof Jo ? o(D.payload, x, i, D.meta) : o(D, x, i);
            })]);
          } catch (j) {
            y = j instanceof Pn ? f(null, x, i, j.payload, j.meta) : f(j, x, i);
          } finally {
            g && p.signal.removeEventListener("abort", g);
          }
          return s && !s.dispatchConditionRejection && f.match(y) && y.meta.condition || u(y), y;
        }();
        return Object.assign(b, {
          abort: C,
          requestId: x,
          arg: i,
          unwrap() {
            return b.then(Zd);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: c,
      rejected: f,
      fulfilled: o,
      settled: pt(f, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Zd(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Jd(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var ef = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function tf(e, t) {
  return `${e}/${t}`;
}
function rf({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[ef];
  return function(o) {
    const {
      name: c,
      reducerPath: f = c
    } = o;
    if (!c)
      throw new Error(process.env.NODE_ENV === "production" ? be(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const l = (typeof o.reducers == "function" ? o.reducers(sf()) : o.reducers) || {}, i = Object.keys(l), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(h, w) {
        const A = typeof h == "string" ? h : h.type;
        if (!A)
          throw new Error(process.env.NODE_ENV === "production" ? be(12) : "`context.addCase` cannot be called with an empty action type");
        if (A in a.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? be(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + A);
        return a.sliceCaseReducersByType[A] = w, u;
      },
      addMatcher(h, w) {
        return a.sliceMatchers.push({
          matcher: h,
          reducer: w
        }), u;
      },
      exposeAction(h, w) {
        return a.actionCreators[h] = w, u;
      },
      exposeCaseReducer(h, w) {
        return a.sliceCaseReducersByName[h] = w, u;
      }
    };
    i.forEach((h) => {
      const w = l[h], A = {
        reducerName: h,
        type: tf(c, h),
        createNotation: typeof o.reducers == "function"
      };
      af(w) ? lf(A, w, u, t) : of(A, w, u);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? be(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [h = {}, w = [], A = void 0] = typeof o.extraReducers == "function" ? g0(o.extraReducers) : [o.extraReducers], j = {
        ...h,
        ...a.sliceCaseReducersByType
      };
      return Kd(o.initialState, (S) => {
        for (let D in j)
          S.addCase(D, j[D]);
        for (let D of a.sliceMatchers)
          S.addMatcher(D.matcher, D.reducer);
        for (let D of w)
          S.addMatcher(D.matcher, D.reducer);
        A && S.addDefaultCase(A);
      });
    }
    const d = (h) => h, x = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let g;
    function v(h, w) {
      return g || (g = m()), g(h, w);
    }
    function C() {
      return g || (g = m()), g.getInitialState();
    }
    function b(h, w = !1) {
      function A(S) {
        let D = S[h];
        if (typeof D > "u") {
          if (w)
            D = Tr(p, A, C);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? be(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return D;
      }
      function j(S = d) {
        const D = Tr(x, w, () => /* @__PURE__ */ new WeakMap());
        return Tr(D, S, () => {
          const E = {};
          for (const [N, k] of Object.entries(o.selectors ?? {}))
            E[N] = nf(k, S, () => Tr(p, S, C), w);
          return E;
        });
      }
      return {
        reducerPath: h,
        getSelectors: j,
        get selectors() {
          return j(A);
        },
        selectSlice: A
      };
    }
    const y = {
      name: c,
      reducer: v,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: C,
      ...b(f),
      injectInto(h, {
        reducerPath: w,
        ...A
      } = {}) {
        const j = w ?? f;
        return h.inject({
          reducerPath: j,
          reducer: v
        }, A), {
          ...y,
          ...b(j, !0)
        };
      }
    };
    return y;
  };
}
function nf(e, t, r, s) {
  function o(c, ...f) {
    let l = t(c);
    if (typeof l > "u") {
      if (s)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? be(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...f);
  }
  return o.unwrapped = e, o;
}
var $t = /* @__PURE__ */ rf();
function sf() {
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
function of({
  type: e,
  reducerName: t,
  createNotation: r
}, s, o) {
  let c, f;
  if ("reducer" in s) {
    if (r && !cf(s))
      throw new Error(process.env.NODE_ENV === "production" ? be(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    c = s.reducer, f = s.prepare;
  } else
    c = s;
  o.addCase(e, c).exposeCaseReducer(t, c).exposeAction(t, f ? Je(e, f) : Je(e));
}
function af(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function cf(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function lf({
  type: e,
  reducerName: t
}, r, s, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? be(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: c,
    fulfilled: f,
    pending: l,
    rejected: i,
    settled: a,
    options: u
  } = r, m = o(e, c, u);
  s.exposeAction(t, m), f && s.addCase(m.fulfilled, f), l && s.addCase(m.pending, l), i && s.addCase(m.rejected, i), a && s.addMatcher(m.settled, a), s.exposeCaseReducer(t, {
    fulfilled: f || Lr,
    pending: l || Lr,
    rejected: i || Lr,
    settled: a || Lr
  });
}
function Lr() {
}
function be(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var uf = class extends Error {
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
    Fr(this, "issues");
    this.name = "SchemaError", this.issues = t;
  }
}, v0 = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(v0 || {});
function ra(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var na = it;
function b0(e, t) {
  if (e === t || !(na(e) && na(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), s = Object.keys(e);
  let o = r.length === s.length;
  const c = Array.isArray(t) ? [] : {};
  for (const f of r)
    c[f] = b0(e[f], t[f]), o && (o = e[f] === c[f]);
  return o ? e : c;
}
function Wt(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var sa = (e) => [].concat(...e);
function df(e) {
  return new RegExp("(^|:)//").test(e);
}
function ff() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function rn(e) {
  return e != null;
}
function xf() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var hf = (e) => e.replace(/\/$/, ""), pf = (e) => e.replace(/^\//, "");
function mf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (df(t))
    return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = hf(e), t = pf(t), `${e}${r}${t}`;
}
function gf(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var oa = (...e) => fetch(...e), yf = (e) => e.status >= 200 && e.status <= 299, vf = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function aa(e) {
  if (!it(e))
    return e;
  const t = {
    ...e
  };
  for (const [r, s] of Object.entries(t))
    s === void 0 && delete t[r];
  return t;
}
function bf({
  baseUrl: e,
  prepareHeaders: t = (m) => m,
  fetchFn: r = oa,
  paramsSerializer: s,
  isJsonContentType: o = vf,
  jsonContentType: c = "application/json",
  jsonReplacer: f,
  timeout: l,
  responseHandler: i,
  validateStatus: a,
  ...u
} = {}) {
  return typeof fetch > "u" && r === oa && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (d, x, p) => {
    const {
      getState: g,
      extra: v,
      endpoint: C,
      forced: b,
      type: y
    } = x;
    let h, {
      url: w,
      headers: A = new Headers(u.headers),
      params: j = void 0,
      responseHandler: S = i ?? "json",
      validateStatus: D = a ?? yf,
      timeout: E = l,
      ...N
    } = typeof d == "string" ? {
      url: d
    } : d, k, _ = x.signal;
    E && (k = new AbortController(), x.signal.addEventListener("abort", k.abort), _ = k.signal);
    let B = {
      ...u,
      signal: _,
      ...N
    };
    A = new Headers(aa(A)), B.headers = await t(A, {
      getState: g,
      arg: d,
      extra: v,
      endpoint: C,
      forced: b,
      type: y,
      extraOptions: p
    }) || A;
    const O = (P) => typeof P == "object" && (it(P) || Array.isArray(P) || typeof P.toJSON == "function");
    if (!B.headers.has("content-type") && O(B.body) && B.headers.set("content-type", c), O(B.body) && o(B.headers) && (B.body = JSON.stringify(B.body, f)), j) {
      const P = ~w.indexOf("?") ? "&" : "?", G = s ? s(j) : new URLSearchParams(aa(j));
      w += P + G;
    }
    w = mf(e, w);
    const z = new Request(w, B);
    h = {
      request: new Request(w, B)
    };
    let I, L = !1, Y = k && setTimeout(() => {
      L = !0, k.abort();
    }, E);
    try {
      I = await r(z);
    } catch (P) {
      return {
        error: {
          status: L ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(P)
        },
        meta: h
      };
    } finally {
      Y && clearTimeout(Y), k == null || k.signal.removeEventListener("abort", k.abort);
    }
    const T = I.clone();
    h.response = T;
    let $, R = "";
    try {
      let P;
      if (await Promise.all([
        m(I, S).then((G) => $ = G, (G) => P = G),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        T.text().then((G) => R = G, () => {
        })
      ]), P) throw P;
    } catch (P) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: I.status,
          data: R,
          error: String(P)
        },
        meta: h
      };
    }
    return D(I, $) ? {
      data: $,
      meta: h
    } : {
      error: {
        status: I.status,
        data: $
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
var ia = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, xo = /* @__PURE__ */ Je("__rtkq/focused"), w0 = /* @__PURE__ */ Je("__rtkq/unfocused"), ho = /* @__PURE__ */ Je("__rtkq/online"), C0 = /* @__PURE__ */ Je("__rtkq/offline");
function yn(e) {
  return e.type === "query";
}
function wf(e) {
  return e.type === "mutation";
}
function Dr(e) {
  return e.type === "infinitequery";
}
function nn(e) {
  return yn(e) || Dr(e);
}
function po(e, t, r, s, o, c) {
  return Cf(e) ? e(t, r, s, o).filter(rn).map(Hs).map(c) : Array.isArray(e) ? e.map(Hs).map(c) : [];
}
function Cf(e) {
  return typeof e == "function";
}
function Hs(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Ef(e, t) {
  return e.catch(t);
}
var yr = Symbol("forceQueryFn"), qs = (e) => typeof e[yr] == "function";
function jf({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: s,
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
  function m(h, w) {
    return (A) => {
      var D;
      const j = c.endpointDefinitions[h], S = e({
        queryArgs: w,
        endpointDefinition: j,
        endpointName: h
      });
      return (D = f.get(A)) == null ? void 0 : D[S];
    };
  }
  function d(h, w) {
    return (A) => {
      var j;
      return (j = l.get(A)) == null ? void 0 : j[w];
    };
  }
  function x() {
    return (h) => Object.values(f.get(h) || {}).filter(rn);
  }
  function p() {
    return (h) => Object.values(l.get(h) || {}).filter(rn);
  }
  function g(h) {
    if (process.env.NODE_ENV !== "production") {
      if (g.triggered) return;
      const w = h(o.internalActions.internal_getRTKQSubscriptions());
      if (g.triggered = !0, typeof w != "object" || typeof (w == null ? void 0 : w.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? be(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function v(h, w) {
    const A = (j, {
      subscribe: S = !0,
      forceRefetch: D,
      subscriptionOptions: E,
      [yr]: N,
      ...k
    } = {}) => (_, B) => {
      var ie;
      const O = e({
        queryArgs: j,
        endpointDefinition: w,
        endpointName: h
      });
      let z;
      const H = {
        ...k,
        type: "query",
        subscribe: S,
        forceRefetch: D,
        subscriptionOptions: E,
        endpointName: h,
        originalArgs: j,
        queryCacheKey: O,
        [yr]: N
      };
      if (yn(w))
        z = t(H);
      else {
        const {
          direction: J,
          initialPageParam: we
        } = k;
        z = r({
          ...H,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: J,
          initialPageParam: we
        });
      }
      const I = o.endpoints[h].select(j), L = _(z), Y = I(B());
      g(_);
      const {
        requestId: T,
        abort: $
      } = L, R = Y.requestId !== T, P = (ie = f.get(_)) == null ? void 0 : ie[O], G = () => I(B()), ee = Object.assign(N ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        L.then(G)
      ) : R && !P ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(Y)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([P, L]).then(G)
      ), {
        arg: j,
        requestId: T,
        subscriptionOptions: E,
        queryCacheKey: O,
        abort: $,
        async unwrap() {
          const J = await ee;
          if (J.isError)
            throw J.error;
          return J.data;
        },
        refetch: () => _(A(j, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          S && _(i({
            queryCacheKey: O,
            requestId: T
          }));
        },
        updateSubscriptionOptions(J) {
          ee.subscriptionOptions = J, _(u({
            endpointName: h,
            requestId: T,
            queryCacheKey: O,
            options: J
          }));
        }
      });
      if (!P && !R && !N) {
        const J = gf(f, _, {});
        J[O] = ee, ee.then(() => {
          delete J[O], Wt(J) || f.delete(_);
        });
      }
      return ee;
    };
    return A;
  }
  function C(h, w) {
    return v(h, w);
  }
  function b(h, w) {
    return v(h, w);
  }
  function y(h) {
    return (w, {
      track: A = !0,
      fixedCacheKey: j
    } = {}) => (S, D) => {
      const E = s({
        type: "mutation",
        endpointName: h,
        originalArgs: w,
        track: A,
        fixedCacheKey: j
      }), N = S(E);
      g(S);
      const {
        requestId: k,
        abort: _,
        unwrap: B
      } = N, O = Ef(N.unwrap().then((L) => ({
        data: L
      })), (L) => ({
        error: L
      })), z = () => {
        S(a({
          requestId: k,
          fixedCacheKey: j
        }));
      }, H = Object.assign(O, {
        arg: N.arg,
        requestId: k,
        abort: _,
        unwrap: B,
        reset: z
      }), I = l.get(S) || {};
      return l.set(S, I), I[k] = H, H.then(() => {
        delete I[k], Wt(I) || l.delete(S);
      }), j && (I[j] = H, H.then(() => {
        I[j] === H && (delete I[j], Wt(I) || l.delete(S));
      })), H;
    };
  }
}
var E0 = class extends uf {
  constructor(e, t, r, s) {
    super(e), this.value = t, this.schemaName = r, this._bqMeta = s;
  }
};
async function Nt(e, t, r, s) {
  const o = await e["~standard"].validate(t);
  if (o.issues)
    throw new E0(o.issues, t, r, s);
  return o.value;
}
function Af(e) {
  return e;
}
var sr = (e = {}) => ({
  ...e,
  [pn]: !0
});
function Nf({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: s,
  api: o,
  assertTagType: c,
  selectors: f,
  onSchemaFailure: l,
  catchSchemaFailure: i,
  skipSchemaValidation: a
}) {
  const u = (N, k, _, B) => (O, z) => {
    const H = r[N], I = s({
      queryArgs: k,
      endpointDefinition: H,
      endpointName: N
    });
    if (O(o.internalActions.queryResultPatched({
      queryCacheKey: I,
      patches: _
    })), !B)
      return;
    const L = o.endpoints[N].select(k)(
      // Work around TS 4.1 mismatch
      z()
    ), Y = po(H.providesTags, L.data, void 0, k, {}, c);
    O(o.internalActions.updateProvidedBy([{
      queryCacheKey: I,
      providedTags: Y
    }]));
  };
  function m(N, k, _ = 0) {
    const B = [k, ...N];
    return _ && B.length > _ ? B.slice(0, -1) : B;
  }
  function d(N, k, _ = 0) {
    const B = [...N, k];
    return _ && B.length > _ ? B.slice(1) : B;
  }
  const x = (N, k, _, B = !0) => (O, z) => {
    const I = o.endpoints[N].select(k)(
      // Work around TS 4.1 mismatch
      z()
    ), L = {
      patches: [],
      inversePatches: [],
      undo: () => O(o.util.patchQueryData(N, k, L.inversePatches, B))
    };
    if (I.status === "uninitialized")
      return L;
    let Y;
    if ("data" in I)
      if (rt(I.data)) {
        const [T, $, R] = c0(I.data, _);
        L.patches.push(...$), L.inversePatches.push(...R), Y = T;
      } else
        Y = _(I.data), L.patches.push({
          op: "replace",
          path: [],
          value: Y
        }), L.inversePatches.push({
          op: "replace",
          path: [],
          value: I.data
        });
    return L.patches.length === 0 || O(o.util.patchQueryData(N, k, L.patches, B)), L;
  }, p = (N, k, _) => (B) => B(o.endpoints[N].initiate(k, {
    subscribe: !1,
    forceRefetch: !0,
    [yr]: () => ({
      data: _
    })
  })), g = (N, k) => N.query && N[k] ? N[k] : Af, v = async (N, {
    signal: k,
    abort: _,
    rejectWithValue: B,
    fulfillWithValue: O,
    dispatch: z,
    getState: H,
    extra: I
  }) => {
    var $, R;
    const L = r[N.endpointName], {
      metaSchema: Y,
      skipSchemaValidation: T = a
    } = L;
    try {
      let P = g(L, "transformResponse");
      const G = {
        signal: k,
        abort: _,
        dispatch: z,
        getState: H,
        extra: I,
        endpoint: N.endpointName,
        type: N.type,
        forced: N.type === "query" ? C(N, H()) : void 0,
        queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
      }, ee = N.type === "query" ? N[yr] : void 0;
      let ie;
      const J = async (de, ce, ve, he) => {
        if (ce == null && de.pages.length)
          return Promise.resolve({
            data: de
          });
        const pe = {
          queryArg: N.originalArgs,
          pageParam: ce
        }, _e = await we(pe), ge = he ? m : d;
        return {
          data: {
            pages: ge(de.pages, _e.data, ve),
            pageParams: ge(de.pageParams, ce, ve)
          },
          meta: _e.meta
        };
      };
      async function we(de) {
        let ce;
        const {
          extraOptions: ve,
          argSchema: he,
          rawResponseSchema: pe,
          responseSchema: _e
        } = L;
        if (he && !T && (de = await Nt(
          he,
          de,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ee ? ce = ee() : L.query ? ce = await t(L.query(de), G, ve) : ce = await L.queryFn(de, G, ve, (Ce) => t(Ce, G, ve)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const Ce = L.query ? "`baseQuery`" : "`queryFn`";
          let W;
          if (!ce)
            W = `${Ce} did not return anything.`;
          else if (typeof ce != "object")
            W = `${Ce} did not return an object.`;
          else if (ce.error && ce.data)
            W = `${Ce} returned an object containing both \`error\` and \`result\`.`;
          else if (ce.error === void 0 && ce.data === void 0)
            W = `${Ce} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const se of Object.keys(ce))
              if (se !== "error" && se !== "data" && se !== "meta") {
                W = `The object returned by ${Ce} has the unknown property ${se}.`;
                break;
              }
          W && console.error(`Error encountered handling the endpoint ${N.endpointName}.
                  ${W}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, ce);
        }
        if (ce.error) throw new ia(ce.error, ce.meta);
        let {
          data: ge
        } = ce;
        pe && !T && (ge = await Nt(pe, ce.data, "rawResponseSchema", ce.meta));
        let Ne = await P(ge, ce.meta, de);
        return _e && !T && (Ne = await Nt(_e, Ne, "responseSchema", ce.meta)), {
          ...ce,
          data: Ne
        };
      }
      if (N.type === "query" && "infiniteQueryOptions" in L) {
        const {
          infiniteQueryOptions: de
        } = L, {
          maxPages: ce = 1 / 0
        } = de;
        let ve;
        const he = {
          pages: [],
          pageParams: []
        }, pe = ($ = f.selectQueryEntry(H(), N.queryCacheKey)) == null ? void 0 : $.data, ge = /* arg.forceRefetch */ C(N, H()) && !N.direction || !pe ? he : pe;
        if ("direction" in N && N.direction && ge.pages.length) {
          const Ne = N.direction === "backward", W = (Ne ? j0 : Ws)(de, ge, N.originalArgs);
          ve = await J(ge, W, ce, Ne);
        } else {
          const {
            initialPageParam: Ne = de.initialPageParam
          } = N, Ce = (pe == null ? void 0 : pe.pageParams) ?? [], W = Ce[0] ?? Ne, se = Ce.length;
          ve = await J(ge, W, ce), ee && (ve = {
            data: ve.data.pages[0]
          });
          for (let ne = 1; ne < se; ne++) {
            const M = Ws(de, ve.data, N.originalArgs);
            ve = await J(ve.data, M, ce);
          }
        }
        ie = ve;
      } else
        ie = await we(N.originalArgs);
      return Y && !T && ie.meta && (ie.meta = await Nt(Y, ie.meta, "metaSchema", ie.meta)), O(ie.data, sr({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: ie.meta
      }));
    } catch (P) {
      let G = P;
      if (G instanceof ia) {
        let ee = g(L, "transformErrorResponse");
        const {
          rawErrorResponseSchema: ie,
          errorResponseSchema: J
        } = L;
        let {
          value: we,
          meta: de
        } = G;
        try {
          ie && !T && (we = await Nt(ie, we, "rawErrorResponseSchema", de)), Y && !T && (de = await Nt(Y, de, "metaSchema", de));
          let ce = await ee(we, de, N.originalArgs);
          return J && !T && (ce = await Nt(J, ce, "errorResponseSchema", de)), B(ce, sr({
            baseQueryMeta: de
          }));
        } catch (ce) {
          G = ce;
        }
      }
      try {
        if (G instanceof E0) {
          const ee = {
            endpoint: N.endpointName,
            arg: N.originalArgs,
            type: N.type,
            queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
          };
          (R = L.onSchemaFailure) == null || R.call(L, G, ee), l == null || l(G, ee);
          const {
            catchSchemaFailure: ie = i
          } = L;
          if (ie)
            return B(ie(G, ee), sr({
              baseQueryMeta: G._bqMeta
            }));
        }
      } catch (ee) {
        G = ee;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${N.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, G) : console.error(G), G;
    }
  };
  function C(N, k) {
    const _ = f.selectQueryEntry(k, N.queryCacheKey), B = f.selectConfig(k).refetchOnMountOrArgChange, O = _ == null ? void 0 : _.fulfilledTimeStamp, z = N.forceRefetch ?? (N.subscribe && B);
    return z ? z === !0 || (Number(/* @__PURE__ */ new Date()) - Number(O)) / 1e3 >= z : !1;
  }
  const b = () => ta(`${e}/executeQuery`, v, {
    getPendingMeta({
      arg: k
    }) {
      const _ = r[k.endpointName];
      return sr({
        startedTimeStamp: Date.now(),
        ...Dr(_) ? {
          direction: k.direction
        } : {}
      });
    },
    condition(k, {
      getState: _
    }) {
      var T;
      const B = _(), O = f.selectQueryEntry(B, k.queryCacheKey), z = O == null ? void 0 : O.fulfilledTimeStamp, H = k.originalArgs, I = O == null ? void 0 : O.originalArgs, L = r[k.endpointName], Y = k.direction;
      return qs(k) ? !0 : (O == null ? void 0 : O.status) === "pending" ? !1 : C(k, B) || yn(L) && ((T = L == null ? void 0 : L.forceRefetch) != null && T.call(L, {
        currentArg: H,
        previousArg: I,
        endpointState: O,
        state: B
      })) ? !0 : !(z && !Y);
    },
    dispatchConditionRejection: !0
  }), y = b(), h = b(), w = ta(`${e}/executeMutation`, v, {
    getPendingMeta() {
      return sr({
        startedTimeStamp: Date.now()
      });
    }
  }), A = (N) => "force" in N, j = (N) => "ifOlderThan" in N, S = (N, k, _) => (B, O) => {
    const z = A(_) && _.force, H = j(_) && _.ifOlderThan, I = (Y = !0) => {
      const T = {
        forceRefetch: Y,
        isPrefetch: !0
      };
      return o.endpoints[N].initiate(k, T);
    }, L = o.endpoints[N].select(k)(O());
    if (z)
      B(I());
    else if (H) {
      const Y = L == null ? void 0 : L.fulfilledTimeStamp;
      if (!Y) {
        B(I());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(Y))) / 1e3 >= H && B(I());
    } else
      B(I(!1));
  };
  function D(N) {
    return (k) => {
      var _, B;
      return ((B = (_ = k == null ? void 0 : k.meta) == null ? void 0 : _.arg) == null ? void 0 : B.endpointName) === N;
    };
  }
  function E(N, k) {
    return {
      matchPending: cr(uo(N), D(k)),
      matchFulfilled: cr(bt(N), D(k)),
      matchRejected: cr(Kt(N), D(k))
    };
  }
  return {
    queryThunk: y,
    mutationThunk: w,
    infiniteQueryThunk: h,
    prefetch: S,
    updateQueryData: x,
    upsertQueryData: p,
    patchQueryData: u,
    buildMatchThunkActions: E
  };
}
function Ws(e, {
  pages: t,
  pageParams: r
}, s) {
  const o = t.length - 1;
  return e.getNextPageParam(t[o], t, r[o], r, s);
}
function j0(e, {
  pages: t,
  pageParams: r
}, s) {
  var o;
  return (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, t[0], t, r[0], r, s);
}
function A0(e, t, r, s) {
  return po(r[e.meta.arg.endpointName][t], bt(e) ? e.payload : void 0, gn(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, s);
}
function Ir(e, t, r) {
  const s = e[t];
  s && r(s);
}
function vr(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function ca(e, t, r) {
  const s = e[vr(t)];
  s && r(s);
}
var zr = {};
function Df({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: s,
  context: {
    endpointDefinitions: o,
    apiUid: c,
    extractRehydrationInfo: f,
    hasRehydrationInfo: l
  },
  assertTagType: i,
  config: a
}) {
  const u = Je(`${e}/resetApiState`);
  function m(D, E, N, k) {
    var _;
    D[_ = E.queryCacheKey] ?? (D[_] = {
      status: "uninitialized",
      endpointName: E.endpointName
    }), Ir(D, E.queryCacheKey, (B) => {
      B.status = "pending", B.requestId = N && B.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        B.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        k.requestId
      ), E.originalArgs !== void 0 && (B.originalArgs = E.originalArgs), B.startedTimeStamp = k.startedTimeStamp;
      const O = o[k.arg.endpointName];
      Dr(O) && "direction" in E && (B.direction = E.direction);
    });
  }
  function d(D, E, N, k) {
    Ir(D, E.arg.queryCacheKey, (_) => {
      if (_.requestId !== E.requestId && !k) return;
      const {
        merge: B
      } = o[E.arg.endpointName];
      if (_.status = "fulfilled", B)
        if (_.data !== void 0) {
          const {
            fulfilledTimeStamp: O,
            arg: z,
            baseQueryMeta: H,
            requestId: I
          } = E;
          let L = Ar(_.data, (Y) => B(Y, N, {
            arg: z.originalArgs,
            baseQueryMeta: H,
            fulfilledTimeStamp: O,
            requestId: I
          }));
          _.data = L;
        } else
          _.data = N;
      else
        _.data = o[E.arg.endpointName].structuralSharing ?? !0 ? b0(ct(_.data) ? ld(_.data) : _.data, N) : N;
      delete _.error, _.fulfilledTimeStamp = E.fulfilledTimeStamp;
    });
  }
  const x = $t({
    name: `${e}/queries`,
    initialState: zr,
    reducers: {
      removeQueryResult: {
        reducer(D, {
          payload: {
            queryCacheKey: E
          }
        }) {
          delete D[E];
        },
        prepare: nr()
      },
      cacheEntriesUpserted: {
        reducer(D, E) {
          for (const N of E.payload) {
            const {
              queryDescription: k,
              value: _
            } = N;
            m(D, k, !0, {
              arg: k,
              requestId: E.meta.requestId,
              startedTimeStamp: E.meta.timestamp
            }), d(
              D,
              {
                arg: k,
                requestId: E.meta.requestId,
                fulfilledTimeStamp: E.meta.timestamp,
                baseQueryMeta: {}
              },
              _,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (D) => ({
          payload: D.map((k) => {
            const {
              endpointName: _,
              arg: B,
              value: O
            } = k, z = o[_];
            return {
              queryDescription: {
                type: "query",
                endpointName: _,
                originalArgs: k.arg,
                queryCacheKey: s({
                  queryArgs: B,
                  endpointDefinition: z,
                  endpointName: _
                })
              },
              value: O
            };
          }),
          meta: {
            [pn]: !0,
            requestId: fo(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(D, {
          payload: {
            queryCacheKey: E,
            patches: N
          }
        }) {
          Ir(D, E, (k) => {
            k.data = Qo(k.data, N.concat());
          });
        },
        prepare: nr()
      }
    },
    extraReducers(D) {
      D.addCase(t.pending, (E, {
        meta: N,
        meta: {
          arg: k
        }
      }) => {
        const _ = qs(k);
        m(E, k, _, N);
      }).addCase(t.fulfilled, (E, {
        meta: N,
        payload: k
      }) => {
        const _ = qs(N.arg);
        d(E, N, k, _);
      }).addCase(t.rejected, (E, {
        meta: {
          condition: N,
          arg: k,
          requestId: _
        },
        error: B,
        payload: O
      }) => {
        Ir(E, k.queryCacheKey, (z) => {
          if (!N) {
            if (z.requestId !== _) return;
            z.status = "rejected", z.error = O ?? B;
          }
        });
      }).addMatcher(l, (E, N) => {
        const {
          queries: k
        } = f(N);
        for (const [_, B] of Object.entries(k))
          // do not rehydrate entries that were currently in flight.
          ((B == null ? void 0 : B.status) === "fulfilled" || (B == null ? void 0 : B.status) === "rejected") && (E[_] = B);
      });
    }
  }), p = $t({
    name: `${e}/mutations`,
    initialState: zr,
    reducers: {
      removeMutationResult: {
        reducer(D, {
          payload: E
        }) {
          const N = vr(E);
          N in D && delete D[N];
        },
        prepare: nr()
      }
    },
    extraReducers(D) {
      D.addCase(r.pending, (E, {
        meta: N,
        meta: {
          requestId: k,
          arg: _,
          startedTimeStamp: B
        }
      }) => {
        _.track && (E[vr(N)] = {
          requestId: k,
          status: "pending",
          endpointName: _.endpointName,
          startedTimeStamp: B
        });
      }).addCase(r.fulfilled, (E, {
        payload: N,
        meta: k
      }) => {
        k.arg.track && ca(E, k, (_) => {
          _.requestId === k.requestId && (_.status = "fulfilled", _.data = N, _.fulfilledTimeStamp = k.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (E, {
        payload: N,
        error: k,
        meta: _
      }) => {
        _.arg.track && ca(E, _, (B) => {
          B.requestId === _.requestId && (B.status = "rejected", B.error = N ?? k);
        });
      }).addMatcher(l, (E, N) => {
        const {
          mutations: k
        } = f(N);
        for (const [_, B] of Object.entries(k))
          // do not rehydrate entries that were currently in flight.
          ((B == null ? void 0 : B.status) === "fulfilled" || (B == null ? void 0 : B.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          _ !== (B == null ? void 0 : B.requestId) && (E[_] = B);
      });
    }
  }), g = {
    tags: {},
    keys: {}
  }, v = $t({
    name: `${e}/invalidation`,
    initialState: g,
    reducers: {
      updateProvidedBy: {
        reducer(D, E) {
          var N, k, _;
          for (const {
            queryCacheKey: B,
            providedTags: O
          } of E.payload) {
            C(D, B);
            for (const {
              type: z,
              id: H
            } of O) {
              const I = (k = (N = D.tags)[z] ?? (N[z] = {}))[_ = H || "__internal_without_id"] ?? (k[_] = []);
              I.includes(B) || I.push(B);
            }
            D.keys[B] = O;
          }
        },
        prepare: nr()
      }
    },
    extraReducers(D) {
      D.addCase(x.actions.removeQueryResult, (E, {
        payload: {
          queryCacheKey: N
        }
      }) => {
        C(E, N);
      }).addMatcher(l, (E, N) => {
        var _, B, O;
        const {
          provided: k
        } = f(N);
        for (const [z, H] of Object.entries(k))
          for (const [I, L] of Object.entries(H)) {
            const Y = (B = (_ = E.tags)[z] ?? (_[z] = {}))[O = I || "__internal_without_id"] ?? (B[O] = []);
            for (const T of L)
              Y.includes(T) || Y.push(T);
          }
      }).addMatcher(pt(bt(t), gn(t)), (E, N) => {
        b(E, [N]);
      }).addMatcher(x.actions.cacheEntriesUpserted.match, (E, N) => {
        const k = N.payload.map(({
          queryDescription: _,
          value: B
        }) => ({
          type: "UNKNOWN",
          payload: B,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: _
          }
        }));
        b(E, k);
      });
    }
  });
  function C(D, E) {
    var k;
    const N = D.keys[E] ?? [];
    for (const _ of N) {
      const B = _.type, O = _.id ?? "__internal_without_id", z = (k = D.tags[B]) == null ? void 0 : k[O];
      z && (D.tags[B][O] = z.filter((H) => H !== E));
    }
    delete D.keys[E];
  }
  function b(D, E) {
    const N = E.map((k) => {
      const _ = A0(k, "providesTags", o, i), {
        queryCacheKey: B
      } = k.meta.arg;
      return {
        queryCacheKey: B,
        providedTags: _
      };
    });
    v.caseReducers.updateProvidedBy(D, v.actions.updateProvidedBy(N));
  }
  const y = $t({
    name: `${e}/subscriptions`,
    initialState: zr,
    reducers: {
      updateSubscriptionOptions(D, E) {
      },
      unsubscribeQueryResult(D, E) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), h = $t({
    name: `${e}/internalSubscriptions`,
    initialState: zr,
    reducers: {
      subscriptionsUpdated: {
        reducer(D, E) {
          return Qo(D, E.payload);
        },
        prepare: nr()
      }
    }
  }), w = $t({
    name: `${e}/config`,
    initialState: {
      online: xf(),
      focused: ff(),
      middlewareRegistered: !1,
      ...a
    },
    reducers: {
      middlewareRegistered(D, {
        payload: E
      }) {
        D.middlewareRegistered = D.middlewareRegistered === "conflict" || c !== E ? "conflict" : !0;
      }
    },
    extraReducers: (D) => {
      D.addCase(ho, (E) => {
        E.online = !0;
      }).addCase(C0, (E) => {
        E.online = !1;
      }).addCase(xo, (E) => {
        E.focused = !0;
      }).addCase(w0, (E) => {
        E.focused = !1;
      }).addMatcher(l, (E) => ({
        ...E
      }));
    }
  }), A = t0({
    queries: x.reducer,
    mutations: p.reducer,
    provided: v.reducer,
    subscriptions: h.reducer,
    config: w.reducer
  }), j = (D, E) => A(u.match(E) ? void 0 : D, E), S = {
    ...w.actions,
    ...x.actions,
    ...y.actions,
    ...h.actions,
    ...p.actions,
    ...v.actions,
    resetApiState: u
  };
  return {
    reducer: j,
    actions: S
  };
}
var Ze = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), N0 = {
  status: "uninitialized"
  /* uninitialized */
}, la = /* @__PURE__ */ Ar(N0, () => {
}), ua = /* @__PURE__ */ Ar(N0, () => {
});
function kf({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const s = (y) => la, o = (y) => ua;
  return {
    buildQuerySelector: d,
    buildInfiniteQuerySelector: x,
    buildMutationSelector: p,
    selectInvalidatedBy: g,
    selectCachedArgsForQuery: v,
    selectApiState: f,
    selectQueries: l,
    selectMutations: a,
    selectQueryEntry: i,
    selectConfig: u
  };
  function c(y) {
    return {
      ...y,
      ...ra(y.status)
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
    var w;
    return (w = l(y)) == null ? void 0 : w[h];
  }
  function a(y) {
    var h;
    return (h = f(y)) == null ? void 0 : h.mutations;
  }
  function u(y) {
    var h;
    return (h = f(y)) == null ? void 0 : h.config;
  }
  function m(y, h, w) {
    return (A) => {
      if (A === Ze)
        return r(s, w);
      const j = e({
        queryArgs: A,
        endpointDefinition: h,
        endpointName: y
      });
      return r((D) => i(D, j) ?? la, w);
    };
  }
  function d(y, h) {
    return m(y, h, c);
  }
  function x(y, h) {
    const {
      infiniteQueryOptions: w
    } = h;
    function A(j) {
      const S = {
        ...j,
        ...ra(j.status)
      }, {
        isLoading: D,
        isError: E,
        direction: N
      } = S, k = N === "forward", _ = N === "backward";
      return {
        ...S,
        hasNextPage: C(w, S.data, S.originalArgs),
        hasPreviousPage: b(w, S.data, S.originalArgs),
        isFetchingNextPage: D && k,
        isFetchingPreviousPage: D && _,
        isFetchNextPageError: E && k,
        isFetchPreviousPageError: E && _
      };
    }
    return m(y, h, A);
  }
  function p() {
    return (y) => {
      let h;
      return typeof y == "object" ? h = vr(y) ?? Ze : h = y, r(h === Ze ? o : (j) => {
        var S, D;
        return ((D = (S = f(j)) == null ? void 0 : S.mutations) == null ? void 0 : D[h]) ?? ua;
      }, c);
    };
  }
  function g(y, h) {
    const w = y[t], A = /* @__PURE__ */ new Set();
    for (const j of h.filter(rn).map(Hs)) {
      const S = w.provided.tags[j.type];
      if (!S)
        continue;
      let D = (j.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        S[j.id]
      ) : (
        // no id: invalidate all queries that provide this type
        sa(Object.values(S))
      )) ?? [];
      for (const E of D)
        A.add(E);
    }
    return sa(Array.from(A.values()).map((j) => {
      const S = w.queries[j];
      return S ? [{
        queryCacheKey: j,
        endpointName: S.endpointName,
        originalArgs: S.originalArgs
      }] : [];
    }));
  }
  function v(y, h) {
    return Object.values(l(y)).filter(
      (w) => (w == null ? void 0 : w.endpointName) === h && w.status !== "uninitialized"
      /* uninitialized */
    ).map((w) => w.originalArgs);
  }
  function C(y, h, w) {
    return h ? Ws(y, h, w) != null : !1;
  }
  function b(y, h, w) {
    return !h || !y.getPreviousPageParam ? !1 : j0(y, h, w) != null;
  }
}
var Ht = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, sn = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const s = Ht == null ? void 0 : Ht.get(t);
  if (typeof s == "string")
    r = s;
  else {
    const o = JSON.stringify(t, (c, f) => (f = typeof f == "bigint" ? {
      $bigint: f.toString()
    } : f, f = it(f) ? Object.keys(f).sort().reduce((l, i) => (l[i] = f[i], l), {}) : f, f));
    it(t) && (Ht == null || Ht.set(t, o)), r = o;
  }
  return `${e}(${r})`;
};
function _f(...e) {
  return function(r) {
    const s = tn((a) => {
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
      extractRehydrationInfo: s,
      serializeQueryArgs(a) {
        let u = sn;
        if ("serializeQueryArgs" in a.endpointDefinition) {
          const m = a.endpointDefinition.serializeQueryArgs;
          u = (d) => {
            const x = m(d);
            return typeof x == "string" ? x : sn({
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
      apiUid: fo(),
      extractRehydrationInfo: s,
      hasRehydrationInfo: tn((a) => s(a) != null)
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
            throw new Error(process.env.NODE_ENV === "production" ? be(39) : `called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && Dr(d)) {
          const {
            infiniteQueryOptions: x
          } = d, {
            maxPages: p,
            getPreviousPageParam: g
          } = x;
          if (typeof p == "number") {
            if (p < 1)
              throw new Error(process.env.NODE_ENV === "production" ? be(40) : `maxPages for endpoint '${m}' must be a number greater than 0`);
            if (typeof g != "function")
              throw new Error(process.env.NODE_ENV === "production" ? be(41) : `getPreviousPageParam for endpoint '${m}' must be a function if maxPages is used`);
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
function dt(e, ...t) {
  return Object.assign(e, ...t);
}
var Sf = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const s = `${e.reducerPath}/subscriptions`;
  let o = null, c = null;
  const {
    updateSubscriptionOptions: f,
    unsubscribeQueryResult: l
  } = e.internalActions, i = (x, p) => {
    var v, C, b;
    if (f.match(p)) {
      const {
        queryCacheKey: y,
        requestId: h,
        options: w
      } = p.payload;
      return (v = x == null ? void 0 : x[y]) != null && v[h] && (x[y][h] = w), !0;
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
      } = p, w = x[C = y.queryCacheKey] ?? (x[C] = {});
      return w[`${h}_running`] = {}, y.subscribe && (w[h] = y.subscriptionOptions ?? w[h] ?? {}), !0;
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
          requestId: w
        }
      } = p;
      if (y && h.subscribe) {
        const A = x[b = h.queryCacheKey] ?? (x[b] = {});
        A[w] = h.subscriptionOptions ?? A[w] ?? {}, g = !0;
      }
    }
    return g;
  }, a = () => r.currentSubscriptions, d = {
    getSubscriptions: a,
    getSubscriptionCount: (x) => {
      const g = a()[x] ?? {};
      return Wt(g);
    },
    isRequestSubscribed: (x, p) => {
      var v;
      const g = a();
      return !!((v = g == null ? void 0 : g[x]) != null && v[p]);
    }
  };
  return (x, p) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(x))
      return o = r.currentSubscriptions = {}, c = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(x))
      return [!1, d];
    const g = i(r.currentSubscriptions, x);
    let v = !0;
    if (g) {
      c || (c = setTimeout(() => {
        const y = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, h] = c0(o, () => y);
        p.next(e.internalActions.subscriptionsUpdated(h)), o = y, c = null;
      }, 500));
      const C = typeof x.type == "string" && !!x.type.startsWith(s), b = t.rejected.match(x) && x.meta.condition && !!x.meta.arg.subscribe;
      v = !C && !b;
    }
    return [v, !1];
  };
};
function Bf(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Ff = 2147483647 / 1e3 - 1, Rf = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: s,
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
  } = t.internalActions, u = pt(i.match, r.fulfilled, r.rejected, a.match);
  function m(v) {
    const C = o.currentSubscriptions[v];
    return !!C && !Bf(C);
  }
  const d = {}, x = (v, C, b) => {
    const y = C.getState(), h = f(y);
    if (u(v)) {
      let w;
      if (a.match(v))
        w = v.payload.map((A) => A.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: A
        } = i.match(v) ? v.payload : v.meta.arg;
        w = [A];
      }
      p(w, C, h);
    }
    if (t.util.resetApiState.match(v))
      for (const [w, A] of Object.entries(d))
        A && clearTimeout(A), delete d[w];
    if (s.hasRehydrationInfo(v)) {
      const {
        queries: w
      } = s.extractRehydrationInfo(v);
      p(Object.keys(w), C, h);
    }
  };
  function p(v, C, b) {
    const y = C.getState();
    for (const h of v) {
      const w = c(y, h);
      g(h, w == null ? void 0 : w.endpointName, C, b);
    }
  }
  function g(v, C, b, y) {
    const h = s.endpointDefinitions[C], w = (h == null ? void 0 : h.keepUnusedDataFor) ?? y.keepUnusedDataFor;
    if (w === 1 / 0)
      return;
    const A = Math.max(0, Math.min(w, Ff));
    if (!m(v)) {
      const j = d[v];
      j && clearTimeout(j), d[v] = setTimeout(() => {
        m(v) || b.dispatch(l({
          queryCacheKey: v
        })), delete d[v];
      }, A * 1e3);
    }
  }
  return x;
}, da = new Error("Promise never resolved before cacheEntryRemoved."), Of = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: s,
  mutationThunk: o,
  internalState: c,
  selectors: {
    selectQueryEntry: f,
    selectApiState: l
  }
}) => {
  const i = $s(s), a = $s(o), u = bt(s, o), m = {};
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
    function w(A, j, S, D) {
      const E = f(y, j), N = f(b.getState(), j);
      !E && N && v(A, D, j, b, S);
    }
    if (s.pending.match(C))
      w(C.meta.arg.endpointName, h, C.meta.requestId, C.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(C))
      for (const {
        queryDescription: A,
        value: j
      } of C.payload) {
        const {
          endpointName: S,
          originalArgs: D,
          queryCacheKey: E
        } = A;
        w(S, E, C.meta.requestId, D), d(E, j, {});
      }
    else if (o.pending.match(C))
      b.getState()[t].mutations[h] && v(C.meta.arg.endpointName, C.meta.arg.originalArgs, h, b, C.meta.requestId);
    else if (u(C))
      d(h, C.payload, C.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(C) || e.internalActions.removeMutationResult.match(C))
      x(h);
    else if (e.util.resetApiState.match(C))
      for (const A of Object.keys(m))
        x(A);
  };
  function g(C) {
    return i(C) ? C.meta.arg.queryCacheKey : a(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : e.internalActions.removeQueryResult.match(C) ? C.payload.queryCacheKey : e.internalActions.removeMutationResult.match(C) ? vr(C.payload) : "";
  }
  function v(C, b, y, h, w) {
    const A = r.endpointDefinitions[C], j = A == null ? void 0 : A.onCacheEntryAdded;
    if (!j) return;
    const S = {}, D = new Promise((O) => {
      S.cacheEntryRemoved = O;
    }), E = Promise.race([new Promise((O) => {
      S.valueResolved = O;
    }), D.then(() => {
      throw da;
    })]);
    E.catch(() => {
    }), m[y] = S;
    const N = e.endpoints[C].select(nn(A) ? b : y), k = h.dispatch((O, z, H) => H), _ = {
      ...h,
      getCacheEntry: () => N(h.getState()),
      requestId: w,
      extra: k,
      updateCachedData: nn(A) ? (O) => h.dispatch(e.util.updateQueryData(C, b, O)) : void 0,
      cacheDataLoaded: E,
      cacheEntryRemoved: D
    }, B = j(b, _);
    Promise.resolve(B).catch((O) => {
      if (O !== da)
        throw O;
    });
  }
  return p;
}, Pf = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (s, o) => {
  var c, f;
  e.util.resetApiState.match(s) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(s) && s.payload === t && ((f = (c = o.getState()[r]) == null ? void 0 : c.config) == null ? void 0 : f.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, Tf = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: s,
  queryThunk: o,
  api: c,
  assertTagType: f,
  refetchQuery: l,
  internalState: i
}) => {
  const {
    removeQueryResult: a
  } = c.internalActions, u = pt(bt(s), gn(s)), m = pt(bt(s, o), Kt(s, o));
  let d = [];
  const x = (v, C) => {
    u(v) ? g(A0(v, "invalidatesTags", r, f), C) : m(v) ? g([], C) : c.util.invalidateTags.match(v) && g(po(v.payload, void 0, void 0, void 0, void 0, f), C);
  };
  function p(v) {
    var y;
    const {
      queries: C,
      mutations: b
    } = v;
    for (const h of [C, b])
      for (const w in h)
        if (((y = h[w]) == null ? void 0 : y.status) === "pending") return !0;
    return !1;
  }
  function g(v, C) {
    const b = C.getState(), y = b[e];
    if (d.push(...v), y.config.invalidationBehavior === "delayed" && p(y))
      return;
    const h = d;
    if (d = [], h.length === 0) return;
    const w = c.util.selectInvalidatedBy(b, h);
    t.batch(() => {
      const A = Array.from(w.values());
      for (const {
        queryCacheKey: j
      } of A) {
        const S = y.queries[j], D = i.currentSubscriptions[j] ?? {};
        S && (Wt(D) === 0 ? C.dispatch(a({
          queryCacheKey: j
        })) : S.status !== "uninitialized" && C.dispatch(l(S)));
      }
    });
  }
  return x;
}, Mf = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: s,
  internalState: o
}) => {
  const c = {}, f = (d, x) => {
    (r.internalActions.updateSubscriptionOptions.match(d) || r.internalActions.unsubscribeQueryResult.match(d)) && i(d.payload, x), (t.pending.match(d) || t.rejected.match(d) && d.meta.condition) && i(d.meta.arg, x), (t.fulfilled.match(d) || t.rejected.match(d) && !d.meta.condition) && l(d.meta.arg, x), r.util.resetApiState.match(d) && u();
  };
  function l({
    queryCacheKey: d
  }, x) {
    const p = x.getState()[e], g = p.queries[d], v = o.currentSubscriptions[d];
    if (!g || g.status === "uninitialized") return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: b
    } = m(v);
    if (!Number.isFinite(C)) return;
    const y = c[d];
    y != null && y.timeout && (clearTimeout(y.timeout), y.timeout = void 0);
    const h = Date.now() + C;
    c[d] = {
      nextPollTimestamp: h,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (p.config.focused || !b) && x.dispatch(s(g)), l({
          queryCacheKey: d
        }, x);
      }, C)
    };
  }
  function i({
    queryCacheKey: d
  }, x) {
    const g = x.getState()[e].queries[d], v = o.currentSubscriptions[d];
    if (!g || g.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: C
    } = m(v);
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
}, Lf = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: s
}) => {
  const o = uo(r, s), c = Kt(r, s), f = bt(r, s), l = {};
  return (a, u) => {
    var m, d;
    if (o(a)) {
      const {
        requestId: x,
        arg: {
          endpointName: p,
          originalArgs: g
        }
      } = a.meta, v = t.endpointDefinitions[p], C = v == null ? void 0 : v.onQueryStarted;
      if (C) {
        const b = {}, y = new Promise((j, S) => {
          b.resolve = j, b.reject = S;
        });
        y.catch(() => {
        }), l[x] = b;
        const h = e.endpoints[p].select(nn(v) ? g : x), w = u.dispatch((j, S, D) => D), A = {
          ...u,
          getCacheEntry: () => h(u.getState()),
          requestId: x,
          extra: w,
          updateCachedData: nn(v) ? (j) => u.dispatch(e.util.updateQueryData(p, g, j)) : void 0,
          queryFulfilled: y
        };
        C(g, A);
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
}, If = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: s,
  internalState: o
}) => {
  const {
    removeQueryResult: c
  } = r.internalActions, f = (i, a) => {
    xo.match(i) && l(a, "refetchOnFocus"), ho.match(i) && l(a, "refetchOnReconnect");
  };
  function l(i, a) {
    const u = i.getState()[e], m = u.queries, d = o.currentSubscriptions;
    t.batch(() => {
      for (const x of Object.keys(d)) {
        const p = m[x], g = d[x];
        if (!g || !p) continue;
        (Object.values(g).some((C) => C[a] === !0) || Object.values(g).every((C) => C[a] === void 0) && u.config[a]) && (Wt(g) === 0 ? i.dispatch(c({
          queryCacheKey: x
        })) : p.status !== "uninitialized" && i.dispatch(s(p)));
      }
    });
  }
  return f;
};
function zf(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: s,
    context: o
  } = e, {
    apiUid: c
  } = o, f = {
    invalidateTags: Je(`${t}/invalidateTags`)
  }, l = (m) => m.type.startsWith(`${t}/`), i = [Pf, Rf, Tf, Mf, Of, Lf];
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
      }, g = i.map((b) => b(p)), v = Sf(p), C = If(p);
      return (b) => (y) => {
        if (!oo(y))
          return b(y);
        d || (d = !0, m.dispatch(s.internalActions.middlewareRegistered(c)));
        const h = {
          ...m,
          next: b
        }, w = m.getState(), [A, j] = v(y, h, w);
        let S;
        if (A ? S = b(y) : S = j, m.getState()[t] && (C(y, h, w), l(y) || o.hasRehydrationInfo(y)))
          for (const D of g)
            D(y, h, w);
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
var fa = /* @__PURE__ */ Symbol(), $f = ({
  createSelector: e = lo
} = {}) => ({
  name: fa,
  init(t, {
    baseQuery: r,
    tagTypes: s,
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
    vd();
    const g = (G) => (typeof process < "u" && process.env.NODE_ENV === "development" && (s.includes(G.type) || console.error(`Tag type '${G.type}' was used, but not specified in \`tagTypes\`!`)), G);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: ho,
        onOffline: C0,
        onFocus: xo,
        onFocusLost: w0
      },
      util: {}
    });
    const v = kf({
      serializeQueryArgs: c,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: b,
      buildQuerySelector: y,
      buildInfiniteQuerySelector: h,
      buildMutationSelector: w
    } = v;
    dt(t.util, {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: b
    });
    const {
      queryThunk: A,
      infiniteQueryThunk: j,
      mutationThunk: S,
      patchQueryData: D,
      updateQueryData: E,
      upsertQueryData: N,
      prefetch: k,
      buildMatchThunkActions: _
    } = Nf({
      baseQuery: r,
      reducerPath: o,
      context: p,
      api: t,
      serializeQueryArgs: c,
      assertTagType: g,
      selectors: v,
      onSchemaFailure: m,
      catchSchemaFailure: d,
      skipSchemaValidation: x
    }), {
      reducer: B,
      actions: O
    } = Df({
      context: p,
      queryThunk: A,
      infiniteQueryThunk: j,
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
    dt(t.util, {
      patchQueryData: D,
      updateQueryData: E,
      upsertQueryData: N,
      prefetch: k,
      resetApiState: O.resetApiState,
      upsertQueryEntries: O.cacheEntriesUpserted
    }), dt(t.internalActions, O);
    const {
      middleware: z,
      actions: H
    } = zf({
      reducerPath: o,
      context: p,
      queryThunk: A,
      mutationThunk: S,
      infiniteQueryThunk: j,
      api: t,
      assertTagType: g,
      selectors: v
    });
    dt(t.util, H), dt(t, {
      reducer: B,
      middleware: z
    });
    const {
      buildInitiateQuery: I,
      buildInitiateInfiniteQuery: L,
      buildInitiateMutation: Y,
      getRunningMutationThunk: T,
      getRunningMutationsThunk: $,
      getRunningQueriesThunk: R,
      getRunningQueryThunk: P
    } = jf({
      queryThunk: A,
      mutationThunk: S,
      infiniteQueryThunk: j,
      api: t,
      serializeQueryArgs: c,
      context: p
    });
    return dt(t.util, {
      getRunningMutationThunk: T,
      getRunningMutationsThunk: $,
      getRunningQueryThunk: P,
      getRunningQueriesThunk: R
    }), {
      name: fa,
      injectEndpoint(G, ee) {
        var we;
        const J = (we = t.endpoints)[G] ?? (we[G] = {});
        yn(ee) && dt(J, {
          name: G,
          select: y(G, ee),
          initiate: I(G, ee)
        }, _(A, G)), wf(ee) && dt(J, {
          name: G,
          select: w(),
          initiate: Y(G)
        }, _(S, G)), Dr(ee) && dt(J, {
          name: G,
          select: h(G, ee),
          initiate: L(G, ee)
        }, _(A, G));
      }
    };
  }
}), Vs = { exports: {} }, Tn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function Hf() {
  if (xa) return Tn;
  xa = 1;
  var e = Vt;
  function t(i, a) {
    return i === a && (i !== 0 || 1 / i === 1 / a) || i !== i && a !== a;
  }
  var r = typeof Object.is == "function" ? Object.is : t, s = e.useSyncExternalStore, o = e.useRef, c = e.useEffect, f = e.useMemo, l = e.useDebugValue;
  return Tn.useSyncExternalStoreWithSelector = function(i, a, u, m, d) {
    var x = o(null);
    if (x.current === null) {
      var p = { hasValue: !1, value: null };
      x.current = p;
    } else p = x.current;
    x = f(
      function() {
        function v(w) {
          if (!C) {
            if (C = !0, b = w, w = m(w), d !== void 0 && p.hasValue) {
              var A = p.value;
              if (d(A, w))
                return y = A;
            }
            return y = w;
          }
          if (A = y, r(b, w)) return A;
          var j = m(w);
          return d !== void 0 && d(A, j) ? (b = w, A) : (b = w, y = j);
        }
        var C = !1, b, y, h = u === void 0 ? null : u;
        return [
          function() {
            return v(a());
          },
          h === null ? void 0 : function() {
            return v(h());
          }
        ];
      },
      [a, u, m, d]
    );
    var g = s(i, x[0], x[1]);
    return c(
      function() {
        p.hasValue = !0, p.value = g;
      },
      [g]
    ), l(g), g;
  }, Tn;
}
var Mn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ha;
function qf() {
  return ha || (ha = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i, a) {
      return i === a && (i !== 0 || 1 / i === 1 / a) || i !== i && a !== a;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Vt, r = typeof Object.is == "function" ? Object.is : e, s = t.useSyncExternalStore, o = t.useRef, c = t.useEffect, f = t.useMemo, l = t.useDebugValue;
    Mn.useSyncExternalStoreWithSelector = function(i, a, u, m, d) {
      var x = o(null);
      if (x.current === null) {
        var p = { hasValue: !1, value: null };
        x.current = p;
      } else p = x.current;
      x = f(
        function() {
          function v(w) {
            if (!C) {
              if (C = !0, b = w, w = m(w), d !== void 0 && p.hasValue) {
                var A = p.value;
                if (d(A, w))
                  return y = A;
              }
              return y = w;
            }
            if (A = y, r(b, w))
              return A;
            var j = m(w);
            return d !== void 0 && d(A, j) ? (b = w, A) : (b = w, y = j);
          }
          var C = !1, b, y, h = u === void 0 ? null : u;
          return [
            function() {
              return v(a());
            },
            h === null ? void 0 : function() {
              return v(h());
            }
          ];
        },
        [a, u, m, d]
      );
      var g = s(i, x[0], x[1]);
      return c(
        function() {
          p.hasValue = !0, p.value = g;
        },
        [g]
      ), l(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Mn;
}
process.env.NODE_ENV === "production" ? Vs.exports = Hf() : Vs.exports = qf();
var Wf = Vs.exports;
function Vf(e) {
  e();
}
function pa(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function lr(e, t) {
  if (pa(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !pa(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
var Ln = /* @__PURE__ */ Symbol.for("react-redux-context"), In = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Uf() {
  if (!V.createContext) return {};
  const e = In[Ln] ?? (In[Ln] = /* @__PURE__ */ new Map());
  let t = e.get(V.createContext);
  return t || (t = V.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(V.createContext, t)), t;
}
var Ot = /* @__PURE__ */ Uf();
function mo(e = Ot) {
  return function() {
    const r = V.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var D0 = /* @__PURE__ */ mo();
function k0(e = Ot) {
  const t = e === Ot ? D0 : (
    // @ts-ignore
    mo(e)
  ), r = () => {
    const { store: s } = t();
    return s;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var _0 = /* @__PURE__ */ k0();
function Qf(e = Ot) {
  const t = e === Ot ? _0 : k0(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Kf = /* @__PURE__ */ Qf(), Gf = (e, t) => e === t;
function Yf(e = Ot) {
  const t = e === Ot ? D0 : mo(e), r = (s, o = {}) => {
    const { equalityFn: c = Gf } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!s)
        throw new Error("You must pass a selector to useSelector");
      if (typeof s != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof c != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const f = t(), { store: l, subscription: i, getServerState: a } = f, u = V.useRef(!0), m = V.useCallback(
      {
        [s.name](x) {
          const p = s(x);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: g = {} } = typeof o == "function" ? {} : o, { identityFunctionCheck: v, stabilityCheck: C } = f, {
              identityFunctionCheck: b,
              stabilityCheck: y
            } = {
              stabilityCheck: C,
              identityFunctionCheck: v,
              ...g
            };
            if (y === "always" || y === "once" && u.current) {
              const h = s(x);
              if (!c(p, h)) {
                let w;
                try {
                  throw new Error();
                } catch (A) {
                  ({ stack: w } = A);
                }
                console.warn(
                  "Selector " + (s.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: x,
                    selected: p,
                    selected2: h,
                    stack: w
                  }
                );
              }
            }
            if ((b === "always" || b === "once" && u.current) && p === x) {
              let h;
              try {
                throw new Error();
              } catch (w) {
                ({ stack: h } = w);
              }
              console.warn(
                "Selector " + (s.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: h }
              );
            }
            u.current && (u.current = !1);
          }
          return p;
        }
      }[s.name],
      [s]
    ), d = Wf.useSyncExternalStoreWithSelector(
      i.addNestedSub,
      l.getState,
      a || l.getState,
      m,
      c
    );
    return V.useDebugValue(d), d;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Xf = /* @__PURE__ */ Yf(), Zf = Vf;
function $r(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Jf(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
function ex(e) {
  return e.type === "query";
}
function tx(e) {
  return e.type === "mutation";
}
function S0(e) {
  return e.type === "infinitequery";
}
function or(e, ...t) {
  return Object.assign(e, ...t);
}
var zn = Symbol();
function $n(e, t, r, s) {
  const o = Le(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: s
    }) : e
  }), [e, t, r, s]), c = ke(o);
  return Ae(() => {
    c.current.serialized !== o.serialized && (c.current = o);
  }, [o]), c.current.serialized === o.serialized ? c.current.queryArgs : e;
}
function Hr(e) {
  const t = ke(e);
  return Ae(() => {
    lr(t.current, e) || (t.current = e);
  }, [e]), lr(t.current, e) ? t.current : e;
}
var rx = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nx = /* @__PURE__ */ rx(), sx = () => typeof navigator < "u" && navigator.product === "ReactNative", ox = /* @__PURE__ */ sx(), ax = () => nx || ox ? Ja : Ae, ix = /* @__PURE__ */ ax(), ma = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: v0.pending
} : e;
function Hn(e, ...t) {
  const r = {};
  return t.forEach((s) => {
    r[s] = e[s];
  }), r;
}
var qn = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function cx({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: s,
      useStore: o
    },
    unstable__sideEffectsInRender: c,
    createSelector: f
  },
  serializeQueryArgs: l,
  context: i
}) {
  const a = c ? (h) => h() : Ae;
  return {
    buildQueryHooks: C,
    buildInfiniteQueryHooks: b,
    buildMutationHook: y,
    usePrefetch: d
  };
  function u(h, w, A) {
    if (w != null && w.endpointName && h.isUninitialized) {
      const {
        endpointName: k
      } = w, _ = i.endpointDefinitions[k];
      A !== Ze && l({
        queryArgs: w.originalArgs,
        endpointDefinition: _,
        endpointName: k
      }) === l({
        queryArgs: A,
        endpointDefinition: _,
        endpointName: k
      }) && (w = void 0);
    }
    let j = h.isSuccess ? h.data : w == null ? void 0 : w.data;
    j === void 0 && (j = h.data);
    const S = j !== void 0, D = h.isLoading, E = (!w || w.isLoading || w.isUninitialized) && !S && D, N = h.isSuccess || S && (D && !(w != null && w.isError) || h.isUninitialized);
    return {
      ...h,
      data: j,
      currentData: h.data,
      isFetching: D,
      isLoading: E,
      isSuccess: N
    };
  }
  function m(h, w, A) {
    if (w != null && w.endpointName && h.isUninitialized) {
      const {
        endpointName: k
      } = w, _ = i.endpointDefinitions[k];
      A !== Ze && l({
        queryArgs: w.originalArgs,
        endpointDefinition: _,
        endpointName: k
      }) === l({
        queryArgs: A,
        endpointDefinition: _,
        endpointName: k
      }) && (w = void 0);
    }
    let j = h.isSuccess ? h.data : w == null ? void 0 : w.data;
    j === void 0 && (j = h.data);
    const S = j !== void 0, D = h.isLoading, E = (!w || w.isLoading || w.isUninitialized) && !S && D, N = h.isSuccess || D && S;
    return {
      ...h,
      data: j,
      currentData: h.data,
      isFetching: D,
      isLoading: E,
      isSuccess: N
    };
  }
  function d(h, w) {
    const A = r(), j = Hr(w);
    return nt((S, D) => A(e.util.prefetch(h, S, {
      ...j,
      ...D
    })), [h, A, j]);
  }
  function x(h, w, {
    refetchOnReconnect: A,
    refetchOnFocus: j,
    refetchOnMountOrArgChange: S,
    skip: D = !1,
    pollingInterval: E = 0,
    skipPollingIfUnfocused: N = !1,
    ...k
  } = {}) {
    const {
      initiate: _
    } = e.endpoints[h], B = r(), O = ke(void 0);
    if (!O.current) {
      const G = B(e.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof G != "object" || typeof (G == null ? void 0 : G.type) == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? be(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      O.current = G;
    }
    const z = $n(
      D ? Ze : w,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      sn,
      i.endpointDefinitions[h],
      h
    ), H = Hr({
      refetchOnReconnect: A,
      refetchOnFocus: j,
      pollingInterval: E,
      skipPollingIfUnfocused: N
    }), I = k.initialPageParam, L = Hr(I), Y = ke(void 0);
    let {
      queryCacheKey: T,
      requestId: $
    } = Y.current || {}, R = !1;
    T && $ && (R = O.current.isRequestSubscribed(T, $));
    const P = !R && Y.current !== void 0;
    return a(() => {
      P && (Y.current = void 0);
    }, [P]), a(() => {
      var ie;
      const G = Y.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(P), z === Ze) {
        G == null || G.unsubscribe(), Y.current = void 0;
        return;
      }
      const ee = (ie = Y.current) == null ? void 0 : ie.subscriptionOptions;
      if (!G || G.arg !== z) {
        G == null || G.unsubscribe();
        const J = B(_(z, {
          subscriptionOptions: H,
          forceRefetch: S,
          ...S0(i.endpointDefinitions[h]) ? {
            initialPageParam: L
          } : {}
        }));
        Y.current = J;
      } else H !== ee && G.updateSubscriptionOptions(H);
    }, [B, _, S, z, H, P, L, h]), [Y, B, _, H];
  }
  function p(h, w) {
    return (j, {
      skip: S = !1,
      selectFromResult: D
    } = {}) => {
      const {
        select: E
      } = e.endpoints[h], N = $n(S ? Ze : j, l, i.endpointDefinitions[h], h), k = ke(void 0), _ = Le(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        f([
          // @ts-ignore
          E(N),
          (I, L) => L,
          (I) => N
        ], w, {
          memoizeOptions: {
            resultEqualityCheck: lr
          }
        })
      ), [E, N]), B = Le(() => D ? f([_], D, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : _, [_, D]), O = s((I) => B(I, k.current), lr), z = o(), H = _(z.getState(), k.current);
      return ix(() => {
        k.current = H;
      }, [H]), O;
    };
  }
  function g(h) {
    Ae(() => () => {
      var w, A;
      (A = (w = h.current) == null ? void 0 : w.unsubscribe) == null || A.call(w), h.current = void 0;
    }, [h]);
  }
  function v(h) {
    if (!h.current) throw new Error(process.env.NODE_ENV === "production" ? be(38) : "Cannot refetch a query that has not been started yet.");
    return h.current.refetch();
  }
  function C(h) {
    const w = (S, D = {}) => {
      const [E] = x(h, S, D);
      return g(E), Le(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => v(E)
      }), [E]);
    }, A = ({
      refetchOnReconnect: S,
      refetchOnFocus: D,
      pollingInterval: E = 0,
      skipPollingIfUnfocused: N = !1
    } = {}) => {
      const {
        initiate: k
      } = e.endpoints[h], _ = r(), [B, O] = Z(zn), z = ke(void 0), H = Hr({
        refetchOnReconnect: S,
        refetchOnFocus: D,
        pollingInterval: E,
        skipPollingIfUnfocused: N
      });
      a(() => {
        var $, R;
        const T = ($ = z.current) == null ? void 0 : $.subscriptionOptions;
        H !== T && ((R = z.current) == null || R.updateSubscriptionOptions(H));
      }, [H]);
      const I = ke(H);
      a(() => {
        I.current = H;
      }, [H]);
      const L = nt(function(T, $ = !1) {
        let R;
        return t(() => {
          var P;
          (P = z.current) == null || P.unsubscribe(), z.current = R = _(k(T, {
            subscriptionOptions: I.current,
            forceRefetch: !$
          })), O(T);
        }), R;
      }, [_, k]), Y = nt(() => {
        var T, $;
        (T = z.current) != null && T.queryCacheKey && _(e.internalActions.removeQueryResult({
          queryCacheKey: ($ = z.current) == null ? void 0 : $.queryCacheKey
        }));
      }, [_]);
      return Ae(() => () => {
        var T;
        (T = z == null ? void 0 : z.current) == null || T.unsubscribe();
      }, []), Ae(() => {
        B !== zn && !z.current && L(B, !0);
      }, [B, L]), Le(() => [L, B, {
        reset: Y
      }], [L, B, Y]);
    }, j = p(h, u);
    return {
      useQueryState: j,
      useQuerySubscription: w,
      useLazyQuerySubscription: A,
      useLazyQuery(S) {
        const [D, E, {
          reset: N
        }] = A(S), k = j(E, {
          ...S,
          skip: E === zn
        }), _ = Le(() => ({
          lastArg: E
        }), [E]);
        return Le(() => [D, {
          ...k,
          reset: N
        }, _], [D, k, N, _]);
      },
      useQuery(S, D) {
        const E = w(S, D), N = j(S, {
          selectFromResult: S === Ze || D != null && D.skip ? void 0 : ma,
          ...D
        }), k = Hn(N, ...qn);
        return An(k), Le(() => ({
          ...N,
          ...E
        }), [N, E]);
      }
    };
  }
  function b(h) {
    const w = (j, S = {}) => {
      const [D, E, N, k] = x(h, j, S), _ = ke(k);
      a(() => {
        _.current = k;
      }, [k]);
      const B = nt(function(H, I) {
        let L;
        return t(() => {
          var Y;
          (Y = D.current) == null || Y.unsubscribe(), D.current = L = E(N(H, {
            subscriptionOptions: _.current,
            direction: I
          }));
        }), L;
      }, [D, E, N]);
      g(D);
      const O = $n(
        S.skip ? Ze : j,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        sn,
        i.endpointDefinitions[h],
        h
      ), z = nt(() => v(D), [D]);
      return Le(() => ({
        trigger: B,
        /**
         * A method to manually refetch data for the query
         */
        refetch: z,
        fetchNextPage: () => B(O, "forward"),
        fetchPreviousPage: () => B(O, "backward")
      }), [z, B, O]);
    }, A = p(h, m);
    return {
      useInfiniteQueryState: A,
      useInfiniteQuerySubscription: w,
      useInfiniteQuery(j, S) {
        const {
          refetch: D,
          fetchNextPage: E,
          fetchPreviousPage: N
        } = w(j, S), k = A(j, {
          selectFromResult: j === Ze || S != null && S.skip ? void 0 : ma,
          ...S
        }), _ = Hn(k, ...qn, "hasNextPage", "hasPreviousPage");
        return An(_), Le(() => ({
          ...k,
          fetchNextPage: E,
          fetchPreviousPage: N,
          refetch: D
        }), [k, E, N, D]);
      }
    };
  }
  function y(h) {
    return ({
      selectFromResult: w,
      fixedCacheKey: A
    } = {}) => {
      const {
        select: j,
        initiate: S
      } = e.endpoints[h], D = r(), [E, N] = Z();
      Ae(() => () => {
        E != null && E.arg.fixedCacheKey || E == null || E.reset();
      }, [E]);
      const k = nt(function(T) {
        const $ = D(S(T, {
          fixedCacheKey: A
        }));
        return N($), $;
      }, [D, S, A]), {
        requestId: _
      } = E || {}, B = Le(() => j({
        fixedCacheKey: A,
        requestId: E == null ? void 0 : E.requestId
      }), [A, E, j]), O = Le(() => w ? f([B], w) : B, [w, B]), z = s(O, lr), H = A == null ? E == null ? void 0 : E.arg.originalArgs : void 0, I = nt(() => {
        t(() => {
          E && N(void 0), A && D(e.internalActions.removeMutationResult({
            requestId: _,
            fixedCacheKey: A
          }));
        });
      }, [D, A, E, _]), L = Hn(z, ...qn, "endpointName");
      An(L);
      const Y = Le(() => ({
        ...z,
        originalArgs: H,
        reset: I
      }), [z, H, I]);
      return Le(() => [k, Y], [k, Y]);
    };
  }
}
var lx = /* @__PURE__ */ Symbol(), ux = ({
  batch: e = Zf,
  hooks: t = {
    useDispatch: Kf,
    useSelector: Xf,
    useStore: _0
  },
  createSelector: r = lo,
  unstable__sideEffectsInRender: s = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const c = ["useDispatch", "useSelector", "useStore"];
    let f = !1;
    for (const l of c)
      if (Jf(o) > 0 && (o[l] && (f || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), f = !0)), t[l] = o[l]), typeof t[l] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? be(36) : `When using custom hooks for context, all ${c.length} hooks need to be provided: ${c.join(", ")}.
Hook ${l} was either not provided or not a function.`);
  }
  return {
    name: lx,
    init(c, {
      serializeQueryArgs: f
    }, l) {
      const i = c, {
        buildQueryHooks: a,
        buildInfiniteQueryHooks: u,
        buildMutationHook: m,
        usePrefetch: d
      } = cx({
        api: c,
        moduleOptions: {
          batch: e,
          hooks: t,
          unstable__sideEffectsInRender: s,
          createSelector: r
        },
        serializeQueryArgs: f,
        context: l
      });
      return or(i, {
        usePrefetch: d
      }), or(l, {
        batch: e
      }), {
        injectEndpoint(x, p) {
          if (ex(p)) {
            const {
              useQuery: g,
              useLazyQuery: v,
              useLazyQuerySubscription: C,
              useQueryState: b,
              useQuerySubscription: y
            } = a(x);
            or(i.endpoints[x], {
              useQuery: g,
              useLazyQuery: v,
              useLazyQuerySubscription: C,
              useQueryState: b,
              useQuerySubscription: y
            }), c[`use${$r(x)}Query`] = g, c[`useLazy${$r(x)}Query`] = v;
          }
          if (tx(p)) {
            const g = m(x);
            or(i.endpoints[x], {
              useMutation: g
            }), c[`use${$r(x)}Mutation`] = g;
          } else if (S0(p)) {
            const {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: v,
              useInfiniteQueryState: C
            } = u(x);
            or(i.endpoints[x], {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: v,
              useInfiniteQueryState: C
            }), c[`use${$r(x)}InfiniteQuery`] = g;
          }
        }
      };
    }
  };
}, dx = /* @__PURE__ */ _f($f(), ux()), B0 = { exports: {} };
function fx(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Wn = { exports: {} };
const xx = {}, hx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xx
}, Symbol.toStringTag, { value: "Module" })), px = /* @__PURE__ */ q0(hx);
var ga;
function me() {
  return ga || (ga = 1, function(e, t) {
    (function(r, s) {
      e.exports = s();
    })(fe, function() {
      var r = r || function(s, o) {
        var c;
        if (typeof window < "u" && window.crypto && (c = window.crypto), typeof self < "u" && self.crypto && (c = self.crypto), typeof globalThis < "u" && globalThis.crypto && (c = globalThis.crypto), !c && typeof window < "u" && window.msCrypto && (c = window.msCrypto), !c && typeof fe < "u" && fe.crypto && (c = fe.crypto), !c && typeof fx == "function")
          try {
            c = px;
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
            var y = this.words, h = b.words, w = this.sigBytes, A = b.sigBytes;
            if (this.clamp(), w % 4)
              for (var j = 0; j < A; j++) {
                var S = h[j >>> 2] >>> 24 - j % 4 * 8 & 255;
                y[w + j >>> 2] |= S << 24 - (w + j) % 4 * 8;
              }
            else
              for (var D = 0; D < A; D += 4)
                y[w + D >>> 2] = h[D >>> 2];
            return this.sigBytes += A, this;
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
            b[y >>> 2] &= 4294967295 << 32 - y % 4 * 8, b.length = s.ceil(y / 4);
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
            for (var y = b.words, h = b.sigBytes, w = [], A = 0; A < h; A++) {
              var j = y[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              w.push((j >>> 4).toString(16)), w.push((j & 15).toString(16));
            }
            return w.join("");
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
            for (var y = b.length, h = [], w = 0; w < y; w += 2)
              h[w >>> 3] |= parseInt(b.substr(w, 2), 16) << 24 - w % 8 * 4;
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
            for (var y = b.words, h = b.sigBytes, w = [], A = 0; A < h; A++) {
              var j = y[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              w.push(String.fromCharCode(j));
            }
            return w.join("");
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
            for (var y = b.length, h = [], w = 0; w < y; w++)
              h[w >>> 2] |= (b.charCodeAt(w) & 255) << 24 - w % 4 * 8;
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
        }, v = a.BufferedBlockAlgorithm = u.extend({
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
            var y, h = this._data, w = h.words, A = h.sigBytes, j = this.blockSize, S = j * 4, D = A / S;
            b ? D = s.ceil(D) : D = s.max((D | 0) - this._minBufferSize, 0);
            var E = D * j, N = s.min(E * 4, A);
            if (E) {
              for (var k = 0; k < E; k += j)
                this._doProcessBlock(w, k);
              y = w.splice(0, E), h.sigBytes -= N;
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
        a.Hasher = v.extend({
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
            v.reset.call(this), this._doReset();
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
  }(Wn)), Wn.exports;
}
var Vn = { exports: {} }, ya;
function vn() {
  return ya || (ya = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function(s) {
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
            a = this.words = a || [], u != s ? this.sigBytes = u : this.sigBytes = a.length * 8;
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
  }(Vn)), Vn.exports;
}
var Un = { exports: {} }, va;
function mx() {
  return va || (va = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var s = r, o = s.lib, c = o.WordArray, f = c.init, l = c.init = function(i) {
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
  }(Un)), Un.exports;
}
var Qn = { exports: {} }, ba;
function gx() {
  return ba || (ba = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.WordArray, f = s.enc;
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
  }(Qn)), Qn.exports;
}
var Kn = { exports: {} }, wa;
function Tt() {
  return wa || (wa = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.WordArray, f = s.enc;
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
              for (var p = a[x >>> 2] >>> 24 - x % 4 * 8 & 255, g = a[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255, v = a[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, C = p << 16 | g << 8 | v, b = 0; b < 4 && x + b * 0.75 < u; b++)
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
              var p = u[i.charCodeAt(x - 1)] << x % 4 * 2, g = u[i.charCodeAt(x)] >>> 6 - x % 4 * 2, v = p | g;
              m[d >>> 2] |= v << 24 - d % 4 * 8, d++;
            }
          return c.create(m, d);
        }
      }(), r.enc.Base64;
    });
  }(Kn)), Kn.exports;
}
var Gn = { exports: {} }, Ca;
function yx() {
  return Ca || (Ca = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.WordArray, f = s.enc;
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
              for (var g = u[p >>> 2] >>> 24 - p % 4 * 8 & 255, v = u[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, C = u[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, b = g << 16 | v << 8 | C, y = 0; y < 4 && p + y * 0.75 < m; y++)
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
              var p = u[i.charCodeAt(x - 1)] << x % 4 * 2, g = u[i.charCodeAt(x)] >>> 6 - x % 4 * 2, v = p | g;
              m[d >>> 2] |= v << 24 - d % 4 * 8, d++;
            }
          return c.create(m, d);
        }
      }(), r.enc.Base64url;
    });
  }(Gn)), Gn.exports;
}
var Yn = { exports: {} }, Ea;
function Mt() {
  return Ea || (Ea = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function(s) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.algo, a = [];
        (function() {
          for (var g = 0; g < 64; g++)
            a[g] = s.abs(s.sin(g + 1)) * 4294967296 | 0;
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
          _doProcessBlock: function(g, v) {
            for (var C = 0; C < 16; C++) {
              var b = v + C, y = g[b];
              g[b] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360;
            }
            var h = this._hash.words, w = g[v + 0], A = g[v + 1], j = g[v + 2], S = g[v + 3], D = g[v + 4], E = g[v + 5], N = g[v + 6], k = g[v + 7], _ = g[v + 8], B = g[v + 9], O = g[v + 10], z = g[v + 11], H = g[v + 12], I = g[v + 13], L = g[v + 14], Y = g[v + 15], T = h[0], $ = h[1], R = h[2], P = h[3];
            T = m(T, $, R, P, w, 7, a[0]), P = m(P, T, $, R, A, 12, a[1]), R = m(R, P, T, $, j, 17, a[2]), $ = m($, R, P, T, S, 22, a[3]), T = m(T, $, R, P, D, 7, a[4]), P = m(P, T, $, R, E, 12, a[5]), R = m(R, P, T, $, N, 17, a[6]), $ = m($, R, P, T, k, 22, a[7]), T = m(T, $, R, P, _, 7, a[8]), P = m(P, T, $, R, B, 12, a[9]), R = m(R, P, T, $, O, 17, a[10]), $ = m($, R, P, T, z, 22, a[11]), T = m(T, $, R, P, H, 7, a[12]), P = m(P, T, $, R, I, 12, a[13]), R = m(R, P, T, $, L, 17, a[14]), $ = m($, R, P, T, Y, 22, a[15]), T = d(T, $, R, P, A, 5, a[16]), P = d(P, T, $, R, N, 9, a[17]), R = d(R, P, T, $, z, 14, a[18]), $ = d($, R, P, T, w, 20, a[19]), T = d(T, $, R, P, E, 5, a[20]), P = d(P, T, $, R, O, 9, a[21]), R = d(R, P, T, $, Y, 14, a[22]), $ = d($, R, P, T, D, 20, a[23]), T = d(T, $, R, P, B, 5, a[24]), P = d(P, T, $, R, L, 9, a[25]), R = d(R, P, T, $, S, 14, a[26]), $ = d($, R, P, T, _, 20, a[27]), T = d(T, $, R, P, I, 5, a[28]), P = d(P, T, $, R, j, 9, a[29]), R = d(R, P, T, $, k, 14, a[30]), $ = d($, R, P, T, H, 20, a[31]), T = x(T, $, R, P, E, 4, a[32]), P = x(P, T, $, R, _, 11, a[33]), R = x(R, P, T, $, z, 16, a[34]), $ = x($, R, P, T, L, 23, a[35]), T = x(T, $, R, P, A, 4, a[36]), P = x(P, T, $, R, D, 11, a[37]), R = x(R, P, T, $, k, 16, a[38]), $ = x($, R, P, T, O, 23, a[39]), T = x(T, $, R, P, I, 4, a[40]), P = x(P, T, $, R, w, 11, a[41]), R = x(R, P, T, $, S, 16, a[42]), $ = x($, R, P, T, N, 23, a[43]), T = x(T, $, R, P, B, 4, a[44]), P = x(P, T, $, R, H, 11, a[45]), R = x(R, P, T, $, Y, 16, a[46]), $ = x($, R, P, T, j, 23, a[47]), T = p(T, $, R, P, w, 6, a[48]), P = p(P, T, $, R, k, 10, a[49]), R = p(R, P, T, $, L, 15, a[50]), $ = p($, R, P, T, E, 21, a[51]), T = p(T, $, R, P, H, 6, a[52]), P = p(P, T, $, R, S, 10, a[53]), R = p(R, P, T, $, O, 15, a[54]), $ = p($, R, P, T, A, 21, a[55]), T = p(T, $, R, P, _, 6, a[56]), P = p(P, T, $, R, Y, 10, a[57]), R = p(R, P, T, $, N, 15, a[58]), $ = p($, R, P, T, I, 21, a[59]), T = p(T, $, R, P, D, 6, a[60]), P = p(P, T, $, R, z, 10, a[61]), R = p(R, P, T, $, j, 15, a[62]), $ = p($, R, P, T, B, 21, a[63]), h[0] = h[0] + T | 0, h[1] = h[1] + $ | 0, h[2] = h[2] + R | 0, h[3] = h[3] + P | 0;
          },
          _doFinalize: function() {
            var g = this._data, v = g.words, C = this._nDataBytes * 8, b = g.sigBytes * 8;
            v[b >>> 5] |= 128 << 24 - b % 32;
            var y = s.floor(C / 4294967296), h = C;
            v[(b + 64 >>> 9 << 4) + 15] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, v[(b + 64 >>> 9 << 4) + 14] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, g.sigBytes = (v.length + 1) * 4, this._process();
            for (var w = this._hash, A = w.words, j = 0; j < 4; j++) {
              var S = A[j];
              A[j] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            return w;
          },
          clone: function() {
            var g = l.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        function m(g, v, C, b, y, h, w) {
          var A = g + (v & C | ~v & b) + y + w;
          return (A << h | A >>> 32 - h) + v;
        }
        function d(g, v, C, b, y, h, w) {
          var A = g + (v & b | C & ~b) + y + w;
          return (A << h | A >>> 32 - h) + v;
        }
        function x(g, v, C, b, y, h, w) {
          var A = g + (v ^ C ^ b) + y + w;
          return (A << h | A >>> 32 - h) + v;
        }
        function p(g, v, C, b, y, h, w) {
          var A = g + (C ^ (v | ~b)) + y + w;
          return (A << h | A >>> 32 - h) + v;
        }
        o.MD5 = l._createHelper(u), o.HmacMD5 = l._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(Yn)), Yn.exports;
}
var Xn = { exports: {} }, ja;
function F0() {
  return ja || (ja = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.WordArray, f = o.Hasher, l = s.algo, i = [], a = l.SHA1 = f.extend({
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
            for (var d = this._hash.words, x = d[0], p = d[1], g = d[2], v = d[3], C = d[4], b = 0; b < 80; b++) {
              if (b < 16)
                i[b] = u[m + b] | 0;
              else {
                var y = i[b - 3] ^ i[b - 8] ^ i[b - 14] ^ i[b - 16];
                i[b] = y << 1 | y >>> 31;
              }
              var h = (x << 5 | x >>> 27) + C + i[b];
              b < 20 ? h += (p & g | ~p & v) + 1518500249 : b < 40 ? h += (p ^ g ^ v) + 1859775393 : b < 60 ? h += (p & g | p & v | g & v) - 1894007588 : h += (p ^ g ^ v) - 899497514, C = v, v = g, g = p << 30 | p >>> 2, p = x, x = h;
            }
            d[0] = d[0] + x | 0, d[1] = d[1] + p | 0, d[2] = d[2] + g | 0, d[3] = d[3] + v | 0, d[4] = d[4] + C | 0;
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
        s.SHA1 = f._createHelper(a), s.HmacSHA1 = f._createHmacHelper(a);
      }(), r.SHA1;
    });
  }(Xn)), Xn.exports;
}
var Zn = { exports: {} }, Aa;
function go() {
  return Aa || (Aa = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      return function(s) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.algo, a = [], u = [];
        (function() {
          function x(C) {
            for (var b = s.sqrt(C), y = 2; y <= b; y++)
              if (!(C % y))
                return !1;
            return !0;
          }
          function p(C) {
            return (C - (C | 0)) * 4294967296 | 0;
          }
          for (var g = 2, v = 0; v < 64; )
            x(g) && (v < 8 && (a[v] = p(s.pow(g, 1 / 2))), u[v] = p(s.pow(g, 1 / 3)), v++), g++;
        })();
        var m = [], d = i.SHA256 = l.extend({
          _doReset: function() {
            this._hash = new f.init(a.slice(0));
          },
          _doProcessBlock: function(x, p) {
            for (var g = this._hash.words, v = g[0], C = g[1], b = g[2], y = g[3], h = g[4], w = g[5], A = g[6], j = g[7], S = 0; S < 64; S++) {
              if (S < 16)
                m[S] = x[p + S] | 0;
              else {
                var D = m[S - 15], E = (D << 25 | D >>> 7) ^ (D << 14 | D >>> 18) ^ D >>> 3, N = m[S - 2], k = (N << 15 | N >>> 17) ^ (N << 13 | N >>> 19) ^ N >>> 10;
                m[S] = E + m[S - 7] + k + m[S - 16];
              }
              var _ = h & w ^ ~h & A, B = v & C ^ v & b ^ C & b, O = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), z = (h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25), H = j + z + _ + u[S] + m[S], I = O + B;
              j = A, A = w, w = h, h = y + H | 0, y = b, b = C, C = v, v = H + I | 0;
            }
            g[0] = g[0] + v | 0, g[1] = g[1] + C | 0, g[2] = g[2] + b | 0, g[3] = g[3] + y | 0, g[4] = g[4] + h | 0, g[5] = g[5] + w | 0, g[6] = g[6] + A | 0, g[7] = g[7] + j | 0;
          },
          _doFinalize: function() {
            var x = this._data, p = x.words, g = this._nDataBytes * 8, v = x.sigBytes * 8;
            return p[v >>> 5] |= 128 << 24 - v % 32, p[(v + 64 >>> 9 << 4) + 14] = s.floor(g / 4294967296), p[(v + 64 >>> 9 << 4) + 15] = g, x.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var x = l.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        o.SHA256 = l._createHelper(d), o.HmacSHA256 = l._createHmacHelper(d);
      }(Math), r.SHA256;
    });
  }(Zn)), Zn.exports;
}
var Jn = { exports: {} }, Na;
function vx() {
  return Na || (Na = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), go());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.WordArray, f = s.algo, l = f.SHA256, i = f.SHA224 = l.extend({
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
        s.SHA224 = l._createHelper(i), s.HmacSHA224 = l._createHmacHelper(i);
      }(), r.SHA224;
    });
  }(Jn)), Jn.exports;
}
var es = { exports: {} }, Da;
function R0() {
  return Da || (Da = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), vn());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.Hasher, f = s.x64, l = f.Word, i = f.WordArray, a = s.algo;
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
            for (var v = this._hash.words, C = v[0], b = v[1], y = v[2], h = v[3], w = v[4], A = v[5], j = v[6], S = v[7], D = C.high, E = C.low, N = b.high, k = b.low, _ = y.high, B = y.low, O = h.high, z = h.low, H = w.high, I = w.low, L = A.high, Y = A.low, T = j.high, $ = j.low, R = S.high, P = S.low, G = D, ee = E, ie = N, J = k, we = _, de = B, ce = O, ve = z, he = H, pe = I, _e = L, ge = Y, Ne = T, Ce = $, W = R, se = P, ne = 0; ne < 80; ne++) {
              var M, ae, le = d[ne];
              if (ne < 16)
                ae = le.high = p[g + ne * 2] | 0, M = le.low = p[g + ne * 2 + 1] | 0;
              else {
                var Ee = d[ne - 15], Re = Ee.high, Be = Ee.low, U = (Re >>> 1 | Be << 31) ^ (Re >>> 8 | Be << 24) ^ Re >>> 7, q = (Be >>> 1 | Re << 31) ^ (Be >>> 8 | Re << 24) ^ (Be >>> 7 | Re << 25), Q = d[ne - 2], K = Q.high, re = Q.low, Oe = (K >>> 19 | re << 13) ^ (K << 3 | re >>> 29) ^ K >>> 6, Se = (re >>> 19 | K << 13) ^ (re << 3 | K >>> 29) ^ (re >>> 6 | K << 26), Lt = d[ne - 7], Et = Lt.high, Xt = Lt.low, Ye = d[ne - 16], ut = Ye.high, jt = Ye.low;
                M = q + Xt, ae = U + Et + (M >>> 0 < q >>> 0 ? 1 : 0), M = M + Se, ae = ae + Oe + (M >>> 0 < Se >>> 0 ? 1 : 0), M = M + jt, ae = ae + ut + (M >>> 0 < jt >>> 0 ? 1 : 0), le.high = ae, le.low = M;
              }
              var Ke = he & _e ^ ~he & Ne, It = pe & ge ^ ~pe & Ce, Zt = G & ie ^ G & we ^ ie & we, kr = ee & J ^ ee & de ^ J & de, bn = (G >>> 28 | ee << 4) ^ (G << 30 | ee >>> 2) ^ (G << 25 | ee >>> 7), Jt = (ee >>> 28 | G << 4) ^ (ee << 30 | G >>> 2) ^ (ee << 25 | G >>> 7), wn = (he >>> 14 | pe << 18) ^ (he >>> 18 | pe << 14) ^ (he << 23 | pe >>> 9), _r = (pe >>> 14 | he << 18) ^ (pe >>> 18 | he << 14) ^ (pe << 23 | he >>> 9), er = m[ne], Cn = er.high, Sr = er.low, ze = se + _r, Xe = W + wn + (ze >>> 0 < se >>> 0 ? 1 : 0), ze = ze + It, Xe = Xe + Ke + (ze >>> 0 < It >>> 0 ? 1 : 0), ze = ze + Sr, Xe = Xe + Cn + (ze >>> 0 < Sr >>> 0 ? 1 : 0), ze = ze + M, Xe = Xe + ae + (ze >>> 0 < M >>> 0 ? 1 : 0), Br = Jt + kr, En = bn + Zt + (Br >>> 0 < Jt >>> 0 ? 1 : 0);
              W = Ne, se = Ce, Ne = _e, Ce = ge, _e = he, ge = pe, pe = ve + ze | 0, he = ce + Xe + (pe >>> 0 < ve >>> 0 ? 1 : 0) | 0, ce = we, ve = de, we = ie, de = J, ie = G, J = ee, ee = ze + Br | 0, G = Xe + En + (ee >>> 0 < ze >>> 0 ? 1 : 0) | 0;
            }
            E = C.low = E + ee, C.high = D + G + (E >>> 0 < ee >>> 0 ? 1 : 0), k = b.low = k + J, b.high = N + ie + (k >>> 0 < J >>> 0 ? 1 : 0), B = y.low = B + de, y.high = _ + we + (B >>> 0 < de >>> 0 ? 1 : 0), z = h.low = z + ve, h.high = O + ce + (z >>> 0 < ve >>> 0 ? 1 : 0), I = w.low = I + pe, w.high = H + he + (I >>> 0 < pe >>> 0 ? 1 : 0), Y = A.low = Y + ge, A.high = L + _e + (Y >>> 0 < ge >>> 0 ? 1 : 0), $ = j.low = $ + Ce, j.high = T + Ne + ($ >>> 0 < Ce >>> 0 ? 1 : 0), P = S.low = P + se, S.high = R + W + (P >>> 0 < se >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, g = p.words, v = this._nDataBytes * 8, C = p.sigBytes * 8;
            g[C >>> 5] |= 128 << 24 - C % 32, g[(C + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), g[(C + 128 >>> 10 << 5) + 31] = v, p.sigBytes = g.length * 4, this._process();
            var b = this._hash.toX32();
            return b;
          },
          clone: function() {
            var p = c.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        s.SHA512 = c._createHelper(x), s.HmacSHA512 = c._createHmacHelper(x);
      }(), r.SHA512;
    });
  }(es)), es.exports;
}
var ts = { exports: {} }, ka;
function bx() {
  return ka || (ka = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), vn(), R0());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.x64, c = o.Word, f = o.WordArray, l = s.algo, i = l.SHA512, a = l.SHA384 = i.extend({
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
        s.SHA384 = i._createHelper(a), s.HmacSHA384 = i._createHmacHelper(a);
      }(), r.SHA384;
    });
  }(ts)), ts.exports;
}
var rs = { exports: {} }, _a;
function wx() {
  return _a || (_a = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), vn());
    })(fe, function(r) {
      return function(s) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.x64, a = i.Word, u = o.algo, m = [], d = [], x = [];
        (function() {
          for (var v = 1, C = 0, b = 0; b < 24; b++) {
            m[v + 5 * C] = (b + 1) * (b + 2) / 2 % 64;
            var y = C % 5, h = (2 * v + 3 * C) % 5;
            v = y, C = h;
          }
          for (var v = 0; v < 5; v++)
            for (var C = 0; C < 5; C++)
              d[v + 5 * C] = C + (2 * v + 3 * C) % 5 * 5;
          for (var w = 1, A = 0; A < 24; A++) {
            for (var j = 0, S = 0, D = 0; D < 7; D++) {
              if (w & 1) {
                var E = (1 << D) - 1;
                E < 32 ? S ^= 1 << E : j ^= 1 << E - 32;
              }
              w & 128 ? w = w << 1 ^ 113 : w <<= 1;
            }
            x[A] = a.create(j, S);
          }
        })();
        var p = [];
        (function() {
          for (var v = 0; v < 25; v++)
            p[v] = a.create();
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
            for (var v = this._state = [], C = 0; C < 25; C++)
              v[C] = new a.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, C) {
            for (var b = this._state, y = this.blockSize / 2, h = 0; h < y; h++) {
              var w = v[C + 2 * h], A = v[C + 2 * h + 1];
              w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
              var j = b[h];
              j.high ^= A, j.low ^= w;
            }
            for (var S = 0; S < 24; S++) {
              for (var D = 0; D < 5; D++) {
                for (var E = 0, N = 0, k = 0; k < 5; k++) {
                  var j = b[D + 5 * k];
                  E ^= j.high, N ^= j.low;
                }
                var _ = p[D];
                _.high = E, _.low = N;
              }
              for (var D = 0; D < 5; D++)
                for (var B = p[(D + 4) % 5], O = p[(D + 1) % 5], z = O.high, H = O.low, E = B.high ^ (z << 1 | H >>> 31), N = B.low ^ (H << 1 | z >>> 31), k = 0; k < 5; k++) {
                  var j = b[D + 5 * k];
                  j.high ^= E, j.low ^= N;
                }
              for (var I = 1; I < 25; I++) {
                var E, N, j = b[I], L = j.high, Y = j.low, T = m[I];
                T < 32 ? (E = L << T | Y >>> 32 - T, N = Y << T | L >>> 32 - T) : (E = Y << T - 32 | L >>> 64 - T, N = L << T - 32 | Y >>> 64 - T);
                var $ = p[d[I]];
                $.high = E, $.low = N;
              }
              var R = p[0], P = b[0];
              R.high = P.high, R.low = P.low;
              for (var D = 0; D < 5; D++)
                for (var k = 0; k < 5; k++) {
                  var I = D + 5 * k, j = b[I], G = p[I], ee = p[(D + 1) % 5 + 5 * k], ie = p[(D + 2) % 5 + 5 * k];
                  j.high = G.high ^ ~ee.high & ie.high, j.low = G.low ^ ~ee.low & ie.low;
                }
              var j = b[0], J = x[S];
              j.high ^= J.high, j.low ^= J.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, C = v.words;
            this._nDataBytes * 8;
            var b = v.sigBytes * 8, y = this.blockSize * 32;
            C[b >>> 5] |= 1 << 24 - b % 32, C[(s.ceil((b + 1) / y) * y >>> 5) - 1] |= 128, v.sigBytes = C.length * 4, this._process();
            for (var h = this._state, w = this.cfg.outputLength / 8, A = w / 8, j = [], S = 0; S < A; S++) {
              var D = h[S], E = D.high, N = D.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, j.push(N), j.push(E);
            }
            return new f.init(j, w);
          },
          clone: function() {
            for (var v = l.clone.call(this), C = v._state = this._state.slice(0), b = 0; b < 25; b++)
              C[b] = C[b].clone();
            return v;
          }
        });
        o.SHA3 = l._createHelper(g), o.HmacSHA3 = l._createHmacHelper(g);
      }(Math), r.SHA3;
    });
  }(rs)), rs.exports;
}
var ns = { exports: {} }, Sa;
function Cx() {
  return Sa || (Sa = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(s) {
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
          _doProcessBlock: function(A, j) {
            for (var S = 0; S < 16; S++) {
              var D = j + S, E = A[D];
              A[D] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var N = this._hash.words, k = x.words, _ = p.words, B = a.words, O = u.words, z = m.words, H = d.words, I, L, Y, T, $, R, P, G, ee, ie;
            R = I = N[0], P = L = N[1], G = Y = N[2], ee = T = N[3], ie = $ = N[4];
            for (var J, S = 0; S < 80; S += 1)
              J = I + A[j + B[S]] | 0, S < 16 ? J += v(L, Y, T) + k[0] : S < 32 ? J += C(L, Y, T) + k[1] : S < 48 ? J += b(L, Y, T) + k[2] : S < 64 ? J += y(L, Y, T) + k[3] : J += h(L, Y, T) + k[4], J = J | 0, J = w(J, z[S]), J = J + $ | 0, I = $, $ = T, T = w(Y, 10), Y = L, L = J, J = R + A[j + O[S]] | 0, S < 16 ? J += h(P, G, ee) + _[0] : S < 32 ? J += y(P, G, ee) + _[1] : S < 48 ? J += b(P, G, ee) + _[2] : S < 64 ? J += C(P, G, ee) + _[3] : J += v(P, G, ee) + _[4], J = J | 0, J = w(J, H[S]), J = J + ie | 0, R = ie, ie = ee, ee = w(G, 10), G = P, P = J;
            J = N[1] + Y + ee | 0, N[1] = N[2] + T + ie | 0, N[2] = N[3] + $ + R | 0, N[3] = N[4] + I + P | 0, N[4] = N[0] + L + G | 0, N[0] = J;
          },
          _doFinalize: function() {
            var A = this._data, j = A.words, S = this._nDataBytes * 8, D = A.sigBytes * 8;
            j[D >>> 5] |= 128 << 24 - D % 32, j[(D + 64 >>> 9 << 4) + 14] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, A.sigBytes = (j.length + 1) * 4, this._process();
            for (var E = this._hash, N = E.words, k = 0; k < 5; k++) {
              var _ = N[k];
              N[k] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var A = l.clone.call(this);
            return A._hash = this._hash.clone(), A;
          }
        });
        function v(A, j, S) {
          return A ^ j ^ S;
        }
        function C(A, j, S) {
          return A & j | ~A & S;
        }
        function b(A, j, S) {
          return (A | ~j) ^ S;
        }
        function y(A, j, S) {
          return A & S | j & ~S;
        }
        function h(A, j, S) {
          return A ^ (j | ~S);
        }
        function w(A, j) {
          return A << j | A >>> 32 - j;
        }
        o.RIPEMD160 = l._createHelper(g), o.HmacRIPEMD160 = l._createHmacHelper(g);
      }(), r.RIPEMD160;
    });
  }(ns)), ns.exports;
}
var ss = { exports: {} }, Ba;
function yo() {
  return Ba || (Ba = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(me());
    })(fe, function(r) {
      (function() {
        var s = r, o = s.lib, c = o.Base, f = s.enc, l = f.Utf8, i = s.algo;
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
            for (var x = this._oKey = u.clone(), p = this._iKey = u.clone(), g = x.words, v = p.words, C = 0; C < m; C++)
              g[C] ^= 1549556828, v[C] ^= 909522486;
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
  }(ss)), ss.exports;
}
var os = { exports: {} }, Fa;
function Ex() {
  return Fa || (Fa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), go(), yo());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.Base, f = o.WordArray, l = s.algo, i = l.SHA256, a = l.HMAC, u = l.PBKDF2 = c.extend({
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
            for (var x = this.cfg, p = a.create(x.hasher, m), g = f.create(), v = f.create([1]), C = g.words, b = v.words, y = x.keySize, h = x.iterations; C.length < y; ) {
              var w = p.update(d).finalize(v);
              p.reset();
              for (var A = w.words, j = A.length, S = w, D = 1; D < h; D++) {
                S = p.finalize(S), p.reset();
                for (var E = S.words, N = 0; N < j; N++)
                  A[N] ^= E[N];
              }
              g.concat(w), b[0]++;
            }
            return g.sigBytes = y * 4, g;
          }
        });
        s.PBKDF2 = function(m, d, x) {
          return u.create(x).compute(m, d);
        };
      }(), r.PBKDF2;
    });
  }(os)), os.exports;
}
var as = { exports: {} }, Ra;
function Ct() {
  return Ra || (Ra = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), F0(), yo());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.Base, f = o.WordArray, l = s.algo, i = l.MD5, a = l.EvpKDF = c.extend({
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
            for (var d, x = this.cfg, p = x.hasher.create(), g = f.create(), v = g.words, C = x.keySize, b = x.iterations; v.length < C; ) {
              d && p.update(d), d = p.update(u).finalize(m), p.reset();
              for (var y = 1; y < b; y++)
                d = p.finalize(d), p.reset();
              g.concat(d);
            }
            return g.sigBytes = C * 4, g;
          }
        });
        s.EvpKDF = function(u, m, d) {
          return a.create(d).compute(u, m);
        };
      }(), r.EvpKDF;
    });
  }(as)), as.exports;
}
var is = { exports: {} }, Oa;
function Me() {
  return Oa || (Oa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Ct());
    })(fe, function(r) {
      r.lib.Cipher || function(s) {
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
          init: function(E, N, k) {
            this.cfg = this.cfg.extend(k), this._xformMode = E, this._key = N, this.reset();
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
              return typeof N == "string" ? D : A;
            }
            return function(N) {
              return {
                encrypt: function(k, _, B) {
                  return E(_).encrypt(N, k, _, B);
                },
                decrypt: function(k, _, B) {
                  return E(_).decrypt(N, k, _, B);
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
        }), v = p.CBC = function() {
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
            processBlock: function(k, _) {
              var B = this._cipher, O = B.blockSize;
              N.call(this, k, _, O), B.encryptBlock(k, _), this._prevBlock = k.slice(_, _ + O);
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
            processBlock: function(k, _) {
              var B = this._cipher, O = B.blockSize, z = k.slice(_, _ + O);
              B.decryptBlock(k, _), N.call(this, k, _, O), this._prevBlock = z;
            }
          });
          function N(k, _, B) {
            var O, z = this._iv;
            z ? (O = z, this._iv = s) : O = this._prevBlock;
            for (var H = 0; H < B; H++)
              k[_ + H] ^= O[H];
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
            for (var k = N * 4, _ = k - E.sigBytes % k, B = _ << 24 | _ << 16 | _ << 8 | _, O = [], z = 0; z < _; z += 4)
              O.push(B);
            var H = l.create(O, _);
            E.concat(H);
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
            mode: v,
            padding: b
          }),
          reset: function() {
            var E;
            x.reset.call(this);
            var N = this.cfg, k = N.iv, _ = N.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = _.createEncryptor : (E = _.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, k && k.words) : (this._mode = E.call(_, this, k && k.words), this._mode.__creator = E);
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
        }), h = o.format = {}, w = h.OpenSSL = {
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
            var N, k = E.ciphertext, _ = E.salt;
            return _ ? N = l.create([1398893684, 1701076831]).concat(_).concat(k) : N = k, N.toString(u);
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
            var N, k = u.parse(E), _ = k.words;
            return _[0] == 1398893684 && _[1] == 1701076831 && (N = l.create(_.slice(2, 4)), _.splice(0, 4), k.sigBytes -= 16), y.create({ ciphertext: k, salt: N });
          }
        }, A = c.SerializableCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: f.extend({
            format: w
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
          encrypt: function(E, N, k, _) {
            _ = this.cfg.extend(_);
            var B = E.createEncryptor(k, _), O = B.finalize(N), z = B.cfg;
            return y.create({
              ciphertext: O,
              key: k,
              iv: z.iv,
              algorithm: E,
              mode: z.mode,
              padding: z.padding,
              blockSize: E.blockSize,
              formatter: _.format
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
          decrypt: function(E, N, k, _) {
            _ = this.cfg.extend(_), N = this._parse(N, _.format);
            var B = E.createDecryptor(k, _).finalize(N.ciphertext);
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
        }), j = o.kdf = {}, S = j.OpenSSL = {
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
          execute: function(E, N, k, _, B) {
            if (_ || (_ = l.random(64 / 8)), B)
              var O = d.create({ keySize: N + k, hasher: B }).compute(E, _);
            else
              var O = d.create({ keySize: N + k }).compute(E, _);
            var z = l.create(O.words.slice(N), k * 4);
            return O.sigBytes = N * 4, y.create({ key: O, iv: z, salt: _ });
          }
        }, D = c.PasswordBasedCipher = A.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: A.cfg.extend({
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
          encrypt: function(E, N, k, _) {
            _ = this.cfg.extend(_);
            var B = _.kdf.execute(k, E.keySize, E.ivSize, _.salt, _.hasher);
            _.iv = B.iv;
            var O = A.encrypt.call(this, E, N, B.key, _);
            return O.mixIn(B), O;
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
          decrypt: function(E, N, k, _) {
            _ = this.cfg.extend(_), N = this._parse(N, _.format);
            var B = _.kdf.execute(k, E.keySize, E.ivSize, N.salt, _.hasher);
            _.iv = B.iv;
            var O = A.decrypt.call(this, E, N, B.key, _);
            return O;
          }
        });
      }();
    });
  }(is)), is.exports;
}
var cs = { exports: {} }, Pa;
function jx() {
  return Pa || (Pa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.mode.CFB = function() {
        var s = r.lib.BlockCipherMode.extend();
        s.Encryptor = s.extend({
          processBlock: function(c, f) {
            var l = this._cipher, i = l.blockSize;
            o.call(this, c, f, i, l), this._prevBlock = c.slice(f, f + i);
          }
        }), s.Decryptor = s.extend({
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
        return s;
      }(), r.mode.CFB;
    });
  }(cs)), cs.exports;
}
var ls = { exports: {} }, Ta;
function Ax() {
  return Ta || (Ta = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.mode.CTR = function() {
        var s = r.lib.BlockCipherMode.extend(), o = s.Encryptor = s.extend({
          processBlock: function(c, f) {
            var l = this._cipher, i = l.blockSize, a = this._iv, u = this._counter;
            a && (u = this._counter = a.slice(0), this._iv = void 0);
            var m = u.slice(0);
            l.encryptBlock(m, 0), u[i - 1] = u[i - 1] + 1 | 0;
            for (var d = 0; d < i; d++)
              c[f + d] ^= m[d];
          }
        });
        return s.Decryptor = o, s;
      }(), r.mode.CTR;
    });
  }(ls)), ls.exports;
}
var us = { exports: {} }, Ma;
function Nx() {
  return Ma || (Ma = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var s = r.lib.BlockCipherMode.extend();
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
        var f = s.Encryptor = s.extend({
          processBlock: function(l, i) {
            var a = this._cipher, u = a.blockSize, m = this._iv, d = this._counter;
            m && (d = this._counter = m.slice(0), this._iv = void 0), c(d);
            var x = d.slice(0);
            a.encryptBlock(x, 0);
            for (var p = 0; p < u; p++)
              l[i + p] ^= x[p];
          }
        });
        return s.Decryptor = f, s;
      }(), r.mode.CTRGladman;
    });
  }(us)), us.exports;
}
var ds = { exports: {} }, La;
function Dx() {
  return La || (La = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.mode.OFB = function() {
        var s = r.lib.BlockCipherMode.extend(), o = s.Encryptor = s.extend({
          processBlock: function(c, f) {
            var l = this._cipher, i = l.blockSize, a = this._iv, u = this._keystream;
            a && (u = this._keystream = a.slice(0), this._iv = void 0), l.encryptBlock(u, 0);
            for (var m = 0; m < i; m++)
              c[f + m] ^= u[m];
          }
        });
        return s.Decryptor = o, s;
      }(), r.mode.OFB;
    });
  }(ds)), ds.exports;
}
var fs = { exports: {} }, Ia;
function kx() {
  return Ia || (Ia = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.mode.ECB = function() {
        var s = r.lib.BlockCipherMode.extend();
        return s.Encryptor = s.extend({
          processBlock: function(o, c) {
            this._cipher.encryptBlock(o, c);
          }
        }), s.Decryptor = s.extend({
          processBlock: function(o, c) {
            this._cipher.decryptBlock(o, c);
          }
        }), s;
      }(), r.mode.ECB;
    });
  }(fs)), fs.exports;
}
var xs = { exports: {} }, za;
function _x() {
  return za || (za = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(s, o) {
          var c = s.sigBytes, f = o * 4, l = f - c % f, i = c + l - 1;
          s.clamp(), s.words[i >>> 2] |= l << 24 - i % 4 * 8, s.sigBytes += l;
        },
        unpad: function(s) {
          var o = s.words[s.sigBytes - 1 >>> 2] & 255;
          s.sigBytes -= o;
        }
      }, r.pad.Ansix923;
    });
  }(xs)), xs.exports;
}
var hs = { exports: {} }, $a;
function Sx() {
  return $a || ($a = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.pad.Iso10126 = {
        pad: function(s, o) {
          var c = o * 4, f = c - s.sigBytes % c;
          s.concat(r.lib.WordArray.random(f - 1)).concat(r.lib.WordArray.create([f << 24], 1));
        },
        unpad: function(s) {
          var o = s.words[s.sigBytes - 1 >>> 2] & 255;
          s.sigBytes -= o;
        }
      }, r.pad.Iso10126;
    });
  }(hs)), hs.exports;
}
var ps = { exports: {} }, Ha;
function Bx() {
  return Ha || (Ha = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.pad.Iso97971 = {
        pad: function(s, o) {
          s.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(s, o);
        },
        unpad: function(s) {
          r.pad.ZeroPadding.unpad(s), s.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(ps)), ps.exports;
}
var ms = { exports: {} }, qa;
function Fx() {
  return qa || (qa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(s, o) {
          var c = o * 4;
          s.clamp(), s.sigBytes += c - (s.sigBytes % c || c);
        },
        unpad: function(s) {
          for (var o = s.words, c = s.sigBytes - 1, c = s.sigBytes - 1; c >= 0; c--)
            if (o[c >>> 2] >>> 24 - c % 4 * 8 & 255) {
              s.sigBytes = c + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(ms)), ms.exports;
}
var gs = { exports: {} }, Wa;
function Rx() {
  return Wa || (Wa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(gs)), gs.exports;
}
var ys = { exports: {} }, Va;
function Ox() {
  return Va || (Va = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Me());
    })(fe, function(r) {
      return function(s) {
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
  }(ys)), ys.exports;
}
var vs = { exports: {} }, Ua;
function Px() {
  return Ua || (Ua = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Tt(), Mt(), Ct(), Me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.BlockCipher, f = s.algo, l = [], i = [], a = [], u = [], m = [], d = [], x = [], p = [], g = [], v = [];
        (function() {
          for (var y = [], h = 0; h < 256; h++)
            h < 128 ? y[h] = h << 1 : y[h] = h << 1 ^ 283;
          for (var w = 0, A = 0, h = 0; h < 256; h++) {
            var j = A ^ A << 1 ^ A << 2 ^ A << 3 ^ A << 4;
            j = j >>> 8 ^ j & 255 ^ 99, l[w] = j, i[j] = w;
            var S = y[w], D = y[S], E = y[D], N = y[j] * 257 ^ j * 16843008;
            a[w] = N << 24 | N >>> 8, u[w] = N << 16 | N >>> 16, m[w] = N << 8 | N >>> 24, d[w] = N;
            var N = E * 16843009 ^ D * 65537 ^ S * 257 ^ w * 16843008;
            x[j] = N << 24 | N >>> 8, p[j] = N << 16 | N >>> 16, g[j] = N << 8 | N >>> 24, v[j] = N, w ? (w = S ^ y[y[y[E ^ S]]], A ^= y[y[A]]) : w = A = 1;
          }
        })();
        var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], b = f.AES = c.extend({
          _doReset: function() {
            var y;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var h = this._keyPriorReset = this._key, w = h.words, A = h.sigBytes / 4, j = this._nRounds = A + 6, S = (j + 1) * 4, D = this._keySchedule = [], E = 0; E < S; E++)
                E < A ? D[E] = w[E] : (y = D[E - 1], E % A ? A > 6 && E % A == 4 && (y = l[y >>> 24] << 24 | l[y >>> 16 & 255] << 16 | l[y >>> 8 & 255] << 8 | l[y & 255]) : (y = y << 8 | y >>> 24, y = l[y >>> 24] << 24 | l[y >>> 16 & 255] << 16 | l[y >>> 8 & 255] << 8 | l[y & 255], y ^= C[E / A | 0] << 24), D[E] = D[E - A] ^ y);
              for (var N = this._invKeySchedule = [], k = 0; k < S; k++) {
                var E = S - k;
                if (k % 4)
                  var y = D[E];
                else
                  var y = D[E - 4];
                k < 4 || E <= 4 ? N[k] = y : N[k] = x[l[y >>> 24]] ^ p[l[y >>> 16 & 255]] ^ g[l[y >>> 8 & 255]] ^ v[l[y & 255]];
              }
            }
          },
          encryptBlock: function(y, h) {
            this._doCryptBlock(y, h, this._keySchedule, a, u, m, d, l);
          },
          decryptBlock: function(y, h) {
            var w = y[h + 1];
            y[h + 1] = y[h + 3], y[h + 3] = w, this._doCryptBlock(y, h, this._invKeySchedule, x, p, g, v, i);
            var w = y[h + 1];
            y[h + 1] = y[h + 3], y[h + 3] = w;
          },
          _doCryptBlock: function(y, h, w, A, j, S, D, E) {
            for (var N = this._nRounds, k = y[h] ^ w[0], _ = y[h + 1] ^ w[1], B = y[h + 2] ^ w[2], O = y[h + 3] ^ w[3], z = 4, H = 1; H < N; H++) {
              var I = A[k >>> 24] ^ j[_ >>> 16 & 255] ^ S[B >>> 8 & 255] ^ D[O & 255] ^ w[z++], L = A[_ >>> 24] ^ j[B >>> 16 & 255] ^ S[O >>> 8 & 255] ^ D[k & 255] ^ w[z++], Y = A[B >>> 24] ^ j[O >>> 16 & 255] ^ S[k >>> 8 & 255] ^ D[_ & 255] ^ w[z++], T = A[O >>> 24] ^ j[k >>> 16 & 255] ^ S[_ >>> 8 & 255] ^ D[B & 255] ^ w[z++];
              k = I, _ = L, B = Y, O = T;
            }
            var I = (E[k >>> 24] << 24 | E[_ >>> 16 & 255] << 16 | E[B >>> 8 & 255] << 8 | E[O & 255]) ^ w[z++], L = (E[_ >>> 24] << 24 | E[B >>> 16 & 255] << 16 | E[O >>> 8 & 255] << 8 | E[k & 255]) ^ w[z++], Y = (E[B >>> 24] << 24 | E[O >>> 16 & 255] << 16 | E[k >>> 8 & 255] << 8 | E[_ & 255]) ^ w[z++], T = (E[O >>> 24] << 24 | E[k >>> 16 & 255] << 16 | E[_ >>> 8 & 255] << 8 | E[B & 255]) ^ w[z++];
            y[h] = I, y[h + 1] = L, y[h + 2] = Y, y[h + 3] = T;
          },
          keySize: 256 / 32
        });
        s.AES = c._createHelper(b);
      }(), r.AES;
    });
  }(vs)), vs.exports;
}
var bs = { exports: {} }, Qa;
function Tx() {
  return Qa || (Qa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Tt(), Mt(), Ct(), Me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.WordArray, f = o.BlockCipher, l = s.algo, i = [
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
              var w = i[h] - 1;
              y[h] = b[w >>> 5] >>> 31 - w % 32 & 1;
            }
            for (var A = this._subKeys = [], j = 0; j < 16; j++) {
              for (var S = A[j] = [], D = u[j], h = 0; h < 24; h++)
                S[h / 6 | 0] |= y[(a[h] - 1 + D) % 28] << 31 - h % 6, S[4 + (h / 6 | 0)] |= y[28 + (a[h + 24] - 1 + D) % 28] << 31 - h % 6;
              S[0] = S[0] << 1 | S[0] >>> 31;
              for (var h = 1; h < 7; h++)
                S[h] = S[h] >>> (h - 1) * 4 + 3;
              S[7] = S[7] << 5 | S[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], h = 0; h < 16; h++)
              E[h] = A[15 - h];
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
              for (var w = y[h], A = this._lBlock, j = this._rBlock, S = 0, D = 0; D < 8; D++)
                S |= m[D][((j ^ w[D]) & d[D]) >>> 0];
              this._lBlock = j, this._rBlock = A ^ S;
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
        s.DES = f._createHelper(x);
        var v = l.TripleDES = f.extend({
          _doReset: function() {
            var C = this._key, b = C.words;
            if (b.length !== 2 && b.length !== 4 && b.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var y = b.slice(0, 2), h = b.length < 4 ? b.slice(0, 2) : b.slice(2, 4), w = b.length < 6 ? b.slice(0, 2) : b.slice(4, 6);
            this._des1 = x.createEncryptor(c.create(y)), this._des2 = x.createEncryptor(c.create(h)), this._des3 = x.createEncryptor(c.create(w));
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
        s.TripleDES = f._createHelper(v);
      }(), r.TripleDES;
    });
  }(bs)), bs.exports;
}
var ws = { exports: {} }, Ka;
function Mx() {
  return Ka || (Ka = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Tt(), Mt(), Ct(), Me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.StreamCipher, f = s.algo, l = f.RC4 = c.extend({
          _doReset: function() {
            for (var u = this._key, m = u.words, d = u.sigBytes, x = this._S = [], p = 0; p < 256; p++)
              x[p] = p;
            for (var p = 0, g = 0; p < 256; p++) {
              var v = p % d, C = m[v >>> 2] >>> 24 - v % 4 * 8 & 255;
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
        s.RC4 = c._createHelper(l);
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
        s.RC4Drop = c._createHelper(a);
      }(), r.RC4;
    });
  }(ws)), ws.exports;
}
var Cs = { exports: {} }, Ga;
function Lx() {
  return Ga || (Ga = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Tt(), Mt(), Ct(), Me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.StreamCipher, f = s.algo, l = [], i = [], a = [], u = f.Rabbit = c.extend({
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
            ], v = this._C = [
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
              v[p] ^= g[p + 4 & 7];
            if (x) {
              var C = x.words, b = C[0], y = C[1], h = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, w = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, A = h >>> 16 | w & 4294901760, j = w << 16 | h & 65535;
              v[0] ^= h, v[1] ^= A, v[2] ^= w, v[3] ^= j, v[4] ^= h, v[5] ^= A, v[6] ^= w, v[7] ^= j;
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
            var g = d[p] + x[p], v = g & 65535, C = g >>> 16, b = ((v * v >>> 17) + v * C >>> 15) + C * C, y = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = b ^ y;
          }
          d[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, d[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, d[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, d[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, d[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, d[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, d[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, d[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.Rabbit = c._createHelper(u);
      }(), r.Rabbit;
    });
  }(Cs)), Cs.exports;
}
var Es = { exports: {} }, Ya;
function Ix() {
  return Ya || (Ya = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Tt(), Mt(), Ct(), Me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.StreamCipher, f = s.algo, l = [], i = [], a = [], u = f.RabbitLegacy = c.extend({
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
            for (var v = 0; v < 4; v++)
              m.call(this);
            for (var v = 0; v < 8; v++)
              g[v] ^= p[v + 4 & 7];
            if (x) {
              var C = x.words, b = C[0], y = C[1], h = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, w = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, A = h >>> 16 | w & 4294901760, j = w << 16 | h & 65535;
              g[0] ^= h, g[1] ^= A, g[2] ^= w, g[3] ^= j, g[4] ^= h, g[5] ^= A, g[6] ^= w, g[7] ^= j;
              for (var v = 0; v < 4; v++)
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
            var g = d[p] + x[p], v = g & 65535, C = g >>> 16, b = ((v * v >>> 17) + v * C >>> 15) + C * C, y = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = b ^ y;
          }
          d[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, d[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, d[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, d[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, d[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, d[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, d[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, d[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.RabbitLegacy = c._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(Es)), Es.exports;
}
var js = { exports: {} }, Xa;
function zx() {
  return Xa || (Xa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(me(), Tt(), Mt(), Ct(), Me());
    })(fe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.BlockCipher, f = s.algo;
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
        function m(v, C) {
          let b = C >> 24 & 255, y = C >> 16 & 255, h = C >> 8 & 255, w = C & 255, A = v.sbox[0][b] + v.sbox[1][y];
          return A = A ^ v.sbox[2][h], A = A + v.sbox[3][w], A;
        }
        function d(v, C, b) {
          let y = C, h = b, w;
          for (let A = 0; A < l; ++A)
            y = y ^ v.pbox[A], h = m(v, y) ^ h, w = y, y = h, h = w;
          return w = y, y = h, h = w, h = h ^ v.pbox[l], y = y ^ v.pbox[l + 1], { left: y, right: h };
        }
        function x(v, C, b) {
          let y = C, h = b, w;
          for (let A = l + 1; A > 1; --A)
            y = y ^ v.pbox[A], h = m(v, y) ^ h, w = y, y = h, h = w;
          return w = y, y = h, h = w, h = h ^ v.pbox[1], y = y ^ v.pbox[0], { left: y, right: h };
        }
        function p(v, C, b) {
          for (let j = 0; j < 4; j++) {
            v.sbox[j] = [];
            for (let S = 0; S < 256; S++)
              v.sbox[j][S] = a[j][S];
          }
          let y = 0;
          for (let j = 0; j < l + 2; j++)
            v.pbox[j] = i[j] ^ C[y], y++, y >= b && (y = 0);
          let h = 0, w = 0, A = 0;
          for (let j = 0; j < l + 2; j += 2)
            A = d(v, h, w), h = A.left, w = A.right, v.pbox[j] = h, v.pbox[j + 1] = w;
          for (let j = 0; j < 4; j++)
            for (let S = 0; S < 256; S += 2)
              A = d(v, h, w), h = A.left, w = A.right, v.sbox[j][S] = h, v.sbox[j][S + 1] = w;
          return !0;
        }
        var g = f.Blowfish = c.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var v = this._keyPriorReset = this._key, C = v.words, b = v.sigBytes / 4;
              p(u, C, b);
            }
          },
          encryptBlock: function(v, C) {
            var b = d(u, v[C], v[C + 1]);
            v[C] = b.left, v[C + 1] = b.right;
          },
          decryptBlock: function(v, C) {
            var b = x(u, v[C], v[C + 1]);
            v[C] = b.left, v[C + 1] = b.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        s.Blowfish = c._createHelper(g);
      }(), r.Blowfish;
    });
  }(js)), js.exports;
}
(function(e, t) {
  (function(r, s, o) {
    e.exports = s(me(), vn(), mx(), gx(), Tt(), yx(), Mt(), F0(), go(), vx(), R0(), bx(), wx(), Cx(), yo(), Ex(), Ct(), Me(), jx(), Ax(), Nx(), Dx(), kx(), _x(), Sx(), Bx(), Fx(), Rx(), Ox(), Px(), Tx(), Mx(), Lx(), Ix(), zx());
  })(fe, function(r) {
    return r;
  });
})(B0);
var $x = B0.exports;
const qr = /* @__PURE__ */ H0($x), Hx = (e) => {
  const t = "97cc+XE5NTUVhWOrdxrESw==";
  try {
    const r = qr.AES.decrypt(
      e.replace(/^"(.*)"$/, "$1"),
      qr.enc.Base64.parse(t),
      { mode: qr.mode.ECB }
    ).toString(qr.enc.Utf8);
    return JSON.parse(r);
  } catch {
    return null;
  }
}, on = dx({
  reducerPath: "InboxService",
  baseQuery: bf({
    baseUrl: "https://notification.infinitisoftware.net/notificationapi/notification",
    // This allows you to access files in the public folder
    credentials: "include",
    prepareHeaders: (e) => {
      var s;
      const t = Hx(localStorage.getItem("user")), r = sessionStorage.getItem("iframe_token");
      if (r && r && e.set("Authorization", `Bearer ${r}`), t) {
        const o = (s = JSON.parse(t)) == null ? void 0 : s.token;
        o && e.set("X-XSRF-TOKEN", o);
      }
      return e;
    }
  }),
  endpoints: () => ({})
}), qx = on.enhanceEndpoints({
  addTagTypes: ["demo"]
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (e) => ({
    getMailListResponse: e.query({
      query: () => `/mail-server/?project=${localStorage.getItem("project")}&page=1&page_size=100`
      // dynamic project ID
    }),
    getConvoResponse: e.query({
      query: () => "staticResponse/convoResponse.json"
    }),
    getConversationDetails: e.query({
      query: (t) => `/mail-server/${t.id}/?project=${localStorage.getItem("project")}`
    })
  })
}), { useLazyGetMailListResponseQuery: Wx, useLazyGetConvoResponseQuery: rh, useLazyGetConversationDetailsQuery: Vx } = qx, Ux = () => {
  const [e, t] = Z({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return Ae(() => {
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, Za = ({
  email: e,
  onClose: t,
  onBack: r,
  isFullPage: s = !1,
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
  const { width: p } = Ux(), [g, v] = Z(""), [C, b] = Z(""), [y, h] = Z(!1), [w, A] = Z(
    /* @__PURE__ */ new Set()
  ), [j, S] = Z(!1), [D, E] = Z(!1), [N, k] = Z(!1), _ = ke(null), B = ke(null), O = ke(null), z = ke(null), [H, I] = Vx(), [L, Y] = Z([]), T = ke(null);
  if (Ae(() => {
    b("");
  }, [e]), Ae(() => {
    o.showAiReply && _.current && setTimeout(() => {
      var M;
      (M = _.current) == null || M.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [o.showAiReply]), Ae(() => {
    y && g === o.generatedReply && B.current && setTimeout(() => {
      var M;
      (M = B.current) == null || M.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [y, g, o.generatedReply]), Ae(() => {
    const M = (ae) => {
      T.current && !T.current.contains(ae.target) && k(!1);
    };
    if (N)
      return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [N]), Ae(() => {
    if (e != null && e.mail_id) {
      let M = e == null ? void 0 : e.mail_id;
      H({ id: M });
    }
  }, [e == null ? void 0 : e.mail_id]), Ae(() => {
    var M, ae, le;
    if (I != null && I.isSuccess) {
      console.log(I);
      const Ee = (le = (ae = (M = I == null ? void 0 : I.data) == null ? void 0 : M.response) == null ? void 0 : ae.data) == null ? void 0 : le.conversation;
      Ee && Y(Ee);
    }
  }, [I]), !e)
    return /* @__PURE__ */ n.jsx("div", { className: "flex-1 flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ n.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ n.jsx("span", { className: "text-4xl text-gray-400", children: "📧" }) }),
      /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Select an email" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-gray-500", children: "Choose an email from the list to view the conversation" })
    ] }) });
  const $ = (M) => new Date(M).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), R = () => {
    if (g.trim()) {
      let M = "manual";
      g === o.generatedReply && o.generatedReply ? M = "ai" : o.generatedReply && g.includes(o.generatedReply) && (M = "partial-ai"), console.log("Reply sent with type:", M), v(""), h(!1), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, P = (M) => {
    var Ee;
    const ae = W[W.length - 1];
    return ae.to.length + (((Ee = ae.cc) == null ? void 0 : Ee.length) || 0) > 1 || ae.cc && ae.cc.length > 0;
  }, G = () => {
    var M;
    b((M = L[L.length - 1]) == null ? void 0 : M.ai_response);
  }, ee = () => {
    if (L) {
      const M = P();
      c(
        L,
        "professional",
        M ? "reply-all" : "reply"
      );
    }
  }, ie = () => {
    S(!j);
  }, J = () => {
    v(o.generatedReply), h(!0), f({ ...o, showAiReply: !1 });
  }, we = () => {
    if (L && W.length > 0) {
      const M = W[W.length - 1], ae = /* @__PURE__ */ new Set([
        ...M.to,
        ...M.cc || []
      ]), le = `

--- Reply All ---
To: ${Array.from(
        ae
      ).join(", ")}

${o.generatedReply}`;
      v(le), h(!0), f({ ...o, showAiReply: !1 });
    }
  }, de = () => {
    if (e) {
      const M = W[W.length - 1], ae = /* @__PURE__ */ new Set([
        M.to,
        ...M.to,
        ...M.cc || []
      ]), le = `

--- Reply All ---
To: ${Array.from(
        ae
      ).join(", ")}

`;
      v(le), h(!0), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, ce = () => {
    if (L) {
      const M = W[W.length - 1], ae = `

--- Forwarded Message ---
From: ${M.from_address}
Date: ${$(M.create_to)}
Subject: ${M.subject}
To: ${M.to.join(", ")}
${M.cc ? `Cc: ${M.cc.join(", ")}
` : ""}
${M.body_plain}`;
      v(ae), h(!0), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, ve = () => {
    if (!e) return;
    const M = W[W.length - 1], ae = M.body_plain, le = `Meeting: ${e.subject}`, Ee = `Original email from: ${M.from_address}

${ae}`, Re = /(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})/, Be = /(\d{1,2}:\d{2}\s*(AM|PM|am|pm))/, U = ae.match(Re), q = ae.match(Be);
    let Q = /* @__PURE__ */ new Date();
    if (U && (Q = new Date(U[0])), q) {
      const Et = q[0], [Xt, Ye] = Et.split(/\s+/), [ut, jt] = Xt.split(":").map(Number);
      let Ke = ut;
      (Ye == null ? void 0 : Ye.toLowerCase()) === "pm" && ut !== 12 ? Ke += 12 : (Ye == null ? void 0 : Ye.toLowerCase()) === "am" && ut === 12 && (Ke = 0), Q.setHours(Ke, jt, 0, 0);
    }
    const K = (Et) => Et.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z", re = K(Q), Oe = new Date(Q.getTime() + 60 * 60 * 1e3), Se = K(Oe), Lt = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(le)}&dates=${re}/${Se}&details=${encodeURIComponent(Ee)}&location=${encodeURIComponent("To be determined")}`;
    window.open(Lt, "_blank"), k(!1);
  }, he = () => {
    window.print(), k(!1);
  }, pe = () => {
    e && (console.log("Reporting spam for email:", e.message_id), window.confirm(
      `Report "${e.subject}" as spam? This conversation will be moved to spam folder.`
    ) && (alert("Email reported as spam successfully"), t()), k(!1));
  }, _e = () => {
    console.log("Block sender:", e == null ? void 0 : e.senderEmail), k(!1);
  }, ge = (M) => {
    A((ae) => {
      const le = new Set(ae);
      return le.has(M) ? le.delete(M) : le.add(M), le;
    });
  }, Ne = (M) => M.customLabels ? M.customLabels.map((ae) => l.find((le) => le.id === ae)).filter(Boolean) : [], Ce = ({
    replyType: M
  }) => {
    if (!M) return null;
    const ae = {
      manual: {
        icon: fi,
        label: "Replied Manually",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200"
      },
      ai: {
        icon: Z0,
        label: "Replied by AI",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        borderColor: "border-purple-200"
      },
      "partial-ai": {
        icon: yc,
        label: "Partial AI Reply",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        borderColor: "border-orange-200"
      }
    }, {
      icon: le,
      label: Ee,
      bgColor: Re,
      textColor: Be,
      borderColor: U
    } = ae[M];
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${Re} ${Be} ${U}`,
        children: [
          /* @__PURE__ */ n.jsx(le, { className: "w-3 h-3 mr-1" }),
          Ee
        ]
      }
    );
  }, W = [...L].sort(
    (M, ae) => new Date(M.created_at).getTime() - new Date(ae.created_at).getTime()
  ), se = Ne(L), ne = () => /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ n.jsx(Ao, { className: "w-4 h-4 animate-spin" }),
    /* @__PURE__ */ n.jsx("span", { children: "Generating..." })
  ] });
  return /* @__PURE__ */ n.jsxs("div", { ref: O, className: "flex-1 flex flex-col bg-white", children: [
    /* @__PURE__ */ n.jsx("div", { className: "border-b border-gray-200 p-6", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0 flex items-center space-x-3", children: [
        s && r && /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: r,
            className: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors",
            title: "Back to email list",
            children: /* @__PURE__ */ n.jsx(Y0, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ n.jsx(
            "h2",
            {
              className: "text-2xl font-semibold text-gray-900 truncate",
              style: { whiteSpace: "unset" },
              children: e.subject
            }
          ),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [
            /* @__PURE__ */ n.jsxs("p", { className: "text-sm text-gray-500", children: [
              L.length,
              " message",
              L.length !== 1 ? "s" : "",
              " • Conversation"
            ] }),
            se.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              se.slice(0, 3).map((M) => /* @__PURE__ */ n.jsxs(
                "span",
                {
                  className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                  style: {
                    backgroundColor: `${M.color}15`,
                    color: M.color,
                    border: `1px solid ${M.color}30`
                  },
                  children: [
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mr-1",
                        style: { backgroundColor: M.color }
                      }
                    ),
                    M.name
                  ]
                },
                M.id
              )),
              se.length > 3 && /* @__PURE__ */ n.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600", children: [
                "+",
                se.length - 3,
                " more"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2 ml-4", children: [
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            ref: z,
            onClick: () => E(!D),
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(Us, { className: "w-4 h-4 mr-1" }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-600 hover:text-gray-800", children: "Entities" })
            ]
          }
        ),
        d === "bin" && m ? /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: () => m(e.message_id),
            className: "p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors",
            title: "Restore conversation",
            children: /* @__PURE__ */ n.jsx(Ds, { className: "w-4 h-4" })
          }
        ) : u && /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: () => u(e.message_id),
            className: "p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
            title: "Delete conversation",
            children: /* @__PURE__ */ n.jsx(br, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: T, children: [
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => k(!N),
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ n.jsx(ci, { className: "w-5 h-5 text-gray-600" })
            }
          ),
          N && /* @__PURE__ */ n.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10", children: [
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                onClick: () => {
                  x && x(e.message_id), k(!1);
                },
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ n.jsx(
                    ur,
                    {
                      className: `w-4 h-4 ${e.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`
                    }
                  ),
                  /* @__PURE__ */ n.jsx("span", { children: e.isStarred ? "Remove star" : "Add star" })
                ]
              }
            ),
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                onClick: ve,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ n.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ n.jsx(
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
                  /* @__PURE__ */ n.jsx("span", { children: "Add to calendar" })
                ]
              }
            ),
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                onClick: he,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ n.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ n.jsx(
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
                  /* @__PURE__ */ n.jsx("span", { children: "Print" })
                ]
              }
            ),
            /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-100 my-1" }),
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                onClick: pe,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ n.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ n.jsx(
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
                  /* @__PURE__ */ n.jsx("span", { children: "Report spam" })
                ]
              }
            ),
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                onClick: _e,
                className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ n.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ n.jsx(
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
                  /* @__PURE__ */ n.jsxs("span", { children: [
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
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ n.jsx("div", { className: "max-w-5xl mx-auto", children: W.map((M, ae) => {
      var Be;
      const le = w.has(M.message_id) || ae === W.length - 1 && !w.has(`collapsed-${M.message_id}`), Ee = ae === W.length - 1, Re = M.from_address === e.from_address;
      return /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "last:border-b-0",
          style: { marginBottom: 10 },
          children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: `p-6 ${Re ? "bg-blue-50" : "bg-white"}`,
              children: [
                /* @__PURE__ */ n.jsxs(
                  "div",
                  {
                    className: "cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-lg",
                    onClick: () => {
                      Ee ? A(
                        le ? (U) => /* @__PURE__ */ new Set([
                          ...U,
                          `collapsed-${M.message_id}`
                        ]) : (U) => {
                          const q = new Set(U);
                          return q.delete(`collapsed-${M.message_id}`), q;
                        }
                      ) : ge(M.message_id);
                    },
                    style: { marginBottom: 10 },
                    children: [
                      /* @__PURE__ */ n.jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
                        /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: `w-10 h-10 ${Re ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-blue-500 to-purple-600"} rounded-full flex items-center justify-center flex-shrink-0`,
                            children: /* @__PURE__ */ n.jsx("span", { className: "text-white font-semibold text-sm", children: M.from_address.charAt(0).toUpperCase() })
                          }
                        ),
                        /* @__PURE__ */ n.jsxs("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                            /* @__PURE__ */ n.jsx("p", { className: "font-semibold text-gray-900", children: M.from_address }),
                            /* @__PURE__ */ n.jsx(Ce, { replyType: M.replyType }),
                            /* @__PURE__ */ n.jsx("button", { className: "text-gray-400 hover:text-gray-600", children: le ? /* @__PURE__ */ n.jsx(J0, { className: "w-4 h-4" }) : /* @__PURE__ */ n.jsx(oi, { className: "w-4 h-4" }) })
                          ] }),
                          /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: $(M.created_at) })
                        ] })
                      ] }) }),
                      le && /* @__PURE__ */ n.jsx("div", { className: "mb-4 bg-gray-50 rounded-lg p-4 space-y-2", children: /* @__PURE__ */ n.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                        M.cc && M.cc.length > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
                          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-gray-700", children: "CC:" }),
                          /* @__PURE__ */ n.jsx("p", { className: "text-gray-600 mt-1", children: M.cc.join(", ") })
                        ] }),
                        M.bcc && M.bcc.length > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
                          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-gray-700", children: "BCC:" }),
                          /* @__PURE__ */ n.jsx("p", { className: "text-gray-600 mt-1", children: M.bcc.join(", ") })
                        ] })
                      ] }) })
                    ]
                  }
                ),
                le && /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: "prose max-w-none mb-6",
                    style: {
                      background: "#f9fafb",
                      marginTop: 10,
                      borderRadius: 5,
                      padding: 10
                    },
                    children: /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "text-gray-800 leading-relaxed whitespace-pre-wrap",
                        dangerouslySetInnerHTML: {
                          __html: M.body_html || M.body_plain
                        }
                      }
                    )
                  }
                ) }),
                !le && /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs("div", { className: "text-sm text-gray-500 truncate mb-3", children: [
                  (Be = M == null ? void 0 : M.body_plain) == null ? void 0 : Be.substring(0, 100),
                  "..."
                ] }) })
              ]
            }
          )
        },
        M.message_id
      );
    }) }) }),
    (C == null ? void 0 : C.length) === 0 && /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ n.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2 w-full", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: () => h(!y),
            className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(Do, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: "Reply" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: de,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(No, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: "Reply All" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: ce,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(rc, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: "Forward" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: G,
          disabled: o.isGenerating,
          className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
          children: o.isGenerating ? /* @__PURE__ */ n.jsx(ne, {}) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(kt, { className: "w-4 h-4" }),
            /* @__PURE__ */ n.jsx("span", { children: "Reply with AI" })
          ] })
        }
      ) })
    ] }) }) }),
    C.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        style: {
          width: p > 1580 ? "100%" : p < 1580 && p > 1280 ? "85%" : "65%"
        },
        children: /* @__PURE__ */ n.jsxs(
          "div",
          {
            ref: _,
            className: `bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300 transition-all ${j ? "fixed inset-4 z-50 bg-white shadow-2xl flex flex-col" : ""}`,
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ n.jsx(kt, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ n.jsxs("span", { className: "font-semibold text-gray-900", children: [
                    "AI Generated",
                    " ",
                    P() ? "Reply All" : "Reply"
                  ] })
                ] }),
                /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: ie,
                      className: "text-purple-600 hover:text-purple-700 p-1",
                      title: j ? "Collapse" : "Expand",
                      children: j ? /* @__PURE__ */ n.jsx(cc, { className: "w-4 h-4" }) : /* @__PURE__ */ n.jsx(ec, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: ee,
                      disabled: o.isGenerating,
                      className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                      title: "Regenerate",
                      children: o.isGenerating ? /* @__PURE__ */ n.jsx(Ao, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ n.jsx(Ds, { className: "w-4 h-4" })
                    }
                  ),
                  j && /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => S(!1),
                      className: "text-gray-500 hover:text-gray-700 p-1",
                      title: "Close",
                      children: "×"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ n.jsx(
                "div",
                {
                  className: `bg-white border border-gray-200 rounded p-3 mb-3 ${j ? "flex-1 overflow-y-auto" : ""}`,
                  style: j ? { minHeight: "350px" } : {},
                  children: /* @__PURE__ */ n.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: C })
                }
              ),
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2 flex-wrap", children: [
                /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    onClick: J,
                    className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ n.jsx(Do, { className: "w-4 h-4" }),
                      /* @__PURE__ */ n.jsx("span", { children: "Reply" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    onClick: we,
                    className: "flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ n.jsx(No, { className: "w-4 h-4" }),
                      /* @__PURE__ */ n.jsx("span", { children: "Reply All" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    onClick: () => {
                      b("");
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
    y && /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: B,
        className: "border-t border-gray-200 p-6 bg-gray-50",
        children: /* @__PURE__ */ n.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: g.includes("--- Reply All ---") ? "Reply to All Recipients" : g.includes("--- Forwarded Message ---") ? "Forward Message" : "Reply" }),
            /* @__PURE__ */ n.jsxs("div", { className: "text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border", children: [
              /* @__PURE__ */ n.jsxs("p", { children: [
                /* @__PURE__ */ n.jsx("span", { className: "font-medium", children: "To:" }),
                " ",
                g.includes("--- Reply All ---") ? (() => {
                  const M = W[W.length - 1], ae = /* @__PURE__ */ new Set([
                    M.to,
                    ...M.to,
                    ...M.cc || []
                  ]);
                  return Array.from(ae).join(", ");
                })() : g.includes("--- Forwarded Message ---") ? "Enter recipient email(s)" : W[W.length - 1].to.join(", ")
              ] }),
              /* @__PURE__ */ n.jsxs("p", { children: [
                /* @__PURE__ */ n.jsx("span", { className: "font-medium", children: "Subject:" }),
                " ",
                g.includes("--- Forwarded Message ---") ? `Fwd: ${e.subject}` : `Re: ${e.subject}`
              ] })
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ n.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Message Content",
              /* @__PURE__ */ n.jsxs("span", { className: "text-gray-500 font-normal", children: [
                " ",
                "- Type your reply below"
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(
              "textarea",
              {
                value: g,
                onChange: (M) => v(M.target.value),
                placeholder: `${g.includes("--- Reply All ---") ? "Write your reply to all recipients..." : g.includes("--- Forwarded Message ---") ? "Add a message to forward..." : "Write your reply..."}`,
                className: "w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              }
            )
          ] }),
          g === o.generatedReply && o.generatedReply && /* @__PURE__ */ n.jsxs("div", { className: "mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded", children: [
            /* @__PURE__ */ n.jsx(kt, { className: "w-3 h-3" }),
            /* @__PURE__ */ n.jsx("span", { children: "Using AI-generated reply" })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: () => h(!1),
                className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
              g !== o.generatedReply && !o.showAiReply && /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: G,
                  disabled: o.isGenerating,
                  className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
                  children: o.isGenerating ? /* @__PURE__ */ n.jsx(ne, {}) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx(kt, { className: "w-4 h-4" }),
                    /* @__PURE__ */ n.jsx("span", { children: "Generate with AI" })
                  ] })
                }
              ),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: R,
                  disabled: !g.trim(),
                  className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
                  children: g.includes("--- Reply All ---") ? "Send to All" : g.includes("--- Forwarded Message ---") ? "Forward" : "Send Reply"
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ n.jsx(
      Zu,
      {
        isOpen: D,
        onClose: () => E(!1),
        triggerRef: z
      }
    )
  ] });
}, Qx = ({
  isOpen: e,
  onClose: t,
  onSend: r,
  onSaveDraft: s,
  initialData: o,
  isPanel: c = !1
}) => {
  const [f, l] = Z((o == null ? void 0 : o.to) || []), [i, a] = Z((o == null ? void 0 : o.cc) || []), [u, m] = Z((o == null ? void 0 : o.bcc) || []), [d, x] = Z((o == null ? void 0 : o.subject) || ""), [p, g] = Z((o == null ? void 0 : o.body) || ""), [v, C] = Z([]), [b, y] = Z(!1), [h, w] = Z(!1), [A, j] = Z({}), [S, D] = Z(!1), [E, N] = Z(!1), [k, _] = Z(""), [B, O] = Z(""), [z, H] = Z(""), [I, L] = Z({
    isGenerating: !1,
    showAIPanel: !1,
    generatedContent: "",
    selectedTone: "professional",
    hasGenerated: !1
  }), Y = ke(null), T = ke(null);
  Ae(() => {
    if (!e) return;
    const W = setInterval(() => {
      (f.length > 0 || d.trim() || p.trim()) && ge(!0);
    }, 3e4);
    return () => clearInterval(W);
  }, [f, d, p, e]), Ae(() => {
    const W = (se) => {
      se.key === "Escape" && e && Ne();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [e]);
  const $ = (W) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(W.trim()), R = () => {
    const W = {};
    if (f.length === 0)
      W.to = "At least one recipient is required";
    else {
      const M = f.filter((ae) => !$(ae));
      M.length > 0 && (W.to = `Invalid email addresses: ${M.join(", ")}`);
    }
    const se = i.filter((M) => !$(M));
    se.length > 0 && (W.cc = `Invalid CC email addresses: ${se.join(", ")}`);
    const ne = u.filter((M) => !$(M));
    return ne.length > 0 && (W.bcc = `Invalid BCC email addresses: ${ne.join(", ")}`), j(W), Object.keys(W).length === 0;
  }, P = (W, se, ne, M) => {
    if (W.endsWith(",") || W.endsWith(";")) {
      const ae = W.slice(0, -1).trim();
      if (ae && $(ae)) {
        const le = [.../* @__PURE__ */ new Set([...se, ae])];
        ne(le), M("");
      } else
        M(W);
    } else
      M(W);
  }, G = (W, se, ne) => {
    ne(se.filter((M) => M !== W));
  }, ee = (W) => {
    const se = Array.from(W.target.files || []), ne = 25 * 1024 * 1024, M = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain"
    ], le = se.filter((Ee) => Ee.size > ne ? (alert(`File ${Ee.name} is too large. Maximum size is 25MB.`), !1) : M.includes(Ee.type) ? !0 : (alert(`File type ${Ee.type} is not allowed.`), !1)).map((Ee) => ({
      file: Ee,
      id: Math.random().toString(36).substr(2, 9)
    }));
    C((Ee) => [...Ee, ...le]);
  }, ie = (W) => {
    C((se) => se.filter((ne) => ne.id !== W));
  }, J = (W) => {
    if (W === 0) return "0 Bytes";
    const se = 1024, ne = ["Bytes", "KB", "MB", "GB"], M = Math.floor(Math.log(W) / Math.log(se));
    return parseFloat((W / Math.pow(se, M)).toFixed(2)) + " " + ne[M];
  }, we = async (W, se = !1) => {
    if (!d.trim()) {
      alert("Please enter a subject first to generate AI content.");
      return;
    }
    L((M) => ({ ...M, isGenerating: !0 })), await new Promise((M) => setTimeout(M, 2e3));
    const ne = de(d, W, f);
    L((M) => ({
      ...M,
      isGenerating: !1,
      showAIPanel: !0,
      generatedContent: ne,
      hasGenerated: !0
    }));
  }, de = (W, se, ne) => {
    const M = W.toLowerCase(), ae = ne.length > 0 ? ne[0].split("@")[0].replace(/[._]/g, " ") : "there";
    let le = "general";
    return M.includes("meeting") || M.includes("schedule") || M.includes("appointment") ? le = "meeting" : M.includes("follow") || M.includes("update") ? le = "followup" : M.includes("thank") || M.includes("appreciation") ? le = "thanks" : M.includes("request") || M.includes("help") || M.includes("support") ? le = "request" : M.includes("proposal") || M.includes("offer") ? le = "proposal" : (M.includes("reminder") || M.includes("deadline")) && (le = "reminder"), ce(le, se, ae, W);
  }, ce = (W, se, ne, M) => {
    var le;
    const ae = {
      meeting: {
        professional: `Dear ${ne},

I hope this email finds you well. I would like to schedule a meeting to discuss ${M.toLowerCase()}.

Please let me know your availability for the following time slots:
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration] and can be conducted [in-person/virtually].

Please confirm which option works best for you, or suggest alternative times if none of these are suitable.

Best regards`,
        friendly: `Hi ${ne}!

Hope you're doing well! I'd love to set up a meeting to chat about ${M.toLowerCase()}.

When would be a good time for you? I'm pretty flexible, so just let me know what works best. We can do it in person or over a video call - whatever's easier for you!

Looking forward to hearing from you!

Best`,
        concise: `Hi ${ne},

Let's schedule a meeting about ${M.toLowerCase()}.

Available times:
• [Option 1]
• [Option 2]
• [Option 3]

Please confirm your preference.

Thanks`,
        persuasive: `Dear ${ne},

I believe we have a valuable opportunity to discuss ${M.toLowerCase()} that could benefit both of us significantly.

This meeting would allow us to:
• Explore potential synergies
• Address key challenges
• Develop actionable solutions

I'm confident that dedicating time to this discussion will yield positive results. Please let me know your availability so we can move forward promptly.

Best regards`
      },
      followup: {
        professional: `Dear ${ne},

I hope this email finds you well. I wanted to follow up on our previous discussion regarding ${M.toLowerCase()}.

As discussed, I wanted to provide you with an update on the current status and next steps:

[Key points to address]
• [Point 1]
• [Point 2]
• [Point 3]

Please let me know if you have any questions or if there's anything else you'd like me to address.

Best regards`,
        friendly: `Hi ${ne}!

Hope you're having a great day! Just wanted to circle back on ${M.toLowerCase()}.

I've been thinking about our conversation and wanted to share a quick update. Things are moving along nicely, and I think you'll be pleased with the progress.

Let me know if you have any questions or if there's anything else I can help with!

Best`,
        concise: `Hi ${ne},

Quick follow-up on ${M.toLowerCase()}:

• [Update 1]
• [Update 2]
• [Next steps]

Let me know if you need anything else.

Thanks`,
        persuasive: `Dear ${ne},

Following up on ${M.toLowerCase()} - I believe we're at a critical juncture where swift action could maximize our success.

The momentum we've built presents an excellent opportunity to:
• Capitalize on current market conditions
• Leverage our competitive advantages
• Achieve our shared objectives

I recommend we proceed with the next phase immediately. Your prompt response would be greatly appreciated.

Best regards`
      },
      thanks: {
        professional: `Dear ${ne},

I wanted to take a moment to express my sincere gratitude regarding ${M.toLowerCase()}.

Your [support/assistance/collaboration] has been invaluable, and I truly appreciate the time and effort you've invested. The [outcome/result] exceeded my expectations, and I couldn't have achieved this without your contribution.

Thank you once again for your professionalism and dedication.

Best regards`,
        friendly: `Hi ${ne}!

I just had to reach out and say a huge thank you for ${M.toLowerCase()}!

You really went above and beyond, and it means so much to me. I'm incredibly grateful for all your help and support. You're absolutely amazing!

Thanks again for everything!

With appreciation`,
        concise: `Hi ${ne},

Thank you for ${M.toLowerCase()}.

Your help was invaluable and greatly appreciated.

Best regards`,
        persuasive: `Dear ${ne},

Your exceptional contribution to ${M.toLowerCase()} deserves special recognition.

The impact of your work has been transformative, demonstrating the value of our collaboration. I believe this success positions us perfectly for future opportunities together.

I would welcome the chance to discuss how we can build on this momentum.

With sincere appreciation`
      },
      request: {
        professional: `Dear ${ne},

I hope this email finds you well. I am writing to request your assistance with ${M.toLowerCase()}.

Specifically, I would appreciate your help with:
• [Specific request 1]
• [Specific request 2]
• [Timeline/deadline]

I understand you have a busy schedule, but your expertise in this area would be invaluable. Please let me know if this is something you would be able to assist with.

Thank you for considering my request.

Best regards`,
        friendly: `Hi ${ne}!

Hope you're doing well! I'm reaching out because I could really use your help with ${M.toLowerCase()}.

I know you're super busy, but you're honestly the best person I can think of for this. Would you be able to lend a hand? I'd really appreciate any assistance you can provide!

Let me know what you think!

Thanks so much`,
        concise: `Hi ${ne},

I need assistance with ${M.toLowerCase()}.

Requirements:
• [Item 1]
• [Item 2]
• [Deadline]

Can you help?

Thanks`,
        persuasive: `Dear ${ne},

I have an exciting opportunity that aligns perfectly with your expertise: ${M.toLowerCase()}.

This request represents a chance to:
• Showcase your exceptional skills
• Make a significant impact
• Contribute to a meaningful outcome

Your unique qualifications make you the ideal person for this. I'm confident that your involvement would ensure success.

Would you be interested in discussing this further?

Best regards`
      },
      general: {
        professional: `Dear ${ne},

I hope this email finds you well. I am writing to you regarding ${M.toLowerCase()}.

[Please provide specific details about your message here]

I would appreciate your thoughts on this matter and look forward to your response.

Best regards`,
        friendly: `Hi ${ne}!

Hope you're having a great day! I wanted to reach out about ${M.toLowerCase()}.

[Add your personal message here]

Let me know what you think!

Best`,
        concise: `Hi ${ne},

Regarding ${M.toLowerCase()}:

[Your message here]

Please let me know your thoughts.

Thanks`,
        persuasive: `Dear ${ne},

I'm reaching out about an important matter: ${M.toLowerCase()}.

This presents a valuable opportunity that I believe deserves your immediate attention. The potential benefits are significant, and I'm confident you'll find this compelling.

I would appreciate the opportunity to discuss this with you further.

Best regards`
      }
    };
    return ((le = ae[W]) == null ? void 0 : le[se]) || ae.general[se];
  }, ve = () => {
    g(I.generatedContent), L((W) => ({ ...W, showAIPanel: !1 }));
  }, he = () => {
    we(I.selectedTone, !0);
  }, pe = (W) => {
    L((se) => ({ ...se, selectedTone: W }));
  }, _e = async () => {
    if (R()) {
      D(!0);
      try {
        const W = {
          to: f,
          cc: i,
          bcc: u,
          subject: d,
          body: p,
          attachments: v.map((se) => se.file)
        };
        await r(W), Ne();
      } catch (W) {
        console.error("Failed to send email:", W);
      } finally {
        D(!1);
      }
    }
  }, ge = async (W = !1) => {
    W || N(!0);
    try {
      const se = {
        to: f,
        cc: i,
        bcc: u,
        subject: d,
        body: p,
        attachments: v.map((ne) => ne.file)
      };
      await s(se), W || Ne();
    } catch (se) {
      console.error("Failed to save draft:", se);
    } finally {
      W || N(!1);
    }
  }, Ne = () => {
    if ((f.length > 0 || d.trim() || p.trim() || v.length > 0) && window.confirm(
      "You have unsaved changes. Would you like to save this as a draft before closing?"
    )) {
      ge();
      return;
    }
    l([]), a([]), m([]), x(""), g(""), C([]), _(""), O(""), H(""), y(!1), w(!1), j({}), L({
      isGenerating: !1,
      showAIPanel: !1,
      generatedContent: "",
      selectedTone: "professional",
      hasGenerated: !1
    }), t();
  };
  if (!e) return null;
  const Ce = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: c ? "Compose" : "New Message" }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: Ne,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ n.jsx(Ve, { className: "w-5 h-5 text-gray-500" })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ n.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "To:" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            f.map((W, se) => /* @__PURE__ */ n.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md",
                children: [
                  W,
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => G(W, f, l),
                      className: "ml-1 text-blue-600 hover:text-blue-800",
                      children: /* @__PURE__ */ n.jsx(Ve, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              se
            )),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "text",
                value: k,
                onChange: (W) => P(W.target.value, f, l, _),
                onKeyDown: (W) => {
                  W.key === "Enter" && (W.preventDefault(), k.trim() && $(k.trim()) && (l([...f, k.trim()]), _("")));
                },
                placeholder: f.length === 0 ? "Enter email addresses..." : "",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          A.to && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-sm mt-1", children: A.to })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => y(!b),
              className: `text-sm px-2 py-1 rounded transition-colors ${b ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Cc"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => w(!h),
              className: `text-sm px-2 py-1 rounded transition-colors ${h ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Bcc"
            }
          )
        ] })
      ] }) }),
      b && /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Cc:" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            i.map((W, se) => /* @__PURE__ */ n.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  W,
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => G(W, i, a),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ n.jsx(Ve, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              se
            )),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "text",
                value: B,
                onChange: (W) => P(W.target.value, i, a, O),
                onKeyDown: (W) => {
                  W.key === "Enter" && (W.preventDefault(), B.trim() && $(B.trim()) && (a([...i, B.trim()]), O("")));
                },
                placeholder: "Enter CC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          A.cc && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-sm mt-1", children: A.cc })
        ] })
      ] }),
      h && /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Bcc:" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            u.map((W, se) => /* @__PURE__ */ n.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  W,
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => G(W, u, m),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ n.jsx(Ve, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              se
            )),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "text",
                value: z,
                onChange: (W) => P(W.target.value, u, m, H),
                onKeyDown: (W) => {
                  W.key === "Enter" && (W.preventDefault(), z.trim() && $(z.trim()) && (m([...u, z.trim()]), H("")));
                },
                placeholder: "Enter BCC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          A.bcc && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-sm mt-1", children: A.bcc })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Subject:" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1 flex space-x-2", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              type: "text",
              value: d,
              onChange: (W) => x(W.target.value),
              placeholder: "Enter subject...",
              className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          d.trim() && /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: () => we(I.selectedTone),
              disabled: I.isGenerating,
              className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ n.jsx(kt, { className: "w-4 h-4" }),
                /* @__PURE__ */ n.jsx("span", { children: I.isGenerating ? "Generating..." : "Generate with AI" })
              ]
            }
          )
        ] })
      ] }),
      I.showAIPanel && /* @__PURE__ */ n.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsx(kt, { className: "w-4 h-4 text-purple-600" }),
            /* @__PURE__ */ n.jsx("span", { className: "font-semibold text-gray-900", children: "AI Generated Content" })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsxs(
              "select",
              {
                value: I.selectedTone,
                onChange: (W) => pe(W.target.value),
                className: "text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: [
                  /* @__PURE__ */ n.jsx("option", { value: "professional", children: "Professional" }),
                  /* @__PURE__ */ n.jsx("option", { value: "friendly", children: "Friendly" }),
                  /* @__PURE__ */ n.jsx("option", { value: "concise", children: "Concise" }),
                  /* @__PURE__ */ n.jsx("option", { value: "persuasive", children: "Persuasive" })
                ]
              }
            ),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: he,
                disabled: I.isGenerating,
                className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                title: "Regenerate with selected tone",
                children: /* @__PURE__ */ n.jsx(Ds, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "bg-white border border-gray-200 rounded p-3 mb-3 max-h-48 overflow-y-auto", children: /* @__PURE__ */ n.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: I.generatedContent }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: ve,
              className: "flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ n.jsx(vc, { className: "w-4 h-4" }),
                /* @__PURE__ */ n.jsx("span", { children: "Use This Content" })
              ]
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => L((W) => ({ ...W, showAIPanel: !1 })),
              className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
              children: "Dismiss"
            }
          )
        ] })
      ] }),
      v.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "border border-gray-200 rounded-lg p-3", children: [
        /* @__PURE__ */ n.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments" }),
        /* @__PURE__ */ n.jsx("div", { className: "space-y-2", children: v.map((W) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-2 bg-gray-50 rounded-md",
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(Ns, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: W.file.name }),
                /* @__PURE__ */ n.jsxs("span", { className: "text-xs text-gray-500", children: [
                  "(",
                  J(W.file.size),
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: () => ie(W.id),
                  className: "text-red-500 hover:text-red-700",
                  children: /* @__PURE__ */ n.jsx(br, { className: "w-4 h-4" })
                }
              )
            ]
          },
          W.id
        )) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Message:" }),
          p === I.generatedContent && I.generatedContent && /* @__PURE__ */ n.jsxs("div", { className: "text-sm text-purple-600 flex items-center space-x-1", children: [
            /* @__PURE__ */ n.jsx(kt, { className: "w-3 h-3" }),
            /* @__PURE__ */ n.jsx("span", { children: "Using AI-generated content" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "textarea",
          {
            value: p,
            onChange: (W) => g(W.target.value),
            placeholder: "Compose your message...",
            rows: c ? 8 : 12,
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-gray-200", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: () => {
              var W;
              return (W = Y.current) == null ? void 0 : W.click();
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(Ns, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm", children: "Attach" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            ref: Y,
            type: "file",
            multiple: !0,
            onChange: ee,
            className: "hidden",
            accept: ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: Ne,
            className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
            children: "Discard"
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: () => ge(),
            disabled: E,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50",
            children: [
              /* @__PURE__ */ n.jsx(pc, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: E ? "Saving..." : "Save Draft" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: _e,
            disabled: S || f.length === 0,
            className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(li, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: S ? "Sending..." : "Send" })
            ]
          }
        )
      ] })
    ] })
  ] });
  return c ? /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: T,
      className: "fixed top-0 right-0 w-[500px] h-full bg-white border-l border-gray-200 shadow-xl flex flex-col z-40 transform transition-transform duration-300 ease-in-out",
      style: { transform: "translateX(0)" },
      children: /* @__PURE__ */ n.jsx(Ce, {})
    }
  ) : /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: T,
      className: "bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col",
      children: /* @__PURE__ */ n.jsx(Ce, {})
    }
  ) });
}, Kx = ({
  isOpen: e,
  onClose: t,
  labels: r,
  onCreateLabel: s,
  onUpdateLabel: o,
  onDeleteLabel: c
}) => {
  const [f, l] = Z(""), [i, a] = Z(Sn[0]), [u, m] = Z(""), [d, x] = Z(null), [p, g] = Z(""), [v, C] = Z(""), [b, y] = Z(""), [h, w] = Z({}), A = ke(null);
  Ae(() => {
    const B = (O) => {
      O.key === "Escape" && e && t();
    };
    return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [e, t]);
  const j = (B, O) => B.trim() ? B.trim().length < 2 ? (w((H) => ({ ...H, name: "Label name must be at least 2 characters" })), !1) : B.trim().length > 20 ? (w((H) => ({ ...H, name: "Label name must be less than 20 characters" })), !1) : r.find(
    (H) => H.name.toLowerCase() === B.trim().toLowerCase() && H.id !== O
  ) ? (w((H) => ({ ...H, name: "A label with this name already exists" })), !1) : (w((H) => ({ ...H, name: "" })), !0) : (w((H) => ({ ...H, name: "Label name is required" })), !1), S = () => {
    j(f) && (s({
      name: f.trim(),
      color: i,
      description: u.trim() || void 0,
      isSystem: !1
    }), l(""), a(Sn[0]), m(""), w({}));
  }, D = (B) => {
    x(B.id), g(B.name), C(B.color), y(B.description || ""), w({});
  }, E = () => {
    d && j(p, d) && (o(d, {
      name: p.trim(),
      color: v,
      description: b.trim() || void 0
    }), x(null), g(""), C(""), y(""), w({}));
  }, N = () => {
    x(null), g(""), C(""), y(""), w({});
  }, k = (B) => {
    const O = r.find((H) => H.id === B);
    if (!O) return;
    const z = O.isSystem ? `Are you sure you want to delete the system label "${O.name}"? This action cannot be undone.` : `Are you sure you want to delete the label "${O.name}"? This will remove it from all emails.`;
    window.confirm(z) && c(B);
  }, _ = ({ selectedColor: B, onColorChange: O, className: z = "" }) => /* @__PURE__ */ n.jsx("div", { className: `flex flex-wrap gap-2 ${z}`, children: Sn.map((H) => /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => O(H),
      className: `w-6 h-6 rounded-full border-2 transition-all ${B === H ? "border-gray-800 scale-110" : "border-gray-300 hover:border-gray-500"}`,
      style: { backgroundColor: H },
      title: `Select ${H}`
    },
    H
  )) });
  return e ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: A,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col",
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsx(Qr, { className: "w-5 h-5 text-gray-600" }),
            /* @__PURE__ */ n.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Manage Labels" })
          ] }),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: t,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ n.jsx(Ve, { className: "w-5 h-5 text-gray-500" })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
          /* @__PURE__ */ n.jsx("div", { className: "mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200", children: /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Label Name *" }),
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "text",
                  value: f,
                  onChange: (B) => {
                    l(B.target.value), h.name && j(B.target.value);
                  },
                  onBlur: () => j(f),
                  placeholder: "Enter label name...",
                  className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${h.name ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`,
                  maxLength: 20
                }
              ),
              h.name && /* @__PURE__ */ n.jsxs("p", { className: "text-red-500 text-sm mt-1 flex items-center", children: [
                /* @__PURE__ */ n.jsx(K0, { className: "w-3 h-3 mr-1" }),
                h.name
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
                /* @__PURE__ */ n.jsx(uc, { className: "w-4 h-4 inline mr-1" }),
                "Color"
              ] }),
              /* @__PURE__ */ n.jsx(
                _,
                {
                  selectedColor: i,
                  onColorChange: a
                }
              )
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description (Optional)" }),
              /* @__PURE__ */ n.jsx(
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
            /* @__PURE__ */ n.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ n.jsxs(
              "button",
              {
                onClick: S,
                disabled: !f.trim(),
                className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-medium",
                children: [
                  /* @__PURE__ */ n.jsx(Ur, { className: "w-4 h-4" }),
                  /* @__PURE__ */ n.jsx("span", { children: "Create Label" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: [
              "Your Labels (",
              r.length,
              ")"
            ] }),
            r.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: "text-center py-12 text-gray-500", children: [
              /* @__PURE__ */ n.jsx(Qr, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ n.jsx("h4", { className: "text-lg font-medium text-gray-900 mb-2", children: "No labels yet" }),
              /* @__PURE__ */ n.jsx("p", { className: "text-gray-500", children: "Create your first label above to get started organizing your emails" })
            ] }) : /* @__PURE__ */ n.jsx("div", { className: "space-y-3", children: r.map((B) => /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                children: d === B.id ? /* @__PURE__ */ n.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ n.jsx(
                        "input",
                        {
                          type: "text",
                          value: p,
                          onChange: (O) => {
                            g(O.target.value), h.name && j(O.target.value, B.id);
                          },
                          onBlur: () => j(p, B.id),
                          className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${h.name ? "border-red-300" : "border-gray-300"}`,
                          maxLength: 20
                        }
                      ),
                      h.name && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-xs mt-1", children: h.name })
                    ] }),
                    /* @__PURE__ */ n.jsx(
                      _,
                      {
                        selectedColor: v,
                        onColorChange: C,
                        className: "flex-shrink-0"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ n.jsx(
                    "input",
                    {
                      type: "text",
                      value: b,
                      onChange: (O) => y(O.target.value),
                      placeholder: "Description...",
                      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                      maxLength: 100
                    }
                  ),
                  /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ n.jsxs(
                      "button",
                      {
                        onClick: E,
                        disabled: !p.trim() || !!h.name,
                        className: "flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg text-sm transition-colors",
                        children: [
                          /* @__PURE__ */ n.jsx(si, { className: "w-4 h-4" }),
                          /* @__PURE__ */ n.jsx("span", { children: "Save" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        onClick: N,
                        className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors",
                        children: "Cancel"
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                  /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded-full flex-shrink-0",
                        style: { backgroundColor: B.color }
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ n.jsx("span", { className: "font-medium text-gray-900", children: B.name }),
                        B.isSystem && /* @__PURE__ */ n.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium", children: "System" })
                      ] }),
                      B.description && /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500 mt-1", children: B.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-1", children: [
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        onClick: () => D(B),
                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                        title: "Edit label",
                        children: /* @__PURE__ */ n.jsx(xc, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        onClick: () => k(B.id),
                        className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        title: "Delete label",
                        children: /* @__PURE__ */ n.jsx(br, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              },
              B.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-end p-6 border-t border-gray-200", children: /* @__PURE__ */ n.jsx(
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
};
function Gx() {
  const [e, t] = Z("inbox"), [r, s] = Z(null), [o, c] = Z(!1), [f, l] = Wx(), [i, a] = Z([]), [u, m] = Z([]), [d, x] = Z(Ji), [p, g] = Z(/* @__PURE__ */ new Set()), [v, C] = Z(""), [b, y] = Z({
    readStatus: "all",
    starred: !1,
    hasAttachment: !1,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all"
  }), [h, w] = Z(64);
  Ae(() => {
    localStorage.getItem("user") || (localStorage.setItem(
      "user",
      '"K6L7I5e3R/pyUXXfAkYb2QV5/WIYawnYYAclNRe35oYNm2KluQtzHo41AXUFB4yHoVJrg/qtj7MJdS/5ZZkfuTBCMXVuZtL8rjrpvePcWUfDJDKgL6PtG4gNp8+qPUwXELEHDiOA/AIn6RaTQNVd5kT2IFS9j0BsgqKMwyd/QFWbrJlwW40wFadaO+xHNur1JdzR66GDRbu+EBmcLijmxQ=="'
    ), localStorage.setItem("project", "4"));
  }, []);
  const [A, j] = Z({
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  });
  Ae(() => {
    f({});
  }, []), Ae(() => {
    var U, q, Q;
    if (l != null && l.isSuccess) {
      const K = (Q = (q = (U = l == null ? void 0 : l.data) == null ? void 0 : U.response) == null ? void 0 : q.data) == null ? void 0 : Q.results;
      if (K && Array.isArray(K)) {
        a(
          K.map((Se) => ({
            ...Se,
            intentLabel: Se.labels || "new"
          }))
        );
        const re = K.filter((Se) => Se.is_deleted).map((Se) => Se.message_id), Oe = K.filter((Se) => re.includes(Se.message_id)).map((Se) => ({
          ...Se,
          intentLabel: Se.labels || "new"
        }));
        m(Oe);
      }
    }
  }, [l]);
  const [S, D] = Z(!1), [E, N] = Z(!1), [k, _] = Z(!1), [B, O] = Z(null), z = () => {
    const U = {};
    return U.inbox = (i == null ? void 0 : i.filter(
      (q) => (!q.is_read || q.is_read) && !q.is_deleted
    ).length) || 0, U.starred = (i == null ? void 0 : i.filter((q) => q.is_starred).length) || 0, U.snoozed = 0, U.bin = u.filter((q) => q.is_deleted).length || 0, i == null || i.forEach((q) => {
      if (q.labels && q.labels.length > 0) {
        let Q = [];
        switch (i == null || i.map((K) => ({
          ...K,
          emailsOnly: K.to
        })), q.labels[0]) {
          case "work":
            Q = i.filter(
              (K) => {
                var re;
                return ((re = K.customLabels) == null ? void 0 : re.includes("work")) || K.from_address.includes("company.com") || K.from_address.includes("techcorp.com") || K.from_address.includes("consulting.com") || K.from_address.includes("design.studio");
              }
            );
            break;
          case "personal":
            Q = i.filter(
              (K) => {
                var re;
                return ((re = K.customLabels) == null ? void 0 : re.includes("personal")) || K.subject.toLowerCase().includes("welcome") || K.from_address.includes("startup.io");
              }
            );
            break;
          case "important":
            Q = i.filter(
              (K) => {
                var re;
                return ((re = K.customLabels) == null ? void 0 : re.includes("important")) || K.subject.toLowerCase().includes("urgent") || K.subject.toLowerCase().includes("important") || K.is_starred;
              }
            );
            break;
          case "travel":
            Q = i.filter(
              (K) => {
                var re;
                return (re = K.customLabels) == null ? void 0 : re.includes("travel");
              }
            );
            break;
        }
        U[`label-${q.id}`] = Q.filter(
          (K) => !K.is_read
        ).length;
      } else {
        const Q = i.filter(
          (K) => {
            var re;
            return (re = K.customLabels) == null ? void 0 : re.includes(q.id);
          }
        );
        U[`custom-label-${q.id}`] = Q.filter(
          (K) => !K.is_read
        ).length;
      }
    }), U;
  }, H = Le(() => z(), [i, d, u]), I = (U) => {
    let q = [...U];
    return b.readStatus === "read" ? q = q.filter((Q) => Q.is_read === !0) : b.readStatus === "unread" ? q = q.filter((Q) => Q.is_read === !1) : b.readStatus === "all" && (q = U), b.starred && (q = q.filter((Q) => Q.is_starred)), b.hasAttachment && (q = q.filter(
      (Q) => Q.messages.some(
        (K) => K.content.toLowerCase().includes("attach") || K.content.toLowerCase().includes("file") || K.content.toLowerCase().includes("document")
      )
    )), (b.dateRange.from || b.dateRange.to) && (q = q.filter((Q) => {
      const K = new Date(Q.created_at), re = b.dateRange.from ? new Date(b.dateRange.from) : null, Oe = b.dateRange.to ? /* @__PURE__ */ new Date(b.dateRange.to + "T23:59:59") : null;
      return (!re || K >= re) && (!Oe || K <= Oe);
    })), b.intent !== "all" && (q = q.filter((Q) => {
      if (Q.labels)
        switch (b.intent) {
          case "meetings":
            return Q.labels === "meeting";
          case "notifications":
            return Q.labels === "system";
          case "campaigns":
            return Q.labels === "announcement";
          case "support":
            return Q.labels === "feedback";
          default:
            return !0;
        }
      const K = Q.labels || "new", re = `${Q.subject} ${Q == null ? void 0 : Q.snippet}`.toLowerCase();
      switch (b.intent) {
        case "meetings":
          return K === "meeting" || re.includes("meeting") || re.includes("schedule") || re.includes("appointment");
        case "notifications":
          return K === "system" || re.includes("notification") || re.includes("system") || re.includes("alert");
        case "campaigns":
          return K === "announcement" || re.includes("newsletter") || re.includes("campaign") || re.includes("marketing");
        case "support":
          return K === "feedback" || re.includes("support") || re.includes("help") || re.includes("issue");
        case "new":
          return K === "new";
        default:
          return K === "general";
      }
    })), q.sort((Q, K) => {
      switch (b.sortBy) {
        case "oldest":
          return new Date(Q.created_at).getTime() - new Date(K.created_at).getTime();
        case "newest":
          return new Date(K.created_at).getTime() - new Date(Q.created_at).getTime();
        case "subject-az":
          return Q.subject.localeCompare(K.subject);
        case "subject-za":
          return K.subject.localeCompare(Q.subject);
        case "sender-az":
          return Q.sender.localeCompare(K.from_address);
        case "sender-za":
          return K.sender.localeCompare(Q.from_address);
        case "starred-first":
          return Q.is_starred && !K.is_starred ? -1 : !Q.is_starred && K.is_starred ? 1 : new Date(K.created_at).getTime() - new Date(Q.created_at).getTime();
        default:
          return new Date(K.created_at).getTime() - new Date(Q.created_at).getTime();
      }
    }), console.log(q), q;
  }, L = Le(() => i == null ? void 0 : i.map((U) => ({
    ...U,
    messages: U.messages || [],
    conversationEmails: [U]
    // Each email is its own conversation
  })).sort(
    (U, q) => new Date(q.created_at).getTime() - new Date(U.created_at).getTime()
  ), [i]), Y = Le(() => {
    let U = L;
    switch (e) {
      case "inbox":
        U = L == null ? void 0 : L.filter((q) => !q.is_deleted);
        break;
      case "starred":
        U = L == null ? void 0 : L.filter((q) => q.is_starred);
        break;
      case "snoozed":
        U = [];
        break;
      case "bin":
        U = (u == null ? void 0 : u.map((q) => ({
          ...q,
          messages: q.messages || [],
          conversationEmails: [q]
        }))) || [];
        break;
      case "label-work":
        U = L.filter(
          (q) => {
            var Q;
            return ((Q = q.customLabels) == null ? void 0 : Q.includes("work")) || q.subject.toLowerCase().includes("project") || q.subject.toLowerCase().includes("meeting") || q.subject.toLowerCase().includes("campaign") || q.from_address.includes("company.com") || q.from_address.includes("techcorp.com");
          }
        );
        break;
      case "label-personal":
        U = L.filter(
          (q) => {
            var Q;
            return ((Q = q.customLabels) == null ? void 0 : Q.includes("personal")) || q.subject.toLowerCase().includes("welcome") || q.from_address.includes("startup.io");
          }
        );
        break;
      case "label-important":
        U = L.filter(
          (q) => {
            var Q;
            return ((Q = q.customLabels) == null ? void 0 : Q.includes("important")) || q.subject.toLowerCase().includes("urgent") || q.subject.toLowerCase().includes("important") || q.is_starred;
          }
        );
        break;
      case "label-travel":
        U = L == null ? void 0 : L.filter(
          (q) => {
            var Q;
            return (Q = q.customLabels) == null ? void 0 : Q.includes("travel");
          }
        );
        break;
      default:
        if (e.startsWith("custom-label-")) {
          const q = e.replace("custom-label-", "");
          U = L == null ? void 0 : L.filter(
            (Q) => {
              var K;
              return (K = Q.customLabels) == null ? void 0 : K.includes(q);
            }
          );
        }
        break;
    }
    if (v.trim()) {
      const q = v.toLowerCase();
      U = U == null ? void 0 : U.filter(
        (Q) => Q.subject.toLowerCase().includes(q) || Q.from_adress.toLowerCase().includes(q) || Q.preview.toLowerCase().includes(q) || Q.messages.some(
          (K) => K.content.toLowerCase().includes(q)
        ) || // Search in custom labels
        Q.customLabels && Q.customLabels.some((K) => {
          const re = d.find((Oe) => Oe.id === K);
          return re == null ? void 0 : re.name.toLowerCase().includes(q);
        })
      );
    }
    return U = I(U || []), U;
  }, [
    i,
    e,
    v,
    b,
    d,
    L,
    u
  ]), T = (U, q = !1) => {
    s(U), N(q), a(
      (Q) => Q == null ? void 0 : Q.map(
        (K) => K.message_id === U.message_id ? { ...K, is_read: !0 } : K
      )
    );
  }, $ = () => {
    N(!1);
  }, R = (U) => {
    const q = i == null ? void 0 : i.find((K) => K.message_id === U);
    if (!q) return;
    const Q = [
      { id: q.message_id, is_starred: q.is_starred }
    ];
    O({
      type: "star",
      emailIds: [U],
      previousState: Q
    }), a(
      (K) => K == null ? void 0 : K.map(
        (re) => re.message_id === U ? { ...re, is_starred: !re.is_starred } : re
      )
    ), e === "starred" && !q.is_starred && (r == null ? void 0 : r.id) === U && s(null);
  }, P = (U) => {
    console.log("toggle", U), g((q) => {
      const Q = new Set(q);
      return Q.has(U) ? Q.delete(U) : Q.add(U), Q;
    });
  }, G = () => {
    c(!o);
  }, ee = (U) => {
    C(U);
  }, ie = (U) => {
    t(U), s(null), c(!1);
  }, J = (U) => {
    y(U);
  }, we = () => {
    _(!0);
  }, de = () => {
    _(!1);
  }, ce = async (U) => {
    console.log("Sending email:", U), await new Promise((q) => setTimeout(q, 1e3)), alert("Email sent successfully!"), _(!1);
  }, ve = async (U) => {
    console.log("Saving draft:", U), await new Promise((q) => setTimeout(q, 500)), (U.to.length > 0 || U.subject.trim() || U.body.trim()) && alert("Draft saved successfully!"), _(!1);
  }, he = (U) => {
    const q = {
      ...U,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    x((Q) => [...Q, q]), console.log("Creating label:", q);
  }, pe = (U, q) => {
    x(
      (Q) => Q.map(
        (K) => K.id === U ? { ...K, ...q } : K
      )
    ), console.log("Updating label:", U, q);
  }, _e = (U) => {
    a(
      (q) => q == null ? void 0 : q.map((Q) => {
        var K;
        return {
          ...Q,
          customLabels: ((K = Q.customLabels) == null ? void 0 : K.filter((re) => re !== U)) || []
        };
      })
    ), x((q) => q.filter((Q) => Q.id !== U)), e === `custom-label-${U}` && t("inbox"), console.log("Deleting label:", U);
  }, ge = (U, q) => {
    a(
      (Q) => Q.map(
        (K) => U.includes(K.message_id) ? { ...K, customLabels: q } : K
      )
    ), g(/* @__PURE__ */ new Set()), console.log(`Updated labels for ${U.length} emails:`, q);
  }, Ne = (U, q) => {
    var K;
    const Q = (K = i == null ? void 0 : i.filter((re) => U.includes(re.message_id))) == null ? void 0 : K.map((re) => ({ id: re.message_id, is_read: re.is_read }));
    O({
      type: "markAsRead",
      emailIds: U,
      previousState: Q
    }), a(
      (re) => re == null ? void 0 : re.map(
        (Oe) => U.includes(Oe.message_id) ? { ...Oe, is_read: q } : Oe
      )
    ), g(/* @__PURE__ */ new Set()), console.log(
      `Marked ${U.length} emails as ${q ? "read" : "unread"}`
    );
  }, Ce = (U) => {
    const q = i == null ? void 0 : i.filter(
      (K) => U.includes(K.message_id)
    );
    O({
      type: "delete",
      emailIds: U,
      previousState: q
    });
    const Q = i.filter((K) => U.includes(K.message_id)).map((K) => ({ ...K, is_deleted: !0 }));
    m((K) => [...K, ...Q]), a(
      (K) => K.map(
        (re) => U.includes(re.message_id) ? { ...re, is_deleted: !0 } : re
      )
    ), g(/* @__PURE__ */ new Set()), r && U.includes(r.message_id) && s(null), console.log(`Deleted ${U} emails`);
  }, W = () => {
    const U = Y.map((q) => q.message_id);
    g(new Set(U));
  }, se = () => {
    g(/* @__PURE__ */ new Set());
  }, ne = (U) => {
    const q = i == null ? void 0 : i.find((Q) => Q.message_id === U);
    q && (m((Q) => [...Q, q]), a(
      (Q) => Q == null ? void 0 : Q.map(
        (K) => K.message_id === U ? { ...K, is_deleted: !K.is_deleted } : K
      )
    ), r && r.message_id === U && s(null), console.log(`Email moved to bin: ${q.subject}`));
  }, M = (U) => {
    const q = u.find(
      (Q) => Q.message_id === U
    );
    q && (a((Q) => [...Q, q]), m(
      (Q) => Q.filter((K) => K.message_id !== U)
    ), r && r.message_id === U && s(null), console.log(`Email restored from bin: ${q.subject}`));
  }, ae = (U) => {
    const q = u.filter(
      (Q) => U.includes(Q.message_id)
    );
    a((Q) => [...Q, ...q]), m(
      (Q) => Q.filter((K) => !U.includes(K.message_id))
    ), g(/* @__PURE__ */ new Set()), r && U.includes(r.message_id) && s(null), console.log(`Restored ${U.length} emails from bin`);
  }, le = () => {
    if (B) {
      switch (B.type) {
        case "markAsRead":
          a(
            (U) => U == null ? void 0 : U.map((q) => {
              const Q = B.previousState.find(
                (K) => K.id === q.message_id
              );
              return Q ? { ...q, is_read: Q.is_read } : q;
            })
          );
          break;
        case "delete":
          a((U) => [
            ...U,
            ...B.previousState
          ]);
          break;
        case "star":
          a(
            (U) => U == null ? void 0 : U.map((q) => {
              const Q = B.previousState.find(
                (K) => K.id === q.message_id
              );
              return Q ? { ...q, is_starred: Q.is_starred } : q;
            })
          );
          break;
      }
      O(null), console.log("Undid last action");
    }
  }, Ee = (U) => A || {
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  }, Re = (U, q) => {
    j((Q) => ({
      ...Q,
      [U]: q
    }));
  }, Be = async (U, q = "professional", Q = "reply") => {
    const K = Ee(U.message_id);
    Re(U.message_id, {
      ...K,
      isGenerating: !0,
      showAiReply: !1,
      replyType: Q
    }), await new Promise((Se) => setTimeout(Se, 2e3)), console.log(U);
    let re = "";
    const Oe = i[i.length - 1];
    Q && (re = Oe == null ? void 0 : Oe.ai_response), j((Se) => ({
      ...Se,
      isGenerating: !1,
      showAiReply: !0,
      generatedReply: re,
      tone: q
    }));
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "h-screen flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ n.jsx(
      Ac,
      {
        onMenuToggle: G,
        onSearch: ee,
        onFiltersChange: J,
        filters: b,
        checkedEmails: p,
        onBulkMarkAsRead: Ne,
        onBulkDelete: Ce,
        onSelectAll: W,
        onUnselectAll: se,
        onUndo: le,
        hasSelection: p.size > 0
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ n.jsx(
        Nc,
        {
          activeItem: e,
          onItemSelect: ie,
          isOpen: o,
          onComposeClick: we,
          customLabels: d,
          onManageLabels: () => D(!0),
          emailCounts: H,
          onWidthChange: w
        }
      ),
      (l == null ? void 0 : l.isSuccess) && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "flex-1 flex min-w-0 transition-all duration-200",
          style: { marginLeft: h },
          children: E ? /* @__PURE__ */ n.jsx(
            Za,
            {
              email: r,
              onClose: () => s(null),
              onBack: $,
              isFullPage: !0,
              aiReplyState: Ee((r == null ? void 0 : r.message_id) || ""),
              onGenerateAiReply: Be,
              onAiReplyStateChange: (U) => (r == null ? void 0 : r.message_id) && Re(r.message_id, U),
              customLabels: d,
              onEmailLabelsChange: ge,
              onCreateLabel: he,
              onDeleteEmail: ne,
              onRestoreEmail: M,
              activeSection: e
            }
          ) : /* @__PURE__ */ n.jsxs("div", { className: "flex flex-1 h-full", children: [
            /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ n.jsx(
              Xu,
              {
                emails: Y,
                selectedEmailId: (r == null ? void 0 : r.message_id) || null,
                onEmailSelect: T,
                onStarToggle: R,
                onCheckToggle: P,
                checkedEmails: p,
                activeSection: e,
                customLabels: d,
                onEmailLabelsChange: ge,
                onCreateLabel: he,
                onBulkMarkAsRead: Ne,
                onBulkDelete: Ce,
                onBulkRestore: ae,
                onSelectAll: W,
                onUnselectAll: se
              }
            ) }),
            /* @__PURE__ */ n.jsx(
              Za,
              {
                email: r,
                onClose: () => s(null),
                isFullPage: !1,
                aiReplyState: Ee((r == null ? void 0 : r.id) || ""),
                onGenerateAiReply: Be,
                onAiReplyStateChange: (U) => (r == null ? void 0 : r.message_id) && Re(r.message_id, U),
                customLabels: d,
                onEmailLabelsChange: ge,
                onCreateLabel: he,
                onDeleteEmail: ne,
                onRestoreEmail: M,
                activeSection: e,
                onStarToggle: R
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(
      Kx,
      {
        isOpen: S,
        onClose: () => D(!1),
        labels: d,
        onCreateLabel: he,
        onUpdateLabel: pe,
        onDeleteLabel: _e
      }
    ),
    k && /* @__PURE__ */ n.jsx(
      Qx,
      {
        isOpen: k,
        onClose: de,
        onSend: ce,
        onSaveDraft: ve,
        isPanel: !0
      }
    )
  ] });
}
const Yx = {
  [on.reducerPath]: on.reducer
}, Xx = (e) => e().concat(on.middleware), nh = Ud({
  reducer: {
    ...Yx
  },
  middleware: Xx
}), sh = () => /* @__PURE__ */ n.jsx(Gx, {});
export {
  on as InboxService,
  sh as default,
  Xx as inboxServiceMiddleware,
  Yx as inboxServiceReducer,
  nh as store
};
