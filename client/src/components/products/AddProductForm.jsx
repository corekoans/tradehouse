import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

let AddProductForm = (props) => {
  const handleSubmit = (values) => {
    const product = {
      title: values.target[0].defaultValue,
      quantity: parseInt(values.target[1].defaultValue, 10),
      unitPrice: parseFloat(values.target[2].defaultValue),
      description: values.target[3].defaultValue,
      merchantId: 1,
    };
    return props.addProduct(product);
  };

  return (<div className="product__form">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <Field type="text" component="input" name="title" placeholder="Title" />
        </div>
        <div className="col">
          <Field type="text" component="input" name="productQuantity" placeholder="Quantity" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Field type="text" component="input" name="price" placeholder="Price" />
        </div>
        <div className="col">
          <Field type="text" component="input" name="description" placeholder="Description" />
        </div>
      </div>
      <input className="btn btn-primary" type="submit" value="Add Product" />
    </form>
  </div>
  );
};

AddProductForm = reduxForm({
  form: 'addProduct',
})(AddProductForm);

export default AddProductForm;
