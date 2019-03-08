<template>
  <div class="gameContainer">
    <div class="gameBody">
      <img class="coverArt" :src="img" :alt="title">
      <h2 class="gameTitle">{{ title }}</h2>
      <br>
      <p class="notes">Notes: {{ notes }}</p>
    </div>
  </div>
</template>;

<script>
export default {
  name: "Game",
  props: ["id", "queue", "guid", "title", "img", "description", "notes"]
};
</script>;
