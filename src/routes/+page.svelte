<script lang="ts">
  import Card from "$lib/Card.svelte";
</script>

<section class="hero">
  <h1>Hey there! Name's Kio.</h1>
  <h6>I write stories, share knowledge, and build stuff.</h6>
  <p>
    Currently living in a country full of hidden gems, rich culture, and linguistic diversity — the Philippines.
  </p>
  <p>
    I write short stories about ghosts and mythos. These can be creepy or wholesome, might be gruesome depending on my mood.
  </p>
  <p>
    I'm also a programmer and in code, I make projects that hopefully help students, developers, and users like me. I’m currently learning everything on my own and also just a solo dev.
  </p>
  <p class="tags">
    <span>#writer</span>
    <span>#ghost</span>
    <span>#myths</span>
    <span>#programmer</span>
    <span>#solodev</span>
    <span>#self-taught</span>
  </p>
</section>

<section>
  <h3>Latest Blog</h3>
  <ul>
    <li>Coming soon...</li>
  </ul>
  <h3>Latest Projects</h3>
  <ul>
    <li>Coming soon...</li>
  </ul>
</section>

<section>
  <h2>Current Developer Status</h2>
  <section class="cards">
    <Card title="Tech Stack" contents={["Svelte/SvelteKit", "Typescript", "Python", "Git" ]} />
    <Card title="Toolset" contents={["Android 14 Phone w/ 256GB + 4-4GB", "Termux CLI", "Acode Mobile Editor" ]} />
    <Card title="Currently Learning" contents={["Nim Programming Language", "C/C++ Programming Language", "Language Processor", "Low-level Programming", "LLVM" ]} />
  </section>
</section>

<style lang="scss">
  @forward "../style/base/global";
  @forward "../style/base/layout";
  @forward "../style/base/typography";
  @use "../style/utils/colors" as *;
  @use "../style/mixins/sizing" as *;

  .hero {
  padding: 0.5rem;
  }

  .cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  text-align: left;
  }

  @media (min-width: 768px) {
  .cards {
  flex-direction: row;
  justify-content: space-between;
  }
  }

  h1,
  h3,
  h6 {
  line-height: 1.2;
  margin-bottom: 0.5em;
  }

  h1,
  h3 {
  font-weight: 300;
  }

  h6 {
  font-weight: 400;
  }

  h1 {
  @include sizing(2.5rem, 4rem);
  }

  h3 {
  @include sizing(1.5rem, 2.5rem);
  }

  h6 {
  @include sizing(0.875rem, 1.25rem);
  }

  p {
  @include sizing(1rem, 1.25rem);
  margin-bottom: 1rem;
  }

  li {
  list-style: disc;
  color: $text-main;
  }

  span,
  ul {
  @include sizing(0.7rem, 1rem);
  color: $text-alt;
  }

</style>