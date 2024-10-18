<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 5
      h1 Diseño de contenidos para #[em Instagram]

    p.mb-4 El diseño de contenidos para #[em Instagram] es un proceso fundamental que se realiza con la finalidad de construir una presencia visual atractiva y efectiva en esta red social. Crear publicaciones, historias y GIF animados requiere habilidades que combinan creatividad y dominio de herramientas digitales como Illustrator, lo que permite captar la atención del público e impulsar la interacción con la marca. 
    p.mb-0 A continuación, se presenta una guía práctica sobre la creación de contenido para #[em Instagram] utilizando Illustrator. A través de sencillos videos, se explican los pasos para diseñar un post, una imagen para historias y la construcción detallada de un GIF animado. 
    Separador
    #t_5_1.titulo-segundo
      h2 5.1 #[em Post]
    
    p.mb-4 En el siguiente video se realiza una sencilla explicación de la creación de un #[em post] en Illustrator.
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uSIe_opPDBg?si=EONzqQtYrVrO0OB1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: #[em Post Instagram]
      
    Separador
    #t_5_2.titulo-segundo
      h2 5.2 #[em Stories ]
    
    p.mb-4 En el siguiente video se realiza una explicación de la creación en Illustrator de una imagen para subir en historias de #[em Instagram]: 
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w51j_Ls-fsM?si=-uU7WS73zN-znVXh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: #[em Stories Instagram]
    
    Separador
    #t_5_3.titulo-segundo
      h2 5.3 #[em Gif]
    
    p.mb-4 En el siguiente video, se presenta de manera detallada, la construcción de un gif animado para #[em Instagram]:
    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XhhajvGirNs?si=7Tz_9bfnJx-XH_sm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      figcaption Video: #[em Gif Instagram]
      


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
