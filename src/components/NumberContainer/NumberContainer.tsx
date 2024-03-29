import React from "react";
import { NumberResult } from "../NumberResult/index";
import { NumberLoading } from "../NumberLoading/index";
import styles from "./NumberContainer.module.css";
import { CSSProperties, useEffect, useState } from "react";

export interface NumberToStinrgType {
  number: string;
  delay: number;
  style: CSSProperties;
  duration: number;
}

export default function NumberContainer({
  number,
  delay,
  style,
  duration,
}: NumberToStinrgType) {
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimeUp(true);
    }, (duration + delay) * 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isNaN(parseInt(number))) {
    return (
      <div
        className={styles.numberContainerFrame}
        style={{ animationDelay: `${delay}s` }}>
        <span style={style}>{number}</span>
      </div>
    );
  }

  return (
    <div
      className={styles.numberContainerFrame}
      style={{ animationDelay: `${delay}s` }}>
      {isTimeUp ? (
        <NumberResult number={number} style={style} />
      ) : (
        <NumberLoading delay={delay} style={style} />
      )}
    </div>
  );
}
