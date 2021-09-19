const d=document
let x=0,y=0

export const moverBola=(e,bola,stage)=>{
    const $bola=d.querySelector(bola),
        $stage=d.querySelector(stage),
        limite_bola=$bola.getBoundingClientRect(),
        limite_stage=$stage.getBoundingClientRect()
        console.log(limite_stage)
        console.log(limite_bola)
        switch(e.keyCode){
            case 37:
                if(limite_bola.left>limite_stage.left+15){
                    e.preventDefault()
                    x--
                }
                break;
            case 38:
                if(limite_bola.top>limite_stage.top+20){
                    e.preventDefault()
                    y--
                }
                break;
            case 39:
                if(limite_bola.right<limite_stage.right-15){
                    e.preventDefault()
                    x++
                }
                break;
            case 40:
                if(limite_bola.bottom<limite_stage.bottom-20){
                    e.preventDefault()
                    y++
                }
                break;
            default:
                break;
        }
        $bola.style.transform=`translate(${x*10}px,${y*10}px)`
}
export const atajoTeclado=(e)=>{
    if(e.key===`a`&&e.altKey){
        alert(`alerta con atajo de teclado: "Alt + a"`)
    }
    if(e.key===`c`&&e.altKey){
        confirm(`Confirmacion con atajo de teclado: "Alt + c"`)
    }
    if(e.key===`p`&&e.altKey){
        prompt(`Aviso con atajo de teclado: "Alt + p"`)
    }
}