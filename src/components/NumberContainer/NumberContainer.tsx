import React from "react";
import NumberResult from "../NumberResult";
import NumberLoading from "../NumberLoading";
import styles from "./NumberContainer.module.css";
import { CSSProperties, useEffect, useState } from "react";

export interface NumberToStinrgType {
  number: string;
  style: CSSProperties;
  duration: number;
  startDelay: number;
  endDelay: number;
}

export default function NumberContainer({
  number,
  style,
  duration,
  endDelay,
  startDelay,
}: NumberToStinrgType) {
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsTimeUp(true);
      },
      (duration + endDelay) * 1000
    );

    return () => clearTimeout(timer);
  }, []);

  if (isNaN(parseInt(number))) {
    return (
      <div
        className={styles.numberContainerFrame}
        style={{ animationDelay: `${startDelay}s` }}>
        <span style={style}>{number}</span>
      </div>
    );
  }

  return (
    <div
      className={styles.numberContainerFrame}
      style={{ animationDelay: `${startDelay}s` }}>
      {isTimeUp ? (
        <NumberResult number={number} style={style} />
      ) : (
        <NumberLoading delay={startDelay} style={style} />
      )}
    </div>
  );
}
