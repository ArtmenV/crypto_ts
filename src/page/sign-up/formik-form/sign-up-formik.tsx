import React, {FormEvent} from "react";
import {Field, Formik, FormikErrors} from "formik";
import { string, object } from "yup";

import './sign-up-formik.scss'

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	pet: "",
};

interface FormValues {
	firstName: string;
	lastName: string,
	email: string,
	password: string,
	pet: string;
}

const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
	console.log('event', event)
}

export const SignUpFormik: React.FC = () => (
	<section className="sign--up formik">
		<h3>Sign Up</h3>
		<Formik initialValues={initialValues}
      onSubmit={(values: FormValues) => console.log(values)}
      validationSchema={object().shape({
        firstName: string().required("Entering your first name is required."),
	      lastName: string().required("Last name is required."),
	      email: string().required("Entering your email is required."),
	      password: string().required("Entering your email is required."),
	      repeat_password: string().required("Entering your email is required.")
      })}
      render={({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
	        <div className="form--filds">
		        <label
			          htmlFor="firstName"
			          className="form--field"
		        >
			        <div>First Name</div>
				        <Field type="text" name="firstName"/>
				        {
					        touched.firstName && errors.firstName
						        ? <div>{errors.firstName}</div>
						        : null
				        }
			        </label>

			        <label
				        htmlFor="lastName"
				        className="form--field"
			        >
				        <div>Last Name</div>
				        <Field type="text" name="lastName"/>
				        {
					        touched.lastName && errors.lastName
						        ? <div>{errors.lastName}</div>
						        : null
				        }
			        </label>

			        <label
				        htmlFor="email"
				        className="form--field"
			        >
				        <div>Email</div>
				        <Field type="text" name="email"/>
				        {
					        touched.email && errors.email
						        ? <div>{errors.email}</div>
						        : null
				        }
			        </label>

			        <label
				        htmlFor="password"
				        className="form--field"
			        >
				        <div>Password</div>
				        <Field type="text" name="password"/>
				        {
					        touched.password && errors.password
						        ? <div>{errors.password}</div>
						        : null
				        }
			        </label>

			        <label
				        htmlFor="password"
				        className="form--field"
			        >
				        <div>Repeat password</div>
				        <Field type="text" name="password"/>
				        {
					        touched.password && errors.password
						        ? <div>{errors.password}</div>
						        : null
				        }
			        </label>
	          </div>

	        {/*<label htmlFor="pet">*/}
		      {/*  <div>Pet</div>*/}
		      {/*  <Field name="pet" component="select">*/}
			    {/*    <option value="Dog">Dog</option>*/}
			    {/*    <option value="Cat">Cat</option>*/}
			    {/*    <option value="Other">Other</option>*/}
		      {/*  </Field>*/}
	        {/*</label>*/}
	        <button type="submit">Submit</button>
        </form>
      )}>
		</Formik>
	</section>
);