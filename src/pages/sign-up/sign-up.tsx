import * as React from "react";
import { Form, Field } from "react-final-form";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { AppState } from '../../store'
import FormStyle from '../../ui/form-style'

import 'antd/dist/antd.css';
import './sign-up.scss'

// type FormElem = React.FormEvent<HTMLFormElement>;

interface IReset {
  reset: any
}

export const SignUp: React.FC = () => {

  const authUser = useSelector(
    (state: AppState) => state.UserAuthReducer.userAuthData
  )

  let history = useHistory();

  if ( authUser.token ) history.push('/')

  const onSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <section className="sign-up--page">
      <FormStyle>
        <Form onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <h4>Sign up</h4>
              <label>First Name <strong>*</strong></label>
              <div>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  // placeholder="First Name"
                />
              </div>

              <label>Last Name <strong>*</strong></label>
              <div>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  // placeholder="Last Name"
                />
              </div>

              <label>Email <strong>*</strong></label>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  // placeholder="email"
                />
              </div>

              <label>Password <strong>*</strong> </label>
              <div>
                <Field
                  name="password"
                  component="input"
                  type="text"
                  // placeholder="password"
                />
              </div>

              <label>Repeat password <strong>*</strong></label>
              <div>
                <Field
                  name="repeat password"
                  component="input"
                  type="text"
                  // placeholder="Repeat password"
                />
              </div>
              <div className="submit--section">
                <button
                  type="button"
                  onClick={form.reset}
                >
                  Reset
                </button>
                <button type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}>
        </Form>
      </FormStyle>
    </section>
  );
};
