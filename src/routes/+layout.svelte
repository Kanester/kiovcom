<script lang="ts">
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  injectAnalytics({ mode: dev ? "development": "production" });
  injectSpeedInsights();

  if (typeof window !== 'undefined' && dev) import('eruda').then(eruda => eruda.init());

  let isToggled = false;
</script>

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
    © {new Date().getFullYear()} KiovCom
  </strong>
  <ul class="links">
    <li><a href="/">Home</a></li>
    <li><a href="/now">now</a></li>
    <li><a href="/blogs">Blogs</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
</footer>

<style lang="scss">
  @use "../style";
</style>