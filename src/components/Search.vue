<template>
  <div>
    <router-link to="/">
      <button class="cancelBtn">Cancel</button>
    </router-link>
    <div class="searchComponent">
      <div class="searchBar">
        <form @submit="search">
          <input v-model="input" class="searchInput" type="text" placeholder="Enter Game Title">
        </form>
      </div>
      <div v-for="result in resultList">
        <Result
          :key="result.key"
          :id="result.id"
          :guid="result.guid"
          :title="result.title"
          :img="result.img"
          :notes="result.notes"
          :description="result.description"
          :queue="result.queue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Result from "./Result";
const server = "http://localhost:8081";

export default {
  name: "Search",
  components: {
    Result
  },
  data: () => {
    return {
      input: "",
      resultList: []
    };
  },
  methods: {
    search: function(e) {
      e.preventDefault();
      axios.get(`${server}/api/search/?search=${this.input}`).then(response => {
        this.resultList = response.data;
      });
    }
  }
};
</script>