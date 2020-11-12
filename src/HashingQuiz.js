import React from "react";
import classes from "./search.module.css";
import * as yup from "yup";
import { Formik, Field, Form } from "formik";
import { ClipButton } from "./Components/ClipButton";
import { clipPaths } from "./Home";

const schema = yup.object().shape({
  question1: yup.string().required("please answer this question"),
  question2: yup.string().required("please answer this question"),
});

export function HashingQuiz() {
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
                Linear search is also known as?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="Sequential search"
                  />
                  Sequential search
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="Logarithmic search"
                  />
                  Logarithmic search
                </label>
                <label>
                  <Field type="radio" name="question2" value="Hashing" />
                  Hashing
                </label>
              </div>
            </div>

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Linear search does the following?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="Returns sorted values"
                  />
                  Returns sorted values
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="Searching for a value and returns it"
                  />
                  Searching for a value and returns it
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="Searching for values and returns all values"
                  />
                  Searching for values and returns all values
                </label>
              </div>
            </div>

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Which searching algorithm is the easiest to implement?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question2" value=" Linear search" />
                  Linear search
                </label>
                <label>
                  <Field type="radio" name="question2" value="Binary Search" />
                  Binary Search
                </label>
                <label>
                  <Field type="radio" name="question2" value="Hashing" />
                  Hashing
                </label>
              </div>
            </div>

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Does linear search require a data structure to be sorted for it
                to work?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question2" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question2" value="False" />
                  False
                </label>
              </div>
            </div>

            <ClipButton
              className={classes.button}
              type={"submit"}
              label={"submit"}
              clipPath={clipPaths[1]}
              padding="20px"
              fontSize="20px"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
