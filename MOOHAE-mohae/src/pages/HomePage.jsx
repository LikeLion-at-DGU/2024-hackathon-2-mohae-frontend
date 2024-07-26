import React from "react";
import { Link } from "react-router-dom";

import CustomCalendar from "../components/calendar/CustomCalendar";

function HomePage() {
  return (
    <>
      <CustomCalendar></CustomCalendar>
      <br />
    </>
  );
}

export default HomePage;