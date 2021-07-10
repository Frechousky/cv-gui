import React from 'react'

export default function Header(props) {
    var cvLinks = [];
    props.cvs.forEach((e, i) => {
        var className = 'nav-link' + (props.disabled ? ' disabled' : '') + ((props.selectedCv === i) ? ' active' : '');
        cvLinks.push(
            <a key={i} className={className} href="#" onClick={() => {props.onClickCvLink(i);}}>{e.label}</a>
        );
    })
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-md bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Pick a CV GUI</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            {cvLinks}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );

}