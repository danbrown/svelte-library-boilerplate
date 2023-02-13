<script lang="ts">
  import { scale, fade } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";

  export let feedbacks;
</script>

{#each feedbacks as feedback (feedback.id)}
  <div
    in:scale={{ duration: 500 }}
    out:fade={{ duration: 200 }}
    style="width: 100%; display: flex;"
  >
    <FeedbackItem {feedback} on:deleteFeedback />
  </div>
{/each}
