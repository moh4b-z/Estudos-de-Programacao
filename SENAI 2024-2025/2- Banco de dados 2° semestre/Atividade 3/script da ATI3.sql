CREATE TABLE tipo_escolaridade (
    id_escolaridade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    escolaridade VARCHAR(100) NOT NULL
);
CREATE TABLE tipo_contratacao (
    id_contratacao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    contratacao VARCHAR(100) NOT NULL
);
CREATE TABLE tipo_ramo (
    id_ramo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ramo VARCHAR(100) NOT NULL
);


CREATE TABLE status_vagas (
    id_status INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao_status VARCHAR(20) NOT NULL
);
CREATE TABLE status_candidatura (
    id_status INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descricao_status VARCHAR(30) NOT NULL
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
    FOREIGN KEY (id_ramo) REFERENCES tipo_ramo(id_ramo)
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
    FOREIGN KEY (id_ramo) REFERENCES tipo_ramo(id_ramo),
    cnpj_matriz VARCHAR(20) NOT NULL,
    FOREIGN KEY (cnpj_matriz) REFERENCES empresa_matriz(cnpj_matriz)
);


CREATE TABLE vagas (
    id_vagas INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    titulo VARCHAR(150) NOT NULL,                        
    descricao_detalhada VARCHAR(1500) NOT NULL,  
    area_atuacao VARCHAR(150) NOT NULL,                   
    experiencia_necessaria VARCHAR(300) NOT NULL,                              
    remuneracao DECIMAL(10,2) NOT NULL,                     
    data_inicio DATE NOT NULL,
    data_termino DATE NOT NULL,
    descricao_status INT NOT NULL,
    FOREIGN KEY (descricao_status) REFERENCES status_vagas(id_status),
    cnpj_unidade VARCHAR(20),
    FOREIGN KEY (cnpj_unidade) REFERENCES empresa_unidade(cnpj_unidade),
    id_escolaridade INT NOT NULL,
    FOREIGN KEY (id_escolaridade) REFERENCES tipo_escolaridade(id_escolaridade),
    id_status INT NOT NULL,
    FOREIGN KEY (id_status) REFERENCES status_vagas(id_status)
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
    FOREIGN KEY (id_escolaridade) REFERENCES tipo_escolaridade(id_escolaridade),
    id_ramo INT NOT NULL,
    FOREIGN KEY (id_ramo) REFERENCES tipo_ramo(id_ramo)
);
CREATE TABLE candidatura_recebe (                   
    data_candidatura DATE NOT NULL,
    id_status INT NOT NULL,
    FOREIGN KEY (id_status) REFERENCES status_candidatura(id_status),
    id_vagas INT NOT NULL,
    FOREIGN KEY (id_vagas) REFERENCES vagas(id_vagas),
    id_candidato INT NULL,
    FOREIGN KEY (id_candidato) REFERENCES candidato(id_candidato)
);

-- Agora os INSERT

INSERT INTO tipo_escolaridade (escolaridade) 
	VALUES 
	('Ensino Fundamental I Incompleto (1º ao 5º ano)'), 
	('Ensino Fundamental I Completo'), 
	('Ensino Fundamental II Incompleto (6º ao 9º ano)'), 
	('Ensino Fundamental II Completo'), 
	('Ensino Médio Incompleto'), 
	('Ensino Médio Completo'), 
	('Ensino Técnico Incompleto'), 
	('Ensino Técnico Completo'), 
	('Ensino Superior Incompleto'), 
	('Ensino Superior Completo'), 
	('Pós-Graduação Incompleta'), 
	('Pós-Graduação Completa'), 
	('Mestrado Incompleto'), 
	('Mestrado Completo'), 
	('Doutorado Incompleto'), 
	('Doutorado Completo'), 
	('Pós-Doutorado Incompleto'), 
	('Pós-Doutorado Completo')
;
INSERT INTO tipo_contratacao (contratacao) 
	VALUES 
	('Temporário'), 
	('CLT'), 
	('PJ')
;
INSERT INTO tipo_ramo (ramo) 
	VALUES 
	('Agropecuária e Agricultura'), 
	('Indústria'), 
	('Comércio'), 
	('Serviços'), 
	('Tecnologia da Informação'), 
	('Construção Civil'), 
	('Energia'), 
	('Comunicação e Mídia'), 
	('Transporte e Logística'), 
	('Turismo e Hospitalidade'), 
	('Educação'), 
	('Saúde'), 
	('Finanças e Seguros'), 
	('Imobiliário'), 
	('Entretenimento e Lazer'), 
	('Organizações Sem Fins Lucrativos'), 
	('Outros')
;


INSERT INTO status_vagas (descricao_status) 
	VALUES 
	('ativa'), 
	('inativa')
