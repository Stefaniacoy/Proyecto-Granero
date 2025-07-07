
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Granos", descripcion: "Productos secos como arroz, fríjoles, avena, garbanzos y otros granos básicos para la alimentación diaria.", imagen: "img/granero12.jpg" },
    "102" : { codigo: "102", nombre: "Despensa", descripcion: "Alimentos empacados como azúcar, atún, harina, cereales y otros productos esenciales para tu cocina.", imagen: "img/granero13.png"  },
    "103" : { codigo: "103", nombre: "Aseo", descripcion: "Artículos de limpieza para el hogar, como detergentes, desinfectantes, jabones, ambientadores, utensilios y más.", imagen: "img/granero14.png"  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));


// Inicialización de banners en localStorage
banners = {
    "101" : { codigo: "101", titulo: "Productos con la mejor calidad", subtitulo: "Productos para toda la familia",
        descripcion: "Los mejores productos, al mejor precio en Granero La Rebaja", 
        imagen: "img/granero15.png" },
    "102" : { codigo: "102", titulo: "Todo tipo de productos para tu despensa", subtitulo: "Aquí encontraras todo lo necesario para ti y toda tu familia",
        descripcion: "Productos con los mejores estandares de calidad disponibles a un solo clic y en la puerta de tu casa", 
        imagen: "img/granero16.png" },
    "103" : { codigo: "103", titulo: "Articulos de limpieza para el hogar", subtitulo: "Todo para el aseo de tu hogar a tan solo un clic",
        descripcion: "Los mejores productos de limpieza para que tu casa siempre este limpia y con un aroma agradable para ti y toda la familia", 
        imagen: "img/granero17.png" },
};

localStorage.setItem("banners", JSON.stringify(banners));

// Inicialización de productos en localStorage
productos = {
    "1011" : { codigo: "1011", nombre: "Arroz esmeralda", descripcion: "Nuestro arroz blanco Esmeralda Tradicional, es ideal para acompañar tus almuerzos todos los días, es un arroz sin gluten y sin colesterol que llenará a tu familia de momentos tradicionalmente deliciosos.",
              categoria: "101", imagen: "img/granero3.png", precio: 2100, contenido: "1 Libra", calificacion: 5 },
    "1012" : { codigo: "1012", nombre: "Frijol Calima", descripcion: "Los frijoles calima son una excelente fuente de proteína, fibra y hierro, lo que los convierte en un alimento ideal para una dieta equilibrada. Además, son bajos en grasa y colesterol.",
              categoria: "101", imagen: "img/granero4.jpg", precio: 4500, contenido: "1 Libra", calificacion: 5 },
    "1013" : { codigo: "1013", nombre: "Avena instantánea Quaker", descripcion: "La avena instantánea es un alimento saludable y nutritivo que se puede preparar rápidamente. Es rica en fibra, vitaminas y minerales, lo que la convierte en una excelente opción para el desayuno o como snack.",
              categoria: "101", imagen: "img/granero5.png", precio: 3500, contenido: "180 gramos", calificacion: 5 },
    
    "1021" : { codigo: "1021", nombre: "Azúcar morena", descripcion: "El azúcar morena es un tipo de azúcar que se obtiene a partir de la caña de azúcar o de la remolacha azucarera. Se caracteriza por su color marrón oscuro y su sabor más intenso que el azúcar blanco.",
              categoria: "102", imagen: "img/granero6.png", precio: 3100, contenido: "1 Libra", calificacion: 5 },
    "1022" : { codigo: "1022", nombre: "Atún en lata Van Camps", descripcion: "El atún en lata es un alimento muy versátil y nutritivo. Es rico en proteínas, ácidos grasos omega-3 y vitaminas del complejo B, lo que lo convierte en una excelente opción para una dieta saludable.",
              categoria: "102", imagen: "img/granero7.jpg", precio: 7500, contenido: "160 gramos", calificacion: 5 },
    "1023" : { codigo: "1023", nombre: "Harina de trigo Haz de Oros", descripcion: "La harina de trigo es un ingrediente básico en la cocina, utilizado para hacer pan, pasteles, galletas y otros productos horneados. Es rica en carbohidratos y proteínas, lo que la convierte en una excelente fuente de energía.",
              categoria: "102", imagen: "img/granero8.png", precio: 2300, contenido: "1 Libra", calificacion: 5 }, 
   
    "1031" : { codigo: "1031", nombre: "Detergente en polvo Ariel", descripcion: "El detergente en polvo Ariel es un producto de limpieza altamente efectivo que elimina manchas y suciedad de la ropa. Su fórmula avanzada penetra profundamente en las fibras de la tela, dejando la ropa limpia y fresca.",
              categoria: "103", imagen: "img/granero9.jpg", precio: 8500, contenido: "1000 gramos", calificacion: 5 },
    "1032" : { codigo: "1032", nombre: "Limpia pisos Fabuloso Violeta", descripcion: "Fabuloso es un limpiador multiusos que se utiliza para limpiar y desinfectar superficies en el hogar. Su fórmula concentrada elimina la suciedad y los gérmenes, dejando un aroma fresco y agradable en el ambiente.",
              categoria: "103", imagen: "img/granero10.jpg", precio: 4500, contenido: "500 ml", calificacion: 5 },
    "1033" : { codigo: "1033", nombre: "Jabón de tocador Lux x 3 Unidades", descripcion: "El jabón de tocador Lux es un producto de limpieza personal que se utiliza para lavar las manos y el cuerpo. Su fórmula suave y cremosa deja la piel limpia, hidratada y con un aroma fresco.",
              categoria: "103", imagen: "img/granero11.jpg", precio: 9750, contenido: "125 gramos", calificacion: 5 },
};

localStorage.setItem("productos", JSON.stringify(productos));
