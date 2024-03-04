let fromCurrency = document.querySelector("#fromCurrency");
let toCurrency = document.querySelector("#toCurrency");
let convert = document.querySelector("#btn-convert")
let forAmount = document.querySelector("#fromAmount")
let finalAmount = document.querySelector("#final-amount")
let exchangerate = document.querySelector("#ex-rate")





const Base_URL = 'https://open.er-api.com/v6/latest/'

async function getexchangerate(from,to){
    let URL = `${Base_URL}${from}`
    const res = await fetch(URL);
    const obj = await res.json();
     let rate = obj.rates[to]
      calculate(rate,from,to)
     
}  
function calculate(rate,from,to){
   finalAmount.innerText = `Amount: ${forAmount.value * rate} ${to}`
   exchangerate.innerText = `1 ${countryCodes[from]} = ${rate} ${countryCodes[to]}`

}
for (const key in countryCodes) {
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");
    opt1.innerText = key;
    opt2.innerText = key;
    fromCurrency.append(opt1);
    toCurrency.append(opt2); 
    fromCurrency.value = "USD";
    toCurrency.value = "INR"; 
}
    
convert.addEventListener("click",()=>{
    let from = fromCurrency.value 
    let to = toCurrency.value
    //console.log(forAmount.value)
    
     getexchangerate(from,to)
    //calculate(exchangerate)


})





