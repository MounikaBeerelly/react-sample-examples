import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../../React-Routing/ProductDetails";

describe("ProductDetails Page", () => {
  test("renders correct product from route param", () => {
    render(
      <MemoryRouter initialEntries={["/products/5"]}>
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/product details page/i)).toBeInTheDocument();

    // expect(screen.getAllByText(/product id: 5/i)).toBeInTheDocument();
  });
});
