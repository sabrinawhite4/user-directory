// HOLDS AND UPDATES THE STATE
import './App.css';
import InfoCard from './InfoCard';
import ActionBar from './ActionBar';
import data from './data';
import React, { useState} from 'react';

const initialState = {
  name: {first: '', last: ''},
  city: '',
  country: '',
  title: '',
  employer: '',
  favoriteMovies: []
}

function App() {
  const [employeeArray, setEmployeeArray] = useState([...data]);
  const [employeeIndex, setEmployeeIndex] = useState(0);
  const [employee, setEmployee]= useState(employeeArray[employeeIndex]);
  const [isActive, setIsActive] = useState(false);
  const [newEmployee, setNewEmployee] = useState(initialState);
  const [editing, setEditing] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

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
    employeeArray.splice(employeeIndex, 1)
    setEmployeeArray(employeeArray);
    setEmployee(employeeArray[employeeIndex]);
  }

  function addEmployee(e) {
    e.preventDefault();
    employeeArray.push(newEmployee)
    console.log(newEmployee);
    setEmployeeArray(employeeArray);
    console.log(employeeArray);
    setEmployee(employeeArray[employeeArray.length - 1]);
    setNewEmployee(initialState);
  }

  function toggleEditing() {
    setEditing(!editing);
  }

  function editFirstName(e) {
    const editedEmployee = {...employee};
    editedEmployee.name.first = e.target.value;
    setEmployee(editedEmployee);
  }

  function editLastName(e) {
    const editedEmployee = {...employee};
    editedEmployee.name.last = e.target.value;
    setEmployee(editedEmployee);
  }

  function editCity(e) {
    const editedEmployee = {...employee};
    editedEmployee.city = e.target.value;
    setEmployee(editedEmployee);
  }

  function editCountry(e) {
    const editedEmployee = {...employee};
    editedEmployee.country = e.target.value;
    setEmployee(editedEmployee);
  }

  function editTitle(e) {
    const editedEmployee = {...employee};
    editedEmployee.title = e.target.value;
    setEmployee(editedEmployee);
  }

  function editEmployer(e) {
    const editedEmployee = {...employee};
    editedEmployee.employer = e.target.value;
    setEmployee(editedEmployee);
  }

  function editFavoriteMovies(e) {
    const editedEmployee = {...employee};
    editedEmployee.favoriteMovies = e.target.value.split(',');
    setEmployee(editedEmployee);
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
            editing={editing}
            editFirstName={editFirstName}
            editLastName={editLastName}
            editCity={editCity}
            editCountry={editCountry}
            editTitle={editTitle}
            editEmployer={editEmployer}
            editFavoriteMovies={editFavoriteMovies}
          />
          <ActionBar 
            goToPreviousFn={goToPrevious}
            goToNextFn={goToNext}
            deleteEmployeeFn={deleteEmployee}
            toggleFormFn={toggleClass}
            toggleEditingFn={toggleEditing}
            editing={editing}
          />
          <form className={isActive ? 'newEmployeeForm' : 'hidden'} onSubmit={(e)=> addEmployee(e)}>
            <label>First Name:
              <input 
                type='text' 
                placeholder='First Name' 
                value={newEmployee.name.first} 
                onChange={(e)=> setNewEmployee({...newEmployee, name:{...newEmployee.name, first: e.target.value}})} 
              />
            </label>
            <label>Last Name:
              <input 
                type='text' 
                placeholder='Last Name' 
                value={newEmployee.name.last}
                onChange={(e)=> setNewEmployee({...newEmployee, name:{...newEmployee.name, last: e.target.value}})} 
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
                onChange={(e)=> setNewEmployee({...newEmployee, favoriteMovies: e.target.value.split(',')})}
              />
            </label>
            <p>*Separate movies with commas*</p>
            <button type='submit'>Add Employee</button>
          </form>
        </div>
      </body>
    </div>
  );
}

export default App;
