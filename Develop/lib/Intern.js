// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(internName, internId, internEmail, internSchool) {
      if (!internName) {
        throw new Error("Please enter your full name.");
      }
      if (!internId) {
        throw new Error("Please your ID.");
      }
      if (!internEmail) {
        throw new Error("Please enter your email.");
      }
      if (!internSchool) {
        throw new Error("Please enter the school you attended.");
      }
      this.internName = internName;
      this.internId = internId;
      this.internEmail = internEmail;
      this.internSchool = internSchool;
    }
  }
  
  printIntern();
  
  module.export = Intern;