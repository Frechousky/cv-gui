import React from 'react';

export default class RightPanelBlock extends React.Component {
    render() {
        var title = (typeof this.title !== "undefined") ? <RightPanelBlockTitle icon={this.icon} label={this.title} /> : '';
        return (
            <div className="right-panel-block">
                {title}
                <div className="right-panel-inner-block">
                    {this.renderInnerBlock()}
                </div>
            </div>
        );
    };

    renderInnerBlock() {
        throw Error("renderInnerBlock must be overloaded !");
    };

}

function RightPanelBlockTitle(props) {
    var icon = (typeof props.icon !== "undefined") ? <i className={props.icon} /> : "";
    return (
        <div className="right-panel-block-title">
            <span className="right-panel-block-title-icon">{icon}</span>{props.label}
        </div>
    );
};