// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/license-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('Data received:', data); 
  const licenseBadge = renderLicenseBadge(data.license);
  console.log('License badge:', licenseBadge);
  const licenseSection = renderLicenseSection(data.license);

  const readmeContent = `# ${data.title} ${licenseBadge}

  ## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${licenseSection}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, you can reach me at:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
return readmeContent;
}

module.exports = generateMarkdown;

