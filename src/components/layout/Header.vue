<template lang="pug">
    section.hero.is-success
      .hero-head
        header
          nav
            .navbar-start
              router-link.navbar-item(to="/") Buscar
              router-link.navbar-item(to="about") Nosotros

        .hero-body
            .container.has-text-centered
                h1.title Demo Music
                h2.subtitle Canciones que están buenísimas
                dm-player
</template>

<script>
import DmPlayer from '@/components/Player.vue'

export default {
  components: {DmPlayer}
}
</script>
