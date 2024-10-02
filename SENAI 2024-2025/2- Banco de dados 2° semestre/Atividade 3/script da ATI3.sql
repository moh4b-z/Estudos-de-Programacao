CREATE TABLE tipo_escolaridade (
    id_escolaridade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	escolaridade NOT NULL VARCHAR(100)
);
CREATE TABLE tipo_contratacao (
    id_contratacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	contratacao NOT NULL VARCHAR(100)
);
CREATE TABLE tipo_ramo (
    id_ramo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	ramo NOT NULL VARCHAR(100)
);

CREATE TABLE status_vagas (
    id_status INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	descricao_status NOT NULL VARCHAR(20)
);
CREATE TABLE status_candidatura (
    id_status INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	descricao_status NOT NULL VARCHAR(30)
);


CREATE TABLE empresa_matriz (
    cnpj_matriz VARCHAR(20) NOT NULL UNIQUE PRIMARY KEY,  
    nome_empresa VARCHAR(150) NOT NULL,                        
    email VARCHAR(150) NOT NULL,  
	telefone VARCHAR(20),                   
    endereco VARCHAR(200),                              
    cep VARCHAR(10) NOT NULL,                     
    site_empresa VARCHAR(200),
	link_linkedin VARCHAR(200),

	id_ramo INT NOT NULL,
	foreign key (id_ramo) references tipo_ramo(id_ramo)
);
CREATE TABLE empresa_unidade (
    cnpj_unidade VARCHAR(20) NOT NULL UNIQUE PRIMARY KEY,  
    nome_empresa VARCHAR(150) NOT NULL,                        
    email VARCHAR(150) NOT NULL,  
	telefone VARCHAR(20),                   
    endereco VARCHAR(200),                              
    cep VARCHAR(10) NOT NULL,                     
    site_empresa VARCHAR(200),
	link_linkedin VARCHAR(200),

	id_ramo INT NOT NULL,
	foreign key (id_ramo) references tipo_ramo(id_ramo)
	cnpj_matriz INT NOT NULL,
	foreign key (cnpj_matriz) references empresa_matriz(cnpj_matriz)
);

CREATE TABLE vagas (
    id_vagas INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    titulo VARCHAR(150) NOT NULL,                        
    descricao_detalhada VARCHAR(1500) NOT NULL,  
	area_atuacao VARCHAR(150) NOT NULL,                   
    experiencia_necessaria VARCHAR(300) NOT NULL,                              
    remuneracao DECIMAl(10,2) NOT NULL,                     
    data_inicio DATE NOT NULL,
	data_termino DATE NOT NULL,

	descricao_status INT NOT NULL,
	foreign key (descricao_status) references status_vagas(descricao_status)
	cnpj_matriz INT NOT NULL,
	foreign key (cnpj_matriz) references empresa_matriz(cnpj_matriz)
	cnpj_unidade INT NULL,
	foreign key (cnpj_unidade) references empresa_unidade(cnpj_unidade)
	id_escolaridade INT NOT NULL,
	foreign key (id_escolaridade) references tipo_escolaridade(id_escolaridade)
	id_status INT NOT NULL,
	foreign key (id_status) references status_vagas(id_status)
);
CREATE TABLE candidato (
    id_candidato INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    nome_candidato VARCHAR(150) NOT NULL,                        
    email_candidato VARCHAR(150) NOT NULL,  
	telefone VARCHAR(20),                    
    experiencia_profissional VARCHAR(600) NOT NULL,                             
    habilidades VARCHAR(500) NOT NULL,
	link_linkedin VARCHAR(200),
	senha VARCHAR(30) NOT NULL, 
	curriculo VARCHAR(2000),

	id_escolaridade INT NOT NULL,
	foreign key (id_escolaridade) references tipo_escolaridade(id_escolaridade)
	id_ramo INT NOT NULL,
	foreign key (id_ramo) references tipo_ramo(id_ramo)
);
CREATE TABLE candidatura_recebe (                   
    data_candidatura DATE NOT NULL,

	descricao_status INT NOT NULL,
	foreign key (descricao_status) references status_candidatura(descricao_status)
	id_vagas INT NOT NULL,
	foreign key (id_vagas) references vagas(id_vagas)
	id_candidato INT NULL,
	foreign key (id_candidato) references candidato(id_candidato)
);


