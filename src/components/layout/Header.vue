<template lang="pug">
    section.hero.is-success
        .hero-head
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong Demo Music
                    .nav-right.nav-menu
                      router-link.nav-item(to="/") Buscar
                      router-link.nav-item(to="about") Nosotros

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
