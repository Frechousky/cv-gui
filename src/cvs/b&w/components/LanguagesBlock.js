import React from 'react';
import {capitalize} from 'underscore.string';

import LeftPanelBlock from './LeftPanelBlock';

export default class LanguagesBlock extends LeftPanelBlock {
  constructor(props) {
    super(props);
    this.title = 'Languages';
  };

  // overload
  renderInnerBlock() {
    const languages = this.props.languages
        .map((e) => `${capitalize(e.label)} (${e.level})`)
        .join(', ');
    return (
      <div className="col-12">
        {languages}
      </div>
    );
  };
};
