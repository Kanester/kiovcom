<script lang="ts">
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  injectAnalytics({ mode: dev ? "development" : "production" });
  injectSpeedInsights();
</script>

<header>
  <!-- nav, logo, etc -->
</header>

<main>
  <slot />
</main>

<footer>
  <!-- footer content -->
</footer>

<style lang="scss" global>
  // -----------------------------
  // Variables (SASS)
  // -----------------------------
  $bg-light: #f9f9f9;
  $bg-dark: #111;
  $text-light: #111;
  $text-dark: #f9f9f9;
  $max-width: 768px;
  $font-main: system-ui, sans-serif;
  
  @font-face {
  	font-family: 'Sarina';
  	src: url('/fonts/Sarina-Regular.ttf') format('truetype'); // TODO: place the font on right path
  	font-weight: 400;
  	font-style: normal;
  	font-display: swap;
  }


  // -----------------------------
  // Reset
  // -----------------------------
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: $font-main;
    background: $bg-light;
    color: $text-light;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    transition: background 0.3s ease, color 0.3s ease;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background: $bg-dark;
      color: $text-dark;
    }
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  // -----------------------------
  // Layout Structure
  // -----------------------------
  main {
    max-width: $max-width;
    margin: 0 auto;
    padding: 1rem;
  }

  header, footer {
    padding: 1rem;
  }
  
  .container-fluid {
    max-width: 100vw;
    padding: auto;
    margin: auto;
  }
  
  .brand {
    font-family: 'Sarina', cursive;
  }
</style>