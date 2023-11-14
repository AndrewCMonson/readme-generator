const renderLicenseBadge = (license) => {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GPL') { 
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'BSD') { 
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
        return ''
    };
}

const createMarkdown = ( { title, description, installation, usage, license, contribution, test, github, email } ) => {
    return `
# ${title}

## License
${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing Guidelines](#contributing-guidelines)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)

## Installation
${installation}

## Usage
${usage}

## Contributing Guidelines
${contribution}

## Tests
${test}

## Contact
Link to my [Github](https://github.com/${github})\n
Email me [here](mailto:${email})
`
}

module.exports = {
    createMarkdown,
    renderLicenseBadge
}