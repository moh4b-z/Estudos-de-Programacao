CREATE TABLE tipo_escolaridade (
    id_escolaridade INT AUTO_INCREMENT PRIMARY KEY,
	escolaridade NOT NULL VARCHAR(100)
);
CREATE TABLE tipo_contratacao (
    id_contratacao INT AUTO_INCREMENT PRIMARY KEY,
	contratacao NOT NULL VARCHAR(100)
);

CREATE TABLE tipo_ramo (
    id_ramo INT AUTO_INCREMENT PRIMARY KEY,
	ramo NOT NULL VARCHAR(100)
);

CREATE TABLE status_vagas (
    id_status INT AUTO_INCREMENT PRIMARY KEY,
	status_empresa NOT NULL VARCHAR(20) -- Status (ativa/inativa)
);


CREATE TABLE empresas (
    cnpj VARCHAR(20) NOT NULL UNIQUE PRIMARY KEY,  
    nome_empresa VARCHAR(150) NOT NULL,        
    telefone VARCHAR(20),                 
    email VARCHAR(150) NOT NULL,                    
    endereco VARCHAR(200),                              
    cep VARCHAR(10) NOT NULL,                     
    site_empresa VARCHAR(200),
	id_ramo INT NOT NULL,
	foreign key (id_ramo) references tipo_ramo(id_ramo)
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