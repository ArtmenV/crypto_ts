import React from "react";
import { Route, Switch } from "react-router-dom";

import { SignUp } from "./page/sign-up/sign-up";
import { CurrentCoin } from "./page/current-coin";
import { Profile } from "./page/profile/index";
import { AuthRoute } from "./routes/AuthRoute";
import { IndexLayout } from './layouts/index'
import { Login } from "./page/login/login";
import { Home } from './page/index'

import "./App.css";

const App: React.FC = () => {

  return (
    <>
      <IndexLayout>
        <main>
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
        </main>
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