<template>
  <div class="gameContainer">
    <div class="gameBody">
      <img class="coverArt" :src="img" :alt="title">
      <h2 class="gameTitle">{{ title }}</h2>
      <br>
      <p class="notes">Notes: {{ notes }}</p>
    </div>
    <div class="gameFooter">
      <button
        class="editNoteBtn"
        v-if="displayEditBtn"
        @click="displayEditBtn = !displayEditBtn"
      >Edit Note</button>
      <!-- {showEdit && (
                        <NoteInput
                            input={input}
                            updateInput={updateInput}
                            toggleEdit={toggleEdit}
                            toggleEditBtn={toggleEditBtn}
                            id={props.id}
                            notes={props.notes}
                            toggleRefresh={props.toggleRefresh}
                        />
                    <br />

                    {props.queue && (
                        <button
                            onClick={() => props.completeGame(props.id)}
                            className="moveBtn"
                        >
                            Game Completed
                        </button>
                    )}

                    {!props.queue && (
                        <button
                            onClick={() => props.returnToQueue(props.id)}
                            className="moveBtn"
                        >
                            Return to Queue
                        </button>
      )}-->
    </div>
  </div>
</template>;

<script>
export default {
  name: "Game",
  props: ["id", "queue", "guid", "title", "img", "description", "notes"],
  data() {
    return {
      displayEditBtn: true
    };
  },
  methods: {
    deleteGame: () => {
      axios.delete(`/api/games/${this.id}`);
    }
  }
};
</script>;
