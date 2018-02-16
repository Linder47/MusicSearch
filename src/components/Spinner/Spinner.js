import React, { Component } from 'react';
import { DotLoader } from 'react-spinners';
import "./Spinner.css";

class Spinner extends Component {
    state = {
        loading: true
    };

    render() {
        return (
            <div className='spin'>
                <DotLoader
                    loading={this.state.loading}
                    color={this.props.color}
                />
            </div>
        )
    }
}

export default Spinner;