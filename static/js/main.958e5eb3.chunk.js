(this.webpackJsonpnft_minting_dapp = this.webpackJsonpnft_minting_dapp || []).push([
    [0], {
        229: function(n) {
            n.exports = JSON.parse('[{"wallet":""},{"wallet":""}]')
        },
        248: function(n, t) {},
        257: function(n, t) {},
        275: function(n, t) {},
        277: function(n, t) {},
        296: function(n, t) {},
        297: function(n, t) {},
        360: function(n, t) {},
        362: function(n, t) {},
        395: function(n, t) {},
        397: function(n, t) {},
        398: function(n, t) {},
        403: function(n, t) {},
        405: function(n, t) {},
        411: function(n, t) {},
        413: function(n, t) {},
        426: function(n, t) {},
        438: function(n, t) {},
        441: function(n, t) {},
        446: function(n, t) {},
        454: function(n, t) {},
        463: function(n, t) {},
        465: function(n, t) {},
        537: function(n, t, e) {},
        538: function(n, t, e) {
            "use strict";
            e.r(t);
            var c, o, r, a, i, s, l, u, d, x, b = e(1),
                p = e(87),
                j = e.n(p),
                f = e(17),
                h = e.n(f),
                g = e(44),
                O = e(71),
                v = e(15),
                C = e(60),
                m = e(70),
                y = e.n(m),
                w = e(224),
                A = e.n(w),
                T = e(72),
                E = e(225),
                N = e(20),
                S = {
                    loading: !1,
                    account: null,
                    smartContract: null,
                    web3: null,
                    errorMsg: ""
                },
                _ = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CONNECTION_REQUEST":
                            return Object(N.a)(Object(N.a)({}, S), {}, {
                                loading: !0
                            });
                        case "CONNECTION_SUCCESS":
                            return Object(N.a)(Object(N.a)({}, n), {}, {
                                loading: !1,
                                account: t.payload.account,
                                smartContract: t.payload.smartContract,
                                web3: t.payload.web3
                            });
                        case "CONNECTION_FAILED":
                            return Object(N.a)(Object(N.a)({}, S), {}, {
                                loading: !1,
                                errorMsg: t.payload
                            });
                        case "UPDATE_ACCOUNT":
                            return Object(N.a)(Object(N.a)({}, n), {}, {
                                account: t.payload.account
                            });
                        default:
                            return n
                    }
                },
                M = {
                    loading: !1,
                    supply: 0,
                    cost: 0,
                    error: !1,
                    errorMsg: ""
                },
                k = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "CHECK_DATA_REQUEST":
                            return Object(N.a)(Object(N.a)({}, n), {}, {
                                loading: !0,
                                error: !1,
                                errorMsg: ""
                            });
                        case "CHECK_DATA_SUCCESS":
                            return Object(N.a)(Object(N.a)({}, n), {}, {
                                loading: !1,
                                supply: t.payload.supply,
                                error: !1,
                                errorMsg: ""
                            });
                        case "CHECK_DATA_FAILED":
                            return Object(N.a)(Object(N.a)({}, M), {}, {
                                loading: !1,
                                error: !0,
                                errorMsg: t.payload
                            });
                        default:
                            return n
                    }
                },
                I = Object(T.b)({
                    blockchain: _,
                    data: k
                }),
                L = [E.a],
                D = Object(T.c)(T.a.apply(void 0, L)),
                R = Object(T.d)(I, D),
                W = function(n) {
                    return {
                        type: "CHECK_DATA_FAILED",
                        payload: n
                    }
                },
                z = function() {
                    return function() {
                        var n = Object(g.a)(h.a.mark((function n(t) {
                            var e;
                            return h.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return t({
                                            type: "CHECK_DATA_REQUEST"
                                        }), n.prev = 1, n.next = 4, R.getState().blockchain.smartContract.methods.totalSupply().call();
                                    case 4:
                                        e = n.sent, t({
                                            type: "CHECK_DATA_SUCCESS",
                                            payload: {
                                                supply: e
                                            }
                                        }), n.next = 12;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(1), console.log(n.t0), t(W("Could not load data from contract."));
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 8]
                            ])
                        })));
                        return function(t) {
                            return n.apply(this, arguments)
                        }
                    }()
                },
                F = function(n) {
                    return {
                        type: "CONNECTION_FAILED",
                        payload: n
                    }
                },
                K = function(n) {
                    return function() {
                        var t = Object(g.a)(h.a.mark((function t(e) {
                            return h.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        e({
                                            type: "UPDATE_ACCOUNT",
                                            payload: {
                                                account: n
                                            }
                                        }), e(z());
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(n) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                P = e(16),
                U = P.a.div(c || (c = Object(v.a)(["\n  background-color: var(--primary);\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])), (function(n) {
                    var t = n.image;
                    return t ? "url(".concat(t, ")") : "none"
                })),
                H = (P.a.div(o || (o = Object(v.a)(["\n  height: 8px;\n  width: 8px;\n"]))), P.a.div(r || (r = Object(v.a)(["\n  height: 16px;\n  width: 16px;\n"])))),
                Y = P.a.div(a || (a = Object(v.a)(["\n  height: 24px;\n  width: 24px;\n"]))),
                G = P.a.div(i || (i = Object(v.a)(["\n  height: 32px;\n  width: 32px;\n"]))),
                B = P.a.div(s || (s = Object(v.a)(["\n  display: flex;\n  flex: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  background-color: ", ";\n  width: 100%;\n  background-image: ", ";\n  background-size: cover;\n  background-position: center;\n"])), (function(n) {
                    var t = n.flex;
                    return t || 0
                }), (function(n) {
                    var t = n.fd;
                    return t || "column"
                }), (function(n) {
                    var t = n.jc;
                    return t || "flex-start"
                }), (function(n) {
                    var t = n.ai;
                    return t || "flex-start"
                }), (function(n) {
                    return n.test ? "pink" : "none"
                }), (function(n) {
                    var t = n.image;
                    return t ? "url(".concat(t, ")") : "none"
                })),
                X = P.a.p(l || (l = Object(v.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),
                J = (P.a.p(u || (u = Object(v.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))), P.a.p(d || (d = Object(v.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),
                Q = (P.a.div(x || (x = Object(v.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))), e(88)),
                V = e(89),
                q = e(2);

            function Z() {
                return Object(q.jsxs)("div", {
                    class: "social-container",
                    children: [Object(q.jsx)("h3", {}), Object(q.jsx)("a", {
                        href: "https://discord.gg/7fMFnv4asT",
                        className: "Discord social",
                        children: Object(q.jsx)(Q.a, {
                            icon: V.a,
                            size: "2x"
                        })
                    }), Object(q.jsx)("a", {
                        href: "https://twitter.com/MetaBettorsNFT",
                        className: "Twitter social",
                        children: Object(q.jsx)(Q.a, {
                            icon: V.c,
                            size: "2x"
                        })
                    }), Object(q.jsx)("a", {
                        href: "https://www.instagram.com/metabettors/",
                        className: "Instagram social",
                        children: Object(q.jsx)(Q.a, {
                            icon: V.b,
                            size: "2x"
                        })
                    })]
                })
            }
            var $, nn, tn, en, cn, on, rn = e(229),
                an = (e(59), P.a.button($ || ($ = Object(v.a)(["\n  padding: 14px;\n  border-radius: 30px;\n  border: none;\n\n  background:  var(--buttons);\n  padding: 15px 15px 15px;\n  font-weight: bold;\n  font-size: 20px;\n  font-family: 'PT Mono', monospace;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :hover {\n    background-color: var(--buttons-hover);\n    color: ;\n  }\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"])))),
                sn = P.a.button(nn || (nn = Object(v.a)(["\n  padding: 2px;\n  border-radius: 20px;\n  border: none;\n  background: var(--buttons);\n  \n  font-color:  ;\n  font-weight: ;\n  font-size: 25px;\n  color: var(--secondary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :hover {\n    background-color: var(--buttons-hover);\n    color: #00f857;\n  }\n\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),
                ln = P.a.div(tn || (tn = Object(v.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 90%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),
                un = P.a.img(en || (en = Object(v.a)(["\n  border-radius: 0px; \n  padding-top: 0px;\n  @media (min-width: 7px) {\n    width: 80px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),
                dn = P.a.img(cn || (cn = Object(v.a)(["\n  \nborder-radius: 20px;\nwidth: 720px;\nmax-width:350px;\n\n"]))),
                xn = P.a.a(on || (on = Object(v.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));
            var bn = function() {
                    var n = Object(C.b)(),
                        t = Object(C.c)((function(n) {
                            return n.blockchain
                        })),
                        e = Object(C.c)((function(n) {
                            return n.data
                        })),
                        c = Object(b.useState)(!1),
                        o = Object(O.a)(c, 2),
                        r = o[0],
                        a = o[1],
                        i = Object(b.useState)("Click Mint to mint your NFT"),
                        s = Object(O.a)(i, 2),
                        l = s[0],
                        u = s[1],
                        d = Object(b.useState)(1),
                        x = Object(O.a)(d, 2),
                        p = x[0],
                        j = x[1],
                        f = Object(b.useState)({
                            CONTRACT_ADDRESS: "",
                            SCAN_LINK: "",
                            NETWORK: {
                                NAME: "",
                                SYMBOL: "",
                                ID: 0
                            },
                            NFT_NAME: "",
                            SYMBOL: "",
                            MAX_SUPPLY: 1,
                            WEI_COST: 0,
                            DISPLAY_COST: 0,
                            MAX_MINT: 0,
                            GAS_LIMIT: 0,
                            MARKETPLACE: "",
                            MARKETPLACE_LINK: "",
                            SHOW_BACKGROUND: !1,
                            WHITELIST: !1
                        }),
                        v = Object(O.a)(f, 2),
                        m = v[0],
                        w = v[1],
                        T = function() {
                            "" !== t.account && null !== t.smartContract && n(z(t.account))
                        },
                        E = function() {
                            var n = Object(g.a)(h.a.mark((function n() {
                                var t, e;
                                return h.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, fetch("./config/config.json", {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json"
                                                }
                                            });
                                        case 2:
                                            return t = n.sent, n.next = 5, t.json();
                                        case 5:
                                            e = n.sent, w(e);
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return Object(b.useEffect)((function() {
                        E()
                    }), []), Object(b.useEffect)((function() {
                        T()
                    }), [t.account]), Object(q.jsx)(U, {
                        children: Object(q.jsxs)(B, {
                            flex: 1,
                            ai: "center",
                            style: {
                                padding: 24,
                                backgroundColor: "var(--primary)"
                            },
                            image: m.SHOW_BACKGROUND ? "/config/images/bg.jpeg" : null,
                            children: [Object(q.jsx)(un, {
                                alt: "logo",
                                src: "/config/images/logo.png"
                            }), Object(q.jsx)(H, {}), Object(q.jsxs)(ln, {
                                flex: 1,
                                children: [Object(q.jsxs)(ln, {
                                    flex: 1,
                                    style: {
                                        backgroundColor: "var(--sub-background)",
                                        padding: 50,
                                        borderRadius: 24,
                                        boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                                        maxWidth: "1140px",
                                        margin: "auto"
                                    },
                                    test: !0,
                                    children: [Object(q.jsxs)(B, {
                                        flex: 1,
                                        jc: "center",
                                        ai: "center",
                                        children: [Object(q.jsx)(X, {
                                            style: {
                                                color: "var(--sub-titels)",
                                                fontSize: "40px",
                                                fontWeight: "bold",
                                                textAlign: "center"
                                            },
                                            children: "MINTING IS NOW LIVE"
                                        }), "" === t.account || null === t.smartContract ? Object(q.jsx)(q.Fragment, {
                                            children: Object(q.jsx)(X, {
                                                style: {
                                                    textAlign: "center",
                                                    fontSize: 25,
                                                    fontWeight: "bold",
                                                    color: "#575f61"
                                                },
                                                children: "CONNECT YOUR WALLET TO MINT"
                                            })
                                        }) : Object(q.jsxs)(q.Fragment, {
                                            children: [Object(q.jsxs)(X, {
                                                style: {
                                                    textAlign: "center",
                                                    fontSize: 25,
                                                    fontWeight: "bold",
                                                    color: "var(--titels)"
                                                },
                                                children: ["MINT YOUR ", m.NFT_NAME]
                                            }), Object(q.jsxs)(X, {
                                                style: {
                                                    textAlign: "center",
                                                    fontSize: 40,
                                                    fontWeight: "bold",
                                                    color: "var(--accent-text)"
                                                },
                                                children: [e.supply, " / ", m.MAX_SUPPLY]
                                            })]
                                        }), Object(q.jsx)(H, {}), Number(e.supply) >= m.MAX_SUPPLY ? Object(q.jsxs)(q.Fragment, {
                                            children: [Object(q.jsx)(X, {
                                                style: {
                                                    textAlign: "center",
                                                    color: "var(--accent-text)"
                                                },
                                                children: "The sale has ended."
                                            }), Object(q.jsxs)(J, {
                                                style: {
                                                    textAlign: "center",
                                                    color: "var(--accent-text)"
                                                },
                                                children: ["You can still find ", m.NFT_NAME, " on"]
                                            }), Object(q.jsx)(H, {}), Object(q.jsx)(xn, {
                                                target: "_blank",
                                                href: m.MARKETPLACE_LINK,
                                                children: m.MARKETPLACE
                                            })]
                                        }) : Object(q.jsxs)(q.Fragment, {
                                            children: [Object(q.jsxs)(X, {
                                                style: {
                                                    textAlign: "center",
                                                    color: "var(--accent-text)",
                                                    fontWeight: 500
                                                },
                                                children: ["Mint For ", m.DISPLAY_COST, " ", m.NETWORK.SYMBOL]
                                            }), Object(q.jsxs)(X, {
                                                style: {
                                                    textAlign: "center",
                                                    color: "var(--accent-text)",
                                                    fontWeight: 100,
                                                    fontSize: 18
                                                },
                                                children: ["Max Mint ", m.MAX_MINT]
                                            }), Object(q.jsx)(H, {}), "" === t.account || null === t.smartContract ? Object(q.jsxs)(B, {
                                                ai: "center",
                                                jc: "center",
                                                children: [Object(q.jsxs)(J, {
                                                    style: {
                                                        textAlign: "center",
                                                        color: "var(--accent-text)",
                                                        fontWeight: 500
                                                    },
                                                    children: ["Connect to the ", m.NETWORK.NAME, " network"]
                                                }), Object(q.jsx)(H, {}), Object(q.jsx)(an, {
                                                    className: "btn-43",
                                                    onClick: function(t) {
                                                        t.preventDefault(), n(function() {
                                                            var n = Object(g.a)(h.a.mark((function n(t) {
                                                                var e, c, o, r, a, i, s, l, u;
                                                                return h.a.wrap((function(n) {
                                                                    for (;;) switch (n.prev = n.next) {
                                                                        case 0:
                                                                            return t({
                                                                                type: "CONNECTION_REQUEST"
                                                                            }), n.next = 3, fetch("/config/abi.json", {
                                                                                headers: {
                                                                                    "Content-Type": "application/json",
                                                                                    Accept: "application/json"
                                                                                }
                                                                            });
                                                                        case 3:
                                                                            return e = n.sent, n.next = 6, e.json();
                                                                        case 6:
                                                                            return c = n.sent, n.next = 9, fetch("/config/config.json", {
                                                                                headers: {
                                                                                    "Content-Type": "application/json",
                                                                                    Accept: "application/json"
                                                                                }
                                                                            });
                                                                        case 9:
                                                                            return o = n.sent, n.next = 12, o.json();
                                                                        case 12:
                                                                            if (r = n.sent, a = window, !(i = a.ethereum) || !i.isMetaMask) {
                                                                                n.next = 33;
                                                                                break
                                                                            }
                                                                            return y.a.setProvider(i), s = new A.a(i), n.prev = 18, n.next = 21, i.request({
                                                                                method: "eth_requestAccounts"
                                                                            });
                                                                        case 21:
                                                                            return l = n.sent, n.next = 24, i.request({
                                                                                method: "net_version"
                                                                            });
                                                                        case 24:
                                                                            n.sent == r.NETWORK.ID ? (u = new y.a(c, r.CONTRACT_ADDRESS), t({
                                                                                type: "CONNECTION_SUCCESS",
                                                                                payload: {
                                                                                    account: l[0],
                                                                                    smartContract: u,
                                                                                    web3: s
                                                                                }
                                                                            }), i.on("accountsChanged", (function(n) {
                                                                                t(K(n[0]))
                                                                            })), i.on("chainChanged", (function() {
                                                                                window.location.reload()
                                                                            }))) : t(F("Change network to ".concat(r.NETWORK.NAME, "."))), n.next = 31;
                                                                            break;
                                                                        case 28:
                                                                            n.prev = 28, n.t0 = n.catch(18), t(F("Something went wrong."));
                                                                        case 31:
                                                                            n.next = 34;
                                                                            break;
                                                                        case 33:
                                                                            t(F("Install Metamask."));
                                                                        case 34:
                                                                        case "end":
                                                                            return n.stop()
                                                                    }
                                                                }), n, null, [
                                                                    [18, 28]
                                                                ])
                                                            })));
                                                            return function(t) {
                                                                return n.apply(this, arguments)
                                                            }
                                                        }()), T()
                                                    },
                                                    children: "CONNECT"
                                                }), "" !== t.errorMsg ? Object(q.jsxs)(q.Fragment, {
                                                    children: [Object(q.jsx)(H, {}), Object(q.jsx)(J, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "var(--accent-text)"
                                                        },
                                                        children: t.errorMsg
                                                    })]
                                                }) : null]
                                            }) : Object(q.jsxs)(q.Fragment, {
                                                children: [Object(q.jsx)(J, {
                                                    style: {
                                                        textAlign: "center",
                                                        color: "var(--accent-text)"
                                                    },
                                                    children: l
                                                }), Object(q.jsx)(Y, {}), Object(q.jsxs)(B, {
                                                    ai: "center",
                                                    jc: "center",
                                                    fd: "row",
                                                    children: [Object(q.jsx)(sn, {
                                                        style: {
                                                            lineHeight: .4
                                                        },
                                                        disabled: r ? 1 : 0,
                                                        onClick: function(n) {
                                                            n.preventDefault(),
                                                                function() {
                                                                    var n = p - 1;
                                                                    n < 1 && (n = 1), j(n)
                                                                }()
                                                        },
                                                        children: "-"
                                                    }), Object(q.jsx)(Y, {}), Object(q.jsx)(J, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "var(--accent-text)",
                                                            fontSize: "18px"
                                                        },
                                                        children: p
                                                    }), Object(q.jsx)(Y, {}), Object(q.jsx)(sn, {
                                                        disabled: r ? 1 : 0,
                                                        onClick: function(n) {
                                                            n.preventDefault(),
                                                                function() {
                                                                    var n = p + 1;
                                                                    n > 2 && (n = 2), j(n)
                                                                }()
                                                        },
                                                        children: "+"
                                                    })]
                                                }), Object(q.jsx)(H, {}), Object(q.jsx)(B, {
                                                    ai: "center",
                                                    jc: "center",
                                                    fd: "row",
                                                    children: function() {
                                                        var n = !1;
                                                        return rn.map((function(e) {
                                                            t.account.toLowerCase() == e.wallet.toLowerCase() && (n = !0)
                                                        })), n
                                                    }() || 0 == m.WHITELIST ? Object(q.jsx)(an, {
                                                        className: "btn-43",
                                                        disabled: r ? 1 : 0,
                                                        onClick: function(e) {
                                                            e.preventDefault(),
                                                                function() {
                                                                    var e = m.WEI_COST,
                                                                        c = m.GAS_LIMIT,
                                                                        o = String(e * p),
                                                                        r = String(c * p);
                                                                    console.log("Cost: ", o), console.log("Gas limit: ", r), u("Minting your ".concat(m.NFT_NAME, "...")), a(!0), t.smartContract.methods.mint(p).send({
                                                                        gasLimit: String(r),
                                                                        to: m.CONTRACT_ADDRESS,
                                                                        from: t.account,
                                                                        value: o
                                                                    }).once("error", (function(n) {
                                                                        console.log(n), u("Sorry, something went wrong please try again."), a(!1)
                                                                    })).then((function(e) {
                                                                        console.log(e), u("WOW, the ".concat(m.NFT_NAME, " is yours! go visit Opensea.io to view it.")), a(!1), n(z(t.account))
                                                                    }))
                                                                }(), T()
                                                        },
                                                        children: r ? "Minting..." : "MINT"
                                                    }) : Object(q.jsx)(J, {
                                                        style: {
                                                            textAlign: "center",
                                                            color: "var(--accent-text)",
                                                            fontSize: "20px"
                                                        },
                                                        children: "Sorry You are not whitelisted"
                                                    })
                                                })]
                                            })]
                                        }), Object(q.jsx)(Y, {})]
                                    }), Object(q.jsx)(G, {}), Object(q.jsx)(B, {
                                        flex: 1,
                                        jc: "center",
                                        ai: "center",
                                        children: Object(q.jsx)(dn, {
                                            alt: "example",
                                            src: "./config/images/nft.gif"
                                        })
                                    })]
                                }), Object(q.jsx)(Y, {})]
                            }), Object(q.jsx)(Z, {}), Object(q.jsx)(J, {
                                style: {
                                    textAlign: "center",
                                    paddingTop: 30,
                                    color: "var(--accent)"
                                },
                                children: "\u0421OPYRIGHT \xa9 2022. ALL RIGHTS RESERVED."
                            })]
                        })
                    })
                },
                pn = function(n) {
                    n && n instanceof Function && e.e(3).then(e.bind(null, 542)).then((function(t) {
                        var e = t.getCLS,
                            c = t.getFID,
                            o = t.getFCP,
                            r = t.getLCP,
                            a = t.getTTFB;
                        e(n), c(n), o(n), r(n), a(n)
                    }))
                };
            e(537);
            j.a.render(Object(q.jsx)(C.a, {
                store: R,
                children: Object(q.jsx)(bn, {})
            }), document.getElementById("root")), pn()
        }
    },
    [
        [538, 1, 2]
    ]
]);
//# sourceMappingURL=main.958e5eb3.chunk.js.map