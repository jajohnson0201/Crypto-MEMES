

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ca0f9543cemshc837d4d0216102bp14f67cjsn5bb262bfcf80',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

function searchingCoin() {
    var coinInfo = fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h', options)
        .then(function (response) {
            // response.json()
            return response.json()
        })
        .then(function (response) {
            console.log(response)
            return response
        })
        .catch(function (err) {
            console.error(err)
        });
    return coinInfo
}
searchingCoin();

function getCoinsInfo() {
    var coinsInfo;
    fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data.data.coins)
                    console.log(data.data.coins.length)
                    coinsInfo = data.data.coins
                    console.log("inside data")
                        function getCoinsNames () {
                                for(var n = 0; n < coinsInfo.length; n++){
                                    console.log(coinsInfo[n].name)
                                }
                        }
                    getCoinsNames();
                })
            }
        })
        .catch(function (err) {
            console.error(err)
        });


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

    return coinsInfo
}


//getCoinsNames();

var coinsNames = getCoinsInfo();
console.log(coinsNames);
//console.log(searchingCoin());


