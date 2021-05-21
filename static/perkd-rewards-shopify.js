(async () => {
  // TODO: preload UI preference from head scripTag
  //  n = await window.__smile_ui_init_data__;

  let srcDoc = `<!DOCTYPE html>
  		<html lang="en-US">
          <head>
            <meta charset="utf-8">
          	<meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"name="viewport">
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
     width:0;
     height:0;
     bottom:0;
     right:0;
     z-index:2147483649!important;
     aria-live="polite">
    <div id="perkd-rewards-widget-frame-container">
	    <iframe title="Perkd Rewards Program Launcher" id="perkd-rewards-widget-frame"
      style="position:absolute; height:0; max-height:100%; max-width:100%; min-height:100%; min-width:100%; width:0; border:0; outline:0; right:0; bottom:0"></iframe>
  </div>
</div>`);

  document.body.appendChild(el);
  const iEl = document.getElementById("perkd-rewards-widget-frame");

  if (iEl) {
    console.log(" perkd iframe foundi");
    iEl.srcdoc = srcDoc;
  }
  // _iframe.addEventListener("load", () => {
})();

(() => {
  let e = document.createElement("link").relList,
    t = !!(e && e.supports && e.supports("prefetch"));

  function i(e, i = "script") {
    let o = document.createElement("link");
    (o.href = e),
      t ? (o.rel = "prefetch") : ((o.rel = "preload"), (o.as = i)),
      document.querySelector("head").appendChild(o);
  }
  i("https://perkd-shopify-asset.vercel.app/static/script.js");
  // i("https://js.smile.io/style.css"),
})();
