// HOLDS ALL EMPLOYEE INFORMATION
import React from 'react';

function InfoCard(props) {
    const {employeeIndex,employee} = props;
    console.log(props.employeeArray[employeeIndex]);
    return (
        <div className="info-card">
            <div className="info-card-header">
                {employeeIndex + 1}/25
            </div>
            <div className="info-card-body">
                <span className="employee-name">
                    <h1>{employee.name.first} {employee.name.last}</h1>
                </span>
                <span className="employee-info">
                    <h2><strong>From:</strong> {employee.city}, {employee.country}</h2>
                    <h2><strong>Job Title:</strong> {employee.title}</h2>
                    <h2><strong>Employer:</strong> {employee.employer}</h2>
                </span>
                <span className="fav-movies">
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
                </span>
            </div>
        </div>
    )
}
export default InfoCard;