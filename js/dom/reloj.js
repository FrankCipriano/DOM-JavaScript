const d=document

export const relojDigital=(reloj,btnIniciar,btnDetener)=>{
    let tiempo
    d.addEventListener(`click`,(e)=>{
        if(e.target.matches(btnIniciar)){
            tiempo=setInterval(()=>{
                let texto_reloj=new Date().toLocaleTimeString()
                d.querySelector(reloj).innerHTML=`<h3>${texto_reloj}</h3>`
            },1000)
            e.target.disabled=true
        }
        if(e.target.matches(btnDetener)){
            clearInterval(tiempo)
            d.querySelector(reloj).innerHTML=null
            d.querySelector(btnIniciar).disabled=false
        }
    })
}
export const alarma=(sonido,btnIniciar,btnDetener)=>{
    let alarma
    let $etiqueta_audio=d.createElement(`audio`)
    $etiqueta_audio.src=sonido
    d.addEventListener(`click`,(e)=>{
        if(e.target.matches(btnIniciar)){
            alarma=setTimeout(()=>{
                $etiqueta_audio.play()
            },2000)
            e.target.disabled=true;
        }
        if(e.target.matches(btnDetener)){
            clearTimeout(alarma)
            $etiqueta_audio.pause()
            $etiqueta_audio.currentTime=0
            d.querySelector(btnIniciar).disabled=false
        }
    })
}
