<template>
  <transition name="open">
    <div class="descriptionContainer" @click="toggleDescription">
      <div class="description">
        <p>Genres:</p>
        <h1 class="descriptionTitle">Description</h1>
        <button class="closeDescriptionBtn" @click="toggleDescription">X</button>
        {{ formatDescription(description) }}
        <div class="linkContainer">
          <a :href="link" class="moreInfoLink">More info >></a>
        </div>
      </div>
    </div>
  </transition>
</template>;

<script>
export default {
  name: "Description",
  props: ["description", "guid", "toggleDescription"],

  data() {
    return {
      link: `https://www.giantbomb.com/games/${this.guid}`,
      text: ""
    };
  },
  methods: {
    formatDescription: function(text) {
      let html = text;
      let div = document.createElement("div");
      div.innerHTML = html;
      let description = div.textContent || div.innerText || "";
      if (description.length > 1000) {
        description = description.substring(8, 1008) + "...";
      }
      return description;
    }
  }
};
</script>;

<style>
.open-enter-active {
  animation: fade-in 0.3s;
}

.open-leave-active {
  animation: fade-in 0.3s reverse;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>