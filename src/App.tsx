import React from "react";
import { Route, Switch } from "react-router-dom";

import { ReactFinalForm } from "./page/sign-up/react-final-form/react-final-form";
import { SignUpFormik } from "./page/sign-up/formik-form/sign-up-formik";
import { Navbar } from "./components/navigation/Navbar";
import { SignUp } from "./page/sign-up/sign-up";
import { CurrentCoin } from "./page/current-coin";
import { Profile } from "./page/profile/index";
import { AuthRoute } from "./routes/AuthRoute";
import { Login } from "./page/login/login";
import { Home } from './page/index'

import "./App.css";

const App: React.FC = () => {

  return (
    <div>
      <Navbar/>

      <Switch>
        <AuthRoute exact path="/">
          <Home />
        </AuthRoute>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/sign-up">
          <SignUp/>
        </Route>
        {/*<Route exact path="/sign-up-final-form">*/}
        {/*  <ReactFinalForm/>*/}
        {/*</Route>*/}

        {/*<Route exact path="/sign-up-formik-form">*/}
        {/*  <SignUpFormik/>*/}
        {/*</Route>*/}

        <Route exact path="/current-crypto/:id">
          <CurrentCoin />
        </Route>

        <AuthRoute exact path="/profile">
          <Profile/>
        </AuthRoute>

      </Switch>
    </div>
  );
};

export default App;