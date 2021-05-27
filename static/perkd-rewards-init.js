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

  if (isLoggedIn) {
    console.log(" calling offers api");
    // FIXME: temp proxy
    fetch(`https://perkd-dev.ngrok.io/offers`, {
      method: "GET",
      body: JSON.stringify({
        customerId,
      }),
    });

    // if (window.fetch) {
    //   fetch(`https://${shopName}/discount/abc`, {
    //     method: "GET",
    //   });
    // }
  }
})();

(() => {
  console.log("pekrd-rewards-init script loaded");
})();
