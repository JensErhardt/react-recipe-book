import React, { Component } from 'react';
import api from '../api';

class DishDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dish: []
    }
  }
  componentDidMount() {
    api.getDishDetails(this.props.match.params.id)
      .then(dishDetails => {
        console.log("getDishDetails", dishDetails)
        this.setState({
          dish: dishDetails
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return(
    <div className="dishDetails">
      <h2>Dish Details</h2>
      Name: {this.state.dish.name} <br />
      Description: {this.state.dish.description} <br />
      <img src={this.state.dish.image} alt="dish-pic" width="200" />
    </div>
    )}
}

export default DishDetail;