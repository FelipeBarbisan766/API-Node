CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(100),
    userPassword VARCHAR(250),
    CONSTRAINT PK_USERS_ID PRIMARY KEY (id)
);

INSERT INTO users (`userName`, `userPassword`) VALUES 
('jose@gmail.com', '123'),
('marcos@etec.sp.go.br','234'),
('mario@fate.sp.go.br','567'),
('bruno@hotmail','890');

CREATE TABLE municipios (
	id INT NOT NULL AUTO_INCREMENT,
    municipio VARCHAR(100),
    uf VARCHAR(2),
	CONSTRAINT PK_MUNICIPIO_ID PRIMARY KEY (id)
);

INSERT INTO municipios (municipio,uf) VALUES
("Taquaritinga","SP"),
("Joeleville","SC"),
("Rio de Janeiro","RJ");