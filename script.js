const symbols = ["", "", "", "", "", ""];
let autoSpinInterval;

function spin() {
  const reel1 = document.getElementById("reel1");
  const reel2 = document.getElementById("reel2");
  const reel3 = document.getElementById("reel3");
  const result = document.getElementById("result");

  const random1 = Math.floor(Math.random() * symbols.length);
  const random2 = Math.floor(Math.random() * symbols.length);
  const random3 = Math.floor(Math.random() * symbols.length);

  reel1.textContent = symbols[random1];
  reel2.textContent = symbols[random2];
  reel3.textContent = symbols[random3];

  if (symbols[random1] === symbols[random2] && symbols[random2] === symbols[random3]) {
    result.textContent = " You Win! ";
  } else {
    result.textContent = "Try Again!";
  }
}

function autoSpin() {
  if (autoSpinInterval) {
    clearInterval(autoSpinInterval);
    autoSpinInterval = null;
  } else {
    autoSpinInterval = setInterval(spin, 1000);
  }
}

function maxBet() {
  spin();
  alert("Max bet placed! Spinning the reels...");
}
