import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail.jsx';
// import QandA from '../QuestionsAnsAnswers/QuestionsAndAnswers.jsx';
// import RandOC from '../RelatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
// import RatAndRev from '../RatingsAndReviews/RatingsAndReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id='app'>
        <h1>Hello from App</h1>
        <ProductDetail/>
      </div>
    )
  }
}

export default App;