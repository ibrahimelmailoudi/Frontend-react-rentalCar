import { Container } from "@mui/material";
import React, { useState } from "react";

const CarItem = ({ car }) => {
  const [heartFilled, setHeartFilled] = useState(false);

  const clickHandler = () => {
    console.log("Rent button clicked for:", car.name);
  };

  return (
    <Container
      className="bg-white p-5 w-full rounded-md max-w-md mx-auto relative transition duration-300 shadow-md hover:shadow-lg hover:border-gray-300 border border-gray-200"
      style={{
        height: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <div>
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="font-bold text-18">{car.name}</h2>
            <p className="text-xs text-gray-500">{car.category}</p>
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ height: "80px" }}
        >
          <img
            src={car.image}
            alt={car.name}
            className="w-full  object-cover"
          />
        </div>
        <div className="flex justify-center gap-x-8 items-center p-1 mt-4 mb-4 text-xs text-gray-500">
          <div>
            <i className="fas fa-gas-pump"></i>
            <p>{car.gas}</p>
          </div>
          <div>
            <i className="fas fa-steering-wheel"></i>
            <p>{car.gear}</p>
          </div>
          <div>
            <i className="fas fa-user-friends"></i>
            <p className="whitespace-nowrap">{car.capacity}</p>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-1">
          <div className="flex flex-col">
            <div className="flex items-center">
              <h2 className="font-bold text-lg">${car.price.toFixed(2)}/ </h2>
              <p className="text-gray-500 font-semibold">day</p>
            </div>
            {car.discount && (
              <h2 className="text-gray-500 font-semibold text-sm line-through">
                ${car.discount.toFixed(2)}
              </h2>
            )}
          </div>
          <button
            onClick={clickHandler}
            className="border-none px-3 py-2 bg-blue-500 text-xl text-white rounded-md"
          >
            View Details
          </button>
        </div>
        <div
          className="cursor-pointer h-fit absolute top-3 right-4"
          onClick={() => setHeartFilled((prev) => !prev)}
        >
          <i
            className={
              heartFilled
                ? "fas fa-heart text-red-500 px-4 py-4 fa-2x"
                : "far fa-heart text-gray-500 px-4 py-4 fa-2x"
            }
          ></i>
        </div>
      </div>
    </Container>
  );
};

export default CarItem;
