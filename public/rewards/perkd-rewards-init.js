(async () => {
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
  } else {
    console.log("[PERKD INIT SCRIPT] User not logged in.");
  }

  console.log("pekrd-rewards-init script loaded");
})();
