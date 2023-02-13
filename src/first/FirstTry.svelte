<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./Counter.svelte";
  import type { Props } from "../types/prop.types";
  import { cssVariables } from "../utils/cssVariables";

  export const props: Props = {
    color: "green",
  };

  const handleColorChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    props.color = target.value;
  };
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img
        src="/vite.svg"
        use:cssVariables={{ shadowColor: props.color }}
        class="logo"
        alt="Vite Logo"
      />
    </a>

    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <p use:cssVariables={{ color: props.color }} style="color: var(--color);">
    {#if props.color === "green"}
      Green is the best color!
    {:else if props.color === "red"}
      Red is the best color!
    {/if}
  </p>

  <input type="text" bind:value={props.color} on:input={handleColorChange} />

  <div class="card">
    <Counter initialCount={1} />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em var(--shadowColor));
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
