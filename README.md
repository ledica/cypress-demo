# cypress-demo

## **Test Scenario**:  Test Amazon cart application

| Test Case Number | Test Case |
|--|--|
|TC01| Verify that we are able to add an item into our cart |
|TC02| Check that the sum of items added to cart is correct |

## **Test Scenario**:  Test the Amazon registration screen

| Test Case Number | Test Case |
|--|--|
|TC01| Filling in all the data |
|TC02| Error should occur if the name is empty |
|TC03| Error should occur if an invalid email |
|TC04| Error should occur if an invalid password |

## **Test Scenario**:  Get the current climate

| Test Case Number | Test Case |
|--|--|
|TC01| GET `/weather` - 200 |
|TC02| GET `/weather` - Invalid Location - 404|
|TC03| GET `/weather` - No Location - 400 |
|TC04| GET `/weather` - Invalid APP ID - 401 |

## Install

`npm install` or `yarn install`


## Run tests
**CLI** - Run CLI

 
```
npx cypress run
```
**Cypress UI** - Run on Cypress UI
 
```
yarn || npm test:chrome
```

## Technology:
 - Cypress 
 - OpenWeather API