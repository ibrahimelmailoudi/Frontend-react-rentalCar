import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { promiseOptionsCar, promiseOptionsCities } from "./CarBrand";
import "bootstrap/dist/css/bootstrap.min.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { styled } from "@mui/system";

const StyledLocalizationProvider = styled(LocalizationProvider)({
  "& .MuiFormControl-root": {
    width: "100%",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const StyledTimePicker = styled(TimePicker)({
  "& .MuiInputBase-root": {
    fontSize: "16px",
    backgroundColor: "#fff",
  },
  "& .MuiInputLabel-root": {
    zIndex: "1",
    fontSize: "16px",
    color: "grey",
    marginBottom: "0.5rem",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    "& fieldset": {
      borderColor: "rgb(194, 194, 194)",
    },
    "&:hover fieldset": {
      borderColor: "grey",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5aacfa",
    },
  },
});

const StyledDatePicker = styled(DatePicker)({
  "& .MuiInputBase-root": {
    fontSize: "16px",
    backgroundColor: "#fff",
  },
  "& .MuiInputLabel-root": {
    zIndex: "1",
    fontSize: "16px",
    color: "grey",
    marginBottom: "0.5rem",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    "& fieldset": {
      borderColor: "rgb(194, 194, 194)",
    },
    "&:hover fieldset": {
      borderColor: "grey",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5aacfa",
    },
  },
});

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    zIndex: "999",
  }),
};

const SearchCarType = ({onSearch}) => {
  const [carType, setCarType] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState(null);
  const [pickTime, setPickTime] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);
  const [dropTime, setDropTime] = useState(null);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      carType
    };
    onSearch(params);
    document
        .querySelector("#Result-section")
        .scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Book a car</h2>
            {formError && (
              <p className="error-message">All fields are required!</p>
            )}
            <form className="box-formF" onSubmit={handleSubmit}>
              <div className="box-form">
                <div className="box-form__car-type">
                  <label className="LabelSearch">
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Brand
                    Car Type{" "}
                    <b
                      style={{
                        fontSize: "14px",
                        color: "#4ba8ff",
                        fontWeight: 500,
                      }}
                    >
                      (Optional)
                    </b>
                  </label>
                  <AsyncSelect
                    cacheOptions
                    defaultOptions
                    loadOptions={promiseOptionsCar}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        fontSize: "16px",
                        color: "blue",
                        paddingBlock: "5px",
                      }),
                      menu: customStyles.menu, // Apply custom styles to the menu
                    }}
                    onChange={(selectedOption) =>
                      setCarType(selectedOption?.label || "")
                    }
                  />
                </div>

                <div className="box-form__car-type">
                  <label className="LabelSearch">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up
                    Location
                  </label>
                  <AsyncSelect
                    cacheOptions
                    defaultOptions
                    loadOptions={promiseOptionsCities}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        fontSize: "16px",
                        color: "blue",
                        paddingBlock: "5px",
                      }),
                      menu: customStyles.menu, // Apply custom styles to the menu
                    }}
                    onChange={(selectedOption) =>
                      setPickUpLocation(selectedOption?.label || "")
                    }
                  />
                </div>
              </div>

              <div className="date-time-box">
                <div className="box-form__car-type">
                  <label className="LabelSearch">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up
                    date <b>*</b>
                  </label>
                  <StyledLocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <StyledDatePicker
                        label="Pick-up Date"
                        className="datePickerStyle"
                        onChange={(date) =>
                          setPickUpDate(date ? date.format("YYYY-MM-DD") : "")
                        }
                      />
                    </DemoContainer>
                  </StyledLocalizationProvider>
                </div>

                <div className="box-form__car-type">
                  <label className="LabelSearch">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Time{" "}
                    <b>*</b>
                  </label>
                  <StyledLocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <StyledTimePicker
                        label="Time"
                        className="timePickerStyle"
                        onChange={(time) =>
                          setPickTime(time ? time.format("HH-mm A") : "")
                        }
                      />
                    </DemoContainer>
                  </StyledLocalizationProvider>
                </div>

                <div className="box-form__car-type">
                  <label className="LabelSearch">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off
                    date <b>*</b>
                  </label>
                  <StyledLocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <StyledDatePicker
                        label="Drop-off Date"
                        className="datePickerStyle"
                        onChange={(date) =>
                          setDropOffDate(date ? date.format("YYYY-MM-DD") : "")
                        }
                      />
                    </DemoContainer>
                  </StyledLocalizationProvider>
                </div>
                <div className="box-form__car-type">
                  <label className="LabelSearch">
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Time{" "}
                    <b>*</b>
                  </label>
                  <StyledLocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <StyledTimePicker
                        label="Time"
                        className="timePickerStyle"
                        onChange={(time) =>
                          setDropTime(time ? time.format("HH-mm A") : "")
                        }
                      />
                    </DemoContainer>
                  </StyledLocalizationProvider>
                </div>
              </div>

              <button className="buttonSave" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCarType;
