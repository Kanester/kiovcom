<script lang="ts">
  export let title: string;
  export let contents: string[];
</script>

<div class="card">
  <h3>{title}</h3>
  <ul>
    {#each contents as content}
    <li>{content}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @forward "../style/components/card";
</style>