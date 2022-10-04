<template>
  <div id="app">
    <router-view />
    <Footer v-show="!$route.meta.show"></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
