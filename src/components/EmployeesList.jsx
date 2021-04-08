/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const EmployeesTable = ({ employeesList, error, removeEmployee }) => {
  return (
    <>
      {
        error ? (
          <h1 className='error'>{error}</h1>
        )
          : (
            <table className='table'>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Age</th>
                  <th>Salary</th>
                  <th className='delete-column'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {employeesList.map((employee) => {
                  return (
                    <tr key={employee.id}>
                      <td>{employee.employee_name}</td>
                      <td>{employee.employee_age}</td>
                      <td>{employee.employee_salary}</td>
                      <td className='delete-column'>
                        <button className='btn delete' type='button' onClick={(e) => { return removeEmployee(e, employee.id); }}>delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )
      }
    </>
  );
};

export default EmployeesTable;
