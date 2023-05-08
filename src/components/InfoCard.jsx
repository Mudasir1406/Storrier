import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const InfoCard = ({ name, title, imageSrc, description }) => {
  return (
    <Card sx={styles.contanier}>
      <CardMedia component="img" height="200" image={imageSrc} alt={name} />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

const styles = {
  contanier: {
    margin: 10,
    boxShadow: "1px 2px 20px rgba(0,0,0,0.5)",
  },
};
