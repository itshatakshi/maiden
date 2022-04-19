import * as React from "react";
import Card from "@mui/material/Card";
import logo2 from "../assets/logo2.png";
import Typography from "@mui/material/Typography";
import AddTaskIcon from "@mui/icons-material/AddTask";import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BalanceIcon from "@mui/icons-material/Balance";
const useStyles = makeStyles((theme) => ({
  content: {
    minHeight: 23.4,
    fontSize: "18px",
    margin: "20px 0",
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
function Card2() {
  const classes = useStyles();

  return (
    <Card style={{ margin: "80px 35px 80px 35px" }}>
      <div>
        <img
          src={logo2}
          style={{
            height: 120,
            width: 170,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 15,
          }}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AccessTimeFilledIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Develop new products and processes faster,and to improve existing
            products and processes.
          </Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AddTaskIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Decrease time to market, development and production costs,
            and improve quality and reliability.
          </Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <BalanceIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Make more informed decisions at each stage of the problem-solving
            process, and ultimately arrive at better solutions in less time.
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default Card2;
