const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");

inquirer.prompt ([
    {
        type: "checkbox",
        name: "jobTitle",
        message: "What is your job position?",
        choices: [Manager, Engineer, Intern]
    }
]).then(function(res) {
    var job = res.jobTitle;
    if (job === "Manager") {
        addManager();
    }
    if (job === "Engineer") {
        addEngineer();
    }
    if (job === "Intern") {
        addIntern();
    }
});

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is your full name?"
        },
        {
           type: "input",
           name: "managerIdNumber",
            message: "What is your id number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your office number?"
        }
    ])
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your full name"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your id number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your email address?" 
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school did you graduate from?"
        }
    ])
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your full name"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your id number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your email address?" 
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your Github username?"
        }
    ])
};




/*
prompt.list(role: Intern or Manager or Employee).done(function(res){
    var role = res.role;

    if(role==="manager"){
        addManager();
    }
    if (role==="intern"){
        addIntern()
    }
})

function addManager(){
    inquirer.prompt(
        name:
        id:
        emailId:
        Office Address:
    )
}

function addIntern(){
    inquirer.prompt(
        name:
        id:
        emailId:
        School:
    )
}


*/

​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
