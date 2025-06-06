<script lang="ts">    
  import { dev } from "$app/environment";    
  import { injectAnalytics } from "@vercel/analytics/sveltekit";    
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";   
  
  let menuOpen = false;    
    
  injectAnalytics({ mode: dev ? "development" : "production" });    
  injectSpeedInsights();    
</script>    
    
<header class="navbar">    
  <div class="nav-container">    
    <div class="brand">KiövCom</div>    
    
    <nav class:open={menuOpen}>    
      <a href="/">Home</a>    
      <a href="/now">Now</a>    
      <a href="/project">Project</a>    
      <a href="/blog">Blog</a>    
    </nav>    
    
    <button class="hamburger" on:click={() => (menuOpen = !menuOpen)}>    
      <span></span>    
      <span></span>    
      <span></span>    
    </button>    
  </div>    
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
  $bg-light: #f9f9f9;    
  $bg-dark: #111;    
  $text-light: #111;    
  $text-dark: #f9f9f9;    
  $brand-font: 'Sarina', cursive;    
  $main-font: system-ui, sans-serif;    
  $accent: #6c5ce7;    
    
  // --------------------------    
  // Reset and Layout Base    
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
  // Nav Styles    
  // --------------------------    
  .navbar {    
    .nav-container {    
      display: flex;    
      justify-content: space-between;    
      align-items: center;    
      max-width: 1024px;    
      margin: auto;    
    }    
    
    .brand {
      font-family: $brand-font;
      font-size: 1.75rem;
      color: $accent;
    }
    
    nav {
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
      nav {
        display: none;
        position: absolute;
        top: 64px;
        right: 0;
        background: $bg-dark;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1rem;
      }

      nav.open {
        display: flex;
      }
    }
    
      .hamburger {
        display: flex;
      }
    }
</style>