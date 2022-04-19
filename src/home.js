import { makeStyles } from "@mui/styles";
import * as React from "react";
import ImageSlider from "./homepage/carousel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card1 from "./homepage/card1";
import Card2 from "./homepage/card2";
import Card3 from "./homepage/card3";



function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ImageSlider />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card1 />
          </Grid>
          <Grid item xs={4}>
            <Card2 />
          </Grid>
          <Grid item xs={4}>
            <Card3 />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
