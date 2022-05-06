/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import naveen from "../../assets/naveen.jpg";
import gopi from "../../assets/gopi.jpg";
import giri6 from "../../assets/6.jpg";
import UserCard from "./user-card";

export interface ICardData {
  pic: string;
  title: string;
  bio: string;
}

var Carousel = require("react-responsive-carousel").Carousel;

const cardList: ICardData[] = [
  {
    pic: giri6,
    title: "Girinath",
    bio: "International playboy. Girl magnet. Some people think he may be gay because of his relationship with Gopinath.",
  },
  {
    pic: gopi,
    title: "Gopinath",
    bio: "Loosu koothi. Kirukku koothi. Ootta vaai. Having gay relationship history with Vivek, Giri and others.",
  },
  {
    pic: naveen,
    title: "Naveen Kumar",
    bio: "Smart boy. Star of the group. Peacefully living in Kotagiri but constantly giving ideas to Gopi and Giri.",
  },
];

const Pictures: React.FC = () => {
  const [selectedItemnIndex, setselectedItemnIndex] = useState(0);
  return (
    <Box mt={8} textAlign="left">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: 700, color: "#FFD700", ml: "5px", fontSize: 30 }}
      >
        Bio:
      </Typography>
      <Carousel
        showArrows={true}
        infiniteLoop
        showStatus={false}
        centerMode
        showThumbs={false}
        onChange={setselectedItemnIndex}
      >
        {cardList.map((cardData, i) => (
          <UserCard
            isSelected={selectedItemnIndex === i}
            cardData={cardData}
            key={cardData.title}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default Pictures;
