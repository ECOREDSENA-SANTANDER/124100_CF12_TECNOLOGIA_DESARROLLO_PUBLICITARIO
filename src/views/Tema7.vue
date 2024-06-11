<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 7
      h1 Diseño de contenidos para Twitter

    #t_7_1.titulo-segundo
      h2 7.1 Gif con ilustración

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/jB3Ni-3Sd7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    #t_7_2.titulo-segundo
      h2 7.2 Cabecera

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/4400KWv_FSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    #t_7_3.titulo-segundo
      h2 7.3 Post

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/HuuRJJ3O5sA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
