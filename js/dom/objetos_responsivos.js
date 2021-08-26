const d=document,w=window

const multimediaResponsivo=(etiqueta,mQuery,htmlMobil,htmlEscritorio)=>{
    let punto_quiebre=w.matchMedia(mQuery)
    const responsivo=(e)=>{
        if(e.matches){
            d.getElementById(etiqueta).innerHTML=htmlEscritorio
        }else{
            d.getElementById(etiqueta).innerHTML=htmlMobil
        }
    }
    responsivo(punto_quiebre)
    punto_quiebre.addEventListener(`change`,responsivo)
}
export default multimediaResponsivo