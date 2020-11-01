import './styles/App.css';
import React from 'react';
import BikeAddForm from "./containers/BikeAddFormContainer";
import OrdersContainer from "./containers/OrdersContainer";
import AvailableBikesContainer from './containers/AvailableBikesContainer';
import {Separator} from "./components/Separator";
import {createStore} from "redux";
import rootReducer from './store/reducers'
import {Provider} from 'react-redux';

import {Observer} from './Observer'

const store = createStore(rootReducer)

class App extends React.Component {

  constructor(props) {
    super(props);
    this.availableObserver = new Observer()
    this.ordersObserver = new Observer()
    this.addFormObserver = new Observer()
    this.totalRentObserver = new Observer()
    this.updateAvailableBikes = this.updateAvailableBikes.bind(this)
    this.updateOrders = this.updateOrders.bind(this)
    this.addAvailableBike = this.addAvailableBike.bind(this)
    this.updateTotalRent = this.updateTotalRent.bind(this)
  }

  updateAvailableBikes(){
    this.ordersObserver.notifyAll()
  }

  updateOrders(){
    this.availableObserver.notifyAll()
  }

  addAvailableBike(){
    this.addFormObserver.notifyAll()
  }

  updateTotalRent(){
    this.totalRentObserver.notifyAll()
  }

  render() {
    return (
        <Provider store={store}>
        <div className="app-container">
          <div className="app">
            <header className='app-header'>
              <h2>Awesome Bike Rental</h2>
            </header>
            <BikeAddForm addAvailableBike={this.addAvailableBike} />
            <Separator type='vertical' value={20} />
            <OrdersContainer
                updateTotalRent={this.updateTotalRent}
                totalRentObserver={this.totalRentObserver}
                availableObserver={this.availableObserver}
                updateAvailableBikes={this.updateAvailableBikes}
            />
            <Separator type='vertical' value={20} />
            <AvailableBikesContainer
                updateTotalRent={this.updateTotalRent}
                addFormObserver={this.addFormObserver}
                ordersObserver={this.ordersObserver}
                updateOrders={this.updateOrders}
            />
          </div>
        </div>
        </Provider>
    );
  }
}

export default App;
