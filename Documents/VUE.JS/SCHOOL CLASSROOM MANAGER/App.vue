<template>
  <div id="app">
    <Student />
  </div>
</template>

<script>
  import Students from './components/Students'

  export default {
    name: 'app',
    components: {
      Students
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 20px;
    }
</style>
