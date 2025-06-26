
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Granos", descripcion: "Productos secos como arroz, fríjoles, avena, garbanzos y otros granos básicos para la alimentación diaria.", imagen: "img/cat101.jpeg" },
    "102" : { codigo: "102", nombre: "Despensa", descripcion: "Alimentos empacados como azúcar, atún, harina, cereales y otros productos esenciales para tu cocina.", imagen: "img/cat102.png"  },
    "103" : { codigo: "103", nombre: "Aseo", descripcion: "Artículos de limpieza para el hogar, como detergentes, desinfectantes, jabones y más.", imagen: "img/cat103.jpeg"  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));


// Inicialización de banners en localStorage
banners = {
    "101" : { codigo: "101", titulo: "Productos con la mejor calidad", subtitulo: "Productos para toda la familia",
        descripcion: "Los mejores productos, al mejor precio en Granero La Rebaja", 
        imagen: "img/cat103.jpeg" },
    "102" : { codigo: "102", titulo: "Todo tipos de productos para tu despensa", subtitulo: "Aquí encontraras todo lo necesario para ti y toda tu familia",
        descripcion: "Productos con los mejores estandares de calidad disponibles a un solo clic y en la puerta de tu casa", 
        imagen: "img/cat103.jpeg" },
    "103" : { codigo: "103", titulo: "Articulos de limpieza para el hogar", subtitulo: "Todo para el aseo de tu hogar a tan solo un clic",
        descripcion: "Los mejores productos de limpieza para que tu casa siempre este limpia y con un aroma agradable para ti y toda la familia", 
        imagen: "img/cat103.jpeg" },
};
localStorage.setItem("banners", JSON.stringify(banners));
