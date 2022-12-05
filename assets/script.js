
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