<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 6
      h1  Diseño de contenidos para Facebook
    
    p.mb-0 El diseño de contenidos para Facebook es una herramienta fundamental para lograr la proyección de una imagen coherente y profesional en esta red social. Crear una imagen de perfil, una portada y publicaciones visualmente atractivas es esencial para captar la atención de los usuarios. A través de herramientas como Illustrator, es posible desarrollar piezas gráficas que fortalezcan la identidad de marca y mejoren la interacción con la audiencia. 

    Separador
    #t_6_1.titulo-segundo
      h2 6.1 Imagen de perfil
    
    p.mb-4 En el siguiente video se explica la manera de crear una imagen de perfil para Facebook en la plataforma Illustrator.
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BoOx6QM0BSY?si=rc4KxJ3NJqOi4NBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: Imagen De Perfil - Facebook
    
    Separador
    #t_6_2.titulo-segundo
      h2 6.2 Portada
    
    p.mb-4 En el siguiente video se presentan las características de la imagen de portada de Facebook y se explica de manera sencilla la manera de crearla en la plataforma Illustrator.
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/S-rJSguKTwI?si=16MT41n0Ipc4AVaP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: Portada - Facebook
    
    Separador
    #t_6_3.titulo-segundo
      h2 6.3 #[em Post]
    
    p.mb-4 En el siguiente video se presentan las características de una imagen para realizar un #[em post en Facebook]:
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MvlNXgCzsQA?si=3YDVfJcBPPHg9s1q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: #[em Post] Facebook

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
