import React, { Component } from 'react';
import api from '../api';
import { Link, Route } from 'react-router-dom';
import DishDetail from './DishDetail';

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
        console.log("getDishes")
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
        <ul>
          {this.state.dishes.map((e, i) =>
            <li key={i}><Link to={"/dishes/" + e._id}>{e.name}</Link></li>)}
        </ul>
        <Route path="/dish/:id" component={DishDetail}/>
      </div>
    )
  }
}

export default Dishes;