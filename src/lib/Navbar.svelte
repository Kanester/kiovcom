<script lang="ts">
  let isToggled = false;
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

  <ul class={isToggled ? "show" : ""}>
    <li><a href="/">Home</a></li>
    <li><a href="/now">Now</a></li>
    <li><a href="/blogs">Blogs</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
</nav>

<style lang="scss">
  @use '../style';
</style>