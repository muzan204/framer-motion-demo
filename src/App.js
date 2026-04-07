// Criar estilo do body
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "linear-gradient(135deg, #0f0f0f, #1a1a2e)";
document.body.style.overflow = "hidden";

// Criar quadrado
const box = document.createElement("div");

box.style.width = "120px";
box.style.height = "120px";
box.style.background = "linear-gradient(135deg, cyan, purple)";
box.style.boxShadow = "0 0 40px rgba(0,255,255,0.7)";
box.style.borderRadius = "20%";
box.style.position = "absolute";

document.body.appendChild(box);

// Animação
let t = 0;

function animate() {
  t += 0.02;

  // Movimento
  let x = Math.sin(t) * 150;
  let y = Math.cos(t) * 150;

  // Rotação
  let rotate = t * 180;

  // Forma
  let radius = (Math.sin(t) + 1) * 25;

  box.style.transform = `
    translate(${x}px, ${y}px)
    rotate(${rotate}deg)
  `;

  box.style.borderRadius = radius + "%";

  requestAnimationFrame(animate);
}

animate();