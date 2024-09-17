<template>
  <div class="container">
    <h1>Avow Solutions</h1>
  </div>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      showHome: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  display: flex;
  background-color: black;
  color: white;
  border: 1px solid red;
}

.container h1 {
  margin-left: 20px;
  margin-top: 20px;
}
</style>
