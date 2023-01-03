import React from 'react';

import diamondPng from '../assets/img/diamond.png';

export default class LeftPanelBlock extends React.Component {
  render() {
    const title = (typeof this.title !== 'undefined') ? <LeftPanelBlockTitle label={this.title} /> : '';
    return (
      <div className="left-panel-block">
        {title}
        {this.renderInnerBlock()}
      </div>
    );
  };

  renderInnerBlock() {
    throw Error('renderInnerBlock must be overloaded !');
  };
}

function LeftPanelBlockTitle(props) {
  return (
    <div className="left-panel-block-title">
      <img src={diamondPng} alt=""/>&nbsp;&nbsp;&nbsp;{props.label}&nbsp;&nbsp;&nbsp;<img src={diamondPng} alt="" />
    </div>
  );
};
