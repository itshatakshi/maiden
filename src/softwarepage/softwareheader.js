import * as React from "react";
import Grid from "@mui/material/Grid";
import softwaress from "../assets/softwaress.png";
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

function HeaderSoftware() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img
          src={softwaress}
          style={{
            width: "70vw",
            marginTop: "150px",
            borderRadius: 25,
            marginLeft: "20px",
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
            <h1 style={{ color: "white" }}>
              Maiden Easy Design's BluGauge Software
            </h1>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography>
                  cloud driven platform for smart waste management
                </Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography>
                  Monitor, Manage & Analyze, All In One Place
                </Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography> Real-Time Status</Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography> Auto-Generated Notifications</Typography>
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.icon}>
                <CheckCircleOutlineIcon />
              </div>
              <div className={classes.text}>
                <Typography> Optimize Collection Routines</Typography>
              </div>
            </div>
            <br />
            Users can optimize collection routines, measure and benchmark
            operations, and realize location- based waste patterns (volume, fill
            rate, collection activity) across BluGauge smart waste monitoring system.
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HeaderSoftware;
