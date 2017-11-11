<template lang="pug">
  #app
    dm-header

    router-view
    
    dm-footer
</template>

<script>
import DmFooter from '@/components/layout/Footer.vue'
import DmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    DmFooter, DmHeader
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
.results {
    margin-top: 50px;
  }

  .is-active{
    border: 3px #23d160 solid;
  }
</style>
