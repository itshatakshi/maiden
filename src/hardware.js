import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeaderHardware from "./hardwarepage/header";
import HardwareCards from "./hardwarepage/hardwarecards";
import HardwareImageList from "./hardwarepage/hardwareimagelist";

function Hardware() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: "black" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeaderHardware />
        </Grid>

        <Grid item xs={12}>
          <HardwareCards />
        </Grid>
        <Grid item xs={12}>
          <HardwareImageList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hardware;
