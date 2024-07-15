const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log('Start server');
});

const users = [
  {id: 1, name: 'John', status: 'user',},
  {id: 2, name: 'Levi', status: 'user',},
  {id: 3, name: 'Wolter', status: 'user',}
]

app.get('/', (request, response) => {
  response.send('Welcome!');
});

app.get('/users', (request, response) => {
  response.send(users);
});

app.post('/users', (request, response) => {
  console.log('req', request.body);
  users.push({...request.body, id: Math.random() * 2});

  response.send(request.body);
  
});

app.get('/users/:id', (request, response) => {
  const user = users.find(user => user.id === +request.params.id);

  if (!user) {
    return response.status(404);
  }

  response.send(user);
  
});