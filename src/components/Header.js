import React from 'react';

import profilePictureSrc from '../assets/img/profilePicture.jpg';

export default function Header(props) {
    return (
        <header className="col-12 header">
            <div className="row text-center">
                <div className="col-12">
                    <ProfilePicture src={profilePictureSrc} />
                </div>
                <div className="col-12 fullname">
                    {props.data.contactInformation.firstName} {props.data.contactInformation.lastName}
                </div>
                <div className="col-12 job-title">
                    {props.data.jobTitle}
                </div>
            </div>
        </header>
    );
};

function ProfilePicture(props) {
    return (
        <img className="profile-picture" alt="Profile pic" src={props.src}></img>
    );
};