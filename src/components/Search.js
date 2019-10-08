import React, {Component} from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export default class Search extends Component{
    render(){
        return (
            <div className="mr-sm-2" style={{ flex: 1 }}>
                <InputGroup className="mb-3" style={searchStyle.inputStyle}>
                <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    onChange={(e) => this.props.searchPost(e.target.value)}
                />
                </InputGroup>
            </div>
        );
    }
}

const searchStyle = {
    buttonStyle: {
        'background': ''
    },
    inputStyle: {
        'marginTop': 15,
        'width': '100%',
    }
}