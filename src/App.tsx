import React from "react";
import { Route, Switch } from "react-router-dom";

import { SignUp } from "./pages/sign-up/sign-up";
import { CurrentCoin } from "./pages/current-coin";
import { Profile } from "./pages/profile/index";
import { AuthRoute } from "./routes/AuthRoute";
import { IndexLayout } from './layouts/index'
import { Login } from "./pages/login/login";
import { Home } from './pages/index'

import "./App.css";

const App: React.FC = () => {

  return (
    <>
      <IndexLayout>
        <Switch>
          <AuthRoute exact path="/">
            <Home />
          </AuthRoute>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/sign-up">
            <SignUp/>
          </Route>

          <Route exact path="/current-crypto/:id">
            <CurrentCoin />
          </Route>

          <AuthRoute exact path="/profile">
            <Profile/>
          </AuthRoute>

          <Route path='*'>
            <div>Page not found...</div>
          </Route>
        </Switch>
      </IndexLayout>
    </>
  );
};

export default App;


// const routes = [{
//   path: '/',
//   component: HomePage,
// }, {
//   path: '/Teachers',
//   component: TeacherListPage,
// }, {
//   path: '/Teachers/:teacherId',
//   component: TeacherPage,
// }, {
//   path: '/Teachers/:teacherId/Classes',
//   component: TaughtClassesPage,
// }, /* And so on. */];