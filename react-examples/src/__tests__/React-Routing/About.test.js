import {render, screen} from "@testing-library/react";
import AboutComponent from '../../React-Routing/About';

test("Navbar renders link", () => {
    render (
        <AboutComponent />
    );

    expect(screen.getByText(/about page/i)).toBeInTheDocument();
});