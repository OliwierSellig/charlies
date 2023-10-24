export function numberToDoubleDigit(number) {
  if (String(number).length > 1 || number < 0) return number;
  return `0${number}`;
}

export function getMonthName(number) {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthList.at(number);
}
