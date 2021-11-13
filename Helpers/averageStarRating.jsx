import axios from 'axios';
import { useContext } from 'react';
import ProductContext from '../src/ProductContext';


export default (id, errorCB) => {
  if (id) {
    return axios.get(`/meta/${id}`)
      .then((data) => {
        const { ratings } = data.data;
        if (Object.keys(ratings).length) {
          const numRatings = Object.keys(ratings).reduce((acc, key) => Number(acc)
            + Number(ratings[key]));
          const totalStars = Object.keys(ratings).reduce((acc, key) => Number(acc)
            + Number(ratings[key] * key));
          return totalStars / numRatings;
        }
        return 0;
      })
      .catch(errorCB);
  }
  return new Promise(() => 0);
};
