<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 7
      h1 Diseño de contenidos para X
    p.mb-0 Para destacar en esta red social de comunicación rápida y visualmente dinámica, el diseño de contenidos es esencial. Crear #[em GIF] con ilustraciones, imágenes de cabecera personalizadas y publicaciones atractivas requiere habilidades en herramientas como Illustrator, lo que permite optimizar la presencia de la marca y captar la atención del público de manera efectiva. 
    Separador
    #t_7_1.titulo-segundo
      h2 7.1 #[em GIF] con ilustración
    
    p.mb-4 En el siguiente video se explica detalladamente como construir un #[em GIF] con ilustración en la plataforma Illustrator:
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/im_Sfi3Nw1k?si=vkn5utyDvstdGSyB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: #[em Gif] Con Ilustración X
    Separador
    #t_7_2.titulo-segundo
      h2 7.2 Cabecera
    
    p.mb-4 En el siguiente video se presenta una explicación práctica y detallada de la realización de una imagen de cabecera para Twiter en la plataforma Illustrator.
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ch-yr6YHnK0?si=sr5mi8AOotIGEMJS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: Cabecera
    
    Separador
    #t_7_3.titulo-segundo
      h2 7.3 #[em Post]
    
    p.mb-4 En el siguiente video se presenta una explicación de la manera en que se crea una imagen para realizar un #[em post] en X.
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/U3IyoELVvvE?si=Q7LQOYs3CTSGpmrt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: #[em Post] X

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
