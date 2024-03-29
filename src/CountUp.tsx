import NumberContainer from "./components/NumberContainer/NumberContainer";
import styles from "./styles/App.module.css";
import { AppProps } from "./types/types";
import React from "react";

export default function CountUp({
  number = "1,234,567",
  style = { fontSize: "50px" },
  duration = 3,
  delay = 0.15,
  reverse = false,
}: AppProps) {
  const numberToString = number.toString().split("");
  const delaysArr = Array.from(Array(numberToString.length), (_, idx) => {
    if (!reverse) {
      return idx * delay;
    } else {
      return (numberToString.length - idx - 1) * delay;
    }
  });
  return (
    <div className={styles.mainContainer}>
      {numberToString.map((num, idx) => {
        return (
          <NumberContainer
            key={idx}
            number={num}
            delay={delaysArr[idx]}
            duration={duration}
            style={style}
          />
        );
      })}
    </div>
  );
}
