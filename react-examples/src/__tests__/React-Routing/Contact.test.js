import {render, screen} from "@testing-library/react";
import ContactComponent from '../../React-Routing/Contact';

test("Navbar renders link", () => {
    render (
        <ContactComponent />
    );

    expect(screen.getByText(/contact page/i)).toBeInTheDocument();
});