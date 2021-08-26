const d=document

const espia=()=>{
    const $secciones=d.querySelectorAll(`section[data-scrollSpy]`)
    const elCallBack=(entradas)=>{
        entradas.forEach((el)=>{
            const id=el.target.getAttribute(`id`)
            if(el.isIntersecting){
                d.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.add(`activo`)
            }else{
                d.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.remove(`activo`)
            }
        })
    }
    const observador=new IntersectionObserver(elCallBack,{
        threshold:[0.5,0.75]
    })
    $secciones.forEach((el)=>{
        observador.observe(el)
    })
}
export default espia