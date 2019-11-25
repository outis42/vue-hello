<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>{{ message }}</div>
    <div>{{ reversedMessage }}</div>
    <div>
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示星系！
      </span>
    </div>
    <div v-if="seen">now you can see me</div>
    <ItemList :items="todos"/>
    <button v-on:click="reverseMessage">反转消息</button>
    <input v-model="message">
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ItemList from './components/ItemList.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    ItemList
  },
  data: function (){
    return {
      message: 'Hello Vue!!',
      seen: true,
      todos: [
        { text: "Learning JavaScript" },
        { text: "Learning Vue" },
        { text: "Basketball"}
      ]
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
