var assetUrl =
  "https://perkd-shopify-asset.vercel.app/static/perkd-rewards-init.js";

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
     width:60px;
     height:60px;
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
      (r.src = `${e}?${Math.random() * 999})`),
      t.querySelector("head").appendChild(r);
  }

  e(assetUrl);
})();

(() => {
  function getElById(id) {
    return document.getElementById(id);
  }

  var customerId = getElById("perkd-customerID").value;
  var APIKey = getElById("perkd-APIKey").value;
  var customerFirstName = getElById("perkd-customerFirstName").value;
  var customerLastName = getElById("perkd-customerLastName").value;
  var shopName = getElById("perkd-shopName").value;
  var totalSpent = getElById("perkd-totalSpent").value;
  var ordersCount = getElById("perkd-ordersCount").value;

  var attr = {
    displayName: customerFirstName + " " + customerLastName,
    custom: {
      totalSpent: totalSpent,
      ordersCount: ordersCount,
    },
  };

  if (email && email != "") attr.email = email;

  window.__perkd__init__ = {
    customerId,
    shopify: true,
    shop: shopName,
    userAttributes: attr,
    lang: shopLocale,
    APIKey: APIKey,
  };
})();
