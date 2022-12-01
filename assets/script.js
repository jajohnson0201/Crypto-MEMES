var CryptoURLKey = "c0d814a3-6f9c-4545-83cd-ba117c72922e";
var CryptoURL = "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY="
+ CryptoURLKey;
// https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=c0d814a3-6f9c-4545-83cd-ba117c72922e

fetch(CryptoURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });