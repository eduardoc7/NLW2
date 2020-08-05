import express from 'express';


const app = express();

// cada rota é um caminho para um endereço existente na nossa aplicação 
// resources o que vem depois da / da url padrão 

app.get('/users', (request, response) => {
  console.log('Acessou a log.');

  const users = [
    { name: 'Eduardo' },
  ];

  return response.json(users)
});

// ouvindo requisições http
app.listen(3333);

