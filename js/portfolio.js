function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")){
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
    else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}