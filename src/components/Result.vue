<template>
  <transition name="open">
    <div class="resultBox">
      <div class="result">
        <img class="resultThumb" :src="img" :alt="title">
        <p class="resultTitle">{{ title }}</p>
        <button class="addNewBtn" @click="addGame">+</button>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
const server = "http://localhost:8081";

export default {
  name: "Result",
  props: ["img", "title", "id", "guid", "notes", "description", "queue"],
  methods: {
    addGame: function() {
      const game = {
        id: this.id,
        guid: this.guid,
        img: this.img,
        title: this.title,
        notes: this.notes,
        description: this.description,
        queue: this.queue
      };
      const vm = this;
      axios.post(`${server}/api/games`, game).then(() => {
        vm.$router.push("/");
      });
    }
  }
};
</script>