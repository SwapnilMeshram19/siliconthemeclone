import {Box, Typography, Paper, InputBase, IconButton,Button} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const Footer = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        paddingTop: "100px",
        paddingBottom: "80px",
        borderTop: "1px solid #d5d5d5",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: "2.5res",
          fontWeight: "700",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Subscribe to Our Newsletter
      </Typography>

      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: { md: "40%", sm: "60%", xs: "80%" },
          margin: "auto",
          border: "solid 1px #c7c7c7",
          boxShadow: "none",
        }}
      >
        <IconButton sx={{ p: { md: "10px" } }} aria-label="menu">
          <MailOutlineIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Your email"
          inputProps={{ "aria-label": "Your email" }}
        />

        <Button
          sx={{
            backgroundColor: "rgb(99,102,241)",
            color: "white",
            margin: "0px",
            padding: "10px 25px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#3336ca" },
          }}
        >
          Subscribe
        </Button>
      </Paper>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          fontWeight: "400",
          fontSize: "1rem",
          color: "rgb(150,151,178)",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        &#169; All rights reserved. Made with by &#10084; MadrasThemes
      </Typography>
    </Box>
  );
};
