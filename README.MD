# [Desafio] Lista de compras em Angular + express

> Uma pequena aplicação em **Angular** e **express** que deve apresentar uma lista de compras com capacidade de adicionar, editar, deletar e modificar os items

# Projeto
O projeto foi desenvolvido em **[Angular](https://angular.io)** e **[express](https://expressjs.com)** com banco de dados em **[mySql](https://www.mysql.com)**

Está dividido em `api/` e `web/` contento uma aplicação **REST** e uma **Angular** respectivamente

# Dependências

## MySql
Um *dump* do banco se encontra em `assets/local-dump.sql`

Há um modelo do banco disponível em `assets/model.mwb`


> As informações de conexão com o banco podem ser ajustadas em `api/config/config.json`

> Altarnativamente, é possível ajustar o valor do `NODE_ENV` em `api/.env` para `test` e usar um banco de testes no servidor de [dihgg.com](http://dihgg.com)

## API
- Navegue até a pasta da *api*: `$ cd api`
- Instale as dependências: `$ npm install`
- Inicie o servidor: `$ npm run start`

A aplicação pode ser acessada em [localhost:3000/api/](localhost:3000/api/)

> Todas as chamads foram testadas usando o app [INSOMNIA](https://insomnia.rest). Um *workspace* com todas as chamadas se encontra em `assets/Insomnia-requests.json` e pode ser importado.

## Angular
- Navegue até a pasta da aplicação **web**: `$ cd web`
- Instale as dependências: `$ npm install`
- Sirva a aplicação **Angular** com `$ npm run start`

A aplicação pode ser acessada em [http://localhost:4200](http://localhost:4200)

# Testes
## API
- na pasta `api/`
- rodar os testes com `$ npm run test`

---
<sub>Depois que a aplicação funcionar: [Disco!](https://www.youtube.com/watch?v=UkSPUDpe0U8)</sub>