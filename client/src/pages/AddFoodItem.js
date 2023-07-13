import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../styles/form.css";
import * as Yup from "yup";
import axios from "axios";

const AddFoodItem = () => {
  //create empty inital values object for add food item form
  const initialValues = {
    food_name: "",
    energy: "",
    fibre: "",
    image: "",
  };

  // create a schema to validate the form on the client side using yup
  const validationSchema = Yup.object().shape({
    food_name: Yup.string().required(),
    energy: Yup.number().typeError("Energy must be a number! Calories per 100g").required(),
    fibre: Yup.number().typeError("Fibre must be a number! mg per 100g").required(),
    image: Yup.string(),
  });

  // posts the form data to the database
  const onSubmit = (data) => {
    axios.post("http://localhost:4001/fooditems", data).then((response) => {
      console.log("form sent");
    });
  };

  return (
    <div className="addItemPage">
      <h1>Add Food Item</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Name:</label>
          <ErrorMessage name="food_name" component="span"></ErrorMessage>
          <Field
            id="inputAddItem"
            name="food_name"
            placeholder="item name..."
          />
          <label>Energy (cals/100g):</label>
          <ErrorMessage name="energy" component="span"></ErrorMessage>
          <Field id="inputAddItem" name="energy" placeholder="cals/100g" />
          <label>Fibre (mg/100g):</label>
          <ErrorMessage name="fibre" component="span"></ErrorMessage>
          <Field id="inputAddItem" name="fibre" placeholder="mg/100g" />
          <label>Item Image:</label>
          <ErrorMessage name="image" component="span"></ErrorMessage>
          <Field id="inputAddItem" name="image" placeholder="image path" />

          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddFoodItem;
