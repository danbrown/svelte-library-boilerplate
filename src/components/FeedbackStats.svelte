<script lang="ts">
  export let ratingAverage: number;

  export let totalItems: number;
</script>

<div class="feedback-stats-wrapper">
  <div class="feedback-total-items">
    {totalItems} Feedbacks
  </div>
  <div class="feedback-rating-average">
    Average: {ratingAverage}
  </div>
</div>

<style lang="scss">
  .feedback-stats-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;

    background-color: #e9e9e9;
  }

  .feedback-total-items {
    font-size: 1rem;
    font-weight: 700;
  }

  .feedback-rating-average {
    font-size: 1rem;
    font-weight: 700;
  }
</style>
