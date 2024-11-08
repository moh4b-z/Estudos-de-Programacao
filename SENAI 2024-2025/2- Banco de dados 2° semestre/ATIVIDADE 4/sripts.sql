CREATE TABLE tb_tipo_endereco (
    id_tipo_endereco INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL
); 

CREATE TABLE tb_tipo_pagamento (
    id_pagamento INT PRIMARY KEY AUTO_INCREMENT,
    tipo_pagamento VARCHAR(50) NOT NULL
); 

CREATE TABLE tb_vendedor (
    id_vendedor INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(20) NOT NULL UNIQUE,
    nome VARCHAR(80) NOT NULL,
    comissao DECIMAL(5,2) NOT NULL,  
    telefone VARCHAR(20)
);

CREATE TABLE tb_cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(20) NOT NULL UNIQUE,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(150) NOT NULL,  
    telefone VARCHAR(20)
);

CREATE TABLE tb_empresa (
    id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    cnpj VARCHAR(20) NOT NULL UNIQUE,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(150) NOT NULL,  
    telefone VARCHAR(20)
);

CREATE TABLE tb_endereco (
    id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    descricao VARCHAR(500) NOT NULL,
    id_loja INT NOT NULL,
    FOREIGN KEY (id_loja) REFERENCES tb_loja(id_loja),
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    id_tipo_endereco INT NOT NULL,
    FOREIGN KEY (id_tipo_endereco) REFERENCES tb_tipo_endereco(id_tipo_endereco)
); 

CREATE TABLE tb_loja (
    id_loja INT PRIMARY KEY AUTO_INCREMENT,
    cnpj VARCHAR(20) NOT NULL UNIQUE,
    nome VARCHAR(80) NOT NULL,
    email VARCHAR(150) NOT NULL,  
    telefone VARCHAR(20),  
    endereco VARCHAR(200) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    cep VARCHAR(10) NOT NULL, 
    id_empresa INT NOT NULL,
    FOREIGN KEY (id_empresa) REFERENCES tb_empresa(id_empresa)
); 

CREATE TABLE tb_produto (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    descricao VARCHAR(500) NOT NULL,  
    estoque DECIMAL(8,2) NOT NULL,
    id_loja INT NOT NULL,
    FOREIGN KEY (id_loja) REFERENCES tb_loja(id_loja)
);

CREATE TABLE tb_pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80) NOT NULL,
    descricao VARCHAR(500) NOT NULL,  
    estoque DECIMAL(8,2) NOT NULL,
    id_loja INT NOT NULL,
    FOREIGN KEY (id_loja) REFERENCES tb_loja(id_loja),
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    id_vendedor INT NOT NULL,
    FOREIGN KEY (id_vendedor) REFERENCES tb_vendedor(id_vendedor)
); 

CREATE TABLE tb_item_pedido (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    quantidade INT NOT NULL,  
    valor_unitario DECIMAL(8,2) NOT NULL,
    id_pedido INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
    id_produto INT NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);

CREATE TABLE tb_forma_pagamento (
    id_pedido INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
    id_pagamento INT NOT NULL,
    FOREIGN KEY (id_pagamento) REFERENCES tb_tipo_pagamento(id_pagamento)
);





INSERT INTO tb_tipo_endereco (tipo) 
    VALUES 
    ('Residencial'), 
    ('Comercial'), 
    ('Cobrança'), 
    ('Entrega')
;

INSERT INTO tb_vendedor (cpf, nome, comissao, telefone) 
VALUES
    ('12345678901', 'João Silva', 5.00, '(11) 99999-9999'),
    ('98765432100', 'Maria Santos', 7.00, '(21) 98888-8888'),
    ('56789123456', 'Pedro Souza', 6.50, '(31) 97777-7777'),
    ('67890543210', 'Ana Costa', 5.50, '(41) 96666-6666')
;

INSERT INTO tb_vendedor (cpf, nome, comissao, telefone) 
    VALUES
    ('12345678901', 'João Silva', 5.00, '(11) 99999-9999'),
    ('98765432100', 'Maria Santos', 7.00, '(21) 98888-8888'),
    ('56789123456', 'Pedro Souza', 6.50, '(31) 97777-7777'),
    ('67890543210', 'Ana Costa', 5.50, '(41) 96666-6666')
;

