import { employees } from "../data/employees";
import { departments } from "../data/departments";

function namesFromDepartment() {
  // IMPLEMENT THIS FUNCTION
}

// DO NOT CHANGE THIS (except the skips)
describe("Starting with a list of employee information and valid departments,", function() {
  describe("The namesFromDepartment function", function() {
    it.skip("should throw an error if no departments are provided", function() {
      expect(function() {
        namesFromDepartment();
      }).toThrowError("Please provide a string or an array of strings.");
    });

    it.skip("should throw an error if provided with an object instead of departments", function() {
      expect(function() {
        namesFromDepartment({ department: 3 });
      }).toThrowError("Please provide a string or an array of strings.");
    });

    describe("when given a department", function() {
      it.skip('should only return names from the given department, sorted alphabetically by name"', function() {
        var results = namesFromDepartment("Management");
        expect(results).toEqual(["Alfred", "Betsy", "Catherine"]);
      });
    });

    describe("when given an array of departments", function() {
      it.skip('should only return names from the given departments, sorted alphabetically by name"', function() {
        var results = namesFromDepartment(["Management", "Development"]);
        expect(results).toEqual([
          "Alfred",
          "Barbara",
          "Betsy",
          "Catherine",
          "John"
        ]);
      });
    });
  });
});
