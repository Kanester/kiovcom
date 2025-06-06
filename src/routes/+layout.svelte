<script lang="ts">
  import Navbar from "$lib/Navbar.svelte"

  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  injectAnalytics({ mode: dev ? "development": "production" });
  injectSpeedInsights();
</script>

<header>
  <Navbar />
</header>

<main>
  <slot />
</main>

<footer>
  <p>
    © {new Date().getFullYear()} KiöCorp
  </p>
</footer>

<style global>
  *,
  *::before,
  *::after,
  header,
  main,
  footer {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
</style>