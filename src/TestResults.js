import React from 'react';

const TestResults = (props) => {
    return (
        <div className="results">
            <h2>Results</h2>
            <p>{JSON.stringify(props.formData)}</p>
        </div>
    );
};

export default TestResults;