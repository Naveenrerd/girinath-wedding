import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ICardData } from "./pictures";

export interface IUserCard {
  isSelected: boolean;
  cardData: ICardData;
}

const UserCard: React.FC<IUserCard> = ({ isSelected, cardData }) => {
  return (
    <Box
      sx={{
        transition: "all .5s linear",
        transform: isSelected ? "scale(1)" : "scale(0.90)",
        textShadow: "none",
      }}
    >
      <Card>
        <Box>
          <CardMedia
            component="img"
            height="140"
            image={cardData.pic}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardData.bio}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default UserCard;
