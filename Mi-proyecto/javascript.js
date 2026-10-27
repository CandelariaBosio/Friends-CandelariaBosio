function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//JS MONICA
const recetas = [
    {
        id: 1,
        titulo: "Puré de papas de Acción de Gracias",
        tipo: "almuerzo-cena",
        dificultad: "facil",
        tiempo: "30min",
        imagen: "../imgs/puredepapas.jpg",
        ingredientes: ["1 kg de papas", "50g de manteca", "1/2 taza de leche", "Sal y pimienta a gusto"],
        preparacion: "Hervir las papas peladas hasta que estén tiernas. Salpimentar, agregar la manteca y la leche tibia, y pisar hasta lograr una textura cremosa."
    },
    {
        id: 2,
        titulo: "Galletitas de vainilla con chips de chocolate",
        tipo: "postre",
        dificultad: "intermedio",
        tiempo: "30min",
        imagen: "../imgs/Galletitas.jpg",
        ingredientes: ["200g de harina", "100g de manteca", "100g de azúcar", "1 huevo", "Esencia de vainilla", "150g de chips de chocolate"],
        preparacion: "Mezclar la manteca con el azúcar y la vainilla. Agregar el huevo, incorporar la harina y los chips. Formar bolitas y hornear a 180°C durante 12 minutos."
    },
    {
        id: 3,
        titulo: "Mermelada",
        tipo: "postre",
        dificultad: "facil",
        tiempo: "mas-1h",
        imagen: "../imgs/Mermelada.jpg",
        ingredientes: ["500g de fruta fresca", "350g de azúcar", "Jugo de 1/2 limón"],
        preparacion: "Colocar la fruta picada junto con el azúcar y el jugo de limón en una olla a fuego lento. Cocinar revolviendo frecuentemente durante 1 hora hasta espesar."
    },
    {
        id: 4,
        titulo: "Lasagna",
        tipo: "almuerzo-cena",
        dificultad: "dificil",
        tiempo: "mas-1h",
        imagen: "../imgs/Lasagna.jpg",
        ingredientes: ["Láminas de lasagna", "500g de carne picada", "Salsa de tomate", "Salsa blanca", "200g de queso mozzarella"],
        preparacion: "Cocinar la carne con la salsa de tomate. En una fuente, intercalar capas de pasta, tuco, salsa blanca y queso. Hornear a 200°C por 40 minutos."
    },
    {
        id: 5,
        titulo: "Pavo de Acción de Gracias",
        tipo: "almuerzo-cena",
        dificultad: "dificil",
        tiempo: "mas-1h",
        imagen: "../imgs/Pavo.jpg",
        ingredientes: ["1 pavo entero", "100g de manteca con hierbas", "Relleno a elección", "Caldo de verduras"],
        preparacion: "Rellenar el pavo y untar la piel con la manteca de hierbas. Hornear a fuego medio bañándolo periódicamente con el caldo durante 3 horas."
    },
    {
        id: 6,
        titulo: "Macarrones con queso",
        tipo: "almuerzo-cena",
        dificultad: "facil",
        tiempo: "30min",
        imagen: "../imgs/Macandcheese.jpg",
        ingredientes: ["300g de macarrones", "200g de queso cheddar rallado", "200ml de leche", "30g de manteca"],
        preparacion: "Hervir los macarrones. En otra olla fundir la manteca con la leche y el queso cheddar hasta lograr una salsa fluida. Mezclar con la pasta servida."
    }
];

