function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
    else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}

function abrir_lightbox(element){
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");

    lightbox_img.src = element.src;
    lightbox.style.display ="flex";
}

function fechar_lightbox(){
    document.getElementById("lightbox").style.display = "none";
}

async function exibir_noticias() {
    const section = document.getElementById("noticias");
    section.innerHTML = "<h2>Aguarde, carregando documento...</h2>"

    const resposta = await fetch('http://127.0.0.1:3000/noticias');
    var noticias = await resposta.json();
    console.log(noticias);

    var html = "";
    noticias.forEach(noticia => {
        html += `
        <article class="noticia">
                <img src="${noticia.caminhoImagem}" onclick="abrir_lightbox(this)">
                <h2>${noticia.titulo}</h2>
                <p>${noticia.conteudo}</p>
                <a href="${noticia.link}">leia mais...</a>
            </article>
        `;
    });
    section.innerHTML = html;
 
}