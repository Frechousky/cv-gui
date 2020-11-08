import React from 'react';

import LeftPanelBlock from './LeftPanelBlock';
import { SkillItem } from './SkillsBlock';

export default class LanguagesBlock extends LeftPanelBlock {
    constructor(props) {
        super(props);
        this.title = "Langues";
    };
    
    // overload
    renderInnerBlock() {
        var languageList = this.props.languages.map((language, i) => <SkillItem key={i} skill={language} />);
        return (
            <div className="col-12">
                {languageList}
            </div>
        );
    };
};