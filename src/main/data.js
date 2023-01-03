export const cvData = {

  jobTitle: 'fullstack software engineer',
  hobbies: ['Playing badminton', 'Riding my bike', 'Watching a good movie'],

  contact: {
    firstName: 'alexandre',
    lastName: 'frèche',
    address: '49 route du pesquité',
    city: 'azur',
    zipCode: '40140',
    phone: '(+33)608963234',
    mail: 'alexandre.freche@gmail.com',
    dateOfBirth: '21/03/1991',
    driverLicence: 'driver license b',
  },

  languages: [{
    label: 'english',
    level: 4.0,
  }, {
    label: 'french',
    level: 5.0,
  }, {
    label: 'spanish',
    level: 2.0,
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
    level: 4,
  }, {
    label: 'python',
    level: 3.5,
  }, {
    label: 'php',
    level: 3.5,
  }, {
    label: 'Javascript',
    level: 3.5,
  }, {
    label: 'react',
    level: 3.0,
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
        field: 'software engineering',
        country: 'france',
        city: 'toulouse',
      },
      description: [[
        'aeronautic application maintenance and update',
        'update an ARINC 665 file generator to be compatible with ARINC 665-3 standard',
        'read standard documentation',
        'bug fixes',
        'stack: Java, Swing',
      ],
      ['maritime application update',
        'add password security check (check that password contains digits, lowercase/uppercase/special characters) during user accounts creation/update',
        'stack: Java, PHP, Javascript, Oracle, Maven, Jenkins',
      ], [
        'maritime security application maintenance',
        'exchange with clients through JIRA',
        'analyse logs from clients prod/integration application',
        'implement and test bug fix',
        'stack: Java, Spring, Javascript, Oracle, Maven, Jenkins ',
        'legacy code removal from a maritime application',
        'remove obsolete code before revamping a 10+ year app',
        'stack: Java, Php, Oracle, Maven, Jenkins',
      ],
      'maritime firewall server revamp',
      'add REST APIs to monitor loaded firewalls',
      'revamp firewall data structures/API/loading mechanism',
      'reading of C libraries documentation and source code',
      'stack: C (libiptc, libipset, libmicrohttpd), multithreading, Jenkins',
      ],
      start: '06/2020',
      end: '10/2022',
    }, {
      position: 'junior fullstack software engineer',
      company: {
        name: 'sopra banking software',
        field: 'banking software',
        country: 'france',
        city: 'toulouse',
      },
      description: [
        'maintenance of a credit card management app',
        'security improvements after internal security audit (XSS, SQLI, CVE)',
        'exchange with clients through homemade ticketing application',
        'analyse logs from clients production / integration application',
        'implement and test bug fixes',
        'stack: Java (1.3/1.6), JSP, Javascript',
      ],
      start: '06/2019',
      end: '06/2020',
    }, {
      position: 'junior fullstack software engineer',
      company: {
        name: 'sopra banking software',
        field: 'banking software',
        country: 'france',
        city: 'tours',
      },
      description: [
        'web banking app update and maintenance',
        'security improvements after internal security audit (XSS, SQLI, CVE)',
        'implement and test new functionnalities based on specifications',
        'exchange with clients through homemade ticketing application',
        'implement and test bug fixes',
        'stack: Java 8, JSP, Javascript, Bootstrap, Maven, Jenkins',
      ],
      start: '09/2017',
      end: '06/2019',
    }, {
      position: 'fullstack software engineer intern',
      company: {
        name: 'sopra banking software',
        field: 'banking software',
        country: 'france',
        city: 'tours',
      },
      description: [
        'web banking app GUI revamp',
        'add bootstrap to a web banking application',
        'revamp 50+ GUIs in a SCRUM environment',
        'implement and test new functionnalities (back + front)',
        'stack: Java 8, JSP, Javascript, Bootstrap, Maven, Jenkins',
      ],
      start: '04/2017',
      end: '09/2017',
    }],
};