// Función para filtrar y renderizar las recetas en el DOM
function filtrarRecetas() {
    const tipoSeleccionado = document.getElementById("filtroTipo").value;
    const dificultadSeleccionada = document.getElementById("filtroDificultad").value;
    const tiempoSeleccionado = document.getElementById("filtroTiempo").value;

    const grid = document.getElementById("gridRecetas");
    grid.innerHTML = ""; // Limpiamos la grilla antes de dibujar

    for (let i = 0; i < recetas.length; i++) {
        let receta = recetas[i];

        // Si el valor del select es "" (vacío), cumple automáticamente
        let cumpleTipo = (tipoSeleccionado === "" || receta.tipo === tipoSeleccionado);
        let cumpleDificultad = (dificultadSeleccionada === "" || receta.dificultad === dificultadSeleccionada);
        let cumpleTiempo = (tiempoSeleccionado === "" || receta.tiempo === tiempoSeleccionado);

        // Si cumple con todos los filtros activos, se dibuja en pantalla
        if (cumpleTipo && cumpleDificultad && cumpleTiempo) {
            let listaIngredientes = "";
            for (let j = 0; j < receta.ingredientes.length; j++) {
                listaIngredientes += `<li>${receta.ingredientes[j]}</li>`;
            }

            grid.innerHTML += `
                <article class="tarjeta-receta" id="tarjeta-${receta.id}">
                    <img src="${receta.imagen}" alt="${receta.titulo}">
                    <h3>${receta.titulo}</h3>
                    
                    <div class="detalle-receta" id="detalle-${receta.id}">
                        <h4>Ingredientes:</h4>
                        <ul>${listaIngredientes}</ul>
                        <h4>Preparación:</h4>
                        <p>${receta.preparacion}</p>
                    </div>

                    <button class="btn-receta" onclick="toggleReceta(${receta.id})">Ver receta</button>
                </article>
            `;
        }
    }
}

// Función para expandir o contraer la tarjeta al hacer clic en "Ver receta"
function toggleReceta(id) {
    const tarjeta = document.getElementById(`tarjeta-${id}`);
    const boton = tarjeta.querySelector('.btn-receta');

    tarjeta.classList.toggle("activa");

    if (tarjeta.classList.contains("activa")) {
        boton.innerText = "Cerrar receta";
    } else {
        boton.innerText = "Ver receta";
    }
}

// Ejecutar la función automáticamente al cargar la página para mostrar las 6 recetas de entrada
window.onload = function() {
    filtrarRecetas();
};


// JS RACHEL
// Array de objetos con los outfits de Rachel y sus cualidades ocultas
const outfits = [
    {
        id: 1,
        estacion: "primavera-verano",
        evento: "informal",
        imagen: "../imgs/informalverano4.jpg"
    },
    {
        id: 2,
        estacion: "otonio-invierno",
        evento: "formal",
        imagen: "../imgs/formalinvierno1.jpg"
    },
    {
        id: 3,
        estacion: "primavera-verano",
        evento: "formal",
        imagen: "../imgs/formalverano2.jpg"
    },
    {
        id: 4,
        estacion: "otonio-invierno",
        evento: "informal",
        imagen: "../imgs/informalinvierno2.jpg"
    },
    {
        id: 5,
        estacion: "primavera-verano",
        evento: "formal",
        imagen: "../imgs/formalverano3.jpg"
    },
    {
        id: 6,
        estacion: "otonio-invierno",
        evento: "formal",
        imagen: "../imgs/formalinvierno3.jpg"
    },
    {
        id: 7,
        estacion: "primavera-verano",
        evento: "informal",
        imagen: "../imgs/informalverano1.jpg"
    },
        {
        id: 8,
        estacion: "primavera-verano",
        evento: "informal",
        imagen: "../imgs/informalverano3.jpg"
    }
];

// Función para filtrar los outfits de Rachel
function filtrarOutfits() {
    const estacionSeleccionada = document.getElementById("filtroEstacion").value;
    const eventoSeleccionado = document.getElementById("filtroEvento").value;

    const grid = document.getElementById("gridOutfits");
    
    // Si no existe el grid en esta página (por ejemplo, estamos en Mónica), cortamos la ejecución para evitar errores
    if (!grid) return;

    grid.innerHTML = ""; // Limpiamos la grilla

    for (let i = 0; i < outfits.length; i++) {
        let outfit = outfits[i];

        // Validamos si cumple con los filtros seleccionados (si está vacío "", muestra todos)
        let cumpleEstacion = (estacionSeleccionada === "" || outfit.estacion === estacionSeleccionada);
        let cumpleEvento = (eventoSeleccionado === "" || outfit.evento === eventoSeleccionado);

        if (cumpleEstacion && cumpleEvento) {
            grid.innerHTML += `
                <article class="tarjeta-outfit">
                    <img src="${outfit.imagen}" alt="Outfit de Rachel">
                </article>
            `;
        }
    }
}

// Ejecutamos la función al cargar la página de Rachel para que se visualicen todos los outfits de entrada
window.addEventListener("load", function() {
    filtrarOutfits();
});


