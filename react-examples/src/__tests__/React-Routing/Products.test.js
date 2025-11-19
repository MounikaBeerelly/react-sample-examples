import {render, screen} from "@testing-library/react";
import ProductsComponent from '../../React-Routing/Products';
import { MemoryRouter } from "react-router-dom";

describe("Products Page", () => {
  test("renders product list heading", () => {
    render(
      <MemoryRouter>
        <ProductsComponent />
      </MemoryRouter>
    );
    expect(screen.getByText(/products page/i)).toBeInTheDocument();
  });

  test("renders multiple products", () => {
    render(
      <MemoryRouter>
        <ProductsComponent />
      </MemoryRouter>
    );

    const items = screen.getAllByTestId("product-item");
    expect(items.length).toBeGreaterThan(0);
  });
});
