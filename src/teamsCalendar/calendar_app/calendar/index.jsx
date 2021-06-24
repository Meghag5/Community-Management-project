import React, { useState, useEffect } from "react";
// moment is used for months dates and years
import moment from "moment";
import Header from "./header";
import "./styles.css";

export default function Calendar({ value, onChange }) {
  // useState will help us to initialize inside value as default value
  // withe the help of seCalendar we can update the value
  const [calendar, setCalendar] = useState([]);


  // we want every time we want the day change therefore we initialize array with value
  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function buildCalendar(date) {
    //ceating a temporary array to push value of calendar
    const a = [];

    /*
    To know the value in calender we need to startDay and end day values
    with help of clone we will get current date
    startOf will give us the first day of the week
    */
    const startDay = date.clone().startOf("month").startOf("week");
    /*
    endOf will give us the last month last week and last day
    */
    const endDay = date.clone().endOf("month").endOf("week");

    // we will use while loop to built those days and place it inside the while loop
    const _date = startDay.clone().subtract(1, "day");

    /* our while loop is going to have a condition and 
    as long as that condition is true while loop will execute
    when condition will become false we will exit the loop
    as calendar is made up of matrix so we will push array size 
    */
    while (_date.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => _date.add(1, "day").clone())
      );
    }
    return a;
  }

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return moment(day).isBefore(new Date(), "day");
  }

  function isToday(day) {
    return moment(new Date()).isSame(day, "day");
  }

  // if the particular day is selected then we will return the className mentioned else no className 
  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  function currMonthName() {
    // this will return string representation of month object
    return value.format("MMMM");
  }

  function currYear() {
    // this will return string representation of year object
    return value.format("YYYY");
  }

  return (
    <div className="calendar">
      <Header value={value} onChange={onChange} />

      <div className="body">
        <div className="day-names">
          {/* This is array for printing day names of week */}
          {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        {/* It will iterate through weeks of the month */}
        {calendar.map((week, wi) => (
          <div key={wi}>
            {/* It will iterate through days of the weeks */}
            {week.map((day, di) => (
              <div
                key={di}
                className="day"
                /* In order to change value of our component which is storing the day */
                onClick={() => {
                  if (day < moment(new Date()).startOf("day")) return;
                  onChange(day);
                }}
              >

                {/* dayStyles will help to fade the previous days and bold comming days */}
                <div className={dayStyles(day)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
