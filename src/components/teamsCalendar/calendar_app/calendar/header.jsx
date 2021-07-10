import React from "react";

export default function CalendarHeader({ value, onChange }) {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  // help to modify currently selected month to reach to previous month
  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  // help to modify currently selected month to reach to next month
  function nextMonth() {
    return value.clone().add(1, "month");
  }

  // this will help us to not to go to month that is already gone
  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className="header">
      <div
        className="previous"
        onClick={() => !thisMonth() && onChange(prevMonth())}
      >
        {/* This one is for double left arrow */}
        {!thisMonth() ? String.fromCharCode(171) : null}
      </div>
      <div className="current">
        {currMonthName()} {currYear()}
      </div>
      <div className="next" onClick={() => onChange(nextMonth())}>
        {/* This one is for double right arrow */}
        {String.fromCharCode(187)}
      </div>
    </div>
  );
}
