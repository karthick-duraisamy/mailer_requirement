var P0 = Object.defineProperty;
var T0 = (e, t, r) => t in e ? P0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Rr = (e, t, r) => T0(e, typeof t != "symbol" ? t + "" : t, r);
import * as H from "react";
import Zt, { forwardRef as M0, createElement as vo, useState as J, useRef as _e, useEffect as be, useLayoutEffect as Za, useCallback as lt, useMemo as Me, useDebugValue as jn } from "react";
import * as Ja from "react-dom";
import L0 from "react-dom";
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function I0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function z0(e) {
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
var Es = { exports: {} }, ir = {};
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
function $0() {
  if (bo) return ir;
  bo = 1;
  var e = Zt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, i, a) {
    var u, m = {}, d = null, x = null;
    a !== void 0 && (d = "" + a), i.key !== void 0 && (d = "" + i.key), i.ref !== void 0 && (x = i.ref);
    for (u in i) s.call(i, u) && !c.hasOwnProperty(u) && (m[u] = i[u]);
    if (l && l.defaultProps) for (u in i = l.defaultProps, i) m[u] === void 0 && (m[u] = i[u]);
    return { $$typeof: t, type: l, key: d, ref: x, props: m, _owner: o.current };
  }
  return ir.Fragment = r, ir.jsx = f, ir.jsxs = f, ir;
}
var cr = {};
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
function H0() {
  return wo || (wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Zt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function b(F) {
      if (F === null || typeof F != "object")
        return null;
      var Z = p && F[p] || F[g];
      return typeof Z == "function" ? Z : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(F) {
      {
        for (var Z = arguments.length, se = new Array(Z > 1 ? Z - 1 : 0), he = 1; he < Z; he++)
          se[he - 1] = arguments[he];
        y("error", F, se);
      }
    }
    function y(F, Z, se) {
      {
        var he = C.ReactDebugCurrentFrame, De = he.getStackAddendum();
        De !== "" && (Z += "%s", se = se.concat([De]));
        var Se = se.map(function(Ee) {
          return String(Ee);
        });
        Se.unshift("Warning: " + Z), Function.prototype.apply.call(console[F], console, Se);
      }
    }
    var h = !1, w = !1, j = !1, A = !1, S = !1, D;
    D = Symbol.for("react.module.reference");
    function E(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === s || F === c || S || F === o || F === a || F === u || A || F === x || h || w || j || typeof F == "object" && F !== null && (F.$$typeof === d || F.$$typeof === m || F.$$typeof === f || F.$$typeof === l || F.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === D || F.getModuleId !== void 0));
    }
    function N(F, Z, se) {
      var he = F.displayName;
      if (he)
        return he;
      var De = Z.displayName || Z.name || "";
      return De !== "" ? se + "(" + De + ")" : se;
    }
    function _(F) {
      return F.displayName || "Context";
    }
    function k(F) {
      if (F == null)
        return null;
      if (typeof F.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof F == "function")
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
            var Z = F;
            return _(Z) + ".Consumer";
          case f:
            var se = F;
            return _(se._context) + ".Provider";
          case i:
            return N(F, F.render, "ForwardRef");
          case m:
            var he = F.displayName || null;
            return he !== null ? he : k(F.type) || "Memo";
          case d: {
            var De = F, Se = De._payload, Ee = De._init;
            try {
              return k(Ee(Se));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, R = 0, P, $, L, V, Y, O, T;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function I() {
      {
        if (R === 0) {
          P = console.log, $ = console.info, L = console.warn, V = console.error, Y = console.group, O = console.groupCollapsed, T = console.groupEnd;
          var F = {
            configurable: !0,
            enumerable: !0,
            value: q,
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
    function G() {
      {
        if (R--, R === 0) {
          var F = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, F, {
              value: P
            }),
            info: B({}, F, {
              value: $
            }),
            warn: B({}, F, {
              value: L
            }),
            error: B({}, F, {
              value: V
            }),
            group: B({}, F, {
              value: Y
            }),
            groupCollapsed: B({}, F, {
              value: O
            }),
            groupEnd: B({}, F, {
              value: T
            })
          });
        }
        R < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = C.ReactCurrentDispatcher, ue;
    function te(F, Z, se) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (De) {
            var he = De.stack.trim().match(/\n( *(at )?)/);
            ue = he && he[1] || "";
          }
        return `
` + ue + F;
      }
    }
    var me = !1, fe;
    {
      var K = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new K();
    }
    function re(F, Z) {
      if (!F || me)
        return "";
      {
        var se = fe.get(F);
        if (se !== void 0)
          return se;
      }
      var he;
      me = !0;
      var De = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Se;
      Se = ne.current, ne.current = null, I();
      try {
        if (Z) {
          var Ee = function() {
            throw Error();
          };
          if (Object.defineProperty(Ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ee, []);
            } catch (He) {
              he = He;
            }
            Reflect.construct(F, [], Ee);
          } else {
            try {
              Ee.call();
            } catch (He) {
              he = He;
            }
            F.call(Ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (He) {
            he = He;
          }
          F();
        }
      } catch (He) {
        if (He && he && typeof He.stack == "string") {
          for (var ve = He.stack.split(`
`), $e = he.stack.split(`
`), Re = ve.length - 1, Oe = $e.length - 1; Re >= 1 && Oe >= 0 && ve[Re] !== $e[Oe]; )
            Oe--;
          for (; Re >= 1 && Oe >= 0; Re--, Oe--)
            if (ve[Re] !== $e[Oe]) {
              if (Re !== 1 || Oe !== 1)
                do
                  if (Re--, Oe--, Oe < 0 || ve[Re] !== $e[Oe]) {
                    var Ye = `
` + ve[Re].replace(" at new ", " at ");
                    return F.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", F.displayName)), typeof F == "function" && fe.set(F, Ye), Ye;
                  }
                while (Re >= 1 && Oe >= 0);
              break;
            }
        }
      } finally {
        me = !1, ne.current = Se, G(), Error.prepareStackTrace = De;
      }
      var Ut = F ? F.displayName || F.name : "", Rt = Ut ? te(Ut) : "";
      return typeof F == "function" && fe.set(F, Rt), Rt;
    }
    function le(F, Z, se) {
      return re(F, !1);
    }
    function xe(F) {
      var Z = F.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function Ce(F, Z, se) {
      if (F == null)
        return "";
      if (typeof F == "function")
        return re(F, xe(F));
      if (typeof F == "string")
        return te(F);
      switch (F) {
        case a:
          return te("Suspense");
        case u:
          return te("SuspenseList");
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case i:
            return le(F.render);
          case m:
            return Ce(F.type, Z, se);
          case d: {
            var he = F, De = he._payload, Se = he._init;
            try {
              return Ce(Se(De), Z, se);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, je = {}, Ae = C.ReactDebugCurrentFrame;
    function Q(F) {
      if (F) {
        var Z = F._owner, se = Ce(F.type, F._source, Z ? Z.type : null);
        Ae.setExtraStackFrame(se);
      } else
        Ae.setExtraStackFrame(null);
    }
    function ie(F, Z, se, he, De) {
      {
        var Se = Function.call.bind(ge);
        for (var Ee in F)
          if (Se(F, Ee)) {
            var ve = void 0;
            try {
              if (typeof F[Ee] != "function") {
                var $e = Error((he || "React class") + ": " + se + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof F[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw $e.name = "Invariant Violation", $e;
              }
              ve = F[Ee](Z, Ee, he, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Re) {
              ve = Re;
            }
            ve && !(ve instanceof Error) && (Q(De), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", se, Ee, typeof ve), Q(null)), ve instanceof Error && !(ve.message in je) && (je[ve.message] = !0, Q(De), v("Failed %s type: %s", se, ve.message), Q(null));
          }
      }
    }
    var oe = Array.isArray;
    function ee(F) {
      return oe(F);
    }
    function de(F) {
      {
        var Z = typeof Symbol == "function" && Symbol.toStringTag, se = Z && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return se;
      }
    }
    function M(F) {
      try {
        return z(F), !1;
      } catch {
        return !0;
      }
    }
    function z(F) {
      return "" + F;
    }
    function W(F) {
      if (M(F))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", de(F)), z(F);
    }
    var U = C.ReactCurrentOwner, ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Be, We;
    We = {};
    function X(F) {
      if (ge.call(F, "ref")) {
        var Z = Object.getOwnPropertyDescriptor(F, "ref").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return F.ref !== void 0;
    }
    function ye(F) {
      if (ge.call(F, "key")) {
        var Z = Object.getOwnPropertyDescriptor(F, "key").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return F.key !== void 0;
    }
    function ke(F, Z) {
      if (typeof F.ref == "string" && U.current && Z && U.current.stateNode !== Z) {
        var se = k(U.current.type);
        We[se] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(U.current.type), F.ref), We[se] = !0);
      }
    }
    function Ie(F, Z) {
      {
        var se = function() {
          Fe || (Fe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        se.isReactWarning = !0, Object.defineProperty(F, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function Xe(F, Z) {
      {
        var se = function() {
          Be || (Be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        se.isReactWarning = !0, Object.defineProperty(F, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var it = function(F, Z, se, he, De, Se, Ee) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: F,
        key: Z,
        ref: se,
        props: Ee,
        // Record the component responsible for creating this element.
        _owner: Se
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function Ve(F, Z, se, he, De) {
      {
        var Se, Ee = {}, ve = null, $e = null;
        se !== void 0 && (W(se), ve = "" + se), ye(Z) && (W(Z.key), ve = "" + Z.key), X(Z) && ($e = Z.ref, ke(Z, De));
        for (Se in Z)
          ge.call(Z, Se) && !ae.hasOwnProperty(Se) && (Ee[Se] = Z[Se]);
        if (F && F.defaultProps) {
          var Re = F.defaultProps;
          for (Se in Re)
            Ee[Se] === void 0 && (Ee[Se] = Re[Se]);
        }
        if (ve || $e) {
          var Oe = typeof F == "function" ? F.displayName || F.name || "Unknown" : F;
          ve && Ie(Ee, Oe), $e && Xe(Ee, Oe);
        }
        return it(F, ve, $e, De, he, U.current, Ee);
      }
    }
    var Ze = C.ReactCurrentOwner, ct = C.ReactDebugCurrentFrame;
    function Je(F) {
      if (F) {
        var Z = F._owner, se = Ce(F.type, F._source, Z ? Z.type : null);
        ct.setExtraStackFrame(se);
      } else
        ct.setExtraStackFrame(null);
    }
    var Et;
    Et = !1;
    function Ft(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function Vt() {
      {
        if (Ze.current) {
          var F = k(Ze.current.type);
          if (F)
            return `

Check the render method of \`` + F + "`.";
        }
        return "";
      }
    }
    function sr(F) {
      return "";
    }
    var mt = {};
    function or(F) {
      {
        var Z = Vt();
        if (!Z) {
          var se = typeof F == "string" ? F : F.displayName || F.name;
          se && (Z = `

Check the top-level render call using <` + se + ">.");
        }
        return Z;
      }
    }
    function et(F, Z) {
      {
        if (!F._store || F._store.validated || F.key != null)
          return;
        F._store.validated = !0;
        var se = or(Z);
        if (mt[se])
          return;
        mt[se] = !0;
        var he = "";
        F && F._owner && F._owner !== Ze.current && (he = " It was passed a child from " + k(F._owner.type) + "."), Je(F), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, he), Je(null);
      }
    }
    function gt(F, Z) {
      {
        if (typeof F != "object")
          return;
        if (ee(F))
          for (var se = 0; se < F.length; se++) {
            var he = F[se];
            Ft(he) && et(he, Z);
          }
        else if (Ft(F))
          F._store && (F._store.validated = !0);
        else if (F) {
          var De = b(F);
          if (typeof De == "function" && De !== F.entries)
            for (var Se = De.call(F), Ee; !(Ee = Se.next()).done; )
              Ft(Ee.value) && et(Ee.value, Z);
        }
      }
    }
    function ar(F) {
      {
        var Z = F.type;
        if (Z == null || typeof Z == "string")
          return;
        var se;
        if (typeof Z == "function")
          se = Z.propTypes;
        else if (typeof Z == "object" && (Z.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Z.$$typeof === m))
          se = Z.propTypes;
        else
          return;
        if (se) {
          var he = k(Z);
          ie(se, F.props, "prop", he, F);
        } else if (Z.PropTypes !== void 0 && !Et) {
          Et = !0;
          var De = k(Z);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", De || "Unknown");
        }
        typeof Z.getDefaultProps == "function" && !Z.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(F) {
      {
        for (var Z = Object.keys(F.props), se = 0; se < Z.length; se++) {
          var he = Z[se];
          if (he !== "children" && he !== "key") {
            Je(F), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Je(null);
            break;
          }
        }
        F.ref !== null && (Je(F), v("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
      }
    }
    var ze = {};
    function tt(F, Z, se, he, De, Se) {
      {
        var Ee = E(F);
        if (!Ee) {
          var ve = "";
          (F === void 0 || typeof F == "object" && F !== null && Object.keys(F).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var $e = sr();
          $e ? ve += $e : ve += Vt();
          var Re;
          F === null ? Re = "null" : ee(F) ? Re = "array" : F !== void 0 && F.$$typeof === t ? (Re = "<" + (k(F.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof F, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, ve);
        }
        var Oe = Ve(F, Z, se, De, Se);
        if (Oe == null)
          return Oe;
        if (Ee) {
          var Ye = Z.children;
          if (Ye !== void 0)
            if (he)
              if (ee(Ye)) {
                for (var Ut = 0; Ut < Ye.length; Ut++)
                  gt(Ye[Ut], F);
                Object.freeze && Object.freeze(Ye);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt(Ye, F);
        }
        if (ge.call(Z, "key")) {
          var Rt = k(F), He = Object.keys(Z).filter(function(O0) {
            return O0 !== "key";
          }), En = He.length > 0 ? "{key: someKey, " + He.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ze[Rt + En]) {
            var R0 = He.length > 0 ? "{" + He.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, En, Rt, R0, Rt), ze[Rt + En] = !0;
          }
        }
        return F === s ? jt(Oe) : ar(Oe), Oe;
      }
    }
    function Fr(F, Z, se) {
      return tt(F, Z, se, !0);
    }
    function Cn(F, Z, se) {
      return tt(F, Z, se, !1);
    }
    var B0 = Cn, F0 = Fr;
    cr.Fragment = s, cr.jsx = B0, cr.jsxs = F0;
  }()), cr;
}
process.env.NODE_ENV === "production" ? Es.exports = $0() : Es.exports = H0();
var n = Es.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var q0 = {
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
const W0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ce = (e, t) => {
  const r = M0(
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
        ...q0,
        width: o,
        height: o,
        stroke: s,
        strokeWidth: f ? Number(c) * 24 / Number(o) : c,
        className: ["lucide", `lucide-${W0(e)}`, l].join(" "),
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
const V0 = ce("AlertCircle", [
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
const U0 = ce("Archive", [
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
const Q0 = ce("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = ce("BellOff", [
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
const G0 = ce("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = ce("Bot", [
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
const ei = ce("Calendar", [
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
const ti = ce("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = ce("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = ce("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = ce("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = ce("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = ce("CircleUser", [
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
const Ws = ce("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = ce("Download", [
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
const J0 = ce("Expand", [
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
const si = ce("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = ce("FileText", [
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
const ec = ce("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = ce("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = ce("Globe", [
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
const nc = ce("Image", [
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
const oi = ce("Inbox", [
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
const jo = ce("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = ce("MailOpen", [
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
const Ur = ce("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = ce("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = ce("Minimize", [
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
const ic = ce("Monitor", [
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
const ai = ce("MoreHorizontal", [
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
const cc = ce("Palette", [
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
const lc = ce("PanelsTopLeft", [
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
const js = ce("Paperclip", [
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
const uc = ce("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = ce("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = ce("Plane", [
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
const Qr = ce("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = ce("ReplyAll", [
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
const No = ce("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = ce("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = ce("Save", [
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
const hc = ce("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = ce("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = ce("Settings", [
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
const mc = ce("Shield", [
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
const Gt = ce("Sparkles", [
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
const An = ce("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = ce("Star", [
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
const Gr = ce("Tag", [
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
const ii = ce("Ticket", [
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
const ln = ce("Trash2", [
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
const ci = ce("Type", [
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
const gc = ce("UserCog", [
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
const yc = ce("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = ce("Wand2", [
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
const li = ce("XCircle", [
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
const Qe = ce("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), bc = ({
  filters: e,
  onFiltersChange: t,
  onClearFilters: r
}) => {
  const [s, o] = J(!1), c = _e(null);
  be(() => {
    const a = (u) => {
      c.current && !c.current.contains(u.target) && o(!1);
    };
    return s && document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, [s]);
  const f = (a, u) => {
    t({ ...e, [a]: u });
  }, l = (a, u) => {
    t({
      ...e,
      dateRange: { ...e.dateRange, [a]: u }
    });
  }, i = () => e.readStatus !== "all" || e.starred || e.hasAttachment || e.sortBy !== "newest" || e.dateRange.from || e.dateRange.to || e.intent !== "all";
  return /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: c, children: [
    " ",
    /* @__PURE__ */ n.jsxs(
      "button",
      {
        onClick: () => o(!s),
        className: `
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors
          ${i() ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
        `,
        children: [
          /* @__PURE__ */ n.jsx(ec, { className: "w-4 h-4" }),
          /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium", children: "Filters" }),
          i() && /* @__PURE__ */ n.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: "Active" }),
          /* @__PURE__ */ n.jsx(ni, { className: `w-4 h-4 transition-transform ${s ? "rotate-180" : ""}` })
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsxs("div", { className: "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ n.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Filter Emails" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          i() && /* @__PURE__ */ n.jsx(
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
              children: /* @__PURE__ */ n.jsx(Qe, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Read Status" }),
          /* @__PURE__ */ n.jsx("div", { className: "flex space-x-2", children: [
            { value: "all", label: "All", icon: Ur },
            { value: "unread", label: "Unread", icon: Ur },
            { value: "read", label: "Read", icon: sc }
          ].map(({ value: a, label: u, icon: m }) => /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: () => f("readStatus", a),
              className: `
                      flex items-center space-x-1 px-3 py-2 rounded-md text-xs transition-colors
                      ${e.readStatus === a ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
                    `,
              children: [
                /* @__PURE__ */ n.jsx(m, { className: "w-3 h-3" }),
                /* @__PURE__ */ n.jsx("span", { children: u })
              ]
            },
            a
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
                  onChange: (a) => f("starred", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ n.jsx(Kr, { className: "w-4 h-4 ml-2 mr-1 text-yellow-500" }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: "Starred only" })
            ] }),
            /* @__PURE__ */ n.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.hasAttachment,
                  onChange: (a) => f("hasAttachment", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ n.jsx(js, { className: "w-4 h-4 ml-2 mr-1 text-gray-500" }),
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
              onChange: (a) => f("sortBy", a.target.value),
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
            /* @__PURE__ */ n.jsx(ei, { className: "w-4 h-4 inline mr-1" }),
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
                  onChange: (a) => l("from", a.target.value),
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
                  onChange: (a) => l("to", a.target.value),
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
              onChange: (a) => f("intent", a.target.value),
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
  const [r, s] = J(!0), [o, c] = J(!0), [f, l] = J(!1), [i, a] = J({ start: "22:00", end: "08:00" }), [u, m] = J({
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
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Qe, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ n.jsx(Ur, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(G0, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(K0, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(Ws, { className: "w-5 h-5 text-gray-500" }),
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
  const [r, s] = J([
    { id: 1, name: "Default", content: `Best regards,
John Doe
Software Engineer
john.doe@company.com`, isDefault: !0 },
    { id: 2, name: "Casual", content: `Thanks!
John`, isDefault: !1 }
  ]), [o, c] = J(null), [f, l] = J(""), [i, a] = J(""), [u, m] = J(!1), [d, x] = J(!1), p = _e(null), g = (w) => {
    c(w.id), l(w.name), a(w.content), m(!1);
  }, b = () => {
    c(null), l(""), a(""), m(!0);
  };
  be(() => {
    const w = (j) => {
      p.current && !p.current.contains(j.target) && t();
    };
    return e && document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [e, t]);
  const C = () => {
    if (u) {
      const w = {
        id: Date.now(),
        name: f,
        content: i,
        isDefault: r.length === 0
      };
      s([...r, w]);
    } else o && s(r.map(
      (w) => w.id === o ? { ...w, name: f, content: i } : w
    ));
    c(null), m(!1), l(""), a("");
  }, v = (w) => {
    s(r.filter((j) => j.id !== w));
  }, y = (w) => {
    s(r.map((j) => ({ ...j, isDefault: j.id === w })));
  }, h = () => {
    c(null), m(!1), l(""), a("");
  };
  return e ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { ref: p, className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Signatures" }),
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Qe, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "p-6", children: u || o ? /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Signature Name" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: f,
            onChange: (w) => l(w.target.value),
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
                d ? /* @__PURE__ */ n.jsx(uc, { className: "w-4 h-4" }) : /* @__PURE__ */ n.jsx(si, { className: "w-4 h-4" }),
                /* @__PURE__ */ n.jsx("span", { children: d ? "Edit" : "Preview" })
              ]
            }
          )
        ] }),
        d ? /* @__PURE__ */ n.jsx("div", { className: "w-full min-h-32 p-3 border border-gray-300 rounded-md bg-gray-50", children: /* @__PURE__ */ n.jsx("div", { className: "whitespace-pre-wrap text-sm text-gray-900", children: i || "No content yet..." }) }) : /* @__PURE__ */ n.jsx(
          "textarea",
          {
            value: i,
            onChange: (w) => a(w.target.value),
            className: "w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
            placeholder: "Enter your signature content"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end space-x-3 pt-4", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: h,
            className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: C,
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
            onClick: b,
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
            children: "Create New"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "space-y-3", children: r.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: "text-center py-8 text-gray-500", children: [
        /* @__PURE__ */ n.jsx(ci, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
        /* @__PURE__ */ n.jsx("p", { children: "No signatures created yet" }),
        /* @__PURE__ */ n.jsx("p", { className: "text-sm", children: 'Click "Create New" to add your first signature' })
      ] }) : r.map((w) => /* @__PURE__ */ n.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsx("h4", { className: "font-medium text-gray-900", children: w.name }),
            w.isDefault && /* @__PURE__ */ n.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full", children: "Default" })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: () => g(w),
                className: "text-blue-600 hover:text-blue-700 text-sm",
                children: "Edit"
              }
            ),
            !w.isDefault && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: () => y(w.id),
                  className: "text-green-600 hover:text-green-700 text-sm",
                  children: "Set Default"
                }
              ),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: () => v(w.id),
                  className: "text-red-600 hover:text-red-700 text-sm",
                  children: "Delete"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "bg-gray-50 rounded p-3 text-sm text-gray-700", children: /* @__PURE__ */ n.jsx("div", { className: "whitespace-pre-wrap", children: w.content }) })
      ] }, w.id)) })
    ] }) })
  ] }) }) : null;
}, Ec = ({ isOpen: e, onClose: t }) => {
  const [r, s] = J({
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
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Qe, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(lc, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(ic, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(nc, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(ci, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(si, { className: "w-5 h-5 text-gray-500" }),
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
  const [r, s] = J({
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
      /* @__PURE__ */ n.jsx("button", { onClick: t, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Qe, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsx(rc, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(Ws, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(U0, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(mc, { className: "w-5 h-5 text-gray-500" }),
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
          /* @__PURE__ */ n.jsx(Eo, { className: "w-5 h-5 text-gray-500" }),
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
                /* @__PURE__ */ n.jsx(Eo, { className: "w-4 h-4 text-gray-400" })
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
                /* @__PURE__ */ n.jsx(ln, { className: "w-4 h-4 text-red-400" })
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
}, Ac = ({
  onMenuToggle: e,
  onSearch: t,
  onFiltersChange: r,
  filters: s,
  onComposeClick: o
}) => {
  const [c, f] = J(""), [l, i] = J(!1), [a, u] = J(!1), [m, d] = J(!1), [x, p] = J(!1), [g, b] = J(!1), [C, v] = J(!1), y = _e(null), h = _e(null);
  be(() => {
    const S = (D) => {
      y.current && !y.current.contains(D.target) && i(!1), h.current && !h.current.contains(D.target) && u(!1);
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, []);
  const w = (S) => {
    const D = S.target.value;
    f(D), t(D);
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
  return /* @__PURE__ */ n.jsxs("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50", children: [
    /* @__PURE__ */ n.jsx("div", { className: "flex items-center space-x-4", z: !0, children: /* @__PURE__ */ n.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ n.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Mail" }) }) }),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 max-w-2xl mx-8", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ n.jsx(hc, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search mail",
            value: c,
            onChange: w,
            className: "w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        bc,
        {
          filters: s,
          onFiltersChange: r,
          onClearFilters: j
        }
      )
    ] }) }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: y, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: () => i(!l),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
            children: /* @__PURE__ */ n.jsx(pc, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        l && /* @__PURE__ */ n.jsx("div", { className: "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: A,
            className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
            children: [
              /* @__PURE__ */ n.jsx(Z0, { className: "w-4 h-4 text-gray-500" }),
              /* @__PURE__ */ n.jsx("span", { className: "text-gray-700", children: "Signature Setup" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ n.jsxs(
        "button",
        {
          className: "group flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 bg-blue-600 text-white",
          onClick: o,
          children: [
            /* @__PURE__ */ n.jsx(Qr, { className: "w-5 h-5" }),
            /* @__PURE__ */ n.jsx("span", { className: "ml-2 whitespace-nowrap hidden md:inline", children: "Compose" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(
      wc,
      {
        isOpen: m,
        onClose: () => d(!1)
      }
    ),
    /* @__PURE__ */ n.jsx(
      Cc,
      {
        isOpen: x,
        onClose: () => p(!1)
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ec,
      {
        isOpen: g,
        onClose: () => b(!1)
      }
    ),
    /* @__PURE__ */ n.jsx(
      jc,
      {
        isOpen: C,
        onClose: () => v(!1)
      }
    )
  ] });
}, Nc = () => /* @__PURE__ */ n.jsxs("div", { className: "w-full h-14 bg-white shadow-md flex items-center px-4 animate-pulse", children: [
  /* @__PURE__ */ n.jsx("div", { className: "w-32 h-6 bg-gray-300 rounded mr-4" }),
  " ",
  /* @__PURE__ */ n.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
    /* @__PURE__ */ n.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ n.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ n.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" })
  ] }),
  /* @__PURE__ */ n.jsx("div", { className: "w-10 h-10 bg-gray-300 rounded-full ml-auto" }),
  " "
] }), Dc = () => /* @__PURE__ */ n.jsx("div", { className: "w-full h-full space-y-6 p-6 animate-pulse overflow-y-auto", children: [1, 2, 3].map((e, t) => /* @__PURE__ */ n.jsxs(
  "div",
  {
    className: "bg-white rounded-md shadow p-6 w-full",
    children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ n.jsx("div", { className: "w-12 h-12 bg-gray-300 rounded-full" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ n.jsx("div", { className: "w-1/3 h-4 bg-gray-300 rounded" }),
          /* @__PURE__ */ n.jsx("div", { className: "w-1/4 h-3 bg-gray-200 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "space-y-3 mt-2", children: [
        /* @__PURE__ */ n.jsx("div", { className: "h-4 w-5/6 bg-gray-200 rounded" }),
        /* @__PURE__ */ n.jsx("div", { className: "h-4 w-2/3 bg-gray-200 rounded" }),
        /* @__PURE__ */ n.jsx("div", { className: "h-4 w-full bg-gray-100 rounded" }),
        /* @__PURE__ */ n.jsx("div", { className: "h-4 w-3/4 bg-gray-100 rounded" }),
        /* @__PURE__ */ n.jsx("div", { className: "h-4 w-4/5 bg-gray-100 rounded" })
      ] })
    ]
  },
  t
)) }), kc = ({
  selectedLabels: e,
  availableLabels: t,
  onLabelsChange: r,
  onCreateLabel: s,
  placeholder: o = "Add labels...",
  className: c = "",
  maxHeight: f = "max-h-48"
}) => {
  const [l, i] = J(!1), [a, u] = J(""), [m, d] = J(!1), [x, p] = J(""), [g, b] = J("#3B82F6"), C = _e(null), v = _e(null);
  be(() => {
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
  }, j = (D) => {
    r(e.filter((E) => E !== D));
  }, A = () => {
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
    D.key === "Enter" ? (D.preventDefault(), m ? A() : a.trim() && s && (p(a.trim()), d(!0))) : D.key === "Escape" && (i(!1), d(!1), u(""));
  };
  return /* @__PURE__ */ n.jsxs("div", { ref: C, className: `relative ${c}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        onClick: () => {
          i(!0), setTimeout(() => {
            var D;
            return (D = v.current) == null ? void 0 : D.focus();
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
                      E.stopPropagation(), j(D.id);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ n.jsx(Qe, { className: "w-3 h-3" })
                  }
                )
              ]
            },
            D.id
          )),
          /* @__PURE__ */ n.jsx(
            "input",
            {
              ref: v,
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
          /* @__PURE__ */ n.jsx(Qr, { className: "w-4 h-4 text-blue-600" }),
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
              onChange: (D) => b(D.target.value),
              className: "w-8 h-8 border border-gray-300 rounded cursor-pointer"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: A,
              disabled: !x.trim(),
              className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded text-sm transition-colors",
              children: /* @__PURE__ */ n.jsx(ri, { className: "w-4 h-4" })
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
            /* @__PURE__ */ n.jsx(Qr, { className: "w-4 h-4" }),
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
}, _c = ({
  emailIds: e,
  currentLabels: t,
  availableLabels: r,
  onLabelsChange: s,
  onCreateLabel: o,
  className: c = ""
}) => {
  const [f, l] = J(!1), [i, a] = J(t), [u, m] = J(!1), d = _e(null);
  be(() => {
    a(t);
  }, [t]), be(() => {
    const g = (b) => {
      d.current && !d.current.contains(b.target) && l(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []);
  const x = async (g) => {
    m(!0), a(g);
    try {
      s(e, g), setTimeout(() => {
        m(!1), l(!1);
      }, 300);
    } catch (b) {
      m(!1), console.error("Error updating labels:", b);
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
          /* @__PURE__ */ n.jsx(Gr, { className: `w-4 h-4 ${u ? "animate-spin" : ""}` }),
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
                      const b = i.filter((C) => C !== g.id);
                      x(b);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ n.jsx(Qe, { className: "w-2 h-2" })
                  }
                )
              ]
            },
            g.id
          )) })
        ] }),
        /* @__PURE__ */ n.jsx(
          kc,
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
function vt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Do(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ui(...e) {
  return (t) => {
    let r = !1;
    const s = e.map((o) => {
      const c = Do(o, t);
      return !r && typeof c == "function" && (r = !0), c;
    });
    if (r)
      return () => {
        for (let o = 0; o < s.length; o++) {
          const c = s[o];
          typeof c == "function" ? c() : Do(e[o], null);
        }
      };
  };
}
function Ht(...e) {
  return H.useCallback(ui(...e), e);
}
function di(e, t = []) {
  let r = [];
  function s(c, f) {
    const l = H.createContext(f), i = r.length;
    r = [...r, f];
    const a = (m) => {
      var C;
      const { scope: d, children: x, ...p } = m, g = ((C = d == null ? void 0 : d[e]) == null ? void 0 : C[i]) || l, b = H.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ n.jsx(g.Provider, { value: b, children: x });
    };
    a.displayName = c + "Provider";
    function u(m, d) {
      var g;
      const x = ((g = d == null ? void 0 : d[e]) == null ? void 0 : g[i]) || l, p = H.useContext(x);
      if (p) return p;
      if (f !== void 0) return f;
      throw new Error(`\`${m}\` must be used within \`${c}\``);
    }
    return [a, u];
  }
  const o = () => {
    const c = r.map((f) => H.createContext(f));
    return function(l) {
      const i = (l == null ? void 0 : l[e]) || c;
      return H.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: i } }),
        [l, i]
      );
    };
  };
  return o.scopeName = e, [s, Sc(o, ...t)];
}
function Sc(...e) {
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
      return H.useMemo(() => ({ [`__scope${t.scopeName}`]: f }), [f]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
// @__NO_SIDE_EFFECTS__
function Bc(e) {
  const t = /* @__PURE__ */ Fc(e), r = H.forwardRef((s, o) => {
    const { children: c, ...f } = s, l = H.Children.toArray(c), i = l.find(Oc);
    if (i) {
      const a = i.props.children, u = l.map((m) => m === i ? H.Children.count(a) > 1 ? H.Children.only(null) : H.isValidElement(a) ? a.props.children : null : m);
      return /* @__PURE__ */ n.jsx(t, { ...f, ref: o, children: H.isValidElement(a) ? H.cloneElement(a, void 0, u) : null });
    }
    return /* @__PURE__ */ n.jsx(t, { ...f, ref: o, children: c });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Fc(e) {
  const t = H.forwardRef((r, s) => {
    const { children: o, ...c } = r;
    if (H.isValidElement(o)) {
      const f = Tc(o), l = Pc(c, o.props);
      return o.type !== H.Fragment && (l.ref = s ? ui(s, f) : f), H.cloneElement(o, l);
    }
    return H.Children.count(o) > 1 ? H.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var fi = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Rc(e) {
  const t = ({ children: r }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = fi, t;
}
function Oc(e) {
  return H.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fi;
}
function Pc(e, t) {
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
function Tc(e) {
  var s, o;
  let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Mc = [
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
], St = Mc.reduce((e, t) => {
  const r = /* @__PURE__ */ Bc(`Primitive.${t}`), s = H.forwardRef((o, c) => {
    const { asChild: f, ...l } = o, i = f ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n.jsx(i, { ...l, ref: c });
  });
  return s.displayName = `Primitive.${t}`, { ...e, [t]: s };
}, {});
function Lc(e, t) {
  e && Ja.flushSync(() => e.dispatchEvent(t));
}
function un(e) {
  const t = H.useRef(e);
  return H.useEffect(() => {
    t.current = e;
  }), H.useMemo(() => (...r) => {
    var s;
    return (s = t.current) == null ? void 0 : s.call(t, ...r);
  }, []);
}
function Ic(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e);
  H.useEffect(() => {
    const s = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", s, { capture: !0 }), () => t.removeEventListener("keydown", s, { capture: !0 });
  }, [r, t]);
}
var zc = "DismissableLayer", Ns = "dismissableLayer.update", $c = "dismissableLayer.pointerDownOutside", Hc = "dismissableLayer.focusOutside", ko, xi = H.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), hi = H.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: o,
      onFocusOutside: c,
      onInteractOutside: f,
      onDismiss: l,
      ...i
    } = e, a = H.useContext(xi), [u, m] = H.useState(null), d = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, x] = H.useState({}), p = Ht(t, (A) => m(A)), g = Array.from(a.layers), [b] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1), C = g.indexOf(b), v = u ? g.indexOf(u) : -1, y = a.layersWithOutsidePointerEventsDisabled.size > 0, h = v >= C, w = Vc((A) => {
      const S = A.target, D = [...a.branches].some((E) => E.contains(S));
      !h || D || (o == null || o(A), f == null || f(A), A.defaultPrevented || l == null || l());
    }, d), j = Uc((A) => {
      const S = A.target;
      [...a.branches].some((E) => E.contains(S)) || (c == null || c(A), f == null || f(A), A.defaultPrevented || l == null || l());
    }, d);
    return Ic((A) => {
      v === a.layers.size - 1 && (s == null || s(A), !A.defaultPrevented && l && (A.preventDefault(), l()));
    }, d), H.useEffect(() => {
      if (u)
        return r && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (ko = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), a.layersWithOutsidePointerEventsDisabled.add(u)), a.layers.add(u), _o(), () => {
          r && a.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = ko);
        };
    }, [u, d, r, a]), H.useEffect(() => () => {
      u && (a.layers.delete(u), a.layersWithOutsidePointerEventsDisabled.delete(u), _o());
    }, [u, a]), H.useEffect(() => {
      const A = () => x({});
      return document.addEventListener(Ns, A), () => document.removeEventListener(Ns, A);
    }, []), /* @__PURE__ */ n.jsx(
      St.div,
      {
        ...i,
        ref: p,
        style: {
          pointerEvents: y ? h ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: vt(e.onFocusCapture, j.onFocusCapture),
        onBlurCapture: vt(e.onBlurCapture, j.onBlurCapture),
        onPointerDownCapture: vt(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
hi.displayName = zc;
var qc = "DismissableLayerBranch", Wc = H.forwardRef((e, t) => {
  const r = H.useContext(xi), s = H.useRef(null), o = Ht(t, s);
  return H.useEffect(() => {
    const c = s.current;
    if (c)
      return r.branches.add(c), () => {
        r.branches.delete(c);
      };
  }, [r.branches]), /* @__PURE__ */ n.jsx(St.div, { ...e, ref: o });
});
Wc.displayName = qc;
function Vc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e), s = H.useRef(!1), o = H.useRef(() => {
  });
  return H.useEffect(() => {
    const c = (l) => {
      if (l.target && !s.current) {
        let i = function() {
          pi(
            $c,
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
function Uc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = un(e), s = H.useRef(!1);
  return H.useEffect(() => {
    const o = (c) => {
      c.target && !s.current && pi(Hc, r, { originalEvent: c }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => s.current = !0,
    onBlurCapture: () => s.current = !1
  };
}
function _o() {
  const e = new CustomEvent(Ns);
  document.dispatchEvent(e);
}
function pi(e, t, r, { discrete: s }) {
  const o = r.originalEvent.target, c = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), s ? Lc(o, c) : o.dispatchEvent(c);
}
var Nt = globalThis != null && globalThis.document ? H.useLayoutEffect : () => {
}, Qc = H[" useId ".trim().toString()] || (() => {
}), Kc = 0;
function Gc(e) {
  const [t, r] = H.useState(Qc());
  return Nt(() => {
    r((s) => s ?? String(Kc++));
  }, [e]), t ? `radix-${t}` : "";
}
const Yc = ["top", "right", "bottom", "left"], Dt = Math.min, Ue = Math.max, Yr = Math.round, Or = Math.floor, dt = (e) => ({
  x: e,
  y: e
}), Xc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zc = {
  start: "end",
  end: "start"
};
function Ds(e, t, r) {
  return Ue(e, Dt(t, r));
}
function bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wt(e) {
  return e.split("-")[0];
}
function rr(e) {
  return e.split("-")[1];
}
function Qs(e) {
  return e === "x" ? "y" : "x";
}
function Ks(e) {
  return e === "y" ? "height" : "width";
}
const Jc = /* @__PURE__ */ new Set(["top", "bottom"]);
function ut(e) {
  return Jc.has(wt(e)) ? "y" : "x";
}
function Gs(e) {
  return Qs(ut(e));
}
function el(e, t, r) {
  r === void 0 && (r = !1);
  const s = rr(e), o = Gs(e), c = Ks(o);
  let f = o === "x" ? s === (r ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[c] > t.floating[c] && (f = Xr(f)), [f, Xr(f)];
}
function tl(e) {
  const t = Xr(e);
  return [ks(e), t, ks(t)];
}
function ks(e) {
  return e.replace(/start|end/g, (t) => Zc[t]);
}
const So = ["left", "right"], Bo = ["right", "left"], rl = ["top", "bottom"], nl = ["bottom", "top"];
function sl(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Bo : So : t ? So : Bo;
    case "left":
    case "right":
      return t ? rl : nl;
    default:
      return [];
  }
}
function ol(e, t, r, s) {
  const o = rr(e);
  let c = sl(wt(e), r === "start", s);
  return o && (c = c.map((f) => f + "-" + o), t && (c = c.concat(c.map(ks)))), c;
}
function Xr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xc[t]);
}
function al(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function mi(e) {
  return typeof e != "number" ? al(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zr(e) {
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
function Fo(e, t, r) {
  let {
    reference: s,
    floating: o
  } = e;
  const c = ut(t), f = Gs(t), l = Ks(f), i = wt(t), a = c === "y", u = s.x + s.width / 2 - o.width / 2, m = s.y + s.height / 2 - o.height / 2, d = s[l] / 2 - o[l] / 2;
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
  switch (rr(t)) {
    case "start":
      x[f] -= d * (r && a ? -1 : 1);
      break;
    case "end":
      x[f] += d * (r && a ? -1 : 1);
      break;
  }
  return x;
}
const il = async (e, t, r) => {
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
  } = Fo(a, s, i), d = s, x = {}, p = 0;
  for (let g = 0; g < l.length; g++) {
    const {
      name: b,
      fn: C
    } = l[g], {
      x: v,
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
    u = v ?? u, m = y ?? m, x = {
      ...x,
      [b]: {
        ...x[b],
        ...h
      }
    }, w && p <= 50 && (p++, typeof w == "object" && (w.placement && (d = w.placement), w.rects && (a = w.rects === !0 ? await f.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: u,
      y: m
    } = Fo(a, d, i)), g = -1);
  }
  return {
    x: u,
    y: m,
    placement: d,
    strategy: o,
    middlewareData: x
  };
};
async function mr(e, t) {
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
  } = bt(t, e), p = mi(x), b = l[d ? m === "floating" ? "reference" : "floating" : m], C = Zr(await c.getClippingRect({
    element: (r = await (c.isElement == null ? void 0 : c.isElement(b))) == null || r ? b : b.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: u,
    strategy: i
  })), v = m === "floating" ? {
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
  }, w = Zr(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: v,
    offsetParent: y,
    strategy: i
  }) : v);
  return {
    top: (C.top - w.top + p.top) / h.y,
    bottom: (w.bottom - C.bottom + p.bottom) / h.y,
    left: (C.left - w.left + p.left) / h.x,
    right: (w.right - C.right + p.right) / h.x
  };
}
const cl = (e) => ({
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
    } = bt(e, t) || {};
    if (a == null)
      return {};
    const m = mi(u), d = {
      x: r,
      y: s
    }, x = Gs(o), p = Ks(x), g = await f.getDimensions(a), b = x === "y", C = b ? "top" : "left", v = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", h = c.reference[p] + c.reference[x] - d[x] - c.floating[p], w = d[x] - c.reference[x], j = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(a));
    let A = j ? j[y] : 0;
    (!A || !await (f.isElement == null ? void 0 : f.isElement(j))) && (A = l.floating[y] || c.floating[p]);
    const S = h / 2 - w / 2, D = A / 2 - g[p] / 2 - 1, E = Dt(m[C], D), N = Dt(m[v], D), _ = E, k = A - g[p] - N, B = A / 2 - g[p] / 2 + S, R = Ds(_, B, k), P = !i.arrow && rr(o) != null && B !== R && c.reference[p] / 2 - (B < _ ? E : N) - g[p] / 2 < 0, $ = P ? B < _ ? B - _ : B - k : 0;
    return {
      [x]: d[x] + $,
      data: {
        [x]: R,
        centerOffset: B - R - $,
        ...P && {
          alignmentOffset: $
        }
      },
      reset: P
    };
  }
}), ll = function(e) {
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
        ...b
      } = bt(e, t);
      if ((r = c.arrow) != null && r.alignmentOffset)
        return {};
      const C = wt(o), v = ut(l), y = wt(l) === l, h = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), w = d || (y || !g ? [Xr(l)] : tl(l)), j = p !== "none";
      !d && j && w.push(...ol(l, g, p, h));
      const A = [l, ...w], S = await mr(t, b), D = [];
      let E = ((s = c.flip) == null ? void 0 : s.overflows) || [];
      if (u && D.push(S[C]), m) {
        const B = el(o, f, h);
        D.push(S[B[0]], S[B[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: D
      }], !D.every((B) => B <= 0)) {
        var N, _;
        const B = (((N = c.flip) == null ? void 0 : N.index) || 0) + 1, R = A[B];
        if (R && (!(m === "alignment" ? v !== ut(R) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        E.every((L) => L.overflows[0] > 0 && ut(L.placement) === v)))
          return {
            data: {
              index: B,
              overflows: E
            },
            reset: {
              placement: R
            }
          };
        let P = (_ = E.filter(($) => $.overflows[0] <= 0).sort(($, L) => $.overflows[1] - L.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!P)
          switch (x) {
            case "bestFit": {
              var k;
              const $ = (k = E.filter((L) => {
                if (j) {
                  const V = ut(L.placement);
                  return V === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((V) => V > 0).reduce((V, Y) => V + Y, 0)]).sort((L, V) => L[1] - V[1])[0]) == null ? void 0 : k[0];
              $ && (P = $);
              break;
            }
            case "initialPlacement":
              P = l;
              break;
          }
        if (o !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function Ro(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Oo(e) {
  return Yc.some((t) => e[t] >= 0);
}
const ul = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: s = "referenceHidden",
        ...o
      } = bt(e, t);
      switch (s) {
        case "referenceHidden": {
          const c = await mr(t, {
            ...o,
            elementContext: "reference"
          }), f = Ro(c, r.reference);
          return {
            data: {
              referenceHiddenOffsets: f,
              referenceHidden: Oo(f)
            }
          };
        }
        case "escaped": {
          const c = await mr(t, {
            ...o,
            altBoundary: !0
          }), f = Ro(c, r.floating);
          return {
            data: {
              escapedOffsets: f,
              escaped: Oo(f)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, gi = /* @__PURE__ */ new Set(["left", "top"]);
async function dl(e, t) {
  const {
    placement: r,
    platform: s,
    elements: o
  } = e, c = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), f = wt(r), l = rr(r), i = ut(r) === "y", a = gi.has(f) ? -1 : 1, u = c && i ? -1 : 1, m = bt(t, e);
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
const fl = function(e) {
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
      } = t, i = await dl(t, e);
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
}, xl = function(e) {
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
          fn: (b) => {
            let {
              x: C,
              y: v
            } = b;
            return {
              x: C,
              y: v
            };
          }
        },
        ...i
      } = bt(e, t), a = {
        x: r,
        y: s
      }, u = await mr(t, i), m = ut(wt(o)), d = Qs(m);
      let x = a[d], p = a[m];
      if (c) {
        const b = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", v = x + u[b], y = x - u[C];
        x = Ds(v, x, y);
      }
      if (f) {
        const b = m === "y" ? "top" : "left", C = m === "y" ? "bottom" : "right", v = p + u[b], y = p - u[C];
        p = Ds(v, p, y);
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
}, hl = function(e) {
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
      } = bt(e, t), u = {
        x: r,
        y: s
      }, m = ut(o), d = Qs(m);
      let x = u[d], p = u[m];
      const g = bt(l, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (i) {
        const y = d === "y" ? "height" : "width", h = c.reference[d] - c.floating[y] + b.mainAxis, w = c.reference[d] + c.reference[y] - b.mainAxis;
        x < h ? x = h : x > w && (x = w);
      }
      if (a) {
        var C, v;
        const y = d === "y" ? "width" : "height", h = gi.has(wt(o)), w = c.reference[m] - c.floating[y] + (h && ((C = f.offset) == null ? void 0 : C[m]) || 0) + (h ? 0 : b.crossAxis), j = c.reference[m] + c.reference[y] + (h ? 0 : ((v = f.offset) == null ? void 0 : v[m]) || 0) - (h ? b.crossAxis : 0);
        p < w ? p = w : p > j && (p = j);
      }
      return {
        [d]: x,
        [m]: p
      };
    }
  };
}, pl = function(e) {
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
      } = bt(e, t), u = await mr(t, a), m = wt(o), d = rr(o), x = ut(o) === "y", {
        width: p,
        height: g
      } = c.floating;
      let b, C;
      m === "top" || m === "bottom" ? (b = m, C = d === (await (f.isRTL == null ? void 0 : f.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = m, b = d === "end" ? "top" : "bottom");
      const v = g - u.top - u.bottom, y = p - u.left - u.right, h = Dt(g - u[b], v), w = Dt(p - u[C], y), j = !t.middlewareData.shift;
      let A = h, S = w;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (S = y), (s = t.middlewareData.shift) != null && s.enabled.y && (A = v), j && !d) {
        const E = Ue(u.left, 0), N = Ue(u.right, 0), _ = Ue(u.top, 0), k = Ue(u.bottom, 0);
        x ? S = p - 2 * (E !== 0 || N !== 0 ? E + N : Ue(u.left, u.right)) : A = g - 2 * (_ !== 0 || k !== 0 ? _ + k : Ue(u.top, u.bottom));
      }
      await i({
        ...t,
        availableWidth: S,
        availableHeight: A
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
function dn() {
  return typeof window < "u";
}
function nr(e) {
  return yi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ke(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pt(e) {
  var t;
  return (t = (yi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yi(e) {
  return dn() ? e instanceof Node || e instanceof Ke(e).Node : !1;
}
function st(e) {
  return dn() ? e instanceof Element || e instanceof Ke(e).Element : !1;
}
function ft(e) {
  return dn() ? e instanceof HTMLElement || e instanceof Ke(e).HTMLElement : !1;
}
function Po(e) {
  return !dn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ke(e).ShadowRoot;
}
const ml = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ar(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: s,
    display: o
  } = ot(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + r) && !ml.has(o);
}
const gl = /* @__PURE__ */ new Set(["table", "td", "th"]);
function yl(e) {
  return gl.has(nr(e));
}
const vl = [":popover-open", ":modal"];
function fn(e) {
  return vl.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const bl = ["transform", "translate", "scale", "rotate", "perspective"], wl = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Cl = ["paint", "layout", "strict", "content"];
function Ys(e) {
  const t = Xs(), r = st(e) ? ot(e) : e;
  return bl.some((s) => r[s] ? r[s] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || wl.some((s) => (r.willChange || "").includes(s)) || Cl.some((s) => (r.contain || "").includes(s));
}
function El(e) {
  let t = kt(e);
  for (; ft(t) && !Jt(t); ) {
    if (Ys(t))
      return t;
    if (fn(t))
      return null;
    t = kt(t);
  }
  return null;
}
function Xs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const jl = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Jt(e) {
  return jl.has(nr(e));
}
function ot(e) {
  return Ke(e).getComputedStyle(e);
}
function xn(e) {
  return st(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function kt(e) {
  if (nr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Po(e) && e.host || // Fallback.
    pt(e)
  );
  return Po(t) ? t.host : t;
}
function vi(e) {
  const t = kt(e);
  return Jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ft(t) && Ar(t) ? t : vi(t);
}
function gr(e, t, r) {
  var s;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = vi(e), c = o === ((s = e.ownerDocument) == null ? void 0 : s.body), f = Ke(o);
  if (c) {
    const l = _s(f);
    return t.concat(f, f.visualViewport || [], Ar(o) ? o : [], l && r ? gr(l) : []);
  }
  return t.concat(o, gr(o, [], r));
}
function _s(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bi(e) {
  const t = ot(e);
  let r = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const o = ft(e), c = o ? e.offsetWidth : r, f = o ? e.offsetHeight : s, l = Yr(r) !== c || Yr(s) !== f;
  return l && (r = c, s = f), {
    width: r,
    height: s,
    $: l
  };
}
function Zs(e) {
  return st(e) ? e : e.contextElement;
}
function Yt(e) {
  const t = Zs(e);
  if (!ft(t))
    return dt(1);
  const r = t.getBoundingClientRect(), {
    width: s,
    height: o,
    $: c
  } = bi(t);
  let f = (c ? Yr(r.width) : r.width) / s, l = (c ? Yr(r.height) : r.height) / o;
  return (!f || !Number.isFinite(f)) && (f = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: f,
    y: l
  };
}
const Al = /* @__PURE__ */ dt(0);
function wi(e) {
  const t = Ke(e);
  return !Xs() || !t.visualViewport ? Al : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Nl(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== Ke(e) ? !1 : t;
}
function Mt(e, t, r, s) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), c = Zs(e);
  let f = dt(1);
  t && (s ? st(s) && (f = Yt(s)) : f = Yt(e));
  const l = Nl(c, r, s) ? wi(c) : dt(0);
  let i = (o.left + l.x) / f.x, a = (o.top + l.y) / f.y, u = o.width / f.x, m = o.height / f.y;
  if (c) {
    const d = Ke(c), x = s && st(s) ? Ke(s) : s;
    let p = d, g = _s(p);
    for (; g && s && x !== p; ) {
      const b = Yt(g), C = g.getBoundingClientRect(), v = ot(g), y = C.left + (g.clientLeft + parseFloat(v.paddingLeft)) * b.x, h = C.top + (g.clientTop + parseFloat(v.paddingTop)) * b.y;
      i *= b.x, a *= b.y, u *= b.x, m *= b.y, i += y, a += h, p = Ke(g), g = _s(p);
    }
  }
  return Zr({
    width: u,
    height: m,
    x: i,
    y: a
  });
}
function Js(e, t) {
  const r = xn(e).scrollLeft;
  return t ? t.left + r : Mt(pt(e)).left + r;
}
function Ci(e, t, r) {
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
function Dl(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: s,
    strategy: o
  } = e;
  const c = o === "fixed", f = pt(s), l = t ? fn(t.floating) : !1;
  if (s === f || l && c)
    return r;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = dt(1);
  const u = dt(0), m = ft(s);
  if ((m || !m && !c) && ((nr(s) !== "body" || Ar(f)) && (i = xn(s)), ft(s))) {
    const x = Mt(s);
    a = Yt(s), u.x = x.x + s.clientLeft, u.y = x.y + s.clientTop;
  }
  const d = f && !m && !c ? Ci(f, i, !0) : dt(0);
  return {
    width: r.width * a.x,
    height: r.height * a.y,
    x: r.x * a.x - i.scrollLeft * a.x + u.x + d.x,
    y: r.y * a.y - i.scrollTop * a.y + u.y + d.y
  };
}
function kl(e) {
  return Array.from(e.getClientRects());
}
function _l(e) {
  const t = pt(e), r = xn(e), s = e.ownerDocument.body, o = Ue(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), c = Ue(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let f = -r.scrollLeft + Js(e);
  const l = -r.scrollTop;
  return ot(s).direction === "rtl" && (f += Ue(t.clientWidth, s.clientWidth) - o), {
    width: o,
    height: c,
    x: f,
    y: l
  };
}
function Sl(e, t) {
  const r = Ke(e), s = pt(e), o = r.visualViewport;
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
const Bl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Fl(e, t) {
  const r = Mt(e, !0, t === "fixed"), s = r.top + e.clientTop, o = r.left + e.clientLeft, c = ft(e) ? Yt(e) : dt(1), f = e.clientWidth * c.x, l = e.clientHeight * c.y, i = o * c.x, a = s * c.y;
  return {
    width: f,
    height: l,
    x: i,
    y: a
  };
}
function To(e, t, r) {
  let s;
  if (t === "viewport")
    s = Sl(e, r);
  else if (t === "document")
    s = _l(pt(e));
  else if (st(t))
    s = Fl(t, r);
  else {
    const o = wi(e);
    s = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Zr(s);
}
function Ei(e, t) {
  const r = kt(e);
  return r === t || !st(r) || Jt(r) ? !1 : ot(r).position === "fixed" || Ei(r, t);
}
function Rl(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let s = gr(e, [], !1).filter((l) => st(l) && nr(l) !== "body"), o = null;
  const c = ot(e).position === "fixed";
  let f = c ? kt(e) : e;
  for (; st(f) && !Jt(f); ) {
    const l = ot(f), i = Ys(f);
    !i && l.position === "fixed" && (o = null), (c ? !i && !o : !i && l.position === "static" && !!o && Bl.has(o.position) || Ar(f) && !i && Ei(e, f)) ? s = s.filter((u) => u !== f) : o = l, f = kt(f);
  }
  return t.set(e, s), s;
}
function Ol(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: s,
    strategy: o
  } = e;
  const f = [...r === "clippingAncestors" ? fn(t) ? [] : Rl(t, this._c) : [].concat(r), s], l = f[0], i = f.reduce((a, u) => {
    const m = To(t, u, o);
    return a.top = Ue(m.top, a.top), a.right = Dt(m.right, a.right), a.bottom = Dt(m.bottom, a.bottom), a.left = Ue(m.left, a.left), a;
  }, To(t, l, o));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function Pl(e) {
  const {
    width: t,
    height: r
  } = bi(e);
  return {
    width: t,
    height: r
  };
}
function Tl(e, t, r) {
  const s = ft(t), o = pt(t), c = r === "fixed", f = Mt(e, !0, c, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = dt(0);
  function a() {
    i.x = Js(o);
  }
  if (s || !s && !c)
    if ((nr(t) !== "body" || Ar(o)) && (l = xn(t)), s) {
      const x = Mt(t, !0, c, t);
      i.x = x.x + t.clientLeft, i.y = x.y + t.clientTop;
    } else o && a();
  c && !s && o && a();
  const u = o && !s && !c ? Ci(o, l) : dt(0), m = f.left + l.scrollLeft - i.x - u.x, d = f.top + l.scrollTop - i.y - u.y;
  return {
    x: m,
    y: d,
    width: f.width,
    height: f.height
  };
}
function Nn(e) {
  return ot(e).position === "static";
}
function Mo(e, t) {
  if (!ft(e) || ot(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return pt(e) === r && (r = r.ownerDocument.body), r;
}
function ji(e, t) {
  const r = Ke(e);
  if (fn(e))
    return r;
  if (!ft(e)) {
    let o = kt(e);
    for (; o && !Jt(o); ) {
      if (st(o) && !Nn(o))
        return o;
      o = kt(o);
    }
    return r;
  }
  let s = Mo(e, t);
  for (; s && yl(s) && Nn(s); )
    s = Mo(s, t);
  return s && Jt(s) && Nn(s) && !Ys(s) ? r : s || El(e) || r;
}
const Ml = async function(e) {
  const t = this.getOffsetParent || ji, r = this.getDimensions, s = await r(e.floating);
  return {
    reference: Tl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function Ll(e) {
  return ot(e).direction === "rtl";
}
const Il = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Dl,
  getDocumentElement: pt,
  getClippingRect: Ol,
  getOffsetParent: ji,
  getElementRects: Ml,
  getClientRects: kl,
  getDimensions: Pl,
  getScale: Yt,
  isElement: st,
  isRTL: Ll
};
function Ai(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zl(e, t) {
  let r = null, s;
  const o = pt(e);
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
    const p = Or(m), g = Or(o.clientWidth - (u + d)), b = Or(o.clientHeight - (m + x)), C = Or(u), y = {
      rootMargin: -p + "px " + -g + "px " + -b + "px " + -C + "px",
      threshold: Ue(0, Dt(1, i)) || 1
    };
    let h = !0;
    function w(j) {
      const A = j[0].intersectionRatio;
      if (A !== i) {
        if (!h)
          return f();
        A ? f(!1, A) : s = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Ai(a, e.getBoundingClientRect()) && f(), h = !1;
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
function $l(e, t, r, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: c = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = s, a = Zs(e), u = o || c ? [...a ? gr(a) : [], ...gr(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", r, {
      passive: !0
    }), c && C.addEventListener("resize", r);
  });
  const m = a && l ? zl(a, r) : null;
  let d = -1, x = null;
  f && (x = new ResizeObserver((C) => {
    let [v] = C;
    v && v.target === a && x && (x.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = x) == null || y.observe(t);
    })), r();
  }), a && !i && x.observe(a), x.observe(t));
  let p, g = i ? Mt(e) : null;
  i && b();
  function b() {
    const C = Mt(e);
    g && !Ai(g, C) && r(), g = C, p = requestAnimationFrame(b);
  }
  return r(), () => {
    var C;
    u.forEach((v) => {
      o && v.removeEventListener("scroll", r), c && v.removeEventListener("resize", r);
    }), m == null || m(), (C = x) == null || C.disconnect(), x = null, i && cancelAnimationFrame(p);
  };
}
const Hl = fl, ql = xl, Wl = ll, Vl = pl, Ul = ul, Lo = cl, Ql = hl, Kl = (e, t, r) => {
  const s = /* @__PURE__ */ new Map(), o = {
    platform: Il,
    ...r
  }, c = {
    ...o.platform,
    _c: s
  };
  return il(e, t, {
    ...o,
    platform: c
  });
};
var Gl = typeof document < "u", Yl = function() {
}, Vr = Gl ? Za : Yl;
function Jr(e, t) {
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
        if (!Jr(e[s], t[s]))
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
      if (!(c === "_owner" && e.$$typeof) && !Jr(e[c], t[c]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ni(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Io(e, t) {
  const r = Ni(e);
  return Math.round(t * r) / r;
}
function Dn(e) {
  const t = H.useRef(e);
  return Vr(() => {
    t.current = e;
  }), t;
}
function Xl(e) {
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
  } = e, [u, m] = H.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [d, x] = H.useState(s);
  Jr(d, s) || x(s);
  const [p, g] = H.useState(null), [b, C] = H.useState(null), v = H.useCallback((L) => {
    L !== j.current && (j.current = L, g(L));
  }, []), y = H.useCallback((L) => {
    L !== A.current && (A.current = L, C(L));
  }, []), h = c || p, w = f || b, j = H.useRef(null), A = H.useRef(null), S = H.useRef(u), D = i != null, E = Dn(i), N = Dn(o), _ = Dn(a), k = H.useCallback(() => {
    if (!j.current || !A.current)
      return;
    const L = {
      placement: t,
      strategy: r,
      middleware: d
    };
    N.current && (L.platform = N.current), Kl(j.current, A.current, L).then((V) => {
      const Y = {
        ...V,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: _.current !== !1
      };
      B.current && !Jr(S.current, Y) && (S.current = Y, Ja.flushSync(() => {
        m(Y);
      }));
    });
  }, [d, t, r, N, _]);
  Vr(() => {
    a === !1 && S.current.isPositioned && (S.current.isPositioned = !1, m((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [a]);
  const B = H.useRef(!1);
  Vr(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Vr(() => {
    if (h && (j.current = h), w && (A.current = w), h && w) {
      if (E.current)
        return E.current(h, w, k);
      k();
    }
  }, [h, w, k, E, D]);
  const R = H.useMemo(() => ({
    reference: j,
    floating: A,
    setReference: v,
    setFloating: y
  }), [v, y]), P = H.useMemo(() => ({
    reference: h,
    floating: w
  }), [h, w]), $ = H.useMemo(() => {
    const L = {
      position: r,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return L;
    const V = Io(P.floating, u.x), Y = Io(P.floating, u.y);
    return l ? {
      ...L,
      transform: "translate(" + V + "px, " + Y + "px)",
      ...Ni(P.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: V,
      top: Y
    };
  }, [r, l, P.floating, u.x, u.y]);
  return H.useMemo(() => ({
    ...u,
    update: k,
    refs: R,
    elements: P,
    floatingStyles: $
  }), [u, k, R, P, $]);
}
const Zl = (e) => {
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
      return s && t(s) ? s.current != null ? Lo({
        element: s.current,
        padding: o
      }).fn(r) : {} : s ? Lo({
        element: s,
        padding: o
      }).fn(r) : {};
    }
  };
}, Jl = (e, t) => ({
  ...Hl(e),
  options: [e, t]
}), eu = (e, t) => ({
  ...ql(e),
  options: [e, t]
}), tu = (e, t) => ({
  ...Ql(e),
  options: [e, t]
}), ru = (e, t) => ({
  ...Wl(e),
  options: [e, t]
}), nu = (e, t) => ({
  ...Vl(e),
  options: [e, t]
}), su = (e, t) => ({
  ...Ul(e),
  options: [e, t]
}), ou = (e, t) => ({
  ...Zl(e),
  options: [e, t]
});
var au = "Arrow", Di = H.forwardRef((e, t) => {
  const { children: r, width: s = 10, height: o = 5, ...c } = e;
  return /* @__PURE__ */ n.jsx(
    St.svg,
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
Di.displayName = au;
var iu = Di;
function cu(e) {
  const [t, r] = H.useState(void 0);
  return Nt(() => {
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
var eo = "Popper", [ki, _i] = di(eo), [lu, Si] = ki(eo), Bi = (e) => {
  const { __scopePopper: t, children: r } = e, [s, o] = H.useState(null);
  return /* @__PURE__ */ n.jsx(lu, { scope: t, anchor: s, onAnchorChange: o, children: r });
};
Bi.displayName = eo;
var Fi = "PopperAnchor", Ri = H.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: s, ...o } = e, c = Si(Fi, r), f = H.useRef(null), l = Ht(t, f);
    return H.useEffect(() => {
      c.onAnchorChange((s == null ? void 0 : s.current) || f.current);
    }), s ? null : /* @__PURE__ */ n.jsx(St.div, { ...o, ref: l });
  }
);
Ri.displayName = Fi;
var to = "PopperContent", [uu, du] = ki(to), Oi = H.forwardRef(
  (e, t) => {
    var ue, te, me, fe, K, re;
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
    } = e, b = Si(to, r), [C, v] = H.useState(null), y = Ht(t, (le) => v(le)), [h, w] = H.useState(null), j = cu(h), A = (j == null ? void 0 : j.width) ?? 0, S = (j == null ? void 0 : j.height) ?? 0, D = s + (c !== "center" ? "-" + c : ""), E = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, N = Array.isArray(a) ? a : [a], _ = N.length > 0, k = {
      padding: E,
      boundary: N.filter(xu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: _
    }, { refs: B, floatingStyles: R, placement: P, isPositioned: $, middlewareData: L } = Xl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...le) => $l(...le, {
        animationFrame: x === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Jl({ mainAxis: o + S, alignmentAxis: f }),
        i && eu({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? tu() : void 0,
          ...k
        }),
        i && ru({ ...k }),
        nu({
          ...k,
          apply: ({ elements: le, rects: xe, availableWidth: Ce, availableHeight: ge }) => {
            const { width: je, height: Ae } = xe.reference, Q = le.floating.style;
            Q.setProperty("--radix-popper-available-width", `${Ce}px`), Q.setProperty("--radix-popper-available-height", `${ge}px`), Q.setProperty("--radix-popper-anchor-width", `${je}px`), Q.setProperty("--radix-popper-anchor-height", `${Ae}px`);
          }
        }),
        h && ou({ element: h, padding: l }),
        hu({ arrowWidth: A, arrowHeight: S }),
        d && su({ strategy: "referenceHidden", ...k })
      ]
    }), [V, Y] = Mi(P), O = un(p);
    Nt(() => {
      $ && (O == null || O());
    }, [$, O]);
    const T = (ue = L.arrow) == null ? void 0 : ue.x, q = (te = L.arrow) == null ? void 0 : te.y, I = ((me = L.arrow) == null ? void 0 : me.centerOffset) !== 0, [G, ne] = H.useState();
    return Nt(() => {
      C && ne(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...R,
          transform: $ ? R.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            (fe = L.transformOrigin) == null ? void 0 : fe.x,
            (K = L.transformOrigin) == null ? void 0 : K.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((re = L.hide) == null ? void 0 : re.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ n.jsx(
          uu,
          {
            scope: r,
            placedSide: V,
            onArrowChange: w,
            arrowX: T,
            arrowY: q,
            shouldHideArrow: I,
            children: /* @__PURE__ */ n.jsx(
              St.div,
              {
                "data-side": V,
                "data-align": Y,
                ...g,
                ref: y,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: $ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Oi.displayName = to;
var Pi = "PopperArrow", fu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ti = H.forwardRef(function(t, r) {
  const { __scopePopper: s, ...o } = t, c = du(Pi, s), f = fu[c.placedSide];
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
          iu,
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
Ti.displayName = Pi;
function xu(e) {
  return e !== null;
}
var hu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, C, v;
    const { placement: r, rects: s, middlewareData: o } = t, f = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, l = f ? 0 : e.arrowWidth, i = f ? 0 : e.arrowHeight, [a, u] = Mi(r), m = { start: "0%", center: "50%", end: "100%" }[u], d = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + l / 2, x = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + i / 2;
    let p = "", g = "";
    return a === "bottom" ? (p = f ? m : `${d}px`, g = `${-i}px`) : a === "top" ? (p = f ? m : `${d}px`, g = `${s.floating.height + i}px`) : a === "right" ? (p = `${-i}px`, g = f ? m : `${x}px`) : a === "left" && (p = `${s.floating.width + i}px`, g = f ? m : `${x}px`), { data: { x: p, y: g } };
  }
});
function Mi(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var pu = Bi, mu = Ri, gu = Oi, yu = Ti, vu = "Portal", Li = H.forwardRef((e, t) => {
  var l;
  const { container: r, ...s } = e, [o, c] = H.useState(!1);
  Nt(() => c(!0), []);
  const f = r || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return f ? L0.createPortal(/* @__PURE__ */ n.jsx(St.div, { ...s, ref: t }), f) : null;
});
Li.displayName = vu;
function bu(e, t) {
  return H.useReducer((r, s) => t[r][s] ?? r, e);
}
var ro = (e) => {
  const { present: t, children: r } = e, s = wu(t), o = typeof r == "function" ? r({ present: s.isPresent }) : H.Children.only(r), c = Ht(s.ref, Cu(o));
  return typeof r == "function" || s.isPresent ? H.cloneElement(o, { ref: c }) : null;
};
ro.displayName = "Presence";
function wu(e) {
  const [t, r] = H.useState(), s = H.useRef(null), o = H.useRef(e), c = H.useRef("none"), f = e ? "mounted" : "unmounted", [l, i] = bu(f, {
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
  return H.useEffect(() => {
    const a = Pr(s.current);
    c.current = l === "mounted" ? a : "none";
  }, [l]), Nt(() => {
    const a = s.current, u = o.current;
    if (u !== e) {
      const d = c.current, x = Pr(a);
      e ? i("MOUNT") : x === "none" || (a == null ? void 0 : a.display) === "none" ? i("UNMOUNT") : i(u && d !== x ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, i]), Nt(() => {
    if (t) {
      let a;
      const u = t.ownerDocument.defaultView ?? window, m = (x) => {
        const g = Pr(s.current).includes(x.animationName);
        if (x.target === t && g && (i("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", a = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, d = (x) => {
        x.target === t && (c.current = Pr(s.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        u.clearTimeout(a), t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      i("ANIMATION_END");
  }, [t, i]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: H.useCallback((a) => {
      s.current = a ? getComputedStyle(a) : null, r(a);
    }, [])
  };
}
function Pr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Cu(e) {
  var s, o;
  let t = (s = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Eu = H[" useInsertionEffect ".trim().toString()] || Nt;
function ju({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: s
}) {
  const [o, c, f] = Au({
    defaultProp: t,
    onChange: r
  }), l = e !== void 0, i = l ? e : o;
  {
    const u = H.useRef(e !== void 0);
    H.useEffect(() => {
      const m = u.current;
      m !== l && console.warn(
        `${s} is changing from ${m ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, s]);
  }
  const a = H.useCallback(
    (u) => {
      var m;
      if (l) {
        const d = Nu(u) ? u(e) : u;
        d !== e && ((m = f.current) == null || m.call(f, d));
      } else
        c(u);
    },
    [l, e, c, f]
  );
  return [i, a];
}
function Au({
  defaultProp: e,
  onChange: t
}) {
  const [r, s] = H.useState(e), o = H.useRef(r), c = H.useRef(t);
  return Eu(() => {
    c.current = t;
  }, [t]), H.useEffect(() => {
    var f;
    o.current !== r && ((f = c.current) == null || f.call(c, r), o.current = r);
  }, [r, o]), [r, s, c];
}
function Nu(e) {
  return typeof e == "function";
}
var Du = Object.freeze({
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
}), ku = "VisuallyHidden", Ii = H.forwardRef(
  (e, t) => /* @__PURE__ */ n.jsx(
    St.span,
    {
      ...e,
      ref: t,
      style: { ...Du, ...e.style }
    }
  )
);
Ii.displayName = ku;
var _u = Ii, [hn, th] = di("Tooltip", [
  _i
]), pn = _i(), zi = "TooltipProvider", Su = 700, Ss = "tooltip.open", [Bu, no] = hn(zi), $i = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = Su,
    skipDelayDuration: s = 300,
    disableHoverableContent: o = !1,
    children: c
  } = e, f = H.useRef(!0), l = H.useRef(!1), i = H.useRef(0);
  return H.useEffect(() => {
    const a = i.current;
    return () => window.clearTimeout(a);
  }, []), /* @__PURE__ */ n.jsx(
    Bu,
    {
      scope: t,
      isOpenDelayedRef: f,
      delayDuration: r,
      onOpen: H.useCallback(() => {
        window.clearTimeout(i.current), f.current = !1;
      }, []),
      onClose: H.useCallback(() => {
        window.clearTimeout(i.current), i.current = window.setTimeout(
          () => f.current = !0,
          s
        );
      }, [s]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: H.useCallback((a) => {
        l.current = a;
      }, []),
      disableHoverableContent: o,
      children: c
    }
  );
};
$i.displayName = zi;
var yr = "Tooltip", [Fu, Nr] = hn(yr), Hi = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: s,
    defaultOpen: o,
    onOpenChange: c,
    disableHoverableContent: f,
    delayDuration: l
  } = e, i = no(yr, e.__scopeTooltip), a = pn(t), [u, m] = H.useState(null), d = Gc(), x = H.useRef(0), p = f ?? i.disableHoverableContent, g = l ?? i.delayDuration, b = H.useRef(!1), [C, v] = ju({
    prop: s,
    defaultProp: o ?? !1,
    onChange: (A) => {
      A ? (i.onOpen(), document.dispatchEvent(new CustomEvent(Ss))) : i.onClose(), c == null || c(A);
    },
    caller: yr
  }), y = H.useMemo(() => C ? b.current ? "delayed-open" : "instant-open" : "closed", [C]), h = H.useCallback(() => {
    window.clearTimeout(x.current), x.current = 0, b.current = !1, v(!0);
  }, [v]), w = H.useCallback(() => {
    window.clearTimeout(x.current), x.current = 0, v(!1);
  }, [v]), j = H.useCallback(() => {
    window.clearTimeout(x.current), x.current = window.setTimeout(() => {
      b.current = !0, v(!0), x.current = 0;
    }, g);
  }, [g, v]);
  return H.useEffect(() => () => {
    x.current && (window.clearTimeout(x.current), x.current = 0);
  }, []), /* @__PURE__ */ n.jsx(pu, { ...a, children: /* @__PURE__ */ n.jsx(
    Fu,
    {
      scope: t,
      contentId: d,
      open: C,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: m,
      onTriggerEnter: H.useCallback(() => {
        i.isOpenDelayedRef.current ? j() : h();
      }, [i.isOpenDelayedRef, j, h]),
      onTriggerLeave: H.useCallback(() => {
        p ? w() : (window.clearTimeout(x.current), x.current = 0);
      }, [w, p]),
      onOpen: h,
      onClose: w,
      disableHoverableContent: p,
      children: r
    }
  ) });
};
Hi.displayName = yr;
var Bs = "TooltipTrigger", qi = H.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...s } = e, o = Nr(Bs, r), c = no(Bs, r), f = pn(r), l = H.useRef(null), i = Ht(t, l, o.onTriggerChange), a = H.useRef(!1), u = H.useRef(!1), m = H.useCallback(() => a.current = !1, []);
    return H.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ n.jsx(mu, { asChild: !0, ...f, children: /* @__PURE__ */ n.jsx(
      St.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...s,
        ref: i,
        onPointerMove: vt(e.onPointerMove, (d) => {
          d.pointerType !== "touch" && !u.current && !c.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: vt(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: vt(e.onPointerDown, () => {
          o.open && o.onClose(), a.current = !0, document.addEventListener("pointerup", m, { once: !0 });
        }),
        onFocus: vt(e.onFocus, () => {
          a.current || o.onOpen();
        }),
        onBlur: vt(e.onBlur, o.onClose),
        onClick: vt(e.onClick, o.onClose)
      }
    ) });
  }
);
qi.displayName = Bs;
var so = "TooltipPortal", [Ru, Ou] = hn(so, {
  forceMount: void 0
}), Wi = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: s, container: o } = e, c = Nr(so, t);
  return /* @__PURE__ */ n.jsx(Ru, { scope: t, forceMount: r, children: /* @__PURE__ */ n.jsx(ro, { present: r || c.open, children: /* @__PURE__ */ n.jsx(Li, { asChild: !0, container: o, children: s }) }) });
};
Wi.displayName = so;
var er = "TooltipContent", Vi = H.forwardRef(
  (e, t) => {
    const r = Ou(er, e.__scopeTooltip), { forceMount: s = r.forceMount, side: o = "top", ...c } = e, f = Nr(er, e.__scopeTooltip);
    return /* @__PURE__ */ n.jsx(ro, { present: s || f.open, children: f.disableHoverableContent ? /* @__PURE__ */ n.jsx(Ui, { side: o, ...c, ref: t }) : /* @__PURE__ */ n.jsx(Pu, { side: o, ...c, ref: t }) });
  }
), Pu = H.forwardRef((e, t) => {
  const r = Nr(er, e.__scopeTooltip), s = no(er, e.__scopeTooltip), o = H.useRef(null), c = Ht(t, o), [f, l] = H.useState(null), { trigger: i, onClose: a } = r, u = o.current, { onPointerInTransitChange: m } = s, d = H.useCallback(() => {
    l(null), m(!1);
  }, [m]), x = H.useCallback(
    (p, g) => {
      const b = p.currentTarget, C = { x: p.clientX, y: p.clientY }, v = Iu(C, b.getBoundingClientRect()), y = zu(C, v), h = $u(g.getBoundingClientRect()), w = qu([...y, ...h]);
      l(w), m(!0);
    },
    [m]
  );
  return H.useEffect(() => () => d(), [d]), H.useEffect(() => {
    if (i && u) {
      const p = (b) => x(b, u), g = (b) => x(b, i);
      return i.addEventListener("pointerleave", p), u.addEventListener("pointerleave", g), () => {
        i.removeEventListener("pointerleave", p), u.removeEventListener("pointerleave", g);
      };
    }
  }, [i, u, x, d]), H.useEffect(() => {
    if (f) {
      const p = (g) => {
        const b = g.target, C = { x: g.clientX, y: g.clientY }, v = (i == null ? void 0 : i.contains(b)) || (u == null ? void 0 : u.contains(b)), y = !Hu(C, f);
        v ? d() : y && (d(), a());
      };
      return document.addEventListener("pointermove", p), () => document.removeEventListener("pointermove", p);
    }
  }, [i, u, f, a, d]), /* @__PURE__ */ n.jsx(Ui, { ...e, ref: c });
}), [Tu, Mu] = hn(yr, { isInside: !1 }), Lu = /* @__PURE__ */ Rc("TooltipContent"), Ui = H.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: s,
      "aria-label": o,
      onEscapeKeyDown: c,
      onPointerDownOutside: f,
      ...l
    } = e, i = Nr(er, r), a = pn(r), { onClose: u } = i;
    return H.useEffect(() => (document.addEventListener(Ss, u), () => document.removeEventListener(Ss, u)), [u]), H.useEffect(() => {
      if (i.trigger) {
        const m = (d) => {
          const x = d.target;
          x != null && x.contains(i.trigger) && u();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [i.trigger, u]), /* @__PURE__ */ n.jsx(
      hi,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ n.jsxs(
          gu,
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
              /* @__PURE__ */ n.jsx(Lu, { children: s }),
              /* @__PURE__ */ n.jsx(Tu, { scope: r, isInside: !0, children: /* @__PURE__ */ n.jsx(_u, { id: i.contentId, role: "tooltip", children: o || s }) })
            ]
          }
        )
      }
    );
  }
);
Vi.displayName = er;
var Qi = "TooltipArrow", Ki = H.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...s } = e, o = pn(r);
    return Mu(
      Qi,
      r
    ).isInside ? null : /* @__PURE__ */ n.jsx(yu, { ...o, ...s, ref: t });
  }
);
Ki.displayName = Qi;
function Iu(e, t) {
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
function zu(e, t, r = 5) {
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
function $u(e) {
  const { top: t, right: r, bottom: s, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: s },
    { x: o, y: s }
  ];
}
function Hu(e, t) {
  const { x: r, y: s } = e;
  let o = !1;
  for (let c = 0, f = t.length - 1; c < t.length; f = c++) {
    const l = t[c], i = t[f], a = l.x, u = l.y, m = i.x, d = i.y;
    u > s != d > s && r < (m - a) * (s - u) / (d - u) + a && (o = !o);
  }
  return o;
}
function qu(e) {
  const t = e.slice();
  return t.sort((r, s) => r.x < s.x ? -1 : r.x > s.x ? 1 : r.y < s.y ? -1 : r.y > s.y ? 1 : 0), Wu(t);
}
function Wu(e) {
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
var Vu = $i, Uu = Hi, Qu = qi, Ku = Wi, Gu = Vi, Yu = Ki;
const Gi = [
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
], kn = [
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
], Xu = ({ emailLabels: e }) => {
  const t = _e(null), [r, s] = J(e.length), o = Gi.filter(
    (i) => e.includes(i.id)
  );
  be(() => {
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
        c && l.length > 0 && /* @__PURE__ */ n.jsx(Vu, { children: /* @__PURE__ */ n.jsxs(Uu, { children: [
          /* @__PURE__ */ n.jsx(Qu, { asChild: !0, children: /* @__PURE__ */ n.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 cursor-pointer", children: [
            "+",
            l.length,
            " more"
          ] }) }),
          /* @__PURE__ */ n.jsx(Ku, { children: /* @__PURE__ */ n.jsxs(
            Gu,
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
                /* @__PURE__ */ n.jsx(Yu, { className: "fill-white" })
              ]
            }
          ) })
        ] }) })
      ]
    }
  );
};
function Le(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Zu = typeof Symbol == "function" && Symbol.observable || "@@observable", zo = Zu, _n = () => Math.random().toString(36).substring(7).split("").join("."), Ju = {
  INIT: `@@redux/INIT${/* @__PURE__ */ _n()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ _n()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_n()}`
}, Tt = Ju;
function xt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function ed(e) {
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
  if (nd(e))
    return "date";
  if (rd(e))
    return "error";
  const r = td(e);
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
function td(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function rd(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function nd(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function At(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = ed(e)), t;
}
function Yi(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Le(2) : `Expected the root reducer to be a function. Instead, received: '${At(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Le(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Le(1) : `Expected the enhancer to be a function. Instead, received: '${At(r)}'`);
    return r(Yi)(e, t);
  }
  let s = e, o = t, c = /* @__PURE__ */ new Map(), f = c, l = 0, i = !1;
  function a() {
    f === c && (f = /* @__PURE__ */ new Map(), c.forEach((b, C) => {
      f.set(C, b);
    }));
  }
  function u() {
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? Le(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function m(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Le(4) : `Expected the listener to be a function. Instead, received: '${At(b)}'`);
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? Le(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let C = !0;
    a();
    const v = l++;
    return f.set(v, b), function() {
      if (C) {
        if (i)
          throw new Error(process.env.NODE_ENV === "production" ? Le(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        C = !1, a(), f.delete(v), c = null;
      }
    };
  }
  function d(b) {
    if (!xt(b))
      throw new Error(process.env.NODE_ENV === "production" ? Le(7) : `Actions must be plain objects. Instead, the actual type was: '${At(b)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Le(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof b.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Le(17) : `Action "type" property must be a string. Instead, the actual type was: '${At(b.type)}'. Value was: '${b.type}' (stringified)`);
    if (i)
      throw new Error(process.env.NODE_ENV === "production" ? Le(9) : "Reducers may not dispatch actions.");
    try {
      i = !0, o = s(o, b);
    } finally {
      i = !1;
    }
    return (c = f).forEach((v) => {
      v();
    }), b;
  }
  function x(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Le(10) : `Expected the nextReducer to be a function. Instead, received: '${At(b)}`);
    s = b, d({
      type: Tt.REPLACE
    });
  }
  function p() {
    const b = m;
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
          throw new Error(process.env.NODE_ENV === "production" ? Le(11) : `Expected the observer to be an object. Instead, received: '${At(C)}'`);
        function v() {
          const h = C;
          h.next && h.next(u());
        }
        return v(), {
          unsubscribe: b(v)
        };
      },
      [zo]() {
        return this;
      }
    };
  }
  return d({
    type: Tt.INIT
  }), {
    dispatch: d,
    subscribe: m,
    getState: u,
    replaceReducer: x,
    [zo]: p
  };
}
function $o(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function sd(e, t, r, s) {
  const o = Object.keys(t), c = r && r.type === Tt.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!xt(e))
    return `The ${c} has unexpected type of "${At(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const f = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !s[l]);
  if (f.forEach((l) => {
    s[l] = !0;
  }), !(r && r.type === Tt.REPLACE) && f.length > 0)
    return `Unexpected ${f.length > 1 ? "keys" : "key"} "${f.join('", "')}" found in ${c}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function od(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Tt.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Le(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Tt.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Le(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Tt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Xi(e) {
  const t = Object.keys(e), r = {};
  for (let f = 0; f < t.length; f++) {
    const l = t[f];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && $o(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const s = Object.keys(r);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let c;
  try {
    od(r);
  } catch (f) {
    c = f;
  }
  return function(l = {}, i) {
    if (c)
      throw c;
    if (process.env.NODE_ENV !== "production") {
      const m = sd(l, r, i, o);
      m && $o(m);
    }
    let a = !1;
    const u = {};
    for (let m = 0; m < s.length; m++) {
      const d = s[m], x = r[d], p = l[d], g = x(p, i);
      if (typeof g > "u") {
        const b = i && i.type;
        throw new Error(process.env.NODE_ENV === "production" ? Le(14) : `When called with an action of type ${b ? `"${String(b)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[d] = g, a = a || g !== p;
    }
    return a = a || s.length !== Object.keys(l).length, a ? u : l;
  };
}
function en(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...s) => t(r(...s)));
}
function ad(...e) {
  return (t) => (r, s) => {
    const o = t(r, s);
    let c = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Le(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const f = {
      getState: o.getState,
      dispatch: (i, ...a) => c(i, ...a)
    }, l = e.map((i) => i(f));
    return c = en(...l)(o.dispatch), {
      ...o,
      dispatch: c
    };
  };
}
function oo(e) {
  return xt(e) && "type" in e && typeof e.type == "string";
}
var ao = Symbol.for("immer-nothing"), xr = Symbol.for("immer-draftable"), qe = Symbol.for("immer-state"), Zi = process.env.NODE_ENV !== "production" ? [
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
function Pe(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Zi[e], s = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${s}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Lt = Object.getPrototypeOf;
function ht(e) {
  return !!e && !!e[qe];
}
function at(e) {
  var t;
  return e ? Ji(e) || Array.isArray(e) || !!e[xr] || !!((t = e.constructor) != null && t[xr]) || Dr(e) || kr(e) : !1;
}
var id = Object.prototype.constructor.toString();
function Ji(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Lt(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === id;
}
function cd(e) {
  return ht(e) || Pe(15, e), e[qe].base_;
}
function vr(e, t) {
  It(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, s) => t(s, r, e));
}
function It(e) {
  const t = e[qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : Dr(e) ? 2 : kr(e) ? 3 : 0;
}
function br(e, t) {
  return It(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Sn(e, t) {
  return It(e) === 2 ? e.get(t) : e[t];
}
function e0(e, t, r) {
  const s = It(e);
  s === 2 ? e.set(t, r) : s === 3 ? e.add(r) : e[t] = r;
}
function ld(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Dr(e) {
  return e instanceof Map;
}
function kr(e) {
  return e instanceof Set;
}
function Pt(e) {
  return e.copy_ || e.base_;
}
function Fs(e, t) {
  if (Dr(e))
    return new Map(e);
  if (kr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Ji(e);
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
    return Object.create(Lt(e), s);
  } else {
    const s = Lt(e);
    if (s !== null && r)
      return { ...e };
    const o = Object.create(s);
    return Object.assign(o, e);
  }
}
function io(e, t = !1) {
  return mn(e) || ht(e) || !at(e) || (It(e) > 1 && (e.set = e.add = e.clear = e.delete = ud), Object.freeze(e), t && Object.entries(e).forEach(([r, s]) => io(s, !0))), e;
}
function ud() {
  Pe(2);
}
function mn(e) {
  return Object.isFrozen(e);
}
var Rs = {};
function zt(e) {
  const t = Rs[e];
  return t || Pe(0, e), t;
}
function dd(e, t) {
  Rs[e] || (Rs[e] = t);
}
var wr;
function t0() {
  return wr;
}
function fd(e, t) {
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
function Ho(e, t) {
  t && (zt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Os(e) {
  Ps(e), e.drafts_.forEach(xd), e.drafts_ = null;
}
function Ps(e) {
  e === wr && (wr = e.parent_);
}
function qo(e) {
  return wr = fd(wr, e);
}
function xd(e) {
  const t = e[qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Wo(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[qe].modified_ && (Os(t), Pe(4)), at(e) && (e = tn(t, e), t.parent_ || rn(t, e)), t.patches_ && zt("Patches").generateReplacementPatches_(
    r[qe].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = tn(t, r, []), Os(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ao ? e : void 0;
}
function tn(e, t, r) {
  if (mn(t))
    return t;
  const s = t[qe];
  if (!s)
    return vr(
      t,
      (o, c) => Vo(e, s, t, o, c, r)
    ), t;
  if (s.scope_ !== e)
    return t;
  if (!s.modified_)
    return rn(e, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const o = s.copy_;
    let c = o, f = !1;
    s.type_ === 3 && (c = new Set(o), o.clear(), f = !0), vr(
      c,
      (l, i) => Vo(e, s, o, l, i, r, f)
    ), rn(e, o, !1), r && e.patches_ && zt("Patches").generatePatches_(
      s,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return s.copy_;
}
function Vo(e, t, r, s, o, c, f) {
  if (process.env.NODE_ENV !== "production" && o === r && Pe(5), ht(o)) {
    const l = c && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !br(t.assigned_, s) ? c.concat(s) : void 0, i = tn(e, o, l);
    if (e0(r, s, i), ht(i))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else f && r.add(o);
  if (at(o) && !mn(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    tn(e, o), (!t || !t.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(r, s) && rn(e, o);
  }
}
function rn(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && io(t, r);
}
function hd(e, t) {
  const r = Array.isArray(e), s = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : t0(),
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
  r && (o = [s], c = Cr);
  const { revoke: f, proxy: l } = Proxy.revocable(o, c);
  return s.draft_ = l, s.revoke_ = f, l;
}
var co = {
  get(e, t) {
    if (t === qe)
      return e;
    const r = Pt(e);
    if (!br(r, t))
      return pd(e, r, t);
    const s = r[t];
    return e.finalized_ || !at(s) ? s : s === Bn(e.base_, t) ? (Fn(e), e.copy_[t] = Ms(s, e)) : s;
  },
  has(e, t) {
    return t in Pt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Pt(e));
  },
  set(e, t, r) {
    const s = r0(Pt(e), t);
    if (s != null && s.set)
      return s.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = Bn(Pt(e), t), c = o == null ? void 0 : o[qe];
      if (c && c.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (ld(r, o) && (r !== void 0 || br(e.base_, t)))
        return !0;
      Fn(e), Ts(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Bn(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Fn(e), Ts(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Pt(e), s = Reflect.getOwnPropertyDescriptor(r, t);
    return s && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: s.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Pe(11);
  },
  getPrototypeOf(e) {
    return Lt(e.base_);
  },
  setPrototypeOf() {
    Pe(12);
  }
}, Cr = {};
vr(co, (e, t) => {
  Cr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Cr.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Pe(13), Cr.set.call(this, e, t, void 0);
};
Cr.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Pe(14), co.set.call(this, e[0], t, r, e[0]);
};
function Bn(e, t) {
  const r = e[qe];
  return (r ? Pt(r) : e)[t];
}
function pd(e, t, r) {
  var o;
  const s = r0(t, r);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = s.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function r0(e, t) {
  if (!(t in e))
    return;
  let r = Lt(e);
  for (; r; ) {
    const s = Object.getOwnPropertyDescriptor(r, t);
    if (s)
      return s;
    r = Lt(r);
  }
}
function Ts(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ts(e.parent_));
}
function Fn(e) {
  e.copy_ || (e.copy_ = Fs(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var md = class {
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
      typeof r != "function" && Pe(6), s !== void 0 && typeof s != "function" && Pe(7);
      let o;
      if (at(t)) {
        const c = qo(this), f = Ms(t, void 0);
        let l = !0;
        try {
          o = r(f), l = !1;
        } finally {
          l ? Os(c) : Ps(c);
        }
        return Ho(c, s), Wo(o, c);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === ao && (o = void 0), this.autoFreeze_ && io(o, !0), s) {
          const c = [], f = [];
          zt("Patches").generateReplacementPatches_(t, o, c, f), s(c, f);
        }
        return o;
      } else
        Pe(1, t);
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
    at(e) || Pe(8), ht(e) && (e = gd(e));
    const t = qo(this), r = Ms(e, void 0);
    return r[qe].isManual_ = !0, Ps(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[qe];
    (!r || !r.isManual_) && Pe(9);
    const { scope_: s } = r;
    return Ho(s, t), Wo(void 0, s);
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
    const s = zt("Patches").applyPatches_;
    return ht(e) ? s(e, t) : this.produce(
      e,
      (o) => s(o, t)
    );
  }
};
function Ms(e, t) {
  const r = Dr(e) ? zt("MapSet").proxyMap_(e, t) : kr(e) ? zt("MapSet").proxySet_(e, t) : hd(e, t);
  return (t ? t.scope_ : t0()).drafts_.push(r), r;
}
function gd(e) {
  return ht(e) || Pe(10, e), n0(e);
}
function n0(e) {
  if (!at(e) || mn(e))
    return e;
  const t = e[qe];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Fs(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Fs(e, !0);
  return vr(r, (s, o) => {
    e0(r, s, n0(o));
  }), t && (t.finalized_ = !1), r;
}
function yd() {
  process.env.NODE_ENV !== "production" && Zi.push(
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
    let { base_: b, assigned_: C } = d, v = d.copy_;
    v.length < b.length && ([b, v] = [v, b], [p, g] = [g, p]);
    for (let y = 0; y < b.length; y++)
      if (C[y] && v[y] !== b[y]) {
        const h = x.concat([y]);
        p.push({
          op: t,
          path: h,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: m(v[y])
        }), g.push({
          op: t,
          path: h,
          value: m(b[y])
        });
      }
    for (let y = b.length; y < v.length; y++) {
      const h = x.concat([y]);
      p.push({
        op: r,
        path: h,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: m(v[y])
      });
    }
    for (let y = v.length - 1; b.length <= y; --y) {
      const h = x.concat([y]);
      g.push({
        op: s,
        path: h
      });
    }
  }
  function f(d, x, p, g) {
    const { base_: b, copy_: C } = d;
    vr(d.assigned_, (v, y) => {
      const h = Sn(b, v), w = Sn(C, v), j = y ? br(b, v) ? t : r : s;
      if (h === w && j === t)
        return;
      const A = x.concat(v);
      p.push(j === s ? { op: j, path: A } : { op: j, path: A, value: w }), g.push(
        j === r ? { op: s, path: A } : j === s ? { op: r, path: A, value: m(h) } : { op: t, path: A, value: m(h) }
      );
    });
  }
  function l(d, x, p, g) {
    let { base_: b, copy_: C } = d, v = 0;
    b.forEach((y) => {
      if (!C.has(y)) {
        const h = x.concat([v]);
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
      v++;
    }), v = 0, C.forEach((y) => {
      if (!b.has(y)) {
        const h = x.concat([v]);
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
      v++;
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
      const { path: g, op: b } = p;
      let C = d;
      for (let w = 0; w < g.length - 1; w++) {
        const j = It(C);
        let A = g[w];
        typeof A != "string" && typeof A != "number" && (A = "" + A), (j === 0 || j === 1) && (A === "__proto__" || A === "constructor") && Pe(19), typeof C == "function" && A === "prototype" && Pe(19), C = Sn(C, A), typeof C != "object" && Pe(18, g.join("/"));
      }
      const v = It(C), y = u(p.value), h = g[g.length - 1];
      switch (b) {
        case t:
          switch (v) {
            case 2:
              return C.set(h, y);
            case 3:
              Pe(16);
            default:
              return C[h] = y;
          }
        case r:
          switch (v) {
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
          switch (v) {
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
          Pe(17, b);
      }
    }), d;
  }
  function u(d) {
    if (!at(d))
      return d;
    if (Array.isArray(d))
      return d.map(u);
    if (Dr(d))
      return new Map(
        Array.from(d.entries()).map(([p, g]) => [p, u(g)])
      );
    if (kr(d))
      return new Set(Array.from(d).map(u));
    const x = Object.create(Lt(d));
    for (const p in d)
      x[p] = u(d[p]);
    return br(d, xr) && (x[xr] = d[xr]), x;
  }
  function m(d) {
    return ht(d) ? u(d) : d;
  }
  dd("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: i
  });
}
var Ge = new md(), _r = Ge.produce, s0 = Ge.produceWithPatches.bind(
  Ge
);
Ge.setAutoFreeze.bind(Ge);
Ge.setUseStrictShallowCopy.bind(Ge);
var Uo = Ge.applyPatches.bind(Ge);
Ge.createDraft.bind(Ge);
Ge.finishDraft.bind(Ge);
var vd = (e, t, r) => {
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
}, bd = (e, t, r) => {
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
}, wd = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Cd(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Ed(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function jd(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (s) => typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Qo = (e) => Array.isArray(e) ? e : [e];
function Ad(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return jd(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Ko(e, t) {
  const r = [], { length: s } = e;
  for (let o = 0; o < s; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var Nd = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: s } = {
    ...wd,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: vd
    },
    inputStabilityCheck: {
      shouldRun: s === "always" || s === "once" && e,
      run: bd
    }
  };
}, Dd = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, kd = typeof WeakRef < "u" ? WeakRef : Dd, _d = 0, Go = 1;
function Tr() {
  return {
    s: _d,
    v: void 0,
    o: null,
    p: null
  };
}
function nn(e, t = {}) {
  let r = Tr();
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
        const b = g.get(p);
        b === void 0 ? (l = Tr(), g.set(p, l)) : l = b;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const b = g.get(p);
        b === void 0 ? (l = Tr(), g.set(p, l)) : l = b;
      }
    }
    const a = l;
    let u;
    if (l.s === Go)
      u = l.v;
    else if (u = e.apply(null, arguments), c++, s) {
      const d = ((m = o == null ? void 0 : o.deref) == null ? void 0 : m.call(o)) ?? o;
      d != null && s(d, u) && (u = d, c !== 0 && c--), o = typeof u == "object" && u !== null || typeof u == "function" ? new kd(u) : u;
    }
    return a.s = Go, a.v = u, u;
  }
  return f.clearCache = () => {
    r = Tr(), f.resetResultsCount();
  }, f.resultsCount = () => c, f.resetResultsCount = () => {
    c = 0;
  }, f;
}
function Sd(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, s = (...o) => {
    let c = 0, f = 0, l, i = {}, a = o.pop();
    typeof a == "object" && (i = a, a = o.pop()), Cd(
      a,
      `createSelector expects an output function after the inputs, but received: [${typeof a}]`
    );
    const u = {
      ...r,
      ...i
    }, {
      memoize: m,
      memoizeOptions: d = [],
      argsMemoize: x = nn,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, b = Qo(d), C = Qo(p), v = Ad(o), y = m(function() {
      return c++, a.apply(
        null,
        arguments
      );
    }, ...b);
    let h = !0;
    const w = x(function() {
      f++;
      const A = Ko(
        v,
        arguments
      );
      if (l = y.apply(null, A), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: S, inputStabilityCheck: D } = Nd(h, g);
        if (S.shouldRun && S.run(
          a,
          A,
          l
        ), D.shouldRun) {
          const E = Ko(
            v,
            arguments
          );
          D.run(
            { inputSelectorResults: A, inputSelectorResultsCopy: E },
            { memoize: m, memoizeOptions: b },
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
      dependencies: v,
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
var lo = /* @__PURE__ */ Sd(nn), Bd = Object.assign(
  (e, t = lo) => {
    Ed(
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
  { withTypes: () => Bd }
);
function o0(e) {
  return ({ dispatch: r, getState: s }) => (o) => (c) => typeof c == "function" ? c(r, s, e) : o(c);
}
var Fd = o0(), Rd = o0, Od = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? en : en.apply(null, arguments);
}, a0 = (e) => e && typeof e.match == "function";
function nt(e, t) {
  function r(...s) {
    if (t) {
      let o = t(...s);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? Ne(0) : "prepareAction did not return an object");
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
function Pd(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  a0(e);
}
function Td(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function Md(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (s) => r(s);
  const {
    isActionCreator: t = Pd
  } = e;
  return () => (r) => (s) => (t(s) && console.warn(Td(s.type)), r(s));
}
function i0(e, t) {
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
var c0 = class fr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, fr.prototype);
  }
  static get [Symbol.species]() {
    return fr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new fr(...t[0].concat(this)) : new fr(...t.concat(this));
  }
};
function Yo(e) {
  return at(e) ? _r(e, () => {
  }) : e;
}
function Mr(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Ld(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Id(e, t, r) {
  const s = l0(e, t, r);
  return {
    detectMutations() {
      return u0(e, t, s, r);
    }
  };
}
function l0(e, t = [], r, s = "", o = /* @__PURE__ */ new Set()) {
  const c = {
    value: r
  };
  if (!e(r) && !o.has(r)) {
    o.add(r), c.children = {};
    for (const f in r) {
      const l = s ? s + "." + f : f;
      t.length && t.indexOf(l) !== -1 || (c.children[f] = l0(e, t, r[f], l));
    }
  }
  return c;
}
function u0(e, t = [], r, s, o = !1, c = "") {
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
    const d = u0(e, t, r.children[u], s[u], l, m);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function zd(e = {}) {
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
      isImmutable: s = Ld,
      ignoredPaths: o,
      warnAfter: c = 32
    } = e;
    const f = Id.bind(null, s, o);
    return ({
      getState: l
    }) => {
      let i = l(), a = f(i), u;
      return (m) => (d) => {
        const x = i0(c, "ImmutableStateInvariantMiddleware");
        x.measureTime(() => {
          if (i = l(), u = a.detectMutations(), a = f(i), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Ne(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = m(d);
        return x.measureTime(() => {
          if (i = l(), u = a.detectMutations(), a = f(i), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? Ne(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), x.warnIfExceeded(), p;
      };
    };
  }
}
function d0(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || xt(e);
}
function Ls(e, t = "", r = d0, s, o = [], c) {
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
      if (typeof u == "object" && (f = Ls(u, m, r, s, o, c), f))
        return f;
    }
  }
  return c && f0(e) && c.add(e), !1;
}
function f0(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !f0(t))
      return !1;
  return !0;
}
function $d(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = d0,
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
      const p = d(x), g = i0(f, "SerializableStateInvariantMiddleware");
      return !i && !(s.length && s.indexOf(x.type) !== -1) && g.measureTime(() => {
        const b = Ls(x, "", t, r, o, u);
        if (b) {
          const {
            keyPath: C,
            value: v
          } = b;
          console.error(`A non-serializable value was detected in an action, in the path: \`${C}\`. Value:`, v, `
Take a look at the logic that dispatched this action: `, x, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (g.measureTime(() => {
        const b = m.getState(), C = Ls(b, "", t, r, c, u);
        if (C) {
          const {
            keyPath: v,
            value: y
          } = C;
          console.error(`A non-serializable value was detected in the state, in the path: \`${v}\`. Value:`, y, `
Take a look at the reducer(s) handling this action type: ${x.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), p;
    };
  }
}
function Lr(e) {
  return typeof e == "boolean";
}
var Hd = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: s = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: c = !0
  } = t ?? {};
  let f = new c0();
  if (r && (Lr(r) ? f.push(Fd) : f.push(Rd(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (s) {
      let l = {};
      Lr(s) || (l = s), f.unshift(zd(l));
    }
    if (o) {
      let l = {};
      Lr(o) || (l = o), f.push($d(l));
    }
    if (c) {
      let l = {};
      Lr(c) || (l = c), f.unshift(Md(l));
    }
  }
  return f;
}, gn = "RTK_autoBatch", lr = () => (e) => ({
  payload: e,
  meta: {
    [gn]: !0
  }
}), Xo = (e) => (t) => {
  setTimeout(t, e);
}, qd = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const s = t(...r);
  let o = !0, c = !1, f = !1;
  const l = /* @__PURE__ */ new Set(), i = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Xo(10)
  ) : e.type === "callback" ? e.queueNotification : Xo(e.timeout), a = () => {
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
        return o = !((m = u == null ? void 0 : u.meta) != null && m[gn]), c = !o, c && (f || (f = !0, i(a))), s.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Wd = (e) => function(r) {
  const {
    autoBatch: s = !0
  } = r ?? {};
  let o = new c0(e);
  return s && o.push(qd(typeof s == "object" ? s : void 0)), o;
};
function Vd(e) {
  const t = Hd(), {
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
  else if (xt(r))
    i = Xi(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? Ne(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ne(2) : "`middleware` field must be a callback");
  let a;
  if (typeof s == "function") {
    if (a = s(t), process.env.NODE_ENV !== "production" && !Array.isArray(a))
      throw new Error(process.env.NODE_ENV === "production" ? Ne(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    a = t();
  if (process.env.NODE_ENV !== "production" && a.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Ne(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && c) {
    let g = /* @__PURE__ */ new Set();
    a.forEach((b) => {
      if (g.has(b))
        throw new Error(process.env.NODE_ENV === "production" ? Ne(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      g.add(b);
    });
  }
  let u = en;
  o && (u = Od({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const m = ad(...a), d = Wd(m);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Ne(5) : "`enhancers` field must be a callback");
  let x = typeof l == "function" ? l(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(x))
    throw new Error(process.env.NODE_ENV === "production" ? Ne(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && x.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? Ne(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && a.length && !x.includes(m) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = u(...x);
  return Yi(i, f, p);
}
function x0(e) {
  const t = {}, r = [];
  let s;
  const o = {
    addCase(c, f) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? Ne(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? Ne(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof c == "string" ? c : c.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? Ne(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? Ne(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = f, o;
    },
    addMatcher(c, f) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? Ne(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: c,
        reducer: f
      }), o;
    },
    addDefaultCase(c) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? Ne(31) : "`builder.addDefaultCase` can only be called once");
      return s = c, o;
    }
  };
  return e(o), [t, r, s];
}
function Ud(e) {
  return typeof e == "function";
}
function Qd(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? Ne(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, s, o] = x0(t), c;
  if (Ud(e))
    c = () => Yo(e());
  else {
    const l = Yo(e);
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
        if (ht(u)) {
          const x = m(u, i);
          return x === void 0 ? u : x;
        } else {
          if (at(u))
            return _r(u, (d) => m(d, i));
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
var h0 = (e, t) => a0(e) ? e.match(t) : e(t);
function Ct(...e) {
  return (t) => e.some((r) => h0(r, t));
}
function hr(...e) {
  return (t) => e.every((r) => h0(r, t));
}
function yn(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string", s = t.indexOf(e.meta.requestStatus) > -1;
  return r && s;
}
function Sr(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function uo(...e) {
  return e.length === 0 ? (t) => yn(t, ["pending"]) : Sr(e) ? Ct(...e.map((t) => t.pending)) : uo()(e[0]);
}
function tr(...e) {
  return e.length === 0 ? (t) => yn(t, ["rejected"]) : Sr(e) ? Ct(...e.map((t) => t.rejected)) : tr()(e[0]);
}
function vn(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? hr(tr(...e), t) : Sr(e) ? hr(tr(...e), t) : vn()(e[0]);
}
function _t(...e) {
  return e.length === 0 ? (t) => yn(t, ["fulfilled"]) : Sr(e) ? Ct(...e.map((t) => t.fulfilled)) : _t()(e[0]);
}
function Is(...e) {
  return e.length === 0 ? (t) => yn(t, ["pending", "fulfilled", "rejected"]) : Sr(e) ? Ct(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : Is()(e[0]);
}
var Kd = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", fo = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Kd[Math.random() * 64 | 0];
  return t;
}, Gd = ["name", "message", "stack", "code"], Rn = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Rr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Zo = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Rr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Yd = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of Gd)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, Jo = "External signal was aborted", ea = /* @__PURE__ */ (() => {
  function e(t, r, s) {
    const o = nt(t + "/fulfilled", (i, a, u, m) => ({
      payload: i,
      meta: {
        ...m || {},
        arg: u,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), c = nt(t + "/pending", (i, a, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: a,
        requestId: i,
        requestStatus: "pending"
      }
    })), f = nt(t + "/rejected", (i, a, u, m, d) => ({
      payload: m,
      error: (s && s.serializeError || Yd)(i || "Rejected"),
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
        let g, b;
        function C(y) {
          b = y, p.abort();
        }
        a && (a.aborted ? C(Jo) : a.addEventListener("abort", () => C(Jo), {
          once: !0
        }));
        const v = async function() {
          var w, j;
          let y;
          try {
            let A = (w = s == null ? void 0 : s.condition) == null ? void 0 : w.call(s, i, {
              getState: m,
              extra: d
            });
            if (Zd(A) && (A = await A), A === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const S = new Promise((D, E) => {
              g = () => {
                E({
                  name: "AbortError",
                  message: b || "Aborted"
                });
              }, p.signal.addEventListener("abort", g);
            });
            u(c(x, i, (j = s == null ? void 0 : s.getPendingMeta) == null ? void 0 : j.call(s, {
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
              rejectWithValue: (D, E) => new Rn(D, E),
              fulfillWithValue: (D, E) => new Zo(D, E)
            })).then((D) => {
              if (D instanceof Rn)
                throw D;
              return D instanceof Zo ? o(D.payload, x, i, D.meta) : o(D, x, i);
            })]);
          } catch (A) {
            y = A instanceof Rn ? f(null, x, i, A.payload, A.meta) : f(A, x, i);
          } finally {
            g && p.signal.removeEventListener("abort", g);
          }
          return s && !s.dispatchConditionRejection && f.match(y) && y.meta.condition || u(y), y;
        }();
        return Object.assign(v, {
          abort: C,
          requestId: x,
          arg: i,
          unwrap() {
            return v.then(Xd);
          }
        });
      };
    }
    return Object.assign(l, {
      pending: c,
      rejected: f,
      fulfilled: o,
      settled: Ct(f, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Xd(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Zd(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Jd = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ef(e, t) {
  return `${e}/${t}`;
}
function tf({
  creators: e
} = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[Jd];
  return function(o) {
    const {
      name: c,
      reducerPath: f = c
    } = o;
    if (!c)
      throw new Error(process.env.NODE_ENV === "production" ? Ne(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const l = (typeof o.reducers == "function" ? o.reducers(nf()) : o.reducers) || {}, i = Object.keys(l), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(h, w) {
        const j = typeof h == "string" ? h : h.type;
        if (!j)
          throw new Error(process.env.NODE_ENV === "production" ? Ne(12) : "`context.addCase` cannot be called with an empty action type");
        if (j in a.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? Ne(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + j);
        return a.sliceCaseReducersByType[j] = w, u;
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
      const w = l[h], j = {
        reducerName: h,
        type: ef(c, h),
        createNotation: typeof o.reducers == "function"
      };
      of(w) ? cf(j, w, u, t) : sf(j, w, u);
    });
    function m() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? Ne(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [h = {}, w = [], j = void 0] = typeof o.extraReducers == "function" ? x0(o.extraReducers) : [o.extraReducers], A = {
        ...h,
        ...a.sliceCaseReducersByType
      };
      return Qd(o.initialState, (S) => {
        for (let D in A)
          S.addCase(D, A[D]);
        for (let D of a.sliceMatchers)
          S.addMatcher(D.matcher, D.reducer);
        for (let D of w)
          S.addMatcher(D.matcher, D.reducer);
        j && S.addDefaultCase(j);
      });
    }
    const d = (h) => h, x = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let g;
    function b(h, w) {
      return g || (g = m()), g(h, w);
    }
    function C() {
      return g || (g = m()), g.getInitialState();
    }
    function v(h, w = !1) {
      function j(S) {
        let D = S[h];
        if (typeof D > "u") {
          if (w)
            D = Mr(p, j, C);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? Ne(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return D;
      }
      function A(S = d) {
        const D = Mr(x, w, () => /* @__PURE__ */ new WeakMap());
        return Mr(D, S, () => {
          const E = {};
          for (const [N, _] of Object.entries(o.selectors ?? {}))
            E[N] = rf(_, S, () => Mr(p, S, C), w);
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
      reducer: b,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: C,
      ...v(f),
      injectInto(h, {
        reducerPath: w,
        ...j
      } = {}) {
        const A = w ?? f;
        return h.inject({
          reducerPath: A,
          reducer: b
        }, j), {
          ...y,
          ...v(A, !0)
        };
      }
    };
    return y;
  };
}
function rf(e, t, r, s) {
  function o(c, ...f) {
    let l = t(c);
    if (typeof l > "u") {
      if (s)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? Ne(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...f);
  }
  return o.unwrapped = e, o;
}
var Qt = /* @__PURE__ */ tf();
function nf() {
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
function sf({
  type: e,
  reducerName: t,
  createNotation: r
}, s, o) {
  let c, f;
  if ("reducer" in s) {
    if (r && !af(s))
      throw new Error(process.env.NODE_ENV === "production" ? Ne(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    c = s.reducer, f = s.prepare;
  } else
    c = s;
  o.addCase(e, c).exposeCaseReducer(t, c).exposeAction(t, f ? nt(e, f) : nt(e));
}
function of(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function af(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function cf({
  type: e,
  reducerName: t
}, r, s, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? Ne(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: c,
    fulfilled: f,
    pending: l,
    rejected: i,
    settled: a,
    options: u
  } = r, m = o(e, c, u);
  s.exposeAction(t, m), f && s.addCase(m.fulfilled, f), l && s.addCase(m.pending, l), i && s.addCase(m.rejected, i), a && s.addMatcher(m.settled, a), s.exposeCaseReducer(t, {
    fulfilled: f || Ir,
    pending: l || Ir,
    rejected: i || Ir,
    settled: a || Ir
  });
}
function Ir() {
}
function Ne(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var lf = class extends Error {
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
    Rr(this, "issues");
    this.name = "SchemaError", this.issues = t;
  }
}, p0 = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(p0 || {});
function ta(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var ra = xt;
function m0(e, t) {
  if (e === t || !(ra(e) && ra(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), s = Object.keys(e);
  let o = r.length === s.length;
  const c = Array.isArray(t) ? [] : {};
  for (const f of r)
    c[f] = m0(e[f], t[f]), o && (o = e[f] === c[f]);
  return o ? e : c;
}
function Xt(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var na = (e) => [].concat(...e);
function uf(e) {
  return new RegExp("(^|:)//").test(e);
}
function df() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function sn(e) {
  return e != null;
}
function ff() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var xf = (e) => e.replace(/\/$/, ""), hf = (e) => e.replace(/^\//, "");
function pf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (uf(t))
    return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = xf(e), t = hf(t), `${e}${r}${t}`;
}
function mf(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var sa = (...e) => fetch(...e), gf = (e) => e.status >= 200 && e.status <= 299, yf = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function oa(e) {
  if (!xt(e))
    return e;
  const t = {
    ...e
  };
  for (const [r, s] of Object.entries(t))
    s === void 0 && delete t[r];
  return t;
}
function vf({
  baseUrl: e,
  prepareHeaders: t = (m) => m,
  fetchFn: r = sa,
  paramsSerializer: s,
  isJsonContentType: o = yf,
  jsonContentType: c = "application/json",
  jsonReplacer: f,
  timeout: l,
  responseHandler: i,
  validateStatus: a,
  ...u
} = {}) {
  return typeof fetch > "u" && r === sa && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (d, x, p) => {
    const {
      getState: g,
      extra: b,
      endpoint: C,
      forced: v,
      type: y
    } = x;
    let h, {
      url: w,
      headers: j = new Headers(u.headers),
      params: A = void 0,
      responseHandler: S = i ?? "json",
      validateStatus: D = a ?? gf,
      timeout: E = l,
      ...N
    } = typeof d == "string" ? {
      url: d
    } : d, _, k = x.signal;
    E && (_ = new AbortController(), x.signal.addEventListener("abort", _.abort), k = _.signal);
    let B = {
      ...u,
      signal: k,
      ...N
    };
    j = new Headers(oa(j)), B.headers = await t(j, {
      getState: g,
      arg: d,
      extra: b,
      endpoint: C,
      forced: v,
      type: y,
      extraOptions: p
    }) || j;
    const R = (I) => typeof I == "object" && (xt(I) || Array.isArray(I) || typeof I.toJSON == "function");
    if (!B.headers.has("content-type") && R(B.body) && B.headers.set("content-type", c), R(B.body) && o(B.headers) && (B.body = JSON.stringify(B.body, f)), A) {
      const I = ~w.indexOf("?") ? "&" : "?", G = s ? s(A) : new URLSearchParams(oa(A));
      w += I + G;
    }
    w = pf(e, w);
    const P = new Request(w, B);
    h = {
      request: new Request(w, B)
    };
    let L, V = !1, Y = _ && setTimeout(() => {
      V = !0, _.abort();
    }, E);
    try {
      L = await r(P);
    } catch (I) {
      return {
        error: {
          status: V ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(I)
        },
        meta: h
      };
    } finally {
      Y && clearTimeout(Y), _ == null || _.signal.removeEventListener("abort", _.abort);
    }
    const O = L.clone();
    h.response = O;
    let T, q = "";
    try {
      let I;
      if (await Promise.all([
        m(L, S).then((G) => T = G, (G) => I = G),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        O.text().then((G) => q = G, () => {
        })
      ]), I) throw I;
    } catch (I) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: L.status,
          data: q,
          error: String(I)
        },
        meta: h
      };
    }
    return D(L, T) ? {
      data: T,
      meta: h
    } : {
      error: {
        status: L.status,
        data: T
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
var aa = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, xo = /* @__PURE__ */ nt("__rtkq/focused"), g0 = /* @__PURE__ */ nt("__rtkq/unfocused"), ho = /* @__PURE__ */ nt("__rtkq/online"), y0 = /* @__PURE__ */ nt("__rtkq/offline");
function bn(e) {
  return e.type === "query";
}
function bf(e) {
  return e.type === "mutation";
}
function Br(e) {
  return e.type === "infinitequery";
}
function on(e) {
  return bn(e) || Br(e);
}
function po(e, t, r, s, o, c) {
  return wf(e) ? e(t, r, s, o).filter(sn).map(zs).map(c) : Array.isArray(e) ? e.map(zs).map(c) : [];
}
function wf(e) {
  return typeof e == "function";
}
function zs(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Cf(e, t) {
  return e.catch(t);
}
var Er = Symbol("forceQueryFn"), $s = (e) => typeof e[Er] == "function";
function Ef({
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
    buildInitiateInfiniteQuery: v,
    buildInitiateMutation: y,
    getRunningQueryThunk: m,
    getRunningMutationThunk: d,
    getRunningQueriesThunk: x,
    getRunningMutationsThunk: p
  };
  function m(h, w) {
    return (j) => {
      var D;
      const A = c.endpointDefinitions[h], S = e({
        queryArgs: w,
        endpointDefinition: A,
        endpointName: h
      });
      return (D = f.get(j)) == null ? void 0 : D[S];
    };
  }
  function d(h, w) {
    return (j) => {
      var A;
      return (A = l.get(j)) == null ? void 0 : A[w];
    };
  }
  function x() {
    return (h) => Object.values(f.get(h) || {}).filter(sn);
  }
  function p() {
    return (h) => Object.values(l.get(h) || {}).filter(sn);
  }
  function g(h) {
    if (process.env.NODE_ENV !== "production") {
      if (g.triggered) return;
      const w = h(o.internalActions.internal_getRTKQSubscriptions());
      if (g.triggered = !0, typeof w != "object" || typeof (w == null ? void 0 : w.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? Ne(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function b(h, w) {
    const j = (A, {
      subscribe: S = !0,
      forceRefetch: D,
      subscriptionOptions: E,
      [Er]: N,
      ..._
    } = {}) => (k, B) => {
      var ue;
      const R = e({
        queryArgs: A,
        endpointDefinition: w,
        endpointName: h
      });
      let P;
      const $ = {
        ..._,
        type: "query",
        subscribe: S,
        forceRefetch: D,
        subscriptionOptions: E,
        endpointName: h,
        originalArgs: A,
        queryCacheKey: R,
        [Er]: N
      };
      if (bn(w))
        P = t($);
      else {
        const {
          direction: te,
          initialPageParam: me
        } = _;
        P = r({
          ...$,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: te,
          initialPageParam: me
        });
      }
      const L = o.endpoints[h].select(A), V = k(P), Y = L(B());
      g(k);
      const {
        requestId: O,
        abort: T
      } = V, q = Y.requestId !== O, I = (ue = f.get(k)) == null ? void 0 : ue[R], G = () => L(B()), ne = Object.assign(N ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        V.then(G)
      ) : q && !I ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(Y)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([I, V]).then(G)
      ), {
        arg: A,
        requestId: O,
        subscriptionOptions: E,
        queryCacheKey: R,
        abort: T,
        async unwrap() {
          const te = await ne;
          if (te.isError)
            throw te.error;
          return te.data;
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
        updateSubscriptionOptions(te) {
          ne.subscriptionOptions = te, k(u({
            endpointName: h,
            requestId: O,
            queryCacheKey: R,
            options: te
          }));
        }
      });
      if (!I && !q && !N) {
        const te = mf(f, k, {});
        te[R] = ne, ne.then(() => {
          delete te[R], Xt(te) || f.delete(k);
        });
      }
      return ne;
    };
    return j;
  }
  function C(h, w) {
    return b(h, w);
  }
  function v(h, w) {
    return b(h, w);
  }
  function y(h) {
    return (w, {
      track: j = !0,
      fixedCacheKey: A
    } = {}) => (S, D) => {
      const E = s({
        type: "mutation",
        endpointName: h,
        originalArgs: w,
        track: j,
        fixedCacheKey: A
      }), N = S(E);
      g(S);
      const {
        requestId: _,
        abort: k,
        unwrap: B
      } = N, R = Cf(N.unwrap().then((V) => ({
        data: V
      })), (V) => ({
        error: V
      })), P = () => {
        S(a({
          requestId: _,
          fixedCacheKey: A
        }));
      }, $ = Object.assign(R, {
        arg: N.arg,
        requestId: _,
        abort: k,
        unwrap: B,
        reset: P
      }), L = l.get(S) || {};
      return l.set(S, L), L[_] = $, $.then(() => {
        delete L[_], Xt(L) || l.delete(S);
      }), A && (L[A] = $, $.then(() => {
        L[A] === $ && (delete L[A], Xt(L) || l.delete(S));
      })), $;
    };
  }
}
var v0 = class extends lf {
  constructor(e, t, r, s) {
    super(e), this.value = t, this.schemaName = r, this._bqMeta = s;
  }
};
async function Ot(e, t, r, s) {
  const o = await e["~standard"].validate(t);
  if (o.issues)
    throw new v0(o.issues, t, r, s);
  return o.value;
}
function jf(e) {
  return e;
}
var ur = (e = {}) => ({
  ...e,
  [gn]: !0
});
function Af({
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
  const u = (N, _, k, B) => (R, P) => {
    const $ = r[N], L = s({
      queryArgs: _,
      endpointDefinition: $,
      endpointName: N
    });
    if (R(o.internalActions.queryResultPatched({
      queryCacheKey: L,
      patches: k
    })), !B)
      return;
    const V = o.endpoints[N].select(_)(
      // Work around TS 4.1 mismatch
      P()
    ), Y = po($.providesTags, V.data, void 0, _, {}, c);
    R(o.internalActions.updateProvidedBy([{
      queryCacheKey: L,
      providedTags: Y
    }]));
  };
  function m(N, _, k = 0) {
    const B = [_, ...N];
    return k && B.length > k ? B.slice(0, -1) : B;
  }
  function d(N, _, k = 0) {
    const B = [...N, _];
    return k && B.length > k ? B.slice(1) : B;
  }
  const x = (N, _, k, B = !0) => (R, P) => {
    const L = o.endpoints[N].select(_)(
      // Work around TS 4.1 mismatch
      P()
    ), V = {
      patches: [],
      inversePatches: [],
      undo: () => R(o.util.patchQueryData(N, _, V.inversePatches, B))
    };
    if (L.status === "uninitialized")
      return V;
    let Y;
    if ("data" in L)
      if (at(L.data)) {
        const [O, T, q] = s0(L.data, k);
        V.patches.push(...T), V.inversePatches.push(...q), Y = O;
      } else
        Y = k(L.data), V.patches.push({
          op: "replace",
          path: [],
          value: Y
        }), V.inversePatches.push({
          op: "replace",
          path: [],
          value: L.data
        });
    return V.patches.length === 0 || R(o.util.patchQueryData(N, _, V.patches, B)), V;
  }, p = (N, _, k) => (B) => B(o.endpoints[N].initiate(_, {
    subscribe: !1,
    forceRefetch: !0,
    [Er]: () => ({
      data: k
    })
  })), g = (N, _) => N.query && N[_] ? N[_] : jf, b = async (N, {
    signal: _,
    abort: k,
    rejectWithValue: B,
    fulfillWithValue: R,
    dispatch: P,
    getState: $,
    extra: L
  }) => {
    var T, q;
    const V = r[N.endpointName], {
      metaSchema: Y,
      skipSchemaValidation: O = a
    } = V;
    try {
      let I = g(V, "transformResponse");
      const G = {
        signal: _,
        abort: k,
        dispatch: P,
        getState: $,
        extra: L,
        endpoint: N.endpointName,
        type: N.type,
        forced: N.type === "query" ? C(N, $()) : void 0,
        queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
      }, ne = N.type === "query" ? N[Er] : void 0;
      let ue;
      const te = async (fe, K, re, le) => {
        if (K == null && fe.pages.length)
          return Promise.resolve({
            data: fe
          });
        const xe = {
          queryArg: N.originalArgs,
          pageParam: K
        }, Ce = await me(xe), ge = le ? m : d;
        return {
          data: {
            pages: ge(fe.pages, Ce.data, re),
            pageParams: ge(fe.pageParams, K, re)
          },
          meta: Ce.meta
        };
      };
      async function me(fe) {
        let K;
        const {
          extraOptions: re,
          argSchema: le,
          rawResponseSchema: xe,
          responseSchema: Ce
        } = V;
        if (le && !O && (fe = await Ot(
          le,
          fe,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ne ? K = ne() : V.query ? K = await t(V.query(fe), G, re) : K = await V.queryFn(fe, G, re, (Ae) => t(Ae, G, re)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const Ae = V.query ? "`baseQuery`" : "`queryFn`";
          let Q;
          if (!K)
            Q = `${Ae} did not return anything.`;
          else if (typeof K != "object")
            Q = `${Ae} did not return an object.`;
          else if (K.error && K.data)
            Q = `${Ae} returned an object containing both \`error\` and \`result\`.`;
          else if (K.error === void 0 && K.data === void 0)
            Q = `${Ae} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const ie of Object.keys(K))
              if (ie !== "error" && ie !== "data" && ie !== "meta") {
                Q = `The object returned by ${Ae} has the unknown property ${ie}.`;
                break;
              }
          Q && console.error(`Error encountered handling the endpoint ${N.endpointName}.
                  ${Q}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, K);
        }
        if (K.error) throw new aa(K.error, K.meta);
        let {
          data: ge
        } = K;
        xe && !O && (ge = await Ot(xe, K.data, "rawResponseSchema", K.meta));
        let je = await I(ge, K.meta, fe);
        return Ce && !O && (je = await Ot(Ce, je, "responseSchema", K.meta)), {
          ...K,
          data: je
        };
      }
      if (N.type === "query" && "infiniteQueryOptions" in V) {
        const {
          infiniteQueryOptions: fe
        } = V, {
          maxPages: K = 1 / 0
        } = fe;
        let re;
        const le = {
          pages: [],
          pageParams: []
        }, xe = (T = f.selectQueryEntry($(), N.queryCacheKey)) == null ? void 0 : T.data, ge = /* arg.forceRefetch */ C(N, $()) && !N.direction || !xe ? le : xe;
        if ("direction" in N && N.direction && ge.pages.length) {
          const je = N.direction === "backward", Q = (je ? b0 : Hs)(fe, ge, N.originalArgs);
          re = await te(ge, Q, K, je);
        } else {
          const {
            initialPageParam: je = fe.initialPageParam
          } = N, Ae = (xe == null ? void 0 : xe.pageParams) ?? [], Q = Ae[0] ?? je, ie = Ae.length;
          re = await te(ge, Q, K), ne && (re = {
            data: re.data.pages[0]
          });
          for (let oe = 1; oe < ie; oe++) {
            const ee = Hs(fe, re.data, N.originalArgs);
            re = await te(re.data, ee, K);
          }
        }
        ue = re;
      } else
        ue = await me(N.originalArgs);
      return Y && !O && ue.meta && (ue.meta = await Ot(Y, ue.meta, "metaSchema", ue.meta)), R(ue.data, ur({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: ue.meta
      }));
    } catch (I) {
      let G = I;
      if (G instanceof aa) {
        let ne = g(V, "transformErrorResponse");
        const {
          rawErrorResponseSchema: ue,
          errorResponseSchema: te
        } = V;
        let {
          value: me,
          meta: fe
        } = G;
        try {
          ue && !O && (me = await Ot(ue, me, "rawErrorResponseSchema", fe)), Y && !O && (fe = await Ot(Y, fe, "metaSchema", fe));
          let K = await ne(me, fe, N.originalArgs);
          return te && !O && (K = await Ot(te, K, "errorResponseSchema", fe)), B(K, ur({
            baseQueryMeta: fe
          }));
        } catch (K) {
          G = K;
        }
      }
      try {
        if (G instanceof v0) {
          const ne = {
            endpoint: N.endpointName,
            arg: N.originalArgs,
            type: N.type,
            queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
          };
          (q = V.onSchemaFailure) == null || q.call(V, G, ne), l == null || l(G, ne);
          const {
            catchSchemaFailure: ue = i
          } = V;
          if (ue)
            return B(ue(G, ne), ur({
              baseQueryMeta: G._bqMeta
            }));
        }
      } catch (ne) {
        G = ne;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${N.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, G) : console.error(G), G;
    }
  };
  function C(N, _) {
    const k = f.selectQueryEntry(_, N.queryCacheKey), B = f.selectConfig(_).refetchOnMountOrArgChange, R = k == null ? void 0 : k.fulfilledTimeStamp, P = N.forceRefetch ?? (N.subscribe && B);
    return P ? P === !0 || (Number(/* @__PURE__ */ new Date()) - Number(R)) / 1e3 >= P : !1;
  }
  const v = () => ea(`${e}/executeQuery`, b, {
    getPendingMeta({
      arg: _
    }) {
      const k = r[_.endpointName];
      return ur({
        startedTimeStamp: Date.now(),
        ...Br(k) ? {
          direction: _.direction
        } : {}
      });
    },
    condition(_, {
      getState: k
    }) {
      var O;
      const B = k(), R = f.selectQueryEntry(B, _.queryCacheKey), P = R == null ? void 0 : R.fulfilledTimeStamp, $ = _.originalArgs, L = R == null ? void 0 : R.originalArgs, V = r[_.endpointName], Y = _.direction;
      return $s(_) ? !0 : (R == null ? void 0 : R.status) === "pending" ? !1 : C(_, B) || bn(V) && ((O = V == null ? void 0 : V.forceRefetch) != null && O.call(V, {
        currentArg: $,
        previousArg: L,
        endpointState: R,
        state: B
      })) ? !0 : !(P && !Y);
    },
    dispatchConditionRejection: !0
  }), y = v(), h = v(), w = ea(`${e}/executeMutation`, b, {
    getPendingMeta() {
      return ur({
        startedTimeStamp: Date.now()
      });
    }
  }), j = (N) => "force" in N, A = (N) => "ifOlderThan" in N, S = (N, _, k) => (B, R) => {
    const P = j(k) && k.force, $ = A(k) && k.ifOlderThan, L = (Y = !0) => {
      const O = {
        forceRefetch: Y,
        isPrefetch: !0
      };
      return o.endpoints[N].initiate(_, O);
    }, V = o.endpoints[N].select(_)(R());
    if (P)
      B(L());
    else if ($) {
      const Y = V == null ? void 0 : V.fulfilledTimeStamp;
      if (!Y) {
        B(L());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(Y))) / 1e3 >= $ && B(L());
    } else
      B(L(!1));
  };
  function D(N) {
    return (_) => {
      var k, B;
      return ((B = (k = _ == null ? void 0 : _.meta) == null ? void 0 : k.arg) == null ? void 0 : B.endpointName) === N;
    };
  }
  function E(N, _) {
    return {
      matchPending: hr(uo(N), D(_)),
      matchFulfilled: hr(_t(N), D(_)),
      matchRejected: hr(tr(N), D(_))
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
function Hs(e, {
  pages: t,
  pageParams: r
}, s) {
  const o = t.length - 1;
  return e.getNextPageParam(t[o], t, r[o], r, s);
}
function b0(e, {
  pages: t,
  pageParams: r
}, s) {
  var o;
  return (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, t[0], t, r[0], r, s);
}
function w0(e, t, r, s) {
  return po(r[e.meta.arg.endpointName][t], _t(e) ? e.payload : void 0, vn(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, s);
}
function zr(e, t, r) {
  const s = e[t];
  s && r(s);
}
function jr(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function ia(e, t, r) {
  const s = e[jr(t)];
  s && r(s);
}
var $r = {};
function Nf({
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
  const u = nt(`${e}/resetApiState`);
  function m(D, E, N, _) {
    var k;
    D[k = E.queryCacheKey] ?? (D[k] = {
      status: "uninitialized",
      endpointName: E.endpointName
    }), zr(D, E.queryCacheKey, (B) => {
      B.status = "pending", B.requestId = N && B.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        B.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        _.requestId
      ), E.originalArgs !== void 0 && (B.originalArgs = E.originalArgs), B.startedTimeStamp = _.startedTimeStamp;
      const R = o[_.arg.endpointName];
      Br(R) && "direction" in E && (B.direction = E.direction);
    });
  }
  function d(D, E, N, _) {
    zr(D, E.arg.queryCacheKey, (k) => {
      if (k.requestId !== E.requestId && !_) return;
      const {
        merge: B
      } = o[E.arg.endpointName];
      if (k.status = "fulfilled", B)
        if (k.data !== void 0) {
          const {
            fulfilledTimeStamp: R,
            arg: P,
            baseQueryMeta: $,
            requestId: L
          } = E;
          let V = _r(k.data, (Y) => B(Y, N, {
            arg: P.originalArgs,
            baseQueryMeta: $,
            fulfilledTimeStamp: R,
            requestId: L
          }));
          k.data = V;
        } else
          k.data = N;
      else
        k.data = o[E.arg.endpointName].structuralSharing ?? !0 ? m0(ht(k.data) ? cd(k.data) : k.data, N) : N;
      delete k.error, k.fulfilledTimeStamp = E.fulfilledTimeStamp;
    });
  }
  const x = Qt({
    name: `${e}/queries`,
    initialState: $r,
    reducers: {
      removeQueryResult: {
        reducer(D, {
          payload: {
            queryCacheKey: E
          }
        }) {
          delete D[E];
        },
        prepare: lr()
      },
      cacheEntriesUpserted: {
        reducer(D, E) {
          for (const N of E.payload) {
            const {
              queryDescription: _,
              value: k
            } = N;
            m(D, _, !0, {
              arg: _,
              requestId: E.meta.requestId,
              startedTimeStamp: E.meta.timestamp
            }), d(
              D,
              {
                arg: _,
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
        prepare: (D) => ({
          payload: D.map((_) => {
            const {
              endpointName: k,
              arg: B,
              value: R
            } = _, P = o[k];
            return {
              queryDescription: {
                type: "query",
                endpointName: k,
                originalArgs: _.arg,
                queryCacheKey: s({
                  queryArgs: B,
                  endpointDefinition: P,
                  endpointName: k
                })
              },
              value: R
            };
          }),
          meta: {
            [gn]: !0,
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
          zr(D, E, (_) => {
            _.data = Uo(_.data, N.concat());
          });
        },
        prepare: lr()
      }
    },
    extraReducers(D) {
      D.addCase(t.pending, (E, {
        meta: N,
        meta: {
          arg: _
        }
      }) => {
        const k = $s(_);
        m(E, _, k, N);
      }).addCase(t.fulfilled, (E, {
        meta: N,
        payload: _
      }) => {
        const k = $s(N.arg);
        d(E, N, _, k);
      }).addCase(t.rejected, (E, {
        meta: {
          condition: N,
          arg: _,
          requestId: k
        },
        error: B,
        payload: R
      }) => {
        zr(E, _.queryCacheKey, (P) => {
          if (!N) {
            if (P.requestId !== k) return;
            P.status = "rejected", P.error = R ?? B;
          }
        });
      }).addMatcher(l, (E, N) => {
        const {
          queries: _
        } = f(N);
        for (const [k, B] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((B == null ? void 0 : B.status) === "fulfilled" || (B == null ? void 0 : B.status) === "rejected") && (E[k] = B);
      });
    }
  }), p = Qt({
    name: `${e}/mutations`,
    initialState: $r,
    reducers: {
      removeMutationResult: {
        reducer(D, {
          payload: E
        }) {
          const N = jr(E);
          N in D && delete D[N];
        },
        prepare: lr()
      }
    },
    extraReducers(D) {
      D.addCase(r.pending, (E, {
        meta: N,
        meta: {
          requestId: _,
          arg: k,
          startedTimeStamp: B
        }
      }) => {
        k.track && (E[jr(N)] = {
          requestId: _,
          status: "pending",
          endpointName: k.endpointName,
          startedTimeStamp: B
        });
      }).addCase(r.fulfilled, (E, {
        payload: N,
        meta: _
      }) => {
        _.arg.track && ia(E, _, (k) => {
          k.requestId === _.requestId && (k.status = "fulfilled", k.data = N, k.fulfilledTimeStamp = _.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (E, {
        payload: N,
        error: _,
        meta: k
      }) => {
        k.arg.track && ia(E, k, (B) => {
          B.requestId === k.requestId && (B.status = "rejected", B.error = N ?? _);
        });
      }).addMatcher(l, (E, N) => {
        const {
          mutations: _
        } = f(N);
        for (const [k, B] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((B == null ? void 0 : B.status) === "fulfilled" || (B == null ? void 0 : B.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          k !== (B == null ? void 0 : B.requestId) && (E[k] = B);
      });
    }
  }), g = {
    tags: {},
    keys: {}
  }, b = Qt({
    name: `${e}/invalidation`,
    initialState: g,
    reducers: {
      updateProvidedBy: {
        reducer(D, E) {
          var N, _, k;
          for (const {
            queryCacheKey: B,
            providedTags: R
          } of E.payload) {
            C(D, B);
            for (const {
              type: P,
              id: $
            } of R) {
              const L = (_ = (N = D.tags)[P] ?? (N[P] = {}))[k = $ || "__internal_without_id"] ?? (_[k] = []);
              L.includes(B) || L.push(B);
            }
            D.keys[B] = R;
          }
        },
        prepare: lr()
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
        var k, B, R;
        const {
          provided: _
        } = f(N);
        for (const [P, $] of Object.entries(_))
          for (const [L, V] of Object.entries($)) {
            const Y = (B = (k = E.tags)[P] ?? (k[P] = {}))[R = L || "__internal_without_id"] ?? (B[R] = []);
            for (const O of V)
              Y.includes(O) || Y.push(O);
          }
      }).addMatcher(Ct(_t(t), vn(t)), (E, N) => {
        v(E, [N]);
      }).addMatcher(x.actions.cacheEntriesUpserted.match, (E, N) => {
        const _ = N.payload.map(({
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
        v(E, _);
      });
    }
  });
  function C(D, E) {
    var _;
    const N = D.keys[E] ?? [];
    for (const k of N) {
      const B = k.type, R = k.id ?? "__internal_without_id", P = (_ = D.tags[B]) == null ? void 0 : _[R];
      P && (D.tags[B][R] = P.filter(($) => $ !== E));
    }
    delete D.keys[E];
  }
  function v(D, E) {
    const N = E.map((_) => {
      const k = w0(_, "providesTags", o, i), {
        queryCacheKey: B
      } = _.meta.arg;
      return {
        queryCacheKey: B,
        providedTags: k
      };
    });
    b.caseReducers.updateProvidedBy(D, b.actions.updateProvidedBy(N));
  }
  const y = Qt({
    name: `${e}/subscriptions`,
    initialState: $r,
    reducers: {
      updateSubscriptionOptions(D, E) {
      },
      unsubscribeQueryResult(D, E) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), h = Qt({
    name: `${e}/internalSubscriptions`,
    initialState: $r,
    reducers: {
      subscriptionsUpdated: {
        reducer(D, E) {
          return Uo(D, E.payload);
        },
        prepare: lr()
      }
    }
  }), w = Qt({
    name: `${e}/config`,
    initialState: {
      online: ff(),
      focused: df(),
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
      }).addCase(y0, (E) => {
        E.online = !1;
      }).addCase(xo, (E) => {
        E.focused = !0;
      }).addCase(g0, (E) => {
        E.focused = !1;
      }).addMatcher(l, (E) => ({
        ...E
      }));
    }
  }), j = Xi({
    queries: x.reducer,
    mutations: p.reducer,
    provided: b.reducer,
    subscriptions: h.reducer,
    config: w.reducer
  }), A = (D, E) => j(u.match(E) ? void 0 : D, E), S = {
    ...w.actions,
    ...x.actions,
    ...y.actions,
    ...h.actions,
    ...p.actions,
    ...b.actions,
    resetApiState: u
  };
  return {
    reducer: A,
    actions: S
  };
}
var rt = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), C0 = {
  status: "uninitialized"
  /* uninitialized */
}, ca = /* @__PURE__ */ _r(C0, () => {
}), la = /* @__PURE__ */ _r(C0, () => {
});
function Df({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const s = (y) => ca, o = (y) => la;
  return {
    buildQuerySelector: d,
    buildInfiniteQuerySelector: x,
    buildMutationSelector: p,
    selectInvalidatedBy: g,
    selectCachedArgsForQuery: b,
    selectApiState: f,
    selectQueries: l,
    selectMutations: a,
    selectQueryEntry: i,
    selectConfig: u
  };
  function c(y) {
    return {
      ...y,
      ...ta(y.status)
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
    return (j) => {
      if (j === rt)
        return r(s, w);
      const A = e({
        queryArgs: j,
        endpointDefinition: h,
        endpointName: y
      });
      return r((D) => i(D, A) ?? ca, w);
    };
  }
  function d(y, h) {
    return m(y, h, c);
  }
  function x(y, h) {
    const {
      infiniteQueryOptions: w
    } = h;
    function j(A) {
      const S = {
        ...A,
        ...ta(A.status)
      }, {
        isLoading: D,
        isError: E,
        direction: N
      } = S, _ = N === "forward", k = N === "backward";
      return {
        ...S,
        hasNextPage: C(w, S.data, S.originalArgs),
        hasPreviousPage: v(w, S.data, S.originalArgs),
        isFetchingNextPage: D && _,
        isFetchingPreviousPage: D && k,
        isFetchNextPageError: E && _,
        isFetchPreviousPageError: E && k
      };
    }
    return m(y, h, j);
  }
  function p() {
    return (y) => {
      let h;
      return typeof y == "object" ? h = jr(y) ?? rt : h = y, r(h === rt ? o : (A) => {
        var S, D;
        return ((D = (S = f(A)) == null ? void 0 : S.mutations) == null ? void 0 : D[h]) ?? la;
      }, c);
    };
  }
  function g(y, h) {
    const w = y[t], j = /* @__PURE__ */ new Set();
    for (const A of h.filter(sn).map(zs)) {
      const S = w.provided.tags[A.type];
      if (!S)
        continue;
      let D = (A.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        S[A.id]
      ) : (
        // no id: invalidate all queries that provide this type
        na(Object.values(S))
      )) ?? [];
      for (const E of D)
        j.add(E);
    }
    return na(Array.from(j.values()).map((A) => {
      const S = w.queries[A];
      return S ? [{
        queryCacheKey: A,
        endpointName: S.endpointName,
        originalArgs: S.originalArgs
      }] : [];
    }));
  }
  function b(y, h) {
    return Object.values(l(y)).filter(
      (w) => (w == null ? void 0 : w.endpointName) === h && w.status !== "uninitialized"
      /* uninitialized */
    ).map((w) => w.originalArgs);
  }
  function C(y, h, w) {
    return h ? Hs(y, h, w) != null : !1;
  }
  function v(y, h, w) {
    return !h || !y.getPreviousPageParam ? !1 : b0(y, h, w) != null;
  }
}
var Kt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, an = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const s = Kt == null ? void 0 : Kt.get(t);
  if (typeof s == "string")
    r = s;
  else {
    const o = JSON.stringify(t, (c, f) => (f = typeof f == "bigint" ? {
      $bigint: f.toString()
    } : f, f = xt(f) ? Object.keys(f).sort().reduce((l, i) => (l[i] = f[i], l), {}) : f, f));
    xt(t) && (Kt == null || Kt.set(t, o)), r = o;
  }
  return `${e}(${r})`;
};
function kf(...e) {
  return function(r) {
    const s = nn((a) => {
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
        let u = an;
        if ("serializeQueryArgs" in a.endpointDefinition) {
          const m = a.endpointDefinition.serializeQueryArgs;
          u = (d) => {
            const x = m(d);
            return typeof x == "string" ? x : an({
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
      hasRehydrationInfo: nn((a) => s(a) != null)
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
            throw new Error(process.env.NODE_ENV === "production" ? Ne(39) : `called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${m} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && Br(d)) {
          const {
            infiniteQueryOptions: x
          } = d, {
            maxPages: p,
            getPreviousPageParam: g
          } = x;
          if (typeof p == "number") {
            if (p < 1)
              throw new Error(process.env.NODE_ENV === "production" ? Ne(40) : `maxPages for endpoint '${m}' must be a number greater than 0`);
            if (typeof g != "function")
              throw new Error(process.env.NODE_ENV === "production" ? Ne(41) : `getPreviousPageParam for endpoint '${m}' must be a function if maxPages is used`);
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
function yt(e, ...t) {
  return Object.assign(e, ...t);
}
var _f = ({
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
    var b, C, v;
    if (f.match(p)) {
      const {
        queryCacheKey: y,
        requestId: h,
        options: w
      } = p.payload;
      return (b = x == null ? void 0 : x[y]) != null && b[h] && (x[y][h] = w), !0;
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
        const j = x[v = h.queryCacheKey] ?? (x[v] = {});
        j[w] = h.subscriptionOptions ?? j[w] ?? {}, g = !0;
      }
    }
    return g;
  }, a = () => r.currentSubscriptions, d = {
    getSubscriptions: a,
    getSubscriptionCount: (x) => {
      const g = a()[x] ?? {};
      return Xt(g);
    },
    isRequestSubscribed: (x, p) => {
      var b;
      const g = a();
      return !!((b = g == null ? void 0 : g[x]) != null && b[p]);
    }
  };
  return (x, p) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(x))
      return o = r.currentSubscriptions = {}, c = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(x))
      return [!1, d];
    const g = i(r.currentSubscriptions, x);
    let b = !0;
    if (g) {
      c || (c = setTimeout(() => {
        const y = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, h] = s0(o, () => y);
        p.next(e.internalActions.subscriptionsUpdated(h)), o = y, c = null;
      }, 500));
      const C = typeof x.type == "string" && !!x.type.startsWith(s), v = t.rejected.match(x) && x.meta.condition && !!x.meta.arg.subscribe;
      b = !C && !v;
    }
    return [b, !1];
  };
};
function Sf(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Bf = 2147483647 / 1e3 - 1, Ff = ({
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
  } = t.internalActions, u = Ct(i.match, r.fulfilled, r.rejected, a.match);
  function m(b) {
    const C = o.currentSubscriptions[b];
    return !!C && !Sf(C);
  }
  const d = {}, x = (b, C, v) => {
    const y = C.getState(), h = f(y);
    if (u(b)) {
      let w;
      if (a.match(b))
        w = b.payload.map((j) => j.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: j
        } = i.match(b) ? b.payload : b.meta.arg;
        w = [j];
      }
      p(w, C, h);
    }
    if (t.util.resetApiState.match(b))
      for (const [w, j] of Object.entries(d))
        j && clearTimeout(j), delete d[w];
    if (s.hasRehydrationInfo(b)) {
      const {
        queries: w
      } = s.extractRehydrationInfo(b);
      p(Object.keys(w), C, h);
    }
  };
  function p(b, C, v) {
    const y = C.getState();
    for (const h of b) {
      const w = c(y, h);
      g(h, w == null ? void 0 : w.endpointName, C, v);
    }
  }
  function g(b, C, v, y) {
    const h = s.endpointDefinitions[C], w = (h == null ? void 0 : h.keepUnusedDataFor) ?? y.keepUnusedDataFor;
    if (w === 1 / 0)
      return;
    const j = Math.max(0, Math.min(w, Bf));
    if (!m(b)) {
      const A = d[b];
      A && clearTimeout(A), d[b] = setTimeout(() => {
        m(b) || v.dispatch(l({
          queryCacheKey: b
        })), delete d[b];
      }, j * 1e3);
    }
  }
  return x;
}, ua = new Error("Promise never resolved before cacheEntryRemoved."), Rf = ({
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
  const i = Is(s), a = Is(o), u = _t(s, o), m = {};
  function d(C, v, y) {
    const h = m[C];
    h != null && h.valueResolved && (h.valueResolved({
      data: v,
      meta: y
    }), delete h.valueResolved);
  }
  function x(C) {
    const v = m[C];
    v && (delete m[C], v.cacheEntryRemoved());
  }
  const p = (C, v, y) => {
    const h = g(C);
    function w(j, A, S, D) {
      const E = f(y, A), N = f(v.getState(), A);
      !E && N && b(j, D, A, v, S);
    }
    if (s.pending.match(C))
      w(C.meta.arg.endpointName, h, C.meta.requestId, C.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(C))
      for (const {
        queryDescription: j,
        value: A
      } of C.payload) {
        const {
          endpointName: S,
          originalArgs: D,
          queryCacheKey: E
        } = j;
        w(S, E, C.meta.requestId, D), d(E, A, {});
      }
    else if (o.pending.match(C))
      v.getState()[t].mutations[h] && b(C.meta.arg.endpointName, C.meta.arg.originalArgs, h, v, C.meta.requestId);
    else if (u(C))
      d(h, C.payload, C.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(C) || e.internalActions.removeMutationResult.match(C))
      x(h);
    else if (e.util.resetApiState.match(C))
      for (const j of Object.keys(m))
        x(j);
  };
  function g(C) {
    return i(C) ? C.meta.arg.queryCacheKey : a(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : e.internalActions.removeQueryResult.match(C) ? C.payload.queryCacheKey : e.internalActions.removeMutationResult.match(C) ? jr(C.payload) : "";
  }
  function b(C, v, y, h, w) {
    const j = r.endpointDefinitions[C], A = j == null ? void 0 : j.onCacheEntryAdded;
    if (!A) return;
    const S = {}, D = new Promise((R) => {
      S.cacheEntryRemoved = R;
    }), E = Promise.race([new Promise((R) => {
      S.valueResolved = R;
    }), D.then(() => {
      throw ua;
    })]);
    E.catch(() => {
    }), m[y] = S;
    const N = e.endpoints[C].select(on(j) ? v : y), _ = h.dispatch((R, P, $) => $), k = {
      ...h,
      getCacheEntry: () => N(h.getState()),
      requestId: w,
      extra: _,
      updateCachedData: on(j) ? (R) => h.dispatch(e.util.updateQueryData(C, v, R)) : void 0,
      cacheDataLoaded: E,
      cacheEntryRemoved: D
    }, B = A(v, k);
    Promise.resolve(B).catch((R) => {
      if (R !== ua)
        throw R;
    });
  }
  return p;
}, Of = ({
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
}, Pf = ({
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
  } = c.internalActions, u = Ct(_t(s), vn(s)), m = Ct(_t(s, o), tr(s, o));
  let d = [];
  const x = (b, C) => {
    u(b) ? g(w0(b, "invalidatesTags", r, f), C) : m(b) ? g([], C) : c.util.invalidateTags.match(b) && g(po(b.payload, void 0, void 0, void 0, void 0, f), C);
  };
  function p(b) {
    var y;
    const {
      queries: C,
      mutations: v
    } = b;
    for (const h of [C, v])
      for (const w in h)
        if (((y = h[w]) == null ? void 0 : y.status) === "pending") return !0;
    return !1;
  }
  function g(b, C) {
    const v = C.getState(), y = v[e];
    if (d.push(...b), y.config.invalidationBehavior === "delayed" && p(y))
      return;
    const h = d;
    if (d = [], h.length === 0) return;
    const w = c.util.selectInvalidatedBy(v, h);
    t.batch(() => {
      const j = Array.from(w.values());
      for (const {
        queryCacheKey: A
      } of j) {
        const S = y.queries[A], D = i.currentSubscriptions[A] ?? {};
        S && (Xt(D) === 0 ? C.dispatch(a({
          queryCacheKey: A
        })) : S.status !== "uninitialized" && C.dispatch(l(S)));
      }
    });
  }
  return x;
}, Tf = ({
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
    const p = x.getState()[e], g = p.queries[d], b = o.currentSubscriptions[d];
    if (!g || g.status === "uninitialized") return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: v
    } = m(b);
    if (!Number.isFinite(C)) return;
    const y = c[d];
    y != null && y.timeout && (clearTimeout(y.timeout), y.timeout = void 0);
    const h = Date.now() + C;
    c[d] = {
      nextPollTimestamp: h,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (p.config.focused || !v) && x.dispatch(s(g)), l({
          queryCacheKey: d
        }, x);
      }, C)
    };
  }
  function i({
    queryCacheKey: d
  }, x) {
    const g = x.getState()[e].queries[d], b = o.currentSubscriptions[d];
    if (!g || g.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: C
    } = m(b);
    if (!Number.isFinite(C)) {
      a(d);
      return;
    }
    const v = c[d], y = Date.now() + C;
    (!v || y < v.nextPollTimestamp) && l({
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
}, Mf = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: s
}) => {
  const o = uo(r, s), c = tr(r, s), f = _t(r, s), l = {};
  return (a, u) => {
    var m, d;
    if (o(a)) {
      const {
        requestId: x,
        arg: {
          endpointName: p,
          originalArgs: g
        }
      } = a.meta, b = t.endpointDefinitions[p], C = b == null ? void 0 : b.onQueryStarted;
      if (C) {
        const v = {}, y = new Promise((A, S) => {
          v.resolve = A, v.reject = S;
        });
        y.catch(() => {
        }), l[x] = v;
        const h = e.endpoints[p].select(on(b) ? g : x), w = u.dispatch((A, S, D) => D), j = {
          ...u,
          getCacheEntry: () => h(u.getState()),
          requestId: x,
          extra: w,
          updateCachedData: on(b) ? (A) => u.dispatch(e.util.updateQueryData(p, g, A)) : void 0,
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
}, Lf = ({
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
        (Object.values(g).some((C) => C[a] === !0) || Object.values(g).every((C) => C[a] === void 0) && u.config[a]) && (Xt(g) === 0 ? i.dispatch(c({
          queryCacheKey: x
        })) : p.status !== "uninitialized" && i.dispatch(s(p)));
      }
    });
  }
  return f;
};
function If(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: s,
    context: o
  } = e, {
    apiUid: c
  } = o, f = {
    invalidateTags: nt(`${t}/invalidateTags`)
  }, l = (m) => m.type.startsWith(`${t}/`), i = [Of, Ff, Pf, Tf, Rf, Mf];
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
      }, g = i.map((v) => v(p)), b = _f(p), C = Lf(p);
      return (v) => (y) => {
        if (!oo(y))
          return v(y);
        d || (d = !0, m.dispatch(s.internalActions.middlewareRegistered(c)));
        const h = {
          ...m,
          next: v
        }, w = m.getState(), [j, A] = b(y, h, w);
        let S;
        if (j ? S = v(y) : S = A, m.getState()[t] && (C(y, h, w), l(y) || o.hasRehydrationInfo(y)))
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
var da = /* @__PURE__ */ Symbol(), zf = ({
  createSelector: e = lo
} = {}) => ({
  name: da,
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
    yd();
    const g = (G) => (typeof process < "u" && process.env.NODE_ENV === "development" && (s.includes(G.type) || console.error(`Tag type '${G.type}' was used, but not specified in \`tagTypes\`!`)), G);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: ho,
        onOffline: y0,
        onFocus: xo,
        onFocusLost: g0
      },
      util: {}
    });
    const b = Df({
      serializeQueryArgs: c,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: v,
      buildQuerySelector: y,
      buildInfiniteQuerySelector: h,
      buildMutationSelector: w
    } = b;
    yt(t.util, {
      selectInvalidatedBy: C,
      selectCachedArgsForQuery: v
    });
    const {
      queryThunk: j,
      infiniteQueryThunk: A,
      mutationThunk: S,
      patchQueryData: D,
      updateQueryData: E,
      upsertQueryData: N,
      prefetch: _,
      buildMatchThunkActions: k
    } = Af({
      baseQuery: r,
      reducerPath: o,
      context: p,
      api: t,
      serializeQueryArgs: c,
      assertTagType: g,
      selectors: b,
      onSchemaFailure: m,
      catchSchemaFailure: d,
      skipSchemaValidation: x
    }), {
      reducer: B,
      actions: R
    } = Nf({
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
    yt(t.util, {
      patchQueryData: D,
      updateQueryData: E,
      upsertQueryData: N,
      prefetch: _,
      resetApiState: R.resetApiState,
      upsertQueryEntries: R.cacheEntriesUpserted
    }), yt(t.internalActions, R);
    const {
      middleware: P,
      actions: $
    } = If({
      reducerPath: o,
      context: p,
      queryThunk: j,
      mutationThunk: S,
      infiniteQueryThunk: A,
      api: t,
      assertTagType: g,
      selectors: b
    });
    yt(t.util, $), yt(t, {
      reducer: B,
      middleware: P
    });
    const {
      buildInitiateQuery: L,
      buildInitiateInfiniteQuery: V,
      buildInitiateMutation: Y,
      getRunningMutationThunk: O,
      getRunningMutationsThunk: T,
      getRunningQueriesThunk: q,
      getRunningQueryThunk: I
    } = Ef({
      queryThunk: j,
      mutationThunk: S,
      infiniteQueryThunk: A,
      api: t,
      serializeQueryArgs: c,
      context: p
    });
    return yt(t.util, {
      getRunningMutationThunk: O,
      getRunningMutationsThunk: T,
      getRunningQueryThunk: I,
      getRunningQueriesThunk: q
    }), {
      name: da,
      injectEndpoint(G, ne) {
        var me;
        const te = (me = t.endpoints)[G] ?? (me[G] = {});
        bn(ne) && yt(te, {
          name: G,
          select: y(G, ne),
          initiate: L(G, ne)
        }, k(j, G)), bf(ne) && yt(te, {
          name: G,
          select: w(),
          initiate: Y(G)
        }, k(S, G)), Br(ne) && yt(te, {
          name: G,
          select: h(G, ne),
          initiate: V(G, ne)
        }, k(j, G));
      }
    };
  }
}), qs = { exports: {} }, On = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function $f() {
  if (fa) return On;
  fa = 1;
  var e = Zt;
  function t(i, a) {
    return i === a && (i !== 0 || 1 / i === 1 / a) || i !== i && a !== a;
  }
  var r = typeof Object.is == "function" ? Object.is : t, s = e.useSyncExternalStore, o = e.useRef, c = e.useEffect, f = e.useMemo, l = e.useDebugValue;
  return On.useSyncExternalStoreWithSelector = function(i, a, u, m, d) {
    var x = o(null);
    if (x.current === null) {
      var p = { hasValue: !1, value: null };
      x.current = p;
    } else p = x.current;
    x = f(
      function() {
        function b(w) {
          if (!C) {
            if (C = !0, v = w, w = m(w), d !== void 0 && p.hasValue) {
              var j = p.value;
              if (d(j, w))
                return y = j;
            }
            return y = w;
          }
          if (j = y, r(v, w)) return j;
          var A = m(w);
          return d !== void 0 && d(j, A) ? (v = w, j) : (v = w, y = A);
        }
        var C = !1, v, y, h = u === void 0 ? null : u;
        return [
          function() {
            return b(a());
          },
          h === null ? void 0 : function() {
            return b(h());
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
  }, On;
}
var Pn = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function Hf() {
  return xa || (xa = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i, a) {
      return i === a && (i !== 0 || 1 / i === 1 / a) || i !== i && a !== a;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Zt, r = typeof Object.is == "function" ? Object.is : e, s = t.useSyncExternalStore, o = t.useRef, c = t.useEffect, f = t.useMemo, l = t.useDebugValue;
    Pn.useSyncExternalStoreWithSelector = function(i, a, u, m, d) {
      var x = o(null);
      if (x.current === null) {
        var p = { hasValue: !1, value: null };
        x.current = p;
      } else p = x.current;
      x = f(
        function() {
          function b(w) {
            if (!C) {
              if (C = !0, v = w, w = m(w), d !== void 0 && p.hasValue) {
                var j = p.value;
                if (d(j, w))
                  return y = j;
              }
              return y = w;
            }
            if (j = y, r(v, w))
              return j;
            var A = m(w);
            return d !== void 0 && d(j, A) ? (v = w, j) : (v = w, y = A);
          }
          var C = !1, v, y, h = u === void 0 ? null : u;
          return [
            function() {
              return b(a());
            },
            h === null ? void 0 : function() {
              return b(h());
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
  }()), Pn;
}
process.env.NODE_ENV === "production" ? qs.exports = $f() : qs.exports = Hf();
var qf = qs.exports;
function Wf(e) {
  e();
}
function ha(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function pr(e, t) {
  if (ha(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (let o = 0; o < r.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !ha(e[r[o]], t[r[o]]))
      return !1;
  return !0;
}
var Tn = /* @__PURE__ */ Symbol.for("react-redux-context"), Mn = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Vf() {
  if (!H.createContext) return {};
  const e = Mn[Tn] ?? (Mn[Tn] = /* @__PURE__ */ new Map());
  let t = e.get(H.createContext);
  return t || (t = H.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(H.createContext, t)), t;
}
var $t = /* @__PURE__ */ Vf();
function mo(e = $t) {
  return function() {
    const r = H.useContext(e);
    if (process.env.NODE_ENV !== "production" && !r)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return r;
  };
}
var E0 = /* @__PURE__ */ mo();
function j0(e = $t) {
  const t = e === $t ? E0 : (
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
var A0 = /* @__PURE__ */ j0();
function Uf(e = $t) {
  const t = e === $t ? A0 : j0(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Qf = /* @__PURE__ */ Uf(), Kf = (e, t) => e === t;
function Gf(e = $t) {
  const t = e === $t ? E0 : mo(e), r = (s, o = {}) => {
    const { equalityFn: c = Kf } = typeof o == "function" ? { equalityFn: o } : o;
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
    const f = t(), { store: l, subscription: i, getServerState: a } = f, u = H.useRef(!0), m = H.useCallback(
      {
        [s.name](x) {
          const p = s(x);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: g = {} } = typeof o == "function" ? {} : o, { identityFunctionCheck: b, stabilityCheck: C } = f, {
              identityFunctionCheck: v,
              stabilityCheck: y
            } = {
              stabilityCheck: C,
              identityFunctionCheck: b,
              ...g
            };
            if (y === "always" || y === "once" && u.current) {
              const h = s(x);
              if (!c(p, h)) {
                let w;
                try {
                  throw new Error();
                } catch (j) {
                  ({ stack: w } = j);
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
            if ((v === "always" || v === "once" && u.current) && p === x) {
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
    ), d = qf.useSyncExternalStoreWithSelector(
      i.addNestedSub,
      l.getState,
      a || l.getState,
      m,
      c
    );
    return H.useDebugValue(d), d;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Yf = /* @__PURE__ */ Gf(), Xf = Wf;
function Hr(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Zf(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
function Jf(e) {
  return e.type === "query";
}
function ex(e) {
  return e.type === "mutation";
}
function N0(e) {
  return e.type === "infinitequery";
}
function dr(e, ...t) {
  return Object.assign(e, ...t);
}
var Ln = Symbol();
function In(e, t, r, s) {
  const o = Me(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: s
    }) : e
  }), [e, t, r, s]), c = _e(o);
  return be(() => {
    c.current.serialized !== o.serialized && (c.current = o);
  }, [o]), c.current.serialized === o.serialized ? c.current.queryArgs : e;
}
function qr(e) {
  const t = _e(e);
  return be(() => {
    pr(t.current, e) || (t.current = e);
  }, [e]), pr(t.current, e) ? t.current : e;
}
var tx = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rx = /* @__PURE__ */ tx(), nx = () => typeof navigator < "u" && navigator.product === "ReactNative", sx = /* @__PURE__ */ nx(), ox = () => rx || sx ? Za : be, ax = /* @__PURE__ */ ox(), pa = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: p0.pending
} : e;
function zn(e, ...t) {
  const r = {};
  return t.forEach((s) => {
    r[s] = e[s];
  }), r;
}
var $n = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function ix({
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
  const a = c ? (h) => h() : be;
  return {
    buildQueryHooks: C,
    buildInfiniteQueryHooks: v,
    buildMutationHook: y,
    usePrefetch: d
  };
  function u(h, w, j) {
    if (w != null && w.endpointName && h.isUninitialized) {
      const {
        endpointName: _
      } = w, k = i.endpointDefinitions[_];
      j !== rt && l({
        queryArgs: w.originalArgs,
        endpointDefinition: k,
        endpointName: _
      }) === l({
        queryArgs: j,
        endpointDefinition: k,
        endpointName: _
      }) && (w = void 0);
    }
    let A = h.isSuccess ? h.data : w == null ? void 0 : w.data;
    A === void 0 && (A = h.data);
    const S = A !== void 0, D = h.isLoading, E = (!w || w.isLoading || w.isUninitialized) && !S && D, N = h.isSuccess || S && (D && !(w != null && w.isError) || h.isUninitialized);
    return {
      ...h,
      data: A,
      currentData: h.data,
      isFetching: D,
      isLoading: E,
      isSuccess: N
    };
  }
  function m(h, w, j) {
    if (w != null && w.endpointName && h.isUninitialized) {
      const {
        endpointName: _
      } = w, k = i.endpointDefinitions[_];
      j !== rt && l({
        queryArgs: w.originalArgs,
        endpointDefinition: k,
        endpointName: _
      }) === l({
        queryArgs: j,
        endpointDefinition: k,
        endpointName: _
      }) && (w = void 0);
    }
    let A = h.isSuccess ? h.data : w == null ? void 0 : w.data;
    A === void 0 && (A = h.data);
    const S = A !== void 0, D = h.isLoading, E = (!w || w.isLoading || w.isUninitialized) && !S && D, N = h.isSuccess || D && S;
    return {
      ...h,
      data: A,
      currentData: h.data,
      isFetching: D,
      isLoading: E,
      isSuccess: N
    };
  }
  function d(h, w) {
    const j = r(), A = qr(w);
    return lt((S, D) => j(e.util.prefetch(h, S, {
      ...A,
      ...D
    })), [h, j, A]);
  }
  function x(h, w, {
    refetchOnReconnect: j,
    refetchOnFocus: A,
    refetchOnMountOrArgChange: S,
    skip: D = !1,
    pollingInterval: E = 0,
    skipPollingIfUnfocused: N = !1,
    ..._
  } = {}) {
    const {
      initiate: k
    } = e.endpoints[h], B = r(), R = _e(void 0);
    if (!R.current) {
      const G = B(e.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof G != "object" || typeof (G == null ? void 0 : G.type) == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? Ne(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      R.current = G;
    }
    const P = In(
      D ? rt : w,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      an,
      i.endpointDefinitions[h],
      h
    ), $ = qr({
      refetchOnReconnect: j,
      refetchOnFocus: A,
      pollingInterval: E,
      skipPollingIfUnfocused: N
    }), L = _.initialPageParam, V = qr(L), Y = _e(void 0);
    let {
      queryCacheKey: O,
      requestId: T
    } = Y.current || {}, q = !1;
    O && T && (q = R.current.isRequestSubscribed(O, T));
    const I = !q && Y.current !== void 0;
    return a(() => {
      I && (Y.current = void 0);
    }, [I]), a(() => {
      var ue;
      const G = Y.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(I), P === rt) {
        G == null || G.unsubscribe(), Y.current = void 0;
        return;
      }
      const ne = (ue = Y.current) == null ? void 0 : ue.subscriptionOptions;
      if (!G || G.arg !== P) {
        G == null || G.unsubscribe();
        const te = B(k(P, {
          subscriptionOptions: $,
          forceRefetch: S,
          ...N0(i.endpointDefinitions[h]) ? {
            initialPageParam: V
          } : {}
        }));
        Y.current = te;
      } else $ !== ne && G.updateSubscriptionOptions($);
    }, [B, k, S, P, $, I, V, h]), [Y, B, k, $];
  }
  function p(h, w) {
    return (A, {
      skip: S = !1,
      selectFromResult: D
    } = {}) => {
      const {
        select: E
      } = e.endpoints[h], N = In(S ? rt : A, l, i.endpointDefinitions[h], h), _ = _e(void 0), k = Me(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        f([
          // @ts-ignore
          E(N),
          (L, V) => V,
          (L) => N
        ], w, {
          memoizeOptions: {
            resultEqualityCheck: pr
          }
        })
      ), [E, N]), B = Me(() => D ? f([k], D, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : k, [k, D]), R = s((L) => B(L, _.current), pr), P = o(), $ = k(P.getState(), _.current);
      return ax(() => {
        _.current = $;
      }, [$]), R;
    };
  }
  function g(h) {
    be(() => () => {
      var w, j;
      (j = (w = h.current) == null ? void 0 : w.unsubscribe) == null || j.call(w), h.current = void 0;
    }, [h]);
  }
  function b(h) {
    if (!h.current) throw new Error(process.env.NODE_ENV === "production" ? Ne(38) : "Cannot refetch a query that has not been started yet.");
    return h.current.refetch();
  }
  function C(h) {
    const w = (S, D = {}) => {
      const [E] = x(h, S, D);
      return g(E), Me(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => b(E)
      }), [E]);
    }, j = ({
      refetchOnReconnect: S,
      refetchOnFocus: D,
      pollingInterval: E = 0,
      skipPollingIfUnfocused: N = !1
    } = {}) => {
      const {
        initiate: _
      } = e.endpoints[h], k = r(), [B, R] = J(Ln), P = _e(void 0), $ = qr({
        refetchOnReconnect: S,
        refetchOnFocus: D,
        pollingInterval: E,
        skipPollingIfUnfocused: N
      });
      a(() => {
        var T, q;
        const O = (T = P.current) == null ? void 0 : T.subscriptionOptions;
        $ !== O && ((q = P.current) == null || q.updateSubscriptionOptions($));
      }, [$]);
      const L = _e($);
      a(() => {
        L.current = $;
      }, [$]);
      const V = lt(function(O, T = !1) {
        let q;
        return t(() => {
          var I;
          (I = P.current) == null || I.unsubscribe(), P.current = q = k(_(O, {
            subscriptionOptions: L.current,
            forceRefetch: !T
          })), R(O);
        }), q;
      }, [k, _]), Y = lt(() => {
        var O, T;
        (O = P.current) != null && O.queryCacheKey && k(e.internalActions.removeQueryResult({
          queryCacheKey: (T = P.current) == null ? void 0 : T.queryCacheKey
        }));
      }, [k]);
      return be(() => () => {
        var O;
        (O = P == null ? void 0 : P.current) == null || O.unsubscribe();
      }, []), be(() => {
        B !== Ln && !P.current && V(B, !0);
      }, [B, V]), Me(() => [V, B, {
        reset: Y
      }], [V, B, Y]);
    }, A = p(h, u);
    return {
      useQueryState: A,
      useQuerySubscription: w,
      useLazyQuerySubscription: j,
      useLazyQuery(S) {
        const [D, E, {
          reset: N
        }] = j(S), _ = A(E, {
          ...S,
          skip: E === Ln
        }), k = Me(() => ({
          lastArg: E
        }), [E]);
        return Me(() => [D, {
          ..._,
          reset: N
        }, k], [D, _, N, k]);
      },
      useQuery(S, D) {
        const E = w(S, D), N = A(S, {
          selectFromResult: S === rt || D != null && D.skip ? void 0 : pa,
          ...D
        }), _ = zn(N, ...$n);
        return jn(_), Me(() => ({
          ...N,
          ...E
        }), [N, E]);
      }
    };
  }
  function v(h) {
    const w = (A, S = {}) => {
      const [D, E, N, _] = x(h, A, S), k = _e(_);
      a(() => {
        k.current = _;
      }, [_]);
      const B = lt(function($, L) {
        let V;
        return t(() => {
          var Y;
          (Y = D.current) == null || Y.unsubscribe(), D.current = V = E(N($, {
            subscriptionOptions: k.current,
            direction: L
          }));
        }), V;
      }, [D, E, N]);
      g(D);
      const R = In(
        S.skip ? rt : A,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        an,
        i.endpointDefinitions[h],
        h
      ), P = lt(() => b(D), [D]);
      return Me(() => ({
        trigger: B,
        /**
         * A method to manually refetch data for the query
         */
        refetch: P,
        fetchNextPage: () => B(R, "forward"),
        fetchPreviousPage: () => B(R, "backward")
      }), [P, B, R]);
    }, j = p(h, m);
    return {
      useInfiniteQueryState: j,
      useInfiniteQuerySubscription: w,
      useInfiniteQuery(A, S) {
        const {
          refetch: D,
          fetchNextPage: E,
          fetchPreviousPage: N
        } = w(A, S), _ = j(A, {
          selectFromResult: A === rt || S != null && S.skip ? void 0 : pa,
          ...S
        }), k = zn(_, ...$n, "hasNextPage", "hasPreviousPage");
        return jn(k), Me(() => ({
          ..._,
          fetchNextPage: E,
          fetchPreviousPage: N,
          refetch: D
        }), [_, E, N, D]);
      }
    };
  }
  function y(h) {
    return ({
      selectFromResult: w,
      fixedCacheKey: j
    } = {}) => {
      const {
        select: A,
        initiate: S
      } = e.endpoints[h], D = r(), [E, N] = J();
      be(() => () => {
        E != null && E.arg.fixedCacheKey || E == null || E.reset();
      }, [E]);
      const _ = lt(function(O) {
        const T = D(S(O, {
          fixedCacheKey: j
        }));
        return N(T), T;
      }, [D, S, j]), {
        requestId: k
      } = E || {}, B = Me(() => A({
        fixedCacheKey: j,
        requestId: E == null ? void 0 : E.requestId
      }), [j, E, A]), R = Me(() => w ? f([B], w) : B, [w, B]), P = s(R, pr), $ = j == null ? E == null ? void 0 : E.arg.originalArgs : void 0, L = lt(() => {
        t(() => {
          E && N(void 0), j && D(e.internalActions.removeMutationResult({
            requestId: k,
            fixedCacheKey: j
          }));
        });
      }, [D, j, E, k]), V = zn(P, ...$n, "endpointName");
      jn(V);
      const Y = Me(() => ({
        ...P,
        originalArgs: $,
        reset: L
      }), [P, $, L]);
      return Me(() => [_, Y], [_, Y]);
    };
  }
}
var cx = /* @__PURE__ */ Symbol(), lx = ({
  batch: e = Xf,
  hooks: t = {
    useDispatch: Qf,
    useSelector: Yf,
    useStore: A0
  },
  createSelector: r = lo,
  unstable__sideEffectsInRender: s = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const c = ["useDispatch", "useSelector", "useStore"];
    let f = !1;
    for (const l of c)
      if (Zf(o) > 0 && (o[l] && (f || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), f = !0)), t[l] = o[l]), typeof t[l] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? Ne(36) : `When using custom hooks for context, all ${c.length} hooks need to be provided: ${c.join(", ")}.
Hook ${l} was either not provided or not a function.`);
  }
  return {
    name: cx,
    init(c, {
      serializeQueryArgs: f
    }, l) {
      const i = c, {
        buildQueryHooks: a,
        buildInfiniteQueryHooks: u,
        buildMutationHook: m,
        usePrefetch: d
      } = ix({
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
      return dr(i, {
        usePrefetch: d
      }), dr(l, {
        batch: e
      }), {
        injectEndpoint(x, p) {
          if (Jf(p)) {
            const {
              useQuery: g,
              useLazyQuery: b,
              useLazyQuerySubscription: C,
              useQueryState: v,
              useQuerySubscription: y
            } = a(x);
            dr(i.endpoints[x], {
              useQuery: g,
              useLazyQuery: b,
              useLazyQuerySubscription: C,
              useQueryState: v,
              useQuerySubscription: y
            }), c[`use${Hr(x)}Query`] = g, c[`useLazy${Hr(x)}Query`] = b;
          }
          if (ex(p)) {
            const g = m(x);
            dr(i.endpoints[x], {
              useMutation: g
            }), c[`use${Hr(x)}Mutation`] = g;
          } else if (N0(p)) {
            const {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: b,
              useInfiniteQueryState: C
            } = u(x);
            dr(i.endpoints[x], {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: b,
              useInfiniteQueryState: C
            }), c[`use${Hr(x)}InfiniteQuery`] = g;
          }
        }
      };
    }
  };
}, ux = /* @__PURE__ */ kf(zf(), lx()), D0 = { exports: {} };
function dx(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Hn = { exports: {} };
const fx = {}, xx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fx
}, Symbol.toStringTag, { value: "Module" })), hx = /* @__PURE__ */ z0(xx);
var ma;
function we() {
  return ma || (ma = 1, function(e, t) {
    (function(r, s) {
      e.exports = s();
    })(pe, function() {
      var r = r || function(s, o) {
        var c;
        if (typeof window < "u" && window.crypto && (c = window.crypto), typeof self < "u" && self.crypto && (c = self.crypto), typeof globalThis < "u" && globalThis.crypto && (c = globalThis.crypto), !c && typeof window < "u" && window.msCrypto && (c = window.msCrypto), !c && typeof pe < "u" && pe.crypto && (c = pe.crypto), !c && typeof dx == "function")
          try {
            c = hx;
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
          function v() {
          }
          return function(y) {
            var h;
            return v.prototype = y, h = new v(), v.prototype = null, h;
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
            extend: function(v) {
              var y = l(this);
              return v && y.mixIn(v), (!y.hasOwnProperty("init") || this.init === y.init) && (y.init = function() {
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
              var v = this.extend();
              return v.init.apply(v, arguments), v;
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
            mixIn: function(v) {
              for (var y in v)
                v.hasOwnProperty(y) && (this[y] = v[y]);
              v.hasOwnProperty("toString") && (this.toString = v.toString);
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
          init: function(v, y) {
            v = this.words = v || [], y != o ? this.sigBytes = y : this.sigBytes = v.length * 4;
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
          toString: function(v) {
            return (v || x).stringify(this);
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
          concat: function(v) {
            var y = this.words, h = v.words, w = this.sigBytes, j = v.sigBytes;
            if (this.clamp(), w % 4)
              for (var A = 0; A < j; A++) {
                var S = h[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                y[w + A >>> 2] |= S << 24 - (w + A) % 4 * 8;
              }
            else
              for (var D = 0; D < j; D += 4)
                y[w + D >>> 2] = h[D >>> 2];
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
            var v = this.words, y = this.sigBytes;
            v[y >>> 2] &= 4294967295 << 32 - y % 4 * 8, v.length = s.ceil(y / 4);
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
            var v = u.clone.call(this);
            return v.words = this.words.slice(0), v;
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
          random: function(v) {
            for (var y = [], h = 0; h < v; h += 4)
              y.push(f());
            return new m.init(y, v);
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
          stringify: function(v) {
            for (var y = v.words, h = v.sigBytes, w = [], j = 0; j < h; j++) {
              var A = y[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              w.push((A >>> 4).toString(16)), w.push((A & 15).toString(16));
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
          parse: function(v) {
            for (var y = v.length, h = [], w = 0; w < y; w += 2)
              h[w >>> 3] |= parseInt(v.substr(w, 2), 16) << 24 - w % 8 * 4;
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
          stringify: function(v) {
            for (var y = v.words, h = v.sigBytes, w = [], j = 0; j < h; j++) {
              var A = y[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              w.push(String.fromCharCode(A));
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
          parse: function(v) {
            for (var y = v.length, h = [], w = 0; w < y; w++)
              h[w >>> 2] |= (v.charCodeAt(w) & 255) << 24 - w % 4 * 8;
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
          stringify: function(v) {
            try {
              return decodeURIComponent(escape(p.stringify(v)));
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
          parse: function(v) {
            return p.parse(unescape(encodeURIComponent(v)));
          }
        }, b = a.BufferedBlockAlgorithm = u.extend({
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
          _append: function(v) {
            typeof v == "string" && (v = g.parse(v)), this._data.concat(v), this._nDataBytes += v.sigBytes;
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
          _process: function(v) {
            var y, h = this._data, w = h.words, j = h.sigBytes, A = this.blockSize, S = A * 4, D = j / S;
            v ? D = s.ceil(D) : D = s.max((D | 0) - this._minBufferSize, 0);
            var E = D * A, N = s.min(E * 4, j);
            if (E) {
              for (var _ = 0; _ < E; _ += A)
                this._doProcessBlock(w, _);
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
            var v = u.clone.call(this);
            return v._data = this._data.clone(), v;
          },
          _minBufferSize: 0
        });
        a.Hasher = b.extend({
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
          init: function(v) {
            this.cfg = this.cfg.extend(v), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            b.reset.call(this), this._doReset();
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
          update: function(v) {
            return this._append(v), this._process(), this;
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
          finalize: function(v) {
            v && this._append(v);
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
          _createHelper: function(v) {
            return function(y, h) {
              return new v.init(h).finalize(y);
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
          _createHmacHelper: function(v) {
            return function(y, h) {
              return new C.HMAC.init(v, h).finalize(y);
            };
          }
        });
        var C = i.algo = {};
        return i;
      }(Math);
      return r;
    });
  }(Hn)), Hn.exports;
}
var qn = { exports: {} }, ga;
function wn() {
  return ga || (ga = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
  }(qn)), qn.exports;
}
var Wn = { exports: {} }, ya;
function px() {
  return ya || (ya = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
  }(Wn)), Wn.exports;
}
var Vn = { exports: {} }, va;
function mx() {
  return va || (va = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
  }(Vn)), Vn.exports;
}
var Un = { exports: {} }, ba;
function qt() {
  return ba || (ba = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
              for (var p = a[x >>> 2] >>> 24 - x % 4 * 8 & 255, g = a[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255, b = a[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, C = p << 16 | g << 8 | b, v = 0; v < 4 && x + v * 0.75 < u; v++)
                d.push(m.charAt(C >>> 6 * (3 - v) & 63));
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
              var p = u[i.charCodeAt(x - 1)] << x % 4 * 2, g = u[i.charCodeAt(x)] >>> 6 - x % 4 * 2, b = p | g;
              m[d >>> 2] |= b << 24 - d % 4 * 8, d++;
            }
          return c.create(m, d);
        }
      }(), r.enc.Base64;
    });
  }(Un)), Un.exports;
}
var Qn = { exports: {} }, wa;
function gx() {
  return wa || (wa = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
              for (var g = u[p >>> 2] >>> 24 - p % 4 * 8 & 255, b = u[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, C = u[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, v = g << 16 | b << 8 | C, y = 0; y < 4 && p + y * 0.75 < m; y++)
                x.push(d.charAt(v >>> 6 * (3 - y) & 63));
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
              var p = u[i.charCodeAt(x - 1)] << x % 4 * 2, g = u[i.charCodeAt(x)] >>> 6 - x % 4 * 2, b = p | g;
              m[d >>> 2] |= b << 24 - d % 4 * 8, d++;
            }
          return c.create(m, d);
        }
      }(), r.enc.Base64url;
    });
  }(Qn)), Qn.exports;
}
var Kn = { exports: {} }, Ca;
function Wt() {
  return Ca || (Ca = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
          _doProcessBlock: function(g, b) {
            for (var C = 0; C < 16; C++) {
              var v = b + C, y = g[v];
              g[v] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360;
            }
            var h = this._hash.words, w = g[b + 0], j = g[b + 1], A = g[b + 2], S = g[b + 3], D = g[b + 4], E = g[b + 5], N = g[b + 6], _ = g[b + 7], k = g[b + 8], B = g[b + 9], R = g[b + 10], P = g[b + 11], $ = g[b + 12], L = g[b + 13], V = g[b + 14], Y = g[b + 15], O = h[0], T = h[1], q = h[2], I = h[3];
            O = m(O, T, q, I, w, 7, a[0]), I = m(I, O, T, q, j, 12, a[1]), q = m(q, I, O, T, A, 17, a[2]), T = m(T, q, I, O, S, 22, a[3]), O = m(O, T, q, I, D, 7, a[4]), I = m(I, O, T, q, E, 12, a[5]), q = m(q, I, O, T, N, 17, a[6]), T = m(T, q, I, O, _, 22, a[7]), O = m(O, T, q, I, k, 7, a[8]), I = m(I, O, T, q, B, 12, a[9]), q = m(q, I, O, T, R, 17, a[10]), T = m(T, q, I, O, P, 22, a[11]), O = m(O, T, q, I, $, 7, a[12]), I = m(I, O, T, q, L, 12, a[13]), q = m(q, I, O, T, V, 17, a[14]), T = m(T, q, I, O, Y, 22, a[15]), O = d(O, T, q, I, j, 5, a[16]), I = d(I, O, T, q, N, 9, a[17]), q = d(q, I, O, T, P, 14, a[18]), T = d(T, q, I, O, w, 20, a[19]), O = d(O, T, q, I, E, 5, a[20]), I = d(I, O, T, q, R, 9, a[21]), q = d(q, I, O, T, Y, 14, a[22]), T = d(T, q, I, O, D, 20, a[23]), O = d(O, T, q, I, B, 5, a[24]), I = d(I, O, T, q, V, 9, a[25]), q = d(q, I, O, T, S, 14, a[26]), T = d(T, q, I, O, k, 20, a[27]), O = d(O, T, q, I, L, 5, a[28]), I = d(I, O, T, q, A, 9, a[29]), q = d(q, I, O, T, _, 14, a[30]), T = d(T, q, I, O, $, 20, a[31]), O = x(O, T, q, I, E, 4, a[32]), I = x(I, O, T, q, k, 11, a[33]), q = x(q, I, O, T, P, 16, a[34]), T = x(T, q, I, O, V, 23, a[35]), O = x(O, T, q, I, j, 4, a[36]), I = x(I, O, T, q, D, 11, a[37]), q = x(q, I, O, T, _, 16, a[38]), T = x(T, q, I, O, R, 23, a[39]), O = x(O, T, q, I, L, 4, a[40]), I = x(I, O, T, q, w, 11, a[41]), q = x(q, I, O, T, S, 16, a[42]), T = x(T, q, I, O, N, 23, a[43]), O = x(O, T, q, I, B, 4, a[44]), I = x(I, O, T, q, $, 11, a[45]), q = x(q, I, O, T, Y, 16, a[46]), T = x(T, q, I, O, A, 23, a[47]), O = p(O, T, q, I, w, 6, a[48]), I = p(I, O, T, q, _, 10, a[49]), q = p(q, I, O, T, V, 15, a[50]), T = p(T, q, I, O, E, 21, a[51]), O = p(O, T, q, I, $, 6, a[52]), I = p(I, O, T, q, S, 10, a[53]), q = p(q, I, O, T, R, 15, a[54]), T = p(T, q, I, O, j, 21, a[55]), O = p(O, T, q, I, k, 6, a[56]), I = p(I, O, T, q, Y, 10, a[57]), q = p(q, I, O, T, N, 15, a[58]), T = p(T, q, I, O, L, 21, a[59]), O = p(O, T, q, I, D, 6, a[60]), I = p(I, O, T, q, P, 10, a[61]), q = p(q, I, O, T, A, 15, a[62]), T = p(T, q, I, O, B, 21, a[63]), h[0] = h[0] + O | 0, h[1] = h[1] + T | 0, h[2] = h[2] + q | 0, h[3] = h[3] + I | 0;
          },
          _doFinalize: function() {
            var g = this._data, b = g.words, C = this._nDataBytes * 8, v = g.sigBytes * 8;
            b[v >>> 5] |= 128 << 24 - v % 32;
            var y = s.floor(C / 4294967296), h = C;
            b[(v + 64 >>> 9 << 4) + 15] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, b[(v + 64 >>> 9 << 4) + 14] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, g.sigBytes = (b.length + 1) * 4, this._process();
            for (var w = this._hash, j = w.words, A = 0; A < 4; A++) {
              var S = j[A];
              j[A] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            return w;
          },
          clone: function() {
            var g = l.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        function m(g, b, C, v, y, h, w) {
          var j = g + (b & C | ~b & v) + y + w;
          return (j << h | j >>> 32 - h) + b;
        }
        function d(g, b, C, v, y, h, w) {
          var j = g + (b & v | C & ~v) + y + w;
          return (j << h | j >>> 32 - h) + b;
        }
        function x(g, b, C, v, y, h, w) {
          var j = g + (b ^ C ^ v) + y + w;
          return (j << h | j >>> 32 - h) + b;
        }
        function p(g, b, C, v, y, h, w) {
          var j = g + (C ^ (b | ~v)) + y + w;
          return (j << h | j >>> 32 - h) + b;
        }
        o.MD5 = l._createHelper(u), o.HmacMD5 = l._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(Kn)), Kn.exports;
}
var Gn = { exports: {} }, Ea;
function k0() {
  return Ea || (Ea = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
            for (var d = this._hash.words, x = d[0], p = d[1], g = d[2], b = d[3], C = d[4], v = 0; v < 80; v++) {
              if (v < 16)
                i[v] = u[m + v] | 0;
              else {
                var y = i[v - 3] ^ i[v - 8] ^ i[v - 14] ^ i[v - 16];
                i[v] = y << 1 | y >>> 31;
              }
              var h = (x << 5 | x >>> 27) + C + i[v];
              v < 20 ? h += (p & g | ~p & b) + 1518500249 : v < 40 ? h += (p ^ g ^ b) + 1859775393 : v < 60 ? h += (p & g | p & b | g & b) - 1894007588 : h += (p ^ g ^ b) - 899497514, C = b, b = g, g = p << 30 | p >>> 2, p = x, x = h;
            }
            d[0] = d[0] + x | 0, d[1] = d[1] + p | 0, d[2] = d[2] + g | 0, d[3] = d[3] + b | 0, d[4] = d[4] + C | 0;
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
  }(Gn)), Gn.exports;
}
var Yn = { exports: {} }, ja;
function go() {
  return ja || (ja = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
      return function(s) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.algo, a = [], u = [];
        (function() {
          function x(C) {
            for (var v = s.sqrt(C), y = 2; y <= v; y++)
              if (!(C % y))
                return !1;
            return !0;
          }
          function p(C) {
            return (C - (C | 0)) * 4294967296 | 0;
          }
          for (var g = 2, b = 0; b < 64; )
            x(g) && (b < 8 && (a[b] = p(s.pow(g, 1 / 2))), u[b] = p(s.pow(g, 1 / 3)), b++), g++;
        })();
        var m = [], d = i.SHA256 = l.extend({
          _doReset: function() {
            this._hash = new f.init(a.slice(0));
          },
          _doProcessBlock: function(x, p) {
            for (var g = this._hash.words, b = g[0], C = g[1], v = g[2], y = g[3], h = g[4], w = g[5], j = g[6], A = g[7], S = 0; S < 64; S++) {
              if (S < 16)
                m[S] = x[p + S] | 0;
              else {
                var D = m[S - 15], E = (D << 25 | D >>> 7) ^ (D << 14 | D >>> 18) ^ D >>> 3, N = m[S - 2], _ = (N << 15 | N >>> 17) ^ (N << 13 | N >>> 19) ^ N >>> 10;
                m[S] = E + m[S - 7] + _ + m[S - 16];
              }
              var k = h & w ^ ~h & j, B = b & C ^ b & v ^ C & v, R = (b << 30 | b >>> 2) ^ (b << 19 | b >>> 13) ^ (b << 10 | b >>> 22), P = (h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25), $ = A + P + k + u[S] + m[S], L = R + B;
              A = j, j = w, w = h, h = y + $ | 0, y = v, v = C, C = b, b = $ + L | 0;
            }
            g[0] = g[0] + b | 0, g[1] = g[1] + C | 0, g[2] = g[2] + v | 0, g[3] = g[3] + y | 0, g[4] = g[4] + h | 0, g[5] = g[5] + w | 0, g[6] = g[6] + j | 0, g[7] = g[7] + A | 0;
          },
          _doFinalize: function() {
            var x = this._data, p = x.words, g = this._nDataBytes * 8, b = x.sigBytes * 8;
            return p[b >>> 5] |= 128 << 24 - b % 32, p[(b + 64 >>> 9 << 4) + 14] = s.floor(g / 4294967296), p[(b + 64 >>> 9 << 4) + 15] = g, x.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var x = l.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        o.SHA256 = l._createHelper(d), o.HmacSHA256 = l._createHmacHelper(d);
      }(Math), r.SHA256;
    });
  }(Yn)), Yn.exports;
}
var Xn = { exports: {} }, Aa;
function yx() {
  return Aa || (Aa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), go());
    })(pe, function(r) {
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
  }(Xn)), Xn.exports;
}
var Zn = { exports: {} }, Na;
function _0() {
  return Na || (Na = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), wn());
    })(pe, function(r) {
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
            for (var b = this._hash.words, C = b[0], v = b[1], y = b[2], h = b[3], w = b[4], j = b[5], A = b[6], S = b[7], D = C.high, E = C.low, N = v.high, _ = v.low, k = y.high, B = y.low, R = h.high, P = h.low, $ = w.high, L = w.low, V = j.high, Y = j.low, O = A.high, T = A.low, q = S.high, I = S.low, G = D, ne = E, ue = N, te = _, me = k, fe = B, K = R, re = P, le = $, xe = L, Ce = V, ge = Y, je = O, Ae = T, Q = q, ie = I, oe = 0; oe < 80; oe++) {
              var ee, de, M = d[oe];
              if (oe < 16)
                de = M.high = p[g + oe * 2] | 0, ee = M.low = p[g + oe * 2 + 1] | 0;
              else {
                var z = d[oe - 15], W = z.high, U = z.low, ae = (W >>> 1 | U << 31) ^ (W >>> 8 | U << 24) ^ W >>> 7, Fe = (U >>> 1 | W << 31) ^ (U >>> 8 | W << 24) ^ (U >>> 7 | W << 25), Be = d[oe - 2], We = Be.high, X = Be.low, ye = (We >>> 19 | X << 13) ^ (We << 3 | X >>> 29) ^ We >>> 6, ke = (X >>> 19 | We << 13) ^ (X << 3 | We >>> 29) ^ (X >>> 6 | We << 26), Ie = d[oe - 7], Xe = Ie.high, it = Ie.low, Ve = d[oe - 16], Ze = Ve.high, ct = Ve.low;
                ee = Fe + it, de = ae + Xe + (ee >>> 0 < Fe >>> 0 ? 1 : 0), ee = ee + ke, de = de + ye + (ee >>> 0 < ke >>> 0 ? 1 : 0), ee = ee + ct, de = de + Ze + (ee >>> 0 < ct >>> 0 ? 1 : 0), M.high = de, M.low = ee;
              }
              var Je = le & Ce ^ ~le & je, Et = xe & ge ^ ~xe & Ae, Ft = G & ue ^ G & me ^ ue & me, Vt = ne & te ^ ne & fe ^ te & fe, sr = (G >>> 28 | ne << 4) ^ (G << 30 | ne >>> 2) ^ (G << 25 | ne >>> 7), mt = (ne >>> 28 | G << 4) ^ (ne << 30 | G >>> 2) ^ (ne << 25 | G >>> 7), or = (le >>> 14 | xe << 18) ^ (le >>> 18 | xe << 14) ^ (le << 23 | xe >>> 9), et = (xe >>> 14 | le << 18) ^ (xe >>> 18 | le << 14) ^ (xe << 23 | le >>> 9), gt = m[oe], ar = gt.high, jt = gt.low, ze = ie + et, tt = Q + or + (ze >>> 0 < ie >>> 0 ? 1 : 0), ze = ze + Et, tt = tt + Je + (ze >>> 0 < Et >>> 0 ? 1 : 0), ze = ze + jt, tt = tt + ar + (ze >>> 0 < jt >>> 0 ? 1 : 0), ze = ze + ee, tt = tt + de + (ze >>> 0 < ee >>> 0 ? 1 : 0), Fr = mt + Vt, Cn = sr + Ft + (Fr >>> 0 < mt >>> 0 ? 1 : 0);
              Q = je, ie = Ae, je = Ce, Ae = ge, Ce = le, ge = xe, xe = re + ze | 0, le = K + tt + (xe >>> 0 < re >>> 0 ? 1 : 0) | 0, K = me, re = fe, me = ue, fe = te, ue = G, te = ne, ne = ze + Fr | 0, G = tt + Cn + (ne >>> 0 < ze >>> 0 ? 1 : 0) | 0;
            }
            E = C.low = E + ne, C.high = D + G + (E >>> 0 < ne >>> 0 ? 1 : 0), _ = v.low = _ + te, v.high = N + ue + (_ >>> 0 < te >>> 0 ? 1 : 0), B = y.low = B + fe, y.high = k + me + (B >>> 0 < fe >>> 0 ? 1 : 0), P = h.low = P + re, h.high = R + K + (P >>> 0 < re >>> 0 ? 1 : 0), L = w.low = L + xe, w.high = $ + le + (L >>> 0 < xe >>> 0 ? 1 : 0), Y = j.low = Y + ge, j.high = V + Ce + (Y >>> 0 < ge >>> 0 ? 1 : 0), T = A.low = T + Ae, A.high = O + je + (T >>> 0 < Ae >>> 0 ? 1 : 0), I = S.low = I + ie, S.high = q + Q + (I >>> 0 < ie >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, g = p.words, b = this._nDataBytes * 8, C = p.sigBytes * 8;
            g[C >>> 5] |= 128 << 24 - C % 32, g[(C + 128 >>> 10 << 5) + 30] = Math.floor(b / 4294967296), g[(C + 128 >>> 10 << 5) + 31] = b, p.sigBytes = g.length * 4, this._process();
            var v = this._hash.toX32();
            return v;
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
  }(Zn)), Zn.exports;
}
var Jn = { exports: {} }, Da;
function vx() {
  return Da || (Da = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), wn(), _0());
    })(pe, function(r) {
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
  }(Jn)), Jn.exports;
}
var es = { exports: {} }, ka;
function bx() {
  return ka || (ka = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), wn());
    })(pe, function(r) {
      return function(s) {
        var o = r, c = o.lib, f = c.WordArray, l = c.Hasher, i = o.x64, a = i.Word, u = o.algo, m = [], d = [], x = [];
        (function() {
          for (var b = 1, C = 0, v = 0; v < 24; v++) {
            m[b + 5 * C] = (v + 1) * (v + 2) / 2 % 64;
            var y = C % 5, h = (2 * b + 3 * C) % 5;
            b = y, C = h;
          }
          for (var b = 0; b < 5; b++)
            for (var C = 0; C < 5; C++)
              d[b + 5 * C] = C + (2 * b + 3 * C) % 5 * 5;
          for (var w = 1, j = 0; j < 24; j++) {
            for (var A = 0, S = 0, D = 0; D < 7; D++) {
              if (w & 1) {
                var E = (1 << D) - 1;
                E < 32 ? S ^= 1 << E : A ^= 1 << E - 32;
              }
              w & 128 ? w = w << 1 ^ 113 : w <<= 1;
            }
            x[j] = a.create(A, S);
          }
        })();
        var p = [];
        (function() {
          for (var b = 0; b < 25; b++)
            p[b] = a.create();
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
            for (var b = this._state = [], C = 0; C < 25; C++)
              b[C] = new a.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(b, C) {
            for (var v = this._state, y = this.blockSize / 2, h = 0; h < y; h++) {
              var w = b[C + 2 * h], j = b[C + 2 * h + 1];
              w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, j = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
              var A = v[h];
              A.high ^= j, A.low ^= w;
            }
            for (var S = 0; S < 24; S++) {
              for (var D = 0; D < 5; D++) {
                for (var E = 0, N = 0, _ = 0; _ < 5; _++) {
                  var A = v[D + 5 * _];
                  E ^= A.high, N ^= A.low;
                }
                var k = p[D];
                k.high = E, k.low = N;
              }
              for (var D = 0; D < 5; D++)
                for (var B = p[(D + 4) % 5], R = p[(D + 1) % 5], P = R.high, $ = R.low, E = B.high ^ (P << 1 | $ >>> 31), N = B.low ^ ($ << 1 | P >>> 31), _ = 0; _ < 5; _++) {
                  var A = v[D + 5 * _];
                  A.high ^= E, A.low ^= N;
                }
              for (var L = 1; L < 25; L++) {
                var E, N, A = v[L], V = A.high, Y = A.low, O = m[L];
                O < 32 ? (E = V << O | Y >>> 32 - O, N = Y << O | V >>> 32 - O) : (E = Y << O - 32 | V >>> 64 - O, N = V << O - 32 | Y >>> 64 - O);
                var T = p[d[L]];
                T.high = E, T.low = N;
              }
              var q = p[0], I = v[0];
              q.high = I.high, q.low = I.low;
              for (var D = 0; D < 5; D++)
                for (var _ = 0; _ < 5; _++) {
                  var L = D + 5 * _, A = v[L], G = p[L], ne = p[(D + 1) % 5 + 5 * _], ue = p[(D + 2) % 5 + 5 * _];
                  A.high = G.high ^ ~ne.high & ue.high, A.low = G.low ^ ~ne.low & ue.low;
                }
              var A = v[0], te = x[S];
              A.high ^= te.high, A.low ^= te.low;
            }
          },
          _doFinalize: function() {
            var b = this._data, C = b.words;
            this._nDataBytes * 8;
            var v = b.sigBytes * 8, y = this.blockSize * 32;
            C[v >>> 5] |= 1 << 24 - v % 32, C[(s.ceil((v + 1) / y) * y >>> 5) - 1] |= 128, b.sigBytes = C.length * 4, this._process();
            for (var h = this._state, w = this.cfg.outputLength / 8, j = w / 8, A = [], S = 0; S < j; S++) {
              var D = h[S], E = D.high, N = D.low;
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, A.push(N), A.push(E);
            }
            return new f.init(A, w);
          },
          clone: function() {
            for (var b = l.clone.call(this), C = b._state = this._state.slice(0), v = 0; v < 25; v++)
              C[v] = C[v].clone();
            return b;
          }
        });
        o.SHA3 = l._createHelper(g), o.HmacSHA3 = l._createHmacHelper(g);
      }(Math), r.SHA3;
    });
  }(es)), es.exports;
}
var ts = { exports: {} }, _a;
function wx() {
  return _a || (_a = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
          _doProcessBlock: function(j, A) {
            for (var S = 0; S < 16; S++) {
              var D = A + S, E = j[D];
              j[D] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var N = this._hash.words, _ = x.words, k = p.words, B = a.words, R = u.words, P = m.words, $ = d.words, L, V, Y, O, T, q, I, G, ne, ue;
            q = L = N[0], I = V = N[1], G = Y = N[2], ne = O = N[3], ue = T = N[4];
            for (var te, S = 0; S < 80; S += 1)
              te = L + j[A + B[S]] | 0, S < 16 ? te += b(V, Y, O) + _[0] : S < 32 ? te += C(V, Y, O) + _[1] : S < 48 ? te += v(V, Y, O) + _[2] : S < 64 ? te += y(V, Y, O) + _[3] : te += h(V, Y, O) + _[4], te = te | 0, te = w(te, P[S]), te = te + T | 0, L = T, T = O, O = w(Y, 10), Y = V, V = te, te = q + j[A + R[S]] | 0, S < 16 ? te += h(I, G, ne) + k[0] : S < 32 ? te += y(I, G, ne) + k[1] : S < 48 ? te += v(I, G, ne) + k[2] : S < 64 ? te += C(I, G, ne) + k[3] : te += b(I, G, ne) + k[4], te = te | 0, te = w(te, $[S]), te = te + ue | 0, q = ue, ue = ne, ne = w(G, 10), G = I, I = te;
            te = N[1] + Y + ne | 0, N[1] = N[2] + O + ue | 0, N[2] = N[3] + T + q | 0, N[3] = N[4] + L + I | 0, N[4] = N[0] + V + G | 0, N[0] = te;
          },
          _doFinalize: function() {
            var j = this._data, A = j.words, S = this._nDataBytes * 8, D = j.sigBytes * 8;
            A[D >>> 5] |= 128 << 24 - D % 32, A[(D + 64 >>> 9 << 4) + 14] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, j.sigBytes = (A.length + 1) * 4, this._process();
            for (var E = this._hash, N = E.words, _ = 0; _ < 5; _++) {
              var k = N[_];
              N[_] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var j = l.clone.call(this);
            return j._hash = this._hash.clone(), j;
          }
        });
        function b(j, A, S) {
          return j ^ A ^ S;
        }
        function C(j, A, S) {
          return j & A | ~j & S;
        }
        function v(j, A, S) {
          return (j | ~A) ^ S;
        }
        function y(j, A, S) {
          return j & S | A & ~S;
        }
        function h(j, A, S) {
          return j ^ (A | ~S);
        }
        function w(j, A) {
          return j << A | j >>> 32 - A;
        }
        o.RIPEMD160 = l._createHelper(g), o.HmacRIPEMD160 = l._createHmacHelper(g);
      }(), r.RIPEMD160;
    });
  }(ts)), ts.exports;
}
var rs = { exports: {} }, Sa;
function yo() {
  return Sa || (Sa = 1, function(e, t) {
    (function(r, s) {
      e.exports = s(we());
    })(pe, function(r) {
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
            for (var x = this._oKey = u.clone(), p = this._iKey = u.clone(), g = x.words, b = p.words, C = 0; C < m; C++)
              g[C] ^= 1549556828, b[C] ^= 909522486;
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
  }(rs)), rs.exports;
}
var ns = { exports: {} }, Ba;
function Cx() {
  return Ba || (Ba = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), go(), yo());
    })(pe, function(r) {
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
            for (var x = this.cfg, p = a.create(x.hasher, m), g = f.create(), b = f.create([1]), C = g.words, v = b.words, y = x.keySize, h = x.iterations; C.length < y; ) {
              var w = p.update(d).finalize(b);
              p.reset();
              for (var j = w.words, A = j.length, S = w, D = 1; D < h; D++) {
                S = p.finalize(S), p.reset();
                for (var E = S.words, N = 0; N < A; N++)
                  j[N] ^= E[N];
              }
              g.concat(w), v[0]++;
            }
            return g.sigBytes = y * 4, g;
          }
        });
        s.PBKDF2 = function(m, d, x) {
          return u.create(x).compute(m, d);
        };
      }(), r.PBKDF2;
    });
  }(ns)), ns.exports;
}
var ss = { exports: {} }, Fa;
function Bt() {
  return Fa || (Fa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), k0(), yo());
    })(pe, function(r) {
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
            for (var d, x = this.cfg, p = x.hasher.create(), g = f.create(), b = g.words, C = x.keySize, v = x.iterations; b.length < C; ) {
              d && p.update(d), d = p.update(u).finalize(m), p.reset();
              for (var y = 1; y < v; y++)
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
  }(ss)), ss.exports;
}
var os = { exports: {} }, Ra;
function Te() {
  return Ra || (Ra = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Bt());
    })(pe, function(r) {
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
          init: function(E, N, _) {
            this.cfg = this.cfg.extend(_), this._xformMode = E, this._key = N, this.reset();
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
              return typeof N == "string" ? D : j;
            }
            return function(N) {
              return {
                encrypt: function(_, k, B) {
                  return E(k).encrypt(N, _, k, B);
                },
                decrypt: function(_, k, B) {
                  return E(k).decrypt(N, _, k, B);
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
        }), b = p.CBC = function() {
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
            processBlock: function(_, k) {
              var B = this._cipher, R = B.blockSize;
              N.call(this, _, k, R), B.encryptBlock(_, k), this._prevBlock = _.slice(k, k + R);
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
            processBlock: function(_, k) {
              var B = this._cipher, R = B.blockSize, P = _.slice(k, k + R);
              B.decryptBlock(_, k), N.call(this, _, k, R), this._prevBlock = P;
            }
          });
          function N(_, k, B) {
            var R, P = this._iv;
            P ? (R = P, this._iv = s) : R = this._prevBlock;
            for (var $ = 0; $ < B; $++)
              _[k + $] ^= R[$];
          }
          return E;
        }(), C = o.pad = {}, v = C.Pkcs7 = {
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
            for (var _ = N * 4, k = _ - E.sigBytes % _, B = k << 24 | k << 16 | k << 8 | k, R = [], P = 0; P < k; P += 4)
              R.push(B);
            var $ = l.create(R, k);
            E.concat($);
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
            mode: b,
            padding: v
          }),
          reset: function() {
            var E;
            x.reset.call(this);
            var N = this.cfg, _ = N.iv, k = N.mode;
            this._xformMode == this._ENC_XFORM_MODE ? E = k.createEncryptor : (E = k.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == E ? this._mode.init(this, _ && _.words) : (this._mode = E.call(k, this, _ && _.words), this._mode.__creator = E);
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
            var N, _ = E.ciphertext, k = E.salt;
            return k ? N = l.create([1398893684, 1701076831]).concat(k).concat(_) : N = _, N.toString(u);
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
            var N, _ = u.parse(E), k = _.words;
            return k[0] == 1398893684 && k[1] == 1701076831 && (N = l.create(k.slice(2, 4)), k.splice(0, 4), _.sigBytes -= 16), y.create({ ciphertext: _, salt: N });
          }
        }, j = c.SerializableCipher = f.extend({
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
          encrypt: function(E, N, _, k) {
            k = this.cfg.extend(k);
            var B = E.createEncryptor(_, k), R = B.finalize(N), P = B.cfg;
            return y.create({
              ciphertext: R,
              key: _,
              iv: P.iv,
              algorithm: E,
              mode: P.mode,
              padding: P.padding,
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
          decrypt: function(E, N, _, k) {
            k = this.cfg.extend(k), N = this._parse(N, k.format);
            var B = E.createDecryptor(_, k).finalize(N.ciphertext);
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
          execute: function(E, N, _, k, B) {
            if (k || (k = l.random(64 / 8)), B)
              var R = d.create({ keySize: N + _, hasher: B }).compute(E, k);
            else
              var R = d.create({ keySize: N + _ }).compute(E, k);
            var P = l.create(R.words.slice(N), _ * 4);
            return R.sigBytes = N * 4, y.create({ key: R, iv: P, salt: k });
          }
        }, D = c.PasswordBasedCipher = j.extend({
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
          encrypt: function(E, N, _, k) {
            k = this.cfg.extend(k);
            var B = k.kdf.execute(_, E.keySize, E.ivSize, k.salt, k.hasher);
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
          decrypt: function(E, N, _, k) {
            k = this.cfg.extend(k), N = this._parse(N, k.format);
            var B = k.kdf.execute(_, E.keySize, E.ivSize, N.salt, k.hasher);
            k.iv = B.iv;
            var R = j.decrypt.call(this, E, N, B.key, k);
            return R;
          }
        });
      }();
    });
  }(os)), os.exports;
}
var as = { exports: {} }, Oa;
function Ex() {
  return Oa || (Oa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(as)), as.exports;
}
var is = { exports: {} }, Pa;
function jx() {
  return Pa || (Pa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(is)), is.exports;
}
var cs = { exports: {} }, Ta;
function Ax() {
  return Ta || (Ta = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(cs)), cs.exports;
}
var ls = { exports: {} }, Ma;
function Nx() {
  return Ma || (Ma = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(ls)), ls.exports;
}
var us = { exports: {} }, La;
function Dx() {
  return La || (La = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(us)), us.exports;
}
var ds = { exports: {} }, Ia;
function kx() {
  return Ia || (Ia = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(ds)), ds.exports;
}
var fs = { exports: {} }, za;
function _x() {
  return za || (za = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(fs)), fs.exports;
}
var xs = { exports: {} }, $a;
function Sx() {
  return $a || ($a = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
      return r.pad.Iso97971 = {
        pad: function(s, o) {
          s.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(s, o);
        },
        unpad: function(s) {
          r.pad.ZeroPadding.unpad(s), s.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(xs)), xs.exports;
}
var hs = { exports: {} }, Ha;
function Bx() {
  return Ha || (Ha = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(hs)), hs.exports;
}
var ps = { exports: {} }, qa;
function Fx() {
  return qa || (qa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(ps)), ps.exports;
}
var ms = { exports: {} }, Wa;
function Rx() {
  return Wa || (Wa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), Te());
    })(pe, function(r) {
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
  }(ms)), ms.exports;
}
var gs = { exports: {} }, Va;
function Ox() {
  return Va || (Va = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), qt(), Wt(), Bt(), Te());
    })(pe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.BlockCipher, f = s.algo, l = [], i = [], a = [], u = [], m = [], d = [], x = [], p = [], g = [], b = [];
        (function() {
          for (var y = [], h = 0; h < 256; h++)
            h < 128 ? y[h] = h << 1 : y[h] = h << 1 ^ 283;
          for (var w = 0, j = 0, h = 0; h < 256; h++) {
            var A = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4;
            A = A >>> 8 ^ A & 255 ^ 99, l[w] = A, i[A] = w;
            var S = y[w], D = y[S], E = y[D], N = y[A] * 257 ^ A * 16843008;
            a[w] = N << 24 | N >>> 8, u[w] = N << 16 | N >>> 16, m[w] = N << 8 | N >>> 24, d[w] = N;
            var N = E * 16843009 ^ D * 65537 ^ S * 257 ^ w * 16843008;
            x[A] = N << 24 | N >>> 8, p[A] = N << 16 | N >>> 16, g[A] = N << 8 | N >>> 24, b[A] = N, w ? (w = S ^ y[y[y[E ^ S]]], j ^= y[y[j]]) : w = j = 1;
          }
        })();
        var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], v = f.AES = c.extend({
          _doReset: function() {
            var y;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var h = this._keyPriorReset = this._key, w = h.words, j = h.sigBytes / 4, A = this._nRounds = j + 6, S = (A + 1) * 4, D = this._keySchedule = [], E = 0; E < S; E++)
                E < j ? D[E] = w[E] : (y = D[E - 1], E % j ? j > 6 && E % j == 4 && (y = l[y >>> 24] << 24 | l[y >>> 16 & 255] << 16 | l[y >>> 8 & 255] << 8 | l[y & 255]) : (y = y << 8 | y >>> 24, y = l[y >>> 24] << 24 | l[y >>> 16 & 255] << 16 | l[y >>> 8 & 255] << 8 | l[y & 255], y ^= C[E / j | 0] << 24), D[E] = D[E - j] ^ y);
              for (var N = this._invKeySchedule = [], _ = 0; _ < S; _++) {
                var E = S - _;
                if (_ % 4)
                  var y = D[E];
                else
                  var y = D[E - 4];
                _ < 4 || E <= 4 ? N[_] = y : N[_] = x[l[y >>> 24]] ^ p[l[y >>> 16 & 255]] ^ g[l[y >>> 8 & 255]] ^ b[l[y & 255]];
              }
            }
          },
          encryptBlock: function(y, h) {
            this._doCryptBlock(y, h, this._keySchedule, a, u, m, d, l);
          },
          decryptBlock: function(y, h) {
            var w = y[h + 1];
            y[h + 1] = y[h + 3], y[h + 3] = w, this._doCryptBlock(y, h, this._invKeySchedule, x, p, g, b, i);
            var w = y[h + 1];
            y[h + 1] = y[h + 3], y[h + 3] = w;
          },
          _doCryptBlock: function(y, h, w, j, A, S, D, E) {
            for (var N = this._nRounds, _ = y[h] ^ w[0], k = y[h + 1] ^ w[1], B = y[h + 2] ^ w[2], R = y[h + 3] ^ w[3], P = 4, $ = 1; $ < N; $++) {
              var L = j[_ >>> 24] ^ A[k >>> 16 & 255] ^ S[B >>> 8 & 255] ^ D[R & 255] ^ w[P++], V = j[k >>> 24] ^ A[B >>> 16 & 255] ^ S[R >>> 8 & 255] ^ D[_ & 255] ^ w[P++], Y = j[B >>> 24] ^ A[R >>> 16 & 255] ^ S[_ >>> 8 & 255] ^ D[k & 255] ^ w[P++], O = j[R >>> 24] ^ A[_ >>> 16 & 255] ^ S[k >>> 8 & 255] ^ D[B & 255] ^ w[P++];
              _ = L, k = V, B = Y, R = O;
            }
            var L = (E[_ >>> 24] << 24 | E[k >>> 16 & 255] << 16 | E[B >>> 8 & 255] << 8 | E[R & 255]) ^ w[P++], V = (E[k >>> 24] << 24 | E[B >>> 16 & 255] << 16 | E[R >>> 8 & 255] << 8 | E[_ & 255]) ^ w[P++], Y = (E[B >>> 24] << 24 | E[R >>> 16 & 255] << 16 | E[_ >>> 8 & 255] << 8 | E[k & 255]) ^ w[P++], O = (E[R >>> 24] << 24 | E[_ >>> 16 & 255] << 16 | E[k >>> 8 & 255] << 8 | E[B & 255]) ^ w[P++];
            y[h] = L, y[h + 1] = V, y[h + 2] = Y, y[h + 3] = O;
          },
          keySize: 256 / 32
        });
        s.AES = c._createHelper(v);
      }(), r.AES;
    });
  }(gs)), gs.exports;
}
var ys = { exports: {} }, Ua;
function Px() {
  return Ua || (Ua = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), qt(), Wt(), Bt(), Te());
    })(pe, function(r) {
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
            for (var C = this._key, v = C.words, y = [], h = 0; h < 56; h++) {
              var w = i[h] - 1;
              y[h] = v[w >>> 5] >>> 31 - w % 32 & 1;
            }
            for (var j = this._subKeys = [], A = 0; A < 16; A++) {
              for (var S = j[A] = [], D = u[A], h = 0; h < 24; h++)
                S[h / 6 | 0] |= y[(a[h] - 1 + D) % 28] << 31 - h % 6, S[4 + (h / 6 | 0)] |= y[28 + (a[h + 24] - 1 + D) % 28] << 31 - h % 6;
              S[0] = S[0] << 1 | S[0] >>> 31;
              for (var h = 1; h < 7; h++)
                S[h] = S[h] >>> (h - 1) * 4 + 3;
              S[7] = S[7] << 5 | S[7] >>> 27;
            }
            for (var E = this._invSubKeys = [], h = 0; h < 16; h++)
              E[h] = j[15 - h];
          },
          encryptBlock: function(C, v) {
            this._doCryptBlock(C, v, this._subKeys);
          },
          decryptBlock: function(C, v) {
            this._doCryptBlock(C, v, this._invSubKeys);
          },
          _doCryptBlock: function(C, v, y) {
            this._lBlock = C[v], this._rBlock = C[v + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), g.call(this, 2, 858993459), g.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var h = 0; h < 16; h++) {
              for (var w = y[h], j = this._lBlock, A = this._rBlock, S = 0, D = 0; D < 8; D++)
                S |= m[D][((A ^ w[D]) & d[D]) >>> 0];
              this._lBlock = A, this._rBlock = j ^ S;
            }
            var E = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = E, p.call(this, 1, 1431655765), g.call(this, 8, 16711935), g.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), C[v] = this._lBlock, C[v + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(C, v) {
          var y = (this._lBlock >>> C ^ this._rBlock) & v;
          this._rBlock ^= y, this._lBlock ^= y << C;
        }
        function g(C, v) {
          var y = (this._rBlock >>> C ^ this._lBlock) & v;
          this._lBlock ^= y, this._rBlock ^= y << C;
        }
        s.DES = f._createHelper(x);
        var b = l.TripleDES = f.extend({
          _doReset: function() {
            var C = this._key, v = C.words;
            if (v.length !== 2 && v.length !== 4 && v.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var y = v.slice(0, 2), h = v.length < 4 ? v.slice(0, 2) : v.slice(2, 4), w = v.length < 6 ? v.slice(0, 2) : v.slice(4, 6);
            this._des1 = x.createEncryptor(c.create(y)), this._des2 = x.createEncryptor(c.create(h)), this._des3 = x.createEncryptor(c.create(w));
          },
          encryptBlock: function(C, v) {
            this._des1.encryptBlock(C, v), this._des2.decryptBlock(C, v), this._des3.encryptBlock(C, v);
          },
          decryptBlock: function(C, v) {
            this._des3.decryptBlock(C, v), this._des2.encryptBlock(C, v), this._des1.decryptBlock(C, v);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        s.TripleDES = f._createHelper(b);
      }(), r.TripleDES;
    });
  }(ys)), ys.exports;
}
var vs = { exports: {} }, Qa;
function Tx() {
  return Qa || (Qa = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), qt(), Wt(), Bt(), Te());
    })(pe, function(r) {
      return function() {
        var s = r, o = s.lib, c = o.StreamCipher, f = s.algo, l = f.RC4 = c.extend({
          _doReset: function() {
            for (var u = this._key, m = u.words, d = u.sigBytes, x = this._S = [], p = 0; p < 256; p++)
              x[p] = p;
            for (var p = 0, g = 0; p < 256; p++) {
              var b = p % d, C = m[b >>> 2] >>> 24 - b % 4 * 8 & 255;
              g = (g + x[p] + C) % 256;
              var v = x[p];
              x[p] = x[g], x[g] = v;
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
  }(vs)), vs.exports;
}
var bs = { exports: {} }, Ka;
function Mx() {
  return Ka || (Ka = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), qt(), Wt(), Bt(), Te());
    })(pe, function(r) {
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
            ], b = this._C = [
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
              b[p] ^= g[p + 4 & 7];
            if (x) {
              var C = x.words, v = C[0], y = C[1], h = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, w = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, j = h >>> 16 | w & 4294901760, A = w << 16 | h & 65535;
              b[0] ^= h, b[1] ^= j, b[2] ^= w, b[3] ^= A, b[4] ^= h, b[5] ^= j, b[6] ^= w, b[7] ^= A;
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
            var g = d[p] + x[p], b = g & 65535, C = g >>> 16, v = ((b * b >>> 17) + b * C >>> 15) + C * C, y = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = v ^ y;
          }
          d[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, d[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, d[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, d[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, d[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, d[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, d[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, d[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.Rabbit = c._createHelper(u);
      }(), r.Rabbit;
    });
  }(bs)), bs.exports;
}
var ws = { exports: {} }, Ga;
function Lx() {
  return Ga || (Ga = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), qt(), Wt(), Bt(), Te());
    })(pe, function(r) {
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
            for (var b = 0; b < 4; b++)
              m.call(this);
            for (var b = 0; b < 8; b++)
              g[b] ^= p[b + 4 & 7];
            if (x) {
              var C = x.words, v = C[0], y = C[1], h = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, w = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, j = h >>> 16 | w & 4294901760, A = w << 16 | h & 65535;
              g[0] ^= h, g[1] ^= j, g[2] ^= w, g[3] ^= A, g[4] ^= h, g[5] ^= j, g[6] ^= w, g[7] ^= A;
              for (var b = 0; b < 4; b++)
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
            var g = d[p] + x[p], b = g & 65535, C = g >>> 16, v = ((b * b >>> 17) + b * C >>> 15) + C * C, y = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = v ^ y;
          }
          d[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, d[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, d[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, d[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, d[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, d[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, d[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, d[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.RabbitLegacy = c._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(ws)), ws.exports;
}
var Cs = { exports: {} }, Ya;
function Ix() {
  return Ya || (Ya = 1, function(e, t) {
    (function(r, s, o) {
      e.exports = s(we(), qt(), Wt(), Bt(), Te());
    })(pe, function(r) {
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
        function m(b, C) {
          let v = C >> 24 & 255, y = C >> 16 & 255, h = C >> 8 & 255, w = C & 255, j = b.sbox[0][v] + b.sbox[1][y];
          return j = j ^ b.sbox[2][h], j = j + b.sbox[3][w], j;
        }
        function d(b, C, v) {
          let y = C, h = v, w;
          for (let j = 0; j < l; ++j)
            y = y ^ b.pbox[j], h = m(b, y) ^ h, w = y, y = h, h = w;
          return w = y, y = h, h = w, h = h ^ b.pbox[l], y = y ^ b.pbox[l + 1], { left: y, right: h };
        }
        function x(b, C, v) {
          let y = C, h = v, w;
          for (let j = l + 1; j > 1; --j)
            y = y ^ b.pbox[j], h = m(b, y) ^ h, w = y, y = h, h = w;
          return w = y, y = h, h = w, h = h ^ b.pbox[1], y = y ^ b.pbox[0], { left: y, right: h };
        }
        function p(b, C, v) {
          for (let A = 0; A < 4; A++) {
            b.sbox[A] = [];
            for (let S = 0; S < 256; S++)
              b.sbox[A][S] = a[A][S];
          }
          let y = 0;
          for (let A = 0; A < l + 2; A++)
            b.pbox[A] = i[A] ^ C[y], y++, y >= v && (y = 0);
          let h = 0, w = 0, j = 0;
          for (let A = 0; A < l + 2; A += 2)
            j = d(b, h, w), h = j.left, w = j.right, b.pbox[A] = h, b.pbox[A + 1] = w;
          for (let A = 0; A < 4; A++)
            for (let S = 0; S < 256; S += 2)
              j = d(b, h, w), h = j.left, w = j.right, b.sbox[A][S] = h, b.sbox[A][S + 1] = w;
          return !0;
        }
        var g = f.Blowfish = c.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var b = this._keyPriorReset = this._key, C = b.words, v = b.sigBytes / 4;
              p(u, C, v);
            }
          },
          encryptBlock: function(b, C) {
            var v = d(u, b[C], b[C + 1]);
            b[C] = v.left, b[C + 1] = v.right;
          },
          decryptBlock: function(b, C) {
            var v = x(u, b[C], b[C + 1]);
            b[C] = v.left, b[C + 1] = v.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        s.Blowfish = c._createHelper(g);
      }(), r.Blowfish;
    });
  }(Cs)), Cs.exports;
}
(function(e, t) {
  (function(r, s, o) {
    e.exports = s(we(), wn(), px(), mx(), qt(), gx(), Wt(), k0(), go(), yx(), _0(), vx(), bx(), wx(), yo(), Cx(), Bt(), Te(), Ex(), jx(), Ax(), Nx(), Dx(), kx(), _x(), Sx(), Bx(), Fx(), Rx(), Ox(), Px(), Tx(), Mx(), Lx(), Ix());
  })(pe, function(r) {
    return r;
  });
})(D0);
var zx = D0.exports;
const Wr = /* @__PURE__ */ I0(zx), $x = (e) => {
  const t = "97cc+XE5NTUVhWOrdxrESw==";
  try {
    const r = Wr.AES.decrypt(
      e.replace(/^"(.*)"$/, "$1"),
      Wr.enc.Base64.parse(t),
      { mode: Wr.mode.ECB }
    ).toString(Wr.enc.Utf8);
    return JSON.parse(r);
  } catch {
    return null;
  }
}, cn = ux({
  reducerPath: "InboxService",
  baseQuery: vf({
    baseUrl: "https://notification.infinitisoftware.net/notificationapi/notification",
    // This allows you to access files in the public folder
    credentials: "include",
    prepareHeaders: (e) => {
      var s;
      const t = $x(localStorage.getItem("user")), r = sessionStorage.getItem("iframe_token");
      if (r && r && e.set("Authorization", `Bearer ${r}`), t) {
        const o = (s = JSON.parse(t)) == null ? void 0 : s.token;
        o && e.set("X-XSRF-TOKEN", o);
      }
      return e;
    }
  }),
  endpoints: () => ({})
}), Hx = cn.enhanceEndpoints({
  addTagTypes: ["demo"]
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (e) => ({
    getMailListResponse: e.query({
      // query: () => `/mail-server/?project=${localStorage.getItem("project")}&page=1&page_size=100`, // dynamic project ID
      query: (t) => ({ url: `/mail-server/?project=${localStorage.getItem("project")}`, method: "GET", params: t })
    }),
    getConvoResponse: e.query({
      query: () => "staticResponse/convoResponse.json"
    }),
    getConversationDetails: e.query({
      query: (t) => `/mail-server/${t.id}/?project=${localStorage.getItem("project")}`
    })
  })
}), { useLazyGetMailListResponseQuery: S0, useLazyGetConvoResponseQuery: rh, useLazyGetConversationDetailsQuery: qx } = Hx, Wx = ({
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
  onUndo: g,
  setEmails: b,
  readStatus: C
}) => {
  const [v, y] = J(""), [h, w] = J(320), [j, A] = J(!1), [S, D] = J(!1), E = _e(null), N = _e(0), _ = _e(320), [k, B] = S0(), [R, P] = J({
    page: 1,
    page_size: 20,
    search: void 0
  }), [$, L] = J(0);
  be(() => {
    k(R);
  }, [R]), be(() => {
    var K, re, le, xe, Ce, ge;
    if (B.isSuccess && b) {
      const je = (le = (re = (K = B == null ? void 0 : B.data) == null ? void 0 : K.response) == null ? void 0 : re.data) == null ? void 0 : le.results;
      je && Array.isArray(je) && (L(
        ((ge = (Ce = (xe = B == null ? void 0 : B.data) == null ? void 0 : xe.response) == null ? void 0 : Ce.data) == null ? void 0 : ge.count) || 0
      ), b((Ae) => {
        const Q = new Set(Ae.map((oe) => oe.mail_id)), ie = je.filter((oe) => !Q.has(oe.mail_id)).map((oe) => ({
          ...oe,
          intentLabel: oe.labels || "new"
        }));
        return [...Ae, ...ie];
      }));
    }
  }, [B]);
  const V = (K, re) => {
    re.stopPropagation(), r(K, !0);
  };
  be(() => {
    var K, re, le;
    y(
      ((re = (K = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : K.to) == null ? void 0 : re.length) > 0 ? (le = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : le.to[0] : void 0
    );
  }, [e]);
  const Y = (K) => {
    const re = new Date(K), xe = ((/* @__PURE__ */ new Date()).getTime() - re.getTime()) / (1e3 * 60 * 60);
    return xe < 24 ? re.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : xe < 168 ? re.toLocaleDateString("en-US", { weekday: "short" }) : re.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, O = (K) => {
    const re = K.toLowerCase();
    return re.includes("get") ? {
      text: "Get Info",
      icon: ei,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600"
    } : re.includes("approve") || re.includes("success") || re.includes("confirmed") ? {
      text: "Approved",
      icon: ti,
      color: "bg-green-100 text-green-800",
      iconColor: "text-green-600"
    } : re.includes("cancel") || re.includes("rejected") || re.includes("failed") ? {
      text: "Cancelled",
      icon: li,
      color: "bg-red-100 text-red-800",
      iconColor: "text-red-600"
    } : re.includes("ticket") || re.includes("booking") || re.includes("reservation") ? {
      text: "Ticketing",
      icon: ii,
      color: "bg-yellow-100 text-yellow-800",
      iconColor: "text-yellow-600"
    } : re.includes("feedback") || re.includes("report") ? {
      text: "Feedback",
      icon: oc,
      color: "bg-orange-100 text-orange-800",
      iconColor: "text-orange-600"
    } : {
      text: "new",
      icon: Ur,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-600"
    };
  }, T = (K) => {
    switch (K) {
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
        if (K.startsWith("custom-label-")) {
          const re = K.replace("custom-label-", ""), le = l.find((xe) => xe.id === re);
          return (le == null ? void 0 : le.name) || "Unknown Label";
        }
        return "Inbox";
    }
  }, q = (K) => {
    switch (K) {
      case "inbox":
        return oi;
      case "sent":
        return Us;
      case "drafts":
        return Vs;
      case "starred":
        return Kr;
      case "snoozed":
        return Ws;
      default:
        return Gr;
    }
  }, I = (K) => K.labels ? K.labels.map((re) => l.find((le) => le.id === re)).filter(Boolean) : [], G = ({ section: K }) => {
    const re = q(K), le = T(K);
    return /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col items-center justify-center h-96 text-center p-8", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ n.jsx(re, { className: "w-10 h-10 text-gray-400" }) }),
      /* @__PURE__ */ n.jsxs("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: [
        "No emails in ",
        le
      ] }),
      /* @__PURE__ */ n.jsx("p", { className: "text-gray-500 max-w-sm", children: K === "starred" ? "Star important conversations to find them quickly here." : K === "snoozed" ? "Snoozed conversations will appear here when it's time to deal with them." : K.startsWith("custom-label-") || K.startsWith("label-") ? `Conversations with the "${le}" label will appear here.` : "No conversations available yet." })
    ] });
  }, ne = Array.from(c), ue = ne.length > 0, te = lt(
    (K) => {
      K.preventDefault(), A(!0), N.current = K.clientX, _.current = h, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    },
    [h]
  ), me = lt(
    (K) => {
      if (!j) return;
      K.preventDefault();
      const re = K.clientX - N.current, le = _.current + re, xe = Math.max(240, Math.min(le, 800));
      requestAnimationFrame(() => {
        w(xe);
      });
    },
    [j]
  ), fe = lt(() => {
    A(!1), document.body.style.cursor = "", document.body.style.userSelect = "";
  }, []);
  return Zt.useEffect(() => (j && (document.addEventListener("mousemove", me, { passive: !1 }), document.addEventListener("mouseup", fe)), () => {
    document.removeEventListener("mousemove", me), document.removeEventListener("mouseup", fe), document.body.style.cursor = "", document.body.style.userSelect = "";
  }), [j, me, fe]), e.length === 0 ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: E,
      style: {
        width: `${h}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: te,
            children: /* @__PURE__ */ n.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ n.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: T(f) }) }),
        /* @__PURE__ */ n.jsx(G, { section: f })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: E,
      style: {
        width: `${h}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: te,
            children: /* @__PURE__ */ n.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "p-4 border-b border-gray-200",
            style: { backgroundColor: "#eef7fe" },
            children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    onClick: () => {
                      c.size === e.length ? p() : x();
                    },
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    title: c.size === e.length ? "Unselect all" : "Select all",
                    children: c.size === e.length && e.length > 0 ? /* @__PURE__ */ n.jsx(Co, { className: "w-4 h-4 text-blue-600" }) : c.size > 0 ? /* @__PURE__ */ n.jsx(An, { className: "w-4 h-4 text-blue-600 fill-blue-100" }) : /* @__PURE__ */ n.jsx(An, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { style: { height: "100%" }, children: [
                  /* @__PURE__ */ n.jsxs("h2", { className: "text-lg font-semibold text-gray-900", children: [
                    T(f),
                    ` (${e.filter((K) => !K.is_read).length}/${C === "all" ? $ : e.length})`
                  ] }),
                  /* @__PURE__ */ n.jsx("p", { className: "text-sm mt-1 truncate", children: v ? `To: ${v}` : "No recipients found" })
                ] })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                ue && /* @__PURE__ */ n.jsx(
                  _c,
                  {
                    emailIds: ne,
                    currentLabels: [],
                    availableLabels: l,
                    onLabelsChange: (K, re) => {
                      i(K, re), setTimeout(() => {
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
                      onClick: () => D(!S),
                      className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      title: "More actions",
                      children: /* @__PURE__ */ n.jsx(ai, { className: "w-4 h-4" })
                    }
                  ),
                  S && /* @__PURE__ */ n.jsx("div", { className: "absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "p-1", children: [
                    ue ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          onClick: () => {
                            u(ne, !0), D(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Read"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          onClick: () => {
                            u(ne, !1), D(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Unread"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          onClick: () => {
                            m(ne), D(!1), setTimeout(() => p(), 100);
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
                            g(), D(!1);
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
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "divide-y divide-gray-100 overflow-y-auto max-h-[calc(100vh-8rem)] thin-scrollbar",
            onScroll: (K) => {
              const re = K.currentTarget;
              re.scrollHeight - re.scrollTop === re.clientHeight && P((le) => ({
                ...le,
                page: le.page + 1
              }));
            },
            children: e.map((K) => {
              const re = t === K.message_id, le = c.has(K.message_id), xe = I(K);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  className: `
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${re ? "bg-blue-50 border-r-2 border-blue-500" : ""}
                ${K.is_read ? "" : "bg-blue-25"}
              `,
                  onClick: () => r(K),
                  onDoubleClick: (Ce) => V(K, Ce),
                  title: "Double-click to open in full-page view",
                  style: {
                    ...re ? { borderRight: "1px solid blue" } : {}
                  },
                  children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start space-x-3", children: [
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        onClick: (Ce) => {
                          Ce.stopPropagation(), o(K.message_id);
                        },
                        className: "mt-1 text-gray-400 hover:text-gray-600 transition-colors",
                        children: le ? /* @__PURE__ */ n.jsx(Co, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ n.jsx(An, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        onClick: (Ce) => {
                          Ce.stopPropagation(), s(K.message_id);
                        },
                        className: "mt-1 transition-colors",
                        children: /* @__PURE__ */ n.jsx(
                          Kr,
                          {
                            className: `w-4 h-4 ${K.is_starred ? "text-yellow-500 fill-yellow-500" : "text-gray-400 hover:text-yellow-500"}`
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
                        ${K.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                              children: K.subject
                            }
                          ),
                          (K == null ? void 0 : K.intent) && /* @__PURE__ */ n.jsxs(
                            "div",
                            {
                              className: `
                          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                          ${O(K.intent).color}
                        `,
                              children: [
                                Zt.createElement(
                                  O(K.intent).icon,
                                  {
                                    className: `w-3 h-3 mr-1 ${O(K.intent).iconColor}`
                                  }
                                ),
                                O(K.intent).text
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ n.jsx("p", { className: "text-xs text-gray-500 ml-2 flex-shrink-0", children: Y(K.created_at) })
                      ] }),
                      /* @__PURE__ */ n.jsx(
                        "p",
                        {
                          className: `
                    text-sm mt-1 truncate
                    ${K.is_read ? "text-gray-400" : "text-gray-700 font-medium"}
                  `,
                          children: K.snippet
                        }
                      ),
                      xe.length > 0 && /* @__PURE__ */ n.jsx(Xu, { emailLabels: K == null ? void 0 : K.labels })
                    ] })
                  ] })
                },
                K.message_id
              );
            })
          }
        )
      ]
    }
  );
}, Vx = ({
  isOpen: e,
  onClose: t,
  triggerRef: r
}) => {
  const s = _e(null), [o, c] = J({ top: 0, left: 0 });
  return be(() => {
    if (e && r.current && s.current) {
      const f = r.current.getBoundingClientRect(), l = s.current.getBoundingClientRect(), i = f.bottom + 8, a = f.left, u = window.innerWidth - l.width - 16, m = Math.min(a, u);
      c({ top: i, left: m });
    }
  }, [e, r]), be(() => {
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
                children: /* @__PURE__ */ n.jsx(Qe, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(fc, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Airline:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900", children: "Delta Airlines" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(ii, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Ticket Type:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900", children: "Round Trip" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(Vs, { className: "w-4 h-4 text-purple-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "PNR:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900 font-mono", children: "ABC123XYZ" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(li, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Cancellation:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-900", children: "Allowed" })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(ti, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Status:" })
              ] }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-green-800 bg-green-100 px-2 py-1 rounded-full", children: "Confirmed" })
            ] })
          ] })
        ]
      }
    )
  ] }) : null;
}, Ux = () => {
  const [e, t] = J({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return be(() => {
    const r = () => {
      t({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}, Xa = ({
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
  var W, U, ae, Fe, Be, We;
  const { width: p } = Ux(), [g, b] = J(""), [C, v] = J(!1), [y, h] = J(""), [w, j] = J(!1), [A, S] = J(void 0), [D, E] = J(
    /* @__PURE__ */ new Set()
  ), [N, _] = J(!1), [k, B] = J(!1), [R, P] = J(!1), $ = _e(null), L = _e(null), V = _e(null), Y = _e(null), [O, T] = qx(), [q, I] = J([]), G = _e(null);
  if (be(() => {
    h("");
  }, [e]), be(() => {
    o.showAiReply && $.current && setTimeout(() => {
      var X;
      (X = $.current) == null || X.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [o.showAiReply]), be(() => {
    v(!1), j(!1);
  }, [e]), be(() => {
    w && g === o.generatedReply && L.current && setTimeout(() => {
      var X;
      (X = L.current) == null || X.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [w, g, o.generatedReply]), be(() => {
    const X = (ye) => {
      G.current && !G.current.contains(ye.target) && P(!1);
    };
    if (R)
      return document.addEventListener("mousedown", X), () => document.removeEventListener("mousedown", X);
  }, [R]), be(() => {
    if (e != null && e.mail_id) {
      let X = e == null ? void 0 : e.mail_id;
      O({ id: X });
    }
  }, [e == null ? void 0 : e.mail_id]), be(() => {
    var X, ye, ke;
    if (T != null && T.isSuccess) {
      console.log(T);
      const Ie = (ke = (ye = (X = T == null ? void 0 : T.data) == null ? void 0 : X.response) == null ? void 0 : ye.data) == null ? void 0 : ke.conversation;
      Ie && I(Ie);
    }
  }, [T]), !e)
    return /* @__PURE__ */ n.jsx("div", { className: "flex-1 flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ n.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ n.jsx("div", { className: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ n.jsx("span", { className: "text-4xl text-gray-400", children: "📧" }) }),
      /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Select an email" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-gray-500", children: "Choose an email from the list to view the conversation" })
    ] }) });
  const ne = (X) => new Date(X).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), ue = () => {
    if (g.trim()) {
      let X = "manual";
      g === o.generatedReply && o.generatedReply ? X = "ai" : o.generatedReply && g.includes(o.generatedReply) && (X = "partial-ai"), console.log("Reply sent with type:", X), b(""), j(!1), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, te = (X) => {
    var Ie;
    const ye = de[de.length - 1];
    return ye.to.length + (((Ie = ye.cc) == null ? void 0 : Ie.length) || 0) > 1 || ye.cc && ye.cc.length > 0;
  }, me = () => {
    var X;
    h((X = q[q.length - 1]) == null ? void 0 : X.ai_response);
  }, fe = () => {
    if (q) {
      const X = te();
      c(
        q,
        "professional",
        X ? "reply-all" : "reply"
      );
    }
  }, K = () => {
    _(!N);
  }, re = () => {
    b(o.generatedReply), j(!0), f({ ...o, showAiReply: !1 });
  }, le = () => {
    if (q && de.length > 0) {
      const X = de[de.length - 1], ye = /* @__PURE__ */ new Set([
        ...X.to,
        ...X.cc || []
      ]), ke = `

--- Reply All ---
To: ${Array.from(
        ye
      ).join(", ")}

${o.generatedReply}`;
      b(ke), j(!0), f({ ...o, showAiReply: !1 });
    }
  }, xe = () => {
    if (S("reply-all"), v(!0), e) {
      const X = de[de.length - 1], ye = /* @__PURE__ */ new Set([
        X.to,
        ...X.to,
        ...X.cc || []
      ]), ke = `

--- Reply All ---
To: ${Array.from(
        ye
      ).join(", ")}

`;
      b(ke), j(!0), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, Ce = () => {
    if (q) {
      const X = de[de.length - 1], ye = `

--- Forwarded Message ---
From: ${X.from_address}
Date: ${ne(X.create_to)}
Subject: ${X.subject}
To: ${X.to.join(", ")}
${X.cc ? `Cc: ${X.cc.join(", ")}
` : ""}
${X.body_plain}`;
      b(ye), j(!0), f({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, ge = () => {
    if (!e) return;
    const X = de[de.length - 1], ye = X.body_plain, ke = `Meeting: ${e.subject}`, Ie = `Original email from: ${X.from_address}

${ye}`, Xe = /(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})/, it = /(\d{1,2}:\d{2}\s*(AM|PM|am|pm))/, Ve = ye.match(Xe), Ze = ye.match(it);
    let ct = /* @__PURE__ */ new Date();
    if (Ve && (ct = new Date(Ve[0])), Ze) {
      const mt = Ze[0], [or, et] = mt.split(/\s+/), [gt, ar] = or.split(":").map(Number);
      let jt = gt;
      (et == null ? void 0 : et.toLowerCase()) === "pm" && gt !== 12 ? jt += 12 : (et == null ? void 0 : et.toLowerCase()) === "am" && gt === 12 && (jt = 0), ct.setHours(jt, ar, 0, 0);
    }
    const Je = (mt) => mt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z", Et = Je(ct), Ft = new Date(ct.getTime() + 60 * 60 * 1e3), Vt = Je(Ft), sr = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ke)}&dates=${Et}/${Vt}&details=${encodeURIComponent(Ie)}&location=${encodeURIComponent("To be determined")}`;
    window.open(sr, "_blank"), P(!1);
  }, je = () => {
    window.print(), P(!1);
  }, Ae = () => {
    e && (console.log("Reporting spam for email:", e.message_id), window.confirm(
      `Report "${e.subject}" as spam? This conversation will be moved to spam folder.`
    ) && (alert("Email reported as spam successfully"), t()), P(!1));
  }, Q = () => {
    console.log("Block sender:", e == null ? void 0 : e.senderEmail), P(!1);
  }, ie = (X) => {
    E((ye) => {
      const ke = new Set(ye);
      return ke.has(X) ? ke.delete(X) : ke.add(X), ke;
    });
  }, oe = (X) => X.customLabels ? X.customLabels.map((ye) => l.find((ke) => ke.id === ye)).filter(Boolean) : [], ee = ({
    replyType: X
  }) => {
    if (!X) return null;
    const ye = {
      manual: {
        icon: yc,
        label: "Replied Manually",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200"
      },
      ai: {
        icon: Y0,
        label: "Replied by AI",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        borderColor: "border-purple-200"
      },
      "partial-ai": {
        icon: gc,
        label: "Partial AI Reply",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        borderColor: "border-orange-200"
      }
    }, {
      icon: ke,
      label: Ie,
      bgColor: Xe,
      textColor: it,
      borderColor: Ve
    } = ye[X];
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${Xe} ${it} ${Ve}`,
        children: [
          /* @__PURE__ */ n.jsx(ke, { className: "w-3 h-3 mr-1" }),
          Ie
        ]
      }
    );
  }, de = [...q].sort(
    (X, ye) => new Date(X.created_at).getTime() - new Date(ye.created_at).getTime()
  ), M = oe(q), z = () => /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ n.jsx(jo, { className: "w-4 h-4 animate-spin" }),
    /* @__PURE__ */ n.jsx("span", { children: "Generating..." })
  ] });
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: T != null && T.isLoading || T != null && T.isFetching ? /* @__PURE__ */ n.jsx(Dc, {}) : /* @__PURE__ */ n.jsxs("div", { ref: V, className: "flex-1 flex flex-col bg-white", children: [
    /* @__PURE__ */ n.jsx("div", { className: "border-b border-gray-200 p-6", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex-1 min-w-0 flex items-center space-x-3", children: [
        s && r && /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: r,
            className: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors",
            title: "Back to email list",
            children: /* @__PURE__ */ n.jsx(Q0, { className: "w-5 h-5 text-gray-600" })
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
              q.length,
              " message",
              q.length !== 1 ? "s" : "",
              " • Conversation"
            ] }),
            M.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              M.slice(0, 3).map((X) => /* @__PURE__ */ n.jsxs(
                "span",
                {
                  className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                  style: {
                    backgroundColor: `${X.color}15`,
                    color: X.color,
                    border: `1px solid ${X.color}30`
                  },
                  children: [
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mr-1",
                        style: { backgroundColor: X.color }
                      }
                    ),
                    X.name
                  ]
                },
                X.id
              )),
              M.length > 3 && /* @__PURE__ */ n.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600", children: [
                "+",
                M.length - 3,
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
            ref: Y,
            onClick: () => B(!k),
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(Vs, { className: "w-4 h-4 mr-1" }),
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
            children: /* @__PURE__ */ n.jsx(As, { className: "w-4 h-4" })
          }
        ) : u && /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: () => u(e.message_id),
            className: "p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
            title: "Delete conversation",
            children: /* @__PURE__ */ n.jsx(ln, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: "relative", ref: G, children: [
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => P(!R),
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ n.jsx(ai, { className: "w-5 h-5 text-gray-600" })
            }
          ),
          R && /* @__PURE__ */ n.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10", children: [
            /* @__PURE__ */ n.jsxs(
              "button",
              {
                onClick: () => {
                  x && x(e.message_id), P(!1);
                },
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ n.jsx(
                    Kr,
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
                onClick: ge,
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
                onClick: je,
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
                onClick: Ae,
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
                onClick: Q,
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
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ n.jsx("div", { className: "max-w-5xl mx-auto", children: de.map((X, ye) => {
      var it;
      const ke = D.has(X.message_id) || ye === de.length - 1 && !D.has(`collapsed-${X.message_id}`), Ie = ye === de.length - 1, Xe = X.from_address === e.from_address;
      return /* @__PURE__ */ n.jsx(
        "div",
        {
          className: "last:border-b-0",
          style: { marginBottom: 10 },
          children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: `p-6 ${Xe ? "bg-blue-50" : "bg-gray-50"}`,
              children: [
                /* @__PURE__ */ n.jsxs(
                  "div",
                  {
                    className: "cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-lg",
                    onClick: () => {
                      Ie ? E(
                        ke ? (Ve) => /* @__PURE__ */ new Set([
                          ...Ve,
                          `collapsed-${X.message_id}`
                        ]) : (Ve) => {
                          const Ze = new Set(Ve);
                          return Ze.delete(
                            `collapsed-${X.message_id}`
                          ), Ze;
                        }
                      ) : ie(X.message_id);
                    },
                    style: {
                      marginBottom: 10,
                      border: "2px solid #abb1ae"
                    },
                    children: [
                      /* @__PURE__ */ n.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
                          /* @__PURE__ */ n.jsx(
                            "div",
                            {
                              className: `w-10 h-10 ${Xe ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-blue-500 to-purple-600"} rounded-full flex items-center justify-center flex-shrink-0`,
                              children: /* @__PURE__ */ n.jsx("span", { className: "text-white font-semibold text-sm", children: X.from_address.charAt(0).toUpperCase() })
                            }
                          ),
                          /* @__PURE__ */ n.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                              /* @__PURE__ */ n.jsx("p", { className: "font-semibold text-gray-900", children: X.from_address }),
                              /* @__PURE__ */ n.jsx(ee, { replyType: X.replyType }),
                              Xe ? /* @__PURE__ */ n.jsx(Us, { className: "w-5 h-5 text-blue-600 mt-0.5" }) : /* @__PURE__ */ n.jsx(oi, { className: "w-5 h-5 text-green-600 mt-0.5" })
                            ] }),
                            /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500", children: ne(X.created_at) })
                          ] })
                        ] }),
                        /* @__PURE__ */ n.jsx("button", { className: "text-gray-400 hover:text-gray-600 mt-1", children: ke ? /* @__PURE__ */ n.jsx(X0, { className: "w-6 h-6" }) : /* @__PURE__ */ n.jsx(ni, { className: "w-6 h-6" }) })
                      ] }),
                      ke && (X.cc.length > 0 || X.bcc.length > 0) && /* @__PURE__ */ n.jsx("div", { className: "mb-4 bg-gray-50 rounded-lg p-4 space-y-2", children: /* @__PURE__ */ n.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                        X.cc && X.cc.length > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
                          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-gray-700", children: "CC:" }),
                          /* @__PURE__ */ n.jsx("p", { className: "text-gray-600 mt-1", children: X.cc.join(", ") })
                        ] }),
                        X.bcc && X.bcc.length > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
                          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-gray-700", children: "BCC:" }),
                          /* @__PURE__ */ n.jsx("p", { className: "text-gray-600 mt-1", children: X.bcc.join(", ") })
                        ] })
                      ] }) })
                    ]
                  }
                ),
                ke && /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsx(
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
                          __html: X.body_html || X.body_plain
                        }
                      }
                    )
                  }
                ) }),
                !ke && /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs("div", { className: "text-sm text-gray-500 truncate mb-3", children: [
                  (it = X == null ? void 0 : X.body_plain) == null ? void 0 : it.substring(0, 100),
                  "..."
                ] }) })
              ]
            }
          )
        },
        X.message_id
      );
    }) }) }),
    (y == null ? void 0 : y.length) === 0 && !w && /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ n.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2 w-full", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: () => {
              S("reply"), j(!w), v(!0);
            },
            className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(No, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: "Reply" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: xe,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(Ao, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: "Reply All" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: Ce,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(tc, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: "Forward" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: me,
          disabled: o.isGenerating,
          className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
          children: o.isGenerating ? /* @__PURE__ */ n.jsx(z, {}) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            /* @__PURE__ */ n.jsx(Gt, { className: "w-4 h-4" }),
            /* @__PURE__ */ n.jsx("span", { children: "Reply with AI" })
          ] })
        }
      ) })
    ] }) }) }),
    y.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        style: {
          width: p > 1580 ? "100%" : p < 1580 && p > 1280 ? "85%" : "65%"
        },
        children: /* @__PURE__ */ n.jsxs(
          "div",
          {
            ref: $,
            className: `bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300 transition-all ${N ? "fixed inset-4 z-50 bg-white shadow-2xl flex flex-col" : ""}`,
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ n.jsx(Gt, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ n.jsxs("span", { className: "font-semibold text-gray-900", children: [
                    "AI Generated",
                    " ",
                    te() ? "Reply All" : "Reply"
                  ] })
                ] }),
                /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: K,
                      className: "text-purple-600 hover:text-purple-700 p-1",
                      title: N ? "Collapse" : "Expand",
                      children: N ? /* @__PURE__ */ n.jsx(ac, { className: "w-4 h-4" }) : /* @__PURE__ */ n.jsx(J0, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: fe,
                      disabled: o.isGenerating,
                      className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                      title: "Regenerate",
                      children: o.isGenerating ? /* @__PURE__ */ n.jsx(jo, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ n.jsx(As, { className: "w-4 h-4" })
                    }
                  ),
                  N && /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => _(!1),
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
                  className: `bg-white border border-gray-200 rounded p-3 mb-3 ${N ? "flex-1 overflow-y-auto" : ""}`,
                  style: N ? { minHeight: "350px" } : {},
                  children: /* @__PURE__ */ n.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: y })
                }
              ),
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2 flex-wrap", children: [
                /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    onClick: re,
                    className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ n.jsx(No, { className: "w-4 h-4" }),
                      /* @__PURE__ */ n.jsx("span", { children: "Reply" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    onClick: le,
                    className: "flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ n.jsx(Ao, { className: "w-4 h-4" }),
                      /* @__PURE__ */ n.jsx("span", { children: "Reply All" })
                    ]
                  }
                ),
                /* @__PURE__ */ n.jsx(
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
    w && C && /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: L,
        className: "border-t border-gray-200 p-6 bg-gray-50",
        children: /* @__PURE__ */ n.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: g.includes("--- Reply All ---") ? "Reply to All Recipients" : g.includes("--- Forwarded Message ---") ? "Forward Message" : "Reply" }),
            /* @__PURE__ */ n.jsxs("div", { className: "text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ n.jsxs("div", { children: [
                  /* @__PURE__ */ n.jsx("span", { className: "font-medium", children: "To:" }),
                  " ",
                  g.includes("--- Reply All ---") ? (() => {
                    const X = de[de.length - 1], ye = /* @__PURE__ */ new Set([
                      ...X.to
                    ]);
                    return Array.from(ye).join(", ");
                  })() : g.includes("--- Forwarded Message ---") ? "Enter recipient email(s)" : (U = (W = de[de.length - 1]) == null ? void 0 : W.to) == null ? void 0 : U.join(
                    ", "
                  )
                ] }),
                A === "reply" && ((Fe = (ae = de[de.length - 1]) == null ? void 0 : ae.cc) == null ? void 0 : Fe.length) > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
                  /* @__PURE__ */ n.jsx("span", { className: "font-medium", children: "Cc:" }),
                  " ",
                  de[de.length - 1].cc.join(
                    ", "
                  )
                ] }),
                A === "reply-all" && ((We = (Be = de[de.length - 1]) == null ? void 0 : Be.bcc) == null ? void 0 : We.length) > 0 && /* @__PURE__ */ n.jsxs("div", { children: [
                  /* @__PURE__ */ n.jsx("span", { className: "font-medium", children: "Bcc:" }),
                  " ",
                  de[de.length - 1].bcc.join(
                    ", "
                  )
                ] })
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
                onChange: (X) => b(X.target.value),
                placeholder: `${g.includes("--- Reply All ---") ? "Write your reply to all recipients..." : g.includes("--- Forwarded Message ---") ? "Add a message to forward..." : "Write your reply..."}`,
                className: "w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              }
            )
          ] }),
          g === o.generatedReply && o.generatedReply && /* @__PURE__ */ n.jsxs("div", { className: "mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded", children: [
            /* @__PURE__ */ n.jsx(Gt, { className: "w-3 h-3" }),
            /* @__PURE__ */ n.jsx("span", { children: "Using AI-generated reply" })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: () => j(!1),
                className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ n.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: ue,
                disabled: !g.trim(),
                className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
                children: g.includes("--- Reply All ---") ? "Send to All" : g.includes("--- Forwarded Message ---") ? "Forward" : "Send Reply"
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ n.jsx(
      Vx,
      {
        isOpen: k,
        onClose: () => B(!1),
        triggerRef: Y
      }
    )
  ] }) });
}, Qx = ({
  isOpen: e,
  onClose: t,
  onSend: r,
  onSaveDraft: s,
  initialData: o,
  isPanel: c = !1
}) => {
  const [f, l] = J((o == null ? void 0 : o.to) || []), [i, a] = J((o == null ? void 0 : o.cc) || []), [u, m] = J((o == null ? void 0 : o.bcc) || []), [d, x] = J((o == null ? void 0 : o.subject) || ""), [p, g] = J((o == null ? void 0 : o.body) || ""), [b, C] = J([]), [v, y] = J(!1), [h, w] = J(!1), [j, A] = J({}), [S, D] = J(!1), [E, N] = J(!1), [_, k] = J(""), [B, R] = J(""), [P, $] = J("");
  be(() => {
    const Q = (ie) => {
      O.current && !O.current.contains(ie.target) && t();
    };
    return e && document.addEventListener("mousedown", Q), () => {
      document.removeEventListener("mousedown", Q);
    };
  }, [e, t]);
  const [L, V] = J({
    isGenerating: !1,
    showAIPanel: !1,
    generatedContent: "",
    selectedTone: "professional",
    hasGenerated: !1
  }), Y = _e(null), O = _e(null);
  be(() => {
    if (!e) return;
    const Q = setInterval(() => {
      (f.length > 0 || d.trim() || p.trim()) && ge(!0);
    }, 3e4);
    return () => clearInterval(Q);
  }, [f, d, p, e]), be(() => {
    const Q = (ie) => {
      ie.key === "Escape" && e && je();
    };
    return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
  }, [e]);
  const T = (Q) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Q.trim()), q = () => {
    const Q = {};
    if (f.length === 0)
      Q.to = "At least one recipient is required";
    else {
      const ee = f.filter((de) => !T(de));
      ee.length > 0 && (Q.to = `Invalid email addresses: ${ee.join(", ")}`);
    }
    const ie = i.filter((ee) => !T(ee));
    ie.length > 0 && (Q.cc = `Invalid CC email addresses: ${ie.join(
      ", "
    )}`);
    const oe = u.filter((ee) => !T(ee));
    return oe.length > 0 && (Q.bcc = `Invalid BCC email addresses: ${oe.join(
      ", "
    )}`), A(Q), Object.keys(Q).length === 0;
  }, I = (Q, ie, oe, ee) => {
    if (Q.endsWith(",") || Q.endsWith(";")) {
      const de = Q.slice(0, -1).trim();
      if (de && T(de)) {
        const M = [.../* @__PURE__ */ new Set([...ie, de])];
        oe(M), ee("");
      } else
        ee(Q);
    } else
      ee(Q);
  }, G = (Q, ie, oe) => {
    oe(ie.filter((ee) => ee !== Q));
  }, ne = (Q) => {
    const ie = Array.from(Q.target.files || []), oe = 25 * 1024 * 1024, ee = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain"
    ], M = ie.filter((z) => z.size > oe ? (alert(`File ${z.name} is too large. Maximum size is 25MB.`), !1) : ee.includes(z.type) ? !0 : (alert(`File type ${z.type} is not allowed.`), !1)).map((z) => ({
      file: z,
      id: Math.random().toString(36).substr(2, 9)
    }));
    C((z) => [...z, ...M]);
  }, ue = (Q) => {
    C((ie) => ie.filter((oe) => oe.id !== Q));
  }, te = (Q) => {
    if (Q === 0) return "0 Bytes";
    const ie = 1024, oe = ["Bytes", "KB", "MB", "GB"], ee = Math.floor(Math.log(Q) / Math.log(ie));
    return parseFloat((Q / Math.pow(ie, ee)).toFixed(2)) + " " + oe[ee];
  }, me = async (Q, ie = !1) => {
    if (!d.trim()) {
      alert("Please enter a subject first to generate AI content.");
      return;
    }
    V((ee) => ({ ...ee, isGenerating: !0 })), await new Promise((ee) => setTimeout(ee, 2e3));
    const oe = fe(d, Q, f);
    V((ee) => ({
      ...ee,
      isGenerating: !1,
      showAIPanel: !0,
      generatedContent: oe,
      hasGenerated: !0
    }));
  }, fe = (Q, ie, oe) => {
    const ee = Q.toLowerCase(), de = oe.length > 0 ? oe[0].split("@")[0].replace(/[._]/g, " ") : "there";
    let M = "general";
    return ee.includes("meeting") || ee.includes("schedule") || ee.includes("appointment") ? M = "meeting" : ee.includes("follow") || ee.includes("update") ? M = "followup" : ee.includes("thank") || ee.includes("appreciation") ? M = "thanks" : ee.includes("request") || ee.includes("help") || ee.includes("support") ? M = "request" : ee.includes("proposal") || ee.includes("offer") ? M = "proposal" : (ee.includes("reminder") || ee.includes("deadline")) && (M = "reminder"), K(M, ie, de, Q);
  }, K = (Q, ie, oe, ee) => {
    var M;
    const de = {
      meeting: {
        professional: `Dear ${oe},

I hope this email finds you well. I would like to schedule a meeting to discuss ${ee.toLowerCase()}.

Please let me know your availability for the following time slots:
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration] and can be conducted [in-person/virtually].

Please confirm which option works best for you, or suggest alternative times if none of these are suitable.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're doing well! I'd love to set up a meeting to chat about ${ee.toLowerCase()}.

When would be a good time for you? I'm pretty flexible, so just let me know what works best. We can do it in person or over a video call - whatever's easier for you!

Looking forward to hearing from you!

Best`,
        concise: `Hi ${oe},

Let's schedule a meeting about ${ee.toLowerCase()}.

Available times:
• [Option 1]
• [Option 2]
• [Option 3]

Please confirm your preference.

Thanks`,
        persuasive: `Dear ${oe},

I believe we have a valuable opportunity to discuss ${ee.toLowerCase()} that could benefit both of us significantly.

This meeting would allow us to:
• Explore potential synergies
• Address key challenges
• Develop actionable solutions

I'm confident that dedicating time to this discussion will yield positive results. Please let me know your availability so we can move forward promptly.

Best regards`
      },
      followup: {
        professional: `Dear ${oe},

I hope this email finds you well. I wanted to follow up on our previous discussion regarding ${ee.toLowerCase()}.

As discussed, I wanted to provide you with an update on the current status and next steps:

[Key points to address]
• [Point 1]
• [Point 2]
• [Point 3]

Please let me know if you have any questions or if there's anything else you'd like me to address.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're having a great day! Just wanted to circle back on ${ee.toLowerCase()}.

I've been thinking about our conversation and wanted to share a quick update. Things are moving along nicely, and I think you'll be pleased with the progress.

Let me know if you have any questions or if there's anything else I can help with!

Best`,
        concise: `Hi ${oe},

Quick follow-up on ${ee.toLowerCase()}:

• [Update 1]
• [Update 2]
• [Next steps]

Let me know if you need anything else.

Thanks`,
        persuasive: `Dear ${oe},

Following up on ${ee.toLowerCase()} - I believe we're at a critical juncture where swift action could maximize our success.

The momentum we've built presents an excellent opportunity to:
• Capitalize on current market conditions
• Leverage our competitive advantages
• Achieve our shared objectives

I recommend we proceed with the next phase immediately. Your prompt response would be greatly appreciated.

Best regards`
      },
      thanks: {
        professional: `Dear ${oe},

I wanted to take a moment to express my sincere gratitude regarding ${ee.toLowerCase()}.

Your [support/assistance/collaboration] has been invaluable, and I truly appreciate the time and effort you've invested. The [outcome/result] exceeded my expectations, and I couldn't have achieved this without your contribution.

Thank you once again for your professionalism and dedication.

Best regards`,
        friendly: `Hi ${oe}!

I just had to reach out and say a huge thank you for ${ee.toLowerCase()}!

You really went above and beyond, and it means so much to me. I'm incredibly grateful for all your help and support. You're absolutely amazing!

Thanks again for everything!

With appreciation`,
        concise: `Hi ${oe},

Thank you for ${ee.toLowerCase()}.

Your help was invaluable and greatly appreciated.

Best regards`,
        persuasive: `Dear ${oe},

Your exceptional contribution to ${ee.toLowerCase()} deserves special recognition.

The impact of your work has been transformative, demonstrating the value of our collaboration. I believe this success positions us perfectly for future opportunities together.

I would welcome the chance to discuss how we can build on this momentum.

With sincere appreciation`
      },
      request: {
        professional: `Dear ${oe},

I hope this email finds you well. I am writing to request your assistance with ${ee.toLowerCase()}.

Specifically, I would appreciate your help with:
• [Specific request 1]
• [Specific request 2]
• [Timeline/deadline]

I understand you have a busy schedule, but your expertise in this area would be invaluable. Please let me know if this is something you would be able to assist with.

Thank you for considering my request.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're doing well! I'm reaching out because I could really use your help with ${ee.toLowerCase()}.

I know you're super busy, but you're honestly the best person I can think of for this. Would you be able to lend a hand? I'd really appreciate any assistance you can provide!

Let me know what you think!

Thanks so much`,
        concise: `Hi ${oe},

I need assistance with ${ee.toLowerCase()}.

Requirements:
• [Item 1]
• [Item 2]
• [Deadline]

Can you help?

Thanks`,
        persuasive: `Dear ${oe},

I have an exciting opportunity that aligns perfectly with your expertise: ${ee.toLowerCase()}.

This request represents a chance to:
• Showcase your exceptional skills
• Make a significant impact
• Contribute to a meaningful outcome

Your unique qualifications make you the ideal person for this. I'm confident that your involvement would ensure success.

Would you be interested in discussing this further?

Best regards`
      },
      general: {
        professional: `Dear ${oe},

I hope this email finds you well. I am writing to you regarding ${ee.toLowerCase()}.

[Please provide specific details about your message here]

I would appreciate your thoughts on this matter and look forward to your response.

Best regards`,
        friendly: `Hi ${oe}!

Hope you're having a great day! I wanted to reach out about ${ee.toLowerCase()}.

[Add your personal message here]

Let me know what you think!

Best`,
        concise: `Hi ${oe},

Regarding ${ee.toLowerCase()}:

[Your message here]

Please let me know your thoughts.

Thanks`,
        persuasive: `Dear ${oe},

I'm reaching out about an important matter: ${ee.toLowerCase()}.

This presents a valuable opportunity that I believe deserves your immediate attention. The potential benefits are significant, and I'm confident you'll find this compelling.

I would appreciate the opportunity to discuss this with you further.

Best regards`
      }
    };
    return ((M = de[Q]) == null ? void 0 : M[ie]) || de.general[ie];
  }, re = () => {
    g(L.generatedContent), V((Q) => ({ ...Q, showAIPanel: !1 }));
  }, le = () => {
    me(L.selectedTone, !0);
  }, xe = (Q) => {
    V((ie) => ({ ...ie, selectedTone: Q }));
  }, Ce = async () => {
    if (q()) {
      D(!0);
      try {
        const Q = {
          to: f,
          cc: i,
          bcc: u,
          subject: d,
          body: p,
          attachments: b.map((ie) => ie.file)
        };
        await r(Q), je();
      } catch (Q) {
        console.error("Failed to send email:", Q);
      } finally {
        D(!1);
      }
    }
  }, ge = async (Q = !1) => {
    Q || N(!0);
    try {
      const ie = {
        to: f,
        cc: i,
        bcc: u,
        subject: d,
        body: p,
        attachments: b.map((oe) => oe.file)
      };
      await s(ie), Q || je();
    } catch (ie) {
      console.error("Failed to save draft:", ie);
    } finally {
      Q || N(!1);
    }
  }, je = () => {
    if ((f.length > 0 || d.trim() || p.trim() || b.length > 0) && window.confirm(
      "You have unsaved changes. Would you like to save this as a draft before closing?"
    )) {
      ge();
      return;
    }
    l([]), a([]), m([]), x(""), g(""), C([]), k(""), R(""), $(""), y(!1), w(!1), A({}), V({
      isGenerating: !1,
      showAIPanel: !1,
      generatedContent: "",
      selectedTone: "professional",
      hasGenerated: !1
    }), t();
  };
  if (!e) return null;
  const Ae = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ n.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: c ? "Compose" : "New Message" }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: je,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ n.jsx(Qe, { className: "w-5 h-5 text-gray-500" })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ n.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "To:" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            f.map((Q, ie) => /* @__PURE__ */ n.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md",
                children: [
                  Q,
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => G(Q, f, l),
                      className: "ml-1 text-blue-600 hover:text-blue-800",
                      children: /* @__PURE__ */ n.jsx(Qe, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ie
            )),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "text",
                value: _,
                onChange: (Q) => I(Q.target.value, f, l, k),
                onKeyDown: (Q) => {
                  Q.key === "Enter" && (Q.preventDefault(), _.trim() && T(_.trim()) && (l([...f, _.trim()]), k("")));
                },
                placeholder: f.length === 0 ? "Enter email addresses..." : "",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.to && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.to })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => y(!v),
              className: `text-sm px-2 py-1 rounded transition-colors ${v ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
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
      v && /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Cc:" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            i.map((Q, ie) => /* @__PURE__ */ n.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  Q,
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => G(Q, i, a),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ n.jsx(Qe, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ie
            )),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "text",
                value: B,
                onChange: (Q) => I(Q.target.value, i, a, R),
                onKeyDown: (Q) => {
                  Q.key === "Enter" && (Q.preventDefault(), B.trim() && T(B.trim()) && (a([...i, B.trim()]), R("")));
                },
                placeholder: "Enter CC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.cc && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.cc })
        ] })
      ] }),
      h && /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Bcc:" }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            u.map((Q, ie) => /* @__PURE__ */ n.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  Q,
                  /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      onClick: () => G(Q, u, m),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ n.jsx(Qe, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ie
            )),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "text",
                value: P,
                onChange: (Q) => I(Q.target.value, u, m, $),
                onKeyDown: (Q) => {
                  Q.key === "Enter" && (Q.preventDefault(), P.trim() && T(P.trim()) && (m([...u, P.trim()]), $("")));
                },
                placeholder: "Enter BCC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.bcc && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.bcc })
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
              onChange: (Q) => x(Q.target.value),
              placeholder: "Enter subject...",
              className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          d.trim() && /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: () => me(L.selectedTone),
              disabled: L.isGenerating,
              className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ n.jsx(Gt, { className: "w-4 h-4" }),
                /* @__PURE__ */ n.jsx("span", { children: L.isGenerating ? "Generating..." : "Generate with AI" })
              ]
            }
          )
        ] })
      ] }),
      L.showAIPanel && /* @__PURE__ */ n.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsx(Gt, { className: "w-4 h-4 text-purple-600" }),
            /* @__PURE__ */ n.jsx("span", { className: "font-semibold text-gray-900", children: "AI Generated Content" })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsxs(
              "select",
              {
                value: L.selectedTone,
                onChange: (Q) => xe(Q.target.value),
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
                onClick: le,
                disabled: L.isGenerating,
                className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                title: "Regenerate with selected tone",
                children: /* @__PURE__ */ n.jsx(As, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "bg-white border border-gray-200 rounded p-3 mb-3 max-h-48 overflow-y-auto", children: /* @__PURE__ */ n.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: L.generatedContent }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: re,
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
              onClick: () => V((Q) => ({ ...Q, showAIPanel: !1 })),
              className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
              children: "Dismiss"
            }
          )
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ n.jsxs("div", { className: "border border-gray-200 rounded-lg p-3", children: [
        /* @__PURE__ */ n.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments" }),
        /* @__PURE__ */ n.jsx("div", { className: "space-y-2", children: b.map((Q) => /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-2 bg-gray-50 rounded-md",
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx(js, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ n.jsx("span", { className: "text-sm text-gray-700", children: Q.file.name }),
                /* @__PURE__ */ n.jsxs("span", { className: "text-xs text-gray-500", children: [
                  "(",
                  te(Q.file.size),
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: () => ue(Q.id),
                  className: "text-red-500 hover:text-red-700",
                  children: /* @__PURE__ */ n.jsx(ln, { className: "w-4 h-4" })
                }
              )
            ]
          },
          Q.id
        )) })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ n.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Message:" }),
          p === L.generatedContent && L.generatedContent && /* @__PURE__ */ n.jsxs("div", { className: "text-sm text-purple-600 flex items-center space-x-1", children: [
            /* @__PURE__ */ n.jsx(Gt, { className: "w-3 h-3" }),
            /* @__PURE__ */ n.jsx("span", { children: "Using AI-generated content" })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "textarea",
          {
            value: p,
            onChange: (Q) => g(Q.target.value),
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
              var Q;
              return (Q = Y.current) == null ? void 0 : Q.click();
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(js, { className: "w-4 h-4" }),
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
            onChange: ne,
            className: "hidden",
            accept: ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: je,
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
              /* @__PURE__ */ n.jsx(xc, { className: "w-4 h-4" }),
              /* @__PURE__ */ n.jsx("span", { children: E ? "Saving..." : "Save Draft" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: Ce,
            disabled: S || f.length === 0,
            className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ n.jsx(Us, { className: "w-4 h-4" }),
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
      ref: O,
      className: "fixed top-0 right-0 w-[500px] h-full bg-white border-l border-gray-200 shadow-xl flex flex-col z-40 transform transition-transform duration-300 ease-in-out",
      style: { transform: "translateX(0)" },
      children: /* @__PURE__ */ n.jsx(Ae, {})
    }
  ) : /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: O,
      className: "bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col",
      children: /* @__PURE__ */ n.jsx(Ae, {})
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
  const [f, l] = J(""), [i, a] = J(kn[0]), [u, m] = J(""), [d, x] = J(null), [p, g] = J(""), [b, C] = J(""), [v, y] = J(""), [h, w] = J({}), j = _e(null);
  be(() => {
    const B = (R) => {
      R.key === "Escape" && e && t();
    };
    return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [e, t]);
  const A = (B, R) => B.trim() ? B.trim().length < 2 ? (w(($) => ({ ...$, name: "Label name must be at least 2 characters" })), !1) : B.trim().length > 20 ? (w(($) => ({ ...$, name: "Label name must be less than 20 characters" })), !1) : r.find(
    ($) => $.name.toLowerCase() === B.trim().toLowerCase() && $.id !== R
  ) ? (w(($) => ({ ...$, name: "A label with this name already exists" })), !1) : (w(($) => ({ ...$, name: "" })), !0) : (w(($) => ({ ...$, name: "Label name is required" })), !1), S = () => {
    A(f) && (s({
      name: f.trim(),
      color: i,
      description: u.trim() || void 0,
      isSystem: !1
    }), l(""), a(kn[0]), m(""), w({}));
  }, D = (B) => {
    x(B.id), g(B.name), C(B.color), y(B.description || ""), w({});
  }, E = () => {
    d && A(p, d) && (o(d, {
      name: p.trim(),
      color: b,
      description: v.trim() || void 0
    }), x(null), g(""), C(""), y(""), w({}));
  }, N = () => {
    x(null), g(""), C(""), y(""), w({});
  }, _ = (B) => {
    const R = r.find(($) => $.id === B);
    if (!R) return;
    const P = R.isSystem ? `Are you sure you want to delete the system label "${R.name}"? This action cannot be undone.` : `Are you sure you want to delete the label "${R.name}"? This will remove it from all emails.`;
    window.confirm(P) && c(B);
  }, k = ({ selectedColor: B, onColorChange: R, className: P = "" }) => /* @__PURE__ */ n.jsx("div", { className: `flex flex-wrap gap-2 ${P}`, children: kn.map(($) => /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => R($),
      className: `w-6 h-6 rounded-full border-2 transition-all ${B === $ ? "border-gray-800 scale-110" : "border-gray-300 hover:border-gray-500"}`,
      style: { backgroundColor: $ },
      title: `Select ${$}`
    },
    $
  )) });
  return e ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: j,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col",
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ n.jsx(Gr, { className: "w-5 h-5 text-gray-600" }),
            /* @__PURE__ */ n.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Manage Labels" })
          ] }),
          /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: t,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ n.jsx(Qe, { className: "w-5 h-5 text-gray-500" })
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
                    l(B.target.value), h.name && A(B.target.value);
                  },
                  onBlur: () => A(f),
                  placeholder: "Enter label name...",
                  className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${h.name ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`,
                  maxLength: 20
                }
              ),
              h.name && /* @__PURE__ */ n.jsxs("p", { className: "text-red-500 text-sm mt-1 flex items-center", children: [
                /* @__PURE__ */ n.jsx(V0, { className: "w-3 h-3 mr-1" }),
                h.name
              ] })
            ] }),
            /* @__PURE__ */ n.jsxs("div", { children: [
              /* @__PURE__ */ n.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
                /* @__PURE__ */ n.jsx(cc, { className: "w-4 h-4 inline mr-1" }),
                "Color"
              ] }),
              /* @__PURE__ */ n.jsx(
                k,
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
                  /* @__PURE__ */ n.jsx(Qr, { className: "w-4 h-4" }),
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
              /* @__PURE__ */ n.jsx(Gr, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
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
                          onChange: (R) => {
                            g(R.target.value), h.name && A(R.target.value, B.id);
                          },
                          onBlur: () => A(p, B.id),
                          className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${h.name ? "border-red-300" : "border-gray-300"}`,
                          maxLength: 20
                        }
                      ),
                      h.name && /* @__PURE__ */ n.jsx("p", { className: "text-red-500 text-xs mt-1", children: h.name })
                    ] }),
                    /* @__PURE__ */ n.jsx(
                      k,
                      {
                        selectedColor: b,
                        onColorChange: C,
                        className: "flex-shrink-0"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ n.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (R) => y(R.target.value),
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
                          /* @__PURE__ */ n.jsx(ri, { className: "w-4 h-4" }),
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
                        children: /* @__PURE__ */ n.jsx(dc, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        onClick: () => _(B.id),
                        className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        title: "Delete label",
                        children: /* @__PURE__ */ n.jsx(ln, { className: "w-4 h-4" })
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
  const [e, t] = J("inbox"), [r, s] = J(null), [o, c] = J(!1), [f, l] = S0(), [i, a] = J([]), [u, m] = J([]), [d, x] = J(Gi), [p, g] = J(/* @__PURE__ */ new Set()), [b, C] = J(""), [v, y] = J({
    readStatus: "all",
    starred: !1,
    hasAttachment: !1,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all"
  });
  be(() => {
    localStorage.getItem("user") || (localStorage.setItem(
      "user",
      '"K6L7I5e3R/pyUXXfAkYb2QV5/WIYawnYYAclNRe35oYNm2KluQtzHo41AXUFB4yHoVJrg/qtj7MJdS/5ZZkfuTBCMXVuZtL8rjrpvePcWUfDJDKgL6PtG4gNp8+qPUwXELEHDiOA/AIn6RaTQNVd5kT2IFS9j0BsgqKMwyd/QFWbrJlwW40wFadaO+xHNur1JdzR66GDRbu+EBmcLijmxQ=="'
    ), localStorage.setItem("project", "4"));
  }, []);
  const [h, w] = J({
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  });
  be(() => {
    f({});
  }, []), be(() => {
    f({});
    const M = setInterval(() => {
      f({});
    }, 3e5);
    return () => clearInterval(M);
  }, [f]), be(() => {
    var M, z, W;
    if (l != null && l.isSuccess) {
      const U = (W = (z = (M = l == null ? void 0 : l.data) == null ? void 0 : M.response) == null ? void 0 : z.data) == null ? void 0 : W.results;
      if (U && Array.isArray(U)) {
        a(
          U.map((Be) => ({
            ...Be,
            intentLabel: Be.labels || "new"
          }))
        );
        const ae = U.filter((Be) => Be.is_deleted).map((Be) => Be.message_id), Fe = U.filter((Be) => ae.includes(Be.message_id)).map((Be) => ({
          ...Be,
          intentLabel: Be.labels || "new"
        }));
        m(Fe);
      }
    }
  }, [l]);
  const [j, A] = J(!1), [S, D] = J(!1), [E, N] = J(!1), [_, k] = J(null), B = () => {
    const M = {};
    return M.inbox = (i == null ? void 0 : i.filter(
      (z) => (!z.is_read || z.is_read) && !z.is_deleted
    ).length) || 0, M.starred = (i == null ? void 0 : i.filter((z) => z.is_starred).length) || 0, M.snoozed = 0, M.bin = u.filter((z) => z.is_deleted).length || 0, i == null || i.forEach((z) => {
      if (z.labels && z.labels.length > 0) {
        let W = [];
        switch (i == null || i.map((U) => ({
          ...U,
          emailsOnly: U.to
        })), z.labels[0]) {
          case "work":
            W = i.filter(
              (U) => {
                var ae;
                return ((ae = U.customLabels) == null ? void 0 : ae.includes("work")) || U.from_address.includes("company.com") || U.from_address.includes("techcorp.com") || U.from_address.includes("consulting.com") || U.from_address.includes("design.studio");
              }
            );
            break;
          case "personal":
            W = i.filter(
              (U) => {
                var ae;
                return ((ae = U.customLabels) == null ? void 0 : ae.includes("personal")) || U.subject.toLowerCase().includes("welcome") || U.from_address.includes("startup.io");
              }
            );
            break;
          case "important":
            W = i.filter(
              (U) => {
                var ae;
                return ((ae = U.customLabels) == null ? void 0 : ae.includes("important")) || U.subject.toLowerCase().includes("urgent") || U.subject.toLowerCase().includes("important") || U.is_starred;
              }
            );
            break;
          case "travel":
            W = i.filter(
              (U) => {
                var ae;
                return (ae = U.customLabels) == null ? void 0 : ae.includes("travel");
              }
            );
            break;
        }
        M[`label-${z.id}`] = W.filter(
          (U) => !U.is_read
        ).length;
      } else {
        const W = i.filter(
          (U) => {
            var ae;
            return (ae = U.customLabels) == null ? void 0 : ae.includes(z.id);
          }
        );
        M[`custom-label-${z.id}`] = W.filter(
          (U) => !U.is_read
        ).length;
      }
    }), M;
  };
  Me(() => B(), [i, d, u]);
  const R = (M) => {
    let z = [...M];
    return v.readStatus === "read" ? z = z.filter((W) => W.is_read === !0) : v.readStatus === "unread" ? z = z.filter((W) => W.is_read === !1) : v.readStatus === "all" && (z = M), v.starred && (z = z.filter((W) => W.is_starred)), v.hasAttachment && (z = z.filter(
      (W) => W.messages.some(
        (U) => U.content.toLowerCase().includes("attach") || U.content.toLowerCase().includes("file") || U.content.toLowerCase().includes("document")
      )
    )), (v.dateRange.from || v.dateRange.to) && (z = z.filter((W) => {
      const U = new Date(W.created_at), ae = v.dateRange.from ? new Date(v.dateRange.from) : null, Fe = v.dateRange.to ? /* @__PURE__ */ new Date(v.dateRange.to + "T23:59:59") : null;
      return (!ae || U >= ae) && (!Fe || U <= Fe);
    })), v.intent !== "all" && (z = z.filter((W) => {
      if (W.labels)
        switch (v.intent) {
          case "meetings":
            return W.labels === "meeting";
          case "notifications":
            return W.labels === "system";
          case "campaigns":
            return W.labels === "announcement";
          case "support":
            return W.labels === "feedback";
          default:
            return !0;
        }
      const U = W.labels || "new", ae = `${W.subject} ${W == null ? void 0 : W.snippet}`.toLowerCase();
      switch (v.intent) {
        case "meetings":
          return U === "meeting" || ae.includes("meeting") || ae.includes("schedule") || ae.includes("appointment");
        case "notifications":
          return U === "system" || ae.includes("notification") || ae.includes("system") || ae.includes("alert");
        case "campaigns":
          return U === "announcement" || ae.includes("newsletter") || ae.includes("campaign") || ae.includes("marketing");
        case "support":
          return U === "feedback" || ae.includes("support") || ae.includes("help") || ae.includes("issue");
        case "new":
          return U === "new";
        default:
          return U === "general";
      }
    })), z.sort((W, U) => {
      switch (v.sortBy) {
        case "oldest":
          return new Date(W.created_at).getTime() - new Date(U.created_at).getTime();
        case "newest":
          return new Date(U.created_at).getTime() - new Date(W.created_at).getTime();
        case "subject-az":
          return W.subject.localeCompare(U.subject);
        case "subject-za":
          return U.subject.localeCompare(W.subject);
        case "sender-az":
          return W.sender.localeCompare(U.from_address);
        case "sender-za":
          return U.sender.localeCompare(W.from_address);
        case "starred-first":
          return W.is_starred && !U.is_starred ? -1 : !W.is_starred && U.is_starred ? 1 : new Date(U.created_at).getTime() - new Date(W.created_at).getTime();
        default:
          return new Date(U.created_at).getTime() - new Date(W.created_at).getTime();
      }
    }), console.log(z), z;
  }, P = Me(() => i == null ? void 0 : i.map((M) => ({
    ...M,
    messages: M.messages || [],
    conversationEmails: [M]
    // Each email is its own conversation
  })).sort(
    (M, z) => new Date(z.created_at).getTime() - new Date(M.created_at).getTime()
  ), [i]), $ = Me(() => {
    let M = P;
    switch (e) {
      case "inbox":
        M = P == null ? void 0 : P.filter((z) => !z.is_deleted);
        break;
      case "starred":
        M = P == null ? void 0 : P.filter((z) => z.is_starred);
        break;
      case "snoozed":
        M = [];
        break;
      case "bin":
        M = (u == null ? void 0 : u.map((z) => ({
          ...z,
          messages: z.messages || [],
          conversationEmails: [z]
        }))) || [];
        break;
      case "label-work":
        M = P.filter(
          (z) => {
            var W;
            return ((W = z.customLabels) == null ? void 0 : W.includes("work")) || z.subject.toLowerCase().includes("project") || z.subject.toLowerCase().includes("meeting") || z.subject.toLowerCase().includes("campaign") || z.from_address.includes("company.com") || z.from_address.includes("techcorp.com");
          }
        );
        break;
      case "label-personal":
        M = P.filter(
          (z) => {
            var W;
            return ((W = z.customLabels) == null ? void 0 : W.includes("personal")) || z.subject.toLowerCase().includes("welcome") || z.from_address.includes("startup.io");
          }
        );
        break;
      case "label-important":
        M = P.filter(
          (z) => {
            var W;
            return ((W = z.customLabels) == null ? void 0 : W.includes("important")) || z.subject.toLowerCase().includes("urgent") || z.subject.toLowerCase().includes("important") || z.is_starred;
          }
        );
        break;
      case "label-travel":
        M = P == null ? void 0 : P.filter(
          (z) => {
            var W;
            return (W = z.customLabels) == null ? void 0 : W.includes("travel");
          }
        );
        break;
      default:
        if (e.startsWith("custom-label-")) {
          const z = e.replace("custom-label-", "");
          M = P == null ? void 0 : P.filter(
            (W) => {
              var U;
              return (U = W.customLabels) == null ? void 0 : U.includes(z);
            }
          );
        }
        break;
    }
    if (b.trim()) {
      const z = b.toLowerCase();
      M = M == null ? void 0 : M.filter(
        (W) => W.subject.toLowerCase().includes(z) || W.from_adress.toLowerCase().includes(z) || W.preview.toLowerCase().includes(z) || W.messages.some(
          (U) => U.content.toLowerCase().includes(z)
        ) || // Search in custom labels
        W.customLabels && W.customLabels.some((U) => {
          const ae = d.find((Fe) => Fe.id === U);
          return ae == null ? void 0 : ae.name.toLowerCase().includes(z);
        })
      );
    }
    return M = R(M || []), M;
  }, [
    i,
    e,
    b,
    v,
    d,
    P,
    u
  ]), L = (M, z = !1) => {
    s(M), D(z), a(
      (W) => W == null ? void 0 : W.map(
        (U) => U.message_id === M.message_id ? { ...U, is_read: !0 } : U
      )
    );
  }, V = () => {
    D(!1);
  }, Y = (M) => {
    const z = i == null ? void 0 : i.find((U) => U.message_id === M);
    if (!z) return;
    const W = [
      { id: z.message_id, is_starred: z.is_starred }
    ];
    k({
      type: "star",
      emailIds: [M],
      previousState: W
    }), a(
      (U) => U == null ? void 0 : U.map(
        (ae) => ae.message_id === M ? { ...ae, is_starred: !ae.is_starred } : ae
      )
    ), e === "starred" && !z.is_starred && (r == null ? void 0 : r.id) === M && s(null);
  }, O = (M) => {
    console.log("toggle", M), g((z) => {
      const W = new Set(z);
      return W.has(M) ? W.delete(M) : W.add(M), W;
    });
  }, T = () => {
    c(!o);
  }, q = (M) => {
    C(M);
  }, I = (M) => {
    y(M);
  }, G = () => {
    N(!0);
  }, ne = () => {
    N(!1);
  }, ue = async (M) => {
    console.log("Sending email:", M), await new Promise((z) => setTimeout(z, 1e3)), alert("Email sent successfully!"), N(!1);
  }, te = async (M) => {
    console.log("Saving draft:", M), await new Promise((z) => setTimeout(z, 500)), (M.to.length > 0 || M.subject.trim() || M.body.trim()) && alert("Draft saved successfully!"), N(!1);
  }, me = (M) => {
    const z = {
      ...M,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    x((W) => [...W, z]), console.log("Creating label:", z);
  }, fe = (M, z) => {
    x(
      (W) => W.map(
        (U) => U.id === M ? { ...U, ...z } : U
      )
    ), console.log("Updating label:", M, z);
  }, K = (M) => {
    a(
      (z) => z == null ? void 0 : z.map((W) => {
        var U;
        return {
          ...W,
          customLabels: ((U = W.customLabels) == null ? void 0 : U.filter((ae) => ae !== M)) || []
        };
      })
    ), x((z) => z.filter((W) => W.id !== M)), e === `custom-label-${M}` && t("inbox"), console.log("Deleting label:", M);
  }, re = (M, z) => {
    a(
      (W) => W.map(
        (U) => M.includes(U.message_id) ? { ...U, customLabels: z } : U
      )
    ), g(/* @__PURE__ */ new Set()), console.log(`Updated labels for ${M.length} emails:`, z);
  }, le = (M, z) => {
    var U;
    const W = (U = i == null ? void 0 : i.filter((ae) => M.includes(ae.message_id))) == null ? void 0 : U.map((ae) => ({ id: ae.message_id, is_read: ae.is_read }));
    k({
      type: "markAsRead",
      emailIds: M,
      previousState: W
    }), a(
      (ae) => ae == null ? void 0 : ae.map(
        (Fe) => M.includes(Fe.message_id) ? { ...Fe, is_read: z } : Fe
      )
    ), g(/* @__PURE__ */ new Set()), console.log(
      `Marked ${M.length} emails as ${z ? "read" : "unread"}`
    );
  }, xe = (M) => {
    const z = i == null ? void 0 : i.filter(
      (U) => M.includes(U.message_id)
    );
    k({
      type: "delete",
      emailIds: M,
      previousState: z
    });
    const W = i.filter((U) => M.includes(U.message_id)).map((U) => ({ ...U, is_deleted: !0 }));
    m((U) => [...U, ...W]), a(
      (U) => U.map(
        (ae) => M.includes(ae.message_id) ? { ...ae, is_deleted: !0 } : ae
      )
    ), g(/* @__PURE__ */ new Set()), r && M.includes(r.message_id) && s(null), console.log(`Deleted ${M} emails`);
  }, Ce = () => {
    const M = $.map((z) => z.message_id);
    g(new Set(M));
  }, ge = () => {
    g(/* @__PURE__ */ new Set());
  }, je = (M) => {
    const z = i == null ? void 0 : i.find((W) => W.message_id === M);
    z && (m((W) => [...W, z]), a(
      (W) => W == null ? void 0 : W.map(
        (U) => U.message_id === M ? { ...U, is_deleted: !U.is_deleted } : U
      )
    ), r && r.message_id === M && s(null), console.log(`Email moved to bin: ${z.subject}`));
  }, Ae = (M) => {
    const z = u.find(
      (W) => W.message_id === M
    );
    z && (a((W) => [...W, z]), m(
      (W) => W.filter((U) => U.message_id !== M)
    ), r && r.message_id === M && s(null), console.log(`Email restored from bin: ${z.subject}`));
  }, Q = (M) => {
    const z = u.filter(
      (W) => M.includes(W.message_id)
    );
    a((W) => [...W, ...z]), m(
      (W) => W.filter((U) => !M.includes(U.message_id))
    ), g(/* @__PURE__ */ new Set()), r && M.includes(r.message_id) && s(null), console.log(`Restored ${M.length} emails from bin`);
  }, ie = () => {
    if (_) {
      switch (_.type) {
        case "markAsRead":
          a(
            (M) => M == null ? void 0 : M.map((z) => {
              const W = _.previousState.find(
                (U) => U.id === z.message_id
              );
              return W ? { ...z, is_read: W.is_read } : z;
            })
          );
          break;
        case "delete":
          a((M) => [
            ...M,
            ..._.previousState
          ]);
          break;
        case "star":
          a(
            (M) => M == null ? void 0 : M.map((z) => {
              const W = _.previousState.find(
                (U) => U.id === z.message_id
              );
              return W ? { ...z, is_starred: W.is_starred } : z;
            })
          );
          break;
      }
      k(null), console.log("Undid last action");
    }
  }, oe = (M) => h || {
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  }, ee = (M, z) => {
    w((W) => ({
      ...W,
      [M]: z
    }));
  }, de = async (M, z = "professional", W = "reply") => {
    const U = oe(M.message_id);
    ee(M.message_id, {
      ...U,
      isGenerating: !0,
      showAiReply: !1,
      replyType: W
    }), await new Promise((Be) => setTimeout(Be, 2e3)), console.log(M);
    let ae = "";
    const Fe = i[i.length - 1];
    W && (ae = Fe == null ? void 0 : Fe.ai_response), w((Be) => ({
      ...Be,
      isGenerating: !1,
      showAiReply: !0,
      generatedReply: ae,
      tone: z
    }));
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "h-screen flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ n.jsx(
      Ac,
      {
        onMenuToggle: T,
        onSearch: q,
        onFiltersChange: I,
        filters: v,
        checkedEmails: p,
        onBulkMarkAsRead: le,
        onBulkDelete: xe,
        onSelectAll: Ce,
        onUnselectAll: ge,
        onUndo: ie,
        hasSelection: p.size > 0,
        onComposeClick: G
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 flex overflow-hidden", children: (l == null ? void 0 : l.isSuccess) && /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "flex-1 flex min-w-0 transition-all duration-200",
        children: S ? /* @__PURE__ */ n.jsx(
          Xa,
          {
            email: r,
            onClose: () => s(null),
            onBack: V,
            isFullPage: !0,
            aiReplyState: oe((r == null ? void 0 : r.message_id) || ""),
            onGenerateAiReply: de,
            onAiReplyStateChange: (M) => (r == null ? void 0 : r.message_id) && ee(r.message_id, M),
            customLabels: d,
            onEmailLabelsChange: re,
            onCreateLabel: me,
            onDeleteEmail: je,
            onRestoreEmail: Ae,
            activeSection: e
          }
        ) : /* @__PURE__ */ n.jsxs("div", { className: "flex flex-1 h-full", children: [
          l != null && l.isLoading || l != null && l.isFetching ? /* @__PURE__ */ n.jsx(Nc, {}) : /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "flex-shrink-0",
              children: /* @__PURE__ */ n.jsx(
                Wx,
                {
                  emails: $,
                  selectedEmailId: (r == null ? void 0 : r.message_id) || null,
                  onEmailSelect: L,
                  onStarToggle: Y,
                  onCheckToggle: O,
                  checkedEmails: p,
                  activeSection: e,
                  customLabels: d,
                  onEmailLabelsChange: re,
                  onCreateLabel: me,
                  onBulkMarkAsRead: le,
                  onBulkDelete: xe,
                  onBulkRestore: Q,
                  onSelectAll: Ce,
                  onUnselectAll: ge,
                  setEmails: a,
                  readStatus: v == null ? void 0 : v.readStatus
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            Xa,
            {
              email: r,
              onClose: () => s(null),
              isFullPage: !1,
              aiReplyState: oe((r == null ? void 0 : r.id) || ""),
              onGenerateAiReply: de,
              onAiReplyStateChange: (M) => (r == null ? void 0 : r.message_id) && ee(r.message_id, M),
              customLabels: d,
              onEmailLabelsChange: re,
              onCreateLabel: me,
              onDeleteEmail: je,
              onRestoreEmail: Ae,
              activeSection: e,
              onStarToggle: Y
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ n.jsx(
      Kx,
      {
        isOpen: j,
        onClose: () => A(!1),
        labels: d,
        onCreateLabel: me,
        onUpdateLabel: fe,
        onDeleteLabel: K
      }
    ),
    E && /* @__PURE__ */ n.jsx(
      Qx,
      {
        isOpen: E,
        onClose: ne,
        onSend: ue,
        onSaveDraft: te,
        isPanel: !0
      }
    )
  ] });
}
const Yx = {
  [cn.reducerPath]: cn.reducer
}, Xx = (e) => e().concat(cn.middleware), nh = Vd({
  reducer: {
    ...Yx
  },
  middleware: Xx
}), sh = () => /* @__PURE__ */ n.jsx(Gx, {});
export {
  cn as InboxService,
  sh as default,
  Xx as inboxServiceMiddleware,
  Yx as inboxServiceReducer,
  nh as store
};
