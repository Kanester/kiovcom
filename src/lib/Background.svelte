<script lang="ts">
    import { onMount, onDestroy } from "svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let stars: { x: number; y: number; r: number; a: number; depth: number }[] = [];

  let mouseX = 0;
  let mouseY = 0;

  function generateStars() {
  stars = Array(100).fill(null).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.2,
  a: Math.random(),
  depth: Math.random(), // 0 = closest, 1 = farthest
  }));
  }

  function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  generateStars();
  drawStars();
  }

  function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((s) => {
  const offsetX = (mouseX - canvas.width / 2) * s.depth * 0.02;
  const offsetY = (mouseY - canvas.height / 2) * s.depth * 0.02;

  ctx.beginPath();
  ctx.arc(s.x + offsetX, s.y + offsetY, s.r, 0, 2 * Math.PI);
  ctx.fillStyle = `rgba(255,255,255,${s.a})`;
  ctx.fill();
  });
  }

  function handleMouse(e: MouseEvent) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  drawStars();
  }

  function handleTouch(e: TouchEvent) {
  if (e.touches.length > 0) {
  mouseX = e.touches[0].clientX;
  mouseY = e.touches[0].clientY;
  drawStars();
  }
  }

  onMount(() => {
  ctx = canvas.getContext("2d")!;
  resize();

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", handleMouse);
  window.addEventListener("touchstart", handleTouch);
  window.addEventListener("touchmove", handleTouch);

  onDestroy(() => {
  window.removeEventListener("resize", resize);
  window.removeEventListener("mousemove", handleMouse);
  window.removeEventListener("touchstart", handleTouch);
  window.removeEventListener("touchmove", handleTouch);
  });
  });
</script>

<canvas bind:this={canvas}></canvas>

<style lang="scss">
canvas {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -9999;
	background: transition;
}
</style>