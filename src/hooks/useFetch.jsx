import axios from "axios";
import { useEffect, useState } from "react";

useEffect(() => {
  setTemp([(Math.round(temperature * 100) / 100), " °C"]);
  changeBackground(icon);
},[temperature, icon]);

export default useFetch;
