import React, { useState } from "react";
import logo from "../assets/logo.svg";
import {AppBar,Box,Toolbar, Typography,Container, Button} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LandingsDropDown } from "./navbarComponents/LandingsDropDown";
import { PagesDropDown } from "./navbarComponents/PagesDropDown";
import { PortfolioDropDown } from "./navbarComponents/PortfolioDropDown";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerRight } from "./navbarComponents/Drawer";

const menu_items_title = {
  color: "black",
  background: "white",
  "&:hover": { color: "rgb(99,102,241)" },
  cursor: "pointer",
};
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 60,
  height: 25,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 1,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#ffffff",
      transform: "translateX(32px)",
      "& .MuiSwitch-thumb:before": {
        backgroundColor: "#ffffff",
        borderRadius: "20px",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "rgb(99,102,241)" : "rgb(99,102,241)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#ffffff",
    width: 20,
    height: 20,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgb(99,102,241)" : "rgb(99,102,241)",
    borderRadius: 20,
  },
}));

export const Navbar = () => {
  const [landingsDropdown, setLandingsDropdown] = useState<boolean>(false);
  const [pagesDropdown, setPagesDropdown] = useState<boolean>(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        border: "none",
        color: "black",
        padding: { md: "0px 40px", xm: "0px" },
        boxShadow: "inset 0 -0.2px 0 0 gray",
      }}
      elevation={0}
    >
      <Container maxWidth={false}>
        <Toolbar>
          <Box sx={{ display: "flex", position: "relative" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <img src={logo} alt="silicon logo" style={{ width: "40px" }} />
                <Typography
                  sx={{
                    color: "rgb(19,16,34)",
                    fontSize: "1.375rem",
                    fontWeight: "600",
                  }}
                >
                  Silicon
                </Typography>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex", sm: "none" },
                  gap: "15px",
                  marginLeft: "40px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    cursor: "pointer",
                    padding: "5px",
                    gap: "2px",
                    "&:hover": { color: "rgb(99,102,241)" },
                  }}
                  onClick={() => setLandingsDropdown(!landingsDropdown)}
                  onMouseEnter={() => setLandingsDropdown(true)}
                  onMouseLeave={() => setLandingsDropdown(false)}
                >
                  <Typography sx={menu_items_title}>Landings</Typography>
                  <KeyboardArrowDownIcon />
                  {landingsDropdown && <LandingsDropDown />}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    cursor: "pointer",
                    padding: "5px",
                    gap: "2px",
                    "&:hover": { color: "rgb(99,102,241)" },
                  }}
                  onClick={() => setPagesDropdown(!pagesDropdown)}
                  onMouseEnter={() => setPagesDropdown(true)}
                  onMouseLeave={() => setPagesDropdown(false)}
                >
                  <Typography sx={menu_items_title}>Pages</Typography>
                  <KeyboardArrowDownIcon />
                  {pagesDropdown && <PagesDropDown />}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    cursor: "pointer",
                    padding: "5px",
                    gap: "2px",
                    "&:hover": { color: "rgb(99,102,241)" },
                  }}
                  onClick={() => setPortfolioDropdown(!portfolioDropdown)}
                  onMouseEnter={() => setPortfolioDropdown(true)}
                  onMouseLeave={() => setPortfolioDropdown(false)}
                >
                  <Typography sx={menu_items_title}>Portfolio</Typography>
                  <KeyboardArrowDownIcon />
                  {portfolioDropdown && <PortfolioDropDown />}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    padding: "5px",
                    "&:hover": { color: "rgb(99,102,241)" },
                  }}
                >
                  <Typography sx={menu_items_title}>Support</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    padding: "5px",
                    "&:hover": { color: "rgb(99,102,241)" },
                  }}
                >
                  <Typography sx={menu_items_title}>Docs</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                position: "relative",
                right: { md: "-45%", sm: "-35%", xs: "-7%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { md: "10px", sm: "8px", xs: "0px" },
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    background: "white",
                    fontSize: { xs: "15px", sm: "15px" },
                  }}
                >
                  Light
                </Typography>

                <MaterialUISwitch sx={{ m: 1 }} defaultChecked />

                <Typography
                  sx={{
                    color: "#848484",
                    background: "white",
                    fontSize: { xs: "15px", sm: "15px" },
                  }}
                >
                  Dark
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  padding: { md: "8px 20px", sm: "0px,5px", xs: "0px, 5px" },
                  backgroundColor: "rgb(99,102,241)",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#3336ca" },
                  fontSize: { xs: "10px", md: "14px", sm: "10px" },
                }}
                startIcon={
                  <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: "5px" } }} />
                }
              >
                Buy now
              </Button>
            </Box>
            <MenuIcon
              sx={{
                display: { md: "none", xs: "block", sm: "block" },
                position: "absolute",
                right: { sm: "-50%", xs: "-25%" },
                top: "10px",
                cursor: "pointer",
              }}
              onClick={() => setOpenDrawer(true)}
            />
          </Box>
          <DrawerRight setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
