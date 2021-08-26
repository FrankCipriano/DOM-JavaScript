const d=document

const elCarrusel=()=>{
    const $btnNext=d.querySelector(`.btn_carousel .next`),
        $btnPrev=d.querySelector(`.btn_carousel .prev`),
        $presentacion=d.querySelectorAll(`.presentacion`)
    let i=0
    d.addEventListener(`click`,(e)=>{
        if(e.target===$btnPrev){
            e.preventDefault()
            $presentacion[i].classList.remove(`activo`)
            i--
            if(i<0){
                i=$presentacion.length-1
            }
            $presentacion[i].classList.add(`activo`)
        }
        if(e.target===$btnNext){
            e.preventDefault()
            $presentacion[i].classList.remove(`activo`)
            i++
            if(i>=$presentacion.length){
                i=0
            }
            $presentacion[i].classList.add(`activo`)
        }
    })
}
export default elCarrusel