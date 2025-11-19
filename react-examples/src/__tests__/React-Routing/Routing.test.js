import { render, screen } from "@testing-library/react";
import RoutingComponent from "../../React-Routing/Routing";
import { MemoryRouter } from "react-router-dom";
import { Suspense } from "react";

describe("Routing Component", () => {
    
    test("Renders Home page by default", () => {
        render (
            <MemoryRouter initialEntries={["/"]}>
                <RoutingComponent />
            </MemoryRouter>
        );

        expect(screen.getByText(/welcome to the home page/i)).toBeInTheDocument();
    });

    test("Renders About page", () => {
        render (
            <MemoryRouter initialEntries={["/about"]}>
                <RoutingComponent />
            </MemoryRouter>
        );

        expect(screen.getByText(/about page/i)).toBeInTheDocument();
    });

     test("Renders Contact page", () => {
        render (
            <MemoryRouter initialEntries={["/contact"]}>
                <RoutingComponent />
            </MemoryRouter>
        );

        expect(screen.getByText(/contact page/i)).toBeInTheDocument();
    });

     test("Renders products page", () => {
        render (
            <MemoryRouter initialEntries={["/products"]}>
                <RoutingComponent />
            </MemoryRouter>
        );

        expect(screen.getByText(/products page/i)).toBeInTheDocument();
    });

     test("shows notfound page for invalid route", () => {
        render (
            <MemoryRouter initialEntries={["/wrong-route"]}>
                <RoutingComponent />
            </MemoryRouter>
        );

        expect(screen.getByText(/404 - page notfound/i)).toBeInTheDocument();
    });

    test("renders users page", async () => {
            render(
            <MemoryRouter initialEntries={["/users"]}>
                <Suspense fallback={<div>Loading...</div>}>
                <RoutingComponent />
                </Suspense>
            </MemoryRouter>
            );
        
        expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    });

});