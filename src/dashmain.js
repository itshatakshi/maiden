import { useState } from "react";
import React from "react";
import Appbar from "./appbar";
import Home from "./home";
import Hardware from "./hardware";
import Software from "./software";
import Solutions from "./solutions";
import Company from "./company";
import Contact from "./contact";
import Grid from "@mui/material/Grid";

function Dashmain() {
  const [comp, setcomp] = useState("home");

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={12} xs={12}>
          {" "}
          <Appbar compChange={setcomp} />
        </Grid>
        {comp === "home" && (
          <Grid item sm={12} xs={12}>
            <Home />
          </Grid>
        )}
        {comp === "hardware" && (
          <Grid item sm={12} xs={12}>
            <Hardware />
          </Grid>
        )}
        {comp === "software" && (
          <Grid item sm={12} xs={12}>
            <Software />
          </Grid>
        )}
        {comp === "solutions" && (
          <Grid item sm={12} xs={12}>
            <Solutions />
          </Grid>
        )}
        {comp === "company" && (
          <Grid item sm={12} xs={12}>
            <Company />
          </Grid>
        )}
        {comp === "contact" && (
          <Grid item sm={12} xs={12}>
            <Contact />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
export default Dashmain;
