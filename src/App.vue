<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
}
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  vertical-align: top;
  border: none;
}

.clearf:after,
.clearf:before {
  content: '';
  display: block;
  clear: both;
}
</style>
