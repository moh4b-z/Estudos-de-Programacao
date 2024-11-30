-- Inserindo dados na tabela tb_genero
INSERT INTO tb_genero (tipo) VALUES
('Ação'), ('Comédia'), ('Drama'), ('Terror'), ('Fantasia');

-- Inserindo dados na tabela tb_paises
INSERT INTO tb_paises (tipo) VALUES
('Brasil'), ('EUA'), ('Canadá'), ('Reino Unido'), ('Japão');

-- Inserindo dados na tabela tb_filme
INSERT INTO tb_filme (nome, duracao, custo, sinopse) VALUES
('Filme A', 120.00, 10000000.00, 'Sinopse do Filme A'),
('Filme B', 150.00, 20000000.00, 'Sinopse do Filme B');

-- Inserindo dados na tabela tb_serie
INSERT INTO tb_serie (nome, sinopse) VALUES
('Série A', 'Sinopse da Série A'),
('Série B', 'Sinopse da Série B');

-- Inserindo dados na tabela tb_episodio
INSERT INTO tb_episodio (nome, duracao, custo, sinopse, id_serie) VALUES
('Episódio 1', 45.00, 500000.00, 'Sinopse do Episódio 1', 1),
('Episódio 2', 50.00, 600000.00, 'Sinopse do Episódio 2', 1),
('Episódio 3', 40.00, 450000.00, 'Sinopse do Episódio 3', 2);


-- Inserindo dados na tabela tb_produtora
INSERT INTO tb_produtora (nome, descricao, data_fundacao, email, id_paises) VALUES
('Produtora A', 'Descrição da Produtora A', '1980-01-01', 'contato@produtoraa.com', 1),
('Produtora B', 'Descrição da Produtora B', '1990-05-05', 'contato@produtorab.com', 2);


-- Inserindo dados na tabela tb_paises_filme
INSERT INTO tb_paises_filme (id_paises, id_filme) VALUES
(1, 1), (2, 2);

-- Inserindo dados na tabela tb_paises_serie
INSERT INTO tb_paises_serie (id_paises, id_serie) VALUES
(3, 1), (4, 2);

-- Inserindo dados na tabela tb_produtora_filme
INSERT INTO tb_produtora_filme (id_produtora, id_filme) VALUES
(1, 1), (2, 2);

-- Inserindo dados na tabela tb_produtora_serie
INSERT INTO tb_produtora_serie (id_produtora, id_serie) VALUES
(1, 1), (2, 2);

-- Inserindo dados na tabela tb_tipo_genero_filme
INSERT INTO tb_tipo_genero_filme (id_genero, id_filme) VALUES
(1, 1), (2, 2);

-- Inserindo dados na tabela tb_tipo_genero_serie
INSERT INTO tb_tipo_genero_serie (id_genero, id_serie) VALUES
(3, 1), (4, 2);



-- Inserindo dados na tabela tb_usuario
INSERT INTO tb_usuario (nome, data_nacimento, email, id_paises) VALUES
('João', '2000-01-01', 'joao@email.com', 1),
('Maria', '2000-01-02', 'maria@email.com', 2),
('Carlos', '1990-05-10', 'carlos@email.com', 3),
('Ana', '1990-06-15', 'ana@email.com', 4),
('Pedro', '1985-03-20', 'pedro@email.com', 5),
('Clara', '1985-07-25', 'clara@email.com', 1),
('Lucas', '1995-08-12', 'lucas@email.com', 2),
('Laura', '1995-12-30', 'laura@email.com', 3),
('Rafael', '2001-02-14', 'rafael@email.com', 4),
('Julia', '2001-06-18', 'julia@email.com', 5),
-- Usuários que não deram nota a nada
('Gabriel', '1998-11-05', 'gabriel@email.com', 2),
('Mariana', '1998-04-22', 'mariana@email.com', 1);

