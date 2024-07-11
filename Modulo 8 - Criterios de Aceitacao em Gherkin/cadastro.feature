#language: pt

Funcionalidade: Tela de cadastro - Checkout
Como cliente da EBAC-SHOP
Quero concluir meu cadastro
Para finalizar minha compra

Contexto:
Dado que eu acesse a página de cadastro da EBAC-SHOP

Esquema do Cenário: Dados com asteriscos são obrigatórios
Quando eu for me cadastrar apertando o botão "FINALIZAR COMPRA"
E não tiver preenchido <nome>, <sobrenome>, <pais>, <endereco>, <cidade>, <cep>, <telefone> e <email>
Então deve exibir uma mensagem de alerta "Por favor, preencha todos os campos com asterisco"

Exemplos:
| nome    | sobrenome | pais   | endereco | cidade       | cep       | telefone   | email               |
| Juliano | Quites    | Brasil |          | Porto Alegre | 90900-200 | 5199998888 | juliano@ebac.com.br |

Cenário: Campo de e-mail com formato inválido
Quando eu estiver me cadastrando
E preencher o campo de e-mail com "juliano!@ebac.com.br"
Então deve exibir uma mensagem de alerta "e-mail inválido"

Esquema do Cenário: Cadastro com campos vazios é inválido
Quando eu apertar o botão "FINALIZAR COMPRA"
E deixar os campos <nome>, <sobrenome>, <pais>, <endereco>, <cidade>, <cep>, <telefone> ou <email> vazios
Então deve exibir uma mensagem de alerta "Por favor, preencha os campos com informações válidas"

Exemplos:
| nome    | sobrenome | pais   | endereco   | cidade       | cep       | telefone   | email               |
| Juliano |           | Brasil | Av. Gloria | Porto Alegre | 90900-200 | 5199998888 | juliano@ebac.com.br |