// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
          err ? console.error(err) : console.log('top tier README.md generated!')
        );
      }

}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
    // Generate README content based on user answers
    const readmeContent = generateReadme(answers);

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}
// Function call to initialize app
init();
