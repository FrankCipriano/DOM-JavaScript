const d=document,w=window

const videoInteligente=()=>{
    const $videos=d.querySelectorAll(`video[data-smartVideo]`)
    
    const elCallBack=(entradas)=>{
        entradas.forEach((el)=>{
            if(el.isIntersecting){
                el.target.play()
            }else{
                el.target.pause()
            }
            w.addEventListener(`visibilitychange`,(e)=>{
                d.visibilityState===`visible`? el.target.play():el.target.pause()
            })
        })
    }
    const observador=new IntersectionObserver(elCallBack,{
        threshold:0.5
    })
    $videos.forEach((el)=>{observador.observe(el)})
}
export default videoInteligente