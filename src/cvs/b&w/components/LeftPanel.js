import React from 'react';

import ContactDetailsBlock from './ContactDetailsBlock'
import SkillsBlock from './SkillsBlock'
import LanguagesBlock from './LanguagesBlock'
import EducationBlock from './EducationBlock'
import HobbiesBlock from './HobbiesBlock'

export default function LeftPanel(props) {
    return (    
        <div className="col-4 text-center" id="leftPanel">
            <ContactDetailsBlock contactInformation={props.data.contactInformation} />
            <SkillsBlock skills={props.data.skills} />
            <LanguagesBlock languages={props.data.languages} />
            <EducationBlock studies={props.data.studies} />
            <HobbiesBlock hobbies={props.data.hobbies} />
        </div>
    );
};

