import React from 'react';

export default class RightPanelBlock extends React.Component {
  render() {
    return (
      <div className="right-panel-block">
        <div className="right-panel-block-title">
          {this.title}
        </div>
        <div className="right-panel-inner-block">
          {this.renderInnerBlock()}
        </div>
      </div>
    );
  };

  renderInnerBlock() {
    throw Error('renderInnerBlock must be overloaded !');
  };
};
