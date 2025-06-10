<script lang="ts">
  let isToggled: boolean = false;
</script>

<nav>
  <div>
    <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="KiöVcom logo">
      <text
        x="10"
        y="35"
        font-family="Sarina, cursive"
        font-size="35"
        fill="url(#gradientAccentCrisp)"
        stroke="black"
        stroke-width="5"
        paint-order="stroke"
        >
        KiöVcom
      </text>

      <defs>
        <linearGradient id="gradientAccentCrisp" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3468a7" />
          <stop offset="25%" stop-color="#3468a7" />

          <stop offset="25%" stop-color="#2c8c74" />
          <stop offset="50%" stop-color="#2c8c74" />

          <stop offset="50%" stop-color="#6aa84f" />
          <stop offset="75%" stop-color="#6aa84f" />

          <stop offset="75%" stop-color="#b5484d" />
          <stop offset="100%" stop-color="#b5484d" />
        </linearGradient>
      </defs>
    </svg>

    <button on:click={() => isToggled = !isToggled} aria-label="Toggle Navigation">
      &#9776;
    </button>
  </div>

  <ul class={isToggled ? "show": ""}>
    <li><a href="/">Home</a></li>
    <li><a href="now">Now</a></li>
    <li><a href="blogs">Blogs</a></li>
    <li><a href="projects">Projects</a></li>
  </ul>
</nav>

<style lang="scss">
  @forward "../style/components/navbar";
</style>