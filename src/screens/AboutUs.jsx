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
    name: "Mudasir Ahmed",
    title: "Software Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/65568013?v=4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non risus sed dui ullamcorper euismod ac vel mauris. Donec sodales pharetra lorem in placerat. Duis quis magna vitae elit rhoncus tempor.",
  },
  {
    name: "Rauf shams malick",
    title: "Supervisor",
    imageSrc:
      "https://khi.nu.edu.pk/wp-content/uploads/2022/02/Dr.-Rauf-Ahmed-Shams-Malik-Assistant-Professor.jpg",
    description:
      "A Data Scientist and a data intensive problem slover. Expertise in understanding complex data oriented problems and develoment of business strategies around data. Founder of social media analytics product (InsideTrneds)...",
  },
  {
    name: "USAMA KHAN",
    title: "Backend Developer",
    imageSrc: "https://avatars.githubusercontent.com/u/96444294?v=4",
    description:
      "I love to create beautiful, engaging, and mobile-friendly  websites and mobile app.Strong engineering professional with a Bachelor of Science - BS focused in Computer Science from National University of Computer and Emerging Sciences.",
  },
  {
    name: "Sayed Hassan Ali",
    title: "Project Manager",
    imageSrc: "https://avatars.githubusercontent.com/u/65040329?v=4",
    description: "Software Engineer | PHP | .Net | C#.",
  },
];
