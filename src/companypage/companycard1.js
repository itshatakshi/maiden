import * as React from "react";
import Card from "@mui/material/Card";
import logo1 from "../assets/logo1.png";
import Typography from "@mui/material/Typography";
import SensorsIcon from "@mui/icons-material/Sensors";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupIcon from "@mui/icons-material/Group";

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
function CompanyCard1() {
  const classes = useStyles();

  return (
    <Card style={{ margin: "80px 35px 80px 35px" }}>
      <div>
        <h2 style={{ textAlign: "center", color: "#008fc8" }}>
          Government authorities
        </h2>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <SensorsIcon />
        </div>
        <div className={classes.text}>
          <Typography>Waste Bins Sensors</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AutoDeleteIcon />
        </div>
        <div className={classes.text}>
          <Typography>Smart Waste bin management</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <LocalShippingIcon />
        </div>
        <div className={classes.text}>
          <Typography>Vehicle Tracking and fleet management</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <GroupIcon />
        </div>
        <div className={classes.text}>
          <Typography>Manpower Management</Typography>
        </div>
      </div>
    </Card>
  );
}

export default CompanyCard1;
