const btn = document.querySelector(".btn");
const adviceId = document.querySelector(".advice_id");
const advice = document.querySelector(".advice");
const apiUrl = "https://api.adviceslip.com/advice";

async function logAdvice() {
    const response = await fetch(apiUrl);
    const advices = await response.json();
    console.log(advices.slip);
    adviceId.innerHTML = advices.slip.id
    advice.innerHTML = advices.slip.advice
}

logAdvice();

btn.addEventListener("click", logAdvice)


  