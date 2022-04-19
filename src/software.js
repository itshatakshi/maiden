import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SoftwareHeader from "./softwarepage/softwareheader";
import SoftwareCards from "./softwarepage/softwarecards";

function Software() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: "black" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SoftwareHeader />
        </Grid>
        <Grid item xs={12}>
          <SoftwareCards />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Software;
