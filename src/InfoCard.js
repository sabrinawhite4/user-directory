// HOLDS ALL EMPLOYEE INFORMATION
import React from 'react';

function InfoCard(props) {
    const {
        employeeIndex, 
        employeeArray, 
        editing, 
        editFirstName, 
        editLastName, 
        editCity, 
        editCountry, 
        editTitle, 
        editEmployer
    } = props;
    const employee = employeeArray[employeeIndex];

    return (
        <div className="info-card">
            <div className="info-card-header">
                {employeeIndex + 1}/{employeeArray.length}
            </div>
            <div className="info-card-body">
                <span className="employee-name">
                    {editing ? 
                        <div>
                            <label>First Name: </label>
                            <input value={employee.name.first} onChange={editFirstName}></input>
                            <label>Last Name: </label>
                            <input value={employee.name.last} onChange={editLastName}></input> 
                        </div>
                        : <h1>{employee.name.first} {employee.name.last}</h1>}  
                </span>
                <span className="employee-info">
                    {editing ?
                    <div>
                        <label>City: </label>
                        <input value={employee.city} onChange={editCity}></input>
                        <label>Country: </label>
                        <input value={employee.country} onChange={editCountry}></input>
                        <label>Job Title: </label>
                        <input value={employee.title} onChange={editTitle}></input>
                        <label>Employer: </label>
                        <input value={employee.employer} onChange={editEmployer}></input>
                    </div>
                    : 
                    <div>
                        <h2><strong>From:</strong> {employee.city}, {employee.country}</h2>
                        <h2><strong>Job Title:</strong> {employee.title}</h2>
                        <h2><strong>Employer:</strong> {employee.employer}</h2>
                    </div>
                    }
                </span>
                <span className="fav-movies">
                    {!editing ?
                    <div> 
                    <h2><strong>Favorite Movies:</strong></h2>
                    <ol className="fav-movies-list">
                        {employee.favoriteMovies.map((movie, index) => {
                            return (
                                <li key={index}>
                                    {movie}
                                </li>
                            );
                        }
                        )}
                    </ol>
                    </div> : 
                    <div>
                        <label>3 Favorite Movies: </label>
                        <input value={employee.favoriteMovies.join()}></input>
                    </div>
                    }
                </span>
            </div>
        </div>
    )
}
export default InfoCard;