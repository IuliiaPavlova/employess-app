import React, { useReducer } from 'react';
import axios from 'axios';
import EmployeesTable from './components/EmployeesList';
import Spinner from './components/Spinner';
import reducer, { initialState } from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getEmployeesList = async () => {
    const url = 'https://dummy.restapiexample.com/api/v1/employees';
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
    <>
      <header className='title'>employees</header>
      <main className='main'>
        {state.isLoading
          ? (<Spinner />)
          : state.employeesList.length || state.error
            ? (
              <EmployeesTable
                employeesList={state.employeesList}
                error={state.error}
                removeEmployee={removeEmployee}
              />
            )
            : (
              <button className='btn' type='button' onClick={getEmployeesList}>get</button>
            )}
      </main>
    </>
  );
};

export default App;
