CREATE TABLE tb_pessoa_tipo(
	tipo_pessoa VARCHAR(1) PRIMARY KEY,
	descricao_tipo VARCHAR(250) NOT NULL
);
CREATE TABLE tb_cliente(
	id_cliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Nome_Completo VARCHAR(100) NOT NULL,
	endereco VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL,
	cpf_cnpj VARCHAR(50) NOT NULL,
	
	tipo_pessoa VARCHAR(1),
	foreign key (tipo_pessoa) references tb_pessoa_tipo(tipo_pessoa)
);
CREATE TABLE tb_contrato_de_manutencao(
	id_contrato INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	descricao_dos_servicos_cobertos VARCHAR(10000) NOT NULL,
	valor_mensal decimal(12,2) NOT NULL,
	data_de_inicio date NOT NULL,
	data_de_termino date NOT NULL,
	
	id_cliente INT,
	foreign key (id_cliente) references tb_cliente(id_cliente)
);

CREATE TABLE tb_tecnico(
	id_tecnico INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Nome_Completo VARCHAR(100) NOT NULL,
	email VARCHAR(150) NOT NULL,
	cpf VARCHAR(50) NOT NULL,
	especializacao VARCHAR(100) NOT NULL,
	
	tipo_pessoa VARCHAR(1),
	foreign key (tipo_pessoa) references tb_pessoa_tipo(tipo_pessoa)
	
);
CREATE TABLE tb_status(
	id_status INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	tipo_status VARCHAR(50) NOT NULL
);
CREATE TABLE tb_equipamento(
	id_equipamento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	descricao_do_equipamento VARCHAR(1000) NOT NULL,
	numero_de_serie INT NOT NULL,
	data_de_aquisicao date NOT NULL,
	
	id_status INT NOT NULL,
	foreign key (id_status) references tb_status(id_status)
);

CREATE TABLE tb_manutencao(
	id_manutencao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	descricao_do_problema VARCHAR(1000) NOT NULL,
	descricao_da_solucao VARCHAR(1000) NOT NULL,
	pecas_trocadas VARCHAR(500) NOT NULL,
	data_da_manutencao date NOT NULL,
	custo_da_manutencao decimal (12,2) NOT NULL,
	
	id_cliente INT,
	foreign key (id_cliente) references tb_cliente(id_cliente),
	id_equipamento INT,
	foreign key (id_equipamento) references tb_equipamento(id_equipamento),
	id_tecnico INT,
	foreign key (id_tecnico) references tb_tecnico(id_tecnico)
);


-- agora o preenchimento das tabelas


-- é importante preencher essas tabelas primeiro por ser as que não tem chaves estrangeiras
INSERT INTO tb_pessoa_tipo (tipo_pessoa, descricao_tipo)
	VALUES 
	('F',
	'Pessoa física é um indivíduo com direitos e deveres legais, que age em seu próprio nome. Ao contrário de uma pessoa jurídica, que é uma entidade legal, a pessoa física é o ser humano em sua capacidade pessoal e direta.'),
	('J',
	'Pessoa jurídica é uma entidade legal, como uma empresa ou organização, que possui direitos e deveres próprios. Ao contrário da pessoa física, é uma construção legal que pode contratar, processar e ser processada em seu nome.')
	;
	
INSERT INTO tb_status (tipo_status)
	VALUES 
	('Ativo'), ('Manutenção'), ('Inativo')
	;
	
-- Ativo = 1 Manutenção = 2 Inativo = 3

INSERT INTO tb_cliente (Nome_Completo, endereco, email, cpf_cnpj, tipo_pessoa)
	VALUES 
	-- primeiro pessoas físicas
	('Ana Clara Silva',
	'Rua das Flores, 123, Apto 45, Jardim das Acácias, São Paulo - SP, 01234-567',
	'anaclara.silva@gmail.com',
	'123.456.789-00',
	'F'
	) -- id = 1
	,
	('João Pedro Almeida',
	'Avenida Central, 987, Sala 202, Centro, Rio de Janeiro - RJ, 98765-432',
	'joaopedro.almeida@gmail.com',
	'234.567.890-12',
	'F'
	) -- id = 2
	,
	('Maria Fernanda Costa',
	'Praça da República, 56, Bloco B, 4º andar, Belo Horizonte - MG, 30123-456',
	'maria.fernanda@gmail.com',
	'345.678.901-23',
	'F'
	) -- id = 3
	,
	('Carlos Eduardo Martins',
	'Rua das Palmeiras, 789, Casa 8, Vila Mariana, São Paulo - SP, 05678-910',
	'carlos.eduardo@gmail.com',
	'456.789.012-34',
	'F'
	) -- id = 4
	,
	-- pessoas Jurídicas 
	('Tech Solutions Ltda',
	'Rua das Indústrias, 1234, Sala 101, Distrito Industrial, Curitiba - PR, 80000-000',
	'contato@techsolutions.com.br',
	'12.345.678/0001-90',
	'J'
	) -- id = 5
	,
	('AutoPeças Brasil S/A',
	'Avenida das Nações, 4321, Bloco A, São Paulo - SP, 01010-101',
	'atendimento@autpecasbrasil.com.br',
	'23.456.789/0001-12',
	'J'
	) -- id = 6
	,
	('Construtora Nova Era',
	'Rua dos Engenheiros, 789, Conjunto 305, Porto Alegre - RS, 90000-000',
	'contato@construtoranovaera.com.br',
	'34.567.890/0001-23',
	'J'
	) -- id = 7
	,
	('Livraria Letras e Cia',
	'Praça dos Livros, 100, Loja 5, Belo Horizonte - MG, 30123-456',
	'vendas@letrasecia.com.br',
	'45.678.901/0001-34',
	'J'
	) -- id = 8
	;
	

