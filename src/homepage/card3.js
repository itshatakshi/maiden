import * as React from "react";
import Card from "@mui/material/Card";
import logo3 from "../assets/logo3.png";
import Typography from "@mui/material/Typography";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import { makeStyles } from "@mui/styles";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
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
function Card3() {
  const classes = useStyles();

  return (
    <Card style={{ margin: "80px 35px 80px 35px" }}>
      <div>
        <img
          src={logo3}
          style={{
            height: 120,
            width: 120,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 15,
          }}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <ResetTvIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Inrease production efficiency (set-up time and errors decrease) and
            real time monitoring (quality increase and scrap loss reduction).
          </Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <AutoModeIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            Continuous monitoring of machinery and plant conditions to find and
            correct in advance abnormal behaviors, possible cause of breakdowns.
          </Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.icon}>
          <DownloadDoneIcon />
        </div>
        <div className={classes.text}>
          <Typography>
            internal and external for the management, labeling and traceability
            of products.
          </Typography>
        </div>
      </div>
    </Card>
  );
}

export default Card3;
