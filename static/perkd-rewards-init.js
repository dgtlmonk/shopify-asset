(async () => {
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

  var isLoggedIn = customerId.length > 0;

  window.__perkd__init__ = {
    customerId,
    isLoggedIn,
    shopify: true,
    shop: shopName,
    userAttributes: attr,
    lang: shopLocale,
    APIKey: APIKey,
  };

  // FIXME: redundant declaration
  window.dispatchEvent(
    new CustomEvent("perkd::init-script-on-load", {
      detail: {
        customerId,
        isLoggedIn,
        shopify: true,
        shop: shopName,
        userAttributes: attr,
        lang: shopLocale,
        APIKey: APIKey,
      },
    })
  );

  if (isLoggedIn) {
    console.log(
      `@rewards-init.js -- user is ${
        isLoggedIn ? "logged in." : "not logged in."
      }`
    );

    // Attemp to check user offers
    fetch("https://perkd-dev.ngrok.io/rewards", {
      method: "POST",
      body: JSON.stringify({
        customerId: customerId,
      }),
      headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
        "Content-Type": "application/json",
      },
    });
  }
})();

(() => {
  console.log("pekrd-rewards-init script loaded");
})();
