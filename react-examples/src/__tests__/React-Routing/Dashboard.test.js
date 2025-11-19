import {render, screen} from "@testing-library/react";
import DashboardComponent from '../../React-Routing/DashboardLayout';

test("Navbar renders link", () => {
    render (
        <DashboardComponent />
    );

    expect(screen.getByText(/dashboard layout/i)).toBeInTheDocument();
});