INSERT INTO tipo_escolaridade (escolaridade)
	VALUES 
	('Ensino Fundamental I Incompleto (1º ao 5º ano)'), --id = 1
	('Ensino Fundamental I Completo'), --id = 2
	('Ensino Fundamental II Incompleto (6º ao 9º ano)'), --id = 3
	('Ensino Fundamental II Completo'), --id = 4
	('Ensino Médio Incompleto'), --id = 5
	('Ensino Médio Completo'), --id = 6
	('Ensino Técnico Incompleto'), --id = 7
	('Ensino Técnico Completo'), --id = 8
	('Ensino Superior Incompleto'), --id = 9
	('Ensino Superior Completo'), --id = 10
	('Pós-Graduação Incompleta'), --id = 11
	('Pós-Graduação Completa'), --id = 12
	('Mestrado Incompleto'), --id = 13
	('Mestrado Completo'), --id = 14
	('Doutorado Incompleto'), --id = 15
	('Doutorado Completo'), --id = 16
	('Pós-Doutorado Incompleto'), --id = 17
	('Pós-Doutorado Completo') --id = 18
;
INSERT INTO tipo_contratacao (contratacao)
	VALUES 
	('Temporário'), --id = 1
	('CLT'), --id = 2
	('PJ'), --id = 3
;
INSERT INTO tipo_ramo (ramo)
	VALUES 
	('Agropecuária e Agricultura'), --id = 1
	('Indústria'), --id = 2
	('Comércio'), --id = 3
	('Serviços'), --id = 4
	('Tecnologia da Informação'), --id = 5
	('Construção Civil'), --id = 6
	('Energia'), --id = 7
	('Comunicação e Mídia'), --id = 8
	('Transporte e Logística'), --id = 9
	('Turismo e Hospitalidade'), --id = 10
	('Educação'), --id = 11
	('Saúde'), --id = 12
	('Finanças e Seguros'), --id = 13
	('Imobiliário'), --id = 14
	('Entretenimento e Lazer'), --id = 15
	('Organizações Sem Fins Lucrativos'), --id = 16
	('Outros'), --id = 17
;

INSERT INTO status_vagas (status_empresa)
	VALUES 
	('ativa'), --id = 1
	('inativa') --id = 2
;
INSERT INTO status_candidatura (descricao_status)
	VALUES 
	('aprovado'), --id = 1
	('reprovado'), --id = 2
	('em aguardo') --id = 3
;

-- Inserir Empresas Matriz
INSERT INTO empresa_matriz (cnpj_matriz, nome_empresa, email, telefone, endereco, cep, site_empresa, link_linkedin, id_ramo)
VALUES 
    (
		'12.345.678/0001-90', 
		'Empresa Física A', 
		'contato@empresaA.com', 
		'(11) 99999-0001', 
		'Rua A, 123', 
		'12345-678', 
		'www.empresaA.com', 
		'linkedin.com/empresaA', 
		2),
    (
		'98.765.432/0001-21', 
		'Empresa Física B', 
		'contato@empresaB.com', 
		'(11) 99999-0002', 
		'Rua B, 456', 
		'23456-789', 
		'www.empresaB.com', 
		'linkedin.com/empresaB', 
		5
	),
    (
		'11.222.333/0001-12', 
		'Empresa Digital C', 
		'contato@empresaC.com', 
		'(11) 99999-0003', 
		, , 
		'www.empresaC.com', 
		'linkedin.com/empresaC', 
		4
	);

-- Inserir Unidades
INSERT INTO empresa_unidade (cnpj_unidade, nome_empresa, email, telefone, endereco, cep, site_empresa, link_linkedin, id_ramo, cnpj_matriz)
VALUES 
    (
		'12.345.678/0002-70', 
		'Unidade A1', 
		'contato@unidadeA1.com', 
		'(11) 99999-0004', 
		'Av. A, 101', 
		'12345-678', 
		'www.unidadeA1.com', 
		'linkedin.com/unidadeA1', 
		2, 
		'12.345.678/0001-90'
	),
    (
		'12.345.678/0003-50', 
		'Unidade A2', 
		'contato@unidadeA2.com', 
		'(11) 99999-0005', 
		'Av. A, 102', 
		'12345-678', 
		'www.unidadeA2.com', 
		'linkedin.com/unidadeA2', 
		2, 
		'12.345.678/0001-90'
	);

