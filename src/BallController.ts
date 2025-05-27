import { Ball } from "./Ball";

let richtung = { dx: 0, dy: 0 };
const geschwindigkeit = 2;

// Klassisch geschriebene Funktionen
function setzeBewegung(dx: number, dy: number): void {
  richtung = { dx, dy };
}

function stoppeBewegung(): void {
  richtung = { dx: 0, dy: 0 };
}

function animate(ball: Ball): void {
  if (richtung.dx !== 0 || richtung.dy !== 0) {
    ball.move(richtung.dx, richtung.dy);
  }
  requestAnimationFrame(() => animate(ball));
}

document.addEventListener("DOMContentLoaded", () => {
  const ballElement = document.getElementById("ball") as HTMLDivElement;
  const ball = new Ball(ballElement);

  // Kompakte Arrow Functions für Eventhandler
  document
    .getElementById("hoch")
    ?.addEventListener("mousedown", () => setzeBewegung(0, -geschwindigkeit));
  document
    .getElementById("runter")
    ?.addEventListener("mousedown", () => setzeBewegung(0, geschwindigkeit));
  document
    .getElementById("links")
    ?.addEventListener("mousedown", () => setzeBewegung(-geschwindigkeit, 0));
  document
    .getElementById("rechts")
    ?.addEventListener("mousedown", () => setzeBewegung(geschwindigkeit, 0));

  document.addEventListener("mouseup", stoppeBewegung);

  // 🔥 Tastatursteuerung
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        setzeBewegung(0, -geschwindigkeit);
        break;
      case "ArrowDown":
        setzeBewegung(0, geschwindigkeit);
        break;
      case "ArrowLeft":
        setzeBewegung(-geschwindigkeit, 0);
        break;
      case "ArrowRight":
        setzeBewegung(geschwindigkeit, 0);
        break;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      stoppeBewegung();
    }
  });

  animate(ball);
});
