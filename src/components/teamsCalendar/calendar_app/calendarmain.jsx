import React, { useState } from "react";
import moment from "moment";
import Calendar from "./calendar";
import "./styles.css";

/* eslint-disable */
export default function () {
  const [selectedDate, setSelectedDate] = useState(moment());
  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
}
