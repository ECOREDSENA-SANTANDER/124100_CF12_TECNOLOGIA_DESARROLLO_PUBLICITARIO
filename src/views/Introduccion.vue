<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Le invitamos a consultar atentamente el video que se presenta a continuación, con el fin de iniciar su recorrido formativo sobre el diseño de contenidos digitales.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/S4SxzXo-6tI?si=V16x_w-W2u6liX2X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Diseño de contenidos digitales
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
