<template lang="pug">
  main
    transition(name="move")
      dm-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

    transition(name="move")
      dm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="Buscar canciones",
                v-model="searchQuery",
                @keyup.enter="search"
              )
            .control
              a.button.is-info.is-large(@click="search") Buscar
              a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            dm-track(v-blur="t.preview_url", :track="t", @select="setSelectedTrack(t.id)", :class="{'is-active': t.id === selectedTrack}")
</template>

<script>
import trackService from '@/services/track'
import DmTrack from '@/components/Track.vue'
import DmLoader from '@/components/Shared/Loader.vue'
import DmNotification from '@/components/Shared/Notification.vue'

export default {
  name: 'app',
  components: {
    DmTrack, DmLoader, DmNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
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

      this.isLoading = true

      trackService.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0
        this.tracks = res.tracks.items
        this.isLoading = false
      })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
.results {
    margin-top: 50px;
  }

  .is-active{
    border: 3px #23d160 solid;
  }
</style>
