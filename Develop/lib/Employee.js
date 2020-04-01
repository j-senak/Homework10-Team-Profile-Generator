// TODO: Write code to define and export the Employee class
class Employee {
    constructor(jobTitle) {
        if (!jobTitle) {
            throw new Error("Please enter your job title.");
        }
        this.jobTitle = jobTitle;
    }
}

printJobTitle();


module.export = Employee;