import React, { FC } from "react";
import {Typography, Box } from "@mui/material";

interface CreatePageListI {
  titleList: string[];
  heading: string;
}
export const CreatePageList: FC<CreatePageListI> = (props) => {
  const { titleList, heading } = props;
  return (
    <Box sx={{ marginRight: "20px" }}>
      <Typography variant="h5" sx={{ fontWeight: "700", fontSize: "17px" }}>
        {heading}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "10px",
        }}
      >
        {titleList.map((title, index) => (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: "15px",
              fontWeight: "500",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
            key={index}
          >
            {title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
