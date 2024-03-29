import { DelayInput } from "../types/types";

// function calculateEaseIn(
//   idx: number,
//   count: number,
//   totalDelay: number
// ): number {
//   return Math.pow(idx / count, 2) * totalDelay;
// }

// function calculateEaseOut(
//   idx: number,
//   count: number,
//   totalDelay: number
// ): number {
//   return (1 - Math.pow(1 - idx / count, 2)) * totalDelay;
// }
function calculateEaseIn(
  idx: number,
  count: number,
  totalDelay: number
): number {
  return Math.sqrt(idx / count) * totalDelay;
}

function calculateEaseOut(
  idx: number,
  count: number,
  totalDelay: number
): number {
  return (1 - Math.sqrt(1 - idx / count)) * totalDelay;
}
export function calculateDelays(
  number: string[],
  startDelay: DelayInput,
  endDelay: DelayInput,
  reverse: boolean,
  startDelayValue: number,
  endDelayValue: number
): { startDelayArr: number[]; endDelayArr: number[] } {
  let startDelayArr: number[] = [];
  let endDelayArr: number[] = [];

  number.forEach((_, idx) => {
    const count = number.length;
    const targetIdx = reverse ? count - idx - 1 : idx;

    if (typeof startDelay === "number") {
      startDelayArr.push(targetIdx * startDelay);
    } else if (startDelay === "ease-in") {
      startDelayArr.push(
        calculateEaseIn(targetIdx, count - 1, startDelayValue)
      );
    } else if (startDelay === "ease-out") {
      startDelayArr.push(
        calculateEaseOut(targetIdx, count - 1, startDelayValue)
      );
    }

    if (typeof endDelay === "number") {
      endDelayArr.push(targetIdx * endDelay);
    } else if (endDelay === "ease-in") {
      endDelayArr.push(calculateEaseIn(targetIdx, count - 1, endDelayValue));
    } else if (endDelay === "ease-out") {
      endDelayArr.push(calculateEaseOut(targetIdx, count - 1, endDelayValue));
    }
  });
  return { startDelayArr, endDelayArr };
}
