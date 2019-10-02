import React, {Component} from 'react';
import TestForm from './TestForm.js';
import TestResults from './TestResults.js';

class TestApp extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.updateResults = this.updateResults.bind(this);
    };

    updateResults(formData) {
        this.setState(formData);
    };

    render() {
        return (
            <>
            <h1>App</h1>
            <TestForm onSubmit={this.updateResults}/>
            <TestResults formData={this.state}/>
            </>
        );
    };
}

export default TestApp;