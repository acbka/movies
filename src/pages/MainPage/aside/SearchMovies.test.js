import { render, screen, fireEvent } from "@testing-library/react";
import SearchMovies from "./SearchMovies";
describe("show input element", () => {
  test("input", () => {
    render(<SearchMovies />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
