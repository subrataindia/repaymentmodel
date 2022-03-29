import React from "react";
import Box from "@mui/material/Box";
export const Header = () => {
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "primary.dark",
        color: "#fff",
        fontSize: "1.5em",
      }}
      className="header"
    >
      Repayment Model
    </Box>
  );
};
