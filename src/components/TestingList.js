import React from 'react';

const TestingList = (props) =>{
    return (
        <li>
          <a href="javascript:void(0)" onClick={ () => {
            props.clickHandler(props.index)
          }} className={props.info.completed ? 'active' : ''}>
          {props.info.name}
          </a>
        </li>
      )
}

  export default TestingList;