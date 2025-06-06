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
  <div class="logo">
    <strong>KV</strong>
  </div>
  <div class="brand">
    <strong>KiovCom</strong>
  </div>

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

<style>
  nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  max-width: 100%;
  gap: 1rem;
  box-sizing: border-box;
  }

  .logo {
  font-weight: bold;
  flex-shrink: 0;
  }

  .brand {
  font-weight: bold;
  flex-grow: 1;
  min-width: 0;
  /* important */
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }

  button {
  display: none;
  flex-direction: column;
  border: none;
  background: transparent;
  padding: 1rem;
  cursor: pointer;
  flex-shrink: 0;
  }

  button span {
  display: block;
  background: #111;
  height: 2px;
  width: 24px;
  margin: 2px 0;
  }

  ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
  justify-content: flex-end;
  flex-wrap: wrap;
  }

  li a {
  padding: 0.5rem;
  color: #111;
  display: block;
  white-space: nowrap;
  }

  @media (max-width: 768px) {
  button {
  display: flex;
  }

  ul {
  flex-direction: column;
  width: 100%;
  padding: 1rem 0 0 0;
  justify-content: center;
  box-sizing: border-box;
  }
  }

  /* Bonus: prevent body overflow */
  body {
  overflow-x: hidden;
  }
</style>