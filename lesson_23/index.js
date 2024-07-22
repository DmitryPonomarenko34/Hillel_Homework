const express = require('express');

const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://jehod20216:3YcXwNxD4PCOToUv@schooltest.litxg8o.mongodb.net/?retryWrites=true&w=majority&appName=schoolTest");

const Schema = mongoose.Schema;

const TodosSchema = Schema({
  text: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false,
  }
}, {versionKey: false});

const TodoModel = mongoose.model('Todos', TodosSchema);

app.listen(5000, () => {
  console.log('Start server');
});

app.get('/', (request, response) => {
  response.send('Welcome!');
});

app.get('/todos', (request, res) => {
  TodoModel.find().then(response => res.send(response));
});

app.post('/todos', (request, res) => {
  const todo = new TodoModel(request.body);

  todo.save().then(response => res.send(response))
});

app.get('/todos/:id', (request, res) => {
  TodoModel.findById(request.params.id).then(response => res.send(response));
});

app.put('/todos/:id', (request, res) => {
  const id = request.params.id;
  const todo = request.body;

  TodoModel.updateOne({_id: id}, todo)
    .then(() => TodoModel.findById(id))
    .then((response) => res.send(response));
});

app.delete('/todos/:id', (request, res) => {
  TodoModel.findByIdAndDelete(request.params.id).then(response => res.send(response));
});

module.exports = TodoModel;
