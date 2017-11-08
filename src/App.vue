<template lang="pug">
  #app
    dm-header
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist}}


    dm-footer
</template>

<script>
import trackService from './services/track'
import DmFooter from './components/layout/Footer.vue'
import DmHeader from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    DmFooter, DmHeader
  },
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (this.searchQuery === '') {
        return
      }

      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items
      })
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
.results {
    margin-top: 50px;
  }
</style>
