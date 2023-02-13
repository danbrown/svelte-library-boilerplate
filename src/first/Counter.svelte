<script lang="ts">
  export let initialCount = 0;

  let count: number = initialCount;

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>
