window.cipher = {

   encode : (offset, textoOriginal) =>{
     let caracterCifrado = '';
     let textoCifrado = '';
     textoOriginal = textoOriginal.toUpperCase();
     for (let i = 0; i < textoOriginal.length; i++) {
         let charASCII = textoOriginal.charCodeAt(i);
         caracterCifrado = ((charASCII - 65 + offset) % 26) + 65;
         textoCifrado = textoCifrado + String.fromCharCode(caracterCifrado);

     }
     return textoCifrado;
  },

  decode : (offset, textoCifrado) =>{
    let caracterDescifrado = '';
    let textoDescifrado = '';
    for (let i = 0; i < textoCifrado.length; i++) {
        let charASCII = textoCifrado.charCodeAt(i);
        caracterDescifrado = ((charASCII - 65 - offset) % 26) + 65;
        textoDescifrado = textoDescifrado + String.fromCharCode(caracterDescifrado);

    }
    return textoDescifrado;
  }

};
