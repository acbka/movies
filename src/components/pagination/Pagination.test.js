import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
describe("Pagination", () => {
  test("buttons", () => {
    render(<Pagination pages={15} page={3} setPage={() => null} />);
    expect(screen.getAllByRole("button").length).toBe(8);
    expect(screen.queryByText("1")).toBeInTheDocument();
    expect(screen.queryByText("36")).not.toBeInTheDocument();
    expect(screen.queryByText("3")).toBeInTheDocument();
  });
  test("number of buttons", () => {
    render(<Pagination pages={208} page={47} setPage={() => null} />);
    expect(screen.getAllByRole("button").length).toBe(9);
  });
});
