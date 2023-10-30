import dayjs from "dayjs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

export function getDaysOfWeek() {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
}

export function firstLetterUpperCase(text) {
  if (typeof text !== "string" || !text.length) return;
  return `${text.at(0).toUpperCase()}${text.slice(1)}`;
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// --------------------- Functions for DaySelector ------------------------------

// -------------------------------------------------
// Generating Month Days For DaySelector
// -------------------------------------------------

export function generateMonthDays(
  month = dayjs().month(),
  year = dayjs().year(),
  extended = false
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

  return extended ? prefixArray.concat(dayArray, suffixArray) : dayArray;
}

// -------------------------------------------------
// Checking Day Availability in Month Selector
// -------------------------------------------------

export function checkIfAbleDate(activeDate, day, fastest) {
  if (activeDate.month() !== day.$M) return false;
  if (!day.$W) return false;
  if (activeDate.month() === dayjs().month() && day.isBefore(fastest))
    return false;

  return true;
}

// ---------------------------------------------------------------
// Checking whether there is no date to order in current month
// ---------------------------------------------------------------

export function checkIfMonthEmpty(fastestDate) {
  return !generateMonthDays()
    .map((day) => checkIfAbleDate(dayjs(), day, fastestDate))
    .includes(true);
}

// -----------------------------------------------------------------------
