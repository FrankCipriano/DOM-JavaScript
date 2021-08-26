const d=document,w=window

const botonScroll=(btn)=>{
    const $btnScroll=d.querySelector(btn)
    d.addEventListener(`scroll`,(e)=>{
        let recorido_scroll=w.pageYOffset || d.documentElement.scrollTo
        if(recorido_scroll>600){
            $btnScroll.classList.remove(`oculto`)
        }else{
            $btnScroll.classList.add(`oculto`)
        }
    })
    d.addEventListener(`click`,(e)=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top: 0
            })
        }
    })
}
export default botonScroll