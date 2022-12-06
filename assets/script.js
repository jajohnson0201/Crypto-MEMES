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
var coinValue = document.querySelector("#coin-value");
var gif1 = document.querySelector("#gif1");
var gif2 = document.querySelector("#gif2");

var resultTextEl = document.querySelector('#result-text');
var priceContentEl = document.querySelector('#price');
var coinListContentEl = document.querySelector('#coin-list');
var gifContentEl = document.querySelector('#gif');
var memeContentEl = document.querySelector('#meme');
var searchFormEl = document.querySelector('#search-form');

// Function for displaying price results
function printPriceResults(priceObj) {
  console.log(priceObj);

  // set up `<div>` to hold result content
  var priceBody = document.createElement('div');

  var titleEl = document.createElement('h3');
  titleEl.textContent = priceObj.coins[0].name;

  var bodyContentEl = document.createElement('div');
  bodyContentEl.innerHTML =
    priceObj.coins[0].symbol + '<br>';
    priceObj.coins[0].iconUrl + '<br>';
    priceObj.coins[0].price + '<br/>';
    priceObj.coins[0].change;


  priceBody.append(titleEl, bodyContentEl);

  coinValue.append(priceBody);
}

// Function for displaying GIF
function printGifResults(gifObj1) {
  console.log(gifObj1);

  // set up `<div>` to hold result content
  var gifCard = document.querySelector('#gif-1');
  gifCard.append(gifBody);

  var bodyContentEl = document.createElement('div');
  bodyContentEl.innerHTML =
    gifObj1 + '<br/>';

  gifBody.append(bodyContentEl);

  gif1.append(gifCard);
}

// Function for displaying MEME
function printGifResults(gifObj2) {
  console.log(gifObj2);

  // set up `<div>` to hold result content
  var gifCard = document.querySelector('#gif-2');
  gifCard.append(gifBody);

  var bodyContentEl = document.createElement('div');
  bodyContentEl.innerHTML =
    gifObj2 + '<br/>';

  gifBody.append(bodyContentEl);

  gif2.append(gifCard);
}



const options = {
    method: 'GET',
    url: 'https://api.coinranking.com/v2/coins',
    headers: {
        'x-access-token': 'ca0f9543cemshc837d4d0216102bp14f67cjsn5bb262bfcf80',
        
    }
};
var coinInfo ;
function searchingCoin(input) {
     fetch('https://api.coinranking.com/v2/coins?search='+input, options)
        .then(function (response) {
            // response.json()
            return response.json()
        })
        .then(function (response) {
            console.log(response)
             coinInfo = response;
            printPriceResults(coinInfo);
            var coinChange = coinInfo.coins[0].change;
            gifDisplay(coinChange);
        })
        .catch(function (err) {
            console.error(err)
        });
    return coinInfo
}
function clearPageResults(){
    coinValue.innerHTML= "";
    gif1.innerHTML= "";
    gif2.innerHTML="";
}


//GIF fetch  
//var GifAPIkey = 'S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3' this key is already included in the GifURLrequest
var cryptoValue = 0 //positive, neutral, or negative value change of searched cryptocurrency
//var GifURLrequest = 'https://api.giphy.com/v1/gifs/search?api_key=S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3&q=' + cryptoValue + '&limit=25&offset=0&rating=g&lang=en';


if (cryptoValue === 1) {
    //search for Gifs labeled with the tag 'celebrate'
    var GifURLrequest = 'https://api.giphy.com/v1/gifs/search?api_key=S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3&q=celebrate&limit=25&offset=0&rating=g&lang=en';
    fetch(GifURLrequest)
    //return json results
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.data[0].images.original.mp4); //<--- this is the path to the url for the mp4 that will be displayed
    })
} else if (cryptoValue === -1) {
    //searhc for Gifs labeled with the tag 'oh no'
    var GifURLrequest = 'https://api.giphy.com/v1/gifs/search?api_key=S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3&q=oh+no&limit=25&offset=0&rating=g&lang=en';
    fetch(GifURLrequest)
    //return json results
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.data[2].images.original.mp4) //<--- this is the path to the url for the mp4 that will be displayed
    })
} else {
    //searhc for Gifs labeled with the tag 'unsure'
    var GifURLrequest = 'https://api.giphy.com/v1/gifs/search?api_key=S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3&q=unsure&limit=25&offset=0&rating=g&lang=en';
    fetch(GifURLrequest)
    //return json results
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data.data[1].images.original.mp4) //<--- this is the path to the url for the mp4 that will be displayed
    })
} ;

//to randomize gifs: use a random number generator to choose number from array (of 25?), use the random array number in the path to the mp4 url






var searchButton = document.querySelector(".button");
var input = document.querySelector(".input");

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    var typedInput = input.value;
    clearPageResults()
    searchingCoin(typedInput);

    
});

