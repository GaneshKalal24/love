// ---- Customize here ----
const PERSON_NAME = "Your Love"; // change this
const LINES = [
  "I made this page for you.",
  "Because you deserve reminders…",
  "that you are loved, always. ❤️"
];
// ------------------------

document.getElementById("name").textContent = PERSON_NAME;

// Typewriter
const typeEl = document.getElementById("type");
let line = 0, i = 0;

function typeLoop(){
  const text = LINES[line];
  typeEl.textContent = text.slice(0, i++);
  if(i <= text.length){
    setTimeout(typeLoop, 45);
  } else {
    setTimeout(() => {
      i = 0;
      line = (line + 1) % LINES.length;
      typeLoop();
    }, 900);
  }
}
typeLoop();

// Hearts animation
const hearts = document.getElementById("hearts");
function spawnHeart(){
  const h = document.createElement("div");
  h.textContent = "❤";
  h.style.position = "absolute";
  h.style.left = Math.random() * 100 + "vw";
  h.style.top = "110vh";
  h.style.fontSize = (12 + Math.random()*22) + "px";
  h.style.opacity = (0.25 + Math.random()*0.55).toFixed(2);
  h.style.filter = "drop-shadow(0 6px 10px rgba(0,0,0,.35))";
  h.style.transform = `translateY(0) rotate(${(Math.random()*40-20).toFixed(0)}deg)`;
  h.style.transition = "transform 6.5s linear, top 6.5s linear, opacity 6.5s linear";
  hearts.appendChild(h);

  requestAnimationFrame(() => {
    h.style.top = "-20vh";
    h.style.transform = `translateY(-120vh) translateX(${(Math.random()*80-40).toFixed(0)}px) rotate(${(Math.random()*120-60).toFixed(0)}deg)`;
    h.style.opacity = "0";
  });

  setTimeout(() => h.remove(), 7000);
}
setInterval(spawnHeart, 450);

// Modal letter
const modal = document.getElementById("modal");
document.getElementById("openLetter").onclick = () => { modal.style.display = "grid"; };
document.getElementById("closeModal").onclick = () => { modal.style.display = "none"; };
modal.addEventListener("click", (e) => { if(e.target === modal) modal.style.display = "none"; });

// Surprise
document.getElementById("surprise").onclick = () => {
  document.getElementById("surpriseText").classList.toggle("hidden");
};

// Music
const audio = document.getElementById("audio");
const btn = document.getElementById("playMusic");
btn.onclick = async () => {
  if(!audio.src) return alert("Add assets/song.mp3 first (optional).");
  if(audio.paused){
    try { await audio.play(); btn.textContent = "Pause music ⏸"; }
    catch { alert("Browser blocked autoplay—tap again."); }
  } else {
    audio.pause();
    btn.textContent = "Play music 🎵";
  }
};
