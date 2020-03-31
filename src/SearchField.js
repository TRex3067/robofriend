import React from 'react';

export default function SearchField({searchChange}){
    return (
        <div>
            <h1 className="blue lego f1">RoboFriends</h1>
            <input type="search" placeholder="Search robots..." onChange={searchChange} className="bg-lightest-blue pa3 br3 shadow-3 b--light-blueblue"></input>
            <hr width="100%" className="light-blue"></hr>
        </div>
    );
}