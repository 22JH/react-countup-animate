import { calculateDelays } from "../utils/calculateDelays";

describe("calculateDelays", () => {
  it("should return zero delays for a single element array", () => {
    const result = calculateDelays(
      ["1"],
      "ease-in",
      "ease-out",
      false,
      100,
      200
    );
    expect(result.startDelayArr).toEqual([0]);
    expect(result.endDelayArr).toEqual([0]);
  });

  it("should calculate ease-in delays correctly", () => {
    const result = calculateDelays(
      ["1", "2", "3", "4", "5", "6", "7"],
      "ease-in",
      "ease-in",
      false,
      3,
      3
    );
    expect(result.startDelayArr.length).toBe(7);
    expect(result.endDelayArr.length).toBe(7);

    expect(result.endDelayArr).toEqual([
      0, 0.20412, 0.57735, 1.06066, 1.63299, 2.28218, 3,
    ]);
    expect(result.endDelayArr).toEqual(result.startDelayArr);
  });

  it("should calculate ease-out delays correctly", () => {
    const result = calculateDelays(
      ["1", "2", "3", "4", "5", "6"],
      "ease-out",
      "ease-out",
      false,
      10,
      100
    );
    expect(result.endDelayArr.length).toBe(6);
    expect(result.startDelayArr).toStrictEqual([
      0, 2.84458, 5.35242, 7.47018, 9.10557, 10,
    ]);
  });

  it("should calculate number type delay correctly", () => {
    const result = calculateDelays(
      ["1", "2", "3", "4", "5", "6"],
      2,
      1,
      false,
      1,
      1
    );
    expect(result.endDelayArr.length).toBe(6);
    expect(result.startDelayArr).toStrictEqual([0, 2, 4, 6, 8, 10]);
    expect(result.endDelayArr).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });

  it("should handle reverse order correctly", () => {
    const result = calculateDelays(
      ["1", "2", "3"],
      "ease-in",
      "ease-out",
      true,
      100,
      100
    );
    expect(result.startDelayArr[0]).toBeGreaterThan(result.startDelayArr[2]);
    expect(result.endDelayArr[0]).toBeGreaterThan(result.endDelayArr[2]);
  });
});
