// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README file (${fileName}) successfully generated.`);
        }
    });
}


module.exports = writeToFile;
// TODO: Create a function to initialize app
function init() {
    // Use inquirer.prompt to ask questions and collect user input
    inquirer.prompt(questions).then((userData) => {
        // Generate the README content based on user input (replace this with your logic)
        const readmeContent = `# ${userData.projectTitle}\n\n...`;

        // Specify the README file name
        const fileName = 'README.md';

        // Write the README file
        writeToFile(fileName, readmeContent);
    });
}

// Function call to initialize app
init();
