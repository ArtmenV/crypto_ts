import React, { useState }  from "react";
import { useSelector, useDispatch } from "react-redux";

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { IUserAuthData } from '../../store/userAuth/types'
import { userAuth } from '../../store/userAuth/action'
import {NavLink, useHistory} from "react-router-dom";

import 'antd/dist/antd.css';
import './login.scss'

type FormElem = React.FormEvent<HTMLFormElement>;

export const Login: React.FC = () => {

  const [user, setUserAuth] = useState<IUserAuthData>({
    username: '',
    password: '',
    id: null,
    token: '',
    refresh_token: '',
  })

  const authUser = useSelector(
    (state: any) => state.UserAuthReducer.userAuthData
  )

  let history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e: FormElem) => {
    e.preventDefault();
    dispatch(userAuth(user))
  };

  if ( authUser.token ) {
    history.push('/')
  }

  return (
    <section className="login--page">
      <div className="login--container">
        <Form onSubmit={handleSubmit} className="login-form">

          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              value={user.username}
              onChange={e => setUserAuth({...user, username: e.target.value})}
            />
          </Form.Item>

          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={e => setUserAuth({...user, password: e.target.value})}
            />
          </Form.Item>

          <Form.Item>
            <div className="form--check">
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="/sign-up">
                Forgot password
              </a>
            </div>
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </div>
            Or <NavLink to='/sign-up'>
              register now!
            </NavLink>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};


