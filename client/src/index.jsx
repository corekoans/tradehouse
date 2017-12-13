import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// Components
import tradehouseApp from './reducers/reducers.jsx';
import App from './components/App.jsx';
import Header from './components/Header.jsx';
import CustomerView from './containers/CustomerView.jsx';
import ProductsView from './containers/ProductsView.jsx';
import MerchantHome from './containers/MerchantHome.jsx';
import BroadcastView from './containers/BroadcastView.jsx';

var defaultState = {
  // products: {
  //   items: []
  // },
  items: [],
  video: ''
};

const store = createStore(
  tradehouseApp,
  defaultState,
  composeWithDevTools(applyMiddleware(thunk))
);

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route path="/CustomerView" component={CustomerView} />
        <Route path="/ProductsView" component={ProductsView} />
        <Route path="/MerchantHome" component={MerchantHome} />
        <Route path="/BroadcastView" component={BroadcastView} />
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
