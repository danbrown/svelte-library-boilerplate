<script lang="ts">
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";

  let feedbacks = [
    {
      id: 1,
      rating: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      rating: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      rating: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      rating: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      rating: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  // rating average
  $: ratingAverage =
    feedbacks.reduce((acc, item) => acc + item.rating, 0) / feedbacks.length ||
    0;

  // handle delete feedback
  const handleDeleteFeedback = (e: CustomEvent) => {
    console.log("Delete", e.detail);

    feedbacks = feedbacks.filter((item) => item.id !== e.detail);
  };
</script>

<main class="feedback-main">
  <div class="feedback-container">
    <FeedbackStats {ratingAverage} totalItems={feedbacks.length} />

    <FeedbackList {feedbacks} on:deleteFeedback={handleDeleteFeedback} />
  </div>
</main>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .feedback-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
    background: #f5f5f5;
    width: 100%;
  }

  .feedback-container {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
</style>