//* JS PHOEBE

const serviciosPhoebe = [
    {
        id: 1,
        titulo: "Masajes descontracturantes",
        descripcion: "Ideal para liberar tensiones, aflojar esos nudos que acumulas sin darte cuenta y volver a sentirte en armonía con tu cuerpo.",
        imagen: "../imgs/masajes.png"
    },
    {
        id: 2,
        titulo: "Reiki",
        descripcion: "Terapia de sanación energética que transmite energía vital universal para armonizar los chakras y restaurar el bienestar mental. Un momento para conectar con tu energía, encontrar tu centro y dejar ir todo lo que ya no te hace bien.",
        imagen: "../imgs/reiki.jpg"
    },
    {
        id: 3,
        titulo: "Aromaterapia",
        descripcion: "Aromas, esencias naturales y pequeños rituales para regalarte una pausa y reconectar con vos mismo. Se combinan aceites esenciales puros y aromas envolventes para calmar los sentidos y equilibrar las emociones.",
        imagen: "../imgs/aromaterapia.jpg"
    }
];

// Función para renderizar los servicios de Phoebe en el DOM
function cargarServiciosPhoebe() {
    const grid = document.getElementById("gridServicios");
    
    // Si no estamos en la página de Phoebe, cortamos la ejecución
    if (!grid) return;

    grid.innerHTML = "";

    for (let i = 0; i < serviciosPhoebe.length; i++) {
        let servicio = serviciosPhoebe[i];

        grid.innerHTML += `
            <article class="tarjeta-servicio">
                <img src="${servicio.imagen}" alt="${servicio.titulo}">
                <h3>${servicio.titulo}</h3>
                <p>${servicio.descripcion}</p>
                <a href="https://www.instagram.com/friends/" target="_blank" class="btn-reservar">Reservar</a>
            </article>
        `;
    }
}

// Ejecutar al cargar la página
window.addEventListener("load", function() {
    cargarServiciosPhoebe();
});


//JS CHANDLER

// Array de objetos con las frases de Chandler
const frasesChandler = [
    {
        id: 1,
        texto: "'Hola, soy Chandler. Hago chistes cuando estoy incómodo'"
    },
    {
        id: 2,
        texto: "'No soy muy bueno dando consejos… ¿te interesa un comentario sarcástico?...'"
    },
    {
        id: 3,
        texto: "'No soy bueno en las relaciones, y aparentemente, tampoco en la soltería'"
    },
    {
        id: 4,
        texto: "'No estoy exagerando. Estoy dándole a la situación la importancia dramática que claramente merece'"
    },
    {
        id: 5,
        texto: "'Me encanta mi trabajo. Especialmente esa parte en la que miro el reloj y descubro que pasaron tres minutos'"
    },
    {
        id: 6,
        texto: "'Los buenos amigos están para apoyarte. Los mejores, para recordarte tus peores decisiones durante los próximos veinte años'"
    },
];

// Función para renderizar las frases en la grilla
function cargarFrasesChandler() {
    const grid = document.getElementById("gridFrases");
    
    // Si no estamos en la página de Chandler, cortamos la ejecución
    if (!grid) return;

    grid.innerHTML = "";

    for (let i = 0; i < frasesChandler.length; i++) {
        let frase = frasesChandler[i];

        grid.innerHTML += `
            <article class="tarjeta-frase">
                <p>${frase.texto}</p>
            </article>
        `;
    }
}

// Ejecutar al cargar la página
window.addEventListener("load", function() {
    cargarFrasesChandler();
});



//JS ROSS

// Array de objetos con los artículos de la biblioteca de Ross
const articulosRoss = [
    {
        id: 1,
        titulo: "Investigaciones de misión a la Luna de Artemis II continúan en la Tierra",
        imagen: "../imgs/artemis.jpg",
        enlace: "https://ciencia.nasa.gov/sistema-solar/investigaciones-de-mision-a-la-luna-de-artemis-ii-continuan-en-la-tierra/"
    },
    {
        id: 2,
        titulo: "La paleoictiología en México",
        imagen: "../imgs/paleo.jpg",
        enlace: "https://paleontologiamexicana.geologia.unam.mx/index.php/paleontologia/article/view/30?utm"
    },
    {
        id: 3,
        titulo: "La separación conyugal: implicaciones legales y familiares",
        imagen: "../imgs/divorcio.jpg",
        enlace: "https://investigacion.upb.edu.co/es/publications/la-separaci%C3%B3n-conyugal-implicaciones-legales-y-familiares/?utm"
    },
    {
        id: 4,
        titulo: "El registro de Sauropodomorpha (Dinosauria) de la Argentina",
        imagen: "../imgs/dino.png",
        enlace: "https://peapaleontologica.org.ar/index.php/peapa/article/view/100?articlesBySameAuthorPage=2&utm"
    }
];

