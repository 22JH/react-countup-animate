import { CSSProperties } from "react";
import styles from "./NumberResult.module.css";
import React from "react";

interface NumberProps {
  number: string;
  style: CSSProperties | undefined;
}

export default function NumberResult({ number, style }: NumberProps) {
  const arr = Array.from(
    new Array(10),
    (_, idx) => (parseInt(number) + idx + 1) % 10
  );
  return (
    <div className={styles.numberFrame}>
      {arr.map((number) => {
        return (
          <span key={number} className={styles.numberStyle} style={style}>
            {number}
          </span>
        );
      })}
    </div>
  );
}
