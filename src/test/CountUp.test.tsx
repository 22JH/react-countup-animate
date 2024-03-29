import { render, screen } from "@testing-library/react";
import CountUp from "..";

describe("CountUp", () => {
  it("renders the number correctly", () => {
    render(<CountUp number="1234" />);
    const spanElements = screen.getAllByText(/[0-9]/);
    expect(spanElements.length).toBe(40);
  });
});