// Función para renderizar los artículos en la grilla
function cargarArticulosRoss() {
    const grid = document.getElementById("gridArticulos");
    
    // Si no estamos en la página de Ross, cortamos la ejecución
    if (!grid) return;

    grid.innerHTML = "";

    for (let i = 0; i < articulosRoss.length; i++) {
        let articulo = articulosRoss[i];

        grid.innerHTML += `
            <article class="tarjeta-articulo">
                <img src="${articulo.imagen}" alt="${articulo.titulo}">
                <h3>${articulo.titulo}</h3>
                <a href="${articulo.enlace}" target="_blank" class="btn-leer">Leer</a>
            </article>
        `;
    }
}

// Ejecutar al cargar la página
window.addEventListener("load", function() {
    cargarArticulosRoss();
});

//JS JOEY

// Array de objetos con las series y películas favoritas de Joey
const seriesJoey = [
    {
        id: 1,
        nombre: "Baywatch",
        imagen: "../imgs/baywatch.jpg",
        enlace: "https://www.primevideo.com/-/es/detail/0HNGC9KAPK1OPYNB71TVJISZHE?ref_=atv_dp_amz_c_yxuuUK_2_1"
    },
    {
        id: 2,
        nombre: "Die Hard",
        imagen: "../imgs/die hard.jpg",
        enlace: "https://www.disneyplus.com/es-419/browse/entity-efc8250c-aeed-4ab7-a492-07064c826bc1"
    },
    {
        id: 3,
        nombre: "The Shining",
        imagen: "../imgs/theshining.jpg",
        enlace: "https://www.hbomax.com/movie/9370f169-89d8-48c6-912d-8b10590a4de2?utm_source=universal_search"
    },
    {
        id: 4,
        nombre: "Days of Our Lives",
        imagen: "../imgs/daysofourlives.jpg",
        enlace: "https://www.netflix.com/ar/title/70153404"
    },
    {
        id: 5,
        nombre: "Law & Order",
        imagen: "../imgs/lawandorder.jpg",
        enlace: "https://www.netflix.com/ar/title/70140403?source=35&fromWatch=true"
    },
    {
        id: 6,
        nombre: "Pinocho",
        imagen: "../imgs/pinocho.jpg",
        enlace: "https://www.disneyplus.com/es-419/browse/entity-bfe9c61c-f7f3-4e39-94bb-376bf2162c28"
    },
    {
        id: 7,
        nombre: "Two and a Half Men",
        imagen: "../imgs/twoandahalf.jpg",
        enlace: "https://www.hbomax.com/ar/es/show/f4fa5b99-1ac7-4ef6-b837-cd78d7d4c91e?utm_source=universal_search"
    },
    {
        id: 8,
        nombre: "Little Women",
        imagen: "../imgs/little women.jpg",
        enlace: "https://www.netflix.com/ar/title/81140933?source=35&fromWatch=true"
    },
];

// Función para renderizar las series en la grilla
function cargarSeriesJoey() {
    const grid = document.getElementById("gridSeries");
    
    // Si no estamos en la página de Joey, cortamos la ejecución
    if (!grid) return;

    grid.innerHTML = "";

    for (let i = 0; i < seriesJoey.length; i++) {
        let serie = seriesJoey[i];

        grid.innerHTML += `
            <article class="tarjeta-serie">
                <img src="${serie.imagen}" alt="${serie.nombre}">
                <h3>${serie.nombre}</h3>
                <a href="${serie.enlace}" target="_blank" class="btn-ver">Ver</a>
            </article>
        `;
    }
}

// Ejecutar al cargar la página
window.addEventListener("load", function() {
    cargarSeriesJoey();
});