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

  window.__perkd__init__ = {
    customerId,
    isLoggedIn: customerId.length > 0,
    shopify: true,
    shop: shopName,
    userAttributes: attr,
    lang: shopLocale,
    APIKey: APIKey,
  };
})();

(() => {
  console.log("pekrd-rewards-init script loaded");
})();
