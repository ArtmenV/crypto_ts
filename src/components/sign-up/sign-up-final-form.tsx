import React from "react";
import { NavLink } from "react-router-dom";;

import './sign-up-final-form.scss'

export const SignUpFinalForm: React.FC = (): JSX.Element => {

    return (
      <div className="sign--up__button final_form">
        <NavLink to='/sign-up-final-form'>
          Sign Up Final Form
        </NavLink>
      </div>
    )
};



