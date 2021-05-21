(async () => {
  // TODO: preload UI preference from head scripTag
  //  n = await window.__smile_ui_init_data__;
  let d = document
    .createRange()
    .createContextualFragment('<div class="perkd-init-container"></div>');
  document.body.appendChild(d);
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
