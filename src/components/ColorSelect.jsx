import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const presetOptions = {
  hot: [
    { value: '#F6546A', name: 'somewhat red' },
    { value: '#DFBB23', name: 'yellowish' },
    { value: '#DF23A8', name: 'almost purple' },
  ],
  cold: [
    { value: '#8AECD6', name: 'ice cold' },
    { value: '#002901', name: 'midnight green' },
    { value: '#517BAB', name: 'dirty blue' },
  ],
  grayscale: [
    { value: '#7F7F7F', name: 'grayish gray' },
    { value: '#010101', name: 'isn\'t it black?' },
    { value: '#aaabaa', name: 'technically it\'s not gray' },
  ],
};

export class ColorSelect extends Component {
  state = {
    options: [],
    colorKey: '',
  };

  componentDidMount() {
    const randomIndex = Math.round(Math.random() * 2, 0);
    const colorKey = ['hot', 'cold', 'grayscale'][randomIndex];
    setTimeout(() => {
      this.setState({ options: presetOptions[colorKey], colorKey })
    }, 900)
  }

  render() {
    const { options, colorKey } = this.state;
    const { className, input, id } = this.props;
    return (
      <select className={className} {...input} id={id}>
        <option value="">Select {colorKey} color from the list</option>
        {options.map(({ value, name }) =>
          <option value={value} key={value}>{name}</option>
        )}
      </select>
    );
  }
}
