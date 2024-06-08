<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 3
      h1 Medios digitales
    
    p.mb-4 Con la globalización de la conectividad se han generado una gran cantidad de nuevos medios, haciendo evidente la importancia de la comunicación y el afán del ser humano por satisfacer su necesidad de socialización y de mantenerse informado de forma permanente. El auge de las redes sociales y el nacimiento de nuevas alternativas de interacción y expresión es evidente, ya que en los últimos años han surgido plataformas como Snapchat, TikTok o Instagram, las cuales ofrecen nuevas formas para obtener y compartir información. 

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Facebook" :icono="require('@/assets/curso/tema3/icon1.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Es tal vez la red social más importante por su presencia y cobertura en el mundo. Creada por #[em Mark Zukerberg] en el año 2003 con el nombre de #[em Facemash] y destinada a mostrar las fotografías de los estudiantes de la universidad de #[em Harvard] y hacer un #[em ranking] con las más atractivas. Después de varios problemas con directivos y estudiantes la red pasó a ser #[em The Facebook] y se expandió a otras universidades logrando interacción entre los estudiantes. En 2005 la red social se renombró con la denominación actual #[em Facebook] y en 2006 oficialmente se lanzó a nivel mundial dando acceso a estudiantes de todas las universidades, colegios y empleados de empresas. En 2011, 350 millones de personas accedían a #[em Facebook] a través del celular y se convirtió en el servidor más grande del mundo en alojamiento de fotografías. #[em Facebook] es hoy una red social con múltiples servicios, permitiendo la interacción 3.0, creación de grupos, #[em fanpages], alojar fotografías y videos, así como la publicidad pagada y estrategias de promoción y comunicación.
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/img1.svg', alt='Facebook').mx-auto
      .py-4.py-md-5(titulo="Instagram" :icono="require('@/assets/curso/tema3/icon2.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Se creó en el año 2010 como una aplicación para los #[em iPhone] y aprovechar la cámara de estos dispositivos móviles; el objetivo era generar efectos lomográficos en las fotografías y agregar otros filtros creativos a las imágenes. En 2012 fue lanzada oficialmente para todos los dispositivos, lo que produjo un millón de descargas en un solo día, esto generó el interés de #[em Mark Zukerberg] quien ese mismo año la compró por mil millones de dólares. Hoy en día #[em Instagram] permite subir fotografías y agregarles filtros, compartir videos, comentarios, etiquetar personas, incluir #[em hashtags,] realizar transmisiones en vivo y chatear. Esta red social se ha convertido en una plataforma comercial muy importante para el desarrollo del #[em e-commerce] de emprendimientos y #[em pymes.]
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/img2.svg', alt='Instagram').mx-auto
      .py-4.py-md-5(titulo="TicTok" :icono="require('@/assets/curso/tema3/icon3.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Esta aplicación fue lanzada en 2016 con el nombre #[em Douyin] o "sacudir la música" en chino. Se trata de una red social cuyo objetivo es compartir pequeños clips musicales. En el resto del mundo recibe el nombre de TikTok, y está disponible para #[em iOS y Android.] TikTok permite crear, editar y subir videoselfies musicales de 1 minuto, permite aplicarles algunos efectos y fondos musicales. También, tiene algunas funciones de inteligencia artificial e incluye llamativos efectos especiales, filtros y características de realidad aumentada.
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='TicTok').mx-auto
      .py-4.py-md-5(titulo="Snapchat" :icono="require('@/assets/curso/tema3/icon4.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Es una aplicación de mensajería instantánea creada por #[em Evan Spiege]l en 2011 como proyecto para una clase en la universidad. #[em Facebook] realizó una oferta de 3000 millones de dólares en 2013 pero esta no fue aceptada. En 2017 superó los 160 millones de usuarios activos diarios. #[em Snapchat] permite enviar fotos y vídeos, pero a diferencia de otros chats el periodo de vida de lo enviado es muy corto. Al sacar una foto o un vídeo hay dos opciones:
            ul.lista-ul
              li.d-flex 
                i.fas.fa-circle-check
                p.mb-0 #[b Guardarlo como historia:] estará visible durante 24 horas y se puede decidir quién lo puede ver.
              li.d-flex
                i.fas.fa-circle-check
                p.mb-0 #[b Enviarlo como un mensaje privado:] en este caso la foto o el video solo durará unos segundos antes de ser eliminado.
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen').mx-auto
      .py-4.py-md-5(titulo="X" :icono="require('@/assets/curso/tema3/icon5.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Fue creada en el año 2006 por Jack Dorsey. Es considerada por muchos como una plataforma de comunicación bidireccional, esto quiere decir que cuando una persona envía un mensaje o publica un comentario está sujeto a respuestas de sus seguidoras o seguidores. X se puede definir como la plataforma de #[em microblogging] más grande del mundo gracias a su método de mensajes con límite de 280 caracteres. Esta red permite crear una comunidad en torno a una cuenta, compartir imágenes y videos, seguir a otros tuiteros, dar like a publicaciones, compartirlas, comentarlas y almacenarlas. Los hilos de X son una herramienta excelente para contar historias o relatos. Las tendencias siempre son temas de actualidad que son muy comentados por miles y hasta millones de tuiteros en una zona en particular.
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/img5.svg', alt='Texto que describa la imagen').mx-auto
      .py-4.py-md-5(titulo="YouTube" :icono="require('@/assets/curso/tema3/icon6.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Fundada por #[em Chad Hurley, Steve Chen y Jawed Karim] en 2005 en la ciudad de San Bruno, California. Se puede decir que #[em YouTube] es una plataforma de televisión en internet, esto porque ya hace presencia en los #[em smart tv] y dispositivos de televisión digital. Sin embargo, es en esencia una plataforma para el alojamiento y difusión de material audiovisual. Es el segundo sitio más visitado del mundo después de #[em Google]. En esta plataforma se ven más de 5000 millones de videos al día. Por sus funcionalidades también es considerada una red social, donde se permite subir contenido, hacer #[em like,] compartir, seguir suscriptores y realizar transmisiones en vivo.
          .col-md-3
            figure
              img(src='@/assets/curso/tema3/img6.svg', alt='Texto que describa la imagen').mx-auto


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
