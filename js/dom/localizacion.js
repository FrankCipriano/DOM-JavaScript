const d=document,n=navigator

const ubicacion=(id)=>{
    const $div=d.getElementById(id)
    const parametros={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0,
    }
    const exito=(posicion)=>{
        let coordenadas=posicion.coords
        console.log(posicion)
        $div.innerHTML=`
        <p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coordenadas.latitude}</b></li>
            <li>Longitud: <b>${coordenadas.longitude}</b></li>
            <li>Presición: <b>${coordenadas.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z" target="_blank" rel="noopener">Ver posicion en Google Maps</a>
        `
    }
    const fracaso=(err)=>{
        $div.innerHTML=`<p><mark>Error: ${err.code}: ${err.message}</mark></p>`
        console.log(`Error: ${err.code}: ${err.message}`)
    }
    n.geolocation.getCurrentPosition(exito,fracaso,parametros)
}
export default ubicacion