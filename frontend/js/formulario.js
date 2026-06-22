function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
    } else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}

async function inserir_noticia() {
    var titulo        = document.getElementById("titulo").value.trim();
    var conteudo      = document.getElementById("conteudo").value.trim();
    var caminhoImagem = document.getElementById("caminhoImagem").value.trim();
    var link          = document.getElementById("link").value.trim();
    var mensagem      = document.getElementById("mensagem");

    // Validação básica
    if (!titulo || !conteudo) {
        mensagem.textContent = "⚠️ Título e Conteúdo são obrigatórios!";
        mensagem.className = "erro";
        return;
    }

    var novaNoticia = {
        titulo: titulo,
        conteudo: conteudo,
        caminhoImagem: caminhoImagem,
        link: link
    };

    try {
        mensagem.textContent = "Enviando...";
        mensagem.className = "";

        const resposta = await fetch("http://127.0.0.1:3000/noticias", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novaNoticia)
        });

        if (resposta.ok) {
            mensagem.textContent = "✅ Notícia cadastrada com sucesso!";
            mensagem.className = "sucesso";
            document.getElementById("form-noticia").reset();
        } else {
            const erro = await resposta.json();
            mensagem.textContent = "❌ Erro: " + (erro.mensagem || "Falha ao cadastrar.");
            mensagem.className = "erro";
        }

    } catch (e) {
        mensagem.textContent = "❌ Não foi possível conectar ao servidor.";
        mensagem.className = "erro";
        console.error(e);
    }
}