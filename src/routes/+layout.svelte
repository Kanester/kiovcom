<script lang="ts">
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  injectAnalytics({ mode: dev ? "development": "production" });
  injectSpeedInsights();

  if (typeof window !== "undefined" && dev) {
  import("eruda").then((eruda) => eruda.init());
  }

  import Navbar from "$lib/Navbar.svelte";
  import Background from "$lib/Background.svelte";
  import Kofi from "$lib/Kofi.svelte";
</script>

<Background />

<header>
  <Navbar />
</header>

<main>
  <slot />
</main>

<footer>
  <strong>
    © {new Date().getFullYear()} KiövCom
  </strong>
  <p>
    <span>Created by KnxTr/Kiö with the help of SvelteKit and Vercel</span>
  </p>
  <ul class="links">
    <li><a href="/">Home</a></li>
    <li><a href="now">now</a></li>
    <li><a href="blogs">Blogs</a></li>
    <li><a href="projects">Projects</a></li>
  </ul>
</footer>

<Kofi />

<style lang="scss">
  @forward "../style/base/global";
  @forward "../style/base/layout";
  @forward "../style/base/typography";
  @use "../style/utils/colors" as *;

  main,
  footer {
  padding: 0.5rem;
  }

  footer {
  background: $bg-alt;
  }

  footer {
  a,
  span {
  color: $text-main;
  }
  }
</style>