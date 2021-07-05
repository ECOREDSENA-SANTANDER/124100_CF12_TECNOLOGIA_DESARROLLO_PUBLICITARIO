<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Publicidad en medios digitales
    
    p.mb-4 El mundo de hoy tiene un aliado indiscutible y se llama “conectividad”. Un alto porcentaje de las personas, empresas y hogares, se encuentran conectados y derivan sus operaciones a las aplicaciones, maquinaria y programas que dependen de forma casi exclusiva a la conectividad. Es indispensable entender porqué la publicidad de hoy debe basar sus operaciones en los medios digitales.

    separador

    #t_4_1.titulo-segundo
      .h2 4.1 Estadísticas
    
    p.mb-4 Los siguientes datos estadísticos fueron extraídos de la Agencia de Marketing Digital Inbound Branch (2020):

    .row.justify-content-center
      .col-lg-8
        SlyderC.mb-4(:datos="datosSlyder")
        a.anexo.mb-4.mb-lg-0(href="https://branch.com.co/marketing-digital/estadisticas-de-la-situacion-digital-de-colombia-en-el-2019-y-2020/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web.] Si desea ver las estadísticas completas, lo puede hacer ingresando al siguiente enlace.

    separador

    #t_4_2.titulo-segundo
      .h2 4.2 Facebook Ads

    .row.mb-5
      .col-lg-6
        p.mb-4 Cómo ya se dijo anteriormente, Facebook es la red social más grande del mundo, con más de 1600 millones de usuarios activos diarios.
        .cajon.color-primario.p-4.mb-4
          p Facebook Ads permite llegar con una amplia gama de estrategias a una gran cantidad de usuarios que adicionalmente se pueden segmentar con diferentes criterios, para el desarrollo de campañas y anuncios que permiten cumplir las metas establecidas en las estrategias de comunicación.
        p Facebook Ads es hoy en día una de las plataformas con mayor efectividad para el desarrollo de estrategias publicitarias, esto debido a la audiencia masiva y a un grupo de beneficios que se describen a continuación:
      .col-lg-6
        figure
          img(src='@/assets/curso/tema4/img1.svg', alt='facebook ads', style='width: 610px;')

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/icon1.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h3.text-center Segmentación
              p.text-center Esta es tal vez la mayor ventaja de este sistema de promoción, gracias al conocimiento profundo de la audiencia y la cantidad de información que se tiene de ella. Si se ha realizado un trabajo previo de perfilamiento del mercado desde el punto de vista demográfico y psicográfico es posible en Facebook realizar una segmentación muy precisa del mercado objetivo.
      
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/icon2.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h3.text-center Integración
              p.text-center Además de los anuncios tipo banner, en Facebook también se pueden realizar estrategias publicitarias en los timeline de los usuarios como si fuesen publicaciones y actualizaciones permitiendo una visualización de los anuncios en la publicación general.
      
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/icon3.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h3.text-center Viralización
              p.text-center Los anuncios que se publiquen en Facebook pueden ser compartidos por todos los usuarios que son impactados, lo que le da la posibilidad de convertirse en virales con un alcance muy alto.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/icon4.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h3.text-center Interacción
              p.mb-5.text-center Cuando un anuncio es generado en el timeline, este permite la interacción con los usuarios de la red a través de las diferentes funciones: compartir, reaccionar o comentar.
      
      .col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/icon5.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h3.text-center Análisis
              p.mb-5.text-center Las estadísticas y la segmentación que genera Facebook permite la toma de decisiones con el mínimo de riesgo en el desarrollo de las estrategias de comunicación.

    .tarjeta.p-4.p-md-5(style="background-color: #d2e1f17d; border-radius: 0;margin-bottom:60px;")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema4/img2.svg", alt="Tipos de campañas en Facebook", style="width:300px;").mx-auto
        .col-md.col-lg-6
          .titulo-segundo.mb-4
            h3 Tipos de campañas en Facebook
          p.mb-4 En Facebook se pueden desarrollar diferentes tipos de campañas o estrategias de comunicación que van desde una campaña en la que se estructura un plan completo, un grupo de anuncios o un único anuncio. Sin embargo, Facebook permite a sus usuarios el desarrollo de una gama de campañas pensadas para satisfacer diferentes necesidades.
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/infografía_autenticación.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download


    .h3.mb-4 Segmentación de audiencias en Facebook
    p.mb-5 No sobra recordar que el desarrollo de una estrategia de comunicación efectiva parte de un perfilamiento muy profundo de los clientes, con base en características demográficas y psicográficas. Antes del desarrollo de una campaña en Facebook es necesario realizar un arquetipo de cliente muy bien estructurado que permita realizar en la plataforma una segmentación más acertada y efectiva. La caracterización que realiza la red social contiene las siguientes variables:

    .row.justify-content-center.mb-5
      .col-lg-7.align-self-center
        ul.lista-ul
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Lugar:] permite segmentar por país, departamento, ciudad, código postal y rango de cobertura. De esta forma el anuncio solo se mostrará a personas que estén en esa zona específica.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Datos demográficos:] estos datos son muy importantes para el perfilamiento del cliente, los datos básicos son sexo, edad e idioma, sin embargo, es posible acceder a otros datos más específicos. En el caso de la edad se determina la mínima y la máxima. Para el caso de sexo puede seleccionarse hombres, mujeres o ambos.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Relación:] este punto permite determinar si el anuncio va dirigido a personas interesadas en hombres, mujeres o ambos o a un estado civil específico.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Educación:] se puede segmentar por el nivel educativo, la institución educativa y hasta el año de graduación.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Trabajo:] en este punto se puede segmentar por empresas, cargos y actividades económicas de empresas.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Padres:] segmenta con base en el número de hijos y las edades de estos, puede caracterizar a futuros padres.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Acontecimientos importantes:] segmenta con base en situaciones específicas del mercado, por ejemplo: cambio en su estado civil, en el país o la ciudad de residencia.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Intereses:] es tal vez uno de los datos más relevantes y efectivos en el desarrollo de una estrategia de comunicación. Esta permite segmentar entre un listado muy amplio de posibilidades de interés y aficiones de los usuarios de Facebook: cine, libros, series, deportes, juegos, equipos de fútbol y otros deportes, entre muchos.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Comportamientos:] en este punto se pueden segmentar los usuarios por actividades relacionadas con la tecnología, personas que debieron salir del país o por eventos actuales. Es una característica poco usual en Colombia.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Usuarios de dispositivos:] esta característica permite segmentar los usuarios de acuerdo al dispositivo por el cual accede: computador, tablet o celular. Adicionalmente, permite segmentar por marcas de dispositivos, sistemas operativos y tipo de conexión.
          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Viajes:] permite la segmentación de usuarios que utilicen aplicaciones de viajes en un periodo de tiempo determinado, la frecuencia de viaje y si lo hacen por negocios o placer.

          li 
            i.fas.fa-hand-point-right
            p.mb-0 #[strong Conexiones:] permite segmentar con base en la relación de los usuarios con la fanpage, permite excluir o incluir seguidores y amigos.
          
      .col-lg-4.align-self-center
        figure.mb-4
          img(src="@/assets/curso/tema4/img3.svg", alt="Tipos de campañas en Facebook", style="width:350px;").mx-auto
        figure.mb-5
          img(src="@/assets/curso/tema4/img4.svg", alt="Tipos de campañas en Facebook", style="width:350px;").mx-auto


    .h3.mb-4 Costo de la campaña
    p.mb-4 Una de las grandes ventajas de Facebook es que permite adaptarse a la capacidad económica del anunciante, en este punto se pueden seleccionar algunas variables para determinar el presupuesto:

    .row.justify-content-center.mb-5
      .col-lg-7.align-self-center
        .row.justify-content-center
          .col-lg-11
            ul.lista-ul--color
              li.mb-4
                img(src='@/assets/curso/tema4/icon6.svg' alt='AvatarTop', style="width:57px")
                p.mb-4.ms-4.mt-2 #[strong Periodo de circulación: ] determina el tiempo que va a estar la campaña al aire.
              li.mb-4
                img(src='@/assets/curso/tema4/icon6.svg' alt='AvatarTop', style="width:57px")
                p.mb-4.ms-4.mt-2  #[strong Presupuesto: ] se puede determinar la inversión total o asignar un gasto máximo por día.

          .col-lg-12
            p.mb-4 Para la definición del costo de la campaña se pueden también tener en cuenta otros datos avanzados:

          .col-lg-11
            ul.lista-ul--color
              li.mb-4
                img(src='@/assets/curso/tema4/icon6.svg' alt='AvatarTop', style="width:57px")
                p.mb-4.ms-4.mt-2 #[strong Objetivo: ] aplicando esta opción el sistema determina qué es lo ideal para el cobro: Costo Por Mil (CPM) o Costo Por Clic (CPC).
              li.mb-4
                img(src='@/assets/curso/tema4/icon6.svg' alt='AvatarTop', style="width:57px")
                p.mb-4.ms-4.mt-2  #[strong Clics: ] CPC, es decir, que se paga por los clics que realicen los usuarios en el anuncio.
              li.mb-4
                img(src='@/assets/curso/tema4/icon6.svg' alt='AvatarTop', style="width:57px")
                p.mb-4.ms-4.mt-2  #[strong Impresiones: ] CPM, es decir, se cuantifica en función de cada mil impactos.
      .col-lg-5.align-self-center
        figure
          img(src="@/assets/curso/tema4/img5.svg", alt="costo de la campaña", style='width:487px;').mx-auto

    .h3.mb-4  Características de los anuncios en Facebook
    p.mb-5 Facebook con el fin de mejorar el rendimiento de la publicidad en su plataforma, tiene algunas reglas o restricciones para el desarrollo de los anuncios:

    .row.justify-content-center.mb-2
      .col-lg-8
        .row.justify-content-center(style='background-color: #b0c0d23b')
          .col-lg-2.align-self-center.p-0.mt-2.mb-2
            figure
              img(src="@/assets/curso/tema4/img6.svg", alt="imagen que acompaña", style='width:96px;').mx-auto
          .col-lg-10.p-0.align-self-center
            p.mb-0.p-4 #[strong 20% máximo de texto:] en los anuncios de Facebook deben predominar las imágenes, por ello el texto no debe ocupar más del 20% del total. 
      
    .row.justify-content-center.mb-2
      .col-lg-8
        .row.justify-content-center(style='background-color: #b0c0d23b')
          .col-auto.align-self-center.p-0.mt-2.mb-2
            figure
              img(src="@/assets/curso/tema4/img7.svg", alt="imagen que acompaña", style='width:96px;').mx-auto
          .col-lg-10.p-0.align-self-center
            p.mb-0.p-4 #[strong Mención correcta de la red social:] la palabra Facebook debe escribirse correctamente con la F en mayúscula y no utilizar el logo.
    
    .row.justify-content-center.mb-2
      .col-lg-8
        .row.justify-content-center(style='background-color: #b0c0d23b')
          .col-lg-2.align-self-center.p-0.mt-2.mb-2
            figure
              img(src="@/assets/curso/tema4/img8.svg", alt="imagen que acompaña", style='width:96px;').mx-auto
          .col-lg-10.p-0.align-self-center
            p.mb-0.p-4 #[strong Contenido:] Facebook limita el uso de desnudos e imágenes que puedan lastimar la sensibilidad de los usuarios.

    .row.justify-content-center.mb-5
      .col-lg-8
        .row.justify-content-center(style='background-color: #b0c0d23b')
          .col-lg-2.align-self-center.p-0.mt-2.mb-2
            figure
              img(src="@/assets/curso/tema4/img9.svg", alt="imagen que acompaña", style='width:96px;').mx-auto
          .col-lg-10.p-0.align-self-center
            p.mb-0.p-4 #[strong Productos:] de acuerdo con las normas de publicidad de cualquier medio, en Facebook no se pueden promocionar cigarrillos de ningún tipo, productos ilegales, medicamentos o armas, tampoco los relacionados con alcohol, servicios sexuales, apuestas o loterías.


    p.mb-4 A través de la plataforma de Facebook Ads se realizan también los anuncios y campañas para Instagram, con características similares; es importante que cuando se manejan ambas cuentas el desarrollo de las campañas se haga integrándose para tener un mejor alcance, teniendo en cuenta claro está, el segmento de mercado.
    .cajon.color-acento-contenido.mb-5.p-4
      p.mb-0 #[strong Nota:] en el siguiente enlace se puede realizar la edición y configuración de las campañas, teniendo en cuenta que debe tener una cuenta en Facebook Manager para ello:
        a(href='http://www.facebook.com/ads/manage/powereditor')  www.facebook.com/ads/manage/powereditor

    separador

    #t_4_3.titulo-segundo
      .h2 4.3 Google Adwords
    
    p.mb-5 Es la plataforma publicitaria digital más grande del mundo y es administrada por Google, el motor de búsqueda más utilizado a nivel mundial y el sitio web más visitado diariamente. Esta plataforma publicitaria está conformada por dos redes principales:

    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-acento-contenido.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema4/img10.svg', alt='Objetivo', style="width:150px").mx-auto
              
            .h2.text-center.mb-5 Red de búsqueda
            p.text-center Está conformada por los resultados de búsqueda que se hacen en Google y etiquetados con la palabra “Anuncio”. Esta red permite aparecer en posiciones destacadas cuando un usuario realiza una búsqueda semejante con el objeto de la búsqueda; es decir, con palabras claves relacionadas. 
          
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema4/img11.svg', alt='Estructura', style="width:140px").mx-auto
            .h2.text-center.mb-5.text-white Red display
            p.text-center.text-white Está conformada por todos los portales y sitios asociados a Google a través de Adsense o en sitios que pertenecen a Google como Gmail o YouTube. Esta red permite llegar a un gran número de personas y generar un alto posicionamiento de marca.


    .tarjeta.p-4.p-md-5.mb-5(style="background-color: #d2e1f17d; border-radius: 0;")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema4/img2.svg", alt="Funcionamiento", style="width:300px;").mx-auto
        .col-md.col-lg-6
          .titulo-segundo.mb-4
            h3 Funcionamiento
          p.mb-4 De la misma forma que Facebook, Google permite llegar a segmentos muy específicos de la población, estos deben estar previamente caracterizados para realizar de la forma más eficientemente posible el desarrollo de las estrategias de comunicación.
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/funcionamiento.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .h3.mb-4 Adwords express
    p.mb-5 Es una versión automatizada de Google Adwords, esta se utiliza cuando no se cuenta con un sitio web y se requiere realizar el proceso de forma más sencilla, en esta plataforma solo se pueden realizar actividades básicas como crear un anuncio online, establecer un presupuesto, elegir una categoría de empresa y seleccionar frases de búsqueda relacionadas con el negocio.

    .h3.mb-4 Selección de palabras claves

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/img12.svg", alt="Selección de palabras claves", style="width:274px;").mx-auto 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 La selección de las palabras claves es un elemento de gran importancia en el desarrollo de una campaña, para cada producto o servicio es necesario seleccionar palabras que concuerden y sean eficaces en el proceso de búsqueda, encontrando:

    TabsA.color-acento-contenido.mb-5
      
      .tarjeta.tarjeta--gris.p-4(titulo="Concordancia amplia")
        .row.justify-content-center
          .col-lg-6
            p En este punto Google escogerá cualquier palabra de la frase que se haya creado para mostrar anuncios con búsquedas que incluyan una de esas palabras. Esta acción puede generar errores en el desarrollo de las campañas porque la búsqueda se hace más general. Por ejemplo, si las palabras claves son “curso arte” Google activa anuncios con: curso de…, galería de arte, venta de arte, arte decorativo, etc.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img13.svg', alt='Concordancia amplia', style='width:345px;').mx-auto


      .tarjeta.tarjeta--gris.p-4(titulo="Concordancia de frase")
        .row.justify-content-center
          .col-lg-6
            p En este caso Google mostrará anuncios que contengan la frase o variaciones ligeras de esta. Con esta concordancia de frase se tiene un control superior sobre las búsquedas que pueden activar los anuncios de la empresa. Por ejemplo, la frase “curso arte”, esta frase activará anuncios con búsquedas como curso de arte, cursos de arte, cursos de arte online, cursos gratis de arte, etc.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img14.svg', alt='Concordancia de frase', style='width:345px;').mx-auto
      
      .tarjeta.tarjeta--gris.p-4(titulo="Concordancia exacta")
        .row.justify-content-center
          .col-lg-6
            p Este tipo de concordancia activará los anuncios con búsquedas que tengan la palabra exacta o variaciones de ella. De esta forma se tiene control absoluto de los anuncios, es la mejor alternativa en una campaña de Adwords.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img15.svg', alt='Concordancia exacta', style='width:345px;').mx-auto
      
      .tarjeta.tarjeta--gris.p-4(titulo="Concordancia negativa")
        .row.justify-content-center
          .col-lg-6
            p Con este tipo de concordancia lo que se busca es restringir frases que no se desea que activen los anuncios de la empresa.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema4/img16.svg', alt='Concordancia negativa', style='width:345px;').mx-auto

    p.mb-5 En el siguiente enlace se puede hacer una planeación previa de las palabras claves que se pueden utilizar en una campaña de Adwords: 
      a(href='https://ads.google.com/home/')  https://ads.google.com/home/

    .tarjeta.p-4.p-md-5.mb-5(style="background-color: #d2e1f17d; border-radius: 0;")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema4/img2.svg", alt="Características de los anuncios en Google Adwords", style="width:300px;").mx-auto
        .col-md.col-lg-6
          .titulo-segundo.mb-4
            h3 Características de los anuncios en Google Adwords
          p.mb-4 En Google han identificado elementos claves para el desarrollo de anuncios efectivos; entre mejor esté diseñado el anuncio más alcance e impacto va a generar en el mercado objetivo.
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    .h3.mb-4 Características de la landing page
    p.mb-5 Una landing page es la página a la que el usuario llegará una vez haga clic en el anuncio publicitado en la red de Google, también llamada página de aterrizaje. Es importante recordar que el objetivo de los anuncios de Google es generar tráfico en la página de la empresa; por ello, la Landing page debe ser atractiva y clara en cuanto a lo que se promociona:

    .row.justify-content-center
      .col-lg-7
        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-2
              img(src='@/assets/curso/tema4/icon7.svg' alt='AvatarTop', style="width:92px;")
              .tarjeta.tarjeta--gris
                .p-5
                  p.mb-0 #[strong Diseño simple:] un sitio web sobrio y sencillo es mejor, como dice la premisa del diseño “menos es más”.
        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-2
              img(src='@/assets/curso/tema4/icon7.svg' alt='AvatarTop', style="width:92px;")
              .tarjeta.tarjeta--gris
                .p-5
                  p.mb-0 #[strong Título visible:]  además debe ser directo y persuasivo, este elemento es lo primero que va a leer el usuario una vez haga clic en el anuncio.
        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-3
              img(src='@/assets/curso/tema4/icon7.svg' alt='AvatarTop', style="width:92px;")
              .tarjeta.tarjeta--gris
                .p-5
                  p.mb-0 #[strong Copy claro y sencillo:] un copy debe ser de fácil lectura, la idea es usar términos sencillos para que el cliente entienda rápidamente lo que se le está ofreciendo.

        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-2
              img(src='@/assets/curso/tema4/icon7.svg' alt='AvatarTop', style="width:92px;")
              .tarjeta.tarjeta--gris
                .p-5
                  p.mb-0 #[strong Imágenes y elementos visuales:] la visualización de una página por parte de un usuario es siempre un escaneo inicial antes de decidir leerla o profundizar en su contenido. Los gráficos son necesarios, pero estos no deben saturar la composición de la página, cada uno debe estar bien seleccionado y tener un objetivo claro de comunicación.
      .col-lg-4.align-self-center
        figure
          img(src='@/assets/curso/tema4/img17.svg', alt='Características de la landing page', style='width:400px;').mx-auto

    p.mb-4 Google Adwords es una excelente herramienta y alternativa para llegar al mercado de forma masiva y efectiva. Google permite el desarrollo de campañas y estrategias de comunicación que representen un alto nivel de efectividad, además es una plataforma compleja y amplia que implica para las empresas la asesoría de expertos en el área para minimizar los riesgos de las inversiones.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Uso de teléfonos móviles, redes sociales e internet',
        imagen: require('@/assets/curso/tema4/Anexo_1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Dispositivos utilizados por los colombianos',
        imagen: require('@/assets/curso/tema4/Anexo_2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tiempo de uso de plataformas y dispositivos',
        imagen: require('@/assets/curso/tema4/Anexo_3.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Resumen del uso de internet',
        imagen: require('@/assets/curso/tema4/Anexo_4.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Uso de internet en dispositivos móviles',
        imagen: require('@/assets/curso/tema4/Anexo_5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Uso de las redes sociales',
        imagen: require('@/assets/curso/tema4/Anexo_6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Comportamiento de usuarios de redes sociales',
        imagen: require('@/assets/curso/tema4/Anexo_7.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Redes sociales más utilizadas',
        imagen: require('@/assets/curso/tema4/Anexo_8.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Audiencia en Facebook',
        imagen: require('@/assets/curso/tema4/Anexo_9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Dispositivos más utilizados para acceder a Facebook',
        imagen: require('@/assets/curso/tema4/Anexo_10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Audiencia en Instagram',
        imagen: require('@/assets/curso/tema4/Anexo_11.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Edad y sexo de usuarios de Instagram y Facebook',
        imagen: require('@/assets/curso/tema4/Anexo_12.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Audiencia en Twitter',
        imagen: require('@/assets/curso/tema4/Anexo_13.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
