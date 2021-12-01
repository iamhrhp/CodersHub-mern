import React from 'react';

const StepName = ({onNext}) => {
    return (
        <>
            <div> Name Components</div>
            <button onClick={onNext}>Next</button>
        </>
    );
};

export default StepName;
