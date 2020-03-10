import React, { Component } from 'react';

class BadgeForm extends Component {
    handleChange = reciveEvento => {
        console.log({ 
            name: reciveEvento.target.name,
            value: reciveEvento.target.value 
        });
    };

    handleClick = reciveEventoClick => {
        console.log('Button was Clicked');
    };

    handleSubmit = reciveEventoSubmit => {
        reciveEventoSubmit.preventDefault();
        console.log("Form was submitted")
    };
    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input onChange={this.handleChange} className='form-control' type="text" name='firstName'/>
                    </div>
                    <button
                    onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;