<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 5
      h1 Diseño de contenidos para Instagram

    
    #t_5_1.titulo-segundo
      h2 5.1 Post

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/ZycQ1BjU7v8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      

    #t_5_2.titulo-segundo
      h2 5.2 Stories

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/4pTCdAuuSao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    #t_5_3.titulo-segundo
      h2 5.3 Gif

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/H6vXuqEGkws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      


</template>

<script>
export default {
  name: 'Tema5',
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
