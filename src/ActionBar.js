//  HOLDS ACTIONS AT BOTTOM OF THE SCREEN
import React from 'react';

function ActionBar(props) {
    const {goToPreviousFn, goToNextFn, deleteEmployeeFn, toggleFormFn, toggleEditingFn, editing} = props;
    return (
        <div className="action-bar">
            <div className="prev-btn">
                <button className='nav-btn'onClick={goToPreviousFn}>{'< Previous'}</button>
            </div>
            <div className="action-btns">
                <button onClick={toggleEditingFn}>{editing ? 'Save' : 'Edit'}</button>
                <button onClick={deleteEmployeeFn}>Delete</button>
                <button onClick={toggleFormFn}>New</button>
            </div>
            <div className='next-btn'>
                <button className='nav-btn' onClick={goToNextFn}>{'Next >'}</button>
            </div>
        </div>
    )
}

export default ActionBar;