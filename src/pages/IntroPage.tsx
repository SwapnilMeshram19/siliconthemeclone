import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { ToolsCard } from "../components/ToolsCard";
import { LandingPages, MoreSiliconFeatures } from "../assets/Data";
import { LandingPagesCard } from "../components/LandingPagesCard";
import { SiliconFeaturesCard } from "../components/SiliconFeaturesCard";

export const IntroPage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right,rgb(25,20,50),rgb(188,205,229))",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { md: "25%" },
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: { md: "0px 8%" },
            paddingBottom: "50px",
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "white",
              marginTop: "30px",
            }}
          >
            Silicon
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontWeight: "400",
              fontSize: "1.5rem",
              color: "rgb(188,186,198)",
              textAlign: { md: "left", sm: "center", xs: "center" },
            }}
          >
            Multipurpose Business / Technology Template
          </Typography>

          <Box sx={{ marginTop: "30px" }}>
            <img src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/switcher.svg" />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: { sm: "center", md: "left", xs: "center" },
              alignItems: "center",
              cursor: "pointer",
              marginBottom: "50px",
              marginTop: "20px",
              textAlign: { md: "left", sm: "center", xs: "center" },
            }}
          >
            <KeyboardArrowDownRoundedIcon
              sx={{
                backgroundColor: "#2e2943",
                padding: "10px",
                borderRadius: "40px",
                color: "rgb(188,186,198)",
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                fontWeight: "400",
                fontSize: "1.1rem",
                color: "rgb(188,186,198)",
                textAlign: { md: "left", sm: "center", xs: "center" },
              }}
            >
              View Landings
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/screens01.png"
            style={{
              maxWidth: "30%",
              position: "absolute",
              top: "0px",
              right: "30%",
            }}
          />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <img
            src="https://silicon.madrasthemes.com/wp-content/uploads/2022/01/screens02.png"
            style={{
              maxWidth: "30%",
              position: "absolute",
              top: "0px",
              right: "0",
            }}
          />
        </Box>
      </Box>

      <ToolsCard />
      <Box>
        <Box
          sx={{
            textAlign: "center",
            paddingTop: "100px",
            marginBottom: "50px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "2.5res",
              fontWeight: "700",
              marginBottom: "10px",
            }}
          >
            Landing Pages
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontWeight: "400",
              fontSize: "1.2rem",
              color: "#909090",
            }}
          >
            Choose from pre-built layouts of our unique landing pages
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {LandingPages.map((elements) => (
            <LandingPagesCard data={elements} />
          ))}
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            paddingTop: "100px",
            marginBottom: "70px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "2.5res",
              fontWeight: "700",
              marginBottom: "60px",
            }}
          >
            More Silicon Features
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "25px",
              justifyContent: "center",
            }}
          >
            {MoreSiliconFeatures.map((elements) => (
              <SiliconFeaturesCard data={elements} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
