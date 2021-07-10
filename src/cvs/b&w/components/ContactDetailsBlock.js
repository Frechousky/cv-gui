import React from 'react';
import moment from 'moment';

import LeftPanelBlock from './LeftPanelBlock';

export default class ContactDetailsBlock extends LeftPanelBlock {
    constructor(props) {
        super(props);
        this.title = "Contact Information";
        this.mailAttributes = {
            "href": "mailto:" + this.props.contactInformation.mail
        };
        this.phoneAttributes = {
            "href": "tel:" + this.props.contactInformation.phone
        }
    };

    // overload
    renderInnerBlock() {
        let nbYears = moment(this.props.contactInformation.dateOfBirth, 'dd/MM/yyyy').fromNow(true).split(" ")[0];
        return (
            <ul className="list-unstyled">
                <li>{this.props.contactInformation.address}</li>
                <li>{this.props.contactInformation.zipCode} {this.props.contactInformation.city}</li>
                <li><a {...this.mailAttributes}>{this.props.contactInformation.mail}</a></li>
                <li><a {...this.phoneAttributes}>{this.props.contactInformation.phone}</a></li>
                <li>{nbYears} years ({this.props.contactInformation.driverLicence})</li>
            </ul>
        );
    };
};