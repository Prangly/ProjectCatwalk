/* eslint-disable no-console */
const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const API_KEY = require('../config');

app.use(express.static('dist'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const headers = {
  Authorization: API_KEY,
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`FEC app listening at http://localhost:${port}`);
});

app.get('/styles/:id', (req, res) => {
  const { id } = req.params;
  const stylesURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`;
  axios.get(stylesURL, { headers })
    .then((data) => res.send(data.data))
    .catch(() => res.status(401).end()); /// handle this better
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const productURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`;
  axios.get(productURL, { headers })
    .then((data) => res.send(data.data))
    .catch(() => res.status(401).end()); /// handle this better
});

app.get('/questions/:id/:number', (req, res) => {
  const { id, number } = req.params;
  const productQuestionsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=${id}&count=${number}`;
  axios.get(productQuestionsURL, { headers })
    .then(({ data }) => res.send(data))
    .catch(() => res.status(401).end());
});

app.get('/answers/:id/:number', (req, res) => {
  const { id, number } = req.params;
  const answersURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${id}/answers?count=${number}`;
  axios.get(answersURL, { headers })
    .then(({ data }) => res.send(data))
    .catch(() => res.status(404).end());
});

app.post('/postAnswer/:id', (req, res) => {
  const { id } = req.params;
  const addAnswersURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${id}/answers`;
  axios({
    method: 'post',
    url: addAnswersURL,
    data: req.body,
    headers,
  })
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
});
