var assetRoot = "https://perkd-shopify-asset.vercel.app/static";

function loadScript(e) {
  var t = document,
    r = t.createElement("script");
  (r.type = "text/javascript"),
    (r.async = false),
    (r.defer = true),
    (r.src = `${e}?${Math.random() * 999}`), // cache buster
    t.querySelector("head").appendChild(r);
}

// TODO: refactor loading scripts

// (() => {
//   let e = document.createElement("link").relList,
//     t = !!(e && e.supports && e.supports("prefetch"));

//   function loadResource(srcUrl, relType, asType = "script") {
//     let i = document.createElement("link");
//     (i.href = srcUrl),
//       t ? (i.rel = "prefetch") : ((i.rel = relType), (i.as = asType)),
//       document.querySelector("head").appendChild(i);
//   }

//   loadResource(`${assetRoot}/perkd-rewards.css`, "stylesheet", "style");
// })

(async () => {
  loadScript(`${assetRoot}/perkd-rewards-init.js`);

  function getElById(id) {
    return document.getElementById(id);
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
    <div id="perkd-rewards-widget-wrapper"
          aria-live="polite"
          style="overflow:hidden; position:fixed;
                 width:300px; height:300px;
                 bottom:6px; right:6px;
                 z-index:2147483649 !important;">
      <div>
    	  <iframe id="perkd-rewards-widget-frame"
                title="Perkd Rewards Program Launcher"
                style="position:absolute; height:0; max-height:100%; max-width:100%;
                       min-height:100%; min-width:100%;
                       width:0; border:0; outline:0;
                       right:0; bottom:0"
                scrolling="no"/>
        </div>
      <iframe allowfullscreen id="perked-widget-launcher-frame" title="Perkd Rewards"/>
    </div>`);

  document.body.appendChild(el);
  const iEl = getElById("perkd-rewards-widget-launcher-frame");

  if (iEl) {
    console.info("perkd iframe found");
    iEl.srcdoc = srcDoc;

    iEl.addEventListener("load", () => {
      // TODO: Load CSS via script
      loadScript(`${assetRoot}/perkd-rewards-widget.min.js`);
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
