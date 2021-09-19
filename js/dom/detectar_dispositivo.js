const d=document,n=navigator,dispositivo=n.userAgent

const detectarDispositivo=(etiquetahtml)=>{
    const $dispositivo=d.getElementById(etiquetahtml)
    const movil={
        ios:()=>dispositivo.match(/iphone|ipad|ipod/i),
        android:()=>dispositivo.match(/android/i),
        windowsphone:()=>dispositivo.match(/windows phone/i),
        cualquiera:function(){
            return this.ios()||this.android()||this.windowsphone()
        }
    }
    const escritorio={
        linux:()=>dispositivo.match(/linux/i),
        windows:()=>dispositivo.match(/windows nt/i),
        mac:()=>dispositivo.match(/mac os/i),
        cualquiera:function(){
            return this.linux()||this.mac()||this.windows()
        }
    }
    const navegador={
        safari:()=>dispositivo.match(/safari/i),
        chrome:()=>dispositivo.match(/chrome/i),
        explorer:()=>dispositivo.match(/msie|iemobile/i),
        firefox:()=>dispositivo.match(/firefox/i),
        edge:()=>dispositivo.match(/edge/i),
        opera:()=>dispositivo.match(/opera|opera mini/i),
        cualquiera:function(){
            return this.safari()||
            this.chrome()||
            this.explorer()||
            this.firefox()||
            this.edge()||
            this.opera()
        }
    }
    $dispositivo.innerHTML=`
    <ul>
        <li>User Agent: ${dispositivo}</li>
        <li>Plataforma: ${movil.cualquiera()? movil.cualquiera(): escritorio.cualquiera()}</li>
        <li>Navegador: ${navegador.cualquiera()}</li>
    </ul>`
    //-conetnido exclusivo
    if(navegador.chrome())  $dispositivo.innerHTML+=`<p><mark>Contenido exclusivo para Chrome</mark></p>`
    if(navegador.firefox()) $dispositivo.innerHTML+=`<p><mark>Contenido exclusivo para Firefox</mark></p>`
    if(navegador.safari())  $dispositivo.innerHTML+=`<p><mark>Contenido exclusivo para Safari</mark></p>`
    if(escritorio.mac())    $dispositivo.innerHTML+=`<p><mark>Descarga nuestro software para Mac OS</mark></p>`
    if(escritorio.windows())$dispositivo.innerHTML+=`<p><mark>Descarga nuestro software para Windows</mark></p>`
    if(escritorio.linux())  $dispositivo.innerHTML+=`<p><mark>Descarga nuestro software para Linux</mark></p>`
    if(movil.android())     $dispositivo.innerHTML+=`<p><mark>Descarga nuesta aplicacion para Android</mark></p>`
    //-redireccion
    //if(movil.android()) window.location.href=`https://developer.mozilla.org/es/docs/Web/HTTP/Status`
    if(movil.ios())     window.location.href=`https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types`
}
export default detectarDispositivo