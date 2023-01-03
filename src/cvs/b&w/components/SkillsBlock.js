import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {capitalize, trim} from 'underscore.string';

import LeftPanelBlock from './LeftPanelBlock';

export default class SkillsBlock extends LeftPanelBlock {
  constructor(props) {
    super(props);
    this.title = 'Skills';
  };

  // overload
  renderInnerBlock() {
    const skillList = this.props.skills.map((skill, i) => <SkillItem key={i} skill={skill} displayIcon={true} />);
    return (
      <div className="col-12">
        {skillList}
      </div>
    );
  };
};

export function SkillItem(props) {
  let faIcon = props.displayIcon ? trim(props.skill.label).toLowerCase() : null;
  faIcon = faIcon === 'javascript' ? 'js' : faIcon;
  return (
    <div className="row">
      <div className="col-12">
        {props.displayIcon ? <FontAwesomeIcon icon={['fab', faIcon]} size='2x' /> : capitalize(props.skill.label)}
      </div>
      <div className="col-12" style={{paddingBottom: '1rem'}}>
        <SkillLevel level={props.skill.level} />
      </div>
    </div>
  );
};

function SkillLevel(props) {
  const skillStarsNb = 5;
  const skillStars = [];
  for (let i = 0; i < skillStarsNb; i++) {
    const tmp = props.level - i;
    if (tmp <= 0) {
      skillStars.push(<SkillEmptyStar key={i} />);
    } else if (tmp === 0.5) {
      skillStars.push(<SkillHalfStar key={i} />);
    } else if (tmp >= 1) {
      skillStars.push(<SkillFullStar key={i} />);
    }
  }
  return (
    <div>
      {skillStars}
    </div>
  );
};

function SkillFullStar(props) {
  return (
    <FontAwesomeIcon icon={['fas', 'star']} />
  );
};

function SkillHalfStar(props) {
  return (
    <FontAwesomeIcon icon={['fas', 'star-half-alt']} />
  );
};

function SkillEmptyStar(props) {
  return (
    <FontAwesomeIcon icon={['far', 'star']} />
  );
};
