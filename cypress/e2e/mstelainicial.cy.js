describe('teste entrando no site', () => {/// automação inicial de entrada no site da majorsports e cadastro de usuário
  it('iniciar', () => {     /// it para  iniciar a spec em uma arrow function
    cy.visit('https://www.marjosports.com/home/game-area');/// nesta linha, entra no site 
    cy.viewport(1538.33,720)///modifica o formato da viewport para manter a interface simulando uma aba maximizada
    
    cy.get('[mat-flat-button=""]')  ///encontra o botão do span inicial 
    .click({force:true});/// força um click no botão para fechar
    cy.get('[class="register-button"]')/// localiza o botão de cadastro
    .click();/// clica no botão
    cy.get('[id="mat-select-0"]')///encontra  lista de paises
    .click()///clica para abrir lista de paises
    .get('[class="cdk-overlay-pane"]')/// encontra o pop up com lista de paises 
    .contains('Brazil')/// localiza o pais
    .click();/// para confirmar pais
    cy.get('[formcontrolname="name"]')/// encontra o input name
    .click()///clica no input name
    .type('Fulano cliclano');///escreve o nome
    cy.get('[formcontrolname="birthDate"]')///encontra o input data de nascimento
    .click()///clica no input data de nascimento
    .type('00000000');///escreve a data toda junta pois o site já padroniza
    cy.get('[formcontrolname="gender"]') ///encontra a lista de genêros
    .click();/// clica para abrir a lista
    cy.get('[class="cdk-overlay-pane"]')///encontra o pop up
    ///.contains('Masculino')///encontra o masculino
    ///.contains('Feminino')///encontra o feminino
    .click();///clica pra confirmar
    cy.get('[formcontrolname="cpf"]')/// encontra o input do cpf
    .click()///clica 
    .type('00000000000');///digita o valor do cpf
    cy.get('[formcontrolname=phoneDDI').click()///encontra o input de DDI
    .clear()///limpa pois inicialmente é direcionado ao DDI brasileiro
    .type('+000')///digitar o DDI
    cy.get('[formcontrolname="phone"]')///encontra o input do telefone
    .click()///clica
    .type('00000000000');/// digita o numero com DDD tudo junto, pois o site padroniza posteriomente
    cy.get('[id="mat-input-7"]')///encontra o input do cadastro do email
    .click()///clica 
    .type('email@email.com.br');/// digita o email
    cy.get('[formcontrolname="username"]')///encontra o input de username
    .click()///clica
    .type('Fulaninho');/// digita username
    cy.get('[formcontrolname="password"]')///encontra o password
    .click()/// clica
    .type('fulano1');/// digita a senha com o mínimo 6 caracteres contendo no mínimo 1 letra e 1 número
    cy.get('[formcontrolname="confirmPassword"]')///encontra o input para confirmar senha
    .click()///clica
    .type('fulano1');/// digita a senha anterior
    cy.get('[formcontrolname="currency"]')/// encontra o lista de moeda corrente 
    .click();/// para abrir a lista
    cy.get('[class="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing"]')///encontra o popup com as moedas
    .click();///clica na moeda Real
    cy.get('[id="mat-checkbox-1-input"]')///encontra o check box de concordancia de termos e condições
    .check({force: true});///da check no checkbox 
    ///cy.get('[class="mat-flat-button mat-button-base mat-general"]')///encontra o botão confirma
    ///.click();///clica no botão de confirmar
    
  })
})