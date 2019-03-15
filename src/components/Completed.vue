<template>
  <div class="gameList">
    <div v-for="game in gameList" :key="game.id">
      <Game
        :key="game.id"
        :id="game.id"
        :queue="game.queue"
        :guid="game.guid"
        :title="game.title"
        :img="game.img"
        :description="game.description"
        :notes="game.notes"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Game from "./Game";
const server = "http://localhost:8081";

export default {
  name: "Completed",
  components: {
    Game
  },
  data: () => {
    return {
      gameList: []
    };
  },
  methods: {},
  mounted: function() {
    axios
      .get(`${server}/api/completedGames`)
      .then(response => (this.gameList = response.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>