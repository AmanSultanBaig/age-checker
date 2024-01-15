const moment = require("moment");

function ageChecker(dateOfBirth) {
  const birthDate = moment(dateOfBirth);
  const currentDate = moment();

  const years = currentDate.diff(birthDate, "years");
  birthDate.add(years, "years");

  const months = currentDate.diff(birthDate, "months");
  birthDate.add(months, "months");

  const days = currentDate.diff(birthDate, "days");

  return `Your Age: ${years} years, ${months} months & ${days} days`;
}

module.exports = ageChecker;
