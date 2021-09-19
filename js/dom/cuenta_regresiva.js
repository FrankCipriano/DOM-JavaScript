const d=document

const cuentaRegresiva=(etiqueta_id,fecha,mensaje)=>{
    const $etiqueta_regresiva=d.getElementById(etiqueta_id),
    fecha_limite=new Date(fecha).getTime()

    let temporizador=setInterval(() => {
        let ahora=new Date().getTime(),
        tiempo_restante=fecha_limite-ahora,
        dias=Math.floor(tiempo_restante/(1000*60*60*24)),
        horas=(`0`+Math.floor((tiempo_restante%(1000*60*60*24))/(1000*60*60))).slice(-2),
        minutos=(`0`+Math.floor((tiempo_restante%(1000*60*60))/(1000*60))).slice(-2),
        segundos=(`0`+Math.floor((tiempo_restante%(1000*60))/(1000))).slice(-2)

        $etiqueta_regresiva.innerHTML=`<h3>Faltan: ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos</h3>`
        if(tiempo_restante<0){
            clearInterval(temporizador)
            $etiqueta_regresiva.innerHTML=`<h3>${mensaje}</h3`
        }
    }, 1000);

}
export default cuentaRegresiva