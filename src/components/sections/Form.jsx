import React from "react";
import { Field, reduxForm } from "redux-form";

const onFormSubmit = values => {
  console.log("Form submitted with values: ", values);
};

const createInputField = field => {
  return (
    <div className="control">
      <input
        type="text"
        placeholder="Title"
        className="input"
        {...field.input}
      />
    </div>
  );
};

let Form = ({ handleSubmit }) => {
  return (
    <div className="Form section">
      <div className="container">
        <p className="title">Form Section</p>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="field">
            <Field
              name="title"
              component={createInputField}
              className="field"
            />
          </div>
          <button type="submit" className="button is-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

Form = reduxForm({
  form: "sample"
})(Form);

export default Form;
