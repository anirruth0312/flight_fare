import React from "react";
function Logo() {
  return (
    <img
      style={{
        textAlign: "right",
        marginTop: "180px",
        position: "relative",
        marginLeft: "200px",
      }}
      alt="logo"
      src={require("../images/logo.png").default}
      height="500px"
      width="600px"
    />
  );
}
export default Logo;
