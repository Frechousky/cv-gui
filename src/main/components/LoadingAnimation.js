import React from 'react';

export default function LoadingAnimation(props) {
    return (    
        <div style={{'position': 'fixed', 'width': '100%', 'height': '100%', 'display': 'flex', 'alignItems': 'center', 'top': 0}}>
            <div className="spinner-border" role="status" style={{'display': 'flex', 'margin': '0 auto'}}></div>
        </div>
    );
};
