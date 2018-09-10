var mapa // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */

let posicionCentral = {lat: -34.50887, lng: -58.713192}

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */

  mapa = new google.maps.Map(document.getElementById('map'),{
    zoom: 17,
    center: posicionCentral
  })

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
