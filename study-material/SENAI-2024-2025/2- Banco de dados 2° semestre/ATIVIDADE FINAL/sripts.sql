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
    sinopse VARCHAR(1500) NOT NULL,
    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tb_serie(id_serie)
);

CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nacimento DATE NOT NULL, 
    email VARCHAR(150) NOT NULL,
    id_paises INT NOT NULL,
    FOREIGN KEY (id_paises) REFERENCES tb_paises(id_paises)
);

CREATE TABLE tb_produtora (
    id_produtora INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(1500) NOT NULL,
    data_fundacao DATE NOT NULL, 
    email VARCHAR(150) NOT NULL,
    id_paises INT NOT NULL,
    FOREIGN KEY (id_paises) REFERENCES tb_paises(id_paises)
);


CREATE TABLE tb_filme_assistido (
    nota DECIMAL(4,2),
    comentario VARCHAR(1500),
    data_de_visualizacao DATE NOT NULL,

    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario),

    id_filme INT NOT NULL,
    FOREIGN KEY (id_filme) REFERENCES tb_filme(id_filme)
);

CREATE TABLE tb_serie_assistida (
    nota DECIMAL(4,2),
    comentario VARCHAR(1500),
    episodios_assistidos INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE,

    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario),

    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tb_serie(id_serie)
);

CREATE TABLE tb_paises_filme (

    id_paises INT NOT NULL,
    FOREIGN KEY (id_paises) REFERENCES tb_paises(id_paises),

    id_filme INT NOT NULL,
    FOREIGN KEY (id_filme) REFERENCES tb_filme(id_filme)
);

CREATE TABLE tb_paises_serie (
    id_paises INT NOT NULL,
    FOREIGN KEY (id_paises) REFERENCES tb_paises(id_paises),

    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tb_serie(id_serie)
);

CREATE TABLE tb_produtora_filme (

    id_produtora INT NOT NULL,
    FOREIGN KEY (id_produtora) REFERENCES tb_produtora(id_produtora),

    id_filme INT NOT NULL,
    FOREIGN KEY (id_filme) REFERENCES tb_filme(id_filme)
);

CREATE TABLE tb_produtora_serie (
    id_produtora INT NOT NULL,
    FOREIGN KEY (id_produtora) REFERENCES tb_produtora(id_produtora),

    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tb_serie(id_serie)
);


CREATE TABLE tb_tipo_genero_filme (

    id_genero INT NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES tb_genero(id_genero),

    id_filme INT NOT NULL,
    FOREIGN KEY (id_filme) REFERENCES tb_filme(id_filme)
);

CREATE TABLE tb_tipo_genero_serie (
    id_genero INT NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES tb_genero(id_genero),

    id_serie INT NOT NULL,
    FOREIGN KEY (id_serie) REFERENCES tb_serie(id_serie)
);