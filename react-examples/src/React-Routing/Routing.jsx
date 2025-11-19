import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBarComponent from './Navbar';
import HomeComponent from './Home';
import Aboutcompoennt from './About';
import ContactComponent from './Contact';
import ProductsComponent from './Products';
import ProductDetailsComponent from './ProductDetails';
import DashboardLayoutComponent from './DashboardLayout';
import NotFoundComponent from './NotFound';
const UsersComponent = lazy(() => import ("./UsersComponent"));

const RoutingComponent = () => {
    return (
        <>
            <NavBarComponent />
            <Routes>
                <Route path = "/" element={<HomeComponent />} />
                <Route path="/about" element={<Aboutcompoennt />} />
                <Route path="/contact" element={<ContactComponent />} />

                <Route path="/products" element={<ProductsComponent />} />
                <Route path="/products/:id" element={<ProductDetailsComponent />} />
                
                <Route 
                    path="/users" 
                    element={
                        <Suspense fallback={<h3>Loading...</h3>}>
                            <UsersComponent />
                        </Suspense>
                    } />

                <Route path="/dashboard" element={<DashboardLayoutComponent />}>
                    <Route path="stats" element={<h2>Dashboard stats page</h2>} />
                    <Route path="reports" element={<h2>Reports Page</h2>} />
                </Route>

                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </>
    );
}

export default RoutingComponent;