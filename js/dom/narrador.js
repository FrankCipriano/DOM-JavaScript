const d=document,w=window

const elNarrador=()=>{
    const $narrador_select=d.getElementById(`narrador-select`),
            $narrador_text=d.getElementById(`narrador-text`),
            $narrador_btn=d.getElementById(`narrador-btn`)
    const narrador_mensaje=new SpeechSynthesisUtterance()
    let voces=[]
    d.addEventListener(`DOMContentLoades`,(e)=>{
        w.speechSynthesis.addEventListener(`voiceschanged`,(e)=>{
            voces=w.speechSynthesis.getVoices()
            voces.forEach((voz)=>{
                const $option=d.createElement(`option`)
                $option.value=voz.name
                $option.textContent=`${voz.name} / ${voz.lang}`
                $narrador_select.appendChild($option)
            })
        })
    })
    d.addEventListener(`change`,(e)=>{
        if(e.target===$narrador_select){
            narrador_mensaje.voice=voces.find((voz)=>voz.name===e.target.value)
        }
    })
    d.addEventListener(`click`,(e)=>{
        if(e.target===$narrador_btn){
            narrador_mensaje.text=$narrador_text.value
            w.speechSynthesis.speak(narrador_mensaje)
        }
    })
}
export default elNarrador