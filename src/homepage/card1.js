import * as React from "react";
import Card from "@mui/material/Card";
import logo1 from "../assets/logo1.png";
import Typography from "@mui/material/Typography";
import BarChartIcon from "@mui/icons-material/BarChart";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationCityIcon from "@mui/icons-material/LocationCity";

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
    color:'#008fc8'
  },
  text: {
    padding: "0 3px",
    flex: 1,
    alignSelf: "flex-start",
    margin: 15,
  },
}));
function Card1() {
  const classes = useStyles();

  return (
    <Card style={{ margin: "80px 35px 80px 35px" }}>
      <div>
        <img
          src={logo1}
          style={{
            height: 120,
            width: 120,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
          }}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AutoGraphIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Save time and money by using smart waste collection bins and systems
            equipped with fill level sensors. Reduces infrastructure, operating
            and maintenance costs by upto 30%
          </Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <LocalShippingIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Decreases traffic flow and consecutively less air pollution as
            result of less waste collection vehicles on the roads.
          </Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <LocationCityIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Keeps our surroundings clean and green and free from bad odour of
            wastes, emphasizes on healthy environment and keep cities more
            beautiful.
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default Card1;
