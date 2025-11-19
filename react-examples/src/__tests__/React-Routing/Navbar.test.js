import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBarComponent from "../../React-Routing/Navbar";

test("Navbar renders Home link", () => {
    render (
        <MemoryRouter>
            <NavBarComponent />
        </MemoryRouter>
    );

    const link = screen.getByText(/home/i);
    expect(link).toBeInTheDocument();
});