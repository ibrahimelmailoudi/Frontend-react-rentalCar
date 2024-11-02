import Hero from "../components/Hero";
import SearchCarType from "../components/SearchCarType";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import BlogsPart from "../components/BlogsPart";
import Footer from "../components/Footer";
import CarListPage from "../components/CarLisrPage";
import { useContext, useEffect, useState } from "react";
import TopRecommendCar from "../components/TopRecommendCar";
import InfiniteScroll from "../components/InfiniteScroll";
import Navbar from "../components/Navbar";
import "../dist/styles.css";
import { AuthContext } from "../Context/authContext";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  useEffect(() => {},[currentUser]);
  // console.log("user : ", currentUser.id);
  // console.log("user : ", currentUser.firstName);
  // console.log("user : ", currentUser.avatar);

  // console.log("Params :", searchParams);
  return (
    <>
      <Navbar />
      <Hero />
      <SearchCarType onSearch={handleSearch} />
      <CarListPage searchParams={searchParams} />
      <TopRecommendCar />
      <InfiniteScroll />
      <ChooseUs />
      <Testimonials />

      <Faq />
      <BlogsPart />
      <Footer />
    </>
  );
}

export default Home;
