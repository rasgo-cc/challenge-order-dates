var assert = require("assert");

// We have a list of dates we want to sort from current date (now).
// Dates in the past should be shown at the end but still sorted by most
// recent date

const dates = [
  "2020-06-27",
  "2020-05-01",
  "2020-04-26",
  "2020-05-01",
  "2019-06-15",
  "2020-03-01",
  "2019-06-08",
  "2020-07-04",
  "2019-07-27",
  "2019-08-17",
  "2019-09-01",
  "2019-10-04",
  "2020-05-08",
  "2019-12-27",
  "2019-04-18",
  "2019-09-14",
  "2020-04-11",
  "2019-09-21",
  "2019-09-22",
  "2019-10-05"
];

describe("Array", function() {
  describe("Array of dates", function() {
    it("should be sorted from current date (past dates should show up at the end)", function() {
      // considering now = 2019-09-17
      const expected = [
        "2019-09-21",
        "2019-09-22",
        "2019-10-04",
        "2019-10-05",
        "2019-12-27",
        "2020-03-01",
        "2020-04-11",
        "2020-04-26",
        "2020-05-01",
        "2020-05-01",
        "2020-05-08",
        "2020-06-27",
        "2020-07-04",
        "2019-04-18",
        "2019-06-08",
        "2019-06-15",
        "2019-07-27",
        "2019-08-17",
        "2019-09-01",
        "2019-09-14"
      ];

      // CODE HERE (sort the dates)
      const sortedDates = [];

      assert.deepEqual(sortedDates, expected);
    });
  });
});
