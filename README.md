![enter image description here](https://i.ibb.co/J3xC2MW/Banner-para-Docs-Resumo-de-Projeto-Moderno-Minimalista-Preto-e-Branco.png)

# Projeto da aula sobre Contexto e Hook Personalizado no React!

Projeto base original: https://github.com/LeviLimaOliveira/reactRouter

# Arquivos

Projeto para ser clonado: https://github.com/Dirceusljr/DC-projeto-aula

## Comandos para clonar o repositório:

 1. Criar uma pasta para o projeto;
 2. Criar um repositório novo;
 3. Abrir o VS Code na pasta do projeto e usar o comando:<br/>
	`git clone https://github.com/Dirceusljr/DC-projeto-aula .`
 4. Usar os seguines comando após o projeto ser clonado:<br/>
	`git init`<br/>
	`git remote set-url origin URL-do-repositório-criado` <br/>
`git add .`<br/>
`git commit -m 'mensagem'`<br/>
`git push -u origin master`

## Refatoração do Código

1. Organização dos arquivos em pastas:
 - Pastas<br/>
 -- Components<br/>
 -- Pages<br/>
 -- Json

2. Arquivo router.jsx dedicado a rotas;
- Filosofia SOLID ([Saiba mais nesse link sobre SOLID)](https://marcosviniciosneves.medium.com/solid-em-react-entendendo-o-single-responsibility-principle-srp-4a2028b35c41)

3. Arquivo main.jsx apenas para renderizar

## Comandos para rodar o JSON Server

    npx json-server -w src/json/db.json

**OBS:** Nesse projeto não foi usado, mas recomendo usar um arquivo para chamado [jsconfig.json](https://github.com/Dirceusljr/React_praticando-com-JS/blob/a7dad71a82fe5c8870415ab789af8a0f077a8eda/jsconfig.json) como esse do link na pasta raiz para ter caminhos de endereços mais curtos.

## Mudanças

![enter image description here](https://i.ibb.co/LxpV6K2/p-gina.png)

1. Criação de uma terceira coluna com três ícones para Favoritos, Editar e Deletar;
2. Página Favoritos com layout semelhante ao de Produtos;

## Estudo de caso

**Problema**
> Passar um estado (favorito) da página Produtos para ser listado na página Favoritos sendo que não há relação pai-filho entre elas e evitar o [prop-drilling](https://www.alura.com.br/artigos/prop-drilling-no-react-js?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=20987928442&hsa_grp=157916200306&hsa_ad=689395782879&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw48-vBhBbEiwAzqrZVHKOgGt1z9KiegMdqG40YOZZXHADlvmDY9k2dT47S5rpLAQYfj9oNhoCglgQAvD_BwE).

**Solução**

> Utilizar React Context para manusear os estados e usar um hook personalizado para o criar uma nova lista.
