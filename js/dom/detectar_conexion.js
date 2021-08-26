const d=document,w=window,n=navigator

const detectarConexion=()=>{
    const $div=d.createElement(`div`)
    const notificacion=()=>{
        if(n.onLine){
            $div.textContent=`Conexion reestablecida`
            $div.classList.add(`online`)
            $div.classList.remove(`offline`)
        }else{
            $div.textContent=`Conexion perdida`
            $div.classList.add(`offline`)
            $div.classList.remove(`online`)
        }
        d.body.insertAdjacentElement(`afterbegin`,$div)
        setTimeout(()=>{
            d.body.removeChild($div)
        },3000)
    }
    w.addEventListener(`online`,(e)=>{notificacion()})
    w.addEventListener(`offline`,(e)=>{notificacion()})
}
export default detectarConexion