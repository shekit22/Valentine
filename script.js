const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const music = document.getElementById("bgMusic");
const meme = document.getElementById("yesMeme");

// Start music on first interaction (browser rule)
document.addEventListener("click", () => {
  music.play();
}, { once: true });

// NO button runs away 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 260 - 130;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button magic 💖
yesBtn.addEventListener("click", () => {
  result.innerHTML = "🥹💖 YAYYY!! Best decision ever 💖🥹";
  meme.style.display = "block";
});
