import React from "react";

const FormInput = ({ label, type, width, value, onChange, disabled }) => {
  return (
    <div
      style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}
    >
      <label style={{ marginBottom: "5px" }}>{label}</label>
      {type === "select" ? (
        <div style={{ position: "relative" }}>
          <input
            type="text"
            style={{
              width: width,
              border: "1px solid #ccc",
              padding: "8px",
              borderRadius: 3,
              opacity: value === "active" ? "1" : "0.5",
            }}
            disabled={disabled}
          />
          <select
            value={value}
            onChange={onChange}
            style={{
              position: "absolute",
              right: "5px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: "1",
              background: "transparent",
              border: "none",
            }}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      ) : (
        <input
          type={type}
          style={{
            width: width,
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: 3,
          }}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default FormInput;
