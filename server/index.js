/* eslint-disable no-console */
const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');
const path = require('path');
const process = require('process');

const app = express();
const port = 3000;
// const API_KEY = require('../config');

require('dotenv').config();

app.use(express.static('dist'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const headers = {
  Authorization: process.env.API_KEY,
};

app.get('/product/*', (req, res) => {
  if (req.path.endsWith('bundle.js')) {
    res.sendFile(path.join(process.cwd(), '/dist/bundle.js'), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  } else if (req.path.endsWith('.css')) {
    res.sendFile(path.join(process.cwd(), '/dist/styles.css'), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  } else {
    res.sendFile(path.join(process.cwd(), '/dist/index.html'), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
  }
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
    .catch((err) => {
      console.log(err);
      res.status(401).end();
    }); /// handle this better
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

app.get('/reviews/:id/:number', (req, res) => {
  const { id, number } = req.params;
  const reviewsURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews?product_id=${id}&count=${number}`;
  axios.get(reviewsURL, { headers })
    .then(({ data }) => res.send(data))
    .catch(() => res.status(404).end());
});

app.get('/products/:id/related', (req, res) => {
  const { id } = req.params;
  const productURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`;
  axios.get(productURL, { headers })
    .then((data) => res.send(data.data))
    .catch(() => res.status(401).end()); /// handle this better
});

app.post('/postAnswer/:id', (req, res) => {
  const { id } = req.params;
  const addAnswerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${id}/answers`;
  axios({
    method: 'post',
    url: addAnswerURL,
    data: req.body,
    headers,
  })
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
});

app.post('/postQuestion/', (req, res) => {
  const addQuestionURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/';
  axios({
    method: 'post',
    url: addQuestionURL,
    data: req.body,
    headers,
  })
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
});

app.put('/updateQuestionHelpfulness/:id', (req, res) => {
  const { id } = req.params;
  const updateQuestionHelpfulnessURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${id}/helpful`;
  axios.put(updateQuestionHelpfulnessURL, {}, { headers })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
});

app.put('/updateAnswerHelpfulness/:id', (req, res) => {
  const { id } = req.params;
  const updateAnswerHelpfulnessURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${id}/helpful`;
  axios.put(updateAnswerHelpfulnessURL, {}, { headers })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
});

app.post('/writeReview/', (req, res) => {
  const addReviewURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/';
  axios({
    method: 'post',
    url: addReviewURL,
    data: req.body,
    headers,
  })
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
});

app.put('/updateReportAnswer/:id', (req, res) => {
  const { id } = req.params;
  const updateReportAnswerURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${id}/report`;
  axios.put(updateReportAnswerURL, {}, { headers })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
});

app.post('/cart/', (req, res) => {
  const { skuId, count } = req.body;
  const cartURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart/';
  axios.post(cartURL, { sku_id: skuId, count }, { headers })
    .then(() => res.status(201).send())
    .catch((err) => res.status(err.response.status).send());
});

app.get('/meta/:id', (req, res) => {
  const { id } = req.params;
  const reviewsMetaURL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${id}`;
  axios.get(reviewsMetaURL, { headers })
    .then(({ data }) => res.send(data))
    .catch(() => res.status(500).end());
});
