<template>
  <div class="gameContainer">
    <Description
      v-if="showDescription"
      :description="description"
      :toggleDescription="toggleDescription"
      :guid="guid"
    />
    <button @click="deleteGame" class="deleteBtn">X</button>
    <div class="gameBody">
      <img class="coverArt" :src="img" :alt="title" @click="toggleDescription">
      <h2 class="gameTitle">{{ title }}</h2>
      <br>
      <p class="notes">Notes: {{ notes }}</p>
    </div>
    <div class="gameFooter">
      <button class="editNoteBtn" v-if="displayEditBtn" @click="toggleEdit">Edit Note</button>
      <NoteInput
        v-if="showEdit"
        :toggleEdit="toggleEdit"
        :id="id"
        :notes="notes"
        :toggleRefresh="toggleRefresh"
      />
      <br>
      <button v-if="queue" @click="completeGame" class="moveBtn">Game Completed</button>
      
      <button v-if="!queue" @click="returnToQueue" class="moveBtn">Return to Queue</button>
    </div>
  </div>
</template>;

<script>
import NoteInput from "./NoteInput";
import Description from "./Description";
const server = "http://localhost:8081";

export default {
  name: "Game",
  props: ["id", "queue", "guid", "title", "img", "description", "notes"],
  components: {
    NoteInput,
    Description
  },

  data() {
    return {
      displayEditBtn: true,
      showEdit: false,
      showDescription: false
    };
  },

  methods: {
    deleteGame: function() {
      axios.delete(`${server}/api/games/${this.id}`);
    },
    toggleEdit: function() {
      this.displayEditBtn = !this.displayEditBtn;
      this.showEdit = !this.showEdit;
    },
    toggleDescription: function() {
      this.showDescription = !this.showDescription;
    },
    completeGame: function() {},
    returnToQueue: function() {}
  }
};
</script>;
