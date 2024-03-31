import { CSSProperties } from "react";

export type DelayInput = number | "ease-in" | "ease-out";

export interface AppProps {
  number: number | string;
  style?: CSSProperties;
  duration?: number;
  reverse?: boolean;
  startDelay?: DelayInput;
  endDelay?: DelayInput;
  easeStartDuration?: number;
  easeEndDuration?: number;
}

export interface NumbersProps {}
