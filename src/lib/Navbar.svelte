<script lang="ts">
  let isActive = false;

  const toggleMenu = () => {
  isActive = !isActive;
  };
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="your-logo.png" width="112" height="28" />
  </a>

  <!-- Burger -->
  <a
    role="button"
    class="navbar-burger"
    aria-label="menu"
    aria-expanded={isActive}
    on:click={toggleMenu}
    class:is-active={isActive}
    >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
</div>

<div id="navbarMenu" class="navbar-menu" class:is-active={isActive}>
  <div class="navbar-start">
    <a class="navbar-item" href="/">Home</a>
    <a class="navbar-item" href="/blogs">Blogs</a>
    <a class="navbar-item" href="/projects">Projects</a>
  </div>
</div>
</nav>

<style lang="scss">
@use "bulma/sass/components/navbar";
</style>