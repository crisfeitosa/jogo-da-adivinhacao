const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  console.log(randomNumber);

  if(Number(inputNumber.value) < 0) {
    alert('Por favor, digite um número positivo.');
  }

  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document
      .querySelector(".screen2 h2")
      .innerText = `acertou em ${xAttempts} tentativas`;
  }

  xAttempts++;

}