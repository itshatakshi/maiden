import * as React from "react";
import Grid from "@mui/material/Grid";
import sensorimg from "../assets/sensorimg.png";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: 23.4,
    fontSize: "18px",
    margin: "2px 0",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    color: "white",
  },
  icon: {
    width: "23.4px",
    float: "left",
    lineHeight: "1.3",
    margin: 10,
    color: "#008fc8",
  },
  text: {
    padding: "0 3px",
    flex: 1,
    alignSelf: "flex-start",
    margin: 10,
    colour: "white",
  },
}));

function HeaderHaardware() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img
          src={sensorimg}
          style={{
            width: "50vw",
            marginTop: "150px",
            borderRadius: 25,
            marginLeft: "60px",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Card
          style={{
            marginTop: "150px",
            marginLeft: 70,
            padding: 30,
            background: "black",
          }}
        >
          <div style={{ color: "white" }}>
            The smart sensor can be used to detect the following
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography>status of waste bin</Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography> Full-empty</Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography> Flame risk</Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography> Inclined or not</Typography>
              </div>
            </div>
            <br />
            Through built-in wireless module (GPRS, 4G), users can monitor the
            waste bin remotely. Based on low power consumption, battery can work
            for more than 8 years at 4 times report per day.
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HeaderHaardware;
