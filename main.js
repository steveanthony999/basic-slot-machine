const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const winnerText = document.getElementById('winner-text');
const loserText = document.getElementById('loser-text');

const symbols = ['🚀', '🌌', '🪐', '🌠', '🌕'];

spinButton.addEventListener('click', () => {
  Promise.all([spinReel(reel1), spinReel(reel2), spinReel(reel3)]).then(
    ([symbol1, symbol2, symbol3]) => {
      checkResult(symbol1, symbol2, symbol3);
    }
  );
});

const spinReel = (reel) => {
  winnerText.style.display = 'none';
  loserText.style.display = 'none';
  return new Promise((resolve) => {
    let spins = 10 + Math.floor(Math.random() * 10); // 10 to 20 spins
    let interval = setInterval(() => {
      const selectedSymbol =
        symbols[Math.floor(Math.random() * symbols.length)];
      reel.textContent = selectedSymbol;
      spins--;
      if (spins <= 0) {
        clearInterval(interval);
        resolve(selectedSymbol); // Resolve the promise with the selected symbol
      }
    }, 100);
  });
};

const checkResult = (symbol1, symbol2, symbol3) => {
  if (symbol1 === symbol2 && symbol2 === symbol3) {
    loserText.style.display = 'none';
    winnerText.style.display = 'block';
  } else {
    winnerText.style.display = 'none';
    loserText.style.display = 'block';
  }
};
