const d=document

const pruebaResponsivo=(form)=>{
    const $formulario=d.getElementById(form)
    let ventana
    d.addEventListener(`submit`,(e)=>{
        if(e.target===$formulario){
            e.preventDefault()
            ventana=window.open($formulario.direccion.value,`ventana`,`innerWidth=${$formulario.ancho.value},innerHeight=${$formulario.alto.value}`)
        }
    })
    d.addEventListener(`click`,(e)=>{
        if(e.target===$formulario.cerrar)   ventana.close()
    })
}
export default pruebaResponsivo