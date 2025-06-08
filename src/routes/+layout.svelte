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