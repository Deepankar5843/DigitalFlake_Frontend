import React from "react";

const CustomButton = ({ onClick, text, clicked, position }) => {
  return (
    <div
      style={{
        display: "inline-block",
        marginRight: "10px",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "178px",
          height: "40px",
          bottom: "20px",
          right: position === "cancel" ? "200px" : "10px",
          gap: "0px",
          borderRadius: "40px 40px 40px 40px",
          border: "1px solid rgba(103, 103, 103, 1)",
          opacity: "2px",
          backgroundColor: clicked ? "rgba(102, 38, 113, 1)" : "transparent",
        }}
      >
        <button
          onClick={onClick}
          style={{
            width: "100%",
            height: "100%",
            background: "none",
            border: "none",
            borderRadius: clicked ? "100px 0px 0px 0px" : "0px 100px 0px 0px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "66px",
              height: "32px",
              lineHeight: "32px",
              margin: "auto",
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              textAlign: "center",
              color: "rgba(0, 0, 0, 0.87)",
            }}
          >
            {text}
          </div>
        </button>
      </div>
    </div>
  );
};

export default CustomButton;
