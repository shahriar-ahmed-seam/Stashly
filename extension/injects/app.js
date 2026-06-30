!(function () {
  // Bootstrap hardening:
  // The app waits for these globals before calling requireLazy().
  // In some cases (already-open tabs / delayed SW), they may not be injected yet.
  const __EXTENSION_SLUG__ = "download-albums-for-facebook";

  try {
    if (!window[__EXTENSION_SLUG__]) {
      const manifest = chrome?.runtime?.getManifest?.();
      window[__EXTENSION_SLUG__] = {
        id: chrome?.runtime?.id,
        slug: __EXTENSION_SLUG__,
        extensionName: manifest?.name,
        version: manifest?.version,
        icons: manifest?.icons,
        extensionFolderUri: chrome?.runtime?.getURL?.("/") ?? "",
        isProdMode: false,
      };
    }
  } catch {
    // best-effort only
  }

  try {
    window.download_albums_for_facebook =
      window.download_albums_for_facebook || {};
    const cfg = window.download_albums_for_facebook;

    if (!cfg.fetchLimit || typeof cfg.fetchLimit !== "object") {
      cfg.fetchLimit = { limitation: 0 };
    }
    if (typeof cfg.fetchLimit.limitation !== "number") {
      cfg.fetchLimit.limitation = 0;
    }

    if (!cfg.carouselDownloader || typeof cfg.carouselDownloader !== "object") {
      cfg.carouselDownloader = { needUpgrade: false };
    }
    if (typeof cfg.carouselDownloader.needUpgrade !== "boolean") {
      cfg.carouselDownloader.needUpgrade = false;
    }
  } catch {
    // best-effort only
  }

  function e(e, t) {
    function i() {
      e() ? t() : requestAnimationFrame(i);
    }
    i();
  }
  function t() {
    const e = i();
    if (e) {
      const t = window.require("react"),
        i = (window.require(e), n());
      !(function (e, t, i, n, s, o) {
        "use strict";
        const a = "Stashly",
          r = "download-albums-for-facebook",
          l =
            "https://github.com/shahriar-ahmed-seam/Stashly",
          d =
            "https://github.com/shahriar-ahmed-seam/Stashly/releases",
          u = {
            projectId: "a",
            chromeExtId: "b",
            name: "c",
            link: "d",
            description: "e",
            type: "f",
            ytb: "g",
            prices: "h",
            plan: "i",
            platform: "j",
            price: "k",
            id: "l",
            period: "m",
          };
        function c(e) {
          const t = Object.fromEntries(
            Object.entries(u).map(([e, t]) => [t, e]),
          );
          return e.map((e) => {
            let i = {};
            for (let n in e) {
              const s = t[n] || n;
              Array.isArray(e[n])
                ? (i[s] = e[n].map((e) => c([e])[0]))
                : (i[s] = e[n]);
            }
            return i;
          });
        }
        const h = "data:application/json,[]",
          g = "data:application/json,[]",
          p = "https://github.com/shahriar-ahmed-seam/Stashly/";
        let f = [];
        const m = "mHxGWIqCotRcnLgFbr4YcdaZWDMHJlWu";
        function w(n) {
          const {
              extsProjectIdArr: s = [],
              perRow: o = 3,
              direction: a = "horizontal",
              size: r = "normal",
              avtarSize: l = 48,
              withTitleBar: d = !0,
            } = n,
            [u, c] = t.useState({}),
            [h, g] = t.useState([]),
            f = t.useMemo(
              () =>
                s
                  .map((e) => {
                    const t = h.find((t) => t.projectId === e);
                    if (t) {
                      const i = u[e] ?? {};
                      return { ...t, ...i };
                    }
                    return !1;
                  })
                  .filter((e) => !!e),
              [s, u, h],
            );
          return (
            t.useEffect(() => {
              (Promise.all([x(), y()]).then(([e, t]) => {
                (c(e), g(t));
              }),
                v(
                  m,
                  "\n      .esuit-exts{\n        opacity: 0.6;\n        transition: opacity 300ms;\n      }\n      \n      .esuit-exts:hover,.esuit-ext:hover{\n        opacity: 1 !important\n      }\n    ",
                ));
            }, []),
            i.jsxs("section", {
              style: {
                color: "inherit",
                margin: (d ? "24px" : "0") + " auto 0 auto",
              },
              className: "esuit-exts",
              children: [
                d &&
                  i.jsxs("div", {
                    style: {
                      fontSize: 14,
                      opacity: 0.8,
                      marginBottom: 8,
                      display: "flex",
                      flexDirection: "vertical" === a ? "column" : "row",
                      gap: "vertical" === a ? 8 : 0,
                      justifyContent: "space-between",
                      alignItems: "center",
                    },
                    children: [
                      i.jsx("div", { children: "Useful extensions for you" }),
                      i.jsx("a", {
                        href: p,
                        target: "_blank",
                        style: { fontSize: 12, textDecoration: "none" },
                        children: "Find more extensions",
                      }),
                    ],
                  }),
                i.jsx("div", {
                  style: {
                    display: "grid",
                    gridTemplateColumns: `repeat(${o}, 1fr)`,
                    gap: 12,
                  },
                  children: f.map((t) =>
                    i.jsx(
                      e.Tooltip,
                      {
                        title: i.jsxs("div", {
                          children: [
                            i.jsx("div", { children: t.description }),
                            i.jsx("div", {
                              style: {
                                paddingTop: 8,
                                paddingBottom: 4,
                                textAlign: "center",
                                fontSize: 16,
                              },
                              children: "Click it to install",
                            }),
                          ],
                        }),
                        children: i.jsxs("div", {
                          className: "esuit-ext",
                          style: {
                            display: "flex",
                            flexDirection: "vertical" === a ? "column" : "row",
                            alignItems: "center",
                            gap: 8,
                            cursor: "pointer",
                            minWidth: "normal" === r ? 330 : 180,
                            paddingRight: "vertical" === a ? 0 : 16,
                            opacity: 0.6,
                            lineHeight: 1.4,
                            textAlign: "center",
                          },
                          onClick: () => window.open(t.link, "_blank"),
                          children: [
                            i.jsx("img", {
                              style: { width: l, height: l, display: "block" },
                              src: `https://github.com/shahriar-ahmed-seam/Stashly/raw/main/${t.projectId}.png`,
                              alt: "",
                            }),
                            i.jsxs("div", {
                              children: [
                                i.jsx("div", {
                                  style: { fontSize: "normal" === r ? 16 : 14 },
                                  children: t.name,
                                }),
                                i.jsxs("div", {
                                  style: {
                                    fontSize: 12,
                                    display: "flex",
                                    opacity: 0.6,
                                    justifyContent:
                                      "vertical" === a
                                        ? "center"
                                        : "flex-start",
                                  },
                                  children: [
                                    i.jsxs("div", {
                                      children: ["Users: ", t.users],
                                    }),
                                    i.jsxs("div", {
                                      style: { marginLeft: 12 },
                                      children: ["Rate: ", t.rating],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t.projectId,
                    ),
                  ),
                }),
              ],
            })
          );
        }
        async function y() {
          if (f.length > 0) return f;
          const e = await fetch(h).then((e) => e.json());
          return ((f = c(e)), f);
        }
        function x() {
          return window[m]
            ? Promise.resolve(window[m])
            : new Promise((e) => {
                fetch(g)
                  .then((e) => e.json())
                  .then((t) => {
                    ((window[m] = t.exts), e(t.exts));
                  });
              });
        }
        function v(e, t) {
          const i = document.getElementById(e);
          if (i) i.innerText = t;
          else {
            const e = document.createElement("style");
            ((e.innerHTML = t), document.head.appendChild(e));
          }
        }
        let _ =
            /[\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u037F-\u0383\u038B\u038D\u03A2\u0528-\u0530\u0557\u0558\u0560\u0588\u058B-\u058E\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08A1\u08AD-\u08E3\u08FF\u0978\u0980\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0C00\u0C04\u0C0D\u0C11\u0C29\u0C34\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5A-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C80\u0C81\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D01\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D4F-\u0D56\u0D58-\u0D5F\u0D64\u0D65\u0D76-\u0D78\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F5-\u13FF\u169D-\u169F\u16F1-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191D-\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C80-\u1CBF\u1CC8-\u1CCF\u1CF7-\u1CFF\u1DE7-\u1DFB\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BB-\u20CF\u20F1-\u20FF\u218A-\u218F\u23F4-\u23FF\u2427-\u243F\u244B-\u245F\u2700\u2B4D-\u2B4F\u2B5A-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E3C-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FCD-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA698-\uA69E\uA6F8-\uA6FF\uA78F\uA794-\uA79F\uA7AB-\uA7F7\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C5-\uA8CD\uA8DA-\uA8DF\uA8FC-\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9E0-\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAA7C-\uAA7F\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F-\uABBF\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE27-\uFE2F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]/g,
          b = /[\?<>\\:\*\|":]/g,
          T = /[\x00-\x1f\x80-\x9f]/g,
          C = /^\.+$/,
          D = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,
          F =
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
        function A(e) {
          return e
            .trim()
            .replace(F, "")
            .replace(b, "")
            .replace(_, "")
            .replace(/[\\/]/g, "")
            .replace(T, "")
            .replace(C, "")
            .replace(D, "")
            .replaceAll(". ᴥ", "")
            .replace(/\s+/g, " ")
            .trim()
            .split("")
            .splice(0, 255)
            .join("")
            .replaceAll("~", "")
            .replaceAll("  ", " ")
            .replaceAll("..", "")
            .trim();
        }
        function E(e) {
          return A(e).replace(/^\.+/, "").replace(/\.+$/, "");
        }
        function S(e) {
          return !!(
            e.toString().includes("1390008") ||
            e.toString().includes("1348007") ||
            e.toString().includes("3252001") ||
            e.toString().includes("1404006") ||
            e.toString().includes("1675004") ||
            e.toString().includes("1404078") ||
            e.toString().includes("Request is too frequent") ||
            e.toString().includes("Rate limit") ||
            e.toString().includes("Temporarily") ||
            e.toString().includes("again later") ||
            e.toString().includes("rate_limit_exceeded")
          );
        }
        !(function () {
          try {
            if (typeof document < "u") {
              var e = document.createElement("style");
              (e.appendChild(
                document.createTextNode(
                  '@charset "UTF-8";:root{--tagify-dd-color-primary: rgb(53,149,246);--tagify-dd-bg-color: white;--tagify-dd-item-pad: .3em .5em}.tagify{--tags-disabled-bg: #F1F1F1;--tags-border-color: #DDD;--tags-hover-border-color: #CCC;--tags-focus-border-color: #3595f6;--tag-border-radius: 3px;--tag-bg: #E5E5E5;--tag-hover: #D3E2E2;--tag-text-color: black;--tag-text-color--edit: black;--tag-pad: .3em .5em;--tag-inset-shadow-size: 1.1em;--tag-invalid-color: #D39494;--tag-invalid-bg: rgba(211, 148, 148, .5);--tag-remove-bg: rgba(211, 148, 148, .3);--tag-remove-btn-color: black;--tag-remove-btn-bg: none;--tag-remove-btn-bg--hover: #c77777;--input-color: inherit;--tag--min-width: 1ch;--tag--max-width: auto;--tag-hide-transition: .3s;--placeholder-color: rgba(0, 0, 0, .4);--placeholder-color-focus: rgba(0, 0, 0, .25);--loader-size: .8em;--readonly-striped: 1;display:inline-flex;align-items:flex-start;flex-wrap:wrap;border:1px solid var(--tags-border-color);padding:0;line-height:0;cursor:text;outline:none;position:relative;box-sizing:border-box;transition:.1s}@keyframes tags--bump{30%{transform:scale(1.2)}}@keyframes rotateLoader{to{transform:rotate(1turn)}}.tagify:hover:not(.tagify--focus):not(.tagify--invalid){--tags-border-color: var(--tags-hover-border-color)}.tagify[disabled]{background:var(--tags-disabled-bg);filter:saturate(0);opacity:.5;pointer-events:none}.tagify[readonly].tagify--select,.tagify[disabled].tagify--select{pointer-events:none}.tagify[readonly]:not(.tagify--mix):not(.tagify--select),.tagify[disabled]:not(.tagify--mix):not(.tagify--select){cursor:default}.tagify[readonly]:not(.tagify--mix):not(.tagify--select)>.tagify__input,.tagify[disabled]:not(.tagify--mix):not(.tagify--select)>.tagify__input{visibility:hidden;width:0;margin:5px 0}.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div,.tagify[disabled]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div{padding:var(--tag-pad)}.tagify[readonly]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div:before,.tagify[disabled]:not(.tagify--mix):not(.tagify--select) .tagify__tag>div:before{animation:readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused}.tagify[readonly] .tagify__tag__removeBtn,.tagify[disabled] .tagify__tag__removeBtn{display:none}.tagify--loading .tagify__input>br:last-child{display:none}.tagify--loading .tagify__input:before{content:none}.tagify--loading .tagify__input:after{content:"";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);min-width:0;border:3px solid;border-color:#EEE #BBB #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;content:""!important;margin:-2px 0 -2px .5em}.tagify--loading .tagify__input:empty:after{margin-left:0}.tagify+input,.tagify+textarea{position:absolute!important;left:-9999em!important;transform:scale(0)!important}.tagify__tag{display:inline-flex;align-items:center;margin:5px 0 5px 5px;position:relative;z-index:1;outline:none;line-height:normal;cursor:default;transition:.13s ease-out}.tagify__tag>div{vertical-align:top;box-sizing:border-box;max-width:100%;padding:var(--tag-pad);color:var(--tag-text-color);line-height:inherit;border-radius:var(--tag-border-radius);white-space:nowrap;transition:.13s ease-out}.tagify__tag>div>*{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:top;min-width:var(--tag--min-width);max-width:var(--tag--max-width);transition:.8s ease,.1s color}.tagify__tag>div>*[contenteditable]{outline:none;user-select:text;cursor:text;margin:-2px;padding:2px;max-width:350px}.tagify__tag>div:before{content:"";position:absolute;border-radius:inherit;inset:var(--tag-bg-inset, 0);z-index:-1;pointer-events:none;transition:.12s ease;animation:tags--bump .3s ease-out 1;box-shadow:0 0 0 var(--tag-inset-shadow-size) var(--tag-bg) inset}.tagify__tag:hover:not([readonly]) div:before,.tagify__tag:focus div:before{--tag-bg-inset: -2.5px;--tag-bg: var(--tag-hover)}.tagify__tag--loading{pointer-events:none}.tagify__tag--loading .tagify__tag__removeBtn{display:none}.tagify__tag--loading:after{--loader-size: .4em;content:"";vertical-align:middle;opacity:1;width:.7em;height:.7em;width:var(--loader-size);height:var(--loader-size);min-width:0;border:3px solid;border-color:#EEE #BBB #888 transparent;border-radius:50%;animation:rotateLoader .4s infinite linear;margin:0 .5em 0 -.1em}.tagify__tag--flash div:before{animation:none}.tagify__tag--hide{width:0!important;padding-left:0;padding-right:0;margin-left:0;margin-right:0;opacity:0;transform:scale(0);transition:var(--tag-hide-transition);pointer-events:none}.tagify__tag--hide>div>*{white-space:nowrap}.tagify__tag.tagify--noAnim>div:before{animation:none}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div>span{opacity:.5}.tagify__tag.tagify--notAllowed:not(.tagify__tag--editable) div:before{--tag-bg: var(--tag-invalid-bg);transition:.2s}.tagify__tag[readonly] .tagify__tag__removeBtn{display:none}.tagify__tag[readonly]>div:before{animation:readonlyStyles 1s calc(-1s * (var(--readonly-striped) - 1)) paused}@keyframes readonlyStyles{0%{background:linear-gradient(45deg,var(--tag-bg) 25%,transparent 25%,transparent 50%,var(--tag-bg) 50%,var(--tag-bg) 75%,transparent 75%,transparent) 0/5px 5px;box-shadow:none;filter:brightness(.95)}}.tagify__tag--editable>div{color:var(--tag-text-color--edit)}.tagify__tag--editable>div:before{box-shadow:0 0 0 2px var(--tag-hover) inset!important}.tagify__tag--editable>.tagify__tag__removeBtn{pointer-events:none}.tagify__tag--editable>.tagify__tag__removeBtn:after{opacity:0;transform:translate(100%) translate(5px)}.tagify__tag--editable.tagify--invalid>div:before{box-shadow:0 0 0 2px var(--tag-invalid-color) inset!important}.tagify__tag__removeBtn{order:5;display:inline-flex;align-items:center;justify-content:center;border-radius:50px;cursor:pointer;font:14px/1 Arial;background:var(--tag-remove-btn-bg);color:var(--tag-remove-btn-color);width:14px;height:14px;margin-right:4.6666666667px;margin-left:auto;overflow:hidden;transition:.2s ease-out}.tagify__tag__removeBtn:after{content:"\\d7";transition:.3s,color 0s}.tagify__tag__removeBtn:hover{color:#fff;background:var(--tag-remove-btn-bg--hover)}.tagify__tag__removeBtn:hover+div>span{opacity:.5}.tagify__tag__removeBtn:hover+div:before{box-shadow:0 0 0 var(--tag-inset-shadow-size) var(--tag-remove-bg, rgba(211, 148, 148, .3)) inset!important;transition:box-shadow .2s}.tagify:not(.tagify--mix) .tagify__input br{display:none}.tagify:not(.tagify--mix) .tagify__input *{display:inline;white-space:nowrap}.tagify__input{flex-grow:1;display:inline-block;min-width:110px;margin:5px;padding:var(--tag-pad);line-height:normal;position:relative;white-space:pre-wrap;color:var(--input-color);box-sizing:inherit}.tagify__input:empty:before{position:static}.tagify__input:focus{outline:none}.tagify__input:focus:before{transition:.2s ease-out;opacity:0;transform:translate(6px)}@supports (-ms-ime-align: auto){.tagify__input:focus:before{display:none}}.tagify__input:focus:empty:before{transition:.2s ease-out;opacity:1;transform:none;color:#00000040;color:var(--placeholder-color-focus)}@-moz-document url-prefix(){.tagify__input:focus:empty:after{display:none}}.tagify__input:before{content:attr(data-placeholder);height:1em;line-height:1em;margin:auto 0;z-index:1;color:var(--placeholder-color);white-space:nowrap;pointer-events:none;opacity:0;position:absolute}.tagify__input:after{content:attr(data-suggest);display:inline-block;vertical-align:middle;position:absolute;min-width:calc(100% - 1.5em);text-overflow:ellipsis;overflow:hidden;white-space:pre;color:var(--tag-text-color);opacity:.3;pointer-events:none;max-width:100px}.tagify__input .tagify__tag{margin:0 1px}.tagify--mix{display:block}.tagify--mix .tagify__input{padding:5px;margin:0;width:100%;height:100%;line-height:1.5;display:block}.tagify--mix .tagify__input:before{height:auto;display:none;line-height:inherit}.tagify--mix .tagify__input:after{content:none}.tagify--select:after{content:">";opacity:.5;position:absolute;top:50%;right:0;bottom:0;font:16px monospace;line-height:8px;height:8px;pointer-events:none;transform:translate(-150%,-50%) scaleX(1.2) rotate(90deg);transition:.2s ease-in-out}.tagify--select[aria-expanded=true]:after{transform:translate(-150%,-50%) rotate(270deg) scaleY(1.2)}.tagify--select .tagify__tag{position:absolute;top:0;right:1.8em;bottom:0}.tagify--select .tagify__tag div{display:none}.tagify--select .tagify__input{width:100%}.tagify--empty .tagify__input:before{transition:.2s ease-out;opacity:1;transform:none;display:inline-block;width:auto}.tagify--mix .tagify--empty .tagify__input:before{display:inline-block}.tagify--focus{--tags-border-color: var(--tags-focus-border-color);transition:0s}.tagify--invalid{--tags-border-color: #D39494}.tagify__dropdown{position:absolute;z-index:9999;transform:translateY(1px);overflow:hidden}.tagify__dropdown[placement=top]{margin-top:0;transform:translateY(-100%)}.tagify__dropdown[placement=top] .tagify__dropdown__wrapper{border-top-width:1.1px;border-bottom-width:0}.tagify__dropdown[position=text]{box-shadow:0 0 0 3px rgba(var(--tagify-dd-color-primary),.1);font-size:.9em}.tagify__dropdown[position=text] .tagify__dropdown__wrapper{border-width:1px}.tagify__dropdown__wrapper{max-height:300px;overflow:auto;overflow-x:hidden;background:var(--tagify-dd-bg-color);border:1px solid;border-color:var(--tagify-dd-color-primary);border-bottom-width:1.5px;border-top-width:0;box-shadow:0 2px 4px -2px #0003;transition:.25s cubic-bezier(0,1,.5,1)}.tagify__dropdown__header:empty{display:none}.tagify__dropdown__footer{display:inline-block;margin-top:.5em;padding:var(--tagify-dd-item-pad);font-size:.7em;font-style:italic;opacity:.5}.tagify__dropdown__footer:empty{display:none}.tagify__dropdown--initial .tagify__dropdown__wrapper{max-height:20px;transform:translateY(-1em)}.tagify__dropdown--initial[placement=top] .tagify__dropdown__wrapper{transform:translateY(2em)}.tagify__dropdown__item{box-sizing:border-box;padding:var(--tagify-dd-item-pad);margin:1px;white-space:pre-wrap;cursor:pointer;border-radius:2px;position:relative;outline:none;max-height:60px;max-width:100%}.tagify__dropdown__item--active{background:var(--tagify-dd-color-primary);color:#fff}.tagify__dropdown__item:active{filter:brightness(105%)}.tagify__dropdown__item--hidden{padding-top:0;padding-bottom:0;margin:0 1px;pointer-events:none;overflow:hidden;max-height:0;transition:var(--tagify-dd-item--hidden-duration, .3s)!important}.tagify__dropdown__item--hidden>*{transform:translateY(-100%);opacity:0;transition:inherit}.tagify-wrapper{font-size:14px}.tagify-wrapper .eg-txt{display:inline-block;max-width:330px;white-space:pre-wrap;word-break:break-all;vertical-align:top}.tagify-wrapper .bottom-bar{display:flex;flex-direction:row;justify-content:space-between}.tagify-wrapper.dark .tagify{border-color:#424242}.tagify-wrapper.dark .tagify__input:before,.tagify-wrapper.dark .tagify__input,.tagify-wrapper.dark .tagify-example{color:#b0b3b8}.tagify{padding-left:4px;border-radius:6px;border-color:#d9d9d9;font-size:14px;min-width:384px;max-width:384px;overflow:hidden}.tagify.tagify--focus{border-color:#4096ff!important;box-shadow:0 0 0 2px #0591ff1a;outline:0}.tagify .tagify__tag-text,.tagify .tagify__input{white-space:nowrap!important}.tagify .tagify__tag-text br,.tagify .tagify__input br{display:none!important}.tagify .tagify__tag-text *,.tagify .tagify__input *{display:inline;white-space:nowrap}.tagify-dropdown .ant-dropdown-menu{overflow:auto;overflow-x:hidden;max-height:240px}.tagify-dropdown .tagify__tag,.tagify .tagify__tag{display:inline-flex;transition:none;margin:0 4px!important;transform:translateY(-1px)}.tagify-dropdown .tagify__tag x,.tagify .tagify__tag x{display:none}.tagify-dropdown .tagify__tag>div,.tagify .tagify__tag>div{background:#1677ff;color:#fff;font-size:12px;line-height:20px;border-radius:4px;padding:0 7px;font-family:-apple-system,sans-serif}.tagify-dropdown .tagify__tag>div:before,.tagify .tagify__tag>div:before{display:none}.tagify-example{width:100%;padding-top:4px;font-size:11px}.tagify-example .eg{padding-right:8px;opacity:.8}',
                ),
              ),
                document.head.appendChild(e));
            }
          } catch (t) {
            console.error("vite-plugin-css-injected-by-js", t);
          }
        })();
        var k = "​";
        const j = (e, t, i, n) => (
            (e = "" + e),
            (t = "" + t),
            n && ((e = e.trim()), (t = t.trim())),
            i ? e == t : e.toLowerCase() == t.toLowerCase()
          ),
          I = (e, t) => e && Array.isArray(e) && e.map((e) => O(e, t));
        function O(e, t) {
          var i,
            n = {};
          for (i in e) t.indexOf(i) < 0 && (n[i] = e[i]);
          return n;
        }
        function N(e) {
          var t = document.createElement("div");
          return e.replace(/\&#?[0-9a-z]+;/gi, function (e) {
            return ((t.innerHTML = e), t.innerText);
          });
        }
        function M(e) {
          return new DOMParser().parseFromString(e.trim(), "text/html").body
            .firstElementChild;
        }
        function B(e) {
          return e
            ? e
                .replace(/\>[\r\n ]+\</g, "><")
                .split(/>\s+</)
                .join("><")
                .trim()
            : "";
        }
        function R(e) {
          for (
            var t,
              i = document.createNodeIterator(
                e,
                NodeFilter.SHOW_TEXT,
                null,
                !1,
              );
            (t = i.nextNode());
          )
            t.textContent.trim() || t.parentNode.removeChild(t);
        }
        function L(e, t) {
          for (t = t || "previous"; (e = e[t + "Sibling"]); )
            if (3 == e.nodeType) return e;
        }
        function P(e) {
          return "string" == typeof e
            ? e
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/`|'/g, "&#039;")
            : e;
        }
        function q(e) {
          var t = Object.prototype.toString.call(e).split(" ")[1].slice(0, -1);
          return (
            e === Object(e) &&
            "Array" != t &&
            "Function" != t &&
            "RegExp" != t &&
            "HTMLUnknownElement" != t
          );
        }
        function U(e, t, i) {
          function n(e, t) {
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                if (q(t[i])) {
                  q(e[i]) ? n(e[i], t[i]) : (e[i] = Object.assign({}, t[i]));
                  continue;
                }
                if (Array.isArray(t[i])) {
                  e[i] = Object.assign([], t[i]);
                  continue;
                }
                e[i] = t[i];
              }
          }
          return (e instanceof Object || (e = {}), n(e, t), i && n(e, i), e);
        }
        function V() {
          const e = [],
            t = {};
          for (let i of arguments)
            for (let n of i)
              q(n)
                ? t[n.value] || (e.push(n), (t[n.value] = 1))
                : e.includes(n) || e.push(n);
          return e;
        }
        function z(e) {
          return String.prototype.normalize
            ? "string" == typeof e
              ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              : void 0
            : e;
        }
        function $(e) {
          var t,
            i = e.cloneNode(!0);
          return (
            (i.style.cssText = "position:fixed; top:-9999px; opacity:0"),
            document.body.appendChild(i),
            (t = i.clientHeight),
            i.parentNode.removeChild(i),
            t
          );
        }
        var H = () => /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
        function W() {
          return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) =>
            (
              e ^
              (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))
            ).toString(16),
          );
        }
        function G(e) {
          return (
            e &&
            e.classList &&
            e.classList.contains(this.settings.classNames.tag)
          );
        }
        function Y() {
          const e = document.getSelection();
          if (e.rangeCount) {
            const t = e.getRangeAt(0),
              i = t.startContainer,
              n = t.startOffset;
            let s, o;
            if (n > 0)
              return (
                (o = document.createRange()),
                o.setStart(i, n - 1),
                o.setEnd(i, n),
                (s = o.getBoundingClientRect()),
                { left: s.right, top: s.top, bottom: s.bottom }
              );
            if (i.getBoundingClientRect) return i.getBoundingClientRect();
          }
          return { left: -9999, top: -9999 };
        }
        function K(e, t) {
          var i = window.getSelection();
          return (
            (t = t || i.getRangeAt(0)),
            "string" == typeof e && (e = document.createTextNode(e)),
            t && (t.deleteContents(), t.insertNode(e)),
            e
          );
        }
        function Q(e, t, i) {
          return e
            ? (t &&
                (e.__tagifyTagData = i ? t : U({}, e.__tagifyTagData || {}, t)),
              e.__tagifyTagData)
            : (console.warn("tag element doesn't exist", e, t), t);
        }
        function X(e) {
          if (e && e.parentNode) {
            var t = e,
              i = window.getSelection(),
              n = i.getRangeAt(0);
            i.rangeCount &&
              (n.setStartAfter(t),
              n.collapse(!0),
              i.removeAllRanges(),
              i.addRange(n));
          }
        }
        function J(e, t) {
          e.forEach((e) => {
            if (Q(e.previousSibling) || !e.previousSibling) {
              var i = document.createTextNode(k);
              (e.before(i), t && X(i));
            }
          });
        }
        const Z = {
          delimiters: ",",
          pattern: null,
          tagTextProp: "value",
          maxTags: 1 / 0,
          callbacks: {},
          addTagOnBlur: !0,
          onChangeAfterBlur: !0,
          duplicates: !1,
          whitelist: [],
          blacklist: [],
          enforceWhitelist: !1,
          userInput: !0,
          keepInvalidTags: !1,
          createInvalidTags: !0,
          mixTagsAllowedAfter: /,|\.|\:|\s/,
          mixTagsInterpolator: ["[[", "]]"],
          backspace: !0,
          skipInvalid: !1,
          pasteAsTags: !0,
          editTags: { clicks: 2, keepInvalid: !0 },
          transformTag: () => {},
          trim: !0,
          a11y: { focusableTags: !1 },
          mixMode: { insertAfterTag: " " },
          autoComplete: { enabled: !0, rightKey: !1 },
          classNames: {
            namespace: "tagify",
            mixMode: "tagify--mix",
            selectMode: "tagify--select",
            input: "tagify__input",
            focus: "tagify--focus",
            tagNoAnimation: "tagify--noAnim",
            tagInvalid: "tagify--invalid",
            tagNotAllowed: "tagify--notAllowed",
            scopeLoading: "tagify--loading",
            hasMaxTags: "tagify--hasMaxTags",
            hasNoTags: "tagify--noTags",
            empty: "tagify--empty",
            inputInvalid: "tagify__input--invalid",
            dropdown: "tagify__dropdown",
            dropdownWrapper: "tagify__dropdown__wrapper",
            dropdownHeader: "tagify__dropdown__header",
            dropdownFooter: "tagify__dropdown__footer",
            dropdownItem: "tagify__dropdown__item",
            dropdownItemActive: "tagify__dropdown__item--active",
            dropdownItemHidden: "tagify__dropdown__item--hidden",
            dropdownInital: "tagify__dropdown--initial",
            tag: "tagify__tag",
            tagText: "tagify__tag-text",
            tagX: "tagify__tag__removeBtn",
            tagLoading: "tagify__tag--loading",
            tagEditing: "tagify__tag--editable",
            tagFlash: "tagify__tag--flash",
            tagHide: "tagify__tag--hide",
          },
          dropdown: {
            classname: "",
            enabled: 2,
            maxItems: 10,
            searchKeys: ["value", "searchBy"],
            fuzzySearch: !0,
            caseSensitive: !1,
            accentedSearch: !0,
            includeSelectedTags: !1,
            highlightFirst: !1,
            closeOnSelect: !0,
            clearOnSelect: !0,
            position: "all",
            appendTarget: null,
          },
          hooks: {
            beforeRemoveTag: () => Promise.resolve(),
            beforePaste: () => Promise.resolve(),
            suggestionClick: () => Promise.resolve(),
          },
        };
        function ee() {
          this.dropdown = {};
          for (let e in this._dropdown)
            this.dropdown[e] =
              "function" == typeof this._dropdown[e]
                ? this._dropdown[e].bind(this)
                : this._dropdown[e];
          this.dropdown.refs();
        }
        const te = {
            refs() {
              ((this.DOM.dropdown = this.parseTemplate("dropdown", [
                this.settings,
              ])),
                (this.DOM.dropdown.content = this.DOM.dropdown.querySelector(
                  "[data-selector='tagify-suggestions-wrapper']",
                )));
            },
            getHeaderRef() {
              return this.DOM.dropdown.querySelector(
                "[data-selector='tagify-suggestions-header']",
              );
            },
            getFooterRef() {
              return this.DOM.dropdown.querySelector(
                "[data-selector='tagify-suggestions-footer']",
              );
            },
            getAllSuggestionsRefs() {
              return [
                ...this.DOM.dropdown.content.querySelectorAll(
                  this.settings.classNames.dropdownItemSelector,
                ),
              ];
            },
            show(e) {
              var t,
                i,
                n,
                s = this.settings,
                o = "mix" == s.mode && !s.enforceWhitelist,
                a = !s.whitelist || !s.whitelist.length,
                r = "manual" == s.dropdown.position;
              if (
                ((e = void 0 === e ? this.state.inputText : e),
                !(
                  (a && !o && !s.templates.dropdownItemNoMatch) ||
                  !1 === s.dropdown.enable ||
                  this.state.isLoading ||
                  this.settings.readonly
                ))
              ) {
                if (
                  (clearTimeout(this.dropdownHide__bindEventsTimeout),
                  (this.suggestedListItems = this.dropdown.filterListItems(e)),
                  e &&
                    !this.suggestedListItems.length &&
                    (this.trigger("dropdown:noMatch", e),
                    s.templates.dropdownItemNoMatch &&
                      (n = s.templates.dropdownItemNoMatch.call(this, {
                        value: e,
                      }))),
                  !n)
                ) {
                  if (this.suggestedListItems.length)
                    e &&
                      o &&
                      !this.state.editing.scope &&
                      !j(this.suggestedListItems[0].value, e) &&
                      this.suggestedListItems.unshift({ value: e });
                  else {
                    if (!e || !o || this.state.editing.scope)
                      return (
                        this.input.autocomplete.suggest.call(this),
                        void this.dropdown.hide()
                      );
                    this.suggestedListItems = [{ value: e }];
                  }
                  ((i =
                    "" + (q((t = this.suggestedListItems[0])) ? t.value : t)),
                    s.autoComplete &&
                      i &&
                      0 == i.indexOf(e) &&
                      this.input.autocomplete.suggest.call(this, t));
                }
                (this.dropdown.fill(n),
                  s.dropdown.highlightFirst &&
                    this.dropdown.highlightOption(
                      this.DOM.dropdown.content.querySelector(
                        s.classNames.dropdownItemSelector,
                      ),
                    ),
                  this.state.dropdown.visible ||
                    setTimeout(this.dropdown.events.binding.bind(this)),
                  (this.state.dropdown.visible = e || !0),
                  (this.state.dropdown.query = e),
                  this.setStateSelection(),
                  r ||
                    setTimeout(() => {
                      (this.dropdown.position(), this.dropdown.render());
                    }),
                  setTimeout(() => {
                    this.trigger("dropdown:show", this.DOM.dropdown);
                  }));
              }
            },
            hide(e) {
              var { scope: t, dropdown: i } = this.DOM,
                n = "manual" == this.settings.dropdown.position && !e;
              if (i && document.body.contains(i) && !n)
                return (
                  window.removeEventListener("resize", this.dropdown.position),
                  this.dropdown.events.binding.call(this, !1),
                  t.setAttribute("aria-expanded", !1),
                  i.parentNode.removeChild(i),
                  setTimeout(() => {
                    this.state.dropdown.visible = !1;
                  }, 100),
                  (this.state.dropdown.query =
                    this.state.ddItemData =
                    this.state.ddItemElm =
                    this.state.selection =
                      null),
                  this.state.tag &&
                    this.state.tag.value.length &&
                    (this.state.flaggedTags[this.state.tag.baseOffset] =
                      this.state.tag),
                  this.trigger("dropdown:hide", i),
                  this
                );
            },
            toggle(e) {
              this.dropdown[
                this.state.dropdown.visible && !e ? "hide" : "show"
              ]();
            },
            render() {
              var e = $(this.DOM.dropdown),
                t = this.settings;
              return "number" == typeof t.dropdown.enabled &&
                t.dropdown.enabled >= 0
                ? (this.DOM.scope.setAttribute("aria-expanded", !0),
                  document.body.contains(this.DOM.dropdown) ||
                    (this.DOM.dropdown.classList.add(
                      t.classNames.dropdownInital,
                    ),
                    this.dropdown.position(e),
                    t.dropdown.appendTarget.appendChild(this.DOM.dropdown),
                    setTimeout(() =>
                      this.DOM.dropdown.classList.remove(
                        t.classNames.dropdownInital,
                      ),
                    )),
                  this)
                : this;
            },
            fill(e) {
              e =
                "string" == typeof e
                  ? e
                  : this.dropdown.createListHTML(e || this.suggestedListItems);
              var t = this.settings.templates.dropdownContent.call(this, e);
              this.DOM.dropdown.content.innerHTML = B(t);
            },
            fillHeaderFooter() {
              var e = this.dropdown.filterListItems(this.state.dropdown.query),
                t = this.parseTemplate("dropdownHeader", [e]),
                i = this.parseTemplate("dropdownFooter", [e]),
                n = this.dropdown.getHeaderRef(),
                s = this.dropdown.getFooterRef();
              (t && (null == n || n.parentNode.replaceChild(t, n)),
                i && (null == s || s.parentNode.replaceChild(i, s)));
            },
            refilter(e) {
              ((e = e || this.state.dropdown.query || ""),
                (this.suggestedListItems = this.dropdown.filterListItems(e)),
                this.dropdown.fill(),
                this.suggestedListItems.length || this.dropdown.hide(),
                this.trigger("dropdown:updated", this.DOM.dropdown));
            },
            position(e) {
              var t = this.settings.dropdown;
              if ("manual" != t.position) {
                var i,
                  n,
                  s,
                  o,
                  a,
                  r,
                  l = this.DOM.dropdown,
                  d = t.placeAbove,
                  u = t.appendTarget === document.body,
                  c = u ? window.pageYOffset : t.appendTarget.scrollTop,
                  h =
                    document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.documentElement,
                  g = h.clientHeight,
                  p =
                    Math.max(h.clientWidth || 0, window.innerWidth || 0) > 480
                      ? t.position
                      : "all",
                  f = this.DOM["input" == p ? "input" : "scope"];
                if (((e = e || l.clientHeight), this.state.dropdown.visible)) {
                  if (
                    ("text" == p
                      ? ((s = (i = Y()).bottom),
                        (n = i.top),
                        (o = i.left),
                        (a = "auto"))
                      : ((r = m(t.appendTarget)),
                        (n = (i = f.getBoundingClientRect()).top - r.top),
                        (s = i.bottom - 1 - r.top),
                        (o = i.left - r.left),
                        (a = i.width + "px")),
                    !u)
                  ) {
                    let e = w();
                    ((n += e), (s += e));
                  }
                  ((n = Math.floor(n)),
                    (s = Math.ceil(s)),
                    (d = void 0 === d ? g - i.bottom < e : d),
                    (l.style.cssText =
                      "left:" +
                      (o + window.pageXOffset) +
                      "px; width:" +
                      a +
                      ";" +
                      (d
                        ? "top: " + (n + c) + "px"
                        : "top: " + (s + c) + "px")),
                    l.setAttribute("placement", d ? "top" : "bottom"),
                    l.setAttribute("position", p));
                }
              }
              function m(e) {
                for (var t = 0, i = 0; e && e != h; )
                  ((t += e.offsetLeft || 0),
                    (i += e.offsetTop || 0),
                    (e = e.parentNode));
                return { left: t, top: i };
              }
              function w() {
                for (var e = 0, i = t.appendTarget.parentNode; i; )
                  ((e += i.scrollTop || 0), (i = i.parentNode));
                return e;
              }
            },
            events: {
              binding(e = !0) {
                var t = this.dropdown.events.callbacks,
                  i = (this.listeners.dropdown = this.listeners.dropdown || {
                    position: this.dropdown.position.bind(this, null),
                    onKeyDown: t.onKeyDown.bind(this),
                    onMouseOver: t.onMouseOver.bind(this),
                    onMouseLeave: t.onMouseLeave.bind(this),
                    onClick: t.onClick.bind(this),
                    onScroll: t.onScroll.bind(this),
                  }),
                  n = e ? "addEventListener" : "removeEventListener";
                ("manual" != this.settings.dropdown.position &&
                  (document[n]("scroll", i.position, !0),
                  window[n]("resize", i.position),
                  window[n]("keydown", i.onKeyDown)),
                  this.DOM.dropdown[n]("mouseover", i.onMouseOver),
                  this.DOM.dropdown[n]("mouseleave", i.onMouseLeave),
                  this.DOM.dropdown[n]("mousedown", i.onClick),
                  this.DOM.dropdown.content[n]("scroll", i.onScroll));
              },
              callbacks: {
                onKeyDown(e) {
                  if (this.state.hasFocus && !this.state.composing) {
                    var t = this.DOM.dropdown.querySelector(
                        this.settings.classNames.dropdownItemActiveSelector,
                      ),
                      i = this.dropdown.getSuggestionDataByNode(t);
                    switch (e.key) {
                      case "ArrowDown":
                      case "ArrowUp":
                      case "Down":
                      case "Up":
                        e.preventDefault();
                        var n = this.dropdown.getAllSuggestionsRefs(),
                          s = "ArrowUp" == e.key || "Up" == e.key;
                        (t && (t = this.dropdown.getNextOrPrevOption(t, !s)),
                          (!t ||
                            !t.matches(
                              this.settings.classNames.dropdownItemSelector,
                            )) &&
                            (t = n[s ? n.length - 1 : 0]),
                          this.dropdown.highlightOption(t, !0));
                        break;
                      case "Escape":
                      case "Esc":
                        this.dropdown.hide();
                        break;
                      case "ArrowRight":
                        if (this.state.actions.ArrowLeft) return;
                      case "Tab":
                        if (
                          "mix" != this.settings.mode &&
                          t &&
                          !this.settings.autoComplete.rightKey &&
                          !this.state.editing
                        ) {
                          e.preventDefault();
                          var o = this.dropdown.getMappedValue(i);
                          return (
                            this.input.autocomplete.set.call(this, o),
                            !1
                          );
                        }
                        return !0;
                      case "Enter":
                        (e.preventDefault(),
                          this.settings.hooks
                            .suggestionClick(e, {
                              tagify: this,
                              tagData: i,
                              suggestionElm: t,
                            })
                            .then(() => {
                              if (t)
                                return (
                                  this.dropdown.selectOption(t),
                                  (t = this.dropdown.getNextOrPrevOption(
                                    t,
                                    !s,
                                  )),
                                  void this.dropdown.highlightOption(t)
                                );
                              (this.dropdown.hide(),
                                "mix" != this.settings.mode &&
                                  this.addTags(
                                    this.state.inputText.trim(),
                                    !0,
                                  ));
                            })
                            .catch((e) => e));
                        break;
                      case "Backspace": {
                        if (
                          "mix" == this.settings.mode ||
                          this.state.editing.scope
                        )
                          return;
                        const e = this.input.raw.call(this);
                        ("" == e || 8203 == e.charCodeAt(0)) &&
                          (!0 === this.settings.backspace
                            ? this.removeTags()
                            : "edit" == this.settings.backspace &&
                              setTimeout(this.editTag.bind(this), 0));
                      }
                    }
                  }
                },
                onMouseOver(e) {
                  var t = e.target.closest(
                    this.settings.classNames.dropdownItemSelector,
                  );
                  t && this.dropdown.highlightOption(t);
                },
                onMouseLeave(e) {
                  this.dropdown.highlightOption();
                },
                onClick(e) {
                  if (
                    0 == e.button &&
                    e.target != this.DOM.dropdown &&
                    e.target != this.DOM.dropdown.content
                  ) {
                    var t = e.target.closest(
                        this.settings.classNames.dropdownItemSelector,
                      ),
                      i = this.dropdown.getSuggestionDataByNode(t);
                    ((this.state.actions.selectOption = !0),
                      setTimeout(
                        () => (this.state.actions.selectOption = !1),
                        50,
                      ),
                      this.settings.hooks
                        .suggestionClick(e, {
                          tagify: this,
                          tagData: i,
                          suggestionElm: t,
                        })
                        .then(() => {
                          t
                            ? this.dropdown.selectOption(t, e)
                            : this.dropdown.hide();
                        })
                        .catch((e) => console.warn(e)));
                  }
                },
                onScroll(e) {
                  var t = e.target,
                    i =
                      (t.scrollTop /
                        (t.scrollHeight - t.parentNode.clientHeight)) *
                      100;
                  this.trigger("dropdown:scroll", {
                    percentage: Math.round(i),
                  });
                },
              },
            },
            getSuggestionDataByNode(e) {
              var t = e && e.getAttribute("value");
              return this.suggestedListItems.find((e) => e.value == t) || null;
            },
            getNextOrPrevOption(e, t = !0) {
              var i = this.dropdown.getAllSuggestionsRefs(),
                n = i.findIndex((t) => t === e);
              return t ? i[n + 1] : i[n - 1];
            },
            highlightOption(e, t) {
              var i,
                n = this.settings.classNames.dropdownItemActive;
              if (
                (this.state.ddItemElm &&
                  (this.state.ddItemElm.classList.remove(n),
                  this.state.ddItemElm.removeAttribute("aria-selected")),
                !e)
              )
                return (
                  (this.state.ddItemData = null),
                  (this.state.ddItemElm = null),
                  void this.input.autocomplete.suggest.call(this)
                );
              ((i = this.dropdown.getSuggestionDataByNode(e)),
                (this.state.ddItemData = i),
                (this.state.ddItemElm = e),
                e.classList.add(n),
                e.setAttribute("aria-selected", !0),
                t &&
                  (e.parentNode.scrollTop =
                    e.clientHeight + e.offsetTop - e.parentNode.clientHeight),
                this.settings.autoComplete &&
                  (this.input.autocomplete.suggest.call(this, i),
                  this.dropdown.position()));
            },
            selectOption(e, t) {
              var { clearOnSelect: i, closeOnSelect: n } =
                this.settings.dropdown;
              if (!e)
                return (
                  this.addTags(this.state.inputText, !0),
                  void (n && this.dropdown.hide())
                );
              t = t || {};
              var s = e.getAttribute("value"),
                o = "noMatch" == s,
                a = this.suggestedListItems.find((e) => (e.value ?? e) == s);
              (this.trigger("dropdown:select", { data: a, elm: e, event: t }),
                s && (a || o)
                  ? (this.state.editing
                      ? this.onEditTagDone(
                          null,
                          U({ __isValid: !0 }, this.normalizeTags([a])[0]),
                        )
                      : this[
                          "mix" == this.settings.mode ? "addMixTags" : "addTags"
                        ]([a || this.input.raw.call(this)], i),
                    this.DOM.input.parentNode &&
                      (setTimeout(() => {
                        (this.DOM.input.focus(), this.toggleFocusClass(!0));
                      }),
                      n && setTimeout(this.dropdown.hide.bind(this)),
                      e.addEventListener(
                        "transitionend",
                        () => {
                          (this.dropdown.fillHeaderFooter(),
                            setTimeout(() => e.remove(), 100));
                        },
                        { once: !0 },
                      ),
                      e.classList.add(
                        this.settings.classNames.dropdownItemHidden,
                      )))
                  : n && setTimeout(this.dropdown.hide.bind(this)));
            },
            selectAll(e) {
              ((this.suggestedListItems.length = 0),
                this.dropdown.hide(),
                this.dropdown.filterListItems(""));
              var t = this.dropdown.filterListItems("");
              return (
                e || (t = this.state.dropdown.suggestions),
                this.addTags(t, !0),
                this
              );
            },
            filterListItems(e, t) {
              var i,
                n,
                s,
                o,
                a,
                r = this.settings,
                l = r.dropdown,
                d = ((t = t || {}), []),
                u = [],
                c = r.whitelist,
                h = l.maxItems >= 0 ? l.maxItems : 1 / 0,
                g = l.searchKeys,
                p = 0;
              if (
                !(e =
                  "select" == r.mode &&
                  this.value.length &&
                  this.value[0][r.tagTextProp] == e
                    ? ""
                    : e) ||
                !g.length
              )
                return (
                  (d = l.includeSelectedTags
                    ? c
                    : c.filter(
                        (e) => !this.isTagDuplicate(q(e) ? e.value : e),
                      )),
                  (this.state.dropdown.suggestions = d),
                  d.slice(0, h)
                );
              function f(e, t) {
                return t
                  .toLowerCase()
                  .split(" ")
                  .every((t) => e.includes(t.toLowerCase()));
              }
              for (
                a = l.caseSensitive ? "" + e : ("" + e).toLowerCase();
                p < c.length;
                p++
              ) {
                let e, r;
                i = c[p] instanceof Object ? c[p] : { value: c[p] };
                let h = Object.keys(i).some((e) => g.includes(e))
                  ? g
                  : ["value"];
                (l.fuzzySearch && !t.exact
                  ? ((s = h
                      .reduce((e, t) => e + " " + (i[t] || ""), "")
                      .toLowerCase()
                      .trim()),
                    l.accentedSearch && ((s = z(s)), (a = z(a))),
                    (e = 0 == s.indexOf(a)),
                    (r = s === a),
                    (n = f(s, a)))
                  : ((e = !0),
                    (n = h.some((e) => {
                      var n = "" + (i[e] || "");
                      return (
                        l.accentedSearch && ((n = z(n)), (a = z(a))),
                        l.caseSensitive || (n = n.toLowerCase()),
                        (r = n === a),
                        t.exact ? n === a : 0 == n.indexOf(a)
                      );
                    }))),
                  (o =
                    !l.includeSelectedTags &&
                    this.isTagDuplicate(q(i) ? i.value : i)),
                  n &&
                    !o &&
                    (r && e
                      ? u.push(i)
                      : "startsWith" == l.sortby && e
                        ? d.unshift(i)
                        : d.push(i)));
              }
              return (
                (this.state.dropdown.suggestions = u.concat(d)),
                "function" == typeof l.sortby
                  ? l.sortby(u.concat(d), a)
                  : u.concat(d).slice(0, h)
              );
            },
            getMappedValue(e) {
              var t = this.settings.dropdown.mapValueTo;
              return t
                ? "function" == typeof t
                  ? t(e)
                  : e[t] || e.value
                : e.value;
            },
            createListHTML(e) {
              return U([], e)
                .map((e, t) => {
                  ("string" == typeof e || "number" == typeof e) &&
                    (e = { value: e });
                  var i = this.dropdown.getMappedValue(e);
                  return (
                    (i = "string" == typeof i ? P(i) : i),
                    this.settings.templates.dropdownItem.apply(this, [
                      { ...e, mappedValue: i },
                      this,
                    ])
                  );
                })
                .join("");
            },
          },
          ie = 1,
          ne = "@yaireo/tagify/",
          se = (e) => (t) => {
            let i,
              n = "/" + t;
            if (localStorage.getItem(ne + e + "/v", ie) == ie)
              try {
                i = JSON.parse(localStorage[ne + e + n]);
              } catch {}
            return i;
          },
          oe = (e) =>
            e
              ? (localStorage.setItem(ne + e + "/v", ie),
                (t, i) => {
                  let n = "/" + i,
                    s = JSON.stringify(t);
                  t &&
                    i &&
                    (localStorage.setItem(ne + e + n, s),
                    dispatchEvent(new Event("storage")));
                })
              : () => {},
          ae = (e) => (t) => {
            const i = ne + "/" + e + "/";
            if (t) localStorage.removeItem(i + t);
            else
              for (let e in localStorage)
                e.includes(i) && localStorage.removeItem(e);
          },
          re = {
            empty: "empty",
            exceed: "number of tags exceeded",
            pattern: "pattern mismatch",
            duplicate: "already exists",
            notAllowed: "not allowed",
          },
          le = {
            wrapper: (e, t) =>
              `<tags class="${t.classNames.namespace} ${t.mode ? `${t.classNames[t.mode + "Mode"]}` : ""} ${e.className}"\n                    ${t.readonly ? "readonly" : ""}\n                    ${t.disabled ? "disabled" : ""}\n                    ${t.required ? "required" : ""}\n                    ${"select" === t.mode ? "spellcheck='false'" : ""}\n                    tabIndex="-1">\n            <span ${!t.readonly && t.userInput ? "contenteditable" : ""} tabIndex="0" data-placeholder="${t.placeholder || "&#8203;"}" aria-placeholder="${t.placeholder || ""}"\n                class="${t.classNames.input}"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${"mix" == t.mode}"></span>\n                &#8203;\n        </tags>`,
            tag(e, { settings: t }) {
              return `<tag title="${e.title || e.value}"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${t.a11y.focusableTags ? 0 : -1}"\n                    class="${t.classNames.tag} ${e.class || ""}"\n                    ${this.getAttributes(e)}>\n            <x title='' class="${t.classNames.tagX}" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${t.classNames.tagText}">${e[t.tagTextProp] || e.value}</span>\n            </div>\n        </tag>`;
            },
            dropdown(e) {
              var t = e.dropdown,
                i = "manual" == t.position,
                n = `${e.classNames.dropdown}`;
              return `<div class="${i ? "" : n} ${t.classname}" role="listbox" aria-labelledby="dropdown">\n                    <div data-selector='tagify-suggestions-wrapper' class="${e.classNames.dropdownWrapper}"></div>\n                </div>`;
            },
            dropdownContent(e) {
              var t = this.settings,
                i = this.state.dropdown.suggestions;
              return `\n            ${t.templates.dropdownHeader.call(this, i)}\n            ${e}\n            ${t.templates.dropdownFooter.call(this, i)}\n        `;
            },
            dropdownItem(e) {
              return `<div ${this.getAttributes(e)}\n                    class='${this.settings.classNames.dropdownItem} ${e.class ? e.class : ""}'\n                    tabindex="0"\n                    role="option">${e.mappedValue || e.value}</div>`;
            },
            dropdownHeader(e) {
              return `<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`;
            },
            dropdownFooter(e) {
              var t = e.length - this.settings.dropdown.maxItems;
              return t > 0
                ? `<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${t} more items. Refine your search.\n            </footer>`
                : "";
            },
            dropdownItemNoMatch: null,
          };
        function de(e) {
          var t = document.createTextNode("");
          function i(e, i, n) {
            n &&
              i
                .split(/\s+/g)
                .forEach((i) => t[e + "EventListener"].call(t, i, n));
          }
          return {
            off(e, t) {
              return (i("remove", e, t), this);
            },
            on(e, t) {
              return (t && "function" == typeof t && i("add", e, t), this);
            },
            trigger(i, n, s) {
              var o;
              if (((s = s || { cloneData: !0 }), i))
                if (e.settings.isJQueryPlugin)
                  ("remove" == i && (i = "removeTag"),
                    jQuery(e.DOM.originalInput).triggerHandler(i, [n]));
                else {
                  try {
                    var a = "object" == typeof n ? n : { value: n };
                    if (
                      (((a = s.cloneData ? U({}, a) : a).tagify = this),
                      n.event && (a.event = this.cloneEvent(n.event)),
                      n instanceof Object)
                    )
                      for (var r in n)
                        n[r] instanceof HTMLElement && (a[r] = n[r]);
                    o = new CustomEvent(i, { detail: a });
                  } catch (l) {
                    console.warn(l);
                  }
                  t.dispatchEvent(o);
                }
            },
          };
        }
        var ue;
        function ce() {
          if (!this.settings.mixMode.integrated) {
            var e = this.DOM.originalInput,
              t = this.state.lastOriginalValueReported !== e.value,
              i = new CustomEvent("change", { bubbles: !0 });
            t &&
              ((this.state.lastOriginalValueReported = e.value),
              (i.simulated = !0),
              e._valueTracker && e._valueTracker.setValue(Math.random()),
              e.dispatchEvent(i),
              this.trigger("change", this.state.lastOriginalValueReported),
              (e.value = this.state.lastOriginalValueReported));
          }
        }
        const he = {
          customBinding() {
            this.customEventsList.forEach((e) => {
              this.on(e, this.settings.callbacks[e]);
            });
          },
          binding(e = !0) {
            var t,
              i = this.events.callbacks,
              n = e ? "addEventListener" : "removeEventListener";
            if (!this.state.mainEvents || !e) {
              for (var s in ((this.state.mainEvents = e),
              e &&
                !this.listeners.main &&
                (this.events.bindGlobal.call(this),
                this.settings.isJQueryPlugin &&
                  jQuery(this.DOM.originalInput).on(
                    "tagify.removeAllTags",
                    this.removeAllTags.bind(this),
                  )),
              (t = this.listeners.main =
                this.listeners.main || {
                  focus: ["input", i.onFocusBlur.bind(this)],
                  keydown: ["input", i.onKeydown.bind(this)],
                  click: ["scope", i.onClickScope.bind(this)],
                  dblclick: ["scope", i.onDoubleClickScope.bind(this)],
                  paste: ["input", i.onPaste.bind(this)],
                  drop: ["input", i.onDrop.bind(this)],
                  compositionstart: ["input", i.onCompositionStart.bind(this)],
                  compositionend: ["input", i.onCompositionEnd.bind(this)],
                })))
                this.DOM[t[s][0]][n](s, t[s][1]);
              (clearInterval(
                this.listeners.main.originalInputValueObserverInterval,
              ),
                (this.listeners.main.originalInputValueObserverInterval =
                  setInterval(i.observeOriginalInputValue.bind(this), 500)));
              var o =
                this.listeners.main.inputMutationObserver ||
                new MutationObserver(i.onInputDOMChange.bind(this));
              (o.disconnect(),
                "mix" == this.settings.mode &&
                  o.observe(this.DOM.input, { childList: !0 }));
            }
          },
          bindGlobal(e) {
            var t,
              i = this.events.callbacks,
              n = e ? "removeEventListener" : "addEventListener";
            if (this.listeners && (e || !this.listeners.global))
              for (t of ((this.listeners.global = this.listeners.global || [
                {
                  type: this.isIE ? "keydown" : "input",
                  target: this.DOM.input,
                  cb: i[this.isIE ? "onInputIE" : "onInput"].bind(this),
                },
                {
                  type: "keydown",
                  target: window,
                  cb: i.onWindowKeyDown.bind(this),
                },
                {
                  type: "blur",
                  target: this.DOM.input,
                  cb: i.onFocusBlur.bind(this),
                },
                {
                  type: "click",
                  target: document,
                  cb: i.onClickAnywhere.bind(this),
                },
              ]),
              this.listeners.global))
                t.target[n](t.type, t.cb);
          },
          unbindGlobal() {
            this.events.bindGlobal.call(this, !0);
          },
          callbacks: {
            onFocusBlur(e) {
              var t,
                i,
                n = this.settings,
                s = e.target ? this.trim(e.target.textContent) : "",
                o =
                  null == (i = null == (t = this.value) ? void 0 : t[0])
                    ? void 0
                    : i[n.tagTextProp],
                a = e.type,
                r = n.dropdown.enabled >= 0,
                l = { relatedTarget: e.relatedTarget },
                d =
                  this.state.actions.selectOption &&
                  (r || !n.dropdown.closeOnSelect),
                u = this.state.actions.addNew && r,
                c =
                  e.relatedTarget &&
                  G.call(this, e.relatedTarget) &&
                  this.DOM.scope.contains(e.relatedTarget);
              if ("blur" == a) {
                if (e.relatedTarget === this.DOM.scope)
                  return (this.dropdown.hide(), void this.DOM.input.focus());
                (this.postUpdate(),
                  n.onChangeAfterBlur && this.triggerChangeEvent());
              }
              if (!d && !u) {
                if (
                  ((this.state.hasFocus = "focus" == a && +new Date()),
                  this.toggleFocusClass(this.state.hasFocus),
                  "mix" == n.mode)
                )
                  return void ("focus" == a
                    ? this.trigger("focus", l)
                    : "blur" == e.type &&
                      (this.trigger("blur", l),
                      this.loading(!1),
                      this.dropdown.hide(),
                      (this.state.dropdown.visible = void 0),
                      this.setStateSelection()));
                if ("focus" == a)
                  return (
                    this.trigger("focus", l),
                    void (
                      (0 === n.dropdown.enabled || !n.userInput) &&
                      this.dropdown.show(this.value.length ? "" : void 0)
                    )
                  );
                ("blur" == a &&
                  (this.trigger("blur", l),
                  this.loading(!1),
                  "select" == n.mode &&
                    (c && (this.removeTags(), (s = "")), o === s && (s = "")),
                  s &&
                    !this.state.actions.selectOption &&
                    n.addTagOnBlur &&
                    this.addTags(s, !0)),
                  this.DOM.input.removeAttribute("style"),
                  this.dropdown.hide());
              }
            },
            onCompositionStart(e) {
              this.state.composing = !0;
            },
            onCompositionEnd(e) {
              this.state.composing = !1;
            },
            onWindowKeyDown(e) {
              var t,
                i = document.activeElement,
                n =
                  G.call(this, i) &&
                  this.DOM.scope.contains(document.activeElement),
                s = n && i.hasAttribute("readonly");
              if (n && !s)
                switch (((t = i.nextElementSibling), e.key)) {
                  case "Backspace":
                    this.settings.readonly ||
                      (this.removeTags(i), (t || this.DOM.input).focus());
                    break;
                  case "Enter":
                    setTimeout(this.editTag.bind(this), 0, i);
                }
            },
            onKeydown(e) {
              var t = this.settings;
              if (!this.state.composing && t.userInput) {
                "select" == t.mode &&
                  t.enforceWhitelist &&
                  this.value.length &&
                  "Tab" != e.key &&
                  e.preventDefault();
                var i = this.trim(e.target.textContent);
                if ((this.trigger("keydown", { event: e }), "mix" == t.mode)) {
                  switch (e.key) {
                    case "Left":
                    case "ArrowLeft":
                      this.state.actions.ArrowLeft = !0;
                      break;
                    case "Delete":
                    case "Backspace":
                      if (this.state.editing) return;
                      var n = document.getSelection(),
                        s =
                          "Delete" == e.key &&
                          n.anchorOffset == (n.anchorNode.length || 0),
                        o = n.anchorNode.previousSibling,
                        a =
                          1 == n.anchorNode.nodeType ||
                          (!n.anchorOffset &&
                            o &&
                            1 == o.nodeType &&
                            n.anchorNode.previousSibling);
                      N(this.DOM.input.innerHTML);
                      var r,
                        l,
                        d,
                        u = this.getTagElms(),
                        c =
                          1 === n.anchorNode.length &&
                          n.anchorNode.nodeValue == String.fromCharCode(8203);
                      if ("edit" == t.backspace && a)
                        return (
                          (r =
                            1 == n.anchorNode.nodeType
                              ? null
                              : n.anchorNode.previousElementSibling),
                          setTimeout(this.editTag.bind(this), 0, r),
                          void e.preventDefault()
                        );
                      if (H() && a instanceof Element)
                        return (
                          (d = L(a)),
                          a.hasAttribute("readonly") || a.remove(),
                          this.DOM.input.focus(),
                          void setTimeout(() => {
                            (X(d), this.DOM.input.click());
                          })
                        );
                      if ("BR" == n.anchorNode.nodeName) return;
                      if (
                        ((s || a) && 1 == n.anchorNode.nodeType
                          ? (l =
                              0 == n.anchorOffset
                                ? s
                                  ? u[0]
                                  : null
                                : u[Math.min(u.length, n.anchorOffset) - 1])
                          : s
                            ? (l = n.anchorNode.nextElementSibling)
                            : a instanceof Element && (l = a),
                        3 == n.anchorNode.nodeType &&
                          !n.anchorNode.nodeValue &&
                          n.anchorNode.previousElementSibling &&
                          e.preventDefault(),
                        (a || s) && !t.backspace)
                      )
                        return void e.preventDefault();
                      if (
                        "Range" != n.type &&
                        !n.anchorOffset &&
                        n.anchorNode == this.DOM.input &&
                        "Delete" != e.key
                      )
                        return void e.preventDefault();
                      if ("Range" != n.type && l && l.hasAttribute("readonly"))
                        return void X(L(l));
                      ("Delete" == e.key &&
                        c &&
                        Q(n.anchorNode.nextSibling) &&
                        this.removeTags(n.anchorNode.nextSibling),
                        clearTimeout(ue),
                        (ue = setTimeout(() => {
                          var e = document.getSelection();
                          (N(this.DOM.input.innerHTML),
                            !s && e.anchorNode.previousSibling,
                            (this.value = [].map
                              .call(u, (e, t) => {
                                var i = Q(e);
                                if (e.parentNode || i.readonly) return i;
                                this.trigger("remove", {
                                  tag: e,
                                  index: t,
                                  data: i,
                                });
                              })
                              .filter((e) => e)));
                        }, 20)));
                  }
                  return !0;
                }
                switch (e.key) {
                  case "Backspace":
                    "select" == t.mode &&
                    t.enforceWhitelist &&
                    this.value.length
                      ? this.removeTags()
                      : (!this.state.dropdown.visible ||
                          "manual" == t.dropdown.position) &&
                        ("" == e.target.textContent ||
                          8203 == i.charCodeAt(0)) &&
                        (!0 === t.backspace
                          ? this.removeTags()
                          : "edit" == t.backspace &&
                            setTimeout(this.editTag.bind(this), 0));
                    break;
                  case "Esc":
                  case "Escape":
                    if (this.state.dropdown.visible) return;
                    e.target.blur();
                    break;
                  case "Down":
                  case "ArrowDown":
                    this.state.dropdown.visible || this.dropdown.show();
                    break;
                  case "ArrowRight": {
                    let e = this.state.inputSuggestion || this.state.ddItemData;
                    if (e && t.autoComplete.rightKey)
                      return void this.addTags([e], !0);
                    break;
                  }
                  case "Tab": {
                    let n = "select" == t.mode;
                    if (!i || n) return !0;
                    e.preventDefault();
                  }
                  case "Enter":
                    if (
                      this.state.dropdown.visible &&
                      "manual" != t.dropdown.position
                    )
                      return;
                    (e.preventDefault(),
                      setTimeout(() => {
                        this.state.dropdown.visible ||
                          this.state.actions.selectOption ||
                          this.addTags(i, !0);
                      }));
                }
              }
            },
            onInput(e) {
              this.postUpdate();
              var t = this.settings;
              if ("mix" == t.mode)
                return this.events.callbacks.onMixTagsInput.call(this, e);
              var i = this.input.normalize.call(this),
                n = i.length >= t.dropdown.enabled,
                s = { value: i, inputElm: this.DOM.input },
                o = this.validateTag({ value: i });
              ("select" == t.mode && this.toggleScopeValidation(o),
                (s.isValid = o),
                this.state.inputText != i &&
                  (this.input.set.call(this, i, !1),
                  -1 != i.search(t.delimiters)
                    ? this.addTags(i) && this.input.set.call(this)
                    : t.dropdown.enabled >= 0 &&
                      this.dropdown[n ? "show" : "hide"](i),
                  this.trigger("input", s)));
            },
            onMixTagsInput(e) {
              var t,
                i,
                n,
                s,
                o,
                a,
                r,
                l,
                d = this.settings,
                u = this.value.length,
                c = this.getTagElms(),
                h = document.createDocumentFragment(),
                g = window.getSelection().getRangeAt(0),
                p = [].map.call(c, (e) => Q(e).value);
              if (
                ("deleteContentBackward" == e.inputType &&
                  H() &&
                  this.events.callbacks.onKeydown.call(this, {
                    target: e.target,
                    key: "Backspace",
                  }),
                J(this.getTagElms()),
                this.value.slice().forEach((e) => {
                  e.readonly &&
                    !p.includes(e.value) &&
                    h.appendChild(this.createTagElem(e));
                }),
                h.childNodes.length &&
                  (g.insertNode(h), this.setRangeAtStartEnd(!1, h.lastChild)),
                c.length != u)
              )
                return (
                  (this.value = [].map.call(this.getTagElms(), (e) => Q(e))),
                  void this.update({ withoutChangeEvent: !0 })
                );
              if (this.hasMaxTags()) return !0;
              if (
                window.getSelection &&
                (a = window.getSelection()).rangeCount > 0 &&
                3 == a.anchorNode.nodeType
              ) {
                if (
                  ((g = a.getRangeAt(0).cloneRange()).collapse(!0),
                  g.setStart(a.focusNode, 0),
                  (n =
                    (t = g.toString().slice(0, g.endOffset)).split(d.pattern)
                      .length - 1),
                  (i = t.match(d.pattern)) &&
                    (s = t.slice(t.lastIndexOf(i[i.length - 1]))),
                  s)
                ) {
                  if (
                    ((this.state.actions.ArrowLeft = !1),
                    (this.state.tag = {
                      prefix: s.match(d.pattern)[0],
                      value: s.replace(d.pattern, ""),
                    }),
                    (this.state.tag.baseOffset =
                      a.baseOffset - this.state.tag.value.length),
                    (l = this.state.tag.value.match(d.delimiters)))
                  )
                    return (
                      (this.state.tag.value = this.state.tag.value.replace(
                        d.delimiters,
                        "",
                      )),
                      (this.state.tag.delimiters = l[0]),
                      this.addTags(
                        this.state.tag.value,
                        d.dropdown.clearOnSelect,
                      ),
                      void this.dropdown.hide()
                    );
                  o = this.state.tag.value.length >= d.dropdown.enabled;
                  try {
                    ((r =
                      (r = this.state.flaggedTags[this.state.tag.baseOffset])
                        .prefix == this.state.tag.prefix &&
                      r.value[0] == this.state.tag.value[0]),
                      this.state.flaggedTags[this.state.tag.baseOffset] &&
                        !this.state.tag.value &&
                        delete this.state.flaggedTags[
                          this.state.tag.baseOffset
                        ]);
                  } catch {}
                  (r || n < this.state.mixMode.matchedPatternCount) && (o = !1);
                } else this.state.flaggedTags = {};
                this.state.mixMode.matchedPatternCount = n;
              }
              setTimeout(() => {
                (this.update({ withoutChangeEvent: !0 }),
                  this.trigger(
                    "input",
                    U({}, this.state.tag, {
                      textContent: this.DOM.input.textContent,
                    }),
                  ),
                  this.state.tag &&
                    this.dropdown[o ? "show" : "hide"](this.state.tag.value));
              }, 10);
            },
            onInputIE(e) {
              var t = this;
              setTimeout(function () {
                t.events.callbacks.onInput.call(t, e);
              });
            },
            observeOriginalInputValue() {
              (this.DOM.originalInput.parentNode || this.destroy(),
                this.DOM.originalInput.value !=
                  this.DOM.originalInput.tagifyValue &&
                  this.loadOriginalValues());
            },
            onClickAnywhere(e) {
              e.target != this.DOM.scope &&
                !this.DOM.scope.contains(e.target) &&
                (this.toggleFocusClass(!1), (this.state.hasFocus = !1));
            },
            onClickScope(e) {
              var t = this.settings,
                i = e.target.closest("." + t.classNames.tag),
                n = +new Date() - this.state.hasFocus;
              if (e.target != this.DOM.scope) {
                if (!e.target.classList.contains(t.classNames.tagX))
                  return i
                    ? (this.trigger("click", {
                        tag: i,
                        index: this.getNodeIndex(i),
                        data: Q(i),
                        event: e,
                      }),
                      void (
                        (1 === t.editTags || 1 === t.editTags.clicks) &&
                        this.events.callbacks.onDoubleClickScope.call(this, e)
                      ))
                    : void (e.target == this.DOM.input &&
                      ("mix" == t.mode && this.fixFirefoxLastTagNoCaret(),
                      n > 500)
                        ? this.state.dropdown.visible
                          ? this.dropdown.hide()
                          : 0 === t.dropdown.enabled &&
                            "mix" != t.mode &&
                            this.dropdown.show(this.value.length ? "" : void 0)
                        : "select" == t.mode &&
                          0 === t.dropdown.enabled &&
                          !this.state.dropdown.visible &&
                          this.dropdown.show());
                this.removeTags(e.target.parentNode);
              } else this.DOM.input.focus();
            },
            onPaste(e) {
              e.preventDefault();
              var t,
                i,
                n = this.settings;
              if (("select" == n.mode && n.enforceWhitelist) || !n.userInput)
                return !1;
              n.readonly ||
                ((t = e.clipboardData || window.clipboardData),
                (i = t.getData("Text")),
                n.hooks
                  .beforePaste(e, {
                    tagify: this,
                    pastedText: i,
                    clipboardData: t,
                  })
                  .then((t) => {
                    (void 0 === t && (t = i),
                      t &&
                        (this.injectAtCaret(
                          t,
                          window.getSelection().getRangeAt(0),
                        ),
                        "mix" == this.settings.mode
                          ? this.events.callbacks.onMixTagsInput.call(this, e)
                          : this.settings.pasteAsTags
                            ? this.addTags(this.state.inputText + t, !0)
                            : (this.state.inputText = t)));
                  })
                  .catch((e) => e));
            },
            onDrop(e) {
              e.preventDefault();
            },
            onEditTagInput(e, t) {
              var i = e.closest("." + this.settings.classNames.tag),
                n = this.getNodeIndex(i),
                s = Q(i),
                o = this.input.normalize.call(this, e),
                a = { [this.settings.tagTextProp]: o, __tagId: s.__tagId },
                r = this.validateTag(a);
              (!this.editTagChangeDetected(U(s, a)) &&
                !0 === e.originalIsValid &&
                (r = !0),
                i.classList.toggle(
                  this.settings.classNames.tagInvalid,
                  !0 !== r,
                ),
                (s.__isValid = r),
                (i.title = !0 === r ? s.title || s.value : r),
                o.length >= this.settings.dropdown.enabled &&
                  (this.state.editing && (this.state.editing.value = o),
                  this.dropdown.show(o)),
                this.trigger("edit:input", {
                  tag: i,
                  index: n,
                  data: U({}, this.value[n], { newValue: o }),
                  event: t,
                }));
            },
            onEditTagPaste(e, t) {
              var i = (t.clipboardData || window.clipboardData).getData("Text");
              t.preventDefault();
              var n = K(i);
              this.setRangeAtStartEnd(!1, n);
            },
            onEditTagFocus(e) {
              this.state.editing = {
                scope: e,
                input: e.querySelector("[contenteditable]"),
              };
            },
            onEditTagBlur(e) {
              if (
                (this.state.hasFocus || this.toggleFocusClass(),
                this.DOM.scope.contains(e))
              ) {
                var t,
                  i,
                  n = this.settings,
                  s = e.closest("." + n.classNames.tag),
                  o = Q(s),
                  a = this.input.normalize.call(this, e),
                  r = { [n.tagTextProp]: a, __tagId: o.__tagId },
                  l = o.__originalData,
                  d = this.editTagChangeDetected(U(o, r)),
                  u = this.validateTag(r);
                if (!a) return void this.onEditTagDone(s);
                if (!d) return void this.onEditTagDone(s, l);
                if (
                  ((t = this.hasMaxTags()),
                  (i = U({}, l, {
                    [n.tagTextProp]: this.trim(a),
                    __isValid: u,
                  })),
                  n.transformTag.call(this, i, l),
                  !0 !==
                    (u = (!t || !0 === l.__isValid) && this.validateTag(i)))
                ) {
                  if (
                    (this.trigger("invalid", { data: i, tag: s, message: u }),
                    n.editTags.keepInvalid)
                  )
                    return;
                  n.keepInvalidTags ? (i.__isValid = u) : (i = l);
                } else
                  n.keepInvalidTags &&
                    (delete i.title, delete i["aria-invalid"], delete i.class);
                this.onEditTagDone(s, i);
              }
            },
            onEditTagkeydown(e, t) {
              if (!this.state.composing)
                switch ((this.trigger("edit:keydown", { event: e }), e.key)) {
                  case "Esc":
                  case "Escape":
                    (t.parentNode.replaceChild(
                      t.__tagifyTagData.__originalHTML,
                      t,
                    ),
                      (this.state.editing = !1));
                  case "Enter":
                  case "Tab":
                    (e.preventDefault(), e.target.blur());
                }
            },
            onDoubleClickScope(e) {
              var t,
                i,
                n = e.target.closest("." + this.settings.classNames.tag),
                s = Q(n),
                o = this.settings;
              !n ||
                !o.userInput ||
                !1 === s.editable ||
                ((t = n.classList.contains(
                  this.settings.classNames.tagEditing,
                )),
                (i = n.hasAttribute("readonly")),
                "select" != o.mode &&
                  !o.readonly &&
                  !t &&
                  !i &&
                  this.settings.editTags &&
                  this.editTag(n),
                this.toggleFocusClass(!0),
                this.trigger("dblclick", {
                  tag: n,
                  index: this.getNodeIndex(n),
                  data: Q(n),
                }));
            },
            onInputDOMChange(e) {
              e.forEach((e) => {
                (e.addedNodes.forEach((e) => {
                  var t;
                  if ("<div><br></div>" == e.outerHTML)
                    e.replaceWith(document.createElement("br"));
                  else if (
                    1 == e.nodeType &&
                    e.querySelector(this.settings.classNames.tagSelector)
                  ) {
                    let t = document.createTextNode("");
                    (3 == e.childNodes[0].nodeType &&
                      "BR" != e.previousSibling.nodeName &&
                      (t = document.createTextNode("\n")),
                      e.replaceWith(t, ...[...e.childNodes].slice(0, -1)),
                      X(t));
                  } else if (G.call(this, e))
                    if (
                      (3 ==
                        (null == (t = e.previousSibling)
                          ? void 0
                          : t.nodeType) &&
                        !e.previousSibling.textContent &&
                        e.previousSibling.remove(),
                      e.previousSibling && "BR" == e.previousSibling.nodeName)
                    ) {
                      e.previousSibling.replaceWith("\n" + k);
                      let t = e.nextSibling,
                        i = "";
                      for (; t; ) ((i += t.textContent), (t = t.nextSibling));
                      i.trim() && X(e.previousSibling);
                    } else
                      (!e.previousSibling || Q(e.previousSibling)) &&
                        e.before(k);
                }),
                  e.removedNodes.forEach((e) => {
                    e &&
                      "BR" == e.nodeName &&
                      G.call(this, t) &&
                      (this.removeTags(t), this.fixFirefoxLastTagNoCaret());
                  }));
              });
              var t = this.DOM.input.lastChild;
              (t && "" == t.nodeValue && t.remove(),
                (!t || "BR" != t.nodeName) &&
                  this.DOM.input.appendChild(document.createElement("br")));
            },
          },
        };
        function ge(e, t) {
          if (!e) {
            console.warn("Tagify:", "input element not found", e);
            const t = new Proxy(this, { get: () => () => t });
            return t;
          }
          if (e.__tagify)
            return (
              console.warn(
                "Tagify: ",
                "input element is already Tagified - Same instance is returned.",
                e,
              ),
              e.__tagify
            );
          (U(this, de(this)),
            (this.isFirefox =
              /firefox|fxios/i.test(navigator.userAgent) &&
              !/seamonkey/i.test(navigator.userAgent)),
            (this.isIE = window.document.documentMode),
            (t = t || {}),
            (this.getPersistedData = se(t.id)),
            (this.setPersistedData = oe(t.id)),
            (this.clearPersistedData = ae(t.id)),
            this.applySettings(e, t),
            (this.state = {
              inputText: "",
              editing: !1,
              composing: !1,
              actions: {},
              mixMode: {},
              dropdown: {},
              flaggedTags: {},
            }),
            (this.value = []),
            (this.listeners = {}),
            (this.DOM = {}),
            this.build(e),
            ee.call(this),
            this.getCSSVars(),
            this.loadOriginalValues(),
            this.events.customBinding.call(this),
            this.events.binding.call(this),
            e.autofocus && this.DOM.input.focus(),
            (e.__tagify = this));
        }
        ((ge.prototype = {
          _dropdown: te,
          getSetTagData: Q,
          helpers: {
            sameStr: j,
            removeCollectionProp: I,
            omit: O,
            isObject: q,
            parseHTML: M,
            escapeHTML: P,
            extend: U,
            concatWithoutDups: V,
            getUID: W,
            isNodeTag: G,
          },
          customEventsList: [
            "change",
            "add",
            "remove",
            "invalid",
            "input",
            "click",
            "keydown",
            "focus",
            "blur",
            "edit:input",
            "edit:beforeUpdate",
            "edit:updated",
            "edit:start",
            "edit:keydown",
            "dropdown:show",
            "dropdown:hide",
            "dropdown:select",
            "dropdown:updated",
            "dropdown:noMatch",
            "dropdown:scroll",
          ],
          dataProps: [
            "__isValid",
            "__removed",
            "__originalData",
            "__originalHTML",
            "__tagId",
          ],
          trim(e) {
            return this.settings.trim && e && "string" == typeof e
              ? e.trim()
              : e;
          },
          parseHTML: M,
          templates: le,
          parseTemplate(e, t) {
            return M((e = this.settings.templates[e] || e).apply(this, t));
          },
          set whitelist(e) {
            const t = e && Array.isArray(e);
            ((this.settings.whitelist = t ? e : []),
              this.setPersistedData(t ? e : [], "whitelist"));
          },
          get whitelist() {
            return this.settings.whitelist;
          },
          generateClassSelectors(e) {
            for (let t in e) {
              let i = t;
              Object.defineProperty(e, i + "Selector", {
                get() {
                  return "." + this[i].split(" ")[0];
                },
              });
            }
          },
          applySettings(e, t) {
            var i, n;
            Z.templates = this.templates;
            var s = { dropdown: { position: "text" } },
              o = U({}, Z, "mix" == t.mode ? s : {}),
              a = (this.settings = U({}, o, t));
            if (
              ((a.disabled = e.hasAttribute("disabled")),
              (a.readonly = a.readonly || e.hasAttribute("readonly")),
              (a.placeholder = P(
                e.getAttribute("placeholder") || a.placeholder || "",
              )),
              (a.required = e.hasAttribute("required")),
              this.generateClassSelectors(a.classNames),
              void 0 === a.dropdown.includeSelectedTags &&
                (a.dropdown.includeSelectedTags = a.duplicates),
              this.isIE && (a.autoComplete = !1),
              ["whitelist", "blacklist"].forEach((t) => {
                var i = e.getAttribute("data-" + t);
                i && (i = i.split(a.delimiters)) instanceof Array && (a[t] = i);
              }),
              "autoComplete" in t &&
                !q(t.autoComplete) &&
                ((a.autoComplete = Z.autoComplete),
                (a.autoComplete.enabled = t.autoComplete)),
              "mix" == a.mode &&
                ((a.pattern = a.pattern || /@/),
                (a.autoComplete.rightKey = !0),
                (a.delimiters = t.delimiters || null),
                a.tagTextProp &&
                  !a.dropdown.searchKeys.includes(a.tagTextProp) &&
                  a.dropdown.searchKeys.push(a.tagTextProp)),
              e.pattern)
            )
              try {
                a.pattern = new RegExp(e.pattern);
              } catch {}
            if (a.delimiters) {
              a._delimiters = a.delimiters;
              try {
                a.delimiters = new RegExp(this.settings.delimiters, "g");
              } catch {}
            }
            (a.disabled && (a.userInput = !1),
              (this.TEXTS = { ...re, ...(a.texts || {}) }),
              (("select" == a.mode &&
                !(null != (i = t.dropdown) && i.enabled)) ||
                !a.userInput) &&
                (a.dropdown.enabled = 0),
              (a.dropdown.appendTarget =
                (null == (n = t.dropdown) ? void 0 : n.appendTarget) ||
                document.body));
            let r = this.getPersistedData("whitelist");
            Array.isArray(r) &&
              (this.whitelist = Array.isArray(a.whitelist)
                ? V(a.whitelist, r)
                : r);
          },
          getAttributes(e) {
            var t,
              i = this.getCustomAttributes(e),
              n = "";
            for (t in i) n += " " + t + (void 0 !== e[t] ? `="${i[t]}"` : "");
            return n;
          },
          getCustomAttributes(e) {
            if (!q(e)) return "";
            var t,
              i = {};
            for (t in e)
              "__" != t.slice(0, 2) &&
                "class" != t &&
                e.hasOwnProperty(t) &&
                void 0 !== e[t] &&
                (i[t] = P(e[t]));
            return i;
          },
          setStateSelection() {
            var e = window.getSelection(),
              t = {
                anchorOffset: e.anchorOffset,
                anchorNode: e.anchorNode,
                range: e.getRangeAt && e.rangeCount && e.getRangeAt(0),
              };
            return ((this.state.selection = t), t);
          },
          getCSSVars() {
            var e = getComputedStyle(this.DOM.scope, null);
            const t = (t) => e.getPropertyValue("--" + t);
            function i(e) {
              if (!e) return {};
              var t = (e = e.trim().split(" ")[0])
                .split(/\d+/g)
                .filter((e) => e)
                .pop()
                .trim();
              return {
                value: +e
                  .split(t)
                  .filter((e) => e)[0]
                  .trim(),
                unit: t,
              };
            }
            this.CSSVars = {
              tagHideTransition: (({ value: e, unit: t }) =>
                "s" == t ? 1e3 * e : e)(i(t("tag-hide-transition"))),
            };
          },
          build(e) {
            var t = this.DOM;
            this.settings.mixMode.integrated
              ? ((t.originalInput = null), (t.scope = e), (t.input = e))
              : ((t.originalInput = e),
                (t.originalInput_tabIndex = e.tabIndex),
                (t.scope = this.parseTemplate("wrapper", [e, this.settings])),
                (t.input = t.scope.querySelector(
                  this.settings.classNames.inputSelector,
                )),
                e.parentNode.insertBefore(t.scope, e),
                (e.tabIndex = -1));
          },
          destroy() {
            (this.events.unbindGlobal.call(this),
              this.DOM.scope.parentNode.removeChild(this.DOM.scope),
              (this.DOM.originalInput.tabIndex =
                this.DOM.originalInput_tabIndex),
              delete this.DOM.originalInput.__tagify,
              this.dropdown.hide(!0),
              clearTimeout(this.dropdownHide__bindEventsTimeout),
              clearInterval(
                this.listeners.main.originalInputValueObserverInterval,
              ));
          },
          loadOriginalValues(e) {
            var t,
              i = this.settings;
            if (((this.state.blockChangeEvent = !0), void 0 === e)) {
              const t = this.getPersistedData("value");
              e =
                t && !this.DOM.originalInput.value
                  ? t
                  : i.mixMode.integrated
                    ? this.DOM.input.textContent
                    : this.DOM.originalInput.value;
            }
            if ((this.removeAllTags(), e))
              if ("mix" == i.mode)
                (this.parseMixTags(e),
                  (!(t = this.DOM.input.lastChild) || "BR" != t.tagName) &&
                    this.DOM.input.insertAdjacentHTML("beforeend", "<br>"));
              else {
                try {
                  JSON.parse(e) instanceof Array && (e = JSON.parse(e));
                } catch {}
                this.addTags(e, !0).forEach(
                  (e) => e && e.classList.add(i.classNames.tagNoAnimation),
                );
              }
            else this.postUpdate();
            this.state.lastOriginalValueReported = i.mixMode.integrated
              ? ""
              : this.DOM.originalInput.value;
          },
          cloneEvent(e) {
            var t = {};
            for (var i in e) "path" != i && (t[i] = e[i]);
            return t;
          },
          loading(e) {
            return (
              (this.state.isLoading = e),
              this.DOM.scope.classList[e ? "add" : "remove"](
                this.settings.classNames.scopeLoading,
              ),
              this
            );
          },
          tagLoading(e, t) {
            return (
              e &&
                e.classList[t ? "add" : "remove"](
                  this.settings.classNames.tagLoading,
                ),
              this
            );
          },
          toggleClass(e, t) {
            "string" == typeof e && this.DOM.scope.classList.toggle(e, t);
          },
          toggleScopeValidation(e) {
            var t = !0 === e || void 0 === e;
            (!this.settings.required && e && e === this.TEXTS.empty && (t = !0),
              this.toggleClass(this.settings.classNames.tagInvalid, !t),
              (this.DOM.scope.title = t ? "" : e));
          },
          toggleFocusClass(e) {
            this.toggleClass(this.settings.classNames.focus, !!e);
          },
          triggerChangeEvent: ce,
          events: he,
          fixFirefoxLastTagNoCaret() {},
          setRangeAtStartEnd(e, t) {
            if (t) {
              ((e = "number" == typeof e ? e : !!e), (t = t.lastChild || t));
              var i = document.getSelection();
              if (
                i.focusNode instanceof Element &&
                !this.DOM.input.contains(i.focusNode)
              )
                return !0;
              try {
                i.rangeCount >= 1 &&
                  ["Start", "End"].forEach((n) =>
                    i.getRangeAt(0)["set" + n](t, e || t.length),
                  );
              } catch {}
            }
          },
          insertAfterTag(e, t) {
            if (
              ((t = t || this.settings.mixMode.insertAfterTag),
              e && e.parentNode && t)
            )
              return (
                (t = "string" == typeof t ? document.createTextNode(t) : t),
                e.parentNode.insertBefore(t, e.nextSibling),
                t
              );
          },
          editTagChangeDetected(e) {
            var t = e.__originalData;
            for (var i in t)
              if (!this.dataProps.includes(i) && e[i] != t[i]) return !0;
            return !1;
          },
          getTagTextNode(e) {
            return e.querySelector(this.settings.classNames.tagTextSelector);
          },
          setTagTextNode(e, t) {
            this.getTagTextNode(e).innerHTML = P(t);
          },
          editTag(e, t) {
            ((e = e || this.getLastTag()), (t = t || {}), this.dropdown.hide());
            var i = this.settings,
              n = this.getTagTextNode(e),
              s = this.getNodeIndex(e),
              o = Q(e),
              a = this.events.callbacks,
              r = this,
              l = !0,
              d = function () {
                setTimeout(() => a.onEditTagBlur.call(r, r.getTagTextNode(e)));
              };
            if (n)
              return o instanceof Object && "editable" in o && !o.editable
                ? void 0
                : ((o = Q(e, {
                    __originalData: U({}, o),
                    __originalHTML: e.cloneNode(!0),
                  })),
                  Q(o.__originalHTML, o.__originalData),
                  n.setAttribute("contenteditable", !0),
                  e.classList.add(i.classNames.tagEditing),
                  n.addEventListener("focus", a.onEditTagFocus.bind(this, e)),
                  n.addEventListener("blur", d),
                  n.addEventListener("input", a.onEditTagInput.bind(this, n)),
                  n.addEventListener("paste", a.onEditTagPaste.bind(this, n)),
                  n.addEventListener("keydown", (t) =>
                    a.onEditTagkeydown.call(this, t, e),
                  ),
                  n.addEventListener(
                    "compositionstart",
                    a.onCompositionStart.bind(this),
                  ),
                  n.addEventListener(
                    "compositionend",
                    a.onCompositionEnd.bind(this),
                  ),
                  t.skipValidation || (l = this.editTagToggleValidity(e)),
                  (n.originalIsValid = l),
                  this.trigger("edit:start", {
                    tag: e,
                    index: s,
                    data: o,
                    isValid: l,
                  }),
                  n.focus(),
                  this.setRangeAtStartEnd(!1, n),
                  this);
            console.warn(
              "Cannot find element in Tag template: .",
              i.classNames.tagTextSelector,
            );
          },
          editTagToggleValidity(e, t) {
            var i;
            if ((t = t || Q(e)))
              return (
                (i = !("__isValid" in t) || !0 === t.__isValid) ||
                  this.removeTagsFromValue(e),
                this.update(),
                e.classList.toggle(this.settings.classNames.tagNotAllowed, !i),
                (t.__isValid = i),
                t.__isValid
              );
            console.warn("tag has no data: ", e, t);
          },
          onEditTagDone(e, t) {
            t = t || {};
            var i = {
              tag: (e = e || this.state.editing.scope),
              index: this.getNodeIndex(e),
              previousData: Q(e),
              data: t,
            };
            (this.trigger("edit:beforeUpdate", i, { cloneData: !1 }),
              (this.state.editing = !1),
              delete t.__originalData,
              delete t.__originalHTML,
              e && t[this.settings.tagTextProp]
                ? ((e = this.replaceTag(e, t)),
                  this.editTagToggleValidity(e, t),
                  this.settings.a11y.focusableTags ? e.focus() : X(e))
                : e && this.removeTags(e),
              this.trigger("edit:updated", i),
              this.dropdown.hide(),
              this.settings.keepInvalidTags && this.reCheckInvalidTags());
          },
          replaceTag(e, t) {
            ((!t || !t.value) && (t = e.__tagifyTagData),
              t.__isValid &&
                1 != t.__isValid &&
                U(t, this.getInvalidTagAttrs(t, t.__isValid)));
            var i = this.createTagElem(t);
            return (
              e.parentNode.replaceChild(i, e),
              this.updateValueByDOMTags(),
              i
            );
          },
          updateValueByDOMTags() {
            ((this.value.length = 0),
              [].forEach.call(this.getTagElms(), (e) => {
                e.classList.contains(
                  this.settings.classNames.tagNotAllowed.split(" ")[0],
                ) || this.value.push(Q(e));
              }),
              this.update());
          },
          injectAtCaret(e, t) {
            var i;
            return !(t =
              t || (null == (i = this.state.selection) ? void 0 : i.range)) && e
              ? (this.appendMixTags(e), this)
              : (K(e, t),
                this.setRangeAtStartEnd(!1, e),
                this.updateValueByDOMTags(),
                this.update(),
                this);
          },
          input: {
            set(e = "", t = !0) {
              var i = this.settings.dropdown.closeOnSelect;
              ((this.state.inputText = e),
                t && (this.DOM.input.innerHTML = P("" + e)),
                !e && i && this.dropdown.hide.bind(this),
                this.input.autocomplete.suggest.call(this),
                this.input.validate.call(this));
            },
            raw() {
              return this.DOM.input.textContent;
            },
            validate() {
              var e =
                !this.state.inputText ||
                !0 === this.validateTag({ value: this.state.inputText });
              return (
                this.DOM.input.classList.toggle(
                  this.settings.classNames.inputInvalid,
                  !e,
                ),
                e
              );
            },
            normalize(e) {
              var t = e || this.DOM.input,
                i = [];
              (t.childNodes.forEach(
                (e) => 3 == e.nodeType && i.push(e.nodeValue),
              ),
                (i = i.join("\n")));
              try {
                i = i.replace(
                  /(?:\r\n|\r|\n)/g,
                  this.settings.delimiters.source.charAt(0),
                );
              } catch {}
              return ((i = i.replace(/\s/g, " ")), this.trim(i));
            },
            autocomplete: {
              suggest(e) {
                if (this.settings.autoComplete.enabled) {
                  "string" == typeof (e = e || { value: "" }) &&
                    (e = { value: e });
                  var t = this.dropdown.getMappedValue(e);
                  if ("number" != typeof t) {
                    var i = t
                        .substr(0, this.state.inputText.length)
                        .toLowerCase(),
                      n = t.substring(this.state.inputText.length);
                    t &&
                    this.state.inputText &&
                    i == this.state.inputText.toLowerCase()
                      ? (this.DOM.input.setAttribute("data-suggest", n),
                        (this.state.inputSuggestion = e))
                      : (this.DOM.input.removeAttribute("data-suggest"),
                        delete this.state.inputSuggestion);
                  }
                }
              },
              set(e) {
                var t = this.DOM.input.getAttribute("data-suggest"),
                  i = e || (t ? this.state.inputText + t : null);
                return (
                  !!i &&
                  ("mix" == this.settings.mode
                    ? this.replaceTextWithNode(
                        document.createTextNode(this.state.tag.prefix + i),
                      )
                    : (this.input.set.call(this, i),
                      this.setRangeAtStartEnd(!1, this.DOM.input)),
                  this.input.autocomplete.suggest.call(this),
                  this.dropdown.hide(),
                  !0)
                );
              },
            },
          },
          getTagIdx(e) {
            return this.value.findIndex((t) => t.__tagId == (e || {}).__tagId);
          },
          getNodeIndex(e) {
            var t = 0;
            if (e) for (; (e = e.previousElementSibling); ) t++;
            return t;
          },
          getTagElms(...e) {
            var t =
              "." +
              [...this.settings.classNames.tag.split(" "), ...e].join(".");
            return [].slice.call(this.DOM.scope.querySelectorAll(t));
          },
          getLastTag() {
            var e = this.DOM.scope.querySelectorAll(
              `${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`,
            );
            return e[e.length - 1];
          },
          isTagDuplicate(e, t, i) {
            var n = 0;
            if ("select" == this.settings.mode) return !1;
            for (let s of this.value)
              j(this.trim("" + e), s.value, t) && i != s.__tagId && n++;
            return n;
          },
          getTagIndexByValue(e) {
            var t = [],
              i = this.settings.dropdown.caseSensitive;
            return (
              this.getTagElms().forEach((n, s) => {
                n.__tagifyTagData &&
                  j(this.trim(n.__tagifyTagData.value), e, i) &&
                  t.push(s);
              }),
              t
            );
          },
          getTagElmByValue(e) {
            var t = this.getTagIndexByValue(e)[0];
            return this.getTagElms()[t];
          },
          flashTag(e) {
            e &&
              (e.classList.add(this.settings.classNames.tagFlash),
              setTimeout(() => {
                e.classList.remove(this.settings.classNames.tagFlash);
              }, 100));
          },
          isTagBlacklisted(e) {
            return (
              (e = this.trim(e.toLowerCase())),
              this.settings.blacklist.filter((t) => ("" + t).toLowerCase() == e)
                .length
            );
          },
          isTagWhitelisted(e) {
            return !!this.getWhitelistItem(e);
          },
          getWhitelistItem(e, t, i) {
            t = t || "value";
            var n,
              s = this.settings;
            return (
              (i = i || s.whitelist).some((i) => {
                var o = "string" == typeof i ? i : i[t] || i.value;
                if (j(o, e, s.dropdown.caseSensitive, s.trim))
                  return ((n = "string" == typeof i ? { value: i } : i), !0);
              }),
              !n &&
                "value" == t &&
                "value" != s.tagTextProp &&
                (n = this.getWhitelistItem(e, s.tagTextProp, i)),
              n
            );
          },
          validateTag(e) {
            var t = this.settings,
              i = "value" in e ? "value" : t.tagTextProp,
              n = this.trim(e[i] + "");
            return (e[i] + "").trim()
              ? "mix" != t.mode &&
                t.pattern &&
                t.pattern instanceof RegExp &&
                !t.pattern.test(n)
                ? this.TEXTS.pattern
                : !t.duplicates &&
                    this.isTagDuplicate(n, t.dropdown.caseSensitive, e.__tagId)
                  ? this.TEXTS.duplicate
                  : this.isTagBlacklisted(n) ||
                      (t.enforceWhitelist && !this.isTagWhitelisted(n))
                    ? this.TEXTS.notAllowed
                    : !t.validate || t.validate(e)
              : this.TEXTS.empty;
          },
          getInvalidTagAttrs(e, t) {
            return {
              "aria-invalid": !0,
              class:
                `${e.class || ""} ${this.settings.classNames.tagNotAllowed}`.trim(),
              title: t,
            };
          },
          hasMaxTags() {
            return (
              this.value.length >= this.settings.maxTags && this.TEXTS.exceed
            );
          },
          setReadonly(e, t) {
            var i = this.settings;
            (document.activeElement.blur(),
              (i[t || "readonly"] = e),
              this.DOM.scope[(e ? "set" : "remove") + "Attribute"](
                t || "readonly",
                !0,
              ),
              (this.settings.userInput = !0),
              this.setContentEditable(!e));
          },
          setContentEditable(e) {
            this.settings.userInput &&
              ((this.DOM.input.contentEditable = e),
              (this.DOM.input.tabIndex = e ? 0 : -1));
          },
          setDisabled(e) {
            this.setReadonly(e, "disabled");
          },
          normalizeTags(e) {
            var {
                whitelist: t,
                delimiters: i,
                mode: n,
                tagTextProp: s,
              } = this.settings,
              o = [],
              a = !!t && t[0] instanceof Object,
              r = Array.isArray(e),
              l = r && e[0].value,
              d = (e) =>
                (e + "")
                  .split(i)
                  .filter((e) => e)
                  .map((e) => ({ [s]: this.trim(e), value: this.trim(e) }));
            if (
              ("number" == typeof e && (e = e.toString()), "string" == typeof e)
            ) {
              if (!e.trim()) return [];
              e = d(e);
            } else
              r &&
                (e = [].concat(...e.map((e) => (null != e.value ? e : d(e)))));
            return (
              a &&
                !l &&
                (e.forEach((e) => {
                  var t = o.map((e) => e.value),
                    i = this.dropdown.filterListItems.call(this, e[s], {
                      exact: !0,
                    });
                  this.settings.duplicates ||
                    (i = i.filter((e) => !t.includes(e.value)));
                  var a =
                    i.length > 1 ? this.getWhitelistItem(e[s], s, i) : i[0];
                  a && a instanceof Object
                    ? o.push(a)
                    : "mix" != n &&
                      (null == e.value && (e.value = e[s]), o.push(e));
                }),
                o.length && (e = o)),
              e
            );
          },
          parseMixTags(e, t) {
            var {
                mixTagsInterpolator: i,
                duplicates: n,
                transformTag: s,
                enforceWhitelist: o,
                maxTags: a,
                tagTextProp: r,
              } = this.settings,
              l = [];
            if (
              ((e = e
                .split(i[0])
                .map((e, d) => {
                  var u,
                    c,
                    h,
                    g = e.split(i[1]),
                    p = g[0],
                    f = l.length == a;
                  try {
                    if (p == +p) throw Error;
                    c = JSON.parse(p);
                  } catch {
                    c = this.normalizeTags(p)[0] || { value: p };
                  }
                  if (
                    (s.call(this, c),
                    f ||
                      !(g.length > 1) ||
                      (o && !this.isTagWhitelisted(c.value)) ||
                      (!n && !t && this.isTagDuplicate(c.value)))
                  ) {
                    if (e) return d ? i[0] + e : e;
                  } else
                    ((c[(u = c[r] ? r : "value")] = this.trim(c[u])),
                      (h = this.createTagElem(c)),
                      l.push(c),
                      h.classList.add(this.settings.classNames.tagNoAnimation),
                      (g[0] = h.outerHTML),
                      this.value.push(c));
                  return g.join("");
                })
                .join("")),
              t)
            )
              return e;
            ((this.DOM.input.innerHTML = e),
              this.DOM.input.appendChild(document.createTextNode("")),
              this.DOM.input.normalize());
            var d = this.getTagElms();
            return (
              d.forEach((e, t) => Q(e, l[t])),
              this.update({ withoutChangeEvent: !0 }),
              J(d, this.state.hasFocus),
              e
            );
          },
          replaceTextWithNode(e, t) {
            if (this.state.tag || t) {
              t = t || this.state.tag.prefix + this.state.tag.value;
              var i,
                n,
                s = this.state.selection || window.getSelection(),
                o = s.anchorNode,
                a = this.state.tag.delimiters
                  ? this.state.tag.delimiters.length
                  : 0;
              return (
                o.splitText(s.anchorOffset - a),
                -1 == (i = o.nodeValue.lastIndexOf(t)) ||
                  ((n = o.splitText(i)), e && o.parentNode.replaceChild(e, n)),
                !0
              );
            }
          },
          selectTag(e, t) {
            var i = this.settings;
            if (!i.enforceWhitelist || this.isTagWhitelisted(t.value)) {
              (this.input.set.call(this, t[i.tagTextProp] || t.value, !0),
                this.state.actions.selectOption &&
                  setTimeout(() =>
                    this.setRangeAtStartEnd(!1, this.DOM.input),
                  ));
              var n = this.getLastTag();
              return (
                n ? this.replaceTag(n, t) : this.appendTag(e),
                (this.value[0] = t),
                this.update(),
                this.trigger("add", { tag: e, data: t }),
                [e]
              );
            }
          },
          addEmptyTag(e) {
            var t = U({ value: "" }, e || {}),
              i = this.createTagElem(t);
            (Q(i, t),
              this.appendTag(i),
              this.editTag(i, { skipValidation: !0 }));
          },
          addTags(e, t, i) {
            var n = [],
              s = this.settings,
              o = [],
              a = document.createDocumentFragment();
            if (((i = i || s.skipInvalid), !e || 0 == e.length)) return n;
            switch (((e = this.normalizeTags(e)), s.mode)) {
              case "mix":
                return this.addMixTags(e);
              case "select":
                ((t = !1), this.removeAllTags());
            }
            return (
              this.DOM.input.removeAttribute("style"),
              e.forEach((e) => {
                var t,
                  r = {},
                  l = Object.assign({}, e, { value: e.value + "" });
                if (
                  ((e = Object.assign({}, l)),
                  s.transformTag.call(this, e),
                  (e.__isValid = this.hasMaxTags() || this.validateTag(e)),
                  !0 !== e.__isValid)
                ) {
                  if (i) return;
                  if (
                    (U(r, this.getInvalidTagAttrs(e, e.__isValid), {
                      __preInvalidData: l,
                    }),
                    e.__isValid == this.TEXTS.duplicate &&
                      this.flashTag(this.getTagElmByValue(e.value)),
                    !s.createInvalidTags)
                  )
                    return void o.push(e.value);
                }
                if (
                  ("readonly" in e &&
                    (e.readonly
                      ? (r["aria-readonly"] = !0)
                      : delete e.readonly),
                  (t = this.createTagElem(e, r)),
                  n.push(t),
                  "select" == s.mode)
                )
                  return this.selectTag(t, e);
                (a.appendChild(t),
                  e.__isValid && !0 === e.__isValid
                    ? (this.value.push(e),
                      this.trigger("add", {
                        tag: t,
                        index: this.value.length - 1,
                        data: e,
                      }))
                    : (this.trigger("invalid", {
                        data: e,
                        index: this.value.length,
                        tag: t,
                        message: e.__isValid,
                      }),
                      s.keepInvalidTags ||
                        setTimeout(() => this.removeTags(t, !0), 1e3)),
                  this.dropdown.position());
              }),
              this.appendTag(a),
              this.update(),
              e.length &&
                t &&
                (this.input.set.call(
                  this,
                  s.createInvalidTags ? "" : o.join(s._delimiters),
                ),
                this.setRangeAtStartEnd(!1, this.DOM.input)),
              s.dropdown.enabled && this.dropdown.refilter(),
              n
            );
          },
          addMixTags(e) {
            if ((e = this.normalizeTags(e))[0].prefix || this.state.tag)
              return this.prefixedTextToTag(e[0]);
            var t = document.createDocumentFragment();
            return (
              e.forEach((e) => {
                var i = this.createTagElem(e);
                t.appendChild(i);
              }),
              this.appendMixTags(t),
              t
            );
          },
          appendMixTags(e) {
            var t = !!this.state.selection;
            t
              ? this.injectAtCaret(e)
              : (this.DOM.input.focus(),
                (t = this.setStateSelection()).range.setStart(
                  this.DOM.input,
                  t.range.endOffset,
                ),
                t.range.setEnd(this.DOM.input, t.range.endOffset),
                this.DOM.input.appendChild(e),
                this.updateValueByDOMTags(),
                this.update());
          },
          prefixedTextToTag(e) {
            var t,
              i = this.settings,
              n = this.state.tag.delimiters;
            if (
              (i.transformTag.call(this, e),
              (e.prefix =
                e.prefix || this.state.tag
                  ? this.state.tag.prefix
                  : (i.pattern.source || i.pattern)[0]),
              (t = this.createTagElem(e)),
              this.replaceTextWithNode(t) || this.DOM.input.appendChild(t),
              setTimeout(
                () => t.classList.add(this.settings.classNames.tagNoAnimation),
                300,
              ),
              this.value.push(e),
              this.update(),
              !n)
            ) {
              var s = this.insertAfterTag(t) || t;
              setTimeout(X, 0, s);
            }
            return (
              (this.state.tag = null),
              this.trigger("add", U({}, { tag: t }, { data: e })),
              t
            );
          },
          appendTag(e) {
            var t = this.DOM,
              i = t.input;
            t.scope.insertBefore(e, i);
          },
          createTagElem(e, t) {
            e.__tagId = W();
            var i,
              n = U({}, e, { value: P(e.value + ""), ...t });
            return (R((i = this.parseTemplate("tag", [n, this]))), Q(i, e), i);
          },
          reCheckInvalidTags() {
            var e = this.settings;
            this.getTagElms(e.classNames.tagNotAllowed).forEach((t, i) => {
              var n = Q(t),
                s = this.hasMaxTags(),
                o = this.validateTag(n),
                a = !0 === o && !s;
              if (("select" == e.mode && this.toggleScopeValidation(o), a))
                return (
                  (n = n.__preInvalidData
                    ? n.__preInvalidData
                    : { value: n.value }),
                  this.replaceTag(t, n)
                );
              t.title = s || o;
            });
          },
          removeTags(e, t, i) {
            var n,
              s = this.settings;
            if (
              ((e =
                e && e instanceof HTMLElement
                  ? [e]
                  : e instanceof Array
                    ? e
                    : e
                      ? [e]
                      : [this.getLastTag()]),
              (n = e.reduce((e, t) => {
                t && "string" == typeof t && (t = this.getTagElmByValue(t));
                var i = Q(t);
                return (
                  t &&
                    i &&
                    !i.readonly &&
                    e.push({
                      node: t,
                      idx: this.getTagIdx(i),
                      data: Q(t, { __removed: !0 }),
                    }),
                  e
                );
              }, [])),
              (i = "number" == typeof i ? i : this.CSSVars.tagHideTransition),
              "select" == s.mode && ((i = 0), this.input.set.call(this)),
              1 == n.length &&
                "select" != s.mode &&
                n[0].node.classList.contains(s.classNames.tagNotAllowed) &&
                (t = !0),
              n.length)
            )
              return s.hooks
                .beforeRemoveTag(n, { tagify: this })
                .then(() => {
                  function e(e) {
                    e.node.parentNode &&
                      (e.node.parentNode.removeChild(e.node),
                      t
                        ? s.keepInvalidTags &&
                          this.trigger("remove", { tag: e.node, index: e.idx })
                        : (this.trigger("remove", {
                            tag: e.node,
                            index: e.idx,
                            data: e.data,
                          }),
                          this.dropdown.refilter(),
                          this.dropdown.position(),
                          this.DOM.input.normalize(),
                          s.keepInvalidTags && this.reCheckInvalidTags()));
                  }
                  function o(t) {
                    ((t.node.style.width =
                      parseFloat(window.getComputedStyle(t.node).width) + "px"),
                      document.body.clientTop,
                      t.node.classList.add(s.classNames.tagHide),
                      setTimeout(e.bind(this), i, t));
                  }
                  (i && i > 10 && 1 == n.length
                    ? o.call(this, n[0])
                    : n.forEach(e.bind(this)),
                    t ||
                      (this.removeTagsFromValue(n.map((e) => e.node)),
                      this.update(),
                      "select" == s.mode && this.setContentEditable(!0)));
                })
                .catch((e) => {});
          },
          removeTagsFromDOM() {
            [].slice
              .call(this.getTagElms())
              .forEach((e) => e.parentNode.removeChild(e));
          },
          removeTagsFromValue(e) {
            (e = Array.isArray(e) ? e : [e]).forEach((e) => {
              var t = Q(e),
                i = this.getTagIdx(t);
              i > -1 && this.value.splice(i, 1);
            });
          },
          removeAllTags(e) {
            ((e = e || {}),
              (this.value = []),
              "mix" == this.settings.mode
                ? (this.DOM.input.innerHTML = "")
                : this.removeTagsFromDOM(),
              this.dropdown.refilter(),
              this.dropdown.position(),
              this.state.dropdown.visible &&
                setTimeout(() => {
                  this.DOM.input.focus();
                }),
              "select" == this.settings.mode &&
                (this.input.set.call(this), this.setContentEditable(!0)),
              this.update(e));
          },
          postUpdate() {
            var e, t;
            this.state.blockChangeEvent = !1;
            var i = this.settings,
              n = i.classNames,
              s =
                "mix" == i.mode
                  ? i.mixMode.integrated
                    ? this.DOM.input.textContent
                    : this.DOM.originalInput.value.trim()
                  : this.value.length + this.input.raw.call(this).length;
            (this.toggleClass(n.hasMaxTags, this.value.length >= i.maxTags),
              this.toggleClass(n.hasNoTags, !this.value.length),
              this.toggleClass(n.empty, !s),
              "select" == i.mode &&
                this.toggleScopeValidation(
                  null == (t = null == (e = this.value) ? void 0 : e[0])
                    ? void 0
                    : t.__isValid,
                ));
          },
          setOriginalInputValue(e) {
            var t = this.DOM.originalInput;
            this.settings.mixMode.integrated ||
              ((t.value = e),
              (t.tagifyValue = t.value),
              this.setPersistedData(e, "value"));
          },
          update(e) {
            function t() {
              var t = this.getInputValue();
              (this.setOriginalInputValue(t),
                (!this.settings.onChangeAfterBlur ||
                  !(e || {}).withoutChangeEvent) &&
                  !this.state.blockChangeEvent &&
                  this.triggerChangeEvent(),
                this.postUpdate());
            }
            (clearTimeout(this.debouncedUpdateTimeout),
              (this.debouncedUpdateTimeout = setTimeout(t.bind(this), 100)));
          },
          getInputValue() {
            var e = this.getCleanValue();
            return "mix" == this.settings.mode
              ? this.getMixedTagsAsString(e)
              : e.length
                ? this.settings.originalInputValueFormat
                  ? this.settings.originalInputValueFormat(e)
                  : JSON.stringify(e)
                : "";
          },
          getCleanValue(e) {
            return I(e || this.value, this.dataProps);
          },
          getMixedTagsAsString() {
            var e = "",
              t = this,
              i = this.settings,
              n = i.originalInputValueFormat || JSON.stringify,
              s = i.mixTagsInterpolator;
            function o(i) {
              i.childNodes.forEach((i) => {
                if (1 == i.nodeType) {
                  const a = Q(i);
                  if (("BR" == i.tagName && (e += "\r\n"), a && G.call(t, i))) {
                    if (a.__removed) return;
                    e += s[0] + n(O(a, t.dataProps)) + s[1];
                  } else
                    i.getAttribute("style") ||
                    ["B", "I", "U"].includes(i.tagName)
                      ? (e += i.textContent)
                      : ("DIV" == i.tagName || "P" == i.tagName) &&
                        ((e += "\r\n"), o(i));
                } else e += i.textContent;
              });
            }
            return (o(this.DOM.input), e);
          },
        }),
          (ge.prototype.removeTag = ge.prototype.removeTags));
        const pe = (e) => e,
          fe = (e, t) => {
            const i = (e) => ("string" == typeof e ? e : JSON.stringify(e));
            return i(e) == i(t);
          },
          me = ({
            name: e,
            value: n,
            loading: s = !1,
            onInput: o = pe,
            onAdd: a = pe,
            onRemove: r = pe,
            onEditInput: l = pe,
            onEditBeforeUpdate: d = pe,
            onEditUpdated: u = pe,
            onEditStart: c = pe,
            onEditKeydown: h = pe,
            onInvalid: g = pe,
            onClick: p = pe,
            onKeydown: f = pe,
            onFocus: m = pe,
            onBlur: w = pe,
            onChange: y = pe,
            onDropdownShow: x = pe,
            onDropdownHide: v = pe,
            onDropdownSelect: _ = pe,
            onDropdownScroll: b = pe,
            onDropdownNoMatch: T = pe,
            onDropdownUpdated: C = pe,
            readOnly: D,
            disabled: F,
            children: A,
            settings: E = {},
            InputMode: S = "input",
            autoFocus: k,
            className: j,
            whitelist: I,
            tagifyRef: O,
            placeholder: N = "",
            defaultValue: M,
            showDropdown: B,
          }) => {
            const R = t.useRef(),
              L = t.useRef(),
              P = t.useRef(),
              q = M || n,
              U = t.useMemo(
                () => ({
                  ref: L,
                  name: e,
                  defaultValue:
                    A || "string" == typeof q ? q : JSON.stringify(q),
                  className: j,
                  readOnly: D,
                  disabled: F,
                  autoFocus: k,
                  placeholder: N,
                }),
                [],
              ),
              V = t.useCallback(() => {
                k && P.current && P.current.DOM.input.focus();
              }, [P]);
            return (
              t.useEffect(() => {
                ("textarea" == S && (E.mode = "mix"),
                  I && I.length && (E.whitelist = I));
                const e = new ge(L.current, E);
                return (
                  e
                    .on("input", o)
                    .on("add", a)
                    .on("remove", r)
                    .on("invalid", g)
                    .on("keydown", f)
                    .on("focus", m)
                    .on("blur", w)
                    .on("click", p)
                    .on("change", y)
                    .on("edit:input", l)
                    .on("edit:beforeUpdate", d)
                    .on("edit:updated", u)
                    .on("edit:start", c)
                    .on("edit:keydown", h)
                    .on("dropdown:show", x)
                    .on("dropdown:hide", v)
                    .on("dropdown:select", _)
                    .on("dropdown:scroll", b)
                    .on("dropdown:noMatch", T)
                    .on("dropdown:updated", C),
                  O && (O.current = e),
                  (P.current = e),
                  V(),
                  () => {
                    e.destroy();
                  }
                );
              }, []),
              t.useEffect(() => {
                V();
              }, [k]),
              t.useEffect(() => {
                const e = P.current.getInputValue();
                R.current && !fe(n, e) && P.current.loadOriginalValues(n);
              }, [n, R.current]),
              t.useEffect(() => {
                R.current && P.current.toggleClass(j);
              }, [j, R.current]),
              t.useEffect(() => {
                R.current && P.current.loading(s);
              }, [s, R.current]),
              t.useEffect(() => {
                R.current && P.current.setReadonly(D);
              }, [D, R.current]),
              t.useEffect(() => {
                R.current && P.current.setDisabled(F);
              }, [F, R.current]),
              t.useEffect(() => {
                const e = P.current;
                R.current &&
                  (B
                    ? (e.dropdown.show.call(e, B), e.toggleFocusClass(!0))
                    : e.dropdown.hide.call(e));
              }, [B, R.current]),
              t.useEffect(() => {
                R.current = !0;
              }, []),
              i.jsx("div", {
                className: "tags-input",
                children: i.jsx(S, { ...U }),
              })
            );
          },
          we = t.memo(me);
        we.displayName = "Tags";
        const ye = ({ ...e }) => i.jsx(we, { InputMode: "textarea", ...e }),
          xe = "-**",
          ve = "**-";
        function _e(e, t) {
          return t;
        }
        function be(e) {
          const t = {};
          return (
            e.fields.map((e) => {
              t[e.value] = e.transformer ?? _e;
            }),
            Ce(
              A(
                e.rule
                  .trim()
                  .split(xe)
                  .map((i) => {
                    let n = i.split(ve),
                      s = n[0];
                    if (0 === s.trim().length) return n.join("");
                    let o = s.trim();
                    try {
                      const e = JSON.parse(o);
                      e.value && (o = e.value);
                    } catch {}
                    return (
                      e.fields.find((e) => e.value === o) &&
                        (t[o] ? (n[0] = t[o](e.data, o)) : (n[0] = o)),
                      n.join("")
                    );
                  })
                  .join("")
                  .trim(),
              ) + (e.ext ?? ""),
            )
          );
        }
        function Te(e) {
          return Ce(
            e
              .trim()
              .split(xe)
              .map((e) => {
                let t = e.split(ve),
                  i = t[0];
                if (0 === i.trim().length) return t.join("");
                let n = i.trim();
                try {
                  const e = JSON.parse(n);
                  e.value && (n = e.value);
                } catch {}
                return ((t[0] = n), t.join(ve));
              })
              .join(xe)
              .trim(),
          );
        }
        function Ce(e) {
          return e
            .replace(/[\n\t]/g, "")
            .replace(new RegExp("\\p{C}", "gu"), "");
        }
        function De(e, t, i) {
          var n,
            s = i || {},
            o = s.noTrailing,
            a = void 0 !== o && o,
            r = s.noLeading,
            l = void 0 !== r && r,
            d = s.debounceMode,
            u = void 0 === d ? void 0 : d,
            c = !1,
            h = 0;
          function g() {
            n && clearTimeout(n);
          }
          function p(e) {
            var t = (e || {}).upcomingOnly,
              i = void 0 !== t && t;
            (g(), (c = !i));
          }
          function f() {
            for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
              s[o] = arguments[o];
            var r = this,
              d = Date.now() - h;
            function p() {
              ((h = Date.now()), t.apply(r, s));
            }
            function f() {
              n = void 0;
            }
            c ||
              (!l && u && !n && p(),
              g(),
              void 0 === u && d > e
                ? l
                  ? ((h = Date.now()), a || (n = setTimeout(u ? f : p, e)))
                  : p()
                : !0 !== a &&
                  (n = setTimeout(u ? f : p, void 0 === u ? e - d : e)));
          }
          return ((f.cancel = p), f);
        }
        function Fe(e, t, i) {
          var n = {}.atBegin;
          return De(e, t, { debounceMode: !1 !== (void 0 !== n && n) });
        }
        let Ae = !1,
          Ee = 0;
        function Se(n, s) {
          const o = t.useRef();
          t.useImperativeHandle(s, () => o.current);
          const [a, r] = t.useState(""),
            [l, d] = t.useState([]);
          function u(e) {
            let t = e.detail.value.trim();
            ((t = t.replace(/\n/g, "")),
              console.log(t, 11),
              0 === t.length && ((t = n.presets[0]), o.current.parseMixTags(t)),
              je(),
              n.onUpdate(Ce(t)),
              setTimeout(() => {
                d(o.current.getTagElms().map((e) => e.__tagifyTagData.value));
              }, 300));
          }
          const c = t.useCallback(Fe(600, u), [o.current, n.presets]),
            h = t.useMemo(
              () =>
                o.current
                  ? n.presets.map((e) => ({
                      key: e,
                      label: i.jsx("div", {
                        dangerouslySetInnerHTML: {
                          __html: o.current.parseMixTags(e, !0),
                        },
                      }),
                      onClick: (e) => {
                        (r(e.key), c({ detail: { value: e.key } }));
                      },
                    }))
                  : [],
              [n.presets, o.current, c],
            ),
            g = t.useMemo(
              () =>
                o.current
                  ? n.fields.map((e) => {
                      const t = e.value;
                      return {
                        key: t,
                        label: t,
                        disabled: l.includes(t),
                        onClick: (e) => {
                          o.current.addTags([e.key]);
                        },
                      };
                    })
                  : [],
              [n.fields, o.current, l],
            ),
            p = t.useMemo(
              () => ({
                pattern: /@/,
                placeholder: "Input naming rule",
                editTags: !1,
                enforceWhitelist: !0,
                tagTextProp: "label",
                whitelist: n.fields,
                mixTagsInterpolator: [xe, ve],
                duplicates: !1,
                autoComplete: { enable: !1 },
                dropdown: { enabled: !1 },
                userInput: !1,
                ...(n.tagifySettings ?? {}),
              }),
              [n.tagifySettings, n.fields],
            );
          return (
            t.useEffect(() => {
              Ae || r(Ce(n.rule));
            }, [n.rule]),
            t.useEffect(() => {
              o.current &&
                d(o.current.getTagElms().map((e) => e.__tagifyTagData.value));
            }, [o.current]),
            i.jsxs(e.Space, {
              direction: "vertical",
              size: 8,
              className: `tagify-wrapper ${n.theme}`,
              children: [
                i.jsx(ye, {
                  tagifyRef: o,
                  onChange: c,
                  settings: p,
                  readOnly: !0,
                  value: a,
                }),
                i.jsxs("div", {
                  children: [
                    i.jsxs("div", {
                      className: "bottom-bar",
                      children: [
                        i.jsx(e.Space, {
                          size: 8,
                          children: i.jsx(e.Dropdown, {
                            menu: { items: h },
                            overlayClassName: "tagify-dropdown",
                            children: i.jsx(e.Button, {
                              size: "small",
                              children: "Choose a preset",
                            }),
                          }),
                        }),
                        i.jsx(e.Space, {
                          children: i.jsx(e.Dropdown, {
                            menu: { items: g },
                            overlayClassName: "tagify-dropdown",
                            children: i.jsx(e.Button, {
                              size: "small",
                              children: "Insert a Field",
                            }),
                          }),
                        }),
                      ],
                    }),
                    n.exampleData &&
                      i.jsxs("div", {
                        className: "tagify-example",
                        children: [
                          i.jsx("span", {
                            className: "eg",
                            children: "example:",
                          }),
                          i.jsx("span", {
                            className: "eg-txt",
                            children: be({
                              rule: n.rule,
                              fields: n.fields,
                              data: n.exampleData,
                              ext: n.ext ?? "",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        }
        const ke = t.forwardRef(Se);
        function je() {
          ((Ae = !0),
            window.clearTimeout(Ee),
            (Ee = setTimeout(() => {
              Ae = !1;
            }, 1e3)));
        }
        function Ie(e) {
          return !!(
            e.toString().includes("1390008") ||
            e.toString().includes("1348007") ||
            e.toString().includes("3252001") ||
            e.toString().includes("1404006") ||
            e.toString().includes("1675004") ||
            e.toString().includes("1404078") ||
            e.toString().includes("Request is too frequent") ||
            e.toString().includes("Rate limit") ||
            e.toString().includes("Temporarily") ||
            e.toString().includes("again later") ||
            e.toString().includes("rate_limit_exceeded")
          );
        }
        function Oe(e) {
          return e.includes("it was read from disk")
            ? "The disk where the folder for storing images is located is either full or disconnected. Please check your disk."
            : Ie(e)
              ? "Due to excessive API requests, you have been temporarily restricted from using this feature. The restriction is typically lifted automatically within 4-8 hours. Please try again later."
              : e.includes("HTTP 500 HTTP_SERVER_ERROR")
                ? "It seems the requested resource is missing, which typically occurs when trying to download data from a few years ago. This is a Facebook error, not an error of this extension. If you firmly believe this is an error with the extension, please contact us."
                : e;
        }
        function Ne(e) {
          if (!e) return "unknown errors";
          if (e?.error?.message) return e.error.message;
          if (e?.[0]?.error?.message) return e[0].error.message;
          if (e?.error_subcode && e?.message) return e.message;
          if (e?.errors?.[0]?.message) return e.errors[0].message;
          if (e?.[0]?.message && e?.[0]?.error_subcode) return e[0].message;
          if (e?.[0]?.message) return e[0].message;
          if (e?.message) return e.message;
          let t = "";
          try {
            t = JSON.stringify(e);
          } catch (i) {}
          return t.toString();
        }
        const Me = "__fb_error_records",
          Be = 10;
        function Re(e, t, i) {
          try {
            const n = {
                from: e,
                error: t,
                payload: i,
                readableTime: new Date().toLocaleString(),
                href: window.location.href,
              },
              s = Le();
            (s.unshift(n),
              s.length > Be && (s.length = Be),
              localStorage.setItem(Me, JSON.stringify(s)));
          } catch (n) {
            console.error("Error to save error records to localStorage:", n);
          }
        }
        function Le() {
          try {
            const e = localStorage.getItem(Me);
            return e ? JSON.parse(e) : [];
          } catch (e) {
            return (
              console.error("Error to get error records from localStorage:", e),
              []
            );
          }
        }
        function Pe(t, n) {
          const s = Ne(n),
            o = `id${Math.ceil(9999 * Math.random())}`;
          t.error({
            title: "Api Request Error",
            width: 530,
            content: i.jsxs("div", {
              children: [
                i.jsx("code", { style: { fontSize: 10 }, children: Oe(s) }),
                i.jsxs("div", {
                  style: {
                    marginTop: 24,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  },
                  children: [
                    i.jsx(e.Button, {
                      style: { marginBottom: 8 },
                      size: "small",
                      type: "text",
                      id: o,
                      onClick: () => {
                        const e = {
                            message: {
                              errorMsg: s,
                              stack: n?.stack ?? "",
                              description: n?.description,
                            },
                            href: window.location.href,
                            stacks: qe(),
                            errors: Le(),
                          },
                          t = new TextEncoder().encode(JSON.stringify(e));
                        Ue(
                          new Blob([t], {
                            type: "application/json;charset=utf-8",
                          }),
                          "Stashly error report.json",
                        );
                        const i = document.querySelector(`#${o}`);
                        i && (i.innerHTML = "Downloaded");
                      },
                      children: "Download errors message",
                    }),
                    i.jsx(e.Button, {
                      size: "small",
                      type: "primary",
                      onClick: () =>
                        window.open(
                          "https://github.com/shahriar-ahmed-seam/Stashly/issues",
                          "_blank",
                        ),
                      children: "Report an issue",
                    }),
                  ],
                }),
              ],
            }),
            okText: "Close",
            okButtonProps: { type: "default" },
          });
        }
        function qe() {
          try {
            return window
              .require("ErrorPubSub")
              .history.slice(-10)
              .map((e) => {
                const t = (e.stackFrames || [])
                  .filter((e) => e?.script?.includes("chrome-extension://"))
                  .map((e) => ({
                    script: e.script,
                    line: e.line,
                    column: e.column,
                  }));
                return {
                  message: e.message,
                  name: e.name,
                  type: e.type,
                  project: e.project,
                  script: e.script,
                  line: e.line,
                  clientTime: e.clientTime,
                  loggingSource: e.loggingSource,
                  windowLocationURL: e.windowLocationURL,
                  extensionFrames: t,
                };
              });
          } catch (e) {
            return [];
          }
        }
        function Ue(e, t) {
          const i = window.URL.createObjectURL(e),
            n = document.createElement("a");
          ((n.style.display = "none"),
            (n.href = i),
            (n.download = t),
            document.body.appendChild(n),
            n.click(),
            window.URL.revokeObjectURL(i));
        }
        function Ve(t) {
          const {
            title: n = "Click to see how to use this feature",
            bold: s = !0,
          } = t;
          function o() {
            window.open(`https://github.com/shahriar-ahmed-seam/Stashly${t.linkPath}`, "_blank");
          }
          return i.jsxs("span", {
            style: { lineHeight: 1, paddingBottom: 4 },
            children: [
              s ? i.jsx("b", { children: t.children }) : t.children,
              t.linkPath &&
                i.jsx(e.Tooltip, {
                  title: n,
                  children: i.jsx("span", {
                    style: { cursor: "pointer" },
                    onClick: o,
                    children: "❓",
                  }),
                }),
            ],
          });
        }
        class ze {
          constructor(e, t) {
            this.slug = e;
          }
          on() {
            return () => {};
          }
          async send(action, ...payload) {
            return new Promise((resolve, reject) => {
              chrome.runtime.sendMessage({ action, payload }, (r) => {
                if (!chrome.runtime.lastError && r) {
                  if (r.status === "success") resolve(r.result);
                  else if (r.status === "error")
                    reject(new Error(r.errorMessage));
                  else resolve(undefined);
                } else resolve(undefined);
              });
            });
          }
          connect() {}
          disconnect() {}
        }
        function $e(e) {
          const t = new TextEncoder().encode(e);
          return Array.from(t);
        }
        function He(e) {
          const t = new TextDecoder(),
            i = new Uint8Array(e);
          return t.decode(i);
        }
        function We(e) {
          const t = [];
          for (let i = 0; i < e.length; i += 2)
            t.push(parseInt(e.substr(i, 2), 16));
          return t;
        }
        function Ge(e, t) {
          const i = $e(e),
            n = [];
          for (let s = 0; s < t; s++) n.push(i[s % i.length]);
          return n;
        }
        function Ye(e, t) {
          const i = We(atob(e)),
            n = Ge(t, i.length),
            s = [];
          for (let o = 0; o < i.length; o++) s.push(i[o] ^ n[o]);
          return He(s);
        }
        function Ke(e, t = 5e3) {
          return new Promise(async (i, n) => {
            const s = Date.now();
            async function o() {
              try {
                if (await e()) return void i();
              } catch (a) {}
              Date.now() - s >= t
                ? n(new Error("waitUtil timeout"))
                : requestAnimationFrame(o);
            }
            o();
          });
        }
        const Qe = 15e3,
          et = "graphql_config_cache_",
          tt = { maxRetries: 3, retryDelay: 1e3 },
          it = "Comet",
          nt = "Bootloader",
          st = "RelayEF",
          ot = "__debug",
          at = "RouterUrl";
        function rt(e, t = []) {
          return {
            level: "error",
            errorMessage: e,
            tags: { scope: "graphql_load" },
            extras: { pageLink: window.location.href },
            context: t,
          };
        }
        const lt = (e) => new Promise((t) => setTimeout(t, e));
        function dt(e, t) {
          const i = `${t}.graphql`;
          if (wt(i))
            try {
              const t = mt(i);
              if (t && t?.params?.providedVariables) {
                const i = Object.keys(t.params.providedVariables);
                Object.keys(e).forEach((t) => {
                  t.startsWith("__relay_internal") && delete e[t];
                });
                for (const n of i)
                  n.startsWith("__relay_internal") &&
                    (e[n] =
                      !!t.params.providedVariables[n]?.get &&
                      t.params.providedVariables[n]?.get());
              }
            } catch (n) {
              console.error(n);
            }
          return e;
        }
        async function ut(e, t, i) {
          const n = `${et}${e}`;
          if (window[n]) return window[n];
          const s = await ht(
            { queryName: e, variables: {}, docId: "", preload: [] },
            t,
            i,
          );
          if (!s.docId)
            throw new Error("FB Downloader: Could not resolve doc_id for " + e);
          return ((window[n] = s), s);
        }
        function ct(e, t, i = !1) {
          if (!Array.isArray(e) || !t) return;
          const s = i ? [...e].reverse() : e;
          for (const o of s) {
            const e = n.get(o, t);
            if (void 0 !== e) return e;
          }
        }
        async function ht(e, t, i) {
          if (wt(`${e.queryName}.graphql`)) {
            const t = mt(`${e.queryName}.graphql`);
            if (t?.params?.id) return { ...e, docId: t.params.id };
          }
          if (!e.preload || 0 === e.preload.length) return e;
          for (const o of e.preload) {
            const n = Array.isArray(o) ? o : [o];
            try {
              const s = await Promise.all(
                n.map(
                  (i) =>
                    new Promise((n, s) => {
                      "Bootloader" === i.loader
                        ? gt(i.args, i.timeout).then(n).catch(s)
                        : "preloadRouteCode" === i.loader
                          ? ft(
                              i.args[0],
                              i.waitFor || `${e.queryName}.graphql`,
                              i.timeout,
                              t,
                            )
                              .then(n)
                              .catch(s)
                          : "entrypoint" === i.loader &&
                            pt(
                              i.args[0],
                              i.waitFor || `${e.queryName}.graphql`,
                              i.timeout,
                            )
                              .then(n)
                              .catch(s);
                    }),
                ),
              );
              if (1 === n.length) {
                if (!1 === s[0])
                  return (
                    i(
                      rt("加载本地模块失败", [
                        [
                          "preloadConfig",
                          {
                            currentPreload: o,
                            preload: e.preload,
                            queryName: e.queryName,
                          },
                        ],
                      ]),
                    ),
                    e
                  );
              } else if (!s.find((e) => !0 === e))
                return (
                  i(
                    rt("加载本地模块失败", [
                      [
                        "preloadConfig",
                        {
                          currentPreload: o,
                          preload: e.preload,
                          queryName: e.queryName,
                        },
                      ],
                    ]),
                  ),
                  e
                );
            } catch (s) {
              const t = s instanceof Error ? s.message : String(s);
              return (
                i(
                  rt("加载本地模块失败", [
                    [
                      "preloadConfig",
                      {
                        currentPreload: o,
                        preload: e.preload,
                        queryName: e.queryName,
                      },
                    ],
                    ["errors", { errorString: t }],
                  ]),
                ),
                e
              );
            }
          }
          const n = mt(`${e.queryName}.graphql`);
          return n?.params?.id ? { ...e, docId: n.params.id } : e;
        }
        async function gt(e, t = 5e3) {
          return new Promise((i) => {
            const n = setTimeout(() => {
              i(!1);
            }, t);
            window.___xf(nt).loadModules(e, () => {
              (clearTimeout(n), i(!0));
            });
          });
        }
        async function pt(e, t, i = 5e3) {
          try {
            return (
              window
                .___xf(it + st)
                .fetchPredictedResources(window.require(e), {
                  routeParams: {},
                  routeProps: {},
                }),
              await Ke(() => wt(t), i),
              !0
            );
          } catch (n) {
            return !1;
          }
        }
        async function ft(e, t, i = 5e3, n) {
          try {
            if (await wt(t)) return !0;
          } catch (s) {}
          try {
            return (
              (e = window.___xf("normalize" + it + at)(e)),
              n.preloadRouteCode(e),
              await Ke(() => wt(t), i),
              !0
            );
          } catch (s) {
            return !1;
          }
        }
        function mt(e) {
          const t = window.___xf(ot).modulesMap[e];
          if (!t) throw new Error(`Module ${e} is not loaded`);
          const i = "require";
          return t.exports ? t.exports : window[i](e);
        }
        function wt(e) {
          return !!window.___xf(ot).modulesMap[e];
        }
        const yt = "PolarisConfig",
          xt = "createRelayChunkedResponseParser",
          vt = "WebBloksVersioningID",
          _t = "WebPixelRatio",
          bt = "XHRRequest",
          Tt = "RelayGraphQLRequestUtils";
        async function Ct(e, t, i, n) {
          const { graphqlName: s, afterArgs: o, skipLabelData: a = !1 } = e;
          try {
            const e = await ut(s, t, n);
            let r = o(e.variables);
            (r.scale || (r.scale = window.___xf(_t).get()), (r = dt(r, s)));
            const { docId: l } = e;
            let d = 0,
              u = !1;
            return new Promise((e, t) => {
              const n = {
                fb_api_req_friendly_name: s,
                variables: JSON.stringify(r),
                doc_id: l,
              };
              try {
                const o = window.___xf(bt),
                  r = window.___xf("getAsyncParams")("POST"),
                  l = window.___xf("RelayAPIConfig"),
                  c = window.___xf(xt),
                  h = window.___xf(Tt)?.parsePayload;
                if (!(o && r && l && c && h))
                  throw new Error("Required dependencies are not available");
                const g = [];
                let p = 0;
                const f = new o(i ? "/graphql/query/" : "/api/graphql/"),
                  m = l.actorID;
                f.setMethod("POST")
                  .setData({
                    av: m,
                    ...r,
                    fb_api_caller_class: "RelayModern",
                    server_timestamps: !0,
                    ...n,
                  })
                  .setErrorHandler((e) => {
                    const i = [e.errorCode, e.errorType, e.errorMsg]
                      .filter(Boolean)
                      .join(" ");
                    (Re("graphqlRequest 1", i, n),
                      t(new Error(`graphql request error [${s}]: ${i}`)));
                  })
                  .setResponseHandler(
                    c((i) => {
                      try {
                        for (const o of i) {
                          const i = h(o.responseText);
                          if (i?.errors && 0 === p) {
                            const e =
                              i.errors.find((e) => "CRITICAL" === e.severity) ||
                              i.errors[0];
                            if (e) {
                              const i = [e.code, e.message, e.description]
                                .filter(Boolean)
                                .join("  ");
                              if ("CRITICAL" === e.severity)
                                return (
                                  Re("graphqlRequest 2", i, n),
                                  t(
                                    new Error(
                                      `graphql request error [${s}]: ${i}`,
                                    ),
                                  )
                                );
                              console.warn(
                                `graphql request warning [${s}]: ${i}`,
                              );
                            }
                          }
                          if ((g.push(i), a || o.isComplete))
                            return ((u = !0), void e(g));
                          (p++,
                            window.clearTimeout(d),
                            (d = setTimeout(() => {
                              u ||
                                (console.log("complete/next stuck"),
                                (u = !0),
                                e(g));
                            }, Qe)));
                        }
                      } catch (o) {
                        const e = o instanceof Error ? Ne(o) : String(o);
                        (Re("graphqlRequest 3", e, n),
                          t(
                            new Error(
                              `graphql request parser error [${s}]: ${e}`,
                            ),
                          ));
                      }
                    }),
                  )
                  .setTimeout(3e4)
                  .setTimeoutHandler(() => {
                    t(new Error(`graphql request timeout [${s}]`));
                  });
                const w = {
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-FB-Friendly-Name": s,
                };
                (i &&
                  ((w["X-BLOKS-VERSION-ID"] = window.___xf(vt).versioningID),
                  (w["X-CSRFToken"] = window.___xf(yt).getCSRFToken()),
                  (w["X-IG-App-ID"] = window.___xf(yt).getIGAppID())),
                  Object.entries(w).forEach(([e, t]) => {
                    f.setRequestHeader(e, t);
                  }),
                  f.send());
              } catch (o) {
                const e = o instanceof Error ? Ne(o) : String(o);
                (Re("graphqlRequest 4", e, n),
                  t(new Error(`graphql request unknown error [${s}]: ${e}`)));
              }
            });
          } catch (r) {
            const e = r instanceof Error ? Ne(r) : String(r);
            throw new Error(`graphql config error [${s}]: ${e}`);
          }
        }
        async function Dt(e, t, i, n, s = tt) {
          const { maxRetries: o, retryDelay: a } = s;
          let r = null;
          for (let d = 0; d <= o; d++)
            try {
              if (d > 0) {
                const t = a * Math.pow(2, d - 1);
                (console.warn(
                  `Retrying GraphQL request [${e.graphqlName}], attempt ${d} of ${o}`,
                ),
                  await lt(t));
              }
              return await Ct(e, t, i, n);
            } catch (l) {
              if (
                ((r = l instanceof Error ? l : new Error(String(l))), d === o)
              )
                throw (
                  console.error(
                    `GraphQL request failed after ${o} retries:`,
                    r,
                  ),
                  r
                );
            }
          throw r || new Error("Unknown error occurred");
        }
        const Ft = "useCometRouterDispatcher";
        function At(e) {
          const { projectId: i } = e,
            n = !!window.location.host.includes("instagram"),
            s = window.___xf(Ft)(),
            o = t.useMemo(() => {
              let e = !1;
              return (
                ~window.location.search.indexOf("debug") && (e = !0),
                (e = !window[i] || !window[i].isProdMode),
                new ze(i, e)
              );
            }, [i]);
          return {
            graphqlRequest: async function (e, t = tt) {
              return Dt(
                e,
                s,
                n,
                (e) => {
                  o.send("sentry", e);
                },
                t,
              );
            },
            findValueFromLoadQueryData: ct,
          };
        }
        function Et(e) {
          const t = new URL(e).pathname,
            i = t.lastIndexOf("/");
          return t.substring(i + 1);
        }
        function St(e, t) {
          let i = String(t);
          if (i.length >= e) return i;
          let n = e - i.length;
          for (let s = 0; s < n; s++) i = "0" + i;
          return i;
        }
        function kt(e) {
          return new Promise((t) => {
            setTimeout(() => {
              t();
            }, 1e3 * e);
          });
        }
        function jt(e) {
          let t = e.lastIndexOf(".");
          return -1 !== t ? e.slice(0, t) : e;
        }
        function It() {
          window.downloadedFilenameCountMap = {};
        }
        var Ot = ((e) => (
          (e.INDEX = "index"),
          (e.DATE = "date"),
          (e.TIME = "time"),
          (e.TIMESTAMP = "timestamp"),
          (e.FILE_ID = "file id"),
          (e.USER_ID = "user id"),
          (e.USERNAME = "username"),
          (e.ORIGINAL_NAME = "original name"),
          (e._0Index = "0index"),
          (e._00Index = "00index"),
          (e._000Index = "000index"),
          (e.DATE_US = "date us"),
          (e.YEARS = "years"),
          (e.MONTHs = "months"),
          (e.DAYs = "days"),
          (e.HOURS = "hours"),
          (e.MINUTES = "minutes"),
          (e.SECONDS = "seconds"),
          e
        ))(Ot || {});
        const Nt = [
            { value: "index", transformer: (e) => String(e.index) },
            {
              value: "date",
              transformer: (e) =>
                s.unix(e.createdAt).format("YYYY_MM_DD__HH_mm_ss"),
            },
            {
              value: "time",
              transformer: (e) => s.unix(e.createdAt).format("HH_mm_ss"),
            },
            { value: "timestamp", transformer: (e) => String(e.createdAt) },
            { value: "file id", transformer: (e) => String(e.id) },
            { value: "user id", transformer: (e) => String(e.userId) },
            { value: "username", transformer: (e) => String(e.userName) },
            { value: "original name", transformer: (e) => jt(Et(e.uri)) },
            { value: "0index", transformer: (e) => St(2, e.index) },
            { value: "00index", transformer: (e) => St(3, e.index) },
            { value: "000index", transformer: (e) => St(4, e.index) },
            {
              value: "date us",
              transformer: (e) => s.unix(e.createdAt).format("MM/DD/YYYY"),
            },
            {
              value: "years",
              transformer: (e) => s.unix(e.createdAt).format("YYYY"),
            },
            {
              value: "months",
              transformer: (e) => s.unix(e.createdAt).format("MM"),
            },
            {
              value: "days",
              transformer: (e) => s.unix(e.createdAt).format("DD"),
            },
            {
              value: "hours",
              transformer: (e) => s.unix(e.createdAt).format("HH"),
            },
            {
              value: "minutes",
              transformer: (e) => s.unix(e.createdAt).format("mm"),
            },
            {
              value: "seconds",
              transformer: (e) => s.unix(e.createdAt).format("ss"),
            },
          ],
          Mt = [
            "-**original name**-",
            "-**index**-_-**date**-",
            "-**date**-",
            "-**timestamp**-",
            "-**username**-_-**date**-",
            "-**file id**-_-**date**-",
            "-**username**-_-**timestamp**-",
          ],
          Bt = [
            `-**${Ot.USERNAME}**-`,
            `-**${Ot.YEARS}**---**${Ot.MONTHs}**---**${Ot.DAYs}**-`,
          ];
        var Rt = ((e) => (
            (e.ORIGINAL = "none"),
            (e.PNG = "image/png"),
            (e.JPG = "image/jpeg"),
            (e.WEBP = "image/webp"),
            e
          ))(Rt || {}),
          Lt = ((e) => (
            (e[(e.ALL = 0)] = "ALL"),
            (e[(e.BY_PHOTOS_COUNT = 1)] = "BY_PHOTOS_COUNT"),
            (e[(e.BY_DAYS_COUNT = 2)] = "BY_DAYS_COUNT"),
            e
          ))(Lt || {}),
          Pt = ((e) => (
            (e.CAROUSEL_DOWNLOADER = "carouselDownloader"),
            (e.FETCH_LIMIT = "fetchLimit"),
            (e.IMAGES_FORMAT_AS = "imagesFormatAs"),
            (e.FOLDER_NAME_RULE = "folderNameRule"),
            (e.FILENAME_FORMATS = "fileNameFormats"),
            (e.RESUME_DOWNLOADING = "resumeDownloading"),
            (e.SKIP_DOWNLOADED_FILES = "skipDownloadedFiles"),
            (e.DOWNLOAD_CAPTION = "downloadCaption"),
            e
          ))(Pt || {});
        const qt = {
          isSkipDownloadedFile: !1,
          isFullSpeed: !1,
          isGenFolder: !1,
          fileFormatAs: Rt.ORIGINAL,
          fileNameFormatRule: Mt[0],
          requestDelay: 0,
          folderNameRule: Bt[0],
          fetchingCountType: Lt.ALL,
          fetchingCountByPhotosCountValue: 10,
          fetchingCountByPhotosDaysValue: 3,
          downloadCaption: !1,
        };
        var Ut,
          Vt =
            (((Ut = Vt || {})[(Ut.FREE = 0)] = "FREE"),
            (Ut[(Ut.BASIC = 1)] = "BASIC"),
            (Ut[(Ut.PREMIUM = 2)] = "PREMIUM"),
            Ut),
          zt = ((e) => (
            (e[(e.SUBSCRIPTION = 0)] = "SUBSCRIPTION"),
            (e[(e.ONETIME_PAYMENT = 1)] = "ONETIME_PAYMENT"),
            e
          ))(zt || {}),
          $t = ((e) => (
            (e[(e.ONE_MONTH = 1)] = "ONE_MONTH"),
            (e[(e.THREE_MONTH = 3)] = "THREE_MONTH"),
            (e[(e.SIX_MONTH = 6)] = "SIX_MONTH"),
            (e[(e.A_YEAR = 12)] = "A_YEAR"),
            e
          ))($t || {}),
          Ht = ((e) => (
            (e[(e.STRIPE = 0)] = "STRIPE"),
            (e[(e.PAYPAL = 1)] = "PAYPAL"),
            e
          ))(Ht || {}),
          Wt = ((e) => (
            (e[(e.FACEBOOK = 0)] = "FACEBOOK"),
            (e[(e.INSTAGRAM = 1)] = "INSTAGRAM"),
            e
          ))(Wt || {}),
          Gt = ((e) => (
            (e.SUBSCRIPTION = "paypal_subscription"),
            (e.PAYMENT = "paypal_payment"),
            e
          ))(Gt || {}),
          Yt = ((e) => (
            (e.RETURN_PAGE = "RETURN_PAGE"),
            (e.RETURN_EXT = "RETURN_EXT"),
            (e.RETURN_EXT_LOCAL = "RETURN_EXT_LOCAL"),
            e
          ))(Yt || {});
        function Kt(n) {
          const { onGetMemoSettings: a, messageInstance: s } = n;
          t.useEffect(() => {
            s.send("getUIMemoSettings").then((e) => {
              e && a(e);
            });
          }, []);
          return {
            checkIfCanUseWithModal: () => Promise.resolve(!0),
            setUIMemoSettings: async (e) => s.send("setUIMemoSettings", e),
            getFeatureLimitProcessTimeValue: (e) => e.currentValue,
            checkIfCanUse: () => !0,
            getUIMemoSettings: async () => s.send("getUIMemoSettings"),
          };
        }
        const Qt = t.createContext(null);
        function Xt(t) {
          const [n, s] = e.message.useMessage(),
            [o, a] = e.Modal.useModal();
          return i.jsxs(Qt.Provider, {
            value: { messageApi: n, modalApi: o },
            children: [s, a, t.children],
          });
        }
        class Jt extends ze {}
        function Zt() {
          return false;
        }
        let ti = new Jt(r, false);
        function ii() {
          return ti;
        }
        const ni = t.createContext(null);
        function si(e) {
          const { modalApi: n, messageApi: s } = t.useContext(Qt),
            [o, a] = t.useState(qt.isSkipDownloadedFile),
            [l, d] = t.useState(qt.isFullSpeed),
            [u, c] = t.useState(qt.isGenFolder),
            [h, g] = t.useState(qt.fileFormatAs),
            [p, f] = t.useState(qt.fileNameFormatRule),
            [m, w] = t.useState(qt.folderNameRule),
            [y, x] = t.useState(qt.requestDelay),
            [v, _] = t.useState(qt.downloadCaption),
            [b, T] = t.useState(Lt.ALL),
            [C, D] = t.useState(qt.fetchingCountByPhotosCountValue),
            [F, A] = t.useState(qt.fetchingCountByPhotosDaysValue),
            E = t.useMemo(
              () =>
                0 === window.download_albums_for_facebook.fetchLimit.limitation
                  ? 9 ** 9
                  : window.download_albums_for_facebook.fetchLimit.limitation,
              [],
            ),
            {
              setUIMemoSettings: S,
              checkIfCanUseWithModal: k,
              getFeatureLimitProcessTimeValue: j,
            } = Kt({
              projectId: r,
              modalApi: n,
              messageInstance: ii(),
              defaultMemoConfig: qt,
              onGetMemoSettings(e) {
                (d(e.isFullSpeed),
                  a(e.isSkipDownloadedFile),
                  c(e.isGenFolder),
                  x(e.requestDelay),
                  f(e.fileNameFormatRule),
                  g(e.fileFormatAs),
                  w(e.folderNameRule),
                  T(e.fetchingCountType),
                  D(e.fetchingCountByPhotosCountValue),
                  A(e.fetchingCountByPhotosDaysValue),
                  _(e.downloadCaption));
              },
            }),
            I = t.useCallback(() => {
              S({
                isSkipDownloadedFile: o,
                isFullSpeed: l,
                isGenFolder: u,
                fileFormatAs: h,
                fileNameFormatRule: p,
                requestDelay: y,
                folderNameRule: m,
                fetchingCountType: b,
                fetchingCountByPhotosCountValue: C,
                fetchingCountByPhotosDaysValue: F,
                downloadCaption: v,
              });
            }, [o, l, u, h, p, m, y, b, C, F, v]);
          async function O(e) {
            const t = `${r}-disclaimer`,
              s = 1 === (await ii().send("getPersistLocalStorage", t, 0));
            e && !s
              ? n.confirm({
                  content: i.jsxs("div", {
                    children: [
                      "FullSpeed option will cause frequent API requests, you",
                      " ",
                      i.jsx("b", { children: "have to" }),
                      " agree our",
                      " ",
                      i.jsx("a", {
                        target: "_blank",
                        style: { color: "#385898" },
                        href: "https://github.com/shahriar-ahmed-seam/Stashly/blob/main/PRIVACY.md",
                        children: "Disclaimer",
                      }),
                      i.jsx("span", {
                        className: "disclaimer-level level1",
                        style: {
                          margin: "0 4px",
                          display: "inline-block",
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          border: "1px solid rgba(0, 0, 0, 0.175)",
                          background: "#52c41a",
                          backgroundColor: "#52c31a",
                        },
                      }),
                      " ",
                      "to turn on this option",
                    ],
                  }),
                  okText: "AGREE",
                  onOk: () => {
                    (ii().send("setPersistLocalStorage", t, 1), d(!0));
                  },
                })
              : d(e);
          }
          async function N(e) {
            (await k(Pt.IMAGES_FORMAT_AS, e, "photos")) && g(e);
          }
          async function M(e) {
            (await k(Pt.FILENAME_FORMATS, Te(e), "photos")) && f(e);
          }
          async function B(e) {
            (await k(Pt.SKIP_DOWNLOADED_FILES, e, "photos")) && a(e);
          }
          async function R(e) {
            (await k(Pt.FOLDER_NAME_RULE, e, "photos")) && w(e);
          }
          async function L(e) {
            (await k(Pt.DOWNLOAD_CAPTION, e, "photos")) && _(e);
          }
          return i.jsx(ni.Provider, {
            value: {
              fetchLimit: E,
              isSkipDownloadedFile: o,
              isFullSpeed: l,
              isGenFolder: u,
              fileFormatAs: h,
              fileNameFormatRule: p,
              requestDelay: y,
              folderNameRule: m,
              fetchingCountType: b,
              fetchingCountByPhotosCountValue: C,
              fetchingCountByPhotosDaysValue: F,
              downloadCaption: v,
              setIsGenFolder: c,
              setIsFullSpeed: O,
              setFileFormatAs: N,
              setFileNameFormatRule: M,
              setIsSkipDownloadedFile: B,
              setFolderNameRule: R,
              setDownloadCaption: L,
              setRequestDelay: x,
              setFetchingCountType(e) {
                (e === Lt.BY_DAYS_COUNT && A(qt.fetchingCountByPhotosDaysValue),
                  e === Lt.BY_PHOTOS_COUNT &&
                    D(qt.fetchingCountByPhotosCountValue),
                  e === Lt.ALL &&
                    (D(qt.fetchingCountByPhotosCountValue),
                    A(qt.fetchingCountByPhotosDaysValue)),
                  T(e));
              },
              setFetchingCountByPhotosCountValue: D,
              setFetchingCountByPhotosDaysValue: A,
              checkIfCanUseWithModal: k,
              getFeatureLimitProcessTimeValue: j,
              saveMemoSettings: I,
            },
            children: e.children,
          });
        }
        var oi = ((e) => (
          (e[(e.START = 0)] = "START"),
          (e[(e.DOWNLOADING = 1)] = "DOWNLOADING"),
          (e[(e.DONE = 2)] = "DONE"),
          e
        ))(oi || {});
        const ai = t.createContext(null);
        function ri(e) {
          const n = t.useRef(!0),
            s = t.useRef([]),
            o = t.useRef(0),
            a = t.useRef(0),
            r = t.useRef(!1),
            l = t.useRef(null),
            d = t.useRef(!1),
            u = t.useRef(0),
            [c, h] = t.useState(0),
            [g, p] = t.useState(!1),
            [f, m] = t.useState(0);
          function w() {
            ((n.current = !0),
              (a.current = 0),
              (r.current = !1),
              (o.current = 0),
              (u.current = 0),
              (l.current = null),
              (d.current = !1),
              It(),
              (window.folderHandlerCacheMap = {}),
              m(0),
              x([]),
              y());
          }
          t.useEffect(() => {
            !g && w();
          }, [g]);
          const y = (e) => {
            if (e)
              return setTimeout(() => {
                h(Math.random);
              }, 600);
            h(Math.random);
          };
          function x(e) {
            ((s.current = e), y());
          }
          function v(e) {
            ((s.current = s.current.concat(e)), y());
          }
          function _(e, t) {
            const i = s.current.find((t) => t.id === e);
            i && ((i.status = t), y());
          }
          function b() {
            x([]);
          }
          function T(e) {
            ((u.current = e), y());
          }
          function C(e) {
            ((a.current = e), y());
          }
          function D(e) {
            ((r.current = e), y());
          }
          return i.jsx(ai.Provider, {
            value: {
              open: g,
              setOpen: p,
              isStopManually: n,
              photosArrRef: s,
              downloadCountRef: o,
              avoidAccountRestrictMSRef: a,
              setAvoidAccountRestrictMSRef: C,
              isFetchingNextPageRef: r,
              setIsFetchingNextPageRef: D,
              resumeDownloadPayload: l,
              isOnLimit: d,
              requestDelayMsRef: u,
              setRequestDelayMsRef: T,
              setPhotos: x,
              appendPhotos: v,
              setPhotoStatus: _,
              clearPhotos: b,
              setStep: m,
              step: f,
              resetStatus: w,
              updateUI: y,
            },
            children: e.children,
          });
        }
        function li() {
          const {
              fetchingCountType: n,
              fetchingCountByPhotosCountValue: s,
              fetchingCountByPhotosDaysValue: o,
              setFetchingCountType: a,
              setFetchingCountByPhotosDaysValue: r,
              setFetchingCountByPhotosCountValue: l,
            } = t.useContext(ni),
            { open: d } = t.useContext(ai);
          return i.jsxs(e.Card, {
            title: "Photos fetch quantity control",
            size: "small",
            style: { marginTop: 12, width: "100%" },
            children: [
              i.jsxs(e.Radio.Group, {
                onChange: (e) => a(e.target.value),
                value: n,
                size: "small",
                children: [
                  i.jsx(e.Radio, { value: Lt.ALL, children: "Fetch ALL" }),
                  i.jsx(e.Radio, {
                    value: Lt.BY_PHOTOS_COUNT,
                    children: "By photos count",
                  }),
                  i.jsx(e.Radio, {
                    value: Lt.BY_DAYS_COUNT,
                    children: "By days count",
                  }),
                ],
              }),
              n !== Lt.ALL && i.jsx(e.Divider, { style: { margin: "8px 0" } }),
              n === Lt.BY_PHOTOS_COUNT &&
                i.jsxs(e.Space, {
                  children: [
                    i.jsx("span", { children: "Numbers of photos to fetch:" }),
                    i.jsx(e.Slider, {
                      min: 1,
                      max: 1e3,
                      step: 1,
                      value: s,
                      onChange: (e) => l(e),
                      style: { width: 400 },
                    }),
                    i.jsx("span", { children: s }),
                  ],
                }),
              n === Lt.BY_DAYS_COUNT &&
                i.jsxs(e.Space, {
                  children: [
                    i.jsx("span", { children: "Days back to fetch:" }),
                    i.jsx(e.Slider, {
                      min: 1,
                      max: 180,
                      value: o,
                      onChange: (e) => r(e),
                      style: { width: 200 },
                    }),
                    i.jsx("span", { children: o }),
                  ],
                }),
            ],
          });
        }
        const di = "CometDarkMode",
          ui = {
            id: "442315268221",
            createdAt: 1695526699,
            index: 8,
            uri: "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/345242088_283736111641893782_n.jpg",
            userName: "Stashly",
          };
        function ci(n) {
          const { isHideQuantityCount: s = !1 } = n,
            {
              isSkipDownloadedFile: a,
              isFullSpeed: r,
              isGenFolder: l,
              requestDelay: d,
              fileFormatAs: u,
              fileNameFormatRule: c,
              folderNameRule: h,
              downloadCaption: g,
              setFolderNameRule: p,
              setFileNameFormatRule: f,
              setFileFormatAs: m,
              setRequestDelay: w,
              setIsSkipDownloadedFile: y,
              setIsFullSpeed: x,
              setIsGenFolder: v,
              setDownloadCaption: _,
            } = t.useContext(ni),
            b = "ENABLED" === window.___xf(di).getDarkModeSetting();
          return i.jsxs(e.Space, {
            direction: "vertical",
            size: 24,
            style: { width: "100%" },
            children: [
              i.jsx(hi, { children: "Options:" }),
              i.jsxs(e.Space, {
                direction: "horizontal",
                size: [12, 12],
                wrap: !0,
                style: { whiteSpace: "nowrap" },
                children: [
                  i.jsx(e.Checkbox, {
                    checked: r,
                    onChange: (e) => x(e.target.checked),
                    children: i.jsx(Ve, {
                      title:
                        "Download at full speed like a robot, click to see how to avoid account restrictions.",
                      linkPath:
                        "/download-albums-for-facebook/how-to-avoid-account-restriction.html",
                      children: "⚡️Full Speed!",
                    }),
                  }),
                  i.jsx(e.Checkbox, {
                    checked: a,
                    onChange: (e) => y(e.target.checked),
                    children: i.jsx(e.Tooltip, {
                      title:
                        "If the file has already been downloaded before, it will be skipped to reduce network load.",
                      placement: "top",
                      children: i.jsx("span", {
                        children: "🔍Skip Downloaded files",
                      }),
                    }),
                  }),
                  i.jsx(e.Checkbox, {
                    checked: l,
                    onChange: (e) => v(e.target.checked),
                    children: i.jsx(e.Tooltip, {
                      title:
                        "Automatically download images into folders based on the author/group name.",
                      placement: "top",
                      children: i.jsx("span", { children: "📁Gen-Folder" }),
                    }),
                  }),
                  i.jsx(e.Checkbox, {
                    checked: g,
                    onChange: (e) => _(e.target.checked),
                    children: i.jsx(e.Tooltip, {
                      title:
                        "Download photo caption into a separate text file.",
                      placement: "top",
                      children: i.jsx("span", {
                        children: "📝Download Caption",
                      }),
                    }),
                  }),
                ],
              }),
              i.jsxs(e.Row, {
                gutter: 12,
                style: { width: "100%" },
                children: [
                  i.jsx(e.Col, {
                    span: 12,
                    children: i.jsxs("div", {
                      children: [
                        i.jsxs("p", {
                          style: {
                            paddingBottom: 4,
                            marginBottom: 0,
                            marginTop: 0,
                          },
                          children: [
                            i.jsx(Ve, {
                              title:
                                "Click to see how to avoid account restrictions.",
                              linkPath:
                                "/download-albums-for-facebook/how-to-avoid-account-restriction.html",
                              children: "⏱️Request Delay",
                            }),
                            i.jsx(e.Tooltip, {
                              title:
                                "If the FullSpeed option is disabled and you still find the requests too fast, you can set a delay time for each request.",
                              children: i.jsx(e.Button, {
                                type: "link",
                                size: "small",
                                icon: i.jsx(o.QuestionCircleOutlined, {}),
                              }),
                            }),
                            " ",
                            ":",
                          ],
                        }),
                        i.jsx(e.Tooltip, {
                          title: r
                            ? 'This feature does not work when the "⚡️FullSpeed" is enabled.'
                            : "",
                          children: i.jsx(e.InputNumber, {
                            onChange: (e) => w(e ?? 0),
                            value: d,
                            max: 30,
                            min: 0,
                            step: 0.1,
                            style: { width: 150 },
                            addonAfter: "seconds",
                            disabled: r,
                          }),
                        }),
                      ],
                    }),
                  }),
                  i.jsx(e.Col, {
                    span: 12,
                    children: i.jsxs("div", {
                      children: [
                        i.jsxs("p", {
                          style: {
                            paddingBottom: 4,
                            marginBottom: 0,
                            marginTop: 0,
                          },
                          children: ["Images Format as:", " "],
                        }),
                        i.jsx(e.Segmented, {
                          value: u,
                          options: [
                            { label: "original", value: Rt.ORIGINAL },
                            { label: "jpg", value: Rt.JPG },
                            { label: "png", value: Rt.PNG },
                            { label: "webp", value: Rt.WEBP },
                          ],
                          onChange: (e) => m(e),
                        }),
                        u === Rt.PNG &&
                          i.jsx("div", {
                            style: { paddingTop: 4, fontSize: 12 },
                            children:
                              "⚠️ Notice: PNG format will result in larger file sizes.",
                          }),
                      ],
                    }),
                  }),
                  i.jsx(e.Col, {
                    span: 12,
                    children: i.jsxs("div", {
                      children: [
                        i.jsxs("p", {
                          style: {
                            paddingBottom: 4,
                            marginBottom: 0,
                            marginTop: 24,
                          },
                          children: [
                            i.jsx(Ve, {
                              title: "Click to see how to use this features",
                              linkPath:
                                "/download-albums-for-facebook/how-to-use-mixin-filenaming-system.html",
                              children: "File naming rules",
                            }),
                            ,
                            ":",
                            " ",
                          ],
                        }),
                        i.jsx(ke, {
                          rule: c,
                          ext: ".jpg",
                          theme: b ? "dark" : "light",
                          fields: Nt,
                          presets: Mt,
                          exampleData: ui,
                          onUpdate: (e) => {
                            f(e);
                          },
                        }),
                      ],
                    }),
                  }),
                  l &&
                    i.jsx(e.Col, {
                      span: 12,
                      children: i.jsxs("div", {
                        children: [
                          i.jsxs("p", {
                            style: {
                              paddingBottom: 4,
                              marginBottom: 0,
                              marginTop: 24,
                            },
                            children: [
                              "Folder naming rules",
                              !0 ===
                                window.download_albums_for_facebook[
                                  Pt.FOLDER_NAME_RULE
                                ]?.needUpgrade &&
                                i.jsx(e.Tooltip, {
                                  title:
                                    "This feature is available for the free version and can only process the first 50 images.",
                                  children: i.jsx(e.Button, {
                                    type: "link",
                                    size: "small",
                                    icon: i.jsx(o.QuestionCircleOutlined, {}),
                                  }),
                                }),
                              ":",
                              " ",
                            ],
                          }),
                          i.jsx(ke, {
                            rule: h,
                            ext: "",
                            theme: b ? "dark" : "light",
                            fields: Nt,
                            presets: Bt,
                            exampleData: ui,
                            onUpdate: (e) => {
                              p(e);
                            },
                          }),
                        ],
                      }),
                    }),
                  !s && i.jsx(li, {}),
                ],
              }),
            ],
          });
        }
        function hi(e) {
          return i.jsx("p", {
            style: { marginBottom: -22, marginTop: 0 },
            children: e.children,
          });
        }
        function gi(t) {
          const n = `${t.extLink}/reviews`;
          return i.jsxs("div", {
            style: { color: "inherit", margin: "24px auto 0 auto" },
            children: [
              i.jsx("div", {
                children: " 🙏We greatly appreciate your support! 🙏",
              }),
              i.jsx(e.Rate, {
                onChange: () => {
                  window.open(n, "_blank");
                },
                defaultValue: 5,
              }),
              i.jsx("div", {
                children: i.jsx("a", {
                  href: n,
                  target: "_blank",
                  children:
                    "Help us out with a review for our Chrome extension!",
                }),
              }),
              i.jsx("div", { children: "Your feedback is essential.👍🏼👍🏼👍🏼" }),
            ],
          });
        }
        function pi() {
          return i.jsxs("p", {
            style: { opacity: 0.6 },
            children: [
              "Have issues or 🐛Bug during Download?",
              " ",
              i.jsx("a", {
                href: "https://github.com/shahriar-ahmed-seam/Stashly",
                target: "_blank",
                style: { paddingRight: 8 },
                children: "Give us feedback on Facebook",
              }),
              "and we'll help you fix it!",
            ],
          });
        }
        function fi() {
          return window.showDirectoryPicker
            ? i.jsxs(e.Space, {
                direction: "vertical",
                children: [
                  i.jsx(mi, {}),
                  i.jsxs("p", {
                    style: {
                      color: "var(--secondary-text)",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    },
                    children: [
                      "It Seems",
                      " ",
                      i.jsx("img", {
                        src: window.download_albums_for_facebook_icon,
                        style: {
                          width: 24,
                          height: 24,
                          display: "block",
                          margin: "0 8px",
                        },
                      }),
                      a,
                      " not working right now.",
                      i.jsx("a", {
                        href: "https://github.com/shahriar-ahmed-seam/Stashly",
                        target: "_blank",
                        style: { paddingRight: 8 },
                        children: "Give us feedback on Facebook",
                      }),
                      "and we'll help you fix it!",
                    ],
                  }),
                ],
              })
            : i.jsxs("p", {
                style: {
                  color: "var(--secondary-text)",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "center",
                },
                children: [
                  i.jsx("img", {
                    src: window.download_albums_for_facebook_icon,
                    style: {
                      width: 24,
                      height: 24,
                      display: "block",
                      margin: "0 8px",
                    },
                  }),
                  "fileSystemAPI is not enabled,",
                  " ",
                  i.jsx("a", {
                    href: "https://github.com/brave/brave-browser/issues/18979#issuecomment-956513079",
                    target: "_blank",
                    children: "please click here for details",
                  }),
                  ".",
                ],
              });
        }
        function mi() {
          const t = btoa(encodeURIComponent(window.location.href)),
            [n, s] = e.message.useMessage();
          function o() {
            (navigator.clipboard.writeText(
              btoa(encodeURIComponent(window.location.href)),
            ),
              n.success("Copy successful."));
          }
          return i.jsxs("div", {
            children: [
              s,
              i.jsx(e.Tooltip, {
                title:
                  "Please send this information to the developer for quick bug identification when submit a feedback.",
                children: i.jsxs("div", {
                  style: { color: "var(--secondary-text)" },
                  children: ["CaseID: ", t],
                }),
              }),
              i.jsx(e.Button, { size: "small", onClick: o, children: "Copy" }),
            ],
          });
        }
        function wi() {
          const { downloadCountRef: n } = t.useContext(ai);
          return i.jsx(i.Fragment, {
            children: i.jsx(e.Alert, {
              type: "success",
              message: i.jsxs(e.Space, {
                direction: "vertical",
                size: 12,
                style: { textAlign: "center", width: "100%" },
                children: [
                  i.jsx("p", {
                    style: { fontSize: 24, margin: "8px 0px" },
                    children: "🎉🎉🎉 Download Successful",
                  }),
                  i.jsxs("div", { children: [n.current, " photos"] }),
                  i.jsx(gi, { extLink: l }),
                  i.jsx(pi, {}),
                ],
              }),
            }),
          });
        }
        const yi = "1.1.3";
        function xi() {
          return i.jsxs(e.Space, {
            size: 8,
            children: [
              i.jsx(e.Avatar, {
                src: window.download_albums_for_facebook_icon,
                shape: "square",
              }),
              i.jsxs("span", {
                children: [
                  a,
                  " ",
                  i.jsxs("span", {
                    style: { color: "#999", fontSize: 12 },
                    children: ["v", yi],
                  }),
                  " ",
                  d.length > 0
                    ? i.jsx("a", {
                        href: d,
                        target: "_blank",
                        style: { fontSize: 12, color: "rgb(47, 129, 247)" },
                        children: "what's new?",
                      })
                    : null,
                ],
              }),
              i.jsx("div", {
                style: { marginLeft: 24 },
                children: i.jsx("a", {
                  href: "https://github.com/shahriar-ahmed-seam/Stashly#faq",
                  target: "_blank",
                  style: { fontSize: 12, color: "rgb(47, 129, 247)" },
                  children: "❓FAQ",
                }),
              }),
            ],
          });
        }
        let vi = [];
        function _i() {
          const e = t.useRef([]),
            i = t.useMemo(() => n.throttle(s, 5e3), []);
          function s() {
            (ii().send("appendDownloadedFilesId", vi), (vi = []));
          }
          function o(t) {
            return e.current.includes(t);
          }
          function a(t) {
            e.current.includes(t) ||
              vi.includes(t) ||
              (e.current.push(t), vi.push(t), i());
          }
          return (
            t.useEffect(() => {
              ii()
                .send("getDownloadedFilesId")
                .then((t) => {
                  e.current = t || [];
                });
            }, []),
            {
              isFileIdDownloaded: o,
              appendDownloadedFile: a,
              downloadedFilesId: e,
            }
          );
        }
        const bi = t.createContext(null);
        function Ti(e) {
          const { updateUI: n } = t.useContext(ai),
            {
              isFileIdDownloaded: s,
              appendDownloadedFile: o,
              downloadedFilesId: a,
            } = _i();
          function r() {
            ((a.current = []), ii().send("clearDownloadedFilesId"), n());
          }
          return i.jsx(bi.Provider, {
            value: {
              downloadedFilesId: a,
              isFileIdDownloaded: s,
              appendDownloadedFile: o,
              clearDownloadedFilesIdCache: r,
            },
            children: e.children,
          });
        }
        function Ci() {
          const { clearDownloadedFilesIdCache: n, downloadedFilesId: s } =
              t.useContext(bi),
            { messageApi: a } = t.useContext(Qt);
          function r() {
            (n(), a.success("Cleanup successful."));
          }
          return 0 === s.current.length
            ? i.jsx(i.Fragment, {})
            : i.jsx(e.Tooltip, {
                title: i.jsxs(i.Fragment, {
                  children: [
                    "It has saved ",
                    s.current.length.toLocaleString(),
                    " ",
                    'downloaded image\'s ID (stored in browser), which will be used for the "Skip Downloaded files" feature. Click to clean.',
                  ],
                }),
                children: i.jsx(e.Button, {
                  icon: i.jsx(o.DatabaseOutlined, {}),
                  size: "small",
                  type: "text",
                  onClick: r,
                  children: i.jsx("span", {
                    style: {
                      display: "inline-block",
                      minWidth: 50,
                      textAlign: "left",
                      fontSize: 12,
                    },
                    children: s.current.length.toLocaleString(),
                  }),
                }),
              });
        }
        function Di() {
          const { messageApi: n } = t.useContext(Qt);
          function s() {
            (navigator.clipboard.writeText(
              btoa(encodeURIComponent(window.location.href)),
            ),
              n.success("Copy successful."));
          }
          return i.jsx(e.Tooltip, {
            title:
              "Encountering an issue? Click this icon to copy the Case ID and contact us on Facebook.",
            children: i.jsx(e.Button, {
              type: "text",
              size: "small",
              onClick: s,
              children: "🐛",
            }),
          });
        }
        const Fi = t.createContext(null),
          Ai = t.createContext(null);
        function Ei(e) {
          const { collectionToken: n } = t.useContext(Fi),
            {
              open: s,
              downloadCountRef: o,
              resumeDownloadPayload: a,
            } = t.useContext(ai),
            r = ii(),
            [l, d] = t.useState(null);
          function u(e) {
            if (a.current && a.current?.lastCursor === e) return;
            const t = a.current?.lastIndex ?? 0;
            r.send("setResumeCursor", {
              collectionToken: n,
              lastCursor: e,
              lastIndex: o.current + t,
            });
          }
          function c() {
            n && r.send("removeResumeCursor", n);
          }
          return (
            t.useEffect(() => {
              n &&
                s &&
                r.send("getResumeCursor", n).then((e) => {
                  d(e);
                });
            }, [n, s]),
            i.jsx(Ai.Provider, {
              value: {
                resumeCursor: l,
                updateResumeCursor: u,
                removeResumeCursor: c,
              },
              children: e.children,
            })
          );
        }
        const Si = "photodownloderdirhandler";
        function ki() {
          const { messageApi: e } = t.useContext(Qt);
          function n() {
            return new Promise((e) => {
              try {
                window
                  .showDirectoryPicker({
                    mode: "readwrite",
                    id: r.slice(0, 32),
                    startIn: "downloads",
                  })
                  .then(async (t) => {
                    ((window[Si] = t),
                      await window[Si].requestPermission({ writable: !0 }),
                      e(!0));
                  })
                  .catch((t) => {
                    (console.error(t), o(t), e(!1));
                  });
              } catch (t) {
                (console.error(t), o(t), e(!1));
              }
            });
          }
          function s() {
            if (!window[Si]) throw new Error("DirectoryPicker was undefined");
            return window[Si];
          }
          return { requestDirPicker: n, getDirPickerHandler: s };
          function o(t) {
            try {
              const n = t.toString();
              ~n.indexOf("NotAllowedError")
                ? e.error(
                    i.jsxs("div", {
                      children: [
                        "Unable to open the folder picker. This may be because:",
                        i.jsx("br", {}),
                        "1. The previously selected folder is on a disconnected network drive.",
                        i.jsx("br", {}),
                        "2. The website has disabled the download permission (",
                        i.jsx("a", {
                          href: "https://youtu.be/131AOjjYHX0",
                          target: "_blank",
                          children: "fix video",
                        }),
                        ").",
                      ],
                    }),
                  )
                : ~n.indexOf("showDirectoryPicker")
                  ? e.error(
                      i.jsxs("div", {
                        children: [
                          "Your browser has not enabled the fileSystemAPI, please follow the instructions in the document to enable it.",
                          i.jsx("br", {}),
                          i.jsx("a", {
                            href: "https://github.com/brave/brave-browser/issues/18979#issuecomment-956513079",
                            target: "_blank",
                            children:
                              "https://github.com/brave/brave-browser/issues/18979#issuecomment-956513079",
                          }),
                        ],
                      }),
                    )
                  : ~n.indexOf("The user aborted a request")
                    ? e.error(
                        "We need permission to download the image to the folder, but you have denied it.",
                      )
                    : e.error("Permission Denied");
            } catch (n) {
              (e.error("Unknown error occurred"), console.log(n));
            }
          }
        }
        function ji(n) {
          const { resumeCursor: o } = t.useContext(Ai),
            { resumeDownloadPayload: a } = t.useContext(ai),
            { checkIfCanUseWithModal: r } = t.useContext(ni),
            { requestDirPicker: l } = ki();
          function d() {
            r(Pt.RESUME_DOWNLOADING, null, "photo").then((e) => {
              e &&
                l().then((e) => {
                  e &&
                    ((a.current = o),
                    a.current && n.onClick(a.current.lastCursor));
                });
            });
          }
          if (o)
            return i.jsx(e.Popover, {
              title: "Resume downloading",
              content: i.jsxs(e.Space, {
                direction: "vertical",
                size: 8,
                style: { whiteSpace: "nowrap", fontSize: 14 },
                children: [
                  i.jsxs("div", {
                    children: ["From: ", s.unix(o.lastUpdateAt).fromNow()],
                  }),
                  i.jsxs("div", {
                    children: [
                      "Date:",
                      " ",
                      s.unix(o.lastUpdateAt).format("MM/DD/YYYY hh:mm:ss"),
                    ],
                  }),
                  i.jsxs("div", { children: ["Index: ", o.lastIndex] }),
                ],
              }),
              children: i.jsx(e.Button, {
                type: "primary",
                ghost: !0,
                onClick: d,
                children: "Resume downloading?",
              }),
            });
        }
        function Ii(e) {
          function i(t) {
            "Enter" === t.code && e.onEnter();
          }
          t.useEffect(
            () => (
              document.body.addEventListener("keypress", i),
              () => {
                document.body.removeEventListener("keypress", i);
              }
            ),
            [],
          );
        }
        function Oi(t) {
          const { requestDirPicker: n } = ki();
          function s() {
            n().then((e) => {
              e && t.onClick();
            });
          }
          return (
            Ii({
              onEnter() {
                s();
              },
            }),
            i.jsx(e.Tooltip, {
              title: i.jsxs("div", {
                children: ["Hotkey: ", i.jsx("b", { children: "Enter" })],
              }),
              children: i.jsx(e.Button, {
                type: "primary",
                onClick: s,
                children: "Select a Folder to Download",
              }),
            })
          );
        }
        function Ni(e, t) {
          return { nodeID: t, isMediaset: !!e, mediasetToken: e || null };
        }
        function Mi() {
          const { isFullSpeed: e } = t.useContext(ni),
            { step: i, setAvoidAccountRestrictMSRef: n } = t.useContext(ai),
            s = t.useRef(0);
          async function o() {
            if (e) return;
            s.current += 1;
            let t = 10 * s.current;
            return (
              (t = Math.ceil(Math.random() * t + 500)),
              t < 1e3
                ? n(0)
                : t > 5e3
                  ? ((s.current = 0), void n(0))
                  : (n(t),
                    void (await new Promise((e) =>
                      setTimeout(() => {
                        (n(0), e());
                      }, t),
                    )))
            );
          }
          return (
            t.useEffect(() => {
              s.current = 0;
            }, [i]),
            { AvoidAccountRestrict: o }
          );
        }
        async function Bi(e, t) {
          const i = window.folderHandlerCacheMap[t.join("_")];
          if (i) return i;
          let n = e;
          for (const s of t) n = await n.getDirectoryHandle(s, { create: !0 });
          return ((window.folderHandlerCacheMap[t.join("_")] = n), n);
        }
        async function Ri(e, t) {
          if (e.type === t) return e;
          let { width: i, height: n, type: s, img: o, objUrl: a } = await Li(e),
            r = document.createElement("canvas"),
            l = r.getContext("2d");
          return (
            (r.width = i),
            (r.height = n),
            l.drawImage(o, 0, 0),
            new Promise((e) => {
              r.toBlob(
                (t) => {
                  (URL.revokeObjectURL(a),
                    r.remove(),
                    (r = null),
                    o.remove(),
                    (o = null),
                    (l = null),
                    e(t));
                },
                t,
                "0.95",
              );
            })
          );
        }
        async function Li(e) {
          return new Promise((t) => {
            let i = new Image(),
              n = URL.createObjectURL(e);
            ((i.onload = function () {
              let s = i.width,
                o = i.height;
              t({ width: s, height: o, type: e.type, objUrl: n, img: i });
            }),
              (i.src = n));
          });
        }
        function Pi(e) {
          return { [Rt.PNG]: "png", [Rt.JPG]: "jpg", [Rt.WEBP]: "webp" }[e];
        }
        function qi(e) {
          const t = new URL(e).pathname.split(".");
          return t[t.length - 1];
        }
        function Ui(e, t) {
          const i = window.URL.createObjectURL(e),
            n = document.createElement("a");
          ((n.style.display = "none"),
            (n.href = i),
            (n.download = t),
            document.body.appendChild(n),
            n.click(),
            window.URL.revokeObjectURL(i));
        }
        function Vi(e) {
          const {
              step: i,
              setPhotoStatus: n,
              downloadCountRef: s,
              resumeDownloadPayload: o,
            } = t.useContext(ai),
            { isFileIdDownloaded: a, appendDownloadedFile: r } =
              t.useContext(bi),
            {
              isSkipDownloadedFile: l,
              isGenFolder: d,
              fileFormatAs: u,
              fileNameFormatRule: c,
              folderNameRule: h,
              getFeatureLimitProcessTimeValue: g,
              downloadCaption: p,
            } = t.useContext(ni);
          t.useEffect(() => {}, [i]);
          const { getDirPickerHandler: f } = ki();
          async function m(e) {
            let t = await (await fetch(e.uri)).blob();
            if (!t.type.startsWith("image")) return void n(e.id, "error");
            if (l && a(e.id)) return n(e.id, "skip");
            if (~e.uri.indexOf(".mp4") || ~e.uri.indexOf(".webm"))
              return n(e.id, "skip");
            s.current++;
            let i = o.current?.lastIndex ?? 0;
            i += s.current;
            let m = be({
              rule: g({
                featureKey: Pt.FILENAME_FORMATS,
                currentIndex: i,
                currentValue: c,
              }),
              fields: Nt,
              data: {
                id: e.id,
                index: i,
                createdAt: e.createdAt,
                userName: e.userName,
                uri: e.uri,
                userId: e.userId,
              },
            });
            m = `${m}.${qi(e.uri)}`;
            let w = g({
              featureKey: Pt.IMAGES_FORMAT_AS,
              currentIndex: i,
              currentValue: u,
            });
            (w !== Rt.ORIGINAL &&
              w !== (await ei(e.uri)) &&
              ((t = await Ri(t, w)), (m = jt(m) + `.${Pi(w)}`)),
              (m = A(m)));
            let y = [];
            y = d
              ? be({
                  rule: g({
                    featureKey: Pt.FOLDER_NAME_RULE,
                    currentIndex: i,
                    currentValue: h,
                  }),
                  fields: Nt,
                  data: {
                    id: e.id,
                    index: i,
                    createdAt: e.createdAt,
                    userName: e.folderName,
                    uri: e.uri,
                    userId: e.userId,
                  },
                })
                  .split("/")
                  .filter((e) => e.trim().length > 0)
                  .map((e) => E(e))
              : [];
            const isFsInvalidStateError = (e) =>
              e &&
              ("InvalidStateError" === e.name ||
                /state cached in an interface object/i.test(e.message || ""));
            const sleepMs = (e) => new Promise((t) => setTimeout(t, e));
            const resolveTargetDirHandle = async () => {
              let e = f();
              return y.length > 0 ? await Bi(e, y) : e;
            };
            const writeBlobToFile = async (e, t, i) => {
              const n = await e.getFileHandle(t, { create: !0 });
              let s;
              try {
                s = await n.createWritable();
                await s.write(i);
              } finally {
                s && (await s.close().catch(() => {}));
              }
            };
            const writeBlobWithRetries = async (e, t) => {
              let i;
              for (let n = 0; n < 3; n++)
                try {
                  const dirHandle = await resolveTargetDirHandle();
                  return void (await writeBlobToFile(dirHandle, e, t));
                } catch (s) {
                  if (((i = s), !isFsInvalidStateError(s) || n >= 2)) throw s;
                  (window.folderHandlerCacheMap = {}),
                    await sleepMs(250 * (n + 1));
                }
              throw i;
            };
            let x = await resolveTargetDirHandle();
            if (
              ((window.downloadedFilenameCountMap =
                window.downloadedFilenameCountMap || {}),
              void 0 !== window.downloadedFilenameCountMap[m])
            ) {
              window.downloadedFilenameCountMap[m] =
                window.downloadedFilenameCountMap[m] + 1;
              const e = m.split(".");
              (e.splice(-1, 0, window.downloadedFilenameCountMap[m]),
                (m = e.join(".")));
            } else window.downloadedFilenameCountMap[m] = 0;
            if (p)
              try {
                await writeBlobWithRetries(
                  `${m}.caption.txt`,
                  new Blob([e.caption ?? ""], { type: "text/plain" }),
                );
              } catch (t) {
                console.warn("download caption write error: ", t, e);
              }
            (await writeBlobWithRetries(m, t),
              (t = null),
              (x = null),
              n(e.id, "done"),
              r(e.id),
              await kt(Math.ceil(200 * Math.random() + 50) / 1e3));
          }
          return { download: m };
        }
        function zi() {
          const { requestDelay: e, isFullSpeed: i } = t.useContext(ni),
            { setRequestDelayMsRef: n } = t.useContext(ai);
          async function s() {
            if (0 === e) return;
            if (i) return;
            const t = 1e3 * e;
            (e > 1 && n(t),
              await new Promise((e) =>
                setTimeout(() => {
                  (n(0), e());
                }, t),
              ));
          }
          return { requestDelay: s };
        }
        window.folderHandlerCacheMap = new Map();
        const $i = "CometRouteStoreContext";
        function Hi() {
          const e = t.useContext(window.___xf($i)),
            {
              graphQLName: i,
              collectionToken: o,
              paths: a,
              requestExtraPayload: l = {},
              folderName: d,
            } = t.useContext(Fi),
            {
              fetchLimit: u,
              fetchingCountType: c,
              fetchingCountByPhotosCountValue: h,
              fetchingCountByPhotosDaysValue: g,
            } = t.useContext(ni),
            {
              isOnLimit: p,
              isStopManually: f,
              downloadCountRef: m,
              photosArrRef: w,
              setIsFetchingNextPageRef: y,
              appendPhotos: x,
              setPhotoStatus: v,
            } = t.useContext(ai),
            { removeResumeCursor: _, updateResumeCursor: b } = t.useContext(Ai),
            { AvoidAccountRestrict: T } = Mi(),
            { findValueFromLoadQueryData: C, graphqlRequest: D } = At({
              projectId: r,
            }),
            { download: F } = Vi(),
            { requestDelay: E } = zi(),
            k = t.useRef(0);
          function j(e) {
            return f.current
              ? (console.info("Download stopped: manual stop"),
                Promise.resolve())
              : m.current >= u
                ? ((p.current = !0),
                  console.info("Download stopped: fetch limit reached", {
                    count: m.current,
                    limit: u,
                  }),
                  Promise.resolve())
                : (e && b(e),
                  new Promise(async (t, s) => {
                    (await T(),
                      await E(),
                      y(!0),
                      D({
                        graphqlName: i,
                        afterArgs: (t) => ({
                          ...t,
                          cursor: e || null,
                          id: o,
                          ...l,
                        }),
                        skipLabelData: !0,
                      })
                        .then(async (e) => {
                          if ((y(!1), !e[0]))
                            throw new Error(
                              `API request error 142 collectionToken:${o}`,
                            );
                          const i = n.get(e[0], a.edgesPath, []),
                            s = n.get(e[0], a.pageInfoPath, {}),
                            r = s.has_next_page ?? !1,
                            l = s.end_cursor ?? null;
                          let d = [];
                          for (let t of i) {
                            const e =
                              "string" == typeof a.viewerLinkPath
                                ? n.get(t, a.viewerLinkPath, "")
                                : a.viewerLinkPath(t);
                            "Photo" === n.get(t, a.nodeTypePath, "") &&
                              d.push({
                                id: n.get(t, a.idPath, ""),
                                thumbnail: n.get(t, a.thumbnailUriPath, ""),
                                uri: e,
                                userId: "",
                                userName: "",
                                folderName: "",
                                createdAt: 0,
                                status: "waiting",
                                caption: "",
                              });
                          }
                          let u = !1;
                          if (
                            c === Lt.BY_PHOTOS_COUNT &&
                            w.current.length + d.length >= h
                          ) {
                            const e =
                              d.length - (w.current.length + d.length - h);
                            ((d = d.slice(0, e)), (u = !0));
                          }
                          let g = !(await I(d));
                          return (
                            u ||
                            g ||
                            (r
                              ? await j(l)
                              : (console.info(
                                  "Download finished: no next page",
                                  { count: m.current },
                                ),
                                _())),
                            t()
                          );
                        })
                        .catch((e) => {
                          s(e);
                        }));
                  }));
          }
          async function I(e) {
            ((e = e.filter((e) => !w.current.find((t) => t.id === e.id))),
              x(e));
            for (let i of e) {
              if (m.current >= u) return ((p.current = !0), !1);
              if ((await T(), await E(), f.current)) return !1;
              v(i.id, "downloading");
              let e = i;
              try {
                if (((e = await O(i)), c === Lt.BY_DAYS_COUNT)) {
                  const t = s()
                    .subtract(g - 1, "day")
                    .startOf("day")
                    .unix();
                  if (e.createdAt < t) return !1;
                }
                k.current = 0;
                try {
                  if (!e.id) throw new Error("Failed to fetch HD photos");
                  await F(e);
                } catch (t) {
                  (v(i.id, "error"),
                    console.error("download HD image error: ", t, i));
                }
              } catch (t) {
                if (S(t)) throw new Error(t);
                if (
                  (console.error("fetch HD image error: ", t, i),
                  v(i.id, "error"),
                  k.current++,
                  k.current > 5)
                )
                  throw new Error(
                    "There have been 5 consecutive request errors, and the program has been terminated. ",
                  );
              }
            }
            return !0;
          }
          async function O(t, i = 0) {
            let s = new URLSearchParams(t.uri.split("?")[1]),
              o = s.get("set");
            if (((s = null), !o)) {
              const i = await e.fetchRoute(t.uri);
              i?.params?.set && (o = i.params.set);
            }
            return new Promise((e, s) => {
              D({
                graphqlName: "CometPhotoRootContentQuery",
                afterArgs: (e) => ({ ...e, ...Ni(o, t.id) }),
                skipLabelData: !1,
              })
                .then(async (o) => {
                  if (!o[0])
                    throw (
                      console.log("photo", t),
                      new Error("API request error 141 photo:")
                    );
                  const a = n.get(o[0], "data.currMedia.owner.id");
                  if (!a)
                    return i > 2
                      ? s("Failed to fetch HD photos")
                      : (await kt(2), e(await O(t, i + 1)));
                  const r = C(o, "data.owner.name");
                  let l = d || (window.___sf(a, "name") ?? r ?? "unknown");
                  const u = n.get(o[0], "data.currMedia.image.uri"),
                    c = C(o, "data.message.text"),
                    h = {
                      id: n.get(o[0], "data.currMedia.id", ""),
                      userId: a,
                      thumbnail: t.thumbnail,
                      uri: u,
                      folderName: A(d ?? l),
                      userName: A(r ?? window.___sf(a, "name") ?? l),
                      createdAt: n.get(o[0], "data.currMedia.created_time", 0),
                      status: t.status,
                      caption: c,
                    };
                  e(h);
                })
                .catch((e) => {
                  s(e);
                });
            });
          }
          return (
            t.useEffect(() => {
              if (!o) throw new Error("found collectionToken as undefined!");
            }, []),
            { startFetchAndDownload: j }
          );
        }
        function Wi(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, "default")
            ? e.default
            : e;
        }
        var Gi,
          Yi = { exports: {} };
        function Ki() {
          return (
            Gi ||
              ((Gi = 1),
              (e = function () {
                return function (e, t, i) {
                  e = e || {};
                  var n = t.prototype,
                    s = {
                      future: "in %s",
                      past: "%s ago",
                      s: "a few seconds",
                      m: "a minute",
                      mm: "%d minutes",
                      h: "an hour",
                      hh: "%d hours",
                      d: "a day",
                      dd: "%d days",
                      M: "a month",
                      MM: "%d months",
                      y: "a year",
                      yy: "%d years",
                    };
                  function o(e, t, i, s) {
                    return n.fromToBase(e, t, i, s);
                  }
                  ((i.en.relativeTime = s),
                    (n.fromToBase = function (t, n, o, a, r) {
                      for (
                        var l,
                          d,
                          u,
                          c = o.$locale().relativeTime || s,
                          h = e.thresholds || [
                            { l: "s", r: 44, d: "second" },
                            { l: "m", r: 89 },
                            { l: "mm", r: 44, d: "minute" },
                            { l: "h", r: 89 },
                            { l: "hh", r: 21, d: "hour" },
                            { l: "d", r: 35 },
                            { l: "dd", r: 25, d: "day" },
                            { l: "M", r: 45 },
                            { l: "MM", r: 10, d: "month" },
                            { l: "y", r: 17 },
                            { l: "yy", d: "year" },
                          ],
                          g = h.length,
                          p = 0;
                        p < g;
                        p += 1
                      ) {
                        var f = h[p];
                        f.d &&
                          (l = a ? i(t).diff(o, f.d, !0) : o.diff(t, f.d, !0));
                        var m = (e.rounding || Math.round)(Math.abs(l));
                        if (((u = l > 0), m <= f.r || !f.r)) {
                          m <= 1 && p > 0 && (f = h[p - 1]);
                          var w = c[f.l];
                          (r && (m = r("" + m)),
                            (d =
                              "string" == typeof w
                                ? w.replace("%d", m)
                                : w(m, n, f.l, u)));
                          break;
                        }
                      }
                      if (n) return d;
                      var y = u ? c.future : c.past;
                      return "function" == typeof y ? y(d) : y.replace("%s", d);
                    }),
                    (n.to = function (e, t) {
                      return o(e, t, this, !0);
                    }),
                    (n.from = function (e, t) {
                      return o(e, t, this);
                    }));
                  var a = function (e) {
                    return e.$u ? i.utc() : i();
                  };
                  ((n.toNow = function (e) {
                    return this.to(a(this), e);
                  }),
                    (n.fromNow = function (e) {
                      return this.from(a(this), e);
                    }));
                };
              }),
              (Yi.exports = e())),
            Yi.exports
          );
          var e;
        }
        Yi.exports;
        const Qi = Wi(Ki());
        function Xi() {
          const {
              resetStatus: n,
              setOpen: s,
              step: o,
              isStopManually: a,
              setStep: r,
              isOnLimit: l,
              updateUI: d,
            } = t.useContext(ai),
            { isSkipDownloadedFile: u, saveMemoSettings: c } = t.useContext(ni),
            { modalApi: h } = t.useContext(Qt),
            { startFetchAndDownload: g } = Hi();
          function p(e) {
            (c(),
              It(),
              ii().send("consumeFeaturesTreeTryByMemoUIConfigs", {
                isSkipDownloadedFile: u,
              }),
              (a.current = !1),
              r(oi.DOWNLOADING),
              g(e)
                .then(() => {
                  if (l.current) return d(!0);
                  r(oi.DONE);
                })
                .catch((e) => {
                  (console.error(e), (a.current = !0), Pe(h, e));
                }));
          }
          return i.jsxs(e.Row, {
            style: { width: "100%" },
            justify: "space-between",
            align: "middle",
            children: [
              i.jsxs(e.Space, {
                size: 8,
                children: [i.jsx(Ci, {}), i.jsx(Di, {})],
              }),
              i.jsxs(e.Space, {
                size: 24,
                children: [
                  o === oi.START &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(e.Button, {
                          type: "text",
                          onClick: () => s(!1),
                          children: "Close",
                        }),
                        i.jsx(Oi, { onClick: () => p() }),
                        i.jsx(ji, { onClick: p }),
                      ],
                    }),
                  o === oi.DOWNLOADING &&
                    i.jsx(i.Fragment, {
                      children: i.jsx(e.Button, {
                        type: "primary",
                        danger: !0,
                        onClick: () => {
                          ((a.current = !0), r(oi.DONE));
                        },
                        children: "Stop",
                      }),
                    }),
                  o === oi.DONE &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(e.Button, {
                          type: "text",
                          onClick: () => s(!1),
                          children: "Close",
                        }),
                        i.jsx(e.Button, {
                          onClick: () => n(),
                          children: "ReDownload",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        function Ji() {
          const {
              photosArrRef: n,
              downloadCountRef: s,
              isFetchingNextPageRef: a,
              avoidAccountRestrictMSRef: r,
              isOnLimit: l,
              requestDelayMsRef: d,
            } = t.useContext(ai),
            { fetchLimit: u } = t.useContext(ni),
            c = t.useRef();
          return (
            t.useEffect(() => {
              c.current && (c.current.scrollTop = c.current.scrollHeight);
            }, [n.current]),
            i.jsxs(e.Space, {
              direction: "vertical",
              size: 8,
              style: { width: "100%", position: "relative" },
              children: [
                i.jsxs("div", {
                  children: [
                    s.current,
                    " images have already been downloaded.",
                  ],
                }),
                i.jsx("div", {
                  ref: c,
                  style: {
                    height: 350,
                    width: "100%",
                    overflow: "auto",
                    overflowX: "hidden",
                    position: "relative",
                  },
                  children: n.current
                    .slice(-78)
                    .map((e) =>
                      i.jsxs(
                        "div",
                        {
                          style: {
                            position: "relative",
                            display: "inline-block",
                            width: 50,
                            height: 50,
                            marginRight: 8,
                            marginBottom: 8,
                          },
                          children: [
                            i.jsx("div", {
                              style: {
                                backgroundImage: `url(${e.thumbnail})`,
                                width: 50,
                                height: 50,
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                borderRadius: 4,
                              },
                            }),
                            "waiting" !== e.status &&
                              i.jsxs(Zi, {
                                children: [
                                  "done" === e.status &&
                                    i.jsx(o.CheckOutlined, {
                                      style: { color: "#A3E636", fontSize: 24 },
                                    }),
                                  "skip" === e.status &&
                                    i.jsx("span", {
                                      style: { fontSize: 14, color: "#fff" },
                                      children: "skip",
                                    }),
                                  "downloading" === e.status &&
                                    i.jsx(o.LoadingOutlined, {
                                      spin: !0,
                                      style: { fontSize: 24, color: "#fff" },
                                    }),
                                  "error" === e.status &&
                                    i.jsx(o.CloseOutlined, {
                                      style: { fontSize: 24, color: "#f20" },
                                    }),
                                ],
                              }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                }),
                l.current &&
                  i.jsx("div", {
                    style: {
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      top: 0,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "var(--overlay-alpha-80)",
                      zIndex: 9,
                    },
                    children: i.jsx(e.Alert, {
                      type: "warning",
                      style: { width: 420 },
                      message: i.jsxs(e.Space, {
                        direction: "vertical",
                        size: 12,
                        children: [
                          i.jsxs("div", {
                            children: [
                              "For our valued free users, we currently offer a generous allotment of ",
                              i.jsx("b", { children: u }),
                              " images per queue. However, we would like to extend an invitation for you to upgrade and enjoy the benefits of unlimited downloads.",
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                i.jsxs("div", {
                  children: [
                    a.current &&
                      i.jsxs("span", {
                        children: [
                          i.jsx(e.Spin, { size: "small" }),
                          i.jsx("span", {
                            style: { paddingLeft: 6, color: "#3b82f6" },
                            children: "fetching next page.",
                          }),
                        ],
                      }),
                    d.current
                      ? i.jsxs("span", {
                          children: [
                            i.jsx(e.Spin, { size: "small" }),
                            i.jsxs("span", {
                              style: { paddingLeft: 6 },
                              children: [
                                "Request delay, please wait for",
                                " ",
                                (d.current / 1e3).toFixed(1),
                                " seconds.",
                              ],
                            }),
                          ],
                        })
                      : i.jsx(i.Fragment, {}),
                    r.current
                      ? i.jsxs("span", {
                          children: [
                            i.jsx(e.Spin, { size: "small" }),
                            i.jsxs("span", {
                              style: { paddingLeft: 6, color: "#DC2625" },
                              children: [
                                "To avoid account restrictions, please wait for",
                                " ",
                                (r.current / 1e3).toFixed(1),
                                " seconds.",
                              ],
                            }),
                          ],
                        })
                      : i.jsx(i.Fragment, {}),
                  ],
                }),
              ],
            })
          );
        }
        function Zi(e) {
          return i.jsx("div", {
            style: {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.4)",
            },
            children: e.children,
          });
        }
        function en() {
          const { open: n, setOpen: s, step: o } = t.useContext(ai);
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx(e.Modal, {
                open: n,
                onCancel: () => s(!1),
                width: 840,
                title: i.jsx(xi, {}),
                footer: null,
                bodyStyle: { height: 500, color: "var(--secondary-text)" },
                children: i.jsxs("div", {
                  style: {
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  },
                  children: [
                    i.jsxs(e.Space, {
                      direction: "vertical",
                      size: 12,
                      style: { width: "100%" },
                      children: [
                        o === oi.START &&
                          i.jsx(i.Fragment, { children: i.jsx(ci, {}) }),
                        o === oi.DOWNLOADING &&
                          i.jsx(i.Fragment, { children: i.jsx(Ji, {}) }),
                        o === oi.DONE &&
                          i.jsxs(i.Fragment, {
                            children: [
                              i.jsx(wi, {}),
                              i.jsx(w, {
                                extsProjectIdArr: [
                                  "download-albums-for-instagram",
                                  "export-posts-for-facebook",
                                ],
                                perRow: 2,
                              }),
                            ],
                          }),
                      ],
                    }),
                    i.jsx(Xi, {}),
                  ],
                }),
              }),
              i.jsxs(e.Button, {
                onClick: () => s(!0),
                style: { marginBottom: 12 },
                children: [
                  i.jsx(e.Avatar, {
                    style: { marginTop: -2, marginRight: 8 },
                    src: window.download_albums_for_facebook_icon,
                    size: 24,
                    shape: "square",
                  }),
                  "Download This Album",
                ],
              }),
            ],
          });
        }
        s.extend(Qi);
        const tn = "Comet",
          nn = "ErrorBoundary.react",
          sn = "DarkMode";
        function on(t) {
          const n = window.___xf(tn + nn),
            s = "ENABLED" === window.___xf(tn + sn).getDarkModeSetting();
          return i.jsx(n, {
            fallback: an,
            children: i.jsx(e.ConfigProvider, {
              theme: {
                algorithm: s ? e.theme.darkAlgorithm : e.theme.defaultAlgorithm,
                token: { motion: !1 },
              },
              children: i.jsx(Xt, {
                children: i.jsx(ri, {
                  children: i.jsx(si, {
                    children: i.jsx(Fi.Provider, {
                      value: t,
                      children: i.jsx(Ei, {
                        children: i.jsx(Ti, { children: i.jsx(en, {}) }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }
        function an(e) {
          return (console.error(e), i.jsx(fi, {}));
        }
        const rn = t.createContext(null);
        function ln() {
          const { collectionToken: e, currentPhotoId: i } = t.useContext(rn),
            {
              isStopManually: s,
              downloadCountRef: o,
              isOnLimit: a,
              setIsFetchingNextPageRef: l,
              appendPhotos: d,
            } = t.useContext(ai),
            { fetchLimit: u } = t.useContext(ni),
            { AvoidAccountRestrict: c } = Mi(),
            { findValueFromLoadQueryData: h, graphqlRequest: g } = At({
              projectId: r,
            }),
            { download: p } = Vi(),
            { requestDelay: f } = zi();
          function m(t, r = 0) {
            if (s.current) return Promise.resolve();
            if (o.current >= u) return ((a.current = !0), Promise.resolve());
            const w = t;
            return t === i
              ? Promise.resolve()
              : new Promise(async (o, a) => {
                  (await c(),
                    await f(),
                    l(!0),
                    g({
                      graphqlName: "CometPhotoRootContentQuery",
                      afterArgs: (n) => ({ ...n, ...Ni(e, t || i) }),
                    })
                      .then(async (e) => {
                        if ((l(!1), !e[0]))
                          throw new Error(`API request error 143 photoId:${i}`);
                        const t = n.get(e[0], "data.currMedia.owner.id");
                        if (!t)
                          return r > 2
                            ? a("Failed to fetch HD photos")
                            : (await kt(2), o(await m(w, r + 1)));
                        const u = h(e, "data.owner.name");
                        let c = window.___sf(t, "name") ?? u ?? "unknown";
                        const g = n.get(e[0], "data.currMedia.image.uri"),
                          f = h(e, "data.message.text");
                        if (
                          (d([
                            {
                              id: n.get(e[0], "data.currMedia.id", ""),
                              userId: t,
                              thumbnail: g,
                              uri: "",
                              folderName: "",
                              userName: "",
                              createdAt: 0,
                              status: "waiting",
                              caption: f,
                            },
                          ]),
                          s.current)
                        )
                          return;
                        if (
                          (await p({
                            id: n.get(e[0], "data.currMedia.id", ""),
                            userId: t,
                            thumbnail: g,
                            uri: g,
                            folderName: A(c),
                            userName: A(c),
                            createdAt: n.get(
                              e[0],
                              "data.currMedia.created_time",
                              0,
                            ),
                            status: "waiting",
                            caption: f,
                          }),
                          s.current)
                        )
                          return;
                        const y =
                          n.get(
                            e[0],
                            "data.mediaset.nextMedia.edges[0].node.id",
                          ) ?? h(e, "data.nextMediaAfterNodeId.id");
                        y ? o(await m(y)) : o();
                      })
                      .catch((e) => {
                        (console.log(e), a(e));
                      }));
                });
          }
          return (
            t.useEffect(() => {
              if (!e) throw new Error("found collectionToken as undefined!");
            }, []),
            { startFetchAndDownload: m }
          );
        }
        function dn() {
          const {
              resetStatus: n,
              setOpen: s,
              step: o,
              isStopManually: a,
              updateUI: r,
              setStep: l,
              isOnLimit: d,
            } = t.useContext(ai),
            { isSkipDownloadedFile: u, saveMemoSettings: c } = t.useContext(ni),
            { modalApi: h } = t.useContext(Qt),
            { startFetchAndDownload: g } = ln();
          function p() {
            (c(),
              It(),
              ii().send("consumeFeatureTreeTry", [Pt.CAROUSEL_DOWNLOADER]),
              ii().send("consumeFeaturesTreeTryByMemoUIConfigs", {
                isSkipDownloadedFile: u,
              }),
              (a.current = !1),
              l(oi.DOWNLOADING),
              g()
                .then(() => {
                  if (d.current) return r(!0);
                  l(oi.DONE);
                })
                .catch((e) => {
                  (console.error(e), (a.current = !0), Pe(h, e));
                }));
          }
          return i.jsxs(e.Row, {
            style: { width: "100%" },
            justify: "space-between",
            align: "middle",
            children: [
              i.jsxs(e.Space, {
                size: 8,
                children: [i.jsx(Ci, {}), i.jsx(Di, {})],
              }),
              i.jsxs(e.Space, {
                size: 24,
                children: [
                  o === oi.START &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(e.Button, {
                          type: "text",
                          onClick: () => s(!1),
                          children: "Close",
                        }),
                        i.jsx(Oi, { onClick: () => p() }),
                      ],
                    }),
                  o === oi.DOWNLOADING &&
                    i.jsx(i.Fragment, {
                      children: i.jsx(e.Button, {
                        type: "primary",
                        danger: !0,
                        onClick: () => {
                          ((a.current = !0), l(oi.DONE));
                        },
                        children: "Stop",
                      }),
                    }),
                  o === oi.DONE &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(e.Button, {
                          type: "text",
                          onClick: () => s(!1),
                          children: "Close",
                        }),
                        i.jsx(e.Button, {
                          onClick: () => n(),
                          children: "ReDownload",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        const un = "WebPixelRatio",
          cn = "CurrentUser",
          hn = window.___xf(un).get();
        function gn() {
          const { open: n, setOpen: s, step: a } = t.useContext(ai),
            { checkIfCanUseWithModal: r } = t.useContext(ni),
            [l, d] = t.useState(
              !window.download_albums_for_facebook[Pt.CAROUSEL_DOWNLOADER]
                .needUpgrade,
            ),
            { currentPhotoId: u } = t.useContext(rn),
            c = t.useMemo(() => "0" !== window.___xf(cn).getAccountID(), []);
          async function h() {
            const e = window.___sf(u, "^image{$1}.uri", {
              $1: {
                context: "comet_media_viewer",
                height: 1e6,
                scale: hn,
                width: 1e6,
              },
            });
            e && Ui(await (await fetch(e)).blob(), u + "." + qi(e));
          }
          async function g() {
            (await r(Pt.CAROUSEL_DOWNLOADER, void 0, "photos")) && d(!0);
          }
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx(e.Modal, {
                open: n,
                onCancel: () => s(!1),
                width: 840,
                title: i.jsx(xi, {}),
                footer: null,
                bodyStyle: { height: 500, color: "var(--secondary-text)" },
                children: i.jsx("div", {
                  style: {
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  },
                  children: l
                    ? i.jsxs(i.Fragment, {
                        children: [
                          i.jsxs(e.Space, {
                            direction: "vertical",
                            size: 12,
                            style: { width: "100%" },
                            children: [
                              a === oi.START &&
                                i.jsxs(i.Fragment, {
                                  children: [
                                    i.jsx(ci, { isHideQuantityCount: !0 }),
                                    i.jsx(e.Alert, {
                                      showIcon: !0,
                                      message: i.jsx(i.Fragment, {
                                        children: i.jsx("p", {
                                          children:
                                            "Start downloading from the first photo to get all the photos in the entire album set for the photo viewer. The extension only downloads subsequent photos, excluding the previous ones.",
                                        }),
                                      }),
                                      type: "warning",
                                    }),
                                  ],
                                }),
                              a === oi.DOWNLOADING &&
                                i.jsx(i.Fragment, { children: i.jsx(Ji, {}) }),
                              a === oi.DONE &&
                                i.jsxs(i.Fragment, {
                                  children: [
                                    i.jsx(wi, {}),
                                    i.jsx(w, {
                                      extsProjectIdArr: [
                                        "download-albums-for-instagram",
                                        "export-posts-for-facebook",
                                      ],
                                      perRow: 2,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          i.jsx(dn, {}),
                        ],
                      })
                    : i.jsx(e.Alert, {
                        type: "warning",
                        message: i.jsxs("div", {
                          children: [
                            "This feature is customized for professional users. Please upgrade to use it.",
                            i.jsx(e.Button, {
                              size: "small",
                              style: { marginLeft: 12 },
                              onClick: g,
                              children: "FREE try",
                            }),
                          ],
                        }),
                      }),
                }),
              }),
              i.jsx("div", {
                style: {
                  position: "absolute",
                  left: 8,
                  bottom: c ? 34 : 180,
                  zIndex: 9999,
                },
                children: i.jsxs(e.Space, {
                  direction: "vertical",
                  size: 8,
                  children: [
                    i.jsx(e.Tooltip, {
                      title: "Download Current Photo",
                      placement: "right",
                      children: i.jsx(e.Button, {
                        onClick: h,
                        type: "text",
                        shape: "circle",
                        icon: i.jsx(o.DownloadOutlined, {}),
                      }),
                    }),
                    i.jsx(e.Tooltip, {
                      title: "Download this Carousel",
                      placement: "right",
                      children: i.jsx(e.Button, {
                        onClick: () => s(!0),
                        type: "text",
                        shape: "circle",
                        children: i.jsx(e.Avatar, {
                          src: window.download_albums_for_facebook_icon,
                          size: 24,
                          shape: "square",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        const pn = "Comet",
          fn = "DarkMode",
          mn = "ErrorBoundary.react";
        function wn(t) {
          const n = window.___xf(pn + mn),
            s = "ENABLED" === window.___xf(pn + fn).getDarkModeSetting();
          return i.jsx(n, {
            fallback: yn,
            children: i.jsx(e.ConfigProvider, {
              theme: {
                algorithm: s ? e.theme.darkAlgorithm : e.theme.defaultAlgorithm,
                token: { motion: !1 },
              },
              children: i.jsx(Xt, {
                children: i.jsx(ri, {
                  children: i.jsx(si, {
                    children: i.jsx(rn.Provider, {
                      value: t,
                      children: i.jsx(Ti, { children: i.jsx(gn, {}) }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }
        function yn(e) {
          return (console.error(e), i.jsx(fi, {}));
        }
        const xn = t.createContext(null);
        function vn() {
          const { targetId: e } = t.useContext(xn),
            {
              isStopManually: i,
              setIsFetchingNextPageRef: s,
              appendPhotos: o,
            } = t.useContext(ai),
            { graphqlRequest: a } = At({ projectId: r }),
            { download: l } = Vi();
          function d() {
            return i.current
              ? Promise.resolve()
              : new Promise(async (t, r) => {
                  s(!0);
                  const d = await a({
                      graphqlName: "MarketplacePDPContainerQuery",
                      afterArgs: (t) => ({ ...t, targetId: e }),
                      skipLabelData: !1,
                    }),
                    u = await a({
                      graphqlName:
                        "MarketplacePDPC2CMediaViewerWithImagesQuery",
                      afterArgs: (t) => ({ ...t, targetId: e }),
                      skipLabelData: !1,
                    });
                  s(!1);
                  const c = n.get(
                      u,
                      "[0].data.viewer.marketplace_product_details_page.target.listing_photos",
                      [],
                    ),
                    h = n.get(
                      d,
                      "[0].data.viewer.marketplace_product_details_page.target.creation_time",
                      0,
                    ),
                    g = n.get(
                      d,
                      "[0].data.viewer.marketplace_product_details_page.target.marketplace_listing_seller.name",
                      "unknown",
                    ),
                    p = n.get(
                      d,
                      "[0].data.viewer.marketplace_product_details_page.target.marketplace_listing_seller.id",
                      "",
                    ),
                    f = n.get(
                      d,
                      "[0].data.viewer.marketplace_product_details_page.target.redacted_description.text",
                      "",
                    );
                  o(
                    c.map((e) => ({
                      id: e.id,
                      userId: p,
                      thumbnail: e.image.uri,
                      uri: e.image.uri,
                      folderName: A(g),
                      userName: A(g),
                      createdAt: h,
                      status: "waiting",
                      caption: f,
                    })),
                  );
                  for (const e of c)
                    if (
                      (await l({
                        id: e.id,
                        userId: p,
                        thumbnail: e.image.uri,
                        uri: e.image.uri,
                        folderName: A(g),
                        userName: A(g),
                        createdAt: h,
                        status: "waiting",
                        caption: f,
                      }),
                      i.current)
                    )
                      return;
                  return t();
                });
          }
          return (
            t.useEffect(() => {
              if (!e) throw new Error("found collectionToken as undefined!");
            }, []),
            { startFetchAndDownload: d }
          );
        }
        function _n() {
          const {
              resetStatus: n,
              setOpen: s,
              step: o,
              isStopManually: a,
              updateUI: r,
              setStep: l,
              isOnLimit: d,
            } = t.useContext(ai),
            { isSkipDownloadedFile: u, saveMemoSettings: c } = t.useContext(ni),
            { modalApi: h } = t.useContext(Qt),
            { startFetchAndDownload: g } = vn();
          function p() {
            (c(),
              It(),
              ii().send("consumeFeatureTreeTry", [Pt.CAROUSEL_DOWNLOADER]),
              ii().send("consumeFeaturesTreeTryByMemoUIConfigs", {
                isSkipDownloadedFile: u,
              }),
              (a.current = !1),
              l(oi.DOWNLOADING),
              g()
                .then(() => {
                  if (d.current) return r(!0);
                  l(oi.DONE);
                })
                .catch((e) => {
                  (console.error(e), (a.current = !0), Pe(h, e));
                }));
          }
          return i.jsxs(e.Row, {
            style: { width: "100%" },
            justify: "space-between",
            align: "middle",
            children: [
              i.jsxs(e.Space, {
                size: 8,
                children: [i.jsx(Ci, {}), i.jsx(Di, {})],
              }),
              i.jsxs(e.Space, {
                size: 24,
                children: [
                  o === oi.START &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(e.Button, {
                          type: "text",
                          onClick: () => s(!1),
                          children: "Close",
                        }),
                        i.jsx(Oi, { onClick: () => p() }),
                      ],
                    }),
                  o === oi.DOWNLOADING &&
                    i.jsx(i.Fragment, {
                      children: i.jsx(e.Button, {
                        type: "primary",
                        danger: !0,
                        onClick: () => {
                          ((a.current = !0), l(oi.DONE));
                        },
                        children: "Stop",
                      }),
                    }),
                  o === oi.DONE &&
                    i.jsxs(i.Fragment, {
                      children: [
                        i.jsx(e.Button, {
                          type: "text",
                          onClick: () => s(!1),
                          children: "Close",
                        }),
                        i.jsx(e.Button, {
                          onClick: () => n(),
                          children: "ReDownload",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        const bn = "CurrentUser",
          Tn = "WebPixelRatio";
        function Cn() {
          const { open: n, setOpen: s, step: o } = t.useContext(ai),
            { checkIfCanUseWithModal: a } = t.useContext(ni),
            [r, l] = t.useState(
              !window.download_albums_for_facebook[Pt.CAROUSEL_DOWNLOADER]
                .needUpgrade,
            ),
            d = t.useMemo(() => "0" !== window.___xf(bn).getAccountID(), []);
          async function u() {
            (await a(Pt.CAROUSEL_DOWNLOADER, void 0, "photos")) && l(!0);
          }
          return i.jsxs(i.Fragment, {
            children: [
              i.jsx(e.Modal, {
                open: n,
                onCancel: () => s(!1),
                width: 840,
                title: i.jsx(xi, {}),
                footer: null,
                bodyStyle: { height: 500, color: "var(--secondary-text)" },
                children: i.jsx("div", {
                  style: {
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  },
                  children: r
                    ? i.jsxs(i.Fragment, {
                        children: [
                          i.jsxs(e.Space, {
                            direction: "vertical",
                            size: 12,
                            style: { width: "100%" },
                            children: [
                              o === oi.START &&
                                i.jsxs(i.Fragment, {
                                  children: [
                                    i.jsx(ci, { isHideQuantityCount: !0 }),
                                    i.jsx(e.Alert, {
                                      showIcon: !0,
                                      message: i.jsx(i.Fragment, {
                                        children: i.jsx("p", {
                                          children:
                                            "Start downloading from the first photo to get all the photos in the entire album set for the photo viewer. The extension only downloads subsequent photos, excluding the previous ones.",
                                        }),
                                      }),
                                      type: "warning",
                                    }),
                                  ],
                                }),
                              o === oi.DOWNLOADING &&
                                i.jsx(i.Fragment, { children: i.jsx(Ji, {}) }),
                              o === oi.DONE &&
                                i.jsxs(i.Fragment, {
                                  children: [
                                    i.jsx(wi, {}),
                                    i.jsx(w, {
                                      extsProjectIdArr: [
                                        "download-albums-for-instagram",
                                        "export-posts-for-facebook",
                                      ],
                                      perRow: 2,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          i.jsx(_n, {}),
                        ],
                      })
                    : i.jsx(e.Alert, {
                        type: "warning",
                        message: i.jsxs("div", {
                          children: [
                            "This feature is customized for professional users. Please upgrade to use it.",
                            i.jsx(e.Button, {
                              size: "small",
                              style: { marginLeft: 12 },
                              onClick: u,
                              children: "FREE try",
                            }),
                          ],
                        }),
                      }),
                }),
              }),
              i.jsx("div", {
                style: {
                  position: "absolute",
                  left: 8,
                  bottom: d ? 34 : 180,
                  zIndex: 9999,
                },
                children: i.jsx(e.Space, {
                  direction: "vertical",
                  size: 8,
                  children: i.jsx(e.Tooltip, {
                    title: "Download this Carousel",
                    placement: "right",
                    children: i.jsx(e.Button, {
                      onClick: () => s(!0),
                      type: "text",
                      shape: "circle",
                      children: i.jsx(e.Avatar, {
                        src: window.download_albums_for_facebook_icon,
                        size: 24,
                        shape: "square",
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        }
        window.___xf(Tn).get();
        const Dn = "Comet",
          Fn = "ErrorBoundary.react",
          An = "DarkMode";
        function En(t) {
          const n = window.___xf(Dn + Fn),
            s = "ENABLED" === window.___xf(Dn + An).getDarkModeSetting();
          return i.jsx(n, {
            fallback: Sn,
            children: i.jsx(e.ConfigProvider, {
              theme: {
                algorithm: s ? e.theme.darkAlgorithm : e.theme.defaultAlgorithm,
                token: { motion: !1 },
              },
              children: i.jsx(Xt, {
                children: i.jsx(ri, {
                  children: i.jsx(si, {
                    children: i.jsx(xn.Provider, {
                      value: t,
                      children: i.jsx(Ti, { children: i.jsx(Cn, {}) }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }
        function Sn(e) {
          return (console.error(e), i.jsx(fi, {}));
        }
        const kn = "Comet",
          jn = "Photo",
          In = "Album",
          On = "Profile",
          Nn = ".react|download-albums-for-facebook",
          Mn = "sRenderer",
          Bn = "Legacy",
          Rn = "sTabGrid";
        ((window.download_albums_for_facebook_icon =
          window[r].extensionFolderUri + window[r].icons[128]),
          window.___km(kn + In + jn + "Collage" + Nn, (e) => {
            const t = window.___sf(
                e?.payload?.album?.__id ?? "",
                "reference_token",
              ),
              n =
                window.___sf(e?.payload?.album?.__id ?? "", "^owner.name") ??
                "";
            return [
              i.jsx(on, {
                collectionToken: t,
                graphQLName: "CometAlbumPhotoCollagePaginationQuery",
                paths: {
                  edgesPath: "data.node.media.edges",
                  idPath: "node.id",
                  thumbnailUriPath: "node.image.uri",
                  nodeTypePath: "node.__typename",
                  viewerLinkPath: (e) =>
                    `https://www.facebook.com/photo/?fbid=${e.node.id}&set=${t}`,
                  pageInfoPath: "data.node.media.page_info",
                },
                folderName: n,
                requestExtraPayload: {
                  id: t.split(".").pop(),
                  renderLocation: "permalink",
                },
              }),
              e.lastCmp,
            ];
          }),
          window.___km(On + kn + "AppCollection" + jn + Mn + Nn, (e) => {
            let t = e.payload?.variables?.collectionToken;
            const n =
              window.___sf(e.payload?.variables?.userID ?? "", "name") ?? "";
            if (!t)
              try {
                t = window.___sf(
                  e.payload.styleRenderer.__id,
                  "^collection.id",
                );
              } catch (s) {}
            return ["videos_by", "videos_of"].includes(
              window.___sf(t, "tab_key"),
            )
              ? e.lastCmp
              : [
                  i.jsx(on, {
                    collectionToken: t,
                    graphQLName:
                      "ProfileCometAppCollectionPhotosRendererPaginationQuery",
                    paths: {
                      edgesPath: "data.node.pageItems.edges",
                      idPath: "node.node.id",
                      nodeTypePath: "node.node.__typename",
                      thumbnailUriPath: "node.image.uri",
                      viewerLinkPath: "node.url",
                      pageInfoPath: "data.node.pageItems.page_info",
                    },
                    folderName: n,
                  }),
                  e.lastCmp,
                ];
          }),
          window.___km(On + kn + Bn + In + "GridView" + Nn, (e) => {
            const t = window.___sf(
                e?.payload?.mediaset?.__id ?? "",
                "reference_token",
              ),
              n =
                window.___sf(e?.payload?.mediaset?.__id ?? "", "^owner.name") ??
                "";
            return [
              i.jsx(on, {
                collectionToken: t,
                graphQLName: "ProfileCometLegacyAlbumGridViewPaginationQuery",
                paths: {
                  edgesPath: "data.node.grid_media.edges",
                  idPath: "node.id",
                  nodeTypePath: "node.__typename",
                  thumbnailUriPath: "node.image.uri",
                  viewerLinkPath: (e) =>
                    `https://www.facebook.com/photo/?fbid=${e.node.id}&set=${t}`,
                  pageInfoPath: "data.node.grid_media.page_info",
                },
                folderName: n,
                requestExtraPayload: { count: 14, id: t.split(".").pop() },
              }),
              e.lastCmp,
            ];
          }),
          window.___km("Groups" + kn + "Media" + jn + Rn + Nn, (e) => {
            const t = e.payload.group$key.__id,
              n = t,
              s = window.___sf(t, "name");
            return [
              i.jsx(on, {
                collectionToken: n,
                graphQLName: "GroupsCometMediaPhotosTabGridQuery",
                paths: {
                  edgesPath: "data.node.group_mediaset.media.edges",
                  idPath: "node.id",
                  nodeTypePath: "node.__typename",
                  thumbnailUriPath: "node.image.uri",
                  viewerLinkPath: (e) =>
                    `https://www.facebook.com/photo/?fbid=${e.node.id}&set=${"g." + n}`,
                  pageInfoPath: "data.node.group_mediaset.media.page_info",
                },
                folderName: s,
                requestExtraPayload: { count: 8, id: n.split(".").pop() },
              }),
              e.lastCmp,
            ];
          }),
          window.___km(kn + jn + "RootContent" + Nn, (e) => {
            const t = e.payload.mediasetToken,
              n = e.payload.photoID;
            return t && n
              ? [
                  i.jsx(wn, { collectionToken: t, currentPhotoId: n }),
                  e.lastCmp,
                ]
              : e.lastCmp;
          }),
          window.___km(
            "MarketplacePDPC2CMediaViewerWithImagesQuery" + Nn,
            (e) => {
              const t = e.payload?.imageQueryRef?.variables?.targetId;
              return t ? [i.jsx(En, { targetId: t }), e.lastCmp] : e.lastCmp;
            },
          ));
      })(
        window.download_albums_for_facebook_vendors._.antd,
        t,
        i,
        window.download_albums_for_facebook_vendors._["lodash-es"],
        window.download_albums_for_facebook_vendors._.dayjs,
        window.download_albums_for_facebook_vendors._["@ant-design/icons"],
      );
    } else console.error(`${e} Not Found`);
  }
  function i() {
    return Object.keys(window.require("__debug").modulesMap)
      .filter((e) => 0 === e.indexOf("ReactDOM"))
      .find((e) => {
        const t = window.require("__debug").modulesMap[e];
        return !!(
          t.exports &&
          t.exports.version &&
          t.depPosition > 3 &&
          e.includes("classic")
        );
      });
  }
  function n() {
    function e(...e) {
      return window.require("react").jsx(...e);
    }
    return {
      Fragment: Symbol.for("react.fragment"),
      jsx: e,
      jsxs: e,
      jsxDEV: e,
    };
  }
  e(
    () => !!window.requireLazy,
    () => {
      e(
        () =>
          !!window.download_albums_for_facebook_vendors &&
          !!window["download-albums-for-facebook"] &&
          !!window.download_albums_for_facebook,
        () => {
          window.requireLazy(["react", "__debug"], t);
        },
      );
    },
  );
})();
