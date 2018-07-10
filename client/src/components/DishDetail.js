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
    api.getDishDetails()
      .then(dishDetails => {
        console.log("getDishDetails")
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
      Number: {this.state.dish.description} <br />
    </div>
    )}
}

export default DishDetail;