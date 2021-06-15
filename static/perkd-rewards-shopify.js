var assetRoot = "https://perkd-shopify-asset.vercel.app/static";

function loadScript(src, isAsync, isDefer) {
  var d = document,
    el = d.createElement("script");
  (el.type = "text/javascript"),
    (el.async = isAsync),
    (el.defer = isDefer),
    (el.src = `${src}?${Math.random() * 999}`), // cache buster
    d.querySelector("head").appendChild(el);
}

function loadAsyncScript(src) {
  loadScript(src, true, false);
}

function loadDeferScript(src) {
  loadScript(src, false, true);
}

(async () => {
  // loadScript(`${assetRoot}/perkd-rewards-init.js`);

  function getElById(id) {
    return document.getElementById(id);
  }

  var customerId = getElById("perkd-customerID").value;
  var customerFirstName = getElById("perkd-customerFirstName").value;
  var customerLastName = getElById("perkd-customerLastName").value;
  var shop = getElById("perkd-shopName").value;

  var attr = {
    displayName: customerFirstName + " " + customerLastName,
  };

  if (email && email != "") attr.email = email;

  var isLoggedIn = customerId.length > 0;

  window.__perkd__init__ = {
    customerId,
    isLoggedIn,
    shop,
    userAttributes: attr,
    // lang: shopLocale,
  };

  if (isLoggedIn) {
    console.log("[PERKD INIT SCRIPT] User logged in.");

    // TODO:  check offers

    // Attemp to check user offers
    // fetch("https://perkd-dev.ngrok.io/rewards", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     customerId: customerId,
    //   }),
    //   headers: {
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET, POST",
    //     "Content-Type": "application/json",
    //   },
    // });
  } else {
    console.log("[PERKD INIT SCRIPT] User not logged in.");
  }

  // TODO: preload UI preference from head scripTag
  //  n = await window.__smile_ui_init_data__;

  // FIXME : temp width height
  let srcDoc = `<!DOCTYPE html>
  		<html lang="en-US">
          <head>
            <meta charset="utf-8">
          	<meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
          	<title>Perkd Rewards</title>
           <link rel="stylesheet" href="https://perkd-shopify-asset.vercel.app/static/perkd-rewards.css" />
          </head>
          <body>
            <div style="overflow: hidden; position: fixed; bottom: 0; right: 0">
              <div id="perkd-rewards-widget-launcher"></div>
            </div>
         </body>
       </html>`;

  // TODO: Use this template for refactor
  // let el = document.createRange().createContextualFragment(`
  //   <div class="perkd-rewards-widget-app" aria-live="polite">
  //     <div id="perkd-rewards-widget-frame-container" style="overflow:hidden
  //      position:fixed; width:300px; height:300px;
  //      bottom:6px; right:6px; z-index:2147483649 !important;">
  //   	        <iframe title="Perkd Rewards Program Launcher" id="perkd-rewards-widget-frame" scrolling="no"
  //              style="position:absolute; height:0; max-height:100%; max-width:100%; min-height:100%; min-width:100%; width:0; border:0; outline:0; right:0; bottom:0"/>
  //     </div>
  //     <iframe allowfullscreen name="perked-widget-launcher-frame" title="Perkd Rewards"></iframe>
  //   </div>`);

  // FIXME: width/height is blocking the page!
  let el = document.createRange().createContextualFragment(`
    <div id="perkd-rewards-widget-container"
          aria-live="polite"
          style="overflow:hidden; position:fixed;
                 width:300px; height:300px;
                 bottom:8px; right:8px;
                 z-index:2147483649 !important;">
      <div class="perkd-rewards-widget-frame-container">
    	  <iframe id="perkd-rewards-widget-frame"
               scrolling="no"></iframe>
      </div>
      <iframe allowfullscreen
              id="perkd-rewards-widget-launcher-frame"
              title="Perkd Rewards"
              style="position:absolute; height:0; max-height:100%; max-width:100%;
                       min-height:100%; min-width:100%;
                       width:0; border:0; outline:0;
                       right:0; bottom:0"
                scrolling="no"
              ></iframe>
    </div>`);

  document.body.appendChild(el);
  const iEl = getElById("perkd-rewards-widget-launcher-frame");

  if (iEl) {
    console.info("perkd iframe found");
    iEl.srcdoc = srcDoc;

    iEl.addEventListener("load", () => {
      // TODO: Load CSS via script
      loadAsyncScript(`${assetRoot}/perkd-rewards-widget.min.js`);
    });
  }
})();

// load css
// var cssResource = document.createElement("link"),
//   t = !!(
//     cssResource &&
//     cssResource.supports &&
//     cssResource.supports("prefetch")
//   );

// cssResource.href =
//   "https://perkd-shopify-asset.vercel.app/static/perkd-rewards.css";
// cssResource.rel = t ? "stylesheet" : "preload";
// cssResource.as = "style";
// document.head.appendChild(cssResource);
// })();
