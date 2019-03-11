<template>
  <div>
    <form @submit="submitEdit">
      <input
        class="noteInput"
        type="text"
        :defaultValue="notes"
        placeholder="Add note"
        v-model="input"
      >
    </form>
    <button class="cancelEditBtn" @click="toggleEdit">X</button>
  </div>
</template>;

<script>
import axios from "axios";
const server = "http://localhost:8081";

export default {
  name: "NoteInput",
  props: ["notes", "id", "toggleEdit", "toggleRefresh"],

  data() {
    return {
      input: ""
    };
  },

  methods: {
    submitEdit: function(e) {
      e.preventDefault();
      const { input, id } = this;
      axios.put(`${server}/api/games/${id}`, { input });
      // .then(() => props.toggleRefresh());
    }
  }
};
</script>;