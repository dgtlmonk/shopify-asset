var assetRoot = "https://perkd-shopify-asset.vercel.app/membership";

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
  // loadScript(`${assetRoot}/perkd-membership-init.js`);

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

  // if (email && email != "") attr.email = email;
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
    // fetch("https://perkd-dev.ngrok.io/membership", {
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

  // TODO: Use this template for refactor
  // let el = document.createRange().createContextualFragment(`
  //   <div class="perkd-membership-widget-app" aria-live="polite">
  //     <div id="perkd-membership-widget-frame-container" style="overflow:hidden
  //      position:fixed; width:300px; height:300px;
  //      bottom:6px; right:6px; z-index:2147483649 !important;">
  //   	        <iframe title="Perkd membership Program Launcher" id="perkd-membership-widget-frame" scrolling="no"
  //              style="position:absolute; height:0; max-height:100%; max-width:100%; min-height:100%; min-width:100%; width:0; border:0; outline:0; right:0; bottom:0"/>
  //     </div>
  //     <iframe allowfullscreen name="perked-widget-launcher-frame" title="Perkd membership"></iframe>
  //   </div>`);

  // FIXME : temp width height
  let srcDoc = `<!DOCTYPE html>
  		<html lang="en-US">
          <head>
            <meta charset="utf-8">
          	<meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
          	<title>Perkd membership</title>
            <link rel="stylesheet" href="https://perkd-shopify-asset.vercel.app/membership/perkd-membership-widget.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;700&display=swap" rel="stylesheet">
          </head>
          <body>
            <div style="overflow: hidden; position: fixed; bottom: 0; right: 0">
              <div id="perkd-membership-widget-launcher"></div>
            </div>
         </body>
       </html>`;

  // FIXME: width/height is blocking the page!
  let el = document.createRange().createContextualFragment(`
    <div id="perkd-membership-widget-container"
          aria-live="polite"
          style="overflow:hidden; position:fixed;
                width: 420px;
                height: 450px;
                bottom: -6px;
                right: -2px;
                 z-index:2147483649 !important;">
      <iframe allowfullscreen
              id="perkd-membership-widget-shopify-launcher-iframe"
              title="Perkd Membership"
              style="position:absolute; height:0; max-height:100%; max-width:100%;
                       min-height:100%; min-width:100%;
                       width:0; border:0; outline:0;
                       right:0; bottom:0"
                scrolling="no"
              ></iframe>
    </div>`);

  document.body.appendChild(el);
  const iEl = getElById("perkd-membership-widget-shopify-launcher-iframe");

  if (iEl) {
    console.info(
      "[PERKD SHOPIFY] valid iframe found. Loadding script asset ..."
    );
    iEl.srcdoc = srcDoc;

    iEl.addEventListener("load", () => {
      // TODO: Load CSS via script
      loadAsyncScript(`${assetRoot}/perkd-membership-widget.min.js`);
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
//   "https://perkd-shopify-asset.vercel.app/static/perkd-membership.css";
// cssResource.rel = t ? "stylesheet" : "preload";
// cssResource.as = "style";
// document.head.appendChild(cssResource);
// })();