-- Inserindo notas para filmes na tabela tb_filme_assistido
INSERT INTO tb_filme_assistido (nota, comentario, data_de_visualizacao, id_usuario, id_filme) VALUES
(8.50, 'Muito bom!', '2024-01-01', 1, 1),
(7.00, 'Gostei', '2024-01-05', 2, 1),
(9.00, 'Excelente', '2024-02-01', 3, 1),
(6.50, 'Legal', '2024-02-10', 4, 1),
(8.00, 'Recomendo', '2024-03-15', 5, 1),
(9.50, 'Maravilhoso!', '2024-03-20', 6, 1),
(7.50, 'Bom', '2024-04-10', 7, 1),
(8.80, 'Vale a pena', '2024-04-18', 8, 1),
(6.00, 'Mediano', '2024-05-05', 9, 1),
(7.90, 'Gostei bastante', '2024-05-15', 10, 1);

INSERT INTO tb_filme_assistido (nota, comentario, data_de_visualizacao, id_usuario, id_filme) VALUES
(7.50, 'Interessante', '2024-01-10', 1, 2),
(6.00, 'Ok', '2024-01-20', 2, 2),
(8.20, 'Bom filme', '2024-02-05', 3, 2),
(9.10, 'Ótimo', '2024-02-18', 4, 2),
(7.80, 'Bem feito', '2024-03-22', 5, 2),
(9.30, 'Recomendo muito!', '2024-03-25', 6, 2),
(6.80, 'Mediano', '2024-04-12', 7, 2),
(8.00, 'Divertido', '2024-04-19', 8, 2),
(7.40, 'Gostei', '2024-05-08', 9, 2),
(8.90, 'Muito bom', '2024-05-20', 10, 2);

-- Inserindo notas para séries na tabela tb_serie_assistida
INSERT INTO tb_serie_assistida (nota, comentario, episodios_assistidos, data_inicio, data_final, id_usuario, id_serie) VALUES
(9.00, 'Ótima série!', 10, '2024-01-01', '2024-02-01', 1, 1),
(8.50, 'Gostei bastante', 8, '2024-01-15', NULL, 2, 1),
(9.30, 'Maravilhosa!', 12, '2024-01-25', '2024-02-20', 3, 1),
(7.00, 'Boa', 9, '2024-02-05', NULL, 4, 1),
(8.80, 'Excelente', 10, '2024-02-15', '2024-03-01', 5, 1),
(9.50, 'Muito envolvente', 12, '2024-03-10', NULL, 6, 1),
(6.50, 'Mediana', 6, '2024-03-20', NULL, 7, 1),
(7.80, 'Gostei', 8, '2024-04-05', NULL, 8, 1),
(8.90, 'Ótima narrativa', 10, '2024-04-15', '2024-05-01', 9, 1),
(9.10, 'Impressionante!', 12, '2024-05-05', NULL, 10, 1);

INSERT INTO tb_serie_assistida (nota, comentario, episodios_assistidos, data_inicio, data_final, id_usuario, id_serie) VALUES
(8.50, 'Bem feita', 10, '2024-01-05', '2024-02-10', 1, 2),
(9.00, 'Maravilhosa!', 12, '2024-01-20', NULL, 2, 2),
(8.30, 'Gostei muito', 9, '2024-01-30', '2024-02-25', 3, 2),
(7.50, 'Ótima história', 10, '2024-02-10', NULL, 4, 2),
(8.70, 'Muito boa', 12, '2024-02-20', '2024-03-15', 5, 2),
(9.20, 'Incrível', 11, '2024-03-05', NULL, 6, 2),
(6.90, 'Regular', 7, '2024-03-25', NULL, 7, 2),
(7.60, 'Vale a pena', 9, '2024-04-10', NULL, 8, 2),
(8.10, 'Muito divertida', 11, '2024-04-20', '2024-05-10', 9, 2),
(9.50, 'Excelente!', 12, '2024-05-01', NULL, 10, 2);
