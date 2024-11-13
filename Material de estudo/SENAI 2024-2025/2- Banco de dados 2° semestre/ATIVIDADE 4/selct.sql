SELECT p.id_pedido, p.nome AS nome_pedido, p.descricao, p.estoque, c.nome AS nome_cliente
    FROM tb_pedido p
    INNER JOIN tb_cliente c ON p.id_cliente = c.id_cliente
    WHERE c.cpf = '44455566677'
;


SELECT ip.id_item, pr.nome AS nome_produto, ip.quantidade, ip.valor_unitario
    FROM tb_item_pedido ip
    INNER JOIN tb_produto pr ON ip.id_produto = pr.id_produto
    WHERE ip.id_pedido = 2
;




SELECT v.nome AS nome_vendedor, COUNT(p.id_pedido) AS total_pedidos
    FROM tb_vendedor v
    INNER JOIN tb_pedido p ON v.id_vendedor = p.id_vendedor
    GROUP BY v.nome
    ORDER BY total_pedidos DESC
;



SELECT l.nome AS nome_loja, SUM(ip.quantidade * ip.valor_unitario) AS valor_total_vendas
    FROM tb_loja l
    INNER JOIN tb_pedido p ON l.id_loja = p.id_loja
    INNER JOIN tb_item_pedido ip ON p.id_pedido = ip.id_pedido
    GROUP BY l.nome
;
