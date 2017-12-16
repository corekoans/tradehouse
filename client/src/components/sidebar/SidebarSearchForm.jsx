import React from 'react';
import { Field, reduxForm } from 'redux-form';


let SidebarSearchForm = (props) => {
  const handleSubmit = (values) => {
    values.preventDefault();
    console.log(values.target[0].defaultValue);
    return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="searchForm"
        component="input"
        type="test"
        placeholder="Search"
      />
    </form>
  );
};

SidebarSearchForm = reduxForm({
  form: 'SidebarSearchForm'
})(SidebarSearchForm);

export default SidebarSearchForm;