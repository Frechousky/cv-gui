import React from 'react';

import ContactBlock from './ContactBlock';
import SkillsBlock from './SkillsBlock';
import LanguagesBlock from './LanguagesBlock';
import EducationBlock from './EducationBlock';
import HobbiesBlock from './HobbiesBlock';

export default function LeftPanel(props) {
  return (
    <div className="col-4 text-center" id="leftPanel">
      <ContactBlock contact={props.data.contact} />
      <SkillsBlock skills={props.data.skills} />
      <LanguagesBlock languages={props.data.languages} />
      <EducationBlock studies={props.data.studies} />
      <HobbiesBlock hobbies={props.data.hobbies} />
    </div>
  );
};
