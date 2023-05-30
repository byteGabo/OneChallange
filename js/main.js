//obtener referencias

const inputText = document.getElementById("ingreso-texto");
const outputText = document.getElementById("salida-texto");
const encriptarBoton = document.getElementById("enctiptar-boton");
const desBoton = document.getElementById("des-boton");
const copyBoton = document.getElementById("copiar-boton");

function encriptarPalabra(palabra) {
    let resultado = "";
    for (let i = 0; i < palabra.length; i++) {
      const letra = palabra[i];
      switch (letra) {
        case "e":
          resultado += "enter";
          break;
        case "i":
          resultado += "imes";
          break;
        case "a":
          resultado += "ai";
          break;
        case "o":
          resultado += "ober";
          break;
        case "u":
          resultado += "ufat";
          break;
        default:
          resultado += letra;
          break;
      }
    }
    return resultado;
  }

  function desencriptarPalabra(palabraEncriptada) {
    let resultado = "";
    for (let i = 0; i < palabraEncriptada.length; i++) {
      const letra = palabraEncriptada[i];
      switch (letra) {
        case "e":
          if (palabraEncriptada.slice(i, i + 5) === "enter") {
            resultado += "e";
            i += 4;
          } else {
            resultado += letra;
          }
          break;
        case "i":
          if (palabraEncriptada.slice(i, i + 4) === "imes") {
            resultado += "i";
            i += 3;
          } else {
            resultado += letra;
          }
          break;
        case "a":
          if (palabraEncriptada.slice(i, i + 2) === "ai") {
            resultado += "a";
            i += 1;
          } else {
            resultado += letra;
          }
          break;
        case "o":
          if (palabraEncriptada.slice(i, i + 4) === "ober") {
            resultado += "o";
            i += 3;
          } else {
            resultado += letra;
          }
          break;
        case "u":
          if (palabraEncriptada.slice(i, i + 4) === "ufat") {
            resultado += "u";
            i += 3;
          } else {
            resultado += letra;
          }
          break;
        default:
          resultado += letra;
          break;
      }
    }
    return resultado;
  }

  function copiarTexto() {
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    inputText.focus();
    inputText.value = outputText.value;
  }


encriptarBoton.addEventListener("click", function () {
    const textoOriginal = inputText.value.toLowerCase();
    const textoSinEspacios = textoOriginal.replace(/\s/g, "");
    const palabras = textoSinEspacios.split(" ");
    const palabrasEncriptadas = palabras.map(encriptarPalabra);
    const textoEncriptado = palabrasEncriptadas.join(" ");
    outputText.value = textoEncriptado;
    console.log(textoEncriptado);
  });
  
  
  desBoton.addEventListener("click", function () {
    const textoEncriptado = outputText.value.toLowerCase();
    const palabrasEncriptadas = textoEncriptado.split(" ");
    const palabrasDesencriptadas = palabrasEncriptadas.map(desencriptarPalabra);
    const textoDesencriptado = palabrasDesencriptadas.join(" ");
    console.log(textoDesencriptado)
    outputText.value = textoDesencriptado;
  });

  copyBoton.addEventListener("click", function () {
    copiarTexto();
  });