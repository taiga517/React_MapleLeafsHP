import React from 'react';

const GoaliesList = () => {
    return (
        <div className='ListItem'>
            <ul>
                <img className='PlayerImage' src="https://assets.nhle.com/mugs/nhl/20232024/TOR/8478492.png"/>
                <li className='PlayerName'>Ilya Samsonov</li>
                <li className='Number'>#35</li>
            </ul>
            <ul>
                <img className='PlayerImage' src="https://assets.nhle.com/mugs/nhl/20232024/TOR/8479361.png"/>
                <li className='PlayerName'>Joseph Woll</li>
                <li className='Number'>#60</li>
            </ul>
        </div>
    );
}

export default GoaliesList;