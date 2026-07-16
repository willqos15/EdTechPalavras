# EdTech Palavras

Aplicação web desenvolvida em **React + Vite**, **TypeScript** e **Tailwind** , O projeto foi pensado para uso em sala de aula, onde o professor administra todo o jogo, expondo a tela numa TV ou Datashow. O objetivo é criar uma maneira de abordar conteúdos pedagógicos de forma gamificada gerando engajamento na turma.

---

## Screenshots


![Tela Inicial](https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153600_gs2kk2.png)
![Partida Iniciada](https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153930_ju7dmb.png)
![Poup Imagem](https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153747_hxchmf.png)
![Poup Sortear](https://res.cloudinary.com/drklvmtqp/image/upload/v1768502489/Captura_de_tela_2026-01-15_153804_bev9xl.png)
![Poup Dúvidas](https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153828_wzhvql.png)
![Poup Sobre](https://res.cloudinary.com/drklvmtqp/image/upload/v1768502490/Captura_de_tela_2026-01-15_153847_rmimdc.png)


---

## Como funciona 

### 1 - Como a turma é organizada?
A turma é dividida em 2 ou 4 equipes.

### 2 - Quem controla o jogo?
Somente o professor controla a aplicação, exibindo o jogo em uma TV ou DataShow.

### 3- Quem começa jogando?
O professor pode definir manualmente a equipe inicial ou usar a aba "Sortear".

### 4 - Como funciona cada rodada?
Um aluno da equipe escolhe uma letra por rodada.
O aluno só pode jogar novamente após todos de sua equipe participarem.

### 5 - É permitido adivinhar a palavra inteira?
Sim. O aluno pode tentar adivinhar a palavra completa a qualquer momento.
Se acertar, a equipe ganha o ponto imediatamente.

### 6 - Existe ajuda durante a rodada?
A equipe pode revelar uma dica da palavra com custo de 1 ponto de energia.

### 7 - Como funciona a pontuação por comportamento?
A equipe recebe Bônus ou Penalidade no placar total a depender do comportamento.

- Comportamento muito ruim: -2 pontos

- Comportamento ruim: -1 ponto

- Comportamento mediano: 0 ponto

- Comportamento bom: +1 ponto

- Comportamento muito bom: +2 pontos

## 8 - Como se ganha o jogo?
Ganha a equipe que somar mais pontos ao final, considerando acertos e comportamento.

## 9 - As regras são fixas?
Não. As regras podem ser adaptadas conforme a necessidade do professor. 

---

## Registro de Erros e Acertos

- O sistema tem uma função de Salvar que gera um documento word as seguintes informações:

- Letras corretas

- Palavras corretas

- Erros cometidos

- Palavras completadas

- Energia usada

- Observações do professor


---


## Principais arquivos

`countcard.tsx`
Componente responsável por exibir e atualizar pontuações, energia e estado visual das equipes.

`poup.tsx`
Componente de popup/modal usado para exibir mensagens, dicas ou confirmações durante o jogo.

`Pprincipal.tsx`
Página principal da aplicação com estado do jogo, regras de pontuação, controle do professor e lógica de consumo de energia para revelar dicas


---

### Rotas do projeto

```
├── public/
│   ├── bg.png
│   ├── icon.svg
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── countcard.tsx
│   │   └── poup.tsx
│   │
│   ├── page/
│   │   └── Pprincipal.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---


## 👨‍💻 Sobre o autor

Desenvolvido por William Queiroz
🔗 Portfólio: (https://queirozdeveloper.vercel.app/)


