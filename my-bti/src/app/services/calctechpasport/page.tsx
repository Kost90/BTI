import React from "react";
import CalcResult from "@/components/calculator/CalculatorTP";
import styles from "./calctechpasp.module.css";

function CalcPasportPage() {
  return (
    <div className={styles.container}>
      <CalcResult />
    </div>
  );
}

export default CalcPasportPage;
