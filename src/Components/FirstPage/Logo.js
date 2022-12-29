import React from "react";
function Logo() {
  return (
    <img
      style={{
        marginTop: "10px",
        position: "relative",
        marginLeft: "200px",
        borderRadius: "18px",
      }}
      alt="logo"
      src={require("../images/logo.png").default}
      height="320px"
      width="430px"
    />
  );
}
export default Logo;