INSERT INTO tb_cliente (cpf, nome, email, telefone) 
    VALUES
    ('33322211109', 'Carlos Pereira', 'carlos.pereira@gmail.com', '(11) 91234-5678'),
    ('44455566677', 'Fernanda Lima', 'fernanda.lima@yahoo.com', '(21) 92345-6789'),
    ('22211133308', 'Lucas Alves', 'lucas.alves@hotmail.com', '(31) 93456-7890'),
    ('55566677788', 'Juliana Moura', 'juliana.moura@outlook.com', '(41) 94567-8901')
;

INSERT INTO tb_empresa (cnpj, nome, email, telefone) 
    VALUES
    ('11222333000199', 'Tech Solutions LTDA', 'contato@techsolutions.com', '(11) 95555-1234'),
    ('22333444000288', 'Smart Retail S/A', 'vendas@smartretail.com', '(21) 96666-2345'),
    ('33444555000377', 'Global Services', 'global@services.com.br', '(31) 97777-3456')
;

INSERT INTO tb_loja (cnpj, nome, email, telefone, endereco, cidade, estado, cep, id_empresa) 
    VALUES
    ('11111111111111', 'Loja Central', 'central@lojascentral.com', '(11) 93333-3333', 'Rua das Flores, 100', 'São Paulo', 'SP', '01000-000', 1),
    ('22222222222222', 'Loja Norte', 'norte@lojasnorte.com', '(21) 94444-4444', 'Av. Rio Branco, 200', 'Rio de Janeiro', 'RJ', '20000-000', 2),
    ('33333333333333', 'Loja Minas', 'minas@lojaseficientes.com', '(31) 95555-5555', 'Praça Sete, 300', 'Belo Horizonte', 'MG', '30000-000', 3)
;

INSERT INTO tb_produto (nome, descricao, estoque, id_loja) 
    VALUES
    ('Smartphone X', 'Último modelo com alta performance', 50.00, 1),
    ('Notebook Pro', 'Notebook de alta performance para trabalho e jogos', 30.00, 2),
    ('Tablet Y', 'Tablet com tela retina e grande autonomia de bateria', 20.00, 3),
    ('Fone de Ouvido Z', 'Fone com cancelamento de ruído e alta qualidade de som', 100.00, 1)
;

INSERT INTO tb_pedido (nome, descricao, estoque, id_loja, id_cliente, id_vendedor) 
    VALUES
    ('Pedido 1', 'Compra de smartphone e fone de ouvido', 2.00, 1, 1, 1),
    ('Pedido 2', 'Compra de notebook e tablet', 1.00, 2, 2, 2),
    ('Pedido 3', 'Compra de fone de ouvido', 3.00, 1, 3, 3),
    ('Pedido 4', 'Compra de tablet', 1.00, 3, 4, 4)
;

INSERT INTO tb_pedido (nome, descricao, estoque, id_loja, id_cliente, id_vendedor) 
    VALUES
    ('Pedido 5', 'Compra de smartphone e fone de ouvido', 2.00, 1, 1, 1),
    ('Pedido 6', 'Compra de notebook e tablet', 1.00, 2, 2, 1),
    ('Pedido 7', 'Compra de fone de ouvido', 3.00, 1, 3, 1),
    ('Pedido 8', 'Compra de tablet', 1.00, 3, 4, 2)
;
INSERT INTO tb_pedido (nome, descricao, estoque, id_loja, id_cliente, id_vendedor) 
    VALUES
    ('Pedido 9', 'Compra de smartphone e fone de ouvido', 2.00, 1, 1, 2),
    ('Pedido 10', 'Compra de notebook e tablet', 1.00, 2, 2, 4)
;

INSERT INTO tb_item_pedido (quantidade, valor_unitario, id_pedido, id_produto) 
    VALUES
    (1, 2500.00, 1, 1),  -- Smartphone X
    (1, 150.00, 1, 4),   -- Fone de Ouvido Z
    (1, 5000.00, 2, 2),  -- Notebook Pro
    (1, 3000.00, 2, 3),  -- Tablet Y
    (3, 150.00, 3, 4),   -- Fone de Ouvido Z
    (1, 3000.00, 4, 3)  -- Tablet Y
;

INSERT INTO tb_forma_pagamento (id_pedido, id_pagamento) 
    VALUES
    (1, 1),  -- Cartão de Crédito
    (2, 2),  -- Boleto Bancário
    (3, 3),  -- Pix
    (4, 4)  -- Transferência Bancária
;
