import './styles/App.css';
import React from 'react';
import BikeAddForm from "./containers/BikeAddFormContainer";
import OrdersContainer from "./containers/OrdersContainer";
import AvailableBikesContainer from './containers/AvailableBikesContainer';
import {Separator} from "./components/Separator";

import {createStore} from "redux";
import rootReducer from './store/reducers'
import {Provider} from 'react-redux';

const store = createStore(rootReducer)

class App extends React.Component {

  constructor(props) {
    super(props);
    this.AvailableBikes = React.createRef()
    this.updateAvailableBikes = this.updateAvailableBikes.bind(this)
  }

  updateAvailableBikes(){
    console.log(this.AvailableBikes.current)
  }

  render() {
    return (
        <Provider store={store}>
        <div className="app-container">
          <div className="app">
            <header className='app-header'>
              <h2>Awesome Bike Rental</h2>
            </header>
            <BikeAddForm />
            <Separator type='vertical' value={20} />
            <OrdersContainer updateAvailableBikes={this.updateAvailableBikes} />
            <Separator type='vertical' value={20} />
            <AvailableBikesContainer ref={this.AvailableBikes} />
          </div>
        </div>
        </Provider>
    );
  }
}

export default App;
