<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Publicidad en medios digitales
    
    .row.justify-content-center.align-items-center
      .col-lg-1
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/img01.svg', alt='Infografías', style="width:86px;")
      .col-lg-11.col-sm-12
        p.mb-0 El mundo de hoy tiene un aliado indiscutible y se llama “conectividad”. Un alto porcentaje de las personas, empresas y hogares, se encuentran conectados y derivan sus operaciones a las aplicaciones, maquinaria y programas que dependen de forma casi exclusiva a la conectividad. Es indispensable entender porque la publicidad de hoy debe basar sus operaciones en los medios digitales.
    
    separador
    #t_4_1.titulo-segundo
      .h2 4.1 Estadísticas
    
    p.mb-5 Los siguientes datos estadísticos fueron extraídos de la Agencia de #[em Marketing] Digital #[em Inbound Branch] (2020):
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12     
        .caja3.p-5
          .row.align-items-center.justify-content-center
            .col-lg-12.col-md-12.col-12
              .tarjeta.tarjeta--azul.p-3.mt-5.mb-5
                SlyderA(tipo="b").p-3
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 A principios de 2024, alrededor del 82.5 % de la población de Colombia vivía en centros urbanos.
                      p.mb-4 El número de conexiones móviles celulares activas en el país es de 77.02 millones, cifra equivalente al 147.5 % de la población total.
                      p.mb-4 Por otro lado, el número de usuarios conectados a Internet es de 39.51 millones, es decir, el 75.7 % de la población, y los usuarios activos en redes sociales son 36.70 millones .
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 1. 
                        | Uso de teléfonos móviles, redes sociales e internet
                      figure
                        img(src='@/assets/curso/tema4/img02.svg', alt='La figura presenta graficación en círculos de los resultados de encuesta sobre uso de teléfonos móviles, redes sociales e internet.')
                        figcaption Nota. Ver anexo 1         
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Este análisis se realizó en usuarios comprendidos entre los 16 a 64 años: 
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Teléfono celular (cualquier tipo) 98.8 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Teléfonos inteligentes (#[em Smartphone]) 98.5 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Teléfono móvil no inteligente: 12.1 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Laptop u ordenador de escritorio (pc): 66.4 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b #[em Tablets]: 27.3 %]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Dispositivo de streaming de TV 18.6 %]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Consola de videojuegos: 24.5 %]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Dispositivo inteligente para el hogar (Smart Home) 11.5 %.]
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p.mb-0 #[b Relojes inteligentes: 26.3 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b Dispositivos de realidad virtual: 4.6 %.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 2. 
                        | Dispositivos utilizados por los colombianos
                      figure
                        img(src='@/assets/curso/tema4/img03.svg', alt='La figura presenta graficación en círculos de  resultados de encuesta sobre  dispositivos utilizados por los colombianos.')
                        figcaption Nota. Ver anexo 2
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p Este análisis se realizó en usuarios comprendidos entre los 16 a 64 años:
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 8 horas y 43 minutos al día conectados a Internet. (18 minutos menos con respecto a enero del 2023).]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 3 horas y 27 minutos al día mirando TV (Broadcast o Streaming).]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 3 horas y 23 minutos al día usando redes sociales.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 1 hora y 28 minutos al día leyendo noticias (en línea o de medios impresos).]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 1 hora y 47 minutos al día escuchando música a través de servicios Streaming.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 1 hora y 08 minutos escuchando la radio.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 59 minutos escuchando podcasts.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b 55 minutos al día jugando videojuegos de consola.]
                    
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 3. 
                        | Tiempo de uso de plataformas y dispositivos
                      figure
                        img(src='@/assets/curso/tema4/img04.svg', alt='La figura presenta graficación en círculos de resultados  de encuesta sobre tiempo de uso de plataformas y dispositivos')
                        figcaption Nota. Ver anexo 3
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p 
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Había 39.51 millones de usuarios de Internet en Colombia en enero de 2024.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b La tasa de penetración de Internet de Colombia se situó en el 75.7 % de la población total a principios de 2024.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El análisis de Kepios indica que los usuarios de Internet en Colombia aumentaron en  0.4 %, 164 mil de usuarios más entre enero de 2023 y enero de 2024.]
                      p.mb-4 Para tener una perspectiva, estas cifras de usuarios revelan que 12.70 millones de personas en Colombia no usaban Internet a principios de 2024, lo que sugiere que el 24.3 % de la población permanecía sin conexión a principios de año.
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 4. 
                        | Resumen del uso de internet
                      figure
                        img(src='@/assets/curso/tema4/img05.svg', alt='La figura presenta graficación en círculos de los resultados de encuesta sobre resumen del uso de internet.')
                        figcaption Nota. Ver anexo 4
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Velocidad mediana de conexión móvil: 12.26 Mbps.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Velocidad media de conexión fija: 111.81 Mbps.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Aumento de 1.44 Mbps (+13.3 %) en la conexión móvil y 22.18 Mbps (+24.7 %) en la conexión fija en los doce meses anteriores a 2024.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 5. 
                        | Velocidades de conexión a Internet
                      figure
                        img(src='@/assets/curso/tema4/img06.svg', alt='La figura presenta graficación en círculos de los resultados de encuesta sobre las velocidades de conexión a internet.')
                        figcaption Nota. Ver anexo 5
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 El 70.3 de la población total de Colombia es usuaria activa en redes sociales, es decir, 36.7 millones de personas. 
                      p.mb-4 Los datos publicados en las herramientas de planificación publicitaria indican que los usuarios mayores de 18 años utilizando redes sociales en Colombia a principios de 2024 equivalía al 94.1 % de la población total mayor de 18 años en ese momento.
                      p.mb-4 El 92.9 % de la base total de usuarios de Internet en Colombia (independientemente de la edad) utilizaba al menos una plataforma de redes sociales en enero de 2024.
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 6. 
                        | Uso de las redes sociales
                      figure
                        img(src='@/assets/curso/tema4/img07.svg', alt='La figura presenta graficación en círculos de los resultados de encuesta sobre resumen del uso de redes sociales')
                        figcaption Nota. Ver anexo 6
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p Este análisis se realizó en usuarios comprendidos entre los 16 a 64 años:
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b WhatsApp: 92.2 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Facebook: 89.2 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Instagram: 86.7 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Messenger: 68.2 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b TikTok: 67.8 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Telegram:53.6 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b X(Twitter): 49.3 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Pinterest: 44.6 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Linkedin: 33.5 %.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b Snapchat: 22.3 %.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 7. 
                        | Comportamiento de usuarios de redes sociales
                      figure
                        img(src='@/assets/curso/tema4/img08.svg', alt='La figura presenta graficación en barras horizontales, de los resultados de encuesta sobre redes sociales más utilizadas.')
                        figcaption Nota. Ver anexo 7
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Los datos publicados en los recursos publicitarios de Meta indican que:
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Facebook tenía 36.70 millones de usuarios en Colombia a principios de 2024, el 70.3 % de la población total.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El alcance potencial de los anuncios de Facebook en Colombia aumentó en  9.6 %, 3.2 millones de usuarios más entre enero de 2023 y enero de 2024.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El número de usuarios que los anunciantes podían alcanzar con anuncios en Facebook en Colombia disminuyó en 3.7 %, 1.4 millones menos entre octubre de 2023 y enero de 2024.]
        
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b El 50.9 % de la audiencia publicitaria de Facebook en Colombia eran mujeres, mientras que el 49.1 % son hombres.]
                    
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 8. 
                        | Audiencia en Facebook
                      figure
                        img(src='@/assets/curso/tema4/img09.svg', alt='La figura presenta graficación en círculos de los resultados de encuesta sobre resumen de la audiencia de Facebook.')
                        figcaption Nota. Ver anexo 8
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Los números publicados en las herramientas publicitarias de Meta indican que Instagram tenía:
                      ul.lista-ul
      
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 20.05 millones de usuarios en Colombia a principios de 2024.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El alcance publicitario de Instagram en Colombia era equivalente al 38.4 % de la población total a principios de año.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Es importante notar que el alcance publicitario de Instagram en Colombia a principios de 2024 era equivalente al 50.7 % de la base de usuarios de internet locales (independientemente de la edad).]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El alcance potencial de los anuncios de Instagram en Colombia aumentó en  13.0 %, 2.3 millones de usuarios más entre enero de 2023 y enero de 2024.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b El 56.8 % de la audiencia publicitaria de Instagram en Colombia eran mujeres, mientras que el 43.2 % eran hombres.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 9. 
                        | Audiencia en Instagram
                      figure
                        img(src='@/assets/curso/tema4/img101.svg', alt='La figura presenta graficación en círculos de los resultados de encuesta sobre audiencia en Instagram.')
                        figcaption Nota. Ver anexo 9
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Las cifras publicadas en los recursos publicitarios de X (Twitter) indican que:
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b X tenía 5.64 millones de usuarios en Colombia a principios de 2024, equivalente al 10.8 % de la población total en ese momento.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El alcance publicitario de X en Colombia era equivalente al 14.3 % de la base local de usuarios de internet (independientemente de la edad) a principios de año.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El alcance potencial de los anuncios de X en Colombia aumentó en 0.7 %, 40 mil de usuarios más entre principios de 2023 y principios de 2024.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b El 36.2 % de la audiencia publicitaria de Twitter en Colombia eran mujeres, mientras que el 63.8 % eran hombres.]      
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 10. 
                        | Audiencia en  X (Twitter)
                      figure
                        img(src='@/assets/curso/tema4/img102.svg', alt='La figura presenta graficación en círculos de los resultados de encuesta sobre resumen de la audiencia en Twitter.')
                        figcaption Nota. Ver anexo 10
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema4/ima11.svg")
            .col-lg-8.col-md-12.col-12
              h4.mb-3.text-white #[b Recomendado]
              p.mb-3 Si desea conocer las #[b estadísticas completas,] lo puede hacer ingresando al siguiente enlace:
            .col-lg-2
              a.boton.color-acento-botones(href="https://branch.com.co/marketing-digital/estadisticas-de-la-situacion-digital-de-colombia-en-el-2019-y-2020/" target="_blank")
                span Enlace
                i.fas.fa-link

    separador
    #t_4_2.titulo-segundo
      .h2 4.2 Facebook Ads

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-9.col-md-12.col-12
        p.mb-4 Cómo ya se dijo anteriormente, Facebook es la red social más grande del mundo, con más de 1600 millones de usuarios activos diarios.
        p.mb-4 Facebook #[b permite llegar con una amplia gama de estrategias a una gran cantidad de usuarios que adicionalmente se pueden segmentar con diferentes criterios,] para el desarrollo de campañas y anuncios que permiten cumplir las metas establecidas en las estrategias de comunicación.
        p.mb-4 Además, es hoy en día una de las plataformas con mayor efectividad para el desarrollo de estrategias publicitarias, esto debido a la audiencia masiva y a un grupo de beneficios que se describen a continuación:
      .col-lg-3.col-md-9.col-9
        img.img-a.img-t(src='@/assets/curso/tema4/ima12.png', alt='Texto que describa la imagen')
    
    
    SlyderF(columnas="col-lg-6 col-xl-4 col-md-6").mb-5
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima13.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Segmentación
        p.text-center Ésta es tal vez la mayor ventaja de este sistema de promoción, gracias al conocimiento profundo de la audiencia y la cantidad de información que se tiene de ella. Si se ha realizado un trabajo previo de perfilamiento del mercado desde el punto de vista demográfico y psicográfico es posible en Facebook realizar una segmentación muy precisa del mercado objetivo.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima14.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Integración
        p.text-center Además de los anuncios tipo banner, en Facebook también se pueden realizar estrategias publicitarias en los #[em timeline] de los usuarios como si fuesen publicaciones y actualizaciones permitiendo una visualización de los anuncios en la publicación general.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima15.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Viralización
        p.text-center Los anuncios que se publiquen en Facebook pueden ser compartidos por todos los usuarios que son impactados, lo que le da la posibilidad de convertirse en virales con un alcance muy alto.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima16.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Interacción
        p.text-center Cuando un anuncio es generado en el #[em timeline], este permite la interacción con los usuarios de la red a través de las diferentes funciones: compartir, reaccionar o comentar.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima17.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Análisis
        p.text-center Las estadísticas y la segmentación que genera Facebook permite la toma de decisiones con el mínimo de riesgo en el desarrollo de las estrategias de comunicación.
    
    .d-flex.mb-4  
      h3.title-card-acento-contenido Tipos 
      h3.title-card-comp &nbsp;de campañas en Facebook

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.mb-4.my-4.d-none.d-lg-block(src='@/assets/curso/tema4/ima18.svg',alt='tema3')
      .col-sm-12.col-lg-6
        p.mb-5 En Facebook se pueden desarrollar diferentes tipos de campañas o estrategias de comunicación que van desde una campaña en la que se estructura un plan completo, un grupo de anuncios o un único anuncio. Sin embargo, Facebook permite a sus usuarios el desarrollo de una gama de campañas pensadas para satisfacer diferentes necesidades:
        .tarjeta.tarjeta--verde.p-5
          SlyderA(tipo="b")
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Promocionar publicaciones]
                p.mb-0 Como su nombre lo indica, permite generar visibilidad a una publicación realizada en el #[em timeline], siendo la forma más sencilla y básica para realizar estrategias de comunicación en Facebook.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Promocionar una página]
                p.mb-0 Con esta estrategia se busca aumentar el número de seguidores que tenga la página, esto permite subir su #[em status] y producir un mejor posicionamiento.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Atraer personas a un sitio #[em web]]
                p.mb-0 Teniendo en cuenta el poder de la segmentación de Facebook, este tipo de campaña permite generar tráfico de usuarios con características muy específicas al sitio #[em web] de la empresa, se puede realizar para un sitio externo o para una página #[em fanpage].
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Aumentar conversiones en un sitio #[em web]]
                p.mb-0 Este tipo de campaña está direccionada a que el usuario realice una acción específica dentro del sitio #[em web]: suscripciones, descargas, pagos, etc.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Instalación de una #[em App]]
                p.mb-0 Esta campaña enlaza directamente a la tienda de #[em Apps], el objetivo es aumentar el número de descargas, para este tipo de estrategia se puede hacer segmentación de usuarios de #[em Smartphone].
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Incrementar la interacción en una #[em App]]
                p.mb-0 Este tipo de campaña se enfoca en el desarrollo de una acción dentro de la #[em App], esta puede estar dirigida a personas con la #[em App] descargada o en quienes la tienen para que realice también la instalación.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Llegar a personas cerca al negocio]
                p.mb-0 Esta campaña se basa en la geolocalización, se realiza segmentación de acuerdo a un rango de cobertura, en este punto se puede agregar un mapa para que el cliente tenga la opción de llegar.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Aumento de asistentes a un evento]
                p.mb-0 El objetivo es llevar a las personas a un evento en particular, en este tipo de campañas es importante realizar segmentación con base en la geolocalización.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Conseguir solicitudes de ofertas]
                p.mb-0 Esta campaña se orienta a dar visibilidad a ofertas realizadas en anuncios anteriores con límite de tiempo o cantidad, esta campaña permite poner un botón de < Obtener oferta >. Esta campaña combinada con una segmentación con base en la geolocalización puede generar mayor efectividad.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Aumentar reproducciones de un video]
                p.mb-0 Los audiovisuales representan mayor efectividad en el desarrollo de una estrategia promocional, por esto este tipo de campaña es muy efectiva y su enfoque es el aumento en la visualización de un video específico.

    .d-flex.mb-4  
      h3.title-card-acento-contenido Segmentación 
      h3.title-card-comp &nbsp;de audiencias en Facebook

    p.mb-5 Es pertinente recordar que el desarrollo de una estrategia de comunicación efectiva parte de un perfilamiento muy profundo de los clientes, con base en características demográficas y psicográficas. Antes del desarrollo de una campaña en Facebook es necesario realizar un arquetipo de cliente muy bien estructurado que permita realizar en la plataforma una segmentación más acertada y efectiva. La caracterización que realiza la red social contiene las siguientes variables:

    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-6
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--azull")(data-aos="zoom-in-left")
          .row(titulo="Lugar")
            .col-sm-12.col-lg-12
                p.mb-0.mo Permite segmentar por país, departamento, ciudad, código postal y rango de cobertura. De esta forma el anuncio solo se mostrará a personas que estén en esa zona específica.
          .row(titulo="Datos demográficos")
            .col-sm-12.col-lg-12
                p.mb-0.mo Estos datos son muy importantes para el perfilamiento del cliente, los datos básicos son sexo, edad e idioma, sin embargo, es posible acceder a otros datos más específicos. En el caso de la edad se determina la mínima y la máxima. Para el caso de sexo puede seleccionarse hombres, mujeres o ambos.
          .row(titulo="Relación")
            .col-sm-12.col-lg-12
                p.mb-0.mo Este punto permite determinar si el anuncio va dirigido a personas interesadas en hombres, mujeres o ambos o a un estado civil específico.
          .row(titulo="Educación")
            .col-sm-12.col-lg-12
                p.mb-0.mo Se puede segmentar por el nivel educativo, la institución educativa y hasta el año de graduación.
          .row(titulo="Trabajo")
            .col-sm-12.col-lg-12
                p.mb-0.mo En este punto se puede segmentar por empresas, cargos y actividades económicas de empresas.
          .row(titulo="Padres")
            .col-sm-12.col-lg-12
                p.mb-0.mo Segmenta con base en el número de hijos y las edades de estos, puede caracterizar a futuros padres.
      .col-sm-12.col-lg-6
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima19.png' alt='AvatarTop')
    .row.justify-content-center.align-items-center
      .col-sm-12.col-lg-6
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima19.1.png' alt='AvatarTop')
      .col-sm-12.col-lg-6
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azull")(data-aos="zoom-in-left")
          .row(titulo="Acontecimientos importantes")
            .col-sm-12.col-lg-12
                p.mb-0.mo Segmenta con base en situaciones específicas del mercado, por ejemplo: cambio en su estado civil, en el país o la ciudad de residencia.
          .row(titulo="Intereses")
            .col-sm-12.col-lg-12
                p.mb-0.mo Es tal vez uno de los datos más relevantes y efectivos en el desarrollo de una estrategia de comunicación. Esta permite segmentar entre un listado muy amplio de posibilidades de interés y aficiones de los usuarios de Facebook: cine, libros, series, deportes, juegos, equipos de fútbol y otros deportes, entre muchos.
          .row(titulo="Comportamientos")
            .col-sm-12.col-lg-12
                p.mb-0.mo En este punto se pueden segmentar los usuarios por actividades relacionadas con la tecnología, personas que debieron salir del país o por eventos actuales. Es una característica poco usual en Colombia.
          .row(titulo="Usuarios de dispositivos")
            .col-sm-12.col-lg-12
                p.mb-0.mo Esta característica permite segmentar los usuarios de acuerdo al dispositivo por el cual accede: computador, #[em tablet] o celular. Adicionalmente, permite segmentar por marcas de dispositivos, sistemas operativos y tipo de conexión.
          .row(titulo="Viajes")
            .col-sm-12.col-lg-12
                p.mb-0.mo Permite la segmentación de usuarios que utilicen aplicaciones de viajes en un periodo de tiempo determinado, la frecuencia de viaje y si lo hacen por negocios o placer.
          .row(titulo="Conexiones")
            .col-sm-12.col-lg-12
                p.mb-0.mo Permite segmentar con base en la relación de los usuarios con la fanpage, permite excluir o incluir seguidores y amigos.
    
    .d-flex.mb-4  
      h3.title-card-acento-contenido Costo
      h3.title-card-comp &nbsp;de la campaña

    p.mb-4 Una de las grandes ventajas de Facebook es que permite adaptarse a la capacidad económica del anunciante, en este punto se pueden seleccionar algunas variables para determinar el presupuesto: 

    .row.justify-content-center.align-items-center
      .col-lg-10.col-sm-12
        .row.justify-content-center.align-items-center  
          .col-lg-6.col-md-6.col-12.mb-4
            .bg11.p-4
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima20.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-0 #[b Periodo de circulación:] determina el tiempo que va a estar la campaña al aire.
          .col-lg-6.col-md-6.col-12.mb-4
            .bg11.p-4
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima21.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-0 #[b Presupuesto:] se puede determinar la inversión total o asignar un gasto máximo por día.

    p.mb-4 Para la definición del costo de la campaña se pueden también tener en cuenta otros datos avanzados:
    
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-12.col-sm-12
        .row.justify-content-center.align-items-center  
          .col-lg-4.col-sm-12.mb-3
            .bg2.p-3
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.d-none.d-lg-block(src='@/assets/curso/tema4/ima22.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-1.my-2 #[b Objetivo:] aplicando esta opción el sistema determina qué es lo ideal para el cobro: Costo Por Mil (CPM) o Costo Por Clic (CPC).
          .col-lg-4.col-sm-12.mb-3
            .bg2.p-3
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima23.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-3.my-3 #[b Clics:] CPC, es decir, que se paga por los clics que realicen los usuarios en el anuncio.
          .col-lg-4.col-sm-12.mb-3
            .bg2.p-3
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima24.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-3.my-3 #[b Impresiones:] CPM, es decir, se cuantifica en función de cada mil impactos.

    .d-flex.mb-4  
      h3.title-card-acento-contenido Características
      h3.title-card-comp &nbsp;de los anuncios en Facebook
    
    p.mb-5 Facebook con el fin de mejorar el rendimiento de la publicidad en su plataforma, tiene algunas reglas o restricciones para el desarrollo de los anuncios:
    

    .row.justify-content-center.mb-0
      .col-lg-3.col-12.col-md-6.mb-3
        .tarjeta-avatar.sin
          .bg155.p-4.h-100.p-5
            .row.justify-content-center.align-items-center
              .col-lg-12
                .cajam.mb-4.p-1.my-4
                  h4.text-center.text-white.mb-0 20 % máximo de texto
              p.text-center En los anuncios de Facebook deben predominar las imágenes, por ello el texto no debe ocupar más del 20 % del total.
            
      .col-lg-3.col-12.col-md-6.mb-3
        .tarjeta-avatar.sin
          .bg155.p-4.h-100.p-5
            .row.justify-content-center.align-items-center
              .col-lg-12
                .cajam.mb-4.p-1.my-4
                  h4.text-center.text-white.mb-0 Mención correcta de la red social
            p.text-center La palabra Facebook debe escribirse correctamente con la F en mayúscula y no utilizar el logo.

      .col-lg-3.col-12.col-md-6.mb-3
        .tarjeta-avatar.sin
          .bg155.p-4.h-100.p-5
            .row.justify-content-center.align-items-center
              .col-lg-12
                .cajam.mb-4.p-1.my-4
                  h4.text-center.text-white.mb-0 Contenido 
            p.text-center Facebook limita el uso de desnudos e imágenes que puedan lastimar la sensibilidad de los usuarios.

      .col-lg-3.col-12.col-md-6.mb-3
        .tarjeta-avatar.sin
          .bg155.p-4.h-100.p-5
            .row.justify-content-center.align-items-center
              .col-lg-12
                .cajam.mb-4.p-1.my-4
                  h4.text-center.text-white.mb-0 Productos
            p.text-center De acuerdo con las normas de publicidad de cualquier medio, en Facebook no se pueden promocionar cigarrillos de ningún tipo, productos ilegales, medicamentos o armas, tampoco los relacionados con alcohol, servicios sexuales, apuestas o loterías. 



    p.mb-4 A través de la plataforma de Facebook Ads se realizan también los anuncios y campañas para Instagram, con características similares; es importante que cuando se manejan ambas cuentas el desarrollo de las campañas se haga integrándose para tener un mejor alcance, teniendo en cuenta claro está, el segmento de mercado. 
    
    .row.align-items-center.justify-content-center
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema4/ima11.svg")
            .col-lg-8.col-md-12.col-12
              h4.mb-3.text-white #[b Recomendado]
              p.mb-3 En el siguiente enlace se puede realizar la edición y configuración de las campañas, teniendo en cuenta que debe tener una cuenta en Facebook Manager para ello.
            .col-lg-2
              a.boton.color-acento-botones(href="http://www.facebook.com/ads/manage/powereditor" target="_blank")
                span Enlace
                i.fas.fa-link

    separador
    #t_4_3.titulo-segundo
      .h2 4.3 Google Adwords
    
    p.mb-5.ava Es la plataforma publicitaria digital más grande del mundo y es administrada por Google, el motor de búsqueda más utilizado a nivel mundial y el sitio #[em web] más visitado diariamente. Esta plataforma publicitaria está conformada por dos redes principales:

    .row.justify-content-center
      .col-lg-5.col-12.my-3.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/ima27.svg',alt='tema2')
          div.bg15.p-4.h-100.p-5
            .row.justify-content-center.my-5
              .col-lg-12
                h4.mb-2.my-5 #[b 1. Red de búsqueda:]
                p.mb-0 está conformada por los resultados de búsqueda que se hacen en Google y etiquetados con la palabra “Anuncio”. Esta red permite aparecer en posiciones destacadas cuando un usuario realiza una búsqueda semejante con el objeto de la búsqueda; es decir, con palabras claves relacionadas. 
          
      .col-lg-5.col-sm-12.my-3.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/ima28.svg',alt='tema2')
          div.bg15.p-4.h-100.p-5
            .row.justify-content-center.my-5
              .col-lg-12
                h4.mb-2.my-5 #[b 2. Red #[em display]:] 
                p.mb-0 está conformada por todos los portales y sitios asociados a Google a través de Adsense o en sitios que pertenecen a Google como Gmail o YouTube. Esta red permite llegar a un gran número de personas y generar un alto posicionamiento de marca. 
            
    .d-flex.mb-4  
      h3.title-card-acento-contenido Funcionamiento 
    
    p.mb-5 De la misma forma que Facebook, Google permite llegar a segmentos muy específicos de la población, estos deben estar previamente caracterizados para realizar de la forma más eficientemente posible el desarrollo de las estrategias de comunicación.
    
    SlyderF(columnas="col-lg-6 col-xl-4 col-md-6")(data-aos="zoom-in-left").mb-5
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima30.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Geografía:] determina la zona geográfica donde se van a mostrar los anuncios publicitarios; se puede llegar estratégicamente a un país, departamento, ciudad o zona circundante, dependiendo obviamente de la capacidad de cobertura que tenga la empresa.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima31.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Visibilidad:] esta característica de los anuncios de Google permite llegar únicamente a las personas que realizan búsquedas relacionadas con la empresa o producto que se está anunciando y discriminando palabras que no son del interés de la empresa; por ejemplo, si la empresa que anuncia es una escuela de artes, tal vez le interese llegar a quienes buscan “cursos de artes” pero tal vez no le interese llegar a quienes buscan “cursos de artes escénicas”. De ahí la importancia de hacer una correcta selección de las palabras claves.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima32.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Presupuesto:] algo positivo ha dejado la publicidad digital, es la posibilidad de que casi cualquier empresa, independiente del presupuesto que maneje puede acceder a estrategia de publicidad en Google Adwords. Adicional, Google limitó la cantidad de anuncios que una empresa podía publicitar a 1, de esta forma se hizo equitativo el modo de promocionarse independiente del presupuesto que se tenga.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima33.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Edición de anuncios:] una de las grandes ventajas que tiene esta plataforma y en general la publicidad digital, es la posibilidad de hacer correcciones a los anuncios, pausar las campañas y las palabras claves cuando se considere necesario.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima34.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Pago por clic:] como ya se explicó en Facebook Ads, el Pago Por Clic también implementado por Google consiste en pagar únicamente cuando un usuario hace clic sobre el anuncio.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima35.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Subasta:] esta es una metodología que consiste en que la empresa que está dispuesta a gastar un presupuesto mayor que el de las demás, es quien pone su anuncio en un espacio determinado, esta decisión debe tomarse con base en el CPC máximo que la empresa está dispuesta a pagar por poner un anuncio en la red. La puja se realiza en segundos y se toma la decisión de forma rápida.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima36.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Programación:] cada campaña se puede programar en días y horas específicas, dependiendo del tipo de producto o servicio y del mercado objetivo al que se dirige la campaña.
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima37.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[b Características demográficas:] de la misma forma que otras plataformas de publicidad digital, en Google es posible también segmentar el mercado por edad, sexo o ingreso familiar.
    
    .d-flex.mb-4  
      h3.title-card-acento-contenido #[em Adwords express]
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-1
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima38.svg', alt='Infografías', style="width:86px;")
      .col-lg-11.col-sm-12
        p.mb-0 Es una versión automatizada de Google Adwords, esta se utiliza cuando no se cuenta con un sitio #[em web] y se requiere realizar el proceso de forma más sencilla, en esta plataforma solo se pueden realizar actividades básicas como crear un anuncio #[em online], establecer un presupuesto, elegir una categoría de empresa y seleccionar frases de búsqueda relacionadas con el negocio.

    .d-flex.mb-4  
      h3.title-card-acento-contenido Selección 
      h3.title-card-comp &nbsp;de palabras claves
    
    p.mb-4 La selección de las palabras claves es un elemento de gran importancia en el desarrollo de una campaña, para cada producto o servicio es necesario seleccionar palabras que concuerden y sean eficaces en el proceso de búsqueda, encontrando:
    
    TabsC.color-primario.mb-5
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia amplia")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema4/ima39.svg', alt='')
          .col-lg-6.col-md-12.my-5
            h4.mb-4 Concordancia amplia:
            p en este punto Google escogerá cualquier palabra de la frase que se haya creado para mostrar anuncios con búsquedas que incluyan una de esas palabras. Esta acción puede generar errores en el desarrollo de las campañas porque la búsqueda se hace más general. Por ejemplo, si las palabras claves son “curso arte” Google activa anuncios con: curso de…, galería de arte, venta de arte, arte decorativo, etc.
                
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia de frase")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema4/ima40.svg', alt='')
          .col-lg-6.col-md-12.my-5
            h4.mb-4 Concordancia de frase:
            p en este caso Google mostrará anuncios que contengan la frase o variaciones ligeras de esta. Con esta concordancia de frase se tiene un control superior sobre las búsquedas que pueden activar los anuncios de la empresa. Por ejemplo, la frase “curso arte”, esta frase activará anuncios con búsquedas como curso de arte, cursos de arte, cursos de arte #[em online], cursos gratis de arte, etc.
            
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia exacta")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema4/ima41.svg', alt='')
          .col-lg-6.col-md-12.my-5
            h4.mb-4 Concordancia exacta:
            p este tipo de concordancia activará los anuncios con búsquedas que tengan la palabra exacta o variaciones de ella. De esta forma se tiene control absoluto de los anuncios, es la mejor alternativa en una campaña de Adwords.
            
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia negativa")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-9.my-3
            img.img-a.img-t(src='@/assets/curso/tema4/ima42.svg', alt='')
          .col-lg-6.col-md-12.my-5
            h4.mb-4 Concordancia negativa:
            p con este tipo de concordancia lo que se busca es restringir frases que no se desea que activen los anuncios de la empresa.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema4/ima11.svg")
            .col-lg-8.col-md-12.col-12
              h4.mb-3.text-white #[b Recomendado]
              p.mb-3 En el siguiente enlace se puede hacer una planeación previa de las #[b palabras claves] que se pueden utilizar en una campaña de AdWords.
            .col-lg-2
              a.boton.color-acento-botones(href="https://ads.google.com/home/" target="_blank")
                span Enlace
                i.fas.fa-link
                
    .d-flex.mb-4  
      h3.title-card-acento-contenido Características 
      h3.title-card-comp &nbsp;de los anuncios en Google Adwords
    
    p.mb-4 En Google han identificado elementos claves para el desarrollo de anuncios efectivos; entre mejor esté diseñado el anuncio más alcance e impacto va a generar en el mercado objetivo.
    
    
    .bg_img_01
      .row.justify-content-center.mb-4
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .row.justify-content.align-items-center(data-aos="zoom-in-left")
              .col-lg-4.col-md-3.col-4.mb-4
                img.img-a.img-t(alt="" src="@/assets/curso/tema4/1.svg")
              .row.justify-content-center(data-aos="zoom-in-left")
                .col-lg-12.col-md-12.col-12
                  p.mb-0 #[b Mensaje directo y claro:] el mensaje debe ser lo más comprensible posible, los anuncios que se promocionan a través de la red de Google son de visualización rápida por lo que es recomendable ser directos, adicional es importante recordar que estos deben direccionar a una #[em landing page.]
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .row.justify-content.align-items-center(data-aos="zoom-in-left")
              .col-lg-4.col-md-3.col-4.mb-4
                img.img-a.img-t(alt="" src="@/assets/curso/tema4/2.svg")
              .row.justify-content-center(data-aos="zoom-in-left")
                .col-lg-12.col-md-12.col-12
                  p.mb-0 #[b Uso de palabras claves #[em (keywords)]] éstas deben estar incluidas en el título y en los cuerpos de texto descriptivos.      
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .row.justify-content.align-items-center(data-aos="zoom-in-left")
              .col-lg-4.col-md-3.col-4.mb-4
                img.img-a.img-t(alt="" src="@/assets/curso/tema4/3.svg")
              .row.justify-content-center(data-aos="zoom-in-left")
                .col-lg-12.col-md-12.col-12
                  p.mb-0 #[b Incluir un #[em Call to Action:]] los imperativos o mandatarios hacen que los clientes se motiven a hacer clic en el anuncio, por ejemplo < llama ya >, < visítanos >, etc.

      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .row.justify-content.align-items-center(data-aos="zoom-in-left")
              .col-lg-4.col-md-3.col-4.mb-4
                img.img-a.img-t(alt="" src="@/assets/curso/tema4/4.svg")
              .row.justify-content-center(data-aos="zoom-in-left")
                .col-lg-12.col-md-12.col-12
                  p.mb-0 #[b Titular:] recomendable tener máximo 25 caracteres e incluir palabras claves.
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .row.justify-content.align-items-center(data-aos="zoom-in-left")
              .col-lg-4.col-md-3.col-4.mb-4
                img.img-a.img-t(alt="" src="@/assets/curso/tema4/5.svg")
              .row.justify-content-center(data-aos="zoom-in-left")
                .col-lg-12.col-md-12.col-12
                  p.mb-0 #[b #[em Body copy:]] debe tener un máximo de 35 caracteres, ser claro en qué producto o servicio se está comercializando y contener un #[em Call to Action.]
        .col-lg-4.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .row.justify-content.align-items-center(data-aos="zoom-in-left")
              .col-lg-4.col-md-3.col-4.mb-4
                img.img-a.img-t(alt="" src="@/assets/curso/tema4/6.svg")
              .row.justify-content-center.mb-5(data-aos="zoom-in-left")
                .col-lg-12.col-md-12.col-12
                  p.mb-0 #[b URL visible:] debe tener un máximo de 35 caracteres, esta puede ser diferente a la URL real y tener una redacción creativa y llamativa, además debe incluir palabras claves.
                  .row.justify-content-center(data-aos="zoom-in-left")
                    .col-lg-12.col-md-12.col-12
                      p.mb-4

    .d-flex.mb-4  
      h3.title-card-acento-contenido Características 
      h3.title-card-comp &nbsp;de la #[em landing page]

    p.mb-4 Una #[em landing page] es la página a la que el usuario llegará una vez haga clic en el anuncio publicitado en la red de Google, también llamada página de aterrizaje. Es importante recordar que el objetivo de los anuncios de Google es generar tráfico en la página de la empresa; por ello, la #[em Landing page] debe ser atractiva y clara en cuanto a lo que se promociona:
    
    .row.justify-content-center.mb-3
      .col-lg-5.col-md-5.col-12.mb-3
        img.img-a.img-t.mb-4.mov(src='@/assets/curso/tema4/7.svg' alt='AvatarTop')
        p.mb-0 #[b Diseño simple:] un sitio #[em web] sobrio y sencillo es mejor, como dice la premisa del diseño “menos es más”.
      .col-lg-1.col-md-1.col-1.icono
        .br-cus.mb-5.my-5
      .col-lg-5.col-md-5.col-12
        img.img-a.img-t.mb-4.mov(src='@/assets/curso/tema4/9.svg' alt='AvatarTop')
        p.mb-0 #[b Titulo visible:] además debe ser directo y persuasivo, este elemento es lo primero que va a leer el usuario una vez haga clic en el anuncio.
    .row.justify-content-center
      .col-lg-5.col-md-5.col-12.mb-3
        img.img-a.img-t.mb-4.mov(src='@/assets/curso/tema4/8.svg' alt='AvatarTop')
        p.mb-0 #[b #[em Copy] claro y sencillo:] un copy debe ser de fácil lectura, la idea es usar términos sencillos para que el cliente entienda rápidamente lo que se le está ofreciendo.
      .col-lg-1.col-md-1.col-1.icono
        .br-cus.mb-5.my-5
      .col-lg-5.col-md-5.col-12.mb-3
        img.img-a.img-t.mb-4.mov(src='@/assets/curso/tema4/10.svg' alt='AvatarTop')
        p.mb-0 #[b Imágenes y elementos visuales:] la visualización de una página por parte de un usuario es siempre un escaneo inicial antes de decidir leerla o profundizar en su contenido. Los gráficos son necesarios, pero estos no deben saturar la composición de la página, cada uno debe estar bien seleccionado y tener un objetivo claro de comunicación.


    .row.justify-content-center 
      .col-lg-8.col-md-12.col-12
        .cajon.color-secundario.bgtt.p-4
          p.mb-0 Google Adwords es una excelente herramienta y alternativa para llegar al mercado de forma masiva y efectiva. #[b Google permite el desarrollo de campañas y estrategias de comunicación que representen un alto nivel de efectividad,] además es una plataforma compleja y amplia que implica para las empresas la asesoría de expertos en el área para minimizar los riesgos de las inversiones.













</template>

<script>
export default {
  name: 'Tema4',
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
