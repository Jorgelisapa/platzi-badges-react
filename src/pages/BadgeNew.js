import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends React.Component {

    state = { 
        form: {
        firstName: '',
        lastName: '',
        email: '',
        twitter: '',
        jobTitle: '',
    },
};

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className='BadgeNew__hero'>
                    <img 
                    className='BadgeNew__hero-image img-fluid' 
                    src={header} 
                    alt='logo' 
                    />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge 
                            firstName={this.state.form.firstName || 'First Name'} 
                            lastName={this.state.form.lastName || 'Last Name'} 
                            twitter={this.state.form.twitter || 'Twitter'} 
                            jobTitle={this.state.form.jobTitle || 'Job Title' }
                            email={this.state.form.email}
                            avatarUrl='https://es.gravatar.com/avatar/e5b7669b830aa08e8095ebeaba50e867?d=identicon'
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form} 
                            />
                        </div>
                    </div>
                </div>
                </React.Fragment>
        )
    }
}

export default BadgeNew;