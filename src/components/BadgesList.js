import React, { Component } from 'react';

import '../components/styles/BadgesList.css'

import { Link } from 'react-router-dom';

class BadgesList extends Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h1>No Badges were found</h1>
                    <Link 
                    className='btn btn-primary' 
                    to='/badges/new'>
                        Create new Badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className='list-unstyled' >
            {this.props.badges.map((badge) => {
                return (
                    <li className="BadgesList-item" key={badge.id} >

                        <img 
                        className="BadgesListItem__avatar" 
                        src={badge.avatarUrl}
                        alt="Avatar"
                        />

                        <div>
                            <div><strong>{badge.firstName} {badge.lastName}</strong></div>

                            <div className="Twitter__name">
                                <span className="Twitter__logo"></span>@{badge.twitter}
                            </div>
                            <div>{badge.jobTitle}</div>
                        </div>
                    </li>
                )
            })}
            </ul>
        );
    }
}

export default BadgesList;