-- Inserir Vagas
-- Inserir Vagas
INSERT INTO vagas (titulo, descricao_detalhada, area_atuacao, experiencia_necessaria, remuneracao, data_inicio, data_termino, descricao_status, cnpj_matriz, cnpj_unidade, id_escolaridade, id_status)
VALUES 
    (
        'Desenvolvedor Backend', 
        'Responsável pelo desenvolvimento de APIs.', 
        'Tecnologia da Informação', 
        '2 anos', 
        5000.00, 
        '2024-10-01', 
        '2025-10-01',
        1, 
        '12.345.678/0001-90', 
        '12.345.678/0002-70',
        10, 
        1 
    ),
    (
        'Desenvolvedor Frontend', 
        'Responsável pela interface do usuário.', 
        'Tecnologia da Informação', 
        '1 ano', 
        4500.00, 
        '2024-10-05', 
        '2025-10-05',
        1, 
        '12.345.678/0001-90', 
        '12.345.678/0002-70',
        10, 
        1 
    ),
    (
        'Analista de Vendas', 
        'Responsável pelas vendas e atendimento ao cliente.', 
        'Comércio', 
        '1 ano', 
        3000.00, 
        '2024-10-10', 
        '2025-10-10',
        1, 
        '98.765.432/0001-21', 
        ,  -- Sem unidade
        6, 
        1
    ),
    (
        'Gerente de Projetos', 
        'Gerenciar e liderar projetos de tecnologia.', 
        'Tecnologia da Informação', 
        '5 anos', 
        8000.00, 
        '2024-10-15', 
        '2025-10-15',
        1, 
        '98.765.432/0001-21', 
        ,  -- Sem unidade
        9, 
        1
    );

-- Inserir Candidatos
INSERT INTO candidato (nome_candidato, email_candidato, telefone, experiencia_profissional, habilidades, link_linkedin, senha, curriculo, id_escolaridade, id_ramo)
VALUES 
    (
		'João Pedro', 
		'joaopedro1@example.com', 
		'(11) 99999-0006', 
		'Nenhuma', 
		'Nenhuma', 
		'linkedin.com/candidato1', 
		'senha123', 
		'curriculo.pdf', 
		6, 
		2
	),
    (
		'Mohammad Salim', 
		'mohammadsss2@example.com', 
		'(11) 99999-0007', 
		'2 anos de experiência', 
		'Java, SQL', 
		'linkedin.com/candidato2', 
		'senha123', 
		'curriculo.pdf', 
		10, 
		5
	),
    (
		'Ana Maria', 
		'anamama3@example.com', 
		'(11) 99999-0008', 
		'1 ano de experiência', 
		'HTML, CSS', 
		'linkedin.com/candidato3', 
		'senha123', 
		'curriculo.pdf', 
		6, 
		2
	),
    (
		'Vitor Paes', 
		'vitorpaes4@example.com', 
		'(11) 99999-0009', 
		'5 anos de experiência', 
		'Gerenciamento de Projetos', 
		'linkedin.com/candidato4', 
		'senha123', 
		'curriculo.pdf', 
		9, 
		4);

-- Inserir Candidaturas
INSERT INTO candidatura_recebe (data_candidatura, descricao_status, id_vagas, id_candidato)
VALUES 
    ('2023-10-03', 1, 1, 2), -- Candidato 2 se candidata à vaga 1
    ('2023-11-30', 3, 2, 4), -- Candidato 4 se candidata à vaga 2
    ('2023-12-02', 1, 3, 3), -- Candidato 3 se candidata à vaga 3
    ('2024-10-01', 1, 4, 4), -- Candidato 4 se candidata à vaga 4
    ('2024-10-02', 1, 1, 4), -- Candidato 4 se candidata à vaga 1
    ('2024-10-03', 1, 2, 4); -- Candidato 4 se candidata à vaga 2


-- SELECTS


-- Todas as vagas de uma empresa matriz específica

SELECT *
FROM vagas
WHERE cnpj_matriz = ''; 


