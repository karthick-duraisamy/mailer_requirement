import ze, { forwardRef as Bt, createElement as lt, useState as v, useRef as me, useEffect as Ee, useCallback as Ge, useMemo as it } from "react";
var Ye = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function qt() {
  if (ct) return Me;
  ct = 1;
  var a = ze, I = Symbol.for("react.element"), A = Symbol.for("react.fragment"), $ = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(C, c, j) {
    var x, E = {}, w = null, k = null;
    j !== void 0 && (w = "" + j), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (k = c.ref);
    for (x in c) $.call(c, x) && !D.hasOwnProperty(x) && (E[x] = c[x]);
    if (C && C.defaultProps) for (x in c = C.defaultProps, c) E[x] === void 0 && (E[x] = c[x]);
    return { $$typeof: I, type: C, key: w, ref: k, props: E, _owner: f.current };
  }
  return Me.Fragment = A, Me.jsx = p, Me.jsxs = p, Me;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Wt() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ze, I = Symbol.for("react.element"), A = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), C = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), o = Symbol.iterator, z = "@@iterator";
    function q(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = o && t[o] || t[z];
      return typeof r == "function" ? r : null;
    }
    var H = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(t) {
      {
        for (var r = arguments.length, h = new Array(r > 1 ? r - 1 : 0), T = 1; T < r; T++)
          h[T - 1] = arguments[T];
        V("error", t, h);
      }
    }
    function V(t, r, h) {
      {
        var T = H.ReactDebugCurrentFrame, W = T.getStackAddendum();
        W !== "" && (r += "%s", h = h.concat([W]));
        var G = h.map(function(O) {
          return String(O);
        });
        G.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, G);
      }
    }
    var Z = !1, Y = !1, X = !1, Q = !1, te = !1, y;
    y = Symbol.for("react.module.reference");
    function B(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === $ || t === D || te || t === f || t === j || t === x || Q || t === k || Z || Y || X || typeof t == "object" && t !== null && (t.$$typeof === w || t.$$typeof === E || t.$$typeof === p || t.$$typeof === C || t.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === y || t.getModuleId !== void 0));
    }
    function ee(t, r, h) {
      var T = t.displayName;
      if (T)
        return T;
      var W = r.displayName || r.name || "";
      return W !== "" ? h + "(" + W + ")" : h;
    }
    function m(t) {
      return t.displayName || "Context";
    }
    function l(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case $:
          return "Fragment";
        case A:
          return "Portal";
        case D:
          return "Profiler";
        case f:
          return "StrictMode";
        case j:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case C:
            var r = t;
            return m(r) + ".Consumer";
          case p:
            var h = t;
            return m(h._context) + ".Provider";
          case c:
            return ee(t, t.render, "ForwardRef");
          case E:
            var T = t.displayName || null;
            return T !== null ? T : l(t.type) || "Memo";
          case w: {
            var W = t, G = W._payload, O = W._init;
            try {
              return l(O(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var i = Object.assign, N = 0, U, R, se, ue, je, ke, ce;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ne() {
      {
        if (N === 0) {
          U = console.log, R = console.info, se = console.warn, ue = console.error, je = console.group, ke = console.groupCollapsed, ce = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        N++;
      }
    }
    function Ce() {
      {
        if (N--, N === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: i({}, t, {
              value: U
            }),
            info: i({}, t, {
              value: R
            }),
            warn: i({}, t, {
              value: se
            }),
            error: i({}, t, {
              value: ue
            }),
            group: i({}, t, {
              value: je
            }),
            groupCollapsed: i({}, t, {
              value: ke
            }),
            groupEnd: i({}, t, {
              value: ce
            })
          });
        }
        N < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = H.ReactCurrentDispatcher, ge;
    function le(t, r, h) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (W) {
            var T = W.stack.trim().match(/\n( *(at )?)/);
            ge = T && T[1] || "";
          }
        return `
` + ge + t;
      }
    }
    var u = !1, n;
    {
      var d = typeof WeakMap == "function" ? WeakMap : Map;
      n = new d();
    }
    function b(t, r) {
      if (!t || u)
        return "";
      {
        var h = n.get(t);
        if (h !== void 0)
          return h;
      }
      var T;
      u = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = xe.current, xe.current = null, Ne();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (oe) {
              T = oe;
            }
            Reflect.construct(t, [], O);
          } else {
            try {
              O.call();
            } catch (oe) {
              T = oe;
            }
            t.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (oe) {
            T = oe;
          }
          t();
        }
      } catch (oe) {
        if (oe && T && typeof oe.stack == "string") {
          for (var P = oe.stack.split(`
`), ne = T.stack.split(`
`), J = P.length - 1, K = ne.length - 1; J >= 1 && K >= 0 && P[J] !== ne[K]; )
            K--;
          for (; J >= 1 && K >= 0; J--, K--)
            if (P[J] !== ne[K]) {
              if (J !== 1 || K !== 1)
                do
                  if (J--, K--, K < 0 || P[J] !== ne[K]) {
                    var de = `
` + P[J].replace(" at new ", " at ");
                    return t.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", t.displayName)), typeof t == "function" && n.set(t, de), de;
                  }
                while (J >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        u = !1, xe.current = G, Ce(), Error.prepareStackTrace = W;
      }
      var Le = t ? t.displayName || t.name : "", Te = Le ? le(Le) : "";
      return typeof t == "function" && n.set(t, Te), Te;
    }
    function _(t, r, h) {
      return b(t, !1);
    }
    function re(t) {
      var r = t.prototype;
      return !!(r && r.isReactComponent);
    }
    function Se(t, r, h) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return b(t, re(t));
      if (typeof t == "string")
        return le(t);
      switch (t) {
        case j:
          return le("Suspense");
        case x:
          return le("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return _(t.render);
          case E:
            return Se(t.type, r, h);
          case w: {
            var T = t, W = T._payload, G = T._init;
            try {
              return Se(G(W), r, h);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, ye = {}, Ae = H.ReactDebugCurrentFrame;
    function s(t) {
      if (t) {
        var r = t._owner, h = Se(t.type, t._source, r ? r.type : null);
        Ae.setExtraStackFrame(h);
      } else
        Ae.setExtraStackFrame(null);
    }
    function M(t, r, h, T, W) {
      {
        var G = Function.call.bind(fe);
        for (var O in t)
          if (G(t, O)) {
            var P = void 0;
            try {
              if (typeof t[O] != "function") {
                var ne = Error((T || "React class") + ": " + h + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ne.name = "Invariant Violation", ne;
              }
              P = t[O](r, O, T, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              P = J;
            }
            P && !(P instanceof Error) && (s(W), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", h, O, typeof P), s(null)), P instanceof Error && !(P.message in ye) && (ye[P.message] = !0, s(W), F("Failed %s type: %s", h, P.message), s(null));
          }
      }
    }
    var L = Array.isArray;
    function g(t) {
      return L(t);
    }
    function he(t) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, h = r && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h;
      }
    }
    function ae(t) {
      try {
        return ie(t), !1;
      } catch {
        return !0;
      }
    }
    function ie(t) {
      return "" + t;
    }
    function be(t) {
      if (ae(t))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", he(t)), ie(t);
    }
    var Ie = H.ReactCurrentOwner, kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, Xe, Be;
    Be = {};
    function Nt(t) {
      if (fe.call(t, "ref")) {
        var r = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ct(t) {
      if (fe.call(t, "key")) {
        var r = Object.getOwnPropertyDescriptor(t, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Tt(t, r) {
      if (typeof t.ref == "string" && Ie.current && r && Ie.current.stateNode !== r) {
        var h = l(Ie.current.type);
        Be[h] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l(Ie.current.type), t.ref), Be[h] = !0);
      }
    }
    function Et(t, r) {
      {
        var h = function() {
          Ke || (Ke = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function St(t, r) {
      {
        var h = function() {
          Xe || (Xe = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Rt = function(t, r, h, T, W, G, O) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: t,
        key: r,
        ref: h,
        props: O,
        // Record the component responsible for creating this element.
        _owner: G
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function Lt(t, r, h, T, W) {
      {
        var G, O = {}, P = null, ne = null;
        h !== void 0 && (be(h), P = "" + h), Ct(r) && (be(r.key), P = "" + r.key), Nt(r) && (ne = r.ref, Tt(r, W));
        for (G in r)
          fe.call(r, G) && !kt.hasOwnProperty(G) && (O[G] = r[G]);
        if (t && t.defaultProps) {
          var J = t.defaultProps;
          for (G in J)
            O[G] === void 0 && (O[G] = J[G]);
        }
        if (P || ne) {
          var K = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          P && Et(O, K), ne && St(O, K);
        }
        return Rt(t, P, ne, W, T, Ie.current, O);
      }
    }
    var qe = H.ReactCurrentOwner, et = H.ReactDebugCurrentFrame;
    function Re(t) {
      if (t) {
        var r = t._owner, h = Se(t.type, t._source, r ? r.type : null);
        et.setExtraStackFrame(h);
      } else
        et.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function He(t) {
      return typeof t == "object" && t !== null && t.$$typeof === I;
    }
    function tt() {
      {
        if (qe.current) {
          var t = l(qe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function At(t) {
      return "";
    }
    var st = {};
    function It(t) {
      {
        var r = tt();
        if (!r) {
          var h = typeof t == "string" ? t : t.displayName || t.name;
          h && (r = `

Check the top-level render call using <` + h + ">.");
        }
        return r;
      }
    }
    function rt(t, r) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var h = It(r);
        if (st[h])
          return;
        st[h] = !0;
        var T = "";
        t && t._owner && t._owner !== qe.current && (T = " It was passed a child from " + l(t._owner.type) + "."), Re(t), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, T), Re(null);
      }
    }
    function at(t, r) {
      {
        if (typeof t != "object")
          return;
        if (g(t))
          for (var h = 0; h < t.length; h++) {
            var T = t[h];
            He(T) && rt(T, r);
          }
        else if (He(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var W = q(t);
          if (typeof W == "function" && W !== t.entries)
            for (var G = W.call(t), O; !(O = G.next()).done; )
              He(O.value) && rt(O.value, r);
        }
      }
    }
    function Mt(t) {
      {
        var r = t.type;
        if (r == null || typeof r == "string")
          return;
        var h;
        if (typeof r == "function")
          h = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          h = r.propTypes;
        else
          return;
        if (h) {
          var T = l(r);
          M(h, t.props, "prop", T, t);
        } else if (r.PropTypes !== void 0 && !We) {
          We = !0;
          var W = l(r);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $t(t) {
      {
        for (var r = Object.keys(t.props), h = 0; h < r.length; h++) {
          var T = r[h];
          if (T !== "children" && T !== "key") {
            Re(t), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), Re(null);
            break;
          }
        }
        t.ref !== null && (Re(t), F("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var nt = {};
    function ot(t, r, h, T, W, G) {
      {
        var O = B(t);
        if (!O) {
          var P = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ne = At();
          ne ? P += ne : P += tt();
          var J;
          t === null ? J = "null" : g(t) ? J = "array" : t !== void 0 && t.$$typeof === I ? (J = "<" + (l(t.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : J = typeof t, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, P);
        }
        var K = Lt(t, r, h, W, G);
        if (K == null)
          return K;
        if (O) {
          var de = r.children;
          if (de !== void 0)
            if (T)
              if (g(de)) {
                for (var Le = 0; Le < de.length; Le++)
                  at(de[Le], t);
                Object.freeze && Object.freeze(de);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              at(de, t);
        }
        if (fe.call(r, "key")) {
          var Te = l(t), oe = Object.keys(r).filter(function(zt) {
            return zt !== "key";
          }), Ue = oe.length > 0 ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!nt[Te + Ue]) {
            var _t = oe.length > 0 ? "{" + oe.join(": ..., ") + ": ...}" : "{}";
            F(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ue, Te, _t, Te), nt[Te + Ue] = !0;
          }
        }
        return t === $ ? $t(K) : Mt(K), K;
      }
    }
    function Dt(t, r, h) {
      return ot(t, r, h, !0);
    }
    function Pt(t, r, h) {
      return ot(t, r, h, !1);
    }
    var Ft = Pt, Ot = Dt;
    $e.Fragment = $, $e.jsx = Ft, $e.jsxs = Ot;
  }()), $e;
}
process.env.NODE_ENV === "production" ? Ye.exports = qt() : Ye.exports = Wt();
var e = Ye.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ht = {
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
const Ut = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), S = (a, I) => {
  const A = Bt(
    ({
      color: $ = "currentColor",
      size: f = 24,
      strokeWidth: D = 2,
      absoluteStrokeWidth: p,
      className: C = "",
      children: c,
      ...j
    }, x) => lt(
      "svg",
      {
        ref: x,
        ...Ht,
        width: f,
        height: f,
        stroke: $,
        strokeWidth: p ? Number(D) * 24 / Number(f) : D,
        className: ["lucide", `lucide-${Ut(a)}`, C].join(" "),
        ...j
      },
      [
        ...I.map(([E, w]) => lt(E, w)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return A.displayName = `${a}`, A;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = S("AlertCircle", [
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
const Zt = S("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = S("Archive", [
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
const Vt = S("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = S("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = S("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = S("Calendar", [
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
const Kt = S("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = S("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = S("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = S("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = S("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = S("CircleUser", [
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
const ft = S("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = S("FileText", [
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
const ts = S("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = S("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = S("Inbox", [
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
const rs = S("LogOut", [
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
const as = S("MailOpen", [
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
const De = S("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = S("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = S("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = S("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = S("MoreHorizontal", [
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
const is = S("Palette", [
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
const Ve = S("Paperclip", [
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
const cs = S("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = S("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = S("ReplyAll", [
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
const ds = S("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = S("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = S("Save", [
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
const ms = S("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = S("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = S("Settings", [
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
const ve = S("Sparkles", [
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
const hs = S("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = S("Star", [
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
const Oe = S("Tag", [
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
const wt = S("Trash2", [
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
const ps = S("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = S("Wand2", [
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
const we = S("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), fs = ({
  filters: a,
  onFiltersChange: I,
  onClearFilters: A
}) => {
  const [$, f] = v(!1), D = (c, j) => {
    I({
      ...a,
      [c]: j
    });
  }, p = (c, j) => {
    I({
      ...a,
      dateRange: {
        ...a.dateRange,
        [c]: j
      }
    });
  }, C = () => a.readStatus !== "all" || a.starred || a.hasAttachment || a.sortBy !== "newest" || a.dateRange.from || a.dateRange.to || a.intent !== "all";
  return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => f(!$),
        className: `
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-colors
          ${C() ? "bg-blue-50 border-blue-200 text-blue-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
        `,
        children: [
          /* @__PURE__ */ e.jsx(ts, { className: "w-4 h-4" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium", children: "Filters" }),
          C() && /* @__PURE__ */ e.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: "Active" }),
          /* @__PURE__ */ e.jsx(Qe, { className: `w-4 h-4 transition-transform ${$ ? "rotate-180" : ""}` })
        ]
      }
    ),
    $ && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ e.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Filter Emails" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
          C() && /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: A,
              className: "text-xs text-gray-500 hover:text-gray-700",
              children: "Clear all"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => f(!1),
              className: "text-gray-400 hover:text-gray-600",
              children: /* @__PURE__ */ e.jsx(we, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-4", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Read Status" }),
          /* @__PURE__ */ e.jsx("div", { className: "flex space-x-2", children: [
            { value: "all", label: "All", icon: De },
            { value: "unread", label: "Unread", icon: De },
            { value: "read", label: "Read", icon: as }
          ].map(({ value: c, label: j, icon: x }) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => D("readStatus", c),
              className: `
                      flex items-center space-x-1 px-3 py-2 rounded-md text-xs transition-colors
                      ${a.readStatus === c ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}
                    `,
              children: [
                /* @__PURE__ */ e.jsx(x, { className: "w-3 h-3" }),
                /* @__PURE__ */ e.jsx("span", { children: j })
              ]
            },
            c
          )) })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Quick Filters" }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ e.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.starred,
                  onChange: (c) => D("starred", c.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsx(Fe, { className: "w-4 h-4 ml-2 mr-1 text-yellow-500" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: "Starred only" })
            ] }),
            /* @__PURE__ */ e.jsxs("label", { className: "flex items-center", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.hasAttachment,
                  onChange: (c) => D("hasAttachment", c.target.checked),
                  className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ e.jsx(Ve, { className: "w-4 h-4 ml-2 mr-1 text-gray-500" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: "Has attachments" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Sort by" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: a.sortBy,
              onChange: (c) => D("sortBy", c.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "newest", children: "Newest first" }),
                /* @__PURE__ */ e.jsx("option", { value: "oldest", children: "Oldest first" }),
                /* @__PURE__ */ e.jsx("option", { value: "subject-az", children: "Subject (A-Z)" }),
                /* @__PURE__ */ e.jsx("option", { value: "subject-za", children: "Subject (Z-A)" }),
                /* @__PURE__ */ e.jsx("option", { value: "sender-az", children: "Sender (A-Z)" }),
                /* @__PURE__ */ e.jsx("option", { value: "sender-za", children: "Sender (Z-A)" }),
                /* @__PURE__ */ e.jsx("option", { value: "starred-first", children: "Starred first" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
            /* @__PURE__ */ e.jsx(pt, { className: "w-4 h-4 inline mr-1" }),
            "Date Range"
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "From" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "date",
                  value: a.dateRange.from,
                  onChange: (c) => p("from", c.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-xs text-gray-500 mb-1", children: "To" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "date",
                  value: a.dateRange.to,
                  onChange: (c) => p("to", c.target.value),
                  className: "w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Type" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: a.intent,
              onChange: (c) => D("intent", c.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "all", children: "All types" }),
                /* @__PURE__ */ e.jsx("option", { value: "new", children: "New emails" }),
                /* @__PURE__ */ e.jsx("option", { value: "meetings", children: "Meeting invites" }),
                /* @__PURE__ */ e.jsx("option", { value: "notifications", children: "System notifications" }),
                /* @__PURE__ */ e.jsx("option", { value: "campaigns", children: "Marketing campaigns" }),
                /* @__PURE__ */ e.jsx("option", { value: "support", children: "Support requests" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, gs = ({ onMenuToggle: a, onSearch: I, onFiltersChange: A, filters: $ }) => {
  const [f, D] = v(""), [p, C] = v(!1), [c, j] = v(!1), x = me(null), E = me(null);
  Ee(() => {
    const z = (q) => {
      x.current && !x.current.contains(q.target) && C(!1), E.current && !E.current.contains(q.target) && j(!1);
    };
    return document.addEventListener("mousedown", z), () => document.removeEventListener("mousedown", z);
  }, []);
  const w = (z) => {
    const q = z.target.value;
    D(q), I(q);
  }, k = () => {
    console.log("Logging out..."), j(!1);
  }, o = () => {
    A({
      readStatus: "all",
      starred: !1,
      hasAttachment: !1,
      sortBy: "newest",
      dateRange: { from: "", to: "" },
      intent: "all"
    });
  };
  return /* @__PURE__ */ e.jsxs("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between relative z-50", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: a,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden",
          children: /* @__PURE__ */ e.jsx(os, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e.jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-white font-bold text-sm", children: "M" }) }),
        /* @__PURE__ */ e.jsx("h1", { className: "text-xl font-semibold text-gray-900", children: "Mail" })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 max-w-2xl mx-8", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ e.jsx(ms, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search mail",
            value: f,
            onChange: w,
            className: "w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 transition-all"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        fs,
        {
          filters: $,
          onFiltersChange: A,
          onClearFilters: o
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", ref: x, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => C(!p),
            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
            children: /* @__PURE__ */ e.jsx(_e, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        p && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: [
          /* @__PURE__ */ e.jsx("div", { className: "px-4 py-2 border-b border-gray-100", children: /* @__PURE__ */ e.jsx("h3", { className: "font-semibold text-gray-900", children: "Settings" }) }),
          /* @__PURE__ */ e.jsxs("button", { className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx(Jt, { className: "w-4 h-4 text-gray-500" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: "Notification Preferences" })
          ] }),
          /* @__PURE__ */ e.jsxs("button", { className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-gray-500" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: "Signature Setup" })
          ] }),
          /* @__PURE__ */ e.jsxs("button", { className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx(_e, { className: "w-4 h-4 text-gray-500" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: "Email Display Options" })
          ] }),
          /* @__PURE__ */ e.jsxs("button", { className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx(_e, { className: "w-4 h-4 text-gray-500" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: "General Settings" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "relative", ref: E, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => j(!c),
            className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors",
            children: /* @__PURE__ */ e.jsx(ps, { className: "w-5 h-5 text-blue-600" })
          }
        ),
        c && /* @__PURE__ */ e.jsxs("div", { className: "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "px-4 py-3 border-b border-gray-100", children: [
            /* @__PURE__ */ e.jsx("p", { className: "font-semibold text-gray-900", children: "John Doe" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: "john.doe@company.com" })
          ] }),
          /* @__PURE__ */ e.jsxs("button", { className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3", children: [
            /* @__PURE__ */ e.jsx(ut, { className: "w-4 h-4 text-gray-500" }),
            /* @__PURE__ */ e.jsx("span", { className: "text-gray-700", children: "View Profile" })
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: k,
              className: "w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3 text-red-600",
              children: [
                /* @__PURE__ */ e.jsx(rs, { className: "w-4 h-4" }),
                /* @__PURE__ */ e.jsx("span", { children: "Logout" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, ys = ({
  activeItem: a,
  onItemSelect: I,
  isOpen: A,
  onComposeClick: $,
  customLabels: f,
  onManageLabels: D,
  emailCounts: p
}) => {
  const [C, c] = v(!0), j = [
    { id: "inbox", label: "Inbox", icon: yt, count: p.inbox },
    { id: "sent", label: "Sent", icon: Je, count: p.sent },
    { id: "drafts", label: "Drafts", icon: gt, count: p.drafts },
    { id: "starred", label: "Starred", icon: Fe, count: p.starred },
    { id: "snoozed", label: "Snoozed", icon: ft, count: p.snoozed }
  ], x = f.filter((o) => o.isSystem), E = f.filter((o) => !o.isSystem), w = (o) => p[`label-${o}`] || p[`custom-label-${o}`] || 0, k = (o, z) => {
    I(z ? `label-${o}` : `custom-label-${o}`);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    A && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",
        onClick: () => {
        }
      }
    ),
    /* @__PURE__ */ e.jsx("aside", { className: `
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${A ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `, children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-full", children: [
      /* @__PURE__ */ e.jsx("div", { className: "p-4", children: /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: $,
          className: "w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2",
          children: [
            /* @__PURE__ */ e.jsx(Pe, { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsx("span", { children: "Compose" })
          ]
        }
      ) }),
      /* @__PURE__ */ e.jsxs("nav", { className: "flex-1 px-2 space-y-1 overflow-y-auto thin-scrollbar", children: [
        j.map((o) => {
          const z = o.icon, q = a === o.id;
          return /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => I(o.id),
              className: `
                    w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${q ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                  `,
              children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ e.jsx(z, { className: "w-5 h-5" }),
                  /* @__PURE__ */ e.jsx("span", { children: o.label })
                ] }),
                o.count > 0 && /* @__PURE__ */ e.jsx("span", { className: `
                      px-2 py-1 text-xs rounded-full
                      ${q ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}
                    `, children: o.count })
              ]
            },
            o.id
          );
        }),
        /* @__PURE__ */ e.jsxs("div", { className: "pt-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between px-3 py-2", children: [
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => c(!C),
                className: "flex items-center space-x-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1",
                children: [
                  /* @__PURE__ */ e.jsx(Oe, { className: "w-5 h-5" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Labels" }),
                  C ? /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Xt, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: D,
                className: "p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors",
                title: "Manage labels",
                children: /* @__PURE__ */ e.jsx(_e, { className: "w-4 h-4" })
              }
            )
          ] }),
          C && /* @__PURE__ */ e.jsxs("div", { className: "ml-4 mt-2 space-y-1", children: [
            x.map((o) => /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => k(o.id, !0),
                className: `
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
                        ${a === `label-${o.id}` ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                      `,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-3 h-3 rounded-full",
                        style: { backgroundColor: o.color }
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { children: o.name })
                  ] }),
                  w(o.id) && /* @__PURE__ */ e.jsx("span", { className: `
                          px-2 py-1 text-xs rounded-full
                          ${a === `label-${o.id}` ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}
                        `, children: w(o.id) })
                ]
              },
              o.id
            )),
            x.length > 0 && E.length > 0 && /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-200 my-2" }),
            E.map((o) => /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: () => k(o.id, !1),
                className: `
                        w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors
                        ${a === `custom-label-${o.id}` ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}
                      `,
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-3 h-3 rounded-full",
                        style: { backgroundColor: o.color }
                      }
                    ),
                    /* @__PURE__ */ e.jsx("span", { children: o.name })
                  ] }),
                  w(o.id) && /* @__PURE__ */ e.jsx("span", { className: `
                          px-2 py-1 text-xs rounded-full
                          ${a === `custom-label-${o.id}` ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-600"}
                        `, children: w(o.id) })
                ]
              },
              o.id
            )),
            /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: D,
                className: "w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",
                children: [
                  /* @__PURE__ */ e.jsx(Pe, { className: "w-3 h-3" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Add label" })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }) })
  ] });
}, bs = ({
  selectedLabels: a,
  availableLabels: I,
  onLabelsChange: A,
  onCreateLabel: $,
  placeholder: f = "Add labels...",
  className: D = "",
  maxHeight: p = "max-h-48"
}) => {
  const [C, c] = v(!1), [j, x] = v(""), [E, w] = v(!1), [k, o] = v(""), [z, q] = v("#3B82F6"), H = me(null), F = me(null);
  Ee(() => {
    const y = (B) => {
      H.current && !H.current.contains(B.target) && (c(!1), w(!1), x(""), o(""));
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []);
  const V = I.filter(
    (y) => y.name.toLowerCase().includes(j.toLowerCase()) && !a.includes(y.id)
  ), Z = I.filter(
    (y) => a.includes(y.id)
  ), Y = (y) => {
    a.includes(y) ? A(a.filter((B) => B !== y)) : A([...a, y]);
  }, X = (y) => {
    A(a.filter((B) => B !== y));
  }, Q = () => {
    if (!k.trim() || !$) return;
    const y = I.find(
      (B) => B.name.toLowerCase() === k.trim().toLowerCase()
    );
    y ? Y(y.id) : $({
      name: k.trim(),
      color: z,
      isSystem: !1
    }), o(""), w(!1), x("");
  }, te = (y) => {
    y.key === "Enter" ? (y.preventDefault(), E ? Q() : j.trim() && $ && (o(j.trim()), w(!0))) : y.key === "Escape" && (c(!1), w(!1), x(""));
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: H, className: `relative ${D}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        onClick: () => {
          c(!0), setTimeout(() => {
            var y;
            return (y = F.current) == null ? void 0 : y.focus();
          }, 0);
        },
        className: "min-h-[2.5rem] p-2 border border-gray-300 rounded-lg cursor-text focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          Z.map((y) => /* @__PURE__ */ e.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-sm font-medium",
              style: {
                backgroundColor: `${y.color}20`,
                color: y.color,
                border: `1px solid ${y.color}40`
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: y.color }
                  }
                ),
                y.name,
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: (B) => {
                      B.stopPropagation(), X(y.id);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ e.jsx(we, { className: "w-3 h-3" })
                  }
                )
              ]
            },
            y.id
          )),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              ref: F,
              type: "text",
              value: j,
              onChange: (y) => x(y.target.value),
              onKeyDown: te,
              onFocus: () => c(!0),
              placeholder: a.length === 0 ? f : "",
              className: "flex-1 min-w-[120px] border-none outline-none bg-transparent text-sm"
            }
          )
        ] })
      }
    ),
    C && /* @__PURE__ */ e.jsxs("div", { className: `absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${p} overflow-y-auto`, children: [
      E && $ && /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-gray-100 bg-blue-50", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
          /* @__PURE__ */ e.jsx(Pe, { className: "w-4 h-4 text-blue-600" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-sm font-medium text-blue-900", children: "Create new label" })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: k,
              onChange: (y) => o(y.target.value),
              onKeyDown: te,
              placeholder: "Label name...",
              className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "color",
              value: z,
              onChange: (y) => q(y.target.value),
              className: "w-8 h-8 border border-gray-300 rounded cursor-pointer"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: Q,
              disabled: !k.trim(),
              className: "px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded text-sm transition-colors",
              children: /* @__PURE__ */ e.jsx(xt, { className: "w-4 h-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "py-1", children: V.length === 0 && !E ? /* @__PURE__ */ e.jsx("div", { className: "px-3 py-2 text-sm text-gray-500 text-center", children: j ? /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("p", { children: [
          'No labels found for "',
          j,
          '"'
        ] }),
        $ && /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              o(j), w(!0);
            },
            className: "mt-1 text-blue-600 hover:text-blue-700 text-sm",
            children: [
              'Create "',
              j,
              '" label'
            ]
          }
        )
      ] }) : "No available labels" }) : V.map((y) => /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => Y(y.id),
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2",
          children: [
            /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full",
                style: { backgroundColor: y.color }
              }
            ),
            /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-900", children: y.name }),
            y.description && /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-500 truncate", children: [
              "- ",
              y.description
            ] })
          ]
        },
        y.id
      )) }),
      !E && $ && j && V.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-100", children: /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => {
            o(j), w(!0);
          },
          className: "w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 text-blue-600",
          children: [
            /* @__PURE__ */ e.jsx(Pe, { className: "w-4 h-4" }),
            /* @__PURE__ */ e.jsxs("span", { className: "text-sm", children: [
              'Create "',
              j,
              '" label'
            ] })
          ]
        }
      ) })
    ] })
  ] });
}, jt = ({
  emailIds: a,
  currentLabels: I,
  availableLabels: A,
  onLabelsChange: $,
  onCreateLabel: f,
  className: D = ""
}) => {
  const [p, C] = v(!1), [c, j] = v(I), x = me(null);
  Ee(() => {
    j(I);
  }, [I]), Ee(() => {
    const k = (o) => {
      x.current && !x.current.contains(o.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []);
  const E = (k) => {
    j(k), $(a, k);
  }, w = A.filter(
    (k) => c.includes(k.id)
  );
  return /* @__PURE__ */ e.jsxs("div", { ref: x, className: `relative ${D}`, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: () => C(!p),
        className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
        title: "Manage labels",
        children: [
          /* @__PURE__ */ e.jsx(Oe, { className: "w-4 h-4" }),
          /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: "Labels" }),
          c.length > 0 && /* @__PURE__ */ e.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full", children: c.length })
        ]
      }
    ),
    p && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "p-3 border-b border-gray-100", children: [
        /* @__PURE__ */ e.jsxs("h3", { className: "text-sm font-semibold text-gray-900 mb-2", children: [
          "Manage Labels ",
          a.length > 1 && `(${a.length} emails)`
        ] }),
        c.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 mb-2", children: "Current labels:" }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-wrap gap-1", children: w.map((k) => /* @__PURE__ */ e.jsxs(
            "span",
            {
              className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
              style: {
                backgroundColor: `${k.color}20`,
                color: k.color,
                border: `1px solid ${k.color}40`
              },
              children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "w-2 h-2 rounded-full mr-1",
                    style: { backgroundColor: k.color }
                  }
                ),
                k.name,
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => {
                      const o = c.filter((z) => z !== k.id);
                      E(o);
                    },
                    className: "ml-1 hover:bg-black hover:bg-opacity-10 rounded-full p-0.5 transition-colors",
                    children: /* @__PURE__ */ e.jsx(we, { className: "w-2 h-2" })
                  }
                )
              ]
            },
            k.id
          )) })
        ] }),
        /* @__PURE__ */ e.jsx(
          bs,
          {
            selectedLabels: c,
            availableLabels: A,
            onLabelsChange: E,
            onCreateLabel: f,
            placeholder: "Add or create labels...",
            maxHeight: "max-h-32"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-3", children: /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => C(!1),
          className: "w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm",
          children: "Done"
        }
      ) })
    ] })
  ] });
}, vs = ({
  emails: a,
  selectedEmailId: I,
  onEmailSelect: A,
  onStarToggle: $,
  onCheckToggle: f,
  checkedEmails: D,
  activeSection: p,
  customLabels: C,
  onEmailLabelsChange: c,
  onCreateLabel: j
}) => {
  const [x, E] = v(320), [w, k] = v(!1), o = me(null), z = me(0), q = me(320), H = (l, i) => {
    i.stopPropagation(), A(l, !0);
  }, F = (l) => {
    const i = new Date(l), U = ((/* @__PURE__ */ new Date()).getTime() - i.getTime()) / (1e3 * 60 * 60);
    return U < 24 ? i.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : U < 168 ? i.toLocaleDateString("en-US", { weekday: "short" }) : i.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, V = (l) => {
    switch (l) {
      case "meeting":
        return {
          text: "Meeting",
          icon: pt,
          color: "bg-blue-100 text-blue-800",
          iconColor: "text-blue-600"
        };
      case "announcement":
        return {
          text: "Announcement",
          icon: ns,
          color: "bg-purple-100 text-purple-800",
          iconColor: "text-purple-600"
        };
      case "system":
        return {
          text: "System Alert",
          icon: Zt,
          color: "bg-red-100 text-red-800",
          iconColor: "text-red-600"
        };
      case "report":
        return {
          text: "Report",
          icon: Qt,
          color: "bg-green-100 text-green-800",
          iconColor: "text-green-600"
        };
      case "feedback":
        return {
          text: "Feedback",
          icon: ls,
          color: "bg-orange-100 text-orange-800",
          iconColor: "text-orange-600"
        };
      case "general":
        return {
          text: "General",
          icon: De,
          color: "bg-gray-100 text-gray-800",
          iconColor: "text-gray-600"
        };
      case "new":
        return {
          text: "New",
          icon: De,
          color: "bg-blue-100 text-blue-800",
          iconColor: "text-blue-600"
        };
      default:
        return {
          text: "New",
          icon: De,
          color: "bg-blue-100 text-blue-800",
          iconColor: "text-blue-600"
        };
    }
  }, Z = (l) => {
    switch (l) {
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
        if (l.startsWith("custom-label-")) {
          const i = l.replace("custom-label-", ""), N = C.find((U) => U.id === i);
          return (N == null ? void 0 : N.name) || "Unknown Label";
        }
        return "Inbox";
    }
  }, Y = (l) => {
    switch (l) {
      case "inbox":
        return yt;
      case "sent":
        return Je;
      case "drafts":
        return gt;
      case "starred":
        return Fe;
      case "snoozed":
        return ft;
      default:
        return Oe;
    }
  }, X = (l) => l.customLabels ? l.customLabels.map((i) => C.find((N) => N.id === i)).filter(Boolean) : [], Q = ({ section: l }) => {
    const i = Y(l), N = Z(l);
    return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center h-96 text-center p-8", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ e.jsx(i, { className: "w-10 h-10 text-gray-400" }) }),
      /* @__PURE__ */ e.jsxs("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: [
        "No emails in ",
        N
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "text-gray-500 max-w-sm", children: l === "drafts" ? "Your draft emails will appear here when you save them." : l === "sent" ? "Emails you send will appear here." : l === "starred" ? "Star important emails to find them quickly here." : l === "snoozed" ? "Snoozed emails will appear here when it's time to deal with them." : l.startsWith("custom-label-") || l.startsWith("label-") ? `Emails with the "${N}" label will appear here.` : "No emails available in this section yet." })
    ] });
  }, te = Array.from(D), y = te.length > 0, B = Ge((l) => {
    l.preventDefault(), k(!0), z.current = l.clientX, q.current = x, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
  }, [x]), ee = Ge(
    (l) => {
      if (!w) return;
      l.preventDefault();
      const i = l.clientX - z.current, N = q.current + i, U = Math.max(240, Math.min(N, 800));
      requestAnimationFrame(() => {
        E(U);
      });
    },
    [w]
  ), m = Ge(() => {
    k(!1), document.body.style.cursor = "", document.body.style.userSelect = "";
  }, []);
  return ze.useEffect(() => (w && (document.addEventListener("mousemove", ee, { passive: !1 }), document.addEventListener("mouseup", m)), () => {
    document.removeEventListener("mousemove", ee), document.removeEventListener("mouseup", m), document.body.style.cursor = "", document.body.style.userSelect = "";
  }), [w, ee, m]), a.length === 0 ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: o,
      style: { width: `${x}px`, minWidth: "240px", maxWidth: "800px" },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: B,
            children: /* @__PURE__ */ e.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: Z(p) }) }),
        /* @__PURE__ */ e.jsx(Q, { section: p })
      ]
    }
  ) : /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "bg-white border-r border-gray-200 relative",
      ref: o,
      style: { width: `${x}px`, minWidth: "240px", maxWidth: "800px" },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "absolute top-0 right-0 h-full w-2 cursor-col-resize flex items-center justify-center hover:bg-blue-50 transition-colors group z-10",
            onMouseDown: B,
            children: /* @__PURE__ */ e.jsx("div", { className: "bg-gray-300 group-hover:bg-blue-400 h-6 w-0.5 rounded-full transition-colors" })
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "p-4 border-b border-gray-200", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: Z(p) }),
            /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500 mt-1", children: [
              a.length,
              " email",
              a.length !== 1 ? "s" : ""
            ] })
          ] }),
          y && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ e.jsx(
              jt,
              {
                emailIds: te,
                currentLabels: [],
                availableLabels: C,
                onLabelsChange: c,
                onCreateLabel: j
              }
            ),
            /* @__PURE__ */ e.jsx("button", { className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors", children: /* @__PURE__ */ e.jsx(bt, { className: "w-4 h-4" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "divide-y divide-gray-100 overflow-y-auto max-h-[calc(100vh-8rem)] thin-scrollbar", children: a.map((l) => {
          const i = I === l.id, N = D.has(l.id), U = X(l);
          return /* @__PURE__ */ e.jsx(
            "div",
            {
              className: `
                p-4 cursor-pointer transition-colors hover:bg-gray-50
                ${i ? "bg-blue-50 border-r-2 border-blue-500" : ""}
                ${l.isRead ? "" : "bg-blue-25"}
              `,
              onClick: () => A(l),
              onDoubleClick: (R) => H(l, R),
              title: "Double-click to open in full-page view",
              children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-start space-x-3", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: (R) => {
                      R.stopPropagation(), f(l.id);
                    },
                    className: "mt-1 text-gray-400 hover:text-gray-600 transition-colors",
                    children: N ? /* @__PURE__ */ e.jsx(Kt, { className: "w-4 h-4 text-blue-600" }) : /* @__PURE__ */ e.jsx(hs, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: (R) => {
                      R.stopPropagation(), $(l.id);
                    },
                    className: "mt-1 transition-colors",
                    children: /* @__PURE__ */ e.jsx(
                      Fe,
                      {
                        className: `w-4 h-4 ${l.isStarred ? "text-yellow-500 fill-yellow-500" : "text-gray-400 hover:text-yellow-500"}`
                      }
                    )
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 min-w-0", children: [
                      /* @__PURE__ */ e.jsx("p", { className: `
                        text-sm truncate
                        ${l.isRead ? "font-normal text-gray-500" : "font-bold text-black"}
                      `, children: l.sender }),
                      l.intentLabel && /* @__PURE__ */ e.jsxs("div", { className: `
                          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium flex-shrink-0
                          ${V(l.intentLabel).color}
                        `, children: [
                        ze.createElement(V(l.intentLabel).icon, {
                          className: `w-3 h-3 mr-1 ${V(l.intentLabel).iconColor}`
                        }),
                        V(l.intentLabel).text
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-xs text-gray-500 ml-2 flex-shrink-0", children: F(l.timestamp) })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: `
                    text-sm mt-1 truncate
                    ${l.isRead ? "font-normal text-gray-500" : "font-bold text-black"}
                  `, children: l.subject }),
                  /* @__PURE__ */ e.jsx("p", { className: `
                    text-sm mt-1 truncate
                    ${l.isRead ? "text-gray-400" : "text-gray-700 font-medium"}
                  `, children: l.preview }),
                  U.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1 mt-2", children: [
                    U.slice(0, 3).map((R) => /* @__PURE__ */ e.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                        style: {
                          backgroundColor: `${R.color}15`,
                          color: R.color,
                          border: `1px solid ${R.color}30`
                        },
                        children: [
                          /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              className: "w-2 h-2 rounded-full mr-1",
                              style: { backgroundColor: R.color }
                            }
                          ),
                          R.name
                        ]
                      },
                      R.id
                    )),
                    U.length > 3 && /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600", children: [
                      "+",
                      U.length - 3,
                      " more"
                    ] })
                  ] })
                ] })
              ] })
            },
            l.id
          );
        }) })
      ]
    }
  );
}, ht = ({
  email: a,
  onClose: I,
  onBack: A,
  isFullPage: $,
  aiReplyState: f,
  onGenerateAiReply: D,
  onAiReplyStateChange: p,
  customLabels: C,
  onEmailLabelsChange: c,
  onCreateLabel: j
}) => {
  const [x, E] = v(""), [w, k] = v(!1), [o, z] = v(/* @__PURE__ */ new Set());
  if (!a)
    return /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("div", { className: "w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ e.jsx("span", { className: "text-4xl text-gray-400", children: "📧" }) }),
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "Select an email" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-gray-500", children: "Choose an email from the list to view the conversation" })
    ] }) });
  const q = (m) => new Date(m).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), H = () => {
    x.trim() && (E(""), k(!1), p({ ...f, showAiReply: !1, generatedReply: "", replyType: void 0 }));
  }, F = (m = !1) => {
    a && D(a, f.tone, m ? "reply-all" : "reply");
  }, V = (m) => {
    p({ ...f, tone: m });
  }, Z = () => {
    E(f.generatedReply), k(!0), p({ ...f, showAiReply: !1 });
  }, Y = () => {
    a && D(a, f.tone);
  }, X = () => {
    if (a) {
      const m = B[B.length - 1], l = /* @__PURE__ */ new Set([
        m.senderEmail,
        ...m.to,
        ...m.cc || []
      ]), i = `

--- Reply All ---
To: ${Array.from(l).join(", ")}

`;
      E(i), k(!0), p({ ...f, showAiReply: !1, generatedReply: "", replyType: void 0 });
    }
  }, Q = () => {
    if (a) {
      const m = B[B.length - 1], l = `

--- Forwarded Message ---
From: ${m.sender} <${m.senderEmail}>
Date: ${q(m.timestamp)}
Subject: ${m.subject}
To: ${m.to.join(", ")}
${m.cc ? `Cc: ${m.cc.join(", ")}
` : ""}
${m.content}`;
      E(l), k(!0), p({ ...f, showAiReply: !1, generatedReply: "", replyType: void 0 });
    }
  }, te = (m) => {
    z((l) => {
      const i = new Set(l);
      return i.has(m) ? i.delete(m) : i.add(m), i;
    });
  }, y = (m) => m.customLabels ? m.customLabels.map((l) => C.find((i) => i.id === l)).filter(Boolean) : [], B = [...a.messages].sort(
    (m, l) => new Date(m.timestamp).getTime() - new Date(l.timestamp).getTime()
  ), ee = y(a);
  return /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col bg-white", children: [
    /* @__PURE__ */ e.jsx("div", { className: "border-b border-gray-200 p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0 flex items-center space-x-3", children: [
        $ && A && /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: A,
            className: "flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors",
            title: "Back to email list",
            children: /* @__PURE__ */ e.jsx(Vt, { className: "w-5 h-5 text-gray-600" })
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-semibold text-gray-900 truncate", children: a.subject }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4 mt-2", children: [
            /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-gray-500", children: [
              a.messages.length,
              " message",
              a.messages.length !== 1 ? "s" : ""
            ] }),
            ee.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap gap-1", children: [
              ee.slice(0, 3).map((m) => /* @__PURE__ */ e.jsxs(
                "span",
                {
                  className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium",
                  style: {
                    backgroundColor: `${m.color}15`,
                    color: m.color,
                    border: `1px solid ${m.color}30`
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-2 h-2 rounded-full mr-1",
                        style: { backgroundColor: m.color }
                      }
                    ),
                    m.name
                  ]
                },
                m.id
              )),
              ee.length > 3 && /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600", children: [
                "+",
                ee.length - 3,
                " more"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 ml-4", children: [
        /* @__PURE__ */ e.jsx(
          jt,
          {
            emailIds: [a.id],
            currentLabels: a.customLabels || [],
            availableLabels: C,
            onLabelsChange: c,
            onCreateLabel: j
          }
        ),
        /* @__PURE__ */ e.jsx("button", { className: "p-2 hover:bg-gray-100 rounded-lg transition-colors", children: /* @__PURE__ */ e.jsx(Yt, { className: "w-5 h-5 text-gray-600" }) }),
        /* @__PURE__ */ e.jsx("button", { className: "p-2 hover:bg-gray-100 rounded-lg transition-colors", children: /* @__PURE__ */ e.jsx(Fe, { className: `w-5 h-5 ${a.isStarred ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}` }) }),
        /* @__PURE__ */ e.jsx("button", { className: "p-2 hover:bg-gray-100 rounded-lg transition-colors", children: /* @__PURE__ */ e.jsx(bt, { className: "w-5 h-5 text-gray-600" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsx("div", { className: "max-w-5xl mx-auto", children: B.map((m, l) => {
      const i = o.has(m.id) || l === B.length - 1, N = l === B.length - 1;
      return /* @__PURE__ */ e.jsx("div", { className: "border-b border-gray-100 last:border-b-0", children: /* @__PURE__ */ e.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: `cursor-pointer ${N ? "" : "hover:bg-gray-50 -m-2 p-2 rounded-lg"}`,
            onClick: () => !N && te(m.id),
            children: [
              /* @__PURE__ */ e.jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ e.jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ e.jsx("span", { className: "text-white font-semibold text-sm", children: m.sender.charAt(0).toUpperCase() }) }),
                /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ e.jsx("p", { className: "font-semibold text-gray-900", children: m.sender }),
                    !N && /* @__PURE__ */ e.jsx("button", { className: "text-gray-400 hover:text-gray-600", children: i ? /* @__PURE__ */ e.jsx(es, { className: "w-4 h-4" }) : /* @__PURE__ */ e.jsx(Qe, { className: "w-4 h-4" }) })
                  ] }),
                  /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500", children: q(m.timestamp) })
                ] })
              ] }) }),
              i && /* @__PURE__ */ e.jsxs("div", { className: "mb-4 bg-gray-50 rounded-lg p-4 space-y-2", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 text-sm", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-700", children: "From:" }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mt-1", children: `${m.sender} <${m.senderEmail}>` })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-700", children: "Subject:" }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mt-1", children: m.subject })
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-1 gap-4 text-sm", children: [
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-700", children: "To:" }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mt-1", children: m.to.join(", ") })
                  ] }),
                  m.cc && m.cc.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-700", children: "CC:" }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mt-1", children: m.cc.join(", ") })
                  ] }),
                  m.bcc && m.bcc.length > 0 && /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-700", children: "BCC:" }),
                    /* @__PURE__ */ e.jsx("p", { className: "text-gray-600 mt-1", children: m.bcc.join(", ") })
                  ] })
                ] })
              ] })
            ]
          }
        ),
        i && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx("div", { className: "prose max-w-none mb-6", children: /* @__PURE__ */ e.jsx("div", { className: "text-gray-800 leading-relaxed whitespace-pre-wrap", children: m.content }) }),
          N && /* @__PURE__ */ e.jsxs("div", { className: "space-y-4 pt-4 border-t border-gray-100", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 flex-wrap gap-2", children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => k(!w),
                  className: "flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",
                  children: [
                    /* @__PURE__ */ e.jsx(ds, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Reply" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => F(!1),
                  disabled: f.isGenerating,
                  className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
                  children: [
                    /* @__PURE__ */ e.jsx(ve, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e.jsx("span", { children: f.isGenerating ? "Generating..." : "Reply with AI" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => X(),
                  className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    /* @__PURE__ */ e.jsx(mt, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Reply All" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => F(!0),
                  disabled: f.isGenerating,
                  className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
                  children: [
                    /* @__PURE__ */ e.jsx(mt, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e.jsx(ve, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e.jsx("span", { children: f.isGenerating ? "Generating..." : "Reply All with AI" })
                  ]
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  onClick: () => Q(),
                  className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    /* @__PURE__ */ e.jsx(ss, { className: "w-4 h-4" }),
                    /* @__PURE__ */ e.jsx("span", { children: "Forward" })
                  ]
                }
              )
            ] }),
            f.showAiReply && /* @__PURE__ */ e.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4", children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ e.jsx(ve, { className: "w-4 h-4 text-purple-600" }),
                  /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-gray-900", children: "AI Generated Reply" })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ e.jsxs(
                    "select",
                    {
                      value: f.tone,
                      onChange: (U) => V(U.target.value),
                      className: "text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500",
                      children: [
                        /* @__PURE__ */ e.jsx("option", { value: "professional", children: "Professional" }),
                        /* @__PURE__ */ e.jsx("option", { value: "friendly", children: "Friendly" }),
                        /* @__PURE__ */ e.jsx("option", { value: "concise", children: "Concise" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: Y,
                      className: "text-purple-600 hover:text-purple-700 p-1",
                      title: "Regenerate",
                      children: /* @__PURE__ */ e.jsx(vt, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-200 rounded p-3 mb-3", children: /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: f.generatedReply }) }),
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: Z,
                    className: "flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm",
                    children: /* @__PURE__ */ e.jsx("span", { children: "Use This Reply" })
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    onClick: () => p({ ...f, showAiReply: !1, replyType: void 0 }),
                    className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
                    children: "Dismiss"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        !i && !N && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-500 truncate", children: [
          m.content.substring(0, 100),
          "..."
        ] })
      ] }) }, m.id);
    }) }) }),
    w && /* @__PURE__ */ e.jsx("div", { className: "border-t border-gray-200 p-6 bg-gray-50", children: /* @__PURE__ */ e.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: x.includes("--- Reply All ---") ? "Reply to All Recipients" : x.includes("--- Forwarded Message ---") ? "Forward Message" : "Reply" }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-gray-600 space-y-1 bg-white p-3 rounded-lg border", children: [
          /* @__PURE__ */ e.jsxs("p", { children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: "To:" }),
            " ",
            x.includes("--- Reply All ---") ? (() => {
              const m = B[B.length - 1], l = /* @__PURE__ */ new Set([
                m.senderEmail,
                ...m.to,
                ...m.cc || []
              ]);
              return Array.from(l).join(", ");
            })() : x.includes("--- Forwarded Message ---") ? "Enter recipient email(s)" : a.messages[a.messages.length - 1].senderEmail
          ] }),
          /* @__PURE__ */ e.jsxs("p", { children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: "Subject:" }),
            " ",
            x.includes("--- Forwarded Message ---") ? `Fwd: ${a.subject}` : `Re: ${a.subject}`
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "mb-3", children: [
        /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
          "Message Content",
          /* @__PURE__ */ e.jsx("span", { className: "text-gray-500 font-normal", children: " - Type your reply below" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "textarea",
          {
            value: x,
            onChange: (m) => E(m.target.value),
            placeholder: `${x.includes("--- Reply All ---") ? "Write your reply to all recipients..." : x.includes("--- Forwarded Message ---") ? "Add a message to forward..." : "Write your reply..."}`,
            className: "w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          }
        )
      ] }),
      x === f.generatedReply && f.generatedReply && /* @__PURE__ */ e.jsxs("div", { className: "mb-3 text-sm text-purple-600 flex items-center space-x-1 bg-purple-50 p-2 rounded", children: [
        /* @__PURE__ */ e.jsx(ve, { className: "w-3 h-3" }),
        /* @__PURE__ */ e.jsx("span", { children: "Using AI-generated reply" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => k(!1),
            className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
          x !== f.generatedReply && !f.showAiReply && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => F(x.includes("--- Reply All ---")),
              disabled: f.isGenerating,
              className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors",
              children: [
                /* @__PURE__ */ e.jsx(ve, { className: "w-4 h-4" }),
                /* @__PURE__ */ e.jsx("span", { children: f.isGenerating ? "Generating..." : "Generate with AI" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: H,
              disabled: !x.trim(),
              className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
              children: x.includes("--- Reply All ---") ? "Send to All" : x.includes("--- Forwarded Message ---") ? "Forward" : "Send Reply"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}, ws = ({
  isOpen: a,
  onClose: I,
  onSend: A,
  onSaveDraft: $,
  initialData: f,
  isPanel: D = !1
}) => {
  const [p, C] = v((f == null ? void 0 : f.to) || []), [c, j] = v((f == null ? void 0 : f.cc) || []), [x, E] = v((f == null ? void 0 : f.bcc) || []), [w, k] = v((f == null ? void 0 : f.subject) || ""), [o, z] = v((f == null ? void 0 : f.body) || ""), [q, H] = v([]), [F, V] = v(!1), [Z, Y] = v(!1), [X, Q] = v({}), [te, y] = v(!1), [B, ee] = v(!1), [m, l] = v(""), [i, N] = v(""), [U, R] = v(""), [se, ue] = v({
    isGenerating: !1,
    showAIPanel: !1,
    generatedContent: "",
    selectedTone: "professional",
    hasGenerated: !1
  }), je = me(null), ke = me(null);
  Ee(() => {
    if (!a) return;
    const s = setInterval(() => {
      (p.length > 0 || w.trim() || o.trim()) && fe(!0);
    }, 3e4);
    return () => clearInterval(s);
  }, [p, w, o, a]), Ee(() => {
    const s = (M) => {
      M.key === "Escape" && a && ye();
    };
    return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [a]);
  const ce = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim()), pe = () => {
    const s = {};
    if (p.length === 0)
      s.to = "At least one recipient is required";
    else {
      const g = p.filter((he) => !ce(he));
      g.length > 0 && (s.to = `Invalid email addresses: ${g.join(", ")}`);
    }
    const M = c.filter((g) => !ce(g));
    M.length > 0 && (s.cc = `Invalid CC email addresses: ${M.join(", ")}`);
    const L = x.filter((g) => !ce(g));
    return L.length > 0 && (s.bcc = `Invalid BCC email addresses: ${L.join(", ")}`), Q(s), Object.keys(s).length === 0;
  }, Ne = (s, M, L, g) => {
    if (s.includes(",") || s.includes(";") || s.includes(" ")) {
      const ae = s.split(/[,;\s]+/).map((be) => be.trim()).filter((be) => be.length > 0).filter((be) => ce(be)), ie = [.../* @__PURE__ */ new Set([...M, ...ae])];
      L(ie), g("");
    } else
      g(s);
  }, Ce = (s, M, L) => {
    L(M.filter((g) => g !== s));
  }, xe = (s) => {
    const M = Array.from(s.target.files || []), L = 25 * 1024 * 1024, g = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain"
    ], ae = M.filter((ie) => ie.size > L ? (alert(`File ${ie.name} is too large. Maximum size is 25MB.`), !1) : g.includes(ie.type) ? !0 : (alert(`File type ${ie.type} is not allowed.`), !1)).map((ie) => ({
      file: ie,
      id: Math.random().toString(36).substr(2, 9)
    }));
    H((ie) => [...ie, ...ae]);
  }, ge = (s) => {
    H((M) => M.filter((L) => L.id !== s));
  }, le = (s) => {
    if (s === 0) return "0 Bytes";
    const M = 1024, L = ["Bytes", "KB", "MB", "GB"], g = Math.floor(Math.log(s) / Math.log(M));
    return parseFloat((s / Math.pow(M, g)).toFixed(2)) + " " + L[g];
  }, u = async (s, M = !1) => {
    if (!w.trim()) {
      alert("Please enter a subject first to generate AI content.");
      return;
    }
    ue((g) => ({ ...g, isGenerating: !0 })), await new Promise((g) => setTimeout(g, 2e3));
    const L = n(w, s, p);
    ue((g) => ({
      ...g,
      isGenerating: !1,
      showAIPanel: !0,
      generatedContent: L,
      hasGenerated: !0
    }));
  }, n = (s, M, L) => {
    const g = s.toLowerCase(), he = L.length > 0 ? L[0].split("@")[0].replace(/[._]/g, " ") : "there";
    let ae = "general";
    return g.includes("meeting") || g.includes("schedule") || g.includes("appointment") ? ae = "meeting" : g.includes("follow") || g.includes("update") ? ae = "followup" : g.includes("thank") || g.includes("appreciation") ? ae = "thanks" : g.includes("request") || g.includes("help") || g.includes("support") ? ae = "request" : g.includes("proposal") || g.includes("offer") ? ae = "proposal" : (g.includes("reminder") || g.includes("deadline")) && (ae = "reminder"), d(ae, M, he, s);
  }, d = (s, M, L, g) => {
    var ae;
    const he = {
      meeting: {
        professional: `Dear ${L},

I hope this email finds you well. I would like to schedule a meeting to discuss ${g.toLowerCase()}.

Please let me know your availability for the following time slots:
• [Date/Time Option 1]
• [Date/Time Option 2]
• [Date/Time Option 3]

The meeting should take approximately [duration] and can be conducted [in-person/virtually].

Please confirm which option works best for you, or suggest alternative times if none of these are suitable.

Best regards`,
        friendly: `Hi ${L}!

Hope you're doing well! I'd love to set up a meeting to chat about ${g.toLowerCase()}.

When would be a good time for you? I'm pretty flexible, so just let me know what works best. We can do it in person or over a video call - whatever's easier for you!

Looking forward to hearing from you!

Best`,
        concise: `Hi ${L},

Let's schedule a meeting about ${g.toLowerCase()}.

Available times:
• [Option 1]
• [Option 2]
• [Option 3]

Please confirm your preference.

Thanks`,
        persuasive: `Dear ${L},

I believe we have a valuable opportunity to discuss ${g.toLowerCase()} that could benefit both of us significantly.

This meeting would allow us to:
• Explore potential synergies
• Address key challenges
• Develop actionable solutions

I'm confident that dedicating time to this discussion will yield positive results. Please let me know your availability so we can move forward promptly.

Best regards`
      },
      followup: {
        professional: `Dear ${L},

I hope this email finds you well. I wanted to follow up on our previous discussion regarding ${g.toLowerCase()}.

As discussed, I wanted to provide you with an update on the current status and next steps:

[Key points to address]
• [Point 1]
• [Point 2]
• [Point 3]

Please let me know if you have any questions or if there's anything else you'd like me to address.

Best regards`,
        friendly: `Hi ${L}!

Hope you're having a great day! Just wanted to circle back on ${g.toLowerCase()}.

I've been thinking about our conversation and wanted to share a quick update. Things are moving along nicely, and I think you'll be pleased with the progress.

Let me know if you have any questions or if there's anything else I can help with!

Best`,
        concise: `Hi ${L},

Quick follow-up on ${g.toLowerCase()}:

• [Update 1]
• [Update 2]
• [Next steps]

Let me know if you need anything else.

Thanks`,
        persuasive: `Dear ${L},

Following up on ${g.toLowerCase()} - I believe we're at a critical juncture where swift action could maximize our success.

The momentum we've built presents an excellent opportunity to:
• Capitalize on current market conditions
• Leverage our competitive advantages
• Achieve our shared objectives

I recommend we proceed with the next phase immediately. Your prompt response would be greatly appreciated.

Best regards`
      },
      thanks: {
        professional: `Dear ${L},

I wanted to take a moment to express my sincere gratitude regarding ${g.toLowerCase()}.

Your [support/assistance/collaboration] has been invaluable, and I truly appreciate the time and effort you've invested. The [outcome/result] exceeded my expectations, and I couldn't have achieved this without your contribution.

Thank you once again for your professionalism and dedication.

Best regards`,
        friendly: `Hi ${L}!

I just had to reach out and say a huge thank you for ${g.toLowerCase()}!

You really went above and beyond, and it means so much to me. I'm incredibly grateful for all your help and support. You're absolutely amazing!

Thanks again for everything!

With appreciation`,
        concise: `Hi ${L},

Thank you for ${g.toLowerCase()}.

Your help was invaluable and greatly appreciated.

Best regards`,
        persuasive: `Dear ${L},

Your exceptional contribution to ${g.toLowerCase()} deserves special recognition.

The impact of your work has been transformative, demonstrating the value of our collaboration. I believe this success positions us perfectly for future opportunities together.

I would welcome the chance to discuss how we can build on this momentum.

With sincere appreciation`
      },
      request: {
        professional: `Dear ${L},

I hope this email finds you well. I am writing to request your assistance with ${g.toLowerCase()}.

Specifically, I would appreciate your help with:
• [Specific request 1]
• [Specific request 2]
• [Timeline/deadline]

I understand you have a busy schedule, but your expertise in this area would be invaluable. Please let me know if this is something you would be able to assist with.

Thank you for considering my request.

Best regards`,
        friendly: `Hi ${L}!

Hope you're doing well! I'm reaching out because I could really use your help with ${g.toLowerCase()}.

I know you're super busy, but you're honestly the best person I can think of for this. Would you be able to lend a hand? I'd really appreciate any assistance you can provide!

Let me know what you think!

Thanks so much`,
        concise: `Hi ${L},

I need assistance with ${g.toLowerCase()}.

Requirements:
• [Item 1]
• [Item 2]
• [Deadline]

Can you help?

Thanks`,
        persuasive: `Dear ${L},

I have an exciting opportunity that aligns perfectly with your expertise: ${g.toLowerCase()}.

This request represents a chance to:
• Showcase your exceptional skills
• Make a significant impact
• Contribute to a meaningful outcome

Your unique qualifications make you the ideal person for this. I'm confident that your involvement would ensure success.

Would you be interested in discussing this further?

Best regards`
      },
      general: {
        professional: `Dear ${L},

I hope this email finds you well. I am writing to you regarding ${g.toLowerCase()}.

[Please provide specific details about your message here]

I would appreciate your thoughts on this matter and look forward to your response.

Best regards`,
        friendly: `Hi ${L}!

Hope you're having a great day! I wanted to reach out about ${g.toLowerCase()}.

[Add your personal message here]

Let me know what you think!

Best`,
        concise: `Hi ${L},

Regarding ${g.toLowerCase()}:

[Your message here]

Please let me know your thoughts.

Thanks`,
        persuasive: `Dear ${L},

I'm reaching out about an important matter: ${g.toLowerCase()}.

This presents a valuable opportunity that I believe deserves your immediate attention. The potential benefits are significant, and I'm confident you'll find this compelling.

I would appreciate the opportunity to discuss this with you further.

Best regards`
      }
    };
    return ((ae = he[s]) == null ? void 0 : ae[M]) || he.general[M];
  }, b = () => {
    z(se.generatedContent), ue((s) => ({ ...s, showAIPanel: !1 }));
  }, _ = () => {
    u(se.selectedTone, !0);
  }, re = (s) => {
    ue((M) => ({ ...M, selectedTone: s }));
  }, Se = async () => {
    if (pe()) {
      y(!0);
      try {
        const s = {
          to: p,
          cc: c,
          bcc: x,
          subject: w,
          body: o,
          attachments: q.map((M) => M.file)
        };
        await A(s), ye();
      } catch (s) {
        console.error("Failed to send email:", s);
      } finally {
        y(!1);
      }
    }
  }, fe = async (s = !1) => {
    s || ee(!0);
    try {
      const M = {
        to: p,
        cc: c,
        bcc: x,
        subject: w,
        body: o,
        attachments: q.map((L) => L.file)
      };
      await $(M), s || ye();
    } catch (M) {
      console.error("Failed to save draft:", M);
    } finally {
      s || ee(!1);
    }
  }, ye = () => {
    if ((p.length > 0 || w.trim() || o.trim() || q.length > 0) && window.confirm(
      "You have unsaved changes. Would you like to save this as a draft before closing?"
    )) {
      fe();
      return;
    }
    C([]), j([]), E([]), k(""), z(""), H([]), l(""), N(""), R(""), V(!1), Y(!1), Q({}), ue({
      isGenerating: !1,
      showAIPanel: !1,
      generatedContent: "",
      selectedTone: "professional",
      hasGenerated: !1
    }), I();
  };
  if (!a) return null;
  const Ae = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: D ? "Compose" : "New Message" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: ye,
          className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
          children: /* @__PURE__ */ e.jsx(we, { className: "w-5 h-5 text-gray-500" })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ e.jsxs("div", { className: "p-4 space-y-4", children: [
      /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "To:" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            p.map((s, M) => /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-md",
                children: [
                  s,
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => Ce(s, p, C),
                      className: "ml-1 text-blue-600 hover:text-blue-800",
                      children: /* @__PURE__ */ e.jsx(we, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              M
            )),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: m,
                onChange: (s) => Ne(s.target.value, p, C, l),
                onKeyDown: (s) => {
                  (s.key === "Enter" || s.key === "Tab") && (s.preventDefault(), m.trim() && ce(m.trim()) && (C([...p, m.trim()]), l("")));
                },
                placeholder: p.length === 0 ? "Enter email addresses..." : "",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          X.to && /* @__PURE__ */ e.jsx("p", { className: "text-red-500 text-sm mt-1", children: X.to })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex space-x-1", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => V(!F),
              className: `text-sm px-2 py-1 rounded transition-colors ${F ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Cc"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => Y(!Z),
              className: `text-sm px-2 py-1 rounded transition-colors ${Z ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:text-gray-700"}`,
              children: "Bcc"
            }
          )
        ] })
      ] }) }),
      F && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Cc:" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            c.map((s, M) => /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  s,
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => Ce(s, c, j),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ e.jsx(we, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              M
            )),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: i,
                onChange: (s) => Ne(s.target.value, c, j, N),
                onKeyDown: (s) => {
                  (s.key === "Enter" || s.key === "Tab") && (s.preventDefault(), i.trim() && ce(i.trim()) && (j([...c, i.trim()]), N("")));
                },
                placeholder: "Enter CC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          X.cc && /* @__PURE__ */ e.jsx("p", { className: "text-red-500 text-sm mt-1", children: X.cc })
        ] })
      ] }),
      Z && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Bcc:" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-2 p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500", children: [
            x.map((s, M) => /* @__PURE__ */ e.jsxs(
              "span",
              {
                className: "inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-md",
                children: [
                  s,
                  /* @__PURE__ */ e.jsx(
                    "button",
                    {
                      onClick: () => Ce(s, x, E),
                      className: "ml-1 text-gray-600 hover:text-gray-800",
                      children: /* @__PURE__ */ e.jsx(we, { className: "w-3 h-3" })
                    }
                  )
                ]
              },
              M
            )),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                value: U,
                onChange: (s) => Ne(s.target.value, x, E, R),
                onKeyDown: (s) => {
                  (s.key === "Enter" || s.key === "Tab") && (s.preventDefault(), U.trim() && ce(U.trim()) && (E([...x, U.trim()]), R("")));
                },
                placeholder: "Enter BCC email addresses...",
                className: "flex-1 min-w-0 border-none outline-none bg-transparent"
              }
            )
          ] }),
          X.bcc && /* @__PURE__ */ e.jsx("p", { className: "text-red-500 text-sm mt-1", children: X.bcc })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700 w-12", children: "Subject:" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex space-x-2", children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: w,
              onChange: (s) => k(s.target.value),
              placeholder: "Enter subject...",
              className: "flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            }
          ),
          w.trim() && /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => u(se.selectedTone),
              disabled: se.isGenerating,
              className: "flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-400 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ e.jsx(ve, { className: "w-4 h-4" }),
                /* @__PURE__ */ e.jsx("span", { children: se.isGenerating ? "Generating..." : "Generate with AI" })
              ]
            }
          )
        ] })
      ] }),
      se.showAIPanel && /* @__PURE__ */ e.jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ e.jsx(ve, { className: "w-4 h-4 text-purple-600" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-semibold text-gray-900", children: "AI Generated Content" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: se.selectedTone,
                onChange: (s) => re(s.target.value),
                className: "text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500",
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "professional", children: "Professional" }),
                  /* @__PURE__ */ e.jsx("option", { value: "friendly", children: "Friendly" }),
                  /* @__PURE__ */ e.jsx("option", { value: "concise", children: "Concise" }),
                  /* @__PURE__ */ e.jsx("option", { value: "persuasive", children: "Persuasive" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: _,
                disabled: se.isGenerating,
                className: "text-purple-600 hover:text-purple-700 p-1 disabled:text-gray-400",
                title: "Regenerate with selected tone",
                children: /* @__PURE__ */ e.jsx(vt, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "bg-white border border-gray-200 rounded p-3 mb-3 max-h-48 overflow-y-auto", children: /* @__PURE__ */ e.jsx("pre", { className: "whitespace-pre-wrap text-gray-800 text-sm font-sans", children: se.generatedContent }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: b,
              className: "flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm",
              children: [
                /* @__PURE__ */ e.jsx(xs, { className: "w-4 h-4" }),
                /* @__PURE__ */ e.jsx("span", { children: "Use This Content" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => ue((s) => ({ ...s, showAIPanel: !1 })),
              className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors text-sm",
              children: "Dismiss"
            }
          )
        ] })
      ] }),
      q.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "border border-gray-200 rounded-lg p-3", children: [
        /* @__PURE__ */ e.jsx("h4", { className: "text-sm font-medium text-gray-700 mb-2", children: "Attachments" }),
        /* @__PURE__ */ e.jsx("div", { className: "space-y-2", children: q.map((s) => /* @__PURE__ */ e.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-2 bg-gray-50 rounded-md",
            children: [
              /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ e.jsx(Ve, { className: "w-4 h-4 text-gray-500" }),
                /* @__PURE__ */ e.jsx("span", { className: "text-sm text-gray-700", children: s.file.name }),
                /* @__PURE__ */ e.jsxs("span", { className: "text-xs text-gray-500", children: [
                  "(",
                  le(s.file.size),
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => ge(s.id),
                  className: "text-red-500 hover:text-red-700",
                  children: /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4" })
                }
              )
            ]
          },
          s.id
        )) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Message:" }),
          o === se.generatedContent && se.generatedContent && /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-purple-600 flex items-center space-x-1", children: [
            /* @__PURE__ */ e.jsx(ve, { className: "w-3 h-3" }),
            /* @__PURE__ */ e.jsx("span", { children: "Using AI-generated content" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
          "textarea",
          {
            value: o,
            onChange: (s) => z(s.target.value),
            placeholder: "Compose your message...",
            rows: D ? 8 : 12,
            className: "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-4 border-t border-gray-200", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => {
              var s;
              return (s = je.current) == null ? void 0 : s.click();
            },
            className: "flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ e.jsx(Ve, { className: "w-4 h-4" }),
              /* @__PURE__ */ e.jsx("span", { className: "text-sm", children: "Attach" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            ref: je,
            type: "file",
            multiple: !0,
            onChange: xe,
            className: "hidden",
            accept: ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: ye,
            className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
            children: "Discard"
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => fe(),
            disabled: B,
            className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50",
            children: [
              /* @__PURE__ */ e.jsx(us, { className: "w-4 h-4" }),
              /* @__PURE__ */ e.jsx("span", { children: B ? "Saving..." : "Save Draft" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: Se,
            disabled: te || p.length === 0,
            className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors",
            children: [
              /* @__PURE__ */ e.jsx(Je, { className: "w-4 h-4" }),
              /* @__PURE__ */ e.jsx("span", { children: te ? "Sending..." : "Send" })
            ]
          }
        )
      ] })
    ] })
  ] });
  return D ? /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: ke,
      className: "fixed top-0 right-0 w-[500px] h-full bg-white border-l border-gray-200 shadow-xl flex flex-col z-40 transform transition-transform duration-300 ease-in-out",
      style: { transform: "translateX(0)" },
      children: /* @__PURE__ */ e.jsx(Ae, {})
    }
  ) : /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: ke,
      className: "bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] flex flex-col",
      children: /* @__PURE__ */ e.jsx(Ae, {})
    }
  ) });
}, js = [
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
  }
], Ze = [
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
  "#A855F7"
  // violet-500
], ks = ({
  isOpen: a,
  onClose: I,
  labels: A,
  onCreateLabel: $,
  onUpdateLabel: f,
  onDeleteLabel: D
}) => {
  const [p, C] = v(""), [c, j] = v(Ze[0]), [x, E] = v(""), [w, k] = v(null), [o, z] = v(""), [q, H] = v(""), [F, V] = v(""), [Z, Y] = v({}), X = me(null);
  Ee(() => {
    const i = (N) => {
      N.key === "Escape" && a && I();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [a, I]);
  const Q = (i, N) => i.trim() ? i.trim().length < 2 ? (Y((R) => ({ ...R, name: "Label name must be at least 2 characters" })), !1) : i.trim().length > 20 ? (Y((R) => ({ ...R, name: "Label name must be less than 20 characters" })), !1) : A.find(
    (R) => R.name.toLowerCase() === i.trim().toLowerCase() && R.id !== N
  ) ? (Y((R) => ({ ...R, name: "A label with this name already exists" })), !1) : (Y((R) => ({ ...R, name: "" })), !0) : (Y((R) => ({ ...R, name: "Label name is required" })), !1), te = () => {
    Q(p) && ($({
      name: p.trim(),
      color: c,
      description: x.trim() || void 0,
      isSystem: !1
    }), C(""), j(Ze[0]), E(""), Y({}));
  }, y = (i) => {
    k(i.id), z(i.name), H(i.color), V(i.description || ""), Y({});
  }, B = () => {
    w && Q(o, w) && (f(w, {
      name: o.trim(),
      color: q,
      description: F.trim() || void 0
    }), k(null), z(""), H(""), V(""), Y({}));
  }, ee = () => {
    k(null), z(""), H(""), V(""), Y({});
  }, m = (i) => {
    const N = A.find((R) => R.id === i);
    if (!N) return;
    const U = N.isSystem ? `Are you sure you want to delete the system label "${N.name}"? This action cannot be undone.` : `Are you sure you want to delete the label "${N.name}"? This will remove it from all emails.`;
    window.confirm(U) && D(i);
  }, l = ({ selectedColor: i, onColorChange: N, className: U = "" }) => /* @__PURE__ */ e.jsx("div", { className: `flex flex-wrap gap-2 ${U}`, children: Ze.map((R) => /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => N(R),
      className: `w-6 h-6 rounded-full border-2 transition-all ${i === R ? "border-gray-800 scale-110" : "border-gray-300 hover:border-gray-500"}`,
      style: { backgroundColor: R },
      title: `Select ${R}`
    },
    R
  )) });
  return a ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: X,
      className: "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] flex flex-col",
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ e.jsx(Oe, { className: "w-5 h-5 text-gray-600" }),
            /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Manage Labels" })
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: I,
              className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
              children: /* @__PURE__ */ e.jsx(we, { className: "w-5 h-5 text-gray-500" })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [
          /* @__PURE__ */ e.jsx("div", { className: "mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200", children: /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Label Name *" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: p,
                  onChange: (i) => {
                    C(i.target.value), Z.name && Q(i.target.value);
                  },
                  onBlur: () => Q(p),
                  placeholder: "Enter label name...",
                  className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${Z.name ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-blue-500"}`,
                  maxLength: 20
                }
              ),
              Z.name && /* @__PURE__ */ e.jsxs("p", { className: "text-red-500 text-sm mt-1 flex items-center", children: [
                /* @__PURE__ */ e.jsx(Gt, { className: "w-3 h-3 mr-1" }),
                Z.name
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: [
                /* @__PURE__ */ e.jsx(is, { className: "w-4 h-4 inline mr-1" }),
                "Color"
              ] }),
              /* @__PURE__ */ e.jsx(
                l,
                {
                  selectedColor: c,
                  onColorChange: j
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Description (Optional)" }),
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  value: x,
                  onChange: (i) => E(i.target.value),
                  placeholder: "Brief description of this label...",
                  className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  maxLength: 100
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ e.jsxs(
              "button",
              {
                onClick: te,
                disabled: !p.trim(),
                className: "flex items-center space-x-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-medium",
                children: [
                  /* @__PURE__ */ e.jsx(Pe, { className: "w-4 h-4" }),
                  /* @__PURE__ */ e.jsx("span", { children: "Create Label" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsxs("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: [
              "Your Labels (",
              A.length,
              ")"
            ] }),
            A.length === 0 ? /* @__PURE__ */ e.jsxs("div", { className: "text-center py-12 text-gray-500", children: [
              /* @__PURE__ */ e.jsx(Oe, { className: "w-16 h-16 mx-auto mb-4 text-gray-300" }),
              /* @__PURE__ */ e.jsx("h4", { className: "text-lg font-medium text-gray-900 mb-2", children: "No labels yet" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-gray-500", children: "Create your first label above to get started organizing your emails" })
            ] }) : /* @__PURE__ */ e.jsx("div", { className: "space-y-3", children: A.map((i) => /* @__PURE__ */ e.jsx(
              "div",
              {
                className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                children: w === i.id ? /* @__PURE__ */ e.jsxs("div", { className: "flex-1 space-y-3", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          value: o,
                          onChange: (N) => {
                            z(N.target.value), Z.name && Q(N.target.value, i.id);
                          },
                          onBlur: () => Q(o, i.id),
                          className: `w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${Z.name ? "border-red-300" : "border-gray-300"}`,
                          maxLength: 20
                        }
                      ),
                      Z.name && /* @__PURE__ */ e.jsx("p", { className: "text-red-500 text-xs mt-1", children: Z.name })
                    ] }),
                    /* @__PURE__ */ e.jsx(
                      l,
                      {
                        selectedColor: q,
                        onColorChange: H,
                        className: "flex-shrink-0"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      value: F,
                      onChange: (N) => V(N.target.value),
                      placeholder: "Description...",
                      className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                      maxLength: 100
                    }
                  ),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ e.jsxs(
                      "button",
                      {
                        onClick: B,
                        disabled: !o.trim() || !!Z.name,
                        className: "flex items-center space-x-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg text-sm transition-colors",
                        children: [
                          /* @__PURE__ */ e.jsx(xt, { className: "w-4 h-4" }),
                          /* @__PURE__ */ e.jsx("span", { children: "Save" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: ee,
                        className: "px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg text-sm transition-colors",
                        children: "Cancel"
                      }
                    )
                  ] })
                ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        className: "w-5 h-5 rounded-full flex-shrink-0",
                        style: { backgroundColor: i.color }
                      }
                    ),
                    /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-900", children: i.name }),
                        i.isSystem && /* @__PURE__ */ e.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium", children: "System" })
                      ] }),
                      i.description && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 mt-1", children: i.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-1", children: [
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => y(i),
                        className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                        title: "Edit label",
                        children: /* @__PURE__ */ e.jsx(cs, { className: "w-4 h-4" })
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "button",
                      {
                        onClick: () => m(i.id),
                        className: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                        title: "Delete label",
                        children: /* @__PURE__ */ e.jsx(wt, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              },
              i.id
            )) })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-end p-6 border-t border-gray-200", children: /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: I,
            className: "px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium",
            children: "Done"
          }
        ) })
      ]
    }
  ) }) : null;
}, Ns = (a) => a.map((I) => ({
  ...I,
  intentLabel: I.intentLabel || "new"
})), Cs = [
  {
    id: "1",
    sender: "Sarah Johnson",
    senderEmail: "sarah.johnson@company.com",
    subject: "Q4 Marketing Campaign Review",
    preview: "Hi team, I wanted to share the latest updates on our Q4 marketing campaign performance. The results have been quite impressive...",
    timestamp: "2024-01-15T16:45:00Z",
    isStarred: !0,
    isRead: !1,
    intentLabel: "report",
    customLabels: ["work", "important"],
    messages: [
      {
        id: "1-1",
        sender: "Sarah Johnson",
        senderEmail: "sarah.johnson@company.com",
        to: ["marketing-team@company.com", "john.doe@company.com"],
        cc: ["manager@company.com"],
        subject: "Q4 Marketing Campaign Review",
        content: `Hi team,

I wanted to share the latest updates on our Q4 marketing campaign performance. The results have been quite impressive, and I think we should discuss the key learnings for our upcoming campaigns.

Here are the highlights:
• 35% increase in engagement compared to Q3
• 28% improvement in conversion rates
• $125K additional revenue generated

I've attached the detailed report and analytics spreadsheet for your review. Let's schedule a meeting next week to discuss the strategy for Q1 2024.

Best regards,
Sarah`,
        timestamp: "2024-01-15T14:30:00Z",
        isRead: !1
      },
      {
        id: "1-2",
        sender: "John Doe",
        senderEmail: "john.doe@company.com",
        to: ["sarah.johnson@company.com", "marketing-team@company.com"],
        cc: ["manager@company.com"],
        subject: "Re: Q4 Marketing Campaign Review",
        content: `Sarah,

These results are fantastic! The 35% engagement increase is particularly impressive. I'd like to understand more about which specific campaigns drove these results.

A few questions for our meeting:
1. Which channels performed best?
2. What was our cost per acquisition?
3. How do these numbers compare to our initial projections?

I'm available for the meeting next Tuesday or Wednesday afternoon.

Thanks for the great work!
John`,
        timestamp: "2024-01-15T15:20:00Z",
        isRead: !1
      },
      {
        id: "1-3",
        sender: "Manager",
        senderEmail: "manager@company.com",
        to: ["sarah.johnson@company.com", "john.doe@company.com", "marketing-team@company.com"],
        subject: "Re: Q4 Marketing Campaign Review",
        content: `Team,

Excellent work on Q4! These results exceed our expectations and demonstrate the team's dedication and strategic thinking.

Sarah, please prepare a presentation for the board meeting next Friday. Include:
- Detailed performance metrics
- ROI analysis
- Key success factors
- Recommendations for Q1 2024

John, your questions are spot-on. Let's make sure we have comprehensive answers for the board.

Looking forward to our strategy session.

Best,
Manager`,
        timestamp: "2024-01-15T16:45:00Z",
        isRead: !1
      }
    ]
  },
  {
    id: "2",
    sender: "David Chen",
    senderEmail: "david.chen@techcorp.com",
    subject: "Project Timeline Update - Urgent",
    preview: "Hello everyone, There have been some changes to the project timeline that I need to communicate immediately...",
    timestamp: "2024-01-15T13:45:00Z",
    isStarred: !1,
    isRead: !1,
    intentLabel: "announcement",
    customLabels: ["work", "urgent"],
    messages: [
      {
        id: "2-1",
        sender: "David Chen",
        senderEmail: "david.chen@techcorp.com",
        to: ["dev-team@techcorp.com", "project-managers@techcorp.com"],
        cc: ["stakeholders@techcorp.com"],
        subject: "Project Timeline Update - Urgent",
        content: `Hello everyone,

There have been some changes to the project timeline that I need to communicate immediately. Due to the client's new requirements, we need to adjust our delivery schedule.

New Timeline:
- Phase 1: January 25th (was January 20th)
- Phase 2: February 15th (was February 10th)
- Final Delivery: March 1st (was February 25th)

I understand this affects everyone's schedule. Let's have a quick standup tomorrow at 9 AM to realign our tasks and discuss resource allocation.

Please confirm your availability.

Thanks,
David`,
        timestamp: "2024-01-15T13:45:00Z",
        isRead: !1
      }
    ]
  },
  {
    id: "3",
    sender: "Emma Rodriguez",
    senderEmail: "emma.rodriguez@startup.io",
    subject: "Welcome to the Team!",
    preview: "Hi there! Welcome to our amazing team. We are so excited to have you on board and can't wait to see what we'll accomplish...",
    timestamp: "2024-01-15T11:20:00Z",
    isStarred: !0,
    isRead: !0,
    intentLabel: "announcement",
    customLabels: ["personal"],
    messages: [
      {
        id: "3-1",
        sender: "Emma Rodriguez",
        senderEmail: "emma.rodriguez@startup.io",
        to: ["newbie@startup.io"],
        cc: ["hr@startup.io", "team-leads@startup.io"],
        subject: "Welcome to the Team!",
        content: `Hi there!

Welcome to our amazing team. We are so excited to have you on board and can't wait to see what we'll accomplish together.

Your first week schedule:
- Monday: Orientation and team introductions
- Tuesday: Technical setup and tool access
- Wednesday: Project briefings with team leads
- Thursday: Shadow experienced team members
- Friday: First team meeting and Q&A session

If you have any questions or need anything, please don't hesitate to reach out. We're here to help you succeed!

Looking forward to working with you,
Emma`,
        timestamp: "2024-01-15T11:20:00Z",
        isRead: !0
      }
    ]
  },
  {
    id: "4",
    sender: "Michael Brown",
    senderEmail: "michael.brown@consulting.com",
    subject: "Client Meeting Rescheduled",
    preview: "Good morning, I hope this email finds you well. I need to inform you that our client meeting originally scheduled for tomorrow...",
    timestamp: "2024-01-15T09:15:00Z",
    isStarred: !1,
    isRead: !0,
    intentLabel: "meeting",
    customLabels: ["work", "clients"],
    messages: [
      {
        id: "4-1",
        sender: "Michael Brown",
        senderEmail: "michael.brown@consulting.com",
        to: ["project-team@consulting.com"],
        subject: "Client Meeting Rescheduled",
        content: `Good morning,

I hope this email finds you well. I need to inform you that our client meeting originally scheduled for tomorrow has been rescheduled due to an unexpected conflict on their end.

New Meeting Details:
- Date: January 18th, 2024
- Time: 2:00 PM - 3:30 PM EST
- Location: Client's office (same as before)
- Attendees: Same team

Please update your calendars accordingly. The agenda remains the same, so no additional preparation is needed beyond what we've already discussed.

Let me know if this new time works for everyone.

Best,
Michael`,
        timestamp: "2024-01-15T09:15:00Z",
        isRead: !0
      }
    ]
  },
  {
    id: "5",
    sender: "Lisa Wang",
    senderEmail: "lisa.wang@design.studio",
    subject: "Design Review Feedback",
    preview: "Hi team, I've completed the review of the latest design mockups and have some feedback to share. Overall, the direction looks great...",
    timestamp: "2024-01-14T18:30:00Z",
    isStarred: !1,
    isRead: !0,
    intentLabel: "feedback",
    customLabels: ["work"],
    messages: [
      {
        id: "5-1",
        sender: "Lisa Wang",
        senderEmail: "lisa.wang@design.studio",
        to: ["design-team@design.studio"],
        cc: ["client@company.com"],
        subject: "Design Review Feedback",
        content: `Hi team,

I've completed the review of the latest design mockups and have some feedback to share. Overall, the direction looks great, but there are a few areas where we can make improvements.

Feedback Points:
1. Color scheme: Consider using a slightly darker shade for the primary buttons
2. Typography: The body text could benefit from increased line spacing
3. Mobile responsiveness: Some elements need adjustment for smaller screens
4. User flow: The checkout process could be simplified by one step

I've annotated the designs with specific comments and suggestions. You can access them through the shared Figma link. I've also attached the updated wireframes as PDF files for offline review.

Let's schedule a design review meeting for Wednesday to go through these in detail.

Best,
Lisa`,
        timestamp: "2024-01-14T16:30:00Z",
        isRead: !0
      },
      {
        id: "5-2",
        sender: "Alex Thompson",
        senderEmail: "alex.thompson@design.studio",
        to: ["lisa.wang@design.studio", "design-team@design.studio"],
        cc: ["client@company.com"],
        subject: "Re: Design Review Feedback",
        content: `Lisa,

Thanks for the comprehensive feedback! I agree with all your points, especially about the mobile responsiveness issues.

I've already started working on the button color adjustments and typography improvements. The mobile fixes will take a bit more time, but I should have them ready by tomorrow.

For the checkout flow simplification, I have a few ideas. Can we discuss this in our Wednesday meeting? I think we can combine steps 3 and 4 without losing any functionality.

I'll update the Figma file with the initial changes by end of day.

Best,
Alex`,
        timestamp: "2024-01-14T18:30:00Z",
        isRead: !0
      }
    ]
  },
  {
    id: "6",
    sender: "Newsletter Team",
    senderEmail: "newsletter@techtrends.com",
    subject: "Weekly Tech Trends - January Edition",
    preview: "This week in tech: AI breakthroughs, new frameworks, and industry insights you don't want to miss...",
    timestamp: "2024-01-14T08:00:00Z",
    isStarred: !1,
    isRead: !0,
    intentLabel: "announcement",
    customLabels: ["newsletters"],
    messages: [
      {
        id: "6-1",
        sender: "Newsletter Team",
        senderEmail: "newsletter@techtrends.com",
        to: ["subscribers@techtrends.com"],
        subject: "Weekly Tech Trends - January Edition",
        content: `This week in tech: AI breakthroughs, new frameworks, and industry insights you don't want to miss.

🚀 TOP STORIES
• OpenAI announces new multimodal capabilities
• React 19 beta introduces exciting new features
• Microsoft Azure expands AI services portfolio

💡 TRENDING TOPICS
• Edge computing adoption in enterprise
• Sustainable tech practices gaining momentum
• Remote work tools evolution

📊 MARKET INSIGHTS
• Tech stocks show resilience amid market volatility
• Startup funding rebounds in Q4 2023
• Cloud computing growth exceeds expectations

🔧 DEVELOPER TOOLS
• New VS Code extensions you should try
• GitHub Copilot updates improve code suggestions
• Docker Desktop introduces enhanced security features

Stay ahead of the curve with our curated tech content.

Happy coding!
Tech Trends Team`,
        timestamp: "2024-01-14T08:00:00Z",
        isRead: !0
      }
    ]
  },
  {
    id: "7",
    sender: "John Doe",
    senderEmail: "john.doe@company.com",
    subject: "Follow-up on Marketing Strategy",
    preview: "Hi Sarah, Following up on our discussion about the Q1 marketing strategy. I have some additional thoughts...",
    timestamp: "2024-01-13T14:20:00Z",
    isStarred: !1,
    isRead: !0,
    intentLabel: "general",
    customLabels: ["work"],
    messages: [
      {
        id: "7-1",
        sender: "John Doe",
        senderEmail: "john.doe@company.com",
        to: ["sarah.johnson@company.com"],
        cc: ["marketing-team@company.com"],
        subject: "Follow-up on Marketing Strategy",
        content: `Hi Sarah,

Following up on our discussion about the Q1 marketing strategy. I have some additional thoughts on how we can leverage the Q4 success.

Key areas to focus on:
1. Double down on the high-performing channels
2. Expand our content marketing efforts
3. Invest more in social media advertising
4. Consider influencer partnerships

I think we should also look into automation tools to help scale our efforts. Let me know when you're available to discuss this further.

Best,
John`,
        timestamp: "2024-01-13T14:20:00Z",
        isRead: !0
      }
    ]
  },
  {
    id: "8",
    sender: "Alice Cooper",
    senderEmail: "alice.cooper@freelance.com",
    subject: "Collaboration Opportunity",
    preview: "Hi there, I came across your profile and would love to discuss a potential collaboration on an upcoming project...",
    timestamp: "2024-01-15T10:30:00Z",
    isStarred: !1,
    isRead: !1,
    // No intentLabel - should be assigned 'new' automatically
    customLabels: ["work"],
    messages: [
      {
        id: "8-1",
        sender: "Alice Cooper",
        senderEmail: "alice.cooper@freelance.com",
        to: ["user@company.com"],
        subject: "Collaboration Opportunity",
        content: `Hi there,

I came across your profile and would love to discuss a potential collaboration on an upcoming project. I believe our skills would complement each other perfectly.

Would you be interested in a quick call to discuss the details?

Best regards,
Alice`,
        timestamp: "2024-01-15T10:30:00Z",
        isRead: !1
      }
    ]
  },
  {
    id: "9",
    sender: "Support Team",
    senderEmail: "support@serviceplatform.com",
    subject: "Your Account Status Update",
    preview: "We wanted to let you know that your account has been successfully updated with the new features...",
    timestamp: "2024-01-14T15:45:00Z",
    isStarred: !1,
    isRead: !1,
    // No intentLabel - should be assigned 'new' automatically
    customLabels: [],
    messages: [
      {
        id: "9-1",
        sender: "Support Team",
        senderEmail: "support@serviceplatform.com",
        to: ["user@company.com"],
        subject: "Your Account Status Update",
        content: `Hello,

We wanted to let you know that your account has been successfully updated with the new features you requested.

New features now available:
• Enhanced dashboard analytics
• Advanced reporting tools
• Improved user management

If you have any questions, please don't hesitate to contact us.

Best regards,
Support Team`,
        timestamp: "2024-01-14T15:45:00Z",
        isRead: !1
      }
    ]
  },
  {
    id: "10",
    sender: "Marketing Insights",
    senderEmail: "insights@marketingpro.com",
    subject: "Industry Trends Report - Q1 2024",
    preview: "Get ahead of the competition with our latest industry trends analysis and market insights...",
    timestamp: "2024-01-13T12:00:00Z",
    isStarred: !0,
    isRead: !1,
    // No intentLabel - should be assigned 'new' automatically
    customLabels: ["newsletters"],
    messages: [
      {
        id: "10-1",
        sender: "Marketing Insights",
        senderEmail: "insights@marketingpro.com",
        to: ["subscribers@marketingpro.com"],
        subject: "Industry Trends Report - Q1 2024",
        content: `Dear Subscriber,

Get ahead of the competition with our latest industry trends analysis and market insights for Q1 2024.

This comprehensive report covers:
• Emerging market opportunities
• Consumer behavior shifts
• Technology adoption trends
• Competitive landscape analysis

Download your copy from our subscriber portal.

Best regards,
Marketing Insights Team`,
        timestamp: "2024-01-13T12:00:00Z",
        isRead: !1
      }
    ]
  }
], Ts = Ns(Cs);
function Es() {
  const [a, I] = v("inbox"), [A, $] = v(null), [f, D] = v(!1), [p, C] = v(
    Ts.map((u) => ({
      ...u,
      intentLabel: u.intentLabel || "new"
    }))
  ), [c, j] = v(js), [x, E] = v(/* @__PURE__ */ new Set()), [w, k] = v(""), [o, z] = v({
    readStatus: "all",
    starred: !1,
    hasAttachment: !1,
    sortBy: "newest",
    dateRange: { from: "", to: "" },
    intent: "all"
  }), [q, H] = v({
    isGenerating: !1,
    showAiReply: !1,
    generatedReply: "",
    tone: "professional"
  });
  v(!1);
  const [F, V] = v(!1), [Z, Y] = v(!1), [X, Q] = v(!1), te = it(() => ({
    inbox: p.filter((n) => !n.isRead).length
  }), [p]), y = (u) => {
    let n = [...u];
    return o.readStatus === "read" ? n = n.filter((d) => d.isRead) : o.readStatus === "unread" && (n = n.filter((d) => !d.isRead)), o.starred && (n = n.filter((d) => d.isStarred)), o.hasAttachment && (n = n.filter(
      (d) => d.messages.some(
        (b) => b.content.toLowerCase().includes("attach") || b.content.toLowerCase().includes("file") || b.content.toLowerCase().includes("document")
      )
    )), (o.dateRange.from || o.dateRange.to) && (n = n.filter((d) => {
      const b = new Date(d.timestamp), _ = o.dateRange.from ? new Date(o.dateRange.from) : null, re = o.dateRange.to ? /* @__PURE__ */ new Date(o.dateRange.to + "T23:59:59") : null;
      return (!_ || b >= _) && (!re || b <= re);
    })), o.intent !== "all" && (n = n.filter((d) => {
      if (d.intentLabel)
        switch (o.intent) {
          case "meetings":
            return d.intentLabel === "meeting";
          case "notifications":
            return d.intentLabel === "system";
          case "campaigns":
            return d.intentLabel === "announcement";
          case "support":
            return d.intentLabel === "feedback";
          default:
            return !0;
        }
      const b = d.intentLabel || "new", _ = `${d.subject} ${d.preview}`.toLowerCase();
      switch (o.intent) {
        case "meetings":
          return b === "meeting" || _.includes("meeting") || _.includes("schedule") || _.includes("appointment");
        case "notifications":
          return b === "system" || _.includes("notification") || _.includes("system") || _.includes("alert");
        case "campaigns":
          return b === "announcement" || _.includes("newsletter") || _.includes("campaign") || _.includes("marketing");
        case "support":
          return b === "feedback" || _.includes("support") || _.includes("help") || _.includes("issue");
        case "new":
          return b === "new";
        default:
          return !0;
      }
    })), n.sort((d, b) => {
      switch (o.sortBy) {
        case "oldest":
          return new Date(d.timestamp).getTime() - new Date(b.timestamp).getTime();
        case "newest":
          return new Date(b.timestamp).getTime() - new Date(d.timestamp).getTime();
        case "subject-az":
          return d.subject.localeCompare(b.subject);
        case "subject-za":
          return b.subject.localeCompare(d.subject);
        case "sender-az":
          return d.sender.localeCompare(b.sender);
        case "sender-za":
          return b.sender.localeCompare(d.sender);
        case "starred-first":
          return d.isStarred && !b.isStarred ? -1 : !d.isStarred && b.isStarred ? 1 : new Date(b.timestamp).getTime() - new Date(d.timestamp).getTime();
        default:
          return new Date(b.timestamp).getTime() - new Date(d.timestamp).getTime();
      }
    }), n;
  }, B = it(() => {
    let u = p;
    switch (a) {
      case "inbox":
        break;
      case "sent":
        u = p.filter(
          (n) => n.senderEmail === "john.doe@company.com" || n.sender === "John Doe"
        );
        break;
      case "drafts":
        u = [];
        break;
      case "starred":
        u = p.filter((n) => n.isStarred);
        break;
      case "snoozed":
        u = [];
        break;
      case "label-work":
        u = p.filter(
          (n) => {
            var d;
            return ((d = n.customLabels) == null ? void 0 : d.includes("work")) || n.subject.toLowerCase().includes("project") || n.subject.toLowerCase().includes("meeting") || n.subject.toLowerCase().includes("campaign") || n.senderEmail.includes("company.com") || n.senderEmail.includes("techcorp.com");
          }
        );
        break;
      case "label-personal":
        u = p.filter(
          (n) => {
            var d;
            return ((d = n.customLabels) == null ? void 0 : d.includes("personal")) || n.subject.toLowerCase().includes("welcome") || n.senderEmail.includes("startup.io");
          }
        );
        break;
      case "label-important":
        u = p.filter(
          (n) => {
            var d;
            return ((d = n.customLabels) == null ? void 0 : d.includes("important")) || n.subject.toLowerCase().includes("urgent") || n.subject.toLowerCase().includes("important") || n.isStarred;
          }
        );
        break;
      case "label-travel":
        u = p.filter(
          (n) => {
            var d;
            return (d = n.customLabels) == null ? void 0 : d.includes("travel");
          }
        );
        break;
      default:
        if (a.startsWith("custom-label-")) {
          const n = a.replace("custom-label-", "");
          u = p.filter(
            (d) => {
              var b;
              return (b = d.customLabels) == null ? void 0 : b.includes(n);
            }
          );
        }
        break;
    }
    if (w.trim()) {
      const n = w.toLowerCase();
      u = u.filter(
        (d) => d.subject.toLowerCase().includes(n) || d.sender.toLowerCase().includes(n) || d.preview.toLowerCase().includes(n) || d.messages.some(
          (b) => b.content.toLowerCase().includes(n)
        ) || // Search in custom labels
        d.customLabels && d.customLabels.some((b) => {
          const _ = c.find((re) => re.id === b);
          return _ == null ? void 0 : _.name.toLowerCase().includes(n);
        })
      );
    }
    return u = y(u), u;
  }, [p, a, w, o, c]), ee = (u, n = !1) => {
    $(u), Y(n), C(
      (d) => d.map(
        (b) => b.id === u.id ? { ...b, isRead: !0 } : b
      )
    );
  }, m = () => {
    Y(!1);
  }, l = (u) => {
    C(
      (n) => n.map(
        (d) => d.id === u ? { ...d, isStarred: !d.isStarred } : d
      )
    );
  }, i = (u) => {
    E((n) => {
      const d = new Set(n);
      return d.has(u) ? d.delete(u) : d.add(u), d;
    });
  }, N = () => {
    D(!f);
  }, U = (u) => {
    k(u);
  }, R = (u) => {
    I(u), $(null), D(!1);
  }, se = (u) => {
    z(u);
  }, ue = () => {
    Q(!0);
  }, je = () => {
    Q(!1);
  }, ke = async (u) => {
    console.log("Sending email:", u), await new Promise((n) => setTimeout(n, 1e3)), alert("Email sent successfully!"), Q(!1);
  }, ce = async (u) => {
    console.log("Saving draft:", u), await new Promise((n) => setTimeout(n, 500)), (u.to.length > 0 || u.subject.trim() || u.body.trim()) && alert("Draft saved successfully!"), Q(!1);
  }, pe = (u) => {
    const n = {
      ...u,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    j((d) => [...d, n]), console.log("Creating label:", n);
  }, Ne = (u, n) => {
    j(
      (d) => d.map(
        (b) => b.id === u ? { ...b, ...n } : b
      )
    ), console.log("Updating label:", u, n);
  }, Ce = (u) => {
    C(
      (n) => n.map((d) => {
        var b;
        return {
          ...d,
          customLabels: ((b = d.customLabels) == null ? void 0 : b.filter((_) => _ !== u)) || []
        };
      })
    ), j((n) => n.filter((d) => d.id !== u)), a === `custom-label-${u}` && I("inbox"), console.log("Deleting label:", u);
  }, xe = (u, n) => {
    C(
      (d) => d.map(
        (b) => u.includes(b.id) ? { ...b, customLabels: n } : b
      )
    ), console.log("Updating email labels:", u, n);
  }, ge = async (u, n = "professional", d = "reply") => {
    H((re) => ({ ...re, isGenerating: !0 })), await new Promise((re) => setTimeout(re, 2e3));
    const b = u.messages[u.messages.length - 1];
    let _ = "";
    if (d === "reply-all") {
      const re = /* @__PURE__ */ new Set([
        b.senderEmail,
        ...b.to,
        ...b.cc || []
      ]);
      switch (Array.from(re).join(", "), n) {
        case "friendly":
          _ = `Hi everyone,

Thanks for the email! I wanted to respond to the group with my thoughts.

${le(u)}

Looking forward to hearing from all of you!

Best regards`;
          break;
        case "concise":
          _ = `Hi all,

${le(u)}

Best regards`;
          break;
        default:
          _ = `Dear team,

Thank you all for your input regarding ${u.subject.toLowerCase()}.

${le(u)}

Please let me know if anyone has additional questions or concerns.

Best regards`;
      }
    } else
      switch (n) {
        case "friendly":
          _ = `Hi ${b.sender.split(" ")[0]},

Thanks for your email! I appreciate you reaching out.

${le(u)}

Looking forward to hearing from you!

Best regards`;
          break;
        case "concise":
          _ = `Hi,

${le(u)}

Best regards`;
          break;
        default:
          _ = `Dear ${b.sender},

Thank you for your email regarding ${u.subject.toLowerCase()}.

${le(u)}

Please let me know if you have any questions.

Best regards`;
      }
    H((re) => ({
      ...re,
      isGenerating: !1,
      showAiReply: !0,
      generatedReply: _,
      tone: n
    }));
  }, le = (u) => {
    const n = u.messages[u.messages.length - 1].content.toLowerCase();
    return n.includes("meeting") || n.includes("schedule") ? "I've reviewed the meeting details and will check my calendar. I'll get back to you shortly with my availability." : n.includes("project") || n.includes("timeline") ? "I understand the project requirements and timeline. I'll review the details and provide an update by end of week." : n.includes("review") || n.includes("feedback") ? "Thank you for sharing this information. I'll review the details and provide my feedback within the next 2 business days." : n.includes("urgent") || n.includes("asap") ? "I understand this is urgent. I'll prioritize this and get back to you as soon as possible." : "I've received your message and will address the points raised. I'll follow up with you soon.";
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "h-screen flex flex-col bg-gray-50", children: [
    /* @__PURE__ */ e.jsx(
      gs,
      {
        onMenuToggle: N,
        onSearch: U,
        onFiltersChange: se,
        filters: o
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ e.jsx(
        ys,
        {
          activeItem: a,
          onItemSelect: R,
          isOpen: f,
          onComposeClick: ue,
          customLabels: c,
          onManageLabels: () => V(!0),
          emailCounts: te
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: "flex-1 flex min-w-0", children: Z ? /* @__PURE__ */ e.jsx(
        ht,
        {
          email: A,
          onClose: () => $(null),
          onBack: m,
          isFullPage: !0,
          aiReplyState: q,
          onGenerateAiReply: ge,
          onAiReplyStateChange: H,
          customLabels: c,
          onEmailLabelsChange: xe,
          onCreateLabel: pe
        }
      ) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 h-full", children: [
        /* @__PURE__ */ e.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e.jsx(
          vs,
          {
            emails: B,
            selectedEmailId: (A == null ? void 0 : A.id) || null,
            onEmailSelect: ee,
            onStarToggle: l,
            onCheckToggle: i,
            checkedEmails: x,
            activeSection: a,
            customLabels: c,
            onEmailLabelsChange: xe,
            onCreateLabel: pe
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          ht,
          {
            email: A,
            onClose: () => $(null),
            isFullPage: !1,
            aiReplyState: q,
            onGenerateAiReply: ge,
            onAiReplyStateChange: H,
            customLabels: c,
            onEmailLabelsChange: xe,
            onCreateLabel: pe
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsx(
      ks,
      {
        isOpen: F,
        onClose: () => V(!1),
        labels: c,
        onCreateLabel: pe,
        onUpdateLabel: Ne,
        onDeleteLabel: Ce
      }
    ),
    X && /* @__PURE__ */ e.jsx(
      ws,
      {
        isOpen: X,
        onClose: je,
        onSend: ke,
        onSaveDraft: ce,
        isPanel: !0
      }
    )
  ] });
}
const Rs = () => /* @__PURE__ */ e.jsx(Es, {});
export {
  Rs as default
};
