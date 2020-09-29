import React from "react";
import classes from "./search.module.css";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";

const schema = yup.object().shape({
  question1: yup.string().required("please answer this question"),
  question2: yup.string().required("please answer this question"),
});

export function Quiz() {
  return (
    <div className={classes.wrapper}>
      <h1>Quiz</h1>
      <p> test your knowledge</p>
      <Formik
        initialValues={{
          question1: "",
          question2: "",
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          console.log("submitting");
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit }) => (
          <Form className={classes.quiz} onSubmit={handleSubmit}>
            <div className={classes.formInput}>
              <label htmlFor="question1" className={classes.questionLabel}>
                Which sort searches in linear time?
              </label>
              <Field id="question1" name="question1" />
            </div>
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                How many iterations will it take to find 8 in
                [1,2,3,4,5,6,7,8,9]
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question2" value="One" />1
                </label>
                <label>
                  <Field type="radio" name="question2" value="Two" />2
                </label>
                <label>
                  <Field type="radio" name="question2" value="Three" />3
                </label>
              </div>
            </div>

            <button type="submit" className={classes.button}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
