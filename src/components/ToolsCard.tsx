import * as React from "react";
import {Card,CardContent,CardMedia, Typography,Box} from "@mui/material";
import figmafiles from "../assets/figmafiles.png";
import uiflexible from "../assets/uiflexible.png";
import lightDarkMode from "../assets/lightDarkMode.png";
import lifetimeUpdate from "../assets/lifetimeUpdate.png";

export const ToolsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Card
        sx={{
          maxWidth: 270,
          height: "300px",
          padding: "20px",
          border: "none",
          boxShadow: "none",
          "&:hover": { boxShadow: "5px 5px 18px #d8d8d8" },
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={lightDarkMode}
          alt={"Light / Dark Mode"}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: "1.2rem",
              textAlign: "center",
              fontWeight: "700",
              color: "rgb(93,105,140)",
            }}
          >
            {"Light / Dark Mode"}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 270,
          height: "300px",
          padding: "20px",
          border: "none",
          boxShadow: "none",
          "&:hover": { boxShadow: "5px 5px 18px #d8d8d8" },
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={figmafiles}
          alt={"Figma Files Included"}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: "1.2rem",
              textAlign: "center",
              fontWeight: "700",
              color: "rgb(93,105,140)",
            }}
          >
            {"Figma Files Included"}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 270,
          height: "300px",
          padding: "20px",
          border: "none",
          boxShadow: "none",
          "&:hover": { boxShadow: "5px 5px 18px #d8d8d8" },
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={uiflexible}
          alt={"100+ UI Flexible Sections"}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: "1.2rem",
              textAlign: "center",
              fontWeight: "700",
              color: "rgb(93,105,140)",
            }}
          >
            {"100+ UI Flexible Sections"}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 270,
          height: "300px",
          padding: "20px",
          border: "none",
          boxShadow: "none",
          "&:hover": { boxShadow: "5px 5px 18px #d8d8d8" },
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={lifetimeUpdate}
          alt={"Free Lifetime Updates"}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: "1.2rem",
              textAlign: "center",
              fontWeight: "700",
              color: "rgb(93,105,140)",
            }}
          >
            {"Free Lifetime Updates"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
