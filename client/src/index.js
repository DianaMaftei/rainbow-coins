
//auto include all files in this folder (src)
//otherwise we had to manually import all the files: import X from './module/x.js' 
var context = require.context('./', true, /\.(js|jsx|css|scss)$/);
var files = {};

context.keys().forEach((filename) => {
    console.log(filename);
    files[filename] = context(filename);
});


//TODO find a way to create the main HTML elements and chain the components rendering

const ex = [
    {
        symbol: "BTC",
        name: "Bitcoin",
        prices: [
            {
                "ts": 8423,//unix timestamp day 
                "p": { "USD": 432.18, "EUR": 399.57 },
            },
            {
                "ts": 222,
                "p": { "USD": 432.18, "EUR": 399.57, "BTC": 1.0 },
            },
        ]
    }
]

//pt fiecare currency (p) BTC - USD , BTC - EUR ...
//http://recharts.org/#/en-US/examples/SynchronizedLineChart

//toate symbolurile istoric in USD,  
//http://recharts.org/#/en-US/examples/StackedAreaChart

//https://blockchain.info/charts