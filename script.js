
// funcion para validar
function validarTexto(textoOriginal) {
    return /^[a-z\s]*$/.test(textoOriginal); // Acepta solo letras minúsculas y espacios
}
//Funcion para encriptar 
function encriptar(textoOriginal) {
    return textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}
// Función para desencriptar texto
function desencriptar(textencriptade) {
    return textencriptade
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Asegúrate de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID
     //boton1.addEventListener("click", Encriptar); por si las moscas
    const boton1 = document.getElementById("encriptar-btn");
    const boton2 = document.getElementById("desencriptar-btn");
    const textarea = document.getElementById("texto-a-encriptar");
    const textarea2 = document.getElementById("texto-encriptado");
    const copiarbtn = document.getElementById("copiar-boton");
    
    
    // Botón de encriptar
    if (boton1) {
        boton1.addEventListener("click", function() {
        const textoOriginal =textarea.value;
        
        // Validar el texto antes de encriptar
        if (!validarTexto(textoOriginal)) {
            alert("Error: Solo se permiten letras minúsculas sin acentos ni caracteres especiales."); // Usar alert para mostrar el error
            return;
        }

        const textoEncriptado = encriptar(textoOriginal);
        textarea2.value = textoEncriptado; // Resultado encriptado se debe enviar al textearea de encriptacion
        //console.log("La encriptacion se hizo: ", textoEncriptado); prueba para ver si es que se encripto con exito
        textarea.value = ""; // Limpiar el textarea
    });}

    if (boton2) {
        boton2.addEventListener("click", function() {
            const textencriptade = textarea2.value;
            const textdesen = desencriptar(textencriptade);
            textarea.value = textdesen;
        });
    }
    if (copiarbtn ) {
        copiarbtn.addEventListener("click", function() {
            const textoParaCopiar = textarea2.value; // Captura el texto del textarea
            
            // Intentar copiar al portapapeles
            navigator.clipboard.writeText(textoParaCopiar)
                .then(() => {
                    alert("Copiado con exito"); // Usar alert para mostrar el error

                })
                .catch((error) => {
                    mensaje.innerHTML = "Error al copiar al portapapeles.";
                    console.error("Error al copiar:", error); // Mostrar error en la consola
                });
        });
    }

   
    
    



 


});

