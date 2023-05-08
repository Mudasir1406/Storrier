import React from "react";
import { Typography, Grid } from "@mui/material";
import { InfoCard } from "../components";

const AboutUs = () => {
  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Grid item xs={12} md={8}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          About Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
          We are a team of passionate individuals dedicated to creating
          high-quality and innovative products for our customers. Our goal is to
          make your life easier by providing solutions that solve your everyday
          problems.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Our Mission
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
          Our mission is to improve the lives of our customers by providing them
          with products that are easy to use, reliable, and affordable. We
          believe that everyone deserves access to technology that can help them
          in their daily lives, and we are committed to making that a reality.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Our Team
        </Typography>
        <Grid container spacing={2}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} key={member.name}>
              <InfoCard
                name={member.name}
                title={member.title}
                imageSrc={member.imageSrc}
                description={member.description}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

const teamMembers = [
  {
    name: "John Doe",
    title: "Software Developer",
    imageSrc: "https://picsum.photos/400/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non risus sed dui ullamcorper euismod ac vel mauris. Donec sodales pharetra lorem in placerat. Duis quis magna vitae elit rhoncus tempor.",
  },
  {
    name: "Jane Doe",
    title: "Designer",
    imageSrc: "https://picsum.photos/400/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non risus sed dui ullamcorper euismod ac vel mauris. Donec sodales pharetra lorem in placerat. Duis quis magna vitae elit rhoncus tempor.",
  },
];
