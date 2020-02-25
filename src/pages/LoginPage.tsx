import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="LoginPage">
      <h1>Hello Login!</h1>

      <form action="/login" method="post">
        <label htmlFor="password">Password:</label><input id="password" type="password" />
        <label htmlFor="email">Email:</label><input id="email" type="email" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
