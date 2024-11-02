// src/Router.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Models from "../Pages/Models";
import TestimonialsPage from "../Pages/TestimonialsPage";
import Team from "../Pages/Team";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import DashboardAdmin from "../Pages/DashboardAdmin";
import DashboardUser from "../Pages/DashboardUser";
import PaymentPage from "../Pages/PaymentPage";
import Unauthorized from "../Pages/Unauthorized"; // Import Unauthorized
import ProtectedRoute from "../components/ProtectedRoute";
import AdminProtectedRoute from "../components/AdminProtectedRoute"; // Import AdminProtectedRoute
import UserProtectedRoute from "../components/UserProtectedRoute"; // Import UserProtectedRoute
import NotFound from "../components/NotFound";
import BookingPage from "../Pages/BookingPage";
import BookedCar from "../Pages/BookedCar";
import Cars from "../Pages/CarsPage";
import AllCarsPage from "../Pages/AllCarPage";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/vehicule" element={<i />} />

      <Route path="/models" element={<Models />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/unauthorized" element={<Unauthorized />} />/cars
      <Route path="/cars" element={<AllCarsPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/payment/:carId" element={<PaymentPage />} />
      </Route>

      <Route element={<UserProtectedRoute />}>
        <Route path="/dashboard/User/*" element={<DashboardUser />} />
        <Route path="/booking" element={<BookingPage />} />
      </Route>

      <Route element={<AdminProtectedRoute />}>
        <Route path="/dashboard/Admin/*" element={<DashboardAdmin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
