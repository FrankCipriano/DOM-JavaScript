const menuHamburguesa=(panelbtn,panel,linkmenu)=>{
    const d=document
    d.addEventListener(`click`,(e)=>{
        if(e.target.matches(panelbtn) || e.target.matches(`${panelbtn} *`)){
            d.querySelector(panel).classList.toggle(`is-active`)
            d.querySelector(panelbtn).classList.toggle(`is-active`)
        }
        if(e.target.matches(linkmenu)){
            d.querySelector(panel).classList.remove(`is-active`)
            d.querySelector(panelbtn).classList.remove(`is-active`)
        }
    })
}

export default menuHamburguesa