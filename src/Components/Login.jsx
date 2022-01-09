import axios from "axios";
import {ErrorMessage, Formik} from "formik";
import React, {useState} from "react";
import {Alert, Button, Form, Modal} from "react-bootstrap";

const Login = ({showLogin, handleCloseLogin, setToken}) => {
  return (
    <div>
      <Modal show={showLogin} onHide={handleCloseLogin} backdrop="static">
        <Modal.Header>
          <Formik
            initialValues={{
              mail: "",
              password: "",
            }}
            onSubmit={(val, {resetForm}) => {
              resetForm();

              axios
                .post("http://challenge-react.alkemy.org/", {
                  email: `${val.mail}`,
                  password: `${val.password}`,
                })
                .then((res) => {
                  const TOKEN = res["data"].token;
                  console.log(TOKEN);
                  setToken(TOKEN);
                  window.localStorage.setItem("token", TOKEN);
                  handleCloseLogin();
                })
                .catch((err) => {
                  alert(`Please provide valid email and password`);
                });
            }}
            validate={(val) => {
              let err = {};
              if (!val.mail) {
                err.mail = "Please enter an email address";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  val.mail
                )
              ) {
                err.mail = "Please enter a valid email address";
              }

              if (!val.password)
                err.password = "Por favor no deje campos vacios";
              return err;
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className=" fw-bold">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={values.mail}
                    onChange={handleChange("mail")}
                    onBlur={handleBlur}
                    size="lg"
                  />
                  {touched.mail && errors.mail && (
                    <Alert variant="danger">{errors.mail}</Alert>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className=" fw-bold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange("password")}
                    onBlur={handleBlur}
                    size="lg"
                  />
                  {touched.password && errors.password && (
                    <Alert variant="danger">{errors.password}</Alert>
                  )}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default Login;
