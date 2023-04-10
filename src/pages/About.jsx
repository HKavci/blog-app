import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "80%",
        marginTop: 4,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        padding: 5,
      }}
    >
      <Typography variant="h5" textAlign={"center"} mb={2}>
        Explorer's Blog
      </Typography>
      <Typography>
        Welcome to my blog! My name is Hakan, and I'm a passionate traveler who
        loves exploring new destinations and experiencing different cultures. I
        created this blog to share my adventures and provide inspiration for
        those who share the same passion for travel.{" "}
      </Typography>
      <Typography>
        On this blog, you'll find a variety of travel-related content, including
        destination guides, travel tips, hotel reviews, and more. I strive to
        provide comprehensive and honest information to help you plan your next
        adventure.{" "}
      </Typography>
      <Typography>
        Traveling has always been a big part of my life. It has allowed me to
        broaden my horizons, meet new people, and create unforgettable memories.
        I believe that travel is not only a fun and enriching experience, but it
        also helps us to become more open-minded and understanding of different
        perspectives.
      </Typography>
      <Typography>
        Through this blog, I hope to inspire you to step out of your comfort
        zone and explore the world around you. Whether you're planning your
        first solo trip or looking for your next family vacation, I hope that my
        experiences and insights will help you to make the most of your travels.
      </Typography>
      <Typography>
        Thank you for visiting my blog, and I hope that you'll join me on my
        journey to discover the world!
      </Typography>
      <Typography fontFamily={"cursive"} mt={2} textAlign={"right"} mr={5}>
        <b>
          Hakan KAVCI <br /> April 2023
        </b>
      </Typography>
    </Container>
  );
};

export default About;
