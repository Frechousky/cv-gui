import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App.js';
import './assets/css/app.css';


const getCv = async (cvUrl) => {
    const fetchCvRelatedResourceObject = async (fetchUrl) => {
        const response = await fetch(fetchUrl);
        return await response.json();
    }

    const fetchCvRelatedResourceArray = async (fetchUrl) => {
        const response = await fetch(fetchUrl);
        return (await response.json())._embedded;
    }

    const cv = await fetchCvRelatedResourceObject(cvUrl);
    const _links = cv._links;

    // Getting CVs related resources
    cv.contactInformation = (await fetchCvRelatedResourceObject(_links.contactInformation.href));
    cv.languages = (await fetchCvRelatedResourceArray(_links.languages.href)).languages;
    cv.projects = (await fetchCvRelatedResourceArray(_links.projects.href)).projects;
    cv.skills = (await fetchCvRelatedResourceArray(_links.skills.href)).skills;
    cv.studies = (await fetchCvRelatedResourceArray(_links.studies.href)).studies;
    cv.workExperiences = (await fetchCvRelatedResourceArray(_links.workExperiences.href)).workExperiences;

    // Get company for each work experience
    // => Do not use cv.workExperiences.forEach as it is asynchronous
    // and workExperience.company could be undefined while rendering with React
    for (const workExperience of cv.workExperiences) {
        workExperience.company = await fetchCvRelatedResourceObject(workExperience._links.company.href);
    }
    
    return cv;
}

(async () => {
    const cv = await getCv('http://localhost:8080/cvs/1');
    ReactDOM.render(<App data={cv} />, document.getElementById('root'))
})();