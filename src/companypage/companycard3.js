import * as React from "react";
import Card from "@mui/material/Card";
import logo1 from "../assets/logo1.png";
import Typography from "@mui/material/Typography";
import GrassIcon from "@mui/icons-material/Grass";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

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
function CompanyCard3() {
  const classes = useStyles();

  return (
    <Card style={{ margin: "80px 35px 80px 35px" }}>
      <div>
        <h2 style={{ textAlign: "center", color: "#008fc8" }}>Farming </h2>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <GrassIcon />
        </div>
        <div className={classes.text}>
          <Typography>Crops Yield predictions.</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <MultilineChartIcon />
        </div>
        <div className={classes.text}>
          <Typography>Soil degradation prediction.</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AgricultureIcon />
        </div>
        <div className={classes.text}>
          <Typography>Logistics</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <CurrencyRupeeIcon />
        </div>
        <div className={classes.text}>
          <Typography>Price predictions</Typography>
        </div>
      </div>
    </Card>
  );
}

export default CompanyCard3;
