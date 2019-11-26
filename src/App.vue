<template>
  <div id="app">
    <h1>Hello App!</h1>
    <div><router-link to='/button'>Go to Button</router-link></div>
    <div><router-link to='/layout'>Go to Layout</router-link></div>
    <router-view/>
  </div>
</template>

<style> 
html,
body {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    background-color: rgba(88, 115, 254, 0.04);
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}
::-webkit-scrollbar {
  display:none
}
.dlbtn{
	background-color: inherit;color: #409EFF;border: none;
}
</style>
