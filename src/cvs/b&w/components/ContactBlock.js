import React from 'react';
import moment from 'moment';
import {capitalize} from 'underscore.string';
import LeftPanelBlock from './LeftPanelBlock';


export default class ContactBlock extends LeftPanelBlock {
  constructor(props) {
    super(props);
    this.title = 'Contact Information';
    this.mailAttributes = {
      href: 'mailto:' + this.props.contact.mail,
    };
    this.phoneAttributes = {
      href: 'tel:' + this.props.contact.phone,
    };
  };

  // overload
  renderInnerBlock() {
    const nbYears = moment(this.props.contact.dateOfBirth, 'dd/MM/yyyy').fromNow(true).split(' ')[0];
    return (
      <ul className="list-unstyled">
        <li><a {...this.mailAttributes}>{this.props.contact.mail}</a></li>
        <li><a {...this.phoneAttributes}>{this.props.contact.phone}</a></li>
        <li>{this.props.contact.address}, {this.props.contact.zipCode} {capitalize(this.props.contact.city)} ({capitalize(this.props.contact.country)})</li>
        <li>{nbYears} years</li>
      </ul>
    );
  };
}
