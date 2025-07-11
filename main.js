
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let mario = {
  x: 50,
  y: 350,
  width: 40,
  height: 40,
  color: "red",
  dy: 0,
  jumping: false
};

function drawMario() {
  ctx.fillStyle = mario.color;
  ctx.fillRect(mario.x, mario.y, mario.width, mario.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  mario.y += mario.dy;
  if (mario.y < 250) {
    mario.dy = 2;
  }
  if (mario.y >= 350) {
    mario.dy = 0;
    mario.y = 350;
    mario.jumping = false;
  }

  drawMario();
  requestAnimationFrame(update);
}

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") mario.x += 10;
  if (e.code === "ArrowLeft") mario.x -= 10;
  if (e.code === "Space" && !mario.jumping) {
    mario.dy = -4;
    mario.jumping = true;
  }
});

update();
