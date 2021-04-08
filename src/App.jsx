/* eslint-disable no-nested-ternary */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useReducer } from 'react';
import './App.css';
import axios from 'axios';
import GetEmployees from './GetEmployees';
import reducer, { init } from './reducer';

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
    <main className='main'>
      {
        state.isLoading ? (
          <h1>Loading...</h1>
        )
          : state.employeesList.length || state.error ? (
            <GetEmployees
              employeesList={state.employeesList}
              error={state.error}
              removeEmployee={removeEmployee}
            />
          )
            : (
              <>
                <h1>Employees</h1>
                <button type='button' onClick={handleClick}>Get</button>
              </>
            )
    }
    </main>
  );
};

export default App;
