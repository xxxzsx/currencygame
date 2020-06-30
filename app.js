console.log("Cracking the game...");
(function(e) {
    function t(t) {
        for (var i, l, u = t[0], o = t[1], r = t[2], h = 0, v = []; h < u.length; h++)
            l = u[h],
            Object.prototype.hasOwnProperty.call(s, l) && s[l] && v.push(s[l][0]),
            s[l] = 0;
        for (i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
        d && d(t);
        while (v.length)
            v.shift()();
        return n.push.apply(n, r || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < n.length; t++) {
            for (var a = n[t], i = !0, u = 1; u < a.length; u++) {
                var o = a[u];
                0 !== s[o] && (i = !1)
            }
            i && (n.splice(t--, 1),
            e = l(l.s = a[0]))
        }
        return e
    }
    var i = {}
      , s = {
        app: 0
    }
      , n = [];
    function l(t) {
        if (i[t])
            return i[t].exports;
        var a = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, l),
        a.l = !0,
        a.exports
    }
    l.m = e,
    l.c = i,
    l.d = function(e, t, a) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (l.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                l.d(a, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return a
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || []
      , o = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var r = 0; r < u.length; r++)
        t(u[r]);
    var d = o;
    n.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "05c8": function(e, t, a) {},
    "227c": function(e, t, a) {
        "use strict";
        var i = a("7c9c")
          , s = a.n(i);
        s.a
    },
    "23de": function(e, t, a) {
        "use strict";
        var i = a("5ce2")
          , s = a.n(i);
        s.a
    },
    "2b0a": function(e, t, a) {
        "use strict";
        var i = a("4ad3")
          , s = a.n(i);
        s.a
    },
    "3fb8": function(e, t, a) {},
    4056: function(e, t, a) {},
    4837: function(e, t, a) {
        "use strict";
        var i = a("c0a2")
          , s = a.n(i);
        s.a
    },
    "4ad3": function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var i = a("2b0e")
          , s = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "app",
                class: {
                    "disable-ui": e.isUIdisabled,
                    "is-loaded": e.isLoad,
                    "is-started": e.isStarted,
                    "is-yandex": "yandex" === e.companyStyle,
                    "is-disney": "disney" === e.companyStyle,
                    "is-apple": "apple" === e.companyStyle,
                    "flat-tansitions": e.flatTransitions
                },
                attrs: {
                    id: "app"
                },
                on: {
                    mouseup: e.globalMouseup
                }
            }, [a("div", {
                staticClass: "app__content content content-block full-height desktop-only",
                class: {
                    "is-hidden": !e.isStarted
                }
            }, [a("div", {
                staticClass: "content-block__inner"
            }, [e.isStart ? a("start", {
                attrs: {
                    appleBalance: e.appleBalance,
                    applePlace: e.applePlace,
                    yandexBalance: e.yandexBalance,
                    yandexPlace: e.yandexPlace,
                    disneyBalance: e.disneyBalance,
                    disneyPlace: e.disneyPlace
                }
            }) : e._e(), e.isGame ? a("game", {
                attrs: {
                    company: e.company
                }
            }) : e._e(), e.isEnd ? a("finish", {
                attrs: {
                    balance: e.balance,
                    list: e.list,
                    deals: e.deals,
                    companyName: e.companyName,
                    id: e.currentSubsiteId,
                    networks: e.shareNetworks
                }
            }) : e._e()], 1)]), a("div", {
                staticClass: "a1 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                staticClass: "a2 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                staticClass: "a3 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                staticClass: "a4 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                staticClass: "a5 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                staticClass: "a6 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                staticClass: "a7 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                staticClass: "a8 bg-block content-block background",
                class: {
                    "is-hidden": !e.isStarted
                }
            }), a("div", {
                class: {
                    "is-hidden": "game" !== e.state,
                    "is-debug": e.isDebugging
                },
                attrs: {
                    id: "debug"
                },
                on: {
                    click: e.gameOverDebug
                }
            }, [e._v("Сделать так, чтобы до конца игры осталось 5 сек.")]), a("div", {
                class: {
                    "is-hidden": "game" !== e.state,
                    "is-debug": e.isDebugging
                },
                attrs: {
                    id: "debug-forward"
                },
                on: {
                    click: e.speedX10
                }
            }, [e._v("Скорость x10")])])
        }
          , n = []
          , l = (a("d3b7"),
        a("c975"),
        a("d81d"),
        a("ac1f"),
        a("25f0"),
        a("3ca3"),
        a("5319"),
        a("ddb0"),
        function(e) {
            return Promise.all(e.map((function(e) {
                return new Promise((function(t) {
                    var a = new Image;
                    a.onload = t,
                    a.src = e
                }
                ))
            }
            )))
        }
        )
          , u = ["https://leonardo.osnova.io/10876151-67a5-975b-5c0c-4b762789b0ec/"]
          , o = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "start",
                class: {
                    "is-hidden": !e.isStarted
                },
                style: e.cssVars
            }, [a("logo", {
                staticClass: "start__logo",
                attrs: {
                    eventName: "Logo (start)"
                }
            }), a("div", {
                staticClass: "start__title",
                domProps: {
                    innerHTML: e._s("Инвестор из&nbsp;будущего")
                }
            }), a("div", {
                staticClass: "start__content content-block small-shadow desktop-only"
            }, [a("div", {
                staticClass: "start__inner content-block__inner"
            }, [a("div", {
                staticClass: "start__info"
            }, [a("p", [a("b", {
                domProps: {
                    innerHTML: e._s("Вы&nbsp;вернулись в&nbsp;2011 год и&nbsp;можете заработать на&nbsp;акциях Apple, Disney или&nbsp;&laquo;Яндекса&raquo;.")
                }
            })]), a("p", {
                domProps: {
                    innerHTML: e._s("Ваш стартовый капитал&nbsp;&mdash; $1000. Покупайте и&nbsp;продавайте акции, следя за&nbsp;графиком котировок. Управлять активами помогут подсказки &mdash;&nbsp;ключевые события в&nbsp;истории компании за&nbsp;последние 10&nbsp;лет.")
                }
            }), a("p", {
                domProps: {
                    innerHTML: e._s("В&nbsp;конце посчитаем ваше состояние в&nbsp;долларах. По&nbsp;каждой компании &mdash;&nbsp;отдельная турнирная таблица. В&nbsp;зачёт пойдёт результат первой попытки.")
                }
            }), a("p", {
                domProps: {
                    innerHTML: e._s("Во&nbsp;что инвестируете?")
                }
            }), a("div", {
                staticClass: "start__buttons",
                class: {
                    "start__buttons--stats": e.hasStats
                }
            }, [a("div", {
                staticClass: "start__button-wrapper start-button-wrapper",
                class: {
                    "start-button-wrapper--stats": e.hasAppleStats
                }
            }, [a("button", {
                staticClass: "start__button appl",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.startGameApple
                }
            }, [e._v("Apple")]), e.hasAppleStats ? a("div", {
                staticClass: "start-button-wrapper__info"
            }, [e.applePlace ? a("div", {
                staticClass: "start-button-wrapper__place"
            }, [a("span", {
                domProps: {
                    innerHTML: e._s(e.applePlaceFormatted)
                }
            })]) : e._e(), a("div", {
                staticClass: "start-button-wrapper__balance",
                class: {
                    "is-zero": e.isAppleZero
                },
                domProps: {
                    innerHTML: e._s(e.appleBalanceFormatted)
                }
            })]) : e._e()]), a("div", {
                staticClass: "start__button-wrapper start-button-wrapper",
                class: {
                    "start-button-wrapper--stats": e.hasDisneyStats
                }
            }, [a("button", {
                staticClass: "start__button dis",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.startGameDisney
                }
            }, [e._v("Disney")]), e.hasDisneyStats ? a("div", {
                staticClass: "start-button-wrapper__info"
            }, [e.disneyPlace ? a("div", {
                staticClass: "start-button-wrapper__place"
            }, [a("span", {
                domProps: {
                    innerHTML: e._s(e.disneyPlaceFormatted)
                }
            })]) : e._e(), a("div", {
                staticClass: "start-button-wrapper__balance",
                class: {
                    "is-zero": e.isDisneyZero
                },
                domProps: {
                    innerHTML: e._s(e.disneyBalanceFormatted)
                }
            })]) : e._e()]), a("div", {
                staticClass: "start__button-wrapper start-button-wrapper",
                class: {
                    "start-button-wrapper--stats": e.hasYandexStats
                }
            }, [a("button", {
                staticClass: "start__button yndx",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.startGameYandex
                }
            }, [e._v("Яндекс")]), e.hasYandexStats ? a("div", {
                staticClass: "start-button-wrapper__info"
            }, [e.yandexPlace ? a("div", {
                staticClass: "start-button-wrapper__place"
            }, [a("span", {
                domProps: {
                    innerHTML: e._s(e.yandexPlaceFormatted)
                }
            })]) : e._e(), a("div", {
                staticClass: "start-button-wrapper__balance",
                class: {
                    "is-zero": e.isYandexZero
                },
                domProps: {
                    innerHTML: e._s(e.yandexBalanceFormatted)
                }
            })]) : e._e()])])]), e._m(0)])])], 1)
        }
          , r = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "start__quotes content-block small-shadow no-bg"
            }, [a("div", {
                staticClass: "content-block__inner"
            })])
        }
        ]
          , d = (a("a9e3"),
        a("b680"),
        function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("a", {
                staticClass: "logo",
                attrs: {
                    href: "https://clck.ru/NwH2f",
                    target: "_blank"
                },
                domProps: {
                    innerHTML: e._s(e.icon)
                },
                on: {
                    click: e.clickLogo
                }
            })
        }
        )
          , h = []
          , v = (a("99af"),
        {
            name: "CurrencyGame",
            analyticsCategory: "Currency-Game",
            sendPageView: !1,
            listenedEvents: ["click"]
        })
          , c = "color: #E87E04"
          , f = !0
          , p = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Click"
              , a = "".concat(v.analyticsCategory, " — ").concat(e, " — ").concat(t);
            f || console.log("Analytics: %c".concat(a), c),
            void 0 !== window.dataLayer && v.analyticsCategory && window.dataLayer.push({
                event: "data_event",
                data_description: a
            })
        }
          , m = {
            logo: '<svg viewBox="0 0 94 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="logo-title" d="M5.7 46.749a2.075 2.075 0 00-1.864-1.136c-1.14 0-2.063.89-2.063 1.986s.923 1.987 2.063 1.987a2.07 2.07 0 001.802-1.021h1.895c-.44 1.567-1.928 2.722-3.7 2.722-2.117 0-3.833-1.65-3.833-3.684 0-2.033 1.716-3.683 3.832-3.683 1.81 0 3.33 1.21 3.73 2.837H5.699v-.008zM70.836 46.748a2.075 2.075 0 00-1.863-1.135c-1.14 0-2.063.89-2.063 1.986s.923 1.986 2.063 1.986a2.07 2.07 0 001.802-1.021h1.895c-.44 1.567-1.928 2.722-3.701 2.722-2.116 0-3.832-1.65-3.832-3.683 0-2.034 1.716-3.684 3.832-3.684 1.81 0 3.33 1.21 3.73 2.837h-1.863v-.008zM80.845 45.74a3.803 3.803 0 00-3.321-1.829 3.8 3.8 0 00-3.31 1.832 3.613 3.613 0 000 3.707c.683 1.148 1.95 1.844 3.31 1.832 1.364.02 2.635-.676 3.321-1.828a3.59 3.59 0 000-3.715zm-3.321 3.84c-1.124 0-2.035-.89-2.035-1.985 0-1.096.911-1.986 2.035-1.986 1.123 0 2.034.89 2.034 1.986s-.907 1.986-2.034 1.986zM51.41 46.748a2.075 2.075 0 00-1.863-1.135c-1.14 0-2.063.89-2.063 1.986s.923 1.986 2.063 1.986a2.07 2.07 0 001.802-1.021h1.896c-.442 1.567-1.929 2.722-3.698 2.722-2.116 0-3.832-1.65-3.832-3.683 0-2.034 1.716-3.684 3.832-3.684 1.81 0 3.33 1.21 3.73 2.837H51.41v-.008zM59.81 43.911h1.993L57.354 54H55.37l1.364-3.086-2.917-7.003h2.1l1.806 4.803 2.088-4.803zM10.414 43.911v3.668c0 1.1.91 1.994 2.034 1.994.368 0 .736-.04 1.107-.115v-5.547H15.3v7.03c-.621.226-1.57.341-2.852.341-2.088 0-3.779-1.658-3.779-3.703V43.91h1.745zM42.806 51.282v-3.667c0-1.1-.91-1.995-2.034-1.995-.368 0-.736.04-1.107.115v5.547H37.92v-7.03c.621-.226 1.57-.34 2.852-.34 2.087 0 3.779 1.657 3.779 3.703v3.667h-1.745zM90.221 44.002a3.04 3.04 0 00-2.3 1.025c-.666-.578-1.638-1.116-2.598-1.116-1.279 0-2.23.115-2.852.34v7.031h1.745v-5.547c.371-.075.74-.114 1.107-.114 1.123 0 2.034.894 2.034 1.993v3.668h1.745v-4.854c0-.368.584-.716 1.12-.716 1.123 0 2.034.894 2.034 1.993v3.668H94v-3.667c0-2.042-1.691-3.704-3.779-3.704zM19.14 51.254h-1.745v-3.608c0-2.061 1.692-3.735 3.78-3.735h.93v1.725h-.93c-1.124 0-2.035.902-2.035 2.01v3.608zM24.953 51.254H23.21v-3.608c0-2.061 1.691-3.735 3.779-3.735h.931v1.725h-.931c-1.123 0-2.035.902-2.035 2.01v3.608zM35.735 45.134a3.826 3.826 0 00-2.815-1.223c-2.088 0-3.78 1.65-3.78 3.684 0 1.756 1.276 3.268 3.04 3.612 1.765.344 3.538-.574 4.233-2.196h-2.067a2.068 2.068 0 01-2.023.479 1.995 1.995 0 01-1.397-1.5h5.752a3.637 3.637 0 00-.943-2.856zm-4.654 1.614a2.04 2.04 0 011.839-1.135c.788 0 1.503.443 1.838 1.135h-3.677zM62.698 48.56a.919.919 0 00.931-.906c0-.5-.416-.906-.93-.906a.919.919 0 00-.932.906c0 .5.417.906.931.906z"/><path d="M39.093 1.935L41.11 6.8c-3.223 1.927-5.368 5.384-5.368 9.337 0 6.041 5.02 10.935 11.218 10.935.838 0 1.655-.09 2.443-.26l2.018 4.865c-1.45.396-2.95.594-4.457.594-9.147 0-16.558-7.224-16.558-16.134 0-6.136 3.514-11.473 8.686-14.203z" fill="#FE4040"/><path d="M39.093 1.935L41.11 6.8c-3.223 1.927-5.368 5.384-5.368 9.337 0 6.041 5.02 10.935 11.218 10.935.838 0 1.655-.09 2.443-.26l2.018 4.865c-1.45.396-2.95.594-4.457.594-9.147 0-16.558-7.224-16.558-16.134 0-6.136 3.514-11.473 8.686-14.203z" fill="#FE4040"/><path d="M46.957 21.875c-3.248 0-5.883-2.568-5.883-5.737 0-3.17 2.635-5.737 5.883-5.737 2.292 0 4.273 1.274 5.246 3.138h5.65c-1.197-4.788-5.622-8.336-10.9-8.336-.837 0-1.655.09-2.443.26L42.5.594C43.95.198 45.45 0 46.957 0c9.14 0 16.55 7.224 16.55 16.138 0 6.136-3.514 11.47-8.681 14.2l-2.019-4.867c2.488-1.488 4.339-3.893 5.05-6.734h-5.65a5.818 5.818 0 01-1.446 1.78 5.977 5.977 0 01-3.804 1.358z" fill="#00C46B"/></svg>',
            pause: '<svg viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.863 0A.863.863 0 000 .863v13.274c0 .477.386.863.863.863h3.001a.863.863 0 00.863-.863V.863A.863.863 0 003.864 0H.863zm8.273 0a.863.863 0 00-.863.863v13.274c0 .477.386.863.863.863h3.001a.863.863 0 00.863-.863V.863A.863.863 0 0012.137 0H9.136z" /></svg>',
            play: '<svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_di)"><path d="M11.66 5.933L.993.083a.683.683 0 00-.662.005A.647.647 0 000 .65v11.7c0 .231.125.445.33.562a.686.686 0 00.663.005l10.667-5.85A.65.65 0 0012 6.5a.65.65 0 00-.34-.567z" fill="#838395"/></g><defs><filter id="filter0_di" x="0" y="0" width="12" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.377101 0 0 0 0 0.377101 0 0 0 0 0.445833 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow"/></filter></defs></svg>',
            playDisabled: '<svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_di)"><path d="M11.66 5.933L.993.083a.683.683 0 00-.662.005A.647.647 0 000 .65v11.7c0 .231.125.445.33.562a.686.686 0 00.663.005l10.667-5.85A.65.65 0 0012 6.5a.65.65 0 00-.34-.567z" fill="#B2B2C3"/></g><defs><filter id="filter0_di" x="0" y="0" width="12" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.581979 0 0 0 0 0.581979 0 0 0 0 0.629167 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow"/></filter></defs></svg>',
            playActive: '<svg viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.66 5.933L.993.083a.683.683 0 00-.662.005A.647.647 0 000 .65v11.7c0 .231.125.445.33.562a.686.686 0 00.663.005l10.667-5.85A.65.65 0 0012 6.5a.65.65 0 00-.34-.567z"/></svg>',
            again: '<svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.534 11.033a.826.826 0 00-1.094.403c-1.118 2.391-3.494 3.93-6.079 3.93-3.703-.023-6.73-3.078-6.73-6.866s3.027-6.843 6.73-6.843c1.304 0 2.562.38 3.633 1.09l-1.49 1.515a.589.589 0 00.419.994h3.982c.326 0 .583-.26.583-.592V.616c0-.237-.14-.45-.35-.545a.565.565 0 00-.629.118l-1.327 1.35A8.3 8.3 0 008.361 0C3.75 0 0 3.812 0 8.5 0 13.188 3.75 17 8.361 17c3.214 0 6.195-1.918 7.57-4.877a.818.818 0 00-.397-1.09z"/></svg>',
            forwardDisabled: '<svg viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.977v4.373c0 .231.125.445.33.562a.686.686 0 00.663.005l10.667-5.85A.65.65 0 0022 6.5a.65.65 0 00-.34-.567L10.993.083a.683.683 0 00-.662.005A.646.646 0 0010 .65v4.373L.993.083a.683.683 0 00-.662.005A.647.647 0 000 .65v11.7c0 .231.125.445.33.562a.686.686 0 00.663.005L10 7.977z" fill="#B2B2C4"/></svg>',
            forward: '<svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_di)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.977v4.373c0 .231.125.445.33.562a.686.686 0 00.663.005l10.667-5.85A.65.65 0 0022 6.5a.65.65 0 00-.34-.567L10.993.083a.683.683 0 00-.662.005A.646.646 0 0010 .65v4.373L.993.083a.683.683 0 00-.662.005A.647.647 0 000 .65v11.7c0 .231.125.445.33.562a.686.686 0 00.663.005L10 7.977z" fill="#838395"/></g><defs><filter id="filter0_di" x="0" y="0" width="22" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.377101 0 0 0 0 0.377101 0 0 0 0 0.445833 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow"/></filter></defs></svg>',
            forwardActive: '<svg viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.977v4.373c0 .231.125.445.33.562a.686.686 0 00.663.005l10.667-5.85A.65.65 0 0022 6.5a.65.65 0 00-.34-.567L10.993.083a.683.683 0 00-.662.005A.646.646 0 0010 .65v4.373L.993.083a.683.683 0 00-.662.005A.647.647 0 000 .65v11.7c0 .231.125.445.33.562a.686.686 0 00.663.005L10 7.977z"/></svg>',
            plus: '<svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1a1 1 0 10-2 0v5H1a1 1 0 000 2h5v5a1 1 0 102 0V8h5a1 1 0 100-2H8V1z"></g><defs><filter id="filter0_di" x="0" y="0" width="14" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.377101 0 0 0 0 0.377101 0 0 0 0 0.445833 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow"/></filter></defs></svg>',
            minus: '<svg viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg"><g><rect width="15" height="2" rx="1"/></g><defs><filter id="filter0_di" x="0" y="0" width="15" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix values="0 0 0 0 0.377101 0 0 0 0 0.377101 0 0 0 0 0.445833 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow"/></filter></defs></svg>',
            resize: '<svg width="19" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.227 0l-.902.952 2.27 2.378H2.405L4.674.952 3.775 0 0 4l3.773 4 .902-.952-2.27-2.378H16.595l-2.27 2.378.9.952L19 4l-3.773-4z" fill="#E5E6EC"/></svg>',
            facebook: '<svg width="12" height="21" viewBox="0 0 12 21"><g clip-path="url(#clip0)"><path d="M11.1973 0.727295H8.56621C5.61936 0.727295 3.7039 2.61879 3.7039 5.54756V7.76447H1.09383C0.862292 7.76447 0.672852 7.94752 0.672852 8.17125V11.3848C0.672852 11.6085 0.862292 11.7915 1.09383 11.7915H3.72495V19.9067C3.72495 20.1304 3.91439 20.3134 4.14593 20.3134H7.59796C7.8295 20.3134 8.01894 20.1304 8.01894 19.9067V11.7712H11.1131C11.3447 11.7712 11.5341 11.5881 11.5341 11.3644V8.15091C11.5341 8.04922 11.492 7.94752 11.4078 7.86617C11.3236 7.78481 11.2184 7.74414 11.1131 7.74414H7.99789V5.87298C7.99789 4.97808 8.22942 4.51029 9.42921 4.51029H11.1973C11.4289 4.51029 11.6183 4.32724 11.6183 4.10351V1.13407C11.6183 0.910343 11.4289 0.727295 11.1973 0.727295Z"/></g><defs><clipPath id="clip0"><rect x="0.672852" y="0.727295" width="10.9455" height="19.5455" fill="white"/></clipPath></defs></svg>',
            vk: '<svg width="21" height="13" viewBox="0 0 21 13"><path d="M20.0945 11.1404C20.0635 11.0915 20.048 11.0427 20.0325 11.0101C19.6912 10.3749 19.0552 9.59305 18.1089 8.66464L18.0934 8.64835L18.0779 8.63207L18.0624 8.61578H18.0469C17.6125 8.17601 17.3488 7.89911 17.2247 7.75252C17.0231 7.47563 16.961 7.18245 17.0851 6.88926C17.1627 6.67752 17.4729 6.20517 18.0004 5.50479C18.2796 5.13017 18.4967 4.83699 18.6519 4.60896C19.8153 2.98017 20.3272 1.93775 20.1721 1.48169L20.11 1.38396C20.0635 1.31881 19.9704 1.25366 19.7998 1.20479C19.6291 1.15593 19.412 1.13964 19.1483 1.17222L16.2475 1.18851C16.2009 1.17222 16.1389 1.17222 16.0458 1.18851C15.9527 1.20479 15.9062 1.22108 15.9062 1.22108L15.8597 1.25366L15.8131 1.28623C15.7821 1.30252 15.7356 1.35138 15.7045 1.40025C15.658 1.44911 15.627 1.51426 15.6115 1.57941C15.3012 2.44267 14.9289 3.22449 14.5256 3.97373C14.2774 4.41351 14.0447 4.78813 13.8431 5.11388C13.6414 5.43964 13.4553 5.66767 13.3156 5.83055C13.176 5.97714 13.0519 6.10744 12.9278 6.18888C12.8193 6.28661 12.7262 6.31919 12.6641 6.3029C12.6021 6.28661 12.54 6.27032 12.4935 6.25404C12.4004 6.18888 12.3229 6.10745 12.2608 5.99343C12.1988 5.87941 12.1677 5.74911 12.1367 5.58623C12.1212 5.42335 12.1057 5.27676 12.1057 5.16275C12.1057 5.04873 12.1057 4.86957 12.1057 4.65782C12.1057 4.44608 12.1212 4.2832 12.1212 4.21805C12.1212 3.94116 12.1212 3.66426 12.1367 3.33851C12.1522 3.02904 12.1522 2.76843 12.1677 2.58926C12.1677 2.4101 12.1833 2.21464 12.1833 2.0029C12.1833 1.79116 12.1677 1.64457 12.1522 1.51426C12.1367 1.40025 12.0902 1.28623 12.0436 1.17222C11.9971 1.0582 11.9195 0.976763 11.842 0.911611C11.7489 0.84646 11.6403 0.797596 11.5007 0.76502C11.1439 0.683581 10.6941 0.634717 10.1356 0.634717C8.86363 0.618429 8.0725 0.699869 7.70021 0.895323C7.5606 0.976763 7.4365 1.07449 7.3124 1.22108C7.1883 1.38396 7.17279 1.4654 7.26587 1.48169C7.66918 1.54684 7.96392 1.69343 8.11904 1.93775L8.18109 2.06805C8.22763 2.16578 8.27416 2.32866 8.3207 2.55669C8.36724 2.78472 8.39826 3.04532 8.41377 3.33851C8.4448 3.85972 8.4448 4.29949 8.41377 4.65782C8.38275 5.03244 8.35172 5.30934 8.3207 5.52108C8.28968 5.73282 8.24314 5.8957 8.18109 6.02601C8.11904 6.15631 8.0725 6.23775 8.05699 6.25404C8.04148 6.28661 8.02597 6.3029 8.01045 6.3029C7.91738 6.33547 7.82431 6.35176 7.73123 6.35176C7.63816 6.35176 7.52957 6.3029 7.38996 6.20517C7.25035 6.10744 7.11074 5.97714 6.97113 5.79798C6.83152 5.61881 6.66089 5.39078 6.47474 5.06502C6.28859 4.75555 6.10245 4.38093 5.9163 3.95744L5.76118 3.64797C5.65259 3.45252 5.52849 3.15934 5.34234 2.78472C5.17171 2.4101 5.01659 2.03547 4.87698 1.69343C4.83044 1.54684 4.73737 1.43282 4.62878 1.35138L4.58224 1.31881C4.55122 1.28623 4.48917 1.25366 4.42712 1.22108C4.34956 1.1885 4.272 1.17222 4.19444 1.15593L1.43325 1.17222C1.15403 1.17222 0.952373 1.23737 0.8593 1.36767L0.812763 1.43282C0.797251 1.4654 0.781738 1.53055 0.781738 1.5957C0.781738 1.67714 0.797251 1.77487 0.843787 1.88888C1.24711 2.88244 1.68145 3.84343 2.16233 4.77184C2.64321 5.70025 3.04653 6.44949 3.40331 7.01957C3.76009 7.58964 4.11688 8.12714 4.47366 8.61578C4.83044 9.1207 5.07864 9.44646 5.20273 9.57676C5.32683 9.72335 5.41991 9.82108 5.48196 9.90252L5.73015 10.1631C5.88527 10.326 6.13347 10.5377 6.44372 10.7658C6.75396 11.0101 7.11074 11.2381 7.48304 11.4662C7.87084 11.6942 8.30519 11.8896 8.81709 12.0362C9.329 12.1828 9.80988 12.248 10.2908 12.2154H11.4542C11.6869 12.1991 11.873 12.1177 11.9971 11.9874L12.0436 11.9385C12.0747 11.8896 12.0902 11.8245 12.1212 11.7431C12.1522 11.6616 12.1522 11.5639 12.1522 11.4499C12.1522 11.1404 12.1677 10.8635 12.2143 10.6192C12.2608 10.3749 12.3229 10.1957 12.3849 10.0654C12.447 9.9351 12.5245 9.83737 12.6021 9.75593C12.6796 9.67449 12.7417 9.62563 12.7727 9.60934C12.8037 9.59305 12.8348 9.57676 12.8503 9.57676C13.0054 9.5279 13.2071 9.57676 13.4242 9.73964C13.6414 9.90252 13.8431 10.1143 14.0447 10.3586C14.2309 10.6029 14.4636 10.8798 14.7428 11.1893C15.0065 11.4987 15.2547 11.7268 15.4563 11.8734L15.658 12.0037C15.7976 12.0851 15.9682 12.1665 16.1854 12.2317C16.4026 12.2968 16.5887 12.3131 16.7439 12.2806L19.3344 12.2317C19.5826 12.2317 19.7843 12.1828 19.9239 12.1014C20.0635 12.0199 20.1566 11.9222 20.1721 11.8082C20.2031 11.6942 20.2031 11.5802 20.1721 11.4499C20.141 11.287 20.1255 11.1893 20.0945 11.1404Z"/></svg>',
            twitter: '<svg width="18" height="15" viewBox="0 0 18 15"><path d="M17.5102 2.42668C16.8779 2.69405 16.1977 2.87586 15.4839 2.95607C16.2118 2.54165 16.7711 1.88125 17.0352 1.10053C16.3523 1.48554 15.5963 1.76361 14.7925 1.91601C14.1489 1.26095 13.2327 0.854553 12.2181 0.854553C10.2705 0.854553 8.68817 2.35716 8.68817 4.21003C8.68817 4.47205 8.71908 4.72872 8.78091 4.9747C5.8496 4.83567 3.24992 3.49883 1.50744 1.46683C1.20391 1.96413 1.03247 2.53897 1.03247 3.15392C1.03247 4.31965 1.65639 5.34634 2.60071 5.94792C2.02175 5.9292 1.47933 5.77948 1.00155 5.52548V5.56826C1.00155 7.19386 2.21848 8.55209 3.83169 8.85956C3.53659 8.93442 3.22463 8.9772 2.90142 8.9772C2.67378 8.9772 2.45456 8.95581 2.23816 8.91571C2.68783 10.2499 3.98907 11.2204 5.53483 11.2472C4.32914 12.1482 2.80587 12.6829 1.15332 12.6829C0.86946 12.6829 0.588414 12.6669 0.312988 12.6375C1.87561 13.592 3.7277 14.1481 5.72032 14.1481C12.2097 14.1481 15.7593 9.03335 15.7593 4.59771L15.7481 4.1619C16.4394 3.69133 17.0381 3.10045 17.5102 2.42668Z"/></svg>',
            money1: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 17"><defs/><g filter="url(#filter0_d_money1)"><path fill="url(#paint0_linear_money1)" d="M7.88759 9.35384c-.0742-.25126-.16423-.46995-.26997-.65566-.10568-.18589-.25704-.36721-.45437-.54458-.19709-.17727-.37439-.32003-.5316-.42857-.15712-.10862-.37296-.23006-.64738-.36448-.27418-.13439-.49142-.23439-.65134-.30016-.16012-.06568-.39175-.15571-.69473-.27003-.26862-.10283-.46863-.18145-.60022-.23572-.13145-.05432-.30431-.13144-.51867-.23153-.21427-.09995-.37433-.1886-.4801-.26572-.10574-.07712-.21859-.17141-.33866-.28286-.12006-.11144-.20436-.23006-.25298-.3558-.04849-.12577-.07282-.26298-.07282-.4116 0-.3886.17142-.70594.51437-.95165.34298-.24571.78602-.36863 1.32907-.36863.23995 0 .48458.03283.73305.09862.24848.0658.46143.13992.63864.22286.17736.08295.34448.17442.50172.27439.15721.10007.26863.17574.33443.22719.06573.05147.10739.08573.12435.10291.07442.05715.15139.07712.23142.06003.08571-.0057.15151-.0515.19733-.13715l.69462-1.2518c.06856-.11427.05438-.22289-.04286-.32584-.03435-.03429-.07706-.07426-.12886-.12003-.05129-.04577-.1628-.12862-.33442-.24871-.17145-.12001-.35293-.22719-.54428-.32151-.19157-.09424-.44028-.19004-.74612-.28716-.30565-.09727-.62154-.16295-.94744-.19721V.274361c0-.079972-.02568-.145739-.07697-.1972119C4.80139.0257965 4.73562 0 4.65547 0H3.4979c-.07429 0-.13859.0271178-.19289.0814435-.05429.0543255-.08144.1185915-.08144.1929175V1.81767c-.89744.17142-1.62623.5544-2.18639 1.14886-.560107.59449-.840264 1.28601-.840264 2.07489 0 .23433.024385.45725.072975.66864.04853.21156.108591.40163.180064.57022.071414.16872.172918.33443.304363.49737.131445.16289.255802.30295.372952.42007.11721.11709.27013.2386.45869.36431.18868.12583.35016.22736.48452.30448.13439.07688.31298.16577.53584.26556.22292.10009.39875.17574.52737.2273.12862.05139.30436.12292.52737.21418.30863.12004.53731.21295.6859.27872.14872.06577.33728.15721.56605.27439.22857.11706.39569.22427.50152.32148.10574.09721.20145.21724.28724.3601.0858.14286.12877.29436.12877.45446 0 .4516-.17577.8002-.5274 1.0458-.35148.2458-.75887.3687-1.2218.3687-.2113 0-.42295-.0227-.63437-.0684-.74308-.1488-1.43754-.5061-2.08345-1.0719l-.01714-.0172c-.05148-.0627-.1201-.0884-.20575-.0769-.09147.0114-.157237.0457-.197208.103l-.8831463 1.1574c-.085768.1143-.0799718.2314.0171778.3514.0286195.0344.0786205.0859.1500345.1544.071593.0687.204509.1757.398749.3218.194299.1458.405803.2828.634493.4116.22865.1285.51869.2557.87029.3815.3516.1255.7159.2141 1.09318.2655v1.5004c0 .0745.02718.1387.08144.1931.05433.0543.1186.0814.19289.0814H4.6561c.08015 0 .14592-.0257.1973-.0771.05139-.0514.07697-.1171.07697-.1973v-1.5005c.909-.1485 1.64779-.5387 2.21645-1.1703C7.71555 11.7875 8 11.0344 8 10.1599c-.0003-.28574-.03739-.5544-.11241-.80606z"/></g><defs><linearGradient id="paint0_linear_money1" x1="4" x2="4" y1="0" y2="15.3643" gradientUnits="userSpaceOnUse"><stop stop-color="#A4A4B1"/><stop offset=".833333" stop-color="#C1C1D0"/></linearGradient><filter id="filter0_d_money1" width="8" height="16.3643" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
            stock1: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16"><defs/><g filter="url(#filter0_d_stock1)"><path fill="url(#paint0_linear_stock1)" d="M17.5991 5.77041L9.41727 1.10115c-.25363-.140076-.56454-.140076-.81818 0L.417273 5.77041C.163636 5.91049 0 6.1673 0 6.43967v.77821c0 .42802.368182.77821.818182.77821h.818178v5.44751H.818182c-.45 0-.818182.3502-.818182.7782S.368182 15 .818182 15H17.1818c.45 0 .8182-.3502.8182-.7782s-.3682-.7782-.8182-.7782h-.8182V7.99609h.8182c.45 0 .8182-.35019.8182-.77821v-.77821c0-.27237-.1555-.52918-.4009-.66926zM4.90909 13.4436H3.27273V7.99609h1.63636v5.44751zm3.27273 0H6.54545V7.99609h1.63637v5.44751zm3.27268 0H9.81818V7.99609h1.63632v5.44751zm3.2728 0h-1.6364V7.99609h1.6364v5.44751zM2.40545 6.43967L9 2.68092l6.5945 3.75875H2.40545z"/></g><defs><linearGradient id="paint0_linear_stock1" x1="9" x2="9" y1=".996094" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#A4A4B1"/><stop offset=".833333" stop-color="#C1C1D0"/></linearGradient><filter id="filter0_d_stock1" width="18" height="15.0039" x="0" y=".996094" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
            total1: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 17"><defs/><g filter="url(#filter0_d_total1)"><path fill="url(#paint0_linear_total1)" fill-rule="evenodd" d="M1.5 4.47452h4.19712l.00283.00001H12.3l.0021-.00001H16.5V6.4425c-.5604.28672-1.8875.88367-3.8249 1.2465v-.25551c0-.43302-.3-.7217-.75-.7217s-.75.28868-.75.7217v.46893c-1.27198.12532-2.73171.13103-4.3499-.08501v-.38392c0-.43302-.3-.7217-.75-.7217s-.75.28868-.75.7217V7.56C4.12089 7.30767 2.84242 6.93023 1.5 6.39206V4.47452zM5.3252 9.0289C4.12262 8.78511 2.84756 8.42535 1.5 7.92163v5.93497h15V8.05987c-.8475.36701-2.1484.83175-3.8249 1.12111v.34543c0 .43302-.3.72169-.75.72169s-.75-.28867-.75-.72169v-.14916c-.5459.04912-1.1215.07701-1.72504.07701-.82756 0-1.70251-.05321-2.62486-.17442v.24657c0 .43302-.3.72169-.75.72169s-.75-.28867-.75-.72169V9.0289zM13.05 2.02075v1.01038h4.2c.45 0 .75.28868.75.7217V14.5783c0 .3608-.3.7217-.75.7217H.75c-.45 0-.75-.2887-.75-.7217V3.75283c0-.43302.3-.7217.75-.7217h4.19995V2.02075c0-1.082543.975-2.02075 2.1-2.02075H10.95c1.125 0 2.1.938207 2.1 2.02075zm-1.5 0v1.01038H6.44995V2.02075c0-.28867.3-.57735.6-.57735H10.95c.3 0 .6.28868.6.57735z" clip-rule="evenodd"/></g><defs><linearGradient id="paint0_linear_total1" x1="9" x2="9" y1="0" y2="15.3" gradientUnits="userSpaceOnUse"><stop stop-color="#A4A4B1"/><stop offset=".833333" stop-color="#C1C1D0"/></linearGradient><filter id="filter0_d_total1" width="18" height="16.3" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
            money2: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 17"><defs/><g filter="url(#filter0_d_money2)"><path fill="#6D6D71" d="M7.88759 9.35384c-.0742-.25126-.16423-.46995-.26997-.65566-.10568-.18589-.25704-.36721-.45437-.54458-.19709-.17727-.37439-.32003-.5316-.42857-.15712-.10862-.37296-.23006-.64738-.36448-.27418-.13439-.49142-.23439-.65134-.30016-.16012-.06568-.39175-.15571-.69473-.27003-.26862-.10283-.46863-.18145-.60022-.23572-.13145-.05432-.30431-.13144-.51867-.23153-.21427-.09995-.37433-.1886-.4801-.26572-.10574-.07712-.21859-.17141-.33866-.28286-.12006-.11144-.20436-.23006-.25298-.3558-.04849-.12577-.07282-.26298-.07282-.4116 0-.3886.17142-.70594.51437-.95165.34298-.24571.78602-.36863 1.32907-.36863.23995 0 .48458.03283.73305.09862.24848.0658.46143.13992.63864.22286.17736.08295.34448.17442.50172.27439.15721.10007.26863.17574.33443.22719.06573.05147.10739.08573.12435.10291.07442.05715.15139.07712.23142.06003.08571-.0057.15151-.0515.19733-.13715l.69462-1.2518c.06856-.11427.05438-.22289-.04286-.32584-.03435-.03429-.07706-.07426-.12886-.12003-.05129-.04577-.1628-.12862-.33442-.24871-.17145-.12001-.35293-.22719-.54428-.32151-.19157-.09424-.44028-.19004-.74612-.28716-.30565-.09727-.62154-.16295-.94744-.19721V.274361c0-.079972-.02568-.145739-.07697-.1972119C4.80139.0257965 4.73562 0 4.65547 0H3.4979c-.07429 0-.13859.0271178-.19289.0814435-.05429.0543255-.08144.1185915-.08144.1929175V1.81767c-.89744.17142-1.62623.5544-2.18639 1.14886-.560107.59449-.840264 1.28601-.840264 2.07489 0 .23433.024385.45725.072975.66864.04853.21156.108591.40163.180064.57022.071414.16872.172918.33443.304363.49737.131445.16289.255802.30295.372952.42007.11721.11709.27013.2386.45869.36431.18868.12583.35016.22736.48452.30448.13439.07688.31298.16577.53584.26556.22292.10009.39875.17574.52737.2273.12862.05139.30436.12292.52737.21418.30863.12004.53731.21295.6859.27872.14872.06577.33728.15721.56605.27439.22857.11706.39569.22427.50152.32148.10574.09721.20144.21724.28724.3601.0858.14286.12877.29436.12877.45446 0 .4516-.17577.8002-.5274 1.0458-.35148.2458-.75887.3687-1.2218.3687-.2113 0-.42295-.0227-.63437-.0684-.74308-.1488-1.43754-.5061-2.08345-1.0719l-.01714-.0172c-.05148-.0627-.1201-.0884-.20575-.0769-.09147.0114-.157237.0457-.197208.103l-.8831463 1.1574c-.085768.1143-.0799718.2314.0171778.3514.0286195.0344.0786205.0859.1500345.1544.071593.0687.204509.1757.398749.3218.194299.1458.405803.2828.634493.4116.22865.1285.51869.2557.87029.3815.3516.1255.7159.2141 1.09318.2655v1.5004c0 .0745.02718.1387.08144.1931.05433.0543.1186.0814.19289.0814H4.6561c.08015 0 .14592-.0257.1973-.0771.05139-.0514.07697-.1171.07697-.1973v-1.5005c.909-.1485 1.64779-.5387 2.21645-1.1703C7.71555 11.7875 8 11.0344 8 10.1599c-.0003-.28574-.03739-.5544-.11241-.80606z"/></g><defs><filter id="filter0_d_money2" width="8" height="16.3643" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
            stock2: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16"><defs/><g filter="url(#filter0_d_stock2)"><path fill="#6D6D71" d="M17.5991 5.77041L9.41727 1.10115c-.25363-.140076-.56454-.140076-.81818 0L.417273 5.77041C.163636 5.91049 0 6.1673 0 6.43967v.77821c0 .42802.368182.77821.818182.77821h.818178v5.44751H.818182c-.45 0-.818182.3502-.818182.7782S.368182 15 .818182 15H17.1818c.45 0 .8182-.3502.8182-.7782s-.3682-.7782-.8182-.7782h-.8182V7.99609h.8182c.45 0 .8182-.35019.8182-.77821v-.77821c0-.27237-.1555-.52918-.4009-.66926zM4.90909 13.4436H3.27273V7.99609h1.63636v5.44751zm3.27273 0H6.54545V7.99609h1.63637v5.44751zm3.27268 0H9.81818V7.99609h1.63632v5.44751zm3.2728 0h-1.6364V7.99609h1.6364v5.44751zM2.40545 6.43967L9 2.68092l6.5945 3.75875H2.40545z"/></g><defs><filter id="filter0_d_stock2" width="18" height="15.0039" x="0" y=".996094" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
            total2: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 17"><defs/><g filter="url(#filter0_d_total2)"><path fill="#6D6D71" fill-rule="evenodd" d="M1.5 4.47452h4.19712l.00283.00001H12.3l.0021-.00001H16.5V6.4425c-.5604.28672-1.8875.88367-3.8249 1.2465v-.25551c0-.43302-.3-.7217-.75-.7217s-.75.28868-.75.7217v.46893c-1.27198.12532-2.73171.13103-4.3499-.08501v-.38392c0-.43302-.3-.7217-.75-.7217s-.75.28868-.75.7217V7.56C4.12089 7.30767 2.84242 6.93023 1.5 6.39206V4.47452zM5.3252 9.0289C4.12262 8.78511 2.84756 8.42535 1.5 7.92163v5.93497h15V8.05987c-.8475.36701-2.1484.83175-3.8249 1.12111v.34543c0 .43302-.3.72169-.75.72169s-.75-.28867-.75-.72169v-.14916c-.5459.04912-1.1215.07701-1.72504.07701-.82756 0-1.70251-.05321-2.62486-.17442v.24657c0 .43302-.3.72169-.75.72169s-.75-.28867-.75-.72169V9.0289zM13.05 2.02075v1.01038h4.2c.45 0 .75.28868.75.7217V14.5783c0 .3608-.3.7217-.75.7217H.75c-.45 0-.75-.2887-.75-.7217V3.75283c0-.43302.3-.7217.75-.7217h4.19995V2.02075c0-1.082543.975-2.02075 2.1-2.02075H10.95c1.125 0 2.1.938207 2.1 2.02075zm-1.5 0v1.01038H6.44995V2.02075c0-.28867.3-.57735.6-.57735H10.95c.3 0 .6.28868.6.57735z" clip-rule="evenodd"/></g><defs><filter id="filter0_d_total2" width="18" height="16.3" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
            pointer: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="35"><path fill="#fff" d="M9 30v3.5l13 .5v-3.5l3-6V17l-.5-4.5-1-1.5H21l-1.5-2h-3L15 8l-2.5.5L12 4l-2-3-2.5 1.5V18l-5-3.5-2 2.5L9 30z"/><path d="M22.9362 9.88871c-.5349-.05043-1.0211.05042-1.4588.25209-.4376-1.26059-1.5074-2.21867-2.8689-2.26909-.6321-.05043-1.2156.10084-1.7505.40339-.5349-.95807-1.5074-1.61359-2.5771-1.71444-.4377-.05043-.8753.05042-1.2643.20169V3.48473c0-1.86573-1.3615-3.378477-3.06339-3.47932732C9.07796-.0450223 8.2027.257528 7.57057.913053 6.93844 1.51815 6.54944 2.4258 6.54944 3.33345V15.738l-.92389-.8572c-1.50738-1.2606-2.8689-1.5128-4.08453-.8068-.729382.4538-1.264261 1.2102-1.4587629 2.1178-.1945021.9077-.0486255 1.9162.4862539 2.723L8.15407 30.7647v3.1263c0 .6051.48626 1.1094 1.06976 1.1094H22.2068c.5835 0 1.0698-.5043 1.0698-1.1094v-4.1853l2.1881-4.1852c.389-.706.5349-1.4624.5349-2.2692v-9.9337c0-1.8153-1.3615-3.32804-3.0634-3.42889zm1.1184 9.02609l-.1945 4.387c0 .4538-.0973.8572-.2918 1.2102l-2.334 4.4374c-.0972.1512-.1459.3529-.1459.5042v3.3785H10.245v-2.37c0-.2017-.0487-.4034-.1945-.6051L2.2704 17.755c-.1945-.3025-.24313-.6555-.1945-1.0085.04862-.1513.14587-.5042.48625-.7059.1945-.1009.58351-.353 1.70189.5546l1.79914 1.6136c.29175.3026.48626.706.48626 1.1094v.7059c0 .6051.48625 1.1094 1.06975 1.1094.58351 0 1.06976-.5043 1.06976-1.1094V3.38388c0-.30255.14588-.6051.34038-.85723.24313-.2017.53488-.35297.82663-.30255.58354.05043 1.06974.6051 1.06974 1.26063V14.9816c0 .6051.4863 1.1094 1.0698 1.1094.5835 0 1.0697-.5043 1.0697-1.1094V9.93913c0-.30255.1459-.6051.3404-.85722.1945-.2017.5349-.35298.8266-.30255.5836.05042 1.0698.6051 1.0698 1.26064v4.9921c0 .6051.4863 1.1093 1.0698 1.1093.5835 0 1.0697-.5042 1.0697-1.1093v-3.8323c0-.3026.1459-.6051.3404-.8573.2431-.2017.5349-.3025.8266-.3025.5835.0504 1.0698.6051 1.0698 1.2606v5.1434c0 .6051.4862 1.1093 1.0698 1.1093.5835 0 1.0697-.5042 1.0697-1.1093v-3.2777c0-.3025.1459-.6051.3404-.8572.2431-.2017.5349-.3025.8266-.3025.5835.0504 1.0698.6051 1.0698 1.2606v5.6476z"/></svg>'
        }
          , g = {
            name: "logo",
            props: {
                eventName: String
            },
            data: function() {
                return {
                    icon: m.logo
                }
            },
            methods: {
                clickLogo: function() {
                    var e = this.eventName ? this.eventName : "Logo";
                    p(e, "Click")
                }
            }
        }
          , x = g
          , b = (a("2b0a"),
        a("2877"))
          , y = Object(b["a"])(x, d, h, !1, null, null, null)
          , C = y.exports
          , w = {
            name: "start",
            components: {
                logo: C
            },
            props: {
                appleBalance: String,
                applePlace: String,
                yandexBalance: String,
                yandexPlace: String,
                disneyBalance: String,
                disneyPlace: String
            },
            data: function() {
                return {
                    windowWidth: window.innerWidth,
                    isStarted: !1,
                    applePlaceFormatted: this.applePlace,
                    appleBalanceFormatted: this.formatBalance(+this.appleBalance || 0),
                    disneyPlaceFormatted: this.disneyPlace,
                    disneyBalanceFormatted: this.formatBalance(+this.disneyBalance || 0),
                    yandexPlaceFormatted: this.yandexPlace,
                    yandexBalanceFormatted: this.formatBalance(+this.yandexBalance || 0)
                }
            },
            computed: {
                cssVars: function() {
                    return {
                        "--bg-image": "url(".concat(u[0], ")")
                    }
                },
                hasStats: function() {
                    return this.appleBalance || this.applePlace || this.yandexBalance || this.yandexPlace || this.disneyBalance || this.disneyPlace
                },
                hasAppleStats: function() {
                    return this.windowWidth >= 480 ? this.applePlace || this.appleBalance : this.hasStats
                },
                hasYandexStats: function() {
                    return this.windowWidth >= 480 ? this.yandexPlace || this.yandexBalance : this.hasStats
                },
                hasDisneyStats: function() {
                    return this.windowWidth >= 480 ? this.disneyPlace || this.disneyBalance : this.hasStats
                },
                isAppleZero: function() {
                    return 0 === Number(this.appleBalance)
                },
                isDisneyZero: function() {
                    return 0 === Number(this.disneyBalance || 0)
                },
                isYandexZero: function() {
                    return 0 === Number(this.yandexBalance || 0)
                }
            },
            mounted: function() {
                var e = this;
                setTimeout((function(t) {
                    e.isStarted = !0,
                    p("Project", "Show")
                }
                ), 1250),
                window.addEventListener("resize", (function() {
                    e.windowWidth = window.innerWidth
                }
                ))
            },
            methods: {
                startGameYandex: function() {
                    this.startGame("yandex")
                },
                startGameDisney: function() {
                    this.startGame("disney")
                },
                startGameApple: function() {
                    this.startGame("apple")
                },
                startGame: function(e) {
                    var t = this;
                    this.isStarted = !1,
                    p("Choose Company — " + e, "Click"),
                    setTimeout((function(a) {
                        t.$root.$emit("initGame", e)
                    }
                    ), 50)
                },
                formatPrice: function(e) {
                    var t = (e / 1).toFixed(0).replace(".", ",");
                    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                },
                formatBalance: function(e) {
                    var t = e
                      , a = t < 0 ? "-" : "";
                    return a + "$" + this.formatPrice(Math.abs(t))
                }
            }
        }
          , B = w
          , _ = (a("937c"),
        Object(b["a"])(B, o, r, !1, null, null, null))
          , S = _.exports
          , k = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "game",
                class: {
                    "is-hidden": !e.isStarted,
                    "is-tut": e.isTutorial
                },
                on: {
                    mouseup: e.globalMouseup,
                    mouseleave: e.globalMouseup,
                    touchend: e.globalMouseup,
                    touchcancel: e.globalMouseup
                }
            }, [a("logo", {
                staticClass: "game__logo"
            }), a("div", {
                staticClass: "game__map content-block small-shadow no-bg",
                attrs: {
                    id: "tutorial-five"
                }
            }, [a("div", {
                staticClass: "content-block__inner"
            }, [a("div", {
                staticClass: "minimap",
                class: {
                    "is-seeking": e.isSeeking
                }
            }, [a("div", {
                staticClass: "minimap__wrapper"
            }, [a("div", {
                staticClass: "minimap__container",
                on: {
                    mousemove: e.mousemove,
                    mousedown: e.mousedown,
                    mouseup: e.mouseup,
                    touchstart: e.mousedown,
                    touchend: e.mouseup,
                    touchmove: e.mousemove
                }
            }, [a("div", {
                staticClass: "minimap__canvas"
            }, [a("div", {
                style: e.datesStyle,
                attrs: {
                    id: "minimap"
                }
            })]), a("div", {
                staticClass: "minimap__current",
                style: e.currentOffset,
                attrs: {
                    id: "minimap-current"
                },
                domProps: {
                    innerHTML: e._s(e.resizeIcon)
                }
            }), a("img", {
                staticClass: "minimap__dates",
                style: e.datesStyle,
                attrs: {
                    src: "https://leonardo.osnova.io/eeab9452-d039-7c4f-9e1f-82c6841b2d19/",
                    srcset: "https://leonardo.osnova.io/2cde4e4d-d5b8-0a4e-9093-acb589873933/ 2x"
                }
            })])])])])]), a("div", {
                staticClass: "game__content content-block small-shadow"
            }, [a("div", {
                attrs: {
                    id: "tutorial-four"
                }
            }), a("div", {
                staticClass: "content-block__inner game__canvas",
                attrs: {
                    id: "canvas"
                }
            }), a("div", {
                staticClass: "game__popup"
            }, [a("div", {
                staticClass: "game-popup",
                class: {
                    "is-hidden": !e.showEventPopup
                }
            }, [e._m(0), a("div", {
                staticClass: "game-popup__content"
            }, [a("div", {
                staticClass: "game-popup__text",
                domProps: {
                    innerHTML: e._s(e.getCurrentEventText)
                }
            }), a("GameButton", {
                staticClass: "game-popup__button background small",
                attrs: {
                    textContent: "Продолжить"
                },
                nativeOn: {
                    click: function(t) {
                        return e.closeEventPopup(t)
                    }
                }
            })], 1)])]), e.isMobileTut && e.isMobile ? a("div", {
                staticClass: "game__tut-pointer",
                domProps: {
                    innerHTML: e._s(e.pointerIcon)
                }
            }) : e._e()]), a("div", {
                staticClass: "game__controls"
            }, [a("div", {
                staticClass: "controls-block desktop",
                attrs: {
                    id: "tutorial-first"
                }
            }, [a("div", {
                staticClass: "game-buttons"
            }, [a("div", {
                staticClass: "game-button-wrapper"
            }, [a("BaseButton", {
                staticClass: "is-game-button",
                attrs: {
                    isActive: e.isPauseActive,
                    iconName: "pause"
                },
                nativeOn: {
                    click: function(t) {
                        return e.pauseGame(t)
                    }
                }
            })], 1), a("div", {
                staticClass: "game-button-wrapper"
            }, [a("BaseButton", {
                staticClass: "is-game-button",
                attrs: {
                    isActive: e.isPlayActive,
                    iconName: "playActive"
                },
                nativeOn: {
                    click: function(t) {
                        return e.playGame(t)
                    }
                }
            })], 1), a("div", {
                staticClass: "game-button-wrapper"
            }, [a("BaseButton", {
                staticClass: "is-game-button is-large",
                attrs: {
                    isActive: e.isForwardActive,
                    iconName: "forwardActive"
                },
                nativeOn: {
                    click: function(t) {
                        return e.forwardGame(t)
                    }
                }
            })], 1)])]), a("div", {
                staticClass: "controls-block is-shop desktop",
                attrs: {
                    id: "tutorial-second"
                }
            }, [a("Shop", {
                attrs: {
                    stockCount: e.stock,
                    currentBalance: e.money,
                    currentValue: e.currentValue,
                    available: e.isAvailable,
                    defaultValue: e.shopDefault
                }
            })], 1), a("div", {
                staticClass: "controls-block is-stats",
                attrs: {
                    id: "tutorial-third"
                }
            }, [a("Stats", {
                attrs: {
                    company: e.companyName,
                    money: e.money,
                    stock: e.stock,
                    currentValue: e.currentValue
                }
            })], 1)]), e.isHintShowed ? a("Hint", {
                attrs: {
                    show: e.showHintModal,
                    msg: e.curTutText,
                    arrow: e.curTutArrow,
                    element: e.curTutElement
                }
            }) : e._e()], 1)
        }
          , M = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "game-popup__header"
            }, [a("div", {
                staticClass: "game-popup__title"
            }, [a("span", [e._v("!")]), a("span", [e._v("Событие")])])])
        }
        ]
          , T = a("5530")
          , P = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", {
                staticClass: "base-button",
                class: {
                    "is-active": e.isActive
                },
                attrs: {
                    type: "button"
                }
            }, [a("span", {
                staticClass: "base-button__icon",
                domProps: {
                    innerHTML: e._s(e.icon)
                }
            })])
        }
          , A = []
          , D = {
            name: "baseButton",
            props: {
                isActive: Boolean,
                iconName: String
            },
            data: function() {
                return {
                    icon: m[this.iconName]
                }
            }
        }
          , H = D
          , E = (a("6787"),
        Object(b["a"])(H, P, A, !1, null, null, null))
          , F = E.exports
          , I = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a(e.tagName, {
                tag: "component",
                staticClass: "game-button",
                attrs: {
                    type: "button",
                    href: e.href,
                    target: "_blank"
                }
            }, [e.icon && e.isIconFirst ? a("span", {
                staticClass: "game-button__icon game-button__left",
                domProps: {
                    innerHTML: e._s(e.icon)
                }
            }) : e._e(), e._v(" " + e._s(e.textContent) + " "), e.icon && e.isIconLast ? a("span", {
                staticClass: "game-button__icon game-button__right",
                domProps: {
                    innerHTML: e._s(e.icon)
                }
            }) : e._e()])
        }
          , L = []
          , W = {
            name: "gameButton",
            props: {
                iconName: String,
                alignment: String,
                textContent: String,
                tag: String,
                url: String
            },
            data: function() {
                return {
                    icon: m[this.iconName]
                }
            },
            computed: {
                tagName: function() {
                    return this.tag ? this.tag : "button"
                },
                isIconFirst: function() {
                    return "left" === this.alignment
                },
                isIconLast: function() {
                    return "right" === this.alignment
                },
                href: function() {
                    return "button" === this.tagName ? "" : this.url
                }
            }
        }
          , $ = W
          , V = (a("23de"),
        Object(b["a"])($, I, L, !1, null, null, null))
          , N = V.exports
          , O = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "game-hint"
            }, [a("div", {
                staticClass: "game-hint__wrapper",
                class: {
                    "is-hidden": e.isHidden
                }
            }, [e.show ? a("div", {
                ref: "modal",
                staticClass: "game-hint__modal",
                class: "arrow-" + this.arrow,
                style: e.position
            }, [a("div", {
                staticClass: "game-hint__text",
                domProps: {
                    innerHTML: e._s(e.msg)
                }
            }), a("div", {
                staticClass: "game-hint__button",
                on: {
                    click: e.nextHint
                }
            }, [e._v("Понятно")])]) : e._e()])])
        }
          , q = []
          , G = {
            name: "hint",
            props: {
                msg: String,
                arrow: String,
                element: String,
                show: Boolean
            },
            data: function() {
                return {
                    el: null,
                    resizeHandler: null,
                    scrollHandler: null,
                    posX: 0,
                    posY: 0,
                    hide: !0
                }
            },
            computed: {
                position: function() {
                    return "transform: translate(".concat(this.posX, "px, ").concat(this.posY, "px)")
                },
                isHidden: function() {
                    return this.hide
                }
            },
            mounted: function() {
                var e = this;
                this.updateElement(),
                this.updatePos(),
                this.resizeHandler = function() {
                    e.updatePos()
                }
                ,
                this.scrollHandler = function() {
                    e.updatePosImmediately()
                }
                ,
                window.addEventListener("resize", this.resizeHandler),
                window.addEventListener("scroll", this.scrollHandler),
                this.$root.$on("update-hint", (function(t) {
                    e.updateSelector(t),
                    e.updatePos()
                }
                ))
            },
            beforeDestroy: function() {
                this.el.classList.remove("show-hint"),
                window.removeEventListener("resize", this.resizeHandler),
                window.removeEventListener("scroll", this.scrollHandler)
            },
            methods: {
                destroy: function() {
                    this.el.classList.remove("show-hint"),
                    window.removeEventListener("resize", this.resizeHandler)
                },
                updateElement: function() {
                    this.el && this.destroy(),
                    this.el = document.querySelector(this.element),
                    this.el.classList.add("show-hint")
                },
                updateSelector: function(e) {
                    this.el && this.destroy(),
                    this.el = document.querySelector(e),
                    this.el.classList.add("show-hint")
                },
                updatePos: function() {
                    var e = this;
                    this.hide = !0,
                    setTimeout((function(t) {
                        e.updatePosImmediately(),
                        e.hide = !1
                    }
                    ), 250)
                },
                updatePosImmediately: function() {
                    var e = this.el.getBoundingClientRect();
                    if (-1 !== this.arrow.indexOf("bottom")) {
                        var t = e.left + e.width / 2
                          , a = t - this.$refs.modal.clientWidth / 2
                          , i = t - this.$refs.modal.clientWidth / 2
                          , s = t + this.$refs.modal.clientWidth / 2;
                        i < 0 && (a += -1 * i + 15),
                        s >= window.innerWidth && (a -= s - window.innerWidth + 15),
                        this.posX = a,
                        this.posY = e.top - this.$refs.modal.clientHeight - 20
                    }
                    "top" === this.arrow && (this.posX = e.left + e.width / 2 - this.$refs.modal.clientWidth / 2,
                    this.posY = e.top + e.height + 20),
                    "right" === this.arrow && (this.posX = e.left - this.$refs.modal.clientWidth - 20,
                    this.posY = e.top + (e.height - this.$refs.modal.clientHeight) / 2)
                },
                nextHint: function() {
                    this.el && this.destroy(),
                    this.$root.$emit("next-hint")
                }
            }
        }
          , R = G
          , z = (a("7eee"),
        Object(b["a"])(R, O, q, !1, null, null, null))
          , Y = z.exports
          , Q = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "game-play-wrapper",
                on: {
                    click: e.toggle
                }
            }, [a("span", {
                staticClass: "game-play-bg"
            }, [a("span", {
                staticClass: "game-play-bg__play",
                domProps: {
                    innerHTML: e._s(e.play)
                }
            }), a("span", {
                staticClass: "game-play-bg__forward",
                domProps: {
                    innerHTML: e._s(e.forward)
                }
            })]), a("button", {
                staticClass: "game-play",
                class: {
                    "is-play": e.isPlay,
                    "is-active": e.isActive
                },
                attrs: {
                    type: "button"
                }
            }, [a("span", {
                staticClass: "game-play__icon"
            }, [a("span", {
                staticClass: "game-play__icon-play",
                domProps: {
                    innerHTML: e._s(e.play)
                }
            }), a("span", {
                staticClass: "game-play__icon-forward",
                domProps: {
                    innerHTML: e._s(e.forward)
                }
            })])])])
        }
          , U = []
          , j = {
            name: "play",
            props: {
                isActive: Boolean
            },
            data: function() {
                return {
                    state: "play",
                    play: m.playActive,
                    forward: m.forwardActive
                }
            },
            computed: {
                isPlay: function() {
                    return "play" === this.state
                }
            },
            methods: {
                toggle: function() {
                    this.state = this.isActive ? "play" === this.state ? "forward" : "play" : this.state
                }
            }
        }
          , X = j
          , J = (a("9c79"),
        Object(b["a"])(X, Q, U, !1, null, null, null))
          , Z = J.exports
          , K = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "shop-wrapper",
                class: {
                    "is-not-available": !e.available
                }
            }, [a("div", {
                staticClass: "shop",
                class: {
                    "to-left": e.isLeft
                }
            }, [a("div", {
                staticClass: "shop__wrapper"
            }, [a("div", {
                staticClass: "shop__bg"
            }, [a("div", {
                staticClass: "shop__left",
                on: {
                    click: e.toLeft
                }
            }, [a("span", [e._v("Продать")])]), a("div", {
                staticClass: "shop__right",
                on: {
                    click: e.toRight
                }
            }, [a("span", [e._v("Купить")])])]), a("div", {
                staticClass: "shop__slider"
            }, [a("div", {
                staticClass: "shop__input"
            }, [a("button", {
                staticClass: "shop__minus",
                attrs: {
                    type: "button"
                },
                domProps: {
                    innerHTML: e._s(e.minusIcon)
                },
                on: {
                    click: e.minus
                }
            }), a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model.number",
                    value: e.inputValue,
                    expression: "inputValue",
                    modifiers: {
                        number: !0
                    }
                }],
                class: {
                    "is-error": e.isError
                },
                attrs: {
                    type: "number",
                    placeholder: "0",
                    min: "0",
                    max: e.max,
                    pattern: "\\d*"
                },
                domProps: {
                    value: e.inputValue
                },
                on: {
                    input: [function(t) {
                        t.target.composing || (e.inputValue = e._n(t.target.value))
                    }
                    , e.onInput],
                    blur: function(t) {
                        return e.$forceUpdate()
                    }
                }
            }), a("button", {
                staticClass: "shop__plus",
                attrs: {
                    type: "button"
                },
                domProps: {
                    innerHTML: e._s(e.plusIcon)
                },
                on: {
                    click: e.plus
                }
            })]), a("div", {
                staticClass: "shop__range"
            }, [a("vue-slider", {
                attrs: {
                    tooltip: "none",
                    min: e.min,
                    max: e.max,
                    interval: 1,
                    "dot-size": e.dotSize
                },
                on: {
                    change: e.onSlider,
                    dragging: e.onSlider
                },
                model: {
                    value: e.sliderValue,
                    callback: function(t) {
                        e.sliderValue = t
                    },
                    expression: "sliderValue"
                }
            })], 1)])])]), a("Gamebutton", {
                staticClass: "shop-wrapper__accept morph",
                attrs: {
                    textContent: "Подтвердить"
                },
                nativeOn: {
                    click: function(t) {
                        return e.accept(t)
                    }
                }
            })], 1)
        }
          , ee = []
          , te = (a("24df"),
        a("4971"))
          , ae = a.n(te)
          , ie = {
            name: "shop",
            components: {
                Gamebutton: N,
                VueSlider: ae.a
            },
            props: {
                defaultValue: Number,
                stockCount: Number,
                currentBalance: Number,
                currentValue: Number,
                available: Boolean
            },
            data: function() {
                return {
                    state: "right",
                    minusIcon: m.minus,
                    plusIcon: m.plus,
                    error: !1,
                    inputValue: this.normalize(this.defaultValue),
                    sliderValue: this.normalize(this.defaultValue)
                }
            },
            computed: {
                value: function() {
                    return this.normalize(this.inputValue)
                },
                min: function() {
                    return 0
                },
                max: function() {
                    return 100
                },
                isLeft: function() {
                    return "left" === this.state
                },
                isError: function() {
                    return this.error
                },
                dotSize: function() {
                    return window.innerWidth > 1600 ? 25 : 20
                }
            },
            mounted: function() {
                var e = this;
                this.$root.$on("check-error", (function(t) {
                    e.checkError()
                }
                ))
            },
            methods: {
                sell: function() {
                    this.$root.$emit("sell", this.inputValue)
                },
                buy: function() {
                    this.$root.$emit("buy", this.inputValue)
                },
                minus: function() {
                    this.inputValue = this.sliderValue = +this.value - 1 > 0 ? +this.value - 1 : 0,
                    this.checkError()
                },
                plus: function() {
                    this.inputValue = +this.inputValue + 1,
                    this.sliderValue = this.normalize(this.inputValue),
                    this.checkError()
                },
                toLeft: function() {
                    this.state = "left",
                    this.checkError()
                },
                toRight: function() {
                    this.state = "right",
                    this.checkError()
                },
                accept: function() {
                    var e = this;
                    if (this.error)
                        return !1;
                    this.isLeft ? this.sell() : this.buy(),
                    setTimeout((function(t) {
                        e.checkError()
                    }
                    ), 250)
                },
                checkError: function() {
                    var e = Math.floor(+this.currentBalance / +this.currentValue);
                    this.error = +this.inputValue < 0 || (this.isLeft ? this.stockCount < this.inputValue : e < this.inputValue)
                },
                normalize: function(e) {
                    var t = Math.max(0, Math.min(+e, 100));
                    return t
                },
                onSlider: function() {
                    this.inputValue = this.normalize(this.sliderValue),
                    this.checkError()
                },
                onInput: function() {
                    this.sliderValue = this.normalize(this.inputValue),
                    this.checkError()
                }
            }
        }
          , se = ie
          , ne = (a("62b9"),
        Object(b["a"])(se, K, ee, !1, null, null, null))
          , le = ne.exports
          , ue = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "game-stats"
            }, [a("div", {
                staticClass: "game-stats__row"
            }, [a("div", {
                staticClass: "game-stats__value"
            }, [e._v(e._s(e._f("fixed")(e.money)))]), a("span", {
                staticClass: "game-stats__icon game-stats__icon--money",
                domProps: {
                    innerHTML: e._s(e.getMoneyIcon)
                }
            })]), a("div", {
                staticClass: "game-stats__row"
            }, [a("div", {
                staticClass: "game-stats__value"
            }, [e._v(e._s(e.stock))]), a("span", {
                staticClass: "game-stats__icon game-stats__icon--stock",
                domProps: {
                    innerHTML: e._s(e.getStockIcon)
                }
            })]), a("div", {
                staticClass: "game-stats__hr"
            }), a("div", {
                staticClass: "game-stats__row"
            }, [a("div", {
                staticClass: "game-stats__value"
            }, [e._v("$" + e._s(e._f("numbers")(e.getTotal)))]), a("span", {
                staticClass: "game-stats__icon game-stats__icon--total",
                domProps: {
                    innerHTML: e._s(e.getTotalIcon)
                }
            })])])
        }
          , oe = []
          , re = (a("4160"),
        a("159b"),
        function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&nbsp;";
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t)
        }
        )
          , de = {
            name: "stats",
            props: {
                company: String,
                money: Number,
                stock: Number,
                currentValue: Number
            },
            data: function() {
                return {
                    svg: m
                }
            },
            computed: {
                getStockIcon: function() {
                    return "apple" === this.company ? this.svg.stock2 : this.svg.stock1
                },
                getMoneyIcon: function() {
                    return "apple" === this.company ? this.svg.money2 : this.svg.money1
                },
                getTotalIcon: function() {
                    return "apple" === this.company ? this.svg.total2 : this.svg.total1
                },
                getTotal: function() {
                    return this.money + this.stock * this.currentValue
                }
            },
            filters: {
                fixed: function(e) {
                    return e ? (e = e.toFixed(0),
                    re(Math.abs(e), " ")) : 0
                },
                numbers: function(e) {
                    return e ? (e = +e.toFixed(0),
                    re(Math.abs(e), " ")) : 0
                }
            }
        }
          , he = de
          , ve = (a("227c"),
        Object(b["a"])(he, ue, oe, !1, null, null, null))
          , ce = ve.exports
          , fe = {
            yandex: {
                quotes: [{
                    date: "2011-05-23",
                    value: 34.450001
                }, {
                    date: "2011-05-30",
                    value: 33.5
                }, {
                    date: "2011-06-06",
                    value: 31.82
                }, {
                    date: "2011-06-13",
                    value: 30.809999
                }, {
                    date: "2011-06-20",
                    value: 31.549999
                }, {
                    date: "2011-06-27",
                    value: 35.689999
                }, {
                    date: "2011-07-04",
                    value: 35.950001
                }, {
                    date: "2011-07-11",
                    value: 34.990002
                }, {
                    date: "2011-07-18",
                    value: 35.650002
                }, {
                    date: "2011-07-25",
                    value: 34.98
                }, {
                    date: "2011-08-01",
                    value: 30.83
                }, {
                    date: "2011-08-08",
                    value: 30.66
                }, {
                    date: "2011-08-15",
                    value: 29.99
                }, {
                    date: "2011-08-22",
                    value: 30.450001
                }, {
                    date: "2011-08-29",
                    value: 30.379999
                }, {
                    date: "2011-09-05",
                    value: 29.93
                }, {
                    date: "2011-09-12",
                    value: 30.01
                }, {
                    date: "2011-09-19",
                    value: 25.540001
                }, {
                    date: "2011-09-26",
                    value: 20.459999
                }, {
                    date: "2011-10-03",
                    value: 19.82
                }, {
                    date: "2011-10-10",
                    value: 24.17
                }, {
                    date: "2011-10-17",
                    value: 26.42
                }, {
                    date: "2011-10-24",
                    value: 28.129999
                }, {
                    date: "2011-10-31",
                    value: 28.549999
                }, {
                    date: "2011-11-07",
                    value: 25.540001
                }, {
                    date: "2011-11-14",
                    value: 21.65
                }, {
                    date: "2011-11-21",
                    value: 19.75
                }, {
                    date: "2011-11-28",
                    value: 21.360001
                }, {
                    date: "2011-12-05",
                    value: 19.940001
                }, {
                    date: "2011-12-12",
                    value: 17.549999
                }, {
                    date: "2011-12-19",
                    value: 19.959999
                }, {
                    date: "2011-12-26",
                    value: 19.700001
                }, {
                    date: "2012-01-02",
                    value: 18.610001
                }, {
                    date: "2012-01-09",
                    value: 18.6
                }, {
                    date: "2012-01-16",
                    value: 18.74
                }, {
                    date: "2012-01-23",
                    value: 20.700001
                }, {
                    date: "2012-01-30",
                    value: 21.82
                }, {
                    date: "2012-02-06",
                    value: 21.27
                }, {
                    date: "2012-02-13",
                    value: 22.059999
                }, {
                    date: "2012-02-20",
                    value: 22.700001
                }, {
                    date: "2012-02-27",
                    value: 23.26
                }, {
                    date: "2012-03-05",
                    value: 23.469999
                }, {
                    date: "2012-03-12",
                    value: 24.68
                }, {
                    date: "2012-03-19",
                    value: 24.01
                }, {
                    date: "2012-03-26",
                    value: 26.870001
                }, {
                    date: "2012-04-02",
                    value: 26.620001
                }, {
                    date: "2012-04-09",
                    value: 26.559999
                }, {
                    date: "2012-04-16",
                    value: 26.65
                }, {
                    date: "2012-04-23",
                    value: 24.690001
                }, {
                    date: "2012-04-30",
                    value: 23.35
                }, {
                    date: "2012-05-07",
                    value: 22.4
                }, {
                    date: "2012-05-14",
                    value: 20.469999
                }, {
                    date: "2012-05-21",
                    value: 20.450001
                }, {
                    date: "2012-05-28",
                    value: 18.49
                }, {
                    date: "2012-06-04",
                    value: 18.950001
                }, {
                    date: "2012-06-11",
                    value: 17.559999
                }, {
                    date: "2012-06-18",
                    value: 17.83
                }, {
                    date: "2012-06-25",
                    value: 19.049999
                }, {
                    date: "2012-07-02",
                    value: 18.9
                }, {
                    date: "2012-07-09",
                    value: 18.559999
                }, {
                    date: "2012-07-16",
                    value: 18.969999
                }, {
                    date: "2012-07-23",
                    value: 20.219999
                }, {
                    date: "2012-07-30",
                    value: 20.469999
                }, {
                    date: "2012-08-06",
                    value: 20.620001
                }, {
                    date: "2012-08-13",
                    value: 21.24
                }, {
                    date: "2012-08-20",
                    value: 20.940001
                }, {
                    date: "2012-08-27",
                    value: 21.120001
                }, {
                    date: "2012-09-03",
                    value: 22.950001
                }, {
                    date: "2012-09-10",
                    value: 24.719999
                }, {
                    date: "2012-09-17",
                    value: 24.49
                }, {
                    date: "2012-09-24",
                    value: 24.15
                }, {
                    date: "2012-10-01",
                    value: 24.200001
                }, {
                    date: "2012-10-08",
                    value: 23.280001
                }, {
                    date: "2012-10-15",
                    value: 22.24
                }, {
                    date: "2012-10-22",
                    value: 23.07
                }, {
                    date: "2012-10-29",
                    value: 22.77
                }, {
                    date: "2012-11-05",
                    value: 21.110001
                }, {
                    date: "2012-11-12",
                    value: 21.530001
                }, {
                    date: "2012-11-19",
                    value: 22.440001
                }, {
                    date: "2012-11-26",
                    value: 21.82
                }, {
                    date: "2012-12-03",
                    value: 22.959999
                }, {
                    date: "2012-12-10",
                    value: 21.370001
                }, {
                    date: "2012-12-17",
                    value: 22.15
                }, {
                    date: "2012-12-24",
                    value: 21.75
                }, {
                    date: "2012-12-31",
                    value: 23.24
                }, {
                    date: "2013-01-07",
                    value: 23.120001
                }, {
                    date: "2013-01-14",
                    value: 22.860001
                }, {
                    date: "2013-01-21",
                    value: 23.950001
                }, {
                    date: "2013-01-28",
                    value: 24.700001
                }, {
                    date: "2013-02-04",
                    value: 24.709999
                }, {
                    date: "2013-02-11",
                    value: 25.59
                }, {
                    date: "2013-02-18",
                    value: 23.6
                }, {
                    date: "2013-02-25",
                    value: 23.25
                }, {
                    date: "2013-03-04",
                    value: 24.92
                }, {
                    date: "2013-03-11",
                    value: 23.57
                }, {
                    date: "2013-03-18",
                    value: 22.809999
                }, {
                    date: "2013-03-25",
                    value: 23.139999
                }, {
                    date: "2013-04-01",
                    value: 22.77
                }, {
                    date: "2013-04-08",
                    value: 22.530001
                }, {
                    date: "2013-04-15",
                    value: 20.1
                }, {
                    date: "2013-04-22",
                    value: 25.08
                }, {
                    date: "2013-04-29",
                    value: 25.85
                }, {
                    date: "2013-05-06",
                    value: 26.709999
                }, {
                    date: "2013-05-13",
                    value: 29.01
                }, {
                    date: "2013-05-20",
                    value: 27.040001
                }, {
                    date: "2013-05-27",
                    value: 27.16
                }, {
                    date: "2013-06-03",
                    value: 27.08
                }, {
                    date: "2013-06-10",
                    value: 26.52
                }, {
                    date: "2013-06-17",
                    value: 26.41
                }, {
                    date: "2013-06-24",
                    value: 27.65
                }, {
                    date: "2013-07-01",
                    value: 27.549999
                }, {
                    date: "2013-07-08",
                    value: 30.75
                }, {
                    date: "2013-07-15",
                    value: 31.200001
                }, {
                    date: "2013-07-22",
                    value: 33.419998
                }, {
                    date: "2013-07-29",
                    value: 33.779999
                }, {
                    date: "2013-08-05",
                    value: 33.040001
                }, {
                    date: "2013-08-12",
                    value: 33.119999
                }, {
                    date: "2013-08-19",
                    value: 33.439999
                }, {
                    date: "2013-08-26",
                    value: 32
                }, {
                    date: "2013-09-02",
                    value: 34.240002
                }, {
                    date: "2013-09-09",
                    value: 34.380001
                }, {
                    date: "2013-09-16",
                    value: 36.59
                }, {
                    date: "2013-09-23",
                    value: 36.799999
                }, {
                    date: "2013-09-30",
                    value: 38.349998
                }, {
                    date: "2013-10-07",
                    value: 38.330002
                }, {
                    date: "2013-10-14",
                    value: 40.810001
                }, {
                    date: "2013-10-21",
                    value: 38.189999
                }, {
                    date: "2013-10-28",
                    value: 38.029999
                }, {
                    date: "2013-11-04",
                    value: 36.349998
                }, {
                    date: "2013-11-11",
                    value: 38.529999
                }, {
                    date: "2013-11-18",
                    value: 38.470001
                }, {
                    date: "2013-11-25",
                    value: 39.75
                }, {
                    date: "2013-12-02",
                    value: 39.939999
                }, {
                    date: "2013-12-09",
                    value: 38.209999
                }, {
                    date: "2013-12-16",
                    value: 40.290001
                }, {
                    date: "2013-12-23",
                    value: 42.580002
                }, {
                    date: "2013-12-30",
                    value: 42.900002
                }, {
                    date: "2014-01-06",
                    value: 44
                }, {
                    date: "2014-01-13",
                    value: 43.02
                }, {
                    date: "2014-01-20",
                    value: 38.02
                }, {
                    date: "2014-01-27",
                    value: 36.75
                }, {
                    date: "2014-02-03",
                    value: 39.259998
                }, {
                    date: "2014-02-10",
                    value: 40.290001
                }, {
                    date: "2014-02-17",
                    value: 36.66
                }, {
                    date: "2014-02-24",
                    value: 37.5
                }, {
                    date: "2014-03-03",
                    value: 33.18
                }, {
                    date: "2014-03-10",
                    value: 30.389999
                }, {
                    date: "2014-03-17",
                    value: 30.01
                }, {
                    date: "2014-03-24",
                    value: 29.469999
                }, {
                    date: "2014-03-31",
                    value: 29.959999
                }, {
                    date: "2014-04-07",
                    value: 28.01
                }, {
                    date: "2014-04-14",
                    value: 29.950001
                }, {
                    date: "2014-04-21",
                    value: 24
                }, {
                    date: "2014-04-28",
                    value: 26.530001
                }, {
                    date: "2014-05-05",
                    value: 28.299999
                }, {
                    date: "2014-05-12",
                    value: 30.030001
                }, {
                    date: "2014-05-19",
                    value: 32.209999
                }, {
                    date: "2014-05-26",
                    value: 31.139999
                }, {
                    date: "2014-06-02",
                    value: 33.720001
                }, {
                    date: "2014-06-09",
                    value: 33.73
                }, {
                    date: "2014-06-16",
                    value: 35.560001
                }, {
                    date: "2014-06-23",
                    value: 35.16
                }, {
                    date: "2014-06-30",
                    value: 34.560001
                }, {
                    date: "2014-07-07",
                    value: 32.110001
                }, {
                    date: "2014-07-14",
                    value: 30.74
                }, {
                    date: "2014-07-21",
                    value: 30.530001
                }, {
                    date: "2014-07-28",
                    value: 30.280001
                }, {
                    date: "2014-08-04",
                    value: 29
                }, {
                    date: "2014-08-11",
                    value: 28.41
                }, {
                    date: "2014-08-18",
                    value: 29.08
                }, {
                    date: "2014-08-25",
                    value: 28.43
                }, {
                    date: "2014-09-01",
                    value: 31.6
                }, {
                    date: "2014-09-08",
                    value: 31.559999
                }, {
                    date: "2014-09-15",
                    value: 29.42
                }, {
                    date: "2014-09-22",
                    value: 29.67
                }, {
                    date: "2014-09-29",
                    value: 27.049999
                }, {
                    date: "2014-10-06",
                    value: 24.440001
                }, {
                    date: "2014-10-13",
                    value: 26.309999
                }, {
                    date: "2014-10-20",
                    value: 27.780001
                }, {
                    date: "2014-10-27",
                    value: 28.620001
                }, {
                    date: "2014-11-03",
                    value: 26.549999
                }, {
                    date: "2014-11-10",
                    value: 26.450001
                }, {
                    date: "2014-11-17",
                    value: 26.67
                }, {
                    date: "2014-11-24",
                    value: 24.92
                }, {
                    date: "2014-12-01",
                    value: 21.91
                }, {
                    date: "2014-12-08",
                    value: 19.309999
                }, {
                    date: "2014-12-15",
                    value: 18
                }, {
                    date: "2014-12-22",
                    value: 18.16
                }, {
                    date: "2014-12-29",
                    value: 18.370001
                }, {
                    date: "2015-01-05",
                    value: 18.24
                }, {
                    date: "2015-01-12",
                    value: 17.969999
                }, {
                    date: "2015-01-19",
                    value: 17.190001
                }, {
                    date: "2015-01-26",
                    value: 14.89
                }, {
                    date: "2015-02-02",
                    value: 16.120001
                }, {
                    date: "2015-02-09",
                    value: 17
                }, {
                    date: "2015-02-16",
                    value: 17.01
                }, {
                    date: "2015-02-23",
                    value: 16.450001
                }, {
                    date: "2015-03-02",
                    value: 15.13
                }, {
                    date: "2015-03-09",
                    value: 14.68
                }, {
                    date: "2015-03-16",
                    value: 14.63
                }, {
                    date: "2015-03-23",
                    value: 15.45
                }, {
                    date: "2015-03-30",
                    value: 16.24
                }, {
                    date: "2015-04-06",
                    value: 17.84
                }, {
                    date: "2015-04-13",
                    value: 20.59
                }, {
                    date: "2015-04-20",
                    value: 20.67
                }, {
                    date: "2015-04-27",
                    value: 19.57
                }, {
                    date: "2015-05-04",
                    value: 19.639999
                }, {
                    date: "2015-05-11",
                    value: 19.01
                }, {
                    date: "2015-05-18",
                    value: 18.5
                }, {
                    date: "2015-05-25",
                    value: 18.030001
                }, {
                    date: "2015-06-01",
                    value: 17.559999
                }, {
                    date: "2015-06-08",
                    value: 17.629999
                }, {
                    date: "2015-06-15",
                    value: 16.77
                }, {
                    date: "2015-06-22",
                    value: 15.81
                }, {
                    date: "2015-06-29",
                    value: 15.38
                }, {
                    date: "2015-07-06",
                    value: 14.85
                }, {
                    date: "2015-07-13",
                    value: 15.78
                }, {
                    date: "2015-07-20",
                    value: 14.84
                }, {
                    date: "2015-07-27",
                    value: 13.91
                }, {
                    date: "2015-08-03",
                    value: 13.33
                }, {
                    date: "2015-08-10",
                    value: 12.82
                }, {
                    date: "2015-08-17",
                    value: 11.01
                }, {
                    date: "2015-08-24",
                    value: 12.35
                }, {
                    date: "2015-08-31",
                    value: 11.5
                }, {
                    date: "2015-09-07",
                    value: 11.27
                }, {
                    date: "2015-09-14",
                    value: 12.49
                }, {
                    date: "2015-09-21",
                    value: 10.69
                }, {
                    date: "2015-09-28",
                    value: 11.34
                }, {
                    date: "2015-10-05",
                    value: 12.37
                }, {
                    date: "2015-10-12",
                    value: 13.6
                }, {
                    date: "2015-10-19",
                    value: 13.22
                }, {
                    date: "2015-10-26",
                    value: 16.1
                }, {
                    date: "2015-11-02",
                    value: 15.83
                }, {
                    date: "2015-11-09",
                    value: 15.17
                }, {
                    date: "2015-11-16",
                    value: 17.51
                }, {
                    date: "2015-11-23",
                    value: 16.57
                }, {
                    date: "2015-11-30",
                    value: 15.79
                }, {
                    date: "2015-12-07",
                    value: 14.4
                }, {
                    date: "2015-12-14",
                    value: 15.32
                }, {
                    date: "2015-12-21",
                    value: 16.1
                }, {
                    date: "2015-12-28",
                    value: 15.72
                }, {
                    date: "2016-01-04",
                    value: 13.42
                }, {
                    date: "2016-01-11",
                    value: 12.22
                }, {
                    date: "2016-01-18",
                    value: 13.13
                }, {
                    date: "2016-01-25",
                    value: 13.42
                }, {
                    date: "2016-02-01",
                    value: 12.88
                }, {
                    date: "2016-02-08",
                    value: 12.95
                }, {
                    date: "2016-02-15",
                    value: 12.67
                }, {
                    date: "2016-02-22",
                    value: 12.98
                }, {
                    date: "2016-02-29",
                    value: 14.48
                }, {
                    date: "2016-03-07",
                    value: 14.26
                }, {
                    date: "2016-03-14",
                    value: 15.19
                }, {
                    date: "2016-03-21",
                    value: 15.08
                }, {
                    date: "2016-03-28",
                    value: 15.38
                }, {
                    date: "2016-04-04",
                    value: 15.05
                }, {
                    date: "2016-04-11",
                    value: 16.59
                }, {
                    date: "2016-04-18",
                    value: 18.08
                }, {
                    date: "2016-04-25",
                    value: 20.469999
                }, {
                    date: "2016-05-02",
                    value: 19.879999
                }, {
                    date: "2016-05-09",
                    value: 19.52
                }, {
                    date: "2016-05-16",
                    value: 19.219999
                }, {
                    date: "2016-05-23",
                    value: 19.91
                }, {
                    date: "2016-05-30",
                    value: 20.889999
                }, {
                    date: "2016-06-06",
                    value: 21.84
                }, {
                    date: "2016-06-13",
                    value: 21.43
                }, {
                    date: "2016-06-20",
                    value: 21.389999
                }, {
                    date: "2016-06-27",
                    value: 21.73
                }, {
                    date: "2016-07-04",
                    value: 22.08
                }, {
                    date: "2016-07-11",
                    value: 21.43
                }, {
                    date: "2016-07-18",
                    value: 21.23
                }, {
                    date: "2016-07-25",
                    value: 21.65
                }, {
                    date: "2016-08-01",
                    value: 21.77
                }, {
                    date: "2016-08-08",
                    value: 23.209999
                }, {
                    date: "2016-08-15",
                    value: 22.48
                }, {
                    date: "2016-08-22",
                    value: 22.139999
                }, {
                    date: "2016-08-29",
                    value: 22.389999
                }, {
                    date: "2016-09-05",
                    value: 20.309999
                }, {
                    date: "2016-09-12",
                    value: 20.639999
                }, {
                    date: "2016-09-19",
                    value: 21.57
                }, {
                    date: "2016-09-26",
                    value: 21.049999
                }, {
                    date: "2016-10-03",
                    value: 22
                }, {
                    date: "2016-10-10",
                    value: 18.93
                }, {
                    date: "2016-10-17",
                    value: 19.5
                }, {
                    date: "2016-10-24",
                    value: 20.059999
                }, {
                    date: "2016-10-31",
                    value: 18.32
                }, {
                    date: "2016-11-07",
                    value: 18.709999
                }, {
                    date: "2016-11-14",
                    value: 18.469999
                }, {
                    date: "2016-11-21",
                    value: 18.629999
                }, {
                    date: "2016-11-28",
                    value: 18.42
                }, {
                    date: "2016-12-05",
                    value: 19.860001
                }, {
                    date: "2016-12-12",
                    value: 20.25
                }, {
                    date: "2016-12-19",
                    value: 20.389999
                }, {
                    date: "2016-12-26",
                    value: 20.129999
                }, {
                    date: "2017-01-02",
                    value: 21.84
                }, {
                    date: "2017-01-09",
                    value: 21.5
                }, {
                    date: "2017-01-16",
                    value: 21.870001
                }, {
                    date: "2017-01-23",
                    value: 23.629999
                }, {
                    date: "2017-01-30",
                    value: 23.08
                }, {
                    date: "2017-02-06",
                    value: 23.120001
                }, {
                    date: "2017-02-13",
                    value: 24.66
                }, {
                    date: "2017-02-20",
                    value: 23.58
                }, {
                    date: "2017-02-27",
                    value: 23.57
                }, {
                    date: "2017-03-06",
                    value: 23.030001
                }, {
                    date: "2017-03-13",
                    value: 23.620001
                }, {
                    date: "2017-03-20",
                    value: 22.41
                }, {
                    date: "2017-03-27",
                    value: 21.93
                }, {
                    date: "2017-04-03",
                    value: 21.82
                }, {
                    date: "2017-04-10",
                    value: 22.75
                }, {
                    date: "2017-04-17",
                    value: 23.08
                }, {
                    date: "2017-04-24",
                    value: 27.26
                }, {
                    date: "2017-05-01",
                    value: 27.440001
                }, {
                    date: "2017-05-08",
                    value: 28.059999
                }, {
                    date: "2017-05-15",
                    value: 28.51
                }, {
                    date: "2017-05-22",
                    value: 27.66
                }, {
                    date: "2017-05-29",
                    value: 26.32
                }, {
                    date: "2017-06-05",
                    value: 26.25
                }, {
                    date: "2017-06-12",
                    value: 25.57
                }, {
                    date: "2017-06-19",
                    value: 27.549999
                }, {
                    date: "2017-06-26",
                    value: 26.24
                }, {
                    date: "2017-07-03",
                    value: 26.25
                }, {
                    date: "2017-07-10",
                    value: 31.620001
                }, {
                    date: "2017-07-17",
                    value: 31.41
                }, {
                    date: "2017-07-24",
                    value: 29.530001
                }, {
                    date: "2017-07-31",
                    value: 29.610001
                }, {
                    date: "2017-08-07",
                    value: 29.049999
                }, {
                    date: "2017-08-14",
                    value: 29.809999
                }, {
                    date: "2017-08-21",
                    value: 29.75
                }, {
                    date: "2017-08-28",
                    value: 32.209999
                }, {
                    date: "2017-09-04",
                    value: 31.870001
                }, {
                    date: "2017-09-11",
                    value: 32.639999
                }, {
                    date: "2017-09-18",
                    value: 33.200001
                }, {
                    date: "2017-09-25",
                    value: 32.950001
                }, {
                    date: "2017-10-02",
                    value: 32.509998
                }, {
                    date: "2017-10-09",
                    value: 32.439999
                }, {
                    date: "2017-10-16",
                    value: 31.16
                }, {
                    date: "2017-10-23",
                    value: 32.380001
                }, {
                    date: "2017-10-30",
                    value: 33.009998
                }, {
                    date: "2017-11-06",
                    value: 30.99
                }, {
                    date: "2017-11-13",
                    value: 33.189999
                }, {
                    date: "2017-11-20",
                    value: 35
                }, {
                    date: "2017-11-27",
                    value: 32.529999
                }, {
                    date: "2017-12-04",
                    value: 32.889999
                }, {
                    date: "2017-12-11",
                    value: 32.049999
                }, {
                    date: "2017-12-18",
                    value: 31.66
                }, {
                    date: "2017-12-25",
                    value: 32.75
                }, {
                    date: "2018-01-01",
                    value: 34.25
                }, {
                    date: "2018-01-08",
                    value: 34.599998
                }, {
                    date: "2018-01-15",
                    value: 37.200001
                }, {
                    date: "2018-01-22",
                    value: 39.189999
                }, {
                    date: "2018-01-29",
                    value: 37.869999
                }, {
                    date: "2018-02-05",
                    value: 35.889999
                }, {
                    date: "2018-02-12",
                    value: 42.099998
                }, {
                    date: "2018-02-19",
                    value: 42.490002
                }, {
                    date: "2018-02-26",
                    value: 41.259998
                }, {
                    date: "2018-03-05",
                    value: 43.09
                }, {
                    date: "2018-03-12",
                    value: 42.299999
                }, {
                    date: "2018-03-19",
                    value: 41.150002
                }, {
                    date: "2018-03-26",
                    value: 39.450001
                }, {
                    date: "2018-04-02",
                    value: 39.389999
                }, {
                    date: "2018-04-09",
                    value: 32.98
                }, {
                    date: "2018-04-16",
                    value: 33.720001
                }, {
                    date: "2018-04-23",
                    value: 32.509998
                }, {
                    date: "2018-04-30",
                    value: 33.580002
                }, {
                    date: "2018-05-07",
                    value: 35.09
                }, {
                    date: "2018-05-14",
                    value: 33.990002
                }, {
                    date: "2018-05-21",
                    value: 33.290001
                }, {
                    date: "2018-05-28",
                    value: 34.400002
                }, {
                    date: "2018-06-04",
                    value: 34.560001
                }, {
                    date: "2018-06-11",
                    value: 35.959999
                }, {
                    date: "2018-06-18",
                    value: 35.549999
                }, {
                    date: "2018-06-25",
                    value: 35.900002
                }, {
                    date: "2018-07-02",
                    value: 36.950001
                }, {
                    date: "2018-07-09",
                    value: 37.91
                }, {
                    date: "2018-07-16",
                    value: 36.82
                }, {
                    date: "2018-07-23",
                    value: 36.869999
                }, {
                    date: "2018-07-30",
                    value: 35.59
                }, {
                    date: "2018-08-06",
                    value: 31.889999
                }, {
                    date: "2018-08-13",
                    value: 31.27
                }, {
                    date: "2018-08-20",
                    value: 31.790001
                }, {
                    date: "2018-08-27",
                    value: 32.130001
                }, {
                    date: "2018-09-03",
                    value: 30.139999
                }, {
                    date: "2018-09-10",
                    value: 32.34
                }, {
                    date: "2018-09-17",
                    value: 33
                }, {
                    date: "2018-09-24",
                    value: 32.889999
                }, {
                    date: "2018-10-01",
                    value: 32.43
                }, {
                    date: "2018-10-08",
                    value: 32.73
                }, {
                    date: "2018-10-15",
                    value: 27.42
                }, {
                    date: "2018-10-22",
                    value: 27.25
                }, {
                    date: "2018-10-29",
                    value: 29.700001
                }, {
                    date: "2018-11-05",
                    value: 28.209999
                }, {
                    date: "2018-11-12",
                    value: 29.25
                }, {
                    date: "2018-11-19",
                    value: 28.309999
                }, {
                    date: "2018-11-26",
                    value: 29.5
                }, {
                    date: "2018-12-03",
                    value: 28.68
                }, {
                    date: "2018-12-10",
                    value: 28.01
                }, {
                    date: "2018-12-17",
                    value: 26.440001
                }, {
                    date: "2018-12-24",
                    value: 27.91
                }, {
                    date: "2018-12-31",
                    value: 28.559999
                }, {
                    date: "2019-01-07",
                    value: 29.889999
                }, {
                    date: "2019-01-14",
                    value: 30.82
                }, {
                    date: "2019-01-21",
                    value: 33.599998
                }, {
                    date: "2019-01-28",
                    value: 33.68
                }, {
                    date: "2019-02-04",
                    value: 33.23
                }, {
                    date: "2019-02-11",
                    value: 31.469999
                }, {
                    date: "2019-02-18",
                    value: 33.689999
                }, {
                    date: "2019-02-25",
                    value: 34.639999
                }, {
                    date: "2019-03-04",
                    value: 35.099998
                }, {
                    date: "2019-03-11",
                    value: 35.98
                }, {
                    date: "2019-03-18",
                    value: 35.310001
                }, {
                    date: "2019-03-25",
                    value: 34.34
                }, {
                    date: "2019-04-01",
                    value: 35.209999
                }, {
                    date: "2019-04-08",
                    value: 38.900002
                }, {
                    date: "2019-04-15",
                    value: 37.34
                }, {
                    date: "2019-04-22",
                    value: 36.689999
                }, {
                    date: "2019-04-29",
                    value: 37.240002
                }, {
                    date: "2019-05-06",
                    value: 36.25
                }, {
                    date: "2019-05-13",
                    value: 37.790001
                }, {
                    date: "2019-05-20",
                    value: 37.310001
                }, {
                    date: "2019-05-27",
                    value: 35.919998
                }, {
                    date: "2019-06-03",
                    value: 37.279999
                }, {
                    date: "2019-06-10",
                    value: 37.950001
                }, {
                    date: "2019-06-17",
                    value: 39.02
                }, {
                    date: "2019-06-24",
                    value: 38
                }, {
                    date: "2019-07-01",
                    value: 39.200001
                }, {
                    date: "2019-07-08",
                    value: 40.330002
                }, {
                    date: "2019-07-15",
                    value: 39
                }, {
                    date: "2019-07-22",
                    value: 37.040001
                }, {
                    date: "2019-07-29",
                    value: 37.540001
                }, {
                    date: "2019-08-05",
                    value: 36.959999
                }, {
                    date: "2019-08-12",
                    value: 36.48
                }, {
                    date: "2019-08-19",
                    value: 35.790001
                }, {
                    date: "2019-08-26",
                    value: 37.099998
                }, {
                    date: "2019-09-02",
                    value: 37.990002
                }, {
                    date: "2019-09-09",
                    value: 37.880001
                }, {
                    date: "2019-09-16",
                    value: 35.77
                }, {
                    date: "2019-09-23",
                    value: 35.259998
                }, {
                    date: "2019-09-30",
                    value: 35.360001
                }, {
                    date: "2019-10-07",
                    value: 29.99
                }, {
                    date: "2019-10-14",
                    value: 29.76
                }, {
                    date: "2019-10-21",
                    value: 32.27
                }, {
                    date: "2019-10-28",
                    value: 33.849998
                }, {
                    date: "2019-11-04",
                    value: 34.16
                }, {
                    date: "2019-11-11",
                    value: 35.790001
                }, {
                    date: "2019-11-18",
                    value: 40.459999
                }, {
                    date: "2019-11-25",
                    value: 41.970001
                }, {
                    date: "2019-12-02",
                    value: 40.459999
                }, {
                    date: "2019-12-09",
                    value: 43.25
                }, {
                    date: "2019-12-16",
                    value: 43.16
                }, {
                    date: "2019-12-23",
                    value: 43.900002
                }, {
                    date: "2019-12-30",
                    value: 43.209999
                }, {
                    date: "2020-01-06",
                    value: 44.060001
                }, {
                    date: "2020-01-13",
                    value: 45.400002
                }, {
                    date: "2020-01-20",
                    value: 45.380001
                }, {
                    date: "2020-01-27",
                    value: 44.810001
                }, {
                    date: "2020-02-03",
                    value: 48.490002
                }, {
                    date: "2020-02-10",
                    value: 46.57
                }, {
                    date: "2020-02-17",
                    value: 44.540001
                }, {
                    date: "2020-02-24",
                    value: 40.610001
                }, {
                    date: "2020-03-02",
                    value: 39.509998
                }, {
                    date: "2020-03-09",
                    value: 33.939999
                }, {
                    date: "2020-03-16",
                    value: 29.91
                }, {
                    date: "2020-03-23",
                    value: 32.98
                }, {
                    date: "2020-03-30",
                    value: 32.380001
                }, {
                    date: "2020-04-06",
                    value: 36.139999
                }, {
                    date: "2020-04-13",
                    value: 36.619999
                }, {
                    date: "2020-04-20",
                    value: 36
                }, {
                    date: "2020-04-27",
                    value: 37.41
                }, {
                    date: "2020-05-04",
                    value: 40.740002
                }, {
                    date: "2020-05-11",
                    value: 38.990002
                }, {
                    date: "2020-05-18",
                    value: 40.259998
                }, {
                    date: "2020-05-25",
                    value: 40.23
                }, {
                    date: "2020-06-01",
                    value: 42.32
                }, {
                    date: "2020-06-08",
                    value: 42.18
                }, {
                    date: "2020-06-15",
                    value: 42.880001
                }],
                events: [{
                    date: "2011-08-01",
                    text: "На несколько часов перестаёт работать поиск и ряд других сервисов."
                }, {
                    date: "2011-10-01",
                    text: "Google убирает из Chrome поиск Яндекса."
                }, {
                    date: "2012-01-01",
                    text: "Аркадий Волож объявляет о планах выйти на европейский рынок."
                }, {
                    date: "2012-05-01",
                    text: "Госдума признаёт Яндекс стратегическим предприятием — общенациональным транслятором информации."
                }, {
                    date: "2012-09-01",
                    text: "Презентация Яндекс.Браузера."
                }, {
                    date: "2013-02-01",
                    text: "Яндекс обходит Microsoft по числу поисковых запросов и занимает 4 место в мировом рейтинге."
                }, {
                    date: "2013-12-01",
                    text: "Яндекс становится крупнейшим медиа России."
                }, {
                    date: "2014-02-01",
                    text: "Обострение отношений между Россией и Украиной."
                }, {
                    date: "2014-06-01",
                    text: "Крупнейший инвестор Яндекса фонд Thornburg продаёт большую часть пакета."
                }, {
                    date: "2014-11-01",
                    text: "Третий месяц подряд падает доля раздаваемого Яндексом трафика."
                }, {
                    date: "2015-04-01",
                    text: "Еврокомиссия начинает расследование против Google из-за нарушения антимонопольного законодательства ."
                }, {
                    date: "2015-06-01",
                    text: "Закон о «праве на забвение» — поисковики обязаны удалять ссылки на устаревшую информацию по требованию граждан."
                }, {
                    date: "2015-09-01",
                    text: "ФАС признаёт Google виновным в злоупотреблении доминированием на рынке."
                }, {
                    date: "2016-02-01",
                    text: "Старт разработки беспилотных автомобилей."
                }, {
                    date: "2017-03-01",
                    text: "Старт разработки ИТ-системы для контроля за уставшими водителями Яндекс.Такси."
                }, {
                    date: "2017-07-01",
                    text: "Яндекс.Такси и Uber создают совместную компанию."
                }, {
                    date: "2017-10-01",
                    text: "Презентация голосового помощника «Алиса»."
                }, {
                    date: "2018-04-01",
                    text: "Роскомнадзор начинает борьбу с Telegram и массово блокирует IP-адреса."
                }, {
                    date: "2018-10-01",
                    text: "По слухам, Сбербанк намерен купить 30% Яндекса."
                }, {
                    date: "2019-01-01",
                    text: "Яндекс и Rambler расширяют сотрудничество в области онлайн-рекламы."
                }, {
                    date: "2019-06-01",
                    text: "Отказ передать ФСБ ключи шифрования."
                }, {
                    date: "2019-10-01",
                    text: "Госдума обсуждает законопроект, ограничивающий долю иностранных владельцев российских ИТ-компаний ."
                }, {
                    date: "2019-12-01",
                    text: "Эпидемия коронавируса."
                }, {
                    date: "2020-01-01",
                    text: "Премьер-министр Михаил Мишустин объявляет о планах поддержать Яндекс."
                }],
                code: "YNDX"
            },
            disney: {
                quotes: [{
                    date: "2010-09-20",
                    value: 33.580002
                }, {
                    date: "2010-09-27",
                    value: 33.34
                }, {
                    date: "2010-10-04",
                    value: 34.509998
                }, {
                    date: "2010-10-11",
                    value: 34.880001
                }, {
                    date: "2010-10-18",
                    value: 34.970001
                }, {
                    date: "2010-10-25",
                    value: 36.130001
                }, {
                    date: "2010-11-01",
                    value: 37.200001
                }, {
                    date: "2010-11-08",
                    value: 37.75
                }, {
                    date: "2010-11-15",
                    value: 37.009998
                }, {
                    date: "2010-11-22",
                    value: 36.700001
                }, {
                    date: "2010-11-29",
                    value: 37.59
                }, {
                    date: "2010-12-06",
                    value: 36.66
                }, {
                    date: "2010-12-13",
                    value: 37.049999
                }, {
                    date: "2010-12-20",
                    value: 37.700001
                }, {
                    date: "2010-12-27",
                    value: 37.509998
                }, {
                    date: "2011-01-03",
                    value: 39.450001
                }, {
                    date: "2011-01-10",
                    value: 39.290001
                }, {
                    date: "2011-01-17",
                    value: 39.740002
                }, {
                    date: "2011-01-24",
                    value: 38.849998
                }, {
                    date: "2011-01-31",
                    value: 40.709999
                }, {
                    date: "2011-02-07",
                    value: 43.41
                }, {
                    date: "2011-02-14",
                    value: 43.560001
                }, {
                    date: "2011-02-21",
                    value: 42.950001
                }, {
                    date: "2011-02-28",
                    value: 43.549999
                }, {
                    date: "2011-03-07",
                    value: 42.93
                }, {
                    date: "2011-03-14",
                    value: 41.23
                }, {
                    date: "2011-03-21",
                    value: 42.970001
                }, {
                    date: "2011-03-28",
                    value: 42.849998
                }, {
                    date: "2011-04-04",
                    value: 41.759998
                }, {
                    date: "2011-04-11",
                    value: 41.52
                }, {
                    date: "2011-04-18",
                    value: 42.27
                }, {
                    date: "2011-04-25",
                    value: 43.099998
                }, {
                    date: "2011-05-02",
                    value: 43.060001
                }, {
                    date: "2011-05-09",
                    value: 41.52
                }, {
                    date: "2011-05-16",
                    value: 41.5
                }, {
                    date: "2011-05-23",
                    value: 41.52
                }, {
                    date: "2011-05-30",
                    value: 39.380001
                }, {
                    date: "2011-06-06",
                    value: 38.5
                }, {
                    date: "2011-06-13",
                    value: 38.040001
                }, {
                    date: "2011-06-20",
                    value: 37.580002
                }, {
                    date: "2011-06-27",
                    value: 39.720001
                }, {
                    date: "2011-07-04",
                    value: 39.91
                }, {
                    date: "2011-07-11",
                    value: 39.27
                }, {
                    date: "2011-07-18",
                    value: 40.650002
                }, {
                    date: "2011-07-25",
                    value: 38.619999
                }, {
                    date: "2011-08-01",
                    value: 35.18
                }, {
                    date: "2011-08-08",
                    value: 33.09
                }, {
                    date: "2011-08-15",
                    value: 31.85
                }, {
                    date: "2011-08-22",
                    value: 32.400002
                }, {
                    date: "2011-08-29",
                    value: 32.459999
                }, {
                    date: "2011-09-05",
                    value: 31.040001
                }, {
                    date: "2011-09-12",
                    value: 32.91
                }, {
                    date: "2011-09-19",
                    value: 29.83
                }, {
                    date: "2011-09-26",
                    value: 30.16
                }, {
                    date: "2011-10-03",
                    value: 31.700001
                }, {
                    date: "2011-10-10",
                    value: 34.470001
                }, {
                    date: "2011-10-17",
                    value: 35.16
                }, {
                    date: "2011-10-24",
                    value: 36.209999
                }, {
                    date: "2011-10-31",
                    value: 34.759998
                }, {
                    date: "2011-11-07",
                    value: 36.700001
                }, {
                    date: "2011-11-14",
                    value: 35.630001
                }, {
                    date: "2011-11-21",
                    value: 33.509998
                }, {
                    date: "2011-11-28",
                    value: 36.610001
                }, {
                    date: "2011-12-05",
                    value: 36.560001
                }, {
                    date: "2011-12-12",
                    value: 35.32
                }, {
                    date: "2011-12-19",
                    value: 37.700001
                }, {
                    date: "2011-12-26",
                    value: 37.5
                }, {
                    date: "2012-01-02",
                    value: 39.91
                }, {
                    date: "2012-01-09",
                    value: 38.400002
                }, {
                    date: "2012-01-16",
                    value: 39.310001
                }, {
                    date: "2012-01-23",
                    value: 39.25
                }, {
                    date: "2012-01-30",
                    value: 40
                }, {
                    date: "2012-02-06",
                    value: 41.450001
                }, {
                    date: "2012-02-13",
                    value: 41.75
                }, {
                    date: "2012-02-20",
                    value: 41.310001
                }, {
                    date: "2012-02-27",
                    value: 42.360001
                }, {
                    date: "2012-03-05",
                    value: 42.240002
                }, {
                    date: "2012-03-12",
                    value: 43.189999
                }, {
                    date: "2012-03-19",
                    value: 43.650002
                }, {
                    date: "2012-03-26",
                    value: 43.779999
                }, {
                    date: "2012-04-02",
                    value: 43.080002
                }, {
                    date: "2012-04-09",
                    value: 41.849998
                }, {
                    date: "2012-04-16",
                    value: 42.349998
                }, {
                    date: "2012-04-23",
                    value: 43.349998
                }, {
                    date: "2012-04-30",
                    value: 42.93
                }, {
                    date: "2012-05-07",
                    value: 45.560001
                }, {
                    date: "2012-05-14",
                    value: 43.810001
                }, {
                    date: "2012-05-21",
                    value: 44.5
                }, {
                    date: "2012-05-28",
                    value: 44.400002
                }, {
                    date: "2012-06-04",
                    value: 46.240002
                }, {
                    date: "2012-06-11",
                    value: 47.09
                }, {
                    date: "2012-06-18",
                    value: 47.470001
                }, {
                    date: "2012-06-25",
                    value: 48.5
                }, {
                    date: "2012-07-02",
                    value: 48.040001
                }, {
                    date: "2012-07-09",
                    value: 48.189999
                }, {
                    date: "2012-07-16",
                    value: 48.59
                }, {
                    date: "2012-07-23",
                    value: 49.939999
                }, {
                    date: "2012-07-30",
                    value: 49.77
                }, {
                    date: "2012-08-06",
                    value: 49.650002
                }, {
                    date: "2012-08-13",
                    value: 50.459999
                }, {
                    date: "2012-08-20",
                    value: 49.560001
                }, {
                    date: "2012-08-27",
                    value: 49.470001
                }, {
                    date: "2012-09-03",
                    value: 51.740002
                }, {
                    date: "2012-09-10",
                    value: 52.349998
                }, {
                    date: "2012-09-17",
                    value: 52.740002
                }, {
                    date: "2012-09-24",
                    value: 52.279999
                }, {
                    date: "2012-10-01",
                    value: 52.970001
                }, {
                    date: "2012-10-08",
                    value: 50.59
                }, {
                    date: "2012-10-15",
                    value: 51.900002
                }, {
                    date: "2012-10-22",
                    value: 50.080002
                }, {
                    date: "2012-10-29",
                    value: 49.860001
                }, {
                    date: "2012-11-05",
                    value: 47.060001
                }, {
                    date: "2012-11-12",
                    value: 47.419998
                }, {
                    date: "2012-11-19",
                    value: 49.259998
                }, {
                    date: "2012-11-26",
                    value: 49.66
                }, {
                    date: "2012-12-03",
                    value: 49.240002
                }, {
                    date: "2012-12-10",
                    value: 48.669998
                }, {
                    date: "2012-12-17",
                    value: 50
                }, {
                    date: "2012-12-24",
                    value: 49.150002
                }, {
                    date: "2012-12-31",
                    value: 52.189999
                }, {
                    date: "2013-01-07",
                    value: 50.580002
                }, {
                    date: "2013-01-14",
                    value: 52.34
                }, {
                    date: "2013-01-21",
                    value: 54.380001
                }, {
                    date: "2013-01-28",
                    value: 54.59
                }, {
                    date: "2013-02-04",
                    value: 54.66
                }, {
                    date: "2013-02-11",
                    value: 55.610001
                }, {
                    date: "2013-02-18",
                    value: 54.25
                }, {
                    date: "2013-02-25",
                    value: 55.330002
                }, {
                    date: "2013-03-04",
                    value: 57.389999
                }, {
                    date: "2013-03-11",
                    value: 57.580002
                }, {
                    date: "2013-03-18",
                    value: 56.779999
                }, {
                    date: "2013-03-25",
                    value: 56.799999
                }, {
                    date: "2013-04-01",
                    value: 57.700001
                }, {
                    date: "2013-04-08",
                    value: 60.549999
                }, {
                    date: "2013-04-15",
                    value: 61.560001
                }, {
                    date: "2013-04-22",
                    value: 61.869999
                }, {
                    date: "2013-04-29",
                    value: 64.800003
                }, {
                    date: "2013-05-06",
                    value: 67.199997
                }, {
                    date: "2013-05-13",
                    value: 66.580002
                }, {
                    date: "2013-05-20",
                    value: 65.489998
                }, {
                    date: "2013-05-27",
                    value: 63.080002
                }, {
                    date: "2013-06-03",
                    value: 64.849998
                }, {
                    date: "2013-06-10",
                    value: 63.799999
                }, {
                    date: "2013-06-17",
                    value: 62.73
                }, {
                    date: "2013-06-24",
                    value: 63.150002
                }, {
                    date: "2013-07-01",
                    value: 63.82
                }, {
                    date: "2013-07-08",
                    value: 66.980003
                }, {
                    date: "2013-07-15",
                    value: 65.160004
                }, {
                    date: "2013-07-22",
                    value: 64.980003
                }, {
                    date: "2013-07-29",
                    value: 66.510002
                }, {
                    date: "2013-08-05",
                    value: 64.730003
                }, {
                    date: "2013-08-12",
                    value: 62.169998
                }, {
                    date: "2013-08-19",
                    value: 61.73
                }, {
                    date: "2013-08-26",
                    value: 60.830002
                }, {
                    date: "2013-09-02",
                    value: 61.389999
                }, {
                    date: "2013-09-09",
                    value: 66.690002
                }, {
                    date: "2013-09-16",
                    value: 65.010002
                }, {
                    date: "2013-09-23",
                    value: 65.190002
                }, {
                    date: "2013-09-30",
                    value: 65.300003
                }, {
                    date: "2013-10-07",
                    value: 66.209999
                }, {
                    date: "2013-10-14",
                    value: 67.150002
                }, {
                    date: "2013-10-21",
                    value: 69.260002
                }, {
                    date: "2013-10-28",
                    value: 69.010002
                }, {
                    date: "2013-11-04",
                    value: 68.580002
                }, {
                    date: "2013-11-11",
                    value: 70
                }, {
                    date: "2013-11-18",
                    value: 70.199997
                }, {
                    date: "2013-11-25",
                    value: 70.540001
                }, {
                    date: "2013-12-02",
                    value: 71.459999
                }, {
                    date: "2013-12-09",
                    value: 69.620003
                }, {
                    date: "2013-12-16",
                    value: 72.400002
                }, {
                    date: "2013-12-23",
                    value: 74.349998
                }, {
                    date: "2013-12-30",
                    value: 76.110001
                }, {
                    date: "2014-01-06",
                    value: 75.389999
                }, {
                    date: "2014-01-13",
                    value: 73.980003
                }, {
                    date: "2014-01-20",
                    value: 72.720001
                }, {
                    date: "2014-01-27",
                    value: 72.610001
                }, {
                    date: "2014-02-03",
                    value: 75.669998
                }, {
                    date: "2014-02-10",
                    value: 79.230003
                }, {
                    date: "2014-02-17",
                    value: 80.129997
                }, {
                    date: "2014-02-24",
                    value: 80.809998
                }, {
                    date: "2014-03-03",
                    value: 82.209999
                }, {
                    date: "2014-03-10",
                    value: 80.07
                }, {
                    date: "2014-03-17",
                    value: 80.349998
                }, {
                    date: "2014-03-24",
                    value: 78.989998
                }, {
                    date: "2014-03-31",
                    value: 80.43
                }, {
                    date: "2014-04-07",
                    value: 77.010002
                }, {
                    date: "2014-04-14",
                    value: 79.989998
                }, {
                    date: "2014-04-21",
                    value: 78.230003
                }, {
                    date: "2014-04-28",
                    value: 80.309998
                }, {
                    date: "2014-05-05",
                    value: 81.949997
                }, {
                    date: "2014-05-12",
                    value: 80.389999
                }, {
                    date: "2014-05-19",
                    value: 83.32
                }, {
                    date: "2014-05-26",
                    value: 84.010002
                }, {
                    date: "2014-06-02",
                    value: 84.610001
                }, {
                    date: "2014-06-09",
                    value: 82.800003
                }, {
                    date: "2014-06-16",
                    value: 82.82
                }, {
                    date: "2014-06-23",
                    value: 85.300003
                }, {
                    date: "2014-06-30",
                    value: 86.839996
                }, {
                    date: "2014-07-07",
                    value: 86.889999
                }, {
                    date: "2014-07-14",
                    value: 85.809998
                }, {
                    date: "2014-07-21",
                    value: 86.230003
                }, {
                    date: "2014-07-28",
                    value: 85.379997
                }, {
                    date: "2014-08-04",
                    value: 86.849998
                }, {
                    date: "2014-08-11",
                    value: 89.279999
                }, {
                    date: "2014-08-18",
                    value: 90.489998
                }, {
                    date: "2014-08-25",
                    value: 89.879997
                }, {
                    date: "2014-09-01",
                    value: 90.940002
                }, {
                    date: "2014-09-08",
                    value: 89.669998
                }, {
                    date: "2014-09-15",
                    value: 90.489998
                }, {
                    date: "2014-09-22",
                    value: 88.739998
                }, {
                    date: "2014-09-29",
                    value: 88.449997
                }, {
                    date: "2014-10-06",
                    value: 86.269997
                }, {
                    date: "2014-10-13",
                    value: 83.830002
                }, {
                    date: "2014-10-20",
                    value: 88.610001
                }, {
                    date: "2014-10-27",
                    value: 91.379997
                }, {
                    date: "2014-11-03",
                    value: 90
                }, {
                    date: "2014-11-10",
                    value: 90.800003
                }, {
                    date: "2014-11-17",
                    value: 88.959999
                }, {
                    date: "2014-11-24",
                    value: 92.510002
                }, {
                    date: "2014-12-01",
                    value: 93.760002
                }, {
                    date: "2014-12-08",
                    value: 91.489998
                }, {
                    date: "2014-12-15",
                    value: 92.889999
                }, {
                    date: "2014-12-22",
                    value: 95.029999
                }, {
                    date: "2014-12-29",
                    value: 93.75
                }, {
                    date: "2015-01-05",
                    value: 94.25
                }, {
                    date: "2015-01-12",
                    value: 95.18
                }, {
                    date: "2015-01-19",
                    value: 94.720001
                }, {
                    date: "2015-01-26",
                    value: 90.959999
                }, {
                    date: "2015-02-02",
                    value: 102.019997
                }, {
                    date: "2015-02-09",
                    value: 104.169998
                }, {
                    date: "2015-02-16",
                    value: 104.550003
                }, {
                    date: "2015-02-23",
                    value: 104.080002
                }, {
                    date: "2015-03-02",
                    value: 103.82
                }, {
                    date: "2015-03-09",
                    value: 106.440002
                }, {
                    date: "2015-03-16",
                    value: 108.43
                }, {
                    date: "2015-03-23",
                    value: 105.480003
                }, {
                    date: "2015-03-30",
                    value: 106
                }, {
                    date: "2015-04-06",
                    value: 106.949997
                }, {
                    date: "2015-04-13",
                    value: 106.690002
                }, {
                    date: "2015-04-20",
                    value: 109.529999
                }, {
                    date: "2015-04-27",
                    value: 110.519997
                }, {
                    date: "2015-05-04",
                    value: 110.110001
                }, {
                    date: "2015-05-11",
                    value: 110.300003
                }, {
                    date: "2015-05-18",
                    value: 110.260002
                }, {
                    date: "2015-05-25",
                    value: 110.370003
                }, {
                    date: "2015-06-01",
                    value: 110.300003
                }, {
                    date: "2015-06-08",
                    value: 109.949997
                }, {
                    date: "2015-06-15",
                    value: 112.620003
                }, {
                    date: "2015-06-22",
                    value: 114.989998
                }, {
                    date: "2015-06-29",
                    value: 114.970001
                }, {
                    date: "2015-07-06",
                    value: 116.440002
                }, {
                    date: "2015-07-13",
                    value: 118.860001
                }, {
                    date: "2015-07-20",
                    value: 118.910004
                }, {
                    date: "2015-07-27",
                    value: 120
                }, {
                    date: "2015-08-03",
                    value: 109.349998
                }, {
                    date: "2015-08-10",
                    value: 107.160004
                }, {
                    date: "2015-08-17",
                    value: 98.839996
                }, {
                    date: "2015-08-24",
                    value: 102.480003
                }, {
                    date: "2015-08-31",
                    value: 100.970001
                }, {
                    date: "2015-09-07",
                    value: 104.480003
                }, {
                    date: "2015-09-14",
                    value: 102.839996
                }, {
                    date: "2015-09-21",
                    value: 100.300003
                }, {
                    date: "2015-09-28",
                    value: 103
                }, {
                    date: "2015-10-05",
                    value: 105.559998
                }, {
                    date: "2015-10-12",
                    value: 108.239998
                }, {
                    date: "2015-10-19",
                    value: 113.089996
                }, {
                    date: "2015-10-26",
                    value: 113.739998
                }, {
                    date: "2015-11-02",
                    value: 115.669998
                }, {
                    date: "2015-11-09",
                    value: 114.839996
                }, {
                    date: "2015-11-16",
                    value: 120.07
                }, {
                    date: "2015-11-23",
                    value: 115.129997
                }, {
                    date: "2015-11-30",
                    value: 114.239998
                }, {
                    date: "2015-12-07",
                    value: 108.040001
                }, {
                    date: "2015-12-14",
                    value: 107.720001
                }, {
                    date: "2015-12-21",
                    value: 105.860001
                }, {
                    date: "2015-12-28",
                    value: 105.080002
                }, {
                    date: "2016-01-04",
                    value: 99.25
                }, {
                    date: "2016-01-11",
                    value: 93.900002
                }, {
                    date: "2016-01-18",
                    value: 96.900002
                }, {
                    date: "2016-01-25",
                    value: 95.82
                }, {
                    date: "2016-02-01",
                    value: 93.900002
                }, {
                    date: "2016-02-08",
                    value: 91.150002
                }, {
                    date: "2016-02-15",
                    value: 95.010002
                }, {
                    date: "2016-02-22",
                    value: 95.309998
                }, {
                    date: "2016-02-29",
                    value: 98.480003
                }, {
                    date: "2016-03-07",
                    value: 97.940002
                }, {
                    date: "2016-03-14",
                    value: 99.199997
                }, {
                    date: "2016-03-21",
                    value: 97.220001
                }, {
                    date: "2016-03-28",
                    value: 99.07
                }, {
                    date: "2016-04-04",
                    value: 96.419998
                }, {
                    date: "2016-04-11",
                    value: 98.589996
                }, {
                    date: "2016-04-18",
                    value: 103.769997
                }, {
                    date: "2016-04-25",
                    value: 103.260002
                }, {
                    date: "2016-05-02",
                    value: 105.540001
                }, {
                    date: "2016-05-09",
                    value: 100.519997
                }, {
                    date: "2016-05-16",
                    value: 99.779999
                }, {
                    date: "2016-05-23",
                    value: 100.290001
                }, {
                    date: "2016-05-30",
                    value: 98.75
                }, {
                    date: "2016-06-06",
                    value: 97.339996
                }, {
                    date: "2016-06-13",
                    value: 99
                }, {
                    date: "2016-06-20",
                    value: 95.720001
                }, {
                    date: "2016-06-27",
                    value: 98.029999
                }, {
                    date: "2016-07-04",
                    value: 99.620003
                }, {
                    date: "2016-07-11",
                    value: 99.800003
                }, {
                    date: "2016-07-18",
                    value: 97.709999
                }, {
                    date: "2016-07-25",
                    value: 95.949997
                }, {
                    date: "2016-08-01",
                    value: 95.830002
                }, {
                    date: "2016-08-08",
                    value: 96.839996
                }, {
                    date: "2016-08-15",
                    value: 96.389999
                }, {
                    date: "2016-08-22",
                    value: 95.209999
                }, {
                    date: "2016-08-29",
                    value: 94.419998
                }, {
                    date: "2016-09-05",
                    value: 92.419998
                }, {
                    date: "2016-09-12",
                    value: 92.559998
                }, {
                    date: "2016-09-19",
                    value: 93.269997
                }, {
                    date: "2016-09-26",
                    value: 92.860001
                }, {
                    date: "2016-10-03",
                    value: 92.489998
                }, {
                    date: "2016-10-10",
                    value: 91.300003
                }, {
                    date: "2016-10-17",
                    value: 93.029999
                }, {
                    date: "2016-10-24",
                    value: 93.849998
                }, {
                    date: "2016-10-31",
                    value: 92.449997
                }, {
                    date: "2016-11-07",
                    value: 97.68
                }, {
                    date: "2016-11-14",
                    value: 98.239998
                }, {
                    date: "2016-11-21",
                    value: 98.82
                }, {
                    date: "2016-11-28",
                    value: 98.5
                }, {
                    date: "2016-12-05",
                    value: 104.860001
                }, {
                    date: "2016-12-12",
                    value: 103.910004
                }, {
                    date: "2016-12-19",
                    value: 105.150002
                }, {
                    date: "2016-12-26",
                    value: 104.220001
                }, {
                    date: "2017-01-02",
                    value: 108.980003
                }, {
                    date: "2017-01-09",
                    value: 108.059998
                }, {
                    date: "2017-01-16",
                    value: 107.660004
                }, {
                    date: "2017-01-23",
                    value: 109.300003
                }, {
                    date: "2017-01-30",
                    value: 110.300003
                }, {
                    date: "2017-02-06",
                    value: 109.260002
                }, {
                    date: "2017-02-13",
                    value: 110.059998
                }, {
                    date: "2017-02-20",
                    value: 110.32
                }, {
                    date: "2017-02-27",
                    value: 111.239998
                }, {
                    date: "2017-03-06",
                    value: 110.919998
                }, {
                    date: "2017-03-13",
                    value: 111.760002
                }, {
                    date: "2017-03-20",
                    value: 112.139999
                }, {
                    date: "2017-03-27",
                    value: 113.389999
                }, {
                    date: "2017-04-03",
                    value: 112.580002
                }, {
                    date: "2017-04-10",
                    value: 113.199997
                }, {
                    date: "2017-04-17",
                    value: 114.440002
                }, {
                    date: "2017-04-24",
                    value: 115.599998
                }, {
                    date: "2017-05-01",
                    value: 111.989998
                }, {
                    date: "2017-05-08",
                    value: 109.690002
                }, {
                    date: "2017-05-15",
                    value: 107.519997
                }, {
                    date: "2017-05-22",
                    value: 108.410004
                }, {
                    date: "2017-05-29",
                    value: 107.18
                }, {
                    date: "2017-06-05",
                    value: 105.620003
                }, {
                    date: "2017-06-12",
                    value: 105.510002
                }, {
                    date: "2017-06-19",
                    value: 104.360001
                }, {
                    date: "2017-06-26",
                    value: 106.25
                }, {
                    date: "2017-07-03",
                    value: 103.32
                }, {
                    date: "2017-07-10",
                    value: 105.089996
                }, {
                    date: "2017-07-17",
                    value: 107.089996
                }, {
                    date: "2017-07-24",
                    value: 109.959999
                }, {
                    date: "2017-07-31",
                    value: 107.690002
                }, {
                    date: "2017-08-07",
                    value: 101.989998
                }, {
                    date: "2017-08-14",
                    value: 100.699997
                }, {
                    date: "2017-08-21",
                    value: 102.410004
                }, {
                    date: "2017-08-28",
                    value: 101.5
                }, {
                    date: "2017-09-04",
                    value: 97.07
                }, {
                    date: "2017-09-11",
                    value: 98.519997
                }, {
                    date: "2017-09-18",
                    value: 98.599998
                }, {
                    date: "2017-09-25",
                    value: 98.57
                }, {
                    date: "2017-10-02",
                    value: 100.07
                }, {
                    date: "2017-10-09",
                    value: 97.379997
                }, {
                    date: "2017-10-16",
                    value: 99.400002
                }, {
                    date: "2017-10-23",
                    value: 98.309998
                }, {
                    date: "2017-10-30",
                    value: 98.639999
                }, {
                    date: "2017-11-06",
                    value: 104.779999
                }, {
                    date: "2017-11-13",
                    value: 103.440002
                }, {
                    date: "2017-11-20",
                    value: 102.639999
                }, {
                    date: "2017-11-27",
                    value: 105.25
                }, {
                    date: "2017-12-04",
                    value: 104.230003
                }, {
                    date: "2017-12-11",
                    value: 111.269997
                }, {
                    date: "2017-12-18",
                    value: 108.669998
                }, {
                    date: "2017-12-25",
                    value: 107.510002
                }, {
                    date: "2018-01-01",
                    value: 111.620003
                }, {
                    date: "2018-01-08",
                    value: 112.470001
                }, {
                    date: "2018-01-15",
                    value: 110.589996
                }, {
                    date: "2018-01-22",
                    value: 112.190002
                }, {
                    date: "2018-01-29",
                    value: 108.699997
                }, {
                    date: "2018-02-05",
                    value: 103.089996
                }, {
                    date: "2018-02-12",
                    value: 106.529999
                }, {
                    date: "2018-02-19",
                    value: 107.25
                }, {
                    date: "2018-02-26",
                    value: 102.989998
                }, {
                    date: "2018-03-05",
                    value: 104.730003
                }, {
                    date: "2018-03-12",
                    value: 102.870003
                }, {
                    date: "2018-03-19",
                    value: 98.540001
                }, {
                    date: "2018-03-26",
                    value: 100.440002
                }, {
                    date: "2018-04-02",
                    value: 100.349998
                }, {
                    date: "2018-04-09",
                    value: 100.349998
                }, {
                    date: "2018-04-16",
                    value: 100.239998
                }, {
                    date: "2018-04-23",
                    value: 99.230003
                }, {
                    date: "2018-04-30",
                    value: 101.150002
                }, {
                    date: "2018-05-07",
                    value: 102.07
                }, {
                    date: "2018-05-14",
                    value: 103.93
                }, {
                    date: "2018-05-21",
                    value: 102.199997
                }, {
                    date: "2018-05-28",
                    value: 99.360001
                }, {
                    date: "2018-06-04",
                    value: 103.980003
                }, {
                    date: "2018-06-11",
                    value: 108.849998
                }, {
                    date: "2018-06-18",
                    value: 106.339996
                }, {
                    date: "2018-06-25",
                    value: 104.809998
                }, {
                    date: "2018-07-02",
                    value: 104.779999
                }, {
                    date: "2018-07-09",
                    value: 110
                }, {
                    date: "2018-07-16",
                    value: 111.480003
                }, {
                    date: "2018-07-23",
                    value: 112.620003
                }, {
                    date: "2018-07-30",
                    value: 114.089996
                }, {
                    date: "2018-08-06",
                    value: 112.68
                }, {
                    date: "2018-08-13",
                    value: 112.480003
                }, {
                    date: "2018-08-20",
                    value: 111.93
                }, {
                    date: "2018-08-27",
                    value: 112.019997
                }, {
                    date: "2018-09-03",
                    value: 110.970001
                }, {
                    date: "2018-09-10",
                    value: 109.260002
                }, {
                    date: "2018-09-17",
                    value: 110.400002
                }, {
                    date: "2018-09-24",
                    value: 116.940002
                }, {
                    date: "2018-10-01",
                    value: 114.779999
                }, {
                    date: "2018-10-08",
                    value: 112.610001
                }, {
                    date: "2018-10-15",
                    value: 118.900002
                }, {
                    date: "2018-10-22",
                    value: 113.190002
                }, {
                    date: "2018-10-29",
                    value: 115.18
                }, {
                    date: "2018-11-05",
                    value: 118
                }, {
                    date: "2018-11-12",
                    value: 116.190002
                }, {
                    date: "2018-11-19",
                    value: 112.080002
                }, {
                    date: "2018-11-26",
                    value: 115.489998
                }, {
                    date: "2018-12-03",
                    value: 111.980003
                }, {
                    date: "2018-12-10",
                    value: 112.199997
                }, {
                    date: "2018-12-17",
                    value: 104.220001
                }, {
                    date: "2018-12-24",
                    value: 107.300003
                }, {
                    date: "2018-12-31",
                    value: 109.610001
                }, {
                    date: "2019-01-07",
                    value: 112.650002
                }, {
                    date: "2019-01-14",
                    value: 111.040001
                }, {
                    date: "2019-01-21",
                    value: 111.089996
                }, {
                    date: "2019-01-28",
                    value: 111.300003
                }, {
                    date: "2019-02-04",
                    value: 111.510002
                }, {
                    date: "2019-02-11",
                    value: 112.589996
                }, {
                    date: "2019-02-18",
                    value: 115.25
                }, {
                    date: "2019-02-25",
                    value: 114.010002
                }, {
                    date: "2019-03-04",
                    value: 113.809998
                }, {
                    date: "2019-03-11",
                    value: 114.959999
                }, {
                    date: "2019-03-18",
                    value: 108.230003
                }, {
                    date: "2019-03-25",
                    value: 111.029999
                }, {
                    date: "2019-04-01",
                    value: 115
                }, {
                    date: "2019-04-08",
                    value: 130.059998
                }, {
                    date: "2019-04-15",
                    value: 132.449997
                }, {
                    date: "2019-04-22",
                    value: 139.919998
                }, {
                    date: "2019-04-29",
                    value: 134.330002
                }, {
                    date: "2019-05-06",
                    value: 134.039993
                }, {
                    date: "2019-05-13",
                    value: 135.039993
                }, {
                    date: "2019-05-20",
                    value: 132.789993
                }, {
                    date: "2019-05-27",
                    value: 132.039993
                }, {
                    date: "2019-06-03",
                    value: 138.039993
                }, {
                    date: "2019-06-10",
                    value: 141.649994
                }, {
                    date: "2019-06-17",
                    value: 140.229996
                }, {
                    date: "2019-06-24",
                    value: 139.639999
                }, {
                    date: "2019-07-01",
                    value: 142.449997
                }, {
                    date: "2019-07-08",
                    value: 144.880005
                }, {
                    date: "2019-07-15",
                    value: 139.850006
                }, {
                    date: "2019-07-22",
                    value: 144.649994
                }, {
                    date: "2019-07-29",
                    value: 141.710007
                }, {
                    date: "2019-08-05",
                    value: 138.520004
                }, {
                    date: "2019-08-12",
                    value: 135.199997
                }, {
                    date: "2019-08-19",
                    value: 131.669998
                }, {
                    date: "2019-08-26",
                    value: 137.259995
                }, {
                    date: "2019-09-02",
                    value: 139.550003
                }, {
                    date: "2019-09-09",
                    value: 138.020004
                }, {
                    date: "2019-09-16",
                    value: 132.270004
                }, {
                    date: "2019-09-23",
                    value: 129.960007
                }, {
                    date: "2019-09-30",
                    value: 130.270004
                }, {
                    date: "2019-10-07",
                    value: 130.020004
                }, {
                    date: "2019-10-14",
                    value: 130.889999
                }, {
                    date: "2019-10-21",
                    value: 130.899994
                }, {
                    date: "2019-10-28",
                    value: 132.75
                }, {
                    date: "2019-11-04",
                    value: 137.960007
                }, {
                    date: "2019-11-11",
                    value: 144.669998
                }, {
                    date: "2019-11-18",
                    value: 148.289993
                }, {
                    date: "2019-11-25",
                    value: 151.580002
                }, {
                    date: "2019-12-02",
                    value: 147.660004
                }, {
                    date: "2019-12-09",
                    value: 146.380005
                }, {
                    date: "2019-12-16",
                    value: 146.880005
                }, {
                    date: "2019-12-23",
                    value: 145.75
                }, {
                    date: "2019-12-30",
                    value: 146.5
                }, {
                    date: "2020-01-06",
                    value: 144.619995
                }, {
                    date: "2020-01-13",
                    value: 144.330002
                }, {
                    date: "2020-01-20",
                    value: 140.080002
                }, {
                    date: "2020-01-27",
                    value: 138.309998
                }, {
                    date: "2020-02-03",
                    value: 141.020004
                }, {
                    date: "2020-02-10",
                    value: 139.539993
                }, {
                    date: "2020-02-17",
                    value: 138.970001
                }, {
                    date: "2020-02-24",
                    value: 117.650002
                }, {
                    date: "2020-03-02",
                    value: 115.269997
                }, {
                    date: "2020-03-09",
                    value: 102.519997
                }, {
                    date: "2020-03-16",
                    value: 85.980003
                }, {
                    date: "2020-03-23",
                    value: 96.400002
                }, {
                    date: "2020-03-30",
                    value: 93.879997
                }, {
                    date: "2020-04-06",
                    value: 104.5
                }, {
                    date: "2020-04-13",
                    value: 106.629997
                }, {
                    date: "2020-04-20",
                    value: 101.190002
                }, {
                    date: "2020-04-27",
                    value: 105.5
                }, {
                    date: "2020-05-04",
                    value: 109.160004
                }, {
                    date: "2020-05-11",
                    value: 109.050003
                }, {
                    date: "2020-05-18",
                    value: 118.019997
                }, {
                    date: "2020-05-25",
                    value: 117.300003
                }, {
                    date: "2020-06-01",
                    value: 124.82
                }, {
                    date: "2020-06-08",
                    value: 115.489998
                }, {
                    date: "2020-06-15",
                    value: 117.080002
                }],
                events: [{
                    date: "2011-01-01",
                    text: "Первый рейс круизного лайнера Disney Dream."
                }, {
                    date: "2011-04-01",
                    text: "Начало строительства тематического парка в Шанхае."
                }, {
                    date: "2011-07-01",
                    text: "CEO Роберт Айгер объявляет «переходный год» с «более плавным развитием»."
                }, {
                    date: "2012-02-01",
                    text: "Покупка индийского медиахолдинга UTV Software Communications."
                }, {
                    date: "2012-12-01",
                    text: "Disney покупает Lucasfilm за $4.06 млрд и анонсирует сиквел «Звёздных войн»."
                }, {
                    date: "2013-07-01",
                    text: "Disney Junior закрывает телеканал Soapnet."
                }, {
                    date: "2014-03-01",
                    text: "Покупка студии Maker, управляющей YouTube-каналами, в том числе PewDiePie."
                }, {
                    date: "2014-12-01",
                    text: "Продажи фирменной атрибутики выросли на 46%."
                }, {
                    date: "2015-07-01",
                    text: "Резкое снижение продаж рекламы на канале ESPN (принадлежит Disney)."
                }, {
                    date: "2015-09-01",
                    text: "Реорганизация студии Marvel."
                }, {
                    date: "2015-12-01",
                    text: "Выходит 7 эпизод «Звёздных войн», аудитория ESPN продолжает снижаться."
                }, {
                    date: "2016-04-01",
                    text: "Открытие Диснейленда в Шанхае."
                }, {
                    date: "2016-08-01",
                    text: "Disney лишается прав на прокат фильмов студии DreamWorks."
                }, {
                    date: "2017-01-01",
                    text: "Disney выкупает долю в стриминговом сервисе BAMTech и дистрибутирует трансляции ESPN в интернете."
                }, {
                    date: "2017-08-01",
                    text: "Disney доводит свою долю в BAMTech до 75%."
                }, {
                    date: "2018-03-01",
                    text: "Начало стратегической реорганизации компании."
                }, {
                    date: "2019-03-01",
                    text: "Покупка 21st Century Fox за $71 млрд."
                }, {
                    date: "2019-11-01",
                    text: "Сбой в первый день работы стримингового сервиса Disney+. "
                }, {
                    date: "2019-12-01",
                    text: "Эпидемия коронавируса ."
                }, {
                    date: "2020-03-01",
                    text: "Съёмки многих картин заморожены, премьеры перенесены."
                }],
                code: "DIS"
            },
            apple: {
                quotes: [{
                    date: "2010-09-20",
                    value: 41.759998
                }, {
                    date: "2010-09-27",
                    value: 40.360001
                }, {
                    date: "2010-10-04",
                    value: 42.009998
                }, {
                    date: "2010-10-11",
                    value: 44.962856
                }, {
                    date: "2010-10-18",
                    value: 43.924286
                }, {
                    date: "2010-10-25",
                    value: 42.997143
                }, {
                    date: "2010-11-01",
                    value: 45.304287
                }, {
                    date: "2010-11-08",
                    value: 44.004284
                }, {
                    date: "2010-11-15",
                    value: 43.818573
                }, {
                    date: "2010-11-22",
                    value: 45
                }, {
                    date: "2010-11-29",
                    value: 45.348572
                }, {
                    date: "2010-12-06",
                    value: 45.794285
                }, {
                    date: "2010-12-13",
                    value: 45.80143
                }, {
                    date: "2010-12-20",
                    value: 46.228573
                }, {
                    date: "2010-12-27",
                    value: 46.080002
                }, {
                    date: "2011-01-03",
                    value: 48.017143
                }, {
                    date: "2011-01-10",
                    value: 49.782856
                }, {
                    date: "2011-01-17",
                    value: 46.674286
                }, {
                    date: "2011-01-24",
                    value: 48.014286
                }, {
                    date: "2011-01-31",
                    value: 49.5
                }, {
                    date: "2011-02-07",
                    value: 50.978573
                }, {
                    date: "2011-02-14",
                    value: 50.080002
                }, {
                    date: "2011-02-21",
                    value: 49.737144
                }, {
                    date: "2011-02-28",
                    value: 51.42857
                }, {
                    date: "2011-03-07",
                    value: 50.284286
                }, {
                    date: "2011-03-14",
                    value: 47.238571
                }, {
                    date: "2011-03-21",
                    value: 50.220001
                }, {
                    date: "2011-03-28",
                    value: 49.222858
                }, {
                    date: "2011-04-04",
                    value: 47.865715
                }, {
                    date: "2011-04-11",
                    value: 46.779999
                }, {
                    date: "2011-04-18",
                    value: 50.099998
                }, {
                    date: "2011-04-25",
                    value: 50.01857
                }, {
                    date: "2011-05-02",
                    value: 49.522858
                }, {
                    date: "2011-05-09",
                    value: 48.642857
                }, {
                    date: "2011-05-16",
                    value: 47.888573
                }, {
                    date: "2011-05-23",
                    value: 48.201427
                }, {
                    date: "2011-05-30",
                    value: 49.062859
                }, {
                    date: "2011-06-06",
                    value: 46.557144
                }, {
                    date: "2011-06-13",
                    value: 45.751427
                }, {
                    date: "2011-06-20",
                    value: 46.621429
                }, {
                    date: "2011-06-27",
                    value: 49.037144
                }, {
                    date: "2011-07-04",
                    value: 51.387142
                }, {
                    date: "2011-07-11",
                    value: 52.131428
                }, {
                    date: "2011-07-18",
                    value: 56.185715
                }, {
                    date: "2011-07-25",
                    value: 55.782856
                }, {
                    date: "2011-08-01",
                    value: 53.374287
                }, {
                    date: "2011-08-08",
                    value: 53.855713
                }, {
                    date: "2011-08-15",
                    value: 50.861427
                }, {
                    date: "2011-08-22",
                    value: 54.797142
                }, {
                    date: "2011-08-29",
                    value: 53.435715
                }, {
                    date: "2011-09-05",
                    value: 53.925713
                }, {
                    date: "2011-09-12",
                    value: 57.214287
                }, {
                    date: "2011-09-19",
                    value: 57.757141
                }, {
                    date: "2011-09-26",
                    value: 54.474285
                }, {
                    date: "2011-10-03",
                    value: 52.828571
                }, {
                    date: "2011-10-10",
                    value: 60.285713
                }, {
                    date: "2011-10-17",
                    value: 56.124287
                }, {
                    date: "2011-10-24",
                    value: 57.849998
                }, {
                    date: "2011-10-31",
                    value: 57.177143
                }, {
                    date: "2011-11-07",
                    value: 54.945713
                }, {
                    date: "2011-11-14",
                    value: 53.562859
                }, {
                    date: "2011-11-21",
                    value: 51.938572
                }, {
                    date: "2011-11-28",
                    value: 55.671429
                }, {
                    date: "2011-12-05",
                    value: 56.23143
                }, {
                    date: "2011-12-12",
                    value: 54.431427
                }, {
                    date: "2011-12-19",
                    value: 57.618572
                }, {
                    date: "2011-12-26",
                    value: 57.857143
                }, {
                    date: "2012-01-02",
                    value: 60.342857
                }, {
                    date: "2012-01-09",
                    value: 59.972858
                }, {
                    date: "2012-01-16",
                    value: 60.042858
                }, {
                    date: "2012-01-23",
                    value: 63.897144
                }, {
                    date: "2012-01-30",
                    value: 65.668571
                }, {
                    date: "2012-02-06",
                    value: 70.488571
                }, {
                    date: "2012-02-13",
                    value: 71.73143
                }, {
                    date: "2012-02-20",
                    value: 74.629997
                }, {
                    date: "2012-02-27",
                    value: 77.882858
                }, {
                    date: "2012-03-05",
                    value: 77.881432
                }, {
                    date: "2012-03-12",
                    value: 83.652855
                }, {
                    date: "2012-03-19",
                    value: 85.150002
                }, {
                    date: "2012-03-26",
                    value: 85.650002
                }, {
                    date: "2012-04-02",
                    value: 90.525711
                }, {
                    date: "2012-04-09",
                    value: 86.461426
                }, {
                    date: "2012-04-16",
                    value: 81.854286
                }, {
                    date: "2012-04-23",
                    value: 86.14286
                }, {
                    date: "2012-04-30",
                    value: 80.75
                }, {
                    date: "2012-05-07",
                    value: 80.958572
                }, {
                    date: "2012-05-14",
                    value: 75.76857
                }, {
                    date: "2012-05-21",
                    value: 80.327141
                }, {
                    date: "2012-05-28",
                    value: 80.141426
                }, {
                    date: "2012-06-04",
                    value: 82.902855
                }, {
                    date: "2012-06-11",
                    value: 82.01857
                }, {
                    date: "2012-06-18",
                    value: 83.157143
                }, {
                    date: "2012-06-25",
                    value: 83.428574
                }, {
                    date: "2012-07-02",
                    value: 86.554283
                }, {
                    date: "2012-07-09",
                    value: 86.424286
                }, {
                    date: "2012-07-16",
                    value: 86.328575
                }, {
                    date: "2012-07-23",
                    value: 83.594284
                }, {
                    date: "2012-07-30",
                    value: 87.957146
                }, {
                    date: "2012-08-06",
                    value: 88.814285
                }, {
                    date: "2012-08-13",
                    value: 92.587143
                }, {
                    date: "2012-08-20",
                    value: 94.745712
                }, {
                    date: "2012-08-27",
                    value: 95.034286
                }, {
                    date: "2012-09-03",
                    value: 97.205711
                }, {
                    date: "2012-09-10",
                    value: 98.754288
                }, {
                    date: "2012-09-17",
                    value: 100.012856
                }, {
                    date: "2012-09-24",
                    value: 95.300003
                }, {
                    date: "2012-10-01",
                    value: 93.227142
                }, {
                    date: "2012-10-08",
                    value: 89.958572
                }, {
                    date: "2012-10-15",
                    value: 87.120003
                }, {
                    date: "2012-10-22",
                    value: 86.285713
                }, {
                    date: "2012-10-29",
                    value: 82.400002
                }, {
                    date: "2012-11-05",
                    value: 78.151428
                }, {
                    date: "2012-11-12",
                    value: 75.382858
                }, {
                    date: "2012-11-19",
                    value: 81.64286
                }, {
                    date: "2012-11-26",
                    value: 83.611427
                }, {
                    date: "2012-12-03",
                    value: 76.178574
                }, {
                    date: "2012-12-10",
                    value: 72.827141
                }, {
                    date: "2012-12-17",
                    value: 74.190002
                }, {
                    date: "2012-12-24",
                    value: 72.798569
                }, {
                    date: "2012-12-31",
                    value: 75.285713
                }, {
                    date: "2013-01-07",
                    value: 74.328575
                }, {
                    date: "2013-01-14",
                    value: 71.428574
                }, {
                    date: "2013-01-21",
                    value: 62.84
                }, {
                    date: "2013-01-28",
                    value: 64.802856
                }, {
                    date: "2013-02-04",
                    value: 67.854286
                }, {
                    date: "2013-02-11",
                    value: 65.737144
                }, {
                    date: "2013-02-18",
                    value: 64.401428
                }, {
                    date: "2013-02-25",
                    value: 61.495716
                }, {
                    date: "2013-03-04",
                    value: 61.674286
                }, {
                    date: "2013-03-11",
                    value: 63.380001
                }, {
                    date: "2013-03-18",
                    value: 65.987144
                }, {
                    date: "2013-03-25",
                    value: 63.237144
                }, {
                    date: "2013-04-01",
                    value: 60.457142
                }, {
                    date: "2013-04-08",
                    value: 61.400002
                }, {
                    date: "2013-04-15",
                    value: 55.790001
                }, {
                    date: "2013-04-22",
                    value: 59.599998
                }, {
                    date: "2013-04-29",
                    value: 64.28286
                }, {
                    date: "2013-05-06",
                    value: 64.709999
                }, {
                    date: "2013-05-13",
                    value: 61.894287
                }, {
                    date: "2013-05-20",
                    value: 63.592857
                }, {
                    date: "2013-05-27",
                    value: 64.247147
                }, {
                    date: "2013-06-03",
                    value: 63.115715
                }, {
                    date: "2013-06-10",
                    value: 61.435715
                }, {
                    date: "2013-06-17",
                    value: 59.07143
                }, {
                    date: "2013-06-24",
                    value: 56.647144
                }, {
                    date: "2013-07-01",
                    value: 59.631428
                }, {
                    date: "2013-07-08",
                    value: 60.93
                }, {
                    date: "2013-07-15",
                    value: 60.707142
                }, {
                    date: "2013-07-22",
                    value: 62.998573
                }, {
                    date: "2013-07-29",
                    value: 66.077141
                }, {
                    date: "2013-08-05",
                    value: 64.921425
                }, {
                    date: "2013-08-12",
                    value: 71.761429
                }, {
                    date: "2013-08-19",
                    value: 71.574287
                }, {
                    date: "2013-08-26",
                    value: 69.602859
                }, {
                    date: "2013-09-02",
                    value: 71.174286
                }, {
                    date: "2013-09-09",
                    value: 66.414284
                }, {
                    date: "2013-09-16",
                    value: 66.772858
                }, {
                    date: "2013-09-23",
                    value: 68.964287
                }, {
                    date: "2013-09-30",
                    value: 69.004288
                }, {
                    date: "2013-10-07",
                    value: 70.401428
                }, {
                    date: "2013-10-14",
                    value: 72.69857
                }, {
                    date: "2013-10-21",
                    value: 75.137146
                }, {
                    date: "2013-10-28",
                    value: 74.290001
                }, {
                    date: "2013-11-04",
                    value: 74.365715
                }, {
                    date: "2013-11-11",
                    value: 74.998573
                }, {
                    date: "2013-11-18",
                    value: 74.257141
                }, {
                    date: "2013-11-25",
                    value: 79.438568
                }, {
                    date: "2013-12-02",
                    value: 80.002853
                }, {
                    date: "2013-12-09",
                    value: 79.204285
                }, {
                    date: "2013-12-16",
                    value: 78.431427
                }, {
                    date: "2013-12-23",
                    value: 80.012856
                }, {
                    date: "2013-12-30",
                    value: 77.28286
                }, {
                    date: "2014-01-06",
                    value: 76.134285
                }, {
                    date: "2014-01-13",
                    value: 77.238571
                }, {
                    date: "2014-01-20",
                    value: 78.010002
                }, {
                    date: "2014-01-27",
                    value: 71.514282
                }, {
                    date: "2014-02-03",
                    value: 74.239998
                }, {
                    date: "2014-02-10",
                    value: 77.71286
                }, {
                    date: "2014-02-17",
                    value: 75.035713
                }, {
                    date: "2014-02-24",
                    value: 75.177139
                }, {
                    date: "2014-03-03",
                    value: 75.777145
                }, {
                    date: "2014-03-10",
                    value: 74.955711
                }, {
                    date: "2014-03-17",
                    value: 76.124283
                }, {
                    date: "2014-03-24",
                    value: 76.694283
                }, {
                    date: "2014-03-31",
                    value: 75.974289
                }, {
                    date: "2014-04-07",
                    value: 74.230003
                }, {
                    date: "2014-04-14",
                    value: 74.991432
                }, {
                    date: "2014-04-21",
                    value: 81.705711
                }, {
                    date: "2014-04-28",
                    value: 84.654289
                }, {
                    date: "2014-05-05",
                    value: 83.648575
                }, {
                    date: "2014-05-12",
                    value: 85.358574
                }, {
                    date: "2014-05-19",
                    value: 87.732857
                }, {
                    date: "2014-05-26",
                    value: 90.428574
                }, {
                    date: "2014-06-02",
                    value: 92.224289
                }, {
                    date: "2014-06-09",
                    value: 91.279999
                }, {
                    date: "2014-06-16",
                    value: 90.910004
                }, {
                    date: "2014-06-23",
                    value: 91.980003
                }, {
                    date: "2014-06-30",
                    value: 94.029999
                }, {
                    date: "2014-07-07",
                    value: 95.220001
                }, {
                    date: "2014-07-14",
                    value: 94.43
                }, {
                    date: "2014-07-21",
                    value: 97.669998
                }, {
                    date: "2014-07-28",
                    value: 96.129997
                }, {
                    date: "2014-08-04",
                    value: 94.739998
                }, {
                    date: "2014-08-11",
                    value: 97.980003
                }, {
                    date: "2014-08-18",
                    value: 101.32
                }, {
                    date: "2014-08-25",
                    value: 102.5
                }, {
                    date: "2014-09-01",
                    value: 98.970001
                }, {
                    date: "2014-09-08",
                    value: 101.660004
                }, {
                    date: "2014-09-15",
                    value: 100.959999
                }, {
                    date: "2014-09-22",
                    value: 100.75
                }, {
                    date: "2014-09-29",
                    value: 99.620003
                }, {
                    date: "2014-10-06",
                    value: 100.730003
                }, {
                    date: "2014-10-13",
                    value: 97.669998
                }, {
                    date: "2014-10-20",
                    value: 105.220001
                }, {
                    date: "2014-10-27",
                    value: 108
                }, {
                    date: "2014-11-03",
                    value: 109.010002
                }, {
                    date: "2014-11-10",
                    value: 114.18
                }, {
                    date: "2014-11-17",
                    value: 116.470001
                }, {
                    date: "2014-11-24",
                    value: 118.93
                }, {
                    date: "2014-12-01",
                    value: 115
                }, {
                    date: "2014-12-08",
                    value: 109.730003
                }, {
                    date: "2014-12-15",
                    value: 111.779999
                }, {
                    date: "2014-12-22",
                    value: 113.989998
                }, {
                    date: "2014-12-29",
                    value: 109.330002
                }, {
                    date: "2015-01-05",
                    value: 112.010002
                }, {
                    date: "2015-01-12",
                    value: 105.989998
                }, {
                    date: "2015-01-19",
                    value: 112.980003
                }, {
                    date: "2015-01-26",
                    value: 117.160004
                }, {
                    date: "2015-02-02",
                    value: 118.93
                }, {
                    date: "2015-02-09",
                    value: 127.080002
                }, {
                    date: "2015-02-16",
                    value: 129.5
                }, {
                    date: "2015-02-23",
                    value: 128.460007
                }, {
                    date: "2015-03-02",
                    value: 126.599998
                }, {
                    date: "2015-03-09",
                    value: 123.589996
                }, {
                    date: "2015-03-16",
                    value: 125.900002
                }, {
                    date: "2015-03-23",
                    value: 123.25
                }, {
                    date: "2015-03-30",
                    value: 125.32
                }, {
                    date: "2015-04-06",
                    value: 127.099998
                }, {
                    date: "2015-04-13",
                    value: 124.75
                }, {
                    date: "2015-04-20",
                    value: 130.279999
                }, {
                    date: "2015-04-27",
                    value: 128.949997
                }, {
                    date: "2015-05-04",
                    value: 127.620003
                }, {
                    date: "2015-05-11",
                    value: 128.770004
                }, {
                    date: "2015-05-18",
                    value: 132.539993
                }, {
                    date: "2015-05-25",
                    value: 130.279999
                }, {
                    date: "2015-06-01",
                    value: 128.649994
                }, {
                    date: "2015-06-08",
                    value: 127.169998
                }, {
                    date: "2015-06-15",
                    value: 126.599998
                }, {
                    date: "2015-06-22",
                    value: 126.75
                }, {
                    date: "2015-06-29",
                    value: 126.440002
                }, {
                    date: "2015-07-06",
                    value: 123.279999
                }, {
                    date: "2015-07-13",
                    value: 129.619995
                }, {
                    date: "2015-07-20",
                    value: 124.5
                }, {
                    date: "2015-07-27",
                    value: 121.300003
                }, {
                    date: "2015-08-03",
                    value: 115.519997
                }, {
                    date: "2015-08-10",
                    value: 115.959999
                }, {
                    date: "2015-08-17",
                    value: 105.760002
                }, {
                    date: "2015-08-24",
                    value: 113.290001
                }, {
                    date: "2015-08-31",
                    value: 109.269997
                }, {
                    date: "2015-09-07",
                    value: 114.209999
                }, {
                    date: "2015-09-14",
                    value: 113.449997
                }, {
                    date: "2015-09-21",
                    value: 114.709999
                }, {
                    date: "2015-09-28",
                    value: 110.379997
                }, {
                    date: "2015-10-05",
                    value: 112.120003
                }, {
                    date: "2015-10-12",
                    value: 111.040001
                }, {
                    date: "2015-10-19",
                    value: 119.080002
                }, {
                    date: "2015-10-26",
                    value: 119.5
                }, {
                    date: "2015-11-02",
                    value: 121.059998
                }, {
                    date: "2015-11-09",
                    value: 112.339996
                }, {
                    date: "2015-11-16",
                    value: 119.300003
                }, {
                    date: "2015-11-23",
                    value: 117.809998
                }, {
                    date: "2015-11-30",
                    value: 119.029999
                }, {
                    date: "2015-12-07",
                    value: 113.18
                }, {
                    date: "2015-12-14",
                    value: 106.029999
                }, {
                    date: "2015-12-21",
                    value: 108.029999
                }, {
                    date: "2015-12-28",
                    value: 105.260002
                }, {
                    date: "2016-01-04",
                    value: 96.959999
                }, {
                    date: "2016-01-11",
                    value: 97.129997
                }, {
                    date: "2016-01-18",
                    value: 101.419998
                }, {
                    date: "2016-01-25",
                    value: 97.339996
                }, {
                    date: "2016-02-01",
                    value: 94.019997
                }, {
                    date: "2016-02-08",
                    value: 93.989998
                }, {
                    date: "2016-02-15",
                    value: 96.040001
                }, {
                    date: "2016-02-22",
                    value: 96.910004
                }, {
                    date: "2016-02-29",
                    value: 103.010002
                }, {
                    date: "2016-03-07",
                    value: 102.260002
                }, {
                    date: "2016-03-14",
                    value: 105.919998
                }, {
                    date: "2016-03-21",
                    value: 105.669998
                }, {
                    date: "2016-03-28",
                    value: 109.989998
                }, {
                    date: "2016-04-04",
                    value: 108.660004
                }, {
                    date: "2016-04-11",
                    value: 109.849998
                }, {
                    date: "2016-04-18",
                    value: 105.68
                }, {
                    date: "2016-04-25",
                    value: 93.739998
                }, {
                    date: "2016-05-02",
                    value: 92.720001
                }, {
                    date: "2016-05-09",
                    value: 90.519997
                }, {
                    date: "2016-05-16",
                    value: 95.220001
                }, {
                    date: "2016-05-23",
                    value: 100.349998
                }, {
                    date: "2016-05-30",
                    value: 97.919998
                }, {
                    date: "2016-06-06",
                    value: 98.830002
                }, {
                    date: "2016-06-13",
                    value: 95.330002
                }, {
                    date: "2016-06-20",
                    value: 93.400002
                }, {
                    date: "2016-06-27",
                    value: 95.889999
                }, {
                    date: "2016-07-04",
                    value: 96.68
                }, {
                    date: "2016-07-11",
                    value: 98.779999
                }, {
                    date: "2016-07-18",
                    value: 98.660004
                }, {
                    date: "2016-07-25",
                    value: 104.209999
                }, {
                    date: "2016-08-01",
                    value: 107.480003
                }, {
                    date: "2016-08-08",
                    value: 108.18
                }, {
                    date: "2016-08-15",
                    value: 109.360001
                }, {
                    date: "2016-08-22",
                    value: 106.940002
                }, {
                    date: "2016-08-29",
                    value: 107.730003
                }, {
                    date: "2016-09-05",
                    value: 103.129997
                }, {
                    date: "2016-09-12",
                    value: 114.919998
                }, {
                    date: "2016-09-19",
                    value: 112.709999
                }, {
                    date: "2016-09-26",
                    value: 113.050003
                }, {
                    date: "2016-10-03",
                    value: 114.059998
                }, {
                    date: "2016-10-10",
                    value: 117.629997
                }, {
                    date: "2016-10-17",
                    value: 116.599998
                }, {
                    date: "2016-10-24",
                    value: 113.720001
                }, {
                    date: "2016-10-31",
                    value: 108.839996
                }, {
                    date: "2016-11-07",
                    value: 108.43
                }, {
                    date: "2016-11-14",
                    value: 110.059998
                }, {
                    date: "2016-11-21",
                    value: 111.790001
                }, {
                    date: "2016-11-28",
                    value: 109.900002
                }, {
                    date: "2016-12-05",
                    value: 113.949997
                }, {
                    date: "2016-12-12",
                    value: 115.970001
                }, {
                    date: "2016-12-19",
                    value: 116.519997
                }, {
                    date: "2016-12-26",
                    value: 115.82
                }, {
                    date: "2017-01-02",
                    value: 117.910004
                }, {
                    date: "2017-01-09",
                    value: 119.040001
                }, {
                    date: "2017-01-16",
                    value: 120
                }, {
                    date: "2017-01-23",
                    value: 121.949997
                }, {
                    date: "2017-01-30",
                    value: 129.080002
                }, {
                    date: "2017-02-06",
                    value: 132.119995
                }, {
                    date: "2017-02-13",
                    value: 135.720001
                }, {
                    date: "2017-02-20",
                    value: 136.660004
                }, {
                    date: "2017-02-27",
                    value: 139.779999
                }, {
                    date: "2017-03-06",
                    value: 139.139999
                }, {
                    date: "2017-03-13",
                    value: 139.990005
                }, {
                    date: "2017-03-20",
                    value: 140.639999
                }, {
                    date: "2017-03-27",
                    value: 143.660004
                }, {
                    date: "2017-04-03",
                    value: 143.339996
                }, {
                    date: "2017-04-10",
                    value: 141.050003
                }, {
                    date: "2017-04-17",
                    value: 142.270004
                }, {
                    date: "2017-04-24",
                    value: 143.649994
                }, {
                    date: "2017-05-01",
                    value: 148.960007
                }, {
                    date: "2017-05-08",
                    value: 156.100006
                }, {
                    date: "2017-05-15",
                    value: 153.059998
                }, {
                    date: "2017-05-22",
                    value: 153.610001
                }, {
                    date: "2017-05-29",
                    value: 155.449997
                }, {
                    date: "2017-06-05",
                    value: 148.979996
                }, {
                    date: "2017-06-12",
                    value: 142.270004
                }, {
                    date: "2017-06-19",
                    value: 146.279999
                }, {
                    date: "2017-06-26",
                    value: 144.020004
                }, {
                    date: "2017-07-03",
                    value: 144.179993
                }, {
                    date: "2017-07-10",
                    value: 149.039993
                }, {
                    date: "2017-07-17",
                    value: 150.270004
                }, {
                    date: "2017-07-24",
                    value: 149.5
                }, {
                    date: "2017-07-31",
                    value: 156.389999
                }, {
                    date: "2017-08-07",
                    value: 157.479996
                }, {
                    date: "2017-08-14",
                    value: 157.5
                }, {
                    date: "2017-08-21",
                    value: 159.860001
                }, {
                    date: "2017-08-28",
                    value: 164.050003
                }, {
                    date: "2017-09-04",
                    value: 158.630005
                }, {
                    date: "2017-09-11",
                    value: 159.880005
                }, {
                    date: "2017-09-18",
                    value: 151.889999
                }, {
                    date: "2017-09-25",
                    value: 154.119995
                }, {
                    date: "2017-10-02",
                    value: 155.300003
                }, {
                    date: "2017-10-09",
                    value: 156.990005
                }, {
                    date: "2017-10-16",
                    value: 156.25
                }, {
                    date: "2017-10-23",
                    value: 163.050003
                }, {
                    date: "2017-10-30",
                    value: 172.5
                }, {
                    date: "2017-11-06",
                    value: 174.669998
                }, {
                    date: "2017-11-13",
                    value: 170.149994
                }, {
                    date: "2017-11-20",
                    value: 174.970001
                }, {
                    date: "2017-11-27",
                    value: 171.050003
                }, {
                    date: "2017-12-04",
                    value: 169.369995
                }, {
                    date: "2017-12-11",
                    value: 173.970001
                }, {
                    date: "2017-12-18",
                    value: 175.009995
                }, {
                    date: "2017-12-25",
                    value: 169.229996
                }, {
                    date: "2018-01-01",
                    value: 175
                }, {
                    date: "2018-01-08",
                    value: 177.089996
                }, {
                    date: "2018-01-15",
                    value: 178.460007
                }, {
                    date: "2018-01-22",
                    value: 171.509995
                }, {
                    date: "2018-01-29",
                    value: 160.5
                }, {
                    date: "2018-02-05",
                    value: 156.410004
                }, {
                    date: "2018-02-12",
                    value: 172.429993
                }, {
                    date: "2018-02-19",
                    value: 175.5
                }, {
                    date: "2018-02-26",
                    value: 176.210007
                }, {
                    date: "2018-03-05",
                    value: 179.979996
                }, {
                    date: "2018-03-12",
                    value: 178.020004
                }, {
                    date: "2018-03-19",
                    value: 164.940002
                }, {
                    date: "2018-03-26",
                    value: 167.779999
                }, {
                    date: "2018-04-02",
                    value: 168.380005
                }, {
                    date: "2018-04-09",
                    value: 174.729996
                }, {
                    date: "2018-04-16",
                    value: 165.720001
                }, {
                    date: "2018-04-23",
                    value: 162.320007
                }, {
                    date: "2018-04-30",
                    value: 183.830002
                }, {
                    date: "2018-05-07",
                    value: 188.589996
                }, {
                    date: "2018-05-14",
                    value: 186.309998
                }, {
                    date: "2018-05-21",
                    value: 188.580002
                }, {
                    date: "2018-05-28",
                    value: 190.240005
                }, {
                    date: "2018-06-04",
                    value: 191.699997
                }, {
                    date: "2018-06-11",
                    value: 188.839996
                }, {
                    date: "2018-06-18",
                    value: 184.919998
                }, {
                    date: "2018-06-25",
                    value: 185.110001
                }, {
                    date: "2018-07-02",
                    value: 187.970001
                }, {
                    date: "2018-07-09",
                    value: 191.330002
                }, {
                    date: "2018-07-16",
                    value: 191.440002
                }, {
                    date: "2018-07-23",
                    value: 190.979996
                }, {
                    date: "2018-07-30",
                    value: 207.990005
                }, {
                    date: "2018-08-06",
                    value: 207.529999
                }, {
                    date: "2018-08-13",
                    value: 217.580002
                }, {
                    date: "2018-08-20",
                    value: 216.160004
                }, {
                    date: "2018-08-27",
                    value: 227.630005
                }, {
                    date: "2018-09-03",
                    value: 221.300003
                }, {
                    date: "2018-09-10",
                    value: 223.839996
                }, {
                    date: "2018-09-17",
                    value: 217.660004
                }, {
                    date: "2018-09-24",
                    value: 225.740005
                }, {
                    date: "2018-10-01",
                    value: 224.289993
                }, {
                    date: "2018-10-08",
                    value: 222.110001
                }, {
                    date: "2018-10-15",
                    value: 219.309998
                }, {
                    date: "2018-10-22",
                    value: 216.300003
                }, {
                    date: "2018-10-29",
                    value: 207.479996
                }, {
                    date: "2018-11-05",
                    value: 204.470001
                }, {
                    date: "2018-11-12",
                    value: 193.529999
                }, {
                    date: "2018-11-19",
                    value: 172.289993
                }, {
                    date: "2018-11-26",
                    value: 178.580002
                }, {
                    date: "2018-12-03",
                    value: 168.490005
                }, {
                    date: "2018-12-10",
                    value: 165.479996
                }, {
                    date: "2018-12-17",
                    value: 150.729996
                }, {
                    date: "2018-12-24",
                    value: 156.229996
                }, {
                    date: "2018-12-31",
                    value: 148.259995
                }, {
                    date: "2019-01-07",
                    value: 152.289993
                }, {
                    date: "2019-01-14",
                    value: 156.820007
                }, {
                    date: "2019-01-21",
                    value: 157.759995
                }, {
                    date: "2019-01-28",
                    value: 166.520004
                }, {
                    date: "2019-02-04",
                    value: 170.410004
                }, {
                    date: "2019-02-11",
                    value: 170.419998
                }, {
                    date: "2019-02-18",
                    value: 172.970001
                }, {
                    date: "2019-02-25",
                    value: 174.970001
                }, {
                    date: "2019-03-04",
                    value: 172.910004
                }, {
                    date: "2019-03-11",
                    value: 186.119995
                }, {
                    date: "2019-03-18",
                    value: 191.050003
                }, {
                    date: "2019-03-25",
                    value: 189.949997
                }, {
                    date: "2019-04-01",
                    value: 197
                }, {
                    date: "2019-04-08",
                    value: 198.869995
                }, {
                    date: "2019-04-15",
                    value: 203.860001
                }, {
                    date: "2019-04-22",
                    value: 204.300003
                }, {
                    date: "2019-04-29",
                    value: 211.75
                }, {
                    date: "2019-05-06",
                    value: 197.179993
                }, {
                    date: "2019-05-13",
                    value: 189
                }, {
                    date: "2019-05-20",
                    value: 178.970001
                }, {
                    date: "2019-05-27",
                    value: 175.070007
                }, {
                    date: "2019-06-03",
                    value: 190.149994
                }, {
                    date: "2019-06-10",
                    value: 192.740005
                }, {
                    date: "2019-06-17",
                    value: 198.779999
                }, {
                    date: "2019-06-24",
                    value: 197.919998
                }, {
                    date: "2019-07-01",
                    value: 204.229996
                }, {
                    date: "2019-07-08",
                    value: 203.300003
                }, {
                    date: "2019-07-15",
                    value: 202.589996
                }, {
                    date: "2019-07-22",
                    value: 207.740005
                }, {
                    date: "2019-07-29",
                    value: 204.020004
                }, {
                    date: "2019-08-05",
                    value: 200.990005
                }, {
                    date: "2019-08-12",
                    value: 206.5
                }, {
                    date: "2019-08-19",
                    value: 202.639999
                }, {
                    date: "2019-08-26",
                    value: 208.740005
                }, {
                    date: "2019-09-02",
                    value: 213.259995
                }, {
                    date: "2019-09-09",
                    value: 218.75
                }, {
                    date: "2019-09-16",
                    value: 217.729996
                }, {
                    date: "2019-09-23",
                    value: 218.820007
                }, {
                    date: "2019-09-30",
                    value: 227.009995
                }, {
                    date: "2019-10-07",
                    value: 236.210007
                }, {
                    date: "2019-10-14",
                    value: 236.410004
                }, {
                    date: "2019-10-21",
                    value: 246.580002
                }, {
                    date: "2019-10-28",
                    value: 255.820007
                }, {
                    date: "2019-11-04",
                    value: 260.140015
                }, {
                    date: "2019-11-11",
                    value: 265.76001
                }, {
                    date: "2019-11-18",
                    value: 261.779999
                }, {
                    date: "2019-11-25",
                    value: 267.25
                }, {
                    date: "2019-12-02",
                    value: 270.709991
                }, {
                    date: "2019-12-09",
                    value: 275.149994
                }, {
                    date: "2019-12-16",
                    value: 279.440002
                }, {
                    date: "2019-12-23",
                    value: 289.799988
                }, {
                    date: "2019-12-30",
                    value: 297.429993
                }, {
                    date: "2020-01-06",
                    value: 310.329987
                }, {
                    date: "2020-01-13",
                    value: 318.730011
                }, {
                    date: "2020-01-20",
                    value: 318.309998
                }, {
                    date: "2020-01-27",
                    value: 309.51001
                }, {
                    date: "2020-02-03",
                    value: 320.029999
                }, {
                    date: "2020-02-10",
                    value: 324.950012
                }, {
                    date: "2020-02-17",
                    value: 313.049988
                }, {
                    date: "2020-02-24",
                    value: 273.359985
                }, {
                    date: "2020-03-02",
                    value: 289.029999
                }, {
                    date: "2020-03-09",
                    value: 277.970001
                }, {
                    date: "2020-03-16",
                    value: 229.240005
                }, {
                    date: "2020-03-23",
                    value: 247.740005
                }, {
                    date: "2020-03-30",
                    value: 241.410004
                }, {
                    date: "2020-04-06",
                    value: 267.98999
                }, {
                    date: "2020-04-13",
                    value: 282.799988
                }, {
                    date: "2020-04-20",
                    value: 282.970001
                }, {
                    date: "2020-04-27",
                    value: 289.070007
                }, {
                    date: "2020-05-04",
                    value: 310.130005
                }, {
                    date: "2020-05-11",
                    value: 307.709991
                }, {
                    date: "2020-05-18",
                    value: 318.890015
                }, {
                    date: "2020-05-25",
                    value: 317.940002
                }, {
                    date: "2020-06-01",
                    value: 331.5
                }, {
                    date: "2020-06-08",
                    value: 338.799988
                }, {
                    date: "2020-06-15",
                    value: 342.98999
                }],
                events: [{
                    date: "2011-01-01",
                    text: "Стив Джобс уходит в бессрочный отпуск."
                }, {
                    date: "2011-06-01",
                    text: "Презентация проекта штаб-квартиры, нарастание «патентной войны» с Samsung."
                }, {
                    date: "2011-10-01",
                    text: "Смерть Стива Джобса, более миллиона предзаказов на iPhone 4S за сутки."
                }, {
                    date: "2012-03-01",
                    text: "Apple намерена выплатить дивиденды акционерам и выкупить акции на сумму $10 млрд."
                }, {
                    date: "2012-09-01",
                    text: "Релиз iPhone 5 — самый лёгкий смартфон, но с серьёзными недоработками софта."
                }, {
                    date: "2013-02-01",
                    text: "Apple подозревают в уклонении от уплаты налогов."
                }, {
                    date: "2013-05-01",
                    text: "Появляются сообщения о бюджетной версии iPhone 5."
                }, {
                    date: "2014-05-01",
                    text: "Apple покупает Beats Electronics за $3 млрд — крупнейшее поглощение в истории корпорации."
                }, {
                    date: "2014-10-01",
                    text: "Покупатели iPhone 6 Plus обнаруживают, что алюминиевый корпус устройства сгибается."
                }, {
                    date: "2015-04-01",
                    text: "Релиз Apple Watch."
                }, {
                    date: "2015-09-01",
                    text: "Анонс iPad Pro с самым большим дисплеем в семействе."
                }, {
                    date: "2016-02-01",
                    text: "Apple отказывается взломать iPhone террориста по требованию ФБР."
                }, {
                    date: "2016-05-01",
                    text: "Apple инвестирует $1 млрд в китайскую транспортную компанию DiDi."
                }, {
                    date: "2017-06-01",
                    text: "Презентация «умной» колонки HomePod."
                }, {
                    date: "2017-12-01",
                    text: "Apple покупает Shazam за $400 млн."
                }, {
                    date: "2018-06-01",
                    text: "Опра Уинфри заключает контракт с Apple TV+."
                }, {
                    date: "2018-08-01",
                    text: "Эскалация «торговой войны» между США и Китаем."
                }, {
                    date: "2019-01-01",
                    text: "Впервые за 17 лет зафиксировано снижение квартальной выручки компании."
                }, {
                    date: "2019-07-01",
                    text: "Apple покупает Intel Mobile Communications за $1 млрд."
                }, {
                    date: "2019-12-01",
                    text: "Эпидемия коронавируса."
                }, {
                    date: "2020-04-01",
                    text: "Релиз iPhone SE 2020."
                }],
                code: "AAPL"
            }
        }
          , pe = (a("cb29"),
        a("13d5"),
        a("fb6a"),
        a("1276"),
        a("18a5"),
        a("2909"))
          , me = a("22a2")
          , ge = (a("1209"),
        a("27d6"))
          , xe = a.n(ge)
          , be = {
            yandex: {
                dots: {
                    bg: "#000000"
                },
                xasix: {
                    text: "#A4A4B1"
                },
                month: {
                    text: "#A4A4B1"
                },
                badge: {
                    bg: "#FFDB4D",
                    text: "#ffffff",
                    quotes: "#5A5A66"
                },
                events: {
                    line: "#FFBB0E",
                    alt: "#FFAD0E",
                    text: "#5A5A66",
                    text2: "#ffffff",
                    bg: "rgba(255, 255, 255, 0.5)"
                },
                quotes: {
                    line: "#FFCB00",
                    fill: "#FFD748",
                    bg: "#EFEFF3",
                    sep: "#E6E5E9"
                },
                minimap: {
                    fill: "#EFEFF3",
                    quotes: "#DBDCE4",
                    events: "#fff",
                    bg: "#ffffff",
                    current: "#FFCF49",
                    currentEvent: "#ECECF3"
                },
                pointer: "%23FFBB0E"
            },
            disney: {
                dots: {
                    bg: "#000000"
                },
                xasix: {
                    text: "#A4A4B1"
                },
                month: {
                    text: "#A4A4B1"
                },
                badge: {
                    bg: "#6A80D9",
                    text: "#A0AEE6",
                    quotes: "#ffffff"
                },
                events: {
                    line: "#6A80D9",
                    alt: "#3b4fa0",
                    text: "#5A5A66",
                    text2: "#ffffff",
                    bg: "rgba(255, 255, 255, 0.5)"
                },
                quotes: {
                    line: "#6A80D9",
                    fill: "#B1BEF0",
                    bg: "#EFEFF3",
                    sep: "#E6E5E9"
                },
                minimap: {
                    fill: "#EFEFF3",
                    quotes: "#DBDCE4",
                    events: "#ffffff",
                    bg: "#ffffff",
                    current: "#9CADF2",
                    currentEvent: "#ECECF3"
                },
                pointer: "%236A80D9"
            },
            apple: {
                dots: {
                    bg: "#ffffff"
                },
                xasix: {
                    text: "#4F4F52"
                },
                month: {
                    text: "#4F4F52"
                },
                badge: {
                    bg: "#45464A",
                    text: "#666769",
                    quotes: "#FFFFFF"
                },
                events: {
                    line: "#B3B3B3",
                    alt: "#888888",
                    text: "#ffffff",
                    text2: "#ffffff",
                    bg: "rgba(0, 0, 0, 0.5)"
                },
                quotes: {
                    line: "#B2B2B2",
                    fill: "#393A3C",
                    bg: "#232325",
                    sep: "#383839"
                },
                minimap: {
                    fill: "#2A2A2C",
                    quotes: "#1A1A1B",
                    events: "#69696D",
                    bg: "#515153",
                    current: "#2F3034",
                    currentEvent: "#69696D"
                },
                pointer: "%23B2B2B2"
            }
        }
          , ye = be;
        function Ce(e) {
            if (!this.params(e))
                return !1;
            this.load(this.init)
        }
        Ce.prototype.params = function(e) {
            if (!e.companyName)
                return !1;
            this.companyName = e.companyName,
            this.brandColor = ye[e.companyName],
            this.onInit = e.onInit,
            this.onEnd = e.onEnd,
            this.onPause = e.onPause,
            this.onPlay = e.onPlay,
            this.onEventTap = e.onEventTap,
            this.onTutStart = e.onTutStart,
            this.stockPriceChanges = e.stockPriceChanges,
            this.onFirstEvent = e.onFirstEvent,
            this.buyAction = e.buyAction,
            this.sellAction = e.sellAction,
            this.initViewportSize(),
            this.gameDuration = 3e5,
            this.seek = 0,
            this.currentSeek = 0,
            this.userSeek = 0,
            this.isSeeking = !1,
            this.currentStockValue = 0,
            this.currentStockDate = "",
            this.defaultSpeed = {
                normal: 0.8,
                fast: 5
            },
            this.currentValue = 0,
            this.lastCurrentValue = 0,
            this.lastFuturePriceDirection = 0,
            this.speed = this.defaultSpeed.fast,
            this.isPaused = !0,
            this.startPause = 2e3,
            this.startPauseReleased = !1,
            this.firstHalfTime = 4e3,
            this.gameIsOver = !1,
            this.balance = 1e3,
            this.stock = 0,
            this.currentTime = 0,
            this.quotesWidth = 0,
            this.month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            this.months = [],
            this.data = fe[this.companyName].quotes,
            this.events = fe[this.companyName].events,
            this.weeksInMonth = 4.28,
            this.mobileMinimapWidth = 865,
            this.monthWidth = 197,
            this.fullWidth = this.monthWidth / this.weeksInMonth * this.getWeeksCount();
            var t = this.data.map((function(e) {
                return e.value
            }
            ));
            return this.sum = t.reduce((function(e, t) {
                return e + t
            }
            ), 0),
            this.average = this.sum / this.data.length,
            this.median = this.getMedian(t),
            this.minValue = Math.min.apply(Math, Object(pe["a"])(t)),
            this.maxValue = Math.max.apply(Math, Object(pe["a"])(t)),
            this.scaleRate = this.isMobile ? 7 : 8,
            this.initQuotesDataBuffer(),
            this.initYShift(),
            !0
        }
        ,
        Ce.prototype.initViewportSize = function() {
            var e = this
              , t = function() {
                e.isMobile = e.checkMobile() || window.innerWidth < 900;
                var t = e.vpWidth;
                e.isMobile ? (e.vpWidth = window.innerWidth,
                e.vpHeight = .9207 * window.innerWidth) : (e.vpWidth = 980,
                e.vpHeight = 350),
                t && t !== e.vpWidth && e.updateAfterResize()
            };
            window.addEventListener("resize", (function(e) {
                t()
            }
            )),
            t()
        }
        ,
        Ce.prototype.checkMobile = function() {
            var e = !1;
            return function(t) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
            }(navigator.userAgent || navigator.vendor || window.opera),
            e
        }
        ,
        Ce.prototype.setStartParams = function() {}
        ,
        Ce.prototype.updateAfterResize = function() {
            this.onGap = null,
            this.lineHeight = null,
            this.pixi.view.width = this.vpWidth,
            this.pixi.view.height = this.vpHeight,
            this.monthSprite.y = this.vpHeight - this.monthVpBuffer.height,
            this.initYShift(),
            this.initMonthBuffer(),
            this.initEvents(),
            this.initXaxisBuffer(),
            this.initBadgeBuffer()
        }
        ,
        Ce.prototype.initYShift = function() {
            this.yAsixHeight = -3e3,
            this.measureStart = 0,
            this.measure = 5,
            this.yShift = 0,
            this.bestYShift = 0,
            this.yShiftSpeed = 1,
            this.yShiftLimit = 10,
            this.constYoffset = 77,
            this.calcBestYShift(),
            this.yShift = this.bestYShift
        }
        ,
        Ce.prototype.load = function(e) {
            var t = "normal 500 13px Roboto"
              , a = this;
            document.fonts.load(t).then((function(t) {
                xe.a.load({
                    google: {
                        families: ["Roboto Condensed:400,500,700:cyrillic"]
                    },
                    active: function() {
                        e.call(a)
                    }
                })
            }
            ))
        }
        ,
        Ce.prototype.init = function() {
            this.initEventsSeek(),
            this.initMinimap(),
            this.initXaxisBuffer(),
            this.initBadgeBuffer(),
            this.initPixi(),
            this.onInit && this.onInit.call(this)
        }
        ,
        Ce.prototype.initMinimap = function() {
            var e = this.isMobile ? 30 : Math.round(.0843 * this.vpWidth);
            this.initMinimapQuotesBuffer(e),
            this.initMinimapBuffer(e),
            this.initMinimapCurrentBuffer()
        }
        ,
        Ce.prototype.initMinimapCurrentBuffer = function() {
            this.minimapCurrentBuffer = document.createElement("canvas"),
            this.minimapCurrentBufferCtx = this.minimapCurrentBuffer.getContext("2d"),
            this.minimapCurrentStyleBuffer = document.createElement("canvas"),
            this.minimapCurrentStyleBufferCtx = this.minimapCurrentStyleBuffer.getContext("2d");
            var e = 50
              , t = 100;
            this.minimapCurrentBuffer.width = e,
            this.minimapCurrentBuffer.height = t,
            this.minimapCurrentStyleBuffer.width = this.isMobile ? this.mobileMinimapWidth + 2 * e : this.vpWidth,
            this.minimapCurrentStyleBuffer.height = t,
            this.drawMinimapEvents(this.minimapCurrentStyleBufferCtx, this.minimapCurrentStyleBuffer, ye[this.companyName].minimap.currentEvent, ye[this.companyName].minimap.bg);
            var a = (this.isMobile,
            20);
            this.minimapCurrentStyleBufferCtx.fillStyle = ye[this.companyName].minimap.bg,
            this.minimapCurrentStyleBufferCtx.fillRect(0, this.minimapCurrentStyleBuffer.height - a, this.minimapCurrentStyleBuffer.width, this.minimapCurrentStyleBuffer.height),
            this.drawCustomQuotes(this.minimapCurrentStyleBuffer, this.minimapCurrentStyleBufferCtx, t - a, ye[this.companyName].minimap.current, ye[this.companyName].minimap.bg)
        }
        ,
        Ce.prototype.minimapRenderCurrent = function() {
            var e = this.isMobile ? this.mobileMinimapWidth : this.vpWidth
              , t = e - this.minimapCurrentBuffer.width
              , a = this.seek * t;
            this.minimapCurrentBufferCtx.clearRect(0, 0, this.minimapCurrentBuffer.width, this.minimapCurrentBuffer.height);
            var i = this.minimapCurrentStyleBufferCtx.getImageData(a, 0, this.minimapCurrentBuffer.width, this.minimapCurrentBuffer.height);
            this.minimapCurrentBufferCtx.putImageData(i, 0, 0)
        }
        ,
        Ce.prototype.initMinimapBuffer = function(e) {
            this.minimapBuffer = document.createElement("canvas"),
            this.minimapBufferCtx = this.minimapBuffer.getContext("2d"),
            this.minimapBuffer.width = this.isMobile ? this.mobileMinimapWidth : this.vpWidth,
            this.minimapBuffer.height = e,
            this.minimapRenderEvents()
        }
        ,
        Ce.prototype.minimapRender = function() {
            this.minimapBufferCtx.clearRect(0, 0, this.minimapBuffer.width, this.minimapBuffer.height),
            this.minimapRenderEvents(),
            this.minimapRenderQuotes(),
            this.minimapRenderCurrent()
        }
        ,
        Ce.prototype.minimapRenderQuotes = function() {
            var e = this.isMobile ? this.mobileMinimapWidth : this.vpWidth
              , t = this.isMobile ? e - 2 * this.minimapCurrentBuffer.width : e - this.minimapCurrentBuffer.width
              , a = this.currentSeek * t + this.minimapCurrentBuffer.width
              , i = a < 1 ? 1 : a
              , s = this.minimapQuotesCtx.getImageData(0, 0, i, this.minimapBuffer.height);
            this.minimapBufferCtx.putImageData(s, 0, 0)
        }
        ,
        Ce.prototype.minimapRenderEvents = function() {
            this.drawMinimapEvents(this.minimapBufferCtx, this.minimapBuffer, ye[this.companyName].minimap.events)
        }
        ,
        Ce.prototype.drawMinimapEvents = function(e, t, a, i) {
            var s = this.isMobile ? t.width : this.vpWidth;
            i && (e.fillStyle = i,
            e.fillRect(0, 0, s, t.height)),
            e.fillStyle = a;
            for (var n = 0; n < this.events.length; n++)
                e.fillRect(this.events[n].seek * s, 0, 2, t.height)
        }
        ,
        Ce.prototype.initMinimapQuotesBuffer = function(e) {
            var t = document.createElement("canvas")
              , a = t.getContext("2d")
              , i = this.isMobile ? this.mobileMinimapWidth + 100 : this.vpWidth;
            t.width = i,
            t.height = e,
            this.drawMinimapEvents(a, t, ye[this.companyName].minimap.events),
            this.drawCustomQuotes(t, a, e, ye[this.companyName].minimap.quotes, ye[this.companyName].minimap.fill),
            this.minimapQuotes = t,
            this.minimapQuotesCtx = a
        }
        ,
        Ce.prototype.drawCustomQuotes = function(e, t, a, i, s) {
            var n = Math.min.apply(Math, Object(pe["a"])(this.data.map((function(e) {
                return e.value
            }
            ))))
              , l = Math.max.apply(Math, Object(pe["a"])(this.data.map((function(e) {
                return e.value
            }
            ))))
              , u = l - n
              , o = this.data[0].value - n
              , r = a - a * (o / u)
              , d = this.isMobile ? e.width : this.vpWidth;
            t.fillStyle = i,
            t.moveTo(0, a),
            t.lineTo(0, r);
            for (var h = 1; h < this.data.length; h++) {
                var v = d * (h / this.data.length)
                  , c = a - a * ((this.data[h].value - n) / u);
                t.lineTo(v, c)
            }
            t.lineTo(d, a),
            t.closePath(),
            t.fill()
        }
        ,
        Ce.prototype.initEventsSeek = function() {
            for (var e = this.isMobile ? -this.monthWidth / 2 + 64 : 74, t = 0; t < this.events.length; t++) {
                var a = new Date(this.data[0].date)
                  , i = new Date(this.events[t].date)
                  , s = new Date(this.data[this.data.length - 1].date);
                this.events[t].seek = this.getSeek(a, i, s, e)
            }
        }
        ,
        Ce.prototype.getSeek = function(e, t, a, i) {
            var s = 12 * this.monthWidth
              , n = t.getFullYear() - e.getFullYear()
              , l = s * n
              , u = this.monthWidth * t.getMonth()
              , o = e.getMonth()
              , r = o * this.monthWidth
              , d = new Date(e.getFullYear(),e.getMonth() + 1,0).getDate()
              , h = e.getDate()
              , v = h / d * this.monthWidth
              , c = i + l + u - r - v
              , f = c / this.fullWidth;
            return f
        }
        ,
        Ce.prototype.initEvents = function() {
            for (var e = 0; e < this.events.length; e++) {
                this.initEventBuffer(),
                this.renderEventBuffer(this.events[e].text),
                this.events[e].sprite && this.eventsContainer.removeChild(this.events[e].sprite),
                this.events[e].sprite = new me["d"].from(this.eventBuffer),
                this.events[e].sprite.anchor.set(0, 0),
                this.events[e].sprite.scale.set(.5),
                this.events[e].sprite.x = this.vpWidth,
                this.events[e].sprite.y = 0;
                var t = this.getShowEventHandler(e);
                this.events[e].sprite.interactive = !0,
                this.events[e].sprite.on("tap", t),
                this.eventsContainer.addChild(this.events[e].sprite)
            }
        }
        ,
        Ce.prototype.initMonths = function() {
            var e = 0
              , t = this.getYearsCount() + 1
              , a = new Array(t).fill("Jan")
              , i = a.concat(this.month);
            this.monthsContainer.removeChild(this.pixiMonthPanel),
            this.pixiMonthPanel.clear(),
            this.pixiMonthPanel.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiMonthPanel.drawRect(0, this.vpHeight - 45, this.vpWidth, this.vpHeight),
            this.pixiMonthPanel.endFill(),
            this.monthsContainer.addChild(this.pixiMonthPanel);
            for (var s = 0; s < i.length; s++) {
                this.months[s] && this.months[s].sprite && this.monthsContainer.removeChild(this.months[s].sprite);
                var n = this.drawMonth(i[s], e)
                  , l = new me["d"].from(n)
                  , u = 45;
                l.y = this.vpHeight - u,
                l.x = 150,
                l.anchor.set(0, 0),
                l.scale.set(.5);
                var o = []
                  , r = this.isMobile ? 55 : 66;
                if ("Jan" === i[s]) {
                    var d = new Date(this.data[0].date)
                      , h = new Date("".concat(d.getFullYear() + e, "-01-01"))
                      , v = new Date(this.data[this.data.length - 1].date)
                      , c = this.getSeek(d, h, v, r);
                    o.push(c)
                } else
                    for (var f = 0; f <= t; f++) {
                        var p = this.month.indexOf(i[s])
                          , m = new Date(this.data[0].date)
                          , g = new Date("".concat(m.getFullYear() + f, "-").concat(p + 1, "-01"))
                          , x = new Date(this.data[this.data.length - 1].date)
                          , b = this.getSeek(m, g, x, r);
                        o.push(b)
                    }
                this.months[s] = {
                    sprite: l,
                    text: i[s],
                    seeks: o
                },
                this.monthsContainer.addChild(l),
                "Jan" !== i[s] && "Dec" !== i[s] || (e += 1)
            }
        }
        ,
        Ce.prototype.getShowEventHandler = function(e) {
            var t = this;
            return function() {
                t.showEventPopup(e)
            }
        }
        ,
        Ce.prototype.showEventPopup = function(e) {
            if (!this.isMobile)
                return !1;
            this.onEventTap && this.onEventTap(e)
        }
        ,
        Ce.prototype.initPixi = function() {
            var e = this;
            me["g"].skipHello(),
            this.pixi = new me["a"]({
                width: this.vpWidth,
                height: this.vpHeight,
                backgroundColor: this.getColor(ye[this.companyName].quotes.bg),
                resolution: window.devicePixelRatio || 1,
                antialias: !0
            }),
            this.pixi.renderer.plugins.interaction.autoPreventDefault = !1,
            this.pixi.renderer.view.style.touchAction = "auto",
            this.pixiQuotes = new me["c"],
            this.pixi.stage.addChild(this.pixiQuotes),
            this.pixiQuotes.x = 0,
            this.pixiQuotes.y = 0,
            this.pixiQuotesPanel = new me["c"],
            this.pixi.stage.addChild(this.pixiQuotesPanel),
            this.pixiQuotesPanel.x = 0,
            this.pixiQuotesPanel.y = 0,
            this.initPixiQuotes(),
            this.pixiCircles = new me["c"],
            this.pixi.stage.addChild(this.pixiCircles),
            this.pixiCircles.x = 0,
            this.pixiCircles.y = 0,
            this.pixiCirclesPanel = new me["c"],
            this.pixi.stage.addChild(this.pixiCirclesPanel),
            this.pixiCirclesPanel.x = 0,
            this.pixiCirclesPanel.y = 0,
            this.initPixiDots(),
            this.monthsContainer = new me["b"],
            this.pixi.stage.addChild(this.monthsContainer),
            this.pixiMonthPanel = new me["c"],
            this.monthsContainer.addChild(this.pixiMonthPanel),
            this.initMonths(),
            this.eventsContainer = new me["b"],
            this.pixi.stage.addChild(this.eventsContainer),
            this.initEvents(),
            this.pixiYasix = new me["c"],
            this.pixi.stage.addChild(this.pixiYasix),
            this.pixiYasix.x = 0,
            this.pixiYasix.y = 0,
            this.xaxisSprite = new me["d"].from(this.xaxisBuffer),
            this.xaxisSprite.x = 0,
            this.xaxisSprite.y = 0,
            this.pixi.stage.addChild(this.xaxisSprite),
            this.pixiBadge = new me["d"].from(this.badgeBuffer),
            this.pixi.stage.addChild(this.pixiBadge),
            this.pixiBadge.alpha = 0,
            this.pixiBadge.x = 0,
            this.pixiBadge.y = -this.badgeBuffer.height / 2,
            this.pixiTopLayer = new me["c"],
            this.pixi.stage.addChild(this.pixiTopLayer),
            this.pixiTopLayer.x = 0,
            this.pixiTopLayer.y = 0,
            this.pixiInitYaxis(),
            this.ticker = me["f"].shared,
            this.ticker.autoStart = !1,
            this.tickerHandler = function() {
                e.draw()
            }
            ,
            this.ticker.stop(),
            this.ticker.add(this.tickerHandler)
        }
        ,
        Ce.prototype.attachView = function() {
            document.querySelector("#canvas").appendChild(this.pixi.view),
            document.querySelector("#minimap").appendChild(this.minimapBuffer),
            document.querySelector("#minimap-current").appendChild(this.minimapCurrentBuffer)
        }
        ,
        Ce.prototype.initQuotesDataBuffer = function() {
            this.allData = [],
            this.realData = [],
            this.datesArr = [];
            for (var xCoord = Math.floor(this.fullWidth / (this.data.length - 1)), pointIndex = 0; pointIndex < this.data.length - 2; pointIndex++)
                for (
                    var currentValue = this.data[pointIndex].value,
                        nextValue = this.data[pointIndex + 1].value,
                        stockPriceChange = nextValue - currentValue,
                        xChange = 0;
                    xChange <= xCoord;
                    xChange++
                ) {
                    var yCoord = currentValue + (xChange / xCoord) * stockPriceChange;
                    this.allData.push(yCoord),
                    this.realData.push(currentValue),
                    this.datesArr.push(this.data[pointIndex].date)
                }
            // End padding
            for (var o = this.fullWidth - this.allData.length, r = 0; r < o; r++)
                this.allData.push(this.data[this.data.length - 1].value),
                this.realData.push(this.data[this.data.length - 1].value),
                this.datesArr.push(this.data[this.data.length - 1].date);
            // End points
            this.allData[this.allData.length - 1] = this.data[this.data.length - 1].value,
            this.realData[this.realData.length - 1] = this.data[this.data.length - 1].value,
            this.datesArr[this.datesArr.length - 1] = this.data[this.data.length - 1].date
        }
        ,
        Ce.prototype.getMedian = function(e) {
            var t = e;
            if (0 === t.length)
                return 0;
            t.sort((function(e, t) {
                return e - t
            }
            ));
            var a = Math.floor(t.length / 2);
            return t.length % 2 ? t[a] : (t[a - 1] + t[a]) / 2
        }
        ,
        Ce.prototype.togglePlay = function() {
            this.isPaused ? this.playGame() : this.pauseGame()
        }
        ,
        Ce.prototype.startGame = function() {
            this.playGame()
        }
        ,
        Ce.prototype.playGame = function() {
            this.ticker.start(),
            this.isPaused = !1,
            this.isSeeking = !1,
            this.setSpeed(this.defaultSpeed.normal),
            this.onPlay && this.onPlay.call(this)
        }
        ,
        Ce.prototype.fastForward = function() {
            this.isPaused = !1,
            this.isSeeking = !1,
            this.setSpeed(this.defaultSpeed.fast)
        }
        ,
        Ce.prototype.endGameDebug = function() {
            this.seek < .92 && (this.currentTime = this.gameDuration - 5e3)
        }
        ,
        Ce.prototype.pauseGame = function() {
            this.isPaused = !0,
            this.onPause && this.onPause.call(this)
        }
        ,
        Ce.prototype.endGame = function() {
            if (this.onEnd) {
                var e = this.data[this.data.length - 1].value;
                this.onEnd({
                    balance: this.balance,
                    finalBalance: this.balance + this.stock * e
                })
            }
        }
        ,
        Ce.prototype.gameOver = function() {
            this.gameIsOver = !0,
            this.isPaused = !0,
            this.seek = 1,
            this.ticker.stop()
        }
        ,
        Ce.prototype.draw = function() {
            if (this.currentTime >= this.startPause && !this.startPauseReleased && !this.isPaused && (this.startPauseReleased = !0,
            this.onTutStart && this.onTutStart(this)),
            this.currentSeek >= 1)
                return this.endGame(),
                this.gameOver(),
                !1;
            this.isPaused || (this.currentTime += this.ticker.elapsedMS * +this.speed),
            this.currentSeek = this.currentTime / this.gameDuration,
            this.isSeeking ? this.seek = this.userSeek : this.seek = this.currentSeek,
            this.autoWin(),
            this.pixiRenderQuotes2(),
            this.pixiRenderBadge(),
            this.pixiRenderDots(),
            this.pixiRenderYaxis(),
            this.minimapRender(),
            this.updateValues()
        }
        ,
        Ce.prototype.autoWin = function() {
            if (this.isPaused === !0)
                return;

            var e = this.seek * (this.fullWidth - this.vpWidth)
              , t = Math.ceil(e + 0.2)
              , a = this.quotesWidth
              , i = Math.ceil(a + 0.2)
              , currentStockValue = this.realData[t + i + 1]
              , nextStockValue = this.realData[t + i + 2]

            if (nextStockValue !== currentStockValue) {
                var stockValueChange = nextStockValue - currentStockValue
                  , nextPriceDirection = +(stockValueChange > 0); // 1 - up, 0 - down

                if (
                    nextPriceDirection !== this.lastFuturePriceDirection &&
                    this.speed !== 5
                ) {
                    if (nextPriceDirection - this.lastFuturePriceDirection > 0) {
                        var buyQuantity = this.balance / this.currentStockValue ^ 0;
                        this.buyAction(buyQuantity);
                    } else if (this.stock > 0) {
                        var sellQuantity = this.stock;
                        this.sellAction(sellQuantity);
                    }
                }
                this.lastFuturePriceDirection = nextPriceDirection;
            }
        }
        ,
        Ce.prototype.setSeek = function(e) {
            var t = this.speed;
            this.setSpeed(0),
            this.currentTime = e * this.gameDuration,
            this.draw(),
            this.setSpeed(t)
        }
        ,
        Ce.prototype.updateValues = function() {
            var e = this.currentTime / this.firstHalfTime
              , t = Math.max(0, this.gameDuration - this.currentTime) / 1e4
              , a = this.vpWidth / 2
              , i = a / (this.fullWidth - this.vpWidth)
              , s = (this.userSeek,
            (this.currentSeek - this.userSeek) / i);
            if ( // I'll not try to understand it
                this.isSeeking ?
                    this.quotesWidth = s >= 0 &&
                    s <= 1 ?
                        a + s * a :
                        this.vpWidth :
                    this.quotesWidth = e <= 1 ?
                        a * this.clamp(e, 0, 1) :
                        t >= 0 ?
                            this.vpWidth / 2 * (1 - this.clamp(t, 0, 1) + 1) :
                            a,
            this.isSeeking)
                this.pixiBadge.alpha = 1,
                this.pixiBadge.scale.set(1);
            else {
                var n = 50 / this.fullWidth
                  , l = this.seek / n;
                this.seek;
                l <= 1 ? (this.pixiBadge.alpha = l,
                this.pixiBadge.scale.set(l)) : (this.pixiBadge.alpha = 1,
                this.pixiBadge.scale.set(1))
            }
            for (var u = 0; u < this.events.length; u++) {
                var o = this.fullWidth - this.vpWidth
                  , r = this.seek * o - this.events[u].seek * this.fullWidth + this.vpWidth
                  , d = this.vpWidth - r
                  , h = d < 0 - this.monthWidth || d > this.vpWidth ? this.vpWidth : d;
                if (this.events[u].sprite.x = h,
                0 === u) {
                    var v = h > 0 && h < this.vpWidth / 2 - this.monthWidth / 2;
                    v && this.onFirstEvent && !this.firstEventEnd && (this.firstEventEnd = !0,
                    this.onFirstEvent(this))
                }
            }
            for (var c = 0; c < this.months.length; c++) {
                var f = this.months[c].seeks;
                this.months[c].sprite.x = 0;
                for (var p = 0; p < f.length; p++) {
                    var m = f[p]
                      , g = this.fullWidth - this.vpWidth
                      , x = this.seek * g - m * this.fullWidth + this.vpWidth
                      , b = this.vpWidth - x
                      , y = b < -this.monthBuffer.width || b > this.vpWidth ? 0 : b;
                    0 !== y && (this.months[c].sprite.x = y)
                }
            }
        }
        ,
        Ce.prototype.clamp = function(e, t, a) {
            return Math.min(Math.max(t, e), a)
        }
        ,
        Ce.prototype.pixiInitYaxis = function() {
            this.pixiYasix.clear(),
            this.pixiTopLayer.clear();
            var e = this.isMobile ? 55 : 80;
            this.pixiYasix.lineStyle(0),
            this.pixiYasix.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiYasix.drawRect(0, 0, e, this.vpHeight),
            this.pixiYasix.endFill(),
            this.pixiYasix.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiYasix.drawRect(this.vpWidth - 20, 0, 20, this.vpHeight),
            this.pixiYasix.endFill(),
            this.pixiTopLayer.lineStyle(0),
            this.pixiTopLayer.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiTopLayer.drawRect(0, this.vpHeight - 43, 68, 43),
            this.pixiTopLayer.endFill(),
            this.pixiTopLayer.beginFill(this.getColor(ye[this.companyName].quotes.sep)),
            this.pixiTopLayer.drawRect(20, this.vpHeight - 45, this.vpWidth - 40, 2),
            this.pixiTopLayer.endFill();
            var t = this.isMobile ? 60 : 20;
            this.pixiTopLayer.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiTopLayer.drawRect(0, 0, e, t),
            this.pixiTopLayer.endFill()
        }
        ,
        Ce.prototype.pixiRenderYaxis = function() {
            this.xaxisSprite.y = this.yAsixHeight + this.vpHeight + this.yShift
        }
        ,
        Ce.prototype.calcBestScaleRate = function() {
            var e = this.seek * (this.fullWidth - this.vpWidth)
              , t = Math.floor(e)
              , a = this.quotesWidth
              , i = this.allData.slice(t, t + Math.floor(a))
              , s = Math.min.apply(Math, Object(pe["a"])(i))
              , n = Math.max.apply(Math, Object(pe["a"])(i))
              , l = n - s
              , u = 8
              , o = 13
              , r = Math.round(.7 * l)
              , d = Math.max(u, Math.min(r, o));
            if (this.bestScaleRate = d,
            0 !== this.scaleRate)
                return !1;
            if (this.isSeeking)
                this.scaleRate = this.bestScaleRate;
            else if (!this.isPaused && Math.abs(this.bestScaleRate - this.scaleRate) > 10 * this.scaleRateSpeed) {
                var h = this.bestScaleRate - this.scaleRate > 0 ? 1 : -1;
                this.scaleRate += h * this.scaleRateSpeed * this.speed
            }
        }
        ,
        Ce.prototype.calcBestYShift = function() {
            var e = this.vpHeight - this.constYoffset
              , t = this.getLineHeight()
              , a = t / this.measure
              , i = 50
              , s = 20
              , n = this.currentValue * a - e / 2
              , l = n + s
              , u = this.seek * (this.fullWidth - this.vpWidth)
              , o = Math.floor(u)
              , r = this.quotesWidth
              , d = this.allData.slice(o, o + Math.floor(r))
              , h = Math.min.apply(Math, Object(pe["a"])(d))
              , v = Math.max.apply(Math, Object(pe["a"])(d))
              , c = v - h;
            this.clamp(c, 1, 5);
            if (this.bestYShift = Math.max(i, l),
            this.isSeeking) {
                this.getMedian(d);
                var f = d[Math.floor(d.length / 2)]
                  , p = f * a - e / 2
                  , m = p + s;
                this.yShift = Math.max(i, m)
            } else if (!this.isPaused) {
                var g = this.bestYShift - this.yShift;
                Math.abs(g),
                this.yShiftSpeed;
                this.yShift = this.bestYShift
            }
        }
        ,
        Ce.prototype.initPixiQuotes = function() {
            this.pixiQuotes.clear();
            var e = this.vpHeight - this.constYoffset - 5
              , t = this.getLineHeight()
              , a = t / this.measure
              , i = 3
              , s = e + i
              , n = this.monthWidth / this.weeksInMonth
              , l = s - +this.data[0].value * a;
            this.pixiQuotes.lineStyle(i, this.getColor(ye[this.companyName].quotes.line), 1),
            this.pixiQuotes.beginFill(this.getColor(ye[this.companyName].quotes.fill), 1),
            this.pixiQuotes.moveTo(-i, s),
            this.pixiQuotes.lineTo(-i, l);
            for (var u = 1; u < this.data.length; u += 1) {
                var o = s - +this.data[u].value * a;
                this.pixiQuotes.lineTo(u * n, o)
            }
            this.pixiQuotes.lineTo(this.fullWidth, s),
            this.pixiQuotes.closePath(),
            this.pixiQuotesPanel.clear(),
            this.pixiQuotesPanel.lineStyle(0),
            this.pixiQuotesPanel.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiQuotesPanel.drawRect(this.quotesWidth, 0, this.vpWidth, this.vpHeight),
            this.pixiQuotesPanel.endFill()
        }
        ,
        Ce.prototype.pixiRenderQuotes2 = function() {
            this.calcBestYShift(),
            this.pixiQuotes.y = this.yShift,
            this.pixiQuotes.x = -this.seek * (this.fullWidth - this.vpWidth);

            if (this.prevQuotesWidth !== this.quotesWidth) {
                this.pixiQuotesPanel.clear(),
                this.pixiQuotesPanel.lineStyle(0),
                this.pixiQuotesPanel.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
                this.pixiQuotesPanel.drawRect(this.quotesWidth, 0, this.vpWidth, this.vpHeight),
                this.pixiQuotesPanel.endFill()
            }
            this.prevQuotesWidth = this.quotesWidth
        }
        ,
        Ce.prototype.pixiRenderBadge = function() {
            var e = this.seek * (this.fullWidth - this.vpWidth)
              , t = Math.ceil(e)
              , a = this.quotesWidth
              , i = Math.ceil(a)
              , s = this.vpHeight - this.constYoffset
              , n = this.getLineHeight()
              , l = n / this.measure
              , u = s + this.yShift;
            this.currentStockValue = this.realData[t + i],
            this.currentStockDate = this.datesArr[t + i],
            this.stockPriceChanges && this.stockPriceChanges(),
            this.lastCurrentValue = this.currentValue,
            this.currentValue = this.allData[t + i],
            this.prevStockValue !== this.currentStockValue && this.renderBadgeBuffer(this.currentStockValue),
            this.prevStockValue = this.currentStockValue;
            var o = this.currentValue * l;
            if (this.isSeeking || this.isPaused)
                this.pixiDrawBadge(a, u - o - 4);
            else {
                var r = this.vpHeight / 2;
                o < r ? this.pixiDrawBadge(a, u - o - 4) : this.pixiDrawBadge(a, this.vpHeight / 2 - 22)
            }
        }
        ,
        Ce.prototype.pixiRenderQuotes = function() {
            var e = this.seek * (this.fullWidth - this.vpWidth)
              , t = Math.ceil(e)
              , a = this.quotesWidth
              , i = Math.ceil(a)
              , s = this.allData.slice(t, t + i)
              , n = (Math.min.apply(Math, Object(pe["a"])(s)),
            Math.max.apply(Math, Object(pe["a"])(s)),
            this.vpHeight - this.constYoffset)
              , l = this.getLineHeight()
              , u = l / this.measure
              , o = 3;
            this.currentStockValue = this.realData[t + i],
            this.currentStockDate = this.datesArr[t + i],
            this.stockPriceChanges && this.stockPriceChanges(),
            this.lastCurrentValue = this.currentValue,
            this.currentValue = this.allData[t + i],
            this.calcBestScaleRate(),
            this.calcBestYShift();
            var r = n + this.yShift;
            this.pixiQuotes.clear(),
            this.pixiQuotes.lineStyle(o, this.getColor(ye[this.companyName].quotes.line), 1),
            this.pixiQuotes.beginFill(this.getColor(ye[this.companyName].quotes.fill), 1);
            var d = this.allData[t];
            this.pixiQuotes.moveTo(a + o, r + o),
            this.pixiQuotes.lineTo(-o, r + o),
            this.pixiQuotes.lineTo(-o, r - d * u);
            for (var h = 1; h < a; h += 1)
                d = this.allData[t + h] || d,
                this.pixiQuotes.lineTo(h, r - d * u);
            d = this.allData[t + i] || d,
            this.pixiQuotes.lineTo(a + o, r - d * u),
            this.pixiQuotes.closePath(),
            this.currentValue = d || this.lastCurrentValue,
            this.renderBadgeBuffer(this.currentStockValue),
            this.pixiQuotes.lineStyle(0),
            this.pixiQuotes.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiQuotes.drawRect(a - 2, 0, 10, this.vpHeight),
            this.pixiQuotes.endFill(),
            this.pixiDrawBadge(a, r - d * u)
        }
        ,
        Ce.prototype.pixiDrawBadge = function(e, t) {
            if (!this.pixiBadge)
                return !1;
            this.pixiBadge.x = e + 8,
            this.pixiBadge.y = t - this.badgeBuffer.height / 2,
            this.pixiBadge.texture = me["e"].from(this.badgeBuffer),
            this.pixiBadge.texture.update()
        }
        ,
        Ce.prototype.initPixiDots = function() {
            var e = this.isMobile ? 20 : 70
              , t = this.getOneGap()
              , a = 42
              , i = this.vpHeight - a
              , s = this.getLineHeight()
              , n = this.isMobile ? this.vpWidth : this.vpWidth - t;
            this.pixiCircles.clear();
            for (var l = this.seek * (this.fullWidth - this.vpWidth) % t, u = e; u < n; u += t)
                for (var o = i - 38; o > 0; o -= s)
                    this.pixiDrawCircle(u - l, o, 1.1, this.getColor(ye[this.companyName].dots.bg), .2);
            var r = this.isMobile ? 60 : 20;
            this.pixiCirclesPanel.beginFill(this.getColor(ye[this.companyName].quotes.bg)),
            this.pixiCirclesPanel.drawRect(0, 0, this.vpWidth, r),
            this.pixiCirclesPanel.endFill()
        }
        ,
        Ce.prototype.pixiRenderDots = function() {
            this.isMobile;
            var e = 50
              , t = (this.vpHeight,
            this.getOneGap())
              , a = this.seek * (this.fullWidth - this.vpWidth) % t
              , i = this.getLineHeight()
              , s = this.yShift - Math.floor(this.yShift / i) * i;
            this.pixiCircles.y = s,
            this.pixiCircles.x = -a
        }
        ,
        Ce.prototype.pixiRenderMonth = function() {
            this.drawVpMonthBuffer(),
            this.monthSprite.texture = me["e"].from(this.monthExtraVpBuffer),
            this.monthSprite.texture.update()
        }
        ,
        Ce.prototype.pixiDrawCircle = function(e, t, a, i, s) {
            this.pixiCircles.lineStyle(0),
            this.pixiCircles.beginFill(i, s),
            this.pixiCircles.drawCircle(e, t, a),
            this.pixiCircles.endFill()
        }
        ,
        Ce.prototype.drawDot = function(e, t, a) {
            e.fillStyle = "#D7D7DB",
            e.beginPath(),
            e.arc(t, a, 1.3, 0, 2 * Math.PI),
            e.fill()
        }
        ,
        Ce.prototype.drawArc = function(e, t, a, i, s) {
            e.fillStyle = s,
            e.beginPath(),
            e.arc(t, a, i, 0, 2 * Math.PI),
            e.fill()
        }
        ,
        Ce.prototype.drawText = function(e, t, a, i, s, n, l) {
            var u = s || 20
              , o = l || 500
              , r = e.createLinearGradient(0, 0, 0, 100);
            return r.addColorStop(0, "#A4A4B1"),
            r.addColorStop(.8333, "#C1C1D0"),
            n = n || r,
            e.fillStyle = n,
            e.font = "normal ".concat(o, " ").concat(u, "px Roboto"),
            e.fillText(t, a, i),
            e.measureText(t).width
        }
        ,
        Ce.prototype.drawTextMulti = function(e, t, a, i, s, n, l) {
            for (var u = t.split(" "), o = "", r = i, d = 0; d < u.length; d++) {
                var h = o + u[d] + " "
                  , v = e.measureText(h)
                  , c = v.width;
                c > s && d > 0 ? (this.drawText(e, o, a, i, l, ye[this.companyName].events.text),
                o = u[d] + " ",
                i += n) : o = h
            }
            return this.drawText(e, o, a, i, l, ye[this.companyName].events.text),
            i - r + n
        }
        ,
        Ce.prototype.drawXaxis = function() {
            this.xaxisBufferCtx.clearRect(0, 0, this.xaxisBuffer.width, this.xaxisBuffer.height);
            var e = this.isMobile ? 40 : 64
              , t = -1 * this.yAsixHeight - this.constYoffset
              , a = this.getLineHeight()
              , i = this.measureStart;
            this.xaxisBufferCtx.textAlign = "right";
            for (var s = t; s >= 0; s -= a)
                this.drawText(this.xaxisBufferCtx, i + "$", e, s, 13, ye[this.companyName].xasix.text),
                i += this.measure
        }
        ,
        Ce.prototype.getLineHeight = function() {
            return this.lineHeight || (this.lineHeight = (this.vpHeight - 42) / (this.scaleRate - 1)),
            this.lineHeight
        }
        ,
        Ce.prototype.initMonthBuffer = function() {
            var e = 2
              , t = 45;
            this.monthBuffer1 = document.createElement("canvas"),
            this.monthBufferCtx1 = this.monthBuffer1.getContext("2d"),
            this.monthBuffer1.width = (this.fullWidth / 2 + this.vpWidth) * e,
            this.monthBuffer1.height = t * e,
            this.monthBuffer2 = document.createElement("canvas"),
            this.monthBufferCtx2 = this.monthBuffer2.getContext("2d"),
            this.monthBuffer2.width = this.fullWidth / 2 * e,
            this.monthBuffer2.height = t * e,
            this.monthVpBuffer = document.createElement("canvas"),
            this.monthVpBufferCtx = this.monthVpBuffer.getContext("2d"),
            this.monthVpBuffer.width = this.vpWidth,
            this.monthVpBuffer.height = t,
            this.monthExtraVpBuffer = document.createElement("canvas"),
            this.monthExtraVpBufferCtx = this.monthExtraVpBuffer.getContext("2d"),
            this.monthExtraVpBuffer.width = this.vpWidth * e,
            this.monthExtraVpBuffer.height = t * e,
            this.renderMonthBuffer(),
            this.drawVpMonthBuffer()
        }
        ,
        Ce.prototype.drawVpMonthBuffer = function() {
            var e = 2
              , t = this.fullWidth - this.vpWidth
              , a = this.fullWidth / 2
              , i = t * this.seek
              , s = i < a
              , n = s ? i : i - a
              , l = s ? this.monthBufferCtx1 : this.monthBufferCtx2
              , u = l.getImageData(n * e, 0, (n + this.vpWidth) * e, this.monthBuffer1.height);
            this.monthExtraVpBufferCtx.putImageData(u, 0, 0),
            this.monthVpBufferCtx.drawImage(this.monthExtraVpBuffer, 0, 0, this.vpWidth, this.monthVpBuffer.height)
        }
        ,
        Ce.prototype.renderMonthBuffer = function() {
            var e = 2
              , t = 45
              , a = 0
              , i = t * e
              , s = this.monthBuffer1.height - i
              , n = this.fullWidth * e;
            this.monthBufferCtx1.fillStyle = ye[this.companyName].quotes.bg,
            this.monthBufferCtx1.fillRect(a, s, n, i),
            this.monthBufferCtx2.fillStyle = ye[this.companyName].quotes.bg,
            this.monthBufferCtx2.fillRect(a, s, n, i);
            for (var l = new Date(this.data[0].date), u = this.monthWidth, o = l.getMonth() + 1, r = u, d = Number(l.getFullYear()) - (0 === o ? 1 : 0), h = this.fullWidth / 2, v = r + 0; v <= this.fullWidth; v += u) {
                if (o > this.month.length - 1 && (o = 0),
                "Jan" === this.month[o] && (d += 1),
                v < this.fullWidth / 2 + this.vpWidth) {
                    var c = this.drawText(this.monthBufferCtx1, this.month[o], v * e, this.monthBuffer1.height - 20 * e, 12 * e, ye[this.companyName].month.text);
                    "Jan" === this.month[o] && this.drawText(this.monthBufferCtx1, d, (v - 1) * e, this.monthBuffer1.height - 8 * e, 10 * e, ye[this.companyName].month.text),
                    this.monthBufferCtx1.fillRect(v * e + c / 2, (s + 3) * e, 1 * e, 10 * e)
                }
                if (v > this.fullWidth / 2) {
                    var f = v - h
                      , p = this.drawText(this.monthBufferCtx2, this.month[o], f * e, this.monthBuffer1.height - 20 * e, 12 * e, ye[this.companyName].month.text);
                    "Jan" === this.month[o] && this.drawText(this.monthBufferCtx2, d, (f - 1) * e, this.monthBuffer1.height - 8 * e, 10 * e, ye[this.companyName].month.text),
                    this.monthBufferCtx2.fillRect(f * e + p / 2, (s + 3) * e, 1 * e, 10 * e)
                }
                o += 1
            }
        }
        ,
        Ce.prototype.drawMonth = function(e, t) {
            var a = 2
              , i = 45;
            this.monthBuffer = document.createElement("canvas"),
            this.monthBufferCtx = this.monthBuffer.getContext("2d"),
            this.monthBuffer.width = 30 * a,
            this.monthBuffer.height = i * a,
            this.monthBufferCtx.fillStyle = ye[this.companyName].quotes.bg,
            this.monthBufferCtx.fillRect(0, 0, this.monthBuffer.width, this.monthBuffer.height);
            var s = new Date(this.data[0].date)
              , n = (s.getMonth(),
            Number(s.getFullYear()))
              , l = this.drawText(this.monthBufferCtx, e, 0, 25 * a, 12 * a, ye[this.companyName].month.text);
            return "Jan" === e && this.drawText(this.monthBufferCtx, n + t, 0, 36 * a, 10 * a, ye[this.companyName].month.text),
            this.monthBufferCtx.fillRect(l / 2, 3 * a, 1 * a, 10 * a),
            this.monthBuffer
        }
        ,
        Ce.prototype.getMonthCount = function() {
            if (!this.diffMonth) {
                var e = new Date(this.data[0].date)
                  , t = new Date(this.data[this.data.length - 1].date);
                this.diffMonth = this.monthDiff(e, t)
            }
            return this.diffMonth
        }
        ,
        Ce.prototype.getWeeksCount = function() {
            if (!this.diffWeeks) {
                var e = new Date(this.data[0].date)
                  , t = new Date(this.data[this.data.length - 1].date);
                this.diffWeeks = this.weeksDiff(e, t)
            }
            return this.diffWeeks
        }
        ,
        Ce.prototype.getYearsCount = function() {
            if (!this.diffYear) {
                var e = new Date(this.data[0].date)
                  , t = new Date(this.data[this.data.length - 1].date);
                this.diffYear = this.yearsDiff(e, t)
            }
            return this.diffYear
        }
        ,
        Ce.prototype.monthDiff = function(e, t) {
            if (e > t) {
                var a = e;
                e = t,
                t = a
            }
            var i;
            return i = 12 * (t.getFullYear() - e.getFullYear()),
            i -= e.getMonth(),
            i += t.getMonth(),
            i <= 0 ? 0 : i
        }
        ,
        Ce.prototype.daysDiff = function(e, t) {
            if (e > t) {
                var a = e;
                e = t,
                t = a
            }
            var i, s = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return i = 365 * (t.getFullYear() - e.getFullYear()),
            i -= s.slice(0, e.getMonth()).reduce((function(e, t) {
                return e + t
            }
            ), 0),
            i += s.slice(0, t.getMonth()).reduce((function(e, t) {
                return e + t
            }
            ), 0),
            i -= e.getDate(),
            i += t.getDate(),
            i <= 0 ? 0 : i
        }
        ,
        Ce.prototype.weeksDiff = function(e, t) {
            return this.monthDiff(e, t) * this.weeksInMonth
        }
        ,
        Ce.prototype.yearsDiff = function(e, t) {
            if (e > t) {
                var a = e;
                e = t,
                t = a
            }
            var i;
            return i = t.getFullYear() - e.getFullYear(),
            i <= 0 ? 0 : i
        }
        ,
        Ce.prototype.getOneGap = function() {
            return this.onGap || (this.onGap = this.fullWidth / this.getMonthCount() / 10),
            this.onGap
        }
        ,
        Ce.prototype.initXaxisBuffer = function() {
            this.xaxisBuffer = document.createElement("canvas"),
            this.xaxisBufferCtx = this.xaxisBuffer.getContext("2d"),
            this.xaxisBuffer.width = this.vpWidth,
            this.xaxisBuffer.height = -1 * this.yAsixHeight,
            this.drawXaxis()
        }
        ,
        Ce.prototype.initBadgeBuffer = function() {
            var e = "AAPL" === fe[this.companyName].code ? 0 : 10;
            this.badgeBuffer = document.createElement("canvas"),
            this.badgeBufferCtx = this.badgeBuffer.getContext("2d"),
            this.badgeBuffer.width = 50 + 14 * fe[this.companyName].code.length + e,
            this.badgeBuffer.height = 24,
            this.renderBadgeBuffer()
        }
        ,
        Ce.prototype.renderBadgeBuffer = function(e) {
            var t = e || (this.currentValue || 0)
              , a = 4
              , i = 13
              , s = 16
              , n = 8
              , l = String(t.toFixed(1)).length * n
              , u = fe[this.companyName].code.length * n;
            this.badgeBuffer.width = a + i + l + s + u + i,
            this.badgeBufferCtx.clearRect(0, 0, this.badgeBuffer.width, this.badgeBuffer.height),
            this.badgeBufferCtx.fillStyle = ye[this.companyName].badge.bg,
            this.badgeBufferCtx.moveTo(0, this.badgeBuffer.height / 2),
            this.badgeBufferCtx.lineTo(10, 0),
            this.badgeBufferCtx.lineTo(this.badgeBuffer.width, 0),
            this.badgeBufferCtx.lineTo(this.badgeBuffer.width, this.badgeBuffer.height),
            this.badgeBufferCtx.lineTo(this.badgeBuffer.width, this.badgeBuffer.height),
            this.badgeBufferCtx.lineTo(10, this.badgeBuffer.height),
            this.badgeBufferCtx.closePath(),
            this.badgeBufferCtx.fill();
            var o = 15
              , r = 7
              , d = this.badgeBuffer.height - r;
            this.drawText(this.badgeBufferCtx, "$" + t.toFixed(1), a + i, d, o, ye[this.companyName].badge.quotes);
            this.drawText(this.badgeBufferCtx, fe[this.companyName].code, a + i + l + s, d, o, ye[this.companyName].badge.text)
        }
        ,
        Ce.prototype.initEventBuffer = function() {
            this.eventBuffer = document.createElement("canvas"),
            this.eventBufferCtx = this.eventBuffer.getContext("2d"),
            this.eventBuffer.width = 2 * this.monthWidth,
            this.eventBuffer.height = 2 * (this.isMobile ? this.vpHeight - 45 : 305)
        }
        ,
        Ce.prototype.renderEventBuffer = function(e) {
            var t = this.drawTextMulti(this.eventBufferCtx, e, 0, 0, this.eventBuffer.width - 50, 32, 28);
            this.eventBufferCtx.clearRect(0, 0, this.eventBuffer.width, this.eventBuffer.height);
            var a = 6;
            if (this.isMobile) {
                var i = this.eventBuffer.width / 2 - a / 2
                  , s = 30
                  , n = 116
                  , l = 60;
                this.eventBufferCtx.fillStyle = ye[this.companyName].events.line,
                this.eventBufferCtx.fillRect(i, s, a, this.eventBuffer.height),
                this.eventBufferCtx.fillRect(i - n / 2, s, n, l),
                this.eventBufferCtx.beginPath(),
                this.eventBufferCtx.arc(i - n / 2, s + l / 2, l / 2, 0, 2 * Math.PI),
                this.eventBufferCtx.fill(),
                this.eventBufferCtx.beginPath(),
                this.eventBufferCtx.arc(i + n / 2, s + l / 2, l / 2, 0, 2 * Math.PI),
                this.eventBufferCtx.fill();
                var u = l / 1.5;
                this.eventBufferCtx.fillStyle = ye[this.companyName].events.alt,
                this.eventBufferCtx.beginPath(),
                this.eventBufferCtx.arc(i - n / 2, s + l / 2, u / 2, 0, 2 * Math.PI),
                this.eventBufferCtx.fill();
                var o = 24
                  , r = i - n / 2 - 4
                  , d = s + l / 2 + o / 3;
                this.drawText(this.eventBufferCtx, "!", r, d, o, ye[this.companyName].events.text2);
                var h = 24
                  , v = i - n / 2 + u / 2 + 8
                  , c = s + l / 2 + h / 3;
                this.drawText(this.eventBufferCtx, "Cобытие", v, c, h, ye[this.companyName].events.text2)
            } else {
                this.eventBufferCtx.fillStyle = ye[this.companyName].events.line,
                this.eventBufferCtx.fillRect(0, 0, a, this.eventBuffer.height),
                this.eventBufferCtx.fillStyle = ye[this.companyName].events.bg,
                this.eventBufferCtx.fillRect(6, 0, 2 * (this.eventBuffer.width - 3), this.eventBuffer.height);
                var f = (this.eventBuffer.height - t) / 2;
                this.drawTextMulti(this.eventBufferCtx, e, 40, f, this.eventBuffer.width - 50, 32, 28)
            }
        }
        ,
        Ce.prototype.getBalance = function() {
            return this.balance
        }
        ,
        Ce.prototype.getStock = function() {
            return this.stock
        }
        ,
        Ce.prototype.sell = function(e, t) {
            var a = +e;
            return !this.gameIsOver && (!(this.stock < a) && (t && t(this.currentStockDate),
            this.stock -= a,
            void (this.balance += a * this.currentStockValue)))
        }
        ,
        Ce.prototype.buy = function(e, t) {
            var a = +e;
            if (this.gameIsOver)
                return !1;
            var i = a * this.currentStockValue;
            if (i > this.balance)
                return !1;
            t && t(this.currentStockDate),
            this.stock += a,
            this.balance -= i
        }
        ,
        Ce.prototype.getCurrentDate = function() {
            return this.currentStockDate
        }
        ,
        Ce.prototype.setSpeed = function(e) {
            var t = Math.max(0, Math.min(+e, 20));
            this.speed = t
        }
        ,
        Ce.prototype.getCurrentValue = function() {
            return this.currentStockValue
        }
        ,
        Ce.prototype.getEvents = function() {
            return this.events
        }
        ,
        Ce.prototype.getPoints = function() {
            return this.data
        }
        ,
        Ce.prototype.getColor = function(e) {
            return "0x".concat(e.slice(1))
        }
        ,
        Ce.prototype.startSeeking = function() {
            this.isSeeking = !0,
            this.pauseGame()
        }
        ,
        Ce.prototype.endSeeking = function() {
            this.isSeeking = !1
        }
        ,
        Ce.prototype.destroyAll = function() {
            if (!this.pixi)
                return !1;
            this.ticker.remove(this.tickerHandler),
            this.ticker.destroy();
            for (var e = [this.pixiQuotes, this.pixiQuotesPanel, this.pixiCircles, this.pixiCirclesPanel, this.pixiTopLayer, this.pixiYasix, this.xaxisSprite, this.pixiBadge, this.pixiMonthPanel], t = 0; t <= e.length; t++)
                e[t] && e[t].destroy && e[t].destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                });
            for (var a = 0; a < this.events.length; a++)
                this.events[a] && this.events[a].sprite && this.events[a].sprite.destroy && this.events[a].sprite.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                });
            for (var i = 0; i < this.months.length; i++)
                this.months[i] && this.months[i].sprite && this.months[i].sprite.destroy && this.months[i].sprite.destroy({
                    children: !0,
                    texture: !0,
                    baseTexture: !0
                });
            this.pixi.destroy({
                children: !0,
                texture: !0,
                baseTexture: !0
            }),
            this.minimapCurrentBuffer = null,
            this.minimapCurrentStyleBuffer = null,
            this.minimapBuffer = null,
            this.minimapQuotes = null,
            this.dotsBuffer = null,
            this.quotesBuffer = null,
            this.monthBuffer1 = null,
            this.monthBuffer2 = null,
            this.monthVpBuffer = null,
            this.monthExtraVpBuffer = null,
            this.xaxisBuffer = null,
            this.badgeBuffer = null,
            this.eventBuffer = null,
            this.minimapCurrentBuffer = null,
            this.pixiQuotes = null,
            this.pixiQuotesPanel = null,
            this.pixiCircles = null,
            this.pixiCirclesPanel = null,
            this.pixiTopLayer = null,
            this.monthSprite = null,
            this.pixiYasix = null,
            this.xaxisSprite = null,
            this.pixiBadge = null,
            this.pixiMonthPanel = null,
            this.pixi = null
        }
        ;
        var we = Ce
          , Be = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET"
              , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return new Promise((function(i, s) {
                var n = new XMLHttpRequest;
                n.open(t, e),
                n.setRequestHeader("X-This-Is-CSRF", "THIS IS SPARTA!"),
                window.__static_version && n.setRequestHeader("X-JS-Version", window.__static_version),
                n.onload = function() {
                    n.status >= 200 && n.status < 400 ? i(n.response) : s(n.statusText)
                }
                ,
                n.onerror = function() {
                    return s(n.statusText)
                }
                ,
                n.send(a)
            }
            ))
        }
          , _e = function(e) {
            e = unescape(encodeURIComponent(e));
            var t = Se(Me(Te(ke(e), 8 * e.length)));
            return t.toLowerCase()
        };
        function Se(e) {
            for (var t, a = "0123456789ABCDEF", i = "", s = 0; s < e.length; s++)
                t = e.charCodeAt(s),
                i += a.charAt(t >>> 4 & 15) + a.charAt(15 & t);
            return i
        }
        function ke(e) {
            for (var t = Array(e.length >> 2), a = 0; a < t.length; a++)
                t[a] = 0;
            for (a = 0; a < 8 * e.length; a += 8)
                t[a >> 5] |= (255 & e.charCodeAt(a / 8)) << a % 32;
            return t
        }
        function Me(e) {
            for (var t = "", a = 0; a < 32 * e.length; a += 8)
                t += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
            return t
        }
        function Te(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var a = 1732584193, i = -271733879, s = -1732584194, n = 271733878, l = 0; l < e.length; l += 16) {
                var u = a
                  , o = i
                  , r = s
                  , d = n;
                i = Ee(i = Ee(i = Ee(i = Ee(i = He(i = He(i = He(i = He(i = De(i = De(i = De(i = De(i = Ae(i = Ae(i = Ae(i = Ae(i, s = Ae(s, n = Ae(n, a = Ae(a, i, s, n, e[l + 0], 7, -680876936), i, s, e[l + 1], 12, -389564586), a, i, e[l + 2], 17, 606105819), n, a, e[l + 3], 22, -1044525330), s = Ae(s, n = Ae(n, a = Ae(a, i, s, n, e[l + 4], 7, -176418897), i, s, e[l + 5], 12, 1200080426), a, i, e[l + 6], 17, -1473231341), n, a, e[l + 7], 22, -45705983), s = Ae(s, n = Ae(n, a = Ae(a, i, s, n, e[l + 8], 7, 1770035416), i, s, e[l + 9], 12, -1958414417), a, i, e[l + 10], 17, -42063), n, a, e[l + 11], 22, -1990404162), s = Ae(s, n = Ae(n, a = Ae(a, i, s, n, e[l + 12], 7, 1804603682), i, s, e[l + 13], 12, -40341101), a, i, e[l + 14], 17, -1502002290), n, a, e[l + 15], 22, 1236535329), s = De(s, n = De(n, a = De(a, i, s, n, e[l + 1], 5, -165796510), i, s, e[l + 6], 9, -1069501632), a, i, e[l + 11], 14, 643717713), n, a, e[l + 0], 20, -373897302), s = De(s, n = De(n, a = De(a, i, s, n, e[l + 5], 5, -701558691), i, s, e[l + 10], 9, 38016083), a, i, e[l + 15], 14, -660478335), n, a, e[l + 4], 20, -405537848), s = De(s, n = De(n, a = De(a, i, s, n, e[l + 9], 5, 568446438), i, s, e[l + 14], 9, -1019803690), a, i, e[l + 3], 14, -187363961), n, a, e[l + 8], 20, 1163531501), s = De(s, n = De(n, a = De(a, i, s, n, e[l + 13], 5, -1444681467), i, s, e[l + 2], 9, -51403784), a, i, e[l + 7], 14, 1735328473), n, a, e[l + 12], 20, -1926607734), s = He(s, n = He(n, a = He(a, i, s, n, e[l + 5], 4, -378558), i, s, e[l + 8], 11, -2022574463), a, i, e[l + 11], 16, 1839030562), n, a, e[l + 14], 23, -35309556), s = He(s, n = He(n, a = He(a, i, s, n, e[l + 1], 4, -1530992060), i, s, e[l + 4], 11, 1272893353), a, i, e[l + 7], 16, -155497632), n, a, e[l + 10], 23, -1094730640), s = He(s, n = He(n, a = He(a, i, s, n, e[l + 13], 4, 681279174), i, s, e[l + 0], 11, -358537222), a, i, e[l + 3], 16, -722521979), n, a, e[l + 6], 23, 76029189), s = He(s, n = He(n, a = He(a, i, s, n, e[l + 9], 4, -640364487), i, s, e[l + 12], 11, -421815835), a, i, e[l + 15], 16, 530742520), n, a, e[l + 2], 23, -995338651), s = Ee(s, n = Ee(n, a = Ee(a, i, s, n, e[l + 0], 6, -198630844), i, s, e[l + 7], 10, 1126891415), a, i, e[l + 14], 15, -1416354905), n, a, e[l + 5], 21, -57434055), s = Ee(s, n = Ee(n, a = Ee(a, i, s, n, e[l + 12], 6, 1700485571), i, s, e[l + 3], 10, -1894986606), a, i, e[l + 10], 15, -1051523), n, a, e[l + 1], 21, -2054922799), s = Ee(s, n = Ee(n, a = Ee(a, i, s, n, e[l + 8], 6, 1873313359), i, s, e[l + 15], 10, -30611744), a, i, e[l + 6], 15, -1560198380), n, a, e[l + 13], 21, 1309151649), s = Ee(s, n = Ee(n, a = Ee(a, i, s, n, e[l + 4], 6, -145523070), i, s, e[l + 11], 10, -1120210379), a, i, e[l + 2], 15, 718787259), n, a, e[l + 9], 21, -343485551),
                a = Fe(a, u),
                i = Fe(i, o),
                s = Fe(s, r),
                n = Fe(n, d)
            }
            return Array(a, i, s, n)
        }
        function Pe(e, t, a, i, s, n) {
            return Fe(Ie(Fe(Fe(t, e), Fe(i, n)), s), a)
        }
        function Ae(e, t, a, i, s, n, l) {
            return Pe(t & a | ~t & i, e, t, s, n, l)
        }
        function De(e, t, a, i, s, n, l) {
            return Pe(t & i | a & ~i, e, t, s, n, l)
        }
        function He(e, t, a, i, s, n, l) {
            return Pe(t ^ a ^ i, e, t, s, n, l)
        }
        function Ee(e, t, a, i, s, n, l) {
            return Pe(a ^ (t | ~i), e, t, s, n, l)
        }
        function Fe(e, t) {
            var a = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a
        }
        function Ie(e, t) {
            return e << t | e >>> 32 - t
        }
        var Le = _e
          , We = {
            name: "game",
            components: {
                logo: C,
                BaseButton: F,
                GameButton: N,
                Play: Z,
                Stats: ce,
                Shop: le,
                Hint: Y
            },
            data: function() {
                return {
                    showHint: !1,
                    showHintModal: !1,
                    currentTutText: "",
                    currentTutArrow: "",
                    currentTutElement: "",
                    currentTutStep: 0,
                    tutorialSteps: [{
                        text: "Движение графика можно остановить, возобновить или ускорить.",
                        arrow: "bottom-left",
                        element: "#tutorial-first"
                    }, {
                        text: "Покупайте и продавайте акции с помощью этих кнопок. Значение можно вводить вручную, если нажать на цифру.",
                        arrow: "bottom",
                        element: "#tutorial-second"
                    }, {
                        text: "Ваши деньги, акции, а&nbsp;также суммарная стоимость активов по&nbsp;текущему курсу.",
                        arrow: "bottom-right",
                        element: "#tutorial-third"
                    }, {
                        text: "Скоро кое-что произойдёт. Предположите, как событие повлияет на&nbsp;курс акций, и&nbsp;действуйте соответственно.",
                        arrow: "right",
                        element: "#tutorial-four"
                    }, {
                        text: "На&nbsp;мини-карте заранее показаны события. Ещё можно отмотать время назад&nbsp;&mdash; переиграть не&nbsp;получится, но&nbsp;станет понятнее, как акции вели себя в&nbsp;этот&nbsp;же месяц год назад.",
                        arrow: "top",
                        element: "#tutorial-five"
                    }],
                    isMobileTut: !1,
                    isStarted: !1,
                    quotesInstance: null,
                    deals: [],
                    activeButton: "pause",
                    resizeIcon: m.resize,
                    isMouseDown: !1,
                    max: 0,
                    userSeeking: 0,
                    isShowEventPopup: !1,
                    currentEventText: "",
                    windowWidth: window.innerWidth,
                    pointerIcon: m.pointer
                }
            },
            props: {
                company: String
            },
            computed: {
                money: function() {
                    return this.quotesInstance ? this.quotesInstance.getBalance() : 0
                },
                stock: function() {
                    return this.quotesInstance ? this.quotesInstance.getStock() : 0
                },
                currentValue: function() {
                    return this.quotesInstance ? this.quotesInstance.getCurrentValue() : 0
                },
                events: function() {
                    return this.quotesInstance ? this.quotesInstance.getEvents() : []
                },
                points: function() {
                    return this.quotesInstance ? this.quotesInstance.getPoints() : []
                },
                gameStarted: function() {
                    return this.quotesInstance
                },
                seek: function() {
                    return this.quotesInstance ? this.quotesInstance.seek : 0
                },
                currentSeek: function() {
                    return this.quotesInstance ? this.quotesInstance.currentSeek : 0
                },
                isPlayActive: function() {
                    return "play" === this.activeButton
                },
                isPauseActive: function() {
                    return "pause" === this.activeButton
                },
                isForwardActive: function() {
                    return "forward" === this.activeButton
                },
                isSeeking: function() {
                    return !!this.quotesInstance && this.quotesInstance.isSeeking
                },
                currentOffset: function() {
                    var e = this.currentOffsetWidth
                      , t = this.quotesInstance ? this.quotesInstance.seek : 0
                      , a = e * t;
                    return "transform: translateX(".concat(a, "px)")
                },
                maxSeek: function() {
                    return this.max = this.max > this.currentSeek ? this.max : this.currentSeek,
                    this.max
                },
                isAvailable: function() {
                    return !this.isSeeking
                },
                companyName: function() {
                    return this.company
                },
                shopDefault: function() {
                    return "yandex" === this.company ? 10 : 5
                },
                showEventPopup: function() {
                    return this.isShowEventPopup
                },
                getCurrentEventText: function() {
                    return this.currentEventText
                },
                isMobile: function() {
                    return this.windowWidth < 900
                },
                datesStyle: function() {
                    var e = 565 * this.seek;
                    return this.isMobile ? "transform: translateX(-".concat(e, "px)") : ""
                },
                isHintShowed: function() {
                    return this.showHint
                },
                curTutText: function() {
                    return this.currentTutText
                },
                curTutArrow: function() {
                    return this.currentTutArrow
                },
                curTutElement: function() {
                    return this.currentTutElement
                },
                isTutorial: function() {
                    return this.isHintShowed
                }
            },
            mounted: function() {
                var e = this;
                this.$root.$emit("change-company-style", this.company),
                setTimeout((function(t) {
                    e.initQuotes(e.company, (function(t) {
                        e.startGame()
                    }
                    ))
                }
                ), 500);
                var t = this.$el.querySelector("#minimap").parentElement
                  , a = t.offsetWidth
                  , i = this.$el.querySelector("#minimap-current")
                  , s = i.offsetWidth;
                this.currentOffsetWidth = a - s,
                this.currentBoundClientRect = function() {
                    return t.getBoundingClientRect()
                }
                ,
                window.addEventListener("resize", (function() {
                    e.windowWidth = window.innerWidth
                }
                )),
                this.$root.$on("startGame", (function() {
                    if (e.quotesInstance)
                        return !1;
                    e.max = 0,
                    e.userSeeking = 0,
                    e.startGame(),
                    e.activeButton = "play"
                }
                )),
                this.$root.$on("show-event", (function(t) {
                    var a = fe[e.companyName].events[t];
                    e.showEvent(a)
                }
                )),
                this.$root.$on("start-tutorial", (function() {
                    e.nextHint()
                }
                )),
                this.$root.$on("restartGame", (function(e) {}
                )),
                this.$root.$on("setSpeed", (function(t) {
                    if (!e.quotesInstance)
                        return !1;
                    e.quotesInstance.setSpeed(+t)
                }
                )),
                this.$root.$on("endGame", (function(t) {
                    e.isStarted = !1,
                    e.$root.$emit("disable-ui", !0);
                    var a = JSON.stringify(e.deals)
                      , i = Le(a);
                    Be("/special/timetrader/".concat(e.companyName, "/postResults"), "POST", JSON.stringify({
                        deals: e.deals,
                        hash: i
                    })).then((function(a) {
                        var i = JSON.parse(a).data;
                        i.error ? Be("/special/timetrader/".concat(e.companyName, "/leaderBoard"), "GET").then((function(a) {
                            var i = JSON.parse(a).data;
                            setTimeout((function(a) {
                                e.$root.$emit("showFinal", Object(T["a"])(Object(T["a"])({}, t), {}, {
                                    leaderboard: i
                                }))
                            }
                            ), 500)
                        }
                        )) : setTimeout((function(a) {
                            e.$root.$emit("showFinal", Object(T["a"])(Object(T["a"])({}, t), i))
                        }
                        ), 500)
                    }
                    )).catch((function(a) {
                        setTimeout((function(a) {
                            e.$root.$emit("showFinal", Object(T["a"])(Object(T["a"])({}, t), {}, {
                                currentSubsiteId: 0,
                                leaderboard: []
                            }))
                        }
                        ), 500)
                    }
                    ))
                }
                )),
                this.$root.$on("sell", (function(stocksQuantity) {
                    // Ce.prototype.sell = function(stocksQuantity, successDealCallback) {
                    //     stocksQuantity = +stocksQuantity;
                    //     if (!this.gameIsOver && !(this.stock < stocksQuantity)) {
                    //         successDealCallback && successDealCallback(this.currentStockDate);
                    //         this.stock -= stocksQuantity;
                    //         this.balance += stocksQuantity * this.currentStockValue;
                    //     }
                    // }
                    e.quotesInstance.sell(stocksQuantity, (function(currentDealDate) {
                        // Be("/special/timetrader/".concat(e.companyName, "/makeDeal"), "POST"),
                        e.deals.push({
                            date: currentDealDate,
                            quantity: stocksQuantity,
                            action: "sell"
                        }),
                        e.$root.$emit("update-deals", e.deals)
                    }
                    ))
                }
                )),
                this.$root.$on("buy", (function(stocksQuantity) {
                    // Ce.prototype.buy = function(stocksQuantity, successDealCallback) {
                    //     stocksQuantity = +stocksQuantity;
                    //     if (this.gameIsOver)
                    //         return false;
                    //
                    //     var overall = stocksQuantity * this.currentStockValue;
                    //     if (overall > this.balance)
                    //         return false;
                    //
                    //     successDealCallback && successDealCallback(this.currentStockDate);
                    //     this.stock += stocksQuantity;
                    //     this.balance -= overall;
                    // }
                    e.quotesInstance.buy(stocksQuantity, (function(currentDealDate) {
                        // Be("/special/timetrader/yandex/makeDeal", "POST"), // Ha, found a bug. Must be e.companyName
                        e.deals.push({
                            date: currentDealDate,
                            quantity: stocksQuantity,
                            action: "buy"
                        }),
                        e.$root.$emit("update-deals", e.deals)
                    }
                    ))
                }
                )),
                this.$root.$on("global-mouseup", (function() {
                    e.isMouseDown = !1
                }
                )),
                this.$root.$on("game-paused", (function() {
                    e.activeButton = "pause"
                }
                )),
                this.$root.$on("game-play", (function() {
                    e.activeButton = "play",
                    e.isShowEventPopup = !1
                }
                )),
                this.$root.$on("next-hint", (function() {
                    e.currentTutStep += 1,
                    e.tutorialSteps[e.currentTutStep] ? e.nextHint() : e.finishTutorial()
                }
                )),
                this.$root.$on("end-game-debug", (function() {
                    if (!e.quotesInstance)
                        return !1;
                    e.quotesInstance.endGameDebug()
                }
                )),
                this.$root.$on("set-x10-speed-debug", (function() {
                    if (!e.quotesInstance)
                        return !1;
                    e.quotesInstance.setSpeed(10)
                }
                ))
            },
            beforeDestroy: function() {
                if (!this.quotesInstance)
                    return !1;
                this.quotesInstance.destroyAll(),
                this.quotesInstance = null
            },
            methods: {
                pauseGame: function() {
                    if (!this.quotesInstance)
                        return !1;
                    this.activeButton = "pause",
                    this.quotesInstance.pauseGame(),
                    p("Pause", "Click")
                },
                playGame: function() {
                    if (!this.quotesInstance)
                        return !1;
                    this.activeButton = "play",
                    this.quotesInstance.playGame(),
                    p("Play", "Click")
                },
                forwardGame: function() {
                    if (!this.quotesInstance)
                        return !1;
                    this.activeButton = "forward",
                    this.quotesInstance.fastForward(),
                    this.isShowEventPopup = !1,
                    p("x2", "Click")
                },
                startTut: function() {
                    this.$root.$emit("start-tutorial")
                },
                initQuotes: function(e, t) {
                    var a = this;
                    this.quotesInstance = new we({
                        companyName: e,
                        onInit: function() {
                            t && t.call()
                        },
                        onFirstEvent: function(e) {
                            var t = a.$cookie.get("currency-mobile-tut-showed");
                            !t && a.isMobile && (e.pauseGame(),
                            a.showTutPointer())
                        },
                        onEnd: function(e) {
                            a.$root.$emit("endGame", e)
                        },
                        onPause: function() {
                            a.$root.$emit("game-paused")
                        },
                        onPlay: function() {
                            a.$root.$emit("game-play")
                        },
                        onEventTap: function(e) {
                            console.log("onEventTap"),
                            a.$root.$emit("show-event", e)
                        },
                        stockPriceChanges: function() {
                            a.$root.$emit("check-error")
                        },
                        onTutStart: function(e) {
                            var t = a.$cookie.get("currency-tut-showed");
                            t ? a.analytics() : (e.pauseGame(),
                            a.startTut()),
                            a.$root.$emit("disable-ui", !1)
                        },
                        buyAction: function(stocksQuantity) {
                            a.$root.$emit("buy", stocksQuantity);
                        },
                        sellAction: function(stocksQuantity) {
                            a.$root.$emit("sell", stocksQuantity);
                        }
                    })
                },
                startGame: function() {
                    var e = this;
                    if (!this.quotesInstance)
                        return !1;
                    this.activeButton = "play",
                    this.quotesInstance.attachView(),
                    setTimeout((function(t) {
                        e.isStarted = !0,
                        setTimeout((function(t) {
                            e.quotesInstance.startGame()
                        }
                        ), 50)
                    }
                    ), 150)
                },
                endGameDebug: function() {
                    this.quotesInstance.endGameDebug()
                },
                mousedown: function(e) {
                    var t = e.pageX || e.touches[0].pageX || 0
                      , a = t - this.currentBoundClientRect().left
                      , i = e.target
                      , s = (i.offsetWidth,
                    Math.max(0, a - 25))
                      , n = this.currentOffsetWidth
                      , l = (s - 25) / n;
                    l < this.maxSeek && (this.isMouseDown = !0,
                    this.quotesInstance && this.quotesInstance.startSeeking(),
                    this.fireMove(s))
                },
                mouseup: function(e) {
                    var t = e.pageX || (e.touches.length ? e.touches[0].pageX : this.prevPageX) || 0
                      , a = t - this.currentBoundClientRect().left
                      , i = e.target
                      , s = (i.offsetWidth,
                    Math.max(0, a - 25));
                    this.isMouseDown = !1;
                    var n = s / this.currentOffsetWidth;
                    this.quotesInstance && n >= this.maxSeek && this.quotesInstance.endSeeking()
                },
                globalMouseup: function() {
                    this.isMouseDown = !1
                },
                mousemove: function(e) {
                    if (!this.isMouseDown)
                        return !1;
                    var t = e.pageX || e.touches[0].pageX || 0
                      , a = t - this.currentBoundClientRect().left
                      , i = (e.target,
                    Math.max(0, a - 25));
                    this.prevPageX = a,
                    this.fireMove(i)
                },
                fireMove: function(e) {
                    var t = this.currentOffsetWidth
                      , a = Math.min(e / t, this.maxSeek);
                    this.userSeeking = +a,
                    this.quotesInstance.userSeek = +a
                },
                showEvent: function(e) {
                    var t = this;
                    this.currentEventText = e.text,
                    this.pauseGame(),
                    console.log("showEvent", this.isMobileTut),
                    this.isMobileTut && (this.isMobileTut = !1,
                    this.$root.$emit("disable-ui", !1)),
                    setTimeout((function(e) {
                        t.isShowEventPopup = !0
                    }
                    ), 50)
                },
                closeEventPopup: function() {
                    this.isShowEventPopup = !1,
                    this.playGame()
                },
                nextHint: function() {
                    var e = this.tutorialSteps[this.currentTutStep];
                    this.showTutHint(e)
                },
                showTutHint: function(e) {
                    this.showHintModal = !1,
                    this.currentTutText = e.text,
                    this.currentTutArrow = e.arrow,
                    this.currentTutElement = e.element,
                    this.$root.$emit("update-hint", this.currentTutElement),
                    this.showHintModal = !0,
                    this.showHint = !0
                },
                finishTutorial: function() {
                    this.showHint = !1,
                    this.currentTutText = "",
                    this.currentTutArrow = "",
                    this.currentTutElement = "",
                    this.$cookie.set("currency-tut-showed", "YES", {
                        expires: "1M"
                    }),
                    this.playGame(),
                    this.analytics()
                },
                analytics: function() {
                    setTimeout((function() {
                        p("1 min or less", "Time")
                    }
                    ), 6e4),
                    setTimeout((function() {
                        p("3 min or less", "Time")
                    }
                    ), 18e4)
                },
                showTutPointer: function() {
                    var e = this.$cookie.get("currency-mobile-tut-showed");
                    !e && this.isMobile && (this.isMobileTut = !0,
                    this.$root.$emit("disable-ui", !0),
                    this.$cookie.set("currency-mobile-tut-showed", "YES", {
                        expires: "1M"
                    }))
                }
            }
        }
          , $e = We
          , Ve = (a("4837"),
        Object(b["a"])($e, k, M, !1, null, null, null))
          , Ne = Ve.exports
          , Oe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "finish-wrapper"
            }, [e.showFirstStep ? a("div", {
                staticClass: "finish",
                class: {
                    "is-hidden": !e.isStarted
                }
            }, [e.isMobile ? e._e() : a("logo", {
                staticClass: "finish__logo",
                attrs: {
                    eventName: "Logo (final)"
                }
            }), a("div", {
                staticClass: "finish__title",
                class: {
                    "is-win": e.isWin
                },
                domProps: {
                    innerHTML: e._s(e.finalText)
                }
            }), a("div", {
                staticClass: "finish__content content-block small-shadow"
            }, [a("div", {
                staticClass: "finish__inner content-block__inner"
            }, [a("div", {
                staticClass: "finish__container"
            }, [a("div", {
                staticClass: "finish__table"
            }, [a("div", {
                ref: "table",
                staticClass: "finish-table",
                style: e.finishTablePos
            }, [a("vue-custom-scrollbar", {
                staticClass: "scroll-area",
                attrs: {
                    settings: e.settings
                },
                on: {
                    "ps-scroll-y": e.scrollHandle
                }
            }, [a("div", {
                staticClass: "finish-table__rows"
            }, e._l(e.getFinalList, (function(t, i) {
                return a("div", {
                    key: "list-" + i,
                    staticClass: "finish-table__row",
                    class: {
                        "is-active": i === e.userOrder
                    },
                    style: e.rowStyle(i)
                }, [a("div", {
                    staticClass: "finish-table__place"
                }, [a("span", [e._v(e._s(i + 1))])]), a("div", {
                    staticClass: "finish-table__name"
                }, [e._v(e._s(t.name))]), a("div", {
                    staticClass: "finish-table__balance"
                }, [e._v(e._s(e._f("fixed")(t.balance)))])])
            }
            )), 0)])], 1)]), a("div", {
                staticClass: "finish__auth content-block small-shadow"
            }, [a("div", {
                staticClass: "content-block__inner"
            }, [a("p", [a("b", {
                domProps: {
                    innerHTML: e._s("Первая пятёрка из&nbsp;турнирной таблицы получит токенизированные акции Apple, Disney или &laquo;Яндекса&raquo; от&nbsp;Currency.com. Итоги подведём 30&nbsp;июня.")
                }
            })]), e.isAuth ? e._e() : a("p", {
                domProps: {
                    innerHTML: e._s("Авторизуйтесь, чтобы попасть в&nbsp;таблицу:")
                }
            }), a("div", {
                staticClass: "finish__auth-buttons"
            }, [e.isAuth ? e._e() : a("Gamebutton", {
                staticClass: "finish__auth-button morph",
                attrs: {
                    textContent: "Авторизоваться"
                },
                nativeOn: {
                    click: function(t) {
                        return e.openAuth(t)
                    }
                }
            }), a("a", {
                staticClass: "finish__link",
                attrs: {
                    href: "https://vc.ru/promo/123729-back-to-investing?ea=a375d8e5f28249cb7eb3a2a26dbb3b8e8a8f6135ebf6946d94dc632fcbd8ba12",
                    target: "_blank"
                },
                on: {
                    click: e.readInfo
                }
            }, [e._v("Прочитать о призах")])], 1)])])]), e.isMobile ? e._e() : a("div", {
                staticClass: "finish__text",
                domProps: {
                    innerHTML: e._s("Currency.com&nbsp;&mdash; белорусская криптобиржа. Её&nbsp;пользователи составляют портфели из&nbsp;привычных фондовых активов, но&nbsp;в&nbsp;токенизированном виде. Это позволяет покупать инвестиционные инструменты за&nbsp;криптовалюту или фиат и&nbsp;быстро управлять капиталом. При&nbsp;регистрации вы&nbsp;получите бонус до&nbsp;$100&nbsp;на покрытие торговых комиссий.")
                }
            })])]), a("div", {
                staticClass: "finish__bottom"
            }, [a("div", {
                staticClass: "finish__footer"
            }, [e.isMobile ? e._e() : a("div", {
                staticClass: "finish__buttons"
            }, [a("Gamebutton", {
                staticClass: "finish__button morph",
                attrs: {
                    textContent: "Получить бонус",
                    url: e.promoUrl,
                    tag: "a"
                },
                nativeOn: {
                    click: function(t) {
                        return e.getBonus(t)
                    }
                }
            }), a("Gamebutton", {
                staticClass: "finish__again",
                attrs: {
                    textContent: "Начать заново",
                    iconName: "again",
                    alignment: "left"
                },
                nativeOn: {
                    click: function(t) {
                        return e.restartGame(t)
                    }
                }
            })], 1), a("div", {
                staticClass: "finish__shares"
            }, [e._l(e.networks, (function(t) {
                return a("ShareNetwork", {
                    key: t.key,
                    class: "game-button background share-network is-" + t.network,
                    style: {
                        backgroundColor: t.color
                    },
                    attrs: {
                        network: t.network,
                        url: e.shareUrl,
                        title: e.shareTitle,
                        description: "",
                        quote: e.sharing.quote,
                        hashtags: e.sharing.hashtags,
                        twitterUser: e.sharing.twitterUser
                    },
                    on: {
                        open: e.openShare
                    }
                }, [a("span", {
                    domProps: {
                        innerHTML: e._s(e.getIcon(t.name))
                    }
                }), t.text ? a("span", [e._v(e._s(t.text))]) : e._e()])
            }
            )), e.isMobile ? a("Gamebutton", {
                staticClass: "finish__again",
                attrs: {
                    textContent: "Начать заново",
                    iconName: "again",
                    alignment: "left"
                },
                nativeOn: {
                    click: function(t) {
                        return e.restartGame(t)
                    }
                }
            }) : e._e()], 2)]), e.isMobile ? a("div", {
                staticClass: "finish__next"
            }, [a("Gamebutton", {
                staticClass: "morph",
                attrs: {
                    textContent: "Завершить"
                },
                nativeOn: {
                    click: function(t) {
                        return e.nextStep(t)
                    }
                }
            })], 1) : e._e()]), a("div", {
                staticClass: "finish__rights"
            }, [a("span", {
                domProps: {
                    innerHTML: e._s('ООО «Карренси Ком Бел» (УНП 193130368). Общий срок проведения конкурса: 16.06.2020 – 30.07.2020 (срок принятия участия до 30.06.2020). Информация об организаторе, правилах, количестве призов, сроках, месте и порядке их получения — на <a href="https://vc.ru/promo/126092-investor-iz-budushchego-pravila-provedeniya-konkursa?ea=2d976301ffbf67bc828f548b239ca6d41147dabfdfa9a3d480a2d0465b4f7e67" target="_blank">этой</a> странице. 18+')
                }
            })])], 1) : e._e(), e.showLastStep ? a("div", {
                staticClass: "finish"
            }, [a("logo", {
                staticClass: "finish__logo2"
            }), a("div", {
                staticClass: "finish__content content-block small-shadow"
            }, [a("div", {
                staticClass: "finish__inner content-block__inner"
            }, [a("div", {
                staticClass: "finish__text",
                domProps: {
                    innerHTML: e._s("Currency.com&nbsp;&mdash; белорусская криптобиржа. Её&nbsp;пользователи составляют портфели из&nbsp;привычных фондовых активов, но&nbsp;в&nbsp;токенизированном виде. Это позволяет покупать инвестиционные инструменты за&nbsp;криптовалюту или фиат и&nbsp;быстро управлять капиталом. При&nbsp;регистрации вы&nbsp;получите бонус до&nbsp;$100&nbsp;на покрытие торговых комиссий.")
                }
            })])]), a("div", {
                staticClass: "finish__footer"
            }, [a("Gamebutton", {
                staticClass: "finish__button morph",
                attrs: {
                    tag: "a",
                    textContent: "Получить бонус",
                    url: e.promoUrl
                },
                nativeOn: {
                    click: function(t) {
                        return e.getBonus(t)
                    }
                }
            })], 1)], 1) : e._e(), e.showAuthModal ? a("div", {
                staticClass: "finish-auth",
                on: {
                    click: e.closeAuth
                }
            }, [a("div", {
                staticClass: "finish-auth__wrapper"
            }, [a("div", {
                staticClass: "finish-auth__modal auth-modal",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [a("div", {
                staticClass: "auth-modal__title",
                domProps: {
                    innerHTML: e._s("Авторизуйтесь, чтобы поучаствовать в&nbsp;розыгрыше")
                }
            }), a("div", {
                staticClass: "auth-modal__buttons"
            }, [a("BaseButton", {
                staticClass: "auth-modal__button is-facebook",
                attrs: {
                    iconName: "facebook"
                },
                nativeOn: {
                    click: function(t) {
                        return e.authUser("facebook")
                    }
                }
            }), a("BaseButton", {
                staticClass: "auth-modal__button is-vk",
                attrs: {
                    iconName: "vk"
                },
                nativeOn: {
                    click: function(t) {
                        return e.authUser("vk")
                    }
                }
            }), a("BaseButton", {
                staticClass: "auth-modal__button is-twitter",
                attrs: {
                    iconName: "twitter"
                },
                nativeOn: {
                    click: function(t) {
                        return e.authUser("twitter")
                    }
                }
            })], 1)])])]) : e._e()])
        }
          , qe = []
          , Ge = (a("b0c0"),
        a("4b70"))
          , Re = a.n(Ge)
          , ze = (a("bf6f"),
        a("53ca"),
        {
            name: "finish",
            components: {
                logo: C,
                BaseButton: F,
                Gamebutton: N,
                vueCustomScrollbar: Re.a
            },
            props: {
                balance: Number,
                list: Array,
                deals: Array,
                companyName: String,
                id: Number,
                networks: Array
            },
            data: function() {
                return {
                    promoUrl: "https://clck.ru/NwH2f",
                    currentSubsiteId: 0,
                    showAuthModal: !1,
                    currentStep: 0,
                    sharing: {
                        url: "https://vc.ru/special/timetrader",
                        title: "Инвестор из будущего",
                        description: "Вы вернулись в 2011 год и можете заработать на акциях Apple, Disney или «Яндекса»."
                    },
                    auth: !1,
                    userName: "Вы",
                    isStarted: !1,
                    scrollTop: 0,
                    settings: {
                        maxScrollbarLength: 20,
                        wheelSpeed: .05,
                        wheelPropagation: !0
                    },
                    finalList: [],
                    userOrder: 0,
                    windowWidth: window.innerWidth,
                    facebookIcon: m.facebook,
                    vkIcon: m.vk,
                    twitterIcon: m.twitter,
                    finishTablePosOffset: 0
                }
            },
            computed: {
                balanceFromatted: function() {
                    var e = this.balance - 1e3;
                    return "<span>$".concat(Math.round(Math.abs(e)), "</span>")
                },
                isWin: function() {
                    var e = this.balance - 1e3;
                    return e >= 0
                },
                percent: function() {
                    var e = this.balance - 1e3
                      , t = Math.round(e / 1e3 * 100);
                    return t
                },
                percentFormatted: function() {
                    return "<span>".concat(Math.abs(this.percent), "%</span>")
                },
                finalText: function() {
                    var e = this.balance - 1e3
                      , t = e >= 0 ? "Вы заработали " : "Вы потратили "
                      , a = e >= 0 ? " и&nbsp;увеличили начальный капитал на ".concat(this.percentFormatted, ".") : " и&nbsp;потеряли ".concat(this.percentFormatted, " от&nbsp;начального капитала.")
                      , i = t + this.balanceFromatted + a;
                    return i
                },
                getFinalList: function() {
                    var e = this.id || this.currentSubsiteId || 0
                      , t = this.isAuth ? this.finalList : this.list;
                    return this.userOrder = e ? this.getUserOrder(e, t) : 999999,
                    t
                },
                isAuth: function() {
                    return this.auth
                },
                isMobile: function() {
                    return this.windowWidth < 900
                },
                showFirstStep: function() {
                    return !this.isMobile || 0 === this.currentStep
                },
                showLastStep: function() {
                    return !!this.isMobile && 1 === this.currentStep
                },
                finishTablePos: function() {
                    return {
                        "--finish-table-pos": this.finishTablePosOffset + "px"
                    }
                },
                shareTitle: function() {
                    var e = "Лучше мне не путешествовать во времени — разорюсь.";
                    return this.percent > 0 && this.percent < 50 && (e = "Едва окупил аренду машины времени."),
                    this.percent >= 50 && (e = "Если построю машину времени, не пропаду."),
                    e
                },
                shareUrl: function() {
                    return this.sharing.url + "/share/" + this.companyName + "/" + Math.round(this.balance)
                }
            },
            mounted: function() {
                var e = this;
                this.initAuth(),
                this.checkAuth().then((function(t) {
                    e.auth = !0,
                    t.id && (e.currentSubsiteId = t.id),
                    e.finalList = e.list,
                    e.init()
                }
                )).catch((function(t) {
                    e.auth = !1,
                    e.init()
                }
                )),
                window.addEventListener("resize", (function() {
                    e.windowWidth = window.innerWidth
                }
                )),
                this.$root.$on("user-auth", (function() {
                    e.showAuthModal = !1,
                    e.auth = !0;
                    var t = JSON.stringify(e.deals)
                      , a = Le(t);
                    Be("/special/timetrader/".concat(e.companyName, "/postResults"), "POST", JSON.stringify({
                        deals: e.deals,
                        hash: a
                    })).then((function(t) {
                        var a = JSON.parse(t).data;
                        a.error ? Be("/special/timetrader/".concat(e.companyName, "/leaderBoard"), "GET").then((function(t) {
                            var a = JSON.parse(t).data;
                            e.finalList = a.leaderboard || [],
                            e.currentSubsiteId = e.currentSubsiteId || a.currentSubsiteId || 0,
                            e.initTable()
                        }
                        )) : (e.finalList = a.leaderboard || [],
                        e.currentSubsiteId = e.currentSubsiteId || a.currentSubsiteId || 0,
                        e.initTable())
                    }
                    )).catch((function(e) {
                        console.log("Error 1")
                    }
                    ))
                }
                ))
            },
            methods: {
                init: function() {
                    var e = this;
                    this.initTable(),
                    setTimeout((function(t) {
                        e.isStarted = !0,
                        p("Project", "Final reached")
                    }
                    ), 50)
                },
                openShare: function(e) {
                    if (!e)
                        return !1;
                    var t = {
                        facebook: "Fb",
                        twitter: "Twi",
                        vk: "VK"
                    };
                    p("Share — " + t[e], "Click")
                },
                readInfo: function() {
                    p("Info", "Click")
                },
                getBonus: function() {
                    p("Partner button", "Click")
                },
                startGame: function() {
                    var e = this;
                    this.isStarted = !1,
                    setTimeout((function(t) {
                        e.$root.$emit("startGame", "yandex")
                    }
                    ), 1e3)
                },
                restartGame: function() {
                    var e = this;
                    this.isStarted = !1,
                    p("Restart", "Click"),
                    setTimeout((function(t) {
                        e.$root.$emit("restartGame")
                    }
                    ), 500)
                },
                scrollHandle: function(e) {
                    var t = document.querySelector(".ps-container");
                    this.scrollTop = t ? t.scrollTop : 0
                },
                rowStyle: function(e) {
                    var t = document.querySelector(".ps-container")
                      , a = !!t && t.children[0].children[e];
                    if (!t || !a)
                        return 0;
                    var i = a.offsetTop - this.scrollTop
                      , s = i / t.offsetHeight
                      , n = s < .5 ? (s - .01) / .5 : 1.05 - (s - .4) / .5;
                    return "--pos: ".concat(n)
                },
                getIcon: function(e) {
                    return m[e.toLowerCase()]
                },
                nextStep: function() {
                    this.currentStep = 1
                },
                openAuth: function() {
                    this.showAuthModal = !0
                },
                closeAuth: function() {
                    this.showAuthModal = !1
                },
                authUser: function(e) {
                    var t = "https://" + location.hostname + "/auth/";
                    this.openAuthModal(t + e),
                    p("Login (".concat(e, ")"), "Click")
                },
                initAuth: function() {
                    var e = this
                      , t = function() {
                        1 === parseInt(localStorage.logged_in) && (localStorage.removeItem("logged_in"),
                        e.$root.$emit("user-auth"),
                        console.log("Auth")),
                        localStorage.auth_error && (console.log("Auth error", localStorage.auth_error),
                        localStorage.removeItem("auth_error"))
                    };
                    window.addEventListener("storage", t)
                },
                openAuthModal: function(e) {
                    var t = window.innerWidth / 2 - 400
                      , a = window.innerHeight / 2 - 285;
                    localStorage.removeItem("logged_in"),
                    window.open(e, "displayWindow", "width=720,height=440,left=".concat(t, ",top=").concat(a, ",location=no,directories=no,status=no,toolbar=no,menubar=no"))
                },
                checkAuth: function() {
                    var e = this;
                    return new Promise((function(t, a) {
                        Be("/auth/check").then((function(i) {
                            var s = {};
                            try {
                                s = JSON.parse(i)
                            } catch (o) {}
                            var n = s.data
                              , l = n ? n.id : 0
                              , u = !!n && n.name;
                            u ? (t({
                                name: u,
                                id: l
                            }),
                            e.currentSubsiteId = l) : a()
                        }
                        )).catch((function(e) {
                            a()
                        }
                        ))
                    }
                    ))
                },
                initTable: function() {
                    var e = this.isAuth ? this.currentSubsiteId : this.id;
                    this.userOrder = this.getUserOrder(e, this.list);
                    var t = document.querySelector(".ps-container");
                    if (t) {
                        var a = t.children[0].children[this.userOrder];
                        if (a) {
                            a.offsetTop,
                            t.offsetHeight;
                            var i = 7
                              , s = (this.userOrder + 1) / this.getFinalList.length
                              , n = Math.max(0, Math.min(s, 1))
                              , l = n * (this.$refs.table.clientHeight - 20);
                            this.finishTablePosOffset = i + l;
                            var u = t.scrollHeight - t.offsetHeight
                              , o = u * n;
                            t.scrollTo(0, o)
                        }
                    }
                },
                getUserOrder: function(e, t) {
                    for (var a = 999999, i = 0; i < t.length; i++)
                        t[i].id === e && (a = i);
                    return a
                }
            },
            filters: {
                fixed: function(e) {
                    if (!e)
                        return 0;
                    e = +e.toFixed(0);
                    var t = e
                      , a = t < 0 ? "-" : "";
                    return a + "$" + re(Math.abs(t), " ")
                }
            }
        })
          , Ye = ze
          , Qe = (a("b355"),
        Object(b["a"])(Ye, Oe, qe, !1, null, null, null))
          , Ue = Qe.exports
          , je = {
            name: "App",
            components: {
                start: S,
                game: Ne,
                finish: Ue
            },
            data: function() {
                return {
                    shareNetworks: [],
                    disableUI: !0,
                    quotes: null,
                    company: "none",
                    companyStyleTheme: "none",
                    state: "init",
                    isLoad: !1,
                    isStarted: !1,
                    deals: [],
                    balance: 1e3,
                    flatTransitions: !1,
                    list: [],
                    currentSubsiteId: 0,
                    userData: "",
                    appleBalance: "",
                    applePlace: "",
                    yandexBalance: "",
                    yandexPlace: "",
                    disneyBalance: "",
                    disneyPlace: "",
                    xPressed: 0
                }
            },
            computed: {
                getState: function() {
                    return this.state
                },
                isStart: function() {
                    return "start" === this.getState
                },
                isGame: function() {
                    return "game" === this.getState
                },
                isEnd: function() {
                    return "end" === this.getState
                },
                isDebugging: function() {
                    return this.xPressed < 5
                },
                companyName: function() {
                    return this.company
                },
                companyStyle: function() {
                    return this.companyStyleTheme
                },
                isUIdisabled: function() {
                    return this.disableUI
                }
            },
            mounted: function() {
                var e = this;
                p("Project", "Init"),
                this.loadImages(),
                this.initUserData((function(t) {
                    setTimeout((function(t) {
                        e.state = "start",
                        e.$root.$emit("startScreen")
                    }
                    ), 250)
                }
                )),
                this.$root.$on("startScreen", (function() {
                    e.isStarted = !0
                }
                )),
                this.$root.$on("update-deals", (function(t) {
                    e.deals = t
                }
                )),
                this.$root.$on("gameScreen", (function(e) {}
                )),
                this.$root.$on("restartGame", (function(t) {
                    e.updateUserData().then((function(t) {
                        e.initUserData((function(t) {
                            e.restartGame()
                        }
                        ))
                    }
                    )).catch((function(t) {
                        e.restartGame()
                    }
                    ))
                }
                )),
                this.$root.$on("initGame", (function(t) {
                    e.company = t,
                    e.flatTransitions = !0,
                    setTimeout((function(t) {
                        e.state = "game"
                    }
                    ), 50)
                }
                )),
                this.$root.$on("flat-transitions", (function(t) {
                    e.flatTransitions = t
                }
                )),
                this.$root.$on("change-company-style", (function(t) {
                    e.companyStyleTheme = t,
                    setTimeout((function() {
                        e.flatTransitions = !1
                    }
                    ), 2e3)
                }
                )),
                this.$root.$on("disable-ui", (function(t) {
                    e.disableUI = t
                }
                )),
                this.$root.$on("startGame", (function(t) {
                    e.state = "game"
                }
                )),
                this.$root.$on("showFinal", (function(t) {
                    e.disableUI = !0,
                    e.balance = +t.finalBalance,
                    e.list = t.leaderboard,
                    e.currentSubsiteId = t.currentSubsiteId,
                    e.shareNetworks = [{
                        network: "facebook",
                        name: "Facebook",
                        icon: "facebook",
                        text: "Поделиться",
                        url: "/special/timetrader/share/" + e.companyName + "/" + Math.round(e.balance)
                    }, {
                        network: "twitter",
                        name: "Twitter",
                        icon: "twitter",
                        url: "/special/timetrader/share/" + e.companyName + "/" + Math.round(e.balance)
                    }, {
                        network: "vk",
                        name: "Vk",
                        icon: "vk",
                        url: "/special/timetrader/share/" + e.companyName + "/" + Math.round(e.balance)
                    }],
                    e.state = "end"
                }
                ))
            },
            methods: {
                gameLoaded: function() {
                    this.isLoad = !0
                },
                startGame: function() {
                    this.state = "game"
                },
                loadImages: function() {
                    l(u).then(this.gameLoaded)
                },
                gameOverDebug: function() {
                    this.$root.$emit("end-game-debug")
                },
                speedX10: function() {
                    this.$root.$emit("set-x10-speed-debug")
                },
                globalMouseup: function() {
                    this.$root.$emit("global-mouseup")
                },
                initUserData: function(e) {
                    this.userData = window.userData || {},
                    this.userData.yandex && this.userData.yandex.score && (this.yandexBalance = String(this.userData.yandex.score),
                    this.yandexPlace = String(this.userData.yandex.position)),
                    this.userData.disney && this.userData.disney.score && (this.disneyBalance = String(this.userData.disney.score),
                    this.disneyPlace = String(this.userData.disney.position)),
                    this.userData.apple && this.userData.apple.score && (this.appleBalance = String(this.userData.apple.score),
                    this.applePlace = String(this.userData.apple.position)),
                    e()
                },
                updateUserData: function() {
                    return new Promise((function(e, t) {
                        Be("/special/timetrader/getUserData", "GET").then((function(t) {
                            var a = JSON.parse(t).data;
                            a && (window.userData = a),
                            e()
                        }
                        )).catch((function(e) {
                            t()
                        }
                        ))
                    }
                    ))
                },
                restartGame: function() {
                    var e = this;
                    this.state = "start",
                    this.flatTransitions = !0,
                    this.company = "none",
                    this.companyStyleTheme = "none",
                    this.balance = 0,
                    setTimeout((function(t) {
                        e.$root.$emit("startScreen"),
                        setTimeout((function() {
                            e.flatTransitions = !1
                        }
                        ), 2e3)
                    }
                    ), 100)
                }
            }
        }
          , Xe = je
          , Je = (a("5c0b"),
        Object(b["a"])(Xe, s, n, !1, null, null, null))
          , Ze = Je.exports
          , Ke = a("bd8c")
          , et = a.n(Ke)
          , tt = a("00e7")
          , at = a.n(tt);
        i["default"].config.productionTip = !1,
        i["default"].use(at.a),
        i["default"].use(et.a, {
            networks: [{
                network: "facebook",
                name: "Facebook",
                icon: "facebook"
            }, {
                network: "twitter",
                name: "Twitter",
                icon: "twitter"
            }, {
                network: "vk",
                name: "Vk",
                icon: "vk"
            }]
        }),
        new i["default"]({
            render: function(e) {
                return e(Ze)
            }
        }).$mount("#app")
    },
    "5c0b": function(e, t, a) {
        "use strict";
        var i = a("9c0c")
          , s = a.n(i);
        s.a
    },
    "5ce2": function(e, t, a) {},
    "62b9": function(e, t, a) {
        "use strict";
        var i = a("05c8")
          , s = a.n(i);
        s.a
    },
    6787: function(e, t, a) {
        "use strict";
        var i = a("e3ac")
          , s = a.n(i);
        s.a
    },
    7228: function(e, t, a) {},
    "7c9c": function(e, t, a) {},
    "7eee": function(e, t, a) {
        "use strict";
        var i = a("3fb8")
          , s = a.n(i);
        s.a
    },
    "937c": function(e, t, a) {
        "use strict";
        var i = a("7228")
          , s = a.n(i);
        s.a
    },
    "9c0c": function(e, t, a) {},
    "9c79": function(e, t, a) {
        "use strict";
        var i = a("d562")
          , s = a.n(i);
        s.a
    },
    b355: function(e, t, a) {
        "use strict";
        var i = a("4056")
          , s = a.n(i);
        s.a
    },
    c0a2: function(e, t, a) {},
    d562: function(e, t, a) {},
    e3ac: function(e, t, a) {}
});
