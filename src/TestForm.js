import React, {Component} from 'react';
import InputTree, {addChangeHandlers, getPrunedCopy} from 'react-input-tree';

const initialState = {
    settings1: {
        // Special properties:
        type: 'Group',
        options: {name: 'Settings 1', nodeClass: 'horizontal-group'},
        // All other properties of a 'Group' object are considered its child nodes:
        group1: {
            // another nested group...
            type: 'Group',
            options: {name: 'Group 1', nodeClass: 'vertical-group', childClass: 'checkbox-item'},
            // ...this group in turn contains input nodes
            check1: {type: 'Checkbox', options: {name: 'Checkbox 1'}, value: true},
            check2: {type: 'Checkbox', options: {name: 'Checkbox 2'}, value: false},
            radio: {
                type: 'RadioGroup',
                options: {name: 'radio group', nodeClass: 'horizontal-group', childClass: 'radio-item', itemsName: 'radios',
                    valueSet: {
                        one: 'First',
                        two: 'Second',
                        three: 'Third'
                    }
                },
                value: 'one'
            }
        },
        /// ...and so on...
        group2: {
            type: 'Group',
            options: {name: 'Group 2', nodeClass: 'vertical-group', childClass: 'range-item'},

            range1: {type: 'Range', options: {name: 'Range 1', min: 0, max: 100}, value: 10},
            range2: {type: 'Range', options: {name: 'Range 2', min: 50, max: 60}, value: 55},
            range3: {type: 'Range', options: {name: 'Range 3', min: -1, max: 1}, value: 0},
            text: {type: 'Text', options: {name: 'Text box:', nodeClass: 'text-item'}, value: 'default text'}
        }
    },
    settings2: {
        type: 'Group',
        options: {name: 'Settings 2', nodeClass: 'vertical-group'},

        block1: {
            type: 'Group',
            options: {name: 'Block 1', nodeClass: 'horizontal-group-centered'},

            check: {type: 'Checkbox', options: {name: 'Query checkbox'}, value: true},
            select: {
                type: 'RadioGroup',
                options: {
                    name: 'Select', nodeClass: 'horizontal-group', childClass: 'radio-item', itemsName: 'query-select',
                    valueSet: {
                        op1: 'Option 1',
                        op2: 'Option 2'
                    }
                },
                value: 'op1'
            }
        },
        block2: {
            type: 'Group',
            options: {name: 'Block 2', nodeClass: 'horizontal-group-centered'},

            enter: {type: 'Text', options: {name: 'Enter data:', nodeClass: 'text-item'}, value: ''},
            submitBtn: {type: 'Button', options: {name: 'Run query', nodeClass: 'button-item'} }
        }
    }
};

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        addChangeHandlers(this); // adds a 'handleChange' function to options property of each input node 
        this.submit = this.submit.bind(this);
        this.state.settings2.block2.submitBtn.options.handleClick = this.submit; // adding event handler to a button
    };

    submit() {
        this.props.onSubmit(getPrunedCopy(this.state));
    };

    render() {
        return (
            <div className="form">
                <h2>Form</h2>
                <InputTree node={this.state.settings1} />
                <InputTree node={this.state.settings2} />
            </div>
        );
    };
}

export default TestForm;