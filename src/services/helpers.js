import dayjs from "dayjs";

export function numberToDoubleDigit(number) {
  if (String(number).length > 1 || number < 0) return number;
  return `0${number}`;
}

export function formatDate(rawDate) {
  const date = !rawDate?.$D && rawDate?.$D !== 0 ? dayjs(rawDate) : rawDate;
  const day = numberToDoubleDigit(date.date());
  const month = numberToDoubleDigit(date.month() + 1);
  const year = date.year();
  return `${day}.${month}.${year}`;
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

export function generateMonthDays(
  month = dayjs().month(),
  year = dayjs().year()
) {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
  const dayNumber = 42;

  const prefixArray = Array.from(
    { length: firstDateOfMonth.day() },
    (date, i) => firstDateOfMonth.day(i)
  );

  const dayArray = Array.from({ length: lastDateOfMonth.date() }, (date, i) =>
    firstDateOfMonth.date(i + 1)
  );

  const suffixArray = Array.from(
    {
      length: dayNumber - (prefixArray.length + dayArray.length),
    },
    (_, i) => lastDateOfMonth.date(lastDateOfMonth.date() + i + 1)
  );

  return prefixArray.concat(dayArray, suffixArray);
}

export function checkIfAbleDate(activeDate, day, fastest) {
  if (activeDate.month() !== day.$M) return false;
  if (!day.$W) return false;
  if (activeDate.month() === dayjs().month() && day.$D < fastest.date())
    return false;

  return true;
}

export function firstLetterUpperCase(text) {
  if (typeof text !== "string" || !text.length) return;
  return `${text.at(0).toUpperCase()}${text.slice(1)}`;
}
