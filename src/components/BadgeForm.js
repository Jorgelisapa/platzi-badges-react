import React, { Component } from 'react';

class BadgeForm extends Component {
 
     state = {};


    handleClick = e => {
        console.log('Button was Clicked');
    };


    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className='form-control' 
                        type="text" 
                        name='firstName'
                        value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className='form-control' 
                        type="text" 
                        name='lastName'
                        value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">E-mail</label>
                        <input 
                        onChange={this.props.onChange} 
                        className='form-control' 
                        type="email" 
                        name='email'
                        value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input 
                        onChange={this.props.onChange} 
                        className='form-control' 
                        type="text" 
                        name='jobTitle'
                        value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input 
                        onChange={this.props.onChange} 
                        className='form-control' 
                        type="text" 
                        name='twitter'
                        value={this.state.twitter}
                        />
                    </div>

                    <button
                    onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>

                    {this.props.error && (
                        <p className='text-danger' >{this.props.error.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default BadgeForm;