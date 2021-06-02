var assetUrl =
  "https://perkd-shopify-asset.vercel.app/static/perkd-rewards-init.js";

var widgetScriptUrl =
  "https://perkd-shopify-asset.vercel.app/static/perkd-rewards-widget.min.js";

(async () => {
  function getElById(id) {
    return document.getElementById(id);
  }
  // TODO: preload UI preference from head scripTag
  //  n = await window.__smile_ui_init_data__;

  let srcDoc = `<!DOCTYPE html>
  		<html lang="en-US">
          <head>
            <meta charset="utf-8">
          	<meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
          	<titel></title>
          </head>
          <body>
          	<button aria-label="Open Perkd Rewards panel" style="border-radius:30px;">
              <span>Rewards</span>
          	</button>
          </body>
       </html>`;

  let el = document.createRange().createContextualFragment(`
    <div class="perkd-rewards-widget"
     style="position:fixed;
     width:100px;
     height:80px;
     bottom:0;
     right:12px;
     z-index:2147483649 !important;"
     aria-live="polite"
     >
    <div id="perkd-rewards-widget-frame-container" style="overflow:hidden">
	    <iframe title="Perkd Rewards Program Launcher" id="perkd-rewards-widget-frame" scrolling="no"
      style="position:absolute; height:0; max-height:100%; max-width:100%; min-height:100%; min-width:100%; width:0; border:0; outline:0; right:0; bottom:0"/>
  </div>
</div>`);

  document.body.appendChild(el);
  const iEl = getElById("perkd-rewards-widget-frame");

  if (iEl) {
    console.log(" perkd iframe found");
    iEl.srcdoc = srcDoc;
  }
  // _iframe.addEventListener("load", () => {
})();

(() => {
  function e(e) {
    var t = document,
      r = t.createElement("script");
    (r.type = "text/javascript"),
      (r.async = !1),
      (r.defer = !0),
      (r.src = `${e}?${Math.random() * 999}`), // cache buster
      t.querySelector("head").appendChild(r);
  }

  e(widgetScriptUrl);
  e(assetUrl);
})();
