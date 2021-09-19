const d=document,ls=localStorage

const temaOscuro=(btn,clase_oscuro)=>{
    const $btntema=d.querySelector(btn),
    $elementos=d.querySelectorAll(`[data-dark]`)

    let luna=`🌙`,sol=`☀️`
    const modoOscuro=()=>{
        $elementos.forEach((el)=>{el.classList.add(clase_oscuro)})
        $btntema.textContent=sol
        ls.setItem(`Tema`,`Noche`)
    }
    const modoDia=()=>{
        $elementos.forEach((el)=>{el.classList.remove(clase_oscuro)})
        $btntema.textContent=luna
        ls.setItem(`Tema`,`Dia`)
    }
    d.addEventListener(`click`,(e)=>{
        if(e.target.matches(btn)){
            if($btntema.textContent===luna){
                modoOscuro()
            }else{
                modoDia()
            }
        }
    })
    d.addEventListener(`DOMContentLoaded`,(e)=>{
        if(ls.getItem(`Tema`)===null)    ls.setItem(`Tema`,`Dia`)
        if(ls.getItem(`Tema`)===`Dia`)   modoDia()
        if(ls.getItem(`Tema`)===`Noche`) modoOscuro()
    })
}
export default temaOscuro