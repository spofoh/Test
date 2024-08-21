!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "d98ea856-5940-4a54-9813-9de0bb6dca2d",
        e._sentryDebugIdIdentifier = "sentry-dbid-d98ea856-5940-4a54-9813-9de0bb6dca2d")
    } catch (e) {}
}(),
(self.webpackChunktwitch_twilight = self.webpackChunktwitch_twilight || []).push([[8173], {
    928933: function(e, n, t) {
        "use strict";
        t.d(n, {
            J: function() {
                return R
            }
        });
        var i, a, r, o, s, l, c, d, u, m, g, p = t(58168), f = t(198587), h = t(375276), v = t(600882), k = t(261413), y = t(659480), x = t(153477), b = t(28974), S = t(296540), _ = t(179990), T = t(186396), C = t(27467), N = t(505074), w = t(474848), j = ["children", "error"], P = (0,
        v.AH)(i || (i = (0,
        h.A)(["\n  ", "\n"])), (0,
        k.ND)(a || (a = (0,
        h.A)(["\n    border-color: ", ";\n  "])), (0,
        y.b)("color-border-input-error"))), F = (0,
        v.AH)(r || (r = (0,
        h.A)(["\n  opacity: 0.5;\n  pointer-events: none;\n"]))), D = (0,
        x.C)("timing-short"), I = (0,
        v.I4)(T.M2).withConfig({
            displayName: "ScCoreButton",
            componentId: "sc-1jjluui-0"
        })(["border-color:", ";border-style:solid;border-width:0px;box-shadow:", ";background-color:", ";background-clip:border-box;color:", ";transition:box-shadow ", " ease-in,border ", " ease-in,background-color ", " ease-in;font-weight:", ";transform:translate3d(0,0,0);&:hover{box-shadow:", ";}&:focus{border-color:", ";box-shadow:", ";outline:solid ", " ", " !important;outline-offset:-1px;outline:0;}", " ", ""], (function(e) {
            var n = e.$error
              , t = e.$overlay;
            return t && !n ? (0,
            v.AH)(o || (o = (0,
            h.A)(["transparent"]))) : t && n ? (0,
            y.b)("color-border-input-error-overlay") : n ? (0,
            y.b)("color-border-input-error") : (0,
            v.AH)(s || (s = (0,
            h.A)(["transparent"])))
        }
        ), (function(e) {
            var n = e.$error
              , t = e.$overlay;
            return t && !n ? (0,
            v.AH)(l || (l = (0,
            h.A)(["inset 0 0 0 ", " ", ""])), (0,
            y.b)("input-border-width-small"), (0,
            y.b)("color-border-input-overlay")) : t && n ? (0,
            v.AH)(c || (c = (0,
            h.A)(["inset 0 0 0 ", " ", ""])), (0,
            y.b)("input-border-width-default"), (0,
            y.b)("color-border-overlay-error")) : n ? (0,
            v.AH)(d || (d = (0,
            h.A)(["inset 0 0 0 ", " ", ""])), (0,
            y.b)("input-border-width-default"), (0,
            y.b)("color-border-error")) : (0,
            v.AH)(u || (u = (0,
            h.A)(["inset 0 0 0 ", " ", ""])), (0,
            y.b)("input-border-width-small"), (0,
            y.b)("color-border-input"))
        }
        ), (function(e) {
            return e.$overlay ? (0,
            y.b)("color-background-input-overlay") : (0,
            y.b)("color-background-input")
        }
        ), (function(e) {
            return e.$overlay ? (0,
            y.b)("color-text-overlay") : (0,
            y.b)("color-text-input")
        }
        ), D, D, D, (0,
        x.C)("font-weight-normal"), (function(e) {
            var n = e.$error
              , t = e.$overlay;
            return (0,
            v.AH)(m || (m = (0,
            h.A)(["inset 0 0 0 ", " ", ""])), (0,
            y.b)("input-border-width-default"), t && !n ? (0,
            y.b)("color-border-input-overlay-hover") : t && n ? (0,
            y.b)("color-border-overlay-error-hover") : n ? (0,
            y.b)("color-border-error-hover") : (0,
            y.b)("color-border-input-hover"))
        }
        ), (function(e) {
            var n = e.$error
              , t = e.$overlay;
            return t && !n ? (0,
            y.b)("color-border-input-overlay-focus") : t && n ? (0,
            y.b)("color-border-overlay-error") : n ? (0,
            y.b)("color-border-input-error") : (0,
            y.b)("color-border-input-focus")
        }
        ), (function(e) {
            var n = e.$error
              , t = e.$overlay;
            return (0,
            v.AH)(g || (g = (0,
            h.A)(["0 0 0 ", " ", ", inset 0 0 0 ", " ", ""])), (0,
            y.b)("input-border-width-default"), t && !n ? (0,
            y.b)("color-border-overlay-focus") : t && n ? (0,
            y.b)("color-border-overlay-error") : n ? (0,
            y.b)("color-border-error") : (0,
            y.b)("color-border-input-focus"), (0,
            y.b)("input-border-width-default"), t && !n ? (0,
            y.b)("color-border-overlay-focus") : t && n ? (0,
            y.b)("color-border-overlay-error") : n ? (0,
            y.b)("color-border-error") : (0,
            y.b)("color-border-input-focus"))
        }
        ), (0,
        y.b)("input-border-width-default"), (function(e) {
            var n = e.$overlay
              , t = e.$error;
            return n && !t ? (0,
            y.b)("color-border-input-overlay-focus") : n && t ? (0,
            y.b)("color-border-input-error-overlay") : t ? (0,
            y.b)("color-border-input-error") : (0,
            y.b)("color-border-input-focus")
        }
        ), (function(e) {
            return e.$disabled && F
        }
        ), (function(e) {
            return e.$error && P
        }
        )), L = function(e, n) {
            var t = e.children
              , i = e.error
              , a = (0,
            f.A)(e, j)
              , r = {
                "tw-select-button": !0,
                "tw-select-button--overlay": a.overlay,
                "tw-select-button--error": i,
                "tw-select-button--disabled": a.disabled
            };
            return (0,
            w.jsx)(I, (0,
            p.A)({}, a, {
                ref: n,
                className: (0,
                b.cn)(r),
                $disabled: a.disabled,
                $error: i,
                $overlay: a.overlay,
                children: (0,
                w.jsx)(N._, {
                    fullWidth: a.fullWidth,
                    icon: a.icon,
                    size: a.size,
                    dropdown: C.f.ArrowDown,
                    children: t
                })
            }))
        };
        L.displayName = "SelectButton";
        var A = (0,
        S.forwardRef)(L);
        A.displayName = L.displayName;
        var R = (0,
        _.i)(A)
    },
    591252: function(e, n, t) {
        "use strict";
        t.d(n, {
            M: function() {
                return y
            },
            p: function() {
                return a
            }
        });
        var i, a, r = t(58168), o = t(198587), s = t(600882), l = t(659480), c = t(922267), d = t(27346), u = t(72127), m = t(96012), g = t(235233), p = t(973474), f = t(959340), h = t(474848), v = ["size"];
        !function(e) {
            e.Default = "tw-card-img--size-default",
            e.Size2 = "tw-card-img--size-2",
            e.Size3 = "tw-card-img--size-3",
            e.Size4 = "tw-card-img--size-4",
            e.Size6 = "tw-card-img--size-6",
            e.Size8 = "tw-card-img--size-8",
            e.Size12 = "tw-card-img--size-12",
            e.Size16 = "tw-card-img--size-16",
            e.Size24 = "tw-card-img--size-24",
            e.Size32 = "tw-card-img--size-32"
        }(a || (a = {}));
        var k = (0,
        s.I4)(f.P).withConfig({
            displayName: "ScCardImage",
            componentId: "sc-1ww5dnj-0"
        })(["flex-shrink:0;background-color:", ";overflow:hidden;width:", ";"], (0,
        l.b)("color-background-placeholder"), (0,
        c.H)("$size", ((i = {})[a.Default] = "100%",
        i[a.Size2] = "2rem",
        i[a.Size3] = "3rem",
        i[a.Size4] = "4rem",
        i[a.Size6] = "6rem",
        i[a.Size8] = "8rem",
        i[a.Size12] = "12rem",
        i[a.Size16] = "16rem",
        i[a.Size24] = "24rem",
        i[a.Size32] = "32rem",
        i)))
          , y = function(e) {
            var n = e.size
              , t = void 0 === n ? a.Default : n
              , i = (0,
            o.A)(e, v);
            return (0,
            h.jsxs)(k, (0,
            r.A)({
                $size: t,
                className: "tw-card-image",
                borderRadius: i.borderRadius
            }, (0,
            d.Fh)(i), (0,
            u.g)(i), {
                children: [(0,
                h.jsx)(g.j$, {
                    ratio: i.aspect ? i.aspect : g.gl.Aspect16x9,
                    overflow: i.overflow,
                    children: (0,
                    h.jsx)(p.L, (0,
                    r.A)({}, (0,
                    m.u)(i)))
                }), i.children]
            }))
        };
        y.displayName = "CardImage"
    },
    779025: function(e, n, t) {
        "use strict";
        t.d(n, {
            b: function() {
                return c
            },
            p: function() {
                return D
            }
        });
        var i, a, r, o, s, l, c, d = t(58168), u = t(198587), m = t(375276), g = t(843613), p = t(942993), f = t(968394), h = t(600882), v = t(153477), k = t(659480), y = t(922267), x = t(288794), b = t(261413), S = t(72127), _ = t(27346), T = t(792486), C = t(808463), N = t(292644), w = t(474848), j = ["label", "size", "status", "disabled", "tooltipDelay", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
        !function(e) {
            e.Unselected = "unselected",
            e.Selected = "selected",
            e.Locked = "locked"
        }(c || (c = {}));
        var P = (0,
        h.I4)(T.M).withConfig({
            displayName: "ScFormTag",
            componentId: "sc-s0klok-0"
        })(["font-family:inherit;appearance:none;display:flex;align-items:center;border-radius:", ";background-clip:padding-box;color:", ";line-height:1.4;padding-right:", ";padding-left:0.8rem;max-width:100%;height:", ";border-width:", ";border-style:", ";border-color:", ";background-color:", ";", ';&:disabled,&[aria-disabled="true"]{cursor:not-allowed;}&:disabled{opacity:0.5;}'], (0,
        v.C)("border-radius-rounded"), (0,
        k.b)("color-text-tag"), (function(e) {
            return e.$size === N.Y.Large ? "0.6rem" : "0.3rem"
        }
        ), (0,
        y.H)("$size", ((i = {})[N.Y.Small] = (0,
        k.b)("form-tag-size-small"),
        i[N.Y.Default] = (0,
        k.b)("form-tag-size-default"),
        i[N.Y.Large] = (0,
        k.b)("form-tag-size-large"),
        i)), (0,
        v.C)("border-width-tag"), (function(e) {
            return e.$status === c.Unselected ? "dashed" : "solid"
        }
        ), (0,
        k.b)("color-border-tag"), (0,
        y.H)("$status", ((a = {})[c.Unselected] = "transparent",
        a[c.Selected] = (0,
        k.b)("color-background-tag-default"),
        a[c.Locked] = (0,
        k.b)("color-background-tag-default"),
        a)), (function(e) {
            return !e.$disabled && (0,
            h.AH)(r || (r = (0,
            m.A)(["\n      ", "\n\n      ", "\n\n      &:active {\n        background: ", ";\n        border-color: ", ";\n      }\n    "])), (0,
            x.k)(o || (o = (0,
            m.A)(["\n        background: ", ";\n        border-color: ", ";\n        color: ", ";\n        text-decoration: none;\n      "])), (0,
            k.b)("color-background-tag-hover"), (0,
            k.b)("color-background-tag-hover"), (0,
            k.b)("color-text-tag")), (0,
            b.ND)(s || (s = (0,
            m.A)(["\n        background: ", ";\n        border-color: ", ";\n        border-style: solid;\n        border-color: ", "\n      "])), (0,
            k.b)("color-background-tag-hover"), (0,
            k.b)("color-background-tag-hover"), (0,
            k.b)("color-border-input-focus")), (0,
            k.b)("color-background-tag-active"), (0,
            k.b)("color-background-tag-active"))
        }
        ))
          , F = h.I4.div.withConfig({
            displayName: "ScFormTagLayout",
            componentId: "sc-s0klok-1"
        })(["display:flex;align-items:center;max-width:100%;border-radius:", ";font-weight:", ";font-size:", ";"], (0,
        v.C)("border-radius-rounded"), (0,
        v.C)("font-weight-semibold"), (0,
        y.H)("$size", ((l = {})[N.Y.Small] = (0,
        k.b)("form-tag-text-small"),
        l[N.Y.Default] = (0,
        k.b)("form-tag-text-default"),
        l[N.Y.Large] = (0,
        k.b)("form-tag-text-large"),
        l)))
          , D = function(e) {
            var n, t = e.label, i = e.size, a = void 0 === i ? N.Y.Default : i, r = e.status, o = void 0 === r ? c.Unselected : r, s = e.disabled, l = e.tooltipDelay, m = e.onMouseEnter, h = e.onMouseLeave, v = e.onFocus, k = e.onBlur, y = (0,
            u.A)(e, j), x = {
                size: "1.6rem"
            };
            y["aria-label"] && (x["aria-hidden"] = !0,
            x.role = "presentation");
            var b = {
                $size: a,
                $disabled: s,
                $status: o
            }
              , T = ((n = {})[c.Unselected] = (0,
            w.jsx)(g.L, (0,
            d.A)({}, x)),
            n[c.Selected] = (0,
            w.jsx)(p.n, (0,
            d.A)({}, x)),
            n[c.Locked] = (0,
            w.jsx)(f.g, (0,
            d.A)({}, x)),
            n)[o]
              , D = (0,
            C.No)({
                id: y.id,
                tooltipDelay: l
            })
              , I = D.textProps
              , L = D.anchorProps
              , A = D.TruncateWithTooltip
              , R = D.showTooltipIfOverflowing
              , E = D.clearTooltip;
            return (0,
            w.jsx)(P, (0,
            d.A)({
                "aria-disabled": !s && "locked" === o || void 0,
                className: "tw-form-tag",
                disabled: s
            }, b, y, (0,
            S.g)(y), (0,
            _.Fh)(y), L, {
                onMouseEnter: function(e) {
                    R(),
                    null == m || m(e)
                },
                onMouseLeave: function(e) {
                    E(),
                    null == h || h(e)
                },
                onFocus: function(e) {
                    R(0),
                    null == v || v(e)
                },
                onBlur: function(e) {
                    E(),
                    null == k || k(e)
                },
                children: (0,
                w.jsxs)(F, {
                    $size: a,
                    children: [(0,
                    w.jsx)(A, (0,
                    d.A)({}, I, {
                        children: t
                    })), T]
                })
            }))
        };
        D.displayName = "FormTag"
    },
    267751: function(e, n, t) {
        "use strict";
        t.d(n, {
            D: function() {
                return h
            }
        });
        var i = t(58168)
          , a = t(848683)
          , r = t(434597)
          , o = t(28974)
          , s = t(27346)
          , l = t(72127)
          , c = t(296540)
          , d = t(216042)
          , u = t(914421)
          , m = t(400859)
          , g = t(927784)
          , p = t(474848)
          , f = function(e, n) {
            var t = (0,
            r.$n)(e.id);
            return (0,
            p.jsxs)("div", (0,
            i.A)({
                className: (0,
                o.cn)("tw-search-input")
            }, (0,
            s.Fh)(e), {
                children: [(0,
                p.jsx)(d.S, {
                    display: u.nl.HideAccessible,
                    children: (0,
                    p.jsx)("label", {
                        htmlFor: t,
                        children: "Search"
                    })
                }), (0,
                p.jsx)(g.pd, (0,
                i.A)({
                    "aria-invalid": (0,
                    m.pP)({
                        $error: e.error,
                        $status: e.status
                    })
                }, (0,
                l.g)(e), {
                    ref: n,
                    autoCapitalize: e.autoCapitalize,
                    autoFocus: e.autoFocus,
                    autoComplete: e.autoComplete || "off",
                    disabled: e.disabled,
                    error: e.error,
                    status: e.status,
                    icon: a.D,
                    id: t,
                    maxLength: e.maxLength,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    onKeyDown: e.onKeyDown,
                    placeholder: e.placeholder,
                    rounding: e.rounding,
                    spellCheck: e.spellCheck,
                    tabIndex: e.tabIndex,
                    size: e.size,
                    type: g.NZ.Search,
                    value: e.value,
                    overlay: e.overlay
                }))]
            }))
        };
        f.displayName = "SearchInput";
        var h = (0,
        c.forwardRef)(f);
        h.displayName = f.displayName
    },
    798243: function(e, n, t) {
        "use strict";
        t.d(n, {
            X: function() {
                return l
            }
        });
        var i = t(58168)
          , a = t(70931)
          , r = t(312663)
          , o = t(914421)
          , s = t(474848)
          , l = function(e) {
            return (0,
            s.jsx)(r.N, {
                fontSize: o.Z4.Size6,
                color: o.Q1.Alt2,
                ellipsis: !0,
                children: (0,
                s.jsx)(a.C, (0,
                i.A)({
                    variant: a.K.Inherit,
                    hoverUnderlineNone: !0
                }, e, {
                    children: e.children
                }))
            })
        };
        l.displayName = "MediaCardLink"
    },
    676282: function(e, n, t) {
        "use strict";
        t.d(n, {
            W: function() {
                return f
            }
        });
        var i = t(58168)
          , a = t(600882)
          , r = t(153477)
          , o = t(959340)
          , s = t(914421)
          , l = t(798243)
          , c = t(785677)
          , d = t(474848)
          , u = t(296540)
          , m = a.I4.div.withConfig({
            displayName: "ScImageWrapper",
            componentId: "sc-10mto54-0"
        })(["order:1;flex-basis:4rem;flex-grow:0;flex-shrink:0;margin-right:", ";"], (0,
        r.C)("space-1"))
          , g = a.I4.div.withConfig({
            displayName: "ScTextWrapper",
            componentId: "sc-10mto54-1"
        })(["order:2;flex-grow:1;flex-shrink:1;width:100%;min-width:0;"])
          , p = a.I4.div.withConfig({
            displayName: "ScTextMargin",
            componentId: "sc-10mto54-2"
        })(["margin-bottom:0.3rem;"])
          , f = function(e) {
            var n, t, a, r = e.image && (0,
            d.jsx)(m, {
                children: e.image
            }), f = e.menu && (0,
            d.jsx)(o.P, {
                flexGrow: 0,
                flexShrink: 0,
                flexOrder: 3,
                margin: null != (n = e.menuMargin) ? n : {
                    top: "-0.3rem"
                },
                children: e.menu
            });
            t = "string" == typeof e.title ? (0,
            d.jsx)(c.B, {
                children: e.title
            }) : function(e) {
                return null !== e && "object" == typeof e && e.hasOwnProperty("children") && "string" == typeof e.children
            }(e.title) ? (0,
            d.jsx)(c.B, (0,
            i.A)({}, e.title)) : e.title,
            a = h(e.links) ? (0,
            d.jsx)(l.X, (0,
            i.A)({}, e.links)) : function(e) {
                return Array.isArray(e) && e.every((function(e) {
                    return h(e)
                }
                ))
            }(e.links) ? e.links.map((function(e, n) {
                return (0,
                u.createElement)(l.X, (0,
                i.A)({}, e, {
                    key: n
                }))
            }
            )) : e.links;
            var v = (0,
            d.jsxs)(g, {
                children: [t && (0,
                d.jsx)(p, {
                    children: t
                }), a && (0,
                d.jsx)(p, {
                    children: a
                }), e.actions]
            });
            return (0,
            d.jsxs)(o.P, {
                display: s.nl.Flex,
                flexWrap: s.I4.NoWrap,
                children: [v, r, f]
            })
        };
        function h(e) {
            return null !== e && "object" == typeof e && e.hasOwnProperty("children") && "string" == typeof e.children
        }
        f.displayName = "MediaCardMeta"
    },
    785677: function(e, n, t) {
        "use strict";
        t.d(n, {
            B: function() {
                return m
            }
        });
        var i = t(58168)
          , a = t(600882)
          , r = t(70931)
          , o = t(312663)
          , s = t(588702)
          , l = t(914421)
          , c = t(959340)
          , d = t(474848)
          , u = (0,
        a.I4)(r.C).withConfig({
            displayName: "ScCoreLink",
            componentId: "sc-bhsr9c-0"
        })(["width:100%;"])
          , m = function(e) {
            var n = !!(e.linkTo || e.onClick || e.renderLink)
              , t = (0,
            d.jsx)(o.N, {
                color: n ? void 0 : l.Q1.Alt,
                type: s.M2.H3,
                fontSize: l.Z4.Size5,
                lines: e.lines,
                ellipsis: !0,
                children: e.children
            });
            return e.badge && (t = (0,
            d.jsxs)(c.P, {
                display: l.nl.Flex,
                alignItems: l.k2.Start,
                children: [t, e.badge && (0,
                d.jsx)(c.P, {
                    display: l.nl.InlineFlex,
                    margin: {
                        left: .5
                    },
                    children: e.badge
                })]
            })),
            n && (t = (0,
            d.jsx)(c.P, {
                color: l.Q1.Alt,
                children: (0,
                d.jsx)(u, (0,
                i.A)({}, e, {
                    variant: r.K.Inherit,
                    hoverUnderlineNone: !0,
                    children: t
                }))
            })),
            t
        };
        m.defaultProps = {
            lines: 1
        },
        m.displayName = "MediaCardTitle"
    },
    434891: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Directory_DirectoryBanner"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "coverURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1200"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "180"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "avatarURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "144"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "192"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "viewersCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followersCount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "igdbURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "prestoID"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "streams"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "node"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "previewImageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "320"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "180"
                                                            }
                                                        }],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "tags"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "tagType"
                                    },
                                    value: {
                                        kind: "EnumValue",
                                        value: "CONTENT"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "tagFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(782731).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    540211: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AllChannels_InternationalSection"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platformType"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PlatformType"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "options"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "StreamOptions"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "sortTypeIsRecency"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "imageWidth"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: {
                        kind: "IntValue",
                        value: "50"
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "includeIsDJ"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "streams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "options"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "edges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "browsePagePopularStreamsWithTagsEdge"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(784688).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    599582: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CategoryChannels_InternationalSection"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "options"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameStreamOptions"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "sortTypeIsRecency"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "imageWidth"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: {
                        kind: "IntValue",
                        value: "50"
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "includeIsDJ"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "streams"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "options"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "browsePagePopularStreamsWithTagsEdge"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(784688).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    82546: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DJCalloutEligibility"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isParticipatingDJ"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "djEligibility"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isEligible"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    640376: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_FollowGame"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "FollowGameInput"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "followGame"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "game"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "self"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    567352: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "self"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    301123: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_UnfollowGame"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UnfollowGameInput"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "unfollowGame"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    11795: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GuestStarSessionsQuery"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "options"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GuestStarSessionsOptions"
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "guestStarSessionsForViewers"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "options"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "options"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "guestStarOngoingSession"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(334848).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    73038: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AnimatedTag_TagData"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "contentTag"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "tagFragment"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(782731).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    563798: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SearchFreeformTags"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userQuery"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "first"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "searchFreeformTags"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "userQuery"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "first"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "first"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "edges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "node"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "tagName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    977553: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SearchCategoryTags"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userQuery"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "searchCategoryTags"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "userQuery"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userQuery"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "limit"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "limit"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "broadcastTagScopedFragment"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(237374).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    982287: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "filterTagFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Tag"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isLanguageTag"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "localizedName"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "tagName"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "scope"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }, {
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TagHandlerTag"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "id"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "contentTag"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "filterTagFragment"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    143413: function(e) {
        e.exports = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "broadcastTagFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Tag"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isLanguageTag"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "localizedName"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "tagName"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isAutomated"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "localizedDescription"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }]
        }
    },
    237374: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "broadcastTagScopedFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Tag"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "FragmentSpread",
                        name: {
                            kind: "Name",
                            value: "broadcastTagFragment"
                        },
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "scope"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }]
        }
          , a = {};
        i.definitions = i.definitions.concat(t(143413).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        ))),
        e.exports = i
    },
    782731: function(e) {
        e.exports = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "tagFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Tag"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isLanguageTag"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "localizedName"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "tagName"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }]
        }
    },
    918515: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DiscoveryWatchParty"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "channelLogin"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "login"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "channelLogin"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "watchParty"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "session"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "state"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "contentRestriction"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "progress"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "watchPartyProgress"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(788256).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    767642: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryPage_Game"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "options"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "GameStreamOptions"
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "sortTypeIsRecency"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "imageWidth"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    defaultValue: {
                        kind: "IntValue",
                        value: "50"
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "includeIsDJ"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "streams"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "after"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "options"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "options"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "banners"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryPageGameStreamWithTagsEdge"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "directoryPageGameStreamWithTagsEdge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "StreamEdge"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "node"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "directoryPageGameStreamWithTagsNode"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "trackingID"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "directoryPageGameStreamWithTagsNode"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Stream"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewersCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewImageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "440"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "248"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "sortTypeIsRecency"
                                    }
                                }
                            }]
                        }]
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "broadcaster"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isParticipatingDJ"
                                        },
                                        arguments: [],
                                        directives: [{
                                            kind: "Directive",
                                            name: {
                                                kind: "Name",
                                                value: "include"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "if"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "includeIsDJ"
                                                    }
                                                }
                                            }]
                                        }]
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "profileImageURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "imageWidth"
                                        }
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "primaryColorHex"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "freeformTags"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "freeformTagFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "type"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "boxArtURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "40"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "56"
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewThumbnailProperties"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "blurReason"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        function r(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var t = e.type;
                "NamedType" === t.kind && n.add(t.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                r(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                r(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                r(e, n)
            }
            ))
        }
        i.definitions = i.definitions.concat(t(909526).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        )));
        var o = {};
        i.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                r(e, n),
                o[e.name.value] = n
            }
        }
        )),
        e.exports = i
    },
    214216: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryRoot_Directory"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    784688: function(e, n, t) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "browsePagePopularStreamsWithTagsEdge"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "StreamEdge"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "node"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "browsePagePopularStreamsWithTagsNode"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "trackingID"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }, {
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "browsePagePopularStreamsWithTagsNode"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Stream"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewersCount"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewImageURL"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "width"
                            },
                            value: {
                                kind: "IntValue",
                                value: "440"
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "height"
                            },
                            value: {
                                kind: "IntValue",
                                value: "248"
                            }
                        }],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createdAt"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "sortTypeIsRecency"
                                    }
                                }
                            }]
                        }]
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "broadcaster"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "profileImageURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "imageWidth"
                                        }
                                    }
                                }],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "primaryColorHex"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isParticipatingDJ"
                                        },
                                        arguments: [],
                                        directives: [{
                                            kind: "Directive",
                                            name: {
                                                kind: "Name",
                                                value: "include"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "if"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "includeIsDJ"
                                                    }
                                                }
                                            }]
                                        }]
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "freeformTags"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "freeformTagFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "game"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "boxArtURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "40"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "56"
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "type"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewThumbnailProperties"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "blurReason"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        }
          , a = {};
        i.definitions = i.definitions.concat(t(909526).definitions.filter((function(e) {
            if ("FragmentDefinition" !== e.kind)
                return !0;
            var n = e.name.value;
            return !a[n] && (a[n] = !0,
            !0)
        }
        ))),
        e.exports = i
    },
    314201: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FrontPageNew_User"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "createdAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followedGames"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "nodes"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    98633: function(e) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UndoRecommendationFeedback"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "UndoRecommendationFeedbackInput"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "undoRecommendationFeedback"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "feedbackID"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }]
        };
        function t(e, n) {
            if ("FragmentSpread" === e.kind)
                n.add(e.name.value);
            else if ("VariableDefinition" === e.kind) {
                var i = e.type;
                "NamedType" === i.kind && n.add(i.name.value)
            }
            e.selectionSet && e.selectionSet.selections.forEach((function(e) {
                t(e, n)
            }
            )),
            e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
                t(e, n)
            }
            )),
            e.definitions && e.definitions.forEach((function(e) {
                t(e, n)
            }
            ))
        }
        var i = {};
        n.definitions.forEach((function(e) {
            if (e.name) {
                var n = new Set;
                t(e, n),
                i[e.name.value] = n
            }
        }
        )),
        e.exports = n
    },
    859243: function(e, n, t) {
        "use strict";
        t.d(n, {
            n: function() {
                return r
            }
        });
        var i = t(474848)
          , a = t(959340)
          , r = (t(296540),
        function(e) {
            return (0,
            i.jsx)(a.P, {
                margin: {
                    x: 3
                },
                children: (0,
                i.jsx)("div", {
                    className: "common-centered-column",
                    children: e.children
                })
            })
        }
        )
    },
    735354: function(e, n, t) {
        "use strict";
        t.d(n, {
            U: function() {
                return S
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(267751)
          , o = t(959340)
          , s = t(914421)
          , l = t(97774)
          , c = t(843004)
          , d = t(808681)
          , u = t(296540)
          , m = t(960688)
          , g = t(539896)
          , p = t(255578)
          , f = t(105146)
          , h = t(434848)
          , v = t(216042)
          , k = t(312663)
          , y = t(588702)
          , x = function() {
            return (0,
            a.jsxs)(o.P, {
                display: s.nl.Flex,
                flexDirection: s.bo.Column,
                justifyContent: s.A9.Center,
                alignItems: s.k2.Center,
                flexGrow: 1,
                fullHeight: !0,
                padding: {
                    y: 1
                },
                zIndex: s.Py.Above,
                children: [(0,
                a.jsx)(o.P, {
                    color: s.Q1.Alt2,
                    textAlign: s.nO.Center,
                    flexShrink: 1,
                    children: (0,
                    a.jsx)(h.m, {
                        width: 46,
                        height: 48
                    })
                }), (0,
                a.jsx)(v.S, {
                    margin: {
                        top: 1
                    },
                    textAlign: s.nO.Center,
                    children: (0,
                    a.jsx)(k.N, {
                        type: y.M2.H4,
                        "data-test-selector": "search-error-message",
                        children: (0,
                        m.hw)("Search is not available at this time", "DropdownSearchError")
                    })
                }), (0,
                a.jsx)(k.N, {
                    type: y.M2.P,
                    children: (0,
                    m.hw)("Please try again later", "DropdownSearchError")
                })]
            })
        }
          , b = t(317558)
          , S = function(e) {
            function n(n) {
                var t = e.call(this, n) || this;
                return t.state = {
                    focusSelectable: !1,
                    isInputFocused: !1,
                    isOpen: !1,
                    ariaStatusMessage: ""
                },
                t.updateAriaStatusText = (0,
                p.s)((function() {
                    var e, n = null === (e = t.contentContainerRef) || void 0 === e ? void 0 : e.querySelectorAll("[data-selectable]"), i = "";
                    n && t.state.isOpen && !t.props.isLoading && (i = (0,
                    m.hw)("{resultCount, plural, one {# result} other {# results}}", {
                        resultCount: n.length
                    }, "DropdownSearch")),
                    t.state.ariaStatusMessage !== i && t.setState({
                        ariaStatusMessage: i
                    })
                }
                ), 500, {
                    leading: !1,
                    trailing: !0
                }),
                t.setContentContainerRef = function(e) {
                    e && t.contentContainerRef !== e && (t.contentContainerRef = e)
                }
                ,
                t.handleDropdownOrInputBlur = function(e) {
                    var n, i = e.relatedTarget;
                    i && (null === (n = t.contentContainerRef) || void 0 === n ? void 0 : n.contains(i)) || t.handleClose()
                }
                ,
                t.handleChange = function(e) {
                    t.props.onChange(e.target.value)
                }
                ,
                t.handleFocus = function() {
                    t.props.onFocusInput && t.props.onFocusInput(),
                    t.setState({
                        isInputFocused: !0
                    })
                }
                ,
                t.handleBlur = function(e) {
                    var n, i;
                    t.handleDropdownOrInputBlur(e),
                    t.setState({
                        isInputFocused: !1
                    }),
                    t.props.onInputBlur && (e.relatedTarget && "true" === (null === (i = (n = e.relatedTarget).getAttribute) || void 0 === i ? void 0 : i.call(n, "data-selectable")) || t.props.onInputBlur())
                }
                ,
                t.onKeyDown = function(e) {
                    var n = function() {
                        e.preventDefault(),
                        e.stopPropagation()
                    };
                    t.props.onKeyDown && t.inputRef && t.props.onKeyDown(e, t.inputRef.value),
                    "Escape" === e.key ? (t.setState({
                        isOpen: !1
                    }),
                    t.props.onEscPress && t.props.onEscPress()) : "ArrowUp" === e.key ? (n(),
                    t.focusNext(-1)) : "ArrowDown" === e.key && (n(),
                    t.focusNext(1))
                }
                ,
                t.handleClose = function() {
                    t.state.isOpen && t.setState({
                        isOpen: !1
                    }),
                    t.props.onClose && t.props.onClose()
                }
                ,
                t.onClickOut = function() {
                    t.handleClose()
                }
                ,
                t.onMouseOver = function(e) {
                    var n = e.target.closest("[data-selectable]");
                    n && (n.focus(),
                    n.tabIndex = 0,
                    t.setState((function(e) {
                        var t = e.currentFocus;
                        return t && (t.tabIndex = -1),
                        {
                            currentFocus: n
                        }
                    }
                    )),
                    t.props.onFocusChange && t.props.onFocusChange(n))
                }
                ,
                t.getInputRef = function(e) {
                    t.inputRef = e
                }
                ,
                t.controlsId = (0,
                f.yr)(8),
                t
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.componentDidUpdate = function() {
                this.updateAriaStatusText()
            }
            ,
            n.prototype.render = function() {
                var e, n = void 0 === this.props.showDropdown || this.props.showDropdown, t = this.props.isErrored ? (0,
                a.jsx)(x, {}) : u.Children.only(this.props.children), p = (0,
                a.jsx)("div", {
                    role: "combobox",
                    "aria-owns": this.controlsId,
                    "aria-haspopup": "listbox",
                    "aria-expanded": this.state.isOpen && this.props.showDropdown,
                    children: (0,
                    a.jsx)(r.D, {
                        "aria-label": "".concat(this.props.inputBoxAriaLabel || this.props.placeholder),
                        "aria-autocomplete": "list",
                        "aria-controls": this.controlsId,
                        onChange: this.handleChange,
                        onKeyDown: this.onKeyDown,
                        onBlur: this.handleBlur,
                        onFocus: this.handleFocus,
                        placeholder: this.props.placeholder,
                        id: null !== (e = this.props.inputID) && void 0 !== e ? e : "dropdown-search-input",
                        "data-a-target": "dropdown-search-input",
                        spellCheck: !1,
                        ref: this.getInputRef,
                        size: this.props.inputSize,
                        autoFocus: this.props.autoFocus,
                        disabled: this.props.disabled,
                        error: this.props.inputErrored,
                        rounding: this.props.inputRounding,
                        "aria-describedby": this.props.inputAriaDescribedBy
                    })
                }), f = (0,
                a.jsx)("div", {
                    id: this.controlsId,
                    "aria-label": (0,
                    m.hw)("Search Results", "DropdownSearch"),
                    role: "listbox",
                    onBlur: this.handleDropdownOrInputBlur,
                    onKeyDown: this.onKeyDown,
                    onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0,
                    children: t
                });
                return this.props.inline ? (0,
                a.jsx)(g.V, {
                    onClickOut: this.onClickOut,
                    children: (0,
                    a.jsxs)(o.P, {
                        background: this.state.isInputFocused || this.state.isOpen ? s.VS.Base : void 0,
                        borderRadius: l.Z.Large,
                        padding: .5,
                        position: s.yX.Relative,
                        elevation: this.state.isInputFocused || this.state.isOpen ? 3 : void 0,
                        ref: this.setContentContainerRef,
                        children: [p, (0,
                        a.jsx)(c.L, {
                            children: (0,
                            a.jsx)("div", {
                                role: "status",
                                children: this.state.ariaStatusMessage
                            })
                        }), n && (0,
                        a.jsx)(o.P, {
                            attachLeft: !0,
                            background: s.VS.Base,
                            borderRadius: {
                                bottomLeft: l.Z.Large,
                                bottomRight: l.Z.Large
                            },
                            display: this.state.isOpen ? s.nl.Block : s.nl.Hide,
                            fullWidth: !0,
                            padding: {
                                y: 1
                            },
                            position: s.yX.Absolute,
                            zIndex: s.Py.Above,
                            elevation: 3,
                            children: f
                        })]
                    })
                }) : (0,
                a.jsx)(g.V, {
                    onClickOut: this.onClickOut,
                    children: (0,
                    a.jsxs)(o.P, {
                        ref: this.setContentContainerRef,
                        position: s.yX.Relative,
                        children: [p, (0,
                        a.jsx)(c.L, {
                            children: (0,
                            a.jsx)("div", {
                                role: "status",
                                children: this.state.ariaStatusMessage
                            })
                        }), n && (0,
                        a.jsx)(d.E, (0,
                        i.__assign)({}, this.props.balloonProps, {
                            show: this.state.isOpen,
                            children: f
                        }))]
                    })
                })
            }
            ,
            n.prototype.focus = function() {
                this.inputRef && this.inputRef.focus()
            }
            ,
            n.prototype.toggle = function(e) {
                e !== this.state.isOpen && this.setState({
                    isOpen: e
                })
            }
            ,
            n.prototype.setValue = function(e) {
                this.inputRef && (this.inputRef.value = e)
            }
            ,
            n.prototype.focusNext = function(e) {
                var n = (0,
                b.P)(this.contentContainerRef, e);
                n && (this.setState((function(e) {
                    var t = e.currentFocus;
                    return t && (t.tabIndex = -1),
                    {
                        currentFocus: n
                    }
                }
                )),
                this.props.onFocusChange && this.props.onFocusChange(n))
            }
            ,
            n
        }(u.Component)
    },
    572279: function(e, n, t) {
        "use strict";
        t.d(n, {
            A: function() {
                return a
            }
        });
        var i = t(296540)
          , a = function(e) {
            var n = i.Children.only(e.children);
            return i.cloneElement(n, {
                "data-selectable": !0,
                tabIndex: -1,
                role: "option"
            })
        }
    },
    317558: function(e, n, t) {
        "use strict";
        function i(e, n) {
            if (!e)
                return null;
            var t, i = e.querySelectorAll("[data-selectable=true]"), a = document.activeElement, r = Array.prototype.indexOf.call(i, a);
            if ((t = r < 0 ? n > 0 ? 0 : i.length - 1 : r + n) < 0 && (t = 0),
            t >= i.length)
                return null;
            var o = i.item(t);
            return o.focus(),
            o.tabIndex = 0,
            o
        }
        t.d(n, {
            P: function() {
                return i
            }
        })
    },
    311297: function(e, n, t) {
        "use strict";
        t.d(n, {
            O: function() {
                return u
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(959340)
          , o = t(391186)
          , s = t(272256)
          , l = t(312663)
          , c = (t(296540),
        t(960688))
          , d = function() {
            return (0,
            c.hw)("May contain: Sexual Themes", "BlurredPreviewCardImage")
        }
          , u = function(e) {
            var n = e.hasVodRestrictionOverlay
              , t = (0,
            i.__rest)(e, ["hasVodRestrictionOverlay"]);
            return (0,
            a.jsx)(r.P, {
                position: "relative",
                className: "blurred-preview-card-image",
                children: (0,
                a.jsx)(o.G, (0,
                i.__assign)({}, t, {
                    cover: (0,
                    a.jsxs)(r.P, {
                        position: "absolute",
                        attachTop: !0,
                        attachRight: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        containerType: "size",
                        style: {
                            pointerEvents: "none"
                        },
                        children: [(0,
                        a.jsx)(r.P, {
                            margin: n ? {
                                bottom: 3
                            } : void 0,
                            children: (0,
                            a.jsx)(s.M, {
                                title: d(),
                                size: "2.4rem"
                            })
                        }), !n && (0,
                        a.jsx)(r.P, {
                            "aria-hidden": "true",
                            margin: {
                                y: .5
                            },
                            containerQueries: [{
                                minWidth: "0",
                                style: {
                                    display: "none"
                                }
                            }, {
                                minWidth: "24rem",
                                style: {
                                    display: "block"
                                }
                            }],
                            textAlign: "center",
                            children: (0,
                            a.jsx)(l.N, {
                                children: d()
                            })
                        })]
                    })
                }))
            })
        }
    },
    310368: function(e, n, t) {
        "use strict";
        t.d(n, {
            y: function() {
                return i
            }
        });
        var i = function(e) {
            var n;
            return !!(null === (n = null == e ? void 0 : e.previewThumbnailProperties) || void 0 === n ? void 0 : n.blurReason) && "BLUR_NOT_REQUIRED" !== e.previewThumbnailProperties.blurReason
        }
    },
    995896: function(e, n, t) {
        "use strict";
        t.d(n, {
            N: function() {
                return nn
            }
        });
        var i, a = t(331635), r = t(474848), o = t(296540), s = t(82984), l = t(343584), c = t(973474), d = t(725681), u = t(391186), m = t(785677), g = t(959340), p = t(914421), f = t(312663), h = t(798243), v = t(520719), k = t(70931), y = t(27346), x = t(416290), b = t(676282), S = t(902418), _ = t(960688), T = t(311297), C = t(950503), N = t(235233), w = t(947322), j = t(998300);
        function P(e) {
            return e.context === l.oT.SingleChannelList && e.gameBoxArtImageProps && e.gameBoxArtImageProps.src && e.gameTitleLinkTo ? (0,
            r.jsx)(k.C, (0,
            a.__assign)({}, (0,
            y.Fh)(e), {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "game_boxart"), e.gameTitleLinkTo),
                onClick: e.onGameTitleClick,
                targetBlank: e.targetBlank,
                "data-test-selector": i.BoxArt,
                "data-a-target": "preview-card-boxart-link",
                children: (0,
                r.jsx)(N.j$, {
                    ratio: N.gl.BoxArt,
                    align: N.W3.Center,
                    children: (0,
                    r.jsx)(c.L, (0,
                    a.__assign)({}, e.gameBoxArtImageProps))
                })
            })) : (e.context === l.oT.SingleGameList || e.context === l.oT.MixedGameAndChannelList) && e.channelImageProps && e.channelImageProps.src ? (0,
            r.jsx)(k.C, (0,
            a.__assign)({}, (0,
            y.Fh)(e), {
                linkTo: e.channelLinkTo ? (0,
                j.V)((0,
                C.d)(e.trackingContext, "user_thumbnail"), e.channelLinkTo) : void 0,
                onClick: e.onChannelImageClick,
                className: "preview-card-avatar",
                "data-test-selector": i.AvatarElement,
                tabIndex: -1,
                children: (0,
                r.jsx)(N.j$, {
                    ratio: N.gl.Aspect1x1,
                    align: N.W3.Center,
                    children: (0,
                    r.jsx)(w.e, (0,
                    a.__assign)({}, e.channelImageProps, {
                        size: 40,
                        userLogin: e.channelLogin
                    }))
                })
            })) : null
        }
        function F() {
            return (0,
            _.hw)("with", "GuestStarDiscoveryCard")
        }
        !function(e) {
            e.AvatarElement = "preview-card-avatar",
            e.BoxArt = "preview-card-box-art"
        }(i || (i = {}));
        var D, I = function() {
            return (0,
            _.hw)("Verified Partner", "PreviewCard")
        }, L = t(798999), A = t(468777), R = t(267924), E = t(974102), V = t(439504), B = t(69098), G = t(664117), M = function(e) {
            var n = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i.test(navigator.userAgent);
            return (0,
            r.jsx)(B.E, {
                color: "#9146ff",
                children: (0,
                r.jsxs)(g.P, {
                    className: "guest-star-live-card-border",
                    children: [(0,
                    r.jsx)(g.P, {
                        className: "guest-star-live-card-clip-edge",
                        children: (0,
                        r.jsx)(g.P, {
                            className: n || e.mediaCardType !== V.V.LiveMediaCard ? "" : "guest-star-live-card-clip-corner",
                            children: e.thumbnailContainsSexualThemes ? (0,
                            r.jsx)(T.O, (0,
                            a.__assign)({}, e.mediaCardImageProps, {
                                image: e.thumbnail,
                                linkProps: (0,
                                a.__assign)({}, e.linkProps),
                                disableHoverAccent: !0
                            })) : (0,
                            r.jsx)(u.G, (0,
                            a.__assign)({}, e.mediaCardImageProps, {
                                image: e.thumbnail,
                                linkProps: (0,
                                a.__assign)({}, e.linkProps),
                                disableHoverAccent: !0
                            }))
                        })
                    }), e.mediaCardType === V.V.LiveMediaCard && (0,
                    r.jsx)(c.L, {
                        src: G,
                        alt: (0,
                        _.hw)("Illustration indicating there are multiple people live on stream", "GuestStarDiscoveryCard"),
                        className: "guest-star-live-card-branding-image"
                    })]
                })
            })
        }, z = t(472571), O = t(843004), U = t(61604), H = t(980934), W = function(e) {
            var n = o.useState(!1)
              , t = n[0]
              , i = n[1]
              , s = (0,
            z.p)()
              , l = s.open
              , c = s.close
              , d = s.dialogProps
              , u = s.anchorProps
              , m = (0,
            o.useRef)(0)
              , f = (0,
            o.useRef)(null)
              , h = o.useCallback((function() {
                null === f.current && (f.current = document.activeElement),
                i(!0),
                l()
            }
            ), [i, l])
              , v = function() {
                i(!1),
                f.current && (f.current.focus({
                    preventScroll: !0
                }),
                f.current = null),
                c()
            }
              , k = o.useCallback((function() {
                m.current && clearTimeout(m.current),
                m.current = setTimeout(h, 500)
            }
            ), [h]);
            return (0,
            o.useEffect)((function() {
                return function() {
                    m.current && clearTimeout(m.current)
                }
            }
            )),
            (0,
            r.jsxs)(g.P, {
                display: p.nl.Block,
                onFocus: function() {
                    k()
                },
                onBlur: function() {
                    clearTimeout(m.current)
                },
                onKeyDown: function(e) {
                    "ArrowDown" !== e.key || t ? "ArrowUp" !== e.key && "Tab" !== e.key || !t || v() : h()
                },
                onMouseEnter: function() {
                    k()
                },
                onMouseLeave: function() {
                    clearTimeout(m.current),
                    v()
                },
                ref: u.ref,
                minWidth: 0,
                children: [(0,
                r.jsx)(O.L, {
                    children: (0,
                    _.hw)("Use the Down Arrow Key for more guest info", "GuestStarDiscoveryCard")
                }), e.titleAndChannelName, (0,
                r.jsx)(U.O, (0,
                a.__assign)({}, d, {
                    options: {
                        placement: "bottom-start"
                    },
                    disableFocusAfterRender: !1,
                    children: (0,
                    r.jsx)(H.D, {
                        guestList: e.guestList,
                        channelLogin: e.channelLogin,
                        mediaCardType: e.mediaCardType
                    })
                }))]
            })
        }, $ = t(473734), q = t(76433), Z = t(674067), J = t(461810), Q = t(330504), X = function(e) {
            var n, t, i, o, s, l, N, w, D, B, G = ((n = {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "video_thumbnail"), e.linkTo),
                onClick: e.onThumbnailClick || e.onClick
            })["data-a-target"] = "preview-card-image-link",
            n.tabIndex = e.thumbnailContainsSexualThemes ? 0 : -1,
            n.targetBlank = e.targetBlank,
            n), z = e.thumbnailImageProps && (e.trackImageLatency ? (0,
            r.jsx)(J.R, (0,
            a.__assign)({}, e.thumbnailImageProps)) : (0,
            r.jsx)(c.L, (0,
            a.__assign)({}, e.thumbnailImageProps))), O = {
                topLeft: (0,
                r.jsx)(d.L, {
                    children: (0,
                    A.X)(e.durationInSeconds)
                }),
                bottomLeft: (0,
                r.jsx)(d.L, {
                    children: (0,
                    E.Ek)(e.viewCount)
                }),
                bottomRight: e.datePublished && (0,
                r.jsx)(d.L, {
                    children: (0,
                    C.Z)((0,
                    _.Cr)(new Date(e.datePublished)))
                }),
                disableHoverAccent: !1,
                linkProps: G
            }, U = (null === (t = e.guestStarParticipants) || void 0 === t ? void 0 : t.host) && (null === (i = e.guestStarParticipants) || void 0 === i ? void 0 : i.guests) && (null === (o = e.guestStarParticipants) || void 0 === o ? void 0 : o.guests.length) > 0 && (0,
            Z.A)();
            B = U ? (0,
            r.jsx)(M, {
                mediaCardImageProps: O,
                thumbnail: z,
                mediaCardType: V.V.ClipMediaCard,
                linkProps: G,
                thumbnailContainsSexualThemes: e.thumbnailContainsSexualThemes
            }) : e.thumbnailContainsSexualThemes ? (0,
            r.jsx)(T.O, (0,
            a.__assign)({}, O, {
                image: z,
                hoverAccentColor: e.primaryColorHex
            })) : (0,
            r.jsx)(u.G, (0,
            a.__assign)({}, O, {
                image: z,
                hoverAccentColor: e.primaryColorHex
            }));
            var H, X = e.title && (0,
            r.jsx)(m.B, {
                "data-focusable": !0,
                children: e.title,
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "video_title"), e.linkTo),
                targetBlank: e.targetBlank,
                onClick: e.onVideoTitleClick || e.onClick
            });
            e.isClipRenderedFromChannelPage && (null == e ? void 0 : e.gameTitle) && (0,
            Z.A)() && (H = (0,
            r.jsxs)(g.P, {
                display: p.nl.Flex,
                justifyContent: p.A9.Start,
                flexWrap: p.I4.NoWrap,
                minWidth: 0,
                children: [(0,
                r.jsx)(f.N, {
                    color: p.Q1.Alt2,
                    tabIndex: -1,
                    ellipsis: !0,
                    children: (0,
                    r.jsx)(h.X, {
                        linkTo: (0,
                        j.V)((0,
                        C.d)(e.trackingContext, "game_boxart"), e.gameTitleLinkTo),
                        onClick: e.onGameTitleClick,
                        tabIndex: -1,
                        title: e.gameTitle,
                        children: "".concat(e.gameTitle)
                    })
                }), (0,
                r.jsx)(g.P, {
                    color: p.Q1.Alt2,
                    children: ", "
                })]
            }));
            var K, Y = (null === (s = e.guestStarParticipants) || void 0 === s ? void 0 : s.guests) ? null === (N = null === (l = e.guestStarParticipants) || void 0 === l ? void 0 : l.guests) || void 0 === N ? void 0 : N.length : 0;
            U && Y > 1 && (K = (0,
            r.jsx)(g.P, {
                flexShrink: 0,
                children: (0,
                r.jsxs)(f.N, {
                    color: p.Q1.Alt2,
                    "data-a-target": "preview-card-channel-link",
                    tabIndex: -1,
                    children: [" ", (0,
                    q.j)(Y)]
                })
            }));
            var ee = (0,
            L.d)(e.channelLogin, e.channelDisplayName, !0)
              , ne = (0,
            r.jsxs)(g.P, {
                display: p.nl.Flex,
                justifyContent: p.A9.Start,
                flexWrap: p.I4.NoWrap,
                alignItems: "center",
                children: [(0,
                r.jsxs)(f.N, {
                    color: p.Q1.Alt2,
                    "data-a-target": "preview-card-channel-link",
                    tabIndex: -1,
                    ellipsis: !0,
                    children: [(0,
                    r.jsxs)(g.P, {
                        display: p.nl.InlineFlex,
                        alignItems: "center",
                        children: [ee, e.isPartner && (0,
                        r.jsx)(g.P, {
                            display: "inline-flex",
                            margin: {
                                left: "0.2rem"
                            },
                            alignItems: "center",
                            children: (0,
                            r.jsx)(v.l, {
                                size: 12,
                                "aria-label": I(),
                                fillColor: "brand"
                            })
                        })]
                    }), (null === (w = null == e ? void 0 : e.guestStarParticipants) || void 0 === w ? void 0 : w.guests) && 1 === Y && (0,
                    r.jsxs)(r.Fragment, {
                        children: [" ", F(), " ", (0,
                        L.d)(e.guestStarParticipants.guests[0].login, e.guestStarParticipants.guests[0].displayName, !0)]
                    })]
                }), K]
            })
              , te = (0,
            r.jsx)(k.C, {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "channel_metadata"), e.channelLinkTo),
                "data-a-target": "preview-card-channel-link",
                className: "preview-card-channel-link",
                hoverUnderlineNone: !0,
                targetBlank: e.targetBlank,
                children: ne
            })
              , ie = (0,
            r.jsx)(h.X, {
                children: (0,
                r.jsxs)(g.P, {
                    display: "flex",
                    children: [ee, e.isPartner && (0,
                    r.jsx)(g.P, {
                        display: "flex",
                        margin: {
                            left: "0.2rem"
                        },
                        alignItems: "center",
                        children: (0,
                        r.jsx)(v.l, {
                            size: 12,
                            "aria-label": I(),
                            fillColor: "brand"
                        })
                    })]
                }),
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "channel_metadata"), e.channelLinkTo),
                targetBlank: e.targetBlank,
                onClick: e.onChannelLoginClick,
                "data-a-target": "preview-card-channel-link"
            });
            U && (null === (D = e.guestStarParticipants) || void 0 === D ? void 0 : D.guests) && (ie = (0,
            r.jsxs)(g.P, {
                display: p.nl.Flex,
                children: [H, (0,
                r.jsx)(W, {
                    guestList: e.guestStarParticipants.guests,
                    titleAndChannelName: te,
                    channelLogin: e.channelLogin,
                    mediaCardType: V.V.ClipMediaCard
                })]
            }));
            var ae, re = (0,
            r.jsx)(h.X, {
                children: (0,
                _.hw)("Clipped by {userName}", {
                    userName: e.clipCreatedByChannelLogin || ""
                }, "VideoPreviewCard"),
                targetBlank: e.targetBlank,
                linkTo: e.clipCreatedByChannelLoginLinkTo,
                onClick: e.onClipCreatedByChannelLoginClick,
                "data-a-target": "preview-card-clip-curator-link"
            });
            return ae = U && e.channelImageProps ? (0,
            r.jsx)(k.C, (0,
            a.__assign)({}, (0,
            y.Fh)(e), {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "user_thumbnail"), e.channelLinkTo),
                onClick: e.onChannelImageClick,
                "data-test-selector": "preview-card-avatar",
                tabIndex: -1,
                children: e.guestStarParticipants && (0,
                r.jsx)($.u, {
                    avatarAlt: e.channelImageProps.alt,
                    userLogin: e.channelLogin,
                    avatarSrc: e.channelImageProps.src,
                    primaryColorHex: e.primaryColorHex,
                    hover: !0,
                    isPreviewCardAvatar: !0,
                    guestStarParticipants: e.guestStarParticipants
                })
            })) : P(e),
            (0,
            r.jsx)(x.Z, (0,
            a.__assign)({}, (0,
            y.Fh)(e), {
                margin: 0,
                image: B,
                meta: (0,
                r.jsx)(b.W, {
                    image: ae,
                    title: X,
                    links: (0,
                    r.jsxs)(r.Fragment, {
                        children: [ie, re]
                    }),
                    menu: e.channelLogin && e.channelID && (0,
                    r.jsx)(Q._, {
                        reportButtonIconSize: S.f.Small,
                        reportMenuItems: [{
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            reportContext: {
                                contentType: R.Cah.CLIP_REPORT,
                                contentID: e.slug,
                                trackingContext: "clip_preview_tile"
                            }
                        }]
                    })
                })
            }))
        }, K = t(663953), Y = t(386879), ee = t(783321), ne = t(440549), te = t(177391), ie = t(477117), ae = t(631756), re = t(337930), oe = function() {
            return !/version\/([\w\.]+).+?(mobile\s?safari|safari)/i.test(navigator.userAgent) || (0,
            re.fX)("limited_safari_discovery_card")
        }, se = t(108687), le = t(384761), ce = function() {
            return (0,
            r.jsx)(g.P, {
                className: "boost-overlay__background",
                display: p.nl.Flex,
                alignItems: p.k2.End,
                justifyContent: p.A9.Center,
                fullWidth: !0,
                fullHeight: !0,
                children: (0,
                r.jsx)(g.P, {
                    className: "boost-overlay__text",
                    display: p.nl.Flex,
                    alignItems: p.k2.End,
                    justifyContent: p.A9.Center,
                    textAlign: p.nO.Center,
                    children: (0,
                    r.jsx)(f.N, {
                        italic: !0,
                        fontSize: p.Z4.Size5,
                        lines: 2,
                        ellipsis: !0,
                        children: (0,
                        _.hw)("Promoted by the streamer's community", "BoostOverlay")
                    })
                })
            })
        }, de = t(427605), ue = t(70642), me = t(97774), ge = t(957139), pe = function(e) {
            var n = 0;
            e.watchPartyState && e.watchPartyProgress && (n = (0,
            ge.Y0)(e.watchPartyState, e.watchPartyProgress));
            var t = (0,
            r.jsx)(g.P, {
                position: p.yX.Absolute,
                attachBottom: !0,
                fullWidth: !0,
                children: (0,
                r.jsx)(ue.z2, {
                    borderRadius: me.Z.None,
                    size: ue.Q8.Small,
                    value: 100 * n,
                    mask: !0,
                    overlay: !0
                })
            })
              , i = (0,
            _.hw)("Watch Party", "WatchPartyPreviewCardOverlay");
            return (0,
            r.jsx)(u.G, {
                image: e.image,
                linkProps: e.linkProps,
                topLeft: (0,
                r.jsx)(K.qd, {
                    label: i
                }),
                bottomLeft: (0,
                r.jsx)(d.L, {
                    children: (0,
                    E.r6)(e.viewerCount)
                }),
                cover: t,
                hoverAccentColor: e.hoverAccentColor
            })
        }, fe = t(918515), he = t.n(fe), ve = t(583353), ke = t(9195), ye = t(855580), xe = t(648101), be = t(763932), Se = {
            disableAudio: !0,
            disableCasting: !0,
            disableClipping: !0,
            disableDoubleClickFullscreen: !0,
            disableFullscreen: !0,
            disableKeyboardShortcuts: !0,
            disableMatureOverlay: !1,
            disableMultiviewButton: !0,
            disableNielsenAuditPings: !0,
            disablePersonalizedAds: !0,
            disablePixelTracking: !0,
            disableLastActionOverlay: !0,
            disablePopoutPlayer: !0,
            disableRecommendations: !0,
            disableSettingsMenuButton: !0,
            disableSimultaneousPlaying: !0,
            disableStatusOverlay: !0,
            disableStreamInfoChannelLinks: !0,
            disableStreamInfoDescription: !0,
            disableStreamInfoImage: !0,
            disableStreamInfoSubtitle: !0,
            disableStreamInfoTags: !0,
            disableStreamInfoTitle: !0,
            disableTheatreMode: !0,
            disableUserPreferencePersistence: !0,
            embed: !1,
            enableExtensions: !1,
            enableLooping: !1,
            exclusivePlayback: !1,
            forceControlVisibility: ye.Ie.Hidden,
            openStreamInfoLinksExternally: !0,
            pauseWhenModalShowing: !0,
            pauseWhenNotInViewport: ye.Fc.Once,
            declineVideoAdsReason: ke.e.Frontpage,
            showChannelInfoOnHover: !1,
            showExternalBranding: !1,
            showMiniToggleSettings: !1,
            showOfflineChannelNotificationPrompt: !1
        }, _e = function(e) {
            var n = e.login
              , t = e.linkTo
              , i = e.onClick
              , o = "/".concat(n)
              , s = {};
            "object" == typeof t && (s = t.state);
            return (0,
            r.jsx)(k.C, {
                linkTo: null != t ? t : {
                    pathname: o,
                    state: {
                        medium: "twitch_home",
                        content: "carousel_percolite"
                    }
                },
                onClick: i,
                children: (0,
                r.jsx)(ve.L, {
                    behaviors: (0,
                    a.__assign)((0,
                    a.__assign)({}, Se), {
                        trackingProperties: s
                    }),
                    content: {
                        type: xe.FC.Live,
                        channelLogin: n
                    },
                    type: be.C.FrontpagePercolite
                }, n)
            })
        };
        !function(e) {
            e.GameLink = "GameLink",
            e.PromotedLabel = "PromotedLabel",
            e.TitleAndChannel = "TitleAndChannel",
            e.StreamTitle = "StreamTitle"
        }(D || (D = {}));
        var Te = function(e) {
            var n, t, i, s, m, S, w, A, B, G, z, O, U, H, Z, Q, X, re, ue, me, ge, fe, ve = (0,
            ee.IT)(he(), {
                skip: !e.channelLogin || !e.watchparty,
                variables: {
                    channelLogin: e.channelLogin || ""
                }
            }).data, ke = (0,
            o.useRef)(-1), ye = e.thumbnailImageProps && (e.trackImageLatency ? (0,
            r.jsx)(J.R, (0,
            a.__assign)({}, e.thumbnailImageProps)) : (0,
            r.jsx)(c.L, (0,
            a.__assign)({}, e.thumbnailImageProps))), xe = ((n = {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "video_thumbnail"), e.linkTo),
                onClick: e.onThumbnailClick || e.onClick
            })["data-a-target"] = "preview-card-image-link",
            n.className = "preview-card-image-link",
            n.tabIndex = e.thumbnailContainsSexualThemes ? 0 : -1,
            n), be = (0,
            ie.Z)(e.channelLogin), Se = {
                topLeft: e.hostedByChannelLogin || e.streamType !== ne.P.Live ? (0,
                r.jsx)(Y.q, {
                    type: e.streamType,
                    hosting: !!e.hostedByChannelLogin
                }) : (0,
                r.jsx)(K.qd, {
                    label: (0,
                    _.hw)("LIVE", "PreviewCard")
                }),
                bottomLeft: e.sourceType && (0,
                le.DD)(e.sourceType) ? e.sourceType !== R.Y14.COMMUNITY_BOOST && (0,
                r.jsx)(se.P, {
                    "data-test-selector": D.PromotedLabel,
                    sourceType: e.sourceType
                }) : (0,
                r.jsx)(d.L, {
                    children: (0,
                    E.r6)(e.currentViewerCount)
                }),
                bottomRight: e.createdAt && "" !== e.createdAt && (0,
                r.jsx)(d.L, {
                    children: (0,
                    _.hw)("Started {RelativeCreationTime}", {
                        RelativeCreationTime: (0,
                        _.Cr)(new Date(e.createdAt))
                    }, "PreviewCard")
                }) || void 0,
                cover: e.sourceType === R.Y14.COMMUNITY_BOOST && (0,
                r.jsx)(ce, {}),
                disableHoverAccent: !1
            };
            (0,
            o.useEffect)((function() {
                -1 === ke.current && (ke.current = (new Date).getTime())
            }
            ), [ke]),
            e.thumbnailContainsSexualThemes ? ge = (0,
            r.jsx)(T.O, (0,
            a.__assign)({}, Se, {
                linkProps: xe,
                image: ye,
                hoverAccentColor: e.primaryColorHex
            })) : (null == be ? void 0 : be.active) && oe() ? ge = (0,
            r.jsx)(M, {
                mediaCardImageProps: Se,
                thumbnail: ye,
                linkProps: xe,
                mediaCardType: V.V.LiveMediaCard
            }) : e.watchparty ? ge = (0,
            r.jsx)(pe, {
                image: ye,
                linkProps: xe,
                channelLogin: e.channelLogin || "",
                viewerCount: e.currentViewerCount,
                watchPartyState: null !== (m = null === (s = null === (i = null === (t = null == ve ? void 0 : ve.user) || void 0 === t ? void 0 : t.watchParty) || void 0 === i ? void 0 : i.session) || void 0 === s ? void 0 : s.state) && void 0 !== m ? m : null,
                watchPartyProgress: null !== (B = null === (A = null === (w = null === (S = null == ve ? void 0 : ve.user) || void 0 === S ? void 0 : S.watchParty) || void 0 === w ? void 0 : w.session) || void 0 === A ? void 0 : A.progress) && void 0 !== B ? B : null,
                hoverAccentColor: e.primaryColorHex
            }) : (ge = (0,
            r.jsx)(u.G, (0,
            a.__assign)({}, Se, {
                image: ye,
                linkProps: xe,
                hoverAccentColor: e.primaryColorHex
            })),
            e.autoplay && e.channelLogin && (ge = (0,
            r.jsx)(N.j$, {
                ratio: N.gl.Aspect16x9,
                children: (0,
                r.jsx)(_e, {
                    login: e.channelLogin,
                    linkTo: (0,
                    j.V)((0,
                    C.d)(e.trackingContext, "carousel_percolite"), e.linkTo),
                    onClick: e.onPreviewPlayerClick
                })
            }))),
            (null == be ? void 0 : be.active) && (null === (z = null === (G = null == be ? void 0 : be.session) || void 0 === G ? void 0 : G.guests) || void 0 === z ? void 0 : z.length) > 2 && oe() && (fe = (0,
            r.jsx)(g.P, {
                flexShrink: 0,
                children: (0,
                r.jsxs)(f.N, {
                    color: p.Q1.Alt2,
                    "data-a-target": "preview-card-channel-link",
                    tabIndex: -1,
                    children: [" ", (0,
                    q.j)((null === (U = null === (O = null == be ? void 0 : be.session) || void 0 === O ? void 0 : O.guests) || void 0 === U ? void 0 : U.length) - 1)]
                })
            }));
            var Te, Ne = (0,
            L.d)(e.channelLogin, e.channelDisplayName, !0), je = we(null == be ? void 0 : be.session), Pe = (0,
            r.jsxs)(g.P, {
                display: p.nl.Flex,
                justifyContent: p.A9.Start,
                flexWrap: p.I4.NoWrap,
                alignItems: "center",
                children: [(0,
                r.jsxs)(f.N, {
                    color: p.Q1.Alt2,
                    "data-a-target": "preview-card-channel-link",
                    tabIndex: -1,
                    ellipsis: !0,
                    children: [(0,
                    r.jsxs)(g.P, {
                        display: p.nl.InlineFlex,
                        alignItems: "center",
                        children: [Ne, e.isPartner && (0,
                        r.jsx)(g.P, {
                            display: p.nl.InlineFlex,
                            margin: {
                                left: "0.2rem"
                            },
                            alignItems: "center",
                            children: (0,
                            r.jsx)(v.l, {
                                size: 12,
                                "aria-label": I(),
                                fillColor: "brand"
                            })
                        }), e.isDJ && (0,
                        r.jsx)(g.P, {
                            display: p.nl.InlineFlex,
                            margin: {
                                left: "0.2rem"
                            },
                            alignItems: "center",
                            children: (0,
                            r.jsx)(te.m, {
                                size: 12
                            })
                        })]
                    }), (null == be ? void 0 : be.active) && je && (0,
                    r.jsxs)(r.Fragment, {
                        children: [" ", F(), " ", (0,
                        L.d)(je.user.login, je.user.displayName, !0)]
                    })]
                }), fe]
            }), Fe = function(e) {
                var n = e.context !== l.oT.SingleGameList && e.gameTitle && (0,
                r.jsx)(h.X, {
                    linkTo: e.gameTitleLinkTo ? (0,
                    j.V)((0,
                    C.d)(e.trackingContext, "game_metadata"), e.gameTitleLinkTo) : void 0,
                    onClick: e.onGameTitleClick,
                    "data-test-selector": D.GameLink,
                    "data-a-target": "preview-card-game-link",
                    children: e.gameTitle
                });
                return n || null
            }(e), De = e.watchparty ? Fe : null, Ie = (null !== (Q = null === (Z = null === (H = e.tagListProps) || void 0 === H ? void 0 : H.freeformTags) || void 0 === Z ? void 0 : Z.length) && void 0 !== Q ? Q : 0) > 0 && (0,
            r.jsx)(g.P, {
                margin: {
                    top: .5
                },
                children: (0,
                r.jsx)(de.L, (0,
                a.__assign)({}, e.tagListProps, {
                    fitOneLine: !0
                }))
            }), Le = e.contextualCardActionProps && (0,
            r.jsx)(g.P, {
                flexGrow: 0,
                flexShrink: 0,
                children: (0,
                r.jsx)(e.contextualCardActionProps.component, (0,
                a.__assign)({}, e.contextualCardActionProps.props))
            }), Ae = null;
            (null == be ? void 0 : be.active) && (Ae = (0,
            ae.t)(null == be ? void 0 : be.session)),
            Te = (null == Ae ? void 0 : Ae.host) && e.channelImageProps && oe() ? (0,
            r.jsx)(k.C, (0,
            a.__assign)({}, (0,
            y.Fh)(e), {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "user_thumbnail"), e.channelLinkTo),
                onClick: e.onChannelImageClick,
                "data-test-selector": "preview-card-avatar",
                tabIndex: -1,
                children: (0,
                r.jsx)($.u, {
                    guestStarParticipants: Ae,
                    avatarAlt: e.channelImageProps.alt,
                    userLogin: e.channelLogin,
                    avatarSrc: e.channelImageProps.src,
                    primaryColorHex: e.primaryColorHex,
                    hover: !0,
                    isPreviewCardAvatar: !0
                })
            })) : P(e);
            var Re = e.watchparty ? De : Fe
              , Ee = (null == be ? void 0 : be.active) && oe() ? (0,
            _.hw)("{numGuests, plural, one {{channelLogin} and # guest streaming {titleText}} other {{channelLogin} and # guests streaming {titleText}}}", {
                numGuests: be.session.guests.length - 1,
                channelLogin: null !== (X = e.channelLogin) && void 0 !== X ? X : "",
                titleText: null !== (re = e.title) && void 0 !== re ? re : ""
            }, "GuestStarDiscoveryCard") : (0,
            _.hw)("{channelLogin} streaming {titleText}", {
                channelLogin: null !== (ue = e.channelLogin) && void 0 !== ue ? ue : "",
                titleText: null !== (me = e.title) && void 0 !== me ? me : ""
            }, "LiveMediaCard")
              , Ve = (0,
            r.jsxs)(k.C, {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "title_and_channel"), e.linkTo),
                "data-focusable": !0,
                "data-test-selector": D.TitleAndChannel,
                "data-a-target": "preview-card-channel-link",
                className: "preview-card-channel-link",
                hoverUnderlineNone: !0,
                "aria-label": Ee,
                children: [(0,
                r.jsx)(Ce, {
                    title: e.title,
                    onClick: e.onClick
                }), Pe]
            })
              , Be = Ve;
            return (null == Ae ? void 0 : Ae.guests) && oe() && (Be = (0,
            r.jsx)(W, {
                guestList: null == Ae ? void 0 : Ae.guests,
                titleAndChannelName: Ve,
                channelLogin: e.channelLogin
            })),
            (0,
            r.jsx)(x.Z, (0,
            a.__assign)({
                margin: 0,
                image: ge,
                meta: (0,
                r.jsx)(b.W, {
                    image: Te,
                    title: (0,
                    r.jsxs)(r.Fragment, {
                        children: [Be, Re]
                    }),
                    actions: Ie,
                    menu: Le
                })
            }, (0,
            y.Fh)(e)))
        }
          , Ce = function(e) {
            return e.title ? (0,
            r.jsx)(g.P, {
                as: m.B,
                lines: 1,
                onClick: e.onClick,
                "data-test-selector": D.StreamTitle,
                "data-a-target": "preview-card-title-link",
                tabIndex: -1,
                margin: {
                    bottom: "0.3rem"
                },
                children: e.title
            }) : null
        };
        var Ne, we = function(e) {
            var n;
            if (2 !== (null === (n = null == e ? void 0 : e.guests) || void 0 === n ? void 0 : n.length))
                return null;
            for (var t = 0, i = null == e ? void 0 : e.guests; t < i.length; t++) {
                var a = i[t];
                if (e.host.id !== a.user.id)
                    return a
            }
        }, je = t(407827), Pe = t(82149), Fe = t(564368), De = t(44602), Ie = t(26538), Le = t(808681), Ae = t(86011), Re = t(324602), Ee = t(51285), Ve = t(959385), Be = t(895154), Ge = t(702671), Me = t(363574), ze = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.onBalloonToggle = function(e) {
                    n.props.onBalloonClick && !e && n.props.onBalloonClick()
                }
                ,
                n
            }
            return (0,
            a.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                if (this.props.videoGameChanges.length > 0) {
                    var e = this.props.videoGameChanges.map((function(e) {
                        return e.gameID
                    }
                    ));
                    (0,
                    Me.B4)(e)
                }
            }
            ,
            n.prototype.render = function() {
                return (0,
                r.jsx)(g.P, {
                    className: "preview-card-game-balloon",
                    display: p.nl.InlineBlock,
                    position: p.yX.Relative,
                    margin: {
                        top: .5
                    },
                    children: (0,
                    r.jsxs)(Be.P, {
                        onToggle: this.onBalloonToggle,
                        hideBalloonOnInsideClick: !0,
                        children: [(0,
                        r.jsx)(Fe.$n, {
                            variant: Fe.VQ.Secondary,
                            icon: De.g,
                            children: (0,
                            r.jsxs)(g.P, {
                                display: p.nl.Flex,
                                flexDirection: p.bo.Row,
                                children: [(0,
                                r.jsx)(f.N, {
                                    children: (0,
                                    _.hw)("Chapters", "PreviewCardGameBalloon")
                                }), (0,
                                r.jsx)(g.P, {
                                    margin: {
                                        left: 1
                                    },
                                    children: (0,
                                    r.jsx)(Ie.a, {
                                        label: this.props.videoGameChanges.length.toString()
                                    })
                                })]
                            })
                        }), (0,
                        r.jsx)(Le.E, {
                            direction: Ae.j.TopLeft,
                            size: Re.$V.Medium,
                            children: (0,
                            r.jsxs)(g.P, {
                                overflow: p.nE.Hidden,
                                display: p.nl.Flex,
                                flexDirection: p.bo.Column,
                                flexWrap: p.I4.NoWrap,
                                children: [(0,
                                r.jsx)(g.P, {
                                    padding: .5,
                                    flexShrink: 0,
                                    flexGrow: 0,
                                    children: (0,
                                    r.jsx)(f.N, {
                                        color: p.Q1.Alt2,
                                        children: (0,
                                        _.hw)("Chapter Select", "PreviewCardGameBalloon")
                                    })
                                }), (0,
                                r.jsx)(g.P, {
                                    className: "preview-card-game-balloon__content",
                                    display: p.nl.Flex,
                                    flexDirection: p.bo.Column,
                                    flexGrow: 1,
                                    flexShrink: 1,
                                    flexWrap: p.I4.NoWrap,
                                    children: (0,
                                    r.jsx)(Ve.Vq, {
                                        children: (0,
                                        r.jsx)(g.P, {
                                            display: p.nl.Flex,
                                            flexDirection: p.bo.Column,
                                            flexWrap: p.I4.NoWrap,
                                            fullHeight: !0,
                                            children: this.renderAdditionalGameList(this.props.videoGameChanges)
                                        })
                                    })
                                })]
                            })
                        })]
                    }, "game-balloon")
                })
            }
            ,
            n.prototype.renderAdditionalGameList = function(e) {
                var n = this;
                return e.map((function(e, t) {
                    return (0,
                    r.jsx)(Ee.$, {
                        active: !1,
                        description: 0 === e.duration ? "" : (0,
                        Ge.a3)(e.duration),
                        imageURL: e.thumbnailUrl,
                        index: t,
                        linkTo: e.linkTo,
                        onClick: n.props.onBalloonItemClick,
                        text: e.label
                    }, e.offset)
                }
                ))
            }
            ,
            n
        }(o.Component), Oe = t(216042), Ue = t(672052), He = function(e) {
            return (0,
            r.jsx)(g.P, {
                children: (0,
                r.jsx)(f.N, {
                    color: p.Q1.Alt,
                    ellipsis: !0,
                    children: e.videoGameChanges.map((function(n, t, i) {
                        return (0,
                        r.jsx)(Oe.S, {
                            children: (0,
                            r.jsxs)(k.C, {
                                linkTo: {
                                    pathname: (0,
                                    Ue.PY)(n.label),
                                    state: {
                                        content: "text_link",
                                        medium: e.trackingContext && e.trackingContext.medium
                                    }
                                },
                                variant: k.K.Inherit,
                                children: [n.label, We(t, i.length - 1) ? null : ", "]
                            })
                        }, t)
                    }
                    ))
                })
            })
        }, We = function(e, n) {
            return e === n
        }, $e = t(246942), qe = t.n($e), Ze = "preview-card-thumbnail__image-selector", Je = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.state = {
                    didAnimatedPreviewLoad: !1,
                    didAnimatedPreviewFailToLoad: !1,
                    isHovered: !1
                },
                n.onImageError = function() {
                    n.props.latencyTracking.reportInteractive()
                }
                ,
                n.onImageLoad = function() {
                    n.props.latencyTracking.reportInteractive()
                }
                ,
                n.onAnimatedImageLoad = function(e) {
                    void 0 !== n.props.animatedImageProps && e.currentTarget.src === n.props.animatedImageProps.src && n.setState({
                        didAnimatedPreviewLoad: !0
                    })
                }
                ,
                n.onAnimatedImageLoadError = function(e) {
                    void 0 !== n.props.animatedImageProps && e.currentTarget.src === n.props.animatedImageProps.src && n.setState({
                        didAnimatedPreviewFailToLoad: !0
                    })
                }
                ,
                n.handleFocus = function() {
                    n.setState({
                        isHovered: !0
                    })
                }
                ,
                n.handleBlur = function() {
                    n.setState({
                        isHovered: !1
                    })
                }
                ,
                n
            }
            return (0,
            a.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                this.props.trackImageLatency || this.props.latencyTracking.reportInteractive()
            }
            ,
            n.prototype.render = function() {
                var e = {};
                return this.props.animatedImageProps && (e = {
                    onMouseEnter: this.handleFocus,
                    onMouseLeave: this.handleBlur,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                }),
                (0,
                r.jsx)("div", (0,
                a.__assign)({}, e, {
                    onClick: this.props.onClick,
                    children: (0,
                    r.jsx)(g.P, {
                        background: p.VS.Alt2,
                        overflow: p.nE.Hidden,
                        children: (0,
                        r.jsx)(N.j$, {
                            ratio: this.props.aspectRatio,
                            children: this.renderImage()
                        })
                    })
                }))
            }
            ,
            n.prototype.renderImage = function() {
                var e, n = !(!this.props.animatedImageProps || !this.state.isHovered || this.state.didAnimatedPreviewFailToLoad), t = qe()("preview-card-thumbnail__image", ((e = {})["preview-card-thumbnail__image--animated"] = this.state.isHovered && this.state.didAnimatedPreviewLoad,
                e));
                return n && void 0 !== this.props.animatedImageProps ? (0,
                r.jsx)("div", {
                    className: t,
                    children: (0,
                    r.jsx)(c.L, (0,
                    a.__assign)({}, this.props.animatedImageProps, {
                        title: this.props.title,
                        onLoad: this.onAnimatedImageLoad,
                        onError: this.onAnimatedImageLoadError,
                        "data-test-selector": Ze
                    }))
                }) : (0,
                r.jsx)("div", {
                    className: t,
                    children: (0,
                    r.jsx)(c.L, (0,
                    a.__assign)({}, this.props.staticImageProps, {
                        title: this.props.title,
                        onLoad: this.onImageLoad,
                        onError: this.onImageError,
                        "data-test-selector": Ze
                    }))
                })
            }
            ,
            n
        }(o.Component), Qe = (0,
        s.W)("PreviewCardThumbnail")(Je), Xe = je.x.wrap((function() {
            return t.e(25473).then(t.bind(t, 490586))
        }
        ), "VideoPreviewCardRestriction", {
            placeholder: null,
            failSilently: !0
        });
        !function(e) {
            e.ListPosition = "ListPositoin",
            e.Duration = "Duration",
            e.ChannelLink = "ChannelLink",
            e.GameLink = "GameLink"
        }(Ne || (Ne = {}));
        var Ke = function(e) {
            var n, t = "number" == typeof e.watchedProgressPercent && e.watchedProgressPercent > 0 && (0,
            r.jsx)(g.P, {
                position: p.yX.Absolute,
                attachBottom: !0,
                fullWidth: !0,
                className: "video-media-card__progress-bar-wrapper",
                children: (0,
                r.jsx)(ue.z2, {
                    borderRadius: me.Z.None,
                    size: ue.Q8.Small,
                    value: e.watchedProgressPercent,
                    mask: !1,
                    inherit: !0
                })
            }), i = void 0 !== e.durationInSeconds && (0,
            r.jsx)(d.L, {
                "data-test-selector": Ne.Duration,
                children: (0,
                A.X)(e.durationInSeconds)
            }), o = e.listPosition && (0,
            r.jsx)(d.L, {
                "data-test-selector": Ne.ListPosition,
                children: (0,
                _.hw)("{totalVideos, plural, one {{position} / # video} other {{position} / # videos}}", {
                    position: e.listPosition.position,
                    totalVideos: e.listPosition.totalVideos
                }, "VideoPreviewCard")
            }), s = (0,
            r.jsx)(d.L, {
                children: (0,
                E.Ek)(e.viewCount)
            }), c = e.datePublished && (0,
            r.jsx)(d.L, {
                children: (0,
                C.Z)((0,
                _.Cr)(new Date(e.datePublished)))
            }), f = e.thumbnailImageProps && (0,
            r.jsx)(Qe, {
                staticImageProps: e.thumbnailImageProps,
                animatedImageProps: e.animatedImageProps,
                title: e.datePublished ? (0,
                _.Yq)(new Date(e.datePublished), "medium") : void 0,
                trackImageLatency: e.trackImageLatency
            }), k = ((n = {
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "video_thumbnail"), e.linkTo),
                onClick: e.onThumbnailClick || e.onClick
            })["data-a-target"] = "preview-card-image-link",
            n.tabIndex = e.thumbnailContainsSexualThemes ? 0 : -1,
            n), N = (0,
            r.jsx)(Xe, {
                isRestricted: e.isRestricted,
                restriction: e.restriction,
                channelLogin: e.channelLogin,
                attachTop: !0,
                isThumbnailBlurred: e.thumbnailContainsSexualThemes
            }), w = [];
            Ye(e) || w.push((0,
            r.jsx)(h.X, {
                children: (0,
                r.jsxs)(g.P, {
                    display: "flex",
                    children: [(0,
                    L.d)(e.channelLogin, e.channelDisplayName, !0), e.isPartner && (0,
                    r.jsx)(g.P, {
                        display: "flex",
                        margin: {
                            left: "0.2rem"
                        },
                        alignItems: "center",
                        children: (0,
                        r.jsx)(v.l, {
                            size: 12,
                            "aria-label": I(),
                            fillColor: "brand"
                        })
                    })]
                }),
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "channel_metadata"), e.channelLinkTo),
                onClick: e.onChannelLoginClick,
                "data-test-selector": Ne.ChannelLink,
                "data-a-target": "preview-card-channel-link"
            }, "channel-link"));
            var F = null;
            e.multipleVideoGameMarkersType && e.videoGameChanges && e.videoGameChanges.length > 0 ? F = en(e.multipleVideoGameMarkersType, e.videoGameChanges, e.onVideoGameBalloonClick, e.onVideoGameBalloonItemClick) : e.context !== l.oT.SingleGameList && e.gameTitle && e.gameTitleLinkTo && w.push((0,
            r.jsx)(h.X, {
                children: e.gameTitle,
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "game_metadata"), e.gameTitleLinkTo),
                onClick: e.onGameTitleClick,
                "data-test-selector": Ne.GameLink,
                "data-a-target": "preview-card-game-link"
            }, "game-link"));
            var D = e.title && (0,
            r.jsx)(m.B, {
                children: e.title,
                onClick: e.onVideoTitleClick || e.onClick,
                "data-focusable": !0,
                linkTo: (0,
                j.V)((0,
                C.d)(e.trackingContext, "video_title"), e.linkTo)
            })
              , V = {
                image: f,
                linkProps: k,
                topLeft: i,
                topRight: o,
                bottomLeft: s,
                bottomRight: c,
                cover: t,
                hoverAccentColor: e.primaryColorHex
            };
            return (0,
            r.jsx)(x.Z, (0,
            a.__assign)({}, (0,
            y.Fh)(e), {
                margin: 0,
                image: (0,
                r.jsxs)(g.P, {
                    position: p.yX.Relative,
                    children: [e.thumbnailContainsSexualThemes ? (0,
                    r.jsx)(T.O, (0,
                    a.__assign)({
                        hasVodRestrictionOverlay: e.isRestricted
                    }, V)) : (0,
                    r.jsx)(u.G, (0,
                    a.__assign)({}, V)), N]
                }),
                meta: (0,
                r.jsx)(b.W, {
                    image: P(e),
                    title: D,
                    links: w,
                    actions: F,
                    menu: e.channelLogin && e.channelID && (0,
                    r.jsx)(Q._, {
                        reportButtonIconSize: S.f.Small,
                        reportMenuItems: [{
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            reportContext: {
                                contentType: R.Cah.VOD_REPORT,
                                contentID: e.vodID,
                                trackingContext: "vod_preview_tile"
                            }
                        }]
                    })
                })
            }))
        }
          , Ye = function(e) {
            return !!(e.videoGameChanges && e.videoGameChanges.length > 0) && e.multipleVideoGameMarkersType === Pe.n.Balloon
        }
          , en = function(e, n, t, i, a) {
            switch (e) {
            case Pe.n.Balloon:
                return (0,
                r.jsx)(ze, {
                    videoGameChanges: n,
                    onBalloonClick: t,
                    onBalloonItemClick: i
                });
            case Pe.n.Inline:
                return (0,
                r.jsx)(He, {
                    videoGameChanges: n,
                    trackingContext: a
                });
            case Pe.n.None:
                return null;
            default:
                return e
            }
        }
          , nn = (0,
        s.W)("PreviewCard", {
            autoReportInteractive: !0
        })((function(e) {
            return (0,
            l.Rd)(e) ? (0,
            r.jsx)(X, (0,
            a.__assign)({}, e)) : (0,
            l._M)(e) ? (0,
            r.jsx)(Ke, (0,
            a.__assign)({}, e)) : (0,
            l.y_)(e) ? (0,
            r.jsx)(Te, (0,
            a.__assign)({}, e)) : null
        }
        ))
    },
    343584: function(e, n, t) {
        "use strict";
        var i;
        function a(e) {
            return void 0 !== e.streamType
        }
        function r(e) {
            return void 0 !== e.watchedProgressPercent
        }
        function o(e) {
            return void 0 !== e.clipCreatedByChannelLogin
        }
        t.d(n, {
            Rd: function() {
                return o
            },
            _M: function() {
                return r
            },
            oT: function() {
                return i
            },
            y_: function() {
                return a
            }
        }),
        function(e) {
            e[e.SingleGameList = 1] = "SingleGameList",
            e[e.SingleChannelList = 2] = "SingleChannelList",
            e[e.MixedGameAndChannelList = 3] = "MixedGameAndChannelList"
        }(i || (i = {}))
    },
    82149: function(e, n, t) {
        "use strict";
        t.d(n, {
            J: function() {
                return r
            },
            n: function() {
                return i
            }
        });
        var i, a = t(960688);
        !function(e) {
            e.None = "None",
            e.Inline = "Inline",
            e.Balloon = "moments_with_images"
        }(i || (i = {}));
        var r = function() {
            switch (a.x2.experiments.getAndTrackAssignment("TWILIGHT_ARCHER")) {
            case "moments_with_images":
                return i.Balloon;
            case "inline":
                return i.Inline;
            default:
                return i.None
            }
        }
    },
    950503: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            },
            d: function() {
                return r
            }
        });
        var i = t(960688);
        function a(e) {
            return "en" !== (i.x2.intl.getLanguageCode() || "en").slice(0, 2) ? e : e.charAt(0).toUpperCase().concat(e.slice(1))
        }
        function r(e, n) {
            return {
                content: e && e.content ? e.content : n,
                medium: e && e.medium
            }
        }
    },
    974365: function(e, n, t) {
        "use strict";
        t.d(n, {
            V: function() {
                return o
            }
        });
        var i = t(500463)
          , a = t(518269)
          , r = function(e, n) {
            return function(t) {
                null == e || e(t),
                n(t)
            }
        }
          , o = function(e, n) {
            var t = (0,
            i.L)(e, n)
              , o = t.elementRef
              , s = t.itemTrackingID
              , l = t.trackClick
              , c = t.locationState;
            return {
                elementRef: o,
                itemTrackingID: s,
                cardProps: {
                    tagListProps: t.tagListProps,
                    trackingContext: c.medium && {
                        medium: c.medium,
                        content: c.content
                    },
                    linkTo: (0,
                    a.F)(e.linkTo, c),
                    channelLinkTo: (0,
                    a.F)(e.channelLinkTo, c),
                    gameTitleLinkTo: (0,
                    a.F)(e.gameTitleLinkTo, c),
                    onVideoTitleClick: r(e.onVideoTitleClick, (function() {
                        return l("video_title")
                    }
                    )),
                    onThumbnailClick: r(e.onThumbnailClick, (function() {
                        return l("video_thumbnail")
                    }
                    )),
                    onChannelLoginClick: r(e.onChannelLoginClick, (function() {
                        return l("channel_metadata")
                    }
                    )),
                    onChannelImageClick: r(e.onChannelImageClick, (function() {
                        return l("user_thumbnail")
                    }
                    )),
                    onGameTitleClick: r(e.onGameTitleClick, (function() {
                        return l("game_name")
                    }
                    ))
                }
            }
        }
    },
    698672: function(e, n, t) {
        "use strict";
        t.d(n, {
            Y: function() {
                return o
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = (t(296540),
        t(974365))
          , o = function(e, n, t) {
            return function(o) {
                return function(s) {
                    var l = (0,
                    r.V)(s, {
                        content: n,
                        page: e,
                        section: t
                    });
                    return (0,
                    a.jsx)("div", {
                        ref: l.elementRef,
                        children: (0,
                        a.jsx)(o, (0,
                        i.__assign)({}, s, l.cardProps))
                    })
                }
            }
        }
    },
    536315: function(e, n, t) {
        "use strict";
        t.d(n, {
            iG: function() {
                return u
            },
            Wz: function() {
                return i
            }
        });
        var i, a = t(331635), r = t(474848), o = t(246942), s = t.n(o), l = t(296540), c = t(959385);
        !function(e) {
            e[e.Up = 0] = "Up",
            e[e.Down = 1] = "Down"
        }(i || (i = {}));
        var d = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.state = {
                    hasPendingLoadMoreRequest: !1,
                    loadedMore: !0
                },
                n.element = null,
                n.wrapElement = null,
                n.isTriggerVisible = function(e, n) {
                    var t = n.top
                      , i = n.top + n.height;
                    return !(e.bottom < t || e.top > i)
                }
                ,
                n.getOrientation = function() {
                    return void 0 === n.props.orientation ? i.Up : n.props.orientation
                }
                ,
                n.setWrapRef = function(e) {
                    return n.wrapElement = e
                }
                ,
                n.setRef = function(e) {
                    return n.element = e
                }
                ,
                n
            }
            return (0,
            a.__extends)(n, e),
            n.prototype.render = function() {
                var e = this.getOrientation()
                  , n = s()({
                    "scrollable-trigger__trigger-area": !0,
                    "scrollable-trigger__trigger-area--up": e === i.Up,
                    "scrollable-trigger__trigger-area--down": e === i.Down
                })
                  , t = {
                    height: this.props.pixelThreshold || 100
                };
                return (0,
                r.jsx)("div", {
                    className: "scrollable-trigger__wrapper",
                    ref: this.setWrapRef,
                    children: (0,
                    r.jsx)("div", {
                        className: n,
                        ref: this.setRef,
                        style: t
                    })
                })
            }
            ,
            n.prototype.componentDidMount = function() {
                this.unregister = this.props.registerReceiver(this)
            }
            ,
            n.prototype.componentWillUnmount = function() {
                var e;
                null === (e = this.unregister) || void 0 === e || e.call(this)
            }
            ,
            n.prototype.componentDidUpdate = function(e) {
                return !e.enabled && this.props.enabled && this.props.requestVisibilityCheck(this),
                null
            }
            ,
            n.prototype.checkVisible = function(e, n, t) {
                return (0,
                a.__awaiter)(this, void 0, void 0, (function() {
                    var n, i, r, o, s = this;
                    return (0,
                    a.__generator)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            if (void 0 === t && (t = this.props.requestCap || 5),
                            !(this.wrapElement && this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && t > 0))
                                return [3, 4];
                            if (n = this.element.getBoundingClientRect(),
                            i = this.props.contentLength,
                            r = this.wrapElement.offsetTop,
                            !this.isTriggerVisible(n, e))
                                return [3, 4];
                            this.setState({
                                hasPendingLoadMoreRequest: !0
                            }),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]),
                            [4, this.props.loadMore()];
                        case 2:
                            return a.sent(),
                            this.setState({
                                hasPendingLoadMoreRequest: !1
                            }),
                            requestAnimationFrame((function() {
                                var n;
                                s.element && (n = void 0 !== s.props.contentLength && void 0 !== i ? s.props.contentLength > i : s.wrapElement.offsetTop > r,
                                s.setState({
                                    loadedMore: n
                                }),
                                t && (n || s.props.forceLoadMoreContent) && s.checkVisible(e, void 0, t - 1))
                            }
                            )),
                            [3, 4];
                        case 3:
                            throw o = a.sent(),
                            this.element && this.setState({
                                hasPendingLoadMoreRequest: !1
                            }),
                            o;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            n
        }(l.Component)
          , u = (0,
        c.UJ)((function(e) {
            return {
                registerReceiver: e.registerReceiver,
                requestVisibilityCheck: e.requestVisibilityCheck
            }
        }
        ))(d)
    },
    386879: function(e, n, t) {
        "use strict";
        t.d(n, {
            q: function() {
                return T
            }
        });
        var i, a, r, o = t(331635), s = t(474848), l = t(912800), c = t(731667), d = t(959340), u = t(914421), m = t(97774), g = t(312663), p = t(588702), f = t(445373), h = t(246942), v = t.n(h), k = t(296540), y = t(960688), x = t(440549), b = ((i = {})[x.P.Live] = "stream-type-indicator--live",
        i[x.P.Premiere] = "stream-type-indicator--premiere",
        i[x.P.Rerun] = "stream-type-indicator--rerun",
        i[x.P.WatchParty] = "stream-type-indicator--rerun",
        i), S = ((a = {})[x.P.Premiere] = l.t.VideoPremiere,
        a[x.P.Rerun] = l.t.VideoRerun,
        a[x.P.WatchParty] = l.t.VideoRerun,
        a), _ = ((r = {})[x.P.Premiere] = c.H.Live,
        r[x.P.Rerun] = c.H.Inherit,
        r[x.P.WatchParty] = c.H.Inherit,
        r), T = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return (0,
            o.__extends)(n, e),
            n.prototype.render = function() {
                return (0,
                s.jsxs)(d.P, {
                    className: this.getClassNames(),
                    color: u.Q1.Overlay,
                    background: u.VS.Overlay,
                    padding: {
                        x: .5
                    },
                    borderRadius: m.Z.Small,
                    display: u.nl.Flex,
                    children: [this.getIcon(), (0,
                    s.jsx)(g.N, {
                        type: p.M2.Span,
                        children: this.getLabel()
                    })]
                })
            }
            ,
            n.prototype.getClassNames = function() {
                var e = {
                    "stream-type-indicator": !0
                };
                return e[b[this.props.type]] = !0,
                v()(e)
            }
            ,
            n.prototype.getIcon = function() {
                var e;
                if (!this.props.hosting)
                    return e = this.props.type === x.P.Live ? (0,
                    s.jsx)(d.P, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.nl.Flex,
                        alignItems: u.k2.Center,
                        children: (0,
                        s.jsx)(f.TU, {
                            status: f.dE.Live,
                            size: f.Qw.Small
                        })
                    }) : (0,
                    s.jsx)(c.t, {
                        asset: S[this.props.type],
                        type: _[this.props.type],
                        width: 14,
                        height: 14
                    }),
                    (0,
                    s.jsx)(d.P, {
                        display: u.nl.Flex,
                        alignItems: u.k2.Center,
                        margin: {
                            right: .5
                        },
                        children: e
                    })
            }
            ,
            n.prototype.getLabel = function() {
                if (this.props.hosting)
                    return (0,
                    y.hw)("Hosting", "StreamTypeIndicator");
                switch (this.props.type) {
                case x.P.Live:
                    return (0,
                    y.hw)("LIVE", "StreamTypeIndicator");
                case x.P.Premiere:
                    return (0,
                    y.hw)("Premiere", "StreamTypeIndicator");
                case x.P.Rerun:
                case x.P.WatchParty:
                    return (0,
                    y.hw)("Rerun", "StreamTypeIndicator");
                default:
                    return ""
                }
            }
            ,
            n
        }(k.Component)
    },
    98783: function(e, n, t) {
        "use strict";
        t.d(n, {
            M5: function() {
                return i
            },
            eO: function() {
                return a
            },
            hj: function() {
                return r
            }
        });
        var i = "1669431183"
          , a = "cplat_dragon_journal_category"
          , r = function(e) {
            return "DJs" === e || "9G485FV" === e
        }
    },
    449103: function(e, n, t) {
        "use strict";
        t.d(n, {
            $i: function() {
                return l
            },
            AN: function() {
                return c
            },
            Rx: function() {
                return o
            },
            dL: function() {
                return s
            }
        });
        var i = t(960688)
          , a = [{
            code: "ar",
            label: "العربية"
        }, {
            code: "bg",
            label: "Български"
        }, {
            code: "ca",
            label: "Català"
        }, {
            code: "cs",
            label: "Čeština"
        }, {
            code: "da",
            label: "Dansk"
        }, {
            code: "de",
            label: "Deutsch"
        }, {
            code: "el",
            label: "Ελληνικά"
        }, {
            code: "en",
            label: "English"
        }, {
            code: "es",
            label: "Español"
        }, {
            code: "fi",
            label: "Suomi"
        }, {
            code: "fr",
            label: "Français"
        }, {
            code: "hi",
            label: "मानक हिन्दी"
        }, {
            code: "hu",
            label: "Magyar"
        }, {
            code: "id",
            label: "Bahasa Indonesia"
        }, {
            code: "it",
            label: "Italiano"
        }, {
            code: "ja",
            label: "日本語"
        }, {
            code: "ko",
            label: "한국어"
        }, {
            code: "ms",
            label: "بهاس ملايو"
        }, {
            code: "nl",
            label: "Nederlands"
        }, {
            code: "no",
            label: "Norsk"
        }, {
            code: "pl",
            label: "Polski"
        }, {
            code: "pt",
            label: "Português"
        }, {
            code: "ro",
            label: "Română"
        }, {
            code: "ru",
            label: "Русский"
        }, {
            code: "sk",
            label: "Slovenčina"
        }, {
            code: "sv",
            label: "Svenska"
        }, {
            code: "th",
            label: "ภาษาไทย"
        }, {
            code: "tl",
            label: "Tagalog"
        }, {
            code: "tr",
            label: "Türkçe"
        }, {
            code: "uk",
            label: "Українська"
        }, {
            code: "vi",
            label: "Tiếng Việt"
        }, {
            code: "zh",
            label: "中文"
        }, {
            code: "zh-hk",
            label: "粵語"
        }];
        function r(e) {
            return void 0 === e && (e = !1),
            [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? (0,
                i.hw)("Other", "broadcaster-languages") : "Other"
            }]
        }
        var o = a.concat(r()).map((function(e) {
            return e.code
        }
        ))
          , s = new Set(o);
        function l(e) {
            return a.concat(r(!0)).find((function(n) {
                return n.code === e
            }
            ))
        }
        function c() {
            var e = i.x2.intl.getLanguageCode()
              , n = function(n) {
                return "en" === n.code ? 1 : e && e.startsWith(n.code.split("-")[0]) ? 0 : 2
            };
            return a.slice().sort((function(e, t) {
                var i = n(e)
                  , a = n(t);
                return i !== a ? i - a : "".concat(i, ":").concat(e.label) < "".concat(a, ":").concat(t.label) ? -1 : 1
            }
            )).concat(r(!0))
        }
    },
    298588: function(e, n, t) {
        "use strict";
        function i(e) {
            var n = Date.now() - e;
            return function() {
                var t = Date.now();
                return n + e <= t ? (n = t,
                "network-only") : "cache-first"
            }
        }
        t.d(n, {
            e: function() {
                return i
            }
        })
    },
    373112: function(e, n, t) {
        "use strict";
        t.d(n, {
            o: function() {
                return a
            }
        });
        var i = 10;
        function a(e, n, t) {
            if (void 0 === t && (t = 1),
            !n || !e)
                return -1;
            var a = window.getComputedStyle(document.documentElement).fontSize || i.toString()
              , r = parseFloat(a) / i;
            return Math.floor(e / (n * r)) * t
        }
    },
    382950: function(e, n, t) {
        "use strict";
        t.d(n, {
            B: function() {
                return u
            }
        });
        var i = t(298588)
          , a = t(10653)
          , r = t(183094)
          , o = t(960688)
          , s = "page_ttl"
          , l = function() {
            return o.me.get(s, {})
        }
          , c = 3e5
          , d = (0,
        i.e)(c)
          , u = function(e, n) {
            var t, i = Date.now(), u = (t = n,
            l()[t] || 0), m = u && u + c <= i;
            return "POP" !== e.history.action && !(0,
            a.U)(n) && 0 === (0,
            r.x3)(n) || m ? (function(e, n) {
                var t = l();
                t[e] = n,
                o.me.set(s, t)
            }(n, i),
            d()) : "cache-first"
        }
    },
    10653: function(e, n, t) {
        "use strict";
        t.d(n, {
            U: function() {
                return o
            },
            y: function() {
                return s
            }
        });
        var i = t(960688)
          , a = "directory_cache_first"
          , r = function() {
            return i.me.get(a, {})
        }
          , o = function(e) {
            return r()[e]
        }
          , s = function(e, n) {
            var t = r();
            t[e] = n,
            i.me.set(a, t)
        }
    },
    183094: function(e, n, t) {
        "use strict";
        t.d(n, {
            _M: function() {
                return l
            },
            hP: function() {
                return s
            },
            x3: function() {
                return o
            }
        });
        var i = t(960688)
          , a = "page_scroll_position"
          , r = function() {
            return i.me.get(a, {})
        }
          , o = function(e) {
            return r()[e] || 0
        }
          , s = function(e, n) {
            var t = r();
            t[e] = n,
            i.me.set(a, t)
        }
          , l = function(e) {
            s(e, 0)
        }
    },
    473452: function(e, n, t) {
        "use strict";
        t.d(n, {
            CB: function() {
                return c
            },
            CJ: function() {
                return d
            },
            Ix: function() {
                return l
            }
        });
        var i = t(331635)
          , a = t(960688)
          , r = t(449103)
          , o = t(62749)
          , s = "languageDirectoryFilters";
        function l(e, n) {
            var t = this;
            return function(r) {
                return (0,
                i.__awaiter)(t, void 0, void 0, (function() {
                    var t, l;
                    return (0,
                    i.__generator)(this, (function(i) {
                        return t = new Set(d()),
                        n ? t.add(e) : t.delete(e),
                        l = Array.from(t),
                        a.IG.set(s, l),
                        r((0,
                        o.v)(l)),
                        [2]
                    }
                    ))
                }
                ))
            }
        }
        function c() {
            var e = this;
            return function(n) {
                return (0,
                i.__awaiter)(e, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(e) {
                        return a.IG.set(s, []),
                        n((0,
                        o.v)([])),
                        [2]
                    }
                    ))
                }
                ))
            }
        }
        function d() {
            return a.IG.get(s, []).filter((function(e) {
                return r.dL.has(e)
            }
            ))
        }
    },
    62749: function(e, n, t) {
        "use strict";
        t.d(n, {
            c: function() {
                return i
            },
            v: function() {
                return a
            }
        });
        var i = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";
        function a(e) {
            return {
                type: i,
                languagePreferences: e
            }
        }
    },
    686143: function(e, n, t) {
        "use strict";
        t.d(n, {
            HU: function() {
                return s
            }
        });
        var i = t(331635)
          , a = t(960688)
          , r = t(62749)
          , o = t(473452);
        function s(e) {
            return e.userPreferences.languagePreferences
        }
        a.x2.store.registerReducer("userPreferences", (function(e, n) {
            return void 0 === e && (e = {
                languagePreferences: (0,
                o.CJ)()
            }),
            n.type === r.c ? (0,
            i.__assign)((0,
            i.__assign)({}, e), {
                languagePreferences: n.languagePreferences
            }) : e
        }
        ))
    },
    971702: function(e, n, t) {
        "use strict";
        function i(e) {
            for (var n = e.length - 1; n > 0; n--) {
                var t = Math.floor(Math.random() * (n + 1))
                  , i = e[n];
                e[n] = e[t],
                e[t] = i
            }
            return e
        }
        t.d(n, {
            R: function() {
                return i
            }
        })
    },
    401077: function(e, n, t) {
        "use strict";
        function i(e, n, t) {
            if (!n)
                return "".concat(e.map((function(e) {
                    return e.id
                }
                )).join(""), "--").concat(t)
        }
        t.d(n, {
            t: function() {
                return i
            }
        })
    },
    212879: function(e, n, t) {
        "use strict";
        t.d(n, {
            H: function() {
                return r
            }
        });
        var i = t(296540)
          , a = t(168096)
          , r = function(e) {
            var n = e.impressionKey
              , t = e.onFirstImpression
              , r = e.tagList
              , o = (0,
            i.useRef)(!1)
              , s = (0,
            i.useState)(0)
              , l = s[0]
              , c = s[1];
            return (0,
            i.useEffect)((function() {
                o.current || l > 0 && r && (o.current = !0,
                t())
            }
            ), [l, t, r]),
            (0,
            a.X)({
                onFirstImpression: function() {
                    o.current = !1,
                    c((function(e) {
                        return e + 1
                    }
                    ))
                },
                percentage: 75,
                impressionKey: n
            })
        }
    },
    500463: function(e, n, t) {
        "use strict";
        t.d(n, {
            L: function() {
                return d
            }
        });
        var i = t(331635)
          , a = t(296540)
          , r = t(960688)
          , o = t(909807)
          , s = t(807975)
          , l = t(212879)
          , c = t(149820)
          , d = function(e, n) {
            var t, d = n.page, u = n.content, m = n.section, g = n.sectionID, p = n.tagFilters, f = void 0 === p ? [] : p, h = n.freeformTagFilter, v = void 0 === h ? "" : h, k = n.extendLocationState, y = (0,
            a.useRef)((0,
            s.XQ)()).current, x = null !== (t = e.trackingProps) && void 0 !== t ? t : {}, b = "thumbnailContainsSexualThemes"in e && e.thumbnailContainsSexualThemes, S = "isDJ"in e && e.isDJ, _ = (0,
            c.b)("tagListProps"in e ? e.tagListProps : void 0), T = _[0], C = _[1], N = _[2], w = (0,
            a.useMemo)((function() {
                var e;
                return null !== (e = null == T ? void 0 : T.map((function(e) {
                    return e.id
                }
                ))) && void 0 !== e ? e : []
            }
            ), [T]), j = (0,
            a.useMemo)((function() {
                var e;
                return null !== (e = null == C ? void 0 : C.map((function(e) {
                    return e.name
                }
                ))) && void 0 !== e ? e : []
            }
            ), [C]), P = function() {
                return (0,
                o.f)(y, x, w, f, j, v, d, u, m, g, b, S)
            }, F = function() {
                var n, t, a = P();
                r.E5.__track_SSRMigrationFixme("item_display", (0,
                i.__assign)((0,
                i.__assign)({}, a), {
                    guest_star_session_id: (null === (n = e.trackingProps) || void 0 === n ? void 0 : n.guestStarSessionID) || void 0,
                    guests_pushed_to_obs: (null === (t = e.trackingProps) || void 0 === t ? void 0 : t.guestsPushedToOBS) || void 0
                }))
            }, D = function(e) {
                var n = P();
                r.E5.__track_SSRMigrationFixme("item_click", (0,
                i.__assign)((0,
                i.__assign)({}, n), {
                    component: "tag",
                    item_subsection: s.Ze.Card,
                    tag_id: e.id
                }))
            }, I = (0,
            l.H)({
                impressionKey: e.impressionKey,
                tagList: [].concat(null != T ? T : [], null != C ? C : []),
                onFirstImpression: F
            }).elementRef, L = N && (0,
            i.__assign)((0,
            i.__assign)({}, N), {
                callback: function(e, n) {
                    var t;
                    null === (t = N.callback) || void 0 === t || t.call(N, e, n),
                    D(n)
                },
                freeformTagsCallback: function(e, n) {
                    var t;
                    null === (t = N.freeformTagsCallback) || void 0 === t || t.call(N, e, n),
                    function(e) {
                        var n = P();
                        r.E5.__track_SSRMigrationFixme("item_click", (0,
                        i.__assign)((0,
                        i.__assign)({}, n), {
                            component: "tag",
                            item_subsection: s.Ze.Card,
                            freeform_tag_name: e.name
                        }))
                    }(n)
                }
            }), A = (0,
            o.L)(y, w, (0,
            i.__spreadArray)([], f, !0), j, v, d, m);
            return k && (A = k(A, y)),
            {
                elementRef: I,
                locationState: (0,
                i.__assign)((0,
                i.__assign)({}, A), {
                    row_name: x.rowName,
                    row_position: x.rowPosition
                }),
                itemTrackingID: y,
                trackClick: function(n) {
                    var t, a, o = P();
                    r.E5.__track_SSRMigrationFixme("item_click", (0,
                    i.__assign)((0,
                    i.__assign)({}, o), {
                        component: n,
                        guest_star_session_id: (null === (t = e.trackingProps) || void 0 === t ? void 0 : t.guestStarSessionID) || void 0,
                        guests_pushed_to_obs: (null === (a = e.trackingProps) || void 0 === a ? void 0 : a.guestsPushedToOBS) || void 0
                    }))
                },
                trackImpression: F,
                trackTagClick: D,
                tagList: T,
                tagListProps: L
            }
        }
    },
    149820: function(e, n, t) {
        "use strict";
        t.d(n, {
            b: function() {
                return r
            }
        });
        var i = t(331635)
          , a = t(296540)
          , r = function(e) {
            var n = (0,
            a.useState)(null)
              , t = n[0]
              , r = n[1]
              , o = (0,
            a.useState)(null)
              , s = o[0]
              , l = o[1];
            return e ? [t, s, (0,
            i.__assign)((0,
            i.__assign)({}, e), {
                tagsShownCallback: r,
                freeformTagsShownCallback: l
            })] : [t, s, void 0]
        }
    },
    518269: function(e, n, t) {
        "use strict";
        t.d(n, {
            F: function() {
                return a
            }
        });
        var i = t(331635)
          , a = function(e, n) {
            if (e)
                return e = function(e) {
                    return "string" == typeof e && (e = {
                        pathname: e
                    }),
                    e
                }(e),
                (0,
                i.__assign)((0,
                i.__assign)({}, e), {
                    state: (0,
                    i.__assign)((0,
                    i.__assign)({}, e.state), n)
                })
        }
    },
    909807: function(e, n, t) {
        "use strict";
        t.d(n, {
            L: function() {
                return l
            },
            f: function() {
                return s
            }
        });
        var i = t(331635)
          , a = t(960688)
          , r = t(807975)
          , o = t(929477)
          , s = function(e, n, t, i, o, s, l, c, d, u, m, g) {
            var p, f, h = n.category, v = n.collection, k = n.channelID, y = n.gameID, x = n.vodID, b = n.itemPosition, S = n.itemPositionOrganic, _ = n.isPromotion, T = n.itemViewCount, C = n.rowPosition, N = n.modelTrackingID, w = n.rowName, j = n.sortType, P = n.isNewGame, F = n.clipSlug, D = n.isClipFeatured, I = null !== (p = a.x2.history.location.state) && void 0 !== p ? p : {};
            return {
                category: null != h ? h : null,
                collection: null != v ? v : null,
                channel_id: void 0 !== k ? Number(k) : null,
                clip_slug: null != F ? F : null,
                component: null,
                content_type: c,
                filtered: i.length > 0,
                freeform_tag_filter: s,
                freeform_tag_name: null,
                freeform_tag_set: JSON.stringify(o),
                is_clip_featured: D,
                is_promotion: null != _ ? _ : null,
                is_new_game: null != P ? P : null,
                game_id: y || null,
                vod_id: x || null,
                item_page: l,
                item_position: null != b ? b : null,
                item_position_organic: null != S ? S : null,
                item_subsection: r.Ze.Card,
                item_tracking_id: e,
                item_viewcount: null != T ? T : null,
                model_tracking_id: null != N ? N : null,
                page_session_id: a.x2.session.pageviewID,
                previous_tracking_id: d === r.VG.BrowsableCollection ? I.collection_referrer_tracking_id : null !== (f = I.category_tracking_id) && void 0 !== f ? f : null,
                reason_target: null,
                reason_target_type: null,
                reason_type: null,
                request_id: null,
                row_name: null != w ? w : null,
                row_position: null != C ? C : null,
                section: null != d ? d : null,
                section_id: d === r.VG.TwitchHome && null != u ? u : null,
                stream_ccu: null != T ? T : null,
                sort_type: j || null,
                tag_id: null,
                tag_set: JSON.stringify(t),
                is_mature_content_blurred: m,
                is_participating_dj: g
            }
        }
          , l = function(e, n, t, s, l, c, d) {
            var u, m = {
                tag_set: JSON.stringify(n),
                tag_filter_set: JSON.stringify(t),
                freeform_tag_display: JSON.stringify(s),
                freeform_tag_filter: l,
                medium: c
            }, g = null !== (u = a.x2.history.location.state) && void 0 !== u ? u : {};
            if (g.category_tracking_id)
                m.item_tracking_id = e,
                m.medium = g.medium,
                m.content = g.content;
            else if (g.collection_referrer_tracking_id && d === r.VG.BrowsableCollection)
                m.item_tracking_id = e,
                m.medium = g.medium,
                m.content = g.content;
            else if (d === r.VG.BrowseLiveChannels || d === r.VG.BrowseInCategoryChannels || d === r.VG.BrowsableCollection)
                m.item_tracking_id = e;
            else {
                if ("POP" === a.x2.history.action)
                    return m;
                "twitch_home" !== g.medium && "anon_home" !== g.medium || (m.item_tracking_id = g.item_tracking_id,
                m.medium = g.medium,
                m.content = g.content)
            }
            var p = (0,
            o.aI)();
            return p && (m = (0,
            i.__assign)((0,
            i.__assign)({}, m), p)),
            m
        }
    },
    215546: function(e, n, t) {
        "use strict";
        t.d(n, {
            o: function() {
                return p
            }
        });
        var i = t(474848)
          , a = t(959340)
          , r = t(463201)
          , o = t(941084)
          , s = t(60762)
          , l = t(564368)
          , c = t(296540)
          , d = t(415044)
          , u = t(960688)
          , m = t(131883)
          , g = t(861642)
          , p = function(e) {
            var n, t, l = "content-classification-labels-banner-dismissed:".concat(null !== (n = e.categorySlug) && void 0 !== n ? n : ""), p = (0,
            c.useState)(u.me.get(l, !1)), h = p[0], v = p[1], k = (0,
            d.d4)(m.M3), y = (0,
            c.useState)(e.categorySlug), x = y[0], b = y[1];
            if (e.categorySlug !== x && (b(e.categorySlug),
            v(u.me.get(l, !1))),
            h)
                return null;
            var S = null === (t = e.bannerType) || void 0 === t ? void 0 : t[0]
              , _ = f(S)
              , T = _.buttonType
              , C = _.description
              , N = _.title;
            return N ? (0,
            i.jsx)(a.P, {
                margin: 1,
                children: (0,
                i.jsx)(r.P, {
                    closeButton: {
                        "aria-label": (0,
                        u.hw)("Close", "ContentClassificationLabelBanner"),
                        onClick: function() {
                            (0,
                            g.Mk)(),
                            v(!0),
                            u.me.set(l, !0)
                        }
                    },
                    orientation: r.F.Row,
                    message: (0,
                    i.jsx)(o.k, {
                        title: N,
                        inline: !0,
                        description: C
                    }),
                    actions: (0,
                    i.jsx)(s.p, {
                        primaryButton: {
                            targetBlank: !k,
                            children: (0,
                            u.hw)("Manage Settings", "ContentClassificationLabelBanner"),
                            type: T,
                            onClick: function() {
                                return g.cE
                            },
                            linkTo: {
                                state: {
                                    medium: "discovery_banner",
                                    content: "manage_settings_button"
                                },
                                pathname: k ? "/settings/content-preferences" : "https://help.twitch.tv/s/article/how-to-customize-content#ContentDisplayPreferences"
                            }
                        }
                    })
                })
            }) : null
        }
          , f = function(e) {
            switch (e) {
            case "MAY_CONTAIN_MATURE_CONTENT":
                return {
                    title: (0,
                    u.hw)("May Contain Labeled Content", "ContentClassificationLabelBanner"),
                    description: (0,
                    u.hw)("You can control the types of content you see on Twitch in your settings.", "ContentClassificationLabelBanner"),
                    buttonType: l.VQ.Primary
                };
            case "DISCOVERY_PREFERENCE":
                return {
                    title: (0,
                    u.hw)("Content Hidden", "ContentClassificationLabelBanner"),
                    description: (0,
                    u.hw)("Some content has been removed based on your content preference settings.", "ContentClassificationLabelBanner"),
                    buttonType: l.VQ.Secondary
                };
            default:
                return {}
            }
        }
    },
    664068: function(e, n, t) {
        "use strict";
        t.d(n, {
            r: function() {
                return c
            },
            t: function() {
                return i
            }
        });
        var i, a = t(474848), r = t(959340), o = t(914421), s = t(297577), l = (t(296540),
        t(960688));
        !function(e) {
            e.FilterBy = "filter-by",
            e.SortBy = "sort-by"
        }(i || (i = {}));
        var c = function(e) {
            var n = "browse-header-".concat(i.FilterBy);
            return (0,
            a.jsx)(r.P, {
                flexGrow: 0,
                flexShrink: 0,
                padding: {
                    right: .5
                },
                alignSelf: o.gB.Center,
                children: (0,
                a.jsx)(s.lR, {
                    id: n,
                    label: e.type === i.FilterBy ? (0,
                    l.hw)("Filter by Tag", "DirectoryFilterByText") : (0,
                    l.hw)("Sort by", "DirectoryFilterByText")
                })
            })
        }
    },
    190104: function(e, n, t) {
        "use strict";
        t.d(n, {
            Ne: function() {
                return Q
            },
            Uv: function() {
                return W
            },
            AV: function() {
                return Z
            },
            uO: function() {
                return $
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(216042)
          , o = t(959340)
          , s = t(914421)
          , l = t(391186)
          , c = t(235233)
          , d = t(973474)
          , u = t(36935)
          , m = t(588702)
          , g = t(70931)
          , p = t(26538)
          , f = t(312663)
          , h = t(552153)
          , v = t(305528)
          , k = t(28974)
          , y = t(296540)
          , x = t(868238)
          , b = t(960688)
          , S = t(928778)
          , _ = t(337930)
          , T = t(672052)
          , C = t(145463)
          , N = t(72657)
          , w = t(536687)
          , j = t(657982)
          , P = t(302481)
          , F = t(82984)
          , D = t(564368)
          , I = t(938254)
          , L = t(168096)
          , A = t(345029)
          , R = t(364539);
        function E(e) {
            var n = (0,
            L.X)({
                onFirstImpression: function() {
                    return (0,
                    R.$_)(r)
                },
                percentage: 75
            }).elementRef;
            if ("US" !== (0,
            A.If)())
                return null;
            var t = (0,
            b.hw)("Play on Luna", "PrestoButton")
              , r = {
                section: R.VG.GameDirectory,
                item_subsection: R.i8.Launch,
                category: e.categoryID,
                item_page: "twitch_game_directory"
            };
            return (0,
            a.jsx)("div", {
                ref: n,
                children: (0,
                a.jsx)(D.$n, {
                    "aria-label": t,
                    "data-test-selector": "presto-button",
                    icon: I.u,
                    linkTo: "https://luna.amazon.com/detail/".concat(e.prestoID, "?ref=twitch&autoplay=1&g=web"),
                    size: D.Mp.Large,
                    targetBlank: !0,
                    title: e.title,
                    variant: D.VQ.Secondary,
                    onClick: function() {
                        (0,
                        R.BE)((0,
                        i.__assign)({}, r))
                    },
                    children: t
                })
            })
        }
        var V = t(427605)
          , B = t(415044)
          , G = t(312524)
          , M = (0,
        B.Ng)((function(e) {
            return {
                languageCode: e.session.languageCode
            }
        }
        ))((function(e) {
            var n = e.gameDescription
              , t = e.languageCode
              , i = e.showMoreDetailsLink
              , r = e.descriptionFontSize
              , l = e.isTimeToStreamVariant
              , c = (0,
            y.useRef)(null)
              , d = (0,
            G.d)(null)
              , u = [G.E.XS, G.E.SM].includes(d)
              , m = (0,
            y.useState)(null === i)
              , g = m[0]
              , p = m[1]
              , h = (0,
            y.useState)(!1)
              , v = h[0]
              , x = h[1]
              , b = "en" === t.toLowerCase() && n ? "".concat(n, " ") : null;
            (0,
            y.useEffect)((function() {
                b && c.current && !g && (c.current.scrollHeight > c.current.clientHeight && x(!0),
                p(!0))
            }
            ), [b, g, c]);
            return (0,
            a.jsx)(o.P, {
                className: "directory-header-new__description",
                margin: {
                    top: .5
                },
                children: (0,
                a.jsx)(f.N, {
                    color: s.Q1.Alt2,
                    fontSize: null != r ? r : s.Z4.Size5,
                    fontWeight: s.IT.Regular,
                    children: (0,
                    a.jsx)("div", {
                        ref: c,
                        children: (0,
                        a.jsxs)(o.P, {
                            display: s.nl.Flex,
                            alignItems: s.k2.End,
                            visibility: g ? s.bv.Visible : s.bv.Hidden,
                            children: [b && (0,
                            a.jsx)(o.P, {
                                className: (0,
                                k.cn)({
                                    "directory-header__description--measuring": !g,
                                    "directory-header__description--expanded": !i
                                }),
                                children: (0,
                                a.jsx)(f.N, {
                                    lines: function() {
                                        if (i) {
                                            if (l && !u)
                                                return 4;
                                            if (g)
                                                return 2
                                        }
                                    }(),
                                    "aria-label": null != b ? b : "",
                                    children: b
                                })
                            }), b && g && v && (0,
                            a.jsx)(o.P, {
                                children: i
                            })]
                        })
                    })
                })
            })
        }
        ))
          , z = t(982742)
          , O = function(e) {
            var n = e.content;
            return (0,
            a.jsxs)(o.P, {
                background: s.VS.Base,
                padding: 3,
                children: [(0,
                a.jsx)(z.w, {
                    closeOnBackdropClick: !0,
                    closeOnPageNavigation: !0,
                    displayInset: !0
                }), n]
            })
        }
          , U = t(434891)
          , H = t.n(U);
        function W(e, n) {
            return (0,
            b.hw)("{followerCount} Followers", {
                followerCount: n ? q(e) : e
            }, "DirectoryHeader")
        }
        function $(e, n) {
            return (0,
            b.hw)("{viewerCount} Viewers", {
                viewerCount: n ? q(e) : e
            }, "DirectoryHeader")
        }
        function q(e) {
            return (0,
            a.jsx)("strong", {
                children: e
            })
        }
        function Z(e, n) {
            for (var t = [], i = 0, o = e; i < o.length; i++) {
                var s = o[i];
                s && (0 !== t.length && t.push(n),
                t.push(s))
            }
            return t.map((function(e, n) {
                return (0,
                a.jsx)(r.S, {
                    children: e
                }, "separated-view-".concat(n))
            }
            ))
        }
        var J = function(e) {
            function n() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.igdbLinksEnabled = (0,
                _.fX)("igdb_links_enabled"),
                t.getBannerImage = function() {
                    var e = {
                        height: "100%",
                        position: "absolute",
                        width: "100%",
                        zIndex: -1
                    };
                    return t.props.data.game && t.props.data.game.coverURL && (e.backgroundImage = "url(".concat(t.props.data.game.coverURL, ")")),
                    (0,
                    a.jsx)("div", {
                        className: "directory-header-new__banner",
                        "data-test-selector": "directory-banner-image",
                        style: e
                    })
                }
                ,
                t.getCategoryBoxArt = function(e) {
                    var n, i, r = t.props.data && t.props.data.game && t.props.data.game.displayName, u = t.props.data && t.props.data.game && t.props.data.game.avatarURL;
                    if (!u)
                        return null;
                    var m = null === (i = null === (n = t.props.data) || void 0 === n ? void 0 : n.game) || void 0 === i ? void 0 : i.slug
                      , g = t.props.shouldBoxArtLinkToBrowseCategory && m ? {
                        linkTo: (0,
                        C.V)((0,
                        T.nT)(m)),
                        targetBlank: !0
                    } : void 0;
                    return (0,
                    a.jsx)(o.P, {
                        alignItems: s.k2.Start,
                        display: s.nl.Flex,
                        margin: {
                            right: 3
                        },
                        position: s.yX.Relative,
                        children: (0,
                        a.jsx)(o.P, {
                            className: e ? void 0 : "directory-header-new__box-image",
                            width: e ? "".concat(e, "px") : void 0,
                            elevation: 3,
                            children: (0,
                            a.jsx)(l.G, {
                                ratio: c.gl.BoxArt,
                                linkProps: g,
                                image: (0,
                                a.jsx)(d.L, {
                                    alt: r || (0,
                                    b.hw)("Category Image", "DirectoryHeader"),
                                    src: u
                                }),
                                "data-test-selector": "directory-header-new-avatar-image"
                            })
                        })
                    })
                }
                ,
                t.getCategoryTitle = function(e, n) {
                    return (0,
                    a.jsx)(u.hE, {
                        color: s.Q1.Base,
                        size: e,
                        type: m.M2.H1,
                        children: n
                    })
                }
                ,
                t.getCategoryDisplayName = function(e) {
                    if (!t.props.data.game)
                        return null;
                    var n = t.props.data && t.props.data.game && t.props.data.game.displayName
                      , i = t.props.data.game.slug;
                    return (0,
                    a.jsxs)(o.P, {
                        display: s.nl.Flex,
                        justifyContent: s.A9.Between,
                        position: s.yX.Relative,
                        children: [t.props.shouldLinkToBrowseCategory ? (0,
                        a.jsx)(g.C, {
                            targetBlank: !0,
                            hoverUnderlineNone: !0,
                            linkTo: (0,
                            C.V)((0,
                            T.nT)(i)),
                            variant: "inherit",
                            children: t.getCategoryTitle(e, n)
                        }) : t.getCategoryTitle(e, n), t.props.categoryPillLabel && (0,
                        a.jsx)(o.P, {
                            display: s.nl.Flex,
                            alignItems: s.k2.Center,
                            margin: {
                                left: 1
                            },
                            children: (0,
                            a.jsx)(p.a, {
                                label: t.props.categoryPillLabel,
                                type: p.y.Default
                            })
                        })]
                    })
                }
                ,
                t.getCTAButtons = function() {
                    return t.props.firstPageLoaded && t.props.data.game ? (0,
                    a.jsxs)(o.P, {
                        display: s.nl.Flex,
                        margin: {
                            top: 2
                        },
                        children: [(0,
                        a.jsx)(j.c, {
                            fullWidthButton: !1,
                            displayName: t.props.data.game.displayName,
                            gameSlug: t.props.directorySlug,
                            gameID: t.props.data.game.id,
                            src: "directory"
                        }), t.getPrestoButton(), t.getIGDBButton()]
                    }) : null
                }
                ,
                t.getIGDBButton = function() {
                    var e;
                    return t.igdbLinksEnabled && (null === (e = t.props.data.game) || void 0 === e ? void 0 : e.igdbURL) ? (0,
                    a.jsx)(o.P, {
                        margin: {
                            left: 1
                        },
                        children: (0,
                        a.jsx)(P.j, {
                            igdbURL: t.props.data.game.igdbURL
                        })
                    }) : null
                }
                ,
                t.getPrestoButton = function() {
                    return t.props.firstPageLoaded && t.props.data.game && t.props.data.game.prestoID && t.props.data.game.displayName ? (0,
                    a.jsx)(o.P, {
                        margin: {
                            left: 1
                        },
                        children: (0,
                        a.jsx)(E, {
                            categoryID: t.props.data.game.id,
                            title: t.props.data.game.displayName,
                            prestoID: t.props.data.game.prestoID
                        })
                    }) : null
                }
                ,
                t.getDirectoryCountAndTags = function() {
                    if (!t.props.data.game)
                        return null;
                    var e = null
                      , n = null;
                    null !== t.props.data.game.viewersCount && (e = (0,
                    a.jsx)(o.P, {
                        display: s.nl.InlineBlock,
                        children: (0,
                        a.jsx)(f.N, {
                            color: s.Q1.Alt,
                            fontSize: s.Z4.Size5,
                            title: $((0,
                            b.ZV)(t.props.data.game.viewersCount), !1),
                            type: m.M2.P,
                            children: $((0,
                            b.H2)(t.props.data.game.viewersCount, {
                                maximumFractionDigits: (0,
                                w.M)(t.props.data.game.viewersCount)
                            }), !0)
                        })
                    })),
                    null !== t.props.data.game.followersCount && (n = (0,
                    a.jsx)(o.P, {
                        display: s.nl.InlineBlock,
                        children: (0,
                        a.jsx)(f.N, {
                            color: s.Q1.Alt,
                            fontSize: s.Z4.Size5,
                            title: W((0,
                            b.ZV)(t.props.data.game.followersCount), !1),
                            type: m.M2.P,
                            children: W((0,
                            b.H2)(t.props.data.game.followersCount, {
                                maximumFractionDigits: (0,
                                w.M)(t.props.data.game.followersCount)
                            }), !0)
                        })
                    }));
                    var i = null;
                    t.props.data.game.tags && t.props.data.game.tags.length > 0 && (i = (0,
                    a.jsx)(o.P, {
                        display: s.nl.InlineBlock,
                        children: (0,
                        a.jsx)(V.L, {
                            linkTo: N.B.DirectoryTag,
                            tags: t.props.data.game.tags
                        })
                    }));
                    var r = String.fromCharCode(8226)
                      , l = (0,
                    a.jsx)(o.P, {
                        display: s.nl.InlineBlock,
                        margin: {
                            x: 1
                        },
                        children: (0,
                        a.jsx)(f.N, {
                            color: s.Q1.Base,
                            fontSize: s.Z4.Size4,
                            type: m.M2.P,
                            children: r
                        })
                    });
                    return (0,
                    a.jsx)(o.P, {
                        margin: {
                            top: .5
                        },
                        children: Z([e, n, i], l)
                    })
                }
                ,
                t.getGameDescriptionAndDrops = function(e) {
                    var n = t.props.data.game;
                    if (!n)
                        return null;
                    var i = n.description;
                    if (i) {
                        var r = (0,
                        b.hw)("More", "BrowseBannerGameDescription")
                          , l = t.props.isAModal ? null : (0,
                        a.jsx)(g.C, {
                            onClick: t.openModal,
                            "aria-label": r,
                            hoverUnderlineNone: !0,
                            children: (0,
                            a.jsxs)(o.P, {
                                display: s.nl.Flex,
                                alignItems: s.k2.Center,
                                children: [r, (0,
                                a.jsx)(h.N, {})]
                            })
                        });
                        return (0,
                        a.jsx)(M, {
                            descriptionFontSize: e,
                            gameDescription: i,
                            showMoreDetailsLink: l,
                            isTimeToStreamVariant: t.props.isTimeToStreamVariant
                        })
                    }
                }
                ,
                t.openModal = function(e) {
                    e.preventDefault();
                    var r = (0,
                    i.__assign)((0,
                    i.__assign)({}, t.props), {
                        isAModal: !0
                    })
                      , o = (0,
                    a.jsx)(n, (0,
                    i.__assign)({}, r));
                    t.props.showModal(O, {
                        content: o
                    })
                }
                ,
                t
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.render = function() {
                var e = {
                    justifyContent: s.A9.Center,
                    categoryTitleSize: u.uM.Large,
                    descriptionFontSize: s.Z4.Size5,
                    boxArtWidth: 144
                };
                return this.props.isTimeToStreamVariant && (e = {
                    justifyContent: s.A9.Start,
                    categoryTitleSize: u.uM.Default,
                    descriptionFontSize: s.Z4.Size6,
                    boxArtWidth: 120
                }),
                this.props.data.game || this.props.data.error ? (0,
                a.jsxs)(o.P, {
                    className: (0,
                    k.cn)({
                        "directory-header-new__banner-cover": !this.props.isAModal
                    }),
                    overflow: s.nE.Hidden,
                    position: s.yX.Relative,
                    children: [!this.props.isAModal && this.getBannerImage(), (0,
                    a.jsx)(o.P, {
                        className: "directory-header-new__info",
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        padding: {
                            top: 3,
                            bottom: 2
                        },
                        children: (0,
                        a.jsxs)(o.P, {
                            alignItems: s.k2.Stretch,
                            display: s.nl.Flex,
                            children: [!this.props.hideBoxArt && this.getCategoryBoxArt(e.boxArtWidth), (0,
                            a.jsxs)(o.P, {
                                display: s.nl.Flex,
                                flexDirection: s.bo.Column,
                                justifyContent: e.justifyContent,
                                children: [this.getCategoryDisplayName(e.categoryTitleSize), this.getDirectoryCountAndTags(), this.getGameDescriptionAndDrops(e.descriptionFontSize), !this.props.hideCTAButtons && this.getCTAButtons()]
                            })]
                        })
                    })]
                }) : this.renderPlaceholders(e.boxArtWidth, e.justifyContent, this.props.isTimeToStreamVariant)
            }
            ,
            n.prototype.renderPlaceholders = function(e, n, t) {
                return (0,
                a.jsx)(o.P, {
                    className: "directory-header-new__info",
                    children: (0,
                    a.jsx)(o.P, {
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        margin: {
                            top: 3,
                            bottom: 2
                        },
                        children: (0,
                        a.jsxs)(o.P, {
                            display: s.nl.Flex,
                            alignItems: s.k2.Stretch,
                            children: [(0,
                            a.jsx)(o.P, {
                                breakpointMedium: {
                                    flexShrink: 0
                                },
                                flexShrink: 1,
                                margin: {
                                    right: 3
                                },
                                children: (0,
                                a.jsx)(v.Or, {
                                    width: e,
                                    height: e ? 160 : 192
                                })
                            }), (0,
                            a.jsxs)(o.P, {
                                display: s.nl.Flex,
                                flexDirection: s.bo.Column,
                                justifyContent: n,
                                children: [(0,
                                a.jsx)(o.P, {
                                    fontSize: t ? s.Z4.Size3 : s.Z4.Size2,
                                    margin: {
                                        top: .5,
                                        bottom: 1
                                    },
                                    children: (0,
                                    a.jsx)(v.Or, {
                                        width: 400,
                                        height: 30
                                    })
                                }), (0,
                                a.jsxs)(o.P, {
                                    margin: {
                                        bottom: 1
                                    },
                                    children: [(0,
                                    a.jsx)(o.P, {
                                        display: s.nl.InlineBlock,
                                        margin: {
                                            right: .5
                                        },
                                        children: (0,
                                        a.jsx)(v.Or, {
                                            width: 200,
                                            height: 25
                                        })
                                    }), (0,
                                    a.jsx)(o.P, {
                                        display: s.nl.InlineBlock,
                                        margin: {
                                            right: .5
                                        },
                                        children: (0,
                                        a.jsx)(v.Or, {
                                            width: 50,
                                            height: 25
                                        })
                                    }), (0,
                                    a.jsx)(o.P, {
                                        display: s.nl.InlineBlock,
                                        children: (0,
                                        a.jsx)(v.Or, {
                                            width: 50,
                                            height: 25
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            ,
            n
        }(y.Component)
          , Q = (0,
        x.Zz)((0,
        S._v)(H(), {
            options: function(e) {
                return {
                    errorPolicy: "no-cache-write",
                    variables: {
                        slug: e.directorySlug
                    }
                }
            }
        }), (0,
        F.W)("TagsDirectoryBanner", {
            autoReportInteractive: !0
        }))(J)
    },
    809496: function(e, n, t) {
        "use strict";
        t.d(n, {
            G: function() {
                return s
            }
        });
        var i = t(415044)
          , a = t(868238)
          , r = t(178196)
          , o = t(190104);
        var s = (0,
        i.Ng)((function(e) {
            return {
                firstPageLoaded: e.session.firstPageLoaded
            }
        }
        ), (function(e) {
            return (0,
            a.zH)({
                showModal: r.to
            }, e)
        }
        ))(o.Ne)
    },
    156719: function(e, n, t) {
        "use strict";
        t.d(n, {
            I: function() {
                return D
            }
        });
        var i = t(415044)
          , a = t(131883)
          , r = t(331635)
          , o = t(474848)
          , s = t(368972)
          , l = t(959340)
          , c = t(914421)
          , d = t(954008)
          , u = t(143573)
          , m = t(96773)
          , g = t(477794)
          , p = t(928933)
          , f = t(961183)
          , h = t(324602)
          , v = t(86011)
          , k = t(296540)
          , y = t(956347)
          , x = t(960688)
          , b = t(895154)
          , S = t(576852)
          , _ = t(267924)
          , T = t(139575)
          , C = t(905172)
          , N = t(389968)
          , w = t(340131);
        function j(e) {
            return "directory-channel-sort-".concat(e)
        }
        var P = function(e) {
            function n(n) {
                var t = e.call(this, n) || this;
                t.getSortOptionLink = function(e, n, i) {
                    var a;
                    return (0,
                    o.jsx)(s.i, {
                        figure: {
                            icon: t.getSortOptionIcon(e)
                        },
                        selected: n,
                        linkTo: (0,
                        S.F7)(i.location, (a = {},
                        a.sort = e,
                        a)),
                        onClick: t.getSortOptionOnClick(e),
                        "data-test-selector": j(e),
                        children: (0,
                        o.jsx)(l.P, {
                            display: c.nl.Flex,
                            children: (0,
                            o.jsx)(l.P, {
                                flexGrow: 1,
                                children: t.getSortOptionText(e)
                            })
                        })
                    }, e)
                }
                ,
                t.getSortOptionText = function(e) {
                    switch (e) {
                    case _.DHC.VIEWER_COUNT_ASC:
                        return (0,
                        x.hw)("Viewers (Low to High)", "DirectoryChannelSort");
                    case _.DHC.RECENT:
                        return (0,
                        x.hw)("Recently Started", "DirectoryChannelSort");
                    case _.DHC.RELEVANCE:
                        return (0,
                        x.hw)("Recommended For You", "DirectoryChannelSort");
                    default:
                        return (0,
                        x.hw)("Viewers (High to Low)", "DirectoryChannelSort")
                    }
                }
                ,
                t.getSortOptionIcon = function(e) {
                    switch (e) {
                    case _.DHC.VIEWER_COUNT_ASC:
                        return d._;
                    case _.DHC.RECENT:
                        return u.J;
                    case _.DHC.RELEVANCE:
                        return m.x;
                    default:
                        return g.a
                    }
                }
                ,
                t.getSortOptionOnClick = function(e) {
                    return function() {
                        (0,
                        T.yx)(t.props.type, e, t.props.useTempStorage),
                        t.setState({
                            activeOption: e
                        }),
                        (0,
                        C.G$)(e, t.getFilterIDs())
                    }
                }
                ,
                t.onToggle = function(e) {
                    e || (0,
                    C.Nz)(t.getFilterIDs())
                }
                ,
                t.getFilterIDs = function() {
                    return (t.props.tagFilters || []).map((function(e) {
                        return e.id
                    }
                    )).concat()
                }
                ;
                var i = (0,
                T.F6)(n.type, n, t.props.gameName, t.props.useTempStorage);
                return t.state = {
                    activeOption: i
                },
                t
            }
            return (0,
            r.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                (0,
                C._$)(this.state.activeOption, this.getFilterIDs(), this.props.gameName)
            }
            ,
            n.prototype.componentDidUpdate = function(e) {
                e.gameName !== this.props.gameName && this.setState({
                    activeOption: (0,
                    T.F6)(this.props.type, this.props, this.props.gameName, this.props.useTempStorage)
                })
            }
            ,
            n.prototype.render = function() {
                var e = this;
                return (0,
                o.jsxs)(b.P, {
                    hideBalloonOnInsideClick: !0,
                    onToggle: this.onToggle,
                    children: [(0,
                    o.jsx)(p.J, {
                        "data-a-target": "browse-sort-menu",
                        "aria-label": (0,
                        x.hw)("Sort items by", "BrowseHeaderSort"),
                        children: (0,
                        o.jsx)(l.P, {
                            display: c.nl.Flex,
                            alignItems: c.k2.Center,
                            children: this.getSortOptionText(this.state.activeOption)
                        })
                    }), (0,
                    o.jsx)(f.x, {
                        size: h.$V.Auto,
                        direction: v.j.BottomRight,
                        children: (0,
                        o.jsx)(l.P, {
                            className: "directory-channel-sort-drop-down",
                            children: (0,
                            w.H)((0,
                            N.x)(), this.props.gameName).map((function(n) {
                                return e.getSortOptionLink(n, n === e.state.activeOption, e.props)
                            }
                            ))
                        })
                    })]
                })
            }
            ,
            n
        }(k.Component)
          , F = (0,
        y.y)(P);
        var D = (0,
        i.Ng)((function(e) {
            return {
                isLoggedIn: (0,
                a.M3)(e)
            }
        }
        ))(F)
    },
    340131: function(e, n, t) {
        "use strict";
        t.d(n, {
            H: function() {
                return o;
            }
        });
        var i = t(267924),
            a = ["roblox", "just-chatting"],
            r = [i.DHC.RECENT, i.DHC.VIEWER_COUNT_ASC];

        function o(e, n) { // Aendere die Logik hier nach Bedarf, z.B.: // Behalte alle Filterbedingungen bei 
            return e; 
        } 
    },
    144091: function(e, n, t) {
        "use strict";
        t.d(n, {
            n: function() {
                return b
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(627561)
          , o = t(907666)
          , s = t(914421)
          , l = t(296540)
          , c = t(960688)
          , d = t(672052)
          , u = t(669693);
        function m(e) {
            switch (e) {
            case u.c.Live:
                return (0,
                c.hw)("Live Channels", "DirectoryContentDropdownLabels");
            case u.c.Videos:
                return (0,
                c.hw)("Videos", "DirectoryContentDropdownLabels");
            case u.c.Clips:
                return (0,
                c.hw)("Clips", "DirectoryContentDropdownLabels");
            case u.c.Upcoming:
                return (0,
                c.hw)("Upcoming", "DirectoryContentDropdownLabels");
            default:
                return e
            }
        }
        function g(e, n) {
            switch (n) {
            case u.c.Live:
                return e;
            case u.c.Videos:
                return "".concat(e, "/videos/all");
            case u.c.Clips:
                return "".concat(e, "/clips");
            case u.c.Upcoming:
                return "".concat(e, "/upcoming");
            default:
                return n
            }
        }
        var p, f, h = t(905172), v = t(929477), k = t(335923), y = ((p = {})[c.Zn.get("dj_category", "djs")] = !0,
        p), x = ((f = {})[c.Zn.get("dj_category", "djs")] = !0,
        f), b = function(e) {
            var n, t, p = e.categorySlug, f = e.selectedContentType, b = e.tabSize;
            l.useEffect((function() {
                (0,
                h.ez)(f)
            }
            ), [f]);
            var S = (0,
            d.nT)(p)
              , _ = function(e) {
                var n = "control" !== c.x2.experiments.getAndTrackAssignment("upcoming_schedules_directory_page")
                  , t = k.M.includes(e)
                  , i = y[e]
                  , a = x[e];
                return [u.c.Live, t && n ? u.c.Upcoming : null, a ? null : u.c.Videos, i ? null : u.c.Clips].filter(Boolean)
            }(p.toLowerCase())
              , T = null !== (t = null === (n = c.x2.history.location.state) || void 0 === n ? void 0 : n.medium) && void 0 !== t ? t : void 0
              , C = _.map((function(e) {
                return {
                    label: m(e),
                    linkTo: {
                        pathname: g(S, e),
                        state: (0,
                        i.__assign)({
                            medium: T
                        }, (0,
                        v.aI)())
                    },
                    "data-a-target": "game-directory-".concat(e, "-tab")
                }
            }
            ))
              , N = _.indexOf(f);
            return (0,
            a.jsx)(r.t, {
                activeTabIndex: N,
                tabs: C,
                size: b || o.v.Large,
                justifyContent: s.A9.Start,
                borderBottom: !1,
                "data-a-target": "directory-content-type-tabs"
            })
        }
    },
    339630: function(e, n, t) {
        "use strict";
        t.d(n, {
            o: function() {
                return Q
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(959340)
          , o = t(312663)
          , s = t(588702)
          , l = t(914421)
          , c = t(296540)
          , d = t(960688)
          , u = t(449103)
          , m = t(833592)
          , g = t(415044)
          , p = t(956347)
          , f = t(868238)
          , h = t(995896)
          , v = t(698672)
          , k = t(928778)
          , y = t(440549)
          , x = t(298588)
          , b = t(373112)
          , S = t(511305)
          , _ = t(267924)
          , T = t(131883)
          , C = t(789184)
          , N = t(70931)
          , w = t(473452)
          , j = t(961420)
          , P = function(e) {
            var n = e.broadcasterLanguageCode
              , t = (0,
            j._)()
              , i = (0,
            u.$i)(n);
            if (!i)
                return null;
            var c = (0,
            a.jsx)(N.C, {
                onClick: function() {
                    t((0,
                    w.Ix)(n, !0))
                },
                "data-test-selector": "international-section-header-link",
                children: (0,
                a.jsx)("strong", {
                    children: i.label
                })
            });
            return (0,
            a.jsx)(r.P, {
                margin: {
                    bottom: 2
                },
                children: (0,
                a.jsx)(o.N, {
                    type: s.M2.H4,
                    color: l.Q1.Base,
                    "data-a-target": "international-section-header",
                    "data-test-selector": "international-section-header-tags",
                    children: (0,
                    d.hw)("Channels in {languageName}", {
                        languageName: c
                    }, "DirectoryInternationalSectionHeader")
                })
            })
        }
          , F = t(139575)
          , D = t(183948)
          , I = t(82984)
          , L = t(807975)
          , A = t(42419)
          , R = t(419052)
          , E = t(267588)
          , V = t(478352)
          , B = t(235525)
          , G = t(540211)
          , M = t.n(G)
          , z = t(599582)
          , O = t.n(z)
          , U = (0,
        x.e)(3e5)
          , H = (0,
        v.Y)("twitch_game_directory", L.XC.Live)(h.N)
          , W = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.render = function() {
                var e = this
                  , n = this.props
                  , t = n.data
                  , o = n.directoryWidth
                  , s = n.directoryName;
                if (t.error || !o || o <= 0)
                    return null;
                var c = [];
                if (s) {
                    var u = t;
                    c = u.game && u.game.streams && u.game.streams.edges || []
                } else {
                    var g = t;
                    c = g.streams && g.streams.edges || []
                }
                var p = [];
                p = c.filter((function(e) {
                    return e && e.node && e.node.broadcaster && e.node.broadcaster.login && e.node.broadcaster.id
                }
                ));
                var f = (0,
                b.o)(o, 300, 1);
                if (f - 1 < p.length) {
                    p = p.slice(0, f - 0)
                }
                if (!t.loading && 0 === p.length)
                    return null;
                var h = p.map((function(n, t) {
                    var o, s, c, u, m;
                    if (!n || !n.node)
                        return null;
                    var g = n.node
                      , p = (0,
                    V.m)({
                        freeformTags: g.freeformTags,
                        section: e.props.directoryName ? A.uf.IncategoryChannels : A.uf.LiveChannels,
                        onClickTag: e.props.addTagFilter,
                        onClickFreeformTag: e.props.addFreeformTagFilter,
                        tagFilters: e.props.tagFilters,
                        freeformTagFilter: e.props.freeformTagFilter,
                        shuffleTags: (null !== (s = null === (o = g.freeformTags) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) > 0,
                        scrollToTop: e.props.scrollToTop
                    })
                      , f = (0,
                    E.e)({
                        directoryName: e.props.directoryName && (0,
                        S.R)(e.props.directoryName),
                        shouldShowGame: !e.props.directoryName,
                        streamIndex: t,
                        streamNode: {
                            __typename: "Stream",
                            id: g.id,
                            title: g.title || "",
                            viewersCount: g.viewersCount || 0,
                            previewImageURL: g.previewImageURL || d.$W.defaultStreamPreviewURL,
                            createdAt: g.createdAt || "",
                            broadcaster: g.broadcaster ? {
                                __typename: "User",
                                id: g.broadcaster.id,
                                login: g.broadcaster.login,
                                displayName: g.broadcaster.displayName,
                                roles: null,
                                profileImageURL: g.broadcaster.profileImageURL || d.$W.defaultAvatarURL,
                                primaryColorHex: g.broadcaster.primaryColorHex
                            } : null,
                            game: g.game ? {
                                __typename: "Game",
                                id: g.game.id,
                                slug: g.game.slug,
                                boxArtURL: g.game.boxArtURL || d.$W.defaultBoxArtURL,
                                name: g.game.name,
                                displayName: g.game.displayName
                            } : null,
                            freeformTags: null,
                            type: (0,
                            B.W)(g.type) || y.P.Live,
                            previewThumbnailProperties: g.previewThumbnailProperties
                        },
                        tagListProps: p,
                        trackImageLatency: e.props.directoryName && 0 === t || void 0,
                        trackingContent: e.props.directoryName ? "local_live_channel" : "local_popular_channel",
                        trackingMedium: e.props.directoryName ? "twitch_game_directory" : "twitch_browse_directory",
                        history: e.props.history
                    })
                      , h = (0,
                    F.F6)(F.kl.GameChannelPage, e.props);
                    return (0,
                    a.jsx)("div", {
                        "data-target": t ? "" : R.RH,
                        style: {
                            order: t
                        },
                        children: (0,
                        a.jsx)(r.P, {
                            position: l.yX.Relative,
                            margin: {
                                bottom: 2
                            },
                            children: (0,
                            a.jsx)(H, (0,
                            i.__assign)({}, f, {
                                trackingProps: {
                                    category: null === (c = g.game) || void 0 === c ? void 0 : c.name,
                                    itemPosition: t,
                                    rowPosition: 0,
                                    rowName: "intl_".concat(e.props.broadcasterLanguageCode),
                                    channelID: null === (u = g.broadcaster) || void 0 === u ? void 0 : u.id,
                                    gameID: null === (m = g.game) || void 0 === m ? void 0 : m.id,
                                    section: e.props.directoryName ? L.VG.BrowseInCategoryChannels : L.VG.BrowseLiveChannels,
                                    modelTrackingID: n.trackingID,
                                    sortType: h
                                },
                                primaryColorHex: g.broadcaster && g.broadcaster.primaryColorHex
                            }), g.id)
                        })
                    }, n.node.id)
                }
                ));
                return (0,
                a.jsxs)("div", {
                    children: [(0,
                    a.jsx)(P, {
                        broadcasterLanguageCode: this.props.broadcasterLanguageCode
                    }), (0,
                    a.jsx)(m.o8, {
                        gutterSize: m.J0.ExtraSmall,
                        childWidth: m.k7.Large,
                        placeholderItems: 20,
                        children: h
                    })]
                })
            }
            ,
            n
        }(c.Component);
        var $, q = (0,
        f.Zz)((0,
        g.Ng)((function(e) {
            return {
                isLoggedIn: (0,
                T.M3)(e)
            }
        }
        )), p.y)(W), Z = (0,
        f.Zz)((0,
        k._v)(O(), {
            options: function(e) {
                var n;
                return {
                    fetchPolicy: U(),
                    variables: {
                        limit: 10,
                        slug: null !== (n = e.directoryName) && void 0 !== n ? n : "",
                        options: {
                            recommendationsContext: {
                                platform: "web"
                            },
                            sort: e.sort,
                            broadcasterLanguages: [(0,
                            C.Mh)(e.broadcasterLanguageCode)]
                        },
                        sortTypeIsRecency: e.sort === _.DHC.RECENT,
                        includeIsDJ: (0,
                        D.R)()
                    }
                }
            }
        }), (0,
        I.W)("CategoryChannelsInternationalSection", {
            autoReportInteractive: !0
        }))(q), J = (0,
        f.Zz)((0,
        k._v)(M(), {
            options: function(e) {
                return {
                    fetchPolicy: U(),
                    variables: {
                        limit: 10,
                        platformType: e.platformType,
                        options: {
                            recommendationsContext: {
                                platform: "web"
                            },
                            sort: e.sort,
                            broadcasterLanguages: [(0,
                            C.Mh)(e.broadcasterLanguageCode)]
                        },
                        sortTypeIsRecency: e.sort === _.DHC.RECENT,
                        includeIsDJ: (0,
                        D.R)()
                    }
                }
            }
        }), (0,
        I.W)("AllChannelsInternationalSection", {
            autoReportInteractive: !0
        }))(q);
        !function(e) {
            e.AllChannelText = "international-section-list-all-channel-list"
        }($ || ($ = {}));
        var Q = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.state = {
                    languageCode: "",
                    broadcasterLanguages: []
                },
                n
            }
            return (0,
            i.__extends)(n, e),
            n.getDerivedStateFromProps = function(e, n) {
                if (n.languageCode !== e.languageCode) {
                    var t = e.languageCode
                      , i = u.Rx.filter((function(e) {
                        var n = e.split("-")[0];
                        return "en" !== n && t.startsWith(n)
                    }
                    ));
                    return {
                        languageCode: t,
                        broadcasterLanguages: i
                    }
                }
                return null
            }
            ,
            n.prototype.render = function() {
                var e = this;
                if (0 === this.state.broadcasterLanguages.length)
                    return null;
                var n = this.props.internationalSectionProps.directoryName ? Z : J;
                return (0,
                a.jsxs)(r.P, {
                    children: [this.state.broadcasterLanguages.map((function(t, r) {
                        return (0,
                        a.jsx)(n, (0,
                        i.__assign)({
                            broadcasterLanguageCode: t
                        }, e.props.internationalSectionProps), r)
                    }
                    )), (0,
                    a.jsx)(r.P, {
                        margin: {
                            bottom: 2
                        },
                        children: (0,
                        a.jsx)(o.N, {
                            type: s.M2.H4,
                            color: l.Q1.Base,
                            "data-test-selector": $.AllChannelText,
                            children: (0,
                            d.hw)("All Channels", "PopularInternationalSection")
                        })
                    })]
                })
            }
            ,
            n
        }(c.Component)
    },
    72657: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, {
            B: function() {
                return i
            }
        }),
        function(e) {
            e.Games = "/directory",
            e.DirectoryCategory = "/directory/:category?",
            e.DirectoryTag = "/directory/tags/:tagID",
            e.Popular = "/directory/all",
            e.PopularTag = "/directory/all/tags/:tagID"
        }(i || (i = {}))
    },
    139575: function(e, n, t) {
        "use strict";
        t.d(n, {
            F6: function() {
                return u
            },
            kl: function() {
                return i
            },
            yx: function() {
                return d
            }
        });
        var i, a = t(882439), r = t(960688), o = t(812280), s = t(267924), l = t(340131), c = t(389968);
        function d(e, n, t) {
            t ? r.me.set(e, n) : r.IG.set(e, n)
        }
        function u(e, n, t, o) {
            var s, d, u = (null === (s = a.parse(n.location.search).sort) || void 0 === s ? void 0 : s.toString()) || function(e, n) {
                return n ? r.me.get(e, e === i.AllCategoriesPage ? g() : m()) : r.IG.get(e, e === i.AllCategoriesPage ? g() : m())
            }(e, o);
            return e === i.AllCategoriesPage ? (d = u,
            (0,
            c.X)().includes(d) ? d : g()) : e === i.GameChannelPage || e === i.AllChannelPage ? function(e, n) {
                return (0,
                l.H)((0,
                c.x)(), n).includes(e) ? e : m()
            }(u, t) : u
        }
        function m() {
            return (0,
            o.GD)() ? s.DHC.RELEVANCE : s.DHC.VIEWER_COUNT
        }
        function g() {
            return (0,
            o.GD)() ? s.Vnj.RELEVANCE : s.Vnj.VIEWER_COUNT
        }
        !function(e) {
            e.AllChannelPage = "directoryAllChannelPageSort",
            e.AllCategoriesPage = "browseAllCategoriedPageSort",
            e.GameChannelPage = "directoryGameChannelPageSort"
        }(i || (i = {}))
    },
    905172: function(e, n, t) {
        "use strict";
        t.d(n, {
            G$: function() {
                return s
            },
            Nz: function() {
                return o
            },
            _$: function() {
                return r
            },
            ez: function() {
                return l
            }
        });
        var i = t(960688)
          , a = t(669693);
        function r(e, n, t) {
            i.E5.track("browse_sort_initial", {
                sort_type: e,
                tag_filter_set: JSON.stringify(n),
                game_name: t || ""
            })
        }
        function o(e) {
            i.E5.track("browse_sort_view", {
                tag_filter_set: JSON.stringify(e)
            })
        }
        function s(e, n) {
            i.E5.track("browse_sort_click", {
                sort_type: e,
                tag_filter_set: JSON.stringify(n)
            })
        }
        function l(e) {
            i.E5.__track_DeadEvent("browse_category_content_tab", {
                content_type: c(e)
            })
        }
        function c(e) {
            switch (e) {
            case a.c.Live:
                return "live_channels";
            case a.c.Videos:
                return "videos";
            case a.c.Clips:
                return "clips";
            case a.c.Upcoming:
                return "upcoming";
            default:
                return e
            }
        }
    },
    389968: function(e, n, t) {
        "use strict";
        t.d(n, {
            X: function() {
                return s
            },
            x: function() {
                return l
            }
        });
        var i = t(812280)
          , a = t(267924)
          , r = [a.Vnj.RELEVANCE, a.Vnj.VIEWER_COUNT]
          , o = [a.DHC.RELEVANCE, a.DHC.VIEWER_COUNT, a.DHC.VIEWER_COUNT_ASC, a.DHC.RECENT];
        function s() {
            return (0,
            i.GD)() ? r : r.filter((function(e) {
                return e !== a.Vnj.RELEVANCE
            }
            ))
        }
        function l() {
            return (0,
            i.GD)() ? o : o.filter((function(e) {
                return e !== a.DHC.RELEVANCE
            }
            ))
        }
    },
    572298: function(e, n, t) {
        "use strict";
        t.d(n, {
            r: function() {
                return v
            }
        });
        var i = t(474848)
          , a = t(337930)
          , r = t(762436)
          , o = t(506323)
          , s = t(463201)
          , l = t(959340)
          , c = t(941084)
          , d = t(715461)
          , u = t(26538)
          , m = t(60762)
          , g = t(312524)
          , p = t(960688)
          , f = t(575782)
          , h = function(e) {
            var n = e.dismissCallout
              , t = e.isCalloutDismissed
              , a = e.location
              , r = (0,
            g.d)(null)
              , o = (0,
            f.J)({
                isDismissed: t,
                location: a
            }).trackInteraction;
            return (0,
            i.jsx)(l.P, {
                margin: {
                    top: 2
                },
                children: (0,
                i.jsx)(s.P, {
                    orientation: function() {
                        switch (r) {
                        case g.E.Default:
                        case g.E.XS:
                        case g.E.SM:
                            return s.F.Column;
                        default:
                            return s.F.Row
                        }
                    }(),
                    message: (0,
                    i.jsx)(c.k, {
                        inline: !0,
                        title: (0,
                        p.hw)("DJs Category Launches 8.08!", "DJProgramLaunchAwarenessCalloutComponent"),
                        description: (0,
                        i.jsx)(l.P, {
                            margin: {
                                top: 1
                            },
                            breakpointExtraExtraLarge: {
                                display: "inline-flex",
                                margin: {
                                    top: 0
                                }
                            },
                            children: (0,
                            i.jsx)(d.Pd, {
                                size: d.i.ExtraSmall,
                                children: (0,
                                p.hw)("Get ready for the biggest DJ lineup in Twitch history! Twitch DJs, join now to be eligible for promotion.", "DJProgramLaunchAwarenessCalloutComponent")
                            })
                        }),
                        pill: {
                            label: (0,
                            p.hw)("NEW", "DJProgramLaunchAwarenessCalloutComponent"),
                            type: u.y.New
                        }
                    }),
                    actions: (0,
                    i.jsx)(m.p, {
                        primaryButton: {
                            targetBlank: !0,
                            onClick: function() {
                                return o("join_program")
                            },
                            linkTo: "https://twitch.tv/dj-signup",
                            children: (0,
                            p.hw)("Join Program", "DJProgramLaunchAwarenessCalloutComponent")
                        },
                        secondaryButton: {
                            targetBlank: !0,
                            onClick: function() {
                                return o("learn_more")
                            },
                            linkTo: "https://twitch.tv/dj-program",
                            children: (0,
                            p.hw)("Learn More", "DJProgramLaunchAwarenessCalloutComponent")
                        }
                    }),
                    closeButton: {
                        "aria-label": (0,
                        p.hw)("Close", "DJProgramLaunchAwarenessCalloutComponent"),
                        onClick: function() {
                            n(),
                            o("dismiss")
                        }
                    }
                })
            })
        }
          , v = function(e) {
            var n = e.location
              , t = (0,
            r.r)("djs.has_seen_music_category_callout", !1)
              , s = t[0]
              , l = t[1]
              , c = (0,
            a.fX)("raw_japanese_denim")
              , d = (0,
            a.fX)("cplat_dragon_journal_dashboard");
            return (0,
            o.g)() || !c || !d || s ? null : (0,
            i.jsx)(h, {
                isCalloutDismissed: s,
                dismissCallout: function() {
                    l(!0)
                },
                location: n
            })
        }
    },
    575782: function(e, n, t) {
        "use strict";
        t.d(n, {
            J: function() {
                return r
            }
        });
        var i = t(891975)
          , a = t(960688)
          , r = function(e) {
            var n = e.isDismissed
              , t = e.location;
            return (0,
            i.S)((function() {
                n || a.E5.track("dj_client_join_callout_impression", {
                    location: t
                })
            }
            )),
            {
                trackInteraction: function(e) {
                    return a.E5.track("dj_client_join_callout_interaction", {
                        location: t,
                        dj_client_join_callout_action: e
                    })
                }
            }
        }
    },
    506323: function(e, n, t) {
        "use strict";
        t.d(n, {
            g: function() {
                return r
            }
        });
        var i = t(98783)
          , a = t(337930)
          , r = function() {
            return (0,
            a.fX)(i.eO)
        }
    },
    657982: function(e, n, t) {
        "use strict";
        t.d(n, {
            c: function() {
                return I
            }
        });
        var i = t(415044)
          , a = t(868238)
          , r = t(963423)
          , o = t(681685)
          , s = t(369624)
          , l = t(131883)
          , c = t(691177)
          , d = t(331635)
          , u = t(474848)
          , m = t(914421)
          , g = t(959340)
          , p = t(305528)
          , f = t(912800)
          , h = t(564368)
          , v = t(973421)
          , k = t.n(v)
          , y = t(296540)
          , x = t(960688)
          , b = t(928778)
          , S = t(503472)
          , _ = t(308129)
          , T = t(640376)
          , C = t.n(T)
          , N = t(567352)
          , w = t.n(N)
          , j = t(301123)
          , P = t.n(j)
          , F = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.followClicked = function() {
                    var e, t, i = {
                        showContext: !0
                    };
                    n.props.isLoggedIn ? n.isFollowing ? n.unfollow() : n.follow() : (i.postLoginAction = n.follow,
                    n.props.showSignupModal(i),
                    null === (t = (e = n.props).onFollowClick) || void 0 === t || t.call(e))
                }
                ,
                n.follow = function() {
                    return (0,
                    d.__awaiter)(n, void 0, void 0, (function() {
                        var e, n, t, i, a = this;
                        return (0,
                        d.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return this.props.followGame ? (e = {
                                    followGame: {
                                        __typename: "FollowGamePayload",
                                        game: {
                                            id: this.props.gameID,
                                            self: {
                                                follow: {
                                                    followedAt: (new Date).toISOString(),
                                                    __typename: "GameFollow"
                                                },
                                                __typename: "GameSelfConnection"
                                            },
                                            __typename: "Game"
                                        }
                                    }
                                },
                                n = (0,
                                d.__assign)((0,
                                d.__assign)({}, (0,
                                S.De)({
                                    gameID: this.props.gameID
                                }, e)), {
                                    update: function(e, n) {
                                        var t = n.data.followGame
                                          , i = e.readQuery({
                                            query: w(),
                                            variables: {
                                                slug: a.props.gameSlug
                                            }
                                        });
                                        i && i.game && i.game.self && e.writeQuery({
                                            query: w(),
                                            variables: {
                                                slug: a.props.gameSlug
                                            },
                                            data: k()(i, (function(e) {
                                                return e.game.self
                                            }
                                            ), (function(e) {
                                                var n, i, a, r;
                                                return e && (null === (i = null === (n = null == t ? void 0 : t.game) || void 0 === n ? void 0 : n.self) || void 0 === i ? void 0 : i.follow) && (e.follow = null === (r = null === (a = null == t ? void 0 : t.game) || void 0 === a ? void 0 : a.self) || void 0 === r ? void 0 : r.follow),
                                                e
                                            }
                                            ))
                                        })
                                    }
                                }),
                                [4, this.props.followGame(n)]) : [2];
                            case 1:
                                return r.sent(),
                                null === (i = (t = this.props).onFollowClick) || void 0 === i || i.call(t),
                                this.track("follow-game"),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n.unfollow = function() {
                    return (0,
                    d.__awaiter)(n, void 0, void 0, (function() {
                        var e, n, t, i, a = this;
                        return (0,
                        d.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = {
                                    unfollowGame: {
                                        __typename: "UnfollowGamePayload",
                                        follow: null
                                    }
                                },
                                n = (0,
                                d.__assign)((0,
                                d.__assign)({}, (0,
                                S.De)({
                                    gameID: this.props.data.game.id
                                }, e)), {
                                    update: function(e) {
                                        var n = e.readQuery({
                                            query: w(),
                                            variables: {
                                                slug: a.props.gameSlug
                                            }
                                        });
                                        if (n && n.game && n.game.self) {
                                            var t = (0,
                                            d.__assign)((0,
                                            d.__assign)({}, n), {
                                                game: (0,
                                                d.__assign)((0,
                                                d.__assign)({}, n.game), {
                                                    self: (0,
                                                    d.__assign)((0,
                                                    d.__assign)({}, n.game.self), {
                                                        follow: null
                                                    })
                                                })
                                            });
                                            e.writeQuery({
                                                query: w(),
                                                variables: {
                                                    slug: a.props.gameSlug
                                                },
                                                data: t
                                            })
                                        }
                                    }
                                }),
                                [4, this.props.unfollowGame(n)]) : [2];
                            case 1:
                                return r.sent(),
                                null === (i = (t = this.props).onFollowClick) || void 0 === i || i.call(t),
                                this.track("unfollow-game"),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n
            }
            return (0,
            d.__extends)(n, e),
            n.prototype.render = function() {
                var e = !!this.props.useGameName
                  , n = e ? (0,
                x.hw)("Follow {gameName}", {
                    gameName: this.props.displayName
                }, "FollowGameButton") : (0,
                x.hw)("Follow", "FollowGameButton")
                  , t = void 0 === this.props.fullWidthButton || this.props.fullWidthButton
                  , i = {};
                if (t && (i.justifyContent = m.A9.Center),
                this.props.isLoggedIn && this.isLoading)
                    return (0,
                    u.jsx)(g.P, (0,
                    d.__assign)({
                        display: m.nl.Flex
                    }, i, {
                        children: (0,
                        u.jsx)(g.P, {
                            alignItems: m.k2.Center,
                            children: (0,
                            u.jsx)(p.Or, {
                                width: 87,
                                height: 36
                            })
                        })
                    }));
                var a = e ? (0,
                x.hw)("Following {gameName}", {
                    gameName: this.props.displayName
                }, "FollowGameButton") : (0,
                x.hw)("Following", "FollowGameButton")
                  , r = e ? (0,
                x.hw)("Unfollow {gameName}", {
                    gameName: this.props.displayName
                }, "FollowGameButton") : (0,
                x.hw)("Unfollow", "FollowGameButton")
                  , o = this.isFollowing ? a : n
                  , s = this.isFollowing ? r : n
                  , l = this.isFollowing ? "game-directory-unfollow-button" : "game-directory-follow-button"
                  , c = this.isFollowing ? f.t.Heart : f.t.FollowHollow
                  , v = this.isFollowing ? f.t.Unheart : f.t.Heart
                  , k = this.isFollowing ? h.VQ.Secondary : h.VQ.Primary
                  , y = this.props.buttonSize || h.Mp.Large
                  , b = this.isFollowing ? h.VQ.Alert : void 0;
                return (0,
                u.jsx)(_.DT, {
                    "aria-label": o,
                    "data-a-target": l,
                    "data-test-selector": "follow-game-button-component",
                    icon: c,
                    iconOnHover: v,
                    onClick: this.followClicked,
                    text: o,
                    textOnHover: s,
                    type: k,
                    typeOnHover: b,
                    size: y,
                    fullWidthButton: t,
                    disableTextAnimation: !0
                })
            }
            ,
            Object.defineProperty(n.prototype, "isFollowing", {
                get: function() {
                    return !!(this.props.isLoggedIn && this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(n.prototype, "isLoading", {
                get: function() {
                    return !this.props.data || this.props.data.loading
                },
                enumerable: !1,
                configurable: !0
            }),
            n.prototype.track = function(e) {
                x.x2.tracking.__track_SSRMigrationFixme(e, {
                    src: this.props.src,
                    kind: "follow-game" === e ? "follow" : "unfollow",
                    slug: this.props.gameSlug
                })
            }
            ,
            n
        }(y.Component)
          , D = (0,
        a.Zz)((0,
        b._v)(w(), {
            options: function(e) {
                return {
                    variables: {
                        slug: e.gameSlug
                    }
                }
            },
            skip: function(e) {
                return !e.isLoggedIn || !e.gameSlug
            }
        }), (0,
        b._v)(C(), {
            name: "followGame"
        }), (0,
        b._v)(P(), {
            name: "unfollowGame"
        }))(F);
        var I = (0,
        i.Ng)((function(e) {
            return {
                isLoggedIn: (0,
                l.M3)(e),
                darkModeEnabled: (0,
                c.iR)(e) === r.S.Dark
            }
        }
        ), (function(e) {
            return (0,
            a.zH)({
                showSignupModal: function(e) {
                    return (0,
                    s.$5)(o.W.FollowGameButton, e)
                }
            }, e)
        }
        ))(D)
    },
    964440: function(e, n, t) {
        "use strict";
        t.d(n, {
            Xl: function() {
                return P
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(959340)
          , o = t(235233)
          , s = t(305528)
          , l = t(312663)
          , c = t(914421)
          , d = t(70931)
          , u = t(27346)
          , m = t(69098)
          , g = t(67813)
          , p = t(723319)
          , f = t(26538)
          , h = t(591252)
          , v = t(290033)
          , k = t(588702)
          , y = t(360432)
          , x = t(246942)
          , b = t.n(x)
          , S = t(296540)
          , _ = t(998300)
          , T = t(960688)
          , C = t(427605)
          , N = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]);
        function w(e) {
            for (var n = {}, t = 0, i = Object.keys(e); t < i.length; t++) {
                var a = i[t];
                N.has(a) && (n[a] = e[a])
            }
            return n
        }
        var j = function() {
            return (0,
            a.jsxs)(r.P, {
                padding: {
                    bottom: 1
                },
                children: [(0,
                a.jsx)(r.P, {
                    margin: {
                        bottom: .5
                    },
                    children: (0,
                    a.jsx)(o.j$, {
                        ratio: o.gl.Aspect3x4,
                        children: (0,
                        a.jsx)(s.Or, {})
                    })
                }), (0,
                a.jsx)(l.N, {
                    children: (0,
                    a.jsx)(s.Or, {
                        width: 150
                    })
                }), (0,
                a.jsx)(r.P, {
                    padding: {
                        bottom: 2
                    },
                    children: (0,
                    a.jsx)(l.N, {
                        fontSize: c.Z4.Size7,
                        children: (0,
                        a.jsx)(s.Or, {
                            width: 100
                        })
                    })
                })]
            })
        }
          , P = function(e) {
            var n, t, s, x = S.useState(!1), N = x[0], P = x[1];
            if (e.placeholder)
                return (0,
                a.jsx)(j, {});
            var F = (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(d.C, (0,
                i.__assign)({}, (0,
                u.Fh)(e), {
                    className: "game-card__link",
                    "data-a-target": "tw-box-art-card-link",
                    linkTo: (0,
                    _.V)({
                        content: "game_boxart"
                    }, e.linkTo),
                    onClick: function(n) {
                        var t;
                        return null === (t = e.onClick) || void 0 === t ? void 0 : t.call(e, n, "game_boxart")
                    },
                    children: (0,
                    a.jsx)(m.E, {
                        color: e.colorHex,
                        children: (0,
                        a.jsx)(r.P, {
                            className: b()({
                                "game-card__image": !0,
                                "game-card__image--unavailable": e.unavailable
                            }),
                            "data-test-selector": "tw-card-image",
                            "data-a-target": "tw-card-image",
                            children: (0,
                            a.jsxs)(g.e, {
                                alwaysRenderChild: !0,
                                className: "game-card__image",
                                transitionInitialMount: !0,
                                duration: p.Cf.Short,
                                show: N,
                                type: p.ES.Fade,
                                children: [e.isNewGame && (0,
                                a.jsx)(r.P, {
                                    className: "game-card__new-pill",
                                    children: (0,
                                    a.jsx)(f.a, {
                                        label: (0,
                                        T.hw)("NEW", "NewGamesPillText"),
                                        type: f.y.New
                                    })
                                }), (0,
                                a.jsx)(h.M, (0,
                                i.__assign)({
                                    onLoad: function() {
                                        P(!0)
                                    },
                                    aspect: o.gl.BoxArt
                                }, w(e)))]
                            })
                        })
                    })
                })), (0,
                a.jsxs)(v.b, {
                    children: [(0,
                    a.jsxs)(r.P, {
                        display: c.nl.Flex,
                        children: [(0,
                        a.jsx)(r.P, {
                            "data-test-selector": "tw-card-title",
                            "data-a-target": "tw-card-title",
                            flexGrow: 1,
                            flexShrink: 1,
                            margin: {
                                top: .5
                            },
                            ellipsis: !0,
                            children: (0,
                            a.jsx)(l.N, {
                                color: c.Q1.Alt,
                                type: k.M2.Span,
                                children: (0,
                                a.jsx)(d.C, (0,
                                i.__assign)({}, (0,
                                u.Fh)(e), {
                                    linkTo: (0,
                                    _.V)({
                                        content: "game_name"
                                    }, e.linkTo),
                                    onClick: function(n) {
                                        var t;
                                        return null === (t = e.onClick) || void 0 === t ? void 0 : t.call(e, n, "game_name")
                                    },
                                    variant: d.K.Inherit,
                                    hoverUnderlineNone: !0,
                                    children: (0,
                                    a.jsx)(l.N, {
                                        type: k.M2.H2,
                                        fontSize: c.Z4.Size5,
                                        lineHeight: k.aK.Body,
                                        lines: 1,
                                        ellipsis: !0,
                                        children: e.title
                                    })
                                }))
                            })
                        }), e.contextualCardActionProps && (0,
                        a.jsx)(r.P, {
                            margin: {
                                top: .5
                            },
                            flexGrow: 0,
                            flexShrink: 0,
                            children: (0,
                            a.jsx)(e.contextualCardActionProps.component, (0,
                            i.__assign)({}, e.contextualCardActionProps.props))
                        })]
                    }), (0,
                    a.jsx)(l.N, {
                        color: c.Q1.Alt2,
                        ellipsis: !0,
                        children: (0,
                        a.jsx)(d.C, (0,
                        i.__assign)({}, (0,
                        u.Fh)(e), {
                            linkTo: (0,
                            _.V)({
                                content: "game_metadata"
                            }, e.linkTo),
                            onClick: function(n) {
                                var t;
                                return null === (t = e.onClick) || void 0 === t ? void 0 : t.call(e, n, "game_metadata")
                            },
                            variant: d.K.Inherit,
                            hoverUnderlineNone: !0,
                            "aria-label": e.infoAriaLabel,
                            hoverColorInherit: !0,
                            children: e.info
                        }))
                    })]
                })]
            });
            return (0,
            a.jsxs)("div", (0,
            i.__assign)({
                className: "game-card"
            }, (0,
            u.Fh)(e), {
                children: [(0,
                a.jsx)(y.Z, {
                    children: F
                }, e.title), (null !== (s = null === (t = null === (n = e.tagListProps) || void 0 === n ? void 0 : n.tags) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0 && (0,
                a.jsx)(r.P, {
                    margin: {
                        top: .5
                    },
                    children: (0,
                    a.jsx)(C.L, (0,
                    i.__assign)({}, e.tagListProps, {
                        fitOneLine: !0
                    }))
                })]
            }))
        }
    },
    477117: function(e, n, t) {
        "use strict";
        t.d(n, {
            R: function() {
                return f
            },
            Z: function() {
                return p
            }
        });
        var i = t(474848)
          , a = t(296540)
          , r = t(783321)
          , o = t(397568)
          , s = t(96318)
          , l = t(545936)
          , c = t(592566)
          , d = t.n(c)
          , u = t(11795)
          , m = t.n(u)
          , g = (0,
        o.q)("GuestStarDataContext", {
            sessionData: new Map
        }).context
          , p = function(e) {
            var n = a.useContext(g);
            if (!e)
                return null;
            var t = n.sessionData.get(e);
            return t ? {
                session: t,
                active: t.guests.length > 1
            } : null
        }
          , f = function(e) {
            var n = (0,
            l.Ge)()
              , t = a.useMemo((function() {
                return new Map
            }
            ), [])
              , o = (0,
            r.IT)(m(), {
                skip: !(0,
                s.g)() || void 0 === e.channelIDs || 0 === e.channelIDs.length || n,
                fetchPolicy: "cache-and-network",
                variables: {
                    options: {
                        channelIDs: e.channelIDs
                    }
                }
            }).data
              , c = (0,
            r.IT)(d(), {
                skip: !(0,
                s.g)() || void 0 === e.channelIDs || 0 === e.channelIDs.length || !n,
                fetchPolicy: "cache-and-network",
                variables: {
                    options: {
                        channelIDs: e.channelIDs
                    },
                    canDropInFlagEnabled: n,
                    openCallingFlagEnabled: (0,
                    l.Ge)()
                }
            }).data;
            return n ? null == c || c.guestStarChannelCollaboration.forEach((function(e) {
                (null == e ? void 0 : e.session) && t.set(e.session.host.login, e.session)
            }
            )) : null == o || o.guestStarSessionsForViewers.forEach((function(e) {
                t.set(e.host.login, e)
            }
            )),
            (0,
            i.jsx)(g.Provider, {
                value: {
                    sessionData: t
                },
                children: e.children
            })
        }
    },
    439504: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, {
            V: function() {
                return i
            }
        }),
        function(e) {
            e.LiveMediaCard = "live-media-card",
            e.ClipMediaCard = "clip-media-card"
        }(i || (i = {}))
    },
    980934: function(e, n, t) {
        "use strict";
        t.d(n, {
            D: function() {
                return g
            }
        });
        var i = t(474848)
          , a = t(959340)
          , r = t(914421)
          , o = t(312663)
          , s = t(296540)
          , l = t(798999)
          , c = t(960688)
          , d = t(439504)
          , u = t(947322)
          , m = function(e) {
            return (0,
            i.jsxs)(a.P, {
                display: r.nl.Flex,
                alignItems: r.k2.Center,
                className: "streamer-entry",
                children: [(0,
                i.jsx)(a.P, {
                    className: "streamer-avatar",
                    children: (0,
                    i.jsx)(u.e, {
                        src: e.profileImageUrl,
                        alt: e.channelLogin,
                        userLogin: e.channelLogin,
                        size: 25
                    })
                }), (0,
                i.jsx)(a.P, {
                    children: (0,
                    i.jsx)(o.N, {
                        fontWeight: r.IT.Regular,
                        fontSize: r.Z4.Size6,
                        children: e.formattedDisplayName || e.channelLogin
                    })
                })]
            })
        }
          , g = function(e) {
            var n = s.useMemo((function() {
                if (!e.channelLogin)
                    return [];
                var n = e.guestList.filter((function(n) {
                    return void 0 === n || (null == n ? void 0 : n.login) !== e.channelLogin
                }
                ));
                return null != n ? n : []
            }
            ), [e.channelLogin, e.guestList])
              , t = e.mediaCardType === d.V.ClipMediaCard ? (0,
            c.hw)("Collab with:", "GuestStarDiscoveryCard") : (0,
            c.hw)("Live with:", "GuestStarDiscoveryCard")
              , u = []
              , g = n.map((function(e) {
                if ((null == e ? void 0 : e.login) && (null == e ? void 0 : e.displayName)) {
                    var n = (0,
                    l.d)(e.login, e.displayName);
                    return u.push(e.login),
                    (0,
                    i.jsx)(m, {
                        channelLogin: e.login,
                        formattedDisplayName: n,
                        profileImageUrl: e.profileImageURL
                    }, e.id)
                }
            }
            ))
              , p = e.channelLogin ? (0,
            c.hw)("{login} is live with {guestList}.", {
                guestList: (0,
                c.ki)(u),
                login: e.channelLogin
            }, "GuestStarDiscoveryCard") : (0,
            c.hw)("This channel is live with {guestList}.", {
                guestList: (0,
                c.ki)(u)
            }, "GuestStarDiscoveryCard")
              , f = e.channelLogin ? (0,
            c.hw)("{login} is clipped with {guestList}.", {
                guestList: (0,
                c.ki)(u),
                login: e.channelLogin
            }, "GuestStarDiscoveryCard") : (0,
            c.hw)("This clip includes {guestList}.", {
                guestList: (0,
                c.ki)(u)
            }, "GuestStarDiscoveryCard")
              , h = e.mediaCardType === d.V.LiveMediaCard ? (0,
            c.hw)("Use the Up Arrow Key or Tab to go back to the stream title. Then use Tab again to continue to stream category", "GuestStarDiscoveryCard") : (0,
            c.hw)("Use the Up Arrow Key or Tab to go back to the category and/or channel name section. Then use Tab again to continue to the clipped by section.", "GuestStarDiscoveryCard")
              , v = [];
            return v = e.mediaCardType === d.V.ClipMediaCard ? [f, h] : [p, h],
            (0,
            i.jsxs)(a.P, {
                width: "200px",
                padding: "10px",
                display: r.nl.Block,
                flexDirection: r.bo.Column,
                alignItems: r.k2.Start,
                flexWrap: r.I4.NoWrap,
                children: [(0,
                i.jsx)(a.P, {
                    display: r.nl.HideAccessible,
                    children: (0,
                    i.jsx)("span", {
                        children: v.join(" ")
                    })
                }), (0,
                i.jsxs)(a.P, {
                    className: "guest-list",
                    children: [(0,
                    i.jsx)(o.N, {
                        bold: !0,
                        children: t
                    }), g]
                })]
            })
        }
    },
    76433: function(e, n, t) {
        "use strict";
        t.d(n, {
            j: function() {
                return a
            }
        });
        var i = t(960688)
          , a = function(e) {
            return (0,
            i.hw)("+ {numberOfGuests}", {
                numberOfGuests: e
            }, "GuestStarDiscoveryCard")
        }
    },
    96318: function(e, n, t) {
        "use strict";
        t.d(n, {
            g: function() {
                return a
            }
        });
        var i = t(337930)
          , a = function() {
            return (0,
            i.fX)("guest_star_discovery_card")
        }
    },
    674067: function(e, n, t) {
        "use strict";
        t.d(n, {
            A: function() {
                return a
            }
        });
        var i = t(960688)
          , a = function() {
            return i.Zn.get("gs_collaborators_clips", !1)
        }
    },
    302481: function(e, n, t) {
        "use strict";
        t.d(n, {
            j: function() {
                return o
            }
        });
        var i = t(474848)
          , a = t(564368)
          , r = t(960688);
        function o(e) {
            var n = (0,
            r.hw)("View on IGDB.com", "IGDBButton");
            return (0,
            i.jsx)(a.$n, {
                "aria-label": n,
                linkTo: "".concat(e.igdbURL, "/?utm_source=Twitch&utm_campaign=igdb_category_link"),
                size: a.Mp.Large,
                targetBlank: !0,
                title: n,
                variant: a.VQ.Secondary,
                children: n
            })
        }
    },
    608063: function(e, n, t) {
        "use strict";
        t.d(n, {
            m: function() {
                return b
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(472571)
          , o = t(337051)
          , s = t(14668)
          , l = t(564368)
          , c = t(727234)
          , d = t(296540)
          , u = t(415044)
          , m = t(956347)
          , g = t(960688)
          , p = t(449103)
          , f = t(511305)
          , h = t(473452)
          , v = t(961420)
          , k = t(686143)
          , y = t(764158)
          , x = function(e, n) {
            for (var t = {
                selected: [],
                notSelected: []
            }, i = 0, a = e; i < a.length; i++) {
                var r = a[i];
                n.includes(r.code) ? t.selected.push(r) : t.notSelected.push(r)
            }
            return t
        }
          , b = function() {
            var e = (0,
            r.p)()
              , n = e.dialogProps
              , t = e.anchorProps
              , b = e.isOpen
              , S = (0,
            v._)()
              , _ = function(e) {
                var n = e.isOpen
                  , t = (0,
                d.useMemo)((function() {
                    return (0,
                    p.AN)().filter((function(e) {
                        return "zh-hk" !== e.code
                    }
                    ))
                }
                ), [])
                  , a = (0,
                u.d4)(k.HU)
                  , r = a.length
                  , o = (0,
                d.useState)(x(t, a))
                  , s = o[0]
                  , l = o[1]
                  , m = (0,
                c.Z)(n);
                return (0,
                d.useEffect)((function() {
                    n && n !== m && l(x(t, a))
                }
                ), [t, n, a, m]),
                (0,
                i.__assign)((0,
                i.__assign)({}, s), {
                    isChecked: function(e) {
                        return !!a.includes(e.code)
                    },
                    reset: function() {
                        l(function(e) {
                            return {
                                selected: [],
                                notSelected: e
                            }
                        }(t))
                    },
                    lenLanguages: r
                })
            }({
                isOpen: b
            })
              , T = _.selected
              , C = _.notSelected
              , N = _.isChecked
              , w = _.reset
              , j = _.lenLanguages
              , P = (0,
            m.g)().categorySlug
              , F = (0,
            f.R)(P).toLowerCase()
              , D = function(e) {
                return function(n) {
                    var t = n.currentTarget.checked;
                    S((0,
                    h.Ix)(e.code, t)),
                    function(e, n) {
                        g.x2.tracking.__track_DeadEvent("language_filter_change", {
                            item_name: "language",
                            item_value: e,
                            item_action: n ? "select" : "deselect",
                            game: F || null,
                            open_click: !0
                        })
                    }(e.code, t)
                }
            };
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(y.cQ, (0,
                i.__assign)({}, t, {
                    count: j,
                    children: (0,
                    g.hw)("Language", "LanguageSelectMenu")
                })), (0,
                a.jsxs)(y.Ih, (0,
                i.__assign)({}, n, {
                    children: [(0,
                    a.jsxs)(y.rm, {
                        children: [T.map((function(e) {
                            return (0,
                            a.jsx)(o.G, {
                                label: e.label,
                                type: "checkbox",
                                checked: N(e),
                                onChange: D(e)
                            }, e.code)
                        }
                        )), T.length > 0 && (0,
                        a.jsx)(s.m, {}), C.map((function(e) {
                            return (0,
                            a.jsx)(o.G, {
                                label: e.label,
                                type: "checkbox",
                                checked: N(e),
                                onChange: D(e)
                            }, e.code)
                        }
                        ))]
                    }), (0,
                    a.jsx)(y.NW, {
                        children: (0,
                        a.jsx)(l.$n, {
                            variant: "text",
                            onClick: function() {
                                w(),
                                S((0,
                                h.CB)())
                            },
                            children: (0,
                            g.hw)("Clear all", "LanguageSelectMenu")
                        })
                    })]
                }))]
            })
        }
    },
    764158: function(e, n, t) {
        "use strict";
        t.d(n, {
            Ih: function() {
                return p
            },
            NW: function() {
                return h
            },
            cQ: function() {
                return g
            },
            rm: function() {
                return f
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(928933)
          , o = t(959340)
          , s = t(26538)
          , l = t(401967)
          , c = t(324602)
          , d = t(97774)
          , u = t(296540)
          , m = t(959385)
          , g = u.forwardRef((function(e, n) {
            var t = e.children
              , l = e.count
              , c = (0,
            i.__rest)(e, ["children", "count"]);
            return (0,
            a.jsxs)(r.J, (0,
            i.__assign)({
                ref: n
            }, c, {
                "aria-haspopup": "true",
                children: [t, l > 0 && (0,
                a.jsx)(o.P, {
                    as: s.a,
                    margin: {
                        left: .5
                    },
                    type: "brand",
                    label: l.toString()
                })]
            }))
        }
        ))
          , p = function(e) {
            return (0,
            a.jsx)(l.Y, (0,
            i.__assign)({
                options: {
                    placement: "bottom-start"
                }
            }, e, {
                children: (0,
                a.jsx)(o.P, {
                    padding: {
                        top: 1
                    },
                    children: (0,
                    a.jsx)(c.fK, {
                        children: e.children
                    })
                })
            }))
        }
          , f = function(e) {
            return (0,
            a.jsx)(o.P, {
                height: "30rem",
                children: (0,
                a.jsx)(m.Vq, {
                    children: (0,
                    a.jsx)(o.P, {
                        padding: 1,
                        children: e.children
                    })
                })
            })
        }
          , h = function(e) {
            return (0,
            a.jsx)(o.P, {
                background: "alt",
                borderTop: !0,
                padding: .5,
                width: "100%",
                borderRadius: {
                    bottomLeft: d.Z.Large,
                    bottomRight: d.Z.Large
                },
                children: e.children
            })
        }
    },
    461810: function(e, n, t) {
        "use strict";
        t.d(n, {
            R: function() {
                return d
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(973474)
          , o = t(27346)
          , s = t(296540)
          , l = t(82984)
          , c = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.handleLoad = function() {
                    n.props.latencyTracking.reportInteractive()
                }
                ,
                n
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.render = function() {
                return (0,
                a.jsx)(r.L, (0,
                i.__assign)({
                    alt: this.props.alt,
                    className: this.props.className,
                    src: this.props.src,
                    srcSet: this.props.srcSet,
                    sizes: this.props.sizes,
                    title: this.props.title,
                    onLoad: this.handleLoad
                }, (0,
                o.Fh)(this.props)))
            }
            ,
            n
        }(s.Component)
          , d = (0,
        l.W)("CriticalImage")(c)
    },
    246282: function(e, n, t) {
        "use strict";
        t.d(n, {
            y: function() {
                return h
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(296540)
          , o = t(415044)
          , s = t(868238)
          , l = t(928778)
          , c = t(178196)
          , d = t(131883)
          , u = t(314201)
          , m = t.n(u)
          , g = t(136328)
          , p = t(244402)
          , f = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.render = function() {
                var e = this.props
                  , n = e.data
                  , t = e.showOnboardingModal;
                if (!n)
                    return null;
                var i = n.error
                  , r = n.loading
                  , o = n.currentUser
                  , s = o && o.followedGames && o.followedGames.nodes
                  , l = o && o.createdAt;
                return !i && s && l ? (0,
                a.jsx)(p.V, {
                    loading: r,
                    showOnboardingModal: t,
                    followedCount: s.length,
                    createdAt: l
                }) : null
            }
            ,
            n
        }(r.Component)
          , h = (0,
        s.Zz)((0,
        o.Ng)((function(e) {
            return {
                isUserReady: (0,
                d.M3)(e)
            }
        }
        ), (function(e) {
            return (0,
            s.zH)({
                showOnboardingModal: function(e) {
                    var n = (0,
                    i.__rest)(e, []);
                    return (0,
                    c.to)(p.p, n)
                }
            }, e)
        }
        )), (0,
        l._v)(m(), {
            options: {
                variables: {
                    limit: g.Z
                }
            },
            skip: function(e) {
                return !e.isUserReady
            }
        }))(f)
    },
    108687: function(e, n, t) {
        "use strict";
        t.d(n, {
            P: function() {
                return g
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(959340)
          , o = t(914421)
          , s = t(731667)
          , l = t(97774)
          , c = t(312663)
          , d = t(246942)
          , u = t.n(d)
          , m = (t(296540),
        t(384761))
          , g = function(e) {
            var n = (0,
            m.GG)(e.sourceType)
              , t = n && (0,
            a.jsx)(r.P, {
                display: o.nl.Flex,
                margin: {
                    right: .5
                },
                children: (0,
                a.jsx)(s.t, (0,
                i.__assign)({
                    width: 12,
                    height: 12
                }, n))
            })
              , d = "promoted-card-stat__".concat(e.sourceType.toLowerCase());
            return (0,
            a.jsxs)(r.P, {
                alignItems: o.k2.Center,
                background: o.VS.Overlay,
                borderRadius: l.Z.Medium,
                className: u()("preview-card-stat", d),
                color: o.Q1.Overlay,
                display: o.nl.Flex,
                fontSize: o.Z4.Size7,
                padding: {
                    x: .5
                },
                justifyContent: o.A9.Center,
                children: [t, (0,
                a.jsx)(c.N, {
                    italic: !0,
                    "data-a-target": e.sourceType,
                    children: (0,
                    m.hF)()
                })]
            })
        }
    },
    959654: function(e, n, t) {
        "use strict";
        t.d(n, {
            s: function() {
                return r
            }
        });
        var i = t(296540)
          , a = t(807975)
          , r = function(e, n, t, r, o) {
            var s = (0,
            i.useRef)({});
            return {
                trackRecFeedbackAdd: function(i, l) {
                    var c = {
                        itemTrackingID: e,
                        itemName: l,
                        section: r,
                        itemSubSection: o,
                        feedbackType: t,
                        itemPage: n
                    };
                    s.current[i] = c,
                    (0,
                    a.au)(c)
                },
                trackRecFeedbackUndo: function(e) {
                    s.current[e] && (0,
                    a.Rz)(s.current[e])
                }
            }
        }
    },
    309667: function(e, n, t) {
        "use strict";
        t.d(n, {
            JY: function() {
                return h
            },
            Mo: function() {
                return p
            },
            _C: function() {
                return m
            },
            aS: function() {
                return k
            },
            le: function() {
                return d
            },
            wJ: function() {
                return o
            }
        });
        var i = t(960688)
          , a = t(267924)
          , r = t(807975);
        function o(e, n, t) {
            if ("string" == typeof e.text)
                return e.text;
            var a = e.contentType === r.XC.Live ? n : t;
            return a ? e.text(a) : (0,
            i.hw)("I am not interested in this content", "RecFeedbackModal")
        }
        function s(e) {
            return (0,
            i.hw)("I am not interested in this channel: {channel}", {
                channel: e
            }, "FeedbackReason")
        }
        function l() {
            return {
                text: function(e) {
                    return function(e) {
                        return (0,
                        i.hw)("I am not interested in this category: {category}", {
                            category: e
                        }, "FeedbackReason")
                    }(e)
                },
                contentType: r.XC.Game,
                feedbackType: a.Djc.NOT_INTERESTED
            }
        }
        var c = null;
        function d() {
            return c = null != c ? c : l()
        }
        var u = null;
        function m() {
            return u = null != u ? u : {
                text: function(e) {
                    return s(e)
                },
                contentType: r.XC.Live,
                feedbackType: a.Djc.NOT_INTERESTED
            }
        }
        var g = null;
        function p() {
            return g = null != g ? g : {
                text: function(e) {
                    return s(e)
                },
                contentType: r.XC.Live,
                feedbackType: a.Djc.NOT_INTERESTED
            }
        }
        var f = null;
        function h() {
            return f = null != f ? f : l()
        }
        var v = null;
        function k() {
            return v = null != v ? v : {
                text: (0,
                i.hw)("I am not interested in this video", "FeedbackReason"),
                contentType: r.XC.Vod,
                feedbackType: a.Djc.NOT_INTERESTED
            }
        }
    },
    330504: function(e, n, t) {
        "use strict";
        t.d(n, {
            _: function() {
                return m
            }
        });
        var i = t(331635)
          , a = t(296540)
          , r = t(474848)
          , o = t(472571)
          , s = t(79004)
          , l = t(489437)
          , c = t(424131)
          , d = t(960688)
          , u = t(120605)
          , m = function(e) {
            var n = e.reportButtonIconSize
              , t = e.reportMenuItems
              , m = e.overlay
              , g = e.dialogState
              , p = (0,
            d.hw)("More options", "ReportButton")
              , f = (0,
            o.p)()
              , h = g || f
              , v = h.dialogProps
              , k = h.anchorProps
              , y = h.close;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(s.a2, (0,
                i.__assign)({
                    "aria-label": p,
                    title: p,
                    icon: l.x,
                    size: n
                }, k, {
                    overlay: m,
                    "data-a-target": "report-button-more-button"
                })), (0,
                r.jsx)(c.n, (0,
                i.__assign)({}, v, {
                    children: t.map((function(e, n) {
                        return (0,
                        a.createElement)(u.Z, (0,
                        i.__assign)({
                            onClick: y
                        }, e, {
                            key: n
                        }))
                    }
                    ))
                }))]
            })
        }
    },
    638422: function(e, n, t) {
        "use strict";
        t.d(n, {
            M5: function() {
                return h
            },
            _y: function() {
                return i
            }
        });
        var i, a = t(331635), r = t(474848), o = t(779025), s = t(296540), l = t(868238), c = t(928778), d = t(82984), u = t(73038), m = t.n(u);
        function g(e) {
            return void 0 !== e.graffitiTagID
        }
        !function(e) {
            e.Bounce = "animated-tag--bounce",
            e.NoBounce = "animated-tag--no-bounce"
        }(i || (i = {}));
        var p = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return (0,
            a.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                this.reportInteractive()
            }
            ,
            n.prototype.componentDidUpdate = function() {
                this.reportInteractive()
            }
            ,
            n.prototype.render = function() {
                var e = this.getLabel();
                if (!e)
                    return null;
                var n = g(this.props) ? this.props.graffitiTagID : this.props.freeformTagName;
                return (0,
                r.jsx)("div", {
                    className: i.NoBounce,
                    "data-tag-filter": n,
                    children: (0,
                    r.jsx)(o.p, {
                        label: e,
                        onClick: this.props.onClick,
                        status: o.b.Selected,
                        "data-a-target": "form-tag-".concat(e)
                    })
                })
            }
            ,
            n.prototype.getLabel = function() {
                var e, n, t, i, a, r;
                return g(this.props) ? null !== (i = null !== (e = this.props.graffitiTagLocalizedName) && void 0 !== e ? e : null === (t = null === (n = this.props.data) || void 0 === n ? void 0 : n.contentTag) || void 0 === t ? void 0 : t.localizedName) && void 0 !== i ? i : null === (r = null === (a = this.props.data) || void 0 === a ? void 0 : a.contentTag) || void 0 === r ? void 0 : r.tagName : this.props.freeformTagName
            }
            ,
            n.prototype.reportInteractive = function() {
                f(this.props) ? this.props.data && !this.props.data.loading && this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
            }
            ,
            n
        }(s.Component);
        function f(e) {
            return g(e) && !e.graffitiTagLocalizedName
        }
        var h = (0,
        l.Zz)((0,
        c._v)(m(), {
            options: function(e) {
                return {
                    variables: {
                        id: g(e) ? e.graffitiTagID : ""
                    }
                }
            },
            skip: function(e) {
                return !f(e)
            }
        }), (0,
        d.W)("AnimatedTag"))(p)
    },
    578426: function(e, n, t) {
        "use strict";
        t.d(n, {
            L0: function() {
                return R
            },
            E5: function() {
                return a
            }
        });
        var i, a, r = t(331635), o = t(474848), s = t(959340), l = t(914421), c = t(486489), d = t(186396), u = t(927784), m = t(826094), g = t(818120), p = t(296540), f = t(956347), h = t(868238), v = t(960688), k = t(191132), y = t(735354), x = t(959385), b = t(783321), S = t(105146), _ = t(99137), T = t(520899), C = t(636367), N = t(312663), w = t(572279), j = t(168096), P = t(270322), F = function(e) {
            var n = e.onClick
              , t = e.onKeyDown
              , i = e.tagName
              , a = e.trackingProps
              , r = e.searchSessionID
              , l = e.query
              , c = e.itemPosition
              , d = n ? function() {
                return n(i, c)
            }
            : void 0
              , u = t ? function(e) {
                return t(e, i)
            }
            : void 0
              , m = {
                query: l,
                surface: a.surface,
                searchSessionID: r,
                location: a.location,
                suggestionText: e.tagName,
                itemPosition: c
            }
              , g = (0,
            j.X)({
                onFirstImpression: function() {
                    (0,
                    P.c6)(m)
                },
                impressionKey: r,
                percentage: 75
            }).elementRef;
            return (0,
            o.jsx)("div", {
                ref: g,
                children: (0,
                o.jsx)(w.A, {
                    children: (0,
                    o.jsx)(C.tD, {
                        onClick: d,
                        onKeyDown: u,
                        children: (0,
                        o.jsx)(s.P, {
                            padding: {
                                y: .5,
                                x: 1
                            },
                            children: (0,
                            o.jsx)(N.N, {
                                children: i
                            })
                        })
                    })
                })
            })
        }, D = t(563798), I = t.n(D);
        !function(e) {
            e.FreeformTagBrowseLiveChannels = "freeform-tag-browse-live",
            e.FreeformTagCategoryPage = "freeform-tag-category-page",
            e.FreeformTagDashboard = "freeform-tag-dashboard"
        }(a || (a = {}));
        var L = (i = (0,
        k.U)({
            name: "FreeformTagSearchResults",
            category: _.u.Discover
        })).Available
          , A = i.Unavailable
          , R = (0,
        h.Zz)(f.y)((function(e) {
            var n = (0,
            p.useState)(!1)
              , t = n[0]
              , i = n[1]
              , f = (0,
            p.useState)("")
              , h = f[0]
              , k = f[1]
              , _ = (0,
            p.useState)([])
              , C = _[0]
              , N = _[1]
              , w = (0,
            p.useState)(void 0)
              , j = w[0]
              , D = w[1]
              , R = (0,
            p.useState)("")
              , E = R[0]
              , V = R[1]
              , B = (0,
            p.useState)((0,
            S.aq)())
              , G = B[0]
              , M = B[1]
              , z = (0,
            p.useState)(!0)
              , O = z[0]
              , U = z[1]
              , H = (0,
            p.useRef)(null)
              , W = (0,
            p.useRef)()
              , $ = (0,
            b._l)(I())
              , q = $[0]
              , Z = $[1]
              , J = Z.data
              , Q = Z.loading
              , X = (0,
            p.useCallback)((function() {
                oe(""),
                k("")
            }
            ), []);
            p.useEffect((function() {
                var e, n, t;
                !Q && J && se(null !== (t = null === (n = null === (e = null == J ? void 0 : J.searchFreeformTags) || void 0 === e ? void 0 : e.edges) || void 0 === n ? void 0 : n.map((function(e) {
                    return e.node.tagName
                }
                ))) && void 0 !== t ? t : null)
            }
            ), [J, Q]),
            p.useEffect((function() {
                e.type === a.FreeformTagDashboard && (k(e.dropdownInputValue || ""),
                oe(e.dropdownInputValue || ""))
            }
            ), [e.dropdownInputValue, e.type, e.dropdownError]);
            var K = (0,
            p.useCallback)((function(n, t) {
                return (0,
                r.__awaiter)(void 0, void 0, void 0, (function() {
                    var i;
                    return (0,
                    r.__generator)(this, (function(a) {
                        100,
                        V(n),
                        i = {
                            query: n,
                            surface: e.trackingProps.surface,
                            searchSessionID: t,
                            location: e.trackingProps.location
                        },
                        (0,
                        P.fd)(i);
                        try {
                            q({
                                variables: {
                                    userQuery: n,
                                    first: 100
                                }
                            })
                        } catch (e) {
                            N([]),
                            D("Failed freeform tags search: ".concat((0,
                            m.d)(e, {
                                useRawMessage: !0
                            })))
                        }
                        return [2]
                    }
                    ))
                }
                ))
            }
            ), [q, e.trackingProps.location, e.trackingProps.surface])
              , Y = (0,
            g.d)(K, 200, {
                trailing: !0
            });
            p.useEffect((function() {
                "" !== h && Y(h, G)
            }
            ), [Y, K, h, G]);
            var ee, ne = function(e) {
                return H.current = e
            }, te = function(n, t) {
                return (0,
                o.jsx)(F, {
                    tagName: n,
                    onClick: function() {
                        e.onTagSelect && e.onTagSelect(n),
                        re(n, t)
                    },
                    onKeyDown: function(i, a) {
                        "Enter" === i.key && (e.onTagSelect && e.onTagSelect(n),
                        re(a, t),
                        i.preventDefault(),
                        i.stopPropagation())
                    },
                    trackingProps: e.trackingProps,
                    searchSessionID: G,
                    query: E,
                    itemPosition: t
                }, "".concat(n, "-").concat(t))
            }, ie = function() {
                return (0,
                o.jsx)(s.P, {
                    display: l.nl.Flex,
                    justifyContent: l.A9.Center,
                    padding: {
                        y: .5,
                        x: 1
                    },
                    children: (0,
                    o.jsx)(c.k, {
                        delay: 0
                    })
                })
            }, ae = function() {
                return j ? (0,
                o.jsx)(A, {
                    reason: j,
                    children: (0,
                    o.jsx)(T.S, {})
                }) : (0,
                o.jsx)(L, {
                    children: (0,
                    o.jsx)(T.S, {})
                })
            }, re = function(n, t) {
                return (0,
                r.__awaiter)(void 0, void 0, void 0, (function() {
                    var i, o, s;
                    return (0,
                    r.__generator)(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return le(!1),
                            X(),
                            e.type !== a.FreeformTagDashboard ? [3, 2] : [4, U(!1)];
                        case 1:
                            l.sent(),
                            null === (s = W.current) || void 0 === s || s.focus(),
                            l.label = 2;
                        case 2:
                            return i = (0,
                            r.__assign)((0,
                            r.__assign)({}, e.trackingProps), {
                                searchSessionID: G,
                                itemPosition: t,
                                query: E,
                                suggestionText: n
                            }),
                            (0,
                            P.yk)(i),
                            o = (0,
                            r.__assign)((0,
                            r.__assign)({}, e.trackingProps), {
                                searchSessionID: G,
                                query: E,
                                suggestionText: n,
                                suggestionPosition: t,
                                explicitAcceptance: !0,
                                implicitAcceptance: !1
                            }),
                            (0,
                            P.K8)(o),
                            U(!0),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }, oe = function(e) {
                var n;
                null === (n = W.current) || void 0 === n || n.setValue(e)
            }, se = function(e) {
                var n;
                e && (N(e),
                D(void 0),
                H && (null === (n = H.current) || void 0 === n || n.scrollToTop()))
            }, le = function(e) {
                var n;
                null === (n = W.current) || void 0 === n || n.toggle(e),
                i(e)
            }, ce = (0,
            o.jsx)(s.P, {
                margin: {
                    left: "1px"
                },
                children: (0,
                o.jsx)(d.M2, {
                    variant: "secondary",
                    disabled: e.dropdownError,
                    rounding: "right",
                    onClick: function() {
                        return (0,
                        r.__awaiter)(void 0, void 0, void 0, (function() {
                            var n, t, i, a, o;
                            return (0,
                            r.__generator)(this, (function(s) {
                                switch (s.label) {
                                case 0:
                                    return e.onDashboardAddTag && e.onDashboardAddTag(),
                                    [4, U(!1)];
                                case 1:
                                    return s.sent(),
                                    null === (o = W.current) || void 0 === o || o.focus(),
                                    le(!1),
                                    X(),
                                    n = (0,
                                    P.f8)(E, C),
                                    t = n.isImplicitAcceptance,
                                    i = n.suggestionIndex,
                                    a = (0,
                                    r.__assign)((0,
                                    r.__assign)({}, e.trackingProps), {
                                        searchSessionID: G,
                                        query: E,
                                        suggestionText: i > -1 ? C[i] : "",
                                        explicitAcceptance: !1,
                                        implicitAcceptance: t,
                                        suggestionPosition: i > -1 ? i : null
                                    }),
                                    (0,
                                    P.K8)(a),
                                    U(!0),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    },
                    children: (0,
                    o.jsx)(s.P, {
                        padding: {
                            x: 1
                        },
                        children: (0,
                        v.hw)("Add Tag", "FreeformTagSearch")
                    })
                })
            });
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(s.P, {
                    width: "100%",
                    children: (0,
                    o.jsx)(y.U, {
                        inputID: e.inputID,
                        inline: e.inline,
                        inputSize: e.inputSize,
                        onChange: function(n) {
                            return (0,
                            r.__awaiter)(void 0, void 0, void 0, (function() {
                                return (0,
                                r.__generator)(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return e.onChange ? [4, e.onChange(n)] : [3, 2];
                                    case 1:
                                        t.sent(),
                                        t.label = 2;
                                    case 2:
                                        return k(n),
                                        oe(n),
                                        le("" !== n),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        onFocusInput: function() {
                            if (e.onFocusInput && e.onFocusInput(),
                            "" !== h && le(!0),
                            O) {
                                var n = (0,
                                S.aq)();
                                M(n);
                                var t = (0,
                                r.__assign)((0,
                                r.__assign)({}, e.trackingProps), {
                                    searchSessionID: n
                                });
                                (0,
                                P.cB)(t)
                            }
                        },
                        onClose: function() {
                            return i(!1)
                        },
                        placeholder: e.type === a.FreeformTagDashboard ? (0,
                        v.hw)("Use Enter after each tag", "FreeformTagSearch") : (0,
                        v.hw)("Search Tags", "FreeformTagSearch"),
                        ref: function(e) {
                            W.current = e
                        },
                        onKeyDown: function(n, t) {
                            return (0,
                            r.__awaiter)(void 0, void 0, void 0, (function() {
                                var i, o, s, l, c, d;
                                return (0,
                                r.__generator)(this, (function(u) {
                                    switch (u.label) {
                                    case 0:
                                        return n.persist(),
                                        e.onKeyDown && e.onKeyDown(n, t),
                                        e.type !== a.FreeformTagDashboard || e.dropdownError ? [3, 2] : "," !== n.key && "Enter" !== n.key ? [2] : (X(),
                                        le(!1),
                                        [4, U(!1)]);
                                    case 1:
                                        return u.sent(),
                                        null === (d = W.current) || void 0 === d || d.focus(),
                                        "," === n.key && (n.preventDefault(),
                                        n.stopPropagation()),
                                        i = (0,
                                        P.f8)(E, C),
                                        s = i.isImplicitAcceptance,
                                        l = i.suggestionIndex,
                                        c = (0,
                                        r.__assign)((0,
                                        r.__assign)({}, e.trackingProps), {
                                            searchSessionID: G,
                                            query: E,
                                            suggestionText: t,
                                            explicitAcceptance: !1,
                                            implicitAcceptance: s,
                                            suggestionPosition: l > -1 ? l : null
                                        }),
                                        (0,
                                        P.K8)(c),
                                        U(!0),
                                        [3, 3];
                                    case 2:
                                        e.type !== a.FreeformTagBrowseLiveChannels && e.type !== a.FreeformTagCategoryPage || "Enter" === n.key && (le(!1),
                                        X(),
                                        e.onTagSelect && e.onTagSelect(t),
                                        o = (0,
                                        P.f8)(E, C),
                                        s = o.isImplicitAcceptance,
                                        l = o.suggestionIndex,
                                        c = (0,
                                        r.__assign)((0,
                                        r.__assign)({}, e.trackingProps), {
                                            searchSessionID: G,
                                            query: E,
                                            suggestionText: t,
                                            explicitAcceptance: !1,
                                            implicitAcceptance: s,
                                            suggestionPosition: l > -1 ? l : null
                                        }),
                                        (0,
                                        P.K8)(c),
                                        U(!0)),
                                        u.label = 3;
                                    case 3:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        },
                        inputErrored: e.dropdownError,
                        showDropdown: e.showDropdown,
                        inputRounding: e.type === a.FreeformTagDashboard ? u.jg.Left : u.jg.Default,
                        inputAriaDescribedBy: e.inputAriaDescribedBy,
                        children: (t || (ee = (0,
                        o.jsx)(L, {})),
                        ee = !C.length && Q ? (0,
                        o.jsx)(L, {
                            children: ie()
                        }) : C.length ? (0,
                        o.jsx)(L, {
                            children: C.map(te)
                        }) : ae(),
                        (0,
                        o.jsx)(x.Vq, {
                            className: "freeform-tag-search__scrollable-area",
                            scrollRef: ne,
                            suppressScrollX: !0,
                            children: (0,
                            o.jsx)(s.P, {
                                children: ee
                            })
                        }))
                    })
                }), e.type === a.FreeformTagDashboard && e.showAddTagButton && ce]
            })
        }
        ))
    },
    270322: function(e, n, t) {
        "use strict";
        t.d(n, {
            CM: function() {
                return i
            },
            K8: function() {
                return m
            },
            c6: function() {
                return d
            },
            cB: function() {
                return l
            },
            f8: function() {
                return g
            },
            fd: function() {
                return c
            },
            yk: function() {
                return u
            }
        });
        var i, a, r, o, s = t(960688);
        function l(e) {
            var n = {
                search_session_id: e.searchSessionID,
                surface: e.surface,
                location: e.location
            };
            s.E5.track("search_input_focus", n)
        }
        function c(e) {
            var n = {
                search_session_id: e.searchSessionID,
                surface: e.surface,
                query: e.query,
                section: a.TagAutocomplete,
                location: e.location
            };
            s.E5.track("search_suggestion_request", n)
        }
        function d(e) {
            var n = {
                search_session_id: e.searchSessionID,
                surface: e.surface,
                suggestion_text: e.suggestionText,
                section: a.TagAutocomplete,
                query: e.query,
                suggestion_type: r.Tag,
                item_position: e.itemPosition,
                location: e.location
            };
            s.E5.track("search_suggestion_display", n)
        }
        function u(e) {
            var n = {
                search_session_id: e.searchSessionID,
                surface: e.surface,
                suggestion_text: e.suggestionText,
                section: a.TagAutocomplete,
                query: e.query,
                suggestion_type: r.Tag,
                item_position: e.itemPosition,
                location: e.location
            };
            s.E5.track("search_suggestion_click", n)
        }
        function m(e) {
            var n = {
                search_session_id: e.searchSessionID,
                surface: e.surface,
                suggestion_text: e.explicitAcceptance || e.implicitAcceptance ? e.suggestionText : null,
                section: a.TagAutocomplete,
                query: e.query,
                suggestion_type: e.explicitAcceptance || e.implicitAcceptance ? r.Tag : null,
                query_type: o.Tag,
                explicit_acceptance: e.explicitAcceptance,
                implicit_acceptance: e.implicitAcceptance,
                suggestion_position: e.explicitAcceptance || e.implicitAcceptance ? e.suggestionPosition : null,
                location: e.location
            };
            s.E5.track("search_query_submit", n)
        }
        function g(e, n) {
            for (var t = !1, i = -1, a = 0; a < n.length; a++) {
                n[a].toLocaleLowerCase() === e.toLocaleLowerCase() && (t = !0,
                i = a);
                break
            }
            return {
                isImplicitAcceptance: t,
                suggestionIndex: i
            }
        }
        !function(e) {
            e.BrowseLiveChannels = "browse_livechannels",
            e.BrowseInCategoryChannels = "browse_incategory_channels",
            e.EditStreamInfo = "edit_stream_info"
        }(i || (i = {})),
        function(e) {
            e.TagAutocomplete = "tag_autocomplete"
        }(a || (a = {})),
        function(e) {
            e.Tag = "tag"
        }(r || (r = {})),
        function(e) {
            e.Tag = "tag"
        }(o || (o = {}))
    },
    746761: function(e, n, t) {
        "use strict";
        t.d(n, {
            P: function() {
                return h
            },
            _: function() {
                return i
            }
        });
        var i, a = t(331635), r = t(474848), o = t(959340), s = t(564368), l = t(973474), c = t(36935), d = t(312663), u = t(914421), m = t(588702), g = t(296540), p = t(960688), f = t(414066);
        !function(e) {
            e[e.NoResults = 0] = "NoResults",
            e[e.TooManyTags = 1] = "TooManyTags"
        }(i || (i = {}));
        var h = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.renderRemoveButton = function() {
                    if (n.props.tagFilters && n.props.tagFilters.length && n.props.onClickRemoveLastTag) {
                        var e = n.props.tagFilters[n.props.tagFilters.length - 1];
                        return (0,
                        r.jsx)(o.P, {
                            margin: {
                                top: 2
                            },
                            children: (0,
                            r.jsx)(s.$n, {
                                onClick: n.props.onClickRemoveLastTag,
                                variant: s.VQ.Secondary,
                                children: (0,
                                p.hw)("Remove the {lastAdded} tag and try again", {
                                    lastAdded: e.localizedName || e.tagName
                                }, "TagError")
                            })
                        })
                    }
                }
                ,
                n.getErrorMessage = function() {
                    switch (n.props.errorType) {
                    case i.NoResults:
                        return (0,
                        p.hw)("No results found", "TagError");
                    case i.TooManyTags:
                        return (0,
                        p.hw)("You cannot apply more than five tags", "TagError");
                    default:
                        return n.props.errorType
                    }
                }
                ,
                n
            }
            return (0,
            a.__extends)(n, e),
            n.prototype.render = function() {
                return this.props.freeformTagFilter && this.props.errorType === i.NoResults ? (0,
                r.jsxs)(o.P, {
                    display: "flex",
                    flexDirection: "row",
                    padding: {
                        top: 1
                    },
                    children: [(0,
                    r.jsx)(o.P, {
                        children: (0,
                        r.jsx)(l.L, {
                            src: f,
                            alt: ""
                        })
                    }), (0,
                    r.jsxs)(o.P, {
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "center",
                        padding: {
                            left: 2
                        },
                        children: [(0,
                        r.jsx)(o.P, {
                            padding: {
                                y: 1
                            },
                            children: (0,
                            r.jsx)(c.hE, {
                                size: c.uM.Small,
                                children: (0,
                                p.hw)('There are no live channels tagged "{tagName}".', {
                                    tagName: this.props.freeformTagFilter
                                }, "TagError")
                            })
                        }), (0,
                        r.jsx)(d.N, {
                            color: u.Q1.Alt2,
                            fontSize: u.Z4.Size6,
                            children: (0,
                            p.hw)("Try searching for a similar phrase or a different tag.", "TagError")
                        })]
                    })]
                }) : (0,
                r.jsxs)(o.P, {
                    children: [(0,
                    r.jsx)(c.hE, {
                        type: m.M2.H3,
                        children: this.getErrorMessage()
                    }), (0,
                    r.jsx)(d.N, {
                        color: u.Q1.Alt2,
                        fontSize: u.Z4.Size5,
                        children: (0,
                        p.hw)("Try adjusting your tags to find what you're looking for.", "TagError")
                    }), this.renderRemoveButton()]
                })
            }
            ,
            n
        }(g.Component)
    },
    357397: function(e, n, t) {
        "use strict";
        t.d(n, {
            $: function() {
                return v
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(959340)
          , o = t(914421)
          , s = t(296540)
          , l = t(868238)
          , c = t(82984)
          , d = t(638422)
          , u = t(578426)
          , m = t(270322)
          , g = t(954659)
          , p = t(809234)
          , f = t(42419)
          , h = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.renderAddTags = function() {
                    return (0,
                    a.jsx)(r.P, {
                        margin: {
                            right: .5
                        },
                        minWidth: "".concat(n.props.tagSearchType === g.AH.TagCategory ? 22 : 0, "rem"),
                        children: n.renderTagSearch()
                    })
                }
                ,
                n.renderTagSearch = function() {
                    if (n.props.tagSearchType === g.AH.TagCategory) {
                        var e = {
                            inline: !1,
                            onTagClick: n.props.onAddTagFilter,
                            onFocusInput: n.onFocusSearch,
                            type: n.props.tagSearchType,
                            section: n.props.section,
                            selectedTags: n.props.selectedTags,
                            numSelectedTags: n.props.selectedTags.length
                        };
                        return (0,
                        a.jsx)(g.vY, (0,
                        i.__assign)({}, e))
                    }
                    if (n.props.tagSearchType === u.E5.FreeformTagCategoryPage) {
                        e = {
                            inline: !1,
                            categoryName: n.props.categoryName,
                            onTagSelect: n.props.onAddFreeformTagFilter,
                            type: n.props.tagSearchType,
                            section: n.props.section,
                            onFocusInput: n.onFocusSearch,
                            trackingProps: {
                                surface: m.CM.BrowseInCategoryChannels,
                                location: "browse"
                            }
                        };
                        return (0,
                        a.jsx)(u.L0, (0,
                        i.__assign)({}, e))
                    }
                    e = {
                        inline: !1,
                        onTagSelect: n.props.onAddFreeformTagFilter,
                        type: n.props.tagSearchType,
                        section: n.props.section,
                        onFocusInput: n.onFocusSearch,
                        trackingProps: {
                            surface: m.CM.BrowseLiveChannels,
                            location: "browse"
                        }
                    };
                    return (0,
                    a.jsx)(u.L0, (0,
                    i.__assign)({}, e))
                }
                ,
                n.onFocusSearch = function() {
                    var e = {
                        section: n.props.section,
                        tagPosition: n.props.selectedTags.length,
                        searchEvent: !1,
                        tagId: "",
                        dismiss: !1,
                        focus: !0
                    };
                    (0,
                    f.t)(e)
                }
                ,
                n.onRemoveFreeformTag = function() {
                    (0,
                    f.S0)({
                        itemPage: n.props.itemPage,
                        section: n.props.section,
                        selectedFreeformTagName: n.props.selectedFreeformTagName
                    }),
                    (0,
                    p.c4)(n.props.targetPage, void 0)
                }
                ,
                n
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.render = function() {
                return (0,
                a.jsxs)(r.P, {
                    alignItems: o.k2.Center,
                    display: o.nl.Flex,
                    flexWrap: o.I4.Wrap,
                    "data-a-target": "tags-filter-dropdown",
                    children: [this.renderAddTags(), this.renderGraffitiTags(), this.renderFreeformTag()]
                })
            }
            ,
            n.prototype.renderGraffitiTags = function() {
                var e = this;
                return this.props.selectedTags.map((function(n) {
                    var t = "tag-filter-".concat(n.id);
                    return e.renderTag(t, {
                        graffitiTagID: n.id,
                        graffitiTagLocalizedName: n.localizedName || n.tagName,
                        onClick: function() {
                            return e.removeGraffitiTag(n.id)
                        }
                    })
                }
                ))
            }
            ,
            n.prototype.renderFreeformTag = function() {
                var e = this.props.selectedFreeformTagName;
                if (!e)
                    return null;
                var n = "tag-filter-".concat(e);
                return this.renderTag(n, {
                    freeformTagName: e,
                    onClick: this.onRemoveFreeformTag
                })
            }
            ,
            n.prototype.renderTag = function(e, n) {
                return (0,
                a.jsx)(r.P, {
                    margin: {
                        x: .5,
                        y: .5
                    },
                    children: (0,
                    a.jsx)(d.M5, (0,
                    i.__assign)({}, n))
                }, e)
            }
            ,
            n.prototype.removeGraffitiTag = function(e) {
                var n = this.props.selectedTags.findIndex((function(n) {
                    return n.id === e
                }
                ))
                  , t = {
                    section: this.props.section,
                    tagPosition: n,
                    searchEvent: !0,
                    tagId: e,
                    dismiss: !0
                };
                (0,
                f.t)(t),
                (0,
                p.MA)(e, this.props.targetPage)
            }
            ,
            n
        }(s.Component)
          , v = (0,
        l.Zz)((0,
        c.W)("TagFilter", {
            autoReportInteractive: !0
        }))(h)
    },
    427605: function(e, n, t) {
        "use strict";
        t.d(n, {
            L: function() {
                return R
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(216042)
          , o = t(914421)
          , s = t(895841)
          , l = t(296540)
          , c = t(960688)
          , d = t(97774)
          , u = t(792486)
          , m = t(959340)
          , g = t(731667)
          , p = t(912800)
          , f = function(e) {
            function n() {
                return null !== e && e.apply(this, arguments) || this
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.render = function() {
                return (0,
                a.jsx)(r.S, {
                    className: "subscriber-stream-tag",
                    borderRadius: d.Z.Rounded,
                    display: o.nl.InlineFlex,
                    alignItems: o.k2.Center,
                    fontWeight: o.IT.SemiBold,
                    children: (0,
                    a.jsxs)(u.M, (0,
                    i.__assign)({}, this.props, {
                        children: [(0,
                        a.jsx)(m.P, {
                            display: o.nl.Flex,
                            margin: {
                                right: .5
                            },
                            children: (0,
                            a.jsx)(g.t, {
                                asset: this.props.subscribed ? p.t.Star : p.t.StarHollow,
                                height: 14,
                                width: 14
                            })
                        }), this.props.label]
                    }))
                })
            }
            ,
            n
        }(l.Component)
          , h = t(998300)
          , v = t(267924)
          , k = t(145463)
          , y = t(198425)
          , x = t(72657)
          , b = t(218716)
          , S = "tag-size-cache-uv.2"
          , _ = 2e3
          , T = 2 * b.Pn
          , C = c.IG.get(S, {})
          , N = null;
        function w(e) {
            return C[e]
        }
        function j(e, n) {
            C[e] = n,
            function() {
                if (N)
                    return;
                N = setTimeout((function() {
                    c.IG.set(S, C, {
                        expireInMS: T
                    }),
                    N = null
                }
                ), _)
            }()
        }
        var P = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.wrapperRef = l.createRef(),
                n.measured = !1,
                n.reportMeasuredWidth = function() {
                    var e = n.props
                      , t = e.cachedWidth
                      , i = e.tagName;
                    t || n.measured || !n.wrapperRef.current || (j(i, n.wrapperRef.current.getBoundingClientRect().width),
                    n.measured = !0)
                }
                ,
                n
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                this.reportMeasuredWidth()
            }
            ,
            n.prototype.componentDidUpdate = function() {
                this.reportMeasuredWidth()
            }
            ,
            n.prototype.render = function() {
                var e = this.props
                  , n = e.isLast
                  , t = e.children
                  , s = e.cachedWidth
                  , l = e.marginBottom
                  , c = void 0 === l ? .5 : l
                  , d = s ? {} : {
                    ref: this.wrapperRef
                };
                return (0,
                a.jsx)(r.S, {
                    fontSize: o.Z4.Size7,
                    display: o.nl.InlineBlock,
                    margin: {
                        right: n ? 0 : .5,
                        bottom: c
                    },
                    verticalAlign: o.G4.Middle,
                    children: (0,
                    a.jsx)("div", (0,
                    i.__assign)({}, d, {
                        children: t
                    }))
                })
            }
            ,
            n
        }(l.Component);
        var F = t(585078)
          , D = t(971702)
          , I = function() {
            function e() {
                this.tags = [],
                this.shuffledTags = []
            }
            return e.prototype.shuffle = function(e) {
                if (this.hasCachedResult(e))
                    return this.shuffledTags;
                var n = e.slice();
                return (0,
                D.R)(n),
                this.shuffledTags = n,
                this.tags = e,
                this.shuffledTags
            }
            ,
            e.prototype.hasCachedResult = function(e) {
                if (e === this.tags)
                    return !0;
                if (e.length !== this.tags.length)
                    return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n].key !== this.tags[n].key)
                        return !1;
                return !0
            }
            ,
            e
        }();
        function L(e) {
            return e.toLowerCase().replace(/\s/g, "")
        }
        function A(e, n) {
            return L(e) === n ? 1 : 0
        }
        var R = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.state = {
                    width: null
                },
                n.wrapperRef = l.createRef(),
                n.tagShuffler = new I,
                n.setTagsShownCalled = !1,
                n.shownTags = [],
                n.tagLimit = 1 / 0,
                n.setTagAreaWidth = function() {
                    if (n.wrapperRef.current) {
                        var e = n.wrapperRef.current.getBoundingClientRect().width;
                        n.setState({
                            width: e
                        })
                    }
                }
                ,
                n.setTagsShown = function(e, t) {
                    var i = n.props
                      , a = i.tags
                      , r = i.tagsShownCallback
                      , o = i.freeformTags
                      , s = i.freeformTagsShownCallback;
                    s && o ? s(t.map((function(e) {
                        return {
                            id: e.key,
                            name: e.displayName
                        }
                    }
                    )).slice(0, e)) : r && a && r(a.slice(0, e)),
                    n.setTagsShownCalled = !0
                }
                ,
                n
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                this.setTagAreaWidth()
            }
            ,
            n.prototype.componentDidUpdate = function() {
                this.setTagsShownCalled || this.setTagsShown(this.tagLimit, this.shownTags)
            }
            ,
            n.prototype.render = function() {
                var e, n, t = this, l = (e = this.props.tags,
                (n = this.props.freeformTags) ? n.map((function(e) {
                    return {
                        displayName: e.name,
                        key: e.id,
                        urlComponent: encodeURIComponent(e.name),
                        freeformTag: e
                    }
                }
                )) : e ? e.map((function(e) {
                    return {
                        displayName: e.localizedName,
                        key: e.id,
                        urlComponent: e.id,
                        graffitiTag: e
                    }
                }
                )) : []);
                if (this.props.shuffle && (l = this.tagShuffler.shuffle(l)),
                this.props.priorityTagTerm) {
                    var d = L(this.props.priorityTagTerm);
                    l.sort((function(e, n) {
                        return A(n.displayName, d) - A(e.displayName, d)
                    }
                    ))
                }
                var u = this.state.width;
                void 0 !== this.props.tagNumberLimit ? this.tagLimit = this.props.tagNumberLimit : this.props.fitOneLine && null !== u && (this.tagLimit = function(e, n) {
                    var t, i = e, a = n.length;
                    for (t = 0; t < a; t++) {
                        var r = n[t]
                          , o = w(r);
                        if (o || (o = 10 + 6.3 * r.length),
                        (i -= o + 2) < 0)
                            break;
                        i -= 5
                    }
                    return t
                }(u, l.map((function(e) {
                    return e.displayName
                }
                )))),
                this.tagLimit >= 0 && (l = l.slice(0, this.tagLimit)),
                this.shownTags = l;
                var m = c.Zn.get(F._, []);
                return (0,
                a.jsx)(r.S, {
                    display: o.nl.InlineBlock,
                    fullWidth: this.props.fitOneLine,
                    children: (0,
                    a.jsx)("div", {
                        ref: this.wrapperRef,
                        children: l.map((function(e, n) {
                            var r = t.getLinkTo(e)
                              , o = {
                                targetBlank: !1,
                                label: e.displayName,
                                "aria-label": (0,
                                c.hw)("Tag, {tagName}", {
                                    tagName: e.displayName
                                }, "TagList"),
                                linkTo: r,
                                onClick: function(n) {
                                    n.stopPropagation(),
                                    t.props.callback && e.graffitiTag ? t.props.callback(n, e.graffitiTag) : t.props.freeformTagsCallback && e.freeformTag && t.props.freeformTagsCallback(n, e.freeformTag)
                                },
                                "data-a-target": e.displayName,
                                overlay: t.props.overlay
                            };
                            return (0,
                            y.Vi)() && o.linkTo && (o.targetBlank = !0,
                            "string" == typeof o.linkTo ? o.linkTo = (0,
                            k.V)(o.linkTo) : o.linkTo && o.linkTo.pathname && (o.linkTo = (0,
                            k.V)(o.linkTo.pathname))),
                            (0,
                            a.jsx)(P, {
                                tagName: e.displayName,
                                cachedWidth: w(e.displayName),
                                isLast: n === l.length - 1,
                                children: e.graffitiTag && m.includes(e.graffitiTag.id) ? (0,
                                a.jsx)(f, (0,
                                i.__assign)({}, o, {
                                    subscribed: !1
                                })) : (0,
                                a.jsx)(s.vw, (0,
                                i.__assign)({}, o))
                            }, e.key)
                        }
                        ))
                    })
                })
            }
            ,
            n.prototype.getLinkTo = function(e) {
                var n, t = this.getRawLinkTo(e);
                if (t && t.pathname) {
                    t.pathname = t.pathname.replace(":tagID", e.urlComponent);
                    var i = null === (n = t.state) || void 0 === n ? void 0 : n.content;
                    return (0,
                    h.V)({
                        content: i || "tag"
                    }, t)
                }
            }
            ,
            n.prototype.getRawLinkTo = function(e) {
                if (e.freeformTag && this.props.freeformTagsLinkTo)
                    return this.props.freeformTagsLinkTo(e.freeformTag);
                if (e.graffitiTag && this.props.tagsLinkTo)
                    return this.props.tagsLinkTo(e.graffitiTag);
                if (this.props.linkTo)
                    return "string" == typeof this.props.linkTo ? {
                        pathname: this.props.linkTo
                    } : (0,
                    i.__assign)({}, this.props.linkTo);
                if (this.props.autoLink) {
                    if (e.graffitiTag && function(e) {
                        return void 0 !== e.scope
                    }(e.graffitiTag))
                        return {
                            pathname: e.graffitiTag.scope === v.H3L.ALL ? x.B.PopularTag : x.B.DirectoryTag
                        };
                    if (e.freeformTag)
                        return {
                            pathname: x.B.PopularTag
                        }
                }
            }
            ,
            n
        }(l.Component)
    },
    954659: function(e, n, t) {
        "use strict";
        t.d(n, {
            y: function() {
                return F
            },
            vY: function() {
                return I
            },
            AH: function() {
                return C
            },
            $P: function() {
                return D
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(959340)
          , o = t(914421)
          , s = t(486489)
          , l = t(826094)
          , c = t(296540)
          , d = t(956347)
          , u = t(868238)
          , m = t(960688)
          , g = t(191132)
          , p = t(735354)
          , f = t(959385)
          , h = t(783321)
          , v = t(267924)
          , k = t(99137)
          , y = t(72657)
          , x = t(636367)
          , b = t(312663)
          , S = t(572279)
          , _ = function(e) {
            var n, t = e.onClick, i = e.tag;
            t && (n = function() {
                return t(i)
            }
            );
            var o = "localizedDescription"in e.tag ? e.tag.localizedDescription : void 0;
            return (0,
            a.jsx)(S.A, {
                children: (0,
                a.jsx)(x.tD, {
                    onClick: n,
                    children: (0,
                    a.jsx)(r.P, {
                        padding: {
                            y: .5,
                            x: 1
                        },
                        children: (0,
                        a.jsx)(b.N, {
                            title: o,
                            children: i.localizedName
                        })
                    })
                })
            })
        };
        var T, C, N = t(42419), w = t(520899), j = t(977553), P = t.n(j);
        !function(e) {
            e.TagCategory = "tag-category",
            e.TagAllMinusAutomation = "tag-all-minus-auto"
        }(C || (C = {}));
        var F = (T = (0,
        g.U)({
            name: "TagSearchResults",
            category: k.u.Discover
        })).Available
          , D = T.Unavailable
          , I = (0,
        u.Zz)(d.y)((function(e) {
            var n, t, d = (0,
            c.useState)(!1), u = d[0], g = d[1], k = (0,
            c.useState)(!1), x = k[0], b = k[1], S = (0,
            c.useState)(""), T = S[0], j = S[1], I = (0,
            c.useState)([]), L = I[0], A = I[1], R = (0,
            c.useState)(void 0), E = R[0], V = R[1], B = (0,
            c.useRef)(void 0), G = (0,
            c.useRef)(null), M = (0,
            c.useRef)(null), z = (0,
            h._l)(P(), {
                onCompleted: function() {
                    var e;
                    X(null !== (e = null == U ? void 0 : U.searchCategoryTags) && void 0 !== e ? e : null)
                }
            }), O = z[0], U = z[1].data, H = function(e) {
                return M.current = e
            }, W = function(n) {
                if (function(e, n) {
                    return !!e && (Array.isArray(e) ? e.find((function(e) {
                        return e.id === n.id
                    }
                    )) : e.id === n.id)
                }(e.selectedTags, n))
                    return null;
                var t = "scope"in n ? n.scope : void 0;
                return (0,
                a.jsx)(_, {
                    onClick: function() {
                        return q(n, t)
                    },
                    tag: n
                }, n.id)
            }, $ = function() {
                return u ? !L.length && x ? (0,
                a.jsx)(F, {
                    children: (0,
                    a.jsx)(r.P, {
                        display: o.nl.Flex,
                        justifyContent: o.A9.Center,
                        padding: {
                            y: .5,
                            x: 1
                        },
                        children: (0,
                        a.jsx)(s.k, {
                            delay: 0
                        })
                    })
                }) : L.length ? (0,
                a.jsx)(F, {
                    children: L.map(W)
                }) : x ? (0,
                a.jsx)(F, {}) : E ? (0,
                a.jsx)(D, {
                    reason: E,
                    children: (0,
                    a.jsx)(w.S, {})
                }) : (0,
                a.jsx)(F, {
                    children: (0,
                    a.jsx)(w.S, {})
                }) : (0,
                a.jsx)(F, {})
            }, q = function(n, t) {
                if (K(!1),
                Y(),
                e.type === C.TagCategory && t === v.H3L.ALL && m.x2.history.push(y.B.Popular),
                e.onTagClick && (e.onTagClick(n, t),
                e.section && void 0 !== e.numSelectedTags)) {
                    var i = {
                        section: e.section,
                        tagPosition: e.numSelectedTags,
                        searchEvent: !0,
                        tagId: n.id,
                        dismiss: !1,
                        suggested: !1
                    };
                    (0,
                    N.t)(i)
                }
            }, Z = function(n) {
                e.onInputChange && e.onInputChange(n),
                B.current && clearTimeout(B.current),
                j(n),
                K(!0),
                b(!0),
                B.current = setTimeout((function() {
                    J(n)
                }
                ), 200)
            }, J = function(n) {
                return (0,
                i.__awaiter)(void 0, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return e.type !== C.TagCategory ? [3, 2] : [4, Q(n || "", 100)];
                        case 1:
                            t.sent(),
                            t.label = 2;
                        case 2:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }, Q = function(e, n) {
                return (0,
                i.__awaiter)(void 0, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(t) {
                        try {
                            O({
                                variables: {
                                    userQuery: e,
                                    limit: n
                                }
                            })
                        } catch (e) {
                            A([]),
                            b(!1),
                            V("Failed category tag search: ".concat((0,
                            l.d)(e, {
                                useRawMessage: !0
                            })))
                        }
                        return [2]
                    }
                    ))
                }
                ))
            }, X = function(e) {
                var n;
                e && (A(e),
                b(!1),
                V(void 0),
                M && (null === (n = M.current) || void 0 === n || n.scrollToTop()))
            }, K = function(e) {
                var n;
                G && (null === (n = G.current) || void 0 === n || n.toggle(e)),
                g(e)
            }, Y = function() {
                var e;
                G && (null === (e = G.current) || void 0 === e || e.setValue("")),
                j(""),
                b(!1)
            };
            return (0,
            a.jsx)(p.U, {
                inline: e.inline,
                inputSize: e.inputSize,
                onChange: Z,
                onFocusInput: function() {
                    e.onFocusInput && e.onFocusInput(),
                    "" === T ? Z("") : K(!0)
                },
                onClose: function() {
                    K(!1)
                },
                placeholder: e.type === C.TagCategory ? (0,
                m.hw)("Search Category Tags", "TagSearch") : (0,
                m.hw)("Search Tags", "TagSearch"),
                ref: G,
                children: (n = $(),
                t = e.scrollableContainerClassName,
                (0,
                a.jsx)(f.Vq, {
                    className: "tag-search__scrollable-area".concat(t ? " ".concat(t) : ""),
                    scrollRef: H,
                    suppressScrollX: !0,
                    children: (0,
                    a.jsx)(r.P, {
                        children: n
                    })
                }))
            })
        }
        ))
    },
    520899: function(e, n, t) {
        "use strict";
        t.d(n, {
            S: function() {
                return o
            }
        });
        var i = t(474848)
          , a = t(959340)
          , r = (t(296540),
        t(960688))
          , o = function() {
            return (0,
            i.jsx)(a.P, {
                padding: {
                    y: .5,
                    x: 1
                },
                children: (0,
                r.hw)("No results found", "TagSearch")
            })
        }
    },
    505173: function(e, n, t) {
        "use strict";
        t.d(n, {
            fr: function() {
                return w
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(296540)
          , o = t(415044)
          , s = t(956347)
          , l = t(868238)
          , c = t(960688)
          , d = t(928778)
          , u = t(511305)
          , m = t(267924);
        var g = t(683969)
          , p = t(96172)
          , f = t(735394)
          , h = t(306427)
          , v = t(982287)
          , k = t.n(v)
          , y = t(532968)
          , x = t(42419);
        function b(e) {
            switch (e) {
            case h.$$.BrowseCategories:
                return x.uf.Categories;
            case h.$$.BrowseLiveChannels:
                return x.uf.LiveChannels;
            case h.$$.GameDirectory:
                return x.uf.IncategoryChannels;
            default:
                (0,
                y.x)(e)
            }
        }
        var S = t(809234);
        function _(e) {
            var n, t = null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.contentTag;
            if (t) {
                var i = T(e).type === h.$$.BrowseCategories ? m.H3L.CATEGORY : m.H3L.ALL;
                return t.scope === i ? t : void 0
            }
        }
        function T(e) {
            var n = e.match.params.categorySlug;
            if (n) {
                var t = (0,
                u.R)(n);
                return h._h.gameDirectoryTagPage(t)
            }
            return (0,
            g.e)(e.location.pathname) ? h._h.browseLiveChannels : h._h.browseCategories
        }
        function C() {
            return void 0 === e && (e = c.x2.history.location.pathname),
            "/directory" !== e && "/directory/" !== e && !e.startsWith("/directory/tags");
            var e
        }
        var N = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.requiresTracking = !0,
                n.updateGraffitTagInRedux = function() {
                    var e = _(n.props)
                      , t = T(n.props);
                    n.props.updateReduxTagFilter(t, e),
                    n.requiresTracking && (n.requiresTracking = !1,
                    e && function(e, n) {
                        var t = {
                            section: b(n),
                            tagPosition: 0,
                            searchEvent: !1,
                            tagId: e.id,
                            dismiss: !1
                        };
                        (0,
                        x.t)(t)
                    }(e, t.type))
                }
                ,
                n.updateFreeformTagInRedux = function(e, t) {
                    var i, a;
                    n.props.updateReduxFreeformTagFilter(e, t),
                    n.requiresTracking && (n.requiresTracking = !1,
                    t && function(e, n, t, i) {
                        var a = {
                            section: null != t ? t : b(n),
                            item_page: null != i ? i : "browse",
                            tagPosition: 0,
                            searchEvent: !1,
                            freeformTagFilter: e,
                            dismiss: !1
                        };
                        (0,
                        x.t)(a)
                    }(t, e.type, null === (i = n.props.location.state) || void 0 === i ? void 0 : i.content, null === (a = n.props.location.state) || void 0 === a ? void 0 : a.medium))
                }
                ,
                n.updateGraffitiTagInUrl = function() {
                    var e = n.props.reduxTagFilter
                      , t = null == e ? void 0 : e.id;
                    (0,
                    S.AZ)(t, T(n.props), !0)
                }
                ,
                n
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                if ((0,
                S._f)() || (this.requiresTracking = !1),
                C())
                    this.syncFreeformTagSources(!1);
                else {
                    var e = !!_(this.props);
                    this.syncGraffitiTagSources(e)
                }
            }
            ,
            n.prototype.componentDidUpdate = function(e) {
                var n, t, i = T(e), a = T(this.props), r = (0,
                h.a$)(i, a);
                if (C()) {
                    var o = (0,
                    S._f)(e.location)
                      , s = (0,
                    S._f)(this.props.location)
                      , l = r && !!o && !s;
                    this.syncFreeformTagSources(l)
                } else {
                    var c = (n = _(e),
                    t = _(this.props),
                    !(!n && !t || n && t && n.id === t.id));
                    this.syncGraffitiTagSources(r && c)
                }
            }
            ,
            n.prototype.render = function() {
                return this.props.render()
            }
            ,
            n.prototype.syncGraffitiTagSources = function(e) {
                e ? this.updateGraffitTagInRedux() : this.props.reduxTagFilter && !(0,
                S._f)() && this.updateGraffitiTagInUrl()
            }
            ,
            n.prototype.syncFreeformTagSources = function(e) {
                var n = (0,
                S.F4)(this.props.location)
                  , t = n.graffitiTagID
                  , i = n.freeformTagName
                  , a = this.props.reduxFreeformTagName
                  , r = T(this.props);
                t ? (0,
                S.AZ)(a, r, !0) : i !== a && (i ? this.updateFreeformTagInRedux(r, i) : e ? this.updateFreeformTagInRedux(r) : (0,
                S.AZ)(a, r, !0))
            }
            ,
            n
        }(r.Component);
        function w() {
            return function(e) {
                return (0,
                l.Zz)((0,
                d._v)(k(), {
                    options: function() {
                        var e = (0,
                        S.F4)(c.x2.history.location).graffitiTagID;
                        return {
                            variables: {
                                id: null != e ? e : ""
                            }
                        }
                    },
                    skip: function() {
                        return !(0,
                        S.F4)(c.x2.history.location).graffitiTagID
                    }
                }), s.y, (0,
                o.Ng)(j, P))((function(n) {
                    return (0,
                    a.jsx)(N, (0,
                    i.__assign)({}, n, {
                        render: function() {
                            return (0,
                            a.jsx)(e, (0,
                            i.__assign)({}, n))
                        }
                    }))
                }
                ))
            }
        }
        function j(e, n) {
            var t = T(n);
            return {
                reduxFreeformTagName: (0,
                f.f8)(e, t),
                reduxTagFilter: (0,
                f.kT)(e, t),
                reduxTagFilters: (0,
                f.bd)(e, t)
            }
        }
        function P(e) {
            return (0,
            l.zH)({
                updateReduxFreeformTagFilter: p.n5,
                updateReduxTagFilter: p.Dl
            }, e)
        }
    },
    809234: function(e, n, t) {
        "use strict";
        t.d(n, {
            AZ: function() {
                return k
            },
            F4: function() {
                return p
            },
            MA: function() {
                return h
            },
            Tx: function() {
                return f
            },
            _f: function() {
                return g
            },
            c4: function() {
                return v
            },
            d0: function() {
                return y
            }
        });
        var i = t(331635)
          , a = t(882439)
          , r = t(960688)
          , o = t(532968)
          , s = t(672052)
          , l = t(511305)
          , c = t(306427)
          , d = "tl"
          , u = ","
          , m = /^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$/;
        function g(e) {
            var n;
            void 0 === e && (e = r.x2.history.location);
            var t = (e.pathname.split("/tags/")[1] || "").split("/")[0];
            if (t)
                return (0,
                l.R)(t);
            var i = (null === (n = a.parse(e.search)[d]) || void 0 === n ? void 0 : n.toString()) || "";
            if (i) {
                var o = i.split(u);
                return (0,
                l.R)(o[0])
            }
        }
        function p(e) {
            void 0 === e && (e = r.x2.history.location);
            var n, t = g(e);
            return t ? (n = t,
            m.test(n) ? {
                graffitiTagID: t
            } : {
                freeformTagName: t
            }) : {}
        }
        function f(e, n) {
            k(e.id, n)
        }
        function h(e, n) {
            var t = g();
            k(e === t ? void 0 : t, n)
        }
        function v(e, n) {
            k(n, e, !1)
        }
        function k(e, n, t) {
            void 0 === t && (t = !1);
            var a = y(n, e);
            r.x2.history[t ? "replace" : "push"]((0,
            i.__assign)((0,
            i.__assign)({}, a), {
                state: (0,
                i.__assign)({}, r.x2.history.location.state)
            }))
        }
        function y(e, n) {
            var t = n ? encodeURIComponent(n) : void 0
              , i = t ? "/tags/".concat(t) : ""
              , a = e.type;
            switch (a) {
            case c.$$.GameDirectory:
                return {
                    pathname: (0,
                    s.nT)(e.categoryName),
                    search: t ? "?".concat(d, "=").concat(t) : void 0
                };
            case c.$$.BrowseCategories:
                return {
                    pathname: "/directory".concat(i)
                };
            case c.$$.BrowseLiveChannels:
                return {
                    pathname: "/directory/all".concat(i)
                };
            default:
                (0,
                o.x)(a)
            }
        }
    },
    585078: function(e, n, t) {
        "use strict";
        t.d(n, {
            L: function() {
                return i
            },
            _: function() {
                return a
            }
        });
        var i = 5
          , a = "sol_sticker_ids"
    },
    368538: function(e, n, t) {
        "use strict";
        t.d(n, {
            I: function() {
                return r
            }
        });
        var i = t(638422)
          , a = {}
          , r = function(e) {
            var n = document.querySelector('[data-tag-filter="'.concat(e, '"]'));
            if (n) {
                var t = a[e];
                t && clearTimeout(t),
                n.classList.contains(i._y.NoBounce) && (n.classList.remove(i._y.NoBounce),
                n.classList.add(i._y.Bounce));
                var r = setTimeout((function() {
                    n.classList.remove(i._y.Bounce),
                    n.classList.add(i._y.NoBounce),
                    delete a[e]
                }
                ), 750);
                a[e] = r
            }
        }
    },
    42419: function(e, n, t) {
        "use strict";
        t.d(n, {
            Cl: function() {
                return l
            },
            Jf: function() {
                return a
            },
            S0: function() {
                return c
            },
            oe: function() {
                return r
            },
            t: function() {
                return s
            },
            uf: function() {
                return i
            }
        });
        var i, a, r, o = t(960688);
        function s(e) {
            var n = {
                section: e.section,
                tag_position: e.tagPosition,
                item_page: e.item_page || "browse",
                search_event: e.searchEvent,
                tag_id: e.tagId,
                freeform_tag_filter: e.freeformTagFilter,
                dismiss: e.dismiss,
                suggested: e.suggested || !1,
                focus: e.focus || !1,
                filter_ui_type: e.filterUIType
            };
            o.E5.track("browse_filter", n)
        }
        function l(e) {
            var n = {
                item_action: e.itemAction,
                item_name: e.itemName,
                item_value: e.itemValue,
                suggested: e.suggested || !1
            };
            o.E5.__track_DeadEvent("filter_click", n)
        }
        function c(e) {
            var n = e.itemPage
              , t = e.section
              , i = e.selectedFreeformTagName;
            i && s({
                section: t,
                tagPosition: 0,
                searchEvent: !0,
                item_page: n,
                freeformTagFilter: i,
                dismiss: !0
            })
        }
        !function(e) {
            e.Categories = "browse_categories",
            e.LiveChannels = "browse_livechannels",
            e.IncategoryChannels = "browse_incategory_channels"
        }(i || (i = {})),
        function(e) {
            e.Deselect = "deselect",
            e.Select = "select"
        }(a || (a = {})),
        function(e) {
            e.SearchTags = "search_tags"
        }(r || (r = {}))
    },
    363574: function(e, n, t) {
        "use strict";
        t.d(n, {
            B3: function() {
                return s
            },
            B4: function() {
                return c
            },
            S1: function() {
                return l
            }
        });
        var i = t(331635)
          , a = t(960688)
          , r = t(179615)
          , o = function() {
            var e = a.E5.getLastPageview();
            return e && e.location || ""
        }
          , s = function(e) {
            a.E5.trackItemSectionClick({
                carousel_content: "video",
                channel_id: e.broadcasterID || "0",
                channel: e.channelLogin || "unknown",
                content: "preview_card_game_name",
                item_index: e.contentIndex,
                medium: e.pageviewMedium,
                item_id: e.videoID,
                item_type: r.E.Video,
                item_viewcount: null,
                location: o()
            })
        }
          , l = function(e) {
            a.E5.trackItemSectionClick({
                carousel_content: "preview_card_game_balloon_game",
                channel_id: e.broadcasterID || "0",
                channel: e.channelLogin || "unknown",
                content: "preview_card_game_balloon_game",
                item_index: e.contentIndex,
                medium: e.pageviewMedium,
                item_id: e.videoID,
                item_type: r.E.Video,
                item_viewcount: null,
                location: o()
            })
        }
          , c = function(e) {
            return (0,
            i.__awaiter)(void 0, void 0, void 0, (function() {
                var n, t;
                return (0,
                i.__generator)(this, (function(i) {
                    try {
                        n = e.map((function() {
                            return r.E.Game
                        }
                        )),
                        t = e.map((function() {
                            return null
                        }
                        )),
                        a.E5.trackItemSectionLoad({
                            carousel_content: "preview_card_game_balloon_game",
                            rendered_item_count: e.length,
                            rendered_item_list: e,
                            rendered_item_types: n,
                            rendered_items_viewcounts: t,
                            location: o()
                        })
                    } catch (e) {}
                    return [2]
                }
                ))
            }
            ))
        }
    },
    50355: function(e, n, t) {
        "use strict";
        t.d(n, {
            H: function() {
                return g
            }
        });
        var i, a = t(474848), r = t(959340), o = t(914421), s = t(305528), l = t(97774), c = t(360432), d = t(235233), u = t(290033), m = t(312663);
        t(296540);
        !function(e) {
            e.BoxArt = "video-preview-card-placeholder__box-art",
            e.Avatar = "video-preview-card-placeholder__avatar"
        }(i || (i = {}));
        var g = function(e) {
            var n = null;
            return n = e.isBoxArt ? (0,
            a.jsx)(r.P, {
                display: o.nl.InlineBlock,
                margin: {
                    top: 1,
                    right: 1,
                    bottom: .5
                },
                "data-test-selector": i.BoxArt,
                children: (0,
                a.jsx)(s.Or, {
                    height: 56,
                    width: 40
                })
            }) : (0,
            a.jsx)(r.P, {
                display: o.nl.InlineBlock,
                borderRadius: l.Z.Rounded,
                overflow: o.nE.Hidden,
                margin: {
                    top: 1,
                    right: 1,
                    bottom: .5
                },
                className: "video-preview-card-placeholder__avatar-circle",
                "data-test-selector": i.Avatar,
                children: (0,
                a.jsx)(s.Or, {
                    height: 40,
                    width: 40
                })
            }),
            (0,
            a.jsxs)(c.Z, {
                children: [(0,
                a.jsx)(d.j$, {
                    ratio: d.gl.Aspect16x9,
                    children: (0,
                    a.jsx)(s.Or, {})
                }), (0,
                a.jsx)(u.b, {
                    children: (0,
                    a.jsxs)(r.P, {
                        display: o.nl.Flex,
                        margin: {
                            bottom: 2
                        },
                        children: [n, (0,
                        a.jsxs)(r.P, {
                            display: o.nl.InlineBlock,
                            margin: {
                                top: 1
                            },
                            children: [(0,
                            a.jsx)(m.N, {
                                children: (0,
                                a.jsx)(s.Or, {
                                    width: 150
                                })
                            }), (0,
                            a.jsx)(m.N, {
                                fontSize: o.Z4.Size7,
                                children: (0,
                                a.jsx)(s.Or, {
                                    width: 100
                                })
                            }), (0,
                            a.jsx)(m.N, {
                                fontSize: o.Z4.Size7,
                                children: (0,
                                a.jsx)(s.Or, {
                                    width: 100
                                })
                            })]
                        })]
                    })
                })]
            })
        }
    },
    744515: function(e, n, t) {
        "use strict";
        t.d(n, {
            l: function() {
                return S
            }
        });
        var i, a = t(331635), r = t(474848), o = t(79004), s = t(912800), l = t(902418), c = t(235233), d = t(959340), u = t(296540), m = t(407827), g = t(995896), p = t(964440), f = t(309667), h = t(957139), v = t(32608), k = t(533100), y = m.x.wrap((function() {
            return t.e(25549).then(t.bind(t, 375439))
        }
        ), "RecFeedbackButton", {
            placeholder: (0,
            r.jsx)(o.a2, (0,
            a.__assign)({}, {
                "aria-label": (0,
                k.M)(),
                icon: s.t.More,
                size: l.f.Small,
                disabled: !0
            }))
        }), x = m.x.wrap((function() {
            return t.e(78025).then(t.bind(t, 705647))
        }
        ), "HiddenContentNotice", {
            placeholder: null
        }), b = m.x.wrap((function() {
            return t.e(87391).then(t.bind(t, 186299))
        }
        ), "ReportContentNotice", {
            placeholder: null
        });
        !function(e) {
            e.Visible = "visible",
            e.NotInterested = "not-interested",
            e.Reported = "reported"
        }(i || (i = {}));
        var S = function(e) {
            function n() {
                var n, t, o = e.apply(this, arguments) || this;
                return o.state = {
                    contentStatus: i.Visible,
                    addFeedbackPromise: null
                },
                o.itemID = "Stream" === o.props.node.__typename ? o.props.node.broadcaster && o.props.node.broadcaster.id : o.props.node.id,
                o.itemName = "Stream" === o.props.node.__typename ? null !== (t = null === (n = o.props.node.broadcaster) || void 0 === n ? void 0 : n.displayName) && void 0 !== t ? t : null : o.props.node.displayName,
                o.renderCard = function() {
                    var e, n = o.props.node;
                    if ("Game" === n.__typename) {
                        var t = o.props.cardProps;
                        return (0,
                        r.jsx)(p.Xl, (0,
                        a.__assign)({}, t, {
                            "data-a-target": "card-".concat(o.props.index),
                            "data-a-id": "card-".concat(n.name.replace(/ /g, "")),
                            tagListProps: t.tagListProps,
                            contextualCardActionProps: o.getFeedbackProps({
                                vodID: null,
                                categoryID: n && n.id,
                                categoryName: n && n.displayName,
                                channelID: null,
                                channelName: null,
                                feedbackReason: (0,
                                f.JY)(),
                                hideContent: o.hideContent
                            })
                        }))
                    }
                    if ("Stream" === n.__typename) {
                        t = (0,
                        a.__assign)((0,
                        a.__assign)({}, o.props.cardProps), {
                            watchparty: (0,
                            h.yo)(null === (e = n.game) || void 0 === e ? void 0 : e.id)
                        });
                        return (0,
                        r.jsx)(g.N, (0,
                        a.__assign)({}, t, {
                            "data-a-target": "card-".concat(o.props.index),
                            "data-a-id": "card-".concat((n && n.broadcaster && n.broadcaster.login || "").replace(/ /g, "")),
                            contextualCardActionProps: o.getFeedbackProps({
                                channelID: n.broadcaster && n.broadcaster.id,
                                channelName: n.broadcaster && n.broadcaster.displayName,
                                categoryID: n.game && n.game.id,
                                categoryName: n.game && n.game.displayName,
                                feedbackReason: (0,
                                f._C)(),
                                hideContent: o.hideContent,
                                onReportModalClose: o.onReportUserModalClose
                            })
                        }))
                    }
                }
                ,
                o.hideContent = function(e) {
                    o.setState({
                        contentStatus: i.NotInterested,
                        addFeedbackPromise: e
                    })
                }
                ,
                o.onReportUserModalClose = function(e, n) {
                    n && o.setState({
                        contentStatus: i.Reported
                    })
                }
                ,
                o.getFeedbackProps = function(e) {
                    var n = e.channelID
                      , t = e.categoryID
                      , i = e.categoryName
                      , a = e.channelName
                      , r = e.feedbackReason
                      , s = e.hideContent
                      , l = e.onReportModalClose;
                    if (!o.props.hideRecFeedback && s)
                        return {
                            component: y,
                            props: {
                                channelID: n,
                                categoryID: t,
                                categoryName: i,
                                channelName: a,
                                feedbackReason: r,
                                hideContent: s,
                                onReportModalClose: l,
                                trackRecFeedbackAdd: o.trackRecFeedbackAdd,
                                sourceItemTrackingID: o.props.itemTrackingID,
                                isShelf: !1
                            }
                        }
                }
                ,
                o.trackRecFeedbackAdd = function() {
                    o.itemID && o.props.trackRecFeedbackAdd(o.itemID, o.itemName)
                }
                ,
                o.showContent = function() {
                    o.setState({
                        contentStatus: i.Visible,
                        addFeedbackPromise: null
                    }),
                    o.itemID && o.props.trackRecFeedbackUndo(o.itemID)
                }
                ,
                o
            }
            return (0,
            a.__extends)(n, e),
            n.prototype.render = function() {
                if (this.state.contentStatus === i.NotInterested) {
                    var e = (0,
                    v.s4)(this.props.node)
                      , n = e.aspectRatio
                      , t = e.contentType
                      , a = e.size;
                    return (0,
                    r.jsx)(c.j$, {
                        ratio: n,
                        children: (0,
                        r.jsx)(x, {
                            contentType: t,
                            undoSuccessHandler: this.showContent,
                            addFeedbackPromise: this.state.addFeedbackPromise,
                            size: a,
                            shouldRemoveContent: !1,
                            sourceItemTrackingID: this.props.itemTrackingID
                        })
                    })
                }
                if (this.state.contentStatus === i.Reported) {
                    n = (0,
                    v.s4)(this.props.node).aspectRatio;
                    return (0,
                    r.jsx)(c.j$, {
                        ratio: n,
                        children: (0,
                        r.jsx)(b, {})
                    })
                }
                return (0,
                r.jsx)(d.P, {
                    children: this.renderCard()
                }, this.props.node.id)
            }
            ,
            n
        }(u.Component)
    },
    118399: function(e, n, t) {
        "use strict";
        t.d(n, {
            X: function() {
                return i
            }
        });
        var i = "JIRA-VXP-2397"
    },
    683969: function(e, n, t) {
        "use strict";
        t.d(n, {
            e: function() {
                return a
            }
        });
        var i = t(960688);
        function a(e) {
            return void 0 === e && (e = i.x2.history.location.pathname),
            e.startsWith("/directory/all")
        }
    },
    483258: function(e, n, t) {
        "use strict";
        t.d(n, {
            PK: function() {
                return s
            },
            hk: function() {
                return o
            },
            nE: function() {
                return r
            }
        });
        var i = t(807975)
          , a = t(306427)
          , r = function(e) {
            switch (e) {
            case i.VG.BrowseCategories:
                return i.RY.BrowseCategories;
            case i.VG.BrowseInCategoryChannels:
                return i.RY.BrowseInCategoryChannels;
            case i.VG.BrowseLiveChannels:
                return i.RY.BrowseLiveChannels;
            default:
                return null
            }
        }
          , o = function(e) {
            switch (e) {
            case i.RY.BrowseLiveChannels:
            case i.RY.BrowseInCategoryChannels:
                return i.LG.AllLiveChannels;
            case i.RY.BrowseCategories:
                return i.LG.Categories;
            default:
                return
            }
        }
          , s = function(e, n) {
            return e === i.VG.BrowseInCategoryChannels && n ? a._h.gameDirectoryTagPage(n) : a._h.browseLiveChannels
        }
    },
    553758: function(e, n, t) {
        "use strict";
        t.d(n, {
            I: function() {
                return d
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = (t(296540),
        t(415044))
          , o = t(974365)
          , s = t(959654)
          , l = t(735394)
          , c = t(483258)
          , d = function(e, n, t) {
            return function(d) {
                return function(u) {
                    var m = function(e, n, t, i) {
                        var a, d = (0,
                        c.PK)(i, null === (a = e.cardProps.trackingProps) || void 0 === a ? void 0 : a.category), u = (0,
                        r.d4)((function(e) {
                            return (0,
                            l.bd)(e, d).map((function(e) {
                                return e.id
                            }
                            ))
                        }
                        )), m = (0,
                        r.d4)((function(e) {
                            return (0,
                            l.f8)(e, d)
                        }
                        )), g = (0,
                        o.V)(e.cardProps, {
                            page: n,
                            content: t,
                            section: i,
                            tagFilters: u,
                            freeformTagFilter: m
                        }), p = g.itemTrackingID, f = g.elementRef, h = g.cardProps, v = (0,
                        c.nE)(i), k = (0,
                        c.hk)(v);
                        return {
                            elementRef: f,
                            cardProps: h,
                            feedbackProps: (0,
                            s.s)(p, n, t, v, k)
                        }
                    }(u, e, n, t)
                      , g = m.elementRef
                      , p = m.cardProps
                      , f = m.feedbackProps
                      , h = (0,
                    i.__assign)((0,
                    i.__assign)((0,
                    i.__assign)({}, u), f), {
                        cardProps: (0,
                        i.__assign)((0,
                        i.__assign)({}, u.cardProps), p)
                    });
                    return (0,
                    a.jsx)("div", {
                        ref: g,
                        children: (0,
                        a.jsx)(d, (0,
                        i.__assign)({}, h))
                    })
                }
            }
        }
    },
    335923: function(e, n, t) {
        "use strict";
        t.d(n, {
            M: function() {
                return i
            }
        });
        var i = ["music", "valorant", "league-of-legends", t(960688).Zn.get("dj_category", "djs")]
    },
    96172: function(e, n, t) {
        "use strict";
        t.d(n, {
            Dl: function() {
                return o
            },
            Sr: function() {
                return i
            },
            l0: function() {
                return a
            },
            n5: function() {
                return r
            }
        });
        var i = "directory.FREEFORM_TAG_FILTER_CHANGED"
          , a = "directory.TAG_FILTER_CHANGED";
        function r(e, n) {
            return {
                type: i,
                page: e,
                freeformTagName: n
            }
        }
        function o(e, n) {
            return {
                type: a,
                page: e,
                tagFilter: n
            }
        }
    },
    980847: function(e, n, t) {
        "use strict";
        t.d(n, {
            i: function() {
                return m
            }
        });
        var i = t(511305)
          , a = t(267924)
          , r = t(789184)
          , o = t(139575)
          , s = t(183948)
          , l = t(118399)
          , c = t(882439)
          , d = {
            drops: a.AOe.DROPS_ENABLED
        };
        function u(e) {
            var n = c.parse(e.location.search).filter;
            if ("string" == typeof n) {
                var t = d[n.toLowerCase()];
                return void 0 !== t ? [t] : []
            }
            return []
        }
        function m(e, n) {
            var t = g(e)
              , i = e.tagFilters.map((function(e) {
                return e.id
            }
            ));
            return {
                slug: t,
                options: {
                    includeRestricted: e.isLoggedIn ? [a.LVt.SUB_ONLY_LIVE] : void 0,
                    sort: (0,
                    o.F6)(o.kl.GameChannelPage, e, g(e), n),
                    recommendationsContext: {
                        platform: "web"
                    },
                    requestID: l.X,
                    freeformTags: e.freeformTagFilter ? [e.freeformTagFilter] : null,
                    tags: i,
                    broadcasterLanguages: e.languagePreferences.map((function(e) {
                        return (0,
                        r.Mh)(e)
                    }
                    )),
                    systemFilters: u(e)
                },
                sortTypeIsRecency: (0,
                o.F6)(o.kl.GameChannelPage, e, g(e), n) === a.DHC.RECENT,
                limit: 30,
                includeIsDJ: (0,
                s.R)()
            }
        }
        function g(e) {
            return (0,
            i.R)(e.match.params.categorySlug)
        }
    },
    419052: function(e, n, t) {
        "use strict";
        t.d(n, {
            ND: function() {
                return f
            },
            RH: function() {
                return g
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(959340)
          , o = t(833592)
          , s = t(296540)
          , l = t(536315)
          , c = t(876275)
          , d = t(485272)
          , u = t(82984)
          , m = "directory-container"
          , g = "directory-first-item"
          , p = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.updateDisplayAdOrder = function() {
                    var e = document.querySelector('[data-target="'.concat(m, '"]'))
                      , t = document.querySelector('[data-target="'.concat(g, '"]'))
                      , i = document.querySelector("#".concat(d.iN.directory.rectangle));
                    if (t && e && i) {
                        var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                        if (i.style.order !== a && "0" !== a && (i.style.order = a),
                        n.props.updateItemDisplayData) {
                            var r = t.getBoundingClientRect().width
                              , o = -1;
                            "none" !== i.style.display && i.style.order && (o = parseInt(i.style.order, 10)),
                            n.props.updateItemDisplayData(r, o)
                        }
                    }
                }
                ,
                n
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                window.addEventListener("resize", this.updateDisplayAdOrder),
                this.onRender(),
                this.updateDisplayAdOrder()
            }
            ,
            n.prototype.componentWillUnmount = function() {
                window.removeEventListener("resize", this.updateDisplayAdOrder)
            }
            ,
            n.prototype.componentDidUpdate = function(e) {
                this.onRender(),
                e.sideNavExpanded !== this.props.sideNavExpanded && this.updateDisplayAdOrder()
            }
            ,
            n.prototype.render = function() {
                var e = this.props
                  , n = e.directoryName
                  , t = e.tagFilters
                  , i = e.freeformTagFilter;
                return (0,
                a.jsxs)(r.P, {
                    flexShrink: 0,
                    "data-target": m,
                    "data-test-selector": "direectory-grid-grid-layout",
                    children: [(0,
                    a.jsxs)(o.o8, {
                        gutterSize: o.J0.ExtraSmall,
                        childWidth: o.k7.Large,
                        placeholderItems: 20,
                        children: [(0,
                        a.jsx)(c.uS, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: d._i.directory,
                            slotID: d.iN.directory.rectangle,
                            adSize: d.ot.directory.rectangle,
                            "data-a-target": "directory-card-ad-slot",
                            targeting: {
                                pagetype: d.cL.games,
                                game: n,
                                tag: (0,
                                d.Hb)(t, i)
                            },
                            autoEnable: !1
                        }, -1), this.props.children]
                    }), (0,
                    a.jsx)(l.iG, {
                        contentLength: this.props.contentLength,
                        enabled: this.props.canLoadMore,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 500
                    })]
                })
            }
            ,
            n.prototype.onRender = function() {
                var e = s.Children.count(this.props.children);
                this.props.latencyTracking.reportInteractive(e > 12 ? 12 : e)
            }
            ,
            n
        }(s.Component)
          , f = (0,
        u.W)("DirectoryGrid")(p)
    },
    420498: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            DirectoryGamePage: function() {
                return Ne
            },
            DirectoryRootPage: function() {
                return vn
            }
        });
        var i = t(735394)
          , a = t(415044)
          , r = t(511305)
          , o = t(131883)
          , s = t(686143)
          , l = t(306427)
          , c = t(331635)
          , d = t(474848)
          , u = t(959340)
          , m = t(914421)
          , g = t(833592)
          , p = t(36935)
          , f = t(588702)
          , h = t(296540)
          , v = t(868238)
          , k = t(960688)
          , y = t(191132)
          , x = t(542072)
          , b = t(86043)
          , S = t(959385)
          , _ = t(928778)
          , T = t(503472)
          , C = t(382950)
          , N = t(10653)
          , w = t(183094)
          , j = t(267924)
          , P = t(99137)
          , F = t(401077)
          , D = t(305528)
          , I = t(838346)
          , L = t(664068)
          , A = t(156719)
          , R = t(139575)
          , E = t(608063)
          , V = t(217600)
          , B = t(578426)
          , G = t(357397)
          , M = t(42419)
          , z = t(669693)
          , O = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.renderFiltersAndSortOptions = function() {
                    var e = n.props
                      , t = e.directoryID
                      , i = e.selectedContentType
                      , a = e.directoryTagFilters
                      , r = e.freeformTagFilter
                      , o = e.directoryName;
                    if (i !== z.c.Live)
                        return null;
                    var s = t ? (0,
                    d.jsx)(G.$, {
                        categoryName: o,
                        onAddTagFilter: n.props.onAddTagFilter,
                        onAddFreeformTagFilter: n.props.onAddFreeformTagFilter,
                        selectedTags: a,
                        selectedFreeformTagName: r,
                        tagSearchType: B.E5.FreeformTagCategoryPage,
                        targetPage: l._h.gameDirectoryTagPage(o),
                        section: M.uf.IncategoryChannels
                    }) : (0,
                    d.jsx)(u.P, {
                        padding: {
                            left: 1
                        },
                        children: (0,
                        d.jsx)(D.Or, {
                            lineCount: 1,
                            width: 70
                        })
                    });
                    return (0,
                    d.jsx)(u.P, {
                        fullWidth: !0,
                        children: (0,
                        d.jsxs)(u.P, {
                            display: m.nl.Flex,
                            justifyContent: m.A9.Between,
                            alignItems: m.k2.Center,
                            children: [(0,
                            d.jsxs)(u.P, {
                                display: m.nl.Flex,
                                alignSelf: m.gB.Center,
                                alignItems: "center",
                                height: "4rem",
                                flexGrow: 1,
                                children: [(0,
                                d.jsx)(u.P, {
                                    padding: {
                                        right: 1
                                    },
                                    children: (0,
                                    d.jsx)(E.m, {})
                                }), s]
                            }), (0,
                            d.jsxs)(u.P, {
                                display: m.nl.Flex,
                                flexShrink: 0,
                                children: [(0,
                                d.jsx)(L.r, {
                                    type: L.t.SortBy
                                }), (0,
                                d.jsx)(u.P, {
                                    margin: {
                                        left: .5
                                    },
                                    alignSelf: m.gB.Center,
                                    children: (0,
                                    d.jsx)(A.I, {
                                        type: R.kl.GameChannelPage,
                                        gameName: o,
                                        tagFilters: a
                                    })
                                })]
                            })]
                        })
                    })
                }
                ,
                n
            }
            return (0,
            c.__extends)(n, e),
            n.prototype.render = function() {
                return (0,
                d.jsx)(V.u, {
                    section: "page",
                    id: "browse-root-filter-sort-options",
                    icon: I.u,
                    label: (0,
                    k.hw)("Filter & Sort Options", "SkipToTargetDirectoryGamePage"),
                    children: (0,
                    d.jsx)(u.P, {
                        className: "directory-header__filters",
                        display: m.nl.Flex,
                        flexWrap: m.I4.Wrap,
                        children: this.renderFiltersAndSortOptions()
                    })
                })
            }
            ,
            n
        }(h.Component);
        var U = (0,
        a.Ng)((function(e, n) {
            var t = n.directoryName
              , a = l._h.gameDirectoryTagPage(t);
            return {
                directoryTagFilters: (0,
                i.bd)(e, a),
                freeformTagFilter: (0,
                i.f8)(e, a),
                isLoggedIn: (0,
                o.M3)(e)
            }
        }
        ))(O)
          , H = t(339630)
          , W = t(477117)
          , $ = t(525594)
          , q = t(807975)
          , Z = t(929477)
          , J = t(942086)
          , Q = t(746761)
          , X = t(505173)
          , K = t(809234)
          , Y = t(585078)
          , ee = t(50355)
          , ne = t(744515)
          , te = t(118399)
          , ie = t(553758)
          , ae = t(419052);
        var re = (0,
        a.Ng)((function(e, n) {
            var t = (0,
            r.R)(n.directoryName);
            return {
                sideNavExpanded: e.ui.sideNavExpanded,
                tagFilters: (0,
                i.bd)(e, l._h.gameDirectoryTagPage(t)),
                freeformTagFilter: (0,
                i.f8)(e, l._h.gameDirectoryTagPage(t))
            }
        }
        ))(ae.ND)
          , oe = t(71078)
          , se = t(175033)
          , le = t(356300)
          , ce = t(267588)
          , de = t(478352)
          , ue = t(469396)
          , me = t(767642)
          , ge = t.n(me);
        var pe, fe = t(980847), he = 0;
        !function(e) {
            e.PreviewCard = "directory-game-page__preview-card"
        }(pe || (pe = {}));
        var ve = (0,
        ie.I)("twitch_game_directory", q.XC.Live, q.VG.BrowseInCategoryChannels)(ne.l);
        function ke(e) {
            return (0,
            r.R)(e.match.params.categorySlug)
        }
        var ye = !0
          , xe = (0,
        y.U)({
            name: "DirectoryGamePage",
            category: P.u.Discover
        })
          , be = xe.Available
          , Se = xe.Unavailable
          , _e = function(e) {
            function n(n) {
                var t = e.call(this, n) || this;
                return t.addTagFilter = function(e) {
                    (0,
                    K.Tx)(e, t.getTagTargetPage())
                }
                ,
                t.addFreeformTagFilter = function(e) {
                    (0,
                    K.c4)(t.getTagTargetPage(), e)
                }
                ,
                t.getTagTargetPage = function() {
                    var e = ke(t.props);
                    return l._h.gameDirectoryTagPage(e)
                }
                ,
                t.onResize = function(e) {
                    e !== t.state.directoryWidth && (clearTimeout(he),
                    he = setTimeout((function() {
                        t.setState({
                            directoryWidth: e
                        })
                    }
                    ), 50))
                }
                ,
                t.renderPlaceholders = function() {
                    for (var e = [], n = 0; n < 20; n++)
                        e.push((0,
                        d.jsx)(ee.H, {}, n));
                    return e
                }
                ,
                t.removeLastTag = function() {
                    var e = t.props.tagFilters[t.props.tagFilters.length - 1];
                    (0,
                    K.MA)(e.id, t.getTagTargetPage())
                }
                ,
                t.canLoadMoreGames = function() {
                    var e = t.props.data.game;
                    return !(t.props.data.loading || !e || "" === e.id || !e.streams || !e.streams.pageInfo || !e.streams.pageInfo.hasNextPage)
                }
                ,
                t.loadMore = function() {
                    return t.props.data.fetchMore({
                        query: ge(),
                        variables: (0,
                        c.__assign)((0,
                        c.__assign)({}, t.props.data.variables), {
                            cursor: (0,
                            ue.dQ)(t.props.data)
                        }),
                        updateQuery: function(e, n) {
                            var t = n.fetchMoreResult;
                            return t ? {
                                game: (0,
                                c.__assign)((0,
                                c.__assign)({}, t.game), {
                                    streams: (0,
                                    c.__assign)((0,
                                    c.__assign)({}, t.game && t.game.streams), {
                                        edges: (0,
                                        T.U5)((0,
                                        ue.Qp)(e), (0,
                                        ue.Qp)(t))
                                    })
                                })
                            } : e
                        }
                    })
                }
                ,
                t.updateItemDisplayData = function(e, n) {
                    var i = parseFloat(e.toFixed(2));
                    i === t.state.itemWidth && n === t.state.adSlotIndex || t.setState({
                        itemWidth: i,
                        adSlotIndex: n
                    })
                }
                ,
                t.state = {
                    adSlotIndex: -1,
                    directoryWidth: -1,
                    itemWidth: -1
                },
                t
            }
            return (0,
            c.__extends)(n, e),
            n.prototype.componentDidMount = function() {
                var e = this;
                if (ye && (0,
                w._M)(ke(this.props)),
                ye = !1,
                "POP" === this.props.history.action) {
                    var n = ke(this.props)
                      , t = (0,
                    w.x3)(n);
                    0 !== t && ((0,
                    N.y)(n, !0),
                    this.props.yScrollTo(t),
                    setTimeout((function() {
                        e.props.yScrollTo(t)
                    }
                    ), 0))
                }
                this.onRender()
            }
            ,
            n.prototype.componentDidUpdate = function(e) {
                var n, t, i, a, r, o, s, l;
                this.onRender(),
                (null === (i = null === (t = null === (n = e.data.game) || void 0 === n ? void 0 : n.streams) || void 0 === t ? void 0 : t.banners) || void 0 === i ? void 0 : i[0]) !== (null === (o = null === (r = null === (a = this.props.data.game) || void 0 === a ? void 0 : a.streams) || void 0 === r ? void 0 : r.banners) || void 0 === o ? void 0 : o[0]) && this.props.updateBanner(null === (l = null === (s = this.props.data.game) || void 0 === s ? void 0 : s.streams) || void 0 === l ? void 0 : l.banners),
                e.data.loading === this.props.data.loading || this.props.data.loading || this.props.data.game || (0,
                se.o)(ke(this.props))
            }
            ,
            n.prototype.componentWillUnmount = function() {
                if ((0,
                ue.Qp)(this.props.data).length > 60) {
                    var e = this.props.getScrollContent();
                    if (!e)
                        return;
                    var n = ke(this.props);
                    (0,
                    w.hP)(n, e.scrollTop),
                    (0,
                    N.y)(n, !1)
                }
            }
            ,
            n.prototype.render = function() {
                var e = this
                  , n = null;
                if (this.props.data.loading || this.props.data.game || (n = (0,
                d.jsx)(x.A, {
                    message: (0,
                    oe.d)()
                })),
                n)
                    return (0,
                    d.jsx)(Se, {
                        reason: "Error loading data",
                        children: (0,
                        d.jsx)(u.P, {
                            padding: 3,
                            children: n
                        })
                    });
                var t = this.props.data.game
                  , i = t ? t.id : ""
                  , a = ke(this.props)
                  , r = (0,
                R.F6)(R.kl.GameChannelPage, this.props, a)
                  , o = null;
                !!this.props.freeformTagFilter || this.props.languagePreferences.length > 0 || (o = (0,
                d.jsx)(H.o, {
                    languageCode: this.props.languageCode,
                    isLoggedIn: this.props.isLoggedIn,
                    sortOption: r,
                    internationalSectionProps: {
                        directoryName: a,
                        addTagFilter: this.addTagFilter,
                        addFreeformTagFilter: this.addFreeformTagFilter,
                        directoryWidth: this.state.directoryWidth,
                        scrollToTop: this.props.scrollToTop,
                        tagFilters: this.props.tagFilters,
                        freeformTagFilter: this.props.freeformTagFilter,
                        sort: r
                    }
                }));
                var s = (0,
                ue.Qp)(this.props.data).filter((function(e) {
                    var n = e.node;
                    return n && n.broadcaster && n.broadcaster.login && n.broadcaster.id
                }
                ))
                  , l = (0,
                ue.iF)(s)
                  , p = s.map((function(n, t) {
                    var i, r, o, s, l, g, p, f = (0,
                    le.W)(n), h = n.node;
                    if (!f || !h || !h.broadcaster)
                        return null;
                    var v = (0,
                    ce.e)({
                        directoryName: a,
                        shouldShowGame: !1,
                        streamIndex: t,
                        streamNode: f,
                        tagListProps: (0,
                        de.m)({
                            freeformTags: null === (i = null == n ? void 0 : n.node) || void 0 === i ? void 0 : i.freeformTags,
                            onClickFreeformTag: e.addFreeformTagFilter,
                            onClickTag: e.addTagFilter,
                            tagFilters: e.props.tagFilters,
                            freeformTagFilter: e.props.freeformTagFilter,
                            section: M.uf.IncategoryChannels,
                            scrollToTop: e.props.scrollToTop,
                            shuffleTags: (null !== (s = null === (o = null === (r = null == n ? void 0 : n.node) || void 0 === r ? void 0 : r.freeformTags) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) > 0,
                            priorityTagTerm: e.props.freeformTagFilter
                        }),
                        history: e.props.history
                    })
                      , k = (0,
                    R.F6)(R.kl.GameChannelPage, e.props, a)
                      , y = (0,
                    F.t)(e.props.tagFilters, e.props.data.loading, k)
                      , x = -1;
                    0 === t ? x = 0 : -1 !== e.state.itemWidth && (x = function(e, n, t, i) {
                        var a = e;
                        if (0 === e)
                            return 0;
                        -1 !== n && a >= n && (a += 1);
                        var r = Math.floor(i / t);
                        return Math.floor(a / r)
                    }(t, e.state.adSlotIndex, e.state.itemWidth, e.state.directoryWidth + 10));
                    var b = (0,
                    c.__assign)((0,
                    c.__assign)({}, v), {
                        trackingProps: {
                            category: null === (l = h.game) || void 0 === l ? void 0 : l.name,
                            itemPosition: t,
                            isPromotion: !1,
                            rowPosition: x,
                            modelTrackingID: n.trackingID,
                            channelID: null === (g = h.broadcaster) || void 0 === g ? void 0 : g.id,
                            gameID: null === (p = h.game) || void 0 === p ? void 0 : p.id,
                            sortType: k
                        },
                        primaryColorHex: h.broadcaster && h.broadcaster.primaryColorHex
                    });
                    return (0,
                    d.jsx)("div", {
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        },
                        children: (0,
                        d.jsx)(u.P, {
                            position: m.yX.Relative,
                            margin: {
                                bottom: 2
                            },
                            children: (0,
                            d.jsx)(ve, {
                                index: t,
                                "data-test-selector": pe.PreviewCard,
                                hideRecFeedback: !e.props.isLoggedIn || k !== j.DHC.RELEVANCE,
                                node: h,
                                cardProps: b,
                                impressionKey: y,
                                requestID: te.X
                            })
                        })
                    }, h.id)
                }
                ))
                  , f = null;
                if (t)
                    p.length > 0 && (f = (0,
                    d.jsx)(re, {
                        contentLength: p.length,
                        directoryName: t ? t.displayName : "",
                        canLoadMore: this.canLoadMoreGames(),
                        loadMore: this.loadMore,
                        updateItemDisplayData: this.updateItemDisplayData,
                        children: p
                    }));
                else {
                    var h = this.renderPlaceholders();
                    f = (0,
                    d.jsx)(u.P, {
                        flexShrink: 0,
                        children: (0,
                        d.jsx)(g.o8, {
                            gutterSize: g.J0.ExtraSmall,
                            childWidth: g.k7.Large,
                            placeholderItems: 20,
                            children: h
                        })
                    })
                }
                return (0,
                d.jsx)(be, {
                    children: (0,
                    d.jsxs)(u.P, {
                        children: [(0,
                        d.jsx)(J.$0, {
                            eventName: "channel_switcher_off"
                        }), (0,
                        d.jsx)(U, {
                            directoryName: a,
                            selectedContentType: z.c.Live,
                            directoryID: i,
                            onAddTagFilter: this.addTagFilter,
                            onAddFreeformTagFilter: this.addFreeformTagFilter
                        }), (0,
                        d.jsxs)(u.P, {
                            margin: {
                                bottom: 3
                            },
                            children: [o, (0,
                            d.jsx)(W.R, {
                                channelIDs: l,
                                children: f
                            }), this.renderTagError(s.length), (0,
                            d.jsx)(b.$, {
                                onResize: this.onResize
                            })]
                        })]
                    })
                })
            }
            ,
            n.prototype.renderTagError = function(e) {
                return this.props.tagFilters.length > Y.L ? (0,
                d.jsx)(Q.P, {
                    errorType: Q._.TooManyTags,
                    onClickRemoveLastTag: this.removeLastTag
                }) : 0 === e ? this.props.freeformTagFilter ? (0,
                d.jsx)(Q.P, {
                    errorType: Q._.NoResults,
                    onClickRemoveLastTag: this.removeLastTag,
                    freeformTagFilter: this.props.freeformTagFilter
                }) : (0,
                d.jsx)(p.hE, {
                    type: f.M2.H3,
                    children: (0,
                    k.hw)("No results found", "DirectoryGamePage")
                }) : null
            }
            ,
            n.prototype.onRender = function() {
                var e, n, t;
                this.props.data.loading || (this.props.latencyTracking.reportInteractive(),
                this.props.data.game && k.x2.setPageTitle(this.props.data.game.displayName)),
                null === (t = null === (n = null === (e = this.props.data.game) || void 0 === e ? void 0 : e.streams) || void 0 === n ? void 0 : n.edges) || void 0 === t || t.forEach((function(e) {
                    var n, t, i = null === (t = null === (n = null == e ? void 0 : e.node) || void 0 === n ? void 0 : n.broadcaster) || void 0 === t ? void 0 : t.login;
                    i && k.x2.vat.prefetchToken({
                        type: "live",
                        channel: i
                    })
                }
                ))
            }
            ,
            n
        }(h.Component)
          , Te = (0,
        v.Zz)((0,
        X.fr)(), (0,
        _.VL)(ge(), {
            options: function(e) {
                var n = (0,
                fe.i)(e);
                return {
                    fetchPolicy: (0,
                    C.B)(e, ke(e)),
                    errorPolicy: "no-cache-write",
                    variables: n
                }
            }
        }), (0,
        $.z)("DirectoryGamePage", {
            destination: "directory.game.index",
            location: "directory",
            pageviewProperties: function(e) {
                var n, t, i, a;
                return (0,
                c.__assign)({
                    content_type: "games",
                    game: null !== (t = null === (n = e.data.game) || void 0 === n ? void 0 : n.name) && void 0 !== t ? t : null,
                    category_id: null !== (a = null === (i = e.data.game) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : null
                }, (0,
                Z.Bj)())
            },
            skipPageviewTracking: function(e) {
                return e.data.loading
            }
        }), (0,
        S.UJ)((function(e) {
            return {
                getScrollContent: e.getScrollContent,
                scrollToTop: e.scrollToTop,
                yScrollTo: e.yScrollTo
            }
        }
        )))(_e);
        var Ce, Ne = (0,
        a.Ng)((function(e, n) {
            var t = (0,
            r.R)(n.match.params.categorySlug);
            return {
                freeformTagFilter: (0,
                i.f8)(e, l._h.gameDirectoryTagPage(t)),
                isLoggedIn: (0,
                o.M3)(e),
                languageCode: (0,
                o.Ul)(e),
                languagePreferences: (0,
                s.HU)(e),
                sideNavExpanded: e.ui.sideNavExpanded,
                tagFilters: (0,
                i.bd)(e, l._h.gameDirectoryTagPage(t))
            }
        }
        ))(Te), we = t(1671), je = t(956347), Pe = t(859243), Fe = t(542685), De = t(407827), Ie = t(876275), Le = t(485272), Ae = t(809496), Re = t(144091), Ee = t(246282), Ve = t(214093), Be = t(802572), Ge = t(949227), Me = t(626396), ze = t(335923), Oe = t(215546), Ue = t(463201), He = t(941084), We = t(60762), $e = t(783321), qe = t(762436), Ze = t(575782), Je = t(82546), Qe = t.n(Je);
        !function(e) {
            e.Control = "control",
            e.Active = "active"
        }(Ce || (Ce = {}));
        var Xe, Ke = function() {
            var e, n, t, i = (0,
            qe.r)("dj_banner_dismissed", !1), a = i[0], r = i[1], o = (0,
            Ze.J)({
                isDismissed: a,
                location: "dj_directory"
            }).trackInteraction, s = k.x2.experiments.getAndTrackAssignment("web_disco_dj_eligibility") === Ce.Active, l = (0,
            $e.IT)(Qe(), {
                skip: a || !s
            }), c = l.data, m = l.loading;
            return a || s && (m || (null == c ? void 0 : c.currentUser) && !(null === (e = c.currentUser.djEligibility) || void 0 === e ? void 0 : e.isEligible) || (null === (t = null === (n = null == c ? void 0 : c.currentUser) || void 0 === n ? void 0 : n.roles) || void 0 === t ? void 0 : t.isParticipatingDJ)) ? null : (0,
            d.jsx)(u.P, {
                margin: 1,
                children: (0,
                d.jsx)(Ue.P, {
                    closeButton: {
                        "aria-label": (0,
                        k.hw)("Close", "DJBanner"),
                        onClick: function() {
                            r(!0),
                            o("dismiss")
                        }
                    },
                    orientation: Ue.F.Row,
                    message: (0,
                    d.jsx)(He.k, {
                        pill: {
                            label: (0,
                            k.hw)("NEW", "DJBanner"),
                            type: "new"
                        },
                        title: (0,
                        k.hw)("Join the Twitch DJ Program", "DJBanner"),
                        inline: !0,
                        description: (0,
                        k.hw)("Calling all Twitch DJs! You can safely stream popular music and qualify for promotional opportunities.", "DJBanner")
                    }),
                    actions: (0,
                    d.jsx)(We.p, {
                        primaryButton: {
                            targetBlank: !0,
                            children: (0,
                            k.hw)("Join Program", "DJBanner"),
                            onClick: function() {
                                return o("join_program")
                            },
                            linkTo: {
                                pathname: "/dj-signup"
                            }
                        },
                        secondaryButton: {
                            targetBlank: !0,
                            children: (0,
                            k.hw)("Learn More", "DJBanner"),
                            onClick: function() {
                                return o("learn_more")
                            },
                            linkTo: {
                                pathname: "/dj-program "
                            }
                        }
                    })
                })
            })
        }, Ye = t(572298), en = t(183948), nn = function(e) {
            var n = e.bannerType
              , t = e.categorySlug
              , i = k.Zn.get("dj_category", "djs");
            return t.toLowerCase() === i && (0,
            en.R)() ? (0,
            d.jsx)(Ke, {}) : "music" === t.toLowerCase() ? (0,
            d.jsx)(Ye.r, {
                location: "music_category"
            }) : (0,
            d.jsx)(Oe.o, {
                categorySlug: t,
                bannerType: n
            })
        }, tn = function(e) {
            return "/directory/category/:categorySlug/clips" === e
        }, an = t(214216), rn = t.n(an), on = De.x.wrap((function() {
            return t.e(99915).then(t.bind(t, 203111))
        }
        ), "DirectoryGameClipsPage"), sn = De.x.wrap((function() {
            return t.e(18406).then(t.bind(t, 925283))
        }
        ), "DirectoryGameVideosPage"), ln = De.x.wrap((function() {
            return Promise.resolve().then(t.bind(t, 420498))
        }
        ), "DirectoryGamePage"), cn = De.x.wrap((function() {
            return Promise.all([t.e(84121), t.e(32448)]).then(t.bind(t, 104625))
        }
        ), "DirectoryGameUpcomingPage"), dn = De.x.wrap((function() {
            return Promise.all([t.e(84121), t.e(35857)]).then(t.bind(t, 127448))
        }
        ), "SwitcherBrowseDirectoryStreams"), un = De.x.wrap((function() {
            return Promise.all([t.e(84121), t.e(35857)]).then(t.bind(t, 127448))
        }
        ), "SwitcherBrowseDirectoryVideos"), mn = De.x.wrap((function() {
            return Promise.all([t.e(84121), t.e(35857)]).then(t.bind(t, 127448))
        }
        ), "SwitcherBrowseDirectoryClips");
        !function(e) {
            e.CLIPS = "clips-scroller",
            e.DEFAULT = "directory-root-scroller",
            e.GAME = "game-scroller"
        }(Xe || (Xe = {}));
        var gn = function(e) {
            var n = e.freeformTagFilter
              , t = e.tagFilters
              , i = e.data
              , a = i.loading
              , r = i.error
              , o = i.game;
            return a || r || !o ? null : (0,
            d.jsx)(Ie.uS, {
                injectStyles: {
                    textAlign: "center",
                    marginBottom: 20,
                    marginTop: 20
                },
                adUnit: Le._i.directory,
                slotID: Le.iN.directory.banner,
                adSize: Le.ot.directory.banner,
                "data-a-target": "directory-banner-ad-slot",
                targeting: {
                    pagetype: Le.cL.games,
                    game: o.displayName,
                    tag: (0,
                    Le.Hb)(t, n)
                },
                autoEnable: !1
            })
        }
          , pn = function(e) {
            return tn(e.match.path) ? z.c.Clips : "/directory/category/:categorySlug/videos/:filter" === e.match.path ? z.c.Videos : function(e) {
                return "/directory/category/:categorySlug/upcoming" === e
            }(e.match.path) ? z.c.Upcoming : z.c.Live
        }
          , fn = function(e) {
            var n, t = Xe.DEFAULT;
            return tn(e.match.path) ? t = Xe.CLIPS : ("/directory/category/:categorySlug" === (n = e.match.path) || "/directory/category/:categorySlug/:encodedLanguage" === n) && (t = Xe.GAME),
            t
        }
          , hn = (0,
        v.Zz)((0,
        _._v)(rn(), {
            options: function(e) {
                return {
                    variables: {
                        slug: e.match.params.categorySlug
                    }
                }
            }
        }))((function(e) {
            var n = (0,
            r.R)(e.match.params.categorySlug)
              , t = (0,
            h.useState)(void 0)
              , i = t[0]
              , a = t[1];
            return pn(e) !== z.c.Upcoming || ze.M.includes(n.toLowerCase()) ? (0,
            je.B6)(e.location.pathname, {
                path: "/directory/category/:categorySlug",
                exact: !0,
                strict: !1
            }) && (0,
            Ge.s0)() ? (0,
            d.jsxs)(u.P, {
                fullHeight: !0,
                children: [(0,
                d.jsx)(Be.e, {
                    children: (0,
                    d.jsx)(Me.T, {})
                }), (0,
                d.jsx)(Ve.e, {
                    suppressScrollX: !0,
                    suppressScrollToTop: !0,
                    suppressScrollY: !0
                }), (0,
                d.jsx)(je.qh, {
                    path: "/directory/category/:categorySlug",
                    component: dn
                })]
            }) : (0,
            je.B6)(e.location.pathname, {
                path: "/directory/category/:categorySlug/videos/:filter",
                exact: !0,
                strict: !1
            }) && (0,
            Ge.s0)() ? (0,
            d.jsxs)(u.P, {
                fullHeight: !0,
                children: [(0,
                d.jsx)(Be.e, {
                    children: (0,
                    d.jsx)(Me.T, {})
                }), (0,
                d.jsx)(Ve.e, {
                    suppressScrollX: !0,
                    suppressScrollToTop: !0,
                    suppressScrollY: !0
                }), (0,
                d.jsx)(je.qh, {
                    path: "/directory/category/:categorySlug/videos/:filter",
                    component: un
                })]
            }) : (0,
            je.B6)(e.location.pathname, {
                path: "/directory/category/:categorySlug/clips",
                exact: !0,
                strict: !1
            }) && (0,
            Ge.s0)() ? (0,
            d.jsxs)(u.P, {
                fullHeight: !0,
                children: [(0,
                d.jsx)(Be.e, {
                    children: (0,
                    d.jsx)(Me.T, {})
                }), (0,
                d.jsx)(Ve.e, {
                    suppressScrollX: !0,
                    suppressScrollToTop: !0,
                    suppressScrollY: !0
                }), (0,
                d.jsx)(je.qh, {
                    path: "/directory/category/:categorySlug/clips",
                    component: mn
                })]
            }) : (0,
            d.jsxs)(u.P, {
                "data-a-target": fn(e),
                children: [(0,
                d.jsx)(Be.e, {
                    children: (0,
                    d.jsx)(Me.T, {})
                }), (0,
                d.jsx)(Ve.e, {
                    suppressScrollX: !0,
                    suppressScrollToTop: !0,
                    addPaddingWhenPlayerIsPersisting: !0
                }), (0,
                d.jsx)(Pe.n, {
                    children: (0,
                    d.jsxs)(V.u, {
                        section: "page",
                        id: "directory-game-main-content",
                        icon: we.x,
                        label: (0,
                        k.hw)("Main Content", "SkipToTargetDirectoryGamePage"),
                        children: [(0,
                        d.jsx)(nn, {
                            categorySlug: n,
                            bannerType: i
                        }), (0,
                        d.jsx)(Ae.G, {
                            directorySlug: n
                        }), (0,
                        d.jsx)(gn, (0,
                        c.__assign)({}, e)), (0,
                        d.jsx)(u.P, {
                            className: "directory-header__filters",
                            display: m.nl.Flex,
                            flexWrap: m.I4.Wrap,
                            margin: {
                                bottom: 2
                            },
                            children: (0,
                            d.jsx)(Re.n, {
                                selectedContentType: pn(e),
                                categorySlug: e.match.params.categorySlug
                            })
                        }), (0,
                        d.jsxs)(je.dO, {
                            children: [(0,
                            d.jsx)(je.qh, {
                                path: "/directory/category/:categorySlug/clips",
                                render: function(e) {
                                    return (0,
                                    d.jsx)(on, {
                                        categorySlug: e.match.params.categorySlug,
                                        updateBanner: a
                                    })
                                }
                            }), (0,
                            d.jsx)(je.qh, {
                                path: "/directory/category/:categorySlug/videos/:filter",
                                render: function(e) {
                                    return (0,
                                    d.jsx)(sn, (0,
                                    c.__assign)({}, e, {
                                        updateBanner: a
                                    }))
                                }
                            }), (0,
                            d.jsx)(je.qh, {
                                path: "/directory/category/:categorySlug/upcoming",
                                render: function(e) {
                                    return (0,
                                    d.jsx)(Fe.N, {
                                        assignments: {
                                            fallback: function() {
                                                return (0,
                                                d.jsx)(je.rd, {
                                                    to: "/directory/category/".concat(n)
                                                })
                                            },
                                            active: function() {
                                                return (0,
                                                d.jsx)(cn, (0,
                                                c.__assign)({}, e))
                                            },
                                            active_alt: function() {
                                                return (0,
                                                d.jsx)(cn, (0,
                                                c.__assign)({}, e))
                                            }
                                        },
                                        name: "upcoming_schedules_directory_page"
                                    })
                                }
                            }), (0,
                            d.jsx)(je.qh, {
                                path: "/directory/category/:categorySlug/",
                                render: function(e) {
                                    return (0,
                                    d.jsx)(ln, (0,
                                    c.__assign)({}, e, {
                                        updateBanner: a
                                    }))
                                }
                            })]
                        })]
                    })
                }), (0,
                d.jsx)(Ee.y, {})]
            }) : (0,
            d.jsx)(je.rd, {
                to: "/directory/category/".concat(n)
            })
        }
        ));
        var vn = (0,
        a.Ng)((function(e, n) {
            var t = (0,
            r.R)(n.match.params.categorySlug);
            return {
                freeformTagFilter: (0,
                i.f8)(e, l._h.gameDirectoryTagPage(t)),
                tagFilters: (0,
                i.bd)(e, l._h.gameDirectoryTagPage(t))
            }
        }
        ))(hn)
    },
    669693: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, {
            c: function() {
                return i
            }
        }),
        function(e) {
            e.Live = "live",
            e.Videos = "videos",
            e.Clips = "clips",
            e.Upcoming = "upcoming"
        }(i || (i = {}))
    },
    735394: function(e, n, t) {
        "use strict";
        t.d(n, {
            bd: function() {
                return s
            },
            f8: function() {
                return c
            },
            kT: function() {
                return l
            }
        });
        var i = t(331635)
          , a = t(960688)
          , r = t(96172)
          , o = t(306427);
        function s(e, n) {
            var t = d(n);
            return e.directory.tagFilters[t] || []
        }
        function l(e, n) {
            return s(e, n)[0]
        }
        function c(e, n) {
            var t = d(n);
            return e.directory.freeformTagNames[t]
        }
        function d(e) {
            return (e.type === o.$$.GameDirectory ? e.categoryName : e.type).toLowerCase()
        }
        a.x2.store.registerReducer("directory", (function(e, n) {
            switch (void 0 === e && (e = {
                freeformTagNames: {},
                tagFilters: {}
            }),
            n.type) {
            case r.l0:
                var t = d(n.page)
                  , a = (0,
                i.__assign)({}, e.tagFilters);
                return n.tagFilter ? a[t] = [n.tagFilter] : delete a[t],
                (0,
                i.__assign)((0,
                i.__assign)({}, e), {
                    tagFilters: a
                });
            case r.Sr:
                t = d(n.page);
                var o = (0,
                i.__assign)({}, e.freeformTagNames);
                return n.freeformTagName ? o[t] = n.freeformTagName : delete o[t],
                (0,
                i.__assign)((0,
                i.__assign)({}, e), {
                    freeformTagNames: o
                });
            default:
                return e
            }
        }
        ))
    },
    306427: function(e, n, t) {
        "use strict";
        var i;
        t.d(n, {
            $$: function() {
                return i
            },
            _h: function() {
                return a
            },
            a$: function() {
                return r
            }
        }),
        function(e) {
            e.BrowseCategories = "browse-categories",
            e.BrowseLiveChannels = "browse-live-channels",
            e.GameDirectory = "game-directory"
        }(i || (i = {}));
        var a = function() {
            function e() {}
            return e.gameDirectoryTagPage = function(e) {
                return {
                    type: i.GameDirectory,
                    categoryName: e
                }
            }
            ,
            e.browseCategories = {
                type: i.BrowseCategories
            },
            e.browseLiveChannels = {
                type: i.BrowseLiveChannels
            },
            e
        }();
        function r(e, n) {
            return e.type === n.type && (e.type !== i.GameDirectory || n.type !== i.GameDirectory || e.categoryName === n.categoryName)
        }
    },
    175033: function(e, n, t) {
        "use strict";
        t.d(n, {
            o: function() {
                return s
            }
        });
        var i, a = t(960688), r = t(672052);
        function o(e) {
            return void 0 === e && (e = !1),
            i && !e || (i = function() {
                var e = {}
                  , n = a.x2.dynamicSettings.get("disco_category_redirect_slugs", []);
                if (n.length < 2 || n.length % 2 != 0)
                    return e;
                for (var t = 0; t < n.length; t += 2)
                    e[n[t]] = n[t + 1];
                return e
            }()),
            i
        }
        function s(e, n, t) {
            if (void 0 === t && (t = !1),
            e) {
                var i = o(t)[e];
                i && a.x2.history.push((0,
                r.nT)(i, n))
            }
        }
    },
    356300: function(e, n, t) {
        "use strict";
        t.d(n, {
            W: function() {
                return o
            }
        });
        var i = t(960688)
          , a = t(440549)
          , r = t(235525)
          , o = function(e) {
            var n = null
              , t = e.node;
            return t && (n = {
                __typename: "Stream",
                id: t.id,
                title: t.title || "",
                viewersCount: t.viewersCount || 0,
                previewImageURL: t.previewImageURL || i.$W.defaultStreamPreviewURL,
                createdAt: "createdAt"in t ? t.createdAt : "",
                broadcaster: t.broadcaster ? {
                    __typename: "User",
                    id: t.broadcaster.id,
                    login: t.broadcaster.login,
                    displayName: t.broadcaster.displayName,
                    roles: t.broadcaster.roles,
                    profileImageURL: t.broadcaster.profileImageURL,
                    primaryColorHex: t.broadcaster.primaryColorHex
                } : null,
                game: t.game ? {
                    __typename: "Game",
                    id: t.game.id,
                    boxArtURL: t.game.boxArtURL || i.$W.defaultBoxArtURL,
                    name: t.game.name,
                    displayName: t.game.displayName,
                    slug: t.game.slug
                } : null,
                freeformTags: null,
                type: (0,
                r.W)(t.type) || a.P.Live,
                previewThumbnailProperties: t.previewThumbnailProperties
            }),
            n
        }
    },
    267588: function(e, n, t) {
        "use strict";
        t.d(n, {
            e: function() {
                return m
            }
        });
        var i = t(331635)
          , a = t(960688)
          , r = t(343584)
          , o = t(310368)
          , s = t(440549)
          , l = t(672052)
          , c = t(807975)
          , d = t(957139)
          , u = t(235525);
        function m(e) {
            var n, t, i, c, m, f, h, v, k, y, x = e.streamNode, b = e.streamIndex, S = x.broadcaster && x.broadcaster.login || "", _ = null === (n = x.broadcaster) || void 0 === n ? void 0 : n.profileImageURL, T = "/".concat(S) || 0;
            return (0,
            d.yo)(null === (t = x.game) || void 0 === t ? void 0 : t.id) && x.type === s.P.Live && (T = (0,
            d.SN)(S)),
            {
                context: e.shouldShowGame ? r.oT.MixedGameAndChannelList : r.oT.SingleGameList,
                title: x.title || (0,
                a.hw)("Untitled Broadcast", "StreamThumbnail"),
                linkTo: g(T, b, e),
                thumbnailImageProps: {
                    src: x.previewImageURL || a.$W.defaultStreamPreviewURL,
                    alt: "".concat(x.title, " - ").concat(S)
                },
                channelDisplayName: x.broadcaster && x.broadcaster.displayName || "",
                channelLogin: S,
                channelLinkTo: g("/".concat(S, "/videos"), b, e),
                channelImageProps: {
                    src: x.broadcaster && _ || "",
                    alt: "".concat(S)
                },
                gameTitle: p("displayName", e),
                gameTitleLinkTo: g((0,
                l.nT)(p("slug", e)), b, e),
                gameBoxArtImageProps: {
                    src: p("boxArtURL", e) || a.$W.defaultBoxArtURL,
                    alt: p("displayName", e)
                },
                createdAt: e.streamNode.createdAt || "",
                streamType: (0,
                u.W)(x.type) || s.P.Live,
                currentViewerCount: x.viewersCount || 0,
                trackImageLatency: e.trackImageLatency,
                tagListProps: e.tagListProps,
                trackingProps: {
                    category: null === (i = x.game) || void 0 === i ? void 0 : i.name,
                    gameID: null === (c = x.game) || void 0 === c ? void 0 : c.id,
                    itemPosition: b,
                    rowPosition: 0,
                    channelID: x.broadcaster && x.broadcaster.id || void 0,
                    itemViewCount: x.viewersCount
                },
                primaryColorHex: x.broadcaster && x.broadcaster.primaryColorHex,
                thumbnailContainsSexualThemes: (0,
                o.y)(x),
                isPartner: null !== (h = null === (f = null === (m = x.broadcaster) || void 0 === m ? void 0 : m.roles) || void 0 === f ? void 0 : f.isPartner) && void 0 !== h ? h : void 0,
                isDJ: null !== (y = null === (k = null === (v = x.broadcaster) || void 0 === v ? void 0 : v.roles) || void 0 === k ? void 0 : k.isParticipatingDJ) && void 0 !== y ? y : void 0
            }
        }
        function g(e, n, t) {
            var a = t.trackingContent ? t.trackingContent : "live_channel"
              , r = "twitch_game_directory";
            t.trackingMedium && (r = t.trackingMedium);
            var o = t.history && t.history.location && t.history.location.state || {};
            return {
                pathname: e,
                state: (0,
                i.__assign)((0,
                i.__assign)({}, (0,
                c.Eq)(o)), {
                    medium: r,
                    content: a,
                    content_index: n
                })
            }
        }
        function p(e, n) {
            if (n.shouldShowGame && n.streamNode.game) {
                var t = n.streamNode.game[e];
                if (t)
                    return t
            }
            return ""
        }
    },
    478352: function(e, n, t) {
        "use strict";
        t.d(n, {
            m: function() {
                return r
            }
        });
        var i = t(368538)
          , a = t(42419)
          , r = function(e) {
            var n, t, r, o, s = e.tags, l = e.freeformTags, c = e.section, d = e.onClickTag, u = e.onClickFreeformTag, m = e.freeformTagFilter, g = e.tagFilters, p = void 0 === g ? [] : g, f = e.shuffleTags, h = e.scrollToTop, v = e.priorityTagTerm;
            if (s || l)
                return s && (n = s.slice(),
                t = function(e, n) {
                    if (h && h(),
                    p.every((function(e) {
                        return e.id !== n.id
                    }
                    ))) {
                        d && d(n);
                        var t = {
                            section: c,
                            tagPosition: p.length,
                            searchEvent: !1,
                            tagId: n.id,
                            dismiss: !1
                        };
                        (0,
                        a.t)(t)
                    } else
                        (0,
                        i.I)(n.id)
                }
                ),
                l && (r = l.slice(),
                o = function(e, n) {
                    if (h && h(),
                    m !== n.name) {
                        u && u(n.name);
                        var t = {
                            section: c,
                            tagPosition: 0,
                            searchEvent: !1,
                            freeformTagFilter: n.name,
                            dismiss: !1
                        };
                        (0,
                        a.t)(t)
                    } else
                        (0,
                        i.I)(n.name)
                }
                ),
                {
                    tags: n,
                    callback: t,
                    freeformTags: r,
                    freeformTagsCallback: o,
                    shuffle: f,
                    priorityTagTerm: v
                }
        }
    },
    469396: function(e, n, t) {
        "use strict";
        t.d(n, {
            Qp: function() {
                return r
            },
            dQ: function() {
                return a
            },
            iF: function() {
                return o
            }
        });
        var i = t(96318)
          , a = function(e) {
            var n = e.game;
            if (!n || !n.streams || !n.streams.edges)
                return null;
            var t = n.streams.edges
              , i = t[t.length - 5];
            return i ? i.cursor : null
        }
          , r = function(e) {
            var n = e.game;
            return (n && n.streams && n.streams.edges || []).filter((function(e) {
                return e && e.node && e.node.id
            }
            ))
        }
          , o = function(e) {
            if ((0,
            i.g)() && 0 !== e.length) {
                var n = [];
                return e.map((function(e) {
                    var n, t;
                    return null === (t = null === (n = e.node) || void 0 === n ? void 0 : n.broadcaster) || void 0 === t ? void 0 : t.id
                }
                )).filter((function(e) {
                    return e
                }
                )).forEach((function(e) {
                    e && n.push(e)
                }
                )),
                n
            }
        }
    },
    136328: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return i
            }
        });
        var i = 18
    },
    32608: function(e, n, t) {
        "use strict";
        t.d(n, {
            AO: function() {
                return j
            },
            Oy: function() {
                return C
            },
            XK: function() {
                return T
            },
            lk: function() {
                return w
            },
            s4: function() {
                return N
            }
        });
        var i = t(331635)
          , a = t(474848)
          , r = t(70931)
          , o = t(564368)
          , s = t(657659)
          , l = t(235233)
          , c = t(216042)
          , d = t(959340)
          , u = t(914421)
          , m = t(70642)
          , g = t(847388)
          , p = t(540943)
          , f = t(312663)
          , h = t(296540)
          , v = t(960688)
          , k = t(928778)
          , y = t(503472)
          , x = t(123269)
          , b = t(98633)
          , S = t.n(b)
          , _ = function(e, n) {
            if (n === x.B5.ExtraSmall)
                return (0,
                v.hw)("Recommendation Removed", "HiddenContentNotice");
            switch (e) {
            case x.e5.Shelf:
            case x.e5.Category:
                return (0,
                v.hw)("Recommended Category Removed", "HiddenContentNotice");
            case x.e5.Channel:
                return (0,
                v.hw)("Recommended Channel Removed", "HiddenContentNotice");
            default:
                return ""
            }
        }
          , T = function(e) {
            var n = e.clickTargetSize
              , t = e.onClick;
            return (0,
            a.jsx)(o.$n, {
                onClick: t,
                size: n,
                variant: o.VQ.Text,
                "data-a-target": "hidden-content-notice-undo",
                children: (0,
                v.hw)("Undo", "HiddenContentNotice")
            })
        }
          , C = function(e) {
            var n = e.clickTargetSize
              , t = e.onClick;
            return (0,
            a.jsx)(o.$n, {
                icon: s.d,
                onClick: t,
                size: n,
                variant: o.VQ.Text,
                targetBlank: !0,
                linkTo: "/settings/content-preferences",
                children: (0,
                v.hw)("Settings", "HiddenContentNotice")
            })
        }
          , N = function(e) {
            return {
                contentType: "Game" === e.__typename ? x.e5.Category : x.e5.Channel,
                size: "Game" === e.__typename ? x.B5.Large : x.B5.Small,
                aspectRatio: "Game" === e.__typename ? l.gl.BoxArt : l.gl.Aspect16x9
            }
        }
          , w = function(e) {
            function n() {
                var n = null !== e && e.apply(this, arguments) || this;
                return n.state = {
                    showError: !1,
                    countdownState: x.dk.Running
                },
                n.pauseCountdown = function() {
                    n.setState({
                        countdownState: x.dk.Paused
                    })
                }
                ,
                n.resumeCountdown = function() {
                    n.state.countdownState !== x.dk.Stopped && n.setState({
                        countdownState: x.dk.Running
                    })
                }
                ,
                n.onUndoClick = function() {
                    return (0,
                    i.__awaiter)(n, void 0, void 0, (function() {
                        var e, n, t, a;
                        return (0,
                        i.__generator)(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                if (!(e = this.props.addFeedbackPromise))
                                    return [2];
                                this.setState({
                                    countdownState: x.dk.Stopped
                                }),
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 7, , 8]),
                                [4, e];
                            case 2:
                                if (n = i.sent(),
                                !(t = n.data && n.data.addRecommendationFeedback && n.data.addRecommendationFeedback.recommendationFeedback))
                                    return this.setState({
                                        showError: !0
                                    }),
                                    [2];
                                a = (0,
                                y.AR)({
                                    feedbackID: t.id,
                                    sourceItemPage: "twitch_home",
                                    sourceItemRequestID: "",
                                    sourceItemTrackingID: this.props.sourceItemTrackingID || ""
                                }),
                                i.label = 3;
                            case 3:
                                return i.trys.push([3, 5, , 6]),
                                [4, this.props.undoFeedback(a)];
                            case 4:
                                return i.sent(),
                                this.props.undoSuccessHandler(),
                                [3, 6];
                            case 5:
                                return i.sent(),
                                this.setState({
                                    showError: !0
                                }),
                                [3, 6];
                            case 6:
                                return [3, 8];
                            case 7:
                                return i.sent(),
                                this.props.undoSuccessHandler(),
                                [3, 8];
                            case 8:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                n
            }
            return (0,
            i.__extends)(n, e),
            n.prototype.render = function() {
                return "horizontal" === this.props.layout ? this.renderHorizontalLayout() : this.renderVerticalLayout()
            }
            ,
            n.prototype.renderVerticalLayout = function() {
                return (0,
                a.jsx)(c.S, {
                    height: "100%",
                    margin: {
                        bottom: 3
                    },
                    "data-a-target": "hidden-content-notice",
                    children: (0,
                    a.jsx)("div", {
                        onMouseEnter: this.pauseCountdown,
                        onMouseLeave: this.resumeCountdown,
                        children: (0,
                        a.jsxs)(d.P, {
                            display: u.nl.Flex,
                            flexDirection: u.bo.Column,
                            width: "100%",
                            height: "100%",
                            alignItems: u.k2.Center,
                            justifyContent: u.A9.Center,
                            position: u.yX.Relative,
                            background: u.VS.Alt,
                            children: [(0,
                            a.jsxs)(d.P, {
                                display: u.nl.Flex,
                                justifyContent: u.A9.Between,
                                alignItems: u.k2.Center,
                                flexDirection: u.bo.Column,
                                children: [this.renderTop(), this.renderBottom()]
                            }), this.props.shouldRemoveContent && (0,
                            a.jsx)(d.P, {
                                position: u.yX.Absolute,
                                attachBottom: !0,
                                fullWidth: !0,
                                children: (0,
                                a.jsx)(m.z2, {
                                    animationDuration: 5,
                                    animationDirection: m.od.Down,
                                    onAnimationEnd: this.props.onExpiration,
                                    size: m.Q8.ExtraSmall,
                                    paused: this.state.countdownState !== x.dk.Running
                                })
                            })]
                        })
                    })
                })
            }
            ,
            n.prototype.renderHorizontalLayout = function() {
                return (0,
                a.jsx)(c.S, {
                    height: "100%",
                    margin: {
                        bottom: 1
                    },
                    "data-a-target": "hidden-content-notice",
                    children: (0,
                    a.jsx)("div", {
                        onMouseEnter: this.pauseCountdown,
                        onMouseLeave: this.resumeCountdown,
                        children: (0,
                        a.jsxs)(g.x, {
                            children: [(0,
                            a.jsx)(p.VP, {
                                cols: 4,
                                children: (0,
                                a.jsx)(l.j$, {
                                    ratio: l.gl.Aspect16x9,
                                    children: (0,
                                    a.jsxs)(d.P, {
                                        display: u.nl.Flex,
                                        flexDirection: u.bo.Column,
                                        width: "100%",
                                        height: "100%",
                                        alignItems: u.k2.Center,
                                        justifyContent: u.A9.Center,
                                        background: u.VS.Alt,
                                        children: [this.renderTop(), this.props.shouldRemoveContent && (0,
                                        a.jsx)(d.P, {
                                            position: u.yX.Absolute,
                                            attachBottom: !0,
                                            width: "100%",
                                            children: (0,
                                            a.jsx)(m.z2, {
                                                animationDuration: 5,
                                                animationDirection: m.od.Down,
                                                onAnimationEnd: this.props.onExpiration,
                                                size: m.Q8.ExtraSmall,
                                                paused: this.state.countdownState !== x.dk.Running
                                            })
                                        })]
                                    })
                                })
                            }), (0,
                            a.jsx)(p.VP, {
                                cols: 8,
                                offset: 0,
                                children: this.renderBottom()
                            })]
                        })
                    })
                })
            }
            ,
            n.prototype.renderTop = function() {
                return (0,
                a.jsx)(d.P, {
                    margin: {
                        x: 1
                    },
                    textAlign: u.nO.Center,
                    children: (0,
                    a.jsx)(f.N, {
                        fontWeight: u.IT.SemiBold,
                        fontSize: this.props.size === x.B5.Large ? u.Z4.Size4 : this.props.size === x.B5.Small ? u.Z4.Size5 : this.props.size === x.B5.ExtraSmall ? u.Z4.Size6 : u.Z4.Size5,
                        children: _(this.props.contentType, this.props.size)
                    })
                })
            }
            ,
            n.prototype.renderBottom = function() {
                var e, n, t, i = this.props.hasHorizontalLinks;
                return (0,
                a.jsx)(d.P, {
                    margin: {
                        top: i ? 0 : 1
                    },
                    textAlign: u.nO.Center,
                    fontSize: u.Z4.Size7,
                    display: u.nl.Flex,
                    flexDirection: i ? u.bo.Row : u.bo.Column,
                    children: this.state.showError ? null !== (t = null === (n = (e = this.props).getErrorMessage) || void 0 === n ? void 0 : n.call(e)) && void 0 !== t ? t : (0,
                    v.hw)("Something went wrong, please <x:link-manage>click here</x:link-manage> to manage your recommendation feedback", {
                        "x:link-manage": function(e) {
                            return (0,
                            a.jsx)(r.C, {
                                linkTo: "/settings/content-preferences",
                                targetBlank: !0,
                                "data-test-selector": "hidden-content-undo-error",
                                children: e
                            })
                        }
                    }, "HiddenContentNotice") : (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(T, {
                            clickTargetSize: this.props.clickTargetSize,
                            onClick: this.onUndoClick
                        }), !this.props.hideSettingsLink && (0,
                        a.jsx)(C, {
                            clickTargetSize: this.props.clickTargetSize,
                            onClick: this.props.onManageClick
                        })]
                    })
                })
            }
            ,
            n
        }(h.Component)
          , j = (0,
        k._v)(S(), {
            name: "undoFeedback"
        })(w)
    },
    123269: function(e, n, t) {
        "use strict";
        var i, a, r;
        t.d(n, {
            B5: function() {
                return i
            },
            dk: function() {
                return r
            },
            e5: function() {
                return a
            }
        }),
        function(e) {
            e.Large = "Large",
            e.Small = "Small",
            e.ExtraSmall = "ExtraSmall"
        }(i || (i = {})),
        function(e) {
            e.Category = "category",
            e.Channel = "channel",
            e.Shelf = "shelf",
            e.VOD = "vod"
        }(a || (a = {})),
        function(e) {
            e.Running = "Running",
            e.Paused = "Paused",
            e.Stopped = "Stopped"
        }(r || (r = {}))
    },
    533100: function(e, n, t) {
        "use strict";
        t.d(n, {
            M: function() {
                return a
            }
        });
        var i = t(960688)
          , a = function() {
            return (0,
            i.hw)("Show more options for this channel", "RecFeedbackButtonA11yLabel")
        }
    },
    664117: function(e, n, t) {
        "use strict";
        e.exports = t.p + "assets/people-633ab63826876d0d6e72.svg"
    },
    414066: function(e, n, t) {
        "use strict";
        e.exports = t.p + "assets/glow-ghost-2392602c690652b91758.svg"
    }
}]);
