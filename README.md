## Part One - Static Analysis

1. Run `yarn lint` and fix any errors that appear.
2. Run `yarn typeCheck` and fix any errors that appear.

## Part Two - Unit Testing

1. Run `yarn test` and note the error that appears.
2. Why does the `src/App.test.tsx` test pass and the `src/components/Header/Header.test.tsx` test fail?
3. Fix the `src/components/Header/Header.test.tsx` test.


## Part Three - Integration Testing

1. Open the `src/pages/LoginPage/LoginPage.test.tsx` test.
2. Add a test case for a successful login.
3. Add a test case for a failed login.

## Part Four - E2E Testing

1. Run `yarn build && yarn start` to start the app server.
2. Run `yarn e2e` to run the e2e tests.
3. Open the `cypress/integration/login.js` test.
4. Add a test case for a successful login. (email: janedoe@test.com, password: 123456)
5. Add a test case for a failed login. (message: 'Username and password do not match.')

## Bonus - Check coverage

1. Run `yarn test --collect-coverage`.
2. Open `coverage/lcov-report/index.html`.


