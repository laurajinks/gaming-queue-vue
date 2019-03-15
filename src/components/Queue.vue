<template>
  <div class="gameList">
    <div class="addBtnContainer">
      <router-link to="/search">
        <button class="addBtn">Add New Game</button>
      </router-link>
    </div>
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
  name: "Queue",
  components: {
    Game
  },
  data: () => {
    return {
      gameList: []
    };
  },
  methods: {
    getGames: function() {
      axios
        .get(`${server}/api/games`)
        .then(response => (this.gameList = response.data));
    }
  },
  beforeMount: function() {
    this.getGames();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>