;
INSERT INTO status_candidatura (descricao_status) 
	VALUES 
	('aprovado'), 
	('reprovado'), 
	('em aguardo')
;

-- Empresas Matriz
INSERT INTO empresa_matriz (cnpj_matriz, nome_empresa, email, telefone, endereco, cep, site_empresa, link_linkedin, id_ramo)
	VALUES 
    (
		'12.345.678/0001-90', 
		'Indústria Boa', 
		'boaindustria@gmail.com', 
		'(11) 99999-0001', 
		'Rua perto de algum lugar, 123', 
		'12345-678', 
		'www.boaindustria.com', 
		'linkedin.com/boaindustria', 
		2
	),
    (
		'98.765.432/0001-21', 
		'Informação na sua Tecnologia', 
		'itecnologia@gmail.com', 
		'(11) 99999-0002', 
		'Rua B, 456', 
		'23456-789', 
		'www.itecnologia.com', 
		'linkedin.com/itecnologia', 
		5
	),
    (
		'11.222.333/0001-12', 
		'Serviços toda hora', 
		'todahora@gmail.com', 
		'(11) 99999-0003', 
		'Rua C, 789', 
		'34567-890', 
		'www.todahora.com', 
		'linkedin.com/todahora', 
		4
	)
;

-- Unidades
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
	),
    (
		'98.765.432/0002-80', 
		'Unidade B1', 
		'contato@unidadeB1.com', 
		'(11) 99999-0006', 
		'Av. B, 201', 
		'23456-789', 
		'www.unidadeB1.com', 
		'linkedin.com/unidadeB1', 
		5, 
		'98.765.432/0001-21'
	),
    (
		'98.765.432/0003-90', 
		'Unidade B2', 
		'contato@unidadeB2.com', 
		'(11) 99999-0007', 
		'Av. B, 202', 
		'23456-789', 
		'www.unidadeB2.com', 
		'linkedin.com/unidadeB2', 
		5, 
		'98.765.432/0001-21'
	),
    (
		'11.222.333/0002-40', 
		'Unidade C1', 
		'contato@unidadeC1.com', 
		'(11) 99999-0008', 
		'Av. C, 301', 
		'34567-890', 
		'www.unidadeC1.com', 
		'linkedin.com/unidadeC1', 
		4, 
		'11.222.333/0001-12'
	),
    (
		'11.222.333/0003-60', 
		'Unidade C2', 
		'contato@unidadeC2.com', 
		'(11) 99999-0009', 
		'Av. C, 302', 
		'34567-890', 
		'www.unidadeC2.com', 
		'linkedin.com/unidadeC2', 
		4, 
		'11.222.333/0001-12'
	)
;

-- Vagas
INSERT INTO vagas (titulo, descricao_detalhada, area_atuacao, experiencia_necessaria, remuneracao, data_inicio, data_termino, descricao_status, cnpj_unidade, id_escolaridade, id_status)
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
		'98.765.432/0002-80', 
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
		'11.222.333/0002-40', 
		6, 
		1
	)
;

-- Candidatos
INSERT INTO candidato (nome_candidato, email_candidato, telefone, experiencia_profissional, habilidades, link_linkedin, senha, curriculo, id_escolaridade, id_ramo)
	VALUES 
    (
		'João Pedro', 
		'joaopedro1@example.com', 
		'(11) 99999-0006', 
		'Nenhuma', 
		'Nenhuma', 
		'linkedin.com/joaopedro1', 
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
		'linkedin.com/mohammadsss2', 
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
		'linkedin.com/anamama3', 
		'senha123', 
		'curriculo.pdf', 
		6, 
		2
	),
    (
		'Vitor Paes', 
		'vitorpaes4@example.com', 
		'(11) 99999-0009', '5 anos de experiência', 
		'Gerenciamento de Projetos', 
		'linkedin.com/vitorpaes4', 
		'senha123', 
		'curriculo.pdf', 
		9, 
		4
	)
;


-- Candidaturas
INSERT INTO candidatura_recebe (data_candidatura, id_status, id_vagas, id_candidato)
	VALUES 
    ('2023-10-03', 1, 1, 2), -- Candidato 2 se candidata à vaga 1
    ('2023-11-30', 3, 2, 4), -- Candidato 4 se candidata à vaga 2
    ('2023-12-02', 1, 3, 3), -- Candidato 3 se candidata à vaga 3
    ('2024-10-02', 1, 1, 4), -- Candidato 4 se candidata à vaga 1
    ('2024-10-03', 1, 2, 4); -- Candidato 4 se candidata à vaga 2

-- SELECTS


-- Todas as vagas de uma empresa matriz específica

SELECT *
FROM vagas
WHERE cnpj_unidade = '12.345.678/0002-70'; 

