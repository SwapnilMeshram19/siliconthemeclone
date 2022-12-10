import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { FC } from "react";
import { LandingPagesI } from "../assets/Data";

interface LandigPagesCardI {
  data: LandingPagesI;
}

export const LandingPagesCard: FC<LandigPagesCardI> = (props) => {
  const { data } = props;

  return (
    <Box
      sx={{
        maxWidth: "400px",
        minWidth: "220px",
        cursor: "pointer",
        marginBottom: "10px",
        color: "rgb(93,105,140)",
        "&:hover": { color: "rgb(99,102,241)" },
      }}
    >
      <Box sx={{ boxShadow: "5px 5px 18px #d8d8d8", marginBottom: "20px" }}>
        <img
          src={data.image}
          style={{ maxWidth: "400px", minWidth: "220px" }}
        />
      </Box>

      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: "1.2rem",
          textAlign: "center",
          fontWeight: "700",

          "&:hover": { color: "rgb(99,102,241)" },
        }}
      >
        {data.title}
      </Typography>
    </Box>
  );
};
