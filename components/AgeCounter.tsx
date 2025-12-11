"use client";
import { useEffect, useState } from "react";

export default function AgeCounter() {
  const birthDate = new Date("1997-09-25T04:00:00"); // <- hardcoded DOB
  const [age, setAge] = useState(0);

  useEffect(() => {
    function update() {
      const now = new Date();
      const diffMs = now.getTime() - birthDate.getTime();
      
      // Average year length in milliseconds (365.2425 days)
      const msPerYear = 365.2425 * 24 * 60 * 60 * 1000;
      const ageYears = diffMs / msPerYear;

      setAge(ageYears);
    }

    update(); // initial call
    const timer = setInterval(update, 50); // smooth updates

    return () => clearInterval(timer);
  }, []);

  return <>{age.toFixed(10)}</>; // 15 decimal places
}
