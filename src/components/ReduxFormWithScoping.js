import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { reduxForm, formValueSelector, Field } from 'redux-form'
import { connect } from 'react-redux';

import ScopeFieldForReduxForm from 'scopeField/scopeFieldForReduxForm';

export class ReduxFormWithScoping extends Component {
  render() {
    const { handleSubmit, carMake } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="carMake"
          component="input"
          type="text"
          placeholder="Car manufacture"
        />
        <ScopeFieldForReduxForm
          scope={carMake}
          scopeName="Car Make"
        >
          <Field
            name="carModel"
            component="input"
            type="text"
            placeholder="Car model"
          />
        </ScopeFieldForReduxForm>
        <input type="submit" />
      </form>
    )
  }
}

ReduxFormWithScoping.propTypes = {
  handleSubmit: PropTypes.func,
  carMake: PropTypes.string,
};

const mapStateToProps = (state) => ({
  carMake: formValueSelector('formWithScoping')(state, 'carMake'),
});

export default reduxForm({ form: 'formWithScoping' })(
  connect(mapStateToProps)(ReduxFormWithScoping)
)
