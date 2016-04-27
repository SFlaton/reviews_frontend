import React from 'react';

class Review extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: []
    };
  }

  componentDidMount(){
      this.setState({
        reviews: [{content: 'review for Wouter, lalala'}],
      });
  }

  render() {
      let reviews = this.state.reviews.map(function(review){
        return <li key={review.id}><h1>Review: {review.content}</h1></li>;
      });

      return (
        <ul>
          {reviews}
        </ul>
      )
  }
}

export default Review;
