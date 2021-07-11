import React, { useState, useEffect } from 'react';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// App components
import ApiLoadingError from './ApiLoadingError';
import Header from './Header';
import LoadingAnimation from './LoadingAnimation';

// CVs
import CvBlackAndWhite from '../../cvs/b&w/components/CvBlackAndWhite';

import '../assets/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import '../assets/bootstrap-5.0.2-dist/js/bootstrap.min.js';

// Add font-awesome icons
library.add(far, fas, fab);

const CVs = [
    { label: 'Black & White', component: CvBlackAndWhite },
    { label: 'Black & White', component: CvBlackAndWhite },
    { label: 'Black & White', component: CvBlackAndWhite },
];

export default function App(props) {
    const [state, setState] = useState({
        selectedCv: 0,
        cvGuiLoading: false,
        cvData: null,
        cvDataLoading: true,
        errorLoadingCvData: false,
        refresh: 0
    });
    
    useEffect(() => {
        (async () => {
            try {
                var cvData = await getCv('http://localhost/cvs/1');
                setState({...state, cvData: cvData, cvDataLoading: false});
            } catch (err) {
                setState({...state, errorLoadingCvData: true});
            }
        })();
    }, [state.refresh]);

    const onClickCvLink = (i) => {
        if (state.selectedCv === i) {
            // click on already selected cv, do nothing
            return;
        }
        // set loading screen for several ms then display new CV gui
        setState({...state, selectedCv: i, cvGuiLoading: true});
        setTimeout(() => { setState({...state, selectedCv: i, cvGuiLoading: false}); }, 500);
    };

    const onRefreshClick = () => {
        setState({...state, cvDataLoading: true, errorLoadingCvData: false, refresh: state.refresh + 1});
    };

    const generateSelectedCvHtml = () => { return React.createElement(CVs[state.selectedCv].component, {data: state.cvData}); };
    return (
        <div className='row'>
            <div className='col-12'>
                <Header cvs={CVs} selectedCv={state.selectedCv} onClickCvLink={onClickCvLink} disabled={state.cvGuiLoading || state.cvDataLoading} />
            </div>
            <div className='col-12' style={{marginTop: '2rem'}}>
                {state.errorLoadingCvData ? <ApiLoadingError onRefreshClick={onRefreshClick} /> : state.cvGuiLoading || state.cvDataLoading ? <LoadingAnimation /> : generateSelectedCvHtml()}
            </div>
        </div>
    );
};

const getCv = async (cvUrl) => {
    
    const fetchResourceObject = async (fetchUrl) => {
        return (await fetch(fetchUrl)).json();
    }
    
    const fetchResourceArray = async (fetchUrl) => {
        return (await fetchResourceObject(fetchUrl))._embedded;
    }

    const cv = await fetchResourceObject(cvUrl);
    const _links = cv._links;

    // Getting CVs related resources
    cv.contactInformation = await fetchResourceObject(_links.contactInformation.href);
    cv.languages = (await fetchResourceArray(_links.languages.href)).languages;
    cv.projects = (await fetchResourceArray(_links.projects.href)).projects;
    cv.skills = (await fetchResourceArray(_links.skills.href)).skills;
    cv.studies = (await fetchResourceArray(_links.studies.href)).studies;
    cv.workExperiences = (await fetchResourceArray(_links.workExperiences.href)).workExperiences;

    // Get company for each work experience
    // => Do not use cv.workExperiences.forEach as it is asynchronous
    for (const workExperience of cv.workExperiences) {
        workExperience.company = await fetchResourceObject(workExperience._links.company.href);
    }
    
    return cv;
}