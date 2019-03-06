const exchangeRateus = 23.216;
const exratekwn = 20.66;
const exrateinr = 328.52;
const exrateeur = 26403.96;
//rate   



function vndToUsd(amountVnd) {
    return Math.round(amountVnd / exchangeRateus);
}
function amountUsdToVnd(amountUsd) { return Math.round(amountUsd * exchangeRateus); }

function krwToVnd(amountKw) {
    return Math.round(amountKw * exratekwn);
}
function vndToKrw(amountVn) {
    return Math.round(amountVn / exratekwn);
}
function inrToVnd(amountinr) {
    return Math.round(amountinr * exrateinr);
}
function vndToInr(amountvnd) {
    return Math.round(amountvnd / exrateinr);
}
function eurToVnd(amounteur) {
    return Math.round(amounteur * exrateeur);
}
function vndToEur(amountvnd) {
    return Math.round(amountvnd/ exrateeur);
}

// from to usd 
function krwToUsd(amountkw) {
    return Math.round(amountkw / exchangeRateus);
}
function amountUsdTokw(amountUsd) { return Math.round(amountUsd * exchangeRateus); }

function krwToVnd(amountKw) {
    return Math.round(amountKw * exratekwn);
}
function vndToKrw(amountVn) {
    return Math.round(amountVn / exratekwn);
}
function inrToVnd(amountinr) {
    return Math.round(amountinr * exrateinr);
}
function vndToInr(amountvnd) {
    return Math.round(amountvnd / exrateinr);
}
function eurToVnd(amounteur) {
    return Math.round(amounteur * exrateeur);
}
function vndToEur(amountvnd) {
    return Math.round(amountvnd/ exrateeur);
}


let money2;
let money1;
let result;
let amount;

//let resultlocal; 
function output() { //let resultlocal = result.toLocaleString('en'); 
    money1 = document.getElementById("inputmoney1").value;
    money2 = document.getElementById("inputmoney2").value;

    switch (money.toUpperCase()) {
        case 'USD':
            amount = document.getElementById("inputnum").value;
            if (isNaN(parseInt(amount)))
             { document.getElementById("alert").innerHTML= `please enter a number!`}
            else { result = amountUsdToVnd(amount); }
            break;
        case 'VND':
            amount = document.getElementById("inputnum").value;
            if (isNaN(parseInt(amount))) 
            { document.getElementById("alert").innerHTML= `please enter a number!`}
            else { result = vndToUsd(amount); }
            break;
        case 'KRW':
            amount = document.getElementById("inputnum").value;
            if (isNaN(parseInt(amount))) 
            { document.getElementById("alert").innerHTML= `please enter a number!`}
            else { result = krwToVnd(amount); }
            break;
        case 'INR':
            amount = document.getElementById("inputnum").value;
            if (isNaN(parseInt(amount))) 
            { document.getElementById("alert").innerHTML= `please enter a number!`}
            else { result = inrToVnd(amount); }
            break;
        case 'EUR':
            amount = document.getElementById("inputnum").value;
            if (isNaN(parseInt(amount))) 
            { document.getElementById("alert").innerHTML= `please enter a number!`}
            else { result = eurToVnd(amount); }
            break;
        default: document.getElementById("alert").innerHTML = 'Please just enter USD,VND,KRW,INR,or EUR only!';
    }
    
    document.getElementById("resultshow").value = result;

}

//  let commanum = result.tolocal

document.getElementById("convert").addEventListener("click", output);





//let amountVND = prompt("How much VND?");

//let result= amountUsdtoVnd(amountVND);
//console.log (result);


