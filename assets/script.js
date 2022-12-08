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
  priceBody.setAttribute('id', 'price-body');

  var titleEl = document.createElement('h3');
  titleEl.textContent = 'Name: ' + priceObj.data.coin.name;

  var bodyContentEl = document.createElement('div');
  bodyContentEl.innerHTML =
    'Symbol: ' + priceObj.data.coin.symbol + '<br>'+
    'Price: ' + priceObj.data.coin.price + '<br/>'+
    'Price Change: ' + priceObj.data.coin.change
    

    var icon = priceObj.data.coin.iconUrl 
    var img = document.createElement('img');
    img.src = icon;

    var imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'icon');
    imgDiv.appendChild(img);
    bodyContentEl.appendChild(imgDiv);

  priceBody.append(titleEl, bodyContentEl);

  coinValue.append(priceBody);
}

// Function for displaying GIF
function printGifResults(gifObj) {
  console.log(gifObj);
  
  gifCard.classList.add('card');
  var gifBody = document.createElement('div');
  gifBody.classList.add('card-body');
  gifCard.append(gifBody);

  var bodyContentEl = document.createElement('div');
  bodyContentEl.innerHTML =
    gifObj + '<br/>';

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

// options value for the fetch headers and method
const options = {
    method: 'GET',
    
    headers: {
        'X-RapidAPI-Key': 'ca0f9543cemshc837d4d0216102bp14f67cjsn5bb262bfcf80',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};
var coinNameUUID=[];
// getCoinsUUID function is a fetch that stores coins in local storage, 
//  and their specific URL parameters... also makes an array of objects for
//  future project ideas...
function getCoinsUUID () {
    fetch('https://coinranking1.p.rapidapi.com/coins?'+
    'referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&'+
    'orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        .then(function (response){
            return response.json()
        }) 
        .then(function(response){
            console.log(response);
            for(i=0;i<50;i++){
                var name = response.data.coins[i].name;
                var uuid = response.data.coins[i].uuid;
                localStorage.setItem(name, JSON.stringify(uuid));
               var NameUUID={
                name: response.data.coins[i].name,
                uuid: response.data.coins[i].uuid
                }
                coinNameUUID.push(NameUUID);
            }
            console.log(coinNameUUID);
        })
}
getCoinsUUID();

var coinName;
var uuid;

// this getUUID function is getting the uuid value from local storage,
//  related to a specific coin, then runs the searchingCoin function with that uuid.
function getUUID(){
     uuid = JSON.parse(localStorage.getItem(coinName));
     console.log(uuid);
     searchingCoin(uuid);
}

var coinInfo ;
console.log(options);

// searchingCoin function uses the uuid of a coin to search a specific coin,
//  then uses the data returned from that to run the display functions...
function searchingCoin(input) {
     fetch('https://coinranking1.p.rapidapi.com/coin/'+input+
     '?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h', options)
        .then(function (response) {
            // response.json()
            return response.json()
        })
        .then(function (response) {
            console.log(response)
             coinInfo = response;
            printPriceResults(coinInfo);
            var coinChange = coinInfo.data.coin.change;
            gifDisplay(coinChange);
        })
        .catch(function (err) {
            console.error(err)
        });
    return coinInfo
}

// clearPageResults function is for resetting the page when a new coin is searched.
function clearPageResults(){
    coinValue.innerHTML= "";
    console.log("clearPageResults");
    console.log(gif1);
    gif1.innerHTML= "";
    gif2.innerHTML="";
}

//GIF fetch  
  //var GifAPIkey = 'S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3' <---this key is already included in the GifURLrequest
  //var GifURLrequest = 'https://api.giphy.com/v1/gifs/search?api_key=S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3&q=' + cryptoValue + '&limit=25&offset=0&rating=g&lang=en';

function gifDisplay(cryptoValue){
if (cryptoValue > 1) {
    //search for Gifs labeled with the tag 'celebrate'
    var GifURLrequest = 'https://api.giphy.com/v1/gifs/search?api_key=S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3&q=celebrate&limit=25&offset=0&rating=g&lang=en';
    fetch(GifURLrequest)
    //return json results
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
      console.log(data.data[0].images.original.mp4); //<--- this is the path to the url for the mp4 that will be displayed
  // set up `<div>` to hold result content
      var gifCard = document.querySelector('#gif1');
      gifimg = new Image(200, 200);
      gifimg.src = data.data[0].images.original.url;
      gifCard.appendChild(gifimg);
    })
} else if (cryptoValue < -1) {
    //searhc for Gifs labeled with the tag 'oh no'
    var GifURLrequest = 'https://api.giphy.com/v1/gifs/search?api_key=S3VasUEiDf5XXAyFPT9xCzfa0unw9jt3&q=oh+no&limit=25&offset=0&rating=g&lang=en';
    fetch(GifURLrequest)
    //return json results
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
      console.log(data.data[2].images.original.url) //<--- this is the path to the url for the mp4 that will be displayed
      var gifCard = document.querySelector('#gif1');
      gifimg = new Image(200, 200);
      gifimg.src = data.data[2].images.original.url;
      gifCard.appendChild(gifimg);
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
        console.log(data.data[1].images.original.url) //<--- this is the path to the url for the mp4 that will be displayed
        var gifCard = document.querySelector('#gif1');
        gifimg = new Image(200, 200);
        gifimg.src = data.data[1].images.original.url;
        gifCard.appendChild(gifimg);
      })
    } ;
}


var searchButton = document.querySelector(".button");
var input = document.querySelector(".input");
// this event listener takes the input value from the user when the search button is clicked
// and converts the first letter to capital; to work with saved local storage.
// this is also where the functions to get coin data and reset page are called.
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    var inputValue = input.value;
    var typedInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    coinName=typedInput;
    clearPageResults()
    getUUID();
   // searchingCoin(typedInput);

    
});

var modalXButton = document.querySelector("#modal-x-button");
var modal = document.querySelector("#modal");
modalXButton.addEventListener("click", function(event){
    event.preventDefault();
    modal.classList.remove("is-active");
});
