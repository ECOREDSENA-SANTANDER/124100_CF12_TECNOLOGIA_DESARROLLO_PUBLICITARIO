export default {
  global: {
    componenteFormativo: 'Diseño de contenidos digitales',
    descripcionCurso:
      'Los contenidos digitales permiten hoy en día a la mayoría de profesionales mostrar sus opiniones, resultados de sus investigaciones o datos recibidos de primera mano a sus seguidores, amigos y colegas, esto permite que haya globalización y democratización de la información; es decir, que el acceso a esta sea para todas las personas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      /*{
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contenidos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inbound marketing',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿En qué consiste el inbound marketing?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Etapas del inbound marketing',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Medios digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Publicidad en medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estadísticas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Facebook Ads',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Google Adwords',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Diseño de contenidos para Instagram',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Post',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Stories',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Gif',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Diseño de contenidos para Facebook',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Imagen de perfilPost',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Portada',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Post',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Diseño de contenidos para Twitter',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Gif con ilustración',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Cabecera',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Post',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ahlgren. M. (2020). 35 + Estadísticas y Datos de Facebook para 2020.',
      link: 'https://www.websitehostingrating.com/es/facebook-statistics/',
    },
    {
      referencia:
        'Branch. (2020). Estadísticas de la Situación Digital de Colombia en el 2019 y 2020.',
      link:
        'https://branch.com.co/marketing-digital/estadisticas-de-la-situacion-digital-de-colombia-en-el-2019-y-2020/',
    },
    {
      referencia:
        'Cibrián, I. (2018). Marketing Digital, Mide, Analiza y Mejora. ESIC Editorial.',
    },
    {
      referencia:
        'Gutiérrez, C. (2010). Creatividad Publicitaria Eficaz. Studio Divine Egg.',
    },
    {
      referencia:
        'Labarta, F. (2014). Guía Para Crear Mensajes y Contenidos. Economía y Empresa.',
    },
    {
      referencia: 'Medina, A. (2015). Introducción a la Publicidad. Pirámide.',
    },
    {
      referencia:
        'Ortiz, R. (2008). Qué es la Abstracción en el Diseño Gráfico y Cuántas Formas Existen.',
      link: 'https://www.roc21.com/2008/05/24/abstraccion/',
    },
    {
      referencia:
        'Sabbagh, A. (2012). Método De La Innovación Creativa. Granica.',
    },
    {
      referencia:
        'Sainz, J. M. (2018). El Plan de Marketing Digital en la Práctica. Editorial ESIC.',
    },
    {
      referencia:
        'Unitcoms. (s.f.). Cómo Usar Google Adwords: Guía Paso a Paso.',
      link: 'https://www.initcoms.com/que-es-google-adwords/ ',
    },
    {
      referencia: 'Vega. E. (s.f.). Definición y Orígenes del Audiovisual.',
      link: 'http://www.eugeniovega.es/asignaturas/audio/01.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Audiovisual',
      significado:
        '“significa la integración e interrelación plena entre lo auditivo y lo visual para producir una nueva realidad o lenguaje. La percepción es simultánea. Se crean así nuevas realidades sensoriales mediante mecanismos como la armonía, complementaria, refuerzo y contraste” (Vega, s.f.).',
    },
    {
      termino: 'Efecto lomográfico',
      significado:
        'es un efecto que se da a través de las cámaras fotográficas, con el fin de crear fotografías artísticas experimentales, las cuales no se caracterizan por su calidad técnica sino por aspecto emotivo. En síntesis, es un efecto de alto contraste que hacían algunas cámaras antiguas y ahora se replica con filtros.',
    },
    {
      termino: 'Facebook',
      significado:
        'es una compañía de origen estadounidense que ofrece servicios de redes sociales y medios sociales en línea con sede en Menlo Park, California.',
    },
    {
      termino: 'Gif',
      significado:
        'la palabra Gif es una sigla que significa Graphics Interchange Format o en español, Formato de Intercambio de Gráficos. Este formato de imagen fue creado en 1987 por Steve Wilhite en Compuserve, una compañía de comunicaciones norteamericana. El archivo Gif es la mínima expresión o recurso gráfico en relación con su peso que permite crear una animación para realizar un anuncio, lanzar un mensaje o contar una pequeña historia. El archivo Gif está limitado a mostrar su contenido en solo 256 colores, lo cual equivale a una profundidad de color de 8 bits.',
    },
    {
      termino: 'Instagram',
      significado:
        'es una aplicación y red social de origen estadounidense, propiedad de Facebook, cuya función principal es poder compartir fotografías y vídeos con otros usuarios. Está disponible para dispositivos Android, iOS y Windows 10. Creada por Kevin Systrom y Mike Krieger, Instagram fue lanzada en octubre de 2010.',
    },
    {
      termino: 'Paleta de colores',
      significado:
        'es una de las herramientas de diseño gráfico elementales, ya que se utiliza para crear combinaciones de colores que trabajen bien juntos.',
    },
    {
      termino: 'Pixel',
      significado:
        'es la unidad básica de una imagen digitalizada en pantalla. En otras palabras, son los puntos de color que conforman una imagen, mediante la constitución de una matriz de pixeles sucesivos.',
    },
    {
      termino: 'Twitter',
      significado:
        'es un servicio de microblogueo, con sede en San Francisco, California, EE. UU., con filiales en San Antonio y Boston en Estados Unidos. Twitter, Inc. fue creado originalmente en California, pero está bajo la jurisdicción de Delaware desde 2007. ',
    },
  ],
  complementario: [
    {
      texto:
        'Branch. (2020). Estadísticas de la situación digital de Colombia en el 2019 y 2020',
      tipo: 'Página web',
      link:
        'https://branch.com.co/marketing-digital/estadisticas-de-la-situacion-digital-de-colombia-en-el-2019-y-2020/',
    },
    {
      texto: 'Facebook. (2020). Anuncios de Facebook.',
      tipo: 'Página web',
      link: 'https://www.facebook.com/ads/tools/text_overlay',
    },
    {
      texto: 'Facebook. (2020). Edición y configuración de campañas.',
      tipo: 'Pagina web',
      link: 'http://www.facebook.com/ads/manage/powereditor',
    },
    {
      texto:
        'Google. (2020). planeación previa de las palabras claves que se pueden utilizar en una campaña de Adwords.',
      tipo: 'Página web',
      link: 'https://ads.google.com/home/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Manuel Augusto Arias López',
        cargo: 'Instructor – Experto temático',
        centro: 'Centro de Comercio y Servicios – Regional Quindío',
      },
      {
        nombre: 'Andrea Velásquez Torres',
        cargo: 'Apoyo Experto temático',
        centro: 'Centro de Comercio y Servicios – Regional Quindío',
      },
      {
        nombre: 'Vilma Perilla Méndez',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlvea',
        cargo: 'Edición y corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Tinoco Torres'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
