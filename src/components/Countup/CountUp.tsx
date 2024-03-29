import React from "react";
import NumberContainer from "../NumberContainer/NumberContainer";
import styles from "./CountUp.module.css";
import { AppProps } from "../../types/types";
import { calculateDelays } from "../../utils/calculateDelays";

/**
 *
 *
 * @param number - This is the number to display. You can use numeric or string types. The default is "1,234,567"
 * @param duration - The running time of the animation. You can enter the desired seconds in numeric type. The default is 3 seconds.
 * @param startDelay - This is the starting delay between numbers. The default is 0.1 seconds.
 * @param endDelay - This is the delay before stopping between numbers. The default is 0.1 seconds.
 * @param reverse - This is a prop that determines whether to start from the front or the back. The default is false
 * @param style - You can specify css. (e.g. fontsize, fontweight, color...)

 * @returns Returns a react component
 */
export default function Countup({
  number = "1,234,567",
  duration = 3,
  startDelay = 0.1,
  endDelay = 0.1,
  reverse = false,
  style = { fontSize: "50px" },
}: AppProps) {
  const startDelayValue = Math.max(duration / 3, 1);
  const endDelayValue = Math.max(duration / 3, 1);
  const numberToString = number.toString().split("");
  const { startDelayArr, endDelayArr } = calculateDelays(
    numberToString,
    startDelay,
    endDelay,
    reverse,
    startDelayValue,
    endDelayValue
  );
  return (
    <div className={styles.mainContainer}>
      {numberToString.map((num, idx) => {
        return (
          <NumberContainer
            key={idx}
            number={num}
            startDelay={startDelayArr[idx]}
            endDelay={endDelayArr[idx]}
            duration={duration}
            style={style}
          />
        );
      })}
    </div>
  );
}
