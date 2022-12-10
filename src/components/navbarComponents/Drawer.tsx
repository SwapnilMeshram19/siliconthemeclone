import React, { FC, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {Box,Typography, Divider} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { landingsMenutitles } from "./LandingsDropDown";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";

interface rightDrawerI {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  openDrawer: boolean;
}

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const DrawerRight: FC<rightDrawerI> = ({
  setOpenDrawer,
  openDrawer,
}) => {
  const theme = useTheme();
  const [expandedLandingPage, setExpandedLandingPage] =
    useState<boolean>(false);
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: "300px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "300px",
          },
        }}
        variant="persistent"
        anchor="right"
        open={openDrawer}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Menu</Typography>
          <CloseIcon
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenDrawer(false)}
          />
        </DrawerHeader>
        <Divider />

        {/* Menu Items */}

        <Box sx={{ padding: "10px" }}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              cursor: "pointer",
              padding: "5px",
              gap: "2px",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
            onClick={() => setExpandedLandingPage(!expandedLandingPage)}
          >
            <Typography
              sx={{
                color: "black",
                background: "white",
                "&:hover": { color: "rgb(99,102,241)" },
                cursor: "pointer",
              }}
            >
              Landings
            </Typography>
            <KeyboardArrowDownIcon />
          </Box>
          <Collapse
            in={expandedLandingPage}
            sx={{
              padding: "20px",
              paddingTop: "5px",
              borderLeft: "1px solid #c0c0c0",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
          >
            {landingsMenutitles.map((ele) => (
              <Typography sx={{ padding: "5px" }}>{ele}</Typography>
            ))}
          </Collapse>
        </Box>

        <Box sx={{ padding: "10px", marginTop: "-40px" }}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              cursor: "pointer",
              padding: "5px",
              gap: "2px",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
          >
            <Typography
              sx={{
                color: "black",
                background: "white",
                "&:hover": { color: "rgb(99,102,241)" },
                cursor: "pointer",
              }}
            >
              Pages
            </Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
        <Box sx={{ padding: "10px", marginTop: "-15px" }}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              cursor: "pointer",
              padding: "5px",
              gap: "2px",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
          >
            <Typography
              sx={{
                color: "black",
                background: "white",
                "&:hover": { color: "rgb(99,102,241)" },
                cursor: "pointer",
              }}
            >
              Portfolio
            </Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
        <Box sx={{ padding: "10px", marginTop: "-15px" }}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              cursor: "pointer",
              padding: "5px",
              gap: "2px",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
          >
            <Typography
              sx={{
                color: "black",
                background: "white",
                "&:hover": { color: "rgb(99,102,241)" },
                cursor: "pointer",
              }}
            >
              Support
            </Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
        <Box sx={{ padding: "10px", marginTop: "-15px" }}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              cursor: "pointer",
              padding: "5px",
              gap: "2px",
              "&:hover": { color: "rgb(99,102,241)" },
            }}
          >
            <Typography
              sx={{
                color: "black",
                background: "white",
                "&:hover": { color: "rgb(99,102,241)" },
                cursor: "pointer",
              }}
            >
              Docs
            </Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
