import React from 'react';

import Header from './Header';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function App(props) {
    return (
        <div className="container">
            <div className="row">
                <Header data={props.data} />
                <LeftPanel data={props.data} />
                <RightPanel data={props.data} />
            </div>
        </div>
    );
};