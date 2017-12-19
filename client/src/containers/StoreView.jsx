import React from 'react';
import SingleStore from './SingleStore.jsx';
import Cart from './Cart.jsx';
import { connect } from 'react-redux';
import { fetchMerchantProducts } from '../actions/productActions.jsx';
import { fetchCart } from '../actions/cartActions.jsx';

class StoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: have SingleStore render products based on which merchant's store it is
    return (
      <div>
        <Cart />
        <SingleStore merchantId={this.props.match.params.merchantId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, { fetchCart })(StoreView);
