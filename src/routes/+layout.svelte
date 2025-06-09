<script lang="ts">
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import { onMount, onDestroy } from "svelte";

  injectAnalytics({ mode: dev ? "development": "production" });
  injectSpeedInsights();

  if (typeof window !== "undefined" && dev) {
  import("eruda").then((eruda) => eruda.init());
  }

  let isToggled = false;
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

<header>
  <nav class="navbar">
    <div class="top">
      <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="KiöVcom logo">
        <text
          x="10"
          y="35"
          font-family="Sarina, cursive"
          font-size="35"
          fill="url(#gradientAccentCrisp)"
          stroke="black"
          stroke-width="5"
          paint-order="stroke"
          >
          KiöVcom
        </text>

        <defs>
          <linearGradient id="gradientAccentCrisp" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3468a7" />
            <stop offset="25%" stop-color="#3468a7" />

            <stop offset="25%" stop-color="#2c8c74" />
            <stop offset="50%" stop-color="#2c8c74" />

            <stop offset="50%" stop-color="#6aa84f" />
            <stop offset="75%" stop-color="#6aa84f" />

            <stop offset="75%" stop-color="#b5484d" />
            <stop offset="100%" stop-color="#b5484d" />
          </linearGradient>
        </defs>
      </svg>

      <button on:click={() => isToggled = !isToggled} aria-label="Toggle Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <ul class={isToggled ? "show": ""}>
      <li><a href="/">Home</a></li>
      <li><a href="/now">Now</a></li>
      <li><a href="/blogs">Blogs</a></li>
      <li><a href="/projects">Projects</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <strong>
    © {new Date().getFullYear()} KiövCom
  </strong>
  <p>
    <span>Created by KnxTr/Kiö</span>
  </p>
  <ul class="links">
    <li><a href="/">Home</a></li>
    <li><a href="/now">now</a></li>
    <li><a href="/blogs">Blogs</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
</footer>

<div id="kofi">
  <a href="https://ko-fi.com/kiovcom/tip" target="_blank">
    <img src="https://storage.ko-fi.com/cdn/cup-border.png" style="height: 20px; vertical-align: middle; margin-right: 6px;">
    Buy me coffee
  </a>
</div>

<style lang="scss">
  @use "../style";
</style>