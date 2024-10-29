export default {
  global: {
    componenteFormativo: 'Diseño de contenidos digitales',
    descripcionCurso:
      'Los contenidos digitales permiten hoy en día a la mayoría de profesionales mostrar sus opiniones, resultados de sus investigaciones o datos recibidos de primera mano a sus seguidores, amigos y colegas, esto permite que haya globalización y democratización de la información; es decir, que el acceso a esta sea para todas las personas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: '',
        numero: '1',
        titulo: 'Contenidos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: '',
        numero: '2',
        titulo: '<em>Inbound marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '2.1',
            titulo: '¿En qué consiste el <em>inbound marketing</em>?',
            hash: 't_2_1',
          },
          {
            icono: '',
            numero: '2.2',
            titulo: 'Etapas del <em>inbound marketing</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: '',
        numero: '3',
        titulo: 'Medios digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: '',
        numero: '4',
        titulo: 'Publicidad en medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '4.1',
            titulo: 'Estadísticas',
            hash: 't_4_1',
          },
          {
            icono: '',
            numero: '4.2',
            titulo: 'Facebook Ads',
            hash: 't_4_2',
          },
          {
            icono: '',
            numero: '4.3',
            titulo: 'Google Adwords',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: '',
        numero: '5',
        titulo: 'Diseño de contenidos para Instagram',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '5.1',
            titulo: '<em>Post</em>',
            hash: 't_5_1',
          },
          {
            icono: '',
            numero: '5.2',
            titulo: '<em>Stories</em>',
            hash: 't_5_2',
          },
          {
            icono: '',
            numero: '5.3',
            titulo: '<em>Gif</em>',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: '',
        numero: '6',
        titulo: 'Diseño de contenidos para Facebook',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '6.1',
            titulo: 'Imagen de perfil',
            hash: 't_6_1',
          },
          {
            icono: '',
            numero: '6.2',
            titulo: 'Portada',
            hash: 't_6_2',
          },
          {
            icono: '',
            numero: '6.3',
            titulo: '<em>Post</em>',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: '',
        numero: '7',
        titulo: 'Diseño de contenidos para Twitter',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: '',
            numero: '7.1',
            titulo: '<em>Gif</em> con ilustración ',
            hash: 't_7_1',
          },
          {
            icono: '',
            numero: '7.2',
            titulo: 'Cabecera',
            hash: 't_7_2',
          },
          {
            icono: '',
            numero: '7.3',
            titulo: '<em>Post</em>',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/',
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
        'Branch. (2024, abril 22). Estadísticas de la situación digital de Colombia en el 2024. Branch Agencia. ',
      link:
        'https://branch.com.co/marketing-digital/situacion-digital-de-colombia-en-el-2024/',
    },
    {
      referencia:
        'Cibrián, I. (2018). Marketing Digital, Mide, Analiza y Mejora. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, C. (2010). Creatividad Publicitaria Eficaz. Studio Divine Egg.',
      link: '',
    },
    {
      referencia:
        'Labarta, F. (2014). Guía Para Crear Mensajes y Contenidos. Economía y Empresa.',
      link: '',
    },
    {
      referencia: 'Medina, A. (2015). Introducción a la Publicidad. Pirámide.',
      link: '',
    },
    {
      referencia:
        'Ortiz, R. (2008). Qué es la Abstracción en el Diseño Gráfico y Cuántas Formas Existen. https://www.roc21.com/2008/05/24/abstraccion/',
      link: 'https://www.roc21.com/2008/05/24/abstraccion/',
    },
    {
      referencia:
        'Sabbagh, A. (2012). Método De La Innovación Creativa. Granica.',
      link: '',
    },
    {
      referencia:
        'Sainz, J. M. (2018). El Plan de Marketing Digital en la Práctica. Editorial ESIC.',
      link: '',
    },
    {
      referencia:
        'Unitcoms. (s.f.). Cómo Usar Google Adwords: Guía Paso a Paso.',
      link: 'https://www.initcoms.com/que-es-google-adwords/',
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
      termino: '<em>GIF</em>',
      significado:
        'la palabra <em>GIF</em> es una sigla que significa Graphics Interchange Format o en español, Formato de Intercambio de Gráficos. Este formato de imagen fue creado en 1987 por Steve Wilhite en Compuserve, una compañía de comunicaciones norteamericana.',
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
        'es un servicio de microblogueo, con sede en San Francisco, California, EE. UU., con filiales en San Antonio y Boston en Estados Unidos. Twitter, Inc. fue creado originalmente en California, pero está bajo la jurisdicción de Delaware desde 2007.',
    },
  ],
  complementario: [
    {
      tema: 'Estadísticas',
      referencia:
        'Branch. (2024, abril 22). Estadísticas de la situación digital de Colombia en el 2024. Branch Agencia.',
      tipo: 'Página web',
      link:
        'https://branch.com.co/marketing-digital/situacion-digital-de-colombia-en-el-2024/',
    },
    {
      tema: 'Google Adwords',
      referencia:
        'Google. (2020). planeación previa de las palabras claves que se pueden utilizar en una campaña de Adwords.',
      tipo: 'Página web',
      link: 'https://ads.google.com/home/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Manuel Augusto Arias López',
          cargo: 'Instructor - experto temático ',
          centro: 'Centro de Comercio y Servicios – Regional Quindío',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
        },
        {
          nombre: 'Andrea Velásquez Torres',
          cargo: 'Apoyo experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Quindío',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Edición y corrección de estilo',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>fulls tack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
