import React from "react";
import NumberContainer from "../NumberContainer/NumberContainer";
import styles from "./CountUp.module.css";
import { AppProps } from "../../types/types";

export default function Countup({
  number = "1,234,567",
  style = { fontSize: "50px" },
  duration = 3,
  startDelay = 0.15,
  endDelay = 0.1,
  reverse = false,
}: AppProps) {
  const numberToString = number.toString().split("");
  const startDelaysArr = Array.from(Array(numberToString.length), (_, idx) => {
    if (!reverse) {
      return idx * startDelay;
    } else {
      return (numberToString.length - idx - 1) * startDelay;
    }
  });
  const endDelaysArr = Array.from(Array(numberToString.length), (_, idx) => {
    if (!reverse) {
      return idx * endDelay;
    } else {
      return (numberToString.length - idx - 1) * endDelay;
    }
  });
  return (
    <div className={styles.mainContainer}>
      {numberToString.map((num, idx) => {
        return (
          <NumberContainer
            key={idx}
            number={num}
            startDelay={startDelaysArr[idx]}
            endDelay={endDelaysArr[idx]}
            duration={duration}
            style={style}
          />
        );
      })}
    </div>
  );
}
