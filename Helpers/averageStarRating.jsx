import axios from 'axios';

export default (id) => axios.get(`/meta/${id}`)
  .then((data) => {
    const { ratings } = data.data;
    const numRatings = Object.keys(ratings).reduce((acc, key) => Number(acc)
      + Number(ratings[key]));
    const totalStars = Object.keys(ratings).reduce((acc, key) => Number(acc)
      + Number(ratings[key] * key));
    return totalStars / numRatings;
  });
