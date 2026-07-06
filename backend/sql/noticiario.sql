DROP DATABASE IF EXISTS noticiario;

CREATE DATABASE IF NOT EXISTS noticiario;

USE noticiario;

CREATE TABLE noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(250) NOT NULL,
    conteudo TEXT NOT NULL,
    caminho_imagem VARCHAR(250),
    link VARCHAR(250)
);

INSERT INTO noticias (
    titulo,
    conteudo,
    caminho_imagem,
    link

) VALUES (
    'linux para iniciantes',
    'O incentivo ao avanço tecnológico
    assim como a normatização de fluxos decisórios aponta para a melhoria das práticas reconhecidas internacionalmente.
    Conforme apontado por diversos estudos,
    a promoção de um ambiente de inovação contínua promove a alavancagem do levantamento das variáveis envolvidas.
    No mundo atual, a expansão dos mercados mundiais exige a precisão e a definição do processo de comunicação como um todo.
    Com base em dados empíricos, a análise aprofundada dos indicadores-chave estende o alcance e a importância das rupturas provocadas pela transformação digital.',
    'https://diolinux.com.br/',
    '../img/linux.png'
) 