import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.css';
import WriteAReview from './WriteAReview/WriteAReview';
// import SampleReviews from '../../SampleData/SampleReviews';
import ReviewsList from './ReviewsList/ReviewsList';
import ProductContext from '../../ProductContext';

const RatAndRev = ({ currentProduct }) => {
  const reviewURL = '/reviews';
  const [currentRevs, setCurrentRev] = useState([]);
  const {
    currentProductAvgRating,
    setCurrentProductAvgRating,
    setErrorCode,
    setIsError,
  } = useContext(ProductContext);
  const [numRevsToGet, setNumRevsToGet] = useState(2);
  const [openWriteReviewModal, setOpenWriteReviewModal] = useState(false);
  const [numRevsGotten, setNumRevsGotten] = useState(2);

  const getReviews = (id, number) => {
    axios.get(`${reviewURL}/${id}/${number}`)
      .then(({ data }) => {
        setCurrentRev(data.results);
        setNumRevsGotten(data.results.length);
      })
      .catch((err) => {
        setErrorCode(err.response.status);
        setIsError(true);
      });
  };
  useEffect(() => {
    getReviews(currentProduct.id, numRevsToGet);
  }, [currentProduct]);

  const loadMoreReviews = (num) => {
    getReviews(currentProduct.id, num);
  };

  return (
    <div data-testid="ratAndRev" id="ratAndRev" className="ourContainer">
      <h1>Ratings and Reviews</h1>
      <ReviewsList
        currentRevs={currentRevs}
        reviews={currentRevs}
      />
      <div>
        {numRevsGotten >= 2 ? <input type="button" className="ourButton" value="Load More Reviews" onClick={() => loadMoreReviews(numRevsToGet + 2)} /> : null}
        <input type="button" className="ourButton" value="Write A Review" onClick={() => setOpenWriteReviewModal(true)} />
        <WriteAReview
          openModal={openWriteReviewModal}
          setOpenModal={setOpenWriteReviewModal}
          currentProductId={currentProduct.id}
        />
      </div>
    </div>
  );
};

RatAndRev.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default RatAndRev;
