// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(managerName, managerId, managerEmail, managerOfficeNumber) {
      if (!managerName) {
        throw new Error("Please enter your full name.");
      }
      if (!managerId) {
        throw new Error("Please your ID.");
      }
      if (!managerEmail) {
        throw new Error("Please enter your email.");
      }
      if (!managerOfficeNumber) {
        throw new Error("Please enter your office number.");
      }
      this.managerName = managerName;
      this.managerId = managerId;
      this.managerEmail = managerEmail;
      this.managerOfficeNumber = managerOfficeNumber;
    }
  }
  
  printManager();
  
  module.export = Manager;