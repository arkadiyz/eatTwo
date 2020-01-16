import React, { Component } from 'react';
import { connect } from 'react-redux';

import { load } from '../actions/MealActions';

import MealList from '../components/MealList';

export class MealApp extends Component {
  componentDidMount() {
    this.props.load();
    console.log(this.props.meals);
  }

  getAvgRate(reviews) {
    return reviews.reduce((acc, currReview) => acc + currReview.rate, 0) / reviews.length;
  }

  render() {
    return <div className='container'>{this.props.meals.length && <MealList meals={this.props.meals} getAvgRate={this.getAvgRate}></MealList>}</div>;
  }
}

const mapStateToProps = state => ({
  meals: state.meal.meals,
});

const mapDispatchToProps = {
  load,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealApp);
