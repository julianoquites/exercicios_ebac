#language: pt

Funcionalidade: Configurar produto
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamanho e gosto
E escolher a quantidade
Para depois inserir no carrinho

Contexto:
Dado que eu acesse a página de um produto da EBAC-SHOP

Esquema do Cenário: Seleções são obrigatórias
Quando eu for adicionar o produto <produto> no carrinho
E não tiver selecionado <tamanho>, <cor> e <quantidade>
Então deve exibir uma mensagem de alerta "Por favor, selecione o tamanho, cor e quantidade"

Exemplos:
| produto                 | tamanho | cor    | quantidade |
| Augusta Pullover Jacket |         | Orange | 1          |

Cenário: Comprar mais de 10 produtos iguais não é permitido
Quando eu selecionar mais de 10 itens do mesmo produto
E clicar no botão "Comprar"
Então deve exibir uma mensagem de alerta "Máximo 10 produtos por compra"

Cenário: Botão limpar retorna ao estado original
Quando eu tiver selecionado as opções de cor e tamanho que gostaria
E clicar no botão "Limpar"
Então deve limpar todas as seleções de cor e tamanho
