import React from 'react';
import { connect } from 'react-redux';
import fs from './Filter.module.css';
import PropTypes from 'prop-types';
import * as filterContactsAction from '../../redux/filter/filterContactsAction';
import { getfilter } from '../../redux/filter/filterSelector';

const Filter = ({ value, changeFilter }) => {
  // console.log(value);
  return (
    <div className={fs.box}>
      <label>
        <input
          type="text"
          className={fs.input}
          placeholder="Enter name"
          name="filter"
          onChange={changeFilter}
          value={value}
        ></input>
      </label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = store => {
  return {
    value: getfilter(store),
  };
};
const mapDispatchToProps = dispatch => ({
  changeFilter: e =>
    dispatch(filterContactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
