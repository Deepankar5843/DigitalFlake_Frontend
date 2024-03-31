import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Category.scss";
import logo from "../../assets/category.png";
import Header from "../../components/header/Header";
import Navbar from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import MyTable from "../../components/table/MyTable";

function Category() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const columns = [
    {
      Header: "User ID",
      accessor: "_id",
    },
    {
      Header: "Category",
      accessor: "categoryName",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <div>
          <FontAwesomeIcon
            icon={faEdit}
            style={{ cursor: "pointer", marginRight: "5px" }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteConfirmation(row.original._id)}
          />
        </div>
      ),
    },
  ];

  const navigate = useNavigate();

  const handleAddUser = () => {
    console.log("Adding user:");
    navigate("/addCategory");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/category/23");
        console.log("response in category", response);

        setData(response.result.categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      await axiosClient.delete(`/category/${deleteId}`);

      const response = await axiosClient.get("/category/23");
      setData(response.result.categories);
      setShowPopup(false);
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleDeleteConfirmation = (itemId) => {
    setDeleteId(itemId);
    setShowPopup(true);
  };

  return (
    <>
      <div>
        <Header />
        {/**/}
      </div>

      <div className="container">
        <div className="side-container">
          <Navbar />
        </div>
        <div className="side-container1">
          <div className="user-management-container">
            <div className=" container1">
              <div className="component-logo">
                <img src={logo} alt="Logo" />
                <div className="logo-content">
                  <h1 style={{ margin: "20px" }}>Category</h1>
                </div>
              </div>
              <div className="search-input">
                <input type="text" placeholder="Search..." />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </div>
              <div>
                <button className="add-user-button" onClick={handleAddUser}>
                  Add User
                </button>
              </div>
            </div>

            <div className="user-form-Heading">
              <div className="ji" style={{}}></div>

              <div
                className="ji"
                style={{ paddingLeft: "1100px", paddingRight: "10px" }}
              ></div>
            </div>
            <MyTable columns={columns} data={data} />

            {showPopup && (
              <div className="bg-white p-4 rounded-lg shadow-md absolute right-0 mt-12">
                <p>Are you sure you want to delete this item?</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
