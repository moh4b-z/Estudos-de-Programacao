CREATE TABLE tb_genero (
    id_genero INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(100) NOT NULL
);

CREATE TABLE tb_paises (
    id_paises INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(100) NOT NULL
);


CREATE TABLE tb_filme (
    id_filme INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    duracao DECIMAL(5,2) NOT NULL,  
    custo DECIMAL(10,2) NOT NULL,
    sinopse VARCHAR(1500) NOT NULL
);

CREATE TABLE tb_serie (
    id_serie INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sinopse VARCHAR(1500) NOT NULL
);


CREATE TABLE tb_episodio (
    id_episodio INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    duracao DECIMAL(5,2) NOT NULL,  
    custo DECIMAL(10,2) NOT NULL,
    sinopse VARCHAR(1500) NOT NULL
    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tb_serie(id_serie)
);

CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nacimento DATE NOT NULL, 
    email VARCHAR(150) NOT NULL
    id_paises INT NOT NULL,
    FOREIGN KEY (id_paises) REFERENCES tb_paises(id_paises)
);

CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(1500) NOT NULL,
    data_fundacao DATE NOT NULL, 
    email VARCHAR(150) NOT NULL
    id_paises INT NOT NULL,
    FOREIGN KEY (id_paises) REFERENCES tb_paises(id_paises)
);