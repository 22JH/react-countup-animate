import { CSSProperties } from "react";

export interface AppProps {
  number: number | string;
  style?: CSSProperties;
  duration?: number;
  delay?: number;
  reverse?: boolean;
}

export interface NumbersProps {}
