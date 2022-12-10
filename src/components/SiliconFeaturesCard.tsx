import {Box, Typography} from "@mui/material";
import React, { FC } from "react";
import { MoreSiliconFeaturesI } from "../assets/Data";
interface SiliconFeaturesCardI {
  data: MoreSiliconFeaturesI;
}

export const SiliconFeaturesCard: FC<SiliconFeaturesCardI> = ({ data }) => {
  return (
    <Box
      sx={{
        maxWidth: "300px",
        minWidth: "220px",
        textAlign: "left",
        marginTop: "30px",
        padding: "5px",
        "&:hover": { boxShadow: "5px 5px 15px #d8d8d8" },
      }}
    >
      <Box
        sx={{
          width: "40px",
          paddding: "8px",
          backgroundColor: "rgb(243,246,255)",
          borderRadiu: "10px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={data.icon} width="30px" />
      </Box>

      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{
          fontSize: "1rem",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        {data.title}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontWeight: "400",
          fontSize: "0.9rem",
          color: "#909090",
        }}
      >
        {data.discription}
      </Typography>
    </Box>
  );
};
