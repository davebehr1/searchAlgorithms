import React from "react";
import classes from "./search.module.css";
import { Formik, Field, Form } from "formik";

export function Quiz() {
  return (
    <div className={classes.wrapper}>
      <h1>Quiz</h1>
      <p> test your knowledge</p>
      <Formik
        initialValues={{
          question1: "",
          question2: 0,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form className={classes.quiz}>
            <div className={classes.formInput}>
              <label htmlFor="question1">
                Which sort searches in linear time?
              </label>
              <Field id="question1" name="question1" />
            </div>
            <div className={classes.formInput}>
              <label htmlFor="lastName">
                How many iterations will it take to find 8 in
                [1,2,3,4,5,6,7,8,9]
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question2" value={1} />1
                </label>
                <label>
                  <Field type="radio" name="question2" value={2} />2
                </label>
                <label>
                  <Field type="radio" name="question2" value={3} />3
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
