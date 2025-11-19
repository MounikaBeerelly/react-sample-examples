import { render, screen } from "@testing-library/react";
import NotFound from "../../React-Routing/NotFound";

test("renders 404 message", () => {
  render(<NotFound />);
  expect(screen.getByText(/404 - page notfound/i)).toBeInTheDocument();
});
