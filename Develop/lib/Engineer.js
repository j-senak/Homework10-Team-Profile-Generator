// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
  constructor(engineerName, engineerId, engineerEmail, engineerGithub) {
    if (!engineerName) {
      throw new Error("Please enter your full name.");
    }
    if (!engineerId) {
      throw new Error("Please your ID.");
    }
    if (!engineerEmail) {
      throw new Error("Please enter your email.");
    }
    if (!engineerGithub) {
      throw new Error("Please enter your Github.");
    }
    this.engineerName = engineerName;
    this.engineerId = engineerId;
    this.engineerEmail = engineerEmail;
    this.engineerGithub = engineerGithub;
  }
}

printEngineer();

module.export = Engineer;
