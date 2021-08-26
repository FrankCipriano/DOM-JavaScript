const d=document

const buscarGanador=(btn,jugador)=>{
    const ganador=(jugador)=>{
        const $jugadores=d.querySelectorAll(jugador),
            random=Math.floor(Math.random()*$jugadores.length),
            winner=$jugadores[random]
            return `El ganador es ${winner.textContent}`
    }
    d.addEventListener(`click`,(e)=>{
        if(e.target.matches(btn)){
            let el_ganador=ganador(jugador)
            alert(el_ganador)
        }
    })
}
export default buscarGanador