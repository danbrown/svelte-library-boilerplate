<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Card from "./Card.svelte";

  export let feedback;

  const dispatch = createEventDispatcher();

  const handleDelete = (itemId: string) => {
    console.log("Delete");

    dispatch("deleteFeedback", itemId);
  };
</script>

<Card>
  <div class="feedback-rating">{feedback.rating}</div>
  <div class="feedback-title">{feedback.title}</div>
  <button class="feedback-close" on:click={() => handleDelete(feedback.id)}>
    X
  </button>
</Card>

<style lang="scss">
  .feedback-rating {
    background: #f0c48f;
    border-radius: 50%;
    border: 1px solid #deb27f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    height: 2.2rem;
    width: 2.2rem;
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
  }

  .feedback-title {
    font-size: 1rem;
    font-weight: normal;
    margin-top: 1.2rem;
  }

  .feedback-close {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 0.75rem;

    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
</style>
