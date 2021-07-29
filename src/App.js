// HOLDS AND UPDATES THE STATE
import './App.css';
import InfoCard from './InfoCard';
import ActionBar from './ActionBar';
import data from './data';
import React, { useState, useEffect } from 'react';

function App() {
  const [employeeArray, setEmployeeArray] = useState([...data]);
  const [employeeIndex, setEmployeeIndex] = useState(0);
  const [employee, setEmployee]= useState(employeeArray[employeeIndex]);
  const [newEmployee, setNewEmployee] = useState({
    name: {first: '', last: ''},
    city: '',
    country: '',
    title: '',
    employer: '',
    favoriteMovies: []
  });

  useEffect(() => {setEmployee(employeeArray[employeeIndex])} , [employeeArray, employeeIndex]);

  function goToPrevious() {
    if (employeeIndex > 0) {
      setEmployeeIndex(employeeIndex - 1);

    } else {
      setEmployeeIndex(employeeArray.length - 1);
    }
  }

  function goToNext() { 
    if (employeeIndex < employeeArray.length - 1) {
      setEmployeeIndex(employeeIndex + 1);
    } else {
      setEmployeeIndex(0);  
    }
  }

  function deleteEmployee() {
    setEmployeeArray(employeeArray.splice(employeeIndex, 1));
    setEmployeeIndex(employeeIndex - 1);
  }

  function addEmployee(e) {
    e.preventDefault();
    console.log(newEmployee);
    setEmployeeArray(...employeeArray, employeeArray.push(newEmployee));
    console.log(employeeArray);
    setEmployee(employeeArray[employeeArray.length - 1]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Home</h2>
      </header>
      <body className='App-body'>
        <div className="content-wrapper">
          <InfoCard 
            employeeIndex={employeeIndex}
            employee={employee}
            employeeArray={employeeArray}
          />
          <ActionBar 
            goToPreviousFn={goToPrevious}
            goToNextFn={goToNext}
            deleteEmployeeFn={deleteEmployee}
          />
          <form className='newEmployeeForm' onSubmit={(e)=> addEmployee(e)}>
            <label>First Name:
              <input 
                type='text' 
                placeholder='First Name' 
                value={newEmployee.name.first} 
                onChange={(e)=> setNewEmployee({...newEmployee, name:{first: e.target.value}})} 
              />
            </label>
            <label>Last Name:
              <input 
                type='text' 
                placeholder='Last Name' 
                value={newEmployee.name.last}
                onChange={(e)=> setNewEmployee({...newEmployee, name:{last: e.target.value}})} 
              />
            </label>
            <label>City:
              <input 
                type='text' 
                placeholder='City' 
                value={newEmployee.city}
                onChange={(e)=> setNewEmployee({...newEmployee, city: e.target.value})}
              />
            </label>
            <label>Country:
              <input 
                type='text' 
                placeholder='Country' 
                value={newEmployee.country}
                onChange={(e)=> setNewEmployee({...newEmployee, country: e.target.value})}
              />
            </label>
            <label>Job Title:
              <input 
                type='text' 
                placeholder='Title' 
                value={newEmployee.title}
                onChange={(e)=> setNewEmployee({...newEmployee, title: e.target.value})}
              />
            </label>
            <label>Employer:
              <input 
                type='text' 
                placeholder='Employer' 
                value={newEmployee.employer}
                onChange={(e)=> setNewEmployee({...newEmployee, employer: e.target.value})}
              />
            </label>
            <label>3 Favorite Movies:
              <input 
                type='text' 
                placeholder='3 Favorite Movies' 
                value={newEmployee.favoriteMovies}
                onChange={(e)=> setNewEmployee({...newEmployee, favoriteMovies: e.target.value})}
              />
            </label>
            <button type='submit'>Add Employee</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default App;
