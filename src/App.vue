<script >
import VueHeader from './components/VueHeader.vue'
import VueMain from './components/VueMain.vue'
import { store } from './store.js';

  export default {
      components: {
        VueHeader,
        VueMain
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
</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
