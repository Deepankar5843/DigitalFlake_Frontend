import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../components/form/FormInput";
import CustomButton from "../../components/button/CustomButton";
import { axiosClient } from "../../utils/axiosClient";

function AddCategory() {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("active");

  const [cancelClicked, setCancelClicked] = useState(false);
  const [saveClicked, setSaveClicked] = useState(false);

  const handleInput3StatusChange = (e) => {
    setInput3Value(e.target.value);
  };

  const handleCancelClick = () => {
    setCancelClicked(!cancelClicked);
  };

  const handleSaveClick = async () => {
    try {
      setSaveClicked(!saveClicked);

      const response = await axiosClient.post("/category/", {
        categoryName: input1Value,
        description: input2Value,
        status: input3Value,
      });
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          marginLeft: "-700px",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "10px" }} />{" "}
        Add Category
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "2.7%",
          height: "27vh",
        }}
      >
        <form style={{ width: "50%", textAlign: "left" }}>
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormInput
              label="Category Name"
              type="text"
              width="280px"
              value={input1Value}
              onChange={(e) => setInput1Value(e.target.value)}
            />
            <FormInput
              label="Description"
              type="text"
              width="280px"
              value={input2Value}
              onChange={(e) => setInput2Value(e.target.value)}
            />
            <FormInput
              label="Status"
              type="select"
              width="280px"
              value={input3Value}
              onChange={handleInput3StatusChange}
              disabled={input3Value === "inactive"}
            />
          </div>
        </form>
      </div>

      <CustomButton
        onClick={handleCancelClick}
        text="Cancel"
        clicked={cancelClicked}
        position="cancel"
      />

      <CustomButton
        onClick={handleSaveClick}
        text="Save"
        clicked={saveClicked}
        position="save"
      />
    </div>
  );
}

export default AddCategory;
