import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../components/form/FormInput";
import CustomButton from "../../components/button/CustomButton";
import { axiosClient } from "../../utils/axiosClient";

function AddProduct() {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");
  const [input3Value, setInput3Value] = useState("");
  const [input4Value, setInput4Value] = useState("");
  const [input6Value, setInput6Value] = useState("active");

  const [cancelClicked, setCancelClicked] = useState(false);
  const [saveClicked, setSaveClicked] = useState(false);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImage(fileReader.result);
        console.log("Image data:", fileReader.result);
      }
    };
  };

  const handleInput6StatusChange = (e) => {
    setInput6Value(e.target.value);
  };

  const handleCancelClick = () => {
    setCancelClicked(!cancelClicked);
  };

  const handleSaveClick = async () => {
    try {
      setSaveClicked(!saveClicked);

      const response = await axiosClient.post("/item/", {
        categoryName: input1Value,
        productName: input2Value,
        packSize: input3Value,
        productImage: image,
        mrp: input4Value,
        status: input6Value,
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
        Add Product
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
              label="Category "
              type="text"
              width="280px"
              value={input1Value}
              onChange={(e) => setInput1Value(e.target.value)}
            />
            <FormInput
              label="Product Name"
              type="text"
              width="280px"
              value={input2Value}
              onChange={(e) => setInput2Value(e.target.value)}
            />
            <FormInput
              label="Pack size"
              type="text"
              width="280px"
              value={input3Value}
              onChange={(e) => setInput3Value(e.target.value)}
            />
          </div>
        </form>
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
              marginBottom: "210px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormInput
              label="Mrp"
              type="text"
              width="280px"
              value={input4Value}
              onChange={(e) => setInput4Value(e.target.value)}
            />
            <FormInput
              label="Product Image"
              type="file"
              width="280px"
              onChange={handleImageChange}
            />

            <FormInput
              label="Status"
              type="select"
              width="280px"
              value={input6Value}
              onChange={handleInput6StatusChange}
              disabled={input6Value === "inactive"}
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

export default AddProduct;
