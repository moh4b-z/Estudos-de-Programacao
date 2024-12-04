-- Filme com a maior nota
SELECT 
    nome AS titulo, 
    'Filme' AS tipo, 
    MAX(nota) AS maior_nota
FROM 
    tb_filme_assistido 
INNER JOIN tb_filme ON 
tb_filme.id_filme = tb_filme_assistido.id_filme
GROUP BY tb_filme.id_filme;

-- série com a maior nota
SELECT 
    nome AS titulo, 
    'Série' AS tipo, 
    MAX(nota) AS maior_nota
FROM 
    tb_serie_assistida 
INNER JOIN tb_serie ON 
tb_serie.id_serie = tb_serie_assistida.id_serie
GROUP BY tb_serie.id_serie
ORDER BY maior_nota DESC;


-- Série que mais foi concluída
SELECT 
    s.nome AS serie, 
    COUNT(sa.id_usuario) AS total_conclusoes
FROM 
    tb_serie_assistida sa
INNER JOIN tb_serie s ON 
sa.id_serie = s.id_serie
WHERE 
    sa.data_final IS NOT NULL
GROUP BY 
    s.nome
ORDER BY 
    total_conclusoes DESC;


-- Usuários que não deram notas
SELECT 
    u.nome AS usuario, 
    u.email
FROM 
    tb_usuario u
LEFT JOIN tb_filme_assistido fa ON 
u.id_usuario = fa.id_usuario
LEFT JOIN tb_serie_assistida sa ON 
u.id_usuario = sa.id_usuario
WHERE 
    fa.id_usuario IS NULL AND sa.id_usuario IS NULL;


-- Países das pessoas que assistiram filmes ou séries (em ordem decrescente de frequência)
SELECT 
    p.tipo AS pais, 
    COUNT(DISTINCT u.id_usuario) AS total_pessoas
FROM 
    tb_usuario u
INNER JOIN tb_paises p ON 
u.id_paises = p.id_paises
LEFT JOIN tb_filme_assistido fa ON 
u.id_usuario = fa.id_usuario
LEFT JOIN tb_serie_assistida sa ON 
u.id_usuario = sa.id_usuario
WHERE 
    fa.id_usuario IS NOT NULL OR sa.id_usuario IS NOT NULL
GROUP BY 
    p.tipo
ORDER BY 
    total_pessoas DESC;


-- País com maior público de cada produtora
SELECT 
    pr.nome AS produtora,
    p.tipo AS pais,
    COUNT(DISTINCT u.id_usuario) AS publico_total
FROM 
    tb_produtora pr
INNER JOIN tb_produtora_filme pf ON 
pr.id_produtora = pf.id_produtora
INNER JOIN tb_filme f ON 
pf.id_filme = f.id_filme
LEFT JOIN tb_filme_assistido fa ON 
f.id_filme = fa.id_filme
LEFT JOIN tb_usuario u ON 
fa.id_usuario = u.id_usuario
LEFT JOIN tb_paises p ON 
u.id_paises = p.id_paises
GROUP BY 
    pr.nome, p.tipo
ORDER BY 
    pr.nome, publico_total DESC;
