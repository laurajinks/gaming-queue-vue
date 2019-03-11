<template>
  <nav class="header">
    <router-link to="/" class="appTitle">
      <h1>Queue</h1>
    </router-link>
    <ul class="headerLinks">
      <router-link to="/" class="headerListItem">
        <l1>Queue</l1>
      </router-link>
      <router-link to="/completed" class="headerListItem">
        <li>Completed</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
