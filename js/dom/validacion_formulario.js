const d=document

const validarFormulario=()=>{
    const $formulario=d.querySelector(`.formulario-contacto`),
            $inputs=d.querySelectorAll(`.formulario-contacto [required]`)
    $inputs.forEach((input)=>{
        const $span=d.createElement(`span`)
        $span.id=input.name
        $span.textContent=input.title
        $span.classList.add(`formulario-contacto-error`,`none`)
        input.insertAdjacentElement(`afterend`,$span)
    })
    d.addEventListener(`keyup`,(e)=>{
        if(e.target.matches(`.formulario-contacto [required]`)){
            let $input=e.target,
                pattern=$input.pattern || $input.dataset.pattern
                if(pattern && $input.value!==""){
                    let regex=new RegExp(pattern)
                    return !regex.exec($input.value)
                            ?d.getElementById($input.name).classList.add(`is-active`)
                            :d.getElementById($input.name).classList.remove(`is-active`)
                }
                if(!pattern){
                    return $input.value===""
                            ?d.getElementById($input.name).classList.add(`is-active`)
                            :d.getElementById($input.name).classList.remove(`is-active`)
                }
        }
    })
    d.addEventListener(`submit`,(e)=>{
        //e.preventDefault()
        alert(`El comentario esta a punto de enviarse.!!`)
        const $loader=d.querySelector(`.contacto-loader`),
                $respuesta=d.querySelector(`.contacto-respuesta`)
        $loader.classList.remove(`none`)
        setTimeout(()=>{
            $loader.classList.add(`none`)
            $respuesta.classList.remove(`none`)
            $formulario.reset()
            setTimeout(() => {
                $respuesta.classList.add(`none`)
            }, 3000);
        },3000)
    })
}
export default validarFormulario