import express from 'express';
import cors from 'cors'
import executarQuery from './db.js'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/noticias', async (req, res) => {
    let query = `
        SELECT 
            id,
            titulo,
            conteudo,
            caminho_imagem
        FROM
            noticias
        ORDER BY
            id DESC
        LIMIT 10    
   `;

   let resultado = await executarQuery(query);
   res.send(resultado[0]);
});

app.post('/noticias', async (req, res) => {

    var query = `
        INSERT INTO noticias (
            titulo, 
            conteudo,
            caminhoImagem,
            link
        ) VALUES (
            ?,
            ?,
            ?,
            ?)
    `;

    var noticia = [
        req.body.titulo,
        req.body.conteudo,
        req.body.imagem,
        req.body.link
    ];

    let resultado = await executarQuery(query, noticia);

    try {
        res.send({
            insertId: resultado[0].insertid
        });
    }
    catch {
        console.log(`Erro ao Executar Query: ${erro}`);
    }
    finally {
        await conexao.end();
    }
});

app.listen(3000, () => {
    console.log("servidor online em http://localhost:3000");
});


