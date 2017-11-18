* Title of the project
  * react-scope-form-fields
* Brief description
* Use cases
  * scoping fields with lock on empty scope
  * scoping fields without lock on empty scope
  * mount scoped field on scope change (for data load and other setup on componentDidMount)
  * reset scoped field to empty value or result of the function
* Possible use cases
  * Handling for multi select scope and scoped
  * Allow preventing unmounting & mounting on scope change
  * Add confirmation of scope change
  * Handle children with names nested via `.`, `[somevalue]`, `[]`
  * Provide scope value to the child so it can use it for initialization 
* How to get the project running locally
* Running the linter
* Running the test suite
* How to contribute
* Steps to submit a PR
* How to raise issues
* A link to the Code of Conduct
* A changelog

## Setup according to:
https://medium.com/@lokhmakov/best-way-to-create-npm-packages-with-create-react-app-b24dd449c354

## Discussion
https://github.com/erikras/redux-form/issues/624
https://github.com/erikras/redux-form/issues/1500#issuecomment-238624882

HOC `connectReduxFormFields('myForm', 'country', 'city')`
https://github.com/pokiujf/react-field-scope/blob/develop/src/components/ReduxFormWithScoping.js#L46

```
export default cmpose(
  reduxForm({ form: 'formWithScoping' }),
  reduxFormConnectFields('formWithScoping', 'carMake', 'carModel'),
  connect(mapStateToProps)
)(ReduxFormWithScoping)
```
ogolnie to odkad nauczylem sie robic tego compose w ten sposob
widze ze to jest duuuzo lepsze od innych technik
np
https://github.com/tb/northwind-graphql-ruby/blob/master/client/src/hocs/withTable.js
 
mozna nawet zawrzec jakis stan do zmiennej
ale rownie latwo mozna po prostu nadpisac cos
albo dodac funkcje

kurde te HOCs to jest niesamowite narzedzie ekstrakcji kodu z komponentow na zewnatrz
jestem w tanie nap zrobic hoca podobnego do

https://github.com/cantierecreativo/redux-bees#react-integration
albo
https://www.apollographql.com/docs/react/basics/queries.html#default-result-props

## TODO

* add examples of different config options for ScopeFieldForReduxForm
* check posibility to implement HOC for scoping setup
  * (possibly this might be a way to) make ScopeFieldForReduxForm more resilient

* fillup readme info
  * decide on package name (research what people look for)
* deploy demo app on github pages
* add handling for react form
* add handling for regular form
* add handling for formik
* check if correct data is persisted in store and gets submitted 

## DONE
* add bootstrap to demo app
