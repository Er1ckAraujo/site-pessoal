---
title: Como montei meu site e meu e-mail profissional com o Claude Code
description: Domínio, e-mail, segurança e o próprio site, pagando só pelo domínio. O Claude Code executou; eu dirigi, conferi e corrigi o rumo.
date: 2026-11-09
---

Eu queria um lugar na internet que fosse meu. O LinkedIn é útil, mas a página é deles, com as regras deles. Um site com o meu nome no endereço e um e-mail no mesmo domínio resolvem isso: qualquer pessoa me encontra e fala comigo, e eu decido o que aparece.

O objetivo era ter tudo funcionando pagando só pelo domínio. Fiz o projeto inteiro com o Claude Code, um assistente de IA que escreve código, executa comandos e opera o navegador. Ele fez boa parte do trabalho braçal. As decisões, as correções de rumo e a conferência de cada etapa ficaram comigo, e é isso que este texto conta.

## Como dividi o trabalho

Antes de começar, defini as regras:

- o objetivo e o limite de custo eram meus;
- logins, senhas e pagamentos, só eu faço;
- nada é alterado sem que eu peça, e nenhum texto vai ao ar sem a minha revisão;
- toda etapa é conferida antes da seguinte.

Com isso, o Claude Code trabalhava como um parceiro técnico rápido: pesquisava a documentação, preparava as configurações, executava os passos no navegador depois que eu entrava nas contas e verificava o resultado.

## O domínio e o e-mail

Registrei o `erickaraujodados.com.br` no Registro.br. É o único custo do projeto, pago uma vez por ano.

O plano inicial era usar o Google Workspace. Na hora de pagar, o sistema só aceitava CNPJ, e eu ainda não tenho empresa aberta. Troquei pelo Zoho Mail, que tem um plano gratuito com caixa de entrada própria e aplicativo no celular.

Criar a caixa é a parte fácil. O trabalho está em fazer os provedores, como Gmail e Outlook, confiarem nos e-mails que saem de um domínio novo. Para isso, publicamos três configurações no domínio:

- uma lista de quem tem autorização para enviar e-mails em meu nome;
- uma assinatura digital em cada mensagem enviada;
- uma regra que diz aos provedores o que fazer com mensagens que falham nessas duas verificações.

Testei mandando e recebendo mensagens do Gmail, e o Claude Code leu o cabeçalho de cada uma para confirmar que as verificações passavam.

## A troca de endereço do domínio

Para publicar o site do jeito que eu queria, precisei mudar quem responde pelo domínio na internet, do Registro.br para a Cloudflare. Essa troca, se feita sem cuidado, derruba o e-mail.

Antes de mudar, as configurações do e-mail foram comparadas uma a uma nos dois lugares, inclusive uma chave com mais de duzentos caracteres. Só troquei quando estavam idênticas. O e-mail não parou de funcionar.

Havia um detalhe que eu não conhecia: o domínio tinha uma proteção ligada que garante que quem acessa o endereço chega ao lugar certo, e não a uma cópia falsa. Na troca, essa proteção precisa ser desligada e depois ligada de novo no lugar novo. Antes de religar, o código de segurança foi recalculado por outro caminho, para ter certeza de que estava certo. Depois conferimos, em mais de um serviço público, que a proteção voltou a funcionar.

## O site

O site é estático: páginas prontas, sem banco de dados e sem nada rodando no servidor. Isso deixa tudo rápido, barato e com pouco a dar errado.

Foi aqui que mais precisei dirigir. A primeira versão funcionava, mas tinha cara de site feito por IA, igual a tantos outros. Em vez de pedir "faça mais bonito", dei contexto: três sites de referência, as palavras que eu queria que o visitante sentisse (sobriedade, seriedade, bom gosto) e o meu LinkedIn como fonte do conteúdo. Com isso vieram três propostas bem diferentes. Escolhi uma e combinei nela duas ideias das outras: o meu nome em destaque e a trajetória em forma de linha do tempo.

Também peguei um erro que teria passado. No currículo que montei com a IA, uma experiência minha tinha sido juntada com outra e sumido. Conferi cargo por cargo com o LinkedIn e corrigi. Uma IA trabalha com o que recebe, e conferir continua sendo trabalho meu.

Por fim, reescrevi os textos pensando em quem não trabalha com dados. Onde estava "pipelines", hoje está "fluxos de dados". Os nomes técnicos ficaram só nas listas de ferramentas.

## O que eu levo disso

Usar bem uma ferramenta como o Claude Code é parecido com liderar um projeto: dizer com clareza o que se quer, dar contexto em vez de pedir no escuro, definir limites e conferir a entrega. Quando eu fazia isso, o resultado vinha rápido e bom. Quando eu deixava algo vago, vinha o genérico.

É o mesmo hábito que uso no trabalho com dados: não seguir para a próxima etapa sem conferir a anterior.

O código do site é aberto e está no meu [GitHub](https://github.com/Er1ckAraujo/site-pessoal).
