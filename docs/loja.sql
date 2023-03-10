DROP DATABASE IF EXISTS loja;
CREATE DATABASE loja CHARSET=UTF8 COLLATE utf8_general_ci;
USE loja;

CREATE TABLE sucos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    valor DECIMAL(5,2) NOT NULL
);

INSERT INTO sucos VALUES
('','suco de maracujá', 'um delicioso suco de maracujá', 10.00),
('','suco de limao', 'um delicioso suco de limao', 10.00),
('','suco de uva', 'um delicioso suco de uva', 10.00),
('','suco de morango', 'um delicioso suco de morango', 10.00),
('','suco de tamarindo', 'um delicioso suco de tamarindo', 10.00);