-- Acessando o MySQL como usuário root
mysql -u root -p

-- Acessando o MySQL como um usuário específico
mysql -u usuario_exemplo -p

-- Mostrando a descrição de uma tabela (estrutura da tabela)
DESC nome_da_tabela;

-- Mostrando todas as tabelas de um banco de dados
SHOW TABLES;

-- Selecionando todos os dados de uma tabela
SELECT * FROM nome_da_tabela;

-- Mostrando todos os bancos de dados disponíveis no MySQL
SHOW DATABASES;

-- Criando um novo usuário no MySQL
CREATE USER 'usuario_exemplo'@'%' IDENTIFIED BY 'senha_exemplo';

-- Concedendo todos os privilégios ao novo usuário sobre um banco de dados específico
GRANT ALL PRIVILEGES ON banco_exemplo.* TO 'usuario_exemplo'@'%';

-- Selecionando dados específicos (campos) de uma tabela com uma condição
SELECT nome_produto, preco 
FROM produtos 
WHERE categoria = 'eletronicos';

-- Modificando uma coluna de uma tabela (alterando tipo de dado)
ALTER TABLE produtos CHANGE preco preco DECIMAL(10,2);

-- Removendo uma coluna de uma tabela
ALTER TABLE produtos DROP COLUMN categoria;

-- Adicionando uma nova coluna à tabela com a restrição de "não nulo"
ALTER TABLE produtos ADD COLUMN id_categoria INT NOT NULL;

-- Adicionando uma chave estrangeira (foreign key) para referenciar outra tabela
ALTER TABLE produtos ADD CONSTRAINT fk_categoria
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria);

-- Atualizando valores de uma coluna com base em uma condição
UPDATE produtos SET id_categoria = 1 WHERE id_produto = 3;

-- Exemplo mais completo de um banco de dados fictício com várias operações

-- Criando um banco de dados
CREATE DATABASE banco_exemplo;

-- Usando o banco de dados criado
USE banco_exemplo;

-- Criando uma tabela de categorias
CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(50) NOT NULL
);

-- Criando uma tabela de produtos com chave estrangeira para categorias
CREATE TABLE produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);

-- Inserindo dados na tabela categorias
INSERT INTO categorias (nome_categoria) VALUES ('Eletrônicos'), ('Móveis'), ('Roupas');

-- Inserindo dados na tabela produtos
INSERT INTO produtos (nome_produto, preco, id_categoria) VALUES 
('Smartphone', 1200.00, 1),
('Sofá', 700.00, 2),
('Camiseta', 50.00, 3);

-- Consultando todos os produtos e seus preços
SELECT nome_produto, preco FROM produtos;

-- Consultando produtos com uma condição específica
SELECT nome_produto, preco 
FROM produtos 
WHERE id_categoria = 1;

-- Atualizando o preço de um produto específico
UPDATE produtos 
SET preco = 1000.00 
WHERE nome_produto = 'Smartphone';

-- Deletando um produto da tabela
DELETE FROM produtos WHERE id_produto = 2;

-- Excluindo uma tabela inteira
DROP TABLE produtos;

-- Excluindo um banco de dados
DROP DATABASE banco_exemplo;
