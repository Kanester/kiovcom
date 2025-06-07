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

<nav>
  <strong class="logo">KV</strong>
  <strong class="brand">KiovCom</strong>

  {#if !isDesktop}
  <button on:click={() => isToggled = !isToggled} aria-label="Toggle Navigation">
    <span></span>
    <span></span>
    <span></span>
  </button>
  {/if }

  {#if isDesktop || isToggled}
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/now">Now</a></li>
    <li><a href="/blogs">Blogs</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
  {/if }
</nav>

<style scoped>
  nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto auto;
  justify-content: space-between;
  text-align: center;
  column-gap: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
  }

  ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-left: 0;
  margin: 1rem 0.5rem;
  gap: 1rem;
  }

  strong {
  padding: 1rem 0.5rem;
  }

  button {
  border: none;
  background: transparent;
  display: none;
  }

  span {
  display: flex;
  width: 20px;
  height: 2px;
  background: #111;
  padding: 0.5px 0;
  margin: 3px;
  }
  
  a {
    color: #111;
  }

  @media (max-width: 768px) {
  nav {
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
  "logo brand button"
  "nav nav nav";
  }

  .logo {
  grid-area: logo;
  }

  .brand {
  grid-area: brand;
  }

  button {
  display: block;
  grid-area: button;
  }

  ul {
  grid-area: nav;
  flex-direction: column;
  }
  }
</style>