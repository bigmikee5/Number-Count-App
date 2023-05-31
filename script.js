const result = document.querySelector(".result");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

// adding event to the buttons

decrease.addEventListener("click", () => {
  result.innerHTML--;
  color();
});

reset.addEventListener("click", () => {
  result.innerHTML = 0;
  color();
});

increase.addEventListener("click", () => {
  result.innerHTML++;
  color();
});

// color function

function color() {
  // less than 0
  if (result.innerHTML < 0) {
    result.style.color = "#f03e3e";
  }
  // greater than 0
  else if (result.innerHTML > 0) {
    result.style.color = "#37b24d";
  }
  // is 0
  else {
    result.style.color = "#ffffff";
  }
}
