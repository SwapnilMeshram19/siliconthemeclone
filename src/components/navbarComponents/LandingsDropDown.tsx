import React from "react";
import landings from "../../assets/landings.jpg";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const landingsMenutitles = [
  "Templat Intro Page",
  "Mobile App Showcase",
  "Mobile App Showcase v.2",
  "Startup",
  "SaaS v.1",
  "SaaS v.2",
  "SaaS v.3",
  "Financial Consulting",
  "Medical",
  "IT (Software) Company",
  "Conference",
  "Digital Agency",
  "Blog Homepage",
];
export const LandingsDropDown = () => {
  return (
    <Card
      sx={{
        minWidth: "700px",
        position: "absolute",
        display: "flex",
        top: "35px",
        zIndex: "20",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="340px"
        image={landings}
      />
      <CardContent
        sx={{
          width: "160%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {landingsMenutitles.map((title, index) =>
          title == "Startup" ? (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ "&:hover": { color: "rgb(99,102,241)" } }}
              key={index}
            >
              {title}
              <span
                style={{
                  marginLeft: "10px",
                  background: "#6fd787",
                  fontSize: "10px",
                  letterSpacing: "1px",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "400",
                  padding: "4px 6px",
                }}
              >
                new
              </span>
            </Typography>
          ) : (
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
          )
        )}
      </CardContent>
    </Card>
  );
};
