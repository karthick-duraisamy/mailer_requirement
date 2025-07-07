var Po = Object.defineProperty;
var Io = (e, r, n) => r in e ? Po(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n;
var xr = (e, r, n) => Io(e, typeof r != "symbol" ? r + "" : r, n);
import * as bt from "react";
import St, { forwardRef as Mo, createElement as gs, useState as J, useRef as Be, useEffect as be, useCallback as ut, useMemo as We, useDebugValue as $r, useLayoutEffect as Lo } from "react";
var ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function qo(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var n = function s() {
      return this instanceof s ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(s) {
    var o = Object.getOwnPropertyDescriptor(e, s);
    Object.defineProperty(n, s, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[s];
      }
    });
  }), n;
}
var zn = { exports: {} }, Wt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ys;
function $o() {
  if (ys) return Wt;
  ys = 1;
  var e = St, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(u, d, a) {
    var l, w = {}, i = null, f = null;
    a !== void 0 && (i = "" + a), d.key !== void 0 && (i = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (l in d) s.call(d, l) && !m.hasOwnProperty(l) && (w[l] = d[l]);
    if (u && u.defaultProps) for (l in d = u.defaultProps, d) w[l] === void 0 && (w[l] = d[l]);
    return { $$typeof: r, type: u, key: i, ref: f, props: w, _owner: o.current };
  }
  return Wt.Fragment = n, Wt.jsx = b, Wt.jsxs = b, Wt;
}
var Qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function Ho() {
  return vs || (vs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = St, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), i = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function y(F) {
      if (F === null || typeof F != "object")
        return null;
      var X = p && F[p] || F[g];
      return typeof X == "function" ? X : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(F) {
      {
        for (var X = arguments.length, re = new Array(X > 1 ? X - 1 : 0), de = 1; de < X; de++)
          re[de - 1] = arguments[de];
        x("error", F, re);
      }
    }
    function x(F, X, re) {
      {
        var de = E.ReactDebugCurrentFrame, je = de.getStackAddendum();
        je !== "" && (X += "%s", re = re.concat([je]));
        var we = re.map(function(ge) {
          return String(ge);
        });
        we.unshift("Warning: " + X), Function.prototype.apply.call(console[F], console, we);
      }
    }
    var c = !1, h = !1, j = !1, k = !1, B = !1, A;
    A = Symbol.for("react.module.reference");
    function C(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === s || F === m || B || F === o || F === a || F === l || k || F === f || c || h || j || typeof F == "object" && F !== null && (F.$$typeof === i || F.$$typeof === w || F.$$typeof === b || F.$$typeof === u || F.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === A || F.getModuleId !== void 0));
    }
    function N(F, X, re) {
      var de = F.displayName;
      if (de)
        return de;
      var je = X.displayName || X.name || "";
      return je !== "" ? re + "(" + je + ")" : re;
    }
    function _(F) {
      return F.displayName || "Context";
    }
    function D(F) {
      if (F == null)
        return null;
      if (typeof F.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof F == "function")
        return F.displayName || F.name || null;
      if (typeof F == "string")
        return F;
      switch (F) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case m:
          return "Profiler";
        case o:
          return "StrictMode";
        case a:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case u:
            var X = F;
            return _(X) + ".Consumer";
          case b:
            var re = F;
            return _(re._context) + ".Provider";
          case d:
            return N(F, F.render, "ForwardRef");
          case w:
            var de = F.displayName || null;
            return de !== null ? de : D(F.type) || "Memo";
          case i: {
            var je = F, we = je._payload, ge = je._init;
            try {
              return D(ge(we));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, R = 0, M, H, U, V, K, O, T;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function P() {
      {
        if (R === 0) {
          M = console.log, H = console.info, U = console.warn, V = console.error, K = console.group, O = console.groupCollapsed, T = console.groupEnd;
          var F = {
            configurable: !0,
            enumerable: !0,
            value: z,
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
    function W() {
      {
        if (R--, R === 0) {
          var F = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, F, {
              value: M
            }),
            info: S({}, F, {
              value: H
            }),
            warn: S({}, F, {
              value: U
            }),
            error: S({}, F, {
              value: V
            }),
            group: S({}, F, {
              value: K
            }),
            groupCollapsed: S({}, F, {
              value: O
            }),
            groupEnd: S({}, F, {
              value: T
            })
          });
        }
        R < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = E.ReactCurrentDispatcher, oe;
    function te(F, X, re) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (je) {
            var de = je.stack.trim().match(/\n( *(at )?)/);
            oe = de && de[1] || "";
          }
        return `
` + oe + F;
      }
    }
    var me = !1, Z;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new ue();
    }
    function Ee(F, X) {
      if (!F || me)
        return "";
      {
        var re = Z.get(F);
        if (re !== void 0)
          return re;
      }
      var de;
      me = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var we;
      we = ne.current, ne.current = null, P();
      try {
        if (X) {
          var ge = function() {
            throw Error();
          };
          if (Object.defineProperty(ge.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ge, []);
            } catch (He) {
              de = He;
            }
            Reflect.construct(F, [], ge);
          } else {
            try {
              ge.call();
            } catch (He) {
              de = He;
            }
            F.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (He) {
            de = He;
          }
          F();
        }
      } catch (He) {
        if (He && de && typeof He.stack == "string") {
          for (var ye = He.stack.split(`
`), Le = de.stack.split(`
`), Oe = ye.length - 1, Te = Le.length - 1; Oe >= 1 && Te >= 0 && ye[Oe] !== Le[Te]; )
            Te--;
          for (; Oe >= 1 && Te >= 0; Oe--, Te--)
            if (ye[Oe] !== Le[Te]) {
              if (Oe !== 1 || Te !== 1)
                do
                  if (Oe--, Te--, Te < 0 || ye[Oe] !== Le[Te]) {
                    var Xe = `
` + ye[Oe].replace(" at new ", " at ");
                    return F.displayName && Xe.includes("<anonymous>") && (Xe = Xe.replace("<anonymous>", F.displayName)), typeof F == "function" && Z.set(F, Xe), Xe;
                  }
                while (Oe >= 1 && Te >= 0);
              break;
            }
        }
      } finally {
        me = !1, ne.current = we, W(), Error.prepareStackTrace = je;
      }
      var at = F ? F.displayName || F.name : "", pt = at ? te(at) : "";
      return typeof F == "function" && Z.set(F, pt), pt;
    }
    function Ae(F, X, re) {
      return Ee(F, !1);
    }
    function Ce(F) {
      var X = F.prototype;
      return !!(X && X.isReactComponent);
    }
    function Fe(F, X, re) {
      if (F == null)
        return "";
      if (typeof F == "function")
        return Ee(F, Ce(F));
      if (typeof F == "string")
        return te(F);
      switch (F) {
        case a:
          return te("Suspense");
        case l:
          return te("SuspenseList");
      }
      if (typeof F == "object")
        switch (F.$$typeof) {
          case d:
            return Ae(F.render);
          case w:
            return Fe(F.type, X, re);
          case i: {
            var de = F, je = de._payload, we = de._init;
            try {
              return Fe(we(je), X, re);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, le = {}, fe = E.ReactDebugCurrentFrame;
    function I(F) {
      if (F) {
        var X = F._owner, re = Fe(F.type, F._source, X ? X.type : null);
        fe.setExtraStackFrame(re);
      } else
        fe.setExtraStackFrame(null);
    }
    function ie(F, X, re, de, je) {
      {
        var we = Function.call.bind(G);
        for (var ge in F)
          if (we(F, ge)) {
            var ye = void 0;
            try {
              if (typeof F[ge] != "function") {
                var Le = Error((de || "React class") + ": " + re + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof F[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Le.name = "Invariant Violation", Le;
              }
              ye = F[ge](X, ge, de, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ye = Oe;
            }
            ye && !(ye instanceof Error) && (I(je), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", de || "React class", re, ge, typeof ye), I(null)), ye instanceof Error && !(ye.message in le) && (le[ye.message] = !0, I(je), v("Failed %s type: %s", re, ye.message), I(null));
          }
      }
    }
    var se = Array.isArray;
    function ee(F) {
      return se(F);
    }
    function _e(F) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, re = X && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return re;
      }
    }
    function De(F) {
      try {
        return Pe(F), !1;
      } catch {
        return !0;
      }
    }
    function Pe(F) {
      return "" + F;
    }
    function Ie(F) {
      if (De(F))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(F)), Pe(F);
    }
    var Ue = E.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, ot, Ke;
    Ke = {};
    function nt(F) {
      if (G.call(F, "ref")) {
        var X = Object.getOwnPropertyDescriptor(F, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return F.ref !== void 0;
    }
    function $(F) {
      if (G.call(F, "key")) {
        var X = Object.getOwnPropertyDescriptor(F, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return F.key !== void 0;
    }
    function L(F, X) {
      if (typeof F.ref == "string" && Ue.current && X && Ue.current.stateNode !== X) {
        var re = D(Ue.current.type);
        Ke[re] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Ue.current.type), F.ref), Ke[re] = !0);
      }
    }
    function q(F, X) {
      {
        var re = function() {
          ht || (ht = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        re.isReactWarning = !0, Object.defineProperty(F, "key", {
          get: re,
          configurable: !0
        });
      }
    }
    function Q(F, X) {
      {
        var re = function() {
          ot || (ot = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        re.isReactWarning = !0, Object.defineProperty(F, "ref", {
          get: re,
          configurable: !0
        });
      }
    }
    var ae = function(F, X, re, de, je, we, ge) {
      var ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: F,
        key: X,
        ref: re,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: we
      };
      return ye._store = {}, Object.defineProperty(ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: de
      }), Object.defineProperty(ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(ye.props), Object.freeze(ye)), ye;
    };
    function pe(F, X, re, de, je) {
      {
        var we, ge = {}, ye = null, Le = null;
        re !== void 0 && (Ie(re), ye = "" + re), $(X) && (Ie(X.key), ye = "" + X.key), nt(X) && (Le = X.ref, L(X, je));
        for (we in X)
          G.call(X, we) && !jt.hasOwnProperty(we) && (ge[we] = X[we]);
        if (F && F.defaultProps) {
          var Oe = F.defaultProps;
          for (we in Oe)
            ge[we] === void 0 && (ge[we] = Oe[we]);
        }
        if (ye || Le) {
          var Te = typeof F == "function" ? F.displayName || F.name || "Unknown" : F;
          ye && q(ge, Te), Le && Q(ge, Te);
        }
        return ae(F, ye, Le, je, de, Ue.current, ge);
      }
    }
    var ze = E.ReactCurrentOwner, st = E.ReactDebugCurrentFrame;
    function Ge(F) {
      if (F) {
        var X = F._owner, re = Fe(F.type, F._source, X ? X.type : null);
        st.setExtraStackFrame(re);
      } else
        st.setExtraStackFrame(null);
    }
    var it;
    it = !1;
    function qe(F) {
      return typeof F == "object" && F !== null && F.$$typeof === r;
    }
    function Nt() {
      {
        if (ze.current) {
          var F = D(ze.current.type);
          if (F)
            return `

Check the render method of \`` + F + "`.";
        }
        return "";
      }
    }
    function Mt(F) {
      return "";
    }
    var yt = {};
    function Y(F) {
      {
        var X = Nt();
        if (!X) {
          var re = typeof F == "string" ? F : F.displayName || F.name;
          re && (X = `

Check the top-level render call using <` + re + ">.");
        }
        return X;
      }
    }
    function he(F, X) {
      {
        if (!F._store || F._store.validated || F.key != null)
          return;
        F._store.validated = !0;
        var re = Y(X);
        if (yt[re])
          return;
        yt[re] = !0;
        var de = "";
        F && F._owner && F._owner !== ze.current && (de = " It was passed a child from " + D(F._owner.type) + "."), Ge(F), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, de), Ge(null);
      }
    }
    function xe(F, X) {
      {
        if (typeof F != "object")
          return;
        if (ee(F))
          for (var re = 0; re < F.length; re++) {
            var de = F[re];
            qe(de) && he(de, X);
          }
        else if (qe(F))
          F._store && (F._store.validated = !0);
        else if (F) {
          var je = y(F);
          if (typeof je == "function" && je !== F.entries)
            for (var we = je.call(F), ge; !(ge = we.next()).done; )
              qe(ge.value) && he(ge.value, X);
        }
      }
    }
    function Se(F) {
      {
        var X = F.type;
        if (X == null || typeof X == "string")
          return;
        var re;
        if (typeof X == "function")
          re = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === w))
          re = X.propTypes;
        else
          return;
        if (re) {
          var de = D(X);
          ie(re, F.props, "prop", de, F);
        } else if (X.PropTypes !== void 0 && !it) {
          it = !0;
          var je = D(X);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ye(F) {
      {
        for (var X = Object.keys(F.props), re = 0; re < X.length; re++) {
          var de = X[re];
          if (de !== "children" && de !== "key") {
            Ge(F), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", de), Ge(null);
            break;
          }
        }
        F.ref !== null && (Ge(F), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    var Re = {};
    function Me(F, X, re, de, je, we) {
      {
        var ge = C(F);
        if (!ge) {
          var ye = "";
          (F === void 0 || typeof F == "object" && F !== null && Object.keys(F).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = Mt();
          Le ? ye += Le : ye += Nt();
          var Oe;
          F === null ? Oe = "null" : ee(F) ? Oe = "array" : F !== void 0 && F.$$typeof === r ? (Oe = "<" + (D(F.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof F, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ye);
        }
        var Te = pe(F, X, re, je, we);
        if (Te == null)
          return Te;
        if (ge) {
          var Xe = X.children;
          if (Xe !== void 0)
            if (de)
              if (ee(Xe)) {
                for (var at = 0; at < Xe.length; at++)
                  xe(Xe[at], F);
                Object.freeze && Object.freeze(Xe);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(Xe, F);
        }
        if (G.call(X, "key")) {
          var pt = D(F), He = Object.keys(X).filter(function(Vt) {
            return Vt !== "key";
          }), fr = He.length > 0 ? "{key: someKey, " + He.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[pt + fr]) {
            var ms = He.length > 0 ? "{" + He.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fr, pt, ms, pt), Re[pt + fr] = !0;
          }
        }
        return F === s ? Ye(Te) : Se(Te), Te;
      }
    }
    function Ze(F, X, re) {
      return Me(F, X, re, !0);
    }
    function Je(F, X, re) {
      return Me(F, X, re, !1);
    }
    var kt = Je, Lt = Ze;
    Qt.Fragment = s, Qt.jsx = kt, Qt.jsxs = Lt;
  }()), Qt;
}
process.env.NODE_ENV === "production" ? zn.exports = $o() : zn.exports = Ho();
var t = zn.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vo = {
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
const Wo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), ce = (e, r) => {
  const n = Mo(
    ({
      color: s = "currentColor",
      size: o = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: b,
      className: u = "",
      children: d,
      ...a
    }, l) => gs(
      "svg",
      {
        ref: l,
        ...Vo,
        width: o,
        height: o,
        stroke: s,
        strokeWidth: b ? Number(m) * 24 / Number(o) : m,
        className: ["lucide", `lucide-${Wo(e)}`, u].join(" "),
        ...a
      },
      [
        ...r.map(([w, i]) => gs(w, i)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = ce("AlertCircle", [
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
const Uo = ce("Archive", [
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
const Ko = ce("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = ce("BellOff", [
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
const Yo = ce("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = ce("Bot", [
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
const La = ce("Calendar", [
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
const za = ce("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = ce("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = ce("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $a = ce("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = ce("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = ce("CircleUser", [
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
const ts = ce("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = ce("Download", [
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
const e0 = ce("Expand", [
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
const Ha = ce("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = ce("FileText", [
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
const t0 = ce("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = ce("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = ce("Globe", [
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
const s0 = ce("Image", [
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
const a0 = ce("Inbox", [
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
const Cs = ce("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = ce("MailOpen", [
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
const Er = ce("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = ce("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = ce("Minimize", [
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
const l0 = ce("Monitor", [
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
const Va = ce("MoreHorizontal", [
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
const d0 = ce("Palette", [
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
const u0 = ce("PanelsTopLeft", [
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
const qn = ce("Paperclip", [
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
const f0 = ce("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = ce("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = ce("Plane", [
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
const jr = ce("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = ce("ReplyAll", [
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
const js = ce("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = ce("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p0 = ce("Save", [
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
const m0 = ce("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = ce("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = ce("Settings", [
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
const y0 = ce("Shield", [
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
const qt = ce("Sparkles", [
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
const Hr = ce("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = ce("Star", [
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
const kr = ce("Tag", [
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
const Qa = ce("Ticket", [
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
const Tr = ce("Trash2", [
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
const Ua = ce("Type", [
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
const v0 = ce("UserCog", [
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
const b0 = ce("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = ce("Wand2", [
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
const Ka = ce("XCircle", [
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
const tt = ce("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), C0 = ({
  filters: e,
  onFiltersChange: r,
  onClearFilters: n
}) => {
  const [s, o] = J(!1), m = Be(null);
  be(() => {
    const a = (l) => {
      m.current && !m.current.contains(l.target) && o(!1);
    };
    return s && document.addEventListener("mousedown", a), () => {
      document.removeEventListener("mousedown", a);
    };
  }, [s]);
  const b = (a, l) => {
    r({ ...e, [a]: l });
  }, u = (a, l) => {
    r({
      ...e,
      dateRange: { ...e.dateRange, [a]: l }
    });
  }, d = () => e.readStatus !== "all" || e.starred || e.hasAttachment || e.sortBy !== "newest" || e.dateRange.from || e.dateRange.to || e.intent !== "all";
  return /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: m, children: [
    " ",
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => o(!s),
        className: `
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors
          ${d() ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
        `,
        children: [
          /* @__PURE__ */ t.jsx(t0, { className: "w-4 h-4" }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium", children: "Filters" }),
          d() && /* @__PURE__ */ t.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: "Active" }),
          /* @__PURE__ */ t.jsx($a, { className: `w-4 h-4 transition-transform ${s ? "rotate-180" : ""}` })
        ]
      }
    ),
    s && /* @__PURE__ */ t.jsxs("div", { className: "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ t.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Filter Emails" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          d() && /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: n,
              className: "text-xs text-gray-500 hover:text-gray-700",
              children: "Clear all"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => o(!1),
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ t.jsx(tt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ t.jsxs("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Read Status" }),
          /* @__PURE__ */ t.jsx("div", { className: "flex space-x-2", children: [
            { value: "all", label: "All", icon: Er },
            { value: "unread", label: "Unread", icon: Er },
            { value: "read", label: "Read", icon: o0 }
          ].map(({ value: a, label: l, icon: w }) => /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: () => b("readStatus", a),
              className: `
                      flex items-center space-x-1 px-3 py-2 rounded-md text-xs transition-colors
                      ${e.readStatus === a ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
                    `,
              children: [
                /* @__PURE__ */ t.jsx(w, { className: "w-3 h-3" }),
                /* @__PURE__ */ t.jsx("span", { children: l })
              ]
            },
            a
          )) })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Quick Filters" }),
          /* @__PURE__ */ t.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.starred,
                  onChange: (a) => b("starred", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ t.jsx(Nr, { className: "w-4 h-4 ml-2 mr-1 text-yellow-500" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Starred only" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: e.hasAttachment,
                  onChange: (a) => b("hasAttachment", a.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ t.jsx(qn, { className: "w-4 h-4 ml-2 mr-1 text-gray-500" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Has attachments" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort by" }),
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              value: e.sortBy,
              onChange: (a) => b("sortBy", a.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "newest", children: "Newest first" }),
                /* @__PURE__ */ t.jsx("option", { value: "oldest", children: "Oldest first" }),
                /* @__PURE__ */ t.jsx("option", { value: "subject-az", children: "Subject (A-Z)" }),
                /* @__PURE__ */ t.jsx("option", { value: "subject-za", children: "Subject (Z-A)" }),
                /* @__PURE__ */ t.jsx("option", { value: "sender-az", children: "Sender (A-Z)" }),
                /* @__PURE__ */ t.jsx("option", { value: "sender-za", children: "Sender (Z-A)" }),
                /* @__PURE__ */ t.jsx("option", { value: "starred-first", children: "Starred first" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            /* @__PURE__ */ t.jsx(La, { className: "w-4 h-4 inline mr-1" }),
            "Date Range"
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "From" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.from,
                  onChange: (a) => u("from", a.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "To" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "date",
                  value: e.dateRange.to,
                  onChange: (a) => u("to", a.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Type" }),
          /* @__PURE__ */ t.jsxs(
            "select",
            {
              value: e.intent,
              onChange: (a) => b("intent", a.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ t.jsx("option", { value: "all", children: "All types" }),
                /* @__PURE__ */ t.jsx("option", { value: "new", children: "New emails" }),
                /* @__PURE__ */ t.jsx("option", { value: "meetings", children: "Meeting invites" }),
                /* @__PURE__ */ t.jsx("option", { value: "notifications", children: "System notifications" }),
                /* @__PURE__ */ t.jsx("option", { value: "campaigns", children: "Marketing campaigns" }),
                /* @__PURE__ */ t.jsx("option", { value: "support", children: "Support requests" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, E0 = ({ isOpen: e, onClose: r }) => {
  const [n, s] = J(!0), [o, m] = J(!0), [b, u] = J(!1), [d, a] = J({ start: "22:00", end: "08:00" }), [l, w] = J({
    newEmails: !0,
    replies: !0,
    mentions: !0,
    reminders: !1
  }), i = () => {
    console.log("Saving notification preferences:", {
      emailNotifications: n,
      desktopNotifications: o,
      soundEnabled: b,
      quietHours: d,
      notificationTypes: l
    }), r();
  };
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Notification Preferences" }),
      /* @__PURE__ */ t.jsx("button", { onClick: r, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ t.jsx(tt, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(Er, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Email Notifications" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "Receive notifications via email" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: n,
              onChange: (f) => s(f.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(Yo, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Desktop Notifications" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "Show browser notifications" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: o,
              onChange: (f) => m(f.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(Go, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Sound Notifications" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: "Play sound for new emails" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: b,
              onChange: (f) => u(f.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ t.jsx(ts, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Quiet Hours" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-2 gap-4 ml-8", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "From" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "time",
                value: d.start,
                onChange: (f) => a({ ...d, start: f.target.value }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-1", children: "To" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "time",
                value: d.end,
                onChange: (f) => a({ ...d, end: f.target.value }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Notification Types" }),
        /* @__PURE__ */ t.jsx("div", { className: "space-y-3 ml-4", children: Object.entries(l).map(([f, p]) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700 capitalize", children: f.replace(/([A-Z])/g, " $1").trim() }),
          /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: p,
                onChange: (g) => w({
                  ...l,
                  [f]: g.target.checked
                })
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, f)) })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: r,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: i,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, j0 = ({ isOpen: e, onClose: r }) => {
  const [n, s] = J([
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
  ]), [o, m] = J(null), [b, u] = J(""), [d, a] = J(""), [l, w] = J(!1), [i, f] = J(!1), p = Be(null);
  be(() => {
    const h = n.find((j) => j.isDefault);
    h && sessionStorage.setItem("defaultSignature", h.content);
  }, [n]);
  const g = (h) => {
    m(h.id), u(h.name), a(h.content), w(!1);
  }, y = () => {
    m(null), u(""), a(""), w(!0);
  };
  be(() => {
    const h = (j) => {
      p.current && !p.current.contains(j.target) && r();
    };
    return e && document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [e, r]);
  const E = () => {
    if (l) {
      const h = {
        id: Date.now(),
        name: b,
        content: d,
        isDefault: n.length === 0
      };
      s([...n, h]);
    } else o && s(
      n.map(
        (h) => h.id === o ? { ...h, name: b, content: d } : h
      )
    );
    m(null), w(!1), u(""), a("");
  }, v = (h) => {
    s(n.filter((j) => j.id !== h));
  }, x = (h) => {
    s(
      n.map((j) => ({ ...j, isDefault: j.id === h }))
    );
  }, c = () => {
    m(null), w(!1), u(""), a("");
  };
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: p,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
          /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Signatures" }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: r,
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ t.jsx(tt, { className: "w-6 h-6" })
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "p-6", children: l || o ? /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Signature Name" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: b,
                onChange: (h) => u(h.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                placeholder: "Enter signature name"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Signature Content" }),
              /* @__PURE__ */ t.jsxs(
                "button",
                {
                  onClick: () => f(!i),
                  className: "flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700",
                  children: [
                    i ? /* @__PURE__ */ t.jsx(f0, { className: "w-4 h-4" }) : /* @__PURE__ */ t.jsx(Ha, { className: "w-4 h-4" }),
                    /* @__PURE__ */ t.jsx("span", { children: i ? "Edit" : "Preview" })
                  ]
                }
              )
            ] }),
            i ? /* @__PURE__ */ t.jsx("div", { className: "w-full min-h-32 p-3 border border-gray-300 rounded-md bg-gray-50", children: /* @__PURE__ */ t.jsx("div", { className: "whitespace-pre-wrap text-sm text-gray-900", children: d || "No content yet..." }) }) : /* @__PURE__ */ t.jsx(
              "textarea",
              {
                value: d,
                onChange: (h) => a(h.target.value),
                className: "w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",
                placeholder: "Enter your signature content"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end space-x-3 pt-4", children: [
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: c,
                className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: E,
                disabled: !b.trim() || !d.trim(),
                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
                children: "Save Signature"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Your Signatures" }),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: y,
                className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                children: "Create New"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "space-y-3", children: n.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "text-center py-8 text-gray-500", children: [
            /* @__PURE__ */ t.jsx(Ua, { className: "w-12 h-12 mx-auto mb-3 text-gray-300" }),
            /* @__PURE__ */ t.jsx("p", { children: "No signatures created yet" }),
            /* @__PURE__ */ t.jsx("p", { className: "text-sm", children: 'Click "Create New" to add your first signature' })
          ] }) : n.map((h) => /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: "border border-gray-200 rounded-lg p-4",
              children: [
                /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ t.jsx("h4", { className: "font-medium text-gray-900", children: h.name }),
                    h.isDefault && /* @__PURE__ */ t.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full", children: "Default" })
                  ] }),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex space-x-2", children: [
                    !h.isDefault && /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => x(h.id),
                        className: "text-green-600 border border-green-600 hover:text-green-700 hover:border-green-700 text-sm rounded px-2 py-1",
                        children: "Set Default"
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => g(h),
                        className: "text-blue-600 border border-blue-600 hover:text-blue-700 hover:border-blue-700 text-sm rounded px-2 py-1",
                        children: "Edit"
                      }
                    ),
                    !h.isDefault && /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => v(h.id),
                        className: "text-red-600 border border-red-600 hover:text-red-700 hover:border-red-700 text-sm rounded px-2 py-1",
                        children: "Delete"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ t.jsx("div", { className: "bg-gray-50 rounded p-3 text-sm text-gray-700", children: /* @__PURE__ */ t.jsx("div", { className: "whitespace-pre-wrap", children: h.content }) })
              ]
            },
            h.id
          )) })
        ] }) })
      ]
    }
  ) }) : null;
}, N0 = ({ isOpen: e, onClose: r }) => {
  const [n, s] = J({
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
  }), o = (u, d) => {
    s((a) => ({ ...a, [u]: d }));
  }, m = () => {
    console.log("Saving display settings:", n), r();
  }, b = () => {
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
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Email Display Options" }),
      /* @__PURE__ */ t.jsx("button", { onClick: r, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ t.jsx(tt, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(u0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Display Density" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: ["compact", "comfortable", "relaxed"].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "density",
              value: u,
              checked: n.density === u,
              onChange: (d) => o("density", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700 capitalize", children: u })
        ] }, u)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(l0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Reading Pane" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "right", label: "Right side" },
          { value: "bottom", label: "Bottom" },
          { value: "off", label: "No reading pane" }
        ].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "readingPane",
              value: u.value,
              checked: n.readingPane === u.value,
              onChange: (d) => o("readingPane", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label })
        ] }, u.value)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(s0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Image Display" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "always", label: "Always show images" },
          { value: "ask", label: "Ask before showing images" },
          { value: "never", label: "Never show images" }
        ].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "showImages",
              value: u.value,
              checked: n.showImages === u.value,
              onChange: (d) => o("showImages", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label })
        ] }, u.value)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(Ua, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Font Size" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7", children: /* @__PURE__ */ t.jsxs(
          "select",
          {
            value: n.fontSize,
            onChange: (u) => o("fontSize", u.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            children: [
              /* @__PURE__ */ t.jsx("option", { value: "small", children: "Small" }),
              /* @__PURE__ */ t.jsx("option", { value: "medium", children: "Medium" }),
              /* @__PURE__ */ t.jsx("option", { value: "large", children: "Large" }),
              /* @__PURE__ */ t.jsx("option", { value: "extra-large", children: "Extra Large" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(Ha, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Theme" })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "ml-7 space-y-2", children: [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "auto", label: "Auto (system)" }
        ].map((u) => /* @__PURE__ */ t.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "radio",
              name: "theme",
              value: u.value,
              checked: n.theme === u.value,
              onChange: (d) => o("theme", d.target.value),
              className: "w-4 h-4 text-blue-600"
            }
          ),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label })
        ] }, u.value)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Display Options" }),
        /* @__PURE__ */ t.jsx("div", { className: "space-y-3 ml-4", children: [
          { key: "showPreview", label: "Show email preview pane" },
          { key: "showSender", label: "Show sender avatars" },
          { key: "showSnippet", label: "Show email snippets in list" },
          { key: "conversationView", label: "Group emails by conversation" }
        ].map((u) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: u.label }),
          /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "checkbox",
                className: "sr-only peer",
                checked: n[u.key],
                onChange: (d) => o(u.key, d.target.checked)
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
          ] })
        ] }, u.key)) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Mark as Read Delay" }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-4", children: [
          /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Seconds before marking email as read when opened" }),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "range",
              min: "0",
              max: "10",
              step: "1",
              value: n.markAsReadDelay,
              onChange: (u) => o("markAsReadDelay", parseInt(u.target.value)),
              className: "w-full"
            }
          ),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
            /* @__PURE__ */ t.jsx("span", { children: "Immediately" }),
            /* @__PURE__ */ t.jsxs("span", { children: [
              n.markAsReadDelay,
              "s"
            ] }),
            /* @__PURE__ */ t.jsx("span", { children: "10s" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: b,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Reset to Defaults"
        }
      ),
      /* @__PURE__ */ t.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: r,
            className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: m,
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
            children: "Save Changes"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, k0 = ({ isOpen: e, onClose: r }) => {
  const [n, s] = J({
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
  }), o = (d, a) => {
    s((l) => ({ ...l, [d]: a }));
  }, m = () => {
    console.log("Saving general settings:", n), r();
  }, b = () => {
    console.log("Exporting user data..."), alert("Data export initiated. You will receive a download link via email.");
  }, u = () => {
    window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    ) && (console.log("Account deletion requested..."), alert("Account deletion request submitted. Please check your email for confirmation."));
  };
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "General Settings" }),
      /* @__PURE__ */ t.jsx("button", { onClick: r, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ t.jsx(tt, { className: "w-6 h-6" }) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(n0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Language & Region" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Language" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.language,
                onChange: (d) => o("language", d.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: "en", children: "English" }),
                  /* @__PURE__ */ t.jsx("option", { value: "es", children: "Español" }),
                  /* @__PURE__ */ t.jsx("option", { value: "fr", children: "Français" }),
                  /* @__PURE__ */ t.jsx("option", { value: "de", children: "Deutsch" }),
                  /* @__PURE__ */ t.jsx("option", { value: "zh", children: "中文" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-500 mb-2", children: "Timezone" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.timezone,
                onChange: (d) => o("timezone", d.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: "America/New_York", children: "Eastern Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "America/Chicago", children: "Central Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "America/Denver", children: "Mountain Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "America/Los_Angeles", children: "Pacific Time" }),
                  /* @__PURE__ */ t.jsx("option", { value: "UTC", children: "UTC" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(ts, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Email Behavior" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Auto-save drafts" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Automatically save email drafts while composing" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.autoSave,
                  onChange: (d) => o("autoSave", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Confirm before deleting" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Show confirmation dialog when deleting emails" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.confirmDelete,
                  onChange: (d) => o("confirmDelete", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsxs("label", { className: "block text-sm text-gray-700 mb-2", children: [
              "Undo send delay: ",
              n.undoSendDelay,
              " seconds"
            ] }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "30",
                step: "5",
                value: n.undoSendDelay,
                onChange: (d) => o("undoSendDelay", parseInt(d.target.value)),
                className: "w-full"
              }
            ),
            /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [
              /* @__PURE__ */ t.jsx("span", { children: "No delay" }),
              /* @__PURE__ */ t.jsx("span", { children: "30s" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Maximum attachment size (MB)" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.maxAttachmentSize,
                onChange: (d) => o("maxAttachmentSize", parseInt(d.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: 10, children: "10 MB" }),
                  /* @__PURE__ */ t.jsx("option", { value: 25, children: "25 MB" }),
                  /* @__PURE__ */ t.jsx("option", { value: 50, children: "50 MB" }),
                  /* @__PURE__ */ t.jsx("option", { value: 100, children: "100 MB" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(Uo, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Auto Archive" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Enable auto-archive" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Automatically archive old emails" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.autoArchive,
                  onChange: (d) => o("autoArchive", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          n.autoArchive && /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Archive emails after (days)" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.archiveAfterDays,
                onChange: (d) => o("archiveAfterDays", parseInt(d.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: 7, children: "7 days" }),
                  /* @__PURE__ */ t.jsx("option", { value: 30, children: "30 days" }),
                  /* @__PURE__ */ t.jsx("option", { value: 90, children: "90 days" }),
                  /* @__PURE__ */ t.jsx("option", { value: 365, children: "1 year" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(y0, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Security" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Two-factor authentication" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Add an extra layer of security" })
            ] }),
            /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "sr-only peer",
                  checked: n.twoFactorAuth,
                  onChange: (d) => o("twoFactorAuth", d.target.checked)
                }
              ),
              /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-sm text-gray-700 mb-2", children: "Session timeout (minutes)" }),
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: n.sessionTimeout,
                onChange: (d) => o("sessionTimeout", parseInt(d.target.value)),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: 15, children: "15 minutes" }),
                  /* @__PURE__ */ t.jsx("option", { value: 30, children: "30 minutes" }),
                  /* @__PURE__ */ t.jsx("option", { value: 60, children: "1 hour" }),
                  /* @__PURE__ */ t.jsx("option", { value: 120, children: "2 hours" }),
                  /* @__PURE__ */ t.jsx("option", { value: 0, children: "Never" })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(ws, { className: "w-5 h-5 text-gray-500" }),
          /* @__PURE__ */ t.jsx("h3", { className: "font-medium text-gray-900", children: "Data Management" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "ml-7 space-y-3", children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: b,
              className: "w-full text-left px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
              children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-gray-900", children: "Export your data" }),
                  /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Download a copy of your emails and settings" })
                ] }),
                /* @__PURE__ */ t.jsx(ws, { className: "w-4 h-4 text-gray-400" })
              ] })
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: u,
              className: "w-full text-left px-4 py-3 border border-red-300 rounded-md hover:bg-red-50 transition-colors",
              children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-red-900", children: "Delete account" }),
                  /* @__PURE__ */ t.jsx("p", { className: "text-xs text-red-500", children: "Permanently delete your account and all data" })
                ] }),
                /* @__PURE__ */ t.jsx(Tr, { className: "w-4 h-4 text-red-400" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: "Show helpful tips" }),
          /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500", children: "Display tips and shortcuts in the interface" })
        ] }),
        /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "checkbox",
              className: "sr-only peer",
              checked: n.showTips,
              onChange: (d) => o("showTips", d.target.checked)
            }
          ),
          /* @__PURE__ */ t.jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-end space-x-3 p-6 border-t bg-gray-50", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: r,
          className: "px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: m,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
          children: "Save Changes"
        }
      )
    ] })
  ] }) }) : null;
}, A0 = ({
  onMenuToggle: e,
  onSearch: r,
  onFiltersChange: n,
  filters: s,
  onComposeClick: o
}) => {
  const [m, b] = J(""), [u, d] = J(!1), [a, l] = J(!1), [w, i] = J(!1), [f, p] = J(!1), [g, y] = J(!1), [E, v] = J(!1), x = Be(null), c = Be(null);
  be(() => {
    const B = (A) => {
      x.current && !x.current.contains(A.target) && d(!1), c.current && !c.current.contains(A.target) && l(!1);
    };
    return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
  }, []);
  const h = (B) => {
    b(B), r(B);
  }, j = () => {
    n({
      readStatus: "all",
      starred: !1,
      hasAttachment: !1,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all"
    });
  }, k = () => {
    p(!0), d(!1);
  };
  return /* @__PURE__ */ t.jsxs("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50", children: [
    /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ t.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Mail" }) }) }),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 max-w-2xl mx-8", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
            onClick: () => h(m),
            tabIndex: 0,
            children: /* @__PURE__ */ t.jsx(m0, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search mail",
            value: m,
            onChange: (B) => b(B.target.value),
            onKeyDown: (B) => {
              B.key === "Enter" && h(m);
            },
            className: "w-full pl-10 pr-10 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
          }
        ),
        m && /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
            onClick: () => {
              b(""), h("");
            },
            tabIndex: 0,
            children: "×"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(
        C0,
        {
          filters: s,
          onFiltersChange: n,
          onClearFilters: j
        }
      )
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: x, children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => d(!u),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
            children: /* @__PURE__ */ t.jsx(g0, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        u && /* @__PURE__ */ t.jsx("div", { className: "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: k,
            className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3",
            children: [
              /* @__PURE__ */ t.jsx(Jo, { className: "w-4 h-4 text-gray-500" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-gray-700", children: "Signature Setup" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          className: "group flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 bg-blue-600 text-white",
          onClick: o,
          children: [
            /* @__PURE__ */ t.jsx(jr, { className: "w-5 h-5" }),
            /* @__PURE__ */ t.jsx("span", { className: "ml-2 whitespace-nowrap hidden md:inline", children: "Compose" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      E0,
      {
        isOpen: w,
        onClose: () => i(!1)
      }
    ),
    /* @__PURE__ */ t.jsx(
      j0,
      {
        isOpen: f,
        onClose: () => p(!1)
      }
    ),
    /* @__PURE__ */ t.jsx(
      N0,
      {
        isOpen: g,
        onClose: () => y(!1)
      }
    ),
    /* @__PURE__ */ t.jsx(
      k0,
      {
        isOpen: E,
        onClose: () => v(!1)
      }
    )
  ] });
}, _0 = () => /* @__PURE__ */ t.jsxs("div", { className: "w-full h-14 bg-white shadow-md flex items-center px-4 animate-pulse", children: [
  /* @__PURE__ */ t.jsx("div", { className: "w-32 h-6 bg-gray-300 rounded mr-4" }),
  " ",
  /* @__PURE__ */ t.jsxs("div", { className: "flex-1 flex items-center space-x-4", children: [
    /* @__PURE__ */ t.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ t.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" }),
    /* @__PURE__ */ t.jsx("div", { className: "w-24 h-4 bg-gray-300 rounded" })
  ] }),
  /* @__PURE__ */ t.jsx("div", { className: "w-10 h-10 bg-gray-300 rounded-full ml-auto" }),
  " "
] }), D0 = () => /* @__PURE__ */ t.jsx("div", { className: "w-full h-full space-y-6 p-6 animate-pulse overflow-y-auto", children: [1, 2, 3].map((e, r) => /* @__PURE__ */ t.jsxs(
  "div",
  {
    className: "bg-white rounded-md shadow p-6 w-full",
    children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
        /* @__PURE__ */ t.jsx("div", { className: "w-12 h-12 bg-gray-300 rounded-full" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ t.jsx("div", { className: "w-1/3 h-4 bg-gray-300 rounded" }),
          /* @__PURE__ */ t.jsx("div", { className: "w-1/4 h-3 bg-gray-200 rounded" })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "space-y-3 mt-2", children: [
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-5/6 bg-gray-200 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-2/3 bg-gray-200 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-full bg-gray-100 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-3/4 bg-gray-100 rounded" }),
        /* @__PURE__ */ t.jsx("div", { className: "h-4 w-4/5 bg-gray-100 rounded" })
      ] })
    ]
  },
  r
)) }), B0 = ({
  selectedLabels: e,
  availableLabels: r,
  onLabelsChange: n,
  onCreateLabel: s,
  placeholder: o = "Add labels...",
  className: m = "",
  maxHeight: b = "max-h-48"
}) => {
  const [u, d] = J(!1), [a, l] = J(""), [w, i] = J(!1), [f, p] = J(""), [g, y] = J("#3B82F6"), E = Be(null), v = Be(null);
  be(() => {
    const A = (C) => {
      E.current && !E.current.contains(C.target) && (d(!1), i(!1), l(""), p(""));
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, []);
  const x = r.filter(
    (A) => A.name.toLowerCase().includes(a.toLowerCase()) && !e.includes(A.id)
  ), c = r.filter(
    (A) => e.includes(A.id)
  ), h = (A) => {
    e.includes(A) ? n(e.filter((C) => C !== A)) : n([...e, A]);
  }, j = (A) => {
    n(e.filter((C) => C !== A));
  }, k = () => {
    if (!f.trim() || !s) return;
    const A = r.find(
      (C) => C.name.toLowerCase() === f.trim().toLowerCase()
    );
    A ? h(A.id) : s({
      name: f.trim(),
      color: g,
      isSystem: !1
    }), p(""), i(!1), l("");
  }, B = (A) => {
    A.key === "Enter" ? (A.preventDefault(), w ? k() : a.trim() && s && (p(a.trim()), i(!0))) : A.key === "Escape" && (d(!1), i(!1), l(""));
  };
  return /* @__PURE__ */ t.jsxs("div", { ref: E, className: `relative ${m}`, children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        onClick: () => {
          d(!0), setTimeout(() => {
            var A;
            return (A = v.current) == null ? void 0 : A.focus();
          }, 0);
        },
        className: "min-h-[2.5rem] p-2 border border-gray-300 rounded-lg cursor-text focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all",
        children: /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          c.map((A) => /* @__PURE__ */ t.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-sm font-medium",
              style: {
                backgroundColor: `${A.color}20`,
                color: A.color,
                border: `1px solid ${A.color}40`
              },
              children: [
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: A.color }
                  }
                ),
                A.name,
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: (C) => {
                      C.stopPropagation(), j(A.id);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ t.jsx(tt, { className: "w-3 h-3" })
                  }
                )
              ]
            },
            A.id
          )),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              ref: v,
              type: "text",
              value: a,
              onChange: (A) => l(A.target.value),
              onKeyDown: B,
              onFocus: () => d(!0),
              placeholder: e.length === 0 ? o : "",
              className: "flex-1 min-w-[120px] border-none outline-none bg-transparent text-sm"
            }
          )
        ] })
      }
    ),
    u && /* @__PURE__ */ t.jsxs("div", { className: `absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${b} overflow-y-auto`, children: [
      w && s && /* @__PURE__ */ t.jsxs("div", { className: "p-3 border-b border-gray-100 bg-blue-50", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
          /* @__PURE__ */ t.jsx(jr, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm font-medium text-blue-900", children: "Create new label" })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "text",
              value: f,
              onChange: (A) => p(A.target.value),
              onKeyDown: B,
              placeholder: "Label name...",
              className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "color",
              value: g,
              onChange: (A) => y(A.target.value),
              className: "w-8 h-8 border border-gray-300 rounded cursor-pointer"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: k,
              disabled: !f.trim(),
              className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded text-sm transition-colors",
              children: /* @__PURE__ */ t.jsx(qa, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "py-1", children: x.length === 0 && !w ? /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-500 text-center", children: a ? /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsxs("p", { children: [
          'No labels found for "',
          a,
          '"'
        ] }),
        s && /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => {
              p(a), i(!0);
            },
            className: "mt-1 text-blue-600 hover:text-blue-700 text-sm",
            children: [
              'Create "',
              a,
              '" label'
            ]
          }
        )
      ] }) : "No available labels" }) : x.map((A) => /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => h(A.id),
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2",
          children: [
            /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full",
                style: { backgroundColor: A.color }
              }
            ),
            /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-900", children: A.name }),
            A.description && /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-500 truncate", children: [
              "- ",
              A.description
            ] })
          ]
        },
        A.id
      )) }),
      !w && s && a && x.length === 0 && /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-100", children: /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => {
            p(a), i(!0);
          },
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 text-blue-600",
          children: [
            /* @__PURE__ */ t.jsx(jr, { className: "w-4 h-4" }),
            /* @__PURE__ */ t.jsxs("span", { className: "text-sm", children: [
              'Create "',
              a,
              '" label'
            ] })
          ]
        }
      ) })
    ] })
  ] });
}, S0 = ({
  emailIds: e,
  currentLabels: r,
  availableLabels: n,
  onLabelsChange: s,
  onCreateLabel: o,
  className: m = ""
}) => {
  const [b, u] = J(!1), [d, a] = J(r), [l, w] = J(!1), i = Be(null);
  be(() => {
    a(r);
  }, [r]), be(() => {
    const g = (y) => {
      i.current && !i.current.contains(y.target) && u(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []);
  const f = async (g) => {
    w(!0), a(g);
    try {
      s(e, g), setTimeout(() => {
        w(!1), u(!1);
      }, 300);
    } catch (y) {
      w(!1), console.error("Error updating labels:", y);
    }
  }, p = n.filter(
    (g) => d.includes(g.id)
  );
  return /* @__PURE__ */ t.jsxs("div", { ref: i, className: `relative ${m}`, children: [
    /* @__PURE__ */ t.jsxs(
      "button",
      {
        onClick: () => u(!b),
        disabled: l,
        className: `flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors ${l ? "opacity-50 cursor-not-allowed" : ""}`,
        title: "Manage labels",
        children: [
          /* @__PURE__ */ t.jsx(kr, { className: `w-4 h-4 ${l ? "animate-spin" : ""}` }),
          /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: "Labels" }),
          d.length > 0 && /* @__PURE__ */ t.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: d.length }),
          l && /* @__PURE__ */ t.jsx("span", { className: "text-xs text-gray-500", children: "Updating..." })
        ]
      }
    ),
    b && /* @__PURE__ */ t.jsxs("div", { className: "absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "p-3 border-b border-gray-100", children: [
        /* @__PURE__ */ t.jsxs("h3", { className: "text-sm font-semibold text-gray-900 mb-2", children: [
          "Manage Labels ",
          e.length > 1 && `(${e.length} emails)`
        ] }),
        d.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 mb-2", children: "Current labels:" }),
          /* @__PURE__ */ t.jsx("div", { className: "flex flex-wrap gap-1", children: p.map((g) => /* @__PURE__ */ t.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
              style: {
                backgroundColor: `${g.color}20`,
                color: g.color,
                border: `1px solid ${g.color}40`
              },
              children: [
                /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: g.color }
                  }
                ),
                g.name,
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => {
                      const y = d.filter((E) => E !== g.id);
                      f(y);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ t.jsx(tt, { className: "w-2 h-2" })
                  }
                )
              ]
            },
            g.id
          )) })
        ] }),
        /* @__PURE__ */ t.jsx(
          B0,
          {
            selectedLabels: d,
            availableLabels: n,
            onLabelsChange: f,
            onCreateLabel: o,
            placeholder: "Add or create labels...",
            maxHeight: "max-h-32"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "p-3", children: /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: () => u(!1),
          className: "w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm",
          children: "Done"
        }
      ) })
    ] })
  ] });
};
function Qe(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var F0 = typeof Symbol == "function" && Symbol.observable || "@@observable", Ns = F0, Vr = () => Math.random().toString(36).substring(7).split("").join("."), R0 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Vr()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Vr()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Vr()}`
}, Bt = R0;
function ft(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let r = e;
  for (; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(e) === r || Object.getPrototypeOf(e) === null;
}
function O0(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const r = typeof e;
  switch (r) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return r;
  }
  if (Array.isArray(e))
    return "array";
  if (I0(e))
    return "date";
  if (P0(e))
    return "error";
  const n = T0(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function T0(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function P0(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function I0(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function vt(e) {
  let r = typeof e;
  return process.env.NODE_ENV !== "production" && (r = O0(e)), r;
}
function Ga(e, r, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? Qe(2) : `Expected the root reducer to be a function. Instead, received: '${vt(e)}'`);
  if (typeof r == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? Qe(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof r == "function" && typeof n > "u" && (n = r, r = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(1) : `Expected the enhancer to be a function. Instead, received: '${vt(n)}'`);
    return n(Ga)(e, r);
  }
  let s = e, o = r, m = /* @__PURE__ */ new Map(), b = m, u = 0, d = !1;
  function a() {
    b === m && (b = /* @__PURE__ */ new Map(), m.forEach((y, E) => {
      b.set(E, y);
    }));
  }
  function l() {
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? Qe(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function w(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(4) : `Expected the listener to be a function. Instead, received: '${vt(y)}'`);
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? Qe(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let E = !0;
    a();
    const v = u++;
    return b.set(v, y), function() {
      if (E) {
        if (d)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        E = !1, a(), b.delete(v), m = null;
      }
    };
  }
  function i(y) {
    if (!ft(y))
      throw new Error(process.env.NODE_ENV === "production" ? Qe(7) : `Actions must be plain objects. Instead, the actual type was: '${vt(y)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof y.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof y.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(17) : `Action "type" property must be a string. Instead, the actual type was: '${vt(y.type)}'. Value was: '${y.type}' (stringified)`);
    if (d)
      throw new Error(process.env.NODE_ENV === "production" ? Qe(9) : "Reducers may not dispatch actions.");
    try {
      d = !0, o = s(o, y);
    } finally {
      d = !1;
    }
    return (m = b).forEach((v) => {
      v();
    }), y;
  }
  function f(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(10) : `Expected the nextReducer to be a function. Instead, received: '${vt(y)}`);
    s = y, i({
      type: Bt.REPLACE
    });
  }
  function p() {
    const y = w;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(E) {
        if (typeof E != "object" || E === null)
          throw new Error(process.env.NODE_ENV === "production" ? Qe(11) : `Expected the observer to be an object. Instead, received: '${vt(E)}'`);
        function v() {
          const c = E;
          c.next && c.next(l());
        }
        return v(), {
          unsubscribe: y(v)
        };
      },
      [Ns]() {
        return this;
      }
    };
  }
  return i({
    type: Bt.INIT
  }), {
    dispatch: i,
    subscribe: w,
    getState: l,
    replaceReducer: f,
    [Ns]: p
  };
}
function ks(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function M0(e, r, n, s) {
  const o = Object.keys(r), m = n && n.type === Bt.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!ft(e))
    return `The ${m} has unexpected type of "${vt(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const b = Object.keys(e).filter((u) => !r.hasOwnProperty(u) && !s[u]);
  if (b.forEach((u) => {
    s[u] = !0;
  }), !(n && n.type === Bt.REPLACE) && b.length > 0)
    return `Unexpected ${b.length > 1 ? "keys" : "key"} "${b.join('", "')}" found in ${m}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function L0(e) {
  Object.keys(e).forEach((r) => {
    const n = e[r];
    if (typeof n(void 0, {
      type: Bt.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(12) : `The slice reducer for key "${r}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: Bt.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? Qe(13) : `The slice reducer for key "${r}" returned undefined when probed with a random type. Don't try to handle '${Bt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Ya(e) {
  const r = Object.keys(e), n = {};
  for (let b = 0; b < r.length; b++) {
    const u = r[b];
    process.env.NODE_ENV !== "production" && typeof e[u] > "u" && ks(`No reducer provided for key "${u}"`), typeof e[u] == "function" && (n[u] = e[u]);
  }
  const s = Object.keys(n);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let m;
  try {
    L0(n);
  } catch (b) {
    m = b;
  }
  return function(u = {}, d) {
    if (m)
      throw m;
    if (process.env.NODE_ENV !== "production") {
      const w = M0(u, n, d, o);
      w && ks(w);
    }
    let a = !1;
    const l = {};
    for (let w = 0; w < s.length; w++) {
      const i = s[w], f = n[i], p = u[i], g = f(p, d);
      if (typeof g > "u") {
        const y = d && d.type;
        throw new Error(process.env.NODE_ENV === "production" ? Qe(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${i}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[i] = g, a = a || g !== p;
    }
    return a = a || s.length !== Object.keys(u).length, a ? l : u;
  };
}
function Ar(...e) {
  return e.length === 0 ? (r) => r : e.length === 1 ? e[0] : e.reduce((r, n) => (...s) => r(n(...s)));
}
function z0(...e) {
  return (r) => (n, s) => {
    const o = r(n, s);
    let m = () => {
      throw new Error(process.env.NODE_ENV === "production" ? Qe(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const b = {
      getState: o.getState,
      dispatch: (d, ...a) => m(d, ...a)
    }, u = e.map((d) => d(b));
    return m = Ar(...u)(o.dispatch), {
      ...o,
      dispatch: m
    };
  };
}
function rs(e) {
  return ft(e) && "type" in e && typeof e.type == "string";
}
var ns = Symbol.for("immer-nothing"), Xt = Symbol.for("immer-draftable"), et = Symbol.for("immer-state"), Xa = process.env.NODE_ENV !== "production" ? [
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
function $e(e, ...r) {
  if (process.env.NODE_ENV !== "production") {
    const n = Xa[e], s = typeof n == "function" ? n.apply(null, r) : n;
    throw new Error(`[Immer] ${s}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ft = Object.getPrototypeOf;
function xt(e) {
  return !!e && !!e[et];
}
function dt(e) {
  var r;
  return e ? Za(e) || Array.isArray(e) || !!e[Xt] || !!((r = e.constructor) != null && r[Xt]) || ir(e) || cr(e) : !1;
}
var q0 = Object.prototype.constructor.toString();
function Za(e) {
  if (!e || typeof e != "object")
    return !1;
  const r = Ft(e);
  if (r === null)
    return !0;
  const n = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === q0;
}
function $0(e) {
  return xt(e) || $e(15, e), e[et].base_;
}
function tr(e, r) {
  Rt(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    r(n, e[n], e);
  }) : e.forEach((n, s) => r(s, n, e));
}
function Rt(e) {
  const r = e[et];
  return r ? r.type_ : Array.isArray(e) ? 1 : ir(e) ? 2 : cr(e) ? 3 : 0;
}
function rr(e, r) {
  return Rt(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function Wr(e, r) {
  return Rt(e) === 2 ? e.get(r) : e[r];
}
function Ja(e, r, n) {
  const s = Rt(e);
  s === 2 ? e.set(r, n) : s === 3 ? e.add(n) : e[r] = n;
}
function H0(e, r) {
  return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function ir(e) {
  return e instanceof Map;
}
function cr(e) {
  return e instanceof Set;
}
function _t(e) {
  return e.copy_ || e.base_;
}
function Hn(e, r) {
  if (ir(e))
    return new Map(e);
  if (cr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Za(e);
  if (r === !0 || r === "class_only" && !n) {
    const s = Object.getOwnPropertyDescriptors(e);
    delete s[et];
    let o = Reflect.ownKeys(s);
    for (let m = 0; m < o.length; m++) {
      const b = o[m], u = s[b];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (s[b] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[b]
      });
    }
    return Object.create(Ft(e), s);
  } else {
    const s = Ft(e);
    if (s !== null && n)
      return { ...e };
    const o = Object.create(s);
    return Object.assign(o, e);
  }
}
function ss(e, r = !1) {
  return Pr(e) || xt(e) || !dt(e) || (Rt(e) > 1 && (e.set = e.add = e.clear = e.delete = V0), Object.freeze(e), r && Object.entries(e).forEach(([n, s]) => ss(s, !0))), e;
}
function V0() {
  $e(2);
}
function Pr(e) {
  return Object.isFrozen(e);
}
var Vn = {};
function Ot(e) {
  const r = Vn[e];
  return r || $e(0, e), r;
}
function W0(e, r) {
  Vn[e] || (Vn[e] = r);
}
var nr;
function eo() {
  return nr;
}
function Q0(e, r) {
  return {
    drafts_: [],
    parent_: e,
    immer_: r,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function As(e, r) {
  r && (Ot("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = r);
}
function Wn(e) {
  Qn(e), e.drafts_.forEach(U0), e.drafts_ = null;
}
function Qn(e) {
  e === nr && (nr = e.parent_);
}
function _s(e) {
  return nr = Q0(nr, e);
}
function U0(e) {
  const r = e[et];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : r.revoked_ = !0;
}
function Ds(e, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const n = r.drafts_[0];
  return e !== void 0 && e !== n ? (n[et].modified_ && (Wn(r), $e(4)), dt(e) && (e = _r(r, e), r.parent_ || Dr(r, e)), r.patches_ && Ot("Patches").generateReplacementPatches_(
    n[et].base_,
    e,
    r.patches_,
    r.inversePatches_
  )) : e = _r(r, n, []), Wn(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), e !== ns ? e : void 0;
}
function _r(e, r, n) {
  if (Pr(r))
    return r;
  const s = r[et];
  if (!s)
    return tr(
      r,
      (o, m) => Bs(e, s, r, o, m, n)
    ), r;
  if (s.scope_ !== e)
    return r;
  if (!s.modified_)
    return Dr(e, s.base_, !0), s.base_;
  if (!s.finalized_) {
    s.finalized_ = !0, s.scope_.unfinalizedDrafts_--;
    const o = s.copy_;
    let m = o, b = !1;
    s.type_ === 3 && (m = new Set(o), o.clear(), b = !0), tr(
      m,
      (u, d) => Bs(e, s, o, u, d, n, b)
    ), Dr(e, o, !1), n && e.patches_ && Ot("Patches").generatePatches_(
      s,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return s.copy_;
}
function Bs(e, r, n, s, o, m, b) {
  if (process.env.NODE_ENV !== "production" && o === n && $e(5), xt(o)) {
    const u = m && r && r.type_ !== 3 && // Set objects are atomic since they have no keys.
    !rr(r.assigned_, s) ? m.concat(s) : void 0, d = _r(e, o, u);
    if (Ja(n, s, d), xt(d))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else b && n.add(o);
  if (dt(o) && !Pr(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    _r(e, o), (!r || !r.scope_.parent_) && typeof s != "symbol" && Object.prototype.propertyIsEnumerable.call(n, s) && Dr(e, o);
  }
}
function Dr(e, r, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ss(r, n);
}
function K0(e, r) {
  const n = Array.isArray(e), s = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: r ? r.scope_ : eo(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: r,
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
  let o = s, m = as;
  n && (o = [s], m = sr);
  const { revoke: b, proxy: u } = Proxy.revocable(o, m);
  return s.draft_ = u, s.revoke_ = b, u;
}
var as = {
  get(e, r) {
    if (r === et)
      return e;
    const n = _t(e);
    if (!rr(n, r))
      return G0(e, n, r);
    const s = n[r];
    return e.finalized_ || !dt(s) ? s : s === Qr(e.base_, r) ? (Ur(e), e.copy_[r] = Kn(s, e)) : s;
  },
  has(e, r) {
    return r in _t(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(_t(e));
  },
  set(e, r, n) {
    const s = to(_t(e), r);
    if (s != null && s.set)
      return s.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Qr(_t(e), r), m = o == null ? void 0 : o[et];
      if (m && m.base_ === n)
        return e.copy_[r] = n, e.assigned_[r] = !1, !0;
      if (H0(n, o) && (n !== void 0 || rr(e.base_, r)))
        return !0;
      Ur(e), Un(e);
    }
    return e.copy_[r] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || r in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[r]) || (e.copy_[r] = n, e.assigned_[r] = !0), !0;
  },
  deleteProperty(e, r) {
    return Qr(e.base_, r) !== void 0 || r in e.base_ ? (e.assigned_[r] = !1, Ur(e), Un(e)) : delete e.assigned_[r], e.copy_ && delete e.copy_[r], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, r) {
    const n = _t(e), s = Reflect.getOwnPropertyDescriptor(n, r);
    return s && {
      writable: !0,
      configurable: e.type_ !== 1 || r !== "length",
      enumerable: s.enumerable,
      value: n[r]
    };
  },
  defineProperty() {
    $e(11);
  },
  getPrototypeOf(e) {
    return Ft(e.base_);
  },
  setPrototypeOf() {
    $e(12);
  }
}, sr = {};
tr(as, (e, r) => {
  sr[e] = function() {
    return arguments[0] = arguments[0][0], r.apply(this, arguments);
  };
});
sr.deleteProperty = function(e, r) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(r)) && $e(13), sr.set.call(this, e, r, void 0);
};
sr.set = function(e, r, n) {
  return process.env.NODE_ENV !== "production" && r !== "length" && isNaN(parseInt(r)) && $e(14), as.set.call(this, e[0], r, n, e[0]);
};
function Qr(e, r) {
  const n = e[et];
  return (n ? _t(n) : e)[r];
}
function G0(e, r, n) {
  var o;
  const s = to(r, n);
  return s ? "value" in s ? s.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = s.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function to(e, r) {
  if (!(r in e))
    return;
  let n = Ft(e);
  for (; n; ) {
    const s = Object.getOwnPropertyDescriptor(n, r);
    if (s)
      return s;
    n = Ft(n);
  }
}
function Un(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Un(e.parent_));
}
function Ur(e) {
  e.copy_ || (e.copy_ = Hn(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Y0 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (r, n, s) => {
      if (typeof r == "function" && typeof n != "function") {
        const m = n;
        n = r;
        const b = this;
        return function(d = m, ...a) {
          return b.produce(d, (l) => n.call(this, l, ...a));
        };
      }
      typeof n != "function" && $e(6), s !== void 0 && typeof s != "function" && $e(7);
      let o;
      if (dt(r)) {
        const m = _s(this), b = Kn(r, void 0);
        let u = !0;
        try {
          o = n(b), u = !1;
        } finally {
          u ? Wn(m) : Qn(m);
        }
        return As(m, s), Ds(o, m);
      } else if (!r || typeof r != "object") {
        if (o = n(r), o === void 0 && (o = r), o === ns && (o = void 0), this.autoFreeze_ && ss(o, !0), s) {
          const m = [], b = [];
          Ot("Patches").generateReplacementPatches_(r, o, m, b), s(m, b);
        }
        return o;
      } else
        $e(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (typeof r == "function")
        return (b, ...u) => this.produceWithPatches(b, (d) => r(d, ...u));
      let s, o;
      return [this.produce(r, n, (b, u) => {
        s = b, o = u;
      }), s, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    dt(e) || $e(8), xt(e) && (e = X0(e));
    const r = _s(this), n = Kn(e, void 0);
    return n[et].isManual_ = !0, Qn(r), n;
  }
  finishDraft(e, r) {
    const n = e && e[et];
    (!n || !n.isManual_) && $e(9);
    const { scope_: s } = n;
    return As(s, r), Ds(void 0, s);
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
  applyPatches(e, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const o = r[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const s = Ot("Patches").applyPatches_;
    return xt(e) ? s(e, r) : this.produce(
      e,
      (o) => s(o, r)
    );
  }
};
function Kn(e, r) {
  const n = ir(e) ? Ot("MapSet").proxyMap_(e, r) : cr(e) ? Ot("MapSet").proxySet_(e, r) : K0(e, r);
  return (r ? r.scope_ : eo()).drafts_.push(n), n;
}
function X0(e) {
  return xt(e) || $e(10, e), ro(e);
}
function ro(e) {
  if (!dt(e) || Pr(e))
    return e;
  const r = e[et];
  let n;
  if (r) {
    if (!r.modified_)
      return r.base_;
    r.finalized_ = !0, n = Hn(e, r.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Hn(e, !0);
  return tr(n, (s, o) => {
    Ja(n, s, ro(o));
  }), r && (r.finalized_ = !1), n;
}
function Z0() {
  process.env.NODE_ENV !== "production" && Xa.push(
    'Sets cannot have "replace" patches.',
    function(i) {
      return "Unsupported patch operation: " + i;
    },
    function(i) {
      return "Cannot apply patch, path doesn't resolve: " + i;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const r = "replace", n = "add", s = "remove";
  function o(i, f, p, g) {
    switch (i.type_) {
      case 0:
      case 2:
        return b(
          i,
          f,
          p,
          g
        );
      case 1:
        return m(i, f, p, g);
      case 3:
        return u(
          i,
          f,
          p,
          g
        );
    }
  }
  function m(i, f, p, g) {
    let { base_: y, assigned_: E } = i, v = i.copy_;
    v.length < y.length && ([y, v] = [v, y], [p, g] = [g, p]);
    for (let x = 0; x < y.length; x++)
      if (E[x] && v[x] !== y[x]) {
        const c = f.concat([x]);
        p.push({
          op: r,
          path: c,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: w(v[x])
        }), g.push({
          op: r,
          path: c,
          value: w(y[x])
        });
      }
    for (let x = y.length; x < v.length; x++) {
      const c = f.concat([x]);
      p.push({
        op: n,
        path: c,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: w(v[x])
      });
    }
    for (let x = v.length - 1; y.length <= x; --x) {
      const c = f.concat([x]);
      g.push({
        op: s,
        path: c
      });
    }
  }
  function b(i, f, p, g) {
    const { base_: y, copy_: E } = i;
    tr(i.assigned_, (v, x) => {
      const c = Wr(y, v), h = Wr(E, v), j = x ? rr(y, v) ? r : n : s;
      if (c === h && j === r)
        return;
      const k = f.concat(v);
      p.push(j === s ? { op: j, path: k } : { op: j, path: k, value: h }), g.push(
        j === n ? { op: s, path: k } : j === s ? { op: n, path: k, value: w(c) } : { op: r, path: k, value: w(c) }
      );
    });
  }
  function u(i, f, p, g) {
    let { base_: y, copy_: E } = i, v = 0;
    y.forEach((x) => {
      if (!E.has(x)) {
        const c = f.concat([v]);
        p.push({
          op: s,
          path: c,
          value: x
        }), g.unshift({
          op: n,
          path: c,
          value: x
        });
      }
      v++;
    }), v = 0, E.forEach((x) => {
      if (!y.has(x)) {
        const c = f.concat([v]);
        p.push({
          op: n,
          path: c,
          value: x
        }), g.unshift({
          op: s,
          path: c,
          value: x
        });
      }
      v++;
    });
  }
  function d(i, f, p, g) {
    p.push({
      op: r,
      path: [],
      value: f === ns ? void 0 : f
    }), g.push({
      op: r,
      path: [],
      value: i
    });
  }
  function a(i, f) {
    return f.forEach((p) => {
      const { path: g, op: y } = p;
      let E = i;
      for (let h = 0; h < g.length - 1; h++) {
        const j = Rt(E);
        let k = g[h];
        typeof k != "string" && typeof k != "number" && (k = "" + k), (j === 0 || j === 1) && (k === "__proto__" || k === "constructor") && $e(19), typeof E == "function" && k === "prototype" && $e(19), E = Wr(E, k), typeof E != "object" && $e(18, g.join("/"));
      }
      const v = Rt(E), x = l(p.value), c = g[g.length - 1];
      switch (y) {
        case r:
          switch (v) {
            case 2:
              return E.set(c, x);
            case 3:
              $e(16);
            default:
              return E[c] = x;
          }
        case n:
          switch (v) {
            case 1:
              return c === "-" ? E.push(x) : E.splice(c, 0, x);
            case 2:
              return E.set(c, x);
            case 3:
              return E.add(x);
            default:
              return E[c] = x;
          }
        case s:
          switch (v) {
            case 1:
              return E.splice(c, 1);
            case 2:
              return E.delete(c);
            case 3:
              return E.delete(p.value);
            default:
              return delete E[c];
          }
        default:
          $e(17, y);
      }
    }), i;
  }
  function l(i) {
    if (!dt(i))
      return i;
    if (Array.isArray(i))
      return i.map(l);
    if (ir(i))
      return new Map(
        Array.from(i.entries()).map(([p, g]) => [p, l(g)])
      );
    if (cr(i))
      return new Set(Array.from(i).map(l));
    const f = Object.create(Ft(i));
    for (const p in i)
      f[p] = l(i[p]);
    return rr(i, Xt) && (f[Xt] = i[Xt]), f;
  }
  function w(i) {
    return xt(i) ? l(i) : i;
  }
  W0("Patches", {
    applyPatches_: a,
    generatePatches_: o,
    generateReplacementPatches_: d
  });
}
var rt = new Y0(), lr = rt.produce, no = rt.produceWithPatches.bind(
  rt
);
rt.setAutoFreeze.bind(rt);
rt.setUseStrictShallowCopy.bind(rt);
var Ss = rt.applyPatches.bind(rt);
rt.createDraft.bind(rt);
rt.finishDraft.bind(rt);
var J0 = (e, r, n) => {
  if (r.length === 1 && r[0] === n) {
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
      } catch (m) {
        ({ stack: o } = m);
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
}, ei = (e, r, n) => {
  const { memoize: s, memoizeOptions: o } = r, { inputSelectorResults: m, inputSelectorResultsCopy: b } = e, u = s(() => ({}), ...o);
  if (!(u.apply(null, m) === u.apply(null, b))) {
    let a;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: a } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: m,
        secondInputs: b,
        stack: a
      }
    );
  }
}, ti = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function ri(e, r = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(r);
}
function ni(e, r = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(r);
}
function si(e, r = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (s) => typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s
    ).join(", ");
    throw new TypeError(`${r}[${n}]`);
  }
}
var Fs = (e) => Array.isArray(e) ? e : [e];
function ai(e) {
  const r = Array.isArray(e[0]) ? e[0] : e;
  return si(
    r,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), r;
}
function Rs(e, r) {
  const n = [], { length: s } = e;
  for (let o = 0; o < s; o++)
    n.push(e[o].apply(null, r));
  return n;
}
var oi = (e, r) => {
  const { identityFunctionCheck: n, inputStabilityCheck: s } = {
    ...ti,
    ...r
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: J0
    },
    inputStabilityCheck: {
      shouldRun: s === "always" || s === "once" && e,
      run: ei
    }
  };
}, ii = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ci = typeof WeakRef < "u" ? WeakRef : ii, li = 0, Os = 1;
function hr() {
  return {
    s: li,
    v: void 0,
    o: null,
    p: null
  };
}
function Br(e, r = {}) {
  let n = hr();
  const { resultEqualityCheck: s } = r;
  let o, m = 0;
  function b() {
    var w;
    let u = n;
    const { length: d } = arguments;
    for (let i = 0, f = d; i < f; i++) {
      const p = arguments[i];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let g = u.o;
        g === null && (u.o = g = /* @__PURE__ */ new WeakMap());
        const y = g.get(p);
        y === void 0 ? (u = hr(), g.set(p, u)) : u = y;
      } else {
        let g = u.p;
        g === null && (u.p = g = /* @__PURE__ */ new Map());
        const y = g.get(p);
        y === void 0 ? (u = hr(), g.set(p, u)) : u = y;
      }
    }
    const a = u;
    let l;
    if (u.s === Os)
      l = u.v;
    else if (l = e.apply(null, arguments), m++, s) {
      const i = ((w = o == null ? void 0 : o.deref) == null ? void 0 : w.call(o)) ?? o;
      i != null && s(i, l) && (l = i, m !== 0 && m--), o = typeof l == "object" && l !== null || typeof l == "function" ? new ci(l) : l;
    }
    return a.s = Os, a.v = l, l;
  }
  return b.clearCache = () => {
    n = hr(), b.resetResultsCount();
  }, b.resultsCount = () => m, b.resetResultsCount = () => {
    m = 0;
  }, b;
}
function di(e, ...r) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: r
  } : e, s = (...o) => {
    let m = 0, b = 0, u, d = {}, a = o.pop();
    typeof a == "object" && (d = a, a = o.pop()), ri(
      a,
      `createSelector expects an output function after the inputs, but received: [${typeof a}]`
    );
    const l = {
      ...n,
      ...d
    }, {
      memoize: w,
      memoizeOptions: i = [],
      argsMemoize: f = Br,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = l, y = Fs(i), E = Fs(p), v = ai(o), x = w(function() {
      return m++, a.apply(
        null,
        arguments
      );
    }, ...y);
    let c = !0;
    const h = f(function() {
      b++;
      const k = Rs(
        v,
        arguments
      );
      if (u = x.apply(null, k), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: B, inputStabilityCheck: A } = oi(c, g);
        if (B.shouldRun && B.run(
          a,
          k,
          u
        ), A.shouldRun) {
          const C = Rs(
            v,
            arguments
          );
          A.run(
            { inputSelectorResults: k, inputSelectorResultsCopy: C },
            { memoize: w, memoizeOptions: y },
            arguments
          );
        }
        c && (c = !1);
      }
      return u;
    }, ...E);
    return Object.assign(h, {
      resultFunc: a,
      memoizedResultFunc: x,
      dependencies: v,
      dependencyRecomputations: () => b,
      resetDependencyRecomputations: () => {
        b = 0;
      },
      lastResult: () => u,
      recomputations: () => m,
      resetRecomputations: () => {
        m = 0;
      },
      memoize: w,
      argsMemoize: f
    });
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var os = /* @__PURE__ */ di(Br), ui = Object.assign(
  (e, r = os) => {
    ni(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), s = n.map(
      (m) => e[m]
    );
    return r(
      s,
      (...m) => m.reduce((b, u, d) => (b[n[d]] = u, b), {})
    );
  },
  { withTypes: () => ui }
);
function so(e) {
  return ({ dispatch: n, getState: s }) => (o) => (m) => typeof m == "function" ? m(n, s, e) : o(m);
}
var fi = so(), xi = so, hi = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ar : Ar.apply(null, arguments);
}, ao = (e) => e && typeof e.match == "function";
function lt(e, r) {
  function n(...s) {
    if (r) {
      let o = r(...s);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? ke(0) : "prepareAction did not return an object");
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
  return n.toString = () => `${e}`, n.type = e, n.match = (s) => rs(s) && s.type === e, n;
}
function pi(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  ao(e);
}
function mi(e) {
  const r = e ? `${e}`.split("/") : [], n = r[r.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function gi(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (s) => n(s);
  const {
    isActionCreator: r = pi
  } = e;
  return () => (n) => (s) => (r(s) && console.warn(mi(s.type)), n(s));
}
function oo(e, r) {
  let n = 0;
  return {
    measureTime(s) {
      const o = Date.now();
      try {
        return s();
      } finally {
        const m = Date.now();
        n += m - o;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${r} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var io = class Yt extends Array {
  constructor(...r) {
    super(...r), Object.setPrototypeOf(this, Yt.prototype);
  }
  static get [Symbol.species]() {
    return Yt;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0]) ? new Yt(...r[0].concat(this)) : new Yt(...r.concat(this));
  }
};
function Ts(e) {
  return dt(e) ? lr(e, () => {
  }) : e;
}
function pr(e, r, n) {
  return e.has(r) ? e.get(r) : e.set(r, n(r)).get(r);
}
function yi(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function vi(e, r, n) {
  const s = co(e, r, n);
  return {
    detectMutations() {
      return lo(e, r, s, n);
    }
  };
}
function co(e, r = [], n, s = "", o = /* @__PURE__ */ new Set()) {
  const m = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), m.children = {};
    for (const b in n) {
      const u = s ? s + "." + b : b;
      r.length && r.indexOf(u) !== -1 || (m.children[b] = co(e, r, n[b], u));
    }
  }
  return m;
}
function lo(e, r = [], n, s, o = !1, m = "") {
  const b = n ? n.value : void 0, u = b === s;
  if (o && !u && !Number.isNaN(s))
    return {
      wasMutated: !0,
      path: m
    };
  if (e(b) || e(s))
    return {
      wasMutated: !1
    };
  const d = {};
  for (let l in n.children)
    d[l] = !0;
  for (let l in s)
    d[l] = !0;
  const a = r.length > 0;
  for (let l in d) {
    const w = m ? m + "." + l : l;
    if (a && r.some((p) => p instanceof RegExp ? p.test(w) : w === p))
      continue;
    const i = lo(e, r, n.children[l], s[l], u, w);
    if (i.wasMutated)
      return i;
  }
  return {
    wasMutated: !1
  };
}
function bi(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  {
    let r = function(u, d, a, l) {
      return JSON.stringify(u, n(d, l), a);
    }, n = function(u, d) {
      let a = [], l = [];
      return d || (d = function(w, i) {
        return a[0] === i ? "[Circular ~]" : "[Circular ~." + l.slice(0, a.indexOf(i)).join(".") + "]";
      }), function(w, i) {
        if (a.length > 0) {
          var f = a.indexOf(this);
          ~f ? a.splice(f + 1) : a.push(this), ~f ? l.splice(f, 1 / 0, w) : l.push(w), ~a.indexOf(i) && (i = d.call(this, w, i));
        } else a.push(i);
        return u == null ? i : u.call(this, w, i);
      };
    }, {
      isImmutable: s = yi,
      ignoredPaths: o,
      warnAfter: m = 32
    } = e;
    const b = vi.bind(null, s, o);
    return ({
      getState: u
    }) => {
      let d = u(), a = b(d), l;
      return (w) => (i) => {
        const f = oo(m, "ImmutableStateInvariantMiddleware");
        f.measureTime(() => {
          if (d = u(), l = a.detectMutations(), a = b(d), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ke(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const p = w(i);
        return f.measureTime(() => {
          if (d = u(), l = a.detectMutations(), a = b(d), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ke(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${r(i)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), f.warnIfExceeded(), p;
      };
    };
  }
}
function uo(e) {
  const r = typeof e;
  return e == null || r === "string" || r === "boolean" || r === "number" || Array.isArray(e) || ft(e);
}
function Gn(e, r = "", n = uo, s, o = [], m) {
  let b;
  if (!n(e))
    return {
      keyPath: r || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || m != null && m.has(e)) return !1;
  const u = s != null ? s(e) : Object.entries(e), d = o.length > 0;
  for (const [a, l] of u) {
    const w = r ? r + "." + a : a;
    if (!(d && o.some((f) => f instanceof RegExp ? f.test(w) : w === f))) {
      if (!n(l))
        return {
          keyPath: w,
          value: l
        };
      if (typeof l == "object" && (b = Gn(l, w, n, s, o, m), b))
        return b;
    }
  }
  return m && fo(e) && m.add(e), !1;
}
function fo(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const r of Object.values(e))
    if (!(typeof r != "object" || r === null) && !fo(r))
      return !1;
  return !0;
}
function wi(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  {
    const {
      isSerializable: r = uo,
      getEntries: n,
      ignoredActions: s = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: m = [],
      warnAfter: b = 32,
      ignoreState: u = !1,
      ignoreActions: d = !1,
      disableCache: a = !1
    } = e, l = !a && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (w) => (i) => (f) => {
      if (!rs(f))
        return i(f);
      const p = i(f), g = oo(b, "SerializableStateInvariantMiddleware");
      return !d && !(s.length && s.indexOf(f.type) !== -1) && g.measureTime(() => {
        const y = Gn(f, "", r, n, o, l);
        if (y) {
          const {
            keyPath: E,
            value: v
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${E}\`. Value:`, v, `
Take a look at the logic that dispatched this action: `, f, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), u || (g.measureTime(() => {
        const y = w.getState(), E = Gn(y, "", r, n, m, l);
        if (E) {
          const {
            keyPath: v,
            value: x
          } = E;
          console.error(`A non-serializable value was detected in the state, in the path: \`${v}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${f.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), p;
    };
  }
}
function mr(e) {
  return typeof e == "boolean";
}
var Ci = () => function(r) {
  const {
    thunk: n = !0,
    immutableCheck: s = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: m = !0
  } = r ?? {};
  let b = new io();
  if (n && (mr(n) ? b.push(fi) : b.push(xi(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (s) {
      let u = {};
      mr(s) || (u = s), b.unshift(bi(u));
    }
    if (o) {
      let u = {};
      mr(o) || (u = o), b.push(wi(u));
    }
    if (m) {
      let u = {};
      mr(m) || (u = m), b.unshift(gi(u));
    }
  }
  return b;
}, Ir = "RTK_autoBatch", Ut = () => (e) => ({
  payload: e,
  meta: {
    [Ir]: !0
  }
}), Ps = (e) => (r) => {
  setTimeout(r, e);
}, Ei = (e = {
  type: "raf"
}) => (r) => (...n) => {
  const s = r(...n);
  let o = !0, m = !1, b = !1;
  const u = /* @__PURE__ */ new Set(), d = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ps(10)
  ) : e.type === "callback" ? e.queueNotification : Ps(e.timeout), a = () => {
    b = !1, m && (m = !1, u.forEach((l) => l()));
  };
  return Object.assign({}, s, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const w = () => o && l(), i = s.subscribe(w);
      return u.add(l), () => {
        i(), u.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      var w;
      try {
        return o = !((w = l == null ? void 0 : l.meta) != null && w[Ir]), m = !o, m && (b || (b = !0, d(a))), s.dispatch(l);
      } finally {
        o = !0;
      }
    }
  });
}, ji = (e) => function(n) {
  const {
    autoBatch: s = !0
  } = n ?? {};
  let o = new io(e);
  return s && o.push(Ei(typeof s == "object" ? s : void 0)), o;
};
function Ni(e) {
  const r = Ci(), {
    reducer: n = void 0,
    middleware: s,
    devTools: o = !0,
    duplicateMiddlewareCheck: m = !0,
    preloadedState: b = void 0,
    enhancers: u = void 0
  } = e || {};
  let d;
  if (typeof n == "function")
    d = n;
  else if (ft(n))
    d = Ya(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? ke(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && s && typeof s != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ke(2) : "`middleware` field must be a callback");
  let a;
  if (typeof s == "function") {
    if (a = s(r), process.env.NODE_ENV !== "production" && !Array.isArray(a))
      throw new Error(process.env.NODE_ENV === "production" ? ke(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    a = r();
  if (process.env.NODE_ENV !== "production" && a.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ke(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && m) {
    let g = /* @__PURE__ */ new Set();
    a.forEach((y) => {
      if (g.has(y))
        throw new Error(process.env.NODE_ENV === "production" ? ke(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      g.add(y);
    });
  }
  let l = Ar;
  o && (l = hi({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const w = z0(...a), i = ji(w);
  if (process.env.NODE_ENV !== "production" && u && typeof u != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ke(5) : "`enhancers` field must be a callback");
  let f = typeof u == "function" ? u(i) : i();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(f))
    throw new Error(process.env.NODE_ENV === "production" ? ke(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && f.some((g) => typeof g != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ke(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && a.length && !f.includes(w) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const p = l(...f);
  return Ga(d, b, p);
}
function xo(e) {
  const r = {}, n = [];
  let s;
  const o = {
    addCase(m, b) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? ke(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? ke(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof m == "string" ? m : m.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? ke(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in r)
        throw new Error(process.env.NODE_ENV === "production" ? ke(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return r[u] = b, o;
    },
    addMatcher(m, b) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? ke(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: m,
        reducer: b
      }), o;
    },
    addDefaultCase(m) {
      if (process.env.NODE_ENV !== "production" && s)
        throw new Error(process.env.NODE_ENV === "production" ? ke(31) : "`builder.addDefaultCase` can only be called once");
      return s = m, o;
    }
  };
  return e(o), [r, n, s];
}
function ki(e) {
  return typeof e == "function";
}
function Ai(e, r) {
  if (process.env.NODE_ENV !== "production" && typeof r == "object")
    throw new Error(process.env.NODE_ENV === "production" ? ke(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, s, o] = xo(r), m;
  if (ki(e))
    m = () => Ts(e());
  else {
    const u = Ts(e);
    m = () => u;
  }
  function b(u = m(), d) {
    let a = [n[d.type], ...s.filter(({
      matcher: l
    }) => l(d)).map(({
      reducer: l
    }) => l)];
    return a.filter((l) => !!l).length === 0 && (a = [o]), a.reduce((l, w) => {
      if (w)
        if (xt(l)) {
          const f = w(l, d);
          return f === void 0 ? l : f;
        } else {
          if (dt(l))
            return lr(l, (i) => w(i, d));
          {
            const i = w(l, d);
            if (i === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return i;
          }
        }
      return l;
    }, u);
  }
  return b.getInitialState = m, b;
}
var ho = (e, r) => ao(e) ? e.match(r) : e(r);
function gt(...e) {
  return (r) => e.some((n) => ho(n, r));
}
function Zt(...e) {
  return (r) => e.every((n) => ho(n, r));
}
function Mr(e, r) {
  if (!e || !e.meta) return !1;
  const n = typeof e.meta.requestId == "string", s = r.indexOf(e.meta.requestStatus) > -1;
  return n && s;
}
function dr(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function is(...e) {
  return e.length === 0 ? (r) => Mr(r, ["pending"]) : dr(e) ? gt(...e.map((r) => r.pending)) : is()(e[0]);
}
function Ht(...e) {
  return e.length === 0 ? (r) => Mr(r, ["rejected"]) : dr(e) ? gt(...e.map((r) => r.rejected)) : Ht()(e[0]);
}
function Lr(...e) {
  const r = (n) => n && n.meta && n.meta.rejectedWithValue;
  return e.length === 0 ? Zt(Ht(...e), r) : dr(e) ? Zt(Ht(...e), r) : Lr()(e[0]);
}
function Ct(...e) {
  return e.length === 0 ? (r) => Mr(r, ["fulfilled"]) : dr(e) ? gt(...e.map((r) => r.fulfilled)) : Ct()(e[0]);
}
function Yn(...e) {
  return e.length === 0 ? (r) => Mr(r, ["pending", "fulfilled", "rejected"]) : dr(e) ? gt(...e.flatMap((r) => [r.pending, r.rejected, r.fulfilled])) : Yn()(e[0]);
}
var _i = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", cs = (e = 21) => {
  let r = "", n = e;
  for (; n--; )
    r += _i[Math.random() * 64 | 0];
  return r;
}, Di = ["name", "message", "stack", "code"], Kr = class {
  constructor(e, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    xr(this, "_type");
    this.payload = e, this.meta = r;
  }
}, Is = class {
  constructor(e, r) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    xr(this, "_type");
    this.payload = e, this.meta = r;
  }
}, Bi = (e) => {
  if (typeof e == "object" && e !== null) {
    const r = {};
    for (const n of Di)
      typeof e[n] == "string" && (r[n] = e[n]);
    return r;
  }
  return {
    message: String(e)
  };
}, Ms = "External signal was aborted", Ls = /* @__PURE__ */ (() => {
  function e(r, n, s) {
    const o = lt(r + "/fulfilled", (d, a, l, w) => ({
      payload: d,
      meta: {
        ...w || {},
        arg: l,
        requestId: a,
        requestStatus: "fulfilled"
      }
    })), m = lt(r + "/pending", (d, a, l) => ({
      payload: void 0,
      meta: {
        ...l || {},
        arg: a,
        requestId: d,
        requestStatus: "pending"
      }
    })), b = lt(r + "/rejected", (d, a, l, w, i) => ({
      payload: w,
      error: (s && s.serializeError || Bi)(d || "Rejected"),
      meta: {
        ...i || {},
        arg: l,
        requestId: a,
        rejectedWithValue: !!w,
        requestStatus: "rejected",
        aborted: (d == null ? void 0 : d.name) === "AbortError",
        condition: (d == null ? void 0 : d.name) === "ConditionError"
      }
    }));
    function u(d, {
      signal: a
    } = {}) {
      return (l, w, i) => {
        const f = s != null && s.idGenerator ? s.idGenerator(d) : cs(), p = new AbortController();
        let g, y;
        function E(x) {
          y = x, p.abort();
        }
        a && (a.aborted ? E(Ms) : a.addEventListener("abort", () => E(Ms), {
          once: !0
        }));
        const v = async function() {
          var h, j;
          let x;
          try {
            let k = (h = s == null ? void 0 : s.condition) == null ? void 0 : h.call(s, d, {
              getState: w,
              extra: i
            });
            if (Fi(k) && (k = await k), k === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const B = new Promise((A, C) => {
              g = () => {
                C({
                  name: "AbortError",
                  message: y || "Aborted"
                });
              }, p.signal.addEventListener("abort", g);
            });
            l(m(f, d, (j = s == null ? void 0 : s.getPendingMeta) == null ? void 0 : j.call(s, {
              requestId: f,
              arg: d
            }, {
              getState: w,
              extra: i
            }))), x = await Promise.race([B, Promise.resolve(n(d, {
              dispatch: l,
              getState: w,
              extra: i,
              requestId: f,
              signal: p.signal,
              abort: E,
              rejectWithValue: (A, C) => new Kr(A, C),
              fulfillWithValue: (A, C) => new Is(A, C)
            })).then((A) => {
              if (A instanceof Kr)
                throw A;
              return A instanceof Is ? o(A.payload, f, d, A.meta) : o(A, f, d);
            })]);
          } catch (k) {
            x = k instanceof Kr ? b(null, f, d, k.payload, k.meta) : b(k, f, d);
          } finally {
            g && p.signal.removeEventListener("abort", g);
          }
          return s && !s.dispatchConditionRejection && b.match(x) && x.meta.condition || l(x), x;
        }();
        return Object.assign(v, {
          abort: E,
          requestId: f,
          arg: d,
          unwrap() {
            return v.then(Si);
          }
        });
      };
    }
    return Object.assign(u, {
      pending: m,
      rejected: b,
      fulfilled: o,
      settled: gt(b, o),
      typePrefix: r
    });
  }
  return e.withTypes = () => e, e;
})();
function Si(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Fi(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ri = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Oi(e, r) {
  return `${e}/${r}`;
}
function Ti({
  creators: e
} = {}) {
  var n;
  const r = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Ri];
  return function(o) {
    const {
      name: m,
      reducerPath: b = m
    } = o;
    if (!m)
      throw new Error(process.env.NODE_ENV === "production" ? ke(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const u = (typeof o.reducers == "function" ? o.reducers(Ii()) : o.reducers) || {}, d = Object.keys(u), a = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, l = {
      addCase(c, h) {
        const j = typeof c == "string" ? c : c.type;
        if (!j)
          throw new Error(process.env.NODE_ENV === "production" ? ke(12) : "`context.addCase` cannot be called with an empty action type");
        if (j in a.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? ke(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + j);
        return a.sliceCaseReducersByType[j] = h, l;
      },
      addMatcher(c, h) {
        return a.sliceMatchers.push({
          matcher: c,
          reducer: h
        }), l;
      },
      exposeAction(c, h) {
        return a.actionCreators[c] = h, l;
      },
      exposeCaseReducer(c, h) {
        return a.sliceCaseReducersByName[c] = h, l;
      }
    };
    d.forEach((c) => {
      const h = u[c], j = {
        reducerName: c,
        type: Oi(m, c),
        createNotation: typeof o.reducers == "function"
      };
      Li(h) ? qi(j, h, l, r) : Mi(j, h, l);
    });
    function w() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? ke(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [c = {}, h = [], j = void 0] = typeof o.extraReducers == "function" ? xo(o.extraReducers) : [o.extraReducers], k = {
        ...c,
        ...a.sliceCaseReducersByType
      };
      return Ai(o.initialState, (B) => {
        for (let A in k)
          B.addCase(A, k[A]);
        for (let A of a.sliceMatchers)
          B.addMatcher(A.matcher, A.reducer);
        for (let A of h)
          B.addMatcher(A.matcher, A.reducer);
        j && B.addDefaultCase(j);
      });
    }
    const i = (c) => c, f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let g;
    function y(c, h) {
      return g || (g = w()), g(c, h);
    }
    function E() {
      return g || (g = w()), g.getInitialState();
    }
    function v(c, h = !1) {
      function j(B) {
        let A = B[c];
        if (typeof A > "u") {
          if (h)
            A = pr(p, j, E);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? ke(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return A;
      }
      function k(B = i) {
        const A = pr(f, h, () => /* @__PURE__ */ new WeakMap());
        return pr(A, B, () => {
          const C = {};
          for (const [N, _] of Object.entries(o.selectors ?? {}))
            C[N] = Pi(_, B, () => pr(p, B, E), h);
          return C;
        });
      }
      return {
        reducerPath: c,
        getSelectors: k,
        get selectors() {
          return k(j);
        },
        selectSlice: j
      };
    }
    const x = {
      name: m,
      reducer: y,
      actions: a.actionCreators,
      caseReducers: a.sliceCaseReducersByName,
      getInitialState: E,
      ...v(b),
      injectInto(c, {
        reducerPath: h,
        ...j
      } = {}) {
        const k = h ?? b;
        return c.inject({
          reducerPath: k,
          reducer: y
        }, j), {
          ...x,
          ...v(k, !0)
        };
      }
    };
    return x;
  };
}
function Pi(e, r, n, s) {
  function o(m, ...b) {
    let u = r(m);
    if (typeof u > "u") {
      if (s)
        u = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? ke(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(u, ...b);
  }
  return o.unwrapped = e, o;
}
var Dt = /* @__PURE__ */ Ti();
function Ii() {
  function e(r, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: r,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(r) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [r.name](...n) {
          return r(...n);
        }
      }[r.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(r, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: r,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Mi({
  type: e,
  reducerName: r,
  createNotation: n
}, s, o) {
  let m, b;
  if ("reducer" in s) {
    if (n && !zi(s))
      throw new Error(process.env.NODE_ENV === "production" ? ke(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    m = s.reducer, b = s.prepare;
  } else
    m = s;
  o.addCase(e, m).exposeCaseReducer(r, m).exposeAction(r, b ? lt(e, b) : lt(e));
}
function Li(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function zi(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function qi({
  type: e,
  reducerName: r
}, n, s, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? ke(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: m,
    fulfilled: b,
    pending: u,
    rejected: d,
    settled: a,
    options: l
  } = n, w = o(e, m, l);
  s.exposeAction(r, w), b && s.addCase(w.fulfilled, b), u && s.addCase(w.pending, u), d && s.addCase(w.rejected, d), a && s.addMatcher(w.settled, a), s.exposeCaseReducer(r, {
    fulfilled: b || gr,
    pending: u || gr,
    rejected: d || gr,
    settled: a || gr
  });
}
function gr() {
}
function ke(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var $i = class extends Error {
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(r) {
    super(r[0].message);
    /**
     * The schema issues.
     */
    xr(this, "issues");
    this.name = "SchemaError", this.issues = r;
  }
}, po = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(po || {});
function zs(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var qs = ft;
function mo(e, r) {
  if (e === r || !(qs(e) && qs(r) || Array.isArray(e) && Array.isArray(r)))
    return r;
  const n = Object.keys(r), s = Object.keys(e);
  let o = n.length === s.length;
  const m = Array.isArray(r) ? [] : {};
  for (const b of n)
    m[b] = mo(e[b], r[b]), o && (o = e[b] === m[b]);
  return o ? e : m;
}
function $t(e) {
  let r = 0;
  for (const n in e)
    r++;
  return r;
}
var $s = (e) => [].concat(...e);
function Hi(e) {
  return new RegExp("(^|:)//").test(e);
}
function Vi() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Sr(e) {
  return e != null;
}
function Wi() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var Qi = (e) => e.replace(/\/$/, ""), Ui = (e) => e.replace(/^\//, "");
function Ki(e, r) {
  if (!e)
    return r;
  if (!r)
    return e;
  if (Hi(r))
    return r;
  const n = e.endsWith("/") || !r.startsWith("?") ? "/" : "";
  return e = Qi(e), r = Ui(r), `${e}${n}${r}`;
}
function Gi(e, r, n) {
  return e.has(r) ? e.get(r) : e.set(r, n).get(r);
}
var Hs = (...e) => fetch(...e), Yi = (e) => e.status >= 200 && e.status <= 299, Xi = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Vs(e) {
  if (!ft(e))
    return e;
  const r = {
    ...e
  };
  for (const [n, s] of Object.entries(r))
    s === void 0 && delete r[n];
  return r;
}
function Zi({
  baseUrl: e,
  prepareHeaders: r = (w) => w,
  fetchFn: n = Hs,
  paramsSerializer: s,
  isJsonContentType: o = Xi,
  jsonContentType: m = "application/json",
  jsonReplacer: b,
  timeout: u,
  responseHandler: d,
  validateStatus: a,
  ...l
} = {}) {
  return typeof fetch > "u" && n === Hs && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (i, f, p) => {
    const {
      getState: g,
      extra: y,
      endpoint: E,
      forced: v,
      type: x
    } = f;
    let c, {
      url: h,
      headers: j = new Headers(l.headers),
      params: k = void 0,
      responseHandler: B = d ?? "json",
      validateStatus: A = a ?? Yi,
      timeout: C = u,
      ...N
    } = typeof i == "string" ? {
      url: i
    } : i, _, D = f.signal;
    C && (_ = new AbortController(), f.signal.addEventListener("abort", _.abort), D = _.signal);
    let S = {
      ...l,
      signal: D,
      ...N
    };
    j = new Headers(Vs(j)), S.headers = await r(j, {
      getState: g,
      arg: i,
      extra: y,
      endpoint: E,
      forced: v,
      type: x,
      extraOptions: p
    }) || j;
    const R = (P) => typeof P == "object" && (ft(P) || Array.isArray(P) || typeof P.toJSON == "function");
    if (!S.headers.has("content-type") && R(S.body) && S.headers.set("content-type", m), R(S.body) && o(S.headers) && (S.body = JSON.stringify(S.body, b)), k) {
      const P = ~h.indexOf("?") ? "&" : "?", W = s ? s(k) : new URLSearchParams(Vs(k));
      h += P + W;
    }
    h = Ki(e, h);
    const M = new Request(h, S);
    c = {
      request: new Request(h, S)
    };
    let U, V = !1, K = _ && setTimeout(() => {
      V = !0, _.abort();
    }, C);
    try {
      U = await n(M);
    } catch (P) {
      return {
        error: {
          status: V ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(P)
        },
        meta: c
      };
    } finally {
      K && clearTimeout(K), _ == null || _.signal.removeEventListener("abort", _.abort);
    }
    const O = U.clone();
    c.response = O;
    let T, z = "";
    try {
      let P;
      if (await Promise.all([
        w(U, B).then((W) => T = W, (W) => P = W),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        O.text().then((W) => z = W, () => {
        })
      ]), P) throw P;
    } catch (P) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: U.status,
          data: z,
          error: String(P)
        },
        meta: c
      };
    }
    return A(U, T) ? {
      data: T,
      meta: c
    } : {
      error: {
        status: U.status,
        data: T
      },
      meta: c
    };
  };
  async function w(i, f) {
    if (typeof f == "function")
      return f(i);
    if (f === "content-type" && (f = o(i.headers) ? "json" : "text"), f === "json") {
      const p = await i.text();
      return p.length ? JSON.parse(p) : null;
    }
    return i.text();
  }
}
var Ws = class {
  constructor(e, r = void 0) {
    this.value = e, this.meta = r;
  }
}, ls = /* @__PURE__ */ lt("__rtkq/focused"), go = /* @__PURE__ */ lt("__rtkq/unfocused"), ds = /* @__PURE__ */ lt("__rtkq/online"), yo = /* @__PURE__ */ lt("__rtkq/offline");
function zr(e) {
  return e.type === "query";
}
function Ji(e) {
  return e.type === "mutation";
}
function ur(e) {
  return e.type === "infinitequery";
}
function Fr(e) {
  return zr(e) || ur(e);
}
function us(e, r, n, s, o, m) {
  return ec(e) ? e(r, n, s, o).filter(Sr).map(Xn).map(m) : Array.isArray(e) ? e.map(Xn).map(m) : [];
}
function ec(e) {
  return typeof e == "function";
}
function Xn(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function tc(e, r) {
  return e.catch(r);
}
var ar = Symbol("forceQueryFn"), Zn = (e) => typeof e[ar] == "function";
function rc({
  serializeQueryArgs: e,
  queryThunk: r,
  infiniteQueryThunk: n,
  mutationThunk: s,
  api: o,
  context: m
}) {
  const b = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: d,
    removeMutationResult: a,
    updateSubscriptionOptions: l
  } = o.internalActions;
  return {
    buildInitiateQuery: E,
    buildInitiateInfiniteQuery: v,
    buildInitiateMutation: x,
    getRunningQueryThunk: w,
    getRunningMutationThunk: i,
    getRunningQueriesThunk: f,
    getRunningMutationsThunk: p
  };
  function w(c, h) {
    return (j) => {
      var A;
      const k = m.endpointDefinitions[c], B = e({
        queryArgs: h,
        endpointDefinition: k,
        endpointName: c
      });
      return (A = b.get(j)) == null ? void 0 : A[B];
    };
  }
  function i(c, h) {
    return (j) => {
      var k;
      return (k = u.get(j)) == null ? void 0 : k[h];
    };
  }
  function f() {
    return (c) => Object.values(b.get(c) || {}).filter(Sr);
  }
  function p() {
    return (c) => Object.values(u.get(c) || {}).filter(Sr);
  }
  function g(c) {
    if (process.env.NODE_ENV !== "production") {
      if (g.triggered) return;
      const h = c(o.internalActions.internal_getRTKQSubscriptions());
      if (g.triggered = !0, typeof h != "object" || typeof (h == null ? void 0 : h.type) == "string")
        throw new Error(process.env.NODE_ENV === "production" ? ke(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function y(c, h) {
    const j = (k, {
      subscribe: B = !0,
      forceRefetch: A,
      subscriptionOptions: C,
      [ar]: N,
      ..._
    } = {}) => (D, S) => {
      var oe;
      const R = e({
        queryArgs: k,
        endpointDefinition: h,
        endpointName: c
      });
      let M;
      const H = {
        ..._,
        type: "query",
        subscribe: B,
        forceRefetch: A,
        subscriptionOptions: C,
        endpointName: c,
        originalArgs: k,
        queryCacheKey: R,
        [ar]: N
      };
      if (zr(h))
        M = r(H);
      else {
        const {
          direction: te,
          initialPageParam: me
        } = _;
        M = n({
          ...H,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: te,
          initialPageParam: me
        });
      }
      const U = o.endpoints[c].select(k), V = D(M), K = U(S());
      g(D);
      const {
        requestId: O,
        abort: T
      } = V, z = K.requestId !== O, P = (oe = b.get(D)) == null ? void 0 : oe[R], W = () => U(S()), ne = Object.assign(N ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        V.then(W)
      ) : z && !P ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(K)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([P, V]).then(W)
      ), {
        arg: k,
        requestId: O,
        subscriptionOptions: C,
        queryCacheKey: R,
        abort: T,
        async unwrap() {
          const te = await ne;
          if (te.isError)
            throw te.error;
          return te.data;
        },
        refetch: () => D(j(k, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          B && D(d({
            queryCacheKey: R,
            requestId: O
          }));
        },
        updateSubscriptionOptions(te) {
          ne.subscriptionOptions = te, D(l({
            endpointName: c,
            requestId: O,
            queryCacheKey: R,
            options: te
          }));
        }
      });
      if (!P && !z && !N) {
        const te = Gi(b, D, {});
        te[R] = ne, ne.then(() => {
          delete te[R], $t(te) || b.delete(D);
        });
      }
      return ne;
    };
    return j;
  }
  function E(c, h) {
    return y(c, h);
  }
  function v(c, h) {
    return y(c, h);
  }
  function x(c) {
    return (h, {
      track: j = !0,
      fixedCacheKey: k
    } = {}) => (B, A) => {
      const C = s({
        type: "mutation",
        endpointName: c,
        originalArgs: h,
        track: j,
        fixedCacheKey: k
      }), N = B(C);
      g(B);
      const {
        requestId: _,
        abort: D,
        unwrap: S
      } = N, R = tc(N.unwrap().then((V) => ({
        data: V
      })), (V) => ({
        error: V
      })), M = () => {
        B(a({
          requestId: _,
          fixedCacheKey: k
        }));
      }, H = Object.assign(R, {
        arg: N.arg,
        requestId: _,
        abort: D,
        unwrap: S,
        reset: M
      }), U = u.get(B) || {};
      return u.set(B, U), U[_] = H, H.then(() => {
        delete U[_], $t(U) || u.delete(B);
      }), k && (U[k] = H, H.then(() => {
        U[k] === H && (delete U[k], $t(U) || u.delete(B));
      })), H;
    };
  }
}
var vo = class extends $i {
  constructor(e, r, n, s) {
    super(e), this.value = r, this.schemaName = n, this._bqMeta = s;
  }
};
async function At(e, r, n, s) {
  const o = await e["~standard"].validate(r);
  if (o.issues)
    throw new vo(o.issues, r, n, s);
  return o.value;
}
function nc(e) {
  return e;
}
var Kt = (e = {}) => ({
  ...e,
  [Ir]: !0
});
function sc({
  reducerPath: e,
  baseQuery: r,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: s,
  api: o,
  assertTagType: m,
  selectors: b,
  onSchemaFailure: u,
  catchSchemaFailure: d,
  skipSchemaValidation: a
}) {
  const l = (N, _, D, S) => (R, M) => {
    const H = n[N], U = s({
      queryArgs: _,
      endpointDefinition: H,
      endpointName: N
    });
    if (R(o.internalActions.queryResultPatched({
      queryCacheKey: U,
      patches: D
    })), !S)
      return;
    const V = o.endpoints[N].select(_)(
      // Work around TS 4.1 mismatch
      M()
    ), K = us(H.providesTags, V.data, void 0, _, {}, m);
    R(o.internalActions.updateProvidedBy([{
      queryCacheKey: U,
      providedTags: K
    }]));
  };
  function w(N, _, D = 0) {
    const S = [_, ...N];
    return D && S.length > D ? S.slice(0, -1) : S;
  }
  function i(N, _, D = 0) {
    const S = [...N, _];
    return D && S.length > D ? S.slice(1) : S;
  }
  const f = (N, _, D, S = !0) => (R, M) => {
    const U = o.endpoints[N].select(_)(
      // Work around TS 4.1 mismatch
      M()
    ), V = {
      patches: [],
      inversePatches: [],
      undo: () => R(o.util.patchQueryData(N, _, V.inversePatches, S))
    };
    if (U.status === "uninitialized")
      return V;
    let K;
    if ("data" in U)
      if (dt(U.data)) {
        const [O, T, z] = no(U.data, D);
        V.patches.push(...T), V.inversePatches.push(...z), K = O;
      } else
        K = D(U.data), V.patches.push({
          op: "replace",
          path: [],
          value: K
        }), V.inversePatches.push({
          op: "replace",
          path: [],
          value: U.data
        });
    return V.patches.length === 0 || R(o.util.patchQueryData(N, _, V.patches, S)), V;
  }, p = (N, _, D) => (S) => S(o.endpoints[N].initiate(_, {
    subscribe: !1,
    forceRefetch: !0,
    [ar]: () => ({
      data: D
    })
  })), g = (N, _) => N.query && N[_] ? N[_] : nc, y = async (N, {
    signal: _,
    abort: D,
    rejectWithValue: S,
    fulfillWithValue: R,
    dispatch: M,
    getState: H,
    extra: U
  }) => {
    var T, z;
    const V = n[N.endpointName], {
      metaSchema: K,
      skipSchemaValidation: O = a
    } = V;
    try {
      let P = g(V, "transformResponse");
      const W = {
        signal: _,
        abort: D,
        dispatch: M,
        getState: H,
        extra: U,
        endpoint: N.endpointName,
        type: N.type,
        forced: N.type === "query" ? E(N, H()) : void 0,
        queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
      }, ne = N.type === "query" ? N[ar] : void 0;
      let oe;
      const te = async (Z, ue, Ee, Ae) => {
        if (ue == null && Z.pages.length)
          return Promise.resolve({
            data: Z
          });
        const Ce = {
          queryArg: N.originalArgs,
          pageParam: ue
        }, Fe = await me(Ce), G = Ae ? w : i;
        return {
          data: {
            pages: G(Z.pages, Fe.data, Ee),
            pageParams: G(Z.pageParams, ue, Ee)
          },
          meta: Fe.meta
        };
      };
      async function me(Z) {
        let ue;
        const {
          extraOptions: Ee,
          argSchema: Ae,
          rawResponseSchema: Ce,
          responseSchema: Fe
        } = V;
        if (Ae && !O && (Z = await At(
          Ae,
          Z,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), ne ? ue = ne() : V.query ? ue = await r(V.query(Z), W, Ee) : ue = await V.queryFn(Z, W, Ee, (fe) => r(fe, W, Ee)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const fe = V.query ? "`baseQuery`" : "`queryFn`";
          let I;
          if (!ue)
            I = `${fe} did not return anything.`;
          else if (typeof ue != "object")
            I = `${fe} did not return an object.`;
          else if (ue.error && ue.data)
            I = `${fe} returned an object containing both \`error\` and \`result\`.`;
          else if (ue.error === void 0 && ue.data === void 0)
            I = `${fe} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const ie of Object.keys(ue))
              if (ie !== "error" && ie !== "data" && ie !== "meta") {
                I = `The object returned by ${fe} has the unknown property ${ie}.`;
                break;
              }
          I && console.error(`Error encountered handling the endpoint ${N.endpointName}.
                  ${I}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, ue);
        }
        if (ue.error) throw new Ws(ue.error, ue.meta);
        let {
          data: G
        } = ue;
        Ce && !O && (G = await At(Ce, ue.data, "rawResponseSchema", ue.meta));
        let le = await P(G, ue.meta, Z);
        return Fe && !O && (le = await At(Fe, le, "responseSchema", ue.meta)), {
          ...ue,
          data: le
        };
      }
      if (N.type === "query" && "infiniteQueryOptions" in V) {
        const {
          infiniteQueryOptions: Z
        } = V, {
          maxPages: ue = 1 / 0
        } = Z;
        let Ee;
        const Ae = {
          pages: [],
          pageParams: []
        }, Ce = (T = b.selectQueryEntry(H(), N.queryCacheKey)) == null ? void 0 : T.data, G = /* arg.forceRefetch */ E(N, H()) && !N.direction || !Ce ? Ae : Ce;
        if ("direction" in N && N.direction && G.pages.length) {
          const le = N.direction === "backward", I = (le ? bo : Jn)(Z, G, N.originalArgs);
          Ee = await te(G, I, ue, le);
        } else {
          const {
            initialPageParam: le = Z.initialPageParam
          } = N, fe = (Ce == null ? void 0 : Ce.pageParams) ?? [], I = fe[0] ?? le, ie = fe.length;
          Ee = await te(G, I, ue), ne && (Ee = {
            data: Ee.data.pages[0]
          });
          for (let se = 1; se < ie; se++) {
            const ee = Jn(Z, Ee.data, N.originalArgs);
            Ee = await te(Ee.data, ee, ue);
          }
        }
        oe = Ee;
      } else
        oe = await me(N.originalArgs);
      return K && !O && oe.meta && (oe.meta = await At(K, oe.meta, "metaSchema", oe.meta)), R(oe.data, Kt({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: oe.meta
      }));
    } catch (P) {
      let W = P;
      if (W instanceof Ws) {
        let ne = g(V, "transformErrorResponse");
        const {
          rawErrorResponseSchema: oe,
          errorResponseSchema: te
        } = V;
        let {
          value: me,
          meta: Z
        } = W;
        try {
          oe && !O && (me = await At(oe, me, "rawErrorResponseSchema", Z)), K && !O && (Z = await At(K, Z, "metaSchema", Z));
          let ue = await ne(me, Z, N.originalArgs);
          return te && !O && (ue = await At(te, ue, "errorResponseSchema", Z)), S(ue, Kt({
            baseQueryMeta: Z
          }));
        } catch (ue) {
          W = ue;
        }
      }
      try {
        if (W instanceof vo) {
          const ne = {
            endpoint: N.endpointName,
            arg: N.originalArgs,
            type: N.type,
            queryCacheKey: N.type === "query" ? N.queryCacheKey : void 0
          };
          (z = V.onSchemaFailure) == null || z.call(V, W, ne), u == null || u(W, ne);
          const {
            catchSchemaFailure: oe = d
          } = V;
          if (oe)
            return S(oe(W, ne), Kt({
              baseQueryMeta: W._bqMeta
            }));
        }
      } catch (ne) {
        W = ne;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${N.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, W) : console.error(W), W;
    }
  };
  function E(N, _) {
    const D = b.selectQueryEntry(_, N.queryCacheKey), S = b.selectConfig(_).refetchOnMountOrArgChange, R = D == null ? void 0 : D.fulfilledTimeStamp, M = N.forceRefetch ?? (N.subscribe && S);
    return M ? M === !0 || (Number(/* @__PURE__ */ new Date()) - Number(R)) / 1e3 >= M : !1;
  }
  const v = () => Ls(`${e}/executeQuery`, y, {
    getPendingMeta({
      arg: _
    }) {
      const D = n[_.endpointName];
      return Kt({
        startedTimeStamp: Date.now(),
        ...ur(D) ? {
          direction: _.direction
        } : {}
      });
    },
    condition(_, {
      getState: D
    }) {
      var O;
      const S = D(), R = b.selectQueryEntry(S, _.queryCacheKey), M = R == null ? void 0 : R.fulfilledTimeStamp, H = _.originalArgs, U = R == null ? void 0 : R.originalArgs, V = n[_.endpointName], K = _.direction;
      return Zn(_) ? !0 : (R == null ? void 0 : R.status) === "pending" ? !1 : E(_, S) || zr(V) && ((O = V == null ? void 0 : V.forceRefetch) != null && O.call(V, {
        currentArg: H,
        previousArg: U,
        endpointState: R,
        state: S
      })) ? !0 : !(M && !K);
    },
    dispatchConditionRejection: !0
  }), x = v(), c = v(), h = Ls(`${e}/executeMutation`, y, {
    getPendingMeta() {
      return Kt({
        startedTimeStamp: Date.now()
      });
    }
  }), j = (N) => "force" in N, k = (N) => "ifOlderThan" in N, B = (N, _, D) => (S, R) => {
    const M = j(D) && D.force, H = k(D) && D.ifOlderThan, U = (K = !0) => {
      const O = {
        forceRefetch: K,
        isPrefetch: !0
      };
      return o.endpoints[N].initiate(_, O);
    }, V = o.endpoints[N].select(_)(R());
    if (M)
      S(U());
    else if (H) {
      const K = V == null ? void 0 : V.fulfilledTimeStamp;
      if (!K) {
        S(U());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(K))) / 1e3 >= H && S(U());
    } else
      S(U(!1));
  };
  function A(N) {
    return (_) => {
      var D, S;
      return ((S = (D = _ == null ? void 0 : _.meta) == null ? void 0 : D.arg) == null ? void 0 : S.endpointName) === N;
    };
  }
  function C(N, _) {
    return {
      matchPending: Zt(is(N), A(_)),
      matchFulfilled: Zt(Ct(N), A(_)),
      matchRejected: Zt(Ht(N), A(_))
    };
  }
  return {
    queryThunk: x,
    mutationThunk: h,
    infiniteQueryThunk: c,
    prefetch: B,
    updateQueryData: f,
    upsertQueryData: p,
    patchQueryData: l,
    buildMatchThunkActions: C
  };
}
function Jn(e, {
  pages: r,
  pageParams: n
}, s) {
  const o = r.length - 1;
  return e.getNextPageParam(r[o], r, n[o], n, s);
}
function bo(e, {
  pages: r,
  pageParams: n
}, s) {
  var o;
  return (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, r[0], r, n[0], n, s);
}
function wo(e, r, n, s) {
  return us(n[e.meta.arg.endpointName][r], Ct(e) ? e.payload : void 0, Lr(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, s);
}
function yr(e, r, n) {
  const s = e[r];
  s && n(s);
}
function or(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Qs(e, r, n) {
  const s = e[or(r)];
  s && n(s);
}
var vr = {};
function ac({
  reducerPath: e,
  queryThunk: r,
  mutationThunk: n,
  serializeQueryArgs: s,
  context: {
    endpointDefinitions: o,
    apiUid: m,
    extractRehydrationInfo: b,
    hasRehydrationInfo: u
  },
  assertTagType: d,
  config: a
}) {
  const l = lt(`${e}/resetApiState`);
  function w(A, C, N, _) {
    var D;
    A[D = C.queryCacheKey] ?? (A[D] = {
      status: "uninitialized",
      endpointName: C.endpointName
    }), yr(A, C.queryCacheKey, (S) => {
      S.status = "pending", S.requestId = N && S.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        S.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        _.requestId
      ), C.originalArgs !== void 0 && (S.originalArgs = C.originalArgs), S.startedTimeStamp = _.startedTimeStamp;
      const R = o[_.arg.endpointName];
      ur(R) && "direction" in C && (S.direction = C.direction);
    });
  }
  function i(A, C, N, _) {
    yr(A, C.arg.queryCacheKey, (D) => {
      if (D.requestId !== C.requestId && !_) return;
      const {
        merge: S
      } = o[C.arg.endpointName];
      if (D.status = "fulfilled", S)
        if (D.data !== void 0) {
          const {
            fulfilledTimeStamp: R,
            arg: M,
            baseQueryMeta: H,
            requestId: U
          } = C;
          let V = lr(D.data, (K) => S(K, N, {
            arg: M.originalArgs,
            baseQueryMeta: H,
            fulfilledTimeStamp: R,
            requestId: U
          }));
          D.data = V;
        } else
          D.data = N;
      else
        D.data = o[C.arg.endpointName].structuralSharing ?? !0 ? mo(xt(D.data) ? $0(D.data) : D.data, N) : N;
      delete D.error, D.fulfilledTimeStamp = C.fulfilledTimeStamp;
    });
  }
  const f = Dt({
    name: `${e}/queries`,
    initialState: vr,
    reducers: {
      removeQueryResult: {
        reducer(A, {
          payload: {
            queryCacheKey: C
          }
        }) {
          delete A[C];
        },
        prepare: Ut()
      },
      cacheEntriesUpserted: {
        reducer(A, C) {
          for (const N of C.payload) {
            const {
              queryDescription: _,
              value: D
            } = N;
            w(A, _, !0, {
              arg: _,
              requestId: C.meta.requestId,
              startedTimeStamp: C.meta.timestamp
            }), i(
              A,
              {
                arg: _,
                requestId: C.meta.requestId,
                fulfilledTimeStamp: C.meta.timestamp,
                baseQueryMeta: {}
              },
              D,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (A) => ({
          payload: A.map((_) => {
            const {
              endpointName: D,
              arg: S,
              value: R
            } = _, M = o[D];
            return {
              queryDescription: {
                type: "query",
                endpointName: D,
                originalArgs: _.arg,
                queryCacheKey: s({
                  queryArgs: S,
                  endpointDefinition: M,
                  endpointName: D
                })
              },
              value: R
            };
          }),
          meta: {
            [Ir]: !0,
            requestId: cs(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(A, {
          payload: {
            queryCacheKey: C,
            patches: N
          }
        }) {
          yr(A, C, (_) => {
            _.data = Ss(_.data, N.concat());
          });
        },
        prepare: Ut()
      }
    },
    extraReducers(A) {
      A.addCase(r.pending, (C, {
        meta: N,
        meta: {
          arg: _
        }
      }) => {
        const D = Zn(_);
        w(C, _, D, N);
      }).addCase(r.fulfilled, (C, {
        meta: N,
        payload: _
      }) => {
        const D = Zn(N.arg);
        i(C, N, _, D);
      }).addCase(r.rejected, (C, {
        meta: {
          condition: N,
          arg: _,
          requestId: D
        },
        error: S,
        payload: R
      }) => {
        yr(C, _.queryCacheKey, (M) => {
          if (!N) {
            if (M.requestId !== D) return;
            M.status = "rejected", M.error = R ?? S;
          }
        });
      }).addMatcher(u, (C, N) => {
        const {
          queries: _
        } = b(N);
        for (const [D, S] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((S == null ? void 0 : S.status) === "fulfilled" || (S == null ? void 0 : S.status) === "rejected") && (C[D] = S);
      });
    }
  }), p = Dt({
    name: `${e}/mutations`,
    initialState: vr,
    reducers: {
      removeMutationResult: {
        reducer(A, {
          payload: C
        }) {
          const N = or(C);
          N in A && delete A[N];
        },
        prepare: Ut()
      }
    },
    extraReducers(A) {
      A.addCase(n.pending, (C, {
        meta: N,
        meta: {
          requestId: _,
          arg: D,
          startedTimeStamp: S
        }
      }) => {
        D.track && (C[or(N)] = {
          requestId: _,
          status: "pending",
          endpointName: D.endpointName,
          startedTimeStamp: S
        });
      }).addCase(n.fulfilled, (C, {
        payload: N,
        meta: _
      }) => {
        _.arg.track && Qs(C, _, (D) => {
          D.requestId === _.requestId && (D.status = "fulfilled", D.data = N, D.fulfilledTimeStamp = _.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (C, {
        payload: N,
        error: _,
        meta: D
      }) => {
        D.arg.track && Qs(C, D, (S) => {
          S.requestId === D.requestId && (S.status = "rejected", S.error = N ?? _);
        });
      }).addMatcher(u, (C, N) => {
        const {
          mutations: _
        } = b(N);
        for (const [D, S] of Object.entries(_))
          // do not rehydrate entries that were currently in flight.
          ((S == null ? void 0 : S.status) === "fulfilled" || (S == null ? void 0 : S.status) === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          D !== (S == null ? void 0 : S.requestId) && (C[D] = S);
      });
    }
  }), g = {
    tags: {},
    keys: {}
  }, y = Dt({
    name: `${e}/invalidation`,
    initialState: g,
    reducers: {
      updateProvidedBy: {
        reducer(A, C) {
          var N, _, D;
          for (const {
            queryCacheKey: S,
            providedTags: R
          } of C.payload) {
            E(A, S);
            for (const {
              type: M,
              id: H
            } of R) {
              const U = (_ = (N = A.tags)[M] ?? (N[M] = {}))[D = H || "__internal_without_id"] ?? (_[D] = []);
              U.includes(S) || U.push(S);
            }
            A.keys[S] = R;
          }
        },
        prepare: Ut()
      }
    },
    extraReducers(A) {
      A.addCase(f.actions.removeQueryResult, (C, {
        payload: {
          queryCacheKey: N
        }
      }) => {
        E(C, N);
      }).addMatcher(u, (C, N) => {
        var D, S, R;
        const {
          provided: _
        } = b(N);
        for (const [M, H] of Object.entries(_))
          for (const [U, V] of Object.entries(H)) {
            const K = (S = (D = C.tags)[M] ?? (D[M] = {}))[R = U || "__internal_without_id"] ?? (S[R] = []);
            for (const O of V)
              K.includes(O) || K.push(O);
          }
      }).addMatcher(gt(Ct(r), Lr(r)), (C, N) => {
        v(C, [N]);
      }).addMatcher(f.actions.cacheEntriesUpserted.match, (C, N) => {
        const _ = N.payload.map(({
          queryDescription: D,
          value: S
        }) => ({
          type: "UNKNOWN",
          payload: S,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: D
          }
        }));
        v(C, _);
      });
    }
  });
  function E(A, C) {
    var _;
    const N = A.keys[C] ?? [];
    for (const D of N) {
      const S = D.type, R = D.id ?? "__internal_without_id", M = (_ = A.tags[S]) == null ? void 0 : _[R];
      M && (A.tags[S][R] = M.filter((H) => H !== C));
    }
    delete A.keys[C];
  }
  function v(A, C) {
    const N = C.map((_) => {
      const D = wo(_, "providesTags", o, d), {
        queryCacheKey: S
      } = _.meta.arg;
      return {
        queryCacheKey: S,
        providedTags: D
      };
    });
    y.caseReducers.updateProvidedBy(A, y.actions.updateProvidedBy(N));
  }
  const x = Dt({
    name: `${e}/subscriptions`,
    initialState: vr,
    reducers: {
      updateSubscriptionOptions(A, C) {
      },
      unsubscribeQueryResult(A, C) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), c = Dt({
    name: `${e}/internalSubscriptions`,
    initialState: vr,
    reducers: {
      subscriptionsUpdated: {
        reducer(A, C) {
          return Ss(A, C.payload);
        },
        prepare: Ut()
      }
    }
  }), h = Dt({
    name: `${e}/config`,
    initialState: {
      online: Wi(),
      focused: Vi(),
      middlewareRegistered: !1,
      ...a
    },
    reducers: {
      middlewareRegistered(A, {
        payload: C
      }) {
        A.middlewareRegistered = A.middlewareRegistered === "conflict" || m !== C ? "conflict" : !0;
      }
    },
    extraReducers: (A) => {
      A.addCase(ds, (C) => {
        C.online = !0;
      }).addCase(yo, (C) => {
        C.online = !1;
      }).addCase(ls, (C) => {
        C.focused = !0;
      }).addCase(go, (C) => {
        C.focused = !1;
      }).addMatcher(u, (C) => ({
        ...C
      }));
    }
  }), j = Ya({
    queries: f.reducer,
    mutations: p.reducer,
    provided: y.reducer,
    subscriptions: c.reducer,
    config: h.reducer
  }), k = (A, C) => j(l.match(C) ? void 0 : A, C), B = {
    ...h.actions,
    ...f.actions,
    ...x.actions,
    ...c.actions,
    ...p.actions,
    ...y.actions,
    resetApiState: l
  };
  return {
    reducer: k,
    actions: B
  };
}
var ct = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Co = {
  status: "uninitialized"
  /* uninitialized */
}, Us = /* @__PURE__ */ lr(Co, () => {
}), Ks = /* @__PURE__ */ lr(Co, () => {
});
function oc({
  serializeQueryArgs: e,
  reducerPath: r,
  createSelector: n
}) {
  const s = (x) => Us, o = (x) => Ks;
  return {
    buildQuerySelector: i,
    buildInfiniteQuerySelector: f,
    buildMutationSelector: p,
    selectInvalidatedBy: g,
    selectCachedArgsForQuery: y,
    selectApiState: b,
    selectQueries: u,
    selectMutations: a,
    selectQueryEntry: d,
    selectConfig: l
  };
  function m(x) {
    return {
      ...x,
      ...zs(x.status)
    };
  }
  function b(x) {
    const c = x[r];
    if (process.env.NODE_ENV !== "production" && !c) {
      if (b.triggered) return c;
      b.triggered = !0, console.error(`Error: No data found at \`state.${r}\`. Did you forget to add the reducer to the store?`);
    }
    return c;
  }
  function u(x) {
    var c;
    return (c = b(x)) == null ? void 0 : c.queries;
  }
  function d(x, c) {
    var h;
    return (h = u(x)) == null ? void 0 : h[c];
  }
  function a(x) {
    var c;
    return (c = b(x)) == null ? void 0 : c.mutations;
  }
  function l(x) {
    var c;
    return (c = b(x)) == null ? void 0 : c.config;
  }
  function w(x, c, h) {
    return (j) => {
      if (j === ct)
        return n(s, h);
      const k = e({
        queryArgs: j,
        endpointDefinition: c,
        endpointName: x
      });
      return n((A) => d(A, k) ?? Us, h);
    };
  }
  function i(x, c) {
    return w(x, c, m);
  }
  function f(x, c) {
    const {
      infiniteQueryOptions: h
    } = c;
    function j(k) {
      const B = {
        ...k,
        ...zs(k.status)
      }, {
        isLoading: A,
        isError: C,
        direction: N
      } = B, _ = N === "forward", D = N === "backward";
      return {
        ...B,
        hasNextPage: E(h, B.data, B.originalArgs),
        hasPreviousPage: v(h, B.data, B.originalArgs),
        isFetchingNextPage: A && _,
        isFetchingPreviousPage: A && D,
        isFetchNextPageError: C && _,
        isFetchPreviousPageError: C && D
      };
    }
    return w(x, c, j);
  }
  function p() {
    return (x) => {
      let c;
      return typeof x == "object" ? c = or(x) ?? ct : c = x, n(c === ct ? o : (k) => {
        var B, A;
        return ((A = (B = b(k)) == null ? void 0 : B.mutations) == null ? void 0 : A[c]) ?? Ks;
      }, m);
    };
  }
  function g(x, c) {
    const h = x[r], j = /* @__PURE__ */ new Set();
    for (const k of c.filter(Sr).map(Xn)) {
      const B = h.provided.tags[k.type];
      if (!B)
        continue;
      let A = (k.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        B[k.id]
      ) : (
        // no id: invalidate all queries that provide this type
        $s(Object.values(B))
      )) ?? [];
      for (const C of A)
        j.add(C);
    }
    return $s(Array.from(j.values()).map((k) => {
      const B = h.queries[k];
      return B ? [{
        queryCacheKey: k,
        endpointName: B.endpointName,
        originalArgs: B.originalArgs
      }] : [];
    }));
  }
  function y(x, c) {
    return Object.values(u(x)).filter(
      (h) => (h == null ? void 0 : h.endpointName) === c && h.status !== "uninitialized"
      /* uninitialized */
    ).map((h) => h.originalArgs);
  }
  function E(x, c, h) {
    return c ? Jn(x, c, h) != null : !1;
  }
  function v(x, c, h) {
    return !c || !x.getPreviousPageParam ? !1 : bo(x, c, h) != null;
  }
}
var zt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Rr = ({
  endpointName: e,
  queryArgs: r
}) => {
  let n = "";
  const s = zt == null ? void 0 : zt.get(r);
  if (typeof s == "string")
    n = s;
  else {
    const o = JSON.stringify(r, (m, b) => (b = typeof b == "bigint" ? {
      $bigint: b.toString()
    } : b, b = ft(b) ? Object.keys(b).sort().reduce((u, d) => (u[d] = b[d], u), {}) : b, b));
    ft(r) && (zt == null || zt.set(r, o)), n = o;
  }
  return `${e}(${n})`;
};
function ic(...e) {
  return function(n) {
    const s = Br((a) => {
      var l;
      return (l = n.extractRehydrationInfo) == null ? void 0 : l.call(n, a, {
        reducerPath: n.reducerPath ?? "api"
      });
    }), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...n,
      extractRehydrationInfo: s,
      serializeQueryArgs(a) {
        let l = Rr;
        if ("serializeQueryArgs" in a.endpointDefinition) {
          const w = a.endpointDefinition.serializeQueryArgs;
          l = (i) => {
            const f = w(i);
            return typeof f == "string" ? f : Rr({
              ...i,
              queryArgs: f
            });
          };
        } else n.serializeQueryArgs && (l = n.serializeQueryArgs);
        return l(a);
      },
      tagTypes: [...n.tagTypes || []]
    }, m = {
      endpointDefinitions: {},
      batch(a) {
        a();
      },
      apiUid: cs(),
      extractRehydrationInfo: s,
      hasRehydrationInfo: Br((a) => s(a) != null)
    }, b = {
      injectEndpoints: d,
      enhanceEndpoints({
        addTagTypes: a,
        endpoints: l
      }) {
        if (a)
          for (const w of a)
            o.tagTypes.includes(w) || o.tagTypes.push(w);
        if (l)
          for (const [w, i] of Object.entries(l))
            typeof i == "function" ? i(m.endpointDefinitions[w]) : Object.assign(m.endpointDefinitions[w] || {}, i);
        return b;
      }
    }, u = e.map((a) => a.init(b, o, m));
    function d(a) {
      const l = a.endpoints({
        query: (w) => ({
          ...w,
          type: "query"
          /* query */
        }),
        mutation: (w) => ({
          ...w,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (w) => ({
          ...w,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [w, i] of Object.entries(l)) {
        if (a.overrideExisting !== !0 && w in m.endpointDefinitions) {
          if (a.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? ke(39) : `called \`injectEndpoints\` to override already-existing endpointName ${w} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${w} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && ur(i)) {
          const {
            infiniteQueryOptions: f
          } = i, {
            maxPages: p,
            getPreviousPageParam: g
          } = f;
          if (typeof p == "number") {
            if (p < 1)
              throw new Error(process.env.NODE_ENV === "production" ? ke(40) : `maxPages for endpoint '${w}' must be a number greater than 0`);
            if (typeof g != "function")
              throw new Error(process.env.NODE_ENV === "production" ? ke(41) : `getPreviousPageParam for endpoint '${w}' must be a function if maxPages is used`);
          }
        }
        m.endpointDefinitions[w] = i;
        for (const f of u)
          f.injectEndpoint(w, i);
      }
      return b;
    }
    return b.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function mt(e, ...r) {
  return Object.assign(e, ...r);
}
var cc = ({
  api: e,
  queryThunk: r,
  internalState: n
}) => {
  const s = `${e.reducerPath}/subscriptions`;
  let o = null, m = null;
  const {
    updateSubscriptionOptions: b,
    unsubscribeQueryResult: u
  } = e.internalActions, d = (f, p) => {
    var y, E, v;
    if (b.match(p)) {
      const {
        queryCacheKey: x,
        requestId: c,
        options: h
      } = p.payload;
      return (y = f == null ? void 0 : f[x]) != null && y[c] && (f[x][c] = h), !0;
    }
    if (u.match(p)) {
      const {
        queryCacheKey: x,
        requestId: c
      } = p.payload;
      return f[x] && delete f[x][c], !0;
    }
    if (e.internalActions.removeQueryResult.match(p))
      return delete f[p.payload.queryCacheKey], !0;
    if (r.pending.match(p)) {
      const {
        meta: {
          arg: x,
          requestId: c
        }
      } = p, h = f[E = x.queryCacheKey] ?? (f[E] = {});
      return h[`${c}_running`] = {}, x.subscribe && (h[c] = x.subscriptionOptions ?? h[c] ?? {}), !0;
    }
    let g = !1;
    if (r.fulfilled.match(p) || r.rejected.match(p)) {
      const x = f[p.meta.arg.queryCacheKey] || {}, c = `${p.meta.requestId}_running`;
      g || (g = !!x[c]), delete x[c];
    }
    if (r.rejected.match(p)) {
      const {
        meta: {
          condition: x,
          arg: c,
          requestId: h
        }
      } = p;
      if (x && c.subscribe) {
        const j = f[v = c.queryCacheKey] ?? (f[v] = {});
        j[h] = c.subscriptionOptions ?? j[h] ?? {}, g = !0;
      }
    }
    return g;
  }, a = () => n.currentSubscriptions, i = {
    getSubscriptions: a,
    getSubscriptionCount: (f) => {
      const g = a()[f] ?? {};
      return $t(g);
    },
    isRequestSubscribed: (f, p) => {
      var y;
      const g = a();
      return !!((y = g == null ? void 0 : g[f]) != null && y[p]);
    }
  };
  return (f, p) => {
    if (o || (o = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(f))
      return o = n.currentSubscriptions = {}, m = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(f))
      return [!1, i];
    const g = d(n.currentSubscriptions, f);
    let y = !0;
    if (g) {
      m || (m = setTimeout(() => {
        const x = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, c] = no(o, () => x);
        p.next(e.internalActions.subscriptionsUpdated(c)), o = x, m = null;
      }, 500));
      const E = typeof f.type == "string" && !!f.type.startsWith(s), v = r.rejected.match(f) && f.meta.condition && !!f.meta.arg.subscribe;
      y = !E && !v;
    }
    return [y, !1];
  };
};
function lc(e) {
  for (const r in e)
    return !1;
  return !0;
}
var dc = 2147483647 / 1e3 - 1, uc = ({
  reducerPath: e,
  api: r,
  queryThunk: n,
  context: s,
  internalState: o,
  selectors: {
    selectQueryEntry: m,
    selectConfig: b
  }
}) => {
  const {
    removeQueryResult: u,
    unsubscribeQueryResult: d,
    cacheEntriesUpserted: a
  } = r.internalActions, l = gt(d.match, n.fulfilled, n.rejected, a.match);
  function w(y) {
    const E = o.currentSubscriptions[y];
    return !!E && !lc(E);
  }
  const i = {}, f = (y, E, v) => {
    const x = E.getState(), c = b(x);
    if (l(y)) {
      let h;
      if (a.match(y))
        h = y.payload.map((j) => j.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: j
        } = d.match(y) ? y.payload : y.meta.arg;
        h = [j];
      }
      p(h, E, c);
    }
    if (r.util.resetApiState.match(y))
      for (const [h, j] of Object.entries(i))
        j && clearTimeout(j), delete i[h];
    if (s.hasRehydrationInfo(y)) {
      const {
        queries: h
      } = s.extractRehydrationInfo(y);
      p(Object.keys(h), E, c);
    }
  };
  function p(y, E, v) {
    const x = E.getState();
    for (const c of y) {
      const h = m(x, c);
      g(c, h == null ? void 0 : h.endpointName, E, v);
    }
  }
  function g(y, E, v, x) {
    const c = s.endpointDefinitions[E], h = (c == null ? void 0 : c.keepUnusedDataFor) ?? x.keepUnusedDataFor;
    if (h === 1 / 0)
      return;
    const j = Math.max(0, Math.min(h, dc));
    if (!w(y)) {
      const k = i[y];
      k && clearTimeout(k), i[y] = setTimeout(() => {
        w(y) || v.dispatch(u({
          queryCacheKey: y
        })), delete i[y];
      }, j * 1e3);
    }
  }
  return f;
}, Gs = new Error("Promise never resolved before cacheEntryRemoved."), fc = ({
  api: e,
  reducerPath: r,
  context: n,
  queryThunk: s,
  mutationThunk: o,
  internalState: m,
  selectors: {
    selectQueryEntry: b,
    selectApiState: u
  }
}) => {
  const d = Yn(s), a = Yn(o), l = Ct(s, o), w = {};
  function i(E, v, x) {
    const c = w[E];
    c != null && c.valueResolved && (c.valueResolved({
      data: v,
      meta: x
    }), delete c.valueResolved);
  }
  function f(E) {
    const v = w[E];
    v && (delete w[E], v.cacheEntryRemoved());
  }
  const p = (E, v, x) => {
    const c = g(E);
    function h(j, k, B, A) {
      const C = b(x, k), N = b(v.getState(), k);
      !C && N && y(j, A, k, v, B);
    }
    if (s.pending.match(E))
      h(E.meta.arg.endpointName, c, E.meta.requestId, E.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(E))
      for (const {
        queryDescription: j,
        value: k
      } of E.payload) {
        const {
          endpointName: B,
          originalArgs: A,
          queryCacheKey: C
        } = j;
        h(B, C, E.meta.requestId, A), i(C, k, {});
      }
    else if (o.pending.match(E))
      v.getState()[r].mutations[c] && y(E.meta.arg.endpointName, E.meta.arg.originalArgs, c, v, E.meta.requestId);
    else if (l(E))
      i(c, E.payload, E.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(E) || e.internalActions.removeMutationResult.match(E))
      f(c);
    else if (e.util.resetApiState.match(E))
      for (const j of Object.keys(w))
        f(j);
  };
  function g(E) {
    return d(E) ? E.meta.arg.queryCacheKey : a(E) ? E.meta.arg.fixedCacheKey ?? E.meta.requestId : e.internalActions.removeQueryResult.match(E) ? E.payload.queryCacheKey : e.internalActions.removeMutationResult.match(E) ? or(E.payload) : "";
  }
  function y(E, v, x, c, h) {
    const j = n.endpointDefinitions[E], k = j == null ? void 0 : j.onCacheEntryAdded;
    if (!k) return;
    const B = {}, A = new Promise((R) => {
      B.cacheEntryRemoved = R;
    }), C = Promise.race([new Promise((R) => {
      B.valueResolved = R;
    }), A.then(() => {
      throw Gs;
    })]);
    C.catch(() => {
    }), w[x] = B;
    const N = e.endpoints[E].select(Fr(j) ? v : x), _ = c.dispatch((R, M, H) => H), D = {
      ...c,
      getCacheEntry: () => N(c.getState()),
      requestId: h,
      extra: _,
      updateCachedData: Fr(j) ? (R) => c.dispatch(e.util.updateQueryData(E, v, R)) : void 0,
      cacheDataLoaded: C,
      cacheEntryRemoved: A
    }, S = k(v, D);
    Promise.resolve(S).catch((R) => {
      if (R !== Gs)
        throw R;
    });
  }
  return p;
}, xc = ({
  api: e,
  context: {
    apiUid: r
  },
  reducerPath: n
}) => (s, o) => {
  var m, b;
  e.util.resetApiState.match(s) && o.dispatch(e.internalActions.middlewareRegistered(r)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(s) && s.payload === r && ((b = (m = o.getState()[n]) == null ? void 0 : m.config) == null ? void 0 : b.middlewareRegistered) === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, hc = ({
  reducerPath: e,
  context: r,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: s,
  queryThunk: o,
  api: m,
  assertTagType: b,
  refetchQuery: u,
  internalState: d
}) => {
  const {
    removeQueryResult: a
  } = m.internalActions, l = gt(Ct(s), Lr(s)), w = gt(Ct(s, o), Ht(s, o));
  let i = [];
  const f = (y, E) => {
    l(y) ? g(wo(y, "invalidatesTags", n, b), E) : w(y) ? g([], E) : m.util.invalidateTags.match(y) && g(us(y.payload, void 0, void 0, void 0, void 0, b), E);
  };
  function p(y) {
    var x;
    const {
      queries: E,
      mutations: v
    } = y;
    for (const c of [E, v])
      for (const h in c)
        if (((x = c[h]) == null ? void 0 : x.status) === "pending") return !0;
    return !1;
  }
  function g(y, E) {
    const v = E.getState(), x = v[e];
    if (i.push(...y), x.config.invalidationBehavior === "delayed" && p(x))
      return;
    const c = i;
    if (i = [], c.length === 0) return;
    const h = m.util.selectInvalidatedBy(v, c);
    r.batch(() => {
      const j = Array.from(h.values());
      for (const {
        queryCacheKey: k
      } of j) {
        const B = x.queries[k], A = d.currentSubscriptions[k] ?? {};
        B && ($t(A) === 0 ? E.dispatch(a({
          queryCacheKey: k
        })) : B.status !== "uninitialized" && E.dispatch(u(B)));
      }
    });
  }
  return f;
}, pc = ({
  reducerPath: e,
  queryThunk: r,
  api: n,
  refetchQuery: s,
  internalState: o
}) => {
  const m = {}, b = (i, f) => {
    (n.internalActions.updateSubscriptionOptions.match(i) || n.internalActions.unsubscribeQueryResult.match(i)) && d(i.payload, f), (r.pending.match(i) || r.rejected.match(i) && i.meta.condition) && d(i.meta.arg, f), (r.fulfilled.match(i) || r.rejected.match(i) && !i.meta.condition) && u(i.meta.arg, f), n.util.resetApiState.match(i) && l();
  };
  function u({
    queryCacheKey: i
  }, f) {
    const p = f.getState()[e], g = p.queries[i], y = o.currentSubscriptions[i];
    if (!g || g.status === "uninitialized") return;
    const {
      lowestPollingInterval: E,
      skipPollingIfUnfocused: v
    } = w(y);
    if (!Number.isFinite(E)) return;
    const x = m[i];
    x != null && x.timeout && (clearTimeout(x.timeout), x.timeout = void 0);
    const c = Date.now() + E;
    m[i] = {
      nextPollTimestamp: c,
      pollingInterval: E,
      timeout: setTimeout(() => {
        (p.config.focused || !v) && f.dispatch(s(g)), u({
          queryCacheKey: i
        }, f);
      }, E)
    };
  }
  function d({
    queryCacheKey: i
  }, f) {
    const g = f.getState()[e].queries[i], y = o.currentSubscriptions[i];
    if (!g || g.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: E
    } = w(y);
    if (!Number.isFinite(E)) {
      a(i);
      return;
    }
    const v = m[i], x = Date.now() + E;
    (!v || x < v.nextPollTimestamp) && u({
      queryCacheKey: i
    }, f);
  }
  function a(i) {
    const f = m[i];
    f != null && f.timeout && clearTimeout(f.timeout), delete m[i];
  }
  function l() {
    for (const i of Object.keys(m))
      a(i);
  }
  function w(i = {}) {
    let f = !1, p = Number.POSITIVE_INFINITY;
    for (let g in i)
      i[g].pollingInterval && (p = Math.min(i[g].pollingInterval, p), f = i[g].skipPollingIfUnfocused || f);
    return {
      lowestPollingInterval: p,
      skipPollingIfUnfocused: f
    };
  }
  return b;
}, mc = ({
  api: e,
  context: r,
  queryThunk: n,
  mutationThunk: s
}) => {
  const o = is(n, s), m = Ht(n, s), b = Ct(n, s), u = {};
  return (a, l) => {
    var w, i;
    if (o(a)) {
      const {
        requestId: f,
        arg: {
          endpointName: p,
          originalArgs: g
        }
      } = a.meta, y = r.endpointDefinitions[p], E = y == null ? void 0 : y.onQueryStarted;
      if (E) {
        const v = {}, x = new Promise((k, B) => {
          v.resolve = k, v.reject = B;
        });
        x.catch(() => {
        }), u[f] = v;
        const c = e.endpoints[p].select(Fr(y) ? g : f), h = l.dispatch((k, B, A) => A), j = {
          ...l,
          getCacheEntry: () => c(l.getState()),
          requestId: f,
          extra: h,
          updateCachedData: Fr(y) ? (k) => l.dispatch(e.util.updateQueryData(p, g, k)) : void 0,
          queryFulfilled: x
        };
        E(g, j);
      }
    } else if (b(a)) {
      const {
        requestId: f,
        baseQueryMeta: p
      } = a.meta;
      (w = u[f]) == null || w.resolve({
        data: a.payload,
        meta: p
      }), delete u[f];
    } else if (m(a)) {
      const {
        requestId: f,
        rejectedWithValue: p,
        baseQueryMeta: g
      } = a.meta;
      (i = u[f]) == null || i.reject({
        error: a.payload ?? a.error,
        isUnhandledError: !p,
        meta: g
      }), delete u[f];
    }
  };
}, gc = ({
  reducerPath: e,
  context: r,
  api: n,
  refetchQuery: s,
  internalState: o
}) => {
  const {
    removeQueryResult: m
  } = n.internalActions, b = (d, a) => {
    ls.match(d) && u(a, "refetchOnFocus"), ds.match(d) && u(a, "refetchOnReconnect");
  };
  function u(d, a) {
    const l = d.getState()[e], w = l.queries, i = o.currentSubscriptions;
    r.batch(() => {
      for (const f of Object.keys(i)) {
        const p = w[f], g = i[f];
        if (!g || !p) continue;
        (Object.values(g).some((E) => E[a] === !0) || Object.values(g).every((E) => E[a] === void 0) && l.config[a]) && ($t(g) === 0 ? d.dispatch(m({
          queryCacheKey: f
        })) : p.status !== "uninitialized" && d.dispatch(s(p)));
      }
    });
  }
  return b;
};
function yc(e) {
  const {
    reducerPath: r,
    queryThunk: n,
    api: s,
    context: o
  } = e, {
    apiUid: m
  } = o, b = {
    invalidateTags: lt(`${r}/invalidateTags`)
  }, u = (w) => w.type.startsWith(`${r}/`), d = [xc, uc, hc, pc, fc, mc];
  return {
    middleware: (w) => {
      let i = !1;
      const p = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: l,
        isThisApiSliceAction: u
      }, g = d.map((v) => v(p)), y = cc(p), E = gc(p);
      return (v) => (x) => {
        if (!rs(x))
          return v(x);
        i || (i = !0, w.dispatch(s.internalActions.middlewareRegistered(m)));
        const c = {
          ...w,
          next: v
        }, h = w.getState(), [j, k] = y(x, c, h);
        let B;
        if (j ? B = v(x) : B = k, w.getState()[r] && (E(x, c, h), u(x) || o.hasRehydrationInfo(x)))
          for (const A of g)
            A(x, c, h);
        return B;
      };
    },
    actions: b
  };
  function l(w) {
    return e.api.endpoints[w.endpointName].initiate(w.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Ys = /* @__PURE__ */ Symbol(), vc = ({
  createSelector: e = os
} = {}) => ({
  name: Ys,
  init(r, {
    baseQuery: n,
    tagTypes: s,
    reducerPath: o,
    serializeQueryArgs: m,
    keepUnusedDataFor: b,
    refetchOnMountOrArgChange: u,
    refetchOnFocus: d,
    refetchOnReconnect: a,
    invalidationBehavior: l,
    onSchemaFailure: w,
    catchSchemaFailure: i,
    skipSchemaValidation: f
  }, p) {
    Z0();
    const g = (W) => (typeof process < "u" && process.env.NODE_ENV === "development" && (s.includes(W.type) || console.error(`Tag type '${W.type}' was used, but not specified in \`tagTypes\`!`)), W);
    Object.assign(r, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: ds,
        onOffline: yo,
        onFocus: ls,
        onFocusLost: go
      },
      util: {}
    });
    const y = oc({
      serializeQueryArgs: m,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: E,
      selectCachedArgsForQuery: v,
      buildQuerySelector: x,
      buildInfiniteQuerySelector: c,
      buildMutationSelector: h
    } = y;
    mt(r.util, {
      selectInvalidatedBy: E,
      selectCachedArgsForQuery: v
    });
    const {
      queryThunk: j,
      infiniteQueryThunk: k,
      mutationThunk: B,
      patchQueryData: A,
      updateQueryData: C,
      upsertQueryData: N,
      prefetch: _,
      buildMatchThunkActions: D
    } = sc({
      baseQuery: n,
      reducerPath: o,
      context: p,
      api: r,
      serializeQueryArgs: m,
      assertTagType: g,
      selectors: y,
      onSchemaFailure: w,
      catchSchemaFailure: i,
      skipSchemaValidation: f
    }), {
      reducer: S,
      actions: R
    } = ac({
      context: p,
      queryThunk: j,
      infiniteQueryThunk: k,
      mutationThunk: B,
      serializeQueryArgs: m,
      reducerPath: o,
      assertTagType: g,
      config: {
        refetchOnFocus: d,
        refetchOnReconnect: a,
        refetchOnMountOrArgChange: u,
        keepUnusedDataFor: b,
        reducerPath: o,
        invalidationBehavior: l
      }
    });
    mt(r.util, {
      patchQueryData: A,
      updateQueryData: C,
      upsertQueryData: N,
      prefetch: _,
      resetApiState: R.resetApiState,
      upsertQueryEntries: R.cacheEntriesUpserted
    }), mt(r.internalActions, R);
    const {
      middleware: M,
      actions: H
    } = yc({
      reducerPath: o,
      context: p,
      queryThunk: j,
      mutationThunk: B,
      infiniteQueryThunk: k,
      api: r,
      assertTagType: g,
      selectors: y
    });
    mt(r.util, H), mt(r, {
      reducer: S,
      middleware: M
    });
    const {
      buildInitiateQuery: U,
      buildInitiateInfiniteQuery: V,
      buildInitiateMutation: K,
      getRunningMutationThunk: O,
      getRunningMutationsThunk: T,
      getRunningQueriesThunk: z,
      getRunningQueryThunk: P
    } = rc({
      queryThunk: j,
      mutationThunk: B,
      infiniteQueryThunk: k,
      api: r,
      serializeQueryArgs: m,
      context: p
    });
    return mt(r.util, {
      getRunningMutationThunk: O,
      getRunningMutationsThunk: T,
      getRunningQueryThunk: P,
      getRunningQueriesThunk: z
    }), {
      name: Ys,
      injectEndpoint(W, ne) {
        var me;
        const te = (me = r.endpoints)[W] ?? (me[W] = {});
        zr(ne) && mt(te, {
          name: W,
          select: x(W, ne),
          initiate: U(W, ne)
        }, D(j, W)), Ji(ne) && mt(te, {
          name: W,
          select: h(),
          initiate: K(W)
        }, D(B, W)), ur(ne) && mt(te, {
          name: W,
          select: c(W, ne),
          initiate: V(W, ne)
        }, D(j, W));
      }
    };
  }
}), es = { exports: {} }, Gr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function bc() {
  if (Xs) return Gr;
  Xs = 1;
  var e = St;
  function r(d, a) {
    return d === a && (d !== 0 || 1 / d === 1 / a) || d !== d && a !== a;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = e.useSyncExternalStore, o = e.useRef, m = e.useEffect, b = e.useMemo, u = e.useDebugValue;
  return Gr.useSyncExternalStoreWithSelector = function(d, a, l, w, i) {
    var f = o(null);
    if (f.current === null) {
      var p = { hasValue: !1, value: null };
      f.current = p;
    } else p = f.current;
    f = b(
      function() {
        function y(h) {
          if (!E) {
            if (E = !0, v = h, h = w(h), i !== void 0 && p.hasValue) {
              var j = p.value;
              if (i(j, h))
                return x = j;
            }
            return x = h;
          }
          if (j = x, n(v, h)) return j;
          var k = w(h);
          return i !== void 0 && i(j, k) ? (v = h, j) : (v = h, x = k);
        }
        var E = !1, v, x, c = l === void 0 ? null : l;
        return [
          function() {
            return y(a());
          },
          c === null ? void 0 : function() {
            return y(c());
          }
        ];
      },
      [a, l, w, i]
    );
    var g = s(d, f[0], f[1]);
    return m(
      function() {
        p.hasValue = !0, p.value = g;
      },
      [g]
    ), u(g), g;
  }, Gr;
}
var Yr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs;
function wc() {
  return Zs || (Zs = 1, process.env.NODE_ENV !== "production" && function() {
    function e(d, a) {
      return d === a && (d !== 0 || 1 / d === 1 / a) || d !== d && a !== a;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var r = St, n = typeof Object.is == "function" ? Object.is : e, s = r.useSyncExternalStore, o = r.useRef, m = r.useEffect, b = r.useMemo, u = r.useDebugValue;
    Yr.useSyncExternalStoreWithSelector = function(d, a, l, w, i) {
      var f = o(null);
      if (f.current === null) {
        var p = { hasValue: !1, value: null };
        f.current = p;
      } else p = f.current;
      f = b(
        function() {
          function y(h) {
            if (!E) {
              if (E = !0, v = h, h = w(h), i !== void 0 && p.hasValue) {
                var j = p.value;
                if (i(j, h))
                  return x = j;
              }
              return x = h;
            }
            if (j = x, n(v, h))
              return j;
            var k = w(h);
            return i !== void 0 && i(j, k) ? (v = h, j) : (v = h, x = k);
          }
          var E = !1, v, x, c = l === void 0 ? null : l;
          return [
            function() {
              return y(a());
            },
            c === null ? void 0 : function() {
              return y(c());
            }
          ];
        },
        [a, l, w, i]
      );
      var g = s(d, f[0], f[1]);
      return m(
        function() {
          p.hasValue = !0, p.value = g;
        },
        [g]
      ), u(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Yr;
}
process.env.NODE_ENV === "production" ? es.exports = bc() : es.exports = wc();
var Cc = es.exports;
function Ec(e) {
  e();
}
function Js(e, r) {
  return e === r ? e !== 0 || r !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
function Jt(e, r) {
  if (Js(e, r)) return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  const n = Object.keys(e), s = Object.keys(r);
  if (n.length !== s.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(r, n[o]) || !Js(e[n[o]], r[n[o]]))
      return !1;
  return !0;
}
var Xr = /* @__PURE__ */ Symbol.for("react-redux-context"), Zr = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function jc() {
  if (!bt.createContext) return {};
  const e = Zr[Xr] ?? (Zr[Xr] = /* @__PURE__ */ new Map());
  let r = e.get(bt.createContext);
  return r || (r = bt.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (r.displayName = "ReactRedux"), e.set(bt.createContext, r)), r;
}
var Tt = /* @__PURE__ */ jc();
function fs(e = Tt) {
  return function() {
    const n = bt.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Eo = /* @__PURE__ */ fs();
function jo(e = Tt) {
  const r = e === Tt ? Eo : (
    // @ts-ignore
    fs(e)
  ), n = () => {
    const { store: s } = r();
    return s;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var No = /* @__PURE__ */ jo();
function Nc(e = Tt) {
  const r = e === Tt ? No : jo(e), n = () => r().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var xs = /* @__PURE__ */ Nc(), kc = (e, r) => e === r;
function Ac(e = Tt) {
  const r = e === Tt ? Eo : fs(e), n = (s, o = {}) => {
    const { equalityFn: m = kc } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!s)
        throw new Error("You must pass a selector to useSelector");
      if (typeof s != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof m != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const b = r(), { store: u, subscription: d, getServerState: a } = b, l = bt.useRef(!0), w = bt.useCallback(
      {
        [s.name](f) {
          const p = s(f);
          if (process.env.NODE_ENV !== "production") {
            const { devModeChecks: g = {} } = typeof o == "function" ? {} : o, { identityFunctionCheck: y, stabilityCheck: E } = b, {
              identityFunctionCheck: v,
              stabilityCheck: x
            } = {
              stabilityCheck: E,
              identityFunctionCheck: y,
              ...g
            };
            if (x === "always" || x === "once" && l.current) {
              const c = s(f);
              if (!m(p, c)) {
                let h;
                try {
                  throw new Error();
                } catch (j) {
                  ({ stack: h } = j);
                }
                console.warn(
                  "Selector " + (s.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: f,
                    selected: p,
                    selected2: c,
                    stack: h
                  }
                );
              }
            }
            if ((v === "always" || v === "once" && l.current) && p === f) {
              let c;
              try {
                throw new Error();
              } catch (h) {
                ({ stack: c } = h);
              }
              console.warn(
                "Selector " + (s.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: c }
              );
            }
            l.current && (l.current = !1);
          }
          return p;
        }
      }[s.name],
      [s]
    ), i = Cc.useSyncExternalStoreWithSelector(
      d.addNestedSub,
      u.getState,
      a || u.getState,
      w,
      m
    );
    return bt.useDebugValue(i), i;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ko = /* @__PURE__ */ Ac(), _c = Ec;
function br(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Dc(e) {
  let r = 0;
  for (const n in e)
    r++;
  return r;
}
function Bc(e) {
  return e.type === "query";
}
function Sc(e) {
  return e.type === "mutation";
}
function Ao(e) {
  return e.type === "infinitequery";
}
function Gt(e, ...r) {
  return Object.assign(e, ...r);
}
var Jr = Symbol();
function en(e, r, n, s) {
  const o = We(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? r({
      queryArgs: e,
      endpointDefinition: n,
      endpointName: s
    }) : e
  }), [e, r, n, s]), m = Be(o);
  return be(() => {
    m.current.serialized !== o.serialized && (m.current = o);
  }, [o]), m.current.serialized === o.serialized ? m.current.queryArgs : e;
}
function wr(e) {
  const r = Be(e);
  return be(() => {
    Jt(r.current, e) || (r.current = e);
  }, [e]), Jt(r.current, e) ? r.current : e;
}
var Fc = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Rc = /* @__PURE__ */ Fc(), Oc = () => typeof navigator < "u" && navigator.product === "ReactNative", Tc = /* @__PURE__ */ Oc(), Pc = () => Rc || Tc ? Lo : be, Ic = /* @__PURE__ */ Pc(), ea = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: po.pending
} : e;
function tn(e, ...r) {
  const n = {};
  return r.forEach((s) => {
    n[s] = e[s];
  }), n;
}
var rn = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function Mc({
  api: e,
  moduleOptions: {
    batch: r,
    hooks: {
      useDispatch: n,
      useSelector: s,
      useStore: o
    },
    unstable__sideEffectsInRender: m,
    createSelector: b
  },
  serializeQueryArgs: u,
  context: d
}) {
  const a = m ? (c) => c() : be;
  return {
    buildQueryHooks: E,
    buildInfiniteQueryHooks: v,
    buildMutationHook: x,
    usePrefetch: i
  };
  function l(c, h, j) {
    if (h != null && h.endpointName && c.isUninitialized) {
      const {
        endpointName: _
      } = h, D = d.endpointDefinitions[_];
      j !== ct && u({
        queryArgs: h.originalArgs,
        endpointDefinition: D,
        endpointName: _
      }) === u({
        queryArgs: j,
        endpointDefinition: D,
        endpointName: _
      }) && (h = void 0);
    }
    let k = c.isSuccess ? c.data : h == null ? void 0 : h.data;
    k === void 0 && (k = c.data);
    const B = k !== void 0, A = c.isLoading, C = (!h || h.isLoading || h.isUninitialized) && !B && A, N = c.isSuccess || B && (A && !(h != null && h.isError) || c.isUninitialized);
    return {
      ...c,
      data: k,
      currentData: c.data,
      isFetching: A,
      isLoading: C,
      isSuccess: N
    };
  }
  function w(c, h, j) {
    if (h != null && h.endpointName && c.isUninitialized) {
      const {
        endpointName: _
      } = h, D = d.endpointDefinitions[_];
      j !== ct && u({
        queryArgs: h.originalArgs,
        endpointDefinition: D,
        endpointName: _
      }) === u({
        queryArgs: j,
        endpointDefinition: D,
        endpointName: _
      }) && (h = void 0);
    }
    let k = c.isSuccess ? c.data : h == null ? void 0 : h.data;
    k === void 0 && (k = c.data);
    const B = k !== void 0, A = c.isLoading, C = (!h || h.isLoading || h.isUninitialized) && !B && A, N = c.isSuccess || A && B;
    return {
      ...c,
      data: k,
      currentData: c.data,
      isFetching: A,
      isLoading: C,
      isSuccess: N
    };
  }
  function i(c, h) {
    const j = n(), k = wr(h);
    return ut((B, A) => j(e.util.prefetch(c, B, {
      ...k,
      ...A
    })), [c, j, k]);
  }
  function f(c, h, {
    refetchOnReconnect: j,
    refetchOnFocus: k,
    refetchOnMountOrArgChange: B,
    skip: A = !1,
    pollingInterval: C = 0,
    skipPollingIfUnfocused: N = !1,
    ..._
  } = {}) {
    const {
      initiate: D
    } = e.endpoints[c], S = n(), R = Be(void 0);
    if (!R.current) {
      const W = S(e.internalActions.internal_getRTKQSubscriptions());
      if (process.env.NODE_ENV !== "production" && (typeof W != "object" || typeof (W == null ? void 0 : W.type) == "string"))
        throw new Error(process.env.NODE_ENV === "production" ? ke(37) : `Warning: Middleware for RTK-Query API at reducerPath "${e.reducerPath}" has not been added to the store.
    You must add the middleware for RTK-Query to function correctly!`);
      R.current = W;
    }
    const M = en(
      A ? ct : h,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      Rr,
      d.endpointDefinitions[c],
      c
    ), H = wr({
      refetchOnReconnect: j,
      refetchOnFocus: k,
      pollingInterval: C,
      skipPollingIfUnfocused: N
    }), U = _.initialPageParam, V = wr(U), K = Be(void 0);
    let {
      queryCacheKey: O,
      requestId: T
    } = K.current || {}, z = !1;
    O && T && (z = R.current.isRequestSubscribed(O, T));
    const P = !z && K.current !== void 0;
    return a(() => {
      P && (K.current = void 0);
    }, [P]), a(() => {
      var oe;
      const W = K.current;
      if (typeof process < "u" && process.env.NODE_ENV === "removeMeOnCompilation" && console.log(P), M === ct) {
        W == null || W.unsubscribe(), K.current = void 0;
        return;
      }
      const ne = (oe = K.current) == null ? void 0 : oe.subscriptionOptions;
      if (!W || W.arg !== M) {
        W == null || W.unsubscribe();
        const te = S(D(M, {
          subscriptionOptions: H,
          forceRefetch: B,
          ...Ao(d.endpointDefinitions[c]) ? {
            initialPageParam: V
          } : {}
        }));
        K.current = te;
      } else H !== ne && W.updateSubscriptionOptions(H);
    }, [S, D, B, M, H, P, V, c]), [K, S, D, H];
  }
  function p(c, h) {
    return (k, {
      skip: B = !1,
      selectFromResult: A
    } = {}) => {
      const {
        select: C
      } = e.endpoints[c], N = en(B ? ct : k, u, d.endpointDefinitions[c], c), _ = Be(void 0), D = We(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        b([
          // @ts-ignore
          C(N),
          (U, V) => V,
          (U) => N
        ], h, {
          memoizeOptions: {
            resultEqualityCheck: Jt
          }
        })
      ), [C, N]), S = We(() => A ? b([D], A, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : D, [D, A]), R = s((U) => S(U, _.current), Jt), M = o(), H = D(M.getState(), _.current);
      return Ic(() => {
        _.current = H;
      }, [H]), R;
    };
  }
  function g(c) {
    be(() => () => {
      var h, j;
      (j = (h = c.current) == null ? void 0 : h.unsubscribe) == null || j.call(h), c.current = void 0;
    }, [c]);
  }
  function y(c) {
    if (!c.current) throw new Error(process.env.NODE_ENV === "production" ? ke(38) : "Cannot refetch a query that has not been started yet.");
    return c.current.refetch();
  }
  function E(c) {
    const h = (B, A = {}) => {
      const [C] = f(c, B, A);
      return g(C), We(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => y(C)
      }), [C]);
    }, j = ({
      refetchOnReconnect: B,
      refetchOnFocus: A,
      pollingInterval: C = 0,
      skipPollingIfUnfocused: N = !1
    } = {}) => {
      const {
        initiate: _
      } = e.endpoints[c], D = n(), [S, R] = J(Jr), M = Be(void 0), H = wr({
        refetchOnReconnect: B,
        refetchOnFocus: A,
        pollingInterval: C,
        skipPollingIfUnfocused: N
      });
      a(() => {
        var T, z;
        const O = (T = M.current) == null ? void 0 : T.subscriptionOptions;
        H !== O && ((z = M.current) == null || z.updateSubscriptionOptions(H));
      }, [H]);
      const U = Be(H);
      a(() => {
        U.current = H;
      }, [H]);
      const V = ut(function(O, T = !1) {
        let z;
        return r(() => {
          var P;
          (P = M.current) == null || P.unsubscribe(), M.current = z = D(_(O, {
            subscriptionOptions: U.current,
            forceRefetch: !T
          })), R(O);
        }), z;
      }, [D, _]), K = ut(() => {
        var O, T;
        (O = M.current) != null && O.queryCacheKey && D(e.internalActions.removeQueryResult({
          queryCacheKey: (T = M.current) == null ? void 0 : T.queryCacheKey
        }));
      }, [D]);
      return be(() => () => {
        var O;
        (O = M == null ? void 0 : M.current) == null || O.unsubscribe();
      }, []), be(() => {
        S !== Jr && !M.current && V(S, !0);
      }, [S, V]), We(() => [V, S, {
        reset: K
      }], [V, S, K]);
    }, k = p(c, l);
    return {
      useQueryState: k,
      useQuerySubscription: h,
      useLazyQuerySubscription: j,
      useLazyQuery(B) {
        const [A, C, {
          reset: N
        }] = j(B), _ = k(C, {
          ...B,
          skip: C === Jr
        }), D = We(() => ({
          lastArg: C
        }), [C]);
        return We(() => [A, {
          ..._,
          reset: N
        }, D], [A, _, N, D]);
      },
      useQuery(B, A) {
        const C = h(B, A), N = k(B, {
          selectFromResult: B === ct || A != null && A.skip ? void 0 : ea,
          ...A
        }), _ = tn(N, ...rn);
        return $r(_), We(() => ({
          ...N,
          ...C
        }), [N, C]);
      }
    };
  }
  function v(c) {
    const h = (k, B = {}) => {
      const [A, C, N, _] = f(c, k, B), D = Be(_);
      a(() => {
        D.current = _;
      }, [_]);
      const S = ut(function(H, U) {
        let V;
        return r(() => {
          var K;
          (K = A.current) == null || K.unsubscribe(), A.current = V = C(N(H, {
            subscriptionOptions: D.current,
            direction: U
          }));
        }), V;
      }, [A, C, N]);
      g(A);
      const R = en(
        B.skip ? ct : k,
        // Even if the user provided a per-endpoint `serializeQueryArgs` with
        // a consistent return value, _here_ we want to use the default behavior
        // so we can tell if _anything_ actually changed. Otherwise, we can end up
        // with a case where the query args did change but the serialization doesn't,
        // and then we never try to initiate a refetch.
        Rr,
        d.endpointDefinitions[c],
        c
      ), M = ut(() => y(A), [A]);
      return We(() => ({
        trigger: S,
        /**
         * A method to manually refetch data for the query
         */
        refetch: M,
        fetchNextPage: () => S(R, "forward"),
        fetchPreviousPage: () => S(R, "backward")
      }), [M, S, R]);
    }, j = p(c, w);
    return {
      useInfiniteQueryState: j,
      useInfiniteQuerySubscription: h,
      useInfiniteQuery(k, B) {
        const {
          refetch: A,
          fetchNextPage: C,
          fetchPreviousPage: N
        } = h(k, B), _ = j(k, {
          selectFromResult: k === ct || B != null && B.skip ? void 0 : ea,
          ...B
        }), D = tn(_, ...rn, "hasNextPage", "hasPreviousPage");
        return $r(D), We(() => ({
          ..._,
          fetchNextPage: C,
          fetchPreviousPage: N,
          refetch: A
        }), [_, C, N, A]);
      }
    };
  }
  function x(c) {
    return ({
      selectFromResult: h,
      fixedCacheKey: j
    } = {}) => {
      const {
        select: k,
        initiate: B
      } = e.endpoints[c], A = n(), [C, N] = J();
      be(() => () => {
        C != null && C.arg.fixedCacheKey || C == null || C.reset();
      }, [C]);
      const _ = ut(function(O) {
        const T = A(B(O, {
          fixedCacheKey: j
        }));
        return N(T), T;
      }, [A, B, j]), {
        requestId: D
      } = C || {}, S = We(() => k({
        fixedCacheKey: j,
        requestId: C == null ? void 0 : C.requestId
      }), [j, C, k]), R = We(() => h ? b([S], h) : S, [h, S]), M = s(R, Jt), H = j == null ? C == null ? void 0 : C.arg.originalArgs : void 0, U = ut(() => {
        r(() => {
          C && N(void 0), j && A(e.internalActions.removeMutationResult({
            requestId: D,
            fixedCacheKey: j
          }));
        });
      }, [A, j, C, D]), V = tn(M, ...rn, "endpointName");
      $r(V);
      const K = We(() => ({
        ...M,
        originalArgs: H,
        reset: U
      }), [M, H, U]);
      return We(() => [_, K], [_, K]);
    };
  }
}
var Lc = /* @__PURE__ */ Symbol(), zc = ({
  batch: e = _c,
  hooks: r = {
    useDispatch: xs,
    useSelector: ko,
    useStore: No
  },
  createSelector: n = os,
  unstable__sideEffectsInRender: s = !1,
  ...o
} = {}) => {
  if (process.env.NODE_ENV !== "production") {
    const m = ["useDispatch", "useSelector", "useStore"];
    let b = !1;
    for (const u of m)
      if (Dc(o) > 0 && (o[u] && (b || (console.warn("As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`"), b = !0)), r[u] = o[u]), typeof r[u] != "function")
        throw new Error(process.env.NODE_ENV === "production" ? ke(36) : `When using custom hooks for context, all ${m.length} hooks need to be provided: ${m.join(", ")}.
Hook ${u} was either not provided or not a function.`);
  }
  return {
    name: Lc,
    init(m, {
      serializeQueryArgs: b
    }, u) {
      const d = m, {
        buildQueryHooks: a,
        buildInfiniteQueryHooks: l,
        buildMutationHook: w,
        usePrefetch: i
      } = Mc({
        api: m,
        moduleOptions: {
          batch: e,
          hooks: r,
          unstable__sideEffectsInRender: s,
          createSelector: n
        },
        serializeQueryArgs: b,
        context: u
      });
      return Gt(d, {
        usePrefetch: i
      }), Gt(u, {
        batch: e
      }), {
        injectEndpoint(f, p) {
          if (Bc(p)) {
            const {
              useQuery: g,
              useLazyQuery: y,
              useLazyQuerySubscription: E,
              useQueryState: v,
              useQuerySubscription: x
            } = a(f);
            Gt(d.endpoints[f], {
              useQuery: g,
              useLazyQuery: y,
              useLazyQuerySubscription: E,
              useQueryState: v,
              useQuerySubscription: x
            }), m[`use${br(f)}Query`] = g, m[`useLazy${br(f)}Query`] = y;
          }
          if (Sc(p)) {
            const g = w(f);
            Gt(d.endpoints[f], {
              useMutation: g
            }), m[`use${br(f)}Mutation`] = g;
          } else if (Ao(p)) {
            const {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: y,
              useInfiniteQueryState: E
            } = l(f);
            Gt(d.endpoints[f], {
              useInfiniteQuery: g,
              useInfiniteQuerySubscription: y,
              useInfiniteQueryState: E
            }), m[`use${br(f)}InfiniteQuery`] = g;
          }
        }
      };
    }
  };
}, qc = /* @__PURE__ */ ic(vc(), zc()), _o = { exports: {} };
function $c(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var nn = { exports: {} };
const Hc = {}, Vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hc
}, Symbol.toStringTag, { value: "Module" })), Wc = /* @__PURE__ */ qo(Vc);
var ta;
function Ne() {
  return ta || (ta = 1, function(e, r) {
    (function(n, s) {
      e.exports = s();
    })(ve, function() {
      var n = n || function(s, o) {
        var m;
        if (typeof window < "u" && window.crypto && (m = window.crypto), typeof self < "u" && self.crypto && (m = self.crypto), typeof globalThis < "u" && globalThis.crypto && (m = globalThis.crypto), !m && typeof window < "u" && window.msCrypto && (m = window.msCrypto), !m && typeof ve < "u" && ve.crypto && (m = ve.crypto), !m && typeof $c == "function")
          try {
            m = Wc;
          } catch {
          }
        var b = function() {
          if (m) {
            if (typeof m.getRandomValues == "function")
              try {
                return m.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof m.randomBytes == "function")
              try {
                return m.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, u = Object.create || /* @__PURE__ */ function() {
          function v() {
          }
          return function(x) {
            var c;
            return v.prototype = x, c = new v(), v.prototype = null, c;
          };
        }(), d = {}, a = d.lib = {}, l = a.Base = /* @__PURE__ */ function() {
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
              var x = u(this);
              return v && x.mixIn(v), (!x.hasOwnProperty("init") || this.init === x.init) && (x.init = function() {
                x.$super.init.apply(this, arguments);
              }), x.init.prototype = x, x.$super = this, x;
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
              for (var x in v)
                v.hasOwnProperty(x) && (this[x] = v[x]);
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
        }(), w = a.WordArray = l.extend({
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
          init: function(v, x) {
            v = this.words = v || [], x != o ? this.sigBytes = x : this.sigBytes = v.length * 4;
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
            return (v || f).stringify(this);
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
            var x = this.words, c = v.words, h = this.sigBytes, j = v.sigBytes;
            if (this.clamp(), h % 4)
              for (var k = 0; k < j; k++) {
                var B = c[k >>> 2] >>> 24 - k % 4 * 8 & 255;
                x[h + k >>> 2] |= B << 24 - (h + k) % 4 * 8;
              }
            else
              for (var A = 0; A < j; A += 4)
                x[h + A >>> 2] = c[A >>> 2];
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
            var v = this.words, x = this.sigBytes;
            v[x >>> 2] &= 4294967295 << 32 - x % 4 * 8, v.length = s.ceil(x / 4);
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
            var v = l.clone.call(this);
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
            for (var x = [], c = 0; c < v; c += 4)
              x.push(b());
            return new w.init(x, v);
          }
        }), i = d.enc = {}, f = i.Hex = {
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
            for (var x = v.words, c = v.sigBytes, h = [], j = 0; j < c; j++) {
              var k = x[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              h.push((k >>> 4).toString(16)), h.push((k & 15).toString(16));
            }
            return h.join("");
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
            for (var x = v.length, c = [], h = 0; h < x; h += 2)
              c[h >>> 3] |= parseInt(v.substr(h, 2), 16) << 24 - h % 8 * 4;
            return new w.init(c, x / 2);
          }
        }, p = i.Latin1 = {
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
            for (var x = v.words, c = v.sigBytes, h = [], j = 0; j < c; j++) {
              var k = x[j >>> 2] >>> 24 - j % 4 * 8 & 255;
              h.push(String.fromCharCode(k));
            }
            return h.join("");
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
            for (var x = v.length, c = [], h = 0; h < x; h++)
              c[h >>> 2] |= (v.charCodeAt(h) & 255) << 24 - h % 4 * 8;
            return new w.init(c, x);
          }
        }, g = i.Utf8 = {
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
        }, y = a.BufferedBlockAlgorithm = l.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new w.init(), this._nDataBytes = 0;
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
            var x, c = this._data, h = c.words, j = c.sigBytes, k = this.blockSize, B = k * 4, A = j / B;
            v ? A = s.ceil(A) : A = s.max((A | 0) - this._minBufferSize, 0);
            var C = A * k, N = s.min(C * 4, j);
            if (C) {
              for (var _ = 0; _ < C; _ += k)
                this._doProcessBlock(h, _);
              x = h.splice(0, C), c.sigBytes -= N;
            }
            return new w.init(x, N);
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
            var v = l.clone.call(this);
            return v._data = this._data.clone(), v;
          },
          _minBufferSize: 0
        });
        a.Hasher = y.extend({
          /**
           * Configuration options.
           */
          cfg: l.extend(),
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
            y.reset.call(this), this._doReset();
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
            var x = this._doFinalize();
            return x;
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
            return function(x, c) {
              return new v.init(c).finalize(x);
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
            return function(x, c) {
              return new E.HMAC.init(v, c).finalize(x);
            };
          }
        });
        var E = d.algo = {};
        return d;
      }(Math);
      return n;
    });
  }(nn)), nn.exports;
}
var sn = { exports: {} }, ra;
function qr() {
  return ra || (ra = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function(s) {
        var o = n, m = o.lib, b = m.Base, u = m.WordArray, d = o.x64 = {};
        d.Word = b.extend({
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
          init: function(a, l) {
            this.high = a, this.low = l;
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
        }), d.WordArray = b.extend({
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
          init: function(a, l) {
            a = this.words = a || [], l != s ? this.sigBytes = l : this.sigBytes = a.length * 8;
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
            for (var a = this.words, l = a.length, w = [], i = 0; i < l; i++) {
              var f = a[i];
              w.push(f.high), w.push(f.low);
            }
            return u.create(w, this.sigBytes);
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
            for (var a = b.clone.call(this), l = a.words = this.words.slice(0), w = l.length, i = 0; i < w; i++)
              l[i] = l[i].clone();
            return a;
          }
        });
      }(), n;
    });
  }(sn)), sn.exports;
}
var an = { exports: {} }, na;
function Qc() {
  return na || (na = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var s = n, o = s.lib, m = o.WordArray, b = m.init, u = m.init = function(d) {
            if (d instanceof ArrayBuffer && (d = new Uint8Array(d)), (d instanceof Int8Array || typeof Uint8ClampedArray < "u" && d instanceof Uint8ClampedArray || d instanceof Int16Array || d instanceof Uint16Array || d instanceof Int32Array || d instanceof Uint32Array || d instanceof Float32Array || d instanceof Float64Array) && (d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength)), d instanceof Uint8Array) {
              for (var a = d.byteLength, l = [], w = 0; w < a; w++)
                l[w >>> 2] |= d[w] << 24 - w % 4 * 8;
              b.call(this, l, a);
            } else
              b.apply(this, arguments);
          };
          u.prototype = m;
        }
      }(), n.lib.WordArray;
    });
  }(an)), an.exports;
}
var on = { exports: {} }, sa;
function Uc() {
  return sa || (sa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.WordArray, b = s.enc;
        b.Utf16 = b.Utf16BE = {
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
          stringify: function(d) {
            for (var a = d.words, l = d.sigBytes, w = [], i = 0; i < l; i += 2) {
              var f = a[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              w.push(String.fromCharCode(f));
            }
            return w.join("");
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
          parse: function(d) {
            for (var a = d.length, l = [], w = 0; w < a; w++)
              l[w >>> 1] |= d.charCodeAt(w) << 16 - w % 2 * 16;
            return m.create(l, a * 2);
          }
        }, b.Utf16LE = {
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
          stringify: function(d) {
            for (var a = d.words, l = d.sigBytes, w = [], i = 0; i < l; i += 2) {
              var f = u(a[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              w.push(String.fromCharCode(f));
            }
            return w.join("");
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
          parse: function(d) {
            for (var a = d.length, l = [], w = 0; w < a; w++)
              l[w >>> 1] |= u(d.charCodeAt(w) << 16 - w % 2 * 16);
            return m.create(l, a * 2);
          }
        };
        function u(d) {
          return d << 8 & 4278255360 | d >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(on)), on.exports;
}
var cn = { exports: {} }, aa;
function Pt() {
  return aa || (aa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.WordArray, b = s.enc;
        b.Base64 = {
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
          stringify: function(d) {
            var a = d.words, l = d.sigBytes, w = this._map;
            d.clamp();
            for (var i = [], f = 0; f < l; f += 3)
              for (var p = a[f >>> 2] >>> 24 - f % 4 * 8 & 255, g = a[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255, y = a[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, E = p << 16 | g << 8 | y, v = 0; v < 4 && f + v * 0.75 < l; v++)
                i.push(w.charAt(E >>> 6 * (3 - v) & 63));
            var x = w.charAt(64);
            if (x)
              for (; i.length % 4; )
                i.push(x);
            return i.join("");
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
          parse: function(d) {
            var a = d.length, l = this._map, w = this._reverseMap;
            if (!w) {
              w = this._reverseMap = [];
              for (var i = 0; i < l.length; i++)
                w[l.charCodeAt(i)] = i;
            }
            var f = l.charAt(64);
            if (f) {
              var p = d.indexOf(f);
              p !== -1 && (a = p);
            }
            return u(d, a, w);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function u(d, a, l) {
          for (var w = [], i = 0, f = 0; f < a; f++)
            if (f % 4) {
              var p = l[d.charCodeAt(f - 1)] << f % 4 * 2, g = l[d.charCodeAt(f)] >>> 6 - f % 4 * 2, y = p | g;
              w[i >>> 2] |= y << 24 - i % 4 * 8, i++;
            }
          return m.create(w, i);
        }
      }(), n.enc.Base64;
    });
  }(cn)), cn.exports;
}
var ln = { exports: {} }, oa;
function Kc() {
  return oa || (oa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.WordArray, b = s.enc;
        b.Base64url = {
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
          stringify: function(d, a) {
            a === void 0 && (a = !0);
            var l = d.words, w = d.sigBytes, i = a ? this._safe_map : this._map;
            d.clamp();
            for (var f = [], p = 0; p < w; p += 3)
              for (var g = l[p >>> 2] >>> 24 - p % 4 * 8 & 255, y = l[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, E = l[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, v = g << 16 | y << 8 | E, x = 0; x < 4 && p + x * 0.75 < w; x++)
                f.push(i.charAt(v >>> 6 * (3 - x) & 63));
            var c = i.charAt(64);
            if (c)
              for (; f.length % 4; )
                f.push(c);
            return f.join("");
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
          parse: function(d, a) {
            a === void 0 && (a = !0);
            var l = d.length, w = a ? this._safe_map : this._map, i = this._reverseMap;
            if (!i) {
              i = this._reverseMap = [];
              for (var f = 0; f < w.length; f++)
                i[w.charCodeAt(f)] = f;
            }
            var p = w.charAt(64);
            if (p) {
              var g = d.indexOf(p);
              g !== -1 && (l = g);
            }
            return u(d, l, i);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function u(d, a, l) {
          for (var w = [], i = 0, f = 0; f < a; f++)
            if (f % 4) {
              var p = l[d.charCodeAt(f - 1)] << f % 4 * 2, g = l[d.charCodeAt(f)] >>> 6 - f % 4 * 2, y = p | g;
              w[i >>> 2] |= y << 24 - i % 4 * 8, i++;
            }
          return m.create(w, i);
        }
      }(), n.enc.Base64url;
    });
  }(ln)), ln.exports;
}
var dn = { exports: {} }, ia;
function It() {
  return ia || (ia = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function(s) {
        var o = n, m = o.lib, b = m.WordArray, u = m.Hasher, d = o.algo, a = [];
        (function() {
          for (var g = 0; g < 64; g++)
            a[g] = s.abs(s.sin(g + 1)) * 4294967296 | 0;
        })();
        var l = d.MD5 = u.extend({
          _doReset: function() {
            this._hash = new b.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(g, y) {
            for (var E = 0; E < 16; E++) {
              var v = y + E, x = g[v];
              g[v] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360;
            }
            var c = this._hash.words, h = g[y + 0], j = g[y + 1], k = g[y + 2], B = g[y + 3], A = g[y + 4], C = g[y + 5], N = g[y + 6], _ = g[y + 7], D = g[y + 8], S = g[y + 9], R = g[y + 10], M = g[y + 11], H = g[y + 12], U = g[y + 13], V = g[y + 14], K = g[y + 15], O = c[0], T = c[1], z = c[2], P = c[3];
            O = w(O, T, z, P, h, 7, a[0]), P = w(P, O, T, z, j, 12, a[1]), z = w(z, P, O, T, k, 17, a[2]), T = w(T, z, P, O, B, 22, a[3]), O = w(O, T, z, P, A, 7, a[4]), P = w(P, O, T, z, C, 12, a[5]), z = w(z, P, O, T, N, 17, a[6]), T = w(T, z, P, O, _, 22, a[7]), O = w(O, T, z, P, D, 7, a[8]), P = w(P, O, T, z, S, 12, a[9]), z = w(z, P, O, T, R, 17, a[10]), T = w(T, z, P, O, M, 22, a[11]), O = w(O, T, z, P, H, 7, a[12]), P = w(P, O, T, z, U, 12, a[13]), z = w(z, P, O, T, V, 17, a[14]), T = w(T, z, P, O, K, 22, a[15]), O = i(O, T, z, P, j, 5, a[16]), P = i(P, O, T, z, N, 9, a[17]), z = i(z, P, O, T, M, 14, a[18]), T = i(T, z, P, O, h, 20, a[19]), O = i(O, T, z, P, C, 5, a[20]), P = i(P, O, T, z, R, 9, a[21]), z = i(z, P, O, T, K, 14, a[22]), T = i(T, z, P, O, A, 20, a[23]), O = i(O, T, z, P, S, 5, a[24]), P = i(P, O, T, z, V, 9, a[25]), z = i(z, P, O, T, B, 14, a[26]), T = i(T, z, P, O, D, 20, a[27]), O = i(O, T, z, P, U, 5, a[28]), P = i(P, O, T, z, k, 9, a[29]), z = i(z, P, O, T, _, 14, a[30]), T = i(T, z, P, O, H, 20, a[31]), O = f(O, T, z, P, C, 4, a[32]), P = f(P, O, T, z, D, 11, a[33]), z = f(z, P, O, T, M, 16, a[34]), T = f(T, z, P, O, V, 23, a[35]), O = f(O, T, z, P, j, 4, a[36]), P = f(P, O, T, z, A, 11, a[37]), z = f(z, P, O, T, _, 16, a[38]), T = f(T, z, P, O, R, 23, a[39]), O = f(O, T, z, P, U, 4, a[40]), P = f(P, O, T, z, h, 11, a[41]), z = f(z, P, O, T, B, 16, a[42]), T = f(T, z, P, O, N, 23, a[43]), O = f(O, T, z, P, S, 4, a[44]), P = f(P, O, T, z, H, 11, a[45]), z = f(z, P, O, T, K, 16, a[46]), T = f(T, z, P, O, k, 23, a[47]), O = p(O, T, z, P, h, 6, a[48]), P = p(P, O, T, z, _, 10, a[49]), z = p(z, P, O, T, V, 15, a[50]), T = p(T, z, P, O, C, 21, a[51]), O = p(O, T, z, P, H, 6, a[52]), P = p(P, O, T, z, B, 10, a[53]), z = p(z, P, O, T, R, 15, a[54]), T = p(T, z, P, O, j, 21, a[55]), O = p(O, T, z, P, D, 6, a[56]), P = p(P, O, T, z, K, 10, a[57]), z = p(z, P, O, T, N, 15, a[58]), T = p(T, z, P, O, U, 21, a[59]), O = p(O, T, z, P, A, 6, a[60]), P = p(P, O, T, z, M, 10, a[61]), z = p(z, P, O, T, k, 15, a[62]), T = p(T, z, P, O, S, 21, a[63]), c[0] = c[0] + O | 0, c[1] = c[1] + T | 0, c[2] = c[2] + z | 0, c[3] = c[3] + P | 0;
          },
          _doFinalize: function() {
            var g = this._data, y = g.words, E = this._nDataBytes * 8, v = g.sigBytes * 8;
            y[v >>> 5] |= 128 << 24 - v % 32;
            var x = s.floor(E / 4294967296), c = E;
            y[(v + 64 >>> 9 << 4) + 15] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, y[(v + 64 >>> 9 << 4) + 14] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, g.sigBytes = (y.length + 1) * 4, this._process();
            for (var h = this._hash, j = h.words, k = 0; k < 4; k++) {
              var B = j[k];
              j[k] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }
            return h;
          },
          clone: function() {
            var g = u.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        function w(g, y, E, v, x, c, h) {
          var j = g + (y & E | ~y & v) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        function i(g, y, E, v, x, c, h) {
          var j = g + (y & v | E & ~v) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        function f(g, y, E, v, x, c, h) {
          var j = g + (y ^ E ^ v) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        function p(g, y, E, v, x, c, h) {
          var j = g + (E ^ (y | ~v)) + x + h;
          return (j << c | j >>> 32 - c) + y;
        }
        o.MD5 = u._createHelper(l), o.HmacMD5 = u._createHmacHelper(l);
      }(Math), n.MD5;
    });
  }(dn)), dn.exports;
}
var un = { exports: {} }, ca;
function Do() {
  return ca || (ca = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.WordArray, b = o.Hasher, u = s.algo, d = [], a = u.SHA1 = b.extend({
          _doReset: function() {
            this._hash = new m.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(l, w) {
            for (var i = this._hash.words, f = i[0], p = i[1], g = i[2], y = i[3], E = i[4], v = 0; v < 80; v++) {
              if (v < 16)
                d[v] = l[w + v] | 0;
              else {
                var x = d[v - 3] ^ d[v - 8] ^ d[v - 14] ^ d[v - 16];
                d[v] = x << 1 | x >>> 31;
              }
              var c = (f << 5 | f >>> 27) + E + d[v];
              v < 20 ? c += (p & g | ~p & y) + 1518500249 : v < 40 ? c += (p ^ g ^ y) + 1859775393 : v < 60 ? c += (p & g | p & y | g & y) - 1894007588 : c += (p ^ g ^ y) - 899497514, E = y, y = g, g = p << 30 | p >>> 2, p = f, f = c;
            }
            i[0] = i[0] + f | 0, i[1] = i[1] + p | 0, i[2] = i[2] + g | 0, i[3] = i[3] + y | 0, i[4] = i[4] + E | 0;
          },
          _doFinalize: function() {
            var l = this._data, w = l.words, i = this._nDataBytes * 8, f = l.sigBytes * 8;
            return w[f >>> 5] |= 128 << 24 - f % 32, w[(f + 64 >>> 9 << 4) + 14] = Math.floor(i / 4294967296), w[(f + 64 >>> 9 << 4) + 15] = i, l.sigBytes = w.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var l = b.clone.call(this);
            return l._hash = this._hash.clone(), l;
          }
        });
        s.SHA1 = b._createHelper(a), s.HmacSHA1 = b._createHmacHelper(a);
      }(), n.SHA1;
    });
  }(un)), un.exports;
}
var fn = { exports: {} }, la;
function hs() {
  return la || (la = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      return function(s) {
        var o = n, m = o.lib, b = m.WordArray, u = m.Hasher, d = o.algo, a = [], l = [];
        (function() {
          function f(E) {
            for (var v = s.sqrt(E), x = 2; x <= v; x++)
              if (!(E % x))
                return !1;
            return !0;
          }
          function p(E) {
            return (E - (E | 0)) * 4294967296 | 0;
          }
          for (var g = 2, y = 0; y < 64; )
            f(g) && (y < 8 && (a[y] = p(s.pow(g, 1 / 2))), l[y] = p(s.pow(g, 1 / 3)), y++), g++;
        })();
        var w = [], i = d.SHA256 = u.extend({
          _doReset: function() {
            this._hash = new b.init(a.slice(0));
          },
          _doProcessBlock: function(f, p) {
            for (var g = this._hash.words, y = g[0], E = g[1], v = g[2], x = g[3], c = g[4], h = g[5], j = g[6], k = g[7], B = 0; B < 64; B++) {
              if (B < 16)
                w[B] = f[p + B] | 0;
              else {
                var A = w[B - 15], C = (A << 25 | A >>> 7) ^ (A << 14 | A >>> 18) ^ A >>> 3, N = w[B - 2], _ = (N << 15 | N >>> 17) ^ (N << 13 | N >>> 19) ^ N >>> 10;
                w[B] = C + w[B - 7] + _ + w[B - 16];
              }
              var D = c & h ^ ~c & j, S = y & E ^ y & v ^ E & v, R = (y << 30 | y >>> 2) ^ (y << 19 | y >>> 13) ^ (y << 10 | y >>> 22), M = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25), H = k + M + D + l[B] + w[B], U = R + S;
              k = j, j = h, h = c, c = x + H | 0, x = v, v = E, E = y, y = H + U | 0;
            }
            g[0] = g[0] + y | 0, g[1] = g[1] + E | 0, g[2] = g[2] + v | 0, g[3] = g[3] + x | 0, g[4] = g[4] + c | 0, g[5] = g[5] + h | 0, g[6] = g[6] + j | 0, g[7] = g[7] + k | 0;
          },
          _doFinalize: function() {
            var f = this._data, p = f.words, g = this._nDataBytes * 8, y = f.sigBytes * 8;
            return p[y >>> 5] |= 128 << 24 - y % 32, p[(y + 64 >>> 9 << 4) + 14] = s.floor(g / 4294967296), p[(y + 64 >>> 9 << 4) + 15] = g, f.sigBytes = p.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = u.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        o.SHA256 = u._createHelper(i), o.HmacSHA256 = u._createHmacHelper(i);
      }(Math), n.SHA256;
    });
  }(fn)), fn.exports;
}
var xn = { exports: {} }, da;
function Gc() {
  return da || (da = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), hs());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.WordArray, b = s.algo, u = b.SHA256, d = b.SHA224 = u.extend({
          _doReset: function() {
            this._hash = new m.init([
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
            var a = u._doFinalize.call(this);
            return a.sigBytes -= 4, a;
          }
        });
        s.SHA224 = u._createHelper(d), s.HmacSHA224 = u._createHmacHelper(d);
      }(), n.SHA224;
    });
  }(xn)), xn.exports;
}
var hn = { exports: {} }, ua;
function Bo() {
  return ua || (ua = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), qr());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.Hasher, b = s.x64, u = b.Word, d = b.WordArray, a = s.algo;
        function l() {
          return u.create.apply(u, arguments);
        }
        var w = [
          l(1116352408, 3609767458),
          l(1899447441, 602891725),
          l(3049323471, 3964484399),
          l(3921009573, 2173295548),
          l(961987163, 4081628472),
          l(1508970993, 3053834265),
          l(2453635748, 2937671579),
          l(2870763221, 3664609560),
          l(3624381080, 2734883394),
          l(310598401, 1164996542),
          l(607225278, 1323610764),
          l(1426881987, 3590304994),
          l(1925078388, 4068182383),
          l(2162078206, 991336113),
          l(2614888103, 633803317),
          l(3248222580, 3479774868),
          l(3835390401, 2666613458),
          l(4022224774, 944711139),
          l(264347078, 2341262773),
          l(604807628, 2007800933),
          l(770255983, 1495990901),
          l(1249150122, 1856431235),
          l(1555081692, 3175218132),
          l(1996064986, 2198950837),
          l(2554220882, 3999719339),
          l(2821834349, 766784016),
          l(2952996808, 2566594879),
          l(3210313671, 3203337956),
          l(3336571891, 1034457026),
          l(3584528711, 2466948901),
          l(113926993, 3758326383),
          l(338241895, 168717936),
          l(666307205, 1188179964),
          l(773529912, 1546045734),
          l(1294757372, 1522805485),
          l(1396182291, 2643833823),
          l(1695183700, 2343527390),
          l(1986661051, 1014477480),
          l(2177026350, 1206759142),
          l(2456956037, 344077627),
          l(2730485921, 1290863460),
          l(2820302411, 3158454273),
          l(3259730800, 3505952657),
          l(3345764771, 106217008),
          l(3516065817, 3606008344),
          l(3600352804, 1432725776),
          l(4094571909, 1467031594),
          l(275423344, 851169720),
          l(430227734, 3100823752),
          l(506948616, 1363258195),
          l(659060556, 3750685593),
          l(883997877, 3785050280),
          l(958139571, 3318307427),
          l(1322822218, 3812723403),
          l(1537002063, 2003034995),
          l(1747873779, 3602036899),
          l(1955562222, 1575990012),
          l(2024104815, 1125592928),
          l(2227730452, 2716904306),
          l(2361852424, 442776044),
          l(2428436474, 593698344),
          l(2756734187, 3733110249),
          l(3204031479, 2999351573),
          l(3329325298, 3815920427),
          l(3391569614, 3928383900),
          l(3515267271, 566280711),
          l(3940187606, 3454069534),
          l(4118630271, 4000239992),
          l(116418474, 1914138554),
          l(174292421, 2731055270),
          l(289380356, 3203993006),
          l(460393269, 320620315),
          l(685471733, 587496836),
          l(852142971, 1086792851),
          l(1017036298, 365543100),
          l(1126000580, 2618297676),
          l(1288033470, 3409855158),
          l(1501505948, 4234509866),
          l(1607167915, 987167468),
          l(1816402316, 1246189591)
        ], i = [];
        (function() {
          for (var p = 0; p < 80; p++)
            i[p] = l();
        })();
        var f = a.SHA512 = m.extend({
          _doReset: function() {
            this._hash = new d.init([
              new u.init(1779033703, 4089235720),
              new u.init(3144134277, 2227873595),
              new u.init(1013904242, 4271175723),
              new u.init(2773480762, 1595750129),
              new u.init(1359893119, 2917565137),
              new u.init(2600822924, 725511199),
              new u.init(528734635, 4215389547),
              new u.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(p, g) {
            for (var y = this._hash.words, E = y[0], v = y[1], x = y[2], c = y[3], h = y[4], j = y[5], k = y[6], B = y[7], A = E.high, C = E.low, N = v.high, _ = v.low, D = x.high, S = x.low, R = c.high, M = c.low, H = h.high, U = h.low, V = j.high, K = j.low, O = k.high, T = k.low, z = B.high, P = B.low, W = A, ne = C, oe = N, te = _, me = D, Z = S, ue = R, Ee = M, Ae = H, Ce = U, Fe = V, G = K, le = O, fe = T, I = z, ie = P, se = 0; se < 80; se++) {
              var ee, _e, De = i[se];
              if (se < 16)
                _e = De.high = p[g + se * 2] | 0, ee = De.low = p[g + se * 2 + 1] | 0;
              else {
                var Pe = i[se - 15], Ie = Pe.high, Ue = Pe.low, jt = (Ie >>> 1 | Ue << 31) ^ (Ie >>> 8 | Ue << 24) ^ Ie >>> 7, ht = (Ue >>> 1 | Ie << 31) ^ (Ue >>> 8 | Ie << 24) ^ (Ue >>> 7 | Ie << 25), ot = i[se - 2], Ke = ot.high, nt = ot.low, $ = (Ke >>> 19 | nt << 13) ^ (Ke << 3 | nt >>> 29) ^ Ke >>> 6, L = (nt >>> 19 | Ke << 13) ^ (nt << 3 | Ke >>> 29) ^ (nt >>> 6 | Ke << 26), q = i[se - 7], Q = q.high, ae = q.low, pe = i[se - 16], ze = pe.high, st = pe.low;
                ee = ht + ae, _e = jt + Q + (ee >>> 0 < ht >>> 0 ? 1 : 0), ee = ee + L, _e = _e + $ + (ee >>> 0 < L >>> 0 ? 1 : 0), ee = ee + st, _e = _e + ze + (ee >>> 0 < st >>> 0 ? 1 : 0), De.high = _e, De.low = ee;
              }
              var Ge = Ae & Fe ^ ~Ae & le, it = Ce & G ^ ~Ce & fe, qe = W & oe ^ W & me ^ oe & me, Nt = ne & te ^ ne & Z ^ te & Z, Mt = (W >>> 28 | ne << 4) ^ (W << 30 | ne >>> 2) ^ (W << 25 | ne >>> 7), yt = (ne >>> 28 | W << 4) ^ (ne << 30 | W >>> 2) ^ (ne << 25 | W >>> 7), Y = (Ae >>> 14 | Ce << 18) ^ (Ae >>> 18 | Ce << 14) ^ (Ae << 23 | Ce >>> 9), he = (Ce >>> 14 | Ae << 18) ^ (Ce >>> 18 | Ae << 14) ^ (Ce << 23 | Ae >>> 9), xe = w[se], Se = xe.high, Ye = xe.low, Re = ie + he, Me = I + Y + (Re >>> 0 < ie >>> 0 ? 1 : 0), Re = Re + it, Me = Me + Ge + (Re >>> 0 < it >>> 0 ? 1 : 0), Re = Re + Ye, Me = Me + Se + (Re >>> 0 < Ye >>> 0 ? 1 : 0), Re = Re + ee, Me = Me + _e + (Re >>> 0 < ee >>> 0 ? 1 : 0), Ze = yt + Nt, Je = Mt + qe + (Ze >>> 0 < yt >>> 0 ? 1 : 0);
              I = le, ie = fe, le = Fe, fe = G, Fe = Ae, G = Ce, Ce = Ee + Re | 0, Ae = ue + Me + (Ce >>> 0 < Ee >>> 0 ? 1 : 0) | 0, ue = me, Ee = Z, me = oe, Z = te, oe = W, te = ne, ne = Re + Ze | 0, W = Me + Je + (ne >>> 0 < Re >>> 0 ? 1 : 0) | 0;
            }
            C = E.low = C + ne, E.high = A + W + (C >>> 0 < ne >>> 0 ? 1 : 0), _ = v.low = _ + te, v.high = N + oe + (_ >>> 0 < te >>> 0 ? 1 : 0), S = x.low = S + Z, x.high = D + me + (S >>> 0 < Z >>> 0 ? 1 : 0), M = c.low = M + Ee, c.high = R + ue + (M >>> 0 < Ee >>> 0 ? 1 : 0), U = h.low = U + Ce, h.high = H + Ae + (U >>> 0 < Ce >>> 0 ? 1 : 0), K = j.low = K + G, j.high = V + Fe + (K >>> 0 < G >>> 0 ? 1 : 0), T = k.low = T + fe, k.high = O + le + (T >>> 0 < fe >>> 0 ? 1 : 0), P = B.low = P + ie, B.high = z + I + (P >>> 0 < ie >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var p = this._data, g = p.words, y = this._nDataBytes * 8, E = p.sigBytes * 8;
            g[E >>> 5] |= 128 << 24 - E % 32, g[(E + 128 >>> 10 << 5) + 30] = Math.floor(y / 4294967296), g[(E + 128 >>> 10 << 5) + 31] = y, p.sigBytes = g.length * 4, this._process();
            var v = this._hash.toX32();
            return v;
          },
          clone: function() {
            var p = m.clone.call(this);
            return p._hash = this._hash.clone(), p;
          },
          blockSize: 1024 / 32
        });
        s.SHA512 = m._createHelper(f), s.HmacSHA512 = m._createHmacHelper(f);
      }(), n.SHA512;
    });
  }(hn)), hn.exports;
}
var pn = { exports: {} }, fa;
function Yc() {
  return fa || (fa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), qr(), Bo());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.x64, m = o.Word, b = o.WordArray, u = s.algo, d = u.SHA512, a = u.SHA384 = d.extend({
          _doReset: function() {
            this._hash = new b.init([
              new m.init(3418070365, 3238371032),
              new m.init(1654270250, 914150663),
              new m.init(2438529370, 812702999),
              new m.init(355462360, 4144912697),
              new m.init(1731405415, 4290775857),
              new m.init(2394180231, 1750603025),
              new m.init(3675008525, 1694076839),
              new m.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var l = d._doFinalize.call(this);
            return l.sigBytes -= 16, l;
          }
        });
        s.SHA384 = d._createHelper(a), s.HmacSHA384 = d._createHmacHelper(a);
      }(), n.SHA384;
    });
  }(pn)), pn.exports;
}
var mn = { exports: {} }, xa;
function Xc() {
  return xa || (xa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), qr());
    })(ve, function(n) {
      return function(s) {
        var o = n, m = o.lib, b = m.WordArray, u = m.Hasher, d = o.x64, a = d.Word, l = o.algo, w = [], i = [], f = [];
        (function() {
          for (var y = 1, E = 0, v = 0; v < 24; v++) {
            w[y + 5 * E] = (v + 1) * (v + 2) / 2 % 64;
            var x = E % 5, c = (2 * y + 3 * E) % 5;
            y = x, E = c;
          }
          for (var y = 0; y < 5; y++)
            for (var E = 0; E < 5; E++)
              i[y + 5 * E] = E + (2 * y + 3 * E) % 5 * 5;
          for (var h = 1, j = 0; j < 24; j++) {
            for (var k = 0, B = 0, A = 0; A < 7; A++) {
              if (h & 1) {
                var C = (1 << A) - 1;
                C < 32 ? B ^= 1 << C : k ^= 1 << C - 32;
              }
              h & 128 ? h = h << 1 ^ 113 : h <<= 1;
            }
            f[j] = a.create(k, B);
          }
        })();
        var p = [];
        (function() {
          for (var y = 0; y < 25; y++)
            p[y] = a.create();
        })();
        var g = l.SHA3 = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: u.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var y = this._state = [], E = 0; E < 25; E++)
              y[E] = new a.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(y, E) {
            for (var v = this._state, x = this.blockSize / 2, c = 0; c < x; c++) {
              var h = y[E + 2 * c], j = y[E + 2 * c + 1];
              h = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, j = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
              var k = v[c];
              k.high ^= j, k.low ^= h;
            }
            for (var B = 0; B < 24; B++) {
              for (var A = 0; A < 5; A++) {
                for (var C = 0, N = 0, _ = 0; _ < 5; _++) {
                  var k = v[A + 5 * _];
                  C ^= k.high, N ^= k.low;
                }
                var D = p[A];
                D.high = C, D.low = N;
              }
              for (var A = 0; A < 5; A++)
                for (var S = p[(A + 4) % 5], R = p[(A + 1) % 5], M = R.high, H = R.low, C = S.high ^ (M << 1 | H >>> 31), N = S.low ^ (H << 1 | M >>> 31), _ = 0; _ < 5; _++) {
                  var k = v[A + 5 * _];
                  k.high ^= C, k.low ^= N;
                }
              for (var U = 1; U < 25; U++) {
                var C, N, k = v[U], V = k.high, K = k.low, O = w[U];
                O < 32 ? (C = V << O | K >>> 32 - O, N = K << O | V >>> 32 - O) : (C = K << O - 32 | V >>> 64 - O, N = V << O - 32 | K >>> 64 - O);
                var T = p[i[U]];
                T.high = C, T.low = N;
              }
              var z = p[0], P = v[0];
              z.high = P.high, z.low = P.low;
              for (var A = 0; A < 5; A++)
                for (var _ = 0; _ < 5; _++) {
                  var U = A + 5 * _, k = v[U], W = p[U], ne = p[(A + 1) % 5 + 5 * _], oe = p[(A + 2) % 5 + 5 * _];
                  k.high = W.high ^ ~ne.high & oe.high, k.low = W.low ^ ~ne.low & oe.low;
                }
              var k = v[0], te = f[B];
              k.high ^= te.high, k.low ^= te.low;
            }
          },
          _doFinalize: function() {
            var y = this._data, E = y.words;
            this._nDataBytes * 8;
            var v = y.sigBytes * 8, x = this.blockSize * 32;
            E[v >>> 5] |= 1 << 24 - v % 32, E[(s.ceil((v + 1) / x) * x >>> 5) - 1] |= 128, y.sigBytes = E.length * 4, this._process();
            for (var c = this._state, h = this.cfg.outputLength / 8, j = h / 8, k = [], B = 0; B < j; B++) {
              var A = c[B], C = A.high, N = A.low;
              C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, k.push(N), k.push(C);
            }
            return new b.init(k, h);
          },
          clone: function() {
            for (var y = u.clone.call(this), E = y._state = this._state.slice(0), v = 0; v < 25; v++)
              E[v] = E[v].clone();
            return y;
          }
        });
        o.SHA3 = u._createHelper(g), o.HmacSHA3 = u._createHmacHelper(g);
      }(Math), n.SHA3;
    });
  }(mn)), mn.exports;
}
var gn = { exports: {} }, ha;
function Zc() {
  return ha || (ha = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(s) {
        var o = n, m = o.lib, b = m.WordArray, u = m.Hasher, d = o.algo, a = b.create([
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
        ]), l = b.create([
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
        ]), w = b.create([
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
        ]), i = b.create([
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
        ]), f = b.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), p = b.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), g = d.RIPEMD160 = u.extend({
          _doReset: function() {
            this._hash = b.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(j, k) {
            for (var B = 0; B < 16; B++) {
              var A = k + B, C = j[A];
              j[A] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var N = this._hash.words, _ = f.words, D = p.words, S = a.words, R = l.words, M = w.words, H = i.words, U, V, K, O, T, z, P, W, ne, oe;
            z = U = N[0], P = V = N[1], W = K = N[2], ne = O = N[3], oe = T = N[4];
            for (var te, B = 0; B < 80; B += 1)
              te = U + j[k + S[B]] | 0, B < 16 ? te += y(V, K, O) + _[0] : B < 32 ? te += E(V, K, O) + _[1] : B < 48 ? te += v(V, K, O) + _[2] : B < 64 ? te += x(V, K, O) + _[3] : te += c(V, K, O) + _[4], te = te | 0, te = h(te, M[B]), te = te + T | 0, U = T, T = O, O = h(K, 10), K = V, V = te, te = z + j[k + R[B]] | 0, B < 16 ? te += c(P, W, ne) + D[0] : B < 32 ? te += x(P, W, ne) + D[1] : B < 48 ? te += v(P, W, ne) + D[2] : B < 64 ? te += E(P, W, ne) + D[3] : te += y(P, W, ne) + D[4], te = te | 0, te = h(te, H[B]), te = te + oe | 0, z = oe, oe = ne, ne = h(W, 10), W = P, P = te;
            te = N[1] + K + ne | 0, N[1] = N[2] + O + oe | 0, N[2] = N[3] + T + z | 0, N[3] = N[4] + U + P | 0, N[4] = N[0] + V + W | 0, N[0] = te;
          },
          _doFinalize: function() {
            var j = this._data, k = j.words, B = this._nDataBytes * 8, A = j.sigBytes * 8;
            k[A >>> 5] |= 128 << 24 - A % 32, k[(A + 64 >>> 9 << 4) + 14] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, j.sigBytes = (k.length + 1) * 4, this._process();
            for (var C = this._hash, N = C.words, _ = 0; _ < 5; _++) {
              var D = N[_];
              N[_] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
            }
            return C;
          },
          clone: function() {
            var j = u.clone.call(this);
            return j._hash = this._hash.clone(), j;
          }
        });
        function y(j, k, B) {
          return j ^ k ^ B;
        }
        function E(j, k, B) {
          return j & k | ~j & B;
        }
        function v(j, k, B) {
          return (j | ~k) ^ B;
        }
        function x(j, k, B) {
          return j & B | k & ~B;
        }
        function c(j, k, B) {
          return j ^ (k | ~B);
        }
        function h(j, k) {
          return j << k | j >>> 32 - k;
        }
        o.RIPEMD160 = u._createHelper(g), o.HmacRIPEMD160 = u._createHmacHelper(g);
      }(), n.RIPEMD160;
    });
  }(gn)), gn.exports;
}
var yn = { exports: {} }, pa;
function ps() {
  return pa || (pa = 1, function(e, r) {
    (function(n, s) {
      e.exports = s(Ne());
    })(ve, function(n) {
      (function() {
        var s = n, o = s.lib, m = o.Base, b = s.enc, u = b.Utf8, d = s.algo;
        d.HMAC = m.extend({
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
          init: function(a, l) {
            a = this._hasher = new a.init(), typeof l == "string" && (l = u.parse(l));
            var w = a.blockSize, i = w * 4;
            l.sigBytes > i && (l = a.finalize(l)), l.clamp();
            for (var f = this._oKey = l.clone(), p = this._iKey = l.clone(), g = f.words, y = p.words, E = 0; E < w; E++)
              g[E] ^= 1549556828, y[E] ^= 909522486;
            f.sigBytes = p.sigBytes = i, this.reset();
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
            var l = this._hasher, w = l.finalize(a);
            l.reset();
            var i = l.finalize(this._oKey.clone().concat(w));
            return i;
          }
        });
      })();
    });
  }(yn)), yn.exports;
}
var vn = { exports: {} }, ma;
function Jc() {
  return ma || (ma = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), hs(), ps());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.Base, b = o.WordArray, u = s.algo, d = u.SHA256, a = u.HMAC, l = u.PBKDF2 = m.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: m.extend({
            keySize: 128 / 32,
            hasher: d,
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
          init: function(w) {
            this.cfg = this.cfg.extend(w);
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
          compute: function(w, i) {
            for (var f = this.cfg, p = a.create(f.hasher, w), g = b.create(), y = b.create([1]), E = g.words, v = y.words, x = f.keySize, c = f.iterations; E.length < x; ) {
              var h = p.update(i).finalize(y);
              p.reset();
              for (var j = h.words, k = j.length, B = h, A = 1; A < c; A++) {
                B = p.finalize(B), p.reset();
                for (var C = B.words, N = 0; N < k; N++)
                  j[N] ^= C[N];
              }
              g.concat(h), v[0]++;
            }
            return g.sigBytes = x * 4, g;
          }
        });
        s.PBKDF2 = function(w, i, f) {
          return l.create(f).compute(w, i);
        };
      }(), n.PBKDF2;
    });
  }(vn)), vn.exports;
}
var bn = { exports: {} }, ga;
function Et() {
  return ga || (ga = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Do(), ps());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.Base, b = o.WordArray, u = s.algo, d = u.MD5, a = u.EvpKDF = m.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: m.extend({
            keySize: 128 / 32,
            hasher: d,
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
          init: function(l) {
            this.cfg = this.cfg.extend(l);
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
          compute: function(l, w) {
            for (var i, f = this.cfg, p = f.hasher.create(), g = b.create(), y = g.words, E = f.keySize, v = f.iterations; y.length < E; ) {
              i && p.update(i), i = p.update(l).finalize(w), p.reset();
              for (var x = 1; x < v; x++)
                i = p.finalize(i), p.reset();
              g.concat(i);
            }
            return g.sigBytes = E * 4, g;
          }
        });
        s.EvpKDF = function(l, w, i) {
          return a.create(i).compute(l, w);
        };
      }(), n.EvpKDF;
    });
  }(bn)), bn.exports;
}
var wn = { exports: {} }, ya;
function Ve() {
  return ya || (ya = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Et());
    })(ve, function(n) {
      n.lib.Cipher || function(s) {
        var o = n, m = o.lib, b = m.Base, u = m.WordArray, d = m.BufferedBlockAlgorithm, a = o.enc;
        a.Utf8;
        var l = a.Base64, w = o.algo, i = w.EvpKDF, f = m.Cipher = d.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: b.extend(),
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
          createEncryptor: function(C, N) {
            return this.create(this._ENC_XFORM_MODE, C, N);
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
          createDecryptor: function(C, N) {
            return this.create(this._DEC_XFORM_MODE, C, N);
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
          init: function(C, N, _) {
            this.cfg = this.cfg.extend(_), this._xformMode = C, this._key = N, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            d.reset.call(this), this._doReset();
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
          process: function(C) {
            return this._append(C), this._process();
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
          finalize: function(C) {
            C && this._append(C);
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
            function C(N) {
              return typeof N == "string" ? A : j;
            }
            return function(N) {
              return {
                encrypt: function(_, D, S) {
                  return C(D).encrypt(N, _, D, S);
                },
                decrypt: function(_, D, S) {
                  return C(D).decrypt(N, _, D, S);
                }
              };
            };
          }()
        });
        m.StreamCipher = f.extend({
          _doFinalize: function() {
            var C = this._process(!0);
            return C;
          },
          blockSize: 1
        });
        var p = o.mode = {}, g = m.BlockCipherMode = b.extend({
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
          createEncryptor: function(C, N) {
            return this.Encryptor.create(C, N);
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
          createDecryptor: function(C, N) {
            return this.Decryptor.create(C, N);
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
          init: function(C, N) {
            this._cipher = C, this._iv = N;
          }
        }), y = p.CBC = function() {
          var C = g.extend();
          C.Encryptor = C.extend({
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
            processBlock: function(_, D) {
              var S = this._cipher, R = S.blockSize;
              N.call(this, _, D, R), S.encryptBlock(_, D), this._prevBlock = _.slice(D, D + R);
            }
          }), C.Decryptor = C.extend({
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
            processBlock: function(_, D) {
              var S = this._cipher, R = S.blockSize, M = _.slice(D, D + R);
              S.decryptBlock(_, D), N.call(this, _, D, R), this._prevBlock = M;
            }
          });
          function N(_, D, S) {
            var R, M = this._iv;
            M ? (R = M, this._iv = s) : R = this._prevBlock;
            for (var H = 0; H < S; H++)
              _[D + H] ^= R[H];
          }
          return C;
        }(), E = o.pad = {}, v = E.Pkcs7 = {
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
          pad: function(C, N) {
            for (var _ = N * 4, D = _ - C.sigBytes % _, S = D << 24 | D << 16 | D << 8 | D, R = [], M = 0; M < D; M += 4)
              R.push(S);
            var H = u.create(R, D);
            C.concat(H);
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
          unpad: function(C) {
            var N = C.words[C.sigBytes - 1 >>> 2] & 255;
            C.sigBytes -= N;
          }
        };
        m.BlockCipher = f.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: f.cfg.extend({
            mode: y,
            padding: v
          }),
          reset: function() {
            var C;
            f.reset.call(this);
            var N = this.cfg, _ = N.iv, D = N.mode;
            this._xformMode == this._ENC_XFORM_MODE ? C = D.createEncryptor : (C = D.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == C ? this._mode.init(this, _ && _.words) : (this._mode = C.call(D, this, _ && _.words), this._mode.__creator = C);
          },
          _doProcessBlock: function(C, N) {
            this._mode.processBlock(C, N);
          },
          _doFinalize: function() {
            var C, N = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (N.pad(this._data, this.blockSize), C = this._process(!0)) : (C = this._process(!0), N.unpad(C)), C;
          },
          blockSize: 128 / 32
        });
        var x = m.CipherParams = b.extend({
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
          init: function(C) {
            this.mixIn(C);
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
          toString: function(C) {
            return (C || this.formatter).stringify(this);
          }
        }), c = o.format = {}, h = c.OpenSSL = {
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
          stringify: function(C) {
            var N, _ = C.ciphertext, D = C.salt;
            return D ? N = u.create([1398893684, 1701076831]).concat(D).concat(_) : N = _, N.toString(l);
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
          parse: function(C) {
            var N, _ = l.parse(C), D = _.words;
            return D[0] == 1398893684 && D[1] == 1701076831 && (N = u.create(D.slice(2, 4)), D.splice(0, 4), _.sigBytes -= 16), x.create({ ciphertext: _, salt: N });
          }
        }, j = m.SerializableCipher = b.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: b.extend({
            format: h
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
          encrypt: function(C, N, _, D) {
            D = this.cfg.extend(D);
            var S = C.createEncryptor(_, D), R = S.finalize(N), M = S.cfg;
            return x.create({
              ciphertext: R,
              key: _,
              iv: M.iv,
              algorithm: C,
              mode: M.mode,
              padding: M.padding,
              blockSize: C.blockSize,
              formatter: D.format
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
          decrypt: function(C, N, _, D) {
            D = this.cfg.extend(D), N = this._parse(N, D.format);
            var S = C.createDecryptor(_, D).finalize(N.ciphertext);
            return S;
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
          _parse: function(C, N) {
            return typeof C == "string" ? N.parse(C, this) : C;
          }
        }), k = o.kdf = {}, B = k.OpenSSL = {
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
          execute: function(C, N, _, D, S) {
            if (D || (D = u.random(64 / 8)), S)
              var R = i.create({ keySize: N + _, hasher: S }).compute(C, D);
            else
              var R = i.create({ keySize: N + _ }).compute(C, D);
            var M = u.create(R.words.slice(N), _ * 4);
            return R.sigBytes = N * 4, x.create({ key: R, iv: M, salt: D });
          }
        }, A = m.PasswordBasedCipher = j.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: j.cfg.extend({
            kdf: B
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
          encrypt: function(C, N, _, D) {
            D = this.cfg.extend(D);
            var S = D.kdf.execute(_, C.keySize, C.ivSize, D.salt, D.hasher);
            D.iv = S.iv;
            var R = j.encrypt.call(this, C, N, S.key, D);
            return R.mixIn(S), R;
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
          decrypt: function(C, N, _, D) {
            D = this.cfg.extend(D), N = this._parse(N, D.format);
            var S = D.kdf.execute(_, C.keySize, C.ivSize, N.salt, D.hasher);
            D.iv = S.iv;
            var R = j.decrypt.call(this, C, N, S.key, D);
            return R;
          }
        });
      }();
    });
  }(wn)), wn.exports;
}
var Cn = { exports: {} }, va;
function el() {
  return va || (va = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.mode.CFB = function() {
        var s = n.lib.BlockCipherMode.extend();
        s.Encryptor = s.extend({
          processBlock: function(m, b) {
            var u = this._cipher, d = u.blockSize;
            o.call(this, m, b, d, u), this._prevBlock = m.slice(b, b + d);
          }
        }), s.Decryptor = s.extend({
          processBlock: function(m, b) {
            var u = this._cipher, d = u.blockSize, a = m.slice(b, b + d);
            o.call(this, m, b, d, u), this._prevBlock = a;
          }
        });
        function o(m, b, u, d) {
          var a, l = this._iv;
          l ? (a = l.slice(0), this._iv = void 0) : a = this._prevBlock, d.encryptBlock(a, 0);
          for (var w = 0; w < u; w++)
            m[b + w] ^= a[w];
        }
        return s;
      }(), n.mode.CFB;
    });
  }(Cn)), Cn.exports;
}
var En = { exports: {} }, ba;
function tl() {
  return ba || (ba = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.mode.CTR = function() {
        var s = n.lib.BlockCipherMode.extend(), o = s.Encryptor = s.extend({
          processBlock: function(m, b) {
            var u = this._cipher, d = u.blockSize, a = this._iv, l = this._counter;
            a && (l = this._counter = a.slice(0), this._iv = void 0);
            var w = l.slice(0);
            u.encryptBlock(w, 0), l[d - 1] = l[d - 1] + 1 | 0;
            for (var i = 0; i < d; i++)
              m[b + i] ^= w[i];
          }
        });
        return s.Decryptor = o, s;
      }(), n.mode.CTR;
    });
  }(En)), En.exports;
}
var jn = { exports: {} }, wa;
function rl() {
  return wa || (wa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var s = n.lib.BlockCipherMode.extend();
        function o(u) {
          if ((u >> 24 & 255) === 255) {
            var d = u >> 16 & 255, a = u >> 8 & 255, l = u & 255;
            d === 255 ? (d = 0, a === 255 ? (a = 0, l === 255 ? l = 0 : ++l) : ++a) : ++d, u = 0, u += d << 16, u += a << 8, u += l;
          } else
            u += 1 << 24;
          return u;
        }
        function m(u) {
          return (u[0] = o(u[0])) === 0 && (u[1] = o(u[1])), u;
        }
        var b = s.Encryptor = s.extend({
          processBlock: function(u, d) {
            var a = this._cipher, l = a.blockSize, w = this._iv, i = this._counter;
            w && (i = this._counter = w.slice(0), this._iv = void 0), m(i);
            var f = i.slice(0);
            a.encryptBlock(f, 0);
            for (var p = 0; p < l; p++)
              u[d + p] ^= f[p];
          }
        });
        return s.Decryptor = b, s;
      }(), n.mode.CTRGladman;
    });
  }(jn)), jn.exports;
}
var Nn = { exports: {} }, Ca;
function nl() {
  return Ca || (Ca = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.mode.OFB = function() {
        var s = n.lib.BlockCipherMode.extend(), o = s.Encryptor = s.extend({
          processBlock: function(m, b) {
            var u = this._cipher, d = u.blockSize, a = this._iv, l = this._keystream;
            a && (l = this._keystream = a.slice(0), this._iv = void 0), u.encryptBlock(l, 0);
            for (var w = 0; w < d; w++)
              m[b + w] ^= l[w];
          }
        });
        return s.Decryptor = o, s;
      }(), n.mode.OFB;
    });
  }(Nn)), Nn.exports;
}
var kn = { exports: {} }, Ea;
function sl() {
  return Ea || (Ea = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.mode.ECB = function() {
        var s = n.lib.BlockCipherMode.extend();
        return s.Encryptor = s.extend({
          processBlock: function(o, m) {
            this._cipher.encryptBlock(o, m);
          }
        }), s.Decryptor = s.extend({
          processBlock: function(o, m) {
            this._cipher.decryptBlock(o, m);
          }
        }), s;
      }(), n.mode.ECB;
    });
  }(kn)), kn.exports;
}
var An = { exports: {} }, ja;
function al() {
  return ja || (ja = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(s, o) {
          var m = s.sigBytes, b = o * 4, u = b - m % b, d = m + u - 1;
          s.clamp(), s.words[d >>> 2] |= u << 24 - d % 4 * 8, s.sigBytes += u;
        },
        unpad: function(s) {
          var o = s.words[s.sigBytes - 1 >>> 2] & 255;
          s.sigBytes -= o;
        }
      }, n.pad.Ansix923;
    });
  }(An)), An.exports;
}
var _n = { exports: {} }, Na;
function ol() {
  return Na || (Na = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.pad.Iso10126 = {
        pad: function(s, o) {
          var m = o * 4, b = m - s.sigBytes % m;
          s.concat(n.lib.WordArray.random(b - 1)).concat(n.lib.WordArray.create([b << 24], 1));
        },
        unpad: function(s) {
          var o = s.words[s.sigBytes - 1 >>> 2] & 255;
          s.sigBytes -= o;
        }
      }, n.pad.Iso10126;
    });
  }(_n)), _n.exports;
}
var Dn = { exports: {} }, ka;
function il() {
  return ka || (ka = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.pad.Iso97971 = {
        pad: function(s, o) {
          s.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(s, o);
        },
        unpad: function(s) {
          n.pad.ZeroPadding.unpad(s), s.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(Dn)), Dn.exports;
}
var Bn = { exports: {} }, Aa;
function cl() {
  return Aa || (Aa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.pad.ZeroPadding = {
        pad: function(s, o) {
          var m = o * 4;
          s.clamp(), s.sigBytes += m - (s.sigBytes % m || m);
        },
        unpad: function(s) {
          for (var o = s.words, m = s.sigBytes - 1, m = s.sigBytes - 1; m >= 0; m--)
            if (o[m >>> 2] >>> 24 - m % 4 * 8 & 255) {
              s.sigBytes = m + 1;
              break;
            }
        }
      }, n.pad.ZeroPadding;
    });
  }(Bn)), Bn.exports;
}
var Sn = { exports: {} }, _a;
function ll() {
  return _a || (_a = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(Sn)), Sn.exports;
}
var Fn = { exports: {} }, Da;
function dl() {
  return Da || (Da = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Ve());
    })(ve, function(n) {
      return function(s) {
        var o = n, m = o.lib, b = m.CipherParams, u = o.enc, d = u.Hex, a = o.format;
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
          stringify: function(l) {
            return l.ciphertext.toString(d);
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
          parse: function(l) {
            var w = d.parse(l);
            return b.create({ ciphertext: w });
          }
        };
      }(), n.format.Hex;
    });
  }(Fn)), Fn.exports;
}
var Rn = { exports: {} }, Ba;
function ul() {
  return Ba || (Ba = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Pt(), It(), Et(), Ve());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.BlockCipher, b = s.algo, u = [], d = [], a = [], l = [], w = [], i = [], f = [], p = [], g = [], y = [];
        (function() {
          for (var x = [], c = 0; c < 256; c++)
            c < 128 ? x[c] = c << 1 : x[c] = c << 1 ^ 283;
          for (var h = 0, j = 0, c = 0; c < 256; c++) {
            var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4;
            k = k >>> 8 ^ k & 255 ^ 99, u[h] = k, d[k] = h;
            var B = x[h], A = x[B], C = x[A], N = x[k] * 257 ^ k * 16843008;
            a[h] = N << 24 | N >>> 8, l[h] = N << 16 | N >>> 16, w[h] = N << 8 | N >>> 24, i[h] = N;
            var N = C * 16843009 ^ A * 65537 ^ B * 257 ^ h * 16843008;
            f[k] = N << 24 | N >>> 8, p[k] = N << 16 | N >>> 16, g[k] = N << 8 | N >>> 24, y[k] = N, h ? (h = B ^ x[x[x[C ^ B]]], j ^= x[x[j]]) : h = j = 1;
          }
        })();
        var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], v = b.AES = m.extend({
          _doReset: function() {
            var x;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var c = this._keyPriorReset = this._key, h = c.words, j = c.sigBytes / 4, k = this._nRounds = j + 6, B = (k + 1) * 4, A = this._keySchedule = [], C = 0; C < B; C++)
                C < j ? A[C] = h[C] : (x = A[C - 1], C % j ? j > 6 && C % j == 4 && (x = u[x >>> 24] << 24 | u[x >>> 16 & 255] << 16 | u[x >>> 8 & 255] << 8 | u[x & 255]) : (x = x << 8 | x >>> 24, x = u[x >>> 24] << 24 | u[x >>> 16 & 255] << 16 | u[x >>> 8 & 255] << 8 | u[x & 255], x ^= E[C / j | 0] << 24), A[C] = A[C - j] ^ x);
              for (var N = this._invKeySchedule = [], _ = 0; _ < B; _++) {
                var C = B - _;
                if (_ % 4)
                  var x = A[C];
                else
                  var x = A[C - 4];
                _ < 4 || C <= 4 ? N[_] = x : N[_] = f[u[x >>> 24]] ^ p[u[x >>> 16 & 255]] ^ g[u[x >>> 8 & 255]] ^ y[u[x & 255]];
              }
            }
          },
          encryptBlock: function(x, c) {
            this._doCryptBlock(x, c, this._keySchedule, a, l, w, i, u);
          },
          decryptBlock: function(x, c) {
            var h = x[c + 1];
            x[c + 1] = x[c + 3], x[c + 3] = h, this._doCryptBlock(x, c, this._invKeySchedule, f, p, g, y, d);
            var h = x[c + 1];
            x[c + 1] = x[c + 3], x[c + 3] = h;
          },
          _doCryptBlock: function(x, c, h, j, k, B, A, C) {
            for (var N = this._nRounds, _ = x[c] ^ h[0], D = x[c + 1] ^ h[1], S = x[c + 2] ^ h[2], R = x[c + 3] ^ h[3], M = 4, H = 1; H < N; H++) {
              var U = j[_ >>> 24] ^ k[D >>> 16 & 255] ^ B[S >>> 8 & 255] ^ A[R & 255] ^ h[M++], V = j[D >>> 24] ^ k[S >>> 16 & 255] ^ B[R >>> 8 & 255] ^ A[_ & 255] ^ h[M++], K = j[S >>> 24] ^ k[R >>> 16 & 255] ^ B[_ >>> 8 & 255] ^ A[D & 255] ^ h[M++], O = j[R >>> 24] ^ k[_ >>> 16 & 255] ^ B[D >>> 8 & 255] ^ A[S & 255] ^ h[M++];
              _ = U, D = V, S = K, R = O;
            }
            var U = (C[_ >>> 24] << 24 | C[D >>> 16 & 255] << 16 | C[S >>> 8 & 255] << 8 | C[R & 255]) ^ h[M++], V = (C[D >>> 24] << 24 | C[S >>> 16 & 255] << 16 | C[R >>> 8 & 255] << 8 | C[_ & 255]) ^ h[M++], K = (C[S >>> 24] << 24 | C[R >>> 16 & 255] << 16 | C[_ >>> 8 & 255] << 8 | C[D & 255]) ^ h[M++], O = (C[R >>> 24] << 24 | C[_ >>> 16 & 255] << 16 | C[D >>> 8 & 255] << 8 | C[S & 255]) ^ h[M++];
            x[c] = U, x[c + 1] = V, x[c + 2] = K, x[c + 3] = O;
          },
          keySize: 256 / 32
        });
        s.AES = m._createHelper(v);
      }(), n.AES;
    });
  }(Rn)), Rn.exports;
}
var On = { exports: {} }, Sa;
function fl() {
  return Sa || (Sa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Pt(), It(), Et(), Ve());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.WordArray, b = o.BlockCipher, u = s.algo, d = [
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
        ], l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], w = [
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
        ], i = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], f = u.DES = b.extend({
          _doReset: function() {
            for (var E = this._key, v = E.words, x = [], c = 0; c < 56; c++) {
              var h = d[c] - 1;
              x[c] = v[h >>> 5] >>> 31 - h % 32 & 1;
            }
            for (var j = this._subKeys = [], k = 0; k < 16; k++) {
              for (var B = j[k] = [], A = l[k], c = 0; c < 24; c++)
                B[c / 6 | 0] |= x[(a[c] - 1 + A) % 28] << 31 - c % 6, B[4 + (c / 6 | 0)] |= x[28 + (a[c + 24] - 1 + A) % 28] << 31 - c % 6;
              B[0] = B[0] << 1 | B[0] >>> 31;
              for (var c = 1; c < 7; c++)
                B[c] = B[c] >>> (c - 1) * 4 + 3;
              B[7] = B[7] << 5 | B[7] >>> 27;
            }
            for (var C = this._invSubKeys = [], c = 0; c < 16; c++)
              C[c] = j[15 - c];
          },
          encryptBlock: function(E, v) {
            this._doCryptBlock(E, v, this._subKeys);
          },
          decryptBlock: function(E, v) {
            this._doCryptBlock(E, v, this._invSubKeys);
          },
          _doCryptBlock: function(E, v, x) {
            this._lBlock = E[v], this._rBlock = E[v + 1], p.call(this, 4, 252645135), p.call(this, 16, 65535), g.call(this, 2, 858993459), g.call(this, 8, 16711935), p.call(this, 1, 1431655765);
            for (var c = 0; c < 16; c++) {
              for (var h = x[c], j = this._lBlock, k = this._rBlock, B = 0, A = 0; A < 8; A++)
                B |= w[A][((k ^ h[A]) & i[A]) >>> 0];
              this._lBlock = k, this._rBlock = j ^ B;
            }
            var C = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = C, p.call(this, 1, 1431655765), g.call(this, 8, 16711935), g.call(this, 2, 858993459), p.call(this, 16, 65535), p.call(this, 4, 252645135), E[v] = this._lBlock, E[v + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function p(E, v) {
          var x = (this._lBlock >>> E ^ this._rBlock) & v;
          this._rBlock ^= x, this._lBlock ^= x << E;
        }
        function g(E, v) {
          var x = (this._rBlock >>> E ^ this._lBlock) & v;
          this._lBlock ^= x, this._rBlock ^= x << E;
        }
        s.DES = b._createHelper(f);
        var y = u.TripleDES = b.extend({
          _doReset: function() {
            var E = this._key, v = E.words;
            if (v.length !== 2 && v.length !== 4 && v.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var x = v.slice(0, 2), c = v.length < 4 ? v.slice(0, 2) : v.slice(2, 4), h = v.length < 6 ? v.slice(0, 2) : v.slice(4, 6);
            this._des1 = f.createEncryptor(m.create(x)), this._des2 = f.createEncryptor(m.create(c)), this._des3 = f.createEncryptor(m.create(h));
          },
          encryptBlock: function(E, v) {
            this._des1.encryptBlock(E, v), this._des2.decryptBlock(E, v), this._des3.encryptBlock(E, v);
          },
          decryptBlock: function(E, v) {
            this._des3.decryptBlock(E, v), this._des2.encryptBlock(E, v), this._des1.decryptBlock(E, v);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        s.TripleDES = b._createHelper(y);
      }(), n.TripleDES;
    });
  }(On)), On.exports;
}
var Tn = { exports: {} }, Fa;
function xl() {
  return Fa || (Fa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Pt(), It(), Et(), Ve());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.StreamCipher, b = s.algo, u = b.RC4 = m.extend({
          _doReset: function() {
            for (var l = this._key, w = l.words, i = l.sigBytes, f = this._S = [], p = 0; p < 256; p++)
              f[p] = p;
            for (var p = 0, g = 0; p < 256; p++) {
              var y = p % i, E = w[y >>> 2] >>> 24 - y % 4 * 8 & 255;
              g = (g + f[p] + E) % 256;
              var v = f[p];
              f[p] = f[g], f[g] = v;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(l, w) {
            l[w] ^= d.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function d() {
          for (var l = this._S, w = this._i, i = this._j, f = 0, p = 0; p < 4; p++) {
            w = (w + 1) % 256, i = (i + l[w]) % 256;
            var g = l[w];
            l[w] = l[i], l[i] = g, f |= l[(l[w] + l[i]) % 256] << 24 - p * 8;
          }
          return this._i = w, this._j = i, f;
        }
        s.RC4 = m._createHelper(u);
        var a = b.RC4Drop = u.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: u.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            u._doReset.call(this);
            for (var l = this.cfg.drop; l > 0; l--)
              d.call(this);
          }
        });
        s.RC4Drop = m._createHelper(a);
      }(), n.RC4;
    });
  }(Tn)), Tn.exports;
}
var Pn = { exports: {} }, Ra;
function hl() {
  return Ra || (Ra = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Pt(), It(), Et(), Ve());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.StreamCipher, b = s.algo, u = [], d = [], a = [], l = b.Rabbit = m.extend({
          _doReset: function() {
            for (var i = this._key.words, f = this.cfg.iv, p = 0; p < 4; p++)
              i[p] = (i[p] << 8 | i[p] >>> 24) & 16711935 | (i[p] << 24 | i[p] >>> 8) & 4278255360;
            var g = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], y = this._C = [
              i[2] << 16 | i[2] >>> 16,
              i[0] & 4294901760 | i[1] & 65535,
              i[3] << 16 | i[3] >>> 16,
              i[1] & 4294901760 | i[2] & 65535,
              i[0] << 16 | i[0] >>> 16,
              i[2] & 4294901760 | i[3] & 65535,
              i[1] << 16 | i[1] >>> 16,
              i[3] & 4294901760 | i[0] & 65535
            ];
            this._b = 0;
            for (var p = 0; p < 4; p++)
              w.call(this);
            for (var p = 0; p < 8; p++)
              y[p] ^= g[p + 4 & 7];
            if (f) {
              var E = f.words, v = E[0], x = E[1], c = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, h = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, j = c >>> 16 | h & 4294901760, k = h << 16 | c & 65535;
              y[0] ^= c, y[1] ^= j, y[2] ^= h, y[3] ^= k, y[4] ^= c, y[5] ^= j, y[6] ^= h, y[7] ^= k;
              for (var p = 0; p < 4; p++)
                w.call(this);
            }
          },
          _doProcessBlock: function(i, f) {
            var p = this._X;
            w.call(this), u[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, u[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, u[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, u[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var g = 0; g < 4; g++)
              u[g] = (u[g] << 8 | u[g] >>> 24) & 16711935 | (u[g] << 24 | u[g] >>> 8) & 4278255360, i[f + g] ^= u[g];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var i = this._X, f = this._C, p = 0; p < 8; p++)
            d[p] = f[p];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var g = i[p] + f[p], y = g & 65535, E = g >>> 16, v = ((y * y >>> 17) + y * E >>> 15) + E * E, x = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = v ^ x;
          }
          i[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, i[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, i[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, i[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, i[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, i[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, i[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, i[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.Rabbit = m._createHelper(l);
      }(), n.Rabbit;
    });
  }(Pn)), Pn.exports;
}
var In = { exports: {} }, Oa;
function pl() {
  return Oa || (Oa = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Pt(), It(), Et(), Ve());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.StreamCipher, b = s.algo, u = [], d = [], a = [], l = b.RabbitLegacy = m.extend({
          _doReset: function() {
            var i = this._key.words, f = this.cfg.iv, p = this._X = [
              i[0],
              i[3] << 16 | i[2] >>> 16,
              i[1],
              i[0] << 16 | i[3] >>> 16,
              i[2],
              i[1] << 16 | i[0] >>> 16,
              i[3],
              i[2] << 16 | i[1] >>> 16
            ], g = this._C = [
              i[2] << 16 | i[2] >>> 16,
              i[0] & 4294901760 | i[1] & 65535,
              i[3] << 16 | i[3] >>> 16,
              i[1] & 4294901760 | i[2] & 65535,
              i[0] << 16 | i[0] >>> 16,
              i[2] & 4294901760 | i[3] & 65535,
              i[1] << 16 | i[1] >>> 16,
              i[3] & 4294901760 | i[0] & 65535
            ];
            this._b = 0;
            for (var y = 0; y < 4; y++)
              w.call(this);
            for (var y = 0; y < 8; y++)
              g[y] ^= p[y + 4 & 7];
            if (f) {
              var E = f.words, v = E[0], x = E[1], c = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, h = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, j = c >>> 16 | h & 4294901760, k = h << 16 | c & 65535;
              g[0] ^= c, g[1] ^= j, g[2] ^= h, g[3] ^= k, g[4] ^= c, g[5] ^= j, g[6] ^= h, g[7] ^= k;
              for (var y = 0; y < 4; y++)
                w.call(this);
            }
          },
          _doProcessBlock: function(i, f) {
            var p = this._X;
            w.call(this), u[0] = p[0] ^ p[5] >>> 16 ^ p[3] << 16, u[1] = p[2] ^ p[7] >>> 16 ^ p[5] << 16, u[2] = p[4] ^ p[1] >>> 16 ^ p[7] << 16, u[3] = p[6] ^ p[3] >>> 16 ^ p[1] << 16;
            for (var g = 0; g < 4; g++)
              u[g] = (u[g] << 8 | u[g] >>> 24) & 16711935 | (u[g] << 24 | u[g] >>> 8) & 4278255360, i[f + g] ^= u[g];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function w() {
          for (var i = this._X, f = this._C, p = 0; p < 8; p++)
            d[p] = f[p];
          f[0] = f[0] + 1295307597 + this._b | 0, f[1] = f[1] + 3545052371 + (f[0] >>> 0 < d[0] >>> 0 ? 1 : 0) | 0, f[2] = f[2] + 886263092 + (f[1] >>> 0 < d[1] >>> 0 ? 1 : 0) | 0, f[3] = f[3] + 1295307597 + (f[2] >>> 0 < d[2] >>> 0 ? 1 : 0) | 0, f[4] = f[4] + 3545052371 + (f[3] >>> 0 < d[3] >>> 0 ? 1 : 0) | 0, f[5] = f[5] + 886263092 + (f[4] >>> 0 < d[4] >>> 0 ? 1 : 0) | 0, f[6] = f[6] + 1295307597 + (f[5] >>> 0 < d[5] >>> 0 ? 1 : 0) | 0, f[7] = f[7] + 3545052371 + (f[6] >>> 0 < d[6] >>> 0 ? 1 : 0) | 0, this._b = f[7] >>> 0 < d[7] >>> 0 ? 1 : 0;
          for (var p = 0; p < 8; p++) {
            var g = i[p] + f[p], y = g & 65535, E = g >>> 16, v = ((y * y >>> 17) + y * E >>> 15) + E * E, x = ((g & 4294901760) * g | 0) + ((g & 65535) * g | 0);
            a[p] = v ^ x;
          }
          i[0] = a[0] + (a[7] << 16 | a[7] >>> 16) + (a[6] << 16 | a[6] >>> 16) | 0, i[1] = a[1] + (a[0] << 8 | a[0] >>> 24) + a[7] | 0, i[2] = a[2] + (a[1] << 16 | a[1] >>> 16) + (a[0] << 16 | a[0] >>> 16) | 0, i[3] = a[3] + (a[2] << 8 | a[2] >>> 24) + a[1] | 0, i[4] = a[4] + (a[3] << 16 | a[3] >>> 16) + (a[2] << 16 | a[2] >>> 16) | 0, i[5] = a[5] + (a[4] << 8 | a[4] >>> 24) + a[3] | 0, i[6] = a[6] + (a[5] << 16 | a[5] >>> 16) + (a[4] << 16 | a[4] >>> 16) | 0, i[7] = a[7] + (a[6] << 8 | a[6] >>> 24) + a[5] | 0;
        }
        s.RabbitLegacy = m._createHelper(l);
      }(), n.RabbitLegacy;
    });
  }(In)), In.exports;
}
var Mn = { exports: {} }, Ta;
function ml() {
  return Ta || (Ta = 1, function(e, r) {
    (function(n, s, o) {
      e.exports = s(Ne(), Pt(), It(), Et(), Ve());
    })(ve, function(n) {
      return function() {
        var s = n, o = s.lib, m = o.BlockCipher, b = s.algo;
        const u = 16, d = [
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
        var l = {
          pbox: [],
          sbox: []
        };
        function w(y, E) {
          let v = E >> 24 & 255, x = E >> 16 & 255, c = E >> 8 & 255, h = E & 255, j = y.sbox[0][v] + y.sbox[1][x];
          return j = j ^ y.sbox[2][c], j = j + y.sbox[3][h], j;
        }
        function i(y, E, v) {
          let x = E, c = v, h;
          for (let j = 0; j < u; ++j)
            x = x ^ y.pbox[j], c = w(y, x) ^ c, h = x, x = c, c = h;
          return h = x, x = c, c = h, c = c ^ y.pbox[u], x = x ^ y.pbox[u + 1], { left: x, right: c };
        }
        function f(y, E, v) {
          let x = E, c = v, h;
          for (let j = u + 1; j > 1; --j)
            x = x ^ y.pbox[j], c = w(y, x) ^ c, h = x, x = c, c = h;
          return h = x, x = c, c = h, c = c ^ y.pbox[1], x = x ^ y.pbox[0], { left: x, right: c };
        }
        function p(y, E, v) {
          for (let k = 0; k < 4; k++) {
            y.sbox[k] = [];
            for (let B = 0; B < 256; B++)
              y.sbox[k][B] = a[k][B];
          }
          let x = 0;
          for (let k = 0; k < u + 2; k++)
            y.pbox[k] = d[k] ^ E[x], x++, x >= v && (x = 0);
          let c = 0, h = 0, j = 0;
          for (let k = 0; k < u + 2; k += 2)
            j = i(y, c, h), c = j.left, h = j.right, y.pbox[k] = c, y.pbox[k + 1] = h;
          for (let k = 0; k < 4; k++)
            for (let B = 0; B < 256; B += 2)
              j = i(y, c, h), c = j.left, h = j.right, y.sbox[k][B] = c, y.sbox[k][B + 1] = h;
          return !0;
        }
        var g = b.Blowfish = m.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var y = this._keyPriorReset = this._key, E = y.words, v = y.sigBytes / 4;
              p(l, E, v);
            }
          },
          encryptBlock: function(y, E) {
            var v = i(l, y[E], y[E + 1]);
            y[E] = v.left, y[E + 1] = v.right;
          },
          decryptBlock: function(y, E) {
            var v = f(l, y[E], y[E + 1]);
            y[E] = v.left, y[E + 1] = v.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        s.Blowfish = m._createHelper(g);
      }(), n.Blowfish;
    });
  }(Mn)), Mn.exports;
}
(function(e, r) {
  (function(n, s, o) {
    e.exports = s(Ne(), qr(), Qc(), Uc(), Pt(), Kc(), It(), Do(), hs(), Gc(), Bo(), Yc(), Xc(), Zc(), ps(), Jc(), Et(), Ve(), el(), tl(), rl(), nl(), sl(), al(), ol(), il(), cl(), ll(), dl(), ul(), fl(), xl(), hl(), pl(), ml());
  })(ve, function(n) {
    return n;
  });
})(_o);
var gl = _o.exports;
const Cr = /* @__PURE__ */ zo(gl), yl = (e) => {
  const r = "97cc+XE5NTUVhWOrdxrESw==";
  try {
    const n = Cr.AES.decrypt(
      e.replace(/^"(.*)"$/, "$1"),
      Cr.enc.Base64.parse(r),
      { mode: Cr.mode.ECB }
    ).toString(Cr.enc.Utf8);
    return JSON.parse(n);
  } catch {
    return null;
  }
}, Or = qc({
  reducerPath: "InboxService",
  baseQuery: Zi({
    baseUrl: "https://notification.infinitisoftware.net/notificationapi/notification",
    // This allows you to access files in the public folder
    credentials: "include",
    prepareHeaders: (e) => {
      var s;
      const r = yl(localStorage.getItem("user")), n = sessionStorage.getItem("iframe_token");
      if (n && n && e.set("Authorization", `Bearer ${n}`), r) {
        const o = (s = JSON.parse(r)) == null ? void 0 : s.token;
        o && e.set("X-XSRF-TOKEN", o);
      }
      return e;
    }
  }),
  endpoints: () => ({})
}), vl = Or.enhanceEndpoints({
  addTagTypes: ["demo"]
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (e) => ({
    getMailListResponse: e.query({
      // query: () => `/mail-server/?project=${localStorage.getItem("project")}&page=1&page_size=100`, // dynamic project ID
      query: (r) => ({
        url: `/mail-server/?project=${localStorage.getItem("project")}`,
        method: "GET",
        params: r
      })
    }),
    getConvoResponse: e.query({
      query: () => "staticResponse/convoResponse.json"
    }),
    getConversationDetails: e.query({
      query: (r) => `/mail-server/${r.id}/?project=${localStorage.getItem("project")}`
    }),
    getAIReplyResponse: e.mutation({
      query: (r) => ({
        url: "/mail-server/ai-replay/",
        method: "POST",
        body: r
      }),
      invalidatesTags: ["mailer"]
    }),
    getSettings: e.query({
      query: (r) => ({
        url: `/setting/?ordering=-setting&nolimit=Y&project=${localStorage.getItem("project")}`,
        method: "GET"
      })
    }),
    sentMail: e.mutation({
      query: (r) => ({
        url: "/mail-sent/",
        method: "POST",
        body: r
      }),
      invalidatesTags: ["mailer"]
    })
  })
}), {
  useLazyGetMailListResponseQuery: So,
  useLazyGetConvoResponseQuery: Ml,
  useLazyGetConversationDetailsQuery: bl,
  useGetAIReplyResponseMutation: wl,
  useLazyGetSettingsQuery: Cl,
  useSentMailMutation: El
} = vl, jl = () => {
  const [e, r] = J({
    width: window.innerWidth,
    height: window.innerHeight
  });
  return be(() => {
    const n = () => {
      r({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e;
}, wt = (e) => {
  const r = e.toLowerCase();
  return r.includes("get") ? {
    text: "Get Info",
    icon: La,
    color: "bg-blue-100 text-blue-800",
    iconColor: "text-blue-600"
  } : r.includes("approve") || r.includes("success") || r.includes("confirmed") ? {
    text: "Approved",
    icon: za,
    color: "bg-green-100 text-green-800",
    iconColor: "text-green-600"
  } : r.includes("cancel") || r.includes("rejected") || r.includes("failed") ? {
    text: "Cancelled",
    icon: Ka,
    color: "bg-red-100 text-red-800",
    iconColor: "text-red-600"
  } : r.includes("ticket") || r.includes("booking") || r.includes("reservation") ? {
    text: "Ticketing",
    icon: Qa,
    color: "bg-yellow-100 text-yellow-800",
    iconColor: "text-yellow-600"
  } : r.includes("feedback") || r.includes("report") ? {
    text: "Feedback",
    icon: i0,
    color: "bg-orange-100 text-orange-800",
    iconColor: "text-orange-600"
  } : {
    text: "new",
    icon: Er,
    color: "bg-blue-100 text-blue-800",
    iconColor: "text-blue-600"
  };
}, Fo = (e) => {
  if (!e) return "";
  const r = e.match(/^(.*?)\s*<.*?>$/);
  let n = r ? r[1] : e;
  return n = n.replace(/["']/g, "").replace(/\(.*?\)/g, "").replace(/\[.*?\]/g, "").trim(), n;
}, Nl = ({
  emails: e,
  selectedEmailId: r,
  onEmailSelect: n,
  onStarToggle: s,
  onCheckToggle: o,
  checkedEmails: m,
  activeSection: b,
  customLabels: u,
  onEmailLabelsChange: d,
  onCreateLabel: a,
  onBulkMarkAsRead: l,
  onBulkDelete: w,
  onBulkRestore: i,
  onSelectAll: f,
  onUnselectAll: p,
  onUndo: g,
  setEmails: y,
  readStatus: E,
  searchFilter: v
}) => {
  const [x, c] = J(""), [h, j] = J(320), [k, B] = J(!1), [A, C] = J(!1), N = Be(null), _ = Be(0), D = Be(320), [S, R] = So(), [M, H] = J({
    page: 1,
    page_size: 100,
    search: void 0
  }), [U, V] = J(0), K = ko((G) => G.filters);
  xs();
  const [O, T] = J(!1), [z, P] = J("inbox");
  be(() => {
    (K == null ? void 0 : K.search) === "" && (S(M), T(!1));
  }, [M, K]), be(() => {
    K !== void 0 && Object.keys(K).length >= 1 && (K == null ? void 0 : K.search) !== "" && (y && O === !1 && y([]), S(K), T(!0));
  }, [K]), be(() => {
    var G, le, fe, I, ie, se;
    if (R.isSuccess && y) {
      const ee = (fe = (le = (G = R == null ? void 0 : R.data) == null ? void 0 : G.response) == null ? void 0 : le.data) == null ? void 0 : fe.results;
      ee && Array.isArray(ee) && (V(
        ((se = (ie = (I = R == null ? void 0 : R.data) == null ? void 0 : I.response) == null ? void 0 : ie.data) == null ? void 0 : se.count) || 0
      ), y((_e) => {
        const De = new Map(
          _e.map((Ie) => [Ie.mail_id, Ie])
        );
        return ee.map((Ie) => De.has(Ie.mail_id) ? De.get(Ie.mail_id) : {
          ...Ie,
          intentLabel: Ie.labels || "new"
        });
      }));
    }
  }, [R]);
  const W = (G, le) => {
    le.stopPropagation(), n(G, !0);
  };
  be(() => {
    var G, le, fe;
    c(
      ((le = (G = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : G.to) == null ? void 0 : le.length) > 0 ? (fe = e[(e == null ? void 0 : e.length) - 1]) == null ? void 0 : fe.to[0] : void 0
    );
  }, [e]);
  const ne = (G) => {
    const le = new Date(G), I = ((/* @__PURE__ */ new Date()).getTime() - le.getTime()) / (1e3 * 60 * 60);
    return I < 24 ? le.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : I < 168 ? le.toLocaleDateString("en-US", { weekday: "short" }) : le.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, oe = (G) => {
    switch (G) {
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
        if (G.startsWith("custom-label-")) {
          const le = G.replace("custom-label-", ""), fe = u.find((I) => I.id === le);
          return (fe == null ? void 0 : fe.name) || "Unknown Label";
        }
        return "Inbox";
    }
  }, te = (G) => {
    switch (G) {
      case "inbox":
        return a0;
      case "sent":
        return Wa;
      case "drafts":
        return er;
      case "starred":
        return Nr;
      case "snoozed":
        return ts;
      default:
        return kr;
    }
  }, me = (G) => G.labels ? G.labels.map((le) => u.find((fe) => fe.id === le)).filter(Boolean) : [], Z = ({ section: G }) => {
    const le = te(G), fe = oe(G);
    return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center h-96 text-center p-8", children: [
      /* @__PURE__ */ t.jsx("div", { className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ t.jsx(le, { className: "w-10 h-10 text-gray-400" }) }),
      /* @__PURE__ */ t.jsxs("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: [
        "No emails in ",
        fe
      ] }),
      /* @__PURE__ */ t.jsx("p", { className: "text-gray-500 max-w-sm", children: G === "starred" ? "Star important conversations to find them quickly here." : G === "snoozed" ? "Snoozed conversations will appear here when it's time to deal with them." : G.startsWith("custom-label-") || G.startsWith("label-") ? `Conversations with the "${fe}" label will appear here.` : "No conversations available yet." })
    ] });
  }, ue = Array.from(m), Ee = ue.length > 0, Ae = ut(
    (G) => {
      G.preventDefault(), B(!0), _.current = G.clientX, D.current = h, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
    },
    [h]
  ), Ce = ut(
    (G) => {
      if (!k) return;
      G.preventDefault();
      const le = G.clientX - _.current, fe = D.current + le, I = Math.max(240, Math.min(fe, 800));
      requestAnimationFrame(() => {
        j(I);
      });
    },
    [k]
  ), Fe = ut(() => {
    B(!1), document.body.style.cursor = "", document.body.style.userSelect = "";
  }, []);
  return St.useEffect(() => (k && (document.addEventListener("mousemove", Ce, { passive: !1 }), document.addEventListener("mouseup", Fe)), () => {
    document.removeEventListener("mousemove", Ce), document.removeEventListener("mouseup", Fe), document.body.style.cursor = "", document.body.style.userSelect = "";
  }), [k, Ce, Fe]), e.length === 0 ? /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: N,
      style: {
        width: `${h}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: Ae,
            children: /* @__PURE__ */ t.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ t.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: oe(b) }) }),
        /* @__PURE__ */ t.jsx(Z, { section: b })
      ]
    }
  ) : /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: N,
      style: {
        width: `${h}px`,
        minWidth: "240px",
        maxWidth: "800px",
        height: "100%"
      },
      children: [
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: Ae,
            children: /* @__PURE__ */ t.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "p-4 border-b border-gray-200",
            style: { backgroundColor: "#eef7fe" },
            children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => {
                      m.size === e.length ? p() : f();
                    },
                    className: "text-gray-400 hover:text-gray-600 transition-colors",
                    title: m.size === e.length ? "Unselect all" : "Select all",
                    children: m.size === e.length && e.length > 0 ? /* @__PURE__ */ t.jsx(bs, { className: "w-4 h-4 text-blue-600" }) : m.size > 0 ? /* @__PURE__ */ t.jsx(Hr, { className: "w-4 h-4 text-blue-600 fill-blue-100" }) : /* @__PURE__ */ t.jsx(Hr, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { style: { height: "100%" }, children: [
                  /* @__PURE__ */ t.jsxs("h2", { className: "text-lg font-semibold text-gray-900", children: [
                    z === "sent" ? "Sent" : "Conversations",
                    ` (${e.filter((G) => !G.is_read).length}/${E === "all" ? U : e.length})`
                  ] }),
                  /* @__PURE__ */ t.jsx("p", { className: "text-sm mt-1 truncate", children: z === "inbox" && "support@atyourprice.net" })
                ] })
              ] }),
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                Ee && /* @__PURE__ */ t.jsx(
                  S0,
                  {
                    emailIds: ue,
                    currentLabels: [],
                    availableLabels: u,
                    onLabelsChange: (G, le) => {
                      d(G, le), setTimeout(() => {
                        p();
                      }, 100);
                    },
                    onCreateLabel: a
                  }
                ),
                /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => C(!A),
                      className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      title: "More actions",
                      children: /* @__PURE__ */ t.jsx(Va, { className: "w-4 h-4" })
                    }
                  ),
                  A && /* @__PURE__ */ t.jsx("div", { className: "absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "p-1", children: [
                    Ee ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            l(ue, !0), C(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Read"
                        }
                      ),
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            l(ue, !1), C(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors",
                          children: "Mark as Unread"
                        }
                      ),
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            w(ue), C(!1), setTimeout(() => p(), 100);
                          },
                          className: "w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors",
                          children: "Delete"
                        }
                      )
                    ] }) : /* @__PURE__ */ t.jsx("div", { className: "px-3 py-2 text-sm text-gray-500", children: "Select emails to see actions" }),
                    g && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                      /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-100 my-1" }),
                      /* @__PURE__ */ t.jsx(
                        "button",
                        {
                          onClick: () => {
                            g(), C(!1);
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
        /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "divide-y divide-gray-100 overflow-y-auto max-h-[calc(100vh-8rem)] thin-scrollbar",
            onScroll: (G) => {
              const le = G.currentTarget;
              le.scrollHeight - le.scrollTop === le.clientHeight && (O || (H((fe) => ({
                ...fe,
                page: fe.page + 1
              })), T(!1)));
            },
            children: e.map((G) => {
              const le = r === G.message_id, fe = m.has(G.message_id);
              return me(G), /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${le ? "bg-blue-50 border-r-2 border-blue-500" : ""}
                ${G.is_read ? "" : "bg-blue-25"}
              `,
                  onClick: () => n(G),
                  onDoubleClick: (I) => W(G, I),
                  title: "Double-click to open in full-page view",
                  style: {
                    ...le ? { borderRight: "1px solid blue" } : {}
                  },
                  children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-start space-x-3", children: [
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: (I) => {
                          I.stopPropagation(), o(G.message_id);
                        },
                        className: "mt-1 text-gray-400 hover:text-gray-600 transition-colors",
                        children: fe ? /* @__PURE__ */ t.jsx(bs, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ t.jsx(Hr, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: (I) => {
                          I.stopPropagation(), s(G.message_id);
                        },
                        className: "mt-1 transition-colors",
                        children: /* @__PURE__ */ t.jsx(
                          Nr,
                          {
                            className: `w-4 h-4 ${G.is_starred ? "text-yellow-500 fill-yellow-500" : "text-gray-400 hover:text-yellow-500"}`
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2 min-w-0", children: /* @__PURE__ */ t.jsx(
                          "p",
                          {
                            className: `
                        text-sm mt-1
                        ${G.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                            children: Fo(G.from_address)
                          }
                        ) }),
                        /* @__PURE__ */ t.jsx("p", { className: "text-xs text-gray-500 ml-2 flex-shrink-0", children: ne(G.created_at) })
                      ] }),
                      /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2 min-w-0", children: /* @__PURE__ */ t.jsx(
                        "p",
                        {
                          className: `
                        text-sm mt-1
                        ${G.is_read ? "font-semibold text-gray-400" : "font-bold text-black"}
                        line-clamp-2
                      `,
                          children: G.subject
                        }
                      ) }) }),
                      /* @__PURE__ */ t.jsx(
                        "p",
                        {
                          className: `
                    text-sm mt-1 truncate
                    ${G.is_read ? "text-gray-400" : "text-gray-700 font-medium"}
                  `,
                          children: G.snippet
                        }
                      ),
                      (G == null ? void 0 : G.intent) && /* @__PURE__ */ t.jsxs(
                        "div",
                        {
                          className: `
                  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 mt-[5px] 
                  ${wt(G.intent).color}
                `,
                          children: [
                            St.createElement(wt(G.intent).icon, {
                              className: `w-3 h-3 mr-1 ${wt(G.intent).iconColor}`
                            }),
                            wt(G.intent).text
                          ]
                        }
                      )
                    ] })
                  ] })
                },
                G.message_id
              );
            })
          }
        )
      ]
    }
  );
}, kl = ({
  isOpen: e,
  onClose: r,
  triggerRef: n,
  entitiesInfo: s
}) => {
  console.log("Entities Info:", s);
  const o = Be(null), [m, b] = J({ top: 0, left: 0 });
  if (be(() => {
    if (e && n.current && o.current) {
      const d = n.current.getBoundingClientRect(), a = o.current.getBoundingClientRect(), l = d.bottom + 8, w = d.left, i = window.innerWidth - a.width - 16, f = Math.min(w, i);
      b({ top: l, left: f });
    }
  }, [e, n]), be(() => {
    const d = (l) => {
      o.current && !o.current.contains(l.target) && n.current && !n.current.contains(l.target) && r();
    }, a = (l) => {
      l.key === "Escape" && r();
    };
    if (e)
      return document.addEventListener("mousedown", d), document.addEventListener("keydown", a), () => {
        document.removeEventListener("mousedown", d), document.removeEventListener("keydown", a);
      };
  }, [e, r, n]), !e) return null;
  const u = (d) => {
    switch (d.toLowerCase()) {
      case "ticket":
      case "pnr":
        return /* @__PURE__ */ t.jsx(Qa, { className: "w-4 h-4 text-green-600" });
      case "travel":
      case "airline":
      case "train":
        return /* @__PURE__ */ t.jsx(h0, { className: "w-4 h-4 text-blue-600" });
      case "date":
        return /* @__PURE__ */ t.jsx(er, { className: "w-4 h-4 text-purple-600" });
      case "status":
        return /* @__PURE__ */ t.jsx(za, { className: "w-4 h-4 text-green-600" });
      case "cancellation":
        return /* @__PURE__ */ t.jsx(Ka, { className: "w-4 h-4 text-red-600" });
      default:
        return /* @__PURE__ */ t.jsx(er, { className: "w-4 h-4 text-gray-500" });
    }
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 z-40" }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: o,
        className: "fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80",
        style: {
          top: `${m.top}px`,
          left: `${m.left}px`
        },
        children: [
          /* @__PURE__ */ t.jsx("div", { className: "absolute -top-2 left-9 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45" }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Observation Overview" }),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: r,
                className: "text-gray-400 hover:text-gray-600 transition-colors",
                children: /* @__PURE__ */ t.jsx(tt, { className: "w-4 h-4" })
              }
            )
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "space-y-4", children: s && Object.entries(s).map(([d, a]) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
              u(d),
              /* @__PURE__ */ t.jsxs("span", { className: "text-sm font-medium text-gray-700 capitalize", children: [
                d.replace(/_/g, " "),
                ":"
              ] })
            ] }),
            /* @__PURE__ */ t.jsx("span", { title: String(a), className: "text-sm text-gray-900 font-mono truncate max-w-[150px] text-right", children: String(a) })
          ] }, d)) })
        ]
      }
    )
  ] });
}, Al = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    fill: "none",
    children: [
      /* @__PURE__ */ t.jsx("g", { "clip-path": "url(#clip0_116_182)", children: /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M0 16.26C0 17.3 0.366667 18.18 1.1 18.9C1.83333 19.62 2.72 19.9867 3.76 20H16.26C17.2867 20 18.1667 19.6334 18.9 18.9C19.6333 18.1667 20 17.2867 20 16.26V12.5L15 7.50002H13.76V10H13.96L17.5 13.76H13.76V15C13.76 15.3467 13.6333 15.6467 13.38 15.9C13.1267 16.1534 12.8333 16.2734 12.5 16.26H7.5C7.15333 16.26 6.86 16.14 6.62 15.9C6.38 15.66 6.26 15.36 6.26 15V13.76H2.5L6.04 10H6.26V7.50002H5L0 12.5L0 16.26ZM6.28 3.54002C6.24 3.79336 6.26 4.02669 6.34 4.24002C6.42 4.45336 6.57333 4.63336 6.8 4.78002C7.02667 4.92669 7.26 5.00002 7.5 5.00002H8.76V8.76002C8.76 9.06669 8.84 9.32669 9 9.54002C9.16 9.75336 9.37333 9.88002 9.64 9.92002C9.90667 9.96002 10.1467 9.96002 10.36 9.92002C10.5733 9.88002 10.7867 9.75336 11 9.54002C11.2133 9.32669 11.3 9.06669 11.26 8.76002V5.00002H12.5C12.78 5.00002 13.02 4.92669 13.22 4.78002C13.42 4.63336 13.5667 4.44669 13.66 4.22002C13.7533 3.99336 13.7733 3.76002 13.72 3.52002C13.6667 3.28002 13.5533 3.06002 13.38 2.86002L10.88 0.360023C10.6267 0.10669 10.3333 -0.0133099 10 2.34376e-05C9.66667 0.0133568 9.37333 0.133357 9.12 0.360023L6.62 2.86002C6.42 3.06002 6.30667 3.28669 6.28 3.54002Z",
          fill: "green"
        }
      ) }),
      /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsx("clipPath", { id: "clip0_116_182", children: /* @__PURE__ */ t.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
    ]
  }
), _l = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    fill: "none",
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M12.8633 2L10.8633 4V0H9.13672V4L7.13672 2L5.90625 3.23047L10 7.32422L14.0937 3.23047L12.8633 2Z",
          fill: "blue"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M10 13.7539L17.7852 8.92188C17.5391 8.79687 17.2617 8.70703 16.9531 8.70703H3.04688C2.73828 8.70703 2.46094 8.80078 2.21484 8.92188L10 13.7539Z",
          fill: "blue"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M10.4609 15.5078C10.3086 15.6016 10.1523 15.6328 10 15.6328C9.84766 15.6328 9.69141 15.6016 9.53906 15.5078L1.29297 10.3984V10.4297V18.2461C1.29297 19.1992 2.0625 20 3.04687 20H16.9531C17.9062 20 18.707 19.2305 18.707 18.2461V10.4297V10.3984L10.4609 15.5078Z",
          fill: "blue"
        }
      )
    ]
  }
), Pa = ({
  email: e,
  onClose: r,
  onBack: n,
  isFullPage: s = !1,
  aiReplyState: o,
  onGenerateAiReply: m,
  onAiReplyStateChange: b,
  customLabels: u,
  onEmailLabelsChange: d,
  onCreateLabel: a,
  onDeleteEmail: l,
  onRestoreEmail: w,
  activeSection: i,
  onStarToggle: f
}) => {
  var Ge, it, qe, Nt, Mt, yt;
  const { width: p } = jl(), [g, y] = J(""), [E, v] = J(!1), [x, c] = J(""), [h, j] = J(!1), [k, B] = J(void 0), [A, C] = J(
    /* @__PURE__ */ new Set()
  ), [N, _] = J(!1), [D, S] = J(!1), [R, M] = J(!1), [H, U] = J([]), V = Be(null), K = Be(null), O = Be(null), T = Be(null), z = Be(null), [P, W] = J(), [ne, oe] = bl(), [te, me] = wl(), [Z, ue] = J([]), Ee = Be(null), [Ae, Ce] = J(), [Fe, G] = Cl(), [le, fe] = El(), [I, ie] = J("");
  be(() => {
    c("");
  }, [e]), be(() => {
    Fe({});
  }, []), be(() => {
    var Y, he, xe, Se;
    G != null && G.isSuccess && (console.log("Settings fetched successfully", (he = (Y = G == null ? void 0 : G.data) == null ? void 0 : Y.response) == null ? void 0 : he.data), Ce((Se = (xe = G == null ? void 0 : G.data) == null ? void 0 : xe.response) == null ? void 0 : Se.data));
  }, [G]), be(() => {
    o.showAiReply && V.current && setTimeout(() => {
      var Y;
      (Y = V.current) == null || Y.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [o.showAiReply]), be(() => {
    h && g === o.generatedReply && K.current && setTimeout(() => {
      var Y;
      (Y = K.current) == null || Y.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 100);
  }, [h, g, o.generatedReply]), be(() => {
    const Y = (he) => {
      Ee.current && !Ee.current.contains(he.target) && M(!1);
    };
    if (R)
      return document.addEventListener("mousedown", Y), () => document.removeEventListener("mousedown", Y);
  }, [R]), be(() => {
    if (e != null && e.mail_id) {
      let Y = e == null ? void 0 : e.mail_id;
      ne({ id: Y });
    }
  }, [e == null ? void 0 : e.mail_id]);
  const se = (Y) => Y.reduce((he, xe) => xe.entities && typeof xe.entities == "object" ? { ...he, ...xe.entities } : he, {});
  if (be(() => {
    var Y, he, xe;
    if (oe != null && oe.isSuccess) {
      const Se = (xe = (he = (Y = oe == null ? void 0 : oe.data) == null ? void 0 : Y.response) == null ? void 0 : he.data) == null ? void 0 : xe.conversation;
      Se && (ue(Se), U(se(Se)));
    }
  }, [oe]), !e)
    return /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ t.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ t.jsx("div", { className: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ t.jsx("span", { className: "text-4xl text-gray-400", children: "📧" }) }),
      /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Select an email" }),
      /* @__PURE__ */ t.jsx("p", { className: "text-gray-500", children: "Choose an email from the list to view the conversation" })
    ] }) });
  const ee = (Y) => new Date(Y).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), _e = () => {
    var Y, he, xe, Se, Ye, Re, Me, Ze, Je, kt, Lt, F, X, re, de, je, we, ge, ye, Le, Oe, Te, Xe;
    if (g.trim()) {
      let at = "MANUAL";
      g === o.generatedReply && o.generatedReply ? at = "AI" : o.generatedReply && g.includes(o.generatedReply) && (at = "AI_EDITED"), console.log("Reply sent with type:", at);
      const pt = (Y = Z[Z.length - 1]) == null ? void 0 : Y.from_address, He = Ae == null ? void 0 : Ae.find(
        (To) => To.from_email_id === pt
      );
      He == null || He.setting_id, console.log(
        g,
        Z[Z.length - 1],
        {
          mail_id: (he = Z[Z.length - 1]) == null ? void 0 : he.mail_id,
          thread_id: (xe = Z[Z.length - 1]) == null ? void 0 : xe.thread_id,
          folder: (Se = Z[Z.length - 1]) == null ? void 0 : Se.folder,
          subject: (Ye = Z[Z.length - 1]) == null ? void 0 : Ye.subject,
          to: [(Re = Z[Z.length - 1]) == null ? void 0 : Re.from_address],
          cc: (Me = Z[Z.length - 1]) == null ? void 0 : Me.cc,
          bcc: (Ze = Z[Z.length - 1]) == null ? void 0 : Ze.bcc,
          body_plain: (Je = Z[Z.length - 1]) == null ? void 0 : Je.body_plain,
          body_html: (kt = Z[Z.length - 1]) == null ? void 0 : kt.body_html,
          reply_type: at,
          edited: !1,
          labels: ((Lt = Z[Z.length - 1]) == null ? void 0 : Lt.labels) || [],
          ai_response: {
            intent: ((F = Z[Z.length - 1]) == null ? void 0 : F.intent) || "reply",
            entities: ((X = Z[Z.length - 1]) == null ? void 0 : X.entities) || {},
            reply: g
          },
          setting_id: 4
        }
      );
      const Vt = `<!DOCTYPE html>
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

</body></head>`.replace("$[[dynamic_content]]", g).replace("$<<signature>>", sessionStorage.getItem("defaultSignature") || ""), Oo = {
        mail_id: (re = Z[Z.length - 1]) == null ? void 0 : re.mail_id,
        message_id: (de = Z[Z.length - 1]) == null ? void 0 : de.message_id,
        thread_id: (je = Z[Z.length - 1]) == null ? void 0 : je.thread_id,
        folder: (we = Z[Z.length - 1]) == null ? void 0 : we.folder,
        subject: (ge = Z[Z.length - 1]) == null ? void 0 : ge.subject,
        // to: [msgData[msgData.length - 1]?.from_address],
        to: ["madhivanan.e@infinitisoftware.net"],
        cc: (ye = Z[Z.length - 1]) == null ? void 0 : ye.cc,
        bcc: (Le = Z[Z.length - 1]) == null ? void 0 : Le.bcc,
        body_plain: g,
        body_html: Vt,
        reply_type: at,
        edited: !1,
        labels: ((Oe = Z[Z.length - 1]) == null ? void 0 : Oe.labels) || [],
        ai_response: {
          intent: ((Te = Z[Z.length - 1]) == null ? void 0 : Te.intent) || "reply",
          entities: ((Xe = Z[Z.length - 1]) == null ? void 0 : Xe.entities) || {},
          reply: g + `
` + Vt
        },
        setting_id: 30
      };
      le(Oo), j(!1), y(g + `
` + Vt), b({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, De = (Y) => {
    var Se;
    const he = pe[pe.length - 1];
    return he.to.length + (((Se = he.cc) == null ? void 0 : Se.length) || 0) > 1 || he.cc && he.cc.length > 0;
  }, Pe = async () => {
    var he;
    let Y = {
      document_id: (he = Z[Z.length - 1]) == null ? void 0 : he.mail_id,
      prompt: ""
    };
    try {
      const xe = await te(Y).unwrap(), Se = xe == null ? void 0 : xe.response.data.reply;
      U((xe == null ? void 0 : xe.response.data.entities) || []), ie((xe == null ? void 0 : xe.response.data.intent) || ""), console.log("AI Reply generated:", Se), y(Se), Se && c(Se);
    } catch (xe) {
      console.error("AI Reply fetch failed", xe);
    }
  }, Ie = () => {
    _(!N);
  }, Ue = () => {
    j(!0), v(!0), b({ ...o, showAiReply: !1 });
  }, jt = () => {
    const Y = pe[pe.length - 1], he = /* @__PURE__ */ new Set([
      ...Y.to,
      ...Y.cc || []
    ]);
    `${Array.from(
      he
    ).join(", ")}${o.generatedReply}`, j(!0), v(!0), b({ ...o, showAiReply: !1 });
  }, ht = () => {
    if (B("reply-all"), v(!0), e) {
      const Y = pe[pe.length - 1], he = /* @__PURE__ */ new Set([
        Y.to,
        ...Y.to,
        ...Y.cc || []
      ]);
      `${Array.from(
        he
      ).join(", ")}`, y(o.generatedReply), j(!0), b({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, ot = () => {
    if (Z) {
      const Y = pe[pe.length - 1];
      `${Y.from_address}${ee(Y.create_to)}${Y.subject}${Y.to.join(", ")}`, Y.cc && `${Y.cc.join(", ")}`, `${Y.body_plain}`, y(o.generatedReply), j(!0), b({
        ...o,
        showAiReply: !1,
        generatedReply: "",
        replyType: void 0
      });
    }
  }, Ke = () => {
    if (!e) return;
    const Y = pe[pe.length - 1], he = Y.body_plain, xe = `Meeting: ${e.subject}`, Se = `Original email from: ${Y.from_address}

${he}`, Ye = /(\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2})/, Re = /(\d{1,2}:\d{2}\s*(AM|PM|am|pm))/, Me = he.match(Ye), Ze = he.match(Re);
    let Je = /* @__PURE__ */ new Date();
    if (Me && (Je = new Date(Me[0])), Ze) {
      const de = Ze[0], [je, we] = de.split(/\s+/), [ge, ye] = je.split(":").map(Number);
      let Le = ge;
      (we == null ? void 0 : we.toLowerCase()) === "pm" && ge !== 12 ? Le += 12 : (we == null ? void 0 : we.toLowerCase()) === "am" && ge === 12 && (Le = 0), Je.setHours(Le, ye, 0, 0);
    }
    const kt = (de) => de.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z", Lt = kt(Je), F = new Date(Je.getTime() + 60 * 60 * 1e3), X = kt(F), re = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(xe)}&dates=${Lt}/${X}&details=${encodeURIComponent(Se)}&location=${encodeURIComponent("To be determined")}`;
    window.open(re, "_blank"), M(!1);
  }, nt = () => {
    window.print(), M(!1);
  }, $ = () => {
    e && (console.log("Reporting spam for email:", e.message_id), window.confirm(
      `Report "${e.subject}" as spam? This conversation will be moved to spam folder.`
    ) && (alert("Email reported as spam successfully"), r()), M(!1));
  }, L = () => {
    console.log("Block sender:", e == null ? void 0 : e.senderEmail), M(!1);
  }, q = (Y) => {
    C((he) => {
      const xe = new Set(he);
      return xe.has(Y) ? xe.delete(Y) : xe.add(Y), xe;
    });
  }, Q = (Y) => Y.customLabels ? Y.customLabels.map((he) => u.find((xe) => xe.id === he)).filter(Boolean) : [], ae = ({
    replyType: Y
  }) => {
    if (!Y) return null;
    const he = {
      manual: {
        icon: b0,
        label: "Replied Manually",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200"
      },
      ai: {
        icon: Xo,
        label: "Replied by AI",
        bgColor: "bg-purple-50",
        textColor: "text-purple-700",
        borderColor: "border-purple-200"
      },
      "partial-ai": {
        icon: v0,
        label: "Partial AI Reply",
        bgColor: "bg-orange-50",
        textColor: "text-orange-700",
        borderColor: "border-orange-200"
      }
    }, {
      icon: xe,
      label: Se,
      bgColor: Ye,
      textColor: Re,
      borderColor: Me
    } = he[Y];
    return /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: `inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${Ye} ${Re} ${Me}`,
        children: [
          /* @__PURE__ */ t.jsx(xe, { className: "w-3 h-3 mr-1" }),
          Se
        ]
      }
    );
  }, pe = [...Z].sort(
    (Y, he) => new Date(Y.created_at).getTime() - new Date(he.created_at).getTime()
  ), ze = Q(Z), st = () => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ t.jsx(Cs, { className: "w-4 h-4 animate-spin" }),
    /* @__PURE__ */ t.jsx("span", { children: "Generating..." })
  ] });
  return /* @__PURE__ */ t.jsx(t.Fragment, { children: oe != null && oe.isLoading || oe != null && oe.isFetching ? /* @__PURE__ */ t.jsx(D0, {}) : /* @__PURE__ */ t.jsxs("div", { ref: O, className: "flex-1 flex flex-col bg-white", children: [
    /* @__PURE__ */ t.jsx("div", { className: "border-b border-gray-200 p-6", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0 flex items-center space-x-3", children: [
        s && n && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: n,
            className: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors",
            title: "Back to email list",
            children: /* @__PURE__ */ t.jsx(Ko, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ t.jsx(
            "h2",
            {
              className: "text-2xl font-semibold text-gray-900 truncate",
              style: { whiteSpace: "unset" },
              children: e.subject
            }
          ),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [
            /* @__PURE__ */ t.jsxs("p", { className: "text-sm text-gray-500", children: [
              Z.length,
              " message",
              Z.length !== 1 ? "s" : "",
              " • Conversation"
            ] }),
            ze.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              ze.slice(0, 3).map((Y) => /* @__PURE__ */ t.jsxs(
                "span",
                {
                  className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                  style: {
                    backgroundColor: `${Y.color}15`,
                    color: Y.color,
                    border: `1px solid ${Y.color}30`
                  },
                  children: [
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mr-1",
                        style: { backgroundColor: Y.color }
                      }
                    ),
                    Y.name
                  ]
                },
                Y.id
              )),
              ze.length > 3 && /* @__PURE__ */ t.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600", children: [
                "+",
                ze.length - 3,
                " more"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 ml-4", children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            ref: T,
            onClick: () => {
              S(!D), W(T);
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(er, { className: "w-4 h-4 mr-1" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-600 hover:text-gray-800", children: "Entities" })
            ]
          }
        ),
        i === "bin" && w ? /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => w(e.message_id),
            className: "p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors",
            title: "Restore conversation",
            children: /* @__PURE__ */ t.jsx($n, { className: "w-4 h-4" })
          }
        ) : l && /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: () => l(e.message_id),
            className: "p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
            title: "Delete conversation",
            children: /* @__PURE__ */ t.jsx(Tr, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ t.jsxs("div", { className: "relative", ref: Ee, children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => M(!R),
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ t.jsx(Va, { className: "w-5 h-5 text-gray-600" })
            }
          ),
          R && /* @__PURE__ */ t.jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10", children: [
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: () => {
                  f && f(e.message_id), M(!1);
                },
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    Nr,
                    {
                      className: `w-4 h-4 ${e.isStarred ? "fill-yellow-400 text-yellow-400" : ""}`
                    }
                  ),
                  /* @__PURE__ */ t.jsx("span", { children: e.isStarred ? "Remove star" : "Add star" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: Ke,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
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
                  /* @__PURE__ */ t.jsx("span", { children: "Add to calendar" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: nt,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
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
                  /* @__PURE__ */ t.jsx("span", { children: "Print" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-100 my-1" }),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: $,
                className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
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
                  /* @__PURE__ */ t.jsx("span", { children: "Report spam" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: L,
                className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2",
                children: [
                  /* @__PURE__ */ t.jsx(
                    "svg",
                    {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ t.jsx(
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
                  /* @__PURE__ */ t.jsxs("span", { children: [
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
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ t.jsx("div", { style: { width: "98%", margin: "10px auto 0 auto" }, children: pe.map((Y, he) => {
      var Re, Me;
      const xe = A.has(Y.message_id) || he === pe.length - 1 && !A.has(`collapsed-${Y.message_id}`), Se = he === pe.length - 1, Ye = Y.from_address === e.from_address;
      return /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "last:border-b-0",
          style: { marginBottom: 10 },
          children: /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: `p-6 ${Ye ? "bg-blue-50" : "bg-gray-50"}`,
              style: {
                marginBottom: 10,
                // border: "2px solid #abb1ae",
                borderRadius: 5,
                boxShadow: "0 1px 3px #abb1ae"
              },
              children: [
                /* @__PURE__ */ t.jsxs(
                  "div",
                  {
                    className: "cursor-pointer hover:bg-gray-50 -m-2 p-2 rounded-lg",
                    onClick: () => {
                      Se ? C(
                        xe ? (Ze) => /* @__PURE__ */ new Set([
                          ...Ze,
                          `collapsed-${Y.message_id}`
                        ]) : (Ze) => {
                          const Je = new Set(Ze);
                          return Je.delete(
                            `collapsed-${Y.message_id}`
                          ), Je;
                        }
                      ) : q(Y.message_id);
                    },
                    children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
                          /* @__PURE__ */ t.jsx(
                            "div",
                            {
                              className: `w-10 h-10 ${Ye ? "bg-gradient-to-br from-green-500 to-green-600" : "bg-gradient-to-br from-blue-500 to-purple-600"} rounded-full flex items-center justify-center flex-shrink-0`,
                              children: /* @__PURE__ */ t.jsx("span", { className: "text-white font-semibold text-sm", children: (Re = Fo(Y == null ? void 0 : Y.from_address)) == null ? void 0 : Re.charAt(0).toUpperCase() })
                            }
                          ),
                          /* @__PURE__ */ t.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                              /* @__PURE__ */ t.jsx("p", { className: "font-semibold text-gray-900", children: Y.from_address }),
                              /* @__PURE__ */ t.jsx(ae, { replyType: Y.replyType }),
                              Ye ? /* @__PURE__ */ t.jsx(Al, {}) : /* @__PURE__ */ t.jsx(_l, {})
                            ] }),
                            /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500", children: ee(Y.created_at) })
                          ] })
                        ] }),
                        /* @__PURE__ */ t.jsx("button", { className: "text-gray-400 hover:text-gray-600 mt-1", children: xe ? /* @__PURE__ */ t.jsx(Zo, { className: "w-6 h-6" }) : /* @__PURE__ */ t.jsx($a, { className: "w-6 h-6" }) })
                      ] }),
                      xe && (Y.cc.length > 0 || Y.bcc.length > 0) && /* @__PURE__ */ t.jsx("div", { className: "mb-4 bg-gray-50 rounded-lg p-4 space-y-2", children: /* @__PURE__ */ t.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                        Y.cc && Y.cc.length > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                          /* @__PURE__ */ t.jsx("span", { className: "font-medium text-gray-700", children: "CC:" }),
                          /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 mt-1", children: Y.cc.join(", ") })
                        ] }),
                        Y.bcc && Y.bcc.length > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                          /* @__PURE__ */ t.jsx("span", { className: "font-medium text-gray-700", children: "BCC:" }),
                          /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 mt-1", children: Y.bcc.join(", ") })
                        ] })
                      ] }) })
                    ]
                  }
                ),
                xe && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
                  "div",
                  {
                    className: "prose max-w-none mb-6",
                    style: {
                      background: "#f9fafb",
                      marginTop: 10,
                      borderRadius: 5,
                      padding: 10
                    },
                    children: /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "text-gray-800 leading-relaxed whitespace-pre-wrap",
                        style: { wordBreak: "break-word" },
                        dangerouslySetInnerHTML: {
                          __html: (Y == null ? void 0 : Y.body_html) || (Y == null ? void 0 : Y.body_plain) || (Y == null ? void 0 : Y.snippet)
                        }
                      }
                    )
                  }
                ) }),
                !xe && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("div", { className: "text-sm text-gray-500 truncate mb-3", children: [
                  (Me = Y == null ? void 0 : Y.body_plain) == null ? void 0 : Me.substring(0, 100),
                  "..."
                ] }) })
              ]
            }
          )
        },
        Y.message_id
      );
    }) }) }),
    (x === "" || x.length === 0) && !h && /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ t.jsx("div", { className: "mx-auto", children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2 w-full", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => {
              B("AI"), j(!h), v(!0);
            },
            className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(js, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: "Reply" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: ht,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(Es, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: "Reply All" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: ot,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(r0, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: "Forward" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: Pe,
          disabled: me == null ? void 0 : me.isLoading,
          className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
          children: me != null && me.isLoading ? /* @__PURE__ */ t.jsx(st, {}) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsx(qt, { className: "w-4 h-4" }),
            /* @__PURE__ */ t.jsx("span", { children: "Reply with AI" })
          ] })
        }
      ) })
    ] }) }) }),
    x.length > 0 && /* @__PURE__ */ t.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        style: {
          width: p > 1580 ? "100%" : p < 1580 && p > 1280 ? "85%" : "65%"
        },
        children: /* @__PURE__ */ t.jsxs(
          "div",
          {
            ref: V,
            className: `bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300 transition-all ${N ? "fixed inset-4 z-50 bg-white shadow-2xl flex flex-col" : ""}`,
            children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ t.jsx(qt, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ t.jsxs("span", { className: "font-semibold text-gray-900", children: [
                    "AI Generated",
                    " ",
                    De() ? "Reply All" : "Reply"
                  ] })
                ] }),
                /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ t.jsxs(
                    "div",
                    {
                      className: `
                                    inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                                    ${wt(I).color}
                                  `,
                      children: [
                        St.createElement(
                          wt(I).icon,
                          {
                            className: `w-3 h-3 mr-1 ${wt(I).iconColor}`
                          }
                        ),
                        wt(I).text
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsxs(
                    "button",
                    {
                      ref: z,
                      onClick: () => {
                        S(!D), W(z);
                      },
                      className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
                      children: [
                        /* @__PURE__ */ t.jsx(er, { className: "w-4 h-4 mr-1" }),
                        /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-600 hover:text-gray-800", children: "Entities" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: Ie,
                      className: "text-purple-600 hover:text-purple-700 p-1",
                      title: N ? "Collapse" : "Expand",
                      children: N ? /* @__PURE__ */ t.jsx(c0, { className: "w-4 h-4" }) : /* @__PURE__ */ t.jsx(e0, { className: "w-4 h-4" })
                    }
                  ),
                  me != null && me.isLoading ? /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: Pe,
                      disabled: !0,
                      className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
                      children: /* @__PURE__ */ t.jsx(st, {})
                    }
                  ) : /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: Pe,
                      disabled: o.isGenerating,
                      className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                      title: "Regenerate",
                      children: o.isGenerating ? /* @__PURE__ */ t.jsx(Cs, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ t.jsx($n, { className: "w-4 h-4" })
                    }
                  ),
                  N && /* @__PURE__ */ t.jsx(
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
              !(me != null && me.isLoading) && /* @__PURE__ */ t.jsx(
                "div",
                {
                  className: `bg-white border border-gray-200 rounded p-3 mb-3 ${N ? "flex-1 overflow-y-auto" : ""}`,
                  style: N ? { minHeight: "350px" } : {},
                  children: /* @__PURE__ */ t.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: /* @__PURE__ */ t.jsx("div", { dangerouslySetInnerHTML: { __html: x } }) })
                }
              ),
              !(me != null && me.isLoading) && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 flex-wrap", children: [
                /* @__PURE__ */ t.jsxs(
                  "button",
                  {
                    onClick: Ue,
                    className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ t.jsx(js, { className: "w-4 h-4" }),
                      /* @__PURE__ */ t.jsx("span", { children: "Reply" })
                    ]
                  }
                ),
                /* @__PURE__ */ t.jsxs(
                  "button",
                  {
                    onClick: jt,
                    className: "flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm",
                    children: [
                      /* @__PURE__ */ t.jsx(Es, { className: "w-4 h-4" }),
                      /* @__PURE__ */ t.jsx("span", { children: "Reply All" })
                    ]
                  }
                ),
                /* @__PURE__ */ t.jsx(
                  "button",
                  {
                    onClick: () => {
                      c("");
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
    h && E && /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: K,
        className: "border-t border-gray-200 p-6 bg-gray-50",
        children: /* @__PURE__ */ t.jsxs("div", { className: "mx-auto", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: g.includes("--- Reply All ---") ? "Reply to All Recipients" : g.includes("--- Forwarded Message ---") ? "Forward Message" : "Reply" }),
            /* @__PURE__ */ t.jsxs("div", { className: "text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border", children: [
              /* @__PURE__ */ t.jsxs("div", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "To:" }),
                  " ",
                  g.includes("--- Reply All ---") ? (() => {
                    const Y = pe[pe.length - 1], he = /* @__PURE__ */ new Set([
                      ...Y.to
                    ]);
                    return Array.from(he).join(", ");
                  })() : g.includes("--- Forwarded Message ---") ? "Enter recipient email(s)" : (it = (Ge = pe[pe.length - 1]) == null ? void 0 : Ge.to) == null ? void 0 : it.join(
                    ", "
                  ),
                  E
                ] }),
                k === "reply" && ((Nt = (qe = pe[pe.length - 1]) == null ? void 0 : qe.cc) == null ? void 0 : Nt.length) > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "Cc:" }),
                  " ",
                  pe[pe.length - 1].cc.join(
                    ", "
                  )
                ] }),
                k === "reply-all" && ((yt = (Mt = pe[pe.length - 1]) == null ? void 0 : Mt.bcc) == null ? void 0 : yt.length) > 0 && /* @__PURE__ */ t.jsxs("div", { children: [
                  /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "Bcc:" }),
                  " ",
                  pe[pe.length - 1].bcc.join(
                    ", "
                  )
                ] })
              ] }),
              /* @__PURE__ */ t.jsxs("p", { children: [
                /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "Subject:" }),
                " ",
                g.includes("--- Forwarded Message ---") ? `Fwd: ${e.subject}` : `Re: ${e.subject}`
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ t.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
              "Message Content",
              /* @__PURE__ */ t.jsxs("span", { className: "text-gray-500 font-normal", children: [
                " ",
                "- Type your reply below"
              ] })
            ] }),
            /* @__PURE__ */ t.jsx("div", { dangerouslySetInnerHTML: { __html: g } })
          ] }),
          g === o.generatedReply && o.generatedReply && /* @__PURE__ */ t.jsxs("div", { className: "mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded", children: [
            /* @__PURE__ */ t.jsx(qt, { className: "w-3 h-3" }),
            /* @__PURE__ */ t.jsx("span", { children: "Using AI-generated reply" })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: () => j(!1),
                className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ t.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: _e,
                disabled: !g.trim(),
                className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
                children: g.includes("--- Reply All ---") ? "Send to All" : g.includes("--- Forwarded Message ---") ? "Forward" : "Send Reply"
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ t.jsx(
      kl,
      {
        isOpen: D,
        onClose: () => S(!1),
        triggerRef: P,
        entitiesInfo: H
      }
    )
  ] }) });
}, Dl = ({
  isOpen: e,
  onClose: r,
  onSend: n,
  onSaveDraft: s,
  initialData: o,
  isPanel: m = !1
}) => {
  const [b, u] = J((o == null ? void 0 : o.to) || []), [d, a] = J((o == null ? void 0 : o.cc) || []), [l, w] = J((o == null ? void 0 : o.bcc) || []), [i, f] = J((o == null ? void 0 : o.subject) || ""), [p, g] = J((o == null ? void 0 : o.body) || ""), [y, E] = J([]), [v, x] = J(!1), [c, h] = J(!1), [j, k] = J({}), [B, A] = J(!1), [C, N] = J(!1), [_, D] = J(""), [S, R] = J(""), [M, H] = J("");
  be(() => {
    const I = (ie) => {
      O.current && !O.current.contains(ie.target) && r();
    };
    return e && document.addEventListener("mousedown", I), () => {
      document.removeEventListener("mousedown", I);
    };
  }, [e, r]);
  const [U, V] = J({
    isGenerating: !1,
    showAIPanel: !1,
    generatedContent: "",
    selectedTone: "professional",
    hasGenerated: !1
  }), K = Be(null), O = Be(null);
  be(() => {
    if (!e) return;
    const I = setInterval(() => {
      (b.length > 0 || i.trim() || p.trim()) && G(!0);
    }, 3e4);
    return () => clearInterval(I);
  }, [b, i, p, e]), be(() => {
    const I = (ie) => {
      ie.key === "Escape" && e && le();
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [e]);
  const T = (I) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(I.trim()), z = () => {
    const I = {};
    if (b.length === 0)
      I.to = "At least one recipient is required";
    else {
      const ee = b.filter((_e) => !T(_e));
      ee.length > 0 && (I.to = `Invalid email addresses: ${ee.join(", ")}`);
    }
    const ie = d.filter((ee) => !T(ee));
    ie.length > 0 && (I.cc = `Invalid CC email addresses: ${ie.join(
      ", "
    )}`);
    const se = l.filter((ee) => !T(ee));
    return se.length > 0 && (I.bcc = `Invalid BCC email addresses: ${se.join(
      ", "
    )}`), k(I), Object.keys(I).length === 0;
  }, P = (I, ie, se, ee) => {
    if (I.endsWith(",") || I.endsWith(";")) {
      const _e = I.slice(0, -1).trim();
      if (_e && T(_e)) {
        const De = [.../* @__PURE__ */ new Set([...ie, _e])];
        se(De), ee("");
      } else
        ee(I);
    } else
      ee(I);
  }, W = (I, ie, se) => {
    se(ie.filter((ee) => ee !== I));
  }, ne = (I) => {
    const ie = Array.from(I.target.files || []), se = 25 * 1024 * 1024, ee = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain"
    ], De = ie.filter((Pe) => Pe.size > se ? (alert(`File ${Pe.name} is too large. Maximum size is 25MB.`), !1) : ee.includes(Pe.type) ? !0 : (alert(`File type ${Pe.type} is not allowed.`), !1)).map((Pe) => ({
      file: Pe,
      id: Math.random().toString(36).substr(2, 9)
    }));
    E((Pe) => [...Pe, ...De]);
  }, oe = (I) => {
    E((ie) => ie.filter((se) => se.id !== I));
  }, te = (I) => {
    if (I === 0) return "0 Bytes";
    const ie = 1024, se = ["Bytes", "KB", "MB", "GB"], ee = Math.floor(Math.log(I) / Math.log(ie));
    return parseFloat((I / Math.pow(ie, ee)).toFixed(2)) + " " + se[ee];
  }, me = async (I, ie = !1) => {
    if (!i.trim()) {
      alert("Please enter a subject first to generate AI content.");
      return;
    }
    V((ee) => ({ ...ee, isGenerating: !0 })), await new Promise((ee) => setTimeout(ee, 2e3));
    const se = Z(i, I, b);
    V((ee) => ({
      ...ee,
      isGenerating: !1,
      showAIPanel: !0,
      generatedContent: se,
      hasGenerated: !0
    }));
  }, Z = (I, ie, se) => {
    const ee = I.toLowerCase(), _e = se.length > 0 ? se[0].split("@")[0].replace(/[._]/g, " ") : "there";
    let De = "general";
    return ee.includes("meeting") || ee.includes("schedule") || ee.includes("appointment") ? De = "meeting" : ee.includes("follow") || ee.includes("update") ? De = "followup" : ee.includes("thank") || ee.includes("appreciation") ? De = "thanks" : ee.includes("request") || ee.includes("help") || ee.includes("support") ? De = "request" : ee.includes("proposal") || ee.includes("offer") ? De = "proposal" : (ee.includes("reminder") || ee.includes("deadline")) && (De = "reminder"), ue(De, ie, _e, I);
  }, ue = (I, ie, se, ee) => {
    var De;
    const _e = {
      meeting: {
        professional: `Dear ${se},

I hope this email finds you well. I would like to schedule a meeting to discuss ${ee.toLowerCase()}.

Please let me know your availability for the following time slots:
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration] and can be conducted [in-person/virtually].

Please confirm which option works best for you, or suggest alternative times if none of these are suitable.

Best regards`,
        friendly: `Hi ${se}!

Hope you're doing well! I'd love to set up a meeting to chat about ${ee.toLowerCase()}.

When would be a good time for you? I'm pretty flexible, so just let me know what works best. We can do it in person or over a video call - whatever's easier for you!

Looking forward to hearing from you!

Best`,
        concise: `Hi ${se},

Let's schedule a meeting about ${ee.toLowerCase()}.

Available times:
• [Option 1]
• [Option 2]
• [Option 3]

Please confirm your preference.

Thanks`,
        persuasive: `Dear ${se},

I believe we have a valuable opportunity to discuss ${ee.toLowerCase()} that could benefit both of us significantly.

This meeting would allow us to:
• Explore potential synergies
• Address key challenges
• Develop actionable solutions

I'm confident that dedicating time to this discussion will yield positive results. Please let me know your availability so we can move forward promptly.

Best regards`
      },
      followup: {
        professional: `Dear ${se},

I hope this email finds you well. I wanted to follow up on our previous discussion regarding ${ee.toLowerCase()}.

As discussed, I wanted to provide you with an update on the current status and next steps:

[Key points to address]
• [Point 1]
• [Point 2]
• [Point 3]

Please let me know if you have any questions or if there's anything else you'd like me to address.

Best regards`,
        friendly: `Hi ${se}!

Hope you're having a great day! Just wanted to circle back on ${ee.toLowerCase()}.

I've been thinking about our conversation and wanted to share a quick update. Things are moving along nicely, and I think you'll be pleased with the progress.

Let me know if you have any questions or if there's anything else I can help with!

Best`,
        concise: `Hi ${se},

Quick follow-up on ${ee.toLowerCase()}:

• [Update 1]
• [Update 2]
• [Next steps]

Let me know if you need anything else.

Thanks`,
        persuasive: `Dear ${se},

Following up on ${ee.toLowerCase()} - I believe we're at a critical juncture where swift action could maximize our success.

The momentum we've built presents an excellent opportunity to:
• Capitalize on current market conditions
• Leverage our competitive advantages
• Achieve our shared objectives

I recommend we proceed with the next phase immediately. Your prompt response would be greatly appreciated.

Best regards`
      },
      thanks: {
        professional: `Dear ${se},

I wanted to take a moment to express my sincere gratitude regarding ${ee.toLowerCase()}.

Your [support/assistance/collaboration] has been invaluable, and I truly appreciate the time and effort you've invested. The [outcome/result] exceeded my expectations, and I couldn't have achieved this without your contribution.

Thank you once again for your professionalism and dedication.

Best regards`,
        friendly: `Hi ${se}!

I just had to reach out and say a huge thank you for ${ee.toLowerCase()}!

You really went above and beyond, and it means so much to me. I'm incredibly grateful for all your help and support. You're absolutely amazing!

Thanks again for everything!

With appreciation`,
        concise: `Hi ${se},

Thank you for ${ee.toLowerCase()}.

Your help was invaluable and greatly appreciated.

Best regards`,
        persuasive: `Dear ${se},

Your exceptional contribution to ${ee.toLowerCase()} deserves special recognition.

The impact of your work has been transformative, demonstrating the value of our collaboration. I believe this success positions us perfectly for future opportunities together.

I would welcome the chance to discuss how we can build on this momentum.

With sincere appreciation`
      },
      request: {
        professional: `Dear ${se},

I hope this email finds you well. I am writing to request your assistance with ${ee.toLowerCase()}.

Specifically, I would appreciate your help with:
• [Specific request 1]
• [Specific request 2]
• [Timeline/deadline]

I understand you have a busy schedule, but your expertise in this area would be invaluable. Please let me know if this is something you would be able to assist with.

Thank you for considering my request.

Best regards`,
        friendly: `Hi ${se}!

Hope you're doing well! I'm reaching out because I could really use your help with ${ee.toLowerCase()}.

I know you're super busy, but you're honestly the best person I can think of for this. Would you be able to lend a hand? I'd really appreciate any assistance you can provide!

Let me know what you think!

Thanks so much`,
        concise: `Hi ${se},

I need assistance with ${ee.toLowerCase()}.

Requirements:
• [Item 1]
• [Item 2]
• [Deadline]

Can you help?

Thanks`,
        persuasive: `Dear ${se},

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
        professional: `Dear ${se},

I hope this email finds you well. I am writing to you regarding ${ee.toLowerCase()}.

[Please provide specific details about your message here]

I would appreciate your thoughts on this matter and look forward to your response.

Best regards`,
        friendly: `Hi ${se}!

Hope you're having a great day! I wanted to reach out about ${ee.toLowerCase()}.

[Add your personal message here]

Let me know what you think!

Best`,
        concise: `Hi ${se},

Regarding ${ee.toLowerCase()}:

[Your message here]

Please let me know your thoughts.

Thanks`,
        persuasive: `Dear ${se},

I'm reaching out about an important matter: ${ee.toLowerCase()}.

This presents a valuable opportunity that I believe deserves your immediate attention. The potential benefits are significant, and I'm confident you'll find this compelling.

I would appreciate the opportunity to discuss this with you further.

Best regards`
      }
    };
    return ((De = _e[I]) == null ? void 0 : De[ie]) || _e.general[ie];
  }, Ee = () => {
    g(U.generatedContent), V((I) => ({ ...I, showAIPanel: !1 }));
  }, Ae = () => {
    me(U.selectedTone, !0);
  }, Ce = (I) => {
    V((ie) => ({ ...ie, selectedTone: I }));
  }, Fe = async () => {
    if (z()) {
      A(!0);
      try {
        const I = {
          to: b,
          cc: d,
          bcc: l,
          subject: i,
          body: p,
          attachments: y.map((ie) => ie.file)
        };
        await n(I), le();
      } catch (I) {
        console.error("Failed to send email:", I);
      } finally {
        A(!1);
      }
    }
  }, G = async (I = !1) => {
    I || N(!0);
    try {
      const ie = {
        to: b,
        cc: d,
        bcc: l,
        subject: i,
        body: p,
        attachments: y.map((se) => se.file)
      };
      await s(ie), I || le();
    } catch (ie) {
      console.error("Failed to save draft:", ie);
    } finally {
      I || N(!1);
    }
  }, le = () => {
    if ((b.length > 0 || i.trim() || p.trim() || y.length > 0) && window.confirm(
      "You have unsaved changes. Would you like to save this as a draft before closing?"
    )) {
      G();
      return;
    }
    u([]), a([]), w([]), f(""), g(""), E([]), D(""), R(""), H(""), x(!1), h(!1), k({}), V({
      isGenerating: !1,
      showAIPanel: !1,
      generatedContent: "",
      selectedTone: "professional",
      hasGenerated: !1
    }), r();
  };
  if (!e) return null;
  const fe = () => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: m ? "Compose" : "New Message" }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: le,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ t.jsx(tt, { className: "w-5 h-5 text-gray-500" })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ t.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "To:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            b.map((I, ie) => /* @__PURE__ */ t.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md",
                children: [
                  I,
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => W(I, b, u),
                      className: "ml-1 text-blue-600 hover:text-blue-800",
                      children: /* @__PURE__ */ t.jsx(tt, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ie
            )),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: _,
                onChange: (I) => P(I.target.value, b, u, D),
                onKeyDown: (I) => {
                  I.key === "Enter" && (I.preventDefault(), _.trim() && T(_.trim()) && (u([...b, _.trim()]), D("")));
                },
                placeholder: b.length === 0 ? "Enter email addresses..." : "",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.to && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.to })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => x(!v),
              className: `text-sm px-2 py-1 rounded transition-colors ${v ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Cc"
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => h(!c),
              className: `text-sm px-2 py-1 rounded transition-colors ${c ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Bcc"
            }
          )
        ] })
      ] }) }),
      v && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Cc:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            d.map((I, ie) => /* @__PURE__ */ t.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  I,
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => W(I, d, a),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ t.jsx(tt, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ie
            )),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: S,
                onChange: (I) => P(I.target.value, d, a, R),
                onKeyDown: (I) => {
                  I.key === "Enter" && (I.preventDefault(), S.trim() && T(S.trim()) && (a([...d, S.trim()]), R("")));
                },
                placeholder: "Enter CC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.cc && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.cc })
        ] })
      ] }),
      c && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Bcc:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            l.map((I, ie) => /* @__PURE__ */ t.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  I,
                  /* @__PURE__ */ t.jsx(
                    "button",
                    {
                      onClick: () => W(I, l, w),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ t.jsx(tt, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              ie
            )),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "text",
                value: M,
                onChange: (I) => P(I.target.value, l, w, H),
                onKeyDown: (I) => {
                  I.key === "Enter" && (I.preventDefault(), M.trim() && T(M.trim()) && (w([...l, M.trim()]), H("")));
                },
                placeholder: "Enter BCC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          j.bcc && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-sm mt-1", children: j.bcc })
        ] })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Subject:" }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 flex space-x-2", children: [
          /* @__PURE__ */ t.jsx(
            "input",
            {
              type: "text",
              value: i,
              onChange: (I) => f(I.target.value),
              placeholder: "Enter subject...",
              className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          i.trim() && /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: () => me(U.selectedTone),
              disabled: U.isGenerating,
              className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ t.jsx(qt, { className: "w-4 h-4" }),
                /* @__PURE__ */ t.jsx("span", { children: U.isGenerating ? "Generating..." : "Generate with AI" })
              ]
            }
          )
        ] })
      ] }),
      U.showAIPanel && /* @__PURE__ */ t.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ t.jsx(qt, { className: "w-4 h-4 text-purple-600" }),
            /* @__PURE__ */ t.jsx("span", { className: "font-semibold text-gray-900", children: "AI Generated Content" })
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ t.jsxs(
              "select",
              {
                value: U.selectedTone,
                onChange: (I) => Ce(I.target.value),
                className: "text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: [
                  /* @__PURE__ */ t.jsx("option", { value: "professional", children: "Professional" }),
                  /* @__PURE__ */ t.jsx("option", { value: "friendly", children: "Friendly" }),
                  /* @__PURE__ */ t.jsx("option", { value: "concise", children: "Concise" }),
                  /* @__PURE__ */ t.jsx("option", { value: "persuasive", children: "Persuasive" })
                ]
              }
            ),
            /* @__PURE__ */ t.jsx(
              "button",
              {
                onClick: Ae,
                disabled: U.isGenerating,
                className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                title: "Regenerate with selected tone",
                children: /* @__PURE__ */ t.jsx($n, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "bg-white border border-gray-200 rounded p-3 mb-3 max-h-48 overflow-y-auto", children: /* @__PURE__ */ t.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: U.generatedContent }) }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: Ee,
              className: "flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ t.jsx(w0, { className: "w-4 h-4" }),
                /* @__PURE__ */ t.jsx("span", { children: "Use This Content" })
              ]
            }
          ),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => V((I) => ({ ...I, showAIPanel: !1 })),
              className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
              children: "Dismiss"
            }
          )
        ] })
      ] }),
      y.length > 0 && /* @__PURE__ */ t.jsxs("div", { className: "border border-gray-200 rounded-lg p-3", children: [
        /* @__PURE__ */ t.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments" }),
        /* @__PURE__ */ t.jsx("div", { className: "space-y-2", children: y.map((I) => /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-2 bg-gray-50 rounded-md",
            children: [
              /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ t.jsx(qn, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ t.jsx("span", { className: "text-sm text-gray-700", children: I.file.name }),
                /* @__PURE__ */ t.jsxs("span", { className: "text-xs text-gray-500", children: [
                  "(",
                  te(I.file.size),
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  onClick: () => oe(I.id),
                  className: "text-red-500 hover:text-red-700",
                  children: /* @__PURE__ */ t.jsx(Tr, { className: "w-4 h-4" })
                }
              )
            ]
          },
          I.id
        )) })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Message:" }),
          p === U.generatedContent && U.generatedContent && /* @__PURE__ */ t.jsxs("div", { className: "text-sm text-purple-600 flex items-center space-x-1", children: [
            /* @__PURE__ */ t.jsx(qt, { className: "w-3 h-3" }),
            /* @__PURE__ */ t.jsx("span", { children: "Using AI-generated content" })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
          "textarea",
          {
            value: p,
            onChange: (I) => g(I.target.value),
            placeholder: "Compose your message...",
            rows: m ? 8 : 12,
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-gray-200", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => {
              var I;
              return (I = K.current) == null ? void 0 : I.click();
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(qn, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { className: "text-sm", children: "Attach" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsx(
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
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: le,
            className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
            children: "Discard"
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => G(),
            disabled: C,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50",
            children: [
              /* @__PURE__ */ t.jsx(p0, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: C ? "Saving..." : "Save Draft" })
            ]
          }
        ),
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: Fe,
            disabled: B || b.length === 0,
            className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ t.jsx(Wa, { className: "w-4 h-4" }),
              /* @__PURE__ */ t.jsx("span", { children: B ? "Sending..." : "Send" })
            ]
          }
        )
      ] })
    ] })
  ] });
  return m ? /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: O,
      className: "fixed right-2 w-[500px] h-full bg-white border-l border-gray-200 shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out",
      style: { transform: "translateX(0)", zIndex: 60, height: "81%" },
      children: /* @__PURE__ */ t.jsx(fe, {})
    }
  ) : /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: O,
      className: "bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col",
      children: /* @__PURE__ */ t.jsx(fe, {})
    }
  ) });
}, Bl = [
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
], Ln = [
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
], Sl = ({
  isOpen: e,
  onClose: r,
  labels: n,
  onCreateLabel: s,
  onUpdateLabel: o,
  onDeleteLabel: m
}) => {
  const [b, u] = J(""), [d, a] = J(Ln[0]), [l, w] = J(""), [i, f] = J(null), [p, g] = J(""), [y, E] = J(""), [v, x] = J(""), [c, h] = J({}), j = Be(null);
  be(() => {
    const S = (R) => {
      R.key === "Escape" && e && r();
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [e, r]);
  const k = (S, R) => S.trim() ? S.trim().length < 2 ? (h((H) => ({ ...H, name: "Label name must be at least 2 characters" })), !1) : S.trim().length > 20 ? (h((H) => ({ ...H, name: "Label name must be less than 20 characters" })), !1) : n.find(
    (H) => H.name.toLowerCase() === S.trim().toLowerCase() && H.id !== R
  ) ? (h((H) => ({ ...H, name: "A label with this name already exists" })), !1) : (h((H) => ({ ...H, name: "" })), !0) : (h((H) => ({ ...H, name: "Label name is required" })), !1), B = () => {
    k(b) && (s({
      name: b.trim(),
      color: d,
      description: l.trim() || void 0,
      isSystem: !1
    }), u(""), a(Ln[0]), w(""), h({}));
  }, A = (S) => {
    f(S.id), g(S.name), E(S.color), x(S.description || ""), h({});
  }, C = () => {
    i && k(p, i) && (o(i, {
      name: p.trim(),
      color: y,
      description: v.trim() || void 0
    }), f(null), g(""), E(""), x(""), h({}));
  }, N = () => {
    f(null), g(""), E(""), x(""), h({});
  }, _ = (S) => {
    const R = n.find((H) => H.id === S);
    if (!R) return;
    const M = R.isSystem ? `Are you sure you want to delete the system label "${R.name}"? This action cannot be undone.` : `Are you sure you want to delete the label "${R.name}"? This will remove it from all emails.`;
    window.confirm(M) && m(S);
  }, D = ({ selectedColor: S, onColorChange: R, className: M = "" }) => /* @__PURE__ */ t.jsx("div", { className: `flex flex-wrap gap-2 ${M}`, children: Ln.map((H) => /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => R(H),
      className: `w-6 h-6 rounded-full border-2 transition-all ${S === H ? "border-gray-800 scale-110" : "border-gray-300 hover:border-gray-500"}`,
      style: { backgroundColor: H },
      title: `Select ${H}`
    },
    H
  )) });
  return e ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: j,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col",
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ t.jsx(kr, { className: "w-5 h-5 text-gray-600" }),
            /* @__PURE__ */ t.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Manage Labels" })
          ] }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: r,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ t.jsx(tt, { className: "w-5 h-5 text-gray-500" })
            }
          )
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
          /* @__PURE__ */ t.jsx("div", { className: "mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200", children: /* @__PURE__ */ t.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Label Name *" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "text",
                  value: b,
                  onChange: (S) => {
                    u(S.target.value), c.name && k(S.target.value);
                  },
                  onBlur: () => k(b),
                  placeholder: "Enter label name...",
                  className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${c.name ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`,
                  maxLength: 20
                }
              ),
              c.name && /* @__PURE__ */ t.jsxs("p", { className: "text-red-500 text-sm mt-1 flex items-center", children: [
                /* @__PURE__ */ t.jsx(Qo, { className: "w-3 h-3 mr-1" }),
                c.name
              ] })
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
                /* @__PURE__ */ t.jsx(d0, { className: "w-4 h-4 inline mr-1" }),
                "Color"
              ] }),
              /* @__PURE__ */ t.jsx(
                D,
                {
                  selectedColor: d,
                  onColorChange: a
                }
              )
            ] }),
            /* @__PURE__ */ t.jsxs("div", { children: [
              /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description (Optional)" }),
              /* @__PURE__ */ t.jsx(
                "input",
                {
                  type: "text",
                  value: l,
                  onChange: (S) => w(S.target.value),
                  placeholder: "Brief description of this label...",
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  maxLength: 100
                }
              )
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ t.jsxs(
              "button",
              {
                onClick: B,
                disabled: !b.trim(),
                className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-medium",
                children: [
                  /* @__PURE__ */ t.jsx(jr, { className: "w-4 h-4" }),
                  /* @__PURE__ */ t.jsx("span", { children: "Create Label" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: [
              "Your Labels (",
              n.length,
              ")"
            ] }),
            n.length === 0 ? /* @__PURE__ */ t.jsxs("div", { className: "text-center py-12 text-gray-500", children: [
              /* @__PURE__ */ t.jsx(kr, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ t.jsx("h4", { className: "text-lg font-medium text-gray-900 mb-2", children: "No labels yet" }),
              /* @__PURE__ */ t.jsx("p", { className: "text-gray-500", children: "Create your first label above to get started organizing your emails" })
            ] }) : /* @__PURE__ */ t.jsx("div", { className: "space-y-3", children: n.map((S) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                children: i === S.id ? /* @__PURE__ */ t.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ t.jsx(
                        "input",
                        {
                          type: "text",
                          value: p,
                          onChange: (R) => {
                            g(R.target.value), c.name && k(R.target.value, S.id);
                          },
                          onBlur: () => k(p, S.id),
                          className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${c.name ? "border-red-300" : "border-gray-300"}`,
                          maxLength: 20
                        }
                      ),
                      c.name && /* @__PURE__ */ t.jsx("p", { className: "text-red-500 text-xs mt-1", children: c.name })
                    ] }),
                    /* @__PURE__ */ t.jsx(
                      D,
                      {
                        selectedColor: y,
                        onColorChange: E,
                        className: "flex-shrink-0"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ t.jsx(
                    "input",
                    {
                      type: "text",
                      value: v,
                      onChange: (R) => x(R.target.value),
                      placeholder: "Description...",
                      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                      maxLength: 100
                    }
                  ),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ t.jsxs(
                      "button",
                      {
                        onClick: C,
                        disabled: !p.trim() || !!c.name,
                        className: "flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg text-sm transition-colors",
                        children: [
                          /* @__PURE__ */ t.jsx(qa, { className: "w-4 h-4" }),
                          /* @__PURE__ */ t.jsx("span", { children: "Save" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: N,
                        className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors",
                        children: "Cancel"
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
                    /* @__PURE__ */ t.jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded-full flex-shrink-0",
                        style: { backgroundColor: S.color }
                      }
                    ),
                    /* @__PURE__ */ t.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ t.jsx("span", { className: "font-medium text-gray-900", children: S.name }),
                        S.isSystem && /* @__PURE__ */ t.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium", children: "System" })
                      ] }),
                      S.description && /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500 mt-1", children: S.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ t.jsxs("div", { className: "flex items-center space-x-1", children: [
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => A(S),
                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                        title: "Edit label",
                        children: /* @__PURE__ */ t.jsx(x0, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ t.jsx(
                      "button",
                      {
                        onClick: () => _(S.id),
                        className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        title: "Delete label",
                        children: /* @__PURE__ */ t.jsx(Tr, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              },
              S.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "flex items-center justify-end p-6 border-t border-gray-200", children: /* @__PURE__ */ t.jsx(
          "button",
          {
            onClick: r,
            className: "px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium",
            children: "Done"
          }
        ) })
      ]
    }
  ) }) : null;
}, Ia = {
  //   readStatus: "all",
  page: 1,
  page_size: 20,
  //   sortBy: "newest",
  //   dateRange: { from: "", to: "" },
  //   intent: "all",
  search: ""
}, Ro = Dt({
  name: "filters",
  initialState: Ia,
  reducers: {
    setFilterSettings(e, r) {
      return { ...e, ...r.payload };
    },
    resetFilters() {
      return Ia;
    }
  }
}), { setFilterSettings: Ma, resetFilters: Ll } = Ro.actions, Fl = Ro.reducer;
function Rl() {
  const [e, r] = J("inbox"), [n, s] = J(null), [o, m] = J(!1), [b, u] = So(), [d, a] = J([]), [l, w] = J([]), [i, f] = J(Bl), [p, g] = J(!1), [y, E] = J(void 0), [v, x] = J(/* @__PURE__ */ new Set()), [c, h] = J(""), [j, k] = J({
    readStatus: "all",
    starred: !1,
    hasAttachment: !1,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all"
  }), [B, A] = J(void 0), [C, N] = J({
    search: void 0
  }), _ = xs();
  be(() => {
    localStorage.getItem("user") || (localStorage.setItem(
      "user",
      '"K6L7I5e3R/pyUXXfAkYb2QV5/WIYawnYYAclNRe35oYNm2KluQtzHo41AXUFB4yHoVJrg/qtj7MJdS/5ZZkfuTBCMXVuZtL8rjrpvePcWUfDJDKgL6PtG4gNp8+qPUwXELEHDiOA/AIn6RaTQNVd5kT2IFS9j0BsgqKMwyd/QFWbrJlwW40wFadaO+xHNur1JdzR66GDRbu+EBmcLijmxQ=="'
    ), localStorage.setItem("project", "4"));
  }, []);
  const [D, S] = J({
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  });
  be(() => {
    b({});
    const $ = setInterval(() => {
      b({});
    }, 1e4);
    return () => clearInterval($);
  }, [b]), be(() => {
    console.log(B);
  }, [B]), be(() => {
    var $, L, q, Q, ae, pe;
    if (u != null && u.isSuccess) {
      const ze = (q = (L = ($ = u == null ? void 0 : u.data) == null ? void 0 : $.response) == null ? void 0 : L.data) == null ? void 0 : q.results, st = Number(
        (pe = (ae = (Q = u == null ? void 0 : u.data) == null ? void 0 : Q.response) == null ? void 0 : ae.data) == null ? void 0 : pe.count
      );
      if (B !== void 0 && B !== st) {
        E(st - B), g(!0), console.log("difference generated");
        const Ge = setTimeout(() => {
          g(!1);
        }, 3e3);
        return () => clearTimeout(Ge);
      }
      if (A(st), ze && Array.isArray(ze)) {
        a(
          ze.map((qe) => ({
            ...qe,
            intentLabel: qe.labels || "new"
          }))
        );
        const Ge = ze.filter((qe) => qe.is_deleted).map((qe) => qe.message_id), it = ze.filter((qe) => Ge.includes(qe.message_id)).map((qe) => ({
          ...qe,
          intentLabel: qe.labels || "new"
        }));
        w(it);
      }
    }
  }, [u]);
  const [R, M] = J(!1), [H, U] = J(!1), [V, K] = J(!1), [O, T] = J(null), z = () => {
    const $ = {};
    return $.inbox = (d == null ? void 0 : d.filter(
      (L) => (!L.is_read || L.is_read) && !L.is_deleted
    ).length) || 0, $.starred = (d == null ? void 0 : d.filter((L) => L.is_starred).length) || 0, $.snoozed = 0, $.bin = l.filter((L) => L.is_deleted).length || 0, d == null || d.forEach((L) => {
      if (L.labels && L.labels.length > 0) {
        let q = [];
        switch (d == null || d.map((Q) => ({
          ...Q,
          emailsOnly: Q.to
        })), L.labels[0]) {
          case "work":
            q = d.filter(
              (Q) => {
                var ae;
                return ((ae = Q.customLabels) == null ? void 0 : ae.includes("work")) || Q.from_address.includes("company.com") || Q.from_address.includes("techcorp.com") || Q.from_address.includes("consulting.com") || Q.from_address.includes("design.studio");
              }
            );
            break;
          case "personal":
            q = d.filter(
              (Q) => {
                var ae;
                return ((ae = Q.customLabels) == null ? void 0 : ae.includes("personal")) || Q.subject.toLowerCase().includes("welcome") || Q.from_address.includes("startup.io");
              }
            );
            break;
          case "important":
            q = d.filter(
              (Q) => {
                var ae;
                return ((ae = Q.customLabels) == null ? void 0 : ae.includes("important")) || Q.subject.toLowerCase().includes("urgent") || Q.subject.toLowerCase().includes("important") || Q.is_starred;
              }
            );
            break;
          case "travel":
            q = d.filter(
              (Q) => {
                var ae;
                return (ae = Q.customLabels) == null ? void 0 : ae.includes("travel");
              }
            );
            break;
        }
        $[`label-${L.id}`] = q.filter(
          (Q) => !Q.is_read
        ).length;
      } else {
        const q = d.filter(
          (Q) => {
            var ae;
            return (ae = Q.customLabels) == null ? void 0 : ae.includes(L.id);
          }
        );
        $[`custom-label-${L.id}`] = q.filter(
          (Q) => !Q.is_read
        ).length;
      }
    }), $;
  };
  We(() => z(), [d, i, l]);
  const P = ($) => {
    let L = [...$];
    return j.readStatus === "read" ? L = L.filter((q) => q.is_read === !0) : j.readStatus === "unread" ? L = L.filter((q) => q.is_read === !1) : j.readStatus === "all" && (L = $), j.starred && (L = L.filter((q) => q.is_starred)), j.hasAttachment && (L = L.filter(
      (q) => q.messages.some(
        (Q) => Q.content.toLowerCase().includes("attach") || Q.content.toLowerCase().includes("file") || Q.content.toLowerCase().includes("document")
      )
    )), (j.dateRange.from || j.dateRange.to) && (L = L.filter((q) => {
      const Q = new Date(q.created_at), ae = j.dateRange.from ? new Date(j.dateRange.from) : null, pe = j.dateRange.to ? /* @__PURE__ */ new Date(j.dateRange.to + "T23:59:59") : null;
      return (!ae || Q >= ae) && (!pe || Q <= pe);
    })), j.intent !== "all" && (L = L.filter((q) => {
      if (q.labels)
        switch (j.intent) {
          case "meetings":
            return q.labels === "meeting";
          case "notifications":
            return q.labels === "system";
          case "campaigns":
            return q.labels === "announcement";
          case "support":
            return q.labels === "feedback";
          default:
            return !0;
        }
      const Q = q.labels || "new", ae = `${q.subject} ${q == null ? void 0 : q.snippet}`.toLowerCase();
      switch (j.intent) {
        case "meetings":
          return Q === "meeting" || ae.includes("meeting") || ae.includes("schedule") || ae.includes("appointment");
        case "notifications":
          return Q === "system" || ae.includes("notification") || ae.includes("system") || ae.includes("alert");
        case "campaigns":
          return Q === "announcement" || ae.includes("newsletter") || ae.includes("campaign") || ae.includes("marketing");
        case "support":
          return Q === "feedback" || ae.includes("support") || ae.includes("help") || ae.includes("issue");
        case "new":
          return Q === "new";
        default:
          return Q === "general";
      }
    })), L.sort((q, Q) => {
      switch (j.sortBy) {
        case "oldest":
          return new Date(q.created_at).getTime() - new Date(Q.created_at).getTime();
        case "newest":
          return new Date(Q.created_at).getTime() - new Date(q.created_at).getTime();
        case "subject-az":
          return q.subject.localeCompare(Q.subject);
        case "subject-za":
          return Q.subject.localeCompare(q.subject);
        case "sender-az":
          return q.sender.localeCompare(Q.from_address);
        case "sender-za":
          return Q.sender.localeCompare(q.from_address);
        case "starred-first":
          return q.is_starred && !Q.is_starred ? -1 : !q.is_starred && Q.is_starred ? 1 : new Date(Q.created_at).getTime() - new Date(q.created_at).getTime();
        default:
          return new Date(Q.created_at).getTime() - new Date(q.created_at).getTime();
      }
    }), L;
  }, W = We(() => d == null ? void 0 : d.map(($) => ({
    ...$,
    messages: $.messages || [],
    conversationEmails: [$]
    // Each email is its own conversation
  })).sort(
    ($, L) => new Date(L.created_at).getTime() - new Date($.created_at).getTime()
  ), [d]), ne = We(() => {
    let $ = W;
    switch (e) {
      case "inbox":
        $ = W == null ? void 0 : W.filter((L) => !L.is_deleted);
        break;
      case "starred":
        $ = W == null ? void 0 : W.filter((L) => L.is_starred);
        break;
      case "snoozed":
        $ = [];
        break;
      case "bin":
        $ = (l == null ? void 0 : l.map((L) => ({
          ...L,
          messages: L.messages || [],
          conversationEmails: [L]
        }))) || [];
        break;
      case "label-work":
        $ = W.filter(
          (L) => {
            var q;
            return ((q = L.customLabels) == null ? void 0 : q.includes("work")) || L.subject.toLowerCase().includes("project") || L.subject.toLowerCase().includes("meeting") || L.subject.toLowerCase().includes("campaign") || L.from_address.includes("company.com") || L.from_address.includes("techcorp.com");
          }
        );
        break;
      case "label-personal":
        $ = W.filter(
          (L) => {
            var q;
            return ((q = L.customLabels) == null ? void 0 : q.includes("personal")) || L.subject.toLowerCase().includes("welcome") || L.from_address.includes("startup.io");
          }
        );
        break;
      case "label-important":
        $ = W.filter(
          (L) => {
            var q;
            return ((q = L.customLabels) == null ? void 0 : q.includes("important")) || L.subject.toLowerCase().includes("urgent") || L.subject.toLowerCase().includes("important") || L.is_starred;
          }
        );
        break;
      case "label-travel":
        $ = W == null ? void 0 : W.filter(
          (L) => {
            var q;
            return (q = L.customLabels) == null ? void 0 : q.includes("travel");
          }
        );
        break;
      default:
        if (e.startsWith("custom-label-")) {
          const L = e.replace("custom-label-", "");
          $ = W == null ? void 0 : W.filter(
            (q) => {
              var Q;
              return (Q = q.customLabels) == null ? void 0 : Q.includes(L);
            }
          );
        }
        break;
    }
    if (c.trim()) {
      const L = c.toLowerCase();
      $ = $ == null ? void 0 : $.filter(
        (q) => q.subject.toLowerCase().includes(L) || q.from_adress.toLowerCase().includes(L) || q.preview.toLowerCase().includes(L) || q.messages.some(
          (Q) => Q.content.toLowerCase().includes(L)
        ) || // Search in custom labels
        q.customLabels && q.customLabels.some((Q) => {
          const ae = i.find((pe) => pe.id === Q);
          return ae == null ? void 0 : ae.name.toLowerCase().includes(L);
        })
      );
    }
    return $ = P($ || []), $;
  }, [
    d,
    e,
    c,
    j,
    i,
    W,
    l
  ]), oe = ($, L = !1) => {
    s($), U(L), a(
      (q) => q == null ? void 0 : q.map(
        (Q) => Q.message_id === $.message_id ? { ...Q, is_read: !0 } : Q
      )
    );
  }, te = () => {
    U(!1);
  }, me = ($) => {
    const L = d == null ? void 0 : d.find((Q) => Q.message_id === $);
    if (!L) return;
    const q = [
      { id: L.message_id, is_starred: L.is_starred }
    ];
    T({
      type: "star",
      emailIds: [$],
      previousState: q
    }), a(
      (Q) => Q == null ? void 0 : Q.map(
        (ae) => ae.message_id === $ ? { ...ae, is_starred: !ae.is_starred } : ae
      )
    ), e === "starred" && !L.is_starred && (n == null ? void 0 : n.id) === $ && s(null);
  }, Z = ($) => {
    x((L) => {
      const q = new Set(L);
      return q.has($) ? q.delete($) : q.add($), q;
    });
  }, ue = () => {
    m(!o);
  }, Ee = ($) => {
    _(Ma({ search: $ }));
  }, Ae = ($) => {
    k($), _(
      Ma({
        is_starred: $ == null ? void 0 : $.starred,
        is_read: $.readStatus,
        has_attachment: $ == null ? void 0 : $.hasAttachment
      })
    );
  }, Ce = () => {
    K(!0);
  }, Fe = () => {
    K(!1);
  }, G = async ($) => {
    await new Promise((L) => setTimeout(L, 1e3)), alert("Email sent successfully!"), K(!1);
  }, le = async ($) => {
    await new Promise((L) => setTimeout(L, 500)), ($.to.length > 0 || $.subject.trim() || $.body.trim()) && alert("Draft saved successfully!"), K(!1);
  }, fe = ($) => {
    const L = {
      ...$,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    f((q) => [...q, L]);
  }, I = ($, L) => {
    f(
      (q) => q.map(
        (Q) => Q.id === $ ? { ...Q, ...L } : Q
      )
    );
  }, ie = ($) => {
    a(
      (L) => L == null ? void 0 : L.map((q) => {
        var Q;
        return {
          ...q,
          customLabels: ((Q = q.customLabels) == null ? void 0 : Q.filter((ae) => ae !== $)) || []
        };
      })
    ), f((L) => L.filter((q) => q.id !== $)), e === `custom-label-${$}` && r("inbox");
  }, se = ($, L) => {
    a(
      (q) => q.map(
        (Q) => $.includes(Q.message_id) ? { ...Q, customLabels: L } : Q
      )
    ), x(/* @__PURE__ */ new Set());
  }, ee = ($, L) => {
    var Q;
    const q = (Q = d == null ? void 0 : d.filter((ae) => $.includes(ae.message_id))) == null ? void 0 : Q.map((ae) => ({ id: ae.message_id, is_read: ae.is_read }));
    T({
      type: "markAsRead",
      emailIds: $,
      previousState: q
    }), a(
      (ae) => ae == null ? void 0 : ae.map(
        (pe) => $.includes(pe.message_id) ? { ...pe, is_read: L } : pe
      )
    ), x(/* @__PURE__ */ new Set());
  }, _e = ($) => {
    const L = d == null ? void 0 : d.filter(
      (Q) => $.includes(Q.message_id)
    );
    T({
      type: "delete",
      emailIds: $,
      previousState: L
    });
    const q = d.filter((Q) => $.includes(Q.message_id)).map((Q) => ({ ...Q, is_deleted: !0 }));
    w((Q) => [...Q, ...q]), a(
      (Q) => Q.map(
        (ae) => $.includes(ae.message_id) ? { ...ae, is_deleted: !0 } : ae
      )
    ), x(/* @__PURE__ */ new Set()), n && $.includes(n.message_id) && s(null);
  }, De = () => {
    const $ = ne.map((L) => L.message_id);
    x(new Set($));
  }, Pe = () => {
    x(/* @__PURE__ */ new Set());
  }, Ie = ($) => {
    const L = d == null ? void 0 : d.find((q) => q.message_id === $);
    L && (w((q) => [...q, L]), a(
      (q) => q == null ? void 0 : q.map(
        (Q) => Q.message_id === $ ? { ...Q, is_deleted: !Q.is_deleted } : Q
      )
    ), n && n.message_id === $ && s(null));
  }, Ue = ($) => {
    const L = l.find(
      (q) => q.message_id === $
    );
    L && (a((q) => [...q, L]), w(
      (q) => q.filter((Q) => Q.message_id !== $)
    ), n && n.message_id === $ && s(null), console.log(`Email restored from bin: ${L.subject}`));
  }, jt = ($) => {
    const L = l.filter(
      (q) => $.includes(q.message_id)
    );
    a((q) => [...q, ...L]), w(
      (q) => q.filter((Q) => !$.includes(Q.message_id))
    ), x(/* @__PURE__ */ new Set()), n && $.includes(n.message_id) && s(null);
  }, ht = () => {
    if (O) {
      switch (O.type) {
        case "markAsRead":
          a(
            ($) => $ == null ? void 0 : $.map((L) => {
              const q = O.previousState.find(
                (Q) => Q.id === L.message_id
              );
              return q ? { ...L, is_read: q.is_read } : L;
            })
          );
          break;
        case "delete":
          a(($) => [
            ...$,
            ...O.previousState
          ]);
          break;
        case "star":
          a(
            ($) => $ == null ? void 0 : $.map((L) => {
              const q = O.previousState.find(
                (Q) => Q.id === L.message_id
              );
              return q ? { ...L, is_starred: q.is_starred } : L;
            })
          );
          break;
      }
      T(null);
    }
  }, ot = ($) => D || {
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  }, Ke = ($, L) => {
    S((q) => ({
      ...q,
      [$]: L
    }));
  }, nt = async ($, L = "professional", q = "reply") => {
    const Q = ot($.message_id);
    Ke($.message_id, {
      ...Q,
      isGenerating: !0,
      showAiReply: !1,
      replyType: q
    }), await new Promise((ze) => setTimeout(ze, 2e3));
    let ae = "";
    const pe = d[d.length - 1];
    q && (ae = pe == null ? void 0 : pe.ai_response), S((ze) => ({
      ...ze,
      isGenerating: !1,
      showAiReply: !0,
      generatedReply: ae,
      tone: L
    }));
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "h-screen flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ t.jsx(
      A0,
      {
        onMenuToggle: ue,
        onSearch: Ee,
        onFiltersChange: Ae,
        filters: j,
        checkedEmails: v,
        onBulkMarkAsRead: ee,
        onBulkDelete: _e,
        onSelectAll: De,
        onUnselectAll: Pe,
        onUndo: ht,
        hasSelection: v.size > 0,
        onComposeClick: Ce
      }
    ),
    /* @__PURE__ */ t.jsx("div", { className: "flex-1 flex overflow-hidden", children: (u == null ? void 0 : u.isSuccess) && /* @__PURE__ */ t.jsx(
      "div",
      {
        className: "flex-1 flex min-w-0 transition-all duration-200",
        children: H ? /* @__PURE__ */ t.jsx(
          Pa,
          {
            email: n,
            onClose: () => s(null),
            onBack: te,
            isFullPage: !0,
            aiReplyState: ot((n == null ? void 0 : n.message_id) || ""),
            onGenerateAiReply: nt,
            onAiReplyStateChange: ($) => (n == null ? void 0 : n.message_id) && Ke(n.message_id, $),
            customLabels: i,
            onEmailLabelsChange: se,
            onCreateLabel: fe,
            onDeleteEmail: Ie,
            onRestoreEmail: Ue,
            activeSection: e
          }
        ) : /* @__PURE__ */ t.jsxs("div", { className: "flex flex-1 h-full", children: [
          u != null && u.isLoading || u != null && u.isFetching ? /* @__PURE__ */ t.jsx(_0, {}) : /* @__PURE__ */ t.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ t.jsx(
            Nl,
            {
              emails: ne,
              selectedEmailId: (n == null ? void 0 : n.message_id) || null,
              onEmailSelect: oe,
              onStarToggle: me,
              onCheckToggle: Z,
              checkedEmails: v,
              activeSection: e,
              customLabels: i,
              onEmailLabelsChange: se,
              onCreateLabel: fe,
              onBulkMarkAsRead: ee,
              onBulkDelete: _e,
              onBulkRestore: jt,
              onSelectAll: De,
              onUnselectAll: Pe,
              setEmails: a,
              readStatus: j == null ? void 0 : j.readStatus,
              searchFilter: C
            }
          ) }),
          /* @__PURE__ */ t.jsx(
            Pa,
            {
              email: n,
              onClose: () => s(null),
              isFullPage: !1,
              aiReplyState: ot((n == null ? void 0 : n.id) || ""),
              onGenerateAiReply: nt,
              onAiReplyStateChange: ($) => (n == null ? void 0 : n.message_id) && Ke(n.message_id, $),
              customLabels: i,
              onEmailLabelsChange: se,
              onCreateLabel: fe,
              onDeleteEmail: Ie,
              onRestoreEmail: Ue,
              activeSection: e,
              onStarToggle: me
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ t.jsx(
      Sl,
      {
        isOpen: R,
        onClose: () => M(!1),
        labels: i,
        onCreateLabel: fe,
        onUpdateLabel: I,
        onDeleteLabel: ie
      }
    ),
    V && /* @__PURE__ */ t.jsx(
      Dl,
      {
        isOpen: V,
        onClose: Fe,
        onSend: G,
        onSaveDraft: le,
        isPanel: !0
      }
    )
  ] });
}
const Ol = {
  [Or.reducerPath]: Or.reducer,
  filters: Fl
}, Tl = (e) => e().concat(Or.middleware), zl = Ni({
  reducer: {
    ...Ol
  },
  middleware: Tl
}), ql = () => /* @__PURE__ */ t.jsx(Rl, {});
export {
  Or as InboxService,
  ql as default,
  Tl as inboxServiceMiddleware,
  Ol as inboxServiceReducer,
  zl as store
};
