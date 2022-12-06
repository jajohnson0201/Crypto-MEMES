// var CryptoURLKey = "c0d814a3-6f9c-4545-83cd-ba117c72922e";
// var CryptoURL = "https://pro-api.pricemarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY="
// + CryptoURLKey;
// // https://pro-api.pricemarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=c0d814a3-6f9c-4545-83cd-ba117c72922e

// fetch(CryptoURL)
// .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });


var resultTextEl = document.querySelector('#result-text');
var priceContentEl = document.querySelector('#price');
var coinListContentEl = document.querySelector('#coin-list');
var gifContentEl = document.querySelector('#gif');
var memeContentEl = document.querySelector('#meme');
var searchFormEl = document.querySelector('#search-form');
// test objects
var testObj1 = {
  title: "test title",
  price: "test price",
}
var testObj2 = {
  title: "test title",
  price: "test price",
}
var testObj3 = {
  title: "test title",
  price: "test price",
}
var testObj4 = {
  title: "test title",
  price: "test price",
}
// Function for displaying price results
function printPriceResults(priceObj) {
  console.log(priceObj);

  // set up `<div>` to hold result content
  var priceCard = document.querySelector('#price-content');
  priceCard.classList.add('card');
  var priceBody = document.createElement('div');
  priceBody.classList.add('card-body');
  priceCard.append(priceBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = priceObj.title;

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Price:</strong> ' + priceObj.price + '<br/>';

  if (priceObj.lastDay) {
    bodyContentEl.innerHTML +=
      '<strong>Last 24 Hours:</strong> ' + priceObj.lastDay.join(', ') + '<br/>';
  } else {
    bodyContentEl.innerHTML +=
      "'<strong>Last 24 Hours:</strong> No data for this coin's last 24 hours.";
  }

  priceBody.append(titleEl, bodyContentEl);

  priceContentEl.append(priceCard);
}

// Function for displaying coin list
function printCoinListResults(coinListObj) {
  console.log(coinListObj);

  // set up `<div>` to hold result content
  var coinListCard = document.querySelector('#coin-list-content');
  coinListCard.classList.add('card');
  var coinListBody = document.createElement('div');
  coinListBody.classList.add('card-body');
  coinListCard.append(coinListBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = 'Popular Coins:';

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    coinListObj.list + '<br/>';

  coinListBody.append(titleEl, bodyContentEl);

  coinListContentEl.append(coinListCard);
}

// Function for displaying GIF
function printGifResults(gifObj) {
  console.log(gifObj);

  // set up `<div>` to hold result content
  var gifCard = document.querySelector('#gif-content');
  gifCard.classList.add('card');
  var gifBody = document.createElement('div');
  gifBody.classList.add('card-body');
  gifCard.append(gifBody);

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    gifObj + '<br/>';

  gifBody.append(bodyContentEl);

  gifContentEl.append(gifCard);
}

// Function for displaying MEME
function printMemeResults(memeObj) {
  console.log(memeObj);

  // set up `<div>` to hold result content
  var memeCard = document.querySelector('#meme-content');
  memeCard.classList.add('card');
  var memeBody = document.createElement('div');
  memeBody.classList.add('card-body');
  memeCard.append(memeBody);

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    memeObj + '<br/>';

  memeBody.append(bodyContentEl);

  memeContentEl.append(memeCard);
}
// testing printPriceResults
printPriceResults(testObj1)
printCoinListResults(testObj2)
printGifResults(testObj3)
printMemeResults(testObj4)