import React from "react";
import { CSSProperties, useEffect, useRef } from "react";
import styles from "./NumberLoading.module.css";

interface NumberLoadingProps {
  style: CSSProperties | undefined;
  delay: number;
}

export default function NumberLoading({ style, delay }: NumberLoadingProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const loadingNumbers = Array.from(Array(10), (_, i) => i);
  useEffect(() => {
    const element = frameRef.current;
    if (element !== null) {
      const handleAnimationIteration = () => {
        element.style.animationTimingFunction = "linear";
      };
      element.addEventListener("animationiteration", handleAnimationIteration);

      return () => {
        element.removeEventListener(
          "animationiteration",
          handleAnimationIteration
        );
      };
    }
  }, []);
  return (
    <div
      className={styles.numberLoadingFrame}
      style={{ animationDelay: `${delay}s` }}
      ref={frameRef}>
      {loadingNumbers.map((number) => {
        return (
          <span key={number} className={styles.numberStyle} style={style}>
            {number}
          </span>
        );
      })}
    </div>
  );
}
