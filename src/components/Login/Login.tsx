import React, { useCallback, useReducer } from 'react';

type LoginState = {
  error: string | null;
  token: string | null;
};

type LoginAction =
  | { type: 'LOGIN_SUCCESS'; payload: { token: LoginState['token'] } }
  | { type: 'LOGIN_ERROR'; payload: { error: LoginState['error'] } };

const defaultState: LoginState = {
  error: null,
  token: null
};

const reducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, error: null, token: action.payload.token };
    case 'LOGIN_ERROR':
      return { ...state, error: action.payload.error, token: null };
  }
};

export const Login: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const onSubmit = useCallback((evt: React.FormEvent) => {
    evt.preventDefault();

    fetch("/api/login", {
        body: new FormData(evt.target as HTMLFormElement),
        method: 'post'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          dispatch({
            payload: { token: data.token },
            type: 'LOGIN_SUCCESS'
          });
        } else {
          dispatch({
            payload: { error: data.error },
            type: 'LOGIN_ERROR'
          });
        };
      })
      .catch((err) => {
        dispatch({
          payload: { error: err.message },
          type: 'LOGIN_ERROR'
        });
      });
  }, [dispatch]);

  return (
    <form onSubmit={onSubmit}>
      {state.error && <div>{state.error}</div>}
      {state.token && <div>Login Success!</div>}
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
