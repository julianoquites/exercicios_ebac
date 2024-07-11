#language: pt

Funcionalidade: Login na plataforma
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Contexto:
Dado que eu acesse a página de autenticação da loja EBAC-SHOP

Cenário: Autenticação válida
Quando eu digitar o usuário "juliano@ebac.com.br"
E a senha "senha123"
Então deve ser direcionado para a tela de checkout

Cenário: Usuário inválido
Quando eu digitar o usuário "jjjjjj@ebac.com.br"
E a senha "senha123"
Então deve exibir uma mensagem de alerta "Usuário ou senha inválidos"

Cenário: Usuário com senha inválida
Quando eu digitar o usuário "juliano@ebac.com.br"
E a senha "asdasdasdasda"
Então deve exibir uma mensagem de alerta "Usuário ou senha inválidos"