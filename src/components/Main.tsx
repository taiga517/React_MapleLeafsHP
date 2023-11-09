import React from 'react';
import ForwardsList from './ForwardsList';
import DefencemanList from './DefencemanList';
import GoaliesList from './GoaliesList';

const Main = () => {
  return (
    <div className='MainWrapper'>
        <div className='Main'>
            <div className='Forwards'>
                <h3>Forwards</h3>
            </div>
            <ForwardsList/>
            <div className='Defensemen'>
                <h3>Defensemen</h3>
            </div>
            <DefencemanList/>
            <div className='Goalies'>
                <h3>Goalies</h3>
            </div>
            <GoaliesList/>
        </div>
    </div>
  );
}

export default Main;