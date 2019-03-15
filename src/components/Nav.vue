<template>
  <nav class="header">
    <router-link to="/" class="appTitle">
      <h1>Queue</h1>
    </router-link>
    <ul class="headerLinks">
      <router-link to="/" class="headerListItem">
        <li>Queue</li>
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