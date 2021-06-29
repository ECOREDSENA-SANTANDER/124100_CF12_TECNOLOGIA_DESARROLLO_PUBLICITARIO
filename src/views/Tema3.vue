<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Medios digitales
    
    p.mb-4 Con la globalización de la conectividad se han generado una gran cantidad de nuevos medios, haciendo evidente la importancia de la comunicación y el afán del ser humano por satisfacer su necesidad de socialización y de mantenerse informado de forma permanente. El auge de las redes sociales y el nacimiento de nuevas alternativas de interacción y expresión es evidente, ya que en los últimos años han surgido plataformas como Snapchat, TikTok o Instagram, las cuales ofrecen nuevas formas para obtener y compartir información.

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Facebook" :icono="require('@/assets/curso/tema3/icon1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p 
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen').mx-auto
      .py-4.py-md-5(titulo="Instagram" :icono="require('@/assets/curso/tema3/icon2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen').mx-auto
          .col-md-6
            p 
        
      .py-4.py-md-5(titulo="TicTok" :icono="require('@/assets/curso/tema3/icon3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p 
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen').mx-auto
      .py-4.py-md-5(titulo="Snapchat" :icono="require('@/assets/curso/tema3/icon4.svg')")
        .row
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen').mx-auto
          .col-md-6.mb-4.mb-md-0
            p 
      .py-4.py-md-5(titulo="Twitter" :icono="require('@/assets/curso/tema3/icon5.svg')")
        .row
          .col-md-6
            p 
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen').mx-auto
        
      .py-4.py-md-5(titulo="YouTube" :icono="require('@/assets/curso/tema3/icon6.svg')")
        .row
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen').mx-auto
          .col-md-6.mb-4.mb-md-0
            p 
        

</template>

<script>
export default {
  name: 'Tema3',
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
