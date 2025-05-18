const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "trasnlatx (-50%)"
    mascara.style.visibility = "visible"
}

function esconderfomr(){
 form.style.left = "-300%"
    form.style.transform = "trasnlatx (0)"
    mascara.style.visibility = "hidden"

}

