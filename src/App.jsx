/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useReducer } from 'react';
import './App.css';
import axios from 'axios';
import GetEmployees from './GetEmployees';
import reducer, { init } from './reducer';

// export const initialState = {
//   employeesList: [],
//   loading: false,
//   error: '',
// };

const App = () => {
  // const { employeesList, error } = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, [], init);
  const handleClick = async (e) => {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';

    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const employeesList = await response.data.data;
        dispatch({ type: 'SUCCESS', payload: employeesList });
      }
    } catch (error) {
      dispatch({ type: 'ERROR' });
    }
  };
  const removeEmployee = (e, id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };
  return (
    <div>
      {/* <h1>Employees</h1>
      <button type='button' onClick={handleClick}>Get</button> */}
      {
    state.isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <h1>Employees</h1>
        <button type='button' onClick={handleClick}>Get</button>
      </>
    )
  }
      {
    state.employeesList ? (
      <GetEmployees
        employeesList={state.employeesList}
        error={state.error}
        removeEmployee={removeEmployee}
      />
    )
      : null
  }
    </div>
  );
};

export default App;
