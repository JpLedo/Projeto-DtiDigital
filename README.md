# Projeto-DtiDigital
Projeto feito para testar habilidades em front-end

Detalhando o projeto: A ideia foi construir uma agenda de lembretes com o conhecimento que eu tinha.

Usei HTML, CSS e JavaScript.
------------- HTML-------------
Na parte de HTML, foi um uso básico. 
Adicionei o CSS.
Fiz a criação do header, parte de cima. 
uma section com o Form dentro e suas divs para representar os campos de texto a serem preenchidos e o botão.

Depois, fiz outra section onde são inseridos os dados a serem plotados da tela, que são os retornos do input.

no fim do html, coloquei os scripts que importei de um site de icone, e o link pro javascript.

------------- CSS -------------

Na parte de CSS fui estilizando o site para que ficasse de maneira mais harmônica possível, organizando as larguras, alturas, cores e bordas do projeto.

------------- JavaScript -------------

A parte do JavaScript é a mais importante, que é onde tudo vai funcionar.

De inicio, comecei pensando em como usar o botão para puxar as informações dos inputs, para isso usei o OnClick no botão para chamar uma função. 

Para captar os dados do input, usei o documentQuerySelector das classes .data e .nome.

trabalhei com uma lista vazia e dei um .push para adicionar o elemento data ao array.

Tive um problema quanto a mudar a data, entao usei uma condicional para verificar se o digito era !==, e entao ele iria adicionar ++ no digito, e plotar na tela.

Caso o dia se mantivesse igual, ele nao adicionaria mais a data. Manteria a data e só adicionaria ações.

Para adicionar essas informações na tela, usei o InnerHtml, e somando com += ao que já tava na tela, para manter interado as ações

Usei também uma div com as funções dentro das ``, para que separasse melhor o código e o foi jeito que encontrei de inserir o 
html pelo JavaScript

Por fim, precisava de uma função para tornar o botao X (de cancelar ação) funcional. A função usa relação de herança(pai,filho)
repeti o remove child no indice 0 para que pudesse deletar a ação e o botão ao mesmo tempo.



