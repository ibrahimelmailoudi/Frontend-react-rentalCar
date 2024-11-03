import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Typography, Spin, Space, Button, message, Empty } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { carData } from "./carData";
import { AuthContext } from "../Context/authContext";
import PropTypes from 'prop-types';

const { Meta } = Card;

const BookedCar = () => {
  const [reservedCars, setReservedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const userId = currentUser.id;
        const response = await axios.get(
          `http://localhost:5000/api/reservations/${userId}`
        );
        const reservationIds = response.data.map(
          (reservation) => reservation.carId
        );
        const filteredCars = carData.filter((car) =>
          reservationIds.includes(car.id)
        );
        setReservedCars(filteredCars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reservations:", error);
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchReservations();
    }
  }, [currentUser]);

  const handleDeleteReservation = async (carId) => {
    try {
      // Perform deletion logic here
      // For example:
      const response = await axios.delete(`http://localhost:5000/api/reservations/${carId}`);
      // Update reservedCars state after successful deletion
      setReservedCars(prevCars => prevCars.filter(car => car.id !== carId));
      message.success("Reservation deleted successfully!");
    } catch (error) {
      console.error("Error deleting reservation:", error);
      message.error("Failed to delete reservation. Please try again.");
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Typography.Title level={3} style={{ marginBottom: "20px" }}>
          Booked Reservation Cars
        </Typography.Title>
        {reservedCars.length > 0 ? (
          <Row gutter={[16, 16]}>
{reservedCars.map((car, index) => (
  <Col key={car.id || `car-${index}`} span={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={car.name}
                      src={car.image}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                  actions={[
                    <Space>
                      <Button
                        type="text"
                        danger
                        onClick={() => handleDeleteReservation(car.id)}
                        icon={<DeleteOutlined />}
                      >
                        Delete
                      </Button>
                    </Space>
                  ]}
                >
                  <Meta title={car.name} description={`Price: $${car.price}`} />
                  <Typography.Paragraph>
                    Number: {car.number}
                  </Typography.Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="No reserved cars yet" style={{ marginTop: "110px" }} />
        )}
      </div>
    </>
  );
};
BookedCar.propTypes = {
  reservedCars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number,
      number: PropTypes.string,
    })
  ),
};

export default BookedCar;
