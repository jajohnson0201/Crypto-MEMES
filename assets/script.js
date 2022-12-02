
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
    return coinsInfo
}


//getCoinsNames();

var coinsNames = getCoinsInfo();
console.log(coinsNames);
//console.log(searchingCoin());


