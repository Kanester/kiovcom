<script lang="ts">
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  let menuOpen = false;

  injectAnalytics({ mode: dev ? "development" : "production" });
  injectSpeedInsights();
</script>

<header>
  <nav class="navbar">
    <div class="brand">
      <a href="/">KiövCom</a>
    </div>

    <button
      class="hamburger"
      aria-label="Toggle navigation menu"
      on:click={() => (menuOpen = !menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-links" class:open={menuOpen}>
      <a href="/">Home</a>
      <a href="/now">Now</a>
      <a href="/project">Project</a>
      <a href="/blog">Blog</a>
    </div>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>© {new Date().getFullYear()} KiöCorp</p>
</footer>

<style lang="scss" global>
  // --------------------------
  // Variables
  // --------------------------
  @font-face {
    font-family: 'Sarina';
    src: url('/fonts/Sarina-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  $bg-light: #f9f9f9;
  $bg-dark: #111;
  $text-light: #111;
  $text-dark: #f9f9f9;
  $brand-font: 'Sarina', cursive;
  $main-font: system-ui, sans-serif;
  $accent: #6c5ce7;

  // --------------------------
  // Base Reset
  // --------------------------
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: $main-font;
    background: $bg-light;
    color: $text-light;
    line-height: 1.5;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header, footer {
    padding: 1rem;
    background: $bg-dark;
    color: $text-dark;
  }

  main {
    max-width: 768px;
    margin: 2rem auto;
    padding: 1rem;
  }

  // --------------------------
  // Navbar Styling
  // --------------------------
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: $bg-dark;
    gap: 1rem;
  }

  .brand a {
    font-family: $brand-font;
    font-size: 1.75rem;
    color: $accent;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 1rem;

    a {
      color: $text-dark;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;

    span {
      width: 25px;
      height: 3px;
      background: $text-dark;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 64px;
      right: 1rem;
      background: $bg-dark;
      padding: 1rem;
      border-radius: 8px;
      z-index: 10;
    }

    .nav-links.open {
      display: flex;
    }
  }
</style>