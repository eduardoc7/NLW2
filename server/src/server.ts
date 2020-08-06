import express from 'express';
import routes from './routes';

// parametros que podemos receber na API, com o método POST:
// corpo (request.body): Dados para criação ou atualização de um registro.
// Route Params (request.params): Identifica qual recurso dentro da nossa API eu quero deletar ou atualizar.
// Query Params (request.query): Uma forma otimizada pra buscar o que queremos da API. Paginação, filtros, ordenação.


const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);