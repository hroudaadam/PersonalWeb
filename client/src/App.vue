<template>
  <div id="app">
    <AppBar></AppBar>
    <div class="mt-3">
      <router-view/>  
    </div>      
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
