const canvas = document.getElementById('slotCanvas');
const ctx = canvas.getContext('2d');

const symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓'];
const reelPositions = [0, 0, 0];
const reelHeight = 100;
const reelWidth = 100;
let autoSpinInterval;

function drawSlotMachine() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#3b044d';
  ctx.fillRect(50, 50, 400, 200);

  for (let i = 0; i < 3; i++) {
    const x = 75 + i * 150;
    const y = 100;
    ctx.fillStyle = 'white';
    ctx.fillRect(x, y, reelWidth, reelHeight);
    ctx.fillStyle = '#2c3e50';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbols[reelPositions[i]], x + reelWidth / 2, y + reelHeight / 2);
  }
}

function spin() {
  for (let i = 0; i < 3; i++) {
    reelPositions[i] = Math.floor(Math.random() * symbols.length);
  }
  drawSlotMachine();
  checkResult();
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
  alert('Max bet placed! Spinning the reels...');
}

function checkResult() {
  const result = reelPositions.every(pos => pos === reelPositions[0]);
  if (result) {
    alert('🎉 You Win! 🎉');
  }
}

drawSlotMachine();
