<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 1
      h1 Contenidos digitales

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-1
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img1.svg', alt='Infografías', style="width:86px;")
      .col-lg-11.col-sm-12
        p.mb-0 Se pueden considerar contenidos digitales todos aquellos elementos que se publican en los diferentes medios digitales, con todo lo relacionado con publicidad, periodismo, educación e información acerca de cualquier disciplina que requiera dar a conocer, promocionar o informar sobre aspectos específicos. 

    h4.mb-5 Tipos de contenidos digitales
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12     
        .caja3.p-4
          .row.align-items-center.justify-content-center
            .col-lg-11.col-md-12.col-12
              .tarjeta.tarjeta--azul.p-3.mt-5.mb-5
                SlyderA(tipo="b").p-4
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 Infografías 
                      p Es un recurso muy útil en la actualidad, gracias a su carácter didáctico, pues combina imágenes y textos, lo que permite la comprensión detallada de cualquier tema. Las infografías son el contenido más compartido en las redes sociales debido a su atractivo y calidad de la información.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 #[em Newsletters]
                      p Es uno de los contenidos con mayor efectividad para ciertas empresas debido a que genera información permanente y de calidad. Es el recurso preferido para las campañas de #[em e-mail marketing], ya que permite comunicación efectiva y directa con el mercado objetivo, además de su capacidad de segmentación.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 #[em Blogs]
                      p Son una excelente herramienta para el desarrollo de información permanente de la empresa hacia su mercado actual y potencial. Los blogs dan la sensación de experticia, por lo que generan credibilidad en los lectores. En el desarrollo de uno, es muy importante definir claramente el mercado objetivo y la temática de los temas que se van a divulgar a través de él.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 #[em E-books ]
                      p Son versiones cortas de libros con temáticas muy específicas, su lectura es agradable y dinámica debido a que está acompañada de gráficos y elementos didácticos. Son lecturas más largas que un post de un blog, pero más cortas que un libro convencional, esto con el fin de facilitar su lectura en dispositivos digitales. Son una herramienta excelente para el desarrollo de temas académicos complejos.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 Videos
                      p Son el contenido número uno en consumo mundial, permiten un aprendizaje y análisis de la información mucho más eficiente, así como la repetición ilimitada, pausado a voluntad y desarrollo de temas con imagen, sonido y texto combinados en perfecta armonía. Los videos se pueden indexar en cualquier red social, blog o e-mail.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img6.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 #[em Podcast]
                      p Estos contenidos brindan información de audio en cualquier momento, sin la necesidad de escucharla en directo en la radio, del mismo modo que el video, permitiendo escuchar de forma ilimitada un tema, pausarlo y analizarlo, lo que mejora su comprensión. Es menos didáctico que un video, pero requiere menor producción.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img7.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 Artículos
                      p Son contenidos desarrollados en texto, con información clara y profesional de un tema en particular, se realizan a partir de información veraz y con fuentes comprobables, representan alto nivel de credibilidad, pero tienen un consumo muy bajo en relación con otros contenidos; además, implican un alto nivel de redacción y conocimiento en relación con el tema a tratar.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 #[em Webinar]
                      p Los webinar son conferencias en línea que se desarrollan en directo y con el apoyo de videos y presentaciones, son muy eficaces para el desarrollo de temas específicos dirigidos a un mercado objetivo definido con anterioridad y que siente interés por la información que se está divulgando.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img9.svg', alt='Texto que describa la imagen')
                  .row.justify-content-center.align-items-center
                    .col-md-6.mb-4.mb-md-0
                      h4.mb-4 Noticia
                      p Es un contenido informativo y más usual para medios de comunicación o agencias de noticias; la temática puede ser variada; genera un alto nivel de consumo, aunque su lectura total es de un porcentaje bajo. Se debe tener presente que los lectores de noticias se quedan con el título, el resumen (lead) y la imagen o video que la acompaña.
                    .col-md-5
                      figure
                        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen')
                  

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
