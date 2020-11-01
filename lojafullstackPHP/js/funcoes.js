    /* Início exibir categoria*/
function exibir_categoria(categoria) {
    let elementos = document.getElementsByClassName("box_produto");
    console.log(elementos);
    for (var i=0; i<elementos.length; i++) {
        console.log(elementos[i].id);
        if(categoria == elementos[i].id)
            elementos[i].style = "display:inline-block";
        else
        elementos[i].style = "display:none";
    }
}
    /* Fim exibir categoria*/

    /* Início exibir todos itens*/
let exibir_todos = () => {
    let elementos = document.getElementsByClassName("box_produto");
    for (var i=0; i<elementos.length; i++) {
        elementos[i].style = "display:inline-block";
    }
};
   /* Fim exibir todos itens*/
   
   /* Início ampliar e diminuir imagem*/
let dentroimg = (imagem) => {
    console.log(imagem);
    if (imagem.width == 110)
            imagem.width = 158;
    else
        imagem.width = 110; 
        }

        let foraimg = (imagem) => {
    console.log(imagem);

    if (imagem.width == 158)
            imagem.width = 110;
    else
        imagem.width = 158; 
        }

    /* Fim ampliar e diminuir imagem*/
