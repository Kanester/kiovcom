<script lang="ts">
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  let menuOpen = false;

  injectAnalytics({ mode: dev ? "development": "production" });
  injectSpeedInsights();
</script>

<header>
  <nav class="navbar" role="navigation" aria-label="Main Navigation">
    <div class="brand">
      <a href="/">KiövCom</a>
    </div>

    <button
      class="hamburger"
      aria-label="Toggle navigation menu"
      on:click={() => (menuOpen = !menuOpen)}
      aria-expanded={menuOpen}
      >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class={"nav-links" + (menuOpen ? " open": "")}>
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
  <p>
    © {new Date().getFullYear()} KiöCorp
  </p>
</footer>

<style lang="scss" global>
  // --------------------------
  // Font & Variables
  // --------------------------
  @font-face {
  font-family: 'Sarina';
  src: url('/fonts/Sarina-Regular.ttf') format('truetype');
  font-display: swap;
  }

  $bg-light: #f9f9f9;
  $bg-dark: #111;
  $text-light: #111;
  $text-dark: #f9f9f9;
  $brand-font: 'Sarina', cursive;
  $main-font: system-ui, sans-serif;
  $accent: #6c5ce7;
  $transition: 0.3s ease;

  *, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  body {
  font-family: $main-font;
  background: $bg-light;
  color: $text-light;
  line-height: 1.6;
  scroll-behavior: smooth;
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
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  gap: 1rem;
  }

  .brand a {
  font-family: $brand-font;
  font-size: 2rem;
  color: $accent;
  text-decoration: none;
  }

  .nav-links {
  display: flex;
  gap: 1.5rem;

  a {
  color: $text-dark;
  text-decoration: none;
  font-weight: 500;
  transition: color $transition;

  &:hover {
  color: lighten($accent, 20%);
  }
  }
  }

  .hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;

  span {
  width: 28px;
  height: 3px;
  background: $text-dark;
  border-radius: 2px;
  transition: transform $transition;
  }
  }

  // --------------------------
  // Responsive Navigation
  // --------------------------
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: fadeIn $transition;
  }

  .nav-links.open {
  display: flex;
  }

  @keyframes fadeIn {
  from {
  opacity: 0;
  transform: translateY(-10px);
  }
  to {
  opacity: 1;
  transform: translateY(0);
  }
  }
  }

  // --------------------------
  // Footer
  // --------------------------
  footer {
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
</style>