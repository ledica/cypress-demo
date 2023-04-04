# cypress-demo

## Dependencies

Add your personal open weather api key `APP_ID` at `cypress.env.json`

## Installation

```
yarn || npm install
```

## Run tests

To run use the follow command in your project path

**CLI** - Run CLI
```
yarn || npm test
```

**Cypress UI** - Run on Cypress UI

Run the following command to launch Cypress

```
yarn cypress:open
```

## **Test Scenario**: Test Amazon cart application

| Test Case Number | Test Case                                            |
| ---------------- | ---------------------------------------------------- |
| TC01             | Verify that we are able to add an item into our cart |
| TC02             | Check that the sum of items added to cart is correct |

```
yarn test --env grepTags=@account
```

## **Test Scenario**: Test the Amazon registration screen

| Test Case Number | Test Case                                 |
| ---------------- | ----------------------------------------- |
| TC01             | Filling in all the data                   |
| TC02             | Error should occur if the name is empty   |
| TC03             | Error should occur if an invalid email    |
| TC04             | Error should occur if an invalid password |

```
yarn test --env grepTags=@cart
```

## **Test Scenario**: Get the current climate

| Test Case Number | Test Case                               |
| ---------------- | --------------------------------------- |
| TC01             | GET `/weather` - 200                    |
| TC02             | GET `/weather` - Invalid Location - 404 |
| TC03             | GET `/weather` - No Location - 400      |
| TC04             | GET `/weather` - Invalid APP ID - 401   |

```
yarn test --env grepTags=@openWeather
```
