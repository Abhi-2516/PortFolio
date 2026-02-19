const newPortfolioURL = "https://abhishek-yadav-zeta.vercel.app/";

let seconds = 5;
const countdownElement = document.getElementById("countdown");
const progressBar = document.getElementById("progressBar");

const totalTime = 5;
let elapsed = 0;

const timer = setInterval(() => {
  seconds--;
  elapsed++;

  countdownElement.textContent = seconds;

  let progressPercent = (elapsed / totalTime) * 100;
  progressBar.style.width = progressPercent + "%";

  if (seconds <= 0) {
    clearInterval(timer);
    window.location.href = newPortfolioURL;
  }

}, 1000);
