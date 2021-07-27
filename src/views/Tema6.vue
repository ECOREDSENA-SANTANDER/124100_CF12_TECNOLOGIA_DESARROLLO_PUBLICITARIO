<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1  Diseño de contenidos para Facebook

    #t_6_1.titulo-segundo
      h2 6.1 Imagen de perfil

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/-8hXyIbL6wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    #t_6_2.titulo-segundo
      h2 6.2 Portada

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/nfSwvHs7-PA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    #t_6_3.titulo-segundo
      h2 6.3 Post

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/j2C8M2xE-dc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

        

       
        
       

</template>

<script>
export default {
  name: 'Tema6',
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
