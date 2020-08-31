<template>
  <div id="app">
    <AppBar></AppBar>
    <router-view/>
  </div>
</template>

<script>
import AppBar from './components/AppBar';

export default {
  name: 'App',
  components: {
    AppBar
  }
}
</script>

<style>

</style>
