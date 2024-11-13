CREATE TABLE tb_livro(
	id_livro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	editora VARCHAR(100) NOT NULL,
	autor VARCHAR(100) NOT NULL,
	genero VARCHAR(100) NOT NULL,
	numero_exemplar INT NOT NULL,
	ano_Publicacao YEAR NOT NULL
);

CREATE TABLE tb_membro(
	id_membro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	endereco VARCHAR(150) NOT NULL,
	email VARCHAR(100) NOT NULL,
	telefone VARCHAR(20) NOT NULL,
	data_registro date NOT NULL
);

CREATE TABLE tb_emprestemo(
	id_emprestemo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	data_devolucao date NOT NULL,
	data_emprestimo date NOT NULL,
	id_livro INT NOT NULL,
	id_membro INT NOT NULL,
	foreign key (id_livro) references tb_livro(id_livro),
	foreign key (id_membro) references tb_membro(id_membro)
);

INSERT INTO tb_membro (nome, telefone, email, endereco, data_registro)
	VALUES (
	'Mohammad', 
	'(11)98798-8888',
	'moahsmamssali1000@gmail.com',
	'Rua pisal, 888 - jandira/SP',
	'2024-08-21'
	);
	
SELECT * FROM tb_membro;

INSERT INTO tb_membro (nome, telefone, email, endereco, data_registro)
	VALUES (
	'Vitor', 
	'(11)98978-8688',
	'vitori1000@gmail.com',
	'Rua pisal, 189 - jandira/SP',
	'2024-08-21'
	);
	
INSERT INTO tb_membro (nome, telefone, email, endereco, data_registro)
	VALUES (
	'Zumba', 
	'(11)91178-8688',
	'amoLOL@gmail.com',
	'Rua pisaldeiro, 19 - jandira/SP',
	'2024-06-19'
	);
	
INSERT INTO tb_membro (nome, telefone, email, endereco, data_registro)
	VALUES (
	'Gabrielzinho', 
	'(11)9778-8688',
	'nod@gmail.com',
	'Rua pisaldeiro, 19 - jandira/SP',
	'2024-06-19'
	);
	
	
SELECT nome, telefone FROM tb_membro ORDER BY nome;

INSERT INTO tb_livro (titulo, autor , numero_exemplar , ano_Publicacao , editora, genero )
	VALUES 
	(
	'O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios', 
	'Charles Duhigg',
	2,
	2012,
	'OBJETIVA',
	'filosofia'
	),
	(
	'A arte da guerra', 
	'Sun Tzu',
	100,
	2019,
	'não possuir',
	'filosofia'
	),
	(
	'o mundo', 
	'Mohammad',
	10,
	2009,
	'não possuir',
	'terro'
	),
	(
	'o mundo invertido', 
	'Mohammad',
	10,
	2017,
	'não possuir',
	'terro'
	)
	;

	
INSERT INTO tb_emprestemo (data_emprestimo, data_devolucao , id_livro , id_membro )
	VALUES 
	('2024-08-14', '2024-08-28', 3, 4),
	( '2024-08-15', '2024-08-22', 2, 3),
	('2024-08-15', '2024-08-22', 4, 1),
	('2024-08-14', '2024-08-21', 1, 2)
	;
	
INSERT INTO tb_livro (titulo, autor , numero_exemplar , ano_Publicacao , editora, genero )
	VALUES (
	'o mundo invertido', 
	'Aditya Y. Bhargava',
	10000,
	2017,
	'Novatec Editora',
	'progtamação'
	);
	
	
	
CREATE TABLE tb_genero(
	id_genero INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome_genero VARCHAR(100) NOT NULL
);

INSERT INTO tb_genero (nome_genero)
	VALUES 
	('terro'),
	('filosofia'),
	('programacao');
