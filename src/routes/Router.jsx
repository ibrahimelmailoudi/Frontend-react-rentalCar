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
      <Route index path="/Frontend-react-rentalCar/" element={<Home />} />
      <Route path="/Frontend-react-rentalCar/login" element={<Login />} />
      <Route path="/Frontend-react-rentalCar/signup" element={<Signup />} />
      <Route path="/Frontend-react-rentalCar/about" element={<About />} />
      <Route path="/Frontend-react-rentalCar/vehicule" element={<i />} />

      <Route path="/Frontend-react-rentalCar/models" element={<Models />} />
      <Route path="/Frontend-react-rentalCar/testimonials" element={<TestimonialsPage />} />
      <Route path="/Frontend-react-rentalCar/team" element={<Team />} />
      <Route path="/Frontend-react-rentalCar/contact" element={<Contact />} />
      <Route path="/Frontend-react-rentalCar/unauthorized" element={<Unauthorized />} />/cars
      <Route path="/Frontend-react-rentalCar/cars" element={<AllCarsPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/Frontend-react-rentalCar/payment/:carId" element={<PaymentPage />} />
      </Route>

      <Route element={<UserProtectedRoute />}>
        <Route path="/Frontend-react-rentalCar/dashboard/User/*" element={<DashboardUser />} />
        <Route path="/Frontend-react-rentalCar/booking" element={<BookingPage />} />
      </Route>

      <Route element={<AdminProtectedRoute />}>
        <Route path="/Frontend-react-rentalCar/dashboard/Admin/*" element={<DashboardAdmin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
