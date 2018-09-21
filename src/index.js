// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here! 50¢, 25¢, 10¢, 5¢ and 1¢,
    // Return an object containing the minimum number of coins needed to make change
    let cur = currency;
//const p=1; n=5; d=10; q=25; h=50;
let P="P", N="N", D="D", Q="Q", H="H";
    // let keyArr=["H:","Q:","D:","N:","P:"];
    let arr = [50, 25, 10, 5, 1];
    let countArr = [];

    for (var i = 0; i < arr.length; i++) {

        if (cur / arr[i] > 0) {
            countArr[i] = Math.floor(cur / arr[i]);
            cur = cur - countArr[i] * arr[i];
        }
      //  console.log(' i ' + i + ' a ' + countArr[i] + ' c ' + cur);
    }

    let outObj = {};

    if (currency > 10000) {
        outObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if ((currency == 0)&(currency < 0)) {
        outObj = {};
    } else if (currency > 0) {
        if (countArr[0] > 0) {
            outObj.H = countArr[0];
        }
        if (countArr[1] > 0) {
            outObj.Q = countArr[1];
        }
        if (countArr[2] > 0) {
            outObj.D = countArr[2];
        }
        if (countArr[3] > 0) {
            outObj.N = countArr[3];
        }
        if (countArr[4] > 0) {
            outObj.P = countArr[4];
        }
    }
    return outObj;
};


//  console.log(outObj);
