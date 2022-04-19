import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import hardwareimage1 from "../assets/hardwareimg1.png";
import hardwareimage2 from "../assets/hardwareimg2.jpg";
import hardwareimage3 from "../assets/hardwareimg3.jpg";
import hardwareimage4 from "../assets/hardwareimg4.jpg";
import hardwareimage5 from "../assets/hardwareimg5.jpg";
import Grid from "@mui/material/Grid";

const itemData = [
  {
    img: hardwareimage1,
    title: "1",
  },
  {
    img: hardwareimage2,
    title: "2",
  },
  {
    img: hardwareimage3,
    title: "3",
  },
  {
    img: hardwareimage4,
    title: "4",
  },
  {
    img: hardwareimage5,
    title: "5",
  },
];

function hardwareImageList() {
  return (
    <Box
      sx={{
        width: "80vw",
        marginRight: "auto",
        marginLeft: "auto",
        height: "auto",
        overflowY: "scroll",
        marginTop: 10,
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default hardwareImageList;
