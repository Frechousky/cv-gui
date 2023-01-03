import React from 'react';
import {capitalize, titleize} from 'underscore.string';

import profilePictureSrc from '../assets/img/profilePicture.jpg';

export default function Header(props) {
  return (
    <header className="col-12 header">
      <div className="row text-center">
        <div className="col-12">
          <ProfilePicture src={profilePictureSrc} />
        </div>
        <div className="col-12 fullname">
          {capitalize(props.data.contact.firstName)} {capitalize(props.data.contact.lastName)}
        </div>
        <div className="col-12 job-title">
          {titleize(props.data.jobTitle)}
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
