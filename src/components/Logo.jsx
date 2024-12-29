import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        src="/Logo.png"
        alt="Logo"
        style={{
          width,
          height: width, 
          borderRadius: "50%", 
          objectFit: "cover", 
        }}
      />
    </div>
  );
}

export default Logo;
