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

            {/* <button type="submit" className={classes.button}>
              Submit
            </button> */}

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
