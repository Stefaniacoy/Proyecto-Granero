
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Granos", descripcion: "Productos secos como arroz, fríjoles, avena, garbanzos y otros granos básicos para la alimentación diaria.", imagen: "img/cat101.jpeg" },
    "102" : { codigo: "102", nombre: "Despensa", descripcion: "Alimentos empacados como azúcar, atún, harina, cereales y otros productos esenciales para tu cocina.", imagen: "img/cat102.png"  },
    "103" : { codigo: "103", nombre: "Aseo", descripcion: "Artículos de limpieza para el hogar, como detergentes, desinfectantes, jabones y más.", imagen: "img/cat103.jpeg"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));
