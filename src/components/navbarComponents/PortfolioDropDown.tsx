import * as React from "react";
import { Card, CardContent, Typography} from "@mui/material";

export const portfolioList = [
  "Grid View",
  "List View",
  "Slider View",
  "Single Project",
];

export const PortfolioDropDown = () => {
  return (
    <Card
      sx={{
        minWidth: "200px",
        position: "absolute",
        display: "flex",
        top: "35px",
        zIndex: "20",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {portfolioList.map((title, index) => (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
            key={index}
          >
            {title}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
