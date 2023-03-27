import React from 'react';
import {capitalize} from 'underscore.string';
import LeftPanelBlock from './LeftPanelBlock';

export default class SkillsBlock extends LeftPanelBlock {
  constructor(props) {
    super(props);
    this.title = 'Skills';
  };

  // overload
  renderInnerBlock() {
    const skills = this.props.skills
        .map((skill) => capitalize(skill.label))
        .join(', ');
    return (
      <div className="col-12">
        {skills}
      </div>
    );
  };
};
