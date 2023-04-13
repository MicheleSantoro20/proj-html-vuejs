<script >
import VueHeader from './components/VueHeader.vue'
import VueMain from './components/VueMain.vue'
import VueFooter from './components/VueFooter.vue';
import VueRapidMenu from './components/VueRapidMenu.vue'
import { store } from './store.js';

  export default {
      components: {
        VueHeader,
        VueMain,
        VueFooter,
        VueRapidMenu,
      },
      data() {
        return {
          store
        }
      }
  }
</script>

<template>
  <VueHeader />
  <VueMain />
  <VueFooter />
  <VueRapidMenu />
</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
