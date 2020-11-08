import React from 'react';

import LeftPanelBlock from './LeftPanelBlock';

export default class SkillsBlock extends LeftPanelBlock {
    constructor(props) {
        super(props);
        this.title = "Compétences";
    };

    // overload
    renderInnerBlock() {
        var skillList = this.props.skills.map((skill, i) => <SkillItem key={i} skill={skill} />);
        return (
            <div className="col-12">
                {skillList}
            </div>
        );
    };
};

export function SkillItem(props) {
    var label = (props.skill.icon !== undefined) ? "" : props.skill.label;
    return (
        <div className="row">
            <div className="col-12">
                {label}<i className={props.skill.icon}/>
            </div>
            <div className="col-12" style={{paddingBottom: "1rem"}}>
                <SkillLevel level={props.skill.level} />
            </div>
        </div>
    );
};

function SkillLevel(props) {
    const skillStarsNb = 5;
    var skillStars = [];
    for (var i = 0; i < skillStarsNb; i++) {
        var tmp = props.level - i;
        if (tmp <= 0) {
            skillStars.push(<SkillEmptyStar key={i} />);
        } else if (tmp === 0.5) {
            skillStars.push(<SkillHalfStar key={i} />);
        }
        else if (tmp >= 1) {
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
        <i className="fa fa-star"></i>
    );
};

function SkillHalfStar(props) {
    return (
        <i className="fas fa-star-half-alt"></i>
    );
};

function SkillEmptyStar(props) {
    return (
        <i className="far fa-star"></i>
    );
};