(async () => {
  // TODO: preload UI preference from head scripTag
  //  n = await window.__smile_ui_init_data__;
  (d = document
    .createRange()
    .createContextualFragment(
      '<div id="perkd-rewards-ui-lite-container"style="position:fixed;width:0;height:0;bottom:0;right:0;z-index:2147483647!important"aria-live="polite"><style>@keyframes smileLiteFadeInOut{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}#smile-ui-lite-launcher-frame-container{animation:smileLiteFadeInOut .2s ease-in-out!important;animation-delay:150ms!important;animation-fill-mode:forwards!important;transition:all .2s ease-in-out!important;opacity:0}</style><div id="perkd-rewards-ui-lite-launcher-frame-container"><iframe title="Perkd Rewards Program Launcher"id="perkd-lite-launcher-frame" style="position:absolute;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;border:0;outline:0;top:0;right:0;bottom:0;left:0"><!doctype html><html><head></head></html></iframe></div></div>'
    )),
    // TODO: refactor replace?
    (r =
      "<!doctypehtml><html lang=\"en-US\"><head><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\"name=\"viewport\"><style>body,html{height:100%}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:'Proxima Nova',arial,sans-serif;font-size:14px}button::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted ButtonText}button{font-family:inherit;margin:0;text-transform:none;-webkit-appearance:button;height:60px;max-height:60px;line-height:30px;min-width:60px;display:inline-flex;align-items:center;position:fixed;bottom:0;text-align:center;font-size:16px;padding:15px;border:none;outline:0;user-select:none;cursor:pointer;white-space:nowrap}button img{width:30px;height:30px}button img+span{margin-left:15px}button:focus{position:relative;box-shadow:inset 0 0 0 4px Highlight}.close-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M11.06 10l3.713 3.712a.75.75 0 0 1-1.06 1.061L10 11.061l-3.712 3.712a.75.75 0 0 1-1.061-1.06L8.939 10 5.227 6.288a.75.75 0 1 1 1.06-1.061L10 8.939l3.712-3.712a.75.75 0 0 1 1.061 1.06L11.061 10z'/%3E%3C/svg%3E\");height:26px;width:26px;padding:6px;margin:17px;position:absolute;top:0;right:0;left:0;bottom:0;background-size:100%;background-repeat:no-repeat;background-position:50%}</style><title></title></head><body></body></html>".replace(
        "</body>",
        `<button aria-label="Open Perkd Rewards panel" style="border-radius:30px;">\n<span>Rewards</span></button></body>`
      )),
    document.body.appendChild(d),
    (d.srcdoc = r);

  (() => {
    let e = document.createElement("link").relList,
      t = !!(e && e.supports && e.supports("prefetch"));

    function i(e, i = "script") {
      let o = document.createElement("link");
      (o.href = e),
        t ? (o.rel = "prefetch") : ((o.rel = "preload"), (o.as = i)),
        document.querySelector("head").appendChild(o);
    }
    i("https://perkd-shopify-asset.vercel.app/static/perkd-rewards-shopify.js");
    // i("https://js.smile.io/style.css"),
  })();
})();
