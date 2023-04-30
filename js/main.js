const rates = document.querySelectorAll(".rate span");
const btn = document.querySelector("a");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thank-you");
const rateSpan = document.querySelector(".thank-you>div>span");
let rateVal;
rates.forEach((rate, index) => {
  rate.addEventListener("click", function (e) {
    // assign the selected rate to the variable
    rateVal = index + 1;
    // remove the active class from all spans
    rates.forEach((rate) => {
      rate.classList.remove("active");
    });
    // add the active class to the clicked rate
    e.target.classList.add("active");
  });
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  rating.style.display = "none";
  rateSpan.textContent = rateVal;
  thanks.style.display = "block";
});
