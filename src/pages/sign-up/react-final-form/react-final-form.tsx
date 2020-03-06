import React, { useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

import { formValidation } from '../../../components/form-component/form-validation';
import FormStyle from '../../../ui/form-style'

import 'antd/dist/antd.css';

export const ReactFinalForm: React.FC = () => {
	const [isMount, useIsMount] = useState(false)

	// const authUser = useSelector(
	//   (state: any) => state.UserAuthReducer.userAuthData
	// )
	// const isError = useSelector(
	//   (state: any) => state.UserAuthReducer.isError
	// )

	// let history = useHistory();
	//
	// const dispatch = useDispatch();

	const onSubmit = async (values: any) => {
		// tslint:disable-next-line no-console
		console.log(values);
	};

	// interface IMeta {
	//   meta: {
	//     name: '',
	//     error: ''
	//   }
	// }

	return (
		<section className="sign-up--page">
			<FormStyle>
				<Form
					onSubmit={onSubmit}
					render={({ handleSubmit, form, submitting, pristine, values }) => (
						<form onSubmit={handleSubmit}>
							<Field
								name="firstName"
								validate={(value, _, meta:any) =>
									formValidation.validateField(meta.name, value)
								}
							>
								{({ input, meta }) => (
									<div>
										<label>First Name</label>
										<input {...input} type="text" placeholder="First Name" />
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<Field
								name="lastName"
								validate={(value, _, meta: any) =>
									formValidation.validateField(meta.name, value)
								}
							>
								{({ input, meta }) => (
									<div>
										<label>Last Name</label>
										<input {...input} type="text" placeholder="Last Name" />
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<Field
								name="age"
								validate={(value, _, meta: any) =>
									formValidation.validateField(meta.name, value)
								}
							>
								{({ input, meta }) => (
									<div>
										<label>Age</label>
										<input {...input} type="text" placeholder="Age" />
										{meta.error && meta.touched && (
											<span>{meta.error}</span>
										)}
									</div>
								)}
							</Field>
							<div className="buttons">
								<button type="submit" disabled={submitting}>
									Submit
								</button>
								<button
									type="button"
									onClick={form.reset}
									disabled={submitting || pristine}
								>
									Reset
								</button>
							</div>
							<pre>{JSON.stringify(values, null, 2)}</pre>
						</form>
					)}
				/>
			</FormStyle>
		</section>
	);
};


