import { CSSProperties } from "react";

export interface AppProps {
  number: number | string;
  style?: CSSProperties;
  duration?: number;
  reverse?: boolean;
  startDelay?: number;
  endDelay?: number;
}

export interface NumbersProps {}
