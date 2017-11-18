import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { reduxForm, formValueSelector, Field } from 'redux-form'
import { connect } from 'react-redux';

import ScopeFieldForReduxForm from 'scopeField/scopeFieldForReduxForm';
import { ColorSelect } from "./ColorSelect";

export class ReduxFormWithScoping extends Component {
  render() {
    const { handleSubmit, carMake, title, colorPalette } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <div className="card my-md-4">
          <div className="card-header">Regular scoping with lock on empty scope</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="carMake">Provide car manufacturer</label>
              <Field
                name="carMake"
                id="carMake"
                component="input"
                className="form-control"
                type="text"
                placeholder="Car manufacture"
              />
            </div>

            <div className="form-group">
              <label htmlFor="carModel">Provide car model</label>
              <ScopeFieldForReduxForm
                scope={carMake}
                scopeName="car make"
              >
                <Field
                  name="carModel"
                  id="carModel"
                  component="input"
                  className="form-control"
                  type="text"
                  placeholder="Car model"
                />
              </ScopeFieldForReduxForm>
            </div>
          </div>
        </div>

        <div className="card my-md-4">
          <div className="card-header">Regular scoping without lock on empty scope</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="title">Your title</label>
              <Field
                name="title"
                id="title"
                component="input"
                className="form-control"
                type="text"
                placeholder="Your title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullName">Your name</label>
              <ScopeFieldForReduxForm
                scope={title}
                options={{ allowEmptyScope: true }}
                scopeName="title"
              >
                <Field
                  name="fullName"
                  id="fullName"
                  component="input"
                  className="form-control"
                  type="text"
                  placeholder="Your name"
                />
              </ScopeFieldForReduxForm>
            </div>
          </div>
        </div>

        <div className="card my-md-4">
          <div className="card-header">Regular scoping with scoped field having initialization on mount</div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="colorPalette">Color palette</label>
              <Field
                name="colorPalette"
                id="colorPalette"
                component="select"
                className="form-control"
                type="text"
              >
                <option value="">Select color palette</option>
                <option value="hot">Hot colors</option>
                <option value="cold">Cold colors</option>
                <option value="grayscale">Gray scale</option>
              </Field>
            </div>

            <div className="form-group">
              <label htmlFor="color">Color</label>
              <ScopeFieldForReduxForm
                scope={colorPalette}
                scopeName="color palette"
              >
                <Field
                  name="color"
                  id="color"
                  component={ColorSelect}
                  className="form-control"
                />
              </ScopeFieldForReduxForm>
            </div>
          </div>
        </div>

        {/* Add field with computed reset value */}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

ReduxFormWithScoping.propTypes = {
  handleSubmit: PropTypes.func,
  carMake: PropTypes.string,
  title: PropTypes.string,
};

const mapStateToProps = (state) => ({
  ...formValueSelector('formWithScoping')(state, 'carMake', 'title', 'colorPalette'),
});

export default reduxForm({ form: 'formWithScoping' })(
  connect(mapStateToProps)(ReduxFormWithScoping)
)
