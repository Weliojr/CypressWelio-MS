Esta spec se trata de uma automação para teste ao inicar a tela home do Site majorsports e cadastro na plataforma. Simulando um cadastro brasileiro usando a moeda nacional.

A spec encontra-se na pasta cypress/e2e/mstelainicial.cy.js

O cypress pode apresentar erros, sendo eles:
Não carregar as informações na tela antes da execução da função, fazendo com que não seja encontrado o input, o botão antes do tempo de execução do .get ou .click. ou .check.

1° erro que pode aperecer é demorar para carregar o site, para corrigir, basta dar restart na spec.

2° erro que pode aparecer é a demora para aparecer o span incial, pois se ele não aparecer o spec não localiza para fechar. Para corrigir basta dar restart na spec.

3° erro que pode aparecer é não carregar a lista de gêneros, ficando em branco não é possível localizar, para corrigir dar restart na spec.

Estes 3 erros foram identificados no desenvolvimento desta spec.
