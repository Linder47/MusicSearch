import React, { Component } from 'react';
import './UserSearch.css';

const UserSearch = (props) => {
    return (
        <div className='UserSearchForm'>
            <form className='form' onSubmit={props.onAddSearch}>
                <input
                    type='text'
                    value={props.value}
                    onChange={(e) => {props.onAddTextChange(e.target.value)}} />
                    <button className='UserSearchButton'>
                    Искать {props.value}</button>
            </form>
        </div>
    )
}

export default UserSearch;