INSERT INTO tb_tecnico (Nome_Completo, email, cpf, especializacao, tipo_pessoa)
	VALUES 
	('Lucas Andrade Souza',
	'lucas.andrade@example.com',
	'123.456.789-00',
	'Técnico especializado em sistemas de áudio e equipamentos de som.',
	'F') -- id = 1
	,
	('Júlia Fernandes Lima',
	' julia.fernandes@example.com',
	'234.567.890-12',
	'Técnico com experiência em conserto de instrumentos musicais e equipamentos eletrônicos.',
	'F') -- id = 2
	,
	('Pedro Henrique Silva',
	'pedro.henrique@example.com',
	'345.678.901-23',
	'Especialista em manutenção de sistemas de áudio e equipamentos de gravação.',
	'F') -- id = 3
	;
	
INSERT INTO tb_contrato_de_manutencao (descricao_dos_servicos_cobertos, valor_mensal, data_de_inicio , data_de_termino, id_cliente)
	VALUES 
	('Contrato vai cubri qualque defeito em maquinas até medio porte do Cliente até o ano 2030',
	'300.00',
	'2024-01-01',
	'2030-01-01',
	'3') -- id = 1
	,
	('Contrato vai cubri qualque defeito em maquinas até grande porte do Cliente até o ano 2029',
	'300.00',
	'2023-01-01',
	'2029-01-01',
	'8') -- id = 2
	,
	('Contrato vai cubri qualque defeito em maquinas até grande porte do Cliente até o ano 2029',
	'200.00',
	'2023-01-01',
	'2029-01-01',
	'6') -- id = 3
	;

	
	
INSERT INTO tb_equipamento (descricao_do_equipamento, numero_de_serie, data_de_aquisicao, id_status)
	VALUES
	('Câmera', 123456, '2024-01-15', 1)
	,  -- Ativo
	('Caixa de som', 789012, '2024-03-10', 2)
	,  -- Em Manutenção
	('Computador', 345678, '2023-05-20', 3)
	;  -- Ativo

INSERT INTO tb_manutencao (descricao_do_problema, descricao_da_solucao, pecas_trocadas, data_da_manutencao, custo_da_manutencao, id_cliente, id_equipamento, id_tecnico)
	VALUES
	('Falha no funcionamento da câmera',
	'Substituição do módulo de imagem', 
	'Módulo de imagem', '2024-02-20',
	200.00,
	1, 1, 1)
	,
	('Problema de conexão da caixa de som',
	'Ajuste da placa de circuito',
	'Placa de circuito',
	'2024-03-15',
	150.00,
	2, 2, 2)
	,
	('O computador apresentou erro de software',
	'Atualização de firmware',
	'Firmware',
	'2024-06-05',
	100.00,
	3, 3, 3);



-- OS SELECT

-- SELECT 1
SELECT *
FROM tb_cliente
ORDER BY Nome_Completo DESC;

-- SELECT 2
SELECT Nome_Completo, email, especializacao
FROM tb_tecnico
ORDER BY Nome_Completo ASC;

-- SELECT 3
SELECT Nome_Completo, email, especializacao
FROM tb_tecnico
ORDER BY Nome_Completo ASC;

-- SELECT 4
SELECT *
FROM tb_equipamento
WHERE YEAR(data_de_aquisicao) = 2023;

-- SELECT 5
SELECT *
FROM tb_equipamento
WHERE data_de_aquisicao >= '2024-01-01' AND data_de_aquisicao < '2024-07-01';

-- SELECT 6
SELECT *
FROM tb_contrato_de_manutencao
WHERE valor_mensal > 200.00;

-- SELECT 7
SELECT *
FROM tb_contrato_de_manutencao
WHERE valor_mensal <= 300.00 AND YEAR(data_de_inicio) = 2024;



-- SELECT adicionas

-- chamar pessoas fisicas
SELECT Nome_Completo, endereco, email, cpf_cnpj
FROM tb_cliente
WHERE tipo_pessoa = 'F';

-- chamar pessoas juridicas
SELECT Nome_Completo, endereco, email, cpf_cnpj
FROM tb_cliente
WHERE tipo_pessoa = 'J';

