<script lang="ts">
  import { onMount } from "svelte";
  let isToggled = false;
  let isDesktop = true;

  const checkWindowSize = () => {
  isDesktop = window.innerWidth > 768;
  if (isDesktop) isToggled = false;
  };

  onMount(() => {
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
  return () => window.removeEventListener("resize", checkWindowSize);
  });
</script>

<nav class="navbar">
  <div class="top">
    <h1>KiovCom</h1>

    <button on:click={() => isToggled = !isToggled} aria-label="Toggle Navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  {#if isToggled || isDesktop}
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/now">Now</a></li>
    <li><a href="/blogs">Blogs</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
  {/if }
</nav>

<style lang="scss">
  @use '../style';
</style>