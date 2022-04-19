import * as React from "react";
import Card from "@mui/material/Card";
import logo1 from "../assets/logo1.png";
import Typography from "@mui/material/Typography";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: 23.4,
    fontSize: "18px",
    margin: "2px 0",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  icon: {
    width: "23.4px",
    float: "left",
    lineHeight: "1.3",
    margin: 15,
    color: "#008fc8",
  },
  text: {
    padding: "0 3px",
    flex: 1,
    alignSelf: "flex-start",
    margin: 15,
  },
}));
function CompanyCard2() {
  const classes = useStyles();

  return (
    <Card style={{ margin: "80px 35px 80px 35px" }}>
      <div>
        <h2 style={{ textAlign: "center", color: "#008fc8" }}>Institutions </h2>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <HomeWorkIcon />
        </div>
        <div className={classes.text}>
          <Typography>Research Institutions</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AddBusinessIcon />
        </div>
        <div className={classes.text}>
          <Typography>Process based Organisations.</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <PrecisionManufacturingIcon />
        </div>
        <div className={classes.text}>
          <Typography>Industry 4 management</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <SettingsIcon />
        </div>
        <div className={classes.text}>
          <Typography>Product design simulations</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AdminPanelSettingsIcon />
        </div>
        <div className={classes.text}>
          <Typography>Smart Homes</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <HealthAndSafetyIcon />
        </div>
        <div className={classes.text}>
          <Typography>Safety products for two wheelers riders</Typography>
        </div>
      </div>
    </Card>
  );
}

export default CompanyCard2;
