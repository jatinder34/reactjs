import React from 'react';

const TestingForm = (props) => {
    return (
        <form>
            <input 
                value={props.currentemploy}
                type="text" 
                placeholder="Enter Name"
                onChange={props.udateStatus}
            />
            {/* <input type="submit" value="Save"/> */}
        </form>
    )
}

export default TestingForm;