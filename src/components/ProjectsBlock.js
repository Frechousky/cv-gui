import React from 'react';

import RightPanelBlock from './RightPanelBlock';

export default class ProjectsBlock extends RightPanelBlock {
    constructor(props) {
        super(props);
        this.icon = "fas fa-screwdriver fa-lg"
        this.title = "Projects";
    };

    // overload
    renderInnerBlock () {
        var projectList = this.props.projects.map((project, i) => <ProjectItem key={i} project={project} />);
        return (
            <div>
                {projectList}
            </div>
        );
    };
};

function ProjectItem(props) {
    var descriptionList = props.project.description.map(
        (descriptionItem, i) => <li key={i}>{descriptionItem}</li>);
    var urlAttributes = {
        "href": props.project.url,
    }
    return (
        <div className="row project-item">
            <div className="col-12 project-item-title">
                <a {...urlAttributes}>{props.project.title}</a>
            </div>
            <div className="col-12 project-item-year">
                {props.project.year}
            </div>
            <div className="col-12 project-item-description">
                <ul className="list-unstyled">
                    {descriptionList}
                </ul>
            </div>
        </div>
    );
}