import React, { useState }  from "react";
import { Form, Field } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";

import { IUserAuthData } from '../../store/userAuth/types'
import { userAuth } from '../../store/userAuth/action'
import { useHistory } from "react-router-dom";
import FormStyle from '../../ui/form-style'
import { ReactFinalForm } from './react-final-form/react-final-form'

import 'antd/dist/antd.css';
import './sign-up.scss'

type FormElem = React.FormEvent<HTMLFormElement>;

interface IReset {
  reset: any
}

export const SignUp: React.FC = () => {
  const [isMount, useIsMount] = useState(false)

  // const [user, setUserAuth] = useState<IUserAuthData>({
  //   username: '',
  //   password: '',
  //   id: null,
  //   token: '',
  //   refresh_token: '',
  // })

  const authUser = useSelector(
    (state: any) => state.UserAuthReducer.userAuthData
  )
  const isError = useSelector(
    (state: any) => state.UserAuthReducer.isError
  )

  let history = useHistory();

  const dispatch = useDispatch();


  if ( authUser.token ) {
    history.push('/')
  }

  const onSubmit = async (values: any) => {
    // tslint:disable-next-line no-console
    console.log(values);
  };

  return (
    <section className="sign-up--page">
      <FormStyle>
        <Form onSubmit={onSubmit}
        //   validate={values => {
        //   const errors = {}
        //   if (!values.username) {
        //     errors.username = 'Required'
        //   }
        //   if (!values.password) {
        //     errors.password = 'Required'
        //   }
        //   if (!values.confirm) {
        //     errors.confirm = 'Required'
        //   } else if (values.confirm !== values.password) {
        //     errors.confirm = 'Must match'
        //   }
        //   return errors
        // }}
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
