import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import { CreatePageList } from "./CreatePageList";

export const aboutList = ["About v.1", "About v.2"];
const servicesList = [
  "Services v.1",
  "Services v.2",
  "Service Details v.1",
  "Service Details v.2",
];
export const BlogList = [
  "List View with Sidebar",
  "Grid View with Sidebar",
  "List View no Sidebar",
  "Grid View no Sidebar",
  "Simple Feed",
  "Single Post",
  "Podcast",
];
export const PricingList = ["Pricing Page"];
export const contactList = ["Contacts v.1", "Contacts v.2", "Contacts v.3"];
export const Specialty = ["404 Error v.1", "404 Error v.2"];

export const PagesDropDown = () => {
  return (
    <Card
      sx={{
        minWidth: "620px",
        position: "absolute",
        display: "flex",
        top: "35px",
        zIndex: "20",
      }}
    >
      <CardContent
        sx={{
          height: "320px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", gap: "80px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <CreatePageList titleList={aboutList} heading={"About"} />
            <CreatePageList titleList={servicesList} heading={"Services"} />
          </Box>
          <CreatePageList titleList={BlogList} heading={"Blog"} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <CreatePageList titleList={PricingList} heading={"Pricing"} />
            <CreatePageList titleList={contactList} heading={"Contacts"} />
            <CreatePageList titleList={Specialty} heading={"Specialty"} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
