import React, { Component } from 'react';
import api from '../api';

class Dishes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: []
    }
  }

  componentDidMount() {
    api.getDishes()
      .then(dishes => {
        console.log("Dishes displayed")
        this.setState({
          dishes
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="Dishes">
        <h2>Dishes</h2>
        {this.state.dishes.map((e, i) => 
        <li key={i}>{e.name}</li>)}
      </div>
    )
  }
}

export default Dishes;