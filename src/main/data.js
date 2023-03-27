export const cvData = {

  jobTitle: 'software engineer',
  bio: 'software engineer with 5 years experience in Banking, Maritime and Aeronautic fields.',
  hobbies: ['playing badminton', 'riding my bike'],

  contact: {
    firstName: 'alexandre',
    lastName: 'frèche',
    address: '49 route du pesquité',
    city: 'azur',
    country: 'france',
    department: '40',
    zipCode: '40140',
    phone: '(+33)608963234',
    mail: 'alexandre.freche@gmail.com',
    linkedin: 'https://fr.linkedin.com/in/alexandre-fr%C3%A8che-270071114',
    github: 'https://github.com/Frechousky/',
    dateOfBirth: '21/03/1991',
  },

  languages: [{
    label: 'english',
    level: 'advanced',
  }, {
    label: 'french',
    level: 'native',
  }, {
    label: 'spanish',
    level: 'beginner',
  }],

  projects: [{
    title: 'cv application',
    year: '2021',
    description: [
      'stack: React',
    ],
  }],

  skills: [{
    label: 'Java',
  },
  {
    label: 'Spring',
  }, {
    label: 'Python',
  }, {
    label: 'C',
  }, {
    label: 'Javascript',
  }],

  studies: [{
    degree: 'MASTER',
    field: 'computer sciences',
    specialization: 'software engineering',
    url: 'https://www.cci.univ-tours.fr/',
    school: 'university françois rabelais',
    start: '2016',
    end: '2017',
    city: 'tours',
    description: [],
  }, {
    degree: 'MASTER',
    field: 'mathematics and electronics',
    specialization: 'signal and image processing',
    url: null,
    school: 'university of bordeaux',
    start: '2013',
    end: '2015',
    city: 'bordeaux',
    description: [],
  }, {
    degree: 'BACHELOR',
    field: 'applied mathematics',
    specialization: 'mathematics and engineering',
    url: null,
    school: 'university of bordeaux',
    start: '2009',
    end: '2013',
    city: 'bordeaux',
    description: [],
  }],

  workExperiences: [
    {
      position: 'fullstack software engineer',
      company: {
        name: 'viveris technologies',
        field: 'aeronautic, maritime and space',
        country: 'france',
        city: 'toulouse',
      },
      description: [
        'fix and improve an aeronautic app according to aircraft industry\'s standards (stack: Java, C)',
        'add password complexity checking and encryption to a maritime app (stack: Java, Spring, PHP, Javascript)',
        'revamp SOAP API into REST API (both client and server) (stack: Java, Springboot, Python)',
        'maintenance and exchange with customer through a ticketing app for a maritime security app (stack: Java, Spring, Javascript, Maven, Jenkins)',
        'revamp and improvement of a firewall API from a maritime app (stack: C, libiptc, libipset, libmicrohttpd, Jenkins)',
      ],
      start: '06/2020',
      end: '10/2022',
    }, {
      position: 'junior fullstack software engineer',
      company: {
        name: 'sopra banking software',
        field: 'banking',
        country: 'france',
        city: 'toulouse',
      },
      description: [
        'update and maintenance a credit card management app',
        'improve security (XSS, SQLI, CVE)',
        'exchange with clients through ticketing application',
        'stack: Java (1.3/1.6), JSP, Javascript',
      ],
      start: '06/2019',
      end: '06/2020',
    }, {
      position: 'junior fullstack software engineer',
      company: {
        name: 'sopra banking software',
        field: 'banking',
        country: 'france',
        city: 'tours',
      },
      description: [
        'update and maintenance of a web banking app',
        'improve security (XSS, SQLI, CVE)',
        'implement and test new functionnalities based on specifications',
        'exchange with clients through ticketing application',
        'stack: Java 8, JSP, Javascript, Bootstrap, Maven, Jenkins',
      ],
      start: '09/2017',
      end: '06/2019',
    }, {
      position: 'fullstack software engineer intern',
      company: {
        name: 'sopra banking software',
        field: 'banking',
        country: 'france',
        city: 'tours',
      },
      description: [
        'revamp of 50+ GUIs in a SCRUM environment',
        'implement and test new functionnalities (back + front)',
        'stack: Java 8, JSP, Javascript, Bootstrap, Maven, Jenkins',
      ],
      start: '04/2017',
      end: '09/2017',
    }],
};
