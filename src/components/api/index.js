import axios from 'axios';

export const productAPI = (prodId, successCB, errorCB) => {
  if (prodId) {
    axios.get(`/products/${prodId}`)
      .then(successCB)
      .catch(errorCB);
  }
};

export const stylesAPI = (currentProductID, successCB, errorCB) => {
  axios.get(`/styles/${currentProductID}`)
    .then(successCB)
    .catch(errorCB);
};
