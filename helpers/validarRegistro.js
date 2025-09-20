import { expressions } from './expressions.js'

let inputs = document.getElementsByClassName("formulario__entrada")
let arregloInputs = [...inputs]


arregloInputs.map((input) => {
    input.addEventListener("keyup", (e) => {
        switch (e.target.id) {
            case "nombre":
                if (!expressions.text.test(e.target.value)) {
                    document.getElementById("nombre").style.borderColor = "red"
                } else {
                    document.getElementById("nombre").style.borderColor = "blue"

                }


                break;
            case "apellido":
                if (expressions.text.test(e.target.value)) {
                    e.target.classList.add("correcto")
                    e.target.classList.remove("incorrecto")
                } else {
                    e.target.classList.add("incorrecto")
                    e.target.classList.remove("correcto")

                }

                break;
            case "documento":
                if (expressions.numero.test(e.target.value)) {
                    e.target.classList.add("correcto")
                    e.target.classList.remove("incorrecto")
                } else {
                    e.target.classList.add("incorrecto")
                    e.target.classList.remove("correcto")

                }

                break;
        }
    })
})

