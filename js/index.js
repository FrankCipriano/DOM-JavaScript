import botonScroll from "./dom/boton_scroll.js";
import elCarrusel from "./dom/carrusel.js";
import cuentaRegresiva from "./dom/cuenta_regresiva.js";
import detectarConexion from "./dom/detectar_conexion.js";
import detectarDispositivo from "./dom/detectar_dispositivo.js";
import detectarWebCam from "./dom/detectar_webcam.js";
import busqueda from "./dom/filtro_busqueda.js";
import ubicacion from "./dom/localizacion.js";
import menuHamburguesa from "./dom/menu_hamburguesa.js";
import elNarrador from "./dom/narrador.js";
import multimediaResponsivo from "./dom/objetos_responsivos.js";
import pruebaResponsivo from "./dom/prueba_responsivo.js";
import {relojDigital, alarma} from "./dom/reloj.js";
import espia from "./dom/scroll_espia.js";
import buscarGanador from "./dom/sorteo.js";
import {moverBola, atajoTeclado} from "./dom/teclado.js";
import temaOscuro from "./dom/tema_oscuro.js";
import validarFormulario from "./dom/validacion_formulario.js";
import videoInteligente from "./dom/video_inteligente.js";

const d=document,
    yt_escritorio=`<iframe width="560" height="315" src="https://www.youtube.com/embed/nePGS9DvoOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    yt_mobil=`<a href="https://youtu.be/nePGS9DvoOI" target="_blank" rel="noopener">Ver video</a>`,
    gm_escritorio=`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10903.247078750088!2d-91.11856983520478!3d14.94377896675896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab071f30fce1acea!2sCapilla%20del%20Calvario!5e0!3m2!1ses-419!2sgt!4v1627850118880!5m2!1ses-419!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
    gm_mobil=`<a href="https://goo.gl/maps/outHY4k77JhAm4ZJ9" target="_blank" rel="noopener">Ver mapa</a>`

d.addEventListener(`DOMContentLoaded`,(e)=>{
    menuHamburguesa(`.panel-btn`,`.panel`,`.menu a`)
    relojDigital(`#reloj`,`#activar-reloj`,`#desactivar-reloj`)
    alarma(`./assets/algorithmic-relationship.mp3`,`#activar-alarma`,`#desactivar-alarma`)
    cuentaRegresiva(`cuenta-regresiva`,`July 31,2022 14:28:00`,`Bienvenido al mundo de la programacion.!!`)
    botonScroll(`.btn-scroll-top`)
    multimediaResponsivo(`youtube`,`(min-width: 1024px)`,yt_mobil,yt_escritorio)
    multimediaResponsivo(`gmapa`,`(min-width: 1024px)`,gm_mobil,gm_escritorio)
    pruebaResponsivo(`responsive-tester`)
    detectarDispositivo(`dispositivo-usuario`)
    detectarWebCam(`webcam`)
    ubicacion(`geolocalizacion`)
    busqueda(`.filtro-tarjetas`,`.tarjeta`)
    buscarGanador(`#btn_ganador`,`.jugador`)
    elCarrusel()
    espia()
    videoInteligente()
    validarFormulario()
})
d.addEventListener(`keydown`,(e)=>{
    atajoTeclado(e)
    moverBola(e,`.bola`,`.stage`)
})
temaOscuro(`.btn-dark-theme`,`modo-oscuro`)
detectarConexion()
elNarrador()