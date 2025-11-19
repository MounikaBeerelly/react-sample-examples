import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBarComponent from "../../React-Routing/Navbar";

test("Navbar renders link", () => {
    render (
        <MemoryRouter>
            <NavBarComponent />
        </MemoryRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/users/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
});