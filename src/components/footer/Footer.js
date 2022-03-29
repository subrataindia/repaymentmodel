import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "primary.dark",
        color: "#fff",
      }}
      className="footer"
    >
      {" "}
      &copy; Subrata Das{" "}
    </Box>
  );
};

export default Footer;
