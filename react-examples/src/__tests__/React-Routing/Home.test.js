import {render, screen} from "@testing-library/react";
import HomeComponent from '../../React-Routing/Home';

test("Navbar renders link", () => {
    render (
        <HomeComponent />
    );

    expect(screen.getByText(/welcome to the home page/i)).toBeInTheDocument();
});