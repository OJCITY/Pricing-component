const getSwitch = document.getElementById("toggle");
getSwitch.addEventListener("click", switchFunction);

function switchFunction() {
  let monthlyPayment = document.getElementsByTagName("h3");
  let annualPayment = document.getElementsByTagName("h4");

  let i;
  let j;

  for (i = 0; i < monthlyPayment.length; i++) {
    for (j = 0; j < annualPayment.length; j++) {
      if (monthlyPayment[i].style.display === "none") {
        monthlyPayment[i].style.display = "block";
        annualPayment[i].style.display = "none";
        getSwitch.style.display = "flex-end";
      } else {
        monthlyPayment[i].style.display = "none";
        annualPayment[i].style.display = "block";
        getSwitch.style.display = "flex-start";
      }
    }
  }
}
