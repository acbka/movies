import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
describe("Button", () => {
  test("click button", () => {
    const btnClick = jest.fn();
    render(<Button handleClick={btnClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(btnClick).toHaveBeenCalledTimes(1);
  });
  test("send", () => {
    render(<Button title="title" />);
    expect(screen.queryByText("title")).toBeInTheDocument();
  });
});
