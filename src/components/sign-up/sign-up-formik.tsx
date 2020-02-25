import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import './sign-up-final-form.scss'


export const SignUpFinalFormik: React.FC = (): any => {

    return (
      <div className="sign--up__button final_form">
        <NavLink to='/sign-up-formik-form'>
          Sign Up Formik
        </NavLink>
      </div>
    )
};



