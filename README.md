* Title of the project
* Brief description
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

* fillup readme info
  * decide on package name (research what people look for)
* add bootstrap to demo app
* add examples of different config options for ScopeFieldForReduxForm
* figure out way to make ScopeFieldForReduxForm more resilient
* deploy demo app on github pages
* add handling for regular form
* add handling for formik
* add handling for react form
