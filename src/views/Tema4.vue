<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-secundario
      .titulo-principal__numero
        span 4
      h1 Publicidad en medios digitales
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-1
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/img01.svg', alt='Infografías', style="width:86px;")
      .col-lg-11.col-sm-12
        p.mb-0 El mundo de hoy tiene un aliado indiscutible y se llama “conectividad”. Un alto porcentaje de las personas, empresas y hogares, se encuentran conectados y derivan sus operaciones a las aplicaciones, maquinaria y programas que dependen de forma casi exclusiva a la conectividad. Es indispensable entender porque la publicidad de hoy debe basar sus operaciones en los medios digitales.
    
    separador
    #t_4_1.titulo-segundo
      .h2 4.1 Estadísticas
    
    p.mb-5 Los siguientes datos estadísticos fueron extraídos de la Agencia de Marketing Digital Inbound Branch (2020):
    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12     
        .caja3.p-4
          .row.align-items-center.justify-content-center
            .col-lg-11.col-md-12.col-12
              .tarjeta.tarjeta--azul.p-3.mt-5.mb-5
                SlyderA(tipo="b").p-4
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 En Colombia la población total está conformada por 50,61 millones de personas, de las cuales el 81% está residenciada en zonas urbanizadas. 
                      p.mb-4 Curiosamente, el número de teléfonos conectados en el país, el cual es de 60.38 millones es decir el 119% del total de la población (50,61 millones).
                      p.mb-4 Por otro lado, el número de usuarios conectados a Internet es de 35 millones, es decir, el 69% de la población, la misma cantidad de personas son usuarios activos en redes sociales. 
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 1. 
                        | Uso de teléfonos móviles, redes sociales e internet
                      figure
                        img(src='@/assets/curso/tema4/img02.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 1                  
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Este análisis se realizó en usuarios comprendidos entre los 16 a 64 años: 
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Teléfono celular (cualquier tipo) 96%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Teléfonos inteligentes (Smartphone) 93%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Teléfono móvil no inteligente: 17%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Laptop u ordenador de escritorio (pc) 79%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Tablets: 42%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b TV inteligente para ver contenido en línea (como Netflix) 13%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Consola de videojuegos: 35%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Dispositivo inteligente para el hogar (Smart Home) 11%.]
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p.mb-0 #[b Relojes inteligentes: 15%.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b Dispositivos de realidad virtual: 3.1%.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 2. 
                        | Dispositivos utilizados por los colombianos
                      figure
                        img(src='@/assets/curso/tema4/img03.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 2 
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Este análisis se realizó en usuarios comprendidos entre los 16 a 64 años:
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 9 horas y 10 minutos usando Internet.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 3 horas y 45 minutos usando las redes sociales.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 3 horas y 30 minutos viendo televisión.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 1 hora y 24 minutos escuchando música a través de servicios de streaming (como Spotify).]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b 0 horas y 53 minutos usando consolas de videojuegos.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 3. 
                        | Tiempo de uso de plataformas y dispositivos
                      figure
                        img(src='@/assets/curso/tema4/img04.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 3 
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b 35 millones de personas son usuarios activos de Internet desde cualquier dispositivo tecnológico (smartphone, tablet, laptop, consola de videojuego, TV, entre otros).]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 69% de la población total de Colombia es usuaria activa de Internet.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Desde enero del 2019 a enero del 2020, el número total de usuarios de Internet ha crecido en un 2.9%, es decir, más de un millón de nuevas personas usan este servicio.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b El tiempo promedio que los usuarios de Internet pasan utilizando este servicio, desde cualquier dispositivo tecnológico, es de 9 horas y 10 minutos.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 4. 
                        | Resumen del uso de internet
                      figure
                        img(src='@/assets/curso/tema4/img05.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 4 
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12 
                      p.mb-4 Si 35 millones de colombianos acceden diariamente a la Internet, 33.39 millones lo hacen a través de sus dispositivos móviles, es decir un 95%.
                      p.mb-4 De ese 95%, un 91% de personas ingresan a la Internet a través de teléfonos inteligentes; mientras que solo un 10% lo hacen mediante teléfonos no inteligentes. 
                      p.mb-4 Por otro lado, el promedio de tiempo diario que pasan las personas usando el servicio de Internet en sus celulares es de 4 horas y 49 minutos.
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 5. 
                        | Uso de internet en dispositivos móviles
                      figure
                        img(src='@/assets/curso/tema4/img06.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 5  
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 El 69% de la población total de Colombia es usuaria activa en redes sociales, es decir, 35 millones de personas. 
                      p.mb-4 Tomando como referencia los datos de abril del 2019, para enero del 2020 el número de usuarios en redes sociales aumentó más de un 11%. En cifras absolutas, esto sería más de 3.4 millones de personas.
                      p.mb-4 Del número total de usuarios activos en redes sociales, el 98% accede a dichas plataformas a través de sus dispositivos móviles.
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 6. 
                        | Uso de las redes sociales
                      figure
                        img(src='@/assets/curso/tema4/img07.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 6 
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Este análisis se realizó en usuarios comprendidos entre los 16 a 64 años:
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 100% de los encuestados usaron una red social o app de mensajería instantánea en el último mes.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 90% afirma haber estado comprometido o haber contribuido a alguna actividad en redes sociales durante el último mes.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El tiempo promedio que las personas usan las redes sociales diariamente es de 3 horas y 45 minutos.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b La cantidad promedio de perfiles creados en redes sociales por usuario de Internet es de 9.6.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b El 63% de los usuarios encuestados utiliza las redes sociales con propósito de trabajo o negocios.]
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 7. 
                        | Comportamiento de usuarios de redes sociales
                      figure
                        img(src='@/assets/curso/tema4/img08.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 7  
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 YouTube es la plataforma social más usada por los usuarios de Internet entre 16 a 64 años (98%) Seguida de Facebook (95%) WhatsApp (93%) Instagram (77%) Messenger (73%) Twitter (55%) Pinterest (45%) y LinkedIn (37%)
                      p.mb-4 Entre las plataformas menos usadas se encuentra: Tumblr (19%) Line (18%) WeChat (17%) TikTok (16%) Twitch (15%) y Viber (14%)
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 8. 
                        | Redes sociales más utilizadas
                      figure
                        img(src='@/assets/curso/tema4/img09.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 8  
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 El número de usuarios de Facebook ubicados en Colombia que pueden ser alcanzados a través de anuncios publicitarios es de 32 millones. Esto presenta el 78% de la población activa en redes sociales mayor de 13 años. 
                      p.mb-4 El porcentaje de cambios trimestrales en los anuncios de Facebook es de 0%, es decir, no cambia. 
                      p.mb-4 Tomando como base 32 millones de personas, se tiene que el 51.5% son mujeres y el 48.5% son hombres; el informe arrojó que existen más mujeres registradas en Facebook que hombres.
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 9. 
                        | Audiencia en Facebook
                      figure
                        img(src='@/assets/curso/tema4/img101.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 9 
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Tomando como base los 32 millones de personas que son usuarios activos en Facebook:
                      ul.lista-ul
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 97.8% accede desde cualquier tipo de dispositivo móvil.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 78.7% afirma hacerlo exclusivamente desde su teléfono móvil.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 19.1% lo hace usando en conjunto su ordenador y dispositivo móvil.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-4 #[b El 2.2% afirma ingresar a la red social exclusivamente desde su computador.]      
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 10. 
                        | Dispositivos más utilizados para acceder a Facebook
                      figure
                        img(src='@/assets/curso/tema4/img102.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 10  
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 Tomando como base los 12 millones de usuarios de Instagram se tiene que:
                      ul.lista-ul.mb-4
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El número de usuarios de Instagram ubicados en Colombia que pueden ser alcanzado a través de anuncios publicitarios es de 12 millones.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 29% de la población activa en redes sociales es mayor de 13 años.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 56.4% son mujeres.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 46.3% son hombres.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b Lo que quiere decir, que existen más mujeres registradas en Instagram que hombres.]
                      p.mb-4 En conclusión, el grupo de usuarios entre los 25 y los 34 años es el que usan más estas plataformas, representando el 31.2% de la audiencia total.
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 11. 
                        | Audiencia en Instagram
                      figure
                        img(src='@/assets/curso/tema4/img103.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 11  
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-3 Tomando como 100% el número total de la audiencia de Instagram, Facebook y FB Messenger que visualiza anuncios publicitarios, se tiene que:
                      ul.lista-ul.mb-3
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 3.2% del público femenino y el 2.9% del público masculino se encuentra entre los 13 a 17 años de edad.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 12.9% de las mujeres y el 13.2% de los hombres se encuentran entre los 18 a 24 años de edad.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 15.6% de mujeres y el 15.6% de hombres se encuentra entre los 25 a 34 años de edad.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 9.1% de las mujeres y el 8.2% de los hombres se encuentran entre los 35 a 44 años.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 5.3% del público femenino y el 4.7% del público masculino se encuentra entre los 45 a 54 años.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 3.2% de las mujeres y el 2.6% de los hombres se encuentran entre 55 a 64 años.]
                        li.d-flex.mb-0 
                          i.fas.fa-circle-check
                          p.mb-0 #[b El 1.8% de las mujeres y el 1.5% de los hombres es mayor de 65 años.]
                      p.mb-3 En conclusión, el grupo de usuarios entre los 25 y los 34 años es el que usan más estas plataformas, representando el 31.2% de la audiencia total.        
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 12. 
                        | Edad y sexo de usuarios de Instagram y Facebook
                      figure
                        img(src='@/assets/curso/tema4/img104.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 12  
                  .row.justify-content-center.align-items-center
                    .col-lg-7.col-sm-12
                      p.mb-4 El número de usuarios de X ubicados en Colombia que pueden ser alcanzados a través de anuncios publicitarios es de 3.2 millones. Esto representa el 7.8% de la población activa en redes sociales mayor de 13 años.
                      p.mb-4 El porcentaje de cambios trimestrales en los anuncios de X es más del 1.6%.
                      p.mb-4 Tomando como base esas 3.2 millones de personas, se tiene que el 37.1% son mujeres y el 62.9% son hombres, es decir, hay más hombres registrados en X que las mujeres.
                    .col-lg-5.col-sm-12
                      .titulo-sexto.color-secundario
                        h5 Figura 13. 
                        | Audiencia en X
                      figure
                        img(src='@/assets/curso/tema4/img105.svg', alt='La figura presenta diagrama con el proceso de creación de valor mediante circulos empezando por conocer deseos y necesidades de los clientes, continuando con diseñar estrategias impulsadas por los clientes, elaborar progrmas de marketing que de  valor al cliente, integración  y satisfacción superiores y finalmente captar valor y obtener utilidades')
                        figcaption Nota. Ver anexo 13 
    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema4/ima11.svg")
            .col-lg-8.col-md-12.col-12
              h4.mb-0.text-white #[b Recomendado]
              p.mb-0 Si desea ver las estadísticas completas, lo puede hacer ingresando al siguiente enlace:
            .col-lg-2
              a.boton.color-acento-botones(href="https://branch.com.co/marketing-digital/estadisticas-de-la-situacion-digital-de-colombia-en-el-2019-y-2020/" target="_blank")
                span Enlace
                i.fas.fa-link

    separador
    #t_4_2.titulo-segundo
      .h2 4.2 #[em Facebook Ads]

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-9.col-md-12.col-12
        p.mb-4 Cómo ya se dijo anteriormente, Facebook es la red social más grande del mundo, con más de 1600 millones de usuarios activos diarios.
        p.mb-4 Facebook #[b permite llegar con una amplia gama de estrategias a una gran cantidad de usuarios que adicionalmente se pueden segmentar con diferentes criterios,] para el desarrollo de campañas y anuncios que permiten cumplir las metas establecidas en las estrategias de comunicación.
        p.mb-4 Además, es hoy en día una de las plataformas con mayor efectividad para el desarrollo de estrategias publicitarias, esto debido a la audiencia masiva y a un grupo de beneficios que se describen a continuación:
      .col-lg-3.col-md-9.col-9
        img.img-a.img-t(src='@/assets/curso/tema4/ima12.png', alt='Texto que describa la imagen')
    
    
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima13.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Segmentación:
        p.text-center #[em ésta es tal vez la mayor ventaja de este sistema de promoción, gracias al conocimiento profundo de la audiencia y la cantidad de información que se tiene de ella. Si se ha realizado un trabajo previo de perfilamiento del mercado desde el punto de vista demográfico y psicográfico es posible en Facebook realizar una segmentación muy precisa del mercado objetivo.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima14.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Integración: 
        p.text-center #[em además de los anuncios tipo banner, en Facebook también se pueden realizar estrategias publicitarias en los timeline de los usuarios como si fuesen publicaciones y actualizaciones permitiendo una visualización de los anuncios en la publicación general.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima15.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Viralización: 
        p.text-center #[em los anuncios que se publiquen en Facebook pueden ser compartidos por todos los usuarios que son impactados, lo que le da la posibilidad de convertirse en virales con un alcance muy alto.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima16.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Interacción: 
        p.text-center #[em cuando un anuncio es generado en el timeline, este permite la interacción con los usuarios de la red a través de las diferentes funciones: compartir, reaccionar o comentar.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima17.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
            .cajam.mb-4
              h4.text-center.text-white Análisis: 
        p.text-center #[em las estadísticas y la segmentación que genera Facebook permite la toma de decisiones con el mínimo de riesgo en el desarrollo de las estrategias de comunicación.]
    
    h4.mb-5 Tipos de campañas en Facebook

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
                p.mb-0 Como su nombre lo indica, permite generar visibilidad a una publicación realizada en el timeline, siendo la forma más sencilla y básica para realizar estrategias de comunicación en Facebook.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Promocionar una página]
                p.mb-0 con esta estrategia se busca aumentar el número de seguidores que tenga la página, esto permite subir su status y producir un mejor posicionamiento.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Atraer personas a un sitio web]
                p.mb-0 teniendo en cuenta el poder de la segmentación de Facebook, este tipo de campaña permite generar tráfico de usuarios con características muy específicas al sitio web de la empresa, se puede realizar para un sitio externo o para una página fanpage.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Aumentar conversiones en un sitio web]
                p.mb-0 este tipo de campaña está direccionada a que el usuario realice una acción específica dentro del sitio web: suscripciones, descargas, pagos, etc.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Instalación de una App]
                p.mb-0 esta campaña enlaza directamente a la tienda de Apps, el objetivo es aumentar el número de descargas, para este tipo de estrategia se puede hacer segmentación de usuarios de Smartphone.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Incrementar la interacción en una App]
                p.mb-0 este tipo de campaña se enfoca en el desarrollo de una acción dentro de la App, esta puede estar dirigida a personas con la App descargada o en quienes la tienen para que realice también la instalación.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Llegar a personas cerca al negocio]
                p.mb-0 esta campaña se basa en la geolocalización, se realiza segmentación de acuerdo a un rango de cobertura, en este punto se puede agregar un mapa para que el cliente tenga la opción de llegar.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Aumento de asistentes a un evento]
                p.mb-0 el objetivo es llevar a las personas a un evento en particular, en este tipo de campañas es importante realizar segmentación con base en la geolocalización.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Conseguir solicitudes de ofertas]
                p.mb-0 esta campaña se orienta a dar visibilidad a ofertas realizadas en anuncios anteriores con límite de tiempo o cantidad, esta campaña permite poner un botón de < Obtener oferta >. Esta campaña combinada con una segmentación con base en la geolocalización puede generar mayor efectividad.
            .row
              .col-lg-12.col-sm-12
                p.mb-4 #[b Aumentar reproducciones de un video]
                p.mb-0 los audiovisuales representan mayor efectividad en el desarrollo de una estrategia promocional, por esto este tipo de campaña es muy efectiva y su enfoque es el aumento en la visualización de un video específico.


    h4.mb-4 Segmentación de audiencias en Facebook
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
                p.mb-0.mo Esta característica permite segmentar los usuarios de acuerdo al dispositivo por el cual accede: computador, tablet o celular. Adicionalmente, permite segmentar por marcas de dispositivos, sistemas operativos y tipo de conexión.
          .row(titulo="Viajes")
            .col-sm-12.col-lg-12
                p.mb-0.mo Permite la segmentación de usuarios que utilicen aplicaciones de viajes en un periodo de tiempo determinado, la frecuencia de viaje y si lo hacen por negocios o placer.
          .row(titulo="Conexiones")
            .col-sm-12.col-lg-12
                p.mb-0.mo Permite segmentar con base en la relación de los usuarios con la fanpage, permite excluir o incluir seguidores y amigos.
      
    h4.mb-4 Costo de la campaña
    p.mb-4 Una de las grandes ventajas de Facebook es que permite adaptarse a la capacidad económica del anunciante, en este punto se pueden seleccionar algunas variables para determinar el presupuesto: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-sm-12
        .row.justify-content-center.align-items-center  
          .col-lg-6.col-sm-12.mb-4
            .bg11.p-4
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima20.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-0 #[b Periodo de circulación:] determina el tiempo que va a estar la campaña al aire.
          .col-lg-6.col-sm-12.mb-4
            .bg11.p-4
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima21.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-0 #[b Presupuesto:] se puede determinar la inversión total o asignar un gasto máximo por día.

    p.mb-4 Para la definición del costo de la campaña se pueden también tener en cuenta otros datos avanzados:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.col-sm-12
        .row.justify-content-center.align-items-center  
          .col-lg-4.col-sm-12.mb-4
            .bg2.p-4
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima22.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-0 #[b Objetivo:] aplicando esta opción el sistema determina qué es lo ideal para el cobro: Costo Por Mil (CPM) o Costo Por Clic (CPC)
          .col-lg-4.col-sm-12.mb-4
            .bg2.p-4
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima23.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-0 #[b Clics:] CPC, es decir, que se paga por los clics que realicen los usuarios en el anuncio.
          .col-lg-4.col-sm-12.mb-4
            .bg2.p-4
              .row.justify-content-center.align-items-center  
                .col-lg-3
                  img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima24.svg' alt='AvatarTop')
                .col-lg-9.col-sm-12
                  p.mb-0 #[b Impresiones:] CPM, es decir, se cuantifica en función de cada mil impactos

    h4.mb-4 Características de los anuncios en Facebook
    p.mb-5 Facebook con el fin de mejorar el rendimiento de la publicidad en su plataforma, tiene algunas reglas o restricciones para el desarrollo de los anuncios:
    
      
    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-3.col-sm-10  
        .bg3.p-4
          .col-lg-12
            .cajam.mb-4
              h4.text-center.text-white 20% máximo de texto: 
          p.text-center en los anuncios de Facebook deben predominar las imágenes, por ello el texto no debe ocupar más del 20% del total. En el siguiente enlace se puede medir esta proporción: 
          a.anexo.mb-4.mb-lg-0(href="https://www.facebook.com/ads/tools/text_overlay" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Enlace web. https://www.facebook.com/ads/tools/text_overlay
      .col-lg-3.col-sm-10  
        .tarjeta.color-secundari.bg3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-8
              .cajam.mb-4
                h4.text-center.text-white Mención correcta de la red social: 
          p.text-center la palabra Facebook debe escribirse correctamente con la F en mayúscula y no utilizar el logo.
      .col-lg-3.col-sm-10  
        .tarjeta.color-secundari.bg3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-8
              .cajam.mb-4
                h4.text-center.text-white Contenido: 
          p.text-center Facebook limita el uso de desnudos e imágenes que puedan lastimar la sensibilidad de los usuarios.
      .col-lg-3.col-sm-10  
        .tarjeta.color-secundari.bg3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-8
              .cajam.mb-4
                h4.text-center.text-white Productos: 
          p.text-center de acuerdo con las normas de publicidad de cualquier medio, en Facebook no se pueden promocionar cigarrillos de ningún tipo, productos ilegales, medicamentos o armas, tampoco los relacionados con alcohol, servicios sexuales, apuestas o loterías. 

    
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12.col-md-12.col-12
        .caja1.p-4
          .row.align-items-center.justify-content-center
            .col-lg-2
              img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/tema4/ima11.svg")
            .col-lg-8.col-md-12.col-12
              h4.mb-0.text-white #[b Recomendado]
              p.mb-0 en el siguiente enlace se puede realizar la edición y configuración de las campañas, teniendo en cuenta que debe tener una cuenta en Facebook Manager para ello.
            .col-lg-2
              a.boton.color-acento-botones(href="http://www.facebook.com/ads/manage/powereditor" target="_blank")
                span Enlace
                i.fas.fa-link

    separador
    #t_4_3.titulo-segundo
      .h2 4.3 Google Adwords
    
    p.mb-5 Es la plataforma publicitaria digital más grande del mundo y es administrada por Google, el motor de búsqueda más utilizado a nivel mundial y el sitio web más visitado diariamente. Esta plataforma publicitaria está conformada por dos redes principales:

    .row.justify-content-center.mb-0
      .col-lg-5.col-sm-12.my-3.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/ima27.svg',alt='tema2')
          div.bg15.p-4.h-100.p-5
            p.mb-2.my-5 #[b 1. Red de búsqueda:]
            p.mb-0 está conformada por los resultados de búsqueda que se hacen en Google y etiquetados con la palabra “Anuncio”. Esta red permite aparecer en posiciones destacadas cuando un usuario realiza una búsqueda semejante con el objeto de la búsqueda; es decir, con palabras claves relacionadas. 
          
      .col-lg-5.col-sm-12.my-3.mb-5
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/ima28.svg',alt='tema2')
          div.bg15.p-4.h-100.p-5
            p.mb-2.my-5 #[b 2. Red display:] 
            p.mb-0 está conformada por todos los portales y sitios asociados a Google a través de Adsense o en sitios que pertenecen a Google como Gmail o YouTube. Esta red permite llegar a un gran número de personas y generar un alto posicionamiento de marca. 
            
    h4.mb-5 Funcionamiento 
    p.mb-5 De la misma forma que Facebook, Google permite llegar a segmentos muy específicos de la población, estos deben estar previamente caracterizados para realizar de la forma más eficientemente posible el desarrollo de las estrategias de comunicación.
    
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in-left").mb-5
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima30.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Geografía:] determina la zona geográfica donde se van a mostrar los anuncios publicitarios; se puede llegar estratégicamente a un país, departamento, ciudad o zona circundante, dependiendo obviamente de la capacidad de cobertura que tenga la empresa.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima31.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Visibilidad:] esta característica de los anuncios de Google permite llegar únicamente a las personas que realizan búsquedas relacionadas con la empresa o producto que se está anunciando y discriminando palabras que no son del interés de la empresa; por ejemplo, si la empresa que anuncia es una escuela de artes, tal vez le interese llegar a quienes buscan “cursos de artes” pero tal vez no le interese llegar a quienes buscan “cursos de artes escénicas”. De ahí la importancia de hacer una correcta selección de las palabras claves.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima32.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Presupuesto:] algo positivo ha dejado la publicidad digital, es la posibilidad de que casi cualquier empresa, independiente del presupuesto que maneje puede acceder a estrategia de publicidad en Google Adwords. Adicional, Google limitó la cantidad de anuncios que una empresa podía publicitar a 1, de esta forma se hizo equitativo el modo de promocionarse independiente del presupuesto que se tenga.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima33.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Edición de anuncios:] una de las grandes ventajas que tiene esta plataforma y en general la publicidad digital, es la posibilidad de hacer correcciones a los anuncios, pausar las campañas y las palabras claves cuando se considere necesario.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima34.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Pago por clic:] como ya se explicó en Facebook Ads, el Pago Por Clic también implementado por Google consiste en pagar únicamente cuando un usuario hace clic sobre el anuncio.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima35.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Subasta:] esta es una metodología que consiste en que la empresa que está dispuesta a gastar un presupuesto mayor que el de las demás, es quien pone su anuncio en un espacio determinado, esta decisión debe tomarse con base en el CPC máximo que la empresa está dispuesta a pagar por poner un anuncio en la red. La puja se realiza en segundos y se toma la decisión de forma rápida.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima36.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Programación:] cada campaña se puede programar en días y horas específicas, dependiendo del tipo de producto o servicio y del mercado objetivo al que se dirige la campaña.]
      .tarjeta.color-secundari.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-4(src='@/assets/curso/tema4/ima37.svg' alt='AvatarTop')
        .row.justify-content-center.align-items-center
          .col-lg-8
        p.text-center #[em #[b Características demográficas:] de la misma forma que otras plataformas de publicidad digital, en Google es posible también segmentar el mercado por edad, sexo o ingreso familiar.]

    .h3.mb-4 Adwords express
    
    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-1
        img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema4/ima38.svg', alt='Infografías', style="width:86px;")
      .col-lg-11.col-sm-12
        p.mb-0 Es una versión automatizada de Google Adwords, esta se utiliza cuando no se cuenta con un sitio web y se requiere realizar el proceso de forma más sencilla, en esta plataforma solo se pueden realizar actividades básicas como crear un anuncio online, establecer un presupuesto, elegir una categoría de empresa y seleccionar frases de búsqueda relacionadas con el negocio.

    .h3.mb-4 Selección de palabras claves
    
    TabsC.color-primario.mb-5
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia amplia")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema4/ima39.svg', alt='')
          .col-lg-6.col-md-12.my-5
            h4.mb-4 Concordancia amplia:
            p en este punto Google escogerá cualquier palabra de la frase que se haya creado para mostrar anuncios con búsquedas que incluyan una de esas palabras. Esta acción puede generar errores en el desarrollo de las campañas porque la búsqueda se hace más general. Por ejemplo, si las palabras claves son “curso arte” Google activa anuncios con: curso de…, galería de arte, venta de arte, arte decorativo, etc.
                
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia de frase")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema4/ima40.svg', alt='')
          .col-lg-6.col-md-12.my-5
            h4.mb-4 Concordancia de frase:
            p en este caso Google mostrará anuncios que contengan la frase o variaciones ligeras de esta. Con esta concordancia de frase se tiene un control superior sobre las búsquedas que pueden activar los anuncios de la empresa. Por ejemplo, la frase “curso arte”, esta frase activará anuncios con búsquedas como curso de arte, cursos de arte, cursos de arte online, cursos gratis de arte, etc.
            
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia exacta")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-12.my-3
            img.img-a.img-t(src='@/assets/curso/tema4/ima41.svg', alt='')
          .col-lg-6.col-md-12.my-5
            h4.mb-4 Concordancia exacta:
            p este tipo de concordancia activará los anuncios con búsquedas que tengan la palabra exacta o variaciones de ella. De esta forma se tiene control absoluto de los anuncios, es la mejor alternativa en una campaña de Adwords.
            
      .py-3.py-md-4.bg26.px-3(titulo="Concordancia negativa")
        .row.justify-content-center.p-4
          .col-lg-6.col-md-12.my-3
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
              h4.mb-0.text-white #[b Recomendado]
              p.mb-0 En el siguiente enlace se puede hacer una planeación previa de las palabras claves que se pueden utilizar en una campaña de AdWords.
            .col-lg-2
              a.boton.color-acento-botones(href="http://www.facebook.com/ads/manage/powereditor" target="_blank")
                span Enlace
                i.fas.fa-link






















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
      a(href='https://ads.google.com/home/' target="_blank")  https://ads.google.com/home/

    .tarjeta.p-4.p-md-5.mb-5(style="background-color: #d2e1f17d; border-radius: 0;")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/tema4/img2.svg", alt="Características de los anuncios en Google Adwords", style="width:300px;").mx-auto
        .col-md.col-lg-6
          .titulo-segundo.mb-4
            h3 Características de los anuncios en Google Adwords
          p.mb-4 En Google han identificado elementos claves para el desarrollo de anuncios efectivos; entre mejor esté diseñado el anuncio más alcance e impacto va a generar en el mercado objetivo.
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Infografia Características de los anuncios en Google Adwords.pdf')" target="_blank" type="application/pdf")
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
