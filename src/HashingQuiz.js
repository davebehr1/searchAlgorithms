import React from "react";
import classes from "./search.module.css";
import { Box } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ClipButton } from "./Components/ClipButton";
import { clipPaths } from "./Home";

const schema = yup.object().shape({
  question1: yup.string().required("please answer this question"),
  question2: yup.string().required("please answer this question"),
  question3: yup.string().required("please answer this question"),
  question4: yup.string().required("please answer this question"),
});

const answers = {
  question1: "Hash table",
  question2:
    "It is used to map a given value with a particular key for faster access of elements",
  question3: "Hash function",
  question4: "Hashing",
};

export function HashingQuiz() {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>test your knowledge</h1>
      <Formik
        initialValues={{
          question1: "",
          question2: "",
          question3: "",
          question4: "",
        }}
        validationSchema={schema}
        onSubmit={async (values, { setStatus }) => {
          try {
            let correct = 0;
            await new Promise((r) => setTimeout(r, 500));
            Object.entries(values).forEach(([key, value]) => {
              if (value === answers[`${key}`]) {
                correct++;
              }
            });
            setStatus({
              msg: `${correct} out of ${
                Object.entries(values).length
              } are correct`,
              type: "success",
            });

            if (correct.length === values.length) {
              let badges;
              badges = JSON.parse(localStorage.getItem("badges"));
              badges.hashing = true;
              localStorage.setItem("badges", JSON.stringify(badges));
            }
          } catch (error) {
            setStatus({
              msg: error,
              type: "error",
            });
          }
        }}
      >
        {({ handleSubmit, status }) => (
          <Form className={classes.quiz} onSubmit={handleSubmit}>
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What is the name of the data structure used in hashing
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question1" value="Hash function" />
                  Hash function
                </label>
                <label>
                  <Field type="radio" name="question1" value="Hash table" />
                  Hash table
                </label>
                <label>
                  <Field type="radio" name="question1" value="Hash database" />
                  Hash database
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question1"
              component="div"
              className={classes.fieldError}
            />

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What does the hash function do?
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
                    value="It is used to map a given value with a particular key for faster access of elements"
                  />
                  It is used to map a given value with a particular key for
                  faster access of elements
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="It computes the square of a value given"
                  />
                  It computes the square of a value given
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="It is used to map a value of 0 for faster access of elements"
                  />
                  It is used to map a value of 0 for faster access of elements
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question2"
              component="div"
              className={classes.fieldError}
            />

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                The efficiency of mapping depends on the efficiency of what in
                hashing?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question3" value="Data" />
                  Data
                </label>
                <label>
                  <Field type="radio" name="question3" value="Hash function" />
                  Hash function
                </label>
                <label>
                  <Field type="radio" name="question3" value="Hash table" />
                  Hash table
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question3"
              component="div"
              className={classes.fieldError}
            />

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Which choice is used in many encryption algorithms?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question4" value="Binary search" />
                  Binary search
                </label>
                <label>
                  <Field type="radio" name="question4" value="Linear search" />
                  Linear search
                </label>
                <label>
                  <Field type="radio" name="question4" value="Hashing" />
                  Hashing
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question4"
              component="div"
              className={classes.fieldError}
            />
            {status && <Box className={classes.status}>{status.msg}</Box>}

            <div className={classes.buttonWapper}>
              <ClipButton
                className={classes.button}
                type={"submit"}
                label={"submit"}
                clipPath={clipPaths[1]}
                padding="20px"
                fontSize="20px"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
