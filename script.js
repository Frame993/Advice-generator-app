const button = document.querySelector("button");
const URL = "https://api.adviceslip.com/advice";

window.onload = () => {
    randomAdvice()
}
randomAdvice = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => mostrarAdvice(data))
}

mostrarAdvice = (data) => {
  const advice = data.slip.advice;
  const adviceNumber = data.slip.id;
  document.querySelector("h5 span").innerHTML = adviceNumber;
  document.querySelector("h3").innerHTML = advice;
}

button.addEventListener("click", randomAdvice)