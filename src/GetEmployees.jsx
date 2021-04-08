/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
// import axios from 'axios';
// import reducer, { init } from './reducer';

const GetEmployees = ({ employeesList, error, removeEmployee }) => {
  return (
    <>
      {
        error ? (
          <h1>{error}</h1>
        )
          : (
            employeesList.map((employee) => {
              return (
                <div key={employee.id}>
                  <h1>{employee.employee_name}</h1>
                  <button type='button' onClick={(e) => { return removeEmployee(e, employee.id); }}>delete</button>
                </div>
              );
            })
          )
      }
    </>
  );
};

export default GetEmployees;
