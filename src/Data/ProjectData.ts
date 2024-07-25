type projectDataProps = {
  imageP: string;
  Tecnologies: string;
  Name: string;
  Description: string;
  Url: string;
  Advertencia?: string;
};

export const projectData: projectDataProps[] = [
  {
    imageP: '/ArquitecturaBosque.png',
    Tecnologies: 'HTML + CSS',
    Name: 'Arquitectura Bosque',
    Description:
      'Construcción de casas con una variedad de modelos dependiendo de las necesidades del cliente',
    Url: 'https://arquitectura-bosque-page.vercel.app/',
  },
  {
    imageP: '/TechPro.png',
    Tecnologies: 'HTML + CSS',
    Name: 'TechPro',
    Description:
      'Venta de audífonos con diferentes modelos disponibles dependiendo de las necesidades de los consumidores',
    Url: 'https://tech-pro-page.vercel.app/',
  },
  {
    imageP: '/Delivery.png',
    Tecnologies: 'HTML + CSS',
    Name: 'Delivery Food',
    Description:
      'Búsqueda y venta de alimentos en base a los gustos de cada cliente',
    Url: 'https://delivery-page.vercel.app/',
  },
  {
    imageP: '/Podcast.png',
    Tecnologies: 'HTML + CSS',
    Name: 'Podcast FM',
    Description:
      'Publicación de podcast con diferentes planes que se adaptan a las necesidades de cada usuario',
    Url: 'https://podcast-page-two.vercel.app/',
  },
  {
    imageP: '/Airbnb.png',
    Tecnologies: 'HTML + CSS',
    Name: 'Airbnb',
    Description: 'Búsqueda de viajes a diferentes lugares turísticos del mundo',
    Url: 'https://air-travel-page.vercel.app/',
  },
  {
    imageP: '/Cafetería.png',
    Tecnologies: 'HTML + CSS',
    Name: 'Cafetería',
    Description:
      'Promoción de cafetería incluyendo el menú disponible y los horarios de atención',
    Url: 'https://cafeteria-page-two.vercel.app/',
  },
  {
    imageP: '/AdministradorP.png',
    Tecnologies: 'React JS + Tailwind Css',
    Name: 'Administrador de clientes',
    Description:
      'Administrador de registros y modificaciones de clientes en el sistema',
    Url: 'https://crm-clients-red.vercel.app/',
    Advertencia:
      'Esta aplicación podría no mostrar la información registrada debido a la consulta local de la información ',
  },
  {
    imageP: '/Drinks.png',
    Tecnologies: 'React TS + Tailwind Css + Axios',
    Name: 'Buscador de bebidas',
    Description:
      'Buscador de bebidas dependiendo de algún ingrediente o categoría',
    Url: 'https://drinks-ts.vercel.app/',
    Advertencia:
      'Esta aplicación podría no funcionar correctamente debido a la consulta externa de una API ',
  },
  {
    imageP: '/Clima.png',
    Tecnologies: 'React JS + Tailwind Css + Axios',
    Name: 'Pronostico del clima',
    Description: 'Consulta del clima en tiempo real dependiendo de cada ciudad',
    Url: 'https://weather-app-lake-alpha.vercel.app/',
    Advertencia:
      'Esta aplicación podría no funcionar correctamente debido a la consulta externa de una API ',
  },
  {
    imageP: '/Propinas.png',
    Tecnologies: 'React TS + Tailwind Css',
    Name: 'Calculadora de propinas',
    Description: 'Calcula las propinas de una lista de alimentos consumidos',
    Url: 'https://weather-app-lake-alpha.vercel.app/',
  },
  {
    imageP: '/Calorías.png',
    Tecnologies: 'React TS + Tailwind Css + LocalStorage',
    Name: 'Contador de calorías',
    Description: 'Genera el balance de calorías consumidas y quemadas',
    Url: 'https://calories-tracker-wheat.vercel.app/',
  },
  {
    imageP: '/Veterinaria.png',
    Tecnologies: 'React TS + Tailwind Css + Zustand ',
    Name: 'Administrador de veterinaria',
    Description: 'Seguimiento de pacientes de una veterinaria',
    Url: 'https://patient-administrator-tau.vercel.app/',
  },
  {
    imageP: '/Crypto.png',
    Tecnologies: 'React TS + Tailwind Css + Zustand + Axios ',
    Name: 'Cotizador de criptomonedas',
    Description: 'Cotización de criptomonedas en tiempo real',
    Url: 'https://cripto-viewer.vercel.app/',
  },
  {
    imageP: '/Guitarra.png',
    Tecnologies: 'React TS + Css ',
    Name: 'Tienda de guitarras',
    Description:
      'Elige entre una gran variedad de guitarras dependiendo de tus gustos',
    Url: 'https://guitar-store-sigma.vercel.app/',
  },
];
