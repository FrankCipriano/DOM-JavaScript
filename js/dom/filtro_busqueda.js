const d=document

const busqueda=(inputHTML,tarjetas)=>{
    d.addEventListener(`keyup`,(e)=>{
        if(e.target.matches(inputHTML)){
            if(e.key===`Escape`)    e.target.value=``
            d.querySelectorAll(tarjetas).forEach((el)=>{
                el.textContent.toLowerCase().includes(e.target.value)
                    ?el.classList.remove(`filtro`)
                    :el.classList.add(`filtro`)
            })
        }
    })
}
export default busqueda